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
    colors: [
        { value: "#AE81FF", active: true },
        { value: "#A1EFE4", active: true },
        { value: "#FA2772", active: true },
        { value: "#A7E22E", active: true },
        { value: "#F8F8F2", active: false }
    ],
    scheme: [1, 1, 0],
    seedAngle: Math.PI,
    angleIncrement: Math.PI / 32,
    randSeed: seed
}

function next() {
    state.next = true;
}
