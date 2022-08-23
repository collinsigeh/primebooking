import express from "express";
import {
    createHotelController, 
    deleteHotelController, 
    updateHotelController 
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//CREATE
router.post("/", createHotelController);

//UPDATE
router.put("/:id", updateHotelController);

//DELETE
router.delete("/:id", deleteHotelController);

//GET
router.get("/:id", async (req, res) => {
    
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }catch(err) {
        res.status(500).json(err);
    }
});

//GET ALL
router.get("/", async (req, res) => {
    
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err) {
        next(err);
    }
});

export default router;