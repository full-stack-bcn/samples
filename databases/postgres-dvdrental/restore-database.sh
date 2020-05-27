#!/bin/bash
docker exec -it postgres_dvdrental psql -U postgres -f /data/dump/restore.sql
