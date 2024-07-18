// Function that displays value
let Ans;
let hide = false;
function dis(val) {
    const screen = document.getElementById("screen");

    // Handling special characters and converting them to mathjs functions
    switch(val) {
        case 'Ans':
            screen.value += Ans;
            break;
        case '^2':
            screen.value += '^2';
            break;
        case '^3':
            screen.value += '^3';
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
        Ans = y;
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
    button.style.fontSize = fontSize ;
    
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

function scientificHide() {
    var symbols = document.querySelectorAll('.scientificButton');
    var screen = document.getElementById('screen');
    var screencell = document.getElementById('screenCell');
    var cells = document.querySelectorAll('.cells');

    if(!hide){
    
    screencell.colSpan = 3; // Change colspan to 3

    
    screen.style.width = "305px";

    
    symbols.forEach(function(symbol) {
        symbol.style.display = 'none'; // Hide all elements with class 'scientificButton'
    });

    cells.forEach(function(symbol) {
        symbol.style.display = 'none'; // Hide all elements with class 'scientificButton'
    });
    
    hide = true;
    }
    else{
        
    screencell.colSpan = 4; // Change colspan to 3

    
    screen.style.width = "410px";

    
    symbols.forEach(function(symbol) {
        symbol.style.display = 'inline'; // Hide all elements with class 'scientificButton'
    });

    cells.forEach(function(symbol) {
        symbol.style.display = 'inline'; // Hide all elements with class 'scientificButton'
    });
    
    
    hide = false;
    }
}
