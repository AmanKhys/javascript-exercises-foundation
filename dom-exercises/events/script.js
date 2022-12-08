

const buttons = document.querySelectorAll('button');

buttons.forEach((hell) => {
  hell.addEventListener('click', () =>{
    alert(hell.id);
  });
});