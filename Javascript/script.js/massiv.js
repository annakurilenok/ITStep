/*let numbers = [3, 7, 9, 10, -5, 231];

let arr = [3, {name: "Edgar"}, "Всем привет", function()
    {console.log('Hi!!!')}];

console.log(`Значение массива ${numbers [3]}`);

arr[3]();

for(let i = 0; i < numbers.length; i++){
    console.log(`${numbers[i]} в квадрате будет ${numbers[i]**2}`);
}*/

/*task 1

class Product{
    constructor(productName, productCount, productIsBay){
        this.name = productName;
        this.count =  productCount;
        this.isBay = productIsBay;
    }
}

let productsList = [
    new Product("Хлеб черный", 1, true),
    new Product("Хлеб белый", 1, false),
    new Product("Молоко", 3, false),
    new Product("Сметана", 1, true),
    new Product("Вода", 1, false),
    new Product("Селедка", 3, true),
];

function showProductsList(products){
    console.log('Некупленные продукты');

    for(let i = 0;i < products.length; i++) {
        if(products[i].isBay === false) {
            console.log(`${products[i].name}, количество ${products[i].count}`);
        }
    }

    console.log('Купленные продукты');
    for(let i = 0;i < products.length; i++) {
        if(products[i].isBay === true) {
            console.log(`${products[i].name}, количество ${products[i].count}`);
        }
    }
}


function addProduct(newProduct){
    let isProductExists = false;
    productsList.forEach(function(product, index){
        if(product.name == newProduct.name) {
            isProductExists = true;
            productsList[index].count += newProduct.count;
        }
    })
if(!isProductExists) {
    productsList.push(newProduct);
    }
}

function bay(productName) {
    productsList.forEach(function(product, index){
        if(product.name == productName) {
             productsList[index].isBay = true;
        }
    })
}


addProduct(new Product("Йогурт", 3, false));
addProduct(new Product("Сметана", 3, true));

bay("Хлеб белый");

showProductsList(productsList) */

// 2

class Check{
    constructor(productName, productCount, productPrice){
        this.name = productName;
        this.count =  productCount;
        this.price = productPrice;
    }
}

let checkList= [
    new Product("Хлеб черный", 1, 20),
    new Product("Хлеб белый", 1, 10),
    new Product("Молоко", 3, 35),
    new Product("Сметана", 1, 45),
    new Product("Вода", 1, 10),
    new Product("Селедка", 3, 10),
];

function showBill(massivProductov){
    console.log('Чек');
    for(tovar of massivTovarov) {
        let price = tovar.count * tovar.price;
        console.log(`Товар ${tovar.name},количество ${tovar.count}, цена ${price.toFixed(2)}`);
    }
}

function totalPrice(massivTovarov){
    for(tovar of massivTovarov) {
        let price = tovar.count * tovar.price;
        result += price;
    }
    console.log(`Общая цена ${result.toFixed(2)}`);
}

function maxPriceProduct(massivTovarov){
    let resultProduct = null;

    let totalProductPrice = 0;

    massivTovarov.forEach(function(product){
        let price = product.count * product.price;

        if(price > totalProductPrice) {
            resultProduct = product;
            totalProductPrice = price;
        }
    }

)
    console.log(`Самый дорогой товар ${resultProduct.name}`);
}

function srednee(massivTovarov){
    let resultPrice = 0;
    let resultCount = 0;
    for(tovar of massivTovarov) {
        resultPrice += tovar.price * tovar.count;
        resultPrice += tovar.count;
    }

    let result = resultPrice / resultCount;
    console.log(`Средняя цена ${}`)
}

showBill(checkList);


  
// 3

let str = "Привет, ghbdtn"

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);