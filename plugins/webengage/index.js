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
var WebengageOriginal = /** @class */ (function (_super) {
    __extends(WebengageOriginal, _super);
    function WebengageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageOriginal.prototype.engage = function (config) { return cordova(this, "engage", {}, arguments); };
    WebengageOriginal.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengageOriginal.prototype.track = function (eventName, attributes) { return cordova(this, "track", {}, arguments); };
    WebengageOriginal.prototype.screen = function (screenName, screenData) { return cordova(this, "screen", {}, arguments); };
    WebengageOriginal.pluginName = "Webengage";
    WebengageOriginal.plugin = "cordova-plugin-webengage";
    WebengageOriginal.pluginRef = "webengage";
    WebengageOriginal.repo = "https://github.com/WebEngage/cordova-plugin";
    WebengageOriginal.platforms = ["Android", "iOS"];
    return WebengageOriginal;
}(IonicNativePlugin));
var Webengage = new WebengageOriginal();
export { Webengage };
var WebengageUserOriginal = /** @class */ (function (_super) {
    __extends(WebengageUserOriginal, _super);
    function WebengageUserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageUserOriginal.prototype.login = function (userId) { return cordova(this, "login", {}, arguments); };
    WebengageUserOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    WebengageUserOriginal.prototype.setAttribute = function (key, value) { return cordova(this, "setAttribute", {}, arguments); };
    WebengageUserOriginal.pluginName = "Webengage";
    WebengageUserOriginal.plugin = "cordova-plugin-webengage";
    WebengageUserOriginal.pluginRef = "webengage.user";
    return WebengageUserOriginal;
}(IonicNativePlugin));
var WebengageUser = new WebengageUserOriginal();
export { WebengageUser };
var WebengagePushOriginal = /** @class */ (function (_super) {
    __extends(WebengagePushOriginal, _super);
    function WebengagePushOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengagePushOriginal.prototype.onClick = function (callback) { return cordova(this, "onClick", {}, arguments); };
    WebengagePushOriginal.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengagePushOriginal.pluginName = "Webengage";
    WebengagePushOriginal.plugin = "cordova-plugin-webengage";
    WebengagePushOriginal.pluginRef = "webengage.push";
    return WebengagePushOriginal;
}(IonicNativePlugin));
var WebengagePush = new WebengagePushOriginal();
export { WebengagePush };
var WebengageNotificationOriginal = /** @class */ (function (_super) {
    __extends(WebengageNotificationOriginal, _super);
    function WebengageNotificationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageNotificationOriginal.prototype.onShown = function (callback) { return cordova(this, "onShown", {}, arguments); };
    WebengageNotificationOriginal.prototype.onClick = function (callback) { return cordova(this, "onClick", {}, arguments); };
    WebengageNotificationOriginal.prototype.onDismiss = function (callback) { return cordova(this, "onDismiss", {}, arguments); };
    WebengageNotificationOriginal.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengageNotificationOriginal.pluginName = "Webengage";
    WebengageNotificationOriginal.plugin = "cordova-plugin-webengage";
    WebengageNotificationOriginal.pluginRef = "webengage.notification";
    return WebengageNotificationOriginal;
}(IonicNativePlugin));
var WebengageNotification = new WebengageNotificationOriginal();
export { WebengageNotification };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlYmVuZ2FnZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUEyQnpDLDZCQUFpQjs7OztJQU85QywwQkFBTSxhQUFDLE1BQVk7SUFXbkIsMkJBQU8sYUFBQyxHQUFXLEVBQUUsS0FBVTtJQVcvQix5QkFBSyxhQUFDLFNBQWlCLEVBQUUsVUFBZ0I7SUFXekMsMEJBQU0sYUFBQyxVQUFrQixFQUFFLFVBQWdCOzs7Ozs7b0JBcEU3QztFQTRCK0IsaUJBQWlCO1NBQW5DLFNBQVM7O0lBc0RhLGlDQUFpQjs7OztJQU9sRCw2QkFBSyxhQUFDLE1BQWM7SUFTcEIsOEJBQU07SUFXTixvQ0FBWSxhQUFDLEdBQVcsRUFBRSxLQUFVOzs7O3dCQTdHdEM7RUFrRm1DLGlCQUFpQjtTQUF2QyxhQUFhOztJQXlDUyxpQ0FBaUI7Ozs7SUFPbEQsK0JBQU8sYUFBQyxRQUFhO0lBV3JCLCtCQUFPLGFBQUMsR0FBVyxFQUFFLEtBQVU7Ozs7d0JBN0lqQztFQTJIbUMsaUJBQWlCO1NBQXZDLGFBQWE7O0lBZ0NpQix5Q0FBaUI7Ozs7SUFPMUQsdUNBQU8sYUFBQyxRQUFhO0lBVXJCLHVDQUFPLGFBQUMsUUFBYTtJQVVyQix5Q0FBUyxhQUFDLFFBQWE7SUFXdkIsdUNBQU8sYUFBQyxHQUFXLEVBQUUsS0FBVTs7OztnQ0FqTWpDO0VBMkoyQyxpQkFBaUI7U0FBL0MscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBXZWJlbmdhZ2VcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIElvbmljLU5hdGl2ZSB3cmFwcGVyIHRoYXQgd3JhcHMgV2ViZW5nYWdlIENvcmRvdmEgcGx1Z2luIGZvciBBbmRyb2lkIGFuZCBpT1NcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgV2ViZW5nYWdlLCBXZWJlbmdhZ2VVc2VyLCBXZWJlbmdhZ2VQdXNoLCBXZWJlbmdhZ2VOb3RpZmljYXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3dlYmVuZ2FnZS9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdlYmVuZ2FnZTogV2ViZW5nYWdlLCBwcml2YXRlIHdlYmVuZ2FnZVVzZXI6IFdlYmVuZ2FnZVVzZXIsIHByaXZhdGUgd2ViZW5nYWdlUHVzaDogV2ViZW5nYWdlUHVzaCwgcHJpdmF0ZSB3ZWJlbmdhZ2VOb3RpZmljYXRpb246IFdlYmVuZ2FnZU5vdGlmaWNhdGlvbiApIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy53ZWJlbmdhZ2UuZW5nYWdlKCk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1dlYmVuZ2FnZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4td2ViZW5nYWdlJyxcclxuICBwbHVnaW5SZWY6ICd3ZWJlbmdhZ2UnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vV2ViRW5nYWdlL2NvcmRvdmEtcGx1Z2luJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2ViZW5nYWdlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIFdlYkVuZ2FnZSBTREtcclxuICAgKiBAcGFyYW0ge2FueX0gW2NvbmZpZ11cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGVuZ2FnZShjb25maWc/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBXZWJFbmdhZ2UgU0RLIGNvbmZpZ3VyYXRpb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBvcHRpb25zKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyYWNrcyBldmVudFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcclxuICAgKiBAcGFyYW0ge2FueX0gW2F0dHJpYnV0ZXNdXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB0cmFjayhldmVudE5hbWU6IHN0cmluZywgYXR0cmlidXRlcz86IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmFja3Mgc2NyZWVuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxyXG4gICAqIEBwYXJhbSB7YW55fSBbc2NyZWVuRGF0YV1cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNjcmVlbihzY3JlZW5OYW1lOiBzdHJpbmcsIHNjcmVlbkRhdGE/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdXZWJlbmdhZ2UnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXdlYmVuZ2FnZScsXHJcbiAgcGx1Z2luUmVmOiAnd2ViZW5nYWdlLnVzZXInLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWJlbmdhZ2VVc2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIExvZ3MgdXNlciBpblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWRcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGxvZ2luKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ3MgdXNlciBvdXRcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB1c2VyIGF0dHJpYnV0ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcclxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldEF0dHJpYnV0ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1dlYmVuZ2FnZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4td2ViZW5nYWdlJyxcclxuICBwbHVnaW5SZWY6ICd3ZWJlbmdhZ2UucHVzaCcsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYmVuZ2FnZVB1c2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGEgcHVzaCBub3RpZmljYXRpb24gaXMgY2xpY2tlZFxyXG4gICAqIEBwYXJhbSB7YW55fSBjYWxsYmFja1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgb25DbGljayhjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgcHVzaCBub3RpZmljYXRpb24gY29uZmlndXJhdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcclxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIG9wdGlvbnMoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdXZWJlbmdhZ2UnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXdlYmVuZ2FnZScsXHJcbiAgcGx1Z2luUmVmOiAnd2ViZW5nYWdlLm5vdGlmaWNhdGlvbicsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYmVuZ2FnZU5vdGlmaWNhdGlvbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBpcyBpbnZva2VkIHdoZW4gYSBpbi1hcHAgbm90aWZpY2F0aW9uIGlzIHNob3duXHJcbiAgICogQHBhcmFtIHthbnl9IGNhbGxiYWNrXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBvblNob3duKGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGEgaW4tYXBwIG5vdGlmaWNhdGlvbiBpcyBjbGlja2VkXHJcbiAgICogQHBhcmFtIHthbnl9IGNhbGxiYWNrXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBvbkNsaWNrKGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGEgaW4tYXBwIG5vdGlmaWNhdGlvbiBpcyBkaXNtaXNzZWRcclxuICAgKiBAcGFyYW0ge2FueX0gY2FsbGJhY2tcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIG9uRGlzbWlzcyhjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgaW4tYXBwIG5vdGlmaWNhdGlvbiBjb25maWd1cmF0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxyXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgb3B0aW9ucyhrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==