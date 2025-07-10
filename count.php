<?php
// URL to fetch the player data
$url = "http://live.blrp.dk:30120/players.json";

// Fetch the JSON data from the URL
$response = @file_get_contents($url);

if ($response === FALSE) {
    echo "Failed to retrieve player data.";
    exit;
}

// Decode the JSON response
$players = json_decode($response, true);

// Count the number of players
$playerCount = is_array($players) ? count($players) : 0;

// Output the player count
echo $playerCount;
?>
