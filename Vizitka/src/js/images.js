import Element from "./element";

class ImageElement extends Element {
    constructor(elemName) {
        super(elemName);
        this.src = null;
    }

    setSrc(src) {
        this.src = src;
    }

    setAlt(alt) {
        this.alt = alt;
    }

    setTitle(title) {
        this.title = title;
    }

    createDomElement() {
        let img = super.createDomElement();
        img.src = this.src;

        return img;
    }
}

export default ImageElement;