<script>
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portal Loaded!");

    // Generate Student PINs
    function generatePins() {
        alert("Generating new student scratch PINs...");
        const pinList = document.getElementById("pin-list");
        pinList.innerHTML = ""; // Clear previous pins

        for (let i = 0; i < 5; i++) {
            const pin = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit PIN
            const listItem = document.createElement("li");
            listItem.textContent = pin;
            pinList.appendChild(listItem);
        }
    }

    // Approve Teacher Results
    function approveResults() {
        alert("Approving teacher result entries...");
        document.getElementById("approval-status").textContent = "All results have been approved!";
    }

    // View Student Access Logs
    function viewLogs() {
        alert("Fetching student access logs...");
        document.getElementById("log-display").textContent = "Displaying student access logs...";
    }

    // Reset Expired PINs
    function resetPins() {
        alert("Resetting expired PINs...");
        document.getElementById("reset-status").textContent = "Expired PINs have been reset!";
    }

    // Check Student Result
    function checkResult() {
        let studentID = document.getElementById("student_id").value;
        let pin = document.getElementById("scratch_card").value;
        let resultTable = document.getElementById("result-table");

        if (studentID && pin) {
            alert("Fetching results for Student ID: " + studentID);
            resultTable.style.display = "table";

            // Example data
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

    // Download Student Result as PDF
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

    // Attach event listeners to buttons
    document.querySelector("button[data-action='generatePins']").addEventListener("click", generatePins);
    document.querySelector("button[data-action='approveResults']").addEventListener("click", approveResults);
    document.querySelector("button[data-action='viewLogs']").addEventListener("click", viewLogs);
    document.querySelector("button[data-action='resetPins']").addEventListener("click", resetPins);
    document.querySelector("button[data-action='checkResult']").addEventListener("click", checkResult);
    document.querySelector("button[data-action='downloadPDF']").addEventListener("click", downloadPDF);
});
</script>