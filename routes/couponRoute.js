const express = require("express");
const {
  createCoupon,
  getAllCoupons,
  updateCoupon,
  deleteCoupon,
} = require("../controller/couponController");
// const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", createCoupon);
router.get("/", getAllCoupons);
router.get("/:id", getAllCoupons);
router.put("/:id", updateCoupon);
router.delete("/:id", deleteCoupon);

module.exports = router;