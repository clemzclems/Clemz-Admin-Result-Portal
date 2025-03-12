<?php
$host = "localhost";
$user = "root"; // Change to your database user
$pass = ""; // Change to your database password
$db = "your_database_name"; // Replace with your database name

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
