const axios = require("axios");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/:id", (req, res, next) => {
    let isdel = false;
    axios.delete("http://localhost:3000/create/" + req.params.id).then(() => {
        isdel = true;
    });
    if (isdel) {
        res.render("no",{ yes: "删除失败", text: "自动返回主页", href: "/" });
    } else {
        res.render("ok", { yes: "删除成功", text: "自动返回主页", href: "/" });
    }
});

module.exports = router;
