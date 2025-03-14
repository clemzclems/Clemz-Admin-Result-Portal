<?php
include 'db_connect.php';

$student_id = $_POST["student_id"];
$scratch_card = $_POST["scratch_card"];

$sql = "SELECT * FROM students_results WHERE student_id='$student_id' AND scratch_card='$scratch_card'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode($result->fetch_assoc());
} else {
    echo json_encode(["error" => "Invalid Student ID or Scratch Card PIN"]);
}
?>
