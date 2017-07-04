var Shake = (function() {

	var oCount = document.getElementById('count'),
		count = 0; // 计数
	var SHAKE_THRESHOLD = 3000, // 触发摇动的最小距离
		last_update = 0, // 最后更新的时间
		x = y = z = last_x = last_y = last_z = 0; // 移动距离

	// 绑定事件
	function eventStart() {
		if (window.DeviceMotionEvent) {
			window.addEventListener('devicemotion', deviceMotionHandler, false);
		}
		else {
			alert('本设备不支持devicemotion事件');
		}
	}

	// 移除绑定事件
	function eventEnd() {
		window.removeEventListener('devicemotion', deviceMotionHandler, false);
		alert('游戏结束！您的得分为 ' + count);
		setTimeout(function(){
			window.location.href = 'rank.html';
		}, 500);
	}

	// 摇动检测
	function deviceMotionHandler(eventData) {
		var acceleration = eventData.accelerationIncludingGravity,
			curTime = new Date().getTime(),
			speed = 0;

		if ((curTime - last_update) > 100) {
			var diffTime = curTime - last_update;
			last_update = curTime;
			x = acceleration.x;
			y = acceleration.y;
			z = acceleration.z;
			speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;

			if (speed > SHAKE_THRESHOLD) {
				addNum();
			}
			last_x = x;
			last_y = y;
			last_z = z;
		}
	}

	// 更改页面数字
	function addNum() {
		count++;
		oCount.innerHTML = count;
	}
	
	return {
		init: function(t) {
			eventStart();
			// 计时，t秒后游戏结束
			setTimeout(function() {
				eventEnd();
			}, t);
		}
	};

})();