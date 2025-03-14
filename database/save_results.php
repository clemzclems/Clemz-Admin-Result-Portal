<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $file = "student_results.csv";

    // Create CSV file if it doesn't exist
    if (!file_exists($file)) {
        file_put_contents($file, "Student Name,Test 1,Test 2,Exam,Total,Average,PIN\n");
    }

    $student_name = $_POST["student_name"];
    $test1 = $_POST["test1"];
    $test2 = $_POST["test2"];
    $exam = $_POST["exam"];
    $total = $test1 + $test2 + $exam;
    $average = round($total / 3, 2);
    $pin = substr(md5(uniqid()), 0, 8); // Generate unique PIN

    $new_entry = "$student_name,$test1,$test2,$exam,$total,$average,$pin\n";
    
    file_put_contents($file, $new_entry, FILE_APPEND);

    echo "Results saved successfully!";
}
?>
