import { Router } from "express";

const router = Router();

router.post("/api/contact", (req, res) => {
    res.redirect("/")
})

export default router;