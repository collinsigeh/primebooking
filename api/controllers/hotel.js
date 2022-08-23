import Hotel from "../models/Hotel.js";

export const createHotelController = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch(err) {
        next(err);
    }
}

export const updateHotelController = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedHotel);
    }catch(err) {
        next(err);
    }
}

export const deleteHotelController = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted!");
    }catch(err) {
        next(err);
    }
}

export const getHotelController = async (req, res, next) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err) {
        next(err);
    }
}

export const getHotelsController = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch(err) {
        next(err);
    }
}