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
var NavigationBarOriginal = /** @class */ (function (_super) {
    __extends(NavigationBarOriginal, _super);
    function NavigationBarOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationBarOriginal.prototype.setUp = function (autohide) { return cordova(this, "setUp", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    NavigationBarOriginal.prototype.hideNavigationBar = function () { return cordova(this, "hideNavigationBar", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    NavigationBarOriginal.pluginName = "NavigationBar";
    NavigationBarOriginal.plugin = "cordova-plugin-navigationbar";
    NavigationBarOriginal.pluginRef = "navigationbar";
    NavigationBarOriginal.repo = "https://github.com/cranberrygame/cordova-plugin-navigationbar";
    NavigationBarOriginal.platforms = ["Android"];
    return NavigationBarOriginal;
}(IonicNativePlugin));
var NavigationBar = new NavigationBarOriginal();
export { NavigationBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdmlnYXRpb24tYmFyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTRCckMsaUNBQWlCOzs7O0lBV2xELDZCQUFLLGFBQUMsUUFBa0I7SUFheEIseUNBQWlCOzs7Ozs7d0JBckRuQjtFQTZCbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBiZXRhXHJcbiAqIEBuYW1lIE5hdmlnYXRpb24gQmFyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGUgTmF2aWdhdGlvbkJhciBwbHVnaW4gYWxsb3dzIHlvdSB0byBoaWRlIGFuZCBhdXRvIGhpZGUgdGhlIGFuZHJvaWQgbmF2aWdhdGlvbiBiYXIuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IE5hdmlnYXRpb25CYXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25hdmlnYXRpb24tYmFyL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF2aWdhdGlvbkJhcjogTmF2aWdhdGlvbkJhcikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBsZXQgYXV0b0hpZGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gKiB0aGlzLm5hdmlnYXRpb25CYXIuc2V0VXAoYXV0b0hpZGUpO1xyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdOYXZpZ2F0aW9uQmFyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uYXZpZ2F0aW9uYmFyJyxcclxuICBwbHVnaW5SZWY6ICduYXZpZ2F0aW9uYmFyJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NyYW5iZXJyeWdhbWUvY29yZG92YS1wbHVnaW4tbmF2aWdhdGlvbmJhcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkJhciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBoaWRlIGF1dG9tYXRpY2FsbHkgKG9yIG5vdCkgdGhlIG5hdmlnYXRpb24gYmFyLlxyXG4gICAqIEBwYXJhbSBhdXRvaGlkZSB7Ym9vbGVhbn1cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXHJcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxyXG4gICAgZXJyb3JOYW1lOiAnZmFpbHVyZScsXHJcbiAgfSlcclxuICBzZXRVcChhdXRvaGlkZT86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGlkZSB0aGUgbmF2aWdhdGlvbiBiYXIuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxyXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzJyxcclxuICAgIGVycm9yTmFtZTogJ2ZhaWx1cmUnLFxyXG4gIH0pXHJcbiAgaGlkZU5hdmlnYXRpb25CYXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19