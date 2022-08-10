import { RequestHandler } from "express";

import { Player } from "../models/player";

const PLAYERS: Player[] = [];

export const createPlayer: RequestHandler = (req, res, next) => {
    const name = (req.body as { name: string }).name;
    const playerNumber = (req.body as { playerNumber: string }).playerNumber;
    const position = (req.body as { position: string }).position;
    const newPlayer = new Player(Math.random().toString(), name, playerNumber, position);

    PLAYERS.push(newPlayer);
    res.status(201).json({ message: 'added successfully...', createdPlayer: newPlayer });
};

export const getAllPlayers: RequestHandler = (req, res, next) => {
    res.json({ players: PLAYERS });
}

export const updatePlayer: RequestHandler<{ id: string }> = (req, res, next) => {
    const playerId = req.params.id;
    const updates = Object.keys(req.body);
 
   // const isVaildUpdate = updates.every((update) =>  );
    console.log(Player)
 
    // if (!isVaildUpdate) {
    //     res.status(500).json({ error: "This not a vaild update" });
    // }

    //const updatedName = (req.body as { name: string }).name;

    const playerIndex = PLAYERS.findIndex(player => player.id === playerId);

    updates.forEach((update) => {
        PLAYERS[playerIndex] = req.body[update];
    })
}