// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para1 = document.createElement('p');
para1.classList.add('para1');
para1.style.color = 'red';
para1.textContent = "Hey I'm red!";

const head3 = document.createElement('h3');
head3.classList.add('head3');
head3.style.color = 'blue';
head3.textContent = "I'm a blue h3!";

const div1 = document.createElement('div');
div1.classList.add('div1');
div1.style.cssText = "border:black 1px solid; background-color:pink;"
div1.textContent = "wellll...";


const head1 = document.createElement('h1');
head1.classList.add('head1');
head1.textContent = "I'm in a div.";

const para2 = document.createElement('p');
para2.classList.add('para2');
para2.textContent = "ME TOO!";

div1.appendChild(head1);
div1.appendChild(para2);


container.appendChild(para1);
container.appendChild(head3);
container.appendChild(div1);


