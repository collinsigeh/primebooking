import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import { createError } from "../utils/error.js";

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

export const loginController = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if(!user) return next(createError(404, "User not found!"));

        const isCorrectPassword = bcryptjs.compareSync(req.body.password, user.password);
        if(!isCorrectPassword) return next(createError(400, "Wrong password or username"));

        const {password, isAdmin, ...otherDetails} = user._doc;

        res.status(200).json({...otherDetails});
    } catch (err) {
        next(err);
    }
}