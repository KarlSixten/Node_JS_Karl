import express from 'express';

const app = express();

function greetLoggedInUsers(req, res, next) {
    // Vi antager at vi laver et DB check for at se om de er logget ind
    console.log("Welcome, logged in user");
    next();
}

// app.use definerer middleware some app skal bruge
// Dvs. at routers også er middleware, ligesom JSON body parser
app.use(greetLoggedInUsers);

import middlewareRouter from "./routers/middlewareRouter.js";
app.use(middlewareRouter);

import authRouter from "./routers/authRouter.js";
app.use(authRouter);

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));