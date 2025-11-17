let str = 'Hello';

console.log(str.length);
console.log('Это число' + numThree.toString());

let n = new Number(3);
console.log(n);


let strInter = `${str * '123'}, world!`;

console.log(strInter);

let user = {
    name: 'Anna',
    age: 25,
    is_married: false,
    salary: null,
    'has childs': true,
    say_hi: function() {          // имя функции название ключа, функция в объекте - метод
        console.log(`Hello, my name is ${this.name}`);
    },
    say_age() {
        console.log(`I'm ${this.age} years old`);
    }
}

user.say_hi();
user['say_hi']();

user.say_age();

let arr = [1, '2', {num: '3'}];

const obj = {
    title: 'Title'
}

obj.name = 'John';

let numThree = 34;

if(numThree > 0){
    console.log('Положительное');
}else {
    console.log('Отрицательное')
}

// (numThree > 0) ?  console.log('Положительное') : console.log('Отрицательное');

let color = 'blue';

switch(color){
    case 'blue':
        console.log('Синий');
    break;

    case 'black':
        console.log('Черный');
    break;

    case 'red':
        console.log('Красный');
    break;

    default:
        console.log('Неопределенный');
}

if(color == 'blue') {
     console.log('Синий');
} else {
    console.log('Неопределенный');
}

if(color == 'black') {
     console.log('Черный');
} else {
    console.log('Неопределенный');
}

// if(color == 'blue') {
//      console.log('Синий');
// } else {
//     if(color == 'black')
//         console.log('Черный');
// } else {
//     if(color == 'red')
//         console.log('Красный');
// } else {
//         console.log('Неопределенный');
// }

let hello = 'Hello!!!';

let counter = 0;
while(counter < 10) {
    console.log(hello);
    counter += 1;
}

for(let i = 0; i < 10; i++) {
    console.log(hello);
}

function summ(param1, param2) {
    console.log(param1 + param2);
}

summ(2, 10);
summ(10, 10);

function gravity(m1, m2, r) {
    const G = 6.6743e-11;
    let result = G * ((m1 * m2) / (r ** 2));

    return result;
}

let g = gravity(80, 90, 1);
console.log(g);

let elem = {
    name: 'Block'
}

// let new_elem = elem; // изменение значения по ссылке (простые переменные сохраняют свои значения)

let new_elem = {  // надо в объекте так менять значение
    name: elem.name
}

console.log(elem);
console.log(new_elem);

new_elem.name = 'Paragraph';  
console.log(elem);
console.log(new_elem);

// Функция конструктор

function Car(name, year, factory) {
    this.name = name;
    this.year = year;
    this.factory = factory;
}

let mersedes = new Car('Mersedes', 1995, {name: 'Super zavod',addres: 'Germany'});
let mazda = new Car('Mazda', 1999, {name: 'Another zavod',addres: 'Japan'});

console.log(mazda.factory.name);

// такая же функция

function car(name, year) {
    let obj = {};
    obj.name = name;
    obj.year = year;

    return obj;
}

console.log(mersedes);
console.log(mazda);