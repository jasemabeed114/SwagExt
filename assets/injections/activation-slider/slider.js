!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Prodege=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActivationTypes;
(function (ActivationTypes) {
    ActivationTypes[ActivationTypes["unsupported"] = 0] = "unsupported";
    ActivationTypes[ActivationTypes["popupOnly"] = 1] = "popupOnly";
    ActivationTypes[ActivationTypes["standard"] = 2] = "standard";
    ActivationTypes[ActivationTypes["discover"] = 3] = "discover";
    ActivationTypes[ActivationTypes["autoRedirect"] = 7] = "autoRedirect";
})(ActivationTypes = exports.ActivationTypes || (exports.ActivationTypes = {}));

},{}],2:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clients;
(function (Clients) {
    Clients[Clients["sb"] = 22] = "sb";
    Clients[Clients["mp"] = 257] = "mp";
    Clients[Clients["tada"] = 258] = "tada";
    Clients[Clients["ibd"] = 260] = "ibd";
    Clients[Clients["upm"] = 263] = "upm";
})(Clients = exports.Clients || (exports.Clients = {}));

},{}],3:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleLogLevels;
(function (ConsoleLogLevels) {
    ConsoleLogLevels[ConsoleLogLevels["off"] = 0] = "off";
    ConsoleLogLevels[ConsoleLogLevels["error"] = 1] = "error";
    ConsoleLogLevels[ConsoleLogLevels["warn"] = 2] = "warn";
    ConsoleLogLevels[ConsoleLogLevels["info"] = 3] = "info";
    ConsoleLogLevels[ConsoleLogLevels["debug"] = 4] = "debug";
    ConsoleLogLevels[ConsoleLogLevels["trace"] = 5] = "trace";
    ConsoleLogLevels[ConsoleLogLevels["all"] = 6] = "all";
})(ConsoleLogLevels = exports.ConsoleLogLevels || (exports.ConsoleLogLevels = {}));

},{}],4:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PageIds;
(function (PageIds) {
    PageIds[PageIds["Default"] = 274] = "Default";
    PageIds[PageIds["AutoRedirect"] = 280] = "AutoRedirect";
    PageIds[PageIds["ActivationSliderClick"] = 281] = "ActivationSliderClick";
    PageIds[PageIds["CouponSliderClick"] = 282] = "CouponSliderClick";
    PageIds[PageIds["PopupMerchantClick"] = 283] = "PopupMerchantClick";
    PageIds[PageIds["PopupFeaturedMerchantClick"] = 284] = "PopupFeaturedMerchantClick";
})(PageIds = exports.PageIds || (exports.PageIds = {}));

},{}],5:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * In most cases, we shouldn't have to specify this value and we should use normal business logic
 * to determine which tab to activate/redirect in.  But sometimes, business logic is illogical.
 */
