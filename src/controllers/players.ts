import { RequestHandler } from "express";

import { Player } from "../models/player";

const PLAYERS: Player[] = [];

export const createPlayer: RequestHandler = (req, res, next) => {
  const name = (req.body as { name: string }).name;
  const playerNumber = (req.body as { playerNumber: string }).playerNumber;
  const position = (req.body as { position: string }).position;
  const newPlayer = new Player(
    Math.random().toString(),
    name,
    playerNumber,
    position
  );

  PLAYERS.push(newPlayer)
};
