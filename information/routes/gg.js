var express = require("express");
var db = require("../db/db");
var userModel = require("../model/model");

var router = express.Router();
db(
    () => {
        router.get("/:id", async (req, res) => {
        const data = await userModel.findById(req.params.id);

        // 将数据渲染页面上
        res.render("gg", { data: data });
    });
    router.post("/:_id", async (req, res) => {
        await userModel.updateOne(req.params, req.body);

        // 跳转到主页
        res.redirect("/");
    });
    },
    () => {
        console.log("数据库连接失败");
    }
);

module.exports = router;
