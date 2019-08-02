// 微信二维码出现
$(function(){
	$('a.wechat').mouseenter(function(){
	var left = $(this).position().left;
		var top = $(this).position().top;
		var width1 = $(this).css('width');
		var width2 = $('img#wechatcode').css('width');
		var top2 = parseInt(top)- parseInt(width2) - 10;
		var destLeft = parseInt(left)+(parseInt(width1)-parseInt(width2)/2)/2;
		$('img#wechatcode').css('left',destLeft);
		$('img#wechatcode').css('top',top2);
		$('img#wechatcode').fadeIn(500);
	});
	$('a.wechat').mouseleave(function(){
		$('img#wechatcode').fadeOut(100);
	});
})