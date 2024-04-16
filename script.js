function typeArea(typing) {
	document.getElementById('area').innerHTML += typing;
}

function backSps() {
	document.getElementById('area').innerHTML = document.getElementById('area').innerHTML.slice(0, -1);
}

//============= digits ==================//

let dig = document.querySelector('.dig'), //dig ----------
	symb = document.querySelector('.symb'); //symb -------
//=============   letters  ==================//
//-------------------en------------------------------------
let allLet = document.getElementById('allLet'),
	allLetUp = document.getElementById('allLetUp');
//-------------------ua------------------------------------
let allLetUa = document.getElementById('allLetUa'),
	allLetUpUa = document.getElementById('allLetUpUa'),

//================= backspace ===========================

backspace = document.getElementById('backspace'),
backspace2 = document.getElementById('backspace2'),
space = document.getElementById('space'),
enter = document.getElementById('enter'),
area = document.getElementById('area');

backspace.addEventListener('click', backSps);
backspace2.addEventListener('click', backSps);

//==================enter==========================

enter.addEventListener('click', enterKey);

function enterKey() {
	document.getElementById('area').innerHTML += '\n';
}

//================= switches =====================//

//button caps---------------------------------------

let caps = document.querySelector('#caps');
caps.addEventListener('click', (event) => {

	dig.classList.toggle('hidden');
	symb.classList.toggle('hidden');
	allLet.classList.toggle('hidden');
	allLetUp.classList.toggle('hidden');
	event.stopPropagation();
});

let caps2 = document.querySelector('#caps2');
caps2.addEventListener('click', (event) => {

	dig.classList.toggle('hidden');
	symb.classList.toggle('hidden');
	allLet.classList.toggle('hidden');
	allLetUp.classList.toggle('hidden');
	event.stopPropagation();
});

let caps3 = document.querySelector('#caps3');
caps3.addEventListener('click', (event) => {

	dig.classList.toggle('hidden');
	symb.classList.toggle('hidden');

	allLetUa.classList.toggle('hidden');
	allLetUpUa.classList.toggle('hidden');
	event.stopPropagation();
});

let caps4 = document.querySelector('#caps4');
caps4.addEventListener('click', (event) => {

	dig.classList.toggle('hidden');
	symb.classList.toggle('hidden');

	allLetUa.classList.toggle('hidden');
	allLetUpUa.classList.toggle('hidden');
	event.stopPropagation();
});

//Shift-------------------------------------------


let lshift0 = document.querySelector('.lshift0');
lshift0.addEventListener('click', (event) => {

	shift.classList.toggle('hidden');
	shiftua.classList.toggle('hidden');
	event.stopPropagation();
});

let shiftua = document.querySelector('.shiftua');

let lshift1 = document.querySelector('.lshift1');

lshift1.addEventListener('click', (event) => {
	console.log('lshift1');

	shift.classList.toggle('hidden');
	shiftua.classList.toggle('hidden');
	event.stopPropagation();
});

let lshift2 = document.querySelector('.lshift2');
lshift2.addEventListener('click', (event) => {

	shift.classList.toggle('hidden');
	shiftua.classList.toggle('hidden');
	event.stopPropagation();
});

let shift = document.querySelector('.shift');

let lshift = document.querySelector('.lshift');
lshift.addEventListener('click', (event) => {

	shift.classList.toggle('hidden');
	shiftua.classList.toggle('hidden');
	event.stopPropagation();
});
