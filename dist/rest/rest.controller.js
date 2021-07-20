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
exports.RestController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const rest_service_1 = require("./rest.service");
let RestController = class RestController {
    constructor(configService, restService) {
        this.configService = configService;
        this.restService = restService;
    }
    async getTokensValue() {
        const apiUrl = this.configService.get('API_PATH');
        const apiKey = this.configService.get('API_KEY');
        const options = {
            apiUrl,
            apiKey,
        };
        const tokens = await this.restService.getTokens(options);
        return tokens;
    }
};
__decorate([
    common_1.Get('/tokens'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestController.prototype, "getTokensValue", null);
RestController = __decorate([
    common_1.Controller('rest'),
    __metadata("design:paramtypes", [config_1.ConfigService,
        rest_service_1.RestService])
], RestController);
exports.RestController = RestController;
//# sourceMappingURL=rest.controller.js.map