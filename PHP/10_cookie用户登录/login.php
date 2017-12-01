<?php

header("Content-Type:text/html; charset=utf-8");

// 删除 cookie 的函数，将时间设置为过期可以删除 cookie
function clearCookies() {
  setcookie('username', '', time() - 3600);
  setcookie('isLogin', '', time() - 3600);
}

if ($_GET['action'] == 'login') {
  // 清除之前设置的 cookie
  clearCookies();

  // 检查用户名和密码
  if ($_POST['username'] == 'admin' && $_POST['password'] == '123456') {
    // 在 cookie 中设置标识符 username，值为表单提交的值，期限为一周
    setcookie('username', $_POST['username'], time() + 3600*24*7);
    // 在 cookie 中设置标识符 isLogin，用于在其他页面检测用户是否登录
    setcookie('isLogin', '1', time() + 3600*24*7);
    // cookie 设置成功后跳转到网站首页
    header('Location: index.php');
  }
  else if ($_GET['action'] == 'logout') {
    // 退出登录则清除 cookie
    clearCookies();
  }
  else {
    die('用户名或密码错误！');
  }
}

?>

<html>
<head>
  <title>用户登录</title>
</head>
<body>
  <form action="login.php?action=login" method="post">
    用户名：<input type="text" name="username" placeholder="admin">
    <br>
    密码： <input type="text" name="password" placeholder="123456">
    <br>
    <button type="submit">登录</button>
    <button type="reset">重置</button>
  </form>
</body>
</html>