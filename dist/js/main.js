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
//counter
$('h2 span').each(function() {
	var $this = $(this),
	countTo = $this.attr('data-count');
	
	$({ countNum: $this.text()}).animate({
		countNum: countTo
	},
	{
		
		duration: 3000,
		easing:'linear',
		step: function() {
			$this.text(Math.floor(this.countNum));
		},
		complete: function() {
			$this.text(this.countNum);
			//alert('finished');
		}
	});  
});
//lazy load map
var secF = $('.fourth_section');
var secFTop = secF.offset().top;
$(window).bind('scroll', function() {
  var windowTop = $(this).scrollTop();
  if(windowTop > secFTop){
    $('.map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.7886601774903!2d37.55118177793059!3d55.76217339989372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bd4f854dbd7%3A0x6408e4fabe42e78e!2zMi3RjyDQl9Cy0LXQvdC40LPQvtGA0L7QtNGB0LrQsNGPINGD0LsuLCAxMyDRgdGC0YDQvtC10L3QuNC1IDQzLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTIzMDIy!5e0!3m2!1sru!2skz!4v1569385263253!5m2!1sru!2skz" width="80%" height="430" frameborder="0" style="border:0;" allowfullscreen=""></iframe><div class="circle"><img src="app/img/logo.png" alt=""><a href="tel:+74957956636">+7(459) 795-66-36</a><a href="info@keylegal.ru">info@keylegal.ru</a><p>123022, Россия, Москва, <br> 2-ая Звенигородская <br>ул., д.13, стр.43</p></div>');
    $(window).unbind('scroll');
  }
})