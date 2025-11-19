class Element {
    constructor(elemName) {
        this.name = elemName;
        this.classes = [];
        this.id = null;
        this.childrens = [];
        this.css = {};
    }

    addClasses(...classes) {
        //for(let cl of classes) { - отдельные значения в массив
         //   this.classes.push(cl);
       // }

       this.classes = [...this.classes, ...classes]; //массив в отдельные значения
    }

    removeClasses(...classes) {
        for(let cl of classes) {
            let index = this.classes.indexOf(cl); 

            if(index != -1) {
                this.classes.splice(index, 1);
            }

        }
    }

     addStyles(styles) {
        Object.assign(this.css, styles);
    }

    appendChilds(...childs) {
        for(let c of childs) {
            this.childrens.push(c);
        }
    
    }

    deleteStyles(...styles) {
        for(let key of styles) {
            delete this.css[key];
        }
    }

    setId(id) {
        this.id = id;
    }

    createDomElement() {
        let el = document.createElement(this.name);
        if(this.id) {
            el.id = this.id;
        }
        el.id = this.id;
        
        for(let cl of this.classes) {
            el.classList.add(cl);
        }
        //el.style.border = "1px solid black";
        // el.style['border'] = "1px solid black";
        // console.dir(el);
        for(let key in this.css) {
            let styleName = key;
            let styleValue = this.css[key];

            el.style[styleName] = styleValue;
            //el.style[key] = this.css[key];
        }

        for(let child of this.childrens) {
            el.append(child.createDomElement());
        }

        return el;
    }
}

export default Element;