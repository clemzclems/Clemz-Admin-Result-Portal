AdminClemz School Portal – Student Results Management System

📌 Overview

AdminClemz School Portal is a web-based system designed to simplify student result management. It allows teachers to input student scores, students to check their results using a scratch card PIN, and admins to manage the system efficiently.


---

🚀 Features

✅ Teacher Login: Secure portal for teachers to enter student scores.
✅ Student Result Checking: Students enter a unique scratch card PIN to view results.
✅ Auto PIN Generation: Each student is assigned a random unique PIN for security.
✅ Data Persistence: All results are saved in a spreadsheet (CSV) and remain accessible.
✅ Admin Panel: Displays all student results for easy monitoring.
✅ Export to PDF: Students and admins can download results as PDF for printing.
✅ PIN Recovery: Lost scratch cards? Admins can retrieve or regenerate PINs.
✅ Two Scratch Card Support: Allows students to use a second PIN if needed.
✅ Discussion Form for Teachers & Admin: Teachers can submit issues and updates via Formspree.


---

📂 System Structure

1. Files & Directories

/ (Root Directory)
│── _layouts/            # Jekyll layouts for the GitHub site
│── _includes/           # Navigation, header, and footer components
│── assets/              # CSS, JavaScript, and images
│── data/                # student_results.csv (stores student scores)
│── teachers/            # Teacher login and result entry files
│── index.md             # Home page (Markdown format for GitHub Pages)
│── results.html         # Student result checking page
│── admin.html           # Admin dashboard
│── styles.css           # Main stylesheet
│── script.js            # JavaScript for PIN validation and PDF export
│── formspree_contact.md # Teacher discussion form
│── save_results.php     # PHP script for saving results
│── generate_pin.php     # PHP script for PIN creation
│── check_result.php     # PHP script for student result retrieval


---

📜 How It Works

1️⃣ Teachers Enter Student Scores

Log in via the teacher portal.

Input Test 1, Test 2, Exam Scores for 20 students.

Click Submit, and the system calculates the Total & Average.

Data is saved in student_results.csv.


2️⃣ Students Check Their Results

Visit the result checking page (results.html).

Enter their scratch card PIN.

The system fetches their scores and displays them.

Download PDF if needed.


3️⃣ Admin Panel

View all student records in a dashboard (admin.html).

Export the full result list to PDF.

Manage lost scratch card PINs.



---

📥 Installation & Setup

🔹 Option 1: Run Locally

1. Clone the repository:

git clone https://github.com/clemzclems/your-repo.git
cd your-repo


2. Run on a local PHP server:

php -S localhost:8000


3. Open http://localhost:8000 in a browser.



🔹 Option 2: Deploy on GitHub Pages

1. Push the code to a GitHub repository.


2. Enable GitHub Pages from repo settings.


3. Access the portal via https://yourusername.github.io/your-repo/.




---

🔑 Security Considerations

🔒 PIN Encryption: Stored securely to prevent misuse.
🔒 Restricted Teacher Access: Only teachers can enter scores.
🔒 Admin Controls: PIN reset and data export functionalities.


---

📞 Support & Contributions

💬 Need Help? Contact AdminClemz Graphics Works.
🤝 Want to Improve? Fork the repo and submit a pull request!


---

✨ Developed by Clemz Clems Graphics Works ✨

