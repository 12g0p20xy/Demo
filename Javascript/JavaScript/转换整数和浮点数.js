// parseInt(string); 提取字符串为整数
// parseFloat(string); 提取字符串为浮点数

parseInt("10");
parseInt("100px");
parseInt("Rex10");	// 首字符不是数字，返回NaN
parseInt("10and20"); // 只提取第一个数字
parseInt("10+20");
parseInt("10000000");
parseInt("3.14");
parseInt("1f", 16); // 以16为基数

parseFloat("100.666px"); // 返回浮点数