<?php
session_start();
if (!isset($_SESSION['admin_id'])) {
    header("Location: Login.php");
    exit();
}

echo "Welcome, " . $_SESSION['admin_username'];
?>

<a href="logout.php">Logout</a>
