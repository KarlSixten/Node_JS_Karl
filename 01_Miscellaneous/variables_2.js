"use strict"

// totalGlobalVariable = "NEVER EVER!! DO THIS"
// var globalVariable = "Also never do this!"

// Rules:
// always use const if you can get away with it
// otherwise, use let


// Global scope

{
    // Block scope
    // Var bløder ind i andre scopes
    var myValue = true
    {
        var myValue = false
    }
    console.log(myValue)
}

{
    // Block scope
    let myValue = true
    {
        // Block scope
        let myValue = false
    }
    console.log(myValue)
}

// Var printer 6 6-taller
for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}

// Let printer 0-5
for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}