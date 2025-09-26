import mongoose from "mongoose";
import "dotenv/config";

const PlantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

export default  mongoose.model("Plant", PlantSchema);