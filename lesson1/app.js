const counterValue = document.getElementById("counter-value");
const actionMinus = document.getElementById("action-minus");
const actionReset = document.getElementById("action-reset");
const actionPlus = document.getElementById("action-plus");

function resetCounter() {
    counterValue.innerText = 0;
    setCounterColor()
}

actionReset.addEventListener("click", resetCounter);


function plusCounter() {
    let value = Number(counterValue.innerText);
    value++;
    counterValue.innerText = value;
   setCounterColor()
}

actionPlus.addEventListener("click", plusCounter);
function minusCounter() {
    let value = Number(counterValue.innerText);
    value--;
    counterValue.innerText = value;
    setCounterColor()
}
actionMinus.addEventListener("click", minusCounter);

function setCounterColor() {
    let value = Number(counterValue.innerText);
    counterValue.innerText = value;
    if(value > 0) {
        counterValue.style.color = "lime";
    } else if(value < 0) {
        counterValue.style.color = "red";
    } else {
        counterValue.style.color = "cyan";
    }
}