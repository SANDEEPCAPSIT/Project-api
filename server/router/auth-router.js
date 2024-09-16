const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controllers")
// const home = require("../controllers/auth-controllers");
// const register = require("../controllers/auth-controllers");

    // router.get("/", (req, res) => {
    //     res
    //     .status(200)
    //     .send("welcome ROUTER sandeep");
    // });

    router.route("/").get(authcontrollers.home);
    router.route("/register").post(authcontrollers.register);

// router.route("/").get((req, res) =>{
//     res
//     .status(200)
//     .send("welcome Router Sandeep.route")
// })

// router.route("/register").get((req, res) => {
//     res
//     .status(200)
//     .send("welcome Route Sandeep.router");
// });

module.exports = router;