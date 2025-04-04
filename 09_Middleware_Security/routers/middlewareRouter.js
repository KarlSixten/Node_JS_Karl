import { Router } from "express";

const router = Router();

router.get("/cannotsetheadseraftertheyvebeensenterror", (req, res) => {
    if (true) {
        // Return løser denne fejl, fordi andet 'res.send' aldrig rammes.
        return res.send()
    }
    res.send()
})

function greeter(req, res, next) {
    console.log("Hello there, please enter the room.");
    next();
}

function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

// Brug af greeter funktion
router.get("/room", greeter, ipLogger, (req, res, next) => {
    //res.send({ message : "Welcome to room 1"});
    next();
})


//Inline middleware
router.get("/room", (req, res, next) => {
    console.log("You are in the lobby for room 2");
    next();
}, (req, res) => {
    res.send({ message : "welcome to room 2"})
})

// router.get("*", (req, res) => {
//     res.status(401).send("<h1>Not found</h1>")
// })

export default router;