let ul = document.body.children[2];

console.dir(ul);

ul.firstElementChild.style.textTransform = 'uppercase';
ul.lastElementChild.style.color = 'red';
ul.firstElementChild.innerText = 'FD';
//ul.innerHTML = '<li>Одна строка</li>';

ul.previousElementSibling.style.fontSize = '20px';

ul.parentElement.id = 'page-body';

console.log(ul.getAttribute('id'));

//ul.setAttribute('class', 'superlist');// значение присовено

ul.classList.add('normalise');

if(ul.classList.contains('underlined')) {
    ul.classList.remove('underlined')
}else {
    ul.classList.add('underlined');
}

//ul.classList.toggle('underlined');

let block = document.getElementById('flexbox');

block.innerText = 'Hello from founded block!!!';
block.classList.add('border', 'd-flex');

let blocks = document.getElementsByClassName('example');
block = blocks[0];

block.classList.add('padding');

blocks = document.getElementsByTagName('div');

block = document.querySelector('.example');

block.classList.remove('padding');

bloks = document.querySelectorAll('.example');
block = blocks[0];

//
let h = document.querySelector('h1');
h.style.textAlign = 'center';

let a = document.querySelector('a');
a.innerHTML = '<img src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/9d/7a/a1/9d7aa162-7c0f-2324-f3b0-8815a34ff52b/PhotosAppIcon-0-1x_U007emarketing-0-0-0-7-0-0-0-0-85-220-0.png/1200x630wa.png"/>';

let li = document.querySelectorAll('#list');
ul.firstElementChild.style.textAlign = 'center';

ul.lastElementChild.style.textAlign = 'right';





