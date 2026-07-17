// const mongoose = require("mongoose");

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGODB_URI);
//         console.log("DB Connected successfully");
//     }
//     catch (er) {
//         console.log("DB Not Connected Successfully")
//         console.error(er);
//     }
// };

// module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log("✅ DB Connected Successfully");
        // console.log("📌 Host:", conn.connection.host);
        // console.log("📌 Database:", conn.connection.name);

    } catch (er) {
        console.error("❌ DB Not Connected");
        console.error(er);
    }
};

module.exports = connectDB;
