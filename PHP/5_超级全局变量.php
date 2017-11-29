<?php

header("Content-Type:text/html; charset=utf-8");

// 输出 $_SERVER 所有的下标和值
// foreach ($_SERVER as $key => $value) {
//   echo '$_SERVER['.$key.']='.$value.'<br>';
// }

// 输出 $_ENV 所有的下标和值
// foreach ($_ENV as $key => $value) {
//   echo '$_ENV['.$key.']='.$value.'<br>';
// }

// 使用 $_GET 来获取在 url 或者在表单 name 中传入的参数
// 例：在地址栏输入 localhost/test.php?action=1&user=lamp&page=5
echo '参数 action 为'.$_GET["action"].'<br>';
echo '参数 user 为'.$_GET["user"].'<br>';
// 甚至可以直接引用同名变量
echo '参数 page 为'.$page.'<br>';

// $_POST 同上

// $_REQUEST 包含 $_GET、$_POST 和 $_COOKIE 的全部内容
// 速度较慢，不推荐使用
echo '通过 $_REQUEST 访问参数 page：'.$_REQUEST["page"].'<br>';

// 表单上传文件必须通过 POST 提交，但无法通过 $_POST 获取内容，需要使用 $_FILES

?>