$(document).ready(function(){var t=$(".close_open"),i=$(".menu");$(window).width()<=600&&i.hide(),t.click(function(){t.toggleClass("close_animation"),i.slideToggle(200)}),$(window).scroll(function(){100<=$(window).scrollTop()?(t.addClass("fixed"),i.addClass("fixed")):(t.removeClass("fixed"),i.removeClass("fixed"))}),$(".tabs-item").not(":first").hide(),$("#tabs_container .tabs li").click(function(){$("#tabs_container .tabs li").removeClass("active").eq($(this).index()).addClass("active"),$(".tabs-item").hide().eq($(this).index()).fadeIn()}).eq(0).addClass("active");var e=0,o=0;$("#to_right").click(function(){var t=$(".slider_one .polosa")[0];(e-=190)<-480&&(e=0),t.style.left=e+"px"}),$("#to_left").click(function(){var t=$(".slider_one .polosa")[0];0<=(e+=190)&&(e=0),t.style.left=e+"px"}),$("#to_right__two").click(function(){var t=$(".slider_two .polosa")[0];(o-=190)<-480&&(o=0),t.style.left=o+"px"}),$("#to_left__two").click(function(){var t=$(".slider_two .polosa")[0];0<=(o+=190)&&(o=0),t.style.left=o+"px"}),$(".questions > .question > .question_title").click(function(){$(this).parents(".question").find("p, hr").slideToggle(200),$(this).parents(".question").find("img").toggleClass("rotate")}),$("h2 span").each(function(){var t=$(this),i=t.attr("data-count");$({countNum:t.text()}).animate({countNum:i},{duration:3e3,easing:"linear",step:function(){t.text(Math.floor(this.countNum))},complete:function(){t.text(this.countNum)}})});var c=$(".fourth_section").offset().top;$(window).bind("scroll",function(){var t=$(this).scrollTop();c<t&&($(".map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.7886601774903!2d37.55118177793059!3d55.76217339989372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bd4f854dbd7%3A0x6408e4fabe42e78e!2zMi3RjyDQl9Cy0LXQvdC40LPQvtGA0L7QtNGB0LrQsNGPINGD0LsuLCAxMyDRgdGC0YDQvtC10L3QuNC1IDQzLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTIzMDIy!5e0!3m2!1sru!2skz!4v1569385263253!5m2!1sru!2skz" width="80%" height="430" frameborder="0" style="border:0;" allowfullscreen=""></iframe><div class="circle"><img src="app/img/logo.png" alt=""><a href="tel:+74957956636">+7(459) 795-66-36</a><a href="info@keylegal.ru">info@keylegal.ru</a><p>123022, Россия, Москва, <br> 2-ая Звенигородская <br>ул., д.13, стр.43</p></div>'),$(window).unbind("scroll"))}),$("#accr_right__click").click(function(){$(".fourth_section .accreditation_container .accreditation_block:nth-child(2)").hide(),$(".fourth_section .accreditation_container .accreditation_block:last-child").show()}),$("#accr_left__click").click(function(){$(".fourth_section .accreditation_container .accreditation_block:nth-child(2)").show(),$(".fourth_section .accreditation_container .accreditation_block:last-child").hide()})});