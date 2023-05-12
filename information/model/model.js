var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [2, "超过最小长度"],
        maxlength: [4, "超过最大长度"],
    },
    age: {
        type: Number,
        min: [18, "超过最小年限"],
        max: [100, "超过最大年限"],
    },
    hobbies: {
        type: [String],
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        minlength: [6, "超过最小长度"],
        maxlength: [16, "超过最大长度"],
    },
});

const userModel = mongoose.model("message", userSchema);

module.exports = userModel;
