DROP DATABASE IF EXISTS inkindDB;
CREATE DATABASE inkindDB;
USE inkindDB;

CREATE TABLE Vendors(
	ID INTEGER(11) AUTO_INCREMENT NOT NULL,
	vendorName VARCHAR(150) NOT NULL,
	address VARCHAR(150),
	city VARCHAR(50),
	state VARCHAR(50),
	zip VARCHAR(20),
	phone VARCHAR(20),
	email VARCHAR(150),
    PRIMARY KEY (id)
);

--SELECT * FROM Vendors;

CREATE TABLE Donations (
	donationID INTEGER(11) AUTO_INCREMENT NOT NULL,
    donationType VARCHAR(150) NOT NULL,
    note TEXT(250) NOT NULL,
    date DATE,
    donationValue INTEGER(11),
    vendorID INT NOT NULL,
    PRIMARY KEY (donationID),
    FOREIGN KEY (vendorID) REFERENCES Vendors(ID)
);

--SELECT * FROM Donations;

-- TO EDIT
SELECT * FROM Vendors
LEFT JOIN Donations ON Vendors.ID = Donations.vendorID;