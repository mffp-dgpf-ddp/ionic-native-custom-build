import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var TwitterConnect = /** @class */ (function (_super) {
    __extends(TwitterConnect, _super);
    function TwitterConnect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TwitterConnect.prototype.login = function () { return cordova(this, "login", {}, arguments); };
    TwitterConnect.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    TwitterConnect.prototype.showUser = function () { return cordova(this, "showUser", {}, arguments); };
    TwitterConnect.pluginName = "TwitterConnect";
    TwitterConnect.plugin = "twitter-connect-plugin";
    TwitterConnect.pluginRef = "TwitterConnect";
    TwitterConnect.repo = "https://github.com/chroa/twitter-connect-plugin";
    TwitterConnect.install = "ionic cordova plugin add https://github.com/chroa/twitter-connect-plugin --variable FABRIC_KEY=<Fabric API Key> --variable TWITTER_KEY=<Twitter Consumer Key> --variable TWITTER_SECRET=<Twitter Consumer Secret>";
    TwitterConnect.installVariables = ["FABRIC_KEY", "TWITTER_KEY", "TWITTER_SECRET"];
    TwitterConnect.platforms = ["Android", "iOS"];
    TwitterConnect = __decorate([
        Injectable()
    ], TwitterConnect);
    return TwitterConnect;
}(IonicNativePlugin));
export { TwitterConnect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3R3aXR0ZXItY29ubmVjdC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErRHBDLGtDQUFpQjs7OztJQU1uRCw4QkFBSztJQVNMLCtCQUFNO0lBU04saUNBQVE7Ozs7Ozs7O0lBeEJHLGNBQWM7UUFEMUIsVUFBVSxFQUFFO09BQ0EsY0FBYzt5QkFoRTNCO0VBZ0VvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFR3aXR0ZXJDb25uZWN0UmVzcG9uc2Uge1xyXG4gIC8qKlxyXG4gICAqIFR3aXR0ZXIgVXNlcm5hbWVcclxuICAgKi9cclxuICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFR3aXR0ZXIgVXNlciBJRFxyXG4gICAqL1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFR3aXR0ZXIgT0F1dGggU2VjcmV0XHJcbiAgICovXHJcbiAgc2VjcmV0OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVHdpdHRlciBPQXV0aCBUb2tlblxyXG4gICAqL1xyXG4gIHRva2VuOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBUd2l0dGVyIENvbm5lY3RcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFBsdWdpbiB0byB1c2UgVHdpdHRlciBTaW5nbGUgU2lnbiBPblxyXG4gKiBVc2VzIFR3aXR0ZXIncyBGYWJyaWMgU0RLXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgVHdpdHRlckNvbm5lY3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3R3aXR0ZXItY29ubmVjdC9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHR3aXR0ZXI6IFR3aXR0ZXJDb25uZWN0KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGZ1bmN0aW9uIG9uU3VjY2VzcyhyZXNwb25zZSkge1xyXG4gKiAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICpcclxuICogICAvLyBXaWxsIGNvbnNvbGUgbG9nIHNvbWV0aGluZyBsaWtlOlxyXG4gKiAgIC8vIHtcclxuICogICAvLyAgIHVzZXJOYW1lOiAnbXl1c2VyJyxcclxuICogICAvLyAgIHVzZXJJZDogJzEyMzU4MTAyJyxcclxuICogICAvLyAgIHNlY3JldDogJ3Rva2VuU2VjcmV0J1xyXG4gKiAgIC8vICAgdG9rZW46ICdhY2Nlc3NUb2tlbkhlcmUnXHJcbiAqICAgLy8gfVxyXG4gKiB9XHJcbiAqXHJcbiAqIHRoaXMudHdpdHRlci5sb2dpbigpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcclxuICpcclxuICogdGhpcy50d2l0dGVyLmxvZ291dCgpLnRoZW4ob25Mb2dvdXRTdWNjZXNzLCBvbkxvZ291dEVycm9yKTtcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIFR3aXR0ZXJDb25uZWN0UmVzcG9uc2VcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdUd2l0dGVyQ29ubmVjdCcsXHJcbiAgcGx1Z2luOiAndHdpdHRlci1jb25uZWN0LXBsdWdpbicsXHJcbiAgcGx1Z2luUmVmOiAnVHdpdHRlckNvbm5lY3QnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY2hyb2EvdHdpdHRlci1jb25uZWN0LXBsdWdpbicsXHJcbiAgaW5zdGFsbDpcclxuICAgICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgaHR0cHM6Ly9naXRodWIuY29tL2Nocm9hL3R3aXR0ZXItY29ubmVjdC1wbHVnaW4gLS12YXJpYWJsZSBGQUJSSUNfS0VZPTxGYWJyaWMgQVBJIEtleT4gLS12YXJpYWJsZSBUV0lUVEVSX0tFWT08VHdpdHRlciBDb25zdW1lciBLZXk+IC0tdmFyaWFibGUgVFdJVFRFUl9TRUNSRVQ9PFR3aXR0ZXIgQ29uc3VtZXIgU2VjcmV0PicsXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogWydGQUJSSUNfS0VZJywgJ1RXSVRURVJfS0VZJywgJ1RXSVRURVJfU0VDUkVUJ10sXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFR3aXR0ZXJDb25uZWN0IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIExvZ3MgaW5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxUd2l0dGVyQ29ubmVjdFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBpZiBsb2dnZWQgaW4gYW5kIHJlamVjdHMgaWYgZmFpbGVkIHRvIGxvZ2luXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGxvZ2luKCk6IFByb21pc2U8VHdpdHRlckNvbm5lY3RSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9ncyBvdXRcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIGxvZ2dlZCBvdXQgYW5kIHJlamVjdHMgaWYgZmFpbGVkIHRvIGxvZ291dFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBsb2dvdXQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdXNlcidzIHByb2ZpbGUgaW5mb3JtYXRpb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIHVzZXIgcHJvZmlsZSBpcyBzdWNjZXNzZnVsbHkgcmV0cmlldmVkIGFuZCByZWplY3RzIGlmIHJlcXVlc3QgZmFpbHNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2hvd1VzZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19