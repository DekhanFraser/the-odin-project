const container = document.querySelector('#container');

let content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content';
container.appendChild(content);

content = document.createElement('p');
content.style.color = 'red';
content.textContent = 'Hey I\'m red!';
container.appendChild(content);

content = document.createElement('h3');
content.style.cssText = 'color: blue;';
content.textContent = 'I\'m a blue h3!';
container.appendChild(content);

content = document.createElement('div');
content.style.cssText = 'background-color: pink; border-style: solid; border-color: black;'

let childContent = document.createElement('h1');
childContent.textContent = 'I\'m in a div';
content.appendChild(childContent);

childContent = document.createElement('p');
childContent.textContent = 'ME TOO!';
content.appendChild(childContent);

container.appendChild(content);