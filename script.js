const input = document.getElementById('input');

const addPlus = document.getElementById('add-plus');
const addMinus = document.getElementById('add-minus');
const addEquals = document.getElementById('add-equals');

const resultBox = document.getElementById('result-box');
const result = document.getElementById('result');
const submitButton = document.getElementById('submit');
const results = document.getElementById('results');

const numbersBox = document.getElementById('numbers-box');
const calculateBox = document.getElementById('calculate-box');
const calculateButton = document.getElementById('calculate');

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let operators = '+';
var nLetters = 1;

addPlus.onclick = () => {
    input.innerText += ' + ' + alphabet[nLetters];
    operators += '+';
    nLetters++;
};

addMinus.onclick = () => {
    input.innerText += ' - ' + alphabet[nLetters];
    operators += '-';
    nLetters++;
};

addEquals.onclick = () => {
    resultBox.style.visibility = 'visible';
    result.focus();
}

submitButton.onclick = () => {
    for (const i of operators) {
        let textbox = document.createElement('input');
        textbox.type = 'number';
        textbox.className = 'numbers'
        numbersBox.appendChild(textbox)
        console.log(textbox);
    }

    numbersBox.style.visibility = 'visible';
    calculateBox.style.visibility = 'visible';
}

calculateButton.onclick = () => {
    const textboxes = document.getElementsByClassName('numbers');

    let nResults = 0;

    let numbers = [];

    for (const textbox of textboxes) {
        numbers.push(textbox.valueAsNumber);
    }

    for (const perm of permutations(numbers)) {
        let res = 0;

        for (let i = 0; i < perm.length; i++) {
            res += operators[i] == '+' ? perm[i] : -perm[i];
        }

        if (res == result.valueAsNumber) {
            let text = perm[0].toString();
            
            for (let i = 1; i < perm.length; i++) {
                text += operators[i] + perm[i];
            }
            
            text += ' = ' + result.value;
            
            let p = document.createElement('p');
            p.innerText = text;
            results.appendChild(p);
            nResults++;
        }
    }

    let pResults = document.createElement('p');
    pResults.innerText = 'n of results: ' + nResults + ' (lol that\'s a lot xd)';
    calculateBox.appendChild(pResults);
}

function* permutations(array) {
    if (array.length === 1) {
        yield array;
    } else {
        let [first, ...rest] = array;
        for (let perm of permutations(rest)) {
            for (let i = 0; i < array.length; i++) {
                let start = perm.slice(0, i);
                let rest = perm.slice(i);
                yield [...start, first, ...rest];
            }
        }
    }
}
