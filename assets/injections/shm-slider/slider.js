!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Prodege=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
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

},{}],2:[function(_dereq_,module,exports){
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

},{}],3:[function(_dereq_,module,exports){
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

},{}],4:[function(_dereq_,module,exports){
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

},{}],5:[function(_dereq_,module,exports){
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

},{}],6:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SliderType;
(function (SliderType) {
    SliderType[SliderType["Activation"] = 0] = "Activation";
    SliderType[SliderType["Coupons"] = 1] = "Coupons";
    SliderType[SliderType["SHM"] = 2] = "SHM";
})(SliderType = exports.SliderType || (exports.SliderType = {}));

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
Object.defineProperty(exports, "__esModule", { value: true });
var slider_type_1 = _dereq_("../../enums/slider-type");
var clients_1 = _dereq_("../../enums/clients");
var runtime_message_1 = _dereq_("../../models/runtime-message");
var coupon_log_1 = _dereq_("../../models/coupon-log");
var runtime_message_types_1 = _dereq_("../../enums/runtime-message-types");
var url_types_1 = _dereq_("../../enums/url-types");
var page_ids_1 = _dereq_("../../enums/page-ids");
var data_utils_1 = _dereq_("../../utils/data-utils");
var redirect_context_1 = _dereq_("../../enums/redirect-context");
var log_levels_1 = _dereq_("../../enums/log-levels");
var slider_log_1 = _dereq_("../../models/content-injection/sliders/slider-log");
var SliderBaseNew = /** @class */ (function () {
    function SliderBaseNew(extensionRuntimeId, sliderId, type, html, css, data) {
        this.logSent = false;
        this.REWARDS_ACTIVATED = 'rewards-activated';
        this.log = new coupon_log_1.CouponLog();
        this.shouldRefreshAfterContinueCheckout = false;
        this.type = type;
        this.data = data;
        this.sliderId = sliderId;
        this.html = html;
        this.css = css;
        this.extensionRuntimeId = extensionRuntimeId;
        if (this.data.consoleLogLevel >= log_levels_1.ConsoleLogLevels.debug) {
            slider_log_1.SliderLog.showDebugging = true;
            slider_log_1.SliderLog.consoleLog('DATA:', data);
            slider_log_1.SliderLog.consoleLog('TYPE:', type);
            slider_log_1.SliderLog.consoleLog('SliderBaseNew constructor');
        }
        this.initialize();
    }
    Object.defineProperty(SliderBaseNew.prototype, "isJson", {
        get: function () { return !!this.data.jsonMerchantDefinition; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderBaseNew.prototype, "isApplyCoupons", {
        get: function () {
            return this.type === slider_type_1.SliderType.Coupons
                && this.data.urlType === url_types_1.UrlTypes.Checkout
                && this.data.merchant.hasMerchantScript
                && this.data.merchant.couponApplyEnabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderBaseNew.prototype, "clientName", {
        get: function () {
            return clients_1.Clients[this.data.client];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderBaseNew.prototype, "shadowId", {
        get: function () {
            return this.clientName + "-shadow-container";
        },
        enumerable: true,
        configurable: true
    });
    SliderBaseNew.prototype.setupAndShowSlider = function () {
        return __awaiter(this, void 0, void 0, function () {
            var injected;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        injected = this.injectContainer();
                        if (!injected) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.applyImageStyles()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.onInitialized()];
                    case 2:
                        _a.sent();
                        this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.logImpression, this.data.tabId));
                        // Don't show slider when user is deep into the site
                        this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.setActivationInjected, { tabId: this.data.tabId }));
                        if (this.data.activated) {
                            this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.setActivationConfirmed, { tabId: this.data.tabId }));
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SliderBaseNew.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.getCdnHost))];
                    case 1:
                        _a.cdnHost = _b.sent();
                        if (this.type === slider_type_1.SliderType.Coupons) {
                            this.removeDuplicateCoupons();
                        }
                        if (this.isApplyCoupons) {
                            this.setUpClientSideCouponEvents();
                            this.createCouponInjectionScripts();
                            //actual setupAndShowSlider() should not happen here. Wait until after InitialElementsChecked       
                        }
                        else {
                            this.setupAndShowSlider();
                        }
                        this.setUpCouponLog();
                        return [2 /*return*/];
                }
            });
        });
    };
    SliderBaseNew.prototype.injectContainer = function () {
        var shadowId = this.shadowId;
        if (!document.getElementById(this.sliderId) && !document.getElementById(shadowId)) {
            var shadowContainer = document.createElement('div');
            shadowContainer.id = shadowId;
            if (typeof shadowContainer.attachShadow === 'function') { // Shadow dom is available
                var shadowRoot = shadowContainer.attachShadow({ mode: 'open' });
                this.root = shadowRoot;
                document.documentElement.appendChild(shadowContainer);
            }
            else {
                this.root = document.documentElement;
            }
            var style = document.createElement('style');
            style.innerHTML = Sanitizer.escapeHTML(this.css);
            this.appendStyle(style);
            var sliderContainer = document.createElement('div');
            sliderContainer.id = this.sliderId;
            sliderContainer.innerHTML = this.html;
            this.root.appendChild(sliderContainer);
            return true;
        }
        else {
            return false;
        }
    };
    SliderBaseNew.prototype.applyImageStyles = function () {
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
    SliderBaseNew.prototype.getImageStyles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var styles, cashImgClass, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
            return __generator(this, function (_4) {
                switch (_4.label) {
                    case 0:
                        cashImgClass = '';
                        if (this.data.shopBonusAmount && this.data.shopBonusAmount.indexOf('€') === 0) {
                            cashImgClass = 'Euro';
                        }
                        else if (this.data.shopBonusAmount && this.data.shopBonusAmount.indexOf('£') === 0) {
                            cashImgClass = 'Pound';
                        }
                        if (!(this.data.client === clients_1.Clients.mp)) return [3 /*break*/, 11];
                        _a = ".slider-container--logo-left:after { background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/mp-logo-white.svg')];
                    case 1:
                        _b = [
                            _a + (_4.sent()) + ") center center / 100% no-repeat !important; }"
                        ];
                        _c = ".slider-container--logo-top { #fff url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/mp-logo-full.svg')];
                    case 2:
                        _b = _b.concat([
                            _c + (_4.sent()) + ") 15px 15px / 145px auto no-repeat !important; }"
                        ]);
                        _d = ".slider-container--logo-bottom { background: #fff url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/mp_logo.png')];
                    case 3:
                        _b = _b.concat([
                            _d + (_4.sent()) + ") left 10px bottom 5px / 125px auto no-repeat !important; }"
                        ]);
                        _e = ".mpShopBonusImg { background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/incubation/greenCash" + cashImgClass + ".svg")];
                    case 4:
                        _b = _b.concat([
                            _e + (_4.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _f = ".mp-apply-results-logo {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/mp-logo-full.svg")];
                    case 5:
                        _b = _b.concat([
                            _f + (_4.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _g = ".mp-applying-coupons-logo {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/mp-logo-full.svg")];
                    case 6:
                        _b = _b.concat([
                            _g + (_4.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _h = ".shared-image-couponapply-plus-line {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/plus.png")];
                    case 7:
                        _b = _b.concat([
                            _h + (_4.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _j = ".mp-image-coupon-apply-footer-logo {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/foot.png")];
                    case 8:
                        _b = _b.concat([
                            _j + (_4.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _k = ".mp-applying-logo{  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/banner-animated.gif")];
                    case 9:
                        _b = _b.concat([
                            _k + (_4.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _l = ".mp-finished-applying-logo{  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/banner-static.png")];
                    case 10:
                        styles = _b.concat([
                            _l + (_4.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        return [3 /*break*/, 23];
                    case 11:
                        if (!(this.data.client === clients_1.Clients.sb)) return [3 /*break*/, 21];
                        _m = ".slider-container--logo-left:after { background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/sb-logo-white.svg')];
                    case 12:
                        _o = [
                            _m + (_4.sent()) + ") center center / 100% no-repeat !important; }"
                        ];
                        _p = ".slider-container--logo-bottom { background: #fff url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/logo.svg')];
                    case 13:
                        _o = _o.concat([
                            _p + (_4.sent()) + ") left 10px bottom 5px / 150px auto no-repeat !important; }"
                        ]);
                        _q = ".sbShopBonusImg { background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/incubation/greenCash" + cashImgClass + ".svg")];
                    case 14:
                        _o = _o.concat([
                            _q + (_4.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _r = ".sb-image-couponapply-working {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/working.gif")];
                    case 15:
                        _o = _o.concat([
                            _r + (_4.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _s = ".sb-image-couponapply-failed {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/oops.jpg")];
                    case 16:
                        _o = _o.concat([
                            _s + (_4.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _t = ".sb-image-couponapply-finished-success {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/flex.gif")];
                    case 17:
                        _o = _o.concat([
                            _t + (_4.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _u = ".sb-image-couponapply-finished-did-not-find-better {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/towel.gif")];
                    case 18:
                        _o = _o.concat([
                            _u + (_4.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _v = ".shared-image-couponapply-plus-line {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/plus.png")];
                    case 19:
                        _o = _o.concat([
                            _v + (_4.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        _w = ".sb-image-coupon_apply_footer_logo {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/foot.png")];
                    case 20:
                        styles = _o.concat([
                            _w + (_4.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ]);
                        return [3 /*break*/, 23];
                    case 21:
                        if (!(this.data.client === clients_1.Clients.ibd)) return [3 /*break*/, 23];
                        _x = ".shared-image-couponapply-plus-line {  background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/coupon-injection/plus.png")];
                    case 22:
                        styles = [
                            _x + (_4.sent()) + ") 0 0 / contain no-repeat !important; }"
                        ];
                        _4.label = 23;
                    case 23:
                        _z = (_y = styles).concat;
                        _0 = ".x-button { background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/close.svg')];
                    case 24:
                        _1 = [
                            _0 + (_4.sent()) + ") center center / cover no-repeat !important; }"
                        ];
                        _2 = ".slider-displaying-coupons .coupons_join_cta { background: transparent url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/images/bg_coupons_join_cta.png')];
                    case 25:
                        _1 = _1.concat([
                            _2 + (_4.sent()) + ") 0 0 / cover no-repeat !important; }"
                        ]);
                        _3 = ".sahShopBonusImg { background: url(";
                        return [4 /*yield*/, this.getExtensionFilePath("assets/images/incubation/whiteCash" + cashImgClass + ".svg")];
                    case 26:
                        styles = _z.apply(_y, [_1.concat([
                                _3 + (_4.sent()) + ") 0 0 / contain no-repeat !important; }"
                            ])]);
                        return [2 /*return*/, styles];
                }
            });
        });
    };
    SliderBaseNew.prototype.setUpClientSideCouponEvents = function () {
        var self = this;
        document.addEventListener("initialElementsChecked", function (e) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(e.detail.extCode === self.data.client)) return [3 /*break*/, 2];
                            slider_log_1.SliderLog.consoleLog('initialElementsChecked ', e.detail);
                            // We must wait on setupAndShowSlider() or showViewCoupons() will not show correctly.
                            return [4 /*yield*/, self.setupAndShowSlider()];
                        case 1:
                            // We must wait on setupAndShowSlider() or showViewCoupons() will not show correctly.
                            _a.sent();
                            if (!e.detail.passed) {
                                // initial elements failed, show 'View' instead of 'Apply'
                                self.showViewCoupons();
                            }
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
        document.addEventListener("initialTotal", function (e) {
            if (e.detail.extCode === self.data.client) {
                slider_log_1.SliderLog.consoleLog('initialTotal ', e.detail);
                self.log.cartTotalInitial = self.formatCurrencyForLog(e.detail.total);
            }
        });
        document.addEventListener("startProcessCoupon", function (e) {
            if (e.detail.extCode === self.data.client) {
                slider_log_1.SliderLog.consoleLog('startProcessCoupon ', e.detail);
                self.log.couponsAttempted += 1;
                self.onStartProcessCoupon(e.detail);
            }
        });
        document.addEventListener("saveCouponResult", function (e) {
            if (e.detail.extCode === self.data.client) {
                slider_log_1.SliderLog.consoleLog('saveCouponResult ', e.detail);
                self.saveCouponResult(e.detail);
            }
        });
        document.addEventListener("showFinalResult", function (e) {
            if (e.detail.extCode === self.data.client) {
                slider_log_1.SliderLog.consoleLog('showFinalResult ', e.detail);
                self.showFinalResult(e.detail);
                self.onShowFinalResult(e.detail);
            }
        });
        document.addEventListener("couponInjectionError", function (e) {
            if (e.detail.extCode === self.data.client) {
                slider_log_1.SliderLog.consoleLog('couponInjectionError ', e.detail);
                self.couponInjectionError(e.detail);
            }
        });
    };
    SliderBaseNew.prototype.removeDuplicateCoupons = function () {
        var nonDuplicatedCoupons = [];
        if (this.data.merchant.coupons) {
            this.data.merchant.coupons.forEach(function (value) {
                if (!nonDuplicatedCoupons.some(function (c) { return (c.code === value.code); })) {
                    nonDuplicatedCoupons.push(value);
                }
            });
            this.data.merchant.coupons = nonDuplicatedCoupons;
            this.couponCount = this.data.merchant.coupons.length;
        }
        else {
            this.couponCount = 0;
        }
    };
    SliderBaseNew.prototype.createCouponInjectionScripts = function () {
        window['CouponInjection'].testedCoupons = [];
        if (this.isJson) {
            this.couponWorker = new ProdegeCouponInjection.CouponInjection.JsonCouponWorker(this.data.jsonMerchantDefinition, this.extensionRuntimeId, this.data.client);
            this.couponWorker.checkInitialElementsJson();
        }
        else {
            var merchantWorker = new CouponMerchantWorker();
            merchantWorker.init($, function () { });
            //this creates couponWorker and kicks off checkInitialState which fires event initialElementsChecked    
            this.couponWorker = ProdegeCouponInjection.CouponInjection.CouponWorkerFactory.construct(merchantWorker, this.extensionRuntimeId, this.data.client, ProdegeCouponInjection.CouponInjection.elementIds, ProdegeCouponInjection.CouponInjection.customFuncs);
            var set = function (self, prop) {
                CouponMerchantWorker.prototype[prop] = self.couponWorker[prop];
                merchantWorker[prop] = merchantWorker[prop] || self.couponWorker[prop];
            };
            // Setting these because the current merchant "inheritance" pattern needs them
            set(this, 'pollTimeoutCounter');
            set(this, 'pollInterval');
            set(this, 'waitFor');
            set(this, 'waitForRemoveCoupon');
            set(this, 'triggerEvent');
            set(this, 'setReactCouponCode');
            set(this, 'waitForApplyPromoCode');
            set(this, 'calculateTotalAsync');
            set(this, 'calculateTotal');
            set(this, 'getFirstVisible');
            set(this, 'getFirst');
            merchantWorker.elementIds = merchantWorker.elementIds || ProdegeCouponInjection.CouponInjection.elementIds;
            merchantWorker.customFuncs = merchantWorker.customFuncs || ProdegeCouponInjection.CouponInjection.customFuncs;
            this.log.merchantScriptWorkerType = this.couponWorker.merchantWorker.testerType;
        }
    };
    /**
     * Starts filling up the couponResults object.
     * Eventually used to the extension to on to the AuxDB
     */
    SliderBaseNew.prototype.setUpCouponLog = function () {
        var _this = this;
        if (this.isApplyCoupons) {
            this.log.sliderType = 2;
        }
        else {
            this.log.sliderType = 1;
        }
        this.log.couponDetails = {};
        this.data.merchant.coupons.forEach(function (coupon) {
            _this.log.couponDetails[coupon.code] = {
                id: coupon.id
            };
        });
        this.log.merchantID = this.data.merchant.id;
        this.log.merchantSessionId = this.data.merchantSessionId;
        this.log.autoApplyActive = this.data.merchant.couponApplyEnabled ? 1 : 0;
        this.log.checkoutUrl = document.location.href;
        this.log.couponsAvailable = this.data.merchant.coupons.length;
        var self = this;
        window.addEventListener("beforeunload", function () {
            if (self.data && !self.logSent) {
                self.sendLog();
            }
        });
        window.addEventListener("onClose", function () {
            if (self.data && !self.logSent) {
                self.sendLog();
            }
        });
    };
    SliderBaseNew.prototype.sendLog = function () {
        this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.logCouponResults, this.log));
        if (this.isApplyCoupons) {
            this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.resetCouponCoolDown, this.data.tabId));
        }
        this.logSent = true;
    };
    SliderBaseNew.prototype.openStorePage = function () {
        window.open(this.data.merchant.storePageUrl, '_blank');
    };
    SliderBaseNew.prototype.appendStyle = function (style) {
        if (this.root === document.documentElement) {
            document.head.appendChild(style);
        }
        else if (this.root) {
            this.root.appendChild(style);
        }
    };
    SliderBaseNew.prototype.getExtensionFilePath = function (relativePath) {
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
    SliderBaseNew.prototype.sendExtensionMessage = function (message) {
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
    SliderBaseNew.prototype.getElement = function (selector) {
        return this.root.querySelector(selector);
    };
    SliderBaseNew.prototype.getElements = function (selector) {
        return Array.from(this.root.querySelectorAll(selector));
    };
    SliderBaseNew.prototype.constructRewardString = function () {
        return __awaiter(this, void 0, void 0, function () {
            var extensionMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        extensionMessage = new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.constructRewardString, {
                            clientId: this.data.client,
                            reward: this.data.merchant.reward
                        });
                        return [4 /*yield*/, this.sendExtensionMessage(extensionMessage)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SliderBaseNew.prototype.close = function () {
        this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.dismissActivation, { tabId: this.data.tabId }));
        this.onClosed();
    };
    SliderBaseNew.prototype.getMerchantImageUrl = function () {
        var merchantId = this.data.merchant.id;
        var now = Date.now();
        var cacheBuster = now - (now % (15 * 60000)); // Round to most recent 15 minute increment so we're not always busting cache
        var path = this.data.client === clients_1.Clients.mp ? 'img/shop/logo/small' : 'img/shop/ms/ms';
        return this.cdnHost + "/" + path + merchantId + ".jpg?v=" + cacheBuster;
    };
    SliderBaseNew.prototype.activate = function (urlType, redirectContext) {
        if (redirectContext === void 0) { redirectContext = redirect_context_1.RedirectContext.default; }
        return __awaiter(this, void 0, void 0, function () {
            var pageId;
            return __generator(this, function (_a) {
                pageId = page_ids_1.PageIds.Default;
                if (urlType === url_types_1.UrlTypes.Checkout) {
                    pageId = page_ids_1.PageIds.CouponSliderClick;
                }
                else if (urlType === url_types_1.UrlTypes.Merchant) {
                    pageId = page_ids_1.PageIds.ActivationSliderClick;
                }
                this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.activate, {
                    merchantId: this.data.merchant.id,
                    tabId: this.data.tabId,
                    urlType: urlType,
                    pageId: pageId,
                    redirectContext: redirectContext
                }));
                return [2 /*return*/];
            });
        });
    };
    SliderBaseNew.prototype.deferredClose = function () {
        var _this = this;
        setTimeout(function () {
            _this.close();
        }, 3000);
    };
    SliderBaseNew.prototype.copyCode = function (couponCode) {
        var logItem = this.log.couponDetails[couponCode];
        logItem.copied > 0 ? logItem.copied + 1 : logItem.copied = 1;
        this.log.couponsCopied += 1;
        data_utils_1.DataUtils.copyTextToClipboard(couponCode);
    };
    SliderBaseNew.prototype.couponSliderClicked = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.log.sliderClicked = 1;
                        if (!!this.data.activated) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.activate(this.data.urlType)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.isApplyCoupons) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.applyCouponsToPage()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        // No need to log if we're not on a checkout page.  
                        // Mostly for those zero point merchants and non-logged in user cases.
                        if (this.data.urlType === url_types_1.UrlTypes.Checkout) {
                            this.setUpCouponLog();
                        }
                        _a.label = 5;
                    case 5: 
                    // We've activated and injected, effectively "confirming activation."
                    // Mark the tab injection state accordingly.
                    return [4 /*yield*/, this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.setActivationConfirmed, { tabId: this.data.tabId }))];
                    case 6:
                        // We've activated and injected, effectively "confirming activation."
                        // Mark the tab injection state accordingly.
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SliderBaseNew.prototype.applyCouponsToPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var justCouponsStrings;
            return __generator(this, function (_a) {
                justCouponsStrings = this.data.merchant.coupons.map(function (coupon) { return coupon.code; });
                this.couponWorker.process(justCouponsStrings);
                return [2 /*return*/];
            });
        });
    };
    SliderBaseNew.prototype.formatCurrencyForLog = function (val) {
        if (val) {
            return Math.floor(val * 100);
        }
        else {
            return 0;
        }
    };
    SliderBaseNew.prototype.saveCouponResult = function (eventDetail) {
        var code = eventDetail.couponCode;
        this.log.couponDetails[code].attempted = 1;
        this.log.couponDetails[code].savings = this.formatCurrencyForLog(eventDetail.savings);
        this.log.couponDetails[code].cartTotal = this.formatCurrencyForLog(eventDetail.total);
        switch (eventDetail.message) {
            case "failure":
                this.log.couponDetails[code].failed = eventDetail.savings > 0 ? 0 : 1;
                this.log.couponsFailed += 1;
                break;
            case "success":
                this.log.couponDetails[code].succeeded = eventDetail.savings > 0 ? 1 : 0;
                this.log.couponsSucceeded += 1;
                break;
            default:
                this.log.couponDetails[code].erred = 1;
                this.log.couponsErred += 1;
                break;
        }
    };
    SliderBaseNew.prototype.showFinalResult = function (eventDetail) {
        this.log.cartDiscountCalculated = this.formatCurrencyForLog(eventDetail.amount);
        if (eventDetail.total && eventDetail.total > 0) {
            this.log.cartTotalFinal = this.formatCurrencyForLog(eventDetail.total);
        }
        else { //api merchants might not have final coupon applied yet, need to loop through object and find lowest cartTotal
            var cartTotalFinal = Number.MAX_SAFE_INTEGER;
            for (var prop in this.log.couponDetails) {
                if (this.log.couponDetails[prop].cartTotal) {
                    if (this.log.couponDetails[prop].cartTotal < cartTotalFinal) {
                        cartTotalFinal = this.log.couponDetails[prop].cartTotal;
                    }
                }
                this.log.cartTotalFinal = cartTotalFinal;
            }
        }
        if (eventDetail) {
            //if there is a couponcode, then we know that it applied the coupon, and we need to update the applied for that coupon.
            if (eventDetail.couponCode) {
                this.log.couponDetails[eventDetail.couponCode].applied = 1;
                this.log.couponsApplied = 1;
            }
        }
        if (eventDetail.shouldRefresh) {
            //don't reload now, wait until user clicks Continue Checkout
            this.shouldRefreshAfterContinueCheckout = true;
        }
        this.finishCouponProcessing();
    };
    SliderBaseNew.prototype.finishCouponProcessing = function () {
        this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.logCouponResults, this.log));
        if (this.isApplyCoupons) {
            this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.resetCouponCoolDown, this.data.tabId));
        }
        this.logSent = true;
    };
    SliderBaseNew.prototype.couponInjectionError = function (eventDetail) {
        this.log.couponDetails["errors"] =
            {
                "extCode": eventDetail.extCode,
                "message": eventDetail.message
            };
    };
    return SliderBaseNew;
}());
exports.SliderBaseNew = SliderBaseNew;

},{"../../enums/clients":1,"../../enums/log-levels":2,"../../enums/page-ids":3,"../../enums/redirect-context":4,"../../enums/runtime-message-types":5,"../../enums/slider-type":6,"../../enums/url-types":7,"../../models/content-injection/sliders/slider-log":9,"../../models/coupon-log":10,"../../models/runtime-message":11,"../../utils/data-utils":12}],9:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Using abstract as a substitution/workaround for Typescript not having the concept of a static class
var SliderLog = /** @class */ (function () {
    function SliderLog() {
    }
    // Debug output will go to the clientPage/browser debugger and not the extension/background debugger
    SliderLog.consoleLog = function (str, object) {
        if (this.showDebugging) {
            if (object) {
                // Errors/Exception come through as plain object (so you can't check typeof), but Errors don't stringify, have to make an object.
                if (object.message && object.stack) {
                    console.log(this.PREFIX, str, JSON.stringify({ ErrorMessage: object.message, stack: object.stack }, null, 2));
                }
                else {
                    console.log(this.PREFIX, str, JSON.stringify(object, null, 2));
                }
            }
            else {
                console.log(this.PREFIX, str);
            }
        }
    };
    SliderLog.showDebugging = false; //leave false normally, flip to true to see logs when debugging.
    SliderLog.PREFIX = "*CI "; //easier to filter
    return SliderLog;
}());
exports.SliderLog = SliderLog;

},{}],10:[function(_dereq_,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CouponLog = /** @class */ (function () {
    function CouponLog() {
        this.couponsCopied = 0; //todo couponlist event
        this.couponsAttempted = 0;
        this.couponsSucceeded = 0;
        this.couponsFailed = 0;
        this.couponsErred = 0;
        this.couponsApplied = 0;
        this.cartTotalInitial = 0;
        this.cartTotalFinal = 0;
        this.cartDiscountCalculated = 0;
    }
    return CouponLog;
}());
exports.CouponLog = CouponLog;

},{}],11:[function(_dereq_,module,exports){
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
Object.defineProperty(exports, "__esModule", { value: true });
var DataUtils = /** @class */ (function () {
    function DataUtils() {
    }
    DataUtils.getCashBack = function (amount, isPercentage) {
        amount /= 100;
        var result = Number.isInteger(amount) ? amount : amount.toFixed(2);
        return isPercentage ? result + "%" : "$" + result;
    };
    DataUtils.copyTextToClipboard = function (couponCode) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(couponCode);
        }
        else {
            var el = document.createElement('textarea');
            el.value = couponCode;
            el.style.opacity = '0';
            el.style.position = 'fixed';
            el.style.width = '0';
            el.style.height = '0';
            el.style.margin = '0';
            el.style.padding = '0';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
    };
    return DataUtils;
}());
exports.DataUtils = DataUtils;

},{}],13:[function(_dereq_,module,exports){
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
var slider_base_new_1 = _dereq_("../../../../objects/src/lib/models/content-injection/slider-base-new");
var runtime_message_1 = _dereq_("../../../../objects/src/lib/models/runtime-message");
var runtime_message_types_1 = _dereq_("../../../../objects/src/lib/enums/runtime-message-types");
var SHMSlider = /** @class */ (function (_super) {
    __extends(SHMSlider, _super);
    function SHMSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SHMSlider.prototype.onClosed = function () {
        throw new Error('Method not implemented.');
    };
    SHMSlider.prototype.onShowFinalResult = function (detail) {
        throw new Error('Method not implemented.');
    };
    SHMSlider.prototype.onStartProcessCoupon = function (detail) {
        throw new Error('Method not implemented.');
    };
    SHMSlider.prototype.onInitialized = function () {
        return __awaiter(this, void 0, void 0, function () {
            var message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.initContainer();
                        return [4 /*yield*/, this.initBottom()];
                    case 1:
                        _a.sent();
                        this.slide();
                        return [4 /*yield*/, this.initFont()];
                    case 2:
                        _a.sent();
                        message = new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.setTabShopperMarketingInjected, {
                            tabId: this.data.tabId
                        });
                        this.sendExtensionMessage(message);
                        return [2 /*return*/];
                }
            });
        });
    };
    SHMSlider.prototype.initContainer = function () {
        var _this = this;
        var container = this.getElement('#sb-slider-container');
        container.className = 'slider-container--logo-left swagbutton-no-print sb-slider-reset slider-container--active';
        container.style.width = '440px';
        this.getElement('.slider-close-btn').onclick = function () { _this.closeClicked(); };
        this.getElement('.slider-content h2').innerText = "Boost Your " + this.data.merchant.name + " Earnings";
        this.getElement('.reward b').innerText = this.data.shmReward + " SB";
        this.getElement('.slider-cta').onclick = function () { _this.eligibleItemsClicked(); };
    };
    SHMSlider.prototype.closeClicked = function () {
        var _this = this;
        var bottom = this.getElement('#sb-slider-bottom');
        bottom.style.top = '0';
        setTimeout(function () {
            bottom.style.display = 'none';
            var container = _this.getElement('#sb-slider-container');
            container.classList.remove('slider-container--active');
            setTimeout(function () {
                container.style.width = 'auto';
                container.classList.remove('slider-container--logo-left');
            }, 250);
        }, 250);
    };
    SHMSlider.prototype.eligibleItemsClicked = function () {
        window.open(this.data.shmOfferPage);
    };
    SHMSlider.prototype.initBottom = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bottom, contents, cta, ctaText, span, img, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        bottom = document.createElement('div');
                        bottom.id = 'sb-slider-bottom';
                        return [4 /*yield*/, this.constructBottomContents()];
                    case 1:
                        contents = _b.sent();
                        bottom.appendChild(contents);
                        cta = document.createElement('div');
                        cta.className = 'slider-bottom-cta';
                        cta.onclick = function () { _this.bottomCtaClicked(); };
                        ctaText = document.createElement('div');
                        span = document.createElement('span');
                        span.innerText = 'How does it work?';
                        ctaText.appendChild(span);
                        img = document.createElement('img');
                        _a = img;
                        return [4 /*yield*/, this.getExtensionFilePath('assets/icons/shm-slider/chevron.png')];
                    case 2:
                        _a.src = _b.sent();
                        ctaText.appendChild(img);
                        cta.appendChild(ctaText);
                        bottom.appendChild(cta);
                        // The current design makes it impossible to add anything below the slider, in the same div, without major refactors.
                        // That being the case, we add and show the bottom after the slider has slid.
                        // When the redesign happens, this should be re-addressed. The way it looks is kind of cool like this though, so maybe that can stay :D
                        this.root.insertBefore(bottom, document.getElementById('sb-slider-container'));
                        return [2 /*return*/];
                }
            });
        });
    };
    SHMSlider.prototype.constructBottomContents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var container, contents, b, table, tr, td, img, _a, span, a, _b, _c, p;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        container = document.createElement('div');
                        container.className = 'slider-bottom-contents-container';
                        contents = document.createElement('div');
                        contents.className = 'slider-bottom-contents';
                        b = document.createElement('b');
                        b.innerText = 'Earn SB in 3 Easy Steps';
                        contents.appendChild(b);
                        table = document.createElement('table');
                        tr = document.createElement('tr');
                        td = document.createElement('td');
                        td.className = 'slider-bottom-icon';
                        img = document.createElement('img');
                        _a = img;
                        return [4 /*yield*/, this.getExtensionFilePath('assets/icons/shm-slider/cash.png')];
                    case 1:
                        _a.src = _d.sent();
                        td.appendChild(img);
                        tr.appendChild(td);
                        td = document.createElement('td');
                        b = document.createElement('b');
                        b.innerText = '1. ';
                        td.appendChild(b);
                        span = document.createElement('span');
                        span.innerText = 'Purchase one or more ';
                        td.appendChild(span);
                        a = document.createElement('a');
                        a.innerText = 'eligible items';
                        a.onclick = function () { _this.eligibleItemsClicked(); };
                        td.appendChild(a);
                        tr.appendChild(td);
                        table.appendChild(tr);
                        tr = document.createElement('tr');
                        td = document.createElement('td');
                        td.className = 'slider-bottom-icon';
                        img = document.createElement('img');
                        _b = img;
                        return [4 /*yield*/, this.getExtensionFilePath('assets/icons/shm-slider/inbox.png')];
                    case 2:
                        _b.src = _d.sent();
                        td.appendChild(img);
                        tr.appendChild(td);
                        td = document.createElement('td');
                        b = document.createElement('b');
                        b.innerText = '2. ';
                        td.appendChild(b);
                        span = document.createElement('span');
                        span.innerText = "Find your " + this.data.merchant.name + " confirmation email (it arrives after your order has been delivered or picked-up).";
                        td.appendChild(span);
                        tr.appendChild(td);
                        table.appendChild(tr);
                        tr = document.createElement('tr');
                        td = document.createElement('td');
                        td.className = 'slider-bottom-icon';
                        img = document.createElement('img');
                        _c = img;
                        return [4 /*yield*/, this.getExtensionFilePath('assets/icons/shm-slider/send.png')];
                    case 3:
                        _c.src = _d.sent();
                        td.appendChild(img);
                        tr.appendChild(td);
                        td = document.createElement('td');
                        b = document.createElement('b');
                        b.innerText = '3. ';
                        td.appendChild(b);
                        span = document.createElement('span');
                        span.innerText = 'Forward it to ';
                        td.appendChild(span);
                        a = document.createElement('a');
                        a.innerText = 'receipts@swagbucks.com';
                        a.href = 'mailto:receipts@swagbucks.com';
                        td.appendChild(a);
                        span = document.createElement('span');
                        span.innerText = ' from the email address registered with Swagbucks.';
                        td.appendChild(span);
                        p = document.createElement('p');
                        a = document.createElement('a');
                        a.innerText = "What's my email?";
                        a.onclick = function () {
                            var message = new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.openSiteTab, 'account/settings');
                            _this.sendExtensionMessage(message);
                        };
                        p.appendChild(a);
                        td.appendChild(p);
                        tr.appendChild(td);
                        table.appendChild(tr);
                        contents.appendChild(table);
                        container.appendChild(contents);
                        return [2 /*return*/, container];
                }
            });
        });
    };
    SHMSlider.prototype.bottomCtaClicked = function () {
        var container = this.getElement('.slider-bottom-contents-container');
        var contents = this.getElement('.slider-bottom-contents');
        if (container.style.height === '360px') {
            contents.style.display = 'none';
            container.style.height = '0px';
        }
        else {
            container.style.height = '360px';
            setTimeout(function () {
                contents.style.display = 'block';
            }, 250);
        }
    };
    SHMSlider.prototype.slide = function () {
        var slide = this.getElement('.slider-slide');
        slide.style.width = '70%';
        slide.style.marginLeft = '110px';
        var bottom = this.getElement('#sb-slider-bottom');
        // Un-hide after slider slide
        setTimeout(function () {
            bottom.style.display = 'block';
            // Then slide. CSS doesn't want to animate if you're unhiding and sliding at the same time.
            setTimeout(function () {
                bottom.style.top = '180px';
            }, 250);
        }, 250);
    };
    SHMSlider.prototype.initFont = function () {
        return __awaiter(this, void 0, void 0, function () {
            var style, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        style = document.createElement('style');
                        _a = style;
                        _b = "@font-face { font-family: 'Open Sans'; src: url(";
                        return [4 /*yield*/, this.getExtensionFilePath('assets/fonts/open-sans-v17-latin-regular.woff2')];
                    case 1:
                        _a.innerText = _b + (_c.sent()) + "); }";
                        document.head.appendChild(style);
                        return [2 /*return*/];
                }
            });
        });
    };
    SHMSlider.prototype.showViewCoupons = function () {
        throw new Error('Method not implemented.');
    };
    return SHMSlider;
}(slider_base_new_1.SliderBaseNew));
exports.SHMSlider = SHMSlider;

},{"../../../../objects/src/lib/enums/runtime-message-types":5,"../../../../objects/src/lib/models/content-injection/slider-base-new":8,"../../../../objects/src/lib/models/runtime-message":11}]},{},[13])
(13)
});