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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AdjustEvent = /** @class */ (function () {
    function AdjustEvent(eventToken) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.eventToken = eventToken;
    }
    AdjustEvent.prototype.setRevenue = function (revenue, currency) {
        this.revenue = revenue;
        this.currency = currency;
    };
    AdjustEvent.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustEvent.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    AdjustEvent.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
    };
    AdjustEvent.prototype.setCallbackId = function (callbackId) {
        this.callbackId = callbackId;
    };
    return AdjustEvent;
}());
export { AdjustEvent };
var AdjustConfig = /** @class */ (function () {
    function AdjustConfig(appToken, environment) {
        this.delayStart = 0.0;
        this.logLevel = null;
        this.defaultTracker = null;
        this.urlStrategy = null;
        this.externalDeviceId = null;
        this.sendInBackground = null;
        this.shouldLaunchDeeplink = null;
        this.eventBufferingEnabled = null;
        this.userAgent = null;
        this.isDeviceKnown = null;
        this.secretId = null;
        this.info1 = null;
        this.info2 = null;
        this.info3 = null;
        this.info4 = null;
        this.processName = null; // Android only
        this.allowiAdInfoReading = null; // iOS only
        this.allowIdfaReading = null; // iOS only
        this.attributionCallback = null;
        this.eventTrackingSucceededCallback = null;
        this.eventTrackingFailedCallback = null;
        this.sessionTrackingSucceededCallback = null;
        this.sessionTrackingFailedCallback = null;
        this.deferredDeeplinkCallback = null;
        this.appToken = appToken;
        this.environment = environment;
    }
    AdjustConfig.prototype.setAppSecret = function (secretId, info1, info2, info3, info4) {
        this.secretId = secretId;
        this.info1 = info1;
        this.info2 = info2;
        this.info3 = info3;
        this.info4 = info4;
    };
    AdjustConfig.prototype.setDelayStart = function (delayStart) {
        this.delayStart = delayStart;
    };
    AdjustConfig.prototype.setLogLevel = function (logLevel) {
        this.logLevel = logLevel;
    };
    AdjustConfig.prototype.setDefaultTracker = function (defaultTracker) {
        this.defaultTracker = defaultTracker;
    };
    AdjustConfig.prototype.setExternalDeviceId = function (externalDeviceId) {
        this.externalDeviceId = externalDeviceId;
    };
    AdjustConfig.prototype.setSendInBackground = function (sendInBackground) {
        this.sendInBackground = sendInBackground;
    };
    AdjustConfig.prototype.setShouldLaunchDeeplink = function (shouldLaunchDeeplink) {
        this.shouldLaunchDeeplink = shouldLaunchDeeplink;
    };
    AdjustConfig.prototype.setEventBufferingEnabled = function (eventBufferingEnabled) {
        this.eventBufferingEnabled = eventBufferingEnabled;
    };
    AdjustConfig.prototype.setUserAgent = function (userAgent) {
        this.userAgent = userAgent;
    };
    AdjustConfig.prototype.setDeviceKnown = function (isDeviceKnown) {
        this.isDeviceKnown = isDeviceKnown;
    };
    AdjustConfig.prototype.setProcessName = function (processName) {
        this.processName = processName;
    };
    AdjustConfig.prototype.setAllowiAdInfoReading = function (allowiAdInfoReading) {
        this.allowiAdInfoReading = allowiAdInfoReading;
    };
    AdjustConfig.prototype.setAllowIdfaReading = function (allowIdfaReading) {
        this.allowIdfaReading = allowIdfaReading;
    };
    AdjustConfig.prototype.setAttributionCallbackListener = function (attributionCallback) {
        this.attributionCallback = attributionCallback;
    };
    AdjustConfig.prototype.setEventTrackingSucceededCallbackListener = function (eventTrackingSucceededCallback) {
        this.eventTrackingSucceededCallback = eventTrackingSucceededCallback;
    };
    AdjustConfig.prototype.setEventTrackingFailedCallbackListener = function (eventTrackingFailedCallback) {
        this.eventTrackingFailedCallback = eventTrackingFailedCallback;
    };
    AdjustConfig.prototype.setSessionTrackingSucceededCallbackListener = function (sessionTrackingSucceededCallback) {
        this.sessionTrackingSucceededCallback = sessionTrackingSucceededCallback;
    };
    AdjustConfig.prototype.setSessionTrackingFailedCallbackListener = function (sessionTrackingFailedCallback) {
        this.sessionTrackingFailedCallback = sessionTrackingFailedCallback;
    };
    AdjustConfig.prototype.setDeferredDeeplinkCallbackListener = function (deferredDeeplinkCallback) {
        this.deferredDeeplinkCallback = deferredDeeplinkCallback;
    };
    AdjustConfig.prototype.getAttributionCallback = function () {
        return this.attributionCallback;
    };
    AdjustConfig.prototype.getEventTrackingSucceededCallback = function () {
        return this.eventTrackingSucceededCallback;
    };
    AdjustConfig.prototype.getEventTrackingFailedCallback = function () {
        return this.eventTrackingFailedCallback;
    };
    AdjustConfig.prototype.getSessionTrackingSucceededCallback = function () {
        return this.sessionTrackingSucceededCallback;
    };
    AdjustConfig.prototype.getSessionTrackingFailedCallback = function () {
        return this.sessionTrackingFailedCallback;
    };
    AdjustConfig.prototype.getDeferredDeeplinkCallback = function () {
        return this.deferredDeeplinkCallback;
    };
    AdjustConfig.prototype.hasAttributionListener = function () {
        return this.attributionCallback !== null;
    };
    AdjustConfig.prototype.hasEventTrackingSucceededListener = function () {
        return this.eventTrackingSucceededCallback !== null;
    };
    AdjustConfig.prototype.hasEventTrackingFailedListener = function () {
        return this.eventTrackingFailedCallback !== null;
    };
    AdjustConfig.prototype.hasSessionTrackingSucceededListener = function () {
        return this.sessionTrackingSucceededCallback !== null;
    };
    AdjustConfig.prototype.hasSessionTrackingFailedListener = function () {
        return this.sessionTrackingFailedCallback !== null;
    };
    AdjustConfig.prototype.hasDeferredDeeplinkCallbackListener = function () {
        return this.deferredDeeplinkCallback !== null;
    };
    return AdjustConfig;
}());
export { AdjustConfig };
var AdjustAppStoreSubscription = /** @class */ (function () {
    function AdjustAppStoreSubscription(price, currency, transactionId, receipt) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.price = price;
        this.currency = currency;
        this.transactionId = transactionId;
        this.receipt = receipt;
    }
    AdjustAppStoreSubscription.prototype.setTransactionDate = function (transactionDate) {
        this.transactionDate = transactionDate;
    };
    AdjustAppStoreSubscription.prototype.setSalesRegion = function (salesRegion) {
        this.salesRegion = salesRegion;
    };
    AdjustAppStoreSubscription.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustAppStoreSubscription.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    return AdjustAppStoreSubscription;
}());
export { AdjustAppStoreSubscription };
var AdjustPlayStoreSubscription = /** @class */ (function () {
    function AdjustPlayStoreSubscription(price, currency, sku, orderId, signature, purchaseToken) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.price = price;
        this.currency = currency;
        this.sku = sku;
        this.orderId = orderId;
        this.signature = signature;
        this.purchaseToken = purchaseToken;
    }
    AdjustPlayStoreSubscription.prototype.setPurchaseTime = function (purchaseTime) {
        this.purchaseTime = purchaseTime;
    };
    AdjustPlayStoreSubscription.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustPlayStoreSubscription.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    return AdjustPlayStoreSubscription;
}());
export { AdjustPlayStoreSubscription };
export var AdjustEnvironment;
(function (AdjustEnvironment) {
    AdjustEnvironment["Sandbox"] = "sandbox";
    AdjustEnvironment["Production"] = "production";
})(AdjustEnvironment || (AdjustEnvironment = {}));
export var AdjustLogLevel;
(function (AdjustLogLevel) {
    AdjustLogLevel["Verbose"] = "VERBOSE";
    AdjustLogLevel["Debug"] = "DEBUG";
    AdjustLogLevel["Info"] = "INFO";
    AdjustLogLevel["Warn"] = "WARN";
    AdjustLogLevel["Error"] = "ERROR";
    AdjustLogLevel["Assert"] = "ASSERT";
    AdjustLogLevel["Suppress"] = "SUPPRESS";
})(AdjustLogLevel || (AdjustLogLevel = {}));
var AdjustOriginal = /** @class */ (function (_super) {
    __extends(AdjustOriginal, _super);
    function AdjustOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdjustOriginal.prototype.create = function (config) { return cordova(this, "create", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackEvent = function (event) { return cordova(this, "trackEvent", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackAppStoreSubscription = function (subscription) { return cordova(this, "trackAppStoreSubscription", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackPlayStoreSubscription = function (subscription) { return cordova(this, "trackPlayStoreSubscription", { "sync": true }, arguments); };
    AdjustOriginal.prototype.setOfflineMode = function (enabled) { return cordova(this, "setOfflineMode", { "sync": true }, arguments); };
    AdjustOriginal.prototype.appWillOpenUrl = function (url) { return cordova(this, "appWillOpenUrl", { "sync": true }, arguments); };
    AdjustOriginal.prototype.setEnabled = function (enabled) { return cordova(this, "setEnabled", { "sync": true }, arguments); };
    AdjustOriginal.prototype.setPushToken = function (pushToken) { return cordova(this, "setPushToken", { "sync": true }, arguments); };
    AdjustOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AdjustOriginal.prototype.gdprForgetMe = function () { return cordova(this, "gdprForgetMe", { "sync": true }, arguments); };
    AdjustOriginal.prototype.disableThirdPartySharing = function () { return cordova(this, "disableThirdPartySharing", { "sync": true }, arguments); };
    AdjustOriginal.prototype.getGoogleAdId = function () { return cordova(this, "getGoogleAdId", {}, arguments); };
    AdjustOriginal.prototype.getAmazonAdId = function () { return cordova(this, "getAmazonAdId", {}, arguments); };
    AdjustOriginal.prototype.getIdfa = function () { return cordova(this, "getIdfa", {}, arguments); };
    AdjustOriginal.prototype.getAdid = function () { return cordova(this, "getAdid", {}, arguments); };
    AdjustOriginal.prototype.getAttribution = function () { return cordova(this, "getAttribution", {}, arguments); };
    AdjustOriginal.prototype.getSdkVersion = function () { return cordova(this, "getSdkVersion", {}, arguments); };
    AdjustOriginal.prototype.addSessionCallbackParameter = function (key, value) { return cordova(this, "addSessionCallbackParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.removeSessionCallbackParameter = function (key) { return cordova(this, "removeSessionCallbackParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.resetSessionCallbackParameters = function () { return cordova(this, "resetSessionCallbackParameters", { "sync": true }, arguments); };
    AdjustOriginal.prototype.addSessionPartnerParameter = function (key, value) { return cordova(this, "addSessionPartnerParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.removeSessionPartnerParameter = function (key) { return cordova(this, "removeSessionPartnerParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.resetSessionPartnerParameters = function () { return cordova(this, "resetSessionPartnerParameters", { "sync": true }, arguments); };
    AdjustOriginal.prototype.sendFirstPackages = function () { return cordova(this, "sendFirstPackages", { "sync": true }, arguments); };
    AdjustOriginal.prototype.requestTrackingAuthorizationWithCompletionHandler = function () { return cordova(this, "requestTrackingAuthorizationWithCompletionHandler", {}, arguments); };
    AdjustOriginal.pluginName = "Adjust";
    AdjustOriginal.plugin = "com.adjust.sdk";
    AdjustOriginal.pluginRef = "Adjust";
    AdjustOriginal.repo = "https://github.com/adjust/cordova_sdk";
    AdjustOriginal.platforms = ["Android", "iOS"];
    return AdjustOriginal;
}(IonicNativePlugin));
var Adjust = new AdjustOriginal();
export { Adjust };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FkanVzdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFXdEUscUJBQVksVUFBa0I7UUFIdEIsdUJBQWtCLEdBQWEsRUFBRSxDQUFDO1FBQ2xDLHNCQUFpQixHQUFhLEVBQUUsQ0FBQztRQUd2QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLE9BQWUsRUFBRSxRQUFnQjtRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsMENBQW9CLEdBQXBCLFVBQXFCLEdBQVcsRUFBRSxLQUFhO1FBQzdDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQseUNBQW1CLEdBQW5CLFVBQW9CLEdBQVcsRUFBRSxLQUFhO1FBQzVDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsc0NBQWdCLEdBQWhCLFVBQWlCLGFBQXFCO1FBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsVUFBa0I7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztzQkFyQ0g7Ozs7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NENBQTJCLGFBQUMsR0FBVyxFQUFFLEtBQWE7SUFPdEQsK0NBQThCLGFBQUMsR0FBVztJQU0xQywrQ0FBOEI7SUFROUIsMkNBQTBCLGFBQUMsR0FBVyxFQUFFLEtBQWE7SUFPckQsOENBQTZCLGFBQUMsR0FBVztJQU16Qyw4Q0FBNkI7SUFNN0Isa0NBQWlCO0lBUWpCLGtFQUFpRDs7Ozs7O2lCQTNqQm5EO0VBNlg0QixpQkFBaUI7U0FBaEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQWRqdXN0RXZlbnQge1xyXG4gIHByaXZhdGUgZXZlbnRUb2tlbjogc3RyaW5nO1xyXG4gIHByaXZhdGUgcmV2ZW51ZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcclxuICBwcml2YXRlIHRyYW5zYWN0aW9uSWQ6IHN0cmluZztcclxuICBwcml2YXRlIGNhbGxiYWNrSWQ6IHN0cmluZztcclxuICBwcml2YXRlIGNhbGxiYWNrUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIHBhcnRuZXJQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihldmVudFRva2VuOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZXZlbnRUb2tlbiA9IGV2ZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBzZXRSZXZlbnVlKHJldmVudWU6IG51bWJlciwgY3VycmVuY3k6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXZlbnVlID0gcmV2ZW51ZTtcclxuICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcclxuICB9XHJcblxyXG4gIGFkZENhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKGtleSk7XHJcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGFkZFBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaChrZXkpO1xyXG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNldFRyYW5zYWN0aW9uSWQodHJhbnNhY3Rpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRyYW5zYWN0aW9uSWQgPSB0cmFuc2FjdGlvbklkO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2FsbGJhY2tJZChjYWxsYmFja0lkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2FsbGJhY2tJZCA9IGNhbGxiYWNrSWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWRqdXN0Q29uZmlnIHtcclxuICBwcml2YXRlIGFwcFRva2VuOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBlbnZpcm9ubWVudDogQWRqdXN0RW52aXJvbm1lbnQ7XHJcbiAgcHJpdmF0ZSBzZGtQcmVmaXg6IHN0cmluZztcclxuICBwcml2YXRlIGRlbGF5U3RhcnQgPSAwLjA7XHJcbiAgcHJpdmF0ZSBsb2dMZXZlbDogQWRqdXN0TG9nTGV2ZWwgPSBudWxsO1xyXG4gIHByaXZhdGUgZGVmYXVsdFRyYWNrZXI6IHN0cmluZyA9IG51bGw7XHJcbiAgcHJpdmF0ZSB1cmxTdHJhdGVneTogc3RyaW5nID0gbnVsbDtcclxuICBwcml2YXRlIGV4dGVybmFsRGV2aWNlSWQ6IHN0cmluZyA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzZW5kSW5CYWNrZ3JvdW5kOiBib29sZWFuID0gbnVsbDtcclxuICBwcml2YXRlIHNob3VsZExhdW5jaERlZXBsaW5rOiBib29sZWFuID0gbnVsbDtcclxuICBwcml2YXRlIGV2ZW50QnVmZmVyaW5nRW5hYmxlZDogYm9vbGVhbiA9IG51bGw7XHJcbiAgcHJpdmF0ZSB1c2VyQWdlbnQ6IHN0cmluZyA9IG51bGw7XHJcbiAgcHJpdmF0ZSBpc0RldmljZUtub3duOiBib29sZWFuID0gbnVsbDtcclxuICBwcml2YXRlIHNlY3JldElkOiBudW1iZXIgPSBudWxsO1xyXG4gIHByaXZhdGUgaW5mbzE6IG51bWJlciA9IG51bGw7XHJcbiAgcHJpdmF0ZSBpbmZvMjogbnVtYmVyID0gbnVsbDtcclxuICBwcml2YXRlIGluZm8zOiBudW1iZXIgPSBudWxsO1xyXG4gIHByaXZhdGUgaW5mbzQ6IG51bWJlciA9IG51bGw7XHJcbiAgcHJpdmF0ZSBwcm9jZXNzTmFtZTogc3RyaW5nID0gbnVsbDsgLy8gQW5kcm9pZCBvbmx5XHJcbiAgcHJpdmF0ZSBhbGxvd2lBZEluZm9SZWFkaW5nOiBib29sZWFuID0gbnVsbDsgLy8gaU9TIG9ubHlcclxuICBwcml2YXRlIGFsbG93SWRmYVJlYWRpbmc6IGJvb2xlYW4gPSBudWxsOyAvLyBpT1Mgb25seVxyXG5cclxuICBwcml2YXRlIGF0dHJpYnV0aW9uQ2FsbGJhY2s6IChhdHRyaWJ1dGlvbjogQWRqdXN0QXR0cmlidXRpb24pID0+IHZvaWQgPSBudWxsO1xyXG4gIHByaXZhdGUgZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoZXZlbnQ6IEFkanVzdEV2ZW50U3VjY2VzcykgPT4gdm9pZCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBldmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2s6IChldmVudDogQWRqdXN0RXZlbnRGYWlsdXJlKSA9PiB2b2lkID0gbnVsbDtcclxuICBwcml2YXRlIHNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoc2Vzc2lvbjogQWRqdXN0U2Vzc2lvblN1Y2Nlc3MpID0+IHZvaWQgPSBudWxsO1xyXG4gIHByaXZhdGUgc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2s6IChzZXNzaW9uOiBBZGp1c3RTZXNzaW9uRmFpbHVyZSkgPT4gdm9pZCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBkZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2s6ICh1cmk6IHN0cmluZykgPT4gdm9pZCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFwcFRva2VuOiBzdHJpbmcsIGVudmlyb25tZW50OiBBZGp1c3RFbnZpcm9ubWVudCkge1xyXG4gICAgdGhpcy5hcHBUb2tlbiA9IGFwcFRva2VuO1xyXG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0QXBwU2VjcmV0KHNlY3JldElkOiBudW1iZXIsIGluZm8xOiBudW1iZXIsIGluZm8yOiBudW1iZXIsIGluZm8zOiBudW1iZXIsIGluZm80OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VjcmV0SWQgPSBzZWNyZXRJZDtcclxuICAgIHRoaXMuaW5mbzEgPSBpbmZvMTtcclxuICAgIHRoaXMuaW5mbzIgPSBpbmZvMjtcclxuICAgIHRoaXMuaW5mbzMgPSBpbmZvMztcclxuICAgIHRoaXMuaW5mbzQgPSBpbmZvNDtcclxuICB9XHJcblxyXG4gIHNldERlbGF5U3RhcnQoZGVsYXlTdGFydDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmRlbGF5U3RhcnQgPSBkZWxheVN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgc2V0TG9nTGV2ZWwobG9nTGV2ZWw6IEFkanVzdExvZ0xldmVsKSB7XHJcbiAgICB0aGlzLmxvZ0xldmVsID0gbG9nTGV2ZWw7XHJcbiAgfVxyXG5cclxuICBzZXREZWZhdWx0VHJhY2tlcihkZWZhdWx0VHJhY2tlcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRUcmFja2VyID0gZGVmYXVsdFRyYWNrZXI7XHJcbiAgfVxyXG5cclxuICBzZXRFeHRlcm5hbERldmljZUlkKGV4dGVybmFsRGV2aWNlSWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5leHRlcm5hbERldmljZUlkID0gZXh0ZXJuYWxEZXZpY2VJZDtcclxuICB9XHJcblxyXG4gIHNldFNlbmRJbkJhY2tncm91bmQoc2VuZEluQmFja2dyb3VuZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5zZW5kSW5CYWNrZ3JvdW5kID0gc2VuZEluQmFja2dyb3VuZDtcclxuICB9XHJcblxyXG4gIHNldFNob3VsZExhdW5jaERlZXBsaW5rKHNob3VsZExhdW5jaERlZXBsaW5rOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnNob3VsZExhdW5jaERlZXBsaW5rID0gc2hvdWxkTGF1bmNoRGVlcGxpbms7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudEJ1ZmZlcmluZ0VuYWJsZWQoZXZlbnRCdWZmZXJpbmdFbmFibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmV2ZW50QnVmZmVyaW5nRW5hYmxlZCA9IGV2ZW50QnVmZmVyaW5nRW5hYmxlZDtcclxuICB9XHJcblxyXG4gIHNldFVzZXJBZ2VudCh1c2VyQWdlbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy51c2VyQWdlbnQgPSB1c2VyQWdlbnQ7XHJcbiAgfVxyXG5cclxuICBzZXREZXZpY2VLbm93bihpc0RldmljZUtub3duOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzRGV2aWNlS25vd24gPSBpc0RldmljZUtub3duO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJvY2Vzc05hbWUocHJvY2Vzc05hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5wcm9jZXNzTmFtZSA9IHByb2Nlc3NOYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0QWxsb3dpQWRJbmZvUmVhZGluZyhhbGxvd2lBZEluZm9SZWFkaW5nOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmFsbG93aUFkSW5mb1JlYWRpbmcgPSBhbGxvd2lBZEluZm9SZWFkaW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0QWxsb3dJZGZhUmVhZGluZyhhbGxvd0lkZmFSZWFkaW5nOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmFsbG93SWRmYVJlYWRpbmcgPSBhbGxvd0lkZmFSZWFkaW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0QXR0cmlidXRpb25DYWxsYmFja0xpc3RlbmVyKGF0dHJpYnV0aW9uQ2FsbGJhY2s6IChhdHRyaWJ1dGlvbjogQWRqdXN0QXR0cmlidXRpb24pID0+IHZvaWQpIHtcclxuICAgIHRoaXMuYXR0cmlidXRpb25DYWxsYmFjayA9IGF0dHJpYnV0aW9uQ2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2tMaXN0ZW5lcihldmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s6IChldmVudDogQWRqdXN0RXZlbnRTdWNjZXNzKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLmV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjayA9IGV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaztcclxuICB9XHJcblxyXG4gIHNldEV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFja0xpc3RlbmVyKGV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjazogKGV2ZW50OiBBZGp1c3RFdmVudEZhaWx1cmUpID0+IHZvaWQpIHtcclxuICAgIHRoaXMuZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrID0gZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgc2V0U2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2tMaXN0ZW5lcihcclxuICAgIHNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoc2Vzc2lvbjogQWRqdXN0U2Vzc2lvblN1Y2Nlc3MpID0+IHZvaWRcclxuICApIHtcclxuICAgIHRoaXMuc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2sgPSBzZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaztcclxuICB9XHJcblxyXG4gIHNldFNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrTGlzdGVuZXIoc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2s6IChzZXNzaW9uOiBBZGp1c3RTZXNzaW9uRmFpbHVyZSkgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5zZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjayA9IHNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgc2V0RGVmZXJyZWREZWVwbGlua0NhbGxiYWNrTGlzdGVuZXIoZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrOiAodXJpOiBzdHJpbmcpID0+IHZvaWQpIHtcclxuICAgIHRoaXMuZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrID0gZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRBdHRyaWJ1dGlvbkNhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRpb25DYWxsYmFjaztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFdmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2soKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ldmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERlZmVycmVkRGVlcGxpbmtDYWxsYmFjaygpIHtcclxuICAgIHJldHVybiB0aGlzLmRlZmVycmVkRGVlcGxpbmtDYWxsYmFjaztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzQXR0cmlidXRpb25MaXN0ZW5lcigpIHtcclxuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0aW9uQ2FsbGJhY2sgIT09IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0V2ZW50VHJhY2tpbmdTdWNjZWVkZWRMaXN0ZW5lcigpIHtcclxuICAgIHJldHVybiB0aGlzLmV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjayAhPT0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzRXZlbnRUcmFja2luZ0ZhaWxlZExpc3RlbmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrICE9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNTZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRMaXN0ZW5lcigpIHtcclxuICAgIHJldHVybiB0aGlzLnNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrICE9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNTZXNzaW9uVHJhY2tpbmdGYWlsZWRMaXN0ZW5lcigpIHtcclxuICAgIHJldHVybiB0aGlzLnNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrICE9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNEZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2tMaXN0ZW5lcigpIHtcclxuICAgIHJldHVybiB0aGlzLmRlZmVycmVkRGVlcGxpbmtDYWxsYmFjayAhPT0gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZGp1c3RBcHBTdG9yZVN1YnNjcmlwdGlvbiB7XHJcbiAgcHJpdmF0ZSBwcmljZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcclxuICBwcml2YXRlIHRyYW5zYWN0aW9uSWQ6IHN0cmluZztcclxuICBwcml2YXRlIHJlY2VpcHQ6IHN0cmluZztcclxuICBwcml2YXRlIHRyYW5zYWN0aW9uRGF0ZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgc2FsZXNSZWdpb246IHN0cmluZztcclxuICBwcml2YXRlIGNhbGxiYWNrUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIHBhcnRuZXJQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwcmljZTogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nLCB0cmFuc2FjdGlvbklkOiBzdHJpbmcsIHJlY2VpcHQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xyXG4gICAgdGhpcy50cmFuc2FjdGlvbklkID0gdHJhbnNhY3Rpb25JZDtcclxuICAgIHRoaXMucmVjZWlwdCA9IHJlY2VpcHQ7XHJcbiAgfVxyXG5cclxuICBzZXRUcmFuc2FjdGlvbkRhdGUodHJhbnNhY3Rpb25EYXRlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudHJhbnNhY3Rpb25EYXRlID0gdHJhbnNhY3Rpb25EYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0U2FsZXNSZWdpb24oc2FsZXNSZWdpb246IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5zYWxlc1JlZ2lvbiA9IHNhbGVzUmVnaW9uO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2goa2V5KTtcclxuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgYWRkUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKGtleSk7XHJcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkanVzdFBsYXlTdG9yZVN1YnNjcmlwdGlvbiB7XHJcbiAgcHJpdmF0ZSBwcmljZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcclxuICBwcml2YXRlIHNrdTogc3RyaW5nO1xyXG4gIHByaXZhdGUgb3JkZXJJZDogc3RyaW5nO1xyXG4gIHByaXZhdGUgc2lnbmF0dXJlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBwdXJjaGFzZVRva2VuOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBwdXJjaGFzZVRpbWU6IHN0cmluZztcclxuICBwcml2YXRlIGNhbGxiYWNrUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIHBhcnRuZXJQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwcmljZTogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nLCBza3U6IHN0cmluZywgb3JkZXJJZDogc3RyaW5nLCBzaWduYXR1cmU6IHN0cmluZywgcHVyY2hhc2VUb2tlbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XHJcbiAgICB0aGlzLnNrdSA9IHNrdTtcclxuICAgIHRoaXMub3JkZXJJZCA9IG9yZGVySWQ7XHJcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcclxuICAgIHRoaXMucHVyY2hhc2VUb2tlbiA9IHB1cmNoYXNlVG9rZW47XHJcbiAgfVxyXG5cclxuICBzZXRQdXJjaGFzZVRpbWUocHVyY2hhc2VUaW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMucHVyY2hhc2VUaW1lID0gcHVyY2hhc2VUaW1lO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2goa2V5KTtcclxuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgYWRkUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKGtleSk7XHJcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RBdHRyaWJ1dGlvbiB7XHJcbiAgdHJhY2tlclRva2VuOiBzdHJpbmc7XHJcbiAgdHJhY2tlck5hbWU6IHN0cmluZztcclxuICBuZXR3b3JrOiBzdHJpbmc7XHJcbiAgY2FtcGFpZ246IHN0cmluZztcclxuICBhZGdyb3VwOiBzdHJpbmc7XHJcbiAgY3JlYXRpdmU6IHN0cmluZztcclxuICBjbGlja0xhYmVsOiBzdHJpbmc7XHJcbiAgYWRpZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkanVzdFNlc3Npb25TdWNjZXNzIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgdGltZXN0YW1wOiBzdHJpbmc7XHJcbiAgYWRpZDogc3RyaW5nO1xyXG4gIGpzb25SZXNwb25zZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkanVzdFNlc3Npb25GYWlsdXJlIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgdGltZXN0YW1wOiBzdHJpbmc7XHJcbiAgYWRpZDogc3RyaW5nO1xyXG4gIHdpbGxSZXRyeTogYm9vbGVhbjtcclxuICBqc29uUmVzcG9uc2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RFdmVudFN1Y2Nlc3Mge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICB0aW1lc3RhbXA6IHN0cmluZztcclxuICBhZGlkOiBzdHJpbmc7XHJcbiAgZXZlbnRUb2tlbjogc3RyaW5nO1xyXG4gIGNhbGxiYWNrSWQ6IHN0cmluZztcclxuICBqc29uUmVzcG9uc2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RFdmVudEZhaWx1cmUge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICB0aW1lc3RhbXA6IHN0cmluZztcclxuICBhZGlkOiBzdHJpbmc7XHJcbiAgZXZlbnRUb2tlbjogc3RyaW5nO1xyXG4gIHdpbGxSZXRyeTogYm9vbGVhbjtcclxuICBjYWxsYmFja0lkOiBzdHJpbmc7XHJcbiAganNvblJlc3BvbnNlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFkanVzdEVudmlyb25tZW50IHtcclxuICBTYW5kYm94ID0gJ3NhbmRib3gnLFxyXG4gIFByb2R1Y3Rpb24gPSAncHJvZHVjdGlvbicsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFkanVzdExvZ0xldmVsIHtcclxuICBWZXJib3NlID0gJ1ZFUkJPU0UnLFxyXG4gIERlYnVnID0gJ0RFQlVHJyxcclxuICBJbmZvID0gJ0lORk8nLFxyXG4gIFdhcm4gPSAnV0FSTicsXHJcbiAgRXJyb3IgPSAnRVJST1InLFxyXG4gIEFzc2VydCA9ICdBU1NFUlQnLFxyXG4gIFN1cHByZXNzID0gJ1NVUFBSRVNTJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEFkanVzdFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBpcyB0aGUgSW9uaWMgQ29yZG92YSBTREsgb2YgQWRqdXN04oSiLiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCBBZGp1c3TihKIgYXQgYWRqdXN0LmNvbS5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb20uYWRqdXN0LnNka2AuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtBZGp1c3QgQ29yZG92YSBTREtdKGh0dHBzOi8vZ2l0aHViLmNvbS9hZGp1c3QvY29yZG92YV9zZGspXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqICBpbXBvcnQgeyBBZGp1c3QsIEFkanVzdENvbmZpZywgQWRqdXN0RW52aXJvbm1lbnQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FkanVzdCc7XHJcbiAqXHJcbiAqICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkanVzdDogQWRqdXN0KSB7IH1cclxuICpcclxuICogIC4uLlxyXG4gKlxyXG4gKiAgY29uc3QgY29uZmlnID0gbmV3IEFkanVzdENvbmZpZygnQVBQLVRPS0VOLUhFUkUnLCBBZGp1c3RFbnZpcm9ubWVudC5TYW5kYm94KTtcclxuICogIGNvbmZpZy5sb2dMZXZlbCA9IEFkanVzdExvZ0xldmVsLlZlcmJvc2U7XHJcbiAqICAvLyBTZXQgb3RoZXIgY29uZmlnIHByb3BlcnRpZXMuXHJcbiAqICBhZGp1c3QuY3JlYXRlKGNvbmZpZyk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBBZGp1c3RBdHRyaWJ1dGlvblxyXG4gKiBBZGp1c3RTZXNzaW9uU3VjY2Vzc1xyXG4gKiBBZGp1c3RTZXNzaW9uRmFpbHVyZVxyXG4gKiBBZGp1c3RFdmVudFN1Y2Nlc3NcclxuICogQWRqdXN0RXZlbnRGYWlsdXJlXHJcbiAqIEBjbGFzc2VzXHJcbiAqIEFkanVzdEV2ZW50XHJcbiAqIEFkanVzdENvbmZpZ1xyXG4gKiBBZGp1c3RBcHBTdG9yZVN1YnNjcmlwdGlvblxyXG4gKiBBZGp1c3RQbGF5U3RvcmVTdWJzY3JpcHRpb25cclxuICogQGVudW1zXHJcbiAqIEFkanVzdEVudmlyb25tZW50XHJcbiAqIEFkanVzdExvZ0xldmVsXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQWRqdXN0JyxcclxuICBwbHVnaW46ICdjb20uYWRqdXN0LnNkaycsXHJcbiAgcGx1Z2luUmVmOiAnQWRqdXN0JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FkanVzdC9jb3Jkb3ZhX3NkaycsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFkanVzdCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpbml0aWFsaXplcyBBZGp1c3QgU0RLXHJcbiAgICogQHBhcmFtIHtBZGp1c3RDb25pZ30gY29uZmlnIEFkanVzdCBjb25maWcgb2JqZWN0IHVzZWQgYXMgc3RhcnRpbmcgb3B0aW9uc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGNyZWF0ZShjb25maWc6IEFkanVzdENvbmZpZyk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIGFuIGV2ZW50XHJcbiAgICogQHBhcmFtIHtBZGp1c3RFdmVudH0gZXZlbnQgQWRqdXN0IGV2ZW50IG9iamVjdCB0byBiZSB0cmFja2VkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdHJhY2tFdmVudChldmVudDogQWRqdXN0RXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBBcHAgU3RvcmUgc3Vic2NyaXB0aW9uXHJcbiAgICogQHBhcmFtIHtBZGp1c3RBcHBTdG9yZVN1YnNjcmlwdGlvbn0gc3Vic2NyaXB0aW9uIEFkanVzdCBBcHAgU3RvcmUgc3Vic2NyaXB0aW9uIG9iamVjdCB0byBiZSB0cmFja2VkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdHJhY2tBcHBTdG9yZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb246IEFkanVzdEFwcFN0b3JlU3Vic2NyaXB0aW9uKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgUGxheSBTdG9yZSBzdWJzY3JpcHRpb25cclxuICAgKiBAcGFyYW0ge0FkanVzdFBsYXlTdG9yZVN1YnNjcmlwdGlvbn0gc3Vic2NyaXB0aW9uIEFkanVzdCBQbGF5IFN0b3JlIHN1YnNjcmlwdGlvbiBvYmplY3QgdG8gYmUgdHJhY2tlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHRyYWNrUGxheVN0b3JlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbjogQWRqdXN0UGxheVN0b3JlU3Vic2NyaXB0aW9uKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBzZXRzIG9mZmxpbmUgbW9kZSBvbiBvciBvZmZcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgc2V0IHRvIHRydWUgZm9yIG9mZmxpbmUgbW9kZSBvblxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNldE9mZmxpbmVNb2RlKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ5IG1ha2luZyB0aGlzIGNhbGwsIHRoZSBBZGp1c3QgU0RLIHdpbGwgdHJ5IHRvIGZpbmQgaWYgdGhlcmUgaXMgYW55IG5ldyBhdHRyaWJ1dGlvbiBpbmZvIGluc2lkZSBvZiB0aGUgZGVlcCBsaW5rIGFuZCBpZiBhbnksIGl0IHdpbGwgYmUgc2VudCB0byB0aGUgQWRqdXN0IGJhY2tlbmQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBVUkwgb2YgdGhlIGRlZXBsaW5rXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgYXBwV2lsbE9wZW5VcmwodXJsOiBzdHJpbmcpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFlvdSBjYW4gZGlzYWJsZS9lbmFibGUgdGhlIEFkanVzdCBTREsgZnJvbSB0cmFja2luZyBieSBpbnZva2luZyB0aGlzIG1ldGhvZFxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZCBzZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBTREtcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvIHNlbmQgdXMgdGhlIHB1c2ggbm90aWZpY2F0aW9uIHRva2VuLCBhZGQgdGhlIGZvbGxvd2luZyBjYWxsIHRvIEFkanVzdCB3aGVuZXZlciB5b3UgZ2V0IHlvdXIgdG9rZW4gaW4gdGhlIGFwcCBvciB3aGVuIGl0IGdldHMgdXBkYXRlZC5cclxuICAgKiBQdXNoIHRva2VucyBhcmUgdXNlZCBmb3IgQXVkaWVuY2UgQnVpbGRlciBhbmQgY2xpZW50IGNhbGxiYWNrcywgYW5kIHRoZXkgYXJlIHJlcXVpcmVkIGZvciB0aGUgdXBjb21pbmcgdW5pbnN0YWxsIHRyYWNraW5nIGZlYXR1cmUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHB1c2hUb2tlbiBwdXNoIHRva2VuIHZhbHVlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc2V0UHVzaFRva2VuKHB1c2hUb2tlbjogc3RyaW5nKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiB0aGUgQWRqdXN0IFNESyBpcyBjdXJyZW50bHkgZW5hYmxlZCBieSBjYWxsaW5nIHRoaXMgZnVuY3Rpb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaXNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW4gYWNjb3JkYW5jZSB3aXRoIGFydGljbGUgMTcgb2YgdGhlIEVVJ3MgR2VuZXJhbCBEYXRhIFByb3RlY3Rpb24gUmVndWxhdGlvbiAoR0RQUiksIHlvdSBjYW4gbm90aWZ5IEFkanVzdCB3aGVuIGEgdXNlciBoYXMgZXhlcmNpc2VkIHRoZWlyIHJpZ2h0IHRvIGJlIGZvcmdvdHRlbi5cclxuICAgKiBDYWxsaW5nIHRoZSBmb2xsb3dpbmcgbWV0aG9kIHdpbGwgaW5zdHJ1Y3QgdGhlIEFkanVzdCBTREsgdG8gY29tbXVuaWNhdGUgdGhlIHVzZXIncyBjaG9pY2UgdG8gYmUgZm9yZ290dGVuIHRvIHRoZSBBZGp1c3QgYmFja2VuZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGdkcHJGb3JnZXRNZSgpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFlvdSBjYW4gbm93IG5vdGlmeSBBZGp1c3Qgd2hlbiBhIHVzZXIgaGFzIGV4ZXJjaXNlZCB0aGVpciByaWdodCB0byBzdG9wIHNoYXJpbmcgdGhlaXIgZGF0YSB3aXRoIHBhcnRuZXJzIGZvciBtYXJrZXRpbmcgcHVycG9zZXMsIGJ1dCBoYXMgYWxsb3dlZCBpdCB0byBiZSBzaGFyZWQgZm9yIHN0YXRpc3RpY3MgcHVycG9zZXMuXHJcbiAgICogQ2FsbGluZyB0aGUgZm9sbG93aW5nIG1ldGhvZCB3aWxsIGluc3RydWN0IHRoZSBBZGp1c3QgU0RLIHRvIGNvbW11bmljYXRlIHRoZSB1c2VyJ3MgY2hvaWNlIHRvIGRpc2FibGUgZGF0YSBzaGFyaW5nIHRvIHRoZSBBZGp1c3QgYmFja2VuZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGRpc2FibGVUaGlyZFBhcnR5U2hhcmluZygpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHVzZWQgdG8gZ2V0IEdvb2dsZSBBZElkXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGdvb2dsZSBBZElkIHZhbHVlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEdvb2dsZUFkSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHlvdSBuZWVkIHRvIG9idGFpbiB0aGUgQW1hem9uIEFkdmVydGlzaW5nIElELCB5b3UgY2FuIG1ha2UgYSBjYWxsIHRvIHRoaXMgZnVuY3Rpb24uXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGFuYXppYiBhZHYuIElEXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEFtYXpvbkFkSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvIG9idGFpbiB0aGUgSURGQSwgY2FsbCB0aGlzIGZ1bmN0aW9uXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIElERkEgc3RyaW5nIHZhbHVlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldElkZmEoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciBldmVyeSBkZXZpY2Ugd2l0aCB5b3VyIGFwcCBpbnN0YWxsZWQgb24gaXQsIHRoZSBBZGp1c3QgYmFja2VuZCBnZW5lcmF0ZXMgYSB1bmlxdWUgQWRqdXN0IGRldmljZSBpZGVudGlmaWVyIChhZGlkKS5cclxuICAgKiBJbiBvcmRlciB0byBvYnRhaW4gdGhpcyBpZGVudGlmaWVyLCBjYWxsIHRoaXMgZnVuY3Rpb25cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggYWRpZCB2YWx1ZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRBZGlkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJZiB5b3Ugd2FudCB0byBhY2Nlc3MgaW5mb3JtYXRpb24gYWJvdXQgYSB1c2VyJ3MgY3VycmVudCBhdHRyaWJ1dGlvbiB3aGVuZXZlciB5b3UgbmVlZCBpdCwgeW91IGNhbiBtYWtlIGEgY2FsbCB0byB0aGlzIGZ1bmN0aW9uXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxBZGp1c3RBdHRyaWJ1dGlvbj59IFJldHVybnMgYSBwcm9taXNlIHdpdGggQWRqdXN0QXR0cmlidXRpb24gb2JqZWN0XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEF0dHJpYnV0aW9uKCk6IFByb21pc2U8QWRqdXN0QXR0cmlidXRpb24+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdmVyc2lvbiBvZiB0aGUgU0RLIHVzZWRcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggc2RrIHZlcnNpb24gaW5mb3JtYXRpb25cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0U2RrVmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWV0aG9kIHVzZWQgdG8gYWRkIHNlc3Npb24gY2FsbGJhY2sgcGFyYW1ldGVyc1xyXG4gICAqIEBwYXJhbSBrZXkga2V5XHJcbiAgICogQHBhcmFtIHZhbHVlIHZhbHVlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgYWRkU2Vzc2lvbkNhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgYSBzcGVjaWZpYyBzZXNzaW9uIGNhbGxiYWNrIHBhcmFtZXRlciBieSBwYXNzaW5nIHRoZSBkZXNpcmluZyBrZXkgdG8gdGhpcyBtZXRob2RcclxuICAgKiBAcGFyYW0ga2V5IGtleVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHJlbW92ZVNlc3Npb25DYWxsYmFja1BhcmFtZXRlcihrZXk6IHN0cmluZyk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogSWYgYWxsIGtleXMgYW5kIHZhbHVlcyBmcm9tIHRoZSBzZXNzaW9uIGNhbGxiYWNrIHBhcmFtZXRlcnMgaGF2ZSB0byBiZSByZW1vdmVkLCBjYWxsIHRoaXMgbWV0aG9kXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcmVzZXRTZXNzaW9uQ2FsbGJhY2tQYXJhbWV0ZXJzKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogTWV0aG9kIHVzZWQgdG8gYWRkIHNlc3Npb24gcGFydG5lciBwYXJhbWV0ZXJzXHJcbiAgICogQHBhcmFtIGtleSBrZXlcclxuICAgKiBAcGFyYW0gdmFsdWUgdmFsdWVcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBhZGRTZXNzaW9uUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGEgc3BlY2lmaWMgc2Vzc2lvbiBwYXJ0bmVyIHBhcmFtZXRlciBieSBwYXNzaW5nIHRoZSBkZXNpcmluZyBrZXkgdG8gdGhpcyBtZXRob2RcclxuICAgKiBAcGFyYW0ga2V5IGtleVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHJlbW92ZVNlc3Npb25QYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBJZiBhbGwga2V5cyBhbmQgdmFsdWVzIGZyb20gdGhlIHNlc3Npb24gcGFydG5lciBwYXJhbWV0ZXJzIGhhdmUgdG8gYmUgcmVtb3ZlZCwgY2FsbCB0aGlzIG1ldGhvZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHJlc2V0U2Vzc2lvblBhcnRuZXJQYXJhbWV0ZXJzKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgY2FsbCB3aWxsIG1ha2UgdGhlIEFkanVzdCBTREsgc2VuZCB0aGUgaW5pdGlhbCBpbnN0YWxsIHNlc3Npb24gYW5kIGFueSBldmVudHMgY3JlYXRlZCwgaWYgdGhleSB3ZXJlIG5vdCBzZW50IGFmdGVyIGRlbGF5IHN0YXJ0IHdhcyBzZXQgYW5kIGl0J3MgZGVsYXkgZXhwaXJlZC5cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzZW5kRmlyc3RQYWNrYWdlcygpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcXVlc3QgQWRqdXN0IFNESyB0byBzaG93IHBvcCB1cCBkaWFsb2cgZm9yIGFza2luZyB1c2VyJ3MgY29uc2VudCB0byBiZSB0cmFja2VkLlxyXG4gICAqIEluIG9yZGVyIHRvIGRvIHRoaXMsIGNhbGwgdGhpcyBmdW5jdGlvblxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8aW50Pn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCB1c2VyJ3MgY29uc2VudCB2YWx1ZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZXF1ZXN0VHJhY2tpbmdBdXRob3JpemF0aW9uV2l0aENvbXBsZXRpb25IYW5kbGVyKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==