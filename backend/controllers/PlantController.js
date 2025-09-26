import PlantModel from "../models/PlantModel.js";

export const getPlantsList = async (req, res) => {
    const plants = await PlantModel.find();
    res.json(plants);
};

export const addPlant = async (req, res) => {
    const { name, description, image } = req.body;
    const newPlant = new PlantModel({ name, description, image });
    await newPlant.save();
    res.json(newPlant);
};