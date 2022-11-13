const express = require("express")
const router = express.Router()
const textDisplayController = require("../controllers/textDisplayController")

router.get("/display", textDisplayController.displayText)

module.exports = router