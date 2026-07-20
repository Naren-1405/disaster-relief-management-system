const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                sucess: false,
                message: "Invalid email! please enter valid email"
            });
        }
        const ismatch = await bcrypt.compare(password, user.password);
        if (!ismatch) {
            return res.status(401).json({
                success: false,
                message:"Invalid password! please enter valid password"
            });
        }
        const token = jwt.sign({
            id: user._id,
            role: user.role
        },
            process.env.JWT_SECRET, {
            expiresIn: "7d"
        }
        );
        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
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
    registerUser,
    loginUser
};

