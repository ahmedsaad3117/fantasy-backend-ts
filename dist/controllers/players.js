"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePlayer = exports.getAllPlayers = exports.createPlayer = void 0;
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
    const isVaildUpdate = updates.every((update) => update in player_1.Player);
    if (!isVaildUpdate) {
        res.status(500).json({ error: "This not a vaild update" });
    }
    //const updatedName = (req.body as { name: string }).name
    const playerIndex = PLAYERS.findIndex(player => player.id === playerId);
    updates.forEach((update) => {
        PLAYERS[playerIndex] = req.body[update];
    });
};
exports.updatePlayer = updatePlayer;
