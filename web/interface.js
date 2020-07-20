// Vues
const app = new Vue({
    el: "#interface",
    data: {
        state: state
    }
});

const footer = new Vue({
    el: "#footer",
    data: {
        version: state.version
    }
});

function isIosSafari() {
    const ua = window.navigator.userAgent;
    return ua.includes("Mobile") && ua.includes("Safari");
}

// Show the main section if javascript is enabled
document.getElementById("main").style.display = "block";

// Select second resolution on the dropdown
document.getElementById("resolution-selector").selectedIndex = 1;

// Create prettier dropdowns
$("#palette-selector").dropdown();
$("#resolution-selector").dropdown();

// Handle the resolution info message box toggling
const resolutionInfoLink = document.getElementById("resolution-info-link");
const resolutionInfoBox = document.getElementById("resolution-info");
document.getElementById("close-resolution-info").addEventListener("click", function() {
    resolutionInfoBox.style.display = "none";
    resolutionInfoLink.style.display = "block";
});
resolutionInfoLink.addEventListener("click", function() {
    resolutionInfoLink.style.display = "none";
    resolutionInfoBox.style.display = "block";
});

if (isIosSafari()) {
    resolutionInfoLink.style.display = "none";
}
else {
    resolutionInfoBox.style.display = "none";
}
