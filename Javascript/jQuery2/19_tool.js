(function($) {
	// 防止命名空间污染，创建了一个自己的命名空间叫myFirstPlugin
	$.myFirstPlugin = {
		// 求和
		sum : function(array){
			var total = 0;
			$.each(array, function(index, value) {
				value = $.trim(value);
				value = parseFloat(value) || 0;
				total += value;
			});
			return total;
		},

		// 求平均值
		average : function(array){
			if ($.isArray(array)) {
				return $.myFirstPlugin.sum(array) / array.length;
			}
			return '';
		}
	};
}) (jQuery);