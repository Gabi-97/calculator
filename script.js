//variables;
let prevNumber = '';
let currNumber = '';
let operator;


const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const addBtn = document.querySelector('.add');
const subBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const remainderBtn = document.querySelector('.percent');
const dotBtn = document.querySelector('.dot');
//buttons to numbers

numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
       handleNumbers(e.target.textContent);
    })   
});

function handleNumbers(number) {
    if(currNumber.length <= 11) {
        currNumber += parseFloat(number);
        display.textContent = currNumber;
        console.log(currNumber, prevNumber, operator);
    }  
}
//add function
function add() {
    currNumber = parseFloat(currNumber) + parseFloat(prevNumber); 
}
//subtract function
function subtract() {
    currNumber = parseFloat(prevNumber) - parseFloat(currNumber);
}
//multiply function
function multiply() {
    currNumber = parseFloat(prevNumber) * parseFloat(currNumber);
}
//divide function
function divide() {
    currNumber = parseFloat(prevNumber) / parseFloat(currNumber);
}
//percent function
function percent() {
    currNumber = (parseFloat(prevNumber) / 100) * parseFloat(currNumber);
}

//operator buttons
addBtn.addEventListener('click', function() {
    if(prevNumber !== '') {  
        operate();
        }
   operator = 'add';  
   
   moveNumbers();
});
subBtn.addEventListener('click', function() {
    if(prevNumber !== '') {  
        operate();
        }
    operator = 'subtract';
    moveNumbers();
});
multiplyBtn.addEventListener('click', function() {
    if(prevNumber !== '') {  
        operate();
        }
    operator = 'multiply';
    moveNumbers();
});
divideBtn.addEventListener('click', function() {
    if(prevNumber !== '') {  
        operate();
        }
    operator = 'divide';
    moveNumbers();
});
remainderBtn.addEventListener('click', function() {
    if(prevNumber !== '') {  
        operate();
        }
    operator = 'percent';
    moveNumbers();
});
// . button
dotBtn.addEventListener('click', function() {
    if(!currNumber.includes('.')) {
        currNumber += '.';
    }
});

//move the numbers 
function moveNumbers() {
    prevNumber = currNumber;
    currNumber = '';
}
//function 'operate' - takes an operator and 2 numbers and calls one of the functions
function operate() {
    switch(operator) {
        case 'add':
            add();
            break;
        case 'subtract':
            subtract();
            break;
        case 'multiply':
            multiply();
            break;
        case 'divide':
            divide();
            break;
        case 'percent':
            percent();
            break;
    }
    display.innerHTML = currNumber;
}  

//equals
equalsBtn.addEventListener('click', function() {
    if(currNumber !== '' && prevNumber !== '') {  
        operate();
    }
    operator = '';
    
})
//clear
clearBtn.addEventListener('click', function() {
    currNumber = '';
    prevNumber = '';
    operator = '';
    display.innerHTML = '';
})

