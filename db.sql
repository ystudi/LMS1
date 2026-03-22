CREATE DATABASE lms;
USE lms;

CREATE TABLE teachers(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100),
 subject VARCHAR(100)
);

INSERT INTO teachers (name,subject) VALUES
('Rahul','Math'),
('Anita','Science');

CREATE TABLE students(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100)
);

CREATE TABLE assignments(
 id INT AUTO_INCREMENT PRIMARY KEY,
 title VARCHAR(200)
);