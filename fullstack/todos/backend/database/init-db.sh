#!/bin/sh
# install the psql command on the host first
psql -h localhost -p 5432 -U admin todos -f initialize-database.pgsql
