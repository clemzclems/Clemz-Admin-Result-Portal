// Admin panel JavaScript functionalities

document.addEventListener("DOMContentLoaded", function () {
    console.log("Admin panel loaded");

    // Function to generate student scratch PINs
    function generatePins() {
        alert("Generating new student scratch PINs...");
        const pinList = document.getElementById("pin-list");
        if (pinList) {
            pinList.innerHTML = ""; // Clear previous pins

            for (let i = 0; i < 5; i++) {
                const pin = Math.floor(100000 + Math.random() * 900000); // 6-digit PIN
                const listItem = document.createElement("li");
                listItem.textContent = pin;
                pinList.appendChild(listItem);
            }
        }
    }

    // Function to approve teacher result entries
    function approveResults() {
        alert("Approving teacher result entries...");
        const approvalStatus = document.getElementById("approval-status");
        if (approvalStatus) {
            approvalStatus.textContent = "All results have been approved!";
        }
    }

    // Function to view student access logs
    function viewLogs() {
        alert("Fetching student access logs...");
        const logDisplay = document.getElementById("log-display");
        if (logDisplay) {
            logDisplay.textContent = "Displaying student access logs...";
        }
    }

    // Function to reset expired PINs
    function resetPins() {
        alert("Resetting expired PINs...");
        const resetStatus = document.getElementById("reset-status");
        if (resetStatus) {
            resetStatus.textContent = "Expired PINs have been reset!";
        }
    }

    // Attach event listeners to buttons if they exist
    const generateBtn = document.querySelector("button[data-action='generatePins']");
    if (generateBtn) generateBtn.addEventListener("click", generatePins);

    const approveBtn = document.querySelector("button[data-action='approveResults']");
    if (approveBtn) approveBtn.addEventListener("click", approveResults);

    const logsBtn = document.querySelector("button[data-action='viewLogs']");
    if (logsBtn) logsBtn.addEventListener("click", viewLogs);

    const resetBtn = document.querySelector("button[data-action='resetPins']");
    if (resetBtn) resetBtn.addEventListener("click", resetPins);
});