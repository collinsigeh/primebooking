import express from "express";
import {
    createHotelController, 
    deleteHotelController, 
    getHotelController, 
    getHotelsController, 
    updateHotelController 
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotelController);

//UPDATE
router.put("/:id", verifyAdmin, updateHotelController);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotelController);

//GET
router.get("/:id", getHotelController);

//GET ALL
router.get("/", getHotelsController);

export default router;