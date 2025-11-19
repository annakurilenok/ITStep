import { hotLoader } from "mini-css-extract-plugin/types/loader";
import Element from "./element";
import ImageElement from "./images";

const el = new Element('div');

el.setId('block');
el.addClasses('border', 'flex');
el.removeClasses('flex');
el.addStyles({
    width: "100px",
    height: "100px",
    border: "1px solid black",
    backgroundColor: "pink"
});
const link = new Element('a');
const img = new ImageElement('img');
img.setSrc('https://img.s-fl.ru/img/catalog/big/c_918_1208_664335097.jpg');
img.setAlt('Это картинка мишки');

img.addStyles({
    width: "100%"
})

console.log(img);

link.appendChilds(img);
el.appendChilds(link);

// el.addStyles({
//     transform: "rotate(45deg)"
// });
// el.deleteStyles('transform');

console.log(el);

document.body.append(el.createDomElement());


// function summ (...params) {
//     let result = 0;

//     for(let param of params) {
//         result += param;
//     }

//     return result
// }

// console.log(summ(2,2));