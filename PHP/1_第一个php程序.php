<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <?php
    
    $sysos = $_SERVER['SERVER_SOFTWARE'];
    $sysversion = PHP_VERSION;

    mysql_connect('localhost', 'root', '123456');
    $mysqlinfo = mysql_get_server_info();

    if (function_exists('gd_info')) {
      $gd = gd_info();
      $gdinfo = $gd['GD Version'];
    }
    else {
      $gdinfo = '未知';
    }

    $freetype = $gd['FreeType Support'] ? '支持' : '不支持';
    $allowurl = ini_get('allow_url_fopen') ? '支持' : '不支持';
    $max_upload = ini_get('file_uploads') ? ini_get('upload_max_filesize') : 'Disabled';

    date_default_timezone_set('Etc/GMT-8');
    $systemtime = date('Y-m-d H:i:s', time());

    echo "<table>";
    echo "<caption><h2>系统信息</h2></caption>";
    echo "<tr><td>操作系统：</td><td>".PHP_OS."</td></tr>";
    echo "<tr><td>Web 服务器：</td><td>$sysos</td></tr>";
    echo "<tr><td>PHP 版本：</td><td>$sysversion</td></tr>";
    echo "<tr><td>MySQL 版本：</td><td>$mysqlinfo</td></tr>";
    echo "<tr><td>GD 库版本：</td><td>$gdinfo</td></tr>";
    echo "<tr><td>FreeType：</td><td>$freetype</td></tr>";
    echo "<tr><td>远程文件获取</td><td>$allowurl</td></tr>";
    echo "<tr><td>最大上传限制</td><td>$max_upload</td></tr>";
    echo "<tr><td>服务器时间</td><td>$systemtime</td></tr>";
    echo "</table>";

  ?>
</body>
</html>