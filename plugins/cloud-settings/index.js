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
var CloudSettingsOriginal = /** @class */ (function (_super) {
    __extends(CloudSettingsOriginal, _super);
    function CloudSettingsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloudSettingsOriginal.prototype.exists = function () { return cordova(this, "exists", {}, arguments); };
    CloudSettingsOriginal.prototype.save = function (settings, overwrite) { return cordova(this, "save", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CloudSettingsOriginal.prototype.load = function () { return cordova(this, "load", {}, arguments); };
    CloudSettingsOriginal.prototype.onRestore = function (handler) { return cordova(this, "onRestore", { "sync": true }, arguments); };
    CloudSettingsOriginal.prototype.enableDebug = function () { return cordova(this, "enableDebug", {}, arguments); };
    CloudSettingsOriginal.pluginName = "CloudSettings";
    CloudSettingsOriginal.plugin = "cordova-plugin-cloud-settings";
    CloudSettingsOriginal.pluginRef = "cordova.plugin.cloudsettings";
    CloudSettingsOriginal.repo = "https://github.com/dpa99c/cordova-plugin-cloud-settings";
    CloudSettingsOriginal.install = "ionic cordova plugin add cordova-plugin-cloud-settings --variable ANDROID_BACKUP_SERVICE_KEY=myapikey";
    CloudSettingsOriginal.installVariables = ["ANDROID_BACKUP_SERVICE_KEY"];
    CloudSettingsOriginal.platforms = ["Android", "iOS"];
    return CloudSettingsOriginal;
}(IonicNativePlugin));
var CloudSettings = new CloudSettingsOriginal();
export { CloudSettings };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Nsb3VkLXNldHRpbmdzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXVDckMsaUNBQWlCOzs7O0lBTWxELDhCQUFNO0lBZU4sNEJBQUksYUFBQyxRQUFhLEVBQUUsU0FBbUI7SUFTdkMsNEJBQUk7SUFTSixpQ0FBUyxhQUFDLE9BQWlCO0lBTzNCLG1DQUFXOzs7Ozs7Ozt3QkF0RmI7RUF3Q21DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBDbG91ZCBTZXR0aW5nc1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogU3RvcmVzIGFwcCBzZXR0aW5ncyBpbiBjbG91ZCBzdG9yYWdlIHNvIGlmIHRoZSB1c2VyIHJlLWluc3RhbGxzIHRoZSBhcHAgb3IgaW5zdGFsbHMgaXQgb24gYSBkaWZmZXJlbnQgZGV2aWNlLCB0aGUgc2V0dGluZ3Mgd2lsbCBiZSByZXN0b3JlZCBhbmQgYXZhaWxhYmxlIGluIHRoZSBuZXcgaW5zdGFsbGF0aW9uLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBDbG91ZFNldHRpbmdzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jbG91ZC1zZXR0aW5ncy9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsb3VkU2V0dGluZ3M6IENsb3VkU2V0dGluZ3MpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5jbG91ZFNldHRpbmdzLmV4aXN0cygpXHJcbiAqICAgLnRoZW4oKGV4aXN0czogYm9vbGVhbikgPT4gY29uc29sZS5sb2coXCJTYXZlZCBzZXR0aW5ncyBleGlzdDogXCIgKyBleGlzdHMpIClcclxuICpcclxuICogdGhpcy5jbG91ZFNldHRpbmdzLmxvYWQoKVxyXG4gKiAgIC50aGVuKChzZXR0aW5nczogYW55KSA9PiB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3MpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIHRoaXMuY2xvdWRTZXR0aW5ncy5zYXZlKHRoaXMuc2V0dGluZ3MpXHJcbiAqICAgLnRoZW4oKHNhdmVkU2V0dGluZ3M6IGFueSkgPT4gY29uc29sZS5sb2coXCJTYXZlZCBzZXR0aW5nczogXCIgKyBKU09OLnN0cmluZ2lmeShzYXZlZFNldHRpbmdzKSkpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0Nsb3VkU2V0dGluZ3MnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNsb3VkLXNldHRpbmdzJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbi5jbG91ZHNldHRpbmdzJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2RwYTk5Yy9jb3Jkb3ZhLXBsdWdpbi1jbG91ZC1zZXR0aW5ncycsXHJcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1jbG91ZC1zZXR0aW5ncyAtLXZhcmlhYmxlIEFORFJPSURfQkFDS1VQX1NFUlZJQ0VfS0VZPW15YXBpa2V5JyxcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FORFJPSURfQkFDS1VQX1NFUlZJQ0VfS0VZJ10sXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENsb3VkU2V0dGluZ3MgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGlmIGFueSBzdG9yZWQgY2xvdWQgc2V0dGluZ3MgY3VycmVudGx5IGV4aXN0IGZvciB0aGUgY3VycmVudCB1c2VyLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IFdpbGwgYmUgcGFzc2VkIGEgYm9vbGVhbiBmbGFnIHdoaWNoIGluZGljYXRlcyB3aGV0aGVyIGFuIHN0b3JlIHNldHRpbmdzIGV4aXN0IGZvciB0aGUgdXNlci5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZXhpc3RzKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2F2ZXMgdGhlIHNldHRpbmdzIHRvIGNsb3VkIGJhY2t1cC5cclxuICAgKiBAcGFyYW0ge29iamVjdH0gc2V0dGluZ3MgLSBhIEpTT04gc3RydWN0dXJlIHJlcHJlc2VudGluZyB0aGUgdXNlciBzZXR0aW5ncyB0byBzYXZlIHRvIGNsb3VkIGJhY2t1cC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvdmVyd3JpdGVdIC0gKG9wdGlvbmFsKSBpZiB0cnVlLCBleGlzdGluZyBzZXR0aW5ncyB3aWxsIGJlIHJlcGxhY2VkIHJhdGhlciB0aGFuIHVwZGF0ZWQuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAqIElmIGZhbHNlLCBleGlzdGluZyBzZXR0aW5ncyB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZSBuZXcgc2V0dGluZ3MgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24uXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBXaWxsIGJlIHBhc3NlZCBhIHNpbmdsZSBvYmplY3QgYXJndW1lbnQgd2hpY2ggY29udGFpbnMgdGhlIHNhdmVkIHNldHRpbmdzIGFzIGEgSlNPTiBvYmplY3QuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAxLFxyXG4gICAgZXJyb3JJbmRleDogMixcclxuICB9KVxyXG4gIHNhdmUoc2V0dGluZ3M6IGFueSwgb3ZlcndyaXRlPzogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkcyB0aGUgY3VycmVudCBzZXR0aW5ncy5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFdpbGwgYmUgcGFzc2VkIGEgc2luZ2xlIG9iamVjdCBhcmd1bWVudCB3aGljaCBjb250YWlucyB0aGUgc2F2ZWQgc2V0dGluZ3MgYXMgYSBKU09OIG9iamVjdC5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbG9hZCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaWYvd2hlbiBzZXR0aW5ncyBvbiB0aGUgZGV2aWNlIGhhdmUgYmVlbiB1cGRhdGVkIGZyb20gdGhlIGNsb3VkLlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgLSBjYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugd2hlbiBkZXZpY2Ugc2V0dGluZ3MgaGF2ZSBiZWVuIHVwZGF0ZWQgZnJvbSB0aGUgY2xvdWQuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgb25SZXN0b3JlKGhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBPdXRwdXRzIHZlcmJvc2UgbG9nIG1lc3NhZ2VzIGZyb20gdGhlIG5hdGl2ZSBwbHVnaW4gY29tcG9uZW50cyB0byB0aGUgSlMgY29uc29sZS5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBlbmFibGVEZWJ1ZygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19