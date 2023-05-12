var express = require("express");
var db = require("../db/db");
var userModel = require("../model/model");

var router = express.Router();

db(
    () => {
        router.get("/:_id", async (req, res) => {
            await userModel.deleteOne(req.params);

            // 跳转到专业
            res.redirect("/");
        });
    },
    () => {
        console.log("数据库连接失败");
    }
);

module.exports = router;
