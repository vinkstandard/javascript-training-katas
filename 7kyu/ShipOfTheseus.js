// https://www.codewars.com/kata/69b83710b26939b35fd10429/train/javascript

function shipOfTheseus(ship) {
    if (ship.length <= 1) return true;
    
   
    for(let i = 0; i < ship.length; i++){
        if(i + 1 >= ship.length) break;
        if(ship[0].length != ship[i + 1].length) return false;
        let numeroDifferenze = 0;
        for(let j = 0; j < ship[0].length; j++){
            if(ship[i][j] != ship[i + 1][j]) numeroDifferenze++;
        }
        if(numeroDifferenze > 1 || numeroDifferenze == 0) return false;
    }
    return true;
}
console.log("\n\n");
console.log(shipOfTheseus([["a", "b", "c"], ["x", "b", "c"], ["x", "y", "c"], ["x", "y", "z"]]) + " | Expected --> true");
console.log(shipOfTheseus([["a", "b", "c"], ["x", "y", "c"]]) + " | Expected --> false");
console.log(shipOfTheseus([["a", "b", "c"], ["x", "b"]]) + " | Expected --> false");
console.log(shipOfTheseus([["a", "b", "c"]]) + " | Expected --> true");
console.log(shipOfTheseus([[]]) + " | Expected --> true");