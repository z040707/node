var mongoose = require("mongoose");

// 集合规则
const userSchema = new mongoose.Schema({
    item: {
        type: String,
    },
    time: {
        type: Date,
        default: new Date(),
    },
    account: {
        type: Number,
    },
    remarks: {
        type: String,
    },
    type: {
        type: String,
    },
});

const userModel = mongoose.model("accounts", userSchema);

module.exports = userModel;
