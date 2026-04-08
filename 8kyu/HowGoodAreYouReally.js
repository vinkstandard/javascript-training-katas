// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

function betterThanAverage(classPoints, yourPoints) {

    let somma = 0;
    for(let i = 0; i < classPoints.length; i++){
        somma += classPoints[i];
    }
    return (somma / classPoints.length) < yourPoints;
}

console.log(betterThanAverage([2, 3], 5) + "| Expected --> true");
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) + "| Expected --> true");
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) + "| Expected --> false");