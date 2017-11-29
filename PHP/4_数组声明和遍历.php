<?php

header("Content-Type:text/html; charset=utf-8");

// 使用数字下标声明数组
$arr1[0] = 1;
$arr1[1] = "高某";
$arr1[2] = "A 公司";
$arr1[3] = "北京市";
$arr1[4] = "(010)98765432";
$arr1[5] = "gao@php.com";

echo $arr1[0];

// 省略写法
$arr2[] = 1;               // 下标为 0
$arr2[] = "高某";          // 下标为 1
$arr2[] = "A 公司";        // 下标为 2
$arr2[10] = "北京市";      // 下标为 10
$arr2[] = "(010)98765432"; // 下标为 11
$arr2[] = "gao@php.com";   // 下标为 12

echo $arr2[12];

// 使用字符串下标声明数组
$arr3["ID"] = 1;
$arr3["姓名"] = "高某";
$arr3["公司"] = "A 公司";
$arr3["地址"] = "北京市";
$arr3["电话"] = "(010)98765432";
$arr3["EMAIL"] = "gao@php.com";

echo $arr3["姓名"];

// 使用 array() 声明数组
$arr4 = array(
  "ID" => 1,
  "姓名" => "高某",
  "公司" => "A 公司",
  "地址" => "北京市",
  "电话" => "(010)98765432",
  "EMAIL" => "gao@php.com"
);

echo $arr4["电话"];

// 声明一个二维数组
$arr5 = array(
  "联系人1" => array(1, "高某", "A 公司", "北京市"),
  "联系人2" => array(2, "洛某", "B 公司", "上海市"),
  "联系人3" => array(3, "峰某", "C 公司", "天津市")
);

echo $arr5[1][2];


// 遍历数组（一般使用 foreach）
foreach ($arr5 as $key => $contact) {
  echo "<h3>$key</h3>";
  foreach ($contact as $value) {
    echo "$value";
  }
}

?>