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
var MetrixConfig = /** @class */ (function () {
    function MetrixConfig(appId) {
        this.secretId = null;
        this.info1 = null;
        this.info2 = null;
        this.info3 = null;
        this.info4 = null;
        this.defaultTrackerToken = null;
        this.shouldLaunchDeeplink = false;
        this.firebaseAppId = null;
        this.firebaseProjectId = null;
        this.firebaseApiKey = null;
        this.isLocationListeningEnable = false;
        this.eventUploadThreshold = null;
        this.eventUploadMaxBatchSize = null;
        this.eventMaxCount = null;
        this.eventUploadPeriodMillis = null;
        this.sessionTimeoutMillis = null;
        this.store = null;
        this.userIdListener = null;
        this.sessionIdListener = null;
        this.attributionChangeListener = null;
        this.deeplinkResponseListener = null;
        this.appId = appId;
    }
    MetrixConfig.prototype.setDefaultTracker = function (defaultTrackerToken) {
        this.defaultTrackerToken = defaultTrackerToken;
    };
    MetrixConfig.prototype.setFirebaseId = function (firebaseAppId, firebaseProjectId, firebaseApiKey) {
        this.firebaseAppId = firebaseAppId;
        this.firebaseProjectId = firebaseProjectId;
        this.firebaseApiKey = firebaseApiKey;
    };
    MetrixConfig.prototype.setAppSecret = function (secretId, info1, info2, info3, info4) {
        this.secretId = secretId;
        this.info1 = info1;
        this.info2 = info2;
        this.info3 = info3;
        this.info4 = info4;
    };
    MetrixConfig.prototype.setShouldLaunchDeeplink = function (shouldLaunchDeeplink) {
        this.shouldLaunchDeeplink = shouldLaunchDeeplink;
    };
    MetrixConfig.prototype.setOnAttributionChangeListener = function (attributionChangeListener) {
        this.attributionChangeListener = attributionChangeListener;
    };
    MetrixConfig.prototype.setOnDeeplinkResponseListener = function (deeplinkResponseListener) {
        this.deeplinkResponseListener = deeplinkResponseListener;
    };
    MetrixConfig.prototype.setOnReceiveUserIdListener = function (userIdListener) {
        this.userIdListener = userIdListener;
    };
    MetrixConfig.prototype.setOnSessionIdListener = function (sessionIdListener) {
        this.sessionIdListener = sessionIdListener;
    };
    MetrixConfig.prototype.setLocationListening = function (isLocationListeningEnable) {
        this.isLocationListeningEnable = isLocationListeningEnable;
    };
    MetrixConfig.prototype.setEventUploadThreshold = function (threshold) {
        this.eventUploadThreshold = threshold;
    };
    MetrixConfig.prototype.setEventUploadMaxBatchSize = function (size) {
        this.eventUploadMaxBatchSize = size;
    };
    MetrixConfig.prototype.setEventMaxCount = function (count) {
        this.eventMaxCount = count;
    };
    MetrixConfig.prototype.setEventUploadPeriodMillis = function (period) {
        this.eventUploadPeriodMillis = period;
    };
    MetrixConfig.prototype.setSessionTimeoutMillis = function (timeout) {
        this.sessionTimeoutMillis = timeout;
    };
    MetrixConfig.prototype.setStore = function (store) {
        this.store = store;
    };
    MetrixConfig.prototype.getAttributionChangeListener = function () {
        return this.attributionChangeListener;
    };
    MetrixConfig.prototype.getDeeplinkResponseListener = function () {
        return this.deeplinkResponseListener;
    };
    MetrixConfig.prototype.getOnReceiveUserIdListener = function () {
        return this.userIdListener;
    };
    MetrixConfig.prototype.getOnSessionIdListener = function () {
        return this.sessionIdListener;
    };
    MetrixConfig.prototype.hasAttributionChangeListener = function () {
        return this.attributionChangeListener !== null;
    };
    MetrixConfig.prototype.hasDeeplinkResponseListener = function () {
        return this.deeplinkResponseListener !== null;
    };
    MetrixConfig.prototype.hasUserIdListener = function () {
        return this.userIdListener !== null;
    };
    MetrixConfig.prototype.hasSessionIdListener = function () {
        return this.sessionIdListener !== null;
    };
    return MetrixConfig;
}());
export { MetrixConfig };
export var MetrixAttributionStatus;
(function (MetrixAttributionStatus) {
    MetrixAttributionStatus["Attributed"] = "ATTRIBUTED";
    MetrixAttributionStatus["NotAttributedYet"] = "NOT_ATTRIBUTED_YET";
    MetrixAttributionStatus["AttributionNotNeeded"] = "ATTRIBUTION_NOT_NEEDED";
    MetrixAttributionStatus["Unknown"] = "UNKNOWN";
})(MetrixAttributionStatus || (MetrixAttributionStatus = {}));
var MetrixOriginal = /** @class */ (function (_super) {
    __extends(MetrixOriginal, _super);
    function MetrixOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MetrixOriginal.prototype.create = function (config) { return cordova(this, "create", { "sync": true }, arguments); };
    MetrixOriginal.prototype.getSessionNum = function () { return cordova(this, "getSessionNum", {}, arguments); };
    MetrixOriginal.prototype.newEvent = function (slug, attributes) { return cordova(this, "newEvent", { "sync": true }, arguments); };
    MetrixOriginal.prototype.addUserAttributes = function (attributes) { return cordova(this, "addUserAttributes", { "sync": true }, arguments); };
    MetrixOriginal.prototype.newRevenue = function (slug, amount, currency, orderId) { return cordova(this, "newRevenue", { "sync": true }, arguments); };
    MetrixOriginal.prototype.appWillOpenUrl = function (url) { return cordova(this, "appWillOpenUrl", { "sync": true }, arguments); };
    MetrixOriginal.pluginName = "Metrix";
    MetrixOriginal.plugin = "ir.metrix.sdk";
    MetrixOriginal.pluginRef = "Metrix";
    MetrixOriginal.repo = "https://github.com/metrixorg/MetrixSDK-CordovaPlugin";
    MetrixOriginal.platforms = ["Android"];
    return MetrixOriginal;
}(IonicNativePlugin));
var Metrix = new MetrixOriginal();
export { Metrix };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21ldHJpeC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUEyQnRFLHNCQUFZLEtBQWE7UUF2QmpCLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsVUFBSyxHQUFXLElBQUksQ0FBQztRQUNyQixVQUFLLEdBQVcsSUFBSSxDQUFDO1FBQ3JCLFVBQUssR0FBVyxJQUFJLENBQUM7UUFDckIsVUFBSyxHQUFXLElBQUksQ0FBQztRQUNyQix3QkFBbUIsR0FBVyxJQUFJLENBQUM7UUFDbkMseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBQzdCLHNCQUFpQixHQUFXLElBQUksQ0FBQztRQUNqQyxtQkFBYyxHQUFXLElBQUksQ0FBQztRQUM5Qiw4QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFDbEMseUJBQW9CLEdBQVcsSUFBSSxDQUFDO1FBQ3BDLDRCQUF1QixHQUFXLElBQUksQ0FBQztRQUN2QyxrQkFBYSxHQUFXLElBQUksQ0FBQztRQUM3Qiw0QkFBdUIsR0FBVyxJQUFJLENBQUM7UUFDdkMseUJBQW9CLEdBQVcsSUFBSSxDQUFDO1FBQ3BDLFVBQUssR0FBVyxJQUFJLENBQUM7UUFFckIsbUJBQWMsR0FBNkIsSUFBSSxDQUFDO1FBQ2hELHNCQUFpQixHQUFnQyxJQUFJLENBQUM7UUFDdEQsOEJBQXlCLEdBQTZDLElBQUksQ0FBQztRQUMzRSw2QkFBd0IsR0FBMEIsSUFBSSxDQUFDO1FBRzdELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx3Q0FBaUIsR0FBakIsVUFBa0IsbUJBQTJCO1FBQzNDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztJQUNqRCxDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLGFBQXFCLEVBQUUsaUJBQXlCLEVBQUUsY0FBc0I7UUFDcEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsUUFBZ0IsRUFBRSxLQUFhLEVBQUUsS0FBYSxFQUFFLEtBQWEsRUFBRSxLQUFhO1FBQ3ZGLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCw4Q0FBdUIsR0FBdkIsVUFBd0Isb0JBQTZCO1FBQ25ELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztJQUNuRCxDQUFDO0lBRUQscURBQThCLEdBQTlCLFVBQStCLHlCQUFtRTtRQUNoRyxJQUFJLENBQUMseUJBQXlCLEdBQUcseUJBQXlCLENBQUM7SUFDN0QsQ0FBQztJQUVELG9EQUE2QixHQUE3QixVQUE4Qix3QkFBK0M7UUFDM0UsSUFBSSxDQUFDLHdCQUF3QixHQUFHLHdCQUF3QixDQUFDO0lBQzNELENBQUM7SUFFRCxpREFBMEIsR0FBMUIsVUFBMkIsY0FBd0M7UUFDakUsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDdkMsQ0FBQztJQUVELDZDQUFzQixHQUF0QixVQUF1QixpQkFBOEM7UUFDbkUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBQzdDLENBQUM7SUFFRCwyQ0FBb0IsR0FBcEIsVUFBcUIseUJBQWtDO1FBQ3JELElBQUksQ0FBQyx5QkFBeUIsR0FBRyx5QkFBeUIsQ0FBQztJQUM3RCxDQUFDO0lBRUQsOENBQXVCLEdBQXZCLFVBQXdCLFNBQWlCO1FBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUVELGlEQUEwQixHQUExQixVQUEyQixJQUFZO1FBQ3JDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixLQUFhO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxpREFBMEIsR0FBMUIsVUFBMkIsTUFBYztRQUN2QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDO0lBQ3hDLENBQUM7SUFFRCw4Q0FBdUIsR0FBdkIsVUFBd0IsT0FBZTtRQUNyQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDO0lBQ3RDLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRU8sbURBQTRCLEdBQXBDO1FBQ0UsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEMsQ0FBQztJQUVPLGtEQUEyQixHQUFuQztRQUNFLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZDLENBQUM7SUFFTyxpREFBMEIsR0FBbEM7UUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVPLDZDQUFzQixHQUE5QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFFTyxtREFBNEIsR0FBcEM7UUFDRSxPQUFPLElBQUksQ0FBQyx5QkFBeUIsS0FBSyxJQUFJLENBQUM7SUFDakQsQ0FBQztJQUVPLGtEQUEyQixHQUFuQztRQUNFLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixLQUFLLElBQUksQ0FBQztJQUNoRCxDQUFDO0lBRU8sd0NBQWlCLEdBQXpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBRU8sMkNBQW9CLEdBQTVCO1FBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSSxDQUFDO0lBQ3pDLENBQUM7dUJBaElIOzs7QUEySUEsTUFBTSxDQUFOLElBQVksdUJBS1g7QUFMRCxXQUFZLHVCQUF1QjtJQUNqQyxvREFBeUIsQ0FBQTtJQUN6QixrRUFBdUMsQ0FBQTtJQUN2QywwRUFBK0MsQ0FBQTtJQUMvQyw4Q0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBTFcsdUJBQXVCLEtBQXZCLHVCQUF1QixRQUtsQzs7SUFxQzJCLDBCQUFpQjs7OztJQU0zQyx1QkFBTSxhQUFDLE1BQW9CO0lBTzNCLDhCQUFhO0lBVWIseUJBQVEsYUFBQyxJQUFZLEVBQUUsVUFBeUM7SUFPaEUsa0NBQWlCLGFBQUMsVUFBd0M7SUFVMUQsMkJBQVUsYUFBQyxJQUFZLEVBQUUsTUFBYyxFQUFFLFFBQWlCLEVBQUUsT0FBZ0I7SUFPNUUsK0JBQWMsYUFBQyxHQUFXOzs7Ozs7aUJBcE81QjtFQXFMNEIsaUJBQWlCO1NBQWhDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ldHJpeENvbmZpZyB7XHJcbiAgcHJpdmF0ZSBhcHBJZDogc3RyaW5nO1xyXG4gIHByaXZhdGUgc2VjcmV0SWQ6IG51bWJlciA9IG51bGw7XHJcbiAgcHJpdmF0ZSBpbmZvMTogbnVtYmVyID0gbnVsbDtcclxuICBwcml2YXRlIGluZm8yOiBudW1iZXIgPSBudWxsO1xyXG4gIHByaXZhdGUgaW5mbzM6IG51bWJlciA9IG51bGw7XHJcbiAgcHJpdmF0ZSBpbmZvNDogbnVtYmVyID0gbnVsbDtcclxuICBwcml2YXRlIGRlZmF1bHRUcmFja2VyVG9rZW46IHN0cmluZyA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzaG91bGRMYXVuY2hEZWVwbGluayA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZmlyZWJhc2VBcHBJZDogc3RyaW5nID0gbnVsbDtcclxuICBwcml2YXRlIGZpcmViYXNlUHJvamVjdElkOiBzdHJpbmcgPSBudWxsO1xyXG4gIHByaXZhdGUgZmlyZWJhc2VBcGlLZXk6IHN0cmluZyA9IG51bGw7XHJcbiAgcHJpdmF0ZSBpc0xvY2F0aW9uTGlzdGVuaW5nRW5hYmxlID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBldmVudFVwbG9hZFRocmVzaG9sZDogbnVtYmVyID0gbnVsbDtcclxuICBwcml2YXRlIGV2ZW50VXBsb2FkTWF4QmF0Y2hTaXplOiBudW1iZXIgPSBudWxsO1xyXG4gIHByaXZhdGUgZXZlbnRNYXhDb3VudDogbnVtYmVyID0gbnVsbDtcclxuICBwcml2YXRlIGV2ZW50VXBsb2FkUGVyaW9kTWlsbGlzOiBudW1iZXIgPSBudWxsO1xyXG4gIHByaXZhdGUgc2Vzc2lvblRpbWVvdXRNaWxsaXM6IG51bWJlciA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzdG9yZTogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSB1c2VySWRMaXN0ZW5lcjogKHVzZXJJZDogc3RyaW5nKSA9PiB2b2lkID0gbnVsbDtcclxuICBwcml2YXRlIHNlc3Npb25JZExpc3RlbmVyOiAoc2Vzc2lvbklkOiBzdHJpbmcpID0+IHZvaWQgPSBudWxsO1xyXG4gIHByaXZhdGUgYXR0cmlidXRpb25DaGFuZ2VMaXN0ZW5lcjogKGF0dHJpYnV0aW9uOiBNZXRyaXhBdHRyaWJ1dGlvbikgPT4gdm9pZCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBkZWVwbGlua1Jlc3BvbnNlTGlzdGVuZXI6ICh1cmk6IHN0cmluZykgPT4gdm9pZCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFwcElkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuYXBwSWQgPSBhcHBJZDtcclxuICB9XHJcblxyXG4gIHNldERlZmF1bHRUcmFja2VyKGRlZmF1bHRUcmFja2VyVG9rZW46IHN0cmluZykge1xyXG4gICAgdGhpcy5kZWZhdWx0VHJhY2tlclRva2VuID0gZGVmYXVsdFRyYWNrZXJUb2tlbjtcclxuICB9XHJcblxyXG4gIHNldEZpcmViYXNlSWQoZmlyZWJhc2VBcHBJZDogc3RyaW5nLCBmaXJlYmFzZVByb2plY3RJZDogc3RyaW5nLCBmaXJlYmFzZUFwaUtleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmZpcmViYXNlQXBwSWQgPSBmaXJlYmFzZUFwcElkO1xyXG4gICAgdGhpcy5maXJlYmFzZVByb2plY3RJZCA9IGZpcmViYXNlUHJvamVjdElkO1xyXG4gICAgdGhpcy5maXJlYmFzZUFwaUtleSA9IGZpcmViYXNlQXBpS2V5O1xyXG4gIH1cclxuXHJcbiAgc2V0QXBwU2VjcmV0KHNlY3JldElkOiBudW1iZXIsIGluZm8xOiBudW1iZXIsIGluZm8yOiBudW1iZXIsIGluZm8zOiBudW1iZXIsIGluZm80OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2VjcmV0SWQgPSBzZWNyZXRJZDtcclxuICAgIHRoaXMuaW5mbzEgPSBpbmZvMTtcclxuICAgIHRoaXMuaW5mbzIgPSBpbmZvMjtcclxuICAgIHRoaXMuaW5mbzMgPSBpbmZvMztcclxuICAgIHRoaXMuaW5mbzQgPSBpbmZvNDtcclxuICB9XHJcblxyXG4gIHNldFNob3VsZExhdW5jaERlZXBsaW5rKHNob3VsZExhdW5jaERlZXBsaW5rOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnNob3VsZExhdW5jaERlZXBsaW5rID0gc2hvdWxkTGF1bmNoRGVlcGxpbms7XHJcbiAgfVxyXG5cclxuICBzZXRPbkF0dHJpYnV0aW9uQ2hhbmdlTGlzdGVuZXIoYXR0cmlidXRpb25DaGFuZ2VMaXN0ZW5lcjogKGF0dHJpYnV0aW9uOiBNZXRyaXhBdHRyaWJ1dGlvbikgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5hdHRyaWJ1dGlvbkNoYW5nZUxpc3RlbmVyID0gYXR0cmlidXRpb25DaGFuZ2VMaXN0ZW5lcjtcclxuICB9XHJcblxyXG4gIHNldE9uRGVlcGxpbmtSZXNwb25zZUxpc3RlbmVyKGRlZXBsaW5rUmVzcG9uc2VMaXN0ZW5lcjogKHVyaTogc3RyaW5nKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLmRlZXBsaW5rUmVzcG9uc2VMaXN0ZW5lciA9IGRlZXBsaW5rUmVzcG9uc2VMaXN0ZW5lcjtcclxuICB9XHJcblxyXG4gIHNldE9uUmVjZWl2ZVVzZXJJZExpc3RlbmVyKHVzZXJJZExpc3RlbmVyOiAodXNlcklkOiBzdHJpbmcpID0+IHZvaWQpIHtcclxuICAgIHRoaXMudXNlcklkTGlzdGVuZXIgPSB1c2VySWRMaXN0ZW5lcjtcclxuICB9XHJcblxyXG4gIHNldE9uU2Vzc2lvbklkTGlzdGVuZXIoc2Vzc2lvbklkTGlzdGVuZXI6IChzZXNzaW9uSWQ6IHN0cmluZykgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5zZXNzaW9uSWRMaXN0ZW5lciA9IHNlc3Npb25JZExpc3RlbmVyO1xyXG4gIH1cclxuXHJcbiAgc2V0TG9jYXRpb25MaXN0ZW5pbmcoaXNMb2NhdGlvbkxpc3RlbmluZ0VuYWJsZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc0xvY2F0aW9uTGlzdGVuaW5nRW5hYmxlID0gaXNMb2NhdGlvbkxpc3RlbmluZ0VuYWJsZTtcclxuICB9XHJcblxyXG4gIHNldEV2ZW50VXBsb2FkVGhyZXNob2xkKHRocmVzaG9sZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmV2ZW50VXBsb2FkVGhyZXNob2xkID0gdGhyZXNob2xkO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRVcGxvYWRNYXhCYXRjaFNpemUoc2l6ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmV2ZW50VXBsb2FkTWF4QmF0Y2hTaXplID0gc2l6ZTtcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TWF4Q291bnQoY291bnQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5ldmVudE1heENvdW50ID0gY291bnQ7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudFVwbG9hZFBlcmlvZE1pbGxpcyhwZXJpb2Q6IG51bWJlcikge1xyXG4gICAgdGhpcy5ldmVudFVwbG9hZFBlcmlvZE1pbGxpcyA9IHBlcmlvZDtcclxuICB9XHJcblxyXG4gIHNldFNlc3Npb25UaW1lb3V0TWlsbGlzKHRpbWVvdXQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5zZXNzaW9uVGltZW91dE1pbGxpcyA9IHRpbWVvdXQ7XHJcbiAgfVxyXG5cclxuICBzZXRTdG9yZShzdG9yZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEF0dHJpYnV0aW9uQ2hhbmdlTGlzdGVuZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGlvbkNoYW5nZUxpc3RlbmVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREZWVwbGlua1Jlc3BvbnNlTGlzdGVuZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZWVwbGlua1Jlc3BvbnNlTGlzdGVuZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE9uUmVjZWl2ZVVzZXJJZExpc3RlbmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudXNlcklkTGlzdGVuZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE9uU2Vzc2lvbklkTGlzdGVuZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uSWRMaXN0ZW5lcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzQXR0cmlidXRpb25DaGFuZ2VMaXN0ZW5lcigpIHtcclxuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0aW9uQ2hhbmdlTGlzdGVuZXIgIT09IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0RlZXBsaW5rUmVzcG9uc2VMaXN0ZW5lcigpIHtcclxuICAgIHJldHVybiB0aGlzLmRlZXBsaW5rUmVzcG9uc2VMaXN0ZW5lciAhPT0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzVXNlcklkTGlzdGVuZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy51c2VySWRMaXN0ZW5lciAhPT0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzU2Vzc2lvbklkTGlzdGVuZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uSWRMaXN0ZW5lciAhPT0gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWV0cml4QXR0cmlidXRpb24ge1xyXG4gIGFjcXVpc2l0aW9uQWQ6IHN0cmluZztcclxuICBhY3F1aXNpdGlvbkFkU2V0OiBzdHJpbmc7XHJcbiAgYWNxdWlzaXRpb25DYW1wYWlnbjogc3RyaW5nO1xyXG4gIGFjcXVpc2l0aW9uU291cmNlOiBzdHJpbmc7XHJcbiAgYXR0cmlidXRpb25TdGF0dXM6IE1ldHJpeEF0dHJpYnV0aW9uU3RhdHVzO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNZXRyaXhBdHRyaWJ1dGlvblN0YXR1cyB7XHJcbiAgQXR0cmlidXRlZCA9ICdBVFRSSUJVVEVEJyxcclxuICBOb3RBdHRyaWJ1dGVkWWV0ID0gJ05PVF9BVFRSSUJVVEVEX1lFVCcsXHJcbiAgQXR0cmlidXRpb25Ob3ROZWVkZWQgPSAnQVRUUklCVVRJT05fTk9UX05FRURFRCcsXHJcbiAgVW5rbm93biA9ICdVTktOT1dOJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIE1ldHJpeFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBpcyB0aGUgSW9uaWMgQ29yZG92YSBTREsgb2YgTWV0cml44oSiLiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCBNZXRyaXjihKIgYXQgbWV0cml4LmlyLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGlyLm1ldHJpeC5zZGtgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbTWV0cml4IENvcmRvdmEgU0RLXShodHRwczovL2dpdGh1Yi5jb20vbWV0cml4b3JnL01ldHJpeFNESy1Db3Jkb3ZhUGx1Z2luKVxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiAgaW1wb3J0IHsgTWV0cml4LCBNZXRyaXhDb25maWcgfSBmcm9tICdAaW9uaWMtbmF0aXZlL21ldHJpeCc7XHJcbiAqXHJcbiAqICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1ldHJpeDogTWV0cml4KSB7IH1cclxuICpcclxuICogIC4uLlxyXG4gKlxyXG4gKiAgY29uc3QgY29uZmlnID0gbmV3IE1ldHJpeENvbmZpZygnQVBQLUlELUhFUkUnKTtcclxuICogIC8vIFNldCBvdGhlciBjb25maWcgcHJvcGVydGllcy5cclxuICogIG1ldHJpeC5jcmVhdGUoY29uZmlnKTtcclxuICpcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIE1ldHJpeEF0dHJpYnV0aW9uXHJcbiAqIEBjbGFzc2VzXHJcbiAqIE1ldHJpeENvbmZpZ1xyXG4gKiBAZW51bXNcclxuICogTWV0cml4QXR0cmlidXRpb25TdGF0dXNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdNZXRyaXgnLFxyXG4gIHBsdWdpbjogJ2lyLm1ldHJpeC5zZGsnLFxyXG4gIHBsdWdpblJlZjogJ01ldHJpeCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tZXRyaXhvcmcvTWV0cml4U0RLLUNvcmRvdmFQbHVnaW4nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1ldHJpeCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpbml0aWFsaXplcyBNZXRyaXggU0RLXHJcbiAgICogQHBhcmFtIHtNZXRyaXhDb25maWd9IGNvbmZpZyBNZXRyaXhDb25maWcgb2JqZWN0IHVzZWQgYXMgc3RhcnRpbmcgb3B0aW9uc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGNyZWF0ZShjb25maWc6IE1ldHJpeENvbmZpZyk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdXNlZCB0byBnZXQgU2Vzc2lvbiBOdW1iZXJcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcj59IFJldHVybnMgYSBwcm9taXNlIHdpdGggc2Vzc2lvbiBudW1iZXIgdmFsdWVcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0U2Vzc2lvbk51bSgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIGFuIGV2ZW50XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNsdWcgdGhlIHNsdWcgb2YgdGhlIGV2ZW50IHRvIGJlIHRyYWNrZWRcclxuICAgKiBAcGFyYW0ge01hcDxTdHJpbmcsIFN0cmluZz4gfCBvYmplY3R9IGF0dHJpYnV0ZXMgb3B0aW9uYWwgYXR0cmlidXRlcyBvZiB0aGUgZXZlbnQgdG8gYmUgdHJhY2tlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIG5ld0V2ZW50KHNsdWc6IHN0cmluZywgYXR0cmlidXRlcz86IE1hcDxTdHJpbmcsIFN0cmluZz4gfCBvYmplY3QpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGFkZHMgdGhlIHByb3ZpZGVkIGF0dHJpYnV0ZXMgdG8gYWxsIG1ldHJpeCBldmVudHNcclxuICAgKiBAcGFyYW0ge01hcDxTdHJpbmcsIFN0cmluZz4gfCBvYmplY3R9IGF0dHJpYnV0ZXMgdGhlIGF0dHJpYnV0ZXMgdG8gYmUgYWRkZWQgdG8gYWxsIGZ1dHVyZSBldmVudHNcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBhZGRVc2VyQXR0cmlidXRlcyhhdHRyaWJ1dGVzOiBNYXA8U3RyaW5nLCBTdHJpbmc+IHwgb2JqZWN0KTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgYSByZXZlbnVlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNsdWcgdGhlIHNsdWcgb2YgdGhlIGV2ZW50IHRvIGJlIHRyYWNrZWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gYW1vdW50IHRoZSBhbW91bnQgb2YgbW9uZXkgZ2FpbmVkIGJ5IHRoZSByZXZlbnVlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGN1cnJlbmN5IChPUFRJT05BTCkgY3VycmVuY3kgb2YgdGhlIGFtb3VudFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcmRlcklkIChPUFRJT05BTCkgaWQgb2YgdGhlIHJldmVudWVcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBuZXdSZXZlbnVlKHNsdWc6IHN0cmluZywgYW1vdW50OiBudW1iZXIsIGN1cnJlbmN5PzogbnVtYmVyLCBvcmRlcklkPzogc3RyaW5nKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBCeSBtYWtpbmcgdGhpcyBjYWxsLCB0aGUgTWV0cml4IFNESyB3aWxsIHRyeSB0byBmaW5kIGlmIHRoZXJlIGlzIGFueSBuZXcgYXR0cmlidXRpb24gaW5mbyBpbnNpZGUgb2YgdGhlIGRlZXAgbGluayBhbmQgaWYgYW55LCBpdCB3aWxsIGJlIHNlbnQgdG8gdGhlIE1ldHJpeCBiYWNrZW5kLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVVJMIG9mIHRoZSBkZWVwbGlua1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGFwcFdpbGxPcGVuVXJsKHVybDogc3RyaW5nKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==