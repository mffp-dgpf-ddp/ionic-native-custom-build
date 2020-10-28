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
var BadgeOriginal = /** @class */ (function (_super) {
    __extends(BadgeOriginal, _super);
    function BadgeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BadgeOriginal.prototype.clear = function () { return cordova(this, "clear", {}, arguments); };
    BadgeOriginal.prototype.set = function (badgeNumber) { return cordova(this, "set", {}, arguments); };
    BadgeOriginal.prototype.get = function () { return cordova(this, "get", {}, arguments); };
    BadgeOriginal.prototype.increase = function (increaseBy) { return cordova(this, "increase", {}, arguments); };
    BadgeOriginal.prototype.decrease = function (decreaseBy) { return cordova(this, "decrease", {}, arguments); };
    BadgeOriginal.prototype.isSupported = function () { return cordova(this, "isSupported", {}, arguments); };
    BadgeOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    BadgeOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    BadgeOriginal.pluginName = "Badge";
    BadgeOriginal.plugin = "cordova-plugin-badge";
    BadgeOriginal.pluginRef = "cordova.plugins.notification.badge";
    BadgeOriginal.repo = "https://github.com/katzer/cordova-plugin-badge";
    BadgeOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return BadgeOriginal;
}(IonicNativePlugin));
var Badge = new BadgeOriginal();
export { Badge };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhZGdlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDN0MseUJBQWlCOzs7O0lBTTFDLHFCQUFLO0lBVUwsbUJBQUcsYUFBQyxXQUFtQjtJQVN2QixtQkFBRztJQVVILHdCQUFRLGFBQUMsVUFBa0I7SUFVM0Isd0JBQVEsYUFBQyxVQUFrQjtJQVMzQiwyQkFBVztJQVNYLDZCQUFhO0lBU2IsaUNBQWlCOzs7Ozs7Z0JBMUduQjtFQWtDMkIsaUJBQWlCO1NBQS9CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEJhZGdlXHJcbiAqIEBwcmVtaWVyIGJhZGdlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGUgZXNzZW50aWFsIHB1cnBvc2Ugb2YgYmFkZ2UgbnVtYmVycyBpcyB0byBlbmFibGUgYW4gYXBwbGljYXRpb24gdG8gaW5mb3JtIGl0cyB1c2VycyB0aGF0IGl0IGhhcyBzb21ldGhpbmcgZm9yIHRoZW0g4oCUIGZvciBleGFtcGxlLCB1bnJlYWQgbWVzc2FnZXMg4oCUIHdoZW4gdGhlIGFwcGxpY2F0aW9uIGlzbuKAmXQgcnVubmluZyBpbiB0aGUgZm9yZWdyb3VuZC5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWJhZGdlLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQmFkZ2UgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tYmFkZ2UpLlxyXG4gKlxyXG4gKiBBbmRyb2lkIE5vdGU6IEJhZGdlcyBoYXZlIGhpc3RvcmljYWxseSBvbmx5IGJlZW4gYSBmZWF0dXJlIGltcGxlbWVudGVkIGJ5IHRoaXJkIHBhcnR5IGxhdW5jaGVycyBhbmQgbm90IHZpc2libGUgdW5sZXNzIG9uZSBvZiB0aG9zZSBsYXVuY2hlcnMgd2FzIGJlaW5nIHVzZWQgKEUuRy4gU2Ftc3VuZyBvciBOb3ZhIExhdW5jaGVyKSBhbmQgaWYgZW5hYmxlZCBieSB0aGUgdXNlci4gQXMgb2YgQW5kcm9pZCA4IChPcmVvKSwgW25vdGlmaWNhdGlvbiBiYWRnZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL3RyYWluaW5nL25vdGlmeS11c2VyL2JhZGdlcykgd2VyZSBpbnRyb2R1Y2VkIG9mZmljaWFsbHkgdG8gcmVmbGVjdCB1bnJlYWQgbm90aWZpY2F0aW9ucy4gVGhpcyBwbHVnaW4gaXMgdW5saWtlbHkgdG8gd29yayBhcyBleHBlY3RlZCBvbiBkZXZpY2VzIHJ1bm5pbmcgQW5kcm9pZCA4IG9yIG5ld2VyLiBQbGVhc2Ugc2VlIHRoZSBbbG9jYWwgbm90aWZpY2F0aW9ucyBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2thdHplci9jb3Jkb3ZhLXBsdWdpbi1sb2NhbC1ub3RpZmljYXRpb25zKSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBiYWRnZSB1c2Ugd2l0aCBub3RpZmljYXRpb25zLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBCYWRnZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFkZ2Uvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYWRnZTogQmFkZ2UpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5iYWRnZS5zZXQoMTApO1xyXG4gKiB0aGlzLmJhZGdlLmluY3JlYXNlKDEpO1xyXG4gKiB0aGlzLmJhZGdlLmNsZWFyKCk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0JhZGdlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1iYWRnZScsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLm5vdGlmaWNhdGlvbi5iYWRnZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tYmFkZ2UnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFkZ2UgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgdGhlIGJhZGdlIG9mIHRoZSBhcHAgaWNvbi5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2xlYXIoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIGJhZGdlIG9mIHRoZSBhcHAgaWNvbi5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gYmFkZ2VOdW1iZXIgIFRoZSBuZXcgYmFkZ2UgbnVtYmVyLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldChiYWRnZU51bWJlcjogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgYmFkZ2Ugb2YgdGhlIGFwcCBpY29uLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5jcmVhc2UgdGhlIGJhZGdlIG51bWJlci5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5jcmVhc2VCeSAgQ291bnQgdG8gYWRkIHRvIHRoZSBjdXJyZW50IGJhZGdlIG51bWJlclxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGluY3JlYXNlKGluY3JlYXNlQnk6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWNyZWFzZSB0aGUgYmFkZ2UgbnVtYmVyLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZWNyZWFzZUJ5ICBDb3VudCB0byBzdWJ0cmFjdCBmcm9tIHRoZSBjdXJyZW50IGJhZGdlIG51bWJlclxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRlY3JlYXNlKGRlY3JlYXNlQnk6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBzdXBwb3J0IHRvIHNob3cgYmFkZ2VzLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzU3VwcG9ydGVkKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIGFwcCBoYXMgcGVybWlzc2lvbiB0byBzaG93IGJhZGdlcy5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlciBwZXJtaXNzaW9uIHRvIHNldCBiYWRnZSBub3RpZmljYXRpb25zXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19