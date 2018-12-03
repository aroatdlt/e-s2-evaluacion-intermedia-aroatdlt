'use strict';

const writeYourNumber = document.querySelector('#choose_number');
const button = document.querySelector('.btn');
const getTrack = document.querySelector('.feedback');

const probeYourLuck = () => {
    if (writeYourNumber.innerHTML === '12') {
        getTrack.innerHTML = `Enhorabuena! ${writeYourNumber.innerHTML} es el número premiado!`;
    }
}


button.addEventListener('click', probeYourLuck);




