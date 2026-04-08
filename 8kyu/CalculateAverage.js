// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function findAverage(array) {
  if(array.length === 0) return 0;

  let somma = 0;
  for(let i = 0; i < array.length; i++){
    somma += array[i];
  }
  return somma / array.length;
}

console.log(findAverage([1,1,1]));
console.log(findAverage([1,2,3]));
console.log(findAverage([1,2,3,4]));
