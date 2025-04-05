import { Router } from "express";

const router = Router();

router.get("/session/fillbananas", (req, res) => {
    // Fyld en banan op, hvis det er første gang bananasCount instantieres, sæt til 1
    req.session.bananasCount = (req.session.bananasCount + 1) || 1;
    console.log(req.session);
    res.send({ message : `You have ${req.session.bananasCount} banana(s)`});
});

router.get("/session/eatbananas", (req, res) => {
    const bananasCount = req.session.bananasCount;

    if (!bananasCount) {
        res.send({ message : "You have no bananas left :(" });
    } else {
        req.session.bananasCount -= 1;
        res.send({ message : `mmmmh banana🍌🦧, you have ${req.session.bananasCount} left`});
    }
})

export default router;