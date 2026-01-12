import options from "./options";
import rand from './rand';

class Flake {
    constructor(sizi, left, top, flake) {
        this.sizi = sizi;
        this.left = left;
        this.top = top;
        this.flake = flake;

        this.maxLeft = this.left - options.limit;
        this.maxRight = this.left + options.limit;

        this.element = document.createElement('span');
        this.element.innerHTML = "&#10054;";
        this.element.classList.add('snowflake');
        this.element.style.fontSize = `${this.sizi}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
    }

    draw() {
        document.body.append(this.element);
    }

    move(speed) {
        let count = 0;
        let interval = setInterval(() => {
            if(this.top < options.maxHeight) {
                this.top += speed;
                this.element.style.top = `${this.top}px`;

                if(count == 5) {
                    this.left = rand(this.maxLeft, this.maxRight);
                    this.element.style.left = `${this.left}px`;
                    count = 0
                }else {
                    count ++;
                }

               
            } else {
                this.element.remove();
                clearInterval(interval);

            }
        },100);
    }

}

export default Flake;