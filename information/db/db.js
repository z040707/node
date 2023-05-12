function db(success, err) {
    var mongoose = require("mongoose");

    const { PROTOCOL, DBHOST, DBPORT, DBNAME } = require("../config/config");

    // mongoose.connect("mongodb://127.0.0.1:27017/message");
    mongoose.connect(`${PROTOCOL}://${DBHOST}:${DBPORT}/${DBNAME}`);

    // 连接成功
    mongoose.connection.once("open", () => {
        console.log("数据库连接成功");
        success();
    });

    // 连接错误
    mongoose.connection.once("error", () => {
        console.log("数据库连接失败");
        err();
    });
    // 关闭连接
    mongoose.connection.once("close", () => {
        console.log("数据库连接关闭");
    });
}

module.exports = db;
