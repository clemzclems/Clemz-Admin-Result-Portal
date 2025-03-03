---
layout: student
title: Check Results
---

# **Check Your Results**
Enter your Student ID and Scratch Card PIN below.

<form id="result-form">
    <label>Student ID:</label>
    <input type="text" id="student_id" required>

    <label>Scratch Card PIN:</label>
    <input type="text" id="scratch_card" required>

    <button type="button" onclick="checkResult()">View Result</button>
    <button type="button" onclick="downloadPDF()">Download PDF</button>
</form>

<table id="result-table" style="display:none;">
    <tr><th>Subject</th><th>Score</th></tr>
    <tr><td>Test 1</td><td id="test1"></td></tr>
    <tr><td>Test 2</td><td id="test2"></td></tr>
    <tr><td>Exam</td><td id="exam"></td></tr>
    <tr><td>Total</td><td id="total"></td></tr>
    <tr><td>Average</td><td id="average"></td></tr>
</table>