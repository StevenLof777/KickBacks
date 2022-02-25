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
  shoe_name VARCHAR(30) NOT NULL,
  price DECIMAL(5, 2) NOT NULL,
  category VARCHAR(30) NOT NULL,
  stock INT NOT NULL,
  featured BOOLEAN, 
  category_id INT not null,
  primary key(id),
  foreign key(category_id) references category(id)
);

CREATE TABLE shoes (
  id INT AUTO_INCREMENT NOT NULL,
  shoe_name VARCHAR(30) NOT NULL,
  price DECIMAL(5, 2) NOT NULL,
  category VARCHAR(30) NOT NULL,
  stock INT NOT NULL,
  featured BOOLEAN, 
  category_id INT not null,
  primary key(id),
  foreign key(category_id) references category(id)
);
-- Shoes
SELECT * FROM users;
INSERT INTO users (first_name, last_name, zip_code, email, password) 
values ('John', 'Doe', 12345, 'example@email.com', 'badpw');
-- How do I delete the row full of nulls
DELETE FROM users WHERE id = 1;

CREATE TABLE category (
  id INT AUTO_INCREMENT NOT NULL,
  username VARCHAR(30) NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
);

CREATE TABLE cart (
	id INT AUTO_INCREMENT NOT NULL,
)