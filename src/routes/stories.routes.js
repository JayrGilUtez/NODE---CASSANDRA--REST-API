import { Router } from "express";
import { getAllStories } from "../controllers/stories.controller.js";
const router = Router();

router.get('/stories',getAllStories);

export default router;