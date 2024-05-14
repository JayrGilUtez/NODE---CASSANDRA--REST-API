import { Router } from "express";
import { getAllScenes } from "../controllers/scenes.controller.js";

const router = Router();

router.get('/scenes', getAllScenes);

export default router;