var BASEURL = 'https://www.dipalbhavsar.com/';
AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});
	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();
	// Scrollax
   $.Scrollax();


   var burgerMenu = function() {

		$('.js-dipal-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});
	};
	burgerMenu();

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
			var container = $("#dipal-aside, .js-dipal-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {

				if ( $('body').hasClass('offcanvas') ) {
					$('body').removeClass('offcanvas');
					$('.js-dipal-nav-toggle').removeClass('active');			
				}    	
			}
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {
    			$('body').removeClass('offcanvas');
    			$('.js-dipal-nav-toggle').removeClass('active');			
	    	}
		});
	};
	mobileMenuOutsideClick();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});

		$('.author-slider').owlCarousel({
			autoplay: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: true,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 1
				}
			}
		});

	};
	carousel();

	

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    // mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

 	//[08/31/2019 - DIPAL: Implementing loading navigation] 
  var loadNavigation = function() {
	var jqxhr = $.getJSON( BASEURL + "data/file.json", function(data) {
		var items = [];
		var pageUrl = $(location). attr("href");
		var pageUrlSplit = pageUrl.split('/');
		var pageUrlName = pageUrlSplit[pageUrlSplit.length - 1].split('.')[0];
		for (var i=0;i<data.length;i++){
			if(i==0 && pageUrlName==""){
				items.push("<li class='dipal-active'><a href= '"+data[i].Action+"'>"+data[i].Name+"</a></li>");
			}
			else if(pageUrlName.toLowerCase()==data[i].Action.toLowerCase()){
				items.push("<li class='dipal-active'><a href= '"+data[i].Action+"'>"+data[i].Name+"</a></li>");
			} else {
				items.push("<li><a href= '"+data[i].Action+"'>"+data[i].Name+"</a></li>");
			}
		}
	 	$( "<ul/>", {
	 	  "class": "my-new-list",
	 	  html: items.join( "" )
	 	}).appendTo( "#dipal-main-menu" );
	  })
		 .done(function() {
			loadCategory();
		 })
		 .fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			console.log( "Request Failed: " + err );
		});
		// .always(function() {
		//   console.log( "complete" );
		// });
	   
	  // Perform other work here ...
	   
	  // Set another completion function for the request above
	//   jqxhr.complete(function() {
	// 	console.log( "second complete" );
	//   });

	// $.getJSON( "data/navigation.json", function( data ) {
		
	// 	var items = [];
	// 	$.each( data, function( key, val ) {
	// 		items.push("<li><a href= '"+key+"'>"+val+"</a></li>");
	// 	});
  }
  var loadCategory = function() {
	var jqxhr = $.getJSON( BASEURL + "data/category.json", function(data) {
		var items = [];
		for (var i=0;i<data.length;i++){
			items.push("<li><a href="+ data[i].Action +">"+data[i].Name+"<span>("+data[i].Count+")</span></a></li>");
		}
	 	$( "<ul/>", {
	 	  "class": "categories",
	 	  html: items.join( "" )
	 	}).appendTo( "#dipal-category" );
	  })
	  .fail(function( jqxhr, textStatus, error ) {
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err );
	});
  }

  loadNavigation();
})(jQuery);

