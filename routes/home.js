const express = require("express");
const router = express.Router();


// routes
router.get("/", async (req, res, next) => {
    return res.status(200).json({
        title: "Express Testing",
        message: "The app is working properly!",
    });
});
router.post("/", async (req, res, next) => {
    return res.status(200).json({
        title: "Express Testing post",
        message: "The app is working properly!",
    });
});
router.get("/webhook", (req, res) => {
    return res.status(200).json({
        title: "Express Testing post",
        message: "The app is working properly!",
    });
});
router.post("/webhook", (req, res) => {
    return res.status(200).json({
        title: "Express Testing post",
        message: "The app is working properly!",
    });
});

module.exports = router;