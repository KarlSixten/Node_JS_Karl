const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send({ data: "This is the root route"})
});

app.get("/blablabla", (req, res) => {
    res.send({ data: "This is blablabla"})
});

app.get("/420", (req, res) => {
    res.send({ data: "This is 420 blaze it"})
})

app.get("/endpoint/:variable", (req, res) => {
    let variable = req.params.variable;
    res.send({ data: variable})
})

app.get("/favouriteThings/:favouriteFlower/:favouriteAnimal", (req, res => {
    res.send({ data: `Your favourite flower is ${req.params.favouriteFlower} and your favouriteanimal is ${req.params.favouriteAnimal}`
     })
}))

app.listen(8080);