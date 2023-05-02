/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api-gateway/src/dtos/common/common.dto.ts":
/*!********************************************************!*\
  !*** ./apps/api-gateway/src/dtos/common/common.dto.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EBookingStatus = exports.EUserStatus = exports.ECustomerLevel = exports.EUserRole = exports.EUserGender = exports.EDeviceOs = exports.EImageType = exports.EServeImageType = exports.EServiceType = exports.EServiceShowType = exports.ESortDirection = void 0;
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
    EBookingStatus[EBookingStatus["PENDING"] = 0] = "PENDING";
    EBookingStatus[EBookingStatus["APPROVE"] = 1] = "APPROVE";
    EBookingStatus[EBookingStatus["CANCELLED"] = 2] = "CANCELLED";
    EBookingStatus[EBookingStatus["REJECT"] = 3] = "REJECT";
})(EBookingStatus = exports.EBookingStatus || (exports.EBookingStatus = {}));


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

/***/ "./apps/booking-service/src/app.module.ts":
/*!************************************************!*\
  !*** ./apps/booking-service/src/app.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const database_1 = __webpack_require__(/*! @libs/database */ "./libs/database/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const booking_module_1 = __webpack_require__(/*! ./booking/booking.module */ "./apps/booking-service/src/booking/booking.module.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [database_1.BookingDatabaseModule, booking_module_1.BookingModule],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/booking-service/src/booking/booking.controller.ts":
/*!****************************************************************!*\
  !*** ./apps/booking-service/src/booking/booking.controller.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingController = void 0;
const grpc_types_1 = __webpack_require__(/*! @libs/grpc-types */ "./libs/grpc-types/src/index.ts");
const interceptors_1 = __webpack_require__(/*! @libs/interceptors */ "./libs/interceptors/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const filters_1 = __webpack_require__(/*! filters/filters */ "./libs/filters/src/index.ts");
const booking_service_1 = __webpack_require__(/*! ./booking.service */ "./apps/booking-service/src/booking/booking.service.ts");
let BookingController = class BookingController {
    constructor(bookingService) {
        this.bookingService = bookingService;
    }
    find(request) {
        throw new Error('Method not implemented.');
    }
    findById(request) {
        throw new Error('Method not implemented.');
    }
    findOne(request) {
        throw new Error('Method not implemented.');
    }
    count(request) {
        throw new Error('Method not implemented.');
    }
    async create(request) {
        const result = await this.bookingService.create(request);
        return result;
    }
    update(request) {
        throw new Error('Method not implemented.');
    }
    delete(request) {
        throw new Error('Method not implemented.');
    }
};
BookingController = __decorate([
    (0, common_1.UseFilters)(filters_1.GrpcAllExceptionsFilter),
    (0, common_1.UseInterceptors)(interceptors_1.GrpcLogInterceptor),
    (0, common_1.Controller)(),
    grpc_types_1.BookingProto.BookingServiceControllerMethods(),
    __metadata("design:paramtypes", [typeof (_a = typeof booking_service_1.BookingService !== "undefined" && booking_service_1.BookingService) === "function" ? _a : Object])
], BookingController);
exports.BookingController = BookingController;


/***/ }),

/***/ "./apps/booking-service/src/booking/booking.module.ts":
/*!************************************************************!*\
  !*** ./apps/booking-service/src/booking/booking.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingModule = void 0;
const database_1 = __webpack_require__(/*! @libs/database */ "./libs/database/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sequelize_1 = __webpack_require__(/*! @nestjs/sequelize */ "@nestjs/sequelize");
const module_1 = __webpack_require__(/*! libs/modules/global/secrets/module */ "./libs/modules/global/secrets/module.ts");
const booking_controller_1 = __webpack_require__(/*! ./booking.controller */ "./apps/booking-service/src/booking/booking.controller.ts");
const booking_service_1 = __webpack_require__(/*! ./booking.service */ "./apps/booking-service/src/booking/booking.service.ts");
let BookingModule = class BookingModule {
};
BookingModule = __decorate([
    (0, common_1.Module)({
        imports: [module_1.SecretsModule, sequelize_1.SequelizeModule.forFeature([database_1.BookingModel])],
        controllers: [booking_controller_1.BookingController],
        providers: [booking_service_1.BookingService, database_1.BookingRepository],
    })
], BookingModule);
exports.BookingModule = BookingModule;


/***/ }),

/***/ "./apps/booking-service/src/booking/booking.service.ts":
/*!*************************************************************!*\
  !*** ./apps/booking-service/src/booking/booking.service.ts ***!
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
exports.BookingService = void 0;
const database_1 = __webpack_require__(/*! @libs/database */ "./libs/database/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
let BookingService = class BookingService {
    constructor(bookingRepository) {
        this.bookingRepository = bookingRepository;
    }
    async create(dto) {
        const booking = await this.bookingRepository.create(dto);
        return booking;
    }
    async find(request) {
        const merchants = await this.bookingRepository.find(JSON.parse(request.where));
        return merchants;
    }
    async findWithPaging(request) {
        const baseWhereQuery = !(0, lodash_1.isEmpty)(request.where) ? JSON.parse(request.where) : undefined;
        const result = await this.bookingRepository.findAndPaginate(Object.assign(Object.assign({}, request), { where: baseWhereQuery }));
        return result;
    }
    async findById(id) {
        const merchant = await this.bookingRepository.findById(id);
        return merchant;
    }
    async findOne(dto) {
        const where = !(0, lodash_1.isEmpty)(dto.where) ? JSON.parse(dto.where) : undefined;
        const result = await this.bookingRepository.findOne(Object.assign(Object.assign({}, dto), { where, raw: true }));
        return result;
    }
};
BookingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof database_1.BookingRepository !== "undefined" && database_1.BookingRepository) === "function" ? _a : Object])
], BookingService);
exports.BookingService = BookingService;


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
                    return Object.assign(Object.assign({ dialect: 'postgres' }, secrets.bookingServiceDatabase), { logging: false, typeValidation: true, operatorsAliases: core_1.operatorsAliases, models: [booking_1.BookingModel], autoLoadModels: true, synchronize: true, sync: {
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
const booking_1 = __webpack_require__(/*! @libs/grpc-types/protos/booking */ "./libs/grpc-types/src/protos/booking.ts");
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const base_model_1 = __webpack_require__(/*! @libs/database/entities/base.model */ "./libs/database/src/entities/base.model.ts");
const core_1 = __webpack_require__(/*! @libs/core */ "./libs/core/src/index.ts");
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
    __metadata("design:type", typeof (_a = typeof booking_1.EBookingStatus !== "undefined" && booking_1.EBookingStatus) === "function" ? _a : Object)
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
__exportStar(__webpack_require__(/*! ./notification.model */ "./libs/database/src/entities/user/notification.model.ts"), exports);
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

/***/ "./libs/database/src/entities/user/notification.model.ts":
/*!***************************************************************!*\
  !*** ./libs/database/src/entities/user/notification.model.ts ***!
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
exports.NotificationModel = void 0;
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const base_model_1 = __webpack_require__(/*! ../base.model */ "./libs/database/src/entities/base.model.ts");
let NotificationModel = class NotificationModel extends base_model_1.BaseModel {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], NotificationModel.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], NotificationModel.prototype, "content", void 0);
NotificationModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'notification',
        tableName: 'notifications',
        underscored: true,
    })
], NotificationModel);
exports.NotificationModel = NotificationModel;


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
__exportStar(__webpack_require__(/*! ./notification.repository */ "./libs/database/src/repositories/user/notification.repository.ts"), exports);
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

