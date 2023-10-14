
// --- Data ---

// ₂₃₄₅₆₇
// ²³⁴⁵

/*
const sym_to_name = {
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

// const name_color = {
//     "Manganese (II) ion": [0xf9cfdb, "mistyrose", "Very pale pink"],
//     "Nickel (II) ion": [0x94e09c, "lightgreen", "Green"],
//     "Iron (II) ion": [0x85bcae, "aquamarine", "Pale green"],
//     "Cobalt (II) ion": [0xe82e77, "hotpink", "Pink"],
//     "Copper (II) ion": [0x3a9bbf, "dodgerblue", "Blue"],
//     "Iron (III) ion": [0xd1ce28, "gold", "Yellow"],
//     "Chromium (III) ion": [0x2e8b57, "seagreen", "Green"],
//     
//     "Permanganate ion": [0xff00ff, "magenta", "Purple"],
//     "Chromate ion": [0xf0ce0c, "gold", "Yellow"],
//     "Dichromate ion": [0xf01d12, "orangered", "Orange"],
// }

*/

class Ion {
    constructor(symbol, name, hexcolor, csscolor, color) {
        this.symbol = symbol;
        this.name = name;
        this.hexcolor = hexcolor;
        this.csscolor = csscolor;
        this.color = color;
    }
}

const ions = [
    new Ion("H+",           "Hydrogen ion",               '0xffffff', 'white', 'Colorless'),
    new Ion("Na+",          "Sodium ion",                 '0xffffff', 'white', 'Colorless'),
    new Ion("K+",           "Potassium ion",              '0xffffff', 'white', 'Colorless'),
    new Ion("Cu+",          "Copper (I) ion",             '0xffffff', 'white', 'Colorless'),
    new Ion("Ag+",          "Silver ion",                 '0xffffff', 'white', 'Colorless'),
    new Ion("Hg+",          "Mercury (I) ion",            '0xffffff', 'white', 'Colorless'),
    new Ion("NH₄+",         "Ammonium ion",               '0xffffff', 'white', 'Colorless'),
    new Ion("Mg2+",         "Magnesium ion",              '0xffffff', 'white', 'Colorless'),
    new Ion("Ca2+",         "Calcium ion",                '0xffffff', 'white', 'Colorless'),
    new Ion("Ba2+",         "Barium ion",                 '0xffffff', 'white', 'Colorless'),
    new Ion("Pb2+",         "Lead ion",                   '0xffffff', 'white', 'Colorless'),
    new Ion("Fe2+",         "Iron (II) ion",              '0x85bcae', 'aquamarine', 'Pale green'),
    new Ion("Co2+",         "Cobalt (II) ion",            '0xe82e77', 'hotpink', 'Pink'),
    new Ion("Mn2+",         "Manganese (II) ion",         '0xf9cfdb', 'mistyrose', 'Very pale pink'),
    new Ion("Ni2+",         "Nickel (II) ion",            '0x94e09c', 'lightgreen', 'Green'),
    new Ion("Cu2+",         "Copper (II) ion",            '0x3a9bbf', 'dodgerblue', 'Blue'),
    new Ion("Zn2+",         "Zinc (II) ion",              '0xffffff', 'white', 'Colorless'),
    new Ion("Hg2+",         "Mercury (II) ion",           '0xffffff', 'white', 'Colorless'),
    new Ion("Al3+",         "Aluminium ion",              '0xffffff', 'white', 'Colorless'),
    new Ion("Fe3+",         "Iron (III) ion",             '0xd1ce28', 'gold', 'Yellow'),
    new Ion("Cr3+",         "Chromium (III) ion",         '0x2e8b57', 'seagreen', 'Green'),
    new Ion("H-",           "Hydride ion",                '0xffffff', 'white', 'Colorless'),
    new Ion("Cl-",          "Chloride ion",               '0xffffff', 'white', 'Colorless'),
    new Ion("OH-",          "Hydroxide ion",              '0xffffff', 'white', 'Colorless'),
    new Ion("NO₃-",         "Nitrate ion",                '0xffffff', 'white', 'Colorless'),
    new Ion("NO₂-",         "Nitrite ion",                '0xffffff', 'white', 'Colorless'),
    new Ion("HCO₃-",        "Hydrogencarbonate ion",      '0xffffff', 'white', 'Colorless'),
    new Ion("HSO₄-",        "Hydrogensulphate ion",       '0xffffff', 'white', 'Colorless'),
    new Ion("CN-",          "Cyanide ion",                '0xffffff', 'white', 'Colorless'),
    new Ion("MnO₄-",        "Permanganate ion",           '0xff00ff', 'magenta', 'Purple'),
    new Ion("ClO-",         "Hypochlorite ion",           '0xffffff', 'white', 'Colorless'),
    new Ion("ClO₃-",        "Chlorate ion",               '0xffffff', 'white', 'Colorless'),
    new Ion("O2-",          "Oxide ion",                  '0xffffff', 'white', 'Colorless'),
    new Ion("S2-",          "Sulphide ion",               '0xffffff', 'white', 'Colorless'),
    new Ion("SO₄2-",        "Sulphate ion",               '0xffffff', 'white', 'Colorless'),
    new Ion("SO₃2-",        "Sulphite ion",               '0xffffff', 'white', 'Colorless'),
    new Ion("SiO₃2-",       "Silicate ion",               '0xffffff', 'white', 'Colorless'),
    new Ion("CO₃2-",        "Carbonate ion",              '0xffffff', 'white', 'Colorless'),
    new Ion("CrO₄2-",       "Chromate ion",               '0xf0ce0c', 'gold', 'Yellow'),
    new Ion("Cr₂O₇2-",      "Dichromate ion",             '0xf01d12', 'orangered', 'Orange'),
    new Ion("N3-",          "Nitride ion",                '0xffffff', 'white', 'Colorless'),
    new Ion("PO₄3-",        "Phosphate ion",              '0xffffff', 'white', 'Colorless'),
];

