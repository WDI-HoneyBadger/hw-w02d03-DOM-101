console.log('js');


var button = document.querySelector('#lib-button');
var story = document.querySelector('#story');

function final(){
    var noun = document.querySelector('#noun').value;
    var adjective = document.querySelector('#adjective').value;
    var name = document.querySelector('#person').value;


    var PTag = document.createElement('p');
    var gather =  `${noun} REALLY likes ${adjective} ${name}`;
    var PTagText = document.createTextNode(gather); 
    console.log(gather);
    //var gather =  `${noun} REALLY likes ${adjective} ${name}`;
    PTag.appendChild(PTagText);
    story.appendChild(PTag);

}


buttonInput.addEventListener('click',gather);



