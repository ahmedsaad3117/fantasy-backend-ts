"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlayer = exports.updatePlayer = exports.getAllPlayers = exports.createPlayer = void 0;
const player_1 = require("../models/player");
const PLAYERS = [];
const createPlayer = (req, res, next) => {
    const name = req.body.name;
    const playerNumber = req.body.playerNumber;
    const position = req.body.position;
    const newPlayer = new player_1.Player(Math.random().toString(), name, playerNumber, position);
    PLAYERS.push(newPlayer);
    res.status(201).json({ message: 'added successfully...', createdPlayer: newPlayer });
};
exports.createPlayer = createPlayer;
const getAllPlayers = (req, res, next) => {
    res.json({ players: PLAYERS });
};
exports.getAllPlayers = getAllPlayers;
const updatePlayer = (req, res, next) => {
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
    }
    else {
        updates.forEach((update) => {
            PLAYERS[playerIndex][update] = req.body[update];
        });
        res.json({ message: 'Updated!', updatedPlayer: PLAYERS[playerIndex] });
    }
};
exports.updatePlayer = updatePlayer;
const deletePlayer = (req, res, next) => {
    const playerId = req.params.id;
    const playerIndex = PLAYERS.findIndex(player => player.id === playerId);
    if (playerIndex < 0) {
        throw new Error('Could not find player!');
    }
    PLAYERS.splice(playerIndex, 1);
    res.json({ message: 'Player Deleted!' });
};
exports.deletePlayer = deletePlayer;
