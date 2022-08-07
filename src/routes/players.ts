import { Router } from "express";

import { createPlayer } from "../controllers/players";

const router = Router();

router.post("/",createPlayer);

router.get("/");

router.patch("/:id");

router.delete("/:id");


export default router