// Select all rows from the table
const rows = document.querySelectorAll("table.content_tbl tbody tr");

// Define the statuses we want to filter out
const blockedStatuses = [
  "מבוטל",    // Cancelled
  "הוחלף",    // Replaced
  "נדחה",     // Postponed / Rejected
  "הרשמה מחדש" // Retake
];

// Go through each row
rows.forEach(row => {
  const statusCell = row.cells[3]; // 4th column contains the status
  if (!statusCell) return; // Skip if no status cell

  const statusText = statusCell.textContent.trim();

  // Case 1: Status is in blocked list → remove row
  if (blockedStatuses.some(status => statusText.includes(status))) {
    row.remove();
    return;
  }

  // Case 2: Status is "אי עמידה בדרישות" → check 6th column
  if (statusText.includes("אי עמידה בדרישות")) {
    const sixthCell = row.cells[5]; // 6th column
    if (sixthCell && sixthCell.textContent.trim() !== "") {
      row.remove();
    }
  }
});
