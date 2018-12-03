'use strict';

const writeYourNumber = document.querySelector('.choose_number');
const button = document.querySelector('.btn');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log('> ' + getRandomNumber(100));

const randomNumber = getRandomNumber;

const getTrack = document.querySelector('.feedback');

const probeYourLuck = () => {

  if (writeYourNumber.value === randomNumber) {
    getTrack.innerHTML = `Has ganado CAMPEONA!`;
  } else if (writeYourNumber.value !== randomNumber) {
    getTrack.innerHTML = `${writeYourNumber.value} está lejos del número premiado`;
  }

  const countDown = document.querySelector('.counter');

  for (let i = 0; i < 100; i = i++); {
    countDown.innerHTML = countDown + i;
  }
}

button.addEventListener('click', probeYourLuck);
