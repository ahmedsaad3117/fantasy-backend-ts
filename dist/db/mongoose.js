"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionMong = void 0;
const mongoose_1 = require("mongoose");
exports.connectionMong = (0, mongoose_1.connect)('mongodb://localhost:27017/test');
