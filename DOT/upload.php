<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_FILES["image"])) {
        $file = $_FILES["image"];
        
        // Specify the target directory
        $targetDirectory = "images/";

        // Get the filename provided in the query parameter
        $nameParam = isset($_GET['name']) ? $_GET['name'] : 'default';
        $fileName = $targetDirectory . $nameParam;

        // Move the uploaded file to the target directory
        //move_uploaded_file($file["tmp_name"], $fileName);
        echo $file["tmp_name"];
        echo "<br>";
        echo $fileName;
        echo "<br>";
        if (move_uploaded_file($file["tmp_name"], $fileName)) {
            echo "File is valid, and was successfully uploaded.\n";
        } else {
            echo "Upload failed";
        }

        echo "File uploaded successfully!";
    } else {
        echo "No file selected!";
    }
}
?>