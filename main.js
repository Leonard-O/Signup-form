const signUp = document.querySelector('#signUp');
const signIn = document.querySelector('#signIn');
const logIn = document.querySelector('#logIn');
const btn = document.querySelector('#btn');
const create = document.querySelector('#create');

logIn.addEventListener('click', () => {
	signUp.style.display = 'none';
	signIn.style.display = 'flex';
});
create.addEventListener('click', () => {
	signUp.style.display = 'flex';
	signIn.style.display = 'none';
});
