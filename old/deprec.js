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






// const question_only = document.getElementById("question_only");
// const answer_only = document.getElementById("answer_only");

// const session_finished_result = document.getElementById("session_finished_result");