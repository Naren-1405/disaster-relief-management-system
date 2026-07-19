const User = require("../models/User");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            password,
            role,
            location
        } = req.body;
        if (!name || !email || !phone || !password || !role || !location) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const existsuser = await User.findOne({ email });

        if (existsuser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }
    
        const hashpass = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            phone,
            password: hashpass,
            role,
            location
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
module.exports = {
    registerUser
};

