document.addEventListener("DOMContentLoaded", function () {
    console.log("Admin panel loaded");

    // Function to generate student scratch PINs
    function generatePins() {
        const pinList = document.getElementById("pin-list");
        pinList.innerHTML = ""; // Clear previous pins

        for (let i = 0; i < 5; i++) {
            const pin = Math.floor(100000 + Math.random() * 900000); // 6-digit PIN
            const listItem = document.createElement("li");
            listItem.textContent = pin;
            pinList.appendChild(listItem);
        }
    }

    // Function to approve teacher result entries
    function approveResults() {
        document.getElementById("approval-status").textContent = "All results have been approved!";
    }

    // Function to view student access logs
    function viewLogs() {
        document.getElementById("log-display").textContent = "Displaying student access logs...";
    }

    // Function to reset expired PINs
    function resetPins() {
        document.getElementById("reset-status").textContent = "Expired PINs have been reset!";
    }

    // Attach event listeners to buttons
    document.querySelector("button[onclick='generatePins()']").addEventListener("click", generatePins);
    document.querySelector("button[onclick='approveResults()']").addEventListener("click", approveResults);
    document.querySelector("button[onclick='viewLogs()']").addEventListener("click", viewLogs);
    document.querySelector("button[onclick='resetPins()']").addEventListener("click", resetPins);
});p
