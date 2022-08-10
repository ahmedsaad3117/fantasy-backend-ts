import { Router } from "express";

import { createPlayer, getAllPlayers ,updatePlayer } from "../controllers/players";

const router = Router();

router.post("/", createPlayer);

router.get("/", getAllPlayers);

router.patch("/:id",updatePlayer);

router.delete("/:id");

export default router;
