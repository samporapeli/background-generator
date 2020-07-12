const seed = + new Date()   // Timestamp as seed
const resolutions = [
    [800, 480],
    [1920, 1080],
    [3840, 2160]
]
const state = {
    width: 1920,
    height: 1080,
    next: true,
    autonext: false,
    blockAmount: 6,
    largeness: 5,
    sizeVariation: 0.8,
    background: "#272822",
    colors: {},
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
        },
        kasugano: {
          "id": "kasugano",
          "name": "Kasugano",
          "author": "Kori Ayakashi",
          "color": [
            "#3d3d3d",
            "#6673bf",
            "#3ea290",
            "#b0ead9",
            "#31658c",
            "#596196",
            "#8292b2",
            "#c8cacc",
            "#4d4d4d",
            "#899aff",
            "#52ad91",
            "#98c9bb",
            "#477ab3",
            "#7882bf",
            "#95a7cc",
            "#edeff2"
          ],
          "foreground": "#ffffff",
          "background": "#1b1b1b"
        } 
    },
    selectedPalette: "monokai",
    resolutions: resolutions, 
    resolution: resolutions[0],
    portrait: false,
    seedAngle: Math.PI,
    angleIncrement: Math.PI / 32,
    randSeed: seed
}

function changePalette(palette_id) {
    colors = {};
    const palette = state.palettes[palette_id];
    for (let color_index in palette.color) {
        const current_color = palette.color[color_index];
        colors[color_index] = { active: true, value: current_color };
    } 
    state.colors = colors;
    return;
}

function updateResolution() {
    if (state.portrait) {
        state.width = state.resolution[1];
        state.height = state.resolution[0];
    } else {
        state.width = state.resolution[0];
        state.height = state.resolution[1];
    }
    return;
}

changePalette("monokai");
updateResolution();

function next() {
    state.next = true;
}
