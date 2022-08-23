import User from "../models/User.js";
import bcryptjs from "bcryptjs";

export const registerController = async (req, res, next) => {
    try {
        const salt = bcryptjs.genSaltSync(10);
        const hashedPassword = bcryptjs.hashSync(req.body.password);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(200).send("User has been created.");
    } catch (err) {
        next(err);
    }
}