const paragraf = document.createElement('p');
const div = document.querySelector('.paragraf');
paragraf.textContent = "2";
const button = document.querySelector('button');
const addSomething = () => { div.appendChild(paragraf); }


button.addEventListener("click", addSomething);