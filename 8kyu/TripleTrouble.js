// https://www.codewars.com/kata/5704aea738428f4d30000914

const one = "aa", two = "bb", three = "cc";
console.log(tripleTrouble(one,two,three));

function tripleTrouble(one, two, three){
    let stringa = "";
  for(let i = 0; i < one.length; i++){
    stringa += (one.charAt(i));
    stringa += (two.charAt(i));
    stringa += (three.charAt(i));
  }
  return stringa;

}