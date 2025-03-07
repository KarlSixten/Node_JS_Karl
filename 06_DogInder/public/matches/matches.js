let dogs =[];
const dogMatchesNameH1 = document.getElementById("dog-matches-name");
const dogMatchesImageContainerDiv = document.getElementById("dog-matches-image-container")
 
 
function getMatches(){
    fetch("/api/matches")
    .then((respone) => respone.json())
    .then((result) =>{
        dogs = result.data;
        createMatchImage(dogs.pop()); //Fjerner fra listen og returnerer det fjernede objekt
    })
}
 
getMatches();
 
function createMatchImage (dog){
    dogMatchesNameH1.textContent = dog.name;
    const imageTag = document.createElement("img");
    imageTag.src = dog.image;
    imageTag.id = "dog-matches-image";
 
    dogMatchesImageContainerDiv.innerHTML = "";
    dogMatchesImageContainerDiv.appendChild(imageTag);
}
 