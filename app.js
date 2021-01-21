// let body = document.querySelector('body');
// let modal = document.querySelector('.modal');

// function showModalByScroll(){
// 	if(window.pageYOffset > document.body.scrollHeight/2) {
// 		modal.classList.add('active');
// 		window.removeEventListener('scroll', function(){
// 			modal.classList.add('active');
// 		})
// 	}
// }

// window.addEventListener('scroll', showModalByScroll)

// menu
let mobileMenu = document.querySelector('.nav-mobile-menu');
let mainMenu = document.querySelector('.menu');
let lock = document.querySelector('body');

mobileMenu.addEventListener('click', function(){
	mobileMenu.classList.toggle('active-menu');
	mainMenu.classList.toggle('active-menu');
	lock.classList.toggle('lock');
})

let displayForm = document.querySelector('.touch-form');
let openForm = document.querySelector('.open-form-button');

openForm.addEventListener('click', function() {
	displayForm.classList.toggle('display');
	openForm.classList.toggle('opened');
	if(openForm.classList.contains('opened')) {
		openForm.textContent = 'Hide form';
	} else {
		openForm.textContent = 'Open form';
	}
})