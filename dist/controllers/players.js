"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlayer = void 0;
const player_1 = require("../models/player");
const PLAYERS = [];
const createPlayer = (req, res, next) => {
    const name = req.body.name;
    const playerNumber = req.body.playerNumber;
    const position = req.body.position;
    const newPlayer = new player_1.Player(Math.random().toString(), name, playerNumber, position);
    PLAYERS.push(newPlayer);
};
exports.createPlayer = createPlayer;
