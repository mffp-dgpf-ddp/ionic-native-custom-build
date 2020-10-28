import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Wechat = /** @class */ (function (_super) {
    __extends(Wechat, _super);
    function Wechat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wechat.prototype.isInstalled = function () { return cordova(this, "isInstalled", {}, arguments); };
    Wechat.prototype.share = function (params) { return cordova(this, "share", {}, arguments); };
    Wechat.prototype.auth = function (scope, state) { return cordova(this, "auth", {}, arguments); };
    Wechat.prototype.sendPaymentRequest = function (params) { return cordova(this, "sendPaymentRequest", {}, arguments); };
    Wechat.prototype.jumpToWechat = function (url) { return cordova(this, "jumpToWechat", {}, arguments); };
    Wechat.prototype.chooseInvoiceFromWX = function (params) { return cordova(this, "chooseInvoiceFromWX", {}, arguments); };
    Wechat.prototype.openMiniProgram = function (params) { return cordova(this, "openMiniProgram", {}, arguments); };
    Wechat.pluginName = "Wechat";
    Wechat.plugin = "cordova-plugin-wechat";
    Wechat.pluginRef = "Wechat";
    Wechat.repo = "https://github.com/xu-li/cordova-plugin-wechat.git";
    Wechat.install = "cordova plugin add cordova-plugin-wechat --variable wechatappid=YOUR_WECHAT_APPID";
    Wechat.installVariables = ["wechatappid"];
    Wechat.platforms = ["Android", "iOS"];
    Wechat = __decorate([
        Injectable()
    ], Wechat);
    return Wechat;
}(IonicNativePlugin));
export { Wechat };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlY2hhdC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpQzVDLDBCQUFpQjs7OztJQXdCM0MsNEJBQVc7SUE4Qlgsc0JBQUssYUFBQyxNQUFXO0lBYWpCLHFCQUFJLGFBQUMsS0FBVSxFQUFFLEtBQVU7SUF5QjNCLG1DQUFrQixhQUFDLE1BQVc7SUE0QjlCLDZCQUFZLGFBQUMsR0FBVztJQWtCeEIsb0NBQW1CLGFBQUMsTUFBVztJQWtCL0IsZ0NBQWUsYUFBQyxNQUFXOzs7Ozs7OztJQTVKaEIsTUFBTTtRQURsQixVQUFVLEVBQUU7T0FDQSxNQUFNO2lCQWxDbkI7RUFrQzRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBXZWNoYXRcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgY29yZG92YSBwbHVnaW4sIGEgSlMgdmVyc2lvbiBvZiBXZWNoYXQgU0RLXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFdlY2hhdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvd2VjaGF0L25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgd2VjaGF0OiBXZWNoYXQpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy53ZWNoYXQuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1dlY2hhdCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4td2VjaGF0JyxcclxuICBwbHVnaW5SZWY6ICdXZWNoYXQnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20veHUtbGkvY29yZG92YS1wbHVnaW4td2VjaGF0LmdpdCcsXHJcbiAgaW5zdGFsbDogJ2NvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi13ZWNoYXQgLS12YXJpYWJsZSB3ZWNoYXRhcHBpZD1ZT1VSX1dFQ0hBVF9BUFBJRCcsXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogWyd3ZWNoYXRhcHBpZCddLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWNoYXQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgU2NlbmU6IHtcclxuICAgIFNFU1NJT046IDA7IC8vIOiBiuWkqeeVjOmdolxyXG4gICAgVElNRUxJTkU6IDE7IC8vIOaci+WPi+WciFxyXG4gICAgRkFWT1JJVEU6IDI7IC8vIOaUtuiXj1xyXG4gIH07XHJcblxyXG4gIFR5cGU6IHtcclxuICAgIEFQUDogMTtcclxuICAgIEVNT1RJT046IDI7XHJcbiAgICBGSUxFOiAzO1xyXG4gICAgSU1BR0U6IDQ7XHJcbiAgICBNVVNJQzogNTtcclxuICAgIFZJREVPOiA2O1xyXG4gICAgV0VCUEFHRTogNztcclxuICB9O1xyXG5cclxuICBNaW5pOiB7XHJcbiAgICBSRUxFQVNFOiAwOyAvLyDmraPlvI/niYhcclxuICAgIFRFU1Q6IDE7IC8vIOa1i+ivleeJiFxyXG4gICAgUFJFVklFVzogMjsgLy8g5L2T6aqM54mIXHJcbiAgfTtcclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzSW5zdGFsbGVkKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaGFyZSBhIG1lc3NhZ2UgdG8gd2VjaGF0IGFwcFxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiA8Y29kZT5cclxuICAgKiB0aGlzLndlY2hhdC5zaGFyZSh7XHJcbiAgICogICAgIG1lc3NhZ2U6IHtcclxuICAgKiAgICAgICAgdGl0bGU6IFwiTWVzc2FnZSBUaXRsZVwiLFxyXG4gICAqICAgICAgICBkZXNjcmlwdGlvbjogXCJNZXNzYWdlIERlc2NyaXB0aW9uKG9wdGlvbmFsKVwiLFxyXG4gICAqICAgICAgICBtZWRpYVRhZ05hbWU6IFwiTWVkaWEgVGFnIE5hbWUob3B0aW9uYWwpXCIsXHJcbiAgICogICAgICAgIHRodW1iOiBcImh0dHA6Ly9ZT1VSX1RIVU1CTkFJTF9JTUFHRVwiLFxyXG4gICAqICAgICAgICBtZWRpYToge1xyXG4gICAqICAgICAgICAgICAgdHlwZTogV2VjaGF0LlR5cGUuV0VCUEFHRSwgICAvLyB3ZWJwYWdlXHJcbiAgICogICAgICAgICAgICB3ZWJwYWdlVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS94dS1saS9jb3Jkb3ZhLXBsdWdpbi13ZWNoYXRcIiAgICAvLyB3ZWJwYWdlXHJcbiAgICogICAgICAgIH1cclxuICAgKiAgICB9LFxyXG4gICAqICAgIHNjZW5lOiB0aGlzLndlY2hhdC5TY2VuZS5USU1FTElORSAgIC8vIHNoYXJlIHRvIFRpbWVsaW5lXHJcbiAgICogfS50aGVuKCgpID0+IHtcclxuICAgKiAgICAgICBjb25zb2xlLmxvZygnc2hhcmUgc3VjY2VzcycpO1xyXG4gICAqICAgIH0pXHJcbiAgICogICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgKiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICogICAgfSk7XHJcbiAgICogPC9jb2RlPlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzaGFyZShwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZW5kaW5nIGFuIGF1dGggcmVxdWVzdCB0byBXZWNoYXRcclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogPGNvZGU+XHJcbiAgICogdGhpcy53ZWNoYXQuYXV0aC50aGVuKChyZXMpID0+IHsgYWxlcnQocmVzLmNvZGUpOyB9KTtcclxuICAgKiA8L2NvZGU+XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGF1dGgoc2NvcGU6IGFueSwgc3RhdGU6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZW5kIGEgcGF5bWVudCByZXF1ZXN0XHJcbiAgICpcclxuICAgKiBAbGluayBodHRwczovL3BheS53ZWl4aW4ucXEuY29tL3dpa2kvZG9jL2FwaS9hcHAucGhwP2NoYXB0ZXI9OV8xXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiA8Y29kZT5cclxuICAgKiB2YXIgcGFyYW1zID0ge1xyXG4gICAqICAgICBtY2hfaWQ6ICcxMDAwMDEwMCcsIC8vIG1lcmNoYW50IGlkXHJcbiAgICogICAgIHByZXBheV9pZDogJ3d4MjAxNDExMTAxNjM5NTA3Y2JmNmZmZDhiMDc3OTk1MDg3NCcsIC8vIHByZXBheSBpZCByZXR1cm5lZCBmcm9tIHNlcnZlclxyXG4gICAqICAgICBub25jZTogJzFhZGQxYTMwYWM4N2FhMmRiNzJmNTdhMjM3NWQ4ZmVjJywgLy8gbm9uY2Ugc3RyaW5nIHJldHVybmVkIGZyb20gc2VydmVyXHJcbiAgICogICAgIHRpbWVzdGFtcDogJzE0Mzk1MzEzNjQnLCAvLyB0aW1lc3RhbXBcclxuICAgKiAgICAgc2lnbjogJzBDQjAxNTMzQjhDMUVGMTAzMDY1MTc0RjUwQkNBMDAxJywgLy8gc2lnbmVkIHN0cmluZ1xyXG4gICAqIH07XHJcbiAgICogdGhpcy53ZWNoYXQuc2VuZFBheW1lbnRSZXF1ZXN0KHBhcmFtcykudGhlbigoKSA9PiB7XHJcbiAgICogICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc1wiKTtcclxuICAgKiB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICogICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgKiB9KTtcclxuICAgKiA8L2NvZGU+XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNlbmRQYXltZW50UmVxdWVzdChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBqdW1wVG9CaXpQcm9maWxlIO+8iOi3s+i9rOWIsOafkOS4quW+ruS/oeWFrOS8l+WPt++8iTIwMTYtMTEtMTEg5rWL6K+V5piv5aSx5pWI55qE77yM5ZunXHJcbiAgICpcclxuICAgKiBAbGluayBodHRwczovL3NlZ21lbnRmYXVsdC5jb20vYS8xMTkwMDAwMDA3MjA0NjI0XHJcbiAgICogQGxpbmsgaHR0cHM6Ly9zZWdtZW50ZmF1bHQuY29tL3EvMTAxMDAwMDAwMzkwNzc5NlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogPGNvZGU+XHJcbiAgICogdmFyIHBhcmFtcyA9IHtcclxuICAgKiAgICAgaW5mbzogJ2doX3h4eHh4eHgnLCAvLyDlhazkvJfluJDlj7fljp/lp4tJRFxyXG4gICAqICAgICB0eXBlOiAgJ05vcm1hbCcgLy8g5pmu6YCa5Y+3XHJcbiAgICogfVxyXG4gICAqIG9yXHJcbiAgICogdmFyIHBhcmFtcyA9IHtcclxuICAgKiAgICAgaW5mbzogJ2V4dE1zZycsIC8vIOebuOWFs+eahOehrOS7tuS6jOe7tOeggeS4slxyXG4gICAqICAgICB0eXBlOiAgJ0RldmljZScgLy8g56Gs5Lu25Y+3XHJcbiAgICogfTtcclxuICAgKiB0aGlzLndlY2hhdC5qdW1wVG9CaXpQcm9maWxlKHBhcmFtcykudGhlbigoKT0+IHtcclxuICAgKiAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzXCIpO1xyXG4gICAqIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgKiAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAqIH0pO1xyXG4gICAqIDwvY29kZT5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAganVtcFRvV2VjaGF0KHVybDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNob29zZUludm9pY2VGcm9tV1ggZXhxOmNob29zZSBpbnZvaWNlcyBmcm9tIFdlY2hhdCBjYXJkIGxpc3RcclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogPGNvZGU+XHJcbiAgICogcGFyYW1zOiBzaWduVHlwZSwgY2FyZFNpZ24sIG5vbmNlU3RyLCB0aW1lU3RhbXAgIGFsbCByZXF1aXJlZFxyXG4gICAqIHRoaXMud2VjaGF0LmNob29zZUludm9pY2VGcm9tV1gocGFyYW1zKS50aGVuKCgpID0+IHtcclxuICAgKiAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzXCIpO1xyXG4gICAqIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgKiAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAqIH0pO1xyXG4gICAqIDwvY29kZT5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2hvb3NlSW52b2ljZUZyb21XWChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBvcGVuTWluaVByb2dyYW0gZXhxOmFwcCBvcGVucyB3ZWNoYXQgbWluaSBwcm9ncmFtXHJcbiAgICpcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIDxjb2RlPlxyXG4gICAqIHBhcmFtczogdXNlck5hbWUsIHBhdGgsIG1pbmlwcm9ncmFtVHlwZSAgYWxsIHJlcXVpcmVkXHJcbiAgICogV2VjaGF0Lm9wZW5NaW5pUHJvZ3JhbShwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICogICAgIGFsZXJ0KGRhdGEuZXh0TXNnKTtcclxuICAgKiB9LCBmdW5jdGlvbiAocmVhc29uKSB7XHJcbiAgICogICAgIGFsZXJ0KFwiRmFpbGVkOiBcIiArIHJlYXNvbik7XHJcbiAgICogfSk7XHJcbiAgICogPC9jb2RlPlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBvcGVuTWluaVByb2dyYW0ocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=