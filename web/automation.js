function zeroPad(value, length=4) {
    if (value.length >= length) {
        return value;
    } else {
        return zeroPad("0" + str(value), length);
    }
}

window.onload = function() {
    if (state.automation) {
        alert("Starting automation process");
        const timestamp = Date.now();
        for (let i = 0; i < 1000; i++) {
            setTimeout(function() {
                state.angleIncrement = parseFloat(state.angleIncrement) + 0.001;
                state.seedAngle = parseFloat(state.seedAngle) - 0.002;
                state.largeness = parseFloat(state.largeness) - 0.002;
                state.filename = timestamp + "-automated-" + zeroPad(i);
                next();
                downloadImage();
            }, i * 1000 + 2000);
        }
    }
};
