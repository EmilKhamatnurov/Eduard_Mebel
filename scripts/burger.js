// Данные для открытия меню
const BURGER_OPENED_CLASSNAME = 'burger_open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';
const BODY_FIXED_CLASSNAME_2 = 'body_fixed';

const bodyNode2 = document.querySelector('body');
const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerContentNode = document.querySelector('.js-burger__content')

// Данные для анимации бургера
const BURGER_BTN_FIRST_LINE_ANIMATE_CLASS = 'burger-btn__first-line_animate';
const BURGER_BTN_SECOND_LINE_ANIMATE_CLASS = 'burger-btn__second-line_animate';	
const burgerBtnFirstLine = document.querySelector('.burger-btn__first-line');
const burgerBtnSecondLine = document.querySelector('.burger-btn__second-line');

//для отключения меню при нажатии на элемент меню
const burgerLinks = document.querySelectorAll(".burger__link");
burgerLinks.forEach(Element => Element.addEventListener("click",toggleBurger));

burgerBtnNode.addEventListener('click', toggleBurger);
burgerNode.addEventListener('click', (event) => {
	// Закрытие меню при нажатии на область вне меню
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)
    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode2.classList.toggle(BODY_FIXED_CLASSNAME_2);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
	
	// Анимация бургера
	burgerBtnFirstLine.classList.toggle(BURGER_BTN_FIRST_LINE_ANIMATE_CLASS);
	burgerBtnSecondLine.classList.toggle(BURGER_BTN_SECOND_LINE_ANIMATE_CLASS);
}
