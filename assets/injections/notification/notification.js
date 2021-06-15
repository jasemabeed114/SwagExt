!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Prodege=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
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

},{}],2:[function(_dereq_,module,exports){
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

},{"../../enums/runtime-message-types":1,"../runtime-message":3}],3:[function(_dereq_,module,exports){
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

},{}],4:[function(_dereq_,module,exports){
"use strict";
// HTML and CSS files are located in shared/src/assets/injections/notification
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
var injection_base_1 = _dereq_("../../../objects/src/lib/models/content-injection/injection-base");
var runtime_message_types_1 = _dereq_("../../../objects/src/lib/enums/runtime-message-types");
var runtime_message_1 = _dereq_("../../../objects/src/lib/models/runtime-message");
var NotificationInjection = /** @class */ (function (_super) {
    __extends(NotificationInjection, _super);
    function NotificationInjection(extensionRuntimeId, html, css, notificationJson) {
        var _this = _super.call(this, extensionRuntimeId) || this;
        _this.CONTAINER = 'notifySEClass';
        _this.URL_ANCHOR = 'SBStateUrlAnchor';
        _this.CLOSE_IMAGE = 'SBStateCloseImage';
        _this.css = css;
        _this.html = html;
        _this.notification = JSON.parse(notificationJson);
        _this.initialize();
        return _this;
    }
    NotificationInjection.prototype.construct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var body, container, style, iconImg, closeImg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = document.body;
                        container = document.createElement('div');
                        container.className = this.CONTAINER;
                        container.innerHTML = this.html;
                        this.container = container;
                        body.appendChild(container);
                        style = document.createElement('style');
                        style.innerHTML = this.css;
                        body.appendChild(style);
                        return [4 /*yield*/, this.getExtensionFilePath(this.notification.icon)];
                    case 1:
                        iconImg = _a.sent();
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/notification/cross.svg')];
                    case 2:
                        closeImg = _a.sent();
                        this.container.querySelector('#SBStateIconImage').src = iconImg;
                        this.container.querySelector("#" + this.CLOSE_IMAGE).src = closeImg;
                        this.container.getElementsByClassName('SBStateTextElement')[0].innerHTML = this.notification.title;
                        this.container.querySelector('#SBStateText').innerHTML = this.notification.text;
                        this.container.querySelector("#" + this.URL_ANCHOR).innerHTML = this.notification.linkText;
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationInjection.prototype.attachHandlers = function () {
        var _this = this;
        this.container.querySelector("#" + this.CLOSE_IMAGE).addEventListener('click', function () {
            _this.close();
        });
        this.container.querySelector("#" + this.URL_ANCHOR).addEventListener('click', function () {
            _this.close();
        });
        this.container.querySelector("#" + this.URL_ANCHOR).addEventListener('click', function () {
            var message = new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.notificationClicked, _this.notification.id);
            _this.sendExtensionMessage(message);
        });
    };
    NotificationInjection.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.construct()];
                    case 1:
                        _a.sent();
                        this.attachHandlers();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationInjection.prototype.close = function () {
        this.container.remove();
    };
    return NotificationInjection;
}(injection_base_1.InjectionBase));
exports.NotificationInjection = NotificationInjection;

},{"../../../objects/src/lib/enums/runtime-message-types":1,"../../../objects/src/lib/models/content-injection/injection-base":2,"../../../objects/src/lib/models/runtime-message":3}]},{},[4])
(4)
});