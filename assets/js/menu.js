jQuery(document).ready(function($){
	function ensureContactBanner() {
		if ($('#get-in-touch').length) return;

		var bannerHtml = [
			'<section class="section position-relative highlighted-section universal-contact-wrap" id="get-in-touch">',
			'    <div class="container main-container clearfix get-in-touch">',
			'        <div class="col-xs-5 col-xs-offset-1">',
			'            <img src="/assets/img/get_intouch/p_home_connect_typo.svg" class="img-responsive" alt="Let\\'s get in touch" />',
			'        </div>',
			'        <div class="col-xs-5">',
			'            <ul class="social-ul">',
			'                <li class="box-social"><a target="_blank" href="https://www.linkedin.com/in/curlydesigner/">',
			'                        <ion-icon name="logo-linkedin"></ion-icon>',
			'                    </a></li>',
			'                <li class="box-social"><a target="_blank" href="https://www.behance.net/curlydesigner">',
			'                        <ion-icon name="logo-behance"></ion-icon>',
			'                    </a></li>',
			'                <li class="box-social"><a target="_blank" href="mailto: victoria@curlydesigner.com">',
			'                        <ion-icon name="mail-outline"></ion-icon>',
			'                    </a></li>',
			'            </ul>',
			'        </div>',
			'    </div>',
			'</section>'
		].join('\n');

		var $footer = $('footer').first();
		if ($footer.length) {
			$footer.before(bannerHtml);
		} else {
			$('body').append(bannerHtml);
		}
	}

	function closePrimaryNav() {
		$('.box-menu-icon').removeClass('is-clicked');
		$('.box-header').removeClass('menu-is-open');
		$('.box-primary-nav').removeClass('is-visible');
		$('body').removeClass('overflow-hidden');
	}

	ensureContactBanner();

	//open/close primary navigation
	$('.box-primary-nav-trigger').on('click', function(e){
		e.preventDefault();
		$('.box-menu-icon').toggleClass('is-clicked'); 
		$('.box-header').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.box-primary-nav').hasClass('is-visible') ) {
			$('.box-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.box-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});

	$('.box-primary-nav a[href="#get-in-touch"]').on('click', function(e){
		var $target = $('#get-in-touch');
		if (!$target.length) return;

		e.preventDefault();
		e.stopPropagation();
		closePrimaryNav();

		var headerOffset = $('.box-header').outerHeight() + 16;
		$('html, body').stop().animate({
			scrollTop: Math.max(0, $target.offset().top - headerOffset)
		}, 450);
	});

	$('.box-primary-nav a').not('[href="#get-in-touch"]').on('click', function(){
		closePrimaryNav();
	});
	});
