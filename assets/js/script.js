// Check student results
function checkResult() {
    let studentId = document.getElementById("student_id").value;
    let pin = document.getElementById("scratch_card").value;
    let savedData = JSON.parse(localStorage.getItem("studentData"));

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
    let doc = new jsPDF();
    doc.text("Student Result", 10, 10);
    doc.save("Result.pdf");
}
