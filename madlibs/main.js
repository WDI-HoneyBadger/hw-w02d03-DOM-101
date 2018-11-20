console.log('js is connected');

/*----------------------Part1-------------------------------- */

/* name varibles that we  need for each id abs classes*/ 

var Button =document.querySelector('.lib-but');/*Id*/
var Story = document.querySelector('.story');/*Id*/
var Noun0 = document.querySelector('#noun');/* user input*/ 
var Adjective0 = document.querySelector('#adjective');/* user input*/ 
var Name0 = document.querySelector('#person');/* user input*/ 

 
function makeMadLib(){ 

    var n = Noun0.Value;/* user input*/ 
    var a = Adjective0.Value;/* user input*/ 
    var n2 = Name0.Value;/* user input*/ 
var getInfo = (`${n}` , `${a}`, `${n2}`);/*getting the onfo from the user*/ 
}

var Newstory = document.createElement('p');
  var NewstoryText = document.createTextNode(Story);

  Newstory.appendChild(getInfo);
  Story.appendChild(NewstoryText);


Button.addEventListener('click',makeMadLib );





