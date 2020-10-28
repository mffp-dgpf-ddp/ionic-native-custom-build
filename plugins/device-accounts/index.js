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
var DeviceAccountsOriginal = /** @class */ (function (_super) {
    __extends(DeviceAccountsOriginal, _super);
    function DeviceAccountsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceAccountsOriginal.prototype.get = function () { return cordova(this, "get", {}, arguments); };
    DeviceAccountsOriginal.prototype.getByType = function (type) { return cordova(this, "getByType", {}, arguments); };
    DeviceAccountsOriginal.prototype.getEmails = function () { return cordova(this, "getEmails", {}, arguments); };
    DeviceAccountsOriginal.prototype.getEmail = function () { return cordova(this, "getEmail", {}, arguments); };
    DeviceAccountsOriginal.prototype.getPermissions = function () { return cordova(this, "getPermissions", {}, arguments); };
    DeviceAccountsOriginal.prototype.getPermissionsByType = function (type) { return cordova(this, "getPermissionsByType", {}, arguments); };
    DeviceAccountsOriginal.pluginName = "DeviceAccounts";
    DeviceAccountsOriginal.plugin = "cordova-device-accounts-v2";
    DeviceAccountsOriginal.pluginRef = "DeviceAccounts";
    DeviceAccountsOriginal.repo = "https://github.com/xUnholy/cordova-device-accounts-v2";
    DeviceAccountsOriginal.platforms = ["Android"];
    return DeviceAccountsOriginal;
}(IonicNativePlugin));
var DeviceAccounts = new DeviceAccountsOriginal();
export { DeviceAccounts };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RldmljZS1hY2NvdW50cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUEwQ3BDLGtDQUFpQjs7OztJQU1uRCw0QkFBRztJQVVILGtDQUFTLGFBQUMsSUFBWTtJQVN0QixrQ0FBUztJQVNULGlDQUFRO0lBU1IsdUNBQWM7SUFVZCw2Q0FBb0IsYUFBQyxJQUFZOzs7Ozs7eUJBaEduQztFQTJDb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbmRyb2lkQWNjb3VudCB7XHJcbiAgLyoqIEFjY291bnQgY3JlYXRvciAqL1xyXG4gIENSRUFUT1I6IEFuZHJvaWRBY2NvdW50O1xyXG5cclxuICAvKiogQWNjb3VudCBuYW1lICovXHJcbiAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAvKiogQWNjb3VudCB0eXBlICovXHJcbiAgdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgRGV2aWNlIEFjY291bnRzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBHZXRzIHRoZSBHb29nbGUgYWNjb3VudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBBbmRyb2lkIGRldmljZVxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBEZXZpY2VBY2NvdW50cyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGV2aWNlLWFjY291bnRzL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV2aWNlQWNjb3VudHM6IERldmljZUFjY291bnRzKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuZGV2aWNlQWNjb3VudHMuZ2V0KClcclxuICogICAudGhlbihhY2NvdW50cyA9PiBjb25zb2xlLmxvZyhhY2NvdW50cykpXHJcbiAqICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIEFuZHJvaWRBY2NvdW50XHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRGV2aWNlQWNjb3VudHMnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtZGV2aWNlLWFjY291bnRzLXYyJyxcclxuICBwbHVnaW5SZWY6ICdEZXZpY2VBY2NvdW50cycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS94VW5ob2x5L2NvcmRvdmEtZGV2aWNlLWFjY291bnRzLXYyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZXZpY2VBY2NvdW50cyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiAgR2V0cyBhbGwgYWNjb3VudHMgcmVnaXN0ZXJlZCBvbiB0aGUgQW5kcm9pZCBEZXZpY2VcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBbmRyb2lkQWNjb3VudFtdPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0KCk6IFByb21pc2U8QW5kcm9pZEFjY291bnRbXT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIEdldCBhbGwgYWNjb3VudHMgcmVnaXN0ZXJlZCBvbiBBbmRyb2lkIGRldmljZSBmb3IgcmVxdWVzdGVkIHR5cGVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFuZHJvaWRBY2NvdW50W10+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRCeVR5cGUodHlwZTogc3RyaW5nKTogUHJvbWlzZTxBbmRyb2lkQWNjb3VudFtdPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAgR2V0IGFsbCBlbWFpbHMgcmVnaXN0ZXJlZCBvbiBBbmRyb2lkIGRldmljZSAoYWNjb3VudHMgd2l0aCAnY29tLmdvb2dsZScgdHlwZSlcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmdbXT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEVtYWlscygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAgR2V0IHRoZSBmaXJzdCBlbWFpbCByZWdpc3RlcmVkIG9uIEFuZHJvaWQgZGV2aWNlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0RW1haWwoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICBHZXQgcGVybWlzc2lvbnMgZm9yIGFjY2VzcyB0byBlbWFpbCByZWdpc3RlcmVkIG9uIEFuZHJvaWQgZGV2aWNlIDguMCtcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRQZXJtaXNzaW9ucygpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIEdldCBwZXJtaXNzaW9ucyBmb3IgYWNjZXNzIHRvIGVtYWlsIHJlZ2lzdGVyZWQgb24gQW5kcm9pZCBkZXZpY2UgOC4wKyBmb3IgcmVxdWVzdGVkIHR5cGVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFBlcm1pc3Npb25zQnlUeXBlKHR5cGU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==