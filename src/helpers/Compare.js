import Counters from '../components/Counters';
import Buttons from '../components/Buttons';

module.exports = {
    Compare: Compare
}

let counterNum = Counters.returnStateValue;
// console.log('test', counterNum);

function Compare() {
    return ('hello', counterNum);
}
// let x = createTiles.printedNumber; 

// function compareNumber() {
//     if (y === x){
//         remove from arrays / sets 
//         remove from grid visually 
//         add into new array - print array.length onto screen 
//     }
//     else (//counter turns red )
// }

// compareNumber()