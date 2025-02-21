//Importer express
const e = require("express");
const express = require("express");
//Instantier express
const app = express();

// Sørg for at JSON kan parses til JS objekter
app.use(express.json());

const PORT = 8080;

const fingerBones = [
    {
        id: 1,
        name: "Phalange Knowles"
    },
    {
        id: 2,
        name: "Distal Phalange"
    }
]

let nextId = fingerBones.length + 1

app.get("/fingerbones", (req, res) => {
    res.send({ data : fingerBones })
})

app.get("/fingerbones/:id", (req, res) => {
    // Alt fra url er String, så id skal laves til et tal
    const providedFingerboneId = Number(req.params.id)
    const foundFingerBone = fingerBones.find((fingerBone) => fingerBone.id === providedFingerboneId);

    if (!foundFingerBone) {
        res.status(404).send({ error: `No fingerbone found with id: ${providedFingerboneId}` })
    } else {
        res.send({ data : foundFingerBone})
    }
})

app.post("/fingerbones", (req, res) => {

    const newFingerbone = req.body;
    newFingerbone.id = nextId++

    fingerBones.push(newFingerbone)

    res.send({ data : newFingerbone })
})

app.patch("/fingerbones/:id", (req, res) => {
    const providedFingerboneId = Number(req.params.id);
    const foundFingerBoneIndex = fingerBones.findIndex((fingerBone) => fingerBone.id === providedFingerboneId);
    
    if (foundFingerBoneIndex === -1) {
        return res.status(404).send({ error: `No fingerbone found with id: ${providedFingerboneId}` });
    } else {
        const existingFingerbone = fingerBones[foundFingerBoneIndex]
        
        // Tag existingFingerbone som udgangspunkt, lad req.body overskrive hvor nødvendigt, id sættes altid til at være det originale ID
        const newFingerbone = { ...existingFingerbone, ...req.body, id : existingFingerbone.id };

        fingerBones[foundFingerBoneIndex] = newFingerbone;

        res.send({ data : newFingerbone })
    }
})

app.delete("/fingerbones/:id", (req, res) => {
    const providedFingerboneId = Number(req.params.id);

    const foundFingerBoneIndex = fingerBones.findIndex((fingerBone) => fingerBone.id === providedFingerboneId);
    
    if (foundFingerBoneIndex === -1) {
        return res.status(404).send({ error: `No fingerbone found with id: ${providedFingerboneId}` });
    } else {
        fingerBones.splice(filteredFingerBones, 1);
        res.send({ data: `ID: ${providedFingerboneId} deleted` });
    }
  });

app.put("/fingerbones/:id", (req, res) => {
    const providedFingerboneId = Number(req.params.id)
    let foundFingerBone = fingerBones.find((fingerBone) => fingerBone.id === providedFingerboneId);

    if (!foundFingerBone) {
        res.status(404).send({ error: `No fingerbone found with id: ${providedFingerboneId}`})
    } else {
        foundFingerBone.name = req.body.name;
        res.send({ data : foundFingerBone })
    }
})

app.listen(PORT, (error) => {
    if (error) {
        console.log(`Error starting the server:`, error)
    }
    console.log(`Server is running on port:`, PORT)
})
