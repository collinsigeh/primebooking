import express from "express";
import {
    createHotelController, 
    deleteHotelController, 
    getHotelController, 
    getHotelsController, 
    updateHotelController 
} from "../controllers/hotel.js";

const router = express.Router();

//CREATE
router.post("/", createHotelController);

//UPDATE
router.put("/:id", updateHotelController);

//DELETE
router.delete("/:id", deleteHotelController);

//GET
router.get("/:id", getHotelController);

//GET ALL
router.get("/", getHotelsController);

export default router;