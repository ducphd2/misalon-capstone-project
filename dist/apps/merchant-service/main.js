/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api-gateway/src/core/components/index.ts":
/*!*******************************************************!*\
  !*** ./apps/api-gateway/src/core/components/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./message.component */ "./apps/api-gateway/src/core/components/message.component.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/core/components/message.component.ts":
/*!*******************************************************************!*\
  !*** ./apps/api-gateway/src/core/components/message.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageComponent = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const nestjs_i18n_1 = __webpack_require__(/*! nestjs-i18n */ "nestjs-i18n");
let MessageComponent = class MessageComponent {
    constructor(i18n) {
        this.i18n = i18n;
    }
    lang(key, options = {}) {
        return this.i18n.translate(key, options);
    }
};
MessageComponent = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof nestjs_i18n_1.I18nService !== "undefined" && nestjs_i18n_1.I18nService) === "function" ? _a : Object])
], MessageComponent);
exports.MessageComponent = MessageComponent;


/***/ }),

/***/ "./apps/api-gateway/src/core/decorators/index.ts":
/*!*******************************************************!*\
  !*** ./apps/api-gateway/src/core/decorators/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user */ "./apps/api-gateway/src/core/decorators/user/index.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/core/decorators/user/index.ts":
/*!************************************************************!*\
  !*** ./apps/api-gateway/src/core/decorators/user/index.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./match.decorator */ "./apps/api-gateway/src/core/decorators/user/match.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./user.decorator */ "./apps/api-gateway/src/core/decorators/user/user.decorator.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/core/decorators/user/match.decorator.ts":
/*!**********************************************************************!*\
  !*** ./apps/api-gateway/src/core/decorators/user/match.decorator.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Match = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
function Match(property, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'Match',
            target: object.constructor,
            propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = args.object[relatedPropertyName];
                    return value === relatedValue;
                },
                defaultMessage(args) {
                    const [relatedPropertyName] = args.constraints;
                    return `${propertyName} must match ${relatedPropertyName} exactly`;
                },
            },
        });
    };
}
exports.Match = Match;


/***/ }),

/***/ "./apps/api-gateway/src/core/decorators/user/user.decorator.ts":
/*!*********************************************************************!*\
  !*** ./apps/api-gateway/src/core/decorators/user/user.decorator.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.User = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});


/***/ }),

/***/ "./apps/api-gateway/src/core/filters/http-exception.filter.ts":
/*!********************************************************************!*\
  !*** ./apps/api-gateway/src/core/filters/http-exception.filter.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception instanceof common_1.HttpException ? exception.getStatus() : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const exceptionResponse = exception.getResponse();
        let errors = null;
        if (exceptionResponse.message && typeof exceptionResponse.message === 'string') {
            errors = exceptionResponse.message;
        }
        else if (exceptionResponse.message &&
            Array.isArray(exceptionResponse.message) &&
            exceptionResponse.message.length > 0) {
            errors = exceptionResponse.message.map((error) => error.charAt(0).toUpperCase() + error.slice(1));
        }
        response.status(status).json({
            success: false,
            message: typeof exception.message === 'string'
                ? exception.message.charAt(0).toUpperCase() + exception.message.slice(1)
                : exception.message,
            errors: errors !== null && errors !== void 0 ? errors : exceptionResponse,
        });
    }
};
HttpExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;


/***/ }),

/***/ "./apps/api-gateway/src/core/filters/index.ts":
/*!****************************************************!*\
  !*** ./apps/api-gateway/src/core/filters/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./http-exception.filter */ "./apps/api-gateway/src/core/filters/http-exception.filter.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/core/guards/auth.guard.ts":
/*!********************************************************!*\
  !*** ./apps/api-gateway/src/core/guards/auth.guard.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),

/***/ "./apps/api-gateway/src/core/guards/index.ts":
/*!***************************************************!*\
  !*** ./apps/api-gateway/src/core/guards/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./auth.guard */ "./apps/api-gateway/src/core/guards/auth.guard.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/core/index.ts":
/*!********************************************!*\
  !*** ./apps/api-gateway/src/core/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./decorators */ "./apps/api-gateway/src/core/decorators/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./strategies */ "./apps/api-gateway/src/core/strategies/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./guards */ "./apps/api-gateway/src/core/guards/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./filters */ "./apps/api-gateway/src/core/filters/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./components */ "./apps/api-gateway/src/core/components/index.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/core/strategies/index.ts":
/*!*******************************************************!*\
  !*** ./apps/api-gateway/src/core/strategies/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./jwt.strategy */ "./apps/api-gateway/src/core/strategies/jwt.strategy.ts"), exports);
__exportStar(__webpack_require__(/*! ./jwt-refresh.strategy */ "./apps/api-gateway/src/core/strategies/jwt-refresh.strategy.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/core/strategies/jwt-refresh.strategy.ts":
/*!**********************************************************************!*\
  !*** ./apps/api-gateway/src/core/strategies/jwt-refresh.strategy.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtRefreshStrategy = void 0;
const grpc_types_1 = __webpack_require__(/*! @libs/grpc-types */ "./libs/grpc-types/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let JwtRefreshStrategy = class JwtRefreshStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-refresh') {
    constructor(client, configService) {
        super({
            secretOrKey: configService.get('JWT_REFRESH_TOKEN_SECRET'),
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
        this.client = client;
        this.configService = configService;
    }
    onModuleInit() {
        this.userService = this.client.getService(grpc_types_1.UserProto.USER_SERVICE_NAME);
    }
    async validate(payload) {
        const { user } = await (0, rxjs_1.lastValueFrom)(this.userService.findById({ id: Number(payload.sub) }));
        return user;
    }
};
JwtRefreshStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(grpc_types_1.UserProto.DUCPH_USER_PACKAGE_NAME)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], JwtRefreshStrategy);
exports.JwtRefreshStrategy = JwtRefreshStrategy;


/***/ }),

/***/ "./apps/api-gateway/src/core/strategies/jwt.strategy.ts":
/*!**************************************************************!*\
  !*** ./apps/api-gateway/src/core/strategies/jwt.strategy.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const grpc_types_1 = __webpack_require__(/*! @libs/grpc-types */ "./libs/grpc-types/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt') {
    constructor(client, configService) {
        super({
            secretOrKey: configService.get('JWT_PRIVATE_KEY'),
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
        this.client = client;
        this.configService = configService;
    }
    onModuleInit() {
        this.userService = this.client.getService(grpc_types_1.UserProto.USER_SERVICE_NAME);
    }
    async validate(payload) {
        const { user } = await (0, rxjs_1.lastValueFrom)(this.userService.findById({ id: Number(payload.sub) }));
        return user;
    }
};
JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(grpc_types_1.UserProto.DUCPH_USER_PACKAGE_NAME)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./apps/api-gateway/src/dtos/auth/index.ts":
/*!*************************************************!*\
  !*** ./apps/api-gateway/src/dtos/auth/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./login.dto */ "./apps/api-gateway/src/dtos/auth/login.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./register.dto */ "./apps/api-gateway/src/dtos/auth/register.dto.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/dtos/auth/login.dto.ts":
/*!*****************************************************!*\
  !*** ./apps/api-gateway/src/dtos/auth/login.dto.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputLoginRequest = exports.BaseAuthInput = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class BaseAuthInput {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], BaseAuthInput.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseAuthInput.prototype, "password", void 0);
exports.BaseAuthInput = BaseAuthInput;
class InputLoginRequest extends BaseAuthInput {
}
exports.InputLoginRequest = InputLoginRequest;


/***/ }),

/***/ "./apps/api-gateway/src/dtos/auth/register.dto.ts":
/*!********************************************************!*\
  !*** ./apps/api-gateway/src/dtos/auth/register.dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterPayload = exports.CreateUserInputDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const common_1 = __webpack_require__(/*! @/api-gateway/dtos/common */ "./apps/api-gateway/src/dtos/common/index.ts");
const merchant_1 = __webpack_require__(/*! @/api-gateway/dtos/merchant */ "./apps/api-gateway/src/dtos/merchant/index.ts");
const user_1 = __webpack_require__(/*! @/api-gateway/dtos/user */ "./apps/api-gateway/src/dtos/user/index.ts");
class CreateUserInputDto {
}
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value === null || value === void 0 ? void 0 : value.trim().toLowerCase()),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(common_1.EUserRole),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof common_1.EUserRole !== "undefined" && common_1.EUserRole) === "function" ? _a : Object)
], CreateUserInputDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(common_1.EUserStatus),
    __metadata("design:type", typeof (_b = typeof common_1.EUserStatus !== "undefined" && common_1.EUserStatus) === "function" ? _b : Object)
], CreateUserInputDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(common_1.EUserGender),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof common_1.EUserGender !== "undefined" && common_1.EUserGender) === "function" ? _c : Object)
], CreateUserInputDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_d = typeof common_1.ECustomerLevel !== "undefined" && common_1.ECustomerLevel) === "function" ? _d : Object)
], CreateUserInputDto.prototype, "level", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "contact", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserInputDto.prototype, "dobDay", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserInputDto.prototype, "dobMonth", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserInputDto.prototype, "dobYear", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "occupation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "avatar", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserInputDto.prototype, "cityCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserInputDto.prototype, "districtCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserInputDto.prototype, "wardCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "referrer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "referrerCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "customerCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "facebook", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "zaloPhone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserInputDto.prototype, "height", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserInputDto.prototype, "weight", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "memberCardNo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "company", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "taxNo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "note", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "relatedUser", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "relatedUserRole", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserInputDto.prototype, "relatedUserPhone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserInputDto.prototype, "branchId", void 0);
exports.CreateUserInputDto = CreateUserInputDto;
class RegisterPayload {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Type)(() => CreateUserInputDto),
    __metadata("design:type", CreateUserInputDto)
], RegisterPayload.prototype, "user", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Type)(() => merchant_1.CreateMerchantInputDto),
    __metadata("design:type", typeof (_e = typeof merchant_1.CreateMerchantInputDto !== "undefined" && merchant_1.CreateMerchantInputDto) === "function" ? _e : Object)
], RegisterPayload.prototype, "merchant", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Type)(() => user_1.DeviceInputDto),
    __metadata("design:type", typeof (_f = typeof user_1.DeviceInputDto !== "undefined" && user_1.DeviceInputDto) === "function" ? _f : Object)
], RegisterPayload.prototype, "device", void 0);
exports.RegisterPayload = RegisterPayload;


/***/ }),

/***/ "./apps/api-gateway/src/dtos/base/base.dto.ts":
/*!****************************************************!*\
  !*** ./apps/api-gateway/src/dtos/base/base.dto.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseDto = exports.BaseQueryDto = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class BaseQueryDto {
    constructor() {
        this.page = core_1.PAGE;
        this.limit = core_1.LIMIT;
        this.orderBy = 'createdAt';
        this.orderDirection = 'DESC';
    }
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BaseQueryDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BaseQueryDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BaseQueryDto.prototype, "q", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BaseQueryDto.prototype, "orderBy", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BaseQueryDto.prototype, "orderDirection", void 0);
exports.BaseQueryDto = BaseQueryDto;
class BaseDto {
    constructor(params) {
        if (params) {
            this.setAttributes(params);
        }
    }
    setAttributes(params) {
        const keys = Object.keys(params);
        for (const key of keys) {
            this.setAttribute(key, params[key]);
        }
    }
    hasProperty(name) {
        return true === Reflect.getMetadata('fields', this, name);
    }
    setAttribute(key, value) {
        if (this.hasProperty(key)) {
            this[key] = value;
        }
    }
}
exports.BaseDto = BaseDto;


/***/ }),

/***/ "./apps/api-gateway/src/dtos/base/index.ts":
/*!*************************************************!*\
  !*** ./apps/api-gateway/src/dtos/base/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./base.dto */ "./apps/api-gateway/src/dtos/base/base.dto.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/dtos/booking/booking.dto.ts":
/*!**********************************************************!*\
  !*** ./apps/api-gateway/src/dtos/booking/booking.dto.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PartialUpdateBooking = exports.CreateBookingInput = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const common_1 = __webpack_require__(/*! @/api-gateway/dtos/common */ "./apps/api-gateway/src/dtos/common/index.ts");
class CreateBookingInput {
    constructor() {
        this.status = common_1.EBookingStatus.BOOKING_PENDING;
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateBookingInput.prototype, "serviceId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(common_1.EBookingStatus),
    __metadata("design:type", typeof (_a = typeof common_1.EBookingStatus !== "undefined" && common_1.EBookingStatus) === "function" ? _a : Object)
], CreateBookingInput.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBookingInput.prototype, "bookingDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateBookingInput.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBookingInput.prototype, "serviceName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBookingInput.prototype, "userEmail", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBookingInput.prototype, "userPhoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBookingInput.prototype, "note", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateBookingInput.prototype, "merchantId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateBookingInput.prototype, "branchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateBookingInput.prototype, "duration", void 0);
exports.CreateBookingInput = CreateBookingInput;
class PartialUpdateBooking extends (0, mapped_types_1.PartialType)(CreateBookingInput) {
}
exports.PartialUpdateBooking = PartialUpdateBooking;


/***/ }),

/***/ "./apps/api-gateway/src/dtos/booking/index.ts":
/*!****************************************************!*\
  !*** ./apps/api-gateway/src/dtos/booking/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./booking.dto */ "./apps/api-gateway/src/dtos/booking/booking.dto.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/dtos/common/common.dto.ts":
/*!********************************************************!*\
  !*** ./apps/api-gateway/src/dtos/common/common.dto.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ELangType = exports.ENotificationType = exports.EEventMessage = exports.EBookingStatus = exports.EUserStatus = exports.ECustomerLevel = exports.EUserRole = exports.EUserGender = exports.EDeviceOs = exports.EImageType = exports.EServeImageType = exports.EServiceType = exports.EServiceShowType = exports.ESortDirection = void 0;
var ESortDirection;
(function (ESortDirection) {
    ESortDirection[ESortDirection["ASC"] = 0] = "ASC";
    ESortDirection[ESortDirection["DESC"] = 1] = "DESC";
})(ESortDirection = exports.ESortDirection || (exports.ESortDirection = {}));
var EServiceShowType;
(function (EServiceShowType) {
    EServiceShowType[EServiceShowType["BOTH"] = 0] = "BOTH";
    EServiceShowType[EServiceShowType["CASHIER"] = 1] = "CASHIER";
    EServiceShowType[EServiceShowType["BOOKING"] = 2] = "BOOKING";
    EServiceShowType[EServiceShowType["NONE"] = 3] = "NONE";
})(EServiceShowType = exports.EServiceShowType || (exports.EServiceShowType = {}));
var EServiceType;
(function (EServiceType) {
    EServiceType[EServiceType["SERVICE"] = 0] = "SERVICE";
    EServiceType[EServiceType["PRODUCT"] = 1] = "PRODUCT";
})(EServiceType = exports.EServiceType || (exports.EServiceType = {}));
var EServeImageType;
(function (EServeImageType) {
    EServeImageType[EServeImageType["MERCHANT"] = 0] = "MERCHANT";
    EServeImageType[EServeImageType["BRANCH"] = 1] = "BRANCH";
    EServeImageType[EServeImageType["GROUP"] = 2] = "GROUP";
    EServeImageType[EServeImageType["SERVICE"] = 3] = "SERVICE";
})(EServeImageType = exports.EServeImageType || (exports.EServeImageType = {}));
var EImageType;
(function (EImageType) {
    EImageType[EImageType["PHOTO"] = 0] = "PHOTO";
    EImageType[EImageType["VIDEO"] = 1] = "VIDEO";
})(EImageType = exports.EImageType || (exports.EImageType = {}));
var EDeviceOs;
(function (EDeviceOs) {
    EDeviceOs[EDeviceOs["ANDROID"] = 0] = "ANDROID";
    EDeviceOs[EDeviceOs["IOS"] = 1] = "IOS";
})(EDeviceOs = exports.EDeviceOs || (exports.EDeviceOs = {}));
var EUserGender;
(function (EUserGender) {
    EUserGender[EUserGender["MALE"] = 0] = "MALE";
    EUserGender[EUserGender["FEMALE"] = 1] = "FEMALE";
    EUserGender[EUserGender["OTHER"] = 2] = "OTHER";
})(EUserGender = exports.EUserGender || (exports.EUserGender = {}));
var EUserRole;
(function (EUserRole) {
    EUserRole[EUserRole["USER"] = 0] = "USER";
    EUserRole[EUserRole["ADMIN"] = 1] = "ADMIN";
    EUserRole[EUserRole["SUPER_ADMIN"] = 2] = "SUPER_ADMIN";
    EUserRole[EUserRole["MASTER_WORKER"] = 3] = "MASTER_WORKER";
    EUserRole[EUserRole["ASSISTANT_WORKER"] = 4] = "ASSISTANT_WORKER";
    EUserRole[EUserRole["MANAGER"] = 5] = "MANAGER";
    EUserRole[EUserRole["RECEPTIONIST"] = 6] = "RECEPTIONIST";
})(EUserRole = exports.EUserRole || (exports.EUserRole = {}));
var ECustomerLevel;
(function (ECustomerLevel) {
    ECustomerLevel[ECustomerLevel["NORMAL"] = 0] = "NORMAL";
    ECustomerLevel[ECustomerLevel["SILVER"] = 1] = "SILVER";
    ECustomerLevel[ECustomerLevel["GOLD"] = 2] = "GOLD";
    ECustomerLevel[ECustomerLevel["PLATINUM"] = 3] = "PLATINUM";
})(ECustomerLevel = exports.ECustomerLevel || (exports.ECustomerLevel = {}));
var EUserStatus;
(function (EUserStatus) {
    EUserStatus[EUserStatus["PENDING"] = 0] = "PENDING";
    EUserStatus[EUserStatus["ACTIVE"] = 1] = "ACTIVE";
    EUserStatus[EUserStatus["BANNED"] = 2] = "BANNED";
})(EUserStatus = exports.EUserStatus || (exports.EUserStatus = {}));
var EBookingStatus;
(function (EBookingStatus) {
    EBookingStatus[EBookingStatus["BOOKING_PENDING"] = 0] = "BOOKING_PENDING";
    EBookingStatus[EBookingStatus["BOOKING_APPROVE"] = 1] = "BOOKING_APPROVE";
    EBookingStatus[EBookingStatus["BOOKING_CANCELLED"] = 2] = "BOOKING_CANCELLED";
    EBookingStatus[EBookingStatus["BOOKING_REJECT"] = 3] = "BOOKING_REJECT";
})(EBookingStatus = exports.EBookingStatus || (exports.EBookingStatus = {}));
var EEventMessage;
(function (EEventMessage) {
    EEventMessage["CREATE_MESSAGE"] = "create_message";
    EEventMessage["RECENT_MESSAGES"] = "recent_messages";
    EEventMessage["CONVERSATION_MESSAGES"] = "conversation_messages";
    EEventMessage["JOIN_ROOM"] = "join_room";
    EEventMessage["NEW_MESSAGE"] = "new_message";
})(EEventMessage = exports.EEventMessage || (exports.EEventMessage = {}));
var ENotificationType;
(function (ENotificationType) {
    ENotificationType[ENotificationType["BOOKING"] = 0] = "BOOKING";
    ENotificationType[ENotificationType["CHAT"] = 1] = "CHAT";
    ENotificationType[ENotificationType["COMMENT"] = 2] = "COMMENT";
    ENotificationType[ENotificationType["REPLY_COMMENT"] = 3] = "REPLY_COMMENT";
})(ENotificationType = exports.ENotificationType || (exports.ENotificationType = {}));
var ELangType;
(function (ELangType) {
    ELangType["EN"] = "en";
    ELangType["VI"] = "vi";
})(ELangType = exports.ELangType || (exports.ELangType = {}));


/***/ }),

/***/ "./apps/api-gateway/src/dtos/common/index.ts":
/*!***************************************************!*\
  !*** ./apps/api-gateway/src/dtos/common/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./common.dto */ "./apps/api-gateway/src/dtos/common/common.dto.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/dtos/customer/customer.dto.ts":
/*!************************************************************!*\
  !*** ./apps/api-gateway/src/dtos/customer/customer.dto.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePartialCustomer = exports.AddCustomerDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const common_1 = __webpack_require__(/*! @/api-gateway/dtos/common */ "./apps/api-gateway/src/dtos/common/index.ts");
class AddCustomerDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], AddCustomerDto.prototype, "merchantId", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value === null || value === void 0 ? void 0 : value.trim().toLowerCase()),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(common_1.EUserRole),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof common_1.EUserRole !== "undefined" && common_1.EUserRole) === "function" ? _a : Object)
], AddCustomerDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(common_1.EUserStatus),
    __metadata("design:type", typeof (_b = typeof common_1.EUserStatus !== "undefined" && common_1.EUserStatus) === "function" ? _b : Object)
], AddCustomerDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(common_1.EUserGender),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof common_1.EUserGender !== "undefined" && common_1.EUserGender) === "function" ? _c : Object)
], AddCustomerDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_d = typeof common_1.ECustomerLevel !== "undefined" && common_1.ECustomerLevel) === "function" ? _d : Object)
], AddCustomerDto.prototype, "level", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "contact", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AddCustomerDto.prototype, "dobDay", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AddCustomerDto.prototype, "dobMonth", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AddCustomerDto.prototype, "dobYear", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "occupation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "avatar", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AddCustomerDto.prototype, "cityCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AddCustomerDto.prototype, "districtCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AddCustomerDto.prototype, "wardCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "referrer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "referrerCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "customerCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "facebook", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "zaloPhone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AddCustomerDto.prototype, "height", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AddCustomerDto.prototype, "weight", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "memberCardNo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "company", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "taxNo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "note", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "relatedUser", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "relatedUserRole", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddCustomerDto.prototype, "relatedUserPhone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AddCustomerDto.prototype, "branchId", void 0);
exports.AddCustomerDto = AddCustomerDto;
class UpdatePartialCustomer extends (0, mapped_types_1.PartialType)(AddCustomerDto) {
}
exports.UpdatePartialCustomer = UpdatePartialCustomer;


/***/ }),

/***/ "./apps/api-gateway/src/dtos/customer/index.ts":
/*!*****************************************************!*\
  !*** ./apps/api-gateway/src/dtos/customer/index.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./customer.dto */ "./apps/api-gateway/src/dtos/customer/customer.dto.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/dtos/index.ts":
/*!********************************************!*\
  !*** ./apps/api-gateway/src/dtos/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./base */ "./apps/api-gateway/src/dtos/base/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./auth */ "./apps/api-gateway/src/dtos/auth/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./merchant */ "./apps/api-gateway/src/dtos/merchant/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./user */ "./apps/api-gateway/src/dtos/user/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./common */ "./apps/api-gateway/src/dtos/common/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./customer */ "./apps/api-gateway/src/dtos/customer/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./booking */ "./apps/api-gateway/src/dtos/booking/index.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/dtos/merchant/branch/create-branch.dto.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/dtos/merchant/branch/create-branch.dto.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PartialUpdateBranch = exports.CreateBranchInput = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateBranchInput {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBranchInput.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBranchInput.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBranchInput.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateBranchInput.prototype, "merchantId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateBranchInput.prototype, "cityCode", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateBranchInput.prototype, "districtCode", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateBranchInput.prototype, "wardCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBranchInput.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBranchInput.prototype, "district", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBranchInput.prototype, "ward", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateBranchInput.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateBranchInput.prototype, "longitude", void 0);
exports.CreateBranchInput = CreateBranchInput;
class PartialUpdateBranch extends (0, mapped_types_1.PartialType)(CreateBranchInput) {
}
exports.PartialUpdateBranch = PartialUpdateBranch;


/***/ }),

/***/ "./apps/api-gateway/src/dtos/merchant/branch/index.ts":
/*!************************************************************!*\
  !*** ./apps/api-gateway/src/dtos/merchant/branch/index.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-branch.dto */ "./apps/api-gateway/src/dtos/merchant/branch/create-branch.dto.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/dtos/merchant/create.dto.ts":
/*!**********************************************************!*\
  !*** ./apps/api-gateway/src/dtos/merchant/create.dto.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMerchantInputDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateMerchantInputDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMerchantInputDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMerchantInputDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMerchantInputDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMerchantInputDto.prototype, "subdomain", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateMerchantInputDto.prototype, "cityCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateMerchantInputDto.prototype, "districtCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateMerchantInputDto.prototype, "wardCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMerchantInputDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMerchantInputDto.prototype, "district", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMerchantInputDto.prototype, "ward", void 0);
exports.CreateMerchantInputDto = CreateMerchantInputDto;


/***/ }),

/***/ "./apps/api-gateway/src/dtos/merchant/group/create-group.dto.ts":
/*!**********************************************************************!*\
  !*** ./apps/api-gateway/src/dtos/merchant/group/create-group.dto.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PartialUpdateGroup = exports.CreateGroupInput = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateGroupInput {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateGroupInput.prototype, "merchantId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGroupInput.prototype, "name", void 0);
exports.CreateGroupInput = CreateGroupInput;
class PartialUpdateGroup extends (0, mapped_types_1.PartialType)(CreateGroupInput) {
}
exports.PartialUpdateGroup = PartialUpdateGroup;


/***/ }),

/***/ "./apps/api-gateway/src/dtos/merchant/group/index.ts":
/*!***********************************************************!*\
  !*** ./apps/api-gateway/src/dtos/merchant/group/index.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-group.dto */ "./apps/api-gateway/src/dtos/merchant/group/create-group.dto.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/dtos/merchant/index.ts":
/*!*****************************************************!*\
  !*** ./apps/api-gateway/src/dtos/merchant/index.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create.dto */ "./apps/api-gateway/src/dtos/merchant/create.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./branch */ "./apps/api-gateway/src/dtos/merchant/branch/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./group */ "./apps/api-gateway/src/dtos/merchant/group/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./service */ "./apps/api-gateway/src/dtos/merchant/service/index.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/dtos/merchant/service/create-service.dto.ts":
/*!**************************************************************************!*\
  !*** ./apps/api-gateway/src/dtos/merchant/service/create-service.dto.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PartialUpdateService = exports.CreateServiceInput = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateServiceInput {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateServiceInput.prototype, "groupId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceInput.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateServiceInput.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateServiceInput.prototype, "merchantId", void 0);
exports.CreateServiceInput = CreateServiceInput;
class PartialUpdateService extends (0, mapped_types_1.PartialType)(CreateServiceInput) {
}
exports.PartialUpdateService = PartialUpdateService;


/***/ }),

/***/ "./apps/api-gateway/src/dtos/merchant/service/index.ts":
/*!*************************************************************!*\
  !*** ./apps/api-gateway/src/dtos/merchant/service/index.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-service.dto */ "./apps/api-gateway/src/dtos/merchant/service/create-service.dto.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/dtos/user/device.dto.ts":
/*!******************************************************!*\
  !*** ./apps/api-gateway/src/dtos/user/device.dto.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceInputDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const common_1 = __webpack_require__(/*! @/api-gateway/dtos/common */ "./apps/api-gateway/src/dtos/common/index.ts");
class DeviceInputDto {
}
__decorate([
    (0, class_validator_1.IsEnum)(common_1.EDeviceOs),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof common_1.EDeviceOs !== "undefined" && common_1.EDeviceOs) === "function" ? _a : Object)
], DeviceInputDto.prototype, "os", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DeviceInputDto.prototype, "deviceId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DeviceInputDto.prototype, "token", void 0);
exports.DeviceInputDto = DeviceInputDto;


/***/ }),

/***/ "./apps/api-gateway/src/dtos/user/index.ts":
/*!*************************************************!*\
  !*** ./apps/api-gateway/src/dtos/user/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./device.dto */ "./apps/api-gateway/src/dtos/user/device.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./user.dto */ "./apps/api-gateway/src/dtos/user/user.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./token.dto */ "./apps/api-gateway/src/dtos/user/token.dto.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/dtos/user/token.dto.ts":
/*!*****************************************************!*\
  !*** ./apps/api-gateway/src/dtos/user/token.dto.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenDto = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const base_dto_1 = __webpack_require__(/*! ../base/base.dto */ "./apps/api-gateway/src/dtos/base/base.dto.ts");
class TokenDto extends base_dto_1.BaseDto {
}
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], TokenDto.prototype, "lang", void 0);
exports.TokenDto = TokenDto;


/***/ }),

/***/ "./apps/api-gateway/src/dtos/user/user.dto.ts":
/*!****************************************************!*\
  !*** ./apps/api-gateway/src/dtos/user/user.dto.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginateUserDto = exports.AddOperatorDto = exports.ChangePasswordInput = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const base_dto_1 = __webpack_require__(/*! ../base/base.dto */ "./apps/api-gateway/src/dtos/base/base.dto.ts");
const core_1 = __webpack_require__(/*! @/api-gateway/core */ "./apps/api-gateway/src/core/index.ts");
const common_1 = __webpack_require__(/*! @/api-gateway/dtos/common */ "./apps/api-gateway/src/dtos/common/index.ts");
class ChangePasswordInput {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ChangePasswordInput.prototype, "currentPassword", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ChangePasswordInput.prototype, "newPassword", void 0);
__decorate([
    (0, core_1.Match)('newPassword'),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ChangePasswordInput.prototype, "confirmPassword", void 0);
exports.ChangePasswordInput = ChangePasswordInput;
class AddOperatorDto {
}
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value === null || value === void 0 ? void 0 : value.trim().toLowerCase()),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(common_1.EUserRole),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof common_1.EUserRole !== "undefined" && common_1.EUserRole) === "function" ? _a : Object)
], AddOperatorDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], AddOperatorDto.prototype, "merchantId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], AddOperatorDto.prototype, "branchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(common_1.EUserStatus),
    __metadata("design:type", typeof (_b = typeof common_1.EUserStatus !== "undefined" && common_1.EUserStatus) === "function" ? _b : Object)
], AddOperatorDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(common_1.EUserGender),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof common_1.EUserGender !== "undefined" && common_1.EUserGender) === "function" ? _c : Object)
], AddOperatorDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_d = typeof common_1.ECustomerLevel !== "undefined" && common_1.ECustomerLevel) === "function" ? _d : Object)
], AddOperatorDto.prototype, "level", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "contact", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AddOperatorDto.prototype, "dobDay", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AddOperatorDto.prototype, "dobMonth", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AddOperatorDto.prototype, "dobYear", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "occupation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "avatar", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AddOperatorDto.prototype, "cityCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AddOperatorDto.prototype, "districtCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AddOperatorDto.prototype, "wardCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "referrer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "referrerCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "customerCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "facebook", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "zaloPhone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AddOperatorDto.prototype, "height", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AddOperatorDto.prototype, "weight", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "memberCardNo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "company", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "taxNo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "note", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "relatedUser", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "relatedUserRole", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddOperatorDto.prototype, "relatedUserPhone", void 0);
exports.AddOperatorDto = AddOperatorDto;
class PaginateUserDto extends base_dto_1.BaseQueryDto {
}
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], PaginateUserDto.prototype, "excludeMe", void 0);
exports.PaginateUserDto = PaginateUserDto;


/***/ }),

/***/ "./apps/merchant-service/src/app.module.ts":
/*!*************************************************!*\
  !*** ./apps/merchant-service/src/app.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const merchant_1 = __webpack_require__(/*! @libs/database/connection/merchant */ "./libs/database/src/connection/merchant.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const merchant_module_1 = __webpack_require__(/*! ./merchant/merchant.module */ "./apps/merchant-service/src/merchant/merchant.module.ts");
const branch_module_1 = __webpack_require__(/*! ./branch/branch.module */ "./apps/merchant-service/src/branch/branch.module.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [merchant_1.MerchantDatabaseModule, merchant_module_1.MerchantModule, branch_module_1.BranchModule],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/merchant-service/src/branch/branch.module.ts":
/*!***********************************************************!*\
  !*** ./apps/merchant-service/src/branch/branch.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BranchModule = void 0;
const entities_1 = __webpack_require__(/*! @libs/database/entities */ "./libs/database/src/entities/index.ts");
const repositories_1 = __webpack_require__(/*! @libs/database/repositories */ "./libs/database/src/repositories/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const module_1 = __webpack_require__(/*! libs/modules/global/secrets/module */ "./libs/modules/global/secrets/module.ts");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const branch_service_1 = __webpack_require__(/*! ./branch.service */ "./apps/merchant-service/src/branch/branch.service.ts");
let BranchModule = class BranchModule {
};
BranchModule = __decorate([
    (0, common_1.Module)({
        imports: [module_1.SecretsModule, sequelize_1.SequelizeModule.forFeature([entities_1.BranchModel])],
        providers: [branch_service_1.BranchService, repositories_1.BranchRepository],
        exports: [branch_service_1.BranchService],
    })
], BranchModule);
exports.BranchModule = BranchModule;


/***/ }),

/***/ "./apps/merchant-service/src/branch/branch.service.ts":
/*!************************************************************!*\
  !*** ./apps/merchant-service/src/branch/branch.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BranchService = void 0;
const repositories_1 = __webpack_require__(/*! @libs/database/repositories */ "./libs/database/src/repositories/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
let BranchService = class BranchService {
    constructor(branchRepository) {
        this.branchRepository = branchRepository;
    }
    async create(dto) {
        const branch = await this.branchRepository.create(dto);
        return branch;
    }
    async find(request) {
        const branches = await this.branchRepository.find({
            where: JSON.parse(request.where),
        });
        return branches;
    }
    async findOne(query) {
        const result = await this.branchRepository.findOne(Object.assign(Object.assign({}, query), { raw: true }));
        return result;
    }
    async findWithPaging(request) {
        const baseWhereQuery = !(0, lodash_1.isEmpty)(request.where) ? JSON.parse(request.where) : undefined;
        const result = await this.branchRepository.findAndPaginate(Object.assign(Object.assign({}, request), { where: baseWhereQuery }));
        return result;
    }
    async update(request) {
        const result = await this.branchRepository.update(request.data, {
            where: {
                id: request.id,
            },
        });
        return result[0];
    }
    async findById(id) {
        const result = await this.branchRepository.findById(id, {
            raw: true,
        });
        return result;
    }
};
BranchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof repositories_1.BranchRepository !== "undefined" && repositories_1.BranchRepository) === "function" ? _a : Object])
], BranchService);
exports.BranchService = BranchService;


/***/ }),

/***/ "./apps/merchant-service/src/group/group.module.ts":
/*!*********************************************************!*\
  !*** ./apps/merchant-service/src/group/group.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupModule = void 0;
const entities_1 = __webpack_require__(/*! @libs/database/entities */ "./libs/database/src/entities/index.ts");
const repositories_1 = __webpack_require__(/*! @libs/database/repositories */ "./libs/database/src/repositories/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const module_1 = __webpack_require__(/*! libs/modules/global/secrets/module */ "./libs/modules/global/secrets/module.ts");
const group_service_1 = __webpack_require__(/*! @/merchant-service/group/group.service */ "./apps/merchant-service/src/group/group.service.ts");
let GroupModule = class GroupModule {
};
GroupModule = __decorate([
    (0, common_1.Module)({
        imports: [module_1.SecretsModule, sequelize_1.SequelizeModule.forFeature([entities_1.GroupModel])],
        providers: [group_service_1.GroupService, repositories_1.GroupRepository],
        exports: [group_service_1.GroupService],
    })
], GroupModule);
exports.GroupModule = GroupModule;


/***/ }),

/***/ "./apps/merchant-service/src/group/group.service.ts":
/*!**********************************************************!*\
  !*** ./apps/merchant-service/src/group/group.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupService = void 0;
const repositories_1 = __webpack_require__(/*! @libs/database/repositories */ "./libs/database/src/repositories/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
let GroupService = class GroupService {
    constructor(groupRepository) {
        this.groupRepository = groupRepository;
    }
    async create(dto) {
        const branch = await this.groupRepository.create(dto);
        return branch;
    }
    async find(request) {
        const branches = await this.groupRepository.find(JSON.parse(request.where));
        return branches;
    }
    async findOne(query) {
        const result = await this.groupRepository.findOne(Object.assign(Object.assign({}, query), { raw: true }));
        return result;
    }
    async findWithPaging(request) {
        const baseWhereQuery = !(0, lodash_1.isEmpty)(request.where) ? JSON.parse(request.where) : undefined;
        const result = await this.groupRepository.findAndPaginate(Object.assign(Object.assign({}, request), { where: baseWhereQuery }));
        return result;
    }
    async update(request) {
        const result = await this.groupRepository.update(request.data, {
            where: {
                id: request.id,
            },
        });
        return result[0];
    }
    async findById(id) {
        const result = await this.groupRepository.findById(id, {
            raw: true,
        });
        return result;
    }
    async delete(id) {
        return await this.groupRepository.delete({ where: { id } });
    }
};
GroupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof repositories_1.GroupRepository !== "undefined" && repositories_1.GroupRepository) === "function" ? _a : Object])
], GroupService);
exports.GroupService = GroupService;


/***/ }),

/***/ "./apps/merchant-service/src/merchant/merchant.controller.ts":
/*!*******************************************************************!*\
  !*** ./apps/merchant-service/src/merchant/merchant.controller.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MerchantController = void 0;
const grpc_types_1 = __webpack_require__(/*! @libs/grpc-types */ "./libs/grpc-types/src/index.ts");
const interceptors_1 = __webpack_require__(/*! @libs/interceptors */ "./libs/interceptors/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const filters_1 = __webpack_require__(/*! filters/filters */ "./libs/filters/src/index.ts");
const branch_service_1 = __webpack_require__(/*! ../branch/branch.service */ "./apps/merchant-service/src/branch/branch.service.ts");
const group_service_1 = __webpack_require__(/*! ../group/group.service */ "./apps/merchant-service/src/group/group.service.ts");
const service_service_1 = __webpack_require__(/*! ../service/service.service */ "./apps/merchant-service/src/service/service.service.ts");
const merchant_service_1 = __webpack_require__(/*! ./merchant.service */ "./apps/merchant-service/src/merchant/merchant.service.ts");
let MerchantController = class MerchantController {
    constructor(merchantService, branchService, groupService, servicesService) {
        this.merchantService = merchantService;
        this.branchService = branchService;
        this.groupService = groupService;
        this.servicesService = servicesService;
    }
    async groups(request) {
        const result = await this.groupService.findWithPaging(request);
        return result;
    }
    findAll(request) {
        throw new Error('Method not implemented.');
    }
    async findBranches(request) {
        return await this.branchService.findWithPaging(request);
    }
    async find(request) {
        const merchants = await this.merchantService.findWithPaging(request);
        return merchants;
    }
    async findOne(request) {
        const merchant = await this.merchantService.findOne(request);
        return { merchant };
    }
    async create(request) {
        const res = await this.merchantService.create(request);
        return res;
    }
    count(request) {
        throw new Error('Method not implemented.');
    }
    async findById(id) {
        const merchant = await this.merchantService.findById(id.id);
        return { merchant };
    }
    async branch(request) {
        const branch = await this.branchService.findOne({
            where: JSON.parse(request.where),
        });
        return { branch };
    }
    async branches(request) {
        const branches = await this.branchService.find(request);
        return { branches };
    }
    async findBranchById(request) {
        const branch = await this.branchService.findById(request.id);
        return { branch };
    }
    async createBranch(request) {
        const branch = await this.branchService.create(request);
        return branch;
    }
    async updateBranch(request) {
        const branch = await this.branchService.update(request);
        return branch;
    }
    deleteBranch(request) {
        throw new Error('Method not implemented.');
    }
    group(request) {
        throw new Error('Method not implemented.');
    }
    findGroupById(request) {
        throw new Error('Method not implemented.');
    }
    async createGroup(request) {
        const group = await this.groupService.create(request);
        return group;
    }
    async updateGroup(request) {
        const group = await this.groupService.update(request);
        return group;
    }
    async deleteGroup(request) {
        const count = await this.groupService.delete(request.id);
        return { count };
    }
    async service(request) {
        const service = await this.servicesService.findOne({
            where: JSON.parse(request.where),
        });
        return { service };
    }
    async services(request) {
        const service = await this.servicesService.findWithPaging(request);
        return service;
    }
    async findServiceById(request) {
        const service = await this.servicesService.findById(request.id);
        return { service };
    }
    async createService(request) {
        const service = await this.servicesService.create(request);
        return service;
    }
    async updateService(request) {
        const service = await this.servicesService.update(request);
        return service;
    }
    async deleteService(request) {
        const count = await this.servicesService.delete(request.id);
        return { count };
    }
    findServiceOffsetPagination(request) {
        throw new Error('Method not implemented.');
    }
};
MerchantController = __decorate([
    (0, common_1.UseFilters)(filters_1.GrpcAllExceptionsFilter),
    (0, common_1.UseInterceptors)(interceptors_1.GrpcLogInterceptor),
    (0, common_1.Controller)(),
    grpc_types_1.MerchantProto.MerchantServiceControllerMethods(),
    __metadata("design:paramtypes", [typeof (_a = typeof merchant_service_1.MerchantService !== "undefined" && merchant_service_1.MerchantService) === "function" ? _a : Object, typeof (_b = typeof branch_service_1.BranchService !== "undefined" && branch_service_1.BranchService) === "function" ? _b : Object, typeof (_c = typeof group_service_1.GroupService !== "undefined" && group_service_1.GroupService) === "function" ? _c : Object, typeof (_d = typeof service_service_1.ServicesService !== "undefined" && service_service_1.ServicesService) === "function" ? _d : Object])
], MerchantController);
exports.MerchantController = MerchantController;


/***/ }),

/***/ "./apps/merchant-service/src/merchant/merchant.module.ts":
/*!***************************************************************!*\
  !*** ./apps/merchant-service/src/merchant/merchant.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MerchantModule = void 0;
const entities_1 = __webpack_require__(/*! @libs/database/entities */ "./libs/database/src/entities/index.ts");
const repositories_1 = __webpack_require__(/*! @libs/database/repositories */ "./libs/database/src/repositories/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const module_1 = __webpack_require__(/*! libs/modules/global/secrets/module */ "./libs/modules/global/secrets/module.ts");
const branch_module_1 = __webpack_require__(/*! ../branch/branch.module */ "./apps/merchant-service/src/branch/branch.module.ts");
const group_module_1 = __webpack_require__(/*! ../group/group.module */ "./apps/merchant-service/src/group/group.module.ts");
const service_module_1 = __webpack_require__(/*! ../service/service.module */ "./apps/merchant-service/src/service/service.module.ts");
const merchant_controller_1 = __webpack_require__(/*! ./merchant.controller */ "./apps/merchant-service/src/merchant/merchant.controller.ts");
const merchant_service_1 = __webpack_require__(/*! ./merchant.service */ "./apps/merchant-service/src/merchant/merchant.service.ts");
let MerchantModule = class MerchantModule {
};
MerchantModule = __decorate([
    (0, common_1.Module)({
        imports: [module_1.SecretsModule, sequelize_1.SequelizeModule.forFeature([entities_1.MerchantModel]), branch_module_1.BranchModule, group_module_1.GroupModule, service_module_1.ServicesModule],
        controllers: [merchant_controller_1.MerchantController],
        providers: [merchant_service_1.MerchantService, repositories_1.MerchantRepository],
    })
], MerchantModule);
exports.MerchantModule = MerchantModule;


/***/ }),

/***/ "./apps/merchant-service/src/merchant/merchant.service.ts":
/*!****************************************************************!*\
  !*** ./apps/merchant-service/src/merchant/merchant.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MerchantService = void 0;
const repositories_1 = __webpack_require__(/*! @libs/database/repositories */ "./libs/database/src/repositories/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const branch_service_1 = __webpack_require__(/*! ../branch/branch.service */ "./apps/merchant-service/src/branch/branch.service.ts");
let MerchantService = class MerchantService {
    constructor(merchantRepository, branchService) {
        this.merchantRepository = merchantRepository;
        this.branchService = branchService;
    }
    async create(dto) {
        try {
            const merchant = await this.merchantRepository.create(dto);
            const branch = await this.branchService.create(Object.assign(Object.assign({}, dto), { merchantId: merchant.id }));
            return { merchant, branch };
        }
        catch (error) {
            console.log(error);
        }
    }
    async find(request) {
        const merchants = await this.merchantRepository.find(JSON.parse(request.where));
        return merchants;
    }
    async findWithPaging(request) {
        const baseWhereQuery = !(0, lodash_1.isEmpty)(request.where) ? JSON.parse(request.where) : undefined;
        const result = await this.merchantRepository.findAndPaginate(Object.assign(Object.assign({}, request), { where: baseWhereQuery }));
        return result;
    }
    async findById(id) {
        const merchant = await this.merchantRepository.findById(id);
        return merchant;
    }
    async findOne(dto) {
        const where = !(0, lodash_1.isEmpty)(dto.where) ? JSON.parse(dto.where) : undefined;
        const result = await this.merchantRepository.findOne(Object.assign(Object.assign({}, dto), { where, raw: true }));
        return result;
    }
};
MerchantService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof repositories_1.MerchantRepository !== "undefined" && repositories_1.MerchantRepository) === "function" ? _a : Object, typeof (_b = typeof branch_service_1.BranchService !== "undefined" && branch_service_1.BranchService) === "function" ? _b : Object])
], MerchantService);
exports.MerchantService = MerchantService;


/***/ }),

/***/ "./apps/merchant-service/src/service/service.module.ts":
/*!*************************************************************!*\
  !*** ./apps/merchant-service/src/service/service.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesModule = void 0;
const entities_1 = __webpack_require__(/*! @libs/database/entities */ "./libs/database/src/entities/index.ts");
const repositories_1 = __webpack_require__(/*! @libs/database/repositories */ "./libs/database/src/repositories/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const module_1 = __webpack_require__(/*! libs/modules/global/secrets/module */ "./libs/modules/global/secrets/module.ts");
const service_service_1 = __webpack_require__(/*! ../service/service.service */ "./apps/merchant-service/src/service/service.service.ts");
let ServicesModule = class ServicesModule {
};
ServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [module_1.SecretsModule, sequelize_1.SequelizeModule.forFeature([entities_1.ServiceModel])],
        providers: [service_service_1.ServicesService, repositories_1.ServiceRepository],
        exports: [service_service_1.ServicesService],
    })
], ServicesModule);
exports.ServicesModule = ServicesModule;


/***/ }),

/***/ "./apps/merchant-service/src/service/service.service.ts":
/*!**************************************************************!*\
  !*** ./apps/merchant-service/src/service/service.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesService = void 0;
const repositories_1 = __webpack_require__(/*! @libs/database/repositories */ "./libs/database/src/repositories/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
let ServicesService = class ServicesService {
    constructor(serviceRepository) {
        this.serviceRepository = serviceRepository;
    }
    async create(dto) {
        const service = await this.serviceRepository.create(dto);
        return service;
    }
    async find(request) {
        const services = await this.serviceRepository.find(JSON.parse(request.where));
        return services;
    }
    async findOne(query) {
        const result = await this.serviceRepository.findOne(Object.assign(Object.assign({}, query), { raw: true }));
        return result;
    }
    async findWithPaging(request) {
        const baseWhereQuery = !(0, lodash_1.isEmpty)(request.where) ? JSON.parse(request.where) : undefined;
        const result = await this.serviceRepository.findAndPaginate(Object.assign(Object.assign({}, request), { where: baseWhereQuery }));
        return result;
    }
    async update(request) {
        const result = await this.serviceRepository.update(request.data, {
            where: {
                id: request.id,
            },
        });
        return result[0];
    }
    async findById(id) {
        const result = await this.serviceRepository.findById(id, {
            raw: true,
        });
        return result;
    }
    async delete(id) {
        return await this.serviceRepository.delete({ where: { id } });
    }
};
ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof repositories_1.ServiceRepository !== "undefined" && repositories_1.ServiceRepository) === "function" ? _a : Object])
], ServicesService);
exports.ServicesService = ServicesService;


/***/ }),

/***/ "./libs/core/src/constants/database.constant.ts":
/*!******************************************************!*\
  !*** ./libs/core/src/constants/database.constant.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PAGE = exports.LIMIT = exports.operatorsAliases = void 0;
const sequelize_1 = __webpack_require__(/*! sequelize */ "sequelize");
exports.operatorsAliases = {
    _and: sequelize_1.Op.and,
    _or: sequelize_1.Op.or,
    _eq: sequelize_1.Op.eq,
    _ne: sequelize_1.Op.ne,
    _is: sequelize_1.Op.is,
    _not: sequelize_1.Op.not,
    _col: sequelize_1.Op.col,
    _gt: sequelize_1.Op.gt,
    _gte: sequelize_1.Op.gte,
    _lt: sequelize_1.Op.lt,
    _lte: sequelize_1.Op.lte,
    _between: sequelize_1.Op.between,
    _notBetween: sequelize_1.Op.notBetween,
    _all: sequelize_1.Op.all,
    _in: sequelize_1.Op.in,
    _notIn: sequelize_1.Op.notIn,
    _like: sequelize_1.Op.like,
    _notLike: sequelize_1.Op.notLike,
    _startsWith: sequelize_1.Op.startsWith,
    _endsWith: sequelize_1.Op.endsWith,
    _substring: sequelize_1.Op.substring,
    _iLike: sequelize_1.Op.iLike,
    _notILike: sequelize_1.Op.notILike,
    _regexp: sequelize_1.Op.regexp,
    _notRegexp: sequelize_1.Op.notRegexp,
    _iRegexp: sequelize_1.Op.iRegexp,
    _notIRegexp: sequelize_1.Op.notIRegexp,
    _any: sequelize_1.Op.any,
    _contains: sequelize_1.Op.contains,
    _contained: sequelize_1.Op.contained,
    _overlap: sequelize_1.Op.overlap,
    _adjacent: sequelize_1.Op.adjacent,
    _strictLeft: sequelize_1.Op.strictLeft,
    _strictRight: sequelize_1.Op.strictRight,
    _noExtendRight: sequelize_1.Op.noExtendRight,
    _noExtendLeft: sequelize_1.Op.noExtendLeft,
    _values: sequelize_1.Op.values,
};
exports.LIMIT = 10;
exports.PAGE = 1;


/***/ }),

/***/ "./libs/core/src/constants/index.ts":
/*!******************************************!*\
  !*** ./libs/core/src/constants/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./database.constant */ "./libs/core/src/constants/database.constant.ts"), exports);


/***/ }),

/***/ "./libs/core/src/index.ts":
/*!********************************!*\
  !*** ./libs/core/src/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./utils */ "./libs/core/src/utils/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./constants */ "./libs/core/src/constants/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./message */ "./libs/core/src/message/index.ts"), exports);


/***/ }),

/***/ "./libs/core/src/message/auth/auth.message.ts":
/*!****************************************************!*\
  !*** ./libs/core/src/message/auth/auth.message.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AUTH_MESSAGE = void 0;
exports.AUTH_MESSAGE = {
    LOGIN: {
        INVALID: 'Invalid credentials.',
    },
};


/***/ }),

/***/ "./libs/core/src/message/auth/index.ts":
/*!*********************************************!*\
  !*** ./libs/core/src/message/auth/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./auth.message */ "./libs/core/src/message/auth/auth.message.ts"), exports);


/***/ }),

/***/ "./libs/core/src/message/common.message.ts":
/*!*************************************************!*\
  !*** ./libs/core/src/message/common.message.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COMMON_MESSAGE = void 0;
exports.COMMON_MESSAGE = {
    INVALID: 'Invalid request',
    CREATE: {
        EXIST_EMAIL: 'The email is exist',
    },
    READ: {
        NOT_FOUND: 'The merchant not found',
    },
    UPDATE: {
        FAIL: 'Can not update merchant',
    },
};


/***/ }),

/***/ "./libs/core/src/message/index.ts":
/*!****************************************!*\
  !*** ./libs/core/src/message/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user */ "./libs/core/src/message/user/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./merchant */ "./libs/core/src/message/merchant/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./auth */ "./libs/core/src/message/auth/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./common.message */ "./libs/core/src/message/common.message.ts"), exports);


/***/ }),

/***/ "./libs/core/src/message/merchant/branch.message.ts":
/*!**********************************************************!*\
  !*** ./libs/core/src/message/merchant/branch.message.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BRANCH_MESSAGE = void 0;
exports.BRANCH_MESSAGE = {
    READ: {
        NOT_FOUND: 'The branch not found',
    },
    CREATE: {
        EXISTED: 'The branch is exist',
    },
    UPDATE: {
        FAIL: 'Can not update user',
        INVALID_PASSWORD: 'Error updating password. Kindly check your passwords',
    },
    DELETE: {
        FAIL: 'Delete branch failed',
        SUCCESS: 'Delete branch successfully',
    },
};


/***/ }),

/***/ "./libs/core/src/message/merchant/index.ts":
/*!*************************************************!*\
  !*** ./libs/core/src/message/merchant/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./merchant.message */ "./libs/core/src/message/merchant/merchant.message.ts"), exports);
__exportStar(__webpack_require__(/*! ./branch.message */ "./libs/core/src/message/merchant/branch.message.ts"), exports);


/***/ }),

/***/ "./libs/core/src/message/merchant/merchant.message.ts":
/*!************************************************************!*\
  !*** ./libs/core/src/message/merchant/merchant.message.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MERCHANT_MESSAGE = void 0;
exports.MERCHANT_MESSAGE = {
    CREATE: {
        EXIST_EMAIL: 'The email is exist',
    },
    READ: {
        NOT_FOUND: 'The merchant not found',
    },
    UPDATE: {
        FAIL: 'Can not update merchant',
    },
};


/***/ }),

/***/ "./libs/core/src/message/user/customer.message.ts":
/*!********************************************************!*\
  !*** ./libs/core/src/message/user/customer.message.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CUSTOMER_MESSAGE = void 0;
exports.CUSTOMER_MESSAGE = {
    CREATE: {
        EXIST_EMAIL: 'The email is exist',
        SUCCESSFUL: 'Create customer successfully',
    },
    UPDATE: {
        FAIL: 'Can not update customer',
        INVALID_PASSWORD: 'Error updating password. Kindly check your passwords',
    },
    READ: {
        NOT_FOUND: 'The customer not found',
    },
    DELETE: {
        FAIL: 'Can not remove the customer',
    },
};


/***/ }),

/***/ "./libs/core/src/message/user/index.ts":
/*!*********************************************!*\
  !*** ./libs/core/src/message/user/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user.message */ "./libs/core/src/message/user/user.message.ts"), exports);
__exportStar(__webpack_require__(/*! ./customer.message */ "./libs/core/src/message/user/customer.message.ts"), exports);


/***/ }),

/***/ "./libs/core/src/message/user/user.message.ts":
/*!****************************************************!*\
  !*** ./libs/core/src/message/user/user.message.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USER_MESSAGE = void 0;
exports.USER_MESSAGE = {
    CREATE: {
        EXIST_EMAIL: 'The email is exist',
    },
    READ: {
        NOT_FOUND: 'The user not found',
    },
    UPDATE: {
        FAIL: 'Can not update user',
        INVALID_PASSWORD: 'Error updating password. Kindly check your passwords',
    },
};


/***/ }),

/***/ "./libs/core/src/utils/error.helper.ts":
/*!*********************************************!*\
  !*** ./libs/core/src/utils/error.helper.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorHelper = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
class ErrorHelper {
    static BadRequestException(message) {
        throw new microservices_1.RpcException({
            code: common_1.HttpStatus.BAD_REQUEST,
            message,
        });
    }
    static HttpBadRequestException(message) {
        throw new common_1.HttpException(message, common_1.HttpStatus.BAD_REQUEST);
    }
    static UnauthorizedException(message) {
        throw new microservices_1.RpcException({
            code: common_1.HttpStatus.UNAUTHORIZED,
            message,
        });
    }
    static HttpUnauthorizedException(message) {
        throw new common_1.HttpException(message, common_1.HttpStatus.UNAUTHORIZED);
    }
    static NotFoundException(message) {
        throw new microservices_1.RpcException({
            code: common_1.HttpStatus.NOT_FOUND,
            message,
        });
    }
    static HttpNotFoundException(message) {
        throw new common_1.HttpException(message, common_1.HttpStatus.NOT_FOUND);
    }
    static ForbiddenException(message) {
        throw new microservices_1.RpcException({
            code: common_1.HttpStatus.FORBIDDEN,
            message,
        });
    }
    static HttpForbiddenException(message) {
        throw new common_1.HttpException(message, common_1.HttpStatus.FORBIDDEN);
    }
    static InternalServerErrorException(message) {
        throw new microservices_1.RpcException({
            code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            message,
        });
    }
    static HttpInternalServerErrorException(message) {
        throw new common_1.HttpException(message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
exports.ErrorHelper = ErrorHelper;


/***/ }),

/***/ "./libs/core/src/utils/general.util.ts":
/*!*********************************************!*\
  !*** ./libs/core/src/utils/general.util.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Property = exports.toUFT8NonSpecialCharacters = exports.numberInputs = void 0;
const numberInputs = (input = {}) => Object.keys(input).reduce((acc, val) => {
    acc[val] = +input[val];
    return acc;
}, {});
exports.numberInputs = numberInputs;
function toUFT8NonSpecialCharacters(str) {
    str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, 'A');
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, 'E');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/I|Í|Ì|Ĩ|Ị/g, 'I');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, 'O');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, 'U');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, 'Y');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/Đ/g, 'D');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
    str = str.replace(/\u02C6|\u0306|\u031B/g, '');
    return str;
}
exports.toUFT8NonSpecialCharacters = toUFT8NonSpecialCharacters;
function Property(className = 'fields', defaultValue = undefined) {
    return (target, name) => {
        if (defaultValue !== undefined) {
            target[name] = defaultValue;
        }
        Reflect.defineMetadata(className, true, target, name);
    };
}
exports.Property = Property;


/***/ }),

/***/ "./libs/core/src/utils/index.ts":
/*!**************************************!*\
  !*** ./libs/core/src/utils/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./password.utils */ "./libs/core/src/utils/password.utils.ts"), exports);
__exportStar(__webpack_require__(/*! ./query.utils */ "./libs/core/src/utils/query.utils.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils.module */ "./libs/core/src/utils/utils.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./general.util */ "./libs/core/src/utils/general.util.ts"), exports);
__exportStar(__webpack_require__(/*! ./error.helper */ "./libs/core/src/utils/error.helper.ts"), exports);


/***/ }),

/***/ "./libs/core/src/utils/password.utils.ts":
/*!***********************************************!*\
  !*** ./libs/core/src/utils/password.utils.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordUtils = void 0;
const argon2_1 = __webpack_require__(/*! argon2 */ "argon2");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
let PasswordUtils = class PasswordUtils {
    async compare(password, hash) {
        return (0, argon2_1.verify)(hash, password);
    }
    async hash(password) {
        if ((0, lodash_1.isEmpty)(password) || password.length < 6) {
            throw new Error('Password must be at least 6 characters.');
        }
        return (0, argon2_1.hash)(password);
    }
};
PasswordUtils = __decorate([
    (0, common_1.Injectable)()
], PasswordUtils);
exports.PasswordUtils = PasswordUtils;


/***/ }),

/***/ "./libs/core/src/utils/query.utils.ts":
/*!********************************************!*\
  !*** ./libs/core/src/utils/query.utils.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueryUtils = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
let QueryUtils = class QueryUtils {
    async getFilters(filterBy) {
        const queryFilters = { where: {} };
        if (!(0, lodash_1.isEmpty)(filterBy))
            Object.assign(queryFilters.where, filterBy);
        return queryFilters;
    }
    async getOrder(orderBy) {
        const queryOrder = {};
        if (!(0, lodash_1.isEmpty)(orderBy)) {
            if (orderBy.trim().charAt(0) === '-') {
                Object.assign(queryOrder, { orderBy: [orderBy.trim().substr(1), 'DESC'] });
            }
            else {
                Object.assign(queryOrder, { orderBy: [orderBy.trim(), 'ASC'] });
            }
        }
        return queryOrder;
    }
    async getCursor(first, last, before, after) {
        const queryCursor = {};
        if (!(0, lodash_1.isNil)(first))
            Object.assign(queryCursor, { limit: first });
        if (!(0, lodash_1.isEmpty)(after)) {
            Object.assign(queryCursor, { after, limit: first });
        }
        else if (!(0, lodash_1.isEmpty)(before)) {
            Object.assign(queryCursor, { before, limit: last });
        }
        return queryCursor;
    }
    async buildQuery(orderBy, first, last, before, after) {
        return (0, lodash_1.merge)({}, await this.getOrder(orderBy), await this.getCursor(first, last, before, after));
    }
};
QueryUtils = __decorate([
    (0, common_1.Injectable)()
], QueryUtils);
exports.QueryUtils = QueryUtils;


/***/ }),

/***/ "./libs/core/src/utils/utils.module.ts":
/*!*********************************************!*\
  !*** ./libs/core/src/utils/utils.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UtilsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const query_utils_1 = __webpack_require__(/*! ./query.utils */ "./libs/core/src/utils/query.utils.ts");
const password_utils_1 = __webpack_require__(/*! ./password.utils */ "./libs/core/src/utils/password.utils.ts");
let UtilsModule = class UtilsModule {
};
UtilsModule = __decorate([
    (0, common_1.Module)({
        exports: [query_utils_1.QueryUtils, password_utils_1.PasswordUtils],
        providers: [query_utils_1.QueryUtils, password_utils_1.PasswordUtils],
    })
], UtilsModule);
exports.UtilsModule = UtilsModule;


/***/ }),

/***/ "./libs/database/src/connection/booking.ts":
/*!*************************************************!*\
  !*** ./libs/database/src/connection/booking.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingDatabaseModule = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const booking_1 = __webpack_require__(/*! @libs/database/entities/booking */ "./libs/database/src/entities/booking/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const adapter_1 = __webpack_require__(/*! libs/modules/global/secrets/adapter */ "./libs/modules/global/secrets/adapter.ts");
const module_1 = __webpack_require__(/*! libs/modules/global/secrets/module */ "./libs/modules/global/secrets/module.ts");
let BookingDatabaseModule = class BookingDatabaseModule {
};
BookingDatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [module_1.SecretsModule],
                useFactory: async (secrets) => {
                    return Object.assign(Object.assign({ dialect: 'postgres' }, secrets.bookingServiceDatabase), { logging: false, typeValidation: true, operatorsAliases: core_1.operatorsAliases, models: [booking_1.BookingModel], autoLoadModels: true, synchronize: true, query: {
                            raw: true,
                        }, define: {
                            timestamps: true,
                            underscored: true,
                            version: true,
                        }, dialectOptions: {
                            charset: 'utf8',
                        } });
                },
                inject: [adapter_1.AbstractSecretsService],
            }),
        ],
    })
], BookingDatabaseModule);
exports.BookingDatabaseModule = BookingDatabaseModule;


/***/ }),

/***/ "./libs/database/src/connection/index.ts":
/*!***********************************************!*\
  !*** ./libs/database/src/connection/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user */ "./libs/database/src/connection/user.ts"), exports);
__exportStar(__webpack_require__(/*! ./merchant */ "./libs/database/src/connection/merchant.ts"), exports);
__exportStar(__webpack_require__(/*! ./booking */ "./libs/database/src/connection/booking.ts"), exports);
__exportStar(__webpack_require__(/*! ./notification */ "./libs/database/src/connection/notification.ts"), exports);


/***/ }),

/***/ "./libs/database/src/connection/merchant.ts":
/*!**************************************************!*\
  !*** ./libs/database/src/connection/merchant.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MerchantDatabaseModule = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const entities_1 = __webpack_require__(/*! @libs/database/entities */ "./libs/database/src/entities/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const adapter_1 = __webpack_require__(/*! libs/modules/global/secrets/adapter */ "./libs/modules/global/secrets/adapter.ts");
const module_1 = __webpack_require__(/*! libs/modules/global/secrets/module */ "./libs/modules/global/secrets/module.ts");
let MerchantDatabaseModule = class MerchantDatabaseModule {
};
MerchantDatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [module_1.SecretsModule],
                useFactory: async (secrets) => {
                    return Object.assign(Object.assign({ dialect: 'postgres' }, secrets.merchantServiceDatabase), { logging: false, typeValidation: true, operatorsAliases: core_1.operatorsAliases, models: [entities_1.MerchantModel, entities_1.BranchModel, entities_1.GroupModel, entities_1.ServiceModel, entities_1.ImageModel, entities_1.ServeImageModel], autoLoadModels: true, synchronize: true, query: {
                            raw: true,
                        }, define: {
                            timestamps: true,
                            underscored: true,
                            version: true,
                        }, dialectOptions: {
                            charset: 'utf8',
                        } });
                },
                inject: [adapter_1.AbstractSecretsService],
            }),
        ],
    })
], MerchantDatabaseModule);
exports.MerchantDatabaseModule = MerchantDatabaseModule;


/***/ }),

/***/ "./libs/database/src/connection/notification.ts":
/*!******************************************************!*\
  !*** ./libs/database/src/connection/notification.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationDatabaseModule = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const entities_1 = __webpack_require__(/*! @libs/database/entities */ "./libs/database/src/entities/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const adapter_1 = __webpack_require__(/*! libs/modules/global/secrets/adapter */ "./libs/modules/global/secrets/adapter.ts");
const module_1 = __webpack_require__(/*! libs/modules/global/secrets/module */ "./libs/modules/global/secrets/module.ts");
let NotificationDatabaseModule = class NotificationDatabaseModule {
};
NotificationDatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [module_1.SecretsModule],
                useFactory: async (secrets) => {
                    return Object.assign(Object.assign({ dialect: 'postgres' }, secrets.notificationServiceDatabase), { logging: false, typeValidation: true, operatorsAliases: core_1.operatorsAliases, models: [entities_1.NotificationModel], autoLoadModels: true, synchronize: true, sync: {
                            force: true,
                        }, query: {
                            raw: true,
                        }, define: {
                            timestamps: true,
                            underscored: true,
                            version: true,
                        }, dialectOptions: {
                            charset: 'utf8',
                        } });
                },
                inject: [adapter_1.AbstractSecretsService],
            }),
        ],
    })
], NotificationDatabaseModule);
exports.NotificationDatabaseModule = NotificationDatabaseModule;


/***/ }),

/***/ "./libs/database/src/connection/user.ts":
/*!**********************************************!*\
  !*** ./libs/database/src/connection/user.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDatabaseModule = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const entities_1 = __webpack_require__(/*! @libs/database/entities */ "./libs/database/src/entities/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const adapter_1 = __webpack_require__(/*! libs/modules/global/secrets/adapter */ "./libs/modules/global/secrets/adapter.ts");
const module_1 = __webpack_require__(/*! libs/modules/global/secrets/module */ "./libs/modules/global/secrets/module.ts");
let UserDatabaseModule = class UserDatabaseModule {
};
UserDatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [module_1.SecretsModule],
                useFactory: async (secrets) => {
                    return Object.assign(Object.assign({ dialect: 'postgres' }, secrets.userServiceDatabase), { logging: false, typeValidation: true, operatorsAliases: core_1.operatorsAliases, models: [entities_1.UserModel, entities_1.DeviceModel, entities_1.MerchantUserModel], autoLoadModels: true, synchronize: true, query: {
                            raw: true,
                        }, define: {
                            timestamps: true,
                            underscored: true,
                            version: true,
                        }, dialectOptions: {
                            charset: 'utf8',
                        } });
                },
                inject: [adapter_1.AbstractSecretsService],
            }),
        ],
    })
], UserDatabaseModule);
exports.UserDatabaseModule = UserDatabaseModule;


/***/ }),

/***/ "./libs/database/src/entities/base.model.ts":
/*!**************************************************!*\
  !*** ./libs/database/src/entities/base.model.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseModel = void 0;
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
class BaseModel extends sequelize_typescript_1.Model {
}
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], BaseModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        defaultValue: sequelize_typescript_1.DataType.NOW,
        allowNull: false,
    }),
    __metadata("design:type", String)
], BaseModel.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        defaultValue: sequelize_typescript_1.DataType.NOW,
        allowNull: false,
    }),
    __metadata("design:type", String)
], BaseModel.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: true,
    }),
    __metadata("design:type", String)
], BaseModel.prototype, "deletedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], BaseModel.prototype, "version", void 0);
exports.BaseModel = BaseModel;


/***/ }),

/***/ "./libs/database/src/entities/booking/booking.model.ts":
/*!*************************************************************!*\
  !*** ./libs/database/src/entities/booking/booking.model.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingModel = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const base_model_1 = __webpack_require__(/*! @libs/database/entities/base.model */ "./libs/database/src/entities/base.model.ts");
const commons_1 = __webpack_require__(/*! @libs/grpc-types/protos/commons */ "./libs/grpc-types/src/protos/commons.ts");
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
let BookingModel = class BookingModel extends base_model_1.BaseModel {
    static async updateSearch(model) {
        const columnsToConcatenate = [
            'status',
            'cancelReason',
            'serviceName',
            'startTime',
            'endTime',
            'note',
            'bookingDate',
        ];
        const concatenatedValues = columnsToConcatenate
            .map((columnName) => (model.get(columnName) ? model.get(columnName) : ' '))
            .join(' ');
        model.setDataValue('search', concatenatedValues.concat(' ', (0, core_1.toUFT8NonSpecialCharacters)(concatenatedValues)));
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", typeof (_a = typeof commons_1.EBookingStatus !== "undefined" && commons_1.EBookingStatus) === "function" ? _a : Object)
], BookingModel.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], BookingModel.prototype, "serviceName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], BookingModel.prototype, "serviceId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], BookingModel.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", Number)
], BookingModel.prototype, "userEmail", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", Number)
], BookingModel.prototype, "userPhoneNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], BookingModel.prototype, "merchantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], BookingModel.prototype, "branchId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], BookingModel.prototype, "startTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], BookingModel.prototype, "endTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], BookingModel.prototype, "note", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], BookingModel.prototype, "cancelReason", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], BookingModel.prototype, "bookingDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], BookingModel.prototype, "durationHour", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], BookingModel.prototype, "durationMinute", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], BookingModel.prototype, "duration", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], BookingModel.prototype, "search", void 0);
__decorate([
    sequelize_typescript_1.BeforeCreate,
    sequelize_typescript_1.BeforeUpdate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BookingModel]),
    __metadata("design:returntype", Promise)
], BookingModel, "updateSearch", null);
BookingModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'booking',
        tableName: 'bookings',
        underscored: true,
    })
], BookingModel);
exports.BookingModel = BookingModel;


/***/ }),

/***/ "./libs/database/src/entities/booking/index.ts":
/*!*****************************************************!*\
  !*** ./libs/database/src/entities/booking/index.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./booking.model */ "./libs/database/src/entities/booking/booking.model.ts"), exports);


/***/ }),

/***/ "./libs/database/src/entities/index.ts":
/*!*********************************************!*\
  !*** ./libs/database/src/entities/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user */ "./libs/database/src/entities/user/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./merchant */ "./libs/database/src/entities/merchant/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./booking */ "./libs/database/src/entities/booking/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./notification */ "./libs/database/src/entities/notification/index.ts"), exports);


/***/ }),

/***/ "./libs/database/src/entities/merchant/branch.model.ts":
/*!*************************************************************!*\
  !*** ./libs/database/src/entities/merchant/branch.model.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BranchModel = void 0;
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const base_model_1 = __webpack_require__(/*! ../base.model */ "./libs/database/src/entities/base.model.ts");
let BranchModel = class BranchModel extends base_model_1.BaseModel {
    static async updateSearch(model) {
        const columnsToConcatenate = ['name', 'phone', 'address', 'city', 'district', 'ward'];
        const concatenatedValues = columnsToConcatenate
            .map((columnName) => (model.get(columnName) ? model.get(columnName) : ' '))
            .join(' ');
        model.setDataValue('search', concatenatedValues.concat(' ', (0, core_1.toUFT8NonSpecialCharacters)(concatenatedValues)));
    }
    static async upsertCoordinate(model) {
        if (model.latitude && model.longitude) {
            model.coordinate = {
                type: 'Point',
                coordinates: [model.latitude, model.longitude],
            };
        }
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], BranchModel.prototype, "merchantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], BranchModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], BranchModel.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], BranchModel.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], BranchModel.prototype, "cityCode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], BranchModel.prototype, "districtCode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], BranchModel.prototype, "wardCode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], BranchModel.prototype, "city", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], BranchModel.prototype, "district", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], BranchModel.prototype, "ward", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], BranchModel.prototype, "latitude", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], BranchModel.prototype, "longitude", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.GEOMETRY('POINT'),
        allowNull: true,
    }),
    __metadata("design:type", Object)
], BranchModel.prototype, "coordinate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], BranchModel.prototype, "search", void 0);
__decorate([
    sequelize_typescript_1.BeforeCreate,
    sequelize_typescript_1.BeforeUpdate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BranchModel]),
    __metadata("design:returntype", Promise)
], BranchModel, "updateSearch", null);
__decorate([
    sequelize_typescript_1.BeforeCreate,
    sequelize_typescript_1.BeforeUpdate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BranchModel]),
    __metadata("design:returntype", Promise)
], BranchModel, "upsertCoordinate", null);
BranchModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'branch',
        tableName: 'branches',
        underscored: true,
    })
], BranchModel);
exports.BranchModel = BranchModel;


/***/ }),

/***/ "./libs/database/src/entities/merchant/group.model.ts":
/*!************************************************************!*\
  !*** ./libs/database/src/entities/merchant/group.model.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupModel = void 0;
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const base_model_1 = __webpack_require__(/*! ../base.model */ "./libs/database/src/entities/base.model.ts");
let GroupModel = class GroupModel extends base_model_1.BaseModel {
    static async updateSearch(model) {
        const columnsToConcatenate = ['name', 'code', 'sku', 'description'];
        const concatenatedValues = columnsToConcatenate
            .map((columnName) => (model.get(columnName) ? model.get(columnName) : ' '))
            .join(' ');
        model.setDataValue('search', concatenatedValues.concat(' ', (0, core_1.toUFT8NonSpecialCharacters)(concatenatedValues)));
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], GroupModel.prototype, "merchantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], GroupModel.prototype, "sku", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], GroupModel.prototype, "code", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], GroupModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], GroupModel.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], GroupModel.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], GroupModel.prototype, "search", void 0);
__decorate([
    sequelize_typescript_1.BeforeCreate,
    sequelize_typescript_1.BeforeUpdate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GroupModel]),
    __metadata("design:returntype", Promise)
], GroupModel, "updateSearch", null);
GroupModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'group',
        tableName: 'groups',
        underscored: true,
    })
], GroupModel);
exports.GroupModel = GroupModel;


/***/ }),

/***/ "./libs/database/src/entities/merchant/image.model.ts":
/*!************************************************************!*\
  !*** ./libs/database/src/entities/merchant/image.model.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageModel = void 0;
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const base_model_1 = __webpack_require__(/*! ../base.model */ "./libs/database/src/entities/base.model.ts");
let ImageModel = class ImageModel extends base_model_1.BaseModel {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], ImageModel.prototype, "description", void 0);
ImageModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'image',
        tableName: 'images',
        underscored: true,
    })
], ImageModel);
exports.ImageModel = ImageModel;


/***/ }),

/***/ "./libs/database/src/entities/merchant/index.ts":
/*!******************************************************!*\
  !*** ./libs/database/src/entities/merchant/index.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./merchant.model */ "./libs/database/src/entities/merchant/merchant.model.ts"), exports);
__exportStar(__webpack_require__(/*! ./branch.model */ "./libs/database/src/entities/merchant/branch.model.ts"), exports);
__exportStar(__webpack_require__(/*! ./group.model */ "./libs/database/src/entities/merchant/group.model.ts"), exports);
__exportStar(__webpack_require__(/*! ./service.model */ "./libs/database/src/entities/merchant/service.model.ts"), exports);
__exportStar(__webpack_require__(/*! ./image.model */ "./libs/database/src/entities/merchant/image.model.ts"), exports);
__exportStar(__webpack_require__(/*! ./serve-image.model */ "./libs/database/src/entities/merchant/serve-image.model.ts"), exports);


/***/ }),

/***/ "./libs/database/src/entities/merchant/merchant.model.ts":
/*!***************************************************************!*\
  !*** ./libs/database/src/entities/merchant/merchant.model.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MerchantModel = void 0;
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const base_model_1 = __webpack_require__(/*! ../base.model */ "./libs/database/src/entities/base.model.ts");
let MerchantModel = class MerchantModel extends base_model_1.BaseModel {
    static async updateSearch(model) {
        const columnsToConcatenate = ['name', 'phone', 'address', 'city', 'district', 'ward'];
        const concatenatedValues = columnsToConcatenate
            .map((columnName) => (model.get(columnName) ? model.get(columnName) : ' '))
            .join(' ');
        model.setDataValue('search', concatenatedValues.concat(' ', (0, core_1.toUFT8NonSpecialCharacters)(concatenatedValues)));
    }
    static async upsertCoordinate(model) {
        if (model.latitude && model.longitude) {
            model.coordinate = {
                type: 'Point',
                coordinates: [model.latitude, model.longitude],
            };
        }
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MerchantModel.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], MerchantModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], MerchantModel.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], MerchantModel.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MerchantModel.prototype, "cityCode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MerchantModel.prototype, "districtCode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MerchantModel.prototype, "wardCode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], MerchantModel.prototype, "city", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], MerchantModel.prototype, "district", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], MerchantModel.prototype, "ward", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], MerchantModel.prototype, "latitude", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], MerchantModel.prototype, "longitude", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.GEOMETRY('POINT'),
        allowNull: true,
    }),
    __metadata("design:type", Object)
], MerchantModel.prototype, "coordinate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], MerchantModel.prototype, "search", void 0);
__decorate([
    sequelize_typescript_1.BeforeCreate,
    sequelize_typescript_1.BeforeUpdate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MerchantModel]),
    __metadata("design:returntype", Promise)
], MerchantModel, "updateSearch", null);
__decorate([
    sequelize_typescript_1.BeforeCreate,
    sequelize_typescript_1.BeforeUpdate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MerchantModel]),
    __metadata("design:returntype", Promise)
], MerchantModel, "upsertCoordinate", null);
MerchantModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'merchant',
        tableName: 'merchants',
        underscored: true,
    })
], MerchantModel);
exports.MerchantModel = MerchantModel;


/***/ }),

/***/ "./libs/database/src/entities/merchant/serve-image.model.ts":
/*!******************************************************************!*\
  !*** ./libs/database/src/entities/merchant/serve-image.model.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServeImageModel = void 0;
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const base_model_1 = __webpack_require__(/*! ../base.model */ "./libs/database/src/entities/base.model.ts");
const common_1 = __webpack_require__(/*! @/api-gateway/dtos/common */ "./apps/api-gateway/src/dtos/common/index.ts");
let ServeImageModel = class ServeImageModel extends base_model_1.BaseModel {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ServeImageModel.prototype, "imageId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.SMALLINT }),
    __metadata("design:type", typeof (_a = typeof common_1.EServeImageType !== "undefined" && common_1.EServeImageType) === "function" ? _a : Object)
], ServeImageModel.prototype, "serveType", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.SMALLINT }),
    __metadata("design:type", typeof (_b = typeof common_1.EImageType !== "undefined" && common_1.EImageType) === "function" ? _b : Object)
], ServeImageModel.prototype, "type", void 0);
ServeImageModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'serve_image',
        tableName: 'serve_images',
        underscored: true,
    })
], ServeImageModel);
exports.ServeImageModel = ServeImageModel;


/***/ }),

/***/ "./libs/database/src/entities/merchant/service.model.ts":
/*!**************************************************************!*\
  !*** ./libs/database/src/entities/merchant/service.model.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceModel = void 0;
const service_1 = __webpack_require__(/*! @libs/grpc-types/protos/service */ "./libs/grpc-types/src/protos/service.ts");
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const base_model_1 = __webpack_require__(/*! ../base.model */ "./libs/database/src/entities/base.model.ts");
let ServiceModel = class ServiceModel extends base_model_1.BaseModel {
    static async updateSearch(model) {
        const columnsToConcatenate = ['name', 'code', 'sku', 'price', 'initialPrice', 'description'];
        const concatenatedValues = columnsToConcatenate
            .map((columnName) => (model.get(columnName) ? model.get(columnName) : ' '))
            .join(' ');
        model.setDataValue('search', concatenatedValues.concat(' ', (0, core_1.toUFT8NonSpecialCharacters)(concatenatedValues)));
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], ServiceModel.prototype, "groupId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ServiceModel.prototype, "merchantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DOUBLE, defaultValue: 0 }),
    __metadata("design:type", Number)
], ServiceModel.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DOUBLE, defaultValue: 0 }),
    __metadata("design:type", Number)
], ServiceModel.prototype, "initialPrice", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ServiceModel.prototype, "durationHour", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ServiceModel.prototype, "durationMinute", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], ServiceModel.prototype, "sku", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], ServiceModel.prototype, "code", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], ServiceModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], ServiceModel.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], ServiceModel.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", typeof (_a = typeof service_1.EServiceType !== "undefined" && service_1.EServiceType) === "function" ? _a : Object)
], ServiceModel.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", typeof (_b = typeof service_1.EServiceShowType !== "undefined" && service_1.EServiceShowType) === "function" ? _b : Object)
], ServiceModel.prototype, "showType", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN }),
    __metadata("design:type", Boolean)
], ServiceModel.prototype, "canPrintableInvoice", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], ServiceModel.prototype, "search", void 0);
__decorate([
    sequelize_typescript_1.BeforeCreate,
    sequelize_typescript_1.BeforeUpdate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceModel]),
    __metadata("design:returntype", Promise)
], ServiceModel, "updateSearch", null);
ServiceModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'service',
        tableName: 'services',
        underscored: true,
    })
], ServiceModel);
exports.ServiceModel = ServiceModel;


/***/ }),

/***/ "./libs/database/src/entities/notification/index.ts":
/*!**********************************************************!*\
  !*** ./libs/database/src/entities/notification/index.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./notification.model */ "./libs/database/src/entities/notification/notification.model.ts"), exports);


/***/ }),

/***/ "./libs/database/src/entities/notification/notification.model.ts":
/*!***********************************************************************!*\
  !*** ./libs/database/src/entities/notification/notification.model.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationModel = void 0;
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const base_model_1 = __webpack_require__(/*! ../base.model */ "./libs/database/src/entities/base.model.ts");
const dtos_1 = __webpack_require__(/*! @/api-gateway/dtos */ "./apps/api-gateway/src/dtos/index.ts");
let NotificationModel = class NotificationModel extends base_model_1.BaseModel {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], NotificationModel.prototype, "senderId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], NotificationModel.prototype, "titleEn", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], NotificationModel.prototype, "titleVi", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], NotificationModel.prototype, "bodyEn", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], NotificationModel.prototype, "bodyVi", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", typeof (_a = typeof dtos_1.ENotificationType !== "undefined" && dtos_1.ENotificationType) === "function" ? _a : Object)
], NotificationModel.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], NotificationModel.prototype, "data_json", void 0);
NotificationModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'notification',
        tableName: 'notifications',
        underscored: true,
    })
], NotificationModel);
exports.NotificationModel = NotificationModel;


/***/ }),

/***/ "./libs/database/src/entities/user/device.model.ts":
/*!*********************************************************!*\
  !*** ./libs/database/src/entities/user/device.model.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceModel = void 0;
const device_1 = __webpack_require__(/*! @libs/grpc-types/protos/device */ "./libs/grpc-types/src/protos/device.ts");
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const base_model_1 = __webpack_require__(/*! ../base.model */ "./libs/database/src/entities/base.model.ts");
let DeviceModel = class DeviceModel extends base_model_1.BaseModel {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], DeviceModel.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", typeof (_a = typeof device_1.EDeviceOs !== "undefined" && device_1.EDeviceOs) === "function" ? _a : Object)
], DeviceModel.prototype, "os", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], DeviceModel.prototype, "deviceId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], DeviceModel.prototype, "token", void 0);
DeviceModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'device',
        tableName: 'devices',
        underscored: true,
    })
], DeviceModel);
exports.DeviceModel = DeviceModel;


/***/ }),

/***/ "./libs/database/src/entities/user/index.ts":
/*!**************************************************!*\
  !*** ./libs/database/src/entities/user/index.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user.model */ "./libs/database/src/entities/user/user.model.ts"), exports);
__exportStar(__webpack_require__(/*! ./device.model */ "./libs/database/src/entities/user/device.model.ts"), exports);
__exportStar(__webpack_require__(/*! ./merchant-user.model */ "./libs/database/src/entities/user/merchant-user.model.ts"), exports);


/***/ }),

/***/ "./libs/database/src/entities/user/merchant-user.model.ts":
/*!****************************************************************!*\
  !*** ./libs/database/src/entities/user/merchant-user.model.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MerchantUserModel = void 0;
const commons_1 = __webpack_require__(/*! @libs/grpc-types/protos/commons */ "./libs/grpc-types/src/protos/commons.ts");
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const base_model_1 = __webpack_require__(/*! ../base.model */ "./libs/database/src/entities/base.model.ts");
let MerchantUserModel = class MerchantUserModel extends base_model_1.BaseModel {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", typeof (_a = typeof commons_1.EUserRole !== "undefined" && commons_1.EUserRole) === "function" ? _a : Object)
], MerchantUserModel.prototype, "role", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", typeof (_b = typeof commons_1.EUserStatus !== "undefined" && commons_1.EUserStatus) === "function" ? _b : Object)
], MerchantUserModel.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MerchantUserModel.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MerchantUserModel.prototype, "branchId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MerchantUserModel.prototype, "merchantId", void 0);
MerchantUserModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'merchant_user',
        tableName: 'merchant_users',
        underscored: true,
    })
], MerchantUserModel);
exports.MerchantUserModel = MerchantUserModel;


/***/ }),

/***/ "./libs/database/src/entities/user/user.model.ts":
/*!*******************************************************!*\
  !*** ./libs/database/src/entities/user/user.model.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModel = void 0;
const commons_1 = __webpack_require__(/*! @libs/grpc-types/protos/commons */ "./libs/grpc-types/src/protos/commons.ts");
const argon2_1 = __webpack_require__(/*! argon2 */ "argon2");
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const base_model_1 = __webpack_require__(/*! ../base.model */ "./libs/database/src/entities/base.model.ts");
let UserModel = class UserModel extends base_model_1.BaseModel {
    static async hashPassword(user) {
        if (!user.password)
            return;
        user.password = await (0, argon2_1.hash)(user.password);
    }
    static async updateSearch(model) {
        const columnsToConcatenate = ['email', 'fullName', 'contact', 'phoneNumber', 'address'];
        const concatenatedValues = columnsToConcatenate
            .map((columnName) => (model.get(columnName) ? model.get(columnName) : ' '))
            .join(' ');
        model.setDataValue('search', concatenatedValues.concat(' ', (0, core_1.toUFT8NonSpecialCharacters)(concatenatedValues)));
    }
    static async upsertCoordinate(model) {
        if (model.latitude && model.longitude) {
            model.coordinate = {
                type: 'Point',
                coordinates: [model.latitude, model.longitude],
            };
        }
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", typeof (_a = typeof commons_1.EUserRole !== "undefined" && commons_1.EUserRole) === "function" ? _a : Object)
], UserModel.prototype, "role", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", typeof (_b = typeof commons_1.EUserStatus !== "undefined" && commons_1.EUserStatus) === "function" ? _b : Object)
], UserModel.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", typeof (_c = typeof commons_1.EUserGender !== "undefined" && commons_1.EUserGender) === "function" ? _c : Object)
], UserModel.prototype, "gender", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "fullName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN }),
    __metadata("design:type", Boolean)
], UserModel.prototype, "isRetailCustomer", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "contact", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "phoneNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], UserModel.prototype, "dobDay", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], UserModel.prototype, "dobMonth", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], UserModel.prototype, "dobYear", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "occupation", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "avatar", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", Number)
], UserModel.prototype, "cityCode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", Number)
], UserModel.prototype, "districtCode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", Number)
], UserModel.prototype, "wardCode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", typeof (_d = typeof commons_1.ECustomerLevel !== "undefined" && commons_1.ECustomerLevel) === "function" ? _d : Object)
], UserModel.prototype, "level", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "referrer", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "referrerCode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "customerCode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "facebook", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "zaloPhone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], UserModel.prototype, "height", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], UserModel.prototype, "weight", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "memberCardNo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "company", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "taxNo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "note", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "relatedUser", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "relatedUserRole", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], UserModel.prototype, "relatedUserPhone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], UserModel.prototype, "branchId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], UserModel.prototype, "merchantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], UserModel.prototype, "latitude", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], UserModel.prototype, "longitude", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.GEOMETRY('POINT'),
        allowNull: true,
    }),
    __metadata("design:type", Object)
], UserModel.prototype, "coordinate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], UserModel.prototype, "search", void 0);
__decorate([
    sequelize_typescript_1.BeforeCreate,
    sequelize_typescript_1.BeforeUpdate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserModel]),
    __metadata("design:returntype", Promise)
], UserModel, "hashPassword", null);
__decorate([
    sequelize_typescript_1.BeforeCreate,
    sequelize_typescript_1.BeforeUpdate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserModel]),
    __metadata("design:returntype", Promise)
], UserModel, "updateSearch", null);
__decorate([
    sequelize_typescript_1.BeforeCreate,
    sequelize_typescript_1.BeforeUpdate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserModel]),
    __metadata("design:returntype", Promise)
], UserModel, "upsertCoordinate", null);
UserModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'user',
        tableName: 'users',
        underscored: true,
    })
], UserModel);
exports.UserModel = UserModel;


/***/ }),

/***/ "./libs/database/src/index.ts":
/*!************************************!*\
  !*** ./libs/database/src/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./connection */ "./libs/database/src/connection/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./entities */ "./libs/database/src/entities/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./repositories */ "./libs/database/src/repositories/index.ts"), exports);


/***/ }),

/***/ "./libs/database/src/repositories/base.repository.ts":
/*!***********************************************************!*\
  !*** ./libs/database/src/repositories/base.repository.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseRepository = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    async find(options) {
        return await this.model.findAll(options);
    }
    async findOne(options) {
        return await this.model.findOne(options);
    }
    async findById(id, options) {
        return await this.model.findByPk(id, options);
    }
    async paginate(options, page = core_1.PAGE, limit = core_1.LIMIT, opts) {
        const offset = (page - 1) * limit;
        const { rows, count } = await this.rawPaginate(Object.assign({ where: Object.assign({}, options), offset,
            limit }, opts));
        return {
            items: rows,
            meta: {
                total: count,
                totalPage: Math.ceil(count / core_1.LIMIT),
                page,
                limit,
            },
        };
    }
    async rawPaginate(options) {
        return await this.model.findAndCountAll(options);
    }
    async create(entity, opts) {
        const res = await this.model.create(entity, opts);
        return res.toJSON();
    }
    async update(entity, opts) {
        const [affectedCount, affectedRows] = await this.model.update(entity, Object.assign(Object.assign({}, opts), { returning: true }));
        return affectedRows;
    }
    async delete(conditions) {
        return await this.model.destroy(conditions);
    }
    async raw(query) {
        return await this.model.sequelize.query(query);
    }
    getModel() {
        return this.model;
    }
    async count(options) {
        const result = await this.model.count(options);
        return result;
    }
    async findAndPaginate(query, opts) {
        const result = await this.paginate(query.where, query.page, query.limit, opts);
        return result;
    }
    async countByGrpc(query) {
        const where = !(0, lodash_1.isEmpty)(query.where) ? JSON.parse(query.where) : undefined;
        const result = await this.count(Object.assign(Object.assign({}, query), { where }));
        return result;
    }
}
exports.BaseRepository = BaseRepository;


/***/ }),

/***/ "./libs/database/src/repositories/booking/booking.repository.ts":
/*!**********************************************************************!*\
  !*** ./libs/database/src/repositories/booking/booking.repository.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const database_1 = __webpack_require__(/*! @libs/database */ "./libs/database/src/index.ts");
const base_repository_1 = __webpack_require__(/*! ../base.repository */ "./libs/database/src/repositories/base.repository.ts");
let BookingRepository = class BookingRepository extends base_repository_1.BaseRepository {
    constructor(model) {
        super(model);
        this.model = model;
    }
};
BookingRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(database_1.BookingModel)),
    __metadata("design:paramtypes", [Object])
], BookingRepository);
exports.BookingRepository = BookingRepository;


/***/ }),

/***/ "./libs/database/src/repositories/booking/index.ts":
/*!*********************************************************!*\
  !*** ./libs/database/src/repositories/booking/index.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./booking.repository */ "./libs/database/src/repositories/booking/booking.repository.ts"), exports);


/***/ }),

/***/ "./libs/database/src/repositories/index.ts":
/*!*************************************************!*\
  !*** ./libs/database/src/repositories/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user */ "./libs/database/src/repositories/user/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./merchant */ "./libs/database/src/repositories/merchant/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./booking */ "./libs/database/src/repositories/booking/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./notification */ "./libs/database/src/repositories/notification/index.ts"), exports);


/***/ }),

/***/ "./libs/database/src/repositories/merchant/branch.repository.ts":
/*!**********************************************************************!*\
  !*** ./libs/database/src/repositories/merchant/branch.repository.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BranchRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const entities_1 = __webpack_require__(/*! ../../entities */ "./libs/database/src/entities/index.ts");
const base_repository_1 = __webpack_require__(/*! ../base.repository */ "./libs/database/src/repositories/base.repository.ts");
let BranchRepository = class BranchRepository extends base_repository_1.BaseRepository {
    constructor(model) {
        super(model);
        this.model = model;
    }
    async findWithPaging(options, findOptions) {
        return;
    }
};
BranchRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(entities_1.BranchModel)),
    __metadata("design:paramtypes", [Object])
], BranchRepository);
exports.BranchRepository = BranchRepository;


/***/ }),

/***/ "./libs/database/src/repositories/merchant/group.repository.ts":
/*!*********************************************************************!*\
  !*** ./libs/database/src/repositories/merchant/group.repository.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const entities_1 = __webpack_require__(/*! ../../entities */ "./libs/database/src/entities/index.ts");
const base_repository_1 = __webpack_require__(/*! ../base.repository */ "./libs/database/src/repositories/base.repository.ts");
let GroupRepository = class GroupRepository extends base_repository_1.BaseRepository {
    constructor(model) {
        super(model);
        this.model = model;
    }
};
GroupRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(entities_1.GroupModel)),
    __metadata("design:paramtypes", [Object])
], GroupRepository);
exports.GroupRepository = GroupRepository;


/***/ }),

/***/ "./libs/database/src/repositories/merchant/index.ts":
/*!**********************************************************!*\
  !*** ./libs/database/src/repositories/merchant/index.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./merchant.repository */ "./libs/database/src/repositories/merchant/merchant.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./group.repository */ "./libs/database/src/repositories/merchant/group.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./branch.repository */ "./libs/database/src/repositories/merchant/branch.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./service.repository */ "./libs/database/src/repositories/merchant/service.repository.ts"), exports);


/***/ }),

/***/ "./libs/database/src/repositories/merchant/merchant.repository.ts":
/*!************************************************************************!*\
  !*** ./libs/database/src/repositories/merchant/merchant.repository.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MerchantRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const entities_1 = __webpack_require__(/*! ../../entities */ "./libs/database/src/entities/index.ts");
const base_repository_1 = __webpack_require__(/*! ../base.repository */ "./libs/database/src/repositories/base.repository.ts");
let MerchantRepository = class MerchantRepository extends base_repository_1.BaseRepository {
    constructor(model) {
        super(model);
        this.model = model;
    }
    async findWithPaging(options, findOptions) {
        return;
    }
};
MerchantRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(entities_1.MerchantModel)),
    __metadata("design:paramtypes", [Object])
], MerchantRepository);
exports.MerchantRepository = MerchantRepository;


/***/ }),

/***/ "./libs/database/src/repositories/merchant/service.repository.ts":
/*!***********************************************************************!*\
  !*** ./libs/database/src/repositories/merchant/service.repository.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const entities_1 = __webpack_require__(/*! ../../entities */ "./libs/database/src/entities/index.ts");
const base_repository_1 = __webpack_require__(/*! ../base.repository */ "./libs/database/src/repositories/base.repository.ts");
let ServiceRepository = class ServiceRepository extends base_repository_1.BaseRepository {
    constructor(model) {
        super(model);
        this.model = model;
    }
};
ServiceRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(entities_1.ServiceModel)),
    __metadata("design:paramtypes", [Object])
], ServiceRepository);
exports.ServiceRepository = ServiceRepository;


/***/ }),

/***/ "./libs/database/src/repositories/notification/index.ts":
/*!**************************************************************!*\
  !*** ./libs/database/src/repositories/notification/index.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./notification.repository */ "./libs/database/src/repositories/notification/notification.repository.ts"), exports);


/***/ }),

/***/ "./libs/database/src/repositories/notification/notification.repository.ts":
/*!********************************************************************************!*\
  !*** ./libs/database/src/repositories/notification/notification.repository.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const entities_1 = __webpack_require__(/*! ../../entities */ "./libs/database/src/entities/index.ts");
const base_repository_1 = __webpack_require__(/*! ../base.repository */ "./libs/database/src/repositories/base.repository.ts");
let NotificationRepository = class NotificationRepository extends base_repository_1.BaseRepository {
    constructor(model) {
        super(model);
        this.model = model;
    }
};
NotificationRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(entities_1.NotificationModel)),
    __metadata("design:paramtypes", [Object])
], NotificationRepository);
exports.NotificationRepository = NotificationRepository;


/***/ }),

/***/ "./libs/database/src/repositories/user/device.repository.ts":
/*!******************************************************************!*\
  !*** ./libs/database/src/repositories/user/device.repository.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const entities_1 = __webpack_require__(/*! ../../entities */ "./libs/database/src/entities/index.ts");
const base_repository_1 = __webpack_require__(/*! ../base.repository */ "./libs/database/src/repositories/base.repository.ts");
let DeviceRepository = class DeviceRepository extends base_repository_1.BaseRepository {
    constructor(model) {
        super(model);
        this.model = model;
    }
    async findAndPaginate(query, opts) {
        const result = await this.paginate(query.where, query.page, query.limit, opts);
        return result;
    }
};
DeviceRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(entities_1.DeviceModel)),
    __metadata("design:paramtypes", [Object])
], DeviceRepository);
exports.DeviceRepository = DeviceRepository;


/***/ }),

/***/ "./libs/database/src/repositories/user/index.ts":
/*!******************************************************!*\
  !*** ./libs/database/src/repositories/user/index.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user.repository */ "./libs/database/src/repositories/user/user.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./device.repository */ "./libs/database/src/repositories/user/device.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./merchant-user.repository */ "./libs/database/src/repositories/user/merchant-user.repository.ts"), exports);


/***/ }),

/***/ "./libs/database/src/repositories/user/merchant-user.repository.ts":
/*!*************************************************************************!*\
  !*** ./libs/database/src/repositories/user/merchant-user.repository.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MerchantUserRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const entities_1 = __webpack_require__(/*! ../../entities */ "./libs/database/src/entities/index.ts");
const base_repository_1 = __webpack_require__(/*! ../base.repository */ "./libs/database/src/repositories/base.repository.ts");
let MerchantUserRepository = class MerchantUserRepository extends base_repository_1.BaseRepository {
    constructor(model) {
        super(model);
        this.model = model;
    }
    async findWithPaging(options, findOptions) {
        return;
    }
};
MerchantUserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(entities_1.MerchantUserModel)),
    __metadata("design:paramtypes", [Object])
], MerchantUserRepository);
exports.MerchantUserRepository = MerchantUserRepository;


/***/ }),

/***/ "./libs/database/src/repositories/user/user.repository.ts":
/*!****************************************************************!*\
  !*** ./libs/database/src/repositories/user/user.repository.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const entities_1 = __webpack_require__(/*! ../../entities */ "./libs/database/src/entities/index.ts");
const base_repository_1 = __webpack_require__(/*! ../base.repository */ "./libs/database/src/repositories/base.repository.ts");
let UserRepository = class UserRepository extends base_repository_1.BaseRepository {
    constructor(model) {
        super(model);
        this.model = model;
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(entities_1.UserModel)),
    __metadata("design:paramtypes", [Object])
], UserRepository);
exports.UserRepository = UserRepository;


/***/ }),

/***/ "./libs/exceptions/src/index.ts":
/*!**************************************!*\
  !*** ./libs/exceptions/src/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./lib/exceptions/index */ "./libs/exceptions/src/lib/exceptions/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./lib/error-codes */ "./libs/exceptions/src/lib/error-codes.ts"), exports);


/***/ }),

/***/ "./libs/exceptions/src/lib/error-codes.ts":
/*!************************************************!*\
  !*** ./libs/exceptions/src/lib/error-codes.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorCodes = void 0;
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["GENERAL_SERVER_ERROR"] = 500100] = "GENERAL_SERVER_ERROR";
    ErrorCodes[ErrorCodes["USERNAME_ALREADY_TAKEN"] = 500101] = "USERNAME_ALREADY_TAKEN";
    ErrorCodes[ErrorCodes["INVALID_CREDENTIALS"] = 500102] = "INVALID_CREDENTIALS";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));


/***/ }),

/***/ "./libs/exceptions/src/lib/exceptions/custom.exception.ts":
/*!****************************************************************!*\
  !*** ./libs/exceptions/src/lib/exceptions/custom.exception.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomException = void 0;
class CustomException {
    constructor(message, httpStatusCode, errorCode) {
        this.isCustomError = true;
        this.message = message;
        this.httpStatusCode = httpStatusCode;
        this.errorCode = errorCode;
    }
}
exports.CustomException = CustomException;


/***/ }),

/***/ "./libs/exceptions/src/lib/exceptions/general-server-error.exception.ts":
/*!******************************************************************************!*\
  !*** ./libs/exceptions/src/lib/exceptions/general-server-error.exception.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeneralServerErrorException = void 0;
const custom_exception_1 = __webpack_require__(/*! exceptions/exceptions/lib/exceptions/custom.exception */ "./libs/exceptions/src/lib/exceptions/custom.exception.ts");
const error_codes_1 = __webpack_require__(/*! exceptions/exceptions/lib/error-codes */ "./libs/exceptions/src/lib/error-codes.ts");
class GeneralServerErrorException extends custom_exception_1.CustomException {
    constructor() {
        super('General server error', 500, error_codes_1.ErrorCodes.GENERAL_SERVER_ERROR);
    }
}
exports.GeneralServerErrorException = GeneralServerErrorException;


/***/ }),

/***/ "./libs/exceptions/src/lib/exceptions/index.ts":
/*!*****************************************************!*\
  !*** ./libs/exceptions/src/lib/exceptions/index.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./custom.exception */ "./libs/exceptions/src/lib/exceptions/custom.exception.ts"), exports);
__exportStar(__webpack_require__(/*! ./general-server-error.exception */ "./libs/exceptions/src/lib/exceptions/general-server-error.exception.ts"), exports);
__exportStar(__webpack_require__(/*! ./username-already-taken.exception */ "./libs/exceptions/src/lib/exceptions/username-already-taken.exception.ts"), exports);
__exportStar(__webpack_require__(/*! ./invalid-credentials.exception */ "./libs/exceptions/src/lib/exceptions/invalid-credentials.exception.ts"), exports);


/***/ }),

/***/ "./libs/exceptions/src/lib/exceptions/invalid-credentials.exception.ts":
/*!*****************************************************************************!*\
  !*** ./libs/exceptions/src/lib/exceptions/invalid-credentials.exception.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvalidCredentialsException = void 0;
const custom_exception_1 = __webpack_require__(/*! exceptions/exceptions/lib/exceptions/custom.exception */ "./libs/exceptions/src/lib/exceptions/custom.exception.ts");
const error_codes_1 = __webpack_require__(/*! exceptions/exceptions/lib/error-codes */ "./libs/exceptions/src/lib/error-codes.ts");
class InvalidCredentialsException extends custom_exception_1.CustomException {
    constructor() {
        super('Invalid Credentials', 500, error_codes_1.ErrorCodes.INVALID_CREDENTIALS);
    }
}
exports.InvalidCredentialsException = InvalidCredentialsException;


/***/ }),

/***/ "./libs/exceptions/src/lib/exceptions/username-already-taken.exception.ts":
/*!********************************************************************************!*\
  !*** ./libs/exceptions/src/lib/exceptions/username-already-taken.exception.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NicknameAlreadyTakenException = void 0;
const custom_exception_1 = __webpack_require__(/*! exceptions/exceptions/lib/exceptions/custom.exception */ "./libs/exceptions/src/lib/exceptions/custom.exception.ts");
const error_codes_1 = __webpack_require__(/*! exceptions/exceptions/lib/error-codes */ "./libs/exceptions/src/lib/error-codes.ts");
class NicknameAlreadyTakenException extends custom_exception_1.CustomException {
    constructor() {
        super('Nickname is already taken', 500, error_codes_1.ErrorCodes.USERNAME_ALREADY_TAKEN);
    }
}
exports.NicknameAlreadyTakenException = NicknameAlreadyTakenException;


/***/ }),

/***/ "./libs/filters/src/all.exceptions.filter.ts":
/*!***************************************************!*\
  !*** ./libs/filters/src/all.exceptions.filter.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AllExceptionsFilter_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllExceptionsFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const exceptions_1 = __webpack_require__(/*! exceptions/exceptions */ "./libs/exceptions/src/index.ts");
const grpc_types_1 = __webpack_require__(/*! @libs/grpc-types */ "./libs/grpc-types/src/index.ts");
let AllExceptionsFilter = AllExceptionsFilter_1 = class AllExceptionsFilter {
    constructor() {
        this.logger = new common_1.Logger(AllExceptionsFilter_1.name);
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        if (exception.metadata) {
            try {
                exception = JSON.parse(exception.metadata.get(grpc_types_1.GrpcMetadataErrorKey)[0]);
            }
            catch (e) {
                this.logger.error(`[GRPC UNHANDLED ERROR]: [${exception === null || exception === void 0 ? void 0 : exception.message}] :-> `, JSON.stringify(exception));
                exception = new exceptions_1.GeneralServerErrorException();
            }
        }
        else if (!exception.isCustomError) {
            this.logger.error(`[UNHANDLED ERROR]: [${exception === null || exception === void 0 ? void 0 : exception.message}] :-> `, JSON.stringify(exception));
            exception = new exceptions_1.GeneralServerErrorException();
        }
        else {
            this.logger.error(`[ERROR:${exception.errorCode}] ${exception.message.toUpperCase()}`);
        }
        response.status(500).json({
            meta: {
                headers: request.headers,
                params: request.params,
                status: request.status,
                errorCode: exception.errorCode,
                errorMessage: exception.message,
                timestamp: new Date(),
            },
            result: exception,
        });
    }
};
AllExceptionsFilter = AllExceptionsFilter_1 = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;


/***/ }),

/***/ "./libs/filters/src/grpc-all.exceptions.filter.ts":
/*!********************************************************!*\
  !*** ./libs/filters/src/grpc-all.exceptions.filter.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GrpcAllExceptionsFilter_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrpcAllExceptionsFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const grpc_js_1 = __webpack_require__(/*! @grpc/grpc-js */ "@grpc/grpc-js");
const exceptions_1 = __webpack_require__(/*! exceptions/exceptions */ "./libs/exceptions/src/index.ts");
const grpc_types_1 = __webpack_require__(/*! @libs/grpc-types */ "./libs/grpc-types/src/index.ts");
let GrpcAllExceptionsFilter = GrpcAllExceptionsFilter_1 = class GrpcAllExceptionsFilter extends microservices_1.BaseRpcExceptionFilter {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger(GrpcAllExceptionsFilter_1.name);
    }
    catch(exception, host) {
        if (!exception.isCustomError) {
            exception = new exceptions_1.GeneralServerErrorException();
        }
        this.logger.error(`[ERROR: ${exception.errorCode}] ${exception.message}`);
        const errorMetadata = new grpc_js_1.Metadata();
        errorMetadata.add(grpc_types_1.GrpcMetadataErrorKey, JSON.stringify(exception));
        exception.metadata = errorMetadata;
        return (0, rxjs_1.throwError)(() => exception);
    }
};
GrpcAllExceptionsFilter = GrpcAllExceptionsFilter_1 = __decorate([
    (0, common_1.Catch)()
], GrpcAllExceptionsFilter);
exports.GrpcAllExceptionsFilter = GrpcAllExceptionsFilter;


/***/ }),

/***/ "./libs/filters/src/index.ts":
/*!***********************************!*\
  !*** ./libs/filters/src/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./all.exceptions.filter */ "./libs/filters/src/all.exceptions.filter.ts"), exports);
__exportStar(__webpack_require__(/*! ./grpc-all.exceptions.filter */ "./libs/filters/src/grpc-all.exceptions.filter.ts"), exports);


/***/ }),

/***/ "./libs/grpc-types/src/clients.ts":
/*!****************************************!*\
  !*** ./libs/grpc-types/src/clients.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationClient = exports.BookingClient = exports.MerchantClient = exports.UserClient = void 0;
const grpc_types_1 = __webpack_require__(/*! @libs/grpc-types */ "./libs/grpc-types/src/index.ts");
const booking_1 = __webpack_require__(/*! @libs/grpc-types/protos/booking */ "./libs/grpc-types/src/protos/booking.ts");
const merchant_1 = __webpack_require__(/*! @libs/grpc-types/protos/merchant */ "./libs/grpc-types/src/protos/merchant.ts");
const notification_1 = __webpack_require__(/*! @libs/grpc-types/protos/notification */ "./libs/grpc-types/src/protos/notification.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
exports.UserClient = {
    name: grpc_types_1.UserProto.DUCPH_USER_PACKAGE_NAME,
    transport: microservices_1.Transport.GRPC,
    options: {
        package: grpc_types_1.UserProto.DUCPH_USER_PACKAGE_NAME,
        protoPath: grpc_types_1.UserConfig.path,
        url: `${grpc_types_1.UserConfig.localHostname}:${grpc_types_1.UserConfig.port}`,
        loader: grpc_types_1.UserConfig.loader,
    },
};
exports.MerchantClient = {
    name: merchant_1.MERCHANT_PACKAGE_NAME,
    transport: microservices_1.Transport.GRPC,
    options: {
        package: merchant_1.MERCHANT_PACKAGE_NAME,
        protoPath: grpc_types_1.MerchantConfig.path,
        url: `${grpc_types_1.MerchantConfig.localHostname}:${grpc_types_1.MerchantConfig.port}`,
        loader: grpc_types_1.MerchantConfig.loader,
    },
};
exports.BookingClient = {
    name: booking_1.BOOKING_PACKAGE_NAME,
    transport: microservices_1.Transport.GRPC,
    options: {
        package: booking_1.BOOKING_PACKAGE_NAME,
        protoPath: grpc_types_1.BookingConfig.path,
        url: `${grpc_types_1.BookingConfig.localHostname}:${grpc_types_1.BookingConfig.port}`,
        loader: grpc_types_1.BookingConfig.loader,
    },
};
exports.NotificationClient = {
    name: notification_1.NOTIFICATION_PACKAGE_NAME,
    transport: microservices_1.Transport.GRPC,
    options: {
        package: notification_1.NOTIFICATION_PACKAGE_NAME,
        protoPath: grpc_types_1.NotificationConfig.path,
        url: `${grpc_types_1.NotificationConfig.localHostname}:${grpc_types_1.NotificationConfig.port}`,
        loader: grpc_types_1.NotificationConfig.loader,
    },
};


/***/ }),

/***/ "./libs/grpc-types/src/config.ts":
/*!***************************************!*\
  !*** ./libs/grpc-types/src/config.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationConfig = exports.BookingConfig = exports.MerchantConfig = exports.UserConfig = void 0;
const path_1 = __webpack_require__(/*! path */ "path");
exports.UserConfig = {
    hostname: 'user-service',
    localHostname: '0.0.0.0',
    port: 50006,
    path: (0, path_1.resolve)('libs/grpc-types/src/protos', 'user.proto'),
    loader: {
        keepCase: true,
        longs: Number,
        enums: Number,
        arrays: true,
    },
};
exports.MerchantConfig = {
    hostname: 'merchant-service',
    localHostname: '0.0.0.0',
    port: 50008,
    path: (0, path_1.resolve)('libs/grpc-types/src/protos', 'merchant.proto'),
    loader: {
        keepCase: true,
        longs: Number,
        enums: Number,
        arrays: true,
    },
};
exports.BookingConfig = {
    hostname: 'booking-service',
    localHostname: '0.0.0.0',
    port: 50010,
    path: (0, path_1.resolve)('libs/grpc-types/src/protos', 'booking.proto'),
    loader: {
        keepCase: true,
        longs: Number,
        enums: Number,
        arrays: true,
    },
};
exports.NotificationConfig = {
    hostname: 'notification-service',
    localHostname: '0.0.0.0',
    port: 50012,
    path: (0, path_1.resolve)('libs/grpc-types/src/protos', 'notification.proto'),
    loader: {
        keepCase: true,
        longs: Number,
        enums: Number,
        arrays: true,
    },
};


/***/ }),

/***/ "./libs/grpc-types/src/index.ts":
/*!**************************************!*\
  !*** ./libs/grpc-types/src/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrpcMetadataErrorKey = exports.NotificationProto = exports.MerchantUserProto = exports.DeviceProto = exports.BranchProto = exports.BookingProto = exports.MerchantProto = exports.UserProto = exports.CommonProto = void 0;
const UserProto = __webpack_require__(/*! ./protos/user */ "./libs/grpc-types/src/protos/user.ts");
exports.UserProto = UserProto;
const CommonProto = __webpack_require__(/*! ./protos/commons */ "./libs/grpc-types/src/protos/commons.ts");
exports.CommonProto = CommonProto;
const MerchantProto = __webpack_require__(/*! ./protos/merchant */ "./libs/grpc-types/src/protos/merchant.ts");
exports.MerchantProto = MerchantProto;
const BookingProto = __webpack_require__(/*! ./protos/booking */ "./libs/grpc-types/src/protos/booking.ts");
exports.BookingProto = BookingProto;
const BranchProto = __webpack_require__(/*! ./protos/branch */ "./libs/grpc-types/src/protos/branch.ts");
exports.BranchProto = BranchProto;
const DeviceProto = __webpack_require__(/*! ./protos/device */ "./libs/grpc-types/src/protos/device.ts");
exports.DeviceProto = DeviceProto;
const MerchantUserProto = __webpack_require__(/*! ./protos/merchant_user */ "./libs/grpc-types/src/protos/merchant_user.ts");
exports.MerchantUserProto = MerchantUserProto;
const NotificationProto = __webpack_require__(/*! ./protos/notification */ "./libs/grpc-types/src/protos/notification.ts");
exports.NotificationProto = NotificationProto;
__exportStar(__webpack_require__(/*! ./config */ "./libs/grpc-types/src/config.ts"), exports);
__exportStar(__webpack_require__(/*! ./servers */ "./libs/grpc-types/src/servers.ts"), exports);
__exportStar(__webpack_require__(/*! ./clients */ "./libs/grpc-types/src/clients.ts"), exports);
exports.GrpcMetadataErrorKey = 'custom-grpc-error';


/***/ }),

/***/ "./libs/grpc-types/src/protos/booking.ts":
/*!***********************************************!*\
  !*** ./libs/grpc-types/src/protos/booking.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BOOKING_SERVICE_NAME = exports.BookingServiceControllerMethods = exports.BOOKING_PACKAGE_NAME = exports.protobufPackage = void 0;
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
exports.protobufPackage = "booking";
exports.BOOKING_PACKAGE_NAME = "booking";
function BookingServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["find", "findById", "findOne", "count", "create", "update", "delete"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("BookingService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("BookingService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.BookingServiceControllerMethods = BookingServiceControllerMethods;
exports.BOOKING_SERVICE_NAME = "BookingService";


/***/ }),

/***/ "./libs/grpc-types/src/protos/branch.ts":
/*!**********************************************!*\
  !*** ./libs/grpc-types/src/protos/branch.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BRANCH_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.protobufPackage = "branch";
exports.BRANCH_PACKAGE_NAME = "branch";


/***/ }),

/***/ "./libs/grpc-types/src/protos/commons.ts":
/*!***********************************************!*\
  !*** ./libs/grpc-types/src/protos/commons.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COMMONS_PACKAGE_NAME = exports.Sort_SortNulls = exports.EBookingStatus = exports.ENotificationType = exports.EUserStatus = exports.ECustomerLevel = exports.EUserRole = exports.EUserGender = exports.ESortDirection = exports.protobufPackage = void 0;
exports.protobufPackage = "commons";
var ESortDirection;
(function (ESortDirection) {
    ESortDirection[ESortDirection["ASC"] = 0] = "ASC";
    ESortDirection[ESortDirection["DESC"] = 1] = "DESC";
})(ESortDirection = exports.ESortDirection || (exports.ESortDirection = {}));
var EUserGender;
(function (EUserGender) {
    EUserGender[EUserGender["MALE"] = 0] = "MALE";
    EUserGender[EUserGender["FEMALE"] = 1] = "FEMALE";
    EUserGender[EUserGender["OTHER"] = 2] = "OTHER";
})(EUserGender = exports.EUserGender || (exports.EUserGender = {}));
var EUserRole;
(function (EUserRole) {
    EUserRole[EUserRole["USER"] = 0] = "USER";
    EUserRole[EUserRole["ADMIN"] = 1] = "ADMIN";
    EUserRole[EUserRole["SUPER_ADMIN"] = 2] = "SUPER_ADMIN";
    EUserRole[EUserRole["MASTER_WORKER"] = 3] = "MASTER_WORKER";
    EUserRole[EUserRole["ASSISTANT_WORKER"] = 4] = "ASSISTANT_WORKER";
    EUserRole[EUserRole["MANAGER"] = 5] = "MANAGER";
    EUserRole[EUserRole["RECEPTIONIST"] = 6] = "RECEPTIONIST";
})(EUserRole = exports.EUserRole || (exports.EUserRole = {}));
var ECustomerLevel;
(function (ECustomerLevel) {
    ECustomerLevel[ECustomerLevel["NORMAL"] = 0] = "NORMAL";
    ECustomerLevel[ECustomerLevel["SILVER"] = 1] = "SILVER";
    ECustomerLevel[ECustomerLevel["GOLD"] = 2] = "GOLD";
    ECustomerLevel[ECustomerLevel["PLATINUM"] = 3] = "PLATINUM";
})(ECustomerLevel = exports.ECustomerLevel || (exports.ECustomerLevel = {}));
var EUserStatus;
(function (EUserStatus) {
    EUserStatus[EUserStatus["PENDING"] = 0] = "PENDING";
    EUserStatus[EUserStatus["ACTIVE"] = 1] = "ACTIVE";
    EUserStatus[EUserStatus["BANNED"] = 2] = "BANNED";
})(EUserStatus = exports.EUserStatus || (exports.EUserStatus = {}));
var ENotificationType;
(function (ENotificationType) {
    ENotificationType[ENotificationType["BOOKING"] = 0] = "BOOKING";
    ENotificationType[ENotificationType["CHAT"] = 1] = "CHAT";
    ENotificationType[ENotificationType["COMMENT"] = 2] = "COMMENT";
    ENotificationType[ENotificationType["REPLY_COMMENT"] = 3] = "REPLY_COMMENT";
})(ENotificationType = exports.ENotificationType || (exports.ENotificationType = {}));
var EBookingStatus;
(function (EBookingStatus) {
    EBookingStatus[EBookingStatus["BOOKING_PENDING"] = 0] = "BOOKING_PENDING";
    EBookingStatus[EBookingStatus["BOOKING_APPROVE"] = 1] = "BOOKING_APPROVE";
    EBookingStatus[EBookingStatus["BOOKING_CANCELLED"] = 2] = "BOOKING_CANCELLED";
    EBookingStatus[EBookingStatus["BOOKING_REJECT"] = 3] = "BOOKING_REJECT";
})(EBookingStatus = exports.EBookingStatus || (exports.EBookingStatus = {}));
var Sort_SortNulls;
(function (Sort_SortNulls) {
    Sort_SortNulls[Sort_SortNulls["NULLS_FIRST"] = 0] = "NULLS_FIRST";
    Sort_SortNulls[Sort_SortNulls["NULLS_LAST"] = 1] = "NULLS_LAST";
})(Sort_SortNulls = exports.Sort_SortNulls || (exports.Sort_SortNulls = {}));
exports.COMMONS_PACKAGE_NAME = "commons";


/***/ }),

/***/ "./libs/grpc-types/src/protos/device.ts":
/*!**********************************************!*\
  !*** ./libs/grpc-types/src/protos/device.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEVICE_PACKAGE_NAME = exports.EDeviceOs = exports.protobufPackage = void 0;
exports.protobufPackage = "device";
var EDeviceOs;
(function (EDeviceOs) {
    EDeviceOs[EDeviceOs["ANDROID"] = 0] = "ANDROID";
    EDeviceOs[EDeviceOs["IOS"] = 1] = "IOS";
})(EDeviceOs = exports.EDeviceOs || (exports.EDeviceOs = {}));
exports.DEVICE_PACKAGE_NAME = "device";


/***/ }),

/***/ "./libs/grpc-types/src/protos/merchant.ts":
/*!************************************************!*\
  !*** ./libs/grpc-types/src/protos/merchant.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MERCHANT_SERVICE_NAME = exports.MerchantServiceControllerMethods = exports.MERCHANT_PACKAGE_NAME = exports.protobufPackage = void 0;
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
exports.protobufPackage = "merchant";
exports.MERCHANT_PACKAGE_NAME = "merchant";
function MerchantServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "find",
            "findAll",
            "findOne",
            "create",
            "count",
            "findById",
            "branch",
            "findBranches",
            "branches",
            "findBranchById",
            "createBranch",
            "updateBranch",
            "deleteBranch",
            "group",
            "groups",
            "findGroupById",
            "createGroup",
            "updateGroup",
            "deleteGroup",
            "service",
            "services",
            "findServiceById",
            "createService",
            "updateService",
            "deleteService",
            "findServiceOffsetPagination",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("MerchantService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("MerchantService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.MerchantServiceControllerMethods = MerchantServiceControllerMethods;
exports.MERCHANT_SERVICE_NAME = "MerchantService";


/***/ }),

/***/ "./libs/grpc-types/src/protos/merchant_user.ts":
/*!*****************************************************!*\
  !*** ./libs/grpc-types/src/protos/merchant_user.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MERCHANT_USER_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.protobufPackage = "merchant_user";
exports.MERCHANT_USER_PACKAGE_NAME = "merchant_user";


/***/ }),

/***/ "./libs/grpc-types/src/protos/notification.ts":
/*!****************************************************!*\
  !*** ./libs/grpc-types/src/protos/notification.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NOTIFICATION_SERVICE_NAME = exports.NotificationServiceControllerMethods = exports.NOTIFICATION_PACKAGE_NAME = exports.protobufPackage = void 0;
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
exports.protobufPackage = "notification";
exports.NOTIFICATION_PACKAGE_NAME = "notification";
function NotificationServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["create", "createBookingNotification"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("NotificationService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("NotificationService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.NotificationServiceControllerMethods = NotificationServiceControllerMethods;
exports.NOTIFICATION_SERVICE_NAME = "NotificationService";


/***/ }),

/***/ "./libs/grpc-types/src/protos/service.ts":
/*!***********************************************!*\
  !*** ./libs/grpc-types/src/protos/service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SERVICE_PACKAGE_NAME = exports.EServiceType = exports.EServiceShowType = exports.protobufPackage = void 0;
exports.protobufPackage = "service";
var EServiceShowType;
(function (EServiceShowType) {
    EServiceShowType[EServiceShowType["BOTH"] = 0] = "BOTH";
    EServiceShowType[EServiceShowType["CASHIER"] = 1] = "CASHIER";
    EServiceShowType[EServiceShowType["BOOKING"] = 2] = "BOOKING";
    EServiceShowType[EServiceShowType["NONE"] = 3] = "NONE";
})(EServiceShowType = exports.EServiceShowType || (exports.EServiceShowType = {}));
var EServiceType;
(function (EServiceType) {
    EServiceType[EServiceType["SERVICE"] = 0] = "SERVICE";
    EServiceType[EServiceType["PRODUCT"] = 1] = "PRODUCT";
})(EServiceType = exports.EServiceType || (exports.EServiceType = {}));
exports.SERVICE_PACKAGE_NAME = "service";


/***/ }),

/***/ "./libs/grpc-types/src/protos/user.ts":
/*!********************************************!*\
  !*** ./libs/grpc-types/src/protos/user.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USER_SERVICE_NAME = exports.UserServiceControllerMethods = exports.DUCPH_USER_PACKAGE_NAME = exports.protobufPackage = void 0;
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
exports.protobufPackage = "ducph_user";
exports.DUCPH_USER_PACKAGE_NAME = "ducph_user";
function UserServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "find",
            "create",
            "findById",
            "findOne",
            "count",
            "update",
            "deleteCustomer",
            "createDevice",
            "findDevices",
            "upsertDevice",
            "createMerchantUser",
            "addOperator",
            "countCustomer",
            "addCustomer",
            "updateCustomer",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("UserService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("UserService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.UserServiceControllerMethods = UserServiceControllerMethods;
exports.USER_SERVICE_NAME = "UserService";


/***/ }),

/***/ "./libs/grpc-types/src/servers.ts":
/*!****************************************!*\
  !*** ./libs/grpc-types/src/servers.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationServer = exports.BookingServer = exports.MerchantServer = exports.UserServer = void 0;
const grpc_types_1 = __webpack_require__(/*! @libs/grpc-types */ "./libs/grpc-types/src/index.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
exports.UserServer = {
    name: grpc_types_1.UserProto.DUCPH_USER_PACKAGE_NAME,
    transport: microservices_1.Transport.GRPC,
    options: {
        package: grpc_types_1.UserProto.DUCPH_USER_PACKAGE_NAME,
        protoPath: grpc_types_1.UserConfig.path,
        url: `${grpc_types_1.UserConfig.localHostname}:${grpc_types_1.UserConfig.port}`,
        loader: grpc_types_1.UserConfig.loader,
    },
};
exports.MerchantServer = {
    name: grpc_types_1.MerchantProto.MERCHANT_PACKAGE_NAME,
    transport: microservices_1.Transport.GRPC,
    options: {
        package: grpc_types_1.MerchantProto.MERCHANT_PACKAGE_NAME,
        protoPath: grpc_types_1.MerchantConfig.path,
        url: `${grpc_types_1.MerchantConfig.localHostname}:${grpc_types_1.MerchantConfig.port}`,
        loader: grpc_types_1.MerchantConfig.loader,
    },
};
exports.BookingServer = {
    name: grpc_types_1.BookingProto.BOOKING_PACKAGE_NAME,
    transport: microservices_1.Transport.GRPC,
    options: {
        package: grpc_types_1.BookingProto.BOOKING_PACKAGE_NAME,
        protoPath: grpc_types_1.BookingConfig.path,
        url: `${grpc_types_1.BookingConfig.localHostname}:${grpc_types_1.BookingConfig.port}`,
        loader: grpc_types_1.BookingConfig.loader,
    },
};
exports.NotificationServer = {
    name: grpc_types_1.NotificationProto.NOTIFICATION_PACKAGE_NAME,
    transport: microservices_1.Transport.GRPC,
    options: {
        package: grpc_types_1.NotificationProto.NOTIFICATION_PACKAGE_NAME,
        protoPath: grpc_types_1.NotificationConfig.path,
        url: `${grpc_types_1.NotificationConfig.localHostname}:${grpc_types_1.NotificationConfig.port}`,
        loader: grpc_types_1.NotificationConfig.loader,
    },
};


/***/ }),

/***/ "./libs/interceptors/src/grpc-log.interceptor.ts":
/*!*******************************************************!*\
  !*** ./libs/interceptors/src/grpc-log.interceptor.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GrpcLogInterceptor_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrpcLogInterceptor = void 0;
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let GrpcLogInterceptor = GrpcLogInterceptor_1 = class GrpcLogInterceptor {
    constructor() {
        this.logger = new common_1.Logger(GrpcLogInterceptor_1.name);
    }
    intercept(context, next) {
        const reqBody = context.switchToRpc().getData();
        const method = context.getHandler().name;
        const contextType = context.getType();
        const controllerName = context.getClass().name;
        this.logger.log(`GRPC-REQUEST: [${contextType}]:[${controllerName}]:[${method}]:-> ${JSON.stringify(reqBody)}`);
        return next.handle().pipe((0, operators_1.tap)((data) => {
            this.logger.log(`GRPC-RESPONSE: [${contextType}]:[${controllerName}]:[${method}]}`);
        }));
    }
};
GrpcLogInterceptor = GrpcLogInterceptor_1 = __decorate([
    (0, common_1.Injectable)()
], GrpcLogInterceptor);
exports.GrpcLogInterceptor = GrpcLogInterceptor;


/***/ }),

/***/ "./libs/interceptors/src/index.ts":
/*!****************************************!*\
  !*** ./libs/interceptors/src/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./transform.interceptor */ "./libs/interceptors/src/transform.interceptor.ts"), exports);
__exportStar(__webpack_require__(/*! ./grpc-log.interceptor */ "./libs/interceptors/src/grpc-log.interceptor.ts"), exports);


/***/ }),

/***/ "./libs/interceptors/src/transform.interceptor.ts":
/*!********************************************************!*\
  !*** ./libs/interceptors/src/transform.interceptor.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TransformInterceptor_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransformInterceptor = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
let TransformInterceptor = TransformInterceptor_1 = class TransformInterceptor {
    constructor() {
        this.logger = new common_1.Logger(TransformInterceptor_1.name);
    }
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const response = context.switchToHttp().getResponse();
        const { method, url, body, params, status, query } = request;
        this.logger.log(`REQ [${method} ${url}]:-> ${JSON.stringify(body)}`);
        return next.handle().pipe((0, operators_1.map)((data) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const res = {
                meta: JSON.stringify({ params: params, status: status, query, timestamp: new Date() }),
                message: (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.message) !== null && _a !== void 0 ? _a : response.message) !== null && _b !== void 0 ? _b : request === null || request === void 0 ? void 0 : request.message) !== null && _c !== void 0 ? _c : 'Ok',
                code: (_f = (_e = (_d = data === null || data === void 0 ? void 0 : data.statusCode) !== null && _d !== void 0 ? _d : status) !== null && _e !== void 0 ? _e : response.code) !== null && _f !== void 0 ? _f : response.statusCode,
                statusCode: (_h = (_g = data === null || data === void 0 ? void 0 : data.statusCode) !== null && _g !== void 0 ? _g : status) !== null && _h !== void 0 ? _h : response.statusCode,
                result: (0, lodash_1.omit)(data, ['message']),
            };
            return res;
        }));
    }
};
TransformInterceptor = TransformInterceptor_1 = __decorate([
    (0, common_1.Injectable)()
], TransformInterceptor);
exports.TransformInterceptor = TransformInterceptor;


/***/ }),

/***/ "./libs/modules/global/secrets/adapter.ts":
/*!************************************************!*\
  !*** ./libs/modules/global/secrets/adapter.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractSecretsService = void 0;
class AbstractSecretsService {
}
exports.AbstractSecretsService = AbstractSecretsService;


/***/ }),

/***/ "./libs/modules/global/secrets/module.ts":
/*!***********************************************!*\
  !*** ./libs/modules/global/secrets/module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SecretsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const adapter_1 = __webpack_require__(/*! ./adapter */ "./libs/modules/global/secrets/adapter.ts");
const service_1 = __webpack_require__(/*! ./service */ "./libs/modules/global/secrets/service.ts");
let SecretsModule = class SecretsModule {
};
SecretsModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: ['.env'],
            }),
        ],
        providers: [
            {
                provide: adapter_1.AbstractSecretsService,
                useClass: service_1.SecretsService,
            },
        ],
        exports: [adapter_1.AbstractSecretsService],
    })
], SecretsModule);
exports.SecretsModule = SecretsModule;


/***/ }),

/***/ "./libs/modules/global/secrets/service.ts":
/*!************************************************!*\
  !*** ./libs/modules/global/secrets/service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SecretsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let SecretsService = class SecretsService extends config_1.ConfigService {
    constructor() {
        super();
        this.env = this.get('ENV');
        this.port = this.get('PORT');
        this.userServiceDatabase = {
            host: this.get('USER_DB_HOST'),
            port: this.get('USER_DB_PORT'),
            username: this.get('USER_DB_USERNAME'),
            password: this.get('USER_DB_PASSWORD'),
            database: this.get('USER_DB_DATABASE'),
        };
        this.merchantServiceDatabase = {
            host: this.get('MERCHANT_DB_HOST'),
            port: this.get('MERCHANT_DB_PORT'),
            username: this.get('MERCHANT_DB_USERNAME'),
            password: this.get('MERCHANT_DB_PASSWORD'),
            database: this.get('MERCHANT_DB_DATABASE'),
        };
        this.bookingServiceDatabase = {
            host: this.get('BOOKING_DB_HOST'),
            port: this.get('BOOKING_DB_PORT'),
            username: this.get('BOOKING_DB_USERNAME'),
            password: this.get('BOOKING_DB_PASSWORD'),
            database: this.get('BOOKING_DB_DATABASE'),
        };
        this.notificationServiceDatabase = {
            host: this.get('NOTIFICATION_DB_HOST'),
            port: this.get('NOTIFICATION_DB_PORT'),
            username: this.get('NOTIFICATION_DB_USERNAME'),
            password: this.get('NOTIFICATION_DB_PASSWORD'),
            database: this.get('NOTIFICATION_DB_DATABASE'),
        };
    }
};
SecretsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SecretsService);
exports.SecretsService = SecretsService;


/***/ }),

/***/ "@grpc/grpc-js":
/*!********************************!*\
  !*** external "@grpc/grpc-js" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@grpc/grpc-js");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/mapped-types":
/*!***************************************!*\
  !*** external "@nestjs/mapped-types" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/sequelize":
/*!************************************!*\
  !*** external "@nestjs/sequelize" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@nestjs/sequelize");

/***/ }),

/***/ "argon2":
/*!*************************!*\
  !*** external "argon2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("argon2");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "nestjs-i18n":
/*!******************************!*\
  !*** external "nestjs-i18n" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nestjs-i18n");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ "sequelize-typescript":
/*!***************************************!*\
  !*** external "sequelize-typescript" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("sequelize-typescript");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*******************************************!*\
  !*** ./apps/merchant-service/src/main.ts ***!
  \*******************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const servers_1 = __webpack_require__(/*! @libs/grpc-types/servers */ "./libs/grpc-types/src/servers.ts");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/merchant-service/src/app.module.ts");
async function main() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, servers_1.MerchantServer);
    return app.listen();
}
main().then(() => {
    console.log('merchant-service microservice is running');
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUM7QUFDMUQsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvY29yZS9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9jb3JlL2NvbXBvbmVudHMvbWVzc2FnZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2NvcmUvZGVjb3JhdG9ycy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvY29yZS9kZWNvcmF0b3JzL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2NvcmUvZGVjb3JhdG9ycy91c2VyL21hdGNoLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvY29yZS9kZWNvcmF0b3JzL3VzZXIvdXNlci5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2NvcmUvZmlsdGVycy9odHRwLWV4Y2VwdGlvbi5maWx0ZXIudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2NvcmUvZmlsdGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvY29yZS9ndWFyZHMvYXV0aC5ndWFyZC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvY29yZS9ndWFyZHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2NvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2NvcmUvc3RyYXRlZ2llcy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvY29yZS9zdHJhdGVnaWVzL2p3dC1yZWZyZXNoLnN0cmF0ZWd5LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9jb3JlL3N0cmF0ZWdpZXMvand0LnN0cmF0ZWd5LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL2F1dGgvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvYXV0aC9sb2dpbi5kdG8udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvYXV0aC9yZWdpc3Rlci5kdG8udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvYmFzZS9iYXNlLmR0by50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9iYXNlL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL2Jvb2tpbmcvYm9va2luZy5kdG8udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvYm9va2luZy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9jb21tb24vY29tbW9uLmR0by50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9jb21tb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvY3VzdG9tZXIvY3VzdG9tZXIuZHRvLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL2N1c3RvbWVyL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL21lcmNoYW50L2JyYW5jaC9jcmVhdGUtYnJhbmNoLmR0by50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9tZXJjaGFudC9icmFuY2gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvbWVyY2hhbnQvY3JlYXRlLmR0by50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9tZXJjaGFudC9ncm91cC9jcmVhdGUtZ3JvdXAuZHRvLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL21lcmNoYW50L2dyb3VwL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL21lcmNoYW50L2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL21lcmNoYW50L3NlcnZpY2UvY3JlYXRlLXNlcnZpY2UuZHRvLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL21lcmNoYW50L3NlcnZpY2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvdXNlci9kZXZpY2UuZHRvLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvdXNlci90b2tlbi5kdG8udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvdXNlci91c2VyLmR0by50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9tZXJjaGFudC1zZXJ2aWNlL3NyYy9hcHAubW9kdWxlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL21lcmNoYW50LXNlcnZpY2Uvc3JjL2JyYW5jaC9icmFuY2gubW9kdWxlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL21lcmNoYW50LXNlcnZpY2Uvc3JjL2JyYW5jaC9icmFuY2guc2VydmljZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9tZXJjaGFudC1zZXJ2aWNlL3NyYy9ncm91cC9ncm91cC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvbWVyY2hhbnQtc2VydmljZS9zcmMvZ3JvdXAvZ3JvdXAuc2VydmljZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9tZXJjaGFudC1zZXJ2aWNlL3NyYy9tZXJjaGFudC9tZXJjaGFudC5jb250cm9sbGVyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL21lcmNoYW50LXNlcnZpY2Uvc3JjL21lcmNoYW50L21lcmNoYW50Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9tZXJjaGFudC1zZXJ2aWNlL3NyYy9tZXJjaGFudC9tZXJjaGFudC5zZXJ2aWNlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL21lcmNoYW50LXNlcnZpY2Uvc3JjL3NlcnZpY2Uvc2VydmljZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvbWVyY2hhbnQtc2VydmljZS9zcmMvc2VydmljZS9zZXJ2aWNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvY29uc3RhbnRzL2RhdGFiYXNlLmNvbnN0YW50LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL2F1dGgvYXV0aC5tZXNzYWdlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL21lc3NhZ2UvYXV0aC9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL2NvbW1vbi5tZXNzYWdlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL21lc3NhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvbWVzc2FnZS9tZXJjaGFudC9icmFuY2gubWVzc2FnZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL21lcmNoYW50L2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL21lc3NhZ2UvbWVyY2hhbnQvbWVyY2hhbnQubWVzc2FnZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL3VzZXIvY3VzdG9tZXIubWVzc2FnZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvbWVzc2FnZS91c2VyL3VzZXIubWVzc2FnZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy91dGlscy9lcnJvci5oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvdXRpbHMvZ2VuZXJhbC51dGlsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL3V0aWxzL3Bhc3N3b3JkLnV0aWxzLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL3V0aWxzL3F1ZXJ5LnV0aWxzLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL3V0aWxzL3V0aWxzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvY29ubmVjdGlvbi9ib29raW5nLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9jb25uZWN0aW9uL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9jb25uZWN0aW9uL21lcmNoYW50LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9jb25uZWN0aW9uL25vdGlmaWNhdGlvbi50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvY29ubmVjdGlvbi91c2VyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9iYXNlLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9ib29raW5nL2Jvb2tpbmcubW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL2Jvb2tpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9tZXJjaGFudC9icmFuY2gubW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL21lcmNoYW50L2dyb3VwLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9tZXJjaGFudC9pbWFnZS5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvbWVyY2hhbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL21lcmNoYW50L21lcmNoYW50Lm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9tZXJjaGFudC9zZXJ2ZS1pbWFnZS5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvbWVyY2hhbnQvc2VydmljZS5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvbm90aWZpY2F0aW9uL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy91c2VyL2RldmljZS5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvdXNlci9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvdXNlci9tZXJjaGFudC11c2VyLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy91c2VyL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvYmFzZS5yZXBvc2l0b3J5LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvYm9va2luZy9ib29raW5nLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9ib29raW5nL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9tZXJjaGFudC9icmFuY2gucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL21lcmNoYW50L2dyb3VwLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9tZXJjaGFudC9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL21lcmNoYW50L21lcmNoYW50LnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9tZXJjaGFudC9zZXJ2aWNlLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9ub3RpZmljYXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy91c2VyL2RldmljZS5yZXBvc2l0b3J5LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvdXNlci9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL3VzZXIvbWVyY2hhbnQtdXNlci5yZXBvc2l0b3J5LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvdXNlci91c2VyLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZXhjZXB0aW9ucy9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZXhjZXB0aW9ucy9zcmMvbGliL2Vycm9yLWNvZGVzLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2V4Y2VwdGlvbnMvc3JjL2xpYi9leGNlcHRpb25zL2N1c3RvbS5leGNlcHRpb24udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZXhjZXB0aW9ucy9zcmMvbGliL2V4Y2VwdGlvbnMvZ2VuZXJhbC1zZXJ2ZXItZXJyb3IuZXhjZXB0aW9uLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2V4Y2VwdGlvbnMvc3JjL2xpYi9leGNlcHRpb25zL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2V4Y2VwdGlvbnMvc3JjL2xpYi9leGNlcHRpb25zL2ludmFsaWQtY3JlZGVudGlhbHMuZXhjZXB0aW9uLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2V4Y2VwdGlvbnMvc3JjL2xpYi9leGNlcHRpb25zL3VzZXJuYW1lLWFscmVhZHktdGFrZW4uZXhjZXB0aW9uLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2ZpbHRlcnMvc3JjL2FsbC5leGNlcHRpb25zLmZpbHRlci50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9maWx0ZXJzL3NyYy9ncnBjLWFsbC5leGNlcHRpb25zLmZpbHRlci50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9maWx0ZXJzL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9jbGllbnRzLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MvYm9va2luZy50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MvYnJhbmNoLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL3Byb3Rvcy9jb21tb25zLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL3Byb3Rvcy9kZXZpY2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zL21lcmNoYW50LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL3Byb3Rvcy9tZXJjaGFudF91c2VyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL3Byb3Rvcy9ub3RpZmljYXRpb24udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zL3NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zL3VzZXIudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvc2VydmVycy50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9pbnRlcmNlcHRvcnMvc3JjL2dycGMtbG9nLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2ludGVyY2VwdG9ycy9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvaW50ZXJjZXB0b3JzL3NyYy90cmFuc2Zvcm0uaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9hZGFwdGVyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvbW9kdWxlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvc2VydmljZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQGdycGMvZ3JwYy1qc1wiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvbW1vblwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvbmZpZ1wiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvcmVcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9tYXBwZWQtdHlwZXNcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9taWNyb3NlcnZpY2VzXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvcGFzc3BvcnRcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9zZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiYXJnb24yXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcImNsYXNzLXRyYW5zZm9ybWVyXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcImNsYXNzLXZhbGlkYXRvclwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwibmVzdGpzLWkxOG5cIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwicGFzc3BvcnQtand0XCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcInJ4anNcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwicnhqcy9vcGVyYXRvcnNcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwic2VxdWVsaXplXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvbWVyY2hhbnQtc2VydmljZS9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL21lc3NhZ2UuY29tcG9uZW50JztcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJMThuU2VydmljZSwgVHJhbnNsYXRlT3B0aW9ucyB9IGZyb20gJ25lc3Rqcy1pMThuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGkxOG46IEkxOG5TZXJ2aWNlKSB7fVxuXG4gIGxhbmcoa2V5OiBzdHJpbmcsIG9wdGlvbnM6IFRyYW5zbGF0ZU9wdGlvbnMgPSB7fSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bi50cmFuc2xhdGUoa2V5LCBvcHRpb25zKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyJztcbiIsImV4cG9ydCAqIGZyb20gJy4vbWF0Y2guZGVjb3JhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci5kZWNvcmF0b3InO1xuIiwiaW1wb3J0IHsgVmFsaWRhdGlvbkFyZ3VtZW50cywgVmFsaWRhdGlvbk9wdGlvbnMsIHJlZ2lzdGVyRGVjb3JhdG9yIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIE1hdGNoPFQ+KHByb3BlcnR5OiBrZXlvZiBULCB2YWxpZGF0aW9uT3B0aW9ucz86IFZhbGlkYXRpb25PcHRpb25zKSB7XG4gIHJldHVybiAob2JqZWN0OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nKSA9PiB7XG4gICAgcmVnaXN0ZXJEZWNvcmF0b3Ioe1xuICAgICAgbmFtZTogJ01hdGNoJyxcbiAgICAgIHRhcmdldDogb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgY29uc3RyYWludHM6IFtwcm9wZXJ0eV0sXG4gICAgICBvcHRpb25zOiB2YWxpZGF0aW9uT3B0aW9ucyxcbiAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICB2YWxpZGF0ZSh2YWx1ZTogYW55LCBhcmdzOiBWYWxpZGF0aW9uQXJndW1lbnRzKSB7XG4gICAgICAgICAgY29uc3QgW3JlbGF0ZWRQcm9wZXJ0eU5hbWVdID0gYXJncy5jb25zdHJhaW50cztcbiAgICAgICAgICBjb25zdCByZWxhdGVkVmFsdWUgPSAoYXJncy5vYmplY3QgYXMgYW55KVtyZWxhdGVkUHJvcGVydHlOYW1lXTtcbiAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IHJlbGF0ZWRWYWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWZhdWx0TWVzc2FnZShhcmdzOiBWYWxpZGF0aW9uQXJndW1lbnRzKSB7XG4gICAgICAgICAgY29uc3QgW3JlbGF0ZWRQcm9wZXJ0eU5hbWVdID0gYXJncy5jb25zdHJhaW50cztcbiAgICAgICAgICByZXR1cm4gYCR7cHJvcGVydHlOYW1lfSBtdXN0IG1hdGNoICR7cmVsYXRlZFByb3BlcnR5TmFtZX0gZXhhY3RseWA7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlUGFyYW1EZWNvcmF0b3IsIEV4ZWN1dGlvbkNvbnRleHQgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBVc2VyID0gY3JlYXRlUGFyYW1EZWNvcmF0b3IoKGRhdGE6IHVua25vd24sIGN0eDogRXhlY3V0aW9uQ29udGV4dCkgPT4ge1xuICBjb25zdCByZXF1ZXN0ID0gY3R4LnN3aXRjaFRvSHR0cCgpLmdldFJlcXVlc3QoKTtcbiAgcmV0dXJuIHJlcXVlc3QudXNlcjtcbn0pO1xuIiwiaW1wb3J0IHsgQXJndW1lbnRzSG9zdCwgQ2F0Y2gsIEV4Y2VwdGlvbkZpbHRlciwgSHR0cEV4Y2VwdGlvbiwgSHR0cFN0YXR1cyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuQENhdGNoKEh0dHBFeGNlcHRpb24pXG5leHBvcnQgY2xhc3MgSHR0cEV4Y2VwdGlvbkZpbHRlciBpbXBsZW1lbnRzIEV4Y2VwdGlvbkZpbHRlcjxIdHRwRXhjZXB0aW9uPiB7XG4gIGNhdGNoKGV4Y2VwdGlvbjogSHR0cEV4Y2VwdGlvbiwgaG9zdDogQXJndW1lbnRzSG9zdCkge1xuICAgIGNvbnN0IGN0eCA9IGhvc3Quc3dpdGNoVG9IdHRwKCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBjdHguZ2V0UmVzcG9uc2UoKTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGV4Y2VwdGlvbiBpbnN0YW5jZW9mIEh0dHBFeGNlcHRpb24gPyBleGNlcHRpb24uZ2V0U3RhdHVzKCkgOiBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUjtcblxuICAgIGNvbnN0IGV4Y2VwdGlvblJlc3BvbnNlID0gZXhjZXB0aW9uLmdldFJlc3BvbnNlKCkgYXMgYW55O1xuXG4gICAgbGV0IGVycm9ycyA9IG51bGw7XG5cbiAgICBpZiAoZXhjZXB0aW9uUmVzcG9uc2UubWVzc2FnZSAmJiB0eXBlb2YgZXhjZXB0aW9uUmVzcG9uc2UubWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9ycyA9IGV4Y2VwdGlvblJlc3BvbnNlLm1lc3NhZ2U7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGV4Y2VwdGlvblJlc3BvbnNlLm1lc3NhZ2UgJiZcbiAgICAgIEFycmF5LmlzQXJyYXkoZXhjZXB0aW9uUmVzcG9uc2UubWVzc2FnZSkgJiZcbiAgICAgIGV4Y2VwdGlvblJlc3BvbnNlLm1lc3NhZ2UubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgZXJyb3JzID0gZXhjZXB0aW9uUmVzcG9uc2UubWVzc2FnZS5tYXAoKGVycm9yKSA9PiBlcnJvci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGVycm9yLnNsaWNlKDEpKTtcbiAgICB9XG5cbiAgICByZXNwb25zZS5zdGF0dXMoc3RhdHVzKS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgdHlwZW9mIGV4Y2VwdGlvbi5tZXNzYWdlID09PSAnc3RyaW5nJ1xuICAgICAgICAgID8gZXhjZXB0aW9uLm1lc3NhZ2UuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBleGNlcHRpb24ubWVzc2FnZS5zbGljZSgxKVxuICAgICAgICAgIDogZXhjZXB0aW9uLm1lc3NhZ2UsXG4gICAgICBlcnJvcnM6IGVycm9ycyA/PyBleGNlcHRpb25SZXNwb25zZSxcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9odHRwLWV4Y2VwdGlvbi5maWx0ZXInO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJ0BuZXN0anMvcGFzc3BvcnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnd0QXV0aEd1YXJkIGV4dGVuZHMgQXV0aEd1YXJkKCdqd3QnKSB7fVxuIiwiZXhwb3J0ICogZnJvbSAnLi9hdXRoLmd1YXJkJztcbiIsImV4cG9ydCAqIGZyb20gJy4vZGVjb3JhdG9ycyc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmF0ZWdpZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9ndWFyZHMnO1xuZXhwb3J0ICogZnJvbSAnLi9maWx0ZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cyc7XG4iLCJleHBvcnQgKiBmcm9tICcuL2p3dC5zdHJhdGVneSc7XG5leHBvcnQgKiBmcm9tICcuL2p3dC1yZWZyZXNoLnN0cmF0ZWd5JztcbiIsImltcG9ydCB7IFVzZXJQcm90byB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbk1vZHVsZUluaXQgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgQ2xpZW50R3JwYyB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBQYXNzcG9ydFN0cmF0ZWd5IH0gZnJvbSAnQG5lc3Rqcy9wYXNzcG9ydCc7XG5pbXBvcnQgeyBFeHRyYWN0Snd0LCBTdHJhdGVneSB9IGZyb20gJ3Bhc3Nwb3J0LWp3dCc7XG5pbXBvcnQgeyBsYXN0VmFsdWVGcm9tIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKd3RSZWZyZXNoU3RyYXRlZ3kgZXh0ZW5kcyBQYXNzcG9ydFN0cmF0ZWd5KFN0cmF0ZWd5LCAnand0LXJlZnJlc2gnKSBpbXBsZW1lbnRzIE9uTW9kdWxlSW5pdCB7XG4gIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJQcm90by5Vc2VyU2VydmljZUNsaWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFVzZXJQcm90by5EVUNQSF9VU0VSX1BBQ0tBR0VfTkFNRSkgcHJpdmF0ZSBjbGllbnQ6IENsaWVudEdycGMsXG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKHtcbiAgICAgIHNlY3JldE9yS2V5OiBjb25maWdTZXJ2aWNlLmdldDxzdHJpbmc+KCdKV1RfUkVGUkVTSF9UT0tFTl9TRUNSRVQnKSxcbiAgICAgIGp3dEZyb21SZXF1ZXN0OiBFeHRyYWN0Snd0LmZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbigpLFxuICAgIH0pO1xuICB9XG5cbiAgb25Nb2R1bGVJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2UgPSB0aGlzLmNsaWVudC5nZXRTZXJ2aWNlPFVzZXJQcm90by5Vc2VyU2VydmljZUNsaWVudD4oVXNlclByb3RvLlVTRVJfU0VSVklDRV9OQU1FKTtcbiAgfVxuXG4gIGFzeW5jIHZhbGlkYXRlKHBheWxvYWQ6IGFueSk6IFByb21pc2U8VXNlclByb3RvLlVzZXI+IHtcbiAgICBjb25zdCB7IHVzZXIgfSA9IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy51c2VyU2VydmljZS5maW5kQnlJZCh7IGlkOiBOdW1iZXIocGF5bG9hZC5zdWIpIH0pKTtcbiAgICByZXR1cm4gdXNlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVXNlclByb3RvIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uTW9kdWxlSW5pdCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5pbXBvcnQgeyBDbGllbnRHcnBjIH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IFBhc3Nwb3J0U3RyYXRlZ3kgfSBmcm9tICdAbmVzdGpzL3Bhc3Nwb3J0JztcbmltcG9ydCB7IEV4dHJhY3RKd3QsIFN0cmF0ZWd5IH0gZnJvbSAncGFzc3BvcnQtand0JztcbmltcG9ydCB7IGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEp3dFN0cmF0ZWd5IGV4dGVuZHMgUGFzc3BvcnRTdHJhdGVneShTdHJhdGVneSwgJ2p3dCcpIGltcGxlbWVudHMgT25Nb2R1bGVJbml0IHtcbiAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclByb3RvLlVzZXJTZXJ2aWNlQ2xpZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoVXNlclByb3RvLkRVQ1BIX1VTRVJfUEFDS0FHRV9OQU1FKSBwcml2YXRlIGNsaWVudDogQ2xpZW50R3JwYyxcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIoe1xuICAgICAgc2VjcmV0T3JLZXk6IGNvbmZpZ1NlcnZpY2UuZ2V0PHN0cmluZz4oJ0pXVF9QUklWQVRFX0tFWScpLFxuICAgICAgand0RnJvbVJlcXVlc3Q6IEV4dHJhY3RKd3QuZnJvbUF1dGhIZWFkZXJBc0JlYXJlclRva2VuKCksXG4gICAgfSk7XG4gIH1cblxuICBvbk1vZHVsZUluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZSA9IHRoaXMuY2xpZW50LmdldFNlcnZpY2U8VXNlclByb3RvLlVzZXJTZXJ2aWNlQ2xpZW50PihVc2VyUHJvdG8uVVNFUl9TRVJWSUNFX05BTUUpO1xuICB9XG5cbiAgYXN5bmMgdmFsaWRhdGUocGF5bG9hZDogYW55KTogUHJvbWlzZTxVc2VyUHJvdG8uVXNlcj4ge1xuICAgIGNvbnN0IHsgdXNlciB9ID0gYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnVzZXJTZXJ2aWNlLmZpbmRCeUlkKHsgaWQ6IE51bWJlcihwYXlsb2FkLnN1YikgfSkpO1xuICAgIHJldHVybiB1c2VyO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2xvZ2luLmR0byc7XG5leHBvcnQgKiBmcm9tICcuL3JlZ2lzdGVyLmR0byc7XG4iLCJpbXBvcnQgeyBJc0VtYWlsLCBJc05vdEVtcHR5IH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuaW1wb3J0IHsgRGV2aWNlSW5wdXREdG8gfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MvdXNlcic7XG5cbmV4cG9ydCBjbGFzcyBCYXNlQXV0aElucHV0IHtcbiAgQElzTm90RW1wdHkoKVxuICBASXNFbWFpbCgpXG4gIGVtYWlsOiBzdHJpbmc7XG5cbiAgQElzTm90RW1wdHkoKVxuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgSW5wdXRMb2dpblJlcXVlc3QgZXh0ZW5kcyBCYXNlQXV0aElucHV0IHtcbiAgZGV2aWNlPzogRGV2aWNlSW5wdXREdG87XG59XG4iLCJpbXBvcnQgeyBUcmFuc2Zvcm0sIFRyYW5zZm9ybUZuUGFyYW1zLCBUeXBlIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgSXNEZWZpbmVkLCBJc0VtYWlsLCBJc0VudW0sIElzTm90RW1wdHksIElzT3B0aW9uYWwsIElzU3RyaW5nLCBNYXhMZW5ndGgsIE1pbkxlbmd0aCB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmltcG9ydCB7IEVDdXN0b21lckxldmVsLCBFVXNlckdlbmRlciwgRVVzZXJSb2xlLCBFVXNlclN0YXR1cyB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvZHRvcy9jb21tb24nO1xuaW1wb3J0IHsgQ3JlYXRlTWVyY2hhbnRJbnB1dER0byB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvZHRvcy9tZXJjaGFudCc7XG5pbXBvcnQgeyBEZXZpY2VJbnB1dER0byB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvZHRvcy91c2VyJztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZVVzZXJJbnB1dER0byB7XG4gIEBUcmFuc2Zvcm0oKHsgdmFsdWUgfTogVHJhbnNmb3JtRm5QYXJhbXMpID0+IHZhbHVlPy50cmltKCkudG9Mb3dlckNhc2UoKSlcbiAgQElzRW1haWwoKVxuICBlbWFpbDogc3RyaW5nO1xuXG4gIEBNYXhMZW5ndGgoMzApXG4gIEBNaW5MZW5ndGgoNSlcbiAgQElzU3RyaW5nKClcbiAgQElzTm90RW1wdHkoKVxuICBwYXNzd29yZDogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgZnVsbE5hbWU6IHN0cmluZztcblxuICBASXNFbnVtKEVVc2VyUm9sZSlcbiAgQElzT3B0aW9uYWwoKVxuICByb2xlOiBFVXNlclJvbGU7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNFbnVtKEVVc2VyU3RhdHVzKVxuICBzdGF0dXM6IEVVc2VyU3RhdHVzO1xuXG4gIEBJc0VudW0oRVVzZXJHZW5kZXIpXG4gIEBJc09wdGlvbmFsKClcbiAgZ2VuZGVyOiBFVXNlckdlbmRlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIGxldmVsPzogRUN1c3RvbWVyTGV2ZWw7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBjb250YWN0OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBkb2JEYXk6IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIGRvYk1vbnRoOiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBkb2JZZWFyOiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBvY2N1cGF0aW9uPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgYXZhdGFyPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgYWRkcmVzcz86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGNpdHlDb2RlPzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgd2FyZENvZGU/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICByZWZlcnJlcj86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIHJlZmVycmVyQ29kZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGN1c3RvbWVyQ29kZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGZhY2Vib29rPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgemFsb1Bob25lPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgaGVpZ2h0PzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgd2VpZ2h0PzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgbWVtYmVyQ2FyZE5vPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgY29tcGFueT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIHRheE5vPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgbm90ZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIHJlbGF0ZWRVc2VyPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgcmVsYXRlZFVzZXJSb2xlPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgcmVsYXRlZFVzZXJQaG9uZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGJyYW5jaElkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJQYXlsb2FkIHtcbiAgQElzTm90RW1wdHkoKVxuICBASXNEZWZpbmVkKClcbiAgQFR5cGUoKCkgPT4gQ3JlYXRlVXNlcklucHV0RHRvKVxuICB1c2VyOiBDcmVhdGVVc2VySW5wdXREdG87XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNEZWZpbmVkKClcbiAgQFR5cGUoKCkgPT4gQ3JlYXRlTWVyY2hhbnRJbnB1dER0bylcbiAgbWVyY2hhbnQ6IENyZWF0ZU1lcmNoYW50SW5wdXREdG87XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNEZWZpbmVkKClcbiAgQFR5cGUoKCkgPT4gRGV2aWNlSW5wdXREdG8pXG4gIGRldmljZTogRGV2aWNlSW5wdXREdG87XG59XG4iLCJpbXBvcnQgeyBMSU1JVCwgUEFHRSB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgSXNOdW1iZXIsIElzT3B0aW9uYWwsIElzU3RyaW5nIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIEJhc2VRdWVyeUR0byB7XG4gIEBJc09wdGlvbmFsKClcbiAgQFRyYW5zZm9ybSgoeyB2YWx1ZSB9KSA9PiBwYXJzZUludCh2YWx1ZSkpXG4gIEBJc051bWJlcigpXG4gIHBhZ2U/OiBudW1iZXIgPSBQQUdFO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQFRyYW5zZm9ybSgoeyB2YWx1ZSB9KSA9PiBwYXJzZUludCh2YWx1ZSkpXG4gIEBJc051bWJlcigpXG4gIGxpbWl0PzogbnVtYmVyID0gTElNSVQ7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBxPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgb3JkZXJCeT86IHN0cmluZyA9ICdjcmVhdGVkQXQnO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgb3JkZXJEaXJlY3Rpb24/OiBzdHJpbmcgPSAnREVTQyc7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRHRvPFQ+IHtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBQYXJ0aWFsPFQ+KSB7XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKHBhcmFtcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0QXR0cmlidXRlcyhwYXJhbXM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgUGFydGlhbDxUPik6IHZvaWQge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpO1xuXG4gICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoa2V5LCBwYXJhbXNba2V5XSk7XG4gICAgfVxuICB9XG5cbiAgaGFzUHJvcGVydHkobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWUgPT09IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2ZpZWxkcycsIHRoaXMsIG5hbWUpO1xuICB9XG5cbiAgc2V0QXR0cmlidXRlKGtleTogc3RyaW5nLCB2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIGlmICh0aGlzLmhhc1Byb3BlcnR5KGtleSkpIHtcbiAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9iYXNlLmR0byc7XG4iLCJpbXBvcnQgeyBJc0VudW0sIElzSW50LCBJc05vdEVtcHR5LCBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBQYXJ0aWFsVHlwZSB9IGZyb20gJ0BuZXN0anMvbWFwcGVkLXR5cGVzJztcblxuaW1wb3J0IHsgRUJvb2tpbmdTdGF0dXMgfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZUJvb2tpbmdJbnB1dCB7XG4gIEBJc05vdEVtcHR5KClcbiAgQElzSW50KClcbiAgc2VydmljZUlkOiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNFbnVtKEVCb29raW5nU3RhdHVzKVxuICBzdGF0dXM/OiBFQm9va2luZ1N0YXR1cyA9IEVCb29raW5nU3RhdHVzLkJPT0tJTkdfUEVORElORztcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIGJvb2tpbmdEYXRlPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzSW50KClcbiAgdXNlcklkPzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgc2VydmljZU5hbWU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICB1c2VyRW1haWw/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICB1c2VyUGhvbmVOdW1iZXI/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBub3RlPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzSW50KClcbiAgbWVyY2hhbnRJZD86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0ludCgpXG4gIGJyYW5jaElkPzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzSW50KClcbiAgZHVyYXRpb24/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJ0aWFsVXBkYXRlQm9va2luZyBleHRlbmRzIFBhcnRpYWxUeXBlPENyZWF0ZUJvb2tpbmdJbnB1dD4oQ3JlYXRlQm9va2luZ0lucHV0KSB7fVxuIiwiZXhwb3J0ICogZnJvbSAnLi9ib29raW5nLmR0byc7XG4iLCJleHBvcnQgZW51bSBFU29ydERpcmVjdGlvbiB7XG4gIEFTQyA9IDAsXG4gIERFU0MgPSAxLFxufVxuXG5leHBvcnQgZW51bSBFU2VydmljZVNob3dUeXBlIHtcbiAgQk9USCA9IDAsXG4gIENBU0hJRVIgPSAxLFxuICBCT09LSU5HID0gMixcbiAgTk9ORSA9IDMsXG59XG5cbmV4cG9ydCBlbnVtIEVTZXJ2aWNlVHlwZSB7XG4gIFNFUlZJQ0UgPSAwLFxuICBQUk9EVUNUID0gMSxcbn1cblxuZXhwb3J0IGVudW0gRVNlcnZlSW1hZ2VUeXBlIHtcbiAgTUVSQ0hBTlQgPSAwLFxuICBCUkFOQ0ggPSAxLFxuICBHUk9VUCA9IDIsXG4gIFNFUlZJQ0UgPSAzLFxufVxuXG5leHBvcnQgZW51bSBFSW1hZ2VUeXBlIHtcbiAgUEhPVE8gPSAwLFxuICBWSURFTyA9IDEsXG59XG5cbmV4cG9ydCBlbnVtIEVEZXZpY2VPcyB7XG4gIEFORFJPSUQgPSAwLFxuICBJT1MgPSAxLFxufVxuXG5leHBvcnQgZW51bSBFVXNlckdlbmRlciB7XG4gIE1BTEUgPSAwLFxuICBGRU1BTEUgPSAxLFxuICBPVEhFUiA9IDIsXG59XG5cbmV4cG9ydCBlbnVtIEVVc2VyUm9sZSB7XG4gIFVTRVIgPSAwLFxuICBBRE1JTiA9IDEsXG4gIFNVUEVSX0FETUlOID0gMixcbiAgTUFTVEVSX1dPUktFUiA9IDMsXG4gIEFTU0lTVEFOVF9XT1JLRVIgPSA0LFxuICBNQU5BR0VSID0gNSxcbiAgUkVDRVBUSU9OSVNUID0gNixcbn1cblxuZXhwb3J0IGVudW0gRUN1c3RvbWVyTGV2ZWwge1xuICBOT1JNQUwgPSAwLFxuICBTSUxWRVIgPSAxLFxuICBHT0xEID0gMixcbiAgUExBVElOVU0gPSAzLFxufVxuXG5leHBvcnQgZW51bSBFVXNlclN0YXR1cyB7XG4gIFBFTkRJTkcgPSAwLFxuICBBQ1RJVkUgPSAxLFxuICBCQU5ORUQgPSAyLFxufVxuXG5leHBvcnQgZW51bSBFQm9va2luZ1N0YXR1cyB7XG4gIEJPT0tJTkdfUEVORElORyA9IDAsXG4gIEJPT0tJTkdfQVBQUk9WRSA9IDEsXG4gIEJPT0tJTkdfQ0FOQ0VMTEVEID0gMixcbiAgQk9PS0lOR19SRUpFQ1QgPSAzLFxufVxuXG5leHBvcnQgZW51bSBFRXZlbnRNZXNzYWdlIHtcbiAgQ1JFQVRFX01FU1NBR0UgPSAnY3JlYXRlX21lc3NhZ2UnLFxuICBSRUNFTlRfTUVTU0FHRVMgPSAncmVjZW50X21lc3NhZ2VzJyxcbiAgQ09OVkVSU0FUSU9OX01FU1NBR0VTID0gJ2NvbnZlcnNhdGlvbl9tZXNzYWdlcycsXG4gIEpPSU5fUk9PTSA9ICdqb2luX3Jvb20nLFxuICBORVdfTUVTU0FHRSA9ICduZXdfbWVzc2FnZScsXG59XG5cbmV4cG9ydCBlbnVtIEVOb3RpZmljYXRpb25UeXBlIHtcbiAgQk9PS0lORyA9IDAsXG4gIENIQVQgPSAxLFxuICBDT01NRU5UID0gMixcbiAgUkVQTFlfQ09NTUVOVCA9IDMsXG59XG5cbmV4cG9ydCBlbnVtIEVMYW5nVHlwZSB7XG4gIEVOID0gJ2VuJyxcbiAgVkkgPSAndmknLFxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jb21tb24uZHRvJztcbiIsImltcG9ydCB7IFBhcnRpYWxUeXBlIH0gZnJvbSAnQG5lc3Rqcy9tYXBwZWQtdHlwZXMnO1xuaW1wb3J0IHsgVHJhbnNmb3JtLCBUcmFuc2Zvcm1GblBhcmFtcyB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7IElzRW1haWwsIElzRW51bSwgSXNJbnQsIElzTm90RW1wdHksIElzT3B0aW9uYWwsIElzU3RyaW5nLCBNYXhMZW5ndGgsIE1pbkxlbmd0aCB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmltcG9ydCB7IEVDdXN0b21lckxldmVsLCBFVXNlckdlbmRlciwgRVVzZXJSb2xlLCBFVXNlclN0YXR1cyB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvZHRvcy9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgQWRkQ3VzdG9tZXJEdG8ge1xuICBASXNJbnQoKVxuICBASXNOb3RFbXB0eSgpXG4gIG1lcmNoYW50SWQ/OiBudW1iZXI7XG5cbiAgQFRyYW5zZm9ybSgoeyB2YWx1ZSB9OiBUcmFuc2Zvcm1GblBhcmFtcykgPT4gdmFsdWU/LnRyaW0oKS50b0xvd2VyQ2FzZSgpKVxuICBASXNFbWFpbCgpXG4gIEBJc09wdGlvbmFsKClcbiAgZW1haWw6IHN0cmluZztcblxuICBATWF4TGVuZ3RoKDMwKVxuICBATWluTGVuZ3RoKDUpXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgcGFzc3dvcmQ6IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNOb3RFbXB0eSgpXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XG5cbiAgQElzRW51bShFVXNlclJvbGUpXG4gIEBJc05vdEVtcHR5KClcbiAgcm9sZTogRVVzZXJSb2xlO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRW51bShFVXNlclN0YXR1cylcbiAgc3RhdHVzOiBFVXNlclN0YXR1cztcblxuICBASXNFbnVtKEVVc2VyR2VuZGVyKVxuICBASXNPcHRpb25hbCgpXG4gIGdlbmRlcjogRVVzZXJHZW5kZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBsZXZlbD86IEVDdXN0b21lckxldmVsO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgY29udGFjdDogc3RyaW5nO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQElzU3RyaW5nKClcbiAgcGhvbmVOdW1iZXI6IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGRvYkRheTogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgZG9iTW9udGg6IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIGRvYlllYXI6IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIG9jY3VwYXRpb24/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBhdmF0YXI/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBhZGRyZXNzPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgY2l0eUNvZGU/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBkaXN0cmljdENvZGU/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICB3YXJkQ29kZT86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIHJlZmVycmVyPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgcmVmZXJyZXJDb2RlPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgY3VzdG9tZXJDb2RlPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgZmFjZWJvb2s/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICB6YWxvUGhvbmU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBoZWlnaHQ/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICB3ZWlnaHQ/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBtZW1iZXJDYXJkTm8/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBjb21wYW55Pzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgdGF4Tm8/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBub3RlPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgcmVsYXRlZFVzZXI/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICByZWxhdGVkVXNlclJvbGU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICByZWxhdGVkVXNlclBob25lPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgYnJhbmNoSWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVQYXJ0aWFsQ3VzdG9tZXIgZXh0ZW5kcyBQYXJ0aWFsVHlwZTxBZGRDdXN0b21lckR0bz4oQWRkQ3VzdG9tZXJEdG8pIHt9XG4iLCJleHBvcnQgKiBmcm9tICcuL2N1c3RvbWVyLmR0byc7XG4iLCJleHBvcnQgKiBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgKiBmcm9tICcuL2F1dGgnO1xuXG5leHBvcnQgKiBmcm9tICcuL21lcmNoYW50JztcblxuZXhwb3J0ICogZnJvbSAnLi91c2VyJztcblxuZXhwb3J0ICogZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgKiBmcm9tICcuL2N1c3RvbWVyJztcblxuZXhwb3J0ICogZnJvbSAnLi9ib29raW5nJztcbiIsImltcG9ydCB7IFBhcnRpYWxUeXBlIH0gZnJvbSAnQG5lc3Rqcy9tYXBwZWQtdHlwZXMnO1xuaW1wb3J0IHsgSXNOb3RFbXB0eSwgSXNOdW1iZXIsIElzT3B0aW9uYWwsIElzU3RyaW5nIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZUJyYW5jaElucHV0IHtcbiAgQElzU3RyaW5nKClcbiAgQElzTm90RW1wdHkoKVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgcGhvbmU/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzTm90RW1wdHkoKVxuICBhZGRyZXNzPzogc3RyaW5nO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc05vdEVtcHR5KClcbiAgbWVyY2hhbnRJZDogbnVtYmVyO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgY2l0eUNvZGU/OiBudW1iZXI7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICBkaXN0cmljdENvZGU/OiBudW1iZXI7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICB3YXJkQ29kZT86IG51bWJlcjtcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGNpdHk/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBkaXN0cmljdD86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHdhcmQ/OiBzdHJpbmc7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICBsYXRpdHVkZT86IG51bWJlcjtcblxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIGxvbmdpdHVkZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFBhcnRpYWxVcGRhdGVCcmFuY2ggZXh0ZW5kcyBQYXJ0aWFsVHlwZTxDcmVhdGVCcmFuY2hJbnB1dD4oQ3JlYXRlQnJhbmNoSW5wdXQpIHt9XG4iLCJleHBvcnQgKiBmcm9tICcuL2NyZWF0ZS1icmFuY2guZHRvJztcbiIsImltcG9ydCB7IElzTm90RW1wdHksIElzT3B0aW9uYWwgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlTWVyY2hhbnRJbnB1dER0byB7XG4gIEBJc05vdEVtcHR5KClcbiAgbmFtZTogc3RyaW5nO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgYWRkcmVzczogc3RyaW5nO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgcGhvbmU6IHN0cmluZztcblxuICBASXNOb3RFbXB0eSgpXG4gIHN1YmRvbWFpbjogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgY2l0eUNvZGU6IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIGRpc3RyaWN0Q29kZTogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgd2FyZENvZGU6IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIGNpdHk6IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGRpc3RyaWN0OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICB3YXJkOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBQYXJ0aWFsVHlwZSB9IGZyb20gJ0BuZXN0anMvbWFwcGVkLXR5cGVzJztcbmltcG9ydCB7IElzSW50LCBJc05vdEVtcHR5LCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVHcm91cElucHV0IHtcbiAgQElzTm90RW1wdHkoKVxuICBASXNJbnQoKVxuICBtZXJjaGFudElkPzogbnVtYmVyO1xuXG4gIHNrdT86IHN0cmluZztcblxuICBjb2RlPzogc3RyaW5nO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQElzU3RyaW5nKClcbiAgbmFtZT86IHN0cmluZztcblxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICBpbWFnZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFBhcnRpYWxVcGRhdGVHcm91cCBleHRlbmRzIFBhcnRpYWxUeXBlPENyZWF0ZUdyb3VwSW5wdXQ+KENyZWF0ZUdyb3VwSW5wdXQpIHt9XG4iLCJleHBvcnQgKiBmcm9tICcuL2NyZWF0ZS1ncm91cC5kdG8nO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jcmVhdGUuZHRvJztcblxuZXhwb3J0ICogZnJvbSAnLi9icmFuY2gnO1xuXG5leHBvcnQgKiBmcm9tICcuL2dyb3VwJztcblxuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlJztcbiIsImltcG9ydCB7IFBhcnRpYWxUeXBlIH0gZnJvbSAnQG5lc3Rqcy9tYXBwZWQtdHlwZXMnO1xuaW1wb3J0IHsgSXNJbnQsIElzTm90RW1wdHksIElzT3B0aW9uYWwsIElzU3RyaW5nIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuaW1wb3J0IHsgRVNlcnZpY2VTaG93VHlwZSwgRVNlcnZpY2VUeXBlIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVTZXJ2aWNlSW5wdXQge1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc0ludCgpXG4gIGdyb3VwSWQ/OiBudW1iZXI7XG5cbiAgc2t1Pzogc3RyaW5nO1xuXG4gIGNvZGU/OiBzdHJpbmc7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNTdHJpbmcoKVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIGltYWdlPzogc3RyaW5nO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgcHJpY2U/OiBudW1iZXI7XG5cbiAgaW5pdGlhbFByaWNlPzogbnVtYmVyO1xuXG4gIGR1cmF0aW9uSG91cj86IG51bWJlcjtcblxuICBkdXJhdGlvbk1pbnV0ZT86IG51bWJlcjtcblxuICB0eXBlPzogRVNlcnZpY2VUeXBlO1xuXG4gIHNob3dUeXBlPzogRVNlcnZpY2VTaG93VHlwZTtcblxuICBjYW5QcmludGFibGVJbnZvaWNlPzogYm9vbGVhbjtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0ludCgpXG4gIG1lcmNoYW50SWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJ0aWFsVXBkYXRlU2VydmljZSBleHRlbmRzIFBhcnRpYWxUeXBlKENyZWF0ZVNlcnZpY2VJbnB1dCkge31cbiIsImV4cG9ydCAqIGZyb20gJy4vY3JlYXRlLXNlcnZpY2UuZHRvJztcbiIsImltcG9ydCB7IElzRW51bSwgSXNOb3RFbXB0eSwgSXNTdHJpbmcgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5pbXBvcnQgeyBFRGV2aWNlT3MgfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIERldmljZUlucHV0RHRvIHtcbiAgQElzRW51bShFRGV2aWNlT3MpXG4gIEBJc05vdEVtcHR5KClcbiAgb3M6IEVEZXZpY2VPcztcblxuICBASXNTdHJpbmcoKVxuICBASXNOb3RFbXB0eSgpXG4gIGRldmljZUlkOiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzTm90RW1wdHkoKVxuICB0b2tlbjogc3RyaW5nO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9kZXZpY2UuZHRvJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci5kdG8nO1xuZXhwb3J0ICogZnJvbSAnLi90b2tlbi5kdG8nO1xuIiwiaW1wb3J0IHsgUHJvcGVydHkgfSBmcm9tICdAbGlicy9jb3JlJztcblxuaW1wb3J0IHsgQmFzZUR0byB9IGZyb20gJy4uL2Jhc2UvYmFzZS5kdG8nO1xuXG5leHBvcnQgY2xhc3MgVG9rZW5EdG8gZXh0ZW5kcyBCYXNlRHRvPG9iamVjdD4ge1xuICBAUHJvcGVydHkoKVxuICBsYW5nOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBUcmFuc2Zvcm0sIFRyYW5zZm9ybUZuUGFyYW1zIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHtcbiAgSXNCb29sZWFuLFxuICBJc0VtYWlsLFxuICBJc0VudW0sXG4gIElzSW50LFxuICBJc05vdEVtcHR5LFxuICBJc09wdGlvbmFsLFxuICBJc1N0cmluZyxcbiAgTWF4TGVuZ3RoLFxuICBNaW5MZW5ndGgsXG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmltcG9ydCB7IEJhc2VRdWVyeUR0byB9IGZyb20gJy4uL2Jhc2UvYmFzZS5kdG8nO1xuXG5pbXBvcnQgeyBNYXRjaCB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvY29yZSc7XG5pbXBvcnQgeyBFQ3VzdG9tZXJMZXZlbCwgRVVzZXJHZW5kZXIsIEVVc2VyUm9sZSwgRVVzZXJTdGF0dXMgfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkSW5wdXQge1xuICBASXNTdHJpbmcoKVxuICBASXNOb3RFbXB0eSgpXG4gIGN1cnJlbnRQYXNzd29yZDogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgbmV3UGFzc3dvcmQ6IHN0cmluZztcblxuICBATWF0Y2goJ25ld1Bhc3N3b3JkJylcbiAgQElzU3RyaW5nKClcbiAgQElzTm90RW1wdHkoKVxuICBjb25maXJtUGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEFkZE9wZXJhdG9yRHRvIHtcbiAgQFRyYW5zZm9ybSgoeyB2YWx1ZSB9OiBUcmFuc2Zvcm1GblBhcmFtcykgPT4gdmFsdWU/LnRyaW0oKS50b0xvd2VyQ2FzZSgpKVxuICBASXNFbWFpbCgpXG4gIEBJc05vdEVtcHR5KClcbiAgZW1haWw6IHN0cmluZztcblxuICBATWF4TGVuZ3RoKDMwKVxuICBATWluTGVuZ3RoKDUpXG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgcGFzc3dvcmQ6IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNOb3RFbXB0eSgpXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XG5cbiAgQElzRW51bShFVXNlclJvbGUpXG4gIEBJc05vdEVtcHR5KClcbiAgcm9sZTogRVVzZXJSb2xlO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQElzSW50KClcbiAgbWVyY2hhbnRJZD86IG51bWJlcjtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc0ludCgpXG4gIGJyYW5jaElkPzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRW51bShFVXNlclN0YXR1cylcbiAgc3RhdHVzOiBFVXNlclN0YXR1cztcblxuICBASXNFbnVtKEVVc2VyR2VuZGVyKVxuICBASXNPcHRpb25hbCgpXG4gIGdlbmRlcjogRVVzZXJHZW5kZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBsZXZlbD86IEVDdXN0b21lckxldmVsO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgY29udGFjdDogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgZG9iRGF5OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBkb2JNb250aDogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgZG9iWWVhcjogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgb2NjdXBhdGlvbj86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGF2YXRhcj86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGFkZHJlc3M/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBjaXR5Q29kZT86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIGRpc3RyaWN0Q29kZT86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIHdhcmRDb2RlPzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgcmVmZXJyZXI/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICByZWZlcnJlckNvZGU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBjdXN0b21lckNvZGU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBmYWNlYm9vaz86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIHphbG9QaG9uZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGhlaWdodD86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIHdlaWdodD86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIG1lbWJlckNhcmRObz86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGNvbXBhbnk/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICB0YXhObz86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIG5vdGU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICByZWxhdGVkVXNlcj86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIHJlbGF0ZWRVc2VyUm9sZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIHJlbGF0ZWRVc2VyUGhvbmU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQYWdpbmF0ZVVzZXJEdG8gZXh0ZW5kcyBCYXNlUXVlcnlEdG8ge1xuICBASXNCb29sZWFuKClcbiAgQElzT3B0aW9uYWwoKVxuICBleGNsdWRlTWU6IGJvb2xlYW47XG59XG4iLCJpbXBvcnQgeyBNZXJjaGFudERhdGFiYXNlTW9kdWxlIH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvY29ubmVjdGlvbi9tZXJjaGFudCc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IE1lcmNoYW50TW9kdWxlIH0gZnJvbSAnLi9tZXJjaGFudC9tZXJjaGFudC5tb2R1bGUnO1xuaW1wb3J0IHsgQnJhbmNoTW9kdWxlIH0gZnJvbSAnLi9icmFuY2gvYnJhbmNoLm1vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWVyY2hhbnREYXRhYmFzZU1vZHVsZSwgTWVyY2hhbnRNb2R1bGUsIEJyYW5jaE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQnJhbmNoTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBCcmFuY2hSZXBvc2l0b3J5IH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvcmVwb3NpdG9yaWVzJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFNlY3JldHNNb2R1bGUgfSBmcm9tICdsaWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvbW9kdWxlJztcbmltcG9ydCB7IFNlcXVlbGl6ZU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcblxuaW1wb3J0IHsgQnJhbmNoU2VydmljZSB9IGZyb20gJy4vYnJhbmNoLnNlcnZpY2UnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1NlY3JldHNNb2R1bGUsIFNlcXVlbGl6ZU1vZHVsZS5mb3JGZWF0dXJlKFtCcmFuY2hNb2RlbF0pXSxcbiAgcHJvdmlkZXJzOiBbQnJhbmNoU2VydmljZSwgQnJhbmNoUmVwb3NpdG9yeV0sXG4gIGV4cG9ydHM6IFtCcmFuY2hTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgQnJhbmNoTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBMSU1JVCwgUEFHRSB9IGZyb20gJ0BsaWJzL2NvcmUvY29uc3RhbnRzJztcbmltcG9ydCB7IEJyYW5jaE1vZGVsIH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvZW50aXRpZXMnO1xuaW1wb3J0IHsgQnJhbmNoUmVwb3NpdG9yeSB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlL3JlcG9zaXRvcmllcyc7XG5pbXBvcnQgeyBCcmFuY2hQcm90bywgQ29tbW9uUHJvdG8gfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEZpbmRPcHRpb25zIH0gZnJvbSAnc2VxdWVsaXplJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyYW5jaFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGJyYW5jaFJlcG9zaXRvcnk6IEJyYW5jaFJlcG9zaXRvcnkpIHt9XG5cbiAgYXN5bmMgY3JlYXRlKGR0bzogQnJhbmNoUHJvdG8uQ3JlYXRlQnJhbmNoSW5wdXQpOiBQcm9taXNlPEJyYW5jaE1vZGVsPiB7XG4gICAgY29uc3QgYnJhbmNoID0gYXdhaXQgdGhpcy5icmFuY2hSZXBvc2l0b3J5LmNyZWF0ZShkdG8pO1xuXG4gICAgcmV0dXJuIGJyYW5jaDtcbiAgfVxuXG4gIGFzeW5jIGZpbmQocmVxdWVzdDogQ29tbW9uUHJvdG8uUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxCcmFuY2hNb2RlbFtdPiB7XG4gICAgY29uc3QgYnJhbmNoZXMgPSBhd2FpdCB0aGlzLmJyYW5jaFJlcG9zaXRvcnkuZmluZCh7XG4gICAgICB3aGVyZTogSlNPTi5wYXJzZShyZXF1ZXN0LndoZXJlKSxcbiAgICB9KTtcblxuICAgIHJldHVybiBicmFuY2hlcztcbiAgfVxuXG4gIGFzeW5jIGZpbmRPbmUocXVlcnk6IEZpbmRPcHRpb25zKTogUHJvbWlzZTxCcmFuY2hNb2RlbD4ge1xuICAgIGNvbnN0IHJlc3VsdDogQnJhbmNoTW9kZWwgPSBhd2FpdCB0aGlzLmJyYW5jaFJlcG9zaXRvcnkuZmluZE9uZSh7XG4gICAgICAuLi5xdWVyeSxcbiAgICAgIHJhdzogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBhc3luYyBmaW5kV2l0aFBhZ2luZyhyZXF1ZXN0OiBDb21tb25Qcm90by5RdWVyeVJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IGJhc2VXaGVyZVF1ZXJ5ID0gIWlzRW1wdHkocmVxdWVzdC53aGVyZSkgPyBKU09OLnBhcnNlKHJlcXVlc3Qud2hlcmUpIDogdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5icmFuY2hSZXBvc2l0b3J5LmZpbmRBbmRQYWdpbmF0ZSh7XG4gICAgICAuLi5yZXF1ZXN0LFxuICAgICAgd2hlcmU6IGJhc2VXaGVyZVF1ZXJ5LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShyZXF1ZXN0OiBCcmFuY2hQcm90by5VcGRhdGVCcmFuY2hJbnB1dCk6IFByb21pc2U8QnJhbmNoTW9kZWw+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmJyYW5jaFJlcG9zaXRvcnkudXBkYXRlKHJlcXVlc3QuZGF0YSwge1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHJlcXVlc3QuaWQsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRbMF07XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZChpZDogbnVtYmVyKTogUHJvbWlzZTxCcmFuY2hNb2RlbD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYnJhbmNoUmVwb3NpdG9yeS5maW5kQnlJZChpZCwge1xuICAgICAgcmF3OiB0cnVlLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR3JvdXBNb2RlbCB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlL2VudGl0aWVzJztcbmltcG9ydCB7IEdyb3VwUmVwb3NpdG9yeSB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlL3JlcG9zaXRvcmllcyc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBTZXF1ZWxpemVNb2R1bGUgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBTZWNyZXRzTW9kdWxlIH0gZnJvbSAnbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL21vZHVsZSc7XG5cbmltcG9ydCB7IEdyb3VwU2VydmljZSB9IGZyb20gJ0AvbWVyY2hhbnQtc2VydmljZS9ncm91cC9ncm91cC5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtTZWNyZXRzTW9kdWxlLCBTZXF1ZWxpemVNb2R1bGUuZm9yRmVhdHVyZShbR3JvdXBNb2RlbF0pXSxcbiAgcHJvdmlkZXJzOiBbR3JvdXBTZXJ2aWNlLCBHcm91cFJlcG9zaXRvcnldLFxuICBleHBvcnRzOiBbR3JvdXBTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgR3JvdXBNb2R1bGUge31cbiIsImltcG9ydCB7IEdyb3VwTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBHcm91cFJlcG9zaXRvcnkgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9yZXBvc2l0b3JpZXMnO1xuaW1wb3J0IHsgQnJhbmNoUHJvdG8sIENvbW1vblByb3RvIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBGaW5kT3B0aW9ucyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcm91cFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGdyb3VwUmVwb3NpdG9yeTogR3JvdXBSZXBvc2l0b3J5KSB7fVxuXG4gIGFzeW5jIGNyZWF0ZShkdG86IEJyYW5jaFByb3RvLkNyZWF0ZUJyYW5jaElucHV0KTogUHJvbWlzZTxHcm91cE1vZGVsPiB7XG4gICAgY29uc3QgYnJhbmNoID0gYXdhaXQgdGhpcy5ncm91cFJlcG9zaXRvcnkuY3JlYXRlKGR0byk7XG5cbiAgICByZXR1cm4gYnJhbmNoO1xuICB9XG5cbiAgYXN5bmMgZmluZChyZXF1ZXN0OiBDb21tb25Qcm90by5RdWVyeVJlcXVlc3QpOiBQcm9taXNlPEdyb3VwTW9kZWxbXT4ge1xuICAgIGNvbnN0IGJyYW5jaGVzID0gYXdhaXQgdGhpcy5ncm91cFJlcG9zaXRvcnkuZmluZChKU09OLnBhcnNlKHJlcXVlc3Qud2hlcmUpKTtcblxuICAgIHJldHVybiBicmFuY2hlcztcbiAgfVxuXG4gIGFzeW5jIGZpbmRPbmUocXVlcnk6IEZpbmRPcHRpb25zKTogUHJvbWlzZTxHcm91cE1vZGVsPiB7XG4gICAgY29uc3QgcmVzdWx0OiBHcm91cE1vZGVsID0gYXdhaXQgdGhpcy5ncm91cFJlcG9zaXRvcnkuZmluZE9uZSh7XG4gICAgICAuLi5xdWVyeSxcbiAgICAgIHJhdzogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBhc3luYyBmaW5kV2l0aFBhZ2luZyhyZXF1ZXN0OiBDb21tb25Qcm90by5RdWVyeVJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IGJhc2VXaGVyZVF1ZXJ5ID0gIWlzRW1wdHkocmVxdWVzdC53aGVyZSkgPyBKU09OLnBhcnNlKHJlcXVlc3Qud2hlcmUpIDogdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5ncm91cFJlcG9zaXRvcnkuZmluZEFuZFBhZ2luYXRlKHtcbiAgICAgIC4uLnJlcXVlc3QsXG4gICAgICB3aGVyZTogYmFzZVdoZXJlUXVlcnksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKHJlcXVlc3Q6IEJyYW5jaFByb3RvLlVwZGF0ZUJyYW5jaElucHV0KTogUHJvbWlzZTxHcm91cE1vZGVsPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5ncm91cFJlcG9zaXRvcnkudXBkYXRlKHJlcXVlc3QuZGF0YSwge1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHJlcXVlc3QuaWQsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRbMF07XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZChpZDogbnVtYmVyKTogUHJvbWlzZTxHcm91cE1vZGVsPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5ncm91cFJlcG9zaXRvcnkuZmluZEJ5SWQoaWQsIHtcbiAgICAgIHJhdzogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBhc3luYyBkZWxldGUoaWQ6IG51bWJlcik6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZ3JvdXBSZXBvc2l0b3J5LmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1lcmNoYW50UHJvdG8gfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzJztcbmltcG9ydCB7XG4gIEJyYW5jaCxcbiAgQnJhbmNoUGFnaW5hdGlvbixcbiAgQnJhbmNoZXMsXG4gIENyZWF0ZUJyYW5jaElucHV0LFxuICBOdWxsYWJsZUJyYW5jaCxcbiAgVXBkYXRlQnJhbmNoSW5wdXQsXG59IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL2JyYW5jaCc7XG5pbXBvcnQgeyBDb3VudCwgSWQsIFF1ZXJ5UmVxdWVzdCB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL2NvbW1vbnMnO1xuaW1wb3J0IHtcbiAgQ3JlYXRlR3JvdXBJbnB1dCxcbiAgR3JvdXAsXG4gIEdyb3VwUGFnaW5hdGlvbixcbiAgTnVsbGFibGVHcm91cCxcbiAgVXBkYXRlR3JvdXBJbnB1dCxcbn0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3MvZ3JvdXAnO1xuaW1wb3J0IHtcbiAgQ3JlYXRlU2VydmljZUlucHV0LFxuICBGaW5kU2VydmljZU9mZnNldFBhZ2luYXRpb24sXG4gIEZpbmRTZXJ2aWNlc1BheWxvYWQsXG4gIE51bGxhYmxlU2VydmljZSxcbiAgU2VydmljZSxcbiAgVXBkYXRlU2VydmljZUlucHV0LFxufSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy9zZXJ2aWNlJztcbmltcG9ydCB7IEdycGNMb2dJbnRlcmNlcHRvciB9IGZyb20gJ0BsaWJzL2ludGVyY2VwdG9ycyc7XG5pbXBvcnQgeyBDb250cm9sbGVyLCBVc2VGaWx0ZXJzLCBVc2VJbnRlcmNlcHRvcnMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBHcnBjQWxsRXhjZXB0aW9uc0ZpbHRlciB9IGZyb20gJ2ZpbHRlcnMvZmlsdGVycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEJyYW5jaFNlcnZpY2UgfSBmcm9tICcuLi9icmFuY2gvYnJhbmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JvdXBTZXJ2aWNlIH0gZnJvbSAnLi4vZ3JvdXAvZ3JvdXAuc2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3NlcnZpY2Uuc2VydmljZSc7XG5cbmltcG9ydCB7IE1lcmNoYW50U2VydmljZSB9IGZyb20gJy4vbWVyY2hhbnQuc2VydmljZSc7XG5cbkBVc2VGaWx0ZXJzKEdycGNBbGxFeGNlcHRpb25zRmlsdGVyKVxuQFVzZUludGVyY2VwdG9ycyhHcnBjTG9nSW50ZXJjZXB0b3IpXG5AQ29udHJvbGxlcigpXG5ATWVyY2hhbnRQcm90by5NZXJjaGFudFNlcnZpY2VDb250cm9sbGVyTWV0aG9kcygpXG5leHBvcnQgY2xhc3MgTWVyY2hhbnRDb250cm9sbGVyIGltcGxlbWVudHMgTWVyY2hhbnRQcm90by5NZXJjaGFudFNlcnZpY2VDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBtZXJjaGFudFNlcnZpY2U6IE1lcmNoYW50U2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJyYW5jaFNlcnZpY2U6IEJyYW5jaFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBncm91cFNlcnZpY2U6IEdyb3VwU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNlcnZpY2VzU2VydmljZTogU2VydmljZXNTZXJ2aWNlLFxuICApIHt9XG5cbiAgYXN5bmMgZ3JvdXBzKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8R3JvdXBQYWdpbmF0aW9uPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5ncm91cFNlcnZpY2UuZmluZFdpdGhQYWdpbmcocmVxdWVzdCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZmluZEFsbChcbiAgICByZXF1ZXN0OiBRdWVyeVJlcXVlc3QsXG4gICk6IE1lcmNoYW50UHJvdG8uTWVyY2hhbnRzIHwgUHJvbWlzZTxNZXJjaGFudFByb3RvLk1lcmNoYW50cz4gfCBPYnNlcnZhYmxlPE1lcmNoYW50UHJvdG8uTWVyY2hhbnRzPiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgYXN5bmMgZmluZEJyYW5jaGVzKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8QnJhbmNoUGFnaW5hdGlvbj4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmJyYW5jaFNlcnZpY2UuZmluZFdpdGhQYWdpbmcocmVxdWVzdCk7XG4gIH1cblxuICBhc3luYyBmaW5kKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8TWVyY2hhbnRQcm90by5NZXJjaGFudFBhZ2luYXRpb24+IHtcbiAgICBjb25zdCBtZXJjaGFudHMgPSBhd2FpdCB0aGlzLm1lcmNoYW50U2VydmljZS5maW5kV2l0aFBhZ2luZyhyZXF1ZXN0KTtcbiAgICByZXR1cm4gbWVyY2hhbnRzO1xuICB9XG5cbiAgYXN5bmMgZmluZE9uZShyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE1lcmNoYW50UHJvdG8uTnVsbGFibGVNZXJjaGFudD4ge1xuICAgIGNvbnN0IG1lcmNoYW50ID0gYXdhaXQgdGhpcy5tZXJjaGFudFNlcnZpY2UuZmluZE9uZShyZXF1ZXN0KTtcbiAgICByZXR1cm4geyBtZXJjaGFudCB9O1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlKHJlcXVlc3Q6IE1lcmNoYW50UHJvdG8uQ3JlYXRlSW5wdXQpOiBQcm9taXNlPE1lcmNoYW50UHJvdG8uQ3JlYXRlTWVyY2hhbnRSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMubWVyY2hhbnRTZXJ2aWNlLmNyZWF0ZShyZXF1ZXN0KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY291bnQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogQ291bnQgfCBPYnNlcnZhYmxlPENvdW50PiB8IFByb21pc2U8Q291bnQ+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZChpZDogSWQpOiBQcm9taXNlPE1lcmNoYW50UHJvdG8uTnVsbGFibGVNZXJjaGFudD4ge1xuICAgIGNvbnN0IG1lcmNoYW50ID0gYXdhaXQgdGhpcy5tZXJjaGFudFNlcnZpY2UuZmluZEJ5SWQoaWQuaWQpO1xuICAgIHJldHVybiB7IG1lcmNoYW50IH07XG4gIH1cblxuICBhc3luYyBicmFuY2gocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxOdWxsYWJsZUJyYW5jaD4ge1xuICAgIGNvbnN0IGJyYW5jaCA9IGF3YWl0IHRoaXMuYnJhbmNoU2VydmljZS5maW5kT25lKHtcbiAgICAgIHdoZXJlOiBKU09OLnBhcnNlKHJlcXVlc3Qud2hlcmUpLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgYnJhbmNoIH07XG4gIH1cblxuICBhc3luYyBicmFuY2hlcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPEJyYW5jaGVzPiB7XG4gICAgY29uc3QgYnJhbmNoZXMgPSBhd2FpdCB0aGlzLmJyYW5jaFNlcnZpY2UuZmluZChyZXF1ZXN0KTtcbiAgICByZXR1cm4geyBicmFuY2hlcyB9O1xuICB9XG5cbiAgYXN5bmMgZmluZEJyYW5jaEJ5SWQocmVxdWVzdDogSWQpOiBQcm9taXNlPE51bGxhYmxlQnJhbmNoPiB7XG4gICAgY29uc3QgYnJhbmNoID0gYXdhaXQgdGhpcy5icmFuY2hTZXJ2aWNlLmZpbmRCeUlkKHJlcXVlc3QuaWQpO1xuICAgIHJldHVybiB7IGJyYW5jaCB9O1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlQnJhbmNoKHJlcXVlc3Q6IENyZWF0ZUJyYW5jaElucHV0KTogUHJvbWlzZTxCcmFuY2g+IHtcbiAgICBjb25zdCBicmFuY2ggPSBhd2FpdCB0aGlzLmJyYW5jaFNlcnZpY2UuY3JlYXRlKHJlcXVlc3QpO1xuICAgIHJldHVybiBicmFuY2g7XG4gIH1cblxuICBhc3luYyB1cGRhdGVCcmFuY2gocmVxdWVzdDogVXBkYXRlQnJhbmNoSW5wdXQpOiBQcm9taXNlPEJyYW5jaD4ge1xuICAgIGNvbnN0IGJyYW5jaCA9IGF3YWl0IHRoaXMuYnJhbmNoU2VydmljZS51cGRhdGUocmVxdWVzdCk7XG4gICAgcmV0dXJuIGJyYW5jaDtcbiAgfVxuXG4gIGRlbGV0ZUJyYW5jaChyZXF1ZXN0OiBJZCk6IENvdW50IHwgT2JzZXJ2YWJsZTxDb3VudD4gfCBQcm9taXNlPENvdW50PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgZ3JvdXAocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogTnVsbGFibGVHcm91cCB8IFByb21pc2U8TnVsbGFibGVHcm91cD4gfCBPYnNlcnZhYmxlPE51bGxhYmxlR3JvdXA+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBmaW5kR3JvdXBCeUlkKHJlcXVlc3Q6IElkKTogTnVsbGFibGVHcm91cCB8IFByb21pc2U8TnVsbGFibGVHcm91cD4gfCBPYnNlcnZhYmxlPE51bGxhYmxlR3JvdXA+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVHcm91cChyZXF1ZXN0OiBDcmVhdGVHcm91cElucHV0KTogUHJvbWlzZTxHcm91cD4ge1xuICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgdGhpcy5ncm91cFNlcnZpY2UuY3JlYXRlKHJlcXVlc3QpO1xuXG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlR3JvdXAocmVxdWVzdDogVXBkYXRlR3JvdXBJbnB1dCk6IFByb21pc2U8R3JvdXA+IHtcbiAgICBjb25zdCBncm91cCA9IGF3YWl0IHRoaXMuZ3JvdXBTZXJ2aWNlLnVwZGF0ZShyZXF1ZXN0KTtcblxuICAgIHJldHVybiBncm91cDtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZUdyb3VwKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxDb3VudD4ge1xuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgdGhpcy5ncm91cFNlcnZpY2UuZGVsZXRlKHJlcXVlc3QuaWQpO1xuICAgIHJldHVybiB7IGNvdW50IH07XG4gIH1cblxuICBhc3luYyBzZXJ2aWNlKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8TnVsbGFibGVTZXJ2aWNlPiB7XG4gICAgY29uc3Qgc2VydmljZSA9IGF3YWl0IHRoaXMuc2VydmljZXNTZXJ2aWNlLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IEpTT04ucGFyc2UocmVxdWVzdC53aGVyZSksXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBzZXJ2aWNlIH07XG4gIH1cblxuICBhc3luYyBzZXJ2aWNlcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPEZpbmRTZXJ2aWNlc1BheWxvYWQ+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlc1NlcnZpY2UuZmluZFdpdGhQYWdpbmcocmVxdWVzdCk7XG5cbiAgICByZXR1cm4gc2VydmljZTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRTZXJ2aWNlQnlJZChyZXF1ZXN0OiBJZCk6IFByb21pc2U8TnVsbGFibGVTZXJ2aWNlPiB7XG4gICAgY29uc3Qgc2VydmljZSA9IGF3YWl0IHRoaXMuc2VydmljZXNTZXJ2aWNlLmZpbmRCeUlkKHJlcXVlc3QuaWQpO1xuXG4gICAgcmV0dXJuIHsgc2VydmljZSB9O1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlU2VydmljZShyZXF1ZXN0OiBDcmVhdGVTZXJ2aWNlSW5wdXQpOiBQcm9taXNlPFNlcnZpY2U+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlc1NlcnZpY2UuY3JlYXRlKHJlcXVlc3QpO1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG4gIH1cblxuICBhc3luYyB1cGRhdGVTZXJ2aWNlKHJlcXVlc3Q6IFVwZGF0ZVNlcnZpY2VJbnB1dCk6IFByb21pc2U8U2VydmljZT4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBhd2FpdCB0aGlzLnNlcnZpY2VzU2VydmljZS51cGRhdGUocmVxdWVzdCk7XG5cbiAgICByZXR1cm4gc2VydmljZTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZVNlcnZpY2UocmVxdWVzdDogSWQpOiBQcm9taXNlPENvdW50PiB7XG4gICAgY29uc3QgY291bnQgPSBhd2FpdCB0aGlzLnNlcnZpY2VzU2VydmljZS5kZWxldGUocmVxdWVzdC5pZCk7XG4gICAgcmV0dXJuIHsgY291bnQgfTtcbiAgfVxuXG4gIGZpbmRTZXJ2aWNlT2Zmc2V0UGFnaW5hdGlvbihcbiAgICByZXF1ZXN0OiBRdWVyeVJlcXVlc3QsXG4gICk6IEZpbmRTZXJ2aWNlT2Zmc2V0UGFnaW5hdGlvbiB8IFByb21pc2U8RmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uPiB8IE9ic2VydmFibGU8RmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uPiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNZXJjaGFudE1vZGVsIH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvZW50aXRpZXMnO1xuaW1wb3J0IHsgTWVyY2hhbnRSZXBvc2l0b3J5IH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvcmVwb3NpdG9yaWVzJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFNlcXVlbGl6ZU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcbmltcG9ydCB7IFNlY3JldHNNb2R1bGUgfSBmcm9tICdsaWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvbW9kdWxlJztcblxuaW1wb3J0IHsgQnJhbmNoTW9kdWxlIH0gZnJvbSAnLi4vYnJhbmNoL2JyYW5jaC5tb2R1bGUnO1xuaW1wb3J0IHsgR3JvdXBNb2R1bGUgfSBmcm9tICcuLi9ncm91cC9ncm91cC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VydmljZXNNb2R1bGUgfSBmcm9tICcuLi9zZXJ2aWNlL3NlcnZpY2UubW9kdWxlJztcblxuaW1wb3J0IHsgTWVyY2hhbnRDb250cm9sbGVyIH0gZnJvbSAnLi9tZXJjaGFudC5jb250cm9sbGVyJztcbmltcG9ydCB7IE1lcmNoYW50U2VydmljZSB9IGZyb20gJy4vbWVyY2hhbnQuc2VydmljZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbU2VjcmV0c01vZHVsZSwgU2VxdWVsaXplTW9kdWxlLmZvckZlYXR1cmUoW01lcmNoYW50TW9kZWxdKSwgQnJhbmNoTW9kdWxlLCBHcm91cE1vZHVsZSwgU2VydmljZXNNb2R1bGVdLFxuICBjb250cm9sbGVyczogW01lcmNoYW50Q29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW01lcmNoYW50U2VydmljZSwgTWVyY2hhbnRSZXBvc2l0b3J5XSxcbn0pXG5leHBvcnQgY2xhc3MgTWVyY2hhbnRNb2R1bGUge31cbiIsImltcG9ydCB7IE1lcmNoYW50TW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBNZXJjaGFudFJlcG9zaXRvcnkgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9yZXBvc2l0b3JpZXMnO1xuaW1wb3J0IHsgQ29tbW9uUHJvdG8sIE1lcmNoYW50UHJvdG8gfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzJztcbmltcG9ydCB7IENyZWF0ZU1lcmNoYW50UmVzcG9uc2UgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy9tZXJjaGFudCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IEJyYW5jaFNlcnZpY2UgfSBmcm9tICcuLi9icmFuY2gvYnJhbmNoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVyY2hhbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtZXJjaGFudFJlcG9zaXRvcnk6IE1lcmNoYW50UmVwb3NpdG9yeSwgcHJpdmF0ZSByZWFkb25seSBicmFuY2hTZXJ2aWNlOiBCcmFuY2hTZXJ2aWNlKSB7fVxuXG4gIGFzeW5jIGNyZWF0ZShkdG86IE1lcmNoYW50UHJvdG8uQ3JlYXRlSW5wdXQpOiBQcm9taXNlPENyZWF0ZU1lcmNoYW50UmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbWVyY2hhbnQgPSBhd2FpdCB0aGlzLm1lcmNoYW50UmVwb3NpdG9yeS5jcmVhdGUoZHRvKTtcbiAgICAgIGNvbnN0IGJyYW5jaCA9IGF3YWl0IHRoaXMuYnJhbmNoU2VydmljZS5jcmVhdGUoeyAuLi5kdG8sIG1lcmNoYW50SWQ6IG1lcmNoYW50LmlkIH0pO1xuICAgICAgcmV0dXJuIHsgbWVyY2hhbnQsIGJyYW5jaCB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZmluZChyZXF1ZXN0OiBDb21tb25Qcm90by5RdWVyeVJlcXVlc3QpOiBQcm9taXNlPE1lcmNoYW50TW9kZWxbXT4ge1xuICAgIGNvbnN0IG1lcmNoYW50cyA9IGF3YWl0IHRoaXMubWVyY2hhbnRSZXBvc2l0b3J5LmZpbmQoSlNPTi5wYXJzZShyZXF1ZXN0LndoZXJlKSk7XG4gICAgcmV0dXJuIG1lcmNoYW50cztcbiAgfVxuXG4gIGFzeW5jIGZpbmRXaXRoUGFnaW5nKHJlcXVlc3Q6IENvbW1vblByb3RvLlF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgYmFzZVdoZXJlUXVlcnkgPSAhaXNFbXB0eShyZXF1ZXN0LndoZXJlKSA/IEpTT04ucGFyc2UocmVxdWVzdC53aGVyZSkgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1lcmNoYW50UmVwb3NpdG9yeS5maW5kQW5kUGFnaW5hdGUoe1xuICAgICAgLi4ucmVxdWVzdCxcbiAgICAgIHdoZXJlOiBiYXNlV2hlcmVRdWVyeSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZChpZDogbnVtYmVyKTogUHJvbWlzZTxNZXJjaGFudE1vZGVsPiB7XG4gICAgY29uc3QgbWVyY2hhbnQgPSBhd2FpdCB0aGlzLm1lcmNoYW50UmVwb3NpdG9yeS5maW5kQnlJZChpZCk7XG4gICAgcmV0dXJuIG1lcmNoYW50O1xuICB9XG5cbiAgYXN5bmMgZmluZE9uZShkdG86IENvbW1vblByb3RvLlF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8TWVyY2hhbnRNb2RlbD4ge1xuICAgIGNvbnN0IHdoZXJlID0gIWlzRW1wdHkoZHRvLndoZXJlKSA/IEpTT04ucGFyc2UoZHRvLndoZXJlKSA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubWVyY2hhbnRSZXBvc2l0b3J5LmZpbmRPbmUoe1xuICAgICAgLi4uZHRvLFxuICAgICAgd2hlcmUsXG4gICAgICByYXc6IHRydWUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBTZXJ2aWNlTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBTZXJ2aWNlUmVwb3NpdG9yeSB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlL3JlcG9zaXRvcmllcyc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBTZXF1ZWxpemVNb2R1bGUgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBTZWNyZXRzTW9kdWxlIH0gZnJvbSAnbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL21vZHVsZSc7XG5cbmltcG9ydCB7IFNlcnZpY2VzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2Uvc2VydmljZS5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtTZWNyZXRzTW9kdWxlLCBTZXF1ZWxpemVNb2R1bGUuZm9yRmVhdHVyZShbU2VydmljZU1vZGVsXSldLFxuICBwcm92aWRlcnM6IFtTZXJ2aWNlc1NlcnZpY2UsIFNlcnZpY2VSZXBvc2l0b3J5XSxcbiAgZXhwb3J0czogW1NlcnZpY2VzU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBTZXJ2aWNlTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBTZXJ2aWNlUmVwb3NpdG9yeSB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlL3JlcG9zaXRvcmllcyc7XG5pbXBvcnQgeyBCcmFuY2hQcm90bywgQ29tbW9uUHJvdG8gfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEZpbmRPcHRpb25zIH0gZnJvbSAnc2VxdWVsaXplJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2VydmljZVJlcG9zaXRvcnk6IFNlcnZpY2VSZXBvc2l0b3J5KSB7fVxuXG4gIGFzeW5jIGNyZWF0ZShkdG86IEJyYW5jaFByb3RvLkNyZWF0ZUJyYW5jaElucHV0KTogUHJvbWlzZTxTZXJ2aWNlTW9kZWw+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlUmVwb3NpdG9yeS5jcmVhdGUoZHRvKTtcblxuICAgIHJldHVybiBzZXJ2aWNlO1xuICB9XG5cbiAgYXN5bmMgZmluZChyZXF1ZXN0OiBDb21tb25Qcm90by5RdWVyeVJlcXVlc3QpOiBQcm9taXNlPFNlcnZpY2VNb2RlbFtdPiB7XG4gICAgY29uc3Qgc2VydmljZXMgPSBhd2FpdCB0aGlzLnNlcnZpY2VSZXBvc2l0b3J5LmZpbmQoSlNPTi5wYXJzZShyZXF1ZXN0LndoZXJlKSk7XG5cbiAgICByZXR1cm4gc2VydmljZXM7XG4gIH1cblxuICBhc3luYyBmaW5kT25lKHF1ZXJ5OiBGaW5kT3B0aW9ucyk6IFByb21pc2U8U2VydmljZU1vZGVsPiB7XG4gICAgY29uc3QgcmVzdWx0OiBTZXJ2aWNlTW9kZWwgPSBhd2FpdCB0aGlzLnNlcnZpY2VSZXBvc2l0b3J5LmZpbmRPbmUoe1xuICAgICAgLi4ucXVlcnksXG4gICAgICByYXc6IHRydWUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYXN5bmMgZmluZFdpdGhQYWdpbmcocmVxdWVzdDogQ29tbW9uUHJvdG8uUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBiYXNlV2hlcmVRdWVyeSA9ICFpc0VtcHR5KHJlcXVlc3Qud2hlcmUpID8gSlNPTi5wYXJzZShyZXF1ZXN0LndoZXJlKSA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2VydmljZVJlcG9zaXRvcnkuZmluZEFuZFBhZ2luYXRlKHtcbiAgICAgIC4uLnJlcXVlc3QsXG4gICAgICB3aGVyZTogYmFzZVdoZXJlUXVlcnksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKHJlcXVlc3Q6IEJyYW5jaFByb3RvLlVwZGF0ZUJyYW5jaElucHV0KTogUHJvbWlzZTxTZXJ2aWNlTW9kZWw+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlcnZpY2VSZXBvc2l0b3J5LnVwZGF0ZShyZXF1ZXN0LmRhdGEsIHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiByZXF1ZXN0LmlkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0WzBdO1xuICB9XG5cbiAgYXN5bmMgZmluZEJ5SWQoaWQ6IG51bWJlcik6IFByb21pc2U8U2VydmljZU1vZGVsPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZXJ2aWNlUmVwb3NpdG9yeS5maW5kQnlJZChpZCwge1xuICAgICAgcmF3OiB0cnVlLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZShpZDogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5zZXJ2aWNlUmVwb3NpdG9yeS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBPcCwgT3BlcmF0b3JzQWxpYXNlcyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmV4cG9ydCBjb25zdCBvcGVyYXRvcnNBbGlhc2VzOiBPcGVyYXRvcnNBbGlhc2VzID0ge1xuICBfYW5kOiBPcC5hbmQsXG4gIF9vcjogT3Aub3IsXG4gIF9lcTogT3AuZXEsXG4gIF9uZTogT3AubmUsXG4gIF9pczogT3AuaXMsXG4gIF9ub3Q6IE9wLm5vdCxcbiAgX2NvbDogT3AuY29sLFxuICBfZ3Q6IE9wLmd0LFxuICBfZ3RlOiBPcC5ndGUsXG4gIF9sdDogT3AubHQsXG4gIF9sdGU6IE9wLmx0ZSxcbiAgX2JldHdlZW46IE9wLmJldHdlZW4sXG4gIF9ub3RCZXR3ZWVuOiBPcC5ub3RCZXR3ZWVuLFxuICBfYWxsOiBPcC5hbGwsXG4gIF9pbjogT3AuaW4sXG4gIF9ub3RJbjogT3Aubm90SW4sXG4gIF9saWtlOiBPcC5saWtlLFxuICBfbm90TGlrZTogT3Aubm90TGlrZSxcbiAgX3N0YXJ0c1dpdGg6IE9wLnN0YXJ0c1dpdGgsXG4gIF9lbmRzV2l0aDogT3AuZW5kc1dpdGgsXG4gIF9zdWJzdHJpbmc6IE9wLnN1YnN0cmluZyxcbiAgX2lMaWtlOiBPcC5pTGlrZSxcbiAgX25vdElMaWtlOiBPcC5ub3RJTGlrZSxcbiAgX3JlZ2V4cDogT3AucmVnZXhwLFxuICBfbm90UmVnZXhwOiBPcC5ub3RSZWdleHAsXG4gIF9pUmVnZXhwOiBPcC5pUmVnZXhwLFxuICBfbm90SVJlZ2V4cDogT3Aubm90SVJlZ2V4cCxcbiAgX2FueTogT3AuYW55LFxuICBfY29udGFpbnM6IE9wLmNvbnRhaW5zLFxuICBfY29udGFpbmVkOiBPcC5jb250YWluZWQsXG4gIF9vdmVybGFwOiBPcC5vdmVybGFwLFxuICBfYWRqYWNlbnQ6IE9wLmFkamFjZW50LFxuICBfc3RyaWN0TGVmdDogT3Auc3RyaWN0TGVmdCxcbiAgX3N0cmljdFJpZ2h0OiBPcC5zdHJpY3RSaWdodCxcbiAgX25vRXh0ZW5kUmlnaHQ6IE9wLm5vRXh0ZW5kUmlnaHQsXG4gIF9ub0V4dGVuZExlZnQ6IE9wLm5vRXh0ZW5kTGVmdCxcbiAgX3ZhbHVlczogT3AudmFsdWVzLFxufTtcblxuZXhwb3J0IGNvbnN0IExJTUlUID0gMTA7XG5cbmV4cG9ydCBjb25zdCBQQUdFID0gMTtcbiIsImV4cG9ydCAqIGZyb20gJy4vZGF0YWJhc2UuY29uc3RhbnQnO1xuIiwiZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcbiIsImV4cG9ydCBjb25zdCBBVVRIX01FU1NBR0UgPSB7XG4gIExPR0lOOiB7XG4gICAgSU5WQUxJRDogJ0ludmFsaWQgY3JlZGVudGlhbHMuJyxcbiAgfSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2F1dGgubWVzc2FnZSc7XG4iLCJleHBvcnQgY29uc3QgQ09NTU9OX01FU1NBR0UgPSB7XG4gIElOVkFMSUQ6ICdJbnZhbGlkIHJlcXVlc3QnLFxuICBDUkVBVEU6IHtcbiAgICBFWElTVF9FTUFJTDogJ1RoZSBlbWFpbCBpcyBleGlzdCcsXG4gIH0sXG4gIFJFQUQ6IHtcbiAgICBOT1RfRk9VTkQ6ICdUaGUgbWVyY2hhbnQgbm90IGZvdW5kJyxcbiAgfSxcbiAgVVBEQVRFOiB7XG4gICAgRkFJTDogJ0NhbiBub3QgdXBkYXRlIG1lcmNoYW50JyxcbiAgfSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXInO1xuXG5leHBvcnQgKiBmcm9tICcuL21lcmNoYW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9hdXRoJztcblxuZXhwb3J0ICogZnJvbSAnLi9jb21tb24ubWVzc2FnZSc7XG4iLCJleHBvcnQgY29uc3QgQlJBTkNIX01FU1NBR0UgPSB7XG4gIFJFQUQ6IHtcbiAgICBOT1RfRk9VTkQ6ICdUaGUgYnJhbmNoIG5vdCBmb3VuZCcsXG4gIH0sXG4gIENSRUFURToge1xuICAgIEVYSVNURUQ6ICdUaGUgYnJhbmNoIGlzIGV4aXN0JyxcbiAgfSxcbiAgVVBEQVRFOiB7XG4gICAgRkFJTDogJ0NhbiBub3QgdXBkYXRlIHVzZXInLFxuICAgIElOVkFMSURfUEFTU1dPUkQ6ICdFcnJvciB1cGRhdGluZyBwYXNzd29yZC4gS2luZGx5IGNoZWNrIHlvdXIgcGFzc3dvcmRzJyxcbiAgfSxcbiAgREVMRVRFOiB7XG4gICAgRkFJTDogJ0RlbGV0ZSBicmFuY2ggZmFpbGVkJyxcbiAgICBTVUNDRVNTOiAnRGVsZXRlIGJyYW5jaCBzdWNjZXNzZnVsbHknLFxuICB9LFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vbWVyY2hhbnQubWVzc2FnZSc7XG5leHBvcnQgKiBmcm9tICcuL2JyYW5jaC5tZXNzYWdlJztcbiIsImV4cG9ydCBjb25zdCBNRVJDSEFOVF9NRVNTQUdFID0ge1xuICBDUkVBVEU6IHtcbiAgICBFWElTVF9FTUFJTDogJ1RoZSBlbWFpbCBpcyBleGlzdCcsXG4gIH0sXG4gIFJFQUQ6IHtcbiAgICBOT1RfRk9VTkQ6ICdUaGUgbWVyY2hhbnQgbm90IGZvdW5kJyxcbiAgfSxcbiAgVVBEQVRFOiB7XG4gICAgRkFJTDogJ0NhbiBub3QgdXBkYXRlIG1lcmNoYW50JyxcbiAgfSxcbn07XG4iLCJleHBvcnQgY29uc3QgQ1VTVE9NRVJfTUVTU0FHRSA9IHtcbiAgQ1JFQVRFOiB7XG4gICAgRVhJU1RfRU1BSUw6ICdUaGUgZW1haWwgaXMgZXhpc3QnLFxuICAgIFNVQ0NFU1NGVUw6ICdDcmVhdGUgY3VzdG9tZXIgc3VjY2Vzc2Z1bGx5JyxcbiAgfSxcbiAgVVBEQVRFOiB7XG4gICAgRkFJTDogJ0NhbiBub3QgdXBkYXRlIGN1c3RvbWVyJyxcbiAgICBJTlZBTElEX1BBU1NXT1JEOiAnRXJyb3IgdXBkYXRpbmcgcGFzc3dvcmQuIEtpbmRseSBjaGVjayB5b3VyIHBhc3N3b3JkcycsXG4gIH0sXG4gIFJFQUQ6IHtcbiAgICBOT1RfRk9VTkQ6ICdUaGUgY3VzdG9tZXIgbm90IGZvdW5kJyxcbiAgfSxcbiAgREVMRVRFOiB7XG4gICAgRkFJTDogJ0NhbiBub3QgcmVtb3ZlIHRoZSBjdXN0b21lcicsXG4gIH0sXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyLm1lc3NhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jdXN0b21lci5tZXNzYWdlJztcbiIsImV4cG9ydCBjb25zdCBVU0VSX01FU1NBR0UgPSB7XG4gIENSRUFURToge1xuICAgIEVYSVNUX0VNQUlMOiAnVGhlIGVtYWlsIGlzIGV4aXN0JyxcbiAgfSxcbiAgUkVBRDoge1xuICAgIE5PVF9GT1VORDogJ1RoZSB1c2VyIG5vdCBmb3VuZCcsXG4gIH0sXG4gIFVQREFURToge1xuICAgIEZBSUw6ICdDYW4gbm90IHVwZGF0ZSB1c2VyJyxcbiAgICBJTlZBTElEX1BBU1NXT1JEOiAnRXJyb3IgdXBkYXRpbmcgcGFzc3dvcmQuIEtpbmRseSBjaGVjayB5b3VyIHBhc3N3b3JkcycsXG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgSHR0cEV4Y2VwdGlvbiwgSHR0cFN0YXR1cyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFJwY0V4Y2VwdGlvbiB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBFcnJvckhlbHBlciB7XG4gIHN0YXRpYyBCYWRSZXF1ZXN0RXhjZXB0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRocm93IG5ldyBScGNFeGNlcHRpb24oe1xuICAgICAgY29kZTogSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgSHR0cEJhZFJlcXVlc3RFeGNlcHRpb24obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24obWVzc2FnZSwgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCk7XG4gIH1cblxuICBzdGF0aWMgVW5hdXRob3JpemVkRXhjZXB0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRocm93IG5ldyBScGNFeGNlcHRpb24oe1xuICAgICAgY29kZTogSHR0cFN0YXR1cy5VTkFVVEhPUklaRUQsXG4gICAgICBtZXNzYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIEh0dHBVbmF1dGhvcml6ZWRFeGNlcHRpb24obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24obWVzc2FnZSwgSHR0cFN0YXR1cy5VTkFVVEhPUklaRUQpO1xuICB9XG5cbiAgc3RhdGljIE5vdEZvdW5kRXhjZXB0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRocm93IG5ldyBScGNFeGNlcHRpb24oe1xuICAgICAgY29kZTogSHR0cFN0YXR1cy5OT1RfRk9VTkQsXG4gICAgICBtZXNzYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIEh0dHBOb3RGb3VuZEV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgSHR0cEV4Y2VwdGlvbihtZXNzYWdlLCBIdHRwU3RhdHVzLk5PVF9GT1VORCk7XG4gIH1cblxuICBzdGF0aWMgRm9yYmlkZGVuRXhjZXB0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRocm93IG5ldyBScGNFeGNlcHRpb24oe1xuICAgICAgY29kZTogSHR0cFN0YXR1cy5GT1JCSURERU4sXG4gICAgICBtZXNzYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIEh0dHBGb3JiaWRkZW5FeGNlcHRpb24obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24obWVzc2FnZSwgSHR0cFN0YXR1cy5GT1JCSURERU4pO1xuICB9XG5cbiAgc3RhdGljIEludGVybmFsU2VydmVyRXJyb3JFeGNlcHRpb24obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IFJwY0V4Y2VwdGlvbih7XG4gICAgICBjb2RlOiBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUixcbiAgICAgIG1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgSHR0cEludGVybmFsU2VydmVyRXJyb3JFeGNlcHRpb24obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24obWVzc2FnZSwgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgbnVtYmVySW5wdXRzID0gKFxuICBpbnB1dDogb2JqZWN0ID0ge30sXG4pOiB7XG4gIFtrZXk6IHN0cmluZ106IG51bWJlcjtcbn0gPT5cbiAgT2JqZWN0LmtleXMoaW5wdXQpLnJlZHVjZSgoYWNjOiB1bmtub3duLCB2YWw6IHN0cmluZykgPT4ge1xuICAgIGFjY1t2YWxdID0gK2lucHV0W3ZhbF0gYXMgbnVtYmVyO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvVUZUOE5vblNwZWNpYWxDaGFyYWN0ZXJzKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL0F8w4F8w4B8w4N84bqgfMOCfOG6pHzhuqZ84bqqfOG6rHzEgnzhuq584bqwfOG6tHzhurYvZywgJ0EnKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL8OgfMOhfOG6oXzhuqN8w6N8w6J84bqnfOG6pXzhuq184bqpfOG6q3zEg3zhurF84bqvfOG6t3zhurN84bq1L2csICdhJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9FfMOJfMOIfOG6vHzhurh8w4p84bq+fOG7gHzhu4R84buGLywgJ0UnKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL8OofMOpfOG6uXzhurt84bq9fMOqfOG7gXzhur984buHfOG7g3zhu4UvZywgJ2UnKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL0l8w418w4x8xKh84buKL2csICdJJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC/DrHzDrXzhu4t84buJfMSpL2csICdpJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9PfMOTfMOSfMOVfOG7jHzDlHzhu5B84buSfOG7lnzhu5h8xqB84buafOG7nHzhu6B84buiL2csICdPJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC/DsnzDs3zhu4184buPfMO1fMO0fOG7k3zhu5F84buZfOG7lXzhu5d8xqF84budfOG7m3zhu6N84buffOG7oS9nLCAnbycpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvVXzDmnzDmXzFqHzhu6R8xq984buofOG7qnzhu6584buwL2csICdVJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC/DuXzDunzhu6V84bunfMWpfMawfOG7q3zhu6l84buxfOG7rXzhu68vZywgJ3UnKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL1l8w5184buyfOG7uHzhu7QvZywgJ1knKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL+G7s3zDvXzhu7V84bu3fOG7uS9nLCAneScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvxJAvZywgJ0QnKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL8SRL2csICdkJyk7XG4gIC8vIFNvbWUgc3lzdGVtIGVuY29kZSB2aWV0bmFtZXNlIGNvbWJpbmluZyBhY2NlbnQgYXMgaW5kaXZpZHVhbCB1dGYtOCBjaGFyYWN0ZXJzXG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9cXHUwMzAwfFxcdTAzMDF8XFx1MDMwM3xcXHUwMzA5fFxcdTAzMjMvZywgJycpOyAvLyBIdXnhu4FuIHPhuq9jIGjhu49pIG5nw6MgbuG6t25nXG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9cXHUwMkM2fFxcdTAzMDZ8XFx1MDMxQi9nLCAnJyk7IC8vIMOCLCDDiiwgxIIsIMagLCDGr1xuICByZXR1cm4gc3RyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJvcGVydHkoY2xhc3NOYW1lID0gJ2ZpZWxkcycsIGRlZmF1bHRWYWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcbiAgcmV0dXJuICh0YXJnZXQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LCBuYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldFtuYW1lXSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKGNsYXNzTmFtZSwgdHJ1ZSwgdGFyZ2V0LCBuYW1lKTtcbiAgfTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQudXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9xdWVyeS51dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzLm1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL2dlbmVyYWwudXRpbCc7XG5leHBvcnQgKiBmcm9tICcuL2Vycm9yLmhlbHBlcic7XG4iLCJpbXBvcnQgeyBoYXNoLCB2ZXJpZnkgfSBmcm9tICdhcmdvbjInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRVdGlscyB7XG4gIGFzeW5jIGNvbXBhcmUocGFzc3dvcmQ6IHN0cmluZywgaGFzaDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHZlcmlmeShoYXNoLCBwYXNzd29yZCk7XG4gIH1cblxuICBhc3luYyBoYXNoKHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGlmIChpc0VtcHR5KHBhc3N3b3JkKSB8fCBwYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzLicpO1xuICAgIH1cblxuICAgIHJldHVybiBoYXNoKHBhc3N3b3JkKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVF1ZXJ5IH0gZnJvbSAnQGxpYnMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgaXNFbXB0eSwgaXNOaWwsIG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFF1ZXJ5VXRpbHMge1xuICBhc3luYyBnZXRGaWx0ZXJzKGZpbHRlckJ5OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBhbnk+PiB7XG4gICAgY29uc3QgcXVlcnlGaWx0ZXJzID0geyB3aGVyZToge30gfTtcblxuICAgIGlmICghaXNFbXB0eShmaWx0ZXJCeSkpIE9iamVjdC5hc3NpZ24ocXVlcnlGaWx0ZXJzLndoZXJlLCBmaWx0ZXJCeSk7XG5cbiAgICByZXR1cm4gcXVlcnlGaWx0ZXJzO1xuICB9XG5cbiAgYXN5bmMgZ2V0T3JkZXIob3JkZXJCeTogc3RyaW5nKTogUHJvbWlzZTxJUXVlcnk+IHtcbiAgICBjb25zdCBxdWVyeU9yZGVyOiBJUXVlcnkgPSB7fTtcblxuICAgIGlmICghaXNFbXB0eShvcmRlckJ5KSkge1xuICAgICAgaWYgKG9yZGVyQnkudHJpbSgpLmNoYXJBdCgwKSA9PT0gJy0nKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnlPcmRlciwgeyBvcmRlckJ5OiBbb3JkZXJCeS50cmltKCkuc3Vic3RyKDEpLCAnREVTQyddIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeU9yZGVyLCB7IG9yZGVyQnk6IFtvcmRlckJ5LnRyaW0oKSwgJ0FTQyddIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeU9yZGVyO1xuICB9XG5cbiAgYXN5bmMgZ2V0Q3Vyc29yKGZpcnN0OiBudW1iZXIsIGxhc3Q6IG51bWJlciwgYmVmb3JlOiBzdHJpbmcsIGFmdGVyOiBzdHJpbmcpOiBQcm9taXNlPElRdWVyeT4ge1xuICAgIGNvbnN0IHF1ZXJ5Q3Vyc29yOiBJUXVlcnkgPSB7fTtcblxuICAgIGlmICghaXNOaWwoZmlyc3QpKSBPYmplY3QuYXNzaWduKHF1ZXJ5Q3Vyc29yLCB7IGxpbWl0OiBmaXJzdCB9KTtcblxuICAgIGlmICghaXNFbXB0eShhZnRlcikpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnlDdXJzb3IsIHsgYWZ0ZXIsIGxpbWl0OiBmaXJzdCB9KTtcbiAgICB9IGVsc2UgaWYgKCFpc0VtcHR5KGJlZm9yZSkpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnlDdXJzb3IsIHsgYmVmb3JlLCBsaW1pdDogbGFzdCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnlDdXJzb3I7XG4gIH1cblxuICBhc3luYyBidWlsZFF1ZXJ5KG9yZGVyQnk6IHN0cmluZywgZmlyc3Q6IG51bWJlciwgbGFzdDogbnVtYmVyLCBiZWZvcmU6IHN0cmluZywgYWZ0ZXI6IHN0cmluZyk6IFByb21pc2U8SVF1ZXJ5PiB7XG4gICAgcmV0dXJuIG1lcmdlKHt9LCBhd2FpdCB0aGlzLmdldE9yZGVyKG9yZGVyQnkpLCBhd2FpdCB0aGlzLmdldEN1cnNvcihmaXJzdCwgbGFzdCwgYmVmb3JlLCBhZnRlcikpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IFF1ZXJ5VXRpbHMgfSBmcm9tICcuL3F1ZXJ5LnV0aWxzJztcbmltcG9ydCB7IFBhc3N3b3JkVXRpbHMgfSBmcm9tICcuL3Bhc3N3b3JkLnV0aWxzJztcblxuQE1vZHVsZSh7XG4gIGV4cG9ydHM6IFtRdWVyeVV0aWxzLCBQYXNzd29yZFV0aWxzXSxcbiAgcHJvdmlkZXJzOiBbUXVlcnlVdGlscywgUGFzc3dvcmRVdGlsc10sXG59KVxuZXhwb3J0IGNsYXNzIFV0aWxzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBvcGVyYXRvcnNBbGlhc2VzIH0gZnJvbSAnQGxpYnMvY29yZSc7XG5pbXBvcnQgeyBCb29raW5nTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcy9ib29raW5nJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFNlcXVlbGl6ZU1vZHVsZSwgU2VxdWVsaXplTW9kdWxlT3B0aW9ucyB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcbmltcG9ydCB7IEFic3RyYWN0U2VjcmV0c1NlcnZpY2UgfSBmcm9tICdsaWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvYWRhcHRlcic7XG5pbXBvcnQgeyBTZWNyZXRzTW9kdWxlIH0gZnJvbSAnbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL21vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2VxdWVsaXplTW9kdWxlLmZvclJvb3RBc3luYyh7XG4gICAgICBpbXBvcnRzOiBbU2VjcmV0c01vZHVsZV0sXG4gICAgICB1c2VGYWN0b3J5OiBhc3luYyAoc2VjcmV0czogQWJzdHJhY3RTZWNyZXRzU2VydmljZSk6IFByb21pc2U8U2VxdWVsaXplTW9kdWxlT3B0aW9ucz4gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRpYWxlY3Q6ICdwb3N0Z3JlcycsXG4gICAgICAgICAgLi4uc2VjcmV0cy5ib29raW5nU2VydmljZURhdGFiYXNlLFxuICAgICAgICAgIGxvZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgIHR5cGVWYWxpZGF0aW9uOiB0cnVlLFxuICAgICAgICAgIG9wZXJhdG9yc0FsaWFzZXM6IG9wZXJhdG9yc0FsaWFzZXMsXG4gICAgICAgICAgbW9kZWxzOiBbQm9va2luZ01vZGVsXSxcbiAgICAgICAgICBhdXRvTG9hZE1vZGVsczogdHJ1ZSxcbiAgICAgICAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgICAgICAgICAvLyBzeW5jOiB7XG4gICAgICAgICAgLy8gICBmb3JjZTogdHJ1ZSxcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICByYXc6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWZpbmU6IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gICAgICAgICAgICB1bmRlcnNjb3JlZDogdHJ1ZSxcbiAgICAgICAgICAgIHZlcnNpb246IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkaWFsZWN0T3B0aW9uczoge1xuICAgICAgICAgICAgY2hhcnNldDogJ3V0ZjgnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgaW5qZWN0OiBbQWJzdHJhY3RTZWNyZXRzU2VydmljZV0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEJvb2tpbmdEYXRhYmFzZU1vZHVsZSB7fVxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyJztcblxuZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vYm9va2luZyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vbm90aWZpY2F0aW9uJztcbiIsImltcG9ydCB7IG9wZXJhdG9yc0FsaWFzZXMgfSBmcm9tICdAbGlicy9jb3JlJztcbmltcG9ydCB7XG4gIEJyYW5jaE1vZGVsLFxuICBHcm91cE1vZGVsLFxuICBJbWFnZU1vZGVsLFxuICBNZXJjaGFudE1vZGVsLFxuICBTZXJ2ZUltYWdlTW9kZWwsXG4gIFNlcnZpY2VNb2RlbCxcbn0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvZW50aXRpZXMnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgU2VxdWVsaXplTW9kdWxlLCBTZXF1ZWxpemVNb2R1bGVPcHRpb25zIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuaW1wb3J0IHsgQWJzdHJhY3RTZWNyZXRzU2VydmljZSB9IGZyb20gJ2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9hZGFwdGVyJztcbmltcG9ydCB7IFNlY3JldHNNb2R1bGUgfSBmcm9tICdsaWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvbW9kdWxlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTZXF1ZWxpemVNb2R1bGUuZm9yUm9vdEFzeW5jKHtcbiAgICAgIGltcG9ydHM6IFtTZWNyZXRzTW9kdWxlXSxcbiAgICAgIHVzZUZhY3Rvcnk6IGFzeW5jIChzZWNyZXRzOiBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlKTogUHJvbWlzZTxTZXF1ZWxpemVNb2R1bGVPcHRpb25zPiA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGlhbGVjdDogJ3Bvc3RncmVzJyxcbiAgICAgICAgICAuLi5zZWNyZXRzLm1lcmNoYW50U2VydmljZURhdGFiYXNlLFxuICAgICAgICAgIGxvZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgIHR5cGVWYWxpZGF0aW9uOiB0cnVlLFxuICAgICAgICAgIG9wZXJhdG9yc0FsaWFzZXM6IG9wZXJhdG9yc0FsaWFzZXMsXG4gICAgICAgICAgbW9kZWxzOiBbTWVyY2hhbnRNb2RlbCwgQnJhbmNoTW9kZWwsIEdyb3VwTW9kZWwsIFNlcnZpY2VNb2RlbCwgSW1hZ2VNb2RlbCwgU2VydmVJbWFnZU1vZGVsXSxcbiAgICAgICAgICBhdXRvTG9hZE1vZGVsczogdHJ1ZSxcbiAgICAgICAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgICAgICAgICAvLyBzeW5jOiB7XG4gICAgICAgICAgLy8gICBmb3JjZTogdHJ1ZSxcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICByYXc6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWZpbmU6IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gICAgICAgICAgICB1bmRlcnNjb3JlZDogdHJ1ZSxcbiAgICAgICAgICAgIHZlcnNpb246IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkaWFsZWN0T3B0aW9uczoge1xuICAgICAgICAgICAgY2hhcnNldDogJ3V0ZjgnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgaW5qZWN0OiBbQWJzdHJhY3RTZWNyZXRzU2VydmljZV0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE1lcmNoYW50RGF0YWJhc2VNb2R1bGUge31cbiIsImltcG9ydCB7IG9wZXJhdG9yc0FsaWFzZXMgfSBmcm9tICdAbGlicy9jb3JlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbk1vZGVsIH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvZW50aXRpZXMnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgU2VxdWVsaXplTW9kdWxlLCBTZXF1ZWxpemVNb2R1bGVPcHRpb25zIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuaW1wb3J0IHsgQWJzdHJhY3RTZWNyZXRzU2VydmljZSB9IGZyb20gJ2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9hZGFwdGVyJztcbmltcG9ydCB7IFNlY3JldHNNb2R1bGUgfSBmcm9tICdsaWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvbW9kdWxlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTZXF1ZWxpemVNb2R1bGUuZm9yUm9vdEFzeW5jKHtcbiAgICAgIGltcG9ydHM6IFtTZWNyZXRzTW9kdWxlXSxcbiAgICAgIHVzZUZhY3Rvcnk6IGFzeW5jIChzZWNyZXRzOiBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlKTogUHJvbWlzZTxTZXF1ZWxpemVNb2R1bGVPcHRpb25zPiA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGlhbGVjdDogJ3Bvc3RncmVzJyxcbiAgICAgICAgICAuLi5zZWNyZXRzLm5vdGlmaWNhdGlvblNlcnZpY2VEYXRhYmFzZSxcbiAgICAgICAgICBsb2dnaW5nOiBmYWxzZSxcbiAgICAgICAgICB0eXBlVmFsaWRhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBvcGVyYXRvcnNBbGlhc2VzOiBvcGVyYXRvcnNBbGlhc2VzLFxuICAgICAgICAgIG1vZGVsczogW05vdGlmaWNhdGlvbk1vZGVsXSxcbiAgICAgICAgICBhdXRvTG9hZE1vZGVsczogdHJ1ZSxcbiAgICAgICAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgICAgICAgICBzeW5jOiB7XG4gICAgICAgICAgICBmb3JjZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICByYXc6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWZpbmU6IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gICAgICAgICAgICB1bmRlcnNjb3JlZDogdHJ1ZSxcbiAgICAgICAgICAgIHZlcnNpb246IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkaWFsZWN0T3B0aW9uczoge1xuICAgICAgICAgICAgY2hhcnNldDogJ3V0ZjgnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgaW5qZWN0OiBbQWJzdHJhY3RTZWNyZXRzU2VydmljZV0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbkRhdGFiYXNlTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBvcGVyYXRvcnNBbGlhc2VzIH0gZnJvbSAnQGxpYnMvY29yZSc7XG5pbXBvcnQgeyBEZXZpY2VNb2RlbCwgTWVyY2hhbnRVc2VyTW9kZWwsIFVzZXJNb2RlbCB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlL2VudGl0aWVzJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFNlcXVlbGl6ZU1vZHVsZSwgU2VxdWVsaXplTW9kdWxlT3B0aW9ucyB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcbmltcG9ydCB7IEFic3RyYWN0U2VjcmV0c1NlcnZpY2UgfSBmcm9tICdsaWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvYWRhcHRlcic7XG5pbXBvcnQgeyBTZWNyZXRzTW9kdWxlIH0gZnJvbSAnbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL21vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2VxdWVsaXplTW9kdWxlLmZvclJvb3RBc3luYyh7XG4gICAgICBpbXBvcnRzOiBbU2VjcmV0c01vZHVsZV0sXG4gICAgICB1c2VGYWN0b3J5OiBhc3luYyAoc2VjcmV0czogQWJzdHJhY3RTZWNyZXRzU2VydmljZSk6IFByb21pc2U8U2VxdWVsaXplTW9kdWxlT3B0aW9ucz4gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRpYWxlY3Q6ICdwb3N0Z3JlcycsXG4gICAgICAgICAgLi4uc2VjcmV0cy51c2VyU2VydmljZURhdGFiYXNlLFxuICAgICAgICAgIGxvZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgIHR5cGVWYWxpZGF0aW9uOiB0cnVlLFxuICAgICAgICAgIG9wZXJhdG9yc0FsaWFzZXM6IG9wZXJhdG9yc0FsaWFzZXMsXG4gICAgICAgICAgbW9kZWxzOiBbVXNlck1vZGVsLCBEZXZpY2VNb2RlbCwgTWVyY2hhbnRVc2VyTW9kZWxdLFxuICAgICAgICAgIGF1dG9Mb2FkTW9kZWxzOiB0cnVlLFxuICAgICAgICAgIHN5bmNocm9uaXplOiB0cnVlLFxuICAgICAgICAgIC8vIHN5bmM6IHtcbiAgICAgICAgICAvLyAgIGZvcmNlOiB0cnVlLFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIHJhdzogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlZmluZToge1xuICAgICAgICAgICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgICAgICAgICAgIHVuZGVyc2NvcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmVyc2lvbjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpYWxlY3RPcHRpb25zOiB7XG4gICAgICAgICAgICBjaGFyc2V0OiAndXRmOCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBpbmplY3Q6IFtBYnN0cmFjdFNlY3JldHNTZXJ2aWNlXSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckRhdGFiYXNlTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb2x1bW4sIERhdGFUeXBlLCBNb2RlbCB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VNb2RlbDxUPiBleHRlbmRzIE1vZGVsPFQ+IHtcbiAgQENvbHVtbih7XG4gICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgIHR5cGU6IERhdGFUeXBlLklOVEVHRVIsXG4gIH0pXG4gIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuREFURSxcbiAgICBkZWZhdWx0VmFsdWU6IERhdGFUeXBlLk5PVyxcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICB9KVxuICBjcmVhdGVkQXQ/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuREFURSxcbiAgICBkZWZhdWx0VmFsdWU6IERhdGFUeXBlLk5PVyxcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICB9KVxuICB1cGRhdGVkQXQ/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuREFURSxcbiAgICBhbGxvd051bGw6IHRydWUsXG4gIH0pXG4gIGRlbGV0ZWRBdD86IHN0cmluZztcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSLFxuICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgZGVmYXVsdFZhbHVlOiAwLFxuICB9KVxuICB2ZXJzaW9uPzogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMgfSBmcm9tICdAbGlicy9jb3JlJztcbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlL2VudGl0aWVzL2Jhc2UubW9kZWwnO1xuaW1wb3J0IHsgRUJvb2tpbmdTdGF0dXMgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy9jb21tb25zJztcbmltcG9ydCB7IEJlZm9yZUNyZWF0ZSwgQmVmb3JlVXBkYXRlLCBDb2x1bW4sIERhdGFUeXBlLCBUYWJsZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAnYm9va2luZycsXG4gIHRhYmxlTmFtZTogJ2Jvb2tpbmdzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEJvb2tpbmdNb2RlbCBleHRlbmRzIEJhc2VNb2RlbDxCb29raW5nTW9kZWw+IHtcbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgc3RhdHVzPzogRUJvb2tpbmdTdGF0dXM7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgc2VydmljZU5hbWU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgc2VydmljZUlkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHVzZXJJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICB1c2VyRW1haWw/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgdXNlclBob25lTnVtYmVyPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIG1lcmNoYW50SWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgYnJhbmNoSWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgc3RhcnRUaW1lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGVuZFRpbWU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgbm90ZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBjYW5jZWxSZWFzb24/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgYm9va2luZ0RhdGU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZHVyYXRpb25Ib3VyPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGR1cmF0aW9uTWludXRlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLlRFWFQsXG4gICAgYWxsb3dOdWxsOiB0cnVlLFxuICB9KVxuICBzZWFyY2g/OiBzdHJpbmc7XG5cbiAgQEJlZm9yZUNyZWF0ZVxuICBAQmVmb3JlVXBkYXRlXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVTZWFyY2gobW9kZWw6IEJvb2tpbmdNb2RlbCkge1xuICAgIGNvbnN0IGNvbHVtbnNUb0NvbmNhdGVuYXRlID0gW1xuICAgICAgJ3N0YXR1cycsXG4gICAgICAnY2FuY2VsUmVhc29uJyxcbiAgICAgICdzZXJ2aWNlTmFtZScsXG4gICAgICAnc3RhcnRUaW1lJyxcbiAgICAgICdlbmRUaW1lJyxcbiAgICAgICdub3RlJyxcbiAgICAgICdib29raW5nRGF0ZScsXG4gICAgXTtcbiAgICBjb25zdCBjb25jYXRlbmF0ZWRWYWx1ZXMgPSBjb2x1bW5zVG9Db25jYXRlbmF0ZVxuICAgICAgLm1hcCgoY29sdW1uTmFtZSkgPT4gKG1vZGVsLmdldChjb2x1bW5OYW1lKSA/IG1vZGVsLmdldChjb2x1bW5OYW1lKSA6ICcgJykpXG4gICAgICAuam9pbignICcpO1xuXG4gICAgbW9kZWwuc2V0RGF0YVZhbHVlKCdzZWFyY2gnLCBjb25jYXRlbmF0ZWRWYWx1ZXMuY29uY2F0KCcgJywgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMoY29uY2F0ZW5hdGVkVmFsdWVzKSkpO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2Jvb2tpbmcubW9kZWwnO1xuIiwiLy8gdXNlciBzZXJ2aWNlXG5leHBvcnQgKiBmcm9tICcuL3VzZXInO1xuXG4vLyBtZXJjaGFudCBzZXJ2aWNlXG5leHBvcnQgKiBmcm9tICcuL21lcmNoYW50JztcblxuLy8gbWVyY2hhbnQgc2VydmljZVxuZXhwb3J0ICogZnJvbSAnLi9ib29raW5nJztcblxuLy8gbWVyY2hhbnQgc2VydmljZVxuZXhwb3J0ICogZnJvbSAnLi9ub3RpZmljYXRpb24nO1xuIiwiaW1wb3J0IHsgQmVmb3JlQ3JlYXRlLCBCZWZvcmVVcGRhdGUsIENvbHVtbiwgRGF0YVR5cGUsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IHsgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMgfSBmcm9tICdAbGlicy9jb3JlJztcblxuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vYmFzZS5tb2RlbCc7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ2JyYW5jaCcsXG4gIHRhYmxlTmFtZTogJ2JyYW5jaGVzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEJyYW5jaE1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsPEJyYW5jaE1vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSLCBhbGxvd051bGw6IGZhbHNlIH0pXG4gIG1lcmNoYW50SWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgbmFtZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBhZGRyZXNzPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHBob25lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGNpdHlDb2RlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGRpc3RyaWN0Q29kZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICB3YXJkQ29kZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBjaXR5Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGRpc3RyaWN0Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHdhcmQ/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuRkxPQVQsXG4gICAgZGVmYXVsdFZhbHVlOiAwLFxuICB9KVxuICBsYXRpdHVkZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5GTE9BVCxcbiAgICBkZWZhdWx0VmFsdWU6IDAsXG4gIH0pXG4gIGxvbmdpdHVkZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5HRU9NRVRSWSgnUE9JTlQnKSxcbiAgICBhbGxvd051bGw6IHRydWUsXG4gICAgLy8gZGVmYXVsdFZhbHVlOiB7IHR5cGU6ICdQb2ludCcsIGNvb3JkaW5hdGVzOiBbMCwgMF0gfSxcbiAgfSlcbiAgY29vcmRpbmF0ZTogeyB0eXBlOiAnUG9pbnQnOyBjb29yZGluYXRlczogW251bWJlciwgbnVtYmVyXSB9O1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLlRFWFQsXG4gICAgYWxsb3dOdWxsOiB0cnVlLFxuICB9KVxuICBzZWFyY2g/OiBzdHJpbmc7XG5cbiAgQEJlZm9yZUNyZWF0ZVxuICBAQmVmb3JlVXBkYXRlXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVTZWFyY2gobW9kZWw6IEJyYW5jaE1vZGVsKSB7XG4gICAgY29uc3QgY29sdW1uc1RvQ29uY2F0ZW5hdGUgPSBbJ25hbWUnLCAncGhvbmUnLCAnYWRkcmVzcycsICdjaXR5JywgJ2Rpc3RyaWN0JywgJ3dhcmQnXTtcbiAgICBjb25zdCBjb25jYXRlbmF0ZWRWYWx1ZXMgPSBjb2x1bW5zVG9Db25jYXRlbmF0ZVxuICAgICAgLm1hcCgoY29sdW1uTmFtZSkgPT4gKG1vZGVsLmdldChjb2x1bW5OYW1lKSA/IG1vZGVsLmdldChjb2x1bW5OYW1lKSA6ICcgJykpXG4gICAgICAuam9pbignICcpO1xuXG4gICAgbW9kZWwuc2V0RGF0YVZhbHVlKCdzZWFyY2gnLCBjb25jYXRlbmF0ZWRWYWx1ZXMuY29uY2F0KCcgJywgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMoY29uY2F0ZW5hdGVkVmFsdWVzKSkpO1xuICB9XG5cbiAgQEJlZm9yZUNyZWF0ZVxuICBAQmVmb3JlVXBkYXRlXG4gIHN0YXRpYyBhc3luYyB1cHNlcnRDb29yZGluYXRlKG1vZGVsOiBCcmFuY2hNb2RlbCkge1xuICAgIGlmIChtb2RlbC5sYXRpdHVkZSAmJiBtb2RlbC5sb25naXR1ZGUpIHtcbiAgICAgIG1vZGVsLmNvb3JkaW5hdGUgPSB7XG4gICAgICAgIHR5cGU6ICdQb2ludCcsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbbW9kZWwubGF0aXR1ZGUsIG1vZGVsLmxvbmdpdHVkZV0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQmVmb3JlQ3JlYXRlLCBCZWZvcmVVcGRhdGUsIENvbHVtbiwgRGF0YVR5cGUsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IHsgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMgfSBmcm9tICdAbGlicy9jb3JlJztcblxuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vYmFzZS5tb2RlbCc7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ2dyb3VwJyxcbiAgdGFibGVOYW1lOiAnZ3JvdXBzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEdyb3VwTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8R3JvdXBNb2RlbD4ge1xuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiwgYWxsb3dOdWxsOiBmYWxzZSB9KVxuICBtZXJjaGFudElkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHNrdT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBjb2RlPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgaW1hZ2U/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuVEVYVCxcbiAgICBhbGxvd051bGw6IHRydWUsXG4gIH0pXG4gIHNlYXJjaD86IHN0cmluZztcblxuICBAQmVmb3JlQ3JlYXRlXG4gIEBCZWZvcmVVcGRhdGVcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVNlYXJjaChtb2RlbDogR3JvdXBNb2RlbCkge1xuICAgIGNvbnN0IGNvbHVtbnNUb0NvbmNhdGVuYXRlID0gWyduYW1lJywgJ2NvZGUnLCAnc2t1JywgJ2Rlc2NyaXB0aW9uJ107XG4gICAgY29uc3QgY29uY2F0ZW5hdGVkVmFsdWVzID0gY29sdW1uc1RvQ29uY2F0ZW5hdGVcbiAgICAgIC5tYXAoKGNvbHVtbk5hbWUpID0+IChtb2RlbC5nZXQoY29sdW1uTmFtZSkgPyBtb2RlbC5nZXQoY29sdW1uTmFtZSkgOiAnICcpKVxuICAgICAgLmpvaW4oJyAnKTtcblxuICAgIG1vZGVsLnNldERhdGFWYWx1ZSgnc2VhcmNoJywgY29uY2F0ZW5hdGVkVmFsdWVzLmNvbmNhdCgnICcsIHRvVUZUOE5vblNwZWNpYWxDaGFyYWN0ZXJzKGNvbmNhdGVuYXRlZFZhbHVlcykpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xuXG5AVGFibGUoe1xuICBtb2RlbE5hbWU6ICdpbWFnZScsXG4gIHRhYmxlTmFtZTogJ2ltYWdlcycsXG4gIHVuZGVyc2NvcmVkOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZU1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsPEltYWdlTW9kZWw+IHtcbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cbiIsIi8vIHNlcXVlbGl6ZVxuZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudC5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2JyYW5jaC5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2dyb3VwLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZS5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2ltYWdlLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmUtaW1hZ2UubW9kZWwnO1xuIiwiaW1wb3J0IHsgQmVmb3JlQ3JlYXRlLCBCZWZvcmVVcGRhdGUsIENvbHVtbiwgRGF0YVR5cGUsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IHsgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMgfSBmcm9tICdAbGlicy9jb3JlJztcblxuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vYmFzZS5tb2RlbCc7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ21lcmNoYW50JyxcbiAgdGFibGVOYW1lOiAnbWVyY2hhbnRzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIE1lcmNoYW50TW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8TWVyY2hhbnRNb2RlbD4ge1xuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICB1c2VySWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgbmFtZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBhZGRyZXNzPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHBob25lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGNpdHlDb2RlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGRpc3RyaWN0Q29kZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICB3YXJkQ29kZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBjaXR5Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGRpc3RyaWN0Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHdhcmQ/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuRkxPQVQsXG4gICAgZGVmYXVsdFZhbHVlOiAwLFxuICB9KVxuICBsYXRpdHVkZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5GTE9BVCxcbiAgICBkZWZhdWx0VmFsdWU6IDAsXG4gIH0pXG4gIGxvbmdpdHVkZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5HRU9NRVRSWSgnUE9JTlQnKSxcbiAgICBhbGxvd051bGw6IHRydWUsXG4gICAgLy8gZGVmYXVsdFZhbHVlOiB7IHR5cGU6ICdQb2ludCcsIGNvb3JkaW5hdGVzOiBbMCwgMF0gfSxcbiAgfSlcbiAgY29vcmRpbmF0ZTogeyB0eXBlOiAnUG9pbnQnOyBjb29yZGluYXRlczogW251bWJlciwgbnVtYmVyXSB9O1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLlRFWFQsXG4gICAgYWxsb3dOdWxsOiB0cnVlLFxuICB9KVxuICBzZWFyY2g/OiBzdHJpbmc7XG5cbiAgQEJlZm9yZUNyZWF0ZVxuICBAQmVmb3JlVXBkYXRlXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVTZWFyY2gobW9kZWw6IE1lcmNoYW50TW9kZWwpIHtcbiAgICBjb25zdCBjb2x1bW5zVG9Db25jYXRlbmF0ZSA9IFsnbmFtZScsICdwaG9uZScsICdhZGRyZXNzJywgJ2NpdHknLCAnZGlzdHJpY3QnLCAnd2FyZCddO1xuICAgIGNvbnN0IGNvbmNhdGVuYXRlZFZhbHVlcyA9IGNvbHVtbnNUb0NvbmNhdGVuYXRlXG4gICAgICAubWFwKChjb2x1bW5OYW1lKSA9PiAobW9kZWwuZ2V0KGNvbHVtbk5hbWUpID8gbW9kZWwuZ2V0KGNvbHVtbk5hbWUpIDogJyAnKSlcbiAgICAgIC5qb2luKCcgJyk7XG5cbiAgICBtb2RlbC5zZXREYXRhVmFsdWUoJ3NlYXJjaCcsIGNvbmNhdGVuYXRlZFZhbHVlcy5jb25jYXQoJyAnLCB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyhjb25jYXRlbmF0ZWRWYWx1ZXMpKSk7XG4gIH1cblxuICBAQmVmb3JlQ3JlYXRlXG4gIEBCZWZvcmVVcGRhdGVcbiAgc3RhdGljIGFzeW5jIHVwc2VydENvb3JkaW5hdGUobW9kZWw6IE1lcmNoYW50TW9kZWwpIHtcbiAgICBpZiAobW9kZWwubGF0aXR1ZGUgJiYgbW9kZWwubG9uZ2l0dWRlKSB7XG4gICAgICBtb2RlbC5jb29yZGluYXRlID0ge1xuICAgICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgICBjb29yZGluYXRlczogW21vZGVsLmxhdGl0dWRlLCBtb2RlbC5sb25naXR1ZGVdLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbHVtbiwgRGF0YVR5cGUsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcblxuaW1wb3J0IHsgRUltYWdlVHlwZSwgRVNlcnZlSW1hZ2VUeXBlIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zL2NvbW1vbic7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ3NlcnZlX2ltYWdlJyxcbiAgdGFibGVOYW1lOiAnc2VydmVfaW1hZ2VzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZlSW1hZ2VNb2RlbCBleHRlbmRzIEJhc2VNb2RlbDxTZXJ2ZUltYWdlTW9kZWw+IHtcbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgaW1hZ2VJZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5TTUFMTElOVCB9KVxuICBzZXJ2ZVR5cGU6IEVTZXJ2ZUltYWdlVHlwZTtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuU01BTExJTlQgfSlcbiAgdHlwZTogRUltYWdlVHlwZTtcbn1cbiIsImltcG9ydCB7IEVTZXJ2aWNlU2hvd1R5cGUsIEVTZXJ2aWNlVHlwZSB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL3NlcnZpY2UnO1xuaW1wb3J0IHsgQmVmb3JlQ3JlYXRlLCBCZWZvcmVVcGRhdGUsIENvbHVtbiwgRGF0YVR5cGUsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IHsgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMgfSBmcm9tICdAbGlicy9jb3JlJztcblxuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vYmFzZS5tb2RlbCc7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ3NlcnZpY2UnLFxuICB0YWJsZU5hbWU6ICdzZXJ2aWNlcycsXG4gIHVuZGVyc2NvcmVkOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8U2VydmljZU1vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSLCBhbGxvd051bGw6IGZhbHNlIH0pXG4gIGdyb3VwSWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgbWVyY2hhbnRJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuRE9VQkxFLCBkZWZhdWx0VmFsdWU6IDAgfSlcbiAgcHJpY2U/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLkRPVUJMRSwgZGVmYXVsdFZhbHVlOiAwIH0pXG4gIGluaXRpYWxQcmljZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBkdXJhdGlvbkhvdXI/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZHVyYXRpb25NaW51dGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgc2t1Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGNvZGU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgbmFtZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBpbWFnZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICB0eXBlPzogRVNlcnZpY2VUeXBlO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHNob3dUeXBlPzogRVNlcnZpY2VTaG93VHlwZTtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuQk9PTEVBTiB9KVxuICBjYW5QcmludGFibGVJbnZvaWNlPzogYm9vbGVhbjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5URVhULFxuICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgfSlcbiAgc2VhcmNoPzogc3RyaW5nO1xuXG4gIEBCZWZvcmVDcmVhdGVcbiAgQEJlZm9yZVVwZGF0ZVxuICBzdGF0aWMgYXN5bmMgdXBkYXRlU2VhcmNoKG1vZGVsOiBTZXJ2aWNlTW9kZWwpIHtcbiAgICBjb25zdCBjb2x1bW5zVG9Db25jYXRlbmF0ZSA9IFsnbmFtZScsICdjb2RlJywgJ3NrdScsICdwcmljZScsICdpbml0aWFsUHJpY2UnLCAnZGVzY3JpcHRpb24nXTtcbiAgICBjb25zdCBjb25jYXRlbmF0ZWRWYWx1ZXMgPSBjb2x1bW5zVG9Db25jYXRlbmF0ZVxuICAgICAgLm1hcCgoY29sdW1uTmFtZSkgPT4gKG1vZGVsLmdldChjb2x1bW5OYW1lKSA/IG1vZGVsLmdldChjb2x1bW5OYW1lKSA6ICcgJykpXG4gICAgICAuam9pbignICcpO1xuXG4gICAgbW9kZWwuc2V0RGF0YVZhbHVlKCdzZWFyY2gnLCBjb25jYXRlbmF0ZWRWYWx1ZXMuY29uY2F0KCcgJywgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMoY29uY2F0ZW5hdGVkVmFsdWVzKSkpO1xuICB9XG59XG4iLCIvLyBzZXF1ZWxpemVcbmV4cG9ydCAqIGZyb20gJy4vbm90aWZpY2F0aW9uLm1vZGVsJztcbiIsImltcG9ydCB7IENvbHVtbiwgRGF0YVR5cGUsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcblxuaW1wb3J0IHsgRU5vdGlmaWNhdGlvblR5cGUgfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MnO1xuXG5AVGFibGUoe1xuICBtb2RlbE5hbWU6ICdub3RpZmljYXRpb24nLFxuICB0YWJsZU5hbWU6ICdub3RpZmljYXRpb25zJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbk1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsPE5vdGlmaWNhdGlvbk1vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHNlbmRlcklkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgdGl0bGVFbjogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHRpdGxlVmk6IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBib2R5RW46IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBib2R5Vmk6IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICB0eXBlOiBFTm90aWZpY2F0aW9uVHlwZTtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBkYXRhX2pzb246IHN0cmluZztcbn1cbiIsImltcG9ydCB7IEVEZXZpY2VPcyB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL2RldmljZSc7XG5pbXBvcnQgeyBDb2x1bW4sIERhdGFUeXBlLCBUYWJsZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcblxuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vYmFzZS5tb2RlbCc7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ2RldmljZScsXG4gIHRhYmxlTmFtZTogJ2RldmljZXMnLFxuICB1bmRlcnNjb3JlZDogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRGV2aWNlTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8RGV2aWNlTW9kZWw+IHtcbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgdXNlcklkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgb3M6IEVEZXZpY2VPcztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBkZXZpY2VJZDogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHRva2VuOiBzdHJpbmc7XG59XG4iLCIvLyBzZXF1ZWxpemVcbmV4cG9ydCAqIGZyb20gJy4vdXNlci5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2RldmljZS5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL21lcmNoYW50LXVzZXIubW9kZWwnO1xuIiwiaW1wb3J0IHsgRVVzZXJSb2xlLCBFVXNlclN0YXR1cyB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL2NvbW1vbnMnO1xuaW1wb3J0IHsgVGFibGUsIENvbHVtbiwgRGF0YVR5cGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xuXG5AVGFibGUoe1xuICBtb2RlbE5hbWU6ICdtZXJjaGFudF91c2VyJyxcbiAgdGFibGVOYW1lOiAnbWVyY2hhbnRfdXNlcnMnLFxuICB1bmRlcnNjb3JlZDogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgTWVyY2hhbnRVc2VyTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8TWVyY2hhbnRVc2VyTW9kZWw+IHtcbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgcm9sZT86IEVVc2VyUm9sZTtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBzdGF0dXM/OiBFVXNlclN0YXR1cztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICB1c2VySWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBicmFuY2hJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBtZXJjaGFudElkPzogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgRUN1c3RvbWVyTGV2ZWwsIEVVc2VyR2VuZGVyLCBFVXNlclJvbGUsIEVVc2VyU3RhdHVzIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3MvY29tbW9ucyc7XG5pbXBvcnQgeyBoYXNoIH0gZnJvbSAnYXJnb24yJztcbmltcG9ydCB7IEJlZm9yZUNyZWF0ZSwgQmVmb3JlVXBkYXRlLCBDb2x1bW4sIERhdGFUeXBlLCBUYWJsZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCB7IHRvVUZUOE5vblNwZWNpYWxDaGFyYWN0ZXJzIH0gZnJvbSAnQGxpYnMvY29yZSc7XG5cbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xuXG5AVGFibGUoe1xuICBtb2RlbE5hbWU6ICd1c2VyJyxcbiAgdGFibGVOYW1lOiAndXNlcnMnLFxuICB1bmRlcnNjb3JlZDogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgVXNlck1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsPFVzZXJNb2RlbD4ge1xuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBlbWFpbD86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBwYXNzd29yZD86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICByb2xlPzogRVVzZXJSb2xlO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHN0YXR1cz86IEVVc2VyU3RhdHVzO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGdlbmRlcj86IEVVc2VyR2VuZGVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGZ1bGxOYW1lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5CT09MRUFOIH0pXG4gIGlzUmV0YWlsQ3VzdG9tZXI/OiBib29sZWFuO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGNvbnRhY3Q/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgcGhvbmVOdW1iZXI/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZG9iRGF5PzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGRvYk1vbnRoPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGRvYlllYXI/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgb2NjdXBhdGlvbj86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBhdmF0YXI/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgYWRkcmVzcz86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBjaXR5Q29kZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBkaXN0cmljdENvZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgd2FyZENvZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgbGV2ZWw/OiBFQ3VzdG9tZXJMZXZlbDtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICByZWZlcnJlcj86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICByZWZlcnJlckNvZGU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgY3VzdG9tZXJDb2RlPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGZhY2Vib29rPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHphbG9QaG9uZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBoZWlnaHQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgd2VpZ2h0PzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIG1lbWJlckNhcmRObz86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBjb21wYW55Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHRheE5vPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIG5vdGU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgcmVsYXRlZFVzZXI/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgcmVsYXRlZFVzZXJSb2xlPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHJlbGF0ZWRVc2VyUGhvbmU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgYnJhbmNoSWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgbWVyY2hhbnRJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5GTE9BVCxcbiAgICBkZWZhdWx0VmFsdWU6IDAsXG4gIH0pXG4gIGxhdGl0dWRlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkZMT0FULFxuICAgIGRlZmF1bHRWYWx1ZTogMCxcbiAgfSlcbiAgbG9uZ2l0dWRlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkdFT01FVFJZKCdQT0lOVCcpLFxuICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgfSlcbiAgY29vcmRpbmF0ZTogeyB0eXBlOiAnUG9pbnQnOyBjb29yZGluYXRlczogW251bWJlciwgbnVtYmVyXSB9O1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLlRFWFQsXG4gICAgYWxsb3dOdWxsOiB0cnVlLFxuICB9KVxuICBzZWFyY2g/OiBzdHJpbmc7XG5cbiAgQEJlZm9yZUNyZWF0ZVxuICBAQmVmb3JlVXBkYXRlXG4gIHN0YXRpYyBhc3luYyBoYXNoUGFzc3dvcmQodXNlcjogVXNlck1vZGVsKSB7XG4gICAgaWYgKCF1c2VyLnBhc3N3b3JkKSByZXR1cm47XG4gICAgdXNlci5wYXNzd29yZCA9IGF3YWl0IGhhc2godXNlci5wYXNzd29yZCk7XG4gIH1cblxuICBAQmVmb3JlQ3JlYXRlXG4gIEBCZWZvcmVVcGRhdGVcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVNlYXJjaChtb2RlbDogVXNlck1vZGVsKSB7XG4gICAgY29uc3QgY29sdW1uc1RvQ29uY2F0ZW5hdGUgPSBbJ2VtYWlsJywgJ2Z1bGxOYW1lJywgJ2NvbnRhY3QnLCAncGhvbmVOdW1iZXInLCAnYWRkcmVzcyddO1xuICAgIGNvbnN0IGNvbmNhdGVuYXRlZFZhbHVlcyA9IGNvbHVtbnNUb0NvbmNhdGVuYXRlXG4gICAgICAubWFwKChjb2x1bW5OYW1lKSA9PiAobW9kZWwuZ2V0KGNvbHVtbk5hbWUpID8gbW9kZWwuZ2V0KGNvbHVtbk5hbWUpIDogJyAnKSlcbiAgICAgIC5qb2luKCcgJyk7XG5cbiAgICBtb2RlbC5zZXREYXRhVmFsdWUoJ3NlYXJjaCcsIGNvbmNhdGVuYXRlZFZhbHVlcy5jb25jYXQoJyAnLCB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyhjb25jYXRlbmF0ZWRWYWx1ZXMpKSk7XG4gIH1cblxuICBAQmVmb3JlQ3JlYXRlXG4gIEBCZWZvcmVVcGRhdGVcbiAgc3RhdGljIGFzeW5jIHVwc2VydENvb3JkaW5hdGUobW9kZWw6IFVzZXJNb2RlbCkge1xuICAgIGlmIChtb2RlbC5sYXRpdHVkZSAmJiBtb2RlbC5sb25naXR1ZGUpIHtcbiAgICAgIG1vZGVsLmNvb3JkaW5hdGUgPSB7XG4gICAgICAgIHR5cGU6ICdQb2ludCcsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbbW9kZWwubGF0aXR1ZGUsIG1vZGVsLmxvbmdpdHVkZV0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jb25uZWN0aW9uJztcblxuZXhwb3J0ICogZnJvbSAnLi9lbnRpdGllcyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vcmVwb3NpdG9yaWVzJztcbiIsImltcG9ydCB7IExJTUlULCBQQUdFIH0gZnJvbSAnQGxpYnMvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Qcm90byB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMnO1xuaW1wb3J0IHsgSUZpbmRBbmRQYWdpbmF0ZU9wdGlvbnMsIElQYWdpbmF0aW9uUmVzIH0gZnJvbSAnQGxpYnMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7XG4gIEF0dHJpYnV0ZXMsXG4gIENvdW50T3B0aW9ucyxcbiAgQ3JlYXRlT3B0aW9ucyxcbiAgRmluZEFuZENvdW50T3B0aW9ucyxcbiAgRmluZE9wdGlvbnMsXG4gIFVwZGF0ZU9wdGlvbnMsXG4gIFdoZXJlT3B0aW9ucyxcbn0gZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCB7IE1vZGVsLCBSZXBvc2l0b3J5IH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuXG5leHBvcnQgY2xhc3MgQmFzZVJlcG9zaXRvcnk8VCBleHRlbmRzIE1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IG1vZGVsOiBSZXBvc2l0b3J5PFQ+KSB7fVxuXG4gIGFzeW5jIGZpbmQob3B0aW9ucz86IEZpbmRPcHRpb25zPFQ+KTogUHJvbWlzZTxUW10+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RlbC5maW5kQWxsKG9wdGlvbnMpO1xuICB9XG5cbiAgYXN5bmMgZmluZE9uZShvcHRpb25zPzogRmluZE9wdGlvbnM8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RlbC5maW5kT25lKG9wdGlvbnMpO1xuICB9XG5cbiAgYXN5bmMgZmluZEJ5SWQoaWQ6IG51bWJlciwgb3B0aW9ucz86IEZpbmRPcHRpb25zPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kZWwuZmluZEJ5UGsoaWQsIG9wdGlvbnMpO1xuICB9XG5cbiAgYXN5bmMgcGFnaW5hdGUoXG4gICAgb3B0aW9ucz86IFdoZXJlT3B0aW9uczxUPixcbiAgICBwYWdlID0gUEFHRSxcbiAgICBsaW1pdCA9IExJTUlULFxuICAgIG9wdHM/OiBGaW5kT3B0aW9uczxUPixcbiAgKTogUHJvbWlzZTxJUGFnaW5hdGlvblJlczxUPj4ge1xuICAgIGNvbnN0IG9mZnNldCA9IChwYWdlIC0gMSkgKiBsaW1pdDtcbiAgICBjb25zdCB7IHJvd3MsIGNvdW50IH0gPSBhd2FpdCB0aGlzLnJhd1BhZ2luYXRlKHtcbiAgICAgIHdoZXJlOiB7IC4uLm9wdGlvbnMgfSxcbiAgICAgIG9mZnNldCxcbiAgICAgIGxpbWl0LFxuICAgICAgLi4ub3B0cyxcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogcm93cyxcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgdG90YWw6IGNvdW50LFxuICAgICAgICB0b3RhbFBhZ2U6IE1hdGguY2VpbChjb3VudCAvIExJTUlUKSxcbiAgICAgICAgcGFnZSxcbiAgICAgICAgbGltaXQsXG4gICAgICB9LFxuICAgIH0gYXMgSVBhZ2luYXRpb25SZXM8VD47XG4gIH1cblxuICBhc3luYyByYXdQYWdpbmF0ZShvcHRpb25zOiBGaW5kQW5kQ291bnRPcHRpb25zKTogUHJvbWlzZTx7XG4gICAgcm93czogVFtdO1xuICAgIGNvdW50OiBudW1iZXI7XG4gIH0+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RlbC5maW5kQW5kQ291bnRBbGwob3B0aW9ucyk7XG4gIH1cblxuICBhc3luYyBjcmVhdGUoZW50aXR5OiBhbnksIG9wdHM/OiBDcmVhdGVPcHRpb25zKTogUHJvbWlzZTxUPiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5tb2RlbC5jcmVhdGUoZW50aXR5LCBvcHRzKTtcbiAgICByZXR1cm4gcmVzLnRvSlNPTigpO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKGVudGl0eTogYW55LCBvcHRzPzogVXBkYXRlT3B0aW9ucykge1xuICAgIGNvbnN0IFthZmZlY3RlZENvdW50LCBhZmZlY3RlZFJvd3NdID0gYXdhaXQgdGhpcy5tb2RlbC51cGRhdGUoZW50aXR5LCB7XG4gICAgICAuLi5vcHRzLFxuICAgICAgcmV0dXJuaW5nOiB0cnVlLFxuICAgIH0pO1xuICAgIHJldHVybiBhZmZlY3RlZFJvd3M7XG4gIH1cblxuICBhc3luYyBkZWxldGUoY29uZGl0aW9uczogRmluZE9wdGlvbnM8VD4pOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGVsLmRlc3Ryb3koY29uZGl0aW9ucyk7XG4gIH1cblxuICBhc3luYyByYXcocXVlcnk6IHN0cmluZykge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGVsLnNlcXVlbGl6ZS5xdWVyeShxdWVyeSk7XG4gIH1cblxuICBnZXRNb2RlbCgpOiBSZXBvc2l0b3J5PFQ+IHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbDtcbiAgfVxuXG4gIGFzeW5jIGNvdW50KG9wdGlvbnM/OiBDb3VudE9wdGlvbnMpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIGNvbnN0IHJlc3VsdDogbnVtYmVyID0gYXdhaXQgdGhpcy5tb2RlbC5jb3VudChvcHRpb25zKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYXN5bmMgZmluZEFuZFBhZ2luYXRlKHF1ZXJ5PzogSUZpbmRBbmRQYWdpbmF0ZU9wdGlvbnMsIG9wdHM/OiBGaW5kT3B0aW9ucyk6IFByb21pc2U8SVBhZ2luYXRpb25SZXM8VD4+IHtcbiAgICBjb25zdCByZXN1bHQ6IElQYWdpbmF0aW9uUmVzPFQ+ID0gYXdhaXQgdGhpcy5wYWdpbmF0ZShxdWVyeS53aGVyZSwgcXVlcnkucGFnZSwgcXVlcnkubGltaXQsIG9wdHMpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGFzeW5jIGNvdW50QnlHcnBjKHF1ZXJ5OiBDb21tb25Qcm90by5RdWVyeVJlcXVlc3QpIHtcbiAgICBjb25zdCB3aGVyZSA9ICFpc0VtcHR5KHF1ZXJ5LndoZXJlKSA/IEpTT04ucGFyc2UocXVlcnkud2hlcmUpIDogdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jb3VudCh7XG4gICAgICAuLi5xdWVyeSxcbiAgICAgIHdoZXJlLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdE1vZGVsIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuaW1wb3J0IHsgQm9va2luZ01vZGVsIH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UnO1xuXG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2Jhc2UucmVwb3NpdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCb29raW5nUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PEJvb2tpbmdNb2RlbD4ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0TW9kZWwoQm9va2luZ01vZGVsKSByZWFkb25seSBtb2RlbDogdHlwZW9mIEJvb2tpbmdNb2RlbCkge1xuICAgIHN1cGVyKG1vZGVsKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9ib29raW5nLnJlcG9zaXRvcnknO1xuIiwiLy8gdXNlciByZXBvc2l0b3J5XG5leHBvcnQgKiBmcm9tICcuL3VzZXInO1xuXG4vLyBtZXJjaGFudCByZXBvc2l0b3J5XG5leHBvcnQgKiBmcm9tICcuL21lcmNoYW50JztcblxuLy8gYm9va2luZyByZXBvc2l0b3J5XG5leHBvcnQgKiBmcm9tICcuL2Jvb2tpbmcnO1xuXG4vLyBub3RpZmljYXRpb24gcmVwb3NpdG9yeVxuZXhwb3J0ICogZnJvbSAnLi9ub3RpZmljYXRpb24nO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdE1vZGVsIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBCcmFuY2hNb2RlbCB9IGZyb20gJy4uLy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYmFzZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyYW5jaFJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxCcmFuY2hNb2RlbD4ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0TW9kZWwoQnJhbmNoTW9kZWwpIHJlYWRvbmx5IG1vZGVsOiB0eXBlb2YgQnJhbmNoTW9kZWwpIHtcbiAgICBzdXBlcihtb2RlbCk7XG4gIH1cblxuICBhc3luYyBmaW5kV2l0aFBhZ2luZyhvcHRpb25zPzogYW55LCBmaW5kT3B0aW9ucz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdpbmF0aW9uUmVwb3NpdG9yeSh0aGlzLmRldmljZU1vZGVsLCBvcHRpb25zLCBmaW5kT3B0aW9ucyk7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0TW9kZWwgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IEdyb3VwTW9kZWwgfSBmcm9tICcuLi8uLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2Jhc2UucmVwb3NpdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcm91cFJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxHcm91cE1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3RNb2RlbChHcm91cE1vZGVsKSByZWFkb25seSBtb2RlbDogdHlwZW9mIEdyb3VwTW9kZWwpIHtcbiAgICBzdXBlcihtb2RlbCk7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vbWVyY2hhbnQucmVwb3NpdG9yeSc7XG5leHBvcnQgKiBmcm9tICcuL2dyb3VwLnJlcG9zaXRvcnknO1xuZXhwb3J0ICogZnJvbSAnLi9icmFuY2gucmVwb3NpdG9yeSc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2UucmVwb3NpdG9yeSc7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0TW9kZWwgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IE1lcmNoYW50TW9kZWwgfSBmcm9tICcuLi8uLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2Jhc2UucmVwb3NpdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXJjaGFudFJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxNZXJjaGFudE1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3RNb2RlbChNZXJjaGFudE1vZGVsKSByZWFkb25seSBtb2RlbDogdHlwZW9mIE1lcmNoYW50TW9kZWwpIHtcbiAgICBzdXBlcihtb2RlbCk7XG4gIH1cblxuICBhc3luYyBmaW5kV2l0aFBhZ2luZyhvcHRpb25zPzogYW55LCBmaW5kT3B0aW9ucz86IGFueSk6IFByb21pc2U8TWVyY2hhbnRNb2RlbD4ge1xuICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucGFnaW5hdGlvblJlcG9zaXRvcnkodGhpcy5kZXZpY2VNb2RlbCwgb3B0aW9ucywgZmluZE9wdGlvbnMpO1xuICAgIHJldHVybjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdE1vZGVsIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlTW9kZWwgfSBmcm9tICcuLi8uLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2Jhc2UucmVwb3NpdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PFNlcnZpY2VNb2RlbD4ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0TW9kZWwoU2VydmljZU1vZGVsKSByZWFkb25seSBtb2RlbDogdHlwZW9mIFNlcnZpY2VNb2RlbCkge1xuICAgIHN1cGVyKG1vZGVsKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9ub3RpZmljYXRpb24ucmVwb3NpdG9yeSc7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0TW9kZWwgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IE5vdGlmaWNhdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9iYXNlLnJlcG9zaXRvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PE5vdGlmaWNhdGlvbk1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3RNb2RlbChOb3RpZmljYXRpb25Nb2RlbCkgcmVhZG9ubHkgbW9kZWw6IHR5cGVvZiBOb3RpZmljYXRpb25Nb2RlbCkge1xuICAgIHN1cGVyKG1vZGVsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdE1vZGVsIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuaW1wb3J0IHsgSUZpbmRBbmRQYWdpbmF0ZU9wdGlvbnMsIElQYWdpbmF0aW9uUmVzIH0gZnJvbSAnQGxpYnMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBGaW5kT3B0aW9ucyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IERldmljZU1vZGVsIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9iYXNlLnJlcG9zaXRvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGV2aWNlUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PERldmljZU1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3RNb2RlbChEZXZpY2VNb2RlbCkgcmVhZG9ubHkgbW9kZWw6IHR5cGVvZiBEZXZpY2VNb2RlbCkge1xuICAgIHN1cGVyKG1vZGVsKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRBbmRQYWdpbmF0ZShxdWVyeT86IElGaW5kQW5kUGFnaW5hdGVPcHRpb25zLCBvcHRzPzogRmluZE9wdGlvbnMpOiBQcm9taXNlPElQYWdpbmF0aW9uUmVzPERldmljZU1vZGVsPj4ge1xuICAgIGNvbnN0IHJlc3VsdDogSVBhZ2luYXRpb25SZXM8RGV2aWNlTW9kZWw+ID0gYXdhaXQgdGhpcy5wYWdpbmF0ZShxdWVyeS53aGVyZSwgcXVlcnkucGFnZSwgcXVlcnkubGltaXQsIG9wdHMpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyLnJlcG9zaXRvcnknO1xuZXhwb3J0ICogZnJvbSAnLi9kZXZpY2UucmVwb3NpdG9yeSc7XG5leHBvcnQgKiBmcm9tICcuL21lcmNoYW50LXVzZXIucmVwb3NpdG9yeSc7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0TW9kZWwgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IE1lcmNoYW50VXNlck1vZGVsIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9iYXNlLnJlcG9zaXRvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVyY2hhbnRVc2VyUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PE1lcmNoYW50VXNlck1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3RNb2RlbChNZXJjaGFudFVzZXJNb2RlbCkgcmVhZG9ubHkgbW9kZWw6IHR5cGVvZiBNZXJjaGFudFVzZXJNb2RlbCkge1xuICAgIHN1cGVyKG1vZGVsKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRXaXRoUGFnaW5nKG9wdGlvbnM/OiBhbnksIGZpbmRPcHRpb25zPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2luYXRlKHRoaXMudXNlck1vZGVsLCBvcHRpb25zLCBmaW5kT3B0aW9ucyk7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJRmluZEFuZFBhZ2luYXRlT3B0aW9ucywgSVBhZ2luYXRpb25SZXMgfSBmcm9tICdAbGlicy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RNb2RlbCB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcbmltcG9ydCB7IEZpbmRPcHRpb25zIH0gZnJvbSAnc2VxdWVsaXplJztcblxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9iYXNlLnJlcG9zaXRvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxVc2VyTW9kZWw+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdE1vZGVsKFVzZXJNb2RlbCkgcmVhZG9ubHkgbW9kZWw6IHR5cGVvZiBVc2VyTW9kZWwpIHtcbiAgICBzdXBlcihtb2RlbCk7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vbGliL2V4Y2VwdGlvbnMvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvZXJyb3ItY29kZXMnO1xuIiwiZXhwb3J0IGVudW0gRXJyb3JDb2RlcyB7XG4gIC8vNTAwXG4gIEdFTkVSQUxfU0VSVkVSX0VSUk9SID0gNTAwMTAwLFxuICBVU0VSTkFNRV9BTFJFQURZX1RBS0VOID0gNTAwMTAxLFxuICBJTlZBTElEX0NSRURFTlRJQUxTID0gNTAwMTAyLFxufVxuIiwiZXhwb3J0IGNsYXNzIEN1c3RvbUV4Y2VwdGlvbiB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgaHR0cFN0YXR1c0NvZGU6IG51bWJlcjtcbiAgZXJyb3JDb2RlOiBudW1iZXI7XG4gIGlzQ3VzdG9tRXJyb3IgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgaHR0cFN0YXR1c0NvZGU6IG51bWJlciwgZXJyb3JDb2RlOiBudW1iZXIpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuaHR0cFN0YXR1c0NvZGUgPSBodHRwU3RhdHVzQ29kZTtcbiAgICB0aGlzLmVycm9yQ29kZSA9IGVycm9yQ29kZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ3VzdG9tRXhjZXB0aW9uIH0gZnJvbSAnZXhjZXB0aW9ucy9leGNlcHRpb25zL2xpYi9leGNlcHRpb25zL2N1c3RvbS5leGNlcHRpb24nO1xuaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJ2V4Y2VwdGlvbnMvZXhjZXB0aW9ucy9saWIvZXJyb3ItY29kZXMnO1xuXG5leHBvcnQgY2xhc3MgR2VuZXJhbFNlcnZlckVycm9yRXhjZXB0aW9uIGV4dGVuZHMgQ3VzdG9tRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ0dlbmVyYWwgc2VydmVyIGVycm9yJywgNTAwLCBFcnJvckNvZGVzLkdFTkVSQUxfU0VSVkVSX0VSUk9SKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jdXN0b20uZXhjZXB0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vZ2VuZXJhbC1zZXJ2ZXItZXJyb3IuZXhjZXB0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcm5hbWUtYWxyZWFkeS10YWtlbi5leGNlcHRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9pbnZhbGlkLWNyZWRlbnRpYWxzLmV4Y2VwdGlvbic7XG4iLCJpbXBvcnQgeyBDdXN0b21FeGNlcHRpb24gfSBmcm9tICdleGNlcHRpb25zL2V4Y2VwdGlvbnMvbGliL2V4Y2VwdGlvbnMvY3VzdG9tLmV4Y2VwdGlvbic7XG5pbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnZXhjZXB0aW9ucy9leGNlcHRpb25zL2xpYi9lcnJvci1jb2Rlcyc7XG5cbmV4cG9ydCBjbGFzcyBJbnZhbGlkQ3JlZGVudGlhbHNFeGNlcHRpb24gZXh0ZW5kcyBDdXN0b21FeGNlcHRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignSW52YWxpZCBDcmVkZW50aWFscycsIDUwMCwgRXJyb3JDb2Rlcy5JTlZBTElEX0NSRURFTlRJQUxTKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ3VzdG9tRXhjZXB0aW9uIH0gZnJvbSAnZXhjZXB0aW9ucy9leGNlcHRpb25zL2xpYi9leGNlcHRpb25zL2N1c3RvbS5leGNlcHRpb24nO1xuaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJ2V4Y2VwdGlvbnMvZXhjZXB0aW9ucy9saWIvZXJyb3ItY29kZXMnO1xuXG5leHBvcnQgY2xhc3MgTmlja25hbWVBbHJlYWR5VGFrZW5FeGNlcHRpb24gZXh0ZW5kcyBDdXN0b21FeGNlcHRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignTmlja25hbWUgaXMgYWxyZWFkeSB0YWtlbicsIDUwMCwgRXJyb3JDb2Rlcy5VU0VSTkFNRV9BTFJFQURZX1RBS0VOKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRXhjZXB0aW9uRmlsdGVyLCBBcmd1bWVudHNIb3N0LCBDYXRjaCwgTG9nZ2VyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgR2VuZXJhbFNlcnZlckVycm9yRXhjZXB0aW9uIH0gZnJvbSAnZXhjZXB0aW9ucy9leGNlcHRpb25zJztcbmltcG9ydCB7IEdycGNNZXRhZGF0YUVycm9yS2V5IH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5cbkBDYXRjaCgpXG5leHBvcnQgY2xhc3MgQWxsRXhjZXB0aW9uc0ZpbHRlciBpbXBsZW1lbnRzIEV4Y2VwdGlvbkZpbHRlciB7XG4gIHByaXZhdGUgbG9nZ2VyID0gbmV3IExvZ2dlcihBbGxFeGNlcHRpb25zRmlsdGVyLm5hbWUpO1xuXG4gIGNhdGNoKGV4Y2VwdGlvbjogYW55LCBob3N0OiBBcmd1bWVudHNIb3N0KTogYW55IHtcbiAgICBjb25zdCBjdHggPSBob3N0LnN3aXRjaFRvSHR0cCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gY3R4LmdldFJlc3BvbnNlKCk7XG4gICAgY29uc3QgcmVxdWVzdCA9IGN0eC5nZXRSZXF1ZXN0KCk7XG4gICAgaWYgKGV4Y2VwdGlvbi5tZXRhZGF0YSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZXhjZXB0aW9uID0gSlNPTi5wYXJzZShleGNlcHRpb24ubWV0YWRhdGEuZ2V0KEdycGNNZXRhZGF0YUVycm9yS2V5KVswXSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBbR1JQQyBVTkhBTkRMRUQgRVJST1JdOiBbJHtleGNlcHRpb24/Lm1lc3NhZ2V9XSA6LT4gYCwgSlNPTi5zdHJpbmdpZnkoZXhjZXB0aW9uKSk7XG4gICAgICAgIGV4Y2VwdGlvbiA9IG5ldyBHZW5lcmFsU2VydmVyRXJyb3JFeGNlcHRpb24oKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFleGNlcHRpb24uaXNDdXN0b21FcnJvcikge1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYFtVTkhBTkRMRUQgRVJST1JdOiBbJHtleGNlcHRpb24/Lm1lc3NhZ2V9XSA6LT4gYCwgSlNPTi5zdHJpbmdpZnkoZXhjZXB0aW9uKSk7XG4gICAgICBleGNlcHRpb24gPSBuZXcgR2VuZXJhbFNlcnZlckVycm9yRXhjZXB0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBbRVJST1I6JHtleGNlcHRpb24uZXJyb3JDb2RlfV0gJHtleGNlcHRpb24ubWVzc2FnZS50b1VwcGVyQ2FzZSgpfWApO1xuICAgIH1cbiAgICByZXNwb25zZS5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLFxuICAgICAgICBwYXJhbXM6IHJlcXVlc3QucGFyYW1zLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBlcnJvckNvZGU6IGV4Y2VwdGlvbi5lcnJvckNvZGUsXG4gICAgICAgIGVycm9yTWVzc2FnZTogZXhjZXB0aW9uLm1lc3NhZ2UsXG4gICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6IGV4Y2VwdGlvbixcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXJndW1lbnRzSG9zdCwgQ2F0Y2gsIExvZ2dlciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEJhc2VScGNFeGNlcHRpb25GaWx0ZXIgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICdAZ3JwYy9ncnBjLWpzJztcbmltcG9ydCB7IEdlbmVyYWxTZXJ2ZXJFcnJvckV4Y2VwdGlvbiB9IGZyb20gJ2V4Y2VwdGlvbnMvZXhjZXB0aW9ucyc7XG5pbXBvcnQgeyBHcnBjTWV0YWRhdGFFcnJvcktleSB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMnO1xuXG5AQ2F0Y2goKVxuZXhwb3J0IGNsYXNzIEdycGNBbGxFeGNlcHRpb25zRmlsdGVyIGV4dGVuZHMgQmFzZVJwY0V4Y2VwdGlvbkZpbHRlciB7XG4gIHByaXZhdGUgbG9nZ2VyID0gbmV3IExvZ2dlcihHcnBjQWxsRXhjZXB0aW9uc0ZpbHRlci5uYW1lKTtcblxuICBjYXRjaChleGNlcHRpb246IGFueSwgaG9zdDogQXJndW1lbnRzSG9zdCkge1xuICAgIGlmICghZXhjZXB0aW9uLmlzQ3VzdG9tRXJyb3IpIHtcbiAgICAgIGV4Y2VwdGlvbiA9IG5ldyBHZW5lcmFsU2VydmVyRXJyb3JFeGNlcHRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5sb2dnZXIuZXJyb3IoYFtFUlJPUjogJHtleGNlcHRpb24uZXJyb3JDb2RlfV0gJHtleGNlcHRpb24ubWVzc2FnZX1gKTtcbiAgICBjb25zdCBlcnJvck1ldGFkYXRhID0gbmV3IE1ldGFkYXRhKCk7XG4gICAgZXJyb3JNZXRhZGF0YS5hZGQoR3JwY01ldGFkYXRhRXJyb3JLZXksIEpTT04uc3RyaW5naWZ5KGV4Y2VwdGlvbikpO1xuICAgIGV4Y2VwdGlvbi5tZXRhZGF0YSA9IGVycm9yTWV0YWRhdGE7XG4gICAgcmV0dXJuIHRocm93RXJyb3IoKCkgPT4gZXhjZXB0aW9uKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9hbGwuZXhjZXB0aW9ucy5maWx0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9ncnBjLWFsbC5leGNlcHRpb25zLmZpbHRlcic7XG4iLCJpbXBvcnQgeyBCb29raW5nQ29uZmlnLCBNZXJjaGFudENvbmZpZywgTm90aWZpY2F0aW9uQ29uZmlnLCBVc2VyQ29uZmlnLCBVc2VyUHJvdG8gfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzJztcbmltcG9ydCB7IEJPT0tJTkdfUEFDS0FHRV9OQU1FIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3MvYm9va2luZyc7XG5pbXBvcnQgeyBNRVJDSEFOVF9QQUNLQUdFX05BTUUgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy9tZXJjaGFudCc7XG5pbXBvcnQgeyBOT1RJRklDQVRJT05fUEFDS0FHRV9OQU1FIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3Mvbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IENsaWVudFByb3ZpZGVyT3B0aW9ucywgVHJhbnNwb3J0IH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcblxuZXhwb3J0IGNvbnN0IFVzZXJDbGllbnQ6IENsaWVudFByb3ZpZGVyT3B0aW9ucyA9IHtcbiAgbmFtZTogVXNlclByb3RvLkRVQ1BIX1VTRVJfUEFDS0FHRV9OQU1FLFxuICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5HUlBDLFxuICBvcHRpb25zOiB7XG4gICAgcGFja2FnZTogVXNlclByb3RvLkRVQ1BIX1VTRVJfUEFDS0FHRV9OQU1FLFxuICAgIHByb3RvUGF0aDogVXNlckNvbmZpZy5wYXRoLFxuICAgIHVybDogYCR7VXNlckNvbmZpZy5sb2NhbEhvc3RuYW1lfToke1VzZXJDb25maWcucG9ydH1gLFxuICAgIGxvYWRlcjogVXNlckNvbmZpZy5sb2FkZXIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgTWVyY2hhbnRDbGllbnQ6IENsaWVudFByb3ZpZGVyT3B0aW9ucyA9IHtcbiAgbmFtZTogTUVSQ0hBTlRfUEFDS0FHRV9OQU1FLFxuICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5HUlBDLFxuICBvcHRpb25zOiB7XG4gICAgcGFja2FnZTogTUVSQ0hBTlRfUEFDS0FHRV9OQU1FLFxuICAgIHByb3RvUGF0aDogTWVyY2hhbnRDb25maWcucGF0aCxcbiAgICB1cmw6IGAke01lcmNoYW50Q29uZmlnLmxvY2FsSG9zdG5hbWV9OiR7TWVyY2hhbnRDb25maWcucG9ydH1gLFxuICAgIGxvYWRlcjogTWVyY2hhbnRDb25maWcubG9hZGVyLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEJvb2tpbmdDbGllbnQ6IENsaWVudFByb3ZpZGVyT3B0aW9ucyA9IHtcbiAgbmFtZTogQk9PS0lOR19QQUNLQUdFX05BTUUsXG4gIHRyYW5zcG9ydDogVHJhbnNwb3J0LkdSUEMsXG4gIG9wdGlvbnM6IHtcbiAgICBwYWNrYWdlOiBCT09LSU5HX1BBQ0tBR0VfTkFNRSxcbiAgICBwcm90b1BhdGg6IEJvb2tpbmdDb25maWcucGF0aCxcbiAgICB1cmw6IGAke0Jvb2tpbmdDb25maWcubG9jYWxIb3N0bmFtZX06JHtCb29raW5nQ29uZmlnLnBvcnR9YCxcbiAgICBsb2FkZXI6IEJvb2tpbmdDb25maWcubG9hZGVyLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkNsaWVudDogQ2xpZW50UHJvdmlkZXJPcHRpb25zID0ge1xuICBuYW1lOiBOT1RJRklDQVRJT05fUEFDS0FHRV9OQU1FLFxuICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5HUlBDLFxuICBvcHRpb25zOiB7XG4gICAgcGFja2FnZTogTk9USUZJQ0FUSU9OX1BBQ0tBR0VfTkFNRSxcbiAgICBwcm90b1BhdGg6IE5vdGlmaWNhdGlvbkNvbmZpZy5wYXRoLFxuICAgIHVybDogYCR7Tm90aWZpY2F0aW9uQ29uZmlnLmxvY2FsSG9zdG5hbWV9OiR7Tm90aWZpY2F0aW9uQ29uZmlnLnBvcnR9YCxcbiAgICBsb2FkZXI6IE5vdGlmaWNhdGlvbkNvbmZpZy5sb2FkZXIsXG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgY29uc3QgVXNlckNvbmZpZyA9IHtcbiAgaG9zdG5hbWU6ICd1c2VyLXNlcnZpY2UnLFxuICBsb2NhbEhvc3RuYW1lOiAnMC4wLjAuMCcsXG4gIHBvcnQ6IDUwMDA2LFxuICBwYXRoOiByZXNvbHZlKCdsaWJzL2dycGMtdHlwZXMvc3JjL3Byb3RvcycsICd1c2VyLnByb3RvJyksXG4gIGxvYWRlcjoge1xuICAgIGtlZXBDYXNlOiB0cnVlLFxuICAgIGxvbmdzOiBOdW1iZXIsXG4gICAgZW51bXM6IE51bWJlcixcbiAgICBhcnJheXM6IHRydWUsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgTWVyY2hhbnRDb25maWcgPSB7XG4gIGhvc3RuYW1lOiAnbWVyY2hhbnQtc2VydmljZScsXG4gIGxvY2FsSG9zdG5hbWU6ICcwLjAuMC4wJyxcbiAgcG9ydDogNTAwMDgsXG4gIHBhdGg6IHJlc29sdmUoJ2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zJywgJ21lcmNoYW50LnByb3RvJyksXG4gIGxvYWRlcjoge1xuICAgIGtlZXBDYXNlOiB0cnVlLFxuICAgIGxvbmdzOiBOdW1iZXIsXG4gICAgZW51bXM6IE51bWJlcixcbiAgICBhcnJheXM6IHRydWUsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgQm9va2luZ0NvbmZpZyA9IHtcbiAgaG9zdG5hbWU6ICdib29raW5nLXNlcnZpY2UnLFxuICBsb2NhbEhvc3RuYW1lOiAnMC4wLjAuMCcsXG4gIHBvcnQ6IDUwMDEwLFxuICBwYXRoOiByZXNvbHZlKCdsaWJzL2dycGMtdHlwZXMvc3JjL3Byb3RvcycsICdib29raW5nLnByb3RvJyksXG4gIGxvYWRlcjoge1xuICAgIGtlZXBDYXNlOiB0cnVlLFxuICAgIGxvbmdzOiBOdW1iZXIsXG4gICAgZW51bXM6IE51bWJlcixcbiAgICBhcnJheXM6IHRydWUsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uQ29uZmlnID0ge1xuICBob3N0bmFtZTogJ25vdGlmaWNhdGlvbi1zZXJ2aWNlJyxcbiAgbG9jYWxIb3N0bmFtZTogJzAuMC4wLjAnLFxuICBwb3J0OiA1MDAxMixcbiAgcGF0aDogcmVzb2x2ZSgnbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MnLCAnbm90aWZpY2F0aW9uLnByb3RvJyksXG4gIGxvYWRlcjoge1xuICAgIGtlZXBDYXNlOiB0cnVlLFxuICAgIGxvbmdzOiBOdW1iZXIsXG4gICAgZW51bXM6IE51bWJlcixcbiAgICBhcnJheXM6IHRydWUsXG4gIH0sXG59O1xuIiwiaW1wb3J0ICogYXMgVXNlclByb3RvIGZyb20gJy4vcHJvdG9zL3VzZXInO1xuaW1wb3J0ICogYXMgQ29tbW9uUHJvdG8gZnJvbSAnLi9wcm90b3MvY29tbW9ucyc7XG5pbXBvcnQgKiBhcyBNZXJjaGFudFByb3RvIGZyb20gJy4vcHJvdG9zL21lcmNoYW50JztcbmltcG9ydCAqIGFzIEJvb2tpbmdQcm90byBmcm9tICcuL3Byb3Rvcy9ib29raW5nJztcbmltcG9ydCAqIGFzIEJyYW5jaFByb3RvIGZyb20gJy4vcHJvdG9zL2JyYW5jaCc7XG5pbXBvcnQgKiBhcyBEZXZpY2VQcm90byBmcm9tICcuL3Byb3Rvcy9kZXZpY2UnO1xuaW1wb3J0ICogYXMgTWVyY2hhbnRVc2VyUHJvdG8gZnJvbSAnLi9wcm90b3MvbWVyY2hhbnRfdXNlcic7XG5pbXBvcnQgKiBhcyBOb3RpZmljYXRpb25Qcm90byBmcm9tICcuL3Byb3Rvcy9ub3RpZmljYXRpb24nO1xuXG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vc2VydmVycyc7XG5leHBvcnQgKiBmcm9tICcuL2NsaWVudHMnO1xuXG5leHBvcnQge1xuICBDb21tb25Qcm90byxcbiAgVXNlclByb3RvLFxuICBNZXJjaGFudFByb3RvLFxuICBCb29raW5nUHJvdG8sXG4gIEJyYW5jaFByb3RvLFxuICBEZXZpY2VQcm90byxcbiAgTWVyY2hhbnRVc2VyUHJvdG8sXG4gIE5vdGlmaWNhdGlvblByb3RvLFxufTtcblxuZXhwb3J0IGNvbnN0IEdycGNNZXRhZGF0YUVycm9yS2V5ID0gJ2N1c3RvbS1ncnBjLWVycm9yJztcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBHcnBjTWV0aG9kLCBHcnBjU3RyZWFtTWV0aG9kIH0gZnJvbSBcIkBuZXN0anMvbWljcm9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBDb3VudCwgRUJvb2tpbmdTdGF0dXMsIElkLCBRdWVyeVJlcXVlc3QgfSBmcm9tIFwiLi9jb21tb25zXCI7XG5pbXBvcnQgeyBOdWxsVmFsdWUgfSBmcm9tIFwiLi9nb29nbGUvcHJvdG9idWYvc3RydWN0XCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImJvb2tpbmdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCb29raW5nIHtcbiAgLyoqIGRlZmF1bHQgZmllbGQgKi9cbiAgaWQ6IG51bWJlcjtcbiAgY3JlYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3JlYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRCeT86XG4gICAgfCBzdHJpbmdcbiAgICB8IHVuZGVmaW5lZDtcbiAgLyoqIHJlc2VydmVkIGZpZWxkICovXG4gIHN0YXR1cz86IEVCb29raW5nU3RhdHVzIHwgdW5kZWZpbmVkO1xuICB1c2VySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2VJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc3RhcnRUaW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBlbmRUaW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkdXJhdGlvbj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbm90ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGlzQ3VzdG9tZXJDYW5jZWw/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICBjYW5jZWxSZWFzb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGJvb2tpbmdEYXRlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBpc0FkbWluVXBkYXRlPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgYWRtaW5VcGRhdGVJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc2VydmljZU5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJFbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJBZGRyZXNzPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkdXJhdGlvbkhvdXI/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGR1cmF0aW9uTWludXRlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUJvb2tpbmdJbnB1dCB7XG4gIHN0YXR1cz86IEVCb29raW5nU3RhdHVzIHwgdW5kZWZpbmVkO1xuICB1c2VySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2VJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc3RhcnRUaW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBlbmRUaW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhZG1pbkJyYW5jaEVtYWlsPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lckVtYWlsPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lck5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGJvb2tpbmdEYXRlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBub3RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBicmFuY2hJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc2VydmljZU5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlQm9va2luZ0RhdGEge1xuICBzdGF0dXM/OiBFQm9va2luZ1N0YXR1cyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZXJ2aWNlSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHN0YXJ0VGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZW5kVGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRtaW5CcmFuY2hFbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJFbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBib29raW5nRGF0ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbm90ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2VOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZUJvb2tpbmdJbnB1dCB7XG4gIGlkOiBudW1iZXI7XG4gIGRhdGE6IFVwZGF0ZUJvb2tpbmdEYXRhIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRCb29raW5nT2Zmc2V0UGFnaW5hdGlvbiB7XG4gIGl0ZW1zOiBCb29raW5nW107XG4gIHBhZ2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHRvdGFsUGFnZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgdG90YWw/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxpbWl0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE51bGxhYmxlQm9va2luZyB7XG4gIG51bGw/OiBOdWxsVmFsdWUgfCB1bmRlZmluZWQ7XG4gIGJvb2tpbmc/OiBCb29raW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgQk9PS0lOR19QQUNLQUdFX05BTUUgPSBcImJvb2tpbmdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCb29raW5nU2VydmljZUNsaWVudCB7XG4gIGZpbmQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxGaW5kQm9va2luZ09mZnNldFBhZ2luYXRpb24+O1xuXG4gIGZpbmRCeUlkKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxOdWxsYWJsZUJvb2tpbmc+O1xuXG4gIGZpbmRPbmUocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxOdWxsYWJsZUJvb2tpbmc+O1xuXG4gIGNvdW50KHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8Q291bnQ+O1xuXG4gIGNyZWF0ZShyZXF1ZXN0OiBDcmVhdGVCb29raW5nSW5wdXQpOiBPYnNlcnZhYmxlPEJvb2tpbmc+O1xuXG4gIHVwZGF0ZShyZXF1ZXN0OiBVcGRhdGVCb29raW5nSW5wdXQpOiBPYnNlcnZhYmxlPEJvb2tpbmc+O1xuXG4gIGRlbGV0ZShyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8Q291bnQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJvb2tpbmdTZXJ2aWNlQ29udHJvbGxlciB7XG4gIGZpbmQoXG4gICAgcmVxdWVzdDogUXVlcnlSZXF1ZXN0LFxuICApOiBQcm9taXNlPEZpbmRCb29raW5nT2Zmc2V0UGFnaW5hdGlvbj4gfCBPYnNlcnZhYmxlPEZpbmRCb29raW5nT2Zmc2V0UGFnaW5hdGlvbj4gfCBGaW5kQm9va2luZ09mZnNldFBhZ2luYXRpb247XG5cbiAgZmluZEJ5SWQocmVxdWVzdDogSWQpOiBQcm9taXNlPE51bGxhYmxlQm9va2luZz4gfCBPYnNlcnZhYmxlPE51bGxhYmxlQm9va2luZz4gfCBOdWxsYWJsZUJvb2tpbmc7XG5cbiAgZmluZE9uZShyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE51bGxhYmxlQm9va2luZz4gfCBPYnNlcnZhYmxlPE51bGxhYmxlQm9va2luZz4gfCBOdWxsYWJsZUJvb2tpbmc7XG5cbiAgY291bnQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xuXG4gIGNyZWF0ZShyZXF1ZXN0OiBDcmVhdGVCb29raW5nSW5wdXQpOiBQcm9taXNlPEJvb2tpbmc+IHwgT2JzZXJ2YWJsZTxCb29raW5nPiB8IEJvb2tpbmc7XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFVwZGF0ZUJvb2tpbmdJbnB1dCk6IFByb21pc2U8Qm9va2luZz4gfCBPYnNlcnZhYmxlPEJvb2tpbmc+IHwgQm9va2luZztcblxuICBkZWxldGUocmVxdWVzdDogSWQpOiBQcm9taXNlPENvdW50PiB8IE9ic2VydmFibGU8Q291bnQ+IHwgQ291bnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCb29raW5nU2VydmljZUNvbnRyb2xsZXJNZXRob2RzKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnN0cnVjdG9yOiBGdW5jdGlvbikge1xuICAgIGNvbnN0IGdycGNNZXRob2RzOiBzdHJpbmdbXSA9IFtcImZpbmRcIiwgXCJmaW5kQnlJZFwiLCBcImZpbmRPbmVcIiwgXCJjb3VudFwiLCBcImNyZWF0ZVwiLCBcInVwZGF0ZVwiLCBcImRlbGV0ZVwiXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY01ldGhvZChcIkJvb2tpbmdTZXJ2aWNlXCIsIG1ldGhvZCkoY29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZF0sIG1ldGhvZCwgZGVzY3JpcHRvcik7XG4gICAgfVxuICAgIGNvbnN0IGdycGNTdHJlYW1NZXRob2RzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIGdycGNTdHJlYW1NZXRob2RzKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yOiBhbnkgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG1ldGhvZCk7XG4gICAgICBHcnBjU3RyZWFtTWV0aG9kKFwiQm9va2luZ1NlcnZpY2VcIiwgbWV0aG9kKShjb25zdHJ1Y3Rvci5wcm90b3R5cGVbbWV0aG9kXSwgbWV0aG9kLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBCT09LSU5HX1NFUlZJQ0VfTkFNRSA9IFwiQm9va2luZ1NlcnZpY2VcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBQYWdlSW5mbywgUGFnZU1ldGEgfSBmcm9tIFwiLi9jb21tb25zXCI7XG5pbXBvcnQgeyBOdWxsVmFsdWUgfSBmcm9tIFwiLi9nb29nbGUvcHJvdG9idWYvc3RydWN0XCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImJyYW5jaFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZUJyYW5jaERhdGEge1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB3YXJkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZUJyYW5jaElucHV0IHtcbiAgaWQ6IG51bWJlcjtcbiAgZGF0YTogVXBkYXRlQnJhbmNoRGF0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVCcmFuY2hJbnB1dCB7XG4gIG5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHBob25lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhZGRyZXNzPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjaXR5Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3YXJkQ29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3Q/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHdhcmQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJhbmNoIHtcbiAgLyoqIGRlZmF1bHQgZmllbGQgKi9cbiAgaWQ6IG51bWJlcjtcbiAgY3JlYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3JlYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRCeT86XG4gICAgfCBzdHJpbmdcbiAgICB8IHVuZGVmaW5lZDtcbiAgLyoqIHJlc2VydmVkIGZpZWxkICovXG4gIG5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHBob25lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhZGRyZXNzPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjaXR5Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3YXJkQ29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3Q/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHdhcmQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJhbmNoRWRnZSB7XG4gIG5vZGU6IEJyYW5jaCB8IHVuZGVmaW5lZDtcbiAgY3Vyc29yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZEJyYW5jaGVzUGF5bG9hZCB7XG4gIGVkZ2VzOiBCcmFuY2hFZGdlW107XG4gIHBhZ2VJbmZvOiBQYWdlSW5mbyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOdWxsYWJsZUJyYW5jaCB7XG4gIG51bGw/OiBOdWxsVmFsdWUgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaD86IEJyYW5jaCB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCcmFuY2hlcyB7XG4gIGJyYW5jaGVzOiBCcmFuY2hbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCcmFuY2hQYWdpbmF0aW9uIHtcbiAgaXRlbXM6IEJyYW5jaFtdO1xuICBtZXRhPzogUGFnZU1ldGEgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBCUkFOQ0hfUEFDS0FHRV9OQU1FID0gXCJicmFuY2hcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImNvbW1vbnNcIjtcblxuZXhwb3J0IGVudW0gRVNvcnREaXJlY3Rpb24ge1xuICBBU0MgPSAwLFxuICBERVNDID0gMSxcbn1cblxuZXhwb3J0IGVudW0gRVVzZXJHZW5kZXIge1xuICBNQUxFID0gMCxcbiAgRkVNQUxFID0gMSxcbiAgT1RIRVIgPSAyLFxufVxuXG5leHBvcnQgZW51bSBFVXNlclJvbGUge1xuICBVU0VSID0gMCxcbiAgQURNSU4gPSAxLFxuICBTVVBFUl9BRE1JTiA9IDIsXG4gIE1BU1RFUl9XT1JLRVIgPSAzLFxuICBBU1NJU1RBTlRfV09SS0VSID0gNCxcbiAgTUFOQUdFUiA9IDUsXG4gIFJFQ0VQVElPTklTVCA9IDYsXG59XG5cbmV4cG9ydCBlbnVtIEVDdXN0b21lckxldmVsIHtcbiAgTk9STUFMID0gMCxcbiAgU0lMVkVSID0gMSxcbiAgR09MRCA9IDIsXG4gIFBMQVRJTlVNID0gMyxcbn1cblxuZXhwb3J0IGVudW0gRVVzZXJTdGF0dXMge1xuICBQRU5ESU5HID0gMCxcbiAgQUNUSVZFID0gMSxcbiAgQkFOTkVEID0gMixcbn1cblxuZXhwb3J0IGVudW0gRU5vdGlmaWNhdGlvblR5cGUge1xuICBCT09LSU5HID0gMCxcbiAgQ0hBVCA9IDEsXG4gIENPTU1FTlQgPSAyLFxuICBSRVBMWV9DT01NRU5UID0gMyxcbn1cblxuZXhwb3J0IGVudW0gRUJvb2tpbmdTdGF0dXMge1xuICBCT09LSU5HX1BFTkRJTkcgPSAwLFxuICBCT09LSU5HX0FQUFJPVkUgPSAxLFxuICBCT09LSU5HX0NBTkNFTExFRCA9IDIsXG4gIEJPT0tJTkdfUkVKRUNUID0gMyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJZCB7XG4gIGlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JRdWVyeSB7XG4gIGZpbHRlcjogc3RyaW5nO1xuICBwYWdpbmc6IFBhZ2luZyB8IHVuZGVmaW5lZDtcbiAgc29ydGluZzogU29ydFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdxbFF1ZXJ5IHtcbiAgc2VsZWN0OiBzdHJpbmdbXTtcbiAgd2hlcmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG9yZGVyQnk6IHN0cmluZ1tdO1xuICBsaW1pdD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgYmVmb3JlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhZnRlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlSW5mbyB7XG4gIHN0YXJ0Q3Vyc29yPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBlbmRDdXJzb3I/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGhhc05leHRQYWdlPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgaGFzUHJldmlvdXNQYWdlPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb3VudCB7XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG90YWxDb3VudCB7XG4gIHRvdGFsQ291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeVJlcXVlc3Qge1xuICB3aGVyZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGFnZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbGltaXQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlYXJjaEtleT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgb3JkZXJCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgb3JkZXJEaXJlY3Rpb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ydCB7XG4gIGZpZWxkOiBzdHJpbmc7XG4gIGRpcmVjdGlvbjogRVNvcnREaXJlY3Rpb247XG4gIG51bGxzOiBTb3J0X1NvcnROdWxscztcbn1cblxuZXhwb3J0IGVudW0gU29ydF9Tb3J0TnVsbHMge1xuICBOVUxMU19GSVJTVCA9IDAsXG4gIE5VTExTX0xBU1QgPSAxLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luZyB7XG4gIGxpbWl0OiBudW1iZXI7XG4gIG9mZnNldDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VNZXRhIHtcbiAgdG90YWw/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHRvdGFsUGFnZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcGFnZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbGltaXQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBDT01NT05TX1BBQ0tBR0VfTkFNRSA9IFwiY29tbW9uc1wiO1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IFBhZ2VNZXRhIH0gZnJvbSBcIi4vY29tbW9uc1wiO1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJkZXZpY2VcIjtcblxuZXhwb3J0IGVudW0gRURldmljZU9zIHtcbiAgQU5EUk9JRCA9IDAsXG4gIElPUyA9IDEsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlIHtcbiAgLyoqIGRlZmF1bHQgZmllbGQgKi9cbiAgaWQ6IG51bWJlcjtcbiAgY3JlYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3JlYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRCeT86XG4gICAgfCBzdHJpbmdcbiAgICB8IHVuZGVmaW5lZDtcbiAgLyoqIHJlc2VydmVkIGZpZWxkICovXG4gIG9zPzogRURldmljZU9zIHwgdW5kZWZpbmVkO1xuICBkZXZpY2VJZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdG9rZW4/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVEZXZpY2VJbnB1dCB7XG4gIG9zOiBFRGV2aWNlT3M7XG4gIGRldmljZUlkOiBzdHJpbmc7XG4gIHRva2VuOiBzdHJpbmc7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VzIHtcbiAgaXRlbXM6IERldmljZVtdO1xuICBtZXRhPzogUGFnZU1ldGEgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBERVZJQ0VfUEFDS0FHRV9OQU1FID0gXCJkZXZpY2VcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBHcnBjTWV0aG9kLCBHcnBjU3RyZWFtTWV0aG9kIH0gZnJvbSBcIkBuZXN0anMvbWljcm9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBCcmFuY2gsIEJyYW5jaGVzLCBCcmFuY2hQYWdpbmF0aW9uLCBDcmVhdGVCcmFuY2hJbnB1dCwgTnVsbGFibGVCcmFuY2gsIFVwZGF0ZUJyYW5jaElucHV0IH0gZnJvbSBcIi4vYnJhbmNoXCI7XG5pbXBvcnQgeyBDb3VudCwgSWQsIFBhZ2VJbmZvLCBQYWdlTWV0YSwgUXVlcnlSZXF1ZXN0IH0gZnJvbSBcIi4vY29tbW9uc1wiO1xuaW1wb3J0IHsgTnVsbFZhbHVlIH0gZnJvbSBcIi4vZ29vZ2xlL3Byb3RvYnVmL3N0cnVjdFwiO1xuaW1wb3J0IHsgQ3JlYXRlR3JvdXBJbnB1dCwgR3JvdXAsIEdyb3VwUGFnaW5hdGlvbiwgTnVsbGFibGVHcm91cCwgVXBkYXRlR3JvdXBJbnB1dCB9IGZyb20gXCIuL2dyb3VwXCI7XG5pbXBvcnQge1xuICBDcmVhdGVTZXJ2aWNlSW5wdXQsXG4gIEZpbmRTZXJ2aWNlT2Zmc2V0UGFnaW5hdGlvbixcbiAgRmluZFNlcnZpY2VzUGF5bG9hZCxcbiAgTnVsbGFibGVTZXJ2aWNlLFxuICBTZXJ2aWNlLFxuICBVcGRhdGVTZXJ2aWNlSW5wdXQsXG59IGZyb20gXCIuL3NlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwibWVyY2hhbnRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVNZXJjaGFudERhdGEge1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjaXR5Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3YXJkQ29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3Q/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHdhcmQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlTWVyY2hhbnRJbnB1dCB7XG4gIGlkOiBudW1iZXI7XG4gIGRhdGE6IFVwZGF0ZU1lcmNoYW50RGF0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVJbnB1dCB7XG4gIG5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHBob25lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhZGRyZXNzPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1c2VySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHlDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkaXN0cmljdENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHdhcmRDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjaXR5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkaXN0cmljdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgd2FyZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXJjaGFudCB7XG4gIC8qKiBkZWZhdWx0IGZpZWxkICovXG4gIGlkOiBudW1iZXI7XG4gIGNyZWF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNyZWF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQnk/OlxuICAgIHwgc3RyaW5nXG4gICAgfCB1bmRlZmluZWQ7XG4gIC8qKiByZXNlcnZlZCBmaWVsZCAqL1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjaXR5Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3YXJkQ29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3Q/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHdhcmQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVyY2hhbnRFZGdlIHtcbiAgbm9kZTogTWVyY2hhbnQgfCB1bmRlZmluZWQ7XG4gIGN1cnNvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRNZXJjaGFudHNQYXlsb2FkIHtcbiAgZWRnZXM6IE1lcmNoYW50RWRnZVtdO1xuICBwYWdlSW5mbzogUGFnZUluZm8gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnVsbGFibGVNZXJjaGFudCB7XG4gIG51bGw/OiBOdWxsVmFsdWUgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50PzogTWVyY2hhbnQgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTWVyY2hhbnRSZXNwb25zZSB7XG4gIG1lcmNoYW50OiBNZXJjaGFudCB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoOiBCcmFuY2ggfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVyY2hhbnRzIHtcbiAgbWVyY2hhbnRzOiBNZXJjaGFudFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lcmNoYW50UGFnaW5hdGlvbiB7XG4gIGl0ZW1zOiBNZXJjaGFudFtdO1xuICBtZXRhPzogUGFnZU1ldGEgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBNRVJDSEFOVF9QQUNLQUdFX05BTUUgPSBcIm1lcmNoYW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVyY2hhbnRTZXJ2aWNlQ2xpZW50IHtcbiAgZmluZChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPE1lcmNoYW50UGFnaW5hdGlvbj47XG5cbiAgZmluZEFsbChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPE1lcmNoYW50cz47XG5cbiAgZmluZE9uZShyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPE51bGxhYmxlTWVyY2hhbnQ+O1xuXG4gIGNyZWF0ZShyZXF1ZXN0OiBDcmVhdGVJbnB1dCk6IE9ic2VydmFibGU8Q3JlYXRlTWVyY2hhbnRSZXNwb25zZT47XG5cbiAgY291bnQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxDb3VudD47XG5cbiAgZmluZEJ5SWQocmVxdWVzdDogSWQpOiBPYnNlcnZhYmxlPE51bGxhYmxlTWVyY2hhbnQ+O1xuXG4gIC8qKiBicmFuY2ggKi9cblxuICBicmFuY2gocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxOdWxsYWJsZUJyYW5jaD47XG5cbiAgZmluZEJyYW5jaGVzKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8QnJhbmNoUGFnaW5hdGlvbj47XG5cbiAgYnJhbmNoZXMocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxCcmFuY2hlcz47XG5cbiAgZmluZEJyYW5jaEJ5SWQocmVxdWVzdDogSWQpOiBPYnNlcnZhYmxlPE51bGxhYmxlQnJhbmNoPjtcblxuICBjcmVhdGVCcmFuY2gocmVxdWVzdDogQ3JlYXRlQnJhbmNoSW5wdXQpOiBPYnNlcnZhYmxlPEJyYW5jaD47XG5cbiAgdXBkYXRlQnJhbmNoKHJlcXVlc3Q6IFVwZGF0ZUJyYW5jaElucHV0KTogT2JzZXJ2YWJsZTxCcmFuY2g+O1xuXG4gIGRlbGV0ZUJyYW5jaChyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8Q291bnQ+O1xuXG4gIC8qKiBncm91cCAqL1xuXG4gIGdyb3VwKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8TnVsbGFibGVHcm91cD47XG5cbiAgZ3JvdXBzKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8R3JvdXBQYWdpbmF0aW9uPjtcblxuICBmaW5kR3JvdXBCeUlkKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxOdWxsYWJsZUdyb3VwPjtcblxuICBjcmVhdGVHcm91cChyZXF1ZXN0OiBDcmVhdGVHcm91cElucHV0KTogT2JzZXJ2YWJsZTxHcm91cD47XG5cbiAgdXBkYXRlR3JvdXAocmVxdWVzdDogVXBkYXRlR3JvdXBJbnB1dCk6IE9ic2VydmFibGU8R3JvdXA+O1xuXG4gIGRlbGV0ZUdyb3VwKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxDb3VudD47XG5cbiAgLyoqIHNlcnZpY2UgKi9cblxuICBzZXJ2aWNlKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8TnVsbGFibGVTZXJ2aWNlPjtcblxuICBzZXJ2aWNlcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPEZpbmRTZXJ2aWNlc1BheWxvYWQ+O1xuXG4gIGZpbmRTZXJ2aWNlQnlJZChyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8TnVsbGFibGVTZXJ2aWNlPjtcblxuICBjcmVhdGVTZXJ2aWNlKHJlcXVlc3Q6IENyZWF0ZVNlcnZpY2VJbnB1dCk6IE9ic2VydmFibGU8U2VydmljZT47XG5cbiAgdXBkYXRlU2VydmljZShyZXF1ZXN0OiBVcGRhdGVTZXJ2aWNlSW5wdXQpOiBPYnNlcnZhYmxlPFNlcnZpY2U+O1xuXG4gIGRlbGV0ZVNlcnZpY2UocmVxdWVzdDogSWQpOiBPYnNlcnZhYmxlPENvdW50PjtcblxuICBmaW5kU2VydmljZU9mZnNldFBhZ2luYXRpb24ocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxGaW5kU2VydmljZU9mZnNldFBhZ2luYXRpb24+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lcmNoYW50U2VydmljZUNvbnRyb2xsZXIge1xuICBmaW5kKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8TWVyY2hhbnRQYWdpbmF0aW9uPiB8IE9ic2VydmFibGU8TWVyY2hhbnRQYWdpbmF0aW9uPiB8IE1lcmNoYW50UGFnaW5hdGlvbjtcblxuICBmaW5kQWxsKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8TWVyY2hhbnRzPiB8IE9ic2VydmFibGU8TWVyY2hhbnRzPiB8IE1lcmNoYW50cztcblxuICBmaW5kT25lKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8TnVsbGFibGVNZXJjaGFudD4gfCBPYnNlcnZhYmxlPE51bGxhYmxlTWVyY2hhbnQ+IHwgTnVsbGFibGVNZXJjaGFudDtcblxuICBjcmVhdGUoXG4gICAgcmVxdWVzdDogQ3JlYXRlSW5wdXQsXG4gICk6IFByb21pc2U8Q3JlYXRlTWVyY2hhbnRSZXNwb25zZT4gfCBPYnNlcnZhYmxlPENyZWF0ZU1lcmNoYW50UmVzcG9uc2U+IHwgQ3JlYXRlTWVyY2hhbnRSZXNwb25zZTtcblxuICBjb3VudChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPENvdW50PiB8IE9ic2VydmFibGU8Q291bnQ+IHwgQ291bnQ7XG5cbiAgZmluZEJ5SWQocmVxdWVzdDogSWQpOiBQcm9taXNlPE51bGxhYmxlTWVyY2hhbnQ+IHwgT2JzZXJ2YWJsZTxOdWxsYWJsZU1lcmNoYW50PiB8IE51bGxhYmxlTWVyY2hhbnQ7XG5cbiAgLyoqIGJyYW5jaCAqL1xuXG4gIGJyYW5jaChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE51bGxhYmxlQnJhbmNoPiB8IE9ic2VydmFibGU8TnVsbGFibGVCcmFuY2g+IHwgTnVsbGFibGVCcmFuY2g7XG5cbiAgZmluZEJyYW5jaGVzKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8QnJhbmNoUGFnaW5hdGlvbj4gfCBPYnNlcnZhYmxlPEJyYW5jaFBhZ2luYXRpb24+IHwgQnJhbmNoUGFnaW5hdGlvbjtcblxuICBicmFuY2hlcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPEJyYW5jaGVzPiB8IE9ic2VydmFibGU8QnJhbmNoZXM+IHwgQnJhbmNoZXM7XG5cbiAgZmluZEJyYW5jaEJ5SWQocmVxdWVzdDogSWQpOiBQcm9taXNlPE51bGxhYmxlQnJhbmNoPiB8IE9ic2VydmFibGU8TnVsbGFibGVCcmFuY2g+IHwgTnVsbGFibGVCcmFuY2g7XG5cbiAgY3JlYXRlQnJhbmNoKHJlcXVlc3Q6IENyZWF0ZUJyYW5jaElucHV0KTogUHJvbWlzZTxCcmFuY2g+IHwgT2JzZXJ2YWJsZTxCcmFuY2g+IHwgQnJhbmNoO1xuXG4gIHVwZGF0ZUJyYW5jaChyZXF1ZXN0OiBVcGRhdGVCcmFuY2hJbnB1dCk6IFByb21pc2U8QnJhbmNoPiB8IE9ic2VydmFibGU8QnJhbmNoPiB8IEJyYW5jaDtcblxuICBkZWxldGVCcmFuY2gocmVxdWVzdDogSWQpOiBQcm9taXNlPENvdW50PiB8IE9ic2VydmFibGU8Q291bnQ+IHwgQ291bnQ7XG5cbiAgLyoqIGdyb3VwICovXG5cbiAgZ3JvdXAocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxOdWxsYWJsZUdyb3VwPiB8IE9ic2VydmFibGU8TnVsbGFibGVHcm91cD4gfCBOdWxsYWJsZUdyb3VwO1xuXG4gIGdyb3VwcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPEdyb3VwUGFnaW5hdGlvbj4gfCBPYnNlcnZhYmxlPEdyb3VwUGFnaW5hdGlvbj4gfCBHcm91cFBhZ2luYXRpb247XG5cbiAgZmluZEdyb3VwQnlJZChyZXF1ZXN0OiBJZCk6IFByb21pc2U8TnVsbGFibGVHcm91cD4gfCBPYnNlcnZhYmxlPE51bGxhYmxlR3JvdXA+IHwgTnVsbGFibGVHcm91cDtcblxuICBjcmVhdGVHcm91cChyZXF1ZXN0OiBDcmVhdGVHcm91cElucHV0KTogUHJvbWlzZTxHcm91cD4gfCBPYnNlcnZhYmxlPEdyb3VwPiB8IEdyb3VwO1xuXG4gIHVwZGF0ZUdyb3VwKHJlcXVlc3Q6IFVwZGF0ZUdyb3VwSW5wdXQpOiBQcm9taXNlPEdyb3VwPiB8IE9ic2VydmFibGU8R3JvdXA+IHwgR3JvdXA7XG5cbiAgZGVsZXRlR3JvdXAocmVxdWVzdDogSWQpOiBQcm9taXNlPENvdW50PiB8IE9ic2VydmFibGU8Q291bnQ+IHwgQ291bnQ7XG5cbiAgLyoqIHNlcnZpY2UgKi9cblxuICBzZXJ2aWNlKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8TnVsbGFibGVTZXJ2aWNlPiB8IE9ic2VydmFibGU8TnVsbGFibGVTZXJ2aWNlPiB8IE51bGxhYmxlU2VydmljZTtcblxuICBzZXJ2aWNlcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPEZpbmRTZXJ2aWNlc1BheWxvYWQ+IHwgT2JzZXJ2YWJsZTxGaW5kU2VydmljZXNQYXlsb2FkPiB8IEZpbmRTZXJ2aWNlc1BheWxvYWQ7XG5cbiAgZmluZFNlcnZpY2VCeUlkKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxOdWxsYWJsZVNlcnZpY2U+IHwgT2JzZXJ2YWJsZTxOdWxsYWJsZVNlcnZpY2U+IHwgTnVsbGFibGVTZXJ2aWNlO1xuXG4gIGNyZWF0ZVNlcnZpY2UocmVxdWVzdDogQ3JlYXRlU2VydmljZUlucHV0KTogUHJvbWlzZTxTZXJ2aWNlPiB8IE9ic2VydmFibGU8U2VydmljZT4gfCBTZXJ2aWNlO1xuXG4gIHVwZGF0ZVNlcnZpY2UocmVxdWVzdDogVXBkYXRlU2VydmljZUlucHV0KTogUHJvbWlzZTxTZXJ2aWNlPiB8IE9ic2VydmFibGU8U2VydmljZT4gfCBTZXJ2aWNlO1xuXG4gIGRlbGV0ZVNlcnZpY2UocmVxdWVzdDogSWQpOiBQcm9taXNlPENvdW50PiB8IE9ic2VydmFibGU8Q291bnQ+IHwgQ291bnQ7XG5cbiAgZmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCxcbiAgKTogUHJvbWlzZTxGaW5kU2VydmljZU9mZnNldFBhZ2luYXRpb24+IHwgT2JzZXJ2YWJsZTxGaW5kU2VydmljZU9mZnNldFBhZ2luYXRpb24+IHwgRmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTWVyY2hhbnRTZXJ2aWNlQ29udHJvbGxlck1ldGhvZHMoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29uc3RydWN0b3I6IEZ1bmN0aW9uKSB7XG4gICAgY29uc3QgZ3JwY01ldGhvZHM6IHN0cmluZ1tdID0gW1xuICAgICAgXCJmaW5kXCIsXG4gICAgICBcImZpbmRBbGxcIixcbiAgICAgIFwiZmluZE9uZVwiLFxuICAgICAgXCJjcmVhdGVcIixcbiAgICAgIFwiY291bnRcIixcbiAgICAgIFwiZmluZEJ5SWRcIixcbiAgICAgIFwiYnJhbmNoXCIsXG4gICAgICBcImZpbmRCcmFuY2hlc1wiLFxuICAgICAgXCJicmFuY2hlc1wiLFxuICAgICAgXCJmaW5kQnJhbmNoQnlJZFwiLFxuICAgICAgXCJjcmVhdGVCcmFuY2hcIixcbiAgICAgIFwidXBkYXRlQnJhbmNoXCIsXG4gICAgICBcImRlbGV0ZUJyYW5jaFwiLFxuICAgICAgXCJncm91cFwiLFxuICAgICAgXCJncm91cHNcIixcbiAgICAgIFwiZmluZEdyb3VwQnlJZFwiLFxuICAgICAgXCJjcmVhdGVHcm91cFwiLFxuICAgICAgXCJ1cGRhdGVHcm91cFwiLFxuICAgICAgXCJkZWxldGVHcm91cFwiLFxuICAgICAgXCJzZXJ2aWNlXCIsXG4gICAgICBcInNlcnZpY2VzXCIsXG4gICAgICBcImZpbmRTZXJ2aWNlQnlJZFwiLFxuICAgICAgXCJjcmVhdGVTZXJ2aWNlXCIsXG4gICAgICBcInVwZGF0ZVNlcnZpY2VcIixcbiAgICAgIFwiZGVsZXRlU2VydmljZVwiLFxuICAgICAgXCJmaW5kU2VydmljZU9mZnNldFBhZ2luYXRpb25cIixcbiAgICBdO1xuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIGdycGNNZXRob2RzKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yOiBhbnkgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG1ldGhvZCk7XG4gICAgICBHcnBjTWV0aG9kKFwiTWVyY2hhbnRTZXJ2aWNlXCIsIG1ldGhvZCkoY29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZF0sIG1ldGhvZCwgZGVzY3JpcHRvcik7XG4gICAgfVxuICAgIGNvbnN0IGdycGNTdHJlYW1NZXRob2RzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIGdycGNTdHJlYW1NZXRob2RzKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yOiBhbnkgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG1ldGhvZCk7XG4gICAgICBHcnBjU3RyZWFtTWV0aG9kKFwiTWVyY2hhbnRTZXJ2aWNlXCIsIG1ldGhvZCkoY29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZF0sIG1ldGhvZCwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgTUVSQ0hBTlRfU0VSVklDRV9OQU1FID0gXCJNZXJjaGFudFNlcnZpY2VcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBFVXNlclJvbGUsIEVVc2VyU3RhdHVzLCBQYWdlTWV0YSB9IGZyb20gXCIuL2NvbW1vbnNcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwibWVyY2hhbnRfdXNlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lcmNoYW50VXNlciB7XG4gIC8qKiBkZWZhdWx0IGZpZWxkICovXG4gIGlkOiBudW1iZXI7XG4gIGNyZWF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNyZWF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQnk/OlxuICAgIHwgc3RyaW5nXG4gICAgfCB1bmRlZmluZWQ7XG4gIC8qKiByZXNlcnZlZCBmaWVsZCAqL1xuICByb2xlPzogRVVzZXJSb2xlIHwgdW5kZWZpbmVkO1xuICBzdGF0dXM/OiBFVXNlclN0YXR1cyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBicmFuY2hJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVNZXJjaGFudFVzZXJJbnB1dCB7XG4gIHJvbGU/OiBFVXNlclJvbGUgfCB1bmRlZmluZWQ7XG4gIHN0YXR1cz86IEVVc2VyU3RhdHVzIHwgdW5kZWZpbmVkO1xuICB1c2VySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lcmNoYW50VXNlcnMge1xuICBpdGVtczogTWVyY2hhbnRVc2VyW107XG4gIG1ldGE/OiBQYWdlTWV0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVNZXJjaGFudFVzZXJEYXRhIHtcbiAgcm9sZT86IEVVc2VyUm9sZSB8IHVuZGVmaW5lZDtcbiAgc3RhdHVzPzogRVVzZXJTdGF0dXMgfCB1bmRlZmluZWQ7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlTWVyY2hhbnRVc2VySW5wdXQge1xuICBpZDogbnVtYmVyO1xuICBkYXRhOiBVcGRhdGVNZXJjaGFudFVzZXJEYXRhIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgTUVSQ0hBTlRfVVNFUl9QQUNLQUdFX05BTUUgPSBcIm1lcmNoYW50X3VzZXJcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBHcnBjTWV0aG9kLCBHcnBjU3RyZWFtTWV0aG9kIH0gZnJvbSBcIkBuZXN0anMvbWljcm9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBFQm9va2luZ1N0YXR1cywgRU5vdGlmaWNhdGlvblR5cGUgfSBmcm9tIFwiLi9jb21tb25zXCI7XG5pbXBvcnQgeyBOdWxsVmFsdWUgfSBmcm9tIFwiLi9nb29nbGUvcHJvdG9idWYvc3RydWN0XCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcIm5vdGlmaWNhdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbiB7XG4gIC8qKiBkZWZhdWx0IGZpZWxkICovXG4gIGlkOiBudW1iZXI7XG4gIGNyZWF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNyZWF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQnk/OlxuICAgIHwgc3RyaW5nXG4gICAgfCB1bmRlZmluZWQ7XG4gIC8qKiByZXNlcnZlZCBmaWVsZCAqL1xuICBzdGF0dXM/OiBFQm9va2luZ1N0YXR1cyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZXJ2aWNlSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHN0YXJ0VGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZW5kVGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZHVyYXRpb24/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG5vdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBpc0N1c3RvbWVyQ2FuY2VsPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgY2FuY2VsUmVhc29uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBib29raW5nRGF0ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaXNBZG1pblVwZGF0ZT86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIGFkbWluVXBkYXRlSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2VOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lck5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyRW1haWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyQWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZHVyYXRpb25Ib3VyPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkdXJhdGlvbk1pbnV0ZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc2VuZGVySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHRpdGxlRW4/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHRpdGxlVmk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGJvZHlFbj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYm9keVZpPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB0eXBlPzogRU5vdGlmaWNhdGlvblR5cGUgfCB1bmRlZmluZWQ7XG4gIGRhdGFfanNvbj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVOb3RpZmljYXRpb25JbnB1dCB7XG4gIHN0YXR1cz86IEVCb29raW5nU3RhdHVzIHwgdW5kZWZpbmVkO1xuICB1c2VySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2VJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc3RhcnRUaW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBlbmRUaW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhZG1pbkJyYW5jaEVtYWlsPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lckVtYWlsPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lck5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGJvb2tpbmdEYXRlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBub3RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBicmFuY2hJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc2VydmljZU5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHNlbmRlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB0aXRsZUVuPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB0aXRsZVZpPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBib2R5RW4/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGJvZHlWaT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdHlwZT86IEVOb3RpZmljYXRpb25UeXBlIHwgdW5kZWZpbmVkO1xuICBkYXRhX2pzb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnVsbGFibGVOb3RpZmljYXRpb24ge1xuICBudWxsPzogTnVsbFZhbHVlIHwgdW5kZWZpbmVkO1xuICBub3RpZmljYXRpb24/OiBOb3RpZmljYXRpb24gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBOT1RJRklDQVRJT05fUEFDS0FHRV9OQU1FID0gXCJub3RpZmljYXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25TZXJ2aWNlQ2xpZW50IHtcbiAgY3JlYXRlKHJlcXVlc3Q6IENyZWF0ZU5vdGlmaWNhdGlvbklucHV0KTogT2JzZXJ2YWJsZTxOb3RpZmljYXRpb24+O1xuXG4gIGNyZWF0ZUJvb2tpbmdOb3RpZmljYXRpb24ocmVxdWVzdDogQ3JlYXRlTm90aWZpY2F0aW9uSW5wdXQpOiBPYnNlcnZhYmxlPE5vdGlmaWNhdGlvbj47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uU2VydmljZUNvbnRyb2xsZXIge1xuICBjcmVhdGUocmVxdWVzdDogQ3JlYXRlTm90aWZpY2F0aW9uSW5wdXQpOiBQcm9taXNlPE5vdGlmaWNhdGlvbj4gfCBPYnNlcnZhYmxlPE5vdGlmaWNhdGlvbj4gfCBOb3RpZmljYXRpb247XG5cbiAgY3JlYXRlQm9va2luZ05vdGlmaWNhdGlvbihcbiAgICByZXF1ZXN0OiBDcmVhdGVOb3RpZmljYXRpb25JbnB1dCxcbiAgKTogUHJvbWlzZTxOb3RpZmljYXRpb24+IHwgT2JzZXJ2YWJsZTxOb3RpZmljYXRpb24+IHwgTm90aWZpY2F0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTm90aWZpY2F0aW9uU2VydmljZUNvbnRyb2xsZXJNZXRob2RzKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnN0cnVjdG9yOiBGdW5jdGlvbikge1xuICAgIGNvbnN0IGdycGNNZXRob2RzOiBzdHJpbmdbXSA9IFtcImNyZWF0ZVwiLCBcImNyZWF0ZUJvb2tpbmdOb3RpZmljYXRpb25cIl07XG4gICAgZm9yIChjb25zdCBtZXRob2Qgb2YgZ3JwY01ldGhvZHMpIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0b3I6IGFueSA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgbWV0aG9kKTtcbiAgICAgIEdycGNNZXRob2QoXCJOb3RpZmljYXRpb25TZXJ2aWNlXCIsIG1ldGhvZCkoY29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZF0sIG1ldGhvZCwgZGVzY3JpcHRvcik7XG4gICAgfVxuICAgIGNvbnN0IGdycGNTdHJlYW1NZXRob2RzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIGdycGNTdHJlYW1NZXRob2RzKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yOiBhbnkgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG1ldGhvZCk7XG4gICAgICBHcnBjU3RyZWFtTWV0aG9kKFwiTm90aWZpY2F0aW9uU2VydmljZVwiLCBtZXRob2QpKGNvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2RdLCBtZXRob2QsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IE5PVElGSUNBVElPTl9TRVJWSUNFX05BTUUgPSBcIk5vdGlmaWNhdGlvblNlcnZpY2VcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBQYWdlSW5mbyB9IGZyb20gXCIuL2NvbW1vbnNcIjtcbmltcG9ydCB7IE51bGxWYWx1ZSB9IGZyb20gXCIuL2dvb2dsZS9wcm90b2J1Zi9zdHJ1Y3RcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwic2VydmljZVwiO1xuXG5leHBvcnQgZW51bSBFU2VydmljZVNob3dUeXBlIHtcbiAgQk9USCA9IDAsXG4gIENBU0hJRVIgPSAxLFxuICBCT09LSU5HID0gMixcbiAgTk9ORSA9IDMsXG59XG5cbmV4cG9ydCBlbnVtIEVTZXJ2aWNlVHlwZSB7XG4gIFNFUlZJQ0UgPSAwLFxuICBQUk9EVUNUID0gMSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVTZXJ2aWNlRGF0YSB7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNrdT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29kZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGltYWdlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZVNlcnZpY2VJbnB1dCB7XG4gIGlkOiBudW1iZXI7XG4gIGRhdGE6IFVwZGF0ZVNlcnZpY2VEYXRhIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVNlcnZpY2VJbnB1dCB7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGdyb3VwSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHByaWNlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBpbml0aWFsUHJpY2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNhcGl0YWxQcmljZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZHVyYXRpb25Ib3VyPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkdXJhdGlvbk1pbnV0ZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc2t1Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjb2RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaW1hZ2U/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHR5cGU/OiBFU2VydmljZVR5cGUgfCB1bmRlZmluZWQ7XG4gIHNob3dUeXBlPzogRVNlcnZpY2VTaG93VHlwZSB8IHVuZGVmaW5lZDtcbiAgY2FuUHJpbnRhYmxlSW52b2ljZT86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VydmljZSB7XG4gIC8qKiBkZWZhdWx0IGZpZWxkICovXG4gIGlkOiBudW1iZXI7XG4gIGNyZWF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNyZWF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQnk/OlxuICAgIHwgc3RyaW5nXG4gICAgfCB1bmRlZmluZWQ7XG4gIC8qKiByZXNlcnZlZCBmaWVsZCAqL1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBncm91cElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBwcmljZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgaW5pdGlhbFByaWNlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjYXBpdGFsUHJpY2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGR1cmF0aW9uSG91cj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZHVyYXRpb25NaW51dGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNrdT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29kZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGltYWdlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB0eXBlPzogRVNlcnZpY2VUeXBlIHwgdW5kZWZpbmVkO1xuICBzaG93VHlwZT86IEVTZXJ2aWNlU2hvd1R5cGUgfCB1bmRlZmluZWQ7XG4gIGNhblByaW50YWJsZUludm9pY2U/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2VFZGdlIHtcbiAgbm9kZTogU2VydmljZSB8IHVuZGVmaW5lZDtcbiAgY3Vyc29yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZFNlcnZpY2VzUGF5bG9hZCB7XG4gIGVkZ2VzOiBTZXJ2aWNlRWRnZVtdO1xuICBwYWdlSW5mbzogUGFnZUluZm8gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnVsbGFibGVTZXJ2aWNlIHtcbiAgbnVsbD86IE51bGxWYWx1ZSB8IHVuZGVmaW5lZDtcbiAgc2VydmljZT86IFNlcnZpY2UgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uIHtcbiAgaXRlbXM6IFNlcnZpY2VbXTtcbiAgdG90YWxQYWdlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB0b3RhbD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcGFnZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbGltaXQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBTRVJWSUNFX1BBQ0tBR0VfTkFNRSA9IFwic2VydmljZVwiO1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IEdycGNNZXRob2QsIEdycGNTdHJlYW1NZXRob2QgfSBmcm9tIFwiQG5lc3Rqcy9taWNyb3NlcnZpY2VzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IENvdW50LCBFQ3VzdG9tZXJMZXZlbCwgRVVzZXJHZW5kZXIsIEVVc2VyUm9sZSwgRVVzZXJTdGF0dXMsIElkLCBQYWdlTWV0YSwgUXVlcnlSZXF1ZXN0IH0gZnJvbSBcIi4vY29tbW9uc1wiO1xuaW1wb3J0IHsgQ3JlYXRlRGV2aWNlSW5wdXQsIERldmljZSwgRGV2aWNlcyB9IGZyb20gXCIuL2RldmljZVwiO1xuaW1wb3J0IHsgTnVsbFZhbHVlIH0gZnJvbSBcIi4vZ29vZ2xlL3Byb3RvYnVmL3N0cnVjdFwiO1xuaW1wb3J0IHsgQ3JlYXRlTWVyY2hhbnRVc2VySW5wdXQsIE1lcmNoYW50VXNlciB9IGZyb20gXCIuL21lcmNoYW50X3VzZXJcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwiZHVjcGhfdXNlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIge1xuICAvKiogZGVmYXVsdCBmaWVsZCAqL1xuICBpZDogbnVtYmVyO1xuICBjcmVhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjcmVhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEJ5PzpcbiAgICB8IHN0cmluZ1xuICAgIHwgdW5kZWZpbmVkO1xuICAvKiogcmVzZXJ2ZWQgZmllbGQgKi9cbiAgZW1haWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHBhc3N3b3JkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBzdGF0dXM/OiBFVXNlclN0YXR1cyB8IHVuZGVmaW5lZDtcbiAgZnVsbE5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvbnRhY3Q/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHBob25lTnVtYmVyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkb2JEYXk/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRvYk1vbnRoPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkb2JZZWFyPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICByb2xlPzogRVVzZXJSb2xlIHwgdW5kZWZpbmVkO1xuICBnZW5kZXI/OiBFVXNlckdlbmRlciB8IHVuZGVmaW5lZDtcbiAgb2NjdXBhdGlvbj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYXZhdGFyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhZGRyZXNzPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjaXR5Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3YXJkQ29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcmVmZXJyZXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlZmVycmVyQ29kZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbGV2ZWw/OiBFQ3VzdG9tZXJMZXZlbCB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJDb2RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBmYWNlYm9vaz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgemFsb1Bob25lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBoZWlnaHQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHdlaWdodD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbWVtYmVyQ2FyZE5vPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjb21wYW55Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB0YXhObz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbm90ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVsYXRlZFVzZXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbGF0ZWRVc2VyUm9sZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVsYXRlZFVzZXJQaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxhdGl0dWRlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBsb25naXR1ZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGlzUmV0YWlsQ3VzdG9tZXI/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVVzZXJJbnB1dCB7XG4gIGVtYWlsPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwYXNzd29yZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgc3RhdHVzPzogRVVzZXJTdGF0dXMgfCB1bmRlZmluZWQ7XG4gIGZ1bGxOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjb250YWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZU51bWJlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZG9iRGF5PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkb2JNb250aD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZG9iWWVhcj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcm9sZT86IEVVc2VyUm9sZSB8IHVuZGVmaW5lZDtcbiAgZ2VuZGVyPzogRVVzZXJHZW5kZXIgfCB1bmRlZmluZWQ7XG4gIG9jY3VwYXRpb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGF2YXRhcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHJlZmVycmVyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWZlcnJlckNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGxldmVsPzogRUN1c3RvbWVyTGV2ZWwgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyQ29kZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZmFjZWJvb2s/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHphbG9QaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaGVpZ2h0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3ZWlnaHQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG1lbWJlckNhcmRObz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29tcGFueT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdGF4Tm8/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG5vdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbGF0ZWRVc2VyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWxhdGVkVXNlclJvbGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbGF0ZWRVc2VyUGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBsYXRpdHVkZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbG9uZ2l0dWRlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBpc1JldGFpbEN1c3RvbWVyPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVVc2VyUmVxdWVzdCB7XG4gIHVzZXI6IENyZWF0ZVVzZXJJbnB1dCB8IHVuZGVmaW5lZDtcbiAgZGV2aWNlPzogQ3JlYXRlRGV2aWNlSW5wdXQgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZE9uZVVzZXIge1xuICB1c2VyOiBVc2VyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZVVzZXJJbnB1dCB7XG4gIGlkOiBudW1iZXI7XG4gIGRhdGE6IFVwZGF0ZVVzZXJEYXRhIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE51bGxhYmxlVXNlciB7XG4gIG51bGw/OiBOdWxsVmFsdWUgfCB1bmRlZmluZWQ7XG4gIHVzZXI/OiBVc2VyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZVVzZXJEYXRhIHtcbiAgZW1haWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHBhc3N3b3JkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBzdGF0dXM/OiBFVXNlclN0YXR1cyB8IHVuZGVmaW5lZDtcbiAgZnVsbE5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvbnRhY3Q/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHBob25lTnVtYmVyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkb2JEYXk/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRvYk1vbnRoPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkb2JZZWFyPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICByb2xlPzogRVVzZXJSb2xlIHwgdW5kZWZpbmVkO1xuICBnZW5kZXI/OiBFVXNlckdlbmRlciB8IHVuZGVmaW5lZDtcbiAgb2NjdXBhdGlvbj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYXZhdGFyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhZGRyZXNzPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjaXR5Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3YXJkQ29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcmVmZXJyZXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlZmVycmVyQ29kZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbGV2ZWw/OiBFQ3VzdG9tZXJMZXZlbCB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJDb2RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBmYWNlYm9vaz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgemFsb1Bob25lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBoZWlnaHQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHdlaWdodD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbWVtYmVyQ2FyZE5vPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjb21wYW55Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB0YXhObz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbm90ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVsYXRlZFVzZXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbGF0ZWRVc2VyUm9sZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVsYXRlZFVzZXJQaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkT3BlcmF0b3JJbnB1dCB7XG4gIHVzZXI6IENyZWF0ZVVzZXJJbnB1dCB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRVc2VyPzogQ3JlYXRlTWVyY2hhbnRVc2VySW5wdXQgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRtaW5VcGRhdGVDdXN0b21lcklucHV0IHtcbiAgaWQ6IG51bWJlcjtcbiAgdXNlcjogVXBkYXRlVXNlckRhdGEgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50VXNlcj86IENyZWF0ZU1lcmNoYW50VXNlcklucHV0IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJQYWdpbmF0aW9uIHtcbiAgaXRlbXM6IFVzZXJbXTtcbiAgbWV0YT86IFBhZ2VNZXRhIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgRFVDUEhfVVNFUl9QQUNLQUdFX05BTUUgPSBcImR1Y3BoX3VzZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyU2VydmljZUNsaWVudCB7XG4gIGZpbmQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxVc2VyUGFnaW5hdGlvbj47XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IENyZWF0ZVVzZXJSZXF1ZXN0KTogT2JzZXJ2YWJsZTxGaW5kT25lVXNlcj47XG5cbiAgZmluZEJ5SWQocmVxdWVzdDogSWQpOiBPYnNlcnZhYmxlPE51bGxhYmxlVXNlcj47XG5cbiAgZmluZE9uZShyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPE51bGxhYmxlVXNlcj47XG5cbiAgY291bnQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxDb3VudD47XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFVwZGF0ZVVzZXJJbnB1dCk6IE9ic2VydmFibGU8RmluZE9uZVVzZXI+O1xuXG4gIGRlbGV0ZUN1c3RvbWVyKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxDb3VudD47XG5cbiAgLyoqIGRldmljZSAqL1xuXG4gIGNyZWF0ZURldmljZShyZXF1ZXN0OiBDcmVhdGVEZXZpY2VJbnB1dCk6IE9ic2VydmFibGU8RGV2aWNlPjtcblxuICBmaW5kRGV2aWNlcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPERldmljZXM+O1xuXG4gIHVwc2VydERldmljZShyZXF1ZXN0OiBDcmVhdGVEZXZpY2VJbnB1dCk6IE9ic2VydmFibGU8RGV2aWNlPjtcblxuICAvKiogbWVyY2hhbnRfdXNlciAqL1xuXG4gIGNyZWF0ZU1lcmNoYW50VXNlcihyZXF1ZXN0OiBDcmVhdGVNZXJjaGFudFVzZXJJbnB1dCk6IE9ic2VydmFibGU8TWVyY2hhbnRVc2VyPjtcblxuICBhZGRPcGVyYXRvcihyZXF1ZXN0OiBBZGRPcGVyYXRvcklucHV0KTogT2JzZXJ2YWJsZTxGaW5kT25lVXNlcj47XG5cbiAgY291bnRDdXN0b21lcihyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPENvdW50PjtcblxuICAvKiogY3VzdG9tZXIgKi9cblxuICBhZGRDdXN0b21lcihyZXF1ZXN0OiBBZGRPcGVyYXRvcklucHV0KTogT2JzZXJ2YWJsZTxGaW5kT25lVXNlcj47XG5cbiAgdXBkYXRlQ3VzdG9tZXIocmVxdWVzdDogQWRtaW5VcGRhdGVDdXN0b21lcklucHV0KTogT2JzZXJ2YWJsZTxGaW5kT25lVXNlcj47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclNlcnZpY2VDb250cm9sbGVyIHtcbiAgZmluZChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPFVzZXJQYWdpbmF0aW9uPiB8IE9ic2VydmFibGU8VXNlclBhZ2luYXRpb24+IHwgVXNlclBhZ2luYXRpb247XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IENyZWF0ZVVzZXJSZXF1ZXN0KTogUHJvbWlzZTxGaW5kT25lVXNlcj4gfCBPYnNlcnZhYmxlPEZpbmRPbmVVc2VyPiB8IEZpbmRPbmVVc2VyO1xuXG4gIGZpbmRCeUlkKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxOdWxsYWJsZVVzZXI+IHwgT2JzZXJ2YWJsZTxOdWxsYWJsZVVzZXI+IHwgTnVsbGFibGVVc2VyO1xuXG4gIGZpbmRPbmUocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxOdWxsYWJsZVVzZXI+IHwgT2JzZXJ2YWJsZTxOdWxsYWJsZVVzZXI+IHwgTnVsbGFibGVVc2VyO1xuXG4gIGNvdW50KHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8Q291bnQ+IHwgT2JzZXJ2YWJsZTxDb3VudD4gfCBDb3VudDtcblxuICB1cGRhdGUocmVxdWVzdDogVXBkYXRlVXNlcklucHV0KTogUHJvbWlzZTxGaW5kT25lVXNlcj4gfCBPYnNlcnZhYmxlPEZpbmRPbmVVc2VyPiB8IEZpbmRPbmVVc2VyO1xuXG4gIGRlbGV0ZUN1c3RvbWVyKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xuXG4gIC8qKiBkZXZpY2UgKi9cblxuICBjcmVhdGVEZXZpY2UocmVxdWVzdDogQ3JlYXRlRGV2aWNlSW5wdXQpOiBQcm9taXNlPERldmljZT4gfCBPYnNlcnZhYmxlPERldmljZT4gfCBEZXZpY2U7XG5cbiAgZmluZERldmljZXMocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxEZXZpY2VzPiB8IE9ic2VydmFibGU8RGV2aWNlcz4gfCBEZXZpY2VzO1xuXG4gIHVwc2VydERldmljZShyZXF1ZXN0OiBDcmVhdGVEZXZpY2VJbnB1dCk6IFByb21pc2U8RGV2aWNlPiB8IE9ic2VydmFibGU8RGV2aWNlPiB8IERldmljZTtcblxuICAvKiogbWVyY2hhbnRfdXNlciAqL1xuXG4gIGNyZWF0ZU1lcmNoYW50VXNlcihyZXF1ZXN0OiBDcmVhdGVNZXJjaGFudFVzZXJJbnB1dCk6IFByb21pc2U8TWVyY2hhbnRVc2VyPiB8IE9ic2VydmFibGU8TWVyY2hhbnRVc2VyPiB8IE1lcmNoYW50VXNlcjtcblxuICBhZGRPcGVyYXRvcihyZXF1ZXN0OiBBZGRPcGVyYXRvcklucHV0KTogUHJvbWlzZTxGaW5kT25lVXNlcj4gfCBPYnNlcnZhYmxlPEZpbmRPbmVVc2VyPiB8IEZpbmRPbmVVc2VyO1xuXG4gIGNvdW50Q3VzdG9tZXIocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xuXG4gIC8qKiBjdXN0b21lciAqL1xuXG4gIGFkZEN1c3RvbWVyKHJlcXVlc3Q6IEFkZE9wZXJhdG9ySW5wdXQpOiBQcm9taXNlPEZpbmRPbmVVc2VyPiB8IE9ic2VydmFibGU8RmluZE9uZVVzZXI+IHwgRmluZE9uZVVzZXI7XG5cbiAgdXBkYXRlQ3VzdG9tZXIocmVxdWVzdDogQWRtaW5VcGRhdGVDdXN0b21lcklucHV0KTogUHJvbWlzZTxGaW5kT25lVXNlcj4gfCBPYnNlcnZhYmxlPEZpbmRPbmVVc2VyPiB8IEZpbmRPbmVVc2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVXNlclNlcnZpY2VDb250cm9sbGVyTWV0aG9kcygpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb25zdHJ1Y3RvcjogRnVuY3Rpb24pIHtcbiAgICBjb25zdCBncnBjTWV0aG9kczogc3RyaW5nW10gPSBbXG4gICAgICBcImZpbmRcIixcbiAgICAgIFwiY3JlYXRlXCIsXG4gICAgICBcImZpbmRCeUlkXCIsXG4gICAgICBcImZpbmRPbmVcIixcbiAgICAgIFwiY291bnRcIixcbiAgICAgIFwidXBkYXRlXCIsXG4gICAgICBcImRlbGV0ZUN1c3RvbWVyXCIsXG4gICAgICBcImNyZWF0ZURldmljZVwiLFxuICAgICAgXCJmaW5kRGV2aWNlc1wiLFxuICAgICAgXCJ1cHNlcnREZXZpY2VcIixcbiAgICAgIFwiY3JlYXRlTWVyY2hhbnRVc2VyXCIsXG4gICAgICBcImFkZE9wZXJhdG9yXCIsXG4gICAgICBcImNvdW50Q3VzdG9tZXJcIixcbiAgICAgIFwiYWRkQ3VzdG9tZXJcIixcbiAgICAgIFwidXBkYXRlQ3VzdG9tZXJcIixcbiAgICBdO1xuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIGdycGNNZXRob2RzKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yOiBhbnkgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG1ldGhvZCk7XG4gICAgICBHcnBjTWV0aG9kKFwiVXNlclNlcnZpY2VcIiwgbWV0aG9kKShjb25zdHJ1Y3Rvci5wcm90b3R5cGVbbWV0aG9kXSwgbWV0aG9kLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gICAgY29uc3QgZ3JwY1N0cmVhbU1ldGhvZHM6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBtZXRob2Qgb2YgZ3JwY1N0cmVhbU1ldGhvZHMpIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0b3I6IGFueSA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgbWV0aG9kKTtcbiAgICAgIEdycGNTdHJlYW1NZXRob2QoXCJVc2VyU2VydmljZVwiLCBtZXRob2QpKGNvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2RdLCBtZXRob2QsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFVTRVJfU0VSVklDRV9OQU1FID0gXCJVc2VyU2VydmljZVwiO1xuIiwiaW1wb3J0IHtcbiAgQm9va2luZ0NvbmZpZyxcbiAgQm9va2luZ1Byb3RvLFxuICBNZXJjaGFudENvbmZpZyxcbiAgTWVyY2hhbnRQcm90byxcbiAgTm90aWZpY2F0aW9uQ29uZmlnLFxuICBOb3RpZmljYXRpb25Qcm90byxcbiAgVXNlckNvbmZpZyxcbiAgVXNlclByb3RvLFxufSBmcm9tICdAbGlicy9ncnBjLXR5cGVzJztcbmltcG9ydCB7IFRyYW5zcG9ydCB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5cbmV4cG9ydCBjb25zdCBVc2VyU2VydmVyOiBhbnkgPSB7XG4gIG5hbWU6IFVzZXJQcm90by5EVUNQSF9VU0VSX1BBQ0tBR0VfTkFNRSxcbiAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuR1JQQyxcbiAgb3B0aW9uczoge1xuICAgIHBhY2thZ2U6IFVzZXJQcm90by5EVUNQSF9VU0VSX1BBQ0tBR0VfTkFNRSxcbiAgICBwcm90b1BhdGg6IFVzZXJDb25maWcucGF0aCxcbiAgICB1cmw6IGAke1VzZXJDb25maWcubG9jYWxIb3N0bmFtZX06JHtVc2VyQ29uZmlnLnBvcnR9YCxcbiAgICBsb2FkZXI6IFVzZXJDb25maWcubG9hZGVyLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IE1lcmNoYW50U2VydmVyOiBhbnkgPSB7XG4gIG5hbWU6IE1lcmNoYW50UHJvdG8uTUVSQ0hBTlRfUEFDS0FHRV9OQU1FLFxuICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5HUlBDLFxuICBvcHRpb25zOiB7XG4gICAgcGFja2FnZTogTWVyY2hhbnRQcm90by5NRVJDSEFOVF9QQUNLQUdFX05BTUUsXG4gICAgcHJvdG9QYXRoOiBNZXJjaGFudENvbmZpZy5wYXRoLFxuICAgIHVybDogYCR7TWVyY2hhbnRDb25maWcubG9jYWxIb3N0bmFtZX06JHtNZXJjaGFudENvbmZpZy5wb3J0fWAsXG4gICAgbG9hZGVyOiBNZXJjaGFudENvbmZpZy5sb2FkZXIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgQm9va2luZ1NlcnZlcjogYW55ID0ge1xuICBuYW1lOiBCb29raW5nUHJvdG8uQk9PS0lOR19QQUNLQUdFX05BTUUsXG4gIHRyYW5zcG9ydDogVHJhbnNwb3J0LkdSUEMsXG4gIG9wdGlvbnM6IHtcbiAgICBwYWNrYWdlOiBCb29raW5nUHJvdG8uQk9PS0lOR19QQUNLQUdFX05BTUUsXG4gICAgcHJvdG9QYXRoOiBCb29raW5nQ29uZmlnLnBhdGgsXG4gICAgdXJsOiBgJHtCb29raW5nQ29uZmlnLmxvY2FsSG9zdG5hbWV9OiR7Qm9va2luZ0NvbmZpZy5wb3J0fWAsXG4gICAgbG9hZGVyOiBCb29raW5nQ29uZmlnLmxvYWRlcixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25TZXJ2ZXI6IGFueSA9IHtcbiAgbmFtZTogTm90aWZpY2F0aW9uUHJvdG8uTk9USUZJQ0FUSU9OX1BBQ0tBR0VfTkFNRSxcbiAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuR1JQQyxcbiAgb3B0aW9uczoge1xuICAgIHBhY2thZ2U6IE5vdGlmaWNhdGlvblByb3RvLk5PVElGSUNBVElPTl9QQUNLQUdFX05BTUUsXG4gICAgcHJvdG9QYXRoOiBOb3RpZmljYXRpb25Db25maWcucGF0aCxcbiAgICB1cmw6IGAke05vdGlmaWNhdGlvbkNvbmZpZy5sb2NhbEhvc3RuYW1lfToke05vdGlmaWNhdGlvbkNvbmZpZy5wb3J0fWAsXG4gICAgbG9hZGVyOiBOb3RpZmljYXRpb25Db25maWcubG9hZGVyLFxuICB9LFxufTtcbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhbGxIYW5kbGVyLCBFeGVjdXRpb25Db250ZXh0LCBJbmplY3RhYmxlLCBMb2dnZXIsIE5lc3RJbnRlcmNlcHRvciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdycGNMb2dJbnRlcmNlcHRvciBpbXBsZW1lbnRzIE5lc3RJbnRlcmNlcHRvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbG9nZ2VyID0gbmV3IExvZ2dlcihHcnBjTG9nSW50ZXJjZXB0b3IubmFtZSk7XG5cbiAgaW50ZXJjZXB0KGNvbnRleHQ6IEV4ZWN1dGlvbkNvbnRleHQsIG5leHQ6IENhbGxIYW5kbGVyKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgY29uc3QgcmVxQm9keSA9IGNvbnRleHQuc3dpdGNoVG9ScGMoKS5nZXREYXRhKCk7XG4gICAgY29uc3QgbWV0aG9kID0gY29udGV4dC5nZXRIYW5kbGVyKCkubmFtZTtcbiAgICBjb25zdCBjb250ZXh0VHlwZSA9IGNvbnRleHQuZ2V0VHlwZSgpO1xuICAgIGNvbnN0IGNvbnRyb2xsZXJOYW1lID0gY29udGV4dC5nZXRDbGFzcygpLm5hbWU7XG4gICAgdGhpcy5sb2dnZXIubG9nKGBHUlBDLVJFUVVFU1Q6IFske2NvbnRleHRUeXBlfV06WyR7Y29udHJvbGxlck5hbWV9XTpbJHttZXRob2R9XTotPiAke0pTT04uc3RyaW5naWZ5KHJlcUJvZHkpfWApO1xuICAgIHJldHVybiBuZXh0LmhhbmRsZSgpLnBpcGUoXG4gICAgICB0YXAoKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKGBHUlBDLVJFU1BPTlNFOiBbJHtjb250ZXh0VHlwZX1dOlske2NvbnRyb2xsZXJOYW1lfV06WyR7bWV0aG9kfV19YCk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3RyYW5zZm9ybS5pbnRlcmNlcHRvcic7XG5leHBvcnQgKiBmcm9tICcuL2dycGMtbG9nLmludGVyY2VwdG9yJztcbiIsImltcG9ydCB7IENhbGxIYW5kbGVyLCBFeGVjdXRpb25Db250ZXh0LCBJbmplY3RhYmxlLCBMb2dnZXIsIE5lc3RJbnRlcmNlcHRvciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG9taXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFJbnRlcmZhY2Uge1xuICBwYXJhbXM6IGFueTtcbiAgc3RhdHVzOiBib29sZWFuO1xuICBlcnJvckNvZGU/OiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogRGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZTxUPiB7XG4gIG1ldGE/OiBzdHJpbmc7XG4gIHN0YXR1c0NvZGU/OiBudW1iZXI7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIHJlc3VsdDogVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZUhhbmRsZURhdGEge1xuICBjb2RlPzogbnVtYmVyO1xuICBtZXRhPzogc3RyaW5nO1xuICBzdGF0dXNDb2RlPzogbnVtYmVyO1xuICBtZXNzYWdlPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNmb3JtSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBOZXN0SW50ZXJjZXB0b3Ige1xuICBwcml2YXRlIGxvZ2dlciA9IG5ldyBMb2dnZXIoVHJhbnNmb3JtSW50ZXJjZXB0b3IubmFtZSk7XG5cbiAgaW50ZXJjZXB0KGNvbnRleHQ6IEV4ZWN1dGlvbkNvbnRleHQsIG5leHQ6IENhbGxIYW5kbGVyKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGNvbnRleHQuc3dpdGNoVG9IdHRwKCkuZ2V0UmVxdWVzdCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gY29udGV4dC5zd2l0Y2hUb0h0dHAoKS5nZXRSZXNwb25zZTxSZXNwb25zZUhhbmRsZURhdGE+KCk7XG4gICAgY29uc3QgeyBtZXRob2QsIHVybCwgYm9keSwgcGFyYW1zLCBzdGF0dXMsIHF1ZXJ5IH0gPSByZXF1ZXN0O1xuICAgIHRoaXMubG9nZ2VyLmxvZyhgUkVRIFske21ldGhvZH0gJHt1cmx9XTotPiAke0pTT04uc3RyaW5naWZ5KGJvZHkpfWApO1xuICAgIHJldHVybiBuZXh0LmhhbmRsZSgpLnBpcGUoXG4gICAgICBtYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSB7XG4gICAgICAgICAgbWV0YTogSlNPTi5zdHJpbmdpZnkoeyBwYXJhbXM6IHBhcmFtcywgc3RhdHVzOiBzdGF0dXMsIHF1ZXJ5LCB0aW1lc3RhbXA6IG5ldyBEYXRlKCkgfSksXG4gICAgICAgICAgbWVzc2FnZTogZGF0YT8ubWVzc2FnZSA/PyByZXNwb25zZS5tZXNzYWdlID8/IHJlcXVlc3Q/Lm1lc3NhZ2UgPz8gJ09rJyxcbiAgICAgICAgICBjb2RlOiBkYXRhPy5zdGF0dXNDb2RlID8/IHN0YXR1cyA/PyByZXNwb25zZS5jb2RlID8/IHJlc3BvbnNlLnN0YXR1c0NvZGUsXG4gICAgICAgICAgc3RhdHVzQ29kZTogZGF0YT8uc3RhdHVzQ29kZSA/PyBzdGF0dXMgPz8gcmVzcG9uc2Uuc3RhdHVzQ29kZSxcbiAgICAgICAgICByZXN1bHQ6IG9taXQoZGF0YSwgWydtZXNzYWdlJ10pLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVBvc3RncmVzRW52IH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlIHtcbiAgZW52OiBzdHJpbmc7XG5cbiAgdXNlclNlcnZpY2VEYXRhYmFzZTogSVBvc3RncmVzRW52O1xuXG4gIG1lcmNoYW50U2VydmljZURhdGFiYXNlOiBJUG9zdGdyZXNFbnY7XG5cbiAgYm9va2luZ1NlcnZpY2VEYXRhYmFzZTogSVBvc3RncmVzRW52O1xuXG4gIG5vdGlmaWNhdGlvblNlcnZpY2VEYXRhYmFzZTogSVBvc3RncmVzRW52O1xufVxuIiwiaW1wb3J0IHsgR2xvYmFsLCBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbmltcG9ydCB7IEFic3RyYWN0U2VjcmV0c1NlcnZpY2UgfSBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHsgU2VjcmV0c1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UnO1xuXG5AR2xvYmFsKClcbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgZW52RmlsZVBhdGg6IFsnLmVudiddLFxuICAgIH0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlLFxuICAgICAgdXNlQ2xhc3M6IFNlY3JldHNTZXJ2aWNlLFxuICAgIH0sXG4gIF0sXG4gIGV4cG9ydHM6IFtBYnN0cmFjdFNlY3JldHNTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VjcmV0c01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbmltcG9ydCB7IEFic3RyYWN0U2VjcmV0c1NlcnZpY2UgfSBmcm9tICcuL2FkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VjcmV0c1NlcnZpY2UgZXh0ZW5kcyBDb25maWdTZXJ2aWNlIGltcGxlbWVudHMgQWJzdHJhY3RTZWNyZXRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBlbnYgPSB0aGlzLmdldCgnRU5WJyk7XG5cbiAgcG9ydCA9IHRoaXMuZ2V0PG51bWJlcj4oJ1BPUlQnKTtcblxuICB1c2VyU2VydmljZURhdGFiYXNlID0ge1xuICAgIGhvc3Q6IHRoaXMuZ2V0PHN0cmluZz4oJ1VTRVJfREJfSE9TVCcpLFxuICAgIHBvcnQ6IHRoaXMuZ2V0PG51bWJlcj4oJ1VTRVJfREJfUE9SVCcpLFxuICAgIHVzZXJuYW1lOiB0aGlzLmdldDxzdHJpbmc+KCdVU0VSX0RCX1VTRVJOQU1FJyksXG4gICAgcGFzc3dvcmQ6IHRoaXMuZ2V0PHN0cmluZz4oJ1VTRVJfREJfUEFTU1dPUkQnKSxcbiAgICBkYXRhYmFzZTogdGhpcy5nZXQ8c3RyaW5nPignVVNFUl9EQl9EQVRBQkFTRScpLFxuICB9O1xuXG4gIG1lcmNoYW50U2VydmljZURhdGFiYXNlID0ge1xuICAgIGhvc3Q6IHRoaXMuZ2V0PHN0cmluZz4oJ01FUkNIQU5UX0RCX0hPU1QnKSxcbiAgICBwb3J0OiB0aGlzLmdldDxudW1iZXI+KCdNRVJDSEFOVF9EQl9QT1JUJyksXG4gICAgdXNlcm5hbWU6IHRoaXMuZ2V0PHN0cmluZz4oJ01FUkNIQU5UX0RCX1VTRVJOQU1FJyksXG4gICAgcGFzc3dvcmQ6IHRoaXMuZ2V0PHN0cmluZz4oJ01FUkNIQU5UX0RCX1BBU1NXT1JEJyksXG4gICAgZGF0YWJhc2U6IHRoaXMuZ2V0PHN0cmluZz4oJ01FUkNIQU5UX0RCX0RBVEFCQVNFJyksXG4gIH07XG5cbiAgYm9va2luZ1NlcnZpY2VEYXRhYmFzZSA9IHtcbiAgICBob3N0OiB0aGlzLmdldDxzdHJpbmc+KCdCT09LSU5HX0RCX0hPU1QnKSxcbiAgICBwb3J0OiB0aGlzLmdldDxudW1iZXI+KCdCT09LSU5HX0RCX1BPUlQnKSxcbiAgICB1c2VybmFtZTogdGhpcy5nZXQ8c3RyaW5nPignQk9PS0lOR19EQl9VU0VSTkFNRScpLFxuICAgIHBhc3N3b3JkOiB0aGlzLmdldDxzdHJpbmc+KCdCT09LSU5HX0RCX1BBU1NXT1JEJyksXG4gICAgZGF0YWJhc2U6IHRoaXMuZ2V0PHN0cmluZz4oJ0JPT0tJTkdfREJfREFUQUJBU0UnKSxcbiAgfTtcblxuICBub3RpZmljYXRpb25TZXJ2aWNlRGF0YWJhc2UgPSB7XG4gICAgaG9zdDogdGhpcy5nZXQ8c3RyaW5nPignTk9USUZJQ0FUSU9OX0RCX0hPU1QnKSxcbiAgICBwb3J0OiB0aGlzLmdldDxudW1iZXI+KCdOT1RJRklDQVRJT05fREJfUE9SVCcpLFxuICAgIHVzZXJuYW1lOiB0aGlzLmdldDxzdHJpbmc+KCdOT1RJRklDQVRJT05fREJfVVNFUk5BTUUnKSxcbiAgICBwYXNzd29yZDogdGhpcy5nZXQ8c3RyaW5nPignTk9USUZJQ0FUSU9OX0RCX1BBU1NXT1JEJyksXG4gICAgZGF0YWJhc2U6IHRoaXMuZ2V0PHN0cmluZz4oJ05PVElGSUNBVElPTl9EQl9EQVRBQkFTRScpLFxuICB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGdycGMvZ3JwYy1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvbW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9tYXBwZWQtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9taWNyb3NlcnZpY2VzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvcGFzc3BvcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9zZXF1ZWxpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXJnb24yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzLXRyYW5zZm9ybWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzLXZhbGlkYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmVzdGpzLWkxOG5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtand0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9vcGVyYXRvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IElOZXN0TWljcm9zZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTmVzdEZhY3RvcnkgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuaW1wb3J0IHsgTWljcm9zZXJ2aWNlT3B0aW9ucyB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBNZXJjaGFudFNlcnZlciB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvc2VydmVycyc7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IGFwcDogSU5lc3RNaWNyb3NlcnZpY2UgPSBhd2FpdCBOZXN0RmFjdG9yeS5jcmVhdGVNaWNyb3NlcnZpY2U8TWljcm9zZXJ2aWNlT3B0aW9ucz4oQXBwTW9kdWxlLCBNZXJjaGFudFNlcnZlcik7XG5cbiAgcmV0dXJuIGFwcC5saXN0ZW4oKTtcbn1cblxubWFpbigpLnRoZW4oKCkgPT4ge1xuICBjb25zb2xlLmxvZygnbWVyY2hhbnQtc2VydmljZSBtaWNyb3NlcnZpY2UgaXMgcnVubmluZycpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=