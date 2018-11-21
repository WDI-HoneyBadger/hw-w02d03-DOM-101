var numToSqr = document.querySelector('#square-input');
// console.log(numToSqr);


var calcSqr = document.querySelector('#square-button');

var halfOf = document.querySelector('#half-input');
var calcHalf = document.querySelector('#half-button');

var radius = document.querySelector('#area-input');
var calcArea = document.querySelector('#area-button');


function squared(){
var num = numToSqr.value;
console.log(num);
// console.log(num);
var squaredNum = Math.pow(num,2);
var pTag = document.createElement('p');
var pNode = document.createTextNode(squaredNum);
pTag.appendChild(pNode);
var result = document.querySelector('#solution');
result.appendChild(pTag);

}

function half(){
   var num = halfOf.value;
    // console.log(num);
    var halfNum = num / 2;
    var pTag = document.createElement('p');
    var pNode = document.createTextNode(halfNum);
    pTag.appendChild(pNode);
    var result = document.querySelector('#solution');
    result.appendChild(pTag);
    
    }

    function area(){
        var PI = Math.PI;
        // console.log(radius);
        var r = radius.value;
        // console.log(r);
        r *= r;
         
         var circleArea = PI * r;
         circleArea = Math.round(circleArea);
         var pTag = document.createElement('p');
         var pNode = document.createTextNode(circleArea);
         pTag.appendChild(pNode);
         var result = document.querySelector('#solution');
         result.appendChild(pTag);
         
         }
    calcHalf.addEventListener('click', half);
    calcHalf.addEventListener('click', half);
    //console.log(calcHalf);
    calcSqr.addEventListener('click', squared);
    calcArea.addEventListener('click', area);

