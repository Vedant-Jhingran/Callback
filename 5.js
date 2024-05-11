function greet(name) {
    return new Promise(function(resolve) {
        resolve(`Hello ${name}`)
    })
}

greet("Vedant").then(function(value) {
    console.log(value);
})