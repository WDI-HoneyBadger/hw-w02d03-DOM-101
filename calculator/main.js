console.log("work");

//square number
var button1 = document.querySelector('#square-button');
var Square = document.querySelector('#square-input');


button1 = document.getElementById("square-button").onclick=function() {
Square=document.getElementById("square-input").value; 
document.getElementById("solution").innerHTML="Square number is :"+Square*Square;

}

/// half number
var button2 = document.querySelector('#half-button');
var half_input = document.querySelector('#half-input');


button2 = document.getElementById("half-button").onclick=function() {
half_input=document.getElementById("half-input").value; 
document.getElementById("solution").innerHTML="half number is :"+half_input / 2;

}
//area of circle with radius
var button3 = document.querySelector('#area-button');
var area_input = document.querySelector('#area-input');


button2 = document.getElementById("area-button").onclick=function() {
area_input=document.getElementById("area-input").value; 
document.getElementById("solution").innerHTML="area of circle with radius is :"+area_input*area_input*Math.PI;

}