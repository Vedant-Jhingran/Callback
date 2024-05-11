let x = "";

function manipulateString(str, callback) {
     x = str.toUpperCase();
     callback();
}

function logString() {
    console.log(`The manipulated string is ${x}`);
}

manipulateString("vedant oberoi", logString);