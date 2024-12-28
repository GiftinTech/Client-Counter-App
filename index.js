let decrement = document.getElementById("decrement-btn");
let increment = document.getElementById("increment-btn");
let saveEl = document.getElementById("save-el")
let resetEl = document.getElementById("reset-btn")
let countEl = document.getElementById("count-el");
let count = 0;

function decrease() {
    if(count >= 1) {
        count -= 1;
        countEl.innerText = count;
    }
}

function increase() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    let prevCount = count + " - "
    saveEl.textContent += prevCount
    count = 0
    countEl.textContent = count
}

function reset() {
   count = 0;
   countEl.textContent = count
}