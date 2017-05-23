
\c yilp_dev

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS location (
  id BIGSERIAL PRIMARY KEY,
  location VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS reviews (
  id BIGSERIAL PRIMARY KEY,
  review VARCHAR(255),
  location INTEGER REFERENCES location(id),
  user_id INTEGER REFERENCES users(id)
);