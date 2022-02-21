DROP DATABASE IF EXISTS ecommerce_db;
CREATE DATABASE ecommerce_db;

CREATE TABLE users (
  id INT NOT NULL,
  username VARCHAR(30) NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  created_at TIMESTAMP,
  modified_at TIMESTAMP,
  password TEXT,
);

