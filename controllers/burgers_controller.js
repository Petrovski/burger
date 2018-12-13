const express = require("express")
const burger = require("../models/burger.js");
const router = express.Router();


router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.get("/api/burger", function (req, res) {
    burger.selectAll(function (data) {
        res.json({
            burger: data
        });
    });
});

router.get("/api/burger/:id", function (req, res) {
    burger.selectAll(function (data) {
        res.json({
            burger: data[req.params.id - 1]
        });
    });
});

router.post("/api/burger", function (req, res) {
    console.log(req.body.name + " " + req.body.devoured)
    burger.createOne([
        "burger_name", " devoured"
    ], [
            req.body.name, req.body.devoured
        ], function (result) {
            console.log(req.body.name + req.body.devoured)
            res.json({ id: result.insertId });
        });
});

router.put("/api/burger/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;