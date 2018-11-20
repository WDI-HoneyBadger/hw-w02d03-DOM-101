var click =document.getElementById("lib-button")

var makeMadLib =function(){
click.textContent='you clicked me '
var noun=document.getElementById("noun").value;
var adjective=document.getElementById("adjective").value;
var person=document.getElementById("person").value;
var story=document.getElementById("story")
story.innerHTML= person+"really likes "+adjective+noun;
}
click.addEventListener("click",makeMadLib);