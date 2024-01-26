document.addEventListener('DOMContentLoaded', function () {
    // Function to display CSV data in the table
    function displayData(csvData, tableId) {
        const tableBody = document.getElementById(`${tableId}-body`);

        if (!tableBody) {
            console.error(`Error: Table body not found for ${tableId}`);
            return;
        }

        const dataArray = CSVToArray(csvData);

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
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch data for ${tableId}. Status: ${response.status}`);
                }
                return response.text();
            })
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
});
