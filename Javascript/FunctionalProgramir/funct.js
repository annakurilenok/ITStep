let cart = [
    {
        name: 'Товар 1',
        count: 2,
        price: 10
    },

    {
        name: 'Товар 2',
        count: 10,
        price: 1
    },

    {
        name: 'Товар 3',
        count: 4,
        price: 8
    },
];

let totalPrice = 0;
let totalCount = 0;

// for(let item of cart) {
//     totalCount += item.count;
//     totalPrice += item.count * item.price
// }

// cart.forEach(function (item) {
//     totalCount += item.count;
//      totalPrice += item.count * item.price
// });

let totalPric = cart.reduce(function(acc, item) {
    acc += item.price * item.count;
    return acc;
},0);

let totalCoun = cart.reduce(function(acc, item) {
    acc += item.count;
    return acc;
},0);

console.log(totalPric);
console.log(totalCoun);

function render (message) {
    console.log(message);
}

render('Это сообщение');

(function(message) {
    console.log(`Сумма чисел равна ${5+6}`);
})(`Сумма чисел равна ${5+6}`);