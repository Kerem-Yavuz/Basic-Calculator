// Function that displays value
function dis(val) {
    const screen = document.getElementById("screen");

    // Handling special characters and converting them to mathjs functions
    switch(val) {
        case '^2':
            screen.value += '**2';
            break;
        case '^3':
            screen.value += '**3';
            break;
        case '&radic;':
            screen.value += '√(';
            break;
        case '&#8731;':
            screen.value += '∛(';
            break;
        case '&Pi;':
            screen.value += 'π';
            break;
        case '&#400;':
            screen.value += 'e';
            break;
        default:
            screen.value += val;
    }
}

// Handling keyboard input
function myFunction(event) {
    if ("0123456789+-*/.".includes(event.key)) {
        document.getElementById("screen").value += event.key;
    }
}

var cal = document.getElementById("calcu");
cal.onkeyup = function(event) {
    if (event.keyCode === 13) {
        solve();
    }
}

// Function that evaluates the expression and returns result
function solve() {
    let x = document.getElementById("screen").value;

    // Replace display symbols with values for math.js evaluation
    x = x.replace(/π/g, 'pi').replace(/√/g, 'sqrt').replace(/∛/g, 'cbrt');

    try {
        let y = math.evaluate(x);
        document.getElementById("screen").value = y;
    } catch (error) {
        document.getElementById("screen").value = "Error";
    }
}

// Function that clears the display
function clr() {
    document.getElementById("screen").value = "";
}


// Function to dynamically resize the font size to fit within the button
function resizeFont(button) {
    const maxFontSize = 3.5; // Maximum font size in rem
    let fontSize = maxFontSize;
    button.style.fontSize = fontSize + 'rem';
    
    while (button.scrollWidth > button.clientWidth || button.scrollHeight > button.clientHeight) {
        fontSize -= 0.1;
        button.style.fontSize = fontSize + 'rem';
        if (fontSize <= 0.5) break; // Minimum font size to prevent infinite loop
    }
}

// Attach the resize function to each button
document.querySelectorAll('input[type="button"]').forEach(button => {
    resizeFont(button);
});
