var express = require("express");
var db = require("../db/db");
var userModel = require("../model/model");

var router = express.Router();

db(
    () => {
        router.get("/", async (req, res) => {
            try {
                const data = await userModel.find();
                res.render("list", { data: data });
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
