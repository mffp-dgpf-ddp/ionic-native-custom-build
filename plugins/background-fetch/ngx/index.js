import { __decorate, __extends } from "tslib";
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var BackgroundFetch = /** @class */ (function (_super) {
    __extends(BackgroundFetch, _super);
    function BackgroundFetch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackgroundFetch.prototype.configure = function (config) { return cordova(this, "configure", { "callbackOrder": "reverse" }, arguments); };
    BackgroundFetch.prototype.start = function () { return cordova(this, "start", {}, arguments); };
    BackgroundFetch.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    BackgroundFetch.prototype.finish = function (taskId) { return cordova(this, "finish", { "sync": true }, arguments); };
    BackgroundFetch.prototype.status = function () { return cordova(this, "status", {}, arguments); };
    BackgroundFetch.pluginName = "BackgroundFetch";
    BackgroundFetch.plugin = "cordova-plugin-background-fetch";
    BackgroundFetch.pluginRef = "BackgroundFetch";
    BackgroundFetch.repo = "https://github.com/transistorsoft/cordova-plugin-background-fetch";
    BackgroundFetch.platforms = ["iOS"];
    BackgroundFetch = __decorate([
        Injectable()
    ], BackgroundFetch);
    return BackgroundFetch;
}(IonicNativePlugin));
export { BackgroundFetch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhY2tncm91bmQtZmV0Y2gvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBMkROLG1DQUFpQjs7OztJQVVwRCxtQ0FBUyxhQUFDLE1BQTZCO0lBVXZDLCtCQUFLO0lBU0wsOEJBQUk7SUFVSixnQ0FBTSxhQUFDLE1BQWM7SUFPckIsZ0NBQU07Ozs7OztJQTlDSyxlQUFlO1FBRDNCLFVBQVUsRUFBRTtPQUNBLGVBQWU7MEJBNUQ1QjtFQTREcUMsaUJBQWlCO1NBQXpDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYWNrZ3JvdW5kRmV0Y2hDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIFNldCB0cnVlIHRvIGNlYXNlIGJhY2tncm91bmQtZmV0Y2ggZnJvbSBvcGVyYXRpbmcgYWZ0ZXIgdXNlciBcImNsb3Nlc1wiIHRoZSBhcHAuIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICovXHJcbiAgc3RvcE9uVGVybWluYXRlPzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEJhY2tncm91bmQgRmV0Y2hcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIGlPUyBCYWNrZ3JvdW5kIEZldGNoIEltcGxlbWVudGF0aW9uLiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9yZWZlcmVuY2UvdWlraXQvdWlhcHBsaWNhdGlvbiMxNjU3Mzk5XHJcbiAqIGlPUyBCYWNrZ3JvdW5kIEZldGNoIGlzIGJhc2ljYWxseSBhbiBBUEkgd2hpY2ggd2FrZXMgdXAgeW91ciBhcHAgYWJvdXQgZXZlcnkgMTUgbWludXRlcyAoZHVyaW5nIHRoZSB1c2VyJ3MgcHJpbWUtdGltZSBob3VycykgYW5kIHByb3ZpZGVzIHlvdXIgYXBwIGV4YWN0bHkgMzBzIG9mIGJhY2tncm91bmQgcnVubmluZy10aW1lLiBUaGlzIHBsdWdpbiB3aWxsIGV4ZWN1dGUgeW91ciBwcm92aWRlZCBjYWxsYmFja0ZuIHdoZW5ldmVyIGEgYmFja2dyb3VuZC1mZXRjaCBldmVudCBvY2N1cnMuIFRoZXJlIGlzIG5vIHdheSB0byBpbmNyZWFzZSB0aGUgcmF0ZSB3aGljaCBhIGZldGNoLWV2ZW50IG9jY3VycyBhbmQgdGhpcyBwbHVnaW4gc2V0cyB0aGUgcmF0ZSB0byB0aGUgbW9zdCBmcmVxdWVudCBwb3NzaWJsZSB2YWx1ZSBvZiBVSUFwcGxpY2F0aW9uQmFja2dyb3VuZEZldGNoSW50ZXJ2YWxNaW5pbXVtIC0tIGlPUyBkZXRlcm1pbmVzIHRoZSByYXRlIGF1dG9tYXRpY2FsbHkgYmFzZWQgdXBvbiBkZXZpY2UgdXNhZ2UgYW5kIHRpbWUtb2YtZGF5IChpZTogZmV0Y2gtcmF0ZSBpcyBhYm91dCB+MTVtaW4gZHVyaW5nIHByaW1lLXRpbWUgaG91cnM7IGxlc3MgZnJlcXVlbnRseSB3aGVuIHRoZSB1c2VyIGlzIHByZXN1bWVkIHRvIGJlIHNsZWVwaW5nLCBhdCAzYW0gZm9yIGV4YW1wbGUpLlxyXG4gKiBGb3IgbW9yZSBkZXRhaWwsIHBsZWFzZSBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3RyYW5zaXN0b3Jzb2Z0L2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtZmV0Y2hcclxuICpcclxuICogQHVzYWdlXHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQmFja2dyb3VuZEZldGNoLCBCYWNrZ3JvdW5kRmV0Y2hDb25maWcgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JhY2tncm91bmQtZmV0Y2gvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYWNrZ3JvdW5kRmV0Y2g6IEJhY2tncm91bmRGZXRjaCkge1xyXG4gKlxyXG4gKiAgIGNvbnN0IGNvbmZpZzogQmFja2dyb3VuZEZldGNoQ29uZmlnID0ge1xyXG4gKiAgICAgc3RvcE9uVGVybWluYXRlOiBmYWxzZSwgLy8gU2V0IHRydWUgdG8gY2Vhc2UgYmFja2dyb3VuZC1mZXRjaCBmcm9tIG9wZXJhdGluZyBhZnRlciB1c2VyIFwiY2xvc2VzXCIgdGhlIGFwcC4gRGVmYXVsdHMgdG8gdHJ1ZS5cclxuICogICB9XHJcbiAqXHJcbiAqICAgYmFja2dyb3VuZEZldGNoLmNvbmZpZ3VyZShjb25maWcpXHJcbiAqICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gKiAgICAgICAgICBjb25zb2xlLmxvZygnQmFja2dyb3VuZCBGZXRjaCBpbml0aWFsaXplZCcpO1xyXG4gKlxyXG4gKiAgICAgICAgICB0aGlzLmJhY2tncm91bmRGZXRjaC5maW5pc2goKTtcclxuICpcclxuICogICAgICB9KVxyXG4gKiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKCdFcnJvciBpbml0aWFsaXppbmcgYmFja2dyb3VuZCBmZXRjaCcsIGUpKTtcclxuICpcclxuICogICAvLyBTdGFydCB0aGUgYmFja2dyb3VuZC1mZXRjaCBBUEkuIFlvdXIgY2FsbGJhY2tGbiBwcm92aWRlZCB0byAjY29uZmlndXJlIHdpbGwgYmUgZXhlY3V0ZWQgZWFjaCB0aW1lIGEgYmFja2dyb3VuZC1mZXRjaCBldmVudCBvY2N1cnMuIE5PVEUgdGhlICNjb25maWd1cmUgbWV0aG9kIGF1dG9tYXRpY2FsbHkgY2FsbHMgI3N0YXJ0LiBZb3UgZG8gbm90IGhhdmUgdG8gY2FsbCB0aGlzIG1ldGhvZCBhZnRlciB5b3UgI2NvbmZpZ3VyZSB0aGUgcGx1Z2luXHJcbiAqICAgYmFja2dyb3VuZEZldGNoLnN0YXJ0KCk7XHJcbiAqXHJcbiAqICAgLy8gU3RvcCB0aGUgYmFja2dyb3VuZC1mZXRjaCBBUEkgZnJvbSBmaXJpbmcgZmV0Y2ggZXZlbnRzLiBZb3VyIGNhbGxiYWNrRm4gcHJvdmlkZWQgdG8gI2NvbmZpZ3VyZSB3aWxsIG5vIGxvbmdlciBiZSBleGVjdXRlZC5cclxuICogICBiYWNrZ3JvdW5kRmV0Y2guc3RvcCgpO1xyXG4gKlxyXG4gKlxyXG4gKiB9XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBCYWNrZ3JvdW5kRmV0Y2hDb25maWdcclxuICpcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdCYWNrZ3JvdW5kRmV0Y2gnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtZmV0Y2gnLFxyXG4gIHBsdWdpblJlZjogJ0JhY2tncm91bmRGZXRjaCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90cmFuc2lzdG9yc29mdC9jb3Jkb3ZhLXBsdWdpbi1iYWNrZ3JvdW5kLWZldGNoJyxcclxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmRGZXRjaCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDb25maWd1cmVzIHRoZSBwbHVnaW4ncyBmZXRjaCBjYWxsYmFja0ZuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0JhY2tncm91bmRGZXRjaENvbmZpZ30gY29uZmlnIENvbmZpZ3VyYXRpb24gZm9yIHBsdWdpblxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBjb25maWd1cmUoY29uZmlnOiBCYWNrZ3JvdW5kRmV0Y2hDb25maWcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnQgdGhlIGJhY2tncm91bmQtZmV0Y2ggQVBJLlxyXG4gICAqIFlvdXIgY2FsbGJhY2tGbiBwcm92aWRlZCB0byAjY29uZmlndXJlIHdpbGwgYmUgZXhlY3V0ZWQgZWFjaCB0aW1lIGEgYmFja2dyb3VuZC1mZXRjaCBldmVudCBvY2N1cnMuIE5PVEUgdGhlICNjb25maWd1cmUgbWV0aG9kIGF1dG9tYXRpY2FsbHkgY2FsbHMgI3N0YXJ0LiBZb3UgZG8gbm90IGhhdmUgdG8gY2FsbCB0aGlzIG1ldGhvZCBhZnRlciB5b3UgI2NvbmZpZ3VyZSB0aGUgcGx1Z2luXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RhcnQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3AgdGhlIGJhY2tncm91bmQtZmV0Y2ggQVBJIGZyb20gZmlyaW5nIGZldGNoIGV2ZW50cy4gWW91ciBjYWxsYmFja0ZuIHByb3ZpZGVkIHRvICNjb25maWd1cmUgd2lsbCBubyBsb25nZXIgYmUgZXhlY3V0ZWQuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RvcCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogWW91IE1VU1QgY2FsbCB0aGlzIG1ldGhvZCBpbiB5b3VyIGZldGNoIGNhbGxiYWNrRm4gcHJvdmlkZWQgdG8gI2NvbmZpZ3VyZSBpbiBvcmRlciB0byBzaWduYWwgdG8gaU9TIHRoYXQgeW91ciBmZXRjaCBhY3Rpb24gaXMgY29tcGxldGUuIGlPUyBwcm92aWRlcyBvbmx5IDMwcyBvZiBiYWNrZ3JvdW5kLXRpbWUgZm9yIGEgZmV0Y2gtZXZlbnQgLS0gaWYgeW91IGV4Y2VlZCB0aGlzIDMwcywgaU9TIHdpbGwga2lsbCB5b3VyIGFwcC5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgZmluaXNoKHRhc2tJZDogc3RyaW5nKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm4gdGhlIHN0YXR1cyBvZiB0aGUgYmFja2dyb3VuZC1mZXRjaFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0YXR1cygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=