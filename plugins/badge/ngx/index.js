import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Badge = /** @class */ (function (_super) {
    __extends(Badge, _super);
    function Badge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Badge.prototype.clear = function () { return cordova(this, "clear", {}, arguments); };
    Badge.prototype.set = function (badgeNumber) { return cordova(this, "set", {}, arguments); };
    Badge.prototype.get = function () { return cordova(this, "get", {}, arguments); };
    Badge.prototype.increase = function (increaseBy) { return cordova(this, "increase", {}, arguments); };
    Badge.prototype.decrease = function (decreaseBy) { return cordova(this, "decrease", {}, arguments); };
    Badge.prototype.isSupported = function () { return cordova(this, "isSupported", {}, arguments); };
    Badge.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    Badge.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    Badge.pluginName = "Badge";
    Badge.plugin = "cordova-plugin-badge";
    Badge.pluginRef = "cordova.plugins.notification.badge";
    Badge.repo = "https://github.com/katzer/cordova-plugin-badge";
    Badge.platforms = ["Android", "Browser", "iOS", "Windows"];
    Badge = __decorate([
        Injectable()
    ], Badge);
    return Badge;
}(IonicNativePlugin));
export { Badge };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhZGdlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDN0MseUJBQWlCOzs7O0lBTTFDLHFCQUFLO0lBVUwsbUJBQUcsYUFBQyxXQUFtQjtJQVN2QixtQkFBRztJQVVILHdCQUFRLGFBQUMsVUFBa0I7SUFVM0Isd0JBQVEsYUFBQyxVQUFrQjtJQVMzQiwyQkFBVztJQVNYLDZCQUFhO0lBU2IsaUNBQWlCOzs7Ozs7SUF4RU4sS0FBSztRQURqQixVQUFVLEVBQUU7T0FDQSxLQUFLO2dCQWxDbEI7RUFrQzJCLGlCQUFpQjtTQUEvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBCYWRnZVxyXG4gKiBAcHJlbWllciBiYWRnZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIGVzc2VudGlhbCBwdXJwb3NlIG9mIGJhZGdlIG51bWJlcnMgaXMgdG8gZW5hYmxlIGFuIGFwcGxpY2F0aW9uIHRvIGluZm9ybSBpdHMgdXNlcnMgdGhhdCBpdCBoYXMgc29tZXRoaW5nIGZvciB0aGVtIOKAlCBmb3IgZXhhbXBsZSwgdW5yZWFkIG1lc3NhZ2VzIOKAlCB3aGVuIHRoZSBhcHBsaWNhdGlvbiBpc27igJl0IHJ1bm5pbmcgaW4gdGhlIGZvcmVncm91bmQuXHJcbiAqXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1iYWRnZS4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0JhZGdlIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWJhZGdlKS5cclxuICpcclxuICogQW5kcm9pZCBOb3RlOiBCYWRnZXMgaGF2ZSBoaXN0b3JpY2FsbHkgb25seSBiZWVuIGEgZmVhdHVyZSBpbXBsZW1lbnRlZCBieSB0aGlyZCBwYXJ0eSBsYXVuY2hlcnMgYW5kIG5vdCB2aXNpYmxlIHVubGVzcyBvbmUgb2YgdGhvc2UgbGF1bmNoZXJzIHdhcyBiZWluZyB1c2VkIChFLkcuIFNhbXN1bmcgb3IgTm92YSBMYXVuY2hlcikgYW5kIGlmIGVuYWJsZWQgYnkgdGhlIHVzZXIuIEFzIG9mIEFuZHJvaWQgOCAoT3JlbyksIFtub3RpZmljYXRpb24gYmFkZ2VzXShodHRwczovL2RldmVsb3Blci5hbmRyb2lkLmNvbS90cmFpbmluZy9ub3RpZnktdXNlci9iYWRnZXMpIHdlcmUgaW50cm9kdWNlZCBvZmZpY2lhbGx5IHRvIHJlZmxlY3QgdW5yZWFkIG5vdGlmaWNhdGlvbnMuIFRoaXMgcGx1Z2luIGlzIHVubGlrZWx5IHRvIHdvcmsgYXMgZXhwZWN0ZWQgb24gZGV2aWNlcyBydW5uaW5nIEFuZHJvaWQgOCBvciBuZXdlci4gUGxlYXNlIHNlZSB0aGUgW2xvY2FsIG5vdGlmaWNhdGlvbnMgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tbG9jYWwtbm90aWZpY2F0aW9ucykgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gYmFkZ2UgdXNlIHdpdGggbm90aWZpY2F0aW9ucy5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQmFkZ2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JhZGdlL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFkZ2U6IEJhZGdlKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuYmFkZ2Uuc2V0KDEwKTtcclxuICogdGhpcy5iYWRnZS5pbmNyZWFzZSgxKTtcclxuICogdGhpcy5iYWRnZS5jbGVhcigpO1xyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdCYWRnZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYmFkZ2UnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5ub3RpZmljYXRpb24uYmFkZ2UnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWJhZGdlJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJhZGdlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENsZWFyIHRoZSBiYWRnZSBvZiB0aGUgYXBwIGljb24uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNsZWFyKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBiYWRnZSBvZiB0aGUgYXBwIGljb24uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGJhZGdlTnVtYmVyICBUaGUgbmV3IGJhZGdlIG51bWJlci5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZXQoYmFkZ2VOdW1iZXI6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGJhZGdlIG9mIHRoZSBhcHAgaWNvbi5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluY3JlYXNlIHRoZSBiYWRnZSBudW1iZXIuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluY3JlYXNlQnkgIENvdW50IHRvIGFkZCB0byB0aGUgY3VycmVudCBiYWRnZSBudW1iZXJcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpbmNyZWFzZShpbmNyZWFzZUJ5OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVjcmVhc2UgdGhlIGJhZGdlIG51bWJlci5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVjcmVhc2VCeSAgQ291bnQgdG8gc3VidHJhY3QgZnJvbSB0aGUgY3VycmVudCBiYWRnZSBudW1iZXJcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBkZWNyZWFzZShkZWNyZWFzZUJ5OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgc3VwcG9ydCB0byBzaG93IGJhZGdlcy5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpc1N1cHBvcnRlZCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSBhcHAgaGFzIHBlcm1pc3Npb24gdG8gc2hvdyBiYWRnZXMuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXIgcGVybWlzc2lvbiB0byBzZXQgYmFkZ2Ugbm90aWZpY2F0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==