function setup() {
    noStroke();
    frameRate(1);
}

function draw() {
    if (state.next) {
        randomSeed(state.randSeed);
        state.next = state.autonext;
        const background_color = color(state.background);
        createCanvas(state.width, state.height);
        background(background_color)
        var scheme = state.colors;
        scheme = scheme.filter(c => c.active);
        scheme = scheme.map(c => color(c.value));
        var seedAngle = float(state.seedAngle);
        for (let i = 0; i < state.blockAmount; i++) { 
            seedAngle += float(state.angleIncrement);
            const c1 = selectColor(scheme);
            const c2 = selectColor(scheme);
            const c3 = selectColor(scheme);
            const currentColors = [c1, c2, c3];
            // Background color as rgb color as a quick hack to make transparency work
            fill(color(39, 40, 34, 40)); 
            rect(0, 0, width, height);
            const scaleFactor = height / 1080;
            var variation = float(state.sizeVariation)
            variation = random(-variation, variation)
            drawBlock(random(width), random(height), exp(float(state.largeness) + variation) * scaleFactor, seedAngle, currentColors);
        }
    }
}

function drawBlock(x, y, size, angle, colors) {
    const bg = colors[0];
    fill(bg);
    for (let i = 0; i < max(width, height); i++) {
        ellipse(x + cos(angle)*i, y + sin(angle)*i, size, size);
    }
}

function selectColor(arr) {
    const index = int(random(arr.length));
    return arr[index];
}

