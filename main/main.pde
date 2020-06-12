void setup() {
    size(1920, 1080);
    background(#272822);
    noStroke();
    noLoop();
    noCursor();
}

void draw() {
    // Monokai color scheme
    color foreground = #f8f8f2;
    color background = #272822;
    color black = #272822;
    color red = #f92672;
    color green = #a6e22e;
    color yellow = #f4bf75;
    color blue = #66d9ef;
    color magenta = #ae81ff;
    color cyan = #a1efe4;
    color white = #f8f8f2;
    color[] scheme = {red, green, blue, magenta, white, cyan, yellow};
    float seedAngle = random(2*PI);
    for (int i = 0; i <= 7; i++) { 
        seedAngle += PI/32;
        color c1 = selectColor(scheme);
        color c2 = selectColor(scheme);
        color c3 = selectColor(scheme);
        color[] currentColors = {c1, c2, c3};
        fill(color(background, 20));
        rect(0, 0, width, height);
        float scaleFactor = height / 1080;
        drawBlock(random(width), random(height), exp(random(2) + 4) * scaleFactor, seedAngle, currentColors);
    }
    save("output.png");
    //    exit();
}

void drawBlock(float x, float y, float size, float angle, color[] colors) {
    color bg = colors[0];
    fill(bg);
    for (int i = 0; i < max(width, height); i++) {
        ellipse(x + cos(angle)*i, y + sin(angle)*i, size, size);
    }
}

color selectColor(color[] arr) {
    int index = int(random(arr.length));
    return arr[index];
}
