const app = new Vue({
    el: "#interface",
    data: {
        state: state
    }
});

const footer = new Vue({
    el: "#footer",
    data: {
        version: "1.0.2"
    }
});

$("#palette-selector").dropdown();
$("#resolution-selector").dropdown();
