<?php
session_start();
if ($_SESSION['role'] !== 'admin') {
    header("Location: login.php");
    exit();
}
echo "Welcome, Admin " . $_SESSION['user_name'];
?>
