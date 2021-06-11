"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var venom = require('venom-bot');
var app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.default);
// venom.create().then((client) => start(client));
// function start(client) {
// }
app.listen(3333, function () {
    console.log('⏩ Server started on 3333!');
});
//# sourceMappingURL=index.js.map