
Postgres Sample Data
--------------------

To start the containers (postres and pgadmin4) do:
```sh
docker compose up -d
```

Once they're up, restore the data into the database:
```sh
./restore-database.sh
```

To connect to the database:
```sh
./open-db-console.sh
```
