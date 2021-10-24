#!/bin/bash

set -xv

SCRIPT_DIR="$(dirname $0)"

# Goto repo root.
cd $SCRIPT_DIR

# Determine date command that can used.
if type "gdate" > /dev/null; then
  # Mac
  DATE_COMMAND="gdate"
else
  # Linux
  DATE_COMMAND="date"
fi

# Auto commit and push.
git add .
git diff --staged --exit-code
git commit -m "Auto-commit at $($DATE_COMMAND)"
git push -f
