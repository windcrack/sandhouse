$(document).ready(function(){
	let body = document.querySelector('body'),
		plan = document.querySelector('.plan'),
		more = document.querySelector('.more'),
		modalClose = document.querySelector('.modalClose'),
		modalForm = document.querySelector('.modalForm');
	body.addEventListener('click', e => {
		let target = e.target;
		if(target == plan){
			$('.modal').slideDown(300);
			$('.modalForm').show(300);
			$('body').css('overflow-y', 'hidden');
			$('.modalMainBlock').html('<img src="img/partnet2.png">');
			
		}
		if (target == more) {
			$('.modal').slideDown(300);
			$('.modalForm').show(300);
			$('body').css('overflow-y', 'hidden');
			$('.modalMainBlock').html('<p class="modalText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vero unde earum impedit hic aliquid possimus aliquam, vel veritatis eveniet at, distinctio quibusdam ea. Cum consectetur sapiente consequuntur, ipsam harum repellendus, numquam, perspiciatis ad, sit delectus nemo sequi deserunt illo amet praesentium! Quod fugiat, nihil necessitatibus soluta odio itaque nisi.</p>');
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
});