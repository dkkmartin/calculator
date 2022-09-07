let userInputNumbers = [];
const elements = document.querySelectorAll('.operators-con');


let screen = document.querySelector('.screen');
let equalsBtn = document.querySelector('.equals');
let clearBtn = document.querySelector('.clear');
let addBtn = document.querySelector('.add');
let subtractBtn = document.querySelector('.subtract');
let multiplyBtn = document.querySelector('.multiply');
let divideBtn = document.querySelector('.divide');
let oneBtn = document.querySelector('.one');
let twoBtn = document.querySelector('.two');
let threeBtn = document.querySelector('.three');
let fourBtn = document.querySelector('.four');
let fiveBtn = document.querySelector('.five');
let sixBtn = document.querySelector('.six');
let sevenBtn = document.querySelector('.seven');
let eightBtn = document.querySelector('.eight');
let nineBtn = document.querySelector('.nine');
let zeroBtn = document.querySelector('.zero');



zeroBtn.addEventListener('click', function(){
    inner = zeroBtn.innerHTML;
    btnToInt(inner)
})
nineBtn.addEventListener('click', function(){
    inner = nineBtn.innerHTML;
    btnToInt(inner)
})
eightBtn.addEventListener('click', function(){
    inner = eightBtn.innerHTML;
    btnToInt(inner)
})
sevenBtn.addEventListener('click', function(){
    inner = sevenBtn.innerHTML;
    btnToInt(inner)
})
sixBtn.addEventListener('click', function(){
    inner = sixBtn.innerHTML;
    btnToInt(inner)
})
fiveBtn.addEventListener('click', function(){
    inner = fiveBtn.innerHTML;
    btnToInt(inner)
})
fourBtn.addEventListener('click', function(){
    inner = fourBtn.innerHTML;
    btnToInt(inner)
})
threeBtn.addEventListener('click', function(){
    inner = threeBtn.innerHTML;
    btnToInt(inner)
})
twoBtn.addEventListener('click', function(){
    inner = twoBtn.innerHTML;
    btnToInt(inner)
})
oneBtn.addEventListener('click', function(){
    inner = oneBtn.innerHTML;
    btnToInt(inner)
})
divideBtn.addEventListener('click', function(){
    divideBtn = divideBtn.innerHTML;
    btnToInt(divideBtn)
})
multiplyBtn.addEventListener('click', function(){
    multiplyBtn = multiplyBtn.innerHTML;
    btnToInt(multiplyBtn)
})
subtractBtn.addEventListener('click', function(){
    subtractBtn = subtractBtn.innerHTML;
    btnToInt(subtractBtn)
})
addBtn.addEventListener('click', function(){
    addBtn = addBtn.innerHTML;
    btnToInt(addBtn)
})
clearBtn.addEventListener('click', function(){
    screen.innerHTML = '';
    userInputNumbers = []
})
equalsBtn.addEventListener('click', function(){
    equalsBtn = equalsBtn.innerHTML;
    btnToInt(equalsBtn)
})



/* elements.forEach(element => {
    element.addEventListener('click', function() {
        inner = element.innerHTML;
        btnToInt(inner)
    });
}) */

function btnToScreen(btn) {
    userInputNumbers.push(btn)
    screen.innerHTML = `${userInputNumbers.join('')}`;
}

// Converts button to int
function btnToInt(button) {
    let int = +button;
    btnToScreen(int)
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

