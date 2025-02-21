//Importer express
const express = require('express');

//Instantier express
const app = express();

const PORT = 8080;

console.log(new Date()); // UTC
console.log(Date());     // Local date time
console.log(Date.now()); // Unix time / Seconds nes since 1970 Jan 1st

//Create a route called /months which returns the current month as a response

app.get("/months", (req, res) => {
    const currentMonth = new Date().date.toLocaleString('da-DK', { month: 'long' });
    res.send({ data : currentMonth })
})

//Implement /days that returns the weekday as a word

app.get("/days", (req, res) => {

    console.log(new Date().getDay)

    const currentDay = new Date().toLocaleString('da-DK', { weekday: 'long' })
    res.send({ data : currentDay })
})




app.listen(PORT, () => { console.log(`Server is running on port:`, PORT) })
