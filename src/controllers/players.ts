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

    const allowUpdate = ["name", "number", "position"];

    const isVaildUpdate = updates.every((update) => allowUpdate.includes(update));

    if (!isVaildUpdate) {
        res.status(500).json({ error: "This not a vaild update" });
    }

    const playerIndex = PLAYERS.findIndex(player => player.id === playerId);

    if (playerIndex === -1) {
        res.status(500).json({ error: "Player Id not exist" });
    } else {
        updates.forEach((update: string) => {
            (PLAYERS[playerIndex] as any)[update] = req.body[update]
        })

        res.json({ message: 'Updated!', updatedPlayer: PLAYERS[playerIndex] })
    }
}


export const deletePlayer: RequestHandler = (req, res, next) => { 
    const playerId = req.params.id;
    const playerIndex = PLAYERS.findIndex(player => player.id === playerId); 

    if (playerIndex < 0) {
        throw new Error('Could not find player!')
    }

    PLAYERS.splice(playerIndex, 1)

    res.json({ message: 'Player Deleted!' })
}