import { Router } from "express";
import { addPlant, getPlantsList } from "../controllers/PlantController.js";

const router = Router();

router.get("/list",getPlantsList);
router.post("/add",addPlant);




export default router