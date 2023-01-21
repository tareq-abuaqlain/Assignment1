BEGIN;

DROP TABLE IF EXISTS product cascade;

CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL,
    category VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL
);

INSERT INTO product (product_name, price, category, image) VALUES ('T-shirt1', 100, 'T-shirt', 't-shirt.jpg');
INSERT INTO product (product_name, price, category, image) VALUES ('T-shirt2', 10, 'T-shirt', 't-shirt.jpg');
INSERT INTO product (product_name, price, category, image) VALUES ('T-shirt3', 200, 'T-shirt', 't-shirt.jpg');
INSERT INTO product (product_name, price, category, image) VALUES ('T-shirt4', 500, 'T-shirt', 't-shirt.jpg');
INSERT INTO product (product_name, price, category, image) VALUES ('Jeans1', 100, 'Jeans', 't-shirt.jpg');
INSERT INTO product (product_name, price, category, image) VALUES ('Jeans2', 200, 'Jeans', 't-shirt.jpg');
INSERT INTO product (product_name, price, category, image) VALUES ('Jeans3', 50, 'Jeans', 't-shirt.jpg');
INSERT INTO product (product_name, price, category, image) VALUES ('jacket1', 150, 'jacket', 't-shirt.jpg');
INSERT INTO product (product_name, price, category, image) VALUES ('jacket2', 300, 'jacket', 't-shirt.jpg');
INSERT INTO product (product_name, price, category, image) VALUES ('jacket3', 70, 'jacket', 't-shirt.jpg');

COMMIT;