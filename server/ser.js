require("dotenv").config();
const express = require("express");
const ConnectDB = require("./config/db");

const userRoutes = require("./routes/UserRoutes");

const app = express();

ConnectDB();

app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("Disaster Relief API is running");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});