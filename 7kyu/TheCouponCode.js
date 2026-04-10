// https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {

    const dataAttuale = new Date(currentDate), dataScadenza = new Date(expirationDate);
    return enteredCode === correctCode && dataAttuale <= dataScadenza;
}


console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'));
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'));
console.log(checkCoupon(0,  false,    "July 9, 2015", "July 9, 2015"));