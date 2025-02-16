//Importer express
const express = require("express");
//Instantier express
const app = express();

// Sørg for at JSON kan parses til JS objekter
app.use(express.json());

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

app.get("/fingerbones", (req, res) => {
    res.send({ data : fingerBones })
})

app.get("/fingerbones/:id", (req, res) => {
    // Alt fra url er String, så id skal laves til et tal
    const fingerBoneId = Number(req.params.id)
    const foundFingerBone = fingerBones.find((fingerBone) => fingerBone.id === fingerBoneId);

    if (!foundFingerBone) {
        res.status(404).send({ error : `No finger bones found with id ${fingerBoneId}`})
    } else {
        res.send({ data : foundFingerBone})
    }
})

app.post("/fingerbones", (req, res) => {

    fingerBones.push(
        {
            id: req.body.id,
            name: req.body.name
        }
    )

    res.send({ data : req.body })
})

app.put("/fingerbones/:id", (req, res) => {
    const idToUpdate = Number(req.params.id)
    let foundFingerBone = fingerBones.find((fingerBone) => fingerBone.id === idToUpdate);

    if (!foundFingerBone) {
        res.status(404).send({ error : `No finger bones found with id ${idToUpdate}`})
    } else {
        foundFingerBone.name = req.body.name;
        res.send({ data : foundFingerBone })
    }
})

app.delete("/fingerbones/:id", (req, res) => {
    const idToDelete = Number(req.params.id);
    
    const filteredFingerBones = fingerBones.filter(fingerBone => fingerBone.id !== idToDelete);
    
    if (filteredFingerBones.length === fingerBones.length) {
      return res.status(404).send({ error: `No finger bones found with id ${idToDelete}` });
    }
  
    fingerBones.length = 0;
    fingerBones.push(...filteredFingerBones);
  
    res.send({ data: `ID: ${idToDelete} deleted` });
  });



const PORT = 8080;
app.listen(PORT)
