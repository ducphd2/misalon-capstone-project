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

/***/ "./apps/user-service/src/app.module.ts":
/*!*********************************************!*\
  !*** ./apps/user-service/src/app.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const user_1 = __webpack_require__(/*! @libs/database/connection/user */ "./libs/database/src/connection/user.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const device_module_1 = __webpack_require__(/*! ./device/device.module */ "./apps/user-service/src/device/device.module.ts");
const user_module_1 = __webpack_require__(/*! ./user/user.module */ "./apps/user-service/src/user/user.module.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [user_1.UserDatabaseModule, user_module_1.UserModule, device_module_1.DeviceModule],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/user-service/src/device/device.module.ts":
/*!*******************************************************!*\
  !*** ./apps/user-service/src/device/device.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceModule = void 0;
const entities_1 = __webpack_require__(/*! @libs/database/entities */ "./libs/database/src/entities/index.ts");
const repositories_1 = __webpack_require__(/*! @libs/database/repositories */ "./libs/database/src/repositories/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const module_1 = __webpack_require__(/*! libs/modules/global/secrets/module */ "./libs/modules/global/secrets/module.ts");
const device_service_1 = __webpack_require__(/*! ./device.service */ "./apps/user-service/src/device/device.service.ts");
let DeviceModule = class DeviceModule {
};
DeviceModule = __decorate([
    (0, common_1.Module)({
        imports: [module_1.SecretsModule, sequelize_1.SequelizeModule.forFeature([entities_1.DeviceModel])],
        providers: [device_service_1.DeviceService, repositories_1.DeviceRepository],
        exports: [device_service_1.DeviceService],
    })
], DeviceModule);
exports.DeviceModule = DeviceModule;


/***/ }),

/***/ "./apps/user-service/src/device/device.service.ts":
/*!********************************************************!*\
  !*** ./apps/user-service/src/device/device.service.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceService = void 0;
const repositories_1 = __webpack_require__(/*! @libs/database/repositories */ "./libs/database/src/repositories/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
let DeviceService = class DeviceService {
    constructor(deviceRepository) {
        this.deviceRepository = deviceRepository;
    }
    async create(dto) {
        const device = await this.deviceRepository.create(dto);
        return device;
    }
    async findById(id) {
        const device = await this.deviceRepository.findById(id);
        return device;
    }
    async find(request) {
        const baseWhereQuery = !(0, lodash_1.isEmpty)(request.where) ? JSON.parse(request.where) : undefined;
        const result = await this.deviceRepository.findAndPaginate(Object.assign(Object.assign({}, request), { where: baseWhereQuery }));
        return result;
    }
    async upsertDevice(dto) {
        return;
    }
};
DeviceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof repositories_1.DeviceRepository !== "undefined" && repositories_1.DeviceRepository) === "function" ? _a : Object])
], DeviceService);
exports.DeviceService = DeviceService;


/***/ }),

/***/ "./apps/user-service/src/merchant-user/merchant-user.module.ts":
/*!*********************************************************************!*\
  !*** ./apps/user-service/src/merchant-user/merchant-user.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MerchantUserModule = void 0;
const entities_1 = __webpack_require__(/*! @libs/database/entities */ "./libs/database/src/entities/index.ts");
const repositories_1 = __webpack_require__(/*! @libs/database/repositories */ "./libs/database/src/repositories/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const module_1 = __webpack_require__(/*! libs/modules/global/secrets/module */ "./libs/modules/global/secrets/module.ts");
const merchant_user_service_1 = __webpack_require__(/*! ./merchant-user.service */ "./apps/user-service/src/merchant-user/merchant-user.service.ts");
let MerchantUserModule = class MerchantUserModule {
};
MerchantUserModule = __decorate([
    (0, common_1.Module)({
        imports: [module_1.SecretsModule, sequelize_1.SequelizeModule.forFeature([entities_1.MerchantUserModel])],
        providers: [merchant_user_service_1.MerchantUserService, repositories_1.MerchantUserRepository],
        exports: [merchant_user_service_1.MerchantUserService],
    })
], MerchantUserModule);
exports.MerchantUserModule = MerchantUserModule;


/***/ }),

/***/ "./apps/user-service/src/merchant-user/merchant-user.service.ts":
/*!**********************************************************************!*\
  !*** ./apps/user-service/src/merchant-user/merchant-user.service.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MerchantUserService = void 0;
const repositories_1 = __webpack_require__(/*! @libs/database/repositories */ "./libs/database/src/repositories/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let MerchantUserService = class MerchantUserService {
    constructor(merchantUserRepository) {
        this.merchantUserRepository = merchantUserRepository;
    }
    async create(dto) {
        const merchantUser = await this.merchantUserRepository.create(dto);
        return merchantUser;
    }
    async update(id, dto) {
        return;
    }
};
MerchantUserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof repositories_1.MerchantUserRepository !== "undefined" && repositories_1.MerchantUserRepository) === "function" ? _a : Object])
], MerchantUserService);
exports.MerchantUserService = MerchantUserService;


/***/ }),

/***/ "./apps/user-service/src/user/user.controller.ts":
/*!*******************************************************!*\
  !*** ./apps/user-service/src/user/user.controller.ts ***!
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const grpc_types_1 = __webpack_require__(/*! @libs/grpc-types */ "./libs/grpc-types/src/index.ts");
const interceptors_1 = __webpack_require__(/*! @libs/interceptors */ "./libs/interceptors/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const filters_1 = __webpack_require__(/*! filters/filters */ "./libs/filters/src/index.ts");
const device_service_1 = __webpack_require__(/*! ../device/device.service */ "./apps/user-service/src/device/device.service.ts");
const merchant_user_service_1 = __webpack_require__(/*! ../merchant-user/merchant-user.service */ "./apps/user-service/src/merchant-user/merchant-user.service.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./apps/user-service/src/user/user.service.ts");
let UserController = class UserController {
    constructor(userService, deviceService, merchantUserService) {
        this.userService = userService;
        this.deviceService = deviceService;
        this.merchantUserService = merchantUserService;
    }
    async updateCustomer(request) {
        const updatedUser = await this.userService.update({ id: request.id, data: request.user });
        return {
            user: updatedUser,
        };
    }
    async addCustomer(request) {
        const user = await this.userService.create(request);
        await this.merchantUserService.create(Object.assign(Object.assign({}, request.merchantUser), { userId: user.id }));
        return { user };
    }
    async countCustomer(request) {
        const count = await this.userService.countCustomer(request);
        return { count };
    }
    async addOperator(request) {
        const user = await this.userService.create(request);
        await this.merchantUserService.create(Object.assign(Object.assign({}, request.merchantUser), { userId: user.id }));
        return { user };
    }
    async createMerchantUser(request) {
        return await this.merchantUserService.create(request);
    }
    async upsertDevice(request) {
        return await this.deviceService.upsertDevice(request);
    }
    createDevice(request) {
        throw new Error('Method not implemented.');
    }
    async findDevices(request) {
        const devices = await this.deviceService.find(request);
        return devices;
    }
    async find(request) {
        const result = await this.userService.findWithPaging(request);
        return result;
    }
    async count(request) {
        const count = await this.userService.count(request);
        return { count };
    }
    async update(request) {
        const updatedUser = await this.userService.update(request);
        return { user: updatedUser };
    }
    deleteCustomer(request) {
        throw new Error('Method not implemented.');
    }
    async create(data) {
        const user = await this.userService.create(data);
        return { user };
    }
    async findById({ id }) {
        const user = await this.userService.findById(id);
        return { user };
    }
    async findOne(request) {
        const user = await this.userService.findOne(request);
        return { user };
    }
};
UserController = __decorate([
    (0, common_1.UseFilters)(filters_1.GrpcAllExceptionsFilter),
    (0, common_1.UseInterceptors)(interceptors_1.GrpcLogInterceptor),
    (0, common_1.Controller)(),
    grpc_types_1.UserProto.UserServiceControllerMethods(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, typeof (_b = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" ? _b : Object, typeof (_c = typeof merchant_user_service_1.MerchantUserService !== "undefined" && merchant_user_service_1.MerchantUserService) === "function" ? _c : Object])
], UserController);
exports.UserController = UserController;


/***/ }),

/***/ "./apps/user-service/src/user/user.module.ts":
/*!***************************************************!*\
  !*** ./apps/user-service/src/user/user.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const entities_1 = __webpack_require__(/*! @libs/database/entities */ "./libs/database/src/entities/index.ts");
const repositories_1 = __webpack_require__(/*! @libs/database/repositories */ "./libs/database/src/repositories/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const module_1 = __webpack_require__(/*! libs/modules/global/secrets/module */ "./libs/modules/global/secrets/module.ts");
const device_module_1 = __webpack_require__(/*! ../device/device.module */ "./apps/user-service/src/device/device.module.ts");
const merchant_user_module_1 = __webpack_require__(/*! ../merchant-user/merchant-user.module */ "./apps/user-service/src/merchant-user/merchant-user.module.ts");
const user_controller_1 = __webpack_require__(/*! ./user.controller */ "./apps/user-service/src/user/user.controller.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./apps/user-service/src/user/user.service.ts");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [module_1.SecretsModule, sequelize_1.SequelizeModule.forFeature([entities_1.UserModel]), device_module_1.DeviceModule, merchant_user_module_1.MerchantUserModule],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, repositories_1.UserRepository],
        exports: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "./apps/user-service/src/user/user.service.ts":
/*!****************************************************!*\
  !*** ./apps/user-service/src/user/user.service.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const repositories_1 = __webpack_require__(/*! @libs/database/repositories */ "./libs/database/src/repositories/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const device_service_1 = __webpack_require__(/*! ../device/device.service */ "./apps/user-service/src/device/device.service.ts");
let UserService = class UserService {
    constructor(userRepository, deviceService) {
        this.userRepository = userRepository;
        this.deviceService = deviceService;
    }
    async create(dto) {
        const user = await this.userRepository.create(dto.user);
        const device = await this.deviceService.create(Object.assign(Object.assign({}, dto.device), { userId: user.id }));
        return user;
    }
    async findById(id) {
        const result = await this.userRepository.findById(id, {
            raw: true,
        });
        return result;
    }
    async findOne(dto) {
        const where = !(0, lodash_1.isEmpty)(dto.where) ? JSON.parse(dto.where) : undefined;
        const result = await this.userRepository.findOne(Object.assign(Object.assign({}, dto), { where, raw: true }));
        return result;
    }
    async count(query) {
        return;
    }
    async update(request) {
        const updatedUser = await this.userRepository.update(request.data, {
            where: {
                id: request.id,
            },
        });
        return updatedUser[0];
    }
    async countCustomer(request) {
        return;
    }
    async findWithPaging(query) {
        const baseWhere = !(0, lodash_1.isEmpty)(query.where) ? JSON.parse(query.where) : undefined;
        const result = await this.userRepository.findAndPaginate(Object.assign(Object.assign({}, query), { where: baseWhere }), {
            order: [[query.orderBy, query.orderDirection]],
        });
        return result;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof repositories_1.UserRepository !== "undefined" && repositories_1.UserRepository) === "function" ? _a : Object, typeof (_b = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" ? _b : Object])
], UserService);
exports.UserService = UserService;


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
/*!***************************************!*\
  !*** ./apps/user-service/src/main.ts ***!
  \***************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const grpc_types_1 = __webpack_require__(/*! @libs/grpc-types */ "./libs/grpc-types/src/index.ts");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/user-service/src/app.module.ts");
