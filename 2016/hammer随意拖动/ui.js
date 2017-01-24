var $ctrl = $('.ctrl'),
	$info = $('.info'),
	$box = $('.box');
var myHammer = new Hammer($ctrl.get(0)); //转换成原生DOM
myHammer.get("pan").set({
    // 默认是禁用纵向移动的，用下面这行代码开启
    direction: Hammer.DIRECTION_ALL
});

$(document).on('mousedown', $ctrl, function() {
	$box.removeClass('go-back')
		.css({
			top: 30 + '%',
			left: 50 + '%'
		});
	// var bodyH = $(window).height();
	// boxTop = ($box.offset().top/bodyH) * 100;
});
$(document).on('mouseup mouseout', $ctrl, function() {
	$box.addClass('go-back');
});

myHammer.on('pan', function(e){
	$box.css({
		top: (e.deltaY/5 + 30) + '%',
		left: (e.deltaX/5 + 50) + '%'
	});
	$info.text('x:' + e.deltaX + ' ' + 'y:' + e.deltaY);
});