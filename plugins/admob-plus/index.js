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
var Banner = /** @class */ (function () {
    function Banner() {
    }
    Banner.prototype.hide = function () { return cordova(this, "hide", { "otherPromise": true }, arguments); };
    Banner.prototype.show = function (opts) { return cordova(this, "show", { "otherPromise": true }, arguments); };
    Banner.plugin = "cordova-admob-plus";
    Banner.pluginName = "AdMob";
    Banner.pluginRef = "admob.banner";
    Banner.repo = "https://github.com/admob-plus/admob-plus";
    Banner.platforms = ["Android", "iOS"];
    return Banner;
}());
export { Banner };
var Interstitial = /** @class */ (function () {
    function Interstitial() {
    }
    Interstitial.prototype.load = function (opts) { return cordova(this, "load", { "otherPromise": true }, arguments); };
    Interstitial.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    Interstitial.plugin = "cordova-admob-plus";
    Interstitial.pluginName = "AdMob";
    Interstitial.pluginRef = "admob.interstitial";
    return Interstitial;
}());
export { Interstitial };
var RewardVideo = /** @class */ (function () {
    function RewardVideo() {
    }
    RewardVideo.prototype.load = function (opts) { return cordova(this, "load", { "otherPromise": true }, arguments); };
    RewardVideo.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    RewardVideo.plugin = "cordova-admob-plus";
    RewardVideo.pluginName = "AdMob";
    RewardVideo.pluginRef = "admob.rewardVideo";
    return RewardVideo;
}());
export { RewardVideo };
var AdMobOriginal = /** @class */ (function (_super) {
    __extends(AdMobOriginal, _super);
    function AdMobOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.banner = new Banner();
        _this.interstitial = new Interstitial();
        _this.rewardVideo = new RewardVideo();
        return _this;
    }
    AdMobOriginal.prototype.setAppMuted = function (value) { return cordova(this, "setAppMuted", { "otherPromise": true }, arguments); };
    AdMobOriginal.prototype.setAppVolume = function (value) { return cordova(this, "setAppVolume", { "otherPromise": true }, arguments); };
    AdMobOriginal.prototype.setDevMode = function (value) { return cordova(this, "setDevMode", { "sync": true }, arguments); };
    AdMobOriginal.prototype.on = function (event) {
        return fromEvent(document, event);
    };
    AdMobOriginal.platforms = ["Android", "iOS"];
    AdMobOriginal.plugin = "cordova-admob-plus";
    AdMobOriginal.pluginName = "AdMob";
    AdMobOriginal.pluginRef = "admob";
    AdMobOriginal.repo = "https://github.com/admob-plus/admob-plus";
    return AdMobOriginal;
}(IonicNativePlugin));
var AdMob = new AdMobOriginal();
export { AdMob };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FkbW9iLXBsdXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFjLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztJQXVCM0MscUJBQUk7SUFLSixxQkFBSSxhQUFDLElBQTZCOzs7Ozs7aUJBOUJwQzs7U0F1QmEsTUFBTTs7OztJQW1CakIsMkJBQUksYUFBQyxJQUE2QjtJQUtsQywyQkFBSTs7Ozt1QkEvQ047O1NBd0NhLFlBQVk7Ozs7SUFtQnZCLDBCQUFJLGFBQUMsSUFBNkI7SUFLbEMsMEJBQUk7Ozs7c0JBaEVOOztTQXlEYSxXQUFXOztJQW9CRyx5QkFBaUI7OztRQUMxQyxZQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUN0QixrQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsaUJBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDOzs7SUFHaEMsMkJBQVcsYUFBQyxLQUFjO0lBSzFCLDRCQUFZLGFBQUMsS0FBYTtJQUsxQiwwQkFBVSxhQUFDLEtBQWM7SUFJekIsa0JBQUUsR0FBRixVQUFHLEtBQWE7UUFDZCxPQUFPLFNBQVMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7O2dCQW5HSDtFQTZFMkIsaUJBQWlCO1NBQS9CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCB0eXBlIEFkVW5pdElET3B0aW9uID1cclxuICB8IHN0cmluZ1xyXG4gIHwge1xyXG4gICAgICBhbmRyb2lkOiBzdHJpbmc7XHJcbiAgICAgIGlvczogc3RyaW5nO1xyXG4gICAgfTtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBBZE1vYiBQbHVzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBZE1vYiBQbHVzIGlzIHRoZSBzdWNjZXNzb3Igb2YgY29yZG92YS1wbHVnaW4tYWRtb2ItZnJlZSwgd2hpY2ggcHJvdmlkZXMgYSBjbGVhbmVyIEFQSSBhbmQgYnVpbGQgd2l0aCBtb2Rlcm4gdG9vbHMuXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW46ICdjb3Jkb3ZhLWFkbW9iLXBsdXMnLFxyXG4gIHBsdWdpbk5hbWU6ICdBZE1vYicsXHJcbiAgcGx1Z2luUmVmOiAnYWRtb2IuYmFubmVyJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FkbW9iLXBsdXMvYWRtb2ItcGx1cycsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCYW5uZXIge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgaGlkZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaG93KG9wdHM6IHsgaWQ/OiBBZFVuaXRJRE9wdGlvbiB9KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbjogJ2NvcmRvdmEtYWRtb2ItcGx1cycsXHJcbiAgcGx1Z2luTmFtZTogJ0FkTW9iJyxcclxuICBwbHVnaW5SZWY6ICdhZG1vYi5pbnRlcnN0aXRpYWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW50ZXJzdGl0aWFsIHtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGxvYWQob3B0czogeyBpZD86IEFkVW5pdElET3B0aW9uIH0pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaG93KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW46ICdjb3Jkb3ZhLWFkbW9iLXBsdXMnLFxyXG4gIHBsdWdpbk5hbWU6ICdBZE1vYicsXHJcbiAgcGx1Z2luUmVmOiAnYWRtb2IucmV3YXJkVmlkZW8nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmV3YXJkVmlkZW8ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgbG9hZChvcHRzOiB7IGlkPzogQWRVbml0SURPcHRpb24gfSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNob3coKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtYWRtb2ItcGx1cycsXHJcbiAgcGx1Z2luTmFtZTogJ0FkTW9iJyxcclxuICBwbHVnaW5SZWY6ICdhZG1vYicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hZG1vYi1wbHVzL2FkbW9iLXBsdXMnLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBZE1vYiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBiYW5uZXIgPSBuZXcgQmFubmVyKCk7XHJcbiAgaW50ZXJzdGl0aWFsID0gbmV3IEludGVyc3RpdGlhbCgpO1xyXG4gIHJld2FyZFZpZGVvID0gbmV3IFJld2FyZFZpZGVvKCk7XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0QXBwTXV0ZWQodmFsdWU6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXRBcHBWb2x1bWUodmFsdWU6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzZXREZXZNb2RlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgb24oZXZlbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gZnJvbUV2ZW50KGRvY3VtZW50LCBldmVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==