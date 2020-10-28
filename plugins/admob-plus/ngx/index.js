import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
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
    Banner = __decorate([], Banner);
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
    Interstitial = __decorate([], Interstitial);
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
    RewardVideo = __decorate([], RewardVideo);
    return RewardVideo;
}());
export { RewardVideo };
var AdMob = /** @class */ (function (_super) {
    __extends(AdMob, _super);
    function AdMob() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.banner = new Banner();
        _this.interstitial = new Interstitial();
        _this.rewardVideo = new RewardVideo();
        return _this;
    }
    AdMob.prototype.setAppMuted = function (value) { return cordova(this, "setAppMuted", { "otherPromise": true }, arguments); };
    AdMob.prototype.setAppVolume = function (value) { return cordova(this, "setAppVolume", { "otherPromise": true }, arguments); };
    AdMob.prototype.setDevMode = function (value) { return cordova(this, "setDevMode", { "sync": true }, arguments); };
    AdMob.prototype.on = function (event) {
        return fromEvent(document, event);
    };
    AdMob.platforms = ["Android", "iOS"];
    AdMob.plugin = "cordova-admob-plus";
    AdMob.pluginName = "AdMob";
    AdMob.pluginRef = "admob";
    AdMob.repo = "https://github.com/admob-plus/admob-plus";
    AdMob = __decorate([
        Injectable()
    ], AdMob);
    return AdMob;
}(IonicNativePlugin));
export { AdMob };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FkbW9iLXBsdXMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFjLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztJQXVCM0MscUJBQUk7SUFLSixxQkFBSSxhQUFDLElBQTZCOzs7Ozs7SUFQdkIsTUFBTSxrQkFBTixNQUFNO2lCQXZCbkI7O1NBdUJhLE1BQU07Ozs7SUFtQmpCLDJCQUFJLGFBQUMsSUFBNkI7SUFLbEMsMkJBQUk7Ozs7SUFQTyxZQUFZLGtCQUFaLFlBQVk7dUJBeEN6Qjs7U0F3Q2EsWUFBWTs7OztJQW1CdkIsMEJBQUksYUFBQyxJQUE2QjtJQUtsQywwQkFBSTs7OztJQVBPLFdBQVcsa0JBQVgsV0FBVztzQkF6RHhCOztTQXlEYSxXQUFXOztJQW9CRyx5QkFBaUI7OztRQUMxQyxZQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUN0QixrQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsaUJBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDOzs7SUFHaEMsMkJBQVcsYUFBQyxLQUFjO0lBSzFCLDRCQUFZLGFBQUMsS0FBYTtJQUsxQiwwQkFBVSxhQUFDLEtBQWM7SUFJekIsa0JBQUUsR0FBRixVQUFHLEtBQWE7UUFDZCxPQUFPLFNBQVMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7O0lBdEJVLEtBQUs7UUFEakIsVUFBVSxFQUFFO09BQ0EsS0FBSztnQkE3RWxCO0VBNkUyQixpQkFBaUI7U0FBL0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IHR5cGUgQWRVbml0SURPcHRpb24gPVxyXG4gIHwgc3RyaW5nXHJcbiAgfCB7XHJcbiAgICAgIGFuZHJvaWQ6IHN0cmluZztcclxuICAgICAgaW9zOiBzdHJpbmc7XHJcbiAgICB9O1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEFkTW9iIFBsdXNcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFkTW9iIFBsdXMgaXMgdGhlIHN1Y2Nlc3NvciBvZiBjb3Jkb3ZhLXBsdWdpbi1hZG1vYi1mcmVlLCB3aGljaCBwcm92aWRlcyBhIGNsZWFuZXIgQVBJIGFuZCBidWlsZCB3aXRoIG1vZGVybiB0b29scy5cclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbjogJ2NvcmRvdmEtYWRtb2ItcGx1cycsXHJcbiAgcGx1Z2luTmFtZTogJ0FkTW9iJyxcclxuICBwbHVnaW5SZWY6ICdhZG1vYi5iYW5uZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYWRtb2ItcGx1cy9hZG1vYi1wbHVzJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJhbm5lciB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBoaWRlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNob3cob3B0czogeyBpZD86IEFkVW5pdElET3B0aW9uIH0pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luOiAnY29yZG92YS1hZG1vYi1wbHVzJyxcclxuICBwbHVnaW5OYW1lOiAnQWRNb2InLFxyXG4gIHBsdWdpblJlZjogJ2FkbW9iLmludGVyc3RpdGlhbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnRlcnN0aXRpYWwge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgbG9hZChvcHRzOiB7IGlkPzogQWRVbml0SURPcHRpb24gfSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNob3coKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbjogJ2NvcmRvdmEtYWRtb2ItcGx1cycsXHJcbiAgcGx1Z2luTmFtZTogJ0FkTW9iJyxcclxuICBwbHVnaW5SZWY6ICdhZG1vYi5yZXdhcmRWaWRlbycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXdhcmRWaWRlbyB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBsb2FkKG9wdHM6IHsgaWQ/OiBBZFVuaXRJRE9wdGlvbiB9KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2hvdygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbiAgcGx1Z2luOiAnY29yZG92YS1hZG1vYi1wbHVzJyxcclxuICBwbHVnaW5OYW1lOiAnQWRNb2InLFxyXG4gIHBsdWdpblJlZjogJ2FkbW9iJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FkbW9iLXBsdXMvYWRtb2ItcGx1cycsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFkTW9iIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIGJhbm5lciA9IG5ldyBCYW5uZXIoKTtcclxuICBpbnRlcnN0aXRpYWwgPSBuZXcgSW50ZXJzdGl0aWFsKCk7XHJcbiAgcmV3YXJkVmlkZW8gPSBuZXcgUmV3YXJkVmlkZW8oKTtcclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXRBcHBNdXRlZCh2YWx1ZTogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNldEFwcFZvbHVtZSh2YWx1ZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNldERldk1vZGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBvbihldmVudDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiBmcm9tRXZlbnQoZG9jdW1lbnQsIGV2ZW50KTtcclxuICB9XHJcbn1cclxuIl19