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
var GooglePlusOriginal = /** @class */ (function (_super) {
    __extends(GooglePlusOriginal, _super);
    function GooglePlusOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GooglePlusOriginal.prototype.login = function (options) { return cordova(this, "login", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    GooglePlusOriginal.prototype.trySilentLogin = function (options) { return cordova(this, "trySilentLogin", {}, arguments); };
    GooglePlusOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    GooglePlusOriginal.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    GooglePlusOriginal.prototype.getSigningCertificateFingerprint = function () { return cordova(this, "getSigningCertificateFingerprint", {}, arguments); };
    GooglePlusOriginal.pluginName = "GooglePlus";
    GooglePlusOriginal.plugin = "cordova-plugin-googleplus";
    GooglePlusOriginal.pluginRef = "window.plugins.googleplus";
    GooglePlusOriginal.repo = "https://github.com/EddyVerbruggen/cordova-plugin-googleplus";
    GooglePlusOriginal.install = "ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid";
    GooglePlusOriginal.installVariables = ["REVERSED_CLIENT_ID"];
    GooglePlusOriginal.platforms = ["Android", "iOS"];
    return GooglePlusOriginal;
}(IonicNativePlugin));
var GooglePlus = new GooglePlusOriginal();
export { GooglePlus };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dvb2dsZS1wbHVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTZCeEMsOEJBQWlCOzs7O0lBVS9DLDBCQUFLLGFBQUMsT0FBWTtJQVVsQixtQ0FBYyxhQUFDLE9BQWE7SUFTNUIsMkJBQU07SUFTTiwrQkFBVTtJQVNWLHFEQUFnQzs7Ozs7Ozs7cUJBN0VsQztFQThCZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEdvb2dsZSBQbHVzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBHb29nbGVQbHVzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9nb29nbGUtcGx1cy9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGdvb2dsZVBsdXM6IEdvb2dsZVBsdXMpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5nb29nbGVQbHVzLmxvZ2luKHt9KVxyXG4gKiAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnR29vZ2xlUGx1cycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlcGx1cycsXHJcbiAgcGx1Z2luUmVmOiAnd2luZG93LnBsdWdpbnMuZ29vZ2xlcGx1cycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi1nb29nbGVwbHVzJyxcclxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWdvb2dsZXBsdXMgLS12YXJpYWJsZSBSRVZFUlNFRF9DTElFTlRfSUQ9bXlyZXZlcnNlZGNsaWVudGlkJyxcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1JFVkVSU0VEX0NMSUVOVF9JRCddLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVQbHVzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsb2dpbiBmdW5jdGlvbiB3YWxrcyB0aGUgdXNlciB0aHJvdWdoIHRoZSBHb29nbGUgQXV0aCBwcm9jZXNzLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDEsXHJcbiAgICBlcnJvckluZGV4OiAyLFxyXG4gIH0pXHJcbiAgbG9naW4ob3B0aW9uczogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFlvdSBjYW4gY2FsbCB0cnlTaWxlbnRMb2dpbiB0byBjaGVjayBpZiB0aGV5J3JlIGFscmVhZHkgc2lnbmVkIGluIHRvIHRoZSBhcHAgYW5kIHNpZ24gdGhlbSBpbiBzaWxlbnRseSBpZiB0aGV5IGFyZS5cclxuICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHRyeVNpbGVudExvZ2luKG9wdGlvbnM/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyB3aWxsIGNsZWFyIHRoZSBPQXV0aDIgdG9rZW4uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIHdpbGwgY2xlYXIgdGhlIE9BdXRoMiB0b2tlbiwgZm9yZ2V0IHdoaWNoIGFjY291bnQgd2FzIHVzZWQgdG8gbG9naW4sIGFuZCBkaXNjb25uZWN0IHRoYXQgYWNjb3VudCBmcm9tIHRoZSBhcHAuIFRoaXMgd2lsbCByZXF1aXJlIHRoZSB1c2VyIHRvIGFsbG93IHRoZSBhcHAgYWNjZXNzIGFnYWluIG5leHQgdGltZSB0aGV5IHNpZ24gaW4uIEJlIGF3YXJlIHRoYXQgdGhpcyBlZmZlY3QgaXMgbm90IGFsd2F5cyBpbnN0YW50YW5lb3VzLiBJdCBjYW4gdGFrZSB0aW1lIHRvIGNvbXBsZXRlbHkgZGlzY29ubmVjdC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBkaXNjb25uZWN0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIHdpbGwgcmV0cmlldmUgdGhlIEFuZHJvaWQgc2lnbmluZyBjZXJ0aWZpY2F0ZSBmaW5nZXJwcmludCB3aGljaCBpcyByZXF1aXJlZCBpbiB0aGUgR29vZ2xlIERldmVsb3BlciBDb25zb2xlLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFNpZ25pbmdDZXJ0aWZpY2F0ZUZpbmdlcnByaW50KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==