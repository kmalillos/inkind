DROP DATABASE IF EXISTS inkindDB;
CREATE DATABASE inkindDB;
USE inkindDB;

CREATE TABLE vendors(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	vendorName VARCHAR(150) NOT NULL,
	address VARCHAR(150),
	city VARCHAR(50),
	state VARCHAR(50),
	zip VARCHAR(20),
	phone VARCHAR(20),
	email VARCHAR(150),
    PRIMARY KEY (id)
);

-- -- TESTING TABLES
-- INSERT INTO vendors (vendorName, address, city, state, zip, phone, email)
-- VALUES ("A Thousand Words Photography", "P.O Box 231", "Poynette", "WI", "53955", "(608) 369-1127", "rachel@athousandwords.photo"),
-- ("Ada M. Rodriguez", "107 Linden Terrace", "Collings Lake", "NJ", "08094", "(609) 576-7424", "ada0972@gmail.com"),
-- ("Adrian de los Santos", "4411 Andover Cay Blvd.", "Orlando", "FL", "32825", "(917) 565-4980", "adriandelossantos@yahoo.com");

SELECT * FROM vendors;