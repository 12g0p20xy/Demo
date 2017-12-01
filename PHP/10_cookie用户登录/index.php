<?php
header("Content-Type:text/html; charset=utf-8");

// 用户已登录则显示用户信息
if ($_COOKIE['isLogin']) {
  echo '您好：'.$_COOKIE['username'];
  echo '<a href="login.php?action=logout">退出登录</a>';
}
// 用户没有登录则跳转到登录页面
else {
  header('Location: login.php');
  exit;
}
?>

<html>
<head>
  <title>首页</title>
</head>
<body>
</body>
</html>