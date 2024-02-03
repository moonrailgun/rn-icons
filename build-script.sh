#!/bin/bash -eux


if [[ -f package-lock.json ]]; then
  echo "[ERROR] package-lock.json exists!"
  exit 1
fi

(cd packages/rn-icons/ && pnpm type-check)
time (cd packages/rn-icons/ && pnpm fetch)
time (cd packages/rn-icons/ && pnpm build)
echo VERSIONS; cat packages/rn-icons/VERSIONS
# (cd packages/_rn-icons_all/ && npm pack |& tail)
# (cd packages/_rn-icons_all-files/ && npm pack |& tail)

# (cd packages/preview-astro/ && pnpm build)
# (cd packages/demo/ && CI=true pnpm test && pnpm build)
# (cd packages/webpack4-test/ && CI=true pnpm test)
# (cd packages/ts-test/ && SKIP_PREFLIGHT_CHECK=true pnpm build)
