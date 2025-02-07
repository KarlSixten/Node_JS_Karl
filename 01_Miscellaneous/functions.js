// Create a function called getRandomInt that has the parameters min and max

// Hoisting
console.log(getRandomInt(0, 10))

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) - min);
}

const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) - min);
}

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) - min);
}


// Action is a callback function
// A callback is a function that is passed as a parameter to another function
// possibly with the aim of calling it later (but not nescessarily)
    // name: string  action: function
function genericPerformer(name, action) {
    return action(name)
}

// Lasse coding
const codingAction = (name) => `${name} likes coding.`

// Using the generic performer, I would like to say:
// Lasse likes coding

console.log(genericPerformer(`Lasse`, codingAction))


// Andreas sleeping
function sleepingAction(name) {
    return `${name} loves sleeping`
}
// Andreas loves sleeping
console.log(genericPerformer(`Andreas`, sleepingAction))



// Tara owns at boxing
// One-liner
console.log(genericPerformer(`Tara`, (name) => `${name} owns at boxing.`))