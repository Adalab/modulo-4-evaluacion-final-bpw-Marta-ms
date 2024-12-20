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
