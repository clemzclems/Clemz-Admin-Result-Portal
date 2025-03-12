<?php
session_start();
if ($_SESSION['role'] !== 'student') {
    header("Location: login.php");
    exit();
}
echo "Welcome, Student " . $_SESSION['user_name'];
?>