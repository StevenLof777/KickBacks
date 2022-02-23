-- Users
SELECT * FROM users;
INSERT INTO users (first_name, last_name, zip_code, email, password) 
values ('John', 'Doe', 12345, 'example@email.com', 'badpw');
-- How do I delete the row full of nulls
DELETE FROM users WHERE id = 1;