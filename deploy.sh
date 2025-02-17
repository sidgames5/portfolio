#!/usr/bin/env sh
set -e

npm run build
cd build
git add -A
git commit -m "new deployment"
if ! git show-ref --verify --quiet refs/heads/static; then
  git branch static
fi
git checkout static
git push -f origin static
cd ..
