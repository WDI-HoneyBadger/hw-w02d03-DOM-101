console.log('heeey! do u see me?')


// Calculate Squer of Number
var squerNum = document.querySelector('#square-input');
// console.log(squerNum);
var squerBut = document.querySelector('#square-button');
// console.log(squerBut);

function calSquerNum(){
    var newTagSquer = document.createElement('p');
    var num = squerNum.value;
    var squNum = num * num;
    var newTagSquerTxt = document.createTextNode(`${squNum} is the squer of ${num}`);
    newTagSquer.appendChild(newTagSquerTxt);
    solution.appendChild(newTagSquer);
}
squerBut.addEventListener('click', calSquerNum);


//Calculate Half of Number

var halfNum = document.querySelector('#half-input');
// console.log(halfNum);
var halfBut = document.querySelector('#half-button');

function calHalfNum(){
    var newTagHalf = document.createElement('p');
    var num = halfNum.value;
    var halfNumber = num / 2;
    var newTagHalfTxt = document.createTextNode(`${halfNumber} is hlaf of ${num}`);
    newTagHalf.appendChild(newTagHalfTxt);
    solution.appendChild(newTagHalf);
}
    
halfBut.addEventListener('click', calHalfNum);
    
    
//Calulate area and radiuos of circle    
var areaCircNum = document.querySelector('#area-input');
// console.log(areaCircNum);
var areaBut = document.querySelector('#area-button');


 function calAreaNum() {
    var newTagArea = document.createElement('p');
    var num = areaCircNum.value;
    var areaNum = num * num * Math.PI;
    var radiusNum = 2 * num * Math.PI;
    var newTagAreaTxt = document.createTextNode(`${areaNum} is the area of circle and ${radiusNum} is the radius of the circle`);
    newTagArea.appendChild(newTagAreaTxt);
    solution.appendChild(newTagArea);
} 
areaBut.addEventListener('click', calAreaNum);
var solution = document.querySelector('#solution');
// console.log(solution);

