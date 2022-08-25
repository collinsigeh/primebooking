import express from "express";
import {
    deleteUserController, 
    getUserController, 
    getUsersController, 
    updateUserController 
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hello user, You are logged in!");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user, you are authenticated and you can delete your account!");
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("hello admin, you are authenticated and you can delete all accounts!");
})

//UPDATE
router.put("/:id", verifyUser, updateUserController);

//DELETE
router.delete("/:id", verifyUser, deleteUserController);

//GET
router.get("/:id", verifyUser, getUserController);

//GET ALL
router.get("/", verifyAdmin, getUsersController);

export default router;