const colored_ions = ions.filter(ion => ion.color != "Colorless");

// class _Ions {
//     list = ions_list;
// 
//     constructor() {
//         this.symbol_map = {};
//         for (let ion in this.list) {
//             this.symbol_map[ion.symbol] = ion;
//         }
//     }
// }

// for (key in Object.keys(sym_to_name)) {
//     ions.push(new Ion(key, sym_to_name[key], ...(sym_to_name[key] in Object.keys(name_color) ? name_color[sym_to_name[key]])))
// }

// class TwoWayMap {
//     constructor(map) {
//        this.map = map;
//        this.rmap = {};
//        for (const key in map) {
//           const value = map[key];
//           this.rmap[value] = key;   
//        }
//     }
// 
//     get(key) { return this.map[key]; }
//     rget(key) { return this.rmap[key]; }
// }

// const sym_name = new TwoWayMap(sym_to_name);

// --- Page ---

function show(e) {
    e.classList.remove("hidden");
}

function hide(e) {
    e.classList.add("hidden");
}

const State = {
    Q: 0,
    A: 1,

    Question: 0,
    Answer: 1,
}

let Settings = {
    reverse: false,
    color: true,
    color_only: false,
    uniques: 4,
}

var state = State.Q;
var is_running = true;
var is_session = false;

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
const settings_color_only = document.getElementById("settings_color_only");
const settings_uniques = document.getElementById("settings_uniques");


const session_finished = document.getElementById("session_finished");
// const session_finished_result = document.getElementById("session_finished_result");

const corner = document.getElementById("corner");

var current;

