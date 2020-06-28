function setup() {
    createCanvas(1920, 1080);
    background(color("#272822"));
    noStroke();
    noLoop();
    noCursor();
}

function draw() {
    // Monokai color scheme
    var foreground = color("#f8f8f2");
    var background = color("#272822");
    var black = color("#272822");
    var red = color("#f92672");
    var green = color("#a6e22e");
    var yellow = color("#f4bf75");
    var blue = color("#66d9ef");
    var magenta = color("#ae81ff");
    var cyan = color("#a1efe4");
    var white = color("#f8f8f2");
    var scheme = [red, green, blue, magenta, white, cyan, yellow];
    var seedAngle = random(2*PI);
    for (let i = 0; i <= 7; i++) { 
        seedAngle += PI/32;
        const c1 = selectColor(scheme);
        const c2 = selectColor(scheme);
        const c3 = selectColor(scheme);
        const currentColors = [c1, c2, c3];
        // Background color as rgb color as a quick hack to make transparency work
        fill(color(39, 40, 34, 40)); 
        rect(0, 0, width, height);
        const scaleFactor = height / 1080;
        drawBlock(random(width), random(height), exp(random(2) + 4) * scaleFactor, seedAngle, currentColors);
    }
     //save("output.png");
    //    exit();
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

