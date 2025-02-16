// forEach, map, filter, reduce, findIndex, find

// for-loops skal kun bruges hvis man "skal tælle med fingrene". loopMetoder kan alt andet

// Double the numbers and save them in a new array
const myNumbers = [1, 2, 3, 4, 5, 6];

const myNumbersDoubled = myNumbers.map((n) => n * 2);

console.log(myNumbersDoubled);


// Lower the height for each except for MIR
const satelites = [
    {
        name: "International Space Station",
        height: 12000
    },
    {
        name: "MIR",
        height: 0
    },
    {
        name: "James Webb",
        height: 27000
    }
];

const adjustedHeightSatelites = satelites.map((satelite) => ({
        height: satelite.name === "MIR" ? satelite.height : satelite.height - 3000,
        name: satelite.name
}))

console.log(adjustedHeightSatelites)


//Make a list that reacts as many time as above with thumbs up
const listOfReactions = ["thumbs down", "thumbs down", "thumbs down"];

const happyReactions = listOfReactions.map((reaction) => "thumbs up")

console.log(happyReactions)