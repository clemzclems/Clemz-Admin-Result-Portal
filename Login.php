<?php
session_start();
include("db_connect.php"); // Database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn, $query);
    
    if (mysqli_num_rows($result) == 1) {
        $_SESSION["user"] = $username;
        header("Location: dashboard.php");
    } else {
        echo "Invalid credentials";
    }
}
?>