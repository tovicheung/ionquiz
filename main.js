
const State = {
    Q: 0,
    A: 1,
}

var state = State.Q;


function random(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function choice(array) {
    return array[random(0, array.length - 1)];
}

const table = {
    "H⁺": "Hydrogen ion"
}

const question_only = document.getElementById("question_only");
const answer_only = document.getElementById("answer_only");
const ion_symbol = document.getElementById("ion_symbol");
const ion_name = document.getElementById("ion_name");

function random_key() {
    return choice(Object.keys(table));
}

function new_question() {
    answer_only.style.display = "none";
    question_only.style.display = "";
    ion_symbol.innerText = random_key();
}

function clicked() {
    if (state == State.Q) {
        ion_name.innerText = table[ion_symbol.innerText];

        answer_only.style.display = "";
        question_only.style.display = "none";
        state = State.A;
    } else {
        new_question();
        state = State.Q;
    }
}

addEventListener("click", clicked);
addEventListener("keyup", event => {
    if (event.code === "Space") {
        clicked();
    }
})

window.onload = new_question;
