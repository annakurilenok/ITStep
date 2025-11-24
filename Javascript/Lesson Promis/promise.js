// function loadScript(url, callback) {
//     let script = document.createElement('script');
//     script.src = url;
//     script.onload = () => {
//         callback();
//     }
//     document.body.append(script);
// }

// loadScript('./header.js', function() {
//     createHeader('Это заголовок');
// });

// setInterval(() => {
//     alert('From timeout');
// }, 3000);

// let a = document.createElement('a');
// a.innerText = 'Это ссылка';
// a.href = 'https://google.com';

// document.body.prepend(a);

// let promise = new Promise(function(resolve, reject){
//     let summ = 12;
    
//     setTimeout(() => {
//         if(summ == 12) {
//         console.log(`Результат выполнения операции промиса ${summ}`);
//     resolve(summ);
//     } else {
//             console.log('Ошибка выполнения операции промиса');
//             let error = new Error ('Число не 12');
//             reject(error);
//         }
//     }, 3000)
// });

// console.log(`состояние промиса ${this.state}`);

// console.log('Это пример использования Promise');

let num = 4;

let button = document.querySelector('#btn');
let result = document.querySelector('#result');

button.addEventListener('click', () => {
    result.classList.remove('animated');
    let promis = new Promise((resolve, reject) => {
        let input = document.querySelector('#answer');
        if (input.value == num) {
            resolve('Вы угадали!!!');
        } else {
            let error = new Error('Вы не угадали');
            reject(error);
        }
    })
    //обрабатывает верный ответ
    // promis.then((message) => {
    //     console.log(message);
    // });
    // //обрабатывает ошибку
    // promis.catch((error) => {
    //     console.log(error.message);
    // })

    promis.then((message) => {
        document.body.style.backgroundColor ='green';
        result.innerText = message;
        result.classList.add('animated');
    }).catch((error) => {
        result.innerHTML = error.message;
        document.body.style.backgroundColor ='red';
        result.classList.add('animated');
    }).finally(() => {
        num = Math.floor(Math.random() * 10) + 1;
    });
});