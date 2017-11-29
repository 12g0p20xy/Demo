<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>留言板</title>
  <style>
    label {
      display: inline-block;
      width: 4em;
      text-align: right;
    }
    input, textarea {
      margin: .5em 0;
    }
  </style>
</head>
<body>
  <?php

    $filename = 'text_data.txt';

    // 检测用户是否按下提交按钮
    if (isset($_POST['submit'])) {
      $message = $_POST['username'].'||'.$_POST['title'].'||'.$_POST['msg'].'<|>';
      // 调用自定义函数，将信息写入文件
      writeMessage($filename, $message);
    }

    if (file_exists($filename)) {
      // 调用自定义函数，读取文件数据
      readMessage($filename);
    }

    function writeMessage($filename, $message) {

      // 以追加模式打开文件
      $fp = fopen($filename, 'a');
      // 锁定文件
      if (flock($fp, LOCK_EX)) {
        // 写入文件
        fwrite($fp, $message);
        // 释放锁定
        flock($fp, LOCK_UN);
      }
      else {
        echo '无法锁定文件！';
      }
      // 关闭文件
      fclose($fp);
      
    }

    function readMessage($filename) {

      // 只读方式打开文件
      $fp = fopen($filename, 'r');
      // 锁定文件
      flock($fp, LOCK_SH);
      // 遍历文件的数据将放入这个字符串
      $buffer = '';
      // 遍历文件数据
      while (!feof($fp)) {
        $buffer .= fread($fp, 1024);
      }

      // 将留言用 <|> 分隔并存入数组
      $data = explode('<|>', $buffer);
      // var_dump($data);
      foreach ($data as $line) {
        // 每行数据再分隔
        list($username, $title, $message) = explode('||', $line);
        if ($username != '' && $title != '' && $message != '') {
          // 输出
          echo $username.'说：';
          echo '&nbsp;'.$title.'，';
          echo $message.'<hr>';
        }
      }

      // 释放锁定并关闭文件
      flock($fp, LOCK_UN);
      fclose($fp);

    }

  ?>
  
  <form action="" method="post">
    <label>用户名：</label>
    <input type="text" name="username">
    <br>
    <label>标 题：</label>
    <input type="text" name="title">
    <br>
    <textarea name="msg" cols="30" rows="4" placeholder="请输入留言！"></textarea>
    <br>
    <button name="submit">留 言</button>
  </form>
</body>
</html>