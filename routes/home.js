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

  router.post("/webhook", (req, res) => {
    // let body = req.body;

    console.log(`\u{1F7EA} Received webhook:`);
    // console.dir(body, { depth: null });


    // if (body.object === "page") {
    //     // Returns a '200 OK' response to all requests
    //     res.status(200).send("EVENT_RECEIVED");


    // } else {
    //     // Return a '404 Not Found' if event is not from a page subscription
    //     res.sendStatus(404);
    //   }
    });

module.exports = router;