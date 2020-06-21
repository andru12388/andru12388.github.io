$(function() {

	$('#my-menu').mmenu({
		counters: true,
		extensions: ['fx-listitems-slide', 'border-full', 'listview-huge', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo2.png" alt="логотип">'
		},
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');	
	});

	var HeaderTop = $('.h-topline').offset().top;
	$(window).scroll(function(){
		if( $(window).scrollTop() > HeaderTop ) {
			$('.h-topline').addClass('stickytop');
		} else {
			$('.h-topline').removeClass('stickytop');
		}
	});

	$('.button-readmore1').click(function () {
		$('.art-1-text').toggle('slow', function () {
			if ($(this).is(':visible')) {
				$('.button-readmore1').val('Скрыть');
			}
			else {
				$('.button-readmore1').val('Подробнее');
			}
		});
	});

	$('.button-readmore2').click(function () {
		$('.art-2-text').toggle('slow', function () {
			if ($(this).is(':visible')) {
				$('.button-readmore2').val('Скрыть');
			}
			else {
				$('.button-readmore2').val('Подробнее');
			}
		});
	});

	$('.button-readmore3').click(function () {
		$('.art-3-text').toggle('slow', function () {
			if ($(this).is(':visible')) {
				$('.button-readmore3').val('Скрыть');
			}
			else {
				$('.button-readmore3').val('Подробнее');
			}
		});
	});

	// Таб меню товара
	$(".tab_item").not(":first").hide();
	$(".wrapper1 .tab").click(function() {
		$(".wrapper1 .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	$('.owl-carousel').owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		navText: ['<i class="fas fa-angle-left"></i>',
		'<i class="fas fa-angle-right"></i>'],
		dots: false,
		autoplay: true,
		mouseDrag: true,
		autoplayTimeout: 6000,
		smartSpeed: 950
	});

	wow = new WOW({
		mobile: false
	})
	wow.init();

	// Кнопка вверх
	$(window).scroll(function() {
		if ($(this).scrollTop() != 0) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});

	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	//E-mail Ajax Send
	$("form.c-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});