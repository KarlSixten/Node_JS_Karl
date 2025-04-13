import 'dotenv/config';
import express from 'express';

const app = express();

app.use(express.json());

import cors from 'cors';
app.use(cors(
    {
        origin: true,
        credentials: true
    }
));

// MANUEL MÅDE AT SÆTTE CORS POLICY
// app.use((req, res, next) => {
// 	res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
// 	res.header("Access-Control-Allow-Credentials", "true");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });


import session from 'express-session';

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // False fordi jeg kører på HTTP og ikke HTTPS
  }))

import pillsRouter from './router/pillsRouter.js';
app.use(pillsRouter);

import employeesRouter from './router/employeesRouter.js';
app.use(employeesRouter);

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port:", PORT));