!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),o.ProdegeCouponInjection=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponResult = void 0;
var CouponResult = /** @class */ (function () {
    function CouponResult(couponCode, total, savings, extCode) {
        this.total = total;
        this.extCode = extCode;
        this.message = savings > 0 ? 'success' : 'failure';
        this.couponCode = couponCode;
        this.savings = savings;
    }
    return CouponResult;
}());
exports.CouponResult = CouponResult;

},{}],2:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCouponWorker = void 0;
var coupon_worker_1 = _dereq_("./coupon-worker");
var coupon_worker_state_1 = _dereq_("./coupon-worker-state");
var coupon_result_1 = _dereq_("./coupon-result");
var ApiCouponWorker = /** @class */ (function (_super) {
    __extends(ApiCouponWorker, _super);
    function ApiCouponWorker(extensionId, extCode, elementIds, customFuncs) {
        if (customFuncs === void 0) { customFuncs = null; }
        var _this = _super.call(this, extensionId, extCode, elementIds, customFuncs) || this;
        _this.state = null;
        return _this;
    }
    ApiCouponWorker.prototype.applyPromoCode = function (code, dom) {
        return this.merchantWorker.applyPromoCode(code, this.state.originalTotal);
    };
    ApiCouponWorker.prototype.save = function (couponCode, currentTotal) {
        var dom;
        if (currentTotal.total) {
            dom = currentTotal.dom;
            currentTotal = currentTotal.total;
        }
        else {
            currentTotal = currentTotal;
        }
        var savings = this.state.originalTotal - currentTotal;
        var result = new coupon_result_1.CouponResult(couponCode, currentTotal, savings, this.extCode);
        this.broadcastCouponResult(result);
        this.state.results.push(result);
        if (dom)
            return dom;
    };
    // if there is a coupon already applied when the tester begins, we want to remove it and get a true bassline
    // for the original total
    ApiCouponWorker.prototype.preRemove = function (dom) {
        return __awaiter(this, void 0, void 0, function () {
            var total, x_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, this.merchantWorker.removeCoupon(dom)];
                    case 1:
                        dom = _a.sent();
                        if (!this.merchantWorker.calculateTotal) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.merchantWorker.calculateTotal(dom)];
                    case 2:
                        total = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.calculateTotal(dom)];
                    case 4:
                        total = _a.sent();
                        _a.label = 5;
                    case 5: return [4 /*yield*/, this.getTotalAsCorrectType(total)];
                    case 6:
                        total = _a.sent();
                        this.state.originalTotal = total;
                        this.broadcastInitialTotal(this.extCode, total);
                        return [2 /*return*/, dom];
                    case 7:
                        x_1 = _a.sent();
                        throw 'APICouponWorker.preProcess()';
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ApiCouponWorker.prototype.tryPreRemove = function (dom) {
        return __awaiter(this, void 0, void 0, function () {
            var x_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.state.preRemove) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.preRemove(dom)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, dom];
                    case 3:
                        x_2 = _a.sent();
                        throw x_2;
                    case 4: return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, dom];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ApiCouponWorker.prototype.processFinalResult = function (dom) {
        return __awaiter(this, void 0, void 0, function () {
            var bestSavingsResult, logCouponResults, showFinalResult, finalTotal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bestSavingsResult = this.getBestSavingsResult(this.state);
                        logCouponResults = new CustomEvent('logCouponResults', { detail: { couponResults: this.state.results, extCode: this.extCode } });
                        document.dispatchEvent(logCouponResults);
                        showFinalResult = null;
                        finalTotal = null;
                        if (!(bestSavingsResult && bestSavingsResult.savings > 0)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.merchantWorker.removeCoupon(dom)];
                    case 1:
                        dom = _a.sent();
                        return [4 /*yield*/, this.applyPromoCode(bestSavingsResult.couponCode, dom)];
                    case 2:
                        dom = _a.sent();
                        if (!this.merchantWorker.calculateTotal) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.merchantWorker.calculateTotal(dom)];
                    case 3:
                        finalTotal = _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.calculateTotal(dom)];
                    case 5:
                        finalTotal = _a.sent();
                        _a.label = 6;
                    case 6: return [4 /*yield*/, this.getTotalAsCorrectType(finalTotal)];
                    case 7:
                        finalTotal = _a.sent();
                        showFinalResult = this.sendFinalResult(bestSavingsResult, showFinalResult, finalTotal);
                        return [3 /*break*/, 10];
                    case 8:
                        finalTotal = this.calculateTotal();
                        showFinalResult = new CustomEvent("showFinalResult", { "detail": { "success": false, "total": finalTotal, extCode: this.extCode, 'shouldRefresh': true } });
                        document.dispatchEvent(showFinalResult);
                        return [4 /*yield*/, this.merchantWorker.removeCoupon()];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ApiCouponWorker.prototype.sendFinalResult = function (bestSavingsResult, showFinalResult, finalTotal) {
        var amount = bestSavingsResult.savings.toFixed(2);
        showFinalResult = new CustomEvent("showFinalResult", { "detail": { "couponCode": bestSavingsResult.couponCode, "amount": amount, "total": finalTotal, "success": true, extCode: this.extCode, 'shouldRefresh': true } });
        document.dispatchEvent(showFinalResult);
        return showFinalResult;
    };
    ApiCouponWorker.prototype.process = function (couponCodes, dom) {
        return __awaiter(this, void 0, void 0, function () {
            var err, coupon, startProcessCoupon, total, x_3, logMerchantPageError;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.state) {
                            this.state = new coupon_worker_state_1.CouponWorkerState();
                        }
                        if (!(this.state.currentIndex === couponCodes.length)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.processFinalResult(dom)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 15];
                    case 2:
                        if (!(this.state.currentIndex > couponCodes.length - 1)) return [3 /*break*/, 3];
                        browserApi.runtime.sendMessage(this.extensionId, {
                            action: "LogError",
                            description: err,
                            merchant: "http://" + document.domain
                        });
                        err = "Merchant: " + document.domain + ": error: No 'currentCoupon'.";
                        console.error(err);
                        return [3 /*break*/, 15];
                    case 3:
                        _a.trys.push([3, 12, 13, 15]);
                        coupon = couponCodes[this.state.currentIndex];
                        return [4 /*yield*/, this.tryPreRemove(dom)];
                    case 4:
                        dom = _a.sent();
                        return [4 /*yield*/, this.merchantWorker.removeCoupon(dom)];
                    case 5:
                        dom = _a.sent();
                        startProcessCoupon = new CustomEvent("startProcessCoupon", { "detail": { "coupon": coupon, extCode: this.extCode } });
                        document.dispatchEvent(startProcessCoupon);
                        return [4 /*yield*/, this.applyPromoCode(coupon, dom)];
                    case 6:
                        dom = _a.sent();
                        if (!this.merchantWorker.calculateTotal) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.merchantWorker.calculateTotal(dom)];
                    case 7:
                        total = _a.sent();
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, this.calculateTotal(dom)];
                    case 9:
                        total = _a.sent();
                        _a.label = 10;
                    case 10: return [4 /*yield*/, this.getTotalAsCorrectType(total)];
                    case 11:
                        total = _a.sent();
                        this.save(coupon, total);
                        return [3 /*break*/, 15];
                    case 12:
                        x_3 = _a.sent();
                        logMerchantPageError = null;
                        console.log("failing in api process, heres the error: ", x_3);
                        // We don't want our new C@C error paradigm to catch any/all errors, just the ones with an errorMessage type "hardFail"
                        if (x_3 && x_3.type === "hardFail") {
                            logMerchantPageError = new CustomEvent("logMerchantPageError", { "detail": { "errorMessage": x_3.error, "type": "loudFail", extCode: this.extCode } });
                            document.dispatchEvent(logMerchantPageError);
                        }
                        // if something else caused an error, let's log it silently but keep going as it probably did not affect C@C experience"
                        else {
                            console.log(x_3);
                            logMerchantPageError = new CustomEvent("logMerchantPageError", { "detail": { "errorMessage": x_3.error, "type": "silentFail", extCode: this.extCode } });
                            document.dispatchEvent(logMerchantPageError);
                        }
                        return [3 /*break*/, 15];
                    case 13:
                        if (this.state.preRemove) {
                            this.state.preRemove = false;
                        }
                        this.state.currentIndex++;
                        return [4 /*yield*/, this.process(couponCodes, dom)];
                    case 14:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    ApiCouponWorker.prototype.getTotalAsCorrectType = function (total) {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                self = this;
                return [2 /*return*/, new Promise(function (res) {
                        Promise.resolve(total)
                            .then(function (value) {
                            if (!isNaN(parseFloat(value))) {
                                res(parseFloat(value));
                            }
                            else if (value.total && !isNaN(parseFloat(value.total))) {
                                res(parseFloat(value.total));
                            }
                            else {
                                var errMsg = "getTotalAsCorrectType was unable to process correct type.";
                                var logMerchantPageError = new CustomEvent("logMerchantPageError", { "detail": { "errorMessage": errMsg, "type": "silentFail", extCode: self.extCode } });
                                document.dispatchEvent(logMerchantPageError);
                                res(-1);
                            }
                        });
                    })];
            });
        });
    };
    return ApiCouponWorker;
}(coupon_worker_1.CouponWorker));
exports.ApiCouponWorker = ApiCouponWorker;

},{"./coupon-result":1,"./coupon-worker":8,"./coupon-worker-state":6}],3:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncCouponWorker = void 0;
var coupon_worker_1 = _dereq_("./coupon-worker");
var coupon_worker_state_1 = _dereq_("./coupon-worker-state");
var coupon_result_1 = _dereq_("./coupon-result");
var AsyncCouponWorker = /** @class */ (function (_super) {
    __extends(AsyncCouponWorker, _super);
    function AsyncCouponWorker(extensionId, extCode, elementIds, customFuncs) {
        if (customFuncs === void 0) { customFuncs = null; }
        var _this = _super.call(this, extensionId, extCode, elementIds, customFuncs) || this;
        _this.state = null;
        return _this;
    }
    AsyncCouponWorker.prototype.applyPromoCode = function (code) {
        return this.merchantWorker.applyPromoCode(code, this.state.originalTotal);
    };
    AsyncCouponWorker.prototype.save = function (couponCode, currentTotal) {
        var savings = this.state.originalTotal - currentTotal;
        var result = new coupon_result_1.CouponResult(couponCode, currentTotal, savings, this.extCode);
        this.broadcastCouponResult(result);
        this.state.results.push(result);
    };
    // if there is a coupon already applied when the tester begins, we want to remove it and get a true bassline
    // for the original total
    AsyncCouponWorker.prototype.preRemove = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, x_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this.broadcastInitialTotal;
                        _b = [this.extCode];
                        return [4 /*yield*/, this.merchantWorker.calculateTotal()];
                    case 1:
                        _a.apply(this, _b.concat([_e.sent()]));
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 8, , 9]);
                        return [4 /*yield*/, this.merchantWorker.removeCoupon()];
                    case 3:
                        _e.sent();
                        if (!this.merchantWorker.calculateTotal) return [3 /*break*/, 5];
                        _c = this.state;
                        return [4 /*yield*/, this.merchantWorker.calculateTotal()];
                    case 4:
                        _c.originalTotal = _e.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        _d = this.state;
                        return [4 /*yield*/, this.calculateTotal()];
                    case 6:
                        _d.originalTotal = _e.sent();
                        _e.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        x_1 = _e.sent();
                        throw 'AsyncCouponWorker.preProcess()';
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    AsyncCouponWorker.prototype.processFinalResult = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bestSavingsResult, logCouponResults, showFinalResult, finalTotal, amount, finalTotal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bestSavingsResult = this.getBestSavingsResult(this.state);
                        logCouponResults = new CustomEvent('logCouponResults', { detail: { couponResults: this.state.results, extCode: this.extCode } });
                        document.dispatchEvent(logCouponResults);
                        showFinalResult = null;
                        if (!(bestSavingsResult && bestSavingsResult.savings > 0)) return [3 /*break*/, 10];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 9]);
                        return [4 /*yield*/, this.merchantWorker.removeCoupon()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 3: return [4 /*yield*/, this.applyPromoCode(bestSavingsResult.couponCode)];
                    case 4:
                        _a.sent();
                        if (!this.merchantWorker.calculateTotal) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.merchantWorker.calculateTotal()];
                    case 5:
                        finalTotal = _a.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.calculateTotal()];
                    case 7:
                        finalTotal = _a.sent();
                        _a.label = 8;
                    case 8:
                        amount = bestSavingsResult.savings.toFixed(2);
                        showFinalResult = new CustomEvent("showFinalResult", { "detail": { "couponCode": bestSavingsResult.couponCode, "amount": amount, "total": finalTotal, "success": true, extCode: this.extCode } });
                        document.dispatchEvent(showFinalResult);
                        return [7 /*endfinally*/];
                    case 9: return [3 /*break*/, 16];
                    case 10:
                        if (!this.merchantWorker.calculateTotal) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.merchantWorker.calculateTotal()];
                    case 11:
                        finalTotal = _a.sent();
                        return [3 /*break*/, 14];
                    case 12: return [4 /*yield*/, this.calculateTotal()];
                    case 13:
                        finalTotal = _a.sent();
                        _a.label = 14;
                    case 14:
                        showFinalResult = new CustomEvent("showFinalResult", { "detail": { "success": false, "total": finalTotal, extCode: this.extCode } });
                        document.dispatchEvent(showFinalResult);
                        return [4 /*yield*/, this.merchantWorker.removeCoupon()];
                    case 15:
                        _a.sent();
                        _a.label = 16;
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    AsyncCouponWorker.prototype.process = function (couponCodes) {
        return __awaiter(this, void 0, void 0, function () {
            var err, coupon, startProcessCoupon, currentTotal, x_2, logMerchantPageError;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.state) {
                            this.state = new coupon_worker_state_1.CouponWorkerState();
                        }
                        if (!(this.state.currentIndex === couponCodes.length)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.processFinalResult()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 15];
                    case 2:
                        if (!(this.state.currentIndex > couponCodes.length - 1)) return [3 /*break*/, 3];
                        browserApi.runtime.sendMessage(this.extensionId, {
                            action: "LogError",
                            description: err,
                            merchant: "http://" + document.domain
                        });
                        err = "Merchant: " + document.domain + ": error: No 'currentCoupon'.";
                        console.error(err);
                        return [3 /*break*/, 15];
                    case 3:
                        _a.trys.push([3, 12, 13, 15]);
                        coupon = couponCodes[this.state.currentIndex];
                        if (!this.state.preRemove) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.preRemove()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [4 /*yield*/, this.merchantWorker.removeCoupon()];
                    case 6:
                        _a.sent();
                        startProcessCoupon = new CustomEvent("startProcessCoupon", { "detail": { "coupon": coupon, extCode: this.extCode } });
                        document.dispatchEvent(startProcessCoupon);
                        return [4 /*yield*/, this.applyPromoCode(coupon)];
                    case 7:
                        _a.sent();
                        if (!this.merchantWorker.calculateTotal) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.merchantWorker.calculateTotal()];
                    case 8:
                        currentTotal = _a.sent();
                        return [3 /*break*/, 11];
                    case 9: return [4 /*yield*/, this.calculateTotal()];
                    case 10:
                        currentTotal = _a.sent();
                        _a.label = 11;
                    case 11:
                        this.save(coupon, currentTotal);
                        return [3 /*break*/, 15];
                    case 12:
                        x_2 = _a.sent();
                        logMerchantPageError = null;
                        console.log("failing in async process, heres the error: ", x_2);
                        // We don't want our new C@C error paradigm to catch any/all errors, just the ones with an errorMessage type "hardFail"
                        if (x_2 && x_2.type === "hardFail") {
                            logMerchantPageError = new CustomEvent("logMerchantPageError", { "detail": { "errorMessage": x_2.error, "type": "loudFail", extCode: this.extCode } });
                            document.dispatchEvent(logMerchantPageError);
                        }
                        // if something else caused an error, let's log it silently but keep going as it probably did not affect C@C experience"
                        else {
                            console.log(x_2);
                            logMerchantPageError = new CustomEvent("logMerchantPageError", { "detail": { "errorMessage": x_2.error, "type": "silentFail", extCode: this.extCode } });
                            document.dispatchEvent(logMerchantPageError);
                        }
                        this.broadcastError(this.extCode, x_2);
                        return [3 /*break*/, 15];
                    case 13:
                        if (this.state.preRemove) {
                            this.state.preRemove = false;
                        }
                        this.state.currentIndex++;
                        return [4 /*yield*/, this.process(couponCodes)];
                    case 14:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    return AsyncCouponWorker;
}(coupon_worker_1.CouponWorker));
exports.AsyncCouponWorker = AsyncCouponWorker;

},{"./coupon-result":1,"./coupon-worker":8,"./coupon-worker-state":6}],4:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponWorkerFactory = void 0;
var coupon_worker_types_1 = _dereq_("./coupon-worker-types");
var coupon_worker_async_1 = _dereq_("./coupon-worker-async");
var coupon_worker_api_1 = _dereq_("./coupon-worker-api");
var CouponWorkerFactory = /** @class */ (function () {
    function CouponWorkerFactory() {
    }
    CouponWorkerFactory.construct = function (merchantWorker, extensionId, extCode, elementIds, customFuncs) {
        var couponWorker = null;
        switch (merchantWorker.testerType) {
            case coupon_worker_types_1.CouponWorkerTypes.async:
                couponWorker = new coupon_worker_async_1.AsyncCouponWorker(extensionId, extCode, elementIds, customFuncs);
                break;
            case coupon_worker_types_1.CouponWorkerTypes.api:
                couponWorker = new coupon_worker_api_1.ApiCouponWorker(extensionId, extCode, elementIds, customFuncs);
                break;
        }
        couponWorker.init(merchantWorker);
        return couponWorker;
    };
    return CouponWorkerFactory;
}());
exports.CouponWorkerFactory = CouponWorkerFactory;

},{"./coupon-worker-api":2,"./coupon-worker-async":3,"./coupon-worker-types":7}],5:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonCouponWorker = void 0;
var coupon_worker_1 = _dereq_("./coupon-worker");
var merchant_1 = _dereq_("./merchant");
var coupon_worker_state_1 = _dereq_("./coupon-worker-state");
var coupon_result_1 = _dereq_("./coupon-result");
var constants_1 = _dereq_("./processors/instructions/constants");
var JsonCouponWorker = /** @class */ (function (_super) {
    __extends(JsonCouponWorker, _super);
    function JsonCouponWorker(merchantDefinition, extensionId, extCode) {
        var _this = _super.call(this, extensionId, extCode, null) || this;
        _this.isTotalChanged = false;
        _this.extCode = extCode;
        _this.merchant = new merchant_1.Merchant(merchantDefinition);
        _this.extensionId = extensionId;
        return _this;
    }
    JsonCouponWorker.prototype.checkInitialElementsJson = function () {
        return __awaiter(this, void 0, void 0, function () {
            var iecResult, errMessage, e;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.merchant.checkInitialElements()];
                    case 1:
                        iecResult = _a.sent();
                        // TODO: Once sliders are updated, we can send back the full object if we want, or at least a cleaner object, 
                        // and possibly a clearer result for doNotApply (sending back passed=false for now, so that we go to 'View Coupons')
                        if (iecResult.passed === false && !iecResult.doNotApply) {
                            errMessage = "";
                            errMessage = iecResult.preCheckFailed ? " Precheck failed " : errMessage;
                            errMessage = iecResult.missingElements ? errMessage += "Missing Elements: " + iecResult.missingElements + " " : errMessage;
                            errMessage = iecResult.message ? errMessage += " " + iecResult.message + " " : errMessage;
                            this.broadcastError(this.extCode, errMessage);
                        }
                        e = new CustomEvent('initialElementsChecked', { "detail": { "extCode": this.extCode, "passed": iecResult.passed } });
                        document.dispatchEvent(e);
                        return [2 /*return*/];
                }
            });
        });
    };
    JsonCouponWorker.prototype.applyPromoCode = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.merchant.definition.rateLimit) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, _this.merchant.definition.rateLimit); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.applyOrRemovePromoCode(code)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    JsonCouponWorker.prototype.removePromoCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applyOrRemovePromoCode()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // if there is a parameter/code, then apply(), else remove()
    JsonCouponWorker.prototype.applyOrRemovePromoCode = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var isApply, self, observer, isApi, e_1, fnIsTotalChanged, additionalPollCount, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isApply = code ? true : false;
                        self = this;
                        self.isTotalChanged = false;
                        isApi = this.isApi(isApply);
                        if (!isApi) {
                            // setup MutationObserver   
                            observer = new MutationObserver(function (mutationRecords, me) {
                                self.isTotalChanged = true;
                                me.disconnect();
                            });
                            observer.observe(document.querySelector(self.merchant.selectors.cartTotal), {
                                childList: true,
                                subtree: true,
                                characterDataOldValue: true
                            });
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!isApply) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.merchant.applyCoupon(code /*, this.state.originalTotal*/)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.merchant.removeCoupon()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_1 = _a.sent();
                        return [3 /*break*/, 7];
                    case 7:
                        if (!observer) return [3 /*break*/, 12];
                        if (!!self.isTotalChanged) return [3 /*break*/, 11];
                        fnIsTotalChanged = function () {
                            return self.isTotalChanged;
                        };
                        _a.label = 8;
                    case 8:
                        _a.trys.push([8, 10, , 11]);
                        additionalPollCount = 8;
                        if (this.merchant.definition.additionalPollCount || this.merchant.definition.additionalPollCount === 0) {
                            additionalPollCount = this.merchant.definition.additionalPollCount;
                        }
                        return [4 /*yield*/, this.merchant.waitFor(fnIsTotalChanged, additionalPollCount)];
                    case 9:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 10:
                        e_2 = _a.sent();
                        return [3 /*break*/, 11];
                    case 11:
                        observer.disconnect();
                        _a.label = 12;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    // Need to know if Api so we know weather to use Mutation Observer.
    JsonCouponWorker.prototype.isApi = function (isApply) {
        var isApi = false;
        var applyOrRemoveJson;
        if (isApply) {
            applyOrRemoveJson = this.merchant.definition.applyCoupon;
        }
        else {
            applyOrRemoveJson = this.merchant.definition.removeCoupon;
        }
        // Look at array of keys first two levels...
        // Only 2 levels as assuming Async does not break anything, but we wait will a few extra seconds. 
        // if an http call is 3 levels deep it might be a mix of Async and Api and we actually would want to use MO and wait.
        for (var key in applyOrRemoveJson) {
            if (constants_1.Constants.HTTP_TERMS.includes(key)) {
                isApi = true;
            }
            else {
                for (var innerKey in applyOrRemoveJson[key]) {
                    if (constants_1.Constants.HTTP_TERMS.includes(innerKey)) {
                        isApi = true;
                    }
                }
            }
        }
        return isApi;
    };
    JsonCouponWorker.prototype.processFinalResult = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bestSavingsResult, logCouponResults, showFinalResult, finalTotal_1, amount, finalResultDetail, finalTotal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bestSavingsResult = this.getBestSavingsResult(this.state);
                        logCouponResults = new CustomEvent('logCouponResults', { detail: { couponResults: this.state.results, extCode: this.extCode } });
                        document.dispatchEvent(logCouponResults);
                        showFinalResult = null;
                        if (!(bestSavingsResult && bestSavingsResult.savings > 0)) return [3 /*break*/, 7];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 6]);
                        return [4 /*yield*/, this.removePromoCode()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.applyPromoCode(bestSavingsResult.couponCode)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.merchant.calculateTotal()];
                    case 5:
                        finalTotal_1 = _a.sent();
                        amount = bestSavingsResult.savings.toFixed(2);
                        finalResultDetail = { "couponCode": bestSavingsResult.couponCode, "amount": amount, "total": finalTotal_1, "success": true, extCode: this.extCode };
                        if (this.merchant.definition.shouldRefresh) {
                            finalResultDetail['shouldRefresh'] = true;
                        }
                        showFinalResult = new CustomEvent("showFinalResult", { "detail": finalResultDetail });
                        document.dispatchEvent(showFinalResult);
                        return [7 /*endfinally*/];
                    case 6: return [3 /*break*/, 10];
                    case 7: return [4 /*yield*/, this.merchant.calculateTotal()];
                    case 8:
                        finalTotal = _a.sent();
                        showFinalResult = new CustomEvent("showFinalResult", { "detail": { "success": false, "total": finalTotal, extCode: this.extCode } });
                        document.dispatchEvent(showFinalResult);
                        return [4 /*yield*/, this.removePromoCode()];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    // if there is a coupon already applied when the tester begins, we want to remove it and get a true bassline
    // for the original total
    JsonCouponWorker.prototype.preRemove = function () {
        return __awaiter(this, void 0, void 0, function () {
            var initialTotal, _a, x_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.merchant.calculateTotal()];
                    case 1:
                        initialTotal = _b.sent();
                        this.merchant.log('Initial total:', initialTotal);
                        this.broadcastInitialTotal(this.extCode, initialTotal);
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, this.removePromoCode()];
                    case 3:
                        _b.sent();
                        _a = this.state;
                        return [4 /*yield*/, this.merchant.calculateTotal()];
                    case 4:
                        _a.originalTotal = _b.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        x_1 = _b.sent();
                        throw 'AsyncCouponWorker.preProcess()';
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    JsonCouponWorker.prototype.save = function (couponCode, currentTotal) {
        var savings = this.state.originalTotal - currentTotal;
        var result = new coupon_result_1.CouponResult(couponCode, currentTotal, savings, this.extCode);
        this.broadcastCouponResult(result);
        this.state.results.push(result);
    };
    JsonCouponWorker.prototype.preCheckInitialElements = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.merchant.preCheckInitialElements()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    JsonCouponWorker.prototype.process = function (couponCodes, dom) {
        return __awaiter(this, void 0, void 0, function () {
            var err, coupon, startProcessCoupon, currentTotal, x_2, logMerchantPageError;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.state) {
                            this.state = new coupon_worker_state_1.CouponWorkerState();
                        }
                        if (!(this.state.currentIndex === couponCodes.length)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.processFinalResult()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 13];
                    case 2:
                        if (!(this.state.currentIndex > couponCodes.length - 1)) return [3 /*break*/, 3];
                        browserApi.runtime.sendMessage(this.extensionId, {
                            action: "LogError",
                            description: err,
                            merchant: "http://" + document.domain
                        });
                        err = "Merchant: " + document.domain + ": error: No 'currentCoupon'.";
                        console.error(err);
                        return [3 /*break*/, 13];
                    case 3:
                        _a.trys.push([3, 10, 11, 13]);
                        coupon = couponCodes[this.state.currentIndex];
                        if (!this.state.preRemove) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.preRemove()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.removePromoCode()];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        startProcessCoupon = new CustomEvent("startProcessCoupon", { "detail": { "coupon": coupon, extCode: this.extCode } });
                        document.dispatchEvent(startProcessCoupon);
                        return [4 /*yield*/, this.applyPromoCode(coupon)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.merchant.calculateTotal()];
                    case 9:
                        currentTotal = _a.sent();
                        this.save(coupon, currentTotal);
                        return [3 /*break*/, 13];
                    case 10:
                        x_2 = _a.sent();
                        logMerchantPageError = null;
                        console.log("failing in json process, heres the error: ", x_2);
                        // We don't want our new C@C error paradigm to catch any/all errors, just the ones with an errorMessage type "hardFail"
                        if (x_2 && x_2.type === "hardFail") {
                            logMerchantPageError = new CustomEvent("logMerchantPageError", { "detail": { "errorMessage": x_2.error, "type": "loudFail", extCode: this.extCode } });
                            document.dispatchEvent(logMerchantPageError);
                        }
                        // if something else caused an error, let's log it silently but keep going as it probably did not affect C@C experience"
                        else {
                            console.log(x_2);
                            logMerchantPageError = new CustomEvent("logMerchantPageError", { "detail": { "errorMessage": x_2 ? x_2.error : '', "type": "silentFail", extCode: this.extCode } });
                            document.dispatchEvent(logMerchantPageError);
                        }
                        this.broadcastError(this.extCode, x_2);
                        return [3 /*break*/, 13];
                    case 11:
                        if (this.state.preRemove) {
                            this.state.preRemove = false;
                        }
                        this.state.currentIndex++;
                        return [4 /*yield*/, this.process(couponCodes, null)];
                    case 12:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    return JsonCouponWorker;
}(coupon_worker_1.CouponWorker));
exports.JsonCouponWorker = JsonCouponWorker;

},{"./coupon-result":1,"./coupon-worker":8,"./coupon-worker-state":6,"./merchant":10,"./processors/instructions/constants":25}],6:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponWorkerState = void 0;
var CouponWorkerState = /** @class */ (function () {
    function CouponWorkerState() {
        this.results = [];
        this.preRemove = true;
        this.initialized = false;
        this.currentIndex = 0;
        this.couponNumber = 0;
        this.reloadCounter = 0;
        this.testedCoupons = [];
        this.originalTotal = null;
    }
    return CouponWorkerState;
}());
exports.CouponWorkerState = CouponWorkerState;

},{}],7:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponWorkerTypes = void 0;
var CouponWorkerTypes;
(function (CouponWorkerTypes) {
    CouponWorkerTypes[CouponWorkerTypes["async"] = 1] = "async";
    CouponWorkerTypes[CouponWorkerTypes["postback"] = 2] = "postback";
    CouponWorkerTypes[CouponWorkerTypes["api"] = 3] = "api";
    CouponWorkerTypes[CouponWorkerTypes["json"] = 4] = "json";
})(CouponWorkerTypes = exports.CouponWorkerTypes || (exports.CouponWorkerTypes = {}));

},{}],8:[function(_dereq_,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponWorker = void 0;
var CouponWorker = /** @class */ (function () {
    function CouponWorker(extensionId, extCode, elementIds, customFuncs) {
        if (customFuncs === void 0) { customFuncs = null; }
        this.customFuncs = null;
        this.extCode = null;
        this.elementIds = null;
        this.extensionId = null;
        this.merchantWorker = null;
        this.extCode = extCode;
        this.elementIds = elementIds;
        this.extensionId = extensionId;
        this.customFuncs = customFuncs;
    }
    CouponWorker.prototype.broadcastCouponResult = function (result) {
        var saveCouponResult = new CustomEvent('saveCouponResult', { "detail": result });
        document.dispatchEvent(saveCouponResult);
    };
    CouponWorker.prototype.getBestSavingsResult = function (workerState) {
        var result = null;
        workerState.results.forEach(function (r) {
            if (!result || r.savings > result.savings) {
                result = r;
            }
        });
        return result;
    };
    CouponWorker.prototype.init = function (merchantWorker) {
        this.merchantWorker = merchantWorker;
        this.checkInitialState(this.extCode);
    };
    CouponWorker.prototype.hideMerchantOverlay = function () {
        if (typeof this.merchantWorker['hideMerchantOverlay'] === 'function') {
            this.merchantWorker['hideMerchantOverlay']();
        }
    };
    CouponWorker.prototype.revertMerchantOverlay = function () {
        if (this.merchantWorker && typeof this.merchantWorker['revertMerchantOverlay'] === 'function') {
            this.merchantWorker['revertMerchantOverlay']();
        }
    };
    CouponWorker.prototype.showProgress = function (percent) {
        var updateProgressBar = new CustomEvent('updateProgressBar', { "detail": { percent: percent, extCode: this.extCode } });
        document.dispatchEvent(updateProgressBar);
    };
    CouponWorker.prototype.calculateTotal = function (el) {
        var totalDiv = el || $(this.elementIds.bagTotalId);
        var total = -1;
        var totalText = null;
        if (totalDiv.length > 0) {
            totalText = $.trim(totalDiv.text()).replace(/,/g, '');
            totalText = $.trim(totalText).match(/\d+[\.\d{0,3}]/g);
            if (totalText.length == 1)
                totalText = totalText[0];
            else
                totalText = totalText[0] + totalText[1];
            total = parseFloat(totalText);
        }
        return total;
    };
    CouponWorker.prototype.calculateTotalAsync = function (el, dom) {
        var _this = this;
        if (el === void 0) { el = null; }
        return new Promise(function (res) {
            var total = _this.calculateTotal(el);
            res(total);
        });
    };
    CouponWorker.prototype.checkCouponError = function (fnCouponHasError) {
        return new Promise(function (res) {
            setTimeout(function () {
                res(fnCouponHasError());
            }, 2000);
        });
    };
    // Merchants often have multiple variations of elements of the same selector. These should be used selectively.
    CouponWorker.prototype.getFirst = function (selector, fnCondition) {
        var elements = $(selector);
        var first = null;
        for (var i = 0; i < elements.length; i++) {
            var el = elements.eq(i);
            if (fnCondition(el)) {
                first = el;
                break;
            }
        }
        return first;
    };
    CouponWorker.prototype.getFirstVisible = function (selector) {
        return this.getFirst(selector, function (el) {
            return el.is(':visible');
        });
    };
    // Cross-browser supported event triggering method. element = plain JS element, not JQuery-wrapped.
    CouponWorker.prototype.triggerEvent = function (element, eventName) {
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent(eventName, true, false);
        element.dispatchEvent(evt);
    };
    // React-specific logic. Call this if simple calling val('') on an input does not register for a merchant using React.
    // element = plain JS element, not JQuery-wrapped.
    CouponWorker.prototype.setReactCouponCode = function (element, code) {
        var setter = Object.getOwnPropertyDescriptor(window['HTMLInputElement'].prototype, 'value').set;
        setter.call(element, code);
    };
    CouponWorker.prototype.addGlobalCSS = function (css, elementId) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        style.dataset.extid = elementId;
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        }
        else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    };
    CouponWorker.prototype.removeGlobalCSS = function (elementId) {
        document.querySelectorAll('style[data-extid=' + elementId + ']').forEach(function (el) { el.remove(); });
    };
    CouponWorker.prototype.broadcastInitialTotal = function (extCode, total) {
        var e = new CustomEvent('initialTotal', { "detail": { "extCode": extCode, "total": total } });
        document.dispatchEvent(e);
    };
    CouponWorker.prototype.waitFor = function (fn) {
        return new Promise(function (res, rej) {
            var loopCount = 0;
            var pollMaxCount = 12;
            var pollInterval = 500;
            (function poll() {
                if (fn(loopCount)) {
                    res();
                }
                else {
                    if (loopCount === pollMaxCount) {
                        // We can end up in here, 2 different ways. 
                        // # 1 when something is never found. (For example site changes, and Initial Element Check is failing)
                        // # 2 waitfor certain coupons get applied (or removed) and have abnormal behavior.
                        //     (For example, rare Gap coupon that doesn't result in an error message or a valid code/remove button)
                        rej("*CI function didn't complete, but pollMaxCount is hit :" + fn.name);
                    }
                    else {
                        loopCount++;
                        setTimeout(poll, pollInterval);
                    }
                }
            })();
        });
    };
    CouponWorker.prototype.waitForRemoveCoupon = function (fnIsRemoveFinished) {
        var _this = this;
        return new Promise(function (res, rej) { return __awaiter(_this, void 0, void 0, function () {
            var x_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.waitFor(fnIsRemoveFinished)];
                    case 1:
                        _a.sent();
                        res();
                        return [3 /*break*/, 3];
                    case 2:
                        x_1 = _a.sent();
                        rej({
                            type: "waitFor remove",
                            action: "removeCoupon()",
                            error: "couponRemoveId not found"
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    CouponWorker.prototype.waitForApplyPromoCode = function (code, fnIsApplyFinished) {
        var _this = this;
        return new Promise(function (res, rej) { return __awaiter(_this, void 0, void 0, function () {
            var x_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.waitFor(fnIsApplyFinished)];
                    case 1:
                        _a.sent();
                        res();
                        return [3 /*break*/, 3];
                    case 2:
                        x_2 = _a.sent();
                        rej({
                            action: "applyPromoCode(code)",
                            message: "Coupon code " + code,
                            type: "waitFor apply",
                            error: "error in waitForApplyPromoCode"
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    CouponWorker.prototype.broadcastError = function (extCode, message) {
        var e = new CustomEvent('couponInjectionError', { "detail": { "extCode": extCode, "message": message } });
        document.dispatchEvent(e);
    };
    CouponWorker.prototype.checkInitialElements = function (extCode) {
        return __awaiter(this, void 0, void 0, function () {
            var self, e, x_3, logMessage, e, missingValue, elInput, elButton, elRemove, elDoNotApplyCoupons, check, e, x_4, logMessage, e, missing, elements, k;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        if (!(this.customFuncs && typeof this.customFuncs.checkInitialElements === 'function')) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.waitFor(this.customFuncs.checkInitialElements)];
                    case 2:
                        _a.sent();
                        e = new CustomEvent('initialElementsChecked', { "detail": { "extCode": extCode, "passed": true } });
                        document.dispatchEvent(e);
                        return [3 /*break*/, 4];
                    case 3:
                        x_3 = _a.sent();
                        logMessage = "checkInitialElements Failed : customFuncs===true;";
                        if (x_3) {
                            console.log(logMessage, x_3.toString());
                        }
                        else {
                            console.log(logMessage);
                        }
                        e = new CustomEvent('initialElementsChecked', { "detail": { "extCode": extCode, "passed": false } });
                        document.dispatchEvent(e);
                        missingValue = '';
                        if (typeof this.customFuncs.getMissingElements === 'function') {
                            missingValue = this.customFuncs.getMissingElements();
                        }
                        this.broadcastError(extCode, 'Initial elements check failed. Missing: ' + missing);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 9];
                    case 5:
                        check = function () {
                            elInput = $(self.elementIds.couponApplyId).length > 0;
                            elButton = $(self.elementIds.couponApplyButtonId).length > 0 || $(self.elementIds.couponApplyButtonSelector).length > 0;
                            elRemove = $(self.elementIds.couponRemoveId).length > 0;
                            elDoNotApplyCoupons = $(self.elementIds.doNotApplyCouponsId).length > 0;
                            return elRemove || elDoNotApplyCoupons || (elInput && elButton);
                        };
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, this.waitFor(check)];
                    case 7:
                        _a.sent();
                        e = new CustomEvent('initialElementsChecked', { "detail": { "extCode": extCode, "passed": !elDoNotApplyCoupons } });
                        document.dispatchEvent(e);
                        return [3 /*break*/, 9];
                    case 8:
                        x_4 = _a.sent();
                        logMessage = "checkInitialElements Failed : customFuncs===false;";
                        if (x_4) {
                            console.log(logMessage, x_4.toString());
                        }
                        else {
                            console.log(logMessage);
                        }
                        e = new CustomEvent('initialElementsChecked', { "detail": { "extCode": extCode, "passed": false } });
                        document.dispatchEvent(e);
                        if (!elDoNotApplyCoupons) {
                            missing = [];
                            elements = { couponInput: elInput, applyCoupon: elButton, removeCoupon: elRemove };
                            for (k in elements) {
                                if (!elements[k]) {
                                    missing.push(k);
                                }
                            }
                            this.broadcastError(extCode, 'Initial elements check failed. Missing: ' + missing.toString());
                        }
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    CouponWorker.prototype.checkInitialCoupon = function (extCode) {
        // TODO
    };
    CouponWorker.prototype.checkInitialState = function (extCode) {
        var _this = this;
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkInitialElements(extCode)];
                    case 1:
                        _a.sent();
                        this.checkInitialCoupon(extCode);
                        return [2 /*return*/];
                }
            });
        }); }, 1000);
    };
    return CouponWorker;
}());
exports.CouponWorker = CouponWorker;

},{}],9:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponInjection = void 0;
var coupon_result_1 = _dereq_("./coupon-result");
var coupon_worker_api_1 = _dereq_("./coupon-worker-api");
var coupon_worker_async_1 = _dereq_("./coupon-worker-async");
var coupon_worker_1 = _dereq_("./coupon-worker");
var coupon_worker_factory_1 = _dereq_("./coupon-worker-factory");
var coupon_worker_state_1 = _dereq_("./coupon-worker-state");
var coupon_worker_types_1 = _dereq_("./coupon-worker-types");
var coupon_worker_json_1 = _dereq_("./coupon-worker-json");
// This exists because Browserify standalone really only works on one single file.
// Because we import and reference all concrete classes, Browserify compiles all of them into this one class.
var CouponInjection = /** @class */ (function () {
    function CouponInjection() {
    }
    CouponInjection.init = function (elementIds, customFuncs) {
        ProdegeCouponInjection.CouponInjection.elementIds = elementIds;
        ProdegeCouponInjection.CouponInjection.customFuncs = customFuncs;
    };
    CouponInjection.elementIds = null;
    CouponInjection.customFuncs = null;
    CouponInjection.CouponResult = coupon_result_1.CouponResult;
    CouponInjection.ApiCouponWorker = coupon_worker_api_1.ApiCouponWorker;
    CouponInjection.AsyncCouponWorker = coupon_worker_async_1.AsyncCouponWorker;
    CouponInjection.JsonCouponWorker = coupon_worker_json_1.JsonCouponWorker;
    CouponInjection.CouponWorkerBase = coupon_worker_1.CouponWorker;
    CouponInjection.CouponWorkerFactory = coupon_worker_factory_1.CouponWorkerFactory;
    CouponInjection.CouponWorkerState = coupon_worker_state_1.CouponWorkerState;
    CouponInjection.CouponWorkerTypes = coupon_worker_types_1.CouponWorkerTypes;
    return CouponInjection;
}());
exports.CouponInjection = CouponInjection;

},{"./coupon-result":1,"./coupon-worker":8,"./coupon-worker-api":2,"./coupon-worker-async":3,"./coupon-worker-factory":4,"./coupon-worker-json":5,"./coupon-worker-state":6,"./coupon-worker-types":7}],10:[function(_dereq_,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Merchant = void 0;
var winnower_1 = _dereq_("./processors/instructions/winnower");
var Merchant = /** @class */ (function () {
    function Merchant(definition) {
        this._log = function () { };
        this.selectors = definition.selectors;
        this.definition = definition;
        this._vars = definition.vars || {};
    }
    Object.defineProperty(Merchant.prototype, "dom", {
        get: function () { return this._dom || document; },
        enumerable: false,
        configurable: true
    });
    Merchant.prototype.log = function (message, arg) {
        if (this._log) {
            this._log(message, arg);
        }
    };
    Merchant.prototype.setLog = function (log) {
        this._log = log;
    };
    Merchant.prototype.parseVars = function (vars) {
        var _this = this;
        Object.keys(vars).forEach(function (k) {
            _this._vars[k] = _this.parseSelector(vars[k]);
        });
    };
    Merchant.prototype.processInstruction = function (instruction, data) {
        return __awaiter(this, void 0, void 0, function () {
            var key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = Object.keys(instruction)[0];
                        if (!(key === 'vars')) return [3 /*break*/, 2];
                        this.parseVars(instruction[key]);
                        delete instruction[key];
                        return [4 /*yield*/, winnower_1.InstructionWinnower.processInstruction(this, instruction, data)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, winnower_1.InstructionWinnower.processInstruction(this, instruction, data)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Merchant.prototype.processQueryInstruction = function (instruction) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.processInstruction(instruction)];
                    case 1:
                        _a.sent();
                        result = this.queryResult;
                        this.queryResult = null;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    Merchant.prototype.parseSelector = function (value) {
        var isVar = value.startsWith('var(');
        var isSelector = value.startsWith('selector(');
        if (isVar || isSelector) {
            var arg = value.substring(value.indexOf('(') + 1, value.indexOf(')'));
            var result = void 0;
            if (isVar) {
                result = this._vars[arg];
            }
            else {
                result = (this.definition.selectors && this.definition.selectors[arg]) || arg;
            }
            if (!result) {
                this.log("issue with parseSelector() no result for value:" + value);
            }
            else {
                return result;
            }
        }
        else
            return value;
    };
    Merchant.prototype.defaultRemoveCoupon = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.processInstruction({
                            'if:visible:selector(couponRemove)': {
                                'click:selector(couponRemove)': {
                                    'wait-for:!visible:selector(couponRemove)': true
                                }
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Merchant.prototype.removeCoupon = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.definition.removeCoupon) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.processInstruction(this.definition.removeCoupon)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.defaultRemoveCoupon()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // regex to remove everything but numeric digits and decimal. Version 7.0 and less only stripped $
    Merchant.prototype.parseTotalText = function (value) {
        try {
            var priceText = value.trim().replace(/[^0-9\.]/g, "");
            if (!priceText) {
                this.log("nothing in price text. inputString:" + value);
            }
            return parseFloat(priceText);
        }
        catch (e) {
            this.log("err in parseFloat. inputString:" + value);
            return -1;
        }
    };
    Merchant.prototype.defaultCalculateTotal = function () {
        var el = this.dom.querySelector(this.definition.selectors.cartTotal);
        var total = -1;
        if (el) {
            return this.parseTotalText(el.innerText);
        }
        return total;
    };
    Merchant.prototype.calculateTotal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.definition.calculateTotal) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.processQueryInstruction(this.definition.calculateTotal)];
                    case 1:
                        result = _a.sent();
                        if (typeof result !== 'number') {
                            return [2 /*return*/, this.parseTotalText(result.toString())];
                        }
                        else {
                            return [2 /*return*/, result];
                        }
                        return [3 /*break*/, 3];
                    case 2: return [2 /*return*/, this.defaultCalculateTotal()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Merchant.prototype.defaultApplyCoupon = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.processInstruction({
                            'apply:selector(couponInput)': {
                                'click:selector(couponApply)': {
                                    'wait-for:couponApplied': true
                                }
                            }
                        }, code)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Merchant.prototype.applyCoupon = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._dom = null;
                        if (!this.definition.applyCoupon) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.processInstruction(this.definition.applyCoupon, code)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.defaultApplyCoupon(code)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Merchant.prototype.waitFor = function (fn, pollMaxCount) {
        var _this = this;
        if (pollMaxCount === void 0) { pollMaxCount = 8; }
        return new Promise(function (res, rej) { return __awaiter(_this, void 0, void 0, function () {
            var loopCount, pollInterval, poll;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loopCount = 0;
                        pollInterval = 500;
                        poll = function () { return __awaiter(_this, void 0, void 0, function () {
                            var x_1;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, fn(loopCount)];
                                    case 1:
                                        if (_a.sent()) {
                                            res();
                                        }
                                        else {
                                            if (loopCount === pollMaxCount) {
                                                rej();
                                            }
                                            else {
                                                loopCount++;
                                                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, poll()];
                                                        case 1:
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                }); }); }, pollInterval);
                                            }
                                        }
                                        return [3 /*break*/, 3];
                                    case 2:
                                        x_1 = _a.sent();
                                        rej();
                                        return [3 /*break*/, 3];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, poll()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Merchant.prototype.preCheckInitialElements = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.processInstruction(this.definition.preCheckInitialElements)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Merchant.prototype.checkInitialElements = function () {
        return __awaiter(this, void 0, void 0, function () {
            var iecResult, x_2, elInput, elButton, elRemove, elDoNotApplyCoupons, x_3, missing, elements, k;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        iecResult = {
                            passed: false
                        };
                        if (!this.definition.preCheckInitialElements) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.preCheckInitialElements()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        x_2 = _a.sent();
                        iecResult.passed = false;
                        iecResult.preCheckFailed = true;
                        if (x_2) {
                            iecResult.message = x_2.toString();
                        }
                        return [2 /*return*/, iecResult];
                    case 4:
                        if (!(typeof this.definition.shouldCheckInitialElements === 'undefined' || this.definition.shouldCheckInitialElements === true)) return [3 /*break*/, 9];
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.waitFor(function () {
                                // we need to reset the DOM everytime we waitFor in order to be able to check against the current document object.
                                _this.setDom(document);
                                elInput = _this.dom.querySelectorAll(_this.selectors.couponInput).length > 0;
                                elButton = _this.dom.querySelectorAll(_this.selectors.couponApply).length > 0;
                                elRemove = _this.dom.querySelectorAll(_this.selectors.couponRemove).length > 0;
                                elDoNotApplyCoupons = _this.dom.querySelectorAll(_this.selectors.doNotApply).length > 0;
                                if (elDoNotApplyCoupons) {
                                    iecResult.passed = false;
                                    iecResult.doNotApply = true;
                                    return iecResult;
                                }
                                else if (elRemove || (elInput && elButton)) {
                                    iecResult.passed = true;
                                    return iecResult;
                                }
                            })];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        x_3 = _a.sent();
                        missing = [];
                        elements = { couponInput: elInput, applyCoupon: elButton, removeCoupon: elRemove };
                        for (k in elements) {
                            if (!elements[k]) {
                                missing.push(k);
                            }
                        }
                        iecResult.passed = false;
                        iecResult.missingElements = missing.toString();
                        if (x_3) {
                            iecResult.message = x_3.toString();
                        }
                        return [3 /*break*/, 8];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        // shouldCheckInitialElements is false, counts as a pass
                        iecResult.passed = true;
                        _a.label = 10;
                    case 10: 
                    // actual return for this method is here if elements found inside waitFor.
                    return [2 /*return*/, iecResult];
                }
            });
        });
    };
    Merchant.prototype.setQueryResult = function (result) {
        this.queryResult = result;
    };
    Merchant.prototype.setDom = function (dom) {
        this._dom = dom;
    };
    Merchant.prototype.setVar = function (name, value) {
        this._vars[name] = value;
    };
    Merchant.prototype.getVar = function (name) {
        return this._vars[name];
    };
    return Merchant;
}());
exports.Merchant = Merchant;

},{"./processors/instructions/winnower":42}],11:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessorBase = void 0;
var string_variable_arg_details_1 = _dereq_("./models/string-variable-arg-details");
var ProcessorBase = /** @class */ (function () {
    function ProcessorBase(merchant) {
        this.merchant = merchant;
    }
    ProcessorBase.prototype.getTime = function () {
        return (new Date()).getTime().toString();
    };
    ProcessorBase.prototype.replace = function (value, begin, replacement, end) {
        var before = value.substring(0, begin);
        var after = value.substring(end);
        return before + replacement + after;
    };
    ProcessorBase.prototype.replaceCall = function (value) {
        var details = new string_variable_arg_details_1.StringVariableArgDetails(value, '[call:');
        var callValue = this[details.arg]();
        return this.replace(value, details.begin, callValue, details.end);
    };
    ProcessorBase.prototype.replaceCode = function (value, code) {
        if (code) {
            var start = value.indexOf('[code]');
            return value.substring(0, start) + code + value.substring(start + 6);
        }
        else {
            console.error('Coupon code missing from replaceCode call.');
            return value;
        }
    };
    ProcessorBase.prototype.replaceSession = function (value) {
        var details = new string_variable_arg_details_1.StringVariableArgDetails(value, '[session:');
        var item = sessionStorage.getItem(details.arg);
        return this.replace(value, details.begin, item, details.end);
    };
    ProcessorBase.prototype.replaceVariable = function (value) {
        var details = new string_variable_arg_details_1.StringVariableArgDetails(value, '[var:');
        var variable = this.merchant.getVar(details.arg);
        return this.replace(value, details.begin, variable, details.end);
    };
    ProcessorBase.prototype.replaceData = function (target, data) {
        if (target) {
            return this.parseJson(target, data);
        }
        else {
            return data;
        }
    };
    ProcessorBase.prototype.parseString = function (value, data) {
        if (value === null && data && typeof (data) === "string") {
            return data;
        }
        else if (typeof value === 'string') {
            var replacees = ['[call:', '[code]', '[session:', '[var:', '[data]'];
            while (replacees.some(function (r) { return value.includes(r); })) {
                var replacee = replacees.find(function (r) { return value.includes(r); });
                switch (replacee) {
                    case '[call:':
                        value = this.replaceCall(value);
                        break;
                    case '[code]':
                        value = this.replaceCode(value, data);
                        break;
                    case '[session:':
                        value = this.replaceSession(value);
                        break;
                    case '[var:':
                        value = this.replaceVariable(value);
                        break;
                    case '[data]':
                        value = this.replaceData(value, data);
                        break;
                }
            }
        }
        return value;
    };
    ProcessorBase.prototype.parseJson = function (target, data) {
        var path = this.checkForJsonPath(target);
        var result = "";
        // in case json comes in as a string, we need to to try to parse
        try {
            data = JSON.parse(data);
        }
        catch (e) {
            // we just want to tryParse, if not, we don't want to do anything, as it may already be a JSON object
            // unless it's just a plain string, then return
            if (typeof (data) === "string") {
                return data;
            }
        }
        // TODO handle arrays
        var pathKeys = [];
        if (path.includes('.')) {
            pathKeys = path.split('.');
        }
        else {
            pathKeys.push(path);
        }
        if (pathKeys.length > 0) {
            for (var i = 0; i < pathKeys.length; i++) {
                if (pathKeys[i].includes('[')) {
                    // if an array is hardcoded into data string like "...:[data].promotions[0].coupon.UUID"
                    var pathKeySplit = pathKeys[i].split('[');
                    var objPathKey = pathKeySplit[0];
                    var objPathIndexLength = pathKeySplit[1].indexOf(']'); // in case index > 1 digit
                    var objPathIndex = parseInt(pathKeySplit[1].substring(0, objPathIndexLength));
                    data = data[objPathKey][objPathIndex];
                }
                else {
                    // normal flow
                    data = data[pathKeys[i]];
                }
            }
        }
        else {
            return null;
        }
        result = data;
        return result.toString();
    };
    ProcessorBase.prototype.checkForJsonPath = function (instruction) {
        var dataPath = "";
        if (instruction.includes('[data]')) {
            var configSections = instruction.split('[data].');
            dataPath = configSections[1];
        }
        else if (instruction.includes('.')) {
            dataPath = instruction;
        }
        else {
            dataPath = 'data';
        }
        return dataPath;
    };
    return ProcessorBase;
}());
exports.ProcessorBase = ProcessorBase;

},{"./models/string-variable-arg-details":43}],12:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyCompleteConditionProcessor = void 0;
var base_1 = _dereq_("../base");
var coupon_applied_1 = _dereq_("./coupon-applied");
var coupon_has_error_1 = _dereq_("./coupon-has-error");
var ApplyCompleteConditionProcessor = /** @class */ (function (_super) {
    __extends(ApplyCompleteConditionProcessor, _super);
    function ApplyCompleteConditionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    ApplyCompleteConditionProcessor.prototype.process = function () {
        return __awaiter(this, void 0, void 0, function () {
            var applied, hasError;
            return __generator(this, function (_a) {
                applied = new coupon_applied_1.CouponAppliedConditionProcessor(this.merchant);
                hasError = new coupon_has_error_1.CouponHasErrorConditionProcessor(this.merchant);
                return [2 /*return*/, applied.process() || hasError.process()];
            });
        });
    };
    return ApplyCompleteConditionProcessor;
}(base_1.ProcessorBase));
exports.ApplyCompleteConditionProcessor = ApplyCompleteConditionProcessor;

},{"../base":11,"./coupon-applied":13,"./coupon-has-error":14}],13:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponAppliedConditionProcessor = void 0;
var base_1 = _dereq_("../base");
var conditional_1 = _dereq_("../instructions/conditional");
var CouponAppliedConditionProcessor = /** @class */ (function (_super) {
    __extends(CouponAppliedConditionProcessor, _super);
    function CouponAppliedConditionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    CouponAppliedConditionProcessor.prototype.process = function () {
        return __awaiter(this, void 0, void 0, function () {
            var condition, processor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        condition = this.merchant.definition.couponApplied || 'visible:selector(error)||visible:selector(couponRemove)';
                        processor = new conditional_1.ConditionalInstructionProcessor(this.merchant, condition, null);
                        return [4 /*yield*/, processor.processCondition(condition)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CouponAppliedConditionProcessor;
}(base_1.ProcessorBase));
exports.CouponAppliedConditionProcessor = CouponAppliedConditionProcessor;

},{"../base":11,"../instructions/conditional":24}],14:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponHasErrorConditionProcessor = void 0;
var base_1 = _dereq_("../base");
var factory_1 = _dereq_("./factory");
var CouponHasErrorConditionProcessor = /** @class */ (function (_super) {
    __extends(CouponHasErrorConditionProcessor, _super);
    function CouponHasErrorConditionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    CouponHasErrorConditionProcessor.prototype.process = function () {
        return __awaiter(this, void 0, void 0, function () {
            var condition, processor;
            return __generator(this, function (_a) {
                condition = this.merchant.definition.couponHasError || 'visible:selector(error)';
                processor = factory_1.ConditionProcessorFactory.construct(this.merchant, condition);
                return [2 /*return*/, processor.process()];
            });
        });
    };
    return CouponHasErrorConditionProcessor;
}(base_1.ProcessorBase));
exports.CouponHasErrorConditionProcessor = CouponHasErrorConditionProcessor;

},{"../base":11,"./factory":16}],15:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExistsConditionProcessor = void 0;
var base_1 = _dereq_("../base");
var ExistsConditionProcessor = /** @class */ (function (_super) {
    __extends(ExistsConditionProcessor, _super);
    function ExistsConditionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    ExistsConditionProcessor.prototype.process = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (target.startsWith('selector('))
                    target = this.merchant.parseSelector(target);
                return [2 /*return*/, !!this.merchant.dom.querySelector(target)];
            });
        });
    };
    return ExistsConditionProcessor;
}(base_1.ProcessorBase));
exports.ExistsConditionProcessor = ExistsConditionProcessor;

},{"../base":11}],16:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionProcessorFactory = void 0;
var visibility_1 = _dereq_("./visibility");
var coupon_applied_1 = _dereq_("./coupon-applied");
var coupon_has_error_1 = _dereq_("./coupon-has-error");
var apply_complete_1 = _dereq_("./apply-complete");
var session_1 = _dereq_("./session");
var exists_1 = _dereq_("./exists");
var has_json_path_1 = _dereq_("./has-json-path");
var ConditionProcessorFactory = /** @class */ (function () {
    function ConditionProcessorFactory() {
    }
    ConditionProcessorFactory.construct = function (merchant, conditionState) {
        var processor = null;
        switch (conditionState) {
            case 'visible':
                processor = new visibility_1.VisibilityConditionProcessor(merchant);
                break;
            case 'couponApplied':
                processor = new coupon_applied_1.CouponAppliedConditionProcessor(merchant);
                break;
            case 'couponHasError':
                processor = new coupon_has_error_1.CouponHasErrorConditionProcessor(merchant);
                break;
            case 'applyComplete':
                processor = new apply_complete_1.ApplyCompleteConditionProcessor(merchant);
                break;
            case 'session':
                processor = new session_1.SessionConditionProcessor(merchant);
                break;
            case 'exists':
                processor = new exists_1.ExistsConditionProcessor(merchant);
                break;
            case 'hasJsonPath':
                processor = new has_json_path_1.HasJsonPathConditionProcessor(merchant);
                break;
        }
        return processor;
    };
    return ConditionProcessorFactory;
}());
exports.ConditionProcessorFactory = ConditionProcessorFactory;

},{"./apply-complete":12,"./coupon-applied":13,"./coupon-has-error":14,"./exists":15,"./has-json-path":17,"./session":18,"./visibility":19}],17:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasJsonPathConditionProcessor = void 0;
var base_1 = _dereq_("../base");
var HasJsonPathConditionProcessor = /** @class */ (function (_super) {
    __extends(HasJsonPathConditionProcessor, _super);
    function HasJsonPathConditionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    HasJsonPathConditionProcessor.prototype.process = function (target, data) {
        return __awaiter(this, void 0, void 0, function () {
            var hasJson;
            return __generator(this, function (_a) {
                try {
                    hasJson = !!this.parseJson(target, data);
                    return [2 /*return*/, hasJson];
                }
                catch (e) {
                    // if the json path doesn't exist at all, it can fail.
                    return [2 /*return*/, false];
                }
                return [2 /*return*/];
            });
        });
    };
    return HasJsonPathConditionProcessor;
}(base_1.ProcessorBase));
exports.HasJsonPathConditionProcessor = HasJsonPathConditionProcessor;

},{"../base":11}],18:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionConditionProcessor = void 0;
var base_1 = _dereq_("../base");
var SessionConditionProcessor = /** @class */ (function (_super) {
    __extends(SessionConditionProcessor, _super);
    function SessionConditionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    SessionConditionProcessor.prototype.process = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, !!sessionStorage.getItem(target)];
            });
        });
    };
    return SessionConditionProcessor;
}(base_1.ProcessorBase));
exports.SessionConditionProcessor = SessionConditionProcessor;

},{"../base":11}],19:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisibilityConditionProcessor = void 0;
var base_1 = _dereq_("../base");
var VisibilityConditionProcessor = /** @class */ (function (_super) {
    __extends(VisibilityConditionProcessor, _super);
    function VisibilityConditionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    VisibilityConditionProcessor.prototype.getFirst = function (selector, fnCondition) {
        var first = null;
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            if (fnCondition(el)) {
                first = el;
                break;
            }
        }
        return first;
    };
    VisibilityConditionProcessor.prototype.process = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var selector;
            return __generator(this, function (_a) {
                selector = this.merchant.parseSelector(target);
                return [2 /*return*/, !!this.getFirst(selector, function (el) {
                        return !!(el.style.display !== 'none' && (el.offsetWidth || el.offsetHeight || el.getClientRects().length));
                    })];
            });
        });
    };
    return VisibilityConditionProcessor;
}(base_1.ProcessorBase));
exports.VisibilityConditionProcessor = VisibilityConditionProcessor;

},{"../base":11}],20:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyInstructionProcessor = void 0;
var base_1 = _dereq_("../base");
var ApplyInstructionProcessor = /** @class */ (function (_super) {
    __extends(ApplyInstructionProcessor, _super);
    function ApplyInstructionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    ApplyInstructionProcessor.prototype.process = function (target, code) {
        return __awaiter(this, void 0, void 0, function () {
            var arg, selector, segments, el;
            return __generator(this, function (_a) {
                arg = null;
                selector = null;
                if (target.includes(':')) {
                    segments = target.split(':');
                    selector = this.merchant.parseSelector(segments[0]);
                    arg = segments[1];
                }
                else {
                    selector = this.merchant.parseSelector(target);
                }
                el = this.merchant.dom.querySelector(selector);
                if (arg === 'react') {
                    this.reactParameter(el, code);
                }
                else {
                    el.value = code;
                }
                return [2 /*return*/, false];
            });
        });
    };
    // The merchant is using React and we need to trigger the React 'input' event for this to work.
    // Apparently react overrides the native 'value' setter.
    ApplyInstructionProcessor.prototype.reactParameter = function (el, code) {
        var setter = Object.getOwnPropertyDescriptor(window['HTMLInputElement'].prototype, 'value').set;
        setter.call(el, code);
        var evt = this.merchant.dom.createEvent('HTMLEvents');
        evt.initEvent('input', true, false);
        el.dispatchEvent(evt);
    };
    return ApplyInstructionProcessor;
}(base_1.ProcessorBase));
exports.ApplyInstructionProcessor = ApplyInstructionProcessor;

},{"../base":11}],21:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallInstructionProcessor = void 0;
var base_1 = _dereq_("../base");
var winnower_1 = _dereq_("./winnower");
var CallInstructionProcessor = /** @class */ (function (_super) {
    __extends(CallInstructionProcessor, _super);
    function CallInstructionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    CallInstructionProcessor.prototype.process = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var instruction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        instruction = this.merchant.definition[target];
                        if (!instruction) return [3 /*break*/, 2];
                        return [4 /*yield*/, winnower_1.InstructionWinnower.processInstruction(this.merchant, instruction)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, false];
                }
            });
        });
    };
    return CallInstructionProcessor;
}(base_1.ProcessorBase));
exports.CallInstructionProcessor = CallInstructionProcessor;

},{"../base":11,"./winnower":42}],22:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickAllInstructionProcessor = void 0;
var base_1 = _dereq_("../base");
var ClickAllInstructionProcessor = /** @class */ (function (_super) {
    __extends(ClickAllInstructionProcessor, _super);
    function ClickAllInstructionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    ClickAllInstructionProcessor.prototype.process = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var selector, els;
            return __generator(this, function (_a) {
                selector = this.merchant.parseSelector(target);
                els = Array.from(this.merchant.dom.querySelectorAll(selector));
                els.forEach(function (el) {
                    el.click();
                });
                return [2 /*return*/, false];
            });
        });
    };
    return ClickAllInstructionProcessor;
}(base_1.ProcessorBase));
exports.ClickAllInstructionProcessor = ClickAllInstructionProcessor;

},{"../base":11}],23:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickInstructionProcessor = void 0;
var base_1 = _dereq_("../base");
var ClickInstructionProcessor = /** @class */ (function (_super) {
    __extends(ClickInstructionProcessor, _super);
    function ClickInstructionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    ClickInstructionProcessor.prototype.process = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var selector, el;
            return __generator(this, function (_a) {
                selector = this.merchant.parseSelector(target);
                el = this.merchant.dom.querySelector(selector);
                el.click();
                return [2 /*return*/, false];
            });
        });
    };
    return ClickInstructionProcessor;
}(base_1.ProcessorBase));
exports.ClickInstructionProcessor = ClickInstructionProcessor;

},{"../base":11}],24:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionalInstructionProcessor = void 0;
var factory_1 = _dereq_("../conditions/factory");
var winnower_1 = _dereq_("./winnower");
var base_1 = _dereq_("../base");
var ConditionalInstructionProcessor = /** @class */ (function (_super) {
    __extends(ConditionalInstructionProcessor, _super);
    function ConditionalInstructionProcessor(merchant, condition, childInstruction, data) {
        var _this = _super.call(this, merchant) || this;
        _this.data = data;
        _this.condition = condition;
        _this.childInstruction = childInstruction;
        return _this;
    }
    ConditionalInstructionProcessor.prototype.processCondition = function (condition) {
        return __awaiter(this, void 0, void 0, function () {
            var isOr, isAnd, conditions, _a, _b, segments, isNot, state, target, processor, result;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        isOr = condition.includes('||');
                        isAnd = condition.includes('&&');
                        if (!(isOr || isAnd)) return [3 /*break*/, 9];
                        conditions = condition.split(isOr ? '||' : '&&');
                        if (!isOr) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.processCondition(conditions[0])];
                    case 1:
                        _a = (_c.sent());
                        if (_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.processCondition(conditions[1])];
                    case 2:
                        _a = (_c.sent());
                        _c.label = 3;
                    case 3: return [2 /*return*/, _a];
                    case 4: return [4 /*yield*/, this.processCondition(conditions[0])];
                    case 5:
                        _b = (_c.sent());
                        if (!_b) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.processCondition(conditions[1])];
                    case 6:
                        _b = (_c.sent());
                        _c.label = 7;
                    case 7: return [2 /*return*/, _b];
                    case 8: return [3 /*break*/, 13];
                    case 9:
                        segments = condition.split(':');
                        if (!(segments.length > 2)) return [3 /*break*/, 10];
                        throw "Condition invalid: " + condition;
                    case 10:
                        isNot = false;
                        state = segments.length === 2 ? segments[0] : condition;
                        if (state.startsWith('!')) {
                            isNot = true;
                            state = state.substring(1);
                        }
                        target = segments.length === 2 ? segments[1] : null;
                        processor = factory_1.ConditionProcessorFactory.construct(this.merchant, state);
                        if (!!processor) return [3 /*break*/, 11];
                        throw "Condition state invalid: " + state;
                    case 11: return [4 /*yield*/, processor.process(target, this.data)];
                    case 12:
                        result = _c.sent();
                        return [2 /*return*/, isNot ? !result : result];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    ConditionalInstructionProcessor.prototype.process = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resolved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resolved = false;
                        return [4 /*yield*/, this.processCondition(this.condition)];
                    case 1:
                        resolved = _a.sent();
                        if (!resolved) return [3 /*break*/, 3];
                        return [4 /*yield*/, winnower_1.InstructionWinnower.processInstruction(this.merchant, this.childInstruction, this.data)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, true];
                }
            });
        });
    };
    return ConditionalInstructionProcessor;
}(base_1.ProcessorBase));
exports.ConditionalInstructionProcessor = ConditionalInstructionProcessor;

},{"../base":11,"../conditions/factory":16,"./winnower":42}],25:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.CONDITIONAL_TERMS = ['if', 'else-if'];
    Constants.HTTP_TERMS = ['http-get', 'http-post', 'http-delete', 'http-put', 'http-submit-form'];
    Constants.REGULAR_TERMS = [
        'click',
        'click-all',
        'wait-for',
        'apply',
        'trigger-event',
        'set-session',
        'remove-session',
        'set-query-result',
        'set-dom',
        'query',
        'call',
        'set-values',
        'set-var'
    ];
    return Constants;
}());
exports.Constants = Constants;

},{}],26:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructionProcessorFactory = void 0;
var click_1 = _dereq_("./click");
var wait_for_1 = _dereq_("./wait-for");
var apply_1 = _dereq_("./apply");
var trigger_event_1 = _dereq_("./trigger-event");
var http_get_1 = _dereq_("./http/http-get");
var set_session_1 = _dereq_("./setter/set-session");
var http_post_1 = _dereq_("./http/http-post");
var http_delete_1 = _dereq_("./http/http-delete");
var http_put_1 = _dereq_("./http/http-put");
var set_query_result_1 = _dereq_("./setter/set-query-result");
var click_all_1 = _dereq_("./click-all");
var set_dom_1 = _dereq_("./setter/set-dom");
var remove_session_1 = _dereq_("./setter/remove-session");
var query_1 = _dereq_("./query");
var call_1 = _dereq_("./call");
var http_submit_form_1 = _dereq_("./http/http-submit-form");
var set_values_1 = _dereq_("./set-values");
var set_var_1 = _dereq_("./setter/set-var");
var InstructionProcessorFactory = /** @class */ (function () {
    function InstructionProcessorFactory() {
    }
    InstructionProcessorFactory.construct = function (merchant, action) {
        var processor = null;
        switch (action) {
            case 'click':
                processor = new click_1.ClickInstructionProcessor(merchant);
                break;
            case 'click-all':
                processor = new click_all_1.ClickAllInstructionProcessor(merchant);
                break;
            case 'wait-for':
                processor = new wait_for_1.WaitForInstructionProcessor(merchant);
                break;
            case 'apply':
                processor = new apply_1.ApplyInstructionProcessor(merchant);
                break;
            case 'trigger-event':
                processor = new trigger_event_1.TriggerEventInstructionProcessor(merchant);
                break;
            case 'http-get':
                processor = new http_get_1.HttpGetInstructionProcessor(merchant);
                break;
            case 'http-post':
                processor = new http_post_1.HttpPostInstructionProcessor(merchant);
                break;
            case 'http-delete':
                processor = new http_delete_1.HttpDeleteInstructionProcessor(merchant);
                break;
            case 'http-put':
                processor = new http_put_1.HttpPutInstructionProcessor(merchant);
                break;
            case 'set-session':
                processor = new set_session_1.SetSessionInstructionProcessor(merchant);
                break;
            case 'remove-session':
                processor = new remove_session_1.RemoveSessionInstructionProcessor(merchant);
                break;
            case 'set-query-result':
                processor = new set_query_result_1.SetQueryResultInstructionProcessor(merchant);
                break;
            case 'set-dom':
                processor = new set_dom_1.SetDomInstructionProcessor(merchant);
                break;
            case 'query':
                processor = new query_1.QueryInstructionProcessor(merchant);
                break;
            case 'call':
                processor = new call_1.CallInstructionProcessor(merchant);
                break;
            case 'http-submit-form':
                processor = new http_submit_form_1.HttpSubmitFormInstructionProcessor(merchant);
                break;
            case 'set-values':
                processor = new set_values_1.SetValuesInstructionProcessor(merchant);
                break;
            case 'set-var':
                processor = new set_var_1.SetVarInstructionProcessor(merchant);
                break;
        }
        return processor;
    };
    return InstructionProcessorFactory;
}());
exports.InstructionProcessorFactory = InstructionProcessorFactory;

},{"./apply":20,"./call":21,"./click":23,"./click-all":22,"./http/http-delete":28,"./http/http-get":29,"./http/http-post":30,"./http/http-put":31,"./http/http-submit-form":32,"./query":33,"./set-values":34,"./setter/remove-session":35,"./setter/set-dom":36,"./setter/set-query-result":37,"./setter/set-session":38,"./setter/set-var":39,"./trigger-event":40,"./wait-for":41}],27:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpInstructionProcessorBase = void 0;
var base_1 = _dereq_("../../base");
var winnower_1 = _dereq_("../winnower");
var HttpInstructionProcessorBase = /** @class */ (function (_super) {
    __extends(HttpInstructionProcessorBase, _super);
    function HttpInstructionProcessorBase(merchant) {
        return _super.call(this, merchant) || this;
    }
    HttpInstructionProcessorBase.prototype.constructRequest = function () {
        return new XMLHttpRequest();
    };
    HttpInstructionProcessorBase.prototype.processRequest = function (config, method, data) {
        var _this = this;
        return new Promise(function (res, rej) {
            var url = _this.parseString(config.url, data);
            var request = _this.constructRequest();
            request.onreadystatechange = function () { return __awaiter(_this, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    if (request.readyState === 4) {
                        if (request.status === 200) {
                            response = null;
                            if (request.responseText) {
                                response = request.responseText;
                                try {
                                    response = JSON.parse(response);
                                }
                                catch (x) {
                                    this.merchant.log("HTTP Error caught in onreadystatechange : ", x);
                                }
                            }
                            this.merchant.log('HTTP response: ', response);
                            res(response);
                        }
                        else {
                            this.merchant.log("HTTP onreadystatechange not 200 status : " + request.status + "  ");
                            rej();
                        }
                    }
                    return [2 /*return*/];
                });
            }); };
            request.open(method, url, true);
            var headers = config.headers;
            if (headers) {
                Object.keys(headers).forEach(function (k) {
                    request.setRequestHeader(k, _this.parseString(headers[k]));
                });
            }
            var body = null;
            if (config.data) {
                try {
                    body = typeof config.data === 'string' ? config.data : JSON.stringify(config.data);
                }
                catch (x) { }
                body = _this.parseString(body, data);
            }
            request.send(body);
        });
    };
    HttpInstructionProcessorBase.prototype.send = function (config, method, data) {
        return __awaiter(this, void 0, void 0, function () {
            var response, childProcessed, x_1, childInstruction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        childProcessed = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.processRequest(config, method, data)];
                    case 2:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        x_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        if (!(response && config.success)) return [3 /*break*/, 6];
                        childInstruction = config.success;
                        return [4 /*yield*/, winnower_1.InstructionWinnower.processInstruction(this.merchant, childInstruction, response)];
                    case 5:
                        _a.sent();
                        childProcessed = true;
                        _a.label = 6;
                    case 6: return [2 /*return*/, childProcessed];
                }
            });
        });
    };
    HttpInstructionProcessorBase.prototype.processInstruction = function (config, method, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!config) return [3 /*break*/, 1];
                        throw "Invalid HTTP config: " + JSON.stringify(config);
                    case 1:
                        if (typeof config.url === 'undefined')
                            config.url = '';
                        return [4 /*yield*/, this.send(config, method, data)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return HttpInstructionProcessorBase;
}(base_1.ProcessorBase));
exports.HttpInstructionProcessorBase = HttpInstructionProcessorBase;

},{"../../base":11,"../winnower":42}],28:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpDeleteInstructionProcessor = void 0;
var http_base_1 = _dereq_("./http-base");
var HttpDeleteInstructionProcessor = /** @class */ (function (_super) {
    __extends(HttpDeleteInstructionProcessor, _super);
    function HttpDeleteInstructionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    HttpDeleteInstructionProcessor.prototype.process = function (target, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.processInstruction(config, 'DELETE', data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return HttpDeleteInstructionProcessor;
}(http_base_1.HttpInstructionProcessorBase));
exports.HttpDeleteInstructionProcessor = HttpDeleteInstructionProcessor;

},{"./http-base":27}],29:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpGetInstructionProcessor = void 0;
var http_base_1 = _dereq_("./http-base");
var HttpGetInstructionProcessor = /** @class */ (function (_super) {
    __extends(HttpGetInstructionProcessor, _super);
    function HttpGetInstructionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    HttpGetInstructionProcessor.prototype.process = function (target, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.processInstruction(config, 'GET', data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return HttpGetInstructionProcessor;
}(http_base_1.HttpInstructionProcessorBase));
exports.HttpGetInstructionProcessor = HttpGetInstructionProcessor;

},{"./http-base":27}],30:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpPostInstructionProcessor = void 0;
var http_base_1 = _dereq_("./http-base");
var HttpPostInstructionProcessor = /** @class */ (function (_super) {
    __extends(HttpPostInstructionProcessor, _super);
    function HttpPostInstructionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    HttpPostInstructionProcessor.prototype.process = function (target, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.processInstruction(config, 'POST', data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return HttpPostInstructionProcessor;
}(http_base_1.HttpInstructionProcessorBase));
exports.HttpPostInstructionProcessor = HttpPostInstructionProcessor;

},{"./http-base":27}],31:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpPutInstructionProcessor = void 0;
var http_base_1 = _dereq_("./http-base");
var HttpPutInstructionProcessor = /** @class */ (function (_super) {
    __extends(HttpPutInstructionProcessor, _super);
    function HttpPutInstructionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    HttpPutInstructionProcessor.prototype.process = function (target, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.processInstruction(config, 'PUT', data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return HttpPutInstructionProcessor;
}(http_base_1.HttpInstructionProcessorBase));
exports.HttpPutInstructionProcessor = HttpPutInstructionProcessor;

},{"./http-base":27}],32:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpSubmitFormInstructionProcessor = void 0;
var http_base_1 = _dereq_("./http-base");
var HttpSubmitFormInstructionProcessor = /** @class */ (function (_super) {
    __extends(HttpSubmitFormInstructionProcessor, _super);
    function HttpSubmitFormInstructionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    HttpSubmitFormInstructionProcessor.prototype.process = function (target, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var childProcessed, input, form;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(config && config.input)) return [3 /*break*/, 6];
                        input = this.processInput(config, data);
                        if (!input) return [3 /*break*/, 4];
                        form = this.getForm(input);
                        this.merchant.log('http-submit-form:', form);
                        if (!form) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.submit(form, config, data)];
                    case 1:
                        childProcessed = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        console.error('Input parent form was not found:', config.input);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        console.error('Input element was not found:', config.input);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        console.error('Invalid SubmitFormConfig:', config);
                        _a.label = 7;
                    case 7: return [2 /*return*/, childProcessed];
                }
            });
        });
    };
    HttpSubmitFormInstructionProcessor.prototype.processInput = function (config, data) {
        var selector = config.input.startsWith('selector(') ? this.merchant.parseSelector(config.input) : config.input;
        var input = this.merchant.dom.querySelector(selector);
        if (input && input.nodeName === 'INPUT') {
            if (typeof config.value !== 'undefined')
                input['value'] = this.parseString(config.value, data);
        }
        return input;
    };
    HttpSubmitFormInstructionProcessor.prototype.getForm = function (el) {
        var parent = el.parentElement;
        if (parent) {
            if (parent.nodeName === 'FORM')
                return parent;
            else
                return this.getForm(parent);
        }
        else
            return null;
    };
    HttpSubmitFormInstructionProcessor.prototype.submit = function (form, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var httpConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        httpConfig = this.generateConfig(form, config);
                        return [4 /*yield*/, this.processInstruction(httpConfig, form.method, data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HttpSubmitFormInstructionProcessor.prototype.generateConfig = function (form, config) {
        var data = this.serializeForm(form, config);
        this.merchant.log('FORM DATA:', data);
        return {
            url: form.action,
            data: data,
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: config.success
        };
    };
    HttpSubmitFormInstructionProcessor.prototype.serializeForm = function (form, config) {
        var _this = this;
        var data = Array.from(form.querySelectorAll('input, select'))
            .filter(function (input) { return !!input.name; })
            .map(function (input) { return encodeURIComponent(input.name) + "=" + encodeURIComponent(input.value); })
            .join('&');
        if (config.append && config.append.length) {
            config.append.forEach(function (s) {
                var el = document.querySelector(_this.merchant.parseSelector(s));
                if (el && el['name']) {
                    data += "&" + el['name'] + "=" + el['value'];
                }
            });
        }
        return data;
    };
    return HttpSubmitFormInstructionProcessor;
}(http_base_1.HttpInstructionProcessorBase));
exports.HttpSubmitFormInstructionProcessor = HttpSubmitFormInstructionProcessor;

},{"./http-base":27}],33:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryInstructionProcessor = void 0;
var base_1 = _dereq_("../base");
var QueryInstructionProcessor = /** @class */ (function (_super) {
    __extends(QueryInstructionProcessor, _super);
    function QueryInstructionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    QueryInstructionProcessor.prototype.parse = function (segment) {
        if (segment.startsWith('attr(')) {
            var attr = segment.substring(segment.indexOf('(') + 1, segment.indexOf(')'));
            if (!this.current) {
                this.merchant.log("Query parse: Was not able to get attr: " + attr + " as selector did not find element.");
            }
            return this.current.getAttribute(attr);
        }
        else if (segment === 'text') {
            return this.current.innerText;
        }
        else {
            var selector = segment;
            if (segment.startsWith('selector(')) {
                selector = this.merchant.parseSelector(segment);
            }
            return document.querySelector(selector);
        }
    };
    QueryInstructionProcessor.prototype.process = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var args, name, segments, i;
            return __generator(this, function (_a) {
                args = target.split(':');
                name = args[0];
                segments = args.slice(1);
                for (i = 0; i < segments.length; i++) {
                    this.current = this.parse(segments[i]);
                }
                this.merchant.setVar(name, this.current);
                return [2 /*return*/, false];
            });
        });
    };
    return QueryInstructionProcessor;
}(base_1.ProcessorBase));
exports.QueryInstructionProcessor = QueryInstructionProcessor;

},{"../base":11}],34:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetValuesInstructionProcessor = void 0;
var base_1 = _dereq_("../base");
var SetValuesInstructionProcessor = /** @class */ (function (_super) {
    __extends(SetValuesInstructionProcessor, _super);
    function SetValuesInstructionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    SetValuesInstructionProcessor.prototype.process = function (target, map, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                Object.keys(map).forEach(function (k) {
                    // Set all the elements with the same selector
                    Array.from(document.querySelectorAll(_this.parseString(k))).forEach(function (el) {
                        el['value'] = _this.parseString(map[k]);
                    });
                });
                return [2 /*return*/, false];
            });
        });
    };
    return SetValuesInstructionProcessor;
}(base_1.ProcessorBase));
exports.SetValuesInstructionProcessor = SetValuesInstructionProcessor;

},{"../base":11}],35:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveSessionInstructionProcessor = void 0;
var base_1 = _dereq_("../../base");
var RemoveSessionInstructionProcessor = /** @class */ (function (_super) {
    __extends(RemoveSessionInstructionProcessor, _super);
    function RemoveSessionInstructionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    RemoveSessionInstructionProcessor.prototype.process = function (target, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                sessionStorage.removeItem(target);
                return [2 /*return*/, false];
            });
        });
    };
    return RemoveSessionInstructionProcessor;
}(base_1.ProcessorBase));
exports.RemoveSessionInstructionProcessor = RemoveSessionInstructionProcessor;

},{"../../base":11}],36:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDomInstructionProcessor = void 0;
var base_1 = _dereq_("../../base");
var SetDomInstructionProcessor = /** @class */ (function (_super) {
    __extends(SetDomInstructionProcessor, _super);
    function SetDomInstructionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    SetDomInstructionProcessor.prototype.constructParser = function () {
        return new DOMParser();
    };
    SetDomInstructionProcessor.prototype.process = function (target, data) {
        return __awaiter(this, void 0, void 0, function () {
            var html, parser, dom;
            return __generator(this, function (_a) {
                html = this.parseString(target, data);
                parser = this.constructParser();
                dom = parser.parseFromString(html, 'text/html');
                this.merchant.setDom(dom);
                return [2 /*return*/, false];
            });
        });
    };
    return SetDomInstructionProcessor;
}(base_1.ProcessorBase));
exports.SetDomInstructionProcessor = SetDomInstructionProcessor;

},{"../../base":11}],37:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetQueryResultInstructionProcessor = void 0;
var base_1 = _dereq_("../../base");
var SetQueryResultInstructionProcessor = /** @class */ (function (_super) {
    __extends(SetQueryResultInstructionProcessor, _super);
    function SetQueryResultInstructionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    SetQueryResultInstructionProcessor.prototype.process = function (target, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.merchant.setQueryResult(this.parseString(target, data));
                return [2 /*return*/, false];
            });
        });
    };
    return SetQueryResultInstructionProcessor;
}(base_1.ProcessorBase));
exports.SetQueryResultInstructionProcessor = SetQueryResultInstructionProcessor;

},{"../../base":11}],38:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetSessionInstructionProcessor = void 0;
var base_1 = _dereq_("../../base");
var SetSessionInstructionProcessor = /** @class */ (function (_super) {
    __extends(SetSessionInstructionProcessor, _super);
    function SetSessionInstructionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    SetSessionInstructionProcessor.prototype.process = function (target, data) {
        return __awaiter(this, void 0, void 0, function () {
            var indexOfFirstColon, key, valueSection;
            return __generator(this, function (_a) {
                indexOfFirstColon = target.indexOf(':');
                key = target.substring(0, indexOfFirstColon);
                valueSection = target.substring(indexOfFirstColon + 1);
                sessionStorage.setItem(key, this.parseString(valueSection, data));
                return [2 /*return*/, false];
            });
        });
    };
    return SetSessionInstructionProcessor;
}(base_1.ProcessorBase));
exports.SetSessionInstructionProcessor = SetSessionInstructionProcessor;

},{"../../base":11}],39:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetVarInstructionProcessor = void 0;
var base_1 = _dereq_("../../base");
var SetVarInstructionProcessor = /** @class */ (function (_super) {
    __extends(SetVarInstructionProcessor, _super);
    function SetVarInstructionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    SetVarInstructionProcessor.prototype.process = function (target, data) {
        return __awaiter(this, void 0, void 0, function () {
            var segments;
            return __generator(this, function (_a) {
                segments = target.split(':');
                this.merchant.setVar(segments[0], this.parseString(segments[1], data));
                return [2 /*return*/, false];
            });
        });
    };
    return SetVarInstructionProcessor;
}(base_1.ProcessorBase));
exports.SetVarInstructionProcessor = SetVarInstructionProcessor;

},{"../../base":11}],40:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerEventInstructionProcessor = void 0;
var base_1 = _dereq_("../base");
var TriggerEventInstructionProcessor = /** @class */ (function (_super) {
    __extends(TriggerEventInstructionProcessor, _super);
    function TriggerEventInstructionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    TriggerEventInstructionProcessor.prototype.process = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var segments, selector, element, event;
            return __generator(this, function (_a) {
                segments = target.split(':');
                selector = this.merchant.parseSelector(segments[0]);
                element = this.merchant.dom.querySelector(selector);
                event = this.merchant.dom.createEvent('HTMLEvents');
                event.initEvent(segments[1], true, false);
                element.dispatchEvent(event);
                return [2 /*return*/, false];
            });
        });
    };
    return TriggerEventInstructionProcessor;
}(base_1.ProcessorBase));
exports.TriggerEventInstructionProcessor = TriggerEventInstructionProcessor;

},{"../base":11}],41:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaitForInstructionProcessor = void 0;
var base_1 = _dereq_("../base");
var conditional_1 = _dereq_("./conditional");
var WaitForInstructionProcessor = /** @class */ (function (_super) {
    __extends(WaitForInstructionProcessor, _super);
    function WaitForInstructionProcessor(merchant) {
        return _super.call(this, merchant) || this;
    }
    WaitForInstructionProcessor.prototype.process = function (condition) {
        return __awaiter(this, void 0, void 0, function () {
            var processor;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        processor = new conditional_1.ConditionalInstructionProcessor(this.merchant, null, null);
                        return [4 /*yield*/, this.merchant.waitFor(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, processor.processCondition(condition)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, false];
                }
            });
        });
    };
    return WaitForInstructionProcessor;
}(base_1.ProcessorBase));
exports.WaitForInstructionProcessor = WaitForInstructionProcessor;

},{"../base":11,"./conditional":24}],42:[function(_dereq_,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructionWinnower = void 0;
var conditional_1 = _dereq_("./conditional");
var factory_1 = _dereq_("./factory");
var http_base_1 = _dereq_("./http/http-base");
var constants_1 = _dereq_("./constants");
var set_values_1 = _dereq_("./set-values");
var InstructionWinnower = /** @class */ (function () {
    function InstructionWinnower() {
    }
    InstructionWinnower.processInstruction = function (merchant, instruction, data) {
        return __awaiter(this, void 0, void 0, function () {
            var keys, _loop_1, this_1, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof instruction !== 'boolean')) return [3 /*break*/, 4];
                        keys = Object.keys(instruction);
                        _loop_1 = function (i) {
                            var key, child, startsWithTerm, isTwoPart, term, value, processor, childInstructionProcessed, processor;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        key = keys[i];
                                        child = instruction[key];
                                        startsWithTerm = constants_1.Constants.CONDITIONAL_TERMS.concat(constants_1.Constants.REGULAR_TERMS)
                                            .concat(constants_1.Constants.HTTP_TERMS)
                                            .some(function (t) { return key.startsWith(t); });
                                        if (!startsWithTerm) return [3 /*break*/, 8];
                                        isTwoPart = key.includes(':');
                                        term = isTwoPart ? key.substring(0, key.indexOf(':')) : key;
                                        value = isTwoPart ? key.substring(key.indexOf(':') + 1) : null;
                                        if (!constants_1.Constants.CONDITIONAL_TERMS.includes(term)) return [3 /*break*/, 2];
                                        merchant.log('WINNOW CONDITION:', value);
                                        processor = new conditional_1.ConditionalInstructionProcessor(merchant, value, child, data);
                                        return [4 /*yield*/, processor.process()];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 8];
                                    case 2:
                                        merchant.log('INSTRUCTION:', term + " " + value + " (" + JSON.stringify(data) + ")");
                                        childInstructionProcessed = void 0;
                                        processor = factory_1.InstructionProcessorFactory.construct(merchant, term);
                                        if (!(processor instanceof http_base_1.HttpInstructionProcessorBase || processor instanceof set_values_1.SetValuesInstructionProcessor)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, processor.process(value, child, data)];
                                    case 3:
                                        childInstructionProcessed = _a.sent();
                                        return [3 /*break*/, 6];
                                    case 4: return [4 /*yield*/, processor.process(value, data)];
                                    case 5:
                                        childInstructionProcessed = _a.sent();
                                        _a.label = 6;
                                    case 6:
                                        if (!!childInstructionProcessed) return [3 /*break*/, 8];
                                        return [4 /*yield*/, this_1.processInstruction(merchant, child, data)];
                                    case 7:
                                        _a.sent();
                                        _a.label = 8;
                                    case 8: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < keys.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return InstructionWinnower;
}());
exports.InstructionWinnower = InstructionWinnower;

},{"./conditional":24,"./constants":25,"./factory":26,"./http/http-base":27,"./set-values":34}],43:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringVariableArgDetails = void 0;
var StringVariableArgDetails = /** @class */ (function () {
    function StringVariableArgDetails(value, matcher) {
        this.begin = value.indexOf(matcher);
        var remainder = value.substring(value.indexOf(matcher) + matcher.length);
        this.end = this.begin + matcher.length + remainder.indexOf(']') + 1;
        this.arg = remainder.substring(0, remainder.indexOf(']'));
    }
    return StringVariableArgDetails;
}());
exports.StringVariableArgDetails = StringVariableArgDetails;

},{}]},{},[9])
(9)
});