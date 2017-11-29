<?php

header("Content-Type:text/html; charset=utf-8");

// mktime() 将时间转为 UNIX 时间戳
echo date("M-d-Y", mktime(0, 0, 0, 1, 1, 2009)).'<br>'; // 转换参数里的时间
echo date("M-d-Y", mktime()).'<br>'; // mktime() 等同于 time()，获取当前时间

// 计算时间差
$birthday = mktime(0, 0, 0, 2, 3, 1990);
$now = time();
$age = floor(($now - $birthday) / (3600 * 24 * 365));
echo "年龄为：$age".'<br>';

// date() 格式化 UNIX 时间戳
echo date("Y 年 m 月 d 日 H:i:s").'<br>';

?>