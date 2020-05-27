CREATE TABLE todos (
  id serial PRIMARY KEY,
  text text,
  done boolean DEFAULT FALSE
);

INSERT INTO todos (text)
  VALUES ('First todo'), ('Second todo');

