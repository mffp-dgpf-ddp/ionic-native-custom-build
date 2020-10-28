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
var GeTuiSdkPluginOriginal = /** @class */ (function (_super) {
    __extends(GeTuiSdkPluginOriginal, _super);
    function GeTuiSdkPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeTuiSdkPluginOriginal.prototype.callback_init = function (callback) { return cordova(this, "callback_init", {}, arguments); };
    GeTuiSdkPluginOriginal.prototype.initialize = function () { return cordova(this, "initialize", { "sync": true }, arguments); };
    GeTuiSdkPluginOriginal.prototype.getClientId = function () { return cordova(this, "getClientId", {}, arguments); };
    GeTuiSdkPluginOriginal.prototype.getVersion = function () { return cordova(this, "getVersion", {}, arguments); };
    GeTuiSdkPluginOriginal.pluginName = "GeTuiSdkPlugin";
    GeTuiSdkPluginOriginal.plugin = "cordova-plugin-getuisdk";
    GeTuiSdkPluginOriginal.pluginRef = "GeTuiSdkPlugin";
    GeTuiSdkPluginOriginal.repo = "git@github.com:GetuiLaboratory/cordova-plugin-getuisdk.git";
    GeTuiSdkPluginOriginal.install = "cordova plugin add cordova-plugin-getuisdk --variable PUSH_APPID=your appid --variable PUSH_APPKEY=your appkey --variable PUSH_APPSECRET=your appsecret";
    GeTuiSdkPluginOriginal.installVariables = ["PUSH_APPID", "PUSH_APPKEY", "PUSH_APPSECRET"];
    GeTuiSdkPluginOriginal.platforms = ["Android", "iOS"];
    return GeTuiSdkPluginOriginal;
}(IonicNativePlugin));
var GeTuiSdkPlugin = new GeTuiSdkPluginOriginal();
export { GeTuiSdkPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dlLXR1aS1zZGstcGx1Z2luL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXdDcEMsa0NBQWlCOzs7O0lBRW5ELHNDQUFhLGFBQUMsUUFBa0I7SUFPaEMsbUNBQVU7SUFLVixvQ0FBVztJQUtYLG1DQUFVOzs7Ozs7Ozt5QkE1RFo7RUF5Q29DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBHZSBUdWkgU2RrIFBsdWdpblxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgR2VUdWlTZGtQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2dlLXR1aS1zZGstcGx1Z2luJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBnZVR1aVNka1BsdWdpbjogR2VUdWlTZGtQbHVnaW4pIHsgfVxyXG4gKlxyXG4gKiAgdGhpcy5nZVR1aVNka1BsdWdpbi5jYWxsYmFja19pbml0KChyZXMpID0+IHsgY29uc29sZS5sb2cocmVzKX0pO1xyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICogIHRoaXMuZ2VUdWlTZGtQbHVnaW4uaW5pdGlhbGl6ZSgpO1xyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICogIHRoaXMuZ2VUdWlTZGtQbHVnaW4uZ2V0Q2xpZW50SWQoKTtcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqICB0aGlzLmdlVHVpU2RrUGx1Z2luLmdldFZlcnNpb24oKTtcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0dlVHVpU2RrUGx1Z2luJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nZXR1aXNkaycsXHJcbiAgcGx1Z2luUmVmOiAnR2VUdWlTZGtQbHVnaW4nLFxyXG4gIHJlcG86ICdnaXRAZ2l0aHViLmNvbTpHZXR1aUxhYm9yYXRvcnkvY29yZG92YS1wbHVnaW4tZ2V0dWlzZGsuZ2l0JyxcclxuICBpbnN0YWxsOlxyXG4gICAgJ2NvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nZXR1aXNkayAtLXZhcmlhYmxlIFBVU0hfQVBQSUQ9eW91ciBhcHBpZCAtLXZhcmlhYmxlIFBVU0hfQVBQS0VZPXlvdXIgYXBwa2V5IC0tdmFyaWFibGUgUFVTSF9BUFBTRUNSRVQ9eW91ciBhcHBzZWNyZXQnLFxyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnUFVTSF9BUFBJRCcsICdQVVNIX0FQUEtFWScsICdQVVNIX0FQUFNFQ1JFVCddLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHZVR1aVNka1BsdWdpbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSgpXHJcbiAgY2FsbGJhY2tfaW5pdChjYWxsYmFjazogRnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIGluaXRpYWxpemUoKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0Q2xpZW50SWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRWZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==