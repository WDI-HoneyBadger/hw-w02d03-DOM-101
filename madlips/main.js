console.log('CONNECTED!');
var result = document.querySelector('#story');
var storyGenerator = document.querySelector('#lib-button');
var noun = document.querySelector('#noun');
var adjective = document.querySelector('#adjective');
var person = document.querySelector('#person');

function makeMadLip(){
var usersNoun = noun.value;
// console.log(usersNoun);
var usersAdjective = adjective.value;
// console.log(usersAdjective);
var name = person.value;
// console.log(name);
var story = `${name} Really likes ${usersAdjective} ${usersNoun}`;
var pTag = document.createElement('p');
var pText = document.createTextNode(story);
pTag.appendChild(pText);
result.appendChild(pTag);

}

storyGenerator.addEventListener('click',makeMadLip);
