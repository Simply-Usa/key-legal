var closeOpen = $('.close_open');
var menu = $('.menu');
if($(window).width() <= 600){
	menu.hide();
}
closeOpen.click(function(){
	closeOpen.toggleClass('close_animation');
	menu.slideToggle(200);
})
$(window).scroll(function(){
	var windowsScroll = $(window).scrollTop();
	if(windowsScroll >= 100) {
		closeOpen.addClass('fixed');
		menu.addClass('fixed');
	}else{
		closeOpen.removeClass('fixed');
		menu.removeClass('fixed');
	}
});