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
var SmsRetrieverOriginal = /** @class */ (function (_super) {
    __extends(SmsRetrieverOriginal, _super);
    function SmsRetrieverOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmsRetrieverOriginal.prototype.startWatching = function () { return cordova(this, "startWatching", {}, arguments); };
    SmsRetrieverOriginal.prototype.getAppHash = function () { return cordova(this, "getAppHash", {}, arguments); };
    SmsRetrieverOriginal.pluginName = "SmsRetriever";
    SmsRetrieverOriginal.plugin = "cordova-plugin-sms-retriever-manager";
    SmsRetrieverOriginal.pluginRef = "cordova.plugins.smsRetriever";
    SmsRetrieverOriginal.repo = "https://github.com/hanatharesh2712/ionic-native-sms-retriever-plugin-master";
    SmsRetrieverOriginal.install = "ionic cordova plugin add cordova-plugin-sms-retriever-manager --variable PLAY_SERVICES_VERSION=\"15.0.1\"";
    SmsRetrieverOriginal.installVariables = ["PLAY_SERVICES_VERSION"];
    SmsRetrieverOriginal.platforms = ["Android"];
    return SmsRetrieverOriginal;
}(IonicNativePlugin));
var SmsRetriever = new SmsRetrieverOriginal();
export { SmsRetriever };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Ntcy1yZXRyaWV2ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBb0N0QyxnQ0FBaUI7Ozs7SUFNakQsb0NBQWE7SUFTYixpQ0FBVTs7Ozs7Ozs7dUJBcERaO0VBcUNrQyxpQkFBaUI7U0FBdEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgU21zIFJldHJpZXZlclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gcmV0cml2ZXMgdGhlIFNNUyB3aGljaCBhcnJpdmUgd2l0aG91dCByZXF1aXJpbmcgUkVBRCBwZXJtaXNzaW9ucy5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgU21zUmV0cmlldmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zbXMtcmV0cmlldmVyJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzbXNSZXRyaWV2ZXI6IFNtc1JldHJpZXZlcikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLnNtc1JldHJpZXZlci5nZXRBcHBIYXNoKClcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqIHRoaXMuc21zUmV0cmlldmVyLnN0YXJ0V2F0Y2hpbmcoKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnU21zUmV0cmlldmVyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zbXMtcmV0cmlldmVyLW1hbmFnZXInLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5zbXNSZXRyaWV2ZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaGFuYXRoYXJlc2gyNzEyL2lvbmljLW5hdGl2ZS1zbXMtcmV0cmlldmVyLXBsdWdpbi1tYXN0ZXInLFxyXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tc21zLXJldHJpZXZlci1tYW5hZ2VyIC0tdmFyaWFibGUgUExBWV9TRVJWSUNFU19WRVJTSU9OPVwiMTUuMC4xXCInLFxyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnUExBWV9TRVJWSUNFU19WRVJTSU9OJ10sXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU21zUmV0cmlldmVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RhcnQgd2F0aGNoaW5nIG1lc3NhZ2UgYXJyaXZlIGV2ZW50IGFuZCByZXRyaXZlIG1lc3NhZ2UgdGV4dC5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiByZXRyaXZlcyBTTVMgdGV4dCBvciBUSU1FT1VUIGFmdGVyIDUgbWluLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdGFydFdhdGNoaW5nKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIHRvIGdldCBoYXNoIHN0cmluZyBvZiBBUFAuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc3VjY2Vzc2Z1bGx5IGdlbmVyYXRlIGhhc2ggb2YgQVBQLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRBcHBIYXNoKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==