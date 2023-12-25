document.addEventListener('DOMContentLoaded', function () {
    // Function to display CSV data in the table
    function displayData(csvData, tableId) {
        const dataArray = CSVToArray(csvData);
        const tableBody = document.getElementById(`${tableId}-body`);

        dataArray.forEach(row => {
            const newRow = tableBody.insertRow(tableBody.rows.length);
            row.forEach((cell, index) => {
                const newCell = newRow.insertCell(index);
                newCell.textContent = cell;
            });
        });
    }

    // Fetch and display CSV data for Table 1
    fetch('data1.csv')
        .then(response => response.text())
        .then(csvData => displayData(csvData, 'data-table1'));

    // Fetch and display CSV data for Table 2
    fetch('data2.csv')
        .then(response => response.text())
        .then(csvData => displayData(csvData, 'data-table2'));

    // Function to parse CSV data into a 2D array
    function CSVToArray(csvData) {
        const rows = csvData.split('\n');
        const dataArray = [];

        rows.forEach(row => {
            const cells = row.split(',');
            dataArray.push(cells);
        });

        return dataArray;
    }

    // Function to sort the table by column
    function sortTable(columnIndex, tableId) {
        const table = document.getElementById(`${tableId}`);
        const tbody = document.getElementById(`${tableId}-body`);
        const rows = Array.from(tbody.rows);

        rows.sort((a, b) => {
            const cellA = a.cells[columnIndex].textContent;
            const cellB = b.cells[columnIndex].textContent;

            return isNaN(cellA) ? cellA.localeCompare(cellB) : cellA - cellB;
        });

        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }

        rows.forEach(row => tbody.appendChild(row));
    }
});
