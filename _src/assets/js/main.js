'use strict';

const writeYourNumber = document.querySelector('.choose_number');
const button = document.querySelector('.btn');
const getTrack = document.querySelector('.feedback');

const probeYourLuck = () => {
    if (writeYourNumber.value === 12) {
        getTrack.innerHTML = `Enhorabuena! ${writeYourNumber.value} es el número premiado!`;
    } else if (writeYourNumber.value > 20) {
        getTrack.innerHTML = `Estás lejos del número premiado`;
    } else if (writeYourNumber.value < 8) {
        getTrack.innerHTML = `Estás lejos del número premiado`;
    }
}

button.addEventListener('click', probeYourLuck);




