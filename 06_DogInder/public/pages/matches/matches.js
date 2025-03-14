let dogs =[];
const dogMatchesNameH1 = document.getElementById("dog-matches-name");
const dogMatchesBioH3 = document.getElementById("dog-matches-bio");
const dogMatchesCityH3 = document.getElementById("dog-matches-city");
const dogMatchesStreetAddressH3 = document.getElementById("dog-matches-street-address");
const dogMatchesImageContainerDiv = document.getElementById("dog-matches-image-container")
 
 
function getMatches(){
    fetch("/api/matches")
    .then((respone) => respone.json())
    .then((result) =>{
        dogs = result.data;
        createMatchProfile(dogs.pop()); //Fjerner fra listen og returnerer det fjernede objekt
    })
}
 
getMatches();
 
function createMatchProfile(dog){
    dogMatchesNameH1.textContent = dog.name;
    dogMatchesBioH3.textContent = dog.bio;
    dogMatchesCityH3.textContent = dog.city;
    dogMatchesStreetAddressH3.innerText = dog.streetAddress;
    const imageTag = document.createElement("img");
    imageTag.src = dog.image;
    imageTag.id = "dog-matches-image";
    imageTag.alt = "Dog match"
 
    dogMatchesImageContainerDiv.innerHTML = "";
    dogMatchesImageContainerDiv.appendChild(imageTag);

    setupHammerPanEvents(imageTag);
}

function setupHammerPanEvents(dogImageTag) {
    const hammertime = new Hammer(dogImageTag);

    hammertime.on('pan', (event) => {
        // Calculate the new position based on the pan movement
        const deltaX = event.deltaX;

        // Apply the transformation to the image
        dogImageTag.style.transform = `translateX(${deltaX}px)`;
    });

    hammertime.on('panend', (event) => {
        if (event.deltaX > 0) {
            console.log("Ended dragging to the right");
            // todo: Handle end of right drag here
        } else {
            console.log("Ended dragging to the left");
            // todo: Handle end of left drag here
        }
        if (dogs.length > 0) {
            createMatchProfile(dogs.pop());
        } else {
            getMatches();
        }
    });
}