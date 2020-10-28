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
var AppCenterAnalyticsOriginal = /** @class */ (function (_super) {
    __extends(AppCenterAnalyticsOriginal, _super);
    function AppCenterAnalyticsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterAnalyticsOriginal.prototype.trackEvent = function (eventName, properties) { return cordova(this, "trackEvent", {}, arguments); };
    AppCenterAnalyticsOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AppCenterAnalyticsOriginal.prototype.setEnabled = function (shouldEnable) { return cordova(this, "setEnabled", {}, arguments); };
    AppCenterAnalyticsOriginal.pluginName = "AppCenterAnalytics";
    AppCenterAnalyticsOriginal.plugin = "cordova-plugin-appcenter-analytics";
    AppCenterAnalyticsOriginal.pluginRef = "AppCenter.Analytics";
    AppCenterAnalyticsOriginal.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics";
    AppCenterAnalyticsOriginal.platforms = ["Android", "iOS"];
    return AppCenterAnalyticsOriginal;
}(IonicNativePlugin));
var AppCenterAnalytics = new AppCenterAnalyticsOriginal();
export { AppCenterAnalytics };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1jZW50ZXItYW5hbHl0aWNzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTJDaEMsc0NBQWlCOzs7O0lBVXZELHVDQUFVLGFBQUMsU0FBaUIsRUFBRSxVQUFxQjtJQVNuRCxzQ0FBUztJQVVULHVDQUFVLGFBQUMsWUFBcUI7Ozs7Ozs2QkF6RWxDO0VBNEN3QyxpQkFBaUI7U0FBNUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RyaW5nTWFwIHtcclxuICBbczogc3RyaW5nXTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQXBwIENlbnRlciBBbmFseXRpY3NcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFwcCBDZW50ZXIgQW5hbHl0aWNzIGhlbHBzIHlvdSB1bmRlcnN0YW5kIHVzZXIgYmVoYXZpb3IgYW5kIGN1c3RvbWVyIGVuZ2FnZW1lbnQgdG8gaW1wcm92ZSB5b3VyIGFwcC5cclxuICogVGhlIFNESyBhdXRvbWF0aWNhbGx5IGNhcHR1cmVzIHNlc3Npb24gY291bnQgYW5kIGRldmljZSBwcm9wZXJ0aWVzIGxpa2UgbW9kZWwsIE9TIHZlcnNpb24sIGV0Yy5cclxuICogWW91IGNhbiBkZWZpbmUgeW91ciBvd24gY3VzdG9tIGV2ZW50cyB0byBtZWFzdXJlIHRoaW5ncyB0aGF0IG1hdHRlciB0byB5b3UuXHJcbiAqIEFsbCB0aGUgaW5mb3JtYXRpb24gY2FwdHVyZWQgaXMgYXZhaWxhYmxlIGluIHRoZSBBcHAgQ2VudGVyIHBvcnRhbCBmb3IgeW91IHRvIGFuYWx5emUgdGhlIGRhdGEuXHJcbiAqXHJcbiAqIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvYXBwY2VudGVyL3Nkay9hbmFseXRpY3MvY29yZG92YVxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBBcHBDZW50ZXJBbmFseXRpY3MgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FwcC1jZW50ZXItYW5hbHl0aWNzL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwQ2VudGVyQW5hbHl0aWNzOiBBcHBDZW50ZXJBbmFseXRpY3MpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5hcHBDZW50ZXJBbmFseXRpY3Muc2V0RW5hYmxlZCh0cnVlKS50aGVuKCgpID0+IHtcclxuICogICAgdGhpcy5hcHBDZW50ZXJBbmFseXRpY3MudHJhY2tFdmVudCgnTXkgRXZlbnQnLCB7IFRFU1Q6ICdIRUxMT19XT1JMRCcgfSkudGhlbigoKSA9PiB7XHJcbiAqICAgICAgICBjb25zb2xlLmxvZygnQ3VzdG9tIGV2ZW50IHRyYWNrZWQnKTtcclxuICogICAgfSk7XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogU3RyaW5nTWFwXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQXBwQ2VudGVyQW5hbHl0aWNzJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItYW5hbHl0aWNzJyxcclxuICBwbHVnaW5SZWY6ICdBcHBDZW50ZXIuQW5hbHl0aWNzJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9hcHBjZW50ZXItc2RrLWNvcmRvdmEvdHJlZS9tYXN0ZXIvY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLWFuYWx5dGljcycsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwcENlbnRlckFuYWx5dGljcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUcmFja3MgYW4gY3VzdG9tIGV2ZW50LlxyXG4gICAqIFlvdSBjYW4gc2VuZCB1cCB0byAyMDAgZGlzdGluY3QgZXZlbnQgbmFtZXMuIEFsc28sIHRoZXJlIGlzIGEgbWF4aW11bSBsaW1pdCBvZiAyNTYgY2hhcmFjdGVycyBwZXIgZXZlbnQgbmFtZVxyXG4gICAqIGFuZCA2NCBjaGFyYWN0ZXJzIHBlciBldmVudCBwcm9wZXJ0eSBuYW1lIGFuZCBldmVudCBwcm9wZXJ0eSB2YWx1ZS5cclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGV2ZW50TmFtZSBFdmVudCBuYW1lXHJcbiAgICogQHBhcmFtICB7U3RyaW5nTWFwfSBwcm9wZXJ0aWVzIEV2ZW50IHByb3BlcnRpZXNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgdHJhY2tFdmVudChldmVudE5hbWU6IHN0cmluZywgcHJvcGVydGllczogU3RyaW5nTWFwKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBBcHAgQ2VudGVyIEFuYWx5dGljcyBpcyBlbmFibGVkXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIEFwcCBDZW50ZXIgQW5hbHl0aWNzIGF0IHJ1bnRpbWVcclxuICAgKiBAcGFyYW0gIHtib29sZWFufSBzaG91bGRFbmFibGUgU2V0IHZhbHVlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldEVuYWJsZWQoc2hvdWxkRW5hYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==