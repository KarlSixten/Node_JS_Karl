let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let evenNumbers = data.filter((n) => n % 2 === 0)

console.log(evenNumbers)


let over5 = data.filter((n) => {
    if (n > 5) {
        return true 
    } else {
        return false
    }})

//fetchAllCharacters()
async function fetchAllCharacters() {
    let url = "https://swapi.dev/api/people/";
    let allCharacters = [];

    try {
        while (url) {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("An error has occurred");
            }

            const data = await response.json();
            allCharacters.push(...data.results);
            url = data.next;
        }

        console.log("All Star Wars Characters:", allCharacters);
    } catch (error) {
        console.error("An error has occurred:", error);
    }
}

//fetchFemaleCharacters()
async function fetchFemaleCharacters() {
    let url = "https://swapi.dev/api/people/";
    let femaleCharacters = [];

    try {
        while (url) {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("An error has occurred");
            }

            const data = await response.json();
            
            femaleCharacters.push(...data.results.filter(character => character.gender === "female"));

            url = data.next;
        }

        console.log("Female Star Wars Characters:", femaleCharacters);
        return femaleCharacters;
    } catch (error) {
        console.error("An error has occurred:", error);
    }
}

console.log(getAvgFemaleHeight());

async function getAvgFemaleHeight() {
    const femaleCharacters = await fetchFemaleCharacters();
    if (femaleCharacters.length === 0) return 0;

    let sumHeight = femaleCharacters
        .map(character => parseInt(character.height))
        .filter(height => !isNaN(height))
        .reduce((sum, height) => sum + height, 0);

    let avgHeight = sumHeight / femaleCharacters.length;
    console.log("Average Female Height:", avgHeight);
    return avgHeight;
}