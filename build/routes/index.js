"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var client_routes_1 = __importDefault(require("./client.routes"));
var account_routes_1 = __importDefault(require("./account.routes"));
var group_routes_1 = __importDefault(require("./group.routes"));
var message_routes_1 = __importDefault(require("./message.routes"));
var routes = express_1.Router();
routes.use('/client', client_routes_1.default);
routes.use('/account', account_routes_1.default);
routes.use('/group', group_routes_1.default);
routes.use('/message', message_routes_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map