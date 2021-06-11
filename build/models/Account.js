"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Client_1 = __importDefault(require("./Client"));
var Group_1 = __importDefault(require("./Group"));
var Account = /** @class */ (function () {
    function Account() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Account.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Account.prototype, "client_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Client_1.default; }),
        typeorm_1.JoinColumn({ name: 'client_id' }),
        __metadata("design:type", Client_1.default)
    ], Account.prototype, "client", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return Group_1.default; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Account.prototype, "groups", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Account.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Account.prototype, "token", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Account.prototype, "whatsCode", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Account.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Account.prototype, "updated_at", void 0);
    Account = __decorate([
        typeorm_1.Entity('accounts')
    ], Account);
    return Account;
}());
exports.default = Account;
//# sourceMappingURL=Account.js.map