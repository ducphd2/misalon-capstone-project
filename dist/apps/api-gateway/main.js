/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api-gateway/src/app.module.ts":
/*!********************************************!*\
  !*** ./apps/api-gateway/src/app.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const path_1 = __webpack_require__(/*! path */ "path");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const nestjs_i18n_1 = __webpack_require__(/*! nestjs-i18n */ "nestjs-i18n");
const user_module_1 = __webpack_require__(/*! ./modules/user/user.module */ "./apps/api-gateway/src/modules/user/user.module.ts");
const auth_module_1 = __webpack_require__(/*! @/api-gateway/modules/auth/auth.module */ "./apps/api-gateway/src/modules/auth/auth.module.ts");
const booking_module_1 = __webpack_require__(/*! @/api-gateway/modules/booking/booking.module */ "./apps/api-gateway/src/modules/booking/booking.module.ts");
const branch_module_1 = __webpack_require__(/*! @/api-gateway/modules/branch/branch.module */ "./apps/api-gateway/src/modules/branch/branch.module.ts");
const group_module_1 = __webpack_require__(/*! @/api-gateway/modules/group/group.module */ "./apps/api-gateway/src/modules/group/group.module.ts");
const merchant_module_1 = __webpack_require__(/*! @/api-gateway/modules/merchant/merchant.module */ "./apps/api-gateway/src/modules/merchant/merchant.module.ts");
const service_module_1 = __webpack_require__(/*! @/api-gateway/modules/service/service.module */ "./apps/api-gateway/src/modules/service/service.module.ts");
const upload_module_1 = __webpack_require__(/*! @/api-gateway/modules/upload/upload.module */ "./apps/api-gateway/src/modules/upload/upload.module.ts");
const events_module_1 = __webpack_require__(/*! @/api-gateway/modules/events/events.module */ "./apps/api-gateway/src/modules/events/events.module.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            nestjs_i18n_1.I18nModule.forRoot({
                fallbackLanguage: 'en',
                loaderOptions: {
                    path: (0, path_1.join)(__dirname, 'i18n'),
                    watch: true,
                },
                resolvers: [{ use: nestjs_i18n_1.QueryResolver, options: ['lang'] }, nestjs_i18n_1.AcceptLanguageResolver],
            }),
            upload_module_1.UploadModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            merchant_module_1.MerchantModule,
            branch_module_1.BranchModule,
            group_module_1.GroupModule,
            service_module_1.ServiceModule,
            booking_module_1.BookingModule,
            events_module_1.EventsModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

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

/***/ "./apps/api-gateway/src/core/strategies/jwt.enum.ts":
/*!**********************************************************!*\
  !*** ./apps/api-gateway/src/core/strategies/jwt.enum.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtEnumService = void 0;
var JwtEnumService;
(function (JwtEnumService) {
    JwtEnumService["JWT_ACCESS_TOKEN_SERVICE"] = "JwtAccessTokenService";
    JwtEnumService["JWT_REFRESH_TOKEN_SERVICE"] = "JwtRefreshTokenService";
})(JwtEnumService = exports.JwtEnumService || (exports.JwtEnumService = {}));


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

/***/ "./apps/api-gateway/src/modules/auth/auth.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/auth.controller.ts ***!
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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const commons_1 = __webpack_require__(/*! @libs/grpc-types/protos/commons */ "./libs/grpc-types/src/protos/commons.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const dtos_1 = __webpack_require__(/*! ../../dtos */ "./apps/api-gateway/src/dtos/index.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/api-gateway/src/modules/auth/auth.service.ts");
const merchant_common_service_1 = __webpack_require__(/*! @/api-gateway/modules/merchant-common/merchant-common.service */ "./apps/api-gateway/src/modules/merchant-common/merchant-common.service.ts");
const user_common_service_1 = __webpack_require__(/*! @/api-gateway/modules/user-common/user-common.service */ "./apps/api-gateway/src/modules/user-common/user-common.service.ts");
let AuthController = class AuthController {
    constructor(usersService, merchantService, authService, passwordUtils) {
        this.usersService = usersService;
        this.merchantService = merchantService;
        this.authService = authService;
        this.passwordUtils = passwordUtils;
    }
    async login(data) {
        const { user } = await this.usersService.findOne({
            where: JSON.stringify({ email: data.email }),
        });
        if ((0, lodash_1.isEmpty)(user)) {
            core_1.ErrorHelper.HttpNotFoundException(core_1.USER_MESSAGE.READ.NOT_FOUND);
        }
        const isSame = await this.passwordUtils.compare(data.password, user.password);
        if (!isSame) {
            core_1.ErrorHelper.HttpBadRequestException(core_1.AUTH_MESSAGE.LOGIN.INVALID);
        }
        if (user.role === commons_1.EUserRole.USER) {
            return this.handleResponseAuthData(user);
        }
        const { merchant } = await this.merchantService.findOne({
            where: JSON.stringify({ userId: user.id }),
        });
        const { branches } = await this.merchantService.branches({
            where: JSON.stringify({ merchantId: merchant.id }),
        });
        if (data === null || data === void 0 ? void 0 : data.device) {
            await this.usersService.upsertDevice(Object.assign(Object.assign({}, data === null || data === void 0 ? void 0 : data.device), { userId: user.id }));
        }
        const re = await this.handleResponseAuthData(user);
        return Object.assign(Object.assign({}, re), { merchant,
            branches });
    }
    async register({ user: userInput, merchant: merchantInput, device: deviceInput }) {
        var _a, _b;
        const { count } = await this.usersService.countUser({
            where: JSON.stringify({ email: userInput.email }),
        });
        if (count >= 1)
            throw new Error('The email is taken');
        if (userInput.role === commons_1.EUserRole.USER) {
            const { user } = await this.usersService.create({ user: userInput, device: deviceInput });
            return this.handleResponseAuthData(user);
        }
        const { user } = await this.usersService.create({ user: userInput, device: deviceInput });
        const { merchant, branch } = await this.merchantService.create(Object.assign(Object.assign({}, merchantInput), { userId: user.id }));
        await this.usersService.createMerchantUser({
            role: (_a = userInput.role) !== null && _a !== void 0 ? _a : commons_1.EUserRole.ADMIN,
            branchId: branch.id,
            merchantId: merchant.id,
            status: (_b = userInput.status) !== null && _b !== void 0 ? _b : commons_1.EUserStatus.ACTIVE,
            userId: user.id,
        });
        return this.handleResponseAuthData(user, merchant, branch);
    }
    async handleResponseAuthData(user, merchant, branch) {
        return {
            user,
            merchant,
            branches: branch ? [branch] : null,
            accessToken: await this.authService.generateAccessToken(user),
            refreshToken: await this.authService.generateRefreshToken(user),
        };
    }
    async logout() {
        return true;
    }
};
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof dtos_1.InputLoginRequest !== "undefined" && dtos_1.InputLoginRequest) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof dtos_1.RegisterPayload !== "undefined" && dtos_1.RegisterPayload) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('logout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_common_service_1.UserCommonService !== "undefined" && user_common_service_1.UserCommonService) === "function" ? _a : Object, typeof (_b = typeof merchant_common_service_1.MerchantCommonService !== "undefined" && merchant_common_service_1.MerchantCommonService) === "function" ? _b : Object, typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _c : Object, typeof (_d = typeof core_1.PasswordUtils !== "undefined" && core_1.PasswordUtils) === "function" ? _d : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/auth.module.ts":
/*!**********************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/auth.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const grpc_types_1 = __webpack_require__(/*! @libs/grpc-types */ "./libs/grpc-types/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const strategies_1 = __webpack_require__(/*! ../../core/strategies */ "./apps/api-gateway/src/core/strategies/index.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/api-gateway/src/modules/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/api-gateway/src/modules/auth/auth.service.ts");
const jwt_enum_1 = __webpack_require__(/*! @/api-gateway/core/strategies/jwt.enum */ "./apps/api-gateway/src/core/strategies/jwt.enum.ts");
const merchant_common_module_1 = __webpack_require__(/*! @/api-gateway/modules/merchant-common/merchant-common.module */ "./apps/api-gateway/src/modules/merchant-common/merchant-common.module.ts");
const user_common_module_1 = __webpack_require__(/*! @/api-gateway/modules/user-common/user-common.module */ "./apps/api-gateway/src/modules/user-common/user-common.module.ts");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([grpc_types_1.UserClient]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            user_common_module_1.UserCommonModule,
            core_1.UtilsModule,
            merchant_common_module_1.MerchantCommonModule,
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            strategies_1.JwtStrategy,
            strategies_1.JwtRefreshStrategy,
            {
                provide: jwt_enum_1.JwtEnumService.JWT_ACCESS_TOKEN_SERVICE,
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    return new jwt_1.JwtService({
                        secret: configService.get('JWT_PRIVATE_KEY'),
                        signOptions: {
                            expiresIn: configService.get('JWT_ACCESS_TOKEN_EXPIRATION'),
                        },
                    });
                },
            },
            {
                provide: jwt_enum_1.JwtEnumService.JWT_REFRESH_TOKEN_SERVICE,
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    return new jwt_1.JwtService({
                        secret: configService.get('JWT_REFRESH_TOKEN_SECRET'),
                        signOptions: {
                            expiresIn: configService.get('JWT_REFRESH_TOKEN_EXPIRATION'),
                        },
                    });
                },
            },
        ],
        exports: [],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/auth.service.ts":
/*!***********************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/auth.service.ts ***!
  \***********************************************************/
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
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
let AuthService = class AuthService {
    constructor(accessTokenService, refreshTokenService) {
        this.accessTokenService = accessTokenService;
        this.refreshTokenService = refreshTokenService;
    }
    async generateAccessToken(user) {
        return this.accessTokenService.sign({
            user: user.id,
        }, {
            subject: user.id.toString(),
        });
    }
    async generateRefreshToken(user) {
        return this.refreshTokenService.sign({
            user: user.id,
        }, {
            subject: user.id.toString(),
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('JwtAccessTokenService')),
    __param(1, (0, common_1.Inject)('JwtRefreshTokenService')),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/booking-common/booking-common.module.ts":
/*!******************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/booking-common/booking-common.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingCommonModule = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const grpc_types_1 = __webpack_require__(/*! @libs/grpc-types */ "./libs/grpc-types/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const booking_common_service_1 = __webpack_require__(/*! ./booking-common.service */ "./apps/api-gateway/src/modules/booking-common/booking-common.service.ts");
let BookingCommonModule = class BookingCommonModule {
};
BookingCommonModule = __decorate([
    (0, common_1.Module)({
        imports: [microservices_1.ClientsModule.register([grpc_types_1.BookingClient]), core_1.UtilsModule],
        providers: [booking_common_service_1.BookingCommonService],
        exports: [booking_common_service_1.BookingCommonService],
    })
], BookingCommonModule);
exports.BookingCommonModule = BookingCommonModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/booking-common/booking-common.service.ts":
/*!*******************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/booking-common/booking-common.service.ts ***!
  \*******************************************************************************/
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingCommonService = void 0;
const booking_1 = __webpack_require__(/*! @libs/grpc-types/protos/booking */ "./libs/grpc-types/src/protos/booking.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let BookingCommonService = class BookingCommonService {
    constructor(client) {
        this.client = client;
    }
    onModuleInit() {
        this.bookingService = this.client.getService(booking_1.BOOKING_SERVICE_NAME);
    }
    async create(data) {
        return await (0, rxjs_1.firstValueFrom)(this.bookingService.create(data));
    }
    async findById(id) {
        return await (0, rxjs_1.firstValueFrom)(this.bookingService.findById(id));
    }
    async find(query) {
        return await (0, rxjs_1.firstValueFrom)(this.bookingService.find(query));
    }
    async update(id, data) {
        return await (0, rxjs_1.firstValueFrom)(this.bookingService.update({ id, data }));
    }
    async delete(id) {
        return await (0, rxjs_1.firstValueFrom)(this.bookingService.delete({ id }));
    }
    async findBookings(query, merchantId) {
        let where = null;
        if (merchantId) {
            where = {
                merchantId,
            };
        }
        if (!(0, lodash_1.isEmpty)(query === null || query === void 0 ? void 0 : query.q)) {
            (0, lodash_1.merge)(where, {
                search: {
                    _iLike: `%${query === null || query === void 0 ? void 0 : query.q}%`,
                },
            });
        }
        const result = await this.find(Object.assign(Object.assign({}, query), { where: where ? JSON.stringify(where) : null }));
        return result;
    }
};
BookingCommonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(booking_1.BOOKING_PACKAGE_NAME)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], BookingCommonService);
exports.BookingCommonService = BookingCommonService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/booking/booking.controller.ts":
/*!********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/booking/booking.controller.ts ***!
  \********************************************************************/
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingController = void 0;
const database_1 = __webpack_require__(/*! @libs/database */ "./libs/database/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const booking_service_1 = __webpack_require__(/*! ./booking.service */ "./apps/api-gateway/src/modules/booking/booking.service.ts");
const core_1 = __webpack_require__(/*! @/api-gateway/core */ "./apps/api-gateway/src/core/index.ts");
const dtos_1 = __webpack_require__(/*! @/api-gateway/dtos */ "./apps/api-gateway/src/dtos/index.ts");
let BookingController = class BookingController {
    constructor(bookingService) {
        this.bookingService = bookingService;
        this.logger = new common_1.Logger(this.constructor.name);
    }
    async createBooking(user, bookingInput) {
        const result = await this.bookingService.create(user, bookingInput);
        return result;
    }
    async updateBooking(id, data) {
        const result = await this.bookingService.update(id, data);
        return result;
    }
    async deleteBooking(id) {
        return await this.bookingService.delete(id);
    }
    async findDetail(id) {
        return await this.bookingService.findDetail(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, core_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof database_1.UserModel !== "undefined" && database_1.UserModel) === "function" ? _b : Object, typeof (_c = typeof dtos_1.CreateBookingInput !== "undefined" && dtos_1.CreateBookingInput) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "createBooking", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_d = typeof dtos_1.PartialUpdateBooking !== "undefined" && dtos_1.PartialUpdateBooking) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "updateBooking", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "deleteBooking", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "findDetail", null);
BookingController = __decorate([
    (0, common_1.Controller)('bookings'),
    __metadata("design:paramtypes", [typeof (_a = typeof booking_service_1.BookingService !== "undefined" && booking_service_1.BookingService) === "function" ? _a : Object])
], BookingController);
exports.BookingController = BookingController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/booking/booking.module.ts":
/*!****************************************************************!*\
  !*** ./apps/api-gateway/src/modules/booking/booking.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingModule = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const booking_controller_1 = __webpack_require__(/*! ./booking.controller */ "./apps/api-gateway/src/modules/booking/booking.controller.ts");
const booking_service_1 = __webpack_require__(/*! ./booking.service */ "./apps/api-gateway/src/modules/booking/booking.service.ts");
const core_2 = __webpack_require__(/*! @/api-gateway/core */ "./apps/api-gateway/src/core/index.ts");
const booking_common_module_1 = __webpack_require__(/*! @/api-gateway/modules/booking-common/booking-common.module */ "./apps/api-gateway/src/modules/booking-common/booking-common.module.ts");
let BookingModule = class BookingModule {
};
BookingModule = __decorate([
    (0, common_1.Module)({
        imports: [booking_common_module_1.BookingCommonModule, core_1.UtilsModule],
        providers: [booking_service_1.BookingService, core_2.MessageComponent],
        controllers: [booking_controller_1.BookingController],
    })
], BookingModule);
exports.BookingModule = BookingModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/booking/booking.service.ts":
/*!*****************************************************************!*\
  !*** ./apps/api-gateway/src/modules/booking/booking.service.ts ***!
  \*****************************************************************/
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
exports.BookingService = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const commons_1 = __webpack_require__(/*! @libs/grpc-types/protos/commons */ "./libs/grpc-types/src/protos/commons.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const core_2 = __webpack_require__(/*! @/api-gateway/core */ "./apps/api-gateway/src/core/index.ts");
const booking_common_service_1 = __webpack_require__(/*! @/api-gateway/modules/booking-common/booking-common.service */ "./apps/api-gateway/src/modules/booking-common/booking-common.service.ts");
let BookingService = class BookingService {
    constructor(bookingService, i18n) {
        this.bookingService = bookingService;
        this.i18n = i18n;
        this.logger = new common_1.Logger(this.constructor.name);
    }
    async create(user, data, lang) {
        if (user.role === commons_1.EUserRole.USER) {
            (0, lodash_1.merge)(data, {
                userId: user.id,
            });
        }
        const booking = await this.bookingService.create(data);
        return {
            message: this.i18n.lang('lang.BOOKING.CREATE.SUCCESS', { lang }),
            booking,
        };
    }
    async update(id, data, lang) {
        const { booking } = await this.bookingService.findById({ id });
        if ((0, lodash_1.isEmpty)(booking)) {
            this.logger.error(`Booking is not found`);
            core_1.ErrorHelper.HttpNotFoundException(this.i18n.lang('lang.BOOKING.READ.NOT_EXIST', { lang }));
        }
        const updatedBooking = await this.bookingService.update(id, data);
        return {
            message: this.i18n.lang('lang.BOOKING.UPDATE.SUCCESS', { lang }),
            booking: updatedBooking,
        };
    }
    async delete(id, lang) {
        const result = await this.bookingService.delete(id);
        return {
            message: this.i18n.lang('lang.BOOKING.DELETE.SUCCESS', { lang }),
            result,
        };
    }
    async findDetail(id, lang) {
        const { booking } = await this.bookingService.findById({ id });
        return {
            booking,
        };
    }
};
BookingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof booking_common_service_1.BookingCommonService !== "undefined" && booking_common_service_1.BookingCommonService) === "function" ? _a : Object, typeof (_b = typeof core_2.MessageComponent !== "undefined" && core_2.MessageComponent) === "function" ? _b : Object])
], BookingService);
exports.BookingService = BookingService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/branch/branch.controller.ts":
/*!******************************************************************!*\
  !*** ./apps/api-gateway/src/modules/branch/branch.controller.ts ***!
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BranchController = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const branch_service_1 = __webpack_require__(/*! ./branch.service */ "./apps/api-gateway/src/modules/branch/branch.service.ts");
const core_2 = __webpack_require__(/*! @/api-gateway/core */ "./apps/api-gateway/src/core/index.ts");
const dtos_1 = __webpack_require__(/*! @/api-gateway/dtos */ "./apps/api-gateway/src/dtos/index.ts");
const merchant_common_service_1 = __webpack_require__(/*! @/api-gateway/modules/merchant-common/merchant-common.service */ "./apps/api-gateway/src/modules/merchant-common/merchant-common.service.ts");
let BranchController = class BranchController {
    constructor(merchantService, queryUtils, branchService) {
        this.merchantService = merchantService;
        this.queryUtils = queryUtils;
        this.branchService = branchService;
    }
    async createBranch(data) {
        const result = await this.branchService.createBranch(data);
        return result;
    }
    async updateBranch(id, data) {
        const result = await this.branchService.updateBranch(id, data);
        return result;
    }
    async deleteBranch(id) {
        const result = await this.branchService.deleteBranch(id);
        return result;
    }
    async findBranchDetail(id) {
        const result = await this.branchService.findBranchDetail(id);
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(core_2.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dtos_1.CreateBranchInput !== "undefined" && dtos_1.CreateBranchInput) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], BranchController.prototype, "createBranch", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(core_2.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_e = typeof dtos_1.PartialUpdateBranch !== "undefined" && dtos_1.PartialUpdateBranch) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], BranchController.prototype, "updateBranch", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(core_2.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BranchController.prototype, "deleteBranch", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(core_2.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BranchController.prototype, "findBranchDetail", null);
BranchController = __decorate([
    (0, common_1.Controller)('branches'),
    __metadata("design:paramtypes", [typeof (_a = typeof merchant_common_service_1.MerchantCommonService !== "undefined" && merchant_common_service_1.MerchantCommonService) === "function" ? _a : Object, typeof (_b = typeof core_1.QueryUtils !== "undefined" && core_1.QueryUtils) === "function" ? _b : Object, typeof (_c = typeof branch_service_1.BranchService !== "undefined" && branch_service_1.BranchService) === "function" ? _c : Object])
], BranchController);
exports.BranchController = BranchController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/branch/branch.module.ts":
/*!**************************************************************!*\
  !*** ./apps/api-gateway/src/modules/branch/branch.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BranchModule = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const merchant_common_module_1 = __webpack_require__(/*! ../merchant-common/merchant-common.module */ "./apps/api-gateway/src/modules/merchant-common/merchant-common.module.ts");
const branch_service_1 = __webpack_require__(/*! ./branch.service */ "./apps/api-gateway/src/modules/branch/branch.service.ts");
const branch_controller_1 = __webpack_require__(/*! ./branch.controller */ "./apps/api-gateway/src/modules/branch/branch.controller.ts");
const core_2 = __webpack_require__(/*! @/api-gateway/core */ "./apps/api-gateway/src/core/index.ts");
let BranchModule = class BranchModule {
};
BranchModule = __decorate([
    (0, common_1.Module)({
        imports: [merchant_common_module_1.MerchantCommonModule, core_1.UtilsModule],
        providers: [branch_service_1.BranchService, core_2.MessageComponent],
        controllers: [branch_controller_1.BranchController],
    })
], BranchModule);
exports.BranchModule = BranchModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/branch/branch.service.ts":
/*!***************************************************************!*\
  !*** ./apps/api-gateway/src/modules/branch/branch.service.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BranchService = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const core_2 = __webpack_require__(/*! @/api-gateway/core */ "./apps/api-gateway/src/core/index.ts");
const merchant_common_service_1 = __webpack_require__(/*! @/api-gateway/modules/merchant-common/merchant-common.service */ "./apps/api-gateway/src/modules/merchant-common/merchant-common.service.ts");
let BranchService = class BranchService {
    constructor(merchantService, i18n) {
        this.merchantService = merchantService;
        this.i18n = i18n;
    }
    async createBranch(data, lang) {
        const branch = await this.merchantService.createBranch(data);
        return {
            message: this.i18n.lang('lang.BRANCH.CREATE.SUCCESS', { lang }),
            branch,
        };
    }
    async updateBranch(id, data, lang) {
        const { branch } = await this.merchantService.branch({
            where: JSON.stringify({
                id,
            }),
        });
        if (!branch) {
            core_1.ErrorHelper.HttpNotFoundException(this.i18n.lang('lang.BRANCH.READ.NOT_EXIST', { lang }));
        }
        const updatedBranch = await this.merchantService.updateBranch(id, data);
        return {
            message: this.i18n.lang('lang.BRANCH.CREATE.SUCCESS', { lang }),
            branch: updatedBranch,
        };
    }
    async deleteBranch(id, lang) {
        const result = await this.merchantService.deleteBranch(id);
        return {
            message: this.i18n.lang('lang.BRANCH.DELETE.SUCCESS', { lang }),
            result,
        };
    }
    async findBranchDetail(id) {
        const result = await this.merchantService.findBranchById({ id });
        return result;
    }
    async findAllBranch(merchantId, query) {
        let where = null;
        if (merchantId) {
            where = {
                merchantId,
            };
        }
        if (!(0, lodash_1.isEmpty)(query === null || query === void 0 ? void 0 : query.q)) {
            (0, lodash_1.merge)(where, {
                search: {
                    _iLike: `%${query === null || query === void 0 ? void 0 : query.q}%`,
                },
            });
        }
        const result = await this.merchantService.findBranches(Object.assign(Object.assign({}, query), { where: where ? JSON.stringify(where) : null }));
        return result;
    }
};
BranchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof merchant_common_service_1.MerchantCommonService !== "undefined" && merchant_common_service_1.MerchantCommonService) === "function" ? _a : Object, typeof (_b = typeof core_2.MessageComponent !== "undefined" && core_2.MessageComponent) === "function" ? _b : Object])
], BranchService);
exports.BranchService = BranchService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/events/events.gateway.ts":
/*!***************************************************************!*\
  !*** ./apps/api-gateway/src/modules/events/events.gateway.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventsGateway = void 0;
const websockets_1 = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
const socket_io_1 = __webpack_require__(/*! socket.io */ "socket.io");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const message_service_1 = __webpack_require__(/*! ../messages/message.service */ "./apps/api-gateway/src/modules/messages/message.service.ts");
const create_message_dto_1 = __webpack_require__(/*! ../messages/dto/create-message.dto */ "./apps/api-gateway/src/modules/messages/dto/create-message.dto.ts");
const dtos_1 = __webpack_require__(/*! @/api-gateway/dtos */ "./apps/api-gateway/src/dtos/index.ts");
let EventsGateway = class EventsGateway {
    constructor(messagesService) {
        this.messagesService = messagesService;
    }
    async handleMessage(messageData) {
        const { senderId, receiverId } = messageData;
        const createdMessage = await this.messagesService.create(messageData);
        this.server.to([senderId, receiverId]).emit(dtos_1.EEventMessage.NEW_MESSAGE, createdMessage);
    }
    async handleRecentMessages(socket, payload) {
        const messages = await this.messagesService.getRecentMessages(payload.userId, payload.limit, payload.page);
        this.server.to(socket.id).emit(dtos_1.EEventMessage.RECENT_MESSAGES, messages);
    }
    async handleConversationMessages(socket, payload) {
        const messages = await this.messagesService.getConversationMessages(payload.userId, payload.otherUserId, payload.page, payload.limit);
        this.server.to(socket.id).emit(dtos_1.EEventMessage.CONVERSATION_MESSAGES, messages);
    }
    async handleJoinRoom(client, userId) {
        client.join(userId);
    }
    async handleConnection(client) {
        try {
            const { authorization } = client.handshake.headers;
            console.log(`Client connected: ${client.id}`);
        }
        catch (error) {
            console.log(error);
        }
    }
    handleDisconnect(socket) {
        console.log(`Client disconnected: ${socket.id}`);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_b = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _b : Object)
], EventsGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)(dtos_1.EEventMessage.CREATE_MESSAGE),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof create_message_dto_1.CreateMessageDto !== "undefined" && create_message_dto_1.CreateMessageDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(dtos_1.EEventMessage.RECENT_MESSAGES),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "handleRecentMessages", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(dtos_1.EEventMessage.CONVERSATION_MESSAGES),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "handleConversationMessages", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(dtos_1.EEventMessage.JOIN_ROOM),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _f : Object, String]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "handleJoinRoom", null);
EventsGateway = __decorate([
    (0, common_1.Injectable)(),
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof message_service_1.MessagesService !== "undefined" && message_service_1.MessagesService) === "function" ? _a : Object])
], EventsGateway);
exports.EventsGateway = EventsGateway;


/***/ }),

/***/ "./apps/api-gateway/src/modules/events/events.module.ts":
/*!**************************************************************!*\
  !*** ./apps/api-gateway/src/modules/events/events.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const messages_module_1 = __webpack_require__(/*! ../messages/messages.module */ "./apps/api-gateway/src/modules/messages/messages.module.ts");
const events_gateway_1 = __webpack_require__(/*! ./events.gateway */ "./apps/api-gateway/src/modules/events/events.gateway.ts");
let EventsModule = class EventsModule {
};
EventsModule = __decorate([
    (0, common_1.Module)({
        imports: [messages_module_1.MessagesModule],
        providers: [events_gateway_1.EventsGateway],
    })
], EventsModule);
exports.EventsModule = EventsModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/group/group.controller.ts":
/*!****************************************************************!*\
  !*** ./apps/api-gateway/src/modules/group/group.controller.ts ***!
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const group_service_1 = __webpack_require__(/*! ./group.service */ "./apps/api-gateway/src/modules/group/group.service.ts");
const core_1 = __webpack_require__(/*! @/api-gateway/core */ "./apps/api-gateway/src/core/index.ts");
const dtos_1 = __webpack_require__(/*! @/api-gateway/dtos */ "./apps/api-gateway/src/dtos/index.ts");
const merchant_common_service_1 = __webpack_require__(/*! @/api-gateway/modules/merchant-common/merchant-common.service */ "./apps/api-gateway/src/modules/merchant-common/merchant-common.service.ts");
let GroupController = class GroupController {
    constructor(merchantService, groupService) {
        this.merchantService = merchantService;
        this.groupService = groupService;
    }
    async createGroup(data) {
        const result = await this.groupService.create(data);
        return result;
    }
    async updateGroup(id, data) {
        const result = await this.groupService.update(id, data);
        return result;
    }
    async deleteGroup(id) {
        const result = await this.groupService.delete(id);
        return result;
    }
    async findDetail(id) {
        const result = await this.groupService.findDetail(id);
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dtos_1.CreateGroupInput !== "undefined" && dtos_1.CreateGroupInput) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "createGroup", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_d = typeof dtos_1.PartialUpdateGroup !== "undefined" && dtos_1.PartialUpdateGroup) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "updateGroup", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "deleteGroup", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "findDetail", null);
GroupController = __decorate([
    (0, common_1.Controller)('groups'),
    __metadata("design:paramtypes", [typeof (_a = typeof merchant_common_service_1.MerchantCommonService !== "undefined" && merchant_common_service_1.MerchantCommonService) === "function" ? _a : Object, typeof (_b = typeof group_service_1.GroupService !== "undefined" && group_service_1.GroupService) === "function" ? _b : Object])
], GroupController);
exports.GroupController = GroupController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/group/group.module.ts":
/*!************************************************************!*\
  !*** ./apps/api-gateway/src/modules/group/group.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupModule = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const merchant_common_module_1 = __webpack_require__(/*! ../merchant-common/merchant-common.module */ "./apps/api-gateway/src/modules/merchant-common/merchant-common.module.ts");
const group_service_1 = __webpack_require__(/*! ./group.service */ "./apps/api-gateway/src/modules/group/group.service.ts");
const group_controller_1 = __webpack_require__(/*! ./group.controller */ "./apps/api-gateway/src/modules/group/group.controller.ts");
const core_2 = __webpack_require__(/*! @/api-gateway/core */ "./apps/api-gateway/src/core/index.ts");
let GroupModule = class GroupModule {
};
GroupModule = __decorate([
    (0, common_1.Module)({
        imports: [merchant_common_module_1.MerchantCommonModule, core_1.UtilsModule],
        providers: [group_service_1.GroupService, core_2.MessageComponent],
        controllers: [group_controller_1.GroupController],
    })
], GroupModule);
exports.GroupModule = GroupModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/group/group.service.ts":
/*!*************************************************************!*\
  !*** ./apps/api-gateway/src/modules/group/group.service.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const merchant_common_service_1 = __webpack_require__(/*! ../merchant-common/merchant-common.service */ "./apps/api-gateway/src/modules/merchant-common/merchant-common.service.ts");
const core_1 = __webpack_require__(/*! @/api-gateway/core */ "./apps/api-gateway/src/core/index.ts");
let GroupService = class GroupService {
    constructor(merchantService, i18n) {
        this.merchantService = merchantService;
        this.i18n = i18n;
    }
    async create(data, lang) {
        const group = await this.merchantService.createGroup(data);
        return {
            message: this.i18n.lang('lang.BRANCH.CREATE.SUCCESS', { lang }),
            group,
        };
    }
    async update(id, data, lang) {
        const group = await this.merchantService.updateGroup(id, data);
        return {
            message: this.i18n.lang('lang.BRANCH.UPDATE.SUCCESS', { lang }),
            group,
        };
    }
    async delete(id, lang) {
        const group = await this.merchantService.deleteGroup(id);
        return {
            message: this.i18n.lang('lang.BRANCH.DELETE.SUCCESS', { lang }),
            group,
        };
    }
    async findDetail(id, lang) {
        const result = await this.merchantService.findGroupById({ id });
        return result;
    }
};
GroupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof merchant_common_service_1.MerchantCommonService !== "undefined" && merchant_common_service_1.MerchantCommonService) === "function" ? _a : Object, typeof (_b = typeof core_1.MessageComponent !== "undefined" && core_1.MessageComponent) === "function" ? _b : Object])
], GroupService);
exports.GroupService = GroupService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/merchant-common/merchant-common.module.ts":
/*!********************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/merchant-common/merchant-common.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MerchantCommonModule = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const grpc_types_1 = __webpack_require__(/*! @libs/grpc-types */ "./libs/grpc-types/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const merchant_common_service_1 = __webpack_require__(/*! ./merchant-common.service */ "./apps/api-gateway/src/modules/merchant-common/merchant-common.service.ts");
let MerchantCommonModule = class MerchantCommonModule {
};
MerchantCommonModule = __decorate([
    (0, common_1.Module)({
        imports: [microservices_1.ClientsModule.register([grpc_types_1.MerchantClient]), core_1.UtilsModule],
        providers: [merchant_common_service_1.MerchantCommonService],
        exports: [merchant_common_service_1.MerchantCommonService],
    })
], MerchantCommonModule);
exports.MerchantCommonModule = MerchantCommonModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/merchant-common/merchant-common.service.ts":
/*!*********************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/merchant-common/merchant-common.service.ts ***!
  \*********************************************************************************/
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MerchantCommonService = void 0;
const merchant_1 = __webpack_require__(/*! @libs/grpc-types/protos/merchant */ "./libs/grpc-types/src/protos/merchant.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
let MerchantCommonService = class MerchantCommonService {
    constructor(client) {
        this.client = client;
    }
    onModuleInit() {
        this.merchantService = this.client.getService(merchant_1.MERCHANT_SERVICE_NAME);
    }
    async create(data) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.create(data));
    }
    async findById(id) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.findById(id));
    }
    async findOne(request) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.findOne(request));
    }
    async find(query) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.find(query));
    }
    async findBranchById(id) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.findBranchById(id));
    }
    async branch(query) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.branch(query));
    }
    async findBranches(query) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.findBranches(query));
    }
    async branches(query) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.branches(query));
    }
    async createBranch(data) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.createBranch(data));
    }
    async updateBranch(id, data) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.updateBranch({ id, data }));
    }
    async deleteBranch(id) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.deleteBranch({ id }));
    }
    async findGroupById(id) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.findGroupById(id));
    }
    async group(query) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.group(query));
    }
    async findGroups(query) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.groups(query));
    }
    async createGroup(data) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.createGroup(data));
    }
    async updateGroup(id, data) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.updateGroup({ id, data }));
    }
    async deleteGroup(id) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.deleteGroup({ id }));
    }
    async findServiceById(id) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.findServiceById(id));
    }
    async service(query) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.service(query));
    }
    async findService(query) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.services(query));
    }
    async createService(data) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.createService(data));
    }
    async updateService(id, data) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.updateService({ id, data }));
    }
    async deleteService(id) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.deleteService({ id }));
    }
    async findServiceOffsetPagination(query) {
        return await (0, rxjs_1.firstValueFrom)(this.merchantService.findServiceOffsetPagination(query));
    }
    async findAllBranches(merchantId, query) {
        let where = null;
        if (merchantId) {
            where = {
                merchantId,
            };
        }
        if (!(0, lodash_1.isEmpty)(query === null || query === void 0 ? void 0 : query.q)) {
            (0, lodash_1.merge)(where, {
                search: {
                    _iLike: `%${query === null || query === void 0 ? void 0 : query.q}%`,
                },
            });
        }
        const result = await this.findBranches(Object.assign(Object.assign({}, query), { where: where ? JSON.stringify(where) : null }));
        return result;
    }
    async findAllGroups(merchantId, query) {
        let where = null;
        if (merchantId) {
            where = {
                merchantId,
            };
        }
        if (!(0, lodash_1.isEmpty)(query === null || query === void 0 ? void 0 : query.q)) {
            (0, lodash_1.merge)(where, {
                search: {
                    _iLike: `%${query === null || query === void 0 ? void 0 : query.q}%`,
                },
            });
        }
        const result = await this.findGroups(Object.assign(Object.assign({}, query), { where: where ? JSON.stringify(where) : null }));
        return result;
    }
    async findAllServices(query, merchantId) {
        let where = null;
        if (merchantId) {
            where = {
                merchantId,
            };
        }
        if (!(0, lodash_1.isEmpty)(query === null || query === void 0 ? void 0 : query.q)) {
            (0, lodash_1.merge)(where, {
                search: {
                    _iLike: `%${query === null || query === void 0 ? void 0 : query.q}%`,
                },
            });
        }
        const result = await this.findService(Object.assign(Object.assign({}, query), { where: where ? JSON.stringify(where) : null }));
        return result;
    }
};
MerchantCommonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(merchant_1.MERCHANT_PACKAGE_NAME)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], MerchantCommonService);
exports.MerchantCommonService = MerchantCommonService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/merchant/merchant.controller.ts":
/*!**********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/merchant/merchant.controller.ts ***!
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MerchantController = void 0;
const entities_1 = __webpack_require__(/*! @libs/database/entities */ "./libs/database/src/entities/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const core_1 = __webpack_require__(/*! @/api-gateway/core */ "./apps/api-gateway/src/core/index.ts");
const dtos_1 = __webpack_require__(/*! @/api-gateway/dtos */ "./apps/api-gateway/src/dtos/index.ts");
const merchant_common_service_1 = __webpack_require__(/*! @/api-gateway/modules/merchant-common/merchant-common.service */ "./apps/api-gateway/src/modules/merchant-common/merchant-common.service.ts");
const booking_common_service_1 = __webpack_require__(/*! @/api-gateway/modules/booking-common/booking-common.service */ "./apps/api-gateway/src/modules/booking-common/booking-common.service.ts");
let MerchantController = class MerchantController {
    constructor(merchantService, bookingService) {
        this.merchantService = merchantService;
        this.bookingService = bookingService;
    }
    async findAllMerchants(query) {
        let where = null;
        if (!(0, lodash_1.isEmpty)(query === null || query === void 0 ? void 0 : query.q)) {
            where = {
                search: {
                    _iLike: `%${query === null || query === void 0 ? void 0 : query.q}%`,
                },
            };
        }
        const result = await this.merchantService.find(Object.assign(Object.assign({}, query), { where: where ? JSON.stringify(where) : null }));
        return result;
    }
    async findBranches(admin, id, query) {
        const result = await this.merchantService.findAllBranches(id, query);
        return result;
    }
    async findGroups(admin, id, query) {
        const result = await this.merchantService.findAllGroups(id, query);
        return result;
    }
    async findServices(id, query) {
        const result = await this.merchantService.findAllServices(query, id);
        return result;
    }
    async findBookings(id, query) {
        const result = await this.bookingService.findBookings(query, id);
        return result;
    }
    async getMerchantDetail(id) {
        const { merchant } = await this.merchantService.findById({ id });
        return { merchant };
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dtos_1.BaseQueryDto !== "undefined" && dtos_1.BaseQueryDto) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], MerchantController.prototype, "findAllMerchants", null);
__decorate([
    (0, common_1.Get)(':id/branches'),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, core_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof entities_1.UserModel !== "undefined" && entities_1.UserModel) === "function" ? _e : Object, Number, typeof (_f = typeof dtos_1.BaseQueryDto !== "undefined" && dtos_1.BaseQueryDto) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "findBranches", null);
__decorate([
    (0, common_1.Get)(':id/groups'),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, core_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof entities_1.UserModel !== "undefined" && entities_1.UserModel) === "function" ? _g : Object, Number, typeof (_h = typeof dtos_1.BaseQueryDto !== "undefined" && dtos_1.BaseQueryDto) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "findGroups", null);
__decorate([
    (0, common_1.Get)(':id/services'),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_j = typeof dtos_1.BaseQueryDto !== "undefined" && dtos_1.BaseQueryDto) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "findServices", null);
__decorate([
    (0, common_1.Get)(':id/bookings'),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_k = typeof dtos_1.BaseQueryDto !== "undefined" && dtos_1.BaseQueryDto) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "findBookings", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "getMerchantDetail", null);
MerchantController = __decorate([
    (0, common_1.Controller)('merchants'),
    __metadata("design:paramtypes", [typeof (_a = typeof merchant_common_service_1.MerchantCommonService !== "undefined" && merchant_common_service_1.MerchantCommonService) === "function" ? _a : Object, typeof (_b = typeof booking_common_service_1.BookingCommonService !== "undefined" && booking_common_service_1.BookingCommonService) === "function" ? _b : Object])
], MerchantController);
exports.MerchantController = MerchantController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/merchant/merchant.module.ts":
/*!******************************************************************!*\
  !*** ./apps/api-gateway/src/modules/merchant/merchant.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MerchantModule = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const merchant_controller_1 = __webpack_require__(/*! ./merchant.controller */ "./apps/api-gateway/src/modules/merchant/merchant.controller.ts");
const merchant_common_module_1 = __webpack_require__(/*! @/api-gateway/modules/merchant-common/merchant-common.module */ "./apps/api-gateway/src/modules/merchant-common/merchant-common.module.ts");
const booking_common_module_1 = __webpack_require__(/*! @/api-gateway/modules/booking-common/booking-common.module */ "./apps/api-gateway/src/modules/booking-common/booking-common.module.ts");
let MerchantModule = class MerchantModule {
};
MerchantModule = __decorate([
    (0, common_1.Module)({
        imports: [merchant_common_module_1.MerchantCommonModule, booking_common_module_1.BookingCommonModule, core_1.UtilsModule],
        controllers: [merchant_controller_1.MerchantController],
        providers: [],
    })
], MerchantModule);
exports.MerchantModule = MerchantModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/messages/dto/create-message.dto.ts":
/*!*************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/messages/dto/create-message.dto.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMessageDto = exports.MESSAGE_TYPE = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var MESSAGE_TYPE;
(function (MESSAGE_TYPE) {
    MESSAGE_TYPE["TEXT"] = "TEXT";
    MESSAGE_TYPE["IMAGE"] = "IMAGE";
    MESSAGE_TYPE["VIDEO"] = "VIDEO";
})(MESSAGE_TYPE = exports.MESSAGE_TYPE || (exports.MESSAGE_TYPE = {}));
class CreateMessageDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CreateMessageDto.prototype, "senderId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CreateMessageDto.prototype, "receiverId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMessageDto.prototype, "senderName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMessageDto.prototype, "receiverName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMessageDto.prototype, "senderAvatar", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMessageDto.prototype, "receiverAvatar", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMessageDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(MESSAGE_TYPE),
    __metadata("design:type", String)
], CreateMessageDto.prototype, "type", void 0);
exports.CreateMessageDto = CreateMessageDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/messages/message.service.ts":
/*!******************************************************************!*\
  !*** ./apps/api-gateway/src/modules/messages/message.service.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const messages_schema_1 = __webpack_require__(/*! ./schemas/messages.schema */ "./apps/api-gateway/src/modules/messages/schemas/messages.schema.ts");
let MessagesService = class MessagesService {
    constructor(messageModel) {
        this.messageModel = messageModel;
    }
    async create(messageData) {
        const createdMessage = new this.messageModel(messageData);
        const doc = await createdMessage.save();
        return doc;
    }
    async getRecentMessages(userId, page, limit) {
        const skip = (page - 1) * limit;
        return this.messageModel
            .find({ $or: [{ senderId: userId }, { receiverId: userId }] })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .exec();
    }
    async getConversationMessages(userId, otherUserId, page, limit) {
        const skip = (page - 1) * limit;
        const doc = await this.messageModel
            .find({
            $or: [
                { senderId: userId, receiverId: otherUserId },
                { senderId: otherUserId, receiverId: userId },
            ],
        })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .exec();
        return doc;
    }
};
MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(messages_schema_1.Message.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], MessagesService);
exports.MessagesService = MessagesService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/messages/messages.module.ts":
/*!******************************************************************!*\
  !*** ./apps/api-gateway/src/modules/messages/messages.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const message_service_1 = __webpack_require__(/*! ./message.service */ "./apps/api-gateway/src/modules/messages/message.service.ts");
const messages_schema_1 = __webpack_require__(/*! ./schemas/messages.schema */ "./apps/api-gateway/src/modules/messages/schemas/messages.schema.ts");
let MessagesModule = class MessagesModule {
};
MessagesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: messages_schema_1.Message.name, schema: messages_schema_1.MessageSchema }]),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => {
                    return {
                        uri: configService.get('MESSAGE_DB_URI'),
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [message_service_1.MessagesService],
        exports: [message_service_1.MessagesService],
    })
], MessagesModule);
exports.MessagesModule = MessagesModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/messages/schemas/messages.schema.ts":
/*!**************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/messages/schemas/messages.schema.ts ***!
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
exports.MessageSchema = exports.Message = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let Message = class Message {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Message.prototype, "senderId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Message.prototype, "receiverId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Message.prototype, "senderName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Message.prototype, "receiverName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Message.prototype, "senderAvatar", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Message.prototype, "receiverAvatar", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Message.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Message.prototype, "type", void 0);
Message = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Message);
exports.Message = Message;
exports.MessageSchema = mongoose_1.SchemaFactory.createForClass(Message);


/***/ }),

/***/ "./apps/api-gateway/src/modules/service/service.controller.ts":
/*!********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/service/service.controller.ts ***!
  \********************************************************************/
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const service_service_1 = __webpack_require__(/*! ./service.service */ "./apps/api-gateway/src/modules/service/service.service.ts");
const core_1 = __webpack_require__(/*! @/api-gateway/core */ "./apps/api-gateway/src/core/index.ts");
const dtos_1 = __webpack_require__(/*! @/api-gateway/dtos */ "./apps/api-gateway/src/dtos/index.ts");
const merchant_common_service_1 = __webpack_require__(/*! @/api-gateway/modules/merchant-common/merchant-common.service */ "./apps/api-gateway/src/modules/merchant-common/merchant-common.service.ts");
let ServiceController = class ServiceController {
    constructor(merchantService, servicesService) {
        this.merchantService = merchantService;
        this.servicesService = servicesService;
    }
    async createService(data) {
        const result = await this.servicesService.create(data);
        return result;
    }
    async updateService(id, data) {
        const result = await this.servicesService.update(id, data);
        return result;
    }
    async deleteService(id) {
        const result = await this.servicesService.delete(id);
        return result;
    }
    async findAll(query) {
        const result = await this.merchantService.findAllServices(query);
        return result;
    }
    async findDetail(id) {
        const result = await this.servicesService.delete(id);
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dtos_1.CreateServiceInput !== "undefined" && dtos_1.CreateServiceInput) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "createService", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_d = typeof dtos_1.PartialUpdateService !== "undefined" && dtos_1.PartialUpdateService) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "updateService", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "deleteService", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof dtos_1.BaseQueryDto !== "undefined" && dtos_1.BaseQueryDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(core_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "findDetail", null);
ServiceController = __decorate([
    (0, common_1.Controller)('services'),
    __metadata("design:paramtypes", [typeof (_a = typeof merchant_common_service_1.MerchantCommonService !== "undefined" && merchant_common_service_1.MerchantCommonService) === "function" ? _a : Object, typeof (_b = typeof service_service_1.ServicesService !== "undefined" && service_service_1.ServicesService) === "function" ? _b : Object])
], ServiceController);
exports.ServiceController = ServiceController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/service/service.module.ts":
/*!****************************************************************!*\
  !*** ./apps/api-gateway/src/modules/service/service.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceModule = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const service_controller_1 = __webpack_require__(/*! ./service.controller */ "./apps/api-gateway/src/modules/service/service.controller.ts");
const service_service_1 = __webpack_require__(/*! ./service.service */ "./apps/api-gateway/src/modules/service/service.service.ts");
const core_2 = __webpack_require__(/*! @/api-gateway/core */ "./apps/api-gateway/src/core/index.ts");
const merchant_common_module_1 = __webpack_require__(/*! @/api-gateway/modules/merchant-common/merchant-common.module */ "./apps/api-gateway/src/modules/merchant-common/merchant-common.module.ts");
let ServiceModule = class ServiceModule {
};
ServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [merchant_common_module_1.MerchantCommonModule, core_1.UtilsModule],
        providers: [service_service_1.ServicesService, core_2.MessageComponent],
        controllers: [service_controller_1.ServiceController],
    })
], ServiceModule);
exports.ServiceModule = ServiceModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/service/service.service.ts":
/*!*****************************************************************!*\
  !*** ./apps/api-gateway/src/modules/service/service.service.ts ***!
  \*****************************************************************/
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
exports.ServicesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @/api-gateway/core */ "./apps/api-gateway/src/core/index.ts");
const merchant_common_service_1 = __webpack_require__(/*! @/api-gateway/modules/merchant-common/merchant-common.service */ "./apps/api-gateway/src/modules/merchant-common/merchant-common.service.ts");
let ServicesService = class ServicesService {
    constructor(merchantService, i18n) {
        this.merchantService = merchantService;
        this.i18n = i18n;
    }
    async create(data, lang) {
        const service = await this.merchantService.createService(data);
        return {
            message: this.i18n.lang('lang.SERVICE.CREATE.SUCCESS', { lang }),
            service,
        };
    }
    async update(id, data, lang) {
        const updatedService = await this.merchantService.updateService(id, data);
        return {
            message: this.i18n.lang('lang.SERVICE.UPDATE.SUCCESS', { lang }),
            service: updatedService,
        };
    }
    async delete(id, lang) {
        const result = await this.merchantService.deleteService(id);
        return {
            message: this.i18n.lang('lang.SERVICE.DELETE.SUCCESS', { lang }),
            result,
        };
    }
    async findDetail(id, lang) {
        const { service } = await this.merchantService.findServiceById({ id });
        return {
            service,
        };
    }
};
ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof merchant_common_service_1.MerchantCommonService !== "undefined" && merchant_common_service_1.MerchantCommonService) === "function" ? _a : Object, typeof (_b = typeof core_1.MessageComponent !== "undefined" && core_1.MessageComponent) === "function" ? _b : Object])
], ServicesService);
exports.ServicesService = ServicesService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/upload/cloudinary.provider.ts":
/*!********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/upload/cloudinary.provider.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CloudinaryProvider = exports.CLOUDINARY = void 0;
const cloudinary_1 = __webpack_require__(/*! cloudinary */ "cloudinary");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
exports.CLOUDINARY = 'Cloudinary';
exports.CloudinaryProvider = {
    provide: exports.CLOUDINARY,
    inject: [config_1.ConfigService],
    useFactory: (configService) => {
        return cloudinary_1.v2.config({
            cloud_name: configService.get('CLD_CLOUD_NAME'),
            api_key: configService.get('CLD_API_KEY'),
            api_secret: configService.get('CLD_API_SECRET'),
        });
    },
};


/***/ }),

/***/ "./apps/api-gateway/src/modules/upload/upload-rest.service.ts":
/*!********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/upload/upload-rest.service.ts ***!
  \********************************************************************/
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
exports.UploadRestService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const aws_sdk_1 = __webpack_require__(/*! aws-sdk */ "aws-sdk");
const cloudinary_1 = __webpack_require__(/*! cloudinary */ "cloudinary");
const streamifier_1 = __webpack_require__(/*! streamifier */ "streamifier");
let UploadRestService = class UploadRestService {
    constructor(configService) {
        this.configService = configService;
        cloudinary_1.v2.config({
            cloud_name: this.configService.get('CLD_CLOUD_NAME'),
            api_key: this.configService.get('CLD_API_KEY'),
            api_secret: this.configService.get('CLD_API_SECRET'),
        });
        this.S3 = new aws_sdk_1.S3({
            accessKeyId: this.configService.get('AWS_ACCESS_KEY'),
            secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
            region: this.configService.get('AWS_REGION'),
        });
        this.bucket = this.configService.get('AWS_S3_BUCKET_NAME');
    }
    async uploadFile(file) {
        const params = {
            ContentType: file.mimetype,
            Bucket: this.bucket,
            Key: file.originalname,
            Body: file.buffer,
            ACL: 'public-read',
            ContentDisposition: `filename=${file.originalname}`,
        };
        const uploadedBlob = await this.S3.upload(params).promise();
        return uploadedBlob;
    }
    async uploadToCloudinary(file) {
        return new Promise((resolve, reject) => {
            const cld_upload_stream = cloudinary_1.v2.uploader.upload_stream({
                resource_type: 'auto',
                use_filename: true,
            }, (error, result) => {
                if (result) {
                    resolve(result);
                }
                else {
                    reject(error);
                }
            });
            (0, streamifier_1.createReadStream)(file.buffer).pipe(cld_upload_stream);
        });
    }
    async uploadFiles(files) {
        const result = await Promise.all(files.map(async (file) => {
            const manageUpload = await this.uploadFile(file);
            return {
                url: manageUpload.Location,
                key: manageUpload.Key,
            };
        }));
        return result;
    }
};
UploadRestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], UploadRestService);
exports.UploadRestService = UploadRestService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/upload/upload.controller.ts":
/*!******************************************************************!*\
  !*** ./apps/api-gateway/src/modules/upload/upload.controller.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const upload_rest_service_1 = __webpack_require__(/*! ./upload-rest.service */ "./apps/api-gateway/src/modules/upload/upload-rest.service.ts");
let UploadController = class UploadController {
    constructor(uploadService) {
        this.uploadService = uploadService;
        this.logger = new common_1.Logger(this.constructor.name);
    }
    async uploadFiles(files) {
        try {
            if (!files.length) {
                throw new common_1.HttpException('File not found', common_1.HttpStatus.BAD_REQUEST);
            }
            const result = await this.uploadService.uploadFiles(files);
            return result;
        }
        catch (error) {
            this.logger.error(error.message);
            throw new common_1.HttpException('Upload file failed', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadFiles", null);
UploadController = __decorate([
    (0, common_1.Controller)('file'),
    __metadata("design:paramtypes", [typeof (_a = typeof upload_rest_service_1.UploadRestService !== "undefined" && upload_rest_service_1.UploadRestService) === "function" ? _a : Object])
], UploadController);
exports.UploadController = UploadController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/upload/upload.module.ts":
/*!**************************************************************!*\
  !*** ./apps/api-gateway/src/modules/upload/upload.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const cloudinary_provider_1 = __webpack_require__(/*! ./cloudinary.provider */ "./apps/api-gateway/src/modules/upload/cloudinary.provider.ts");
const upload_service_1 = __webpack_require__(/*! ./upload.service */ "./apps/api-gateway/src/modules/upload/upload.service.ts");
const upload_rest_service_1 = __webpack_require__(/*! @/api-gateway/modules/upload/upload-rest.service */ "./apps/api-gateway/src/modules/upload/upload-rest.service.ts");
const upload_controller_1 = __webpack_require__(/*! @/api-gateway/modules/upload/upload.controller */ "./apps/api-gateway/src/modules/upload/upload.controller.ts");
let UploadModule = class UploadModule {
};
UploadModule = __decorate([
    (0, common_1.Module)({
        providers: [config_1.ConfigModule, cloudinary_provider_1.CloudinaryProvider, upload_service_1.UploadService, upload_rest_service_1.UploadRestService],
        controllers: [upload_controller_1.UploadController],
        exports: [cloudinary_provider_1.CloudinaryProvider, upload_service_1.UploadService, upload_rest_service_1.UploadRestService],
    })
], UploadModule);
exports.UploadModule = UploadModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/upload/upload.service.ts":
/*!***************************************************************!*\
  !*** ./apps/api-gateway/src/modules/upload/upload.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cloudinary_1 = __webpack_require__(/*! cloudinary */ "cloudinary");
const toStream = __webpack_require__(/*! buffer-to-stream */ "buffer-to-stream");
let UploadService = class UploadService {
    async uploadSingleToCloudinaryGraphql(args) {
        const { createReadStream } = await args.file;
        const buffer = await this.streamToBuffer(createReadStream());
        return this.toCloudinary(buffer, args.folder);
    }
    async uploadMultipleToCloudinaryGraphql(args) {
        try {
            const arrayResponse = [];
            await Promise.all(args.files.map(async (file) => {
                const result = await this.uploadSingleToCloudinaryGraphql({ file });
                arrayResponse.push(result);
            }));
            return arrayResponse;
        }
        catch (error) {
            console.log(error);
        }
    }
    async streamToBuffer(stream) {
        const buffer = [];
        return new Promise((resolve, reject) => stream
            .on('error', (error) => reject(error))
            .on('data', (data) => buffer.push(data))
            .on('end', () => resolve(Buffer.concat(buffer))));
    }
    async toCloudinary(buffer, folder = 'development') {
        return await new Promise((resolve, reject) => {
            const upload = cloudinary_1.v2.uploader.upload_stream({ folder }, (error, result) => {
                if (error)
                    return reject(error);
                resolve(result);
            });
            toStream(buffer).pipe(upload);
        });
    }
};
UploadService = __decorate([
    (0, common_1.Injectable)()
], UploadService);
exports.UploadService = UploadService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/user-common/user-common.module.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/user-common/user-common.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserCommonModule = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const grpc_types_1 = __webpack_require__(/*! @libs/grpc-types */ "./libs/grpc-types/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const user_common_service_1 = __webpack_require__(/*! ./user-common.service */ "./apps/api-gateway/src/modules/user-common/user-common.service.ts");
let UserCommonModule = class UserCommonModule {
};
UserCommonModule = __decorate([
    (0, common_1.Module)({
        imports: [microservices_1.ClientsModule.register([grpc_types_1.UserClient]), core_1.UtilsModule],
        providers: [user_common_service_1.UserCommonService],
        exports: [user_common_service_1.UserCommonService],
    })
], UserCommonModule);
exports.UserCommonModule = UserCommonModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/user-common/user-common.service.ts":
/*!*************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/user-common/user-common.service.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserCommonService = void 0;
const user_1 = __webpack_require__(/*! @libs/grpc-types/protos/user */ "./libs/grpc-types/src/protos/user.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let UserCommonService = class UserCommonService {
    constructor(client) {
        this.client = client;
    }
    onModuleInit() {
        this.userService = this.client.getService(user_1.USER_SERVICE_NAME);
    }
    async create(data) {
        return await (0, rxjs_1.firstValueFrom)(this.userService.create(data));
    }
    async find(query) {
        return await (0, rxjs_1.firstValueFrom)(this.userService.find(query));
    }
    async findOne(query) {
        return await (0, rxjs_1.firstValueFrom)(this.userService.findOne(query));
    }
    async findById(id) {
        return await (0, rxjs_1.firstValueFrom)(this.userService.findById(id));
    }
    async countUser(query) {
        return await (0, rxjs_1.firstValueFrom)(this.userService.count(query));
    }
    async update(id, data) {
        return await (0, rxjs_1.firstValueFrom)(this.userService.update({
            id,
            data,
        }));
    }
    async deleteCustomer(id) {
        return await (0, rxjs_1.firstValueFrom)(this.userService.deleteCustomer({ id }));
    }
    async findDevices(query) {
        return await (0, rxjs_1.firstValueFrom)(this.userService.findDevices(query));
    }
    async upsertDevice(data) {
        return await (0, rxjs_1.firstValueFrom)(this.userService.upsertDevice(data));
    }
    async createMerchantUser(data) {
        return await (0, rxjs_1.firstValueFrom)(this.userService.createMerchantUser(data));
    }
    async addOperator(data) {
        return await (0, rxjs_1.firstValueFrom)(this.userService.addOperator(data));
    }
    async countCustomer(query) {
        return await (0, rxjs_1.firstValueFrom)(this.userService.countCustomer(query));
    }
    async addCustomer(data) {
        return await (0, rxjs_1.firstValueFrom)(this.userService.addCustomer(data));
    }
    async updateCustomer(data) {
        return await (0, rxjs_1.firstValueFrom)(this.userService.updateCustomer(data));
    }
};
UserCommonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(user_1.DUCPH_USER_PACKAGE_NAME)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], UserCommonService);
exports.UserCommonService = UserCommonService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/user/user.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/api-gateway/src/modules/user/user.controller.ts ***!
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const entities_1 = __webpack_require__(/*! @libs/database/entities */ "./libs/database/src/entities/index.ts");
const commons_1 = __webpack_require__(/*! @libs/grpc-types/protos/commons */ "./libs/grpc-types/src/protos/commons.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const core_2 = __webpack_require__(/*! @/api-gateway/core */ "./apps/api-gateway/src/core/index.ts");
const auth_guard_1 = __webpack_require__(/*! @/api-gateway/core/guards/auth.guard */ "./apps/api-gateway/src/core/guards/auth.guard.ts");
const dtos_1 = __webpack_require__(/*! @/api-gateway/dtos */ "./apps/api-gateway/src/dtos/index.ts");
const booking_common_service_1 = __webpack_require__(/*! @/api-gateway/modules/booking-common/booking-common.service */ "./apps/api-gateway/src/modules/booking-common/booking-common.service.ts");
const merchant_common_service_1 = __webpack_require__(/*! @/api-gateway/modules/merchant-common/merchant-common.service */ "./apps/api-gateway/src/modules/merchant-common/merchant-common.service.ts");
const user_common_service_1 = __webpack_require__(/*! @/api-gateway/modules/user-common/user-common.service */ "./apps/api-gateway/src/modules/user-common/user-common.service.ts");
const types_1 = __webpack_require__(/*! @/api-gateway/types */ "./apps/api-gateway/src/types/index.ts");
let UserController = class UserController {
    constructor(userService, passwordUtils, merchantService, bookingService) {
        this.userService = userService;
        this.passwordUtils = passwordUtils;
        this.merchantService = merchantService;
        this.bookingService = bookingService;
    }
    async updatePassword(currentUser, data) {
        const { user } = await this.userService.findById({ id: currentUser.id });
        const isSame = await this.passwordUtils.compare(data.currentPassword, user.password);
        const isConfirmed = data.newPassword === data.confirmPassword;
        if (!isSame || !isConfirmed) {
            core_1.ErrorHelper.HttpBadRequestException(core_1.USER_MESSAGE.UPDATE.INVALID_PASSWORD);
        }
        const password = await this.passwordUtils.hash(data.newPassword);
        const result = await this.userService.update(user.id, {
            password,
        });
        return result;
    }
    async addOperator(admin, userInput) {
        var _a;
        const { merchant } = await this.merchantService.findById({ id: userInput.merchantId });
        if ((0, lodash_1.isEmpty)(merchant)) {
            core_1.ErrorHelper.HttpNotFoundException(core_1.MERCHANT_MESSAGE.READ.NOT_FOUND);
        }
        if (merchant.userId !== admin.id) {
            core_1.ErrorHelper.HttpBadRequestException(core_1.COMMON_MESSAGE.INVALID);
        }
        const { count } = await this.userService.countUser({
            where: JSON.stringify({ email: userInput.email }),
        });
        if (count >= 1) {
            core_1.ErrorHelper.HttpBadRequestException(core_1.USER_MESSAGE.CREATE.EXIST_EMAIL);
        }
        const user = await this.userService.addOperator({
            user: userInput,
            merchantUser: {
                branchId: userInput === null || userInput === void 0 ? void 0 : userInput.branchId,
                merchantId: merchant.id,
                role: (_a = userInput === null || userInput === void 0 ? void 0 : userInput.role) !== null && _a !== void 0 ? _a : commons_1.EUserRole.MASTER_WORKER,
            },
        });
        return user;
    }
    async addCustomer(admin, customerInput) {
        const { merchant } = await this.merchantService.findById({ id: customerInput.merchantId });
        if ((0, lodash_1.isEmpty)(merchant)) {
            core_1.ErrorHelper.HttpNotFoundException(core_1.MERCHANT_MESSAGE.READ.NOT_FOUND);
        }
        if (merchant.userId !== admin.id) {
            core_1.ErrorHelper.HttpBadRequestException(core_1.COMMON_MESSAGE.INVALID);
        }
        const { count } = await this.userService.countCustomer({
            where: JSON.stringify({
                email: customerInput === null || customerInput === void 0 ? void 0 : customerInput.email,
                phoneNumber: customerInput === null || customerInput === void 0 ? void 0 : customerInput.phoneNumber,
                merchantId: customerInput === null || customerInput === void 0 ? void 0 : customerInput.merchantId,
            }),
        });
        if (count > 1) {
            core_1.ErrorHelper.HttpBadRequestException(core_1.USER_MESSAGE.CREATE.EXIST_EMAIL);
        }
        const { user } = await this.userService.addCustomer({
            user: Object.assign(Object.assign({}, customerInput), { role: commons_1.EUserRole.USER, branchId: customerInput === null || customerInput === void 0 ? void 0 : customerInput.branchId, merchantId: merchant.id }),
            merchantUser: {
                branchId: customerInput === null || customerInput === void 0 ? void 0 : customerInput.branchId,
                merchantId: merchant.id,
                role: commons_1.EUserRole.USER,
            },
        });
        return {
            message: core_1.CUSTOMER_MESSAGE.CREATE.SUCCESSFUL,
            user,
        };
    }
    async updateCustomer(admin, userId, customerInput) {
        var _a, _b;
        const currentCustomer = await this.userService.findById({ id: userId });
        if ((0, lodash_1.isEmpty)(currentCustomer.user)) {
            core_1.ErrorHelper.HttpBadRequestException(core_1.CUSTOMER_MESSAGE.READ.NOT_FOUND);
        }
        if (customerInput === null || customerInput === void 0 ? void 0 : customerInput.branchId) {
            const { branch } = await this.merchantService.findBranchById({ id: customerInput === null || customerInput === void 0 ? void 0 : customerInput.branchId });
            if ((0, lodash_1.isEmpty)(branch)) {
                core_1.ErrorHelper.HttpNotFoundException(core_1.MERCHANT_MESSAGE.READ.NOT_FOUND);
            }
        }
        const { count } = await this.userService.countCustomer({
            where: JSON.stringify({
                email: customerInput === null || customerInput === void 0 ? void 0 : customerInput.email,
                phoneNumber: customerInput === null || customerInput === void 0 ? void 0 : customerInput.phoneNumber,
                merchantId: customerInput === null || customerInput === void 0 ? void 0 : customerInput.merchantId,
            }),
        });
        if (count > 1) {
            core_1.ErrorHelper.HttpBadRequestException(core_1.USER_MESSAGE.CREATE.EXIST_EMAIL);
        }
        const user = await this.userService.updateCustomer({
            id: userId,
            user: Object.assign(Object.assign({}, customerInput), { role: (_a = customerInput === null || customerInput === void 0 ? void 0 : customerInput.role) !== null && _a !== void 0 ? _a : commons_1.EUserRole.MASTER_WORKER }),
            merchantUser: Object.assign(Object.assign({}, customerInput), { role: (_b = customerInput === null || customerInput === void 0 ? void 0 : customerInput.role) !== null && _b !== void 0 ? _b : commons_1.EUserRole.MASTER_WORKER }),
        });
        return user;
    }
    async updateUser(id, data) {
        const user = await this.userService.update(id, data);
        return user;
    }
    async getOperators(merchantId, query) {
        const where = {
            merchantId,
            role: {
                _not: commons_1.EUserRole.USER,
            },
        };
        if (!(0, lodash_1.isEmpty)(query === null || query === void 0 ? void 0 : query.q)) {
            (0, lodash_1.merge)(where, {
                _or: [{ search: { _iLike: `%${query.q}%` } }],
            });
        }
        const result = await this.userService.find(Object.assign(Object.assign({}, query), { where: JSON.stringify(where) }));
        return result;
    }
    async findOwnBookings(user, query) {
        const where = {
            userId: user.id,
        };
        if (!(0, lodash_1.isEmpty)(query === null || query === void 0 ? void 0 : query.q)) {
            (0, lodash_1.merge)(where, {
                search: {
                    _iLike: `%${query.q}%`,
                },
            });
        }
        const result = await this.bookingService.find(Object.assign(Object.assign({}, query), { where: JSON.stringify(where) }));
        return result;
    }
    async findBookings(userId, query) {
        const where = {
            userId,
        };
        if (!(0, lodash_1.isEmpty)(query === null || query === void 0 ? void 0 : query.q)) {
            (0, lodash_1.merge)(where, {
                search: {
                    _iLike: `%${query.q}%`,
                },
            });
        }
        const result = await this.bookingService.find(Object.assign(Object.assign({}, query), { where: JSON.stringify(where) }));
        return result;
    }
};
__decorate([
    (0, common_1.Post)('change-password'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, core_2.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof entities_1.UserModel !== "undefined" && entities_1.UserModel) === "function" ? _e : Object, typeof (_f = typeof dtos_1.ChangePasswordInput !== "undefined" && dtos_1.ChangePasswordInput) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updatePassword", null);
__decorate([
    (0, common_1.Post)('add-operator'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, core_2.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof entities_1.UserModel !== "undefined" && entities_1.UserModel) === "function" ? _g : Object, typeof (_h = typeof dtos_1.AddOperatorDto !== "undefined" && dtos_1.AddOperatorDto) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addOperator", null);
__decorate([
    (0, common_1.Post)('add-customer'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, core_2.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof entities_1.UserModel !== "undefined" && entities_1.UserModel) === "function" ? _j : Object, typeof (_k = typeof dtos_1.AddCustomerDto !== "undefined" && dtos_1.AddCustomerDto) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addCustomer", null);
__decorate([
    (0, common_1.Patch)('update-customer/:id'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, core_2.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof entities_1.UserModel !== "undefined" && entities_1.UserModel) === "function" ? _l : Object, Number, typeof (_m = typeof dtos_1.UpdatePartialCustomer !== "undefined" && dtos_1.UpdatePartialCustomer) === "function" ? _m : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateCustomer", null);
__decorate([
    (0, common_1.Post)('add-user'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_o = typeof types_1.UpdatePartialUser !== "undefined" && types_1.UpdatePartialUser) === "function" ? _o : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Get)('merchant/:id'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_p = typeof dtos_1.PaginateUserDto !== "undefined" && dtos_1.PaginateUserDto) === "function" ? _p : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getOperators", null);
__decorate([
    (0, common_1.Get)('bookings'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, core_2.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_q = typeof entities_1.UserModel !== "undefined" && entities_1.UserModel) === "function" ? _q : Object, typeof (_r = typeof dtos_1.PaginateUserDto !== "undefined" && dtos_1.PaginateUserDto) === "function" ? _r : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOwnBookings", null);
__decorate([
    (0, common_1.Get)(':id/bookings'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_s = typeof dtos_1.PaginateUserDto !== "undefined" && dtos_1.PaginateUserDto) === "function" ? _s : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findBookings", null);
UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_common_service_1.UserCommonService !== "undefined" && user_common_service_1.UserCommonService) === "function" ? _a : Object, typeof (_b = typeof core_1.PasswordUtils !== "undefined" && core_1.PasswordUtils) === "function" ? _b : Object, typeof (_c = typeof merchant_common_service_1.MerchantCommonService !== "undefined" && merchant_common_service_1.MerchantCommonService) === "function" ? _c : Object, typeof (_d = typeof booking_common_service_1.BookingCommonService !== "undefined" && booking_common_service_1.BookingCommonService) === "function" ? _d : Object])
], UserController);
exports.UserController = UserController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/user/user.module.ts":
/*!**********************************************************!*\
  !*** ./apps/api-gateway/src/modules/user/user.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_controller_1 = __webpack_require__(/*! ./user.controller */ "./apps/api-gateway/src/modules/user/user.controller.ts");
const core_2 = __webpack_require__(/*! @/api-gateway/core */ "./apps/api-gateway/src/core/index.ts");
const merchant_common_module_1 = __webpack_require__(/*! @/api-gateway/modules/merchant-common/merchant-common.module */ "./apps/api-gateway/src/modules/merchant-common/merchant-common.module.ts");
const user_common_module_1 = __webpack_require__(/*! @/api-gateway/modules/user-common/user-common.module */ "./apps/api-gateway/src/modules/user-common/user-common.module.ts");
const booking_common_module_1 = __webpack_require__(/*! @/api-gateway/modules/booking-common/booking-common.module */ "./apps/api-gateway/src/modules/booking-common/booking-common.module.ts");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [user_common_module_1.UserCommonModule, merchant_common_module_1.MerchantCommonModule, core_1.UtilsModule, booking_common_module_1.BookingCommonModule],
        controllers: [user_controller_1.UserController],
        providers: [core_2.MessageComponent],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "./apps/api-gateway/src/types/base/base.type.ts":
/*!******************************************************!*\
  !*** ./apps/api-gateway/src/types/base/base.type.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PageMeta = exports.BaseType = void 0;
class BaseType {
}
exports.BaseType = BaseType;
class PageMeta {
}
exports.PageMeta = PageMeta;


/***/ }),

/***/ "./apps/api-gateway/src/types/base/index.ts":
/*!**************************************************!*\
  !*** ./apps/api-gateway/src/types/base/index.ts ***!
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
__exportStar(__webpack_require__(/*! ./base.type */ "./apps/api-gateway/src/types/base/base.type.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/types/booking/booking.type.ts":
/*!************************************************************!*\
  !*** ./apps/api-gateway/src/types/booking/booking.type.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingPaging = exports.CreateBookingInput = exports.Booking = void 0;
const base_1 = __webpack_require__(/*! ../base */ "./apps/api-gateway/src/types/base/index.ts");
class Booking extends base_1.BaseType {
}
exports.Booking = Booking;
class CreateBookingInput {
}
exports.CreateBookingInput = CreateBookingInput;
class BookingPaging {
}
exports.BookingPaging = BookingPaging;


/***/ }),

/***/ "./apps/api-gateway/src/types/booking/index.ts":
/*!*****************************************************!*\
  !*** ./apps/api-gateway/src/types/booking/index.ts ***!
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
__exportStar(__webpack_require__(/*! ./booking.type */ "./apps/api-gateway/src/types/booking/booking.type.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/types/index.ts":
/*!*********************************************!*\
  !*** ./apps/api-gateway/src/types/index.ts ***!
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
__exportStar(__webpack_require__(/*! ./base */ "./apps/api-gateway/src/types/base/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./user */ "./apps/api-gateway/src/types/user/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./merchant */ "./apps/api-gateway/src/types/merchant/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./booking */ "./apps/api-gateway/src/types/booking/index.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/types/merchant/branch.type.ts":
/*!************************************************************!*\
  !*** ./apps/api-gateway/src/types/merchant/branch.type.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BranchPaging = exports.Branch = void 0;
const base_1 = __webpack_require__(/*! ../base */ "./apps/api-gateway/src/types/base/index.ts");
class Branch extends base_1.BaseType {
}
exports.Branch = Branch;
class BranchPaging {
}
exports.BranchPaging = BranchPaging;


/***/ }),

/***/ "./apps/api-gateway/src/types/merchant/group.type.ts":
/*!***********************************************************!*\
  !*** ./apps/api-gateway/src/types/merchant/group.type.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupPaging = exports.Group = void 0;
const base_1 = __webpack_require__(/*! ../base */ "./apps/api-gateway/src/types/base/index.ts");
class Group extends base_1.BaseType {
}
exports.Group = Group;
class GroupPaging {
}
exports.GroupPaging = GroupPaging;


/***/ }),

/***/ "./apps/api-gateway/src/types/merchant/index.ts":
/*!******************************************************!*\
  !*** ./apps/api-gateway/src/types/merchant/index.ts ***!
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
__exportStar(__webpack_require__(/*! ./branch.type */ "./apps/api-gateway/src/types/merchant/branch.type.ts"), exports);
__exportStar(__webpack_require__(/*! ./merchant.type */ "./apps/api-gateway/src/types/merchant/merchant.type.ts"), exports);
__exportStar(__webpack_require__(/*! ./group.type */ "./apps/api-gateway/src/types/merchant/group.type.ts"), exports);
__exportStar(__webpack_require__(/*! ./service.type */ "./apps/api-gateway/src/types/merchant/service.type.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/types/merchant/merchant.type.ts":
/*!**************************************************************!*\
  !*** ./apps/api-gateway/src/types/merchant/merchant.type.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MerchantPaging = exports.CreateMerchantInput = exports.Merchant = void 0;
const base_1 = __webpack_require__(/*! @/api-gateway/types/base */ "./apps/api-gateway/src/types/base/index.ts");
class Merchant extends base_1.BaseType {
}
exports.Merchant = Merchant;
class CreateMerchantInput {
}
exports.CreateMerchantInput = CreateMerchantInput;
class MerchantPaging {
}
exports.MerchantPaging = MerchantPaging;


/***/ }),

/***/ "./apps/api-gateway/src/types/merchant/service.type.ts":
/*!*************************************************************!*\
  !*** ./apps/api-gateway/src/types/merchant/service.type.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateServiceInput = exports.Service = void 0;
const base_1 = __webpack_require__(/*! ../base */ "./apps/api-gateway/src/types/base/index.ts");
class Service extends base_1.BaseType {
}
exports.Service = Service;
class CreateServiceInput {
}
exports.CreateServiceInput = CreateServiceInput;


/***/ }),

/***/ "./apps/api-gateway/src/types/user/device.type.ts":
/*!********************************************************!*\
  !*** ./apps/api-gateway/src/types/user/device.type.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DevicePaging = exports.PartialAuthDeviceInputDto = exports.Device = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const dtos_1 = __webpack_require__(/*! @/api-gateway/dtos */ "./apps/api-gateway/src/dtos/index.ts");
const base_1 = __webpack_require__(/*! @/api-gateway/types/base */ "./apps/api-gateway/src/types/base/index.ts");
class Device extends base_1.BaseType {
}
exports.Device = Device;
class PartialAuthDeviceInputDto extends (0, mapped_types_1.PartialType)(dtos_1.DeviceInputDto) {
}
exports.PartialAuthDeviceInputDto = PartialAuthDeviceInputDto;
class DevicePaging {
}
exports.DevicePaging = DevicePaging;


/***/ }),

/***/ "./apps/api-gateway/src/types/user/index.ts":
/*!**************************************************!*\
  !*** ./apps/api-gateway/src/types/user/index.ts ***!
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
__exportStar(__webpack_require__(/*! ./user.type */ "./apps/api-gateway/src/types/user/user.type.ts"), exports);
__exportStar(__webpack_require__(/*! ./device.type */ "./apps/api-gateway/src/types/user/device.type.ts"), exports);


/***/ }),

/***/ "./apps/api-gateway/src/types/user/user.type.ts":
/*!******************************************************!*\
  !*** ./apps/api-gateway/src/types/user/user.type.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserPaging = exports.UpdatePartialUser = exports.User = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const base_1 = __webpack_require__(/*! ./../base */ "./apps/api-gateway/src/types/base/index.ts");
const dtos_1 = __webpack_require__(/*! @/api-gateway/dtos */ "./apps/api-gateway/src/dtos/index.ts");
class User extends base_1.BaseType {
}
exports.User = User;
class UpdatePartialUser extends (0, mapped_types_1.PartialType)(dtos_1.CreateUserInputDto) {
}
exports.UpdatePartialUser = UpdatePartialUser;
class UserPaging {
}
exports.UserPaging = UserPaging;


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

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

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

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/platform-socket.io":
/*!*********************************************!*\
  !*** external "@nestjs/platform-socket.io" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-socket.io");

/***/ }),

/***/ "@nestjs/sequelize":
/*!************************************!*\
  !*** external "@nestjs/sequelize" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@nestjs/sequelize");

/***/ }),

/***/ "@nestjs/websockets":
/*!*************************************!*\
  !*** external "@nestjs/websockets" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),

/***/ "argon2":
/*!*************************!*\
  !*** external "argon2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("argon2");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "buffer-to-stream":
/*!***********************************!*\
  !*** external "buffer-to-stream" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("buffer-to-stream");

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

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

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

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "streamifier":
/*!******************************!*\
  !*** external "streamifier" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("streamifier");

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
/*!**************************************!*\
  !*** ./apps/api-gateway/src/main.ts ***!
  \**************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const interceptors_1 = __webpack_require__(/*! @libs/interceptors */ "./libs/interceptors/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const platform_socket_io_1 = __webpack_require__(/*! @nestjs/platform-socket.io */ "@nestjs/platform-socket.io");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/api-gateway/src/app.module.ts");
const core_2 = __webpack_require__(/*! @/api-gateway/core */ "./apps/api-gateway/src/core/index.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.useGlobalFilters(new core_2.HttpExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.useGlobalInterceptors(new interceptors_1.TransformInterceptor());
    app.useWebSocketAdapter(new platform_socket_io_1.IoAdapter(app));
    app.setGlobalPrefix('api');
    app.enableShutdownHooks();
    await app.listen(configService.get('PORT'));
    return app;
}
bootstrap().then(async (app) => {
    console.log(`gateway is running on : ${await app.getUrl()}`);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtBQUV2RCxxR0FBeUM7QUFFekMscUdBQXlEO0FBRXpELEtBQUssVUFBVSxTQUFTO0lBQ3RCLE1BQU0sR0FBRyxHQUFHLE1BQU0sa0JBQVcsQ0FBQyxNQUFNLENBQUMsc0JBQVMsQ0FBQyxDQUFDO0lBRWhELE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQWdCLHNCQUFhLENBQUMsQ0FBQztJQUU1RCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSwwQkFBbUIsRUFBRSxDQUFDLENBQUM7SUFDaEQsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLHVCQUFjLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVELEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLG1DQUFvQixFQUFFLENBQUMsQ0FBQztJQUN0RCxHQUFHLENBQUMsbUJBQW1CLENBQUMsSUFBSSw4QkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUzQixHQUFHLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUUxQixNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBUyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVELFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsTUFBTSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2NvcmUvY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvY29yZS9jb21wb25lbnRzL21lc3NhZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9jb3JlL2RlY29yYXRvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2NvcmUvZGVjb3JhdG9ycy91c2VyL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9jb3JlL2RlY29yYXRvcnMvdXNlci9tYXRjaC5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2NvcmUvZGVjb3JhdG9ycy91c2VyL3VzZXIuZGVjb3JhdG9yLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9jb3JlL2ZpbHRlcnMvaHR0cC1leGNlcHRpb24uZmlsdGVyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9jb3JlL2ZpbHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2NvcmUvZ3VhcmRzL2F1dGguZ3VhcmQudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2NvcmUvZ3VhcmRzL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9jb3JlL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9jb3JlL3N0cmF0ZWdpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2NvcmUvc3RyYXRlZ2llcy9qd3QtcmVmcmVzaC5zdHJhdGVneS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvY29yZS9zdHJhdGVnaWVzL2p3dC5lbnVtLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9jb3JlL3N0cmF0ZWdpZXMvand0LnN0cmF0ZWd5LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL2F1dGgvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvYXV0aC9sb2dpbi5kdG8udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvYXV0aC9yZWdpc3Rlci5kdG8udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvYmFzZS9iYXNlLmR0by50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9iYXNlL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL2Jvb2tpbmcvYm9va2luZy5kdG8udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvYm9va2luZy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9jb21tb24vY29tbW9uLmR0by50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9jb21tb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvY3VzdG9tZXIvY3VzdG9tZXIuZHRvLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL2N1c3RvbWVyL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL21lcmNoYW50L2JyYW5jaC9jcmVhdGUtYnJhbmNoLmR0by50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9tZXJjaGFudC9icmFuY2gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvbWVyY2hhbnQvY3JlYXRlLmR0by50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9tZXJjaGFudC9ncm91cC9jcmVhdGUtZ3JvdXAuZHRvLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL21lcmNoYW50L2dyb3VwL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL21lcmNoYW50L2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL21lcmNoYW50L3NlcnZpY2UvY3JlYXRlLXNlcnZpY2UuZHRvLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL21lcmNoYW50L3NlcnZpY2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvdXNlci9kZXZpY2UuZHRvLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvdXNlci90b2tlbi5kdG8udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL2R0b3MvdXNlci91c2VyLmR0by50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvbW9kdWxlcy9hdXRoL2F1dGguY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvbW9kdWxlcy9hdXRoL2F1dGgubW9kdWxlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9tb2R1bGVzL2F1dGgvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9tb2R1bGVzL2Jvb2tpbmctY29tbW9uL2Jvb2tpbmctY29tbW9uLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvbW9kdWxlcy9ib29raW5nLWNvbW1vbi9ib29raW5nLWNvbW1vbi5zZXJ2aWNlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9tb2R1bGVzL2Jvb2tpbmcvYm9va2luZy5jb250cm9sbGVyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9tb2R1bGVzL2Jvb2tpbmcvYm9va2luZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL21vZHVsZXMvYm9va2luZy9ib29raW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL21vZHVsZXMvYnJhbmNoL2JyYW5jaC5jb250cm9sbGVyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9tb2R1bGVzL2JyYW5jaC9icmFuY2gubW9kdWxlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9tb2R1bGVzL2JyYW5jaC9icmFuY2guc2VydmljZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvbW9kdWxlcy9ldmVudHMvZXZlbnRzLmdhdGV3YXkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL21vZHVsZXMvZXZlbnRzL2V2ZW50cy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL21vZHVsZXMvZ3JvdXAvZ3JvdXAuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvbW9kdWxlcy9ncm91cC9ncm91cC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL21vZHVsZXMvZ3JvdXAvZ3JvdXAuc2VydmljZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvbW9kdWxlcy9tZXJjaGFudC1jb21tb24vbWVyY2hhbnQtY29tbW9uLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvbW9kdWxlcy9tZXJjaGFudC1jb21tb24vbWVyY2hhbnQtY29tbW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL21vZHVsZXMvbWVyY2hhbnQvbWVyY2hhbnQuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvbW9kdWxlcy9tZXJjaGFudC9tZXJjaGFudC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL21vZHVsZXMvbWVzc2FnZXMvZHRvL2NyZWF0ZS1tZXNzYWdlLmR0by50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvbW9kdWxlcy9tZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL21vZHVsZXMvbWVzc2FnZXMvbWVzc2FnZXMubW9kdWxlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9tb2R1bGVzL21lc3NhZ2VzL3NjaGVtYXMvbWVzc2FnZXMuc2NoZW1hLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9tb2R1bGVzL3NlcnZpY2Uvc2VydmljZS5jb250cm9sbGVyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9tb2R1bGVzL3NlcnZpY2Uvc2VydmljZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL21vZHVsZXMvc2VydmljZS9zZXJ2aWNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL21vZHVsZXMvdXBsb2FkL2Nsb3VkaW5hcnkucHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL21vZHVsZXMvdXBsb2FkL3VwbG9hZC1yZXN0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL21vZHVsZXMvdXBsb2FkL3VwbG9hZC5jb250cm9sbGVyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9tb2R1bGVzL3VwbG9hZC91cGxvYWQubW9kdWxlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9tb2R1bGVzL3VwbG9hZC91cGxvYWQuc2VydmljZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvbW9kdWxlcy91c2VyLWNvbW1vbi91c2VyLWNvbW1vbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL21vZHVsZXMvdXNlci1jb21tb24vdXNlci1jb21tb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvbW9kdWxlcy91c2VyL3VzZXIuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvbW9kdWxlcy91c2VyL3VzZXIubW9kdWxlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy90eXBlcy9iYXNlL2Jhc2UudHlwZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvdHlwZXMvYmFzZS9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvdHlwZXMvYm9va2luZy9ib29raW5nLnR5cGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL3R5cGVzL2Jvb2tpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL3R5cGVzL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy90eXBlcy9tZXJjaGFudC9icmFuY2gudHlwZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvdHlwZXMvbWVyY2hhbnQvZ3JvdXAudHlwZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvdHlwZXMvbWVyY2hhbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL3R5cGVzL21lcmNoYW50L21lcmNoYW50LnR5cGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYXBpLWdhdGV3YXkvc3JjL3R5cGVzL21lcmNoYW50L3NlcnZpY2UudHlwZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvdHlwZXMvdXNlci9kZXZpY2UudHlwZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvdHlwZXMvdXNlci9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvdHlwZXMvdXNlci91c2VyLnR5cGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvY29uc3RhbnRzL2RhdGFiYXNlLmNvbnN0YW50LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL2F1dGgvYXV0aC5tZXNzYWdlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL21lc3NhZ2UvYXV0aC9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL2NvbW1vbi5tZXNzYWdlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL21lc3NhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvbWVzc2FnZS9tZXJjaGFudC9icmFuY2gubWVzc2FnZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL21lcmNoYW50L2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL21lc3NhZ2UvbWVyY2hhbnQvbWVyY2hhbnQubWVzc2FnZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL3VzZXIvY3VzdG9tZXIubWVzc2FnZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvbWVzc2FnZS91c2VyL3VzZXIubWVzc2FnZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy91dGlscy9lcnJvci5oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvdXRpbHMvZ2VuZXJhbC51dGlsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL3V0aWxzL3Bhc3N3b3JkLnV0aWxzLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL3V0aWxzL3F1ZXJ5LnV0aWxzLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL3V0aWxzL3V0aWxzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvY29ubmVjdGlvbi9ib29raW5nLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9jb25uZWN0aW9uL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9jb25uZWN0aW9uL21lcmNoYW50LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9jb25uZWN0aW9uL25vdGlmaWNhdGlvbi50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvY29ubmVjdGlvbi91c2VyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9iYXNlLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9ib29raW5nL2Jvb2tpbmcubW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL2Jvb2tpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9tZXJjaGFudC9icmFuY2gubW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL21lcmNoYW50L2dyb3VwLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9tZXJjaGFudC9pbWFnZS5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvbWVyY2hhbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL21lcmNoYW50L21lcmNoYW50Lm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9tZXJjaGFudC9zZXJ2ZS1pbWFnZS5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvbWVyY2hhbnQvc2VydmljZS5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvbm90aWZpY2F0aW9uL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy91c2VyL2RldmljZS5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvdXNlci9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvdXNlci9tZXJjaGFudC11c2VyLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy91c2VyL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvYmFzZS5yZXBvc2l0b3J5LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvYm9va2luZy9ib29raW5nLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9ib29raW5nL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9tZXJjaGFudC9icmFuY2gucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL21lcmNoYW50L2dyb3VwLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9tZXJjaGFudC9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL21lcmNoYW50L21lcmNoYW50LnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9tZXJjaGFudC9zZXJ2aWNlLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9ub3RpZmljYXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy91c2VyL2RldmljZS5yZXBvc2l0b3J5LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvdXNlci9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL3VzZXIvbWVyY2hhbnQtdXNlci5yZXBvc2l0b3J5LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvdXNlci91c2VyLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvY2xpZW50cy50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zL2Jvb2tpbmcudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zL2JyYW5jaC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MvY29tbW9ucy50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MvZGV2aWNlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL3Byb3Rvcy9tZXJjaGFudC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MvbWVyY2hhbnRfdXNlci50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3Mvbm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL3Byb3Rvcy9zZXJ2aWNlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL3Byb3Rvcy91c2VyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL3NlcnZlcnMudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvaW50ZXJjZXB0b3JzL3NyYy9ncnBjLWxvZy5pbnRlcmNlcHRvci50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9pbnRlcmNlcHRvcnMvc3JjL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2ludGVyY2VwdG9ycy9zcmMvdHJhbnNmb3JtLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvYWRhcHRlci50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL21vZHVsZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL3NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29yZVwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2p3dFwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL21hcHBlZC10eXBlc1wiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9tb25nb29zZVwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL3Bhc3Nwb3J0XCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvcGxhdGZvcm0tZXhwcmVzc1wiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL3BsYXRmb3JtLXNvY2tldC5pb1wiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL3NlcXVlbGl6ZVwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL3dlYnNvY2tldHNcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiYXJnb24yXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcImF3cy1zZGtcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiYnVmZmVyLXRvLXN0cmVhbVwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJjbGFzcy10cmFuc2Zvcm1lclwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJjbGFzcy12YWxpZGF0b3JcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiY2xvdWRpbmFyeVwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwibmVzdGpzLWkxOG5cIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwicGFzc3BvcnQtand0XCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcInJ4anNcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwicnhqcy9vcGVyYXRvcnNcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwic2VxdWVsaXplXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcInNvY2tldC5pb1wiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJzdHJlYW1pZmllclwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcblxuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgQWNjZXB0TGFuZ3VhZ2VSZXNvbHZlciwgSTE4bk1vZHVsZSwgUXVlcnlSZXNvbHZlciB9IGZyb20gJ25lc3Rqcy1pMThuJztcblxuaW1wb3J0IHsgVXNlck1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy91c2VyL3VzZXIubW9kdWxlJztcblxuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvbW9kdWxlcy9hdXRoL2F1dGgubW9kdWxlJztcbmltcG9ydCB7IEJvb2tpbmdNb2R1bGUgfSBmcm9tICdAL2FwaS1nYXRld2F5L21vZHVsZXMvYm9va2luZy9ib29raW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBCcmFuY2hNb2R1bGUgfSBmcm9tICdAL2FwaS1nYXRld2F5L21vZHVsZXMvYnJhbmNoL2JyYW5jaC5tb2R1bGUnO1xuaW1wb3J0IHsgR3JvdXBNb2R1bGUgfSBmcm9tICdAL2FwaS1nYXRld2F5L21vZHVsZXMvZ3JvdXAvZ3JvdXAubW9kdWxlJztcbmltcG9ydCB7IE1lcmNoYW50TW9kdWxlIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9tb2R1bGVzL21lcmNoYW50L21lcmNoYW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9tb2R1bGVzL3NlcnZpY2Uvc2VydmljZS5tb2R1bGUnO1xuaW1wb3J0IHsgVXBsb2FkTW9kdWxlIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9tb2R1bGVzL3VwbG9hZC91cGxvYWQubW9kdWxlJztcbmltcG9ydCB7IEV2ZW50c01vZHVsZSB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvbW9kdWxlcy9ldmVudHMvZXZlbnRzLm1vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgfSksXG4gICAgSTE4bk1vZHVsZS5mb3JSb290KHtcbiAgICAgIGZhbGxiYWNrTGFuZ3VhZ2U6ICdlbicsXG4gICAgICBsb2FkZXJPcHRpb25zOiB7XG4gICAgICAgIHBhdGg6IGpvaW4oX19kaXJuYW1lLCAnaTE4bicpLFxuICAgICAgICB3YXRjaDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICByZXNvbHZlcnM6IFt7IHVzZTogUXVlcnlSZXNvbHZlciwgb3B0aW9uczogWydsYW5nJ10gfSwgQWNjZXB0TGFuZ3VhZ2VSZXNvbHZlcl0sXG4gICAgfSksXG4gICAgVXBsb2FkTW9kdWxlLFxuICAgIEF1dGhNb2R1bGUsXG4gICAgVXNlck1vZHVsZSxcbiAgICBNZXJjaGFudE1vZHVsZSxcbiAgICBCcmFuY2hNb2R1bGUsXG4gICAgR3JvdXBNb2R1bGUsXG4gICAgU2VydmljZU1vZHVsZSxcbiAgICBCb29raW5nTW9kdWxlLFxuICAgIEV2ZW50c01vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iLCJleHBvcnQgKiBmcm9tICcuL21lc3NhZ2UuY29tcG9uZW50JztcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJMThuU2VydmljZSwgVHJhbnNsYXRlT3B0aW9ucyB9IGZyb20gJ25lc3Rqcy1pMThuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGkxOG46IEkxOG5TZXJ2aWNlKSB7fVxuXG4gIGxhbmcoa2V5OiBzdHJpbmcsIG9wdGlvbnM6IFRyYW5zbGF0ZU9wdGlvbnMgPSB7fSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bi50cmFuc2xhdGUoa2V5LCBvcHRpb25zKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyJztcbiIsImV4cG9ydCAqIGZyb20gJy4vbWF0Y2guZGVjb3JhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci5kZWNvcmF0b3InO1xuIiwiaW1wb3J0IHsgVmFsaWRhdGlvbkFyZ3VtZW50cywgVmFsaWRhdGlvbk9wdGlvbnMsIHJlZ2lzdGVyRGVjb3JhdG9yIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIE1hdGNoPFQ+KHByb3BlcnR5OiBrZXlvZiBULCB2YWxpZGF0aW9uT3B0aW9ucz86IFZhbGlkYXRpb25PcHRpb25zKSB7XG4gIHJldHVybiAob2JqZWN0OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nKSA9PiB7XG4gICAgcmVnaXN0ZXJEZWNvcmF0b3Ioe1xuICAgICAgbmFtZTogJ01hdGNoJyxcbiAgICAgIHRhcmdldDogb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgY29uc3RyYWludHM6IFtwcm9wZXJ0eV0sXG4gICAgICBvcHRpb25zOiB2YWxpZGF0aW9uT3B0aW9ucyxcbiAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICB2YWxpZGF0ZSh2YWx1ZTogYW55LCBhcmdzOiBWYWxpZGF0aW9uQXJndW1lbnRzKSB7XG4gICAgICAgICAgY29uc3QgW3JlbGF0ZWRQcm9wZXJ0eU5hbWVdID0gYXJncy5jb25zdHJhaW50cztcbiAgICAgICAgICBjb25zdCByZWxhdGVkVmFsdWUgPSAoYXJncy5vYmplY3QgYXMgYW55KVtyZWxhdGVkUHJvcGVydHlOYW1lXTtcbiAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IHJlbGF0ZWRWYWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWZhdWx0TWVzc2FnZShhcmdzOiBWYWxpZGF0aW9uQXJndW1lbnRzKSB7XG4gICAgICAgICAgY29uc3QgW3JlbGF0ZWRQcm9wZXJ0eU5hbWVdID0gYXJncy5jb25zdHJhaW50cztcbiAgICAgICAgICByZXR1cm4gYCR7cHJvcGVydHlOYW1lfSBtdXN0IG1hdGNoICR7cmVsYXRlZFByb3BlcnR5TmFtZX0gZXhhY3RseWA7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlUGFyYW1EZWNvcmF0b3IsIEV4ZWN1dGlvbkNvbnRleHQgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBVc2VyID0gY3JlYXRlUGFyYW1EZWNvcmF0b3IoKGRhdGE6IHVua25vd24sIGN0eDogRXhlY3V0aW9uQ29udGV4dCkgPT4ge1xuICBjb25zdCByZXF1ZXN0ID0gY3R4LnN3aXRjaFRvSHR0cCgpLmdldFJlcXVlc3QoKTtcbiAgcmV0dXJuIHJlcXVlc3QudXNlcjtcbn0pO1xuIiwiaW1wb3J0IHsgQXJndW1lbnRzSG9zdCwgQ2F0Y2gsIEV4Y2VwdGlvbkZpbHRlciwgSHR0cEV4Y2VwdGlvbiwgSHR0cFN0YXR1cyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuQENhdGNoKEh0dHBFeGNlcHRpb24pXG5leHBvcnQgY2xhc3MgSHR0cEV4Y2VwdGlvbkZpbHRlciBpbXBsZW1lbnRzIEV4Y2VwdGlvbkZpbHRlcjxIdHRwRXhjZXB0aW9uPiB7XG4gIGNhdGNoKGV4Y2VwdGlvbjogSHR0cEV4Y2VwdGlvbiwgaG9zdDogQXJndW1lbnRzSG9zdCkge1xuICAgIGNvbnN0IGN0eCA9IGhvc3Quc3dpdGNoVG9IdHRwKCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBjdHguZ2V0UmVzcG9uc2UoKTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGV4Y2VwdGlvbiBpbnN0YW5jZW9mIEh0dHBFeGNlcHRpb24gPyBleGNlcHRpb24uZ2V0U3RhdHVzKCkgOiBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUjtcblxuICAgIGNvbnN0IGV4Y2VwdGlvblJlc3BvbnNlID0gZXhjZXB0aW9uLmdldFJlc3BvbnNlKCkgYXMgYW55O1xuXG4gICAgbGV0IGVycm9ycyA9IG51bGw7XG5cbiAgICBpZiAoZXhjZXB0aW9uUmVzcG9uc2UubWVzc2FnZSAmJiB0eXBlb2YgZXhjZXB0aW9uUmVzcG9uc2UubWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9ycyA9IGV4Y2VwdGlvblJlc3BvbnNlLm1lc3NhZ2U7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGV4Y2VwdGlvblJlc3BvbnNlLm1lc3NhZ2UgJiZcbiAgICAgIEFycmF5LmlzQXJyYXkoZXhjZXB0aW9uUmVzcG9uc2UubWVzc2FnZSkgJiZcbiAgICAgIGV4Y2VwdGlvblJlc3BvbnNlLm1lc3NhZ2UubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgZXJyb3JzID0gZXhjZXB0aW9uUmVzcG9uc2UubWVzc2FnZS5tYXAoKGVycm9yKSA9PiBlcnJvci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGVycm9yLnNsaWNlKDEpKTtcbiAgICB9XG5cbiAgICByZXNwb25zZS5zdGF0dXMoc3RhdHVzKS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgdHlwZW9mIGV4Y2VwdGlvbi5tZXNzYWdlID09PSAnc3RyaW5nJ1xuICAgICAgICAgID8gZXhjZXB0aW9uLm1lc3NhZ2UuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBleGNlcHRpb24ubWVzc2FnZS5zbGljZSgxKVxuICAgICAgICAgIDogZXhjZXB0aW9uLm1lc3NhZ2UsXG4gICAgICBlcnJvcnM6IGVycm9ycyA/PyBleGNlcHRpb25SZXNwb25zZSxcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9odHRwLWV4Y2VwdGlvbi5maWx0ZXInO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJ0BuZXN0anMvcGFzc3BvcnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnd0QXV0aEd1YXJkIGV4dGVuZHMgQXV0aEd1YXJkKCdqd3QnKSB7fVxuIiwiZXhwb3J0ICogZnJvbSAnLi9hdXRoLmd1YXJkJztcbiIsImV4cG9ydCAqIGZyb20gJy4vZGVjb3JhdG9ycyc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmF0ZWdpZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9ndWFyZHMnO1xuZXhwb3J0ICogZnJvbSAnLi9maWx0ZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cyc7XG4iLCJleHBvcnQgKiBmcm9tICcuL2p3dC5zdHJhdGVneSc7XG5leHBvcnQgKiBmcm9tICcuL2p3dC1yZWZyZXNoLnN0cmF0ZWd5JztcbiIsImltcG9ydCB7IFVzZXJQcm90byB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbk1vZHVsZUluaXQgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgQ2xpZW50R3JwYyB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBQYXNzcG9ydFN0cmF0ZWd5IH0gZnJvbSAnQG5lc3Rqcy9wYXNzcG9ydCc7XG5pbXBvcnQgeyBFeHRyYWN0Snd0LCBTdHJhdGVneSB9IGZyb20gJ3Bhc3Nwb3J0LWp3dCc7XG5pbXBvcnQgeyBsYXN0VmFsdWVGcm9tIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKd3RSZWZyZXNoU3RyYXRlZ3kgZXh0ZW5kcyBQYXNzcG9ydFN0cmF0ZWd5KFN0cmF0ZWd5LCAnand0LXJlZnJlc2gnKSBpbXBsZW1lbnRzIE9uTW9kdWxlSW5pdCB7XG4gIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJQcm90by5Vc2VyU2VydmljZUNsaWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFVzZXJQcm90by5EVUNQSF9VU0VSX1BBQ0tBR0VfTkFNRSkgcHJpdmF0ZSBjbGllbnQ6IENsaWVudEdycGMsXG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKHtcbiAgICAgIHNlY3JldE9yS2V5OiBjb25maWdTZXJ2aWNlLmdldDxzdHJpbmc+KCdKV1RfUkVGUkVTSF9UT0tFTl9TRUNSRVQnKSxcbiAgICAgIGp3dEZyb21SZXF1ZXN0OiBFeHRyYWN0Snd0LmZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbigpLFxuICAgIH0pO1xuICB9XG5cbiAgb25Nb2R1bGVJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2UgPSB0aGlzLmNsaWVudC5nZXRTZXJ2aWNlPFVzZXJQcm90by5Vc2VyU2VydmljZUNsaWVudD4oVXNlclByb3RvLlVTRVJfU0VSVklDRV9OQU1FKTtcbiAgfVxuXG4gIGFzeW5jIHZhbGlkYXRlKHBheWxvYWQ6IGFueSk6IFByb21pc2U8VXNlclByb3RvLlVzZXI+IHtcbiAgICBjb25zdCB7IHVzZXIgfSA9IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy51c2VyU2VydmljZS5maW5kQnlJZCh7IGlkOiBOdW1iZXIocGF5bG9hZC5zdWIpIH0pKTtcbiAgICByZXR1cm4gdXNlcjtcbiAgfVxufVxuIiwiZXhwb3J0IGVudW0gSnd0RW51bVNlcnZpY2Uge1xuICBKV1RfQUNDRVNTX1RPS0VOX1NFUlZJQ0UgPSAnSnd0QWNjZXNzVG9rZW5TZXJ2aWNlJyxcbiAgSldUX1JFRlJFU0hfVE9LRU5fU0VSVklDRSA9ICdKd3RSZWZyZXNoVG9rZW5TZXJ2aWNlJyxcbn1cbiIsImltcG9ydCB7IFVzZXJQcm90byB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbk1vZHVsZUluaXQgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgQ2xpZW50R3JwYyB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBQYXNzcG9ydFN0cmF0ZWd5IH0gZnJvbSAnQG5lc3Rqcy9wYXNzcG9ydCc7XG5pbXBvcnQgeyBFeHRyYWN0Snd0LCBTdHJhdGVneSB9IGZyb20gJ3Bhc3Nwb3J0LWp3dCc7XG5pbXBvcnQgeyBsYXN0VmFsdWVGcm9tIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKd3RTdHJhdGVneSBleHRlbmRzIFBhc3Nwb3J0U3RyYXRlZ3koU3RyYXRlZ3ksICdqd3QnKSBpbXBsZW1lbnRzIE9uTW9kdWxlSW5pdCB7XG4gIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJQcm90by5Vc2VyU2VydmljZUNsaWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFVzZXJQcm90by5EVUNQSF9VU0VSX1BBQ0tBR0VfTkFNRSkgcHJpdmF0ZSBjbGllbnQ6IENsaWVudEdycGMsXG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKHtcbiAgICAgIHNlY3JldE9yS2V5OiBjb25maWdTZXJ2aWNlLmdldDxzdHJpbmc+KCdKV1RfUFJJVkFURV9LRVknKSxcbiAgICAgIGp3dEZyb21SZXF1ZXN0OiBFeHRyYWN0Snd0LmZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbigpLFxuICAgIH0pO1xuICB9XG5cbiAgb25Nb2R1bGVJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2UgPSB0aGlzLmNsaWVudC5nZXRTZXJ2aWNlPFVzZXJQcm90by5Vc2VyU2VydmljZUNsaWVudD4oVXNlclByb3RvLlVTRVJfU0VSVklDRV9OQU1FKTtcbiAgfVxuXG4gIGFzeW5jIHZhbGlkYXRlKHBheWxvYWQ6IGFueSk6IFByb21pc2U8VXNlclByb3RvLlVzZXI+IHtcbiAgICBjb25zdCB7IHVzZXIgfSA9IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy51c2VyU2VydmljZS5maW5kQnlJZCh7IGlkOiBOdW1iZXIocGF5bG9hZC5zdWIpIH0pKTtcbiAgICByZXR1cm4gdXNlcjtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9sb2dpbi5kdG8nO1xuZXhwb3J0ICogZnJvbSAnLi9yZWdpc3Rlci5kdG8nO1xuIiwiaW1wb3J0IHsgSXNFbWFpbCwgSXNOb3RFbXB0eSB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmltcG9ydCB7IERldmljZUlucHV0RHRvIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zL3VzZXInO1xuXG5leHBvcnQgY2xhc3MgQmFzZUF1dGhJbnB1dCB7XG4gIEBJc05vdEVtcHR5KClcbiAgQElzRW1haWwoKVxuICBlbWFpbDogc3RyaW5nO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIElucHV0TG9naW5SZXF1ZXN0IGV4dGVuZHMgQmFzZUF1dGhJbnB1dCB7XG4gIGRldmljZT86IERldmljZUlucHV0RHRvO1xufVxuIiwiaW1wb3J0IHsgVHJhbnNmb3JtLCBUcmFuc2Zvcm1GblBhcmFtcywgVHlwZSB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7IElzRGVmaW5lZCwgSXNFbWFpbCwgSXNFbnVtLCBJc05vdEVtcHR5LCBJc09wdGlvbmFsLCBJc1N0cmluZywgTWF4TGVuZ3RoLCBNaW5MZW5ndGggfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5pbXBvcnQgeyBFQ3VzdG9tZXJMZXZlbCwgRVVzZXJHZW5kZXIsIEVVc2VyUm9sZSwgRVVzZXJTdGF0dXMgfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MvY29tbW9uJztcbmltcG9ydCB7IENyZWF0ZU1lcmNoYW50SW5wdXREdG8gfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MvbWVyY2hhbnQnO1xuaW1wb3J0IHsgRGV2aWNlSW5wdXREdG8gfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MvdXNlcic7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVVc2VySW5wdXREdG8ge1xuICBAVHJhbnNmb3JtKCh7IHZhbHVlIH06IFRyYW5zZm9ybUZuUGFyYW1zKSA9PiB2YWx1ZT8udHJpbSgpLnRvTG93ZXJDYXNlKCkpXG4gIEBJc0VtYWlsKClcbiAgZW1haWw6IHN0cmluZztcblxuICBATWF4TGVuZ3RoKDMwKVxuICBATWluTGVuZ3RoKDUpXG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgcGFzc3dvcmQ6IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XG5cbiAgQElzRW51bShFVXNlclJvbGUpXG4gIEBJc09wdGlvbmFsKClcbiAgcm9sZTogRVVzZXJSb2xlO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRW51bShFVXNlclN0YXR1cylcbiAgc3RhdHVzOiBFVXNlclN0YXR1cztcblxuICBASXNFbnVtKEVVc2VyR2VuZGVyKVxuICBASXNPcHRpb25hbCgpXG4gIGdlbmRlcjogRVVzZXJHZW5kZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBsZXZlbD86IEVDdXN0b21lckxldmVsO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgY29udGFjdDogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgZG9iRGF5OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBkb2JNb250aDogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgZG9iWWVhcjogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgb2NjdXBhdGlvbj86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGF2YXRhcj86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGFkZHJlc3M/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBjaXR5Q29kZT86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIGRpc3RyaWN0Q29kZT86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIHdhcmRDb2RlPzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgcmVmZXJyZXI/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICByZWZlcnJlckNvZGU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBjdXN0b21lckNvZGU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBmYWNlYm9vaz86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIHphbG9QaG9uZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGhlaWdodD86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIHdlaWdodD86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIG1lbWJlckNhcmRObz86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGNvbXBhbnk/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICB0YXhObz86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIG5vdGU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICByZWxhdGVkVXNlcj86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIHJlbGF0ZWRVc2VyUm9sZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIHJlbGF0ZWRVc2VyUGhvbmU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBicmFuY2hJZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyUGF5bG9hZCB7XG4gIEBJc05vdEVtcHR5KClcbiAgQElzRGVmaW5lZCgpXG4gIEBUeXBlKCgpID0+IENyZWF0ZVVzZXJJbnB1dER0bylcbiAgdXNlcjogQ3JlYXRlVXNlcklucHV0RHRvO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRGVmaW5lZCgpXG4gIEBUeXBlKCgpID0+IENyZWF0ZU1lcmNoYW50SW5wdXREdG8pXG4gIG1lcmNoYW50OiBDcmVhdGVNZXJjaGFudElucHV0RHRvO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRGVmaW5lZCgpXG4gIEBUeXBlKCgpID0+IERldmljZUlucHV0RHRvKVxuICBkZXZpY2U6IERldmljZUlucHV0RHRvO1xufVxuIiwiaW1wb3J0IHsgTElNSVQsIFBBR0UgfSBmcm9tICdAbGlicy9jb3JlJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7IElzTnVtYmVyLCBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBCYXNlUXVlcnlEdG8ge1xuICBASXNPcHRpb25hbCgpXG4gIEBUcmFuc2Zvcm0oKHsgdmFsdWUgfSkgPT4gcGFyc2VJbnQodmFsdWUpKVxuICBASXNOdW1iZXIoKVxuICBwYWdlPzogbnVtYmVyID0gUEFHRTtcblxuICBASXNPcHRpb25hbCgpXG4gIEBUcmFuc2Zvcm0oKHsgdmFsdWUgfSkgPT4gcGFyc2VJbnQodmFsdWUpKVxuICBASXNOdW1iZXIoKVxuICBsaW1pdD86IG51bWJlciA9IExJTUlUO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgcT86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIG9yZGVyQnk/OiBzdHJpbmcgPSAnY3JlYXRlZEF0JztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIG9yZGVyRGlyZWN0aW9uPzogc3RyaW5nID0gJ0RFU0MnO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUR0bzxUPiB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgUGFydGlhbDxUPikge1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlcyhwYXJhbXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldEF0dHJpYnV0ZXMocGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IFBhcnRpYWw8VD4pOiB2b2lkIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKTtcblxuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGtleSwgcGFyYW1zW2tleV0pO1xuICAgIH1cbiAgfVxuXG4gIGhhc1Byb3BlcnR5KG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlID09PSBSZWZsZWN0LmdldE1ldGFkYXRhKCdmaWVsZHMnLCB0aGlzLCBuYW1lKTtcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShrZXk6IHN0cmluZywgdmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5oYXNQcm9wZXJ0eShrZXkpKSB7XG4gICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYmFzZS5kdG8nO1xuIiwiaW1wb3J0IHsgSXNFbnVtLCBJc0ludCwgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCwgSXNTdHJpbmcgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuaW1wb3J0IHsgUGFydGlhbFR5cGUgfSBmcm9tICdAbmVzdGpzL21hcHBlZC10eXBlcyc7XG5cbmltcG9ydCB7IEVCb29raW5nU3RhdHVzIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVCb29raW5nSW5wdXQge1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc0ludCgpXG4gIHNlcnZpY2VJZDogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRW51bShFQm9va2luZ1N0YXR1cylcbiAgc3RhdHVzPzogRUJvb2tpbmdTdGF0dXMgPSBFQm9va2luZ1N0YXR1cy5CT09LSU5HX1BFTkRJTkc7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNTdHJpbmcoKVxuICBib29raW5nRGF0ZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0ludCgpXG4gIHVzZXJJZD86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIHNlcnZpY2VOYW1lPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgdXNlckVtYWlsPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgdXNlclBob25lTnVtYmVyPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgbm90ZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0ludCgpXG4gIG1lcmNoYW50SWQ/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNJbnQoKVxuICBicmFuY2hJZD86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0ludCgpXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUGFydGlhbFVwZGF0ZUJvb2tpbmcgZXh0ZW5kcyBQYXJ0aWFsVHlwZTxDcmVhdGVCb29raW5nSW5wdXQ+KENyZWF0ZUJvb2tpbmdJbnB1dCkge31cbiIsImV4cG9ydCAqIGZyb20gJy4vYm9va2luZy5kdG8nO1xuIiwiZXhwb3J0IGVudW0gRVNvcnREaXJlY3Rpb24ge1xuICBBU0MgPSAwLFxuICBERVNDID0gMSxcbn1cblxuZXhwb3J0IGVudW0gRVNlcnZpY2VTaG93VHlwZSB7XG4gIEJPVEggPSAwLFxuICBDQVNISUVSID0gMSxcbiAgQk9PS0lORyA9IDIsXG4gIE5PTkUgPSAzLFxufVxuXG5leHBvcnQgZW51bSBFU2VydmljZVR5cGUge1xuICBTRVJWSUNFID0gMCxcbiAgUFJPRFVDVCA9IDEsXG59XG5cbmV4cG9ydCBlbnVtIEVTZXJ2ZUltYWdlVHlwZSB7XG4gIE1FUkNIQU5UID0gMCxcbiAgQlJBTkNIID0gMSxcbiAgR1JPVVAgPSAyLFxuICBTRVJWSUNFID0gMyxcbn1cblxuZXhwb3J0IGVudW0gRUltYWdlVHlwZSB7XG4gIFBIT1RPID0gMCxcbiAgVklERU8gPSAxLFxufVxuXG5leHBvcnQgZW51bSBFRGV2aWNlT3Mge1xuICBBTkRST0lEID0gMCxcbiAgSU9TID0gMSxcbn1cblxuZXhwb3J0IGVudW0gRVVzZXJHZW5kZXIge1xuICBNQUxFID0gMCxcbiAgRkVNQUxFID0gMSxcbiAgT1RIRVIgPSAyLFxufVxuXG5leHBvcnQgZW51bSBFVXNlclJvbGUge1xuICBVU0VSID0gMCxcbiAgQURNSU4gPSAxLFxuICBTVVBFUl9BRE1JTiA9IDIsXG4gIE1BU1RFUl9XT1JLRVIgPSAzLFxuICBBU1NJU1RBTlRfV09SS0VSID0gNCxcbiAgTUFOQUdFUiA9IDUsXG4gIFJFQ0VQVElPTklTVCA9IDYsXG59XG5cbmV4cG9ydCBlbnVtIEVDdXN0b21lckxldmVsIHtcbiAgTk9STUFMID0gMCxcbiAgU0lMVkVSID0gMSxcbiAgR09MRCA9IDIsXG4gIFBMQVRJTlVNID0gMyxcbn1cblxuZXhwb3J0IGVudW0gRVVzZXJTdGF0dXMge1xuICBQRU5ESU5HID0gMCxcbiAgQUNUSVZFID0gMSxcbiAgQkFOTkVEID0gMixcbn1cblxuZXhwb3J0IGVudW0gRUJvb2tpbmdTdGF0dXMge1xuICBCT09LSU5HX1BFTkRJTkcgPSAwLFxuICBCT09LSU5HX0FQUFJPVkUgPSAxLFxuICBCT09LSU5HX0NBTkNFTExFRCA9IDIsXG4gIEJPT0tJTkdfUkVKRUNUID0gMyxcbn1cblxuZXhwb3J0IGVudW0gRUV2ZW50TWVzc2FnZSB7XG4gIENSRUFURV9NRVNTQUdFID0gJ2NyZWF0ZV9tZXNzYWdlJyxcbiAgUkVDRU5UX01FU1NBR0VTID0gJ3JlY2VudF9tZXNzYWdlcycsXG4gIENPTlZFUlNBVElPTl9NRVNTQUdFUyA9ICdjb252ZXJzYXRpb25fbWVzc2FnZXMnLFxuICBKT0lOX1JPT00gPSAnam9pbl9yb29tJyxcbiAgTkVXX01FU1NBR0UgPSAnbmV3X21lc3NhZ2UnLFxufVxuXG5leHBvcnQgZW51bSBFTm90aWZpY2F0aW9uVHlwZSB7XG4gIEJPT0tJTkcgPSAwLFxuICBDSEFUID0gMSxcbiAgQ09NTUVOVCA9IDIsXG4gIFJFUExZX0NPTU1FTlQgPSAzLFxufVxuXG5leHBvcnQgZW51bSBFTGFuZ1R5cGUge1xuICBFTiA9ICdlbicsXG4gIFZJID0gJ3ZpJyxcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vY29tbW9uLmR0byc7XG4iLCJpbXBvcnQgeyBQYXJ0aWFsVHlwZSB9IGZyb20gJ0BuZXN0anMvbWFwcGVkLXR5cGVzJztcbmltcG9ydCB7IFRyYW5zZm9ybSwgVHJhbnNmb3JtRm5QYXJhbXMgfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBJc0VtYWlsLCBJc0VudW0sIElzSW50LCBJc05vdEVtcHR5LCBJc09wdGlvbmFsLCBJc1N0cmluZywgTWF4TGVuZ3RoLCBNaW5MZW5ndGggfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5pbXBvcnQgeyBFQ3VzdG9tZXJMZXZlbCwgRVVzZXJHZW5kZXIsIEVVc2VyUm9sZSwgRVVzZXJTdGF0dXMgfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIEFkZEN1c3RvbWVyRHRvIHtcbiAgQElzSW50KClcbiAgQElzTm90RW1wdHkoKVxuICBtZXJjaGFudElkPzogbnVtYmVyO1xuXG4gIEBUcmFuc2Zvcm0oKHsgdmFsdWUgfTogVHJhbnNmb3JtRm5QYXJhbXMpID0+IHZhbHVlPy50cmltKCkudG9Mb3dlckNhc2UoKSlcbiAgQElzRW1haWwoKVxuICBASXNPcHRpb25hbCgpXG4gIGVtYWlsOiBzdHJpbmc7XG5cbiAgQE1heExlbmd0aCgzMClcbiAgQE1pbkxlbmd0aCg1KVxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzTm90RW1wdHkoKVxuICBmdWxsTmFtZTogc3RyaW5nO1xuXG4gIEBJc0VudW0oRVVzZXJSb2xlKVxuICBASXNOb3RFbXB0eSgpXG4gIHJvbGU6IEVVc2VyUm9sZTtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0VudW0oRVVzZXJTdGF0dXMpXG4gIHN0YXR1czogRVVzZXJTdGF0dXM7XG5cbiAgQElzRW51bShFVXNlckdlbmRlcilcbiAgQElzT3B0aW9uYWwoKVxuICBnZW5kZXI6IEVVc2VyR2VuZGVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgbGV2ZWw/OiBFQ3VzdG9tZXJMZXZlbDtcblxuICBASXNPcHRpb25hbCgpXG4gIGNvbnRhY3Q6IHN0cmluZztcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIHBob25lTnVtYmVyOiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBkb2JEYXk6IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIGRvYk1vbnRoOiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBkb2JZZWFyOiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBvY2N1cGF0aW9uPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgYXZhdGFyPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgYWRkcmVzcz86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGNpdHlDb2RlPzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgd2FyZENvZGU/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICByZWZlcnJlcj86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIHJlZmVycmVyQ29kZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGN1c3RvbWVyQ29kZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGZhY2Vib29rPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgemFsb1Bob25lPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgaGVpZ2h0PzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgd2VpZ2h0PzogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgbWVtYmVyQ2FyZE5vPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgY29tcGFueT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIHRheE5vPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgbm90ZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIHJlbGF0ZWRVc2VyPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgcmVsYXRlZFVzZXJSb2xlPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgcmVsYXRlZFVzZXJQaG9uZT86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGJyYW5jaElkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlUGFydGlhbEN1c3RvbWVyIGV4dGVuZHMgUGFydGlhbFR5cGU8QWRkQ3VzdG9tZXJEdG8+KEFkZEN1c3RvbWVyRHRvKSB7fVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jdXN0b21lci5kdG8nO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0ICogZnJvbSAnLi9hdXRoJztcblxuZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5cbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0ICogZnJvbSAnLi9jdXN0b21lcic7XG5cbmV4cG9ydCAqIGZyb20gJy4vYm9va2luZyc7XG4iLCJpbXBvcnQgeyBQYXJ0aWFsVHlwZSB9IGZyb20gJ0BuZXN0anMvbWFwcGVkLXR5cGVzJztcbmltcG9ydCB7IElzTm90RW1wdHksIElzTnVtYmVyLCBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVCcmFuY2hJbnB1dCB7XG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgbmFtZT86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNOb3RFbXB0eSgpXG4gIHBob25lPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgYWRkcmVzcz86IHN0cmluZztcblxuICBASXNOdW1iZXIoKVxuICBASXNOb3RFbXB0eSgpXG4gIG1lcmNoYW50SWQ6IG51bWJlcjtcblxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIGNpdHlDb2RlPzogbnVtYmVyO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgd2FyZENvZGU/OiBudW1iZXI7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBjaXR5Pzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgZGlzdHJpY3Q/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICB3YXJkPzogc3RyaW5nO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgbGF0aXR1ZGU/OiBudW1iZXI7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICBsb25naXR1ZGU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJ0aWFsVXBkYXRlQnJhbmNoIGV4dGVuZHMgUGFydGlhbFR5cGU8Q3JlYXRlQnJhbmNoSW5wdXQ+KENyZWF0ZUJyYW5jaElucHV0KSB7fVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jcmVhdGUtYnJhbmNoLmR0byc7XG4iLCJpbXBvcnQgeyBJc05vdEVtcHR5LCBJc09wdGlvbmFsIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZU1lcmNoYW50SW5wdXREdG8ge1xuICBASXNOb3RFbXB0eSgpXG4gIG5hbWU6IHN0cmluZztcblxuICBASXNOb3RFbXB0eSgpXG4gIGFkZHJlc3M6IHN0cmluZztcblxuICBASXNOb3RFbXB0eSgpXG4gIHBob25lOiBzdHJpbmc7XG5cbiAgQElzTm90RW1wdHkoKVxuICBzdWJkb21haW46IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGNpdHlDb2RlOiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBkaXN0cmljdENvZGU6IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIHdhcmRDb2RlOiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBjaXR5OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBkaXN0cmljdDogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgd2FyZDogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgUGFydGlhbFR5cGUgfSBmcm9tICdAbmVzdGpzL21hcHBlZC10eXBlcyc7XG5pbXBvcnQgeyBJc0ludCwgSXNOb3RFbXB0eSwgSXNTdHJpbmcgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlR3JvdXBJbnB1dCB7XG4gIEBJc05vdEVtcHR5KClcbiAgQElzSW50KClcbiAgbWVyY2hhbnRJZD86IG51bWJlcjtcblxuICBza3U/OiBzdHJpbmc7XG5cbiAgY29kZT86IHN0cmluZztcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgaW1hZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJ0aWFsVXBkYXRlR3JvdXAgZXh0ZW5kcyBQYXJ0aWFsVHlwZTxDcmVhdGVHcm91cElucHV0PihDcmVhdGVHcm91cElucHV0KSB7fVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jcmVhdGUtZ3JvdXAuZHRvJztcbiIsImV4cG9ydCAqIGZyb20gJy4vY3JlYXRlLmR0byc7XG5cbmV4cG9ydCAqIGZyb20gJy4vYnJhbmNoJztcblxuZXhwb3J0ICogZnJvbSAnLi9ncm91cCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZSc7XG4iLCJpbXBvcnQgeyBQYXJ0aWFsVHlwZSB9IGZyb20gJ0BuZXN0anMvbWFwcGVkLXR5cGVzJztcbmltcG9ydCB7IElzSW50LCBJc05vdEVtcHR5LCBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmltcG9ydCB7IEVTZXJ2aWNlU2hvd1R5cGUsIEVTZXJ2aWNlVHlwZSB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvZHRvcy9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlU2VydmljZUlucHV0IHtcbiAgQElzTm90RW1wdHkoKVxuICBASXNJbnQoKVxuICBncm91cElkPzogbnVtYmVyO1xuXG4gIHNrdT86IHN0cmluZztcblxuICBjb2RlPzogc3RyaW5nO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQElzU3RyaW5nKClcbiAgbmFtZT86IHN0cmluZztcblxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICBpbWFnZT86IHN0cmluZztcblxuICBASXNOb3RFbXB0eSgpXG4gIHByaWNlPzogbnVtYmVyO1xuXG4gIGluaXRpYWxQcmljZT86IG51bWJlcjtcblxuICBkdXJhdGlvbkhvdXI/OiBudW1iZXI7XG5cbiAgZHVyYXRpb25NaW51dGU/OiBudW1iZXI7XG5cbiAgdHlwZT86IEVTZXJ2aWNlVHlwZTtcblxuICBzaG93VHlwZT86IEVTZXJ2aWNlU2hvd1R5cGU7XG5cbiAgY2FuUHJpbnRhYmxlSW52b2ljZT86IGJvb2xlYW47XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNJbnQoKVxuICBtZXJjaGFudElkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUGFydGlhbFVwZGF0ZVNlcnZpY2UgZXh0ZW5kcyBQYXJ0aWFsVHlwZShDcmVhdGVTZXJ2aWNlSW5wdXQpIHt9XG4iLCJleHBvcnQgKiBmcm9tICcuL2NyZWF0ZS1zZXJ2aWNlLmR0byc7XG4iLCJpbXBvcnQgeyBJc0VudW0sIElzTm90RW1wdHksIElzU3RyaW5nIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuaW1wb3J0IHsgRURldmljZU9zIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBEZXZpY2VJbnB1dER0byB7XG4gIEBJc0VudW0oRURldmljZU9zKVxuICBASXNOb3RFbXB0eSgpXG4gIG9zOiBFRGV2aWNlT3M7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzTm90RW1wdHkoKVxuICBkZXZpY2VJZDogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgdG9rZW46IHN0cmluZztcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vZGV2aWNlLmR0byc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXIuZHRvJztcbmV4cG9ydCAqIGZyb20gJy4vdG9rZW4uZHRvJztcbiIsImltcG9ydCB7IFByb3BlcnR5IH0gZnJvbSAnQGxpYnMvY29yZSc7XG5cbmltcG9ydCB7IEJhc2VEdG8gfSBmcm9tICcuLi9iYXNlL2Jhc2UuZHRvJztcblxuZXhwb3J0IGNsYXNzIFRva2VuRHRvIGV4dGVuZHMgQmFzZUR0bzxvYmplY3Q+IHtcbiAgQFByb3BlcnR5KClcbiAgbGFuZzogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgVHJhbnNmb3JtLCBUcmFuc2Zvcm1GblBhcmFtcyB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7XG4gIElzQm9vbGVhbixcbiAgSXNFbWFpbCxcbiAgSXNFbnVtLFxuICBJc0ludCxcbiAgSXNOb3RFbXB0eSxcbiAgSXNPcHRpb25hbCxcbiAgSXNTdHJpbmcsXG4gIE1heExlbmd0aCxcbiAgTWluTGVuZ3RoLFxufSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5pbXBvcnQgeyBCYXNlUXVlcnlEdG8gfSBmcm9tICcuLi9iYXNlL2Jhc2UuZHRvJztcblxuaW1wb3J0IHsgTWF0Y2ggfSBmcm9tICdAL2FwaS1nYXRld2F5L2NvcmUnO1xuaW1wb3J0IHsgRUN1c3RvbWVyTGV2ZWwsIEVVc2VyR2VuZGVyLCBFVXNlclJvbGUsIEVVc2VyU3RhdHVzIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZElucHV0IHtcbiAgQElzU3RyaW5nKClcbiAgQElzTm90RW1wdHkoKVxuICBjdXJyZW50UGFzc3dvcmQ6IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNOb3RFbXB0eSgpXG4gIG5ld1Bhc3N3b3JkOiBzdHJpbmc7XG5cbiAgQE1hdGNoKCduZXdQYXNzd29yZCcpXG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRPcGVyYXRvckR0byB7XG4gIEBUcmFuc2Zvcm0oKHsgdmFsdWUgfTogVHJhbnNmb3JtRm5QYXJhbXMpID0+IHZhbHVlPy50cmltKCkudG9Mb3dlckNhc2UoKSlcbiAgQElzRW1haWwoKVxuICBASXNOb3RFbXB0eSgpXG4gIGVtYWlsOiBzdHJpbmc7XG5cbiAgQE1heExlbmd0aCgzMClcbiAgQE1pbkxlbmd0aCg1KVxuICBASXNTdHJpbmcoKVxuICBASXNOb3RFbXB0eSgpXG4gIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzTm90RW1wdHkoKVxuICBmdWxsTmFtZTogc3RyaW5nO1xuXG4gIEBJc0VudW0oRVVzZXJSb2xlKVxuICBASXNOb3RFbXB0eSgpXG4gIHJvbGU6IEVVc2VyUm9sZTtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc0ludCgpXG4gIG1lcmNoYW50SWQ/OiBudW1iZXI7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNJbnQoKVxuICBicmFuY2hJZD86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0VudW0oRVVzZXJTdGF0dXMpXG4gIHN0YXR1czogRVVzZXJTdGF0dXM7XG5cbiAgQElzRW51bShFVXNlckdlbmRlcilcbiAgQElzT3B0aW9uYWwoKVxuICBnZW5kZXI6IEVVc2VyR2VuZGVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgbGV2ZWw/OiBFQ3VzdG9tZXJMZXZlbDtcblxuICBASXNPcHRpb25hbCgpXG4gIGNvbnRhY3Q6IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIGRvYkRheTogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgZG9iTW9udGg6IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIGRvYlllYXI6IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIG9jY3VwYXRpb24/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBhdmF0YXI/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBhZGRyZXNzPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgY2l0eUNvZGU/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBkaXN0cmljdENvZGU/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICB3YXJkQ29kZT86IG51bWJlcjtcblxuICBASXNPcHRpb25hbCgpXG4gIHJlZmVycmVyPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgcmVmZXJyZXJDb2RlPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgY3VzdG9tZXJDb2RlPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgZmFjZWJvb2s/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICB6YWxvUGhvbmU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBoZWlnaHQ/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICB3ZWlnaHQ/OiBudW1iZXI7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBtZW1iZXJDYXJkTm8/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBjb21wYW55Pzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgdGF4Tm8/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBub3RlPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgcmVsYXRlZFVzZXI/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICByZWxhdGVkVXNlclJvbGU/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICByZWxhdGVkVXNlclBob25lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUGFnaW5hdGVVc2VyRHRvIGV4dGVuZHMgQmFzZVF1ZXJ5RHRvIHtcbiAgQElzQm9vbGVhbigpXG4gIEBJc09wdGlvbmFsKClcbiAgZXhjbHVkZU1lOiBib29sZWFuO1xufVxuIiwiaW1wb3J0IHsgQVVUSF9NRVNTQUdFLCBFcnJvckhlbHBlciwgUGFzc3dvcmRVdGlscywgVVNFUl9NRVNTQUdFIH0gZnJvbSAnQGxpYnMvY29yZSc7XG5pbXBvcnQgeyBFVXNlclJvbGUsIEVVc2VyU3RhdHVzIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3MvY29tbW9ucyc7XG5pbXBvcnQgeyBCb2R5LCBDb250cm9sbGVyLCBQb3N0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IElucHV0TG9naW5SZXF1ZXN0LCBSZWdpc3RlclBheWxvYWQgfSBmcm9tICcuLi8uLi9kdG9zJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbmltcG9ydCB7IE1lcmNoYW50Q29tbW9uU2VydmljZSB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvbW9kdWxlcy9tZXJjaGFudC1jb21tb24vbWVyY2hhbnQtY29tbW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckNvbW1vblNlcnZpY2UgfSBmcm9tICdAL2FwaS1nYXRld2F5L21vZHVsZXMvdXNlci1jb21tb24vdXNlci1jb21tb24uc2VydmljZSc7XG5pbXBvcnQgeyBCcmFuY2gsIE1lcmNoYW50LCBVc2VyIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS90eXBlcyc7XG5cbkBDb250cm9sbGVyKCdhdXRoJylcbmV4cG9ydCBjbGFzcyBBdXRoQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXNlcnNTZXJ2aWNlOiBVc2VyQ29tbW9uU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1lcmNoYW50U2VydmljZTogTWVyY2hhbnRDb21tb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuXG4gICAgcHJpdmF0ZSByZWFkb25seSBwYXNzd29yZFV0aWxzOiBQYXNzd29yZFV0aWxzLFxuICApIHt9XG5cbiAgQFBvc3QoJ2xvZ2luJylcbiAgYXN5bmMgbG9naW4oQEJvZHkoKSBkYXRhOiBJbnB1dExvZ2luUmVxdWVzdCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyB1c2VyIH0gPSBhd2FpdCB0aGlzLnVzZXJzU2VydmljZS5maW5kT25lKHtcbiAgICAgIHdoZXJlOiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsOiBkYXRhLmVtYWlsIH0pLFxuICAgIH0pO1xuXG4gICAgaWYgKGlzRW1wdHkodXNlcikpIHtcbiAgICAgIEVycm9ySGVscGVyLkh0dHBOb3RGb3VuZEV4Y2VwdGlvbihVU0VSX01FU1NBR0UuUkVBRC5OT1RfRk9VTkQpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzU2FtZTogYm9vbGVhbiA9IGF3YWl0IHRoaXMucGFzc3dvcmRVdGlscy5jb21wYXJlKGRhdGEucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuXG4gICAgaWYgKCFpc1NhbWUpIHtcbiAgICAgIEVycm9ySGVscGVyLkh0dHBCYWRSZXF1ZXN0RXhjZXB0aW9uKEFVVEhfTUVTU0FHRS5MT0dJTi5JTlZBTElEKTtcbiAgICB9XG5cbiAgICBpZiAodXNlci5yb2xlID09PSBFVXNlclJvbGUuVVNFUikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVzcG9uc2VBdXRoRGF0YSh1c2VyKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IG1lcmNoYW50IH0gPSBhd2FpdCB0aGlzLm1lcmNoYW50U2VydmljZS5maW5kT25lKHtcbiAgICAgIHdoZXJlOiBKU09OLnN0cmluZ2lmeSh7IHVzZXJJZDogdXNlci5pZCB9KSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgYnJhbmNoZXMgfSA9IGF3YWl0IHRoaXMubWVyY2hhbnRTZXJ2aWNlLmJyYW5jaGVzKHtcbiAgICAgIHdoZXJlOiBKU09OLnN0cmluZ2lmeSh7IG1lcmNoYW50SWQ6IG1lcmNoYW50LmlkIH0pLFxuICAgIH0pO1xuXG4gICAgaWYgKGRhdGE/LmRldmljZSkge1xuICAgICAgYXdhaXQgdGhpcy51c2Vyc1NlcnZpY2UudXBzZXJ0RGV2aWNlKHsgLi4uZGF0YT8uZGV2aWNlLCB1c2VySWQ6IHVzZXIuaWQgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmUgPSBhd2FpdCB0aGlzLmhhbmRsZVJlc3BvbnNlQXV0aERhdGEodXNlcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlLFxuICAgICAgbWVyY2hhbnQsXG4gICAgICBicmFuY2hlcyxcbiAgICB9O1xuICB9XG5cbiAgQFBvc3QoJ3JlZ2lzdGVyJylcbiAgYXN5bmMgcmVnaXN0ZXIoQEJvZHkoKSB7IHVzZXI6IHVzZXJJbnB1dCwgbWVyY2hhbnQ6IG1lcmNoYW50SW5wdXQsIGRldmljZTogZGV2aWNlSW5wdXQgfTogUmVnaXN0ZXJQYXlsb2FkKSB7XG4gICAgY29uc3QgeyBjb3VudCB9ID0gYXdhaXQgdGhpcy51c2Vyc1NlcnZpY2UuY291bnRVc2VyKHtcbiAgICAgIHdoZXJlOiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsOiB1c2VySW5wdXQuZW1haWwgfSksXG4gICAgfSk7XG5cbiAgICBpZiAoY291bnQgPj0gMSkgdGhyb3cgbmV3IEVycm9yKCdUaGUgZW1haWwgaXMgdGFrZW4nKTtcblxuICAgIGlmICh1c2VySW5wdXQucm9sZSA9PT0gRVVzZXJSb2xlLlVTRVIpIHtcbiAgICAgIGNvbnN0IHsgdXNlciB9ID0gYXdhaXQgdGhpcy51c2Vyc1NlcnZpY2UuY3JlYXRlKHsgdXNlcjogdXNlcklucHV0LCBkZXZpY2U6IGRldmljZUlucHV0IH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXNwb25zZUF1dGhEYXRhKHVzZXIpO1xuICAgIH1cbiAgICBjb25zdCB7IHVzZXIgfSA9IGF3YWl0IHRoaXMudXNlcnNTZXJ2aWNlLmNyZWF0ZSh7IHVzZXI6IHVzZXJJbnB1dCwgZGV2aWNlOiBkZXZpY2VJbnB1dCB9KTtcblxuICAgIGNvbnN0IHsgbWVyY2hhbnQsIGJyYW5jaCB9ID0gYXdhaXQgdGhpcy5tZXJjaGFudFNlcnZpY2UuY3JlYXRlKHtcbiAgICAgIC4uLm1lcmNoYW50SW5wdXQsXG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0aGlzLnVzZXJzU2VydmljZS5jcmVhdGVNZXJjaGFudFVzZXIoe1xuICAgICAgcm9sZTogdXNlcklucHV0LnJvbGUgPz8gRVVzZXJSb2xlLkFETUlOLFxuICAgICAgYnJhbmNoSWQ6IGJyYW5jaC5pZCxcbiAgICAgIG1lcmNoYW50SWQ6IG1lcmNoYW50LmlkLFxuICAgICAgc3RhdHVzOiB1c2VySW5wdXQuc3RhdHVzID8/IEVVc2VyU3RhdHVzLkFDVElWRSxcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmhhbmRsZVJlc3BvbnNlQXV0aERhdGEodXNlciwgbWVyY2hhbnQsIGJyYW5jaCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVJlc3BvbnNlQXV0aERhdGEodXNlcjogVXNlciwgbWVyY2hhbnQ/OiBNZXJjaGFudCwgYnJhbmNoPzogQnJhbmNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXIsXG4gICAgICBtZXJjaGFudCxcbiAgICAgIGJyYW5jaGVzOiBicmFuY2ggPyBbYnJhbmNoXSA6IG51bGwsXG4gICAgICBhY2Nlc3NUb2tlbjogYXdhaXQgdGhpcy5hdXRoU2VydmljZS5nZW5lcmF0ZUFjY2Vzc1Rva2VuKHVzZXIpLFxuICAgICAgcmVmcmVzaFRva2VuOiBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmdlbmVyYXRlUmVmcmVzaFRva2VuKHVzZXIpLFxuICAgIH07XG4gIH1cblxuICBAUG9zdCgnbG9nb3V0JylcbiAgYXN5bmMgbG9nb3V0KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBVdGlsc01vZHVsZSB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuaW1wb3J0IHsgVXNlckNsaWVudCB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IEp3dFNlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2p3dCc7XG5pbXBvcnQgeyBDbGllbnRzTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IFBhc3Nwb3J0TW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9wYXNzcG9ydCc7XG5cbmltcG9ydCB7IEp3dFJlZnJlc2hTdHJhdGVneSwgSnd0U3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9jb3JlL3N0cmF0ZWdpZXMnO1xuXG5pbXBvcnQgeyBBdXRoQ29udHJvbGxlciB9IGZyb20gJy4vYXV0aC5jb250cm9sbGVyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBKd3RFbnVtU2VydmljZSB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvY29yZS9zdHJhdGVnaWVzL2p3dC5lbnVtJztcbmltcG9ydCB7IE1lcmNoYW50Q29tbW9uTW9kdWxlIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9tb2R1bGVzL21lcmNoYW50LWNvbW1vbi9tZXJjaGFudC1jb21tb24ubW9kdWxlJztcbmltcG9ydCB7IFVzZXJDb21tb25Nb2R1bGUgfSBmcm9tICdAL2FwaS1nYXRld2F5L21vZHVsZXMvdXNlci1jb21tb24vdXNlci1jb21tb24ubW9kdWxlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDbGllbnRzTW9kdWxlLnJlZ2lzdGVyKFtVc2VyQ2xpZW50XSksXG4gICAgUGFzc3BvcnRNb2R1bGUucmVnaXN0ZXIoeyBkZWZhdWx0U3RyYXRlZ3k6ICdqd3QnIH0pLFxuICAgIFVzZXJDb21tb25Nb2R1bGUsXG4gICAgVXRpbHNNb2R1bGUsXG4gICAgTWVyY2hhbnRDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGNvbnRyb2xsZXJzOiBbQXV0aENvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBdXRoU2VydmljZSxcbiAgICBKd3RTdHJhdGVneSxcbiAgICBKd3RSZWZyZXNoU3RyYXRlZ3ksXG4gICAge1xuICAgICAgcHJvdmlkZTogSnd0RW51bVNlcnZpY2UuSldUX0FDQ0VTU19UT0tFTl9TRVJWSUNFLFxuICAgICAgaW5qZWN0OiBbQ29uZmlnU2VydmljZV0sXG4gICAgICB1c2VGYWN0b3J5OiAoY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSk6IEp3dFNlcnZpY2UgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IEp3dFNlcnZpY2Uoe1xuICAgICAgICAgIHNlY3JldDogY29uZmlnU2VydmljZS5nZXQ8c3RyaW5nPignSldUX1BSSVZBVEVfS0VZJyksXG4gICAgICAgICAgc2lnbk9wdGlvbnM6IHtcbiAgICAgICAgICAgIGV4cGlyZXNJbjogY29uZmlnU2VydmljZS5nZXQ8c3RyaW5nPignSldUX0FDQ0VTU19UT0tFTl9FWFBJUkFUSU9OJyksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogSnd0RW51bVNlcnZpY2UuSldUX1JFRlJFU0hfVE9LRU5fU0VSVklDRSxcbiAgICAgIGluamVjdDogW0NvbmZpZ1NlcnZpY2VdLFxuICAgICAgdXNlRmFjdG9yeTogKGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpOiBKd3RTZXJ2aWNlID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBKd3RTZXJ2aWNlKHtcbiAgICAgICAgICBzZWNyZXQ6IGNvbmZpZ1NlcnZpY2UuZ2V0PHN0cmluZz4oJ0pXVF9SRUZSRVNIX1RPS0VOX1NFQ1JFVCcpLFxuICAgICAgICAgIHNpZ25PcHRpb25zOiB7XG4gICAgICAgICAgICBleHBpcmVzSW46IGNvbmZpZ1NlcnZpY2UuZ2V0PHN0cmluZz4oJ0pXVF9SRUZSRVNIX1RPS0VOX0VYUElSQVRJT04nKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgZXhwb3J0czogW10sXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge31cbiIsImltcG9ydCB7IFVzZXJQcm90byB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSnd0U2VydmljZSB9IGZyb20gJ0BuZXN0anMvand0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCgnSnd0QWNjZXNzVG9rZW5TZXJ2aWNlJylcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFjY2Vzc1Rva2VuU2VydmljZTogSnd0U2VydmljZSxcblxuICAgIEBJbmplY3QoJ0p3dFJlZnJlc2hUb2tlblNlcnZpY2UnKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVmcmVzaFRva2VuU2VydmljZTogSnd0U2VydmljZSxcbiAgKSB7fVxuXG4gIGFzeW5jIGdlbmVyYXRlQWNjZXNzVG9rZW4odXNlcjogVXNlclByb3RvLlVzZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmFjY2Vzc1Rva2VuU2VydmljZS5zaWduKFxuICAgICAge1xuICAgICAgICB1c2VyOiB1c2VyLmlkLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3ViamVjdDogdXNlci5pZC50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgZ2VuZXJhdGVSZWZyZXNoVG9rZW4odXNlcjogVXNlclByb3RvLlVzZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnJlZnJlc2hUb2tlblNlcnZpY2Uuc2lnbihcbiAgICAgIHtcbiAgICAgICAgdXNlcjogdXNlci5pZCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN1YmplY3Q6IHVzZXIuaWQudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVXRpbHNNb2R1bGUgfSBmcm9tICdAbGlicy9jb3JlJztcbmltcG9ydCB7IEJvb2tpbmdDbGllbnQgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENsaWVudHNNb2R1bGUgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuXG5pbXBvcnQgeyBCb29raW5nQ29tbW9uU2VydmljZSB9IGZyb20gJy4vYm9va2luZy1jb21tb24uc2VydmljZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2xpZW50c01vZHVsZS5yZWdpc3RlcihbQm9va2luZ0NsaWVudF0pLCBVdGlsc01vZHVsZV0sXG4gIHByb3ZpZGVyczogW0Jvb2tpbmdDb21tb25TZXJ2aWNlXSxcbiAgZXhwb3J0czogW0Jvb2tpbmdDb21tb25TZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgQm9va2luZ0NvbW1vbk1vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgQk9PS0lOR19QQUNLQUdFX05BTUUsXG4gIEJPT0tJTkdfU0VSVklDRV9OQU1FLFxuICBCb29raW5nU2VydmljZUNsaWVudCxcbiAgQ3JlYXRlQm9va2luZ0lucHV0LFxuICBVcGRhdGVCb29raW5nRGF0YSxcbn0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3MvYm9va2luZyc7XG5pbXBvcnQgeyBJZCwgUXVlcnlSZXF1ZXN0IH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3MvY29tbW9ucyc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uTW9kdWxlSW5pdCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENsaWVudEdycGMgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgaXNFbXB0eSwgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgZmlyc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQmFzZVF1ZXJ5RHRvIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJvb2tpbmdDb21tb25TZXJ2aWNlIGltcGxlbWVudHMgT25Nb2R1bGVJbml0IHtcbiAgcHJpdmF0ZSBib29raW5nU2VydmljZTogQm9va2luZ1NlcnZpY2VDbGllbnQ7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChCT09LSU5HX1BBQ0tBR0VfTkFNRSkgcHJpdmF0ZSBjbGllbnQ6IENsaWVudEdycGMpIHt9XG5cbiAgb25Nb2R1bGVJbml0KCkge1xuICAgIHRoaXMuYm9va2luZ1NlcnZpY2UgPSB0aGlzLmNsaWVudC5nZXRTZXJ2aWNlPEJvb2tpbmdTZXJ2aWNlQ2xpZW50PihCT09LSU5HX1NFUlZJQ0VfTkFNRSk7XG4gIH1cblxuICBhc3luYyBjcmVhdGUoZGF0YTogQ3JlYXRlQm9va2luZ0lucHV0KSB7XG4gICAgcmV0dXJuIGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMuYm9va2luZ1NlcnZpY2UuY3JlYXRlKGRhdGEpKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRCeUlkKGlkOiBJZCkge1xuICAgIHJldHVybiBhd2FpdCBmaXJzdFZhbHVlRnJvbSh0aGlzLmJvb2tpbmdTZXJ2aWNlLmZpbmRCeUlkKGlkKSk7XG4gIH1cblxuICBhc3luYyBmaW5kKHF1ZXJ5OiBRdWVyeVJlcXVlc3QpIHtcbiAgICByZXR1cm4gYXdhaXQgZmlyc3RWYWx1ZUZyb20odGhpcy5ib29raW5nU2VydmljZS5maW5kKHF1ZXJ5KSk7XG4gIH1cblxuICBhc3luYyB1cGRhdGUoaWQ6IG51bWJlciwgZGF0YTogVXBkYXRlQm9va2luZ0RhdGEpIHtcbiAgICByZXR1cm4gYXdhaXQgZmlyc3RWYWx1ZUZyb20odGhpcy5ib29raW5nU2VydmljZS51cGRhdGUoeyBpZCwgZGF0YSB9KSk7XG4gIH1cblxuICBhc3luYyBkZWxldGUoaWQ6IG51bWJlcikge1xuICAgIHJldHVybiBhd2FpdCBmaXJzdFZhbHVlRnJvbSh0aGlzLmJvb2tpbmdTZXJ2aWNlLmRlbGV0ZSh7IGlkIH0pKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRCb29raW5ncyhxdWVyeT86IEJhc2VRdWVyeUR0bywgbWVyY2hhbnRJZD86IG51bWJlcikge1xuICAgIGxldCB3aGVyZSA9IG51bGw7XG5cbiAgICBpZiAobWVyY2hhbnRJZCkge1xuICAgICAgd2hlcmUgPSB7XG4gICAgICAgIG1lcmNoYW50SWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICghaXNFbXB0eShxdWVyeT8ucSkpIHtcbiAgICAgIG1lcmdlKHdoZXJlLCB7XG4gICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgIF9pTGlrZTogYCUke3F1ZXJ5Py5xfSVgLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5maW5kKHtcbiAgICAgIC4uLnF1ZXJ5LFxuICAgICAgd2hlcmU6IHdoZXJlID8gSlNPTi5zdHJpbmdpZnkod2hlcmUpIDogbnVsbCxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlJztcbmltcG9ydCB7IEJvZHksIENvbnRyb2xsZXIsIERlbGV0ZSwgR2V0LCBMb2dnZXIsIFBhcmFtLCBQYXRjaCwgUG9zdCwgVXNlR3VhcmRzIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5pbXBvcnQgeyBCb29raW5nU2VydmljZSB9IGZyb20gJy4vYm9va2luZy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgSnd0QXV0aEd1YXJkLCBVc2VyIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9jb3JlJztcbmltcG9ydCB7IENyZWF0ZUJvb2tpbmdJbnB1dCwgUGFydGlhbFVwZGF0ZUJvb2tpbmcgfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MnO1xuXG5AQ29udHJvbGxlcignYm9va2luZ3MnKVxuZXhwb3J0IGNsYXNzIEJvb2tpbmdDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBsb2dnZXIgPSBuZXcgTG9nZ2VyKHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBib29raW5nU2VydmljZTogQm9va2luZ1NlcnZpY2UpIHt9XG5cbiAgQFBvc3QoKVxuICBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgYXN5bmMgY3JlYXRlQm9va2luZyhAVXNlcigpIHVzZXI6IFVzZXJNb2RlbCwgQEJvZHkoKSBib29raW5nSW5wdXQ6IENyZWF0ZUJvb2tpbmdJbnB1dCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYm9va2luZ1NlcnZpY2UuY3JlYXRlKHVzZXIsIGJvb2tpbmdJbnB1dCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgQFBhdGNoKCc6aWQnKVxuICBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgYXN5bmMgdXBkYXRlQm9va2luZyhAUGFyYW0oJ2lkJykgaWQ6IG51bWJlciwgQEJvZHkoKSBkYXRhOiBQYXJ0aWFsVXBkYXRlQm9va2luZykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYm9va2luZ1NlcnZpY2UudXBkYXRlKGlkLCBkYXRhKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBARGVsZXRlKCc6aWQnKVxuICBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgYXN5bmMgZGVsZXRlQm9va2luZyhAUGFyYW0oJ2lkJykgaWQ6IG51bWJlcikge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmJvb2tpbmdTZXJ2aWNlLmRlbGV0ZShpZCk7XG4gIH1cblxuICBAR2V0KCc6aWQnKVxuICBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgYXN5bmMgZmluZERldGFpbChAUGFyYW0oJ2lkJykgaWQ6IG51bWJlcikge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmJvb2tpbmdTZXJ2aWNlLmZpbmREZXRhaWwoaWQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBVdGlsc01vZHVsZSB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5pbXBvcnQgeyBCb29raW5nQ29udHJvbGxlciB9IGZyb20gJy4vYm9va2luZy5jb250cm9sbGVyJztcbmltcG9ydCB7IEJvb2tpbmdTZXJ2aWNlIH0gZnJvbSAnLi9ib29raW5nLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9jb3JlJztcbmltcG9ydCB7IEJvb2tpbmdDb21tb25Nb2R1bGUgfSBmcm9tICdAL2FwaS1nYXRld2F5L21vZHVsZXMvYm9va2luZy1jb21tb24vYm9va2luZy1jb21tb24ubW9kdWxlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtCb29raW5nQ29tbW9uTW9kdWxlLCBVdGlsc01vZHVsZV0sXG4gIHByb3ZpZGVyczogW0Jvb2tpbmdTZXJ2aWNlLCBNZXNzYWdlQ29tcG9uZW50XSxcbiAgY29udHJvbGxlcnM6IFtCb29raW5nQ29udHJvbGxlcl0sXG59KVxuZXhwb3J0IGNsYXNzIEJvb2tpbmdNb2R1bGUge31cbiIsImltcG9ydCB7IEVycm9ySGVscGVyIH0gZnJvbSAnQGxpYnMvY29yZSc7XG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBFVXNlclJvbGUgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy9jb21tb25zJztcbmltcG9ydCB7IEluamVjdGFibGUsIExvZ2dlciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IGlzRW1wdHksIG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvY29yZSc7XG5pbXBvcnQgeyBDcmVhdGVCb29raW5nSW5wdXQsIFBhcnRpYWxVcGRhdGVCb29raW5nIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zJztcbmltcG9ydCB7IEJvb2tpbmdDb21tb25TZXJ2aWNlIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9tb2R1bGVzL2Jvb2tpbmctY29tbW9uL2Jvb2tpbmctY29tbW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQm9va2luZ1NlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGxvZ2dlciA9IG5ldyBMb2dnZXIodGhpcy5jb25zdHJ1Y3Rvci5uYW1lKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGJvb2tpbmdTZXJ2aWNlOiBCb29raW5nQ29tbW9uU2VydmljZSwgcHJpdmF0ZSByZWFkb25seSBpMThuOiBNZXNzYWdlQ29tcG9uZW50KSB7fVxuXG4gIGFzeW5jIGNyZWF0ZSh1c2VyOiBVc2VyTW9kZWwsIGRhdGE6IENyZWF0ZUJvb2tpbmdJbnB1dCwgbGFuZz86IHN0cmluZykge1xuICAgIGlmICh1c2VyLnJvbGUgPT09IEVVc2VyUm9sZS5VU0VSKSB7XG4gICAgICBtZXJnZShkYXRhLCB7XG4gICAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGJvb2tpbmcgPSBhd2FpdCB0aGlzLmJvb2tpbmdTZXJ2aWNlLmNyZWF0ZShkYXRhKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiB0aGlzLmkxOG4ubGFuZygnbGFuZy5CT09LSU5HLkNSRUFURS5TVUNDRVNTJywgeyBsYW5nIH0pLFxuICAgICAgYm9va2luZyxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKGlkOiBudW1iZXIsIGRhdGE6IFBhcnRpYWxVcGRhdGVCb29raW5nLCBsYW5nPzogc3RyaW5nKSB7XG4gICAgY29uc3QgeyBib29raW5nIH0gPSBhd2FpdCB0aGlzLmJvb2tpbmdTZXJ2aWNlLmZpbmRCeUlkKHsgaWQgfSk7XG5cbiAgICBpZiAoaXNFbXB0eShib29raW5nKSkge1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYEJvb2tpbmcgaXMgbm90IGZvdW5kYCk7XG4gICAgICBFcnJvckhlbHBlci5IdHRwTm90Rm91bmRFeGNlcHRpb24odGhpcy5pMThuLmxhbmcoJ2xhbmcuQk9PS0lORy5SRUFELk5PVF9FWElTVCcsIHsgbGFuZyB9KSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlZEJvb2tpbmcgPSBhd2FpdCB0aGlzLmJvb2tpbmdTZXJ2aWNlLnVwZGF0ZShpZCwgZGF0YSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogdGhpcy5pMThuLmxhbmcoJ2xhbmcuQk9PS0lORy5VUERBVEUuU1VDQ0VTUycsIHsgbGFuZyB9KSxcbiAgICAgIGJvb2tpbmc6IHVwZGF0ZWRCb29raW5nLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBkZWxldGUoaWQ6IG51bWJlciwgbGFuZz86IHN0cmluZykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYm9va2luZ1NlcnZpY2UuZGVsZXRlKGlkKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiB0aGlzLmkxOG4ubGFuZygnbGFuZy5CT09LSU5HLkRFTEVURS5TVUNDRVNTJywgeyBsYW5nIH0pLFxuICAgICAgcmVzdWx0LFxuICAgIH07XG4gIH1cblxuICBhc3luYyBmaW5kRGV0YWlsKGlkOiBudW1iZXIsIGxhbmc/OiBzdHJpbmcpIHtcbiAgICBjb25zdCB7IGJvb2tpbmcgfSA9IGF3YWl0IHRoaXMuYm9va2luZ1NlcnZpY2UuZmluZEJ5SWQoeyBpZCB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBib29raW5nLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IFF1ZXJ5VXRpbHMgfSBmcm9tICdAbGlicy9jb3JlJztcbmltcG9ydCB7IEJvZHksIENvbnRyb2xsZXIsIERlbGV0ZSwgR2V0LCBQYXJhbSwgUGF0Y2gsIFBvc3QsIFVzZUd1YXJkcyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuaW1wb3J0IHsgQnJhbmNoU2VydmljZSB9IGZyb20gJy4vYnJhbmNoLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBKd3RBdXRoR3VhcmQgfSBmcm9tICdAL2FwaS1nYXRld2F5L2NvcmUnO1xuaW1wb3J0IHsgQ3JlYXRlQnJhbmNoSW5wdXQsIFBhcnRpYWxVcGRhdGVCcmFuY2ggfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MnO1xuaW1wb3J0IHsgTWVyY2hhbnRDb21tb25TZXJ2aWNlIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9tb2R1bGVzL21lcmNoYW50LWNvbW1vbi9tZXJjaGFudC1jb21tb24uc2VydmljZSc7XG5cbkBDb250cm9sbGVyKCdicmFuY2hlcycpXG5leHBvcnQgY2xhc3MgQnJhbmNoQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWVyY2hhbnRTZXJ2aWNlOiBNZXJjaGFudENvbW1vblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBxdWVyeVV0aWxzOiBRdWVyeVV0aWxzLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYnJhbmNoU2VydmljZTogQnJhbmNoU2VydmljZSxcbiAgKSB7fVxuXG4gIEBQb3N0KClcbiAgQFVzZUd1YXJkcyhKd3RBdXRoR3VhcmQpXG4gIGFzeW5jIGNyZWF0ZUJyYW5jaChAQm9keSgpIGRhdGE6IENyZWF0ZUJyYW5jaElucHV0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5icmFuY2hTZXJ2aWNlLmNyZWF0ZUJyYW5jaChkYXRhKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgQFBhdGNoKCc6aWQnKVxuICBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgYXN5bmMgdXBkYXRlQnJhbmNoKEBQYXJhbSgnaWQnKSBpZDogbnVtYmVyLCBAQm9keSgpIGRhdGE6IFBhcnRpYWxVcGRhdGVCcmFuY2gpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmJyYW5jaFNlcnZpY2UudXBkYXRlQnJhbmNoKGlkLCBkYXRhKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgQERlbGV0ZSgnOmlkJylcbiAgQFVzZUd1YXJkcyhKd3RBdXRoR3VhcmQpXG4gIGFzeW5jIGRlbGV0ZUJyYW5jaChAUGFyYW0oJ2lkJykgaWQ6IG51bWJlcikge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYnJhbmNoU2VydmljZS5kZWxldGVCcmFuY2goaWQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBAR2V0KCc6aWQnKVxuICBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgYXN5bmMgZmluZEJyYW5jaERldGFpbChAUGFyYW0oJ2lkJykgaWQ6IG51bWJlcikge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYnJhbmNoU2VydmljZS5maW5kQnJhbmNoRGV0YWlsKGlkKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBVdGlsc01vZHVsZSB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5pbXBvcnQgeyBNZXJjaGFudENvbW1vbk1vZHVsZSB9IGZyb20gJy4uL21lcmNoYW50LWNvbW1vbi9tZXJjaGFudC1jb21tb24ubW9kdWxlJztcblxuaW1wb3J0IHsgQnJhbmNoU2VydmljZSB9IGZyb20gJy4vYnJhbmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnJhbmNoQ29udHJvbGxlciB9IGZyb20gJy4vYnJhbmNoLmNvbnRyb2xsZXInO1xuXG5pbXBvcnQgeyBNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9jb3JlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtNZXJjaGFudENvbW1vbk1vZHVsZSwgVXRpbHNNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtCcmFuY2hTZXJ2aWNlLCBNZXNzYWdlQ29tcG9uZW50XSxcbiAgY29udHJvbGxlcnM6IFtCcmFuY2hDb250cm9sbGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgQnJhbmNoTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBFcnJvckhlbHBlciB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvZW50aXRpZXMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IGlzRW1wdHksIG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvY29yZSc7XG5pbXBvcnQgeyBCYXNlUXVlcnlEdG8sIENyZWF0ZUJyYW5jaElucHV0LCBQYXJ0aWFsVXBkYXRlQnJhbmNoIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zJztcbmltcG9ydCB7IE1lcmNoYW50Q29tbW9uU2VydmljZSB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvbW9kdWxlcy9tZXJjaGFudC1jb21tb24vbWVyY2hhbnQtY29tbW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJhbmNoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbWVyY2hhbnRTZXJ2aWNlOiBNZXJjaGFudENvbW1vblNlcnZpY2UsIHByaXZhdGUgcmVhZG9ubHkgaTE4bjogTWVzc2FnZUNvbXBvbmVudCkge31cblxuICBhc3luYyBjcmVhdGVCcmFuY2goZGF0YTogQ3JlYXRlQnJhbmNoSW5wdXQsIGxhbmc/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBicmFuY2ggPSBhd2FpdCB0aGlzLm1lcmNoYW50U2VydmljZS5jcmVhdGVCcmFuY2goZGF0YSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMuaTE4bi5sYW5nKCdsYW5nLkJSQU5DSC5DUkVBVEUuU1VDQ0VTUycsIHsgbGFuZyB9KSxcbiAgICAgIGJyYW5jaCxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlQnJhbmNoKGlkOiBudW1iZXIsIGRhdGE6IFBhcnRpYWxVcGRhdGVCcmFuY2gsIGxhbmc/OiBzdHJpbmcpIHtcbiAgICBjb25zdCB7IGJyYW5jaCB9ID0gYXdhaXQgdGhpcy5tZXJjaGFudFNlcnZpY2UuYnJhbmNoKHtcbiAgICAgIHdoZXJlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGlkLFxuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICBpZiAoIWJyYW5jaCkge1xuICAgICAgRXJyb3JIZWxwZXIuSHR0cE5vdEZvdW5kRXhjZXB0aW9uKHRoaXMuaTE4bi5sYW5nKCdsYW5nLkJSQU5DSC5SRUFELk5PVF9FWElTVCcsIHsgbGFuZyB9KSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlZEJyYW5jaCA9IGF3YWl0IHRoaXMubWVyY2hhbnRTZXJ2aWNlLnVwZGF0ZUJyYW5jaChpZCwgZGF0YSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMuaTE4bi5sYW5nKCdsYW5nLkJSQU5DSC5DUkVBVEUuU1VDQ0VTUycsIHsgbGFuZyB9KSxcbiAgICAgIGJyYW5jaDogdXBkYXRlZEJyYW5jaCxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlQnJhbmNoKGlkOiBudW1iZXIsIGxhbmc/OiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1lcmNoYW50U2VydmljZS5kZWxldGVCcmFuY2goaWQpO1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiB0aGlzLmkxOG4ubGFuZygnbGFuZy5CUkFOQ0guREVMRVRFLlNVQ0NFU1MnLCB7IGxhbmcgfSksXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRCcmFuY2hEZXRhaWwoaWQ6IG51bWJlcikge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubWVyY2hhbnRTZXJ2aWNlLmZpbmRCcmFuY2hCeUlkKHsgaWQgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGFzeW5jIGZpbmRBbGxCcmFuY2gobWVyY2hhbnRJZD86IG51bWJlciwgcXVlcnk/OiBCYXNlUXVlcnlEdG8pIHtcbiAgICBsZXQgd2hlcmUgPSBudWxsO1xuXG4gICAgaWYgKG1lcmNoYW50SWQpIHtcbiAgICAgIHdoZXJlID0ge1xuICAgICAgICBtZXJjaGFudElkLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoIWlzRW1wdHkocXVlcnk/LnEpKSB7XG4gICAgICBtZXJnZSh3aGVyZSwge1xuICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICBfaUxpa2U6IGAlJHtxdWVyeT8ucX0lYCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubWVyY2hhbnRTZXJ2aWNlLmZpbmRCcmFuY2hlcyh7XG4gICAgICAuLi5xdWVyeSxcbiAgICAgIHdoZXJlOiB3aGVyZSA/IEpTT04uc3RyaW5naWZ5KHdoZXJlKSA6IG51bGwsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb25uZWN0ZWRTb2NrZXQsXG4gIE1lc3NhZ2VCb2R5LFxuICBPbkdhdGV3YXlDb25uZWN0aW9uLFxuICBPbkdhdGV3YXlEaXNjb25uZWN0LFxuICBTdWJzY3JpYmVNZXNzYWdlLFxuICBXZWJTb2NrZXRHYXRld2F5LFxuICBXZWJTb2NrZXRTZXJ2ZXIsXG59IGZyb20gJ0BuZXN0anMvd2Vic29ja2V0cyc7XG5pbXBvcnQgeyBTZXJ2ZXIsIFNvY2tldCB9IGZyb20gJ3NvY2tldC5pbyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5pbXBvcnQgeyBNZXNzYWdlc1NlcnZpY2UgfSBmcm9tICcuLi9tZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3JlYXRlTWVzc2FnZUR0byB9IGZyb20gJy4uL21lc3NhZ2VzL2R0by9jcmVhdGUtbWVzc2FnZS5kdG8nO1xuXG5pbXBvcnQgeyBFRXZlbnRNZXNzYWdlIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zJztcblxuQEluamVjdGFibGUoKVxuQFdlYlNvY2tldEdhdGV3YXkoe1xuICBjb3JzOiB7XG4gICAgb3JpZ2luOiAnKicsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50c0dhdGV3YXkgaW1wbGVtZW50cyBPbkdhdGV3YXlEaXNjb25uZWN0LCBPbkdhdGV3YXlDb25uZWN0aW9uIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtZXNzYWdlc1NlcnZpY2U6IE1lc3NhZ2VzU2VydmljZSkge31cblxuICBAV2ViU29ja2V0U2VydmVyKClcbiAgc2VydmVyOiBTZXJ2ZXI7XG5cbiAgQFN1YnNjcmliZU1lc3NhZ2UoRUV2ZW50TWVzc2FnZS5DUkVBVEVfTUVTU0FHRSlcbiAgYXN5bmMgaGFuZGxlTWVzc2FnZShATWVzc2FnZUJvZHkoKSBtZXNzYWdlRGF0YTogQ3JlYXRlTWVzc2FnZUR0bykge1xuICAgIGNvbnN0IHsgc2VuZGVySWQsIHJlY2VpdmVySWQgfSA9IG1lc3NhZ2VEYXRhO1xuICAgIGNvbnN0IGNyZWF0ZWRNZXNzYWdlID0gYXdhaXQgdGhpcy5tZXNzYWdlc1NlcnZpY2UuY3JlYXRlKG1lc3NhZ2VEYXRhKTtcbiAgICB0aGlzLnNlcnZlci50byhbc2VuZGVySWQsIHJlY2VpdmVySWRdKS5lbWl0KEVFdmVudE1lc3NhZ2UuTkVXX01FU1NBR0UsIGNyZWF0ZWRNZXNzYWdlKTtcbiAgfVxuXG4gIEBTdWJzY3JpYmVNZXNzYWdlKEVFdmVudE1lc3NhZ2UuUkVDRU5UX01FU1NBR0VTKVxuICBhc3luYyBoYW5kbGVSZWNlbnRNZXNzYWdlcyhzb2NrZXQ6IFNvY2tldCwgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgbGltaXQ6IG51bWJlcjsgcGFnZTogbnVtYmVyIH0pIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IGF3YWl0IHRoaXMubWVzc2FnZXNTZXJ2aWNlLmdldFJlY2VudE1lc3NhZ2VzKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmxpbWl0LCBwYXlsb2FkLnBhZ2UpO1xuICAgIHRoaXMuc2VydmVyLnRvKHNvY2tldC5pZCkuZW1pdChFRXZlbnRNZXNzYWdlLlJFQ0VOVF9NRVNTQUdFUywgbWVzc2FnZXMpO1xuICB9XG5cbiAgQFN1YnNjcmliZU1lc3NhZ2UoRUV2ZW50TWVzc2FnZS5DT05WRVJTQVRJT05fTUVTU0FHRVMpXG4gIGFzeW5jIGhhbmRsZUNvbnZlcnNhdGlvbk1lc3NhZ2VzKFxuICAgIHNvY2tldDogU29ja2V0LFxuICAgIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IG90aGVyVXNlcklkOiBzdHJpbmc7IGxpbWl0OiBudW1iZXI7IHBhZ2U6IG51bWJlciB9LFxuICApIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IGF3YWl0IHRoaXMubWVzc2FnZXNTZXJ2aWNlLmdldENvbnZlcnNhdGlvbk1lc3NhZ2VzKFxuICAgICAgcGF5bG9hZC51c2VySWQsXG4gICAgICBwYXlsb2FkLm90aGVyVXNlcklkLFxuICAgICAgcGF5bG9hZC5wYWdlLFxuICAgICAgcGF5bG9hZC5saW1pdCxcbiAgICApO1xuICAgIHRoaXMuc2VydmVyLnRvKHNvY2tldC5pZCkuZW1pdChFRXZlbnRNZXNzYWdlLkNPTlZFUlNBVElPTl9NRVNTQUdFUywgbWVzc2FnZXMpO1xuICB9XG5cbiAgQFN1YnNjcmliZU1lc3NhZ2UoRUV2ZW50TWVzc2FnZS5KT0lOX1JPT00pXG4gIGFzeW5jIGhhbmRsZUpvaW5Sb29tKEBDb25uZWN0ZWRTb2NrZXQoKSBjbGllbnQ6IFNvY2tldCwgQE1lc3NhZ2VCb2R5KCd1c2VySWQnKSB1c2VySWQ6IHN0cmluZykge1xuICAgIGNsaWVudC5qb2luKHVzZXJJZCk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVDb25uZWN0aW9uKGNsaWVudDogU29ja2V0KSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRPRE86IERlY29kZSB0b2tlbiB0aGVuIGFkZCBgdXNlcmAgdG8gY2xpZW50XG4gICAgICBjb25zdCB7IGF1dGhvcml6YXRpb24gfSA9IGNsaWVudC5oYW5kc2hha2UuaGVhZGVycztcblxuICAgICAgY29uc29sZS5sb2coYENsaWVudCBjb25uZWN0ZWQ6ICR7Y2xpZW50LmlkfWApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRGlzY29ubmVjdChzb2NrZXQ6IFNvY2tldCkge1xuICAgIGNvbnNvbGUubG9nKGBDbGllbnQgZGlzY29ubmVjdGVkOiAke3NvY2tldC5pZH1gKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5pbXBvcnQgeyBNZXNzYWdlc01vZHVsZSB9IGZyb20gJy4uL21lc3NhZ2VzL21lc3NhZ2VzLm1vZHVsZSc7XG5cbmltcG9ydCB7IEV2ZW50c0dhdGV3YXkgfSBmcm9tICcuL2V2ZW50cy5nYXRld2F5JztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtNZXNzYWdlc01vZHVsZV0sXG4gIHByb3ZpZGVyczogW0V2ZW50c0dhdGV3YXldLFxufSlcbmV4cG9ydCBjbGFzcyBFdmVudHNNb2R1bGUge31cbiIsImltcG9ydCB7IEJvZHksIENvbnRyb2xsZXIsIERlbGV0ZSwgR2V0LCBQYXJhbSwgUGF0Y2gsIFBvc3QsIFVzZUd1YXJkcyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuaW1wb3J0IHsgR3JvdXBTZXJ2aWNlIH0gZnJvbSAnLi9ncm91cC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgSnd0QXV0aEd1YXJkIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9jb3JlJztcbmltcG9ydCB7IENyZWF0ZUdyb3VwSW5wdXQsIFBhcnRpYWxVcGRhdGVHcm91cCB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvZHRvcyc7XG5pbXBvcnQgeyBNZXJjaGFudENvbW1vblNlcnZpY2UgfSBmcm9tICdAL2FwaS1nYXRld2F5L21vZHVsZXMvbWVyY2hhbnQtY29tbW9uL21lcmNoYW50LWNvbW1vbi5zZXJ2aWNlJztcblxuQENvbnRyb2xsZXIoJ2dyb3VwcycpXG5leHBvcnQgY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtZXJjaGFudFNlcnZpY2U6IE1lcmNoYW50Q29tbW9uU2VydmljZSwgcHJpdmF0ZSByZWFkb25seSBncm91cFNlcnZpY2U6IEdyb3VwU2VydmljZSkge31cblxuICBAUG9zdCgpXG4gIEBVc2VHdWFyZHMoSnd0QXV0aEd1YXJkKVxuICBhc3luYyBjcmVhdGVHcm91cChAQm9keSgpIGRhdGE6IENyZWF0ZUdyb3VwSW5wdXQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmdyb3VwU2VydmljZS5jcmVhdGUoZGF0YSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIEBQYXRjaCgnOmlkJylcbiAgQFVzZUd1YXJkcyhKd3RBdXRoR3VhcmQpXG4gIGFzeW5jIHVwZGF0ZUdyb3VwKEBQYXJhbSgnaWQnKSBpZDogbnVtYmVyLCBAQm9keSgpIGRhdGE6IFBhcnRpYWxVcGRhdGVHcm91cCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZ3JvdXBTZXJ2aWNlLnVwZGF0ZShpZCwgZGF0YSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIEBEZWxldGUoJzppZCcpXG4gIEBVc2VHdWFyZHMoSnd0QXV0aEd1YXJkKVxuICBhc3luYyBkZWxldGVHcm91cChAQm9keSgnaWQnKSBpZDogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5ncm91cFNlcnZpY2UuZGVsZXRlKGlkKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgQEdldCgnOmlkJylcbiAgQFVzZUd1YXJkcyhKd3RBdXRoR3VhcmQpXG4gIGFzeW5jIGZpbmREZXRhaWwoQEJvZHkoJ2lkJykgaWQ6IG51bWJlcikge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZ3JvdXBTZXJ2aWNlLmZpbmREZXRhaWwoaWQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFV0aWxzTW9kdWxlIH0gZnJvbSAnQGxpYnMvY29yZSc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IE1lcmNoYW50Q29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vbWVyY2hhbnQtY29tbW9uL21lcmNoYW50LWNvbW1vbi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBHcm91cFNlcnZpY2UgfSBmcm9tICcuL2dyb3VwLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JvdXBDb250cm9sbGVyIH0gZnJvbSAnLi9ncm91cC5jb250cm9sbGVyJztcblxuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvY29yZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWVyY2hhbnRDb21tb25Nb2R1bGUsIFV0aWxzTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbR3JvdXBTZXJ2aWNlLCBNZXNzYWdlQ29tcG9uZW50XSxcbiAgY29udHJvbGxlcnM6IFtHcm91cENvbnRyb2xsZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBHcm91cE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuaW1wb3J0IHsgTWVyY2hhbnRDb21tb25TZXJ2aWNlIH0gZnJvbSAnLi4vbWVyY2hhbnQtY29tbW9uL21lcmNoYW50LWNvbW1vbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvY29yZSc7XG5pbXBvcnQgeyBDcmVhdGVHcm91cElucHV0LCBQYXJ0aWFsVXBkYXRlR3JvdXAgfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JvdXBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtZXJjaGFudFNlcnZpY2U6IE1lcmNoYW50Q29tbW9uU2VydmljZSwgcHJpdmF0ZSByZWFkb25seSBpMThuOiBNZXNzYWdlQ29tcG9uZW50KSB7fVxuXG4gIGFzeW5jIGNyZWF0ZShkYXRhOiBDcmVhdGVHcm91cElucHV0LCBsYW5nPzogc3RyaW5nKSB7XG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCB0aGlzLm1lcmNoYW50U2VydmljZS5jcmVhdGVHcm91cChkYXRhKTtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogdGhpcy5pMThuLmxhbmcoJ2xhbmcuQlJBTkNILkNSRUFURS5TVUNDRVNTJywgeyBsYW5nIH0pLFxuICAgICAgZ3JvdXAsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShpZDogbnVtYmVyLCBkYXRhOiBQYXJ0aWFsVXBkYXRlR3JvdXAsIGxhbmc/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBncm91cCA9IGF3YWl0IHRoaXMubWVyY2hhbnRTZXJ2aWNlLnVwZGF0ZUdyb3VwKGlkLCBkYXRhKTtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogdGhpcy5pMThuLmxhbmcoJ2xhbmcuQlJBTkNILlVQREFURS5TVUNDRVNTJywgeyBsYW5nIH0pLFxuICAgICAgZ3JvdXAsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZShpZDogbnVtYmVyLCBsYW5nPzogc3RyaW5nKSB7XG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCB0aGlzLm1lcmNoYW50U2VydmljZS5kZWxldGVHcm91cChpZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMuaTE4bi5sYW5nKCdsYW5nLkJSQU5DSC5ERUxFVEUuU1VDQ0VTUycsIHsgbGFuZyB9KSxcbiAgICAgIGdyb3VwLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBmaW5kRGV0YWlsKGlkOiBudW1iZXIsIGxhbmc/OiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1lcmNoYW50U2VydmljZS5maW5kR3JvdXBCeUlkKHsgaWQgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVXRpbHNNb2R1bGUgfSBmcm9tICdAbGlicy9jb3JlJztcbmltcG9ydCB7IE1lcmNoYW50Q2xpZW50IH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDbGllbnRzTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcblxuaW1wb3J0IHsgTWVyY2hhbnRDb21tb25TZXJ2aWNlIH0gZnJvbSAnLi9tZXJjaGFudC1jb21tb24uc2VydmljZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2xpZW50c01vZHVsZS5yZWdpc3RlcihbTWVyY2hhbnRDbGllbnRdKSwgVXRpbHNNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtNZXJjaGFudENvbW1vblNlcnZpY2VdLFxuICBleHBvcnRzOiBbTWVyY2hhbnRDb21tb25TZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVyY2hhbnRDb21tb25Nb2R1bGUge31cbiIsImltcG9ydCB7XG4gIEJyYW5jaFBhZ2luYXRpb24sXG4gIEJyYW5jaGVzLFxuICBDcmVhdGVCcmFuY2hJbnB1dCxcbiAgTnVsbGFibGVCcmFuY2gsXG4gIFVwZGF0ZUJyYW5jaERhdGEsXG59IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL2JyYW5jaCc7XG5pbXBvcnQgeyBDb3VudCwgSWQsIFF1ZXJ5UmVxdWVzdCB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL2NvbW1vbnMnO1xuaW1wb3J0IHsgR3JvdXBQYWdpbmF0aW9uLCBOdWxsYWJsZUdyb3VwLCBVcGRhdGVHcm91cERhdGEgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy9ncm91cCc7XG5pbXBvcnQge1xuICBDcmVhdGVJbnB1dCxcbiAgTUVSQ0hBTlRfUEFDS0FHRV9OQU1FLFxuICBNRVJDSEFOVF9TRVJWSUNFX05BTUUsXG4gIE1lcmNoYW50UGFnaW5hdGlvbixcbiAgTWVyY2hhbnRTZXJ2aWNlQ2xpZW50LFxuICBOdWxsYWJsZU1lcmNoYW50LFxufSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy9tZXJjaGFudCc7XG5pbXBvcnQge1xuICBGaW5kU2VydmljZU9mZnNldFBhZ2luYXRpb24sXG4gIEZpbmRTZXJ2aWNlc1BheWxvYWQsXG4gIE51bGxhYmxlU2VydmljZSxcbiAgVXBkYXRlU2VydmljZURhdGEsXG59IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL3NlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbk1vZHVsZUluaXQgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDbGllbnRHcnBjIH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IGZpcnN0VmFsdWVGcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBpc0VtcHR5LCBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IEJhc2VRdWVyeUR0bywgQ3JlYXRlR3JvdXBJbnB1dCB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvZHRvcyc7XG5pbXBvcnQgeyBCcmFuY2gsIENyZWF0ZVNlcnZpY2VJbnB1dCwgR3JvdXAsIE1lcmNoYW50LCBTZXJ2aWNlIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS90eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXJjaGFudENvbW1vblNlcnZpY2UgaW1wbGVtZW50cyBPbk1vZHVsZUluaXQge1xuICBwcml2YXRlIG1lcmNoYW50U2VydmljZTogTWVyY2hhbnRTZXJ2aWNlQ2xpZW50O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUVSQ0hBTlRfUEFDS0FHRV9OQU1FKSBwcml2YXRlIGNsaWVudDogQ2xpZW50R3JwYykge31cblxuICBvbk1vZHVsZUluaXQoKSB7XG4gICAgdGhpcy5tZXJjaGFudFNlcnZpY2UgPSB0aGlzLmNsaWVudC5nZXRTZXJ2aWNlPE1lcmNoYW50U2VydmljZUNsaWVudD4oTUVSQ0hBTlRfU0VSVklDRV9OQU1FKTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZShkYXRhOiBDcmVhdGVJbnB1dCk6IFByb21pc2U8eyBtZXJjaGFudDogTWVyY2hhbnQ7IGJyYW5jaD86IEJyYW5jaCB9PiB7XG4gICAgcmV0dXJuIGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMubWVyY2hhbnRTZXJ2aWNlLmNyZWF0ZShkYXRhKSk7XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZChpZDogSWQpOiBQcm9taXNlPE51bGxhYmxlTWVyY2hhbnQ+IHtcbiAgICByZXR1cm4gYXdhaXQgZmlyc3RWYWx1ZUZyb20odGhpcy5tZXJjaGFudFNlcnZpY2UuZmluZEJ5SWQoaWQpKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRPbmUocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxOdWxsYWJsZU1lcmNoYW50PiB7XG4gICAgcmV0dXJuIGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMubWVyY2hhbnRTZXJ2aWNlLmZpbmRPbmUocmVxdWVzdCkpO1xuICB9XG5cbiAgYXN5bmMgZmluZChxdWVyeTogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxNZXJjaGFudFBhZ2luYXRpb24+IHtcbiAgICByZXR1cm4gYXdhaXQgZmlyc3RWYWx1ZUZyb20odGhpcy5tZXJjaGFudFNlcnZpY2UuZmluZChxdWVyeSkpO1xuICB9XG5cbiAgYXN5bmMgZmluZEJyYW5jaEJ5SWQoaWQ6IElkKTogUHJvbWlzZTxOdWxsYWJsZUJyYW5jaD4ge1xuICAgIHJldHVybiBhd2FpdCBmaXJzdFZhbHVlRnJvbSh0aGlzLm1lcmNoYW50U2VydmljZS5maW5kQnJhbmNoQnlJZChpZCkpO1xuICB9XG5cbiAgYXN5bmMgYnJhbmNoKHF1ZXJ5OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE51bGxhYmxlQnJhbmNoPiB7XG4gICAgcmV0dXJuIGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMubWVyY2hhbnRTZXJ2aWNlLmJyYW5jaChxdWVyeSkpO1xuICB9XG5cbiAgYXN5bmMgZmluZEJyYW5jaGVzKHF1ZXJ5OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPEJyYW5jaFBhZ2luYXRpb24+IHtcbiAgICByZXR1cm4gYXdhaXQgZmlyc3RWYWx1ZUZyb20odGhpcy5tZXJjaGFudFNlcnZpY2UuZmluZEJyYW5jaGVzKHF1ZXJ5KSk7XG4gIH1cblxuICBhc3luYyBicmFuY2hlcyhxdWVyeTogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxCcmFuY2hlcz4ge1xuICAgIHJldHVybiBhd2FpdCBmaXJzdFZhbHVlRnJvbSh0aGlzLm1lcmNoYW50U2VydmljZS5icmFuY2hlcyhxdWVyeSkpO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlQnJhbmNoKGRhdGE6IENyZWF0ZUJyYW5jaElucHV0KTogUHJvbWlzZTxCcmFuY2g+IHtcbiAgICByZXR1cm4gYXdhaXQgZmlyc3RWYWx1ZUZyb20odGhpcy5tZXJjaGFudFNlcnZpY2UuY3JlYXRlQnJhbmNoKGRhdGEpKTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZUJyYW5jaChpZDogbnVtYmVyLCBkYXRhOiBVcGRhdGVCcmFuY2hEYXRhKTogUHJvbWlzZTxCcmFuY2g+IHtcbiAgICByZXR1cm4gYXdhaXQgZmlyc3RWYWx1ZUZyb20odGhpcy5tZXJjaGFudFNlcnZpY2UudXBkYXRlQnJhbmNoKHsgaWQsIGRhdGEgfSkpO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlQnJhbmNoKGlkOiBudW1iZXIpOiBQcm9taXNlPENvdW50PiB7XG4gICAgcmV0dXJuIGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMubWVyY2hhbnRTZXJ2aWNlLmRlbGV0ZUJyYW5jaCh7IGlkIH0pKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRHcm91cEJ5SWQoaWQ6IElkKTogUHJvbWlzZTxOdWxsYWJsZUdyb3VwPiB7XG4gICAgcmV0dXJuIGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMubWVyY2hhbnRTZXJ2aWNlLmZpbmRHcm91cEJ5SWQoaWQpKTtcbiAgfVxuXG4gIGFzeW5jIGdyb3VwKHF1ZXJ5OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE51bGxhYmxlR3JvdXA+IHtcbiAgICByZXR1cm4gYXdhaXQgZmlyc3RWYWx1ZUZyb20odGhpcy5tZXJjaGFudFNlcnZpY2UuZ3JvdXAocXVlcnkpKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRHcm91cHMocXVlcnk6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8R3JvdXBQYWdpbmF0aW9uPiB7XG4gICAgcmV0dXJuIGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMubWVyY2hhbnRTZXJ2aWNlLmdyb3VwcyhxdWVyeSkpO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlR3JvdXAoZGF0YTogQ3JlYXRlR3JvdXBJbnB1dCk6IFByb21pc2U8R3JvdXA+IHtcbiAgICByZXR1cm4gYXdhaXQgZmlyc3RWYWx1ZUZyb20odGhpcy5tZXJjaGFudFNlcnZpY2UuY3JlYXRlR3JvdXAoZGF0YSkpO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlR3JvdXAoaWQ6IG51bWJlciwgZGF0YTogVXBkYXRlR3JvdXBEYXRhKTogUHJvbWlzZTxHcm91cD4ge1xuICAgIHJldHVybiBhd2FpdCBmaXJzdFZhbHVlRnJvbSh0aGlzLm1lcmNoYW50U2VydmljZS51cGRhdGVHcm91cCh7IGlkLCBkYXRhIH0pKTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZUdyb3VwKGlkOiBudW1iZXIpOiBQcm9taXNlPENvdW50PiB7XG4gICAgcmV0dXJuIGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMubWVyY2hhbnRTZXJ2aWNlLmRlbGV0ZUdyb3VwKHsgaWQgfSkpO1xuICB9XG5cbiAgYXN5bmMgZmluZFNlcnZpY2VCeUlkKGlkOiBJZCk6IFByb21pc2U8TnVsbGFibGVTZXJ2aWNlPiB7XG4gICAgcmV0dXJuIGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMubWVyY2hhbnRTZXJ2aWNlLmZpbmRTZXJ2aWNlQnlJZChpZCkpO1xuICB9XG5cbiAgYXN5bmMgc2VydmljZShxdWVyeTogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxOdWxsYWJsZVNlcnZpY2U+IHtcbiAgICByZXR1cm4gYXdhaXQgZmlyc3RWYWx1ZUZyb20odGhpcy5tZXJjaGFudFNlcnZpY2Uuc2VydmljZShxdWVyeSkpO1xuICB9XG5cbiAgYXN5bmMgZmluZFNlcnZpY2UocXVlcnk6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8RmluZFNlcnZpY2VzUGF5bG9hZD4ge1xuICAgIHJldHVybiBhd2FpdCBmaXJzdFZhbHVlRnJvbSh0aGlzLm1lcmNoYW50U2VydmljZS5zZXJ2aWNlcyhxdWVyeSkpO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlU2VydmljZShkYXRhOiBDcmVhdGVTZXJ2aWNlSW5wdXQpOiBQcm9taXNlPFNlcnZpY2U+IHtcbiAgICByZXR1cm4gYXdhaXQgZmlyc3RWYWx1ZUZyb20odGhpcy5tZXJjaGFudFNlcnZpY2UuY3JlYXRlU2VydmljZShkYXRhKSk7XG4gIH1cblxuICBhc3luYyB1cGRhdGVTZXJ2aWNlKGlkOiBudW1iZXIsIGRhdGE6IFVwZGF0ZVNlcnZpY2VEYXRhKTogUHJvbWlzZTxTZXJ2aWNlPiB7XG4gICAgcmV0dXJuIGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMubWVyY2hhbnRTZXJ2aWNlLnVwZGF0ZVNlcnZpY2UoeyBpZCwgZGF0YSB9KSk7XG4gIH1cblxuICBhc3luYyBkZWxldGVTZXJ2aWNlKGlkOiBudW1iZXIpOiBQcm9taXNlPENvdW50PiB7XG4gICAgcmV0dXJuIGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMubWVyY2hhbnRTZXJ2aWNlLmRlbGV0ZVNlcnZpY2UoeyBpZCB9KSk7XG4gIH1cblxuICBhc3luYyBmaW5kU2VydmljZU9mZnNldFBhZ2luYXRpb24ocXVlcnk6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8RmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uPiB7XG4gICAgcmV0dXJuIGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMubWVyY2hhbnRTZXJ2aWNlLmZpbmRTZXJ2aWNlT2Zmc2V0UGFnaW5hdGlvbihxdWVyeSkpO1xuICB9XG5cbiAgYXN5bmMgZmluZEFsbEJyYW5jaGVzKG1lcmNoYW50SWQ/OiBudW1iZXIsIHF1ZXJ5PzogQmFzZVF1ZXJ5RHRvKSB7XG4gICAgbGV0IHdoZXJlID0gbnVsbDtcblxuICAgIGlmIChtZXJjaGFudElkKSB7XG4gICAgICB3aGVyZSA9IHtcbiAgICAgICAgbWVyY2hhbnRJZCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCFpc0VtcHR5KHF1ZXJ5Py5xKSkge1xuICAgICAgbWVyZ2Uod2hlcmUsIHtcbiAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgX2lMaWtlOiBgJSR7cXVlcnk/LnF9JWAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmZpbmRCcmFuY2hlcyh7XG4gICAgICAuLi5xdWVyeSxcbiAgICAgIHdoZXJlOiB3aGVyZSA/IEpTT04uc3RyaW5naWZ5KHdoZXJlKSA6IG51bGwsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYXN5bmMgZmluZEFsbEdyb3VwcyhtZXJjaGFudElkPzogbnVtYmVyLCBxdWVyeT86IEJhc2VRdWVyeUR0bykge1xuICAgIGxldCB3aGVyZSA9IG51bGw7XG5cbiAgICBpZiAobWVyY2hhbnRJZCkge1xuICAgICAgd2hlcmUgPSB7XG4gICAgICAgIG1lcmNoYW50SWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICghaXNFbXB0eShxdWVyeT8ucSkpIHtcbiAgICAgIG1lcmdlKHdoZXJlLCB7XG4gICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgIF9pTGlrZTogYCUke3F1ZXJ5Py5xfSVgLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5maW5kR3JvdXBzKHtcbiAgICAgIC4uLnF1ZXJ5LFxuICAgICAgd2hlcmU6IHdoZXJlID8gSlNPTi5zdHJpbmdpZnkod2hlcmUpIDogbnVsbCxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBhc3luYyBmaW5kQWxsU2VydmljZXMocXVlcnk/OiBCYXNlUXVlcnlEdG8sIG1lcmNoYW50SWQ/OiBudW1iZXIpIHtcbiAgICBsZXQgd2hlcmUgPSBudWxsO1xuXG4gICAgaWYgKG1lcmNoYW50SWQpIHtcbiAgICAgIHdoZXJlID0ge1xuICAgICAgICBtZXJjaGFudElkLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoIWlzRW1wdHkocXVlcnk/LnEpKSB7XG4gICAgICBtZXJnZSh3aGVyZSwge1xuICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICBfaUxpa2U6IGAlJHtxdWVyeT8ucX0lYCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZmluZFNlcnZpY2Uoe1xuICAgICAgLi4ucXVlcnksXG4gICAgICB3aGVyZTogd2hlcmUgPyBKU09OLnN0cmluZ2lmeSh3aGVyZSkgOiBudWxsLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvZW50aXRpZXMnO1xuaW1wb3J0IHsgTWVyY2hhbnRQYWdpbmF0aW9uIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3MvbWVyY2hhbnQnO1xuaW1wb3J0IHsgQ29udHJvbGxlciwgR2V0LCBQYXJhbSwgUXVlcnksIFVzZUd1YXJkcyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBKd3RBdXRoR3VhcmQsIFVzZXIgfSBmcm9tICdAL2FwaS1nYXRld2F5L2NvcmUnO1xuaW1wb3J0IHsgQmFzZVF1ZXJ5RHRvIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zJztcbmltcG9ydCB7IE1lcmNoYW50Q29tbW9uU2VydmljZSB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvbW9kdWxlcy9tZXJjaGFudC1jb21tb24vbWVyY2hhbnQtY29tbW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQm9va2luZ0NvbW1vblNlcnZpY2UgfSBmcm9tICdAL2FwaS1nYXRld2F5L21vZHVsZXMvYm9va2luZy1jb21tb24vYm9va2luZy1jb21tb24uc2VydmljZSc7XG5cbkBDb250cm9sbGVyKCdtZXJjaGFudHMnKVxuZXhwb3J0IGNsYXNzIE1lcmNoYW50Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWVyY2hhbnRTZXJ2aWNlOiBNZXJjaGFudENvbW1vblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBib29raW5nU2VydmljZTogQm9va2luZ0NvbW1vblNlcnZpY2UsXG4gICkge31cblxuICBAR2V0KClcbiAgQFVzZUd1YXJkcyhKd3RBdXRoR3VhcmQpXG4gIGFzeW5jIGZpbmRBbGxNZXJjaGFudHMoQFF1ZXJ5KCkgcXVlcnk6IEJhc2VRdWVyeUR0byk6IFByb21pc2U8TWVyY2hhbnRQYWdpbmF0aW9uPiB7XG4gICAgbGV0IHdoZXJlID0gbnVsbDtcblxuICAgIGlmICghaXNFbXB0eShxdWVyeT8ucSkpIHtcbiAgICAgIHdoZXJlID0ge1xuICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICBfaUxpa2U6IGAlJHtxdWVyeT8ucX0lYCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tZXJjaGFudFNlcnZpY2UuZmluZCh7XG4gICAgICAuLi5xdWVyeSxcbiAgICAgIHdoZXJlOiB3aGVyZSA/IEpTT04uc3RyaW5naWZ5KHdoZXJlKSA6IG51bGwsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIEBHZXQoJzppZC9icmFuY2hlcycpXG4gIEBVc2VHdWFyZHMoSnd0QXV0aEd1YXJkKVxuICBhc3luYyBmaW5kQnJhbmNoZXMoQFVzZXIoKSBhZG1pbjogVXNlck1vZGVsLCBAUGFyYW0oJ2lkJykgaWQ6IG51bWJlciwgQFF1ZXJ5KCkgcXVlcnk/OiBCYXNlUXVlcnlEdG8pIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1lcmNoYW50U2VydmljZS5maW5kQWxsQnJhbmNoZXMoaWQsIHF1ZXJ5KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgQEdldCgnOmlkL2dyb3VwcycpXG4gIEBVc2VHdWFyZHMoSnd0QXV0aEd1YXJkKVxuICBhc3luYyBmaW5kR3JvdXBzKEBVc2VyKCkgYWRtaW46IFVzZXJNb2RlbCwgQFBhcmFtKCdpZCcpIGlkOiBudW1iZXIsIEBRdWVyeSgpIHF1ZXJ5PzogQmFzZVF1ZXJ5RHRvKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tZXJjaGFudFNlcnZpY2UuZmluZEFsbEdyb3VwcyhpZCwgcXVlcnkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBAR2V0KCc6aWQvc2VydmljZXMnKVxuICBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgYXN5bmMgZmluZFNlcnZpY2VzKEBQYXJhbSgnaWQnKSBpZDogbnVtYmVyLCBAUXVlcnkoKSBxdWVyeT86IEJhc2VRdWVyeUR0bykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubWVyY2hhbnRTZXJ2aWNlLmZpbmRBbGxTZXJ2aWNlcyhxdWVyeSwgaWQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBAR2V0KCc6aWQvYm9va2luZ3MnKVxuICBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgYXN5bmMgZmluZEJvb2tpbmdzKEBQYXJhbSgnaWQnKSBpZDogbnVtYmVyLCBAUXVlcnkoKSBxdWVyeT86IEJhc2VRdWVyeUR0bykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYm9va2luZ1NlcnZpY2UuZmluZEJvb2tpbmdzKHF1ZXJ5LCBpZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIEBHZXQoJzppZCcpXG4gIEBVc2VHdWFyZHMoSnd0QXV0aEd1YXJkKVxuICBhc3luYyBnZXRNZXJjaGFudERldGFpbChAUGFyYW0oJ2lkJykgaWQ6IG51bWJlcikge1xuICAgIGNvbnN0IHsgbWVyY2hhbnQgfSA9IGF3YWl0IHRoaXMubWVyY2hhbnRTZXJ2aWNlLmZpbmRCeUlkKHsgaWQgfSk7XG4gICAgcmV0dXJuIHsgbWVyY2hhbnQgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVXRpbHNNb2R1bGUgfSBmcm9tICdAbGlicy9jb3JlJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuaW1wb3J0IHsgTWVyY2hhbnRDb250cm9sbGVyIH0gZnJvbSAnLi9tZXJjaGFudC5jb250cm9sbGVyJztcblxuaW1wb3J0IHsgTWVyY2hhbnRDb21tb25Nb2R1bGUgfSBmcm9tICdAL2FwaS1nYXRld2F5L21vZHVsZXMvbWVyY2hhbnQtY29tbW9uL21lcmNoYW50LWNvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IHsgQm9va2luZ0NvbW1vbk1vZHVsZSB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvbW9kdWxlcy9ib29raW5nLWNvbW1vbi9ib29raW5nLWNvbW1vbi5tb2R1bGUnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW01lcmNoYW50Q29tbW9uTW9kdWxlLCBCb29raW5nQ29tbW9uTW9kdWxlLCBVdGlsc01vZHVsZV0sXG4gIGNvbnRyb2xsZXJzOiBbTWVyY2hhbnRDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVyY2hhbnRNb2R1bGUge31cbiIsImltcG9ydCB7IElzRW51bSwgSXNNb25nb0lkLCBJc05vdEVtcHR5LCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBlbnVtIE1FU1NBR0VfVFlQRSB7XG4gIFRFWFQgPSAnVEVYVCcsXG4gIElNQUdFID0gJ0lNQUdFJyxcbiAgVklERU8gPSAnVklERU8nLFxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlTWVzc2FnZUR0byB7XG4gIEBJc05vdEVtcHR5KClcbiAgQElzTW9uZ29JZCgpXG4gIHNlbmRlcklkOiBzdHJpbmc7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNNb25nb0lkKClcbiAgcmVjZWl2ZXJJZDogc3RyaW5nO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQElzU3RyaW5nKClcbiAgc2VuZGVyTmFtZTogc3RyaW5nO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQElzU3RyaW5nKClcbiAgcmVjZWl2ZXJOYW1lOiBzdHJpbmc7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNTdHJpbmcoKVxuICBzZW5kZXJBdmF0YXI6IHN0cmluZztcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIHJlY2VpdmVyQXZhdGFyOiBzdHJpbmc7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNTdHJpbmcoKVxuICBjb250ZW50OiBzdHJpbmc7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNFbnVtKE1FU1NBR0VfVFlQRSlcbiAgdHlwZTogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdE1vZGVsIH0gZnJvbSAnQG5lc3Rqcy9tb25nb29zZSc7XG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcblxuaW1wb3J0IHsgQ3JlYXRlTWVzc2FnZUR0byB9IGZyb20gJy4vZHRvL2NyZWF0ZS1tZXNzYWdlLmR0byc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9zY2hlbWFzL21lc3NhZ2VzLnNjaGVtYSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXNzYWdlc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0TW9kZWwoTWVzc2FnZS5uYW1lKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWVzc2FnZU1vZGVsOiBNb2RlbDxNZXNzYWdlPixcbiAgKSB7fVxuXG4gIGFzeW5jIGNyZWF0ZShtZXNzYWdlRGF0YTogQ3JlYXRlTWVzc2FnZUR0byk6IFByb21pc2U8TWVzc2FnZT4ge1xuICAgIGNvbnN0IGNyZWF0ZWRNZXNzYWdlID0gbmV3IHRoaXMubWVzc2FnZU1vZGVsKG1lc3NhZ2VEYXRhKTtcbiAgICBjb25zdCBkb2MgPSBhd2FpdCBjcmVhdGVkTWVzc2FnZS5zYXZlKCk7XG4gICAgcmV0dXJuIGRvYztcbiAgfVxuXG4gIGFzeW5jIGdldFJlY2VudE1lc3NhZ2VzKHVzZXJJZDogc3RyaW5nLCBwYWdlOiBudW1iZXIsIGxpbWl0OiBudW1iZXIpOiBQcm9taXNlPE1lc3NhZ2VbXT4ge1xuICAgIGNvbnN0IHNraXAgPSAocGFnZSAtIDEpICogbGltaXQ7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZU1vZGVsXG4gICAgICAuZmluZCh7ICRvcjogW3sgc2VuZGVySWQ6IHVzZXJJZCB9LCB7IHJlY2VpdmVySWQ6IHVzZXJJZCB9XSB9KVxuICAgICAgLnNvcnQoeyBjcmVhdGVkQXQ6IC0xIH0pXG4gICAgICAuc2tpcChza2lwKVxuICAgICAgLmxpbWl0KGxpbWl0KVxuICAgICAgLmV4ZWMoKTtcbiAgfVxuXG4gIGFzeW5jIGdldENvbnZlcnNhdGlvbk1lc3NhZ2VzKHVzZXJJZDogc3RyaW5nLCBvdGhlclVzZXJJZDogc3RyaW5nLCBwYWdlOiBudW1iZXIsIGxpbWl0OiBudW1iZXIpOiBQcm9taXNlPE1lc3NhZ2VbXT4ge1xuICAgIGNvbnN0IHNraXAgPSAocGFnZSAtIDEpICogbGltaXQ7XG4gICAgY29uc3QgZG9jID0gYXdhaXQgdGhpcy5tZXNzYWdlTW9kZWxcbiAgICAgIC5maW5kKHtcbiAgICAgICAgJG9yOiBbXG4gICAgICAgICAgeyBzZW5kZXJJZDogdXNlcklkLCByZWNlaXZlcklkOiBvdGhlclVzZXJJZCB9LFxuICAgICAgICAgIHsgc2VuZGVySWQ6IG90aGVyVXNlcklkLCByZWNlaXZlcklkOiB1c2VySWQgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pXG4gICAgICAuc29ydCh7IGNyZWF0ZWRBdDogLTEgfSlcbiAgICAgIC5za2lwKHNraXApXG4gICAgICAubGltaXQobGltaXQpXG4gICAgICAuZXhlYygpO1xuICAgIHJldHVybiBkb2M7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSwgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IE1vbmdvb3NlTW9kdWxlLCBNb25nb29zZU1vZHVsZUZhY3RvcnlPcHRpb25zLCBNb25nb29zZU1vZHVsZU9wdGlvbnMgfSBmcm9tICdAbmVzdGpzL21vbmdvb3NlJztcblxuaW1wb3J0IHsgTWVzc2FnZXNTZXJ2aWNlIH0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZVNjaGVtYSB9IGZyb20gJy4vc2NoZW1hcy9tZXNzYWdlcy5zY2hlbWEnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1vbmdvb3NlTW9kdWxlLmZvckZlYXR1cmUoW3sgbmFtZTogTWVzc2FnZS5uYW1lLCBzY2hlbWE6IE1lc3NhZ2VTY2hlbWEgfV0pLFxuICAgIE1vbmdvb3NlTW9kdWxlLmZvclJvb3RBc3luYyh7XG4gICAgICBpbXBvcnRzOiBbQ29uZmlnTW9kdWxlXSxcbiAgICAgIHVzZUZhY3Rvcnk6IGFzeW5jIChjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKTogUHJvbWlzZTxNb25nb29zZU1vZHVsZUZhY3RvcnlPcHRpb25zPiA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdXJpOiBjb25maWdTZXJ2aWNlLmdldDxzdHJpbmc+KCdNRVNTQUdFX0RCX1VSSScpLFxuICAgICAgICB9IGFzIE1vbmdvb3NlTW9kdWxlT3B0aW9ucztcbiAgICAgIH0sXG4gICAgICBpbmplY3Q6IFtDb25maWdTZXJ2aWNlXSxcbiAgICB9KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbTWVzc2FnZXNTZXJ2aWNlXSxcbiAgZXhwb3J0czogW01lc3NhZ2VzU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBQcm9wLCBTY2hlbWEsIFNjaGVtYUZhY3RvcnkgfSBmcm9tICdAbmVzdGpzL21vbmdvb3NlJztcblxuQFNjaGVtYSh7IHRpbWVzdGFtcHM6IHRydWUgfSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgQFByb3AoKVxuICBzZW5kZXJJZDogc3RyaW5nO1xuXG4gIEBQcm9wKClcbiAgcmVjZWl2ZXJJZDogc3RyaW5nO1xuXG4gIEBQcm9wKClcbiAgc2VuZGVyTmFtZTogc3RyaW5nO1xuXG4gIEBQcm9wKClcbiAgcmVjZWl2ZXJOYW1lOiBzdHJpbmc7XG5cbiAgQFByb3AoKVxuICBzZW5kZXJBdmF0YXI6IHN0cmluZztcblxuICBAUHJvcCgpXG4gIHJlY2VpdmVyQXZhdGFyOiBzdHJpbmc7XG5cbiAgQFByb3AoKVxuICBjb250ZW50OiBzdHJpbmc7XG5cbiAgQFByb3AoKVxuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBNZXNzYWdlU2NoZW1hID0gU2NoZW1hRmFjdG9yeS5jcmVhdGVGb3JDbGFzcyhNZXNzYWdlKTtcbiIsImltcG9ydCB7IEJvZHksIENvbnRyb2xsZXIsIERlbGV0ZSwgR2V0LCBQYXJhbSwgUGF0Y2gsIFBvc3QsIFF1ZXJ5LCBVc2VHdWFyZHMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IFNlcnZpY2VzU2VydmljZSB9IGZyb20gJy4vc2VydmljZS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgSnd0QXV0aEd1YXJkIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9jb3JlJztcbmltcG9ydCB7IEJhc2VRdWVyeUR0bywgQ3JlYXRlU2VydmljZUlucHV0LCBQYXJ0aWFsVXBkYXRlU2VydmljZSB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvZHRvcyc7XG5pbXBvcnQgeyBNZXJjaGFudENvbW1vblNlcnZpY2UgfSBmcm9tICdAL2FwaS1nYXRld2F5L21vZHVsZXMvbWVyY2hhbnQtY29tbW9uL21lcmNoYW50LWNvbW1vbi5zZXJ2aWNlJztcblxuQENvbnRyb2xsZXIoJ3NlcnZpY2VzJylcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWVyY2hhbnRTZXJ2aWNlOiBNZXJjaGFudENvbW1vblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBzZXJ2aWNlc1NlcnZpY2U6IFNlcnZpY2VzU2VydmljZSxcbiAgKSB7fVxuXG4gIEBQb3N0KClcbiAgQFVzZUd1YXJkcyhKd3RBdXRoR3VhcmQpXG4gIGFzeW5jIGNyZWF0ZVNlcnZpY2UoQEJvZHkoKSBkYXRhOiBDcmVhdGVTZXJ2aWNlSW5wdXQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlcnZpY2VzU2VydmljZS5jcmVhdGUoZGF0YSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIEBQYXRjaCgnOmlkJylcbiAgQFVzZUd1YXJkcyhKd3RBdXRoR3VhcmQpXG4gIGFzeW5jIHVwZGF0ZVNlcnZpY2UoQFBhcmFtKCdpZCcpIGlkOiBudW1iZXIsIEBCb2R5KCkgZGF0YTogUGFydGlhbFVwZGF0ZVNlcnZpY2UpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlcnZpY2VzU2VydmljZS51cGRhdGUoaWQsIGRhdGEpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBARGVsZXRlKCc6aWQnKVxuICBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgYXN5bmMgZGVsZXRlU2VydmljZShAUGFyYW0oJ2lkJykgaWQ6IG51bWJlcikge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2VydmljZXNTZXJ2aWNlLmRlbGV0ZShpZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIEBHZXQoKVxuICBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgYXN5bmMgZmluZEFsbChAUXVlcnkoKSBxdWVyeT86IEJhc2VRdWVyeUR0bykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubWVyY2hhbnRTZXJ2aWNlLmZpbmRBbGxTZXJ2aWNlcyhxdWVyeSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIEBHZXQoJzppZCcpXG4gIEBVc2VHdWFyZHMoSnd0QXV0aEd1YXJkKVxuICBhc3luYyBmaW5kRGV0YWlsKEBQYXJhbSgnaWQnKSBpZDogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZXJ2aWNlc1NlcnZpY2UuZGVsZXRlKGlkKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBVdGlsc01vZHVsZSB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5pbXBvcnQgeyBTZXJ2aWNlQ29udHJvbGxlciB9IGZyb20gJy4vc2VydmljZS5jb250cm9sbGVyJztcbmltcG9ydCB7IFNlcnZpY2VzU2VydmljZSB9IGZyb20gJy4vc2VydmljZS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvY29yZSc7XG5pbXBvcnQgeyBNZXJjaGFudENvbW1vbk1vZHVsZSB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvbW9kdWxlcy9tZXJjaGFudC1jb21tb24vbWVyY2hhbnQtY29tbW9uLm1vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWVyY2hhbnRDb21tb25Nb2R1bGUsIFV0aWxzTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbU2VydmljZXNTZXJ2aWNlLCBNZXNzYWdlQ29tcG9uZW50XSxcbiAgY29udHJvbGxlcnM6IFtTZXJ2aWNlQ29udHJvbGxlcl0sXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICdAL2FwaS1nYXRld2F5L2NvcmUnO1xuaW1wb3J0IHsgQ3JlYXRlU2VydmljZUlucHV0LCBQYXJ0aWFsVXBkYXRlU2VydmljZSB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvZHRvcyc7XG5pbXBvcnQgeyBNZXJjaGFudENvbW1vblNlcnZpY2UgfSBmcm9tICdAL2FwaS1nYXRld2F5L21vZHVsZXMvbWVyY2hhbnQtY29tbW9uL21lcmNoYW50LWNvbW1vbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbWVyY2hhbnRTZXJ2aWNlOiBNZXJjaGFudENvbW1vblNlcnZpY2UsIHByaXZhdGUgcmVhZG9ubHkgaTE4bjogTWVzc2FnZUNvbXBvbmVudCkge31cblxuICBhc3luYyBjcmVhdGUoZGF0YTogQ3JlYXRlU2VydmljZUlucHV0LCBsYW5nPzogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IGF3YWl0IHRoaXMubWVyY2hhbnRTZXJ2aWNlLmNyZWF0ZVNlcnZpY2UoZGF0YSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMuaTE4bi5sYW5nKCdsYW5nLlNFUlZJQ0UuQ1JFQVRFLlNVQ0NFU1MnLCB7IGxhbmcgfSksXG4gICAgICBzZXJ2aWNlLFxuICAgIH07XG4gIH1cblxuICBhc3luYyB1cGRhdGUoaWQ6IG51bWJlciwgZGF0YTogUGFydGlhbFVwZGF0ZVNlcnZpY2UsIGxhbmc/OiBzdHJpbmcpIHtcbiAgICBjb25zdCB1cGRhdGVkU2VydmljZSA9IGF3YWl0IHRoaXMubWVyY2hhbnRTZXJ2aWNlLnVwZGF0ZVNlcnZpY2UoaWQsIGRhdGEpO1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiB0aGlzLmkxOG4ubGFuZygnbGFuZy5TRVJWSUNFLlVQREFURS5TVUNDRVNTJywgeyBsYW5nIH0pLFxuICAgICAgc2VydmljZTogdXBkYXRlZFNlcnZpY2UsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZShpZDogbnVtYmVyLCBsYW5nPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tZXJjaGFudFNlcnZpY2UuZGVsZXRlU2VydmljZShpZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMuaTE4bi5sYW5nKCdsYW5nLlNFUlZJQ0UuREVMRVRFLlNVQ0NFU1MnLCB7IGxhbmcgfSksXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGZpbmREZXRhaWwoaWQ6IG51bWJlciwgbGFuZz86IHN0cmluZykge1xuICAgIGNvbnN0IHsgc2VydmljZSB9ID0gYXdhaXQgdGhpcy5tZXJjaGFudFNlcnZpY2UuZmluZFNlcnZpY2VCeUlkKHsgaWQgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlcnZpY2UsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdjIgfSBmcm9tICdjbG91ZGluYXJ5JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IENMT1VESU5BUlkgPSAnQ2xvdWRpbmFyeSc7XG5cbmV4cG9ydCBjb25zdCBDbG91ZGluYXJ5UHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBDTE9VRElOQVJZLFxuICBpbmplY3Q6IFtDb25maWdTZXJ2aWNlXSxcbiAgdXNlRmFjdG9yeTogKGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpOiBhbnkgPT4ge1xuICAgIHJldHVybiB2Mi5jb25maWcoe1xuICAgICAgY2xvdWRfbmFtZTogY29uZmlnU2VydmljZS5nZXQ8c3RyaW5nPignQ0xEX0NMT1VEX05BTUUnKSxcbiAgICAgIGFwaV9rZXk6IGNvbmZpZ1NlcnZpY2UuZ2V0PHN0cmluZz4oJ0NMRF9BUElfS0VZJyksXG4gICAgICBhcGlfc2VjcmV0OiBjb25maWdTZXJ2aWNlLmdldDxzdHJpbmc+KCdDTERfQVBJX1NFQ1JFVCcpLFxuICAgIH0pO1xuICB9LFxufTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgUzMgfSBmcm9tICdhd3Mtc2RrJztcbmltcG9ydCB7IHYyIH0gZnJvbSAnY2xvdWRpbmFyeSc7XG5pbXBvcnQgeyBjcmVhdGVSZWFkU3RyZWFtIH0gZnJvbSAnc3RyZWFtaWZpZXInO1xuXG5pbXBvcnQgeyBJVXBsb2FkQ2xvdWRpbmFyeVJlc3BvbnNlIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVwbG9hZFJlc3RTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBTMzogUzM7XG4gIHByaXZhdGUgYnVja2V0OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgdjIuY29uZmlnKHtcbiAgICAgIGNsb3VkX25hbWU6IHRoaXMuY29uZmlnU2VydmljZS5nZXQ8c3RyaW5nPignQ0xEX0NMT1VEX05BTUUnKSxcbiAgICAgIGFwaV9rZXk6IHRoaXMuY29uZmlnU2VydmljZS5nZXQ8c3RyaW5nPignQ0xEX0FQSV9LRVknKSxcbiAgICAgIGFwaV9zZWNyZXQ6IHRoaXMuY29uZmlnU2VydmljZS5nZXQ8c3RyaW5nPignQ0xEX0FQSV9TRUNSRVQnKSxcbiAgICB9KTtcblxuICAgIHRoaXMuUzMgPSBuZXcgUzMoe1xuICAgICAgYWNjZXNzS2V5SWQ6IHRoaXMuY29uZmlnU2VydmljZS5nZXQ8c3RyaW5nPignQVdTX0FDQ0VTU19LRVknKSxcbiAgICAgIHNlY3JldEFjY2Vzc0tleTogdGhpcy5jb25maWdTZXJ2aWNlLmdldDxzdHJpbmc+KCdBV1NfU0VDUkVUX0FDQ0VTU19LRVknKSxcbiAgICAgIHJlZ2lvbjogdGhpcy5jb25maWdTZXJ2aWNlLmdldDxzdHJpbmc+KCdBV1NfUkVHSU9OJyksXG4gICAgfSk7XG5cbiAgICB0aGlzLmJ1Y2tldCA9IHRoaXMuY29uZmlnU2VydmljZS5nZXQ8c3RyaW5nPignQVdTX1MzX0JVQ0tFVF9OQU1FJyk7XG4gIH1cblxuICBhc3luYyB1cGxvYWRGaWxlKGZpbGU6IEV4cHJlc3MuTXVsdGVyLkZpbGUpOiBQcm9taXNlPFMzLk1hbmFnZWRVcGxvYWQuU2VuZERhdGE+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBDb250ZW50VHlwZTogZmlsZS5taW1ldHlwZSxcbiAgICAgIEJ1Y2tldDogdGhpcy5idWNrZXQsXG4gICAgICBLZXk6IGZpbGUub3JpZ2luYWxuYW1lLFxuICAgICAgQm9keTogZmlsZS5idWZmZXIsXG4gICAgICBBQ0w6ICdwdWJsaWMtcmVhZCcsXG4gICAgICBDb250ZW50RGlzcG9zaXRpb246IGBmaWxlbmFtZT0ke2ZpbGUub3JpZ2luYWxuYW1lfWAsXG4gICAgfTtcblxuICAgIGNvbnN0IHVwbG9hZGVkQmxvYiA9IGF3YWl0IHRoaXMuUzMudXBsb2FkKHBhcmFtcykucHJvbWlzZSgpO1xuXG4gICAgcmV0dXJuIHVwbG9hZGVkQmxvYjtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgdXBsb2FkVG9DbG91ZGluYXJ5KGZpbGU6IEV4cHJlc3MuTXVsdGVyLkZpbGUpOiBQcm9taXNlPElVcGxvYWRDbG91ZGluYXJ5UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgY2xkX3VwbG9hZF9zdHJlYW0gPSB2Mi51cGxvYWRlci51cGxvYWRfc3RyZWFtKFxuICAgICAgICB7XG4gICAgICAgICAgcmVzb3VyY2VfdHlwZTogJ2F1dG8nLFxuICAgICAgICAgIHVzZV9maWxlbmFtZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICk7XG5cbiAgICAgIGNyZWF0ZVJlYWRTdHJlYW0oZmlsZS5idWZmZXIpLnBpcGUoY2xkX3VwbG9hZF9zdHJlYW0pO1xuICAgIH0pIGFzIFByb21pc2U8SVVwbG9hZENsb3VkaW5hcnlSZXNwb25zZT47XG4gIH1cblxuICBhc3luYyB1cGxvYWRGaWxlcyhmaWxlczogQXJyYXk8RXhwcmVzcy5NdWx0ZXIuRmlsZT4pIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGZpbGVzLm1hcChhc3luYyAoZmlsZTogRXhwcmVzcy5NdWx0ZXIuRmlsZSkgPT4ge1xuICAgICAgICBjb25zdCBtYW5hZ2VVcGxvYWQgPSBhd2FpdCB0aGlzLnVwbG9hZEZpbGUoZmlsZSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1cmw6IG1hbmFnZVVwbG9hZC5Mb2NhdGlvbixcbiAgICAgICAgICBrZXk6IG1hbmFnZVVwbG9hZC5LZXksXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciwgSHR0cEV4Y2VwdGlvbiwgSHR0cFN0YXR1cywgTG9nZ2VyLCBQb3N0LCBVcGxvYWRlZEZpbGVzLCBVc2VJbnRlcmNlcHRvcnMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBGaWxlc0ludGVyY2VwdG9yIH0gZnJvbSAnQG5lc3Rqcy9wbGF0Zm9ybS1leHByZXNzJztcblxuaW1wb3J0IHsgVXBsb2FkUmVzdFNlcnZpY2UgfSBmcm9tICcuL3VwbG9hZC1yZXN0LnNlcnZpY2UnO1xuXG5AQ29udHJvbGxlcignZmlsZScpXG5leHBvcnQgY2xhc3MgVXBsb2FkQ29udHJvbGxlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbG9nZ2VyID0gbmV3IExvZ2dlcih0aGlzLmNvbnN0cnVjdG9yLm5hbWUpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHVwbG9hZFNlcnZpY2U6IFVwbG9hZFJlc3RTZXJ2aWNlKSB7fVxuXG4gIEBQb3N0KCd1cGxvYWQnKVxuICBAVXNlSW50ZXJjZXB0b3JzKEZpbGVzSW50ZXJjZXB0b3IoJ2ZpbGVzJykpXG4gIGFzeW5jIHVwbG9hZEZpbGVzKEBVcGxvYWRlZEZpbGVzKCkgZmlsZXM6IEFycmF5PEV4cHJlc3MuTXVsdGVyLkZpbGU+KSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKCdGaWxlIG5vdCBmb3VuZCcsIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy51cGxvYWRTZXJ2aWNlLnVwbG9hZEZpbGVzKGZpbGVzKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24oJ1VwbG9hZCBmaWxlIGZhaWxlZCcsIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5pbXBvcnQgeyBDbG91ZGluYXJ5UHJvdmlkZXIgfSBmcm9tICcuL2Nsb3VkaW5hcnkucHJvdmlkZXInO1xuaW1wb3J0IHsgVXBsb2FkU2VydmljZSB9IGZyb20gJy4vdXBsb2FkLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBVcGxvYWRSZXN0U2VydmljZSB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvbW9kdWxlcy91cGxvYWQvdXBsb2FkLXJlc3Quc2VydmljZSc7XG5pbXBvcnQgeyBVcGxvYWRDb250cm9sbGVyIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9tb2R1bGVzL3VwbG9hZC91cGxvYWQuY29udHJvbGxlcic7XG5cbkBNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtDb25maWdNb2R1bGUsIENsb3VkaW5hcnlQcm92aWRlciwgVXBsb2FkU2VydmljZSwgVXBsb2FkUmVzdFNlcnZpY2VdLFxuICBjb250cm9sbGVyczogW1VwbG9hZENvbnRyb2xsZXJdLFxuICBleHBvcnRzOiBbQ2xvdWRpbmFyeVByb3ZpZGVyLCBVcGxvYWRTZXJ2aWNlLCBVcGxvYWRSZXN0U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgUmVhZGFibGUgfSBmcm9tICdzdHJlYW0nO1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgdjIgfSBmcm9tICdjbG91ZGluYXJ5Jztcbi8vIGltcG9ydCB0b1N0cmVhbSA9IHJlcXVpcmUoJ2J1ZmZlci10by1zdHJlYW0nKTtcbmltcG9ydCAqIGFzIHRvU3RyZWFtIGZyb20gJ2J1ZmZlci10by1zdHJlYW0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXBsb2FkU2VydmljZSB7XG4gIGFzeW5jIHVwbG9hZFNpbmdsZVRvQ2xvdWRpbmFyeUdyYXBocWwoYXJnczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IGNyZWF0ZVJlYWRTdHJlYW0gfSA9IGF3YWl0IGFyZ3MuZmlsZTtcbiAgICBjb25zdCBidWZmZXIgPSBhd2FpdCB0aGlzLnN0cmVhbVRvQnVmZmVyKGNyZWF0ZVJlYWRTdHJlYW0oKSk7XG4gICAgcmV0dXJuIHRoaXMudG9DbG91ZGluYXJ5KGJ1ZmZlciwgYXJncy5mb2xkZXIpO1xuICB9XG5cbiAgYXN5bmMgdXBsb2FkTXVsdGlwbGVUb0Nsb3VkaW5hcnlHcmFwaHFsKGFyZ3M6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFycmF5UmVzcG9uc2U6IGFueVtdID0gW107XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgYXJncy5maWxlcy5tYXAoYXN5bmMgKGZpbGU6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMudXBsb2FkU2luZ2xlVG9DbG91ZGluYXJ5R3JhcGhxbCh7IGZpbGUgfSk7XG4gICAgICAgICAgYXJyYXlSZXNwb25zZS5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBhcnJheVJlc3BvbnNlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc3RyZWFtVG9CdWZmZXIoc3RyZWFtOiBSZWFkYWJsZSk6IFByb21pc2U8QnVmZmVyPiB7XG4gICAgY29uc3QgYnVmZmVyOiBVaW50OEFycmF5W10gPSBbXTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgICAgc3RyZWFtXG4gICAgICAgIC5vbignZXJyb3InLCAoZXJyb3IpID0+IHJlamVjdChlcnJvcikpXG4gICAgICAgIC5vbignZGF0YScsIChkYXRhKSA9PiBidWZmZXIucHVzaChkYXRhKSlcbiAgICAgICAgLm9uKCdlbmQnLCAoKSA9PiByZXNvbHZlKEJ1ZmZlci5jb25jYXQoYnVmZmVyKSkpLFxuICAgICk7XG4gIH1cblxuICBhc3luYyB0b0Nsb3VkaW5hcnkoYnVmZmVyOiBCdWZmZXIsIGZvbGRlciA9ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgdXBsb2FkID0gdjIudXBsb2FkZXIudXBsb2FkX3N0cmVhbSh7IGZvbGRlciB9LCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHJldHVybiByZWplY3QoZXJyb3IpO1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICAgIHRvU3RyZWFtKGJ1ZmZlcikucGlwZSh1cGxvYWQpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBVdGlsc01vZHVsZSB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuaW1wb3J0IHsgVXNlckNsaWVudCB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ2xpZW50c01vZHVsZSB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5cbmltcG9ydCB7IFVzZXJDb21tb25TZXJ2aWNlIH0gZnJvbSAnLi91c2VyLWNvbW1vbi5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtDbGllbnRzTW9kdWxlLnJlZ2lzdGVyKFtVc2VyQ2xpZW50XSksIFV0aWxzTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbVXNlckNvbW1vblNlcnZpY2VdLFxuICBleHBvcnRzOiBbVXNlckNvbW1vblNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQ29tbW9uTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb3VudCwgSWQsIFF1ZXJ5UmVxdWVzdCB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL2NvbW1vbnMnO1xuaW1wb3J0IHsgQ3JlYXRlRGV2aWNlSW5wdXQsIERldmljZXMgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy9kZXZpY2UnO1xuaW1wb3J0IHtcbiAgQWRkT3BlcmF0b3JJbnB1dCxcbiAgQWRtaW5VcGRhdGVDdXN0b21lcklucHV0LFxuICBDcmVhdGVVc2VyUmVxdWVzdCxcbiAgRFVDUEhfVVNFUl9QQUNLQUdFX05BTUUsXG4gIEZpbmRPbmVVc2VyLFxuICBVU0VSX1NFUlZJQ0VfTkFNRSxcbiAgVXBkYXRlVXNlckRhdGEsXG4gIFVzZXJTZXJ2aWNlQ2xpZW50LFxufSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy91c2VyJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25Nb2R1bGVJbml0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ2xpZW50R3JwYyB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBmaXJzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3JlYXRlTWVyY2hhbnRVc2VySW5wdXQsIE1lcmNoYW50VXNlciB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL21lcmNoYW50X3VzZXInO1xuXG5pbXBvcnQgeyBEZXZpY2UgfSBmcm9tICdAL2FwaS1nYXRld2F5L3R5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJDb21tb25TZXJ2aWNlIGltcGxlbWVudHMgT25Nb2R1bGVJbml0IHtcbiAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2VDbGllbnQ7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChEVUNQSF9VU0VSX1BBQ0tBR0VfTkFNRSkgcHJpdmF0ZSBjbGllbnQ6IENsaWVudEdycGMpIHt9XG5cbiAgb25Nb2R1bGVJbml0KCkge1xuICAgIHRoaXMudXNlclNlcnZpY2UgPSB0aGlzLmNsaWVudC5nZXRTZXJ2aWNlPFVzZXJTZXJ2aWNlQ2xpZW50PihVU0VSX1NFUlZJQ0VfTkFNRSk7XG4gIH1cblxuICBhc3luYyBjcmVhdGUoZGF0YTogQ3JlYXRlVXNlclJlcXVlc3QpOiBQcm9taXNlPEZpbmRPbmVVc2VyPiB7XG4gICAgcmV0dXJuIGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMudXNlclNlcnZpY2UuY3JlYXRlKGRhdGEpKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmQocXVlcnk6IFF1ZXJ5UmVxdWVzdCkge1xuICAgIHJldHVybiBhd2FpdCBmaXJzdFZhbHVlRnJvbSh0aGlzLnVzZXJTZXJ2aWNlLmZpbmQocXVlcnkpKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRPbmUocXVlcnk6IFF1ZXJ5UmVxdWVzdCkge1xuICAgIHJldHVybiBhd2FpdCBmaXJzdFZhbHVlRnJvbSh0aGlzLnVzZXJTZXJ2aWNlLmZpbmRPbmUocXVlcnkpKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRCeUlkKGlkOiBJZCkge1xuICAgIHJldHVybiBhd2FpdCBmaXJzdFZhbHVlRnJvbSh0aGlzLnVzZXJTZXJ2aWNlLmZpbmRCeUlkKGlkKSk7XG4gIH1cblxuICBhc3luYyBjb3VudFVzZXIocXVlcnk6IFF1ZXJ5UmVxdWVzdCkge1xuICAgIHJldHVybiBhd2FpdCBmaXJzdFZhbHVlRnJvbSh0aGlzLnVzZXJTZXJ2aWNlLmNvdW50KHF1ZXJ5KSk7XG4gIH1cblxuICBhc3luYyB1cGRhdGUoaWQ6IG51bWJlciwgZGF0YTogVXBkYXRlVXNlckRhdGEpIHtcbiAgICByZXR1cm4gYXdhaXQgZmlyc3RWYWx1ZUZyb20oXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZSh7XG4gICAgICAgIGlkLFxuICAgICAgICBkYXRhLFxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZUN1c3RvbWVyKGlkOiBudW1iZXIpOiBQcm9taXNlPENvdW50PiB7XG4gICAgcmV0dXJuIGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMudXNlclNlcnZpY2UuZGVsZXRlQ3VzdG9tZXIoeyBpZCB9KSk7XG4gIH1cblxuICBhc3luYyBmaW5kRGV2aWNlcyhxdWVyeTogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxEZXZpY2VzPiB7XG4gICAgcmV0dXJuIGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMudXNlclNlcnZpY2UuZmluZERldmljZXMocXVlcnkpKTtcbiAgfVxuXG4gIGFzeW5jIHVwc2VydERldmljZShkYXRhOiBDcmVhdGVEZXZpY2VJbnB1dCk6IFByb21pc2U8RGV2aWNlPiB7XG4gICAgcmV0dXJuIGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMudXNlclNlcnZpY2UudXBzZXJ0RGV2aWNlKGRhdGEpKTtcbiAgfVxuXG4gIC8vIE1lcmNoYW50IHVzZXJcbiAgYXN5bmMgY3JlYXRlTWVyY2hhbnRVc2VyKGRhdGE6IENyZWF0ZU1lcmNoYW50VXNlcklucHV0KTogUHJvbWlzZTxNZXJjaGFudFVzZXI+IHtcbiAgICByZXR1cm4gYXdhaXQgZmlyc3RWYWx1ZUZyb20odGhpcy51c2VyU2VydmljZS5jcmVhdGVNZXJjaGFudFVzZXIoZGF0YSkpO1xuICB9XG5cbiAgYXN5bmMgYWRkT3BlcmF0b3IoZGF0YTogQWRkT3BlcmF0b3JJbnB1dCk6IFByb21pc2U8RmluZE9uZVVzZXI+IHtcbiAgICByZXR1cm4gYXdhaXQgZmlyc3RWYWx1ZUZyb20odGhpcy51c2VyU2VydmljZS5hZGRPcGVyYXRvcihkYXRhKSk7XG4gIH1cblxuICBhc3luYyBjb3VudEN1c3RvbWVyKHF1ZXJ5OiBRdWVyeVJlcXVlc3QpIHtcbiAgICByZXR1cm4gYXdhaXQgZmlyc3RWYWx1ZUZyb20odGhpcy51c2VyU2VydmljZS5jb3VudEN1c3RvbWVyKHF1ZXJ5KSk7XG4gIH1cblxuICAvLyBjdXN0b21lclxuICBhc3luYyBhZGRDdXN0b21lcihkYXRhOiBBZGRPcGVyYXRvcklucHV0KTogUHJvbWlzZTxGaW5kT25lVXNlcj4ge1xuICAgIHJldHVybiBhd2FpdCBmaXJzdFZhbHVlRnJvbSh0aGlzLnVzZXJTZXJ2aWNlLmFkZEN1c3RvbWVyKGRhdGEpKTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZUN1c3RvbWVyKGRhdGE6IEFkbWluVXBkYXRlQ3VzdG9tZXJJbnB1dCk6IFByb21pc2U8RmluZE9uZVVzZXI+IHtcbiAgICByZXR1cm4gYXdhaXQgZmlyc3RWYWx1ZUZyb20odGhpcy51c2VyU2VydmljZS51cGRhdGVDdXN0b21lcihkYXRhKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENPTU1PTl9NRVNTQUdFLFxuICBDVVNUT01FUl9NRVNTQUdFLFxuICBFcnJvckhlbHBlcixcbiAgTUVSQ0hBTlRfTUVTU0FHRSxcbiAgUGFzc3dvcmRVdGlscyxcbiAgVVNFUl9NRVNTQUdFLFxufSBmcm9tICdAbGlicy9jb3JlJztcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlL2VudGl0aWVzJztcbmltcG9ydCB7IEVVc2VyUm9sZSB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL2NvbW1vbnMnO1xuaW1wb3J0IHsgQm9keSwgQ29udHJvbGxlciwgR2V0LCBQYXJhbSwgUGF0Y2gsIFBvc3QsIFF1ZXJ5LCBVc2VHdWFyZHMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBpc0VtcHR5LCBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAL2FwaS1nYXRld2F5L2NvcmUnO1xuaW1wb3J0IHsgSnd0QXV0aEd1YXJkIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9jb3JlL2d1YXJkcy9hdXRoLmd1YXJkJztcbmltcG9ydCB7XG4gIEFkZEN1c3RvbWVyRHRvLFxuICBBZGRPcGVyYXRvckR0byxcbiAgQ2hhbmdlUGFzc3dvcmRJbnB1dCxcbiAgUGFnaW5hdGVVc2VyRHRvLFxuICBVcGRhdGVQYXJ0aWFsQ3VzdG9tZXIsXG59IGZyb20gJ0AvYXBpLWdhdGV3YXkvZHRvcyc7XG5pbXBvcnQgeyBCb29raW5nQ29tbW9uU2VydmljZSB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvbW9kdWxlcy9ib29raW5nLWNvbW1vbi9ib29raW5nLWNvbW1vbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1lcmNoYW50Q29tbW9uU2VydmljZSB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvbW9kdWxlcy9tZXJjaGFudC1jb21tb24vbWVyY2hhbnQtY29tbW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckNvbW1vblNlcnZpY2UgfSBmcm9tICdAL2FwaS1nYXRld2F5L21vZHVsZXMvdXNlci1jb21tb24vdXNlci1jb21tb24uc2VydmljZSc7XG5pbXBvcnQgeyBVcGRhdGVQYXJ0aWFsVXNlciB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvdHlwZXMnO1xuXG5AQ29udHJvbGxlcigndXNlcnMnKVxuZXhwb3J0IGNsYXNzIFVzZXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSB1c2VyU2VydmljZTogVXNlckNvbW1vblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBwYXNzd29yZFV0aWxzOiBQYXNzd29yZFV0aWxzLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWVyY2hhbnRTZXJ2aWNlOiBNZXJjaGFudENvbW1vblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBib29raW5nU2VydmljZTogQm9va2luZ0NvbW1vblNlcnZpY2UsXG4gICkge31cblxuICBAUG9zdCgnY2hhbmdlLXBhc3N3b3JkJylcbiAgQFVzZUd1YXJkcyhKd3RBdXRoR3VhcmQpXG4gIGFzeW5jIHVwZGF0ZVBhc3N3b3JkKEBVc2VyKCkgY3VycmVudFVzZXI6IFVzZXJNb2RlbCwgQEJvZHkoKSBkYXRhOiBDaGFuZ2VQYXNzd29yZElucHV0KSB7XG4gICAgY29uc3QgeyB1c2VyIH0gPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmZpbmRCeUlkKHsgaWQ6IGN1cnJlbnRVc2VyLmlkIH0pO1xuXG4gICAgY29uc3QgaXNTYW1lOiBib29sZWFuID0gYXdhaXQgdGhpcy5wYXNzd29yZFV0aWxzLmNvbXBhcmUoZGF0YS5jdXJyZW50UGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuICAgIGNvbnN0IGlzQ29uZmlybWVkOiBib29sZWFuID0gZGF0YS5uZXdQYXNzd29yZCA9PT0gZGF0YS5jb25maXJtUGFzc3dvcmQ7XG5cbiAgICBpZiAoIWlzU2FtZSB8fCAhaXNDb25maXJtZWQpIHtcbiAgICAgIEVycm9ySGVscGVyLkh0dHBCYWRSZXF1ZXN0RXhjZXB0aW9uKFVTRVJfTUVTU0FHRS5VUERBVEUuSU5WQUxJRF9QQVNTV09SRCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFzc3dvcmQ6IHN0cmluZyA9IGF3YWl0IHRoaXMucGFzc3dvcmRVdGlscy5oYXNoKGRhdGEubmV3UGFzc3dvcmQpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS51cGRhdGUodXNlci5pZCwge1xuICAgICAgcGFzc3dvcmQsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgQFBvc3QoJ2FkZC1vcGVyYXRvcicpXG4gIEBVc2VHdWFyZHMoSnd0QXV0aEd1YXJkKVxuICBhc3luYyBhZGRPcGVyYXRvcihAVXNlcigpIGFkbWluOiBVc2VyTW9kZWwsIEBCb2R5KCkgdXNlcklucHV0OiBBZGRPcGVyYXRvckR0bykge1xuICAgIGNvbnN0IHsgbWVyY2hhbnQgfSA9IGF3YWl0IHRoaXMubWVyY2hhbnRTZXJ2aWNlLmZpbmRCeUlkKHsgaWQ6IHVzZXJJbnB1dC5tZXJjaGFudElkIH0pO1xuXG4gICAgaWYgKGlzRW1wdHkobWVyY2hhbnQpKSB7XG4gICAgICBFcnJvckhlbHBlci5IdHRwTm90Rm91bmRFeGNlcHRpb24oTUVSQ0hBTlRfTUVTU0FHRS5SRUFELk5PVF9GT1VORCk7XG4gICAgfVxuXG4gICAgaWYgKG1lcmNoYW50LnVzZXJJZCAhPT0gYWRtaW4uaWQpIHtcbiAgICAgIEVycm9ySGVscGVyLkh0dHBCYWRSZXF1ZXN0RXhjZXB0aW9uKENPTU1PTl9NRVNTQUdFLklOVkFMSUQpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgY291bnQgfSA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuY291bnRVc2VyKHtcbiAgICAgIHdoZXJlOiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsOiB1c2VySW5wdXQuZW1haWwgfSksXG4gICAgfSk7XG5cbiAgICBpZiAoY291bnQgPj0gMSkge1xuICAgICAgRXJyb3JIZWxwZXIuSHR0cEJhZFJlcXVlc3RFeGNlcHRpb24oVVNFUl9NRVNTQUdFLkNSRUFURS5FWElTVF9FTUFJTCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuYWRkT3BlcmF0b3Ioe1xuICAgICAgdXNlcjogdXNlcklucHV0LFxuICAgICAgbWVyY2hhbnRVc2VyOiB7XG4gICAgICAgIGJyYW5jaElkOiB1c2VySW5wdXQ/LmJyYW5jaElkLFxuICAgICAgICBtZXJjaGFudElkOiBtZXJjaGFudC5pZCxcbiAgICAgICAgcm9sZTogdXNlcklucHV0Py5yb2xlID8/IEVVc2VyUm9sZS5NQVNURVJfV09SS0VSLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB1c2VyO1xuICB9XG5cbiAgQFBvc3QoJ2FkZC1jdXN0b21lcicpXG4gIEBVc2VHdWFyZHMoSnd0QXV0aEd1YXJkKVxuICBhc3luYyBhZGRDdXN0b21lcihAVXNlcigpIGFkbWluOiBVc2VyTW9kZWwsIEBCb2R5KCkgY3VzdG9tZXJJbnB1dDogQWRkQ3VzdG9tZXJEdG8pIHtcbiAgICBjb25zdCB7IG1lcmNoYW50IH0gPSBhd2FpdCB0aGlzLm1lcmNoYW50U2VydmljZS5maW5kQnlJZCh7IGlkOiBjdXN0b21lcklucHV0Lm1lcmNoYW50SWQgfSk7XG5cbiAgICBpZiAoaXNFbXB0eShtZXJjaGFudCkpIHtcbiAgICAgIEVycm9ySGVscGVyLkh0dHBOb3RGb3VuZEV4Y2VwdGlvbihNRVJDSEFOVF9NRVNTQUdFLlJFQUQuTk9UX0ZPVU5EKTtcbiAgICB9XG5cbiAgICBpZiAobWVyY2hhbnQudXNlcklkICE9PSBhZG1pbi5pZCkge1xuICAgICAgRXJyb3JIZWxwZXIuSHR0cEJhZFJlcXVlc3RFeGNlcHRpb24oQ09NTU9OX01FU1NBR0UuSU5WQUxJRCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb3VudCB9ID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5jb3VudEN1c3RvbWVyKHtcbiAgICAgIHdoZXJlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsOiBjdXN0b21lcklucHV0Py5lbWFpbCxcbiAgICAgICAgcGhvbmVOdW1iZXI6IGN1c3RvbWVySW5wdXQ/LnBob25lTnVtYmVyLFxuICAgICAgICBtZXJjaGFudElkOiBjdXN0b21lcklucHV0Py5tZXJjaGFudElkLFxuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICBpZiAoY291bnQgPiAxKSB7XG4gICAgICBFcnJvckhlbHBlci5IdHRwQmFkUmVxdWVzdEV4Y2VwdGlvbihVU0VSX01FU1NBR0UuQ1JFQVRFLkVYSVNUX0VNQUlMKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHVzZXIgfSA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuYWRkQ3VzdG9tZXIoe1xuICAgICAgdXNlcjoge1xuICAgICAgICAuLi5jdXN0b21lcklucHV0LFxuICAgICAgICByb2xlOiBFVXNlclJvbGUuVVNFUixcbiAgICAgICAgYnJhbmNoSWQ6IGN1c3RvbWVySW5wdXQ/LmJyYW5jaElkLFxuICAgICAgICBtZXJjaGFudElkOiBtZXJjaGFudC5pZCxcbiAgICAgIH0sXG4gICAgICBtZXJjaGFudFVzZXI6IHtcbiAgICAgICAgYnJhbmNoSWQ6IGN1c3RvbWVySW5wdXQ/LmJyYW5jaElkLFxuICAgICAgICBtZXJjaGFudElkOiBtZXJjaGFudC5pZCxcbiAgICAgICAgcm9sZTogRVVzZXJSb2xlLlVTRVIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IENVU1RPTUVSX01FU1NBR0UuQ1JFQVRFLlNVQ0NFU1NGVUwsXG4gICAgICB1c2VyLFxuICAgIH07XG4gIH1cblxuICBAUGF0Y2goJ3VwZGF0ZS1jdXN0b21lci86aWQnKVxuICBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgYXN5bmMgdXBkYXRlQ3VzdG9tZXIoXG4gICAgQFVzZXIoKSBhZG1pbjogVXNlck1vZGVsLFxuICAgIEBQYXJhbSgnaWQnKSB1c2VySWQ6IG51bWJlcixcbiAgICBAQm9keSgpIGN1c3RvbWVySW5wdXQ6IFVwZGF0ZVBhcnRpYWxDdXN0b21lcixcbiAgKSB7XG4gICAgY29uc3QgY3VycmVudEN1c3RvbWVyID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5maW5kQnlJZCh7IGlkOiB1c2VySWQgfSk7XG5cbiAgICBpZiAoaXNFbXB0eShjdXJyZW50Q3VzdG9tZXIudXNlcikpIHtcbiAgICAgIEVycm9ySGVscGVyLkh0dHBCYWRSZXF1ZXN0RXhjZXB0aW9uKENVU1RPTUVSX01FU1NBR0UuUkVBRC5OT1RfRk9VTkQpO1xuICAgIH1cblxuICAgIGlmIChjdXN0b21lcklucHV0Py5icmFuY2hJZCkge1xuICAgICAgY29uc3QgeyBicmFuY2ggfSA9IGF3YWl0IHRoaXMubWVyY2hhbnRTZXJ2aWNlLmZpbmRCcmFuY2hCeUlkKHsgaWQ6IGN1c3RvbWVySW5wdXQ/LmJyYW5jaElkIH0pO1xuXG4gICAgICBpZiAoaXNFbXB0eShicmFuY2gpKSB7XG4gICAgICAgIEVycm9ySGVscGVyLkh0dHBOb3RGb3VuZEV4Y2VwdGlvbihNRVJDSEFOVF9NRVNTQUdFLlJFQUQuTk9UX0ZPVU5EKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IGNvdW50IH0gPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmNvdW50Q3VzdG9tZXIoe1xuICAgICAgd2hlcmU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZW1haWw6IGN1c3RvbWVySW5wdXQ/LmVtYWlsLFxuICAgICAgICBwaG9uZU51bWJlcjogY3VzdG9tZXJJbnB1dD8ucGhvbmVOdW1iZXIsXG4gICAgICAgIG1lcmNoYW50SWQ6IGN1c3RvbWVySW5wdXQ/Lm1lcmNoYW50SWQsXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgIEVycm9ySGVscGVyLkh0dHBCYWRSZXF1ZXN0RXhjZXB0aW9uKFVTRVJfTUVTU0FHRS5DUkVBVEUuRVhJU1RfRU1BSUwpO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZUN1c3RvbWVyKHtcbiAgICAgIGlkOiB1c2VySWQsXG4gICAgICB1c2VyOiB7XG4gICAgICAgIC4uLmN1c3RvbWVySW5wdXQsXG4gICAgICAgIHJvbGU6IGN1c3RvbWVySW5wdXQ/LnJvbGUgPz8gRVVzZXJSb2xlLk1BU1RFUl9XT1JLRVIsXG4gICAgICB9LFxuICAgICAgbWVyY2hhbnRVc2VyOiB7XG4gICAgICAgIC4uLmN1c3RvbWVySW5wdXQsXG4gICAgICAgIHJvbGU6IGN1c3RvbWVySW5wdXQ/LnJvbGUgPz8gRVVzZXJSb2xlLk1BU1RFUl9XT1JLRVIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVzZXI7XG4gIH1cblxuICBAUG9zdCgnYWRkLXVzZXInKVxuICBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgYXN5bmMgdXBkYXRlVXNlcihAUGFyYW0oJ2lkJykgaWQ6IG51bWJlciwgQEJvZHkoKSBkYXRhOiBVcGRhdGVQYXJ0aWFsVXNlcikge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZShpZCwgZGF0YSk7XG4gICAgcmV0dXJuIHVzZXI7XG4gIH1cblxuICBAR2V0KCdtZXJjaGFudC86aWQnKVxuICBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgYXN5bmMgZ2V0T3BlcmF0b3JzKEBQYXJhbSgnaWQnKSBtZXJjaGFudElkOiBudW1iZXIsIEBRdWVyeSgpIHF1ZXJ5OiBQYWdpbmF0ZVVzZXJEdG8pIHtcbiAgICBjb25zdCB3aGVyZSA9IHtcbiAgICAgIG1lcmNoYW50SWQsXG4gICAgICByb2xlOiB7XG4gICAgICAgIF9ub3Q6IEVVc2VyUm9sZS5VU0VSLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgaWYgKCFpc0VtcHR5KHF1ZXJ5Py5xKSkge1xuICAgICAgbWVyZ2Uod2hlcmUsIHtcbiAgICAgICAgX29yOiBbeyBzZWFyY2g6IHsgX2lMaWtlOiBgJSR7cXVlcnkucX0lYCB9IH1dLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5maW5kKHtcbiAgICAgIC4uLnF1ZXJ5LFxuICAgICAgd2hlcmU6IEpTT04uc3RyaW5naWZ5KHdoZXJlKSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBAR2V0KCdib29raW5ncycpXG4gIEBVc2VHdWFyZHMoSnd0QXV0aEd1YXJkKVxuICBhc3luYyBmaW5kT3duQm9va2luZ3MoQFVzZXIoKSB1c2VyOiBVc2VyTW9kZWwsIEBRdWVyeSgpIHF1ZXJ5OiBQYWdpbmF0ZVVzZXJEdG8pIHtcbiAgICBjb25zdCB3aGVyZSA9IHtcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICB9O1xuXG4gICAgaWYgKCFpc0VtcHR5KHF1ZXJ5Py5xKSkge1xuICAgICAgbWVyZ2Uod2hlcmUsIHtcbiAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgX2lMaWtlOiBgJSR7cXVlcnkucX0lYCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYm9va2luZ1NlcnZpY2UuZmluZCh7XG4gICAgICAuLi5xdWVyeSxcbiAgICAgIHdoZXJlOiBKU09OLnN0cmluZ2lmeSh3aGVyZSksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgQEdldCgnOmlkL2Jvb2tpbmdzJylcbiAgQFVzZUd1YXJkcyhKd3RBdXRoR3VhcmQpXG4gIGFzeW5jIGZpbmRCb29raW5ncyhAUGFyYW0oJ2lkJykgdXNlcklkOiBudW1iZXIsIEBRdWVyeSgpIHF1ZXJ5OiBQYWdpbmF0ZVVzZXJEdG8pIHtcbiAgICBjb25zdCB3aGVyZSA9IHtcbiAgICAgIHVzZXJJZCxcbiAgICB9O1xuXG4gICAgaWYgKCFpc0VtcHR5KHF1ZXJ5Py5xKSkge1xuICAgICAgbWVyZ2Uod2hlcmUsIHtcbiAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgX2lMaWtlOiBgJSR7cXVlcnkucX0lYCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYm9va2luZ1NlcnZpY2UuZmluZCh7XG4gICAgICAuLi5xdWVyeSxcbiAgICAgIHdoZXJlOiBKU09OLnN0cmluZ2lmeSh3aGVyZSksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBVdGlsc01vZHVsZSB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5pbXBvcnQgeyBVc2VyQ29udHJvbGxlciB9IGZyb20gJy4vdXNlci5jb250cm9sbGVyJztcblxuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvY29yZSc7XG5pbXBvcnQgeyBNZXJjaGFudENvbW1vbk1vZHVsZSB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvbW9kdWxlcy9tZXJjaGFudC1jb21tb24vbWVyY2hhbnQtY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBVc2VyQ29tbW9uTW9kdWxlIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9tb2R1bGVzL3VzZXItY29tbW9uL3VzZXItY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBCb29raW5nQ29tbW9uTW9kdWxlIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9tb2R1bGVzL2Jvb2tpbmctY29tbW9uL2Jvb2tpbmctY29tbW9uLm1vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbVXNlckNvbW1vbk1vZHVsZSwgTWVyY2hhbnRDb21tb25Nb2R1bGUsIFV0aWxzTW9kdWxlLCBCb29raW5nQ29tbW9uTW9kdWxlXSxcbiAgY29udHJvbGxlcnM6IFtVc2VyQ29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW01lc3NhZ2VDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyTW9kdWxlIHt9XG4iLCJleHBvcnQgY2xhc3MgQmFzZVR5cGUge1xuICBpZDogbnVtYmVyO1xuXG4gIGNyZWF0ZWRBdD86IHN0cmluZztcblxuICB1cGRhdGVkQXQ/OiBzdHJpbmc7XG5cbiAgZGVsZXRlZEF0Pzogc3RyaW5nO1xuXG4gIGNyZWF0ZWRCeT86IHN0cmluZztcblxuICB1cGRhdGVkQnk/OiBzdHJpbmc7XG5cbiAgZGVsZXRlZEJ5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUGFnZU1ldGEge1xuICB0b3RhbD86IG51bWJlcjtcblxuICB0b3RhbFBhZ2U/OiBudW1iZXI7XG5cbiAgcGFnZT86IG51bWJlcjtcblxuICBsaW1pdD86IG51bWJlcjtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYmFzZS50eXBlJztcbiIsImltcG9ydCB7IFBhcnRpYWxUeXBlIH0gZnJvbSAnQG5lc3Rqcy9tYXBwZWQtdHlwZXMnO1xuXG5pbXBvcnQgeyBCYXNlVHlwZSwgUGFnZU1ldGEgfSBmcm9tICcuLi9iYXNlJztcblxuaW1wb3J0IHsgRUJvb2tpbmdTdGF0dXMgfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIEJvb2tpbmcgZXh0ZW5kcyBCYXNlVHlwZSB7XG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgcGhvbmU/OiBzdHJpbmc7XG5cbiAgYWRkcmVzcz86IHN0cmluZztcblxuICBjaXR5Q29kZT86IG51bWJlcjtcblxuICBkaXN0cmljdENvZGU/OiBudW1iZXI7XG5cbiAgd2FyZENvZGU/OiBudW1iZXI7XG5cbiAgbWVyY2hhbnRJZD86IG51bWJlcjtcblxuICBjaXR5Pzogc3RyaW5nO1xuXG4gIGRpc3RyaWN0Pzogc3RyaW5nO1xuXG4gIHdhcmQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVCb29raW5nSW5wdXQge1xuICBuYW1lPzogc3RyaW5nO1xuXG4gIGVtYWlsPzogc3RyaW5nO1xuXG4gIHBob25lPzogc3RyaW5nO1xuXG4gIGFkZHJlc3M/OiBzdHJpbmc7XG5cbiAgbWVyY2hhbnRJZDogbnVtYmVyO1xuXG4gIGJyYW5jaElkOiBudW1iZXI7XG5cbiAgc2VydmljZUlkOiBudW1iZXI7XG5cbiAgc3RhdHVzPzogRUJvb2tpbmdTdGF0dXM7XG5cbiAgdXNlcklkPzogbnVtYmVyO1xuXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuXG4gIHN0YXJ0VGltZT86IHN0cmluZztcblxuICBlbmRUaW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQm9va2luZ1BhZ2luZyB7XG4gIGl0ZW1zPzogQm9va2luZ1tdO1xuICBtZXRhPzogUGFnZU1ldGE7XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2Jvb2tpbmcudHlwZSc7XG4iLCJleHBvcnQgKiBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgKiBmcm9tICcuL3VzZXInO1xuXG5leHBvcnQgKiBmcm9tICcuL21lcmNoYW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9ib29raW5nJztcbiIsImltcG9ydCB7IEJhc2VUeXBlLCBQYWdlTWV0YSB9IGZyb20gJy4uL2Jhc2UnO1xuXG5leHBvcnQgY2xhc3MgQnJhbmNoIGV4dGVuZHMgQmFzZVR5cGUge1xuICBuYW1lPzogc3RyaW5nO1xuXG4gIHBob25lPzogc3RyaW5nO1xuXG4gIGFkZHJlc3M/OiBzdHJpbmc7XG5cbiAgY2l0eUNvZGU/OiBudW1iZXI7XG5cbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyO1xuXG4gIHdhcmRDb2RlPzogbnVtYmVyO1xuXG4gIG1lcmNoYW50SWQ/OiBudW1iZXI7XG5cbiAgY2l0eT86IHN0cmluZztcblxuICBkaXN0cmljdD86IHN0cmluZztcblxuICB3YXJkPzogc3RyaW5nO1xuXG4gIGxhdGl0dWRlPzogbnVtYmVyO1xuXG4gIGxvbmdpdHVkZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEJyYW5jaFBhZ2luZyB7XG4gIGl0ZW1zPzogQnJhbmNoW107XG5cbiAgbWV0YT86IFBhZ2VNZXRhO1xufVxuIiwiaW1wb3J0IHsgQmFzZVR5cGUsIFBhZ2VNZXRhIH0gZnJvbSAnLi4vYmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIEJhc2VUeXBlIHtcbiAgbWVyY2hhbnRJZD86IG51bWJlcjtcblxuICBza3U/OiBzdHJpbmc7XG5cbiAgY29kZT86IHN0cmluZztcblxuICBuYW1lPzogc3RyaW5nO1xuXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIGltYWdlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgR3JvdXBQYWdpbmcge1xuICBpdGVtcz86IEdyb3VwW107XG5cbiAgbWV0YT86IFBhZ2VNZXRhO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9icmFuY2gudHlwZSc7XG5leHBvcnQgKiBmcm9tICcuL21lcmNoYW50LnR5cGUnO1xuZXhwb3J0ICogZnJvbSAnLi9ncm91cC50eXBlJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZS50eXBlJztcbiIsImltcG9ydCB7IENyZWF0ZUlucHV0IH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3MvbWVyY2hhbnQnO1xuXG5pbXBvcnQgeyBCcmFuY2ggfSBmcm9tICcuL2JyYW5jaC50eXBlJztcblxuaW1wb3J0IHsgQmFzZVR5cGUsIFBhZ2VNZXRhIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS90eXBlcy9iYXNlJztcblxuZXhwb3J0IGNsYXNzIE1lcmNoYW50IGV4dGVuZHMgQmFzZVR5cGUge1xuICBuYW1lPzogc3RyaW5nO1xuXG4gIHBob25lPzogc3RyaW5nO1xuXG4gIGFkZHJlc3M/OiBzdHJpbmc7XG5cbiAgY2l0eUNvZGU/OiBudW1iZXI7XG5cbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyO1xuXG4gIHdhcmRDb2RlPzogbnVtYmVyO1xuXG4gIHVzZXJJZD86IG51bWJlcjtcblxuICBicmFuY2hlcz86IEJyYW5jaFtdO1xufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlTWVyY2hhbnRJbnB1dCBpbXBsZW1lbnRzIENyZWF0ZUlucHV0IHtcbiAgbmFtZT86IHN0cmluZztcblxuICBwaG9uZT86IHN0cmluZztcblxuICBhZGRyZXNzPzogc3RyaW5nO1xuXG4gIGNpdHlDb2RlPzogbnVtYmVyO1xuXG4gIGRpc3RyaWN0Q29kZT86IG51bWJlcjtcblxuICB3YXJkQ29kZT86IG51bWJlcjtcblxuICBjaXR5Pzogc3RyaW5nO1xuXG4gIGRpc3RyaWN0Pzogc3RyaW5nO1xuXG4gIHdhcmQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBNZXJjaGFudFBhZ2luZyB7XG4gIGl0ZW1zPzogTWVyY2hhbnRbXTtcblxuICBtZXRhPzogUGFnZU1ldGE7XG59XG4iLCJpbXBvcnQgeyBCYXNlVHlwZSB9IGZyb20gJy4uL2Jhc2UnO1xuXG5pbXBvcnQgeyBFU2VydmljZVNob3dUeXBlLCBFU2VydmljZVR5cGUgfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIFNlcnZpY2UgZXh0ZW5kcyBCYXNlVHlwZSB7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXI7XG5cbiAgZ3JvdXBJZD86IG51bWJlcjtcblxuICBwcmljZT86IG51bWJlcjtcblxuICBpbml0aWFsUHJpY2U/OiBudW1iZXI7XG5cbiAgY2FwaXRhbFByaWNlPzogbnVtYmVyO1xuXG4gIGR1cmF0aW9uSG91cj86IG51bWJlcjtcblxuICBkdXJhdGlvbk1pbnV0ZT86IG51bWJlcjtcblxuICBza3U/OiBzdHJpbmc7XG5cbiAgY29kZT86IHN0cmluZztcblxuICBuYW1lPzogc3RyaW5nO1xuXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIGltYWdlPzogc3RyaW5nO1xuXG4gIHR5cGU/OiBFU2VydmljZVR5cGU7XG5cbiAgc2hvd1R5cGU/OiBFU2VydmljZVNob3dUeXBlO1xuXG4gIGNhblByaW50YWJsZUludm9pY2U/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlU2VydmljZUlucHV0IHtcbiAgbWVyY2hhbnRJZD86IG51bWJlcjtcblxuICBncm91cElkPzogbnVtYmVyO1xuXG4gIHByaWNlPzogbnVtYmVyO1xuXG4gIGluaXRpYWxQcmljZT86IG51bWJlcjtcblxuICBjYXBpdGFsUHJpY2U/OiBudW1iZXI7XG5cbiAgZHVyYXRpb25Ib3VyPzogbnVtYmVyO1xuXG4gIGR1cmF0aW9uTWludXRlPzogbnVtYmVyO1xuXG4gIHNrdT86IHN0cmluZztcblxuICBjb2RlPzogc3RyaW5nO1xuXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgaW1hZ2U/OiBzdHJpbmc7XG5cbiAgdHlwZT86IEVTZXJ2aWNlVHlwZTtcblxuICBzaG93VHlwZT86IEVTZXJ2aWNlU2hvd1R5cGU7XG5cbiAgY2FuUHJpbnRhYmxlSW52b2ljZT86IGJvb2xlYW47XG59XG4iLCJpbXBvcnQgeyBQYXJ0aWFsVHlwZSB9IGZyb20gJ0BuZXN0anMvbWFwcGVkLXR5cGVzJztcblxuaW1wb3J0IHsgRGV2aWNlSW5wdXREdG8gfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MnO1xuaW1wb3J0IHsgRURldmljZU9zIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zL2NvbW1vbic7XG5pbXBvcnQgeyBCYXNlVHlwZSwgUGFnZU1ldGEgfSBmcm9tICdAL2FwaS1nYXRld2F5L3R5cGVzL2Jhc2UnO1xuXG5leHBvcnQgY2xhc3MgRGV2aWNlIGV4dGVuZHMgQmFzZVR5cGUge1xuICB1c2VySWQ/OiBudW1iZXI7XG5cbiAgb3M/OiBFRGV2aWNlT3M7XG5cbiAgZGV2aWNlSWQ/OiBzdHJpbmc7XG5cbiAgdG9rZW4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJ0aWFsQXV0aERldmljZUlucHV0RHRvIGV4dGVuZHMgUGFydGlhbFR5cGU8RGV2aWNlSW5wdXREdG8+KERldmljZUlucHV0RHRvKSB7fVxuXG5leHBvcnQgY2xhc3MgRGV2aWNlUGFnaW5nIHtcbiAgaXRlbXM/OiBEZXZpY2VbXTtcblxuICBtZXRhPzogUGFnZU1ldGE7XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXIudHlwZSc7XG5leHBvcnQgKiBmcm9tICcuL2RldmljZS50eXBlJztcbiIsImltcG9ydCB7IFBhcnRpYWxUeXBlIH0gZnJvbSAnQG5lc3Rqcy9tYXBwZWQtdHlwZXMnO1xuXG5pbXBvcnQgeyBCYXNlVHlwZSwgUGFnZU1ldGEgfSBmcm9tICcuLy4uL2Jhc2UnO1xuXG5pbXBvcnQgeyBDcmVhdGVVc2VySW5wdXREdG8gfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MnO1xuaW1wb3J0IHsgRUN1c3RvbWVyTGV2ZWwsIEVVc2VyR2VuZGVyLCBFVXNlclJvbGUsIEVVc2VyU3RhdHVzIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zL2NvbW1vbic7XG5pbXBvcnQgeyBNZXJjaGFudCB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvdHlwZXMvbWVyY2hhbnQnO1xuaW1wb3J0IHsgRGV2aWNlUGFnaW5nIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS90eXBlcy91c2VyL2RldmljZS50eXBlJztcblxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlVHlwZSB7XG4gIGVtYWlsPzogc3RyaW5nO1xuXG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuXG4gIGZ1bGxOYW1lPzogc3RyaW5nO1xuXG4gIHN0YXR1cz86IEVVc2VyU3RhdHVzO1xuXG4gIHJvbGU/OiBFVXNlclJvbGU7XG5cbiAgZ2VuZGVyPzogRVVzZXJHZW5kZXI7XG5cbiAgbGV2ZWw/OiBFQ3VzdG9tZXJMZXZlbDtcblxuICBjb250YWN0Pzogc3RyaW5nO1xuXG4gIGRvYkRheT86IG51bWJlcjtcblxuICBkb2JNb250aD86IG51bWJlcjtcblxuICBkb2JZZWFyPzogbnVtYmVyO1xuXG4gIG9jY3VwYXRpb24/OiBzdHJpbmc7XG5cbiAgYXZhdGFyPzogc3RyaW5nO1xuXG4gIGFkZHJlc3M/OiBzdHJpbmc7XG5cbiAgY2l0eUNvZGU/OiBudW1iZXI7XG5cbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyO1xuXG4gIHdhcmRDb2RlPzogbnVtYmVyO1xuXG4gIHBob25lTnVtYmVyPzogc3RyaW5nO1xuXG4gIHJlZmVycmVyPzogc3RyaW5nO1xuXG4gIHJlZmVycmVyQ29kZT86IHN0cmluZztcblxuICBjdXN0b21lckNvZGU/OiBzdHJpbmc7XG5cbiAgZmFjZWJvb2s/OiBzdHJpbmc7XG5cbiAgemFsb1Bob25lPzogc3RyaW5nO1xuXG4gIGhlaWdodD86IG51bWJlcjtcblxuICB3ZWlnaHQ/OiBudW1iZXI7XG5cbiAgbWVtYmVyQ2FyZE5vPzogc3RyaW5nO1xuXG4gIGNvbXBhbnk/OiBzdHJpbmc7XG5cbiAgdGF4Tm8/OiBzdHJpbmc7XG5cbiAgbm90ZT86IHN0cmluZztcblxuICByZWxhdGVkVXNlcj86IHN0cmluZztcblxuICByZWxhdGVkVXNlclJvbGU/OiBzdHJpbmc7XG5cbiAgcmVsYXRlZFVzZXJQaG9uZT86IHN0cmluZztcblxuICBicmFuY2hJZD86IG51bWJlcjtcblxuICBsYXRpdHVkZT86IG51bWJlcjtcblxuICBsb25naXR1ZGU/OiBudW1iZXI7XG5cbiAgbWVyY2hhbnRzPzogTWVyY2hhbnRbXTtcblxuICBkZXZpY2VzPzogRGV2aWNlUGFnaW5nO1xufVxuZXhwb3J0IGNsYXNzIFVwZGF0ZVBhcnRpYWxVc2VyIGV4dGVuZHMgUGFydGlhbFR5cGU8Q3JlYXRlVXNlcklucHV0RHRvPihDcmVhdGVVc2VySW5wdXREdG8pIHt9XG5cbmV4cG9ydCBjbGFzcyBVc2VyUGFnaW5nIHtcbiAgaXRlbXM/OiBVc2VyW107XG4gIG1ldGE/OiBQYWdlTWV0YTtcbn1cbiIsImltcG9ydCB7IE9wLCBPcGVyYXRvcnNBbGlhc2VzIH0gZnJvbSAnc2VxdWVsaXplJztcblxuZXhwb3J0IGNvbnN0IG9wZXJhdG9yc0FsaWFzZXM6IE9wZXJhdG9yc0FsaWFzZXMgPSB7XG4gIF9hbmQ6IE9wLmFuZCxcbiAgX29yOiBPcC5vcixcbiAgX2VxOiBPcC5lcSxcbiAgX25lOiBPcC5uZSxcbiAgX2lzOiBPcC5pcyxcbiAgX25vdDogT3Aubm90LFxuICBfY29sOiBPcC5jb2wsXG4gIF9ndDogT3AuZ3QsXG4gIF9ndGU6IE9wLmd0ZSxcbiAgX2x0OiBPcC5sdCxcbiAgX2x0ZTogT3AubHRlLFxuICBfYmV0d2VlbjogT3AuYmV0d2VlbixcbiAgX25vdEJldHdlZW46IE9wLm5vdEJldHdlZW4sXG4gIF9hbGw6IE9wLmFsbCxcbiAgX2luOiBPcC5pbixcbiAgX25vdEluOiBPcC5ub3RJbixcbiAgX2xpa2U6IE9wLmxpa2UsXG4gIF9ub3RMaWtlOiBPcC5ub3RMaWtlLFxuICBfc3RhcnRzV2l0aDogT3Auc3RhcnRzV2l0aCxcbiAgX2VuZHNXaXRoOiBPcC5lbmRzV2l0aCxcbiAgX3N1YnN0cmluZzogT3Auc3Vic3RyaW5nLFxuICBfaUxpa2U6IE9wLmlMaWtlLFxuICBfbm90SUxpa2U6IE9wLm5vdElMaWtlLFxuICBfcmVnZXhwOiBPcC5yZWdleHAsXG4gIF9ub3RSZWdleHA6IE9wLm5vdFJlZ2V4cCxcbiAgX2lSZWdleHA6IE9wLmlSZWdleHAsXG4gIF9ub3RJUmVnZXhwOiBPcC5ub3RJUmVnZXhwLFxuICBfYW55OiBPcC5hbnksXG4gIF9jb250YWluczogT3AuY29udGFpbnMsXG4gIF9jb250YWluZWQ6IE9wLmNvbnRhaW5lZCxcbiAgX292ZXJsYXA6IE9wLm92ZXJsYXAsXG4gIF9hZGphY2VudDogT3AuYWRqYWNlbnQsXG4gIF9zdHJpY3RMZWZ0OiBPcC5zdHJpY3RMZWZ0LFxuICBfc3RyaWN0UmlnaHQ6IE9wLnN0cmljdFJpZ2h0LFxuICBfbm9FeHRlbmRSaWdodDogT3Aubm9FeHRlbmRSaWdodCxcbiAgX25vRXh0ZW5kTGVmdDogT3Aubm9FeHRlbmRMZWZ0LFxuICBfdmFsdWVzOiBPcC52YWx1ZXMsXG59O1xuXG5leHBvcnQgY29uc3QgTElNSVQgPSAxMDtcblxuZXhwb3J0IGNvbnN0IFBBR0UgPSAxO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9kYXRhYmFzZS5jb25zdGFudCc7XG4iLCJleHBvcnQgKiBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UnO1xuIiwiZXhwb3J0IGNvbnN0IEFVVEhfTUVTU0FHRSA9IHtcbiAgTE9HSU46IHtcbiAgICBJTlZBTElEOiAnSW52YWxpZCBjcmVkZW50aWFscy4nLFxuICB9LFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vYXV0aC5tZXNzYWdlJztcbiIsImV4cG9ydCBjb25zdCBDT01NT05fTUVTU0FHRSA9IHtcbiAgSU5WQUxJRDogJ0ludmFsaWQgcmVxdWVzdCcsXG4gIENSRUFURToge1xuICAgIEVYSVNUX0VNQUlMOiAnVGhlIGVtYWlsIGlzIGV4aXN0JyxcbiAgfSxcbiAgUkVBRDoge1xuICAgIE5PVF9GT1VORDogJ1RoZSBtZXJjaGFudCBub3QgZm91bmQnLFxuICB9LFxuICBVUERBVEU6IHtcbiAgICBGQUlMOiAnQ2FuIG5vdCB1cGRhdGUgbWVyY2hhbnQnLFxuICB9LFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5cbmV4cG9ydCAqIGZyb20gJy4vbWVyY2hhbnQnO1xuXG5leHBvcnQgKiBmcm9tICcuL2F1dGgnO1xuXG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbi5tZXNzYWdlJztcbiIsImV4cG9ydCBjb25zdCBCUkFOQ0hfTUVTU0FHRSA9IHtcbiAgUkVBRDoge1xuICAgIE5PVF9GT1VORDogJ1RoZSBicmFuY2ggbm90IGZvdW5kJyxcbiAgfSxcbiAgQ1JFQVRFOiB7XG4gICAgRVhJU1RFRDogJ1RoZSBicmFuY2ggaXMgZXhpc3QnLFxuICB9LFxuICBVUERBVEU6IHtcbiAgICBGQUlMOiAnQ2FuIG5vdCB1cGRhdGUgdXNlcicsXG4gICAgSU5WQUxJRF9QQVNTV09SRDogJ0Vycm9yIHVwZGF0aW5nIHBhc3N3b3JkLiBLaW5kbHkgY2hlY2sgeW91ciBwYXNzd29yZHMnLFxuICB9LFxuICBERUxFVEU6IHtcbiAgICBGQUlMOiAnRGVsZXRlIGJyYW5jaCBmYWlsZWQnLFxuICAgIFNVQ0NFU1M6ICdEZWxldGUgYnJhbmNoIHN1Y2Nlc3NmdWxseScsXG4gIH0sXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudC5tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vYnJhbmNoLm1lc3NhZ2UnO1xuIiwiZXhwb3J0IGNvbnN0IE1FUkNIQU5UX01FU1NBR0UgPSB7XG4gIENSRUFURToge1xuICAgIEVYSVNUX0VNQUlMOiAnVGhlIGVtYWlsIGlzIGV4aXN0JyxcbiAgfSxcbiAgUkVBRDoge1xuICAgIE5PVF9GT1VORDogJ1RoZSBtZXJjaGFudCBub3QgZm91bmQnLFxuICB9LFxuICBVUERBVEU6IHtcbiAgICBGQUlMOiAnQ2FuIG5vdCB1cGRhdGUgbWVyY2hhbnQnLFxuICB9LFxufTtcbiIsImV4cG9ydCBjb25zdCBDVVNUT01FUl9NRVNTQUdFID0ge1xuICBDUkVBVEU6IHtcbiAgICBFWElTVF9FTUFJTDogJ1RoZSBlbWFpbCBpcyBleGlzdCcsXG4gICAgU1VDQ0VTU0ZVTDogJ0NyZWF0ZSBjdXN0b21lciBzdWNjZXNzZnVsbHknLFxuICB9LFxuICBVUERBVEU6IHtcbiAgICBGQUlMOiAnQ2FuIG5vdCB1cGRhdGUgY3VzdG9tZXInLFxuICAgIElOVkFMSURfUEFTU1dPUkQ6ICdFcnJvciB1cGRhdGluZyBwYXNzd29yZC4gS2luZGx5IGNoZWNrIHlvdXIgcGFzc3dvcmRzJyxcbiAgfSxcbiAgUkVBRDoge1xuICAgIE5PVF9GT1VORDogJ1RoZSBjdXN0b21lciBub3QgZm91bmQnLFxuICB9LFxuICBERUxFVEU6IHtcbiAgICBGQUlMOiAnQ2FuIG5vdCByZW1vdmUgdGhlIGN1c3RvbWVyJyxcbiAgfSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXIubWVzc2FnZSc7XG5leHBvcnQgKiBmcm9tICcuL2N1c3RvbWVyLm1lc3NhZ2UnO1xuIiwiZXhwb3J0IGNvbnN0IFVTRVJfTUVTU0FHRSA9IHtcbiAgQ1JFQVRFOiB7XG4gICAgRVhJU1RfRU1BSUw6ICdUaGUgZW1haWwgaXMgZXhpc3QnLFxuICB9LFxuICBSRUFEOiB7XG4gICAgTk9UX0ZPVU5EOiAnVGhlIHVzZXIgbm90IGZvdW5kJyxcbiAgfSxcbiAgVVBEQVRFOiB7XG4gICAgRkFJTDogJ0NhbiBub3QgdXBkYXRlIHVzZXInLFxuICAgIElOVkFMSURfUEFTU1dPUkQ6ICdFcnJvciB1cGRhdGluZyBwYXNzd29yZC4gS2luZGx5IGNoZWNrIHlvdXIgcGFzc3dvcmRzJyxcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBIdHRwRXhjZXB0aW9uLCBIdHRwU3RhdHVzIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUnBjRXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcblxuZXhwb3J0IGNsYXNzIEVycm9ySGVscGVyIHtcbiAgc3RhdGljIEJhZFJlcXVlc3RFeGNlcHRpb24obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IFJwY0V4Y2VwdGlvbih7XG4gICAgICBjb2RlOiBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgbWVzc2FnZSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBIdHRwQmFkUmVxdWVzdEV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgSHR0cEV4Y2VwdGlvbihtZXNzYWdlLCBIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKTtcbiAgfVxuXG4gIHN0YXRpYyBVbmF1dGhvcml6ZWRFeGNlcHRpb24obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IFJwY0V4Y2VwdGlvbih7XG4gICAgICBjb2RlOiBIdHRwU3RhdHVzLlVOQVVUSE9SSVpFRCxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgSHR0cFVuYXV0aG9yaXplZEV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgSHR0cEV4Y2VwdGlvbihtZXNzYWdlLCBIdHRwU3RhdHVzLlVOQVVUSE9SSVpFRCk7XG4gIH1cblxuICBzdGF0aWMgTm90Rm91bmRFeGNlcHRpb24obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IFJwY0V4Y2VwdGlvbih7XG4gICAgICBjb2RlOiBIdHRwU3RhdHVzLk5PVF9GT1VORCxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgSHR0cE5vdEZvdW5kRXhjZXB0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKG1lc3NhZ2UsIEh0dHBTdGF0dXMuTk9UX0ZPVU5EKTtcbiAgfVxuXG4gIHN0YXRpYyBGb3JiaWRkZW5FeGNlcHRpb24obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IFJwY0V4Y2VwdGlvbih7XG4gICAgICBjb2RlOiBIdHRwU3RhdHVzLkZPUkJJRERFTixcbiAgICAgIG1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgSHR0cEZvcmJpZGRlbkV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgSHR0cEV4Y2VwdGlvbihtZXNzYWdlLCBIdHRwU3RhdHVzLkZPUkJJRERFTik7XG4gIH1cblxuICBzdGF0aWMgSW50ZXJuYWxTZXJ2ZXJFcnJvckV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgUnBjRXhjZXB0aW9uKHtcbiAgICAgIGNvZGU6IEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgICAgbWVzc2FnZSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBIdHRwSW50ZXJuYWxTZXJ2ZXJFcnJvckV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgSHR0cEV4Y2VwdGlvbihtZXNzYWdlLCBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUik7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBudW1iZXJJbnB1dHMgPSAoXG4gIGlucHV0OiBvYmplY3QgPSB7fSxcbik6IHtcbiAgW2tleTogc3RyaW5nXTogbnVtYmVyO1xufSA9PlxuICBPYmplY3Qua2V5cyhpbnB1dCkucmVkdWNlKChhY2M6IHVua25vd24sIHZhbDogc3RyaW5nKSA9PiB7XG4gICAgYWNjW3ZhbF0gPSAraW5wdXRbdmFsXSBhcyBudW1iZXI7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBzdHIgPSBzdHIucmVwbGFjZSgvQXzDgXzDgHzDg3zhuqB8w4J84bqkfOG6pnzhuqp84bqsfMSCfOG6rnzhurB84bq0fOG6ti9nLCAnQScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvw6B8w6F84bqhfOG6o3zDo3zDonzhuqd84bqlfOG6rXzhuql84bqrfMSDfOG6sXzhuq984bq3fOG6s3zhurUvZywgJ2EnKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL0V8w4l8w4h84bq8fOG6uHzDinzhur584buAfOG7hHzhu4YvLCAnRScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvw6h8w6l84bq5fOG6u3zhur18w6p84buBfOG6v3zhu4d84buDfOG7hS9nLCAnZScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvSXzDjXzDjHzEqHzhu4ovZywgJ0knKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL8OsfMOtfOG7i3zhu4l8xKkvZywgJ2knKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL098w5N8w5J8w5V84buMfMOUfOG7kHzhu5J84buWfOG7mHzGoHzhu5p84bucfOG7oHzhu6IvZywgJ08nKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL8OyfMOzfOG7jXzhu498w7V8w7R84buTfOG7kXzhu5l84buVfOG7l3zGoXzhu5184bubfOG7o3zhu5984buhL2csICdvJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9VfMOafMOZfMWofOG7pHzGr3zhu6h84buqfOG7rnzhu7AvZywgJ1UnKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL8O5fMO6fOG7pXzhu6d8xal8xrB84burfOG7qXzhu7F84butfOG7ry9nLCAndScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvWXzDnXzhu7J84bu4fOG7tC9nLCAnWScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgv4buzfMO9fOG7tXzhu7d84bu5L2csICd5Jyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC/EkC9nLCAnRCcpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvxJEvZywgJ2QnKTtcbiAgLy8gU29tZSBzeXN0ZW0gZW5jb2RlIHZpZXRuYW1lc2UgY29tYmluaW5nIGFjY2VudCBhcyBpbmRpdmlkdWFsIHV0Zi04IGNoYXJhY3RlcnNcbiAgc3RyID0gc3RyLnJlcGxhY2UoL1xcdTAzMDB8XFx1MDMwMXxcXHUwMzAzfFxcdTAzMDl8XFx1MDMyMy9nLCAnJyk7IC8vIEh1eeG7gW4gc+G6r2MgaOG7j2kgbmfDoyBu4bq3bmdcbiAgc3RyID0gc3RyLnJlcGxhY2UoL1xcdTAyQzZ8XFx1MDMwNnxcXHUwMzFCL2csICcnKTsgLy8gw4IsIMOKLCDEgiwgxqAsIMavXG4gIHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9wZXJ0eShjbGFzc05hbWUgPSAnZmllbGRzJywgZGVmYXVsdFZhbHVlOiB1bmtub3duID0gdW5kZWZpbmVkKTogUHJvcGVydHlEZWNvcmF0b3Ige1xuICByZXR1cm4gKHRhcmdldDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIG5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0W25hbWVdID0gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoY2xhc3NOYW1lLCB0cnVlLCB0YXJnZXQsIG5hbWUpO1xuICB9O1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC51dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL3F1ZXJ5LnV0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vZ2VuZXJhbC51dGlsJztcbmV4cG9ydCAqIGZyb20gJy4vZXJyb3IuaGVscGVyJztcbiIsImltcG9ydCB7IGhhc2gsIHZlcmlmeSB9IGZyb20gJ2FyZ29uMic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXNzd29yZFV0aWxzIHtcbiAgYXN5bmMgY29tcGFyZShwYXNzd29yZDogc3RyaW5nLCBoYXNoOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdmVyaWZ5KGhhc2gsIHBhc3N3b3JkKTtcbiAgfVxuXG4gIGFzeW5jIGhhc2gocGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgaWYgKGlzRW1wdHkocGFzc3dvcmQpIHx8IHBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc2gocGFzc3dvcmQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJUXVlcnkgfSBmcm9tICdAbGlicy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBpc0VtcHR5LCBpc05pbCwgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUXVlcnlVdGlscyB7XG4gIGFzeW5jIGdldEZpbHRlcnMoZmlsdGVyQnk6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIGFueT4+IHtcbiAgICBjb25zdCBxdWVyeUZpbHRlcnMgPSB7IHdoZXJlOiB7fSB9O1xuXG4gICAgaWYgKCFpc0VtcHR5KGZpbHRlckJ5KSkgT2JqZWN0LmFzc2lnbihxdWVyeUZpbHRlcnMud2hlcmUsIGZpbHRlckJ5KTtcblxuICAgIHJldHVybiBxdWVyeUZpbHRlcnM7XG4gIH1cblxuICBhc3luYyBnZXRPcmRlcihvcmRlckJ5OiBzdHJpbmcpOiBQcm9taXNlPElRdWVyeT4ge1xuICAgIGNvbnN0IHF1ZXJ5T3JkZXI6IElRdWVyeSA9IHt9O1xuXG4gICAgaWYgKCFpc0VtcHR5KG9yZGVyQnkpKSB7XG4gICAgICBpZiAob3JkZXJCeS50cmltKCkuY2hhckF0KDApID09PSAnLScpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeU9yZGVyLCB7IG9yZGVyQnk6IFtvcmRlckJ5LnRyaW0oKS5zdWJzdHIoMSksICdERVNDJ10gfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5T3JkZXIsIHsgb3JkZXJCeTogW29yZGVyQnkudHJpbSgpLCAnQVNDJ10gfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5T3JkZXI7XG4gIH1cblxuICBhc3luYyBnZXRDdXJzb3IoZmlyc3Q6IG51bWJlciwgbGFzdDogbnVtYmVyLCBiZWZvcmU6IHN0cmluZywgYWZ0ZXI6IHN0cmluZyk6IFByb21pc2U8SVF1ZXJ5PiB7XG4gICAgY29uc3QgcXVlcnlDdXJzb3I6IElRdWVyeSA9IHt9O1xuXG4gICAgaWYgKCFpc05pbChmaXJzdCkpIE9iamVjdC5hc3NpZ24ocXVlcnlDdXJzb3IsIHsgbGltaXQ6IGZpcnN0IH0pO1xuXG4gICAgaWYgKCFpc0VtcHR5KGFmdGVyKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeUN1cnNvciwgeyBhZnRlciwgbGltaXQ6IGZpcnN0IH0pO1xuICAgIH0gZWxzZSBpZiAoIWlzRW1wdHkoYmVmb3JlKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeUN1cnNvciwgeyBiZWZvcmUsIGxpbWl0OiBsYXN0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeUN1cnNvcjtcbiAgfVxuXG4gIGFzeW5jIGJ1aWxkUXVlcnkob3JkZXJCeTogc3RyaW5nLCBmaXJzdDogbnVtYmVyLCBsYXN0OiBudW1iZXIsIGJlZm9yZTogc3RyaW5nLCBhZnRlcjogc3RyaW5nKTogUHJvbWlzZTxJUXVlcnk+IHtcbiAgICByZXR1cm4gbWVyZ2Uoe30sIGF3YWl0IHRoaXMuZ2V0T3JkZXIob3JkZXJCeSksIGF3YWl0IHRoaXMuZ2V0Q3Vyc29yKGZpcnN0LCBsYXN0LCBiZWZvcmUsIGFmdGVyKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuaW1wb3J0IHsgUXVlcnlVdGlscyB9IGZyb20gJy4vcXVlcnkudXRpbHMnO1xuaW1wb3J0IHsgUGFzc3dvcmRVdGlscyB9IGZyb20gJy4vcGFzc3dvcmQudXRpbHMnO1xuXG5ATW9kdWxlKHtcbiAgZXhwb3J0czogW1F1ZXJ5VXRpbHMsIFBhc3N3b3JkVXRpbHNdLFxuICBwcm92aWRlcnM6IFtRdWVyeVV0aWxzLCBQYXNzd29yZFV0aWxzXSxcbn0pXG5leHBvcnQgY2xhc3MgVXRpbHNNb2R1bGUge31cbiIsImltcG9ydCB7IG9wZXJhdG9yc0FsaWFzZXMgfSBmcm9tICdAbGlicy9jb3JlJztcbmltcG9ydCB7IEJvb2tpbmdNb2RlbCB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlL2VudGl0aWVzL2Jvb2tpbmcnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgU2VxdWVsaXplTW9kdWxlLCBTZXF1ZWxpemVNb2R1bGVPcHRpb25zIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuaW1wb3J0IHsgQWJzdHJhY3RTZWNyZXRzU2VydmljZSB9IGZyb20gJ2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9hZGFwdGVyJztcbmltcG9ydCB7IFNlY3JldHNNb2R1bGUgfSBmcm9tICdsaWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvbW9kdWxlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTZXF1ZWxpemVNb2R1bGUuZm9yUm9vdEFzeW5jKHtcbiAgICAgIGltcG9ydHM6IFtTZWNyZXRzTW9kdWxlXSxcbiAgICAgIHVzZUZhY3Rvcnk6IGFzeW5jIChzZWNyZXRzOiBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlKTogUHJvbWlzZTxTZXF1ZWxpemVNb2R1bGVPcHRpb25zPiA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGlhbGVjdDogJ3Bvc3RncmVzJyxcbiAgICAgICAgICAuLi5zZWNyZXRzLmJvb2tpbmdTZXJ2aWNlRGF0YWJhc2UsXG4gICAgICAgICAgbG9nZ2luZzogZmFsc2UsXG4gICAgICAgICAgdHlwZVZhbGlkYXRpb246IHRydWUsXG4gICAgICAgICAgb3BlcmF0b3JzQWxpYXNlczogb3BlcmF0b3JzQWxpYXNlcyxcbiAgICAgICAgICBtb2RlbHM6IFtCb29raW5nTW9kZWxdLFxuICAgICAgICAgIGF1dG9Mb2FkTW9kZWxzOiB0cnVlLFxuICAgICAgICAgIHN5bmNocm9uaXplOiB0cnVlLFxuICAgICAgICAgIC8vIHN5bmM6IHtcbiAgICAgICAgICAvLyAgIGZvcmNlOiB0cnVlLFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIHJhdzogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlZmluZToge1xuICAgICAgICAgICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgICAgICAgICAgIHVuZGVyc2NvcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmVyc2lvbjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpYWxlY3RPcHRpb25zOiB7XG4gICAgICAgICAgICBjaGFyc2V0OiAndXRmOCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBpbmplY3Q6IFtBYnN0cmFjdFNlY3JldHNTZXJ2aWNlXSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQm9va2luZ0RhdGFiYXNlTW9kdWxlIHt9XG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXInO1xuXG5leHBvcnQgKiBmcm9tICcuL21lcmNoYW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9ib29raW5nJztcblxuZXhwb3J0ICogZnJvbSAnLi9ub3RpZmljYXRpb24nO1xuIiwiaW1wb3J0IHsgb3BlcmF0b3JzQWxpYXNlcyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuaW1wb3J0IHtcbiAgQnJhbmNoTW9kZWwsXG4gIEdyb3VwTW9kZWwsXG4gIEltYWdlTW9kZWwsXG4gIE1lcmNoYW50TW9kZWwsXG4gIFNlcnZlSW1hZ2VNb2RlbCxcbiAgU2VydmljZU1vZGVsLFxufSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBTZXF1ZWxpemVNb2R1bGUsIFNlcXVlbGl6ZU1vZHVsZU9wdGlvbnMgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlIH0gZnJvbSAnbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL2FkYXB0ZXInO1xuaW1wb3J0IHsgU2VjcmV0c01vZHVsZSB9IGZyb20gJ2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9tb2R1bGUnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNlcXVlbGl6ZU1vZHVsZS5mb3JSb290QXN5bmMoe1xuICAgICAgaW1wb3J0czogW1NlY3JldHNNb2R1bGVdLFxuICAgICAgdXNlRmFjdG9yeTogYXN5bmMgKHNlY3JldHM6IEFic3RyYWN0U2VjcmV0c1NlcnZpY2UpOiBQcm9taXNlPFNlcXVlbGl6ZU1vZHVsZU9wdGlvbnM+ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkaWFsZWN0OiAncG9zdGdyZXMnLFxuICAgICAgICAgIC4uLnNlY3JldHMubWVyY2hhbnRTZXJ2aWNlRGF0YWJhc2UsXG4gICAgICAgICAgbG9nZ2luZzogZmFsc2UsXG4gICAgICAgICAgdHlwZVZhbGlkYXRpb246IHRydWUsXG4gICAgICAgICAgb3BlcmF0b3JzQWxpYXNlczogb3BlcmF0b3JzQWxpYXNlcyxcbiAgICAgICAgICBtb2RlbHM6IFtNZXJjaGFudE1vZGVsLCBCcmFuY2hNb2RlbCwgR3JvdXBNb2RlbCwgU2VydmljZU1vZGVsLCBJbWFnZU1vZGVsLCBTZXJ2ZUltYWdlTW9kZWxdLFxuICAgICAgICAgIGF1dG9Mb2FkTW9kZWxzOiB0cnVlLFxuICAgICAgICAgIHN5bmNocm9uaXplOiB0cnVlLFxuICAgICAgICAgIC8vIHN5bmM6IHtcbiAgICAgICAgICAvLyAgIGZvcmNlOiB0cnVlLFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIHJhdzogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlZmluZToge1xuICAgICAgICAgICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgICAgICAgICAgIHVuZGVyc2NvcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmVyc2lvbjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpYWxlY3RPcHRpb25zOiB7XG4gICAgICAgICAgICBjaGFyc2V0OiAndXRmOCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBpbmplY3Q6IFtBYnN0cmFjdFNlY3JldHNTZXJ2aWNlXSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVyY2hhbnREYXRhYmFzZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgb3BlcmF0b3JzQWxpYXNlcyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBTZXF1ZWxpemVNb2R1bGUsIFNlcXVlbGl6ZU1vZHVsZU9wdGlvbnMgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlIH0gZnJvbSAnbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL2FkYXB0ZXInO1xuaW1wb3J0IHsgU2VjcmV0c01vZHVsZSB9IGZyb20gJ2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9tb2R1bGUnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNlcXVlbGl6ZU1vZHVsZS5mb3JSb290QXN5bmMoe1xuICAgICAgaW1wb3J0czogW1NlY3JldHNNb2R1bGVdLFxuICAgICAgdXNlRmFjdG9yeTogYXN5bmMgKHNlY3JldHM6IEFic3RyYWN0U2VjcmV0c1NlcnZpY2UpOiBQcm9taXNlPFNlcXVlbGl6ZU1vZHVsZU9wdGlvbnM+ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkaWFsZWN0OiAncG9zdGdyZXMnLFxuICAgICAgICAgIC4uLnNlY3JldHMubm90aWZpY2F0aW9uU2VydmljZURhdGFiYXNlLFxuICAgICAgICAgIGxvZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgIHR5cGVWYWxpZGF0aW9uOiB0cnVlLFxuICAgICAgICAgIG9wZXJhdG9yc0FsaWFzZXM6IG9wZXJhdG9yc0FsaWFzZXMsXG4gICAgICAgICAgbW9kZWxzOiBbTm90aWZpY2F0aW9uTW9kZWxdLFxuICAgICAgICAgIGF1dG9Mb2FkTW9kZWxzOiB0cnVlLFxuICAgICAgICAgIHN5bmNocm9uaXplOiB0cnVlLFxuICAgICAgICAgIHN5bmM6IHtcbiAgICAgICAgICAgIGZvcmNlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIHJhdzogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlZmluZToge1xuICAgICAgICAgICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgICAgICAgICAgIHVuZGVyc2NvcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmVyc2lvbjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpYWxlY3RPcHRpb25zOiB7XG4gICAgICAgICAgICBjaGFyc2V0OiAndXRmOCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBpbmplY3Q6IFtBYnN0cmFjdFNlY3JldHNTZXJ2aWNlXSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uRGF0YWJhc2VNb2R1bGUge31cbiIsImltcG9ydCB7IG9wZXJhdG9yc0FsaWFzZXMgfSBmcm9tICdAbGlicy9jb3JlJztcbmltcG9ydCB7IERldmljZU1vZGVsLCBNZXJjaGFudFVzZXJNb2RlbCwgVXNlck1vZGVsIH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvZW50aXRpZXMnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgU2VxdWVsaXplTW9kdWxlLCBTZXF1ZWxpemVNb2R1bGVPcHRpb25zIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuaW1wb3J0IHsgQWJzdHJhY3RTZWNyZXRzU2VydmljZSB9IGZyb20gJ2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9hZGFwdGVyJztcbmltcG9ydCB7IFNlY3JldHNNb2R1bGUgfSBmcm9tICdsaWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvbW9kdWxlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTZXF1ZWxpemVNb2R1bGUuZm9yUm9vdEFzeW5jKHtcbiAgICAgIGltcG9ydHM6IFtTZWNyZXRzTW9kdWxlXSxcbiAgICAgIHVzZUZhY3Rvcnk6IGFzeW5jIChzZWNyZXRzOiBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlKTogUHJvbWlzZTxTZXF1ZWxpemVNb2R1bGVPcHRpb25zPiA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGlhbGVjdDogJ3Bvc3RncmVzJyxcbiAgICAgICAgICAuLi5zZWNyZXRzLnVzZXJTZXJ2aWNlRGF0YWJhc2UsXG4gICAgICAgICAgbG9nZ2luZzogZmFsc2UsXG4gICAgICAgICAgdHlwZVZhbGlkYXRpb246IHRydWUsXG4gICAgICAgICAgb3BlcmF0b3JzQWxpYXNlczogb3BlcmF0b3JzQWxpYXNlcyxcbiAgICAgICAgICBtb2RlbHM6IFtVc2VyTW9kZWwsIERldmljZU1vZGVsLCBNZXJjaGFudFVzZXJNb2RlbF0sXG4gICAgICAgICAgYXV0b0xvYWRNb2RlbHM6IHRydWUsXG4gICAgICAgICAgc3luY2hyb25pemU6IHRydWUsXG4gICAgICAgICAgLy8gc3luYzoge1xuICAgICAgICAgIC8vICAgZm9yY2U6IHRydWUsXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgcmF3OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVmaW5lOiB7XG4gICAgICAgICAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICAgICAgICAgICAgdW5kZXJzY29yZWQ6IHRydWUsXG4gICAgICAgICAgICB2ZXJzaW9uOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGlhbGVjdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNoYXJzZXQ6ICd1dGY4JyxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGluamVjdDogW0Fic3RyYWN0U2VjcmV0c1NlcnZpY2VdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyRGF0YWJhc2VNb2R1bGUge31cbiIsImltcG9ydCB7IENvbHVtbiwgRGF0YVR5cGUsIE1vZGVsIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZU1vZGVsPFQ+IGV4dGVuZHMgTW9kZWw8VD4ge1xuICBAQ29sdW1uKHtcbiAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgdHlwZTogRGF0YVR5cGUuSU5URUdFUixcbiAgfSlcbiAgaWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5EQVRFLFxuICAgIGRlZmF1bHRWYWx1ZTogRGF0YVR5cGUuTk9XLFxuICAgIGFsbG93TnVsbDogZmFsc2UsXG4gIH0pXG4gIGNyZWF0ZWRBdD86IHN0cmluZztcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5EQVRFLFxuICAgIGRlZmF1bHRWYWx1ZTogRGF0YVR5cGUuTk9XLFxuICAgIGFsbG93TnVsbDogZmFsc2UsXG4gIH0pXG4gIHVwZGF0ZWRBdD86IHN0cmluZztcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5EQVRFLFxuICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgfSlcbiAgZGVsZXRlZEF0Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLklOVEVHRVIsXG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICBkZWZhdWx0VmFsdWU6IDAsXG4gIH0pXG4gIHZlcnNpb24/OiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvZW50aXRpZXMvYmFzZS5tb2RlbCc7XG5pbXBvcnQgeyBFQm9va2luZ1N0YXR1cyB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL2NvbW1vbnMnO1xuaW1wb3J0IHsgQmVmb3JlQ3JlYXRlLCBCZWZvcmVVcGRhdGUsIENvbHVtbiwgRGF0YVR5cGUsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuXG5AVGFibGUoe1xuICBtb2RlbE5hbWU6ICdib29raW5nJyxcbiAgdGFibGVOYW1lOiAnYm9va2luZ3MnLFxuICB1bmRlcnNjb3JlZDogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgQm9va2luZ01vZGVsIGV4dGVuZHMgQmFzZU1vZGVsPEJvb2tpbmdNb2RlbD4ge1xuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBzdGF0dXM/OiBFQm9va2luZ1N0YXR1cztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBzZXJ2aWNlTmFtZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBzZXJ2aWNlSWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgdXNlcklkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHVzZXJFbWFpbD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICB1c2VyUGhvbmVOdW1iZXI/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgbWVyY2hhbnRJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBicmFuY2hJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBzdGFydFRpbWU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZW5kVGltZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBub3RlPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGNhbmNlbFJlYXNvbj86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBib29raW5nRGF0ZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBkdXJhdGlvbkhvdXI/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZHVyYXRpb25NaW51dGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZHVyYXRpb24/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuVEVYVCxcbiAgICBhbGxvd051bGw6IHRydWUsXG4gIH0pXG4gIHNlYXJjaD86IHN0cmluZztcblxuICBAQmVmb3JlQ3JlYXRlXG4gIEBCZWZvcmVVcGRhdGVcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVNlYXJjaChtb2RlbDogQm9va2luZ01vZGVsKSB7XG4gICAgY29uc3QgY29sdW1uc1RvQ29uY2F0ZW5hdGUgPSBbXG4gICAgICAnc3RhdHVzJyxcbiAgICAgICdjYW5jZWxSZWFzb24nLFxuICAgICAgJ3NlcnZpY2VOYW1lJyxcbiAgICAgICdzdGFydFRpbWUnLFxuICAgICAgJ2VuZFRpbWUnLFxuICAgICAgJ25vdGUnLFxuICAgICAgJ2Jvb2tpbmdEYXRlJyxcbiAgICBdO1xuICAgIGNvbnN0IGNvbmNhdGVuYXRlZFZhbHVlcyA9IGNvbHVtbnNUb0NvbmNhdGVuYXRlXG4gICAgICAubWFwKChjb2x1bW5OYW1lKSA9PiAobW9kZWwuZ2V0KGNvbHVtbk5hbWUpID8gbW9kZWwuZ2V0KGNvbHVtbk5hbWUpIDogJyAnKSlcbiAgICAgIC5qb2luKCcgJyk7XG5cbiAgICBtb2RlbC5zZXREYXRhVmFsdWUoJ3NlYXJjaCcsIGNvbmNhdGVuYXRlZFZhbHVlcy5jb25jYXQoJyAnLCB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyhjb25jYXRlbmF0ZWRWYWx1ZXMpKSk7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYm9va2luZy5tb2RlbCc7XG4iLCIvLyB1c2VyIHNlcnZpY2VcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5cbi8vIG1lcmNoYW50IHNlcnZpY2VcbmV4cG9ydCAqIGZyb20gJy4vbWVyY2hhbnQnO1xuXG4vLyBtZXJjaGFudCBzZXJ2aWNlXG5leHBvcnQgKiBmcm9tICcuL2Jvb2tpbmcnO1xuXG4vLyBtZXJjaGFudCBzZXJ2aWNlXG5leHBvcnQgKiBmcm9tICcuL25vdGlmaWNhdGlvbic7XG4iLCJpbXBvcnQgeyBCZWZvcmVDcmVhdGUsIEJlZm9yZVVwZGF0ZSwgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAnYnJhbmNoJyxcbiAgdGFibGVOYW1lOiAnYnJhbmNoZXMnLFxuICB1bmRlcnNjb3JlZDogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgQnJhbmNoTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8QnJhbmNoTW9kZWw+IHtcbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIsIGFsbG93TnVsbDogZmFsc2UgfSlcbiAgbWVyY2hhbnRJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGFkZHJlc3M/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgcGhvbmU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgY2l0eUNvZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHdhcmRDb2RlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGNpdHk/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZGlzdHJpY3Q/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgd2FyZD86IHN0cmluZztcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5GTE9BVCxcbiAgICBkZWZhdWx0VmFsdWU6IDAsXG4gIH0pXG4gIGxhdGl0dWRlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkZMT0FULFxuICAgIGRlZmF1bHRWYWx1ZTogMCxcbiAgfSlcbiAgbG9uZ2l0dWRlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkdFT01FVFJZKCdQT0lOVCcpLFxuICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgICAvLyBkZWZhdWx0VmFsdWU6IHsgdHlwZTogJ1BvaW50JywgY29vcmRpbmF0ZXM6IFswLCAwXSB9LFxuICB9KVxuICBjb29yZGluYXRlOiB7IHR5cGU6ICdQb2ludCc7IGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdIH07XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuVEVYVCxcbiAgICBhbGxvd051bGw6IHRydWUsXG4gIH0pXG4gIHNlYXJjaD86IHN0cmluZztcblxuICBAQmVmb3JlQ3JlYXRlXG4gIEBCZWZvcmVVcGRhdGVcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVNlYXJjaChtb2RlbDogQnJhbmNoTW9kZWwpIHtcbiAgICBjb25zdCBjb2x1bW5zVG9Db25jYXRlbmF0ZSA9IFsnbmFtZScsICdwaG9uZScsICdhZGRyZXNzJywgJ2NpdHknLCAnZGlzdHJpY3QnLCAnd2FyZCddO1xuICAgIGNvbnN0IGNvbmNhdGVuYXRlZFZhbHVlcyA9IGNvbHVtbnNUb0NvbmNhdGVuYXRlXG4gICAgICAubWFwKChjb2x1bW5OYW1lKSA9PiAobW9kZWwuZ2V0KGNvbHVtbk5hbWUpID8gbW9kZWwuZ2V0KGNvbHVtbk5hbWUpIDogJyAnKSlcbiAgICAgIC5qb2luKCcgJyk7XG5cbiAgICBtb2RlbC5zZXREYXRhVmFsdWUoJ3NlYXJjaCcsIGNvbmNhdGVuYXRlZFZhbHVlcy5jb25jYXQoJyAnLCB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyhjb25jYXRlbmF0ZWRWYWx1ZXMpKSk7XG4gIH1cblxuICBAQmVmb3JlQ3JlYXRlXG4gIEBCZWZvcmVVcGRhdGVcbiAgc3RhdGljIGFzeW5jIHVwc2VydENvb3JkaW5hdGUobW9kZWw6IEJyYW5jaE1vZGVsKSB7XG4gICAgaWYgKG1vZGVsLmxhdGl0dWRlICYmIG1vZGVsLmxvbmdpdHVkZSkge1xuICAgICAgbW9kZWwuY29vcmRpbmF0ZSA9IHtcbiAgICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgICAgY29vcmRpbmF0ZXM6IFttb2RlbC5sYXRpdHVkZSwgbW9kZWwubG9uZ2l0dWRlXSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBCZWZvcmVDcmVhdGUsIEJlZm9yZVVwZGF0ZSwgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAnZ3JvdXAnLFxuICB0YWJsZU5hbWU6ICdncm91cHMnLFxuICB1bmRlcnNjb3JlZDogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgR3JvdXBNb2RlbCBleHRlbmRzIEJhc2VNb2RlbDxHcm91cE1vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSLCBhbGxvd051bGw6IGZhbHNlIH0pXG4gIG1lcmNoYW50SWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgc2t1Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGNvZGU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgbmFtZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBpbWFnZT86IHN0cmluZztcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5URVhULFxuICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgfSlcbiAgc2VhcmNoPzogc3RyaW5nO1xuXG4gIEBCZWZvcmVDcmVhdGVcbiAgQEJlZm9yZVVwZGF0ZVxuICBzdGF0aWMgYXN5bmMgdXBkYXRlU2VhcmNoKG1vZGVsOiBHcm91cE1vZGVsKSB7XG4gICAgY29uc3QgY29sdW1uc1RvQ29uY2F0ZW5hdGUgPSBbJ25hbWUnLCAnY29kZScsICdza3UnLCAnZGVzY3JpcHRpb24nXTtcbiAgICBjb25zdCBjb25jYXRlbmF0ZWRWYWx1ZXMgPSBjb2x1bW5zVG9Db25jYXRlbmF0ZVxuICAgICAgLm1hcCgoY29sdW1uTmFtZSkgPT4gKG1vZGVsLmdldChjb2x1bW5OYW1lKSA/IG1vZGVsLmdldChjb2x1bW5OYW1lKSA6ICcgJykpXG4gICAgICAuam9pbignICcpO1xuXG4gICAgbW9kZWwuc2V0RGF0YVZhbHVlKCdzZWFyY2gnLCBjb25jYXRlbmF0ZWRWYWx1ZXMuY29uY2F0KCcgJywgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMoY29uY2F0ZW5hdGVkVmFsdWVzKSkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb2x1bW4sIERhdGFUeXBlLCBUYWJsZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcblxuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vYmFzZS5tb2RlbCc7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ2ltYWdlJyxcbiAgdGFibGVOYW1lOiAnaW1hZ2VzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8SW1hZ2VNb2RlbD4ge1xuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuIiwiLy8gc2VxdWVsaXplXG5leHBvcnQgKiBmcm9tICcuL21lcmNoYW50Lm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vYnJhbmNoLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JvdXAubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vaW1hZ2UubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2ZS1pbWFnZS5tb2RlbCc7XG4iLCJpbXBvcnQgeyBCZWZvcmVDcmVhdGUsIEJlZm9yZVVwZGF0ZSwgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAnbWVyY2hhbnQnLFxuICB0YWJsZU5hbWU6ICdtZXJjaGFudHMnLFxuICB1bmRlcnNjb3JlZDogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgTWVyY2hhbnRNb2RlbCBleHRlbmRzIEJhc2VNb2RlbDxNZXJjaGFudE1vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHVzZXJJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGFkZHJlc3M/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgcGhvbmU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgY2l0eUNvZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHdhcmRDb2RlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGNpdHk/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZGlzdHJpY3Q/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgd2FyZD86IHN0cmluZztcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5GTE9BVCxcbiAgICBkZWZhdWx0VmFsdWU6IDAsXG4gIH0pXG4gIGxhdGl0dWRlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkZMT0FULFxuICAgIGRlZmF1bHRWYWx1ZTogMCxcbiAgfSlcbiAgbG9uZ2l0dWRlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkdFT01FVFJZKCdQT0lOVCcpLFxuICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgICAvLyBkZWZhdWx0VmFsdWU6IHsgdHlwZTogJ1BvaW50JywgY29vcmRpbmF0ZXM6IFswLCAwXSB9LFxuICB9KVxuICBjb29yZGluYXRlOiB7IHR5cGU6ICdQb2ludCc7IGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdIH07XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuVEVYVCxcbiAgICBhbGxvd051bGw6IHRydWUsXG4gIH0pXG4gIHNlYXJjaD86IHN0cmluZztcblxuICBAQmVmb3JlQ3JlYXRlXG4gIEBCZWZvcmVVcGRhdGVcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVNlYXJjaChtb2RlbDogTWVyY2hhbnRNb2RlbCkge1xuICAgIGNvbnN0IGNvbHVtbnNUb0NvbmNhdGVuYXRlID0gWyduYW1lJywgJ3Bob25lJywgJ2FkZHJlc3MnLCAnY2l0eScsICdkaXN0cmljdCcsICd3YXJkJ107XG4gICAgY29uc3QgY29uY2F0ZW5hdGVkVmFsdWVzID0gY29sdW1uc1RvQ29uY2F0ZW5hdGVcbiAgICAgIC5tYXAoKGNvbHVtbk5hbWUpID0+IChtb2RlbC5nZXQoY29sdW1uTmFtZSkgPyBtb2RlbC5nZXQoY29sdW1uTmFtZSkgOiAnICcpKVxuICAgICAgLmpvaW4oJyAnKTtcblxuICAgIG1vZGVsLnNldERhdGFWYWx1ZSgnc2VhcmNoJywgY29uY2F0ZW5hdGVkVmFsdWVzLmNvbmNhdCgnICcsIHRvVUZUOE5vblNwZWNpYWxDaGFyYWN0ZXJzKGNvbmNhdGVuYXRlZFZhbHVlcykpKTtcbiAgfVxuXG4gIEBCZWZvcmVDcmVhdGVcbiAgQEJlZm9yZVVwZGF0ZVxuICBzdGF0aWMgYXN5bmMgdXBzZXJ0Q29vcmRpbmF0ZShtb2RlbDogTWVyY2hhbnRNb2RlbCkge1xuICAgIGlmIChtb2RlbC5sYXRpdHVkZSAmJiBtb2RlbC5sb25naXR1ZGUpIHtcbiAgICAgIG1vZGVsLmNvb3JkaW5hdGUgPSB7XG4gICAgICAgIHR5cGU6ICdQb2ludCcsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbbW9kZWwubGF0aXR1ZGUsIG1vZGVsLmxvbmdpdHVkZV0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xuXG5pbXBvcnQgeyBFSW1hZ2VUeXBlLCBFU2VydmVJbWFnZVR5cGUgfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MvY29tbW9uJztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAnc2VydmVfaW1hZ2UnLFxuICB0YWJsZU5hbWU6ICdzZXJ2ZV9pbWFnZXMnLFxuICB1bmRlcnNjb3JlZDogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgU2VydmVJbWFnZU1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsPFNlcnZlSW1hZ2VNb2RlbD4ge1xuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBpbWFnZUlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlNNQUxMSU5UIH0pXG4gIHNlcnZlVHlwZTogRVNlcnZlSW1hZ2VUeXBlO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5TTUFMTElOVCB9KVxuICB0eXBlOiBFSW1hZ2VUeXBlO1xufVxuIiwiaW1wb3J0IHsgRVNlcnZpY2VTaG93VHlwZSwgRVNlcnZpY2VUeXBlIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3Mvc2VydmljZSc7XG5pbXBvcnQgeyBCZWZvcmVDcmVhdGUsIEJlZm9yZVVwZGF0ZSwgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAnc2VydmljZScsXG4gIHRhYmxlTmFtZTogJ3NlcnZpY2VzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VNb2RlbCBleHRlbmRzIEJhc2VNb2RlbDxTZXJ2aWNlTW9kZWw+IHtcbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIsIGFsbG93TnVsbDogZmFsc2UgfSlcbiAgZ3JvdXBJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBtZXJjaGFudElkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5ET1VCTEUsIGRlZmF1bHRWYWx1ZTogMCB9KVxuICBwcmljZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuRE9VQkxFLCBkZWZhdWx0VmFsdWU6IDAgfSlcbiAgaW5pdGlhbFByaWNlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGR1cmF0aW9uSG91cj86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBkdXJhdGlvbk1pbnV0ZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBza3U/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgY29kZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGltYWdlPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHR5cGU/OiBFU2VydmljZVR5cGU7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgc2hvd1R5cGU/OiBFU2VydmljZVNob3dUeXBlO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5CT09MRUFOIH0pXG4gIGNhblByaW50YWJsZUludm9pY2U/OiBib29sZWFuO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLlRFWFQsXG4gICAgYWxsb3dOdWxsOiB0cnVlLFxuICB9KVxuICBzZWFyY2g/OiBzdHJpbmc7XG5cbiAgQEJlZm9yZUNyZWF0ZVxuICBAQmVmb3JlVXBkYXRlXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVTZWFyY2gobW9kZWw6IFNlcnZpY2VNb2RlbCkge1xuICAgIGNvbnN0IGNvbHVtbnNUb0NvbmNhdGVuYXRlID0gWyduYW1lJywgJ2NvZGUnLCAnc2t1JywgJ3ByaWNlJywgJ2luaXRpYWxQcmljZScsICdkZXNjcmlwdGlvbiddO1xuICAgIGNvbnN0IGNvbmNhdGVuYXRlZFZhbHVlcyA9IGNvbHVtbnNUb0NvbmNhdGVuYXRlXG4gICAgICAubWFwKChjb2x1bW5OYW1lKSA9PiAobW9kZWwuZ2V0KGNvbHVtbk5hbWUpID8gbW9kZWwuZ2V0KGNvbHVtbk5hbWUpIDogJyAnKSlcbiAgICAgIC5qb2luKCcgJyk7XG5cbiAgICBtb2RlbC5zZXREYXRhVmFsdWUoJ3NlYXJjaCcsIGNvbmNhdGVuYXRlZFZhbHVlcy5jb25jYXQoJyAnLCB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyhjb25jYXRlbmF0ZWRWYWx1ZXMpKSk7XG4gIH1cbn1cbiIsIi8vIHNlcXVlbGl6ZVxuZXhwb3J0ICogZnJvbSAnLi9ub3RpZmljYXRpb24ubW9kZWwnO1xuIiwiaW1wb3J0IHsgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xuXG5pbXBvcnQgeyBFTm90aWZpY2F0aW9uVHlwZSB9IGZyb20gJ0AvYXBpLWdhdGV3YXkvZHRvcyc7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ25vdGlmaWNhdGlvbicsXG4gIHRhYmxlTmFtZTogJ25vdGlmaWNhdGlvbnMnLFxuICB1bmRlcnNjb3JlZDogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8Tm90aWZpY2F0aW9uTW9kZWw+IHtcbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgc2VuZGVySWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICB0aXRsZUVuOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgdGl0bGVWaTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGJvZHlFbjogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGJvZHlWaTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHR5cGU6IEVOb3RpZmljYXRpb25UeXBlO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGRhdGFfanNvbjogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgRURldmljZU9zIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3MvZGV2aWNlJztcbmltcG9ydCB7IENvbHVtbiwgRGF0YVR5cGUsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAnZGV2aWNlJyxcbiAgdGFibGVOYW1lOiAnZGV2aWNlcycsXG4gIHVuZGVyc2NvcmVkOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBEZXZpY2VNb2RlbCBleHRlbmRzIEJhc2VNb2RlbDxEZXZpY2VNb2RlbD4ge1xuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICB1c2VySWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBvczogRURldmljZU9zO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGRldmljZUlkOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgdG9rZW46IHN0cmluZztcbn1cbiIsIi8vIHNlcXVlbGl6ZVxuZXhwb3J0ICogZnJvbSAnLi91c2VyLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vZGV2aWNlLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbWVyY2hhbnQtdXNlci5tb2RlbCc7XG4iLCJpbXBvcnQgeyBFVXNlclJvbGUsIEVVc2VyU3RhdHVzIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3MvY29tbW9ucyc7XG5pbXBvcnQgeyBUYWJsZSwgQ29sdW1uLCBEYXRhVHlwZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcblxuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vYmFzZS5tb2RlbCc7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ21lcmNoYW50X3VzZXInLFxuICB0YWJsZU5hbWU6ICdtZXJjaGFudF91c2VycycsXG4gIHVuZGVyc2NvcmVkOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBNZXJjaGFudFVzZXJNb2RlbCBleHRlbmRzIEJhc2VNb2RlbDxNZXJjaGFudFVzZXJNb2RlbD4ge1xuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICByb2xlPzogRVVzZXJSb2xlO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHN0YXR1cz86IEVVc2VyU3RhdHVzO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHVzZXJJZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGJyYW5jaElkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIG1lcmNoYW50SWQ/OiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBFQ3VzdG9tZXJMZXZlbCwgRVVzZXJHZW5kZXIsIEVVc2VyUm9sZSwgRVVzZXJTdGF0dXMgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy9jb21tb25zJztcbmltcG9ydCB7IGhhc2ggfSBmcm9tICdhcmdvbjInO1xuaW1wb3J0IHsgQmVmb3JlQ3JlYXRlLCBCZWZvcmVVcGRhdGUsIENvbHVtbiwgRGF0YVR5cGUsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IHsgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMgfSBmcm9tICdAbGlicy9jb3JlJztcblxuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vYmFzZS5tb2RlbCc7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ3VzZXInLFxuICB0YWJsZU5hbWU6ICd1c2VycycsXG4gIHVuZGVyc2NvcmVkOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8VXNlck1vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGVtYWlsPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHJvbGU/OiBFVXNlclJvbGU7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgc3RhdHVzPzogRVVzZXJTdGF0dXM7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZ2VuZGVyPzogRVVzZXJHZW5kZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZnVsbE5hbWU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLkJPT0xFQU4gfSlcbiAgaXNSZXRhaWxDdXN0b21lcj86IGJvb2xlYW47XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgY29udGFjdD86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBwaG9uZU51bWJlcj86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBkb2JEYXk/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZG9iTW9udGg/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZG9iWWVhcj86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBvY2N1cGF0aW9uPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGF2YXRhcj86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBhZGRyZXNzPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGNpdHlDb2RlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGRpc3RyaWN0Q29kZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICB3YXJkQ29kZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBsZXZlbD86IEVDdXN0b21lckxldmVsO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHJlZmVycmVyPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHJlZmVycmVyQ29kZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBjdXN0b21lckNvZGU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZmFjZWJvb2s/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgemFsb1Bob25lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGhlaWdodD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICB3ZWlnaHQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgbWVtYmVyQ2FyZE5vPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGNvbXBhbnk/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgdGF4Tm8/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgbm90ZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICByZWxhdGVkVXNlcj86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICByZWxhdGVkVXNlclJvbGU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgcmVsYXRlZFVzZXJQaG9uZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBicmFuY2hJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBtZXJjaGFudElkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkZMT0FULFxuICAgIGRlZmF1bHRWYWx1ZTogMCxcbiAgfSlcbiAgbGF0aXR1ZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuRkxPQVQsXG4gICAgZGVmYXVsdFZhbHVlOiAwLFxuICB9KVxuICBsb25naXR1ZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuR0VPTUVUUlkoJ1BPSU5UJyksXG4gICAgYWxsb3dOdWxsOiB0cnVlLFxuICB9KVxuICBjb29yZGluYXRlOiB7IHR5cGU6ICdQb2ludCc7IGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdIH07XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuVEVYVCxcbiAgICBhbGxvd051bGw6IHRydWUsXG4gIH0pXG4gIHNlYXJjaD86IHN0cmluZztcblxuICBAQmVmb3JlQ3JlYXRlXG4gIEBCZWZvcmVVcGRhdGVcbiAgc3RhdGljIGFzeW5jIGhhc2hQYXNzd29yZCh1c2VyOiBVc2VyTW9kZWwpIHtcbiAgICBpZiAoIXVzZXIucGFzc3dvcmQpIHJldHVybjtcbiAgICB1c2VyLnBhc3N3b3JkID0gYXdhaXQgaGFzaCh1c2VyLnBhc3N3b3JkKTtcbiAgfVxuXG4gIEBCZWZvcmVDcmVhdGVcbiAgQEJlZm9yZVVwZGF0ZVxuICBzdGF0aWMgYXN5bmMgdXBkYXRlU2VhcmNoKG1vZGVsOiBVc2VyTW9kZWwpIHtcbiAgICBjb25zdCBjb2x1bW5zVG9Db25jYXRlbmF0ZSA9IFsnZW1haWwnLCAnZnVsbE5hbWUnLCAnY29udGFjdCcsICdwaG9uZU51bWJlcicsICdhZGRyZXNzJ107XG4gICAgY29uc3QgY29uY2F0ZW5hdGVkVmFsdWVzID0gY29sdW1uc1RvQ29uY2F0ZW5hdGVcbiAgICAgIC5tYXAoKGNvbHVtbk5hbWUpID0+IChtb2RlbC5nZXQoY29sdW1uTmFtZSkgPyBtb2RlbC5nZXQoY29sdW1uTmFtZSkgOiAnICcpKVxuICAgICAgLmpvaW4oJyAnKTtcblxuICAgIG1vZGVsLnNldERhdGFWYWx1ZSgnc2VhcmNoJywgY29uY2F0ZW5hdGVkVmFsdWVzLmNvbmNhdCgnICcsIHRvVUZUOE5vblNwZWNpYWxDaGFyYWN0ZXJzKGNvbmNhdGVuYXRlZFZhbHVlcykpKTtcbiAgfVxuXG4gIEBCZWZvcmVDcmVhdGVcbiAgQEJlZm9yZVVwZGF0ZVxuICBzdGF0aWMgYXN5bmMgdXBzZXJ0Q29vcmRpbmF0ZShtb2RlbDogVXNlck1vZGVsKSB7XG4gICAgaWYgKG1vZGVsLmxhdGl0dWRlICYmIG1vZGVsLmxvbmdpdHVkZSkge1xuICAgICAgbW9kZWwuY29vcmRpbmF0ZSA9IHtcbiAgICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgICAgY29vcmRpbmF0ZXM6IFttb2RlbC5sYXRpdHVkZSwgbW9kZWwubG9uZ2l0dWRlXSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2Nvbm5lY3Rpb24nO1xuXG5leHBvcnQgKiBmcm9tICcuL2VudGl0aWVzJztcblxuZXhwb3J0ICogZnJvbSAnLi9yZXBvc2l0b3JpZXMnO1xuIiwiaW1wb3J0IHsgTElNSVQsIFBBR0UgfSBmcm9tICdAbGlicy9jb3JlJztcbmltcG9ydCB7IENvbW1vblByb3RvIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5pbXBvcnQgeyBJRmluZEFuZFBhZ2luYXRlT3B0aW9ucywgSVBhZ2luYXRpb25SZXMgfSBmcm9tICdAbGlicy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtcbiAgQXR0cmlidXRlcyxcbiAgQ291bnRPcHRpb25zLFxuICBDcmVhdGVPcHRpb25zLFxuICBGaW5kQW5kQ291bnRPcHRpb25zLFxuICBGaW5kT3B0aW9ucyxcbiAgVXBkYXRlT3B0aW9ucyxcbiAgV2hlcmVPcHRpb25zLFxufSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IHsgTW9kZWwsIFJlcG9zaXRvcnkgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5cbmV4cG9ydCBjbGFzcyBCYXNlUmVwb3NpdG9yeTxUIGV4dGVuZHMgTW9kZWw+IHtcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgbW9kZWw6IFJlcG9zaXRvcnk8VD4pIHt9XG5cbiAgYXN5bmMgZmluZChvcHRpb25zPzogRmluZE9wdGlvbnM8VD4pOiBQcm9taXNlPFRbXT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGVsLmZpbmRBbGwob3B0aW9ucyk7XG4gIH1cblxuICBhc3luYyBmaW5kT25lKG9wdGlvbnM/OiBGaW5kT3B0aW9uczxUPik6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGVsLmZpbmRPbmUob3B0aW9ucyk7XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZChpZDogbnVtYmVyLCBvcHRpb25zPzogRmluZE9wdGlvbnM8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RlbC5maW5kQnlQayhpZCwgb3B0aW9ucyk7XG4gIH1cblxuICBhc3luYyBwYWdpbmF0ZShcbiAgICBvcHRpb25zPzogV2hlcmVPcHRpb25zPFQ+LFxuICAgIHBhZ2UgPSBQQUdFLFxuICAgIGxpbWl0ID0gTElNSVQsXG4gICAgb3B0cz86IEZpbmRPcHRpb25zPFQ+LFxuICApOiBQcm9taXNlPElQYWdpbmF0aW9uUmVzPFQ+PiB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gKHBhZ2UgLSAxKSAqIGxpbWl0O1xuICAgIGNvbnN0IHsgcm93cywgY291bnQgfSA9IGF3YWl0IHRoaXMucmF3UGFnaW5hdGUoe1xuICAgICAgd2hlcmU6IHsgLi4ub3B0aW9ucyB9LFxuICAgICAgb2Zmc2V0LFxuICAgICAgbGltaXQsXG4gICAgICAuLi5vcHRzLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiByb3dzLFxuICAgICAgbWV0YToge1xuICAgICAgICB0b3RhbDogY291bnQsXG4gICAgICAgIHRvdGFsUGFnZTogTWF0aC5jZWlsKGNvdW50IC8gTElNSVQpLFxuICAgICAgICBwYWdlLFxuICAgICAgICBsaW1pdCxcbiAgICAgIH0sXG4gICAgfSBhcyBJUGFnaW5hdGlvblJlczxUPjtcbiAgfVxuXG4gIGFzeW5jIHJhd1BhZ2luYXRlKG9wdGlvbnM6IEZpbmRBbmRDb3VudE9wdGlvbnMpOiBQcm9taXNlPHtcbiAgICByb3dzOiBUW107XG4gICAgY291bnQ6IG51bWJlcjtcbiAgfT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGVsLmZpbmRBbmRDb3VudEFsbChvcHRpb25zKTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZShlbnRpdHk6IGFueSwgb3B0cz86IENyZWF0ZU9wdGlvbnMpOiBQcm9taXNlPFQ+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLm1vZGVsLmNyZWF0ZShlbnRpdHksIG9wdHMpO1xuICAgIHJldHVybiByZXMudG9KU09OKCk7XG4gIH1cblxuICBhc3luYyB1cGRhdGUoZW50aXR5OiBhbnksIG9wdHM/OiBVcGRhdGVPcHRpb25zKSB7XG4gICAgY29uc3QgW2FmZmVjdGVkQ291bnQsIGFmZmVjdGVkUm93c10gPSBhd2FpdCB0aGlzLm1vZGVsLnVwZGF0ZShlbnRpdHksIHtcbiAgICAgIC4uLm9wdHMsXG4gICAgICByZXR1cm5pbmc6IHRydWUsXG4gICAgfSk7XG4gICAgcmV0dXJuIGFmZmVjdGVkUm93cztcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZShjb25kaXRpb25zOiBGaW5kT3B0aW9uczxUPik6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kZWwuZGVzdHJveShjb25kaXRpb25zKTtcbiAgfVxuXG4gIGFzeW5jIHJhdyhxdWVyeTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kZWwuc2VxdWVsaXplLnF1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIGdldE1vZGVsKCk6IFJlcG9zaXRvcnk8VD4ge1xuICAgIHJldHVybiB0aGlzLm1vZGVsO1xuICB9XG5cbiAgYXN5bmMgY291bnQob3B0aW9ucz86IENvdW50T3B0aW9ucyk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgY29uc3QgcmVzdWx0OiBudW1iZXIgPSBhd2FpdCB0aGlzLm1vZGVsLmNvdW50KG9wdGlvbnMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBhc3luYyBmaW5kQW5kUGFnaW5hdGUocXVlcnk/OiBJRmluZEFuZFBhZ2luYXRlT3B0aW9ucywgb3B0cz86IEZpbmRPcHRpb25zKTogUHJvbWlzZTxJUGFnaW5hdGlvblJlczxUPj4ge1xuICAgIGNvbnN0IHJlc3VsdDogSVBhZ2luYXRpb25SZXM8VD4gPSBhd2FpdCB0aGlzLnBhZ2luYXRlKHF1ZXJ5LndoZXJlLCBxdWVyeS5wYWdlLCBxdWVyeS5saW1pdCwgb3B0cyk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYXN5bmMgY291bnRCeUdycGMocXVlcnk6IENvbW1vblByb3RvLlF1ZXJ5UmVxdWVzdCkge1xuICAgIGNvbnN0IHdoZXJlID0gIWlzRW1wdHkocXVlcnkud2hlcmUpID8gSlNPTi5wYXJzZShxdWVyeS53aGVyZSkgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmNvdW50KHtcbiAgICAgIC4uLnF1ZXJ5LFxuICAgICAgd2hlcmUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0TW9kZWwgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBCb29raW5nTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZSc7XG5cbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYmFzZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJvb2tpbmdSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8Qm9va2luZ01vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3RNb2RlbChCb29raW5nTW9kZWwpIHJlYWRvbmx5IG1vZGVsOiB0eXBlb2YgQm9va2luZ01vZGVsKSB7XG4gICAgc3VwZXIobW9kZWwpO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2Jvb2tpbmcucmVwb3NpdG9yeSc7XG4iLCIvLyB1c2VyIHJlcG9zaXRvcnlcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5cbi8vIG1lcmNoYW50IHJlcG9zaXRvcnlcbmV4cG9ydCAqIGZyb20gJy4vbWVyY2hhbnQnO1xuXG4vLyBib29raW5nIHJlcG9zaXRvcnlcbmV4cG9ydCAqIGZyb20gJy4vYm9va2luZyc7XG5cbi8vIG5vdGlmaWNhdGlvbiByZXBvc2l0b3J5XG5leHBvcnQgKiBmcm9tICcuL25vdGlmaWNhdGlvbic7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0TW9kZWwgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IEJyYW5jaE1vZGVsIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9iYXNlLnJlcG9zaXRvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJhbmNoUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PEJyYW5jaE1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3RNb2RlbChCcmFuY2hNb2RlbCkgcmVhZG9ubHkgbW9kZWw6IHR5cGVvZiBCcmFuY2hNb2RlbCkge1xuICAgIHN1cGVyKG1vZGVsKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRXaXRoUGFnaW5nKG9wdGlvbnM/OiBhbnksIGZpbmRPcHRpb25zPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2luYXRpb25SZXBvc2l0b3J5KHRoaXMuZGV2aWNlTW9kZWwsIG9wdGlvbnMsIGZpbmRPcHRpb25zKTtcbiAgICByZXR1cm47XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RNb2RlbCB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcblxuaW1wb3J0IHsgR3JvdXBNb2RlbCB9IGZyb20gJy4uLy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYmFzZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdyb3VwUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PEdyb3VwTW9kZWw+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdE1vZGVsKEdyb3VwTW9kZWwpIHJlYWRvbmx5IG1vZGVsOiB0eXBlb2YgR3JvdXBNb2RlbCkge1xuICAgIHN1cGVyKG1vZGVsKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudC5yZXBvc2l0b3J5JztcbmV4cG9ydCAqIGZyb20gJy4vZ3JvdXAucmVwb3NpdG9yeSc7XG5leHBvcnQgKiBmcm9tICcuL2JyYW5jaC5yZXBvc2l0b3J5JztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZS5yZXBvc2l0b3J5JztcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RNb2RlbCB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcblxuaW1wb3J0IHsgTWVyY2hhbnRNb2RlbCB9IGZyb20gJy4uLy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYmFzZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lcmNoYW50UmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PE1lcmNoYW50TW9kZWw+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdE1vZGVsKE1lcmNoYW50TW9kZWwpIHJlYWRvbmx5IG1vZGVsOiB0eXBlb2YgTWVyY2hhbnRNb2RlbCkge1xuICAgIHN1cGVyKG1vZGVsKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRXaXRoUGFnaW5nKG9wdGlvbnM/OiBhbnksIGZpbmRPcHRpb25zPzogYW55KTogUHJvbWlzZTxNZXJjaGFudE1vZGVsPiB7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdpbmF0aW9uUmVwb3NpdG9yeSh0aGlzLmRldmljZU1vZGVsLCBvcHRpb25zLCBmaW5kT3B0aW9ucyk7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0TW9kZWwgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IFNlcnZpY2VNb2RlbCB9IGZyb20gJy4uLy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYmFzZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8U2VydmljZU1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3RNb2RlbChTZXJ2aWNlTW9kZWwpIHJlYWRvbmx5IG1vZGVsOiB0eXBlb2YgU2VydmljZU1vZGVsKSB7XG4gICAgc3VwZXIobW9kZWwpO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL25vdGlmaWNhdGlvbi5yZXBvc2l0b3J5JztcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RNb2RlbCB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uTW9kZWwgfSBmcm9tICcuLi8uLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2Jhc2UucmVwb3NpdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25SZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8Tm90aWZpY2F0aW9uTW9kZWw+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdE1vZGVsKE5vdGlmaWNhdGlvbk1vZGVsKSByZWFkb25seSBtb2RlbDogdHlwZW9mIE5vdGlmaWNhdGlvbk1vZGVsKSB7XG4gICAgc3VwZXIobW9kZWwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0TW9kZWwgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBJRmluZEFuZFBhZ2luYXRlT3B0aW9ucywgSVBhZ2luYXRpb25SZXMgfSBmcm9tICdAbGlicy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEZpbmRPcHRpb25zIH0gZnJvbSAnc2VxdWVsaXplJztcblxuaW1wb3J0IHsgRGV2aWNlTW9kZWwgfSBmcm9tICcuLi8uLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2Jhc2UucmVwb3NpdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZXZpY2VSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8RGV2aWNlTW9kZWw+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdE1vZGVsKERldmljZU1vZGVsKSByZWFkb25seSBtb2RlbDogdHlwZW9mIERldmljZU1vZGVsKSB7XG4gICAgc3VwZXIobW9kZWwpO1xuICB9XG5cbiAgYXN5bmMgZmluZEFuZFBhZ2luYXRlKHF1ZXJ5PzogSUZpbmRBbmRQYWdpbmF0ZU9wdGlvbnMsIG9wdHM/OiBGaW5kT3B0aW9ucyk6IFByb21pc2U8SVBhZ2luYXRpb25SZXM8RGV2aWNlTW9kZWw+PiB7XG4gICAgY29uc3QgcmVzdWx0OiBJUGFnaW5hdGlvblJlczxEZXZpY2VNb2RlbD4gPSBhd2FpdCB0aGlzLnBhZ2luYXRlKHF1ZXJ5LndoZXJlLCBxdWVyeS5wYWdlLCBxdWVyeS5saW1pdCwgb3B0cyk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXIucmVwb3NpdG9yeSc7XG5leHBvcnQgKiBmcm9tICcuL2RldmljZS5yZXBvc2l0b3J5JztcbmV4cG9ydCAqIGZyb20gJy4vbWVyY2hhbnQtdXNlci5yZXBvc2l0b3J5JztcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RNb2RlbCB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcblxuaW1wb3J0IHsgTWVyY2hhbnRVc2VyTW9kZWwgfSBmcm9tICcuLi8uLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2Jhc2UucmVwb3NpdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXJjaGFudFVzZXJSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8TWVyY2hhbnRVc2VyTW9kZWw+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdE1vZGVsKE1lcmNoYW50VXNlck1vZGVsKSByZWFkb25seSBtb2RlbDogdHlwZW9mIE1lcmNoYW50VXNlck1vZGVsKSB7XG4gICAgc3VwZXIobW9kZWwpO1xuICB9XG5cbiAgYXN5bmMgZmluZFdpdGhQYWdpbmcob3B0aW9ucz86IGFueSwgZmluZE9wdGlvbnM/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucGFnaW5hdGUodGhpcy51c2VyTW9kZWwsIG9wdGlvbnMsIGZpbmRPcHRpb25zKTtcbiAgICByZXR1cm47XG4gIH1cbn1cbiIsImltcG9ydCB7IElGaW5kQW5kUGFnaW5hdGVPcHRpb25zLCBJUGFnaW5hdGlvblJlcyB9IGZyb20gJ0BsaWJzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdE1vZGVsIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuaW1wb3J0IHsgRmluZE9wdGlvbnMgfSBmcm9tICdzZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tICcuLi8uLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2Jhc2UucmVwb3NpdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PFVzZXJNb2RlbD4ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0TW9kZWwoVXNlck1vZGVsKSByZWFkb25seSBtb2RlbDogdHlwZW9mIFVzZXJNb2RlbCkge1xuICAgIHN1cGVyKG1vZGVsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQm9va2luZ0NvbmZpZywgTWVyY2hhbnRDb25maWcsIE5vdGlmaWNhdGlvbkNvbmZpZywgVXNlckNvbmZpZywgVXNlclByb3RvIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5pbXBvcnQgeyBCT09LSU5HX1BBQ0tBR0VfTkFNRSB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL2Jvb2tpbmcnO1xuaW1wb3J0IHsgTUVSQ0hBTlRfUEFDS0FHRV9OQU1FIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3MvbWVyY2hhbnQnO1xuaW1wb3J0IHsgTk9USUZJQ0FUSU9OX1BBQ0tBR0VfTkFNRSB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBDbGllbnRQcm92aWRlck9wdGlvbnMsIFRyYW5zcG9ydCB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5cbmV4cG9ydCBjb25zdCBVc2VyQ2xpZW50OiBDbGllbnRQcm92aWRlck9wdGlvbnMgPSB7XG4gIG5hbWU6IFVzZXJQcm90by5EVUNQSF9VU0VSX1BBQ0tBR0VfTkFNRSxcbiAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuR1JQQyxcbiAgb3B0aW9uczoge1xuICAgIHBhY2thZ2U6IFVzZXJQcm90by5EVUNQSF9VU0VSX1BBQ0tBR0VfTkFNRSxcbiAgICBwcm90b1BhdGg6IFVzZXJDb25maWcucGF0aCxcbiAgICB1cmw6IGAke1VzZXJDb25maWcubG9jYWxIb3N0bmFtZX06JHtVc2VyQ29uZmlnLnBvcnR9YCxcbiAgICBsb2FkZXI6IFVzZXJDb25maWcubG9hZGVyLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IE1lcmNoYW50Q2xpZW50OiBDbGllbnRQcm92aWRlck9wdGlvbnMgPSB7XG4gIG5hbWU6IE1FUkNIQU5UX1BBQ0tBR0VfTkFNRSxcbiAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuR1JQQyxcbiAgb3B0aW9uczoge1xuICAgIHBhY2thZ2U6IE1FUkNIQU5UX1BBQ0tBR0VfTkFNRSxcbiAgICBwcm90b1BhdGg6IE1lcmNoYW50Q29uZmlnLnBhdGgsXG4gICAgdXJsOiBgJHtNZXJjaGFudENvbmZpZy5sb2NhbEhvc3RuYW1lfToke01lcmNoYW50Q29uZmlnLnBvcnR9YCxcbiAgICBsb2FkZXI6IE1lcmNoYW50Q29uZmlnLmxvYWRlcixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBCb29raW5nQ2xpZW50OiBDbGllbnRQcm92aWRlck9wdGlvbnMgPSB7XG4gIG5hbWU6IEJPT0tJTkdfUEFDS0FHRV9OQU1FLFxuICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5HUlBDLFxuICBvcHRpb25zOiB7XG4gICAgcGFja2FnZTogQk9PS0lOR19QQUNLQUdFX05BTUUsXG4gICAgcHJvdG9QYXRoOiBCb29raW5nQ29uZmlnLnBhdGgsXG4gICAgdXJsOiBgJHtCb29raW5nQ29uZmlnLmxvY2FsSG9zdG5hbWV9OiR7Qm9va2luZ0NvbmZpZy5wb3J0fWAsXG4gICAgbG9hZGVyOiBCb29raW5nQ29uZmlnLmxvYWRlcixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25DbGllbnQ6IENsaWVudFByb3ZpZGVyT3B0aW9ucyA9IHtcbiAgbmFtZTogTk9USUZJQ0FUSU9OX1BBQ0tBR0VfTkFNRSxcbiAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuR1JQQyxcbiAgb3B0aW9uczoge1xuICAgIHBhY2thZ2U6IE5PVElGSUNBVElPTl9QQUNLQUdFX05BTUUsXG4gICAgcHJvdG9QYXRoOiBOb3RpZmljYXRpb25Db25maWcucGF0aCxcbiAgICB1cmw6IGAke05vdGlmaWNhdGlvbkNvbmZpZy5sb2NhbEhvc3RuYW1lfToke05vdGlmaWNhdGlvbkNvbmZpZy5wb3J0fWAsXG4gICAgbG9hZGVyOiBOb3RpZmljYXRpb25Db25maWcubG9hZGVyLFxuICB9LFxufTtcbiIsImltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuZXhwb3J0IGNvbnN0IFVzZXJDb25maWcgPSB7XG4gIGhvc3RuYW1lOiAndXNlci1zZXJ2aWNlJyxcbiAgbG9jYWxIb3N0bmFtZTogJzAuMC4wLjAnLFxuICBwb3J0OiA1MDAwNixcbiAgcGF0aDogcmVzb2x2ZSgnbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MnLCAndXNlci5wcm90bycpLFxuICBsb2FkZXI6IHtcbiAgICBrZWVwQ2FzZTogdHJ1ZSxcbiAgICBsb25nczogTnVtYmVyLFxuICAgIGVudW1zOiBOdW1iZXIsXG4gICAgYXJyYXlzOiB0cnVlLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IE1lcmNoYW50Q29uZmlnID0ge1xuICBob3N0bmFtZTogJ21lcmNoYW50LXNlcnZpY2UnLFxuICBsb2NhbEhvc3RuYW1lOiAnMC4wLjAuMCcsXG4gIHBvcnQ6IDUwMDA4LFxuICBwYXRoOiByZXNvbHZlKCdsaWJzL2dycGMtdHlwZXMvc3JjL3Byb3RvcycsICdtZXJjaGFudC5wcm90bycpLFxuICBsb2FkZXI6IHtcbiAgICBrZWVwQ2FzZTogdHJ1ZSxcbiAgICBsb25nczogTnVtYmVyLFxuICAgIGVudW1zOiBOdW1iZXIsXG4gICAgYXJyYXlzOiB0cnVlLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEJvb2tpbmdDb25maWcgPSB7XG4gIGhvc3RuYW1lOiAnYm9va2luZy1zZXJ2aWNlJyxcbiAgbG9jYWxIb3N0bmFtZTogJzAuMC4wLjAnLFxuICBwb3J0OiA1MDAxMCxcbiAgcGF0aDogcmVzb2x2ZSgnbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MnLCAnYm9va2luZy5wcm90bycpLFxuICBsb2FkZXI6IHtcbiAgICBrZWVwQ2FzZTogdHJ1ZSxcbiAgICBsb25nczogTnVtYmVyLFxuICAgIGVudW1zOiBOdW1iZXIsXG4gICAgYXJyYXlzOiB0cnVlLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkNvbmZpZyA9IHtcbiAgaG9zdG5hbWU6ICdub3RpZmljYXRpb24tc2VydmljZScsXG4gIGxvY2FsSG9zdG5hbWU6ICcwLjAuMC4wJyxcbiAgcG9ydDogNTAwMTIsXG4gIHBhdGg6IHJlc29sdmUoJ2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zJywgJ25vdGlmaWNhdGlvbi5wcm90bycpLFxuICBsb2FkZXI6IHtcbiAgICBrZWVwQ2FzZTogdHJ1ZSxcbiAgICBsb25nczogTnVtYmVyLFxuICAgIGVudW1zOiBOdW1iZXIsXG4gICAgYXJyYXlzOiB0cnVlLFxuICB9LFxufTtcbiIsImltcG9ydCAqIGFzIFVzZXJQcm90byBmcm9tICcuL3Byb3Rvcy91c2VyJztcbmltcG9ydCAqIGFzIENvbW1vblByb3RvIGZyb20gJy4vcHJvdG9zL2NvbW1vbnMnO1xuaW1wb3J0ICogYXMgTWVyY2hhbnRQcm90byBmcm9tICcuL3Byb3Rvcy9tZXJjaGFudCc7XG5pbXBvcnQgKiBhcyBCb29raW5nUHJvdG8gZnJvbSAnLi9wcm90b3MvYm9va2luZyc7XG5pbXBvcnQgKiBhcyBCcmFuY2hQcm90byBmcm9tICcuL3Byb3Rvcy9icmFuY2gnO1xuaW1wb3J0ICogYXMgRGV2aWNlUHJvdG8gZnJvbSAnLi9wcm90b3MvZGV2aWNlJztcbmltcG9ydCAqIGFzIE1lcmNoYW50VXNlclByb3RvIGZyb20gJy4vcHJvdG9zL21lcmNoYW50X3VzZXInO1xuaW1wb3J0ICogYXMgTm90aWZpY2F0aW9uUHJvdG8gZnJvbSAnLi9wcm90b3Mvbm90aWZpY2F0aW9uJztcblxuZXhwb3J0ICogZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgKiBmcm9tICcuL3NlcnZlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9jbGllbnRzJztcblxuZXhwb3J0IHtcbiAgQ29tbW9uUHJvdG8sXG4gIFVzZXJQcm90byxcbiAgTWVyY2hhbnRQcm90byxcbiAgQm9va2luZ1Byb3RvLFxuICBCcmFuY2hQcm90byxcbiAgRGV2aWNlUHJvdG8sXG4gIE1lcmNoYW50VXNlclByb3RvLFxuICBOb3RpZmljYXRpb25Qcm90byxcbn07XG5cbmV4cG9ydCBjb25zdCBHcnBjTWV0YWRhdGFFcnJvcktleSA9ICdjdXN0b20tZ3JwYy1lcnJvcic7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgR3JwY01ldGhvZCwgR3JwY1N0cmVhbU1ldGhvZCB9IGZyb20gXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQ291bnQsIEVCb29raW5nU3RhdHVzLCBJZCwgUXVlcnlSZXF1ZXN0IH0gZnJvbSBcIi4vY29tbW9uc1wiO1xuaW1wb3J0IHsgTnVsbFZhbHVlIH0gZnJvbSBcIi4vZ29vZ2xlL3Byb3RvYnVmL3N0cnVjdFwiO1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJib29raW5nXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9va2luZyB7XG4gIC8qKiBkZWZhdWx0IGZpZWxkICovXG4gIGlkOiBudW1iZXI7XG4gIGNyZWF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNyZWF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQnk/OlxuICAgIHwgc3RyaW5nXG4gICAgfCB1bmRlZmluZWQ7XG4gIC8qKiByZXNlcnZlZCBmaWVsZCAqL1xuICBzdGF0dXM/OiBFQm9va2luZ1N0YXR1cyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZXJ2aWNlSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHN0YXJ0VGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZW5kVGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZHVyYXRpb24/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG5vdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBpc0N1c3RvbWVyQ2FuY2VsPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgY2FuY2VsUmVhc29uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBib29raW5nRGF0ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaXNBZG1pblVwZGF0ZT86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIGFkbWluVXBkYXRlSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2VOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lck5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyRW1haWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyQWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZHVyYXRpb25Ib3VyPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkdXJhdGlvbk1pbnV0ZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVCb29raW5nSW5wdXQge1xuICBzdGF0dXM/OiBFQm9va2luZ1N0YXR1cyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZXJ2aWNlSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHN0YXJ0VGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZW5kVGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRtaW5CcmFuY2hFbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJFbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBib29raW5nRGF0ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbm90ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2VOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZUJvb2tpbmdEYXRhIHtcbiAgc3RhdHVzPzogRUJvb2tpbmdTdGF0dXMgfCB1bmRlZmluZWQ7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc2VydmljZUlkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzdGFydFRpbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGVuZFRpbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGFkbWluQnJhbmNoRW1haWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyRW1haWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYm9va2luZ0RhdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG5vdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZXJ2aWNlTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVCb29raW5nSW5wdXQge1xuICBpZDogbnVtYmVyO1xuICBkYXRhOiBVcGRhdGVCb29raW5nRGF0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kQm9va2luZ09mZnNldFBhZ2luYXRpb24ge1xuICBpdGVtczogQm9va2luZ1tdO1xuICBwYWdlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB0b3RhbFBhZ2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHRvdGFsPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBsaW1pdD86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOdWxsYWJsZUJvb2tpbmcge1xuICBudWxsPzogTnVsbFZhbHVlIHwgdW5kZWZpbmVkO1xuICBib29raW5nPzogQm9va2luZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IEJPT0tJTkdfUEFDS0FHRV9OQU1FID0gXCJib29raW5nXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9va2luZ1NlcnZpY2VDbGllbnQge1xuICBmaW5kKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8RmluZEJvb2tpbmdPZmZzZXRQYWdpbmF0aW9uPjtcblxuICBmaW5kQnlJZChyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8TnVsbGFibGVCb29raW5nPjtcblxuICBmaW5kT25lKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8TnVsbGFibGVCb29raW5nPjtcblxuICBjb3VudChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPENvdW50PjtcblxuICBjcmVhdGUocmVxdWVzdDogQ3JlYXRlQm9va2luZ0lucHV0KTogT2JzZXJ2YWJsZTxCb29raW5nPjtcblxuICB1cGRhdGUocmVxdWVzdDogVXBkYXRlQm9va2luZ0lucHV0KTogT2JzZXJ2YWJsZTxCb29raW5nPjtcblxuICBkZWxldGUocmVxdWVzdDogSWQpOiBPYnNlcnZhYmxlPENvdW50Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCb29raW5nU2VydmljZUNvbnRyb2xsZXIge1xuICBmaW5kKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCxcbiAgKTogUHJvbWlzZTxGaW5kQm9va2luZ09mZnNldFBhZ2luYXRpb24+IHwgT2JzZXJ2YWJsZTxGaW5kQm9va2luZ09mZnNldFBhZ2luYXRpb24+IHwgRmluZEJvb2tpbmdPZmZzZXRQYWdpbmF0aW9uO1xuXG4gIGZpbmRCeUlkKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxOdWxsYWJsZUJvb2tpbmc+IHwgT2JzZXJ2YWJsZTxOdWxsYWJsZUJvb2tpbmc+IHwgTnVsbGFibGVCb29raW5nO1xuXG4gIGZpbmRPbmUocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxOdWxsYWJsZUJvb2tpbmc+IHwgT2JzZXJ2YWJsZTxOdWxsYWJsZUJvb2tpbmc+IHwgTnVsbGFibGVCb29raW5nO1xuXG4gIGNvdW50KHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8Q291bnQ+IHwgT2JzZXJ2YWJsZTxDb3VudD4gfCBDb3VudDtcblxuICBjcmVhdGUocmVxdWVzdDogQ3JlYXRlQm9va2luZ0lucHV0KTogUHJvbWlzZTxCb29raW5nPiB8IE9ic2VydmFibGU8Qm9va2luZz4gfCBCb29raW5nO1xuXG4gIHVwZGF0ZShyZXF1ZXN0OiBVcGRhdGVCb29raW5nSW5wdXQpOiBQcm9taXNlPEJvb2tpbmc+IHwgT2JzZXJ2YWJsZTxCb29raW5nPiB8IEJvb2tpbmc7XG5cbiAgZGVsZXRlKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQm9va2luZ1NlcnZpY2VDb250cm9sbGVyTWV0aG9kcygpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb25zdHJ1Y3RvcjogRnVuY3Rpb24pIHtcbiAgICBjb25zdCBncnBjTWV0aG9kczogc3RyaW5nW10gPSBbXCJmaW5kXCIsIFwiZmluZEJ5SWRcIiwgXCJmaW5kT25lXCIsIFwiY291bnRcIiwgXCJjcmVhdGVcIiwgXCJ1cGRhdGVcIiwgXCJkZWxldGVcIl07XG4gICAgZm9yIChjb25zdCBtZXRob2Qgb2YgZ3JwY01ldGhvZHMpIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0b3I6IGFueSA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgbWV0aG9kKTtcbiAgICAgIEdycGNNZXRob2QoXCJCb29raW5nU2VydmljZVwiLCBtZXRob2QpKGNvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2RdLCBtZXRob2QsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICBjb25zdCBncnBjU3RyZWFtTWV0aG9kczogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjU3RyZWFtTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY1N0cmVhbU1ldGhvZChcIkJvb2tpbmdTZXJ2aWNlXCIsIG1ldGhvZCkoY29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZF0sIG1ldGhvZCwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgQk9PS0lOR19TRVJWSUNFX05BTUUgPSBcIkJvb2tpbmdTZXJ2aWNlXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgUGFnZUluZm8sIFBhZ2VNZXRhIH0gZnJvbSBcIi4vY29tbW9uc1wiO1xuaW1wb3J0IHsgTnVsbFZhbHVlIH0gZnJvbSBcIi4vZ29vZ2xlL3Byb3RvYnVmL3N0cnVjdFwiO1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJicmFuY2hcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVCcmFuY2hEYXRhIHtcbiAgbmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGFkZHJlc3M/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHlDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkaXN0cmljdENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHdhcmRDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjaXR5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkaXN0cmljdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgd2FyZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVCcmFuY2hJbnB1dCB7XG4gIGlkOiBudW1iZXI7XG4gIGRhdGE6IFVwZGF0ZUJyYW5jaERhdGEgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlQnJhbmNoSW5wdXQge1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB3YXJkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJyYW5jaCB7XG4gIC8qKiBkZWZhdWx0IGZpZWxkICovXG4gIGlkOiBudW1iZXI7XG4gIGNyZWF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNyZWF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQnk/OlxuICAgIHwgc3RyaW5nXG4gICAgfCB1bmRlZmluZWQ7XG4gIC8qKiByZXNlcnZlZCBmaWVsZCAqL1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB3YXJkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJyYW5jaEVkZ2Uge1xuICBub2RlOiBCcmFuY2ggfCB1bmRlZmluZWQ7XG4gIGN1cnNvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRCcmFuY2hlc1BheWxvYWQge1xuICBlZGdlczogQnJhbmNoRWRnZVtdO1xuICBwYWdlSW5mbzogUGFnZUluZm8gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnVsbGFibGVCcmFuY2gge1xuICBudWxsPzogTnVsbFZhbHVlIHwgdW5kZWZpbmVkO1xuICBicmFuY2g/OiBCcmFuY2ggfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJhbmNoZXMge1xuICBicmFuY2hlczogQnJhbmNoW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJhbmNoUGFnaW5hdGlvbiB7XG4gIGl0ZW1zOiBCcmFuY2hbXTtcbiAgbWV0YT86IFBhZ2VNZXRhIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgQlJBTkNIX1BBQ0tBR0VfTkFNRSA9IFwiYnJhbmNoXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJjb21tb25zXCI7XG5cbmV4cG9ydCBlbnVtIEVTb3J0RGlyZWN0aW9uIHtcbiAgQVNDID0gMCxcbiAgREVTQyA9IDEsXG59XG5cbmV4cG9ydCBlbnVtIEVVc2VyR2VuZGVyIHtcbiAgTUFMRSA9IDAsXG4gIEZFTUFMRSA9IDEsXG4gIE9USEVSID0gMixcbn1cblxuZXhwb3J0IGVudW0gRVVzZXJSb2xlIHtcbiAgVVNFUiA9IDAsXG4gIEFETUlOID0gMSxcbiAgU1VQRVJfQURNSU4gPSAyLFxuICBNQVNURVJfV09SS0VSID0gMyxcbiAgQVNTSVNUQU5UX1dPUktFUiA9IDQsXG4gIE1BTkFHRVIgPSA1LFxuICBSRUNFUFRJT05JU1QgPSA2LFxufVxuXG5leHBvcnQgZW51bSBFQ3VzdG9tZXJMZXZlbCB7XG4gIE5PUk1BTCA9IDAsXG4gIFNJTFZFUiA9IDEsXG4gIEdPTEQgPSAyLFxuICBQTEFUSU5VTSA9IDMsXG59XG5cbmV4cG9ydCBlbnVtIEVVc2VyU3RhdHVzIHtcbiAgUEVORElORyA9IDAsXG4gIEFDVElWRSA9IDEsXG4gIEJBTk5FRCA9IDIsXG59XG5cbmV4cG9ydCBlbnVtIEVOb3RpZmljYXRpb25UeXBlIHtcbiAgQk9PS0lORyA9IDAsXG4gIENIQVQgPSAxLFxuICBDT01NRU5UID0gMixcbiAgUkVQTFlfQ09NTUVOVCA9IDMsXG59XG5cbmV4cG9ydCBlbnVtIEVCb29raW5nU3RhdHVzIHtcbiAgQk9PS0lOR19QRU5ESU5HID0gMCxcbiAgQk9PS0lOR19BUFBST1ZFID0gMSxcbiAgQk9PS0lOR19DQU5DRUxMRUQgPSAyLFxuICBCT09LSU5HX1JFSkVDVCA9IDMsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWQge1xuICBpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyUXVlcnkge1xuICBmaWx0ZXI6IHN0cmluZztcbiAgcGFnaW5nOiBQYWdpbmcgfCB1bmRlZmluZWQ7XG4gIHNvcnRpbmc6IFNvcnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcWxRdWVyeSB7XG4gIHNlbGVjdDogc3RyaW5nW107XG4gIHdoZXJlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBvcmRlckJ5OiBzdHJpbmdbXTtcbiAgbGltaXQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGJlZm9yZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWZ0ZXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUluZm8ge1xuICBzdGFydEN1cnNvcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZW5kQ3Vyc29yPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBoYXNOZXh0UGFnZT86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIGhhc1ByZXZpb3VzUGFnZT86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ291bnQge1xuICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvdGFsQ291bnQge1xuICB0b3RhbENvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlSZXF1ZXN0IHtcbiAgd2hlcmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHBhZ2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxpbWl0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZWFyY2hLZXk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG9yZGVyQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG9yZGVyRGlyZWN0aW9uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnQge1xuICBmaWVsZDogc3RyaW5nO1xuICBkaXJlY3Rpb246IEVTb3J0RGlyZWN0aW9uO1xuICBudWxsczogU29ydF9Tb3J0TnVsbHM7XG59XG5cbmV4cG9ydCBlbnVtIFNvcnRfU29ydE51bGxzIHtcbiAgTlVMTFNfRklSU1QgPSAwLFxuICBOVUxMU19MQVNUID0gMSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdpbmcge1xuICBsaW1pdDogbnVtYmVyO1xuICBvZmZzZXQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlTWV0YSB7XG4gIHRvdGFsPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB0b3RhbFBhZ2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHBhZ2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxpbWl0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgQ09NTU9OU19QQUNLQUdFX05BTUUgPSBcImNvbW1vbnNcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBQYWdlTWV0YSB9IGZyb20gXCIuL2NvbW1vbnNcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwiZGV2aWNlXCI7XG5cbmV4cG9ydCBlbnVtIEVEZXZpY2VPcyB7XG4gIEFORFJPSUQgPSAwLFxuICBJT1MgPSAxLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZSB7XG4gIC8qKiBkZWZhdWx0IGZpZWxkICovXG4gIGlkOiBudW1iZXI7XG4gIGNyZWF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNyZWF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQnk/OlxuICAgIHwgc3RyaW5nXG4gICAgfCB1bmRlZmluZWQ7XG4gIC8qKiByZXNlcnZlZCBmaWVsZCAqL1xuICBvcz86IEVEZXZpY2VPcyB8IHVuZGVmaW5lZDtcbiAgZGV2aWNlSWQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHRva2VuPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1c2VySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlRGV2aWNlSW5wdXQge1xuICBvczogRURldmljZU9zO1xuICBkZXZpY2VJZDogc3RyaW5nO1xuICB0b2tlbjogc3RyaW5nO1xuICB1c2VySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlcyB7XG4gIGl0ZW1zOiBEZXZpY2VbXTtcbiAgbWV0YT86IFBhZ2VNZXRhIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgREVWSUNFX1BBQ0tBR0VfTkFNRSA9IFwiZGV2aWNlXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgR3JwY01ldGhvZCwgR3JwY1N0cmVhbU1ldGhvZCB9IGZyb20gXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQnJhbmNoLCBCcmFuY2hlcywgQnJhbmNoUGFnaW5hdGlvbiwgQ3JlYXRlQnJhbmNoSW5wdXQsIE51bGxhYmxlQnJhbmNoLCBVcGRhdGVCcmFuY2hJbnB1dCB9IGZyb20gXCIuL2JyYW5jaFwiO1xuaW1wb3J0IHsgQ291bnQsIElkLCBQYWdlSW5mbywgUGFnZU1ldGEsIFF1ZXJ5UmVxdWVzdCB9IGZyb20gXCIuL2NvbW1vbnNcIjtcbmltcG9ydCB7IE51bGxWYWx1ZSB9IGZyb20gXCIuL2dvb2dsZS9wcm90b2J1Zi9zdHJ1Y3RcIjtcbmltcG9ydCB7IENyZWF0ZUdyb3VwSW5wdXQsIEdyb3VwLCBHcm91cFBhZ2luYXRpb24sIE51bGxhYmxlR3JvdXAsIFVwZGF0ZUdyb3VwSW5wdXQgfSBmcm9tIFwiLi9ncm91cFwiO1xuaW1wb3J0IHtcbiAgQ3JlYXRlU2VydmljZUlucHV0LFxuICBGaW5kU2VydmljZU9mZnNldFBhZ2luYXRpb24sXG4gIEZpbmRTZXJ2aWNlc1BheWxvYWQsXG4gIE51bGxhYmxlU2VydmljZSxcbiAgU2VydmljZSxcbiAgVXBkYXRlU2VydmljZUlucHV0LFxufSBmcm9tIFwiLi9zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcIm1lcmNoYW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlTWVyY2hhbnREYXRhIHtcbiAgbmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGFkZHJlc3M/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB3YXJkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZU1lcmNoYW50SW5wdXQge1xuICBpZDogbnVtYmVyO1xuICBkYXRhOiBVcGRhdGVNZXJjaGFudERhdGEgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlSW5wdXQge1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjaXR5Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3YXJkQ29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3Q/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHdhcmQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVyY2hhbnQge1xuICAvKiogZGVmYXVsdCBmaWVsZCAqL1xuICBpZDogbnVtYmVyO1xuICBjcmVhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjcmVhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEJ5PzpcbiAgICB8IHN0cmluZ1xuICAgIHwgdW5kZWZpbmVkO1xuICAvKiogcmVzZXJ2ZWQgZmllbGQgKi9cbiAgbmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGFkZHJlc3M/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB3YXJkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lcmNoYW50RWRnZSB7XG4gIG5vZGU6IE1lcmNoYW50IHwgdW5kZWZpbmVkO1xuICBjdXJzb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kTWVyY2hhbnRzUGF5bG9hZCB7XG4gIGVkZ2VzOiBNZXJjaGFudEVkZ2VbXTtcbiAgcGFnZUluZm86IFBhZ2VJbmZvIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE51bGxhYmxlTWVyY2hhbnQge1xuICBudWxsPzogTnVsbFZhbHVlIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudD86IE1lcmNoYW50IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZU1lcmNoYW50UmVzcG9uc2Uge1xuICBtZXJjaGFudDogTWVyY2hhbnQgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaDogQnJhbmNoIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lcmNoYW50cyB7XG4gIG1lcmNoYW50czogTWVyY2hhbnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXJjaGFudFBhZ2luYXRpb24ge1xuICBpdGVtczogTWVyY2hhbnRbXTtcbiAgbWV0YT86IFBhZ2VNZXRhIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgTUVSQ0hBTlRfUEFDS0FHRV9OQU1FID0gXCJtZXJjaGFudFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lcmNoYW50U2VydmljZUNsaWVudCB7XG4gIGZpbmQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxNZXJjaGFudFBhZ2luYXRpb24+O1xuXG4gIGZpbmRBbGwocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxNZXJjaGFudHM+O1xuXG4gIGZpbmRPbmUocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxOdWxsYWJsZU1lcmNoYW50PjtcblxuICBjcmVhdGUocmVxdWVzdDogQ3JlYXRlSW5wdXQpOiBPYnNlcnZhYmxlPENyZWF0ZU1lcmNoYW50UmVzcG9uc2U+O1xuXG4gIGNvdW50KHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8Q291bnQ+O1xuXG4gIGZpbmRCeUlkKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxOdWxsYWJsZU1lcmNoYW50PjtcblxuICAvKiogYnJhbmNoICovXG5cbiAgYnJhbmNoKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8TnVsbGFibGVCcmFuY2g+O1xuXG4gIGZpbmRCcmFuY2hlcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPEJyYW5jaFBhZ2luYXRpb24+O1xuXG4gIGJyYW5jaGVzKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8QnJhbmNoZXM+O1xuXG4gIGZpbmRCcmFuY2hCeUlkKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxOdWxsYWJsZUJyYW5jaD47XG5cbiAgY3JlYXRlQnJhbmNoKHJlcXVlc3Q6IENyZWF0ZUJyYW5jaElucHV0KTogT2JzZXJ2YWJsZTxCcmFuY2g+O1xuXG4gIHVwZGF0ZUJyYW5jaChyZXF1ZXN0OiBVcGRhdGVCcmFuY2hJbnB1dCk6IE9ic2VydmFibGU8QnJhbmNoPjtcblxuICBkZWxldGVCcmFuY2gocmVxdWVzdDogSWQpOiBPYnNlcnZhYmxlPENvdW50PjtcblxuICAvKiogZ3JvdXAgKi9cblxuICBncm91cChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPE51bGxhYmxlR3JvdXA+O1xuXG4gIGdyb3VwcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPEdyb3VwUGFnaW5hdGlvbj47XG5cbiAgZmluZEdyb3VwQnlJZChyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8TnVsbGFibGVHcm91cD47XG5cbiAgY3JlYXRlR3JvdXAocmVxdWVzdDogQ3JlYXRlR3JvdXBJbnB1dCk6IE9ic2VydmFibGU8R3JvdXA+O1xuXG4gIHVwZGF0ZUdyb3VwKHJlcXVlc3Q6IFVwZGF0ZUdyb3VwSW5wdXQpOiBPYnNlcnZhYmxlPEdyb3VwPjtcblxuICBkZWxldGVHcm91cChyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8Q291bnQ+O1xuXG4gIC8qKiBzZXJ2aWNlICovXG5cbiAgc2VydmljZShyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPE51bGxhYmxlU2VydmljZT47XG5cbiAgc2VydmljZXMocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxGaW5kU2VydmljZXNQYXlsb2FkPjtcblxuICBmaW5kU2VydmljZUJ5SWQocmVxdWVzdDogSWQpOiBPYnNlcnZhYmxlPE51bGxhYmxlU2VydmljZT47XG5cbiAgY3JlYXRlU2VydmljZShyZXF1ZXN0OiBDcmVhdGVTZXJ2aWNlSW5wdXQpOiBPYnNlcnZhYmxlPFNlcnZpY2U+O1xuXG4gIHVwZGF0ZVNlcnZpY2UocmVxdWVzdDogVXBkYXRlU2VydmljZUlucHV0KTogT2JzZXJ2YWJsZTxTZXJ2aWNlPjtcblxuICBkZWxldGVTZXJ2aWNlKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxDb3VudD47XG5cbiAgZmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8RmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXJjaGFudFNlcnZpY2VDb250cm9sbGVyIHtcbiAgZmluZChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE1lcmNoYW50UGFnaW5hdGlvbj4gfCBPYnNlcnZhYmxlPE1lcmNoYW50UGFnaW5hdGlvbj4gfCBNZXJjaGFudFBhZ2luYXRpb247XG5cbiAgZmluZEFsbChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE1lcmNoYW50cz4gfCBPYnNlcnZhYmxlPE1lcmNoYW50cz4gfCBNZXJjaGFudHM7XG5cbiAgZmluZE9uZShyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE51bGxhYmxlTWVyY2hhbnQ+IHwgT2JzZXJ2YWJsZTxOdWxsYWJsZU1lcmNoYW50PiB8IE51bGxhYmxlTWVyY2hhbnQ7XG5cbiAgY3JlYXRlKFxuICAgIHJlcXVlc3Q6IENyZWF0ZUlucHV0LFxuICApOiBQcm9taXNlPENyZWF0ZU1lcmNoYW50UmVzcG9uc2U+IHwgT2JzZXJ2YWJsZTxDcmVhdGVNZXJjaGFudFJlc3BvbnNlPiB8IENyZWF0ZU1lcmNoYW50UmVzcG9uc2U7XG5cbiAgY291bnQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xuXG4gIGZpbmRCeUlkKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxOdWxsYWJsZU1lcmNoYW50PiB8IE9ic2VydmFibGU8TnVsbGFibGVNZXJjaGFudD4gfCBOdWxsYWJsZU1lcmNoYW50O1xuXG4gIC8qKiBicmFuY2ggKi9cblxuICBicmFuY2gocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxOdWxsYWJsZUJyYW5jaD4gfCBPYnNlcnZhYmxlPE51bGxhYmxlQnJhbmNoPiB8IE51bGxhYmxlQnJhbmNoO1xuXG4gIGZpbmRCcmFuY2hlcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPEJyYW5jaFBhZ2luYXRpb24+IHwgT2JzZXJ2YWJsZTxCcmFuY2hQYWdpbmF0aW9uPiB8IEJyYW5jaFBhZ2luYXRpb247XG5cbiAgYnJhbmNoZXMocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxCcmFuY2hlcz4gfCBPYnNlcnZhYmxlPEJyYW5jaGVzPiB8IEJyYW5jaGVzO1xuXG4gIGZpbmRCcmFuY2hCeUlkKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxOdWxsYWJsZUJyYW5jaD4gfCBPYnNlcnZhYmxlPE51bGxhYmxlQnJhbmNoPiB8IE51bGxhYmxlQnJhbmNoO1xuXG4gIGNyZWF0ZUJyYW5jaChyZXF1ZXN0OiBDcmVhdGVCcmFuY2hJbnB1dCk6IFByb21pc2U8QnJhbmNoPiB8IE9ic2VydmFibGU8QnJhbmNoPiB8IEJyYW5jaDtcblxuICB1cGRhdGVCcmFuY2gocmVxdWVzdDogVXBkYXRlQnJhbmNoSW5wdXQpOiBQcm9taXNlPEJyYW5jaD4gfCBPYnNlcnZhYmxlPEJyYW5jaD4gfCBCcmFuY2g7XG5cbiAgZGVsZXRlQnJhbmNoKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xuXG4gIC8qKiBncm91cCAqL1xuXG4gIGdyb3VwKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8TnVsbGFibGVHcm91cD4gfCBPYnNlcnZhYmxlPE51bGxhYmxlR3JvdXA+IHwgTnVsbGFibGVHcm91cDtcblxuICBncm91cHMocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxHcm91cFBhZ2luYXRpb24+IHwgT2JzZXJ2YWJsZTxHcm91cFBhZ2luYXRpb24+IHwgR3JvdXBQYWdpbmF0aW9uO1xuXG4gIGZpbmRHcm91cEJ5SWQocmVxdWVzdDogSWQpOiBQcm9taXNlPE51bGxhYmxlR3JvdXA+IHwgT2JzZXJ2YWJsZTxOdWxsYWJsZUdyb3VwPiB8IE51bGxhYmxlR3JvdXA7XG5cbiAgY3JlYXRlR3JvdXAocmVxdWVzdDogQ3JlYXRlR3JvdXBJbnB1dCk6IFByb21pc2U8R3JvdXA+IHwgT2JzZXJ2YWJsZTxHcm91cD4gfCBHcm91cDtcblxuICB1cGRhdGVHcm91cChyZXF1ZXN0OiBVcGRhdGVHcm91cElucHV0KTogUHJvbWlzZTxHcm91cD4gfCBPYnNlcnZhYmxlPEdyb3VwPiB8IEdyb3VwO1xuXG4gIGRlbGV0ZUdyb3VwKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xuXG4gIC8qKiBzZXJ2aWNlICovXG5cbiAgc2VydmljZShyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE51bGxhYmxlU2VydmljZT4gfCBPYnNlcnZhYmxlPE51bGxhYmxlU2VydmljZT4gfCBOdWxsYWJsZVNlcnZpY2U7XG5cbiAgc2VydmljZXMocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxGaW5kU2VydmljZXNQYXlsb2FkPiB8IE9ic2VydmFibGU8RmluZFNlcnZpY2VzUGF5bG9hZD4gfCBGaW5kU2VydmljZXNQYXlsb2FkO1xuXG4gIGZpbmRTZXJ2aWNlQnlJZChyZXF1ZXN0OiBJZCk6IFByb21pc2U8TnVsbGFibGVTZXJ2aWNlPiB8IE9ic2VydmFibGU8TnVsbGFibGVTZXJ2aWNlPiB8IE51bGxhYmxlU2VydmljZTtcblxuICBjcmVhdGVTZXJ2aWNlKHJlcXVlc3Q6IENyZWF0ZVNlcnZpY2VJbnB1dCk6IFByb21pc2U8U2VydmljZT4gfCBPYnNlcnZhYmxlPFNlcnZpY2U+IHwgU2VydmljZTtcblxuICB1cGRhdGVTZXJ2aWNlKHJlcXVlc3Q6IFVwZGF0ZVNlcnZpY2VJbnB1dCk6IFByb21pc2U8U2VydmljZT4gfCBPYnNlcnZhYmxlPFNlcnZpY2U+IHwgU2VydmljZTtcblxuICBkZWxldGVTZXJ2aWNlKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xuXG4gIGZpbmRTZXJ2aWNlT2Zmc2V0UGFnaW5hdGlvbihcbiAgICByZXF1ZXN0OiBRdWVyeVJlcXVlc3QsXG4gICk6IFByb21pc2U8RmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uPiB8IE9ic2VydmFibGU8RmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uPiB8IEZpbmRTZXJ2aWNlT2Zmc2V0UGFnaW5hdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1lcmNoYW50U2VydmljZUNvbnRyb2xsZXJNZXRob2RzKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnN0cnVjdG9yOiBGdW5jdGlvbikge1xuICAgIGNvbnN0IGdycGNNZXRob2RzOiBzdHJpbmdbXSA9IFtcbiAgICAgIFwiZmluZFwiLFxuICAgICAgXCJmaW5kQWxsXCIsXG4gICAgICBcImZpbmRPbmVcIixcbiAgICAgIFwiY3JlYXRlXCIsXG4gICAgICBcImNvdW50XCIsXG4gICAgICBcImZpbmRCeUlkXCIsXG4gICAgICBcImJyYW5jaFwiLFxuICAgICAgXCJmaW5kQnJhbmNoZXNcIixcbiAgICAgIFwiYnJhbmNoZXNcIixcbiAgICAgIFwiZmluZEJyYW5jaEJ5SWRcIixcbiAgICAgIFwiY3JlYXRlQnJhbmNoXCIsXG4gICAgICBcInVwZGF0ZUJyYW5jaFwiLFxuICAgICAgXCJkZWxldGVCcmFuY2hcIixcbiAgICAgIFwiZ3JvdXBcIixcbiAgICAgIFwiZ3JvdXBzXCIsXG4gICAgICBcImZpbmRHcm91cEJ5SWRcIixcbiAgICAgIFwiY3JlYXRlR3JvdXBcIixcbiAgICAgIFwidXBkYXRlR3JvdXBcIixcbiAgICAgIFwiZGVsZXRlR3JvdXBcIixcbiAgICAgIFwic2VydmljZVwiLFxuICAgICAgXCJzZXJ2aWNlc1wiLFxuICAgICAgXCJmaW5kU2VydmljZUJ5SWRcIixcbiAgICAgIFwiY3JlYXRlU2VydmljZVwiLFxuICAgICAgXCJ1cGRhdGVTZXJ2aWNlXCIsXG4gICAgICBcImRlbGV0ZVNlcnZpY2VcIixcbiAgICAgIFwiZmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uXCIsXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY01ldGhvZChcIk1lcmNoYW50U2VydmljZVwiLCBtZXRob2QpKGNvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2RdLCBtZXRob2QsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICBjb25zdCBncnBjU3RyZWFtTWV0aG9kczogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjU3RyZWFtTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY1N0cmVhbU1ldGhvZChcIk1lcmNoYW50U2VydmljZVwiLCBtZXRob2QpKGNvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2RdLCBtZXRob2QsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IE1FUkNIQU5UX1NFUlZJQ0VfTkFNRSA9IFwiTWVyY2hhbnRTZXJ2aWNlXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgRVVzZXJSb2xlLCBFVXNlclN0YXR1cywgUGFnZU1ldGEgfSBmcm9tIFwiLi9jb21tb25zXCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcIm1lcmNoYW50X3VzZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBNZXJjaGFudFVzZXIge1xuICAvKiogZGVmYXVsdCBmaWVsZCAqL1xuICBpZDogbnVtYmVyO1xuICBjcmVhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjcmVhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEJ5PzpcbiAgICB8IHN0cmluZ1xuICAgIHwgdW5kZWZpbmVkO1xuICAvKiogcmVzZXJ2ZWQgZmllbGQgKi9cbiAgcm9sZT86IEVVc2VyUm9sZSB8IHVuZGVmaW5lZDtcbiAgc3RhdHVzPzogRVVzZXJTdGF0dXMgfCB1bmRlZmluZWQ7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTWVyY2hhbnRVc2VySW5wdXQge1xuICByb2xlPzogRVVzZXJSb2xlIHwgdW5kZWZpbmVkO1xuICBzdGF0dXM/OiBFVXNlclN0YXR1cyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBicmFuY2hJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXJjaGFudFVzZXJzIHtcbiAgaXRlbXM6IE1lcmNoYW50VXNlcltdO1xuICBtZXRhPzogUGFnZU1ldGEgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlTWVyY2hhbnRVc2VyRGF0YSB7XG4gIHJvbGU/OiBFVXNlclJvbGUgfCB1bmRlZmluZWQ7XG4gIHN0YXR1cz86IEVVc2VyU3RhdHVzIHwgdW5kZWZpbmVkO1xuICB1c2VySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZU1lcmNoYW50VXNlcklucHV0IHtcbiAgaWQ6IG51bWJlcjtcbiAgZGF0YTogVXBkYXRlTWVyY2hhbnRVc2VyRGF0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IE1FUkNIQU5UX1VTRVJfUEFDS0FHRV9OQU1FID0gXCJtZXJjaGFudF91c2VyXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgR3JwY01ldGhvZCwgR3JwY1N0cmVhbU1ldGhvZCB9IGZyb20gXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgRUJvb2tpbmdTdGF0dXMsIEVOb3RpZmljYXRpb25UeXBlIH0gZnJvbSBcIi4vY29tbW9uc1wiO1xuaW1wb3J0IHsgTnVsbFZhbHVlIH0gZnJvbSBcIi4vZ29vZ2xlL3Byb3RvYnVmL3N0cnVjdFwiO1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJub3RpZmljYXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb24ge1xuICAvKiogZGVmYXVsdCBmaWVsZCAqL1xuICBpZDogbnVtYmVyO1xuICBjcmVhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjcmVhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEJ5PzpcbiAgICB8IHN0cmluZ1xuICAgIHwgdW5kZWZpbmVkO1xuICAvKiogcmVzZXJ2ZWQgZmllbGQgKi9cbiAgc3RhdHVzPzogRUJvb2tpbmdTdGF0dXMgfCB1bmRlZmluZWQ7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc2VydmljZUlkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzdGFydFRpbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGVuZFRpbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGR1cmF0aW9uPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBub3RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBicmFuY2hJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgaXNDdXN0b21lckNhbmNlbD86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIGNhbmNlbFJlYXNvbj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYm9va2luZ0RhdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGlzQWRtaW5VcGRhdGU/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICBhZG1pblVwZGF0ZUlkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZXJ2aWNlTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lckVtYWlsPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lckFkZHJlc3M/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGR1cmF0aW9uSG91cj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZHVyYXRpb25NaW51dGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlbmRlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB0aXRsZUVuPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB0aXRsZVZpPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBib2R5RW4/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGJvZHlWaT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdHlwZT86IEVOb3RpZmljYXRpb25UeXBlIHwgdW5kZWZpbmVkO1xuICBkYXRhX2pzb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTm90aWZpY2F0aW9uSW5wdXQge1xuICBzdGF0dXM/OiBFQm9va2luZ1N0YXR1cyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZXJ2aWNlSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHN0YXJ0VGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZW5kVGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRtaW5CcmFuY2hFbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJFbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBib29raW5nRGF0ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbm90ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2VOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBzZW5kZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgdGl0bGVFbj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdGl0bGVWaT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYm9keUVuPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBib2R5Vmk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHR5cGU/OiBFTm90aWZpY2F0aW9uVHlwZSB8IHVuZGVmaW5lZDtcbiAgZGF0YV9qc29uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE51bGxhYmxlTm90aWZpY2F0aW9uIHtcbiAgbnVsbD86IE51bGxWYWx1ZSB8IHVuZGVmaW5lZDtcbiAgbm90aWZpY2F0aW9uPzogTm90aWZpY2F0aW9uIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgTk9USUZJQ0FUSU9OX1BBQ0tBR0VfTkFNRSA9IFwibm90aWZpY2F0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uU2VydmljZUNsaWVudCB7XG4gIGNyZWF0ZShyZXF1ZXN0OiBDcmVhdGVOb3RpZmljYXRpb25JbnB1dCk6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uPjtcblxuICBjcmVhdGVCb29raW5nTm90aWZpY2F0aW9uKHJlcXVlc3Q6IENyZWF0ZU5vdGlmaWNhdGlvbklucHV0KTogT2JzZXJ2YWJsZTxOb3RpZmljYXRpb24+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvblNlcnZpY2VDb250cm9sbGVyIHtcbiAgY3JlYXRlKHJlcXVlc3Q6IENyZWF0ZU5vdGlmaWNhdGlvbklucHV0KTogUHJvbWlzZTxOb3RpZmljYXRpb24+IHwgT2JzZXJ2YWJsZTxOb3RpZmljYXRpb24+IHwgTm90aWZpY2F0aW9uO1xuXG4gIGNyZWF0ZUJvb2tpbmdOb3RpZmljYXRpb24oXG4gICAgcmVxdWVzdDogQ3JlYXRlTm90aWZpY2F0aW9uSW5wdXQsXG4gICk6IFByb21pc2U8Tm90aWZpY2F0aW9uPiB8IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uPiB8IE5vdGlmaWNhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5vdGlmaWNhdGlvblNlcnZpY2VDb250cm9sbGVyTWV0aG9kcygpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb25zdHJ1Y3RvcjogRnVuY3Rpb24pIHtcbiAgICBjb25zdCBncnBjTWV0aG9kczogc3RyaW5nW10gPSBbXCJjcmVhdGVcIiwgXCJjcmVhdGVCb29raW5nTm90aWZpY2F0aW9uXCJdO1xuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIGdycGNNZXRob2RzKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yOiBhbnkgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG1ldGhvZCk7XG4gICAgICBHcnBjTWV0aG9kKFwiTm90aWZpY2F0aW9uU2VydmljZVwiLCBtZXRob2QpKGNvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2RdLCBtZXRob2QsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICBjb25zdCBncnBjU3RyZWFtTWV0aG9kczogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjU3RyZWFtTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY1N0cmVhbU1ldGhvZChcIk5vdGlmaWNhdGlvblNlcnZpY2VcIiwgbWV0aG9kKShjb25zdHJ1Y3Rvci5wcm90b3R5cGVbbWV0aG9kXSwgbWV0aG9kLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBOT1RJRklDQVRJT05fU0VSVklDRV9OQU1FID0gXCJOb3RpZmljYXRpb25TZXJ2aWNlXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgUGFnZUluZm8gfSBmcm9tIFwiLi9jb21tb25zXCI7XG5pbXBvcnQgeyBOdWxsVmFsdWUgfSBmcm9tIFwiLi9nb29nbGUvcHJvdG9idWYvc3RydWN0XCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcInNlcnZpY2VcIjtcblxuZXhwb3J0IGVudW0gRVNlcnZpY2VTaG93VHlwZSB7XG4gIEJPVEggPSAwLFxuICBDQVNISUVSID0gMSxcbiAgQk9PS0lORyA9IDIsXG4gIE5PTkUgPSAzLFxufVxuXG5leHBvcnQgZW51bSBFU2VydmljZVR5cGUge1xuICBTRVJWSUNFID0gMCxcbiAgUFJPRFVDVCA9IDEsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlU2VydmljZURhdGEge1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBza3U/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBpbWFnZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVTZXJ2aWNlSW5wdXQge1xuICBpZDogbnVtYmVyO1xuICBkYXRhOiBVcGRhdGVTZXJ2aWNlRGF0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVTZXJ2aWNlSW5wdXQge1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBncm91cElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBwcmljZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgaW5pdGlhbFByaWNlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjYXBpdGFsUHJpY2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGR1cmF0aW9uSG91cj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZHVyYXRpb25NaW51dGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNrdT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29kZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGltYWdlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB0eXBlPzogRVNlcnZpY2VUeXBlIHwgdW5kZWZpbmVkO1xuICBzaG93VHlwZT86IEVTZXJ2aWNlU2hvd1R5cGUgfCB1bmRlZmluZWQ7XG4gIGNhblByaW50YWJsZUludm9pY2U/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2Uge1xuICAvKiogZGVmYXVsdCBmaWVsZCAqL1xuICBpZDogbnVtYmVyO1xuICBjcmVhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjcmVhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEJ5PzpcbiAgICB8IHN0cmluZ1xuICAgIHwgdW5kZWZpbmVkO1xuICAvKiogcmVzZXJ2ZWQgZmllbGQgKi9cbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZ3JvdXBJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcHJpY2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGluaXRpYWxQcmljZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2FwaXRhbFByaWNlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkdXJhdGlvbkhvdXI/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGR1cmF0aW9uTWludXRlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBza3U/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBpbWFnZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdHlwZT86IEVTZXJ2aWNlVHlwZSB8IHVuZGVmaW5lZDtcbiAgc2hvd1R5cGU/OiBFU2VydmljZVNob3dUeXBlIHwgdW5kZWZpbmVkO1xuICBjYW5QcmludGFibGVJbnZvaWNlPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlRWRnZSB7XG4gIG5vZGU6IFNlcnZpY2UgfCB1bmRlZmluZWQ7XG4gIGN1cnNvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRTZXJ2aWNlc1BheWxvYWQge1xuICBlZGdlczogU2VydmljZUVkZ2VbXTtcbiAgcGFnZUluZm86IFBhZ2VJbmZvIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE51bGxhYmxlU2VydmljZSB7XG4gIG51bGw/OiBOdWxsVmFsdWUgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2U/OiBTZXJ2aWNlIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRTZXJ2aWNlT2Zmc2V0UGFnaW5hdGlvbiB7XG4gIGl0ZW1zOiBTZXJ2aWNlW107XG4gIHRvdGFsUGFnZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgdG90YWw/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHBhZ2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxpbWl0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgU0VSVklDRV9QQUNLQUdFX05BTUUgPSBcInNlcnZpY2VcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBHcnBjTWV0aG9kLCBHcnBjU3RyZWFtTWV0aG9kIH0gZnJvbSBcIkBuZXN0anMvbWljcm9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBDb3VudCwgRUN1c3RvbWVyTGV2ZWwsIEVVc2VyR2VuZGVyLCBFVXNlclJvbGUsIEVVc2VyU3RhdHVzLCBJZCwgUGFnZU1ldGEsIFF1ZXJ5UmVxdWVzdCB9IGZyb20gXCIuL2NvbW1vbnNcIjtcbmltcG9ydCB7IENyZWF0ZURldmljZUlucHV0LCBEZXZpY2UsIERldmljZXMgfSBmcm9tIFwiLi9kZXZpY2VcIjtcbmltcG9ydCB7IE51bGxWYWx1ZSB9IGZyb20gXCIuL2dvb2dsZS9wcm90b2J1Zi9zdHJ1Y3RcIjtcbmltcG9ydCB7IENyZWF0ZU1lcmNoYW50VXNlcklucHV0LCBNZXJjaGFudFVzZXIgfSBmcm9tIFwiLi9tZXJjaGFudF91c2VyXCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImR1Y3BoX3VzZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgLyoqIGRlZmF1bHQgZmllbGQgKi9cbiAgaWQ6IG51bWJlcjtcbiAgY3JlYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3JlYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRCeT86XG4gICAgfCBzdHJpbmdcbiAgICB8IHVuZGVmaW5lZDtcbiAgLyoqIHJlc2VydmVkIGZpZWxkICovXG4gIGVtYWlsPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwYXNzd29yZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgc3RhdHVzPzogRVVzZXJTdGF0dXMgfCB1bmRlZmluZWQ7XG4gIGZ1bGxOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjb250YWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZU51bWJlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZG9iRGF5PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkb2JNb250aD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZG9iWWVhcj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcm9sZT86IEVVc2VyUm9sZSB8IHVuZGVmaW5lZDtcbiAgZ2VuZGVyPzogRVVzZXJHZW5kZXIgfCB1bmRlZmluZWQ7XG4gIG9jY3VwYXRpb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGF2YXRhcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHJlZmVycmVyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWZlcnJlckNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGxldmVsPzogRUN1c3RvbWVyTGV2ZWwgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyQ29kZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZmFjZWJvb2s/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHphbG9QaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaGVpZ2h0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3ZWlnaHQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG1lbWJlckNhcmRObz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29tcGFueT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdGF4Tm8/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG5vdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbGF0ZWRVc2VyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWxhdGVkVXNlclJvbGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbGF0ZWRVc2VyUGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBsYXRpdHVkZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbG9uZ2l0dWRlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBpc1JldGFpbEN1c3RvbWVyPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVVc2VySW5wdXQge1xuICBlbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGFzc3dvcmQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHN0YXR1cz86IEVVc2VyU3RhdHVzIHwgdW5kZWZpbmVkO1xuICBmdWxsTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29udGFjdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGhvbmVOdW1iZXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRvYkRheT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZG9iTW9udGg/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRvYlllYXI/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHJvbGU/OiBFVXNlclJvbGUgfCB1bmRlZmluZWQ7XG4gIGdlbmRlcj86IEVVc2VyR2VuZGVyIHwgdW5kZWZpbmVkO1xuICBvY2N1cGF0aW9uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhdmF0YXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGFkZHJlc3M/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNpdHlDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkaXN0cmljdENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHdhcmRDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICByZWZlcnJlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVmZXJyZXJDb2RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBsZXZlbD86IEVDdXN0b21lckxldmVsIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lckNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGZhY2Vib29rPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB6YWxvUGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGhlaWdodD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2VpZ2h0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBtZW1iZXJDYXJkTm8/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvbXBhbnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHRheE5vPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBub3RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWxhdGVkVXNlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVsYXRlZFVzZXJSb2xlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWxhdGVkVXNlclBob25lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBicmFuY2hJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbGF0aXR1ZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxvbmdpdHVkZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgaXNSZXRhaWxDdXN0b21lcj86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlVXNlclJlcXVlc3Qge1xuICB1c2VyOiBDcmVhdGVVc2VySW5wdXQgfCB1bmRlZmluZWQ7XG4gIGRldmljZT86IENyZWF0ZURldmljZUlucHV0IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRPbmVVc2VyIHtcbiAgdXNlcjogVXNlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVVc2VySW5wdXQge1xuICBpZDogbnVtYmVyO1xuICBkYXRhOiBVcGRhdGVVc2VyRGF0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOdWxsYWJsZVVzZXIge1xuICBudWxsPzogTnVsbFZhbHVlIHwgdW5kZWZpbmVkO1xuICB1c2VyPzogVXNlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVVc2VyRGF0YSB7XG4gIGVtYWlsPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwYXNzd29yZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgc3RhdHVzPzogRVVzZXJTdGF0dXMgfCB1bmRlZmluZWQ7XG4gIGZ1bGxOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjb250YWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZU51bWJlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZG9iRGF5PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkb2JNb250aD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZG9iWWVhcj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcm9sZT86IEVVc2VyUm9sZSB8IHVuZGVmaW5lZDtcbiAgZ2VuZGVyPzogRVVzZXJHZW5kZXIgfCB1bmRlZmluZWQ7XG4gIG9jY3VwYXRpb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGF2YXRhcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHJlZmVycmVyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWZlcnJlckNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGxldmVsPzogRUN1c3RvbWVyTGV2ZWwgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyQ29kZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZmFjZWJvb2s/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHphbG9QaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaGVpZ2h0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3ZWlnaHQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG1lbWJlckNhcmRObz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29tcGFueT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdGF4Tm8/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG5vdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbGF0ZWRVc2VyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWxhdGVkVXNlclJvbGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbGF0ZWRVc2VyUGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZE9wZXJhdG9ySW5wdXQge1xuICB1c2VyOiBDcmVhdGVVc2VySW5wdXQgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50VXNlcj86IENyZWF0ZU1lcmNoYW50VXNlcklucHV0IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkbWluVXBkYXRlQ3VzdG9tZXJJbnB1dCB7XG4gIGlkOiBudW1iZXI7XG4gIHVzZXI6IFVwZGF0ZVVzZXJEYXRhIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudFVzZXI/OiBDcmVhdGVNZXJjaGFudFVzZXJJbnB1dCB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyUGFnaW5hdGlvbiB7XG4gIGl0ZW1zOiBVc2VyW107XG4gIG1ldGE/OiBQYWdlTWV0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IERVQ1BIX1VTRVJfUEFDS0FHRV9OQU1FID0gXCJkdWNwaF91c2VyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclNlcnZpY2VDbGllbnQge1xuICBmaW5kKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8VXNlclBhZ2luYXRpb24+O1xuXG4gIGNyZWF0ZShyZXF1ZXN0OiBDcmVhdGVVc2VyUmVxdWVzdCk6IE9ic2VydmFibGU8RmluZE9uZVVzZXI+O1xuXG4gIGZpbmRCeUlkKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxOdWxsYWJsZVVzZXI+O1xuXG4gIGZpbmRPbmUocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxOdWxsYWJsZVVzZXI+O1xuXG4gIGNvdW50KHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8Q291bnQ+O1xuXG4gIHVwZGF0ZShyZXF1ZXN0OiBVcGRhdGVVc2VySW5wdXQpOiBPYnNlcnZhYmxlPEZpbmRPbmVVc2VyPjtcblxuICBkZWxldGVDdXN0b21lcihyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8Q291bnQ+O1xuXG4gIC8qKiBkZXZpY2UgKi9cblxuICBjcmVhdGVEZXZpY2UocmVxdWVzdDogQ3JlYXRlRGV2aWNlSW5wdXQpOiBPYnNlcnZhYmxlPERldmljZT47XG5cbiAgZmluZERldmljZXMocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxEZXZpY2VzPjtcblxuICB1cHNlcnREZXZpY2UocmVxdWVzdDogQ3JlYXRlRGV2aWNlSW5wdXQpOiBPYnNlcnZhYmxlPERldmljZT47XG5cbiAgLyoqIG1lcmNoYW50X3VzZXIgKi9cblxuICBjcmVhdGVNZXJjaGFudFVzZXIocmVxdWVzdDogQ3JlYXRlTWVyY2hhbnRVc2VySW5wdXQpOiBPYnNlcnZhYmxlPE1lcmNoYW50VXNlcj47XG5cbiAgYWRkT3BlcmF0b3IocmVxdWVzdDogQWRkT3BlcmF0b3JJbnB1dCk6IE9ic2VydmFibGU8RmluZE9uZVVzZXI+O1xuXG4gIGNvdW50Q3VzdG9tZXIocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxDb3VudD47XG5cbiAgLyoqIGN1c3RvbWVyICovXG5cbiAgYWRkQ3VzdG9tZXIocmVxdWVzdDogQWRkT3BlcmF0b3JJbnB1dCk6IE9ic2VydmFibGU8RmluZE9uZVVzZXI+O1xuXG4gIHVwZGF0ZUN1c3RvbWVyKHJlcXVlc3Q6IEFkbWluVXBkYXRlQ3VzdG9tZXJJbnB1dCk6IE9ic2VydmFibGU8RmluZE9uZVVzZXI+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTZXJ2aWNlQ29udHJvbGxlciB7XG4gIGZpbmQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxVc2VyUGFnaW5hdGlvbj4gfCBPYnNlcnZhYmxlPFVzZXJQYWdpbmF0aW9uPiB8IFVzZXJQYWdpbmF0aW9uO1xuXG4gIGNyZWF0ZShyZXF1ZXN0OiBDcmVhdGVVc2VyUmVxdWVzdCk6IFByb21pc2U8RmluZE9uZVVzZXI+IHwgT2JzZXJ2YWJsZTxGaW5kT25lVXNlcj4gfCBGaW5kT25lVXNlcjtcblxuICBmaW5kQnlJZChyZXF1ZXN0OiBJZCk6IFByb21pc2U8TnVsbGFibGVVc2VyPiB8IE9ic2VydmFibGU8TnVsbGFibGVVc2VyPiB8IE51bGxhYmxlVXNlcjtcblxuICBmaW5kT25lKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8TnVsbGFibGVVc2VyPiB8IE9ic2VydmFibGU8TnVsbGFibGVVc2VyPiB8IE51bGxhYmxlVXNlcjtcblxuICBjb3VudChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPENvdW50PiB8IE9ic2VydmFibGU8Q291bnQ+IHwgQ291bnQ7XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFVwZGF0ZVVzZXJJbnB1dCk6IFByb21pc2U8RmluZE9uZVVzZXI+IHwgT2JzZXJ2YWJsZTxGaW5kT25lVXNlcj4gfCBGaW5kT25lVXNlcjtcblxuICBkZWxldGVDdXN0b21lcihyZXF1ZXN0OiBJZCk6IFByb21pc2U8Q291bnQ+IHwgT2JzZXJ2YWJsZTxDb3VudD4gfCBDb3VudDtcblxuICAvKiogZGV2aWNlICovXG5cbiAgY3JlYXRlRGV2aWNlKHJlcXVlc3Q6IENyZWF0ZURldmljZUlucHV0KTogUHJvbWlzZTxEZXZpY2U+IHwgT2JzZXJ2YWJsZTxEZXZpY2U+IHwgRGV2aWNlO1xuXG4gIGZpbmREZXZpY2VzKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8RGV2aWNlcz4gfCBPYnNlcnZhYmxlPERldmljZXM+IHwgRGV2aWNlcztcblxuICB1cHNlcnREZXZpY2UocmVxdWVzdDogQ3JlYXRlRGV2aWNlSW5wdXQpOiBQcm9taXNlPERldmljZT4gfCBPYnNlcnZhYmxlPERldmljZT4gfCBEZXZpY2U7XG5cbiAgLyoqIG1lcmNoYW50X3VzZXIgKi9cblxuICBjcmVhdGVNZXJjaGFudFVzZXIocmVxdWVzdDogQ3JlYXRlTWVyY2hhbnRVc2VySW5wdXQpOiBQcm9taXNlPE1lcmNoYW50VXNlcj4gfCBPYnNlcnZhYmxlPE1lcmNoYW50VXNlcj4gfCBNZXJjaGFudFVzZXI7XG5cbiAgYWRkT3BlcmF0b3IocmVxdWVzdDogQWRkT3BlcmF0b3JJbnB1dCk6IFByb21pc2U8RmluZE9uZVVzZXI+IHwgT2JzZXJ2YWJsZTxGaW5kT25lVXNlcj4gfCBGaW5kT25lVXNlcjtcblxuICBjb3VudEN1c3RvbWVyKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8Q291bnQ+IHwgT2JzZXJ2YWJsZTxDb3VudD4gfCBDb3VudDtcblxuICAvKiogY3VzdG9tZXIgKi9cblxuICBhZGRDdXN0b21lcihyZXF1ZXN0OiBBZGRPcGVyYXRvcklucHV0KTogUHJvbWlzZTxGaW5kT25lVXNlcj4gfCBPYnNlcnZhYmxlPEZpbmRPbmVVc2VyPiB8IEZpbmRPbmVVc2VyO1xuXG4gIHVwZGF0ZUN1c3RvbWVyKHJlcXVlc3Q6IEFkbWluVXBkYXRlQ3VzdG9tZXJJbnB1dCk6IFByb21pc2U8RmluZE9uZVVzZXI+IHwgT2JzZXJ2YWJsZTxGaW5kT25lVXNlcj4gfCBGaW5kT25lVXNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJTZXJ2aWNlQ29udHJvbGxlck1ldGhvZHMoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29uc3RydWN0b3I6IEZ1bmN0aW9uKSB7XG4gICAgY29uc3QgZ3JwY01ldGhvZHM6IHN0cmluZ1tdID0gW1xuICAgICAgXCJmaW5kXCIsXG4gICAgICBcImNyZWF0ZVwiLFxuICAgICAgXCJmaW5kQnlJZFwiLFxuICAgICAgXCJmaW5kT25lXCIsXG4gICAgICBcImNvdW50XCIsXG4gICAgICBcInVwZGF0ZVwiLFxuICAgICAgXCJkZWxldGVDdXN0b21lclwiLFxuICAgICAgXCJjcmVhdGVEZXZpY2VcIixcbiAgICAgIFwiZmluZERldmljZXNcIixcbiAgICAgIFwidXBzZXJ0RGV2aWNlXCIsXG4gICAgICBcImNyZWF0ZU1lcmNoYW50VXNlclwiLFxuICAgICAgXCJhZGRPcGVyYXRvclwiLFxuICAgICAgXCJjb3VudEN1c3RvbWVyXCIsXG4gICAgICBcImFkZEN1c3RvbWVyXCIsXG4gICAgICBcInVwZGF0ZUN1c3RvbWVyXCIsXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY01ldGhvZChcIlVzZXJTZXJ2aWNlXCIsIG1ldGhvZCkoY29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZF0sIG1ldGhvZCwgZGVzY3JpcHRvcik7XG4gICAgfVxuICAgIGNvbnN0IGdycGNTdHJlYW1NZXRob2RzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIGdycGNTdHJlYW1NZXRob2RzKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yOiBhbnkgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG1ldGhvZCk7XG4gICAgICBHcnBjU3RyZWFtTWV0aG9kKFwiVXNlclNlcnZpY2VcIiwgbWV0aG9kKShjb25zdHJ1Y3Rvci5wcm90b3R5cGVbbWV0aG9kXSwgbWV0aG9kLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBVU0VSX1NFUlZJQ0VfTkFNRSA9IFwiVXNlclNlcnZpY2VcIjtcbiIsImltcG9ydCB7XG4gIEJvb2tpbmdDb25maWcsXG4gIEJvb2tpbmdQcm90byxcbiAgTWVyY2hhbnRDb25maWcsXG4gIE1lcmNoYW50UHJvdG8sXG4gIE5vdGlmaWNhdGlvbkNvbmZpZyxcbiAgTm90aWZpY2F0aW9uUHJvdG8sXG4gIFVzZXJDb25maWcsXG4gIFVzZXJQcm90byxcbn0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5pbXBvcnQgeyBUcmFuc3BvcnQgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuXG5leHBvcnQgY29uc3QgVXNlclNlcnZlcjogYW55ID0ge1xuICBuYW1lOiBVc2VyUHJvdG8uRFVDUEhfVVNFUl9QQUNLQUdFX05BTUUsXG4gIHRyYW5zcG9ydDogVHJhbnNwb3J0LkdSUEMsXG4gIG9wdGlvbnM6IHtcbiAgICBwYWNrYWdlOiBVc2VyUHJvdG8uRFVDUEhfVVNFUl9QQUNLQUdFX05BTUUsXG4gICAgcHJvdG9QYXRoOiBVc2VyQ29uZmlnLnBhdGgsXG4gICAgdXJsOiBgJHtVc2VyQ29uZmlnLmxvY2FsSG9zdG5hbWV9OiR7VXNlckNvbmZpZy5wb3J0fWAsXG4gICAgbG9hZGVyOiBVc2VyQ29uZmlnLmxvYWRlcixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBNZXJjaGFudFNlcnZlcjogYW55ID0ge1xuICBuYW1lOiBNZXJjaGFudFByb3RvLk1FUkNIQU5UX1BBQ0tBR0VfTkFNRSxcbiAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuR1JQQyxcbiAgb3B0aW9uczoge1xuICAgIHBhY2thZ2U6IE1lcmNoYW50UHJvdG8uTUVSQ0hBTlRfUEFDS0FHRV9OQU1FLFxuICAgIHByb3RvUGF0aDogTWVyY2hhbnRDb25maWcucGF0aCxcbiAgICB1cmw6IGAke01lcmNoYW50Q29uZmlnLmxvY2FsSG9zdG5hbWV9OiR7TWVyY2hhbnRDb25maWcucG9ydH1gLFxuICAgIGxvYWRlcjogTWVyY2hhbnRDb25maWcubG9hZGVyLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEJvb2tpbmdTZXJ2ZXI6IGFueSA9IHtcbiAgbmFtZTogQm9va2luZ1Byb3RvLkJPT0tJTkdfUEFDS0FHRV9OQU1FLFxuICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5HUlBDLFxuICBvcHRpb25zOiB7XG4gICAgcGFja2FnZTogQm9va2luZ1Byb3RvLkJPT0tJTkdfUEFDS0FHRV9OQU1FLFxuICAgIHByb3RvUGF0aDogQm9va2luZ0NvbmZpZy5wYXRoLFxuICAgIHVybDogYCR7Qm9va2luZ0NvbmZpZy5sb2NhbEhvc3RuYW1lfToke0Jvb2tpbmdDb25maWcucG9ydH1gLFxuICAgIGxvYWRlcjogQm9va2luZ0NvbmZpZy5sb2FkZXIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uU2VydmVyOiBhbnkgPSB7XG4gIG5hbWU6IE5vdGlmaWNhdGlvblByb3RvLk5PVElGSUNBVElPTl9QQUNLQUdFX05BTUUsXG4gIHRyYW5zcG9ydDogVHJhbnNwb3J0LkdSUEMsXG4gIG9wdGlvbnM6IHtcbiAgICBwYWNrYWdlOiBOb3RpZmljYXRpb25Qcm90by5OT1RJRklDQVRJT05fUEFDS0FHRV9OQU1FLFxuICAgIHByb3RvUGF0aDogTm90aWZpY2F0aW9uQ29uZmlnLnBhdGgsXG4gICAgdXJsOiBgJHtOb3RpZmljYXRpb25Db25maWcubG9jYWxIb3N0bmFtZX06JHtOb3RpZmljYXRpb25Db25maWcucG9ydH1gLFxuICAgIGxvYWRlcjogTm90aWZpY2F0aW9uQ29uZmlnLmxvYWRlcixcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYWxsSGFuZGxlciwgRXhlY3V0aW9uQ29udGV4dCwgSW5qZWN0YWJsZSwgTG9nZ2VyLCBOZXN0SW50ZXJjZXB0b3IgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcnBjTG9nSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBOZXN0SW50ZXJjZXB0b3Ige1xuICBwcml2YXRlIHJlYWRvbmx5IGxvZ2dlciA9IG5ldyBMb2dnZXIoR3JwY0xvZ0ludGVyY2VwdG9yLm5hbWUpO1xuXG4gIGludGVyY2VwdChjb250ZXh0OiBFeGVjdXRpb25Db250ZXh0LCBuZXh0OiBDYWxsSGFuZGxlcik6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGNvbnN0IHJlcUJvZHkgPSBjb250ZXh0LnN3aXRjaFRvUnBjKCkuZ2V0RGF0YSgpO1xuICAgIGNvbnN0IG1ldGhvZCA9IGNvbnRleHQuZ2V0SGFuZGxlcigpLm5hbWU7XG4gICAgY29uc3QgY29udGV4dFR5cGUgPSBjb250ZXh0LmdldFR5cGUoKTtcbiAgICBjb25zdCBjb250cm9sbGVyTmFtZSA9IGNvbnRleHQuZ2V0Q2xhc3MoKS5uYW1lO1xuICAgIHRoaXMubG9nZ2VyLmxvZyhgR1JQQy1SRVFVRVNUOiBbJHtjb250ZXh0VHlwZX1dOlske2NvbnRyb2xsZXJOYW1lfV06WyR7bWV0aG9kfV06LT4gJHtKU09OLnN0cmluZ2lmeShyZXFCb2R5KX1gKTtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUoKS5waXBlKFxuICAgICAgdGFwKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhgR1JQQy1SRVNQT05TRTogWyR7Y29udGV4dFR5cGV9XTpbJHtjb250cm9sbGVyTmFtZX1dOlske21ldGhvZH1dfWApO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi90cmFuc2Zvcm0uaW50ZXJjZXB0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9ncnBjLWxvZy5pbnRlcmNlcHRvcic7XG4iLCJpbXBvcnQgeyBDYWxsSGFuZGxlciwgRXhlY3V0aW9uQ29udGV4dCwgSW5qZWN0YWJsZSwgTG9nZ2VyLCBOZXN0SW50ZXJjZXB0b3IgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBvbWl0IH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGludGVyZmFjZSBNZXRhSW50ZXJmYWNlIHtcbiAgcGFyYW1zOiBhbnk7XG4gIHN0YXR1czogYm9vbGVhbjtcbiAgZXJyb3JDb2RlPzogc3RyaW5nO1xuICB0aW1lc3RhbXA6IERhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2U8VD4ge1xuICBtZXRhPzogc3RyaW5nO1xuICBzdGF0dXNDb2RlPzogbnVtYmVyO1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICByZXN1bHQ6IFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VIYW5kbGVEYXRhIHtcbiAgY29kZT86IG51bWJlcjtcbiAgbWV0YT86IHN0cmluZztcbiAgc3RhdHVzQ29kZT86IG51bWJlcjtcbiAgbWVzc2FnZT86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zZm9ybUludGVyY2VwdG9yIGltcGxlbWVudHMgTmVzdEludGVyY2VwdG9yIHtcbiAgcHJpdmF0ZSBsb2dnZXIgPSBuZXcgTG9nZ2VyKFRyYW5zZm9ybUludGVyY2VwdG9yLm5hbWUpO1xuXG4gIGludGVyY2VwdChjb250ZXh0OiBFeGVjdXRpb25Db250ZXh0LCBuZXh0OiBDYWxsSGFuZGxlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBjb250ZXh0LnN3aXRjaFRvSHR0cCgpLmdldFJlcXVlc3QoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGNvbnRleHQuc3dpdGNoVG9IdHRwKCkuZ2V0UmVzcG9uc2U8UmVzcG9uc2VIYW5kbGVEYXRhPigpO1xuICAgIGNvbnN0IHsgbWV0aG9kLCB1cmwsIGJvZHksIHBhcmFtcywgc3RhdHVzLCBxdWVyeSB9ID0gcmVxdWVzdDtcbiAgICB0aGlzLmxvZ2dlci5sb2coYFJFUSBbJHttZXRob2R9ICR7dXJsfV06LT4gJHtKU09OLnN0cmluZ2lmeShib2R5KX1gKTtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUoKS5waXBlKFxuICAgICAgbWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0ge1xuICAgICAgICAgIG1ldGE6IEpTT04uc3RyaW5naWZ5KHsgcGFyYW1zOiBwYXJhbXMsIHN0YXR1czogc3RhdHVzLCBxdWVyeSwgdGltZXN0YW1wOiBuZXcgRGF0ZSgpIH0pLFxuICAgICAgICAgIG1lc3NhZ2U6IGRhdGE/Lm1lc3NhZ2UgPz8gcmVzcG9uc2UubWVzc2FnZSA/PyByZXF1ZXN0Py5tZXNzYWdlID8/ICdPaycsXG4gICAgICAgICAgY29kZTogZGF0YT8uc3RhdHVzQ29kZSA/PyBzdGF0dXMgPz8gcmVzcG9uc2UuY29kZSA/PyByZXNwb25zZS5zdGF0dXNDb2RlLFxuICAgICAgICAgIHN0YXR1c0NvZGU6IGRhdGE/LnN0YXR1c0NvZGUgPz8gc3RhdHVzID8/IHJlc3BvbnNlLnN0YXR1c0NvZGUsXG4gICAgICAgICAgcmVzdWx0OiBvbWl0KGRhdGEsIFsnbWVzc2FnZSddKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IElQb3N0Z3Jlc0VudiB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RTZWNyZXRzU2VydmljZSB7XG4gIGVudjogc3RyaW5nO1xuXG4gIHVzZXJTZXJ2aWNlRGF0YWJhc2U6IElQb3N0Z3Jlc0VudjtcblxuICBtZXJjaGFudFNlcnZpY2VEYXRhYmFzZTogSVBvc3RncmVzRW52O1xuXG4gIGJvb2tpbmdTZXJ2aWNlRGF0YWJhc2U6IElQb3N0Z3Jlc0VudjtcblxuICBub3RpZmljYXRpb25TZXJ2aWNlRGF0YWJhc2U6IElQb3N0Z3Jlc0Vudjtcbn1cbiIsImltcG9ydCB7IEdsb2JhbCwgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlIH0gZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7IFNlY3JldHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcblxuQEdsb2JhbCgpXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHtcbiAgICAgIGVudkZpbGVQYXRoOiBbJy5lbnYnXSxcbiAgICB9KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQWJzdHJhY3RTZWNyZXRzU2VydmljZSxcbiAgICAgIHVzZUNsYXNzOiBTZWNyZXRzU2VydmljZSxcbiAgICB9LFxuICBdLFxuICBleHBvcnRzOiBbQWJzdHJhY3RTZWNyZXRzU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNlY3JldHNNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlIH0gZnJvbSAnLi9hZGFwdGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlY3JldHNTZXJ2aWNlIGV4dGVuZHMgQ29uZmlnU2VydmljZSBpbXBsZW1lbnRzIEFic3RyYWN0U2VjcmV0c1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZW52ID0gdGhpcy5nZXQoJ0VOVicpO1xuXG4gIHBvcnQgPSB0aGlzLmdldDxudW1iZXI+KCdQT1JUJyk7XG5cbiAgdXNlclNlcnZpY2VEYXRhYmFzZSA9IHtcbiAgICBob3N0OiB0aGlzLmdldDxzdHJpbmc+KCdVU0VSX0RCX0hPU1QnKSxcbiAgICBwb3J0OiB0aGlzLmdldDxudW1iZXI+KCdVU0VSX0RCX1BPUlQnKSxcbiAgICB1c2VybmFtZTogdGhpcy5nZXQ8c3RyaW5nPignVVNFUl9EQl9VU0VSTkFNRScpLFxuICAgIHBhc3N3b3JkOiB0aGlzLmdldDxzdHJpbmc+KCdVU0VSX0RCX1BBU1NXT1JEJyksXG4gICAgZGF0YWJhc2U6IHRoaXMuZ2V0PHN0cmluZz4oJ1VTRVJfREJfREFUQUJBU0UnKSxcbiAgfTtcblxuICBtZXJjaGFudFNlcnZpY2VEYXRhYmFzZSA9IHtcbiAgICBob3N0OiB0aGlzLmdldDxzdHJpbmc+KCdNRVJDSEFOVF9EQl9IT1NUJyksXG4gICAgcG9ydDogdGhpcy5nZXQ8bnVtYmVyPignTUVSQ0hBTlRfREJfUE9SVCcpLFxuICAgIHVzZXJuYW1lOiB0aGlzLmdldDxzdHJpbmc+KCdNRVJDSEFOVF9EQl9VU0VSTkFNRScpLFxuICAgIHBhc3N3b3JkOiB0aGlzLmdldDxzdHJpbmc+KCdNRVJDSEFOVF9EQl9QQVNTV09SRCcpLFxuICAgIGRhdGFiYXNlOiB0aGlzLmdldDxzdHJpbmc+KCdNRVJDSEFOVF9EQl9EQVRBQkFTRScpLFxuICB9O1xuXG4gIGJvb2tpbmdTZXJ2aWNlRGF0YWJhc2UgPSB7XG4gICAgaG9zdDogdGhpcy5nZXQ8c3RyaW5nPignQk9PS0lOR19EQl9IT1NUJyksXG4gICAgcG9ydDogdGhpcy5nZXQ8bnVtYmVyPignQk9PS0lOR19EQl9QT1JUJyksXG4gICAgdXNlcm5hbWU6IHRoaXMuZ2V0PHN0cmluZz4oJ0JPT0tJTkdfREJfVVNFUk5BTUUnKSxcbiAgICBwYXNzd29yZDogdGhpcy5nZXQ8c3RyaW5nPignQk9PS0lOR19EQl9QQVNTV09SRCcpLFxuICAgIGRhdGFiYXNlOiB0aGlzLmdldDxzdHJpbmc+KCdCT09LSU5HX0RCX0RBVEFCQVNFJyksXG4gIH07XG5cbiAgbm90aWZpY2F0aW9uU2VydmljZURhdGFiYXNlID0ge1xuICAgIGhvc3Q6IHRoaXMuZ2V0PHN0cmluZz4oJ05PVElGSUNBVElPTl9EQl9IT1NUJyksXG4gICAgcG9ydDogdGhpcy5nZXQ8bnVtYmVyPignTk9USUZJQ0FUSU9OX0RCX1BPUlQnKSxcbiAgICB1c2VybmFtZTogdGhpcy5nZXQ8c3RyaW5nPignTk9USUZJQ0FUSU9OX0RCX1VTRVJOQU1FJyksXG4gICAgcGFzc3dvcmQ6IHRoaXMuZ2V0PHN0cmluZz4oJ05PVElGSUNBVElPTl9EQl9QQVNTV09SRCcpLFxuICAgIGRhdGFiYXNlOiB0aGlzLmdldDxzdHJpbmc+KCdOT1RJRklDQVRJT05fREJfREFUQUJBU0UnKSxcbiAgfTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2p3dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL21hcHBlZC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9tb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL3Bhc3Nwb3J0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvcGxhdGZvcm0tZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL3BsYXRmb3JtLXNvY2tldC5pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL3NlcXVlbGl6ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL3dlYnNvY2tldHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXJnb24yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF3cy1zZGtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnVmZmVyLXRvLXN0cmVhbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzcy10cmFuc2Zvcm1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzcy12YWxpZGF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xvdWRpbmFyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmVzdGpzLWkxOG5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtand0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9vcGVyYXRvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJlYW1pZmllclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBUcmFuc2Zvcm1JbnRlcmNlcHRvciB9IGZyb20gJ0BsaWJzL2ludGVyY2VwdG9ycyc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uUGlwZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5pbXBvcnQgeyBOZXN0RmFjdG9yeSB9IGZyb20gJ0BuZXN0anMvY29yZSc7XG5pbXBvcnQgeyBJb0FkYXB0ZXIgfSBmcm9tICdAbmVzdGpzL3BsYXRmb3JtLXNvY2tldC5pbyc7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XG5cbmltcG9ydCB7IEh0dHBFeGNlcHRpb25GaWx0ZXIgfSBmcm9tICdAL2FwaS1nYXRld2F5L2NvcmUnO1xuXG5hc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gIGNvbnN0IGFwcCA9IGF3YWl0IE5lc3RGYWN0b3J5LmNyZWF0ZShBcHBNb2R1bGUpO1xuXG4gIGNvbnN0IGNvbmZpZ1NlcnZpY2UgPSBhcHAuZ2V0PENvbmZpZ1NlcnZpY2U+KENvbmZpZ1NlcnZpY2UpO1xuXG4gIGFwcC51c2VHbG9iYWxGaWx0ZXJzKG5ldyBIdHRwRXhjZXB0aW9uRmlsdGVyKCkpO1xuICBhcHAudXNlR2xvYmFsUGlwZXMobmV3IFZhbGlkYXRpb25QaXBlKHsgdHJhbnNmb3JtOiB0cnVlIH0pKTtcbiAgYXBwLnVzZUdsb2JhbEludGVyY2VwdG9ycyhuZXcgVHJhbnNmb3JtSW50ZXJjZXB0b3IoKSk7XG4gIGFwcC51c2VXZWJTb2NrZXRBZGFwdGVyKG5ldyBJb0FkYXB0ZXIoYXBwKSk7XG4gIGFwcC5zZXRHbG9iYWxQcmVmaXgoJ2FwaScpO1xuXG4gIGFwcC5lbmFibGVTaHV0ZG93bkhvb2tzKCk7XG5cbiAgYXdhaXQgYXBwLmxpc3Rlbihjb25maWdTZXJ2aWNlLmdldDxudW1iZXI+KCdQT1JUJykpO1xuICByZXR1cm4gYXBwO1xufVxuXG5ib290c3RyYXAoKS50aGVuKGFzeW5jIChhcHApID0+IHtcbiAgY29uc29sZS5sb2coYGdhdGV3YXkgaXMgcnVubmluZyBvbiA6ICR7YXdhaXQgYXBwLmdldFVybCgpfWApO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=