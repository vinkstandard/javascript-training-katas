// https://www.codewars.com/kata/5aa736a455f906981800360d


function feast(beast, dish) {

const finaliAnimale = [beast.charAt(0), beast.charAt(beast.length - 1)]
const finaliPiatti = [dish.charAt(0), dish.charAt(dish.length -1)]
return finaliAnimale[0] === finaliPiatti[0] && finaliAnimale[1] === finaliPiatti[1];
}

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));