async function main() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, grpc_types_1.UserServer);
    return app.listen();
}
main().then(() => {
    console.log('user-service microservice is running');
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2NvcmUvY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvY29yZS9jb21wb25lbnRzL21lc3NhZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9jb3JlL2RlY29yYXRvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2NvcmUvZGVjb3JhdG9ycy91c2VyL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9jb3JlL2RlY29yYXRvcnMvdXNlci9tYXRjaC5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2NvcmUvZGVjb3JhdG9ycy91c2VyL3VzZXIuZGVjb3JhdG9yLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9jb3JlL2ZpbHRlcnMvaHR0cC1leGNlcHRpb24uZmlsdGVyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9jb3JlL2ZpbHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2NvcmUvZ3VhcmRzL2F1dGguZ3VhcmQudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2NvcmUvZ3VhcmRzL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9jb3JlL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9jb3JlL3N0cmF0ZWdpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2NvcmUvc3RyYXRlZ2llcy9qd3QtcmVmcmVzaC5zdHJhdGVneS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvY29yZS9zdHJhdGVnaWVzL2p3dC5zdHJhdGVneS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9hdXRoL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL2F1dGgvbG9naW4uZHRvLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL2F1dGgvcmVnaXN0ZXIuZHRvLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL2Jhc2UvYmFzZS5kdG8udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvYmFzZS9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9ib29raW5nL2Jvb2tpbmcuZHRvLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL2Jvb2tpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvY29tbW9uL2NvbW1vbi5kdG8udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvY29tbW9uL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL2N1c3RvbWVyL2N1c3RvbWVyLmR0by50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9jdXN0b21lci9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9tZXJjaGFudC9icmFuY2gvY3JlYXRlLWJyYW5jaC5kdG8udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvbWVyY2hhbnQvYnJhbmNoL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL21lcmNoYW50L2NyZWF0ZS5kdG8udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvbWVyY2hhbnQvZ3JvdXAvY3JlYXRlLWdyb3VwLmR0by50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9tZXJjaGFudC9ncm91cC9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9tZXJjaGFudC9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9tZXJjaGFudC9zZXJ2aWNlL2NyZWF0ZS1zZXJ2aWNlLmR0by50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9tZXJjaGFudC9zZXJ2aWNlL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL3VzZXIvZGV2aWNlLmR0by50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy91c2VyL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL3VzZXIvdG9rZW4uZHRvLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL3VzZXIvdXNlci5kdG8udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvdXNlci1zZXJ2aWNlL3NyYy9hcHAubW9kdWxlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL3VzZXItc2VydmljZS9zcmMvZGV2aWNlL2RldmljZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvdXNlci1zZXJ2aWNlL3NyYy9kZXZpY2UvZGV2aWNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvdXNlci1zZXJ2aWNlL3NyYy9tZXJjaGFudC11c2VyL21lcmNoYW50LXVzZXIubW9kdWxlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL3VzZXItc2VydmljZS9zcmMvbWVyY2hhbnQtdXNlci9tZXJjaGFudC11c2VyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvdXNlci1zZXJ2aWNlL3NyYy91c2VyL3VzZXIuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy91c2VyLXNlcnZpY2Uvc3JjL3VzZXIvdXNlci5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvdXNlci1zZXJ2aWNlL3NyYy91c2VyL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9jb25zdGFudHMvZGF0YWJhc2UuY29uc3RhbnQudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvY29uc3RhbnRzL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL21lc3NhZ2UvYXV0aC9hdXRoLm1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvbWVzc2FnZS9hdXRoL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL21lc3NhZ2UvY29tbW9uLm1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvbWVzc2FnZS9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL21lcmNoYW50L2JyYW5jaC5tZXNzYWdlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL21lc3NhZ2UvbWVyY2hhbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvbWVzc2FnZS9tZXJjaGFudC9tZXJjaGFudC5tZXNzYWdlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL21lc3NhZ2UvdXNlci9jdXN0b21lci5tZXNzYWdlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL21lc3NhZ2UvdXNlci9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL3VzZXIvdXNlci5tZXNzYWdlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL3V0aWxzL2Vycm9yLmhlbHBlci50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy91dGlscy9nZW5lcmFsLnV0aWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvdXRpbHMvcGFzc3dvcmQudXRpbHMudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvdXRpbHMvcXVlcnkudXRpbHMudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvdXRpbHMvdXRpbHMubW9kdWxlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9jb25uZWN0aW9uL2Jvb2tpbmcudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2Nvbm5lY3Rpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2Nvbm5lY3Rpb24vbWVyY2hhbnQudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2Nvbm5lY3Rpb24vbm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9jb25uZWN0aW9uL3VzZXIudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL2Jhc2UubW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL2Jvb2tpbmcvYm9va2luZy5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvYm9va2luZy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL21lcmNoYW50L2JyYW5jaC5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvbWVyY2hhbnQvZ3JvdXAubW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL21lcmNoYW50L2ltYWdlLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9tZXJjaGFudC9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvbWVyY2hhbnQvbWVyY2hhbnQubW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL21lcmNoYW50L3NlcnZlLWltYWdlLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9tZXJjaGFudC9zZXJ2aWNlLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9ub3RpZmljYXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ubW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL3VzZXIvZGV2aWNlLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy91c2VyL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy91c2VyL21lcmNoYW50LXVzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL3VzZXIvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9iYXNlLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9ib29raW5nL2Jvb2tpbmcucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL2Jvb2tpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL21lcmNoYW50L2JyYW5jaC5yZXBvc2l0b3J5LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvbWVyY2hhbnQvZ3JvdXAucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL21lcmNoYW50L2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvbWVyY2hhbnQvbWVyY2hhbnQucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL21lcmNoYW50L3NlcnZpY2UucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL25vdGlmaWNhdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL3VzZXIvZGV2aWNlLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy91c2VyL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvdXNlci9tZXJjaGFudC11c2VyLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy91c2VyL3VzZXIucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9leGNlcHRpb25zL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9leGNlcHRpb25zL3NyYy9saWIvZXJyb3ItY29kZXMudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZXhjZXB0aW9ucy9zcmMvbGliL2V4Y2VwdGlvbnMvY3VzdG9tLmV4Y2VwdGlvbi50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9leGNlcHRpb25zL3NyYy9saWIvZXhjZXB0aW9ucy9nZW5lcmFsLXNlcnZlci1lcnJvci5leGNlcHRpb24udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZXhjZXB0aW9ucy9zcmMvbGliL2V4Y2VwdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZXhjZXB0aW9ucy9zcmMvbGliL2V4Y2VwdGlvbnMvaW52YWxpZC1jcmVkZW50aWFscy5leGNlcHRpb24udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZXhjZXB0aW9ucy9zcmMvbGliL2V4Y2VwdGlvbnMvdXNlcm5hbWUtYWxyZWFkeS10YWtlbi5leGNlcHRpb24udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZmlsdGVycy9zcmMvYWxsLmV4Y2VwdGlvbnMuZmlsdGVyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2ZpbHRlcnMvc3JjL2dycGMtYWxsLmV4Y2VwdGlvbnMuZmlsdGVyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2ZpbHRlcnMvc3JjL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL2NsaWVudHMudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL3Byb3Rvcy9ib29raW5nLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL3Byb3Rvcy9icmFuY2gudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zL2NvbW1vbnMudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zL2RldmljZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MvbWVyY2hhbnQudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zL21lcmNoYW50X3VzZXIudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zL25vdGlmaWNhdGlvbi50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3Mvc2VydmljZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MvdXNlci50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9zZXJ2ZXJzLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2ludGVyY2VwdG9ycy9zcmMvZ3JwYy1sb2cuaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvaW50ZXJjZXB0b3JzL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9pbnRlcmNlcHRvcnMvc3JjL3RyYW5zZm9ybS5pbnRlcmNlcHRvci50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL2FkYXB0ZXIudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9zZXJ2aWNlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAZ3JwYy9ncnBjLWpzXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29yZVwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL21hcHBlZC10eXBlc1wiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9wYXNzcG9ydFwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL3NlcXVlbGl6ZVwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJhcmdvbjJcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiY2xhc3MtdHJhbnNmb3JtZXJcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiY2xhc3MtdmFsaWRhdG9yXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcImxvZGFzaFwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJuZXN0anMtaTE4blwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXNzcG9ydC1qd3RcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwicnhqc1wiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJyeGpzL29wZXJhdG9yc1wiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJzZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwic2VxdWVsaXplLXR5cGVzY3JpcHRcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy91c2VyLXNlcnZpY2Uvc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlLmNvbXBvbmVudCc7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSTE4blNlcnZpY2UsIFRyYW5zbGF0ZU9wdGlvbnMgfSBmcm9tICduZXN0anMtaTE4bic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpMThuOiBJMThuU2VydmljZSkge31cblxuICBsYW5nKGtleTogc3RyaW5nLCBvcHRpb25zOiBUcmFuc2xhdGVPcHRpb25zID0ge30pOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmkxOG4udHJhbnNsYXRlKGtleSwgb3B0aW9ucyk7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG4iLCJleHBvcnQgKiBmcm9tICcuL21hdGNoLmRlY29yYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL3VzZXIuZGVjb3JhdG9yJztcbiIsImltcG9ydCB7IFZhbGlkYXRpb25Bcmd1bWVudHMsIFZhbGlkYXRpb25PcHRpb25zLCByZWdpc3RlckRlY29yYXRvciB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBNYXRjaDxUPihwcm9wZXJ0eToga2V5b2YgVCwgdmFsaWRhdGlvbk9wdGlvbnM/OiBWYWxpZGF0aW9uT3B0aW9ucykge1xuICByZXR1cm4gKG9iamVjdDogYW55LCBwcm9wZXJ0eU5hbWU6IHN0cmluZykgPT4ge1xuICAgIHJlZ2lzdGVyRGVjb3JhdG9yKHtcbiAgICAgIG5hbWU6ICdNYXRjaCcsXG4gICAgICB0YXJnZXQ6IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgIGNvbnN0cmFpbnRzOiBbcHJvcGVydHldLFxuICAgICAgb3B0aW9uczogdmFsaWRhdGlvbk9wdGlvbnMsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgdmFsaWRhdGUodmFsdWU6IGFueSwgYXJnczogVmFsaWRhdGlvbkFyZ3VtZW50cykge1xuICAgICAgICAgIGNvbnN0IFtyZWxhdGVkUHJvcGVydHlOYW1lXSA9IGFyZ3MuY29uc3RyYWludHM7XG4gICAgICAgICAgY29uc3QgcmVsYXRlZFZhbHVlID0gKGFyZ3Mub2JqZWN0IGFzIGFueSlbcmVsYXRlZFByb3BlcnR5TmFtZV07XG4gICAgICAgICAgcmV0dXJuIHZhbHVlID09PSByZWxhdGVkVmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVmYXVsdE1lc3NhZ2UoYXJnczogVmFsaWRhdGlvbkFyZ3VtZW50cykge1xuICAgICAgICAgIGNvbnN0IFtyZWxhdGVkUHJvcGVydHlOYW1lXSA9IGFyZ3MuY29uc3RyYWludHM7XG4gICAgICAgICAgcmV0dXJuIGAke3Byb3BlcnR5TmFtZX0gbXVzdCBtYXRjaCAke3JlbGF0ZWRQcm9wZXJ0eU5hbWV9IGV4YWN0bHlgO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZVBhcmFtRGVjb3JhdG9yLCBFeGVjdXRpb25Db250ZXh0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5leHBvcnQgY29uc3QgVXNlciA9IGNyZWF0ZVBhcmFtRGVjb3JhdG9yKChkYXRhOiB1bmtub3duLCBjdHg6IEV4ZWN1dGlvbkNvbnRleHQpID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IGN0eC5zd2l0Y2hUb0h0dHAoKS5nZXRSZXF1ZXN0KCk7XG4gIHJldHVybiByZXF1ZXN0LnVzZXI7XG59KTtcbiIsImltcG9ydCB7IEFyZ3VtZW50c0hvc3QsIENhdGNoLCBFeGNlcHRpb25GaWx0ZXIsIEh0dHBFeGNlcHRpb24sIEh0dHBTdGF0dXMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbkBDYXRjaChIdHRwRXhjZXB0aW9uKVxuZXhwb3J0IGNsYXNzIEh0dHBFeGNlcHRpb25GaWx0ZXIgaW1wbGVtZW50cyBFeGNlcHRpb25GaWx0ZXI8SHR0cEV4Y2VwdGlvbj4ge1xuICBjYXRjaChleGNlcHRpb246IEh0dHBFeGNlcHRpb24sIGhvc3Q6IEFyZ3VtZW50c0hvc3QpIHtcbiAgICBjb25zdCBjdHggPSBob3N0LnN3aXRjaFRvSHR0cCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gY3R4LmdldFJlc3BvbnNlKCk7XG5cbiAgICBjb25zdCBzdGF0dXMgPSBleGNlcHRpb24gaW5zdGFuY2VvZiBIdHRwRXhjZXB0aW9uID8gZXhjZXB0aW9uLmdldFN0YXR1cygpIDogSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1I7XG5cbiAgICBjb25zdCBleGNlcHRpb25SZXNwb25zZSA9IGV4Y2VwdGlvbi5nZXRSZXNwb25zZSgpIGFzIGFueTtcblxuICAgIGxldCBlcnJvcnMgPSBudWxsO1xuXG4gICAgaWYgKGV4Y2VwdGlvblJlc3BvbnNlLm1lc3NhZ2UgJiYgdHlwZW9mIGV4Y2VwdGlvblJlc3BvbnNlLm1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvcnMgPSBleGNlcHRpb25SZXNwb25zZS5tZXNzYWdlO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBleGNlcHRpb25SZXNwb25zZS5tZXNzYWdlICYmXG4gICAgICBBcnJheS5pc0FycmF5KGV4Y2VwdGlvblJlc3BvbnNlLm1lc3NhZ2UpICYmXG4gICAgICBleGNlcHRpb25SZXNwb25zZS5tZXNzYWdlLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIGVycm9ycyA9IGV4Y2VwdGlvblJlc3BvbnNlLm1lc3NhZ2UubWFwKChlcnJvcikgPT4gZXJyb3IuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBlcnJvci5zbGljZSgxKSk7XG4gICAgfVxuXG4gICAgcmVzcG9uc2Uuc3RhdHVzKHN0YXR1cykuanNvbih7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgIHR5cGVvZiBleGNlcHRpb24ubWVzc2FnZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICA/IGV4Y2VwdGlvbi5tZXNzYWdlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZXhjZXB0aW9uLm1lc3NhZ2Uuc2xpY2UoMSlcbiAgICAgICAgICA6IGV4Y2VwdGlvbi5tZXNzYWdlLFxuICAgICAgZXJyb3JzOiBlcnJvcnMgPz8gZXhjZXB0aW9uUmVzcG9uc2UsXG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vaHR0cC1leGNlcHRpb24uZmlsdGVyJztcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICdAbmVzdGpzL3Bhc3Nwb3J0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEp3dEF1dGhHdWFyZCBleHRlbmRzIEF1dGhHdWFyZCgnand0Jykge31cbiIsImV4cG9ydCAqIGZyb20gJy4vYXV0aC5ndWFyZCc7XG4iLCJleHBvcnQgKiBmcm9tICcuL2RlY29yYXRvcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJhdGVnaWVzJztcbmV4cG9ydCAqIGZyb20gJy4vZ3VhcmRzJztcbmV4cG9ydCAqIGZyb20gJy4vZmlsdGVycyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMnO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9qd3Quc3RyYXRlZ3knO1xuZXhwb3J0ICogZnJvbSAnLi9qd3QtcmVmcmVzaC5zdHJhdGVneSc7XG4iLCJpbXBvcnQgeyBVc2VyUHJvdG8gfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25Nb2R1bGVJbml0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IENsaWVudEdycGMgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgUGFzc3BvcnRTdHJhdGVneSB9IGZyb20gJ0BuZXN0anMvcGFzc3BvcnQnO1xuaW1wb3J0IHsgRXh0cmFjdEp3dCwgU3RyYXRlZ3kgfSBmcm9tICdwYXNzcG9ydC1qd3QnO1xuaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnd0UmVmcmVzaFN0cmF0ZWd5IGV4dGVuZHMgUGFzc3BvcnRTdHJhdGVneShTdHJhdGVneSwgJ2p3dC1yZWZyZXNoJykgaW1wbGVtZW50cyBPbk1vZHVsZUluaXQge1xuICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyUHJvdG8uVXNlclNlcnZpY2VDbGllbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChVc2VyUHJvdG8uRFVDUEhfVVNFUl9QQUNLQUdFX05BTUUpIHByaXZhdGUgY2xpZW50OiBDbGllbnRHcnBjLFxuXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcih7XG4gICAgICBzZWNyZXRPcktleTogY29uZmlnU2VydmljZS5nZXQ8c3RyaW5nPignSldUX1JFRlJFU0hfVE9LRU5fU0VDUkVUJyksXG4gICAgICBqd3RGcm9tUmVxdWVzdDogRXh0cmFjdEp3dC5mcm9tQXV0aEhlYWRlckFzQmVhcmVyVG9rZW4oKSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW9kdWxlSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlID0gdGhpcy5jbGllbnQuZ2V0U2VydmljZTxVc2VyUHJvdG8uVXNlclNlcnZpY2VDbGllbnQ+KFVzZXJQcm90by5VU0VSX1NFUlZJQ0VfTkFNRSk7XG4gIH1cblxuICBhc3luYyB2YWxpZGF0ZShwYXlsb2FkOiBhbnkpOiBQcm9taXNlPFVzZXJQcm90by5Vc2VyPiB7XG4gICAgY29uc3QgeyB1c2VyIH0gPSBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudXNlclNlcnZpY2UuZmluZEJ5SWQoeyBpZDogTnVtYmVyKHBheWxvYWQuc3ViKSB9KSk7XG4gICAgcmV0dXJuIHVzZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IFVzZXJQcm90byB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbk1vZHVsZUluaXQgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgQ2xpZW50R3JwYyB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBQYXNzcG9ydFN0cmF0ZWd5IH0gZnJvbSAnQG5lc3Rqcy9wYXNzcG9ydCc7XG5pbXBvcnQgeyBFeHRyYWN0Snd0LCBTdHJhdGVneSB9IGZyb20gJ3Bhc3Nwb3J0LWp3dCc7XG5pbXBvcnQgeyBsYXN0VmFsdWVGcm9tIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKd3RTdHJhdGVneSBleHRlbmRzIFBhc3Nwb3J0U3RyYXRlZ3koU3RyYXRlZ3ksICdqd3QnKSBpbXBsZW1lbnRzIE9uTW9kdWxlSW5pdCB7XG4gIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJQcm90by5Vc2VyU2VydmljZUNsaWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFVzZXJQcm90by5EVUNQSF9VU0VSX1BBQ0tBR0VfTkFNRSkgcHJpdmF0ZSBjbGllbnQ6IENsaWVudEdycGMsXG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKHtcbiAgICAgIHNlY3JldE9yS2V5OiBjb25maWdTZXJ2aWNlLmdldDxzdHJpbmc+KCdKV1RfUFJJVkFURV9LRVknKSxcbiAgICAgIGp3dEZyb21SZXF1ZXN0OiBFeHRyYWN0Snd0LmZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbigpLFxuICAgIH0pO1xuICB9XG5cbiAgb25Nb2R1bGVJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2UgPSB0aGlzLmNsaWVudC5nZXRTZXJ2aWNlPFVzZXJQcm90by5Vc2VyU2VydmljZUNsaWVudD4oVXNlclByb3RvLlVTRVJfU0VSVklDRV9OQU1FKTtcbiAgfVxuXG4gIGFzeW5jIHZhbGlkYXRlKHBheWxvYWQ6IGFueSk6IFByb21pc2U8VXNlclByb3RvLlVzZXI+IHtcbiAgICBjb25zdCB7IHVzZXIgfSA9IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy51c2VyU2VydmljZS5maW5kQnlJZCh7IGlkOiBOdW1iZXIocGF5bG9hZC5zdWIpIH0pKTtcbiAgICByZXR1cm4gdXNlcjtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9sb2dpbi5kdG8nO1xuZXhwb3J0ICogZnJvbSAnLi9yZWdpc3Rlci5kdG8nO1xuIiwiaW1wb3J0IHsgSXNFbWFpbCwgSXNOb3RFbXB0eSB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmltcG9ydCB7IERldmljZUlucHV0RHRvIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zL3VzZXInO1xuXG5leHBvcnQgY2xhc3MgQmFzZUF1dGhJbnB1dCB7XG4gIEBJc05vdEVtcHR5KClcbiAgQElzRW1haWwoKVxuICBlbWFpbDogc3RyaW5nO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIElucHV0TG9naW5SZXF1ZXN0IGV4dGVuZHMgQmFzZUF1dGhJbnB1dCB7XG4gIGRldmljZT86IERldmljZUlucHV0RHRvO1xufVxuIiwiaW1wb3J0IHsgVHJhbnNmb3JtLCBUcmFuc2Zvcm1GblBhcmFtcywgVHlwZSB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7IElzRGVmaW5lZCwgSXNFbWFpbCwgSXNFbnVtLCBJc05vdEVtcHR5LCBJc09wdGlvbmFsLCBJc1N0cmluZywgTWF4TGVuZ3RoLCBNaW5MZW5ndGggfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5pbXBvcnQgeyBFQ3VzdG9tZXJMZXZlbCwgRVVzZXJHZW5kZXIsIEVVc2VyUm9sZSwgRVVzZXJTdGF0dXMgfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MvY29tbW9uJztcbmltcG9ydCB7IENyZWF0ZU1lcmNoYW50SW5wdXREdG8gfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MvbWVyY2hhbnQnO1xuaW1wb3J0IHsgRGV2aWNlSW5wdXREdG8gfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MvdXNlcic7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVVc2VySW5wdXREdG8ge1xuICBAVHJhbnNmb3JtKCh7IHZhbHVlIH06IFRyYW5zZm9ybUZuUGFyYW1zKSA9PiB2YWx1ZT8udHJpbSgpLnRvTG93ZXJDYXNlKCkpXG4gIEBJc0VtYWlsKClcbiAgZW1haWw6IHN0cmluZztcblxuICBATWF4TGVuZ3RoKDMwKVxuICBATWluTGVuZ3RoKDUpXG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgcGFzc3dvcmQ6IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XG5cbiAgQElzRW51bShFVXNlclJvbGUpXG4gIEBJc09wdGlvbmFsKClcbiAgcm9sZTogRVVzZXJSb2xlO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRW51bShFVXNlclN0YXR1cylcbiAgc3RhdHVzOiBFVXNlclN0YXR1cztcblxuICBASXNFbnVtKEVVc2VyR2VuZGVyKVxuICBASXNPcHRpb25hbCgpXG4gIGdlbmRlcjogRVVzZXJHZW5kZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBsZXZlbD86IEVDdXN0b21lckxldmVsO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgY29udGFjdDogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgZG9iRGF5OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBkb2JNb250aDogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgZG9iWWVhcjogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgb2NjdXBhdGlvbj86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGF2YXRhcj86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGFkZHJlc3M/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBjaXR5Q29kZT86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIGRpc3RyaWN0Q29kZT86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIHdhcmRDb2RlPzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgcmVmZXJyZXI/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICByZWZlcnJlckNvZGU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBjdXN0b21lckNvZGU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBmYWNlYm9vaz86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIHphbG9QaG9uZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGhlaWdodD86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIHdlaWdodD86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIG1lbWJlckNhcmRObz86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGNvbXBhbnk/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICB0YXhObz86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIG5vdGU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICByZWxhdGVkVXNlcj86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIHJlbGF0ZWRVc2VyUm9sZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIHJlbGF0ZWRVc2VyUGhvbmU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBicmFuY2hJZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyUGF5bG9hZCB7XG4gIEBJc05vdEVtcHR5KClcbiAgQElzRGVmaW5lZCgpXG4gIEBUeXBlKCgpID0+IENyZWF0ZVVzZXJJbnB1dER0bylcbiAgdXNlcjogQ3JlYXRlVXNlcklucHV0RHRvO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRGVmaW5lZCgpXG4gIEBUeXBlKCgpID0+IENyZWF0ZU1lcmNoYW50SW5wdXREdG8pXG4gIG1lcmNoYW50OiBDcmVhdGVNZXJjaGFudElucHV0RHRvO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRGVmaW5lZCgpXG4gIEBUeXBlKCgpID0+IERldmljZUlucHV0RHRvKVxuICBkZXZpY2U6IERldmljZUlucHV0RHRvO1xufVxuIiwiaW1wb3J0IHsgTElNSVQsIFBBR0UgfSBmcm9tICdAbGlicy9jb3JlJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7IElzTnVtYmVyLCBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBCYXNlUXVlcnlEdG8ge1xuICBASXNPcHRpb25hbCgpXG4gIEBUcmFuc2Zvcm0oKHsgdmFsdWUgfSkgPT4gcGFyc2VJbnQodmFsdWUpKVxuICBASXNOdW1iZXIoKVxuICBwYWdlPzogbnVtYmVyID0gUEFHRTtcblxuICBASXNPcHRpb25hbCgpXG4gIEBUcmFuc2Zvcm0oKHsgdmFsdWUgfSkgPT4gcGFyc2VJbnQodmFsdWUpKVxuICBASXNOdW1iZXIoKVxuICBsaW1pdD86IG51bWJlciA9IExJTUlUO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgcT86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIG9yZGVyQnk/OiBzdHJpbmcgPSAnY3JlYXRlZEF0JztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIG9yZGVyRGlyZWN0aW9uPzogc3RyaW5nID0gJ0RFU0MnO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUR0bzxUPiB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgUGFydGlhbDxUPikge1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlcyhwYXJhbXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldEF0dHJpYnV0ZXMocGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IFBhcnRpYWw8VD4pOiB2b2lkIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKTtcblxuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGtleSwgcGFyYW1zW2tleV0pO1xuICAgIH1cbiAgfVxuXG4gIGhhc1Byb3BlcnR5KG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlID09PSBSZWZsZWN0LmdldE1ldGFkYXRhKCdmaWVsZHMnLCB0aGlzLCBuYW1lKTtcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShrZXk6IHN0cmluZywgdmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5oYXNQcm9wZXJ0eShrZXkpKSB7XG4gICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYmFzZS5kdG8nO1xuIiwiaW1wb3J0IHsgSXNFbnVtLCBJc0ludCwgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCwgSXNTdHJpbmcgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuaW1wb3J0IHsgUGFydGlhbFR5cGUgfSBmcm9tICdAbmVzdGpzL21hcHBlZC10eXBlcyc7XG5cbmltcG9ydCB7IEVCb29raW5nU3RhdHVzIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVCb29raW5nSW5wdXQge1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc0ludCgpXG4gIHNlcnZpY2VJZDogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRW51bShFQm9va2luZ1N0YXR1cylcbiAgc3RhdHVzPzogRUJvb2tpbmdTdGF0dXMgPSBFQm9va2luZ1N0YXR1cy5CT09LSU5HX1BFTkRJTkc7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNTdHJpbmcoKVxuICBib29raW5nRGF0ZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0ludCgpXG4gIHVzZXJJZD86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIHNlcnZpY2VOYW1lPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgdXNlckVtYWlsPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgdXNlclBob25lTnVtYmVyPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgbm90ZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0ludCgpXG4gIG1lcmNoYW50SWQ/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNJbnQoKVxuICBicmFuY2hJZD86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0ludCgpXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUGFydGlhbFVwZGF0ZUJvb2tpbmcgZXh0ZW5kcyBQYXJ0aWFsVHlwZTxDcmVhdGVCb29raW5nSW5wdXQ+KENyZWF0ZUJvb2tpbmdJbnB1dCkge31cbiIsImV4cG9ydCAqIGZyb20gJy4vYm9va2luZy5kdG8nO1xuIiwiZXhwb3J0IGVudW0gRVNvcnREaXJlY3Rpb24ge1xuICBBU0MgPSAwLFxuICBERVNDID0gMSxcbn1cblxuZXhwb3J0IGVudW0gRVNlcnZpY2VTaG93VHlwZSB7XG4gIEJPVEggPSAwLFxuICBDQVNISUVSID0gMSxcbiAgQk9PS0lORyA9IDIsXG4gIE5PTkUgPSAzLFxufVxuXG5leHBvcnQgZW51bSBFU2VydmljZVR5cGUge1xuICBTRVJWSUNFID0gMCxcbiAgUFJPRFVDVCA9IDEsXG59XG5cbmV4cG9ydCBlbnVtIEVTZXJ2ZUltYWdlVHlwZSB7XG4gIE1FUkNIQU5UID0gMCxcbiAgQlJBTkNIID0gMSxcbiAgR1JPVVAgPSAyLFxuICBTRVJWSUNFID0gMyxcbn1cblxuZXhwb3J0IGVudW0gRUltYWdlVHlwZSB7XG4gIFBIT1RPID0gMCxcbiAgVklERU8gPSAxLFxufVxuXG5leHBvcnQgZW51bSBFRGV2aWNlT3Mge1xuICBBTkRST0lEID0gMCxcbiAgSU9TID0gMSxcbn1cblxuZXhwb3J0IGVudW0gRVVzZXJHZW5kZXIge1xuICBNQUxFID0gMCxcbiAgRkVNQUxFID0gMSxcbiAgT1RIRVIgPSAyLFxufVxuXG5leHBvcnQgZW51bSBFVXNlclJvbGUge1xuICBVU0VSID0gMCxcbiAgQURNSU4gPSAxLFxuICBTVVBFUl9BRE1JTiA9IDIsXG4gIE1BU1RFUl9XT1JLRVIgPSAzLFxuICBBU1NJU1RBTlRfV09SS0VSID0gNCxcbiAgTUFOQUdFUiA9IDUsXG4gIFJFQ0VQVElPTklTVCA9IDYsXG59XG5cbmV4cG9ydCBlbnVtIEVDdXN0b21lckxldmVsIHtcbiAgTk9STUFMID0gMCxcbiAgU0lMVkVSID0gMSxcbiAgR09MRCA9IDIsXG4gIFBMQVRJTlVNID0gMyxcbn1cblxuZXhwb3J0IGVudW0gRVVzZXJTdGF0dXMge1xuICBQRU5ESU5HID0gMCxcbiAgQUNUSVZFID0gMSxcbiAgQkFOTkVEID0gMixcbn1cblxuZXhwb3J0IGVudW0gRUJvb2tpbmdTdGF0dXMge1xuICBCT09LSU5HX1BFTkRJTkcgPSAwLFxuICBCT09LSU5HX0FQUFJPVkUgPSAxLFxuICBCT09LSU5HX0NBTkNFTExFRCA9IDIsXG4gIEJPT0tJTkdfUkVKRUNUID0gMyxcbn1cblxuZXhwb3J0IGVudW0gRUV2ZW50TWVzc2FnZSB7XG4gIENSRUFURV9NRVNTQUdFID0gJ2NyZWF0ZV9tZXNzYWdlJyxcbiAgUkVDRU5UX01FU1NBR0VTID0gJ3JlY2VudF9tZXNzYWdlcycsXG4gIENPTlZFUlNBVElPTl9NRVNTQUdFUyA9ICdjb252ZXJzYXRpb25fbWVzc2FnZXMnLFxuICBKT0lOX1JPT00gPSAnam9pbl9yb29tJyxcbiAgTkVXX01FU1NBR0UgPSAnbmV3X21lc3NhZ2UnLFxufVxuXG5leHBvcnQgZW51bSBFTm90aWZpY2F0aW9uVHlwZSB7XG4gIEJPT0tJTkcgPSAwLFxuICBDSEFUID0gMSxcbiAgQ09NTUVOVCA9IDIsXG4gIFJFUExZX0NPTU1FTlQgPSAzLFxufVxuXG5leHBvcnQgZW51bSBFTGFuZ1R5cGUge1xuICBFTiA9ICdlbicsXG4gIFZJID0gJ3ZpJyxcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vY29tbW9uLmR0byc7XG4iLCJpbXBvcnQgeyBQYXJ0aWFsVHlwZSB9IGZyb20gJ0BuZXN0anMvbWFwcGVkLXR5cGVzJztcbmltcG9ydCB7IFRyYW5zZm9ybSwgVHJhbnNmb3JtRm5QYXJhbXMgfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBJc0VtYWlsLCBJc0VudW0sIElzSW50LCBJc05vdEVtcHR5LCBJc09wdGlvbmFsLCBJc1N0cmluZywgTWF4TGVuZ3RoLCBNaW5MZW5ndGggfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5pbXBvcnQgeyBFQ3VzdG9tZXJMZXZlbCwgRVVzZXJHZW5kZXIsIEVVc2VyUm9sZSwgRVVzZXJTdGF0dXMgfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIEFkZEN1c3RvbWVyRHRvIHtcbiAgQElzSW50KClcbiAgQElzTm90RW1wdHkoKVxuICBtZXJjaGFudElkPzogbnVtYmVyO1xuXG4gIEBUcmFuc2Zvcm0oKHsgdmFsdWUgfTogVHJhbnNmb3JtRm5QYXJhbXMpID0+IHZhbHVlPy50cmltKCkudG9Mb3dlckNhc2UoKSlcbiAgQElzRW1haWwoKVxuICBASXNPcHRpb25hbCgpXG4gIGVtYWlsOiBzdHJpbmc7XG5cbiAgQE1heExlbmd0aCgzMClcbiAgQE1pbkxlbmd0aCg1KVxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzTm90RW1wdHkoKVxuICBmdWxsTmFtZTogc3RyaW5nO1xuXG4gIEBJc0VudW0oRVVzZXJSb2xlKVxuICBASXNOb3RFbXB0eSgpXG4gIHJvbGU6IEVVc2VyUm9sZTtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0VudW0oRVVzZXJTdGF0dXMpXG4gIHN0YXR1czogRVVzZXJTdGF0dXM7XG5cbiAgQElzRW51bShFVXNlckdlbmRlcilcbiAgQElzT3B0aW9uYWwoKVxuICBnZW5kZXI6IEVVc2VyR2VuZGVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgbGV2ZWw/OiBFQ3VzdG9tZXJMZXZlbDtcblxuICBASXNPcHRpb25hbCgpXG4gIGNvbnRhY3Q6IHN0cmluZztcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIHBob25lTnVtYmVyOiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBkb2JEYXk6IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIGRvYk1vbnRoOiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBkb2JZZWFyOiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBvY2N1cGF0aW9uPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgYXZhdGFyPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgYWRkcmVzcz86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGNpdHlDb2RlPzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgd2FyZENvZGU/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICByZWZlcnJlcj86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIHJlZmVycmVyQ29kZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGN1c3RvbWVyQ29kZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGZhY2Vib29rPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgemFsb1Bob25lPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgaGVpZ2h0PzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgd2VpZ2h0PzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgbWVtYmVyQ2FyZE5vPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgY29tcGFueT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIHRheE5vPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgbm90ZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIHJlbGF0ZWRVc2VyPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgcmVsYXRlZFVzZXJSb2xlPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgcmVsYXRlZFVzZXJQaG9uZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGJyYW5jaElkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlUGFydGlhbEN1c3RvbWVyIGV4dGVuZHMgUGFydGlhbFR5cGU8QWRkQ3VzdG9tZXJEdG8+KEFkZEN1c3RvbWVyRHRvKSB7fVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jdXN0b21lci5kdG8nO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0ICogZnJvbSAnLi9hdXRoJztcblxuZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5cbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0ICogZnJvbSAnLi9jdXN0b21lcic7XG5cbmV4cG9ydCAqIGZyb20gJy4vYm9va2luZyc7XG4iLCJpbXBvcnQgeyBQYXJ0aWFsVHlwZSB9IGZyb20gJ0BuZXN0anMvbWFwcGVkLXR5cGVzJztcbmltcG9ydCB7IElzTm90RW1wdHksIElzTnVtYmVyLCBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVCcmFuY2hJbnB1dCB7XG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgbmFtZT86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNOb3RFbXB0eSgpXG4gIHBob25lPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgYWRkcmVzcz86IHN0cmluZztcblxuICBASXNOdW1iZXIoKVxuICBASXNOb3RFbXB0eSgpXG4gIG1lcmNoYW50SWQ6IG51bWJlcjtcblxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIGNpdHlDb2RlPzogbnVtYmVyO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgd2FyZENvZGU/OiBudW1iZXI7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBjaXR5Pzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgZGlzdHJpY3Q/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICB3YXJkPzogc3RyaW5nO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgbGF0aXR1ZGU/OiBudW1iZXI7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICBsb25naXR1ZGU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJ0aWFsVXBkYXRlQnJhbmNoIGV4dGVuZHMgUGFydGlhbFR5cGU8Q3JlYXRlQnJhbmNoSW5wdXQ+KENyZWF0ZUJyYW5jaElucHV0KSB7fVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jcmVhdGUtYnJhbmNoLmR0byc7XG4iLCJpbXBvcnQgeyBJc05vdEVtcHR5LCBJc09wdGlvbmFsIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZU1lcmNoYW50SW5wdXREdG8ge1xuICBASXNOb3RFbXB0eSgpXG4gIG5hbWU6IHN0cmluZztcblxuICBASXNOb3RFbXB0eSgpXG4gIGFkZHJlc3M6IHN0cmluZztcblxuICBASXNOb3RFbXB0eSgpXG4gIHBob25lOiBzdHJpbmc7XG5cbiAgQElzTm90RW1wdHkoKVxuICBzdWJkb21haW46IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGNpdHlDb2RlOiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBkaXN0cmljdENvZGU6IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIHdhcmRDb2RlOiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBjaXR5OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBkaXN0cmljdDogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgd2FyZDogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgUGFydGlhbFR5cGUgfSBmcm9tICdAbmVzdGpzL21hcHBlZC10eXBlcyc7XG5pbXBvcnQgeyBJc0ludCwgSXNOb3RFbXB0eSwgSXNTdHJpbmcgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlR3JvdXBJbnB1dCB7XG4gIEBJc05vdEVtcHR5KClcbiAgQElzSW50KClcbiAgbWVyY2hhbnRJZD86IG51bWJlcjtcblxuICBza3U/OiBzdHJpbmc7XG5cbiAgY29kZT86IHN0cmluZztcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgaW1hZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJ0aWFsVXBkYXRlR3JvdXAgZXh0ZW5kcyBQYXJ0aWFsVHlwZTxDcmVhdGVHcm91cElucHV0PihDcmVhdGVHcm91cElucHV0KSB7fVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jcmVhdGUtZ3JvdXAuZHRvJztcbiIsImV4cG9ydCAqIGZyb20gJy4vY3JlYXRlLmR0byc7XG5cbmV4cG9ydCAqIGZyb20gJy4vYnJhbmNoJztcblxuZXhwb3J0ICogZnJvbSAnLi9ncm91cCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZSc7XG4iLCJpbXBvcnQgeyBQYXJ0aWFsVHlwZSB9IGZyb20gJ0BuZXN0anMvbWFwcGVkLXR5cGVzJztcbmltcG9ydCB7IElzSW50LCBJc05vdEVtcHR5LCBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmltcG9ydCB7IEVTZXJ2aWNlU2hvd1R5cGUsIEVTZXJ2aWNlVHlwZSB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvZHRvcy9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlU2VydmljZUlucHV0IHtcbiAgQElzTm90RW1wdHkoKVxuICBASXNJbnQoKVxuICBncm91cElkPzogbnVtYmVyO1xuXG4gIHNrdT86IHN0cmluZztcblxuICBjb2RlPzogc3RyaW5nO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQElzU3RyaW5nKClcbiAgbmFtZT86IHN0cmluZztcblxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICBpbWFnZT86IHN0cmluZztcblxuICBASXNOb3RFbXB0eSgpXG4gIHByaWNlPzogbnVtYmVyO1xuXG4gIGluaXRpYWxQcmljZT86IG51bWJlcjtcblxuICBkdXJhdGlvbkhvdXI/OiBudW1iZXI7XG5cbiAgZHVyYXRpb25NaW51dGU/OiBudW1iZXI7XG5cbiAgdHlwZT86IEVTZXJ2aWNlVHlwZTtcblxuICBzaG93VHlwZT86IEVTZXJ2aWNlU2hvd1R5cGU7XG5cbiAgY2FuUHJpbnRhYmxlSW52b2ljZT86IGJvb2xlYW47XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNJbnQoKVxuICBtZXJjaGFudElkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUGFydGlhbFVwZGF0ZVNlcnZpY2UgZXh0ZW5kcyBQYXJ0aWFsVHlwZShDcmVhdGVTZXJ2aWNlSW5wdXQpIHt9XG4iLCJleHBvcnQgKiBmcm9tICcuL2NyZWF0ZS1zZXJ2aWNlLmR0byc7XG4iLCJpbXBvcnQgeyBJc0VudW0sIElzTm90RW1wdHksIElzU3RyaW5nIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuaW1wb3J0IHsgRURldmljZU9zIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBEZXZpY2VJbnB1dER0byB7XG4gIEBJc0VudW0oRURldmljZU9zKVxuICBASXNOb3RFbXB0eSgpXG4gIG9zOiBFRGV2aWNlT3M7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzTm90RW1wdHkoKVxuICBkZXZpY2VJZDogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgdG9rZW46IHN0cmluZztcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vZGV2aWNlLmR0byc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXIuZHRvJztcbmV4cG9ydCAqIGZyb20gJy4vdG9rZW4uZHRvJztcbiIsImltcG9ydCB7IFByb3BlcnR5IH0gZnJvbSAnQGxpYnMvY29yZSc7XG5cbmltcG9ydCB7IEJhc2VEdG8gfSBmcm9tICcuLi9iYXNlL2Jhc2UuZHRvJztcblxuZXhwb3J0IGNsYXNzIFRva2VuRHRvIGV4dGVuZHMgQmFzZUR0bzxvYmplY3Q+IHtcbiAgQFByb3BlcnR5KClcbiAgbGFuZzogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgVHJhbnNmb3JtLCBUcmFuc2Zvcm1GblBhcmFtcyB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7XG4gIElzQm9vbGVhbixcbiAgSXNFbWFpbCxcbiAgSXNFbnVtLFxuICBJc0ludCxcbiAgSXNOb3RFbXB0eSxcbiAgSXNPcHRpb25hbCxcbiAgSXNTdHJpbmcsXG4gIE1heExlbmd0aCxcbiAgTWluTGVuZ3RoLFxufSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5pbXBvcnQgeyBCYXNlUXVlcnlEdG8gfSBmcm9tICcuLi9iYXNlL2Jhc2UuZHRvJztcblxuaW1wb3J0IHsgTWF0Y2ggfSBmcm9tICdAL2FwaS1nYXRld2F5L2NvcmUnO1xuaW1wb3J0IHsgRUN1c3RvbWVyTGV2ZWwsIEVVc2VyR2VuZGVyLCBFVXNlclJvbGUsIEVVc2VyU3RhdHVzIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZElucHV0IHtcbiAgQElzU3RyaW5nKClcbiAgQElzTm90RW1wdHkoKVxuICBjdXJyZW50UGFzc3dvcmQ6IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNOb3RFbXB0eSgpXG4gIG5ld1Bhc3N3b3JkOiBzdHJpbmc7XG5cbiAgQE1hdGNoKCduZXdQYXNzd29yZCcpXG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRPcGVyYXRvckR0byB7XG4gIEBUcmFuc2Zvcm0oKHsgdmFsdWUgfTogVHJhbnNmb3JtRm5QYXJhbXMpID0+IHZhbHVlPy50cmltKCkudG9Mb3dlckNhc2UoKSlcbiAgQElzRW1haWwoKVxuICBASXNOb3RFbXB0eSgpXG4gIGVtYWlsOiBzdHJpbmc7XG5cbiAgQE1heExlbmd0aCgzMClcbiAgQE1pbkxlbmd0aCg1KVxuICBASXNTdHJpbmcoKVxuICBASXNOb3RFbXB0eSgpXG4gIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzTm90RW1wdHkoKVxuICBmdWxsTmFtZTogc3RyaW5nO1xuXG4gIEBJc0VudW0oRVVzZXJSb2xlKVxuICBASXNOb3RFbXB0eSgpXG4gIHJvbGU6IEVVc2VyUm9sZTtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc0ludCgpXG4gIG1lcmNoYW50SWQ/OiBudW1iZXI7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNJbnQoKVxuICBicmFuY2hJZD86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0VudW0oRVVzZXJTdGF0dXMpXG4gIHN0YXR1czogRVVzZXJTdGF0dXM7XG5cbiAgQElzRW51bShFVXNlckdlbmRlcilcbiAgQElzT3B0aW9uYWwoKVxuICBnZW5kZXI6IEVVc2VyR2VuZGVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgbGV2ZWw/OiBFQ3VzdG9tZXJMZXZlbDtcblxuICBASXNPcHRpb25hbCgpXG4gIGNvbnRhY3Q6IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGRvYkRheTogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgZG9iTW9udGg6IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIGRvYlllYXI6IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIG9jY3VwYXRpb24/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBhdmF0YXI/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBhZGRyZXNzPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgY2l0eUNvZGU/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBkaXN0cmljdENvZGU/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICB3YXJkQ29kZT86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIHJlZmVycmVyPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgcmVmZXJyZXJDb2RlPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgY3VzdG9tZXJDb2RlPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgZmFjZWJvb2s/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICB6YWxvUGhvbmU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBoZWlnaHQ/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICB3ZWlnaHQ/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBtZW1iZXJDYXJkTm8/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBjb21wYW55Pzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgdGF4Tm8/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBub3RlPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgcmVsYXRlZFVzZXI/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICByZWxhdGVkVXNlclJvbGU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICByZWxhdGVkVXNlclBob25lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUGFnaW5hdGVVc2VyRHRvIGV4dGVuZHMgQmFzZVF1ZXJ5RHRvIHtcbiAgQElzQm9vbGVhbigpXG4gIEBJc09wdGlvbmFsKClcbiAgZXhjbHVkZU1lOiBib29sZWFuO1xufVxuIiwiaW1wb3J0IHsgVXNlckRhdGFiYXNlTW9kdWxlIH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvY29ubmVjdGlvbi91c2VyJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuaW1wb3J0IHsgRGV2aWNlTW9kdWxlIH0gZnJvbSAnLi9kZXZpY2UvZGV2aWNlLm1vZHVsZSc7XG5pbXBvcnQgeyBVc2VyTW9kdWxlIH0gZnJvbSAnLi91c2VyL3VzZXIubW9kdWxlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtVc2VyRGF0YWJhc2VNb2R1bGUsIFVzZXJNb2R1bGUsIERldmljZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgRGV2aWNlTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBEZXZpY2VSZXBvc2l0b3J5IH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvcmVwb3NpdG9yaWVzJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFNlcXVlbGl6ZU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcbmltcG9ydCB7IFNlY3JldHNNb2R1bGUgfSBmcm9tICdsaWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvbW9kdWxlJztcblxuaW1wb3J0IHsgRGV2aWNlU2VydmljZSB9IGZyb20gJy4vZGV2aWNlLnNlcnZpY2UnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1NlY3JldHNNb2R1bGUsIFNlcXVlbGl6ZU1vZHVsZS5mb3JGZWF0dXJlKFtEZXZpY2VNb2RlbF0pXSxcbiAgcHJvdmlkZXJzOiBbRGV2aWNlU2VydmljZSwgRGV2aWNlUmVwb3NpdG9yeV0sXG4gIGV4cG9ydHM6IFtEZXZpY2VTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGV2aWNlTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBEZXZpY2VNb2RlbCB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlL2VudGl0aWVzJztcbmltcG9ydCB7IERldmljZVJlcG9zaXRvcnkgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9yZXBvc2l0b3JpZXMnO1xuaW1wb3J0IHsgQ29tbW9uUHJvdG8sIERldmljZVByb3RvIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZXZpY2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkZXZpY2VSZXBvc2l0b3J5OiBEZXZpY2VSZXBvc2l0b3J5KSB7fVxuXG4gIGFzeW5jIGNyZWF0ZShkdG86IERldmljZVByb3RvLkNyZWF0ZURldmljZUlucHV0KTogUHJvbWlzZTxEZXZpY2VNb2RlbD4ge1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IHRoaXMuZGV2aWNlUmVwb3NpdG9yeS5jcmVhdGUoZHRvKTtcbiAgICByZXR1cm4gZGV2aWNlO1xuICB9XG5cbiAgYXN5bmMgZmluZEJ5SWQoaWQ6IG51bWJlcik6IFByb21pc2U8RGV2aWNlTW9kZWw+IHtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCB0aGlzLmRldmljZVJlcG9zaXRvcnkuZmluZEJ5SWQoaWQpO1xuICAgIHJldHVybiBkZXZpY2U7XG4gIH1cblxuICBhc3luYyBmaW5kKHJlcXVlc3Q6IENvbW1vblByb3RvLlF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgYmFzZVdoZXJlUXVlcnkgPSAhaXNFbXB0eShyZXF1ZXN0LndoZXJlKSA/IEpTT04ucGFyc2UocmVxdWVzdC53aGVyZSkgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmRldmljZVJlcG9zaXRvcnkuZmluZEFuZFBhZ2luYXRlKHtcbiAgICAgIC4uLnJlcXVlc3QsXG4gICAgICB3aGVyZTogYmFzZVdoZXJlUXVlcnksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYXN5bmMgdXBzZXJ0RGV2aWNlKGR0bzogRGV2aWNlUHJvdG8uQ3JlYXRlRGV2aWNlSW5wdXQpOiBQcm9taXNlPERldmljZU1vZGVsPiB7XG4gICAgLy8gbGV0IGRldmljZSA9IGF3YWl0IHRoaXMuZGV2aWNlUmVwb3NpdG9yeS5maW5kT25lKHtcbiAgICAvLyAgIHVzZXJJZDogZHRvLnVzZXJJZCxcbiAgICAvLyAgIGRldmljZUlkOiBkdG8uZGV2aWNlSWQsXG4gICAgLy8gICBvczogZHRvLm9zLFxuICAgIC8vIH0pO1xuXG4gICAgLy8gaWYgKGlzRW1wdHkoZGV2aWNlKSkge1xuICAgIC8vICAgZGV2aWNlID0gYXdhaXQgdGhpcy5jcmVhdGUoZHRvKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgYXdhaXQgdGhpcy5kZXZpY2VSZXBvc2l0b3J5LnVwZGF0ZShkZXZpY2UuaWQsIHsgdG9rZW46IGR0by50b2tlbiB9KTtcbiAgICAvLyAgIGRldmljZSA9IGF3YWl0IHRoaXMuZmluZEJ5SWQoZGV2aWNlLmlkKTtcbiAgICAvLyB9XG5cbiAgICAvLyByZXR1cm4gZGV2aWNlO1xuICAgIHJldHVybjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTWVyY2hhbnRVc2VyTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBNZXJjaGFudFVzZXJSZXBvc2l0b3J5IH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvcmVwb3NpdG9yaWVzJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFNlcXVlbGl6ZU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcbmltcG9ydCB7IFNlY3JldHNNb2R1bGUgfSBmcm9tICdsaWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvbW9kdWxlJztcblxuaW1wb3J0IHsgTWVyY2hhbnRVc2VyU2VydmljZSB9IGZyb20gJy4vbWVyY2hhbnQtdXNlci5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtTZWNyZXRzTW9kdWxlLCBTZXF1ZWxpemVNb2R1bGUuZm9yRmVhdHVyZShbTWVyY2hhbnRVc2VyTW9kZWxdKV0sXG4gIHByb3ZpZGVyczogW01lcmNoYW50VXNlclNlcnZpY2UsIE1lcmNoYW50VXNlclJlcG9zaXRvcnldLFxuICBleHBvcnRzOiBbTWVyY2hhbnRVc2VyU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1lcmNoYW50VXNlck1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTWVyY2hhbnRVc2VyTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBNZXJjaGFudFVzZXJSZXBvc2l0b3J5IH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvcmVwb3NpdG9yaWVzJztcbmltcG9ydCB7IE1lcmNoYW50VXNlclByb3RvIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVyY2hhbnRVc2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbWVyY2hhbnRVc2VyUmVwb3NpdG9yeTogTWVyY2hhbnRVc2VyUmVwb3NpdG9yeSkge31cblxuICBhc3luYyBjcmVhdGUoZHRvOiBNZXJjaGFudFVzZXJQcm90by5DcmVhdGVNZXJjaGFudFVzZXJJbnB1dCk6IFByb21pc2U8TWVyY2hhbnRVc2VyTW9kZWw+IHtcbiAgICBjb25zdCBtZXJjaGFudFVzZXIgPSBhd2FpdCB0aGlzLm1lcmNoYW50VXNlclJlcG9zaXRvcnkuY3JlYXRlKGR0byk7XG4gICAgcmV0dXJuIG1lcmNoYW50VXNlcjtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShpZDogbnVtYmVyLCBkdG86IE1lcmNoYW50VXNlclByb3RvLkNyZWF0ZU1lcmNoYW50VXNlcklucHV0KTogUHJvbWlzZTxNZXJjaGFudFVzZXJNb2RlbD4ge1xuICAgIC8vIGF3YWl0IHRoaXMubWVyY2hhbnRVc2VyUmVwb3NpdG9yeS51cGRhdGUoaWQsIGR0byk7XG4gICAgLy8gcmV0dXJuIGF3YWl0IHRoaXMubWVyY2hhbnRVc2VyUmVwb3NpdG9yeS5maW5kQnlJZChpZCk7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZXZpY2VNb2RlbCB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlL2VudGl0aWVzJztcbmltcG9ydCB7IENvbW1vblByb3RvLCBVc2VyUHJvdG8gfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzJztcbmltcG9ydCB7IENyZWF0ZURldmljZUlucHV0LCBEZXZpY2VzIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3MvZGV2aWNlJztcbmltcG9ydCB7IENyZWF0ZU1lcmNoYW50VXNlcklucHV0LCBNZXJjaGFudFVzZXIgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy9tZXJjaGFudF91c2VyJztcbmltcG9ydCB7IEdycGNMb2dJbnRlcmNlcHRvciB9IGZyb20gJ0BsaWJzL2ludGVyY2VwdG9ycyc7XG5pbXBvcnQgeyBDb250cm9sbGVyLCBVc2VGaWx0ZXJzLCBVc2VJbnRlcmNlcHRvcnMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBHcnBjQWxsRXhjZXB0aW9uc0ZpbHRlciB9IGZyb20gJ2ZpbHRlcnMvZmlsdGVycyc7XG5cbmltcG9ydCB7IERldmljZVNlcnZpY2UgfSBmcm9tICcuLi9kZXZpY2UvZGV2aWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVyY2hhbnRVc2VyU2VydmljZSB9IGZyb20gJy4uL21lcmNoYW50LXVzZXIvbWVyY2hhbnQtdXNlci5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XG5cbkBVc2VGaWx0ZXJzKEdycGNBbGxFeGNlcHRpb25zRmlsdGVyKVxuQFVzZUludGVyY2VwdG9ycyhHcnBjTG9nSW50ZXJjZXB0b3IpXG5AQ29udHJvbGxlcigpXG5AVXNlclByb3RvLlVzZXJTZXJ2aWNlQ29udHJvbGxlck1ldGhvZHMoKVxuZXhwb3J0IGNsYXNzIFVzZXJDb250cm9sbGVyIGltcGxlbWVudHMgVXNlclByb3RvLlVzZXJTZXJ2aWNlQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1lcmNoYW50VXNlclNlcnZpY2U6IE1lcmNoYW50VXNlclNlcnZpY2UsXG4gICkge31cblxuICBhc3luYyB1cGRhdGVDdXN0b21lcihyZXF1ZXN0OiBVc2VyUHJvdG8uQWRtaW5VcGRhdGVDdXN0b21lcklucHV0KTogUHJvbWlzZTxVc2VyUHJvdG8uRmluZE9uZVVzZXI+IHtcbiAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UudXBkYXRlKHsgaWQ6IHJlcXVlc3QuaWQsIGRhdGE6IHJlcXVlc3QudXNlciB9KTtcblxuICAgIC8vIFRPRE86IE5lZWQgdG8gaW1wbGVtZW50IHVwZGF0ZSBtZXJjaGFudF91c2VyXG4gICAgLy8gY29uc3QgdXBkYXRlZE1lcmNoYW50VXNlciA9IGF3YWl0IHRoaXMubWVyY2hhbnRVc2VyU2VydmljZS5jcmVhdGUoKTtcblxuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiB1cGRhdGVkVXNlcixcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgYWRkQ3VzdG9tZXIocmVxdWVzdDogVXNlclByb3RvLkFkZE9wZXJhdG9ySW5wdXQpOiBQcm9taXNlPFVzZXJQcm90by5GaW5kT25lVXNlcj4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmNyZWF0ZShyZXF1ZXN0KTtcbiAgICBhd2FpdCB0aGlzLm1lcmNoYW50VXNlclNlcnZpY2UuY3JlYXRlKHsgLi4ucmVxdWVzdC5tZXJjaGFudFVzZXIsIHVzZXJJZDogdXNlci5pZCB9KTtcblxuICAgIHJldHVybiB7IHVzZXIgfTtcbiAgfVxuICBhc3luYyBjb3VudEN1c3RvbWVyKHJlcXVlc3Q6IENvbW1vblByb3RvLlF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8Q29tbW9uUHJvdG8uQ291bnQ+IHtcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuY291bnRDdXN0b21lcihyZXF1ZXN0KTtcbiAgICByZXR1cm4geyBjb3VudCB9O1xuICB9XG5cbiAgYXN5bmMgYWRkT3BlcmF0b3IocmVxdWVzdDogVXNlclByb3RvLkFkZE9wZXJhdG9ySW5wdXQpOiBQcm9taXNlPFVzZXJQcm90by5GaW5kT25lVXNlcj4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmNyZWF0ZShyZXF1ZXN0KTtcbiAgICBhd2FpdCB0aGlzLm1lcmNoYW50VXNlclNlcnZpY2UuY3JlYXRlKHsgLi4ucmVxdWVzdC5tZXJjaGFudFVzZXIsIHVzZXJJZDogdXNlci5pZCB9KTtcblxuICAgIHJldHVybiB7IHVzZXIgfTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZU1lcmNoYW50VXNlcihyZXF1ZXN0OiBDcmVhdGVNZXJjaGFudFVzZXJJbnB1dCk6IFByb21pc2U8TWVyY2hhbnRVc2VyPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubWVyY2hhbnRVc2VyU2VydmljZS5jcmVhdGUocmVxdWVzdCk7XG4gIH1cblxuICBhc3luYyB1cHNlcnREZXZpY2UocmVxdWVzdDogQ3JlYXRlRGV2aWNlSW5wdXQpOiBQcm9taXNlPERldmljZU1vZGVsPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZGV2aWNlU2VydmljZS51cHNlcnREZXZpY2UocmVxdWVzdCk7XG4gIH1cblxuICBjcmVhdGVEZXZpY2UocmVxdWVzdDogQ3JlYXRlRGV2aWNlSW5wdXQpOiBQcm9taXNlPERldmljZU1vZGVsPiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgYXN5bmMgZmluZERldmljZXMocmVxdWVzdDogQ29tbW9uUHJvdG8uUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxEZXZpY2VzPiB7XG4gICAgY29uc3QgZGV2aWNlcyA9IGF3YWl0IHRoaXMuZGV2aWNlU2VydmljZS5maW5kKHJlcXVlc3QpO1xuICAgIHJldHVybiBkZXZpY2VzO1xuICB9XG5cbiAgYXN5bmMgZmluZChyZXF1ZXN0OiBDb21tb25Qcm90by5RdWVyeVJlcXVlc3QpOiBQcm9taXNlPFVzZXJQcm90by5Vc2VyUGFnaW5hdGlvbj4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZmluZFdpdGhQYWdpbmcocmVxdWVzdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGFzeW5jIGNvdW50KHJlcXVlc3Q6IENvbW1vblByb3RvLlF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8Q29tbW9uUHJvdG8uQ291bnQ+IHtcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuY291bnQocmVxdWVzdCk7XG4gICAgcmV0dXJuIHsgY291bnQgfTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShyZXF1ZXN0OiBVc2VyUHJvdG8uVXBkYXRlVXNlcklucHV0KTogUHJvbWlzZTxVc2VyUHJvdG8uRmluZE9uZVVzZXI+IHtcbiAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UudXBkYXRlKHJlcXVlc3QpO1xuXG4gICAgcmV0dXJuIHsgdXNlcjogdXBkYXRlZFVzZXIgfTtcbiAgfVxuXG4gIGRlbGV0ZUN1c3RvbWVyKHJlcXVlc3Q6IENvbW1vblByb3RvLklkKTogUHJvbWlzZTxDb21tb25Qcm90by5Db3VudD4ge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZShkYXRhOiBVc2VyUHJvdG8uQ3JlYXRlVXNlclJlcXVlc3QpOiBQcm9taXNlPFVzZXJQcm90by5GaW5kT25lVXNlcj4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmNyZWF0ZShkYXRhKTtcbiAgICByZXR1cm4geyB1c2VyIH07XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZCh7IGlkIH06IENvbW1vblByb3RvLklkKTogUHJvbWlzZTxVc2VyUHJvdG8uRmluZE9uZVVzZXI+IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5maW5kQnlJZChpZCk7XG4gICAgcmV0dXJuIHsgdXNlciB9O1xuICB9XG5cbiAgYXN5bmMgZmluZE9uZShyZXF1ZXN0OiBDb21tb25Qcm90by5RdWVyeVJlcXVlc3QpOiBQcm9taXNlPFVzZXJQcm90by5GaW5kT25lVXNlcj4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmZpbmRPbmUocmVxdWVzdCk7XG4gICAgcmV0dXJuIHsgdXNlciB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBVc2VyUmVwb3NpdG9yeSB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlL3JlcG9zaXRvcmllcyc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBTZXF1ZWxpemVNb2R1bGUgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBTZWNyZXRzTW9kdWxlIH0gZnJvbSAnbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL21vZHVsZSc7XG5cbmltcG9ydCB7IERldmljZU1vZHVsZSB9IGZyb20gJy4uL2RldmljZS9kZXZpY2UubW9kdWxlJztcbmltcG9ydCB7IE1lcmNoYW50VXNlck1vZHVsZSB9IGZyb20gJy4uL21lcmNoYW50LXVzZXIvbWVyY2hhbnQtdXNlci5tb2R1bGUnO1xuXG5pbXBvcnQgeyBVc2VyQ29udHJvbGxlciB9IGZyb20gJy4vdXNlci5jb250cm9sbGVyJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1NlY3JldHNNb2R1bGUsIFNlcXVlbGl6ZU1vZHVsZS5mb3JGZWF0dXJlKFtVc2VyTW9kZWxdKSwgRGV2aWNlTW9kdWxlLCBNZXJjaGFudFVzZXJNb2R1bGVdLFxuICBjb250cm9sbGVyczogW1VzZXJDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIFVzZXJSZXBvc2l0b3J5XSxcbiAgZXhwb3J0czogW1VzZXJTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgVXNlck1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvZW50aXRpZXMnO1xuaW1wb3J0IHsgVXNlclJlcG9zaXRvcnkgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9yZXBvc2l0b3JpZXMnO1xuaW1wb3J0IHsgQ29tbW9uUHJvdG8sIFVzZXJQcm90byB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEZpbmRPcHRpb25zLCBTZXF1ZWxpemUsIFdoZXJlT3B0aW9ucyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHF1ZXJ5IH0gZnJvbSAnZXhwcmVzcyc7XG5cbmltcG9ydCB7IERldmljZVNlcnZpY2UgfSBmcm9tICcuLi9kZXZpY2UvZGV2aWNlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHVzZXJSZXBvc2l0b3J5OiBVc2VyUmVwb3NpdG9yeSwgcHJpdmF0ZSByZWFkb25seSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlKSB7fVxuXG4gIGFzeW5jIGNyZWF0ZShkdG86IFVzZXJQcm90by5DcmVhdGVVc2VyUmVxdWVzdCk6IFByb21pc2U8VXNlck1vZGVsPiB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMudXNlclJlcG9zaXRvcnkuY3JlYXRlKGR0by51c2VyKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCB0aGlzLmRldmljZVNlcnZpY2UuY3JlYXRlKHsgLi4uZHRvLmRldmljZSwgdXNlcklkOiB1c2VyLmlkIH0pO1xuXG4gICAgcmV0dXJuIHVzZXI7XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZChpZDogbnVtYmVyKTogUHJvbWlzZTxVc2VyTW9kZWw+IHtcbiAgICBjb25zdCByZXN1bHQ6IFVzZXJNb2RlbCA9IGF3YWl0IHRoaXMudXNlclJlcG9zaXRvcnkuZmluZEJ5SWQoaWQsIHtcbiAgICAgIHJhdzogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBhc3luYyBmaW5kT25lKGR0bzogQ29tbW9uUHJvdG8uUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxVc2VyTW9kZWw+IHtcbiAgICBjb25zdCB3aGVyZSA9ICFpc0VtcHR5KGR0by53aGVyZSkgPyBKU09OLnBhcnNlKGR0by53aGVyZSkgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCByZXN1bHQ6IFVzZXJNb2RlbCA9IGF3YWl0IHRoaXMudXNlclJlcG9zaXRvcnkuZmluZE9uZSh7XG4gICAgICAuLi5kdG8sXG4gICAgICB3aGVyZSxcbiAgICAgIHJhdzogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBhc3luYyBjb3VudChxdWVyeTogQ29tbW9uUHJvdG8uUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBhc3luYyB1cGRhdGUocmVxdWVzdDogVXNlclByb3RvLlVwZGF0ZVVzZXJJbnB1dCk6IFByb21pc2U8VXNlck1vZGVsPiB7XG4gICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LnVwZGF0ZShyZXF1ZXN0LmRhdGEsIHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiByZXF1ZXN0LmlkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gdXBkYXRlZFVzZXJbMF07XG4gIH1cblxuICBhc3luYyBjb3VudEN1c3RvbWVyKHJlcXVlc3Q6IENvbW1vblByb3RvLlF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYXN5bmMgZmluZFdpdGhQYWdpbmcocXVlcnk6IENvbW1vblByb3RvLlF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgYmFzZVdoZXJlID0gIWlzRW1wdHkocXVlcnkud2hlcmUpID8gSlNPTi5wYXJzZShxdWVyeS53aGVyZSkgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRBbmRQYWdpbmF0ZShcbiAgICAgIHtcbiAgICAgICAgLi4ucXVlcnksXG4gICAgICAgIHdoZXJlOiBiYXNlV2hlcmUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBvcmRlcjogW1txdWVyeS5vcmRlckJ5LCBxdWVyeS5vcmRlckRpcmVjdGlvbl1dLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgT3AsIE9wZXJhdG9yc0FsaWFzZXMgfSBmcm9tICdzZXF1ZWxpemUnO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JzQWxpYXNlczogT3BlcmF0b3JzQWxpYXNlcyA9IHtcbiAgX2FuZDogT3AuYW5kLFxuICBfb3I6IE9wLm9yLFxuICBfZXE6IE9wLmVxLFxuICBfbmU6IE9wLm5lLFxuICBfaXM6IE9wLmlzLFxuICBfbm90OiBPcC5ub3QsXG4gIF9jb2w6IE9wLmNvbCxcbiAgX2d0OiBPcC5ndCxcbiAgX2d0ZTogT3AuZ3RlLFxuICBfbHQ6IE9wLmx0LFxuICBfbHRlOiBPcC5sdGUsXG4gIF9iZXR3ZWVuOiBPcC5iZXR3ZWVuLFxuICBfbm90QmV0d2VlbjogT3Aubm90QmV0d2VlbixcbiAgX2FsbDogT3AuYWxsLFxuICBfaW46IE9wLmluLFxuICBfbm90SW46IE9wLm5vdEluLFxuICBfbGlrZTogT3AubGlrZSxcbiAgX25vdExpa2U6IE9wLm5vdExpa2UsXG4gIF9zdGFydHNXaXRoOiBPcC5zdGFydHNXaXRoLFxuICBfZW5kc1dpdGg6IE9wLmVuZHNXaXRoLFxuICBfc3Vic3RyaW5nOiBPcC5zdWJzdHJpbmcsXG4gIF9pTGlrZTogT3AuaUxpa2UsXG4gIF9ub3RJTGlrZTogT3Aubm90SUxpa2UsXG4gIF9yZWdleHA6IE9wLnJlZ2V4cCxcbiAgX25vdFJlZ2V4cDogT3Aubm90UmVnZXhwLFxuICBfaVJlZ2V4cDogT3AuaVJlZ2V4cCxcbiAgX25vdElSZWdleHA6IE9wLm5vdElSZWdleHAsXG4gIF9hbnk6IE9wLmFueSxcbiAgX2NvbnRhaW5zOiBPcC5jb250YWlucyxcbiAgX2NvbnRhaW5lZDogT3AuY29udGFpbmVkLFxuICBfb3ZlcmxhcDogT3Aub3ZlcmxhcCxcbiAgX2FkamFjZW50OiBPcC5hZGphY2VudCxcbiAgX3N0cmljdExlZnQ6IE9wLnN0cmljdExlZnQsXG4gIF9zdHJpY3RSaWdodDogT3Auc3RyaWN0UmlnaHQsXG4gIF9ub0V4dGVuZFJpZ2h0OiBPcC5ub0V4dGVuZFJpZ2h0LFxuICBfbm9FeHRlbmRMZWZ0OiBPcC5ub0V4dGVuZExlZnQsXG4gIF92YWx1ZXM6IE9wLnZhbHVlcyxcbn07XG5cbmV4cG9ydCBjb25zdCBMSU1JVCA9IDEwO1xuXG5leHBvcnQgY29uc3QgUEFHRSA9IDE7XG4iLCJleHBvcnQgKiBmcm9tICcuL2RhdGFiYXNlLmNvbnN0YW50JztcbiIsImV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgKiBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnZSc7XG4iLCJleHBvcnQgY29uc3QgQVVUSF9NRVNTQUdFID0ge1xuICBMT0dJTjoge1xuICAgIElOVkFMSUQ6ICdJbnZhbGlkIGNyZWRlbnRpYWxzLicsXG4gIH0sXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9hdXRoLm1lc3NhZ2UnO1xuIiwiZXhwb3J0IGNvbnN0IENPTU1PTl9NRVNTQUdFID0ge1xuICBJTlZBTElEOiAnSW52YWxpZCByZXF1ZXN0JyxcbiAgQ1JFQVRFOiB7XG4gICAgRVhJU1RfRU1BSUw6ICdUaGUgZW1haWwgaXMgZXhpc3QnLFxuICB9LFxuICBSRUFEOiB7XG4gICAgTk9UX0ZPVU5EOiAnVGhlIG1lcmNoYW50IG5vdCBmb3VuZCcsXG4gIH0sXG4gIFVQREFURToge1xuICAgIEZBSUw6ICdDYW4gbm90IHVwZGF0ZSBtZXJjaGFudCcsXG4gIH0sXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyJztcblxuZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vYXV0aCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uLm1lc3NhZ2UnO1xuIiwiZXhwb3J0IGNvbnN0IEJSQU5DSF9NRVNTQUdFID0ge1xuICBSRUFEOiB7XG4gICAgTk9UX0ZPVU5EOiAnVGhlIGJyYW5jaCBub3QgZm91bmQnLFxuICB9LFxuICBDUkVBVEU6IHtcbiAgICBFWElTVEVEOiAnVGhlIGJyYW5jaCBpcyBleGlzdCcsXG4gIH0sXG4gIFVQREFURToge1xuICAgIEZBSUw6ICdDYW4gbm90IHVwZGF0ZSB1c2VyJyxcbiAgICBJTlZBTElEX1BBU1NXT1JEOiAnRXJyb3IgdXBkYXRpbmcgcGFzc3dvcmQuIEtpbmRseSBjaGVjayB5b3VyIHBhc3N3b3JkcycsXG4gIH0sXG4gIERFTEVURToge1xuICAgIEZBSUw6ICdEZWxldGUgYnJhbmNoIGZhaWxlZCcsXG4gICAgU1VDQ0VTUzogJ0RlbGV0ZSBicmFuY2ggc3VjY2Vzc2Z1bGx5JyxcbiAgfSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL21lcmNoYW50Lm1lc3NhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9icmFuY2gubWVzc2FnZSc7XG4iLCJleHBvcnQgY29uc3QgTUVSQ0hBTlRfTUVTU0FHRSA9IHtcbiAgQ1JFQVRFOiB7XG4gICAgRVhJU1RfRU1BSUw6ICdUaGUgZW1haWwgaXMgZXhpc3QnLFxuICB9LFxuICBSRUFEOiB7XG4gICAgTk9UX0ZPVU5EOiAnVGhlIG1lcmNoYW50IG5vdCBmb3VuZCcsXG4gIH0sXG4gIFVQREFURToge1xuICAgIEZBSUw6ICdDYW4gbm90IHVwZGF0ZSBtZXJjaGFudCcsXG4gIH0sXG59O1xuIiwiZXhwb3J0IGNvbnN0IENVU1RPTUVSX01FU1NBR0UgPSB7XG4gIENSRUFURToge1xuICAgIEVYSVNUX0VNQUlMOiAnVGhlIGVtYWlsIGlzIGV4aXN0JyxcbiAgICBTVUNDRVNTRlVMOiAnQ3JlYXRlIGN1c3RvbWVyIHN1Y2Nlc3NmdWxseScsXG4gIH0sXG4gIFVQREFURToge1xuICAgIEZBSUw6ICdDYW4gbm90IHVwZGF0ZSBjdXN0b21lcicsXG4gICAgSU5WQUxJRF9QQVNTV09SRDogJ0Vycm9yIHVwZGF0aW5nIHBhc3N3b3JkLiBLaW5kbHkgY2hlY2sgeW91ciBwYXNzd29yZHMnLFxuICB9LFxuICBSRUFEOiB7XG4gICAgTk9UX0ZPVU5EOiAnVGhlIGN1c3RvbWVyIG5vdCBmb3VuZCcsXG4gIH0sXG4gIERFTEVURToge1xuICAgIEZBSUw6ICdDYW4gbm90IHJlbW92ZSB0aGUgY3VzdG9tZXInLFxuICB9LFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdXNlci5tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vY3VzdG9tZXIubWVzc2FnZSc7XG4iLCJleHBvcnQgY29uc3QgVVNFUl9NRVNTQUdFID0ge1xuICBDUkVBVEU6IHtcbiAgICBFWElTVF9FTUFJTDogJ1RoZSBlbWFpbCBpcyBleGlzdCcsXG4gIH0sXG4gIFJFQUQ6IHtcbiAgICBOT1RfRk9VTkQ6ICdUaGUgdXNlciBub3QgZm91bmQnLFxuICB9LFxuICBVUERBVEU6IHtcbiAgICBGQUlMOiAnQ2FuIG5vdCB1cGRhdGUgdXNlcicsXG4gICAgSU5WQUxJRF9QQVNTV09SRDogJ0Vycm9yIHVwZGF0aW5nIHBhc3N3b3JkLiBLaW5kbHkgY2hlY2sgeW91ciBwYXNzd29yZHMnLFxuICB9LFxufTtcbiIsImltcG9ydCB7IEh0dHBFeGNlcHRpb24sIEh0dHBTdGF0dXMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBScGNFeGNlcHRpb24gfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuXG5leHBvcnQgY2xhc3MgRXJyb3JIZWxwZXIge1xuICBzdGF0aWMgQmFkUmVxdWVzdEV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgUnBjRXhjZXB0aW9uKHtcbiAgICAgIGNvZGU6IEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICBtZXNzYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIEh0dHBCYWRSZXF1ZXN0RXhjZXB0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKG1lc3NhZ2UsIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpO1xuICB9XG5cbiAgc3RhdGljIFVuYXV0aG9yaXplZEV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgUnBjRXhjZXB0aW9uKHtcbiAgICAgIGNvZGU6IEh0dHBTdGF0dXMuVU5BVVRIT1JJWkVELFxuICAgICAgbWVzc2FnZSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBIdHRwVW5hdXRob3JpemVkRXhjZXB0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKG1lc3NhZ2UsIEh0dHBTdGF0dXMuVU5BVVRIT1JJWkVEKTtcbiAgfVxuXG4gIHN0YXRpYyBOb3RGb3VuZEV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgUnBjRXhjZXB0aW9uKHtcbiAgICAgIGNvZGU6IEh0dHBTdGF0dXMuTk9UX0ZPVU5ELFxuICAgICAgbWVzc2FnZSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBIdHRwTm90Rm91bmRFeGNlcHRpb24obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24obWVzc2FnZSwgSHR0cFN0YXR1cy5OT1RfRk9VTkQpO1xuICB9XG5cbiAgc3RhdGljIEZvcmJpZGRlbkV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgUnBjRXhjZXB0aW9uKHtcbiAgICAgIGNvZGU6IEh0dHBTdGF0dXMuRk9SQklEREVOLFxuICAgICAgbWVzc2FnZSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBIdHRwRm9yYmlkZGVuRXhjZXB0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKG1lc3NhZ2UsIEh0dHBTdGF0dXMuRk9SQklEREVOKTtcbiAgfVxuXG4gIHN0YXRpYyBJbnRlcm5hbFNlcnZlckVycm9yRXhjZXB0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRocm93IG5ldyBScGNFeGNlcHRpb24oe1xuICAgICAgY29kZTogSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICBtZXNzYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIEh0dHBJbnRlcm5hbFNlcnZlckVycm9yRXhjZXB0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKG1lc3NhZ2UsIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IG51bWJlcklucHV0cyA9IChcbiAgaW5wdXQ6IG9iamVjdCA9IHt9LFxuKToge1xuICBba2V5OiBzdHJpbmddOiBudW1iZXI7XG59ID0+XG4gIE9iamVjdC5rZXlzKGlucHV0KS5yZWR1Y2UoKGFjYzogdW5rbm93biwgdmFsOiBzdHJpbmcpID0+IHtcbiAgICBhY2NbdmFsXSA9ICtpbnB1dFt2YWxdIGFzIG51bWJlcjtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9BfMOBfMOAfMODfOG6oHzDgnzhuqR84bqmfOG6qnzhuqx8xIJ84bqufOG6sHzhurR84bq2L2csICdBJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC/DoHzDoXzhuqF84bqjfMOjfMOifOG6p3zhuqV84bqtfOG6qXzhuqt8xIN84bqxfOG6r3zhurd84bqzfOG6tS9nLCAnYScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvRXzDiXzDiHzhurx84bq4fMOKfOG6vnzhu4B84buEfOG7hi8sICdFJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC/DqHzDqXzhurl84bq7fOG6vXzDqnzhu4F84bq/fOG7h3zhu4N84buFL2csICdlJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9JfMONfMOMfMSofOG7ii9nLCAnSScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvw6x8w6184buLfOG7iXzEqS9nLCAnaScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvT3zDk3zDknzDlXzhu4x8w5R84buQfOG7knzhu5Z84buYfMagfOG7mnzhu5x84bugfOG7oi9nLCAnTycpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvw7J8w7N84buNfOG7j3zDtXzDtHzhu5N84buRfOG7mXzhu5V84buXfMahfOG7nXzhu5t84bujfOG7n3zhu6EvZywgJ28nKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL1V8w5p8w5l8xah84bukfMavfOG7qHzhu6p84buufOG7sC9nLCAnVScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvw7l8w7p84bulfOG7p3zFqXzGsHzhu6t84bupfOG7sXzhu6184buvL2csICd1Jyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9ZfMOdfOG7snzhu7h84bu0L2csICdZJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC/hu7N8w7184bu1fOG7t3zhu7kvZywgJ3knKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL8SQL2csICdEJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC/EkS9nLCAnZCcpO1xuICAvLyBTb21lIHN5c3RlbSBlbmNvZGUgdmlldG5hbWVzZSBjb21iaW5pbmcgYWNjZW50IGFzIGluZGl2aWR1YWwgdXRmLTggY2hhcmFjdGVyc1xuICBzdHIgPSBzdHIucmVwbGFjZSgvXFx1MDMwMHxcXHUwMzAxfFxcdTAzMDN8XFx1MDMwOXxcXHUwMzIzL2csICcnKTsgLy8gSHV54buBbiBz4bqvYyBo4buPaSBuZ8OjIG7hurduZ1xuICBzdHIgPSBzdHIucmVwbGFjZSgvXFx1MDJDNnxcXHUwMzA2fFxcdTAzMUIvZywgJycpOyAvLyDDgiwgw4osIMSCLCDGoCwgxq9cbiAgcmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFByb3BlcnR5KGNsYXNzTmFtZSA9ICdmaWVsZHMnLCBkZWZhdWx0VmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQpOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gIHJldHVybiAodGFyZ2V0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwgbmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXRbbmFtZV0gPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShjbGFzc05hbWUsIHRydWUsIHRhcmdldCwgbmFtZSk7XG4gIH07XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkLnV0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vcXVlcnkudXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscy5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9nZW5lcmFsLnV0aWwnO1xuZXhwb3J0ICogZnJvbSAnLi9lcnJvci5oZWxwZXInO1xuIiwiaW1wb3J0IHsgaGFzaCwgdmVyaWZ5IH0gZnJvbSAnYXJnb24yJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkVXRpbHMge1xuICBhc3luYyBjb21wYXJlKHBhc3N3b3JkOiBzdHJpbmcsIGhhc2g6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB2ZXJpZnkoaGFzaCwgcGFzc3dvcmQpO1xuICB9XG5cbiAgYXN5bmMgaGFzaChwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBpZiAoaXNFbXB0eShwYXNzd29yZCkgfHwgcGFzc3dvcmQubGVuZ3RoIDwgNikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycy4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzaChwYXNzd29yZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IElRdWVyeSB9IGZyb20gJ0BsaWJzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IGlzRW1wdHksIGlzTmlsLCBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBRdWVyeVV0aWxzIHtcbiAgYXN5bmMgZ2V0RmlsdGVycyhmaWx0ZXJCeTogUmVjb3JkPHN0cmluZywgYW55Pik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgYW55Pj4ge1xuICAgIGNvbnN0IHF1ZXJ5RmlsdGVycyA9IHsgd2hlcmU6IHt9IH07XG5cbiAgICBpZiAoIWlzRW1wdHkoZmlsdGVyQnkpKSBPYmplY3QuYXNzaWduKHF1ZXJ5RmlsdGVycy53aGVyZSwgZmlsdGVyQnkpO1xuXG4gICAgcmV0dXJuIHF1ZXJ5RmlsdGVycztcbiAgfVxuXG4gIGFzeW5jIGdldE9yZGVyKG9yZGVyQnk6IHN0cmluZyk6IFByb21pc2U8SVF1ZXJ5PiB7XG4gICAgY29uc3QgcXVlcnlPcmRlcjogSVF1ZXJ5ID0ge307XG5cbiAgICBpZiAoIWlzRW1wdHkob3JkZXJCeSkpIHtcbiAgICAgIGlmIChvcmRlckJ5LnRyaW0oKS5jaGFyQXQoMCkgPT09ICctJykge1xuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5T3JkZXIsIHsgb3JkZXJCeTogW29yZGVyQnkudHJpbSgpLnN1YnN0cigxKSwgJ0RFU0MnXSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnlPcmRlciwgeyBvcmRlckJ5OiBbb3JkZXJCeS50cmltKCksICdBU0MnXSB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnlPcmRlcjtcbiAgfVxuXG4gIGFzeW5jIGdldEN1cnNvcihmaXJzdDogbnVtYmVyLCBsYXN0OiBudW1iZXIsIGJlZm9yZTogc3RyaW5nLCBhZnRlcjogc3RyaW5nKTogUHJvbWlzZTxJUXVlcnk+IHtcbiAgICBjb25zdCBxdWVyeUN1cnNvcjogSVF1ZXJ5ID0ge307XG5cbiAgICBpZiAoIWlzTmlsKGZpcnN0KSkgT2JqZWN0LmFzc2lnbihxdWVyeUN1cnNvciwgeyBsaW1pdDogZmlyc3QgfSk7XG5cbiAgICBpZiAoIWlzRW1wdHkoYWZ0ZXIpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5Q3Vyc29yLCB7IGFmdGVyLCBsaW1pdDogZmlyc3QgfSk7XG4gICAgfSBlbHNlIGlmICghaXNFbXB0eShiZWZvcmUpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5Q3Vyc29yLCB7IGJlZm9yZSwgbGltaXQ6IGxhc3QgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5Q3Vyc29yO1xuICB9XG5cbiAgYXN5bmMgYnVpbGRRdWVyeShvcmRlckJ5OiBzdHJpbmcsIGZpcnN0OiBudW1iZXIsIGxhc3Q6IG51bWJlciwgYmVmb3JlOiBzdHJpbmcsIGFmdGVyOiBzdHJpbmcpOiBQcm9taXNlPElRdWVyeT4ge1xuICAgIHJldHVybiBtZXJnZSh7fSwgYXdhaXQgdGhpcy5nZXRPcmRlcihvcmRlckJ5KSwgYXdhaXQgdGhpcy5nZXRDdXJzb3IoZmlyc3QsIGxhc3QsIGJlZm9yZSwgYWZ0ZXIpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5pbXBvcnQgeyBRdWVyeVV0aWxzIH0gZnJvbSAnLi9xdWVyeS51dGlscyc7XG5pbXBvcnQgeyBQYXNzd29yZFV0aWxzIH0gZnJvbSAnLi9wYXNzd29yZC51dGlscyc7XG5cbkBNb2R1bGUoe1xuICBleHBvcnRzOiBbUXVlcnlVdGlscywgUGFzc3dvcmRVdGlsc10sXG4gIHByb3ZpZGVyczogW1F1ZXJ5VXRpbHMsIFBhc3N3b3JkVXRpbHNdLFxufSlcbmV4cG9ydCBjbGFzcyBVdGlsc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgb3BlcmF0b3JzQWxpYXNlcyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuaW1wb3J0IHsgQm9va2luZ01vZGVsIH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvZW50aXRpZXMvYm9va2luZyc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBTZXF1ZWxpemVNb2R1bGUsIFNlcXVlbGl6ZU1vZHVsZU9wdGlvbnMgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlIH0gZnJvbSAnbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL2FkYXB0ZXInO1xuaW1wb3J0IHsgU2VjcmV0c01vZHVsZSB9IGZyb20gJ2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9tb2R1bGUnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNlcXVlbGl6ZU1vZHVsZS5mb3JSb290QXN5bmMoe1xuICAgICAgaW1wb3J0czogW1NlY3JldHNNb2R1bGVdLFxuICAgICAgdXNlRmFjdG9yeTogYXN5bmMgKHNlY3JldHM6IEFic3RyYWN0U2VjcmV0c1NlcnZpY2UpOiBQcm9taXNlPFNlcXVlbGl6ZU1vZHVsZU9wdGlvbnM+ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkaWFsZWN0OiAncG9zdGdyZXMnLFxuICAgICAgICAgIC4uLnNlY3JldHMuYm9va2luZ1NlcnZpY2VEYXRhYmFzZSxcbiAgICAgICAgICBsb2dnaW5nOiBmYWxzZSxcbiAgICAgICAgICB0eXBlVmFsaWRhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBvcGVyYXRvcnNBbGlhc2VzOiBvcGVyYXRvcnNBbGlhc2VzLFxuICAgICAgICAgIG1vZGVsczogW0Jvb2tpbmdNb2RlbF0sXG4gICAgICAgICAgYXV0b0xvYWRNb2RlbHM6IHRydWUsXG4gICAgICAgICAgc3luY2hyb25pemU6IHRydWUsXG4gICAgICAgICAgLy8gc3luYzoge1xuICAgICAgICAgIC8vICAgZm9yY2U6IHRydWUsXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgcmF3OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVmaW5lOiB7XG4gICAgICAgICAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICAgICAgICAgICAgdW5kZXJzY29yZWQ6IHRydWUsXG4gICAgICAgICAgICB2ZXJzaW9uOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGlhbGVjdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNoYXJzZXQ6ICd1dGY4JyxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGluamVjdDogW0Fic3RyYWN0U2VjcmV0c1NlcnZpY2VdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBCb29raW5nRGF0YWJhc2VNb2R1bGUge31cbiIsImV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5cbmV4cG9ydCAqIGZyb20gJy4vbWVyY2hhbnQnO1xuXG5leHBvcnQgKiBmcm9tICcuL2Jvb2tpbmcnO1xuXG5leHBvcnQgKiBmcm9tICcuL25vdGlmaWNhdGlvbic7XG4iLCJpbXBvcnQgeyBvcGVyYXRvcnNBbGlhc2VzIH0gZnJvbSAnQGxpYnMvY29yZSc7XG5pbXBvcnQge1xuICBCcmFuY2hNb2RlbCxcbiAgR3JvdXBNb2RlbCxcbiAgSW1hZ2VNb2RlbCxcbiAgTWVyY2hhbnRNb2RlbCxcbiAgU2VydmVJbWFnZU1vZGVsLFxuICBTZXJ2aWNlTW9kZWwsXG59IGZyb20gJ0BsaWJzL2RhdGFiYXNlL2VudGl0aWVzJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFNlcXVlbGl6ZU1vZHVsZSwgU2VxdWVsaXplTW9kdWxlT3B0aW9ucyB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcbmltcG9ydCB7IEFic3RyYWN0U2VjcmV0c1NlcnZpY2UgfSBmcm9tICdsaWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvYWRhcHRlcic7XG5pbXBvcnQgeyBTZWNyZXRzTW9kdWxlIH0gZnJvbSAnbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL21vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2VxdWVsaXplTW9kdWxlLmZvclJvb3RBc3luYyh7XG4gICAgICBpbXBvcnRzOiBbU2VjcmV0c01vZHVsZV0sXG4gICAgICB1c2VGYWN0b3J5OiBhc3luYyAoc2VjcmV0czogQWJzdHJhY3RTZWNyZXRzU2VydmljZSk6IFByb21pc2U8U2VxdWVsaXplTW9kdWxlT3B0aW9ucz4gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRpYWxlY3Q6ICdwb3N0Z3JlcycsXG4gICAgICAgICAgLi4uc2VjcmV0cy5tZXJjaGFudFNlcnZpY2VEYXRhYmFzZSxcbiAgICAgICAgICBsb2dnaW5nOiBmYWxzZSxcbiAgICAgICAgICB0eXBlVmFsaWRhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBvcGVyYXRvcnNBbGlhc2VzOiBvcGVyYXRvcnNBbGlhc2VzLFxuICAgICAgICAgIG1vZGVsczogW01lcmNoYW50TW9kZWwsIEJyYW5jaE1vZGVsLCBHcm91cE1vZGVsLCBTZXJ2aWNlTW9kZWwsIEltYWdlTW9kZWwsIFNlcnZlSW1hZ2VNb2RlbF0sXG4gICAgICAgICAgYXV0b0xvYWRNb2RlbHM6IHRydWUsXG4gICAgICAgICAgc3luY2hyb25pemU6IHRydWUsXG4gICAgICAgICAgLy8gc3luYzoge1xuICAgICAgICAgIC8vICAgZm9yY2U6IHRydWUsXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgcmF3OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVmaW5lOiB7XG4gICAgICAgICAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICAgICAgICAgICAgdW5kZXJzY29yZWQ6IHRydWUsXG4gICAgICAgICAgICB2ZXJzaW9uOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGlhbGVjdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNoYXJzZXQ6ICd1dGY4JyxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGluamVjdDogW0Fic3RyYWN0U2VjcmV0c1NlcnZpY2VdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNZXJjaGFudERhdGFiYXNlTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBvcGVyYXRvcnNBbGlhc2VzIH0gZnJvbSAnQGxpYnMvY29yZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25Nb2RlbCB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlL2VudGl0aWVzJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFNlcXVlbGl6ZU1vZHVsZSwgU2VxdWVsaXplTW9kdWxlT3B0aW9ucyB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcbmltcG9ydCB7IEFic3RyYWN0U2VjcmV0c1NlcnZpY2UgfSBmcm9tICdsaWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvYWRhcHRlcic7XG5pbXBvcnQgeyBTZWNyZXRzTW9kdWxlIH0gZnJvbSAnbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL21vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2VxdWVsaXplTW9kdWxlLmZvclJvb3RBc3luYyh7XG4gICAgICBpbXBvcnRzOiBbU2VjcmV0c01vZHVsZV0sXG4gICAgICB1c2VGYWN0b3J5OiBhc3luYyAoc2VjcmV0czogQWJzdHJhY3RTZWNyZXRzU2VydmljZSk6IFByb21pc2U8U2VxdWVsaXplTW9kdWxlT3B0aW9ucz4gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRpYWxlY3Q6ICdwb3N0Z3JlcycsXG4gICAgICAgICAgLi4uc2VjcmV0cy5ub3RpZmljYXRpb25TZXJ2aWNlRGF0YWJhc2UsXG4gICAgICAgICAgbG9nZ2luZzogZmFsc2UsXG4gICAgICAgICAgdHlwZVZhbGlkYXRpb246IHRydWUsXG4gICAgICAgICAgb3BlcmF0b3JzQWxpYXNlczogb3BlcmF0b3JzQWxpYXNlcyxcbiAgICAgICAgICBtb2RlbHM6IFtOb3RpZmljYXRpb25Nb2RlbF0sXG4gICAgICAgICAgYXV0b0xvYWRNb2RlbHM6IHRydWUsXG4gICAgICAgICAgc3luY2hyb25pemU6IHRydWUsXG4gICAgICAgICAgc3luYzoge1xuICAgICAgICAgICAgZm9yY2U6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgcmF3OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVmaW5lOiB7XG4gICAgICAgICAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICAgICAgICAgICAgdW5kZXJzY29yZWQ6IHRydWUsXG4gICAgICAgICAgICB2ZXJzaW9uOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGlhbGVjdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNoYXJzZXQ6ICd1dGY4JyxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGluamVjdDogW0Fic3RyYWN0U2VjcmV0c1NlcnZpY2VdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25EYXRhYmFzZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgb3BlcmF0b3JzQWxpYXNlcyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuaW1wb3J0IHsgRGV2aWNlTW9kZWwsIE1lcmNoYW50VXNlck1vZGVsLCBVc2VyTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBTZXF1ZWxpemVNb2R1bGUsIFNlcXVlbGl6ZU1vZHVsZU9wdGlvbnMgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlIH0gZnJvbSAnbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL2FkYXB0ZXInO1xuaW1wb3J0IHsgU2VjcmV0c01vZHVsZSB9IGZyb20gJ2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9tb2R1bGUnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNlcXVlbGl6ZU1vZHVsZS5mb3JSb290QXN5bmMoe1xuICAgICAgaW1wb3J0czogW1NlY3JldHNNb2R1bGVdLFxuICAgICAgdXNlRmFjdG9yeTogYXN5bmMgKHNlY3JldHM6IEFic3RyYWN0U2VjcmV0c1NlcnZpY2UpOiBQcm9taXNlPFNlcXVlbGl6ZU1vZHVsZU9wdGlvbnM+ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkaWFsZWN0OiAncG9zdGdyZXMnLFxuICAgICAgICAgIC4uLnNlY3JldHMudXNlclNlcnZpY2VEYXRhYmFzZSxcbiAgICAgICAgICBsb2dnaW5nOiBmYWxzZSxcbiAgICAgICAgICB0eXBlVmFsaWRhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBvcGVyYXRvcnNBbGlhc2VzOiBvcGVyYXRvcnNBbGlhc2VzLFxuICAgICAgICAgIG1vZGVsczogW1VzZXJNb2RlbCwgRGV2aWNlTW9kZWwsIE1lcmNoYW50VXNlck1vZGVsXSxcbiAgICAgICAgICBhdXRvTG9hZE1vZGVsczogdHJ1ZSxcbiAgICAgICAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgICAgICAgICAvLyBzeW5jOiB7XG4gICAgICAgICAgLy8gICBmb3JjZTogdHJ1ZSxcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICByYXc6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWZpbmU6IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gICAgICAgICAgICB1bmRlcnNjb3JlZDogdHJ1ZSxcbiAgICAgICAgICAgIHZlcnNpb246IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkaWFsZWN0T3B0aW9uczoge1xuICAgICAgICAgICAgY2hhcnNldDogJ3V0ZjgnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgaW5qZWN0OiBbQWJzdHJhY3RTZWNyZXRzU2VydmljZV0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJEYXRhYmFzZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29sdW1uLCBEYXRhVHlwZSwgTW9kZWwgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlTW9kZWw8VD4gZXh0ZW5kcyBNb2RlbDxUPiB7XG4gIEBDb2x1bW4oe1xuICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSLFxuICB9KVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkRBVEUsXG4gICAgZGVmYXVsdFZhbHVlOiBEYXRhVHlwZS5OT1csXG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgfSlcbiAgY3JlYXRlZEF0Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkRBVEUsXG4gICAgZGVmYXVsdFZhbHVlOiBEYXRhVHlwZS5OT1csXG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgfSlcbiAgdXBkYXRlZEF0Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkRBVEUsXG4gICAgYWxsb3dOdWxsOiB0cnVlLFxuICB9KVxuICBkZWxldGVkQXQ/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuSU5URUdFUixcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIGRlZmF1bHRWYWx1ZTogMCxcbiAgfSlcbiAgdmVyc2lvbj86IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IHRvVUZUOE5vblNwZWNpYWxDaGFyYWN0ZXJzIH0gZnJvbSAnQGxpYnMvY29yZSc7XG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcy9iYXNlLm1vZGVsJztcbmltcG9ydCB7IEVCb29raW5nU3RhdHVzIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3MvY29tbW9ucyc7XG5pbXBvcnQgeyBCZWZvcmVDcmVhdGUsIEJlZm9yZVVwZGF0ZSwgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ2Jvb2tpbmcnLFxuICB0YWJsZU5hbWU6ICdib29raW5ncycsXG4gIHVuZGVyc2NvcmVkOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBCb29raW5nTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8Qm9va2luZ01vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHN0YXR1cz86IEVCb29raW5nU3RhdHVzO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHNlcnZpY2VOYW1lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHNlcnZpY2VJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICB1c2VySWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgdXNlckVtYWlsPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHVzZXJQaG9uZU51bWJlcj86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBtZXJjaGFudElkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGJyYW5jaElkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHN0YXJ0VGltZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBlbmRUaW1lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIG5vdGU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgY2FuY2VsUmVhc29uPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGJvb2tpbmdEYXRlPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGR1cmF0aW9uSG91cj86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBkdXJhdGlvbk1pbnV0ZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBkdXJhdGlvbj86IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5URVhULFxuICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgfSlcbiAgc2VhcmNoPzogc3RyaW5nO1xuXG4gIEBCZWZvcmVDcmVhdGVcbiAgQEJlZm9yZVVwZGF0ZVxuICBzdGF0aWMgYXN5bmMgdXBkYXRlU2VhcmNoKG1vZGVsOiBCb29raW5nTW9kZWwpIHtcbiAgICBjb25zdCBjb2x1bW5zVG9Db25jYXRlbmF0ZSA9IFtcbiAgICAgICdzdGF0dXMnLFxuICAgICAgJ2NhbmNlbFJlYXNvbicsXG4gICAgICAnc2VydmljZU5hbWUnLFxuICAgICAgJ3N0YXJ0VGltZScsXG4gICAgICAnZW5kVGltZScsXG4gICAgICAnbm90ZScsXG4gICAgICAnYm9va2luZ0RhdGUnLFxuICAgIF07XG4gICAgY29uc3QgY29uY2F0ZW5hdGVkVmFsdWVzID0gY29sdW1uc1RvQ29uY2F0ZW5hdGVcbiAgICAgIC5tYXAoKGNvbHVtbk5hbWUpID0+IChtb2RlbC5nZXQoY29sdW1uTmFtZSkgPyBtb2RlbC5nZXQoY29sdW1uTmFtZSkgOiAnICcpKVxuICAgICAgLmpvaW4oJyAnKTtcblxuICAgIG1vZGVsLnNldERhdGFWYWx1ZSgnc2VhcmNoJywgY29uY2F0ZW5hdGVkVmFsdWVzLmNvbmNhdCgnICcsIHRvVUZUOE5vblNwZWNpYWxDaGFyYWN0ZXJzKGNvbmNhdGVuYXRlZFZhbHVlcykpKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9ib29raW5nLm1vZGVsJztcbiIsIi8vIHVzZXIgc2VydmljZVxuZXhwb3J0ICogZnJvbSAnLi91c2VyJztcblxuLy8gbWVyY2hhbnQgc2VydmljZVxuZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudCc7XG5cbi8vIG1lcmNoYW50IHNlcnZpY2VcbmV4cG9ydCAqIGZyb20gJy4vYm9va2luZyc7XG5cbi8vIG1lcmNoYW50IHNlcnZpY2VcbmV4cG9ydCAqIGZyb20gJy4vbm90aWZpY2F0aW9uJztcbiIsImltcG9ydCB7IEJlZm9yZUNyZWF0ZSwgQmVmb3JlVXBkYXRlLCBDb2x1bW4sIERhdGFUeXBlLCBUYWJsZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCB7IHRvVUZUOE5vblNwZWNpYWxDaGFyYWN0ZXJzIH0gZnJvbSAnQGxpYnMvY29yZSc7XG5cbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xuXG5AVGFibGUoe1xuICBtb2RlbE5hbWU6ICdicmFuY2gnLFxuICB0YWJsZU5hbWU6ICdicmFuY2hlcycsXG4gIHVuZGVyc2NvcmVkOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBCcmFuY2hNb2RlbCBleHRlbmRzIEJhc2VNb2RlbDxCcmFuY2hNb2RlbD4ge1xuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiwgYWxsb3dOdWxsOiBmYWxzZSB9KVxuICBtZXJjaGFudElkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgYWRkcmVzcz86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBwaG9uZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBjaXR5Q29kZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBkaXN0cmljdENvZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgd2FyZENvZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgY2l0eT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBkaXN0cmljdD86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICB3YXJkPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkZMT0FULFxuICAgIGRlZmF1bHRWYWx1ZTogMCxcbiAgfSlcbiAgbGF0aXR1ZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuRkxPQVQsXG4gICAgZGVmYXVsdFZhbHVlOiAwLFxuICB9KVxuICBsb25naXR1ZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuR0VPTUVUUlkoJ1BPSU5UJyksXG4gICAgYWxsb3dOdWxsOiB0cnVlLFxuICAgIC8vIGRlZmF1bHRWYWx1ZTogeyB0eXBlOiAnUG9pbnQnLCBjb29yZGluYXRlczogWzAsIDBdIH0sXG4gIH0pXG4gIGNvb3JkaW5hdGU6IHsgdHlwZTogJ1BvaW50JzsgY29vcmRpbmF0ZXM6IFtudW1iZXIsIG51bWJlcl0gfTtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5URVhULFxuICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgfSlcbiAgc2VhcmNoPzogc3RyaW5nO1xuXG4gIEBCZWZvcmVDcmVhdGVcbiAgQEJlZm9yZVVwZGF0ZVxuICBzdGF0aWMgYXN5bmMgdXBkYXRlU2VhcmNoKG1vZGVsOiBCcmFuY2hNb2RlbCkge1xuICAgIGNvbnN0IGNvbHVtbnNUb0NvbmNhdGVuYXRlID0gWyduYW1lJywgJ3Bob25lJywgJ2FkZHJlc3MnLCAnY2l0eScsICdkaXN0cmljdCcsICd3YXJkJ107XG4gICAgY29uc3QgY29uY2F0ZW5hdGVkVmFsdWVzID0gY29sdW1uc1RvQ29uY2F0ZW5hdGVcbiAgICAgIC5tYXAoKGNvbHVtbk5hbWUpID0+IChtb2RlbC5nZXQoY29sdW1uTmFtZSkgPyBtb2RlbC5nZXQoY29sdW1uTmFtZSkgOiAnICcpKVxuICAgICAgLmpvaW4oJyAnKTtcblxuICAgIG1vZGVsLnNldERhdGFWYWx1ZSgnc2VhcmNoJywgY29uY2F0ZW5hdGVkVmFsdWVzLmNvbmNhdCgnICcsIHRvVUZUOE5vblNwZWNpYWxDaGFyYWN0ZXJzKGNvbmNhdGVuYXRlZFZhbHVlcykpKTtcbiAgfVxuXG4gIEBCZWZvcmVDcmVhdGVcbiAgQEJlZm9yZVVwZGF0ZVxuICBzdGF0aWMgYXN5bmMgdXBzZXJ0Q29vcmRpbmF0ZShtb2RlbDogQnJhbmNoTW9kZWwpIHtcbiAgICBpZiAobW9kZWwubGF0aXR1ZGUgJiYgbW9kZWwubG9uZ2l0dWRlKSB7XG4gICAgICBtb2RlbC5jb29yZGluYXRlID0ge1xuICAgICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgICBjb29yZGluYXRlczogW21vZGVsLmxhdGl0dWRlLCBtb2RlbC5sb25naXR1ZGVdLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEJlZm9yZUNyZWF0ZSwgQmVmb3JlVXBkYXRlLCBDb2x1bW4sIERhdGFUeXBlLCBUYWJsZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCB7IHRvVUZUOE5vblNwZWNpYWxDaGFyYWN0ZXJzIH0gZnJvbSAnQGxpYnMvY29yZSc7XG5cbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xuXG5AVGFibGUoe1xuICBtb2RlbE5hbWU6ICdncm91cCcsXG4gIHRhYmxlTmFtZTogJ2dyb3VwcycsXG4gIHVuZGVyc2NvcmVkOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBHcm91cE1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsPEdyb3VwTW9kZWw+IHtcbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIsIGFsbG93TnVsbDogZmFsc2UgfSlcbiAgbWVyY2hhbnRJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBza3U/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgY29kZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGltYWdlPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLlRFWFQsXG4gICAgYWxsb3dOdWxsOiB0cnVlLFxuICB9KVxuICBzZWFyY2g/OiBzdHJpbmc7XG5cbiAgQEJlZm9yZUNyZWF0ZVxuICBAQmVmb3JlVXBkYXRlXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVTZWFyY2gobW9kZWw6IEdyb3VwTW9kZWwpIHtcbiAgICBjb25zdCBjb2x1bW5zVG9Db25jYXRlbmF0ZSA9IFsnbmFtZScsICdjb2RlJywgJ3NrdScsICdkZXNjcmlwdGlvbiddO1xuICAgIGNvbnN0IGNvbmNhdGVuYXRlZFZhbHVlcyA9IGNvbHVtbnNUb0NvbmNhdGVuYXRlXG4gICAgICAubWFwKChjb2x1bW5OYW1lKSA9PiAobW9kZWwuZ2V0KGNvbHVtbk5hbWUpID8gbW9kZWwuZ2V0KGNvbHVtbk5hbWUpIDogJyAnKSlcbiAgICAgIC5qb2luKCcgJyk7XG5cbiAgICBtb2RlbC5zZXREYXRhVmFsdWUoJ3NlYXJjaCcsIGNvbmNhdGVuYXRlZFZhbHVlcy5jb25jYXQoJyAnLCB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyhjb25jYXRlbmF0ZWRWYWx1ZXMpKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbHVtbiwgRGF0YVR5cGUsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAnaW1hZ2UnLFxuICB0YWJsZU5hbWU6ICdpbWFnZXMnLFxuICB1bmRlcnNjb3JlZDogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VNb2RlbCBleHRlbmRzIEJhc2VNb2RlbDxJbWFnZU1vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG4iLCIvLyBzZXF1ZWxpemVcbmV4cG9ydCAqIGZyb20gJy4vbWVyY2hhbnQubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9icmFuY2gubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9ncm91cC5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2UubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9pbWFnZS5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZlLWltYWdlLm1vZGVsJztcbiIsImltcG9ydCB7IEJlZm9yZUNyZWF0ZSwgQmVmb3JlVXBkYXRlLCBDb2x1bW4sIERhdGFUeXBlLCBUYWJsZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCB7IHRvVUZUOE5vblNwZWNpYWxDaGFyYWN0ZXJzIH0gZnJvbSAnQGxpYnMvY29yZSc7XG5cbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xuXG5AVGFibGUoe1xuICBtb2RlbE5hbWU6ICdtZXJjaGFudCcsXG4gIHRhYmxlTmFtZTogJ21lcmNoYW50cycsXG4gIHVuZGVyc2NvcmVkOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBNZXJjaGFudE1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsPE1lcmNoYW50TW9kZWw+IHtcbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgdXNlcklkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgYWRkcmVzcz86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBwaG9uZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBjaXR5Q29kZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBkaXN0cmljdENvZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgd2FyZENvZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgY2l0eT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBkaXN0cmljdD86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICB3YXJkPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkZMT0FULFxuICAgIGRlZmF1bHRWYWx1ZTogMCxcbiAgfSlcbiAgbGF0aXR1ZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuRkxPQVQsXG4gICAgZGVmYXVsdFZhbHVlOiAwLFxuICB9KVxuICBsb25naXR1ZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuR0VPTUVUUlkoJ1BPSU5UJyksXG4gICAgYWxsb3dOdWxsOiB0cnVlLFxuICAgIC8vIGRlZmF1bHRWYWx1ZTogeyB0eXBlOiAnUG9pbnQnLCBjb29yZGluYXRlczogWzAsIDBdIH0sXG4gIH0pXG4gIGNvb3JkaW5hdGU6IHsgdHlwZTogJ1BvaW50JzsgY29vcmRpbmF0ZXM6IFtudW1iZXIsIG51bWJlcl0gfTtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5URVhULFxuICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgfSlcbiAgc2VhcmNoPzogc3RyaW5nO1xuXG4gIEBCZWZvcmVDcmVhdGVcbiAgQEJlZm9yZVVwZGF0ZVxuICBzdGF0aWMgYXN5bmMgdXBkYXRlU2VhcmNoKG1vZGVsOiBNZXJjaGFudE1vZGVsKSB7XG4gICAgY29uc3QgY29sdW1uc1RvQ29uY2F0ZW5hdGUgPSBbJ25hbWUnLCAncGhvbmUnLCAnYWRkcmVzcycsICdjaXR5JywgJ2Rpc3RyaWN0JywgJ3dhcmQnXTtcbiAgICBjb25zdCBjb25jYXRlbmF0ZWRWYWx1ZXMgPSBjb2x1bW5zVG9Db25jYXRlbmF0ZVxuICAgICAgLm1hcCgoY29sdW1uTmFtZSkgPT4gKG1vZGVsLmdldChjb2x1bW5OYW1lKSA/IG1vZGVsLmdldChjb2x1bW5OYW1lKSA6ICcgJykpXG4gICAgICAuam9pbignICcpO1xuXG4gICAgbW9kZWwuc2V0RGF0YVZhbHVlKCdzZWFyY2gnLCBjb25jYXRlbmF0ZWRWYWx1ZXMuY29uY2F0KCcgJywgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMoY29uY2F0ZW5hdGVkVmFsdWVzKSkpO1xuICB9XG5cbiAgQEJlZm9yZUNyZWF0ZVxuICBAQmVmb3JlVXBkYXRlXG4gIHN0YXRpYyBhc3luYyB1cHNlcnRDb29yZGluYXRlKG1vZGVsOiBNZXJjaGFudE1vZGVsKSB7XG4gICAgaWYgKG1vZGVsLmxhdGl0dWRlICYmIG1vZGVsLmxvbmdpdHVkZSkge1xuICAgICAgbW9kZWwuY29vcmRpbmF0ZSA9IHtcbiAgICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgICAgY29vcmRpbmF0ZXM6IFttb2RlbC5sYXRpdHVkZSwgbW9kZWwubG9uZ2l0dWRlXSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb2x1bW4sIERhdGFUeXBlLCBUYWJsZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcblxuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vYmFzZS5tb2RlbCc7XG5cbmltcG9ydCB7IEVJbWFnZVR5cGUsIEVTZXJ2ZUltYWdlVHlwZSB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvZHRvcy9jb21tb24nO1xuXG5AVGFibGUoe1xuICBtb2RlbE5hbWU6ICdzZXJ2ZV9pbWFnZScsXG4gIHRhYmxlTmFtZTogJ3NlcnZlX2ltYWdlcycsXG4gIHVuZGVyc2NvcmVkOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBTZXJ2ZUltYWdlTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8U2VydmVJbWFnZU1vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGltYWdlSWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuU01BTExJTlQgfSlcbiAgc2VydmVUeXBlOiBFU2VydmVJbWFnZVR5cGU7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlNNQUxMSU5UIH0pXG4gIHR5cGU6IEVJbWFnZVR5cGU7XG59XG4iLCJpbXBvcnQgeyBFU2VydmljZVNob3dUeXBlLCBFU2VydmljZVR5cGUgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy9zZXJ2aWNlJztcbmltcG9ydCB7IEJlZm9yZUNyZWF0ZSwgQmVmb3JlVXBkYXRlLCBDb2x1bW4sIERhdGFUeXBlLCBUYWJsZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCB7IHRvVUZUOE5vblNwZWNpYWxDaGFyYWN0ZXJzIH0gZnJvbSAnQGxpYnMvY29yZSc7XG5cbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xuXG5AVGFibGUoe1xuICBtb2RlbE5hbWU6ICdzZXJ2aWNlJyxcbiAgdGFibGVOYW1lOiAnc2VydmljZXMnLFxuICB1bmRlcnNjb3JlZDogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgU2VydmljZU1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsPFNlcnZpY2VNb2RlbD4ge1xuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiwgYWxsb3dOdWxsOiBmYWxzZSB9KVxuICBncm91cElkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIG1lcmNoYW50SWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLkRPVUJMRSwgZGVmYXVsdFZhbHVlOiAwIH0pXG4gIHByaWNlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5ET1VCTEUsIGRlZmF1bHRWYWx1ZTogMCB9KVxuICBpbml0aWFsUHJpY2U/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZHVyYXRpb25Ib3VyPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGR1cmF0aW9uTWludXRlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHNrdT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBjb2RlPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgaW1hZ2U/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgdHlwZT86IEVTZXJ2aWNlVHlwZTtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBzaG93VHlwZT86IEVTZXJ2aWNlU2hvd1R5cGU7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLkJPT0xFQU4gfSlcbiAgY2FuUHJpbnRhYmxlSW52b2ljZT86IGJvb2xlYW47XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuVEVYVCxcbiAgICBhbGxvd051bGw6IHRydWUsXG4gIH0pXG4gIHNlYXJjaD86IHN0cmluZztcblxuICBAQmVmb3JlQ3JlYXRlXG4gIEBCZWZvcmVVcGRhdGVcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVNlYXJjaChtb2RlbDogU2VydmljZU1vZGVsKSB7XG4gICAgY29uc3QgY29sdW1uc1RvQ29uY2F0ZW5hdGUgPSBbJ25hbWUnLCAnY29kZScsICdza3UnLCAncHJpY2UnLCAnaW5pdGlhbFByaWNlJywgJ2Rlc2NyaXB0aW9uJ107XG4gICAgY29uc3QgY29uY2F0ZW5hdGVkVmFsdWVzID0gY29sdW1uc1RvQ29uY2F0ZW5hdGVcbiAgICAgIC5tYXAoKGNvbHVtbk5hbWUpID0+IChtb2RlbC5nZXQoY29sdW1uTmFtZSkgPyBtb2RlbC5nZXQoY29sdW1uTmFtZSkgOiAnICcpKVxuICAgICAgLmpvaW4oJyAnKTtcblxuICAgIG1vZGVsLnNldERhdGFWYWx1ZSgnc2VhcmNoJywgY29uY2F0ZW5hdGVkVmFsdWVzLmNvbmNhdCgnICcsIHRvVUZUOE5vblNwZWNpYWxDaGFyYWN0ZXJzKGNvbmNhdGVuYXRlZFZhbHVlcykpKTtcbiAgfVxufVxuIiwiLy8gc2VxdWVsaXplXG5leHBvcnQgKiBmcm9tICcuL25vdGlmaWNhdGlvbi5tb2RlbCc7XG4iLCJpbXBvcnQgeyBDb2x1bW4sIERhdGFUeXBlLCBUYWJsZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcblxuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vYmFzZS5tb2RlbCc7XG5cbmltcG9ydCB7IEVOb3RpZmljYXRpb25UeXBlIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zJztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAnbm90aWZpY2F0aW9uJyxcbiAgdGFibGVOYW1lOiAnbm90aWZpY2F0aW9ucycsXG4gIHVuZGVyc2NvcmVkOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25Nb2RlbCBleHRlbmRzIEJhc2VNb2RlbDxOb3RpZmljYXRpb25Nb2RlbD4ge1xuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBzZW5kZXJJZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHRpdGxlRW46IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICB0aXRsZVZpOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgYm9keUVuOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgYm9keVZpOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgdHlwZTogRU5vdGlmaWNhdGlvblR5cGU7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZGF0YV9qc29uOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBFRGV2aWNlT3MgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy9kZXZpY2UnO1xuaW1wb3J0IHsgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xuXG5AVGFibGUoe1xuICBtb2RlbE5hbWU6ICdkZXZpY2UnLFxuICB0YWJsZU5hbWU6ICdkZXZpY2VzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIERldmljZU1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsPERldmljZU1vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHVzZXJJZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIG9zOiBFRGV2aWNlT3M7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZGV2aWNlSWQ6IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICB0b2tlbjogc3RyaW5nO1xufVxuIiwiLy8gc2VxdWVsaXplXG5leHBvcnQgKiBmcm9tICcuL3VzZXIubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9kZXZpY2UubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudC11c2VyLm1vZGVsJztcbiIsImltcG9ydCB7IEVVc2VyUm9sZSwgRVVzZXJTdGF0dXMgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy9jb21tb25zJztcbmltcG9ydCB7IFRhYmxlLCBDb2x1bW4sIERhdGFUeXBlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAnbWVyY2hhbnRfdXNlcicsXG4gIHRhYmxlTmFtZTogJ21lcmNoYW50X3VzZXJzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIE1lcmNoYW50VXNlck1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsPE1lcmNoYW50VXNlck1vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHJvbGU/OiBFVXNlclJvbGU7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgc3RhdHVzPzogRVVzZXJTdGF0dXM7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgdXNlcklkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgYnJhbmNoSWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgbWVyY2hhbnRJZD86IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IEVDdXN0b21lckxldmVsLCBFVXNlckdlbmRlciwgRVVzZXJSb2xlLCBFVXNlclN0YXR1cyB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL2NvbW1vbnMnO1xuaW1wb3J0IHsgaGFzaCB9IGZyb20gJ2FyZ29uMic7XG5pbXBvcnQgeyBCZWZvcmVDcmVhdGUsIEJlZm9yZVVwZGF0ZSwgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAndXNlcicsXG4gIHRhYmxlTmFtZTogJ3VzZXJzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJNb2RlbCBleHRlbmRzIEJhc2VNb2RlbDxVc2VyTW9kZWw+IHtcbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZW1haWw/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgcm9sZT86IEVVc2VyUm9sZTtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBzdGF0dXM/OiBFVXNlclN0YXR1cztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBnZW5kZXI/OiBFVXNlckdlbmRlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBmdWxsTmFtZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuQk9PTEVBTiB9KVxuICBpc1JldGFpbEN1c3RvbWVyPzogYm9vbGVhbjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBjb250YWN0Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHBob25lTnVtYmVyPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGRvYkRheT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBkb2JNb250aD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBkb2JZZWFyPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIG9jY3VwYXRpb24/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgYXZhdGFyPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGFkZHJlc3M/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgY2l0eUNvZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHdhcmRDb2RlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGxldmVsPzogRUN1c3RvbWVyTGV2ZWw7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgcmVmZXJyZXI/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgcmVmZXJyZXJDb2RlPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGN1c3RvbWVyQ29kZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBmYWNlYm9vaz86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICB6YWxvUGhvbmU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgaGVpZ2h0PzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHdlaWdodD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBtZW1iZXJDYXJkTm8/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgY29tcGFueT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICB0YXhObz86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBub3RlPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHJlbGF0ZWRVc2VyPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHJlbGF0ZWRVc2VyUm9sZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICByZWxhdGVkVXNlclBob25lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGJyYW5jaElkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIG1lcmNoYW50SWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuRkxPQVQsXG4gICAgZGVmYXVsdFZhbHVlOiAwLFxuICB9KVxuICBsYXRpdHVkZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5GTE9BVCxcbiAgICBkZWZhdWx0VmFsdWU6IDAsXG4gIH0pXG4gIGxvbmdpdHVkZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5HRU9NRVRSWSgnUE9JTlQnKSxcbiAgICBhbGxvd051bGw6IHRydWUsXG4gIH0pXG4gIGNvb3JkaW5hdGU6IHsgdHlwZTogJ1BvaW50JzsgY29vcmRpbmF0ZXM6IFtudW1iZXIsIG51bWJlcl0gfTtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5URVhULFxuICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgfSlcbiAgc2VhcmNoPzogc3RyaW5nO1xuXG4gIEBCZWZvcmVDcmVhdGVcbiAgQEJlZm9yZVVwZGF0ZVxuICBzdGF0aWMgYXN5bmMgaGFzaFBhc3N3b3JkKHVzZXI6IFVzZXJNb2RlbCkge1xuICAgIGlmICghdXNlci5wYXNzd29yZCkgcmV0dXJuO1xuICAgIHVzZXIucGFzc3dvcmQgPSBhd2FpdCBoYXNoKHVzZXIucGFzc3dvcmQpO1xuICB9XG5cbiAgQEJlZm9yZUNyZWF0ZVxuICBAQmVmb3JlVXBkYXRlXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVTZWFyY2gobW9kZWw6IFVzZXJNb2RlbCkge1xuICAgIGNvbnN0IGNvbHVtbnNUb0NvbmNhdGVuYXRlID0gWydlbWFpbCcsICdmdWxsTmFtZScsICdjb250YWN0JywgJ3Bob25lTnVtYmVyJywgJ2FkZHJlc3MnXTtcbiAgICBjb25zdCBjb25jYXRlbmF0ZWRWYWx1ZXMgPSBjb2x1bW5zVG9Db25jYXRlbmF0ZVxuICAgICAgLm1hcCgoY29sdW1uTmFtZSkgPT4gKG1vZGVsLmdldChjb2x1bW5OYW1lKSA/IG1vZGVsLmdldChjb2x1bW5OYW1lKSA6ICcgJykpXG4gICAgICAuam9pbignICcpO1xuXG4gICAgbW9kZWwuc2V0RGF0YVZhbHVlKCdzZWFyY2gnLCBjb25jYXRlbmF0ZWRWYWx1ZXMuY29uY2F0KCcgJywgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMoY29uY2F0ZW5hdGVkVmFsdWVzKSkpO1xuICB9XG5cbiAgQEJlZm9yZUNyZWF0ZVxuICBAQmVmb3JlVXBkYXRlXG4gIHN0YXRpYyBhc3luYyB1cHNlcnRDb29yZGluYXRlKG1vZGVsOiBVc2VyTW9kZWwpIHtcbiAgICBpZiAobW9kZWwubGF0aXR1ZGUgJiYgbW9kZWwubG9uZ2l0dWRlKSB7XG4gICAgICBtb2RlbC5jb29yZGluYXRlID0ge1xuICAgICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgICBjb29yZGluYXRlczogW21vZGVsLmxhdGl0dWRlLCBtb2RlbC5sb25naXR1ZGVdLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vY29ubmVjdGlvbic7XG5cbmV4cG9ydCAqIGZyb20gJy4vZW50aXRpZXMnO1xuXG5leHBvcnQgKiBmcm9tICcuL3JlcG9zaXRvcmllcyc7XG4iLCJpbXBvcnQgeyBMSU1JVCwgUEFHRSB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uUHJvdG8gfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzJztcbmltcG9ydCB7IElGaW5kQW5kUGFnaW5hdGVPcHRpb25zLCBJUGFnaW5hdGlvblJlcyB9IGZyb20gJ0BsaWJzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge1xuICBBdHRyaWJ1dGVzLFxuICBDb3VudE9wdGlvbnMsXG4gIENyZWF0ZU9wdGlvbnMsXG4gIEZpbmRBbmRDb3VudE9wdGlvbnMsXG4gIEZpbmRPcHRpb25zLFxuICBVcGRhdGVPcHRpb25zLFxuICBXaGVyZU9wdGlvbnMsXG59IGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBNb2RlbCwgUmVwb3NpdG9yeSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcblxuZXhwb3J0IGNsYXNzIEJhc2VSZXBvc2l0b3J5PFQgZXh0ZW5kcyBNb2RlbD4ge1xuICBjb25zdHJ1Y3RvcihyZWFkb25seSBtb2RlbDogUmVwb3NpdG9yeTxUPikge31cblxuICBhc3luYyBmaW5kKG9wdGlvbnM/OiBGaW5kT3B0aW9uczxUPik6IFByb21pc2U8VFtdPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kZWwuZmluZEFsbChvcHRpb25zKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRPbmUob3B0aW9ucz86IEZpbmRPcHRpb25zPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kZWwuZmluZE9uZShvcHRpb25zKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRCeUlkKGlkOiBudW1iZXIsIG9wdGlvbnM/OiBGaW5kT3B0aW9uczxUPik6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeVBrKGlkLCBvcHRpb25zKTtcbiAgfVxuXG4gIGFzeW5jIHBhZ2luYXRlKFxuICAgIG9wdGlvbnM/OiBXaGVyZU9wdGlvbnM8VD4sXG4gICAgcGFnZSA9IFBBR0UsXG4gICAgbGltaXQgPSBMSU1JVCxcbiAgICBvcHRzPzogRmluZE9wdGlvbnM8VD4sXG4gICk6IFByb21pc2U8SVBhZ2luYXRpb25SZXM8VD4+IHtcbiAgICBjb25zdCBvZmZzZXQgPSAocGFnZSAtIDEpICogbGltaXQ7XG4gICAgY29uc3QgeyByb3dzLCBjb3VudCB9ID0gYXdhaXQgdGhpcy5yYXdQYWdpbmF0ZSh7XG4gICAgICB3aGVyZTogeyAuLi5vcHRpb25zIH0sXG4gICAgICBvZmZzZXQsXG4gICAgICBsaW1pdCxcbiAgICAgIC4uLm9wdHMsXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IHJvd3MsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIHRvdGFsOiBjb3VudCxcbiAgICAgICAgdG90YWxQYWdlOiBNYXRoLmNlaWwoY291bnQgLyBMSU1JVCksXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGxpbWl0LFxuICAgICAgfSxcbiAgICB9IGFzIElQYWdpbmF0aW9uUmVzPFQ+O1xuICB9XG5cbiAgYXN5bmMgcmF3UGFnaW5hdGUob3B0aW9uczogRmluZEFuZENvdW50T3B0aW9ucyk6IFByb21pc2U8e1xuICAgIHJvd3M6IFRbXTtcbiAgICBjb3VudDogbnVtYmVyO1xuICB9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kZWwuZmluZEFuZENvdW50QWxsKG9wdGlvbnMpO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlKGVudGl0eTogYW55LCBvcHRzPzogQ3JlYXRlT3B0aW9ucyk6IFByb21pc2U8VD4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMubW9kZWwuY3JlYXRlKGVudGl0eSwgb3B0cyk7XG4gICAgcmV0dXJuIHJlcy50b0pTT04oKTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShlbnRpdHk6IGFueSwgb3B0cz86IFVwZGF0ZU9wdGlvbnMpIHtcbiAgICBjb25zdCBbYWZmZWN0ZWRDb3VudCwgYWZmZWN0ZWRSb3dzXSA9IGF3YWl0IHRoaXMubW9kZWwudXBkYXRlKGVudGl0eSwge1xuICAgICAgLi4ub3B0cyxcbiAgICAgIHJldHVybmluZzogdHJ1ZSxcbiAgICB9KTtcbiAgICByZXR1cm4gYWZmZWN0ZWRSb3dzO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlKGNvbmRpdGlvbnM6IEZpbmRPcHRpb25zPFQ+KTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RlbC5kZXN0cm95KGNvbmRpdGlvbnMpO1xuICB9XG5cbiAgYXN5bmMgcmF3KHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RlbC5zZXF1ZWxpemUucXVlcnkocXVlcnkpO1xuICB9XG5cbiAgZ2V0TW9kZWwoKTogUmVwb3NpdG9yeTxUPiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWw7XG4gIH1cblxuICBhc3luYyBjb3VudChvcHRpb25zPzogQ291bnRPcHRpb25zKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICBjb25zdCByZXN1bHQ6IG51bWJlciA9IGF3YWl0IHRoaXMubW9kZWwuY291bnQob3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGFzeW5jIGZpbmRBbmRQYWdpbmF0ZShxdWVyeT86IElGaW5kQW5kUGFnaW5hdGVPcHRpb25zLCBvcHRzPzogRmluZE9wdGlvbnMpOiBQcm9taXNlPElQYWdpbmF0aW9uUmVzPFQ+PiB7XG4gICAgY29uc3QgcmVzdWx0OiBJUGFnaW5hdGlvblJlczxUPiA9IGF3YWl0IHRoaXMucGFnaW5hdGUocXVlcnkud2hlcmUsIHF1ZXJ5LnBhZ2UsIHF1ZXJ5LmxpbWl0LCBvcHRzKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBhc3luYyBjb3VudEJ5R3JwYyhxdWVyeTogQ29tbW9uUHJvdG8uUXVlcnlSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd2hlcmUgPSAhaXNFbXB0eShxdWVyeS53aGVyZSkgPyBKU09OLnBhcnNlKHF1ZXJ5LndoZXJlKSA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY291bnQoe1xuICAgICAgLi4ucXVlcnksXG4gICAgICB3aGVyZSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RNb2RlbCB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcbmltcG9ydCB7IEJvb2tpbmdNb2RlbCB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlJztcblxuaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9iYXNlLnJlcG9zaXRvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQm9va2luZ1JlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxCb29raW5nTW9kZWw+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdE1vZGVsKEJvb2tpbmdNb2RlbCkgcmVhZG9ubHkgbW9kZWw6IHR5cGVvZiBCb29raW5nTW9kZWwpIHtcbiAgICBzdXBlcihtb2RlbCk7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYm9va2luZy5yZXBvc2l0b3J5JztcbiIsIi8vIHVzZXIgcmVwb3NpdG9yeVxuZXhwb3J0ICogZnJvbSAnLi91c2VyJztcblxuLy8gbWVyY2hhbnQgcmVwb3NpdG9yeVxuZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudCc7XG5cbi8vIGJvb2tpbmcgcmVwb3NpdG9yeVxuZXhwb3J0ICogZnJvbSAnLi9ib29raW5nJztcblxuLy8gbm90aWZpY2F0aW9uIHJlcG9zaXRvcnlcbmV4cG9ydCAqIGZyb20gJy4vbm90aWZpY2F0aW9uJztcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RNb2RlbCB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcblxuaW1wb3J0IHsgQnJhbmNoTW9kZWwgfSBmcm9tICcuLi8uLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2Jhc2UucmVwb3NpdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCcmFuY2hSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8QnJhbmNoTW9kZWw+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdE1vZGVsKEJyYW5jaE1vZGVsKSByZWFkb25seSBtb2RlbDogdHlwZW9mIEJyYW5jaE1vZGVsKSB7XG4gICAgc3VwZXIobW9kZWwpO1xuICB9XG5cbiAgYXN5bmMgZmluZFdpdGhQYWdpbmcob3B0aW9ucz86IGFueSwgZmluZE9wdGlvbnM/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucGFnaW5hdGlvblJlcG9zaXRvcnkodGhpcy5kZXZpY2VNb2RlbCwgb3B0aW9ucywgZmluZE9wdGlvbnMpO1xuICAgIHJldHVybjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdE1vZGVsIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBHcm91cE1vZGVsIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9iYXNlLnJlcG9zaXRvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JvdXBSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8R3JvdXBNb2RlbD4ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0TW9kZWwoR3JvdXBNb2RlbCkgcmVhZG9ubHkgbW9kZWw6IHR5cGVvZiBHcm91cE1vZGVsKSB7XG4gICAgc3VwZXIobW9kZWwpO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL21lcmNoYW50LnJlcG9zaXRvcnknO1xuZXhwb3J0ICogZnJvbSAnLi9ncm91cC5yZXBvc2l0b3J5JztcbmV4cG9ydCAqIGZyb20gJy4vYnJhbmNoLnJlcG9zaXRvcnknO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlLnJlcG9zaXRvcnknO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdE1vZGVsIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBNZXJjaGFudE1vZGVsIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9iYXNlLnJlcG9zaXRvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVyY2hhbnRSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8TWVyY2hhbnRNb2RlbD4ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0TW9kZWwoTWVyY2hhbnRNb2RlbCkgcmVhZG9ubHkgbW9kZWw6IHR5cGVvZiBNZXJjaGFudE1vZGVsKSB7XG4gICAgc3VwZXIobW9kZWwpO1xuICB9XG5cbiAgYXN5bmMgZmluZFdpdGhQYWdpbmcob3B0aW9ucz86IGFueSwgZmluZE9wdGlvbnM/OiBhbnkpOiBQcm9taXNlPE1lcmNoYW50TW9kZWw+IHtcbiAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2luYXRpb25SZXBvc2l0b3J5KHRoaXMuZGV2aWNlTW9kZWwsIG9wdGlvbnMsIGZpbmRPcHRpb25zKTtcbiAgICByZXR1cm47XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RNb2RlbCB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcblxuaW1wb3J0IHsgU2VydmljZU1vZGVsIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9iYXNlLnJlcG9zaXRvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VydmljZVJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxTZXJ2aWNlTW9kZWw+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdE1vZGVsKFNlcnZpY2VNb2RlbCkgcmVhZG9ubHkgbW9kZWw6IHR5cGVvZiBTZXJ2aWNlTW9kZWwpIHtcbiAgICBzdXBlcihtb2RlbCk7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vbm90aWZpY2F0aW9uLnJlcG9zaXRvcnknO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdE1vZGVsIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Nb2RlbCB9IGZyb20gJy4uLy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYmFzZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxOb3RpZmljYXRpb25Nb2RlbD4ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0TW9kZWwoTm90aWZpY2F0aW9uTW9kZWwpIHJlYWRvbmx5IG1vZGVsOiB0eXBlb2YgTm90aWZpY2F0aW9uTW9kZWwpIHtcbiAgICBzdXBlcihtb2RlbCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RNb2RlbCB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcbmltcG9ydCB7IElGaW5kQW5kUGFnaW5hdGVPcHRpb25zLCBJUGFnaW5hdGlvblJlcyB9IGZyb20gJ0BsaWJzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgRmluZE9wdGlvbnMgfSBmcm9tICdzZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBEZXZpY2VNb2RlbCB9IGZyb20gJy4uLy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYmFzZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERldmljZVJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxEZXZpY2VNb2RlbD4ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0TW9kZWwoRGV2aWNlTW9kZWwpIHJlYWRvbmx5IG1vZGVsOiB0eXBlb2YgRGV2aWNlTW9kZWwpIHtcbiAgICBzdXBlcihtb2RlbCk7XG4gIH1cblxuICBhc3luYyBmaW5kQW5kUGFnaW5hdGUocXVlcnk/OiBJRmluZEFuZFBhZ2luYXRlT3B0aW9ucywgb3B0cz86IEZpbmRPcHRpb25zKTogUHJvbWlzZTxJUGFnaW5hdGlvblJlczxEZXZpY2VNb2RlbD4+IHtcbiAgICBjb25zdCByZXN1bHQ6IElQYWdpbmF0aW9uUmVzPERldmljZU1vZGVsPiA9IGF3YWl0IHRoaXMucGFnaW5hdGUocXVlcnkud2hlcmUsIHF1ZXJ5LnBhZ2UsIHF1ZXJ5LmxpbWl0LCBvcHRzKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vdXNlci5yZXBvc2l0b3J5JztcbmV4cG9ydCAqIGZyb20gJy4vZGV2aWNlLnJlcG9zaXRvcnknO1xuZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudC11c2VyLnJlcG9zaXRvcnknO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdE1vZGVsIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBNZXJjaGFudFVzZXJNb2RlbCB9IGZyb20gJy4uLy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYmFzZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lcmNoYW50VXNlclJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxNZXJjaGFudFVzZXJNb2RlbD4ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0TW9kZWwoTWVyY2hhbnRVc2VyTW9kZWwpIHJlYWRvbmx5IG1vZGVsOiB0eXBlb2YgTWVyY2hhbnRVc2VyTW9kZWwpIHtcbiAgICBzdXBlcihtb2RlbCk7XG4gIH1cblxuICBhc3luYyBmaW5kV2l0aFBhZ2luZyhvcHRpb25zPzogYW55LCBmaW5kT3B0aW9ucz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdpbmF0ZSh0aGlzLnVzZXJNb2RlbCwgb3B0aW9ucywgZmluZE9wdGlvbnMpO1xuICAgIHJldHVybjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSUZpbmRBbmRQYWdpbmF0ZU9wdGlvbnMsIElQYWdpbmF0aW9uUmVzIH0gZnJvbSAnQGxpYnMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0TW9kZWwgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBGaW5kT3B0aW9ucyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gJy4uLy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYmFzZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8VXNlck1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3RNb2RlbChVc2VyTW9kZWwpIHJlYWRvbmx5IG1vZGVsOiB0eXBlb2YgVXNlck1vZGVsKSB7XG4gICAgc3VwZXIobW9kZWwpO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2xpYi9leGNlcHRpb25zL2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2Vycm9yLWNvZGVzJztcbiIsImV4cG9ydCBlbnVtIEVycm9yQ29kZXMge1xuICAvLzUwMFxuICBHRU5FUkFMX1NFUlZFUl9FUlJPUiA9IDUwMDEwMCxcbiAgVVNFUk5BTUVfQUxSRUFEWV9UQUtFTiA9IDUwMDEwMSxcbiAgSU5WQUxJRF9DUkVERU5USUFMUyA9IDUwMDEwMixcbn1cbiIsImV4cG9ydCBjbGFzcyBDdXN0b21FeGNlcHRpb24ge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGh0dHBTdGF0dXNDb2RlOiBudW1iZXI7XG4gIGVycm9yQ29kZTogbnVtYmVyO1xuICBpc0N1c3RvbUVycm9yID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGh0dHBTdGF0dXNDb2RlOiBudW1iZXIsIGVycm9yQ29kZTogbnVtYmVyKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmh0dHBTdGF0dXNDb2RlID0gaHR0cFN0YXR1c0NvZGU7XG4gICAgdGhpcy5lcnJvckNvZGUgPSBlcnJvckNvZGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IEN1c3RvbUV4Y2VwdGlvbiB9IGZyb20gJ2V4Y2VwdGlvbnMvZXhjZXB0aW9ucy9saWIvZXhjZXB0aW9ucy9jdXN0b20uZXhjZXB0aW9uJztcbmltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICdleGNlcHRpb25zL2V4Y2VwdGlvbnMvbGliL2Vycm9yLWNvZGVzJztcblxuZXhwb3J0IGNsYXNzIEdlbmVyYWxTZXJ2ZXJFcnJvckV4Y2VwdGlvbiBleHRlbmRzIEN1c3RvbUV4Y2VwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdHZW5lcmFsIHNlcnZlciBlcnJvcicsIDUwMCwgRXJyb3JDb2Rlcy5HRU5FUkFMX1NFUlZFUl9FUlJPUik7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vY3VzdG9tLmV4Y2VwdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2dlbmVyYWwtc2VydmVyLWVycm9yLmV4Y2VwdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3VzZXJuYW1lLWFscmVhZHktdGFrZW4uZXhjZXB0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vaW52YWxpZC1jcmVkZW50aWFscy5leGNlcHRpb24nO1xuIiwiaW1wb3J0IHsgQ3VzdG9tRXhjZXB0aW9uIH0gZnJvbSAnZXhjZXB0aW9ucy9leGNlcHRpb25zL2xpYi9leGNlcHRpb25zL2N1c3RvbS5leGNlcHRpb24nO1xuaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJ2V4Y2VwdGlvbnMvZXhjZXB0aW9ucy9saWIvZXJyb3ItY29kZXMnO1xuXG5leHBvcnQgY2xhc3MgSW52YWxpZENyZWRlbnRpYWxzRXhjZXB0aW9uIGV4dGVuZHMgQ3VzdG9tRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ0ludmFsaWQgQ3JlZGVudGlhbHMnLCA1MDAsIEVycm9yQ29kZXMuSU5WQUxJRF9DUkVERU5USUFMUyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEN1c3RvbUV4Y2VwdGlvbiB9IGZyb20gJ2V4Y2VwdGlvbnMvZXhjZXB0aW9ucy9saWIvZXhjZXB0aW9ucy9jdXN0b20uZXhjZXB0aW9uJztcbmltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICdleGNlcHRpb25zL2V4Y2VwdGlvbnMvbGliL2Vycm9yLWNvZGVzJztcblxuZXhwb3J0IGNsYXNzIE5pY2tuYW1lQWxyZWFkeVRha2VuRXhjZXB0aW9uIGV4dGVuZHMgQ3VzdG9tRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ05pY2tuYW1lIGlzIGFscmVhZHkgdGFrZW4nLCA1MDAsIEVycm9yQ29kZXMuVVNFUk5BTUVfQUxSRUFEWV9UQUtFTik7XG4gIH1cbn1cbiIsImltcG9ydCB7IEV4Y2VwdGlvbkZpbHRlciwgQXJndW1lbnRzSG9zdCwgQ2F0Y2gsIExvZ2dlciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEdlbmVyYWxTZXJ2ZXJFcnJvckV4Y2VwdGlvbiB9IGZyb20gJ2V4Y2VwdGlvbnMvZXhjZXB0aW9ucyc7XG5pbXBvcnQgeyBHcnBjTWV0YWRhdGFFcnJvcktleSB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMnO1xuXG5AQ2F0Y2goKVxuZXhwb3J0IGNsYXNzIEFsbEV4Y2VwdGlvbnNGaWx0ZXIgaW1wbGVtZW50cyBFeGNlcHRpb25GaWx0ZXIge1xuICBwcml2YXRlIGxvZ2dlciA9IG5ldyBMb2dnZXIoQWxsRXhjZXB0aW9uc0ZpbHRlci5uYW1lKTtcblxuICBjYXRjaChleGNlcHRpb246IGFueSwgaG9zdDogQXJndW1lbnRzSG9zdCk6IGFueSB7XG4gICAgY29uc3QgY3R4ID0gaG9zdC5zd2l0Y2hUb0h0dHAoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGN0eC5nZXRSZXNwb25zZSgpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBjdHguZ2V0UmVxdWVzdCgpO1xuICAgIGlmIChleGNlcHRpb24ubWV0YWRhdGEpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGV4Y2VwdGlvbiA9IEpTT04ucGFyc2UoZXhjZXB0aW9uLm1ldGFkYXRhLmdldChHcnBjTWV0YWRhdGFFcnJvcktleSlbMF0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihgW0dSUEMgVU5IQU5ETEVEIEVSUk9SXTogWyR7ZXhjZXB0aW9uPy5tZXNzYWdlfV0gOi0+IGAsIEpTT04uc3RyaW5naWZ5KGV4Y2VwdGlvbikpO1xuICAgICAgICBleGNlcHRpb24gPSBuZXcgR2VuZXJhbFNlcnZlckVycm9yRXhjZXB0aW9uKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghZXhjZXB0aW9uLmlzQ3VzdG9tRXJyb3IpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBbVU5IQU5ETEVEIEVSUk9SXTogWyR7ZXhjZXB0aW9uPy5tZXNzYWdlfV0gOi0+IGAsIEpTT04uc3RyaW5naWZ5KGV4Y2VwdGlvbikpO1xuICAgICAgZXhjZXB0aW9uID0gbmV3IEdlbmVyYWxTZXJ2ZXJFcnJvckV4Y2VwdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcihgW0VSUk9SOiR7ZXhjZXB0aW9uLmVycm9yQ29kZX1dICR7ZXhjZXB0aW9uLm1lc3NhZ2UudG9VcHBlckNhc2UoKX1gKTtcbiAgICB9XG4gICAgcmVzcG9uc2Uuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBtZXRhOiB7XG4gICAgICAgIGhlYWRlcnM6IHJlcXVlc3QuaGVhZGVycyxcbiAgICAgICAgcGFyYW1zOiByZXF1ZXN0LnBhcmFtcyxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgZXJyb3JDb2RlOiBleGNlcHRpb24uZXJyb3JDb2RlLFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGV4Y2VwdGlvbi5tZXNzYWdlLFxuICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCksXG4gICAgICB9LFxuICAgICAgcmVzdWx0OiBleGNlcHRpb24sXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFyZ3VtZW50c0hvc3QsIENhdGNoLCBMb2dnZXIgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBCYXNlUnBjRXhjZXB0aW9uRmlsdGVyIH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnQGdycGMvZ3JwYy1qcyc7XG5pbXBvcnQgeyBHZW5lcmFsU2VydmVyRXJyb3JFeGNlcHRpb24gfSBmcm9tICdleGNlcHRpb25zL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHsgR3JwY01ldGFkYXRhRXJyb3JLZXkgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzJztcblxuQENhdGNoKClcbmV4cG9ydCBjbGFzcyBHcnBjQWxsRXhjZXB0aW9uc0ZpbHRlciBleHRlbmRzIEJhc2VScGNFeGNlcHRpb25GaWx0ZXIge1xuICBwcml2YXRlIGxvZ2dlciA9IG5ldyBMb2dnZXIoR3JwY0FsbEV4Y2VwdGlvbnNGaWx0ZXIubmFtZSk7XG5cbiAgY2F0Y2goZXhjZXB0aW9uOiBhbnksIGhvc3Q6IEFyZ3VtZW50c0hvc3QpIHtcbiAgICBpZiAoIWV4Y2VwdGlvbi5pc0N1c3RvbUVycm9yKSB7XG4gICAgICBleGNlcHRpb24gPSBuZXcgR2VuZXJhbFNlcnZlckVycm9yRXhjZXB0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMubG9nZ2VyLmVycm9yKGBbRVJST1I6ICR7ZXhjZXB0aW9uLmVycm9yQ29kZX1dICR7ZXhjZXB0aW9uLm1lc3NhZ2V9YCk7XG4gICAgY29uc3QgZXJyb3JNZXRhZGF0YSA9IG5ldyBNZXRhZGF0YSgpO1xuICAgIGVycm9yTWV0YWRhdGEuYWRkKEdycGNNZXRhZGF0YUVycm9yS2V5LCBKU09OLnN0cmluZ2lmeShleGNlcHRpb24pKTtcbiAgICBleGNlcHRpb24ubWV0YWRhdGEgPSBlcnJvck1ldGFkYXRhO1xuICAgIHJldHVybiB0aHJvd0Vycm9yKCgpID0+IGV4Y2VwdGlvbik7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYWxsLmV4Y2VwdGlvbnMuZmlsdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JwYy1hbGwuZXhjZXB0aW9ucy5maWx0ZXInO1xuIiwiaW1wb3J0IHsgQm9va2luZ0NvbmZpZywgTWVyY2hhbnRDb25maWcsIE5vdGlmaWNhdGlvbkNvbmZpZywgVXNlckNvbmZpZywgVXNlclByb3RvIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5pbXBvcnQgeyBCT09LSU5HX1BBQ0tBR0VfTkFNRSB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL2Jvb2tpbmcnO1xuaW1wb3J0IHsgTUVSQ0hBTlRfUEFDS0FHRV9OQU1FIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3MvbWVyY2hhbnQnO1xuaW1wb3J0IHsgTk9USUZJQ0FUSU9OX1BBQ0tBR0VfTkFNRSB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBDbGllbnRQcm92aWRlck9wdGlvbnMsIFRyYW5zcG9ydCB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5cbmV4cG9ydCBjb25zdCBVc2VyQ2xpZW50OiBDbGllbnRQcm92aWRlck9wdGlvbnMgPSB7XG4gIG5hbWU6IFVzZXJQcm90by5EVUNQSF9VU0VSX1BBQ0tBR0VfTkFNRSxcbiAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuR1JQQyxcbiAgb3B0aW9uczoge1xuICAgIHBhY2thZ2U6IFVzZXJQcm90by5EVUNQSF9VU0VSX1BBQ0tBR0VfTkFNRSxcbiAgICBwcm90b1BhdGg6IFVzZXJDb25maWcucGF0aCxcbiAgICB1cmw6IGAke1VzZXJDb25maWcubG9jYWxIb3N0bmFtZX06JHtVc2VyQ29uZmlnLnBvcnR9YCxcbiAgICBsb2FkZXI6IFVzZXJDb25maWcubG9hZGVyLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IE1lcmNoYW50Q2xpZW50OiBDbGllbnRQcm92aWRlck9wdGlvbnMgPSB7XG4gIG5hbWU6IE1FUkNIQU5UX1BBQ0tBR0VfTkFNRSxcbiAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuR1JQQyxcbiAgb3B0aW9uczoge1xuICAgIHBhY2thZ2U6IE1FUkNIQU5UX1BBQ0tBR0VfTkFNRSxcbiAgICBwcm90b1BhdGg6IE1lcmNoYW50Q29uZmlnLnBhdGgsXG4gICAgdXJsOiBgJHtNZXJjaGFudENvbmZpZy5sb2NhbEhvc3RuYW1lfToke01lcmNoYW50Q29uZmlnLnBvcnR9YCxcbiAgICBsb2FkZXI6IE1lcmNoYW50Q29uZmlnLmxvYWRlcixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBCb29raW5nQ2xpZW50OiBDbGllbnRQcm92aWRlck9wdGlvbnMgPSB7XG4gIG5hbWU6IEJPT0tJTkdfUEFDS0FHRV9OQU1FLFxuICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5HUlBDLFxuICBvcHRpb25zOiB7XG4gICAgcGFja2FnZTogQk9PS0lOR19QQUNLQUdFX05BTUUsXG4gICAgcHJvdG9QYXRoOiBCb29raW5nQ29uZmlnLnBhdGgsXG4gICAgdXJsOiBgJHtCb29raW5nQ29uZmlnLmxvY2FsSG9zdG5hbWV9OiR7Qm9va2luZ0NvbmZpZy5wb3J0fWAsXG4gICAgbG9hZGVyOiBCb29raW5nQ29uZmlnLmxvYWRlcixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25DbGllbnQ6IENsaWVudFByb3ZpZGVyT3B0aW9ucyA9IHtcbiAgbmFtZTogTk9USUZJQ0FUSU9OX1BBQ0tBR0VfTkFNRSxcbiAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuR1JQQyxcbiAgb3B0aW9uczoge1xuICAgIHBhY2thZ2U6IE5PVElGSUNBVElPTl9QQUNLQUdFX05BTUUsXG4gICAgcHJvdG9QYXRoOiBOb3RpZmljYXRpb25Db25maWcucGF0aCxcbiAgICB1cmw6IGAke05vdGlmaWNhdGlvbkNvbmZpZy5sb2NhbEhvc3RuYW1lfToke05vdGlmaWNhdGlvbkNvbmZpZy5wb3J0fWAsXG4gICAgbG9hZGVyOiBOb3RpZmljYXRpb25Db25maWcubG9hZGVyLFxuICB9LFxufTtcbiIsImltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuZXhwb3J0IGNvbnN0IFVzZXJDb25maWcgPSB7XG4gIGhvc3RuYW1lOiAndXNlci1zZXJ2aWNlJyxcbiAgbG9jYWxIb3N0bmFtZTogJzAuMC4wLjAnLFxuICBwb3J0OiA1MDAwNixcbiAgcGF0aDogcmVzb2x2ZSgnbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MnLCAndXNlci5wcm90bycpLFxuICBsb2FkZXI6IHtcbiAgICBrZWVwQ2FzZTogdHJ1ZSxcbiAgICBsb25nczogTnVtYmVyLFxuICAgIGVudW1zOiBOdW1iZXIsXG4gICAgYXJyYXlzOiB0cnVlLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IE1lcmNoYW50Q29uZmlnID0ge1xuICBob3N0bmFtZTogJ21lcmNoYW50LXNlcnZpY2UnLFxuICBsb2NhbEhvc3RuYW1lOiAnMC4wLjAuMCcsXG4gIHBvcnQ6IDUwMDA4LFxuICBwYXRoOiByZXNvbHZlKCdsaWJzL2dycGMtdHlwZXMvc3JjL3Byb3RvcycsICdtZXJjaGFudC5wcm90bycpLFxuICBsb2FkZXI6IHtcbiAgICBrZWVwQ2FzZTogdHJ1ZSxcbiAgICBsb25nczogTnVtYmVyLFxuICAgIGVudW1zOiBOdW1iZXIsXG4gICAgYXJyYXlzOiB0cnVlLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEJvb2tpbmdDb25maWcgPSB7XG4gIGhvc3RuYW1lOiAnYm9va2luZy1zZXJ2aWNlJyxcbiAgbG9jYWxIb3N0bmFtZTogJzAuMC4wLjAnLFxuICBwb3J0OiA1MDAxMCxcbiAgcGF0aDogcmVzb2x2ZSgnbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MnLCAnYm9va2luZy5wcm90bycpLFxuICBsb2FkZXI6IHtcbiAgICBrZWVwQ2FzZTogdHJ1ZSxcbiAgICBsb25nczogTnVtYmVyLFxuICAgIGVudW1zOiBOdW1iZXIsXG4gICAgYXJyYXlzOiB0cnVlLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkNvbmZpZyA9IHtcbiAgaG9zdG5hbWU6ICdub3RpZmljYXRpb24tc2VydmljZScsXG4gIGxvY2FsSG9zdG5hbWU6ICcwLjAuMC4wJyxcbiAgcG9ydDogNTAwMTIsXG4gIHBhdGg6IHJlc29sdmUoJ2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zJywgJ25vdGlmaWNhdGlvbi5wcm90bycpLFxuICBsb2FkZXI6IHtcbiAgICBrZWVwQ2FzZTogdHJ1ZSxcbiAgICBsb25nczogTnVtYmVyLFxuICAgIGVudW1zOiBOdW1iZXIsXG4gICAgYXJyYXlzOiB0cnVlLFxuICB9LFxufTtcbiIsImltcG9ydCAqIGFzIFVzZXJQcm90byBmcm9tICcuL3Byb3Rvcy91c2VyJztcbmltcG9ydCAqIGFzIENvbW1vblByb3RvIGZyb20gJy4vcHJvdG9zL2NvbW1vbnMnO1xuaW1wb3J0ICogYXMgTWVyY2hhbnRQcm90byBmcm9tICcuL3Byb3Rvcy9tZXJjaGFudCc7XG5pbXBvcnQgKiBhcyBCb29raW5nUHJvdG8gZnJvbSAnLi9wcm90b3MvYm9va2luZyc7XG5pbXBvcnQgKiBhcyBCcmFuY2hQcm90byBmcm9tICcuL3Byb3Rvcy9icmFuY2gnO1xuaW1wb3J0ICogYXMgRGV2aWNlUHJvdG8gZnJvbSAnLi9wcm90b3MvZGV2aWNlJztcbmltcG9ydCAqIGFzIE1lcmNoYW50VXNlclByb3RvIGZyb20gJy4vcHJvdG9zL21lcmNoYW50X3VzZXInO1xuaW1wb3J0ICogYXMgTm90aWZpY2F0aW9uUHJvdG8gZnJvbSAnLi9wcm90b3Mvbm90aWZpY2F0aW9uJztcblxuZXhwb3J0ICogZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgKiBmcm9tICcuL3NlcnZlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9jbGllbnRzJztcblxuZXhwb3J0IHtcbiAgQ29tbW9uUHJvdG8sXG4gIFVzZXJQcm90byxcbiAgTWVyY2hhbnRQcm90byxcbiAgQm9va2luZ1Byb3RvLFxuICBCcmFuY2hQcm90byxcbiAgRGV2aWNlUHJvdG8sXG4gIE1lcmNoYW50VXNlclByb3RvLFxuICBOb3RpZmljYXRpb25Qcm90byxcbn07XG5cbmV4cG9ydCBjb25zdCBHcnBjTWV0YWRhdGFFcnJvcktleSA9ICdjdXN0b20tZ3JwYy1lcnJvcic7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgR3JwY01ldGhvZCwgR3JwY1N0cmVhbU1ldGhvZCB9IGZyb20gXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQ291bnQsIEVCb29raW5nU3RhdHVzLCBJZCwgUXVlcnlSZXF1ZXN0IH0gZnJvbSBcIi4vY29tbW9uc1wiO1xuaW1wb3J0IHsgTnVsbFZhbHVlIH0gZnJvbSBcIi4vZ29vZ2xlL3Byb3RvYnVmL3N0cnVjdFwiO1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJib29raW5nXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9va2luZyB7XG4gIC8qKiBkZWZhdWx0IGZpZWxkICovXG4gIGlkOiBudW1iZXI7XG4gIGNyZWF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNyZWF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQnk/OlxuICAgIHwgc3RyaW5nXG4gICAgfCB1bmRlZmluZWQ7XG4gIC8qKiByZXNlcnZlZCBmaWVsZCAqL1xuICBzdGF0dXM/OiBFQm9va2luZ1N0YXR1cyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZXJ2aWNlSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHN0YXJ0VGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZW5kVGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZHVyYXRpb24/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG5vdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBpc0N1c3RvbWVyQ2FuY2VsPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgY2FuY2VsUmVhc29uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBib29raW5nRGF0ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaXNBZG1pblVwZGF0ZT86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIGFkbWluVXBkYXRlSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2VOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lck5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyRW1haWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyQWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZHVyYXRpb25Ib3VyPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkdXJhdGlvbk1pbnV0ZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVCb29raW5nSW5wdXQge1xuICBzdGF0dXM/OiBFQm9va2luZ1N0YXR1cyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZXJ2aWNlSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHN0YXJ0VGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZW5kVGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRtaW5CcmFuY2hFbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJFbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBib29raW5nRGF0ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbm90ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2VOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZUJvb2tpbmdEYXRhIHtcbiAgc3RhdHVzPzogRUJvb2tpbmdTdGF0dXMgfCB1bmRlZmluZWQ7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc2VydmljZUlkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzdGFydFRpbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGVuZFRpbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGFkbWluQnJhbmNoRW1haWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyRW1haWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYm9va2luZ0RhdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG5vdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZXJ2aWNlTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVCb29raW5nSW5wdXQge1xuICBpZDogbnVtYmVyO1xuICBkYXRhOiBVcGRhdGVCb29raW5nRGF0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kQm9va2luZ09mZnNldFBhZ2luYXRpb24ge1xuICBpdGVtczogQm9va2luZ1tdO1xuICBwYWdlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB0b3RhbFBhZ2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHRvdGFsPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBsaW1pdD86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOdWxsYWJsZUJvb2tpbmcge1xuICBudWxsPzogTnVsbFZhbHVlIHwgdW5kZWZpbmVkO1xuICBib29raW5nPzogQm9va2luZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IEJPT0tJTkdfUEFDS0FHRV9OQU1FID0gXCJib29raW5nXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9va2luZ1NlcnZpY2VDbGllbnQge1xuICBmaW5kKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8RmluZEJvb2tpbmdPZmZzZXRQYWdpbmF0aW9uPjtcblxuICBmaW5kQnlJZChyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8TnVsbGFibGVCb29raW5nPjtcblxuICBmaW5kT25lKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8TnVsbGFibGVCb29raW5nPjtcblxuICBjb3VudChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPENvdW50PjtcblxuICBjcmVhdGUocmVxdWVzdDogQ3JlYXRlQm9va2luZ0lucHV0KTogT2JzZXJ2YWJsZTxCb29raW5nPjtcblxuICB1cGRhdGUocmVxdWVzdDogVXBkYXRlQm9va2luZ0lucHV0KTogT2JzZXJ2YWJsZTxCb29raW5nPjtcblxuICBkZWxldGUocmVxdWVzdDogSWQpOiBPYnNlcnZhYmxlPENvdW50Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCb29raW5nU2VydmljZUNvbnRyb2xsZXIge1xuICBmaW5kKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCxcbiAgKTogUHJvbWlzZTxGaW5kQm9va2luZ09mZnNldFBhZ2luYXRpb24+IHwgT2JzZXJ2YWJsZTxGaW5kQm9va2luZ09mZnNldFBhZ2luYXRpb24+IHwgRmluZEJvb2tpbmdPZmZzZXRQYWdpbmF0aW9uO1xuXG4gIGZpbmRCeUlkKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxOdWxsYWJsZUJvb2tpbmc+IHwgT2JzZXJ2YWJsZTxOdWxsYWJsZUJvb2tpbmc+IHwgTnVsbGFibGVCb29raW5nO1xuXG4gIGZpbmRPbmUocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxOdWxsYWJsZUJvb2tpbmc+IHwgT2JzZXJ2YWJsZTxOdWxsYWJsZUJvb2tpbmc+IHwgTnVsbGFibGVCb29raW5nO1xuXG4gIGNvdW50KHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8Q291bnQ+IHwgT2JzZXJ2YWJsZTxDb3VudD4gfCBDb3VudDtcblxuICBjcmVhdGUocmVxdWVzdDogQ3JlYXRlQm9va2luZ0lucHV0KTogUHJvbWlzZTxCb29raW5nPiB8IE9ic2VydmFibGU8Qm9va2luZz4gfCBCb29raW5nO1xuXG4gIHVwZGF0ZShyZXF1ZXN0OiBVcGRhdGVCb29raW5nSW5wdXQpOiBQcm9taXNlPEJvb2tpbmc+IHwgT2JzZXJ2YWJsZTxCb29raW5nPiB8IEJvb2tpbmc7XG5cbiAgZGVsZXRlKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQm9va2luZ1NlcnZpY2VDb250cm9sbGVyTWV0aG9kcygpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb25zdHJ1Y3RvcjogRnVuY3Rpb24pIHtcbiAgICBjb25zdCBncnBjTWV0aG9kczogc3RyaW5nW10gPSBbXCJmaW5kXCIsIFwiZmluZEJ5SWRcIiwgXCJmaW5kT25lXCIsIFwiY291bnRcIiwgXCJjcmVhdGVcIiwgXCJ1cGRhdGVcIiwgXCJkZWxldGVcIl07XG4gICAgZm9yIChjb25zdCBtZXRob2Qgb2YgZ3JwY01ldGhvZHMpIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0b3I6IGFueSA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgbWV0aG9kKTtcbiAgICAgIEdycGNNZXRob2QoXCJCb29raW5nU2VydmljZVwiLCBtZXRob2QpKGNvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2RdLCBtZXRob2QsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICBjb25zdCBncnBjU3RyZWFtTWV0aG9kczogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjU3RyZWFtTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY1N0cmVhbU1ldGhvZChcIkJvb2tpbmdTZXJ2aWNlXCIsIG1ldGhvZCkoY29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZF0sIG1ldGhvZCwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgQk9PS0lOR19TRVJWSUNFX05BTUUgPSBcIkJvb2tpbmdTZXJ2aWNlXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgUGFnZUluZm8sIFBhZ2VNZXRhIH0gZnJvbSBcIi4vY29tbW9uc1wiO1xuaW1wb3J0IHsgTnVsbFZhbHVlIH0gZnJvbSBcIi4vZ29vZ2xlL3Byb3RvYnVmL3N0cnVjdFwiO1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJicmFuY2hcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVCcmFuY2hEYXRhIHtcbiAgbmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGFkZHJlc3M/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHlDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkaXN0cmljdENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHdhcmRDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjaXR5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkaXN0cmljdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgd2FyZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVCcmFuY2hJbnB1dCB7XG4gIGlkOiBudW1iZXI7XG4gIGRhdGE6IFVwZGF0ZUJyYW5jaERhdGEgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlQnJhbmNoSW5wdXQge1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB3YXJkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJyYW5jaCB7XG4gIC8qKiBkZWZhdWx0IGZpZWxkICovXG4gIGlkOiBudW1iZXI7XG4gIGNyZWF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNyZWF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQnk/OlxuICAgIHwgc3RyaW5nXG4gICAgfCB1bmRlZmluZWQ7XG4gIC8qKiByZXNlcnZlZCBmaWVsZCAqL1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB3YXJkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJyYW5jaEVkZ2Uge1xuICBub2RlOiBCcmFuY2ggfCB1bmRlZmluZWQ7XG4gIGN1cnNvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRCcmFuY2hlc1BheWxvYWQge1xuICBlZGdlczogQnJhbmNoRWRnZVtdO1xuICBwYWdlSW5mbzogUGFnZUluZm8gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnVsbGFibGVCcmFuY2gge1xuICBudWxsPzogTnVsbFZhbHVlIHwgdW5kZWZpbmVkO1xuICBicmFuY2g/OiBCcmFuY2ggfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJhbmNoZXMge1xuICBicmFuY2hlczogQnJhbmNoW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJhbmNoUGFnaW5hdGlvbiB7XG4gIGl0ZW1zOiBCcmFuY2hbXTtcbiAgbWV0YT86IFBhZ2VNZXRhIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgQlJBTkNIX1BBQ0tBR0VfTkFNRSA9IFwiYnJhbmNoXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJjb21tb25zXCI7XG5cbmV4cG9ydCBlbnVtIEVTb3J0RGlyZWN0aW9uIHtcbiAgQVNDID0gMCxcbiAgREVTQyA9IDEsXG59XG5cbmV4cG9ydCBlbnVtIEVVc2VyR2VuZGVyIHtcbiAgTUFMRSA9IDAsXG4gIEZFTUFMRSA9IDEsXG4gIE9USEVSID0gMixcbn1cblxuZXhwb3J0IGVudW0gRVVzZXJSb2xlIHtcbiAgVVNFUiA9IDAsXG4gIEFETUlOID0gMSxcbiAgU1VQRVJfQURNSU4gPSAyLFxuICBNQVNURVJfV09SS0VSID0gMyxcbiAgQVNTSVNUQU5UX1dPUktFUiA9IDQsXG4gIE1BTkFHRVIgPSA1LFxuICBSRUNFUFRJT05JU1QgPSA2LFxufVxuXG5leHBvcnQgZW51bSBFQ3VzdG9tZXJMZXZlbCB7XG4gIE5PUk1BTCA9IDAsXG4gIFNJTFZFUiA9IDEsXG4gIEdPTEQgPSAyLFxuICBQTEFUSU5VTSA9IDMsXG59XG5cbmV4cG9ydCBlbnVtIEVVc2VyU3RhdHVzIHtcbiAgUEVORElORyA9IDAsXG4gIEFDVElWRSA9IDEsXG4gIEJBTk5FRCA9IDIsXG59XG5cbmV4cG9ydCBlbnVtIEVOb3RpZmljYXRpb25UeXBlIHtcbiAgQk9PS0lORyA9IDAsXG4gIENIQVQgPSAxLFxuICBDT01NRU5UID0gMixcbiAgUkVQTFlfQ09NTUVOVCA9IDMsXG59XG5cbmV4cG9ydCBlbnVtIEVCb29raW5nU3RhdHVzIHtcbiAgQk9PS0lOR19QRU5ESU5HID0gMCxcbiAgQk9PS0lOR19BUFBST1ZFID0gMSxcbiAgQk9PS0lOR19DQU5DRUxMRUQgPSAyLFxuICBCT09LSU5HX1JFSkVDVCA9IDMsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWQge1xuICBpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyUXVlcnkge1xuICBmaWx0ZXI6IHN0cmluZztcbiAgcGFnaW5nOiBQYWdpbmcgfCB1bmRlZmluZWQ7XG4gIHNvcnRpbmc6IFNvcnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcWxRdWVyeSB7XG4gIHNlbGVjdDogc3RyaW5nW107XG4gIHdoZXJlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBvcmRlckJ5OiBzdHJpbmdbXTtcbiAgbGltaXQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGJlZm9yZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWZ0ZXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUluZm8ge1xuICBzdGFydEN1cnNvcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZW5kQ3Vyc29yPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBoYXNOZXh0UGFnZT86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIGhhc1ByZXZpb3VzUGFnZT86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ291bnQge1xuICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvdGFsQ291bnQge1xuICB0b3RhbENvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlSZXF1ZXN0IHtcbiAgd2hlcmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHBhZ2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxpbWl0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZWFyY2hLZXk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG9yZGVyQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG9yZGVyRGlyZWN0aW9uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnQge1xuICBmaWVsZDogc3RyaW5nO1xuICBkaXJlY3Rpb246IEVTb3J0RGlyZWN0aW9uO1xuICBudWxsczogU29ydF9Tb3J0TnVsbHM7XG59XG5cbmV4cG9ydCBlbnVtIFNvcnRfU29ydE51bGxzIHtcbiAgTlVMTFNfRklSU1QgPSAwLFxuICBOVUxMU19MQVNUID0gMSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdpbmcge1xuICBsaW1pdDogbnVtYmVyO1xuICBvZmZzZXQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlTWV0YSB7XG4gIHRvdGFsPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB0b3RhbFBhZ2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHBhZ2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxpbWl0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgQ09NTU9OU19QQUNLQUdFX05BTUUgPSBcImNvbW1vbnNcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBQYWdlTWV0YSB9IGZyb20gXCIuL2NvbW1vbnNcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwiZGV2aWNlXCI7XG5cbmV4cG9ydCBlbnVtIEVEZXZpY2VPcyB7XG4gIEFORFJPSUQgPSAwLFxuICBJT1MgPSAxLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZSB7XG4gIC8qKiBkZWZhdWx0IGZpZWxkICovXG4gIGlkOiBudW1iZXI7XG4gIGNyZWF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNyZWF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQnk/OlxuICAgIHwgc3RyaW5nXG4gICAgfCB1bmRlZmluZWQ7XG4gIC8qKiByZXNlcnZlZCBmaWVsZCAqL1xuICBvcz86IEVEZXZpY2VPcyB8IHVuZGVmaW5lZDtcbiAgZGV2aWNlSWQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHRva2VuPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1c2VySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlRGV2aWNlSW5wdXQge1xuICBvczogRURldmljZU9zO1xuICBkZXZpY2VJZDogc3RyaW5nO1xuICB0b2tlbjogc3RyaW5nO1xuICB1c2VySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlcyB7XG4gIGl0ZW1zOiBEZXZpY2VbXTtcbiAgbWV0YT86IFBhZ2VNZXRhIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgREVWSUNFX1BBQ0tBR0VfTkFNRSA9IFwiZGV2aWNlXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgR3JwY01ldGhvZCwgR3JwY1N0cmVhbU1ldGhvZCB9IGZyb20gXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQnJhbmNoLCBCcmFuY2hlcywgQnJhbmNoUGFnaW5hdGlvbiwgQ3JlYXRlQnJhbmNoSW5wdXQsIE51bGxhYmxlQnJhbmNoLCBVcGRhdGVCcmFuY2hJbnB1dCB9IGZyb20gXCIuL2JyYW5jaFwiO1xuaW1wb3J0IHsgQ291bnQsIElkLCBQYWdlSW5mbywgUGFnZU1ldGEsIFF1ZXJ5UmVxdWVzdCB9IGZyb20gXCIuL2NvbW1vbnNcIjtcbmltcG9ydCB7IE51bGxWYWx1ZSB9IGZyb20gXCIuL2dvb2dsZS9wcm90b2J1Zi9zdHJ1Y3RcIjtcbmltcG9ydCB7IENyZWF0ZUdyb3VwSW5wdXQsIEdyb3VwLCBHcm91cFBhZ2luYXRpb24sIE51bGxhYmxlR3JvdXAsIFVwZGF0ZUdyb3VwSW5wdXQgfSBmcm9tIFwiLi9ncm91cFwiO1xuaW1wb3J0IHtcbiAgQ3JlYXRlU2VydmljZUlucHV0LFxuICBGaW5kU2VydmljZU9mZnNldFBhZ2luYXRpb24sXG4gIEZpbmRTZXJ2aWNlc1BheWxvYWQsXG4gIE51bGxhYmxlU2VydmljZSxcbiAgU2VydmljZSxcbiAgVXBkYXRlU2VydmljZUlucHV0LFxufSBmcm9tIFwiLi9zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcIm1lcmNoYW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlTWVyY2hhbnREYXRhIHtcbiAgbmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGFkZHJlc3M/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB3YXJkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZU1lcmNoYW50SW5wdXQge1xuICBpZDogbnVtYmVyO1xuICBkYXRhOiBVcGRhdGVNZXJjaGFudERhdGEgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlSW5wdXQge1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjaXR5Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3YXJkQ29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3Q/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHdhcmQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVyY2hhbnQge1xuICAvKiogZGVmYXVsdCBmaWVsZCAqL1xuICBpZDogbnVtYmVyO1xuICBjcmVhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjcmVhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEJ5PzpcbiAgICB8IHN0cmluZ1xuICAgIHwgdW5kZWZpbmVkO1xuICAvKiogcmVzZXJ2ZWQgZmllbGQgKi9cbiAgbmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGFkZHJlc3M/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB3YXJkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lcmNoYW50RWRnZSB7XG4gIG5vZGU6IE1lcmNoYW50IHwgdW5kZWZpbmVkO1xuICBjdXJzb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kTWVyY2hhbnRzUGF5bG9hZCB7XG4gIGVkZ2VzOiBNZXJjaGFudEVkZ2VbXTtcbiAgcGFnZUluZm86IFBhZ2VJbmZvIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE51bGxhYmxlTWVyY2hhbnQge1xuICBudWxsPzogTnVsbFZhbHVlIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudD86IE1lcmNoYW50IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZU1lcmNoYW50UmVzcG9uc2Uge1xuICBtZXJjaGFudDogTWVyY2hhbnQgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaDogQnJhbmNoIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lcmNoYW50cyB7XG4gIG1lcmNoYW50czogTWVyY2hhbnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXJjaGFudFBhZ2luYXRpb24ge1xuICBpdGVtczogTWVyY2hhbnRbXTtcbiAgbWV0YT86IFBhZ2VNZXRhIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgTUVSQ0hBTlRfUEFDS0FHRV9OQU1FID0gXCJtZXJjaGFudFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lcmNoYW50U2VydmljZUNsaWVudCB7XG4gIGZpbmQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxNZXJjaGFudFBhZ2luYXRpb24+O1xuXG4gIGZpbmRBbGwocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxNZXJjaGFudHM+O1xuXG4gIGZpbmRPbmUocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxOdWxsYWJsZU1lcmNoYW50PjtcblxuICBjcmVhdGUocmVxdWVzdDogQ3JlYXRlSW5wdXQpOiBPYnNlcnZhYmxlPENyZWF0ZU1lcmNoYW50UmVzcG9uc2U+O1xuXG4gIGNvdW50KHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8Q291bnQ+O1xuXG4gIGZpbmRCeUlkKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxOdWxsYWJsZU1lcmNoYW50PjtcblxuICAvKiogYnJhbmNoICovXG5cbiAgYnJhbmNoKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8TnVsbGFibGVCcmFuY2g+O1xuXG4gIGZpbmRCcmFuY2hlcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPEJyYW5jaFBhZ2luYXRpb24+O1xuXG4gIGJyYW5jaGVzKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8QnJhbmNoZXM+O1xuXG4gIGZpbmRCcmFuY2hCeUlkKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxOdWxsYWJsZUJyYW5jaD47XG5cbiAgY3JlYXRlQnJhbmNoKHJlcXVlc3Q6IENyZWF0ZUJyYW5jaElucHV0KTogT2JzZXJ2YWJsZTxCcmFuY2g+O1xuXG4gIHVwZGF0ZUJyYW5jaChyZXF1ZXN0OiBVcGRhdGVCcmFuY2hJbnB1dCk6IE9ic2VydmFibGU8QnJhbmNoPjtcblxuICBkZWxldGVCcmFuY2gocmVxdWVzdDogSWQpOiBPYnNlcnZhYmxlPENvdW50PjtcblxuICAvKiogZ3JvdXAgKi9cblxuICBncm91cChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPE51bGxhYmxlR3JvdXA+O1xuXG4gIGdyb3VwcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPEdyb3VwUGFnaW5hdGlvbj47XG5cbiAgZmluZEdyb3VwQnlJZChyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8TnVsbGFibGVHcm91cD47XG5cbiAgY3JlYXRlR3JvdXAocmVxdWVzdDogQ3JlYXRlR3JvdXBJbnB1dCk6IE9ic2VydmFibGU8R3JvdXA+O1xuXG4gIHVwZGF0ZUdyb3VwKHJlcXVlc3Q6IFVwZGF0ZUdyb3VwSW5wdXQpOiBPYnNlcnZhYmxlPEdyb3VwPjtcblxuICBkZWxldGVHcm91cChyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8Q291bnQ+O1xuXG4gIC8qKiBzZXJ2aWNlICovXG5cbiAgc2VydmljZShyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPE51bGxhYmxlU2VydmljZT47XG5cbiAgc2VydmljZXMocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxGaW5kU2VydmljZXNQYXlsb2FkPjtcblxuICBmaW5kU2VydmljZUJ5SWQocmVxdWVzdDogSWQpOiBPYnNlcnZhYmxlPE51bGxhYmxlU2VydmljZT47XG5cbiAgY3JlYXRlU2VydmljZShyZXF1ZXN0OiBDcmVhdGVTZXJ2aWNlSW5wdXQpOiBPYnNlcnZhYmxlPFNlcnZpY2U+O1xuXG4gIHVwZGF0ZVNlcnZpY2UocmVxdWVzdDogVXBkYXRlU2VydmljZUlucHV0KTogT2JzZXJ2YWJsZTxTZXJ2aWNlPjtcblxuICBkZWxldGVTZXJ2aWNlKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxDb3VudD47XG5cbiAgZmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8RmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXJjaGFudFNlcnZpY2VDb250cm9sbGVyIHtcbiAgZmluZChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE1lcmNoYW50UGFnaW5hdGlvbj4gfCBPYnNlcnZhYmxlPE1lcmNoYW50UGFnaW5hdGlvbj4gfCBNZXJjaGFudFBhZ2luYXRpb247XG5cbiAgZmluZEFsbChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE1lcmNoYW50cz4gfCBPYnNlcnZhYmxlPE1lcmNoYW50cz4gfCBNZXJjaGFudHM7XG5cbiAgZmluZE9uZShyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE51bGxhYmxlTWVyY2hhbnQ+IHwgT2JzZXJ2YWJsZTxOdWxsYWJsZU1lcmNoYW50PiB8IE51bGxhYmxlTWVyY2hhbnQ7XG5cbiAgY3JlYXRlKFxuICAgIHJlcXVlc3Q6IENyZWF0ZUlucHV0LFxuICApOiBQcm9taXNlPENyZWF0ZU1lcmNoYW50UmVzcG9uc2U+IHwgT2JzZXJ2YWJsZTxDcmVhdGVNZXJjaGFudFJlc3BvbnNlPiB8IENyZWF0ZU1lcmNoYW50UmVzcG9uc2U7XG5cbiAgY291bnQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xuXG4gIGZpbmRCeUlkKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxOdWxsYWJsZU1lcmNoYW50PiB8IE9ic2VydmFibGU8TnVsbGFibGVNZXJjaGFudD4gfCBOdWxsYWJsZU1lcmNoYW50O1xuXG4gIC8qKiBicmFuY2ggKi9cblxuICBicmFuY2gocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxOdWxsYWJsZUJyYW5jaD4gfCBPYnNlcnZhYmxlPE51bGxhYmxlQnJhbmNoPiB8IE51bGxhYmxlQnJhbmNoO1xuXG4gIGZpbmRCcmFuY2hlcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPEJyYW5jaFBhZ2luYXRpb24+IHwgT2JzZXJ2YWJsZTxCcmFuY2hQYWdpbmF0aW9uPiB8IEJyYW5jaFBhZ2luYXRpb247XG5cbiAgYnJhbmNoZXMocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxCcmFuY2hlcz4gfCBPYnNlcnZhYmxlPEJyYW5jaGVzPiB8IEJyYW5jaGVzO1xuXG4gIGZpbmRCcmFuY2hCeUlkKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxOdWxsYWJsZUJyYW5jaD4gfCBPYnNlcnZhYmxlPE51bGxhYmxlQnJhbmNoPiB8IE51bGxhYmxlQnJhbmNoO1xuXG4gIGNyZWF0ZUJyYW5jaChyZXF1ZXN0OiBDcmVhdGVCcmFuY2hJbnB1dCk6IFByb21pc2U8QnJhbmNoPiB8IE9ic2VydmFibGU8QnJhbmNoPiB8IEJyYW5jaDtcblxuICB1cGRhdGVCcmFuY2gocmVxdWVzdDogVXBkYXRlQnJhbmNoSW5wdXQpOiBQcm9taXNlPEJyYW5jaD4gfCBPYnNlcnZhYmxlPEJyYW5jaD4gfCBCcmFuY2g7XG5cbiAgZGVsZXRlQnJhbmNoKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xuXG4gIC8qKiBncm91cCAqL1xuXG4gIGdyb3VwKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8TnVsbGFibGVHcm91cD4gfCBPYnNlcnZhYmxlPE51bGxhYmxlR3JvdXA+IHwgTnVsbGFibGVHcm91cDtcblxuICBncm91cHMocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxHcm91cFBhZ2luYXRpb24+IHwgT2JzZXJ2YWJsZTxHcm91cFBhZ2luYXRpb24+IHwgR3JvdXBQYWdpbmF0aW9uO1xuXG4gIGZpbmRHcm91cEJ5SWQocmVxdWVzdDogSWQpOiBQcm9taXNlPE51bGxhYmxlR3JvdXA+IHwgT2JzZXJ2YWJsZTxOdWxsYWJsZUdyb3VwPiB8IE51bGxhYmxlR3JvdXA7XG5cbiAgY3JlYXRlR3JvdXAocmVxdWVzdDogQ3JlYXRlR3JvdXBJbnB1dCk6IFByb21pc2U8R3JvdXA+IHwgT2JzZXJ2YWJsZTxHcm91cD4gfCBHcm91cDtcblxuICB1cGRhdGVHcm91cChyZXF1ZXN0OiBVcGRhdGVHcm91cElucHV0KTogUHJvbWlzZTxHcm91cD4gfCBPYnNlcnZhYmxlPEdyb3VwPiB8IEdyb3VwO1xuXG4gIGRlbGV0ZUdyb3VwKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xuXG4gIC8qKiBzZXJ2aWNlICovXG5cbiAgc2VydmljZShyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE51bGxhYmxlU2VydmljZT4gfCBPYnNlcnZhYmxlPE51bGxhYmxlU2VydmljZT4gfCBOdWxsYWJsZVNlcnZpY2U7XG5cbiAgc2VydmljZXMocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxGaW5kU2VydmljZXNQYXlsb2FkPiB8IE9ic2VydmFibGU8RmluZFNlcnZpY2VzUGF5bG9hZD4gfCBGaW5kU2VydmljZXNQYXlsb2FkO1xuXG4gIGZpbmRTZXJ2aWNlQnlJZChyZXF1ZXN0OiBJZCk6IFByb21pc2U8TnVsbGFibGVTZXJ2aWNlPiB8IE9ic2VydmFibGU8TnVsbGFibGVTZXJ2aWNlPiB8IE51bGxhYmxlU2VydmljZTtcblxuICBjcmVhdGVTZXJ2aWNlKHJlcXVlc3Q6IENyZWF0ZVNlcnZpY2VJbnB1dCk6IFByb21pc2U8U2VydmljZT4gfCBPYnNlcnZhYmxlPFNlcnZpY2U+IHwgU2VydmljZTtcblxuICB1cGRhdGVTZXJ2aWNlKHJlcXVlc3Q6IFVwZGF0ZVNlcnZpY2VJbnB1dCk6IFByb21pc2U8U2VydmljZT4gfCBPYnNlcnZhYmxlPFNlcnZpY2U+IHwgU2VydmljZTtcblxuICBkZWxldGVTZXJ2aWNlKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xuXG4gIGZpbmRTZXJ2aWNlT2Zmc2V0UGFnaW5hdGlvbihcbiAgICByZXF1ZXN0OiBRdWVyeVJlcXVlc3QsXG4gICk6IFByb21pc2U8RmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uPiB8IE9ic2VydmFibGU8RmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uPiB8IEZpbmRTZXJ2aWNlT2Zmc2V0UGFnaW5hdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1lcmNoYW50U2VydmljZUNvbnRyb2xsZXJNZXRob2RzKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnN0cnVjdG9yOiBGdW5jdGlvbikge1xuICAgIGNvbnN0IGdycGNNZXRob2RzOiBzdHJpbmdbXSA9IFtcbiAgICAgIFwiZmluZFwiLFxuICAgICAgXCJmaW5kQWxsXCIsXG4gICAgICBcImZpbmRPbmVcIixcbiAgICAgIFwiY3JlYXRlXCIsXG4gICAgICBcImNvdW50XCIsXG4gICAgICBcImZpbmRCeUlkXCIsXG4gICAgICBcImJyYW5jaFwiLFxuICAgICAgXCJmaW5kQnJhbmNoZXNcIixcbiAgICAgIFwiYnJhbmNoZXNcIixcbiAgICAgIFwiZmluZEJyYW5jaEJ5SWRcIixcbiAgICAgIFwiY3JlYXRlQnJhbmNoXCIsXG4gICAgICBcInVwZGF0ZUJyYW5jaFwiLFxuICAgICAgXCJkZWxldGVCcmFuY2hcIixcbiAgICAgIFwiZ3JvdXBcIixcbiAgICAgIFwiZ3JvdXBzXCIsXG4gICAgICBcImZpbmRHcm91cEJ5SWRcIixcbiAgICAgIFwiY3JlYXRlR3JvdXBcIixcbiAgICAgIFwidXBkYXRlR3JvdXBcIixcbiAgICAgIFwiZGVsZXRlR3JvdXBcIixcbiAgICAgIFwic2VydmljZVwiLFxuICAgICAgXCJzZXJ2aWNlc1wiLFxuICAgICAgXCJmaW5kU2VydmljZUJ5SWRcIixcbiAgICAgIFwiY3JlYXRlU2VydmljZVwiLFxuICAgICAgXCJ1cGRhdGVTZXJ2aWNlXCIsXG4gICAgICBcImRlbGV0ZVNlcnZpY2VcIixcbiAgICAgIFwiZmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uXCIsXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY01ldGhvZChcIk1lcmNoYW50U2VydmljZVwiLCBtZXRob2QpKGNvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2RdLCBtZXRob2QsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICBjb25zdCBncnBjU3RyZWFtTWV0aG9kczogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjU3RyZWFtTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY1N0cmVhbU1ldGhvZChcIk1lcmNoYW50U2VydmljZVwiLCBtZXRob2QpKGNvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2RdLCBtZXRob2QsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IE1FUkNIQU5UX1NFUlZJQ0VfTkFNRSA9IFwiTWVyY2hhbnRTZXJ2aWNlXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgRVVzZXJSb2xlLCBFVXNlclN0YXR1cywgUGFnZU1ldGEgfSBmcm9tIFwiLi9jb21tb25zXCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcIm1lcmNoYW50X3VzZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBNZXJjaGFudFVzZXIge1xuICAvKiogZGVmYXVsdCBmaWVsZCAqL1xuICBpZDogbnVtYmVyO1xuICBjcmVhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjcmVhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEJ5PzpcbiAgICB8IHN0cmluZ1xuICAgIHwgdW5kZWZpbmVkO1xuICAvKiogcmVzZXJ2ZWQgZmllbGQgKi9cbiAgcm9sZT86IEVVc2VyUm9sZSB8IHVuZGVmaW5lZDtcbiAgc3RhdHVzPzogRVVzZXJTdGF0dXMgfCB1bmRlZmluZWQ7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTWVyY2hhbnRVc2VySW5wdXQge1xuICByb2xlPzogRVVzZXJSb2xlIHwgdW5kZWZpbmVkO1xuICBzdGF0dXM/OiBFVXNlclN0YXR1cyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBicmFuY2hJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXJjaGFudFVzZXJzIHtcbiAgaXRlbXM6IE1lcmNoYW50VXNlcltdO1xuICBtZXRhPzogUGFnZU1ldGEgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlTWVyY2hhbnRVc2VyRGF0YSB7XG4gIHJvbGU/OiBFVXNlclJvbGUgfCB1bmRlZmluZWQ7XG4gIHN0YXR1cz86IEVVc2VyU3RhdHVzIHwgdW5kZWZpbmVkO1xuICB1c2VySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZU1lcmNoYW50VXNlcklucHV0IHtcbiAgaWQ6IG51bWJlcjtcbiAgZGF0YTogVXBkYXRlTWVyY2hhbnRVc2VyRGF0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IE1FUkNIQU5UX1VTRVJfUEFDS0FHRV9OQU1FID0gXCJtZXJjaGFudF91c2VyXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgR3JwY01ldGhvZCwgR3JwY1N0cmVhbU1ldGhvZCB9IGZyb20gXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgRUJvb2tpbmdTdGF0dXMsIEVOb3RpZmljYXRpb25UeXBlIH0gZnJvbSBcIi4vY29tbW9uc1wiO1xuaW1wb3J0IHsgTnVsbFZhbHVlIH0gZnJvbSBcIi4vZ29vZ2xlL3Byb3RvYnVmL3N0cnVjdFwiO1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJub3RpZmljYXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb24ge1xuICAvKiogZGVmYXVsdCBmaWVsZCAqL1xuICBpZDogbnVtYmVyO1xuICBjcmVhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjcmVhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEJ5PzpcbiAgICB8IHN0cmluZ1xuICAgIHwgdW5kZWZpbmVkO1xuICAvKiogcmVzZXJ2ZWQgZmllbGQgKi9cbiAgc3RhdHVzPzogRUJvb2tpbmdTdGF0dXMgfCB1bmRlZmluZWQ7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc2VydmljZUlkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzdGFydFRpbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGVuZFRpbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGR1cmF0aW9uPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBub3RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBicmFuY2hJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgaXNDdXN0b21lckNhbmNlbD86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIGNhbmNlbFJlYXNvbj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYm9va2luZ0RhdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGlzQWRtaW5VcGRhdGU/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICBhZG1pblVwZGF0ZUlkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZXJ2aWNlTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lckVtYWlsPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lckFkZHJlc3M/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGR1cmF0aW9uSG91cj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZHVyYXRpb25NaW51dGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlbmRlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB0aXRsZUVuPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB0aXRsZVZpPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBib2R5RW4/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGJvZHlWaT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdHlwZT86IEVOb3RpZmljYXRpb25UeXBlIHwgdW5kZWZpbmVkO1xuICBkYXRhX2pzb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTm90aWZpY2F0aW9uSW5wdXQge1xuICBzdGF0dXM/OiBFQm9va2luZ1N0YXR1cyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZXJ2aWNlSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHN0YXJ0VGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZW5kVGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRtaW5CcmFuY2hFbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJFbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBib29raW5nRGF0ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbm90ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2VOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBzZW5kZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgdGl0bGVFbj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdGl0bGVWaT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYm9keUVuPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBib2R5Vmk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHR5cGU/OiBFTm90aWZpY2F0aW9uVHlwZSB8IHVuZGVmaW5lZDtcbiAgZGF0YV9qc29uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE51bGxhYmxlTm90aWZpY2F0aW9uIHtcbiAgbnVsbD86IE51bGxWYWx1ZSB8IHVuZGVmaW5lZDtcbiAgbm90aWZpY2F0aW9uPzogTm90aWZpY2F0aW9uIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgTk9USUZJQ0FUSU9OX1BBQ0tBR0VfTkFNRSA9IFwibm90aWZpY2F0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uU2VydmljZUNsaWVudCB7XG4gIGNyZWF0ZShyZXF1ZXN0OiBDcmVhdGVOb3RpZmljYXRpb25JbnB1dCk6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uPjtcblxuICBjcmVhdGVCb29raW5nTm90aWZpY2F0aW9uKHJlcXVlc3Q6IENyZWF0ZU5vdGlmaWNhdGlvbklucHV0KTogT2JzZXJ2YWJsZTxOb3RpZmljYXRpb24+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvblNlcnZpY2VDb250cm9sbGVyIHtcbiAgY3JlYXRlKHJlcXVlc3Q6IENyZWF0ZU5vdGlmaWNhdGlvbklucHV0KTogUHJvbWlzZTxOb3RpZmljYXRpb24+IHwgT2JzZXJ2YWJsZTxOb3RpZmljYXRpb24+IHwgTm90aWZpY2F0aW9uO1xuXG4gIGNyZWF0ZUJvb2tpbmdOb3RpZmljYXRpb24oXG4gICAgcmVxdWVzdDogQ3JlYXRlTm90aWZpY2F0aW9uSW5wdXQsXG4gICk6IFByb21pc2U8Tm90aWZpY2F0aW9uPiB8IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uPiB8IE5vdGlmaWNhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5vdGlmaWNhdGlvblNlcnZpY2VDb250cm9sbGVyTWV0aG9kcygpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb25zdHJ1Y3RvcjogRnVuY3Rpb24pIHtcbiAgICBjb25zdCBncnBjTWV0aG9kczogc3RyaW5nW10gPSBbXCJjcmVhdGVcIiwgXCJjcmVhdGVCb29raW5nTm90aWZpY2F0aW9uXCJdO1xuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIGdycGNNZXRob2RzKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yOiBhbnkgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG1ldGhvZCk7XG4gICAgICBHcnBjTWV0aG9kKFwiTm90aWZpY2F0aW9uU2VydmljZVwiLCBtZXRob2QpKGNvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2RdLCBtZXRob2QsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICBjb25zdCBncnBjU3RyZWFtTWV0aG9kczogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjU3RyZWFtTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY1N0cmVhbU1ldGhvZChcIk5vdGlmaWNhdGlvblNlcnZpY2VcIiwgbWV0aG9kKShjb25zdHJ1Y3Rvci5wcm90b3R5cGVbbWV0aG9kXSwgbWV0aG9kLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBOT1RJRklDQVRJT05fU0VSVklDRV9OQU1FID0gXCJOb3RpZmljYXRpb25TZXJ2aWNlXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgUGFnZUluZm8gfSBmcm9tIFwiLi9jb21tb25zXCI7XG5pbXBvcnQgeyBOdWxsVmFsdWUgfSBmcm9tIFwiLi9nb29nbGUvcHJvdG9idWYvc3RydWN0XCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcInNlcnZpY2VcIjtcblxuZXhwb3J0IGVudW0gRVNlcnZpY2VTaG93VHlwZSB7XG4gIEJPVEggPSAwLFxuICBDQVNISUVSID0gMSxcbiAgQk9PS0lORyA9IDIsXG4gIE5PTkUgPSAzLFxufVxuXG5leHBvcnQgZW51bSBFU2VydmljZVR5cGUge1xuICBTRVJWSUNFID0gMCxcbiAgUFJPRFVDVCA9IDEsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlU2VydmljZURhdGEge1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBza3U/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBpbWFnZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVTZXJ2aWNlSW5wdXQge1xuICBpZDogbnVtYmVyO1xuICBkYXRhOiBVcGRhdGVTZXJ2aWNlRGF0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVTZXJ2aWNlSW5wdXQge1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBncm91cElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBwcmljZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgaW5pdGlhbFByaWNlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjYXBpdGFsUHJpY2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGR1cmF0aW9uSG91cj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZHVyYXRpb25NaW51dGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNrdT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29kZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGltYWdlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB0eXBlPzogRVNlcnZpY2VUeXBlIHwgdW5kZWZpbmVkO1xuICBzaG93VHlwZT86IEVTZXJ2aWNlU2hvd1R5cGUgfCB1bmRlZmluZWQ7XG4gIGNhblByaW50YWJsZUludm9pY2U/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2Uge1xuICAvKiogZGVmYXVsdCBmaWVsZCAqL1xuICBpZDogbnVtYmVyO1xuICBjcmVhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjcmVhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEJ5PzpcbiAgICB8IHN0cmluZ1xuICAgIHwgdW5kZWZpbmVkO1xuICAvKiogcmVzZXJ2ZWQgZmllbGQgKi9cbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZ3JvdXBJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcHJpY2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGluaXRpYWxQcmljZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2FwaXRhbFByaWNlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkdXJhdGlvbkhvdXI/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGR1cmF0aW9uTWludXRlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBza3U/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBpbWFnZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdHlwZT86IEVTZXJ2aWNlVHlwZSB8IHVuZGVmaW5lZDtcbiAgc2hvd1R5cGU/OiBFU2VydmljZVNob3dUeXBlIHwgdW5kZWZpbmVkO1xuICBjYW5QcmludGFibGVJbnZvaWNlPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlRWRnZSB7XG4gIG5vZGU6IFNlcnZpY2UgfCB1bmRlZmluZWQ7XG4gIGN1cnNvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRTZXJ2aWNlc1BheWxvYWQge1xuICBlZGdlczogU2VydmljZUVkZ2VbXTtcbiAgcGFnZUluZm86IFBhZ2VJbmZvIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE51bGxhYmxlU2VydmljZSB7XG4gIG51bGw/OiBOdWxsVmFsdWUgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2U/OiBTZXJ2aWNlIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRTZXJ2aWNlT2Zmc2V0UGFnaW5hdGlvbiB7XG4gIGl0ZW1zOiBTZXJ2aWNlW107XG4gIHRvdGFsUGFnZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgdG90YWw/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHBhZ2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxpbWl0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgU0VSVklDRV9QQUNLQUdFX05BTUUgPSBcInNlcnZpY2VcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBHcnBjTWV0aG9kLCBHcnBjU3RyZWFtTWV0aG9kIH0gZnJvbSBcIkBuZXN0anMvbWljcm9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBDb3VudCwgRUN1c3RvbWVyTGV2ZWwsIEVVc2VyR2VuZGVyLCBFVXNlclJvbGUsIEVVc2VyU3RhdHVzLCBJZCwgUGFnZU1ldGEsIFF1ZXJ5UmVxdWVzdCB9IGZyb20gXCIuL2NvbW1vbnNcIjtcbmltcG9ydCB7IENyZWF0ZURldmljZUlucHV0LCBEZXZpY2UsIERldmljZXMgfSBmcm9tIFwiLi9kZXZpY2VcIjtcbmltcG9ydCB7IE51bGxWYWx1ZSB9IGZyb20gXCIuL2dvb2dsZS9wcm90b2J1Zi9zdHJ1Y3RcIjtcbmltcG9ydCB7IENyZWF0ZU1lcmNoYW50VXNlcklucHV0LCBNZXJjaGFudFVzZXIgfSBmcm9tIFwiLi9tZXJjaGFudF91c2VyXCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImR1Y3BoX3VzZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgLyoqIGRlZmF1bHQgZmllbGQgKi9cbiAgaWQ6IG51bWJlcjtcbiAgY3JlYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3JlYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRCeT86XG4gICAgfCBzdHJpbmdcbiAgICB8IHVuZGVmaW5lZDtcbiAgLyoqIHJlc2VydmVkIGZpZWxkICovXG4gIGVtYWlsPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwYXNzd29yZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgc3RhdHVzPzogRVVzZXJTdGF0dXMgfCB1bmRlZmluZWQ7XG4gIGZ1bGxOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjb250YWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZU51bWJlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZG9iRGF5PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkb2JNb250aD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZG9iWWVhcj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcm9sZT86IEVVc2VyUm9sZSB8IHVuZGVmaW5lZDtcbiAgZ2VuZGVyPzogRVVzZXJHZW5kZXIgfCB1bmRlZmluZWQ7XG4gIG9jY3VwYXRpb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGF2YXRhcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHJlZmVycmVyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWZlcnJlckNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGxldmVsPzogRUN1c3RvbWVyTGV2ZWwgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyQ29kZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZmFjZWJvb2s/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHphbG9QaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaGVpZ2h0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3ZWlnaHQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG1lbWJlckNhcmRObz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29tcGFueT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdGF4Tm8/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG5vdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbGF0ZWRVc2VyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWxhdGVkVXNlclJvbGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbGF0ZWRVc2VyUGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBsYXRpdHVkZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbG9uZ2l0dWRlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBpc1JldGFpbEN1c3RvbWVyPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVVc2VySW5wdXQge1xuICBlbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGFzc3dvcmQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHN0YXR1cz86IEVVc2VyU3RhdHVzIHwgdW5kZWZpbmVkO1xuICBmdWxsTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29udGFjdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGhvbmVOdW1iZXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRvYkRheT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZG9iTW9udGg/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRvYlllYXI/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHJvbGU/OiBFVXNlclJvbGUgfCB1bmRlZmluZWQ7XG4gIGdlbmRlcj86IEVVc2VyR2VuZGVyIHwgdW5kZWZpbmVkO1xuICBvY2N1cGF0aW9uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhdmF0YXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGFkZHJlc3M/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNpdHlDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkaXN0cmljdENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHdhcmRDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICByZWZlcnJlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVmZXJyZXJDb2RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBsZXZlbD86IEVDdXN0b21lckxldmVsIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lckNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGZhY2Vib29rPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB6YWxvUGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGhlaWdodD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2VpZ2h0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBtZW1iZXJDYXJkTm8/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvbXBhbnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHRheE5vPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBub3RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWxhdGVkVXNlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVsYXRlZFVzZXJSb2xlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWxhdGVkVXNlclBob25lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBicmFuY2hJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbGF0aXR1ZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxvbmdpdHVkZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgaXNSZXRhaWxDdXN0b21lcj86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlVXNlclJlcXVlc3Qge1xuICB1c2VyOiBDcmVhdGVVc2VySW5wdXQgfCB1bmRlZmluZWQ7XG4gIGRldmljZT86IENyZWF0ZURldmljZUlucHV0IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRPbmVVc2VyIHtcbiAgdXNlcjogVXNlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVVc2VySW5wdXQge1xuICBpZDogbnVtYmVyO1xuICBkYXRhOiBVcGRhdGVVc2VyRGF0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOdWxsYWJsZVVzZXIge1xuICBudWxsPzogTnVsbFZhbHVlIHwgdW5kZWZpbmVkO1xuICB1c2VyPzogVXNlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVVc2VyRGF0YSB7XG4gIGVtYWlsPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwYXNzd29yZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgc3RhdHVzPzogRVVzZXJTdGF0dXMgfCB1bmRlZmluZWQ7XG4gIGZ1bGxOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjb250YWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZU51bWJlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZG9iRGF5PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkb2JNb250aD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZG9iWWVhcj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcm9sZT86IEVVc2VyUm9sZSB8IHVuZGVmaW5lZDtcbiAgZ2VuZGVyPzogRVVzZXJHZW5kZXIgfCB1bmRlZmluZWQ7XG4gIG9jY3VwYXRpb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGF2YXRhcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHJlZmVycmVyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWZlcnJlckNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGxldmVsPzogRUN1c3RvbWVyTGV2ZWwgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyQ29kZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZmFjZWJvb2s/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHphbG9QaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaGVpZ2h0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3ZWlnaHQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG1lbWJlckNhcmRObz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29tcGFueT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdGF4Tm8/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG5vdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbGF0ZWRVc2VyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWxhdGVkVXNlclJvbGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbGF0ZWRVc2VyUGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZE9wZXJhdG9ySW5wdXQge1xuICB1c2VyOiBDcmVhdGVVc2VySW5wdXQgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50VXNlcj86IENyZWF0ZU1lcmNoYW50VXNlcklucHV0IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkbWluVXBkYXRlQ3VzdG9tZXJJbnB1dCB7XG4gIGlkOiBudW1iZXI7XG4gIHVzZXI6IFVwZGF0ZVVzZXJEYXRhIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudFVzZXI/OiBDcmVhdGVNZXJjaGFudFVzZXJJbnB1dCB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyUGFnaW5hdGlvbiB7XG4gIGl0ZW1zOiBVc2VyW107XG4gIG1ldGE/OiBQYWdlTWV0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IERVQ1BIX1VTRVJfUEFDS0FHRV9OQU1FID0gXCJkdWNwaF91c2VyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclNlcnZpY2VDbGllbnQge1xuICBmaW5kKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8VXNlclBhZ2luYXRpb24+O1xuXG4gIGNyZWF0ZShyZXF1ZXN0OiBDcmVhdGVVc2VyUmVxdWVzdCk6IE9ic2VydmFibGU8RmluZE9uZVVzZXI+O1xuXG4gIGZpbmRCeUlkKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxOdWxsYWJsZVVzZXI+O1xuXG4gIGZpbmRPbmUocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxOdWxsYWJsZVVzZXI+O1xuXG4gIGNvdW50KHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8Q291bnQ+O1xuXG4gIHVwZGF0ZShyZXF1ZXN0OiBVcGRhdGVVc2VySW5wdXQpOiBPYnNlcnZhYmxlPEZpbmRPbmVVc2VyPjtcblxuICBkZWxldGVDdXN0b21lcihyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8Q291bnQ+O1xuXG4gIC8qKiBkZXZpY2UgKi9cblxuICBjcmVhdGVEZXZpY2UocmVxdWVzdDogQ3JlYXRlRGV2aWNlSW5wdXQpOiBPYnNlcnZhYmxlPERldmljZT47XG5cbiAgZmluZERldmljZXMocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxEZXZpY2VzPjtcblxuICB1cHNlcnREZXZpY2UocmVxdWVzdDogQ3JlYXRlRGV2aWNlSW5wdXQpOiBPYnNlcnZhYmxlPERldmljZT47XG5cbiAgLyoqIG1lcmNoYW50X3VzZXIgKi9cblxuICBjcmVhdGVNZXJjaGFudFVzZXIocmVxdWVzdDogQ3JlYXRlTWVyY2hhbnRVc2VySW5wdXQpOiBPYnNlcnZhYmxlPE1lcmNoYW50VXNlcj47XG5cbiAgYWRkT3BlcmF0b3IocmVxdWVzdDogQWRkT3BlcmF0b3JJbnB1dCk6IE9ic2VydmFibGU8RmluZE9uZVVzZXI+O1xuXG4gIGNvdW50Q3VzdG9tZXIocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxDb3VudD47XG5cbiAgLyoqIGN1c3RvbWVyICovXG5cbiAgYWRkQ3VzdG9tZXIocmVxdWVzdDogQWRkT3BlcmF0b3JJbnB1dCk6IE9ic2VydmFibGU8RmluZE9uZVVzZXI+O1xuXG4gIHVwZGF0ZUN1c3RvbWVyKHJlcXVlc3Q6IEFkbWluVXBkYXRlQ3VzdG9tZXJJbnB1dCk6IE9ic2VydmFibGU8RmluZE9uZVVzZXI+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTZXJ2aWNlQ29udHJvbGxlciB7XG4gIGZpbmQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxVc2VyUGFnaW5hdGlvbj4gfCBPYnNlcnZhYmxlPFVzZXJQYWdpbmF0aW9uPiB8IFVzZXJQYWdpbmF0aW9uO1xuXG4gIGNyZWF0ZShyZXF1ZXN0OiBDcmVhdGVVc2VyUmVxdWVzdCk6IFByb21pc2U8RmluZE9uZVVzZXI+IHwgT2JzZXJ2YWJsZTxGaW5kT25lVXNlcj4gfCBGaW5kT25lVXNlcjtcblxuICBmaW5kQnlJZChyZXF1ZXN0OiBJZCk6IFByb21pc2U8TnVsbGFibGVVc2VyPiB8IE9ic2VydmFibGU8TnVsbGFibGVVc2VyPiB8IE51bGxhYmxlVXNlcjtcblxuICBmaW5kT25lKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8TnVsbGFibGVVc2VyPiB8IE9ic2VydmFibGU8TnVsbGFibGVVc2VyPiB8IE51bGxhYmxlVXNlcjtcblxuICBjb3VudChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPENvdW50PiB8IE9ic2VydmFibGU8Q291bnQ+IHwgQ291bnQ7XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFVwZGF0ZVVzZXJJbnB1dCk6IFByb21pc2U8RmluZE9uZVVzZXI+IHwgT2JzZXJ2YWJsZTxGaW5kT25lVXNlcj4gfCBGaW5kT25lVXNlcjtcblxuICBkZWxldGVDdXN0b21lcihyZXF1ZXN0OiBJZCk6IFByb21pc2U8Q291bnQ+IHwgT2JzZXJ2YWJsZTxDb3VudD4gfCBDb3VudDtcblxuICAvKiogZGV2aWNlICovXG5cbiAgY3JlYXRlRGV2aWNlKHJlcXVlc3Q6IENyZWF0ZURldmljZUlucHV0KTogUHJvbWlzZTxEZXZpY2U+IHwgT2JzZXJ2YWJsZTxEZXZpY2U+IHwgRGV2aWNlO1xuXG4gIGZpbmREZXZpY2VzKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8RGV2aWNlcz4gfCBPYnNlcnZhYmxlPERldmljZXM+IHwgRGV2aWNlcztcblxuICB1cHNlcnREZXZpY2UocmVxdWVzdDogQ3JlYXRlRGV2aWNlSW5wdXQpOiBQcm9taXNlPERldmljZT4gfCBPYnNlcnZhYmxlPERldmljZT4gfCBEZXZpY2U7XG5cbiAgLyoqIG1lcmNoYW50X3VzZXIgKi9cblxuICBjcmVhdGVNZXJjaGFudFVzZXIocmVxdWVzdDogQ3JlYXRlTWVyY2hhbnRVc2VySW5wdXQpOiBQcm9taXNlPE1lcmNoYW50VXNlcj4gfCBPYnNlcnZhYmxlPE1lcmNoYW50VXNlcj4gfCBNZXJjaGFudFVzZXI7XG5cbiAgYWRkT3BlcmF0b3IocmVxdWVzdDogQWRkT3BlcmF0b3JJbnB1dCk6IFByb21pc2U8RmluZE9uZVVzZXI+IHwgT2JzZXJ2YWJsZTxGaW5kT25lVXNlcj4gfCBGaW5kT25lVXNlcjtcblxuICBjb3VudEN1c3RvbWVyKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8Q291bnQ+IHwgT2JzZXJ2YWJsZTxDb3VudD4gfCBDb3VudDtcblxuICAvKiogY3VzdG9tZXIgKi9cblxuICBhZGRDdXN0b21lcihyZXF1ZXN0OiBBZGRPcGVyYXRvcklucHV0KTogUHJvbWlzZTxGaW5kT25lVXNlcj4gfCBPYnNlcnZhYmxlPEZpbmRPbmVVc2VyPiB8IEZpbmRPbmVVc2VyO1xuXG4gIHVwZGF0ZUN1c3RvbWVyKHJlcXVlc3Q6IEFkbWluVXBkYXRlQ3VzdG9tZXJJbnB1dCk6IFByb21pc2U8RmluZE9uZVVzZXI+IHwgT2JzZXJ2YWJsZTxGaW5kT25lVXNlcj4gfCBGaW5kT25lVXNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJTZXJ2aWNlQ29udHJvbGxlck1ldGhvZHMoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29uc3RydWN0b3I6IEZ1bmN0aW9uKSB7XG4gICAgY29uc3QgZ3JwY01ldGhvZHM6IHN0cmluZ1tdID0gW1xuICAgICAgXCJmaW5kXCIsXG4gICAgICBcImNyZWF0ZVwiLFxuICAgICAgXCJmaW5kQnlJZFwiLFxuICAgICAgXCJmaW5kT25lXCIsXG4gICAgICBcImNvdW50XCIsXG4gICAgICBcInVwZGF0ZVwiLFxuICAgICAgXCJkZWxldGVDdXN0b21lclwiLFxuICAgICAgXCJjcmVhdGVEZXZpY2VcIixcbiAgICAgIFwiZmluZERldmljZXNcIixcbiAgICAgIFwidXBzZXJ0RGV2aWNlXCIsXG4gICAgICBcImNyZWF0ZU1lcmNoYW50VXNlclwiLFxuICAgICAgXCJhZGRPcGVyYXRvclwiLFxuICAgICAgXCJjb3VudEN1c3RvbWVyXCIsXG4gICAgICBcImFkZEN1c3RvbWVyXCIsXG4gICAgICBcInVwZGF0ZUN1c3RvbWVyXCIsXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY01ldGhvZChcIlVzZXJTZXJ2aWNlXCIsIG1ldGhvZCkoY29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZF0sIG1ldGhvZCwgZGVzY3JpcHRvcik7XG4gICAgfVxuICAgIGNvbnN0IGdycGNTdHJlYW1NZXRob2RzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIGdycGNTdHJlYW1NZXRob2RzKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yOiBhbnkgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG1ldGhvZCk7XG4gICAgICBHcnBjU3RyZWFtTWV0aG9kKFwiVXNlclNlcnZpY2VcIiwgbWV0aG9kKShjb25zdHJ1Y3Rvci5wcm90b3R5cGVbbWV0aG9kXSwgbWV0aG9kLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBVU0VSX1NFUlZJQ0VfTkFNRSA9IFwiVXNlclNlcnZpY2VcIjtcbiIsImltcG9ydCB7XG4gIEJvb2tpbmdDb25maWcsXG4gIEJvb2tpbmdQcm90byxcbiAgTWVyY2hhbnRDb25maWcsXG4gIE1lcmNoYW50UHJvdG8sXG4gIE5vdGlmaWNhdGlvbkNvbmZpZyxcbiAgTm90aWZpY2F0aW9uUHJvdG8sXG4gIFVzZXJDb25maWcsXG4gIFVzZXJQcm90byxcbn0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5pbXBvcnQgeyBUcmFuc3BvcnQgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuXG5leHBvcnQgY29uc3QgVXNlclNlcnZlcjogYW55ID0ge1xuICBuYW1lOiBVc2VyUHJvdG8uRFVDUEhfVVNFUl9QQUNLQUdFX05BTUUsXG4gIHRyYW5zcG9ydDogVHJhbnNwb3J0LkdSUEMsXG4gIG9wdGlvbnM6IHtcbiAgICBwYWNrYWdlOiBVc2VyUHJvdG8uRFVDUEhfVVNFUl9QQUNLQUdFX05BTUUsXG4gICAgcHJvdG9QYXRoOiBVc2VyQ29uZmlnLnBhdGgsXG4gICAgdXJsOiBgJHtVc2VyQ29uZmlnLmxvY2FsSG9zdG5hbWV9OiR7VXNlckNvbmZpZy5wb3J0fWAsXG4gICAgbG9hZGVyOiBVc2VyQ29uZmlnLmxvYWRlcixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBNZXJjaGFudFNlcnZlcjogYW55ID0ge1xuICBuYW1lOiBNZXJjaGFudFByb3RvLk1FUkNIQU5UX1BBQ0tBR0VfTkFNRSxcbiAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuR1JQQyxcbiAgb3B0aW9uczoge1xuICAgIHBhY2thZ2U6IE1lcmNoYW50UHJvdG8uTUVSQ0hBTlRfUEFDS0FHRV9OQU1FLFxuICAgIHByb3RvUGF0aDogTWVyY2hhbnRDb25maWcucGF0aCxcbiAgICB1cmw6IGAke01lcmNoYW50Q29uZmlnLmxvY2FsSG9zdG5hbWV9OiR7TWVyY2hhbnRDb25maWcucG9ydH1gLFxuICAgIGxvYWRlcjogTWVyY2hhbnRDb25maWcubG9hZGVyLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEJvb2tpbmdTZXJ2ZXI6IGFueSA9IHtcbiAgbmFtZTogQm9va2luZ1Byb3RvLkJPT0tJTkdfUEFDS0FHRV9OQU1FLFxuICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5HUlBDLFxuICBvcHRpb25zOiB7XG4gICAgcGFja2FnZTogQm9va2luZ1Byb3RvLkJPT0tJTkdfUEFDS0FHRV9OQU1FLFxuICAgIHByb3RvUGF0aDogQm9va2luZ0NvbmZpZy5wYXRoLFxuICAgIHVybDogYCR7Qm9va2luZ0NvbmZpZy5sb2NhbEhvc3RuYW1lfToke0Jvb2tpbmdDb25maWcucG9ydH1gLFxuICAgIGxvYWRlcjogQm9va2luZ0NvbmZpZy5sb2FkZXIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uU2VydmVyOiBhbnkgPSB7XG4gIG5hbWU6IE5vdGlmaWNhdGlvblByb3RvLk5PVElGSUNBVElPTl9QQUNLQUdFX05BTUUsXG4gIHRyYW5zcG9ydDogVHJhbnNwb3J0LkdSUEMsXG4gIG9wdGlvbnM6IHtcbiAgICBwYWNrYWdlOiBOb3RpZmljYXRpb25Qcm90by5OT1RJRklDQVRJT05fUEFDS0FHRV9OQU1FLFxuICAgIHByb3RvUGF0aDogTm90aWZpY2F0aW9uQ29uZmlnLnBhdGgsXG4gICAgdXJsOiBgJHtOb3RpZmljYXRpb25Db25maWcubG9jYWxIb3N0bmFtZX06JHtOb3RpZmljYXRpb25Db25maWcucG9ydH1gLFxuICAgIGxvYWRlcjogTm90aWZpY2F0aW9uQ29uZmlnLmxvYWRlcixcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYWxsSGFuZGxlciwgRXhlY3V0aW9uQ29udGV4dCwgSW5qZWN0YWJsZSwgTG9nZ2VyLCBOZXN0SW50ZXJjZXB0b3IgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcnBjTG9nSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBOZXN0SW50ZXJjZXB0b3Ige1xuICBwcml2YXRlIHJlYWRvbmx5IGxvZ2dlciA9IG5ldyBMb2dnZXIoR3JwY0xvZ0ludGVyY2VwdG9yLm5hbWUpO1xuXG4gIGludGVyY2VwdChjb250ZXh0OiBFeGVjdXRpb25Db250ZXh0LCBuZXh0OiBDYWxsSGFuZGxlcik6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGNvbnN0IHJlcUJvZHkgPSBjb250ZXh0LnN3aXRjaFRvUnBjKCkuZ2V0RGF0YSgpO1xuICAgIGNvbnN0IG1ldGhvZCA9IGNvbnRleHQuZ2V0SGFuZGxlcigpLm5hbWU7XG4gICAgY29uc3QgY29udGV4dFR5cGUgPSBjb250ZXh0LmdldFR5cGUoKTtcbiAgICBjb25zdCBjb250cm9sbGVyTmFtZSA9IGNvbnRleHQuZ2V0Q2xhc3MoKS5uYW1lO1xuICAgIHRoaXMubG9nZ2VyLmxvZyhgR1JQQy1SRVFVRVNUOiBbJHtjb250ZXh0VHlwZX1dOlske2NvbnRyb2xsZXJOYW1lfV06WyR7bWV0aG9kfV06LT4gJHtKU09OLnN0cmluZ2lmeShyZXFCb2R5KX1gKTtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUoKS5waXBlKFxuICAgICAgdGFwKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhgR1JQQy1SRVNQT05TRTogWyR7Y29udGV4dFR5cGV9XTpbJHtjb250cm9sbGVyTmFtZX1dOlske21ldGhvZH1dfWApO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi90cmFuc2Zvcm0uaW50ZXJjZXB0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9ncnBjLWxvZy5pbnRlcmNlcHRvcic7XG4iLCJpbXBvcnQgeyBDYWxsSGFuZGxlciwgRXhlY3V0aW9uQ29udGV4dCwgSW5qZWN0YWJsZSwgTG9nZ2VyLCBOZXN0SW50ZXJjZXB0b3IgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBvbWl0IH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGludGVyZmFjZSBNZXRhSW50ZXJmYWNlIHtcbiAgcGFyYW1zOiBhbnk7XG4gIHN0YXR1czogYm9vbGVhbjtcbiAgZXJyb3JDb2RlPzogc3RyaW5nO1xuICB0aW1lc3RhbXA6IERhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2U8VD4ge1xuICBtZXRhPzogc3RyaW5nO1xuICBzdGF0dXNDb2RlPzogbnVtYmVyO1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICByZXN1bHQ6IFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VIYW5kbGVEYXRhIHtcbiAgY29kZT86IG51bWJlcjtcbiAgbWV0YT86IHN0cmluZztcbiAgc3RhdHVzQ29kZT86IG51bWJlcjtcbiAgbWVzc2FnZT86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zZm9ybUludGVyY2VwdG9yIGltcGxlbWVudHMgTmVzdEludGVyY2VwdG9yIHtcbiAgcHJpdmF0ZSBsb2dnZXIgPSBuZXcgTG9nZ2VyKFRyYW5zZm9ybUludGVyY2VwdG9yLm5hbWUpO1xuXG4gIGludGVyY2VwdChjb250ZXh0OiBFeGVjdXRpb25Db250ZXh0LCBuZXh0OiBDYWxsSGFuZGxlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBjb250ZXh0LnN3aXRjaFRvSHR0cCgpLmdldFJlcXVlc3QoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGNvbnRleHQuc3dpdGNoVG9IdHRwKCkuZ2V0UmVzcG9uc2U8UmVzcG9uc2VIYW5kbGVEYXRhPigpO1xuICAgIGNvbnN0IHsgbWV0aG9kLCB1cmwsIGJvZHksIHBhcmFtcywgc3RhdHVzLCBxdWVyeSB9ID0gcmVxdWVzdDtcbiAgICB0aGlzLmxvZ2dlci5sb2coYFJFUSBbJHttZXRob2R9ICR7dXJsfV06LT4gJHtKU09OLnN0cmluZ2lmeShib2R5KX1gKTtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUoKS5waXBlKFxuICAgICAgbWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0ge1xuICAgICAgICAgIG1ldGE6IEpTT04uc3RyaW5naWZ5KHsgcGFyYW1zOiBwYXJhbXMsIHN0YXR1czogc3RhdHVzLCBxdWVyeSwgdGltZXN0YW1wOiBuZXcgRGF0ZSgpIH0pLFxuICAgICAgICAgIG1lc3NhZ2U6IGRhdGE/Lm1lc3NhZ2UgPz8gcmVzcG9uc2UubWVzc2FnZSA/PyByZXF1ZXN0Py5tZXNzYWdlID8/ICdPaycsXG4gICAgICAgICAgY29kZTogZGF0YT8uc3RhdHVzQ29kZSA/PyBzdGF0dXMgPz8gcmVzcG9uc2UuY29kZSA/PyByZXNwb25zZS5zdGF0dXNDb2RlLFxuICAgICAgICAgIHN0YXR1c0NvZGU6IGRhdGE/LnN0YXR1c0NvZGUgPz8gc3RhdHVzID8/IHJlc3BvbnNlLnN0YXR1c0NvZGUsXG4gICAgICAgICAgcmVzdWx0OiBvbWl0KGRhdGEsIFsnbWVzc2FnZSddKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IElQb3N0Z3Jlc0VudiB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RTZWNyZXRzU2VydmljZSB7XG4gIGVudjogc3RyaW5nO1xuXG4gIHVzZXJTZXJ2aWNlRGF0YWJhc2U6IElQb3N0Z3Jlc0VudjtcblxuICBtZXJjaGFudFNlcnZpY2VEYXRhYmFzZTogSVBvc3RncmVzRW52O1xuXG4gIGJvb2tpbmdTZXJ2aWNlRGF0YWJhc2U6IElQb3N0Z3Jlc0VudjtcblxuICBub3RpZmljYXRpb25TZXJ2aWNlRGF0YWJhc2U6IElQb3N0Z3Jlc0Vudjtcbn1cbiIsImltcG9ydCB7IEdsb2JhbCwgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlIH0gZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7IFNlY3JldHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcblxuQEdsb2JhbCgpXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHtcbiAgICAgIGVudkZpbGVQYXRoOiBbJy5lbnYnXSxcbiAgICB9KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQWJzdHJhY3RTZWNyZXRzU2VydmljZSxcbiAgICAgIHVzZUNsYXNzOiBTZWNyZXRzU2VydmljZSxcbiAgICB9LFxuICBdLFxuICBleHBvcnRzOiBbQWJzdHJhY3RTZWNyZXRzU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNlY3JldHNNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlIH0gZnJvbSAnLi9hZGFwdGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlY3JldHNTZXJ2aWNlIGV4dGVuZHMgQ29uZmlnU2VydmljZSBpbXBsZW1lbnRzIEFic3RyYWN0U2VjcmV0c1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZW52ID0gdGhpcy5nZXQoJ0VOVicpO1xuXG4gIHBvcnQgPSB0aGlzLmdldDxudW1iZXI+KCdQT1JUJyk7XG5cbiAgdXNlclNlcnZpY2VEYXRhYmFzZSA9IHtcbiAgICBob3N0OiB0aGlzLmdldDxzdHJpbmc+KCdVU0VSX0RCX0hPU1QnKSxcbiAgICBwb3J0OiB0aGlzLmdldDxudW1iZXI+KCdVU0VSX0RCX1BPUlQnKSxcbiAgICB1c2VybmFtZTogdGhpcy5nZXQ8c3RyaW5nPignVVNFUl9EQl9VU0VSTkFNRScpLFxuICAgIHBhc3N3b3JkOiB0aGlzLmdldDxzdHJpbmc+KCdVU0VSX0RCX1BBU1NXT1JEJyksXG4gICAgZGF0YWJhc2U6IHRoaXMuZ2V0PHN0cmluZz4oJ1VTRVJfREJfREFUQUJBU0UnKSxcbiAgfTtcblxuICBtZXJjaGFudFNlcnZpY2VEYXRhYmFzZSA9IHtcbiAgICBob3N0OiB0aGlzLmdldDxzdHJpbmc+KCdNRVJDSEFOVF9EQl9IT1NUJyksXG4gICAgcG9ydDogdGhpcy5nZXQ8bnVtYmVyPignTUVSQ0hBTlRfREJfUE9SVCcpLFxuICAgIHVzZXJuYW1lOiB0aGlzLmdldDxzdHJpbmc+KCdNRVJDSEFOVF9EQl9VU0VSTkFNRScpLFxuICAgIHBhc3N3b3JkOiB0aGlzLmdldDxzdHJpbmc+KCdNRVJDSEFOVF9EQl9QQVNTV09SRCcpLFxuICAgIGRhdGFiYXNlOiB0aGlzLmdldDxzdHJpbmc+KCdNRVJDSEFOVF9EQl9EQVRBQkFTRScpLFxuICB9O1xuXG4gIGJvb2tpbmdTZXJ2aWNlRGF0YWJhc2UgPSB7XG4gICAgaG9zdDogdGhpcy5nZXQ8c3RyaW5nPignQk9PS0lOR19EQl9IT1NUJyksXG4gICAgcG9ydDogdGhpcy5nZXQ8bnVtYmVyPignQk9PS0lOR19EQl9QT1JUJyksXG4gICAgdXNlcm5hbWU6IHRoaXMuZ2V0PHN0cmluZz4oJ0JPT0tJTkdfREJfVVNFUk5BTUUnKSxcbiAgICBwYXNzd29yZDogdGhpcy5nZXQ8c3RyaW5nPignQk9PS0lOR19EQl9QQVNTV09SRCcpLFxuICAgIGRhdGFiYXNlOiB0aGlzLmdldDxzdHJpbmc+KCdCT09LSU5HX0RCX0RBVEFCQVNFJyksXG4gIH07XG5cbiAgbm90aWZpY2F0aW9uU2VydmljZURhdGFiYXNlID0ge1xuICAgIGhvc3Q6IHRoaXMuZ2V0PHN0cmluZz4oJ05PVElGSUNBVElPTl9EQl9IT1NUJyksXG4gICAgcG9ydDogdGhpcy5nZXQ8bnVtYmVyPignTk9USUZJQ0FUSU9OX0RCX1BPUlQnKSxcbiAgICB1c2VybmFtZTogdGhpcy5nZXQ8c3RyaW5nPignTk9USUZJQ0FUSU9OX0RCX1VTRVJOQU1FJyksXG4gICAgcGFzc3dvcmQ6IHRoaXMuZ2V0PHN0cmluZz4oJ05PVElGSUNBVElPTl9EQl9QQVNTV09SRCcpLFxuICAgIGRhdGFiYXNlOiB0aGlzLmdldDxzdHJpbmc+KCdOT1RJRklDQVRJT05fREJfREFUQUJBU0UnKSxcbiAgfTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBncnBjL2dycGMtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvbWFwcGVkLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvbWljcm9zZXJ2aWNlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL3Bhc3Nwb3J0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvc2VxdWVsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFyZ29uMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzcy10cmFuc2Zvcm1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzcy12YWxpZGF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5lc3Rqcy1pMThuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWp3dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvb3BlcmF0b3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemUtdHlwZXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBJTmVzdE1pY3Jvc2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IE5lc3RGYWN0b3J5IH0gZnJvbSAnQG5lc3Rqcy9jb3JlJztcbmltcG9ydCB7IE1pY3Jvc2VydmljZU9wdGlvbnMgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgVXNlclNlcnZlciB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xuXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCBhcHA6IElOZXN0TWljcm9zZXJ2aWNlID0gYXdhaXQgTmVzdEZhY3RvcnkuY3JlYXRlTWljcm9zZXJ2aWNlPE1pY3Jvc2VydmljZU9wdGlvbnM+KEFwcE1vZHVsZSwgVXNlclNlcnZlcik7XG5cbiAgcmV0dXJuIGFwcC5saXN0ZW4oKTtcbn1cblxubWFpbigpLnRoZW4oKCkgPT4ge1xuICBjb25zb2xlLmxvZygndXNlci1zZXJ2aWNlIG1pY3Jvc2VydmljZSBpcyBydW5uaW5nJyk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==