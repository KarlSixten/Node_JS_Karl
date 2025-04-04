import express from 'express';
const app = express();

app.get("/room", (req, res, next) => {
    res.send({ message : "Welcome to room 1"});
    next();
})

app.get("/room", (req, res) => {
    res.send({ message : "Welcome to room 2"})
})

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));