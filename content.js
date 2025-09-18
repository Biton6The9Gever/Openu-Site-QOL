// Get all table rows
const rows = document.querySelectorAll("table.content_tbl tbody tr");

// Loop through each row
rows.forEach(row => {
    const statusCell = row.cells[3]; // 4th column is status
    if (statusCell && (statusCell.textContent.includes("מבוטל") || statusCell.textContent.includes("הוחלף") || statusCell.textContent.includes("נדחה"))) {
        row.remove(); // remove the row from the table
    }
});
