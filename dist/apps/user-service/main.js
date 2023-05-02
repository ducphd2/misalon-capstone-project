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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUN0RCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL2NvbW1vbi9jb21tb24uZHRvLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL2FwaS1nYXRld2F5L3NyYy9kdG9zL2NvbW1vbi9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy91c2VyLXNlcnZpY2Uvc3JjL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvdXNlci1zZXJ2aWNlL3NyYy9kZXZpY2UvZGV2aWNlLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy91c2VyLXNlcnZpY2Uvc3JjL2RldmljZS9kZXZpY2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy91c2VyLXNlcnZpY2Uvc3JjL21lcmNoYW50LXVzZXIvbWVyY2hhbnQtdXNlci5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2FwcHMvdXNlci1zZXJ2aWNlL3NyYy9tZXJjaGFudC11c2VyL21lcmNoYW50LXVzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy91c2VyLXNlcnZpY2Uvc3JjL3VzZXIvdXNlci5jb250cm9sbGVyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9hcHBzL3VzZXItc2VydmljZS9zcmMvdXNlci91c2VyLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy91c2VyLXNlcnZpY2Uvc3JjL3VzZXIvdXNlci5zZXJ2aWNlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL2NvbnN0YW50cy9kYXRhYmFzZS5jb25zdGFudC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9jb25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvbWVzc2FnZS9hdXRoL2F1dGgubWVzc2FnZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL2F1dGgvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvbWVzc2FnZS9jb21tb24ubWVzc2FnZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL21lc3NhZ2UvbWVyY2hhbnQvYnJhbmNoLm1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvbWVzc2FnZS9tZXJjaGFudC9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy9tZXNzYWdlL21lcmNoYW50L21lcmNoYW50Lm1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvbWVzc2FnZS91c2VyL2N1c3RvbWVyLm1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvbWVzc2FnZS91c2VyL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL21lc3NhZ2UvdXNlci91c2VyLm1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvY29yZS9zcmMvdXRpbHMvZXJyb3IuaGVscGVyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2NvcmUvc3JjL3V0aWxzL2dlbmVyYWwudXRpbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy91dGlscy9wYXNzd29yZC51dGlscy50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy91dGlscy9xdWVyeS51dGlscy50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9jb3JlL3NyYy91dGlscy91dGlscy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2Nvbm5lY3Rpb24vYm9va2luZy50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvY29ubmVjdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvY29ubmVjdGlvbi9tZXJjaGFudC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvY29ubmVjdGlvbi91c2VyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9iYXNlLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9ib29raW5nL2Jvb2tpbmcubW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL2Jvb2tpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9tZXJjaGFudC9icmFuY2gubW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL21lcmNoYW50L2dyb3VwLm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9tZXJjaGFudC9pbWFnZS5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvbWVyY2hhbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL21lcmNoYW50L21lcmNoYW50Lm1vZGVsLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9lbnRpdGllcy9tZXJjaGFudC9zZXJ2ZS1pbWFnZS5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvbWVyY2hhbnQvc2VydmljZS5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvdXNlci9kZXZpY2UubW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL3VzZXIvbWVyY2hhbnQtdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvZW50aXRpZXMvdXNlci9ub3RpZmljYXRpb24ubW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL2VudGl0aWVzL3VzZXIvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9iYXNlLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9ib29raW5nL2Jvb2tpbmcucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL2Jvb2tpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL21lcmNoYW50L2JyYW5jaC5yZXBvc2l0b3J5LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvbWVyY2hhbnQvZ3JvdXAucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL21lcmNoYW50L2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvbWVyY2hhbnQvbWVyY2hhbnQucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL21lcmNoYW50L3NlcnZpY2UucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9kYXRhYmFzZS9zcmMvcmVwb3NpdG9yaWVzL3VzZXIvZGV2aWNlLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy91c2VyL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvdXNlci9tZXJjaGFudC11c2VyLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZGF0YWJhc2Uvc3JjL3JlcG9zaXRvcmllcy91c2VyL25vdGlmaWNhdGlvbi5yZXBvc2l0b3J5LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2RhdGFiYXNlL3NyYy9yZXBvc2l0b3JpZXMvdXNlci91c2VyLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZXhjZXB0aW9ucy9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZXhjZXB0aW9ucy9zcmMvbGliL2Vycm9yLWNvZGVzLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2V4Y2VwdGlvbnMvc3JjL2xpYi9leGNlcHRpb25zL2N1c3RvbS5leGNlcHRpb24udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZXhjZXB0aW9ucy9zcmMvbGliL2V4Y2VwdGlvbnMvZ2VuZXJhbC1zZXJ2ZXItZXJyb3IuZXhjZXB0aW9uLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2V4Y2VwdGlvbnMvc3JjL2xpYi9leGNlcHRpb25zL2luZGV4LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2V4Y2VwdGlvbnMvc3JjL2xpYi9leGNlcHRpb25zL2ludmFsaWQtY3JlZGVudGlhbHMuZXhjZXB0aW9uLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2V4Y2VwdGlvbnMvc3JjL2xpYi9leGNlcHRpb25zL3VzZXJuYW1lLWFscmVhZHktdGFrZW4uZXhjZXB0aW9uLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2ZpbHRlcnMvc3JjL2FsbC5leGNlcHRpb25zLmZpbHRlci50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9maWx0ZXJzL3NyYy9ncnBjLWFsbC5leGNlcHRpb25zLmZpbHRlci50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9maWx0ZXJzL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9jbGllbnRzLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MvYm9va2luZy50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MvYnJhbmNoLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL3Byb3Rvcy9jb21tb25zLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL3Byb3Rvcy9kZXZpY2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zL21lcmNoYW50LnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL3Byb3Rvcy9tZXJjaGFudF91c2VyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2dycGMtdHlwZXMvc3JjL3Byb3Rvcy9ub3RpZmljYXRpb24udHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zL3NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zL3VzZXIudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvZ3JwYy10eXBlcy9zcmMvc2VydmVycy50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vbGlicy9pbnRlcmNlcHRvcnMvc3JjL2dycGMtbG9nLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL2ludGVyY2VwdG9ycy9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvaW50ZXJjZXB0b3JzL3NyYy90cmFuc2Zvcm0uaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS8uL2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9hZGFwdGVyLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvbW9kdWxlLnRzIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvLi9saWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvc2VydmljZS50cyIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQGdycGMvZ3JwYy1qc1wiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvbW1vblwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvbmZpZ1wiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvcmVcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9taWNyb3NlcnZpY2VzXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvc2VxdWVsaXplXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcImFyZ29uMlwiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwicnhqc1wiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJyeGpzL29wZXJhdG9yc1wiIiwid2VicGFjazovL3NwYS1taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJzZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwic2VxdWVsaXplLXR5cGVzY3JpcHRcIiIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vc3BhLW1pY3Jvc2VydmljZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcGEtbWljcm9zZXJ2aWNlLy4vYXBwcy91c2VyLXNlcnZpY2Uvc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gRVNvcnREaXJlY3Rpb24ge1xuICBBU0MgPSAwLFxuICBERVNDID0gMSxcbn1cblxuZXhwb3J0IGVudW0gRVNlcnZpY2VTaG93VHlwZSB7XG4gIEJPVEggPSAwLFxuICBDQVNISUVSID0gMSxcbiAgQk9PS0lORyA9IDIsXG4gIE5PTkUgPSAzLFxufVxuXG5leHBvcnQgZW51bSBFU2VydmljZVR5cGUge1xuICBTRVJWSUNFID0gMCxcbiAgUFJPRFVDVCA9IDEsXG59XG5cbmV4cG9ydCBlbnVtIEVTZXJ2ZUltYWdlVHlwZSB7XG4gIE1FUkNIQU5UID0gMCxcbiAgQlJBTkNIID0gMSxcbiAgR1JPVVAgPSAyLFxuICBTRVJWSUNFID0gMyxcbn1cblxuZXhwb3J0IGVudW0gRUltYWdlVHlwZSB7XG4gIFBIT1RPID0gMCxcbiAgVklERU8gPSAxLFxufVxuXG5leHBvcnQgZW51bSBFRGV2aWNlT3Mge1xuICBBTkRST0lEID0gMCxcbiAgSU9TID0gMSxcbn1cblxuZXhwb3J0IGVudW0gRVVzZXJHZW5kZXIge1xuICBNQUxFID0gMCxcbiAgRkVNQUxFID0gMSxcbiAgT1RIRVIgPSAyLFxufVxuXG5leHBvcnQgZW51bSBFVXNlclJvbGUge1xuICBVU0VSID0gMCxcbiAgQURNSU4gPSAxLFxuICBTVVBFUl9BRE1JTiA9IDIsXG4gIE1BU1RFUl9XT1JLRVIgPSAzLFxuICBBU1NJU1RBTlRfV09SS0VSID0gNCxcbiAgTUFOQUdFUiA9IDUsXG4gIFJFQ0VQVElPTklTVCA9IDYsXG59XG5cbmV4cG9ydCBlbnVtIEVDdXN0b21lckxldmVsIHtcbiAgTk9STUFMID0gMCxcbiAgU0lMVkVSID0gMSxcbiAgR09MRCA9IDIsXG4gIFBMQVRJTlVNID0gMyxcbn1cblxuZXhwb3J0IGVudW0gRVVzZXJTdGF0dXMge1xuICBQRU5ESU5HID0gMCxcbiAgQUNUSVZFID0gMSxcbiAgQkFOTkVEID0gMixcbn1cblxuZXhwb3J0IGVudW0gRUJvb2tpbmdTdGF0dXMge1xuICBQRU5ESU5HID0gMCxcbiAgQVBQUk9WRSA9IDEsXG4gIENBTkNFTExFRCA9IDIsXG4gIFJFSkVDVCA9IDMsXG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbW1vbi5kdG8nO1xuIiwiaW1wb3J0IHsgVXNlckRhdGFiYXNlTW9kdWxlIH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvY29ubmVjdGlvbi91c2VyJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuaW1wb3J0IHsgRGV2aWNlTW9kdWxlIH0gZnJvbSAnLi9kZXZpY2UvZGV2aWNlLm1vZHVsZSc7XG5pbXBvcnQgeyBVc2VyTW9kdWxlIH0gZnJvbSAnLi91c2VyL3VzZXIubW9kdWxlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtVc2VyRGF0YWJhc2VNb2R1bGUsIFVzZXJNb2R1bGUsIERldmljZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgRGV2aWNlTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBEZXZpY2VSZXBvc2l0b3J5IH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvcmVwb3NpdG9yaWVzJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFNlcXVlbGl6ZU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcbmltcG9ydCB7IFNlY3JldHNNb2R1bGUgfSBmcm9tICdsaWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvbW9kdWxlJztcblxuaW1wb3J0IHsgRGV2aWNlU2VydmljZSB9IGZyb20gJy4vZGV2aWNlLnNlcnZpY2UnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1NlY3JldHNNb2R1bGUsIFNlcXVlbGl6ZU1vZHVsZS5mb3JGZWF0dXJlKFtEZXZpY2VNb2RlbF0pXSxcbiAgcHJvdmlkZXJzOiBbRGV2aWNlU2VydmljZSwgRGV2aWNlUmVwb3NpdG9yeV0sXG4gIGV4cG9ydHM6IFtEZXZpY2VTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGV2aWNlTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBEZXZpY2VNb2RlbCB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlL2VudGl0aWVzJztcbmltcG9ydCB7IERldmljZVJlcG9zaXRvcnkgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9yZXBvc2l0b3JpZXMnO1xuaW1wb3J0IHsgQ29tbW9uUHJvdG8sIERldmljZVByb3RvIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZXZpY2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkZXZpY2VSZXBvc2l0b3J5OiBEZXZpY2VSZXBvc2l0b3J5KSB7fVxuXG4gIGFzeW5jIGNyZWF0ZShkdG86IERldmljZVByb3RvLkNyZWF0ZURldmljZUlucHV0KTogUHJvbWlzZTxEZXZpY2VNb2RlbD4ge1xuICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IHRoaXMuZGV2aWNlUmVwb3NpdG9yeS5jcmVhdGUoZHRvKTtcbiAgICByZXR1cm4gZGV2aWNlO1xuICB9XG5cbiAgYXN5bmMgZmluZEJ5SWQoaWQ6IG51bWJlcik6IFByb21pc2U8RGV2aWNlTW9kZWw+IHtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCB0aGlzLmRldmljZVJlcG9zaXRvcnkuZmluZEJ5SWQoaWQpO1xuICAgIHJldHVybiBkZXZpY2U7XG4gIH1cblxuICBhc3luYyBmaW5kKHJlcXVlc3Q6IENvbW1vblByb3RvLlF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgYmFzZVdoZXJlUXVlcnkgPSAhaXNFbXB0eShyZXF1ZXN0LndoZXJlKSA/IEpTT04ucGFyc2UocmVxdWVzdC53aGVyZSkgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmRldmljZVJlcG9zaXRvcnkuZmluZEFuZFBhZ2luYXRlKHtcbiAgICAgIC4uLnJlcXVlc3QsXG4gICAgICB3aGVyZTogYmFzZVdoZXJlUXVlcnksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYXN5bmMgdXBzZXJ0RGV2aWNlKGR0bzogRGV2aWNlUHJvdG8uQ3JlYXRlRGV2aWNlSW5wdXQpOiBQcm9taXNlPERldmljZU1vZGVsPiB7XG4gICAgLy8gbGV0IGRldmljZSA9IGF3YWl0IHRoaXMuZGV2aWNlUmVwb3NpdG9yeS5maW5kT25lKHtcbiAgICAvLyAgIHVzZXJJZDogZHRvLnVzZXJJZCxcbiAgICAvLyAgIGRldmljZUlkOiBkdG8uZGV2aWNlSWQsXG4gICAgLy8gICBvczogZHRvLm9zLFxuICAgIC8vIH0pO1xuXG4gICAgLy8gaWYgKGlzRW1wdHkoZGV2aWNlKSkge1xuICAgIC8vICAgZGV2aWNlID0gYXdhaXQgdGhpcy5jcmVhdGUoZHRvKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgYXdhaXQgdGhpcy5kZXZpY2VSZXBvc2l0b3J5LnVwZGF0ZShkZXZpY2UuaWQsIHsgdG9rZW46IGR0by50b2tlbiB9KTtcbiAgICAvLyAgIGRldmljZSA9IGF3YWl0IHRoaXMuZmluZEJ5SWQoZGV2aWNlLmlkKTtcbiAgICAvLyB9XG5cbiAgICAvLyByZXR1cm4gZGV2aWNlO1xuICAgIHJldHVybjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTWVyY2hhbnRVc2VyTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBNZXJjaGFudFVzZXJSZXBvc2l0b3J5IH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvcmVwb3NpdG9yaWVzJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFNlcXVlbGl6ZU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcbmltcG9ydCB7IFNlY3JldHNNb2R1bGUgfSBmcm9tICdsaWJzL21vZHVsZXMvZ2xvYmFsL3NlY3JldHMvbW9kdWxlJztcblxuaW1wb3J0IHsgTWVyY2hhbnRVc2VyU2VydmljZSB9IGZyb20gJy4vbWVyY2hhbnQtdXNlci5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtTZWNyZXRzTW9kdWxlLCBTZXF1ZWxpemVNb2R1bGUuZm9yRmVhdHVyZShbTWVyY2hhbnRVc2VyTW9kZWxdKV0sXG4gIHByb3ZpZGVyczogW01lcmNoYW50VXNlclNlcnZpY2UsIE1lcmNoYW50VXNlclJlcG9zaXRvcnldLFxuICBleHBvcnRzOiBbTWVyY2hhbnRVc2VyU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1lcmNoYW50VXNlck1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTWVyY2hhbnRVc2VyTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBNZXJjaGFudFVzZXJSZXBvc2l0b3J5IH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvcmVwb3NpdG9yaWVzJztcbmltcG9ydCB7IE1lcmNoYW50VXNlclByb3RvIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVyY2hhbnRVc2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbWVyY2hhbnRVc2VyUmVwb3NpdG9yeTogTWVyY2hhbnRVc2VyUmVwb3NpdG9yeSkge31cblxuICBhc3luYyBjcmVhdGUoZHRvOiBNZXJjaGFudFVzZXJQcm90by5DcmVhdGVNZXJjaGFudFVzZXJJbnB1dCk6IFByb21pc2U8TWVyY2hhbnRVc2VyTW9kZWw+IHtcbiAgICBjb25zdCBtZXJjaGFudFVzZXIgPSBhd2FpdCB0aGlzLm1lcmNoYW50VXNlclJlcG9zaXRvcnkuY3JlYXRlKGR0byk7XG4gICAgcmV0dXJuIG1lcmNoYW50VXNlcjtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShpZDogbnVtYmVyLCBkdG86IE1lcmNoYW50VXNlclByb3RvLkNyZWF0ZU1lcmNoYW50VXNlcklucHV0KTogUHJvbWlzZTxNZXJjaGFudFVzZXJNb2RlbD4ge1xuICAgIC8vIGF3YWl0IHRoaXMubWVyY2hhbnRVc2VyUmVwb3NpdG9yeS51cGRhdGUoaWQsIGR0byk7XG4gICAgLy8gcmV0dXJuIGF3YWl0IHRoaXMubWVyY2hhbnRVc2VyUmVwb3NpdG9yeS5maW5kQnlJZChpZCk7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZXZpY2VNb2RlbCB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlL2VudGl0aWVzJztcbmltcG9ydCB7IENvbW1vblByb3RvLCBVc2VyUHJvdG8gfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzJztcbmltcG9ydCB7IENyZWF0ZURldmljZUlucHV0LCBEZXZpY2VzIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3MvZGV2aWNlJztcbmltcG9ydCB7IENyZWF0ZU1lcmNoYW50VXNlcklucHV0LCBNZXJjaGFudFVzZXIgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy9tZXJjaGFudF91c2VyJztcbmltcG9ydCB7IEdycGNMb2dJbnRlcmNlcHRvciB9IGZyb20gJ0BsaWJzL2ludGVyY2VwdG9ycyc7XG5pbXBvcnQgeyBDb250cm9sbGVyLCBVc2VGaWx0ZXJzLCBVc2VJbnRlcmNlcHRvcnMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBHcnBjQWxsRXhjZXB0aW9uc0ZpbHRlciB9IGZyb20gJ2ZpbHRlcnMvZmlsdGVycyc7XG5cbmltcG9ydCB7IERldmljZVNlcnZpY2UgfSBmcm9tICcuLi9kZXZpY2UvZGV2aWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVyY2hhbnRVc2VyU2VydmljZSB9IGZyb20gJy4uL21lcmNoYW50LXVzZXIvbWVyY2hhbnQtdXNlci5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XG5cbkBVc2VGaWx0ZXJzKEdycGNBbGxFeGNlcHRpb25zRmlsdGVyKVxuQFVzZUludGVyY2VwdG9ycyhHcnBjTG9nSW50ZXJjZXB0b3IpXG5AQ29udHJvbGxlcigpXG5AVXNlclByb3RvLlVzZXJTZXJ2aWNlQ29udHJvbGxlck1ldGhvZHMoKVxuZXhwb3J0IGNsYXNzIFVzZXJDb250cm9sbGVyIGltcGxlbWVudHMgVXNlclByb3RvLlVzZXJTZXJ2aWNlQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1lcmNoYW50VXNlclNlcnZpY2U6IE1lcmNoYW50VXNlclNlcnZpY2UsXG4gICkge31cblxuICBhc3luYyB1cGRhdGVDdXN0b21lcihyZXF1ZXN0OiBVc2VyUHJvdG8uQWRtaW5VcGRhdGVDdXN0b21lcklucHV0KTogUHJvbWlzZTxVc2VyUHJvdG8uRmluZE9uZVVzZXI+IHtcbiAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UudXBkYXRlKHsgaWQ6IHJlcXVlc3QuaWQsIGRhdGE6IHJlcXVlc3QudXNlciB9KTtcblxuICAgIC8vIFRPRE86IE5lZWQgdG8gaW1wbGVtZW50IHVwZGF0ZSBtZXJjaGFudF91c2VyXG4gICAgLy8gY29uc3QgdXBkYXRlZE1lcmNoYW50VXNlciA9IGF3YWl0IHRoaXMubWVyY2hhbnRVc2VyU2VydmljZS5jcmVhdGUoKTtcblxuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiB1cGRhdGVkVXNlcixcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgYWRkQ3VzdG9tZXIocmVxdWVzdDogVXNlclByb3RvLkFkZE9wZXJhdG9ySW5wdXQpOiBQcm9taXNlPFVzZXJQcm90by5GaW5kT25lVXNlcj4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmNyZWF0ZShyZXF1ZXN0KTtcbiAgICBhd2FpdCB0aGlzLm1lcmNoYW50VXNlclNlcnZpY2UuY3JlYXRlKHsgLi4ucmVxdWVzdC5tZXJjaGFudFVzZXIsIHVzZXJJZDogdXNlci5pZCB9KTtcblxuICAgIHJldHVybiB7IHVzZXIgfTtcbiAgfVxuICBhc3luYyBjb3VudEN1c3RvbWVyKHJlcXVlc3Q6IENvbW1vblByb3RvLlF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8Q29tbW9uUHJvdG8uQ291bnQ+IHtcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuY291bnRDdXN0b21lcihyZXF1ZXN0KTtcbiAgICByZXR1cm4geyBjb3VudCB9O1xuICB9XG5cbiAgYXN5bmMgYWRkT3BlcmF0b3IocmVxdWVzdDogVXNlclByb3RvLkFkZE9wZXJhdG9ySW5wdXQpOiBQcm9taXNlPFVzZXJQcm90by5GaW5kT25lVXNlcj4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmNyZWF0ZShyZXF1ZXN0KTtcbiAgICBhd2FpdCB0aGlzLm1lcmNoYW50VXNlclNlcnZpY2UuY3JlYXRlKHsgLi4ucmVxdWVzdC5tZXJjaGFudFVzZXIsIHVzZXJJZDogdXNlci5pZCB9KTtcblxuICAgIHJldHVybiB7IHVzZXIgfTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZU1lcmNoYW50VXNlcihyZXF1ZXN0OiBDcmVhdGVNZXJjaGFudFVzZXJJbnB1dCk6IFByb21pc2U8TWVyY2hhbnRVc2VyPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubWVyY2hhbnRVc2VyU2VydmljZS5jcmVhdGUocmVxdWVzdCk7XG4gIH1cblxuICBhc3luYyB1cHNlcnREZXZpY2UocmVxdWVzdDogQ3JlYXRlRGV2aWNlSW5wdXQpOiBQcm9taXNlPERldmljZU1vZGVsPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZGV2aWNlU2VydmljZS51cHNlcnREZXZpY2UocmVxdWVzdCk7XG4gIH1cblxuICBjcmVhdGVEZXZpY2UocmVxdWVzdDogQ3JlYXRlRGV2aWNlSW5wdXQpOiBQcm9taXNlPERldmljZU1vZGVsPiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgYXN5bmMgZmluZERldmljZXMocmVxdWVzdDogQ29tbW9uUHJvdG8uUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxEZXZpY2VzPiB7XG4gICAgY29uc3QgZGV2aWNlcyA9IGF3YWl0IHRoaXMuZGV2aWNlU2VydmljZS5maW5kKHJlcXVlc3QpO1xuICAgIHJldHVybiBkZXZpY2VzO1xuICB9XG5cbiAgYXN5bmMgZmluZChyZXF1ZXN0OiBDb21tb25Qcm90by5RdWVyeVJlcXVlc3QpOiBQcm9taXNlPFVzZXJQcm90by5Vc2VyUGFnaW5hdGlvbj4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZmluZFdpdGhQYWdpbmcocmVxdWVzdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGFzeW5jIGNvdW50KHJlcXVlc3Q6IENvbW1vblByb3RvLlF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8Q29tbW9uUHJvdG8uQ291bnQ+IHtcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuY291bnQocmVxdWVzdCk7XG4gICAgcmV0dXJuIHsgY291bnQgfTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShyZXF1ZXN0OiBVc2VyUHJvdG8uVXBkYXRlVXNlcklucHV0KTogUHJvbWlzZTxVc2VyUHJvdG8uRmluZE9uZVVzZXI+IHtcbiAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UudXBkYXRlKHJlcXVlc3QpO1xuXG4gICAgcmV0dXJuIHsgdXNlcjogdXBkYXRlZFVzZXIgfTtcbiAgfVxuXG4gIGRlbGV0ZUN1c3RvbWVyKHJlcXVlc3Q6IENvbW1vblByb3RvLklkKTogUHJvbWlzZTxDb21tb25Qcm90by5Db3VudD4ge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZShkYXRhOiBVc2VyUHJvdG8uQ3JlYXRlVXNlclJlcXVlc3QpOiBQcm9taXNlPFVzZXJQcm90by5GaW5kT25lVXNlcj4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmNyZWF0ZShkYXRhKTtcbiAgICByZXR1cm4geyB1c2VyIH07XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZCh7IGlkIH06IENvbW1vblByb3RvLklkKTogUHJvbWlzZTxVc2VyUHJvdG8uRmluZE9uZVVzZXI+IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5maW5kQnlJZChpZCk7XG4gICAgcmV0dXJuIHsgdXNlciB9O1xuICB9XG5cbiAgYXN5bmMgZmluZE9uZShyZXF1ZXN0OiBDb21tb25Qcm90by5RdWVyeVJlcXVlc3QpOiBQcm9taXNlPFVzZXJQcm90by5GaW5kT25lVXNlcj4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmZpbmRPbmUocmVxdWVzdCk7XG4gICAgcmV0dXJuIHsgdXNlciB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBVc2VyUmVwb3NpdG9yeSB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlL3JlcG9zaXRvcmllcyc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBTZXF1ZWxpemVNb2R1bGUgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBTZWNyZXRzTW9kdWxlIH0gZnJvbSAnbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL21vZHVsZSc7XG5cbmltcG9ydCB7IERldmljZU1vZHVsZSB9IGZyb20gJy4uL2RldmljZS9kZXZpY2UubW9kdWxlJztcbmltcG9ydCB7IE1lcmNoYW50VXNlck1vZHVsZSB9IGZyb20gJy4uL21lcmNoYW50LXVzZXIvbWVyY2hhbnQtdXNlci5tb2R1bGUnO1xuXG5pbXBvcnQgeyBVc2VyQ29udHJvbGxlciB9IGZyb20gJy4vdXNlci5jb250cm9sbGVyJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1NlY3JldHNNb2R1bGUsIFNlcXVlbGl6ZU1vZHVsZS5mb3JGZWF0dXJlKFtVc2VyTW9kZWxdKSwgRGV2aWNlTW9kdWxlLCBNZXJjaGFudFVzZXJNb2R1bGVdLFxuICBjb250cm9sbGVyczogW1VzZXJDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIFVzZXJSZXBvc2l0b3J5XSxcbiAgZXhwb3J0czogW1VzZXJTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgVXNlck1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvZW50aXRpZXMnO1xuaW1wb3J0IHsgVXNlclJlcG9zaXRvcnkgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9yZXBvc2l0b3JpZXMnO1xuaW1wb3J0IHsgQ29tbW9uUHJvdG8sIFVzZXJQcm90byB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEZpbmRPcHRpb25zLCBTZXF1ZWxpemUsIFdoZXJlT3B0aW9ucyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHF1ZXJ5IH0gZnJvbSAnZXhwcmVzcyc7XG5cbmltcG9ydCB7IERldmljZVNlcnZpY2UgfSBmcm9tICcuLi9kZXZpY2UvZGV2aWNlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHVzZXJSZXBvc2l0b3J5OiBVc2VyUmVwb3NpdG9yeSwgcHJpdmF0ZSByZWFkb25seSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlKSB7fVxuXG4gIGFzeW5jIGNyZWF0ZShkdG86IFVzZXJQcm90by5DcmVhdGVVc2VyUmVxdWVzdCk6IFByb21pc2U8VXNlck1vZGVsPiB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMudXNlclJlcG9zaXRvcnkuY3JlYXRlKGR0by51c2VyKTtcbiAgICBjb25zdCBkZXZpY2UgPSBhd2FpdCB0aGlzLmRldmljZVNlcnZpY2UuY3JlYXRlKHsgLi4uZHRvLmRldmljZSwgdXNlcklkOiB1c2VyLmlkIH0pO1xuXG4gICAgcmV0dXJuIHVzZXI7XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZChpZDogbnVtYmVyKTogUHJvbWlzZTxVc2VyTW9kZWw+IHtcbiAgICBjb25zdCByZXN1bHQ6IFVzZXJNb2RlbCA9IGF3YWl0IHRoaXMudXNlclJlcG9zaXRvcnkuZmluZEJ5SWQoaWQsIHtcbiAgICAgIHJhdzogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBhc3luYyBmaW5kT25lKGR0bzogQ29tbW9uUHJvdG8uUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxVc2VyTW9kZWw+IHtcbiAgICBjb25zdCB3aGVyZSA9ICFpc0VtcHR5KGR0by53aGVyZSkgPyBKU09OLnBhcnNlKGR0by53aGVyZSkgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCByZXN1bHQ6IFVzZXJNb2RlbCA9IGF3YWl0IHRoaXMudXNlclJlcG9zaXRvcnkuZmluZE9uZSh7XG4gICAgICAuLi5kdG8sXG4gICAgICB3aGVyZSxcbiAgICAgIHJhdzogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBhc3luYyBjb3VudChxdWVyeTogQ29tbW9uUHJvdG8uUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBhc3luYyB1cGRhdGUocmVxdWVzdDogVXNlclByb3RvLlVwZGF0ZVVzZXJJbnB1dCk6IFByb21pc2U8VXNlck1vZGVsPiB7XG4gICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LnVwZGF0ZShyZXF1ZXN0LmRhdGEsIHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiByZXF1ZXN0LmlkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gdXBkYXRlZFVzZXJbMF07XG4gIH1cblxuICBhc3luYyBjb3VudEN1c3RvbWVyKHJlcXVlc3Q6IENvbW1vblByb3RvLlF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYXN5bmMgZmluZFdpdGhQYWdpbmcocXVlcnk6IENvbW1vblByb3RvLlF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgYmFzZVdoZXJlID0gIWlzRW1wdHkocXVlcnkud2hlcmUpID8gSlNPTi5wYXJzZShxdWVyeS53aGVyZSkgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRBbmRQYWdpbmF0ZShcbiAgICAgIHtcbiAgICAgICAgLi4ucXVlcnksXG4gICAgICAgIHdoZXJlOiBiYXNlV2hlcmUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBvcmRlcjogW1txdWVyeS5vcmRlckJ5LCBxdWVyeS5vcmRlckRpcmVjdGlvbl1dLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgT3AsIE9wZXJhdG9yc0FsaWFzZXMgfSBmcm9tICdzZXF1ZWxpemUnO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JzQWxpYXNlczogT3BlcmF0b3JzQWxpYXNlcyA9IHtcbiAgX2FuZDogT3AuYW5kLFxuICBfb3I6IE9wLm9yLFxuICBfZXE6IE9wLmVxLFxuICBfbmU6IE9wLm5lLFxuICBfaXM6IE9wLmlzLFxuICBfbm90OiBPcC5ub3QsXG4gIF9jb2w6IE9wLmNvbCxcbiAgX2d0OiBPcC5ndCxcbiAgX2d0ZTogT3AuZ3RlLFxuICBfbHQ6IE9wLmx0LFxuICBfbHRlOiBPcC5sdGUsXG4gIF9iZXR3ZWVuOiBPcC5iZXR3ZWVuLFxuICBfbm90QmV0d2VlbjogT3Aubm90QmV0d2VlbixcbiAgX2FsbDogT3AuYWxsLFxuICBfaW46IE9wLmluLFxuICBfbm90SW46IE9wLm5vdEluLFxuICBfbGlrZTogT3AubGlrZSxcbiAgX25vdExpa2U6IE9wLm5vdExpa2UsXG4gIF9zdGFydHNXaXRoOiBPcC5zdGFydHNXaXRoLFxuICBfZW5kc1dpdGg6IE9wLmVuZHNXaXRoLFxuICBfc3Vic3RyaW5nOiBPcC5zdWJzdHJpbmcsXG4gIF9pTGlrZTogT3AuaUxpa2UsXG4gIF9ub3RJTGlrZTogT3Aubm90SUxpa2UsXG4gIF9yZWdleHA6IE9wLnJlZ2V4cCxcbiAgX25vdFJlZ2V4cDogT3Aubm90UmVnZXhwLFxuICBfaVJlZ2V4cDogT3AuaVJlZ2V4cCxcbiAgX25vdElSZWdleHA6IE9wLm5vdElSZWdleHAsXG4gIF9hbnk6IE9wLmFueSxcbiAgX2NvbnRhaW5zOiBPcC5jb250YWlucyxcbiAgX2NvbnRhaW5lZDogT3AuY29udGFpbmVkLFxuICBfb3ZlcmxhcDogT3Aub3ZlcmxhcCxcbiAgX2FkamFjZW50OiBPcC5hZGphY2VudCxcbiAgX3N0cmljdExlZnQ6IE9wLnN0cmljdExlZnQsXG4gIF9zdHJpY3RSaWdodDogT3Auc3RyaWN0UmlnaHQsXG4gIF9ub0V4dGVuZFJpZ2h0OiBPcC5ub0V4dGVuZFJpZ2h0LFxuICBfbm9FeHRlbmRMZWZ0OiBPcC5ub0V4dGVuZExlZnQsXG4gIF92YWx1ZXM6IE9wLnZhbHVlcyxcbn07XG5cbmV4cG9ydCBjb25zdCBMSU1JVCA9IDEwO1xuXG5leHBvcnQgY29uc3QgUEFHRSA9IDE7XG4iLCJleHBvcnQgKiBmcm9tICcuL2RhdGFiYXNlLmNvbnN0YW50JztcbiIsImV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgKiBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnZSc7XG4iLCJleHBvcnQgY29uc3QgQVVUSF9NRVNTQUdFID0ge1xuICBMT0dJTjoge1xuICAgIElOVkFMSUQ6ICdJbnZhbGlkIGNyZWRlbnRpYWxzLicsXG4gIH0sXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9hdXRoLm1lc3NhZ2UnO1xuIiwiZXhwb3J0IGNvbnN0IENPTU1PTl9NRVNTQUdFID0ge1xuICBJTlZBTElEOiAnSW52YWxpZCByZXF1ZXN0JyxcbiAgQ1JFQVRFOiB7XG4gICAgRVhJU1RfRU1BSUw6ICdUaGUgZW1haWwgaXMgZXhpc3QnLFxuICB9LFxuICBSRUFEOiB7XG4gICAgTk9UX0ZPVU5EOiAnVGhlIG1lcmNoYW50IG5vdCBmb3VuZCcsXG4gIH0sXG4gIFVQREFURToge1xuICAgIEZBSUw6ICdDYW4gbm90IHVwZGF0ZSBtZXJjaGFudCcsXG4gIH0sXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyJztcblxuZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vYXV0aCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uLm1lc3NhZ2UnO1xuIiwiZXhwb3J0IGNvbnN0IEJSQU5DSF9NRVNTQUdFID0ge1xuICBSRUFEOiB7XG4gICAgTk9UX0ZPVU5EOiAnVGhlIGJyYW5jaCBub3QgZm91bmQnLFxuICB9LFxuICBDUkVBVEU6IHtcbiAgICBFWElTVEVEOiAnVGhlIGJyYW5jaCBpcyBleGlzdCcsXG4gIH0sXG4gIFVQREFURToge1xuICAgIEZBSUw6ICdDYW4gbm90IHVwZGF0ZSB1c2VyJyxcbiAgICBJTlZBTElEX1BBU1NXT1JEOiAnRXJyb3IgdXBkYXRpbmcgcGFzc3dvcmQuIEtpbmRseSBjaGVjayB5b3VyIHBhc3N3b3JkcycsXG4gIH0sXG4gIERFTEVURToge1xuICAgIEZBSUw6ICdEZWxldGUgYnJhbmNoIGZhaWxlZCcsXG4gICAgU1VDQ0VTUzogJ0RlbGV0ZSBicmFuY2ggc3VjY2Vzc2Z1bGx5JyxcbiAgfSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL21lcmNoYW50Lm1lc3NhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9icmFuY2gubWVzc2FnZSc7XG4iLCJleHBvcnQgY29uc3QgTUVSQ0hBTlRfTUVTU0FHRSA9IHtcbiAgQ1JFQVRFOiB7XG4gICAgRVhJU1RfRU1BSUw6ICdUaGUgZW1haWwgaXMgZXhpc3QnLFxuICB9LFxuICBSRUFEOiB7XG4gICAgTk9UX0ZPVU5EOiAnVGhlIG1lcmNoYW50IG5vdCBmb3VuZCcsXG4gIH0sXG4gIFVQREFURToge1xuICAgIEZBSUw6ICdDYW4gbm90IHVwZGF0ZSBtZXJjaGFudCcsXG4gIH0sXG59O1xuIiwiZXhwb3J0IGNvbnN0IENVU1RPTUVSX01FU1NBR0UgPSB7XG4gIENSRUFURToge1xuICAgIEVYSVNUX0VNQUlMOiAnVGhlIGVtYWlsIGlzIGV4aXN0JyxcbiAgICBTVUNDRVNTRlVMOiAnQ3JlYXRlIGN1c3RvbWVyIHN1Y2Nlc3NmdWxseScsXG4gIH0sXG4gIFVQREFURToge1xuICAgIEZBSUw6ICdDYW4gbm90IHVwZGF0ZSBjdXN0b21lcicsXG4gICAgSU5WQUxJRF9QQVNTV09SRDogJ0Vycm9yIHVwZGF0aW5nIHBhc3N3b3JkLiBLaW5kbHkgY2hlY2sgeW91ciBwYXNzd29yZHMnLFxuICB9LFxuICBSRUFEOiB7XG4gICAgTk9UX0ZPVU5EOiAnVGhlIGN1c3RvbWVyIG5vdCBmb3VuZCcsXG4gIH0sXG4gIERFTEVURToge1xuICAgIEZBSUw6ICdDYW4gbm90IHJlbW92ZSB0aGUgY3VzdG9tZXInLFxuICB9LFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdXNlci5tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vY3VzdG9tZXIubWVzc2FnZSc7XG4iLCJleHBvcnQgY29uc3QgVVNFUl9NRVNTQUdFID0ge1xuICBDUkVBVEU6IHtcbiAgICBFWElTVF9FTUFJTDogJ1RoZSBlbWFpbCBpcyBleGlzdCcsXG4gIH0sXG4gIFJFQUQ6IHtcbiAgICBOT1RfRk9VTkQ6ICdUaGUgdXNlciBub3QgZm91bmQnLFxuICB9LFxuICBVUERBVEU6IHtcbiAgICBGQUlMOiAnQ2FuIG5vdCB1cGRhdGUgdXNlcicsXG4gICAgSU5WQUxJRF9QQVNTV09SRDogJ0Vycm9yIHVwZGF0aW5nIHBhc3N3b3JkLiBLaW5kbHkgY2hlY2sgeW91ciBwYXNzd29yZHMnLFxuICB9LFxufTtcbiIsImltcG9ydCB7IEh0dHBFeGNlcHRpb24sIEh0dHBTdGF0dXMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBScGNFeGNlcHRpb24gfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuXG5leHBvcnQgY2xhc3MgRXJyb3JIZWxwZXIge1xuICBzdGF0aWMgQmFkUmVxdWVzdEV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgUnBjRXhjZXB0aW9uKHtcbiAgICAgIGNvZGU6IEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICBtZXNzYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIEh0dHBCYWRSZXF1ZXN0RXhjZXB0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKG1lc3NhZ2UsIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpO1xuICB9XG5cbiAgc3RhdGljIFVuYXV0aG9yaXplZEV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgUnBjRXhjZXB0aW9uKHtcbiAgICAgIGNvZGU6IEh0dHBTdGF0dXMuVU5BVVRIT1JJWkVELFxuICAgICAgbWVzc2FnZSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBIdHRwVW5hdXRob3JpemVkRXhjZXB0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKG1lc3NhZ2UsIEh0dHBTdGF0dXMuVU5BVVRIT1JJWkVEKTtcbiAgfVxuXG4gIHN0YXRpYyBOb3RGb3VuZEV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgUnBjRXhjZXB0aW9uKHtcbiAgICAgIGNvZGU6IEh0dHBTdGF0dXMuTk9UX0ZPVU5ELFxuICAgICAgbWVzc2FnZSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBIdHRwTm90Rm91bmRFeGNlcHRpb24obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24obWVzc2FnZSwgSHR0cFN0YXR1cy5OT1RfRk9VTkQpO1xuICB9XG5cbiAgc3RhdGljIEZvcmJpZGRlbkV4Y2VwdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgUnBjRXhjZXB0aW9uKHtcbiAgICAgIGNvZGU6IEh0dHBTdGF0dXMuRk9SQklEREVOLFxuICAgICAgbWVzc2FnZSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBIdHRwRm9yYmlkZGVuRXhjZXB0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKG1lc3NhZ2UsIEh0dHBTdGF0dXMuRk9SQklEREVOKTtcbiAgfVxuXG4gIHN0YXRpYyBJbnRlcm5hbFNlcnZlckVycm9yRXhjZXB0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRocm93IG5ldyBScGNFeGNlcHRpb24oe1xuICAgICAgY29kZTogSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICBtZXNzYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIEh0dHBJbnRlcm5hbFNlcnZlckVycm9yRXhjZXB0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKG1lc3NhZ2UsIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IG51bWJlcklucHV0cyA9IChcbiAgaW5wdXQ6IG9iamVjdCA9IHt9LFxuKToge1xuICBba2V5OiBzdHJpbmddOiBudW1iZXI7XG59ID0+XG4gIE9iamVjdC5rZXlzKGlucHV0KS5yZWR1Y2UoKGFjYzogdW5rbm93biwgdmFsOiBzdHJpbmcpID0+IHtcbiAgICBhY2NbdmFsXSA9ICtpbnB1dFt2YWxdIGFzIG51bWJlcjtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9BfMOBfMOAfMODfOG6oHzDgnzhuqR84bqmfOG6qnzhuqx8xIJ84bqufOG6sHzhurR84bq2L2csICdBJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC/DoHzDoXzhuqF84bqjfMOjfMOifOG6p3zhuqV84bqtfOG6qXzhuqt8xIN84bqxfOG6r3zhurd84bqzfOG6tS9nLCAnYScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvRXzDiXzDiHzhurx84bq4fMOKfOG6vnzhu4B84buEfOG7hi8sICdFJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC/DqHzDqXzhurl84bq7fOG6vXzDqnzhu4F84bq/fOG7h3zhu4N84buFL2csICdlJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9JfMONfMOMfMSofOG7ii9nLCAnSScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvw6x8w6184buLfOG7iXzEqS9nLCAnaScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvT3zDk3zDknzDlXzhu4x8w5R84buQfOG7knzhu5Z84buYfMagfOG7mnzhu5x84bugfOG7oi9nLCAnTycpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvw7J8w7N84buNfOG7j3zDtXzDtHzhu5N84buRfOG7mXzhu5V84buXfMahfOG7nXzhu5t84bujfOG7n3zhu6EvZywgJ28nKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL1V8w5p8w5l8xah84bukfMavfOG7qHzhu6p84buufOG7sC9nLCAnVScpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvw7l8w7p84bulfOG7p3zFqXzGsHzhu6t84bupfOG7sXzhu6184buvL2csICd1Jyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9ZfMOdfOG7snzhu7h84bu0L2csICdZJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC/hu7N8w7184bu1fOG7t3zhu7kvZywgJ3knKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL8SQL2csICdEJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC/EkS9nLCAnZCcpO1xuICAvLyBTb21lIHN5c3RlbSBlbmNvZGUgdmlldG5hbWVzZSBjb21iaW5pbmcgYWNjZW50IGFzIGluZGl2aWR1YWwgdXRmLTggY2hhcmFjdGVyc1xuICBzdHIgPSBzdHIucmVwbGFjZSgvXFx1MDMwMHxcXHUwMzAxfFxcdTAzMDN8XFx1MDMwOXxcXHUwMzIzL2csICcnKTsgLy8gSHV54buBbiBz4bqvYyBo4buPaSBuZ8OjIG7hurduZ1xuICBzdHIgPSBzdHIucmVwbGFjZSgvXFx1MDJDNnxcXHUwMzA2fFxcdTAzMUIvZywgJycpOyAvLyDDgiwgw4osIMSCLCDGoCwgxq9cbiAgcmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFByb3BlcnR5KGNsYXNzTmFtZSA9ICdmaWVsZHMnLCBkZWZhdWx0VmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQpOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gIHJldHVybiAodGFyZ2V0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwgbmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXRbbmFtZV0gPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShjbGFzc05hbWUsIHRydWUsIHRhcmdldCwgbmFtZSk7XG4gIH07XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkLnV0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vcXVlcnkudXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscy5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9nZW5lcmFsLnV0aWwnO1xuZXhwb3J0ICogZnJvbSAnLi9lcnJvci5oZWxwZXInO1xuIiwiaW1wb3J0IHsgaGFzaCwgdmVyaWZ5IH0gZnJvbSAnYXJnb24yJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkVXRpbHMge1xuICBhc3luYyBjb21wYXJlKHBhc3N3b3JkOiBzdHJpbmcsIGhhc2g6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB2ZXJpZnkoaGFzaCwgcGFzc3dvcmQpO1xuICB9XG5cbiAgYXN5bmMgaGFzaChwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBpZiAoaXNFbXB0eShwYXNzd29yZCkgfHwgcGFzc3dvcmQubGVuZ3RoIDwgNikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycy4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzaChwYXNzd29yZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IElRdWVyeSB9IGZyb20gJ0BsaWJzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IGlzRW1wdHksIGlzTmlsLCBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBRdWVyeVV0aWxzIHtcbiAgYXN5bmMgZ2V0RmlsdGVycyhmaWx0ZXJCeTogUmVjb3JkPHN0cmluZywgYW55Pik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgYW55Pj4ge1xuICAgIGNvbnN0IHF1ZXJ5RmlsdGVycyA9IHsgd2hlcmU6IHt9IH07XG5cbiAgICBpZiAoIWlzRW1wdHkoZmlsdGVyQnkpKSBPYmplY3QuYXNzaWduKHF1ZXJ5RmlsdGVycy53aGVyZSwgZmlsdGVyQnkpO1xuXG4gICAgcmV0dXJuIHF1ZXJ5RmlsdGVycztcbiAgfVxuXG4gIGFzeW5jIGdldE9yZGVyKG9yZGVyQnk6IHN0cmluZyk6IFByb21pc2U8SVF1ZXJ5PiB7XG4gICAgY29uc3QgcXVlcnlPcmRlcjogSVF1ZXJ5ID0ge307XG5cbiAgICBpZiAoIWlzRW1wdHkob3JkZXJCeSkpIHtcbiAgICAgIGlmIChvcmRlckJ5LnRyaW0oKS5jaGFyQXQoMCkgPT09ICctJykge1xuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5T3JkZXIsIHsgb3JkZXJCeTogW29yZGVyQnkudHJpbSgpLnN1YnN0cigxKSwgJ0RFU0MnXSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnlPcmRlciwgeyBvcmRlckJ5OiBbb3JkZXJCeS50cmltKCksICdBU0MnXSB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnlPcmRlcjtcbiAgfVxuXG4gIGFzeW5jIGdldEN1cnNvcihmaXJzdDogbnVtYmVyLCBsYXN0OiBudW1iZXIsIGJlZm9yZTogc3RyaW5nLCBhZnRlcjogc3RyaW5nKTogUHJvbWlzZTxJUXVlcnk+IHtcbiAgICBjb25zdCBxdWVyeUN1cnNvcjogSVF1ZXJ5ID0ge307XG5cbiAgICBpZiAoIWlzTmlsKGZpcnN0KSkgT2JqZWN0LmFzc2lnbihxdWVyeUN1cnNvciwgeyBsaW1pdDogZmlyc3QgfSk7XG5cbiAgICBpZiAoIWlzRW1wdHkoYWZ0ZXIpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5Q3Vyc29yLCB7IGFmdGVyLCBsaW1pdDogZmlyc3QgfSk7XG4gICAgfSBlbHNlIGlmICghaXNFbXB0eShiZWZvcmUpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5Q3Vyc29yLCB7IGJlZm9yZSwgbGltaXQ6IGxhc3QgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5Q3Vyc29yO1xuICB9XG5cbiAgYXN5bmMgYnVpbGRRdWVyeShvcmRlckJ5OiBzdHJpbmcsIGZpcnN0OiBudW1iZXIsIGxhc3Q6IG51bWJlciwgYmVmb3JlOiBzdHJpbmcsIGFmdGVyOiBzdHJpbmcpOiBQcm9taXNlPElRdWVyeT4ge1xuICAgIHJldHVybiBtZXJnZSh7fSwgYXdhaXQgdGhpcy5nZXRPcmRlcihvcmRlckJ5KSwgYXdhaXQgdGhpcy5nZXRDdXJzb3IoZmlyc3QsIGxhc3QsIGJlZm9yZSwgYWZ0ZXIpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5pbXBvcnQgeyBRdWVyeVV0aWxzIH0gZnJvbSAnLi9xdWVyeS51dGlscyc7XG5pbXBvcnQgeyBQYXNzd29yZFV0aWxzIH0gZnJvbSAnLi9wYXNzd29yZC51dGlscyc7XG5cbkBNb2R1bGUoe1xuICBleHBvcnRzOiBbUXVlcnlVdGlscywgUGFzc3dvcmRVdGlsc10sXG4gIHByb3ZpZGVyczogW1F1ZXJ5VXRpbHMsIFBhc3N3b3JkVXRpbHNdLFxufSlcbmV4cG9ydCBjbGFzcyBVdGlsc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgb3BlcmF0b3JzQWxpYXNlcyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuaW1wb3J0IHsgQm9va2luZ01vZGVsIH0gZnJvbSAnQGxpYnMvZGF0YWJhc2UvZW50aXRpZXMvYm9va2luZyc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBTZXF1ZWxpemVNb2R1bGUsIFNlcXVlbGl6ZU1vZHVsZU9wdGlvbnMgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlIH0gZnJvbSAnbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL2FkYXB0ZXInO1xuaW1wb3J0IHsgU2VjcmV0c01vZHVsZSB9IGZyb20gJ2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9tb2R1bGUnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNlcXVlbGl6ZU1vZHVsZS5mb3JSb290QXN5bmMoe1xuICAgICAgaW1wb3J0czogW1NlY3JldHNNb2R1bGVdLFxuICAgICAgdXNlRmFjdG9yeTogYXN5bmMgKHNlY3JldHM6IEFic3RyYWN0U2VjcmV0c1NlcnZpY2UpOiBQcm9taXNlPFNlcXVlbGl6ZU1vZHVsZU9wdGlvbnM+ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkaWFsZWN0OiAncG9zdGdyZXMnLFxuICAgICAgICAgIC4uLnNlY3JldHMuYm9va2luZ1NlcnZpY2VEYXRhYmFzZSxcbiAgICAgICAgICBsb2dnaW5nOiBmYWxzZSxcbiAgICAgICAgICB0eXBlVmFsaWRhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBvcGVyYXRvcnNBbGlhc2VzOiBvcGVyYXRvcnNBbGlhc2VzLFxuICAgICAgICAgIG1vZGVsczogW0Jvb2tpbmdNb2RlbF0sXG4gICAgICAgICAgYXV0b0xvYWRNb2RlbHM6IHRydWUsXG4gICAgICAgICAgc3luY2hyb25pemU6IHRydWUsXG4gICAgICAgICAgc3luYzoge1xuICAgICAgICAgICAgZm9yY2U6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgcmF3OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVmaW5lOiB7XG4gICAgICAgICAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICAgICAgICAgICAgdW5kZXJzY29yZWQ6IHRydWUsXG4gICAgICAgICAgICB2ZXJzaW9uOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGlhbGVjdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNoYXJzZXQ6ICd1dGY4JyxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGluamVjdDogW0Fic3RyYWN0U2VjcmV0c1NlcnZpY2VdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBCb29raW5nRGF0YWJhc2VNb2R1bGUge31cbiIsImV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5cbmV4cG9ydCAqIGZyb20gJy4vbWVyY2hhbnQnO1xuXG5leHBvcnQgKiBmcm9tICcuL2Jvb2tpbmcnO1xuIiwiaW1wb3J0IHsgb3BlcmF0b3JzQWxpYXNlcyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuaW1wb3J0IHtcbiAgQnJhbmNoTW9kZWwsXG4gIEdyb3VwTW9kZWwsXG4gIEltYWdlTW9kZWwsXG4gIE1lcmNoYW50TW9kZWwsXG4gIFNlcnZlSW1hZ2VNb2RlbCxcbiAgU2VydmljZU1vZGVsLFxufSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBTZXF1ZWxpemVNb2R1bGUsIFNlcXVlbGl6ZU1vZHVsZU9wdGlvbnMgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlIH0gZnJvbSAnbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL2FkYXB0ZXInO1xuaW1wb3J0IHsgU2VjcmV0c01vZHVsZSB9IGZyb20gJ2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9tb2R1bGUnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNlcXVlbGl6ZU1vZHVsZS5mb3JSb290QXN5bmMoe1xuICAgICAgaW1wb3J0czogW1NlY3JldHNNb2R1bGVdLFxuICAgICAgdXNlRmFjdG9yeTogYXN5bmMgKHNlY3JldHM6IEFic3RyYWN0U2VjcmV0c1NlcnZpY2UpOiBQcm9taXNlPFNlcXVlbGl6ZU1vZHVsZU9wdGlvbnM+ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkaWFsZWN0OiAncG9zdGdyZXMnLFxuICAgICAgICAgIC4uLnNlY3JldHMubWVyY2hhbnRTZXJ2aWNlRGF0YWJhc2UsXG4gICAgICAgICAgbG9nZ2luZzogZmFsc2UsXG4gICAgICAgICAgdHlwZVZhbGlkYXRpb246IHRydWUsXG4gICAgICAgICAgb3BlcmF0b3JzQWxpYXNlczogb3BlcmF0b3JzQWxpYXNlcyxcbiAgICAgICAgICBtb2RlbHM6IFtNZXJjaGFudE1vZGVsLCBCcmFuY2hNb2RlbCwgR3JvdXBNb2RlbCwgU2VydmljZU1vZGVsLCBJbWFnZU1vZGVsLCBTZXJ2ZUltYWdlTW9kZWxdLFxuICAgICAgICAgIGF1dG9Mb2FkTW9kZWxzOiB0cnVlLFxuICAgICAgICAgIHN5bmNocm9uaXplOiB0cnVlLFxuICAgICAgICAgIC8vIHN5bmM6IHtcbiAgICAgICAgICAvLyAgIGZvcmNlOiB0cnVlLFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIHJhdzogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlZmluZToge1xuICAgICAgICAgICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgICAgICAgICAgIHVuZGVyc2NvcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmVyc2lvbjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpYWxlY3RPcHRpb25zOiB7XG4gICAgICAgICAgICBjaGFyc2V0OiAndXRmOCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBpbmplY3Q6IFtBYnN0cmFjdFNlY3JldHNTZXJ2aWNlXSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVyY2hhbnREYXRhYmFzZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgb3BlcmF0b3JzQWxpYXNlcyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuaW1wb3J0IHsgRGV2aWNlTW9kZWwsIE1lcmNoYW50VXNlck1vZGVsLCBVc2VyTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcyc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBTZXF1ZWxpemVNb2R1bGUsIFNlcXVlbGl6ZU1vZHVsZU9wdGlvbnMgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlIH0gZnJvbSAnbGlicy9tb2R1bGVzL2dsb2JhbC9zZWNyZXRzL2FkYXB0ZXInO1xuaW1wb3J0IHsgU2VjcmV0c01vZHVsZSB9IGZyb20gJ2xpYnMvbW9kdWxlcy9nbG9iYWwvc2VjcmV0cy9tb2R1bGUnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNlcXVlbGl6ZU1vZHVsZS5mb3JSb290QXN5bmMoe1xuICAgICAgaW1wb3J0czogW1NlY3JldHNNb2R1bGVdLFxuICAgICAgdXNlRmFjdG9yeTogYXN5bmMgKHNlY3JldHM6IEFic3RyYWN0U2VjcmV0c1NlcnZpY2UpOiBQcm9taXNlPFNlcXVlbGl6ZU1vZHVsZU9wdGlvbnM+ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkaWFsZWN0OiAncG9zdGdyZXMnLFxuICAgICAgICAgIC4uLnNlY3JldHMudXNlclNlcnZpY2VEYXRhYmFzZSxcbiAgICAgICAgICBsb2dnaW5nOiBmYWxzZSxcbiAgICAgICAgICB0eXBlVmFsaWRhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBvcGVyYXRvcnNBbGlhc2VzOiBvcGVyYXRvcnNBbGlhc2VzLFxuICAgICAgICAgIG1vZGVsczogW1VzZXJNb2RlbCwgRGV2aWNlTW9kZWwsIE1lcmNoYW50VXNlck1vZGVsXSxcbiAgICAgICAgICBhdXRvTG9hZE1vZGVsczogdHJ1ZSxcbiAgICAgICAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgICAgICAgICAvLyBzeW5jOiB7XG4gICAgICAgICAgLy8gICBmb3JjZTogdHJ1ZSxcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICByYXc6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWZpbmU6IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gICAgICAgICAgICB1bmRlcnNjb3JlZDogdHJ1ZSxcbiAgICAgICAgICAgIHZlcnNpb246IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkaWFsZWN0T3B0aW9uczoge1xuICAgICAgICAgICAgY2hhcnNldDogJ3V0ZjgnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgaW5qZWN0OiBbQWJzdHJhY3RTZWNyZXRzU2VydmljZV0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJEYXRhYmFzZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29sdW1uLCBEYXRhVHlwZSwgTW9kZWwgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlTW9kZWw8VD4gZXh0ZW5kcyBNb2RlbDxUPiB7XG4gIEBDb2x1bW4oe1xuICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSLFxuICB9KVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkRBVEUsXG4gICAgZGVmYXVsdFZhbHVlOiBEYXRhVHlwZS5OT1csXG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgfSlcbiAgY3JlYXRlZEF0Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkRBVEUsXG4gICAgZGVmYXVsdFZhbHVlOiBEYXRhVHlwZS5OT1csXG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgfSlcbiAgdXBkYXRlZEF0Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkRBVEUsXG4gICAgYWxsb3dOdWxsOiB0cnVlLFxuICB9KVxuICBkZWxldGVkQXQ/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuSU5URUdFUixcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIGRlZmF1bHRWYWx1ZTogMCxcbiAgfSlcbiAgdmVyc2lvbj86IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IEVCb29raW5nU3RhdHVzIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3MvYm9va2luZyc7XG5pbXBvcnQgeyBCZWZvcmVDcmVhdGUsIEJlZm9yZVVwZGF0ZSwgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICdAbGlicy9kYXRhYmFzZS9lbnRpdGllcy9iYXNlLm1vZGVsJztcbmltcG9ydCB7IHRvVUZUOE5vblNwZWNpYWxDaGFyYWN0ZXJzIH0gZnJvbSAnQGxpYnMvY29yZSc7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ2Jvb2tpbmcnLFxuICB0YWJsZU5hbWU6ICdib29raW5ncycsXG4gIHVuZGVyc2NvcmVkOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBCb29raW5nTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8Qm9va2luZ01vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHN0YXR1cz86IEVCb29raW5nU3RhdHVzO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHNlcnZpY2VOYW1lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHNlcnZpY2VJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICB1c2VySWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgdXNlckVtYWlsPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHVzZXJQaG9uZU51bWJlcj86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBtZXJjaGFudElkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGJyYW5jaElkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHN0YXJ0VGltZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBlbmRUaW1lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIG5vdGU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgY2FuY2VsUmVhc29uPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGJvb2tpbmdEYXRlPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGR1cmF0aW9uSG91cj86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBkdXJhdGlvbk1pbnV0ZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBkdXJhdGlvbj86IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5URVhULFxuICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgfSlcbiAgc2VhcmNoPzogc3RyaW5nO1xuXG4gIEBCZWZvcmVDcmVhdGVcbiAgQEJlZm9yZVVwZGF0ZVxuICBzdGF0aWMgYXN5bmMgdXBkYXRlU2VhcmNoKG1vZGVsOiBCb29raW5nTW9kZWwpIHtcbiAgICBjb25zdCBjb2x1bW5zVG9Db25jYXRlbmF0ZSA9IFtcbiAgICAgICdzdGF0dXMnLFxuICAgICAgJ2NhbmNlbFJlYXNvbicsXG4gICAgICAnc2VydmljZU5hbWUnLFxuICAgICAgJ3N0YXJ0VGltZScsXG4gICAgICAnZW5kVGltZScsXG4gICAgICAnbm90ZScsXG4gICAgICAnYm9va2luZ0RhdGUnLFxuICAgIF07XG4gICAgY29uc3QgY29uY2F0ZW5hdGVkVmFsdWVzID0gY29sdW1uc1RvQ29uY2F0ZW5hdGVcbiAgICAgIC5tYXAoKGNvbHVtbk5hbWUpID0+IChtb2RlbC5nZXQoY29sdW1uTmFtZSkgPyBtb2RlbC5nZXQoY29sdW1uTmFtZSkgOiAnICcpKVxuICAgICAgLmpvaW4oJyAnKTtcblxuICAgIG1vZGVsLnNldERhdGFWYWx1ZSgnc2VhcmNoJywgY29uY2F0ZW5hdGVkVmFsdWVzLmNvbmNhdCgnICcsIHRvVUZUOE5vblNwZWNpYWxDaGFyYWN0ZXJzKGNvbmNhdGVuYXRlZFZhbHVlcykpKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9ib29raW5nLm1vZGVsJztcbiIsIi8vIHVzZXIgc2VydmljZVxuZXhwb3J0ICogZnJvbSAnLi91c2VyJztcblxuLy8gbWVyY2hhbnQgc2VydmljZVxuZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudCc7XG5cbi8vIG1lcmNoYW50IHNlcnZpY2VcbmV4cG9ydCAqIGZyb20gJy4vYm9va2luZyc7XG4iLCJpbXBvcnQgeyBCZWZvcmVDcmVhdGUsIEJlZm9yZVVwZGF0ZSwgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAnYnJhbmNoJyxcbiAgdGFibGVOYW1lOiAnYnJhbmNoZXMnLFxuICB1bmRlcnNjb3JlZDogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgQnJhbmNoTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8QnJhbmNoTW9kZWw+IHtcbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIsIGFsbG93TnVsbDogZmFsc2UgfSlcbiAgbWVyY2hhbnRJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGFkZHJlc3M/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgcGhvbmU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgY2l0eUNvZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHdhcmRDb2RlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGNpdHk/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZGlzdHJpY3Q/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgd2FyZD86IHN0cmluZztcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5GTE9BVCxcbiAgICBkZWZhdWx0VmFsdWU6IDAsXG4gIH0pXG4gIGxhdGl0dWRlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkZMT0FULFxuICAgIGRlZmF1bHRWYWx1ZTogMCxcbiAgfSlcbiAgbG9uZ2l0dWRlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkdFT01FVFJZKCdQT0lOVCcpLFxuICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgICAvLyBkZWZhdWx0VmFsdWU6IHsgdHlwZTogJ1BvaW50JywgY29vcmRpbmF0ZXM6IFswLCAwXSB9LFxuICB9KVxuICBjb29yZGluYXRlOiB7IHR5cGU6ICdQb2ludCc7IGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdIH07XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuVEVYVCxcbiAgICBhbGxvd051bGw6IHRydWUsXG4gIH0pXG4gIHNlYXJjaD86IHN0cmluZztcblxuICBAQmVmb3JlQ3JlYXRlXG4gIEBCZWZvcmVVcGRhdGVcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVNlYXJjaChtb2RlbDogQnJhbmNoTW9kZWwpIHtcbiAgICBjb25zdCBjb2x1bW5zVG9Db25jYXRlbmF0ZSA9IFsnbmFtZScsICdwaG9uZScsICdhZGRyZXNzJywgJ2NpdHknLCAnZGlzdHJpY3QnLCAnd2FyZCddO1xuICAgIGNvbnN0IGNvbmNhdGVuYXRlZFZhbHVlcyA9IGNvbHVtbnNUb0NvbmNhdGVuYXRlXG4gICAgICAubWFwKChjb2x1bW5OYW1lKSA9PiAobW9kZWwuZ2V0KGNvbHVtbk5hbWUpID8gbW9kZWwuZ2V0KGNvbHVtbk5hbWUpIDogJyAnKSlcbiAgICAgIC5qb2luKCcgJyk7XG5cbiAgICBtb2RlbC5zZXREYXRhVmFsdWUoJ3NlYXJjaCcsIGNvbmNhdGVuYXRlZFZhbHVlcy5jb25jYXQoJyAnLCB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyhjb25jYXRlbmF0ZWRWYWx1ZXMpKSk7XG4gIH1cblxuICBAQmVmb3JlQ3JlYXRlXG4gIEBCZWZvcmVVcGRhdGVcbiAgc3RhdGljIGFzeW5jIHVwc2VydENvb3JkaW5hdGUobW9kZWw6IEJyYW5jaE1vZGVsKSB7XG4gICAgaWYgKG1vZGVsLmxhdGl0dWRlICYmIG1vZGVsLmxvbmdpdHVkZSkge1xuICAgICAgbW9kZWwuY29vcmRpbmF0ZSA9IHtcbiAgICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgICAgY29vcmRpbmF0ZXM6IFttb2RlbC5sYXRpdHVkZSwgbW9kZWwubG9uZ2l0dWRlXSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBCZWZvcmVDcmVhdGUsIEJlZm9yZVVwZGF0ZSwgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAnZ3JvdXAnLFxuICB0YWJsZU5hbWU6ICdncm91cHMnLFxuICB1bmRlcnNjb3JlZDogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgR3JvdXBNb2RlbCBleHRlbmRzIEJhc2VNb2RlbDxHcm91cE1vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSLCBhbGxvd051bGw6IGZhbHNlIH0pXG4gIG1lcmNoYW50SWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgc2t1Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGNvZGU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgbmFtZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBpbWFnZT86IHN0cmluZztcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5URVhULFxuICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgfSlcbiAgc2VhcmNoPzogc3RyaW5nO1xuXG4gIEBCZWZvcmVDcmVhdGVcbiAgQEJlZm9yZVVwZGF0ZVxuICBzdGF0aWMgYXN5bmMgdXBkYXRlU2VhcmNoKG1vZGVsOiBHcm91cE1vZGVsKSB7XG4gICAgY29uc3QgY29sdW1uc1RvQ29uY2F0ZW5hdGUgPSBbJ25hbWUnLCAnY29kZScsICdza3UnLCAnZGVzY3JpcHRpb24nXTtcbiAgICBjb25zdCBjb25jYXRlbmF0ZWRWYWx1ZXMgPSBjb2x1bW5zVG9Db25jYXRlbmF0ZVxuICAgICAgLm1hcCgoY29sdW1uTmFtZSkgPT4gKG1vZGVsLmdldChjb2x1bW5OYW1lKSA/IG1vZGVsLmdldChjb2x1bW5OYW1lKSA6ICcgJykpXG4gICAgICAuam9pbignICcpO1xuXG4gICAgbW9kZWwuc2V0RGF0YVZhbHVlKCdzZWFyY2gnLCBjb25jYXRlbmF0ZWRWYWx1ZXMuY29uY2F0KCcgJywgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMoY29uY2F0ZW5hdGVkVmFsdWVzKSkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb2x1bW4sIERhdGFUeXBlLCBUYWJsZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcblxuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vYmFzZS5tb2RlbCc7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ2ltYWdlJyxcbiAgdGFibGVOYW1lOiAnaW1hZ2VzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8SW1hZ2VNb2RlbD4ge1xuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuIiwiLy8gc2VxdWVsaXplXG5leHBvcnQgKiBmcm9tICcuL21lcmNoYW50Lm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vYnJhbmNoLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JvdXAubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vaW1hZ2UubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2ZS1pbWFnZS5tb2RlbCc7XG4iLCJpbXBvcnQgeyBCZWZvcmVDcmVhdGUsIEJlZm9yZVVwZGF0ZSwgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAnbWVyY2hhbnQnLFxuICB0YWJsZU5hbWU6ICdtZXJjaGFudHMnLFxuICB1bmRlcnNjb3JlZDogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgTWVyY2hhbnRNb2RlbCBleHRlbmRzIEJhc2VNb2RlbDxNZXJjaGFudE1vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHVzZXJJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGFkZHJlc3M/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgcGhvbmU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgY2l0eUNvZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHdhcmRDb2RlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGNpdHk/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZGlzdHJpY3Q/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgd2FyZD86IHN0cmluZztcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5GTE9BVCxcbiAgICBkZWZhdWx0VmFsdWU6IDAsXG4gIH0pXG4gIGxhdGl0dWRlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkZMT0FULFxuICAgIGRlZmF1bHRWYWx1ZTogMCxcbiAgfSlcbiAgbG9uZ2l0dWRlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLkdFT01FVFJZKCdQT0lOVCcpLFxuICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgICAvLyBkZWZhdWx0VmFsdWU6IHsgdHlwZTogJ1BvaW50JywgY29vcmRpbmF0ZXM6IFswLCAwXSB9LFxuICB9KVxuICBjb29yZGluYXRlOiB7IHR5cGU6ICdQb2ludCc7IGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdIH07XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuVEVYVCxcbiAgICBhbGxvd051bGw6IHRydWUsXG4gIH0pXG4gIHNlYXJjaD86IHN0cmluZztcblxuICBAQmVmb3JlQ3JlYXRlXG4gIEBCZWZvcmVVcGRhdGVcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVNlYXJjaChtb2RlbDogTWVyY2hhbnRNb2RlbCkge1xuICAgIGNvbnN0IGNvbHVtbnNUb0NvbmNhdGVuYXRlID0gWyduYW1lJywgJ3Bob25lJywgJ2FkZHJlc3MnLCAnY2l0eScsICdkaXN0cmljdCcsICd3YXJkJ107XG4gICAgY29uc3QgY29uY2F0ZW5hdGVkVmFsdWVzID0gY29sdW1uc1RvQ29uY2F0ZW5hdGVcbiAgICAgIC5tYXAoKGNvbHVtbk5hbWUpID0+IChtb2RlbC5nZXQoY29sdW1uTmFtZSkgPyBtb2RlbC5nZXQoY29sdW1uTmFtZSkgOiAnICcpKVxuICAgICAgLmpvaW4oJyAnKTtcblxuICAgIG1vZGVsLnNldERhdGFWYWx1ZSgnc2VhcmNoJywgY29uY2F0ZW5hdGVkVmFsdWVzLmNvbmNhdCgnICcsIHRvVUZUOE5vblNwZWNpYWxDaGFyYWN0ZXJzKGNvbmNhdGVuYXRlZFZhbHVlcykpKTtcbiAgfVxuXG4gIEBCZWZvcmVDcmVhdGVcbiAgQEJlZm9yZVVwZGF0ZVxuICBzdGF0aWMgYXN5bmMgdXBzZXJ0Q29vcmRpbmF0ZShtb2RlbDogTWVyY2hhbnRNb2RlbCkge1xuICAgIGlmIChtb2RlbC5sYXRpdHVkZSAmJiBtb2RlbC5sb25naXR1ZGUpIHtcbiAgICAgIG1vZGVsLmNvb3JkaW5hdGUgPSB7XG4gICAgICAgIHR5cGU6ICdQb2ludCcsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbbW9kZWwubGF0aXR1ZGUsIG1vZGVsLmxvbmdpdHVkZV0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xuXG5pbXBvcnQgeyBFSW1hZ2VUeXBlLCBFU2VydmVJbWFnZVR5cGUgfSBmcm9tICdAL2FwaS1nYXRld2F5L2R0b3MvY29tbW9uJztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAnc2VydmVfaW1hZ2UnLFxuICB0YWJsZU5hbWU6ICdzZXJ2ZV9pbWFnZXMnLFxuICB1bmRlcnNjb3JlZDogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgU2VydmVJbWFnZU1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsPFNlcnZlSW1hZ2VNb2RlbD4ge1xuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBpbWFnZUlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlNNQUxMSU5UIH0pXG4gIHNlcnZlVHlwZTogRVNlcnZlSW1hZ2VUeXBlO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5TTUFMTElOVCB9KVxuICB0eXBlOiBFSW1hZ2VUeXBlO1xufVxuIiwiaW1wb3J0IHsgRVNlcnZpY2VTaG93VHlwZSwgRVNlcnZpY2VUeXBlIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3Mvc2VydmljZSc7XG5pbXBvcnQgeyBCZWZvcmVDcmVhdGUsIEJlZm9yZVVwZGF0ZSwgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAnc2VydmljZScsXG4gIHRhYmxlTmFtZTogJ3NlcnZpY2VzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VNb2RlbCBleHRlbmRzIEJhc2VNb2RlbDxTZXJ2aWNlTW9kZWw+IHtcbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIsIGFsbG93TnVsbDogZmFsc2UgfSlcbiAgZ3JvdXBJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBtZXJjaGFudElkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5ET1VCTEUsIGRlZmF1bHRWYWx1ZTogMCB9KVxuICBwcmljZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuRE9VQkxFLCBkZWZhdWx0VmFsdWU6IDAgfSlcbiAgaW5pdGlhbFByaWNlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGR1cmF0aW9uSG91cj86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBkdXJhdGlvbk1pbnV0ZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBza3U/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgY29kZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGltYWdlPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHR5cGU/OiBFU2VydmljZVR5cGU7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgc2hvd1R5cGU/OiBFU2VydmljZVNob3dUeXBlO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5CT09MRUFOIH0pXG4gIGNhblByaW50YWJsZUludm9pY2U/OiBib29sZWFuO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6IERhdGFUeXBlLlRFWFQsXG4gICAgYWxsb3dOdWxsOiB0cnVlLFxuICB9KVxuICBzZWFyY2g/OiBzdHJpbmc7XG5cbiAgQEJlZm9yZUNyZWF0ZVxuICBAQmVmb3JlVXBkYXRlXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVTZWFyY2gobW9kZWw6IFNlcnZpY2VNb2RlbCkge1xuICAgIGNvbnN0IGNvbHVtbnNUb0NvbmNhdGVuYXRlID0gWyduYW1lJywgJ2NvZGUnLCAnc2t1JywgJ3ByaWNlJywgJ2luaXRpYWxQcmljZScsICdkZXNjcmlwdGlvbiddO1xuICAgIGNvbnN0IGNvbmNhdGVuYXRlZFZhbHVlcyA9IGNvbHVtbnNUb0NvbmNhdGVuYXRlXG4gICAgICAubWFwKChjb2x1bW5OYW1lKSA9PiAobW9kZWwuZ2V0KGNvbHVtbk5hbWUpID8gbW9kZWwuZ2V0KGNvbHVtbk5hbWUpIDogJyAnKSlcbiAgICAgIC5qb2luKCcgJyk7XG5cbiAgICBtb2RlbC5zZXREYXRhVmFsdWUoJ3NlYXJjaCcsIGNvbmNhdGVuYXRlZFZhbHVlcy5jb25jYXQoJyAnLCB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyhjb25jYXRlbmF0ZWRWYWx1ZXMpKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEVEZXZpY2VPcyB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL2RldmljZSc7XG5pbXBvcnQgeyBDb2x1bW4sIERhdGFUeXBlLCBUYWJsZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcblxuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vYmFzZS5tb2RlbCc7XG5cbkBUYWJsZSh7XG4gIG1vZGVsTmFtZTogJ2RldmljZScsXG4gIHRhYmxlTmFtZTogJ2RldmljZXMnLFxuICB1bmRlcnNjb3JlZDogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRGV2aWNlTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8RGV2aWNlTW9kZWw+IHtcbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgdXNlcklkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgb3M6IEVEZXZpY2VPcztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBkZXZpY2VJZDogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHRva2VuOiBzdHJpbmc7XG59XG4iLCIvLyBzZXF1ZWxpemVcbmV4cG9ydCAqIGZyb20gJy4vdXNlci5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2RldmljZS5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL25vdGlmaWNhdGlvbi5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL21lcmNoYW50LXVzZXIubW9kZWwnO1xuIiwiaW1wb3J0IHsgRVVzZXJSb2xlLCBFVXNlclN0YXR1cyB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL2NvbW1vbnMnO1xuaW1wb3J0IHsgVGFibGUsIENvbHVtbiwgRGF0YVR5cGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xuXG5AVGFibGUoe1xuICBtb2RlbE5hbWU6ICdtZXJjaGFudF91c2VyJyxcbiAgdGFibGVOYW1lOiAnbWVyY2hhbnRfdXNlcnMnLFxuICB1bmRlcnNjb3JlZDogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgTWVyY2hhbnRVc2VyTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWw8TWVyY2hhbnRVc2VyTW9kZWw+IHtcbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgcm9sZT86IEVVc2VyUm9sZTtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBzdGF0dXM/OiBFVXNlclN0YXR1cztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICB1c2VySWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBicmFuY2hJZD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBtZXJjaGFudElkPzogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xuXG5AVGFibGUoe1xuICBtb2RlbE5hbWU6ICdub3RpZmljYXRpb24nLFxuICB0YWJsZU5hbWU6ICdub3RpZmljYXRpb25zJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbk1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsPE5vdGlmaWNhdGlvbk1vZGVsPiB7XG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHVzZXJJZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cbiIsImltcG9ydCB7IEVDdXN0b21lckxldmVsLCBFVXNlckdlbmRlciwgRVVzZXJSb2xlLCBFVXNlclN0YXR1cyB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMvcHJvdG9zL2NvbW1vbnMnO1xuaW1wb3J0IHsgaGFzaCB9IGZyb20gJ2FyZ29uMic7XG5pbXBvcnQgeyBCZWZvcmVDcmVhdGUsIEJlZm9yZVVwZGF0ZSwgQ29sdW1uLCBEYXRhVHlwZSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyB0b1VGVDhOb25TcGVjaWFsQ2hhcmFjdGVycyB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcblxuQFRhYmxlKHtcbiAgbW9kZWxOYW1lOiAndXNlcicsXG4gIHRhYmxlTmFtZTogJ3VzZXJzJyxcbiAgdW5kZXJzY29yZWQ6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJNb2RlbCBleHRlbmRzIEJhc2VNb2RlbDxVc2VyTW9kZWw+IHtcbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZW1haWw/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgcm9sZT86IEVVc2VyUm9sZTtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBzdGF0dXM/OiBFVXNlclN0YXR1cztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBnZW5kZXI/OiBFVXNlckdlbmRlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBmdWxsTmFtZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuQk9PTEVBTiB9KVxuICBpc1JldGFpbEN1c3RvbWVyPzogYm9vbGVhbjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBjb250YWN0Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHBob25lTnVtYmVyPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGRvYkRheT86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBkb2JNb250aD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuSU5URUdFUiB9KVxuICBkb2JZZWFyPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIG9jY3VwYXRpb24/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgYXZhdGFyPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGFkZHJlc3M/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgY2l0eUNvZGU/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHdhcmRDb2RlPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGxldmVsPzogRUN1c3RvbWVyTGV2ZWw7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgcmVmZXJyZXI/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgcmVmZXJyZXJDb2RlPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIGN1c3RvbWVyQ29kZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBmYWNlYm9vaz86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICB6YWxvUGhvbmU/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLklOVEVHRVIgfSlcbiAgaGVpZ2h0PzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIHdlaWdodD86IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBtZW1iZXJDYXJkTm8/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6IERhdGFUeXBlLlRFWFQgfSlcbiAgY29tcGFueT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICB0YXhObz86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICBub3RlPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHJlbGF0ZWRVc2VyPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5URVhUIH0pXG4gIHJlbGF0ZWRVc2VyUm9sZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgdHlwZTogRGF0YVR5cGUuVEVYVCB9KVxuICByZWxhdGVkVXNlclBob25lPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIGJyYW5jaElkPzogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiBEYXRhVHlwZS5JTlRFR0VSIH0pXG4gIG1lcmNoYW50SWQ/OiBudW1iZXI7XG5cbiAgQENvbHVtbih7XG4gICAgdHlwZTogRGF0YVR5cGUuRkxPQVQsXG4gICAgZGVmYXVsdFZhbHVlOiAwLFxuICB9KVxuICBsYXRpdHVkZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5GTE9BVCxcbiAgICBkZWZhdWx0VmFsdWU6IDAsXG4gIH0pXG4gIGxvbmdpdHVkZT86IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5HRU9NRVRSWSgnUE9JTlQnKSxcbiAgICBhbGxvd051bGw6IHRydWUsXG4gIH0pXG4gIGNvb3JkaW5hdGU6IHsgdHlwZTogJ1BvaW50JzsgY29vcmRpbmF0ZXM6IFtudW1iZXIsIG51bWJlcl0gfTtcblxuICBAQ29sdW1uKHtcbiAgICB0eXBlOiBEYXRhVHlwZS5URVhULFxuICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgfSlcbiAgc2VhcmNoPzogc3RyaW5nO1xuXG4gIEBCZWZvcmVDcmVhdGVcbiAgQEJlZm9yZVVwZGF0ZVxuICBzdGF0aWMgYXN5bmMgaGFzaFBhc3N3b3JkKHVzZXI6IFVzZXJNb2RlbCkge1xuICAgIGlmICghdXNlci5wYXNzd29yZCkgcmV0dXJuO1xuICAgIHVzZXIucGFzc3dvcmQgPSBhd2FpdCBoYXNoKHVzZXIucGFzc3dvcmQpO1xuICB9XG5cbiAgQEJlZm9yZUNyZWF0ZVxuICBAQmVmb3JlVXBkYXRlXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVTZWFyY2gobW9kZWw6IFVzZXJNb2RlbCkge1xuICAgIGNvbnN0IGNvbHVtbnNUb0NvbmNhdGVuYXRlID0gWydlbWFpbCcsICdmdWxsTmFtZScsICdjb250YWN0JywgJ3Bob25lTnVtYmVyJywgJ2FkZHJlc3MnXTtcbiAgICBjb25zdCBjb25jYXRlbmF0ZWRWYWx1ZXMgPSBjb2x1bW5zVG9Db25jYXRlbmF0ZVxuICAgICAgLm1hcCgoY29sdW1uTmFtZSkgPT4gKG1vZGVsLmdldChjb2x1bW5OYW1lKSA/IG1vZGVsLmdldChjb2x1bW5OYW1lKSA6ICcgJykpXG4gICAgICAuam9pbignICcpO1xuXG4gICAgbW9kZWwuc2V0RGF0YVZhbHVlKCdzZWFyY2gnLCBjb25jYXRlbmF0ZWRWYWx1ZXMuY29uY2F0KCcgJywgdG9VRlQ4Tm9uU3BlY2lhbENoYXJhY3RlcnMoY29uY2F0ZW5hdGVkVmFsdWVzKSkpO1xuICB9XG5cbiAgQEJlZm9yZUNyZWF0ZVxuICBAQmVmb3JlVXBkYXRlXG4gIHN0YXRpYyBhc3luYyB1cHNlcnRDb29yZGluYXRlKG1vZGVsOiBVc2VyTW9kZWwpIHtcbiAgICBpZiAobW9kZWwubGF0aXR1ZGUgJiYgbW9kZWwubG9uZ2l0dWRlKSB7XG4gICAgICBtb2RlbC5jb29yZGluYXRlID0ge1xuICAgICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgICBjb29yZGluYXRlczogW21vZGVsLmxhdGl0dWRlLCBtb2RlbC5sb25naXR1ZGVdLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vY29ubmVjdGlvbic7XG5cbmV4cG9ydCAqIGZyb20gJy4vZW50aXRpZXMnO1xuXG5leHBvcnQgKiBmcm9tICcuL3JlcG9zaXRvcmllcyc7XG4iLCJpbXBvcnQgeyBMSU1JVCwgUEFHRSB9IGZyb20gJ0BsaWJzL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uUHJvdG8gfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzJztcbmltcG9ydCB7IElGaW5kQW5kUGFnaW5hdGVPcHRpb25zLCBJUGFnaW5hdGlvblJlcyB9IGZyb20gJ0BsaWJzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge1xuICBBdHRyaWJ1dGVzLFxuICBDb3VudE9wdGlvbnMsXG4gIENyZWF0ZU9wdGlvbnMsXG4gIEZpbmRBbmRDb3VudE9wdGlvbnMsXG4gIEZpbmRPcHRpb25zLFxuICBVcGRhdGVPcHRpb25zLFxuICBXaGVyZU9wdGlvbnMsXG59IGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBNb2RlbCwgUmVwb3NpdG9yeSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcblxuZXhwb3J0IGNsYXNzIEJhc2VSZXBvc2l0b3J5PFQgZXh0ZW5kcyBNb2RlbD4ge1xuICBjb25zdHJ1Y3RvcihyZWFkb25seSBtb2RlbDogUmVwb3NpdG9yeTxUPikge31cblxuICBhc3luYyBmaW5kKG9wdGlvbnM/OiBGaW5kT3B0aW9uczxUPik6IFByb21pc2U8VFtdPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kZWwuZmluZEFsbChvcHRpb25zKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRPbmUob3B0aW9ucz86IEZpbmRPcHRpb25zPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kZWwuZmluZE9uZShvcHRpb25zKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRCeUlkKGlkOiBudW1iZXIsIG9wdGlvbnM/OiBGaW5kT3B0aW9uczxUPik6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeVBrKGlkLCBvcHRpb25zKTtcbiAgfVxuXG4gIGFzeW5jIHBhZ2luYXRlKFxuICAgIG9wdGlvbnM/OiBXaGVyZU9wdGlvbnM8VD4sXG4gICAgcGFnZSA9IFBBR0UsXG4gICAgbGltaXQgPSBMSU1JVCxcbiAgICBvcHRzPzogRmluZE9wdGlvbnM8VD4sXG4gICk6IFByb21pc2U8SVBhZ2luYXRpb25SZXM8VD4+IHtcbiAgICBjb25zdCBvZmZzZXQgPSAocGFnZSAtIDEpICogbGltaXQ7XG4gICAgY29uc3QgeyByb3dzLCBjb3VudCB9ID0gYXdhaXQgdGhpcy5yYXdQYWdpbmF0ZSh7XG4gICAgICB3aGVyZTogeyAuLi5vcHRpb25zIH0sXG4gICAgICBvZmZzZXQsXG4gICAgICBsaW1pdCxcbiAgICAgIC4uLm9wdHMsXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IHJvd3MsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIHRvdGFsOiBjb3VudCxcbiAgICAgICAgdG90YWxQYWdlOiBNYXRoLmNlaWwoY291bnQgLyBMSU1JVCksXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGxpbWl0LFxuICAgICAgfSxcbiAgICB9IGFzIElQYWdpbmF0aW9uUmVzPFQ+O1xuICB9XG5cbiAgYXN5bmMgcmF3UGFnaW5hdGUob3B0aW9uczogRmluZEFuZENvdW50T3B0aW9ucyk6IFByb21pc2U8e1xuICAgIHJvd3M6IFRbXTtcbiAgICBjb3VudDogbnVtYmVyO1xuICB9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kZWwuZmluZEFuZENvdW50QWxsKG9wdGlvbnMpO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlKGVudGl0eTogYW55LCBvcHRzPzogQ3JlYXRlT3B0aW9ucyk6IFByb21pc2U8VD4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMubW9kZWwuY3JlYXRlKGVudGl0eSwgb3B0cyk7XG4gICAgcmV0dXJuIHJlcy50b0pTT04oKTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShlbnRpdHk6IGFueSwgb3B0cz86IFVwZGF0ZU9wdGlvbnMpIHtcbiAgICBjb25zdCBbYWZmZWN0ZWRDb3VudCwgYWZmZWN0ZWRSb3dzXSA9IGF3YWl0IHRoaXMubW9kZWwudXBkYXRlKGVudGl0eSwge1xuICAgICAgLi4ub3B0cyxcbiAgICAgIHJldHVybmluZzogdHJ1ZSxcbiAgICB9KTtcbiAgICByZXR1cm4gYWZmZWN0ZWRSb3dzO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlKGNvbmRpdGlvbnM6IEZpbmRPcHRpb25zPFQ+KTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RlbC5kZXN0cm95KGNvbmRpdGlvbnMpO1xuICB9XG5cbiAgYXN5bmMgcmF3KHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RlbC5zZXF1ZWxpemUucXVlcnkocXVlcnkpO1xuICB9XG5cbiAgZ2V0TW9kZWwoKTogUmVwb3NpdG9yeTxUPiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWw7XG4gIH1cblxuICBhc3luYyBjb3VudChvcHRpb25zPzogQ291bnRPcHRpb25zKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICBjb25zdCByZXN1bHQ6IG51bWJlciA9IGF3YWl0IHRoaXMubW9kZWwuY291bnQob3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGFzeW5jIGZpbmRBbmRQYWdpbmF0ZShxdWVyeT86IElGaW5kQW5kUGFnaW5hdGVPcHRpb25zLCBvcHRzPzogRmluZE9wdGlvbnMpOiBQcm9taXNlPElQYWdpbmF0aW9uUmVzPFQ+PiB7XG4gICAgY29uc3QgcmVzdWx0OiBJUGFnaW5hdGlvblJlczxUPiA9IGF3YWl0IHRoaXMucGFnaW5hdGUocXVlcnkud2hlcmUsIHF1ZXJ5LnBhZ2UsIHF1ZXJ5LmxpbWl0LCBvcHRzKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBhc3luYyBjb3VudEJ5R3JwYyhxdWVyeTogQ29tbW9uUHJvdG8uUXVlcnlSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd2hlcmUgPSAhaXNFbXB0eShxdWVyeS53aGVyZSkgPyBKU09OLnBhcnNlKHF1ZXJ5LndoZXJlKSA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY291bnQoe1xuICAgICAgLi4ucXVlcnksXG4gICAgICB3aGVyZSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RNb2RlbCB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcbmltcG9ydCB7IEJvb2tpbmdNb2RlbCB9IGZyb20gJ0BsaWJzL2RhdGFiYXNlJztcblxuaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9iYXNlLnJlcG9zaXRvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQm9va2luZ1JlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxCb29raW5nTW9kZWw+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdE1vZGVsKEJvb2tpbmdNb2RlbCkgcmVhZG9ubHkgbW9kZWw6IHR5cGVvZiBCb29raW5nTW9kZWwpIHtcbiAgICBzdXBlcihtb2RlbCk7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYm9va2luZy5yZXBvc2l0b3J5JztcbiIsIi8vIHVzZXIgcmVwb3NpdG9yeVxuZXhwb3J0ICogZnJvbSAnLi91c2VyJztcblxuLy8gbWVyY2hhbnQgcmVwb3NpdG9yeVxuZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudCc7XG5cbi8vIG1lcmNoYW50IHJlcG9zaXRvcnlcbmV4cG9ydCAqIGZyb20gJy4vYm9va2luZyc7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0TW9kZWwgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IEJyYW5jaE1vZGVsIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9iYXNlLnJlcG9zaXRvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJhbmNoUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PEJyYW5jaE1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3RNb2RlbChCcmFuY2hNb2RlbCkgcmVhZG9ubHkgbW9kZWw6IHR5cGVvZiBCcmFuY2hNb2RlbCkge1xuICAgIHN1cGVyKG1vZGVsKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRXaXRoUGFnaW5nKG9wdGlvbnM/OiBhbnksIGZpbmRPcHRpb25zPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2luYXRpb25SZXBvc2l0b3J5KHRoaXMuZGV2aWNlTW9kZWwsIG9wdGlvbnMsIGZpbmRPcHRpb25zKTtcbiAgICByZXR1cm47XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RNb2RlbCB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcblxuaW1wb3J0IHsgR3JvdXBNb2RlbCB9IGZyb20gJy4uLy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYmFzZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdyb3VwUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PEdyb3VwTW9kZWw+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdE1vZGVsKEdyb3VwTW9kZWwpIHJlYWRvbmx5IG1vZGVsOiB0eXBlb2YgR3JvdXBNb2RlbCkge1xuICAgIHN1cGVyKG1vZGVsKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudC5yZXBvc2l0b3J5JztcbmV4cG9ydCAqIGZyb20gJy4vZ3JvdXAucmVwb3NpdG9yeSc7XG5leHBvcnQgKiBmcm9tICcuL2JyYW5jaC5yZXBvc2l0b3J5JztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZS5yZXBvc2l0b3J5JztcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RNb2RlbCB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcblxuaW1wb3J0IHsgTWVyY2hhbnRNb2RlbCB9IGZyb20gJy4uLy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYmFzZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lcmNoYW50UmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PE1lcmNoYW50TW9kZWw+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdE1vZGVsKE1lcmNoYW50TW9kZWwpIHJlYWRvbmx5IG1vZGVsOiB0eXBlb2YgTWVyY2hhbnRNb2RlbCkge1xuICAgIHN1cGVyKG1vZGVsKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRXaXRoUGFnaW5nKG9wdGlvbnM/OiBhbnksIGZpbmRPcHRpb25zPzogYW55KTogUHJvbWlzZTxNZXJjaGFudE1vZGVsPiB7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdpbmF0aW9uUmVwb3NpdG9yeSh0aGlzLmRldmljZU1vZGVsLCBvcHRpb25zLCBmaW5kT3B0aW9ucyk7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0TW9kZWwgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IFNlcnZpY2VNb2RlbCB9IGZyb20gJy4uLy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYmFzZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8U2VydmljZU1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3RNb2RlbChTZXJ2aWNlTW9kZWwpIHJlYWRvbmx5IG1vZGVsOiB0eXBlb2YgU2VydmljZU1vZGVsKSB7XG4gICAgc3VwZXIobW9kZWwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0TW9kZWwgfSBmcm9tICdAbmVzdGpzL3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBJRmluZEFuZFBhZ2luYXRlT3B0aW9ucywgSVBhZ2luYXRpb25SZXMgfSBmcm9tICdAbGlicy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEZpbmRPcHRpb25zIH0gZnJvbSAnc2VxdWVsaXplJztcblxuaW1wb3J0IHsgRGV2aWNlTW9kZWwgfSBmcm9tICcuLi8uLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2Jhc2UucmVwb3NpdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZXZpY2VSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8RGV2aWNlTW9kZWw+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdE1vZGVsKERldmljZU1vZGVsKSByZWFkb25seSBtb2RlbDogdHlwZW9mIERldmljZU1vZGVsKSB7XG4gICAgc3VwZXIobW9kZWwpO1xuICB9XG5cbiAgYXN5bmMgZmluZEFuZFBhZ2luYXRlKHF1ZXJ5PzogSUZpbmRBbmRQYWdpbmF0ZU9wdGlvbnMsIG9wdHM/OiBGaW5kT3B0aW9ucyk6IFByb21pc2U8SVBhZ2luYXRpb25SZXM8RGV2aWNlTW9kZWw+PiB7XG4gICAgY29uc3QgcmVzdWx0OiBJUGFnaW5hdGlvblJlczxEZXZpY2VNb2RlbD4gPSBhd2FpdCB0aGlzLnBhZ2luYXRlKHF1ZXJ5LndoZXJlLCBxdWVyeS5wYWdlLCBxdWVyeS5saW1pdCwgb3B0cyk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXIucmVwb3NpdG9yeSc7XG5leHBvcnQgKiBmcm9tICcuL2RldmljZS5yZXBvc2l0b3J5JztcbmV4cG9ydCAqIGZyb20gJy4vbm90aWZpY2F0aW9uLnJlcG9zaXRvcnknO1xuZXhwb3J0ICogZnJvbSAnLi9tZXJjaGFudC11c2VyLnJlcG9zaXRvcnknO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdE1vZGVsIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBNZXJjaGFudFVzZXJNb2RlbCB9IGZyb20gJy4uLy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYmFzZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lcmNoYW50VXNlclJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxNZXJjaGFudFVzZXJNb2RlbD4ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0TW9kZWwoTWVyY2hhbnRVc2VyTW9kZWwpIHJlYWRvbmx5IG1vZGVsOiB0eXBlb2YgTWVyY2hhbnRVc2VyTW9kZWwpIHtcbiAgICBzdXBlcihtb2RlbCk7XG4gIH1cblxuICBhc3luYyBmaW5kV2l0aFBhZ2luZyhvcHRpb25zPzogYW55LCBmaW5kT3B0aW9ucz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdpbmF0ZSh0aGlzLnVzZXJNb2RlbCwgb3B0aW9ucywgZmluZE9wdGlvbnMpO1xuICAgIHJldHVybjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdE1vZGVsIH0gZnJvbSAnQG5lc3Rqcy9zZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Nb2RlbCB9IGZyb20gJy4uLy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYmFzZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxOb3RpZmljYXRpb25Nb2RlbD4ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0TW9kZWwoTm90aWZpY2F0aW9uTW9kZWwpIHJlYWRvbmx5IG1vZGVsOiB0eXBlb2YgTm90aWZpY2F0aW9uTW9kZWwpIHtcbiAgICBzdXBlcihtb2RlbCk7XG4gIH1cblxuICBhc3luYyBmaW5kV2l0aFBhZ2luZyhvcHRpb25zPzogYW55LCBmaW5kT3B0aW9ucz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdpbmF0aW9uUmVwb3NpdG9yeSh0aGlzLmRldmljZU1vZGVsLCBvcHRpb25zLCBmaW5kT3B0aW9ucyk7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJRmluZEFuZFBhZ2luYXRlT3B0aW9ucywgSVBhZ2luYXRpb25SZXMgfSBmcm9tICdAbGlicy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RNb2RlbCB9IGZyb20gJ0BuZXN0anMvc2VxdWVsaXplJztcbmltcG9ydCB7IEZpbmRPcHRpb25zIH0gZnJvbSAnc2VxdWVsaXplJztcblxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9iYXNlLnJlcG9zaXRvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxVc2VyTW9kZWw+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdE1vZGVsKFVzZXJNb2RlbCkgcmVhZG9ubHkgbW9kZWw6IHR5cGVvZiBVc2VyTW9kZWwpIHtcbiAgICBzdXBlcihtb2RlbCk7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vbGliL2V4Y2VwdGlvbnMvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvZXJyb3ItY29kZXMnO1xuIiwiZXhwb3J0IGVudW0gRXJyb3JDb2RlcyB7XG4gIC8vNTAwXG4gIEdFTkVSQUxfU0VSVkVSX0VSUk9SID0gNTAwMTAwLFxuICBVU0VSTkFNRV9BTFJFQURZX1RBS0VOID0gNTAwMTAxLFxuICBJTlZBTElEX0NSRURFTlRJQUxTID0gNTAwMTAyLFxufVxuIiwiZXhwb3J0IGNsYXNzIEN1c3RvbUV4Y2VwdGlvbiB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgaHR0cFN0YXR1c0NvZGU6IG51bWJlcjtcbiAgZXJyb3JDb2RlOiBudW1iZXI7XG4gIGlzQ3VzdG9tRXJyb3IgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgaHR0cFN0YXR1c0NvZGU6IG51bWJlciwgZXJyb3JDb2RlOiBudW1iZXIpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuaHR0cFN0YXR1c0NvZGUgPSBodHRwU3RhdHVzQ29kZTtcbiAgICB0aGlzLmVycm9yQ29kZSA9IGVycm9yQ29kZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ3VzdG9tRXhjZXB0aW9uIH0gZnJvbSAnZXhjZXB0aW9ucy9leGNlcHRpb25zL2xpYi9leGNlcHRpb25zL2N1c3RvbS5leGNlcHRpb24nO1xuaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJ2V4Y2VwdGlvbnMvZXhjZXB0aW9ucy9saWIvZXJyb3ItY29kZXMnO1xuXG5leHBvcnQgY2xhc3MgR2VuZXJhbFNlcnZlckVycm9yRXhjZXB0aW9uIGV4dGVuZHMgQ3VzdG9tRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ0dlbmVyYWwgc2VydmVyIGVycm9yJywgNTAwLCBFcnJvckNvZGVzLkdFTkVSQUxfU0VSVkVSX0VSUk9SKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jdXN0b20uZXhjZXB0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vZ2VuZXJhbC1zZXJ2ZXItZXJyb3IuZXhjZXB0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcm5hbWUtYWxyZWFkeS10YWtlbi5leGNlcHRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9pbnZhbGlkLWNyZWRlbnRpYWxzLmV4Y2VwdGlvbic7XG4iLCJpbXBvcnQgeyBDdXN0b21FeGNlcHRpb24gfSBmcm9tICdleGNlcHRpb25zL2V4Y2VwdGlvbnMvbGliL2V4Y2VwdGlvbnMvY3VzdG9tLmV4Y2VwdGlvbic7XG5pbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnZXhjZXB0aW9ucy9leGNlcHRpb25zL2xpYi9lcnJvci1jb2Rlcyc7XG5cbmV4cG9ydCBjbGFzcyBJbnZhbGlkQ3JlZGVudGlhbHNFeGNlcHRpb24gZXh0ZW5kcyBDdXN0b21FeGNlcHRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignSW52YWxpZCBDcmVkZW50aWFscycsIDUwMCwgRXJyb3JDb2Rlcy5JTlZBTElEX0NSRURFTlRJQUxTKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ3VzdG9tRXhjZXB0aW9uIH0gZnJvbSAnZXhjZXB0aW9ucy9leGNlcHRpb25zL2xpYi9leGNlcHRpb25zL2N1c3RvbS5leGNlcHRpb24nO1xuaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJ2V4Y2VwdGlvbnMvZXhjZXB0aW9ucy9saWIvZXJyb3ItY29kZXMnO1xuXG5leHBvcnQgY2xhc3MgTmlja25hbWVBbHJlYWR5VGFrZW5FeGNlcHRpb24gZXh0ZW5kcyBDdXN0b21FeGNlcHRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignTmlja25hbWUgaXMgYWxyZWFkeSB0YWtlbicsIDUwMCwgRXJyb3JDb2Rlcy5VU0VSTkFNRV9BTFJFQURZX1RBS0VOKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRXhjZXB0aW9uRmlsdGVyLCBBcmd1bWVudHNIb3N0LCBDYXRjaCwgTG9nZ2VyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgR2VuZXJhbFNlcnZlckVycm9yRXhjZXB0aW9uIH0gZnJvbSAnZXhjZXB0aW9ucy9leGNlcHRpb25zJztcbmltcG9ydCB7IEdycGNNZXRhZGF0YUVycm9yS2V5IH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5cbkBDYXRjaCgpXG5leHBvcnQgY2xhc3MgQWxsRXhjZXB0aW9uc0ZpbHRlciBpbXBsZW1lbnRzIEV4Y2VwdGlvbkZpbHRlciB7XG4gIHByaXZhdGUgbG9nZ2VyID0gbmV3IExvZ2dlcihBbGxFeGNlcHRpb25zRmlsdGVyLm5hbWUpO1xuXG4gIGNhdGNoKGV4Y2VwdGlvbjogYW55LCBob3N0OiBBcmd1bWVudHNIb3N0KTogYW55IHtcbiAgICBjb25zdCBjdHggPSBob3N0LnN3aXRjaFRvSHR0cCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gY3R4LmdldFJlc3BvbnNlKCk7XG4gICAgY29uc3QgcmVxdWVzdCA9IGN0eC5nZXRSZXF1ZXN0KCk7XG4gICAgaWYgKGV4Y2VwdGlvbi5tZXRhZGF0YSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZXhjZXB0aW9uID0gSlNPTi5wYXJzZShleGNlcHRpb24ubWV0YWRhdGEuZ2V0KEdycGNNZXRhZGF0YUVycm9yS2V5KVswXSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBbR1JQQyBVTkhBTkRMRUQgRVJST1JdOiBbJHtleGNlcHRpb24/Lm1lc3NhZ2V9XSA6LT4gYCwgSlNPTi5zdHJpbmdpZnkoZXhjZXB0aW9uKSk7XG4gICAgICAgIGV4Y2VwdGlvbiA9IG5ldyBHZW5lcmFsU2VydmVyRXJyb3JFeGNlcHRpb24oKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFleGNlcHRpb24uaXNDdXN0b21FcnJvcikge1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYFtVTkhBTkRMRUQgRVJST1JdOiBbJHtleGNlcHRpb24/Lm1lc3NhZ2V9XSA6LT4gYCwgSlNPTi5zdHJpbmdpZnkoZXhjZXB0aW9uKSk7XG4gICAgICBleGNlcHRpb24gPSBuZXcgR2VuZXJhbFNlcnZlckVycm9yRXhjZXB0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBbRVJST1I6JHtleGNlcHRpb24uZXJyb3JDb2RlfV0gJHtleGNlcHRpb24ubWVzc2FnZS50b1VwcGVyQ2FzZSgpfWApO1xuICAgIH1cbiAgICByZXNwb25zZS5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLFxuICAgICAgICBwYXJhbXM6IHJlcXVlc3QucGFyYW1zLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBlcnJvckNvZGU6IGV4Y2VwdGlvbi5lcnJvckNvZGUsXG4gICAgICAgIGVycm9yTWVzc2FnZTogZXhjZXB0aW9uLm1lc3NhZ2UsXG4gICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICAgIH0sXG4gICAgICByZXN1bHQ6IGV4Y2VwdGlvbixcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXJndW1lbnRzSG9zdCwgQ2F0Y2gsIExvZ2dlciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEJhc2VScGNFeGNlcHRpb25GaWx0ZXIgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICdAZ3JwYy9ncnBjLWpzJztcbmltcG9ydCB7IEdlbmVyYWxTZXJ2ZXJFcnJvckV4Y2VwdGlvbiB9IGZyb20gJ2V4Y2VwdGlvbnMvZXhjZXB0aW9ucyc7XG5pbXBvcnQgeyBHcnBjTWV0YWRhdGFFcnJvcktleSB9IGZyb20gJ0BsaWJzL2dycGMtdHlwZXMnO1xuXG5AQ2F0Y2goKVxuZXhwb3J0IGNsYXNzIEdycGNBbGxFeGNlcHRpb25zRmlsdGVyIGV4dGVuZHMgQmFzZVJwY0V4Y2VwdGlvbkZpbHRlciB7XG4gIHByaXZhdGUgbG9nZ2VyID0gbmV3IExvZ2dlcihHcnBjQWxsRXhjZXB0aW9uc0ZpbHRlci5uYW1lKTtcblxuICBjYXRjaChleGNlcHRpb246IGFueSwgaG9zdDogQXJndW1lbnRzSG9zdCkge1xuICAgIGlmICghZXhjZXB0aW9uLmlzQ3VzdG9tRXJyb3IpIHtcbiAgICAgIGV4Y2VwdGlvbiA9IG5ldyBHZW5lcmFsU2VydmVyRXJyb3JFeGNlcHRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5sb2dnZXIuZXJyb3IoYFtFUlJPUjogJHtleGNlcHRpb24uZXJyb3JDb2RlfV0gJHtleGNlcHRpb24ubWVzc2FnZX1gKTtcbiAgICBjb25zdCBlcnJvck1ldGFkYXRhID0gbmV3IE1ldGFkYXRhKCk7XG4gICAgZXJyb3JNZXRhZGF0YS5hZGQoR3JwY01ldGFkYXRhRXJyb3JLZXksIEpTT04uc3RyaW5naWZ5KGV4Y2VwdGlvbikpO1xuICAgIGV4Y2VwdGlvbi5tZXRhZGF0YSA9IGVycm9yTWV0YWRhdGE7XG4gICAgcmV0dXJuIHRocm93RXJyb3IoKCkgPT4gZXhjZXB0aW9uKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9hbGwuZXhjZXB0aW9ucy5maWx0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9ncnBjLWFsbC5leGNlcHRpb25zLmZpbHRlcic7XG4iLCJpbXBvcnQgeyBCb29raW5nQ29uZmlnLCBNZXJjaGFudENvbmZpZywgTm90aWZpY2F0aW9uQ29uZmlnLCBVc2VyQ29uZmlnLCBVc2VyUHJvdG8gfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzJztcbmltcG9ydCB7IEJPT0tJTkdfUEFDS0FHRV9OQU1FIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3MvYm9va2luZyc7XG5pbXBvcnQgeyBNRVJDSEFOVF9QQUNLQUdFX05BTUUgfSBmcm9tICdAbGlicy9ncnBjLXR5cGVzL3Byb3Rvcy9tZXJjaGFudCc7XG5pbXBvcnQgeyBOT1RJRklDQVRJT05fUEFDS0FHRV9OQU1FIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcy9wcm90b3Mvbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IENsaWVudFByb3ZpZGVyT3B0aW9ucywgVHJhbnNwb3J0IH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcblxuZXhwb3J0IGNvbnN0IFVzZXJDbGllbnQ6IENsaWVudFByb3ZpZGVyT3B0aW9ucyA9IHtcbiAgbmFtZTogVXNlclByb3RvLkRVQ1BIX1VTRVJfUEFDS0FHRV9OQU1FLFxuICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5HUlBDLFxuICBvcHRpb25zOiB7XG4gICAgcGFja2FnZTogVXNlclByb3RvLkRVQ1BIX1VTRVJfUEFDS0FHRV9OQU1FLFxuICAgIHByb3RvUGF0aDogVXNlckNvbmZpZy5wYXRoLFxuICAgIHVybDogYCR7VXNlckNvbmZpZy5sb2NhbEhvc3RuYW1lfToke1VzZXJDb25maWcucG9ydH1gLFxuICAgIGxvYWRlcjogVXNlckNvbmZpZy5sb2FkZXIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgTWVyY2hhbnRDbGllbnQ6IENsaWVudFByb3ZpZGVyT3B0aW9ucyA9IHtcbiAgbmFtZTogTUVSQ0hBTlRfUEFDS0FHRV9OQU1FLFxuICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5HUlBDLFxuICBvcHRpb25zOiB7XG4gICAgcGFja2FnZTogTUVSQ0hBTlRfUEFDS0FHRV9OQU1FLFxuICAgIHByb3RvUGF0aDogTWVyY2hhbnRDb25maWcucGF0aCxcbiAgICB1cmw6IGAke01lcmNoYW50Q29uZmlnLmxvY2FsSG9zdG5hbWV9OiR7TWVyY2hhbnRDb25maWcucG9ydH1gLFxuICAgIGxvYWRlcjogTWVyY2hhbnRDb25maWcubG9hZGVyLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEJvb2tpbmdDbGllbnQ6IENsaWVudFByb3ZpZGVyT3B0aW9ucyA9IHtcbiAgbmFtZTogQk9PS0lOR19QQUNLQUdFX05BTUUsXG4gIHRyYW5zcG9ydDogVHJhbnNwb3J0LkdSUEMsXG4gIG9wdGlvbnM6IHtcbiAgICBwYWNrYWdlOiBCT09LSU5HX1BBQ0tBR0VfTkFNRSxcbiAgICBwcm90b1BhdGg6IEJvb2tpbmdDb25maWcucGF0aCxcbiAgICB1cmw6IGAke0Jvb2tpbmdDb25maWcubG9jYWxIb3N0bmFtZX06JHtCb29raW5nQ29uZmlnLnBvcnR9YCxcbiAgICBsb2FkZXI6IEJvb2tpbmdDb25maWcubG9hZGVyLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkNsaWVudDogQ2xpZW50UHJvdmlkZXJPcHRpb25zID0ge1xuICBuYW1lOiBOT1RJRklDQVRJT05fUEFDS0FHRV9OQU1FLFxuICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5HUlBDLFxuICBvcHRpb25zOiB7XG4gICAgcGFja2FnZTogTk9USUZJQ0FUSU9OX1BBQ0tBR0VfTkFNRSxcbiAgICBwcm90b1BhdGg6IE5vdGlmaWNhdGlvbkNvbmZpZy5wYXRoLFxuICAgIHVybDogYCR7Tm90aWZpY2F0aW9uQ29uZmlnLmxvY2FsSG9zdG5hbWV9OiR7Tm90aWZpY2F0aW9uQ29uZmlnLnBvcnR9YCxcbiAgICBsb2FkZXI6IE5vdGlmaWNhdGlvbkNvbmZpZy5sb2FkZXIsXG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgY29uc3QgVXNlckNvbmZpZyA9IHtcbiAgaG9zdG5hbWU6ICd1c2VyLXNlcnZpY2UnLFxuICBsb2NhbEhvc3RuYW1lOiAnMC4wLjAuMCcsXG4gIHBvcnQ6IDUwMDA2LFxuICBwYXRoOiByZXNvbHZlKCdsaWJzL2dycGMtdHlwZXMvc3JjL3Byb3RvcycsICd1c2VyLnByb3RvJyksXG4gIGxvYWRlcjoge1xuICAgIGtlZXBDYXNlOiB0cnVlLFxuICAgIGxvbmdzOiBOdW1iZXIsXG4gICAgZW51bXM6IE51bWJlcixcbiAgICBhcnJheXM6IHRydWUsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgTWVyY2hhbnRDb25maWcgPSB7XG4gIGhvc3RuYW1lOiAnbWVyY2hhbnQtc2VydmljZScsXG4gIGxvY2FsSG9zdG5hbWU6ICcwLjAuMC4wJyxcbiAgcG9ydDogNTAwMDgsXG4gIHBhdGg6IHJlc29sdmUoJ2xpYnMvZ3JwYy10eXBlcy9zcmMvcHJvdG9zJywgJ21lcmNoYW50LnByb3RvJyksXG4gIGxvYWRlcjoge1xuICAgIGtlZXBDYXNlOiB0cnVlLFxuICAgIGxvbmdzOiBOdW1iZXIsXG4gICAgZW51bXM6IE51bWJlcixcbiAgICBhcnJheXM6IHRydWUsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgQm9va2luZ0NvbmZpZyA9IHtcbiAgaG9zdG5hbWU6ICdib29raW5nLXNlcnZpY2UnLFxuICBsb2NhbEhvc3RuYW1lOiAnMC4wLjAuMCcsXG4gIHBvcnQ6IDUwMDEwLFxuICBwYXRoOiByZXNvbHZlKCdsaWJzL2dycGMtdHlwZXMvc3JjL3Byb3RvcycsICdib29raW5nLnByb3RvJyksXG4gIGxvYWRlcjoge1xuICAgIGtlZXBDYXNlOiB0cnVlLFxuICAgIGxvbmdzOiBOdW1iZXIsXG4gICAgZW51bXM6IE51bWJlcixcbiAgICBhcnJheXM6IHRydWUsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uQ29uZmlnID0ge1xuICBob3N0bmFtZTogJ25vdGlmaWNhdGlvbi1zZXJ2aWNlJyxcbiAgbG9jYWxIb3N0bmFtZTogJzAuMC4wLjAnLFxuICBwb3J0OiA1MDAxMixcbiAgcGF0aDogcmVzb2x2ZSgnbGlicy9ncnBjLXR5cGVzL3NyYy9wcm90b3MnLCAnbm90aWZpY2F0aW9uLnByb3RvJyksXG4gIGxvYWRlcjoge1xuICAgIGtlZXBDYXNlOiB0cnVlLFxuICAgIGxvbmdzOiBOdW1iZXIsXG4gICAgZW51bXM6IE51bWJlcixcbiAgICBhcnJheXM6IHRydWUsXG4gIH0sXG59O1xuIiwiaW1wb3J0ICogYXMgVXNlclByb3RvIGZyb20gJy4vcHJvdG9zL3VzZXInO1xuaW1wb3J0ICogYXMgQ29tbW9uUHJvdG8gZnJvbSAnLi9wcm90b3MvY29tbW9ucyc7XG5pbXBvcnQgKiBhcyBNZXJjaGFudFByb3RvIGZyb20gJy4vcHJvdG9zL21lcmNoYW50JztcbmltcG9ydCAqIGFzIEJvb2tpbmdQcm90byBmcm9tICcuL3Byb3Rvcy9ib29raW5nJztcbmltcG9ydCAqIGFzIE5vdGlmaWNhdGlvblByb3RvIGZyb20gJy4vcHJvdG9zL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgKiBhcyBCcmFuY2hQcm90byBmcm9tICcuL3Byb3Rvcy9icmFuY2gnO1xuaW1wb3J0ICogYXMgRGV2aWNlUHJvdG8gZnJvbSAnLi9wcm90b3MvZGV2aWNlJztcbmltcG9ydCAqIGFzIE1lcmNoYW50VXNlclByb3RvIGZyb20gJy4vcHJvdG9zL21lcmNoYW50X3VzZXInO1xuXG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vc2VydmVycyc7XG5leHBvcnQgKiBmcm9tICcuL2NsaWVudHMnO1xuXG5leHBvcnQge1xuICBDb21tb25Qcm90byxcbiAgVXNlclByb3RvLFxuICBNZXJjaGFudFByb3RvLFxuICBCb29raW5nUHJvdG8sXG4gIE5vdGlmaWNhdGlvblByb3RvLFxuICBCcmFuY2hQcm90byxcbiAgRGV2aWNlUHJvdG8sXG4gIE1lcmNoYW50VXNlclByb3RvLFxufTtcblxuZXhwb3J0IGNvbnN0IEdycGNNZXRhZGF0YUVycm9yS2V5ID0gJ2N1c3RvbS1ncnBjLWVycm9yJztcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBHcnBjTWV0aG9kLCBHcnBjU3RyZWFtTWV0aG9kIH0gZnJvbSBcIkBuZXN0anMvbWljcm9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBDb3VudCwgSWQsIFF1ZXJ5UmVxdWVzdCB9IGZyb20gXCIuL2NvbW1vbnNcIjtcbmltcG9ydCB7IE51bGxWYWx1ZSB9IGZyb20gXCIuL2dvb2dsZS9wcm90b2J1Zi9zdHJ1Y3RcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwiYm9va2luZ1wiO1xuXG5leHBvcnQgZW51bSBFQm9va2luZ1N0YXR1cyB7XG4gIFBFTkRJTkcgPSAwLFxuICBBUFBST1ZFID0gMSxcbiAgQ0FOQ0VMTEVEID0gMixcbiAgUkVKRUNUID0gMyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCb29raW5nIHtcbiAgLyoqIGRlZmF1bHQgZmllbGQgKi9cbiAgaWQ6IG51bWJlcjtcbiAgY3JlYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3JlYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRCeT86XG4gICAgfCBzdHJpbmdcbiAgICB8IHVuZGVmaW5lZDtcbiAgLyoqIHJlc2VydmVkIGZpZWxkICovXG4gIHN0YXR1cz86IEVCb29raW5nU3RhdHVzIHwgdW5kZWZpbmVkO1xuICB1c2VySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2VJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc3RhcnRUaW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBlbmRUaW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkdXJhdGlvbj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbm90ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGlzQ3VzdG9tZXJDYW5jZWw/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICBjYW5jZWxSZWFzb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGJvb2tpbmdEYXRlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBpc0FkbWluVXBkYXRlPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgYWRtaW5VcGRhdGVJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc2VydmljZU5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJFbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJBZGRyZXNzPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkdXJhdGlvbkhvdXI/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGR1cmF0aW9uTWludXRlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUJvb2tpbmdJbnB1dCB7XG4gIHN0YXR1cz86IEVCb29raW5nU3RhdHVzIHwgdW5kZWZpbmVkO1xuICB1c2VySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2VJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc3RhcnRUaW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBlbmRUaW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhZG1pbkJyYW5jaEVtYWlsPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lckVtYWlsPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lck5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGJvb2tpbmdEYXRlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBub3RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBicmFuY2hJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc2VydmljZU5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlQm9va2luZ0RhdGEge1xuICBzdGF0dXM/OiBFQm9va2luZ1N0YXR1cyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZXJ2aWNlSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHN0YXJ0VGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZW5kVGltZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRtaW5CcmFuY2hFbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJFbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tZXJOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBib29raW5nRGF0ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbm90ZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2VOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZUJvb2tpbmdJbnB1dCB7XG4gIGlkOiBudW1iZXI7XG4gIGRhdGE6IFVwZGF0ZUJvb2tpbmdEYXRhIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRCb29raW5nT2Zmc2V0UGFnaW5hdGlvbiB7XG4gIGl0ZW1zOiBCb29raW5nW107XG4gIHBhZ2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHRvdGFsUGFnZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgdG90YWw/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxpbWl0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE51bGxhYmxlQm9va2luZyB7XG4gIG51bGw/OiBOdWxsVmFsdWUgfCB1bmRlZmluZWQ7XG4gIGJvb2tpbmc/OiBCb29raW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgQk9PS0lOR19QQUNLQUdFX05BTUUgPSBcImJvb2tpbmdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCb29raW5nU2VydmljZUNsaWVudCB7XG4gIGZpbmQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxGaW5kQm9va2luZ09mZnNldFBhZ2luYXRpb24+O1xuXG4gIGZpbmRCeUlkKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxOdWxsYWJsZUJvb2tpbmc+O1xuXG4gIGZpbmRPbmUocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxOdWxsYWJsZUJvb2tpbmc+O1xuXG4gIGNvdW50KHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8Q291bnQ+O1xuXG4gIGNyZWF0ZShyZXF1ZXN0OiBDcmVhdGVCb29raW5nSW5wdXQpOiBPYnNlcnZhYmxlPEJvb2tpbmc+O1xuXG4gIHVwZGF0ZShyZXF1ZXN0OiBVcGRhdGVCb29raW5nSW5wdXQpOiBPYnNlcnZhYmxlPEJvb2tpbmc+O1xuXG4gIGRlbGV0ZShyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8Q291bnQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJvb2tpbmdTZXJ2aWNlQ29udHJvbGxlciB7XG4gIGZpbmQoXG4gICAgcmVxdWVzdDogUXVlcnlSZXF1ZXN0LFxuICApOiBQcm9taXNlPEZpbmRCb29raW5nT2Zmc2V0UGFnaW5hdGlvbj4gfCBPYnNlcnZhYmxlPEZpbmRCb29raW5nT2Zmc2V0UGFnaW5hdGlvbj4gfCBGaW5kQm9va2luZ09mZnNldFBhZ2luYXRpb247XG5cbiAgZmluZEJ5SWQocmVxdWVzdDogSWQpOiBQcm9taXNlPE51bGxhYmxlQm9va2luZz4gfCBPYnNlcnZhYmxlPE51bGxhYmxlQm9va2luZz4gfCBOdWxsYWJsZUJvb2tpbmc7XG5cbiAgZmluZE9uZShyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE51bGxhYmxlQm9va2luZz4gfCBPYnNlcnZhYmxlPE51bGxhYmxlQm9va2luZz4gfCBOdWxsYWJsZUJvb2tpbmc7XG5cbiAgY291bnQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxDb3VudD4gfCBPYnNlcnZhYmxlPENvdW50PiB8IENvdW50O1xuXG4gIGNyZWF0ZShyZXF1ZXN0OiBDcmVhdGVCb29raW5nSW5wdXQpOiBQcm9taXNlPEJvb2tpbmc+IHwgT2JzZXJ2YWJsZTxCb29raW5nPiB8IEJvb2tpbmc7XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFVwZGF0ZUJvb2tpbmdJbnB1dCk6IFByb21pc2U8Qm9va2luZz4gfCBPYnNlcnZhYmxlPEJvb2tpbmc+IHwgQm9va2luZztcblxuICBkZWxldGUocmVxdWVzdDogSWQpOiBQcm9taXNlPENvdW50PiB8IE9ic2VydmFibGU8Q291bnQ+IHwgQ291bnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCb29raW5nU2VydmljZUNvbnRyb2xsZXJNZXRob2RzKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnN0cnVjdG9yOiBGdW5jdGlvbikge1xuICAgIGNvbnN0IGdycGNNZXRob2RzOiBzdHJpbmdbXSA9IFtcImZpbmRcIiwgXCJmaW5kQnlJZFwiLCBcImZpbmRPbmVcIiwgXCJjb3VudFwiLCBcImNyZWF0ZVwiLCBcInVwZGF0ZVwiLCBcImRlbGV0ZVwiXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY01ldGhvZChcIkJvb2tpbmdTZXJ2aWNlXCIsIG1ldGhvZCkoY29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZF0sIG1ldGhvZCwgZGVzY3JpcHRvcik7XG4gICAgfVxuICAgIGNvbnN0IGdycGNTdHJlYW1NZXRob2RzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIGdycGNTdHJlYW1NZXRob2RzKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yOiBhbnkgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG1ldGhvZCk7XG4gICAgICBHcnBjU3RyZWFtTWV0aG9kKFwiQm9va2luZ1NlcnZpY2VcIiwgbWV0aG9kKShjb25zdHJ1Y3Rvci5wcm90b3R5cGVbbWV0aG9kXSwgbWV0aG9kLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBCT09LSU5HX1NFUlZJQ0VfTkFNRSA9IFwiQm9va2luZ1NlcnZpY2VcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBQYWdlSW5mbywgUGFnZU1ldGEgfSBmcm9tIFwiLi9jb21tb25zXCI7XG5pbXBvcnQgeyBOdWxsVmFsdWUgfSBmcm9tIFwiLi9nb29nbGUvcHJvdG9idWYvc3RydWN0XCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImJyYW5jaFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZUJyYW5jaERhdGEge1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB3YXJkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZUJyYW5jaElucHV0IHtcbiAgaWQ6IG51bWJlcjtcbiAgZGF0YTogVXBkYXRlQnJhbmNoRGF0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVCcmFuY2hJbnB1dCB7XG4gIG5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHBob25lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhZGRyZXNzPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjaXR5Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3YXJkQ29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3Q/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHdhcmQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJhbmNoIHtcbiAgLyoqIGRlZmF1bHQgZmllbGQgKi9cbiAgaWQ6IG51bWJlcjtcbiAgY3JlYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3JlYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRCeT86XG4gICAgfCBzdHJpbmdcbiAgICB8IHVuZGVmaW5lZDtcbiAgLyoqIHJlc2VydmVkIGZpZWxkICovXG4gIG5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHBob25lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhZGRyZXNzPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjaXR5Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3YXJkQ29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3Q/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHdhcmQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJhbmNoRWRnZSB7XG4gIG5vZGU6IEJyYW5jaCB8IHVuZGVmaW5lZDtcbiAgY3Vyc29yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZEJyYW5jaGVzUGF5bG9hZCB7XG4gIGVkZ2VzOiBCcmFuY2hFZGdlW107XG4gIHBhZ2VJbmZvOiBQYWdlSW5mbyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOdWxsYWJsZUJyYW5jaCB7XG4gIG51bGw/OiBOdWxsVmFsdWUgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaD86IEJyYW5jaCB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCcmFuY2hlcyB7XG4gIGJyYW5jaGVzOiBCcmFuY2hbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCcmFuY2hQYWdpbmF0aW9uIHtcbiAgaXRlbXM6IEJyYW5jaFtdO1xuICBtZXRhPzogUGFnZU1ldGEgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBCUkFOQ0hfUEFDS0FHRV9OQU1FID0gXCJicmFuY2hcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImNvbW1vbnNcIjtcblxuZXhwb3J0IGVudW0gRVNvcnREaXJlY3Rpb24ge1xuICBBU0MgPSAwLFxuICBERVNDID0gMSxcbn1cblxuZXhwb3J0IGVudW0gRVVzZXJHZW5kZXIge1xuICBNQUxFID0gMCxcbiAgRkVNQUxFID0gMSxcbiAgT1RIRVIgPSAyLFxufVxuXG5leHBvcnQgZW51bSBFVXNlclJvbGUge1xuICBVU0VSID0gMCxcbiAgQURNSU4gPSAxLFxuICBTVVBFUl9BRE1JTiA9IDIsXG4gIE1BU1RFUl9XT1JLRVIgPSAzLFxuICBBU1NJU1RBTlRfV09SS0VSID0gNCxcbiAgTUFOQUdFUiA9IDUsXG4gIFJFQ0VQVElPTklTVCA9IDYsXG59XG5cbmV4cG9ydCBlbnVtIEVDdXN0b21lckxldmVsIHtcbiAgTk9STUFMID0gMCxcbiAgU0lMVkVSID0gMSxcbiAgR09MRCA9IDIsXG4gIFBMQVRJTlVNID0gMyxcbn1cblxuZXhwb3J0IGVudW0gRVVzZXJTdGF0dXMge1xuICBQRU5ESU5HID0gMCxcbiAgQUNUSVZFID0gMSxcbiAgQkFOTkVEID0gMixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJZCB7XG4gIGlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JRdWVyeSB7XG4gIGZpbHRlcjogc3RyaW5nO1xuICBwYWdpbmc6IFBhZ2luZyB8IHVuZGVmaW5lZDtcbiAgc29ydGluZzogU29ydFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdxbFF1ZXJ5IHtcbiAgc2VsZWN0OiBzdHJpbmdbXTtcbiAgd2hlcmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG9yZGVyQnk6IHN0cmluZ1tdO1xuICBsaW1pdD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgYmVmb3JlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhZnRlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlSW5mbyB7XG4gIHN0YXJ0Q3Vyc29yPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBlbmRDdXJzb3I/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGhhc05leHRQYWdlPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgaGFzUHJldmlvdXNQYWdlPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb3VudCB7XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG90YWxDb3VudCB7XG4gIHRvdGFsQ291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeVJlcXVlc3Qge1xuICB3aGVyZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGFnZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbGltaXQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlYXJjaEtleT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgb3JkZXJCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgb3JkZXJEaXJlY3Rpb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ydCB7XG4gIGZpZWxkOiBzdHJpbmc7XG4gIGRpcmVjdGlvbjogRVNvcnREaXJlY3Rpb247XG4gIG51bGxzOiBTb3J0X1NvcnROdWxscztcbn1cblxuZXhwb3J0IGVudW0gU29ydF9Tb3J0TnVsbHMge1xuICBOVUxMU19GSVJTVCA9IDAsXG4gIE5VTExTX0xBU1QgPSAxLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luZyB7XG4gIGxpbWl0OiBudW1iZXI7XG4gIG9mZnNldDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VNZXRhIHtcbiAgdG90YWw/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHRvdGFsUGFnZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcGFnZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbGltaXQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBDT01NT05TX1BBQ0tBR0VfTkFNRSA9IFwiY29tbW9uc1wiO1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IFBhZ2VNZXRhIH0gZnJvbSBcIi4vY29tbW9uc1wiO1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJkZXZpY2VcIjtcblxuZXhwb3J0IGVudW0gRURldmljZU9zIHtcbiAgQU5EUk9JRCA9IDAsXG4gIElPUyA9IDEsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlIHtcbiAgLyoqIGRlZmF1bHQgZmllbGQgKi9cbiAgaWQ6IG51bWJlcjtcbiAgY3JlYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3JlYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRCeT86XG4gICAgfCBzdHJpbmdcbiAgICB8IHVuZGVmaW5lZDtcbiAgLyoqIHJlc2VydmVkIGZpZWxkICovXG4gIG9zPzogRURldmljZU9zIHwgdW5kZWZpbmVkO1xuICBkZXZpY2VJZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdG9rZW4/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVEZXZpY2VJbnB1dCB7XG4gIG9zOiBFRGV2aWNlT3M7XG4gIGRldmljZUlkOiBzdHJpbmc7XG4gIHRva2VuOiBzdHJpbmc7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VzIHtcbiAgaXRlbXM6IERldmljZVtdO1xuICBtZXRhPzogUGFnZU1ldGEgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBERVZJQ0VfUEFDS0FHRV9OQU1FID0gXCJkZXZpY2VcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBHcnBjTWV0aG9kLCBHcnBjU3RyZWFtTWV0aG9kIH0gZnJvbSBcIkBuZXN0anMvbWljcm9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBCcmFuY2gsIEJyYW5jaGVzLCBCcmFuY2hQYWdpbmF0aW9uLCBDcmVhdGVCcmFuY2hJbnB1dCwgTnVsbGFibGVCcmFuY2gsIFVwZGF0ZUJyYW5jaElucHV0IH0gZnJvbSBcIi4vYnJhbmNoXCI7XG5pbXBvcnQgeyBDb3VudCwgSWQsIFBhZ2VJbmZvLCBQYWdlTWV0YSwgUXVlcnlSZXF1ZXN0IH0gZnJvbSBcIi4vY29tbW9uc1wiO1xuaW1wb3J0IHsgTnVsbFZhbHVlIH0gZnJvbSBcIi4vZ29vZ2xlL3Byb3RvYnVmL3N0cnVjdFwiO1xuaW1wb3J0IHsgQ3JlYXRlR3JvdXBJbnB1dCwgR3JvdXAsIEdyb3VwUGFnaW5hdGlvbiwgTnVsbGFibGVHcm91cCwgVXBkYXRlR3JvdXBJbnB1dCB9IGZyb20gXCIuL2dyb3VwXCI7XG5pbXBvcnQge1xuICBDcmVhdGVTZXJ2aWNlSW5wdXQsXG4gIEZpbmRTZXJ2aWNlT2Zmc2V0UGFnaW5hdGlvbixcbiAgRmluZFNlcnZpY2VzUGF5bG9hZCxcbiAgTnVsbGFibGVTZXJ2aWNlLFxuICBTZXJ2aWNlLFxuICBVcGRhdGVTZXJ2aWNlSW5wdXQsXG59IGZyb20gXCIuL3NlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwibWVyY2hhbnRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVNZXJjaGFudERhdGEge1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjaXR5Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3YXJkQ29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3Q/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHdhcmQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlTWVyY2hhbnRJbnB1dCB7XG4gIGlkOiBudW1iZXI7XG4gIGRhdGE6IFVwZGF0ZU1lcmNoYW50RGF0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVJbnB1dCB7XG4gIG5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHBob25lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhZGRyZXNzPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1c2VySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNpdHlDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkaXN0cmljdENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHdhcmRDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjaXR5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkaXN0cmljdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgd2FyZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXJjaGFudCB7XG4gIC8qKiBkZWZhdWx0IGZpZWxkICovXG4gIGlkOiBudW1iZXI7XG4gIGNyZWF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNyZWF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQnk/OlxuICAgIHwgc3RyaW5nXG4gICAgfCB1bmRlZmluZWQ7XG4gIC8qKiByZXNlcnZlZCBmaWVsZCAqL1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjaXR5Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3RDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3YXJkQ29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2l0eT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGlzdHJpY3Q/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHdhcmQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVyY2hhbnRFZGdlIHtcbiAgbm9kZTogTWVyY2hhbnQgfCB1bmRlZmluZWQ7XG4gIGN1cnNvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRNZXJjaGFudHNQYXlsb2FkIHtcbiAgZWRnZXM6IE1lcmNoYW50RWRnZVtdO1xuICBwYWdlSW5mbzogUGFnZUluZm8gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnVsbGFibGVNZXJjaGFudCB7XG4gIG51bGw/OiBOdWxsVmFsdWUgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50PzogTWVyY2hhbnQgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTWVyY2hhbnRSZXNwb25zZSB7XG4gIG1lcmNoYW50OiBNZXJjaGFudCB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoOiBCcmFuY2ggfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVyY2hhbnRzIHtcbiAgbWVyY2hhbnRzOiBNZXJjaGFudFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lcmNoYW50UGFnaW5hdGlvbiB7XG4gIGl0ZW1zOiBNZXJjaGFudFtdO1xuICBtZXRhPzogUGFnZU1ldGEgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBNRVJDSEFOVF9QQUNLQUdFX05BTUUgPSBcIm1lcmNoYW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVyY2hhbnRTZXJ2aWNlQ2xpZW50IHtcbiAgZmluZChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPE1lcmNoYW50UGFnaW5hdGlvbj47XG5cbiAgZmluZEFsbChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPE1lcmNoYW50cz47XG5cbiAgZmluZE9uZShyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPE51bGxhYmxlTWVyY2hhbnQ+O1xuXG4gIGNyZWF0ZShyZXF1ZXN0OiBDcmVhdGVJbnB1dCk6IE9ic2VydmFibGU8Q3JlYXRlTWVyY2hhbnRSZXNwb25zZT47XG5cbiAgY291bnQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxDb3VudD47XG5cbiAgZmluZEJ5SWQocmVxdWVzdDogSWQpOiBPYnNlcnZhYmxlPE51bGxhYmxlTWVyY2hhbnQ+O1xuXG4gIC8qKiBicmFuY2ggKi9cblxuICBicmFuY2gocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxOdWxsYWJsZUJyYW5jaD47XG5cbiAgZmluZEJyYW5jaGVzKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8QnJhbmNoUGFnaW5hdGlvbj47XG5cbiAgYnJhbmNoZXMocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxCcmFuY2hlcz47XG5cbiAgZmluZEJyYW5jaEJ5SWQocmVxdWVzdDogSWQpOiBPYnNlcnZhYmxlPE51bGxhYmxlQnJhbmNoPjtcblxuICBjcmVhdGVCcmFuY2gocmVxdWVzdDogQ3JlYXRlQnJhbmNoSW5wdXQpOiBPYnNlcnZhYmxlPEJyYW5jaD47XG5cbiAgdXBkYXRlQnJhbmNoKHJlcXVlc3Q6IFVwZGF0ZUJyYW5jaElucHV0KTogT2JzZXJ2YWJsZTxCcmFuY2g+O1xuXG4gIGRlbGV0ZUJyYW5jaChyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8Q291bnQ+O1xuXG4gIC8qKiBncm91cCAqL1xuXG4gIGdyb3VwKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8TnVsbGFibGVHcm91cD47XG5cbiAgZ3JvdXBzKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8R3JvdXBQYWdpbmF0aW9uPjtcblxuICBmaW5kR3JvdXBCeUlkKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxOdWxsYWJsZUdyb3VwPjtcblxuICBjcmVhdGVHcm91cChyZXF1ZXN0OiBDcmVhdGVHcm91cElucHV0KTogT2JzZXJ2YWJsZTxHcm91cD47XG5cbiAgdXBkYXRlR3JvdXAocmVxdWVzdDogVXBkYXRlR3JvdXBJbnB1dCk6IE9ic2VydmFibGU8R3JvdXA+O1xuXG4gIGRlbGV0ZUdyb3VwKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxDb3VudD47XG5cbiAgLyoqIHNlcnZpY2UgKi9cblxuICBzZXJ2aWNlKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8TnVsbGFibGVTZXJ2aWNlPjtcblxuICBzZXJ2aWNlcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPEZpbmRTZXJ2aWNlc1BheWxvYWQ+O1xuXG4gIGZpbmRTZXJ2aWNlQnlJZChyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8TnVsbGFibGVTZXJ2aWNlPjtcblxuICBjcmVhdGVTZXJ2aWNlKHJlcXVlc3Q6IENyZWF0ZVNlcnZpY2VJbnB1dCk6IE9ic2VydmFibGU8U2VydmljZT47XG5cbiAgdXBkYXRlU2VydmljZShyZXF1ZXN0OiBVcGRhdGVTZXJ2aWNlSW5wdXQpOiBPYnNlcnZhYmxlPFNlcnZpY2U+O1xuXG4gIGRlbGV0ZVNlcnZpY2UocmVxdWVzdDogSWQpOiBPYnNlcnZhYmxlPENvdW50PjtcblxuICBmaW5kU2VydmljZU9mZnNldFBhZ2luYXRpb24ocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxGaW5kU2VydmljZU9mZnNldFBhZ2luYXRpb24+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lcmNoYW50U2VydmljZUNvbnRyb2xsZXIge1xuICBmaW5kKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8TWVyY2hhbnRQYWdpbmF0aW9uPiB8IE9ic2VydmFibGU8TWVyY2hhbnRQYWdpbmF0aW9uPiB8IE1lcmNoYW50UGFnaW5hdGlvbjtcblxuICBmaW5kQWxsKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8TWVyY2hhbnRzPiB8IE9ic2VydmFibGU8TWVyY2hhbnRzPiB8IE1lcmNoYW50cztcblxuICBmaW5kT25lKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8TnVsbGFibGVNZXJjaGFudD4gfCBPYnNlcnZhYmxlPE51bGxhYmxlTWVyY2hhbnQ+IHwgTnVsbGFibGVNZXJjaGFudDtcblxuICBjcmVhdGUoXG4gICAgcmVxdWVzdDogQ3JlYXRlSW5wdXQsXG4gICk6IFByb21pc2U8Q3JlYXRlTWVyY2hhbnRSZXNwb25zZT4gfCBPYnNlcnZhYmxlPENyZWF0ZU1lcmNoYW50UmVzcG9uc2U+IHwgQ3JlYXRlTWVyY2hhbnRSZXNwb25zZTtcblxuICBjb3VudChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPENvdW50PiB8IE9ic2VydmFibGU8Q291bnQ+IHwgQ291bnQ7XG5cbiAgZmluZEJ5SWQocmVxdWVzdDogSWQpOiBQcm9taXNlPE51bGxhYmxlTWVyY2hhbnQ+IHwgT2JzZXJ2YWJsZTxOdWxsYWJsZU1lcmNoYW50PiB8IE51bGxhYmxlTWVyY2hhbnQ7XG5cbiAgLyoqIGJyYW5jaCAqL1xuXG4gIGJyYW5jaChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPE51bGxhYmxlQnJhbmNoPiB8IE9ic2VydmFibGU8TnVsbGFibGVCcmFuY2g+IHwgTnVsbGFibGVCcmFuY2g7XG5cbiAgZmluZEJyYW5jaGVzKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8QnJhbmNoUGFnaW5hdGlvbj4gfCBPYnNlcnZhYmxlPEJyYW5jaFBhZ2luYXRpb24+IHwgQnJhbmNoUGFnaW5hdGlvbjtcblxuICBicmFuY2hlcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPEJyYW5jaGVzPiB8IE9ic2VydmFibGU8QnJhbmNoZXM+IHwgQnJhbmNoZXM7XG5cbiAgZmluZEJyYW5jaEJ5SWQocmVxdWVzdDogSWQpOiBQcm9taXNlPE51bGxhYmxlQnJhbmNoPiB8IE9ic2VydmFibGU8TnVsbGFibGVCcmFuY2g+IHwgTnVsbGFibGVCcmFuY2g7XG5cbiAgY3JlYXRlQnJhbmNoKHJlcXVlc3Q6IENyZWF0ZUJyYW5jaElucHV0KTogUHJvbWlzZTxCcmFuY2g+IHwgT2JzZXJ2YWJsZTxCcmFuY2g+IHwgQnJhbmNoO1xuXG4gIHVwZGF0ZUJyYW5jaChyZXF1ZXN0OiBVcGRhdGVCcmFuY2hJbnB1dCk6IFByb21pc2U8QnJhbmNoPiB8IE9ic2VydmFibGU8QnJhbmNoPiB8IEJyYW5jaDtcblxuICBkZWxldGVCcmFuY2gocmVxdWVzdDogSWQpOiBQcm9taXNlPENvdW50PiB8IE9ic2VydmFibGU8Q291bnQ+IHwgQ291bnQ7XG5cbiAgLyoqIGdyb3VwICovXG5cbiAgZ3JvdXAocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxOdWxsYWJsZUdyb3VwPiB8IE9ic2VydmFibGU8TnVsbGFibGVHcm91cD4gfCBOdWxsYWJsZUdyb3VwO1xuXG4gIGdyb3VwcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPEdyb3VwUGFnaW5hdGlvbj4gfCBPYnNlcnZhYmxlPEdyb3VwUGFnaW5hdGlvbj4gfCBHcm91cFBhZ2luYXRpb247XG5cbiAgZmluZEdyb3VwQnlJZChyZXF1ZXN0OiBJZCk6IFByb21pc2U8TnVsbGFibGVHcm91cD4gfCBPYnNlcnZhYmxlPE51bGxhYmxlR3JvdXA+IHwgTnVsbGFibGVHcm91cDtcblxuICBjcmVhdGVHcm91cChyZXF1ZXN0OiBDcmVhdGVHcm91cElucHV0KTogUHJvbWlzZTxHcm91cD4gfCBPYnNlcnZhYmxlPEdyb3VwPiB8IEdyb3VwO1xuXG4gIHVwZGF0ZUdyb3VwKHJlcXVlc3Q6IFVwZGF0ZUdyb3VwSW5wdXQpOiBQcm9taXNlPEdyb3VwPiB8IE9ic2VydmFibGU8R3JvdXA+IHwgR3JvdXA7XG5cbiAgZGVsZXRlR3JvdXAocmVxdWVzdDogSWQpOiBQcm9taXNlPENvdW50PiB8IE9ic2VydmFibGU8Q291bnQ+IHwgQ291bnQ7XG5cbiAgLyoqIHNlcnZpY2UgKi9cblxuICBzZXJ2aWNlKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8TnVsbGFibGVTZXJ2aWNlPiB8IE9ic2VydmFibGU8TnVsbGFibGVTZXJ2aWNlPiB8IE51bGxhYmxlU2VydmljZTtcblxuICBzZXJ2aWNlcyhyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPEZpbmRTZXJ2aWNlc1BheWxvYWQ+IHwgT2JzZXJ2YWJsZTxGaW5kU2VydmljZXNQYXlsb2FkPiB8IEZpbmRTZXJ2aWNlc1BheWxvYWQ7XG5cbiAgZmluZFNlcnZpY2VCeUlkKHJlcXVlc3Q6IElkKTogUHJvbWlzZTxOdWxsYWJsZVNlcnZpY2U+IHwgT2JzZXJ2YWJsZTxOdWxsYWJsZVNlcnZpY2U+IHwgTnVsbGFibGVTZXJ2aWNlO1xuXG4gIGNyZWF0ZVNlcnZpY2UocmVxdWVzdDogQ3JlYXRlU2VydmljZUlucHV0KTogUHJvbWlzZTxTZXJ2aWNlPiB8IE9ic2VydmFibGU8U2VydmljZT4gfCBTZXJ2aWNlO1xuXG4gIHVwZGF0ZVNlcnZpY2UocmVxdWVzdDogVXBkYXRlU2VydmljZUlucHV0KTogUHJvbWlzZTxTZXJ2aWNlPiB8IE9ic2VydmFibGU8U2VydmljZT4gfCBTZXJ2aWNlO1xuXG4gIGRlbGV0ZVNlcnZpY2UocmVxdWVzdDogSWQpOiBQcm9taXNlPENvdW50PiB8IE9ic2VydmFibGU8Q291bnQ+IHwgQ291bnQ7XG5cbiAgZmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCxcbiAgKTogUHJvbWlzZTxGaW5kU2VydmljZU9mZnNldFBhZ2luYXRpb24+IHwgT2JzZXJ2YWJsZTxGaW5kU2VydmljZU9mZnNldFBhZ2luYXRpb24+IHwgRmluZFNlcnZpY2VPZmZzZXRQYWdpbmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTWVyY2hhbnRTZXJ2aWNlQ29udHJvbGxlck1ldGhvZHMoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29uc3RydWN0b3I6IEZ1bmN0aW9uKSB7XG4gICAgY29uc3QgZ3JwY01ldGhvZHM6IHN0cmluZ1tdID0gW1xuICAgICAgXCJmaW5kXCIsXG4gICAgICBcImZpbmRBbGxcIixcbiAgICAgIFwiZmluZE9uZVwiLFxuICAgICAgXCJjcmVhdGVcIixcbiAgICAgIFwiY291bnRcIixcbiAgICAgIFwiZmluZEJ5SWRcIixcbiAgICAgIFwiYnJhbmNoXCIsXG4gICAgICBcImZpbmRCcmFuY2hlc1wiLFxuICAgICAgXCJicmFuY2hlc1wiLFxuICAgICAgXCJmaW5kQnJhbmNoQnlJZFwiLFxuICAgICAgXCJjcmVhdGVCcmFuY2hcIixcbiAgICAgIFwidXBkYXRlQnJhbmNoXCIsXG4gICAgICBcImRlbGV0ZUJyYW5jaFwiLFxuICAgICAgXCJncm91cFwiLFxuICAgICAgXCJncm91cHNcIixcbiAgICAgIFwiZmluZEdyb3VwQnlJZFwiLFxuICAgICAgXCJjcmVhdGVHcm91cFwiLFxuICAgICAgXCJ1cGRhdGVHcm91cFwiLFxuICAgICAgXCJkZWxldGVHcm91cFwiLFxuICAgICAgXCJzZXJ2aWNlXCIsXG4gICAgICBcInNlcnZpY2VzXCIsXG4gICAgICBcImZpbmRTZXJ2aWNlQnlJZFwiLFxuICAgICAgXCJjcmVhdGVTZXJ2aWNlXCIsXG4gICAgICBcInVwZGF0ZVNlcnZpY2VcIixcbiAgICAgIFwiZGVsZXRlU2VydmljZVwiLFxuICAgICAgXCJmaW5kU2VydmljZU9mZnNldFBhZ2luYXRpb25cIixcbiAgICBdO1xuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIGdycGNNZXRob2RzKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yOiBhbnkgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG1ldGhvZCk7XG4gICAgICBHcnBjTWV0aG9kKFwiTWVyY2hhbnRTZXJ2aWNlXCIsIG1ldGhvZCkoY29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZF0sIG1ldGhvZCwgZGVzY3JpcHRvcik7XG4gICAgfVxuICAgIGNvbnN0IGdycGNTdHJlYW1NZXRob2RzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIGdycGNTdHJlYW1NZXRob2RzKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yOiBhbnkgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG1ldGhvZCk7XG4gICAgICBHcnBjU3RyZWFtTWV0aG9kKFwiTWVyY2hhbnRTZXJ2aWNlXCIsIG1ldGhvZCkoY29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZF0sIG1ldGhvZCwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgTUVSQ0hBTlRfU0VSVklDRV9OQU1FID0gXCJNZXJjaGFudFNlcnZpY2VcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBFVXNlclJvbGUsIEVVc2VyU3RhdHVzLCBQYWdlTWV0YSB9IGZyb20gXCIuL2NvbW1vbnNcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwibWVyY2hhbnRfdXNlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lcmNoYW50VXNlciB7XG4gIC8qKiBkZWZhdWx0IGZpZWxkICovXG4gIGlkOiBudW1iZXI7XG4gIGNyZWF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNyZWF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkZWxldGVkQnk/OlxuICAgIHwgc3RyaW5nXG4gICAgfCB1bmRlZmluZWQ7XG4gIC8qKiByZXNlcnZlZCBmaWVsZCAqL1xuICByb2xlPzogRVVzZXJSb2xlIHwgdW5kZWZpbmVkO1xuICBzdGF0dXM/OiBFVXNlclN0YXR1cyB8IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBicmFuY2hJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVNZXJjaGFudFVzZXJJbnB1dCB7XG4gIHJvbGU/OiBFVXNlclJvbGUgfCB1bmRlZmluZWQ7XG4gIHN0YXR1cz86IEVVc2VyU3RhdHVzIHwgdW5kZWZpbmVkO1xuICB1c2VySWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lcmNoYW50VXNlcnMge1xuICBpdGVtczogTWVyY2hhbnRVc2VyW107XG4gIG1ldGE/OiBQYWdlTWV0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVNZXJjaGFudFVzZXJEYXRhIHtcbiAgcm9sZT86IEVVc2VyUm9sZSB8IHVuZGVmaW5lZDtcbiAgc3RhdHVzPzogRVVzZXJTdGF0dXMgfCB1bmRlZmluZWQ7XG4gIHVzZXJJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgYnJhbmNoSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlTWVyY2hhbnRVc2VySW5wdXQge1xuICBpZDogbnVtYmVyO1xuICBkYXRhOiBVcGRhdGVNZXJjaGFudFVzZXJEYXRhIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgTUVSQ0hBTlRfVVNFUl9QQUNLQUdFX05BTUUgPSBcIm1lcmNoYW50X3VzZXJcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBHcnBjTWV0aG9kLCBHcnBjU3RyZWFtTWV0aG9kIH0gZnJvbSBcIkBuZXN0anMvbWljcm9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBRdWVyeVJlcXVlc3QgfSBmcm9tIFwiLi9jb21tb25zXCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcIm5vdGlmaWNhdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbiB7XG4gIGlkOiBudW1iZXI7XG4gIHN0YXR1czogc3RyaW5nO1xuICBjdXN0b21lcklkOiBudW1iZXI7XG4gIGJyYW5jaFNlcnZpY2VJZDogbnVtYmVyO1xuICBzdGFydFRpbWU6IHN0cmluZztcbiAgZW5kVGltZTogc3RyaW5nO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBjcmVhdGVkQXQ6IHN0cmluZztcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XG4gIG5vdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50SWQ6IG51bWJlcjtcbiAgYnJhbmNoSWQ6IG51bWJlcjtcbiAgaXNDdXN0b21lckNhbmNlbD86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIGNhbmNlbFJlYXNvbj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYm9va2luZ0RhdGU6IHN0cmluZztcbiAgaXNBZG1pblVwZGF0ZT86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIGFkbWluVXBkYXRlSWQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2VOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lck5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyRW1haWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyQWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25FZGdlIHtcbiAgbm9kZTogTm90aWZpY2F0aW9uIHwgdW5kZWZpbmVkO1xuICBjdXJzb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kQWxsQm9va2luZ3NQYWdpbmF0aW9uIHtcbiAgaXRlbXM6IE5vdGlmaWNhdGlvbltdO1xuICBwYWdlOiBudW1iZXI7XG4gIHRvdGFsUGFnZTogbnVtYmVyO1xuICB0b3RhbDogbnVtYmVyO1xuICBsaW1pdDogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgTk9USUZJQ0FUSU9OX1BBQ0tBR0VfTkFNRSA9IFwibm90aWZpY2F0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9va2luZ1NlcnZpY2VHcnBjQ2xpZW50IHtcbiAgZmluZEFsbChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPEZpbmRBbGxCb29raW5nc1BhZ2luYXRpb24+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJvb2tpbmdTZXJ2aWNlR3JwY0NvbnRyb2xsZXIge1xuICBmaW5kQWxsKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCxcbiAgKTogUHJvbWlzZTxGaW5kQWxsQm9va2luZ3NQYWdpbmF0aW9uPiB8IE9ic2VydmFibGU8RmluZEFsbEJvb2tpbmdzUGFnaW5hdGlvbj4gfCBGaW5kQWxsQm9va2luZ3NQYWdpbmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQm9va2luZ1NlcnZpY2VHcnBjQ29udHJvbGxlck1ldGhvZHMoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29uc3RydWN0b3I6IEZ1bmN0aW9uKSB7XG4gICAgY29uc3QgZ3JwY01ldGhvZHM6IHN0cmluZ1tdID0gW1wiZmluZEFsbFwiXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY01ldGhvZChcIkJvb2tpbmdTZXJ2aWNlR3JwY1wiLCBtZXRob2QpKGNvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2RdLCBtZXRob2QsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICBjb25zdCBncnBjU3RyZWFtTWV0aG9kczogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjU3RyZWFtTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY1N0cmVhbU1ldGhvZChcIkJvb2tpbmdTZXJ2aWNlR3JwY1wiLCBtZXRob2QpKGNvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2RdLCBtZXRob2QsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEJPT0tJTkdfU0VSVklDRV9HUlBDX1NFUlZJQ0VfTkFNRSA9IFwiQm9va2luZ1NlcnZpY2VHcnBjXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgUGFnZUluZm8gfSBmcm9tIFwiLi9jb21tb25zXCI7XG5pbXBvcnQgeyBOdWxsVmFsdWUgfSBmcm9tIFwiLi9nb29nbGUvcHJvdG9idWYvc3RydWN0XCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcInNlcnZpY2VcIjtcblxuZXhwb3J0IGVudW0gRVNlcnZpY2VTaG93VHlwZSB7XG4gIEJPVEggPSAwLFxuICBDQVNISUVSID0gMSxcbiAgQk9PS0lORyA9IDIsXG4gIE5PTkUgPSAzLFxufVxuXG5leHBvcnQgZW51bSBFU2VydmljZVR5cGUge1xuICBTRVJWSUNFID0gMCxcbiAgUFJPRFVDVCA9IDEsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlU2VydmljZURhdGEge1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBza3U/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBpbWFnZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVTZXJ2aWNlSW5wdXQge1xuICBpZDogbnVtYmVyO1xuICBkYXRhOiBVcGRhdGVTZXJ2aWNlRGF0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVTZXJ2aWNlSW5wdXQge1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBncm91cElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBwcmljZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgaW5pdGlhbFByaWNlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjYXBpdGFsUHJpY2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGR1cmF0aW9uSG91cj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZHVyYXRpb25NaW51dGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNrdT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29kZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGltYWdlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB0eXBlPzogRVNlcnZpY2VUeXBlIHwgdW5kZWZpbmVkO1xuICBzaG93VHlwZT86IEVTZXJ2aWNlU2hvd1R5cGUgfCB1bmRlZmluZWQ7XG4gIGNhblByaW50YWJsZUludm9pY2U/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2Uge1xuICAvKiogZGVmYXVsdCBmaWVsZCAqL1xuICBpZDogbnVtYmVyO1xuICBjcmVhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjcmVhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVwZGF0ZWRCeT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGVsZXRlZEJ5PzpcbiAgICB8IHN0cmluZ1xuICAgIHwgdW5kZWZpbmVkO1xuICAvKiogcmVzZXJ2ZWQgZmllbGQgKi9cbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZ3JvdXBJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcHJpY2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGluaXRpYWxQcmljZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY2FwaXRhbFByaWNlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkdXJhdGlvbkhvdXI/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGR1cmF0aW9uTWludXRlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBza3U/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBpbWFnZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdHlwZT86IEVTZXJ2aWNlVHlwZSB8IHVuZGVmaW5lZDtcbiAgc2hvd1R5cGU/OiBFU2VydmljZVNob3dUeXBlIHwgdW5kZWZpbmVkO1xuICBjYW5QcmludGFibGVJbnZvaWNlPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlRWRnZSB7XG4gIG5vZGU6IFNlcnZpY2UgfCB1bmRlZmluZWQ7XG4gIGN1cnNvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRTZXJ2aWNlc1BheWxvYWQge1xuICBlZGdlczogU2VydmljZUVkZ2VbXTtcbiAgcGFnZUluZm86IFBhZ2VJbmZvIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE51bGxhYmxlU2VydmljZSB7XG4gIG51bGw/OiBOdWxsVmFsdWUgfCB1bmRlZmluZWQ7XG4gIHNlcnZpY2U/OiBTZXJ2aWNlIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRTZXJ2aWNlT2Zmc2V0UGFnaW5hdGlvbiB7XG4gIGl0ZW1zOiBTZXJ2aWNlW107XG4gIHRvdGFsUGFnZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgdG90YWw/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHBhZ2U/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxpbWl0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgU0VSVklDRV9QQUNLQUdFX05BTUUgPSBcInNlcnZpY2VcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBHcnBjTWV0aG9kLCBHcnBjU3RyZWFtTWV0aG9kIH0gZnJvbSBcIkBuZXN0anMvbWljcm9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBDb3VudCwgRUN1c3RvbWVyTGV2ZWwsIEVVc2VyR2VuZGVyLCBFVXNlclJvbGUsIEVVc2VyU3RhdHVzLCBJZCwgUGFnZU1ldGEsIFF1ZXJ5UmVxdWVzdCB9IGZyb20gXCIuL2NvbW1vbnNcIjtcbmltcG9ydCB7IENyZWF0ZURldmljZUlucHV0LCBEZXZpY2UsIERldmljZXMgfSBmcm9tIFwiLi9kZXZpY2VcIjtcbmltcG9ydCB7IE51bGxWYWx1ZSB9IGZyb20gXCIuL2dvb2dsZS9wcm90b2J1Zi9zdHJ1Y3RcIjtcbmltcG9ydCB7IENyZWF0ZU1lcmNoYW50VXNlcklucHV0LCBNZXJjaGFudFVzZXIgfSBmcm9tIFwiLi9tZXJjaGFudF91c2VyXCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImR1Y3BoX3VzZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgLyoqIGRlZmF1bHQgZmllbGQgKi9cbiAgaWQ6IG51bWJlcjtcbiAgY3JlYXRlZEF0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRBdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3JlYXRlZEJ5Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB1cGRhdGVkQnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRlbGV0ZWRCeT86XG4gICAgfCBzdHJpbmdcbiAgICB8IHVuZGVmaW5lZDtcbiAgLyoqIHJlc2VydmVkIGZpZWxkICovXG4gIGVtYWlsPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwYXNzd29yZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgc3RhdHVzPzogRVVzZXJTdGF0dXMgfCB1bmRlZmluZWQ7XG4gIGZ1bGxOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjb250YWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZU51bWJlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZG9iRGF5PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkb2JNb250aD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZG9iWWVhcj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcm9sZT86IEVVc2VyUm9sZSB8IHVuZGVmaW5lZDtcbiAgZ2VuZGVyPzogRVVzZXJHZW5kZXIgfCB1bmRlZmluZWQ7XG4gIG9jY3VwYXRpb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGF2YXRhcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHJlZmVycmVyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWZlcnJlckNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGxldmVsPzogRUN1c3RvbWVyTGV2ZWwgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyQ29kZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZmFjZWJvb2s/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHphbG9QaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaGVpZ2h0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3ZWlnaHQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG1lbWJlckNhcmRObz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29tcGFueT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdGF4Tm8/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG5vdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbGF0ZWRVc2VyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWxhdGVkVXNlclJvbGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbGF0ZWRVc2VyUGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBsYXRpdHVkZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbG9uZ2l0dWRlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBpc1JldGFpbEN1c3RvbWVyPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVVc2VySW5wdXQge1xuICBlbWFpbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGFzc3dvcmQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHN0YXR1cz86IEVVc2VyU3RhdHVzIHwgdW5kZWZpbmVkO1xuICBmdWxsTmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29udGFjdD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcGhvbmVOdW1iZXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRvYkRheT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZG9iTW9udGg/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRvYlllYXI/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHJvbGU/OiBFVXNlclJvbGUgfCB1bmRlZmluZWQ7XG4gIGdlbmRlcj86IEVVc2VyR2VuZGVyIHwgdW5kZWZpbmVkO1xuICBvY2N1cGF0aW9uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhdmF0YXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGFkZHJlc3M/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNpdHlDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkaXN0cmljdENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHdhcmRDb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICByZWZlcnJlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVmZXJyZXJDb2RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBsZXZlbD86IEVDdXN0b21lckxldmVsIHwgdW5kZWZpbmVkO1xuICBjdXN0b21lckNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGZhY2Vib29rPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB6YWxvUGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGhlaWdodD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2VpZ2h0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBtZW1iZXJDYXJkTm8/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvbXBhbnk/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHRheE5vPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBub3RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWxhdGVkVXNlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVsYXRlZFVzZXJSb2xlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWxhdGVkVXNlclBob25lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBicmFuY2hJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbGF0aXR1ZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxvbmdpdHVkZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbWVyY2hhbnRJZD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgaXNSZXRhaWxDdXN0b21lcj86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlVXNlclJlcXVlc3Qge1xuICB1c2VyOiBDcmVhdGVVc2VySW5wdXQgfCB1bmRlZmluZWQ7XG4gIGRldmljZT86IENyZWF0ZURldmljZUlucHV0IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRPbmVVc2VyIHtcbiAgdXNlcjogVXNlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVVc2VySW5wdXQge1xuICBpZDogbnVtYmVyO1xuICBkYXRhOiBVcGRhdGVVc2VyRGF0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOdWxsYWJsZVVzZXIge1xuICBudWxsPzogTnVsbFZhbHVlIHwgdW5kZWZpbmVkO1xuICB1c2VyPzogVXNlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVVc2VyRGF0YSB7XG4gIGVtYWlsPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwYXNzd29yZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgc3RhdHVzPzogRVVzZXJTdGF0dXMgfCB1bmRlZmluZWQ7XG4gIGZ1bGxOYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjb250YWN0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwaG9uZU51bWJlcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZG9iRGF5PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBkb2JNb250aD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgZG9iWWVhcj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcm9sZT86IEVVc2VyUm9sZSB8IHVuZGVmaW5lZDtcbiAgZ2VuZGVyPzogRVVzZXJHZW5kZXIgfCB1bmRlZmluZWQ7XG4gIG9jY3VwYXRpb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGF2YXRhcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgYWRkcmVzcz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY2l0eUNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGRpc3RyaWN0Q29kZT86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgd2FyZENvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHJlZmVycmVyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWZlcnJlckNvZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGxldmVsPzogRUN1c3RvbWVyTGV2ZWwgfCB1bmRlZmluZWQ7XG4gIGN1c3RvbWVyQ29kZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZmFjZWJvb2s/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHphbG9QaG9uZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaGVpZ2h0PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB3ZWlnaHQ/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG1lbWJlckNhcmRObz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29tcGFueT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdGF4Tm8/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG5vdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbGF0ZWRVc2VyPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWxhdGVkVXNlclJvbGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbGF0ZWRVc2VyUGhvbmU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGJyYW5jaElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudElkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZE9wZXJhdG9ySW5wdXQge1xuICB1c2VyOiBDcmVhdGVVc2VySW5wdXQgfCB1bmRlZmluZWQ7XG4gIG1lcmNoYW50VXNlcj86IENyZWF0ZU1lcmNoYW50VXNlcklucHV0IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkbWluVXBkYXRlQ3VzdG9tZXJJbnB1dCB7XG4gIGlkOiBudW1iZXI7XG4gIHVzZXI6IFVwZGF0ZVVzZXJEYXRhIHwgdW5kZWZpbmVkO1xuICBtZXJjaGFudFVzZXI/OiBDcmVhdGVNZXJjaGFudFVzZXJJbnB1dCB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyUGFnaW5hdGlvbiB7XG4gIGl0ZW1zOiBVc2VyW107XG4gIG1ldGE/OiBQYWdlTWV0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IERVQ1BIX1VTRVJfUEFDS0FHRV9OQU1FID0gXCJkdWNwaF91c2VyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclNlcnZpY2VDbGllbnQge1xuICBmaW5kKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8VXNlclBhZ2luYXRpb24+O1xuXG4gIGNyZWF0ZShyZXF1ZXN0OiBDcmVhdGVVc2VyUmVxdWVzdCk6IE9ic2VydmFibGU8RmluZE9uZVVzZXI+O1xuXG4gIGZpbmRCeUlkKHJlcXVlc3Q6IElkKTogT2JzZXJ2YWJsZTxOdWxsYWJsZVVzZXI+O1xuXG4gIGZpbmRPbmUocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxOdWxsYWJsZVVzZXI+O1xuXG4gIGNvdW50KHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IE9ic2VydmFibGU8Q291bnQ+O1xuXG4gIHVwZGF0ZShyZXF1ZXN0OiBVcGRhdGVVc2VySW5wdXQpOiBPYnNlcnZhYmxlPEZpbmRPbmVVc2VyPjtcblxuICBkZWxldGVDdXN0b21lcihyZXF1ZXN0OiBJZCk6IE9ic2VydmFibGU8Q291bnQ+O1xuXG4gIC8qKiBkZXZpY2UgKi9cblxuICBjcmVhdGVEZXZpY2UocmVxdWVzdDogQ3JlYXRlRGV2aWNlSW5wdXQpOiBPYnNlcnZhYmxlPERldmljZT47XG5cbiAgZmluZERldmljZXMocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxEZXZpY2VzPjtcblxuICB1cHNlcnREZXZpY2UocmVxdWVzdDogQ3JlYXRlRGV2aWNlSW5wdXQpOiBPYnNlcnZhYmxlPERldmljZT47XG5cbiAgLyoqIG1lcmNoYW50X3VzZXIgKi9cblxuICBjcmVhdGVNZXJjaGFudFVzZXIocmVxdWVzdDogQ3JlYXRlTWVyY2hhbnRVc2VySW5wdXQpOiBPYnNlcnZhYmxlPE1lcmNoYW50VXNlcj47XG5cbiAgYWRkT3BlcmF0b3IocmVxdWVzdDogQWRkT3BlcmF0b3JJbnB1dCk6IE9ic2VydmFibGU8RmluZE9uZVVzZXI+O1xuXG4gIGNvdW50Q3VzdG9tZXIocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxDb3VudD47XG5cbiAgLyoqIGN1c3RvbWVyICovXG5cbiAgYWRkQ3VzdG9tZXIocmVxdWVzdDogQWRkT3BlcmF0b3JJbnB1dCk6IE9ic2VydmFibGU8RmluZE9uZVVzZXI+O1xuXG4gIHVwZGF0ZUN1c3RvbWVyKHJlcXVlc3Q6IEFkbWluVXBkYXRlQ3VzdG9tZXJJbnB1dCk6IE9ic2VydmFibGU8RmluZE9uZVVzZXI+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTZXJ2aWNlQ29udHJvbGxlciB7XG4gIGZpbmQocmVxdWVzdDogUXVlcnlSZXF1ZXN0KTogUHJvbWlzZTxVc2VyUGFnaW5hdGlvbj4gfCBPYnNlcnZhYmxlPFVzZXJQYWdpbmF0aW9uPiB8IFVzZXJQYWdpbmF0aW9uO1xuXG4gIGNyZWF0ZShyZXF1ZXN0OiBDcmVhdGVVc2VyUmVxdWVzdCk6IFByb21pc2U8RmluZE9uZVVzZXI+IHwgT2JzZXJ2YWJsZTxGaW5kT25lVXNlcj4gfCBGaW5kT25lVXNlcjtcblxuICBmaW5kQnlJZChyZXF1ZXN0OiBJZCk6IFByb21pc2U8TnVsbGFibGVVc2VyPiB8IE9ic2VydmFibGU8TnVsbGFibGVVc2VyPiB8IE51bGxhYmxlVXNlcjtcblxuICBmaW5kT25lKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8TnVsbGFibGVVc2VyPiB8IE9ic2VydmFibGU8TnVsbGFibGVVc2VyPiB8IE51bGxhYmxlVXNlcjtcblxuICBjb3VudChyZXF1ZXN0OiBRdWVyeVJlcXVlc3QpOiBQcm9taXNlPENvdW50PiB8IE9ic2VydmFibGU8Q291bnQ+IHwgQ291bnQ7XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFVwZGF0ZVVzZXJJbnB1dCk6IFByb21pc2U8RmluZE9uZVVzZXI+IHwgT2JzZXJ2YWJsZTxGaW5kT25lVXNlcj4gfCBGaW5kT25lVXNlcjtcblxuICBkZWxldGVDdXN0b21lcihyZXF1ZXN0OiBJZCk6IFByb21pc2U8Q291bnQ+IHwgT2JzZXJ2YWJsZTxDb3VudD4gfCBDb3VudDtcblxuICAvKiogZGV2aWNlICovXG5cbiAgY3JlYXRlRGV2aWNlKHJlcXVlc3Q6IENyZWF0ZURldmljZUlucHV0KTogUHJvbWlzZTxEZXZpY2U+IHwgT2JzZXJ2YWJsZTxEZXZpY2U+IHwgRGV2aWNlO1xuXG4gIGZpbmREZXZpY2VzKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8RGV2aWNlcz4gfCBPYnNlcnZhYmxlPERldmljZXM+IHwgRGV2aWNlcztcblxuICB1cHNlcnREZXZpY2UocmVxdWVzdDogQ3JlYXRlRGV2aWNlSW5wdXQpOiBQcm9taXNlPERldmljZT4gfCBPYnNlcnZhYmxlPERldmljZT4gfCBEZXZpY2U7XG5cbiAgLyoqIG1lcmNoYW50X3VzZXIgKi9cblxuICBjcmVhdGVNZXJjaGFudFVzZXIocmVxdWVzdDogQ3JlYXRlTWVyY2hhbnRVc2VySW5wdXQpOiBQcm9taXNlPE1lcmNoYW50VXNlcj4gfCBPYnNlcnZhYmxlPE1lcmNoYW50VXNlcj4gfCBNZXJjaGFudFVzZXI7XG5cbiAgYWRkT3BlcmF0b3IocmVxdWVzdDogQWRkT3BlcmF0b3JJbnB1dCk6IFByb21pc2U8RmluZE9uZVVzZXI+IHwgT2JzZXJ2YWJsZTxGaW5kT25lVXNlcj4gfCBGaW5kT25lVXNlcjtcblxuICBjb3VudEN1c3RvbWVyKHJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCk6IFByb21pc2U8Q291bnQ+IHwgT2JzZXJ2YWJsZTxDb3VudD4gfCBDb3VudDtcblxuICAvKiogY3VzdG9tZXIgKi9cblxuICBhZGRDdXN0b21lcihyZXF1ZXN0OiBBZGRPcGVyYXRvcklucHV0KTogUHJvbWlzZTxGaW5kT25lVXNlcj4gfCBPYnNlcnZhYmxlPEZpbmRPbmVVc2VyPiB8IEZpbmRPbmVVc2VyO1xuXG4gIHVwZGF0ZUN1c3RvbWVyKHJlcXVlc3Q6IEFkbWluVXBkYXRlQ3VzdG9tZXJJbnB1dCk6IFByb21pc2U8RmluZE9uZVVzZXI+IHwgT2JzZXJ2YWJsZTxGaW5kT25lVXNlcj4gfCBGaW5kT25lVXNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJTZXJ2aWNlQ29udHJvbGxlck1ldGhvZHMoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29uc3RydWN0b3I6IEZ1bmN0aW9uKSB7XG4gICAgY29uc3QgZ3JwY01ldGhvZHM6IHN0cmluZ1tdID0gW1xuICAgICAgXCJmaW5kXCIsXG4gICAgICBcImNyZWF0ZVwiLFxuICAgICAgXCJmaW5kQnlJZFwiLFxuICAgICAgXCJmaW5kT25lXCIsXG4gICAgICBcImNvdW50XCIsXG4gICAgICBcInVwZGF0ZVwiLFxuICAgICAgXCJkZWxldGVDdXN0b21lclwiLFxuICAgICAgXCJjcmVhdGVEZXZpY2VcIixcbiAgICAgIFwiZmluZERldmljZXNcIixcbiAgICAgIFwidXBzZXJ0RGV2aWNlXCIsXG4gICAgICBcImNyZWF0ZU1lcmNoYW50VXNlclwiLFxuICAgICAgXCJhZGRPcGVyYXRvclwiLFxuICAgICAgXCJjb3VudEN1c3RvbWVyXCIsXG4gICAgICBcImFkZEN1c3RvbWVyXCIsXG4gICAgICBcInVwZGF0ZUN1c3RvbWVyXCIsXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBncnBjTWV0aG9kcykge1xuICAgICAgY29uc3QgZGVzY3JpcHRvcjogYW55ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRob2QpO1xuICAgICAgR3JwY01ldGhvZChcIlVzZXJTZXJ2aWNlXCIsIG1ldGhvZCkoY29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZF0sIG1ldGhvZCwgZGVzY3JpcHRvcik7XG4gICAgfVxuICAgIGNvbnN0IGdycGNTdHJlYW1NZXRob2RzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIGdycGNTdHJlYW1NZXRob2RzKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yOiBhbnkgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG1ldGhvZCk7XG4gICAgICBHcnBjU3RyZWFtTWV0aG9kKFwiVXNlclNlcnZpY2VcIiwgbWV0aG9kKShjb25zdHJ1Y3Rvci5wcm90b3R5cGVbbWV0aG9kXSwgbWV0aG9kLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBVU0VSX1NFUlZJQ0VfTkFNRSA9IFwiVXNlclNlcnZpY2VcIjtcbiIsImltcG9ydCB7XG4gIEJvb2tpbmdDb25maWcsXG4gIEJvb2tpbmdQcm90byxcbiAgTWVyY2hhbnRDb25maWcsXG4gIE1lcmNoYW50UHJvdG8sXG4gIE5vdGlmaWNhdGlvbkNvbmZpZyxcbiAgTm90aWZpY2F0aW9uUHJvdG8sXG4gIFVzZXJDb25maWcsXG4gIFVzZXJQcm90byxcbn0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5pbXBvcnQgeyBUcmFuc3BvcnQgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuXG5leHBvcnQgY29uc3QgVXNlclNlcnZlcjogYW55ID0ge1xuICBuYW1lOiBVc2VyUHJvdG8uRFVDUEhfVVNFUl9QQUNLQUdFX05BTUUsXG4gIHRyYW5zcG9ydDogVHJhbnNwb3J0LkdSUEMsXG4gIG9wdGlvbnM6IHtcbiAgICBwYWNrYWdlOiBVc2VyUHJvdG8uRFVDUEhfVVNFUl9QQUNLQUdFX05BTUUsXG4gICAgcHJvdG9QYXRoOiBVc2VyQ29uZmlnLnBhdGgsXG4gICAgdXJsOiBgJHtVc2VyQ29uZmlnLmxvY2FsSG9zdG5hbWV9OiR7VXNlckNvbmZpZy5wb3J0fWAsXG4gICAgbG9hZGVyOiBVc2VyQ29uZmlnLmxvYWRlcixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBNZXJjaGFudFNlcnZlcjogYW55ID0ge1xuICBuYW1lOiBNZXJjaGFudFByb3RvLk1FUkNIQU5UX1BBQ0tBR0VfTkFNRSxcbiAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuR1JQQyxcbiAgb3B0aW9uczoge1xuICAgIHBhY2thZ2U6IE1lcmNoYW50UHJvdG8uTUVSQ0hBTlRfUEFDS0FHRV9OQU1FLFxuICAgIHByb3RvUGF0aDogTWVyY2hhbnRDb25maWcucGF0aCxcbiAgICB1cmw6IGAke01lcmNoYW50Q29uZmlnLmxvY2FsSG9zdG5hbWV9OiR7TWVyY2hhbnRDb25maWcucG9ydH1gLFxuICAgIGxvYWRlcjogTWVyY2hhbnRDb25maWcubG9hZGVyLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEJvb2tpbmdTZXJ2ZXI6IGFueSA9IHtcbiAgbmFtZTogQm9va2luZ1Byb3RvLkJPT0tJTkdfUEFDS0FHRV9OQU1FLFxuICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5HUlBDLFxuICBvcHRpb25zOiB7XG4gICAgcGFja2FnZTogQm9va2luZ1Byb3RvLkJPT0tJTkdfUEFDS0FHRV9OQU1FLFxuICAgIHByb3RvUGF0aDogQm9va2luZ0NvbmZpZy5wYXRoLFxuICAgIHVybDogYCR7Qm9va2luZ0NvbmZpZy5sb2NhbEhvc3RuYW1lfToke0Jvb2tpbmdDb25maWcucG9ydH1gLFxuICAgIGxvYWRlcjogQm9va2luZ0NvbmZpZy5sb2FkZXIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uU2VydmVyOiBhbnkgPSB7XG4gIG5hbWU6IE5vdGlmaWNhdGlvblByb3RvLk5PVElGSUNBVElPTl9QQUNLQUdFX05BTUUsXG4gIHRyYW5zcG9ydDogVHJhbnNwb3J0LkdSUEMsXG4gIG9wdGlvbnM6IHtcbiAgICBwYWNrYWdlOiBOb3RpZmljYXRpb25Qcm90by5OT1RJRklDQVRJT05fUEFDS0FHRV9OQU1FLFxuICAgIHByb3RvUGF0aDogTm90aWZpY2F0aW9uQ29uZmlnLnBhdGgsXG4gICAgdXJsOiBgJHtOb3RpZmljYXRpb25Db25maWcubG9jYWxIb3N0bmFtZX06JHtOb3RpZmljYXRpb25Db25maWcucG9ydH1gLFxuICAgIGxvYWRlcjogTm90aWZpY2F0aW9uQ29uZmlnLmxvYWRlcixcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYWxsSGFuZGxlciwgRXhlY3V0aW9uQ29udGV4dCwgSW5qZWN0YWJsZSwgTG9nZ2VyLCBOZXN0SW50ZXJjZXB0b3IgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcnBjTG9nSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBOZXN0SW50ZXJjZXB0b3Ige1xuICBwcml2YXRlIHJlYWRvbmx5IGxvZ2dlciA9IG5ldyBMb2dnZXIoR3JwY0xvZ0ludGVyY2VwdG9yLm5hbWUpO1xuXG4gIGludGVyY2VwdChjb250ZXh0OiBFeGVjdXRpb25Db250ZXh0LCBuZXh0OiBDYWxsSGFuZGxlcik6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGNvbnN0IHJlcUJvZHkgPSBjb250ZXh0LnN3aXRjaFRvUnBjKCkuZ2V0RGF0YSgpO1xuICAgIGNvbnN0IG1ldGhvZCA9IGNvbnRleHQuZ2V0SGFuZGxlcigpLm5hbWU7XG4gICAgY29uc3QgY29udGV4dFR5cGUgPSBjb250ZXh0LmdldFR5cGUoKTtcbiAgICBjb25zdCBjb250cm9sbGVyTmFtZSA9IGNvbnRleHQuZ2V0Q2xhc3MoKS5uYW1lO1xuICAgIHRoaXMubG9nZ2VyLmxvZyhgR1JQQy1SRVFVRVNUOiBbJHtjb250ZXh0VHlwZX1dOlske2NvbnRyb2xsZXJOYW1lfV06WyR7bWV0aG9kfV06LT4gJHtKU09OLnN0cmluZ2lmeShyZXFCb2R5KX1gKTtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUoKS5waXBlKFxuICAgICAgdGFwKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhgR1JQQy1SRVNQT05TRTogWyR7Y29udGV4dFR5cGV9XTpbJHtjb250cm9sbGVyTmFtZX1dOlske21ldGhvZH1dfWApO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi90cmFuc2Zvcm0uaW50ZXJjZXB0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9ncnBjLWxvZy5pbnRlcmNlcHRvcic7XG4iLCJpbXBvcnQgeyBDYWxsSGFuZGxlciwgRXhlY3V0aW9uQ29udGV4dCwgSW5qZWN0YWJsZSwgTG9nZ2VyLCBOZXN0SW50ZXJjZXB0b3IgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBvbWl0IH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGludGVyZmFjZSBNZXRhSW50ZXJmYWNlIHtcbiAgcGFyYW1zOiBhbnk7XG4gIHN0YXR1czogYm9vbGVhbjtcbiAgZXJyb3JDb2RlPzogc3RyaW5nO1xuICB0aW1lc3RhbXA6IERhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2U8VD4ge1xuICBtZXRhPzogc3RyaW5nO1xuICBzdGF0dXNDb2RlPzogbnVtYmVyO1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICByZXN1bHQ6IFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VIYW5kbGVEYXRhIHtcbiAgY29kZT86IG51bWJlcjtcbiAgbWV0YT86IHN0cmluZztcbiAgc3RhdHVzQ29kZT86IG51bWJlcjtcbiAgbWVzc2FnZT86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zZm9ybUludGVyY2VwdG9yIGltcGxlbWVudHMgTmVzdEludGVyY2VwdG9yIHtcbiAgcHJpdmF0ZSBsb2dnZXIgPSBuZXcgTG9nZ2VyKFRyYW5zZm9ybUludGVyY2VwdG9yLm5hbWUpO1xuXG4gIGludGVyY2VwdChjb250ZXh0OiBFeGVjdXRpb25Db250ZXh0LCBuZXh0OiBDYWxsSGFuZGxlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBjb250ZXh0LnN3aXRjaFRvSHR0cCgpLmdldFJlcXVlc3QoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGNvbnRleHQuc3dpdGNoVG9IdHRwKCkuZ2V0UmVzcG9uc2U8UmVzcG9uc2VIYW5kbGVEYXRhPigpO1xuICAgIGNvbnN0IHsgbWV0aG9kLCB1cmwsIGJvZHksIHBhcmFtcywgc3RhdHVzLCBxdWVyeSB9ID0gcmVxdWVzdDtcbiAgICB0aGlzLmxvZ2dlci5sb2coYFJFUSBbJHttZXRob2R9ICR7dXJsfV06LT4gJHtKU09OLnN0cmluZ2lmeShib2R5KX1gKTtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUoKS5waXBlKFxuICAgICAgbWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0ge1xuICAgICAgICAgIG1ldGE6IEpTT04uc3RyaW5naWZ5KHsgcGFyYW1zOiBwYXJhbXMsIHN0YXR1czogc3RhdHVzLCBxdWVyeSwgdGltZXN0YW1wOiBuZXcgRGF0ZSgpIH0pLFxuICAgICAgICAgIG1lc3NhZ2U6IGRhdGE/Lm1lc3NhZ2UgPz8gcmVzcG9uc2UubWVzc2FnZSA/PyByZXF1ZXN0Py5tZXNzYWdlID8/ICdPaycsXG4gICAgICAgICAgY29kZTogZGF0YT8uc3RhdHVzQ29kZSA/PyBzdGF0dXMgPz8gcmVzcG9uc2UuY29kZSA/PyByZXNwb25zZS5zdGF0dXNDb2RlLFxuICAgICAgICAgIHN0YXR1c0NvZGU6IGRhdGE/LnN0YXR1c0NvZGUgPz8gc3RhdHVzID8/IHJlc3BvbnNlLnN0YXR1c0NvZGUsXG4gICAgICAgICAgcmVzdWx0OiBvbWl0KGRhdGEsIFsnbWVzc2FnZSddKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IElQb3N0Z3Jlc0VudiB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RTZWNyZXRzU2VydmljZSB7XG4gIGVudjogc3RyaW5nO1xuXG4gIHVzZXJTZXJ2aWNlRGF0YWJhc2U6IElQb3N0Z3Jlc0VudjtcblxuICBtZXJjaGFudFNlcnZpY2VEYXRhYmFzZTogSVBvc3RncmVzRW52O1xuXG4gIGJvb2tpbmdTZXJ2aWNlRGF0YWJhc2U6IElQb3N0Z3Jlc0VudjtcblxuICBub3RpZmljYXRpb25TZXJ2aWNlRGF0YWJhc2U6IElQb3N0Z3Jlc0Vudjtcbn1cbiIsImltcG9ydCB7IEdsb2JhbCwgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlIH0gZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7IFNlY3JldHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcblxuQEdsb2JhbCgpXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHtcbiAgICAgIGVudkZpbGVQYXRoOiBbJy5lbnYnXSxcbiAgICB9KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQWJzdHJhY3RTZWNyZXRzU2VydmljZSxcbiAgICAgIHVzZUNsYXNzOiBTZWNyZXRzU2VydmljZSxcbiAgICB9LFxuICBdLFxuICBleHBvcnRzOiBbQWJzdHJhY3RTZWNyZXRzU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNlY3JldHNNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFNlY3JldHNTZXJ2aWNlIH0gZnJvbSAnLi9hZGFwdGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlY3JldHNTZXJ2aWNlIGV4dGVuZHMgQ29uZmlnU2VydmljZSBpbXBsZW1lbnRzIEFic3RyYWN0U2VjcmV0c1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZW52ID0gdGhpcy5nZXQoJ0VOVicpO1xuXG4gIHBvcnQgPSB0aGlzLmdldDxudW1iZXI+KCdQT1JUJyk7XG5cbiAgdXNlclNlcnZpY2VEYXRhYmFzZSA9IHtcbiAgICBob3N0OiB0aGlzLmdldDxzdHJpbmc+KCdVU0VSX0RCX0hPU1QnKSxcbiAgICBwb3J0OiB0aGlzLmdldDxudW1iZXI+KCdVU0VSX0RCX1BPUlQnKSxcbiAgICB1c2VybmFtZTogdGhpcy5nZXQ8c3RyaW5nPignVVNFUl9EQl9VU0VSTkFNRScpLFxuICAgIHBhc3N3b3JkOiB0aGlzLmdldDxzdHJpbmc+KCdVU0VSX0RCX1BBU1NXT1JEJyksXG4gICAgZGF0YWJhc2U6IHRoaXMuZ2V0PHN0cmluZz4oJ1VTRVJfREJfREFUQUJBU0UnKSxcbiAgfTtcblxuICBtZXJjaGFudFNlcnZpY2VEYXRhYmFzZSA9IHtcbiAgICBob3N0OiB0aGlzLmdldDxzdHJpbmc+KCdNRVJDSEFOVF9EQl9IT1NUJyksXG4gICAgcG9ydDogdGhpcy5nZXQ8bnVtYmVyPignTUVSQ0hBTlRfREJfUE9SVCcpLFxuICAgIHVzZXJuYW1lOiB0aGlzLmdldDxzdHJpbmc+KCdNRVJDSEFOVF9EQl9VU0VSTkFNRScpLFxuICAgIHBhc3N3b3JkOiB0aGlzLmdldDxzdHJpbmc+KCdNRVJDSEFOVF9EQl9QQVNTV09SRCcpLFxuICAgIGRhdGFiYXNlOiB0aGlzLmdldDxzdHJpbmc+KCdNRVJDSEFOVF9EQl9EQVRBQkFTRScpLFxuICB9O1xuXG4gIGJvb2tpbmdTZXJ2aWNlRGF0YWJhc2UgPSB7XG4gICAgaG9zdDogdGhpcy5nZXQ8c3RyaW5nPignQk9PS0lOR19EQl9IT1NUJyksXG4gICAgcG9ydDogdGhpcy5nZXQ8bnVtYmVyPignQk9PS0lOR19EQl9QT1JUJyksXG4gICAgdXNlcm5hbWU6IHRoaXMuZ2V0PHN0cmluZz4oJ0JPT0tJTkdfREJfVVNFUk5BTUUnKSxcbiAgICBwYXNzd29yZDogdGhpcy5nZXQ8c3RyaW5nPignQk9PS0lOR19EQl9QQVNTV09SRCcpLFxuICAgIGRhdGFiYXNlOiB0aGlzLmdldDxzdHJpbmc+KCdCT09LSU5HX0RCX0RBVEFCQVNFJyksXG4gIH07XG5cbiAgbm90aWZpY2F0aW9uU2VydmljZURhdGFiYXNlID0ge1xuICAgIGhvc3Q6IHRoaXMuZ2V0PHN0cmluZz4oJ05PVElGSUNBVElPTl9EQl9IT1NUJyksXG4gICAgcG9ydDogdGhpcy5nZXQ8bnVtYmVyPignTk9USUZJQ0FUSU9OX0RCX1BPUlQnKSxcbiAgICB1c2VybmFtZTogdGhpcy5nZXQ8c3RyaW5nPignTk9USUZJQ0FUSU9OX0RCX1VTRVJOQU1FJyksXG4gICAgcGFzc3dvcmQ6IHRoaXMuZ2V0PHN0cmluZz4oJ05PVElGSUNBVElPTl9EQl9QQVNTV09SRCcpLFxuICAgIGRhdGFiYXNlOiB0aGlzLmdldDxzdHJpbmc+KCdOT1RJRklDQVRJT05fREJfREFUQUJBU0UnKSxcbiAgfTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBncnBjL2dycGMtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvbWljcm9zZXJ2aWNlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL3NlcXVlbGl6ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcmdvbjJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9vcGVyYXRvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IElOZXN0TWljcm9zZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTmVzdEZhY3RvcnkgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuaW1wb3J0IHsgTWljcm9zZXJ2aWNlT3B0aW9ucyB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBVc2VyU2VydmVyIH0gZnJvbSAnQGxpYnMvZ3JwYy10eXBlcyc7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IGFwcDogSU5lc3RNaWNyb3NlcnZpY2UgPSBhd2FpdCBOZXN0RmFjdG9yeS5jcmVhdGVNaWNyb3NlcnZpY2U8TWljcm9zZXJ2aWNlT3B0aW9ucz4oQXBwTW9kdWxlLCBVc2VyU2VydmVyKTtcblxuICByZXR1cm4gYXBwLmxpc3RlbigpO1xufVxuXG5tYWluKCkudGhlbigoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCd1c2VyLXNlcnZpY2UgbWljcm9zZXJ2aWNlIGlzIHJ1bm5pbmcnKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9