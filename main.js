
// --- Data ---

// ₂₃₄₅₆₇
// ²³⁴⁵

const table = {
    // Cation

    "H+": "Hydrogen ion",
    "Na+": "Sodium ion",
    "K+": "Potassium ion",
    "Cu+": "Copper (I) ion",
    "Ag+": "Silver ion",
    "Hg+": "Mercury (I) ion",
    "NH₄+": "Ammonium ion",

    "Mg2+": "Magnesium ion",
    "Ca2+": "Calcium ion",
    "Ba2+": "Barium ion",
    "Pb2+": "Lead ion",
    "Fe2+": "Iron (II) ion",
    "Co2+": "Cobalt (II) ion",
    "Mn2+": "Manganese (II) ion",
    "Ni2+": "Nickel (II) ion",
    "Cu2+": "Copper (II) ion",
    "Zn2+": "Zinc (II) ion",
    "Hg2+": "Mercury (II) ion",

    "Al3+": "Aluminium ion",
    "Fe3+": "Iron (III) ion",
    "Cr3+": "Chromium (III) ion",

    // Anion

    "H-": "Hydride ion",
    "Cl-": "Chloride ion",
    "OH-": "Hydroxide ion",
    "NO₃-": "Nitrate ion",
    "NO₂-": "Nitrite ion",
    "HCO₃-": "Hydrogencarbonate ion",
    "HSO₄-": "Hydrogensulphate ion",
    "CN-": "Cyanide ion",
    "MnO₄-": "Permanganate ion",
    "ClO-": "Hypochlorite ion",
    "ClO₃-": "Chlorate ion",

    "O2-": "Oxide ion",
    "S2-": "Sulphide ion",
    "SO₄2-": "Sulphate ion",
    "SO₃2-": "Sulphite ion",
    "SiO₃2-": "Silicate ion",
    "CO₃2-": "Carbonate ion",
    "CrO₄2-": "Chromate ion",
    "Cr₂O₇2-": "Dichromate ion",

    "N3-": "Nitride ion",
    "PO₄3-": "Phosphate ion",
}

// --- Page ---

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

const no_repeat = 4;
// 0% to give same question for N turns

const record = [];

// const question_only = document.getElementById("question_only");
const answer_only = document.getElementById("answer_only");
const ion_symbol = document.getElementById("ion_symbol");
const ion_name = document.getElementById("ion_name");
const info = document.getElementById("info");

function random_key() {
    return specialize(choice(Object.keys(table).filter(x => !record.includes(x))));
}

function specialize(s) {
    return s.replace("+", "⁺").replace("-", "⁻").replace("2", "²").replace("3", "³");
}

function normalize(s) {
    return s.replace("⁺", "+").replace("⁻", "-").replace("²", "2").replace("³", "3");
}

function new_question() {
    answer_only.style.display = "none";
    // question_only.style.display = "";
    let symbol = random_key();
    ion_symbol.innerText = symbol;
    record.push(symbol);
    if (record.length > no_repeat) {
        record.shift();
    }
}

function clicked() {
    if (state == State.Q) {
        ion_name.innerText = table[normalize(ion_symbol.innerText)];

        answer_only.style.display = "";
        // question_only.style.display = "none";
        state = State.A;
    } else {
        new_question();
        state = State.Q;
    }
}

function open_settings() {
    window.open("settings.html", "_self");
}

addEventListener("click", event => {
    // console.log(event.target);
    if (event.target.tagName !== "BUTTON") {
        clicked();
    }
});

addEventListener("touchstart", event => {
    if (event.touches.length == 2) {
        open_settings();
    }
});

addEventListener("keyup", event => {
    if (event.code === "Space") {
        clicked();
    } else if (event.code === "KeyS") {
        open_settings();
    } else if (event.code === "KeyC") {
        localStorage.clear();
    }
})

function info_gotit() {
    localStorage.setItem("showninfo", "true")
    info.style.display = "none";
}

let showninfo = localStorage.getItem("showninfo");
if (showninfo === "true") {
    info.style.display = "none";
}

window.onload = new_question;
