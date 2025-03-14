// Check student results
function checkResult() {
    let studentId = document.getElementById("student_id").value.trim();
    let pin = document.getElementById("scratch_card").value.trim();

    if (!studentId || !pin) {
        alert("Please enter both Student ID and PIN.");
        return;
    }

    let savedData = localStorage.getItem("studentData");
    if (!savedData) {
        alert("No student data found.");
        return;
    }

    savedData = JSON.parse(savedData);
    let student = savedData.find(s => s.id === studentId && (s.pin1 === pin || s.pin2 === pin));

    if (student) {
        document.getElementById("test1").textContent = student.test1;
        document.getElementById("test2").textContent = student.test2;
        document.getElementById("exam").textContent = student.exam;
        document.getElementById("total").textContent = student.total;
        document.getElementById("average").textContent = student.average;
        document.getElementById("result-table").style.display = "block";
    } else {
        alert("Invalid PIN or Student ID!");
    }
}

// Download PDF
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    let studentId = document.getElementById("student_id").value;

    if (!studentId) {
        alert("Please check your results first.");
        return;
    }

    let doc = new jsPDF();
    doc.text("Student Result", 10, 10);
    doc.text("Student ID: " + studentId, 10, 20);

    let resultData = [
        ["Test 1", document.getElementById("test1").textContent],
        ["Test 2", document.getElementById("test2").textContent],
        ["Exam", document.getElementById("exam").textContent],
        ["Total", document.getElementById("total").textContent],
        ["Average", document.getElementById("average").textContent]
    ];

    let y = 30;
    resultData.forEach(row => {
        doc.text(row[0] + ": " + row[1], 10, y);
        y += 10;
    });

    doc.save(`Student_Result_${studentId}.pdf`);
}