var RedirectContext;
(function (RedirectContext) {
    RedirectContext[RedirectContext["default"] = 0] = "default";
    RedirectContext[RedirectContext["background"] = 1] = "background";
    RedirectContext[RedirectContext["currentTab"] = 2] = "currentTab";
    RedirectContext[RedirectContext["silentTab"] = 3] = "silentTab"; // Force silent tab (e.g. for this post-registration and/or login scenario)
})(RedirectContext = exports.RedirectContext || (exports.RedirectContext = {}));

},{}],6:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RuntimeMessageTypes;
(function (RuntimeMessageTypes) {
    RuntimeMessageTypes[RuntimeMessageTypes["dataInsightsResults"] = 0] = "dataInsightsResults";
    RuntimeMessageTypes[RuntimeMessageTypes["log"] = 1] = "log";
    RuntimeMessageTypes[RuntimeMessageTypes["login"] = 2] = "login";
    RuntimeMessageTypes[RuntimeMessageTypes["activate"] = 3] = "activate";
    RuntimeMessageTypes[RuntimeMessageTypes["register"] = 4] = "register";
    RuntimeMessageTypes[RuntimeMessageTypes["getCdnHost"] = 5] = "getCdnHost";
    RuntimeMessageTypes[RuntimeMessageTypes["getFilePath"] = 6] = "getFilePath";
    RuntimeMessageTypes[RuntimeMessageTypes["showTutorial"] = 7] = "showTutorial";
    RuntimeMessageTypes[RuntimeMessageTypes["getPopupData"] = 8] = "getPopupData";
    RuntimeMessageTypes[RuntimeMessageTypes["logImpression"] = 9] = "logImpression";
    RuntimeMessageTypes[RuntimeMessageTypes["executeReflect"] = 10] = "executeReflect";
    RuntimeMessageTypes[RuntimeMessageTypes["getAllReflects"] = 11] = "getAllReflects";
    RuntimeMessageTypes[RuntimeMessageTypes["getStorageItem"] = 12] = "getStorageItem";
    RuntimeMessageTypes[RuntimeMessageTypes["setStorageItem"] = 13] = "setStorageItem";
    RuntimeMessageTypes[RuntimeMessageTypes["executeCallback"] = 14] = "executeCallback";
    RuntimeMessageTypes[RuntimeMessageTypes["logCouponResults"] = 15] = "logCouponResults";
    RuntimeMessageTypes[RuntimeMessageTypes["dismissActivation"] = 16] = "dismissActivation";
    RuntimeMessageTypes[RuntimeMessageTypes["executeReflectCmd"] = 17] = "executeReflectCmd";
    RuntimeMessageTypes[RuntimeMessageTypes["getLocalizedString"] = 18] = "getLocalizedString";
    RuntimeMessageTypes[RuntimeMessageTypes["notificationClicked"] = 19] = "notificationClicked";
    RuntimeMessageTypes[RuntimeMessageTypes["resetCouponCoolDown"] = 20] = "resetCouponCoolDown";
    RuntimeMessageTypes[RuntimeMessageTypes["getFeaturedMerchants"] = 21] = "getFeaturedMerchants";
    RuntimeMessageTypes[RuntimeMessageTypes["sendPasswordReminder"] = 22] = "sendPasswordReminder";
    RuntimeMessageTypes[RuntimeMessageTypes["refreshAccountBalance"] = 23] = "refreshAccountBalance";
    RuntimeMessageTypes[RuntimeMessageTypes["sendDataFromHostToExt"] = 24] = "sendDataFromHostToExt";
    RuntimeMessageTypes[RuntimeMessageTypes["setActivationInjected"] = 25] = "setActivationInjected";
    RuntimeMessageTypes[RuntimeMessageTypes["constructRewardString"] = 26] = "constructRewardString";
    RuntimeMessageTypes[RuntimeMessageTypes["getSERPMerchantMetasByUrls"] = 27] = "getSERPMerchantMetasByUrls";
    RuntimeMessageTypes[RuntimeMessageTypes["setActivationConfirmed"] = 28] = "setActivationConfirmed";
    RuntimeMessageTypes[RuntimeMessageTypes["constructActivateString"] = 29] = "constructActivateString";
    RuntimeMessageTypes[RuntimeMessageTypes["notificationRemoveClicked"] = 30] = "notificationRemoveClicked";
    RuntimeMessageTypes[RuntimeMessageTypes["navigateToFeaturedMerchant"] = 31] = "navigateToFeaturedMerchant";
    RuntimeMessageTypes[RuntimeMessageTypes["userClickedInPage"] = 32] = "userClickedInPage";
    RuntimeMessageTypes[RuntimeMessageTypes["getCurrencySymbol"] = 33] = "getCurrencySymbol";
    RuntimeMessageTypes[RuntimeMessageTypes["constructRewardStringInCurrency"] = 34] = "constructRewardStringInCurrency";
    RuntimeMessageTypes[RuntimeMessageTypes["updateMemberPrefs"] = 35] = "updateMemberPrefs";
    RuntimeMessageTypes[RuntimeMessageTypes["callBrandServiceFunction"] = 36] = "callBrandServiceFunction";
    RuntimeMessageTypes[RuntimeMessageTypes["setTabShopperMarketingInjected"] = 37] = "setTabShopperMarketingInjected";
    RuntimeMessageTypes[RuntimeMessageTypes["openSiteTab"] = 38] = "openSiteTab";
    RuntimeMessageTypes[RuntimeMessageTypes["openSettings"] = 39] = "openSettings";
    RuntimeMessageTypes[RuntimeMessageTypes["closeSettings"] = 40] = "closeSettings";
    RuntimeMessageTypes[RuntimeMessageTypes["openGoTab"] = 41] = "openGoTab";
})(RuntimeMessageTypes = exports.RuntimeMessageTypes || (exports.RuntimeMessageTypes = {}));

},{}],7:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UrlTypes;
(function (UrlTypes) {
    UrlTypes["Merchant"] = "MERCHANT";
    UrlTypes["Checkout"] = "CHECKOUT";
    UrlTypes["PostPurchase"] = "POSTPURCHASE";
    UrlTypes["Serp"] = "SERP";
})(UrlTypes = exports.UrlTypes || (exports.UrlTypes = {}));

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var runtime_message_1 = _dereq_("../runtime-message");
var runtime_message_types_1 = _dereq_("../../enums/runtime-message-types");
var InjectionBase = /** @class */ (function () {
    function InjectionBase(extensionRuntimeId) {
        this.extensionRuntimeId = extensionRuntimeId;
    }
    InjectionBase.prototype.sendExtensionMessage = function (message) {
        var _this = this;
        return new Promise(function (res) {
            var fn = window['__browserApi'].runtime.sendMessage;
            var cb = function (response) {
                res(response);
            };
            if (window['__browserName'] === 'edge') {
                fn(_this.extensionRuntimeId, message, cb);
            }
            else {
                fn(_this.extensionRuntimeId, message, {}, cb);
            }
        });
    };
    InjectionBase.prototype.getCdnHost = function (messageName) {
        var substitutions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            substitutions[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var extensionMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        extensionMessage = new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.getCdnHost);
                        return [4 /*yield*/, this.sendExtensionMessage(extensionMessage)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InjectionBase.prototype.getI18nMessage = function (messageName) {
        var substitutions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            substitutions[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var extensionMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        extensionMessage = new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.getLocalizedString, __spreadArrays([messageName], substitutions));
                        return [4 /*yield*/, this.sendExtensionMessage(extensionMessage)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InjectionBase.prototype.getExtensionFilePath = function (relativePath) {
        return __awaiter(this, void 0, void 0, function () {
            var extensionMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        extensionMessage = new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.getFilePath, relativePath);
                        return [4 /*yield*/, this.sendExtensionMessage(extensionMessage)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return InjectionBase;
}());
exports.InjectionBase = InjectionBase;

},{"../../enums/runtime-message-types":6,"../runtime-message":11}],9:[function(_dereq_,module,exports){
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
var slider_base_1 = _dereq_("./slider-base");
var runtime_message_1 = _dereq_("../../runtime-message");
var runtime_message_types_1 = _dereq_("../../../enums/runtime-message-types");
var activation_types_1 = _dereq_("../../../enums/activation-types");
var url_types_1 = _dereq_("../../../enums/url-types");
var ActivationSliderBase = /** @class */ (function (_super) {
    __extends(ActivationSliderBase, _super);
    function ActivationSliderBase(extensionRuntimeId, sliderId, html, css, modelJson, slideTime) {
        if (slideTime === void 0) { slideTime = 0; }
        var _this = _super.call(this, extensionRuntimeId, sliderId, html, css, modelJson, slideTime) || this;
        _this.activatedSliderTimeout = 5000;
        _this.initialize();
        return _this;
    }
    ActivationSliderBase.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setupAndShowSlider();
                return [2 /*return*/];
            });
        });
    };
    ActivationSliderBase.prototype.setSliderBtnText = function (merchantOffer, merchantOfferShort) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.applySliderBtnText(merchantOffer);
                return [2 /*return*/];
            });
        });
    };
    // user activated, so set activate slider style to be activatED
    ActivationSliderBase.prototype.adjustStyleBySliderType = function (self) {
        var _this = this;
        if (self.model.activated && !self.model.activationConfirmed && !this.isLoggedOutAutoRedirectActivation(self)) {
            if (this.sliderRoot.querySelector('.remind-later')) {
                this.sliderRoot.querySelector('.remind-later').remove();
            }
            this.sliderRoot.querySelector("#" + this.sliderId + " .slider-action").classList.add('slider-activation-confirmation');
            setTimeout(function () {
                _this.removeSlide("#" + _this.sliderId);
                _this.removeSlide("." + _this.getClientNameAsString() + "ShopBonus");
            }, self.activatedSliderTimeout);
            self.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.setActivationConfirmed, { tabId: this.model.tabId }));
        }
    };
    ActivationSliderBase.prototype.attachButtonClickHandler = function (self) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                document.addEventListener(this.REWARDS_ACTIVATED, function _listener(e) {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a, _b, _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    if (!(e.detail.client === self.model.client)) return [3 /*break*/, 2];
                                    self.model.activated = true;
                                    self.adjustStyleBySliderType(self);
                                    _b = (_a = self).setSliderBtnText;
                                    _c = self.merchantReward + " ";
                                    return [4 /*yield*/, self.getI18nMessage('nowActive')];
                                case 1:
                                    _b.apply(_a, [_c + (_d.sent())]);
                                    document.removeEventListener(self.REWARDS_ACTIVATED, _listener);
                                    _d.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    });
                });
                // this is start of Activation Click
                if (this.sliderRoot && this.sliderRoot.querySelector('.slider-action')) {
                    this.sliderRoot.querySelector('.slider-action').onclick = function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, self.activate(url_types_1.UrlTypes.Merchant)];
                                case 1:
                                    _a.sent();
                                    this.adjustStyleBySliderType(self);
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                }
                return [2 /*return*/];
            });
        });
    };
    // This is primarily used to avoid displaying the "activation confirmed" slider for logged out users during auto-redirect
    ActivationSliderBase.prototype.isLoggedOutAutoRedirectActivation = function (self) {
        return self.model.activated && self.model.merchant.type === activation_types_1.ActivationTypes.autoRedirect && !self.isLoggedIn;
    };
    return ActivationSliderBase;
}(slider_base_1.SliderBase));
exports.ActivationSliderBase = ActivationSliderBase;

},{"../../../enums/activation-types":1,"../../../enums/runtime-message-types":6,"../../../enums/url-types":7,"../../runtime-message":11,"./slider-base":10}],10:[function(_dereq_,module,exports){
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
var injection_base_1 = _dereq_("../injection-base");
var runtime_message_1 = _dereq_("../../runtime-message");
var runtime_message_types_1 = _dereq_("../../../enums/runtime-message-types");
var url_types_1 = _dereq_("../../../enums/url-types");
var page_ids_1 = _dereq_("../../../enums/page-ids");
var clients_1 = _dereq_("../../../enums/clients");
var redirect_context_1 = _dereq_("../../../enums/redirect-context");
var log_levels_1 = _dereq_("../../../enums/log-levels");
var SliderBase = /** @class */ (function (_super) {
    __extends(SliderBase, _super);
    function SliderBase(extensionRuntimeId, sliderId, html, css, modelJson, slideTime) {
        if (slideTime === void 0) { slideTime = 0; }
        var _this = _super.call(this, extensionRuntimeId) || this;
        _this.SLIDER_READY = 'slider-ready';
        _this.REWARDS_ACTIVATED = 'rewards-activated';
        _this.relocationAttempts = 0;
        _this.generateContainerLayoutClass = function (containerLayout) {
            return "slider-container--" + containerLayout;
        };
        _this.css = css;
        _this.html = html;
        _this.model = modelJson;
        _this.extensionRuntimeId = extensionRuntimeId;
        _this.sliderId = sliderId;
        _this.slideTime = slideTime;
        _this.couponCount = !_this.model.merchant.coupons ? 0 : _this.model.merchant.coupons.length;
        _this.isLoggedIn = _this.model.memberId && _this.model.memberId > 0;
        var self = _this;
        _this.initialize()
            .then(function () {
            self.attachEventHandlers(self);
            // Don't show slider when user is deep into the site
            self.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.setActivationInjected, { tabId: self.model.tabId }));
        });
        return _this;
    }
    SliderBase.prototype.getElement = function (selector) {
        return this.sliderRoot.querySelector(selector);
    };
    SliderBase.prototype.getShadowContainerId = function () {
        return this.getClientNameAsString() + "-shadow-container";
    };
    SliderBase.prototype.getClientNameAsString = function () {
        return clients_1.Clients[this.model.client];
    };
    SliderBase.prototype.constructActivateString = function (isShort) {
        return __awaiter(this, void 0, void 0, function () {
            var extensionMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        extensionMessage = new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.constructActivateString, {
                            clientId: this.model.client,
                            reward: this.model.merchant.reward,
                            activated: this.model.activated,
                            isShort: isShort,
                        });
                        return [4 /*yield*/, this.sendExtensionMessage(extensionMessage)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SliderBase.prototype.constructRewardString = function () {
        return __awaiter(this, void 0, void 0, function () {
            var extensionMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        extensionMessage = new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.constructRewardString, {
                            clientId: this.model.client,
                            reward: this.model.merchant.reward
                        });
                        return [4 /*yield*/, this.sendExtensionMessage(extensionMessage)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SliderBase.prototype.logImpression = function () {
        return __awaiter(this, void 0, void 0, function () {
            var extensionMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        extensionMessage = new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.logImpression, this.model.tabId);
                        return [4 /*yield*/, this.sendExtensionMessage(extensionMessage)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SliderBase.prototype.applyCss = function (css) {
        var style = document.createElement('style');
        style.innerHTML = Sanitizer.escapeHTML(css);
        this.appendStyle(style);
    };
    SliderBase.prototype.appendStyle = function (style) {
        if (this.sliderRoot === document) {
            document.head.appendChild(style);
        }
        else if (this.sliderRoot) {
            this.sliderRoot.appendChild(style);
        }
    };
    SliderBase.prototype.activate = function (urlType, redirectContext) {
        if (redirectContext === void 0) { redirectContext = redirect_context_1.RedirectContext.default; }
        return __awaiter(this, void 0, void 0, function () {
            var pageId, activationState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pageId = page_ids_1.PageIds.Default;
                        if (urlType === url_types_1.UrlTypes.Checkout) {
                            pageId = page_ids_1.PageIds.CouponSliderClick;
                        }
                        else if (urlType === url_types_1.UrlTypes.Merchant) {
                            pageId = page_ids_1.PageIds.ActivationSliderClick;
                        }
                        return [4 /*yield*/, this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.activate, {
                                merchantId: this.model.merchant.id,
                                tabId: this.model.tabId,
                                urlType: urlType,
                                pageId: pageId,
                                redirectContext: redirectContext
                            }))];
                    case 1:
                        activationState = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SliderBase.prototype.injectShadowDomOrNormal = function (sliderContainer, overlay) {
        var result = true;
        if (!document.getElementById(this.sliderId) && !document.getElementById(this.getShadowContainerId())) {
            var shadowContainer = document.createElement('div');
            shadowContainer.id = this.getShadowContainerId();
            if (typeof shadowContainer.attachShadow === 'function') { // Shadow dom is available
                var shadowRoot = shadowContainer.attachShadow({ mode: 'open' });
                this.sliderRoot = shadowRoot;
                this.applyCss(this.css);
                if (overlay)
                    shadowRoot.appendChild(overlay);
                shadowRoot.appendChild(sliderContainer);
                this.insertIntoDocument(shadowContainer, document.getElementById(this.getShadowContainerId()));
            }
            else {
                this.sliderRoot = document.documentElement;
                this.applyCss(this.css);
                if (overlay)
                    this.sliderRoot.appendChild(overlay);
                this.sliderRoot.appendChild(sliderContainer);
            }
        }
        else {
            result = false;
        }
        document.dispatchEvent(new CustomEvent(this.SLIDER_READY));
        return result;
    };
    /**
     * Insert slider / shadow dom container into the document
     * Keep MP below SB (below in display, above in <html>)
     * @param newChild: To be inserted
     * @param sbElement: SB reference element
     */
    SliderBase.prototype.insertIntoDocument = function (newChild, sbElement) {
        if ([clients_1.Clients.upm, clients_1.Clients.mp].includes(this.model.client) && sbElement) {
            document.documentElement.insertBefore(newChild, sbElement);
        }
        else {
            document.documentElement.appendChild(newChild);
        }
    };
    SliderBase.prototype.setupAndShowSlider = function () {
        return __awaiter(this, void 0, void 0, function () {
            var overlay, sliderContainer, self_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        overlay = document.createElement('div');
                        overlay.className = 'SBBackgroundMask';
                        overlay.style.display = 'none';
                        sliderContainer = document.createElement('div');
                        sliderContainer.id = this.sliderId;
                        sliderContainer.className = 'slider-container--logo-left swagbutton-no-print';
                        sliderContainer.classList.add(this.getClientNameAsString() + "-slider-reset");
                        sliderContainer.innerHTML = this.html;
                        if (!this.injectShadowDomOrNormal(sliderContainer, overlay)) return [3 /*break*/, 11];
                        if (!(this.model.shopBonusUrl && this.model.shopBonusAmount)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.injectShopBonus(this.model.shopBonusUrl, this.model.shopBonusAmount)];
                    case 1:
                        _a.sent();
                        this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.setStorageItem, {
                            key: 'shop-bonus-last-shown',
                            value: Date.now(),
                        }));
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.applyLocalization()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.applyImageStyles()];
                    case 4:
                        _a.sent();
                        if (!(clients_1.Clients.mp === this.model.client)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.injectFontFaces()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        if (!(this.model.client === clients_1.Clients.upm)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.injectFontFacesUpm()];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        if (!(this.model.client === clients_1.Clients.tada)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.injectFontFacesTada()];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10:
                        self_1 = this;
                        this.adjustStyleBySliderType(self_1);
                        if (this.model.client !== clients_1.Clients.tada) {
                            this.avoidHeader(sliderContainer);
                        }
                        this.showSlide('.slider-coupon');
                        this.moveDownChecker(sliderContainer);
                        this.logImpression();
                        _a.label = 11;
                    case 11:
                        this.attachEventHandlers(this);
                        // Don't show slider when user is deep into the site
                        this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.setActivationInjected, { tabId: this.model.tabId }));
                        return [2 /*return*/];
                }
            });
        });
    };
    //used when we need to remove duplicates for Apply Coupons
    SliderBase.prototype.updateCouponCount = function () {
        this.couponCount = !this.model.merchant.coupons ? 0 : this.model.merchant.coupons.length;
        //update text if the slider has already been setup
        if (this.sliderRoot) {
            this.applyPredefinedLocalizations();
            this.setSliderTitle();
        }
    };
    SliderBase.prototype.removeSlide = function (sliderContainerSelector) {
        var activeSlideClass = '.slider-slide--active';
        var activeContainerClass = 'slider-container--active';
        var activeShopBonusClass = 'shop-bonus--active';
        this.tryHideBottom();
        var currentSlide = this.sliderRoot.querySelector(activeSlideClass);
        var containerLayoutAttr = 'data-container-layout';
        var currentContainerLayout = currentSlide.getAttribute(containerLayoutAttr);
        var currentContainerLayoutClass = this.generateContainerLayoutClass(currentContainerLayout);
        var currentContainer = this.sliderRoot.querySelector(sliderContainerSelector);
        // sometimes we've already removed the slider (like when we check for the shopbonus and there was not one.)
        if (currentContainer) {
            currentContainer.classList.remove(activeContainerClass);
            currentContainer.classList.remove(activeShopBonusClass);
            setTimeout(function () {
                currentContainer.classList.remove(currentContainerLayoutClass);
            }, 2000);
        }
    };
    SliderBase.prototype.injectShopBonus = function (shopBonusUrl, shopBonusAmount) {
        return __awaiter(this, void 0, void 0, function () {
            var shopBonus, shopBonusAvailable, shopBonusDescription, shopBonusDetails, slider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shopBonus = document.createElement('div');
                        shopBonus.setAttribute('class', this.getClientNameAsString() + "ShopBonus");
                        return [4 /*yield*/, this.getI18nMessage("shopBonusAvailable", shopBonusAmount)];
                    case 1:
                        shopBonusAvailable = _a.sent();
                        return [4 /*yield*/, this.getI18nMessage("shopBonusDescription")];
                    case 2:
                        shopBonusDescription = _a.sent();
                        return [4 /*yield*/, this.getI18nMessage("shopBonusDetails")];
                    case 3:
                        shopBonusDetails = _a.sent();
                        shopBonus.innerHTML = "\n      <div class=\"" + this.getClientNameAsString() + "ShopBonusFlex\">\n        <div class=\"" + this.getClientNameAsString() + "ShopBonusImg\"></div>\n        <div class=\"" + this.getClientNameAsString() + "ShopBonusText\">\n          <h1>" + shopBonusAvailable + "</h1>\n          <h2>" + shopBonusDescription + "</h2>\n          <a class=\"" + this.getClientNameAsString() + "ShopBonusDetails\" href=\"" + shopBonusUrl + "\" target=\"_blank\">\n            " + shopBonusDetails + "\n          </a>\n        </div>\n      </div>";
                        slider = this.sliderRoot.getElementById(this.getClientNameAsString() + "-slider-container");
                        if (slider) {
                            this.sliderRoot.insertBefore(shopBonus, slider);
                        }
                        else {
                            this.sliderRoot.appendChild(shopBonus);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SliderBase.prototype.showSlide = function (slideSelector) {
        var activeSlideClass = 'slider-slide--active';
        var containerLayoutAttr = 'data-container-layout';
        var currentSlide = this.sliderRoot.querySelector("." + activeSlideClass);
        if (currentSlide) {
            currentSlide.classList.remove(activeSlideClass);
        }
        var nextSlide = this.sliderRoot.querySelector(slideSelector);
        if (nextSlide) {
            var nextContainerLayout = nextSlide.getAttribute(containerLayoutAttr);
            var nextContainerLayoutClass = this.generateContainerLayoutClass(nextContainerLayout);
            var slider = this.sliderRoot.querySelector("#" + this.sliderId);
            if (!slider.classList.contains(nextContainerLayoutClass)) {
                var currentContainerLayout = currentSlide.getAttribute(containerLayoutAttr);
                var currentContainerLayoutClass = this.generateContainerLayoutClass(currentContainerLayout);
                slider.classList.remove(currentContainerLayoutClass);
                slider.classList.add(nextContainerLayoutClass);
            }
            nextSlide.classList.add(activeSlideClass);
            this.sliderRoot.querySelector("#" + this.sliderId).classList.add('slider-container--active');
            if (this.sliderRoot.querySelector("." + this.getClientNameAsString() + "ShopBonus")) {
                this.sliderRoot.querySelector("." + this.getClientNameAsString() + "ShopBonus").classList.add('shop-bonus--active');
            }
        }
        this.tryInitBottom();
    };
    SliderBase.prototype.tryInitBottom = function () {
        var _this = this;
        var id = this.sliderId + "-bottom";
        if (this.model.alert && !this.sliderRoot.querySelector("#" + id)) {
            var bottom_1 = document.createElement('div');
            bottom_1.id = id;
            bottom_1.innerText = this.model.alert.msg;
            bottom_1.onclick = function () { _this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.openGoTab, _this.model.alert.url)); };
            // The current design makes it impossible to add anything below the slider, in the same div, without major refactors.
            // That being the case, we add and show the bottom after the slider has slid.
            // When the redesign happens, this should be re-addressed. The way it looks is kind of cool like this though, so maybe that can stay :D
            this.sliderRoot.insertBefore(bottom_1, document.getElementById(this.sliderId));
            // Un-hide after slider slide
            setTimeout(function () {
                // style... = '...!important' doesn't seem to work when important is already there. setProperty works, though.
                bottom_1.style.setProperty('display', 'block', 'important');
                // Then slide. CSS doesn't want to animate if you're unhiding and sliding at the same time.
                setTimeout(function () {
                    bottom_1.style.setProperty('bottom', '10px', 'important');
                    // The slider itself has a box-shadow, so set the z-index so there arent 2.
                    setTimeout(function () {
                        bottom_1.style.setProperty('z-index', '2147483647', 'important');
                    }, _this.slideTime);
                }, _this.slideTime);
            }, this.slideTime);
        }
    };
    SliderBase.prototype.tryHideBottom = function () {
        var bottom = this.sliderRoot.querySelector("#" + this.sliderId + "-bottom");
        if (bottom) {
            bottom.style.setProperty('display', 'none', 'important');
            bottom.style.setProperty('bottom', '42px', 'important');
            bottom.style.setProperty('z-index', '2147483646', 'important');
        }
    };
    SliderBase.prototype.attachCloseClickHandler = function (self) {
        var _this = this;
        if (this.sliderRoot) {
            // There are 2 close buttons to attach: x button & Remind me later
            this.sliderRoot.querySelectorAll('.slider-close-btn').forEach(function (closeBtn) {
                closeBtn.onclick = function () {
                    _this.removeSlide("#" + _this.sliderId);
                    _this.removeSlide("." + _this.getClientNameAsString() + "ShopBonus");
                };
            });
        }
    };
    SliderBase.prototype.setSliderTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var title, shouldHideRemindText, shouldHideAndXCouponAtCheckoutText, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        title = this.sliderRoot.querySelector('.slider-title');
                        if (!title) return [3 /*break*/, 5];
                        shouldHideRemindText = this.model.urlType === url_types_1.UrlTypes.Checkout || this.model.activated;
                        shouldHideAndXCouponAtCheckoutText = shouldHideRemindText || this.couponCount === 0 || this.model.merchant.isZeroPayout || !this.isLoggedIn;
                        if (shouldHideRemindText && this.sliderRoot.querySelector('.remind-later')) {
                            this.sliderRoot.querySelector('.remind-later').remove();
                        }
                        if (!shouldHideAndXCouponAtCheckoutText) return [3 /*break*/, 1];
                        title.style.cssText += 'display: none !important';
                        this.sliderRoot.querySelector('.slider-action').style.cssText += 'margin: 13px auto !important';
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(this.couponCount > 1)) return [3 /*break*/, 3];
                        _a = title;
                        return [4 /*yield*/, this.getI18nMessage('andCouponsAtCheckout', String(this.couponCount))];
                    case 2:
                        _a.innerHTML = _c.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        _b = title;
                        return [4 /*yield*/, this.getI18nMessage('andCouponAtCheckout', String(this.couponCount))];
                    case 4:
                        _b.innerHTML = _c.sent();
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SliderBase.prototype.attachEventHandlers = function (self) {
        this.attachCloseClickHandler(self);
        this.attachButtonClickHandler(self);
    };
    SliderBase.prototype.applyText = function (selector, text) {
        var els = this.sliderRoot.querySelectorAll(selector);
        for (var i = 0; i < els.length; i++) {
            els[i].innerHTML = text;
        }
    };
    SliderBase.prototype.applySliderBtnText = function (text) {
        this.applyText('.pdg_activate-btn-copy', text);
    };
    SliderBase.prototype.applyPredefinedLocalization = function (selector, messageName) {
        return __awaiter(this, void 0, void 0, function () {
            var message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getI18nMessage(messageName)];
                    case 1:
                        message = _a.sent();
                        this.applyText(selector, message);
                        return [2 /*return*/];
                }
            });
        });
    };
    SliderBase.prototype.applyPredefinedLocalizations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var merchantOffer, merchantOfferShort, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.constructActivateString()];
                    case 1:
                        merchantOffer = _b.sent();
                        return [4 /*yield*/, this.constructActivateString(true)];
                    case 2:
                        merchantOfferShort = _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.constructRewardString()];
                    case 3:
                        _a.merchantReward = _b.sent();
                        return [4 /*yield*/, this.setSliderTitle()];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, this.setSliderBtnText(merchantOffer, merchantOfferShort)];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, this.applyText('.pdg_num-coupons', this.couponCount.toString())];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, this.applyPredefinedLocalization('.pdg_coupon-term', this.couponCount > 1 ? 'coupons' : 'coupon')];
                    case 7:
                        _b.sent();
                        return [4 /*yield*/, this.applyText('.pdg_merchant-offer', merchantOffer)];
                    case 8:
                        _b.sent();
                        if (this.sliderRoot.querySelector('.coupons_pitch_offer') && this.model && this.model.merchant && !this.model.merchant.isZeroPayout) {
                            this.sliderRoot.querySelector('.coupons_pitch_offer').innerHTML = merchantOfferShort;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SliderBase.prototype.applyAttributedLocalization = function () {
        return __awaiter(this, void 0, void 0, function () {
            var els, i, el, messageName, message, attr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        els = this.sliderRoot.querySelectorAll('.pdg_loc');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < els.length)) return [3 /*break*/, 6];
                        el = els[i];
                        messageName = el.getAttribute('data-string');
                        if (!messageName) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getI18nMessage(messageName)];
                    case 2:
                        message = _a.sent();
                        attr = el.getAttribute('data-attr');
                        // If there's a 'data-attr' attribute, apply the localized string to the element attribute. Otherwise, apply to inner HTML.
                        if (attr) {
                            el.setAttribute(attr, message);
                        }
                        else {
                            el.innerHTML = message;
                        }
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.log, {
                            level: log_levels_1.ConsoleLogLevels.debug,
                            message: "No data-string attribute for the element: class=\"" + el.className + "\" id=" + el.id,
                        }))];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SliderBase.prototype.applyLocalization = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applyPredefinedLocalizations()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.applyAttributedLocalization()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Have to inject @font-face outside the shadow dom. Shadow DOM currently cannot fully support it
     */
    SliderBase.prototype.injectFontFaces = function () {
        return __awaiter(this, void 0, void 0, function () {
            var style, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        style = document.createElement('style');
                        style.id = 'mp-font-faces';
                        _a = style;
                        _b = "\n      @font-face { font-family: lineto-brown; src: url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/fonts/lineto-brown-regular-c.woff')];
                    case 1:
                        _c = _b + (_e.sent()) + ") format(\"woff\"); font-weight: 400; font-style: normal;}\n      @font-face { font-family: lineto-brown; src: url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/fonts/lineto-brown-light-c.woff')];
                    case 2:
                        _d = _c + (_e.sent()) + ") format(\"woff\"); font-weight: 300; font-style: normal; }\n      @font-face { font-family: lineto-brown; src: url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/fonts/lineto-brown-bold-c.woff')];
                    case 3:
                        _a.innerText = _d + (_e.sent()) + ") format(\"woff\"); font-weight: 700; font-style: normal; }\n    ";
                        document.head.appendChild(style);
                        return [2 /*return*/];
                }
            });
        });
    };
    SliderBase.prototype.injectFontFacesUpm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var style, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        style = document.createElement('style');
                        style.id = 'upm-font-faces';
                        _a = style;
                        _b = "@font-face { font-family: century-gothic-pro; src: url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/fonts/century-gothic-pro.ttf')];
                    case 1:
                        _a.innerText = _b + (_c.sent()) + ") }\n    ";
                        document.head.appendChild(style);
                        return [2 /*return*/];
                }
            });
        });
    };
    SliderBase.prototype.injectFontFacesTada = function () {
        return __awaiter(this, void 0, void 0, function () {
            var style, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        style = document.createElement('style');
                        style.id = 'tada-font-faces';
                        _a = style;
                        _b = "\n      @font-face { font-family: OpenSans; src: url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/fonts/OpenSans-Regular.ttf')];
                    case 1:
                        _c = _b + (_e.sent()) + ") format(\"truetype\"); font-weight:400; font-style: normal; }\n      @font-face { font-family: OpenSans; src: url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/fonts/OpenSans-Bold.ttf')];
                    case 2:
                        _d = _c + (_e.sent()) + ") format(\"truetype\"); font-weight:700; font-style: normal; }\n      @font-face { font-family: OpenSans; src: url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/fonts/OpenSans-ExtraBold.ttf')];
                    case 3:
                        _a.innerText = _d + (_e.sent()) + ") format(\"truetype\"); font-weight:800; font-style: normal; }\n    ";
                        document.head.appendChild(style);
                        return [2 /*return*/];
                }
            });
        });
    };
    SliderBase.prototype.getImageStyles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var styles, cashImgClass, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24;
            return __generator(this, function (_25) {
                switch (_25.label) {
                    case 0:
                        cashImgClass = '';
                        if (this.model.shopBonusAmount && this.model.shopBonusAmount.indexOf('€') === 0) {
                            cashImgClass = 'Euro';
                        }
                        else if (this.model.shopBonusAmount && this.model.shopBonusAmount.indexOf('£') === 0) {
                            cashImgClass = 'Pound';
                        }
                        if (!(this.model.client === clients_1.Clients.mp)) return [3 /*break*/, 11];
                        _a = ".slider-container--logo-left:after { background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/mp-logo-white.svg')];
                    case 1:
                        _b = [
                            _a + (_25.sent()) + ") center center / 100% no-repeat !important; }"
                        ];
                        _c = ".slider-container--logo-top { #fff url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/mp-logo-full.svg')];
                    case 2:
                        _b = _b.concat([
                            _c + (_25.sent()) + ") 15px 15px / 145px auto no-repeat !important; }"
                        ]);
                        _d = ".slider-container--logo-bottom { background: #fff url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/mp_logo.png')];
                    case 3:
                        _b = _b.concat([
                            _d + (_25.sent()) + ") left 10px bottom 5px / 125px auto no-repeat !important; }"
                        ]);
                        _e = ".mpShopBonusImg { background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/incubation/greenCash" + cashImgClass + ".svg")];
                    case 4:
                        _b = _b.concat([
                            _e + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _f = ".mp-apply-results-logo {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/mp-logo-full.svg")];
                    case 5:
                        _b = _b.concat([
                            _f + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _g = ".mp-applying-coupons-logo {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/mp-logo-full.svg")];
                    case 6:
                        _b = _b.concat([
                            _g + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _h = ".shared-image-couponapply-plus-line {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/plus.png")];
                    case 7:
                        _b = _b.concat([
                            _h + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _j = ".mp-image-coupon-apply-footer-logo {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/foot.png")];
                    case 8:
                        _b = _b.concat([
                            _j + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _k = ".mp-applying-logo{  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/banner-animated.gif")];
                    case 9:
                        _b = _b.concat([
                            _k + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _l = ".mp-finished-applying-logo{  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/banner-static.png")];
                    case 10:
                        styles = _b.concat([
                            _l + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        return [3 /*break*/, 44];
                    case 11:
                        if (!(this.model.client === clients_1.Clients.upm)) return [3 /*break*/, 22];
                        _m = ".slider-container--logo-left:after { background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/upm-logo-white.svg')];
                    case 12:
                        _o = [
                            _m + (_25.sent()) + ") center center / 100% no-repeat !important; }"
                        ];
                        _p = ".slider-container--logo-top { #fff url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/upm-logo-full.svg')];
                    case 13:
                        _o = _o.concat([
                            _p + (_25.sent()) + ") 15px 15px / 145px auto no-repeat !important; }"
                        ]);
                        _q = ".slider-container--logo-bottom { background: #fff url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/upm_logo.png')];
                    case 14:
                        _o = _o.concat([
                            _q + (_25.sent()) + ") left 10px bottom 5px / 125px auto no-repeat !important; }"
                        ]);
                        _r = ".upmShopBonusImg { background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/incubation/greenCash" + cashImgClass + ".svg")];
                    case 15:
                        _o = _o.concat([
                            _r + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _s = ".upm-apply-results-logo {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/upm-logo-full.svg")];
                    case 16:
                        _o = _o.concat([
                            _s + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _t = ".upm-applying-coupons-logo {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/upm-logo-full.svg")];
                    case 17:
                        _o = _o.concat([
                            _t + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _u = ".shared-image-couponapply-plus-line {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/plus.png")];
                    case 18:
                        _o = _o.concat([
                            _u + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _v = ".upm-image-coupon-apply-footer-logo {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/foot.png")];
                    case 19:
                        _o = _o.concat([
                            _v + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _w = ".upm-applying-logo{  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/banner-animated.gif")];
                    case 20:
                        _o = _o.concat([
                            _w + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _x = ".upm-finished-applying-logo{  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/banner-static.png")];
                    case 21:
                        styles = _o.concat([
                            _x + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        return [3 /*break*/, 44];
                    case 22:
                        if (!(this.model.client === clients_1.Clients.sb)) return [3 /*break*/, 32];
                        _y = ".slider-container--logo-left:after { background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/sb-logo-white.svg')];
                    case 23:
                        _z = [
                            _y + (_25.sent()) + ") center center / 100% no-repeat !important; }"
                        ];
                        _0 = ".slider-container--logo-bottom { background: #fff url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/logo.svg')];
                    case 24:
                        _z = _z.concat([
                            _0 + (_25.sent()) + ") left 10px bottom 5px / 150px auto no-repeat !important; }"
                        ]);
                        _1 = ".sbShopBonusImg { background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/incubation/greenCash" + cashImgClass + ".svg")];
                    case 25:
                        _z = _z.concat([
                            _1 + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _2 = ".sb-image-couponapply-working {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/working.gif")];
                    case 26:
                        _z = _z.concat([
                            _2 + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _3 = ".sb-image-couponapply-failed {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/oops.jpg")];
                    case 27:
                        _z = _z.concat([
                            _3 + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _4 = ".sb-image-couponapply-finished-success {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/flex.gif")];
                    case 28:
                        _z = _z.concat([
                            _4 + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _5 = ".sb-image-couponapply-finished-did-not-find-better {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/towel.gif")];
                    case 29:
                        _z = _z.concat([
                            _5 + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _6 = ".shared-image-couponapply-plus-line {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/plus.png")];
                    case 30:
                        _z = _z.concat([
                            _6 + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _7 = ".sb-image-coupon_apply_footer_logo {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/foot.png")];
                    case 31:
                        styles = _z.concat([
                            _7 + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        return [3 /*break*/, 44];
                    case 32:
                        if (!(this.model.client === clients_1.Clients.ibd)) return [3 /*break*/, 34];
                        _8 = ".shared-image-couponapply-plus-line {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/plus.png")];
                    case 33:
                        styles = [
                            _8 + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ];
                        return [3 /*break*/, 44];
                    case 34:
                        if (!(this.model.client === clients_1.Clients.tada)) return [3 /*break*/, 44];
                        _9 = ".slider-container--logo-left:after { background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/tada-logo-white.svg')];
                    case 35:
                        _10 = [
                            _9 + (_25.sent()) + ") center center / 100% no-repeat !important; }"
                        ];
                        _11 = ".slider-container--logo-top { #fff url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/tada-logo-full.svg')];
                    case 36:
                        _10 = _10.concat([
                            _11 + (_25.sent()) + ") 15px 15px / 145px auto no-repeat !important; }"
                        ]);
                        _12 = ".slider-container--logo-bottom { background: #fff url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/tada_logo.png')];
                    case 37:
                        _10 = _10.concat([
                            _12 + (_25.sent()) + ") left 15px bottom 15px / 75px auto no-repeat !important; }"
                        ]);
                        _13 = ".slider-action.slider-activation-confirmation::after { background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/check.svg')];
                    case 38:
                        _10 = _10.concat([
                            _13 + (_25.sent()) + ") center center / 100% no-repeat !important; }"
                        ]);
                        _14 = ".tadaShopBonusImg { background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/incubation/greenCash" + cashImgClass + ".svg")];
                    case 39:
                        _10 = _10.concat([
                            _14 + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _15 = ".shared-image-couponapply-plus-line {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/plus.png")];
                    case 40:
                        _10 = _10.concat([
                            _15 + (_25.sent()) + ") 50% 0 / cover no-repeat !important; }"
                        ]);
                        _16 = ".tada-image-coupon-apply-footer-logo {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/foot.png")];
                    case 41:
                        _10 = _10.concat([
                            _16 + (_25.sent()) + ") 0 50% / contain no-repeat !important; }"
                        ]);
                        _17 = ".tada-applying-logo{  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/banner-animated.gif")];
                    case 42:
                        _10 = _10.concat([
                            _17 + (_25.sent()) + ") 50% 0 / 120% no-repeat, var(--bg-lavender) !important; }"
                        ]);
                        _18 = ".tada-finished-applying-logo{  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/tada-logo-white.svg")];
                    case 43:
                        styles = _10.concat([
                            _18 + (_25.sent()) + ") 50% 48% / 33% no-repeat, var(--bg-lavender) !important; }"
                        ]);
                        _25.label = 44;
                    case 44:
                        _20 = (_19 = styles).concat;
                        _21 = ".x-button { background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/close.svg')];
                    case 45:
                        _22 = [
                            _21 + (_25.sent()) + ") center center / cover no-repeat !important; }"
                        ];
                        _23 = ".slider-displaying-coupons .coupons_join_cta { background: transparent url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/bg_coupons_join_cta.png')];
                    case 46:
                        _22 = _22.concat([
                            _23 + (_25.sent()) + ") 0 0 / cover no-repeat !important; }"
                        ]);
                        _24 = ".sahShopBonusImg { background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/incubation/whiteCash" + cashImgClass + ".svg")];
                    case 47:
                        styles = _20.apply(_19, [_22.concat([
                                _24 + (_25.sent()) + ") 0 0 / contain no-repeat !important; }"
                            ])]);
                        return [2 /*return*/, styles];
                }
            });
        });
    };
    SliderBase.prototype.applyImageStyles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var styles, style;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getImageStyles()];
                    case 1:
                        styles = _a.sent();
                        style = document.createElement('style');
                        styles.forEach(function (s) {
                            style.innerText += s;
                        });
                        this.appendStyle(style);
                        return [2 /*return*/];
                }
            });
        });
    };
    SliderBase.prototype.setMerchantHeaderImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var merchantId, now, cacheBuster, path, cdnHost, merchantImageStyle, image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        merchantId = this.model.merchant.id;
                        now = Date.now();
                        cacheBuster = now - (now % (15 * 60000));
                        path = '';
                        switch (this.model.client) {
                            case clients_1.Clients.mp:
                                path = 'img/shop/logo/small';
                                break;
                            case clients_1.Clients.tada:
                            case clients_1.Clients.sb:
                            case clients_1.Clients.upm:
                                path = 'img/shop/ms/ms';
                                break;
                        }
                        return [4 /*yield*/, this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.getCdnHost))];
                    case 1:
                        cdnHost = _a.sent();
                        merchantImageStyle = "url(" + cdnHost + "/" + path + merchantId + ".jpg?v=" + cacheBuster + ")";
                        image = this.sliderRoot.querySelector('.merchant_header_image span');
                        if (image) {
                            image.style.backgroundImage = merchantImageStyle;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // ==================== Move down part ====================
    /**
     * Move down slider to avoid potential header elements
     * We assume short elements as headers
     * @param sliderContainer
     */
    SliderBase.prototype.avoidHeader = function (sliderContainer) {
        return __awaiter(this, void 0, void 0, function () {
            var rectPos, height, hasFoundBodyEle, distanceLimit, defaultDistance, potentialHeader, newTop, shopBonus;
            return __generator(this, function (_a) {
                if (window.screen.availHeight > 900) {
                    rectPos = sliderContainer.getBoundingClientRect();
                    height = rectPos.top;
                    hasFoundBodyEle = false;
                    distanceLimit = 400;
                    defaultDistance = 350;
                    // If all our 3 sliders show, don't move sb / mp too far down
                    if (document.getElementById(this.getShadowContainerId())
                        || document.getElementById(this.getClientNameAsString() + "-slider-container")) {
                        distanceLimit = 300;
                        defaultDistance = 250;
                    }
                    while (height < distanceLimit) {
                        potentialHeader = document.elementFromPoint(document.body.clientWidth - 10, height);
                        if (potentialHeader && potentialHeader.clientHeight < 300) {
                            height += 10;
                        }
                        else {
                            hasFoundBodyEle = true;
                            break;
                        }
                    }
                    // To move it a little up back if exceeding the limit.
                    height = hasFoundBodyEle ? height : defaultDistance;
                    // Don't move down too far if we have avoided header here
                    this.relocationAttempts = Math.floor(height / (rectPos.height * 1.1));
                    newTop = "top: " + height + "px !important";
                    sliderContainer.style.cssText += newTop;
                    shopBonus = this.sliderRoot.querySelector("." + this.getClientNameAsString() + "ShopBonus");
                    if (shopBonus) {
                        shopBonus.style.cssText += newTop;
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * The entry to the move down logic.
     */
    SliderBase.prototype.moveDownChecker = function (sliderContainer) {
        return __awaiter(this, void 0, void 0, function () {
            var attemptsLimit, delay;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        switch (this.model.client) {
                            case clients_1.Clients.sb:
                                attemptsLimit = 3;
                                break;
                            case clients_1.Clients.mp:
                            case clients_1.Clients.upm:
                                attemptsLimit = 5;
                                break;
                            default:
                                // no battle bots for SAH/IBD
                                attemptsLimit = 0;
                        }
                        delay = function (t) { return new Promise(function (resolve) { return setTimeout(resolve, t); }); };
                        // Try to bring forward before each shouldMoveDown check to avoid unnecessary move-down,
                        // before delay to make sure the check reflects the actual situation
                        this.tryBringForward(sliderContainer);
                        return [4 /*yield*/, delay(800)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.shouldMoveDown(sliderContainer, attemptsLimit)) return [3 /*break*/, 4];
                        this.moveDown(sliderContainer);
                        this.tryBringForward(sliderContainer);
                        return [4 /*yield*/, delay(800)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 2];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * If any of four 90% points inside the slider is covered, we should move down
     * -----------------------------
     * |                           |
     * |  x                     x  |
     * |          Slider           |
     * |  x                     x  |
     * |                           |
     * -----------------------------
     * @param elem
     * @param attemptsLimit
     */
    SliderBase.prototype.shouldMoveDown = function (elem, attemptsLimit) {
        if (this.relocationAttempts >= attemptsLimit) {
            return false;
        }
        var rectPos = elem.getBoundingClientRect();
        if (!this.isElemParent(document.elementFromPoint(rectPos.left + 0.1 * rectPos.width, rectPos.top + 0.1 * rectPos.height), elem)) {
            return true;
        }
        if (!this.isElemParent(document.elementFromPoint(rectPos.left + 0.1 * rectPos.width, rectPos.bottom - 0.1 * rectPos.height), elem)) {
            return true;
        }
        if (!this.isElemParent(document.elementFromPoint(rectPos.right - 0.1 * rectPos.width, rectPos.top + 0.1 * rectPos.height), elem)) {
            return true;
        }
        return !this.isElemParent(document.elementFromPoint(rectPos.right - 0.1 * rectPos.width, rectPos.bottom - 0.1 * rectPos.height), elem);
    };
    /**
     * Is elem the shadow container, or is parentElem the ancestor of elem?
     * @param elem
     * @param parentElem
     */
    SliderBase.prototype.isElemParent = function (elem, parentElem) {
        if (!elem || !parentElem) {
            return false;
        }
        if (elem.id === this.getShadowContainerId()) {
            return true;
        }
        for (var parent_1 = elem; parent_1 != null; parent_1 = parent_1.parentElement) {
            if (parent_1 == parentElem) {
                return true;
            }
        }
        return false;
    };
    SliderBase.prototype.moveDown = function (elem) {
        var rectPos = elem.getBoundingClientRect();
        var newStyle = "top: " + (rectPos.top + rectPos.height * 1.1) + "px !important";
        elem.style.cssText += newStyle;
        var shopBonus = this.sliderRoot.querySelector("." + this.getClientNameAsString() + "ShopBonus");
        if (shopBonus) {
            shopBonus.style.cssText += newStyle;
        }
        this.relocationAttempts++;
    };
    SliderBase.prototype.tryBringForward = function (sliderContainer) {
        var target = typeof document.createElement('div').attachShadow === 'function' ?
            document.getElementById(this.getShadowContainerId()) :
            sliderContainer;
        var parentNode = target.parentNode;
        if (parentNode.childNodes[parentNode.childNodes.length - 1] !== target) {
            parentNode.removeChild(target);
            parentNode.appendChild(target);
        }
    };
    return SliderBase;
}(injection_base_1.InjectionBase));
exports.SliderBase = SliderBase;

},{"../../../enums/clients":2,"../../../enums/log-levels":3,"../../../enums/page-ids":4,"../../../enums/redirect-context":5,"../../../enums/runtime-message-types":6,"../../../enums/url-types":7,"../../runtime-message":11,"../injection-base":8}],11:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RuntimeMessage = /** @class */ (function () {
    function RuntimeMessage(type, value) {
        this.type = type;
        this.value = value;
    }
    return RuntimeMessage;
}());
exports.RuntimeMessage = RuntimeMessage;

},{}],12:[function(_dereq_,module,exports){
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
Object.defineProperty(exports, "__esModule", { value: true });
var activation_slider_base_1 = _dereq_("../../../../objects/src/lib/models/content-injection/sliders/activation-slider-base");
var ActivationSlider = /** @class */ (function (_super) {
    __extends(ActivationSlider, _super);
    function ActivationSlider(extensionId, html, css, modelJson) {
        return _super.call(this, extensionId, 'sb-slider-container', html, css, modelJson) || this;
    }
    return ActivationSlider;
}(activation_slider_base_1.ActivationSliderBase));
exports.ActivationSlider = ActivationSlider;

},{"../../../../objects/src/lib/models/content-injection/sliders/activation-slider-base":9}]},{},[12])
(12)
});