-- Create database if it does not exist
CREATE DATABASE IF NOT EXISTS results_db;
USE results_db;

-- Table for storing students' results
CREATE TABLE IF NOT EXISTS students_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id VARCHAR(20) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    scratch_card VARCHAR(20) NOT NULL UNIQUE,
    test1 INT NOT NULL DEFAULT 0,
    test2 INT NOT NULL DEFAULT 0,
    exam INT NOT NULL DEFAULT 0,
    total INT GENERATED ALWAYS AS (test1 + test2 + exam) STORED,
    average DECIMAL(5,2) GENERATED ALWAYS AS ((test1 + test2 + exam) / 3) STORED
);

-- Table for teachers
CREATE TABLE IF NOT EXISTS teachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    teacher_id VARCHAR(20) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    subject VARCHAR(50) NOT NULL
);

-- Table for admin users
CREATE TABLE IF NOT EXISTS admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    admin_id VARCHAR(20) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
