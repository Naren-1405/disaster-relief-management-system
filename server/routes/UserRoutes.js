const express = require("express");

const router = express.Router();

const { registerUser, loginUser } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleWare");
const { authorize } = require("../middleware/roleMiddleWare");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", protect, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to your profile",
        user: req.user
    });
});

router.get("/admin", protect, authorize("Admin"), (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome Admin!"
    });
});

module.exports = router;