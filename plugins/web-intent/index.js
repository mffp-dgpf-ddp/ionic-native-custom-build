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
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import { Observable } from 'rxjs';
var WebIntentOriginal = /** @class */ (function (_super) {
    __extends(WebIntentOriginal, _super);
    function WebIntentOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebIntentOriginal.prototype.startActivity = function (options) { return cordova(this, "startActivity", {}, arguments); };
    WebIntentOriginal.prototype.startActivityForResult = function (options) { return cordova(this, "startActivityForResult", {}, arguments); };
    WebIntentOriginal.prototype.hasExtra = function (extra) { return cordova(this, "hasExtra", {}, arguments); };
    WebIntentOriginal.prototype.getExtra = function (extra) { return cordova(this, "getExtra", {}, arguments); };
    WebIntentOriginal.prototype.getUri = function () { return cordova(this, "getUri", {}, arguments); };
    WebIntentOriginal.prototype.onIntent = function () { return cordova(this, "onIntent", { "observable": true }, arguments); };
    WebIntentOriginal.prototype.sendBroadcast = function (options) { return cordova(this, "sendBroadcast", {}, arguments); };
    WebIntentOriginal.prototype.startService = function (options) { return cordova(this, "startService", {}, arguments); };
    WebIntentOriginal.prototype.registerBroadcastReceiver = function (filters) { return cordova(this, "registerBroadcastReceiver", { "observable": true }, arguments); };
    WebIntentOriginal.prototype.unregisterBroadcastReceiver = function () { return cordova(this, "unregisterBroadcastReceiver", { "sync": true }, arguments); };
    WebIntentOriginal.prototype.onActivityResult = function () { return cordova(this, "onActivityResult", { "sync": true }, arguments); };
    WebIntentOriginal.prototype.getIntent = function () { return cordova(this, "getIntent", {}, arguments); };
    WebIntentOriginal.prototype.sendResult = function (_a) {
        var _b = _a.extras;
        return cordova(this, "sendResult", {}, arguments);
    };
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_SEND", {
        get: function () { return cordovaPropertyGet(this, "ACTION_SEND"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_SEND", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_VIEW", {
        get: function () { return cordovaPropertyGet(this, "ACTION_VIEW"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_VIEW", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "EXTRA_TEXT", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_TEXT"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_TEXT", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "EXTRA_SUBJECT", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_SUBJECT"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_SUBJECT", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "EXTRA_STREAM", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_STREAM"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_STREAM", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "EXTRA_EMAIL", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_EMAIL"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_EMAIL", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_CALL", {
        get: function () { return cordovaPropertyGet(this, "ACTION_CALL"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_CALL", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_SENDTO", {
        get: function () { return cordovaPropertyGet(this, "ACTION_SENDTO"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_SENDTO", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_GET_CONTENT", {
        get: function () { return cordovaPropertyGet(this, "ACTION_GET_CONTENT"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_GET_CONTENT", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_PICK", {
        get: function () { return cordovaPropertyGet(this, "ACTION_PICK"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_PICK", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_INSTALL_PACKAGE", {
        get: function () { return cordovaPropertyGet(this, "ACTION_INSTALL_PACKAGE"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_INSTALL_PACKAGE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_UNINSTALL_PACKAGE", {
        get: function () { return cordovaPropertyGet(this, "ACTION_UNINSTALL_PACKAGE"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_UNINSTALL_PACKAGE", value); },
        enumerable: true,
        configurable: true
    });
    WebIntentOriginal.pluginName = "WebIntent";
    WebIntentOriginal.plugin = "com-darryncampbell-cordova-plugin-intent";
    WebIntentOriginal.pluginRef = "plugins.intentShim";
    WebIntentOriginal.repo = "https://github.com/darryncampbell/darryncampbell-cordova-plugin-intent";
    WebIntentOriginal.platforms = ["Android"];
    return WebIntentOriginal;
}(IonicNativePlugin));
var WebIntent = new WebIntentOriginal();
export { WebIntent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlYi1pbnRlbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sc0VBQXVELE1BQU0sb0JBQW9CLENBQUM7QUFDekYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUF1RUgsNkJBQWlCOzs7O0lBMkY5QyxpQ0FBYSxhQUFDLE9BQXNCO0lBVXBDLDBDQUFzQixhQUFDLE9BQXNCO0lBVTdDLDRCQUFRLGFBQUMsS0FBYTtJQVV0Qiw0QkFBUSxhQUFDLEtBQWE7SUFTdEIsMEJBQU07SUFXTiw0QkFBUTtJQVVSLGlDQUFhLGFBQUMsT0FBc0I7SUFVcEMsZ0NBQVksYUFBQyxPQUFzQjtJQVluQyw2Q0FBeUIsYUFBQyxPQUF5QztJQVFuRSwrQ0FBMkI7SUFNM0Isb0NBQWdCO0lBTWhCLDZCQUFTO0lBVVQsOEJBQVUsYUFBQyxFQUFjO1lBQVosY0FBVTs7OzBCQXJNdkIsa0NBQVc7Ozs7OzswQkFPWCxrQ0FBVzs7Ozs7OzBCQU9YLGlDQUFVOzs7Ozs7MEJBT1Ysb0NBQWE7Ozs7OzswQkFPYixtQ0FBWTs7Ozs7OzBCQU9aLGtDQUFXOzs7Ozs7MEJBT1gsa0NBQVc7Ozs7OzswQkFPWCxvQ0FBYTs7Ozs7OzBCQU9iLHlDQUFrQjs7Ozs7OzBCQU9sQixrQ0FBVzs7Ozs7OzBCQU9YLDZDQUFzQjs7Ozs7OzBCQU90QiwrQ0FBd0I7Ozs7Ozs7Ozs7O29CQTVKMUI7RUF5RStCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEludGVudENsaXBJdGVtIHtcclxuICB1cmk6IHN0cmluZztcclxuICB0eXBlPzogc3RyaW5nO1xyXG4gIGV4dGVuc2lvbj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnRlbnQge1xyXG4gIGFjdGlvbjogc3RyaW5nO1xyXG4gIGNsaXBJdGVtczogSW50ZW50Q2xpcEl0ZW1bXTtcclxuICBjb21wb25lbnQ6IHN0cmluZztcclxuICBleHRyYXM6IG9iamVjdDtcclxuICBmbGFnczogbnVtYmVyO1xyXG4gIHR5cGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWdpc3RlckJyb2FkY2FzdFJlY2VpdmVyT3B0aW9ucyB7XHJcbiAgZmlsdGVyQWN0aW9ucz86IHN0cmluZ1tdO1xyXG4gIGZpbHRlckNhdGVnb3JpZXM/OiBzdHJpbmdbXTtcclxuICBmaWx0ZXJEYXRhU2NoZW1lcz86IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEludGVudE9wdGlvbnMge1xyXG4gIHJlcXVlc3RDb2RlPzogbnVtYmVyO1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbiAgcGFja2FnZT86IHN0cmluZztcclxuICB1cmw/OiBzdHJpbmc7XHJcbiAgZXh0cmFzPzogb2JqZWN0O1xyXG4gIGFjdGlvbj86IHN0cmluZztcclxuICBjb21wb25lbnQ/OiB7XHJcbiAgICBwYWNrYWdlOiBzdHJpbmc7XHJcbiAgICBjbGFzczogc3RyaW5nO1xyXG4gIH07XHJcbiAgZmxhZ3M/OiBudW1iZXJbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFdlYiBJbnRlbnRcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgUGx1Z2luIHByb3ZpZGVzIGEgZ2VuZXJhbCBwdXJwb3NlIHNoaW0gbGF5ZXIgZm9yIHRoZSBBbmRyb2lkIGludGVudCBtZWNoYW5pc20sIGV4cG9zaW5nIHZhcmlvdXMgd2F5cyB0byBoYW5kbGUgc2VuZGluZyBhbmQgcmVjZWl2aW5nIGludGVudHMuXHJcbiAqIEB1c2FnZVxyXG4gKiBGb3IgdXNhZ2UgaW5mb3JtYXRpb24gcGxlYXNlIHJlZmVyIHRvIHRoZSBwbHVnaW4ncyBHaXRodWIgcmVwby5cclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBXZWJJbnRlbnQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3dlYi1pbnRlbnQvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB3ZWJJbnRlbnQ6IFdlYkludGVudCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBjb25zdCBvcHRpb25zID0ge1xyXG4gKiAgIGFjdGlvbjogdGhpcy53ZWJJbnRlbnQuQUNUSU9OX1ZJRVcsXHJcbiAqICAgdXJsOiAncGF0aC90by9maWxlJyxcclxuICogICB0eXBlOiAnYXBwbGljYXRpb24vdm5kLmFuZHJvaWQucGFja2FnZS1hcmNoaXZlJ1xyXG4gKiB9XHJcbiAqXHJcbiAqIHRoaXMud2ViSW50ZW50LnN0YXJ0QWN0aXZpdHkob3B0aW9ucykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gKlxyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogSW50ZW50T3B0aW9uc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1dlYkludGVudCcsXHJcbiAgcGx1Z2luOiAnY29tLWRhcnJ5bmNhbXBiZWxsLWNvcmRvdmEtcGx1Z2luLWludGVudCcsXHJcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5pbnRlbnRTaGltJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2RhcnJ5bmNhbXBiZWxsL2RhcnJ5bmNhbXBiZWxsLWNvcmRvdmEtcGx1Z2luLWludGVudCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2ViSW50ZW50IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBBQ1RJT05fU0VORDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQUNUSU9OX1ZJRVc6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGV4dHJhc1xyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVhUUkFfVEVYVDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgZXh0cmFzXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFWFRSQV9TVUJKRUNUOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBleHRyYXNcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVYVFJBX1NUUkVBTTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgZXh0cmFzXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFWFRSQV9FTUFJTDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQUNUSU9OX0NBTEw6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEFDVElPTl9TRU5EVE86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEFDVElPTl9HRVRfQ09OVEVOVDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQUNUSU9OX1BJQ0s6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEFDVElPTl9JTlNUQUxMX1BBQ0tBR0U6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEFDVElPTl9VTklOU1RBTExfUEFDS0FHRTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBMYXVuY2hlcyBhbiBBbmRyb2lkIGludGVudFxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtJbnRlbnRPcHRpb25zfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0YXJ0QWN0aXZpdHkob3B0aW9uczogSW50ZW50T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydHMgYSBuZXcgYWN0aXZpdHkgYW5kIHJldHVybiB0aGUgcmVzdWx0IHRvIHRoZSBhcHBsaWNhdGlvblxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtJbnRlbnRPcHRpb25zfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0YXJ0QWN0aXZpdHlGb3JSZXN1bHQob3B0aW9uczogSW50ZW50T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhpcyBhcHAgd2FzIGludm9rZWQgd2l0aCBzcGVjaWZpZWQgZXh0cmFcclxuICAgKiBAcGFyYW0gZXh0cmEge3N0cmluZ31cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBoYXNFeHRyYShleHRyYTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGV4dHJhIHRoYXQgdGhpcyBhcHAgd2FzIGludm9rZWQgd2l0aFxyXG4gICAqIEBwYXJhbSBleHRyYSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEV4dHJhKGV4dHJhOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgVXJpIHRoZSBhcHAgd2FzIGludm9rZWQgd2l0aFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFVyaSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgY29udGVudCBvZiB0aGUgaW50ZW50IHVzZWQgd2hlbmV2ZXIgdGhlIGFwcGxpY2F0aW9uIGFjdGl2aXR5IGlzIGxhdW5jaGVkXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8SW50ZW50Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgb25JbnRlbnQoKTogT2JzZXJ2YWJsZTxJbnRlbnQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbmRzIGEgY3VzdG9tIGludGVudCBwYXNzaW5nIG9wdGlvbmFsIGV4dHJhc1xyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtJbnRlbnRPcHRpb25zfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNlbmRCcm9hZGNhc3Qob3B0aW9uczogSW50ZW50T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXF1ZXN0IHRoYXQgYSBnaXZlbiBhcHBsaWNhdGlvbiBzZXJ2aWNlIGJlIHN0YXJ0ZWRcclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SW50ZW50T3B0aW9uc31cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdGFydFNlcnZpY2Uob3B0aW9uczogSW50ZW50T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlcnMgYSBicm9hZGNhc3QgcmVjZWl2ZXIgZm9yIHRoZSBzcGVjaWZpZWQgZmlsdGVyc1xyXG4gICAqIEBwYXJhbSBmaWx0ZXJzIHtSZWdpc3RlckJyb2FkY2FzdFJlY2VpdmVyT3B0aW9uc31cclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgfSlcclxuICByZWdpc3RlckJyb2FkY2FzdFJlY2VpdmVyKGZpbHRlcnM6IFJlZ2lzdGVyQnJvYWRjYXN0UmVjZWl2ZXJPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVucmVnaXN0ZXJzIGEgYnJvYWRjYXN0IHJlY2VpdmVyXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdW5yZWdpc3RlckJyb2FkY2FzdFJlY2VpdmVyKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBvbkFjdGl2aXR5UmVzdWx0KCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0SW50ZW50KCk6IFByb21pc2U8SW50ZW50PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZW5kIGEgcmVzdWx0IGJhY2sgdG8gdGhlIEludGVudCB0aGF0IHN0YXJ0ZWQgdGhpcyBBY3Rpdml0eS5cclxuICAgKiBUaGUgZGF0YSBjYW4gYmUgcGFzc2VkIHVzaW5nICdleHRyYXMnLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNlbmRSZXN1bHQoeyBleHRyYXM6IHt9IH0pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=