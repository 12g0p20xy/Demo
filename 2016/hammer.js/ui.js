$(function(){

	var $box = $('.box'),
		$result = $box.siblings('p');
	var myHammer = new Hammer($box.get(0)); //转换成原生DOM
	myHammer.get("pan").set({
	    // 默认是禁用纵向移动的，用下面这行代码开启
	    direction: Hammer.DIRECTION_ALL
	});
	myHammer.get("rotate").set({
	    // 默认是rotate禁用的，用下面这行代码开启
	    enable: true
	});
	myHammer.on('pan rotate', function(e) {
		var info = {
			type: '检测到' + e.type,
			pos: 'x位移：' + e.deltaX + '，' + 'y位移：' + e.deltaY,
			rotate: e.rotation
		};
		$result.text(info.type + ' ' + info.pos + ' ' + info.rotate);
	});

});