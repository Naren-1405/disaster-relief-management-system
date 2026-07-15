const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected successfully");
    }
    catch (er) {
        console.log("DB not connected successfully" + er);
    }
};

module.exports = connectDB;
