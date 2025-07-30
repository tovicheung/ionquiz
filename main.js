// --- Data ---


class Ion {
    constructor(symbol, name, hexcolor, color) {
        this.symbol = symbol;
        this.name = name;
        this.hexcolor = hexcolor;
        this.color = color;
    }
}

const ions = [
    new Ion("H+",           "Hydrogen ion",               '0xffffff', 'Colorless'),
    new Ion("Na+",          "Sodium ion",                 '0xffffff', 'Colorless'),
    new Ion("K+",           "Potassium ion",              '0xffffff', 'Colorless'),
    new Ion("Cu+",          "Copper (I) ion",             '0xffffff', 'Colorless'),
    new Ion("Ag+",          "Silver ion",                 '0xffffff', 'Colorless'),
    new Ion("Hg+",          "Mercury (I) ion",            '0xffffff', 'Colorless'),
    new Ion("NH₄+",         "Ammonium ion",               '0xffffff', 'Colorless'),
    new Ion("Mg2+",         "Magnesium ion",              '0xffffff', 'Colorless'),
    new Ion("Ca2+",         "Calcium ion",                '0xffffff', 'Colorless'),
    new Ion("Ba2+",         "Barium ion",                 '0xffffff', 'Colorless'),
    new Ion("Pb2+",         "Lead ion",                   '0xffffff', 'Colorless'),
    new Ion("Fe2+",         "Iron (II) ion",              '0x85bcae', 'Pale green'),
    new Ion("Co2+",         "Cobalt (II) ion",            '0xe82e77', 'Pink'),
    new Ion("Mn2+",         "Manganese (II) ion",         '0xf9cfdb', 'Very pale pink'),
    new Ion("Ni2+",         "Nickel (II) ion",            '0x94e09c', 'Green'),
    new Ion("Cu2+",         "Copper (II) ion",            '0x3a9bbf', 'Blue'),
    new Ion("Zn2+",         "Zinc (II) ion",              '0xffffff', 'Colorless'),
    new Ion("Hg2+",         "Mercury (II) ion",           '0xffffff', 'Colorless'),
    new Ion("Al3+",         "Aluminium ion",              '0xffffff', 'Colorless'),
    new Ion("Fe3+",         "Iron (III) ion",             '0xd1ce28', 'Yellow'),
    new Ion("Cr3+",         "Chromium (III) ion",         '0x2e8b57', 'Green'),
    new Ion("Ti3+",         "Titanium (III) ion",         '0x7f007f', 'Purple'),
    new Ion("V2+",          "Vanadium (II) ion",          '0x762fa4', 'Violet'),
    new Ion("V3+",          "Vanadium (III) ion",         '0x3aa456', 'Green'),
    new Ion("Mn3+",         "Manganese (III) ion",        '0xaf4700', 'Red'),
    new Ion("MnO₄2-",       "Manganese (VI) ion",         '0x177472', 'Green'),
    new Ion("Sc3+",         "Scandium ion",               '0xffffff', 'Colorless'),
    new Ion("H-",           "Hydride ion",                '0xffffff', 'Colorless'),
    new Ion("Cl-",          "Chloride ion",               '0xffffff', 'Colorless'),
    new Ion("OH-",          "Hydroxide ion",              '0xffffff', 'Colorless'),
    new Ion("NO₃-",         "Nitrate ion",                '0xffffff', 'Colorless'),
    new Ion("NO₂-",         "Nitrite ion",                '0xffffff', 'Colorless'),
    new Ion("HCO₃-",        "Hydrogencarbonate ion",      '0xffffff', 'Colorless'),
    new Ion("HSO₄-",        "Hydrogensulphate ion",       '0xffffff', 'Colorless'),
    new Ion("CN-",          "Cyanide ion",                '0xffffff', 'Colorless'),
    new Ion("MnO₄-",        "Permanganate ion",           '0xff00ff', 'Purple'),
    new Ion("ClO-",         "Hypochlorite ion",           '0xffffff', 'Colorless'),
    new Ion("ClO₃-",        "Chlorate ion",               '0xffffff', 'Colorless'),
    new Ion("O2-",          "Oxide ion",                  '0xffffff', 'Colorless'),
    new Ion("S2-",          "Sulphide ion",               '0xffffff', 'Colorless'),
    new Ion("SO₄2-",        "Sulphate ion",               '0xffffff', 'Colorless'),
    new Ion("SO₃2-",        "Sulphite ion",               '0xffffff', 'Colorless'),
    new Ion("SiO₃2-",       "Silicate ion",               '0xffffff', 'Colorless'),
    new Ion("CO₃2-",        "Carbonate ion",              '0xffffff', 'Colorless'),
    new Ion("CrO₄2-",       "Chromate ion",               '0xf0ce0c', 'Yellow'),
    new Ion("Cr₂O₇2-",      "Dichromate ion",             '0xf01d12', 'Orange'),
    new Ion("N3-",          "Nitride ion",                '0xffffff', 'Colorless'),
    new Ion("PO₄3-",        "Phosphate ion",              '0xffffff', 'Colorless'),
];

