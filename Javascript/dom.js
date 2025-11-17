class HTMLElement {
    constructor (name) {
        this.name = name;
        this.id = null;
        this.style = {};
        this.classList = {
            classes: [],
            add: function(...classNames) { //метод
                for(let className of classNames)
                this.classes.push(className) // this = classList
            },
            delete: function(...classesNames) {
             
                for(let className of classesNames) {
                    let index = this.classes.indexOf(className);
                    

                    if(index > -1) {
                         this.classes.splice(index, 1);
                    }
                }
            }
        }; 
    }

    addStyle(name, value) {
        this.style[name] = value;
    }

    getStylesList() {
        let styles = '';
       for(let key of  Object.keys(this.style)) { // возвращает массив ключей объекта
            let styleName = key;
            let styleValue = this.style[key];

            let styleString = `${styleName} : ${styleValue};`;

            styles += styleString;
       } 
       return style ? ` style= "${style}"` : '';
    }

    getClassList() {
        return this.classList.classes.length > 0 ? ` class="${this.classList.classes.join(' ')}"` : '';
    }

    renderHTML() {  // метод класса
        return(`<${this.name}${this.getClassList()}${this.getStylesList()}></${this.name}>`)
    }

    drawHTML() {
        document.body.insertAdjacentHTML('afterbegin', this.renderHTML() )
    }
}

class HTMLHrefElement extends HTMLElement  {
    constructor (href) {
        super('a'); 
        this.href = href;
    }
}

class Style {
    constructor (name, value) {
        this.name = name;
        this.value = value;
    }
}

// HTMLHrefElement extends HTMLElement - наследование по цепочке

const div = new HTMLElement ('div');

div.id = 'block';
div.classList.add('container', 'main-section', 'colored');

div.classList.delete("class1", "class2", "class3");
div.classList.delete("superclass");

console.log(div);

div.classList.delete('colored');
console.log(div);

div.addStyle('height', '100vh');
div.addStyle('background-color', 'red');

console.log(div.renderHTML());

const a = new HTMLHrefElement ('https://google.com');
a.id = 'external_link';

console.log(a);
console.log(a.renderHTML());