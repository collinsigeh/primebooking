import express from "express";
import {
    deleteUserController, 
    getUserController, 
    getUsersController, 
    updateUserController 
} from "../controllers/user.js";

const router = express.Router();

//UPDATE
router.put("/:id", updateUserController);

//DELETE
router.delete("/:id", deleteUserController);

//GET
router.get("/:id", getUserController);

//GET ALL
router.get("/", getUsersController);

export default router;