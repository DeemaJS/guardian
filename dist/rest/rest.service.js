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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestService = void 0;
const common_1 = require("@nestjs/common");
const fetch = require("node-fetch");
let RestService = class RestService {
    constructor() {
        this.BITCOIN = '5517577077';
    }
    async getTokens(options) {
        console.log('RUN TOKENS', options);
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': `${options.apiKey}`,
            },
        };
        const tokens = await fetch(`${options.apiUrl}${this.BITCOIN}`, config);
        const res = await tokens.json();
        console.log('>>>>>>>>>>>>>', res);
        return res;
    }
};
RestService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], RestService);
exports.RestService = RestService;
//# sourceMappingURL=rest.service.js.map