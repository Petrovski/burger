const express = require("express")
const burger = require("../models/burger.js");
const router = express.Router();


router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    // express callback response by calling burger.selectAllBurger
    burger.selectAll(function (burgerData) {
        // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
        res.render("index", { burger_data: burgerData });
    });
});

router.post("/burgers/create", function (req, res) {
    // takes the request object using it as input for burger.addBurger
    burger.createOne(req.body.burger_name, function (result) {
        // wrapper for orm.js that using MySQL insert callback will return a log to console,
        // render back to index with handle
        console.log(result);
        res.redirect("/");
    });
});

router.put("/burgers/:id", function (req, res) {
    burger.updateOne(req.params.id, function (result) {
        // wrapper for orm.js that using MySQL update callback will return a log to console,
        // render back to index with handle
        console.log(result);
        // Send back response and let page reload from .then in Ajax
        res.sendStatus(200);
    });
});

module.exports = router;