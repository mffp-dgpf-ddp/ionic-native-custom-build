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
var SplashScreenOriginal = /** @class */ (function (_super) {
    __extends(SplashScreenOriginal, _super);
    function SplashScreenOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplashScreenOriginal.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
    SplashScreenOriginal.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    SplashScreenOriginal.pluginName = "SplashScreen";
    SplashScreenOriginal.plugin = "cordova-plugin-splashscreen";
    SplashScreenOriginal.pluginRef = "navigator.splashscreen";
    SplashScreenOriginal.repo = "https://github.com/apache/cordova-plugin-splashscreen";
    SplashScreenOriginal.platforms = ["Amazon Fire OS", "Android", "iOS", "Windows"];
    return SplashScreenOriginal;
}(IonicNativePlugin));
var SplashScreen = new SplashScreenOriginal();
export { SplashScreen };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NwbGFzaC1zY3JlZW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNEJ0QyxnQ0FBaUI7Ozs7SUFPakQsMkJBQUk7SUFRSiwyQkFBSTs7Ozs7O3VCQTVDTjtFQTZCa0MsaUJBQWlCO1NBQXRDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNwbGFzaCBTY3JlZW5cclxuICogQHByZW1pZXIgc3BsYXNoc2NyZWVuXHJcbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxyXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBwbHVnaW4gZGlzcGxheXMgYW5kIGhpZGVzIGEgc3BsYXNoIHNjcmVlbiBkdXJpbmcgYXBwbGljYXRpb24gbGF1bmNoLiBUaGUgbWV0aG9kcyBiZWxvdyBhbGxvd3Mgc2hvd2luZyBhbmQgaGlkaW5nIHRoZSBzcGxhc2hzY3JlZW4gYWZ0ZXIgdGhlIGFwcCBoYXMgbG9hZGVkLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBTcGxhc2hTY3JlZW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwbGFzaC1zY3JlZW4vbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzcGxhc2hTY3JlZW46IFNwbGFzaFNjcmVlbikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLnNwbGFzaFNjcmVlbi5zaG93KCk7XHJcbiAqXHJcbiAqIHRoaXMuc3BsYXNoU2NyZWVuLmhpZGUoKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnU3BsYXNoU2NyZWVuJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zcGxhc2hzY3JlZW4nLFxyXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5zcGxhc2hzY3JlZW4nLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLXNwbGFzaHNjcmVlbicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3BsYXNoU2NyZWVuIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFNob3dzIHRoZSBzcGxhc2hzY3JlZW5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgc2hvdygpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpZGVzIHRoZSBzcGxhc2hzY3JlZW5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgaGlkZSgpOiB2b2lkIHt9XHJcbn1cclxuIl19