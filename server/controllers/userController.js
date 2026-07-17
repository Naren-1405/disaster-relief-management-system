const User = require("../models/User");

const registerUser = async (req, res) => {
    const {
        name,
        email,
        phone,
        password,
        role,
        location
    } = req.body;

    const user = await User.create({
        name,
        email,
        phone,
        password,
        role,
        location
    });

    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user
    });
};
module.exports = {
    registerUser
};

