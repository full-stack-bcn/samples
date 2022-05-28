
-- Borramos las tablas _si existen_
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS forums;

-- Creamos tabla de foros
CREATE TABLE forums (
  -- https://stackoverflow.com/a/47035250/540869
  forum_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  created TIMESTAMP DEFAULT now()
);

CREATE TABLE messages (
  message_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  forum_id INTEGER REFERENCES forums(forum_id),
  author VARCHAR(255) NOT NULL,
  text TEXT NOT NULL,
  created TIMESTAMP DEFAULT now()
);