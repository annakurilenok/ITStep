/*function summ(start, end) {
    let result = 0;

    for(let i = start; i <= end; i++) {
        if(i % 2 == 0) {
            result += i;
        }
    }

    console.log(`Сумма четных чисел диапазона от ${start} до ${end} равна ${result}`);
}
summ (1, 5);*/

/*const summ = function (start, end) {
    let result = 0;

    for(let i = start; i <= end; i++) {
        if(i % 2 == 0) {
            result += i;
        }
    }

    console.log(`Сумма четных чисел диапазона от ${start} до ${end} равна ${result}`);
}

summ (1, 5);

const arr = (name) => {
    console.log(`Hello, ${name}`);
}

arr('Anna');*/
car.engine = "electric";

const user = {
    name: 'Ivan',
    age: 35,
    job: {
        name: 'Developer',
        stage: 15,
    },
    gender: 'man',
    hello: function() { // можно написать hello() {} или hello: () => {}
        console.log(`Hello! My name is ${this.name}. I'm ${this.age} years old`);
        console.log(`У меня есть ${car.name}`);
    }
}
user.hello();

const car = {
    name: "Mersedes",
    type: "Legkovoi",
}



console.log(`Пользователь ${user.name} раотает ${user.job.name} ${user.job.stage} лет`);

user.password = 'qwerty'

console.log(user);

/*delete user.job.name;

console.log(user);*/

console.log(user["first name"]);
console.log(user["age"]);
console.log(user["job"]["name"]);

let vozrast = "age";
console.log(user[vozrast]);

if("gender" in user) {
    console.log(user.gender);
}

if(user.age !== undefined) {

}

for(key in user) {
    console.log(`Ключ - ${key}`);
    console.log(`Значение - ${user[key]}`

    );
}

let isEmpty = function(obj) {

    for(key in obj) {
        return false;
    }

    return true;
}

let schedule = {};

console.log( isEmpty(schedule) ); 

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); 


const obj1 = {
    a: 1
}

const obj2 = obj1;

/*console.log(obj1.a);
console.log(obj2.a);

obj2.a = 34;

console.log(obj1.a);
console.log(obj2.a);

let m = 1;
let n = 5;
n=5;
console.log(m);
console.log(n);*/

/*const obj2 = {
    a: obj1.a   - задали новое значение
}*/

const obj = {}

/*for(key in obj1) {
    obj2[key] = obj1[key];
}*/

Object.assign(obj2, obj1);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function summ(obj) {
    let result = 0;
    for(key in obj) {
        result += obj[key];
    }
    return result;
}
console.log(`Сумма равна ${summ (salaries)}`);


let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();