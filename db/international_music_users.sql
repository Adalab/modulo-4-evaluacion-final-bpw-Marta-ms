CREATE DATABASE international_music;
USE international_music;



CREATE TABLE music (
idMusic INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
name VARCHAR(50) NOT NULL,
country VARCHAR(50) NOT NULL,
genre VARCHAR(50) NOT NULL
);


INSERT INTO music(name, country, genre)
VALUES ('Parcels', 'Australia', 'Indie');

INSERT INTO music(name, country, genre)
VALUES 
('Tame Impala', 'Australia', 'Rock'),
('Standstill', 'Spain', 'Hardcore');

INSERT INTO music(name, country, genre)
VALUES 
('Manel', 'Spain', 'Pop'),
('Royel Otis', 'Australia', 'Indie'),
('The Kooks', 'United Kingdom', 'Rock');

CREATE TABLE users(
idUser INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
username VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL
);

INSERT INTO users(username, email)
VALUES 
('MariaM54', 'maria@gmail.com'),
('JuanG57', 'juan@gmail.com'),
('CarmenT2', 'carmen@gmail.com');



