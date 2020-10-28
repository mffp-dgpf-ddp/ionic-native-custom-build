import { __decorate, __extends } from "tslib";
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var IAPError = /** @class */ (function () {
    function IAPError() {
    }
    return IAPError;
}());
export { IAPError };
var InAppPurchase2 = /** @class */ (function (_super) {
    __extends(InAppPurchase2, _super);
    function InAppPurchase2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppPurchase2.prototype.getApplicationUsername = function () { return cordova(this, "getApplicationUsername", { "sync": true }, arguments); };
    InAppPurchase2.prototype.get = function (idOrAlias) { return cordova(this, "get", { "sync": true }, arguments); };
    InAppPurchase2.prototype.error = function (onError) { return cordova(this, "error", { "sync": true }, arguments); };
    InAppPurchase2.prototype.register = function (product) { return cordova(this, "register", { "sync": true }, arguments); };
    InAppPurchase2.prototype.when = function (query, event, callback) { return cordova(this, "when", { "sync": true }, arguments); };
    InAppPurchase2.prototype.once = function (query, event, callback) { return cordova(this, "once", { "sync": true }, arguments); };
    InAppPurchase2.prototype.off = function (callback) { return cordova(this, "off", { "sync": true }, arguments); };
    InAppPurchase2.prototype.order = function (product, additionalData) { return cordova(this, "order", { "sync": true }, arguments); };
    InAppPurchase2.prototype.ready = function (callback) { return cordova(this, "ready", {}, arguments); };
    InAppPurchase2.prototype.refresh = function () { return cordova(this, "refresh", { "sync": true }, arguments); };
    InAppPurchase2.prototype.update = function () { return cordova(this, "update", { "sync": true }, arguments); };
    InAppPurchase2.prototype.manageSubscriptions = function () { return cordova(this, "manageSubscriptions", { "sync": true }, arguments); };
    Object.defineProperty(InAppPurchase2.prototype, "QUIET", {
        get: function () { return cordovaPropertyGet(this, "QUIET"); },
        set: function (value) { cordovaPropertySet(this, "QUIET", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERROR", {
        get: function () { return cordovaPropertyGet(this, "ERROR"); },
        set: function (value) { cordovaPropertySet(this, "ERROR", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "WARNING", {
        get: function () { return cordovaPropertyGet(this, "WARNING"); },
        set: function (value) { cordovaPropertySet(this, "WARNING", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INFO", {
        get: function () { return cordovaPropertyGet(this, "INFO"); },
        set: function (value) { cordovaPropertySet(this, "INFO", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "DEBUG", {
        get: function () { return cordovaPropertyGet(this, "DEBUG"); },
        set: function (value) { cordovaPropertySet(this, "DEBUG", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "verbosity", {
        get: function () { return cordovaPropertyGet(this, "verbosity"); },
        set: function (value) { cordovaPropertySet(this, "verbosity", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "autoFinishTransactions", {
        get: function () { return cordovaPropertyGet(this, "autoFinishTransactions"); },
        set: function (value) { cordovaPropertySet(this, "autoFinishTransactions", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "sandbox", {
        get: function () { return cordovaPropertyGet(this, "sandbox"); },
        set: function (value) { cordovaPropertySet(this, "sandbox", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "disableHostedContent", {
        get: function () { return cordovaPropertyGet(this, "disableHostedContent"); },
        set: function (value) { cordovaPropertySet(this, "disableHostedContent", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "FREE_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "FREE_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "FREE_SUBSCRIPTION", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "PAID_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "PAID_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "PAID_SUBSCRIPTION", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "NON_RENEWING_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "NON_RENEWING_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "NON_RENEWING_SUBSCRIPTION", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "CONSUMABLE", {
        get: function () { return cordovaPropertyGet(this, "CONSUMABLE"); },
        set: function (value) { cordovaPropertySet(this, "CONSUMABLE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "NON_CONSUMABLE", {
        get: function () { return cordovaPropertyGet(this, "NON_CONSUMABLE"); },
        set: function (value) { cordovaPropertySet(this, "NON_CONSUMABLE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_SETUP", {
        get: function () { return cordovaPropertyGet(this, "ERR_SETUP"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SETUP", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_LOAD", {
        get: function () { return cordovaPropertyGet(this, "ERR_LOAD"); },
        set: function (value) { cordovaPropertySet(this, "ERR_LOAD", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PURCHASE", {
        get: function () { return cordovaPropertyGet(this, "ERR_PURCHASE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PURCHASE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_LOAD_RECEIPTS", {
        get: function () { return cordovaPropertyGet(this, "ERR_LOAD_RECEIPTS"); },
        set: function (value) { cordovaPropertySet(this, "ERR_LOAD_RECEIPTS", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_CLIENT_INVALID", {
        get: function () { return cordovaPropertyGet(this, "ERR_CLIENT_INVALID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_CLIENT_INVALID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_CANCELLED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_CANCELLED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_CANCELLED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_INVALID", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_INVALID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_INVALID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_NOT_ALLOWED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_NOT_ALLOWED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_NOT_ALLOWED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_UNKNOWN", {
        get: function () { return cordovaPropertyGet(this, "ERR_UNKNOWN"); },
        set: function (value) { cordovaPropertySet(this, "ERR_UNKNOWN", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_REFRESH_RECEIPTS", {
        get: function () { return cordovaPropertyGet(this, "ERR_REFRESH_RECEIPTS"); },
        set: function (value) { cordovaPropertySet(this, "ERR_REFRESH_RECEIPTS", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_INVALID_PRODUCT_ID", {
        get: function () { return cordovaPropertyGet(this, "ERR_INVALID_PRODUCT_ID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_INVALID_PRODUCT_ID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_FINISH", {
        get: function () { return cordovaPropertyGet(this, "ERR_FINISH"); },
        set: function (value) { cordovaPropertySet(this, "ERR_FINISH", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_COMMUNICATION", {
        get: function () { return cordovaPropertyGet(this, "ERR_COMMUNICATION"); },
        set: function (value) { cordovaPropertySet(this, "ERR_COMMUNICATION", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", {
        get: function () { return cordovaPropertyGet(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_MISSING_TOKEN", {
        get: function () { return cordovaPropertyGet(this, "ERR_MISSING_TOKEN"); },
        set: function (value) { cordovaPropertySet(this, "ERR_MISSING_TOKEN", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_VERIFICATION_FAILED", {
        get: function () { return cordovaPropertyGet(this, "ERR_VERIFICATION_FAILED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_VERIFICATION_FAILED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_BAD_RESPONSE", {
        get: function () { return cordovaPropertyGet(this, "ERR_BAD_RESPONSE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_BAD_RESPONSE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_REFRESH", {
        get: function () { return cordovaPropertyGet(this, "ERR_REFRESH"); },
        set: function (value) { cordovaPropertySet(this, "ERR_REFRESH", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_EXPIRED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_EXPIRED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_EXPIRED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_DOWNLOAD", {
        get: function () { return cordovaPropertyGet(this, "ERR_DOWNLOAD"); },
        set: function (value) { cordovaPropertySet(this, "ERR_DOWNLOAD", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", {
        get: function () { return cordovaPropertyGet(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "REGISTERED", {
        get: function () { return cordovaPropertyGet(this, "REGISTERED"); },
        set: function (value) { cordovaPropertySet(this, "REGISTERED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INVALID", {
        get: function () { return cordovaPropertyGet(this, "INVALID"); },
        set: function (value) { cordovaPropertySet(this, "INVALID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "VALID", {
        get: function () { return cordovaPropertyGet(this, "VALID"); },
        set: function (value) { cordovaPropertySet(this, "VALID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "REQUESTED", {
        get: function () { return cordovaPropertyGet(this, "REQUESTED"); },
        set: function (value) { cordovaPropertySet(this, "REQUESTED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INITIATED", {
        get: function () { return cordovaPropertyGet(this, "INITIATED"); },
        set: function (value) { cordovaPropertySet(this, "INITIATED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "APPROVED", {
        get: function () { return cordovaPropertyGet(this, "APPROVED"); },
        set: function (value) { cordovaPropertySet(this, "APPROVED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "FINISHED", {
        get: function () { return cordovaPropertyGet(this, "FINISHED"); },
        set: function (value) { cordovaPropertySet(this, "FINISHED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "OWNED", {
        get: function () { return cordovaPropertyGet(this, "OWNED"); },
        set: function (value) { cordovaPropertySet(this, "OWNED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "DOWNLOADING", {
        get: function () { return cordovaPropertyGet(this, "DOWNLOADING"); },
        set: function (value) { cordovaPropertySet(this, "DOWNLOADING", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "DOWNLOADED", {
        get: function () { return cordovaPropertyGet(this, "DOWNLOADED"); },
        set: function (value) { cordovaPropertySet(this, "DOWNLOADED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INVALID_PAYLOAD", {
        get: function () { return cordovaPropertyGet(this, "INVALID_PAYLOAD"); },
        set: function (value) { cordovaPropertySet(this, "INVALID_PAYLOAD", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "CONNECTION_FAILED", {
        get: function () { return cordovaPropertyGet(this, "CONNECTION_FAILED"); },
        set: function (value) { cordovaPropertySet(this, "CONNECTION_FAILED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "PURCHASE_EXPIRED", {
        get: function () { return cordovaPropertyGet(this, "PURCHASE_EXPIRED"); },
        set: function (value) { cordovaPropertySet(this, "PURCHASE_EXPIRED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "PURCHASE_CONSUMED", {
        get: function () { return cordovaPropertyGet(this, "PURCHASE_CONSUMED"); },
        set: function (value) { cordovaPropertySet(this, "PURCHASE_CONSUMED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INTERNAL_ERROR", {
        get: function () { return cordovaPropertyGet(this, "INTERNAL_ERROR"); },
        set: function (value) { cordovaPropertySet(this, "INTERNAL_ERROR", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "NEED_MORE_DATA", {
        get: function () { return cordovaPropertyGet(this, "NEED_MORE_DATA"); },
        set: function (value) { cordovaPropertySet(this, "NEED_MORE_DATA", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "products", {
        get: function () { return cordovaPropertyGet(this, "products"); },
        set: function (value) { cordovaPropertySet(this, "products", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "validator", {
        get: function () { return cordovaPropertyGet(this, "validator"); },
        set: function (value) { cordovaPropertySet(this, "validator", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "applicationUsername", {
        get: function () { return cordovaPropertyGet(this, "applicationUsername"); },
        set: function (value) { cordovaPropertySet(this, "applicationUsername", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "log", {
        get: function () { return cordovaPropertyGet(this, "log"); },
        set: function (value) { cordovaPropertySet(this, "log", value); },
        enumerable: true,
        configurable: true
    });
    InAppPurchase2.pluginName = "InAppPurchase2";
    InAppPurchase2.plugin = "cordova-plugin-purchase";
    InAppPurchase2.pluginRef = "store";
    InAppPurchase2.repo = "https://github.com/j3k0/cordova-plugin-purchase";
    InAppPurchase2.platforms = ["iOS", "Android", "Windows"];
    InAppPurchase2.install = "ionic cordova plugin add cordova-plugin-purchase --variable BILLING_KEY=\"<ANDROID_BILLING_KEY>\"";
    InAppPurchase2 = __decorate([
        Injectable()
    ], InAppPurchase2);
    return InAppPurchase2;
}(IonicNativePlugin));
export { InAppPurchase2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luLWFwcC1wdXJjaGFzZS0yL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O21CQUQzQzs7OztJQXNpQm9DLGtDQUFpQjs7OztJQW9MbkQsK0NBQXNCO0lBaUJ0Qiw0QkFBRyxhQUFDLFNBQWlCO0lBU3JCLDhCQUFLLGFBQUMsT0FBaUI7SUFPdkIsaUNBQVEsYUFBQyxPQUFnRDtJQVV6RCw2QkFBSSxhQUFDLEtBQTBCLEVBQUUsS0FBYyxFQUFFLFFBQTJCO0lBWTVFLDZCQUFJLGFBQUMsS0FBMEIsRUFBRSxLQUFjLEVBQUUsUUFBMkI7SUFTNUUsNEJBQUcsYUFBQyxRQUFrQjtJQTBCdEIsOEJBQUssYUFBQyxPQUE0QixFQUFFLGNBQW9CO0lBS3hELDhCQUFLLGFBQUMsUUFBa0I7SUEwQ3hCLGdDQUFPO0lBSVAsK0JBQU07SUFJTiw0Q0FBbUI7MEJBblVuQixpQ0FBSzs7Ozs7OzBCQUdMLGlDQUFLOzs7Ozs7MEJBR0wsbUNBQU87Ozs7OzswQkFHUCxnQ0FBSTs7Ozs7OzBCQUdKLGlDQUFLOzs7Ozs7MEJBTUwscUNBQVM7Ozs7OzswQkFPVCxrREFBc0I7Ozs7OzswQkFNdEIsbUNBQU87Ozs7OzswQkFPUCxnREFBb0I7Ozs7OzswQkFHcEIsNkNBQWlCOzs7Ozs7MEJBR2pCLDZDQUFpQjs7Ozs7OzBCQUdqQixxREFBeUI7Ozs7OzswQkFHekIsc0NBQVU7Ozs7OzswQkFHViwwQ0FBYzs7Ozs7OzBCQUdkLHFDQUFTOzs7Ozs7MEJBR1Qsb0NBQVE7Ozs7OzswQkFHUix3Q0FBWTs7Ozs7OzBCQUdaLDZDQUFpQjs7Ozs7OzBCQUdqQiw4Q0FBa0I7Ozs7OzswQkFHbEIsaURBQXFCOzs7Ozs7MEJBR3JCLCtDQUFtQjs7Ozs7OzBCQUduQixtREFBdUI7Ozs7OzswQkFHdkIsdUNBQVc7Ozs7OzswQkFHWCxnREFBb0I7Ozs7OzswQkFHcEIsa0RBQXNCOzs7Ozs7MEJBR3RCLHNDQUFVOzs7Ozs7MEJBR1YsNkNBQWlCOzs7Ozs7MEJBR2pCLDJEQUErQjs7Ozs7OzBCQUcvQiw2Q0FBaUI7Ozs7OzswQkFHakIsbURBQXVCOzs7Ozs7MEJBR3ZCLDRDQUFnQjs7Ozs7OzBCQUdoQix1Q0FBVzs7Ozs7OzBCQUdYLCtDQUFtQjs7Ozs7OzBCQUduQix3Q0FBWTs7Ozs7OzBCQUdaLGlFQUFxQzs7Ozs7OzBCQUdyQyxzQ0FBVTs7Ozs7OzBCQUdWLG1DQUFPOzs7Ozs7MEJBR1AsaUNBQUs7Ozs7OzswQkFHTCxxQ0FBUzs7Ozs7OzBCQUdULHFDQUFTOzs7Ozs7MEJBR1Qsb0NBQVE7Ozs7OzswQkFHUixvQ0FBUTs7Ozs7OzBCQUdSLGlDQUFLOzs7Ozs7MEJBR0wsdUNBQVc7Ozs7OzswQkFHWCxzQ0FBVTs7Ozs7OzBCQUtWLDJDQUFlOzs7Ozs7MEJBR2YsNkNBQWlCOzs7Ozs7MEJBR2pCLDRDQUFnQjs7Ozs7OzBCQUdoQiw2Q0FBaUI7Ozs7OzswQkFHakIsMENBQWM7Ozs7OzswQkFHZCwwQ0FBYzs7Ozs7OzBCQUdkLG9DQUFROzs7Ozs7MEJBR1IscUNBQVM7Ozs7OzswQkFHVCwrQ0FBbUI7Ozs7OzswQkFRbkIsK0JBQUc7Ozs7Ozs7Ozs7OztJQXpMUSxjQUFjO1FBRDFCLFVBQVUsRUFBRTtPQUNBLGNBQWM7eUJBdGlCM0I7RUFzaUJvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFQUHJvZHVjdE9wdGlvbnMge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgYWxpYXM/OiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJQVBQcm9kdWN0cyA9IElBUFByb2R1Y3RbXSAmIHtcclxuICAvKipcclxuICAgKiBHZXQgcHJvZHVjdCBieSBJRFxyXG4gICAqL1xyXG4gIGJ5SWQ6IHsgW2lkOiBzdHJpbmddOiBJQVBQcm9kdWN0IH07XHJcbiAgLyoqXHJcbiAgICogR2V0IHByb2R1Y3QgYnkgYWxpYXNcclxuICAgKi9cclxuICBieUFsaWFzOiB7IFthbGlhczogc3RyaW5nXTogSUFQUHJvZHVjdCB9O1xyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhbGwgcHJvZHVjdHMgKGZvciB0ZXN0aW5nIG9ubHkpLlxyXG4gICAqL1xyXG4gIHJlc2V0OiAoKSA9PiB7fTtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIElBUFF1ZXJ5Q2FsbGJhY2sgPSAoKHByb2R1Y3Q6IElBUFByb2R1Y3QpID0+IHZvaWQpIHwgKChlcnJvcjogSUFQRXJyb3IpID0+IHZvaWQpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQVBQcm9kdWN0IHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICBhbGlhcz86IHN0cmluZztcclxuXHJcbiAgdHlwZTogc3RyaW5nO1xyXG5cclxuICBzdGF0ZTogc3RyaW5nO1xyXG5cclxuICB0aXRsZTogc3RyaW5nO1xyXG5cclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG5cclxuICBwcmljZU1pY3JvczogbnVtYmVyO1xyXG5cclxuICBwcmljZTogc3RyaW5nO1xyXG5cclxuICBjdXJyZW5jeTogc3RyaW5nO1xyXG5cclxuICBsb2FkZWQ6IGJvb2xlYW47XHJcblxyXG4gIHZhbGlkOiBib29sZWFuO1xyXG5cclxuICBjYW5QdXJjaGFzZTogYm9vbGVhbjtcclxuXHJcbiAgb3duZWQ6IGJvb2xlYW47XHJcblxyXG4gIGRvd25sb2FkaW5nPzogYm9vbGVhbjtcclxuXHJcbiAgZG93bmxvYWRlZD86IGJvb2xlYW47XHJcblxyXG4gIGxhc3RSZW5ld2FsRGF0ZT86IERhdGU7XHJcblxyXG4gIGV4cGlyeURhdGU/OiBEYXRlO1xyXG5cclxuICBpbnRyb1ByaWNlPzogc3RyaW5nO1xyXG5cclxuICBpbnRyb1ByaWNlTWljcm9zPzogbnVtYmVyO1xyXG5cclxuICBpbnRyb1ByaWNlTnVtYmVyT2ZQZXJpb2RzPzogbnVtYmVyO1xyXG5cclxuICBpbnRyb1ByaWNlU3Vic2NyaXB0aW9uUGVyaW9kPzogc3RyaW5nO1xyXG5cclxuICBpbnRyb1ByaWNlUGF5bWVudE1vZGU/OiBzdHJpbmc7XHJcblxyXG4gIGluZWxpZ2libGVGb3JJbnRyb1ByaWNlPzogYm9vbGVhbjtcclxuXHJcbiAgYmlsbGluZ1BlcmlvZD86IG51bWJlcjtcclxuXHJcbiAgYmlsbGluZ1BlcmlvZFVuaXQ/OiBzdHJpbmc7XHJcblxyXG4gIHRyaWFsUGVyaW9kPzogbnVtYmVyO1xyXG5cclxuICB0cmlhbFBlcmlvZFVuaXQ/OiBzdHJpbmc7XHJcblxyXG4gIGFkZGl0aW9uYWxEYXRhPzogYW55O1xyXG5cclxuICB0cmFuc2FjdGlvbj86IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbCBgcHJvZHVjdC5maW5pc2goKWAgdG8gY29uZmlybSB0byB0aGUgc3RvcmUgdGhhdCBhbiBhcHByb3ZlZCBvcmRlciBoYXMgYmVlbiBkZWxpdmVyZWQuXHJcbiAgICpcclxuICAgKiBUaGlzIHdpbGwgY2hhbmdlIHRoZSBwcm9kdWN0IHN0YXRlIGZyb20gYEFQUFJPVkVEYCB0byBgRklOSVNIRURgIChzZWUgcHJvZHVjdCBsaWZlLWN5Y2xlKS5cclxuICAgKlxyXG4gICAqIEFzIGxvbmcgYXMgeW91IGtlZXAgdGhlIHByb2R1Y3QgaW4gc3RhdGUgYEFQUFJPVkVEYDpcclxuICAgKlxyXG4gICAqICAtIHRoZSBtb25leSBtYXkgbm90IGJlIGluIHlvdXIgYWNjb3VudCAoaS5lLiB1c2VyIGlzbid0IGNoYXJnZWQpXHJcbiAgICogIC0geW91IHdpbGwgcmVjZWl2ZSB0aGUgYGFwcHJvdmVkYCBldmVudCBlYWNoIHRpbWUgdGhlIGFwcGxpY2F0aW9uIHN0YXJ0cyxcclxuICAgKiAgICB3aGVyZSB5b3Ugc2hvdWxkIHRyeSBhZ2FpbiB0byBmaW5pc2ggdGhlIHBlbmRpbmcgdHJhbnNhY3Rpb24uXHJcbiAgICpcclxuICAgKiAqKmV4YW1wbGUgdXNlKipcclxuICAgKlxyXG4gICAqIGBgYGpzXHJcbiAgICogc3RvcmUud2hlbihcInByb2R1Y3QuaWRcIikuYXBwcm92ZWQoZnVuY3Rpb24ocHJvZHVjdCl7XHJcbiAgICogICAgIC8vIHN5bmNocm9ub3VzXHJcbiAgICogICAgIGFwcC51bmxvY2tGZWF0dXJlKCk7XHJcbiAgICogICAgIHByb2R1Y3QuZmluaXNoKCk7XHJcbiAgICogfSk7XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBgYGBqc1xyXG4gICAqIHN0b3JlLndoZW4oXCJwcm9kdWN0LmlkXCIpLmFwcHJvdmVkKGZ1bmN0aW9uKHByb2R1Y3Qpe1xyXG4gICAqICAgICAvLyBhc3luY2hyb25vdXNcclxuICAgKiAgICAgYXBwLmRvd25sb2FkRmVhdHVyZShmdW5jdGlvbigpIHtcclxuICAgKiAgICAgICAgIHByb2R1Y3QuZmluaXNoKCk7XHJcbiAgICogICAgIH0pO1xyXG4gICAqIH0pO1xyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIGZpbmlzaCgpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBJbml0aWF0ZSBwdXJjaGFzZSB2YWxpZGF0aW9uIGFzIGRlZmluZWQgYnkgdGhlIGBzdG9yZS52YWxpZGF0b3JgIGF0dHJpYnV0ZS5cclxuICAgKlxyXG4gICAqICoqcmV0dXJuIHZhbHVlKipcclxuICAgKlxyXG4gICAqIEEgUHJvbWlzZSB3aXRoIHRoZSBmb2xsb3dpbmcgbWV0aG9kczpcclxuICAgKlxyXG4gICAqICAtIGBkb25lKGZ1bmN0aW9uKHByb2R1Y3Qpe30pYFxyXG4gICAqICAgIC0gY2FsbGVkIHdoZXRoZXIgdmVyaWZpY2F0aW9uIGZhaWxlZCBvciBzdWNjZWVkZWQuXHJcbiAgICogIC0gYGV4cGlyZWQoZnVuY3Rpb24ocHJvZHVjdCl7fSlgXHJcbiAgICogICAgLSBjYWxsZWQgaWYgdGhlIHB1cmNoYXNlIGV4cGlyZWQuXHJcbiAgICogIC0gYHN1Y2Nlc3MoZnVuY3Rpb24ocHJvZHVjdCwgcHVyY2hhc2VEYXRhKXt9KWBcclxuICAgKiAgICAtIGNhbGxlZCBpZiB0aGUgcHVyY2hhc2UgaXMgdmFsaWQgYW5kIHZlcmlmaWVkLlxyXG4gICAqICAgIC0gYHB1cmNoYXNlRGF0YWAgaXMgdGhlIGRldmljZSBkZXBlbmRlbnQgdHJhbnNhY3Rpb24gZGV0YWlsc1xyXG4gICAqICAgICAgcmV0dXJuZWQgYnkgdGhlIHZhbGlkYXRvciwgd2hpY2ggeW91IGNhbiBtb3N0IHByb2JhYmx5IGlnbm9yZS5cclxuICAgKiAgLSBgZXJyb3IoZnVuY3Rpb24oZXJyKXt9KWBcclxuICAgKiAgICAtIHZhbGlkYXRpb24gZmFpbGVkLCBlaXRoZXIgYmVjYXVzZSBvZiBleHBpcnkgb3IgY29tbXVuaWNhdGlvblxyXG4gICAqICAgICAgZmFpbHVyZS5cclxuICAgKiAgICAtIGBlcnJgIGlzIGEgc3RvcmUuRXJyb3Igb2JqZWN0LCB3aXRoIGEgY29kZSBleHBlY3RlZCB0byBiZVxyXG4gICAqICAgICAgYHN0b3JlLkVSUl9QQVlNRU5UX0VYUElSRURgIG9yIGBzdG9yZS5FUlJfVkVSSUZJQ0FUSU9OX0ZBSUxFRGAuXHJcbiAgICovXHJcbiAgdmVyaWZ5KCk6IGFueTtcclxuXHJcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZDtcclxuXHJcbiAgc3RhdGVDaGFuZ2VkKCk6IHZvaWQ7XHJcblxyXG4gIG9uKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQ7XHJcblxyXG4gIG9uY2UoZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZDtcclxuXHJcbiAgb2ZmKGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQ7XHJcblxyXG4gIHRyaWdnZXIoYWN0aW9uOiBzdHJpbmcsIGFyZ3M6IGFueSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFQUHJvZHVjdEV2ZW50cyB7XHJcbiAgLyoqIENhbGxlZCB3aGVuIHByb2R1Y3QgZGF0YSBpcyBsb2FkZWQgZnJvbSB0aGUgc3RvcmUuICovXHJcbiAgbG9hZGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIGFueSBjaGFuZ2Ugb2NjdXJlZCB0byBhIHByb2R1Y3QuICovXHJcbiAgdXBkYXRlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBhbiBvcmRlciBmYWlsZWQuIFRoZSBgZXJyYCBwYXJhbWV0ZXIgaXMgYW4gSUFQRXJyb3Igb2JqZWN0LiAqL1xyXG4gIGVycm9yOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIGEgcHJvZHVjdCBvcmRlciBpcyBhcHByb3ZlZC4gKi9cclxuICBhcHByb3ZlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBhIG5vbi1jb25zdW1hYmxlIHByb2R1Y3Qgb3Igc3Vic2NyaXB0aW9uIGlzIG93bmVkLiAqL1xyXG4gIG93bmVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIGEgcHJvZHVjdCBvcmRlciBpcyBjYW5jZWxsZWQgYnkgdGhlIHVzZXIuICovXHJcbiAgY2FuY2VsbGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIGFuIG9yZGVyIGlzIHJlZnVuZGVkIGJ5IHRoZSB1c2VyLiAqL1xyXG4gIHJlZnVuZGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIHByb2R1Y3QgaGFzIGp1c3QgYmVlbiByZWdpc3RlcmVkLiAqL1xyXG4gIHJlZ2lzdGVyZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gdGhlIHByb2R1Y3QgZGV0YWlscyBoYXZlIGJlZW4gc3VjY2Vzc2Z1bGx5IGxvYWRlZC4gKi9cclxuICB2YWxpZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiB0aGUgcHJvZHVjdCBjYW5ub3QgYmUgbG9hZGVkIGZyb20gdGhlIHN0b3JlLiAqL1xyXG4gIGludmFsaWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gYW4gb3JkZXIgaGFzIGp1c3QgYmVlbiByZXF1ZXN0ZWQuICovXHJcbiAgcmVxdWVzdGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIHRoZSBwdXJjaGFzZSBwcm9jZXNzIGhhcyBiZWVuIGluaXRpYXRlZC4gKi9cclxuICBpbml0aWF0ZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gdGhlIHB1cmNoYXNlIHByb2Nlc3MgaGFzIGNvbXBsZXRlZC4gKi9cclxuICBmaW5pc2hlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiByZWNlaXB0IHZhbGlkYXRpb24gc3VjY2Vzc2Z1bC4gKi9cclxuICB2ZXJpZmllZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiByZWNlaXB0IHZlcmlmaWNhdGlvbiBmYWlsZWQuICovXHJcbiAgdW52ZXJpZmllZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiB2YWxpZGF0aW9uIGZpbmQgYSBzdWJzY3JpcHRpb24gdG8gYmUgZXhwaXJlZC4gKi9cclxuICBleHBpcmVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIGNvbnRlbnQgZG93bmxvYWQgaXMgc3RhcnRlZC4gKi9cclxuICBkb3dubG9hZGluZzogKHByb2R1Y3Q6IElBUFByb2R1Y3QsIHByb2dyZXNzOiBhbnksIHRpbWVfcmVtYWluaW5nOiBhbnkpID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIGNvbnRlbnQgZG93bmxvYWQgaGFzIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZWQuICovXHJcbiAgZG93bmxvYWRlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIElBUEVycm9yIHtcclxuICBjb2RlOiBudW1iZXI7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgSW4gQXBwIFB1cmNoYXNlIDJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEluLUFwcCBQdXJjaGFzZSBvbiBpT1MsIEFuZHJvaWQsIFdpbmRvd3MsIG1hY09TIGFuZCBYQm94LlxyXG4gKlxyXG4gKiAjIyBGZWF0dXJlc1xyXG4gKlxyXG4gKiB8ICB8IGlvcyB8IGFuZHJvaWQgfCB3aW4tOCB8IHdpbi0xMC91d3AgfCBtYWMgfFxyXG4gKiB8LS18LS18LS18LS18LS18LS18XHJcbiAqIHwgY29uc3VtYWJsZXMgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfFxyXG4gKiB8IG5vbiBjb25zdW1hYmxlcyB8IOKchSB8IOKchSB8IOKchSB8IOKchSB8IOKchSB8XHJcbiAqIHwgc3Vic2NyaXB0aW9ucyB8IOKchSB8IOKchSB8IOKchSB8IOKchSB8IOKchSB8XHJcbiAqIHwgcmVzdG9yZSBwdXJjaGFzZXMgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfFxyXG4gKiB8IHJlY2VpcHQgdmFsaWRhdGlvbnMgfCDinIUgfCDinIUgfCAgfCDinIUgfCDinIUgfFxyXG4gKiB8IGRvd25sb2FkYWJsZSBjb250ZW50IHwg4pyFIHwgICB8ICAgfCAgIHwg4pyFIHxcclxuICogfCBpbnRyb2R1Y3RvcnkgcHJpY2VzIHwg4pyFIHwg4pyFIHwgICB8IOKchSB8IOKchSB8XHJcbiAqXHJcbiAqIFN1cHBvcnRzOlxyXG4gKlxyXG4gKiAgLSAqKmlPUyoqIHZlcnNpb24gNy4wIG9yIGhpZ2hlci5cclxuICogIC0gKipBbmRyb2lkKiogdmVyc2lvbiAyLjIgKEFQSSBsZXZlbCA4KSBvciBoaWdoZXJcclxuICogICAgLSB3aXRoIEdvb2dsZSBQbGF5IGNsaWVudCB2ZXJzaW9uIDMuOS4xNiBvciBoaWdoZXJcclxuICogIC0gKipXaW5kb3dzKiogU3RvcmUvUGhvbmUgOC4xIG9yIGhpZ2hlclxyXG4gKiAgLSAqKldpbmRvd3MgMTAgTW9iaWxlKipcclxuICogIC0gKiptYWNPUyoqIHZlcnNpb24gMTBcclxuICogIC0gKipYYm94IE9uZSoqXHJcbiAqICAgIC0gKGFuZCBhbnkgcGxhdGZvcm0gc3VwcG9ydGluZyBNaWNyb3NvZnQncyBVV1ApXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEluQXBwUHVyY2hhc2UyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pbi1hcHAtcHVyY2hhc2UtMi9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLCBwcml2YXRlIHN0b3JlOiBJbkFwcFB1cmNoYXNlMikge1xyXG4gKiAgIHBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XHJcbiAqICAgIHRoaXMuc3RvcmUucmVnaXN0ZXIoe1xyXG4gKiAgICAgIGlkOiBcIm15X3Byb2R1Y3RfaWRcIixcclxuICogICAgICB0eXBlOiB0aGlzLnN0b3JlLk5PTl9SRU5FV0lOR19TVUJTQ1JJUFRJT04sXHJcbiAqICAgIH0pO1xyXG4gKiAgICB0aGlzLnN0b3JlLndoZW4oXCJteV9wcm9kdWN0X2lkXCIpXHJcbiAqICAgICAgLmFwcHJvdmVkKHAgPT4gcC52ZXJpZnkoKSlcclxuICogICAgICAudmVyaWZpZWQocCA9PiBwLmZpbmlzaCgpKTtcclxuICogICAgdGhpcy5zdG9yZS5yZWZyZXNoKCk7XHJcbiAqICAgfSk7XHJcbiAqIH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuc3RvcmUub3JkZXIoXCJteV9wcm9kdWN0X2lkXCIpO1xyXG4gKlxyXG4gKiBgYGBcclxuICpcclxuICogIyMgRnVsbCBleGFtcGxlXHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogIC8vIEFmdGVyIHBsYXRmb3JtIHJlYWR5XHJcbiAqICB0aGlzLnN0b3JlLnZlcmJvc2l0eSA9IHRoaXMuc3RvcmUuREVCVUc7XHJcbiAqICB0aGlzLnN0b3JlLnJlZ2lzdGVyKHtcclxuICogICAgaWQ6IFwibXlfcHJvZHVjdF9pZFwiLFxyXG4gKiAgICB0eXBlOiB0aGlzLnN0b3JlLlBBSURfU1VCU0NSSVBUSU9OLFxyXG4gKiAgfSk7XHJcbiAqXHJcbiAqICAvLyBSZWdpc3RlciBldmVudCBoYW5kbGVycyBmb3IgdGhlIHNwZWNpZmljIHByb2R1Y3RcclxuICogIHRoaXMuc3RvcmUud2hlbihcIm15X3Byb2R1Y3RfaWRcIikucmVnaXN0ZXJlZCggKHByb2R1Y3Q6IElBUFByb2R1Y3QpID0+IHtcclxuICogICAgY29uc29sZS5sb2coJ1JlZ2lzdGVyZWQ6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9kdWN0KSk7XHJcbiAqICB9KTtcclxuICpcclxuICogIC8vIFVwZGF0ZWRcclxuICogIHRoaXMuc3RvcmUud2hlbihcIm15X3Byb2R1Y3RfaWRcIikudXBkYXRlZCggKHByb2R1Y3Q6IElBUFByb2R1Y3QpID0+IHtcclxuICogICAgY29uc29sZS5sb2coJ1VwZGF0ZWQnICsgSlNPTi5zdHJpbmdpZnkocHJvZHVjdCkpO1xyXG4gKiAgfSk7XHJcbiAqXHJcbiAqICAvLyBVc2VyIGNsb3NlZCB0aGUgbmF0aXZlIHB1cmNoYXNlIGRpYWxvZ1xyXG4gKiAgdGhpcy5zdG9yZS53aGVuKFwibXlfcHJvZHVjdF9pZFwiKS5jYW5jZWxsZWQoIChwcm9kdWN0KSA9PiB7XHJcbiAqICAgICAgY29uc29sZS5lcnJvcignUHVyY2hhc2Ugd2FzIENhbmNlbGxlZCcpO1xyXG4gKiAgfSk7XHJcbiAqXHJcbiAqICAvLyBUcmFjayBhbGwgc3RvcmUgZXJyb3JzXHJcbiAqICB0aGlzLnN0b3JlLmVycm9yKCAoZXJyKSA9PiB7XHJcbiAqICAgIGNvbnNvbGUuZXJyb3IoJ1N0b3JlIEVycm9yICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuICogIH0pO1xyXG4gKlxyXG4gKiAgLy8gUnVuIHNvbWUgY29kZSBvbmx5IHdoZW4gdGhlIHN0b3JlIGlzIHJlYWR5IHRvIGJlIHVzZWRcclxuICogIHRoaXMuc3RvcmUucmVhZHkoKCkgPT4gIHtcclxuICogICAgY29uc29sZS5sb2coJ1N0b3JlIGlzIHJlYWR5Jyk7XHJcbiAqICAgIGNvbnNvbGUubG9nKCdQcm9kdWN0czogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcmUucHJvZHVjdHMpKTtcclxuICogICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5zdG9yZS5nZXQoXCJteV9wcm9kdWN0X2lkXCIpKSk7XHJcbiAqICB9KTtcclxuICpcclxuICogIC8vIFJlZnJlc2ggdGhlIHN0YXR1cyBvZiBpbi1hcHAgcHJvZHVjdHNcclxuICogIHRoaXMuc3RvcmUucmVmcmVzaCgpO1xyXG4gKlxyXG4gKiAgLi4uXHJcbiAqXHJcbiAqICAvLyBUbyBtYWtlIGEgcHVyY2hhc2VcclxuICogIHRoaXMuc3RvcmUub3JkZXIoXCJteV9wcm9kdWN0X2lkXCIpO1xyXG4gKlxyXG4gKiBgYGBcclxuICpcclxuICogIyMgUGhpbG9zb3BoeVxyXG4gKlxyXG4gKiBUaGUgQVBJIGlzIG1vc3RseSBldmVudHMgYmFzZWQuIEFzIGEgdXNlciBvZiB0aGlzIHBsdWdpbixcclxuICogeW91IHdpbGwgaGF2ZSB0byByZWdpc3RlciBsaXN0ZW5lcnMgdG8gY2hhbmdlcyBoYXBwZW5pbmcgdG8gdGhlIHByb2R1Y3RzXHJcbiAqIHlvdSByZWdpc3Rlci5cclxuICpcclxuICogVGhlIGNvcmUgb2YgdGhlIGxpc3RlbmluZyBtZWNoYW5pc20gaXMgdGhlIGB3aGVuKClgIG1ldGhvZC4gSXQgYWxsb3dzIHlvdSB0b1xyXG4gKiBiZSBub3RpZmllZCBvZiBjaGFuZ2VzIHRvIG9uZSBvciBhIHNldCBvZiBwcm9kdWN0cyB1c2luZyBhIHF1ZXJ5IG1lY2hhbmlzbTpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiAgdGhpcy5zdG9yZS53aGVuKFwicHJvZHVjdFwiKS51cGRhdGVkKHJlZnJlc2hTY3JlZW4pOyAvLyBtYXRjaCBhbnkgcHJvZHVjdFxyXG4gKiAgdGhpcy5zdG9yZS53aGVuKFwiZnVsbF92ZXJzaW9uXCIpLm93bmVkKHVubG9ja0FwcCk7IC8vIG1hdGNoIGEgc3BlY2lmaWMgcHJvZHVjdFxyXG4gKiAgdGhpcy5zdG9yZS53aGVuKFwic3Vic2NyaXB0aW9uXCIpLmFwcHJvdmVkKHNlcnZlckNoZWNrKTsgLy8gbWF0Y2ggYWxsIHN1YnNjcmlwdGlvbnNcclxuICogIHRoaXMuc3RvcmUud2hlbihcImRvd25sb2FkYWJsZSBjb250ZW50XCIpLmRvd25sb2FkZWQoc2hvd0NvbnRlbnQpO1xyXG4gKiBgYGBcclxuICpcclxuICogVGhlIGB1cGRhdGVkYCBldmVudCBpcyBmaXJlZCB3aGVuZXZlciBvbmUgb2YgdGhlIGZpZWxkcyBvZiBhIHByb2R1Y3QgaXNcclxuICogY2hhbmdlZCAoaXRzIGBvd25lZGAgc3RhdHVzIGZvciBpbnN0YW5jZSkuXHJcbiAqXHJcbiAqIFRoaXMgZXZlbnQgcHJvdmlkZXMgYSBnZW5lcmljIHdheSB0byB0cmFjayB0aGUgc3RhdHVzZXMgb2YgeW91ciBwdXJjaGFzZXMsXHJcbiAqIHRvIHVubG9jayBmZWF0dXJlcyB3aGVuIG5lZWRlZCBhbmQgdG8gcmVmcmVzaCB5b3VyIHZpZXdzIGFjY29yZGluZ2x5LlxyXG4gKlxyXG4gKiAjIyBSZWdpc3RlcmluZyBwcm9kdWN0c1xyXG4gKlxyXG4gKiBUaGUgc3RvcmUgbmVlZHMgdG8ga25vdyB0aGUgdHlwZSBhbmQgaWRlbnRpZmllcnMgb2YgeW91ciBwcm9kdWN0cyBiZWZvcmUgeW91XHJcbiAqIGNhbiB1c2UgdGhlbSBpbiB5b3VyIGNvZGUuXHJcbiAqXHJcbiAqIFVzZSBgc3RvcmUucmVnaXN0ZXIoKWAgdG8gZGVmaW5lIHRoZW0gYmVmb3JlIHlvdXIgZmlyc3QgY2FsbCB0byBgc3RvcmUucmVmcmVzaCgpYC5cclxuICpcclxuICogT25jZSByZWdpc3RlcmVkLCB5b3UgY2FuIHVzZSBgc3RvcmUuZ2V0KClgIHRvIHJldHJpZXZlIGFuIGBJQVBQcm9kdWN0YCBvYmplY3QuXHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogIHRoaXMuc3RvcmUucmVnaXN0ZXIoe1xyXG4gKiAgICBpZDogXCJteV9jb25zdW1hYmxlMVwiLFxyXG4gKiAgICB0eXBlOiB0aGlzLnN0b3JlLkNPTlNVTUFCTEVcclxuICogIH0pO1xyXG4gKiAgLi4uXHJcbiAqICBjb25zdCBwID0gdGhpcy5zdG9yZS5nZXQoXCJteV9jb25zdW1hYmxlMVwiKTtcclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSBwcm9kdWN0IGBpZGAgYW5kIGB0eXBlYCBoYXZlIHRvIG1hdGNoIHByb2R1Y3RzIGRlZmluZWQgaW4geW91clxyXG4gKiBBcHBsZSwgR29vZ2xlIG9yIE1pY3Jvc29mdCBkZXZlbG9wZXIgY29uc29sZXMuXHJcbiAqXHJcbiAqIExlYXJuIG1vcmUgYWJvdXQgaXQgW2Zyb20gdGhlIHdpa2ldKGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL3dpa2kpLlxyXG4gKlxyXG4gKiAjIyBEaXNwbGF5aW5nIHByb2R1Y3RzXHJcbiAqXHJcbiAqIFJpZ2h0IGFmdGVyIHlvdSByZWdpc3RlcmVkIHlvdXIgcHJvZHVjdHMsIG5vdGhpbmcgbXVjaCBpcyBrbm93biBhYm91dCB0aGVtXHJcbiAqIGV4Y2VwdCB0aGVpciBgaWRgLCBgdHlwZWAgYW5kIGFuIG9wdGlvbmFsIGBhbGlhc2AuXHJcbiAqXHJcbiAqIFdoZW4geW91IHBlcmZvcm0gdGhlIGluaXRpYWwgY2FsbCB0byBgc3RvcmUucmVmcmVzaCgpYCwgdGhlIHBsYXRmb3Jtcycgc2VydmVyIHdpbGxcclxuICogYmUgY29udGFjdGVkIHRvIGxvYWQgaW5mb3JtYXRpb25zIGFib3V0IHRoZSByZWdpc3RlcmVkIHByb2R1Y3RzOiBodW1hblxyXG4gKiByZWFkYWJsZSBgdGl0bGVgIGFuZCBgZGVzY3JpcHRpb25gLCBgcHJpY2VgLCBldGMuXHJcbiAqXHJcbiAqIFRoaXMgaXNuJ3QgYW4gb3B0aW9uYWwgc3RlcCwgc3RvcmUgb3duZXJzIHJlcXVpcmUgeW91XHJcbiAqIHRvIGRpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgYSBwcm9kdWN0IGV4YWN0bHkgYXMgcmV0cmlldmVkIGZyb20gdGhlaXIgc2VydmVyOiBub1xyXG4gKiBoYXJkLWNvZGluZyBvZiBwcmljZSBhbmQgdGl0bGUgYWxsb3dlZCEgVGhpcyBpcyBhbHNvIGNvbnZlbmllbnQgZm9yIHlvdVxyXG4gKiBhcyB5b3UgY2FuIGNoYW5nZSB0aGUgcHJpY2Ugb2YgeW91ciBpdGVtcyBrbm93aW5nIHRoYXQgaXQnbGwgYmUgcmVmbGVjdGVkIGluc3RhbnRseVxyXG4gKiBvbiB5b3VyIGNsaWVudHMnIGRldmljZXMuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB0aGUgaW5mb3JtYXRpb24gbWF5IG5vdCBiZSBhdmFpbGFibGUgd2hlbiB0aGUgZmlyc3QgdmlldyB0aGF0IG5lZWRzXHJcbiAqIHRoZW0gYXBwZWFycyBvbiBzY3JlZW4uIEZvciB5b3UsIHRoZSBiZXN0IG9wdGlvbiBpcyB0byBoYXZlIHlvdXIgdmlldyBtb25pdG9yXHJcbiAqIGNoYW5nZXMgbWFkZSB0byB0aGUgcHJvZHVjdC5cclxuICpcclxuICogIyMgUHVyY2hhc2luZ1xyXG4gKlxyXG4gKiAjIyMjIGluaXRpYXRlIGEgcHVyY2hhc2VcclxuICpcclxuICogUHVyY2hhc2VzIGFyZSBpbml0aWF0ZWQgdXNpbmcgdGhlIGBzdG9yZS5vcmRlcihcInNvbWVfcHJvZHVjdF9pZFwiKWAgbWV0aG9kLlxyXG4gKlxyXG4gKiBUaGUgc3RvcmUgd2lsbCBtYW5hZ2UgdGhlIGludGVybmFsIHB1cmNoYXNlIGZsb3cuIEl0J2xsIGVuZDpcclxuICpcclxuICogIC0gd2l0aCBhbiBgYXBwcm92ZWRgIGV2ZW50LiBUaGUgcHJvZHVjdCBlbnRlcnMgdGhlIGBBUFBST1ZFRGAgc3RhdGUuXHJcbiAqICAtIHdpdGggYSBgY2FuY2VsbGVkYCBldmVudC4gVGhlIHByb2R1Y3QgZ2V0cyBiYWNrIHRvIHRoZSBgVkFMSURgIHN0YXRlLlxyXG4gKiAgLSB3aXRoIGFuIGBlcnJvcmAgZXZlbnQuIFRoZSBwcm9kdWN0IGdldHMgYmFjayB0byB0aGUgYFZBTElEYCBzdGF0ZS5cclxuICpcclxuICogU2VlIHRoZSBwcm9kdWN0IGxpZmUtY3ljbGUgc2VjdGlvbiBmb3IgZGV0YWlscyBhYm91dCBwcm9kdWN0IHN0YXRlcy5cclxuICpcclxuICogIyMjIyBmaW5pc2ggYSBwdXJjaGFzZVxyXG4gKlxyXG4gKiBPbmNlIHRoZSB0cmFuc2FjdGlvbiBpcyBhcHByb3ZlZCwgdGhlIHByb2R1Y3Qgc3RpbGwgaXNuJ3Qgb3duZWQ6IHRoZSBzdG9yZSBuZWVkc1xyXG4gKiBjb25maXJtYXRpb24gdGhhdCB0aGUgcHVyY2hhc2Ugd2FzIGRlbGl2ZXJlZCBiZWZvcmUgY2xvc2luZyB0aGUgdHJhbnNhY3Rpb24uXHJcbiAqXHJcbiAqIFRvIGNvbmZpcm0gZGVsaXZlcnksIHlvdSdsbCB1c2UgdGhlIGBwcm9kdWN0LmZpbmlzaCgpYCBtZXRob2QuXHJcbiAqXHJcbiAqICMjIyMgZXhhbXBsZSB1c2FnZVxyXG4gKlxyXG4gKiBEdXJpbmcgaW5pdGlhbGl6YXRpb246XHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdGhpcy5zdG9yZS53aGVuKFwiZXh0cmFfY2hhcHRlclwiKS5hcHByb3ZlZCgocHJvZHVjdDogSUFQUHJvZHVjdCkgPT4ge1xyXG4gKiAgIC8vIGRvd25sb2FkIHRoZSBmZWF0dXJlXHJcbiAqICAgYXBwLmRvd25sb2FkRXh0cmFDaGFwdGVyKClcclxuICogICAudGhlbigoKSA9PiBwcm9kdWN0LmZpbmlzaCgpKTtcclxuICogfSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBXaGVuIHRoZSBwdXJjaGFzZSBidXR0b24gaXMgY2xpY2tlZDpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB0aGlzLnN0b3JlLm9yZGVyKFwiZXh0cmFfY2hhcHRlclwiKTtcclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyMgdW4tZmluaXNoZWQgcHVyY2hhc2VzXHJcbiAqXHJcbiAqIElmIHlvdXIgYXBwIHdhc24ndCBhYmxlIHRvIGRlbGl2ZXIgdGhlIGNvbnRlbnQsIGBwcm9kdWN0LmZpbmlzaCgpYCB3b24ndCBiZSBjYWxsZWQuXHJcbiAqXHJcbiAqIERvbid0IHdvcnJ5OiB0aGUgYGFwcHJvdmVkYCBldmVudCB3aWxsIGJlIHJlLXRyaWdnZXJlZCB0aGUgbmV4dCB0aW1lIHlvdVxyXG4gKiBjYWxsIGBzdG9yZS5yZWZyZXNoKClgLCB3aGljaCBjYW4gdmVyeSB3ZWxsIGJlIHRoZSBuZXh0IHRpbWVcclxuICogdGhlIGFwcGxpY2F0aW9uIHN0YXJ0cy4gUGVuZGluZyB0cmFuc2FjdGlvbnMgYXJlIHBlcnNpc3RhbnQuXHJcbiAqXHJcbiAqICMjIyMgc2ltcGxlIGNhc2VcclxuICpcclxuICogSW4gdGhlIG1vc3Qgc2ltcGxlIGNhc2UsIHdoZXJlOlxyXG4gKlxyXG4gKiAgLSBkZWxpdmVyeSBvZiBwdXJjaGFzZXMgaXMgb25seSBsb2NhbCA7XHJcbiAqICAtIHlvdSBkb24ndCB3YW50IChvciBuZWVkKSB0byBpbXBsZW1lbnQgcmVjZWlwdCB2YWxpZGF0aW9uIDtcclxuICpcclxuICogWW91IG1heSBqdXN0IHdhbnQgdG8gZmluaXNoIGFsbCBwdXJjaGFzZXMgYXV0b21hdGljYWxseS4gWW91IGNhbiBkbyBpdCB0aGlzIHdheTpcclxuICogYGBganNcclxuICogdGhpcy5zdG9yZS53aGVuKFwicHJvZHVjdFwiKS5hcHByb3ZlZCgocDogSUFQUHJvZHVjdCkgPT4gcC5maW5pc2goKSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBOT1RFOiB0aGUgXCJwcm9kdWN0XCIgcXVlcnkgd2lsbCBtYXRjaCBhbnkgcHVyY2hhc2VzIChzZWUgXCJxdWVyaWVzXCIgdG8gbGVhcm4gbW9yZSBkZXRhaWxzIGFib3V0IHF1ZXJpZXMpLlxyXG4gKlxyXG4gKiAjIyBSZWNlaXB0IHZhbGlkYXRpb25cclxuICpcclxuICogVG8gZ2V0IHRoZSBtb3N0IHVwLXRvLWRhdGUgaW5mb3JtYXRpb24gYWJvdXQgcHVyY2hhc2VzIChpbiBjYXNlIGEgcHVyY2hhc2UgaGF2ZSBiZWVuIGNhbmNlbGVkLCBvciBhIHN1YnNjcmlwdGlvbiByZW5ld2VkKSxcclxuICogeW91IHNob3VsZCBpbXBsZW1lbnQgc2VydmVyIHNpZGUgcmVjZWlwdCB2YWxpZGF0aW9uLlxyXG4gKlxyXG4gKiBUaGlzIGFsc28gcHJvdGVjdHMgeW91IGFnYWluc3QgZmFrZSBcInB1cmNoYXNlc1wiLCBtYWRlIGJ5IHNvbWUgdXNlcnMgdXNpbmdcclxuICogXCJmcmVlIGluLWFwcCBwdXJjaGFzZVwiIGFwcHMgb24gdGhlaXIgZGV2aWNlcy5cclxuICpcclxuICogV2hlbiBhIHB1cmNoYXNlIGhhcyBiZWVuIGFwcHJvdmVkIGJ5IHRoZSBzdG9yZSwgaXQncyBlbnJpY2hlZCB3aXRoXHJcbiAqIHRyYW5zYWN0aW9uIGluZm9ybWF0aW9uIChzZWUgYHByb2R1Y3QudHJhbnNhY3Rpb25gIGF0dHJpYnV0ZSkuXHJcbiAqXHJcbiAqIFRvIHZlcmlmeSBhIHB1cmNoYXNlIHlvdSdsbCBoYXZlIHRvIGRvIHRocmVlIHRoaW5nczpcclxuICpcclxuICogIC0gY29uZmlndXJlIHRoZSB2YWxpZGF0b3IuXHJcbiAqICAtIGNhbGwgYHByb2R1Y3QudmVyaWZ5KClgIGZyb20gdGhlIGBhcHByb3ZlZGAgZXZlbnQsIGJlZm9yZSBmaW5pc2hpbmcgdGhlIHRyYW5zYWN0aW9uLlxyXG4gKiAgLSBmaW5pc2ggdGhlIHRyYW5zYWN0aW9uIHdoZW4gdHJhbnNhY3Rpb24gaXMgYHZlcmlmaWVkYC5cclxuICpcclxuICogKipTaGFtZWxlc3MgUGx1ZyoqOiB0aGlzIGlzIGEgZmVhdHVyZSBtYW55IHVzZXJzIHN0cnVnZ2xlIHdpdGgsIHNvIGFzIHRoZSBhdXRob3Igb2YgdGhpcyBwbHVnaW4sIHdlIGNhbiBwcm92aWRlIGl0IHRvIHlvdSBhcy1hLXNlcnZpY2U6IGh0dHBzOi8vYmlsbGluZy5mb3ZlYS5jYy9cclxuICogKHdoaWNoIGlzIGZyZWUgdW50aWwgeW91IHN0YXJ0IG1ha2luZyBzZXJpb3VzIG1vbmV5KVxyXG4gKlxyXG4gKiAjIyMjIGV4YW1wbGUgdXNpbmcgYSB2YWxpZGF0aW9uIFVSTFxyXG4gKlxyXG4gKiBgYGBqc1xyXG4gKiB0aGlzLnN0b3JlLnZhbGlkYXRvciA9IFwiaHR0cHM6Ly9iaWxsaW5nLmZvdmVhLmNjL1wiO1xyXG4gKlxyXG4gKiB0aGlzLnN0b3JlLndoZW4oXCJteSBzdHVmZlwiKVxyXG4gKiAgIC5hcHByb3ZlZCgocDogSUFQUHJvZHVjdCkgPT4gcC52ZXJpZnkoKSlcclxuICogICAudmVyaWZpZWQoKHA6IElBUFByb2R1Y3QpID0+IHAuZmluaXNoKCkpO1xyXG4gKiBgYGBcclxuICpcclxuICogIyMgU3Vic2NyaXB0aW9uc1xyXG4gKlxyXG4gKiBGb3Igc3Vic2NyaXB0aW9uLCB5b3UgTVVTVCBpbXBsZW1lbnQgcmVtb3RlIHJlY2VpcHQgdmFsaWRhdGlvbi5cclxuICpcclxuICogV2hlbiB0aGUgcmVjZWlwdCB2YWxpZGF0b3IgcmV0dXJucyBhIGBzdG9yZS5QVVJDSEFTRV9FWFBJUkVEYCBlcnJvciBjb2RlLCB0aGUgc3Vic2NyaXB0aW9uIHdpbGxcclxuICogYXV0b21hdGljYWxseSBsb29zZSBpdHMgYG93bmVkYCBzdGF0dXMuXHJcbiAqXHJcbiAqIFR5cGljYWxseSwgeW91J2xsIGVuYWJsZSBhbmQgZGlzYWJsZSBhY2Nlc3MgdG8geW91ciBjb250ZW50IHRoaXMgd2F5LlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHRoaXMuc3RvcmUud2hlbihcIm15X3N1YmNyaXB0aW9uXCIpLnVwZGF0ZWQoKHByb2R1Y3Q6IElBUFByb2R1Y3QpID0+IHtcclxuICogICBpZiAocHJvZHVjdC5vd25lZClcclxuICogICAgIGFwcC5zdWJzY3JpYmVyTW9kZSgpO1xyXG4gKiAgIGVsc2VcclxuICogICAgIGFwcC5ndWVzdE1vZGUoKTtcclxuICogfSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyBQcm9kdWN0IGxpZmUtY3ljbGVcclxuICpcclxuICogQSBwcm9kdWN0IHdpbGwgY2hhbmdlIHN0YXRlIGR1cmluZyB0aGUgYXBwbGljYXRpb24gZXhlY3V0aW9uLlxyXG4gKlxyXG4gKiBGaW5kIGJlbG93IGEgZGlhZ3JhbSBvZiB0aGUgZGlmZmVyZW50IHN0YXRlcyBhIHByb2R1Y3QgY2FuIHBhc3MgYnkuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBSRUdJU1RFUkVEICstLT4gSU5WQUxJRFxyXG4gKiAgICAgICAgICAgIHxcclxuICogICAgICAgICAgICArLS0+IFZBTElEICstLT4gUkVRVUVTVEVEICstLT4gSU5JVElBVEVEICstK1xyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICAgICAgICAgICAgICAgICBeICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcclxuICogICAgICAgICAgICAgICAgIHwgICAgICB8XHJcbiAqICAgICAgICAgICAgICAgICB8ICAgICAgfCAgICAgICAgICAgICArLS0+IERPV05MT0FESU5HICstLT4gRE9XTkxPQURFRCArXHJcbiAqICAgICAgICAgICAgICAgICB8ICAgICAgfCAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICAgICAgICAgICAgICAgICB8ICAgICAgKy0tPiBBUFBST1ZFRCArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0+IEZJTklTSEVEICstLT4gT1dORURcclxuICogICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXHJcbiAqXHJcbiAqICMjIyMgTm90ZXNcclxuICpcclxuICogIC0gV2hlbiBmaW5pc2hlZCwgYSBjb25zdW1hYmxlIHByb2R1Y3Qgd2lsbCBnZXQgYmFjayB0byB0aGUgYFZBTElEYCBzdGF0ZSwgd2hpbGUgb3RoZXIgd2lsbCBlbnRlciB0aGUgYE9XTkVEYCBzdGF0ZS5cclxuICogIC0gQW55IGVycm9yIGluIHRoZSBwdXJjaGFzZSBwcm9jZXNzIHdpbGwgYnJpbmcgYSBwcm9kdWN0IGJhY2sgdG8gdGhlIGBWQUxJRGAgc3RhdGUuXHJcbiAqICAtIER1cmluZyBhcHBsaWNhdGlvbiBzdGFydHVwLCBwcm9kdWN0cyBtYXkgZ28gaW5zdGFudGx5IGZyb20gYFJFR0lTVEVSRURgIHRvIGBBUFBST1ZFRGAgb3IgYE9XTkVEYCwgZm9yIGV4YW1wbGUgaWYgdGhleSBhcmUgcHVyY2hhc2VkIG5vbi1jb25zdW1hYmxlcyBvciBub24tZXhwaXJlZCBzdWJzY3JpcHRpb25zLlxyXG4gKiAgLSBOb24tUmVuZXdpbmcgU3Vic2NyaXB0aW9ucyBhcmUgaU9TIHByb2R1Y3RzIG9ubHkuIFBsZWFzZSBzZWUgdGhlIFtpT1MgTm9uIFJlbmV3aW5nIFN1YnNjcmlwdGlvbnMgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UvYmxvYi9tYXN0ZXIvZG9jL2lvcy5tZCNub24tcmVuZXdpbmcpIGZvciBhIGRldGFpbGVkIGV4cGxhbmF0aW9uLlxyXG4gKlxyXG4gKiAjIyBldmVudHNcclxuICpcclxuICogIC0gYGxvYWRlZChJQVBQcm9kdWN0KWBcclxuICogICAgLSBDYWxsZWQgd2hlbiBwcm9kdWN0IGRhdGEgaXMgbG9hZGVkIGZyb20gdGhlIHN0b3JlLlxyXG4gKiAgLSBgdXBkYXRlZChJQVBQcm9kdWN0KWBcclxuICogICAgLSBDYWxsZWQgd2hlbiBhbnkgY2hhbmdlIG9jY3VyZWQgdG8gYSBwcm9kdWN0LlxyXG4gKiAgLSBgZXJyb3IoZXJyKWBcclxuICogICAgLSBDYWxsZWQgd2hlbiBhbiBvcmRlciBmYWlsZWQuXHJcbiAqICAgIC0gVGhlIGBlcnJgIHBhcmFtZXRlciBpcyBhbiBlcnJvciBvYmplY3RcclxuICogIC0gYGFwcHJvdmVkKElBUFByb2R1Y3QpYFxyXG4gKiAgICAtIENhbGxlZCB3aGVuIGEgcHJvZHVjdCBvcmRlciBpcyBhcHByb3ZlZC5cclxuICogIC0gYG93bmVkKElBUFByb2R1Y3QpYFxyXG4gKiAgICAtIENhbGxlZCB3aGVuIGEgbm9uLWNvbnN1bWFibGUgcHJvZHVjdCBvciBzdWJzY3JpcHRpb24gaXMgb3duZWQuXHJcbiAqICAtIGBjYW5jZWxsZWQoSUFQUHJvZHVjdClgXHJcbiAqICAgIC0gQ2FsbGVkIHdoZW4gYSBwcm9kdWN0IG9yZGVyIGlzIGNhbmNlbGxlZCBieSB0aGUgdXNlci5cclxuICogIC0gYHJlZnVuZGVkKElBUFByb2R1Y3QpYFxyXG4gKiAgICAtIENhbGxlZCB3aGVuIGFuIG9yZGVyIGlzIHJlZnVuZGVkIGJ5IHRoZSB1c2VyLlxyXG4gKiAgLSBBY3R1YWxseSwgYWxsIG90aGVyIHByb2R1Y3Qgc3RhdGVzIGhhdmUgdGhlaXIgcHJvbWlzZVxyXG4gKiAgICAtIGByZWdpc3RlcmVkYCwgYHZhbGlkYCwgYGludmFsaWRgLCBgcmVxdWVzdGVkYCxcclxuICogICAgICBgaW5pdGlhdGVkYCBhbmQgYGZpbmlzaGVkYFxyXG4gKiAgLSBgdmVyaWZpZWQoSUFQUHJvZHVjdClgXHJcbiAqICAgIC0gQ2FsbGVkIHdoZW4gcmVjZWlwdCB2YWxpZGF0aW9uIHN1Y2Nlc3NmdWxcclxuICogIC0gYHVudmVyaWZpZWQoSUFQUHJvZHVjdClgXHJcbiAqICAgIC0gQ2FsbGVkIHdoZW4gcmVjZWlwdCB2ZXJpZmljYXRpb24gZmFpbGVkXHJcbiAqICAtIGBleHBpcmVkKElBUFByb2R1Y3QpYFxyXG4gKiAgICAtIENhbGxlZCB3aGVuIHZhbGlkYXRpb24gZmluZCBhIHN1YnNjcmlwdGlvbiB0byBiZSBleHBpcmVkXHJcbiAqICAtIGBkb3dubG9hZGluZyhJQVBQcm9kdWN0LCBwcm9ncmVzcywgdGltZV9yZW1haW5pbmcpYFxyXG4gKiAgICAtIENhbGxlZCB3aGVuIGNvbnRlbnQgZG93bmxvYWQgaXMgc3RhcnRlZFxyXG4gKiAgLSBgZG93bmxvYWRlZChJQVBQcm9kdWN0KWBcclxuICogICAgLSBDYWxsZWQgd2hlbiBjb250ZW50IGRvd25sb2FkIGhhcyBzdWNjZXNzZnVsbHkgY29tcGxldGVkXHJcbiAqXHJcbiAqICMjIExlYXJuIE1vcmVcclxuICpcclxuICogIC0gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UpXHJcbiAqICAtIFtHaXRCb29rXShodHRwczovL3B1cmNoYXNlLmNvcmRvdmEuZm92ZWEuY2MvKVxyXG4gKiAgLSBbV2lraV0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2Uvd2lraSlcclxuICogIC0gW0FQSSByZWZlcmVuY2VdKGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL2Jsb2IvbWFzdGVyL2RvYy9hcGkubWQpXHJcbiAqXHJcbiAqICMjIFRlY2huaWNhbCBTdXBwb3J0IG9yIFF1ZXN0aW9uc1xyXG4gKlxyXG4gKiBJZiB5b3UgaGF2ZSBxdWVzdGlvbnMgb3IgbmVlZCBoZWxwIGludGVncmF0aW5nIEluLUFwcCBQdXJjaGFzZSwgW09wZW4gYW4gSXNzdWUgb24gR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZS9pc3N1ZXMpIG9yIGVtYWlsIHVzIGF0IF9zdXBwb3J0QGZvdmVhLmNjXy5cclxuICpcclxuICogQGludGVyZmFjZXNcclxuICogSUFQUHJvZHVjdFxyXG4gKiBJQVBQcm9kdWN0T3B0aW9uc1xyXG4gKiBJQVBQcm9kdWN0RXZlbnRzXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0luQXBwUHVyY2hhc2UyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZScsXHJcbiAgcGx1Z2luUmVmOiAnc3RvcmUnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZScsXHJcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJywgJ1dpbmRvd3MnXSxcclxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXB1cmNoYXNlIC0tdmFyaWFibGUgQklMTElOR19LRVk9XCI8QU5EUk9JRF9CSUxMSU5HX0tFWT5cIicsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEluQXBwUHVyY2hhc2UyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFFVSUVUOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUk9SOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFdBUk5JTkc6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgSU5GTzogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBERUJVRzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBEZWJ1ZyBsZXZlbC4gVXNlIFFVSUVULCBFUlJPUiwgV0FSTklORywgSU5GTyBvciBERUJVRyBjb25zdGFudHNcclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICB2ZXJib3NpdHk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRvIHRydWUgdG8gY2xlYXIgdGhlIHRyYW5zYWN0aW9uIHF1ZXVlLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24uXHJcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UvYmxvYi9tYXN0ZXIvZG9jL2FwaS5tZCNyYW5kb20tdGlwc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIGF1dG9GaW5pc2hUcmFuc2FjdGlvbnM6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0byB0cnVlIHRvIGludm9rZSB0aGUgcGxhdGZvcm0gcHVyY2hhc2Ugc2FuZGJveC4gKFdpbmRvd3Mgb25seSlcclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBzYW5kYm94OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIGRvd25sb2FkaW5nIG9mIGhvc3RlZCBjb250ZW50LiAoQXBwbGUgb25seSkuXHJcbiAgICogVXNlZnVsIGluIGRldmVsb3BtZW50IG9yIHdoZW4gbWlncmF0aW5nIHlvdXIgYXBwIGF3YXkgZnJvbSBBcHBsZSBIb3N0ZWQgQ29udGVudC5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBkaXNhYmxlSG9zdGVkQ29udGVudDogYm9vbGVhbjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRlJFRV9TVUJTQ1JJUFRJT046IHN0cmluZztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUEFJRF9TVUJTQ1JJUFRJT046IHN0cmluZztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTk9OX1JFTkVXSU5HX1NVQlNDUklQVElPTjogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBDT05TVU1BQkxFOiBzdHJpbmc7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE5PTl9DT05TVU1BQkxFOiBzdHJpbmc7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9TRVRVUDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfTE9BRDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfUFVSQ0hBU0U6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX0xPQURfUkVDRUlQVFM6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX0NMSUVOVF9JTlZBTElEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9QQVlNRU5UX0NBTkNFTExFRDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfUEFZTUVOVF9JTlZBTElEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9QQVlNRU5UX05PVF9BTExPV0VEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9VTktOT1dOOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9SRUZSRVNIX1JFQ0VJUFRTOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9JTlZBTElEX1BST0RVQ1RfSUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX0ZJTklTSDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfQ09NTVVOSUNBVElPTjogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfU1VCU0NSSVBUSU9OU19OT1RfQVZBSUxBQkxFOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9NSVNTSU5HX1RPS0VOOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9WRVJJRklDQVRJT05fRkFJTEVEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9CQURfUkVTUE9OU0U6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX1JFRlJFU0g6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX1BBWU1FTlRfRVhQSVJFRDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfRE9XTkxPQUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX1NVQlNDUklQVElPTl9VUERBVEVfTk9UX0FWQUlMQUJMRTogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBSRUdJU1RFUkVEOiBzdHJpbmc7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIElOVkFMSUQ6IHN0cmluZztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgVkFMSUQ6IHN0cmluZztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUkVRVUVTVEVEOiBzdHJpbmc7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIElOSVRJQVRFRDogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBBUFBST1ZFRDogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBGSU5JU0hFRDogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBPV05FRDogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBET1dOTE9BRElORzogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBET1dOTE9BREVEOiBzdHJpbmc7XHJcblxyXG4gIC8qIHZhbGlkYXRpb24gZXJyb3IgY29kZXMgKi9cclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgSU5WQUxJRF9QQVlMT0FEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIENPTk5FQ1RJT05fRkFJTEVEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFBVUkNIQVNFX0VYUElSRUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUFVSQ0hBU0VfQ09OU1VNRUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgSU5URVJOQUxfRVJST1I6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTkVFRF9NT1JFX0RBVEE6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgcHJvZHVjdHM6IElBUFByb2R1Y3RzO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICB2YWxpZGF0b3I6IHN0cmluZyB8ICgodXJsOiBzdHJpbmcgfCBJQVBQcm9kdWN0LCBjYWxsYmFjazogRnVuY3Rpb24pID0+IHZvaWQpO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBhcHBsaWNhdGlvblVzZXJuYW1lOiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZ2V0QXBwbGljYXRpb25Vc2VybmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgbG9nOiB7XHJcbiAgICBlcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIHdhcm46IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBpbmZvOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgZGVidWc6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHByb2R1Y3QgYnkgaWQgb3IgYWxpYXNcclxuICAgKiBAcGFyYW0gaWRPckFsaWFzXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZ2V0KGlkT3JBbGlhczogc3RyaW5nKTogSUFQUHJvZHVjdCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlciBlcnJvciBoYW5kbGVyXHJcbiAgICogQHBhcmFtIG9uRXJyb3Ige0Z1bmN0aW9ufSBmdW5jdGlvbiB0byBjYWxsIG9uIGVycm9yXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZXJyb3Iob25FcnJvcjogRnVuY3Rpb24pOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBvciByZWdpc3RlciBhIHByb2R1Y3RcclxuICAgKiBAcGFyYW0gcHJvZHVjdCB7SUFQUHJvZHVjdE9wdGlvbnN9XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcmVnaXN0ZXIocHJvZHVjdDogSUFQUHJvZHVjdE9wdGlvbnMgfCBJQVBQcm9kdWN0T3B0aW9uc1tdKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSBxdWVyeVxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAqIEByZXR1cm4ge0lBUFByb2R1Y3RFdmVudHN9XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgd2hlbihxdWVyeTogc3RyaW5nIHwgSUFQUHJvZHVjdCwgZXZlbnQ/OiBzdHJpbmcsIGNhbGxiYWNrPzogSUFQUXVlcnlDYWxsYmFjayk6IElBUFByb2R1Y3RFdmVudHMge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSWRlbnRpY2FsIHRvIGB3aGVuYCwgYnV0IHRoZSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBvbmx5IG9uY2UuIEFmdGVyIGJlaW5nIGNhbGxlZCwgdGhlIGNhbGxiYWNrIHdpbGwgYmUgdW5yZWdpc3RlcmVkLlxyXG4gICAqIEBwYXJhbSBxdWVyeSB7c3RyaW5nIHwgSUFQUHJvZHVjdH1cclxuICAgKiBAcGFyYW0gW2V2ZW50XSB7ZXZlbnR9XHJcbiAgICogQHBhcmFtIFtjYWxsYmFja10ge0lBUFF1ZXJ5Q2FsbGJhY2t9XHJcbiAgICogQHJldHVybiB7SUFQUHJvZHVjdEV2ZW50c31cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBvbmNlKHF1ZXJ5OiBzdHJpbmcgfCBJQVBQcm9kdWN0LCBldmVudD86IHN0cmluZywgY2FsbGJhY2s/OiBJQVBRdWVyeUNhbGxiYWNrKTogSUFQUHJvZHVjdEV2ZW50cyB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVbnJlZ2lzdGVyIGEgY2FsbGJhY2suIFdvcmtzIGZvciBjYWxsYmFja3MgcmVnaXN0ZXJlZCB3aXRoIHJlYWR5LCB3aGVuLCBvbmNlIGFuZCBlcnJvci5cclxuICAgKiBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIG9mZihjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYXRlIHRoZSBwdXJjaGFzZSBvZiBhIHByb2R1Y3QuXHJcbiAgICpcclxuICAgKiBUaGUgYHByb2R1Y3RgIGFyZ3VtZW50IGNhbiBiZSBlaXRoZXI6XHJcbiAgICpcclxuICAgKiAgLSB0aGUgYElBUFByb2R1Y3RgIG9iamVjdFxyXG4gICAqICAtIHRoZSBwcm9kdWN0IGBpZGBcclxuICAgKiAgLSB0aGUgcHJvZHVjdCBgYWxpYXNgXHJcbiAgICpcclxuICAgKiBUaGUgYGFkZGl0aW9uYWxEYXRhYCBhcmd1bWVudCBpcyBhbiBvcHRpb25hbCBvYmplY3Qgd2l0aCBhdHRyaWJ1dGVzOlxyXG4gICAqICAtIGBvbGRQdXJjaGFzZWRTa3VzYDogYSBzdHJpbmcgYXJyYXkgd2l0aCB0aGUgb2xkIHN1YnNjcmlwdGlvbiB0byB1cGdyYWRlL2Rvd25ncmFkZSBvbiBBbmRyb2lkLiBTZWU6IFthbmRyb2lkIGRldmVsb3Blcl0oaHR0cHM6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vZ29vZ2xlL3BsYXkvYmlsbGluZy9iaWxsaW5nX3JlZmVyZW5jZS5odG1sI3VwZ3JhZGUtZ2V0QnV5SW50ZW50VG9SZXBsYWNlU2t1cykgZm9yIG1vcmUgaW5mb1xyXG4gICAqICAtIGBkZXZlbG9wZXJQYXlsb2FkYDogc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZGV2ZWxvcGVyIHBheWxvYWQgYXMgZGVzY3JpYmVkIGluIFtiaWxsaW5nIGJlc3QgcHJhY3RpY2VzXShodHRwczovL2RldmVsb3Blci5hbmRyb2lkLmNvbS9nb29nbGUvcGxheS9iaWxsaW5nL2JpbGxpbmdfYmVzdF9wcmFjdGljZXMuaHRtbClcclxuICAgKiAgLSBgYXBwbGljYXRpb25Vc2VybmFtZWA6IHRoZSBpZGVudGlmaWVyIG9mIHRoZSB1c2VyIGluIHlvdXIgYXBwbGljYXRpb24uXHJcbiAgICpcclxuICAgKiBTZWUgdGhlIFwiUHVyY2hhc2luZyBzZWN0aW9uXCIgdG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgcHVyY2hhc2UgcHJvY2Vzcy5cclxuICAgKlxyXG4gICAqICoqcmV0dXJuIHZhbHVlKipcclxuICAgKlxyXG4gICAqIGBzdG9yZS5vcmRlcigpYCByZXR1cm5zIGEgUHJvbWlzZSB3aXRoIHRoZSBmb2xsb3dpbmcgbWV0aG9kczpcclxuICAgKlxyXG4gICAqICAtIGB0aGVuYCAtIGNhbGxlZCB3aGVuIHRoZSBvcmRlciB3YXMgc3VjY2Vzc2Z1bGx5IGluaXRpYXRlZC5cclxuICAgKiAgLSBgZXJyb3JgIC0gY2FsbGVkIGlmIHRoZSBvcmRlciBjb3VsZG4ndCBiZSBpbml0aWF0ZWQuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgb3JkZXIocHJvZHVjdDogc3RyaW5nIHwgSUFQUHJvZHVjdCwgYWRkaXRpb25hbERhdGE/OiBhbnkpOiB7IHRoZW46IEZ1bmN0aW9uOyBlcnJvcjogRnVuY3Rpb24gfSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgcmVhZHkoY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEFmdGVyIHlvdSdyZSBkb25lIHJlZ2lzdGVyaW5nIHlvdXIgc3RvcmUncyBwcm9kdWN0IGFuZCBldmVudHMgaGFuZGxlcnMsXHJcbiAgICogdGltZSB0byBjYWxsIGBzdG9yZS5yZWZyZXNoKClgLlxyXG4gICAqXHJcbiAgICogVGhpcyB3aWxsIGluaXRpYXRlIGFsbCB0aGUgY29tcGxleCBiZWhpbmQtdGhlLXNjZW5lIHdvcmssIHRvIGxvYWQgcHJvZHVjdFxyXG4gICAqIGRhdGEgZnJvbSB0aGUgc2VydmVycyBhbmQgcmVzdG9yZSB3aGF0ZXZlciBhbHJlYWR5IGhhdmUgYmVlblxyXG4gICAqIHB1cmNoYXNlZCBieSB0aGUgdXNlci5cclxuICAgKlxyXG4gICAqIE5vdGUgdGhhdCB5b3UgY2FuIGNhbGwgdGhpcyBtZXRob2QgYWdhaW4gbGF0ZXIgZHVyaW5nIHRoZSBhcHBsaWNhdGlvblxyXG4gICAqIGV4ZWN1dGlvbiB0byByZS10cmlnZ2VyIGFsbCB0aGF0IGhhcmQtd29yay4gSXQncyBraW5kIG9mIGV4cGVuc2l2ZSBpbiB0ZXJtIG9mXHJcbiAgICogcHJvY2Vzc2luZywgc28geW91J2QgYmV0dGVyIGNvbnNpZGVyIGl0IHR3aWNlLlxyXG4gICAqXHJcbiAgICogT25lIGdvb2Qgd2F5IG9mIGRvaW5nIGl0IGlzIHRvIGFkZCBhIFwiUmVmcmVzaCBQdXJjaGFzZXNcIiBidXR0b24gaW4geW91clxyXG4gICAqIGFwcGxpY2F0aW9ucyBzZXR0aW5ncy4gVGhpcyB3YXksIGlmIGRlbGl2ZXJ5IG9mIGEgcHVyY2hhc2UgZmFpbGVkIG9yXHJcbiAgICogaWYgYSB1c2VyIHdhbnRzIHRvIHJlc3RvcmUgcHVyY2hhc2VzIGhlIG1hZGUgZnJvbSBhbm90aGVyIGRldmljZSwgaGUnbGxcclxuICAgKiBoYXZlIGEgd2F5IHRvIGRvIGp1c3QgdGhhdC5cclxuICAgKlxyXG4gICAqICoqZXhhbXBsZSB1c2FnZSoqXHJcbiAgICpcclxuICAgKiBgYGB0eXBlc2NyaXB0XHJcbiAgICogICAgLy8gLi4uXHJcbiAgICogICAgLy8gcmVnaXN0ZXIgcHJvZHVjdHMgYW5kIGV2ZW50cyBoYW5kbGVycyBoZXJlXHJcbiAgICogICAgLy8gLi4uXHJcbiAgICogICAgLy9cclxuICAgKiAgICAvLyB0aGVuIGFuZCBvbmx5IHRoZW4sIGNhbGwgcmVmcmVzaC5cclxuICAgKiAgICB0aGlzLnN0b3JlLnJlZnJlc2goKTtcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqICoqcmVzdG9yZSBwdXJjaGFzZXMqKlxyXG4gICAqXHJcbiAgICogQWRkIGEgXCJSZWZyZXNoIFB1cmNoYXNlc1wiIGJ1dHRvbiB0byBjYWxsIHRoZSBgc3RvcmUucmVmcmVzaCgpYCBtZXRob2QsIGxpa2U6XHJcbiAgICpcclxuICAgKiBgPGJ1dHRvbiBvbmNsaWNrPVwiPHBzZXVkb19jb2RlPnRoaXMuc3RvcmUucmVmcmVzaCgpPC9wc2V1ZG9fY29kZT5cIj5SZXN0b3JlIFB1cmNoYXNlczwvYnV0dG9uPmBcclxuICAgKlxyXG4gICAqIFRvIG1ha2UgdGhlIHJlc3RvcmUgcHVyY2hhc2VzIHdvcmsgYXMgZXhwZWN0ZWQsIHBsZWFzZSBtYWtlIHN1cmUgdGhhdFxyXG4gICAqIHRoZSBcImFwcHJvdmVkXCIgZXZlbnQgbGlzdGVuZXIgaGFkIGJlIHJlZ2lzdGVyZWQgcHJvcGVybHksXHJcbiAgICogYW5kIGluIHRoZSBjYWxsYmFjayBgcHJvZHVjdC5maW5pc2goKWAgc2hvdWxkIGJlIGNhbGxlZC5cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICByZWZyZXNoKCk6IHZvaWQge31cclxuXHJcbiAgLyoqIExpZ2h0d2VpZ2h0IG1ldGhvZCBsaWtlIHJlZnJlc2ggYnV0IGRvIG5vdCByZWxvZ2luIHVzZXIgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICB1cGRhdGUoKTogdm9pZCB7fVxyXG5cclxuICAvKiogT3BlbnMgdGhlIE1hbmFnZSBTdWJzY3JpcHRpb24gcGFnZSAoQXBwU3RvcmUsIFBsYXksIE1pY3Jvc29mdCwgLi4uKS4gKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBtYW5hZ2VTdWJzY3JpcHRpb25zKCk6IHZvaWQge31cclxufVxyXG4iXX0=