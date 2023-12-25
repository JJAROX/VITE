import { value, obj } from "./modules/data1"
console.log("export value i obj z pliku data1.js", { value, obj })
import obj2 from "./modules/data2"
console.log("export default obj2 z pliku data2.js", obj2)
import { number, allFunctions } from "./modules/data3"

allFunctions.add(10)
allFunctions.remove(40)

console.log("number = ", number)
import Data4 from "./modules/data3";

const d1 = new Data4(1, 2)
const d2 = new Data4(3, 4)

console.log("obiekt d1 klasy Data4 z argumentami 1,2", d1)
console.log("obiekt d2 klasy Data4 z argumentami 3,4", d2)

import CustomDiv from "./modules/data5";

const list = ["red", "green", "blue"]

for (let i = 0; i < list.length; i++) {
    const customDiv = new CustomDiv(100, 100, "hello", list[i])
    customDiv.setXY(i * 50, i * 50)
    console.log(customDiv);
    document.body.append(customDiv.getRoot())
}
import plik from './modules/gfx/viteimage.png';

document.getElementById("img1").src = plik
import './modules/css/style.css';