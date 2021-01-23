"use strict";
// import dotenv from 'dotenv';
// dotenv.config();
Object.defineProperty(exports, "__esModule", { value: true });
const SERVER_HOSTNAME = process.env.SERVER_PORT || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 13337;
const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
const config = {
    server: SERVER
};
exports.default = config;
//# sourceMappingURL=config.js.map