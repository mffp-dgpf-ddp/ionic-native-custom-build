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
import { fromEvent } from 'rxjs';
var AdMobFreeOriginal = /** @class */ (function (_super) {
    __extends(AdMobFreeOriginal, _super);
    function AdMobFreeOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience object to get event names
         * @type {Object}
         */
        _this.events = {
            BANNER_LOAD: 'admob.banner.events.LOAD',
            BANNER_LOAD_FAIL: 'admob.banner.events.LOAD_FAIL',
            BANNER_OPEN: 'admob.banner.events.OPEN',
            BANNER_CLOSE: 'admob.banner.events.CLOSE',
            BANNER_EXIT_APP: 'admob.banner.events.EXIT_APP',
            INTERSTITIAL_LOAD: 'admob.interstitial.events.LOAD',
            INTERSTITIAL_LOAD_FAIL: 'admob.interstitial.events.LOAD_FAIL',
            INTERSTITIAL_OPEN: 'admob.interstitial.events.OPEN',
            INTERSTITIAL_CLOSE: 'admob.interstitial.events.CLOSE',
            INTERSTITIAL_EXIT_APP: 'admob.interstitial.events.EXIT_APP',
            REWARD_VIDEO_LOAD: 'admob.rewardvideo.events.LOAD',
            REWARD_VIDEO_LOAD_FAIL: 'admob.rewardvideo.events.LOAD_FAIL',
            REWARD_VIDEO_OPEN: 'admob.rewardvideo.events.OPEN',
            REWARD_VIDEO_CLOSE: 'admob.rewardvideo.events.CLOSE',
            REWARD_VIDEO_EXIT_APP: 'admob.rewardvideo.events.EXIT_APP',
            REWARD_VIDEO_START: 'admob.rewardvideo.events.START',
            REWARD_VIDEO_REWARD: 'admob.rewardvideo.events.REWARD',
        };
        /**
         * Returns the AdMobFreeBanner object
         * @type {AdMobFreeBanner}
         */
        _this.banner = new AdMobFreeBanner();
        /**
         * Returns the AdMobFreeInterstitial object
         * @type {AdMobFreeInterstitial}
         */
        _this.interstitial = new AdMobFreeInterstitial();
        /**
         * Returns the AdMobFreeRewardVideo object
         * @type {AdMobFreeRewardVideo}
         */
        _this.rewardVideo = new AdMobFreeRewardVideo();
        return _this;
    }
    /**
     * Watch an event
     * @param event {string} event name
     * @return {Observable<any>}
     */
    AdMobFreeOriginal.prototype.on = function (event) {
        return fromEvent(document, event);
    };
    AdMobFreeOriginal.pluginName = "AdMobFree";
    AdMobFreeOriginal.plugin = "cordova-plugin-admob-free";
    AdMobFreeOriginal.pluginRef = "admob";
    AdMobFreeOriginal.repo = "https://github.com/ratson/cordova-plugin-admob-free";
    AdMobFreeOriginal.platforms = ["Android", "iOS"];
    return AdMobFreeOriginal;
}(IonicNativePlugin));
var AdMobFree = new AdMobFreeOriginal();
export { AdMobFree };
var AdMobFreeBanner = /** @class */ (function (_super) {
    __extends(AdMobFreeBanner, _super);
    function AdMobFreeBanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdMobFreeBanner.prototype.config = function (options) { return cordova(this, "config", { "sync": true }, arguments); };
    AdMobFreeBanner.prototype.hide = function () { return cordova(this, "hide", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.prototype.prepare = function () { return cordova(this, "prepare", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.prototype.remove = function () { return cordova(this, "remove", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.pluginName = "AdMobFree";
    AdMobFreeBanner.plugin = "cordova-plugin-admob-free";
    AdMobFreeBanner.pluginRef = "admob.banner";
    return AdMobFreeBanner;
}(IonicNativePlugin));
export { AdMobFreeBanner };
var AdMobFreeInterstitial = /** @class */ (function (_super) {
    __extends(AdMobFreeInterstitial, _super);
    function AdMobFreeInterstitial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdMobFreeInterstitial.prototype.config = function (options) { return cordova(this, "config", { "sync": true }, arguments); };
    AdMobFreeInterstitial.prototype.isReady = function () { return cordova(this, "isReady", { "otherPromise": true }, arguments); };
    AdMobFreeInterstitial.prototype.prepare = function () { return cordova(this, "prepare", { "otherPromise": true }, arguments); };
    AdMobFreeInterstitial.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    AdMobFreeInterstitial.pluginName = "AdMobFree";
    AdMobFreeInterstitial.plugin = "cordova-plugin-admob-free";
    AdMobFreeInterstitial.pluginRef = "admob.interstitial";
    return AdMobFreeInterstitial;
}(IonicNativePlugin));
export { AdMobFreeInterstitial };
var AdMobFreeRewardVideo = /** @class */ (function (_super) {
    __extends(AdMobFreeRewardVideo, _super);
    function AdMobFreeRewardVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdMobFreeRewardVideo.prototype.config = function (options) { return cordova(this, "config", { "sync": true }, arguments); };
    AdMobFreeRewardVideo.prototype.isReady = function () { return cordova(this, "isReady", { "otherPromise": true }, arguments); };
    AdMobFreeRewardVideo.prototype.prepare = function () { return cordova(this, "prepare", { "otherPromise": true }, arguments); };
    AdMobFreeRewardVideo.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    AdMobFreeRewardVideo.pluginName = "AdMobFree";
    AdMobFreeRewardVideo.plugin = "cordova-plugin-admob-free";
    AdMobFreeRewardVideo.pluginRef = "admob.rewardvideo";
    return AdMobFreeRewardVideo;
}(IonicNativePlugin));
export { AdMobFreeRewardVideo };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FkbW9iLWZyZWUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFjLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFzS2QsNkJBQWlCOzs7UUFDOUM7OztXQUdHO1FBQ0gsWUFBTSxHQUFHO1lBQ1AsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxnQkFBZ0IsRUFBRSwrQkFBK0I7WUFDakQsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxZQUFZLEVBQUUsMkJBQTJCO1lBQ3pDLGVBQWUsRUFBRSw4QkFBOEI7WUFFL0MsaUJBQWlCLEVBQUUsZ0NBQWdDO1lBQ25ELHNCQUFzQixFQUFFLHFDQUFxQztZQUM3RCxpQkFBaUIsRUFBRSxnQ0FBZ0M7WUFDbkQsa0JBQWtCLEVBQUUsaUNBQWlDO1lBQ3JELHFCQUFxQixFQUFFLG9DQUFvQztZQUUzRCxpQkFBaUIsRUFBRSwrQkFBK0I7WUFDbEQsc0JBQXNCLEVBQUUsb0NBQW9DO1lBQzVELGlCQUFpQixFQUFFLCtCQUErQjtZQUNsRCxrQkFBa0IsRUFBRSxnQ0FBZ0M7WUFDcEQscUJBQXFCLEVBQUUsbUNBQW1DO1lBQzFELGtCQUFrQixFQUFFLGdDQUFnQztZQUNwRCxtQkFBbUIsRUFBRSxpQ0FBaUM7U0FDdkQsQ0FBQztRQVdGOzs7V0FHRztRQUNILFlBQU0sR0FBb0IsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUVoRDs7O1dBR0c7UUFDSCxrQkFBWSxHQUEwQixJQUFJLHFCQUFxQixFQUFFLENBQUM7UUFFbEU7OztXQUdHO1FBQ0gsaUJBQVcsR0FBeUIsSUFBSSxvQkFBb0IsRUFBRSxDQUFDOzs7SUF6Qi9EOzs7O09BSUc7SUFDSCxzQkFBRSxHQUFGLFVBQUcsS0FBYTtRQUNkLE9BQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7b0JBMU1IO0VBd0srQixpQkFBaUI7U0FBbkMsU0FBUzs7SUErRGUsbUNBQWlCOzs7O0lBT3BELGdDQUFNLGFBQUMsT0FBOEI7SUFTckMsOEJBQUk7SUFTSixpQ0FBTztJQVNQLGdDQUFNO0lBU04sOEJBQUk7Ozs7MEJBbFJOO0VBdU9xQyxpQkFBaUI7U0FBekMsZUFBZTs7SUF3RGUseUNBQWlCOzs7O0lBTzFELHNDQUFNLGFBQUMsT0FBb0M7SUFTM0MsdUNBQU87SUFTUCx1Q0FBTztJQVNQLG9DQUFJOzs7O2dDQWpVTjtFQStSMkMsaUJBQWlCO1NBQS9DLHFCQUFxQjs7SUErQ1Esd0NBQWlCOzs7O0lBT3pELHFDQUFNLGFBQUMsT0FBbUM7SUFTMUMsc0NBQU87SUFTUCxzQ0FBTztJQVNQLG1DQUFJOzs7OytCQWhYTjtFQThVMEMsaUJBQWlCO1NBQTlDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZE1vYkZyZWVCYW5uZXJDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIEFkIFVuaXQgSURcclxuICAgKi9cclxuICBpZD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBSZWNlaXZpbmcgdGVzdCBhZFxyXG4gICAqL1xyXG4gIGlzVGVzdGluZz86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogQXV0byBzaG93IGFkIHdoZW4gbG9hZGVkXHJcbiAgICovXHJcbiAgYXV0b1Nob3c/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIENoaWxkLWRpcmVjdGVkIHNldHRpbmcuIERlZmF1bHQgaXMgbm90IGNhbGxpbmcgYHRhZ0ZvckNoaWxkRGlyZWN0ZWRUcmVhdG1lbnRgLlxyXG4gICAqIFNldCB0byBgdHJ1ZWAgZm9yIGB0YWdGb3JDaGlsZERpcmVjdGVkVHJlYXRtZW50KHRydWUpYC5cclxuICAgKiBTZXQgdG8gYGZhbHNlYCBmb3IgYHRhZ0ZvckNoaWxkRGlyZWN0ZWRUcmVhdG1lbnQoZmFsc2UpYC5cclxuICAgKi9cclxuICBmb3JDaGlsZD86IGJvb2xlYW4gfCBudWxsO1xyXG4gIC8qKlxyXG4gICAqIERlc2lnbmVkIGZvciBGYW1pbGllcyBzZXR0aW5nLiBBbmRyb2lkLW9ubHkuIERlZmF1bHQgaXMgbm90IGNhbGxpbmcgc2V0SXNEZXNpZ25lZEZvckZhbWlsaWVzLlxyXG4gICAqIFNldCB0byBgdHJ1ZWAgZm9yIGBzZXRJc0Rlc2lnbmVkRm9yRmFtaWxpZXModHJ1ZSlgLlxyXG4gICAqIFNldCB0byBgZmFsc2VgIGZvciBgc2V0SXNEZXNpZ25lZEZvckZhbWlsaWVzKGZhbHNlKWAuXHJcbiAgICovXHJcbiAgZm9yRmFtaWx5PzogYm9vbGVhbiB8IG51bGw7XHJcbiAgLyoqXHJcbiAgICogTG9jYXRpb24gdGFyZ2V0aW5nLiBJdCBhY2NlcHQgYW4gYXJyYXkgaW4gdGhlIGZvcm0gb2YgYFtsYXRpdHVkZSwgbG9uZ2l0dWRlXWAuXHJcbiAgICogQW5kcm9pZC1vbmx5LiBEZWZhdWx0IGlzIG5vdCBjYWxsaW5nIGBzZXRMYXRpdHVkZWAgYW5kIGBzZXRMb25naXR1ZGVgLlxyXG4gICAqL1xyXG4gIGxvY2F0aW9uPzogbnVtYmVyW10gfCBudWxsO1xyXG4gIC8qKlxyXG4gICAqIFNldCB0byB0cnVlLCB0byBwdXQgYmFubmVyIGF0IHRvcFxyXG4gICAqL1xyXG4gIGJhbm5lckF0VG9wPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBTZXQgdG8gdHJ1ZSwgdG8gYWxsb3cgYmFubmVyIG92ZXJsYXAgV2ViVmlld1xyXG4gICAqL1xyXG4gIG92ZXJsYXA/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIFNldCB0byB0cnVlIHRvIGF2b2lkIGlvczcgc3RhdHVzIGJhciBvdmVybGFwXHJcbiAgICovXHJcbiAgb2Zmc2V0VG9wQmFyPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBCYW5uZXIgIHNpemVcclxuICAgKi9cclxuICBzaXplPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkTW9iRnJlZUludGVyc3RpdGlhbENvbmZpZyB7XHJcbiAgLyoqXHJcbiAgICogQWQgVW5pdCBJRFxyXG4gICAqL1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFJlY2VpdmluZyB0ZXN0IGFkXHJcbiAgICovXHJcbiAgaXNUZXN0aW5nPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBBdXRvIHNob3cgYWQgd2hlbiBsb2FkZWRcclxuICAgKi9cclxuICBhdXRvU2hvdz86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogQ2hpbGQtZGlyZWN0ZWQgc2V0dGluZy4gRGVmYXVsdCBpcyBub3QgY2FsbGluZyBgdGFnRm9yQ2hpbGREaXJlY3RlZFRyZWF0bWVudGAuXHJcbiAgICogU2V0IHRvIGB0cnVlYCBmb3IgYHRhZ0ZvckNoaWxkRGlyZWN0ZWRUcmVhdG1lbnQodHJ1ZSlgLlxyXG4gICAqIFNldCB0byBgZmFsc2VgIGZvciBgdGFnRm9yQ2hpbGREaXJlY3RlZFRyZWF0bWVudChmYWxzZSlgLlxyXG4gICAqL1xyXG4gIGZvckNoaWxkPzogYm9vbGVhbiB8IG51bGw7XHJcbiAgLyoqXHJcbiAgICogRGVzaWduZWQgZm9yIEZhbWlsaWVzIHNldHRpbmcuIEFuZHJvaWQtb25seS4gRGVmYXVsdCBpcyBub3QgY2FsbGluZyBzZXRJc0Rlc2lnbmVkRm9yRmFtaWxpZXMuXHJcbiAgICogU2V0IHRvIGB0cnVlYCBmb3IgYHNldElzRGVzaWduZWRGb3JGYW1pbGllcyh0cnVlKWAuXHJcbiAgICogU2V0IHRvIGBmYWxzZWAgZm9yIGBzZXRJc0Rlc2lnbmVkRm9yRmFtaWxpZXMoZmFsc2UpYC5cclxuICAgKi9cclxuICBmb3JGYW1pbHk/OiBib29sZWFuIHwgbnVsbDtcclxuICAvKipcclxuICAgKiBMb2NhdGlvbiB0YXJnZXRpbmcuIEl0IGFjY2VwdCBhbiBhcnJheSBpbiB0aGUgZm9ybSBvZiBgW2xhdGl0dWRlLCBsb25naXR1ZGVdYC5cclxuICAgKiBBbmRyb2lkLW9ubHkuIERlZmF1bHQgaXMgbm90IGNhbGxpbmcgYHNldExhdGl0dWRlYCBhbmQgYHNldExvbmdpdHVkZWAuXHJcbiAgICovXHJcbiAgbG9jYXRpb24/OiBudW1iZXJbXSB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRNb2JGcmVlUmV3YXJkVmlkZW9Db25maWcge1xyXG4gIC8qKlxyXG4gICAqIEFkIFVuaXQgSURcclxuICAgKi9cclxuICBpZD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBSZWNlaXZpbmcgdGVzdCBhZFxyXG4gICAqL1xyXG4gIGlzVGVzdGluZz86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogQXV0byBzaG93IGFkIHdoZW4gbG9hZGVkXHJcbiAgICovXHJcbiAgYXV0b1Nob3c/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIENoaWxkLWRpcmVjdGVkIHNldHRpbmcuIERlZmF1bHQgaXMgbm90IGNhbGxpbmcgYHRhZ0ZvckNoaWxkRGlyZWN0ZWRUcmVhdG1lbnRgLlxyXG4gICAqIFNldCB0byBgdHJ1ZWAgZm9yIGB0YWdGb3JDaGlsZERpcmVjdGVkVHJlYXRtZW50KHRydWUpYC5cclxuICAgKiBTZXQgdG8gYGZhbHNlYCBmb3IgYHRhZ0ZvckNoaWxkRGlyZWN0ZWRUcmVhdG1lbnQoZmFsc2UpYC5cclxuICAgKi9cclxuICBmb3JDaGlsZD86IGJvb2xlYW4gfCBudWxsO1xyXG4gIC8qKlxyXG4gICAqIERlc2lnbmVkIGZvciBGYW1pbGllcyBzZXR0aW5nLiBBbmRyb2lkLW9ubHkuIERlZmF1bHQgaXMgbm90IGNhbGxpbmcgc2V0SXNEZXNpZ25lZEZvckZhbWlsaWVzLlxyXG4gICAqIFNldCB0byBgdHJ1ZWAgZm9yIGBzZXRJc0Rlc2lnbmVkRm9yRmFtaWxpZXModHJ1ZSlgLlxyXG4gICAqIFNldCB0byBgZmFsc2VgIGZvciBgc2V0SXNEZXNpZ25lZEZvckZhbWlsaWVzKGZhbHNlKWAuXHJcbiAgICovXHJcbiAgZm9yRmFtaWx5PzogYm9vbGVhbiB8IG51bGw7XHJcbiAgLyoqXHJcbiAgICogTG9jYXRpb24gdGFyZ2V0aW5nLiBJdCBhY2NlcHQgYW4gYXJyYXkgaW4gdGhlIGZvcm0gb2YgYFtsYXRpdHVkZSwgbG9uZ2l0dWRlXWAuXHJcbiAgICogQW5kcm9pZC1vbmx5LiBEZWZhdWx0IGlzIG5vdCBjYWxsaW5nIGBzZXRMYXRpdHVkZWAgYW5kIGBzZXRMb25naXR1ZGVgLlxyXG4gICAqL1xyXG4gIGxvY2F0aW9uPzogbnVtYmVyW10gfCBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQWRNb2IgRnJlZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBmcmVlLCBubyBhZC1zaGFyaW5nIHZlcnNpb24gb2YgR29vZ2xlIEFkTW9iIHBsdWdpbiBmb3IgQ29yZG92YS5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1hZG1vYi1mcmVlYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0FkTW9iIEZyZWUgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9yYXRzb24vY29yZG92YS1wbHVnaW4tYWRtb2ItZnJlZSkuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEFkTW9iRnJlZSwgQWRNb2JGcmVlQmFubmVyQ29uZmlnIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hZG1vYi1mcmVlL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYWRtb2JGcmVlOiBBZE1vYkZyZWUpIHsgfVxyXG4gKlxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogY29uc3QgYmFubmVyQ29uZmlnOiBBZE1vYkZyZWVCYW5uZXJDb25maWcgPSB7XHJcbiAqICAvLyBhZGQgeW91ciBjb25maWcgaGVyZVxyXG4gKiAgLy8gZm9yIHRoZSBzYWtlIG9mIHRoaXMgZXhhbXBsZSB3ZSB3aWxsIGp1c3QgdXNlIHRoZSB0ZXN0IGNvbmZpZ1xyXG4gKiAgaXNUZXN0aW5nOiB0cnVlLFxyXG4gKiAgYXV0b1Nob3c6IHRydWVcclxuICogfTtcclxuICogdGhpcy5hZG1vYkZyZWUuYmFubmVyLmNvbmZpZyhiYW5uZXJDb25maWcpO1xyXG4gKlxyXG4gKiB0aGlzLmFkbW9iRnJlZS5iYW5uZXIucHJlcGFyZSgpXHJcbiAqICAgLnRoZW4oKCkgPT4ge1xyXG4gKiAgICAgLy8gYmFubmVyIEFkIGlzIHJlYWR5XHJcbiAqICAgICAvLyBpZiB3ZSBzZXQgYXV0b1Nob3cgdG8gZmFsc2UsIHRoZW4gd2Ugd2lsbCBuZWVkIHRvIGNhbGwgdGhlIHNob3cgbWV0aG9kIGhlcmVcclxuICogICB9KVxyXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICpcclxuICpcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIEFkTW9iRnJlZUJhbm5lckNvbmZpZ1xyXG4gKiBBZE1vYkZyZWVJbnRlcnN0aXRpYWxDb25maWdcclxuICogQWRNb2JGcmVlUmV3YXJkVmlkZW9Db25maWdcclxuICogQGNsYXNzZXNcclxuICogQWRNb2JGcmVlQmFubmVyXHJcbiAqIEFkTW9iRnJlZUludGVyc3RpdGlhbFxyXG4gKiBBZE1vYkZyZWVSZXdhcmRWaWRlb1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0FkTW9iRnJlZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYWRtb2ItZnJlZScsXHJcbiAgcGx1Z2luUmVmOiAnYWRtb2InLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcmF0c29uL2NvcmRvdmEtcGx1Z2luLWFkbW9iLWZyZWUnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBZE1vYkZyZWUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2Ugb2JqZWN0IHRvIGdldCBldmVudCBuYW1lc1xyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXHJcbiAgZXZlbnRzID0ge1xyXG4gICAgQkFOTkVSX0xPQUQ6ICdhZG1vYi5iYW5uZXIuZXZlbnRzLkxPQUQnLFxyXG4gICAgQkFOTkVSX0xPQURfRkFJTDogJ2FkbW9iLmJhbm5lci5ldmVudHMuTE9BRF9GQUlMJyxcclxuICAgIEJBTk5FUl9PUEVOOiAnYWRtb2IuYmFubmVyLmV2ZW50cy5PUEVOJyxcclxuICAgIEJBTk5FUl9DTE9TRTogJ2FkbW9iLmJhbm5lci5ldmVudHMuQ0xPU0UnLFxyXG4gICAgQkFOTkVSX0VYSVRfQVBQOiAnYWRtb2IuYmFubmVyLmV2ZW50cy5FWElUX0FQUCcsXHJcblxyXG4gICAgSU5URVJTVElUSUFMX0xPQUQ6ICdhZG1vYi5pbnRlcnN0aXRpYWwuZXZlbnRzLkxPQUQnLFxyXG4gICAgSU5URVJTVElUSUFMX0xPQURfRkFJTDogJ2FkbW9iLmludGVyc3RpdGlhbC5ldmVudHMuTE9BRF9GQUlMJyxcclxuICAgIElOVEVSU1RJVElBTF9PUEVOOiAnYWRtb2IuaW50ZXJzdGl0aWFsLmV2ZW50cy5PUEVOJyxcclxuICAgIElOVEVSU1RJVElBTF9DTE9TRTogJ2FkbW9iLmludGVyc3RpdGlhbC5ldmVudHMuQ0xPU0UnLFxyXG4gICAgSU5URVJTVElUSUFMX0VYSVRfQVBQOiAnYWRtb2IuaW50ZXJzdGl0aWFsLmV2ZW50cy5FWElUX0FQUCcsXHJcblxyXG4gICAgUkVXQVJEX1ZJREVPX0xPQUQ6ICdhZG1vYi5yZXdhcmR2aWRlby5ldmVudHMuTE9BRCcsXHJcbiAgICBSRVdBUkRfVklERU9fTE9BRF9GQUlMOiAnYWRtb2IucmV3YXJkdmlkZW8uZXZlbnRzLkxPQURfRkFJTCcsXHJcbiAgICBSRVdBUkRfVklERU9fT1BFTjogJ2FkbW9iLnJld2FyZHZpZGVvLmV2ZW50cy5PUEVOJyxcclxuICAgIFJFV0FSRF9WSURFT19DTE9TRTogJ2FkbW9iLnJld2FyZHZpZGVvLmV2ZW50cy5DTE9TRScsXHJcbiAgICBSRVdBUkRfVklERU9fRVhJVF9BUFA6ICdhZG1vYi5yZXdhcmR2aWRlby5ldmVudHMuRVhJVF9BUFAnLFxyXG4gICAgUkVXQVJEX1ZJREVPX1NUQVJUOiAnYWRtb2IucmV3YXJkdmlkZW8uZXZlbnRzLlNUQVJUJyxcclxuICAgIFJFV0FSRF9WSURFT19SRVdBUkQ6ICdhZG1vYi5yZXdhcmR2aWRlby5ldmVudHMuUkVXQVJEJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBXYXRjaCBhbiBldmVudFxyXG4gICAqIEBwYXJhbSBldmVudCB7c3RyaW5nfSBldmVudCBuYW1lXHJcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIG9uKGV2ZW50OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIGZyb21FdmVudChkb2N1bWVudCwgZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgQWRNb2JGcmVlQmFubmVyIG9iamVjdFxyXG4gICAqIEB0eXBlIHtBZE1vYkZyZWVCYW5uZXJ9XHJcbiAgICovXHJcbiAgYmFubmVyOiBBZE1vYkZyZWVCYW5uZXIgPSBuZXcgQWRNb2JGcmVlQmFubmVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIEFkTW9iRnJlZUludGVyc3RpdGlhbCBvYmplY3RcclxuICAgKiBAdHlwZSB7QWRNb2JGcmVlSW50ZXJzdGl0aWFsfVxyXG4gICAqL1xyXG4gIGludGVyc3RpdGlhbDogQWRNb2JGcmVlSW50ZXJzdGl0aWFsID0gbmV3IEFkTW9iRnJlZUludGVyc3RpdGlhbCgpO1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBBZE1vYkZyZWVSZXdhcmRWaWRlbyBvYmplY3RcclxuICAgKiBAdHlwZSB7QWRNb2JGcmVlUmV3YXJkVmlkZW99XHJcbiAgICovXHJcbiAgcmV3YXJkVmlkZW86IEFkTW9iRnJlZVJld2FyZFZpZGVvID0gbmV3IEFkTW9iRnJlZVJld2FyZFZpZGVvKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQWRNb2JGcmVlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hZG1vYi1mcmVlJyxcclxuICBwbHVnaW5SZWY6ICdhZG1vYi5iYW5uZXInLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRNb2JGcmVlQmFubmVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBjb25maWdcclxuICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAqIEByZXR1cm4ge0FkTW9iRnJlZUJhbm5lckNvbmZpZ31cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBjb25maWcob3B0aW9uczogQWRNb2JGcmVlQmFubmVyQ29uZmlnKTogQWRNb2JGcmVlQmFubmVyQ29uZmlnIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpZGUgdGhlIGJhbm5lclxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGhpZGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBiYW5uZXJcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBwcmVwYXJlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgdGhlIGJhbm5lclxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHJlbW92ZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyB0aGUgYmFubmVyXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2hvdygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdBZE1vYkZyZWUnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFkbW9iLWZyZWUnLFxyXG4gIHBsdWdpblJlZjogJ2FkbW9iLmludGVyc3RpdGlhbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZE1vYkZyZWVJbnRlcnN0aXRpYWwgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIGNvbmZpZ1xyXG4gICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICogQHJldHVybiB7QWRNb2JGcmVlSW50ZXJzdGl0aWFsQ29uZmlnfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGNvbmZpZyhvcHRpb25zOiBBZE1vYkZyZWVJbnRlcnN0aXRpYWxDb25maWcpOiBBZE1vYkZyZWVJbnRlcnN0aXRpYWxDb25maWcge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgaW50ZXJzdGl0aWFsIGlzIHJlYWR5XHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgaXNSZWFkeSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJlcGFyZSBpbnRlcnN0aXRpYWxcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBwcmVwYXJlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93IHRoZSBpbnRlcnN0aXRpYWxcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaG93KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0FkTW9iRnJlZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYWRtb2ItZnJlZScsXHJcbiAgcGx1Z2luUmVmOiAnYWRtb2IucmV3YXJkdmlkZW8nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRNb2JGcmVlUmV3YXJkVmlkZW8gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7QWRNb2JGcmVlUmV3YXJkVmlkZW9Db25maWd9IG9wdGlvbnMgQWRtb2IgcmV3YXJkIGNvbmZpZ1xyXG4gICAqIEByZXR1cm4ge0FkTW9iRnJlZVJld2FyZFZpZGVvQ29uZmlnfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGNvbmZpZyhvcHRpb25zOiBBZE1vYkZyZWVSZXdhcmRWaWRlb0NvbmZpZyk6IEFkTW9iRnJlZVJld2FyZFZpZGVvQ29uZmlnIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHJld2FyZCB2aWRlbyBpcyByZWFkeVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGlzUmVhZHkoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZXBhcmUgcmV3YXJkIHZpZGVvXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcHJlcGFyZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyB0aGUgcmV3YXJkIHZpZGVvXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2hvdygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=