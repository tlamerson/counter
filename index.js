const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const theincrease = document.getElementById("increaseBtn2")
const thedecrease = document.getElementById("decreaseBtn2")

const countLabel = document.getElementById("countLabel")
let count = 0;

increaseBtn.onclick = function(){
    count++
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

theincrease.onclick = function(){
    count += 100;
    countLabel.textContent = count;
}

thedecrease.onclick = function() {
    count -= 100;
    countLabel.textContent = count;
}