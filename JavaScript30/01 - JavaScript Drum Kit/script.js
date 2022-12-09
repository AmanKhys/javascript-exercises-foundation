
window.addEventListener('keydown', (hell) =>{
const audio = document.querySelector(`audio[data-key ="${hell.keyCode}"]`);
const key = document.querySelector(`.key[data-key ="${hell.keyCode}"]`);
if(!audio) return;
audio.currentTime = 0;  
audio.play();
console.log(key);
key.classList.add('playing');
});

function removeTransition(e) {
  //console.log(e);
  if(e.propertyName != 'transform') return;
  console.log(e.propertyName);
  //console.log(this);
  this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

