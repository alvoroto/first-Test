document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

// document.querySelectorAll(".color-box").addEventListener('click', function (evt) {
//   console.log(evt)
//   //evt.target.setAttribute('color', randomColors());
// });

//console.log(document.querySelectorAll('a-box'));
let box = document.querySelectorAll('a-box');

box.forEach(function(elem){
  elem.addEventListener('click', function() {
    this.setAttribute('color', randomColors());
  });
})

function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}