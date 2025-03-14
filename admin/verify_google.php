<?php
require 'vendor/autoload.php'; // Install Google Client Library

use Google\Client;

$client = new Client();
$client->setClientId('YOUR_GOOGLE_CLIENT_ID'); // Replace with your Client ID

if (isset($_GET['token'])) {
    $token = $_GET['token'];

    try {
        $payload = $client->verifyIdToken($token);
        if ($payload) {
            session_start();
            $_SESSION['user_email'] = $payload['email'];
            $_SESSION['user_name'] = $payload['name'];

            // Redirect based on user role
            if (strpos($payload['email'], "@schooladmin.com") !== false) {
                $_SESSION['role'] = "admin";
                header("Location: admin_dashboard.php");
            } elseif (strpos($payload['email'], "@teachers.com") !== false) {
                $_SESSION['role'] = "teacher";
                header("Location: teacher_dashboard.php");
            } else {
                $_SESSION['role'] = "student";
                header("Location: student_dashboard.php");
            }
        } else {
            echo "Invalid Google token!";
        }
    } catch (Exception $e) {
        echo "Login failed: " . $e->getMessage();
    }
} else {
    echo "No token received!";
}
?>
