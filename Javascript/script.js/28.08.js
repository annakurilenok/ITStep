/*function parametr(name, age) {
    let obj = {};

    obj.name = name;
    obj.age = age;

    return obj;
}

let anna = user('Anna', 45);
console.log(anna.name);

function User(name, age) {
    this.firstname = name;
    this.vozrast = age;
    this.hello = function() {
        console.log(`Привет, я ${this.firstname}`);
    }
}

let anna = new User('Anna', 45);
console.log(anna.hello);

// <div class="block"></div>

let div = {
    name: 'div',
    atribute: {
        name: 'class',
        value: 'block',
    },
   innerHtml: ''
}

// <a href="https://google.com"></a>

let a = {
    name: 'a',
    atribute: {
        name: 'href',
        value: 'https://google.com',
    },
   innerHtml: 'Ссылка'
}

// <input type="text" />

let input = {
    name: 'input',
    atribute: {
        name: 'type',
        value: 'text',
    },
   innerHtml: 'null'
}*/

class HTMLElement {
    constructor(name) {
        this.name = name
    }

    setInnerHtml(innerHtmlValue) {
        this.innerHtml = innerHtmlValue;
    }

    setatributeValue(atributeValue) {
        this.atribute = atributeValue;
    }
}


let div = new HTMLElement ('div');
div.innerHtmlValue('');
div.setatributeValue({name: 'class', value: 'block'});

console.log(div);

class HTMLElement {
    constructor(param1, param2, param3) {
        this.name = param1;
        this.atribute = param2;
        this.innerHtml = param3;
    }
    renderHTML() {
        return ``
    }
}

function HTMLElement(param1, param2, param3) {
    this.name = param1;
    this.atribute = param2;
    this.innerHtml = param3;
}
    this.renderHTML = function() {
        if(this.atribute != null && this.atribute.name != undefined && this.atribute.value != undefined) {
            return `<${this.name} ${this.atribute.name}="${this.atribute.value}">${this.innerHtml}</${this.name}>`;
        }
        return `<${this.name}>${this.innerHtml}</${this.name}>`;
    }

    this.addToPage = function() {
        document.body.insertAdjacentHTML('beforebegin', this.renderHTML()); // вставит результат перед body 

    }

    const a = new HTMLElement('a', {name: 'href', value: 'https://google.com'}, 'Это ссылка на Google');

    //console.log(a.renderHTML());

     a.addToPage();

     const p = new HTMLElement('p', {}, 'Это текстовый абзац');

  

   




function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        let num = +prompt('Введите число');
        this.value += num;
    }
    
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений


