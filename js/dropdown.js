const dropdown = document.querySelector('.dropdown');
const dropdownMain = document.querySelector('.dropdown__main');
const dropdownHeader = document.querySelector('.dropdown__header');
const dropdownTitle = document.querySelector('.dropdown__title');
const dropdownArrow = document.querySelector('.dropdown__arrow');

function openDropdown() {
  dropdown.addEventListener('click', () => {
    dropdownMain.classList.toggle('active');
    dropdownHeader.classList.toggle('active');
    dropdownTitle.classList.toggle('active');
    dropdownArrow.classList.toggle('active');
  })
}

function getDropdownValue() {
  dropdownMain.addEventListener('click', (event) => {
    dropdownTitle.innerHTML = event.target.innerHTML
  });
}

export function getDropdown() {
  openDropdown();
  getDropdownValue();
}


