const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("create");
});

router.post("/", function (req, res, next) {
    let iscreate = false;
    axios.post("http://localhost:3000/create", req.body).then(() => {
        iscreate = true;
    });
    if (iscreate) {
        res.redirect("/create");
    } else {
        res.render("ok", { yes: "添加成功", text: "自动跳转到主页", href: "/" });
    }
});

module.exports = router;
