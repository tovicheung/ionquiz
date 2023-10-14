
// --- Data ---

// ₂₃₄₅₆₇
// ²³⁴⁵

const sym_to_name = {
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

const name_color = {
    "Manganese (II) ion": [0xf9cfdb, "mistyrose", "Very pale pink"],
    "Nickel (II) ion": [0x94e09c, "lightgreen", "Green"],
    "Iron (II) ion": [0x85bcae, "aquamarine", "Pale green"],
    "Cobalt (II) ion": [0xe82e77, "hotpink", "Pink"],
    "Copper (II) ion": [0x3a9bbf, "dodgerblue", "Blue"],
    "Iron (III) ion": [0xd1ce28, "gold", "Yellow"],
    "Chromium (III) ion": [0x2e8b57, "seagreen", "Green"],
    
    "Permanganate ion": [0xff00ff, "magenta", "Purple"],
    "Chromate ion": [0xf0ce0c, "gold", "Yellow"],
    "Dichromate ion": [0xf01d12, "orangered", "Orange"],
}

class TwoWayMap {
    constructor(map) {
       this.map = map;
       this.rmap = {};
       for (const key in map) {
          const value = map[key];
          this.rmap[value] = key;   
       }
    }

    get(key) { return this.map[key]; }
    rget(key) { return this.rmap[key]; }
}

const sym_name = new TwoWayMap(sym_to_name);

// --- Page ---

const State = {
    Q: 0,
    A: 1,

    Question: 0,
    Answer: 1,
}

let Settings = {
    reverse: false,
    color: true,
}

var state = State.Q;
var is_settings = false;

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
// const answer_only = document.getElementById("answer_only");
const ion_symbol = document.getElementById("ion_symbol");
const ion_name = document.getElementById("ion_name");
const ion_color = document.getElementById("ion_color");
const info = document.getElementById("info");
const main = document.getElementById("main");

const settings = document.getElementById("settings");
const settings_reverse = document.getElementById("settings_reverse");
const settings_color = document.getElementById("settings_color");

function randq() {
    return choice(Object.keys(Settings.reverse ? sym_name.rmap : sym_name.map).filter(x => !record.includes(x)));
}

function specialize(s) {
    return s.replace("+", "⁺").replace("-", "⁻").replace("2", "²").replace("3", "³");
}

function normalize(s) {
    return s.replace("⁺", "+").replace("⁻", "-").replace("²", "2").replace("³", "3");
}

function new_question() {
    document.body.style.backgroundColor = "white";
    
    state = State.Q;
    (Settings.reverse ? ion_symbol : ion_name).style.display = "none";
    (Settings.reverse ? ion_name : ion_symbol).style.display = "";
    ion_color.style.display = "none";

    // question_only.style.display = "";
    let q = randq();
    (Settings.reverse ? ion_name : ion_symbol).innerText = specialize(q);
    record.push(q);
    if (record.length > no_repeat) {
        record.shift();
    }
    // console.log(record);
}

function clicked() {
    if (state == State.Q) {
        if (Settings.reverse) {
            ion_symbol.innerText = specialize(sym_name.rget(ion_name.innerText));
        } else {
            ion_name.innerText = sym_name.get(normalize(ion_symbol.innerText));
        }
        // ion_name.innerText = (Settings.reverse ? table.rget : table.get)(normalize((Settings.reverse ? ion_name : ion_symbol).innerText));

        (Settings.reverse ? ion_name : ion_symbol).style.display = "";
        (Settings.reverse ? ion_symbol : ion_name).style.display = "";

        if (Settings.color) {
            let c = name_color[ion_name.innerText];
            if (c === undefined) {
                ion_color.innerText = "Colorless";
            } else {
                ion_color.innerText = c[2];
                document.body.style.backgroundColor = c[1];
            }
            ion_color.style.display = "";
        } else {
            ion_color.style.display = "none";
        }

        // question_only.style.display = "none";
        state = State.A;
    } else {
        new_question();
        state = State.Q;
    }
}

addEventListener("click", event => {
    // console.log(event.target);
    if (is_settings) {
        return;
    }
    if (event.target.tagName !== "BUTTON") {
        clicked();
    }
});

addEventListener("touchstart", event => {
    if (is_settings) {
        return;
    }
    if (event.touches.length == 2) {
        open_settings();
    }
});

addEventListener("keyup", event => {
    if (is_settings) {
        return;
    }
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



// --- Settings ---

function open_settings() {
    // window.open("settings.html", "_self");
    settings.style.display = "";
    main.style.display = "none";
    is_settings = true;
}

function close_settings() {
    settings.style.display = "none";
    main.style.display = "";
    is_settings = false;
}

function update_settings() {
    Settings.reverse = settings_reverse.checked;
    Settings.color = settings_color.checked;
    localStorage.setItem("settings", JSON.stringify(Settings));
    new_question();
    record.clear();
}

function load_settings() {
    settings_reverse.checked = Settings.reverse;
    settings_color.checked = Settings.color;
}

let set = localStorage.getItem("settings");
if (set != null) {
    Settings = { ...Settings, ...JSON.parse(set)};
    load_settings();
}


window.onload = () => {
    close_settings();
    new_question();
};
