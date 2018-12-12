CREATE DATABASE burgers_DB;

USE artists_DB;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  burger_name VARCHAR(45) NULL,
  devoured BOOLEAN;
);
