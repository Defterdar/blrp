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

    // Function to fetch and display CSV data for a specific table
    function fetchDataAndDisplay(tableId, csvFileName) {
        fetch(csvFileName)
            .then(response => response.text())
            .then(csvData => displayData(csvData, tableId))
            .catch(error => console.error(`Error fetching data for ${tableId}:`, error));
    }

    // Fetch and display CSV data for Table 1
    fetchDataAndDisplay('data-table1', 'data1.csv');

    // Fetch and display CSV data for Table 2
    fetchDataAndDisplay('data-table2', 'data2.csv');

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
