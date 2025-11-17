/*console.log(window);

function mySuperFunc() {
    console.log(`Версия браузера ${window.navigator.appVersion}`);

    for(let plagin of window.navigator.plugins){
        console.log(`Плагины ${plagin.name}`);
    }
}

mySuperFunc() 

// let url = prompt('Введите URL');

// if(confirm(`Вы действительно хотите перейти по адресу ${url}?`)) {
//     window.location.href = url;
// };

let  = function(){lacation.reload()};

setInterval(reload, 5000);*/

// console.dir(document);

// document.body.style.backgroundColor = '';
// console.log(document.title);

// let html = document.children[0];
// let body = html.children[1];
// let h1 = body.children[0];
// let text = h1.innerText;

// //let t = document.children[0].children[1].children[0].innerText;

// console.log(text);

// let href = document.children[0].children[1].children[1].href;
// console.log(href);

// let hrefText = document.children[0].children[1].children[1].innerText;
// console.log(hrefText);

// // let addresLink = prompt('Введите ccылку');
// // let nameSite = prompt('Введите имя сайта');

// console.log(document.body.children[2]);

// for(let row of table.rows) {
//     console.log(row.cells[0].innerText);
// }

let table = document.body.children[3];


for(let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];

    if(i == 0) {
        table.rows[i].style.backgroundColor = 'pink';
    }

    for(let j = 0; j < row.cells.length; j++) {
        if(j == i) {
            table.rows[i].cells[j].style.backgroundColor = 'red';
            table.rows[i].cells[j].style.color = 'white';
            table.rows[i].cells[j].innerText = 'FD';
        }
    }
}
