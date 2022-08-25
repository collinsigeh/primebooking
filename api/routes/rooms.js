import express from "express";
import { 
    createRoomController, 
    deleteRoomController, 
    getRoomController, 
    getRoomsController, 
    updateRoomController 
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoomController);

//UPDATE
router.put("/:id", verifyAdmin, updateRoomController);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoomController);

//GET
router.get("/:id", getRoomController);

//GET ALL
router.get("/", getRoomsController);

export default router;