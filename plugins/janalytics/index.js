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
var JAnalyticsOriginal = /** @class */ (function (_super) {
    __extends(JAnalyticsOriginal, _super);
    function JAnalyticsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JAnalyticsOriginal.prototype.init = function () { return cordova(this, "init", {}, arguments); };
    JAnalyticsOriginal.prototype.initCrashHandler = function () { return cordova(this, "initCrashHandler", {}, arguments); };
    JAnalyticsOriginal.prototype.stopCrashHandler = function () { return cordova(this, "stopCrashHandler", {}, arguments); };
    JAnalyticsOriginal.prototype.onPageStart = function (params) { return cordova(this, "onPageStart", {}, arguments); };
    JAnalyticsOriginal.prototype.onPageEnd = function (params) { return cordova(this, "onPageEnd", {}, arguments); };
    JAnalyticsOriginal.prototype.addCountEvent = function (params) { return cordova(this, "addCountEvent", {}, arguments); };
    JAnalyticsOriginal.prototype.addCalculateEvent = function (params) { return cordova(this, "addCalculateEvent", {}, arguments); };
    JAnalyticsOriginal.prototype.addLoginEvent = function (params) { return cordova(this, "addLoginEvent", {}, arguments); };
    JAnalyticsOriginal.prototype.addRegisterEvent = function (params) { return cordova(this, "addRegisterEvent", {}, arguments); };
    JAnalyticsOriginal.prototype.addBrowseEvent = function (params) { return cordova(this, "addBrowseEvent", {}, arguments); };
    JAnalyticsOriginal.prototype.addPurchaseEvent = function (params) { return cordova(this, "addPurchaseEvent", {}, arguments); };
    JAnalyticsOriginal.pluginName = "JAnalytics";
    JAnalyticsOriginal.plugin = "cordova-plugin-janalytics";
    JAnalyticsOriginal.pluginRef = "JAnalytics";
    JAnalyticsOriginal.repo = "https://github.com/jpush/cordova-plugin-janalytics";
    JAnalyticsOriginal.install = "ionic cordova plugin add cordova-plugin-janalytics --variable APP_KEY=YOUR_APP_KEY";
    JAnalyticsOriginal.installVariables = ["APP_KEY"];
    JAnalyticsOriginal.platforms = ["Android", "iOS"];
    return JAnalyticsOriginal;
}(IonicNativePlugin));
var JAnalytics = new JAnalyticsOriginal();
export { JAnalytics };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2phbmFseXRpY3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBaUN4Qyw4QkFBaUI7Ozs7SUFNL0MseUJBQUk7SUFLSixxQ0FBZ0I7SUFLaEIscUNBQWdCO0lBS2hCLGdDQUFXLGFBQUMsTUFBVztJQUt2Qiw4QkFBUyxhQUFDLE1BQVc7SUFLckIsa0NBQWEsYUFBQyxNQUFXO0lBS3pCLHNDQUFpQixhQUFDLE1BQVc7SUFLN0Isa0NBQWEsYUFBQyxNQUFXO0lBS3pCLHFDQUFnQixhQUFDLE1BQVc7SUFLNUIsbUNBQWMsYUFBQyxNQUFXO0lBSzFCLHFDQUFnQixhQUFDLE1BQVc7Ozs7Ozs7O3FCQTFGOUI7RUFrQ2dDLGlCQUFpQjtTQUFwQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBqQW5hbHl0aWNzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBKQW5hbHl0aWNzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9KQW5hbHl0aWNzL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgakFuYWx5dGljczogSkFuYWx5dGljcykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmpBbmFseXRpY3MuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0pBbmFseXRpY3MnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWphbmFseXRpY3MnLFxyXG4gIHBsdWdpblJlZjogJ0pBbmFseXRpY3MnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vanB1c2gvY29yZG92YS1wbHVnaW4tamFuYWx5dGljcycsXHJcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1qYW5hbHl0aWNzIC0tdmFyaWFibGUgQVBQX0tFWT1ZT1VSX0FQUF9LRVknLFxyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQVBQX0tFWSddLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBKQW5hbHl0aWNzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gZG9lcyBzb21ldGhpbmdcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpbml0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgaW5pdENyYXNoSGFuZGxlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0b3BDcmFzaEhhbmRsZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBvblBhZ2VTdGFydChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgb25QYWdlRW5kKHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBhZGRDb3VudEV2ZW50KHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBhZGRDYWxjdWxhdGVFdmVudChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgYWRkTG9naW5FdmVudChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgYWRkUmVnaXN0ZXJFdmVudChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgYWRkQnJvd3NlRXZlbnQocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGFkZFB1cmNoYXNlRXZlbnQocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=