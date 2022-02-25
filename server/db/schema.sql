-- DROP DATABASE IF EXISTS shoe_store_db;
-- CREATE DATABASE shoe_store_db;
-- USE shoe_store_db;

-- DROP TABLE users;
-- CREATE TABLE users (
--   id INT AUTO_INCREMENT NOT NULL,
--   first_name VARCHAR(30) NOT NULL,
--   last_name VARCHAR(30) NOT NULL,
--   zip_code INT(5) NOT NULL,
--   -- How to validate
--   email VARCHAR(30) NOT NULL UNIQUE,
--   password VARCHAR(30) NOT NULL,
--   created_at TIMESTAMP,
--   modified_at TIMESTAMP,
--   primary key(id)
-- );
-- SELECT * FROM users;

-- DROP TABLE shoes;
-- CREATE TABLE shoes (
--   id INT AUTO_INCREMENT NOT NULL,
--   shoe_name VARCHAR(30) NOT NULL,
--   price DECIMAL(5, 2) NOT NULL,
--   stock INT NOT NULL,
--   featured BOOLEAN, 
--   category_id INT not null,
--   primary key(id),
--   foreign key(category_id) references categories(id)
-- );

-- -- Shoes
-- SELECT * FROM shoes;
-- INSERT INTO shoes (shoe_name, price, stock, featured, category_id) 
-- values ("Yeezy's", '120.00', 10, TRUE, '1'),
--        ("Jordan's", '200.00', 26, TRUE, '2'),
--        ('Converse', '60.00', 40, FALSE, '2'),
--        ("Van's", '60.00', 37, FALSE, '3'),
--        ("Dock Matins", '80.00', 12, FALSE, '2');

-- DELETE FROM users WHERE id = 1;

-- CREATE TABLE categories (
--   id INT AUTO_INCREMENT NOT NULL,
--   category VARCHAR(30) NOT NULL,
--   primary key(id)
-- );
-- INSERT INTO categories (category) 
-- values ("Men's"),
-- 	   ("Women's"),
--        ("Children's");
-- SELECT * FROM categories;       
       
-- -- values ("Men's", "Women's", "Boots", "Athletic" );


-- CREATE TABLE cart (
-- 	id INT AUTO_INCREMENT NOT NULL,
    
    
-- )