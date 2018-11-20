var squareInput = document.querySelector('#square-input');
var squareButton = document.querySelector('#square-button');

var halfInput = document.querySelector('#half-input');
var halfButton = document.querySelector('#half-button');

var areaIput = document.querySelector('#area-input');
var areaButton = document.querySelector('#area-button');

var solutionArea = document.querySelector('#solution');



function calcSquare () {

    var calcS = `the square for ${squareInput.value} is ${Math.pow(squareInput.value, 2)}.`;
    var newP = document.createElement('p');
    var newText = document.createTextNode(calcS);
    newP.appendChild(newText);
    solutionArea.appendChild(newP);
}

squareButton.addEventListener('mouseover', calcSquare);


function calcHalf () {

    var calcS = `The half of ${halfInput.value} is ${(halfInput.value / 2)}`;
    var newP = document.createElement('p');
    var newText = document.createTextNode(calcS);
    newP.appendChild(newText);
    solutionArea.appendChild(newP);
}

halfButton.addEventListener('mouseover', calcHalf);


function calcArea () {

    var calcS = `The Area of ${areaIput.value} is ${(Math.PI * Math.pow(areaIput.value,2))}`;
    var newP = document.createElement('p');
    var newText = document.createTextNode(calcS);
    newP.appendChild(newText);
    solutionArea.appendChild(newP);
}

areaButton.addEventListener('mouseover', calcArea);


