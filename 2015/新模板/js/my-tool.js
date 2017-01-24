// 侧导航？？？
$(function(){
	$(window).scroll(function(){
		if ($(document).scrollTop() > 900) {
			$('.side-nav li').eq(2).addClass('current');
		}else{
			$('.side-nav li').removeClass('current');
		};
	});

// 以背景显示图片100%宽的响应式貌似不能用左右滑动的动画方式
	var sItem = $('.s-item'),
		page = 1,
		len = $('.s-item').length,
		t = null;
	var sliding = function(){
		if (page < len) {
			sItem.eq(page).fadeIn(600).siblings().fadeOut(300);
			t = setTimeout(sliding, 3000);
			page++;
			// console.log(page);
		}else{
			t = setTimeout(sliding, 3000);
			page = 1;
			sItem.eq(0).fadeIn(600).siblings().fadeOut(300);
			// console.log(page);
		};
	};
	t = setTimeout(sliding, 3000);

	// 鼠标经过事件
	$('.slider').hover(function(){
		clearTimeout(t);
	}, function(){
		t = setTimeout(sliding, 0);
	});
});

// 以插入图片的方式可以设置ul宽度1000%，再用js控制li的宽度
	var $sItem2 = $('.s-item2');
	// 调整li的宽度
	$sItem2.width($(window).width());
	$(window).resize(function(){
		$sItem2.width($(this).width());
		$sWidth = $sItem2.width();
	});

	var $sContainer2 = $('.s-container2'),
		$sWidth = $sItem2.width(),
		index = 0,
		len2 = $('.s-item2').length,
		t2 = null;
	var sliding2 = function(){
		if (index < len2) {
			$('.s-tip span').eq(index).addClass('current').siblings().removeClass('current');
			$sContainer2.stop(true, false).animate({left: -$sWidth*index}, 600);
			index++;
			t2 = setTimeout(sliding2, 1000);
			console.log(index);
		}else{
			$sContainer2.stop(true, false).animate({left: 0}, 600);
			index = 0;
			t2 = setTimeout(sliding2, 1000);
			console.log(index);
		};
	};
	setTimeout(sliding2, 1000);

	// 添加页码标识和两边控制按钮
	var $sBtn = '<div class="prevBtn"></div><div class="nextBtn"></div><div class="s-tip">';
	for (var i = 0; i < len2; i++) {
	    $sBtn += '<span></span>';
	};
	$sBtn += '</div>'
	$('.slider2').append($sBtn);

	// 点击按钮导航
	$('.s-tip span').click(function(){
		index = $(this).index();
		clearTimeout(t2);
		sliding2();
	});
	$('.prevBtn').click(function(){
		// if (index < len2) {
		// 	index -= 1;
		// 	clearTimeout(t2);
		// 	sliding2();
		// }else{
		// 	index = -1;
		// 	clearTimeout(t2);
		// 	sliding2();
		// };
	});

	// 轮播图hover效果
	$('.slider2').hover(function(){
		$('.prevBtn').animate({left: 10, opacity: 1}, 300);
		$('.nextBtn').animate({right: 10, opacity: 1}, 300);
	}, function(){
		$('.prevBtn').animate({left: -30, opacity: 0}, 300);
		$('.nextBtn').animate({right: -30, opacity: 0}, 300);
	});
});