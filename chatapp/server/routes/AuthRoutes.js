import { Router } from "express";
import { signup } from "../controllers/Authcontroller.js";

const authRoutes = Router();
authRoutes.post("/signup", signup);
export default authRoutes;
