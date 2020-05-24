#!/bin/sh
psql -h localhost -p 5432 -U admin todos -f initialize-database.pgsql