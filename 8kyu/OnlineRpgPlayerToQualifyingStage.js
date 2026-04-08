// https://www.codewars.com/kata/55849d76acd73f6cc4000087/train/javascript

function playerRankUp(points) {
    return (points < 99) ? false : "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
}

console.log(playerRankUp(64));
console.log(playerRankUp(101));
