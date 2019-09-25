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

//tabs
$(".tabs-item").not(":first").hide();
$('#tabs_container .tabs li').click(function() {
	$('#tabs_container .tabs li').removeClass("active").eq($(this).index()).addClass("active");
	$('.tabs-item').hide().eq($(this).index()).fadeIn()
}).eq(0).addClass('active');

//sldiers
var left = 0;
var leftTwo = 0;
function slideLeft() {
	var polosa = $('.slider_one .polosa')[0];
	left -= 190;
	if(left < -480){
		left = 0;
	}
	polosa.style.left = left + 'px';
}
function slideRight() {
	var polosa = $('.slider_one .polosa')[0];
	left += 190;
	if(left >= 0){
		left = 0;
	}
	polosa.style.left = left + 'px';
}
//second slider
function slideRightTwo(){
	var polosa2 = $('.slider_two .polosa')[0];
	leftTwo += 190;
	if(leftTwo >= 0){
		leftTwo = 0;
	}
	polosa2.style.left = leftTwo + 'px';
}
function slideLeftTwo(){
	var polosa2 = $('.slider_two .polosa')[0];
	leftTwo -= 190;
	if(leftTwo < -480){
		leftTwo = 0;
	}
	polosa2.style.left = leftTwo + 'px';
}
$('#to_right').click(slideLeft);
$('#to_left').click(slideRight);
$('#to_right__two').click(slideLeftTwo);
$('#to_left__two').click(slideRightTwo);

//questions accordion
$('.questions > .question > .question_title').click(function(){
	$(this).parents('.question').find('p, hr').slideToggle(200);
})