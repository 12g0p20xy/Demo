<?php

$filename = 'uploads/girl.jpg';

header('Content-Type: image/jpg');
header('Content-Disposition: attachment; filename="'.$filename.'"');
header('Content-Length: '.filesize($filename));

readfile($filename);

?>