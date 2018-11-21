var squareButton = document.getElementById("square-button");

function squareNumber(num) {
    var squaredNumber = num * num;
    console.log('' + num + ' is ' + squaredNumber);
    return squaredNumber;
}

var halfButton = document.getElementById("half-button");
function halfNumber(num) {
    var halfNumber = num / 2;
    console.log('Half of ' + num + ' is ' +  halfNumber);
    return halfNumber;
}
var areaInput = document.getElementById("area-input");
var areaButton = document.getElementById("area-button");
function arOfCir() {
    
    var area = Math.PI * squareNumber(areaInput.value);
    console.log('The area of circle with radius ' + areaInput.value + ' is ' + area);
    return area;
}
    
squareButton.addEventListener("click", function() {
  var num = document.getElementById("square-input").value;
  document.getElementById("solution").innerHTML = squareNumber(num);
});
    
halfButton.addEventListener("click", function() {
  var num = document.getElementById("half-input").value;
  document.getElementById("solution").innerHTML = halfNumber(num);
});
    

areaButton.addEventListener("click", function() {
  var num = document.getElementById("area-input").value;
  document.getElementById("solution").innerHTML = arOfCir();
});
