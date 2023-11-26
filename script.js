const btn = document.getElementById('button');
let index = 1;
const colors = ["red", "yellow", "green"];

function changeColor() {
    btn.style.backgroundColor = colors[index];
    ++index;
    if(index == colors.length) {
        index = 0;
    }
}

setInterval(changeColor, 10000);