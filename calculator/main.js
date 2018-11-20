
var click1=document.getElementById("square-button") 
click1.addEventListener("click",function(){
var number =document.getElementById("square-input").value;
document.getElementById("solution").innerHTML=square(number)

});
var click2=document.getElementById("half-button")
click2.addEventListener("click",function(){
    var number=document.getElementById("half-input").value;
    document.getElementById("solution").innerHTML=half(number)
})
var click3=document.getElementById("area-button")
click3=document.getElementById("click",function(){
var number =document.getElementById("area-input").value;
document.getElementById("solution").innerHTML=area(number)
})
var squarebb=document.getElementById("square-button")
var squareb=document.getElementById("square-input")
squareb.addEventListener("keypress",function(event){
event.preventDefault();
if(event.keyCode == 13)
squarebb.click();
});
var halfbb=document.getElementById("half-button")
var halfb=document.getElementById("half-input")
halfb.addEventListener("keypress",function(event){
event.preventDefault();
if(event.keyCode == 13)
halfbb.click();

});
var areab=document.getElementById("area-button")
var areabb=document.getElementById("area-input")
areab.addEventListener("keypress",function(event){
event.preventDefault();
if(event.keyCode == 13)
areabb.click();

});
