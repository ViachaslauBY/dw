const body = document.body;
const shadow = document.querySelector('.header__shadow');
const burgerButton = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

const toggleMenu = () =>{
  burgerButton.classList.toggle('active');
  nav.classList.toggle('active');
  body.classList.toggle('lock');
  shadow.classList.toggle('active');
};

const removeMenu = () => {
  burgerButton.classList.remove('active');
  nav.classList.remove('active');
  body.classList.remove('lock');
  shadow.classList.remove('active');
}

burgerButton.addEventListener('click', toggleMenu); //открытие по клику

navLinks.forEach(link => link.addEventListener('click', removeMenu)); //закрытие по ссылкам 

shadow.addEventListener('click', removeMenu); //закрытие по пустому месту


window.addEventListener('keydown', (event) => { //закрытие на Escape 
  if (event.key === 'Escape') {
    removeMenu();
  }
});