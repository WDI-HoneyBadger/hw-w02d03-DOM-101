var buttonclick = document.querySelector('lib-button');
var name = document.querySelector('noun');
var adj = document.querySelector('adjective');
var person = document.querySelector('person');
var bodybox = document.querySelector('body');

// it just occured to me that i could query selet all the entire body, since i'm gonna call on all tags.
buttonclick.addEventListener('buttonclick', bodybox);
function clickButton(){

bodybox = (` ${person} + " " ${adj} + " " ${person} `);

}