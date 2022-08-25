import User from "../models/User.js";

export const updateUserController = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedUser);
    }catch(err) {
        next(err);
    }
}

export const deleteUserController = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("User has been deleted!");
    }catch(err) {
        next(err);
    }
}

export const getUserController = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err) {
        next(err);
    }
}

export const getUsersController = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }catch(err) {
        next(err);
    }
}