#!/bin/sh

for collection in listings calendar reviews; do
  docker exec -it mongodb-airbnb-db-1 mongoimport /csv/$collection.csv -u admin -p fullstack --type csv -d airbnb -c $collection --headerline --drop --authenticationDatabase admin
done
