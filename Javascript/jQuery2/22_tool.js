(function($){

	$.fn.swapClass = function(class1, class2){
		// 记得加上each隐式迭代
		this.each(function() {
			var $element = $(this); // 注意这一行
			if ($element.hasClass(class1)) {
				$element.removeClass(class1).addClass(class2);
			}
			else if ($element.hasClass(class2)) {
				$element.removeClass(class2).addClass(class1);
			}
		});
	};

})(jQuery)