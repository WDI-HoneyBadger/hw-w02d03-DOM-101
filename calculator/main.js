function squareNumber(num) {
    var squaredNumber = num * num;
    console.log('' + num + ' is ' + squaredNumber);
    return squaredNumber;
}

function halfNumber(num) {
    var halfNumber = num / 2;
    console.log('Half of ' + num + ' is ' +  halfNumber);
    return halfNumber;
}

function arOfCir(radius) {
    var area = Math.PI * squareNumber(radius);
    console.log('The area of circle with radius ' + radius + ' is ' + area);
    return arOfCir;
}
    
var squareButton = document.getElementById("square-button");
squareButton.addEventListener("click", function() {
  var num = document.getElementById("square-input").value;
  document.getElementById("solution").innerHTML = squareNumber(num);
});
    
var halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", function() {
  var num = document.getElementById("half-input").value;
  document.getElementById("solution").innerHTML = halfNumber(num);
});
    

var areaButton = document.getElementById("area-button");
areaButton.addEventListener("click", function() {
  var num = document.getElementById("area-input").value;
  document.getElementById("solution").innerHTML = arOfCir(radius);
});