const colored_ions = ions.filter(ion => ion.color != "Colorless");


// --- Utils ---


function random(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function choice(array) {
    return array[random(0, array.length - 1)];
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function specialize(s) {
    return s.replace("+", "⁺").replace("-", "⁻").replace("2", "²").replace("3", "³");
}

function normalize(s) {
    return s.replace("⁺", "+").replace("⁻", "-").replace("²", "2").replace("³", "3");
}

function show(e) {
    e.classList.remove("hidden");
}

function hide(e) {
    e.classList.add("hidden");
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

function settings_uniques_default() {
    settings_uniques.value = uniques_default;
}


// --- State ---

const uniques_default = 4;

const State = {
    Q: 0,
    A: 1,

    Question: 0,
    Answer: 1,
}

var state = State.Q;

let Settings = {
    reverse: false,
    color: true,
    color_only: false,
    uniques: 4,
    timer: false,
    timer_duration: 10,
}

var is_running = true;
var is_settings = false;
var is_session = false;

var current;

const record = [];

function info_gotit() {
    localStorage.setItem("showninfo", "true")
    hide(info);
}

let session = [];

var timer = 0;

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
const settings_timer = document.getElementById("settings_timer");
const settings_timer_buttons = document.getElementById("settings_timer_buttons");

const session_finished = document.getElementById("session_finished");

const corner1 = document.getElementById("corner1");
const corner2 = document.getElementById("corner2");

if (localStorage.getItem("showninfo") === "true") {
    hide(info)
}

function generate_question() {
    if (is_session) {
        return session.pop();
    }
    return choice((Settings.color_only ? colored_ions : ions).filter(x => !record.includes(x)));
}

function start_timer() {
    corner2.innerText = Settings.timer_duration.toString();
    timer = setInterval(() => {
        let secs = parseInt(corner2.innerText) - 1;
        if (secs <= 0) {
            hide(corner2);
            clearInterval(timer);
            clicked();
        }
        corner2.innerText = secs;
    }, 1000);
    show(corner2);
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
        corner1.innerText = `${ions.length - session.length}/${ions.length}`;
    } else {
        record.push(current);
        if (record.length > Settings.uniques) {
            record.shift();
        }
    }
    
    if (Settings.timer) {
        clearInterval(timer); // ensure no strange bugs
        start_timer();
    }
}


// --- Event handlers ---

var radio_selected;

function radio_clicked(sender) {
    if (radio_selected !== undefined) {
        radio_selected.classList.remove("radio_selected");
    }
    sender.classList.add("radio_selected");
    radio_selected = sender;
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
            document.body.style.backgroundColor = `#${current.hexcolor.slice(2)}`;
        } else {
            hide(ion_color);
        }

        state = State.A;

        if (Settings.timer) {
            clearInterval(timer);
        }
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
    if (is_settings && event.code === "KeyS") {
        close_settings();
        return;
    }
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


// --- Session ---


function start_session() {
    is_session = true;
    session = [...ions];
    shuffle(session);
    show(corner1);
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
    if (Settings.timer) {
        clearInterval(timer);
    }
}

function close_session_finished() {
    hide(session_finished);
    show(main);
    is_running = true;
    hide(corner1);
    new_question();
}


// --- Settings ---


function open_settings() {
    show(settings);
    hide(main);
    is_running = false;
    is_settings = true;
    if (Settings.timer) {
        clearInterval(timer);
        // start_timer();
    }
}

function close_settings() {
    hide(settings);
    show(main);
    is_running = true;
    is_settings = false;
    if (Settings.timer) {
        clearInterval(timer);
        start_timer();
    }
}

function update_settings() {
    // page -> state
    Settings.reverse = settings_reverse.checked;
    Settings.color = settings_color.checked;
    Settings.color_only = settings_color_only.checked;
    Settings.uniques = parseInt(settings_uniques.value);
    Settings.timer = settings_timer.checked;
    Settings.timer_duration = parseInt(radio_selected.innerText.replace("s", ""));
    localStorage.setItem("settings", JSON.stringify(Settings));
    if (!is_session) {
        new_question();
        record.length = 0;
    }
}

function load_settings() {
    // state -> page
    settings_reverse.checked = Settings.reverse;
    settings_color.checked = Settings.color;
    settings_color_only.checked = Settings.color_only;
    settings_uniques.value = Settings.uniques.toString();
    settings_timer.checked = Settings.timer;
    radio_clicked([...settings_timer_buttons.childNodes].filter(e => e.tagName === "BUTTON")[Settings.timer_duration / 5 - 1]);
}

{ // Prevent polluting global namespace
    let set = localStorage.getItem("settings");
    if (set != null) {
        Settings = { ...Settings, ...JSON.parse(set)};
    }
    load_settings();
}

window.onload = () => {
    close_settings();
    close_session_finished(); // new question is generated here!
    // new_question();
    settings_uniques.max = ions.length.toString();
};
