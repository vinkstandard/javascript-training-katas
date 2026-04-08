
const arr = [78, 56, 232, 12, 8];
console.log(findSmallestInt(arr));

function findSmallestInt(arr) {
    if (arr.length == 0) return 0;
    let piccolo = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (piccolo > arr[i]) {
            piccolo = arr[i];
        }
    }
    return piccolo;
}
