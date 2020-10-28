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
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var IAPError = /** @class */ (function () {
    function IAPError() {
    }
    return IAPError;
}());
export { IAPError };
var InAppPurchase2Original = /** @class */ (function (_super) {
    __extends(InAppPurchase2Original, _super);
    function InAppPurchase2Original() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppPurchase2Original.prototype.getApplicationUsername = function () { return cordova(this, "getApplicationUsername", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.get = function (idOrAlias) { return cordova(this, "get", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.error = function (onError) { return cordova(this, "error", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.register = function (product) { return cordova(this, "register", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.when = function (query, event, callback) { return cordova(this, "when", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.once = function (query, event, callback) { return cordova(this, "once", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.off = function (callback) { return cordova(this, "off", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.order = function (product, additionalData) { return cordova(this, "order", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.ready = function (callback) { return cordova(this, "ready", {}, arguments); };
    InAppPurchase2Original.prototype.refresh = function () { return cordova(this, "refresh", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.update = function () { return cordova(this, "update", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.manageSubscriptions = function () { return cordova(this, "manageSubscriptions", { "sync": true }, arguments); };
    Object.defineProperty(InAppPurchase2Original.prototype, "QUIET", {
        get: function () { return cordovaPropertyGet(this, "QUIET"); },
        set: function (value) { cordovaPropertySet(this, "QUIET", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERROR", {
        get: function () { return cordovaPropertyGet(this, "ERROR"); },
        set: function (value) { cordovaPropertySet(this, "ERROR", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "WARNING", {
        get: function () { return cordovaPropertyGet(this, "WARNING"); },
        set: function (value) { cordovaPropertySet(this, "WARNING", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INFO", {
        get: function () { return cordovaPropertyGet(this, "INFO"); },
        set: function (value) { cordovaPropertySet(this, "INFO", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "DEBUG", {
        get: function () { return cordovaPropertyGet(this, "DEBUG"); },
        set: function (value) { cordovaPropertySet(this, "DEBUG", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "verbosity", {
        get: function () { return cordovaPropertyGet(this, "verbosity"); },
        set: function (value) { cordovaPropertySet(this, "verbosity", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "autoFinishTransactions", {
        get: function () { return cordovaPropertyGet(this, "autoFinishTransactions"); },
        set: function (value) { cordovaPropertySet(this, "autoFinishTransactions", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "sandbox", {
        get: function () { return cordovaPropertyGet(this, "sandbox"); },
        set: function (value) { cordovaPropertySet(this, "sandbox", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "disableHostedContent", {
        get: function () { return cordovaPropertyGet(this, "disableHostedContent"); },
        set: function (value) { cordovaPropertySet(this, "disableHostedContent", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "FREE_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "FREE_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "FREE_SUBSCRIPTION", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "PAID_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "PAID_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "PAID_SUBSCRIPTION", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "NON_RENEWING_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "NON_RENEWING_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "NON_RENEWING_SUBSCRIPTION", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "CONSUMABLE", {
        get: function () { return cordovaPropertyGet(this, "CONSUMABLE"); },
        set: function (value) { cordovaPropertySet(this, "CONSUMABLE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "NON_CONSUMABLE", {
        get: function () { return cordovaPropertyGet(this, "NON_CONSUMABLE"); },
        set: function (value) { cordovaPropertySet(this, "NON_CONSUMABLE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_SETUP", {
        get: function () { return cordovaPropertyGet(this, "ERR_SETUP"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SETUP", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_LOAD", {
        get: function () { return cordovaPropertyGet(this, "ERR_LOAD"); },
        set: function (value) { cordovaPropertySet(this, "ERR_LOAD", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PURCHASE", {
        get: function () { return cordovaPropertyGet(this, "ERR_PURCHASE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PURCHASE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_LOAD_RECEIPTS", {
        get: function () { return cordovaPropertyGet(this, "ERR_LOAD_RECEIPTS"); },
        set: function (value) { cordovaPropertySet(this, "ERR_LOAD_RECEIPTS", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_CLIENT_INVALID", {
        get: function () { return cordovaPropertyGet(this, "ERR_CLIENT_INVALID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_CLIENT_INVALID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PAYMENT_CANCELLED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_CANCELLED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_CANCELLED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PAYMENT_INVALID", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_INVALID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_INVALID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PAYMENT_NOT_ALLOWED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_NOT_ALLOWED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_NOT_ALLOWED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_UNKNOWN", {
        get: function () { return cordovaPropertyGet(this, "ERR_UNKNOWN"); },
        set: function (value) { cordovaPropertySet(this, "ERR_UNKNOWN", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_REFRESH_RECEIPTS", {
        get: function () { return cordovaPropertyGet(this, "ERR_REFRESH_RECEIPTS"); },
        set: function (value) { cordovaPropertySet(this, "ERR_REFRESH_RECEIPTS", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_INVALID_PRODUCT_ID", {
        get: function () { return cordovaPropertyGet(this, "ERR_INVALID_PRODUCT_ID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_INVALID_PRODUCT_ID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_FINISH", {
        get: function () { return cordovaPropertyGet(this, "ERR_FINISH"); },
        set: function (value) { cordovaPropertySet(this, "ERR_FINISH", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_COMMUNICATION", {
        get: function () { return cordovaPropertyGet(this, "ERR_COMMUNICATION"); },
        set: function (value) { cordovaPropertySet(this, "ERR_COMMUNICATION", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", {
        get: function () { return cordovaPropertyGet(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_MISSING_TOKEN", {
        get: function () { return cordovaPropertyGet(this, "ERR_MISSING_TOKEN"); },
        set: function (value) { cordovaPropertySet(this, "ERR_MISSING_TOKEN", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_VERIFICATION_FAILED", {
        get: function () { return cordovaPropertyGet(this, "ERR_VERIFICATION_FAILED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_VERIFICATION_FAILED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_BAD_RESPONSE", {
        get: function () { return cordovaPropertyGet(this, "ERR_BAD_RESPONSE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_BAD_RESPONSE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_REFRESH", {
        get: function () { return cordovaPropertyGet(this, "ERR_REFRESH"); },
        set: function (value) { cordovaPropertySet(this, "ERR_REFRESH", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PAYMENT_EXPIRED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_EXPIRED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_EXPIRED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_DOWNLOAD", {
        get: function () { return cordovaPropertyGet(this, "ERR_DOWNLOAD"); },
        set: function (value) { cordovaPropertySet(this, "ERR_DOWNLOAD", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", {
        get: function () { return cordovaPropertyGet(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "REGISTERED", {
        get: function () { return cordovaPropertyGet(this, "REGISTERED"); },
        set: function (value) { cordovaPropertySet(this, "REGISTERED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INVALID", {
        get: function () { return cordovaPropertyGet(this, "INVALID"); },
        set: function (value) { cordovaPropertySet(this, "INVALID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "VALID", {
        get: function () { return cordovaPropertyGet(this, "VALID"); },
        set: function (value) { cordovaPropertySet(this, "VALID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "REQUESTED", {
        get: function () { return cordovaPropertyGet(this, "REQUESTED"); },
        set: function (value) { cordovaPropertySet(this, "REQUESTED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INITIATED", {
        get: function () { return cordovaPropertyGet(this, "INITIATED"); },
        set: function (value) { cordovaPropertySet(this, "INITIATED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "APPROVED", {
        get: function () { return cordovaPropertyGet(this, "APPROVED"); },
        set: function (value) { cordovaPropertySet(this, "APPROVED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "FINISHED", {
        get: function () { return cordovaPropertyGet(this, "FINISHED"); },
        set: function (value) { cordovaPropertySet(this, "FINISHED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "OWNED", {
        get: function () { return cordovaPropertyGet(this, "OWNED"); },
        set: function (value) { cordovaPropertySet(this, "OWNED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "DOWNLOADING", {
        get: function () { return cordovaPropertyGet(this, "DOWNLOADING"); },
        set: function (value) { cordovaPropertySet(this, "DOWNLOADING", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "DOWNLOADED", {
        get: function () { return cordovaPropertyGet(this, "DOWNLOADED"); },
        set: function (value) { cordovaPropertySet(this, "DOWNLOADED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INVALID_PAYLOAD", {
        get: function () { return cordovaPropertyGet(this, "INVALID_PAYLOAD"); },
        set: function (value) { cordovaPropertySet(this, "INVALID_PAYLOAD", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "CONNECTION_FAILED", {
        get: function () { return cordovaPropertyGet(this, "CONNECTION_FAILED"); },
        set: function (value) { cordovaPropertySet(this, "CONNECTION_FAILED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "PURCHASE_EXPIRED", {
        get: function () { return cordovaPropertyGet(this, "PURCHASE_EXPIRED"); },
        set: function (value) { cordovaPropertySet(this, "PURCHASE_EXPIRED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "PURCHASE_CONSUMED", {
        get: function () { return cordovaPropertyGet(this, "PURCHASE_CONSUMED"); },
        set: function (value) { cordovaPropertySet(this, "PURCHASE_CONSUMED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INTERNAL_ERROR", {
        get: function () { return cordovaPropertyGet(this, "INTERNAL_ERROR"); },
        set: function (value) { cordovaPropertySet(this, "INTERNAL_ERROR", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "NEED_MORE_DATA", {
        get: function () { return cordovaPropertyGet(this, "NEED_MORE_DATA"); },
        set: function (value) { cordovaPropertySet(this, "NEED_MORE_DATA", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "products", {
        get: function () { return cordovaPropertyGet(this, "products"); },
        set: function (value) { cordovaPropertySet(this, "products", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "validator", {
        get: function () { return cordovaPropertyGet(this, "validator"); },
        set: function (value) { cordovaPropertySet(this, "validator", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "applicationUsername", {
        get: function () { return cordovaPropertyGet(this, "applicationUsername"); },
        set: function (value) { cordovaPropertySet(this, "applicationUsername", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "log", {
        get: function () { return cordovaPropertyGet(this, "log"); },
        set: function (value) { cordovaPropertySet(this, "log", value); },
        enumerable: true,
        configurable: true
    });
    InAppPurchase2Original.pluginName = "InAppPurchase2";
    InAppPurchase2Original.plugin = "cordova-plugin-purchase";
    InAppPurchase2Original.pluginRef = "store";
    InAppPurchase2Original.repo = "https://github.com/j3k0/cordova-plugin-purchase";
    InAppPurchase2Original.platforms = ["iOS", "Android", "Windows"];
    InAppPurchase2Original.install = "ionic cordova plugin add cordova-plugin-purchase --variable BILLING_KEY=\"<ANDROID_BILLING_KEY>\"";
    return InAppPurchase2Original;
}(IonicNativePlugin));
var InAppPurchase2 = new InAppPurchase2Original();
export { InAppPurchase2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luLWFwcC1wdXJjaGFzZS0yL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDOzs7O21CQUF6Rjs7OztJQXNpQm9DLGtDQUFpQjs7OztJQW9MbkQsK0NBQXNCO0lBaUJ0Qiw0QkFBRyxhQUFDLFNBQWlCO0lBU3JCLDhCQUFLLGFBQUMsT0FBaUI7SUFPdkIsaUNBQVEsYUFBQyxPQUFnRDtJQVV6RCw2QkFBSSxhQUFDLEtBQTBCLEVBQUUsS0FBYyxFQUFFLFFBQTJCO0lBWTVFLDZCQUFJLGFBQUMsS0FBMEIsRUFBRSxLQUFjLEVBQUUsUUFBMkI7SUFTNUUsNEJBQUcsYUFBQyxRQUFrQjtJQTBCdEIsOEJBQUssYUFBQyxPQUE0QixFQUFFLGNBQW9CO0lBS3hELDhCQUFLLGFBQUMsUUFBa0I7SUEwQ3hCLGdDQUFPO0lBSVAsK0JBQU07SUFJTiw0Q0FBbUI7MEJBblVuQixpQ0FBSzs7Ozs7OzBCQUdMLGlDQUFLOzs7Ozs7MEJBR0wsbUNBQU87Ozs7OzswQkFHUCxnQ0FBSTs7Ozs7OzBCQUdKLGlDQUFLOzs7Ozs7MEJBTUwscUNBQVM7Ozs7OzswQkFPVCxrREFBc0I7Ozs7OzswQkFNdEIsbUNBQU87Ozs7OzswQkFPUCxnREFBb0I7Ozs7OzswQkFHcEIsNkNBQWlCOzs7Ozs7MEJBR2pCLDZDQUFpQjs7Ozs7OzBCQUdqQixxREFBeUI7Ozs7OzswQkFHekIsc0NBQVU7Ozs7OzswQkFHViwwQ0FBYzs7Ozs7OzBCQUdkLHFDQUFTOzs7Ozs7MEJBR1Qsb0NBQVE7Ozs7OzswQkFHUix3Q0FBWTs7Ozs7OzBCQUdaLDZDQUFpQjs7Ozs7OzBCQUdqQiw4Q0FBa0I7Ozs7OzswQkFHbEIsaURBQXFCOzs7Ozs7MEJBR3JCLCtDQUFtQjs7Ozs7OzBCQUduQixtREFBdUI7Ozs7OzswQkFHdkIsdUNBQVc7Ozs7OzswQkFHWCxnREFBb0I7Ozs7OzswQkFHcEIsa0RBQXNCOzs7Ozs7MEJBR3RCLHNDQUFVOzs7Ozs7MEJBR1YsNkNBQWlCOzs7Ozs7MEJBR2pCLDJEQUErQjs7Ozs7OzBCQUcvQiw2Q0FBaUI7Ozs7OzswQkFHakIsbURBQXVCOzs7Ozs7MEJBR3ZCLDRDQUFnQjs7Ozs7OzBCQUdoQix1Q0FBVzs7Ozs7OzBCQUdYLCtDQUFtQjs7Ozs7OzBCQUduQix3Q0FBWTs7Ozs7OzBCQUdaLGlFQUFxQzs7Ozs7OzBCQUdyQyxzQ0FBVTs7Ozs7OzBCQUdWLG1DQUFPOzs7Ozs7MEJBR1AsaUNBQUs7Ozs7OzswQkFHTCxxQ0FBUzs7Ozs7OzBCQUdULHFDQUFTOzs7Ozs7MEJBR1Qsb0NBQVE7Ozs7OzswQkFHUixvQ0FBUTs7Ozs7OzBCQUdSLGlDQUFLOzs7Ozs7MEJBR0wsdUNBQVc7Ozs7OzswQkFHWCxzQ0FBVTs7Ozs7OzBCQUtWLDJDQUFlOzs7Ozs7MEJBR2YsNkNBQWlCOzs7Ozs7MEJBR2pCLDRDQUFnQjs7Ozs7OzBCQUdoQiw2Q0FBaUI7Ozs7OzswQkFHakIsMENBQWM7Ozs7OzswQkFHZCwwQ0FBYzs7Ozs7OzBCQUdkLG9DQUFROzs7Ozs7MEJBR1IscUNBQVM7Ozs7OzswQkFHVCwrQ0FBbUI7Ozs7OzswQkFRbkIsK0JBQUc7Ozs7Ozs7Ozs7Ozt5QkEvdEJMO0VBc2lCb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBUFByb2R1Y3RPcHRpb25zIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGFsaWFzPzogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSUFQUHJvZHVjdHMgPSBJQVBQcm9kdWN0W10gJiB7XHJcbiAgLyoqXHJcbiAgICogR2V0IHByb2R1Y3QgYnkgSURcclxuICAgKi9cclxuICBieUlkOiB7IFtpZDogc3RyaW5nXTogSUFQUHJvZHVjdCB9O1xyXG4gIC8qKlxyXG4gICAqIEdldCBwcm9kdWN0IGJ5IGFsaWFzXHJcbiAgICovXHJcbiAgYnlBbGlhczogeyBbYWxpYXM6IHN0cmluZ106IElBUFByb2R1Y3QgfTtcclxuICAvKipcclxuICAgKiBSZW1vdmUgYWxsIHByb2R1Y3RzIChmb3IgdGVzdGluZyBvbmx5KS5cclxuICAgKi9cclxuICByZXNldDogKCkgPT4ge307XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBJQVBRdWVyeUNhbGxiYWNrID0gKChwcm9kdWN0OiBJQVBQcm9kdWN0KSA9PiB2b2lkKSB8ICgoZXJyb3I6IElBUEVycm9yKSA9PiB2b2lkKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFQUHJvZHVjdCB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgYWxpYXM/OiBzdHJpbmc7XHJcblxyXG4gIHR5cGU6IHN0cmluZztcclxuXHJcbiAgc3RhdGU6IHN0cmluZztcclxuXHJcbiAgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuXHJcbiAgcHJpY2VNaWNyb3M6IG51bWJlcjtcclxuXHJcbiAgcHJpY2U6IHN0cmluZztcclxuXHJcbiAgY3VycmVuY3k6IHN0cmluZztcclxuXHJcbiAgbG9hZGVkOiBib29sZWFuO1xyXG5cclxuICB2YWxpZDogYm9vbGVhbjtcclxuXHJcbiAgY2FuUHVyY2hhc2U6IGJvb2xlYW47XHJcblxyXG4gIG93bmVkOiBib29sZWFuO1xyXG5cclxuICBkb3dubG9hZGluZz86IGJvb2xlYW47XHJcblxyXG4gIGRvd25sb2FkZWQ/OiBib29sZWFuO1xyXG5cclxuICBsYXN0UmVuZXdhbERhdGU/OiBEYXRlO1xyXG5cclxuICBleHBpcnlEYXRlPzogRGF0ZTtcclxuXHJcbiAgaW50cm9QcmljZT86IHN0cmluZztcclxuXHJcbiAgaW50cm9QcmljZU1pY3Jvcz86IG51bWJlcjtcclxuXHJcbiAgaW50cm9QcmljZU51bWJlck9mUGVyaW9kcz86IG51bWJlcjtcclxuXHJcbiAgaW50cm9QcmljZVN1YnNjcmlwdGlvblBlcmlvZD86IHN0cmluZztcclxuXHJcbiAgaW50cm9QcmljZVBheW1lbnRNb2RlPzogc3RyaW5nO1xyXG5cclxuICBpbmVsaWdpYmxlRm9ySW50cm9QcmljZT86IGJvb2xlYW47XHJcblxyXG4gIGJpbGxpbmdQZXJpb2Q/OiBudW1iZXI7XHJcblxyXG4gIGJpbGxpbmdQZXJpb2RVbml0Pzogc3RyaW5nO1xyXG5cclxuICB0cmlhbFBlcmlvZD86IG51bWJlcjtcclxuXHJcbiAgdHJpYWxQZXJpb2RVbml0Pzogc3RyaW5nO1xyXG5cclxuICBhZGRpdGlvbmFsRGF0YT86IGFueTtcclxuXHJcbiAgdHJhbnNhY3Rpb24/OiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGwgYHByb2R1Y3QuZmluaXNoKClgIHRvIGNvbmZpcm0gdG8gdGhlIHN0b3JlIHRoYXQgYW4gYXBwcm92ZWQgb3JkZXIgaGFzIGJlZW4gZGVsaXZlcmVkLlxyXG4gICAqXHJcbiAgICogVGhpcyB3aWxsIGNoYW5nZSB0aGUgcHJvZHVjdCBzdGF0ZSBmcm9tIGBBUFBST1ZFRGAgdG8gYEZJTklTSEVEYCAoc2VlIHByb2R1Y3QgbGlmZS1jeWNsZSkuXHJcbiAgICpcclxuICAgKiBBcyBsb25nIGFzIHlvdSBrZWVwIHRoZSBwcm9kdWN0IGluIHN0YXRlIGBBUFBST1ZFRGA6XHJcbiAgICpcclxuICAgKiAgLSB0aGUgbW9uZXkgbWF5IG5vdCBiZSBpbiB5b3VyIGFjY291bnQgKGkuZS4gdXNlciBpc24ndCBjaGFyZ2VkKVxyXG4gICAqICAtIHlvdSB3aWxsIHJlY2VpdmUgdGhlIGBhcHByb3ZlZGAgZXZlbnQgZWFjaCB0aW1lIHRoZSBhcHBsaWNhdGlvbiBzdGFydHMsXHJcbiAgICogICAgd2hlcmUgeW91IHNob3VsZCB0cnkgYWdhaW4gdG8gZmluaXNoIHRoZSBwZW5kaW5nIHRyYW5zYWN0aW9uLlxyXG4gICAqXHJcbiAgICogKipleGFtcGxlIHVzZSoqXHJcbiAgICpcclxuICAgKiBgYGBqc1xyXG4gICAqIHN0b3JlLndoZW4oXCJwcm9kdWN0LmlkXCIpLmFwcHJvdmVkKGZ1bmN0aW9uKHByb2R1Y3Qpe1xyXG4gICAqICAgICAvLyBzeW5jaHJvbm91c1xyXG4gICAqICAgICBhcHAudW5sb2NrRmVhdHVyZSgpO1xyXG4gICAqICAgICBwcm9kdWN0LmZpbmlzaCgpO1xyXG4gICAqIH0pO1xyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogYGBganNcclxuICAgKiBzdG9yZS53aGVuKFwicHJvZHVjdC5pZFwiKS5hcHByb3ZlZChmdW5jdGlvbihwcm9kdWN0KXtcclxuICAgKiAgICAgLy8gYXN5bmNocm9ub3VzXHJcbiAgICogICAgIGFwcC5kb3dubG9hZEZlYXR1cmUoZnVuY3Rpb24oKSB7XHJcbiAgICogICAgICAgICBwcm9kdWN0LmZpbmlzaCgpO1xyXG4gICAqICAgICB9KTtcclxuICAgKiB9KTtcclxuICAgKiBgYGBcclxuICAgKi9cclxuICBmaW5pc2goKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhdGUgcHVyY2hhc2UgdmFsaWRhdGlvbiBhcyBkZWZpbmVkIGJ5IHRoZSBgc3RvcmUudmFsaWRhdG9yYCBhdHRyaWJ1dGUuXHJcbiAgICpcclxuICAgKiAqKnJldHVybiB2YWx1ZSoqXHJcbiAgICpcclxuICAgKiBBIFByb21pc2Ugd2l0aCB0aGUgZm9sbG93aW5nIG1ldGhvZHM6XHJcbiAgICpcclxuICAgKiAgLSBgZG9uZShmdW5jdGlvbihwcm9kdWN0KXt9KWBcclxuICAgKiAgICAtIGNhbGxlZCB3aGV0aGVyIHZlcmlmaWNhdGlvbiBmYWlsZWQgb3Igc3VjY2VlZGVkLlxyXG4gICAqICAtIGBleHBpcmVkKGZ1bmN0aW9uKHByb2R1Y3Qpe30pYFxyXG4gICAqICAgIC0gY2FsbGVkIGlmIHRoZSBwdXJjaGFzZSBleHBpcmVkLlxyXG4gICAqICAtIGBzdWNjZXNzKGZ1bmN0aW9uKHByb2R1Y3QsIHB1cmNoYXNlRGF0YSl7fSlgXHJcbiAgICogICAgLSBjYWxsZWQgaWYgdGhlIHB1cmNoYXNlIGlzIHZhbGlkIGFuZCB2ZXJpZmllZC5cclxuICAgKiAgICAtIGBwdXJjaGFzZURhdGFgIGlzIHRoZSBkZXZpY2UgZGVwZW5kZW50IHRyYW5zYWN0aW9uIGRldGFpbHNcclxuICAgKiAgICAgIHJldHVybmVkIGJ5IHRoZSB2YWxpZGF0b3IsIHdoaWNoIHlvdSBjYW4gbW9zdCBwcm9iYWJseSBpZ25vcmUuXHJcbiAgICogIC0gYGVycm9yKGZ1bmN0aW9uKGVycil7fSlgXHJcbiAgICogICAgLSB2YWxpZGF0aW9uIGZhaWxlZCwgZWl0aGVyIGJlY2F1c2Ugb2YgZXhwaXJ5IG9yIGNvbW11bmljYXRpb25cclxuICAgKiAgICAgIGZhaWx1cmUuXHJcbiAgICogICAgLSBgZXJyYCBpcyBhIHN0b3JlLkVycm9yIG9iamVjdCwgd2l0aCBhIGNvZGUgZXhwZWN0ZWQgdG8gYmVcclxuICAgKiAgICAgIGBzdG9yZS5FUlJfUEFZTUVOVF9FWFBJUkVEYCBvciBgc3RvcmUuRVJSX1ZFUklGSUNBVElPTl9GQUlMRURgLlxyXG4gICAqL1xyXG4gIHZlcmlmeSgpOiBhbnk7XHJcblxyXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQ7XHJcblxyXG4gIHN0YXRlQ2hhbmdlZCgpOiB2b2lkO1xyXG5cclxuICBvbihldmVudDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkO1xyXG5cclxuICBvbmNlKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQ7XHJcblxyXG4gIG9mZihjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkO1xyXG5cclxuICB0cmlnZ2VyKGFjdGlvbjogc3RyaW5nLCBhcmdzOiBhbnkpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBUFByb2R1Y3RFdmVudHMge1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBwcm9kdWN0IGRhdGEgaXMgbG9hZGVkIGZyb20gdGhlIHN0b3JlLiAqL1xyXG4gIGxvYWRlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBhbnkgY2hhbmdlIG9jY3VyZWQgdG8gYSBwcm9kdWN0LiAqL1xyXG4gIHVwZGF0ZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gYW4gb3JkZXIgZmFpbGVkLiBUaGUgYGVycmAgcGFyYW1ldGVyIGlzIGFuIElBUEVycm9yIG9iamVjdC4gKi9cclxuICBlcnJvcjogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBhIHByb2R1Y3Qgb3JkZXIgaXMgYXBwcm92ZWQuICovXHJcbiAgYXBwcm92ZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gYSBub24tY29uc3VtYWJsZSBwcm9kdWN0IG9yIHN1YnNjcmlwdGlvbiBpcyBvd25lZC4gKi9cclxuICBvd25lZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBhIHByb2R1Y3Qgb3JkZXIgaXMgY2FuY2VsbGVkIGJ5IHRoZSB1c2VyLiAqL1xyXG4gIGNhbmNlbGxlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBhbiBvcmRlciBpcyByZWZ1bmRlZCBieSB0aGUgdXNlci4gKi9cclxuICByZWZ1bmRlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBwcm9kdWN0IGhhcyBqdXN0IGJlZW4gcmVnaXN0ZXJlZC4gKi9cclxuICByZWdpc3RlcmVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIHRoZSBwcm9kdWN0IGRldGFpbHMgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSBsb2FkZWQuICovXHJcbiAgdmFsaWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gdGhlIHByb2R1Y3QgY2Fubm90IGJlIGxvYWRlZCBmcm9tIHRoZSBzdG9yZS4gKi9cclxuICBpbnZhbGlkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIGFuIG9yZGVyIGhhcyBqdXN0IGJlZW4gcmVxdWVzdGVkLiAqL1xyXG4gIHJlcXVlc3RlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiB0aGUgcHVyY2hhc2UgcHJvY2VzcyBoYXMgYmVlbiBpbml0aWF0ZWQuICovXHJcbiAgaW5pdGlhdGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIHRoZSBwdXJjaGFzZSBwcm9jZXNzIGhhcyBjb21wbGV0ZWQuICovXHJcbiAgZmluaXNoZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gcmVjZWlwdCB2YWxpZGF0aW9uIHN1Y2Nlc3NmdWwuICovXHJcbiAgdmVyaWZpZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gcmVjZWlwdCB2ZXJpZmljYXRpb24gZmFpbGVkLiAqL1xyXG4gIHVudmVyaWZpZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gdmFsaWRhdGlvbiBmaW5kIGEgc3Vic2NyaXB0aW9uIHRvIGJlIGV4cGlyZWQuICovXHJcbiAgZXhwaXJlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBjb250ZW50IGRvd25sb2FkIGlzIHN0YXJ0ZWQuICovXHJcbiAgZG93bmxvYWRpbmc6IChwcm9kdWN0OiBJQVBQcm9kdWN0LCBwcm9ncmVzczogYW55LCB0aW1lX3JlbWFpbmluZzogYW55KSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBjb250ZW50IGRvd25sb2FkIGhhcyBzdWNjZXNzZnVsbHkgY29tcGxldGVkLiAqL1xyXG4gIGRvd25sb2FkZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJQVBFcnJvciB7XHJcbiAgY29kZTogbnVtYmVyO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEluIEFwcCBQdXJjaGFzZSAyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBJbi1BcHAgUHVyY2hhc2Ugb24gaU9TLCBBbmRyb2lkLCBXaW5kb3dzLCBtYWNPUyBhbmQgWEJveC5cclxuICpcclxuICogIyMgRmVhdHVyZXNcclxuICpcclxuICogfCAgfCBpb3MgfCBhbmRyb2lkIHwgd2luLTggfCB3aW4tMTAvdXdwIHwgbWFjIHxcclxuICogfC0tfC0tfC0tfC0tfC0tfC0tfFxyXG4gKiB8IGNvbnN1bWFibGVzIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHxcclxuICogfCBub24gY29uc3VtYWJsZXMgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfFxyXG4gKiB8IHN1YnNjcmlwdGlvbnMgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfFxyXG4gKiB8IHJlc3RvcmUgcHVyY2hhc2VzIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHxcclxuICogfCByZWNlaXB0IHZhbGlkYXRpb25zIHwg4pyFIHwg4pyFIHwgIHwg4pyFIHwg4pyFIHxcclxuICogfCBkb3dubG9hZGFibGUgY29udGVudCB8IOKchSB8ICAgfCAgIHwgICB8IOKchSB8XHJcbiAqIHwgaW50cm9kdWN0b3J5IHByaWNlcyB8IOKchSB8IOKchSB8ICAgfCDinIUgfCDinIUgfFxyXG4gKlxyXG4gKiBTdXBwb3J0czpcclxuICpcclxuICogIC0gKippT1MqKiB2ZXJzaW9uIDcuMCBvciBoaWdoZXIuXHJcbiAqICAtICoqQW5kcm9pZCoqIHZlcnNpb24gMi4yIChBUEkgbGV2ZWwgOCkgb3IgaGlnaGVyXHJcbiAqICAgIC0gd2l0aCBHb29nbGUgUGxheSBjbGllbnQgdmVyc2lvbiAzLjkuMTYgb3IgaGlnaGVyXHJcbiAqICAtICoqV2luZG93cyoqIFN0b3JlL1Bob25lIDguMSBvciBoaWdoZXJcclxuICogIC0gKipXaW5kb3dzIDEwIE1vYmlsZSoqXHJcbiAqICAtICoqbWFjT1MqKiB2ZXJzaW9uIDEwXHJcbiAqICAtICoqWGJveCBPbmUqKlxyXG4gKiAgICAtIChhbmQgYW55IHBsYXRmb3JtIHN1cHBvcnRpbmcgTWljcm9zb2Z0J3MgVVdQKVxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBJbkFwcFB1cmNoYXNlMiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW4tYXBwLXB1cmNoYXNlLTIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHJpdmF0ZSBzdG9yZTogSW5BcHBQdXJjaGFzZTIpIHtcclxuICogICBwbGF0Zm9ybS5yZWFkeSgpLnRoZW4oKCkgPT4ge1xyXG4gKiAgICB0aGlzLnN0b3JlLnJlZ2lzdGVyKHtcclxuICogICAgICBpZDogXCJteV9wcm9kdWN0X2lkXCIsXHJcbiAqICAgICAgdHlwZTogdGhpcy5zdG9yZS5OT05fUkVORVdJTkdfU1VCU0NSSVBUSU9OLFxyXG4gKiAgICB9KTtcclxuICogICAgdGhpcy5zdG9yZS53aGVuKFwibXlfcHJvZHVjdF9pZFwiKVxyXG4gKiAgICAgIC5hcHByb3ZlZChwID0+IHAudmVyaWZ5KCkpXHJcbiAqICAgICAgLnZlcmlmaWVkKHAgPT4gcC5maW5pc2goKSk7XHJcbiAqICAgIHRoaXMuc3RvcmUucmVmcmVzaCgpO1xyXG4gKiAgIH0pO1xyXG4gKiB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLnN0b3JlLm9yZGVyKFwibXlfcHJvZHVjdF9pZFwiKTtcclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqICMjIEZ1bGwgZXhhbXBsZVxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqICAvLyBBZnRlciBwbGF0Zm9ybSByZWFkeVxyXG4gKiAgdGhpcy5zdG9yZS52ZXJib3NpdHkgPSB0aGlzLnN0b3JlLkRFQlVHO1xyXG4gKiAgdGhpcy5zdG9yZS5yZWdpc3Rlcih7XHJcbiAqICAgIGlkOiBcIm15X3Byb2R1Y3RfaWRcIixcclxuICogICAgdHlwZTogdGhpcy5zdG9yZS5QQUlEX1NVQlNDUklQVElPTixcclxuICogIH0pO1xyXG4gKlxyXG4gKiAgLy8gUmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBzcGVjaWZpYyBwcm9kdWN0XHJcbiAqICB0aGlzLnN0b3JlLndoZW4oXCJteV9wcm9kdWN0X2lkXCIpLnJlZ2lzdGVyZWQoIChwcm9kdWN0OiBJQVBQcm9kdWN0KSA9PiB7XHJcbiAqICAgIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkOiAnICsgSlNPTi5zdHJpbmdpZnkocHJvZHVjdCkpO1xyXG4gKiAgfSk7XHJcbiAqXHJcbiAqICAvLyBVcGRhdGVkXHJcbiAqICB0aGlzLnN0b3JlLndoZW4oXCJteV9wcm9kdWN0X2lkXCIpLnVwZGF0ZWQoIChwcm9kdWN0OiBJQVBQcm9kdWN0KSA9PiB7XHJcbiAqICAgIGNvbnNvbGUubG9nKCdVcGRhdGVkJyArIEpTT04uc3RyaW5naWZ5KHByb2R1Y3QpKTtcclxuICogIH0pO1xyXG4gKlxyXG4gKiAgLy8gVXNlciBjbG9zZWQgdGhlIG5hdGl2ZSBwdXJjaGFzZSBkaWFsb2dcclxuICogIHRoaXMuc3RvcmUud2hlbihcIm15X3Byb2R1Y3RfaWRcIikuY2FuY2VsbGVkKCAocHJvZHVjdCkgPT4ge1xyXG4gKiAgICAgIGNvbnNvbGUuZXJyb3IoJ1B1cmNoYXNlIHdhcyBDYW5jZWxsZWQnKTtcclxuICogIH0pO1xyXG4gKlxyXG4gKiAgLy8gVHJhY2sgYWxsIHN0b3JlIGVycm9yc1xyXG4gKiAgdGhpcy5zdG9yZS5lcnJvciggKGVycikgPT4ge1xyXG4gKiAgICBjb25zb2xlLmVycm9yKCdTdG9yZSBFcnJvciAnICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XHJcbiAqICB9KTtcclxuICpcclxuICogIC8vIFJ1biBzb21lIGNvZGUgb25seSB3aGVuIHRoZSBzdG9yZSBpcyByZWFkeSB0byBiZSB1c2VkXHJcbiAqICB0aGlzLnN0b3JlLnJlYWR5KCgpID0+ICB7XHJcbiAqICAgIGNvbnNvbGUubG9nKCdTdG9yZSBpcyByZWFkeScpO1xyXG4gKiAgICBjb25zb2xlLmxvZygnUHJvZHVjdHM6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3JlLnByb2R1Y3RzKSk7XHJcbiAqICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcmUuZ2V0KFwibXlfcHJvZHVjdF9pZFwiKSkpO1xyXG4gKiAgfSk7XHJcbiAqXHJcbiAqICAvLyBSZWZyZXNoIHRoZSBzdGF0dXMgb2YgaW4tYXBwIHByb2R1Y3RzXHJcbiAqICB0aGlzLnN0b3JlLnJlZnJlc2goKTtcclxuICpcclxuICogIC4uLlxyXG4gKlxyXG4gKiAgLy8gVG8gbWFrZSBhIHB1cmNoYXNlXHJcbiAqICB0aGlzLnN0b3JlLm9yZGVyKFwibXlfcHJvZHVjdF9pZFwiKTtcclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqICMjIFBoaWxvc29waHlcclxuICpcclxuICogVGhlIEFQSSBpcyBtb3N0bHkgZXZlbnRzIGJhc2VkLiBBcyBhIHVzZXIgb2YgdGhpcyBwbHVnaW4sXHJcbiAqIHlvdSB3aWxsIGhhdmUgdG8gcmVnaXN0ZXIgbGlzdGVuZXJzIHRvIGNoYW5nZXMgaGFwcGVuaW5nIHRvIHRoZSBwcm9kdWN0c1xyXG4gKiB5b3UgcmVnaXN0ZXIuXHJcbiAqXHJcbiAqIFRoZSBjb3JlIG9mIHRoZSBsaXN0ZW5pbmcgbWVjaGFuaXNtIGlzIHRoZSBgd2hlbigpYCBtZXRob2QuIEl0IGFsbG93cyB5b3UgdG9cclxuICogYmUgbm90aWZpZWQgb2YgY2hhbmdlcyB0byBvbmUgb3IgYSBzZXQgb2YgcHJvZHVjdHMgdXNpbmcgYSBxdWVyeSBtZWNoYW5pc206XHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogIHRoaXMuc3RvcmUud2hlbihcInByb2R1Y3RcIikudXBkYXRlZChyZWZyZXNoU2NyZWVuKTsgLy8gbWF0Y2ggYW55IHByb2R1Y3RcclxuICogIHRoaXMuc3RvcmUud2hlbihcImZ1bGxfdmVyc2lvblwiKS5vd25lZCh1bmxvY2tBcHApOyAvLyBtYXRjaCBhIHNwZWNpZmljIHByb2R1Y3RcclxuICogIHRoaXMuc3RvcmUud2hlbihcInN1YnNjcmlwdGlvblwiKS5hcHByb3ZlZChzZXJ2ZXJDaGVjayk7IC8vIG1hdGNoIGFsbCBzdWJzY3JpcHRpb25zXHJcbiAqICB0aGlzLnN0b3JlLndoZW4oXCJkb3dubG9hZGFibGUgY29udGVudFwiKS5kb3dubG9hZGVkKHNob3dDb250ZW50KTtcclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSBgdXBkYXRlZGAgZXZlbnQgaXMgZmlyZWQgd2hlbmV2ZXIgb25lIG9mIHRoZSBmaWVsZHMgb2YgYSBwcm9kdWN0IGlzXHJcbiAqIGNoYW5nZWQgKGl0cyBgb3duZWRgIHN0YXR1cyBmb3IgaW5zdGFuY2UpLlxyXG4gKlxyXG4gKiBUaGlzIGV2ZW50IHByb3ZpZGVzIGEgZ2VuZXJpYyB3YXkgdG8gdHJhY2sgdGhlIHN0YXR1c2VzIG9mIHlvdXIgcHVyY2hhc2VzLFxyXG4gKiB0byB1bmxvY2sgZmVhdHVyZXMgd2hlbiBuZWVkZWQgYW5kIHRvIHJlZnJlc2ggeW91ciB2aWV3cyBhY2NvcmRpbmdseS5cclxuICpcclxuICogIyMgUmVnaXN0ZXJpbmcgcHJvZHVjdHNcclxuICpcclxuICogVGhlIHN0b3JlIG5lZWRzIHRvIGtub3cgdGhlIHR5cGUgYW5kIGlkZW50aWZpZXJzIG9mIHlvdXIgcHJvZHVjdHMgYmVmb3JlIHlvdVxyXG4gKiBjYW4gdXNlIHRoZW0gaW4geW91ciBjb2RlLlxyXG4gKlxyXG4gKiBVc2UgYHN0b3JlLnJlZ2lzdGVyKClgIHRvIGRlZmluZSB0aGVtIGJlZm9yZSB5b3VyIGZpcnN0IGNhbGwgdG8gYHN0b3JlLnJlZnJlc2goKWAuXHJcbiAqXHJcbiAqIE9uY2UgcmVnaXN0ZXJlZCwgeW91IGNhbiB1c2UgYHN0b3JlLmdldCgpYCB0byByZXRyaWV2ZSBhbiBgSUFQUHJvZHVjdGAgb2JqZWN0LlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqICB0aGlzLnN0b3JlLnJlZ2lzdGVyKHtcclxuICogICAgaWQ6IFwibXlfY29uc3VtYWJsZTFcIixcclxuICogICAgdHlwZTogdGhpcy5zdG9yZS5DT05TVU1BQkxFXHJcbiAqICB9KTtcclxuICogIC4uLlxyXG4gKiAgY29uc3QgcCA9IHRoaXMuc3RvcmUuZ2V0KFwibXlfY29uc3VtYWJsZTFcIik7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUaGUgcHJvZHVjdCBgaWRgIGFuZCBgdHlwZWAgaGF2ZSB0byBtYXRjaCBwcm9kdWN0cyBkZWZpbmVkIGluIHlvdXJcclxuICogQXBwbGUsIEdvb2dsZSBvciBNaWNyb3NvZnQgZGV2ZWxvcGVyIGNvbnNvbGVzLlxyXG4gKlxyXG4gKiBMZWFybiBtb3JlIGFib3V0IGl0IFtmcm9tIHRoZSB3aWtpXShodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZS93aWtpKS5cclxuICpcclxuICogIyMgRGlzcGxheWluZyBwcm9kdWN0c1xyXG4gKlxyXG4gKiBSaWdodCBhZnRlciB5b3UgcmVnaXN0ZXJlZCB5b3VyIHByb2R1Y3RzLCBub3RoaW5nIG11Y2ggaXMga25vd24gYWJvdXQgdGhlbVxyXG4gKiBleGNlcHQgdGhlaXIgYGlkYCwgYHR5cGVgIGFuZCBhbiBvcHRpb25hbCBgYWxpYXNgLlxyXG4gKlxyXG4gKiBXaGVuIHlvdSBwZXJmb3JtIHRoZSBpbml0aWFsIGNhbGwgdG8gYHN0b3JlLnJlZnJlc2goKWAsIHRoZSBwbGF0Zm9ybXMnIHNlcnZlciB3aWxsXHJcbiAqIGJlIGNvbnRhY3RlZCB0byBsb2FkIGluZm9ybWF0aW9ucyBhYm91dCB0aGUgcmVnaXN0ZXJlZCBwcm9kdWN0czogaHVtYW5cclxuICogcmVhZGFibGUgYHRpdGxlYCBhbmQgYGRlc2NyaXB0aW9uYCwgYHByaWNlYCwgZXRjLlxyXG4gKlxyXG4gKiBUaGlzIGlzbid0IGFuIG9wdGlvbmFsIHN0ZXAsIHN0b3JlIG93bmVycyByZXF1aXJlIHlvdVxyXG4gKiB0byBkaXNwbGF5IGluZm9ybWF0aW9uIGFib3V0IGEgcHJvZHVjdCBleGFjdGx5IGFzIHJldHJpZXZlZCBmcm9tIHRoZWlyIHNlcnZlcjogbm9cclxuICogaGFyZC1jb2Rpbmcgb2YgcHJpY2UgYW5kIHRpdGxlIGFsbG93ZWQhIFRoaXMgaXMgYWxzbyBjb252ZW5pZW50IGZvciB5b3VcclxuICogYXMgeW91IGNhbiBjaGFuZ2UgdGhlIHByaWNlIG9mIHlvdXIgaXRlbXMga25vd2luZyB0aGF0IGl0J2xsIGJlIHJlZmxlY3RlZCBpbnN0YW50bHlcclxuICogb24geW91ciBjbGllbnRzJyBkZXZpY2VzLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgdGhlIGluZm9ybWF0aW9uIG1heSBub3QgYmUgYXZhaWxhYmxlIHdoZW4gdGhlIGZpcnN0IHZpZXcgdGhhdCBuZWVkc1xyXG4gKiB0aGVtIGFwcGVhcnMgb24gc2NyZWVuLiBGb3IgeW91LCB0aGUgYmVzdCBvcHRpb24gaXMgdG8gaGF2ZSB5b3VyIHZpZXcgbW9uaXRvclxyXG4gKiBjaGFuZ2VzIG1hZGUgdG8gdGhlIHByb2R1Y3QuXHJcbiAqXHJcbiAqICMjIFB1cmNoYXNpbmdcclxuICpcclxuICogIyMjIyBpbml0aWF0ZSBhIHB1cmNoYXNlXHJcbiAqXHJcbiAqIFB1cmNoYXNlcyBhcmUgaW5pdGlhdGVkIHVzaW5nIHRoZSBgc3RvcmUub3JkZXIoXCJzb21lX3Byb2R1Y3RfaWRcIilgIG1ldGhvZC5cclxuICpcclxuICogVGhlIHN0b3JlIHdpbGwgbWFuYWdlIHRoZSBpbnRlcm5hbCBwdXJjaGFzZSBmbG93LiBJdCdsbCBlbmQ6XHJcbiAqXHJcbiAqICAtIHdpdGggYW4gYGFwcHJvdmVkYCBldmVudC4gVGhlIHByb2R1Y3QgZW50ZXJzIHRoZSBgQVBQUk9WRURgIHN0YXRlLlxyXG4gKiAgLSB3aXRoIGEgYGNhbmNlbGxlZGAgZXZlbnQuIFRoZSBwcm9kdWN0IGdldHMgYmFjayB0byB0aGUgYFZBTElEYCBzdGF0ZS5cclxuICogIC0gd2l0aCBhbiBgZXJyb3JgIGV2ZW50LiBUaGUgcHJvZHVjdCBnZXRzIGJhY2sgdG8gdGhlIGBWQUxJRGAgc3RhdGUuXHJcbiAqXHJcbiAqIFNlZSB0aGUgcHJvZHVjdCBsaWZlLWN5Y2xlIHNlY3Rpb24gZm9yIGRldGFpbHMgYWJvdXQgcHJvZHVjdCBzdGF0ZXMuXHJcbiAqXHJcbiAqICMjIyMgZmluaXNoIGEgcHVyY2hhc2VcclxuICpcclxuICogT25jZSB0aGUgdHJhbnNhY3Rpb24gaXMgYXBwcm92ZWQsIHRoZSBwcm9kdWN0IHN0aWxsIGlzbid0IG93bmVkOiB0aGUgc3RvcmUgbmVlZHNcclxuICogY29uZmlybWF0aW9uIHRoYXQgdGhlIHB1cmNoYXNlIHdhcyBkZWxpdmVyZWQgYmVmb3JlIGNsb3NpbmcgdGhlIHRyYW5zYWN0aW9uLlxyXG4gKlxyXG4gKiBUbyBjb25maXJtIGRlbGl2ZXJ5LCB5b3UnbGwgdXNlIHRoZSBgcHJvZHVjdC5maW5pc2goKWAgbWV0aG9kLlxyXG4gKlxyXG4gKiAjIyMjIGV4YW1wbGUgdXNhZ2VcclxuICpcclxuICogRHVyaW5nIGluaXRpYWxpemF0aW9uOlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHRoaXMuc3RvcmUud2hlbihcImV4dHJhX2NoYXB0ZXJcIikuYXBwcm92ZWQoKHByb2R1Y3Q6IElBUFByb2R1Y3QpID0+IHtcclxuICogICAvLyBkb3dubG9hZCB0aGUgZmVhdHVyZVxyXG4gKiAgIGFwcC5kb3dubG9hZEV4dHJhQ2hhcHRlcigpXHJcbiAqICAgLnRoZW4oKCkgPT4gcHJvZHVjdC5maW5pc2goKSk7XHJcbiAqIH0pO1xyXG4gKiBgYGBcclxuICpcclxuICogV2hlbiB0aGUgcHVyY2hhc2UgYnV0dG9uIGlzIGNsaWNrZWQ6XHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdGhpcy5zdG9yZS5vcmRlcihcImV4dHJhX2NoYXB0ZXJcIik7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMjIHVuLWZpbmlzaGVkIHB1cmNoYXNlc1xyXG4gKlxyXG4gKiBJZiB5b3VyIGFwcCB3YXNuJ3QgYWJsZSB0byBkZWxpdmVyIHRoZSBjb250ZW50LCBgcHJvZHVjdC5maW5pc2goKWAgd29uJ3QgYmUgY2FsbGVkLlxyXG4gKlxyXG4gKiBEb24ndCB3b3JyeTogdGhlIGBhcHByb3ZlZGAgZXZlbnQgd2lsbCBiZSByZS10cmlnZ2VyZWQgdGhlIG5leHQgdGltZSB5b3VcclxuICogY2FsbCBgc3RvcmUucmVmcmVzaCgpYCwgd2hpY2ggY2FuIHZlcnkgd2VsbCBiZSB0aGUgbmV4dCB0aW1lXHJcbiAqIHRoZSBhcHBsaWNhdGlvbiBzdGFydHMuIFBlbmRpbmcgdHJhbnNhY3Rpb25zIGFyZSBwZXJzaXN0YW50LlxyXG4gKlxyXG4gKiAjIyMjIHNpbXBsZSBjYXNlXHJcbiAqXHJcbiAqIEluIHRoZSBtb3N0IHNpbXBsZSBjYXNlLCB3aGVyZTpcclxuICpcclxuICogIC0gZGVsaXZlcnkgb2YgcHVyY2hhc2VzIGlzIG9ubHkgbG9jYWwgO1xyXG4gKiAgLSB5b3UgZG9uJ3Qgd2FudCAob3IgbmVlZCkgdG8gaW1wbGVtZW50IHJlY2VpcHQgdmFsaWRhdGlvbiA7XHJcbiAqXHJcbiAqIFlvdSBtYXkganVzdCB3YW50IHRvIGZpbmlzaCBhbGwgcHVyY2hhc2VzIGF1dG9tYXRpY2FsbHkuIFlvdSBjYW4gZG8gaXQgdGhpcyB3YXk6XHJcbiAqIGBgYGpzXHJcbiAqIHRoaXMuc3RvcmUud2hlbihcInByb2R1Y3RcIikuYXBwcm92ZWQoKHA6IElBUFByb2R1Y3QpID0+IHAuZmluaXNoKCkpO1xyXG4gKiBgYGBcclxuICpcclxuICogTk9URTogdGhlIFwicHJvZHVjdFwiIHF1ZXJ5IHdpbGwgbWF0Y2ggYW55IHB1cmNoYXNlcyAoc2VlIFwicXVlcmllc1wiIHRvIGxlYXJuIG1vcmUgZGV0YWlscyBhYm91dCBxdWVyaWVzKS5cclxuICpcclxuICogIyMgUmVjZWlwdCB2YWxpZGF0aW9uXHJcbiAqXHJcbiAqIFRvIGdldCB0aGUgbW9zdCB1cC10by1kYXRlIGluZm9ybWF0aW9uIGFib3V0IHB1cmNoYXNlcyAoaW4gY2FzZSBhIHB1cmNoYXNlIGhhdmUgYmVlbiBjYW5jZWxlZCwgb3IgYSBzdWJzY3JpcHRpb24gcmVuZXdlZCksXHJcbiAqIHlvdSBzaG91bGQgaW1wbGVtZW50IHNlcnZlciBzaWRlIHJlY2VpcHQgdmFsaWRhdGlvbi5cclxuICpcclxuICogVGhpcyBhbHNvIHByb3RlY3RzIHlvdSBhZ2FpbnN0IGZha2UgXCJwdXJjaGFzZXNcIiwgbWFkZSBieSBzb21lIHVzZXJzIHVzaW5nXHJcbiAqIFwiZnJlZSBpbi1hcHAgcHVyY2hhc2VcIiBhcHBzIG9uIHRoZWlyIGRldmljZXMuXHJcbiAqXHJcbiAqIFdoZW4gYSBwdXJjaGFzZSBoYXMgYmVlbiBhcHByb3ZlZCBieSB0aGUgc3RvcmUsIGl0J3MgZW5yaWNoZWQgd2l0aFxyXG4gKiB0cmFuc2FjdGlvbiBpbmZvcm1hdGlvbiAoc2VlIGBwcm9kdWN0LnRyYW5zYWN0aW9uYCBhdHRyaWJ1dGUpLlxyXG4gKlxyXG4gKiBUbyB2ZXJpZnkgYSBwdXJjaGFzZSB5b3UnbGwgaGF2ZSB0byBkbyB0aHJlZSB0aGluZ3M6XHJcbiAqXHJcbiAqICAtIGNvbmZpZ3VyZSB0aGUgdmFsaWRhdG9yLlxyXG4gKiAgLSBjYWxsIGBwcm9kdWN0LnZlcmlmeSgpYCBmcm9tIHRoZSBgYXBwcm92ZWRgIGV2ZW50LCBiZWZvcmUgZmluaXNoaW5nIHRoZSB0cmFuc2FjdGlvbi5cclxuICogIC0gZmluaXNoIHRoZSB0cmFuc2FjdGlvbiB3aGVuIHRyYW5zYWN0aW9uIGlzIGB2ZXJpZmllZGAuXHJcbiAqXHJcbiAqICoqU2hhbWVsZXNzIFBsdWcqKjogdGhpcyBpcyBhIGZlYXR1cmUgbWFueSB1c2VycyBzdHJ1Z2dsZSB3aXRoLCBzbyBhcyB0aGUgYXV0aG9yIG9mIHRoaXMgcGx1Z2luLCB3ZSBjYW4gcHJvdmlkZSBpdCB0byB5b3UgYXMtYS1zZXJ2aWNlOiBodHRwczovL2JpbGxpbmcuZm92ZWEuY2MvXHJcbiAqICh3aGljaCBpcyBmcmVlIHVudGlsIHlvdSBzdGFydCBtYWtpbmcgc2VyaW91cyBtb25leSlcclxuICpcclxuICogIyMjIyBleGFtcGxlIHVzaW5nIGEgdmFsaWRhdGlvbiBVUkxcclxuICpcclxuICogYGBganNcclxuICogdGhpcy5zdG9yZS52YWxpZGF0b3IgPSBcImh0dHBzOi8vYmlsbGluZy5mb3ZlYS5jYy9cIjtcclxuICpcclxuICogdGhpcy5zdG9yZS53aGVuKFwibXkgc3R1ZmZcIilcclxuICogICAuYXBwcm92ZWQoKHA6IElBUFByb2R1Y3QpID0+IHAudmVyaWZ5KCkpXHJcbiAqICAgLnZlcmlmaWVkKChwOiBJQVBQcm9kdWN0KSA9PiBwLmZpbmlzaCgpKTtcclxuICogYGBgXHJcbiAqXHJcbiAqICMjIFN1YnNjcmlwdGlvbnNcclxuICpcclxuICogRm9yIHN1YnNjcmlwdGlvbiwgeW91IE1VU1QgaW1wbGVtZW50IHJlbW90ZSByZWNlaXB0IHZhbGlkYXRpb24uXHJcbiAqXHJcbiAqIFdoZW4gdGhlIHJlY2VpcHQgdmFsaWRhdG9yIHJldHVybnMgYSBgc3RvcmUuUFVSQ0hBU0VfRVhQSVJFRGAgZXJyb3IgY29kZSwgdGhlIHN1YnNjcmlwdGlvbiB3aWxsXHJcbiAqIGF1dG9tYXRpY2FsbHkgbG9vc2UgaXRzIGBvd25lZGAgc3RhdHVzLlxyXG4gKlxyXG4gKiBUeXBpY2FsbHksIHlvdSdsbCBlbmFibGUgYW5kIGRpc2FibGUgYWNjZXNzIHRvIHlvdXIgY29udGVudCB0aGlzIHdheS5cclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB0aGlzLnN0b3JlLndoZW4oXCJteV9zdWJjcmlwdGlvblwiKS51cGRhdGVkKChwcm9kdWN0OiBJQVBQcm9kdWN0KSA9PiB7XHJcbiAqICAgaWYgKHByb2R1Y3Qub3duZWQpXHJcbiAqICAgICBhcHAuc3Vic2NyaWJlck1vZGUoKTtcclxuICogICBlbHNlXHJcbiAqICAgICBhcHAuZ3Vlc3RNb2RlKCk7XHJcbiAqIH0pO1xyXG4gKiBgYGBcclxuICpcclxuICogIyMgUHJvZHVjdCBsaWZlLWN5Y2xlXHJcbiAqXHJcbiAqIEEgcHJvZHVjdCB3aWxsIGNoYW5nZSBzdGF0ZSBkdXJpbmcgdGhlIGFwcGxpY2F0aW9uIGV4ZWN1dGlvbi5cclxuICpcclxuICogRmluZCBiZWxvdyBhIGRpYWdyYW0gb2YgdGhlIGRpZmZlcmVudCBzdGF0ZXMgYSBwcm9kdWN0IGNhbiBwYXNzIGJ5LlxyXG4gKlxyXG4gKiBgYGBcclxuICogUkVHSVNURVJFRCArLS0+IElOVkFMSURcclxuICogICAgICAgICAgICB8XHJcbiAqICAgICAgICAgICAgKy0tPiBWQUxJRCArLS0+IFJFUVVFU1RFRCArLS0+IElOSVRJQVRFRCArLStcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgICAgICAgICAgICAgICAgXiAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXHJcbiAqICAgICAgICAgICAgICAgICB8ICAgICAgfFxyXG4gKiAgICAgICAgICAgICAgICAgfCAgICAgIHwgICAgICAgICAgICAgKy0tPiBET1dOTE9BRElORyArLS0+IERPV05MT0FERUQgK1xyXG4gKiAgICAgICAgICAgICAgICAgfCAgICAgIHwgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgICAgICAgICAgICAgICAgfCAgICAgICstLT4gQVBQUk9WRUQgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tPiBGSU5JU0hFRCArLS0+IE9XTkVEXHJcbiAqICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogICAgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xyXG4gKlxyXG4gKiAjIyMjIE5vdGVzXHJcbiAqXHJcbiAqICAtIFdoZW4gZmluaXNoZWQsIGEgY29uc3VtYWJsZSBwcm9kdWN0IHdpbGwgZ2V0IGJhY2sgdG8gdGhlIGBWQUxJRGAgc3RhdGUsIHdoaWxlIG90aGVyIHdpbGwgZW50ZXIgdGhlIGBPV05FRGAgc3RhdGUuXHJcbiAqICAtIEFueSBlcnJvciBpbiB0aGUgcHVyY2hhc2UgcHJvY2VzcyB3aWxsIGJyaW5nIGEgcHJvZHVjdCBiYWNrIHRvIHRoZSBgVkFMSURgIHN0YXRlLlxyXG4gKiAgLSBEdXJpbmcgYXBwbGljYXRpb24gc3RhcnR1cCwgcHJvZHVjdHMgbWF5IGdvIGluc3RhbnRseSBmcm9tIGBSRUdJU1RFUkVEYCB0byBgQVBQUk9WRURgIG9yIGBPV05FRGAsIGZvciBleGFtcGxlIGlmIHRoZXkgYXJlIHB1cmNoYXNlZCBub24tY29uc3VtYWJsZXMgb3Igbm9uLWV4cGlyZWQgc3Vic2NyaXB0aW9ucy5cclxuICogIC0gTm9uLVJlbmV3aW5nIFN1YnNjcmlwdGlvbnMgYXJlIGlPUyBwcm9kdWN0cyBvbmx5LiBQbGVhc2Ugc2VlIHRoZSBbaU9TIE5vbiBSZW5ld2luZyBTdWJzY3JpcHRpb25zIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL2Jsb2IvbWFzdGVyL2RvYy9pb3MubWQjbm9uLXJlbmV3aW5nKSBmb3IgYSBkZXRhaWxlZCBleHBsYW5hdGlvbi5cclxuICpcclxuICogIyMgZXZlbnRzXHJcbiAqXHJcbiAqICAtIGBsb2FkZWQoSUFQUHJvZHVjdClgXHJcbiAqICAgIC0gQ2FsbGVkIHdoZW4gcHJvZHVjdCBkYXRhIGlzIGxvYWRlZCBmcm9tIHRoZSBzdG9yZS5cclxuICogIC0gYHVwZGF0ZWQoSUFQUHJvZHVjdClgXHJcbiAqICAgIC0gQ2FsbGVkIHdoZW4gYW55IGNoYW5nZSBvY2N1cmVkIHRvIGEgcHJvZHVjdC5cclxuICogIC0gYGVycm9yKGVycilgXHJcbiAqICAgIC0gQ2FsbGVkIHdoZW4gYW4gb3JkZXIgZmFpbGVkLlxyXG4gKiAgICAtIFRoZSBgZXJyYCBwYXJhbWV0ZXIgaXMgYW4gZXJyb3Igb2JqZWN0XHJcbiAqICAtIGBhcHByb3ZlZChJQVBQcm9kdWN0KWBcclxuICogICAgLSBDYWxsZWQgd2hlbiBhIHByb2R1Y3Qgb3JkZXIgaXMgYXBwcm92ZWQuXHJcbiAqICAtIGBvd25lZChJQVBQcm9kdWN0KWBcclxuICogICAgLSBDYWxsZWQgd2hlbiBhIG5vbi1jb25zdW1hYmxlIHByb2R1Y3Qgb3Igc3Vic2NyaXB0aW9uIGlzIG93bmVkLlxyXG4gKiAgLSBgY2FuY2VsbGVkKElBUFByb2R1Y3QpYFxyXG4gKiAgICAtIENhbGxlZCB3aGVuIGEgcHJvZHVjdCBvcmRlciBpcyBjYW5jZWxsZWQgYnkgdGhlIHVzZXIuXHJcbiAqICAtIGByZWZ1bmRlZChJQVBQcm9kdWN0KWBcclxuICogICAgLSBDYWxsZWQgd2hlbiBhbiBvcmRlciBpcyByZWZ1bmRlZCBieSB0aGUgdXNlci5cclxuICogIC0gQWN0dWFsbHksIGFsbCBvdGhlciBwcm9kdWN0IHN0YXRlcyBoYXZlIHRoZWlyIHByb21pc2VcclxuICogICAgLSBgcmVnaXN0ZXJlZGAsIGB2YWxpZGAsIGBpbnZhbGlkYCwgYHJlcXVlc3RlZGAsXHJcbiAqICAgICAgYGluaXRpYXRlZGAgYW5kIGBmaW5pc2hlZGBcclxuICogIC0gYHZlcmlmaWVkKElBUFByb2R1Y3QpYFxyXG4gKiAgICAtIENhbGxlZCB3aGVuIHJlY2VpcHQgdmFsaWRhdGlvbiBzdWNjZXNzZnVsXHJcbiAqICAtIGB1bnZlcmlmaWVkKElBUFByb2R1Y3QpYFxyXG4gKiAgICAtIENhbGxlZCB3aGVuIHJlY2VpcHQgdmVyaWZpY2F0aW9uIGZhaWxlZFxyXG4gKiAgLSBgZXhwaXJlZChJQVBQcm9kdWN0KWBcclxuICogICAgLSBDYWxsZWQgd2hlbiB2YWxpZGF0aW9uIGZpbmQgYSBzdWJzY3JpcHRpb24gdG8gYmUgZXhwaXJlZFxyXG4gKiAgLSBgZG93bmxvYWRpbmcoSUFQUHJvZHVjdCwgcHJvZ3Jlc3MsIHRpbWVfcmVtYWluaW5nKWBcclxuICogICAgLSBDYWxsZWQgd2hlbiBjb250ZW50IGRvd25sb2FkIGlzIHN0YXJ0ZWRcclxuICogIC0gYGRvd25sb2FkZWQoSUFQUHJvZHVjdClgXHJcbiAqICAgIC0gQ2FsbGVkIHdoZW4gY29udGVudCBkb3dubG9hZCBoYXMgc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZFxyXG4gKlxyXG4gKiAjIyBMZWFybiBNb3JlXHJcbiAqXHJcbiAqICAtIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlKVxyXG4gKiAgLSBbR2l0Qm9va10oaHR0cHM6Ly9wdXJjaGFzZS5jb3Jkb3ZhLmZvdmVhLmNjLylcclxuICogIC0gW1dpa2ldKGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL3dpa2kpXHJcbiAqICAtIFtBUEkgcmVmZXJlbmNlXShodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZS9ibG9iL21hc3Rlci9kb2MvYXBpLm1kKVxyXG4gKlxyXG4gKiAjIyBUZWNobmljYWwgU3VwcG9ydCBvciBRdWVzdGlvbnNcclxuICpcclxuICogSWYgeW91IGhhdmUgcXVlc3Rpb25zIG9yIG5lZWQgaGVscCBpbnRlZ3JhdGluZyBJbi1BcHAgUHVyY2hhc2UsIFtPcGVuIGFuIElzc3VlIG9uIEdpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UvaXNzdWVzKSBvciBlbWFpbCB1cyBhdCBfc3VwcG9ydEBmb3ZlYS5jY18uXHJcbiAqXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIElBUFByb2R1Y3RcclxuICogSUFQUHJvZHVjdE9wdGlvbnNcclxuICogSUFQUHJvZHVjdEV2ZW50c1xyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdJbkFwcFB1cmNoYXNlMicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcHVyY2hhc2UnLFxyXG4gIHBsdWdpblJlZjogJ3N0b3JlJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UnLFxyXG4gIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCcsICdXaW5kb3dzJ10sXHJcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZSAtLXZhcmlhYmxlIEJJTExJTkdfS0VZPVwiPEFORFJPSURfQklMTElOR19LRVk+XCInLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbkFwcFB1cmNoYXNlMiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBRVUlFVDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJPUjogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBXQVJOSU5HOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIElORk86IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgREVCVUc6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogRGVidWcgbGV2ZWwuIFVzZSBRVUlFVCwgRVJST1IsIFdBUk5JTkcsIElORk8gb3IgREVCVUcgY29uc3RhbnRzXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgdmVyYm9zaXR5OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0byB0cnVlIHRvIGNsZWFyIHRoZSB0cmFuc2FjdGlvbiBxdWV1ZS4gTm90IHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uLlxyXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL2Jsb2IvbWFzdGVyL2RvYy9hcGkubWQjcmFuZG9tLXRpcHNcclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBhdXRvRmluaXNoVHJhbnNhY3Rpb25zOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgdG8gdHJ1ZSB0byBpbnZva2UgdGhlIHBsYXRmb3JtIHB1cmNoYXNlIHNhbmRib3guIChXaW5kb3dzIG9ubHkpXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgc2FuZGJveDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBkb3dubG9hZGluZyBvZiBob3N0ZWQgY29udGVudC4gKEFwcGxlIG9ubHkpLlxyXG4gICAqIFVzZWZ1bCBpbiBkZXZlbG9wbWVudCBvciB3aGVuIG1pZ3JhdGluZyB5b3VyIGFwcCBhd2F5IGZyb20gQXBwbGUgSG9zdGVkIENvbnRlbnQuXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgZGlzYWJsZUhvc3RlZENvbnRlbnQ6IGJvb2xlYW47XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEZSRUVfU1VCU0NSSVBUSU9OOiBzdHJpbmc7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFBBSURfU1VCU0NSSVBUSU9OOiBzdHJpbmc7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE5PTl9SRU5FV0lOR19TVUJTQ1JJUFRJT046IHN0cmluZztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQ09OU1VNQUJMRTogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBOT05fQ09OU1VNQUJMRTogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfU0VUVVA6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX0xPQUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX1BVUkNIQVNFOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9MT0FEX1JFQ0VJUFRTOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9DTElFTlRfSU5WQUxJRDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfUEFZTUVOVF9DQU5DRUxMRUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX1BBWU1FTlRfSU5WQUxJRDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfUEFZTUVOVF9OT1RfQUxMT1dFRDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfVU5LTk9XTjogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfUkVGUkVTSF9SRUNFSVBUUzogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfSU5WQUxJRF9QUk9EVUNUX0lEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9GSU5JU0g6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX0NPTU1VTklDQVRJT046IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX1NVQlNDUklQVElPTlNfTk9UX0FWQUlMQUJMRTogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfTUlTU0lOR19UT0tFTjogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfVkVSSUZJQ0FUSU9OX0ZBSUxFRDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfQkFEX1JFU1BPTlNFOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9SRUZSRVNIOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9QQVlNRU5UX0VYUElSRUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX0RPV05MT0FEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9TVUJTQ1JJUFRJT05fVVBEQVRFX05PVF9BVkFJTEFCTEU6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUkVHSVNURVJFRDogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBJTlZBTElEOiBzdHJpbmc7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFZBTElEOiBzdHJpbmc7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFJFUVVFU1RFRDogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBJTklUSUFURUQ6IHN0cmluZztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQVBQUk9WRUQ6IHN0cmluZztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRklOSVNIRUQ6IHN0cmluZztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgT1dORUQ6IHN0cmluZztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRE9XTkxPQURJTkc6IHN0cmluZztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRE9XTkxPQURFRDogc3RyaW5nO1xyXG5cclxuICAvKiB2YWxpZGF0aW9uIGVycm9yIGNvZGVzICovXHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIElOVkFMSURfUEFZTE9BRDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBDT05ORUNUSU9OX0ZBSUxFRDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBQVVJDSEFTRV9FWFBJUkVEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFBVUkNIQVNFX0NPTlNVTUVEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIElOVEVSTkFMX0VSUk9SOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE5FRURfTU9SRV9EQVRBOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIHByb2R1Y3RzOiBJQVBQcm9kdWN0cztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgdmFsaWRhdG9yOiBzdHJpbmcgfCAoKHVybDogc3RyaW5nIHwgSUFQUHJvZHVjdCwgY2FsbGJhY2s6IEZ1bmN0aW9uKSA9PiB2b2lkKTtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgYXBwbGljYXRpb25Vc2VybmFtZTogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGdldEFwcGxpY2F0aW9uVXNlcm5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIGxvZzoge1xyXG4gICAgZXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICB3YXJuOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgaW5mbzogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGRlYnVnOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBwcm9kdWN0IGJ5IGlkIG9yIGFsaWFzXHJcbiAgICogQHBhcmFtIGlkT3JBbGlhc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGdldChpZE9yQWxpYXM6IHN0cmluZyk6IElBUFByb2R1Y3Qge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXIgZXJyb3IgaGFuZGxlclxyXG4gICAqIEBwYXJhbSBvbkVycm9yIHtGdW5jdGlvbn0gZnVuY3Rpb24gdG8gY2FsbCBvbiBlcnJvclxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGVycm9yKG9uRXJyb3I6IEZ1bmN0aW9uKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgb3IgcmVnaXN0ZXIgYSBwcm9kdWN0XHJcbiAgICogQHBhcmFtIHByb2R1Y3Qge0lBUFByb2R1Y3RPcHRpb25zfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHJlZ2lzdGVyKHByb2R1Y3Q6IElBUFByb2R1Y3RPcHRpb25zIHwgSUFQUHJvZHVjdE9wdGlvbnNbXSk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcXVlcnlcclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgKiBAcmV0dXJuIHtJQVBQcm9kdWN0RXZlbnRzfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHdoZW4ocXVlcnk6IHN0cmluZyB8IElBUFByb2R1Y3QsIGV2ZW50Pzogc3RyaW5nLCBjYWxsYmFjaz86IElBUFF1ZXJ5Q2FsbGJhY2spOiBJQVBQcm9kdWN0RXZlbnRzIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIElkZW50aWNhbCB0byBgd2hlbmAsIGJ1dCB0aGUgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgb25seSBvbmNlLiBBZnRlciBiZWluZyBjYWxsZWQsIHRoZSBjYWxsYmFjayB3aWxsIGJlIHVucmVnaXN0ZXJlZC5cclxuICAgKiBAcGFyYW0gcXVlcnkge3N0cmluZyB8IElBUFByb2R1Y3R9XHJcbiAgICogQHBhcmFtIFtldmVudF0ge2V2ZW50fVxyXG4gICAqIEBwYXJhbSBbY2FsbGJhY2tdIHtJQVBRdWVyeUNhbGxiYWNrfVxyXG4gICAqIEByZXR1cm4ge0lBUFByb2R1Y3RFdmVudHN9XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgb25jZShxdWVyeTogc3RyaW5nIHwgSUFQUHJvZHVjdCwgZXZlbnQ/OiBzdHJpbmcsIGNhbGxiYWNrPzogSUFQUXVlcnlDYWxsYmFjayk6IElBUFByb2R1Y3RFdmVudHMge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVW5yZWdpc3RlciBhIGNhbGxiYWNrLiBXb3JrcyBmb3IgY2FsbGJhY2tzIHJlZ2lzdGVyZWQgd2l0aCByZWFkeSwgd2hlbiwgb25jZSBhbmQgZXJyb3IuXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBvZmYoY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWF0ZSB0aGUgcHVyY2hhc2Ugb2YgYSBwcm9kdWN0LlxyXG4gICAqXHJcbiAgICogVGhlIGBwcm9kdWN0YCBhcmd1bWVudCBjYW4gYmUgZWl0aGVyOlxyXG4gICAqXHJcbiAgICogIC0gdGhlIGBJQVBQcm9kdWN0YCBvYmplY3RcclxuICAgKiAgLSB0aGUgcHJvZHVjdCBgaWRgXHJcbiAgICogIC0gdGhlIHByb2R1Y3QgYGFsaWFzYFxyXG4gICAqXHJcbiAgICogVGhlIGBhZGRpdGlvbmFsRGF0YWAgYXJndW1lbnQgaXMgYW4gb3B0aW9uYWwgb2JqZWN0IHdpdGggYXR0cmlidXRlczpcclxuICAgKiAgLSBgb2xkUHVyY2hhc2VkU2t1c2A6IGEgc3RyaW5nIGFycmF5IHdpdGggdGhlIG9sZCBzdWJzY3JpcHRpb24gdG8gdXBncmFkZS9kb3duZ3JhZGUgb24gQW5kcm9pZC4gU2VlOiBbYW5kcm9pZCBkZXZlbG9wZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL2dvb2dsZS9wbGF5L2JpbGxpbmcvYmlsbGluZ19yZWZlcmVuY2UuaHRtbCN1cGdyYWRlLWdldEJ1eUludGVudFRvUmVwbGFjZVNrdXMpIGZvciBtb3JlIGluZm9cclxuICAgKiAgLSBgZGV2ZWxvcGVyUGF5bG9hZGA6IHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGRldmVsb3BlciBwYXlsb2FkIGFzIGRlc2NyaWJlZCBpbiBbYmlsbGluZyBiZXN0IHByYWN0aWNlc10oaHR0cHM6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vZ29vZ2xlL3BsYXkvYmlsbGluZy9iaWxsaW5nX2Jlc3RfcHJhY3RpY2VzLmh0bWwpXHJcbiAgICogIC0gYGFwcGxpY2F0aW9uVXNlcm5hbWVgOiB0aGUgaWRlbnRpZmllciBvZiB0aGUgdXNlciBpbiB5b3VyIGFwcGxpY2F0aW9uLlxyXG4gICAqXHJcbiAgICogU2VlIHRoZSBcIlB1cmNoYXNpbmcgc2VjdGlvblwiIHRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIHB1cmNoYXNlIHByb2Nlc3MuXHJcbiAgICpcclxuICAgKiAqKnJldHVybiB2YWx1ZSoqXHJcbiAgICpcclxuICAgKiBgc3RvcmUub3JkZXIoKWAgcmV0dXJucyBhIFByb21pc2Ugd2l0aCB0aGUgZm9sbG93aW5nIG1ldGhvZHM6XHJcbiAgICpcclxuICAgKiAgLSBgdGhlbmAgLSBjYWxsZWQgd2hlbiB0aGUgb3JkZXIgd2FzIHN1Y2Nlc3NmdWxseSBpbml0aWF0ZWQuXHJcbiAgICogIC0gYGVycm9yYCAtIGNhbGxlZCBpZiB0aGUgb3JkZXIgY291bGRuJ3QgYmUgaW5pdGlhdGVkLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIG9yZGVyKHByb2R1Y3Q6IHN0cmluZyB8IElBUFByb2R1Y3QsIGFkZGl0aW9uYWxEYXRhPzogYW55KTogeyB0aGVuOiBGdW5jdGlvbjsgZXJyb3I6IEZ1bmN0aW9uIH0ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlYWR5KGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBBZnRlciB5b3UncmUgZG9uZSByZWdpc3RlcmluZyB5b3VyIHN0b3JlJ3MgcHJvZHVjdCBhbmQgZXZlbnRzIGhhbmRsZXJzLFxyXG4gICAqIHRpbWUgdG8gY2FsbCBgc3RvcmUucmVmcmVzaCgpYC5cclxuICAgKlxyXG4gICAqIFRoaXMgd2lsbCBpbml0aWF0ZSBhbGwgdGhlIGNvbXBsZXggYmVoaW5kLXRoZS1zY2VuZSB3b3JrLCB0byBsb2FkIHByb2R1Y3RcclxuICAgKiBkYXRhIGZyb20gdGhlIHNlcnZlcnMgYW5kIHJlc3RvcmUgd2hhdGV2ZXIgYWxyZWFkeSBoYXZlIGJlZW5cclxuICAgKiBwdXJjaGFzZWQgYnkgdGhlIHVzZXIuXHJcbiAgICpcclxuICAgKiBOb3RlIHRoYXQgeW91IGNhbiBjYWxsIHRoaXMgbWV0aG9kIGFnYWluIGxhdGVyIGR1cmluZyB0aGUgYXBwbGljYXRpb25cclxuICAgKiBleGVjdXRpb24gdG8gcmUtdHJpZ2dlciBhbGwgdGhhdCBoYXJkLXdvcmsuIEl0J3Mga2luZCBvZiBleHBlbnNpdmUgaW4gdGVybSBvZlxyXG4gICAqIHByb2Nlc3NpbmcsIHNvIHlvdSdkIGJldHRlciBjb25zaWRlciBpdCB0d2ljZS5cclxuICAgKlxyXG4gICAqIE9uZSBnb29kIHdheSBvZiBkb2luZyBpdCBpcyB0byBhZGQgYSBcIlJlZnJlc2ggUHVyY2hhc2VzXCIgYnV0dG9uIGluIHlvdXJcclxuICAgKiBhcHBsaWNhdGlvbnMgc2V0dGluZ3MuIFRoaXMgd2F5LCBpZiBkZWxpdmVyeSBvZiBhIHB1cmNoYXNlIGZhaWxlZCBvclxyXG4gICAqIGlmIGEgdXNlciB3YW50cyB0byByZXN0b3JlIHB1cmNoYXNlcyBoZSBtYWRlIGZyb20gYW5vdGhlciBkZXZpY2UsIGhlJ2xsXHJcbiAgICogaGF2ZSBhIHdheSB0byBkbyBqdXN0IHRoYXQuXHJcbiAgICpcclxuICAgKiAqKmV4YW1wbGUgdXNhZ2UqKlxyXG4gICAqXHJcbiAgICogYGBgdHlwZXNjcmlwdFxyXG4gICAqICAgIC8vIC4uLlxyXG4gICAqICAgIC8vIHJlZ2lzdGVyIHByb2R1Y3RzIGFuZCBldmVudHMgaGFuZGxlcnMgaGVyZVxyXG4gICAqICAgIC8vIC4uLlxyXG4gICAqICAgIC8vXHJcbiAgICogICAgLy8gdGhlbiBhbmQgb25seSB0aGVuLCBjYWxsIHJlZnJlc2guXHJcbiAgICogICAgdGhpcy5zdG9yZS5yZWZyZXNoKCk7XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiAqKnJlc3RvcmUgcHVyY2hhc2VzKipcclxuICAgKlxyXG4gICAqIEFkZCBhIFwiUmVmcmVzaCBQdXJjaGFzZXNcIiBidXR0b24gdG8gY2FsbCB0aGUgYHN0b3JlLnJlZnJlc2goKWAgbWV0aG9kLCBsaWtlOlxyXG4gICAqXHJcbiAgICogYDxidXR0b24gb25jbGljaz1cIjxwc2V1ZG9fY29kZT50aGlzLnN0b3JlLnJlZnJlc2goKTwvcHNldWRvX2NvZGU+XCI+UmVzdG9yZSBQdXJjaGFzZXM8L2J1dHRvbj5gXHJcbiAgICpcclxuICAgKiBUbyBtYWtlIHRoZSByZXN0b3JlIHB1cmNoYXNlcyB3b3JrIGFzIGV4cGVjdGVkLCBwbGVhc2UgbWFrZSBzdXJlIHRoYXRcclxuICAgKiB0aGUgXCJhcHByb3ZlZFwiIGV2ZW50IGxpc3RlbmVyIGhhZCBiZSByZWdpc3RlcmVkIHByb3Blcmx5LFxyXG4gICAqIGFuZCBpbiB0aGUgY2FsbGJhY2sgYHByb2R1Y3QuZmluaXNoKClgIHNob3VsZCBiZSBjYWxsZWQuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcmVmcmVzaCgpOiB2b2lkIHt9XHJcblxyXG4gIC8qKiBMaWdodHdlaWdodCBtZXRob2QgbGlrZSByZWZyZXNoIGJ1dCBkbyBub3QgcmVsb2dpbiB1c2VyICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdXBkYXRlKCk6IHZvaWQge31cclxuXHJcbiAgLyoqIE9wZW5zIHRoZSBNYW5hZ2UgU3Vic2NyaXB0aW9uIHBhZ2UgKEFwcFN0b3JlLCBQbGF5LCBNaWNyb3NvZnQsIC4uLikuICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgbWFuYWdlU3Vic2NyaXB0aW9ucygpOiB2b2lkIHt9XHJcbn1cclxuIl19