import 'dotenv/config';
import express from 'express';

const app = express();

import helmet from 'helmet';
app.use(helmet());

import session from 'express-session';

// Environment variabler kan også sættes med command-line når program startes.
// Dotenv gør det bare nemmere

app.use(session({
    // This should never be pushed
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Skal være true hvis man kører HTTPS, false hvis HTTP
  }));

import { rateLimit } from 'express-rate-limit';

const generalLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 300, // Limit each IP to 300 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

app.use(generalLimiter);

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 5,
    standardHeaders: 'draft-8',
    legacyHeaders: false
});

app.use("/auth", authLimiter)

function greetLoggedInUsers(req, res, next) {
    // Vi antager at vi laver et DB check for at se om de er logget ind
    console.log("Welcome, logged in user");
    next();
}

// app.use definerer middleware some app skal bruge
// Dvs. at routers også er middleware, ligesom f.eks. JSON body parser
app.use(greetLoggedInUsers);


// Routers skal placeres under andet middleware, ellers bliver middleware ikke tilføjet ordentligt.
import middlewareRouter from "./routers/middlewareRouter.js";
app.use(middlewareRouter);

import authRouter from "./routers/authRouter.js";
app.use(authRouter);

import sessionRouter from "./routers/sessionRouter.js";
app.use(sessionRouter);

app.get("/{*splat}", (req, res) => {
    res.status(404).send("<h1>Not Found</h1>")
})

app.all("/{*splat}", (req, res) => {
    res.status(404).send({ message : `${req.path} for ${req.method} not found.`})
})

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));