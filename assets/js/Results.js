function handleCredentialResponse(response) {
    console.log("Google Sign-In Token:", response.credential);
    alert("Sign-In Successful! Now you can fetch results.");
}

// Google Sheet API Credentials
const sheetId = "1feNyfAjeawcinIjhHH5MLowbDjnP1OGE7anEHcyOj74"; // Your Google Sheet ID
const apiKey = "YOUR_GOOGLE_API_KEY"; // You still need to replace this with your actual API key
const range = "Sheet1!A2:G"; // Adjust based on your Google Sheet structure

async function checkResult() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (!data.values || data.values.length === 0) {
            alert("No results found.");
            return;
        }

        let studentId = document.getElementById("student_id").value.trim();
        let pin = document.getElementById("scratch_card").value.trim();

        let found = false;
        for (let row of data.values) {
            if (row[0] === studentId && row[1] === pin) {
                document.getElementById("test1").textContent = row[2];
                document.getElementById("test2").textContent = row[3];
                document.getElementById("exam").textContent = row[4];
                document.getElementById("total").textContent = row[5];
                document.getElementById("average").textContent = row[6];
                document.getElementById("result-table").style.display = "table";
                found = true;
                break;
            }
        }

        if (!found) {
            alert("Invalid Student ID or PIN.");
        }

    } catch (error) {
        console.error("Error fetching results:", error);
        alert("Failed to fetch results. Check your API key and sheet ID.");
    }
}

// PDF Download Function
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    let studentId = document.getElementById("student_id").value;
    if (!studentId) {
        alert("Please check your results first.");
        return;
    }

    doc.text("Student Result", 10, 10);
    doc.text("Student ID: " + studentId, 10, 20);

    let resultData = [
        ["Subject", "Score"],
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

    doc.save("Student_Result.pdf");
}

// Load Google Sign-In Button
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "766636262884-ummeaii04ebrs4f1uccng4e78f80cois.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("google-signin"),
        { theme: "outline", size: "large" }
    );
};
