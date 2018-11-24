 var button = document.querySelector('#lib-button');
function myFunction() {
 var noun = document.getElementById("noun").value;
 var adjective = document.getElementById("adjective").value;
 var person = document.getElementById("person").value;

document.getElementById("story").innerHTML = person +" "+adjective+" "+person;
}
button.addEventListener('click', myFunction);