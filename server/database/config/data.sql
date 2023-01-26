BEGIN;

DROP TABLE IF EXISTS product cascade;

CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL,
    category VARCHAR(255) NOT NULL,
    image TEXT NOT NULL
);
INSERT INTO product (product_name, price, category, image) VALUES ('T-shirt1', 100, 'T-shirt', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGuS7-FRFiKA_Y9IWes210hGIYoxAhdrGUvg&usqp=CAU');
INSERT INTO product (product_name, price, category, image) VALUES ('T-shirt2', 70, 'T-shirt', 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F17%2F3c%2F173c969034c3f54a650c63e81d0b95b7b8b239c4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D');
INSERT INTO product (product_name, price, category, image) VALUES ('T-shirt3', 200, 'T-shirt', 'https://static.massimodutti.net/3/photos//2023/V/0/1/p/6850/900/250/6850900250_1_1_16.jpg?t=1646750255506&impolicy=massimodutti-itxmediumhigh&imwidth=500&imformat=chrome');
INSERT INTO product (product_name, price, category, image) VALUES ('Jeans1', 90, 'Jeans', 'https://pyxis.nymag.com/v1/imgs/8b5/042/b649bd1daf5b9491ea3137244921766430-everlane-90s-cheeky.jpg');
INSERT INTO product (product_name, price, category, image) VALUES ('Jeans2', 200, 'Jeans', 'https://assets.zadig-et-voltaire.com/S/K/SKCD3002F_LIGHT_BLUE.jpg');
INSERT INTO product (product_name, price, category, image) VALUES ('Jeans3', 50, 'Jeans', 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F0b%2F8f%2F0b8fc6bc3f1b4d6284225a3a148b9a387df1bf42.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D');
INSERT INTO product (product_name, price, category, image) VALUES ('jacket1', 250, 'jacket', 'https://m.media-amazon.com/images/I/71AVijzvhNL._UX569_.jpg');
INSERT INTO product (product_name, price, category, image) VALUES ('jacket2', 300, 'jacket', 'https://euro.montbell.com/products/prod_img/zoom/z_2301368_bric.jpg');
INSERT INTO product (product_name, price, category, image) VALUES ('jacket3', 100, 'jacket', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtqoqbNsuCRGlQO-RTJhxGEBcINU4CPU4Mg&usqp=CAU');

COMMIT;
