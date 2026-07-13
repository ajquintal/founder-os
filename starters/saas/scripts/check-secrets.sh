#!/usr/bin/env bash
# =============================================================================
# Secret-guard — blocks commits that contain likely real secrets.
#
# Install as a pre-commit hook (run once after cloning):
#   ln -sf ../../scripts/check-secrets.sh .git/hooks/pre-commit
#   chmod +x scripts/check-secrets.sh
#
# Or run on demand:
#   npm run secrets:check
#
# Convention: secrets live in environment variables ONLY, never in code or
# commits. Placeholders in .env.example are safe (they don't match live patterns).
# =============================================================================
set -euo pipefail

# Scan STAGED changes (what is about to be committed). On the very first commit
# there is no HEAD, so diff the index against the empty tree instead.
if git rev-parse --verify HEAD >/dev/null 2>&1; then
  BASE=HEAD
else
  BASE=$(git hash-object -t tree /dev/null)
fi
DIFF=$(git diff --cached --diff-filter=ACM -U0 "$BASE" || true)

# Patterns for *real* secrets. Test-mode / placeholder values won't match.
PATTERNS=(
  'sk_live_[0-9a-zA-Z]{16,}'                                       # Stripe live secret key
  'rk_live_[0-9a-zA-Z]{16,}'                                       # Stripe live restricted key
  'whsec_[0-9a-zA-Z]{24,}'                                         # Stripe webhook signing secret
  'eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}' # JWT (e.g. service_role key)
  'AKIA[0-9A-Z]{16}'                                              # AWS access key id
  '-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----'               # private keys
)

FOUND=0
while IFS= read -r line; do
  # Only inspect added lines (leading '+', not the '+++' file header).
  [[ "$line" == +* && "$line" != +++* ]] || continue
  content=${line#+}
  for pat in "${PATTERNS[@]}"; do
    if printf '%s' "$content" | grep -Eq -e "$pat"; then
      echo "BLOCKED: possible secret matching /$pat/"
      echo "  $content"
      FOUND=1
    fi
  done
done <<< "$DIFF"

if [[ "$FOUND" -ne 0 ]]; then
  echo ""
  echo "Commit blocked by scripts/check-secrets.sh."
  echo "Move the secret to an environment variable. If this is a false positive,"
  echo "review carefully and re-run with 'git commit --no-verify'."
  exit 1
fi

echo "secret-guard: no secrets detected in staged changes."
