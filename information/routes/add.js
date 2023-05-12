var express = require("express");
var db = require("../db/db");
var userModel = require("../model/model");

var router = express.Router();

db(
    () => {
        router.get("/", (req, res) => {
            res.render("add");
        });
        router.post("/", async (req, res) => {
            try {
                const data = await userModel.create(req.body);
                // 跳转到主页
                res.redirect("/");
            } catch (error) {
                throw error;
            }
        });
    },
    () => {
        console.log("数据库连接失败");
    }
);

module.exports = router;
