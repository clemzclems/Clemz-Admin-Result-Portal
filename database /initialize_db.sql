CREATE DATABASE results_db;

USE results_db;

CREATE TABLE students_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id VARCHAR(20) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    scratch_card VARCHAR(20) NOT NULL,
    test1 INT NOT NULL,
    test2 INT NOT NULL,
    exam INT NOT NULL,
    total INT GENERATED ALWAYS AS (test1 + test2 + exam) STORED,
    average DECIMAL(5,2) GENERATED ALWAYS AS ((test1 + test2 + exam) / 3) STORED
);
