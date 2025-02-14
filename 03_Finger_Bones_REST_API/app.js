//Importer express
const express = require("express");
//Instantier express
const app = express();

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

// status codes
// 2XX - Everything went well
// 3XX - Client error
// 5XX - Server error

const PORT = 8080;
app.listen(PORT)
