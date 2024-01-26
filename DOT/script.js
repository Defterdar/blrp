function previewImage() {
    const input = document.getElementById('imageInput');
    const preview = document.getElementById('preview');
    const filenameDisplay = document.getElementById('filenameDisplay');

    const file = input.files[0];

    // Get the 'name' parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name') || 'default'; // Default value if no 'name' parameter is provided

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
        // Include the 'name' parameter in the file name
        const fileName = `${nameParam}_${Date.now()}.${file.name.split('.').pop()}`;
        preview.src = e.target.result;
        preview.style.display = 'flex';

        // Update and display the full filename
        filenameDisplay.textContent = 'File Name: ' + fileName;

        // Save the file on the server
        saveFileOnServer(file, fileName);
        };
        reader.readAsDataURL(file);
    }
}

function saveFileOnServer(file, fileName) {
    const formData = new FormData();
    formData.append('image', file);

    // Use Fetch API to send the file to the server
    fetch('upload.php?name=' + encodeURIComponent(fileName), {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(message => console.log(message))
    .catch(error => console.error('Error:', error));
}