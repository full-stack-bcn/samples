#!/bin/bash

set -e

degit --force fivethirtyeight/russian-troll-tweets data

for i in 1 2 3 4 5; do
  docker exec russian-tweets \
    mongoimport \
      --username admin --password fullstack --authenticationDatabase admin \
      --db russian \
      --collection tweets \
      --type csv \
      --file /import-data/IRAhandle_tweets_${i}.csv \
      --headerline
done
