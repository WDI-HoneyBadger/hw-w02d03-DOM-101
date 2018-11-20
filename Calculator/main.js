var squer = document.querySelector('#square-input');
var half = document.querySelector('#half-input');
var area = document.querySelector('#area-input');
var solution = document.querySelector('#solution');

var squerButton = document.querySelector('#square-button');
squerButton.addEventListener('click', squerOfNumber);

var halfButton = document.querySelector('#half-button');
halfButton.addEventListener('click', halfOfNumber);

var areaButton = document.querySelector('#area-button');
areaButton.addEventListener('click', areaOfNumber);

// Create New P tag inside solution div


function squerOfNumber() {
    var tagPSolution = document.createElement('p');
    var num = squer.value;
    var squerNumber = num*num;
    var squerNumOutput = document.createTextNode(`Squer of ${num} is equal to ${squerNumber}`);

    tagPSolution.appendChild(squerNumOutput);
    solution.appendChild(tagPSolution);
}

function halfOfNumber() {
    var tagPSolution = document.createElement('p');
    var num = half.value;
    var halfNumber = num/2;
    var halfNumOutput = document.createTextNode(`Hlaf of ${num} is ${halfNumber}`);

    tagPSolution.appendChild(halfNumOutput);
    solution.appendChild(tagPSolution);
}

function areaOfNumber() {
    var tagPSolution = document.createElement('p');
    var num = area.value;
    var areaNumber = num*num*Math.PI;
    var areaNumOutput = document.createTextNode(`Area of circle ${areaNumber}`);

    tagPSolution.appendChild(areaNumOutput);
    solution.appendChild(tagPSolution);
}