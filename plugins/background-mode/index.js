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
import { Observable } from 'rxjs';
var BackgroundModeOriginal = /** @class */ (function (_super) {
    __extends(BackgroundModeOriginal, _super);
    function BackgroundModeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackgroundModeOriginal.prototype.enable = function () { return cordova(this, "enable", { "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.disable = function () { return cordova(this, "disable", { "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.setEnabled = function (enable) { return cordova(this, "setEnabled", { "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.fireEvent = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return cordova(this, "fireEvent", { "sync": true }, arguments);
    };
    BackgroundModeOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", { "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.isActive = function () { return cordova(this, "isActive", { "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.setDefaults = function (overrides) { return cordova(this, "setDefaults", { "platforms": ["Android"] }, arguments); };
    BackgroundModeOriginal.prototype.configure = function (options) { return cordova(this, "configure", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.on = function (event) { return cordova(this, "on", { "observable": true, "clearFunction": "un", "clearWithArgs": true }, arguments); };
    BackgroundModeOriginal.prototype.un = function (event, callback) { return cordova(this, "un", {}, arguments); };
    BackgroundModeOriginal.prototype.moveToBackground = function () { return cordova(this, "moveToBackground", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.disableWebViewOptimizations = function () { return cordova(this, "disableWebViewOptimizations", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.moveToForeground = function () { return cordova(this, "moveToForeground", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.overrideBackButton = function () { return cordova(this, "overrideBackButton", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.excludeFromTaskList = function () { return cordova(this, "excludeFromTaskList", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.isScreenOff = function (fn) { return cordova(this, "isScreenOff", { "platforms": ["Android"] }, arguments); };
    BackgroundModeOriginal.prototype.wakeUp = function () { return cordova(this, "wakeUp", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.unlock = function () { return cordova(this, "unlock", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.prototype.disableBatteryOptimizations = function () { return cordova(this, "disableBatteryOptimizations", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundModeOriginal.pluginName = "BackgroundMode";
    BackgroundModeOriginal.plugin = "cordova-plugin-background-mode";
    BackgroundModeOriginal.pluginRef = "cordova.plugins.backgroundMode";
    BackgroundModeOriginal.repo = "https://github.com/katzer/cordova-plugin-background-mode";
    BackgroundModeOriginal.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "Windows"];
    return BackgroundModeOriginal;
}(IonicNativePlugin));
var BackgroundMode = new BackgroundModeOriginal();
export { BackgroundMode };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhY2tncm91bmQtbW9kZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTZFRSxrQ0FBaUI7Ozs7SUFRbkQsK0JBQU07SUFTTixnQ0FBTztJQWNQLG1DQUFVLGFBQUMsTUFBZTtJQWExQixrQ0FBUyxhQUFDLEtBQWE7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOzs7O0lBV3ZDLGtDQUFTO0lBV1QsaUNBQVE7SUFhUixvQ0FBVyxhQUFDLFNBQXVDO0lBV25ELGtDQUFTLGFBQUMsT0FBcUM7SUFhL0MsMkJBQUUsYUFBQyxLQUFhO0lBV2hCLDJCQUFFLGFBQUMsS0FBYSxFQUFFLFFBQWtDO0lBV3BELHlDQUFnQjtJQVNoQixvREFBMkI7SUFTM0IseUNBQWdCO0lBU2hCLDJDQUFrQjtJQVNsQiw0Q0FBbUI7SUFVbkIsb0NBQVcsYUFBQyxFQUEyQjtJQVN2QywrQkFBTTtJQVNOLCtCQUFNO0lBU04sb0RBQTJCOzs7Ozs7eUJBclI3QjtFQStFb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQ29uZmlndXJhdGlvbnMgaXRlbXMgdGhhdCBjYW4gYmUgdXBkYXRlZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFja2dyb3VuZE1vZGVDb25maWd1cmF0aW9uIHtcclxuICAvKipcclxuICAgKiBUaXRsZSBvZiB0aGUgYmFja2dyb3VuZCB0YXNrXHJcbiAgICovXHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc2NyaXB0aW9uIG9mIGJhY2tncm91bmQgdGFza1xyXG4gICAqL1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgd2lsbCBsb29rIGZvciBgPGljb24gbmFtZT4ucG5nYCBpbiBwbGF0Zm9ybXMvYW5kcm9pZC9yZXMvZHJhd2FibGV8bWlwbWFwXHJcbiAgICovXHJcbiAgaWNvbj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBub3RpZmljYXRpb24gY2lyY2xlXHJcbiAgICovXHJcbiAgY29sb3I/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGFwcCB3aWxsIGNvbWUgdG8gZm9yZWdyb3VuZCB3aGVuIHRhcHBpbmcgb24gdGhlIG5vdGlmaWNhdGlvbi4gSWYgZmFsc2UsIHBsdWdpbiB3b24ndCBjb21lIHRvIGZvcmVncm91bmQgd2hlbiB0YXBwZWQuXHJcbiAgICovXHJcbiAgcmVzdW1lPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiBzZXQgdG8gZmFsc2UgbWFrZXMgdGhlIG5vdGlmaWNhdGlvbnMgdmlzaWJsZSBvbiBsb2NrIHNjcmVlbiAoQW5kcm9pZCA1LjArKVxyXG4gICAqL1xyXG4gIGhpZGRlbj86IGJvb2xlYW47XHJcblxyXG4gIC8qKiBCaWcgdGV4dCAqL1xyXG4gIGJpZ1RleHQ/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgdGV4dCB0aGF0IHNjcm9sbHMgaXRzZWxmIG9uIHN0YXR1c2JhclxyXG4gICAqL1xyXG4gIHRpY2tlcj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogaWYgdHJ1ZSBwbHVnaW4gd2lsbCBub3QgZGlzcGxheSBhIG5vdGlmaWNhdGlvbi4gRGVmYXVsdCBpcyBmYWxzZS5cclxuICAgKi9cclxuICBzaWxlbnQ/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQmFja2dyb3VuZCBNb2RlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIHBsdWdpbiB0byBwcmV2ZW50IHRoZSBhcHAgZnJvbSBnb2luZyB0byBzbGVlcCB3aGlsZSBpbiBiYWNrZ3JvdW5kLlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC1tb2RlLiBGb3IgbW9yZSBpbmZvIGFib3V0IHBsdWdpbiwgdmlzaXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC1tb2RlXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEJhY2tncm91bmRNb2RlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYWNrZ3JvdW5kLW1vZGUvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYWNrZ3JvdW5kTW9kZTogQmFja2dyb3VuZE1vZGUpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5iYWNrZ3JvdW5kTW9kZS5lbmFibGUoKTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIEJhY2tncm91bmRNb2RlQ29uZmlndXJhdGlvblxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0JhY2tncm91bmRNb2RlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1iYWNrZ3JvdW5kLW1vZGUnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5iYWNrZ3JvdW5kTW9kZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC1tb2RlJyxcclxuICBwbGF0Zm9ybXM6IFsnQW1hem9uRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZE1vZGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogRW5hYmxlIHRoZSBiYWNrZ3JvdW5kIG1vZGUuXHJcbiAgICogT25jZSBjYWxsZWQsIHByZXZlbnRzIHRoZSBhcHAgZnJvbSBiZWluZyBwYXVzZWQgd2hpbGUgaW4gYmFja2dyb3VuZC5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgZW5hYmxlKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzYWJsZSB0aGUgYmFja2dyb3VuZCBtb2RlLlxyXG4gICAqIE9uY2UgdGhlIGJhY2tncm91bmQgbW9kZSBoYXMgYmVlbiBkaXNhYmxlZCwgdGhlIGFwcCB3aWxsIGJlIHBhdXNlZCB3aGVuIGluIGJhY2tncm91bmQuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIGRpc2FibGUoKTogdm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSB0aGUgYmFja2dyb3VuZCBtb2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVuYWJsZSB7Ym9vbGVhbn0gVGhlIHN0YXR1cyB0byBzZXQgZm9yLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7dm9pZH1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgc2V0RW5hYmxlZChlbmFibGU6IGJvb2xlYW4pOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpcmUgZXZlbnQgd2l0aCBnaXZlbiBhcmd1bWVudHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZXZlbnQge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50J3MgbmFtZS5cclxuICAgKiBAcGFyYW0gYXJncyB7YXJyYXl9IFRoZSBjYWxsYmFjaydzIGFyZ3VtZW50cy5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgZmlyZUV2ZW50KGV2ZW50OiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogc3RyaW5nIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBiYWNrZ3JvdW5kIG1vZGUgaXMgZW5hYmxlZCBvciBub3QuXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHJldHVybnMgYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBiYWNrZ3JvdW5kIG1vZGUgaXMgZW5hYmxlZC5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FuIGJlIHVzZWQgdG8gZ2V0IHRoZSBpbmZvcm1hdGlvbiBpZiB0aGUgYmFja2dyb3VuZCBtb2RlIGlzIGFjdGl2ZS5cclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmV0dXJucyBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGJhY2tncm91bmQgbW9kZSBpcyBhY3RpdmUuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3ZlcndyaXRlIHRoZSBkZWZhdWx0IHNldHRpbmdzLlxyXG4gICAqIEF2YWlsYWJsZSBvbmx5IGZvciBBbmRyb2lkIHBsYXRmb3JtLlxyXG4gICAqIEBwYXJhbSBvdmVycmlkZXMge0JhY2tncm91bmRNb2RlQ29uZmlndXJhdGlvbn0gRGljdCBvZiBvcHRpb25zIHRvIGJlIG92ZXJyaWRkZW4uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG4gIH0pXHJcbiAgc2V0RGVmYXVsdHMob3ZlcnJpZGVzPzogQmFja2dyb3VuZE1vZGVDb25maWd1cmF0aW9uKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBNb2RpZnkgdGhlIGRpc3BsYXllZCBpbmZvcm1hdGlvbi5cclxuICAgKiBBdmFpbGFibGUgb25seSBmb3IgQW5kcm9pZCBwbGF0Zm9ybS5cclxuICAgKiBAcGFyYW0ge0JhY2tncm91bmRNb2RlQ29uZmlndXJhdGlvbn0gW29wdGlvbnNdIEFueSBvcHRpb25zIHlvdSB3YW50IHRvIHVwZGF0ZS4gU2VlIHRhYmxlIGJlbG93LlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgY29uZmlndXJlKG9wdGlvbnM/OiBCYWNrZ3JvdW5kTW9kZUNvbmZpZ3VyYXRpb24pOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIGNhbGxiYWNrIGZvciBnaXZlbiBldmVudC5cclxuICAgKiA+IEF2YWlsYWJsZSBldmVudHMgYXJlIGBlbmFibGVgLCBgZGlzYWJsZWAsIGBhY3RpdmF0ZWAsIGBkZWFjdGl2YXRlYCBhbmQgYGZhaWx1cmVgLlxyXG4gICAqIEBwYXJhbSBldmVudCB7c3RyaW5nfSBFdmVudCBuYW1lXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ3VuJyxcclxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWUsXHJcbiAgfSlcclxuICBvbihldmVudDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExpc3RlbiBmb3IgZXZlbnRzIHRoYXQgdGhlIHBsdWdpbiBmaXJlcy4gQXZhaWxhYmxlIGV2ZW50cyBhcmUgYGVuYWJsZWAsIGBkaXNhYmxlYCwgYGFjdGl2YXRlYCwgYGRlYWN0aXZhdGVgIGFuZCBgZmFpbHVyZWAuXHJcbiAgICogQHBhcmFtIGV2ZW50IHtzdHJpbmd9IEV2ZW50IG5hbWVcclxuICAgKiBAcGFyYW0gY2FsbGJhY2sge2Z1bmN0aW9ufSBUaGUgZnVuY3Rpb24gdG8gYmUgZXhlYyBhcyBjYWxsYmFjay5cclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB1bihldmVudDogc3RyaW5nLCBjYWxsYmFjazogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBbmRyb2lkIGFsbG93cyB0byBwcm9ncmFtbWF0aWNhbGx5IG1vdmUgZnJvbSBmb3JlZ3JvdW5kIHRvIGJhY2tncm91bmQuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBtb3ZlVG9CYWNrZ3JvdW5kKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogRW5hYmxlIEdQUy10cmFja2luZyBpbiBiYWNrZ3JvdW5kIChBbmRyb2lkKS5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIGRpc2FibGVXZWJWaWV3T3B0aW1pemF0aW9ucygpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFuZHJvaWQgYWxsb3dzIHRvIHByb2dyYW1tYXRpY2FsbHkgbW92ZSBmcm9tIGJhY2tncm91bmQgdG8gZm9yZWdyb3VuZC5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIG1vdmVUb0ZvcmVncm91bmQoKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBPdmVycmlkZSB0aGUgYmFjayBidXR0b24gb24gQW5kcm9pZCB0byBnbyB0byBiYWNrZ3JvdW5kIGluc3RlYWQgb2YgY2xvc2luZyB0aGUgYXBwLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgb3ZlcnJpZGVCYWNrQnV0dG9uKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogRXhjbHVkZSB0aGUgYXBwIGZyb20gdGhlIHJlY2VudCB0YXNrIGxpc3QuIFdvcmtzIG9uIEFuZHJvaWQgNS4wKy5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIGV4Y2x1ZGVGcm9tVGFza0xpc3QoKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBJZiB0aGUgc2NyZWVuIGlzIG9mZi5cclxuICAgKiBAcGFyYW0gZm4ge2Z1bmN0aW9ufSBDYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugd2l0aCBib29sZWFuIGFyZy5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG4gIH0pXHJcbiAgaXNTY3JlZW5PZmYoZm46IChhcmcwOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBUdXJuIHNjcmVlbiBvblxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgd2FrZVVwKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogVHVybiBzY3JlZW4gb24gYW5kIHNob3cgYXBwIGV2ZW4gbG9ja2VkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICB1bmxvY2soKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBEaXNhYmxlcyBiYXR0ZXJ5IG9wdGltYXphdGlvbiBtb2RlIGZvciB0aGUgYXBwIChhbmRyb2lkIG9ubHkpXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBkaXNhYmxlQmF0dGVyeU9wdGltaXphdGlvbnMoKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==