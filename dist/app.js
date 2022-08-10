"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const players_1 = __importDefault(require("./routes/players"));
require("./db/mongoose");
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/players", players_1.default);
app.get('/', (req, res) => {
    res.send('test working');
});
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(port, () => {
    console.log("Server is up on " + port);
});
