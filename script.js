const display = document.getElementById("display");
function addToDisplay(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value = display.value + value;
    }
}
function clearDisplay() {
    display.value = "0";
}
function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}
function percentage() {
    try {
        display.value = parseFloat(display.value) / 100;
    } catch (error) {
        display.value = "Error";
    }
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}