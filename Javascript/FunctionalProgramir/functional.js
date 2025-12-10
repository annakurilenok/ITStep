let a = 5;
let b = 6;

let p = (a + b) * 7;

function summ (a, b) {
  
    return a + b;
}

function mul (a, b) {
    return a * b;
}

let c = mul(summ (a, b), b);

function fff(a ,b) {
    return  a + b / Math.random();
}

for(let i =0; i < 10; i++) {
    console.log(i);
}

let show = function(i) {
    console.log(i);
}

function cicle(counter, func) {
    if(counter < 0) {
        return;
    }
    func(counter);
    counter--;
    cicle(counter, func);
}

cicle(10, show);

let mass = [1, 2, 3, 8, -3, -6, -2, 4];
// let newMass = [];

// for(let i =0; i < mass.length; i++) {
//     newMass.push(mass[i] * 2);
// }

newMass = mass.map(function(item) {
    return item * 2;
});

let newMass = [];

for(let i = 0; i < mass.length; i++) {
    if(mass[i] % 2 == 0) {
        newMass.push(mass[i]);
    }
   
}

 console.log(newMass)
// let negative = [];
// for(let num of mass) {
//     if(num < 0) {
//         negative.push(num);
//     }
// }

// let odd = [];
// for(let num of mass) {
//     if(num % 2 ===0) {
//         odd.push(num);
//     }
// }

// console.log(negative);
// console.log(odd);

let filtered = [];

let someCondition = function(n){
    // if (n < 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return n < 0;
}

let oddCondition = function(n) {
    return n % 2 === 0;
}

filtered = mass.filter((item) => {
    return negativeCodition(item);
});

function filter(elements, condition) {
    let result = [];
    elements.forEach(function (element){
        if(condition(element)){
            result.push.element;

        }
    })


    return result;
}

console.log(filter)

// for(let element of mass) {
//     if(someCondition (element)) {
//         filtered.push(element);
//     }
// }

console.log(filtered(mass, someCondition));

console.log(filtered(mass, oddCondition));

