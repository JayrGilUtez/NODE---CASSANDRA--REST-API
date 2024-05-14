import express from "express";

import { BASE_URL } from "./config.js";
import scenesRoutes from './routes/scenes.routes.js'
import storiesRoutes from './routes/stories.routes.js'
const app = express();

app.use(express.json());
app.use(BASE_URL, storiesRoutes);
app.use(BASE_URL, scenesRoutes);

export default app;