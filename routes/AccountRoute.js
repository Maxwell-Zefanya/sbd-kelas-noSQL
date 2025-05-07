const express = require("express");
const accountRepo = require("../repositories/repository.account");
const router = express.Router();

// add user
router.post("/addAccount", accountRepo.addAccount);

// login user
router.post("/loginAccount", accountRepo.loginAccount);

// get all user
router.get("/getAllAccounts", accountRepo.getAllAccounts);

module.exports = router;