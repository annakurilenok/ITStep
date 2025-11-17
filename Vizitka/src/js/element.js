class Element {
    constructor(elemName) {
        this.name = elemName;
        this.classes = [];
        this.id = "";
        this.childrens = [];
        this.css = [];
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

    setId(id) {
        this.id = id;
    }

    render(parentElement) {
        let el = document.createElement(this.name);
        el.id = this.id;
        
        for(let cl of this.classes) {
            el.classList.add(cl);
        }

        console.dir(el);
        parentElement.append(el);
    }

}

export default Element;