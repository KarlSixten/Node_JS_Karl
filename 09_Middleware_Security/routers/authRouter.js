import { Router } from "express";

const router = Router();



function isAdmin(req, res, next) {
    //This simulates requesting a database if the user is admin
    //The variable below would then be set accordingly
    const userIsAdmin = true;
    if (userIsAdmin) {
        req.isAdmin = userIsAdmin;
        // This simulates getting the username from the database
        req.username = "Johnnie";
        return next();    
    }
    res.status(403).send({ message : "Sorry. You do not have permission"});
    
}

router.get("/auth/admin", isAdmin, (req, res) => {
    console.log(req.isAdmin, req.username)
    res.send({ message : "You are an admin!" });
})

router.get("/auth/user", isAdmin, (req, res) => {
    res.send({ message : "You are just a user!" });
})

export default router;