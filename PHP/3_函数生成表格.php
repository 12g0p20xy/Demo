<?php

header("Content-Type:text/html; charset=utf-8");

// 函数有2个参数，可以传入表格的行数和列数
function table($rows, $cols) {

  // 声明一个空字符串，将下面的计算结果累加到这个字符串里
  $str_table = "";
  
  $str_table .= "<table width=600>";
  $str_table .= "<caption><h1>通过函数输出表格</h1></caption>";

  for ($out=0; $out < $rows; $out++) { 
    if ($out % 2 === 0) {
      $bgcolor = "#fff";
    }
    else {
      $bgcolor = "#ddd";
    }
    $str_table .= "<tr bgcolor=".$bgcolor.">";
    for ($in=0; $in < $cols; $in++) { 
      $str_table .= "<td>".($out * $cols + $in)."</td>";
    }
    $str_table .= "</tr>";
  }

  $str_table .= "</table>";

  // 返回所有的计算结果
  return $str_table;

}

echo table(10, 6);

?>