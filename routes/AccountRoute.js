const express = require("express");
const accountRepo = require("../repositories/repository.account");
const router = express.Router();

// add user
router.post("/addAccount", accountRepo.addAccount);


module.exports = router;