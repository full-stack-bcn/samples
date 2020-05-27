
Postgres Sample Data
--------------------

To start the containers (postres and pgadmin4) do:
```sh
docker-compose up -d
```

Once they're up, restore the data into the database:
```sh
./restore-database.sh
```

To connect to the database:
```sh
export PGHOST=localhost 
export PGPORT=5432 
export PGUSER=postgres 
export PGPASSWORD=postgres 
export PGDATABASE=dvdrental 
psql
```

If you keep the variables in you ``.bashrc`` you will be able to use ``psql``
directly.