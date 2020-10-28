import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var BrowserTab = /** @class */ (function (_super) {
    __extends(BrowserTab, _super);
    function BrowserTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserTab.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    BrowserTab.prototype.openUrl = function (url) { return cordova(this, "openUrl", {}, arguments); };
    BrowserTab.prototype.close = function () { return cordova(this, "close", {}, arguments); };
    BrowserTab.pluginName = "BrowserTab";
    BrowserTab.plugin = "cordova-plugin-browsertab";
    BrowserTab.pluginRef = "cordova.plugins.browsertab";
    BrowserTab.repo = "https://github.com/google/cordova-plugin-browsertab";
    BrowserTab.platforms = ["Android", "iOS"];
    BrowserTab = __decorate([
        Injectable()
    ], BrowserTab);
    return BrowserTab;
}(IonicNativePlugin));
export { BrowserTab };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jyb3dzZXItdGFiL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDeEMsOEJBQWlCOzs7O0lBTS9DLGdDQUFXO0lBVVgsNEJBQU8sYUFBQyxHQUFXO0lBU25CLDBCQUFLOzs7Ozs7SUF6Qk0sVUFBVTtRQUR0QixVQUFVLEVBQUU7T0FDQSxVQUFVO3FCQWxDdkI7RUFrQ2dDLGlCQUFpQjtTQUFwQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBCcm93c2VyIFRhYlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gcHJvdmlkZXMgYW4gaW50ZXJmYWNlIHRvIGluLWFwcCBicm93c2VyIHRhYnMgdGhhdCBleGlzdCBvbiBzb21lIG1vYmlsZSBwbGF0Zm9ybXMsIHNwZWNpZmljYWxseSBbQ3VzdG9tIFRhYnNdKGh0dHA6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vdG9vbHMvc3VwcG9ydC1saWJyYXJ5L2ZlYXR1cmVzLmh0bWwjY3VzdG9tLXRhYnMpIG9uIEFuZHJvaWQgKGluY2x1ZGluZyB0aGUgW0Nocm9tZSBDdXN0b20gVGFic10oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9tdWx0aWRldmljZS9hbmRyb2lkL2N1c3RvbXRhYnMpIGltcGxlbWVudGF0aW9uKSwgYW5kIFtTRlNhZmFyaVZpZXdDb250cm9sbGVyXShodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vbGlicmFyeS9pb3MvZG9jdW1lbnRhdGlvbi9TYWZhcmlTZXJ2aWNlcy9SZWZlcmVuY2UvU0ZTYWZhcmlWaWV3Q29udHJvbGxlcl9SZWYvKSBvbiBpT1MuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEJyb3dzZXJUYWIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Jyb3dzZXItdGFiL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYnJvd3NlclRhYjogQnJvd3NlclRhYikge1xyXG4gKlxyXG4gKiAgIGJyb3dzZXJUYWIuaXNBdmFpbGFibGUoKVxyXG4gKiAgICAgLnRoZW4oaXNBdmFpbGFibGUgPT4ge1xyXG4gKiAgICAgICBpZiAoaXNBdmFpbGFibGUpIHtcclxuICogICAgICAgICBicm93c2VyVGFiLm9wZW5VcmwoJ2h0dHBzOi8vaW9uaWMuaW8nKTtcclxuICogICAgICAgfSBlbHNlIHtcclxuICogICAgICAgICAvLyBvcGVuIFVSTCB3aXRoIEluQXBwQnJvd3NlciBpbnN0ZWFkIG9yIFNhZmFyaVZpZXdDb250cm9sbGVyXHJcbiAqICAgICAgIH1cclxuICogICAgIH0pO1xyXG4gKiB9XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0Jyb3dzZXJUYWInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJyb3dzZXJ0YWInLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5icm93c2VydGFiJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9jb3Jkb3ZhLXBsdWdpbi1icm93c2VydGFiJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnJvd3NlclRhYiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDaGVjayBpZiBCcm93c2VyVGFiIG9wdGlvbiBpcyBhdmFpbGFibGVcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBjaGVjayBpcyBzdWNjZXNzZnVsIGFuZCByZXR1cm5zIHRydWUgb3IgZmFsc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaXNBdmFpbGFibGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW5zIHRoZSBwcm92aWRlZCBVUkwgdXNpbmcgYSBicm93c2VyIHRhYlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgIFRoZSBVUkwgeW91IHdhbnQgdG8gb3BlblxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGNoZWNrIG9wZW4gd2FzIHN1Y2Nlc3NmdWxcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgb3BlblVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbG9zZXMgYnJvd3NlciB0YWJcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBjbG9zZSB3YXMgZmluaXNoZWRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2xvc2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19