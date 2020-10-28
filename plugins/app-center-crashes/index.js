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
var AppCenterCrashesOriginal = /** @class */ (function (_super) {
    __extends(AppCenterCrashesOriginal, _super);
    function AppCenterCrashesOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterCrashesOriginal.prototype.generateTestCrash = function () { return cordova(this, "generateTestCrash", {}, arguments); };
    AppCenterCrashesOriginal.prototype.hasCrashedInLastSession = function () { return cordova(this, "hasCrashedInLastSession", {}, arguments); };
    AppCenterCrashesOriginal.prototype.lastSessionCrashReport = function () { return cordova(this, "lastSessionCrashReport", {}, arguments); };
    AppCenterCrashesOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AppCenterCrashesOriginal.prototype.setEnabled = function (shouldEnable) { return cordova(this, "setEnabled", {}, arguments); };
    AppCenterCrashesOriginal.pluginName = "AppCenterCrashes";
    AppCenterCrashesOriginal.plugin = "cordova-plugin-appcenter-crashes";
    AppCenterCrashesOriginal.pluginRef = "AppCenter.Crashes";
    AppCenterCrashesOriginal.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-crashes";
    AppCenterCrashesOriginal.platforms = ["Android", "iOS"];
    return AppCenterCrashesOriginal;
}(IonicNativePlugin));
var AppCenterCrashes = new AppCenterCrashesOriginal();
export { AppCenterCrashes };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1jZW50ZXItY3Jhc2hlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFtRWxDLG9DQUFpQjs7OztJQU9yRCw0Q0FBaUI7SUFPakIsa0RBQXVCO0lBU3ZCLGlEQUFzQjtJQVN0QixvQ0FBUztJQVVULHFDQUFVLGFBQUMsWUFBcUI7Ozs7OzsyQkE5R2xDO0VBb0VzQyxpQkFBaUI7U0FBMUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwQ2VudGVyQ3Jhc2hSZXBvcnQge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgZGV2aWNlOiBBcHBDZW50ZXJDcmFzaFJlcG9ydERldmljZTtcclxuICBhcHBTdGFydFRpbWU6IG51bWJlcjtcclxuICBhcHBFcnJvclRpbWU6IG51bWJlcjtcclxuICBzaWduYWw6IHN0cmluZztcclxuICBhcHBQcm9jZXNzSWRlbnRpZmllcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcENlbnRlckNyYXNoUmVwb3J0RGV2aWNlIHtcclxuICBvZW1fbmFtZTogc3RyaW5nO1xyXG4gIG9zX25hbWU6IHN0cmluZztcclxuICBhcHBfdmVyc2lvbjogc3RyaW5nO1xyXG4gIHRpbWVfem9uZV9vZmZzZXQ6IG51bWJlcjtcclxuICBjYXJyaWVyX25hbWU6IHN0cmluZztcclxuICBzY3JlZW5fc2l6ZTogc3RyaW5nO1xyXG4gIGxvY2FsZTogc3RyaW5nO1xyXG4gIHNka192ZXJzaW9uOiBzdHJpbmc7XHJcbiAgY2Fycmllcl9jb3VudHJ5OiBzdHJpbmc7XHJcbiAgb3NfYnVpbGQ6IHN0cmluZztcclxuICBhcHBfbmFtZXNwYWNlOiBzdHJpbmc7XHJcbiAgb3NfdmVyc2lvbjogc3RyaW5nO1xyXG4gIHNka19uYW1lOiBzdHJpbmc7XHJcbiAgbW9kZWw6IHN0cmluZztcclxuICBhcHBfYnVpbGQ6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEFwcCBDZW50ZXIgQ3Jhc2hlc1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQXBwIENlbnRlciBBbmFseXRpY3MgaGVscHMgeW91IHVuZGVyc3RhbmQgdXNlciBiZWhhdmlvciBhbmQgY3VzdG9tZXIgZW5nYWdlbWVudCB0byBpbXByb3ZlIHlvdXIgYXBwLlxyXG4gKiBUaGUgU0RLIGF1dG9tYXRpY2FsbHkgY2FwdHVyZXMgc2Vzc2lvbiBjb3VudCBhbmQgZGV2aWNlIHByb3BlcnRpZXMgbGlrZSBtb2RlbCwgT1MgdmVyc2lvbiwgZXRjLlxyXG4gKiBZb3UgY2FuIGRlZmluZSB5b3VyIG93biBjdXN0b20gZXZlbnRzIHRvIG1lYXN1cmUgdGhpbmdzIHRoYXQgbWF0dGVyIHRvIHlvdS5cclxuICogQWxsIHRoZSBpbmZvcm1hdGlvbiBjYXB0dXJlZCBpcyBhdmFpbGFibGUgaW4gdGhlIEFwcCBDZW50ZXIgcG9ydGFsIGZvciB5b3UgdG8gYW5hbHl6ZSB0aGUgZGF0YS5cclxuICpcclxuICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9hcHBjZW50ZXIvc2RrL2NyYXNoZXMvY29yZG92YVxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBBcHBDZW50ZXJDcmFzaGVzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hcHAtY2VudGVyLWNyYXNoZXMvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBBcHBDZW50ZXJDcmFzaGVzOiBBcHBDZW50ZXJDcmFzaGVzKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuQXBwQ2VudGVyQ3Jhc2hlcy5zZXRFbmFibGVkKHRydWUpLnRoZW4oKCkgPT4ge1xyXG4gKiAgICB0aGlzLkFwcENlbnRlckNyYXNoZXMubGFzdFNlc3Npb25DcmFzaFJlcG9ydCgpLnRoZW4ocmVwb3J0ID0+IHtcclxuICogICAgICAgIGNvbnNvbGUubG9nKCdDcmFzaCByZXBvcnQnLCByZXBvcnQpO1xyXG4gKiAgICB9KTtcclxuICogfSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBBcHBDZW50ZXJDcmFzaFJlcG9ydFxyXG4gKiBBcHBDZW50ZXJDcmFzaFJlcG9ydERldmljZVxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0FwcENlbnRlckNyYXNoZXMnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1jcmFzaGVzJyxcclxuICBwbHVnaW5SZWY6ICdBcHBDZW50ZXIuQ3Jhc2hlcycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvYXBwY2VudGVyLXNkay1jb3Jkb3ZhL3RyZWUvbWFzdGVyL2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1jcmFzaGVzJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXBwQ2VudGVyQ3Jhc2hlcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBBcHAgQ2VudGVyIENyYXNoZXMgcHJvdmlkZXMgeW91IHdpdGggYW4gQVBJIHRvIGdlbmVyYXRlIGEgdGVzdCBjcmFzaCBmb3IgZWFzeSB0ZXN0aW5nIG9mIHRoZSBTREsuXHJcbiAgICogVGhpcyBBUEkgY2FuIG9ubHkgYmUgdXNlZCBpbiB0ZXN0L2JldGEgYXBwcyBhbmQgd29uJ3QgZG8gYW55dGhpbmcgaW4gcHJvZHVjdGlvbiBhcHBzLlxyXG4gICAqIEByZXR1cm5zIHZvaWRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2VuZXJhdGVUZXN0Q3Jhc2goKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBBdCBhbnkgdGltZSBhZnRlciBzdGFydGluZyB0aGUgU0RLLCB5b3UgY2FuIGNoZWNrIGlmIHRoZSBhcHAgY3Jhc2hlZCBpbiB0aGUgcHJldmlvdXMgbGF1bmNoXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGhhc0NyYXNoZWRJbkxhc3RTZXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0YWlscyBhYm91dCB0aGUgbGFzdCBjcmFzaFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFwcENlbnRlckNyYXNoUmVwb3J0Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbGFzdFNlc3Npb25DcmFzaFJlcG9ydCgpOiBQcm9taXNlPEFwcENlbnRlckNyYXNoUmVwb3J0PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBBcHAgQ2VudGVyIENyYXNoZXMgaXMgZW5hYmxlZFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBBcHAgQ2VudGVyIENyYXNoZXMgYXQgcnVudGltZVxyXG4gICAqIEBwYXJhbSAge2Jvb2xlYW59IHNob3VsZEVuYWJsZSBTZXQgdmFsdWVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2V0RW5hYmxlZChzaG91bGRFbmFibGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19