/***/ "./libs/database/src/repositories/user/notification.repository.ts":
/*!************************************************************************!*\
  !*** ./libs/database/src/repositories/user/notification.repository.ts ***!
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
    async findWithPaging(options, findOptions) {
        return;
    }
};
NotificationRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(entities_1.NotificationModel)),
    __metadata("design:paramtypes", [Object])
], NotificationRepository);
exports.NotificationRepository = NotificationRepository;


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
exports.GrpcMetadataErrorKey = exports.MerchantUserProto = exports.DeviceProto = exports.BranchProto = exports.NotificationProto = exports.BookingProto = exports.MerchantProto = exports.UserProto = exports.CommonProto = void 0;
const UserProto = __webpack_require__(/*! ./protos/user */ "./libs/grpc-types/src/protos/user.ts");
exports.UserProto = UserProto;
const CommonProto = __webpack_require__(/*! ./protos/commons */ "./libs/grpc-types/src/protos/commons.ts");
exports.CommonProto = CommonProto;
const MerchantProto = __webpack_require__(/*! ./protos/merchant */ "./libs/grpc-types/src/protos/merchant.ts");
exports.MerchantProto = MerchantProto;
const BookingProto = __webpack_require__(/*! ./protos/booking */ "./libs/grpc-types/src/protos/booking.ts");
exports.BookingProto = BookingProto;
const NotificationProto = __webpack_require__(/*! ./protos/notification */ "./libs/grpc-types/src/protos/notification.ts");
exports.NotificationProto = NotificationProto;
const BranchProto = __webpack_require__(/*! ./protos/branch */ "./libs/grpc-types/src/protos/branch.ts");
exports.BranchProto = BranchProto;
const DeviceProto = __webpack_require__(/*! ./protos/device */ "./libs/grpc-types/src/protos/device.ts");
exports.DeviceProto = DeviceProto;
const MerchantUserProto = __webpack_require__(/*! ./protos/merchant_user */ "./libs/grpc-types/src/protos/merchant_user.ts");
exports.MerchantUserProto = MerchantUserProto;
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
exports.BOOKING_SERVICE_NAME = exports.BookingServiceControllerMethods = exports.BOOKING_PACKAGE_NAME = exports.EBookingStatus = exports.protobufPackage = void 0;
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
exports.protobufPackage = "booking";
var EBookingStatus;
(function (EBookingStatus) {
    EBookingStatus[EBookingStatus["PENDING"] = 0] = "PENDING";
    EBookingStatus[EBookingStatus["APPROVE"] = 1] = "APPROVE";
    EBookingStatus[EBookingStatus["CANCELLED"] = 2] = "CANCELLED";
    EBookingStatus[EBookingStatus["REJECT"] = 3] = "REJECT";
})(EBookingStatus = exports.EBookingStatus || (exports.EBookingStatus = {}));
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
exports.COMMONS_PACKAGE_NAME = exports.Sort_SortNulls = exports.EUserStatus = exports.ECustomerLevel = exports.EUserRole = exports.EUserGender = exports.ESortDirection = exports.protobufPackage = void 0;
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
exports.BOOKING_SERVICE_GRPC_SERVICE_NAME = exports.BookingServiceGrpcControllerMethods = exports.NOTIFICATION_PACKAGE_NAME = exports.protobufPackage = void 0;
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
exports.protobufPackage = "notification";
exports.NOTIFICATION_PACKAGE_NAME = "notification";
function BookingServiceGrpcControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["findAll"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("BookingServiceGrpc", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("BookingServiceGrpc", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.BookingServiceGrpcControllerMethods = BookingServiceGrpcControllerMethods;
exports.BOOKING_SERVICE_GRPC_SERVICE_NAME = "BookingServiceGrpc";


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

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

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

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

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
/*!******************************************!*\
  !*** ./apps/booking-service/src/main.ts ***!
  \******************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const grpc_types_1 = __webpack_require__(/*! @libs/grpc-types */ "./libs/grpc-types/src/index.ts");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/booking-service/src/app.module.ts");
async function main() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, grpc_types_1.BookingServer);
    return app.listen();
}
main().then(() => {
    console.log('booking-service microservice is running');
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxDQUFDLENBQUM7SUFFbkgsT0FBTyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDdEIsQ0FBQztBQUVELElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDekQsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9jb21tb24vY29tbW9uLmR0by50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy9hcGktZ2F0ZXdheS9zcmMvZHRvcy9jb21tb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYm9va2luZy1zZXJ2aWNlL3NyYy9hcHAubW9kdWxlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2Jvb2tpbmctc2VydmljZS9zcmMvYm9va2luZy9ib29raW5nLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvYm9va2luZy1zZXJ2aWNlL3NyYy9ib29raW5nL2Jvb2tpbmcubW9kdWxlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2Jvb2tpbmctc2VydmljZS9zcmMvYm9va2luZy9ib29raW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvY29uc3RhbnRzL2RhdGFiYXNlLmNvbnN0YW50LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL2F1dGgvYXV0aC5tZXNzYWdlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL21lc3NhZ2UvYXV0aC9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL2NvbW1vbi5tZXNzYWdlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL21lc3NhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvbWVzc2FnZS9tZXJjaGFudC9icmFuY2gubWVzc2FnZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL21lcmNoYW50L2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL21lc3NhZ2UvbWVyY2hhbnQvbWVyY2hhbnQubWVzc2FnZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL3VzZXIvY3VzdG9tZXIubWVzc2FnZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvbWVzc2FnZS91c2VyL3VzZXIubWVzc2FnZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy91dGlscy9lcnJvci5oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvdXRpbHMvZ2VuZXJhbC51dGlsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL3V0aWxzL3Bhc3N3b3JkLnV0aWxzLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL3V0aWxzL3F1ZXJ5LnV0aWxzLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL3V0aWxzL3V0aWxzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvY29ubmVjdGlvbi9ib29raW5nLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9jb25uZWN0aW9uL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9jb25uZWN0aW9uL21lcmNoYW50LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9jb25uZWN0aW9uL3VzZXIudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL2Jhc2UubW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL2Jvb2tpbmcvYm9va2luZy5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvYm9va2luZy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL21lcmNoYW50L2JyYW5jaC5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvbWVyY2hhbnQvZ3JvdXAubW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL21lcmNoYW50L2ltYWdlLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9tZXJjaGFudC9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvbWVyY2hhbnQvbWVyY2hhbnQubW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL21lcmNoYW50L3NlcnZlLWltYWdlLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9tZXJjaGFudC9zZXJ2aWNlLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy91c2VyL2RldmljZS5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvdXNlci9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvdXNlci9tZXJjaGFudC11c2VyLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy91c2VyL25vdGlmaWNhdGlvbi5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvdXNlci91c2VyLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL2Jhc2UucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL2Jvb2tpbmcvYm9va2luZy5yZXBvc2l0b3J5LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvYm9va2luZy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvbWVyY2hhbnQvYnJhbmNoLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9tZXJjaGFudC9ncm91cC5yZXBvc2l0b3J5LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvbWVyY2hhbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9tZXJjaGFudC9tZXJjaGFudC5yZXBvc2l0b3J5LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvbWVyY2hhbnQvc2VydmljZS5yZXBvc2l0b3J5LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvdXNlci9kZXZpY2UucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy91c2VyL21lcmNoYW50LXVzZXIucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL3VzZXIvbm90aWZpY2F0aW9uLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy91c2VyL3VzZXIucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9leGNlcHRpb25zL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9leGNlcHRpb25zL3NyYy9saWIvZXJyb3ItY29kZXMudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZXhjZXB0aW9ucy9zcmMvbGliL2V4Y2VwdGlvbnMvY3VzdG9tLmV4Y2VwdGlvbi50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9leGNlcHRpb25zL3NyYy9saWIvZXhjZXB0aW9ucy9nZW5lcmFsLXNlcnZlci1lcnJvci5leGNlcHRpb24udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZXhjZXB0aW9ucy9zcmMvbGliL2V4Y2VwdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZXhjZXB0aW9ucy9zcmMvbGliL2V4Y2VwdGlvbnMvaW52YWxpZC1jcmVkZW50aWFscy5leGNlcHRpb24udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZXhjZXB0aW9ucy9zcmMvbGliL2V4Y2VwdGlvbnMvdXNlcm5hbWUtYWxyZWFkeS10YWtlbi5leGNlcHRpb24udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZmlsdGVycy9zcmMvYWxsLmV4Y2VwdGlvbnMuZmlsdGVyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2ZpbHRlcnMvc3JjL2dycGMtYWxsLmV4Y2VwdGlvbnMuZmlsdGVyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2ZpbHRlcnMvc3JjL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL2NsaWVudHMudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL3Byb3Rvcy9ib29raW5nLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL3Byb3Rvcy9icmFuY2gudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zL2NvbW1vbnMudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zL2RldmljZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MvbWVyY2hhbnQudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zL21lcmNoYW50X3VzZXIudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zL25vdGlmaWNhdGlvbi50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3Mvc2VydmljZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MvdXNlci50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9zZXJ2ZXJzLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2ludGVyY2VwdG9ycy9zcmMvZ3JwYy1sb2cuaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvaW50ZXJjZXB0b3JzL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9pbnRlcmNlcHRvcnMvc3JjL3RyYW5zZm9ybS5pbnRlcmNlcHRvci50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL2FkYXB0ZXIudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9zZXJ2aWNlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAZ3JwYy9ncnBjLWpzXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29yZVwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9zZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiYXJnb24yXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcImxvZGFzaFwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJyeGpzXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcInJ4anMvb3BlcmF0b3JzXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJzZXF1ZWxpemUtdHlwZXNjcmlwdFwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2Jvb2tpbmctc2VydmljZS9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBFU29ydERpcmVjdGlvbiB7XG4gIEFTQyA9IDAsXG4gIERFU0MgPSAxLFxufVxuXG5leHBvcnQgZW51bSBFU2VydmljZVNob3dUeXBlIHtcbiAgQk9USCA9IDAsXG4gIENBU0hJRVIgPSAxLFxuICBCT09LSU5HID0gMixcbiAgTk9ORSA9IDMsXG59XG5cbmV4cG9ydCBlbnVtIEVTZXJ2aWNlVHlwZSB7XG4gIFNFUlZJQ0UgPSAwLFxuICBQUk9EVUNUID0gMSxcbn1cblxuZXhwb3J0IGVudW0gRVNlcnZlSW1hZ2VUeXBlIHtcbiAgTUVSQ0hBTlQgPSAwLFxuICBCUkFOQ0ggPSAxLFxuICBHUk9VUCA9IDIsXG4gIFNFUlZJQ0UgPSAzLFxufVxuXG5leHBvcnQgZW51bSBFSW1hZ2VUeXBlIHtcbiAgUEhPVE8gPSAwLFxuICBWSURFTyA9IDEsXG59XG5cbmV4cG9ydCBlbnVtIEVEZXZpY2VPcyB7XG4gIEFORFJPSUQgPSAwLFxuICBJT1MgPSAxLFxufVxuXG5leHBvcnQgZW51bSBFVXNlckdlbmRlciB7XG4gIE1BTEUgPSAwLFxuICBGRU1BTEUgPSAxLFxuICBPVEhFUiA9IDIsXG59XG5cbmV4cG9ydCBlbnVtIEVVc2VyUm9sZSB7XG4gIFVTRVIgPSAwLFxuICBBRE1JTiA9IDEsXG4gIFNVUEVSX0FETUlOID0gMixcbiAgTUFTVEVSX1dPUktFUiA9IDMsXG4gIEFTU0lTVEFOVF9XT1JLRVIgPSA0LFxuICBNQU5BR0VSID0gNSxcbiAgUkVDRVBUSU9OSVNUID0gNixcbn1cblxuZXhwb3J0IGVudW0gRUN1c3RvbWVyTGV2ZWwge1xuICBOT1JNQUwgPSAwLFxuICBTSUxWRVIgPSAxLFxuICBHT0xEID0gMixcbiAgUExBVElOVU0gPSAzLFxufVxuXG5leHBvcnQgZW51bSBFVXNlclN0YXR1cyB7XG4gIFBFTkRJTkcgPSAwLFxuICBBQ1RJVkUgPSAxLFxuICBCQU5ORUQgPSAyLFxufVxuXG5leHBvcnQgZW51bSBFQm9va2luZ1N0YXR1cyB7XG4gIFBFTkRJTkcgPSAwLFxuICBBUFBST1ZFID0gMSxcbiAgQ0FOQ0VMTEVEID0gMixcbiAgUkVKRUNUID0gMyxcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vY29tbW9uLmR0byc7XG4iLCJpbXBvcnQgeyBCb29raW5nRGF0YWJhc2VNb2R1bGUgfSBmcm9tICdAbGlicy9kYXRhYmFzZSc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IEJvb2tpbmdNb2R1bGUgfSBmcm9tICcuL2Jvb2tpbmcvYm9va2luZy5tb2R1bGUnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW0Jvb2tpbmdEYXRhYmFzZU1vZHVsZSwgQm9va2luZ01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQm9va2luZ1Byb3RvIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5pbXBvcnQgeyBDb3VudCwgSWQsIFF1ZXJ5UmVxdWVzdCB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL2NvbW1vbnMnO1xuaW1wb3J0IHsgR3JwY0xvZ0ludGVyY2VwdG9yIH0gZnJvbSAnQGxpYnMvaW50ZXJjZXB0b3JzJztcbmltcG9ydCB7IENvbnRyb2xsZXIsIFVzZUZpbHRlcnMsIFVzZUludGVyY2VwdG9ycyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEdycGNBbGxFeGNlcHRpb25zRmlsdGVyIH0gZnJvbSAnZmlsdGVycy9maWx0ZXJzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQm9va2luZ1NlcnZpY2UgfSBmcm9tICcuL2Jvb2tpbmcuc2VydmljZSc7XG5cbkBVc2VGaWx0ZXJzKEdycGNBbGxFeGNlcHRpb25zRmlsdGVyKVxuQFVzZUludGVyY2VwdG9ycyhHcnBjTG9nSW50ZXJjZXB0b3IpXG5AQ29udHJvbGxlcigpXG5AQm9va2luZ1Byb3RvLkJvb2tpbmdTZXJ2aWNlQ29udHJvbGxlck1ldGhvZHMoKVxuZXhwb3J0IGNsYXNzIEJvb2tpbmdDb250cm9sbGVyIGltcGxlbWVudHMgQm9va2luZ1Byb3RvLkJvb2tpbmdTZXJ2aWNlQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYm9va2luZ1NlcnZpY2U6IEJvb2tpbmdTZXJ2aWNlKSB7fVxuXG4gIGZpbmQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxCb29raW5nUHJvdG8uRmluZEJvb2tpbmdPZmZzZXRQYWdpbmF0aW9uPiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgZmluZEJ5SWQocmVxdWVzdDogSWQpOiBQcm9taXNlPEJvb2tpbmdQcm90by5OdWxsYWJsZUJvb2tpbmc+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBmaW5kT25lKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8Qm9va2luZ1Byb3RvLk51bGxhYmxlQm9va2luZz4ge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIGNvdW50KHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IENvdW50IHwgUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlKHJlcXVlc3Q6IEJvb2tpbmdQcm90by5DcmVhdGVCb29raW5nSW5wdXQpOiBQcm9taXNlPEJvb2tpbmdQcm90by5Cb29raW5nPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5ib29raW5nU2VydmljZS5jcmVhdGUocmVxdWVzdCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IEJvb2tpbmdQcm90by5VcGRhdGVCb29raW5nSW5wdXQpOiBQcm9taXNlPEJvb2tpbmdQcm90by5Cb29raW5nPiB8IE9ic2VydmFibGU8Qm9va2luZ1Byb3RvLkJvb2tpbmc+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBkZWxldGUocmVxdWVzdDogSWQpOiBDb3VudCB8IFByb21pc2U8Q291bnQ+IHwgT2JzZXJ2YWJsZTxDb3VudD4ge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQm9va2luZ01vZGVsLCBCb29raW5nUmVwb3NpdG9yeSB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFNlcXVlbGl6ZU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcbmltcG9ydCB7IFNlY3JldHNNb2R1bGUgfSBmcm9tICdsaWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvbW9kdWxlJztcblxuaW1wb3J0IHsgQm9va2luZ0NvbnRyb2xsZXIgfSBmcm9tICcuL2Jvb2tpbmcuY29udHJvbGxlcic7XG5pbXBvcnQgeyBCb29raW5nU2VydmljZSB9IGZyb20gJy4vYm9va2luZy5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtTZWNyZXRzTW9kdWxlLCBTZXF1ZWxpemVNb2R1bGUuZm9yRmVhdHVyZShbQm9va2luZ01vZGVsXSldLFxuICBjb250cm9sbGVyczogW0Jvb2tpbmdDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbQm9va2luZ1NlcnZpY2UsIEJvb2tpbmdSZXBvc2l0b3J5XSxcbn0pXG5leHBvcnQgY2xhc3MgQm9va2luZ01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQm9va2luZ1JlcG9zaXRvcnkgfSBmcm9tICdAbGlicy9kYXRhYmFzZSc7XG5pbXBvcnQgeyBCb29raW5nUHJvdG8sIENvbW1vblByb3RvIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCb29raW5nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYm9va2luZ1JlcG9zaXRvcnk6IEJvb2tpbmdSZXBvc2l0b3J5KSB7fVxuXG4gIGFzeW5jIGNyZWF0ZShkdG86IEJvb2tpbmdQcm90by5DcmVhdGVCb29raW5nSW5wdXQpIHtcbiAgICBjb25zdCBib29raW5nID0gYXdhaXQgdGhpcy5ib29raW5nUmVwb3NpdG9yeS5jcmVhdGUoZHRvKTtcbiAgICByZXR1cm4gYm9va2luZztcbiAgfVxuXG4gIGFzeW5jIGZpbmQocmVxdWVzdDogQ29tbW9uUHJvdG8uUXVlcnlSZXF1ZXN0KSB7XG4gICAgY29uc3QgbWVyY2hhbnRzID0gYXdhaXQgdGhpcy5ib29raW5nUmVwb3NpdG9yeS5maW5kKEpTT04ucGFyc2UocmVxdWVzdC53aGVyZSkpO1xuICAgIHJldHVybiBtZXJjaGFudHM7XG4gIH1cblxuICBhc3luYyBmaW5kV2l0aFBhZ2luZyhyZXF1ZXN0OiBDb21tb25Qcm90by5RdWVyeVJlcXVlc3QpIHtcbiAgICBjb25zdCBiYXNlV2hlcmVRdWVyeSA9ICFpc0VtcHR5KHJlcXVlc3Qud2hlcmUpID8gSlNPTi5wYXJzZShyZXF1ZXN0LndoZXJlKSA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYm9va2luZ1JlcG9zaXRvcnkuZmluZEFuZFBhZ2luYXRlKHtcbiAgICAgIC4uLnJlcXVlc3QsXG4gICAgICB3aGVyZTogYmFzZVdoZXJlUXVlcnksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYXN5bmMgZmluZEJ5SWQoaWQ6IG51bWJlcikge1xuICAgIGNvbnN0IG1lcmNoYW50ID0gYXdhaXQgdGhpcy5ib29raW5nUmVwb3NpdG9yeS5maW5kQnlJZChpZCk7XG4gICAgcmV0dXJuIG1lcmNoYW50O1xuICB9XG5cbiAgYXN5bmMgZmluZE9uZShkdG86IENvbW1vblByb3RvLlF1ZXJ5UmVxdWVzdCkge1xuICAgIGNvbnN0IHdoZXJlID0gIWlzRW1wdHkoZHRvLndoZXJlKSA/IEpTT04ucGFyc2UoZHRvLndoZXJlKSA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYm9va2luZ1JlcG9zaXRvcnkuZmluZE9uZSh7XG4gICAgICAuLi5kdG8sXG4gICAgICB3aGVyZSxcbiAgICAgIHJhdzogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IE9wLCBPcGVyYXRvcnNBbGlhc2VzIH0gZnJvbSAnc2VxdWVsaXplJztcblxuZXhwb3J0IGNvbnN0IG9wZXJhdG9yc0FsaWFzZXM6IE9wZXJhdG9yc0FsaWFzZXMgPSB7XG4gIF9hbmQ6IE9wLmFuZCxcbiAgX29yOiBPcC5vcixcbiAgX2VxOiBPcC5lcSxcbiAgX25lOiBPcC5uZSxcbiAgX2lzOiBPcC5pcyxcbiAgX25vdDogT3Aubm90LFxuICBfY29sOiBPcC5jb2wsXG4gIF9ndDogT3AuZ3QsXG4gIF9ndGU6IE9wLmd0ZSxcbiAgX2x0OiBPcC5sdCxcbiAgX2x0ZTogT3AubHRlLFxuICBfYmV0d2VlbjogT3AuYmV0d2VlbixcbiAgX25vdEJldHdlZW46IE9wLm5vdEJldHdlZW4sXG4gIF9hbGw6IE9wLmFsbCxcbiAgX2luOiBPcC5pbixcbiAgX25vdEluOiBPcC5ub3RJbixcbiAgX2xpa2U6IE9wLmxpa2UsXG4gIF9ub3RMaWtlOiBPcC5ub3RMaWtlLFxuICBfc3RhcnRzV2l0aDogT3Auc3RhcnRzV2l0aCxcbiAgX2VuZHNXaXRoOiBPcC5lbmRzV2l0aCxcbiAgX3N1YnN0cmluZzogT3Auc3Vic3RyaW5nLFxuICBfaUxpa2U6IE9wLmlMaWtlLFxuICBfbm90SUxpa2U6IE9wLm5vdElMaWtlLFxuICBfcmVnZXhwOiBPcC5yZWdleHAsXG4gIF9ub3RSZWdleHA6IE9wLm5vdFJlZ2V4cCxcbiAgX2lSZWdleHA6IE9wLmlSZWdleHAsXG4gIF9ub3RJUmVnZXhwOiBPcC5ub3RJUmVnZXhwLFxuICBfYW55OiBPcC5hbnksXG4gIF9jb250YWluczogT3AuY29udGFpbnMsXG4gIF9jb250YWluZWQ6IE9wLmNvbnRhaW5lZCxcbiAgX292ZXJsYXA6IE9wLm92ZXJsYXAsXG4gIF9hZGphY2VudDogT3AuYWRqYWNlbnQsXG4gIF9zdHJpY3RMZWZ0OiBPcC5zdHJpY3RMZWZ0LFxuICBfc3RyaWN0UmlnaHQ6IE9wLnN0cmljdFJpZ2h0LFxuICBfbm9FeHRlbmRSaWdodDogT3Aubm9FeHRlbmRSaWdodCxcbiAgX25vRXh0ZW5kTGVmdDogT3Aubm9FeHRlbmRMZWZ0LFxuICBfdmFsdWVzOiBPcC52YWx1ZXMsXG59O1xuXG5leHBvcnQgY29uc3QgTElNSVQgPSAxMDtcblxuZXhwb3J0IGNvbnN0IFBBR0UgPSAxO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9kYXRhYmFzZS5jb25zdGFudCc7XG4iLCJleHBvcnQgKiBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UnO1xuIiwiZXhwb3J0IGNvbnN0IEFVVEhfTUVTU0FHRSA9IHtcbiAgTE9HSU46IHtcbiAgICBJTlZBTElEOiAnSW52YWxpZCBjcmVkZW50aWFscy4nLFxuICB9LFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vYXV0aC5tZXNzYWdlJztcbiIsImV4cG9ydCBjb25zdCBDT01NT05fTUVTU0FHRSA9IHtcbiAgSU5WQUxJRDogJ0ludmFsaWQgcmVxdWVzdCcsXG4gIENSRUFURToge1xuICAgIEVYSVNUX0VNQUlMOiAnVGhlIGVtYWlsIGlzIGV4aXN0JyxcbiAgfSxcbiAgUkVBRDoge1xuICAgIE5PVF9GT1VORDogJ1RoZSBtZXJjaGFudCBub3QgZm91bmQnLFxuICB9LFxuICBVUERBVEU6IHtcbiAgICBGQUlMOiAnQ2FuIG5vdCB1cGRhdGUgbWVyY2hhbnQnLFxuICB9LFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5cbmV4cG9ydCAqIGZyb20gJy4vbWVyY2hhbnQnO1xuXG5leHBvcnQgKiBmcm9tICcuL2F1dGgnO1xuXG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbi5tZXNzYWdlJztcbiIsImV4cG9ydCBjb25zdCBCUkFOQ0hfTUVTU0FHRSA9IHtcbiAgUkVBRDoge1xuICAgIE5PVF9GT1VORDogJ1RoZSBicmFuY2ggbm90IGZvdW5kJyxcbiAgfSxcbiAgQ1JFQVRFOiB7XG4gICAgRVhJU1RFRDogJ1RoZSBicmFuY2ggaXMgZXhpc3QnLFxuICB9LFxuICBVUERBVEU6IHtcbiAgICBGQUlMOiAnQ2FuIG5vdCB1cGRhdGUgdXNlcicsXG4gICAgSU5WQUxJRF9QQVNTV09SRDogJ0Vycm9yIHVwZGF0aW5nIHBhc3N3b3JkLiBLaW5kbHkgY2hlY2sgeW91ciBwYXNzd29yZHMnLFxuICB9LFxuICBERUxFVEU6IHtcbiAgICBGQUlMOiAnRGVsZXRlIGJyYW5jaCBmYWlsZWQnLFxuICAgIFNVQ0NFU1M6ICdEZWxldGUgYnJhbmNoIHN1Y2Nlc3NmdWxseScsXG4gIH0sXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudC5tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vYnJhbmNoLm1lc3NhZ2UnO1xuIiwiZXhwb3J0IGNvbnN0IE1FUkNIQU5UX01FU1NBR0UgPSB7XG4gIENSRUFURToge1xuICAgIEVYSVNUX0VNQUlMOiAnVGhlIGVtYWlsIGlzIGV4aXN0JyxcbiAgfSxcbiAgUkVBRDoge1xuICAgIE5PVF9GT1VORDogJ1RoZSBtZXJjaGFudCBub3QgZm91bmQnLFxuICB9LFxuICBVUERBVEU6IHtcbiAgICBGQUlMOiAnQ2FuIG5vdCB1cGRhdGUgbWVyY2hhbnQnLFxuICB9LFxufTtcbiIsImV4cG9ydCBjb25zdCBDVVNUT01FUl9NRVNTQUdFID0ge1xuICBDUkVBVEU6IHtcbiAgICBFWElTVF9FTUFJTDogJ1RoZSBlbWFpbCBpcyBleGlzdCcsXG4gICAgU1VDQ0VTU0ZVTDogJ0NyZWF0ZSBjdXN0b21lciBzdWNjZXNzZnVsbHknLFxuICB9LFxuICBVUERBVEU6IHtcbiAgICBGQUlMOiAnQ2FuIG5vdCB1cGRhdGUgY3VzdG9tZXInLFxuICAgIElOVkFMSURfUEFTU1dPUkQ6ICdFcnJvciB1cGRhdGluZyBwYXNzd29yZC4gS2luZGx5IGNoZWNrIHlvdXIgcGFzc3dvcmRzJyxcbiAgfSxcbiAgUkVBRDoge1xuICAgIE5PVF9GT1VORDogJ1RoZSBjdXN0b21lciBub3QgZm91bmQnLFxuICB9LFxuICBERUxFVEU6IHtcbiAgICBGQUlMOiAnQ2FuIG5vdCByZW1vdmUgdGhlIGN1c3RvbWVyJyxcbiAgfSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXIubWVzc2FnZSc7XG5leHBvcnQgKiBmcm9tICcuL2N1c3RvbWVyLm1lc3NhZ2UnO1xuIiwiZXhwb3J0IGNvbnN0IFVTRVJfTUVTU0FHRSA9IHtcbiAgQ1JFQVRFOiB7XG4gICAgRVhJU1RfRU1BSUw6ICdUaGUgZW1haWwgaXMgZXhpc3QnLFxuICB9LFxuICBSRUFEOiB7XG4gICAgTk9UX0ZPVU5EOiAnVGhlIHVzZXIgbm90IGZvdW5kJyxcbiAgfSxcbiAgVVBEQVRFOiB7XG4gICAgRkFJTDogJ0NhbiBub3QgdXBkYXRlIHVzZXInLFxuICAgIElOVkFMSURfUEFTU1dPUkQ6ICdFcnJvciB1cGRhdGluZyBwYXNzd29yZC4gS2luZGx5IGNoZWNrIHlvdXIgcGFzc3dvcmRzJyxcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBIdHRwRXhjZXB0aW9uLCBIdHRwU3RhdHVzIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUnBjRXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcblxuZXhwb3J0IGNsYXNzIEVycm9ySGVscGVyIHtcbiAgc3RhdGljIEJhZFJlcXVlc3RFeGNlcHRpb24obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IFJwY0V4Y2VwdGlvbih7XG4gICAgICBjb2RlOiBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgbWVzc2FnZSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBIdHRwQmFkUmVxdWVzdEV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgSHR0cEV4Y2VwdGlvbihtZXNzYWdlLCBIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKTtcbiAgfVxuXG4gIHN0YXRpYyBVbmF1dGhvcml6ZWRFeGNlcHRpb24obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IFJwY0V4Y2VwdGlvbih7XG4gICAgICBjb2RlOiBIdHRwU3RhdHVzLlVOQVVUSE9SSVpFRCxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgSHR0cFVuYXV0aG9yaXplZEV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgSHR0cEV4Y2VwdGlvbihtZXNzYWdlLCBIdHRwU3RhdHVzLlVOQVVUSE9SSVpFRCk7XG4gIH1cblxuICBzdGF0aWMgTm90Rm91bmRFeGNlcHRpb24obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IFJwY0V4Y2VwdGlvbih7XG4gICAgICBjb2RlOiBIdHRwU3RhdHVzLk5PVF9GT1VORCxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgSHR0cE5vdEZvdW5kRXhjZXB0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKG1lc3NhZ2UsIEh0dHBTdGF0dXMuTk9UX0ZPVU5EKTtcbiAgfVxuXG4gIHN0YXRpYyBGb3JiaWRkZW5FeGNlcHRpb24obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IFJwY0V4Y2VwdGlvbih7XG4gICAgICBjb2RlOiBIdHRwU3RhdHVzLkZPUkJJRERFTixcbiAgICAgIG1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgSHR0cEZvcmJpZGRlbkV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgSHR0cEV4Y2VwdGlvbihtZXNzYWdlLCBIdHRwU3RhdHVzLkZPUkJJRERFTik7XG4gIH1cblxuICBzdGF0aWMgSW50ZXJuYWxTZXJ2ZXJFcnJvckV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgUnBjRXhjZXB0aW9uKHtcbiAgICAgIGNvZGU6IEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgICAgbWVzc2FnZSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBIdHRwSW50ZXJuYWxTZXJ2ZXJFcnJvckV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgSHR0cEV4Y2VwdGlvbihtZXNzYWdlLCBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUik7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBudW1iZXJJbnB1dHMgPSAoXG4gIGlucHV0OiBvYmplY3QgPSB7fSxcbik6IHtcbiAgW2tleTogc3RyaW5nXTogbnVtYmVyO1xufSA9PlxuICBPYmplY3Qua2V5cyhpbnB1dCkucmVkdWNlKChhY2M6IHVua25vd24sIHZhbDogc3RyaW5nKSA9PiB7XG4gICAgYWNjW3ZhbF0gPSAraW5wdXRbdmFsXSBhcyBudW1iZXI7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBzdHIgPSBzdHIucmVwbGFjZSgvQXzDgXzDgHzDg3zhuqB8w4J84bqkfOG6pnzhuqp84bqsfMSCfOG6rnzhurB84bq0fOG6ti9nLCAnQScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvw6B8w6F84bqhfOG6o3zDo3zDonzhuqd84bqlfOG6rXzhuql84bqrfMSDfOG6sXzhuq984bq3fOG6s3zhurUvZywgJ2EnKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL0V8w4l8w4h84bq8fOG6uHzDinzhur584buAfOG7hHzhu4YvLCAnRScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvw6h8w6l84bq5fOG6u3zhur18w6p84buBfOG6v3zhu4d84buDfOG7hS9nLCAnZScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvSXzDjXzDjHzEqHzhu4ovZywgJ0knKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL8OsfMOtfOG7i3zhu4l8xKkvZywgJ2knKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL098w5N8w5J8w5V84buMfMOUfOG7kHzhu5J84buWfOG7mHzGoHzhu5p84bucfOG7oHzhu6IvZywgJ08nKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL8OyfMOzfOG7jXzhu498w7V8w7R84buTfOG7kXzhu5l84buVfOG7l3zGoXzhu5184bubfOG7o3zhu5984buhL2csICdvJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9VfMOafMOZfMWofOG7pHzGr3zhu6h84buqfOG7rnzhu7AvZywgJ1UnKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL8O5fMO6fOG7pXzhu6d8xal8xrB84burfOG7qXzhu7F84butfOG7ry9nLCAndScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvWXzDnXzhu7J84bu4fOG7tC9nLCAnWScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgv4buzfMO9fOG7tXzhu7d84bu5L2csICd5Jyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC/EkC9nLCAnRCcpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvxJEvZywgJ2QnKTtcbiAgLy8gU29tZSBzeXN0ZW0gZW5jb2RlIHZpZXRuYW1lc2UgY29tYmluaW5nIGFjY2VudCBhcyBpbmRpdmlkdWFsIHV0Zi04IGNoYXJhY3RlcnNcbiAgc3RyID0gc3RyLnJlcGxhY2UoL1xcdTAzMDB8XFx1MDMwMXxcXHUwMzAzfFxcdTAzMDl8XFx1MDMyMy9nLCAnJyk7IC8vIEh1eeG7gW4gc+G6r2MgaOG7j2kgbmfDoyBu4bq3bmdcbiAgc3RyID0gc3RyLnJlcGxhY2UoL1xcdTAyQzZ8XFx1MDMwNnxcXHUwMzFCL2csICcnKTsgLy8gw4IsIMOKLCDEgiwgxqAsIMavXG4gIHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9wZXJ0eShjbGFzc05hbWUgPSAnZmllbGRzJywgZGVmYXVsdFZhbHVlOiB1bmtub3duID0gdW5kZWZpbmVkKTogUHJvcGVydHlEZWNvcmF0b3Ige1xuICByZXR1cm4gKHRhcmdldDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIG5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0W25hbWVdID0gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoY2xhc3NOYW1lLCB0cnVlLCB0YXJnZXQsIG5hbWUpO1xuICB9O1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC51dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL3F1ZXJ5LnV0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vZ2VuZXJhbC51dGlsJztcbmV4cG9ydCAqIGZyb20gJy4vZXJyb3IuaGVscGVyJztcbiIsImltcG9ydCB7IGhhc2gsIHZlcmlmeSB9IGZyb20gJ2FyZ29uMic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXNzd29yZFV0aWxzIHtcbiAgYXN5bmMgY29tcGFyZShwYXNzd29yZDogc3RyaW5nLCBoYXNoOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdmVyaWZ5KGhhc2gsIHBhc3N3b3JkKTtcbiAgfVxuXG4gIGFzeW5jIGhhc2gocGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgaWYgKGlzRW1wdHkocGFzc3dvcmQpIHx8IHBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc2gocGFzc3dvcmQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJUXVlcnkgfSBmcm9tICdAbGlicy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBpc0VtcHR5LCBpc05pbCwgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUXVlcnlVdGlscyB7XG4gIGFzeW5jIGdldEZpbHRlcnMoZmlsdGVyQnk6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIGFueT4+IHtcbiAgICBjb25zdCBxdWVyeUZpbHRlcnMgPSB7IHdoZXJlOiB7fSB9O1xuXG4gICAgaWYgKCFpc0VtcHR5KGZpbHRlckJ5KSkgT2JqZWN0LmFzc2lnbihxdWVyeUZpbHRlcnMud2hlcmUsIGZpbHRlckJ5KTtcblxuICAgIHJldHVybiBxdWVyeUZpbHRlcnM7XG4gIH1cblxuICBhc3luYyBnZXRPcmRlcihvcmRlckJ5OiBzdHJpbmcpOiBQcm9taXNlPElRdWVyeT4ge1xuICAgIGNvbnN0IHF1ZXJ5T3JkZXI6IElRdWVyeSA9IHt9O1xuXG4gICAgaWYgKCFpc0VtcHR5KG9yZGVyQnkpKSB7XG4gICAgICBpZiAob3JkZXJCeS50cmltKCkuY2hhckF0KDApID09PSAnLScpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeU9yZGVyLCB7IG9yZGVyQnk6IFtvcmRlckJ5LnRyaW0oKS5zdWJzdHIoMSksICdERVNDJ10gfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5T3JkZXIsIHsgb3JkZXJCeTogW29yZGVyQnkudHJpbSgpLCAnQVNDJ10gfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5T3JkZXI7XG4gIH1cblxuICBhc3luYyBnZXRDdXJzb3IoZmlyc3Q6IG51bWJlciwgbGFzdDogbnVtYmVyLCBiZWZvcmU6IHN0cmluZywgYWZ0ZXI6IHN0cmluZyk6IFByb21pc2U8SVF1ZXJ5PiB7XG4gICAgY29uc3QgcXVlcnlDdXJzb3I6IElRdWVyeSA9IHt9O1xuXG4gICAgaWYgKCFpc05pbChmaXJzdCkpIE9iamVjdC5hc3NpZ24ocXVlcnlDdXJzb3IsIHsgbGltaXQ6IGZpcnN0IH0pO1xuXG4gICAgaWYgKCFpc0VtcHR5KGFmdGVyKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeUN1cnNvciwgeyBhZnRlciwgbGltaXQ6IGZpcnN0IH0pO1xuICAgIH0gZWxzZSBpZiAoIWlzRW1wdHkoYmVmb3JlKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeUN1cnNvciwgeyBiZWZvcmUsIGxpbWl0OiBsYXN0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeUN1cnNvcjtcbiAgfVxuXG4gIGFzeW5jIGJ1aWxkUXVlcnkob3JkZXJCeTogc3RyaW5nLCBmaXJzdDogbnVtYmVyLCBsYXN0OiBudW1iZXIsIGJlZm9yZTogc3RyaW5nLCBhZnRlcjogc3RyaW5nKTogUHJvbWlzZTxJUXVlcnk+IHtcbiAgICByZXR1cm4gbWVyZ2Uoe30sIGF3YWl0IHRoaXMuZ2V0T3JkZXIob3JkZXJCeSksIGF3YWl0IHRoaXMuZ2V0Q3Vyc29yKGZpcnN0LCBsYXN0LCBiZWZvcmUsIGFmdGVyKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuaW1wb3J0IHsgUXVlcnlVdGlscyB9IGZyb20gJy4vcXVlcnkudXRpbHMnO1xuaW1wb3J0IHsgUGFzc3dvcmRVdGlscyB9IGZyb20gJy4vcGFzc3dvcmQudXRpbHMnO1xuXG5ATW9kdWxlKHtcbiAgZXhwb3J0czogW1F1ZXJ5VXRpbHMsIFBhc3N3b3JkVXRpbHNdLFxuICBwcm92aWRlcnM6IFtRdWVyeVV0aWxzLCBQYXNzd29yZFV0aWxzXSxcbn0pXG5leHBvcnQgY2xhc3MgVXRpbHNNb2R1bGUge31cbiIsImltcG9ydCB7IG9wZXJhdG9yc0FsaWFzZXMgfSBmcm9tICdAbGlicy9jb3JlJztcbmltcG9ydCB7IEJvb2tpbmdNb2RlbCB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlL2VudGl0aWVzL2Jvb2tpbmcnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgU2VxdWVsaXplTW9kdWxlLCBTZXF1ZWxpemVNb2R1bGVPcHRpb25zIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuaW1wb3J0IHsgQWJzdHJhY3RTZWNyZXRzU2VydmljZSB9IGZyb20gJ2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9hZGFwdGVyJztcbmltcG9ydCB7IFNlY3JldHNNb2R1bGUgfSBmcm9tICdsaWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvbW9kdWxlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTZXF1ZWxpemVNb2R1bGUuZm9yUm9vdEFzeW5jKHtcbiAgICAgIGltcG9ydHM6IFtTZWNyZXRzTW9kdWxlXSxcbiAgICAgIHVzZUZhY3Rvcnk6IGFzeW5jIChzZWNyZXRzOiBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlKTogUHJvbWlzZTxTZXF1ZWxpemVNb2R1bGVPcHRpb25zPiA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGlhbGVjdDogJ3Bvc3RncmVzJyxcbiAgICAgICAgICAuLi5zZWNyZXRzLmJvb2tpbmdTZXJ2aWNlRGF0YWJhc2UsXG4gICAgICAgICAgbG9nZ2luZzogZmFsc2UsXG4gICAgICAgICAgdHlwZVZhbGlkYXRpb246IHRydWUsXG4gICAgICAgICAgb3BlcmF0b3JzQWxpYXNlczogb3BlcmF0b3JzQWxpYXNlcyxcbiAgICAgICAgICBtb2RlbHM6IFtCb29raW5nTW9kZWxdLFxuICAgICAgICAgIGF1dG9Mb2FkTW9kZWxzOiB0cnVlLFxuICAgICAgICAgIHN5bmNocm9uaXplOiB0cnVlLFxuICAgICAgICAgIHN5bmM6IHtcbiAgICAgICAgICAgIGZvcmNlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIHJhdzogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlZmluZToge1xuICAgICAgICAgICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgICAgICAgICAgIHVuZGVyc2NvcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmVyc2lvbjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpYWxlY3RPcHRpb25zOiB7XG4gICAgICAgICAgICBjaGFyc2V0OiAndXRmOCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBpbmplY3Q6IFtBYnN0cmFjdFNlY3JldHNTZXJ2aWNlXSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQm9va2luZ0RhdGFiYXNlTW9kdWxlIHt9XG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXInO1xuXG5leHBvcnQgKiBmcm9tICcuL21lcmNoYW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9ib29raW5nJztcbiIsImltcG9ydCB7IG9wZXJhdG9yc0FsaWFzZXMgfSBmcm9tICdAbGlicy9jb3JlJztcbmltcG9ydCB7XG4gIEJyYW5jaE1vZGVsLFxuICBHcm91cE1vZGVsLFxuICBJbWFnZU1vZGVsLFxuICBNZXJjaGFudE1vZGVsLFxuICBTZXJ2ZUltYWdlTW9kZWwsXG4gIFNlcnZpY2VNb2RlbCxcbn0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvZW50aXRpZXMnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgU2VxdWVsaXplTW9kdWxlLCBTZXF1ZWxpemVNb2R1bGVPcHRpb25zIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuaW1wb3J0IHsgQWJzdHJhY3RTZWNyZXRzU2VydmljZSB9IGZyb20gJ2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9hZGFwdGVyJztcbmltcG9ydCB7IFNlY3JldHNNb2R1bGUgfSBmcm9tICdsaWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvbW9kdWxlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTZXF1ZWxpemVNb2R1bGUuZm9yUm9vdEFzeW5jKHtcbiAgICAgIGltcG9ydHM6IFtTZWNyZXRzTW9kdWxlXSxcbiAgICAgIHVzZUZhY3Rvcnk6IGFzeW5jIChzZWNyZXRzOiBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlKTogUHJvbWlzZTxTZXF1ZWxpemVNb2R1bGVPcHRpb25zPiA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGlhbGVjdDogJ3Bvc3RncmVzJyxcbiAgICAgICAgICAuLi5zZWNyZXRzLm1lcmNoYW50U2VydmljZURhdGFiYXNlLFxuICAgICAgICAgIGxvZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgIHR5cGVWYWxpZGF0aW9uOiB0cnVlLFxuICAgICAgICAgIG9wZXJhdG9yc0FsaWFzZXM6IG9wZXJhdG9yc0FsaWFzZXMsXG4gICAgICAgICAgbW9kZWxzOiBbTWVyY2hhbnRNb2RlbCwgQnJhbmNoTW9kZWwsIEdyb3VwTW9kZWwsIFNlcnZpY2VNb2RlbCwgSW1hZ2VNb2RlbCwgU2VydmVJbWFnZU1vZGVsXSxcbiAgICAgICAgICBhdXRvTG9hZE1vZGVsczogdHJ1ZSxcbiAgICAgICAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgICAgICAgICAvLyBzeW5jOiB7XG4gICAgICAgICAgLy8gICBmb3JjZTogdHJ1ZSxcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICByYXc6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWZpbmU6IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gICAgICAgICAgICB1bmRlcnNjb3JlZDogdHJ1ZSxcbiAgICAgICAgICAgIHZlcnNpb246IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkaWFsZWN0T3B0aW9uczoge1xuICAgICAgICAgICAgY2hhcnNldDogJ3V0ZjgnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgaW5qZWN0OiBbQWJzdHJhY3RTZWNyZXRzU2VydmljZV0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE1lcmNoYW50RGF0YWJhc2VNb2R1bGUge31cbiIsImltcG9ydCB7IG9wZXJhdG9yc0FsaWFzZXMgfSBmcm9tICdAbGlicy9jb3JlJztcbmltcG9ydCB7IERldmljZU1vZGVsLCBNZXJjaGFudFVzZXJNb2RlbCwgVXNlck1vZGVsIH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvZW50aXRpZXMnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgU2VxdWVsaXplTW9kdWxlLCBTZXF1ZWxpemVNb2R1bGVPcHRpb25zIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuaW1wb3J0IHsgQWJzdHJhY3RTZWNyZXRzU2VydmljZSB9IGZyb20gJ2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9hZGFwdGVyJztcbmltcG9ydCB7IFNlY3JldHNNb2R1bGUgfSBmcm9tICdsaWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvbW9kdWxlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTZXF1ZWxpemVNb2R1bGUuZm9yUm9vdEFzeW5jKHtcbiAgICAgIGltcG9ydHM6IFtTZWNyZXRzTW9kdWxlXSxcbiAgICAgIHVzZUZhY3Rvcnk6IGFzeW5jIChzZWNyZXRzOiBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlKTogUHJvbWlzZTxTZXF1ZWxpemVNb2R1bGVPcHRpb25zPiA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGlhbGVjdDogJ3Bvc3RncmVzJyxcbiAgICAgICAgICAuLi5zZWNyZXRzLnVzZXJTZXJ2aWNlRGF0YWJhc2UsXG4gICAgICAgICAgbG9nZ2luZzogZmFsc2UsXG4gICAgICAgICAgdHlwZVZhbGlkYXRpb246IHRydWUsXG4gICAgICAgICAgb3BlcmF0b3JzQWxpYXNlczogb3BlcmF0b3JzQWxpYXNlcyxcbiAgICAgICAgICBtb2RlbHM6IFtVc2VyTW9kZWwsIERldmljZU1vZGVsLCBNZXJjaGFudFVzZXJNb2RlbF0sXG4gICAgICAgICAgYXV0b0xvYWRNb2RlbHM6IHRydWUsXG4gICAgICAgICAgc3luY2hyb25pemU6IHRydWUsXG4gICAgICAgICAgLy8gc3luYzoge1xuICAgICAgICAgIC8vICAgZm9yY2U6IHRydWUsXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgcmF3OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVmaW5lOiB7XG4gICAgICAgICAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICAgICAgICAgICAgdW5kZXJzY29yZWQ6IHRydWUsXG4gICAgICAgICAgICB2ZXJzaW9uOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGlhbGVjdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNoYXJzZXQ6ICd1dGY4JyxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGluamVjdDogW0Fic3RyYWN0U2VjcmV0c1NlcnZpY2VdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyRGF0YWJhc2VNb2R1bGUge31cbiIsImltcG9ydCB7IENvbHVtbiwgRGF0YVR5cGUsIE1vZGVsIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZU1vZGVsPFQ+IGV4dGVuZHMgTW9kZWw8VD4ge1xuICBAQ29sdW1uKHtcbiAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgdHlwZTogRGF0YVR5cGUuSU5URUdFUixcbiAgfSlcbiAgaWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5EQVRFLFxuICAgIGRlZmF1bHRWYWx1ZTogRGF0YVR5cGUuTk9XLFxuICAgIGFsbG93TnVsbDogZmFsc2UsXG4gIH0pXG4gIGNyZWF0ZWRBdD86IHN0cmluZztcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5EQVRFLFxuICAgIGRlZmF1bHRWYWx1ZTogRGF0YVR5cGUuTk9XLFxuICAgIGFsbG93TnVsbDogZmFsc2UsXG4gIH0pXG4gIHVwZGF0ZWRBdD86IHN0cmluZztcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5EQVRFLFxuICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgfSlcbiAgZGVsZXRlZEF0Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLklOVEVHRVIsXG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICBkZWZhdWx0VmFsdWU6IDAsXG4gIH0pXG4gIHZlcnNpb24/OiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBFQm9va2luZ1N0YXR1cyB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL2Jvb2tpbmcnO1xuaW1wb3J0IHsgQmVmb3JlQ3JlYXRlLCBCZWZvcmVVcGRhdGUsIENvbHVtbiwgRGF0YVR5cGUsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvZW50aXRpZXMvYmFzZS5tb2RlbCc7XG5pbXBvcnQgeyB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuXG5AVGFibGUoe1xuICBtb2RlbE5hbWU6ICdib29raW5nJyxcbiAgdGFibGVOYW1lOiAnYm9va2luZ3MnLFxuICB1bmRlcnNjb3JlZDogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgQm9va2luZ01vZGVsIGV4dGVuZHMgQmFzZU1vZGVsPEJvb2tpbmdNb2RlbD4ge1xuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBzdGF0dXM/OiBFQm9va2luZ1N0YXR1cztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBzZXJ2aWNlTmFtZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBzZXJ2aWNlSWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgdXNlcklkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHVzZXJFbWFpbD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICB1c2VyUGhvbmVOdW1iZXI/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgbWVyY2hhbnRJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBicmFuY2hJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBzdGFydFRpbWU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZW5kVGltZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBub3RlPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGNhbmNlbFJlYXNvbj86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBib29raW5nRGF0ZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBkdXJhdGlvbkhvdXI/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZHVyYXRpb25NaW51dGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZHVyYXRpb24/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuVEVYVCxcbiAgICBhbGxvd051bGw6IHRydWUsXG4gIH0pXG4gIHNlYXJjaD86IHN0cmluZztcblxuICBAQmVmb3JlQ3JlYXRlXG4gIEBCZWZvcmVVcGRhdGVcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVNlYXJjaChtb2RlbDogQm9va2luZ01vZGVsKSB7XG4gICAgY29uc3QgY29sdW1uc1RvQ29uY2F0ZW5hdGUgPSBbXG4gICAgICAnc3RhdHVzJyxcbiAgICAgICdjYW5jZWxSZWFzb24nLFxuICAgICAgJ3NlcnZpY2VOYW1lJyxcbiAgICAgICdzdGFydFRpbWUnLFxuICAgICAgJ2VuZFRpbWUnLFxuICAgICAgJ25vdGUnLFxuICAgICAgJ2Jvb2tpbmdEYXRlJyxcbiAgICBdO1xuICAgIGNvbnN0IGNvbmNhdGVuYXRlZFZhbHVlcyA9IGNvbHVtbnNUb0NvbmNhdGVuYXRlXG4gICAgICAubWFwKChjb2x1bW5OYW1lKSA9PiAobW9kZWwuZ2V0KGNvbHVtbk5hbWUpID8gbW9kZWwuZ2V0KGNvbHVtbk5hbWUpIDogJyAnKSlcbiAgICAgIC5qb2luKCcgJyk7XG5cbiAgICBtb2RlbC5zZXREYXRhVmFsdWUoJ3NlYXJjaCcsIGNvbmNhdGVuYXRlZFZhbHVlcy5jb25jYXQoJyAnLCB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyhjb25jYXRlbmF0ZWRWYWx1ZXMpKSk7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYm9va2luZy5tb2RlbCc7XG4iLCIvLyB1c2VyIHNlcnZpY2VcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5cbi8vIG1lcmNoYW50IHNlcnZpY2VcbmV4cG9ydCAqIGZyb20gJy4vbWVyY2hhbnQnO1xuXG4vLyBtZXJjaGFudCBzZXJ2aWNlXG5leHBvcnQgKiBmcm9tICcuL2Jvb2tpbmcnO1xuIiwiaW1wb3J0IHsgQmVmb3JlQ3JlYXRlLCBCZWZvcmVVcGRhdGUsIENvbHVtbiwgRGF0YVR5cGUsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IHsgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMgfSBmcm9tICdAbGlicy9jb3JlJztcblxuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vYmFzZS5tb2RlbCc7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ2JyYW5jaCcsXG4gIHRhYmxlTmFtZTogJ2JyYW5jaGVzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEJyYW5jaE1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsPEJyYW5jaE1vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSLCBhbGxvd051bGw6IGZhbHNlIH0pXG4gIG1lcmNoYW50SWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgbmFtZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBhZGRyZXNzPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHBob25lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGNpdHlDb2RlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGRpc3RyaWN0Q29kZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICB3YXJkQ29kZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBjaXR5Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGRpc3RyaWN0Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHdhcmQ/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuRkxPQVQsXG4gICAgZGVmYXVsdFZhbHVlOiAwLFxuICB9KVxuICBsYXRpdHVkZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5GTE9BVCxcbiAgICBkZWZhdWx0VmFsdWU6IDAsXG4gIH0pXG4gIGxvbmdpdHVkZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5HRU9NRVRSWSgnUE9JTlQnKSxcbiAgICBhbGxvd051bGw6IHRydWUsXG4gICAgLy8gZGVmYXVsdFZhbHVlOiB7IHR5cGU6ICdQb2ludCcsIGNvb3JkaW5hdGVzOiBbMCwgMF0gfSxcbiAgfSlcbiAgY29vcmRpbmF0ZTogeyB0eXBlOiAnUG9pbnQnOyBjb29yZGluYXRlczogW251bWJlciwgbnVtYmVyXSB9O1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLlRFWFQsXG4gICAgYWxsb3dOdWxsOiB0cnVlLFxuICB9KVxuICBzZWFyY2g/OiBzdHJpbmc7XG5cbiAgQEJlZm9yZUNyZWF0ZVxuICBAQmVmb3JlVXBkYXRlXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVTZWFyY2gobW9kZWw6IEJyYW5jaE1vZGVsKSB7XG4gICAgY29uc3QgY29sdW1uc1RvQ29uY2F0ZW5hdGUgPSBbJ25hbWUnLCAncGhvbmUnLCAnYWRkcmVzcycsICdjaXR5JywgJ2Rpc3RyaWN0JywgJ3dhcmQnXTtcbiAgICBjb25zdCBjb25jYXRlbmF0ZWRWYWx1ZXMgPSBjb2x1bW5zVG9Db25jYXRlbmF0ZVxuICAgICAgLm1hcCgoY29sdW1uTmFtZSkgPT4gKG1vZGVsLmdldChjb2x1bW5OYW1lKSA/IG1vZGVsLmdldChjb2x1bW5OYW1lKSA6ICcgJykpXG4gICAgICAuam9pbignICcpO1xuXG4gICAgbW9kZWwuc2V0RGF0YVZhbHVlKCdzZWFyY2gnLCBjb25jYXRlbmF0ZWRWYWx1ZXMuY29uY2F0KCcgJywgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMoY29uY2F0ZW5hdGVkVmFsdWVzKSkpO1xuICB9XG5cbiAgQEJlZm9yZUNyZWF0ZVxuICBAQmVmb3JlVXBkYXRlXG4gIHN0YXRpYyBhc3luYyB1cHNlcnRDb29yZGluYXRlKG1vZGVsOiBCcmFuY2hNb2RlbCkge1xuICAgIGlmIChtb2RlbC5sYXRpdHVkZSAmJiBtb2RlbC5sb25naXR1ZGUpIHtcbiAgICAgIG1vZGVsLmNvb3JkaW5hdGUgPSB7XG4gICAgICAgIHR5cGU6ICdQb2ludCcsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbbW9kZWwubGF0aXR1ZGUsIG1vZGVsLmxvbmdpdHVkZV0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQmVmb3JlQ3JlYXRlLCBCZWZvcmVVcGRhdGUsIENvbHVtbiwgRGF0YVR5cGUsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IHsgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMgfSBmcm9tICdAbGlicy9jb3JlJztcblxuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vYmFzZS5tb2RlbCc7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ2dyb3VwJyxcbiAgdGFibGVOYW1lOiAnZ3JvdXBzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEdyb3VwTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8R3JvdXBNb2RlbD4ge1xuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiwgYWxsb3dOdWxsOiBmYWxzZSB9KVxuICBtZXJjaGFudElkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHNrdT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBjb2RlPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgaW1hZ2U/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuVEVYVCxcbiAgICBhbGxvd051bGw6IHRydWUsXG4gIH0pXG4gIHNlYXJjaD86IHN0cmluZztcblxuICBAQmVmb3JlQ3JlYXRlXG4gIEBCZWZvcmVVcGRhdGVcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVNlYXJjaChtb2RlbDogR3JvdXBNb2RlbCkge1xuICAgIGNvbnN0IGNvbHVtbnNUb0NvbmNhdGVuYXRlID0gWyduYW1lJywgJ2NvZGUnLCAnc2t1JywgJ2Rlc2NyaXB0aW9uJ107XG4gICAgY29uc3QgY29uY2F0ZW5hdGVkVmFsdWVzID0gY29sdW1uc1RvQ29uY2F0ZW5hdGVcbiAgICAgIC5tYXAoKGNvbHVtbk5hbWUpID0+IChtb2RlbC5nZXQoY29sdW1uTmFtZSkgPyBtb2RlbC5nZXQoY29sdW1uTmFtZSkgOiAnICcpKVxuICAgICAgLmpvaW4oJyAnKTtcblxuICAgIG1vZGVsLnNldERhdGFWYWx1ZSgnc2VhcmNoJywgY29uY2F0ZW5hdGVkVmFsdWVzLmNvbmNhdCgnICcsIHRvVUZUOE5vblNwZWNpYWxDaGFyYWN0ZXJzKGNvbmNhdGVuYXRlZFZhbHVlcykpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xuXG5AVGFibGUoe1xuICBtb2RlbE5hbWU6ICdpbWFnZScsXG4gIHRhYmxlTmFtZTogJ2ltYWdlcycsXG4gIHVuZGVyc2NvcmVkOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZU1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsPEltYWdlTW9kZWw+IHtcbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cbiIsIi8vIHNlcXVlbGl6ZVxuZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudC5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2JyYW5jaC5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2dyb3VwLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZS5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2ltYWdlLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmUtaW1hZ2UubW9kZWwnO1xuIiwiaW1wb3J0IHsgQmVmb3JlQ3JlYXRlLCBCZWZvcmVVcGRhdGUsIENvbHVtbiwgRGF0YVR5cGUsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IHsgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMgfSBmcm9tICdAbGlicy9jb3JlJztcblxuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vYmFzZS5tb2RlbCc7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ21lcmNoYW50JyxcbiAgdGFibGVOYW1lOiAnbWVyY2hhbnRzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIE1lcmNoYW50TW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8TWVyY2hhbnRNb2RlbD4ge1xuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICB1c2VySWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgbmFtZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBhZGRyZXNzPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHBob25lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGNpdHlDb2RlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGRpc3RyaWN0Q29kZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICB3YXJkQ29kZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBjaXR5Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGRpc3RyaWN0Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHdhcmQ/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuRkxPQVQsXG4gICAgZGVmYXVsdFZhbHVlOiAwLFxuICB9KVxuICBsYXRpdHVkZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5GTE9BVCxcbiAgICBkZWZhdWx0VmFsdWU6IDAsXG4gIH0pXG4gIGxvbmdpdHVkZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5HRU9NRVRSWSgnUE9JTlQnKSxcbiAgICBhbGxvd051bGw6IHRydWUsXG4gICAgLy8gZGVmYXVsdFZhbHVlOiB7IHR5cGU6ICdQb2ludCcsIGNvb3JkaW5hdGVzOiBbMCwgMF0gfSxcbiAgfSlcbiAgY29vcmRpbmF0ZTogeyB0eXBlOiAnUG9pbnQnOyBjb29yZGluYXRlczogW251bWJlciwgbnVtYmVyXSB9O1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLlRFWFQsXG4gICAgYWxsb3dOdWxsOiB0cnVlLFxuICB9KVxuICBzZWFyY2g/OiBzdHJpbmc7XG5cbiAgQEJlZm9yZUNyZWF0ZVxuICBAQmVmb3JlVXBkYXRlXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVTZWFyY2gobW9kZWw6IE1lcmNoYW50TW9kZWwpIHtcbiAgICBjb25zdCBjb2x1bW5zVG9Db25jYXRlbmF0ZSA9IFsnbmFtZScsICdwaG9uZScsICdhZGRyZXNzJywgJ2NpdHknLCAnZGlzdHJpY3QnLCAnd2FyZCddO1xuICAgIGNvbnN0IGNvbmNhdGVuYXRlZFZhbHVlcyA9IGNvbHVtbnNUb0NvbmNhdGVuYXRlXG4gICAgICAubWFwKChjb2x1bW5OYW1lKSA9PiAobW9kZWwuZ2V0KGNvbHVtbk5hbWUpID8gbW9kZWwuZ2V0KGNvbHVtbk5hbWUpIDogJyAnKSlcbiAgICAgIC5qb2luKCcgJyk7XG5cbiAgICBtb2RlbC5zZXREYXRhVmFsdWUoJ3NlYXJjaCcsIGNvbmNhdGVuYXRlZFZhbHVlcy5jb25jYXQoJyAnLCB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyhjb25jYXRlbmF0ZWRWYWx1ZXMpKSk7XG4gIH1cblxuICBAQmVmb3JlQ3JlYXRlXG4gIEBCZWZvcmVVcGRhdGVcbiAgc3RhdGljIGFzeW5jIHVwc2VydENvb3JkaW5hdGUobW9kZWw6IE1lcmNoYW50TW9kZWwpIHtcbiAgICBpZiAobW9kZWwubGF0aXR1ZGUgJiYgbW9kZWwubG9uZ2l0dWRlKSB7XG4gICAgICBtb2RlbC5jb29yZGluYXRlID0ge1xuICAgICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgICBjb29yZGluYXRlczogW21vZGVsLmxhdGl0dWRlLCBtb2RlbC5sb25naXR1ZGVdLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbHVtbiwgRGF0YVR5cGUsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcblxuaW1wb3J0IHsgRUltYWdlVHlwZSwgRVNlcnZlSW1hZ2VUeXBlIH0gZnJvbSAnQC9hcGktZ2F0ZXdheS9kdG9zL2NvbW1vbic7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ3NlcnZlX2ltYWdlJyxcbiAgdGFibGVOYW1lOiAnc2VydmVfaW1hZ2VzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZlSW1hZ2VNb2RlbCBleHRlbmRzIEJhc2VNb2RlbDxTZXJ2ZUltYWdlTW9kZWw+IHtcbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgaW1hZ2VJZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5TTUFMTElOVCB9KVxuICBzZXJ2ZVR5cGU6IEVTZXJ2ZUltYWdlVHlwZTtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuU01BTExJTlQgfSlcbiAgdHlwZTogRUltYWdlVHlwZTtcbn1cbiIsImltcG9ydCB7IEVTZXJ2aWNlU2hvd1R5cGUsIEVTZXJ2aWNlVHlwZSB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL3NlcnZpY2UnO1xuaW1wb3J0IHsgQmVmb3JlQ3JlYXRlLCBCZWZvcmVVcGRhdGUsIENvbHVtbiwgRGF0YVR5cGUsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IHsgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMgfSBmcm9tICdAbGlicy9jb3JlJztcblxuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vYmFzZS5tb2RlbCc7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ3NlcnZpY2UnLFxuICB0YWJsZU5hbWU6ICdzZXJ2aWNlcycsXG4gIHVuZGVyc2NvcmVkOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8U2VydmljZU1vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSLCBhbGxvd051bGw6IGZhbHNlIH0pXG4gIGdyb3VwSWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgbWVyY2hhbnRJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuRE9VQkxFLCBkZWZhdWx0VmFsdWU6IDAgfSlcbiAgcHJpY2U/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLkRPVUJMRSwgZGVmYXVsdFZhbHVlOiAwIH0pXG4gIGluaXRpYWxQcmljZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBkdXJhdGlvbkhvdXI/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZHVyYXRpb25NaW51dGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgc2t1Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGNvZGU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgbmFtZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBpbWFnZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICB0eXBlPzogRVNlcnZpY2VUeXBlO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHNob3dUeXBlPzogRVNlcnZpY2VTaG93VHlwZTtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuQk9PTEVBTiB9KVxuICBjYW5QcmludGFibGVJbnZvaWNlPzogYm9vbGVhbjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5URVhULFxuICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgfSlcbiAgc2VhcmNoPzogc3RyaW5nO1xuXG4gIEBCZWZvcmVDcmVhdGVcbiAgQEJlZm9yZVVwZGF0ZVxuICBzdGF0aWMgYXN5bmMgdXBkYXRlU2VhcmNoKG1vZGVsOiBTZXJ2aWNlTW9kZWwpIHtcbiAgICBjb25zdCBjb2x1bW5zVG9Db25jYXRlbmF0ZSA9IFsnbmFtZScsICdjb2RlJywgJ3NrdScsICdwcmljZScsICdpbml0aWFsUHJpY2UnLCAnZGVzY3JpcHRpb24nXTtcbiAgICBjb25zdCBjb25jYXRlbmF0ZWRWYWx1ZXMgPSBjb2x1bW5zVG9Db25jYXRlbmF0ZVxuICAgICAgLm1hcCgoY29sdW1uTmFtZSkgPT4gKG1vZGVsLmdldChjb2x1bW5OYW1lKSA/IG1vZGVsLmdldChjb2x1bW5OYW1lKSA6ICcgJykpXG4gICAgICAuam9pbignICcpO1xuXG4gICAgbW9kZWwuc2V0RGF0YVZhbHVlKCdzZWFyY2gnLCBjb25jYXRlbmF0ZWRWYWx1ZXMuY29uY2F0KCcgJywgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMoY29uY2F0ZW5hdGVkVmFsdWVzKSkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBFRGV2aWNlT3MgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy9kZXZpY2UnO1xuaW1wb3J0IHsgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xuXG5AVGFibGUoe1xuICBtb2RlbE5hbWU6ICdkZXZpY2UnLFxuICB0YWJsZU5hbWU6ICdkZXZpY2VzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIERldmljZU1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsPERldmljZU1vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHVzZXJJZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIG9zOiBFRGV2aWNlT3M7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZGV2aWNlSWQ6IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICB0b2tlbjogc3RyaW5nO1xufVxuIiwiLy8gc2VxdWVsaXplXG5leHBvcnQgKiBmcm9tICcuL3VzZXIubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9kZXZpY2UubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9ub3RpZmljYXRpb24ubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudC11c2VyLm1vZGVsJztcbiIsImltcG9ydCB7IEVVc2VyUm9sZSwgRVVzZXJTdGF0dXMgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy9jb21tb25zJztcbmltcG9ydCB7IFRhYmxlLCBDb2x1bW4sIERhdGFUeXBlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAnbWVyY2hhbnRfdXNlcicsXG4gIHRhYmxlTmFtZTogJ21lcmNoYW50X3VzZXJzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIE1lcmNoYW50VXNlck1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsPE1lcmNoYW50VXNlck1vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHJvbGU/OiBFVXNlclJvbGU7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgc3RhdHVzPzogRVVzZXJTdGF0dXM7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgdXNlcklkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgYnJhbmNoSWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgbWVyY2hhbnRJZD86IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IENvbHVtbiwgRGF0YVR5cGUsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAnbm90aWZpY2F0aW9uJyxcbiAgdGFibGVOYW1lOiAnbm90aWZpY2F0aW9ucycsXG4gIHVuZGVyc2NvcmVkOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25Nb2RlbCBleHRlbmRzIEJhc2VNb2RlbDxOb3RpZmljYXRpb25Nb2RlbD4ge1xuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICB1c2VySWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBjb250ZW50OiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBFQ3VzdG9tZXJMZXZlbCwgRVVzZXJHZW5kZXIsIEVVc2VyUm9sZSwgRVVzZXJTdGF0dXMgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy9jb21tb25zJztcbmltcG9ydCB7IGhhc2ggfSBmcm9tICdhcmdvbjInO1xuaW1wb3J0IHsgQmVmb3JlQ3JlYXRlLCBCZWZvcmVVcGRhdGUsIENvbHVtbiwgRGF0YVR5cGUsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IHsgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMgfSBmcm9tICdAbGlicy9jb3JlJztcblxuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vYmFzZS5tb2RlbCc7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ3VzZXInLFxuICB0YWJsZU5hbWU6ICd1c2VycycsXG4gIHVuZGVyc2NvcmVkOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8VXNlck1vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGVtYWlsPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHJvbGU/OiBFVXNlclJvbGU7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgc3RhdHVzPzogRVVzZXJTdGF0dXM7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZ2VuZGVyPzogRVVzZXJHZW5kZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZnVsbE5hbWU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLkJPT0xFQU4gfSlcbiAgaXNSZXRhaWxDdXN0b21lcj86IGJvb2xlYW47XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgY29udGFjdD86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBwaG9uZU51bWJlcj86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBkb2JEYXk/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZG9iTW9udGg/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZG9iWWVhcj86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBvY2N1cGF0aW9uPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGF2YXRhcj86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBhZGRyZXNzPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGNpdHlDb2RlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGRpc3RyaWN0Q29kZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICB3YXJkQ29kZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBsZXZlbD86IEVDdXN0b21lckxldmVsO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHJlZmVycmVyPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHJlZmVycmVyQ29kZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBjdXN0b21lckNvZGU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZmFjZWJvb2s/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgemFsb1Bob25lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGhlaWdodD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICB3ZWlnaHQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgbWVtYmVyQ2FyZE5vPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGNvbXBhbnk/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgdGF4Tm8/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgbm90ZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICByZWxhdGVkVXNlcj86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICByZWxhdGVkVXNlclJvbGU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgcmVsYXRlZFVzZXJQaG9uZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBicmFuY2hJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBtZXJjaGFudElkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkZMT0FULFxuICAgIGRlZmF1bHRWYWx1ZTogMCxcbiAgfSlcbiAgbGF0aXR1ZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuRkxPQVQsXG4gICAgZGVmYXVsdFZhbHVlOiAwLFxuICB9KVxuICBsb25naXR1ZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuR0VPTUVUUlkoJ1BPSU5UJyksXG4gICAgYWxsb3dOdWxsOiB0cnVlLFxuICB9KVxuICBjb29yZGluYXRlOiB7IHR5cGU6ICdQb2ludCc7IGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdIH07XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuVEVYVCxcbiAgICBhbGxvd051bGw6IHRydWUsXG4gIH0pXG4gIHNlYXJjaD86IHN0cmluZztcblxuICBAQmVmb3JlQ3JlYXRlXG4gIEBCZWZvcmVVcGRhdGVcbiAgc3RhdGljIGFzeW5jIGhhc2hQYXNzd29yZCh1c2VyOiBVc2VyTW9kZWwpIHtcbiAgICBpZiAoIXVzZXIucGFzc3dvcmQpIHJldHVybjtcbiAgICB1c2VyLnBhc3N3b3JkID0gYXdhaXQgaGFzaCh1c2VyLnBhc3N3b3JkKTtcbiAgfVxuXG4gIEBCZWZvcmVDcmVhdGVcbiAgQEJlZm9yZVVwZGF0ZVxuICBzdGF0aWMgYXN5bmMgdXBkYXRlU2VhcmNoKG1vZGVsOiBVc2VyTW9kZWwpIHtcbiAgICBjb25zdCBjb2x1bW5zVG9Db25jYXRlbmF0ZSA9IFsnZW1haWwnLCAnZnVsbE5hbWUnLCAnY29udGFjdCcsICdwaG9uZU51bWJlcicsICdhZGRyZXNzJ107XG4gICAgY29uc3QgY29uY2F0ZW5hdGVkVmFsdWVzID0gY29sdW1uc1RvQ29uY2F0ZW5hdGVcbiAgICAgIC5tYXAoKGNvbHVtbk5hbWUpID0+IChtb2RlbC5nZXQoY29sdW1uTmFtZSkgPyBtb2RlbC5nZXQoY29sdW1uTmFtZSkgOiAnICcpKVxuICAgICAgLmpvaW4oJyAnKTtcblxuICAgIG1vZGVsLnNldERhdGFWYWx1ZSgnc2VhcmNoJywgY29uY2F0ZW5hdGVkVmFsdWVzLmNvbmNhdCgnICcsIHRvVUZUOE5vblNwZWNpYWxDaGFyYWN0ZXJzKGNvbmNhdGVuYXRlZFZhbHVlcykpKTtcbiAgfVxuXG4gIEBCZWZvcmVDcmVhdGVcbiAgQEJlZm9yZVVwZGF0ZVxuICBzdGF0aWMgYXN5bmMgdXBzZXJ0Q29vcmRpbmF0ZShtb2RlbDogVXNlck1vZGVsKSB7XG4gICAgaWYgKG1vZGVsLmxhdGl0dWRlICYmIG1vZGVsLmxvbmdpdHVkZSkge1xuICAgICAgbW9kZWwuY29vcmRpbmF0ZSA9IHtcbiAgICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgICAgY29vcmRpbmF0ZXM6IFttb2RlbC5sYXRpdHVkZSwgbW9kZWwubG9uZ2l0dWRlXSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2Nvbm5lY3Rpb24nO1xuXG5leHBvcnQgKiBmcm9tICcuL2VudGl0aWVzJztcblxuZXhwb3J0ICogZnJvbSAnLi9yZXBvc2l0b3JpZXMnO1xuIiwiaW1wb3J0IHsgTElNSVQsIFBBR0UgfSBmcm9tICdAbGlicy9jb3JlJztcbmltcG9ydCB7IENvbW1vblByb3RvIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5pbXBvcnQgeyBJRmluZEFuZFBhZ2luYXRlT3B0aW9ucywgSVBhZ2luYXRpb25SZXMgfSBmcm9tICdAbGlicy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtcbiAgQXR0cmlidXRlcyxcbiAgQ291bnRPcHRpb25zLFxuICBDcmVhdGVPcHRpb25zLFxuICBGaW5kQW5kQ291bnRPcHRpb25zLFxuICBGaW5kT3B0aW9ucyxcbiAgVXBkYXRlT3B0aW9ucyxcbiAgV2hlcmVPcHRpb25zLFxufSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IHsgTW9kZWwsIFJlcG9zaXRvcnkgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5cbmV4cG9ydCBjbGFzcyBCYXNlUmVwb3NpdG9yeTxUIGV4dGVuZHMgTW9kZWw+IHtcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgbW9kZWw6IFJlcG9zaXRvcnk8VD4pIHt9XG5cbiAgYXN5bmMgZmluZChvcHRpb25zPzogRmluZE9wdGlvbnM8VD4pOiBQcm9taXNlPFRbXT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGVsLmZpbmRBbGwob3B0aW9ucyk7XG4gIH1cblxuICBhc3luYyBmaW5kT25lKG9wdGlvbnM/OiBGaW5kT3B0aW9uczxUPik6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGVsLmZpbmRPbmUob3B0aW9ucyk7XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZChpZDogbnVtYmVyLCBvcHRpb25zPzogRmluZE9wdGlvbnM8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RlbC5maW5kQnlQayhpZCwgb3B0aW9ucyk7XG4gIH1cblxuICBhc3luYyBwYWdpbmF0ZShcbiAgICBvcHRpb25zPzogV2hlcmVPcHRpb25zPFQ+LFxuICAgIHBhZ2UgPSBQQUdFLFxuICAgIGxpbWl0ID0gTElNSVQsXG4gICAgb3B0cz86IEZpbmRPcHRpb25zPFQ+LFxuICApOiBQcm9taXNlPElQYWdpbmF0aW9uUmVzPFQ+PiB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gKHBhZ2UgLSAxKSAqIGxpbWl0O1xuICAgIGNvbnN0IHsgcm93cywgY291bnQgfSA9IGF3YWl0IHRoaXMucmF3UGFnaW5hdGUoe1xuICAgICAgd2hlcmU6IHsgLi4ub3B0aW9ucyB9LFxuICAgICAgb2Zmc2V0LFxuICAgICAgbGltaXQsXG4gICAgICAuLi5vcHRzLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiByb3dzLFxuICAgICAgbWV0YToge1xuICAgICAgICB0b3RhbDogY291bnQsXG4gICAgICAgIHRvdGFsUGFnZTogTWF0aC5jZWlsKGNvdW50IC8gTElNSVQpLFxuICAgICAgICBwYWdlLFxuICAgICAgICBsaW1pdCxcbiAgICAgIH0sXG4gICAgfSBhcyBJUGFnaW5hdGlvblJlczxUPjtcbiAgfVxuXG4gIGFzeW5jIHJhd1BhZ2luYXRlKG9wdGlvbnM6IEZpbmRBbmRDb3VudE9wdGlvbnMpOiBQcm9taXNlPHtcbiAgICByb3dzOiBUW107XG4gICAgY291bnQ6IG51bWJlcjtcbiAgfT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGVsLmZpbmRBbmRDb3VudEFsbChvcHRpb25zKTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZShlbnRpdHk6IGFueSwgb3B0cz86IENyZWF0ZU9wdGlvbnMpOiBQcm9taXNlPFQ+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLm1vZGVsLmNyZWF0ZShlbnRpdHksIG9wdHMpO1xuICAgIHJldHVybiByZXMudG9KU09OKCk7XG4gIH1cblxuICBhc3luYyB1cGRhdGUoZW50aXR5OiBhbnksIG9wdHM/OiBVcGRhdGVPcHRpb25zKSB7XG4gICAgY29uc3QgW2FmZmVjdGVkQ291bnQsIGFmZmVjdGVkUm93c10gPSBhd2FpdCB0aGlzLm1vZGVsLnVwZGF0ZShlbnRpdHksIHtcbiAgICAgIC4uLm9wdHMsXG4gICAgICByZXR1cm5pbmc6IHRydWUsXG4gICAgfSk7XG4gICAgcmV0dXJuIGFmZmVjdGVkUm93cztcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZShjb25kaXRpb25zOiBGaW5kT3B0aW9uczxUPik6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kZWwuZGVzdHJveShjb25kaXRpb25zKTtcbiAgfVxuXG4gIGFzeW5jIHJhdyhxdWVyeTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kZWwuc2VxdWVsaXplLnF1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIGdldE1vZGVsKCk6IFJlcG9zaXRvcnk8VD4ge1xuICAgIHJldHVybiB0aGlzLm1vZGVsO1xuICB9XG5cbiAgYXN5bmMgY291bnQob3B0aW9ucz86IENvdW50T3B0aW9ucyk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgY29uc3QgcmVzdWx0OiBudW1iZXIgPSBhd2FpdCB0aGlzLm1vZGVsLmNvdW50KG9wdGlvbnMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBhc3luYyBmaW5kQW5kUGFnaW5hdGUocXVlcnk/OiBJRmluZEFuZFBhZ2luYXRlT3B0aW9ucywgb3B0cz86IEZpbmRPcHRpb25zKTogUHJvbWlzZTxJUGFnaW5hdGlvblJlczxUPj4ge1xuICAgIGNvbnN0IHJlc3VsdDogSVBhZ2luYXRpb25SZXM8VD4gPSBhd2FpdCB0aGlzLnBhZ2luYXRlKHF1ZXJ5LndoZXJlLCBxdWVyeS5wYWdlLCBxdWVyeS5saW1pdCwgb3B0cyk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYXN5bmMgY291bnRCeUdycGMocXVlcnk6IENvbW1vblByb3RvLlF1ZXJ5UmVxdWVzdCkge1xuICAgIGNvbnN0IHdoZXJlID0gIWlzRW1wdHkocXVlcnkud2hlcmUpID8gSlNPTi5wYXJzZShxdWVyeS53aGVyZSkgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmNvdW50KHtcbiAgICAgIC4uLnF1ZXJ5LFxuICAgICAgd2hlcmUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0TW9kZWwgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBCb29raW5nTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZSc7XG5cbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYmFzZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJvb2tpbmdSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8Qm9va2luZ01vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3RNb2RlbChCb29raW5nTW9kZWwpIHJlYWRvbmx5IG1vZGVsOiB0eXBlb2YgQm9va2luZ01vZGVsKSB7XG4gICAgc3VwZXIobW9kZWwpO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2Jvb2tpbmcucmVwb3NpdG9yeSc7XG4iLCIvLyB1c2VyIHJlcG9zaXRvcnlcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5cbi8vIG1lcmNoYW50IHJlcG9zaXRvcnlcbmV4cG9ydCAqIGZyb20gJy4vbWVyY2hhbnQnO1xuXG4vLyBtZXJjaGFudCByZXBvc2l0b3J5XG5leHBvcnQgKiBmcm9tICcuL2Jvb2tpbmcnO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdE1vZGVsIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBCcmFuY2hNb2RlbCB9IGZyb20gJy4uLy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYmFzZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyYW5jaFJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxCcmFuY2hNb2RlbD4ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0TW9kZWwoQnJhbmNoTW9kZWwpIHJlYWRvbmx5IG1vZGVsOiB0eXBlb2YgQnJhbmNoTW9kZWwpIHtcbiAgICBzdXBlcihtb2RlbCk7XG4gIH1cblxuICBhc3luYyBmaW5kV2l0aFBhZ2luZyhvcHRpb25zPzogYW55LCBmaW5kT3B0aW9ucz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdpbmF0aW9uUmVwb3NpdG9yeSh0aGlzLmRldmljZU1vZGVsLCBvcHRpb25zLCBmaW5kT3B0aW9ucyk7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0TW9kZWwgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IEdyb3VwTW9kZWwgfSBmcm9tICcuLi8uLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2Jhc2UucmVwb3NpdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcm91cFJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxHcm91cE1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3RNb2RlbChHcm91cE1vZGVsKSByZWFkb25seSBtb2RlbDogdHlwZW9mIEdyb3VwTW9kZWwpIHtcbiAgICBzdXBlcihtb2RlbCk7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vbWVyY2hhbnQucmVwb3NpdG9yeSc7XG5leHBvcnQgKiBmcm9tICcuL2dyb3VwLnJlcG9zaXRvcnknO1xuZXhwb3J0ICogZnJvbSAnLi9icmFuY2gucmVwb3NpdG9yeSc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2UucmVwb3NpdG9yeSc7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0TW9kZWwgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IE1lcmNoYW50TW9kZWwgfSBmcm9tICcuLi8uLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2Jhc2UucmVwb3NpdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXJjaGFudFJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxNZXJjaGFudE1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3RNb2RlbChNZXJjaGFudE1vZGVsKSByZWFkb25seSBtb2RlbDogdHlwZW9mIE1lcmNoYW50TW9kZWwpIHtcbiAgICBzdXBlcihtb2RlbCk7XG4gIH1cblxuICBhc3luYyBmaW5kV2l0aFBhZ2luZyhvcHRpb25zPzogYW55LCBmaW5kT3B0aW9ucz86IGFueSk6IFByb21pc2U8TWVyY2hhbnRNb2RlbD4ge1xuICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucGFnaW5hdGlvblJlcG9zaXRvcnkodGhpcy5kZXZpY2VNb2RlbCwgb3B0aW9ucywgZmluZE9wdGlvbnMpO1xuICAgIHJldHVybjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdE1vZGVsIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlTW9kZWwgfSBmcm9tICcuLi8uLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2Jhc2UucmVwb3NpdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PFNlcnZpY2VNb2RlbD4ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0TW9kZWwoU2VydmljZU1vZGVsKSByZWFkb25seSBtb2RlbDogdHlwZW9mIFNlcnZpY2VNb2RlbCkge1xuICAgIHN1cGVyKG1vZGVsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdE1vZGVsIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuaW1wb3J0IHsgSUZpbmRBbmRQYWdpbmF0ZU9wdGlvbnMsIElQYWdpbmF0aW9uUmVzIH0gZnJvbSAnQGxpYnMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBGaW5kT3B0aW9ucyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IERldmljZU1vZGVsIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9iYXNlLnJlcG9zaXRvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGV2aWNlUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PERldmljZU1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3RNb2RlbChEZXZpY2VNb2RlbCkgcmVhZG9ubHkgbW9kZWw6IHR5cGVvZiBEZXZpY2VNb2RlbCkge1xuICAgIHN1cGVyKG1vZGVsKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRBbmRQYWdpbmF0ZShxdWVyeT86IElGaW5kQW5kUGFnaW5hdGVPcHRpb25zLCBvcHRzPzogRmluZE9wdGlvbnMpOiBQcm9taXNlPElQYWdpbmF0aW9uUmVzPERldmljZU1vZGVsPj4ge1xuICAgIGNvbnN0IHJlc3VsdDogSVBhZ2luYXRpb25SZXM8RGV2aWNlTW9kZWw+ID0gYXdhaXQgdGhpcy5wYWdpbmF0ZShxdWVyeS53aGVyZSwgcXVlcnkucGFnZSwgcXVlcnkubGltaXQsIG9wdHMpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyLnJlcG9zaXRvcnknO1xuZXhwb3J0ICogZnJvbSAnLi9kZXZpY2UucmVwb3NpdG9yeSc7XG5leHBvcnQgKiBmcm9tICcuL25vdGlmaWNhdGlvbi5yZXBvc2l0b3J5JztcbmV4cG9ydCAqIGZyb20gJy4vbWVyY2hhbnQtdXNlci5yZXBvc2l0b3J5JztcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RNb2RlbCB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcblxuaW1wb3J0IHsgTWVyY2hhbnRVc2VyTW9kZWwgfSBmcm9tICcuLi8uLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2Jhc2UucmVwb3NpdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXJjaGFudFVzZXJSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8TWVyY2hhbnRVc2VyTW9kZWw+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdE1vZGVsKE1lcmNoYW50VXNlck1vZGVsKSByZWFkb25seSBtb2RlbDogdHlwZW9mIE1lcmNoYW50VXNlck1vZGVsKSB7XG4gICAgc3VwZXIobW9kZWwpO1xuICB9XG5cbiAgYXN5bmMgZmluZFdpdGhQYWdpbmcob3B0aW9ucz86IGFueSwgZmluZE9wdGlvbnM/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucGFnaW5hdGUodGhpcy51c2VyTW9kZWwsIG9wdGlvbnMsIGZpbmRPcHRpb25zKTtcbiAgICByZXR1cm47XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RNb2RlbCB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uTW9kZWwgfSBmcm9tICcuLi8uLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2Jhc2UucmVwb3NpdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25SZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8Tm90aWZpY2F0aW9uTW9kZWw+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdE1vZGVsKE5vdGlmaWNhdGlvbk1vZGVsKSByZWFkb25seSBtb2RlbDogdHlwZW9mIE5vdGlmaWNhdGlvbk1vZGVsKSB7XG4gICAgc3VwZXIobW9kZWwpO1xuICB9XG5cbiAgYXN5bmMgZmluZFdpdGhQYWdpbmcob3B0aW9ucz86IGFueSwgZmluZE9wdGlvbnM/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucGFnaW5hdGlvblJlcG9zaXRvcnkodGhpcy5kZXZpY2VNb2RlbCwgb3B0aW9ucywgZmluZE9wdGlvbnMpO1xuICAgIHJldHVybjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSUZpbmRBbmRQYWdpbmF0ZU9wdGlvbnMsIElQYWdpbmF0aW9uUmVzIH0gZnJvbSAnQGxpYnMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0TW9kZWwgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBGaW5kT3B0aW9ucyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gJy4uLy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYmFzZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8VXNlck1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3RNb2RlbChVc2VyTW9kZWwpIHJlYWRvbmx5IG1vZGVsOiB0eXBlb2YgVXNlck1vZGVsKSB7XG4gICAgc3VwZXIobW9kZWwpO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2xpYi9leGNlcHRpb25zL2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2Vycm9yLWNvZGVzJztcbiIsImV4cG9ydCBlbnVtIEVycm9yQ29kZXMge1xuICAvLzUwMFxuICBHRU5FUkFMX1NFUlZFUl9FUlJPUiA9IDUwMDEwMCxcbiAgVVNFUk5BTUVfQUxSRUFEWV9UQUtFTiA9IDUwMDEwMSxcbiAgSU5WQUxJRF9DUkVERU5USUFMUyA9IDUwMDEwMixcbn1cbiIsImV4cG9ydCBjbGFzcyBDdXN0b21FeGNlcHRpb24ge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGh0dHBTdGF0dXNDb2RlOiBudW1iZXI7XG4gIGVycm9yQ29kZTogbnVtYmVyO1xuICBpc0N1c3RvbUVycm9yID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGh0dHBTdGF0dXNDb2RlOiBudW1iZXIsIGVycm9yQ29kZTogbnVtYmVyKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmh0dHBTdGF0dXNDb2RlID0gaHR0cFN0YXR1c0NvZGU7XG4gICAgdGhpcy5lcnJvckNvZGUgPSBlcnJvckNvZGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IEN1c3RvbUV4Y2VwdGlvbiB9IGZyb20gJ2V4Y2VwdGlvbnMvZXhjZXB0aW9ucy9saWIvZXhjZXB0aW9ucy9jdXN0b20uZXhjZXB0aW9uJztcbmltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICdleGNlcHRpb25zL2V4Y2VwdGlvbnMvbGliL2Vycm9yLWNvZGVzJztcblxuZXhwb3J0IGNsYXNzIEdlbmVyYWxTZXJ2ZXJFcnJvckV4Y2VwdGlvbiBleHRlbmRzIEN1c3RvbUV4Y2VwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdHZW5lcmFsIHNlcnZlciBlcnJvcicsIDUwMCwgRXJyb3JDb2Rlcy5HRU5FUkFMX1NFUlZFUl9FUlJPUik7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vY3VzdG9tLmV4Y2VwdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2dlbmVyYWwtc2VydmVyLWVycm9yLmV4Y2VwdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3VzZXJuYW1lLWFscmVhZHktdGFrZW4uZXhjZXB0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vaW52YWxpZC1jcmVkZW50aWFscy5leGNlcHRpb24nO1xuIiwiaW1wb3J0IHsgQ3VzdG9tRXhjZXB0aW9uIH0gZnJvbSAnZXhjZXB0aW9ucy9leGNlcHRpb25zL2xpYi9leGNlcHRpb25zL2N1c3RvbS5leGNlcHRpb24nO1xuaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJ2V4Y2VwdGlvbnMvZXhjZXB0aW9ucy9saWIvZXJyb3ItY29kZXMnO1xuXG5leHBvcnQgY2xhc3MgSW52YWxpZENyZWRlbnRpYWxzRXhjZXB0aW9uIGV4dGVuZHMgQ3VzdG9tRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ0ludmFsaWQgQ3JlZGVudGlhbHMnLCA1MDAsIEVycm9yQ29kZXMuSU5WQUxJRF9DUkVERU5USUFMUyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEN1c3RvbUV4Y2VwdGlvbiB9IGZyb20gJ2V4Y2VwdGlvbnMvZXhjZXB0aW9ucy9saWIvZXhjZXB0aW9ucy9jdXN0b20uZXhjZXB0aW9uJztcbmltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICdleGNlcHRpb25zL2V4Y2VwdGlvbnMvbGliL2Vycm9yLWNvZGVzJztcblxuZXhwb3J0IGNsYXNzIE5pY2tuYW1lQWxyZWFkeVRha2VuRXhjZXB0aW9uIGV4dGVuZHMgQ3VzdG9tRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ05pY2tuYW1lIGlzIGFscmVhZHkgdGFrZW4nLCA1MDAsIEVycm9yQ29kZXMuVVNFUk5BTUVfQUxSRUFEWV9UQUtFTik7XG4gIH1cbn1cbiIsImltcG9ydCB7IEV4Y2VwdGlvbkZpbHRlciwgQXJndW1lbnRzSG9zdCwgQ2F0Y2gsIExvZ2dlciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEdlbmVyYWxTZXJ2ZXJFcnJvckV4Y2VwdGlvbiB9IGZyb20gJ2V4Y2VwdGlvbnMvZXhjZXB0aW9ucyc7XG5pbXBvcnQgeyBHcnBjTWV0YWRhdGFFcnJvcktleSB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMnO1xuXG5AQ2F0Y2goKVxuZXhwb3J0IGNsYXNzIEFsbEV4Y2VwdGlvbnNGaWx0ZXIgaW1wbGVtZW50cyBFeGNlcHRpb25GaWx0ZXIge1xuICBwcml2YXRlIGxvZ2dlciA9IG5ldyBMb2dnZXIoQWxsRXhjZXB0aW9uc0ZpbHRlci5uYW1lKTtcblxuICBjYXRjaChleGNlcHRpb246IGFueSwgaG9zdDogQXJndW1lbnRzSG9zdCk6IGFueSB7XG4gICAgY29uc3QgY3R4ID0gaG9zdC5zd2l0Y2hUb0h0dHAoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGN0eC5nZXRSZXNwb25zZSgpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBjdHguZ2V0UmVxdWVzdCgpO1xuICAgIGlmIChleGNlcHRpb24ubWV0YWRhdGEpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGV4Y2VwdGlvbiA9IEpTT04ucGFyc2UoZXhjZXB0aW9uLm1ldGFkYXRhLmdldChHcnBjTWV0YWRhdGFFcnJvcktleSlbMF0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihgW0dSUEMgVU5IQU5ETEVEIEVSUk9SXTogWyR7ZXhjZXB0aW9uPy5tZXNzYWdlfV0gOi0+IGAsIEpTT04uc3RyaW5naWZ5KGV4Y2VwdGlvbikpO1xuICAgICAgICBleGNlcHRpb24gPSBuZXcgR2VuZXJhbFNlcnZlckVycm9yRXhjZXB0aW9uKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghZXhjZXB0aW9uLmlzQ3VzdG9tRXJyb3IpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBbVU5IQU5ETEVEIEVSUk9SXTogWyR7ZXhjZXB0aW9uPy5tZXNzYWdlfV0gOi0+IGAsIEpTT04uc3RyaW5naWZ5KGV4Y2VwdGlvbikpO1xuICAgICAgZXhjZXB0aW9uID0gbmV3IEdlbmVyYWxTZXJ2ZXJFcnJvckV4Y2VwdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcihgW0VSUk9SOiR7ZXhjZXB0aW9uLmVycm9yQ29kZX1dICR7ZXhjZXB0aW9uLm1lc3NhZ2UudG9VcHBlckNhc2UoKX1gKTtcbiAgICB9XG4gICAgcmVzcG9uc2Uuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBtZXRhOiB7XG4gICAgICAgIGhlYWRlcnM6IHJlcXVlc3QuaGVhZGVycyxcbiAgICAgICAgcGFyYW1zOiByZXF1ZXN0LnBhcmFtcyxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgZXJyb3JDb2RlOiBleGNlcHRpb24uZXJyb3JDb2RlLFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGV4Y2VwdGlvbi5tZXNzYWdlLFxuICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCksXG4gICAgICB9LFxuICAgICAgcmVzdWx0OiBleGNlcHRpb24sXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFyZ3VtZW50c0hvc3QsIENhdGNoLCBMb2dnZXIgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBCYXNlUnBjRXhjZXB0aW9uRmlsdGVyIH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnQGdycGMvZ3JwYy1qcyc7XG5pbXBvcnQgeyBHZW5lcmFsU2VydmVyRXJyb3JFeGNlcHRpb24gfSBmcm9tICdleGNlcHRpb25zL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHsgR3JwY01ldGFkYXRhRXJyb3JLZXkgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzJztcblxuQENhdGNoKClcbmV4cG9ydCBjbGFzcyBHcnBjQWxsRXhjZXB0aW9uc0ZpbHRlciBleHRlbmRzIEJhc2VScGNFeGNlcHRpb25GaWx0ZXIge1xuICBwcml2YXRlIGxvZ2dlciA9IG5ldyBMb2dnZXIoR3JwY0FsbEV4Y2VwdGlvbnNGaWx0ZXIubmFtZSk7XG5cbiAgY2F0Y2goZXhjZXB0aW9uOiBhbnksIGhvc3Q6IEFyZ3VtZW50c0hvc3QpIHtcbiAgICBpZiAoIWV4Y2VwdGlvbi5pc0N1c3RvbUVycm9yKSB7XG4gICAgICBleGNlcHRpb24gPSBuZXcgR2VuZXJhbFNlcnZlckVycm9yRXhjZXB0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMubG9nZ2VyLmVycm9yKGBbRVJST1I6ICR7ZXhjZXB0aW9uLmVycm9yQ29kZX1dICR7ZXhjZXB0aW9uLm1lc3NhZ2V9YCk7XG4gICAgY29uc3QgZXJyb3JNZXRhZGF0YSA9IG5ldyBNZXRhZGF0YSgpO1xuICAgIGVycm9yTWV0YWRhdGEuYWRkKEdycGNNZXRhZGF0YUVycm9yS2V5LCBKU09OLnN0cmluZ2lmeShleGNlcHRpb24pKTtcbiAgICBleGNlcHRpb24ubWV0YWRhdGEgPSBlcnJvck1ldGFkYXRhO1xuICAgIHJldHVybiB0aHJvd0Vycm9yKCgpID0+IGV4Y2VwdGlvbik7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYWxsLmV4Y2VwdGlvbnMuZmlsdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JwYy1hbGwuZXhjZXB0aW9ucy5maWx0ZXInO1xuIiwiaW1wb3J0IHsgQm9va2luZ0NvbmZpZywgTWVyY2hhbnRDb25maWcsIE5vdGlmaWNhdGlvbkNvbmZpZywgVXNlckNvbmZpZywgVXNlclByb3RvIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5pbXBvcnQgeyBCT09LSU5HX1BBQ0tBR0VfTkFNRSB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL2Jvb2tpbmcnO1xuaW1wb3J0IHsgTUVSQ0hBTlRfUEFDS0FHRV9OQU1FIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3MvbWVyY2hhbnQnO1xuaW1wb3J0IHsgTk9USUZJQ0FUSU9OX1BBQ0tBR0VfTkFNRSB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBDbGllbnRQcm92aWRlck9wdGlvbnMsIFRyYW5zcG9ydCB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5cbmV4cG9ydCBjb25zdCBVc2VyQ2xpZW50OiBDbGllbnRQcm92aWRlck9wdGlvbnMgPSB7XG4gIG5hbWU6IFVzZXJQcm90by5EVUNQSF9VU0VSX1BBQ0tBR0VfTkFNRSxcbiAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuR1JQQyxcbiAgb3B0aW9uczoge1xuICAgIHBhY2thZ2U6IFVzZXJQcm90by5EVUNQSF9VU0VSX1BBQ0tBR0VfTkFNRSxcbiAgICBwcm90b1BhdGg6IFVzZXJDb25maWcucGF0aCxcbiAgICB1cmw6IGAke1VzZXJDb25maWcubG9jYWxIb3N0bmFtZX06JHtVc2VyQ29uZmlnLnBvcnR9YCxcbiAgICBsb2FkZXI6IFVzZXJDb25maWcubG9hZGVyLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IE1lcmNoYW50Q2xpZW50OiBDbGllbnRQcm92aWRlck9wdGlvbnMgPSB7XG4gIG5hbWU6IE1FUkNIQU5UX1BBQ0tBR0VfTkFNRSxcbiAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuR1JQQyxcbiAgb3B0aW9uczoge1xuICAgIHBhY2thZ2U6IE1FUkNIQU5UX1BBQ0tBR0VfTkFNRSxcbiAgICBwcm90b1BhdGg6IE1lcmNoYW50Q29uZmlnLnBhdGgsXG4gICAgdXJsOiBgJHtNZXJjaGFudENvbmZpZy5sb2NhbEhvc3RuYW1lfToke01lcmNoYW50Q29uZmlnLnBvcnR9YCxcbiAgICBsb2FkZXI6IE1lcmNoYW50Q29uZmlnLmxvYWRlcixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBCb29raW5nQ2xpZW50OiBDbGllbnRQcm92aWRlck9wdGlvbnMgPSB7XG4gIG5hbWU6IEJPT0tJTkdfUEFDS0FHRV9OQU1FLFxuICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5HUlBDLFxuICBvcHRpb25zOiB7XG4gICAgcGFja2FnZTogQk9PS0lOR19QQUNLQUdFX05BTUUsXG4gICAgcHJvdG9QYXRoOiBCb29raW5nQ29uZmlnLnBhdGgsXG4gICAgdXJsOiBgJHtCb29raW5nQ29uZmlnLmxvY2FsSG9zdG5hbWV9OiR7Qm9va2luZ0NvbmZpZy5wb3J0fWAsXG4gICAgbG9hZGVyOiBCb29raW5nQ29uZmlnLmxvYWRlcixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25DbGllbnQ6IENsaWVudFByb3ZpZGVyT3B0aW9ucyA9IHtcbiAgbmFtZTogTk9USUZJQ0FUSU9OX1BBQ0tBR0VfTkFNRSxcbiAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuR1JQQyxcbiAgb3B0aW9uczoge1xuICAgIHBhY2thZ2U6IE5PVElGSUNBVElPTl9QQUNLQUdFX05BTUUsXG4gICAgcHJvdG9QYXRoOiBOb3RpZmljYXRpb25Db25maWcucGF0aCxcbiAgICB1cmw6IGAke05vdGlmaWNhdGlvbkNvbmZpZy5sb2NhbEhvc3RuYW1lfToke05vdGlmaWNhdGlvbkNvbmZpZy5wb3J0fWAsXG4gICAgbG9hZGVyOiBOb3RpZmljYXRpb25Db25maWcubG9hZGVyLFxuICB9LFxufTtcbiIsImltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuZXhwb3J0IGNvbnN0IFVzZXJDb25maWcgPSB7XG4gIGhvc3RuYW1lOiAndXNlci1zZXJ2aWNlJyxcbiAgbG9jYWxIb3N0bmFtZTogJzAuMC4wLjAnLFxuICBwb3J0OiA1MDAwNixcbiAgcGF0aDogcmVzb2x2ZSgnbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MnLCAndXNlci5wcm90bycpLFxuICBsb2FkZXI6IHtcbiAgICBrZWVwQ2FzZTogdHJ1ZSxcbiAgICBsb25nczogTnVtYmVyLFxuICAgIGVudW1zOiBOdW1iZXIsXG4gICAgYXJyYXlzOiB0cnVlLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IE1lcmNoYW50Q29uZmlnID0ge1xuICBob3N0bmFtZTogJ21lcmNoYW50LXNlcnZpY2UnLFxuICBsb2NhbEhvc3RuYW1lOiAnMC4wLjAuMCcsXG4gIHBvcnQ6IDUwMDA4LFxuICBwYXRoOiByZXNvbHZlKCdsaWJzL2dycGMtdHlwZXMvc3JjL3Byb3RvcycsICdtZXJjaGFudC5wcm90bycpLFxuICBsb2FkZXI6IHtcbiAgICBrZWVwQ2FzZTogdHJ1ZSxcbiAgICBsb25nczogTnVtYmVyLFxuICAgIGVudW1zOiBOdW1iZXIsXG4gICAgYXJyYXlzOiB0cnVlLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEJvb2tpbmdDb25maWcgPSB7XG4gIGhvc3RuYW1lOiAnYm9va2luZy1zZXJ2aWNlJyxcbiAgbG9jYWxIb3N0bmFtZTogJzAuMC4wLjAnLFxuICBwb3J0OiA1MDAxMCxcbiAgcGF0aDogcmVzb2x2ZSgnbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MnLCAnYm9va2luZy5wcm90bycpLFxuICBsb2FkZXI6IHtcbiAgICBrZWVwQ2FzZTogdHJ1ZSxcbiAgICBsb25nczogTnVtYmVyLFxuICAgIGVudW1zOiBOdW1iZXIsXG4gICAgYXJyYXlzOiB0cnVlLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkNvbmZpZyA9IHtcbiAgaG9zdG5hbWU6ICdub3RpZmljYXRpb24tc2VydmljZScsXG4gIGxvY2FsSG9zdG5hbWU6ICcwLjAuMC4wJyxcbiAgcG9ydDogNTAwMTIsXG4gIHBhdGg6IHJlc29sdmUoJ2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zJywgJ25vdGlmaWNhdGlvbi5wcm90bycpLFxuICBsb2FkZXI6IHtcbiAgICBrZWVwQ2FzZTogdHJ1ZSxcbiAgICBsb25nczogTnVtYmVyLFxuICAgIGVudW1zOiBOdW1iZXIsXG4gICAgYXJyYXlzOiB0cnVlLFxuICB9LFxufTtcbiIsImltcG9ydCAqIGFzIFVzZXJQcm90byBmcm9tICcuL3Byb3Rvcy91c2VyJztcbmltcG9ydCAqIGFzIENvbW1vblByb3RvIGZyb20gJy4vcHJvdG9zL2NvbW1vbnMnO1xuaW1wb3J0ICogYXMgTWVyY2hhbnRQcm90byBmcm9tICcuL3Byb3Rvcy9tZXJjaGFudCc7XG5pbXBvcnQgKiBhcyBCb29raW5nUHJvdG8gZnJvbSAnLi9wcm90b3MvYm9va2luZyc7XG5pbXBvcnQgKiBhcyBOb3RpZmljYXRpb25Qcm90byBmcm9tICcuL3Byb3Rvcy9ub3RpZmljYXRpb24nO1xuaW1wb3J0ICogYXMgQnJhbmNoUHJvdG8gZnJvbSAnLi9wcm90b3MvYnJhbmNoJztcbmltcG9ydCAqIGFzIERldmljZVByb3RvIGZyb20gJy4vcHJvdG9zL2RldmljZSc7XG5pbXBvcnQgKiBhcyBNZXJjaGFudFVzZXJQcm90byBmcm9tICcuL3Byb3Rvcy9tZXJjaGFudF91c2VyJztcblxuZXhwb3J0ICogZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgKiBmcm9tICcuL3NlcnZlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9jbGllbnRzJztcblxuZXhwb3J0IHtcbiAgQ29tbW9uUHJvdG8sXG4gIFVzZXJQcm90byxcbiAgTWVyY2hhbnRQcm90byxcbiAgQm9va2luZ1Byb3RvLFxuICBOb3RpZmljYXRpb25Qcm90byxcbiAgQnJhbmNoUHJvdG8sXG4gIERldmljZVByb3RvLFxuICBNZXJjaGFudFVzZXJQcm90byxcbn07XG5cbmV4cG9ydCBjb25zdCBHcnBjTWV0YWRhdGFFcnJvcktleSA9ICdjdXN0b20tZ3JwYy1lcnJvcic7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgR3JwY01ldGhvZCwgR3JwY1N0cmVhbU1ldGhvZCB9IGZyb20gXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQ291bnQsIElkLCBRdWVyeVJlcXVlc3QgfSBmcm9tIFwiLi9jb21tb25zXCI7XG5pbXBvcnQgeyBOdWxsVmFsdWUgfSBmcm9tIFwiLi9nb29nbGUvcHJvdG9idWYvc3RydWN0XCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImJvb2tpbmdcIjtcblxuZXhwb3J0IGVudW0gRUJvb2tpbmdTdGF0dXMge1xuICBQRU5ESU5HID0gMCxcbiAgQVBQUk9WRSA9IDEsXG4gIENBTkNFTExFRCA9IDIsXG4gIFJFSkVDVCA9IDMsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9va2luZyB7XG4gIC8qKiBkZWZhdWx0IGZpZWxkICovXG4gIGlkOiBudW1iZXI7XG4gIGNyZWF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNyZWF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQnk/OlxuICAgIHwgc3RyaW5nXG4gICAgfCB1bmRlZmluZWQ7XG4gIC8qKiByZXNlcnZlZCBmaWVsZCAqL1xuICBzdGF0dXM/OiBFQm9va2luZ1N0YXR1cyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZXJ2aWNlSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHN0YXJ0VGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZW5kVGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZHVyYXRpb24/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG5vdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBpc0N1c3RvbWVyQ2FuY2VsPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgY2FuY2VsUmVhc29uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBib29raW5nRGF0ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaXNBZG1pblVwZGF0ZT86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIGFkbWluVXBkYXRlSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2VOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lck5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyRW1haWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyQWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZHVyYXRpb25Ib3VyPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkdXJhdGlvbk1pbnV0ZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVCb29raW5nSW5wdXQge1xuICBzdGF0dXM/OiBFQm9va2luZ1N0YXR1cyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZXJ2aWNlSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHN0YXJ0VGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZW5kVGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRtaW5CcmFuY2hFbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJFbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBib29raW5nRGF0ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbm90ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2VOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZUJvb2tpbmdEYXRhIHtcbiAgc3RhdHVzPzogRUJvb2tpbmdTdGF0dXMgfCB1bmRlZmluZWQ7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc2VydmljZUlkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzdGFydFRpbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGVuZFRpbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGFkbWluQnJhbmNoRW1haWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyRW1haWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYm9va2luZ0RhdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG5vdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZXJ2aWNlTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVCb29raW5nSW5wdXQge1xuICBpZDogbnVtYmVyO1xuICBkYXRhOiBVcGRhdGVCb29raW5nRGF0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kQm9va2luZ09mZnNldFBhZ2luYXRpb24ge1xuICBpdGVtczogQm9va2luZ1tdO1xuICBwYWdlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB0b3RhbFBhZ2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHRvdGFsPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBsaW1pdD86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOdWxsYWJsZUJvb2tpbmcge1xuICBudWxsPzogTnVsbFZhbHVlIHwgdW5kZWZpbmVkO1xuICBib29raW5nPzogQm9va2luZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IEJPT0tJTkdfUEFDS0FHRV9OQU1FID0gXCJib29raW5nXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9va2luZ1NlcnZpY2VDbGllbnQge1xuICBmaW5kKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8RmluZEJvb2tpbmdPZmZzZXRQYWdpbmF0aW9uPjtcblxuICBmaW5kQnlJZChyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8TnVsbGFibGVCb29raW5nPjtcblxuICBmaW5kT25lKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8TnVsbGFibGVCb29raW5nPjtcblxuICBjb3VudChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPENvdW50PjtcblxuICBjcmVhdGUocmVxdWVzdDogQ3JlYXRlQm9va2luZ0lucHV0KTogT2JzZXJ2YWJsZTxCb29raW5nPjtcblxuICB1cGRhdGUocmVxdWVzdDogVXBkYXRlQm9va2luZ0lucHV0KTogT2JzZXJ2YWJsZTxCb29raW5nPjtcblxuICBkZWxldGUocmVxdWVzdDogSWQpOiBPYnNlcnZhYmxlPENvdW50Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCb29raW5nU2VydmljZUNvbnRyb2xsZXIge1xuICBmaW5kKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCxcbiAgKTogUHJvbWlzZTxGaW5kQm9va2luZ09mZnNldFBhZ2luYXRpb24+IHwgT2JzZXJ2YWJsZTxGaW5kQm9va2luZ09mZnNldFBhZ2luYXRpb24+IHwgRmluZEJvb2tpbmdPZmZzZXRQYWdpbmF0aW9uO1xuXG4gIGZpbmRCeUlkKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxOdWxsYWJsZUJvb2tpbmc+IHwgT2JzZXJ2YWJsZTxOdWxsYWJsZUJvb2tpbmc+IHwgTnVsbGFibGVCb29raW5nO1xuXG4gIGZpbmRPbmUocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxOdWxsYWJsZUJvb2tpbmc+IHwgT2JzZXJ2YWJsZTxOdWxsYWJsZUJvb2tpbmc+IHwgTnVsbGFibGVCb29raW5nO1xuXG4gIGNvdW50KHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8Q291bnQ+IHwgT2JzZXJ2YWJsZTxDb3VudD4gfCBDb3VudDtcblxuICBjcmVhdGUocmVxdWVzdDogQ3JlYXRlQm9va2luZ0lucHV0KTogUHJvbWlzZTxCb29raW5nPiB8IE9ic2VydmFibGU8Qm9va2luZz4gfCBCb29raW5nO1xuXG4gIHVwZGF0ZShyZXF1ZXN0OiBVcGRhdGVCb29raW5nSW5wdXQpOiBQcm9taXNlPEJvb2tpbmc+IHwgT2JzZXJ2YWJsZTxCb29raW5nPiB8IEJvb2tpbmc7XG5cbiAgZGVsZXRlKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQm9va2luZ1NlcnZpY2VDb250cm9sbGVyTWV0aG9kcygpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb25zdHJ1Y3RvcjogRnVuY3Rpb24pIHtcbiAgICBjb25zdCBncnBjTWV0aG9kczogc3RyaW5nW10gPSBbXCJmaW5kXCIsIFwiZmluZEJ5SWRcIiwgXCJmaW5kT25lXCIsIFwiY291bnRcIiwgXCJjcmVhdGVcIiwgXCJ1cGRhdGVcIiwgXCJkZWxldGVcIl07XG4gICAgZm9yIChjb25zdCBtZXRob2Qgb2YgZ3JwY01ldGhvZHMpIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0b3I6IGFueSA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgbWV0aG9kKTtcbiAgICAgIEdycGNNZXRob2QoXCJCb29raW5nU2VydmljZVwiLCBtZXRob2QpKGNvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2RdLCBtZXRob2QsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICBjb25zdCBncnBjU3RyZWFtTWV0aG9kczogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjU3RyZWFtTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY1N0cmVhbU1ldGhvZChcIkJvb2tpbmdTZXJ2aWNlXCIsIG1ldGhvZCkoY29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZF0sIG1ldGhvZCwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgQk9PS0lOR19TRVJWSUNFX05BTUUgPSBcIkJvb2tpbmdTZXJ2aWNlXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgUGFnZUluZm8sIFBhZ2VNZXRhIH0gZnJvbSBcIi4vY29tbW9uc1wiO1xuaW1wb3J0IHsgTnVsbFZhbHVlIH0gZnJvbSBcIi4vZ29vZ2xlL3Byb3RvYnVmL3N0cnVjdFwiO1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJicmFuY2hcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVCcmFuY2hEYXRhIHtcbiAgbmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGFkZHJlc3M/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHlDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkaXN0cmljdENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHdhcmRDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjaXR5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkaXN0cmljdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgd2FyZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVCcmFuY2hJbnB1dCB7XG4gIGlkOiBudW1iZXI7XG4gIGRhdGE6IFVwZGF0ZUJyYW5jaERhdGEgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlQnJhbmNoSW5wdXQge1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB3YXJkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJyYW5jaCB7XG4gIC8qKiBkZWZhdWx0IGZpZWxkICovXG4gIGlkOiBudW1iZXI7XG4gIGNyZWF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNyZWF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQnk/OlxuICAgIHwgc3RyaW5nXG4gICAgfCB1bmRlZmluZWQ7XG4gIC8qKiByZXNlcnZlZCBmaWVsZCAqL1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB3YXJkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJyYW5jaEVkZ2Uge1xuICBub2RlOiBCcmFuY2ggfCB1bmRlZmluZWQ7XG4gIGN1cnNvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRCcmFuY2hlc1BheWxvYWQge1xuICBlZGdlczogQnJhbmNoRWRnZVtdO1xuICBwYWdlSW5mbzogUGFnZUluZm8gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnVsbGFibGVCcmFuY2gge1xuICBudWxsPzogTnVsbFZhbHVlIHwgdW5kZWZpbmVkO1xuICBicmFuY2g/OiBCcmFuY2ggfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJhbmNoZXMge1xuICBicmFuY2hlczogQnJhbmNoW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJhbmNoUGFnaW5hdGlvbiB7XG4gIGl0ZW1zOiBCcmFuY2hbXTtcbiAgbWV0YT86IFBhZ2VNZXRhIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgQlJBTkNIX1BBQ0tBR0VfTkFNRSA9IFwiYnJhbmNoXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJjb21tb25zXCI7XG5cbmV4cG9ydCBlbnVtIEVTb3J0RGlyZWN0aW9uIHtcbiAgQVNDID0gMCxcbiAgREVTQyA9IDEsXG59XG5cbmV4cG9ydCBlbnVtIEVVc2VyR2VuZGVyIHtcbiAgTUFMRSA9IDAsXG4gIEZFTUFMRSA9IDEsXG4gIE9USEVSID0gMixcbn1cblxuZXhwb3J0IGVudW0gRVVzZXJSb2xlIHtcbiAgVVNFUiA9IDAsXG4gIEFETUlOID0gMSxcbiAgU1VQRVJfQURNSU4gPSAyLFxuICBNQVNURVJfV09SS0VSID0gMyxcbiAgQVNTSVNUQU5UX1dPUktFUiA9IDQsXG4gIE1BTkFHRVIgPSA1LFxuICBSRUNFUFRJT05JU1QgPSA2LFxufVxuXG5leHBvcnQgZW51bSBFQ3VzdG9tZXJMZXZlbCB7XG4gIE5PUk1BTCA9IDAsXG4gIFNJTFZFUiA9IDEsXG4gIEdPTEQgPSAyLFxuICBQTEFUSU5VTSA9IDMsXG59XG5cbmV4cG9ydCBlbnVtIEVVc2VyU3RhdHVzIHtcbiAgUEVORElORyA9IDAsXG4gIEFDVElWRSA9IDEsXG4gIEJBTk5FRCA9IDIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWQge1xuICBpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyUXVlcnkge1xuICBmaWx0ZXI6IHN0cmluZztcbiAgcGFnaW5nOiBQYWdpbmcgfCB1bmRlZmluZWQ7XG4gIHNvcnRpbmc6IFNvcnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcWxRdWVyeSB7XG4gIHNlbGVjdDogc3RyaW5nW107XG4gIHdoZXJlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBvcmRlckJ5OiBzdHJpbmdbXTtcbiAgbGltaXQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGJlZm9yZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWZ0ZXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUluZm8ge1xuICBzdGFydEN1cnNvcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZW5kQ3Vyc29yPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBoYXNOZXh0UGFnZT86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIGhhc1ByZXZpb3VzUGFnZT86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ291bnQge1xuICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvdGFsQ291bnQge1xuICB0b3RhbENvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlSZXF1ZXN0IHtcbiAgd2hlcmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHBhZ2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxpbWl0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZWFyY2hLZXk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG9yZGVyQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG9yZGVyRGlyZWN0aW9uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnQge1xuICBmaWVsZDogc3RyaW5nO1xuICBkaXJlY3Rpb246IEVTb3J0RGlyZWN0aW9uO1xuICBudWxsczogU29ydF9Tb3J0TnVsbHM7XG59XG5cbmV4cG9ydCBlbnVtIFNvcnRfU29ydE51bGxzIHtcbiAgTlVMTFNfRklSU1QgPSAwLFxuICBOVUxMU19MQVNUID0gMSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdpbmcge1xuICBsaW1pdDogbnVtYmVyO1xuICBvZmZzZXQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlTWV0YSB7XG4gIHRvdGFsPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB0b3RhbFBhZ2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHBhZ2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxpbWl0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgQ09NTU9OU19QQUNLQUdFX05BTUUgPSBcImNvbW1vbnNcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBQYWdlTWV0YSB9IGZyb20gXCIuL2NvbW1vbnNcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwiZGV2aWNlXCI7XG5cbmV4cG9ydCBlbnVtIEVEZXZpY2VPcyB7XG4gIEFORFJPSUQgPSAwLFxuICBJT1MgPSAxLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZSB7XG4gIC8qKiBkZWZhdWx0IGZpZWxkICovXG4gIGlkOiBudW1iZXI7XG4gIGNyZWF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNyZWF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQnk/OlxuICAgIHwgc3RyaW5nXG4gICAgfCB1bmRlZmluZWQ7XG4gIC8qKiByZXNlcnZlZCBmaWVsZCAqL1xuICBvcz86IEVEZXZpY2VPcyB8IHVuZGVmaW5lZDtcbiAgZGV2aWNlSWQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHRva2VuPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1c2VySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlRGV2aWNlSW5wdXQge1xuICBvczogRURldmljZU9zO1xuICBkZXZpY2VJZDogc3RyaW5nO1xuICB0b2tlbjogc3RyaW5nO1xuICB1c2VySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlcyB7XG4gIGl0ZW1zOiBEZXZpY2VbXTtcbiAgbWV0YT86IFBhZ2VNZXRhIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgREVWSUNFX1BBQ0tBR0VfTkFNRSA9IFwiZGV2aWNlXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgR3JwY01ldGhvZCwgR3JwY1N0cmVhbU1ldGhvZCB9IGZyb20gXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQnJhbmNoLCBCcmFuY2hlcywgQnJhbmNoUGFnaW5hdGlvbiwgQ3JlYXRlQnJhbmNoSW5wdXQsIE51bGxhYmxlQnJhbmNoLCBVcGRhdGVCcmFuY2hJbnB1dCB9IGZyb20gXCIuL2JyYW5jaFwiO1xuaW1wb3J0IHsgQ291bnQsIElkLCBQYWdlSW5mbywgUGFnZU1ldGEsIFF1ZXJ5UmVxdWVzdCB9IGZyb20gXCIuL2NvbW1vbnNcIjtcbmltcG9ydCB7IE51bGxWYWx1ZSB9IGZyb20gXCIuL2dvb2dsZS9wcm90b2J1Zi9zdHJ1Y3RcIjtcbmltcG9ydCB7IENyZWF0ZUdyb3VwSW5wdXQsIEdyb3VwLCBHcm91cFBhZ2luYXRpb24sIE51bGxhYmxlR3JvdXAsIFVwZGF0ZUdyb3VwSW5wdXQgfSBmcm9tIFwiLi9ncm91cFwiO1xuaW1wb3J0IHtcbiAgQ3JlYXRlU2VydmljZUlucHV0LFxuICBGaW5kU2VydmljZU9mZnNldFBhZ2luYXRpb24sXG4gIEZpbmRTZXJ2aWNlc1BheWxvYWQsXG4gIE51bGxhYmxlU2VydmljZSxcbiAgU2VydmljZSxcbiAgVXBkYXRlU2VydmljZUlucHV0LFxufSBmcm9tIFwiLi9zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcIm1lcmNoYW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlTWVyY2hhbnREYXRhIHtcbiAgbmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGFkZHJlc3M/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB3YXJkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZU1lcmNoYW50SW5wdXQge1xuICBpZDogbnVtYmVyO1xuICBkYXRhOiBVcGRhdGVNZXJjaGFudERhdGEgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlSW5wdXQge1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjaXR5Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3YXJkQ29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3Q/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHdhcmQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVyY2hhbnQge1xuICAvKiogZGVmYXVsdCBmaWVsZCAqL1xuICBpZDogbnVtYmVyO1xuICBjcmVhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjcmVhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEJ5PzpcbiAgICB8IHN0cmluZ1xuICAgIHwgdW5kZWZpbmVkO1xuICAvKiogcmVzZXJ2ZWQgZmllbGQgKi9cbiAgbmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGFkZHJlc3M/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB3YXJkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lcmNoYW50RWRnZSB7XG4gIG5vZGU6IE1lcmNoYW50IHwgdW5kZWZpbmVkO1xuICBjdXJzb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kTWVyY2hhbnRzUGF5bG9hZCB7XG4gIGVkZ2VzOiBNZXJjaGFudEVkZ2VbXTtcbiAgcGFnZUluZm86IFBhZ2VJbmZvIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE51bGxhYmxlTWVyY2hhbnQge1xuICBudWxsPzogTnVsbFZhbHVlIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudD86IE1lcmNoYW50IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZU1lcmNoYW50UmVzcG9uc2Uge1xuICBtZXJjaGFudDogTWVyY2hhbnQgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaDogQnJhbmNoIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lcmNoYW50cyB7XG4gIG1lcmNoYW50czogTWVyY2hhbnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXJjaGFudFBhZ2luYXRpb24ge1xuICBpdGVtczogTWVyY2hhbnRbXTtcbiAgbWV0YT86IFBhZ2VNZXRhIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgTUVSQ0hBTlRfUEFDS0FHRV9OQU1FID0gXCJtZXJjaGFudFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lcmNoYW50U2VydmljZUNsaWVudCB7XG4gIGZpbmQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxNZXJjaGFudFBhZ2luYXRpb24+O1xuXG4gIGZpbmRBbGwocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxNZXJjaGFudHM+O1xuXG4gIGZpbmRPbmUocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxOdWxsYWJsZU1lcmNoYW50PjtcblxuICBjcmVhdGUocmVxdWVzdDogQ3JlYXRlSW5wdXQpOiBPYnNlcnZhYmxlPENyZWF0ZU1lcmNoYW50UmVzcG9uc2U+O1xuXG4gIGNvdW50KHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8Q291bnQ+O1xuXG4gIGZpbmRCeUlkKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxOdWxsYWJsZU1lcmNoYW50PjtcblxuICAvKiogYnJhbmNoICovXG5cbiAgYnJhbmNoKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8TnVsbGFibGVCcmFuY2g+O1xuXG4gIGZpbmRCcmFuY2hlcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPEJyYW5jaFBhZ2luYXRpb24+O1xuXG4gIGJyYW5jaGVzKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8QnJhbmNoZXM+O1xuXG4gIGZpbmRCcmFuY2hCeUlkKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxOdWxsYWJsZUJyYW5jaD47XG5cbiAgY3JlYXRlQnJhbmNoKHJlcXVlc3Q6IENyZWF0ZUJyYW5jaElucHV0KTogT2JzZXJ2YWJsZTxCcmFuY2g+O1xuXG4gIHVwZGF0ZUJyYW5jaChyZXF1ZXN0OiBVcGRhdGVCcmFuY2hJbnB1dCk6IE9ic2VydmFibGU8QnJhbmNoPjtcblxuICBkZWxldGVCcmFuY2gocmVxdWVzdDogSWQpOiBPYnNlcnZhYmxlPENvdW50PjtcblxuICAvKiogZ3JvdXAgKi9cblxuICBncm91cChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPE51bGxhYmxlR3JvdXA+O1xuXG4gIGdyb3VwcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPEdyb3VwUGFnaW5hdGlvbj47XG5cbiAgZmluZEdyb3VwQnlJZChyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8TnVsbGFibGVHcm91cD47XG5cbiAgY3JlYXRlR3JvdXAocmVxdWVzdDogQ3JlYXRlR3JvdXBJbnB1dCk6IE9ic2VydmFibGU8R3JvdXA+O1xuXG4gIHVwZGF0ZUdyb3VwKHJlcXVlc3Q6IFVwZGF0ZUdyb3VwSW5wdXQpOiBPYnNlcnZhYmxlPEdyb3VwPjtcblxuICBkZWxldGVHcm91cChyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8Q291bnQ+O1xuXG4gIC8qKiBzZXJ2aWNlICovXG5cbiAgc2VydmljZShyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPE51bGxhYmxlU2VydmljZT47XG5cbiAgc2VydmljZXMocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxGaW5kU2VydmljZXNQYXlsb2FkPjtcblxuICBmaW5kU2VydmljZUJ5SWQocmVxdWVzdDogSWQpOiBPYnNlcnZhYmxlPE51bGxhYmxlU2VydmljZT47XG5cbiAgY3JlYXRlU2VydmljZShyZXF1ZXN0OiBDcmVhdGVTZXJ2aWNlSW5wdXQpOiBPYnNlcnZhYmxlPFNlcnZpY2U+O1xuXG4gIHVwZGF0ZVNlcnZpY2UocmVxdWVzdDogVXBkYXRlU2VydmljZUlucHV0KTogT2JzZXJ2YWJsZTxTZXJ2aWNlPjtcblxuICBkZWxldGVTZXJ2aWNlKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxDb3VudD47XG5cbiAgZmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8RmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXJjaGFudFNlcnZpY2VDb250cm9sbGVyIHtcbiAgZmluZChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE1lcmNoYW50UGFnaW5hdGlvbj4gfCBPYnNlcnZhYmxlPE1lcmNoYW50UGFnaW5hdGlvbj4gfCBNZXJjaGFudFBhZ2luYXRpb247XG5cbiAgZmluZEFsbChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE1lcmNoYW50cz4gfCBPYnNlcnZhYmxlPE1lcmNoYW50cz4gfCBNZXJjaGFudHM7XG5cbiAgZmluZE9uZShyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE51bGxhYmxlTWVyY2hhbnQ+IHwgT2JzZXJ2YWJsZTxOdWxsYWJsZU1lcmNoYW50PiB8IE51bGxhYmxlTWVyY2hhbnQ7XG5cbiAgY3JlYXRlKFxuICAgIHJlcXVlc3Q6IENyZWF0ZUlucHV0LFxuICApOiBQcm9taXNlPENyZWF0ZU1lcmNoYW50UmVzcG9uc2U+IHwgT2JzZXJ2YWJsZTxDcmVhdGVNZXJjaGFudFJlc3BvbnNlPiB8IENyZWF0ZU1lcmNoYW50UmVzcG9uc2U7XG5cbiAgY291bnQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xuXG4gIGZpbmRCeUlkKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxOdWxsYWJsZU1lcmNoYW50PiB8IE9ic2VydmFibGU8TnVsbGFibGVNZXJjaGFudD4gfCBOdWxsYWJsZU1lcmNoYW50O1xuXG4gIC8qKiBicmFuY2ggKi9cblxuICBicmFuY2gocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxOdWxsYWJsZUJyYW5jaD4gfCBPYnNlcnZhYmxlPE51bGxhYmxlQnJhbmNoPiB8IE51bGxhYmxlQnJhbmNoO1xuXG4gIGZpbmRCcmFuY2hlcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPEJyYW5jaFBhZ2luYXRpb24+IHwgT2JzZXJ2YWJsZTxCcmFuY2hQYWdpbmF0aW9uPiB8IEJyYW5jaFBhZ2luYXRpb247XG5cbiAgYnJhbmNoZXMocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxCcmFuY2hlcz4gfCBPYnNlcnZhYmxlPEJyYW5jaGVzPiB8IEJyYW5jaGVzO1xuXG4gIGZpbmRCcmFuY2hCeUlkKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxOdWxsYWJsZUJyYW5jaD4gfCBPYnNlcnZhYmxlPE51bGxhYmxlQnJhbmNoPiB8IE51bGxhYmxlQnJhbmNoO1xuXG4gIGNyZWF0ZUJyYW5jaChyZXF1ZXN0OiBDcmVhdGVCcmFuY2hJbnB1dCk6IFByb21pc2U8QnJhbmNoPiB8IE9ic2VydmFibGU8QnJhbmNoPiB8IEJyYW5jaDtcblxuICB1cGRhdGVCcmFuY2gocmVxdWVzdDogVXBkYXRlQnJhbmNoSW5wdXQpOiBQcm9taXNlPEJyYW5jaD4gfCBPYnNlcnZhYmxlPEJyYW5jaD4gfCBCcmFuY2g7XG5cbiAgZGVsZXRlQnJhbmNoKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xuXG4gIC8qKiBncm91cCAqL1xuXG4gIGdyb3VwKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8TnVsbGFibGVHcm91cD4gfCBPYnNlcnZhYmxlPE51bGxhYmxlR3JvdXA+IHwgTnVsbGFibGVHcm91cDtcblxuICBncm91cHMocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxHcm91cFBhZ2luYXRpb24+IHwgT2JzZXJ2YWJsZTxHcm91cFBhZ2luYXRpb24+IHwgR3JvdXBQYWdpbmF0aW9uO1xuXG4gIGZpbmRHcm91cEJ5SWQocmVxdWVzdDogSWQpOiBQcm9taXNlPE51bGxhYmxlR3JvdXA+IHwgT2JzZXJ2YWJsZTxOdWxsYWJsZUdyb3VwPiB8IE51bGxhYmxlR3JvdXA7XG5cbiAgY3JlYXRlR3JvdXAocmVxdWVzdDogQ3JlYXRlR3JvdXBJbnB1dCk6IFByb21pc2U8R3JvdXA+IHwgT2JzZXJ2YWJsZTxHcm91cD4gfCBHcm91cDtcblxuICB1cGRhdGVHcm91cChyZXF1ZXN0OiBVcGRhdGVHcm91cElucHV0KTogUHJvbWlzZTxHcm91cD4gfCBPYnNlcnZhYmxlPEdyb3VwPiB8IEdyb3VwO1xuXG4gIGRlbGV0ZUdyb3VwKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xuXG4gIC8qKiBzZXJ2aWNlICovXG5cbiAgc2VydmljZShyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE51bGxhYmxlU2VydmljZT4gfCBPYnNlcnZhYmxlPE51bGxhYmxlU2VydmljZT4gfCBOdWxsYWJsZVNlcnZpY2U7XG5cbiAgc2VydmljZXMocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxGaW5kU2VydmljZXNQYXlsb2FkPiB8IE9ic2VydmFibGU8RmluZFNlcnZpY2VzUGF5bG9hZD4gfCBGaW5kU2VydmljZXNQYXlsb2FkO1xuXG4gIGZpbmRTZXJ2aWNlQnlJZChyZXF1ZXN0OiBJZCk6IFByb21pc2U8TnVsbGFibGVTZXJ2aWNlPiB8IE9ic2VydmFibGU8TnVsbGFibGVTZXJ2aWNlPiB8IE51bGxhYmxlU2VydmljZTtcblxuICBjcmVhdGVTZXJ2aWNlKHJlcXVlc3Q6IENyZWF0ZVNlcnZpY2VJbnB1dCk6IFByb21pc2U8U2VydmljZT4gfCBPYnNlcnZhYmxlPFNlcnZpY2U+IHwgU2VydmljZTtcblxuICB1cGRhdGVTZXJ2aWNlKHJlcXVlc3Q6IFVwZGF0ZVNlcnZpY2VJbnB1dCk6IFByb21pc2U8U2VydmljZT4gfCBPYnNlcnZhYmxlPFNlcnZpY2U+IHwgU2VydmljZTtcblxuICBkZWxldGVTZXJ2aWNlKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xuXG4gIGZpbmRTZXJ2aWNlT2Zmc2V0UGFnaW5hdGlvbihcbiAgICByZXF1ZXN0OiBRdWVyeVJlcXVlc3QsXG4gICk6IFByb21pc2U8RmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uPiB8IE9ic2VydmFibGU8RmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uPiB8IEZpbmRTZXJ2aWNlT2Zmc2V0UGFnaW5hdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1lcmNoYW50U2VydmljZUNvbnRyb2xsZXJNZXRob2RzKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnN0cnVjdG9yOiBGdW5jdGlvbikge1xuICAgIGNvbnN0IGdycGNNZXRob2RzOiBzdHJpbmdbXSA9IFtcbiAgICAgIFwiZmluZFwiLFxuICAgICAgXCJmaW5kQWxsXCIsXG4gICAgICBcImZpbmRPbmVcIixcbiAgICAgIFwiY3JlYXRlXCIsXG4gICAgICBcImNvdW50XCIsXG4gICAgICBcImZpbmRCeUlkXCIsXG4gICAgICBcImJyYW5jaFwiLFxuICAgICAgXCJmaW5kQnJhbmNoZXNcIixcbiAgICAgIFwiYnJhbmNoZXNcIixcbiAgICAgIFwiZmluZEJyYW5jaEJ5SWRcIixcbiAgICAgIFwiY3JlYXRlQnJhbmNoXCIsXG4gICAgICBcInVwZGF0ZUJyYW5jaFwiLFxuICAgICAgXCJkZWxldGVCcmFuY2hcIixcbiAgICAgIFwiZ3JvdXBcIixcbiAgICAgIFwiZ3JvdXBzXCIsXG4gICAgICBcImZpbmRHcm91cEJ5SWRcIixcbiAgICAgIFwiY3JlYXRlR3JvdXBcIixcbiAgICAgIFwidXBkYXRlR3JvdXBcIixcbiAgICAgIFwiZGVsZXRlR3JvdXBcIixcbiAgICAgIFwic2VydmljZVwiLFxuICAgICAgXCJzZXJ2aWNlc1wiLFxuICAgICAgXCJmaW5kU2VydmljZUJ5SWRcIixcbiAgICAgIFwiY3JlYXRlU2VydmljZVwiLFxuICAgICAgXCJ1cGRhdGVTZXJ2aWNlXCIsXG4gICAgICBcImRlbGV0ZVNlcnZpY2VcIixcbiAgICAgIFwiZmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uXCIsXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY01ldGhvZChcIk1lcmNoYW50U2VydmljZVwiLCBtZXRob2QpKGNvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2RdLCBtZXRob2QsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICBjb25zdCBncnBjU3RyZWFtTWV0aG9kczogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjU3RyZWFtTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY1N0cmVhbU1ldGhvZChcIk1lcmNoYW50U2VydmljZVwiLCBtZXRob2QpKGNvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2RdLCBtZXRob2QsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IE1FUkNIQU5UX1NFUlZJQ0VfTkFNRSA9IFwiTWVyY2hhbnRTZXJ2aWNlXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgRVVzZXJSb2xlLCBFVXNlclN0YXR1cywgUGFnZU1ldGEgfSBmcm9tIFwiLi9jb21tb25zXCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcIm1lcmNoYW50X3VzZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBNZXJjaGFudFVzZXIge1xuICAvKiogZGVmYXVsdCBmaWVsZCAqL1xuICBpZDogbnVtYmVyO1xuICBjcmVhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjcmVhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEJ5PzpcbiAgICB8IHN0cmluZ1xuICAgIHwgdW5kZWZpbmVkO1xuICAvKiogcmVzZXJ2ZWQgZmllbGQgKi9cbiAgcm9sZT86IEVVc2VyUm9sZSB8IHVuZGVmaW5lZDtcbiAgc3RhdHVzPzogRVVzZXJTdGF0dXMgfCB1bmRlZmluZWQ7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTWVyY2hhbnRVc2VySW5wdXQge1xuICByb2xlPzogRVVzZXJSb2xlIHwgdW5kZWZpbmVkO1xuICBzdGF0dXM/OiBFVXNlclN0YXR1cyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBicmFuY2hJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXJjaGFudFVzZXJzIHtcbiAgaXRlbXM6IE1lcmNoYW50VXNlcltdO1xuICBtZXRhPzogUGFnZU1ldGEgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlTWVyY2hhbnRVc2VyRGF0YSB7XG4gIHJvbGU/OiBFVXNlclJvbGUgfCB1bmRlZmluZWQ7XG4gIHN0YXR1cz86IEVVc2VyU3RhdHVzIHwgdW5kZWZpbmVkO1xuICB1c2VySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZU1lcmNoYW50VXNlcklucHV0IHtcbiAgaWQ6IG51bWJlcjtcbiAgZGF0YTogVXBkYXRlTWVyY2hhbnRVc2VyRGF0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IE1FUkNIQU5UX1VTRVJfUEFDS0FHRV9OQU1FID0gXCJtZXJjaGFudF91c2VyXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgR3JwY01ldGhvZCwgR3JwY1N0cmVhbU1ldGhvZCB9IGZyb20gXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgUXVlcnlSZXF1ZXN0IH0gZnJvbSBcIi4vY29tbW9uc1wiO1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJub3RpZmljYXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb24ge1xuICBpZDogbnVtYmVyO1xuICBzdGF0dXM6IHN0cmluZztcbiAgY3VzdG9tZXJJZDogbnVtYmVyO1xuICBicmFuY2hTZXJ2aWNlSWQ6IG51bWJlcjtcbiAgc3RhcnRUaW1lOiBzdHJpbmc7XG4gIGVuZFRpbWU6IHN0cmluZztcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xuICBub3RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkOiBudW1iZXI7XG4gIGJyYW5jaElkOiBudW1iZXI7XG4gIGlzQ3VzdG9tZXJDYW5jZWw/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICBjYW5jZWxSZWFzb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGJvb2tpbmdEYXRlOiBzdHJpbmc7XG4gIGlzQWRtaW5VcGRhdGU/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICBhZG1pblVwZGF0ZUlkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZXJ2aWNlTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lckVtYWlsPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lckFkZHJlc3M/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uRWRnZSB7XG4gIG5vZGU6IE5vdGlmaWNhdGlvbiB8IHVuZGVmaW5lZDtcbiAgY3Vyc29yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZEFsbEJvb2tpbmdzUGFnaW5hdGlvbiB7XG4gIGl0ZW1zOiBOb3RpZmljYXRpb25bXTtcbiAgcGFnZTogbnVtYmVyO1xuICB0b3RhbFBhZ2U6IG51bWJlcjtcbiAgdG90YWw6IG51bWJlcjtcbiAgbGltaXQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IE5PVElGSUNBVElPTl9QQUNLQUdFX05BTUUgPSBcIm5vdGlmaWNhdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJvb2tpbmdTZXJ2aWNlR3JwY0NsaWVudCB7XG4gIGZpbmRBbGwocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxGaW5kQWxsQm9va2luZ3NQYWdpbmF0aW9uPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCb29raW5nU2VydmljZUdycGNDb250cm9sbGVyIHtcbiAgZmluZEFsbChcbiAgICByZXF1ZXN0OiBRdWVyeVJlcXVlc3QsXG4gICk6IFByb21pc2U8RmluZEFsbEJvb2tpbmdzUGFnaW5hdGlvbj4gfCBPYnNlcnZhYmxlPEZpbmRBbGxCb29raW5nc1BhZ2luYXRpb24+IHwgRmluZEFsbEJvb2tpbmdzUGFnaW5hdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJvb2tpbmdTZXJ2aWNlR3JwY0NvbnRyb2xsZXJNZXRob2RzKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnN0cnVjdG9yOiBGdW5jdGlvbikge1xuICAgIGNvbnN0IGdycGNNZXRob2RzOiBzdHJpbmdbXSA9IFtcImZpbmRBbGxcIl07XG4gICAgZm9yIChjb25zdCBtZXRob2Qgb2YgZ3JwY01ldGhvZHMpIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0b3I6IGFueSA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgbWV0aG9kKTtcbiAgICAgIEdycGNNZXRob2QoXCJCb29raW5nU2VydmljZUdycGNcIiwgbWV0aG9kKShjb25zdHJ1Y3Rvci5wcm90b3R5cGVbbWV0aG9kXSwgbWV0aG9kLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gICAgY29uc3QgZ3JwY1N0cmVhbU1ldGhvZHM6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBtZXRob2Qgb2YgZ3JwY1N0cmVhbU1ldGhvZHMpIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0b3I6IGFueSA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgbWV0aG9kKTtcbiAgICAgIEdycGNTdHJlYW1NZXRob2QoXCJCb29raW5nU2VydmljZUdycGNcIiwgbWV0aG9kKShjb25zdHJ1Y3Rvci5wcm90b3R5cGVbbWV0aG9kXSwgbWV0aG9kLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBCT09LSU5HX1NFUlZJQ0VfR1JQQ19TRVJWSUNFX05BTUUgPSBcIkJvb2tpbmdTZXJ2aWNlR3JwY1wiO1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IFBhZ2VJbmZvIH0gZnJvbSBcIi4vY29tbW9uc1wiO1xuaW1wb3J0IHsgTnVsbFZhbHVlIH0gZnJvbSBcIi4vZ29vZ2xlL3Byb3RvYnVmL3N0cnVjdFwiO1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJzZXJ2aWNlXCI7XG5cbmV4cG9ydCBlbnVtIEVTZXJ2aWNlU2hvd1R5cGUge1xuICBCT1RIID0gMCxcbiAgQ0FTSElFUiA9IDEsXG4gIEJPT0tJTkcgPSAyLFxuICBOT05FID0gMyxcbn1cblxuZXhwb3J0IGVudW0gRVNlcnZpY2VUeXBlIHtcbiAgU0VSVklDRSA9IDAsXG4gIFBST0RVQ1QgPSAxLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZVNlcnZpY2VEYXRhIHtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc2t1Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjb2RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaW1hZ2U/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlU2VydmljZUlucHV0IHtcbiAgaWQ6IG51bWJlcjtcbiAgZGF0YTogVXBkYXRlU2VydmljZURhdGEgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlU2VydmljZUlucHV0IHtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZ3JvdXBJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcHJpY2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGluaXRpYWxQcmljZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2FwaXRhbFByaWNlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkdXJhdGlvbkhvdXI/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGR1cmF0aW9uTWludXRlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBza3U/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBpbWFnZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdHlwZT86IEVTZXJ2aWNlVHlwZSB8IHVuZGVmaW5lZDtcbiAgc2hvd1R5cGU/OiBFU2VydmljZVNob3dUeXBlIHwgdW5kZWZpbmVkO1xuICBjYW5QcmludGFibGVJbnZvaWNlPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlIHtcbiAgLyoqIGRlZmF1bHQgZmllbGQgKi9cbiAgaWQ6IG51bWJlcjtcbiAgY3JlYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3JlYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRCeT86XG4gICAgfCBzdHJpbmdcbiAgICB8IHVuZGVmaW5lZDtcbiAgLyoqIHJlc2VydmVkIGZpZWxkICovXG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGdyb3VwSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHByaWNlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBpbml0aWFsUHJpY2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNhcGl0YWxQcmljZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZHVyYXRpb25Ib3VyPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkdXJhdGlvbk1pbnV0ZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc2t1Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjb2RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaW1hZ2U/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHR5cGU/OiBFU2VydmljZVR5cGUgfCB1bmRlZmluZWQ7XG4gIHNob3dUeXBlPzogRVNlcnZpY2VTaG93VHlwZSB8IHVuZGVmaW5lZDtcbiAgY2FuUHJpbnRhYmxlSW52b2ljZT86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VydmljZUVkZ2Uge1xuICBub2RlOiBTZXJ2aWNlIHwgdW5kZWZpbmVkO1xuICBjdXJzb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kU2VydmljZXNQYXlsb2FkIHtcbiAgZWRnZXM6IFNlcnZpY2VFZGdlW107XG4gIHBhZ2VJbmZvOiBQYWdlSW5mbyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOdWxsYWJsZVNlcnZpY2Uge1xuICBudWxsPzogTnVsbFZhbHVlIHwgdW5kZWZpbmVkO1xuICBzZXJ2aWNlPzogU2VydmljZSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kU2VydmljZU9mZnNldFBhZ2luYXRpb24ge1xuICBpdGVtczogU2VydmljZVtdO1xuICB0b3RhbFBhZ2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHRvdGFsPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBwYWdlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBsaW1pdD86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IFNFUlZJQ0VfUEFDS0FHRV9OQU1FID0gXCJzZXJ2aWNlXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgR3JwY01ldGhvZCwgR3JwY1N0cmVhbU1ldGhvZCB9IGZyb20gXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQ291bnQsIEVDdXN0b21lckxldmVsLCBFVXNlckdlbmRlciwgRVVzZXJSb2xlLCBFVXNlclN0YXR1cywgSWQsIFBhZ2VNZXRhLCBRdWVyeVJlcXVlc3QgfSBmcm9tIFwiLi9jb21tb25zXCI7XG5pbXBvcnQgeyBDcmVhdGVEZXZpY2VJbnB1dCwgRGV2aWNlLCBEZXZpY2VzIH0gZnJvbSBcIi4vZGV2aWNlXCI7XG5pbXBvcnQgeyBOdWxsVmFsdWUgfSBmcm9tIFwiLi9nb29nbGUvcHJvdG9idWYvc3RydWN0XCI7XG5pbXBvcnQgeyBDcmVhdGVNZXJjaGFudFVzZXJJbnB1dCwgTWVyY2hhbnRVc2VyIH0gZnJvbSBcIi4vbWVyY2hhbnRfdXNlclwiO1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJkdWNwaF91c2VyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIC8qKiBkZWZhdWx0IGZpZWxkICovXG4gIGlkOiBudW1iZXI7XG4gIGNyZWF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNyZWF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQnk/OlxuICAgIHwgc3RyaW5nXG4gICAgfCB1bmRlZmluZWQ7XG4gIC8qKiByZXNlcnZlZCBmaWVsZCAqL1xuICBlbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGFzc3dvcmQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHN0YXR1cz86IEVVc2VyU3RhdHVzIHwgdW5kZWZpbmVkO1xuICBmdWxsTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29udGFjdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGhvbmVOdW1iZXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRvYkRheT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZG9iTW9udGg/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRvYlllYXI/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHJvbGU/OiBFVXNlclJvbGUgfCB1bmRlZmluZWQ7XG4gIGdlbmRlcj86IEVVc2VyR2VuZGVyIHwgdW5kZWZpbmVkO1xuICBvY2N1cGF0aW9uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhdmF0YXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGFkZHJlc3M/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNpdHlDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkaXN0cmljdENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHdhcmRDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICByZWZlcnJlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVmZXJyZXJDb2RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBsZXZlbD86IEVDdXN0b21lckxldmVsIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lckNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGZhY2Vib29rPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB6YWxvUGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGhlaWdodD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2VpZ2h0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBtZW1iZXJDYXJkTm8/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvbXBhbnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHRheE5vPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBub3RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWxhdGVkVXNlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVsYXRlZFVzZXJSb2xlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWxhdGVkVXNlclBob25lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBicmFuY2hJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbGF0aXR1ZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxvbmdpdHVkZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgaXNSZXRhaWxDdXN0b21lcj86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlVXNlcklucHV0IHtcbiAgZW1haWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHBhc3N3b3JkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBzdGF0dXM/OiBFVXNlclN0YXR1cyB8IHVuZGVmaW5lZDtcbiAgZnVsbE5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvbnRhY3Q/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHBob25lTnVtYmVyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkb2JEYXk/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRvYk1vbnRoPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkb2JZZWFyPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICByb2xlPzogRVVzZXJSb2xlIHwgdW5kZWZpbmVkO1xuICBnZW5kZXI/OiBFVXNlckdlbmRlciB8IHVuZGVmaW5lZDtcbiAgb2NjdXBhdGlvbj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYXZhdGFyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhZGRyZXNzPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjaXR5Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3YXJkQ29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcmVmZXJyZXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlZmVycmVyQ29kZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbGV2ZWw/OiBFQ3VzdG9tZXJMZXZlbCB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJDb2RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBmYWNlYm9vaz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgemFsb1Bob25lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBoZWlnaHQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHdlaWdodD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbWVtYmVyQ2FyZE5vPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjb21wYW55Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB0YXhObz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbm90ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVsYXRlZFVzZXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbGF0ZWRVc2VyUm9sZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVsYXRlZFVzZXJQaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxhdGl0dWRlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBsb25naXR1ZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGlzUmV0YWlsQ3VzdG9tZXI/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVVzZXJSZXF1ZXN0IHtcbiAgdXNlcjogQ3JlYXRlVXNlcklucHV0IHwgdW5kZWZpbmVkO1xuICBkZXZpY2U/OiBDcmVhdGVEZXZpY2VJbnB1dCB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kT25lVXNlciB7XG4gIHVzZXI6IFVzZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlVXNlcklucHV0IHtcbiAgaWQ6IG51bWJlcjtcbiAgZGF0YTogVXBkYXRlVXNlckRhdGEgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnVsbGFibGVVc2VyIHtcbiAgbnVsbD86IE51bGxWYWx1ZSB8IHVuZGVmaW5lZDtcbiAgdXNlcj86IFVzZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlVXNlckRhdGEge1xuICBlbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGFzc3dvcmQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHN0YXR1cz86IEVVc2VyU3RhdHVzIHwgdW5kZWZpbmVkO1xuICBmdWxsTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29udGFjdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGhvbmVOdW1iZXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRvYkRheT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZG9iTW9udGg/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRvYlllYXI/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHJvbGU/OiBFVXNlclJvbGUgfCB1bmRlZmluZWQ7XG4gIGdlbmRlcj86IEVVc2VyR2VuZGVyIHwgdW5kZWZpbmVkO1xuICBvY2N1cGF0aW9uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhdmF0YXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGFkZHJlc3M/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNpdHlDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkaXN0cmljdENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHdhcmRDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICByZWZlcnJlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVmZXJyZXJDb2RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBsZXZlbD86IEVDdXN0b21lckxldmVsIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lckNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGZhY2Vib29rPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB6YWxvUGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGhlaWdodD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2VpZ2h0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBtZW1iZXJDYXJkTm8/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvbXBhbnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHRheE5vPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBub3RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWxhdGVkVXNlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVsYXRlZFVzZXJSb2xlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWxhdGVkVXNlclBob25lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBicmFuY2hJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRPcGVyYXRvcklucHV0IHtcbiAgdXNlcjogQ3JlYXRlVXNlcklucHV0IHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudFVzZXI/OiBDcmVhdGVNZXJjaGFudFVzZXJJbnB1dCB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZG1pblVwZGF0ZUN1c3RvbWVySW5wdXQge1xuICBpZDogbnVtYmVyO1xuICB1c2VyOiBVcGRhdGVVc2VyRGF0YSB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRVc2VyPzogQ3JlYXRlTWVyY2hhbnRVc2VySW5wdXQgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclBhZ2luYXRpb24ge1xuICBpdGVtczogVXNlcltdO1xuICBtZXRhPzogUGFnZU1ldGEgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBEVUNQSF9VU0VSX1BBQ0tBR0VfTkFNRSA9IFwiZHVjcGhfdXNlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTZXJ2aWNlQ2xpZW50IHtcbiAgZmluZChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPFVzZXJQYWdpbmF0aW9uPjtcblxuICBjcmVhdGUocmVxdWVzdDogQ3JlYXRlVXNlclJlcXVlc3QpOiBPYnNlcnZhYmxlPEZpbmRPbmVVc2VyPjtcblxuICBmaW5kQnlJZChyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8TnVsbGFibGVVc2VyPjtcblxuICBmaW5kT25lKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8TnVsbGFibGVVc2VyPjtcblxuICBjb3VudChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPENvdW50PjtcblxuICB1cGRhdGUocmVxdWVzdDogVXBkYXRlVXNlcklucHV0KTogT2JzZXJ2YWJsZTxGaW5kT25lVXNlcj47XG5cbiAgZGVsZXRlQ3VzdG9tZXIocmVxdWVzdDogSWQpOiBPYnNlcnZhYmxlPENvdW50PjtcblxuICAvKiogZGV2aWNlICovXG5cbiAgY3JlYXRlRGV2aWNlKHJlcXVlc3Q6IENyZWF0ZURldmljZUlucHV0KTogT2JzZXJ2YWJsZTxEZXZpY2U+O1xuXG4gIGZpbmREZXZpY2VzKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8RGV2aWNlcz47XG5cbiAgdXBzZXJ0RGV2aWNlKHJlcXVlc3Q6IENyZWF0ZURldmljZUlucHV0KTogT2JzZXJ2YWJsZTxEZXZpY2U+O1xuXG4gIC8qKiBtZXJjaGFudF91c2VyICovXG5cbiAgY3JlYXRlTWVyY2hhbnRVc2VyKHJlcXVlc3Q6IENyZWF0ZU1lcmNoYW50VXNlcklucHV0KTogT2JzZXJ2YWJsZTxNZXJjaGFudFVzZXI+O1xuXG4gIGFkZE9wZXJhdG9yKHJlcXVlc3Q6IEFkZE9wZXJhdG9ySW5wdXQpOiBPYnNlcnZhYmxlPEZpbmRPbmVVc2VyPjtcblxuICBjb3VudEN1c3RvbWVyKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8Q291bnQ+O1xuXG4gIC8qKiBjdXN0b21lciAqL1xuXG4gIGFkZEN1c3RvbWVyKHJlcXVlc3Q6IEFkZE9wZXJhdG9ySW5wdXQpOiBPYnNlcnZhYmxlPEZpbmRPbmVVc2VyPjtcblxuICB1cGRhdGVDdXN0b21lcihyZXF1ZXN0OiBBZG1pblVwZGF0ZUN1c3RvbWVySW5wdXQpOiBPYnNlcnZhYmxlPEZpbmRPbmVVc2VyPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyU2VydmljZUNvbnRyb2xsZXIge1xuICBmaW5kKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8VXNlclBhZ2luYXRpb24+IHwgT2JzZXJ2YWJsZTxVc2VyUGFnaW5hdGlvbj4gfCBVc2VyUGFnaW5hdGlvbjtcblxuICBjcmVhdGUocmVxdWVzdDogQ3JlYXRlVXNlclJlcXVlc3QpOiBQcm9taXNlPEZpbmRPbmVVc2VyPiB8IE9ic2VydmFibGU8RmluZE9uZVVzZXI+IHwgRmluZE9uZVVzZXI7XG5cbiAgZmluZEJ5SWQocmVxdWVzdDogSWQpOiBQcm9taXNlPE51bGxhYmxlVXNlcj4gfCBPYnNlcnZhYmxlPE51bGxhYmxlVXNlcj4gfCBOdWxsYWJsZVVzZXI7XG5cbiAgZmluZE9uZShyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE51bGxhYmxlVXNlcj4gfCBPYnNlcnZhYmxlPE51bGxhYmxlVXNlcj4gfCBOdWxsYWJsZVVzZXI7XG5cbiAgY291bnQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xuXG4gIHVwZGF0ZShyZXF1ZXN0OiBVcGRhdGVVc2VySW5wdXQpOiBQcm9taXNlPEZpbmRPbmVVc2VyPiB8IE9ic2VydmFibGU8RmluZE9uZVVzZXI+IHwgRmluZE9uZVVzZXI7XG5cbiAgZGVsZXRlQ3VzdG9tZXIocmVxdWVzdDogSWQpOiBQcm9taXNlPENvdW50PiB8IE9ic2VydmFibGU8Q291bnQ+IHwgQ291bnQ7XG5cbiAgLyoqIGRldmljZSAqL1xuXG4gIGNyZWF0ZURldmljZShyZXF1ZXN0OiBDcmVhdGVEZXZpY2VJbnB1dCk6IFByb21pc2U8RGV2aWNlPiB8IE9ic2VydmFibGU8RGV2aWNlPiB8IERldmljZTtcblxuICBmaW5kRGV2aWNlcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPERldmljZXM+IHwgT2JzZXJ2YWJsZTxEZXZpY2VzPiB8IERldmljZXM7XG5cbiAgdXBzZXJ0RGV2aWNlKHJlcXVlc3Q6IENyZWF0ZURldmljZUlucHV0KTogUHJvbWlzZTxEZXZpY2U+IHwgT2JzZXJ2YWJsZTxEZXZpY2U+IHwgRGV2aWNlO1xuXG4gIC8qKiBtZXJjaGFudF91c2VyICovXG5cbiAgY3JlYXRlTWVyY2hhbnRVc2VyKHJlcXVlc3Q6IENyZWF0ZU1lcmNoYW50VXNlcklucHV0KTogUHJvbWlzZTxNZXJjaGFudFVzZXI+IHwgT2JzZXJ2YWJsZTxNZXJjaGFudFVzZXI+IHwgTWVyY2hhbnRVc2VyO1xuXG4gIGFkZE9wZXJhdG9yKHJlcXVlc3Q6IEFkZE9wZXJhdG9ySW5wdXQpOiBQcm9taXNlPEZpbmRPbmVVc2VyPiB8IE9ic2VydmFibGU8RmluZE9uZVVzZXI+IHwgRmluZE9uZVVzZXI7XG5cbiAgY291bnRDdXN0b21lcihyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPENvdW50PiB8IE9ic2VydmFibGU8Q291bnQ+IHwgQ291bnQ7XG5cbiAgLyoqIGN1c3RvbWVyICovXG5cbiAgYWRkQ3VzdG9tZXIocmVxdWVzdDogQWRkT3BlcmF0b3JJbnB1dCk6IFByb21pc2U8RmluZE9uZVVzZXI+IHwgT2JzZXJ2YWJsZTxGaW5kT25lVXNlcj4gfCBGaW5kT25lVXNlcjtcblxuICB1cGRhdGVDdXN0b21lcihyZXF1ZXN0OiBBZG1pblVwZGF0ZUN1c3RvbWVySW5wdXQpOiBQcm9taXNlPEZpbmRPbmVVc2VyPiB8IE9ic2VydmFibGU8RmluZE9uZVVzZXI+IHwgRmluZE9uZVVzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVc2VyU2VydmljZUNvbnRyb2xsZXJNZXRob2RzKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnN0cnVjdG9yOiBGdW5jdGlvbikge1xuICAgIGNvbnN0IGdycGNNZXRob2RzOiBzdHJpbmdbXSA9IFtcbiAgICAgIFwiZmluZFwiLFxuICAgICAgXCJjcmVhdGVcIixcbiAgICAgIFwiZmluZEJ5SWRcIixcbiAgICAgIFwiZmluZE9uZVwiLFxuICAgICAgXCJjb3VudFwiLFxuICAgICAgXCJ1cGRhdGVcIixcbiAgICAgIFwiZGVsZXRlQ3VzdG9tZXJcIixcbiAgICAgIFwiY3JlYXRlRGV2aWNlXCIsXG4gICAgICBcImZpbmREZXZpY2VzXCIsXG4gICAgICBcInVwc2VydERldmljZVwiLFxuICAgICAgXCJjcmVhdGVNZXJjaGFudFVzZXJcIixcbiAgICAgIFwiYWRkT3BlcmF0b3JcIixcbiAgICAgIFwiY291bnRDdXN0b21lclwiLFxuICAgICAgXCJhZGRDdXN0b21lclwiLFxuICAgICAgXCJ1cGRhdGVDdXN0b21lclwiLFxuICAgIF07XG4gICAgZm9yIChjb25zdCBtZXRob2Qgb2YgZ3JwY01ldGhvZHMpIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0b3I6IGFueSA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgbWV0aG9kKTtcbiAgICAgIEdycGNNZXRob2QoXCJVc2VyU2VydmljZVwiLCBtZXRob2QpKGNvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2RdLCBtZXRob2QsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICBjb25zdCBncnBjU3RyZWFtTWV0aG9kczogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjU3RyZWFtTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY1N0cmVhbU1ldGhvZChcIlVzZXJTZXJ2aWNlXCIsIG1ldGhvZCkoY29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZF0sIG1ldGhvZCwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgVVNFUl9TRVJWSUNFX05BTUUgPSBcIlVzZXJTZXJ2aWNlXCI7XG4iLCJpbXBvcnQge1xuICBCb29raW5nQ29uZmlnLFxuICBCb29raW5nUHJvdG8sXG4gIE1lcmNoYW50Q29uZmlnLFxuICBNZXJjaGFudFByb3RvLFxuICBOb3RpZmljYXRpb25Db25maWcsXG4gIE5vdGlmaWNhdGlvblByb3RvLFxuICBVc2VyQ29uZmlnLFxuICBVc2VyUHJvdG8sXG59IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMnO1xuaW1wb3J0IHsgVHJhbnNwb3J0IH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcblxuZXhwb3J0IGNvbnN0IFVzZXJTZXJ2ZXI6IGFueSA9IHtcbiAgbmFtZTogVXNlclByb3RvLkRVQ1BIX1VTRVJfUEFDS0FHRV9OQU1FLFxuICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5HUlBDLFxuICBvcHRpb25zOiB7XG4gICAgcGFja2FnZTogVXNlclByb3RvLkRVQ1BIX1VTRVJfUEFDS0FHRV9OQU1FLFxuICAgIHByb3RvUGF0aDogVXNlckNvbmZpZy5wYXRoLFxuICAgIHVybDogYCR7VXNlckNvbmZpZy5sb2NhbEhvc3RuYW1lfToke1VzZXJDb25maWcucG9ydH1gLFxuICAgIGxvYWRlcjogVXNlckNvbmZpZy5sb2FkZXIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgTWVyY2hhbnRTZXJ2ZXI6IGFueSA9IHtcbiAgbmFtZTogTWVyY2hhbnRQcm90by5NRVJDSEFOVF9QQUNLQUdFX05BTUUsXG4gIHRyYW5zcG9ydDogVHJhbnNwb3J0LkdSUEMsXG4gIG9wdGlvbnM6IHtcbiAgICBwYWNrYWdlOiBNZXJjaGFudFByb3RvLk1FUkNIQU5UX1BBQ0tBR0VfTkFNRSxcbiAgICBwcm90b1BhdGg6IE1lcmNoYW50Q29uZmlnLnBhdGgsXG4gICAgdXJsOiBgJHtNZXJjaGFudENvbmZpZy5sb2NhbEhvc3RuYW1lfToke01lcmNoYW50Q29uZmlnLnBvcnR9YCxcbiAgICBsb2FkZXI6IE1lcmNoYW50Q29uZmlnLmxvYWRlcixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBCb29raW5nU2VydmVyOiBhbnkgPSB7XG4gIG5hbWU6IEJvb2tpbmdQcm90by5CT09LSU5HX1BBQ0tBR0VfTkFNRSxcbiAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuR1JQQyxcbiAgb3B0aW9uczoge1xuICAgIHBhY2thZ2U6IEJvb2tpbmdQcm90by5CT09LSU5HX1BBQ0tBR0VfTkFNRSxcbiAgICBwcm90b1BhdGg6IEJvb2tpbmdDb25maWcucGF0aCxcbiAgICB1cmw6IGAke0Jvb2tpbmdDb25maWcubG9jYWxIb3N0bmFtZX06JHtCb29raW5nQ29uZmlnLnBvcnR9YCxcbiAgICBsb2FkZXI6IEJvb2tpbmdDb25maWcubG9hZGVyLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvblNlcnZlcjogYW55ID0ge1xuICBuYW1lOiBOb3RpZmljYXRpb25Qcm90by5OT1RJRklDQVRJT05fUEFDS0FHRV9OQU1FLFxuICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5HUlBDLFxuICBvcHRpb25zOiB7XG4gICAgcGFja2FnZTogTm90aWZpY2F0aW9uUHJvdG8uTk9USUZJQ0FUSU9OX1BBQ0tBR0VfTkFNRSxcbiAgICBwcm90b1BhdGg6IE5vdGlmaWNhdGlvbkNvbmZpZy5wYXRoLFxuICAgIHVybDogYCR7Tm90aWZpY2F0aW9uQ29uZmlnLmxvY2FsSG9zdG5hbWV9OiR7Tm90aWZpY2F0aW9uQ29uZmlnLnBvcnR9YCxcbiAgICBsb2FkZXI6IE5vdGlmaWNhdGlvbkNvbmZpZy5sb2FkZXIsXG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FsbEhhbmRsZXIsIEV4ZWN1dGlvbkNvbnRleHQsIEluamVjdGFibGUsIExvZ2dlciwgTmVzdEludGVyY2VwdG9yIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JwY0xvZ0ludGVyY2VwdG9yIGltcGxlbWVudHMgTmVzdEludGVyY2VwdG9yIHtcbiAgcHJpdmF0ZSByZWFkb25seSBsb2dnZXIgPSBuZXcgTG9nZ2VyKEdycGNMb2dJbnRlcmNlcHRvci5uYW1lKTtcblxuICBpbnRlcmNlcHQoY29udGV4dDogRXhlY3V0aW9uQ29udGV4dCwgbmV4dDogQ2FsbEhhbmRsZXIpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBjb25zdCByZXFCb2R5ID0gY29udGV4dC5zd2l0Y2hUb1JwYygpLmdldERhdGEoKTtcbiAgICBjb25zdCBtZXRob2QgPSBjb250ZXh0LmdldEhhbmRsZXIoKS5uYW1lO1xuICAgIGNvbnN0IGNvbnRleHRUeXBlID0gY29udGV4dC5nZXRUeXBlKCk7XG4gICAgY29uc3QgY29udHJvbGxlck5hbWUgPSBjb250ZXh0LmdldENsYXNzKCkubmFtZTtcbiAgICB0aGlzLmxvZ2dlci5sb2coYEdSUEMtUkVRVUVTVDogWyR7Y29udGV4dFR5cGV9XTpbJHtjb250cm9sbGVyTmFtZX1dOlske21ldGhvZH1dOi0+ICR7SlNPTi5zdHJpbmdpZnkocmVxQm9keSl9YCk7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKCkucGlwZShcbiAgICAgIHRhcCgoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5sb2coYEdSUEMtUkVTUE9OU0U6IFske2NvbnRleHRUeXBlfV06WyR7Y29udHJvbGxlck5hbWV9XTpbJHttZXRob2R9XX1gKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vdHJhbnNmb3JtLmludGVyY2VwdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JwYy1sb2cuaW50ZXJjZXB0b3InO1xuIiwiaW1wb3J0IHsgQ2FsbEhhbmRsZXIsIEV4ZWN1dGlvbkNvbnRleHQsIEluamVjdGFibGUsIExvZ2dlciwgTmVzdEludGVyY2VwdG9yIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YUludGVyZmFjZSB7XG4gIHBhcmFtczogYW55O1xuICBzdGF0dXM6IGJvb2xlYW47XG4gIGVycm9yQ29kZT86IHN0cmluZztcbiAgdGltZXN0YW1wOiBEYXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlPFQ+IHtcbiAgbWV0YT86IHN0cmluZztcbiAgc3RhdHVzQ29kZT86IG51bWJlcjtcbiAgbWVzc2FnZT86IHN0cmluZztcbiAgcmVzdWx0OiBUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlSGFuZGxlRGF0YSB7XG4gIGNvZGU/OiBudW1iZXI7XG4gIG1ldGE/OiBzdHJpbmc7XG4gIHN0YXR1c0NvZGU/OiBudW1iZXI7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmFuc2Zvcm1JbnRlcmNlcHRvciBpbXBsZW1lbnRzIE5lc3RJbnRlcmNlcHRvciB7XG4gIHByaXZhdGUgbG9nZ2VyID0gbmV3IExvZ2dlcihUcmFuc2Zvcm1JbnRlcmNlcHRvci5uYW1lKTtcblxuICBpbnRlcmNlcHQoY29udGV4dDogRXhlY3V0aW9uQ29udGV4dCwgbmV4dDogQ2FsbEhhbmRsZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gY29udGV4dC5zd2l0Y2hUb0h0dHAoKS5nZXRSZXF1ZXN0KCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBjb250ZXh0LnN3aXRjaFRvSHR0cCgpLmdldFJlc3BvbnNlPFJlc3BvbnNlSGFuZGxlRGF0YT4oKTtcbiAgICBjb25zdCB7IG1ldGhvZCwgdXJsLCBib2R5LCBwYXJhbXMsIHN0YXR1cywgcXVlcnkgfSA9IHJlcXVlc3Q7XG4gICAgdGhpcy5sb2dnZXIubG9nKGBSRVEgWyR7bWV0aG9kfSAke3VybH1dOi0+ICR7SlNPTi5zdHJpbmdpZnkoYm9keSl9YCk7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKCkucGlwZShcbiAgICAgIG1hcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgICAgICBtZXRhOiBKU09OLnN0cmluZ2lmeSh7IHBhcmFtczogcGFyYW1zLCBzdGF0dXM6IHN0YXR1cywgcXVlcnksIHRpbWVzdGFtcDogbmV3IERhdGUoKSB9KSxcbiAgICAgICAgICBtZXNzYWdlOiBkYXRhPy5tZXNzYWdlID8/IHJlc3BvbnNlLm1lc3NhZ2UgPz8gcmVxdWVzdD8ubWVzc2FnZSA/PyAnT2snLFxuICAgICAgICAgIGNvZGU6IGRhdGE/LnN0YXR1c0NvZGUgPz8gc3RhdHVzID8/IHJlc3BvbnNlLmNvZGUgPz8gcmVzcG9uc2Uuc3RhdHVzQ29kZSxcbiAgICAgICAgICBzdGF0dXNDb2RlOiBkYXRhPy5zdGF0dXNDb2RlID8/IHN0YXR1cyA/PyByZXNwb25zZS5zdGF0dXNDb2RlLFxuICAgICAgICAgIHJlc3VsdDogb21pdChkYXRhLCBbJ21lc3NhZ2UnXSksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJUG9zdGdyZXNFbnYgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0U2VjcmV0c1NlcnZpY2Uge1xuICBlbnY6IHN0cmluZztcblxuICB1c2VyU2VydmljZURhdGFiYXNlOiBJUG9zdGdyZXNFbnY7XG5cbiAgbWVyY2hhbnRTZXJ2aWNlRGF0YWJhc2U6IElQb3N0Z3Jlc0VudjtcblxuICBib29raW5nU2VydmljZURhdGFiYXNlOiBJUG9zdGdyZXNFbnY7XG5cbiAgbm90aWZpY2F0aW9uU2VydmljZURhdGFiYXNlOiBJUG9zdGdyZXNFbnY7XG59XG4iLCJpbXBvcnQgeyBHbG9iYWwsIE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuaW1wb3J0IHsgQWJzdHJhY3RTZWNyZXRzU2VydmljZSB9IGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgeyBTZWNyZXRzU2VydmljZSB9IGZyb20gJy4vc2VydmljZSc7XG5cbkBHbG9iYWwoKVxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBlbnZGaWxlUGF0aDogWycuZW52J10sXG4gICAgfSksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFic3RyYWN0U2VjcmV0c1NlcnZpY2UsXG4gICAgICB1c2VDbGFzczogU2VjcmV0c1NlcnZpY2UsXG4gICAgfSxcbiAgXSxcbiAgZXhwb3J0czogW0Fic3RyYWN0U2VjcmV0c1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWNyZXRzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuaW1wb3J0IHsgQWJzdHJhY3RTZWNyZXRzU2VydmljZSB9IGZyb20gJy4vYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWNyZXRzU2VydmljZSBleHRlbmRzIENvbmZpZ1NlcnZpY2UgaW1wbGVtZW50cyBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGVudiA9IHRoaXMuZ2V0KCdFTlYnKTtcblxuICBwb3J0ID0gdGhpcy5nZXQ8bnVtYmVyPignUE9SVCcpO1xuXG4gIHVzZXJTZXJ2aWNlRGF0YWJhc2UgPSB7XG4gICAgaG9zdDogdGhpcy5nZXQ8c3RyaW5nPignVVNFUl9EQl9IT1NUJyksXG4gICAgcG9ydDogdGhpcy5nZXQ8bnVtYmVyPignVVNFUl9EQl9QT1JUJyksXG4gICAgdXNlcm5hbWU6IHRoaXMuZ2V0PHN0cmluZz4oJ1VTRVJfREJfVVNFUk5BTUUnKSxcbiAgICBwYXNzd29yZDogdGhpcy5nZXQ8c3RyaW5nPignVVNFUl9EQl9QQVNTV09SRCcpLFxuICAgIGRhdGFiYXNlOiB0aGlzLmdldDxzdHJpbmc+KCdVU0VSX0RCX0RBVEFCQVNFJyksXG4gIH07XG5cbiAgbWVyY2hhbnRTZXJ2aWNlRGF0YWJhc2UgPSB7XG4gICAgaG9zdDogdGhpcy5nZXQ8c3RyaW5nPignTUVSQ0hBTlRfREJfSE9TVCcpLFxuICAgIHBvcnQ6IHRoaXMuZ2V0PG51bWJlcj4oJ01FUkNIQU5UX0RCX1BPUlQnKSxcbiAgICB1c2VybmFtZTogdGhpcy5nZXQ8c3RyaW5nPignTUVSQ0hBTlRfREJfVVNFUk5BTUUnKSxcbiAgICBwYXNzd29yZDogdGhpcy5nZXQ8c3RyaW5nPignTUVSQ0hBTlRfREJfUEFTU1dPUkQnKSxcbiAgICBkYXRhYmFzZTogdGhpcy5nZXQ8c3RyaW5nPignTUVSQ0hBTlRfREJfREFUQUJBU0UnKSxcbiAgfTtcblxuICBib29raW5nU2VydmljZURhdGFiYXNlID0ge1xuICAgIGhvc3Q6IHRoaXMuZ2V0PHN0cmluZz4oJ0JPT0tJTkdfREJfSE9TVCcpLFxuICAgIHBvcnQ6IHRoaXMuZ2V0PG51bWJlcj4oJ0JPT0tJTkdfREJfUE9SVCcpLFxuICAgIHVzZXJuYW1lOiB0aGlzLmdldDxzdHJpbmc+KCdCT09LSU5HX0RCX1VTRVJOQU1FJyksXG4gICAgcGFzc3dvcmQ6IHRoaXMuZ2V0PHN0cmluZz4oJ0JPT0tJTkdfREJfUEFTU1dPUkQnKSxcbiAgICBkYXRhYmFzZTogdGhpcy5nZXQ8c3RyaW5nPignQk9PS0lOR19EQl9EQVRBQkFTRScpLFxuICB9O1xuXG4gIG5vdGlmaWNhdGlvblNlcnZpY2VEYXRhYmFzZSA9IHtcbiAgICBob3N0OiB0aGlzLmdldDxzdHJpbmc+KCdOT1RJRklDQVRJT05fREJfSE9TVCcpLFxuICAgIHBvcnQ6IHRoaXMuZ2V0PG51bWJlcj4oJ05PVElGSUNBVElPTl9EQl9QT1JUJyksXG4gICAgdXNlcm5hbWU6IHRoaXMuZ2V0PHN0cmluZz4oJ05PVElGSUNBVElPTl9EQl9VU0VSTkFNRScpLFxuICAgIHBhc3N3b3JkOiB0aGlzLmdldDxzdHJpbmc+KCdOT1RJRklDQVRJT05fREJfUEFTU1dPUkQnKSxcbiAgICBkYXRhYmFzZTogdGhpcy5nZXQ8c3RyaW5nPignTk9USUZJQ0FUSU9OX0RCX0RBVEFCQVNFJyksXG4gIH07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ3JwYy9ncnBjLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9zZXF1ZWxpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXJnb24yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvb3BlcmF0b3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemUtdHlwZXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBJTmVzdE1pY3Jvc2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IE5lc3RGYWN0b3J5IH0gZnJvbSAnQG5lc3Rqcy9jb3JlJztcbmltcG9ydCB7IE1pY3Jvc2VydmljZU9wdGlvbnMgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgQm9va2luZ1NlcnZlciB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xuXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCBhcHA6IElOZXN0TWljcm9zZXJ2aWNlID0gYXdhaXQgTmVzdEZhY3RvcnkuY3JlYXRlTWljcm9zZXJ2aWNlPE1pY3Jvc2VydmljZU9wdGlvbnM+KEFwcE1vZHVsZSwgQm9va2luZ1NlcnZlcik7XG5cbiAgcmV0dXJuIGFwcC5saXN0ZW4oKTtcbn1cblxubWFpbigpLnRoZW4oKCkgPT4ge1xuICBjb25zb2xlLmxvZygnYm9va2luZy1zZXJ2aWNlIG1pY3Jvc2VydmljZSBpcyBydW5uaW5nJyk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==