<?php

header("Content-Type:text/html; charset=utf-8");
ini_set('display_errors', 1);
error_reporting(E_ALL);

// 判断文件是否成功上传到服务器，0 表示成功
if ($_FILES['myfile']['error'] > 0) {
  // $_FILES['myfile']['error'] 的值大于 0 都表示有错误
  echo '上传错误：';
  switch ($_FILES['myfile']['error']) {
    case 1:
      echo '上传文件大小超出 PHP 配置文件约定值：upload_max_filesize';
      break;
    case 2:
      echo '上传文件大小超出表单的约定值：MAX_FILE_SIZE';
      break;
    case 3:
      echo '文件只被部分上载';
      break;
    case 4:
      echo '没有上传任何文件';
      break;
  }
  exit;
}

// $_FILES['myfile']['type'] 获取文件的 MIME 类型的主类型和子类型
list($maintype, $subtype) = explode('/', $_FILES['myfile']['type']);
// 这里可以设置限制的上传类型
if ($maintype == 'text') {
  echo '不能上传文本文件！';
  exit;
}

// 定义上传后的位置和新文件名
// ** 记得设置文件夹权限为 777，否则会报错 **
$upfile = './uploads/'.time().$_FILES['myfile']['name'];

// is_uploaded_file() 判断文件是否通过 HTTP POST 上传（防止攻击）
// $_FILES['myfile']['tmp_name'] 是上传的临时文件名
if (is_uploaded_file($_FILES['myfile']['tmp_name'])) {
  // move_uploaded_file() 将文件从临时目录移动到新文件夹
  if (!move_uploaded_file($_FILES['myfile']['tmp_name'], $upfile)) {
    echo '无法将文件移动到指定目录！';
    exit;
  }
}
else {
  echo '上传文件不是一个合法文件！';
  echo $_FILES['myfile']['name'];
  exit;
}

// 上传成功
echo '文件'.$upfile.'上传成功，大小为'.$_FILES['myfile']['size'].'！<br>';

?>