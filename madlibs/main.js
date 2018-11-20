 console.log("juma");


 var button = document.querySelector('#lib-button')
 var story = document.querySelector('#story')

 var inputOne = document.querySelector('#noun')
 var inputTwo = document.querySelector('#adjective')
 var inputThree = document.querySelector('#person')

 function makeMadLib (){
     var valueOne = inputOne.value; // FIND the USER INPUT
     var valueTwo = inputTwo.value;
     var valueThree = inputThree.value;

     var putAll = valueOne +' ' + valueTwo +' ' +valueThree;


 var newPTag = document.createElement('p');
 var newPTagText = document.createTextNode(putAll);

 newPTag.appendChild(newPTagText);
 story.appendChild(newPTag);
}

button.addEventListener('click',makeMadLib );
   