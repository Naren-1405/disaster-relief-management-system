const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            requires: true,
            unique: true
        },
        phone: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ["Victim", "Volunteer", "Admin", "Relief Center"],
            default: "Victim"
        },
        location: {
            type: String,
            required: true
        }
    },
    {
        timeStamps: true
    });

module.exports = mongoose.model("User", UserSchema);