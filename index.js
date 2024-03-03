const menu = document.querySelector('.menu');
const iconBurger = document.querySelector('.burger');
const menuList = document.querySelector('.header__list');
const body = document.querySelector('body');
const range = document.querySelector('.input-range__item');
const rangeData = document.querySelector('.range-data');

function openBurger () {
  addMenuList();
  menu.classList.toggle('active');
  iconBurger.classList.toggle('active');
}

function addMenuList() {
  if (!iconBurger.classList.contains('active')) {
      menuList.classList.add('active');
  } else {
      menuList.classList.remove('active');
  }
}

function closeBurger () {
  iconBurger.classList.remove('active');
  menu.classList.remove('active');
  menuList.classList.remove('active');
  body.classList.remove('active');
}

function getRange() {
  rangeData.innerHTML = `${range.value} %`
  range.addEventListener('input', () => {
    rangeData.innerHTML = `${range.value} %` ;
  });
}

function start() {
  iconBurger.addEventListener('click', (openBurger));
  menu.addEventListener('click', closeBurger);
  getRange();
}

start();



