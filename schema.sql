DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
  );
  
SELECT * FROM products

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone X", "Electronics", 999.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("JavaScript is cool!", "Books", 14.99, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("backpack", "Back-To-School", 12.00, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("laptop", "Electronics", 599.00, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yoga Mat", "Sports", 9.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pencils", "Back-To-School", 1.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("alexa echo", "Electronics", 299.00, 175);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("play-doh", "Back-To-School", 3.25, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("video-games", "Toys & Games", 50.00, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("poetry-book", "Books", 13.55, 225);