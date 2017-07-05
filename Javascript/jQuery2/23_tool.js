(function($) {

	$.fn.shadow = function(options) {

		// 设定默认值，这一段要在放上面
		var defaults = {
			copies: 30,
			opacity: .1,
			copyOffset: function(index) {
				return {x: index, y: index};
			}
		};
		var options = $.extend(defaults, options);


		// 设置参数options.copies和options.opacity
		return this.each(function() {
			var $element = $(this);
			for (var i = 0; i < options.copies; i++) { // options.copies参数
				var offset = options.copyOffset(i);
				$element.clone()
				.css({
					position: 'absolute',
					left: $element.offset().left + offset.x,
					top: $element.offset().top + offset.y,
					margin: 0,
					zIndex: -1,
					opacity: options.opacity // options.opacity参数
				})
				.appendTo('body');
			};
		});
	};

})(jQuery);