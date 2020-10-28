import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import { Observable } from 'rxjs';
var WebIntent = /** @class */ (function (_super) {
    __extends(WebIntent, _super);
    function WebIntent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebIntent.prototype.startActivity = function (options) { return cordova(this, "startActivity", {}, arguments); };
    WebIntent.prototype.startActivityForResult = function (options) { return cordova(this, "startActivityForResult", {}, arguments); };
    WebIntent.prototype.hasExtra = function (extra) { return cordova(this, "hasExtra", {}, arguments); };
    WebIntent.prototype.getExtra = function (extra) { return cordova(this, "getExtra", {}, arguments); };
    WebIntent.prototype.getUri = function () { return cordova(this, "getUri", {}, arguments); };
    WebIntent.prototype.onIntent = function () { return cordova(this, "onIntent", { "observable": true }, arguments); };
    WebIntent.prototype.sendBroadcast = function (options) { return cordova(this, "sendBroadcast", {}, arguments); };
    WebIntent.prototype.startService = function (options) { return cordova(this, "startService", {}, arguments); };
    WebIntent.prototype.registerBroadcastReceiver = function (filters) { return cordova(this, "registerBroadcastReceiver", { "observable": true }, arguments); };
    WebIntent.prototype.unregisterBroadcastReceiver = function () { return cordova(this, "unregisterBroadcastReceiver", { "sync": true }, arguments); };
    WebIntent.prototype.onActivityResult = function () { return cordova(this, "onActivityResult", { "sync": true }, arguments); };
    WebIntent.prototype.getIntent = function () { return cordova(this, "getIntent", {}, arguments); };
    WebIntent.prototype.sendResult = function (_a) {
        var _b = _a.extras;
        return cordova(this, "sendResult", {}, arguments);
    };
    Object.defineProperty(WebIntent.prototype, "ACTION_SEND", {
        get: function () { return cordovaPropertyGet(this, "ACTION_SEND"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_SEND", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_VIEW", {
        get: function () { return cordovaPropertyGet(this, "ACTION_VIEW"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_VIEW", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_TEXT", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_TEXT"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_TEXT", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_SUBJECT", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_SUBJECT"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_SUBJECT", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_STREAM", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_STREAM"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_STREAM", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_EMAIL", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_EMAIL"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_EMAIL", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_CALL", {
        get: function () { return cordovaPropertyGet(this, "ACTION_CALL"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_CALL", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_SENDTO", {
        get: function () { return cordovaPropertyGet(this, "ACTION_SENDTO"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_SENDTO", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_GET_CONTENT", {
        get: function () { return cordovaPropertyGet(this, "ACTION_GET_CONTENT"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_GET_CONTENT", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_PICK", {
        get: function () { return cordovaPropertyGet(this, "ACTION_PICK"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_PICK", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_INSTALL_PACKAGE", {
        get: function () { return cordovaPropertyGet(this, "ACTION_INSTALL_PACKAGE"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_INSTALL_PACKAGE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_UNINSTALL_PACKAGE", {
        get: function () { return cordovaPropertyGet(this, "ACTION_UNINSTALL_PACKAGE"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_UNINSTALL_PACKAGE", value); },
        enumerable: true,
        configurable: true
    });
    WebIntent.pluginName = "WebIntent";
    WebIntent.plugin = "com-darryncampbell-cordova-plugin-intent";
    WebIntent.pluginRef = "plugins.intentShim";
    WebIntent.repo = "https://github.com/darryncampbell/darryncampbell-cordova-plugin-intent";
    WebIntent.platforms = ["Android"];
    WebIntent = __decorate([
        Injectable()
    ], WebIntent);
    return WebIntent;
}(IonicNativePlugin));
export { WebIntent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlYi1pbnRlbnQvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sc0VBQXVELE1BQU0sb0JBQW9CLENBQUM7QUFDekYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUF1RUgsNkJBQWlCOzs7O0lBMkY5QyxpQ0FBYSxhQUFDLE9BQXNCO0lBVXBDLDBDQUFzQixhQUFDLE9BQXNCO0lBVTdDLDRCQUFRLGFBQUMsS0FBYTtJQVV0Qiw0QkFBUSxhQUFDLEtBQWE7SUFTdEIsMEJBQU07SUFXTiw0QkFBUTtJQVVSLGlDQUFhLGFBQUMsT0FBc0I7SUFVcEMsZ0NBQVksYUFBQyxPQUFzQjtJQVluQyw2Q0FBeUIsYUFBQyxPQUF5QztJQVFuRSwrQ0FBMkI7SUFNM0Isb0NBQWdCO0lBTWhCLDZCQUFTO0lBVVQsOEJBQVUsYUFBQyxFQUFjO1lBQVosY0FBVTs7OzBCQXJNdkIsa0NBQVc7Ozs7OzswQkFPWCxrQ0FBVzs7Ozs7OzBCQU9YLGlDQUFVOzs7Ozs7MEJBT1Ysb0NBQWE7Ozs7OzswQkFPYixtQ0FBWTs7Ozs7OzBCQU9aLGtDQUFXOzs7Ozs7MEJBT1gsa0NBQVc7Ozs7OzswQkFPWCxvQ0FBYTs7Ozs7OzBCQU9iLHlDQUFrQjs7Ozs7OzBCQU9sQixrQ0FBVzs7Ozs7OzBCQU9YLDZDQUFzQjs7Ozs7OzBCQU90QiwrQ0FBd0I7Ozs7Ozs7Ozs7O0lBbkZiLFNBQVM7UUFEckIsVUFBVSxFQUFFO09BQ0EsU0FBUztvQkF6RXRCO0VBeUUrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnRlbnRDbGlwSXRlbSB7XHJcbiAgdXJpOiBzdHJpbmc7XHJcbiAgdHlwZT86IHN0cmluZztcclxuICBleHRlbnNpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW50ZW50IHtcclxuICBhY3Rpb246IHN0cmluZztcclxuICBjbGlwSXRlbXM6IEludGVudENsaXBJdGVtW107XHJcbiAgY29tcG9uZW50OiBzdHJpbmc7XHJcbiAgZXh0cmFzOiBvYmplY3Q7XHJcbiAgZmxhZ3M6IG51bWJlcjtcclxuICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVnaXN0ZXJCcm9hZGNhc3RSZWNlaXZlck9wdGlvbnMge1xyXG4gIGZpbHRlckFjdGlvbnM/OiBzdHJpbmdbXTtcclxuICBmaWx0ZXJDYXRlZ29yaWVzPzogc3RyaW5nW107XHJcbiAgZmlsdGVyRGF0YVNjaGVtZXM/OiBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnRlbnRPcHRpb25zIHtcclxuICByZXF1ZXN0Q29kZT86IG51bWJlcjtcclxuICB0eXBlPzogc3RyaW5nO1xyXG4gIHBhY2thZ2U/OiBzdHJpbmc7XHJcbiAgdXJsPzogc3RyaW5nO1xyXG4gIGV4dHJhcz86IG9iamVjdDtcclxuICBhY3Rpb24/OiBzdHJpbmc7XHJcbiAgY29tcG9uZW50Pzoge1xyXG4gICAgcGFja2FnZTogc3RyaW5nO1xyXG4gICAgY2xhc3M6IHN0cmluZztcclxuICB9O1xyXG4gIGZsYWdzPzogbnVtYmVyW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBXZWIgSW50ZW50XHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIFBsdWdpbiBwcm92aWRlcyBhIGdlbmVyYWwgcHVycG9zZSBzaGltIGxheWVyIGZvciB0aGUgQW5kcm9pZCBpbnRlbnQgbWVjaGFuaXNtLCBleHBvc2luZyB2YXJpb3VzIHdheXMgdG8gaGFuZGxlIHNlbmRpbmcgYW5kIHJlY2VpdmluZyBpbnRlbnRzLlxyXG4gKiBAdXNhZ2VcclxuICogRm9yIHVzYWdlIGluZm9ybWF0aW9uIHBsZWFzZSByZWZlciB0byB0aGUgcGx1Z2luJ3MgR2l0aHViIHJlcG8uXHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgV2ViSW50ZW50IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS93ZWItaW50ZW50L25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgd2ViSW50ZW50OiBXZWJJbnRlbnQpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogY29uc3Qgb3B0aW9ucyA9IHtcclxuICogICBhY3Rpb246IHRoaXMud2ViSW50ZW50LkFDVElPTl9WSUVXLFxyXG4gKiAgIHVybDogJ3BhdGgvdG8vZmlsZScsXHJcbiAqICAgdHlwZTogJ2FwcGxpY2F0aW9uL3ZuZC5hbmRyb2lkLnBhY2thZ2UtYXJjaGl2ZSdcclxuICogfVxyXG4gKlxyXG4gKiB0aGlzLndlYkludGVudC5zdGFydEFjdGl2aXR5KG9wdGlvbnMpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcclxuICpcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIEludGVudE9wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdXZWJJbnRlbnQnLFxyXG4gIHBsdWdpbjogJ2NvbS1kYXJyeW5jYW1wYmVsbC1jb3Jkb3ZhLXBsdWdpbi1pbnRlbnQnLFxyXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuaW50ZW50U2hpbScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYXJyeW5jYW1wYmVsbC9kYXJyeW5jYW1wYmVsbC1jb3Jkb3ZhLXBsdWdpbi1pbnRlbnQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYkludGVudCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQUNUSU9OX1NFTkQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEFDVElPTl9WSUVXOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBleHRyYXNcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVYVFJBX1RFWFQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGV4dHJhc1xyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVhUUkFfU1VCSkVDVDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgZXh0cmFzXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFWFRSQV9TVFJFQU06IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGV4dHJhc1xyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVhUUkFfRU1BSUw6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEFDVElPTl9DQUxMOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBBQ1RJT05fU0VORFRPOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBBQ1RJT05fR0VUX0NPTlRFTlQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEFDVElPTl9QSUNLOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBBQ1RJT05fSU5TVEFMTF9QQUNLQUdFOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBBQ1RJT05fVU5JTlNUQUxMX1BBQ0tBR0U6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogTGF1bmNoZXMgYW4gQW5kcm9pZCBpbnRlbnRcclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SW50ZW50T3B0aW9uc31cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdGFydEFjdGl2aXR5KG9wdGlvbnM6IEludGVudE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIGEgbmV3IGFjdGl2aXR5IGFuZCByZXR1cm4gdGhlIHJlc3VsdCB0byB0aGUgYXBwbGljYXRpb25cclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SW50ZW50T3B0aW9uc31cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdGFydEFjdGl2aXR5Rm9yUmVzdWx0KG9wdGlvbnM6IEludGVudE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoaXMgYXBwIHdhcyBpbnZva2VkIHdpdGggc3BlY2lmaWVkIGV4dHJhXHJcbiAgICogQHBhcmFtIGV4dHJhIHtzdHJpbmd9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaGFzRXh0cmEoZXh0cmE6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBleHRyYSB0aGF0IHRoaXMgYXBwIHdhcyBpbnZva2VkIHdpdGhcclxuICAgKiBAcGFyYW0gZXh0cmEge3N0cmluZ31cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRFeHRyYShleHRyYTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIFVyaSB0aGUgYXBwIHdhcyBpbnZva2VkIHdpdGhcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRVcmkoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGNvbnRlbnQgb2YgdGhlIGludGVudCB1c2VkIHdoZW5ldmVyIHRoZSBhcHBsaWNhdGlvbiBhY3Rpdml0eSBpcyBsYXVuY2hlZFxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEludGVudD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICB9KVxyXG4gIG9uSW50ZW50KCk6IE9ic2VydmFibGU8SW50ZW50PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZW5kcyBhIGN1c3RvbSBpbnRlbnQgcGFzc2luZyBvcHRpb25hbCBleHRyYXNcclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SW50ZW50T3B0aW9uc31cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZW5kQnJvYWRjYXN0KG9wdGlvbnM6IEludGVudE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVxdWVzdCB0aGF0IGEgZ2l2ZW4gYXBwbGljYXRpb24gc2VydmljZSBiZSBzdGFydGVkXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge0ludGVudE9wdGlvbnN9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RhcnRTZXJ2aWNlKG9wdGlvbnM6IEludGVudE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXJzIGEgYnJvYWRjYXN0IHJlY2VpdmVyIGZvciB0aGUgc3BlY2lmaWVkIGZpbHRlcnNcclxuICAgKiBAcGFyYW0gZmlsdGVycyB7UmVnaXN0ZXJCcm9hZGNhc3RSZWNlaXZlck9wdGlvbnN9XHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgcmVnaXN0ZXJCcm9hZGNhc3RSZWNlaXZlcihmaWx0ZXJzOiBSZWdpc3RlckJyb2FkY2FzdFJlY2VpdmVyT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVbnJlZ2lzdGVycyBhIGJyb2FkY2FzdCByZWNlaXZlclxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHVucmVnaXN0ZXJCcm9hZGNhc3RSZWNlaXZlcigpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgb25BY3Rpdml0eVJlc3VsdCgpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEludGVudCgpOiBQcm9taXNlPEludGVudD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VuZCBhIHJlc3VsdCBiYWNrIHRvIHRoZSBJbnRlbnQgdGhhdCBzdGFydGVkIHRoaXMgQWN0aXZpdHkuXHJcbiAgICogVGhlIGRhdGEgY2FuIGJlIHBhc3NlZCB1c2luZyAnZXh0cmFzJy5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZW5kUmVzdWx0KHsgZXh0cmFzOiB7fSB9KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19