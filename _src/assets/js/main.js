'use strict';

const writeYourNumber = document.querySelector('.choose_number');
const button = document.querySelector('.btn');
const getTrack = document.querySelector('.feedback');
const countUp = document.querySelector('.counter');
let randomNumber;
let counter = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function counterClick() {
  countUp.innerHTML = counter;
}

randomNumber = getRandomNumber(100);
console.log(randomNumber);

const handledprobeYourLuck = () => {
  const inputElement = parseInt(writeYourNumber.value);
  if (inputElement === randomNumber) {
    getTrack.innerHTML = `HAS GANADO, CAMPEONA!`;
  } else if (inputElement > randomNumber) {
    getTrack.innerHTML = `Demasiado alto`;
  } else if (inputElement < randomNumber) {
    getTrack.innerHTML = `Demasiado bajo`;
  }
  counter = counter + 1;
  counterClick();
}

button.addEventListener('click', handledprobeYourLuck);
counterClick();