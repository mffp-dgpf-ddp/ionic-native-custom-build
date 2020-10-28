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
var BrowserTabOriginal = /** @class */ (function (_super) {
    __extends(BrowserTabOriginal, _super);
    function BrowserTabOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserTabOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    BrowserTabOriginal.prototype.openUrl = function (url) { return cordova(this, "openUrl", {}, arguments); };
    BrowserTabOriginal.prototype.close = function () { return cordova(this, "close", {}, arguments); };
    BrowserTabOriginal.pluginName = "BrowserTab";
    BrowserTabOriginal.plugin = "cordova-plugin-browsertab";
    BrowserTabOriginal.pluginRef = "cordova.plugins.browsertab";
    BrowserTabOriginal.repo = "https://github.com/google/cordova-plugin-browsertab";
    BrowserTabOriginal.platforms = ["Android", "iOS"];
    return BrowserTabOriginal;
}(IonicNativePlugin));
var BrowserTab = new BrowserTabOriginal();
export { BrowserTab };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jyb3dzZXItdGFiL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDeEMsOEJBQWlCOzs7O0lBTS9DLGdDQUFXO0lBVVgsNEJBQU8sYUFBQyxHQUFXO0lBU25CLDBCQUFLOzs7Ozs7cUJBM0RQO0VBa0NnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgQnJvd3NlciBUYWJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIHByb3ZpZGVzIGFuIGludGVyZmFjZSB0byBpbi1hcHAgYnJvd3NlciB0YWJzIHRoYXQgZXhpc3Qgb24gc29tZSBtb2JpbGUgcGxhdGZvcm1zLCBzcGVjaWZpY2FsbHkgW0N1c3RvbSBUYWJzXShodHRwOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL3Rvb2xzL3N1cHBvcnQtbGlicmFyeS9mZWF0dXJlcy5odG1sI2N1c3RvbS10YWJzKSBvbiBBbmRyb2lkIChpbmNsdWRpbmcgdGhlIFtDaHJvbWUgQ3VzdG9tIFRhYnNdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vbXVsdGlkZXZpY2UvYW5kcm9pZC9jdXN0b210YWJzKSBpbXBsZW1lbnRhdGlvbiksIGFuZCBbU0ZTYWZhcmlWaWV3Q29udHJvbGxlcl0oaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2xpYnJhcnkvaW9zL2RvY3VtZW50YXRpb24vU2FmYXJpU2VydmljZXMvUmVmZXJlbmNlL1NGU2FmYXJpVmlld0NvbnRyb2xsZXJfUmVmLykgb24gaU9TLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBCcm93c2VyVGFiIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9icm93c2VyLXRhYi9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyb3dzZXJUYWI6IEJyb3dzZXJUYWIpIHtcclxuICpcclxuICogICBicm93c2VyVGFiLmlzQXZhaWxhYmxlKClcclxuICogICAgIC50aGVuKGlzQXZhaWxhYmxlID0+IHtcclxuICogICAgICAgaWYgKGlzQXZhaWxhYmxlKSB7XHJcbiAqICAgICAgICAgYnJvd3NlclRhYi5vcGVuVXJsKCdodHRwczovL2lvbmljLmlvJyk7XHJcbiAqICAgICAgIH0gZWxzZSB7XHJcbiAqICAgICAgICAgLy8gb3BlbiBVUkwgd2l0aCBJbkFwcEJyb3dzZXIgaW5zdGVhZCBvciBTYWZhcmlWaWV3Q29udHJvbGxlclxyXG4gKiAgICAgICB9XHJcbiAqICAgICB9KTtcclxuICogfVxyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdCcm93c2VyVGFiJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1icm93c2VydGFiJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuYnJvd3NlcnRhYicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY29yZG92YS1wbHVnaW4tYnJvd3NlcnRhYicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJyb3dzZXJUYWIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgQnJvd3NlclRhYiBvcHRpb24gaXMgYXZhaWxhYmxlXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gY2hlY2sgaXMgc3VjY2Vzc2Z1bCBhbmQgcmV0dXJucyB0cnVlIG9yIGZhbHNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcGVucyB0aGUgcHJvdmlkZWQgVVJMIHVzaW5nIGEgYnJvd3NlciB0YWJcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsICBUaGUgVVJMIHlvdSB3YW50IHRvIG9wZW5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBjaGVjayBvcGVuIHdhcyBzdWNjZXNzZnVsXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIG9wZW5VcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2VzIGJyb3dzZXIgdGFiXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gY2xvc2Ugd2FzIGZpbmlzaGVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNsb3NlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==