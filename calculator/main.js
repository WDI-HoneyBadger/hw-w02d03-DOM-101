
var squareButton = document.querySelector('#square-button');
var squareInput = document.querySelector('#square-input');

var solution = document.querySelector('#solution');


function calculate(){
    var sqaure = squareInput.value;
    var sqaureResult = sqaure * sqaure;

    console.log('input value is ', sqaureResult);

    var newPTag = document.createElement('p');
    var newPTagText = document.createTextNode(`Square of ${sqaure} = ${sqaureResult}`);
  
    newPTag.appendChild(newPTagText);
    solution.appendChild(newPTag);
}

squareButton.addEventListener('click', calculate);


var halfButton = document.querySelector('#half-button');
var halfInput = document.querySelector('#half-input');


function calculateHalf(){
    var num = halfInput.value;
    var halfResult = num / 2;

    console.log('input value is ', halfResult);

    var newPTag = document.createElement('p');
    var newPTagText = document.createTextNode(`The half of ${num} is ${halfResult}`);
  
    newPTag.appendChild(newPTagText);
    solution.appendChild(newPTag);
}

halfButton.addEventListener('click', calculateHalf);


var areaButton = document.querySelector('#area-button');
var areaInput = document.querySelector('#area-input');


function calculateArea(){
    var num = areaInput.value;
    var circleArea = (num * num * Math.PI).toFixed(2);

    console.log('input value is ', circleArea);

    var newPTag = document.createElement('p');
    var newPTagText = document.createTextNode(` Area of circle with radius ${num} is ${circleArea}`);
  
    newPTag.appendChild(newPTagText);
    solution.appendChild(newPTag);
}

areaButton.addEventListener('click', calculateArea);