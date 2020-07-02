const seed = + new Date()   // Timestamp as seed
const state = {
    width: 1920,
    height: 1080,
    next: true,
    autonext: false,
    blockAmount: 6,
    largeness: 5,
    sizeVariation: 0.8,
    background: "#272822",
    colors: [],
    palettes: {
        monokai: {
          "id": "monokai",
          "name": "Monokai",
          "author": "",
          "color": [
            "#48483e",
            "#dc2566",
            "#8fc029",
            "#d4c96e",
            "#55bcce",
            "#9358fe",
            "#56b7a5",
            "#acada1",
            "#76715e",
            "#fa2772",
            "#a7e22e",
            "#e7db75",
            "#66d9ee",
            "#ae82ff",
            "#66efd5",
            "#cfd0c2"
          ],
          "foreground": "#f1ebeb",
          "background": "#272822"
        },
        orange: {
            "id": "orange",
            "name": "Orange",
            "author": "",
            "color": ["#f49102", "#ffcc80", "#e6e6e6"],
            "foreground": "#f1ebeb",
            "background": "#272822"
        }
    },
    selectedPalette: "monokai",
    seedAngle: Math.PI,
    angleIncrement: Math.PI / 32,
    randSeed: seed
}

function changePalette(palette_id) {
    colors = [];
    const palette = state.palettes[palette_id];
    for (let color_index in palette.color) {
        const current_color = palette.color[color_index];
        colors.push([current_color, true]);
    } 
    state.colors = colors;
    return;
}

changePalette("monokai");

function next() {
    state.next = true;
}
