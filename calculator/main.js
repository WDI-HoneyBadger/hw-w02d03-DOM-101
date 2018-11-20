var sqrBtn = document.querySelector("#square-button");
var halfBtn = document.querySelector("#half-button");
var areaBtn = document.querySelector("#area-button");
var resultBox = document.querySelector("#solution");

var square = function(){
    var sqrInput = document.querySelector("#square-input");
    var num = sqrInput.value;
    var result = Math.pow(num, 2);
    var resultElement = document.createElement("p");
    resultElement.innerHTML = `The square of ${num} = ${result}`;
    resultBox.appendChild(resultElement);
}

var half = function(){
    var halfInput = document.querySelector("#half-input");
    var num = halfInput.value;
    var result = num / 2;
    var resultElement = document.createElement("p");
    resultElement.innerHTML = `The half of ${num} = ${result}`;
    resultBox.appendChild(resultElement);

}

var area = function(){
    var areaInput = document.querySelector("#area-input");
    var num = areaInput.value;
    var result = Math.round(Math.PI * Math.pow(num, 2) * 100) / 100 ;
    var resultElement = document.createElement("p");
    resultElement.innerHTML = `The area of a circle with radius ${num} is ${result}`;
    resultBox.appendChild(resultElement);

}

sqrBtn.addEventListener("mouseover", square);
halfBtn.addEventListener("mouseover", half);
areaBtn.addEventListener("mouseover", area);