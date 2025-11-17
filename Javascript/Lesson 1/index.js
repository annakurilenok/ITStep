let a = document.createElement('a');


a.href = 'https://google.com';
a.innerText = 'Это ссылка на Google';
a.classList.add('no_decoration');
a.style.color = 'red';

let div = document.querySelector('#root');

div.append(a); // вставляет элемент перед закрывающим тегом родителя

let a1 = document.createElement('a');

a1.href = 'https://ya.ru';
a1.innerText = 'Это ссылка на Yandex';
div.append(a1);

div.prepend(a1); // вставляет элемент после открывающего тега родителя

div.before(a); // вставляет элемент перед открывающим тегом родителя

div.after(a1);// вставляет элемент после закрывающего тега родителя

let texts = ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4'];

let ul = document.createElement('ul');

texts.forEach(function(elem){
    let li = document.createElement('li');
    li.innerText = elem;
    ul.append(li);
});


div.append(ul);

// let li = createElement('li');
// li.innerText = texts[0];
// div.append(li0);

a1.remove(); // Удаление элемента

let h1 = '<h1>Это заголовок</h1>';
//div.innerHTML = h1

// div.insertAdjacentHTML('afterbegin',h1);
// div.insertAdjacentHTML('afterend',h1);
// div.insertAdjacentHTML('beforebegin',h1);
div.insertAdjacentHTML('beforeend',h1);

div.insertAdjacentElement('beforeend', a);


