<?php
  error_reporting(E_ALL & ~ (E_WARNING | E_NOTICE));
  
  require('smarty/Smarty.class.php');
  $smarty = new Smarty();

  $smarty -> assign('title', '测试用标题');
  $smarty -> assign('content', '测试用内容');

  $smarty -> display('test.tpl');
?>