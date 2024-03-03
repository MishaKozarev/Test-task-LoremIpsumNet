const menu = document.querySelector('.menu');
const iconBurger = document.querySelector('.burger');
const menuList = document.querySelector('.header__list');
const body = document.querySelector('body');
const range = document.querySelector('.input-range__item');
const rangeData = document.querySelector('.range-data');
const dropdown = document.querySelector('.dropdown');
const dropdownMain = document.querySelector('.dropdown__main');
const dropdownHeader = document.querySelector('.dropdown__header');
const dropdownTitle = document.querySelector('.dropdown__title');

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
  openDropdown();
}

function openDropdown() {
  dropdown.addEventListener('click', () => {
    dropdownMain.classList.toggle('active');
    dropdownHeader.classList.toggle('active');
    dropdownTitle.classList.toggle('active');
  })
}

start();



