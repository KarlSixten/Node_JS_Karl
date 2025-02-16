//Importer express
const express = require("express")

//Instantier express
const app = express();

app.get("/", (req, res) => {
    res.send({ data: "This is the root route"})
});

app.get("/welcomepage", (req, res) => { 
    res.sendFile(__dirname + '/index.html')
})

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

// Create a route for /search that returns an the query
app.get("/search", (req, res) => {
    console.log(req.query)
    res.send({ data : `You searched for: ${req.query.q}`})
})

app.post("/favoritepoliticians", (req, res) => {

    console.log(req.body)

    res.send({ data : req.body })
})

// status codes
// 2XX - Everything went well
// 3XX - Client error
// 5XX - Server error

// app.get("/favouriteThings/:favouriteFlower/:favouriteAnimal", (req, res => {
//     res.send({ data: `Your favourite flower is ${req.params.favouriteFlower} and your favouriteanimal is ${req.params.favouriteAnimal}`
//      })
// }))

app.listen(8080);