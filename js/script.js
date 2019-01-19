$(document).ready(function(){
	let body = document.querySelector('body'),
		plan = document.querySelector('.plan'),
		more = document.querySelector('.more'),
		modalClose = document.querySelector('.modalClose'),
		modalForm = document.querySelector('.modalForm');
		data = {
			img: '<img src="img/partnet2.png">',
			textmodal: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vero unde earum impedit hic aliquid possimus aliquam, vel veritatis eveniet at, distinctio quibusdam ea. Cum consectetur sapiente consequuntur, ipsam harum repellendus, numquam, perspiciatis ad, sit delectus nemo sequi deserunt illo amet praesentium! Quod fugiat, nihil necessitatibus soluta odio itaque nisi.'
		}
	body.addEventListener('click', e => {
		let target = e.target;
		if(target == plan){
			$('.modal').slideDown(300);
			$('.modalForm').show(300);
			$('body').css('overflow-y', 'hidden');
			$('.modalMainBlock').html(data.img);
			
		}
		if (target == more) {
			$('.modal').slideDown(300);
			$('.modalForm').show(300);
			$('body').css('overflow-y', 'hidden');
			$('.modalMainBlock').html(`<p class="modalText">${data.textmodal}</p>`);
		}
		if(target == modalClose){
			$('.modal').slideUp(300);
			$('.modalForm').hide(300);
			$('body').css('overflow-y', 'visible');
		}
		if(target == modalForm){
			$('.modal').slideUp(300);
			$('.modalForm').hide(300);
			$('body').css('overflow-y', 'visible');
		}
	});
	$('[href="#sandhouse"]').on('click', function (e) {
		let gomap = $(this);
		$('html, body').stop().animate({
			scrollTop: $(gomap.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
		// return false;
	});
	$('[href="#comm"]').on('click', function (e) {
		let gocom = $(this);
		$('html, body').stop().animate({
			scrollTop: $(gocom.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
		// return false;
	});
	$('[href="#footer"]').on('click', function (e) {
		let gofoo = $(this);
		$('html, body').stop().animate({
			scrollTop: $(gofoo.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
		// return false;
	});
	$('[href="#descritp"]').on('click', function (e) {
		let godesc = $(this);
		$('html, body').stop().animate({
			scrollTop: $(godesc.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
		// return false;
	});
	$('[href="#app"]').on('click', function (e) {
		let godapp = $(this);
		$('html, body').stop().animate({
			scrollTop: $(godapp.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
		// return false;
	});
	// Телефоны
	$(function(){
	  //2. Получить элемент, к которому необходимо добавить маску
	  $("#phone").mask("8(999) 999-99-99");
	});
	
	// Слайдер
	$('.sliderImg').slick({
		infinity: false,
		arrows: false,
		rows: 2,
		slidesPerRow: 2,
		slideToShow: 4,
		centerMode: true,
		centerPadding: '45px',
		responsive: [
		    {
		      	breakpoint: 600,
		      	settings: {
		        	slidesToShow: 1,
		        	slidesToScroll: 1,
		        	infinite: true,
		        	dots: false,
		        	slidesPerRow: 1,
		      	}
		    }
		]
	});

	$('.partSlide').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		infinity: true,
		centerMode: true,
		centerPadding: '50px',
		responsive: [
			{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows: false
		      }
		    }
		]
	});
	// Paralax
	$('.advantages').paroller({
		factor: 0.5,            // multiplier for scrolling speed and offset
        factorXs: 0.5,           // multiplier for scrolling speed and offset
        type: 'background',     // background, foreground
        direction: 'vertical' // vertical, horizontal
	});
	// Scroll effect
	$('.textDescription').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
	    offset: 300    
   	});
   	$('.sliderImg').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated lightSpeedIn', // Class to add to the elements when they are visible
	    offset: 100    
   	});
   	$('.contactBlockText').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
	    offset: 300    
   	});
   	$('.contactBlockMap').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated lightSpeedIn', // Class to add to the elements when they are visible
	    offset: 100    
   	});
   	$('.advBlock').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
	    offset: 100    
	});
	$('.partSlide').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
	    offset: 100    
   	});
   	$('.comBlockMain').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated flipInX', // Class to add to the elements when they are visible
	    offset: 100    
   	});
   	$('.mainFormBlock').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
	    offset: 100    
	});
});