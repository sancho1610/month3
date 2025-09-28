const actionCoin = document.getElementById("value-coin");
const actionAddCoin = document.getElementById("add-Coin");

let coin = 0;

function actionAdd(){
    if (coin < 10) {
        coin++;
        actionCoin.textContent = coin;
    } else {
        coin += 2;
        actionCoin.textContent = coin;
    } if (coin > 100) {
        coin += 3;
        actionCoin.textContent = coin;
    }
}

actionAddCoin.addEventListener("click", actionAdd);
