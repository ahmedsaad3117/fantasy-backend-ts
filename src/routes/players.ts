import { Router } from "express";

import { createPlayer, getAllPlayers } from "../controllers/players";

const router = Router();

router.post("/", createPlayer);

router.get("/", getAllPlayers);

router.patch("/:id");

router.delete("/:id");

export default router;
