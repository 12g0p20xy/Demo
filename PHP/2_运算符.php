<?php
  header("Content-Type:text/html; charset=utf-8");

  $a = $b = $c = $d = $e = 100;

  $a += 10;
  $b -= 10;
  $c *= 10;
  $d /= 10;
  $e %= 10;

  $result = "结果是：<br>";
  $result .= "\$a += 10 的值为：${a}<br>";
  $result .= "\$b -= 10 的值为：${b}<br>";
  $result .= "\$c *= 10 的值为：${c}<br>";
  $result .= "\$d /= 10 的值为：${d}<br>";
  $result .= "\$e %= 10 的值为：${e}<br>";

  echo $result;
?>