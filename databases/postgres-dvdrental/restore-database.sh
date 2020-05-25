#!/bin/bash
PGUSER=postgres PGDATABASE=postgres PGHOST=localhost PGPASSWORD=postgres PGPORT=5432 psql -f ./dump/restore.sql
