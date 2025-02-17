#!/usr/bin/env sh
set -e

npm run build
git checkout -b static
git add build
git commit -m "new deployment"
git push origin -u static
git checkout -b master