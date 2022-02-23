DROP DATABASE IF EXISTS shoe_store_db;
CREATE DATABASE shoe_store_db;
USE shoe_store_db;

DROP TABLE users;
CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  zip_code INT(5) NOT NULL,
  -- How to validate
  email VARCHAR(30) NOT NULL UNIQUE,
  password VARCHAR(30) NOT NULL,
  created_at TIMESTAMP,
  modified_at TIMESTAMP,
  primary key(id)
);
SELECT * FROM users;

CREATE TABLE shoes (
  id INT AUTO_INCREMENT NOT NULL,
  username VARCHAR(30) NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  created_at TIMESTAMP,
  modified_at TIMESTAMP,
  password TEXT NOT NULL
);

CREATE TABLE category (
  id INT AUTO_INCREMENT NOT NULL,
  username VARCHAR(30) NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
);