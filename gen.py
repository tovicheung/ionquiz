ions = {
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
    
    # F5
    "Ti3+": "Titanium (III) ion",
    "V2+": "Vanadium (II) ion",
    "V3+": "Vanadium (III) ion",
    "Mn3+": "Manganese (III) ion",
    "MnO₄2-": "Manganese (VI) ion",

    "Sc3+": "Scandium ion",
    # end F5


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
color = {
    "Manganese (II) ion": [0xf9cfdb, "Very pale pink"],
    "Nickel (II) ion": [0x94e09c, "Green"],
    "Iron (II) ion": [0x85bcae, "Pale green"],
    "Cobalt (II) ion": [0xe82e77, "Pink"],
    "Copper (II) ion": [0x3a9bbf, "Blue"],
    "Iron (III) ion": [0xd1ce28, "Yellow"],
    "Chromium (III) ion": [0x2e8b57, "Green"],
    
    "Permanganate ion": [0xff00ff, "Purple"],
    "Chromate ion": [0xf0ce0c, "Yellow"],
    "Dichromate ion": [0xf01d12, "Orange"],

    # F5
    "Titanium (III) ion": [0x7f007f, "Purple"],
    "Vanadium (II) ion": [0x762fa4, "Violet"],
    "Vanadium (III) ion": [0x3aa456, "Green"],
    "Manganese (III) ion": [0xaf4700, "Brown"],
    "Manganese (VI) ion": [0x177472, "Green"],
    # end F5
}

for k, v in ions.items():
    print(
        f"    new Ion({f'"{k}",': <16}{f'"{v}",': <30}{(lambda l: str([hex(l[0])] + l[1:])[1:-1])(color.get(v, [0xffffff, "Colorless"]))}),"
    )
