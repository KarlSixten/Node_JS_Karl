import express from 'express'
const app = express()

//const express = require('express');
//const app = express();

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = 8080;

let visitorCount = 0;

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public', 'frontpage', 'frontpage.html'));
});

app.get('/dangerouspage', (req, res) => {
    res.sendFile(path.resolve('public', 'dangerouspage', 'dangerouspage.html'))
})

addStaticRoutes(path.resolve(__dirname, "public"));


function addStaticRoutes(dir, baseUrl = "") {
    // Read everything in the directory
    const files = fs.readdirSync(dir, { withFileTypes: true });

    files.forEach((file) => {
        const fullPath = path.join(dir, file.name);
        const routePath = path.join(baseUrl, file.name).replace(/\\/g, "/");

        // If the item is a directory
        if (file.isDirectory()) {
            // Recursively process directories
            addStaticRoutes(fullPath, routePath);
        } else {
            // Otherwise, it is a file. Create a route for the file
            // example: if the file is /public/frontpage/frontpage.css
            // then the route will be /frontpage/frontpage.css
            app.get(`/${routePath}`, (req, res) => {
                res.sendFile(fullPath);
            });
        }
    });
}

//Create a route /visitorcounts that returns the visitor count

app.get("/visitorcounts", (req, res) => {
    res.send({ data : ++visitorCount })
})

app.listen(PORT, () => { console.log(`Server is running on port:`, PORT) });
// EOF (End of file), anbefalet at have whitespace i bunden af fil
