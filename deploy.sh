#!/usr/bin/bash
set -e

npm run build

if git branch --list | grep -q 'static'; then
    git branch -D static
fi

if ! git subtree split --prefix static -b static; then
    echo "Subtree split failed."
    exit 1
fi

if ! git push origin static:static --force; then
    echo "Failed to push."
    git branch -D static
    exit 1
fi

git branch -D static