function generate_question() {
    if (is_session) {
        return session.pop();
    }
    return choice((Settings.color_only ? colored_ions : ions).filter(x => !record.includes(x)));
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
    hide(Settings.reverse ? ion_symbol : ion_name);
    show(Settings.reverse ? ion_name : ion_symbol);
    hide(ion_color);

    current = generate_question();
    if (Settings.reverse) {
        ion_name.innerText = current.name;
    } else {
        ion_symbol.innerText = specialize(current.symbol);
    }
    if (is_session) {
        corner.innerText = `${ions.length - session.length}/${ions.length}`;
    } else {
        record.push(current);
        if (record.length > Settings.uniques) {
            record.shift();
        }
    }
}

function clicked() {
    if (state == State.Q) {
        if (Settings.reverse) {
            ion_symbol.innerText = specialize(current.symbol);
        } else {
            ion_name.innerText = current.name;
        }

        show(ion_name);
        show(ion_symbol);

        if (Settings.color) {
            ion_color.innerText = current.color;
            show(ion_color)
            document.body.style.backgroundColor = current.csscolor;
        } else {
            hide(ion_color);
        }

        state = State.A;
    } else {
        state = State.Q;
        if (is_session && session.length == 0) {
            open_session_finished();
            return;
        }
        new_question();
    }
}

addEventListener("click", event => {
    if (!is_running) {
        return;
    }
    if (event.target.tagName !== "BUTTON") {
        clicked();
    }
});

addEventListener("touchstart", event => {
    if (!is_running) {
        return;
    }
    if (event.touches.length == 2) {
        open_settings();
    }
});

addEventListener("keyup", event => {
    // console.log(event); // Log keys
    if (!is_running) {
        return;
    }
    if (event.code === "Space") {
        clicked();
    } else if (event.code === "KeyS") {
        open_settings();
    } else if (event.code === "KeyC") {
        localStorage.clear();
    } else if (event.code === "Period" && is_session) {
        session.length = 0;
        state = State.A;
        clicked();
    }
})

function info_gotit() {
    localStorage.setItem("showninfo", "true")
    hide(info);
}

let showninfo = localStorage.getItem("showninfo");
if (showninfo === "true") {
    hide(info)
}


// --- Revise all ---

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let session = [];

function session_all() {
    is_session = true;
    session = [...ions];
    shuffle(session);
    show(corner)
    close_settings();
    new_question();
}

function open_session_finished() {
    show(session_finished);
    hide(main)
    // session_finished_result.innerText = `${ions.length - session.length}/${ions.length}`;
    document.body.style.backgroundColor = "white";
    is_running = false;
    is_session = false;
}

function close_session_finished() {
    hide(session_finished);
    show(main);
    is_running = true;
    hide(corner);
    new_question();
}



// --- Settings ---

function open_settings() {
    show(settings);
    hide(main);
    is_running = false;
}

function close_settings() {
    hide(settings);
    show(main);
    is_running = true;
}

function update_settings() {
    Settings.reverse = settings_reverse.checked;
    Settings.color = settings_color.checked;
    Settings.color_only = settings_color_only.checked;
    Settings.uniques = parseInt(settings_uniques.value);
    localStorage.setItem("settings", JSON.stringify(Settings));
    if (!is_session) {
        new_question();
        record.length = 0;
    }
}

function load_settings() {
    settings_reverse.checked = Settings.reverse;
    settings_color.checked = Settings.color;
    settings_color_only.checked = Settings.color_only;
    settings_uniques.value = Settings.uniques.toString();
}

let set = localStorage.getItem("settings");
if (set != null) {
    Settings = { ...Settings, ...JSON.parse(set)};
    load_settings();
}

function check_input(sender) {
    let min = sender.min;
    let max = sender.max;
    // here we perform the parsing instead of calling another function
    let value = parseInt(sender.value);
    if (value > max) {
        sender.value = max;
    } else if (value<min) {
        sender.value = min;
    }
}


window.onload = () => {
    close_settings();
    close_session_finished();
    new_question();
    settings_uniques.max = ions.length.toString();
    settings_uniques.value = "4";
};
