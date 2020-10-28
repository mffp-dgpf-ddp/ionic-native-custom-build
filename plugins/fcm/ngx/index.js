import { __decorate, __extends } from "tslib";
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
var FCM = /** @class */ (function (_super) {
    __extends(FCM, _super);
    function FCM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FCM.prototype.getAPNSToken = function () { return cordova(this, "getAPNSToken", {}, arguments); };
    FCM.prototype.getToken = function () { return cordova(this, "getToken", {}, arguments); };
    FCM.prototype.onTokenRefresh = function () { return cordova(this, "onTokenRefresh", { "observable": true }, arguments); };
    FCM.prototype.subscribeToTopic = function (topic) { return cordova(this, "subscribeToTopic", {}, arguments); };
    FCM.prototype.unsubscribeFromTopic = function (topic) { return cordova(this, "unsubscribeFromTopic", {}, arguments); };
    FCM.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    FCM.prototype.onNotification = function () { return cordova(this, "onNotification", { "observable": true, "successIndex": 0, "errorIndex": 2 }, arguments); };
    FCM.prototype.clearAllNotifications = function () { return cordova(this, "clearAllNotifications", {}, arguments); };
    FCM.prototype.requestPushPermissionIOS = function (options) { return cordova(this, "requestPushPermissionIOS", {}, arguments); };
    FCM.prototype.createNotificationChannelAndroid = function (channelConfig) { return cordova(this, "createNotificationChannelAndroid", {}, arguments); };
    FCM.pluginName = "FCM";
    FCM.plugin = "cordova-plugin-fcm-with-dependecy-updated";
    FCM.pluginRef = "FCMPlugin";
    FCM.repo = "https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated";
    FCM.platforms = ["Android", "iOS"];
    FCM = __decorate([
        Injectable()
    ], FCM);
    return FCM;
}(IonicNativePlugin));
export { FCM };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZjbS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQThIVCx1QkFBaUI7Ozs7SUFPeEMsMEJBQVk7SUFVWixzQkFBUTtJQVlSLDRCQUFjO0lBWWQsOEJBQWdCLGFBQUMsS0FBYTtJQVk5QixrQ0FBb0IsYUFBQyxLQUFhO0lBYWxDLDJCQUFhO0lBY2IsNEJBQWM7SUFVZCxtQ0FBcUI7SUFZckIsc0NBQXdCLGFBQUMsT0FBMEM7SUFnQm5FLDhDQUFnQyxhQUFDLGFBQW9DOzs7Ozs7SUF0SDFELEdBQUc7UUFEZixVQUFVLEVBQUU7T0FDQSxHQUFHO2NBaEloQjtFQWdJeUIsaUJBQWlCO1NBQTdCLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkRhdGEge1xyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgd2hldGhlciB0aGUgbm90aWZpY2F0aW9uIHdhcyBwcmVzc2VkIG9yIG5vdFxyXG4gICAqL1xyXG5cclxuICB3YXNUYXBwZWQ6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIE5vdGlmaWNhdGlvbiBkYXRhIGhhc2ggaXRlbVxyXG4gICAqL1xyXG5cclxuICBbbmFtZTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSZXF1ZXN0UHVzaFBlcm1pc3Npb25JT1NPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBPcHRpb25zIGV4Y2x1c2l2ZSBmb3IgaU9TIDkgc3VwcG9ydFxyXG4gICAqL1xyXG4gIGlvczlTdXBwb3J0Pzoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbG9uZyBpdCB3aWxsIHdhaXQgZm9yIGEgZGVjaXNpb24gZnJvbSB0aGUgdXNlciBiZWZvcmUgcmV0dXJuaW5nIGBmYWxzZWAsIGRlZmF1bHRzIHRvIDEwXHJcbiAgICAgKi9cclxuICAgIHRpbWVvdXQ/OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIEhvdyBsb25nIGJldHdlZW4gZWFjaCBwZXJtaXNzaW9uIHZlcmlmaWNhdGlvbiwgZGVmYXVsdHMgdG8gMC4zXHJcbiAgICAgKi9cclxuICAgIGludGVydmFsPzogbnVtYmVyO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoYW5uZWxDb25maWd1cmF0aW9uIHtcclxuICAvKipcclxuICAgKiBDaGFubmVsIGlkLCB1c2VkIGluIHRoZSBhbmRyb2lkX2NoYW5uZWxfaWQgcHVzaCBwYXlsb2FkIGtleVxyXG4gICAqL1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQ2hhbm5lbCBuYW1lLCB2aXNpYmxlIGZvciB0aGUgdXNlclxyXG4gICAqL1xyXG4gIG5hbWU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBDaGFubmVsIGRlc2NyaXB0aW9uLCB2aXNpYmxlIGZvciB0aGUgdXNlclxyXG4gICAqL1xyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEltcG9ydGFuY2UgZm9yIG5vdGlmaWNhdGlvbnMgb2YgdGhpcyBjaGFubmVsXHJcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vZ3VpZGUvdG9waWNzL3VpL25vdGlmaWVycy9ub3RpZmljYXRpb25zI2ltcG9ydGFuY2VcclxuICAgKi9cclxuICBpbXBvcnRhbmNlPzogJ25vbmUnIHwgJ21pbicgfCAnbG93JyB8ICdkZWZhdWx0JyB8ICdoaWdoJztcclxuICAvKipcclxuICAgKiBWaXNpYmlsaXR5IGZvciBub3RpZmljYXRpb25zIG9mIHRoaXMgY2hhbm5lbFxyXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL3RyYWluaW5nL25vdGlmeS11c2VyL2J1aWxkLW5vdGlmaWNhdGlvbiNsb2Nrc2NyZWVuTm90aWZpY2F0aW9uXHJcbiAgICovXHJcbiAgdmlzaWJpbGl0eT86ICdwdWJsaWMnIHwgJ3ByaXZhdGUnIHwgJ3NlY3JldCc7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBzb3VuZCByZXNvdXJjZSBmb3Igbm90aWZpY2F0aW9ucyBvZiB0aGlzIGNoYW5uZWxcclxuICAgKiBUaGUgZmlsZSBzaG91bGQgbG9jYXRlZCBhcyByZXNvdXJjZXMvcmF3L1tyZXNvdXJjZSBuYW1lXS5tcDNcclxuICAgKi9cclxuICBzb3VuZD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBFbmFibGUgbGlnaHRzIGZvciBub3RpZmljYXRpb25zIG9mIHRoaXMgY2hhbm5lbFxyXG4gICAqL1xyXG4gIGxpZ2h0cz86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogRW5hYmxlIHZpYnJhdGlvbiBmb3Igbm90aWZpY2F0aW9ucyBvZiB0aGlzIGNoYW5uZWxcclxuICAgKi9cclxuICB2aWJyYXRpb24/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgRkNNXHJcbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUHJvdmlkZXMgYmFzaWMgZnVuY3Rpb25hbGl0eSBmb3IgRmlyZWJhc2UgQ2xvdWQgTWVzc2FnaW5nXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEZDTSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmNtL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmNtOiBGQ00pIHt9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmZjbS5zdWJzY3JpYmVUb1RvcGljKCdtYXJrZXRpbmcnKTtcclxuICpcclxuICogdGhpcy5mY20uZ2V0VG9rZW4oKS50aGVuKHRva2VuID0+IHtcclxuICogICBiYWNrZW5kLnJlZ2lzdGVyVG9rZW4odG9rZW4pO1xyXG4gKiB9KTtcclxuICpcclxuICogdGhpcy5mY20ub25Ob3RpZmljYXRpb24oKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAqICAgaWYoZGF0YS53YXNUYXBwZWQpe1xyXG4gKiAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBpbiBiYWNrZ3JvdW5kXCIpO1xyXG4gKiAgIH0gZWxzZSB7XHJcbiAqICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIGluIGZvcmVncm91bmRcIik7XHJcbiAqICAgfTtcclxuICogfSk7XHJcbiAqXHJcbiAqIHRoaXMuZmNtLm9uVG9rZW5SZWZyZXNoKCkuc3Vic2NyaWJlKHRva2VuID0+IHtcclxuICogICBiYWNrZW5kLnJlZ2lzdGVyVG9rZW4odG9rZW4pO1xyXG4gKiB9KTtcclxuICpcclxuICogdGhpcy5mY20uaGFzUGVybWlzc2lvbigpLnRoZW4oaGFzUGVybWlzc2lvbiA9PiB7XHJcbiAqICAgaWYgKGhhc1Blcm1pc3Npb24pIHtcclxuICogICAgIGNvbnNvbGUubG9nKFwiSGFzIHBlcm1pc3Npb24hXCIpO1xyXG4gKiAgIH1cclxuICogfSlcclxuICpcclxuICogdGhpcy5mY20uY2xlYXJBbGxOb3RpZmljYXRpb25zKCk7XHJcbiAqXHJcbiAqIHRoaXMuZmNtLnVuc3Vic2NyaWJlRnJvbVRvcGljKCdtYXJrZXRpbmcnKTtcclxuICpcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIE5vdGlmaWNhdGlvbkRhdGFcclxuICogSVJlcXVlc3RQdXNoUGVybWlzc2lvbklPU09wdGlvbnNcclxuICogSUNoYW5uZWxDb25maWd1cmF0aW9uXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRkNNJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mY20td2l0aC1kZXBlbmRlY3ktdXBkYXRlZCcsXHJcbiAgcGx1Z2luUmVmOiAnRkNNUGx1Z2luJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZHJlaHRpc3NvdC9jb3Jkb3ZhLXBsdWdpbi1mY20td2l0aC1kZXBlbmRlY3ktdXBkYXRlZCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZDTSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBHZXRzIGlvcyBkZXZpY2UncyBjdXJyZW50IEFQTlMgdG9rZW5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgQVBOUyB0b2tlblxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRBUE5TVG9rZW4oKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgZGV2aWNlJ3MgY3VycmVudCByZWdpc3RyYXRpb24gaWRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVnaXN0cmF0aW9uIGlkIHRva2VuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFRva2VuKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudCBmaXJpbmcgb24gdGhlIHRva2VuIHJlZnJlc2hcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPHN0cmluZz59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHdpdGggdGhlIGNoYW5nZSBvZiBkZXZpY2UncyByZWdpc3RyYXRpb24gaWRcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgb25Ub2tlblJlZnJlc2goKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZXMgeW91IHRvIGEgW3RvcGljXShodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9ub3RpZmljYXRpb25zL2FuZHJvaWQvY29uc29sZS10b3BpY3MpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9waWMgVG9waWMgdG8gYmUgc3Vic2NyaWJlZCB0b1xyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgcmVzb2x2aW5nIGluIHJlc3VsdCBvZiBzdWJzY3JpYmluZyB0byBhIHRvcGljXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN1YnNjcmliZVRvVG9waWModG9waWM6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVbnN1YnNjcmliZXMgeW91IGZyb20gYSBbdG9waWNdKGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL25vdGlmaWNhdGlvbnMvYW5kcm9pZC9jb25zb2xlLXRvcGljcylcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b3BpYyBUb3BpYyB0byBiZSB1bnN1YnNjcmliZWQgZnJvbVxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgcmVzb2x2aW5nIGluIHJlc3VsdCBvZiB1bnN1YnNjcmliaW5nIGZyb20gYSB0b3BpY1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB1bnN1YnNjcmliZUZyb21Ub3BpYyh0b3BpYzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNraW5nIGZvciBwZXJtaXNzaW9ucyBvbiBpT1MuIE9uIGFuZHJvaWQsIGl0IGFsd2F5cyByZXR1cm5zIGB0cnVlYC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4gfCBudWxsPn0gUmV0dXJucyBhIFByb21pc2U6XHJcbiAgICogLSB0cnVlOiBwdXNoIHdhcyBhbGxvd2VkIChvciBwbGF0Zm9ybSBpcyBhbmRyb2lkKVxyXG4gICAqIC0gZmFsc2U6IHB1c2ggd2lsbCBub3QgYmUgYXZhaWxhYmxlXHJcbiAgICogLSBudWxsOiBzdGlsbCBub3QgYW5zd2VyZWQsIHJlY29tbWVuZGVkIGNoZWNraW5nIGFnYWluIGxhdGVyLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbiB8IG51bGw+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdhdGNoIGZvciBpbmNvbWluZyBub3RpZmljYXRpb25zXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGRhdGEgZnJvbSB0aGUgbm90aWZpY2F0aW9uXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIHN1Y2Nlc3NJbmRleDogMCxcclxuICAgIGVycm9ySW5kZXg6IDIsXHJcbiAgfSlcclxuICBvbk5vdGlmaWNhdGlvbigpOiBPYnNlcnZhYmxlPE5vdGlmaWNhdGlvbkRhdGE+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgZXhpc3RpbmcgcHVzaCBub3RpZmljYXRpb25zIGZyb20gdGhlIG5vdGlmaWNhdGlvbnMgY2VudGVyXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2xlYXJBbGxOb3RpZmljYXRpb25zKCk6IHZvaWQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVxdWVzdCBwdXNoIG5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uLCBhbGVydGluZyB0aGUgdXNlciBpZiBpdCBub3QgaGF2ZSB5ZXQgZGVjaWRlZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtJUmVxdWVzdFB1c2hQZXJtaXNzaW9uSU9TT3B0aW9uc30gb3B0aW9ucyBPcHRpb25zIGZvciBwdXNoIHJlcXVlc3RcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHBlcm1pc3Npb24gc3RhdHVzXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlcXVlc3RQdXNoUGVybWlzc2lvbklPUyhvcHRpb25zPzogSVJlcXVlc3RQdXNoUGVybWlzc2lvbklPU09wdGlvbnMpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciBBbmRyb2lkLCBzb21lIG5vdGlmaWNhdGlvbiBwcm9wZXJ0aWVzIGFyZSBvbmx5IGRlZmluZWQgcHJvZ3JhbW1hdGljYWxseS5cclxuICAgKlxyXG4gICAqIENoYW5uZWwgY2FuIGRlZmluZSB0aGUgZGVmYXVsdCBiZWhhdmlvciBmb3Igbm90aWZpY2F0aW9ucyBvbiBBbmRyb2lkIDguMCsuXHJcbiAgICpcclxuICAgKiBPbmNlIGEgY2hhbm5lbCBpcyBjcmVhdGVkLCBpdCBzdGF5cyB1bmNoYW5nZWFibGUgdW50aWwgdGhlIHVzZXIgdW5pbnN0YWxscyB0aGUgYXBwLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNoYW5uZWxDb25maWdcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjcmVhdGVOb3RpZmljYXRpb25DaGFubmVsQW5kcm9pZChjaGFubmVsQ29uZmlnOiBJQ2hhbm5lbENvbmZpZ3VyYXRpb24pOiB2b2lkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19