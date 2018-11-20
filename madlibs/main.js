console.log('connected')

var libButton = document.querySelector('#lib-button')

console.log(libButton);

function makeMadLib (){
    console.log('button');
    var noon = document.getElementById('noun').value;
    var aduj = document.getElementById('adjective').value;
    var pers = document.getElementById('person').value;

var stre = `${pers} really likes ${aduj} ${noon}`;

var newElem = document.createElement('p');
var newElemIn = document.createTextNode(stre);
newElem.appendChild(newElemIn);
//.appendChild(newElem);
   
    console.log(noon);
    // document.getElementById("story").innerHTML += "like Pamela really likes" 

}
libButton.addEventListener('click', makeMadLib)
 
