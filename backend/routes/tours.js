import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTours,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "../controllers/tourController.js";
 
const router = express.Router();

import {verifyAdmin} from "../utils/verifyToken.js";

//Create new tour
router.post("/", verifyAdmin, createTour);

//UPdate tour
router.put("/:id", verifyAdmin, updateTour);
//delete tour
router.delete("/:id", verifyAdmin,deleteTour);
//get single tour
router.get("/:id", getSingleTour);
//get all tour
router.get("/", getAllTour);
//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
//get featured tour
router.get("/search/getFeaturedTours", getFeaturedTours);
//get tour count
router.get("/search/getTourCount", getTourCount);

export default router;
