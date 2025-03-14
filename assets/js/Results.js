function handleCredentialResponse(response) {
    console.log("Google Sign-In Token:", response.credential);
    alert("Sign-In Successful! Now you can fetch results.");
}

async function checkResult() {
    const sheetId = "YOUR_GOOGLE_SHEET_ID"; // Replace with your actual Google Sheet ID
    const apiKey = "YOUR_GOOGLE_API_KEY"; // Replace with your actual API key
    const range = "Sheet1!A2:D"; // Adjust based on your Google Sheet structure

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (!data.values || data.values.length === 0) {
            alert("No results found.");
            return;
        }

        let studentId = document.getElementById("student_id").value;
        let pin = document.getElementById("scratch_card").value;

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
