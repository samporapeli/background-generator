// Vues
const app = new Vue({
    el: "#interface",
    data: {
        state: state,
    },
    computed: {
        urlWithState: function() {
            const base64State = btoa(JSON.stringify(state));
            const baseURL = window.location.href.split('?')[0];
            return baseURL + '?state=' + base64State;
        }
    }
});

const footer = new Vue({
    el: "#footer",
    data: {
        version: state.version
    }
});

function copyURL() {
    const field = document.getElementById("url-field");
    field.select();
    document.execCommand("copy");
}

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
