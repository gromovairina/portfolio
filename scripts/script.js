new Swiper('.swiper', {
  simulateTouch: true,
  keyboard: {
    //Включить\выключить
    enabled: true,
    onlyInViewport: true,
  },
  autoplay: true,
  loop: true,
  autoHeight: true,

  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
})

//бургер

const burger = document.querySelector('.burger')
const menu = document.querySelector('.nav__list')
const body = document.body
const menuItems = menu.querySelectorAll('.nav__link')

burger.addEventListener('click', () => {
  body.classList.toggle('fixed-page')
  menu.classList.toggle('open-list')
  burger.classList.toggle('open')
})

menuItems.forEach((el) => {
  el.addEventListener('click', () => {
    body.classList.remove('fixed-page')
    menu.classList.remove('open-list')
    burger.classList.remove('open')
  })
})

//открытие и закрытие выпадающего меню
const linkList = document.querySelector('.nav__li-list')
const learnList = document.querySelector('.nav__learn-list')
const headerOverlay = document.querySelector('.header__overlay')
const mainCapter = document.querySelector('.main')

linkList.addEventListener('click', () => {
  learnList.classList.toggle('nav__learn-list-open')
})

headerOverlay.addEventListener('click', (e) => {
  if (e.target == headerOverlay) {
    learnList.classList.remove('nav__learn-list-open')
  }
})
mainCapter.addEventListener('click', (e) => {
  learnList.classList.remove('nav__learn-list-open')
})

//модальное окно с формой
const btn = document.querySelector('.button')
const overlay = document.querySelector('.form-overlay')
const modal = document.querySelector('.popup')
const closest = document.querySelector('.popup-close')

btn.addEventListener('click', (e) => {
  overlay.classList.toggle('form-overlay-visible')
  modal.classList.toggle('popup-visible')
  closest.classList.add('popup-close-visible')
  body.classList.toggle('fixed-page')
})

overlay.addEventListener('click', (e) => {
  overlay.classList.remove('form-overlay-visible')
  modal.classList.remove('popup-visible')
  closest.classList.remove('popup-close-visible')
  body.classList.remove('fixed-page')
})

closest.addEventListener('click', (e) => {
  overlay.classList.remove('form-overlay-visible')
  modal.classList.remove('popup-visible')
  closest.classList.remove('visible')
  body.classList.remove('fixed-page')
})
//маска для номера телефона в форме
const form = document.querySelector('.modal-form')
const telSelector = form.querySelector('input[type="tel"]')
const inputMask = new Inputmask('+7(999)999-99-99')
inputMask.mask(telSelector)

//подключение aos - анимации при скролле

AOS.init()

//аккордеон

let accordionContainer = document.querySelectorAll('.accordion-container')

accordionContainer.forEach((el) => {
  el.addEventListener('click', change)
})

function change() {
  if (this.classList.contains('select')) {
    hideAll()
  } else {
    hideAll()
    this.classList.add('select')
    showText(this.nextElementSibling)
    this.classList.add('span-active')
  }
}

function hideAll() {
  let divEl = document.querySelectorAll('.tabs__text')

  for (var i = 0; i < accordionContainer.length; i++) {
    accordionContainer[i].classList.remove('select')
  }
  for (var i = 0; i < accordionContainer.length; i++) {
    accordionContainer[i].classList.remove('span-active')
  }
  for (var i = 0; i < divEl.length; i++) {
    divEl[i].style.height = '0'
  }
}
function showText(textEl) {
  textEl.style.height = textEl.scrollHeight + 'px'
}

//блоки новостей
const showNews = document.querySelectorAll('.news__show')
const hideNews = document.querySelectorAll('.news__hide')

showNews.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path')

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add('news__text-active')

    this.el.style.display = 'none'
  })
})
hideNews.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-hide')

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.remove('news__text-active')

    showNews.style.display = ''
  })
})

//модальное окно с формой записи
const btnsAppointment = document.querySelectorAll('.button-appointment')
const modalAppointment = document.querySelector('#popup-appointment')
const overlayAppointment = document.querySelector('#form-overlay-appointment')

const closestAppointment = document.querySelector('#popup-close-appointment')

btnsAppointment.forEach((el) => {
  el.addEventListener('click', (e) => {
    modalAppointment.classList.add('popup-visible')
    overlayAppointment.classList.toggle('form-overlay-visible')

    closestAppointment.classList.add('popup-close-visible')
    body.classList.toggle('fixed-page')
  })
})
overlayAppointment.addEventListener('click', (e) => {
  overlayAppointment.classList.remove('form-overlay-visible')
  modalAppointment.classList.remove('popup-visible')
  closestAppointment.classList.remove('popup-close-visible')
  body.classList.remove('fixed-page')
})

closestAppointment.addEventListener('click', (e) => {
  overlayAppointment.classList.remove('form-overlay-visible')
  modalAppointment.classList.remove('popup-visible')
  closestAppointment.classList.remove('visible')
  body.classList.remove('fixed-page')
})

//маска для номера телефона в форме записи
const formAppointment = document.querySelector('#form-appointment')
const telSelectorAppointment = formAppointment.querySelector(
  'input[type="tel"]',
)
const inputMaskAppointment = new Inputmask('+7(999)999-99-99')
inputMaskAppointment.mask(telSelectorAppointment)

//установка календаря в форму записи
let currentDate = new Date()
let someDate = new Date()
someDate.setMonth(someDate.getMonth() + 1) //установлено ограничение по времени с сегодняшнего дня на месяц вперед.
/*ограничение на 10 дней: someDate.setDate(someDate.getDate() + 10);*/

new AirDatepicker('#date', {
  isMobile: true,
  autoClose: true,
  position: 'right center',
  minDate: currentDate, //минимальная дата сегодня
  maxDate: someDate, //максимальная дата + один месяц
  buttons: ['today', 'clear'],
})
