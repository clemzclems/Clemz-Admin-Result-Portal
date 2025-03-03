<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("results.json"), true);

    $new_result = [
        "student_name" => $_POST["student_name"],
        "test1" => $_POST["test1"],
        "test2" => $_POST["test2"],
        "exam" => $_POST["exam"],
        "total" => $_POST["test1"] + $_POST["test2"] + $_POST["exam"],
        "average" => round(($_POST["test1"] + $_POST["test2"] + $_POST["exam"]) / 3, 2),
        "pin" => substr(md5(uniqid()), 0, 8) // Generate unique scratch card PIN
    ];

    $data[] = $new_result;
    file_put_contents("results.json", json_encode($data));

    echo "Results saved successfully!";
}
?>