#!/usr/bin/env bash

set -e
set -o pipefail
set -v

initialGitHash=$(git rev-list --max-parents=0 HEAD)
node ./studio-build.js $initialGitHash &

curl -s -X POST https://api.stackbit.com/project/5ea04711e14237001bd6cc4f/webhook/build/pull > /dev/null
npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/5ea04711e14237001bd6cc4f
curl -s -X POST https://api.stackbit.com/project/5ea04711e14237001bd6cc4f/webhook/build/ssgbuild > /dev/null
hugo
wait

curl -s -X POST https://api.stackbit.com/project/5ea04711e14237001bd6cc4f/webhook/build/publish > /dev/null
echo "Stackbit-build.sh finished build"
