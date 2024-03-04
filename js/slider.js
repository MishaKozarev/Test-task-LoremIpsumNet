import { bd } from './bd.js';

const body = document.querySelector('body');
const btnLeft = document.querySelector('.slider__btn-prev')
const btnRight = document.querySelector('.slider__btn-next')
const CAROUSEL = document.querySelector('.slider__content')
const leftSlide = document.querySelector('.prev-page')
const centerSlide = document.querySelector('.current-page')
const rightSlide = document.querySelector('.next-page')
const mediaTablet = window.matchMedia("(max-width: 1240px)");
const mediaMobile = window.matchMedia("(max-width: 767px)");
const popupBody = document.querySelector('.popup__body');
const popupBtn = document.querySelector('.popup__btn');
const popup = document.querySelector('.popup');
const popupImg = document.querySelector('.popup__img');
const nameUser = document.querySelector('.name');
const description = document.querySelector('.description');

export function startSlider() {
  popupBtn.addEventListener('click', ()=>{
    removePopupScroll();
    popup.classList.remove('active');
    popupBody.classList.remove('active');
    body.classList.remove('active');
  });

  popupBody.addEventListener('click', ()=>{
    removePopupScroll();
    popup.classList.remove('active');
    popupBody.classList.remove('active');
    body.classList.remove('active');

  });

  function removePopupScroll() {
    if (popup.classList.contains('active'))  {
        body.classList.add('active');
    } else {
        body.classList.remove('active');
    }
  }

  const createCardTemplate = (src, name, num) => {
    const card = document.createElement("div");
    const imgCard = document.createElement("img");
    const cardText = document.createElement("h3");
    const cardBtn = document.createElement("button");
    card.classList.add("card");
    imgCard.classList.add("card__img");
    imgCard.src = src;
    cardText.classList.add("card__text");
    cardBtn.classList.add("card__btn");
    cardText.textContent = name;
    cardBtn.textContent = `${bd[0].button}`
    card.append(imgCard, cardText, cardBtn);

    function openPopup () {
        popup.classList.add('active');
        popupBody.classList.add('active');
        removePopupScroll();
        popupImg.src = bd[num].img;
        nameUser.textContent = bd[num].name;
        description.textContent = bd[num].description;
    }
    card.addEventListener('click', openPopup)
  return card;
  }


  let centerArr = [];
  function creatRandomCenterArr() {
    let length = 3;
    if (mediaTablet.matches) {
      length = 2;
    }
    if (mediaMobile.matches) {
      length = 1;
    }
    while (centerArr.length < length) {
      let num = Math.floor(Math.random() * 8);
      if (centerArr.indexOf(num) === -1) {
          centerArr.push(num);
      }
    }
  }
  creatRandomCenterArr();
  
  let leftArr = [];
  function creatRandomLeftArr() {
    let length = 3;
    if (mediaTablet.matches) {
      length = 2;
    }
    if (mediaMobile.matches) {
      length = 1;
    }
    while (leftArr.length < length) {
      let num = Math.floor(Math.random() * 8);
      if (centerArr.indexOf(num) === -1 && leftArr.indexOf(num) === -1) {
          leftArr.push(num);
      }
    }
  }
  creatRandomLeftArr();

  let rightArr = [];
  function creatRandomRightArr() {
    let length = 3;
    if (mediaTablet.matches) {
      length = 2;
    }
    if (mediaMobile.matches) {
      length = 1;
    }
    while (rightArr.length < length) {
      let num = Math.floor(Math.random() * 8);
      if (
          centerArr.indexOf(num) === -1 && rightArr.indexOf(num) === -1
      ) {
          rightArr.push(num);
      }
    }
  }
  creatRandomRightArr();


  function createCenterSlide() {
    centerSlide.innerHTML = "";
    for (let i = 0; i < centerArr.length; i++) {
      let petImg = `${bd[centerArr[i]].img}`
      let petName = `${bd[centerArr[i]].name}`
      let num = centerArr[i]
      let card = createCardTemplate(petImg, petName, num);
      centerSlide.appendChild(card);
    }
  }
  createCenterSlide();

  function createRightItems() {
    rightSlide.innerHTML = "";
    for (let i = 0; i < rightArr.length; i++) {
      let petImg = `${bd[rightArr[i]].img}`
      let petName = `${bd[rightArr[i]].name}`
      let num = rightArr[i]
      let card = createCardTemplate(petImg, petName, num);
      rightSlide.appendChild(card);
    }
  }
  createRightItems();

  function createLeftSlide() {
    leftSlide.innerHTML = "";
    for (let i = 0; i < leftArr.length; i++) {
      let petImg = `${bd[leftArr[i]].img}`
      let petName = `${bd[leftArr[i]].name}`
      let num = leftArr[i]
      let card = createCardTemplate(petImg, petName, num);
      leftSlide.appendChild(card);
    }
  }
  createLeftSlide();


  const moveRight = () => {
    CAROUSEL.classList.add('transition-right');
  };
  const moveLeft = () => {
    CAROUSEL.classList.add('transition-left');
  };

  btnRight.addEventListener('click', moveRight);
  btnLeft.addEventListener('click', moveLeft);


  CAROUSEL.addEventListener('animationend', (animationEvent)=>{
    if (animationEvent.animationName === 'move-left') {
        CAROUSEL.classList.remove('transition-left');
        rightArr = centerArr;
        centerArr = leftArr;
        leftArr = [];
        creatRandomLeftArr();
    } else {
        CAROUSEL.classList.remove('transition-right');
        leftArr = centerArr;
        centerArr = rightArr;
        rightArr = [];
        creatRandomRightArr();
    }
    createCenterSlide();
    createRightItems();
    createLeftSlide();
  });
  window.addEventListener("resize", () => {
    centerArr = [];
    leftArr = [];
    rightArr = [];
    creatRandomCenterArr();
    creatRandomLeftArr();
    creatRandomRightArr();
    createCenterSlide();
    createLeftSlide();
    createRightItems();
  });
}


