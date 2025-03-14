<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $student_id = $_POST["student_id"];
    $name = $_POST["name"];
    $scratch_card = $_POST["scratch_card"];
    $test1 = $_POST["test1"];
    $test2 = $_POST["test2"];
    $exam = $_POST["exam"];

    $sql = "INSERT INTO students_results (student_id, name, scratch_card, test1, test2, exam) 
            VALUES ('$student_id', '$name', '$scratch_card', $test1, $test2, $exam)";

    if ($conn->query($sql) === TRUE) {
        echo "Result added successfully!";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Teacher Dashboard</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
        .container { max-width: 500px; margin: auto; padding: 20px; background: #f8f9fa; border-radius: 10px; }
        input, button { display: block; width: 100%; margin: 10px 0; padding: 10px; }
    </style>
</head>
<body>

    <h1>Enter Student Scores</h1>
    <div class="container">
        <form method="POST">
            <input type="text" name="student_id" placeholder="Student ID" required>
            <input type="text" name="name" placeholder="Student Name" required>
            <input type="text" name="scratch_card" placeholder="Scratch Card PIN" required>
            <input type="number" name="test1" placeholder="Test 1 Score" required>
            <input type="number" name="test2" placeholder="Test 2 Score" required>
            <input type="number" name="exam" placeholder="Exam Score" required>
            <button type="submit">Submit Result</button>
        </form>
    </div>

</body>
</html>
