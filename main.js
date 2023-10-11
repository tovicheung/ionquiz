
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
    "ClO₃-": "Chloriate ion",

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

const question_only = document.getElementById("question_only");
const answer_only = document.getElementById("answer_only");
const ion_symbol = document.getElementById("ion_symbol");
const ion_name = document.getElementById("ion_name");

function random_key() {
    return specialize(choice(Object.keys(table)));
}

function specialize(s) {
    return s.replace("+", "⁺").replace("-", "⁻").replace("2", "²").replace("3", "³");
}

function normalize(s) {
    return s.replace("⁺", "+").replace("⁻", "-").replace("²", "2").replace("³", "3");
}

function new_question() {
    answer_only.style.display = "none";
    question_only.style.display = "";
    ion_symbol.innerText = random_key();
}

function clicked() {
    if (state == State.Q) {
        ion_name.innerText = table[normalize(ion_symbol.innerText)];

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
