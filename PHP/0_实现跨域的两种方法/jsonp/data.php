<?php

$callback = $_GET['callback'];

$data = array(1, 2, 3);

echo $callback.'('.json_encode($data).')';

?>