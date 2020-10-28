import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var CloudSettings = /** @class */ (function (_super) {
    __extends(CloudSettings, _super);
    function CloudSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloudSettings.prototype.exists = function () { return cordova(this, "exists", {}, arguments); };
    CloudSettings.prototype.save = function (settings, overwrite) { return cordova(this, "save", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CloudSettings.prototype.load = function () { return cordova(this, "load", {}, arguments); };
    CloudSettings.prototype.onRestore = function (handler) { return cordova(this, "onRestore", { "sync": true }, arguments); };
    CloudSettings.prototype.enableDebug = function () { return cordova(this, "enableDebug", {}, arguments); };
    CloudSettings.pluginName = "CloudSettings";
    CloudSettings.plugin = "cordova-plugin-cloud-settings";
    CloudSettings.pluginRef = "cordova.plugin.cloudsettings";
    CloudSettings.repo = "https://github.com/dpa99c/cordova-plugin-cloud-settings";
    CloudSettings.install = "ionic cordova plugin add cordova-plugin-cloud-settings --variable ANDROID_BACKUP_SERVICE_KEY=myapikey";
    CloudSettings.installVariables = ["ANDROID_BACKUP_SERVICE_KEY"];
    CloudSettings.platforms = ["Android", "iOS"];
    CloudSettings = __decorate([
        Injectable()
    ], CloudSettings);
    return CloudSettings;
}(IonicNativePlugin));
export { CloudSettings };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Nsb3VkLXNldHRpbmdzL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXVDckMsaUNBQWlCOzs7O0lBTWxELDhCQUFNO0lBZU4sNEJBQUksYUFBQyxRQUFhLEVBQUUsU0FBbUI7SUFTdkMsNEJBQUk7SUFTSixpQ0FBUyxhQUFDLE9BQWlCO0lBTzNCLG1DQUFXOzs7Ozs7OztJQTlDQSxhQUFhO1FBRHpCLFVBQVUsRUFBRTtPQUNBLGFBQWE7d0JBeEMxQjtFQXdDbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIENsb3VkIFNldHRpbmdzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBTdG9yZXMgYXBwIHNldHRpbmdzIGluIGNsb3VkIHN0b3JhZ2Ugc28gaWYgdGhlIHVzZXIgcmUtaW5zdGFsbHMgdGhlIGFwcCBvciBpbnN0YWxscyBpdCBvbiBhIGRpZmZlcmVudCBkZXZpY2UsIHRoZSBzZXR0aW5ncyB3aWxsIGJlIHJlc3RvcmVkIGFuZCBhdmFpbGFibGUgaW4gdGhlIG5ldyBpbnN0YWxsYXRpb24uXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IENsb3VkU2V0dGluZ3MgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Nsb3VkLXNldHRpbmdzL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xvdWRTZXR0aW5nczogQ2xvdWRTZXR0aW5ncykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmNsb3VkU2V0dGluZ3MuZXhpc3RzKClcclxuICogICAudGhlbigoZXhpc3RzOiBib29sZWFuKSA9PiBjb25zb2xlLmxvZyhcIlNhdmVkIHNldHRpbmdzIGV4aXN0OiBcIiArIGV4aXN0cykgKVxyXG4gKlxyXG4gKiB0aGlzLmNsb3VkU2V0dGluZ3MubG9hZCgpXHJcbiAqICAgLnRoZW4oKHNldHRpbmdzOiBhbnkpID0+IHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncylcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogdGhpcy5jbG91ZFNldHRpbmdzLnNhdmUodGhpcy5zZXR0aW5ncylcclxuICogICAudGhlbigoc2F2ZWRTZXR0aW5nczogYW55KSA9PiBjb25zb2xlLmxvZyhcIlNhdmVkIHNldHRpbmdzOiBcIiArIEpTT04uc3RyaW5naWZ5KHNhdmVkU2V0dGluZ3MpKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQ2xvdWRTZXR0aW5ncycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2xvdWQtc2V0dGluZ3MnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2luLmNsb3Vkc2V0dGluZ3MnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZHBhOTljL2NvcmRvdmEtcGx1Z2luLWNsb3VkLXNldHRpbmdzJyxcclxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWNsb3VkLXNldHRpbmdzIC0tdmFyaWFibGUgQU5EUk9JRF9CQUNLVVBfU0VSVklDRV9LRVk9bXlhcGlrZXknLFxyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQU5EUk9JRF9CQUNLVVBfU0VSVklDRV9LRVknXSxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2xvdWRTZXR0aW5ncyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgaWYgYW55IHN0b3JlZCBjbG91ZCBzZXR0aW5ncyBjdXJyZW50bHkgZXhpc3QgZm9yIHRoZSBjdXJyZW50IHVzZXIuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gV2lsbCBiZSBwYXNzZWQgYSBib29sZWFuIGZsYWcgd2hpY2ggaW5kaWNhdGVzIHdoZXRoZXIgYW4gc3RvcmUgc2V0dGluZ3MgZXhpc3QgZm9yIHRoZSB1c2VyLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBleGlzdHMoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTYXZlcyB0aGUgc2V0dGluZ3MgdG8gY2xvdWQgYmFja3VwLlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzZXR0aW5ncyAtIGEgSlNPTiBzdHJ1Y3R1cmUgcmVwcmVzZW50aW5nIHRoZSB1c2VyIHNldHRpbmdzIHRvIHNhdmUgdG8gY2xvdWQgYmFja3VwLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW292ZXJ3cml0ZV0gLSAob3B0aW9uYWwpIGlmIHRydWUsIGV4aXN0aW5nIHNldHRpbmdzIHdpbGwgYmUgcmVwbGFjZWQgcmF0aGVyIHRoYW4gdXBkYXRlZC4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICogSWYgZmFsc2UsIGV4aXN0aW5nIHNldHRpbmdzIHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIG5ldyBzZXR0aW5ncyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbi5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFdpbGwgYmUgcGFzc2VkIGEgc2luZ2xlIG9iamVjdCBhcmd1bWVudCB3aGljaCBjb250YWlucyB0aGUgc2F2ZWQgc2V0dGluZ3MgYXMgYSBKU09OIG9iamVjdC5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDEsXHJcbiAgICBlcnJvckluZGV4OiAyLFxyXG4gIH0pXHJcbiAgc2F2ZShzZXR0aW5nczogYW55LCBvdmVyd3JpdGU/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWRzIHRoZSBjdXJyZW50IHNldHRpbmdzLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gV2lsbCBiZSBwYXNzZWQgYSBzaW5nbGUgb2JqZWN0IGFyZ3VtZW50IHdoaWNoIGNvbnRhaW5zIHRoZSBzYXZlZCBzZXR0aW5ncyBhcyBhIEpTT04gb2JqZWN0LlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBsb2FkKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpZi93aGVuIHNldHRpbmdzIG9uIHRoZSBkZXZpY2UgaGF2ZSBiZWVuIHVwZGF0ZWQgZnJvbSB0aGUgY2xvdWQuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciAtIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGludm9rZSB3aGVuIGRldmljZSBzZXR0aW5ncyBoYXZlIGJlZW4gdXBkYXRlZCBmcm9tIHRoZSBjbG91ZC5cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBvblJlc3RvcmUoaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIE91dHB1dHMgdmVyYm9zZSBsb2cgbWVzc2FnZXMgZnJvbSB0aGUgbmF0aXZlIHBsdWdpbiBjb21wb25lbnRzIHRvIHRoZSBKUyBjb25zb2xlLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGVuYWJsZURlYnVnKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=