<?php
session_start();
if ($_SESSION['role'] !== 'teacher') {
    header("Location: login.php");
    exit();
}
echo "Welcome, Teacher " . $_SESSION['user_name'];
?>