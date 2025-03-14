document.addEventListener("DOMContentLoaded", function () {
    console.log("Main script loaded");

    // Function to check student results
    function checkResult() {
        const studentID = document.getElementById("student_id").value;
        const scratchCard = document.getElementById("scratch_card").value;
        const resultTable = document.getElementById("result-table");

        if (studentID && scratchCard) {
            resultTable.style.display = "table";
            document.getElementById("test1").textContent = Math.floor(Math.random() * 100);
            document.getElementById("test2").textContent = Math.floor(Math.random() * 100);
            document.getElementById("exam").textContent = Math.floor(Math.random() * 100);
            const total = parseInt(document.getElementById("test1").textContent) +
                          parseInt(document.getElementById("test2").textContent) +
                          parseInt(document.getElementById("exam").textContent);
            document.getElementById("total").textContent = total;
            document.getElementById("average").textContent = (total / 3).toFixed(2);
        } else {
            alert("Please enter Student ID and Scratch Card PIN");
        }
    }

    // Function to download result as PDF
    function downloadPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text("Student Results", 20, 20);
        doc.text("Test 1: " + document.getElementById("test1").textContent, 20, 30);
        doc.text("Test 2: " + document.getElementById("test2").textContent, 20, 40);
        doc.text("Exam: " + document.getElementById("exam").textContent, 20, 50);
        doc.text("Total: " + document.getElementById("total").textContent, 20, 60);
        doc.text("Average: " + document.getElementById("average").textContent, 20, 70);
        doc.save("student_result.pdf");
    }

    // Attach event listeners
    document.querySelector("button[onclick='checkResult()']").addEventListener("click", checkResult);
    document.querySelector("button[onclick='downloadPDF()']").addEventListener("click", downloadPDF);
});
