import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var JAnalytics = /** @class */ (function (_super) {
    __extends(JAnalytics, _super);
    function JAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JAnalytics.prototype.init = function () { return cordova(this, "init", {}, arguments); };
    JAnalytics.prototype.initCrashHandler = function () { return cordova(this, "initCrashHandler", {}, arguments); };
    JAnalytics.prototype.stopCrashHandler = function () { return cordova(this, "stopCrashHandler", {}, arguments); };
    JAnalytics.prototype.onPageStart = function (params) { return cordova(this, "onPageStart", {}, arguments); };
    JAnalytics.prototype.onPageEnd = function (params) { return cordova(this, "onPageEnd", {}, arguments); };
    JAnalytics.prototype.addCountEvent = function (params) { return cordova(this, "addCountEvent", {}, arguments); };
    JAnalytics.prototype.addCalculateEvent = function (params) { return cordova(this, "addCalculateEvent", {}, arguments); };
    JAnalytics.prototype.addLoginEvent = function (params) { return cordova(this, "addLoginEvent", {}, arguments); };
    JAnalytics.prototype.addRegisterEvent = function (params) { return cordova(this, "addRegisterEvent", {}, arguments); };
    JAnalytics.prototype.addBrowseEvent = function (params) { return cordova(this, "addBrowseEvent", {}, arguments); };
    JAnalytics.prototype.addPurchaseEvent = function (params) { return cordova(this, "addPurchaseEvent", {}, arguments); };
    JAnalytics.pluginName = "JAnalytics";
    JAnalytics.plugin = "cordova-plugin-janalytics";
    JAnalytics.pluginRef = "JAnalytics";
    JAnalytics.repo = "https://github.com/jpush/cordova-plugin-janalytics";
    JAnalytics.install = "ionic cordova plugin add cordova-plugin-janalytics --variable APP_KEY=YOUR_APP_KEY";
    JAnalytics.installVariables = ["APP_KEY"];
    JAnalytics.platforms = ["Android", "iOS"];
    JAnalytics = __decorate([
        Injectable()
    ], JAnalytics);
    return JAnalytics;
}(IonicNativePlugin));
export { JAnalytics };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2phbmFseXRpY3Mvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBaUN4Qyw4QkFBaUI7Ozs7SUFNL0MseUJBQUk7SUFLSixxQ0FBZ0I7SUFLaEIscUNBQWdCO0lBS2hCLGdDQUFXLGFBQUMsTUFBVztJQUt2Qiw4QkFBUyxhQUFDLE1BQVc7SUFLckIsa0NBQWEsYUFBQyxNQUFXO0lBS3pCLHNDQUFpQixhQUFDLE1BQVc7SUFLN0Isa0NBQWEsYUFBQyxNQUFXO0lBS3pCLHFDQUFnQixhQUFDLE1BQVc7SUFLNUIsbUNBQWMsYUFBQyxNQUFXO0lBSzFCLHFDQUFnQixhQUFDLE1BQVc7Ozs7Ozs7O0lBeERqQixVQUFVO1FBRHRCLFVBQVUsRUFBRTtPQUNBLFVBQVU7cUJBbEN2QjtFQWtDZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIGpBbmFseXRpY3NcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEpBbmFseXRpY3MgfSBmcm9tICdAaW9uaWMtbmF0aXZlL0pBbmFseXRpY3Mvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBqQW5hbHl0aWNzOiBKQW5hbHl0aWNzKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuakFuYWx5dGljcy5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSkFuYWx5dGljcycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tamFuYWx5dGljcycsXHJcbiAgcGx1Z2luUmVmOiAnSkFuYWx5dGljcycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qcHVzaC9jb3Jkb3ZhLXBsdWdpbi1qYW5hbHl0aWNzJyxcclxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWphbmFseXRpY3MgLS12YXJpYWJsZSBBUFBfS0VZPVlPVVJfQVBQX0tFWScsXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBUFBfS0VZJ10sXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEpBbmFseXRpY3MgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBkb2VzIHNvbWV0aGluZ1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGluaXQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBpbml0Q3Jhc2hIYW5kbGVyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgc3RvcENyYXNoSGFuZGxlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIG9uUGFnZVN0YXJ0KHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBvblBhZ2VFbmQocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGFkZENvdW50RXZlbnQocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGFkZENhbGN1bGF0ZUV2ZW50KHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBhZGRMb2dpbkV2ZW50KHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBhZGRSZWdpc3RlckV2ZW50KHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBhZGRCcm93c2VFdmVudChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgYWRkUHVyY2hhc2VFdmVudChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==