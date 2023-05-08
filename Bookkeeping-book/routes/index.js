const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    axios.get("http://localhost:3000/create").then((response) => {
        console.log(response.data);
        res.render("index", { panel: response.data });
    });
});

module.exports = router;
