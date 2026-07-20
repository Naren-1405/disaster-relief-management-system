const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    try {
        
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Not Authorized , No token provided"
            });
        }

        const actualtoken = token.split(" ")[1];

        const decoded = jwt.verify(actualtoken, process.env.JWT_SECRET);

        req.user = decoded;

        next();

    }
    catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }
};

module.exports = { protect };