console.log('js connected!');


document.querySelector('lib-button').addEventListener('click', makeMadLib)
var makeMadLib = function () {
    document.querySelector(‘#noun’).value;
    document.querySelector(‘#adjective’).value;
    document.querySelector(‘#story’).value;
    story.innerHTML = person+"Pamela really likes pink cucumbers"+adjective+noun; 


};
lib-button.addEventListener(‘click’,makeMadLib );
