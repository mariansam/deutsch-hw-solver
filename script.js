const addPlus = document.getElementById('add-plus');
const addMinus = document.getElementById('add-minus');

const input = document.getElementById('input');

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
var nextLetter = 1;

addPlus.onclick = () => {
    input.innerText += ' + ' + alphabet[nextLetter];
    nextLetter++;
};

addMinus.onclick = () => {
    input.innerText += ' - ' + alphabet[nextLetter];
    nextLetter++;
};