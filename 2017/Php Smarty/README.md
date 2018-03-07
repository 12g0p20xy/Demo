# 安装 Smarty

在[官网](https://www.smarty.net/)下载 Smarty 压缩包，解压后会看到一个 lib 文件夹，将这个文件夹复制到对应的网站目录下；

一个使用 Smarty 模板的文件结构如下：

index.php        初始化 Smarty 的文件
libs
template         模板文件所在目录
 |__ test.tpl    模板文件
template_c       由 Smarty 自动生成的编译后的目录
configs
cache

之后，我们在 index.php 中使用 `require()` 命令引用 Smarty，使用 `assgin()` 设置模板文件的变量并赋值，最后使用 `display()` 来输出模板文件：

```php
<?php
  require('smarty/Smarty.class.php');
  $smarty = new Smarty();

  $smarty -> assign('title', '测试用标题');
  $smarty -> assign('content', '测试用内容');

  $smarty -> display('test.tpl');
?>
```

然后在 `test.tpl` 中建立我们的第一个模板文件：

```html
<html>
<head>
  <meta charset="UTF-8">
  <title>{$title}</title>
</head>
<body>
  {$content}
</body>
</html>
```

完成这一步后打开对应地址，应该就可以看到生成后的页面了。Linux 系统下需要将目录的权限改成 777，这样 Smarty 才可以生成 template_c 目录。