// ====================== STUDENT RESULT FUNCTIONS ====================== //

document.addEventListener("DOMContentLoaded", function () {
    console.log("Results.js loaded successfully!");

    // Function to check student results
    function checkResult() {
        let studentID = document.getElementById("student_id").value;
        let pin = document.getElementById("scratch_card").value;
        let resultTable = document.getElementById("result-table");

        if (studentID && pin) {
            alert("Fetching results for Student ID: " + studentID);
            resultTable.style.display = "table";

            // Example data (Replace with actual logic)
            let test1 = Math.floor(Math.random() * 100);
            let test2 = Math.floor(Math.random() * 100);
            let exam = Math.floor(Math.random() * 100);
            let total = test1 + test2 + exam;
            let average = (total / 3).toFixed(2);

            document.getElementById("test1").innerText = test1;
            document.getElementById("test2").innerText = test2;
            document.getElementById("exam").innerText = exam;
            document.getElementById("total").innerText = total;
            document.getElementById("average").innerText = average;
        } else {
            alert("Please enter both Student ID and PIN.");
        }
    }

    // Function to download student result as a PDF
    function downloadPDF() {
        alert("Downloading result as PDF...");

        if (typeof jsPDF === "undefined") {
            alert("Error: jsPDF library not found. Please check script inclusion.");
            return;
        }

        const doc = new jsPDF();
        doc.text("Student Results", 20, 20);
        doc.text("Test 1: " + document.getElementById("test1").innerText, 20, 30);
        doc.text("Test 2: " + document.getElementById("test2").innerText, 20, 40);
        doc.text("Exam: " + document.getElementById("exam").innerText, 20, 50);
        doc.text("Total: " + document.getElementById("total").innerText, 20, 60);
        doc.text("Average: " + document.getElementById("average").innerText, 20, 70);
        doc.save("student_result.pdf");
    }

    // Attach event listeners if buttons exist
    const checkBtn = document.querySelector("button[data-action='checkResult']");
    if (checkBtn) checkBtn.addEventListener("click", checkResult);

    const downloadBtn = document.querySelector("button[data-action='downloadPDF']");
    if (downloadBtn) downloadBtn.addEventListener("click", downloadPDF);
});
