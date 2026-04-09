// https://www.codewars.com/kata/54fb853b2c8785dd5e000957/train/javascript

function chain(input, fs) {
    for(let i = 0; i < fs.length; i++){
        input = fs[i](input);
    }
    return input;
}

// su codewars non c'è bisogno di scrivere questo dato che è autoiniettato
function aggiungi(num) {
  return num + 1;
}

function moltiplica(num) {
  return num * 30;
}




console.log(chain(2, [aggiungi]));
console.log(chain(2, [aggiungi, aggiungi]));
console.log(chain(2, [moltiplica, aggiungi]));
console.log(chain(2, []));