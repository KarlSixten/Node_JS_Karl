import express from 'express';

const app = express();

import path from 'path';

import { getMatches } from './util/matches.js'

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve('public/frontpage/frontpage.html'));
});

app.get("/matches", (req, res) => {
    res.sendFile(path.resolve('public/matches/matches.html'));
})

app.get("/api/matches", async (req, res) => {
    const matches = await getMatches();
    res.send({ data : matches });
})

console.log(process.env.PORT);

const PORT = Number(process.env.PORT) || 8080;
const server = app.listen(PORT, () => console.log("Server is running on port", server.address().port));