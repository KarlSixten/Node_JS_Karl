
// Avoid var
// var name = 'lol'

let name = 'lol';

// Const is not a constant
// Const is a constant in the declaration
// Const must be declared as it is initialized

// JS object
const me = {};
me.name = "lol";
me.age = 123;
console.log(me)
console.log(typeof me.name)

const hobbies = ["coding", "sleeping"]


// pop() fjerner sidst tilføjede element til Array
hobbies.pop()

// push() tilføjer et eller flere elementer til Array
hobbies.push("drawing", "painting");

console.log(hobbies)

const jsObject = {
    whatAmI: "jsObject"
}



// " vs. ' vs. ` (backticks)

console.log("I can compile!")
console.log('I can compile!')
console.log(`I can compile!`);

// Use of ' and " in sentences
console.log("I can't dance!")
console.log('I can "dance"!')

// String interpolation, bigger perfomance hit compared to the others
const dancerName = "Computer"
console.log(`${dancerName} can dance '"'''""
    line 1
    line 2
    '''''''"""''""""`);


const assignmentDescription = "...and the value is..."
const value = 4

// Don't use + in console.log to avoid type coercion
console.log(assignmentDescription, value)