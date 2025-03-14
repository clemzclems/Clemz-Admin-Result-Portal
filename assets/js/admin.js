function generatePins() {
    let pinList = document.getElementById("pin-list");
    let downloadBtn = document.getElementById("download-btn");
    pinList.innerHTML = ""; // Clear previous pins

    let pins = [];
    for (let i = 0; i < 5; i++) { // Generate 5 new PINs
        let pin = Math.floor(100000 + Math.random() * 900000); // 6-digit PIN
        pins.push(pin);
        let li = document.createElement("li");
        li.textContent = pin;
        pinList.appendChild(li);
    }

    // Store generated PINs in localStorage
    localStorage.setItem("generatedPins", JSON.stringify(pins));

    // Show the download button
    downloadBtn.style.display = "inline-block";

    alert("New PINs generated successfully!");
}

function downloadPins() {
    let pins = JSON.parse(localStorage.getItem("generatedPins"));
    if (!pins || pins.length === 0) {
        alert("No PINs available to download. Generate new PINs first.");
        return;
    }

    // Generate timestamp (YYYYMMDD_HHMMSS format)
    let now = new Date();
    let timestamp = now.getFullYear() +
                    String(now.getMonth() + 1).padStart(2, '0') +
                    String(now.getDate()).padStart(2, '0') + "_" +
                    String(now.getHours()).padStart(2, '0') +
                    String(now.getMinutes()).padStart(2, '0') +
                    String(now.getSeconds()).padStart(2, '0');

    let pinText = "Generated Student Scratch PINs:\n" + pins.join("\n");
    let blob = new Blob([pinText], { type: "text/plain" });

    let filename = `Student_Scratch_PINs_${timestamp}.txt`;

    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
