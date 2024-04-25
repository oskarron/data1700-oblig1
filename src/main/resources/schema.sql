CREATE TABLE BillettTabell
(
    id INTEGER AUTO_INCREMENT NOT NULL,
    film VARCHAR(255) NOT NULL,
    antall INTEGER NOT NULL,
    fornavn VARCHAR(255) NOT NULL,
    etternavn VARCHAR(255) NOT NULL,
    telefon INTEGER,
    epost VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);