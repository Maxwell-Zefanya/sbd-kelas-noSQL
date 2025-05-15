const express = require("express");
const reviewRepo = require("../repositories/repository.review");
const router = express.Router();

router.post("/addReview", reviewRepo.addReview);
router.get("/getAllReview", reviewRepo.getAllReview);
router.get("/getByGame", reviewRepo.getByGame);
router.get("/getByUser", reviewRepo.getByUser);
router.delete("/deleteById", reviewRepo.deleteById);
router.delete("/deleteSpecific", reviewRepo.deleteSpecific);

module.exports = router;