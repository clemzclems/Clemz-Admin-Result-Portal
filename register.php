<?php
session_start();
include 'db_connect.php'; // Database connection file

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Secure Hashing
    $role = mysqli_real_escape_string($conn, $_POST['role']); // Student or Teacher

    // Check if email already exists
    $check_email = "SELECT * FROM users WHERE email='$email'";
    $result = mysqli_query($conn, $check_email);

    if (mysqli_num_rows($result) > 0) {
        echo "Email already registered!";
    } else {
        // Insert new user
        $query = "INSERT INTO users (name, email, password, role) VALUES ('$name', '$email', '$password', '$role')";
        if (mysqli_query($conn, $query)) {
            echo "Registration successful! <a href='login.php'>Login Here</a>";
        } else {
            echo "Error: " . mysqli_error($conn);
        }
    }
}

mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register | School Portal</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <div class="container">
        <h2>Register</h2>
        <form action="" method="POST">
            <label for="name">Full Name:</label>
            <input type="text" name="name" required>

            <label for="email">Email:</label>
            <input type="email" name="email" required>

            <label for="password">Password:</label>
            <input type="password" name="password" required>

            <label for="role">Register As:</label>
            <select name="role">
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
            </select>

            <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="login.php">Login</a></p>
    </div>
</body>
</html>