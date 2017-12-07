<?php

header("Content-Type:text/html; charset=utf-8");

// 开启 session
session_start();

// 注册 session 变量
$_SESSION['username'] = 'admin';
$_SESSION['password'] = '123456';

echo '<a href="demo.php?'.session_name().'='.session_id().'">链接</a>'

?>