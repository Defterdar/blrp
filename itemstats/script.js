document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display CSV data
    fetch('data1.csv')
        .then(response => response.text())
        .then(csvData => displayData(csvData));

    // Function to display CSV data in the table
    function displayData(csvData) {
        const dataArray = CSVToArray(csvData);

        const tableBody = document.getElementById('data-body1');

        dataArray.forEach(row => {
            const newRow = tableBody.insertRow(tableBody.rows.length);
            row.forEach((cell, index) => {
                const newCell = newRow.insertCell(index);
                newCell.textContent = cell;
            });
        });
    }

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
    function sortTable(columnIndex) {
        const table = document.getElementById('data-table1');
        const tbody = document.getElementById('data-body1');
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

    // Fetch and display CSV data
    fetch('data2.csv')
        .then(response => response.text())
        .then(csvData => displayData(csvData));

    // Function to display CSV data in the table
    function displayData(csvData) {
        const dataArray = CSVToArray(csvData);

        const tableBody = document.getElementById('data-body2');

        dataArray.forEach(row => {
            const newRow = tableBody.insertRow(tableBody.rows.length);
            row.forEach((cell, index) => {
                const newCell = newRow.insertCell(index);
                newCell.textContent = cell;
            });
        });
    }

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
    function sortTable(columnIndex) {
        const table = document.getElementById('data-table2');
        const tbody = document.getElementById('data-body2');
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