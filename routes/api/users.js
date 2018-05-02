const express = require("express");
const router = express.Router();
//@route    GET api/users/test
//@desc     Tests users route
//@acces    Public
router.get("/test", (req, res) => res.json({ msg: "Users Route Works" }));

module.exports = router;
