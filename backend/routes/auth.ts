import express from "express";
import passport from "passport";

const router = express.Router();

router.get("/login/success", (req, res) => {
    res.json(req.user);
});

router.get("/login/failed", (req, res) => {
    res.sendStatus(404);
});

router.post(
    "/login",
    passport.authenticate("local", {
        successRedirect: "/auth/login/success",
        failureRedirect: "/auth/login/failed",
    })
);

router.get("/logout", (req, res) => {
    req.logout((error) => {
        if (error) {
            return res.sendStatus(500);
        }
        res.json({ message: "Logout success" });
    });
});

export default router;
