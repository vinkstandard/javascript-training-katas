// https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript

function check(a, x) {
    for(let i = 0; i < a.length; i++){
        if(a[i] === x) return true;
    }
    return false;
}

// guardando le soluzioni ho scoperto il comando .includes()

console.log(check([66, 101], 66));
console.log(check([101, 45, 75, 105, 99, 107], 107));
console.log(check(['t', 'e', 's', 't'], 'e'));
console.log(check(['what', 'a', 'great', 'kata'], 'kat'));