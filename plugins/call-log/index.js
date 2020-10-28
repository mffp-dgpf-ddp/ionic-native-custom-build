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
var CallLogOriginal = /** @class */ (function (_super) {
    __extends(CallLogOriginal, _super);
    function CallLogOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallLogOriginal.prototype.getCallLog = function (filters) { return cordova(this, "getCallLog", {}, arguments); };
    CallLogOriginal.prototype.hasReadPermission = function () { return cordova(this, "hasReadPermission", { "platforms": ["Android"] }, arguments); };
    CallLogOriginal.prototype.requestReadPermission = function () { return cordova(this, "requestReadPermission", { "platforms": ["Android"] }, arguments); };
    CallLogOriginal.pluginName = "CallLog";
    CallLogOriginal.plugin = "cordova-plugin-calllog";
    CallLogOriginal.pluginRef = "plugins.callLog";
    CallLogOriginal.repo = "https://github.com/creacore-team/cordova-plugin-calllog";
    CallLogOriginal.platforms = ["Android"];
    return CallLogOriginal;
}(IonicNativePlugin));
var CallLog = new CallLogOriginal();
export { CallLog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbGwtbG9nL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDM0MsMkJBQWlCOzs7O0lBTzVDLDRCQUFVLGFBQUMsT0FBd0I7SUFXbkMsbUNBQWlCO0lBV2pCLHVDQUFxQjs7Ozs7O2tCQS9EdkI7RUFrQzZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FsbExvZ09iamVjdCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICBvcGVyYXRvcjogJz09JyB8ICchPScgfCAnPicgfCAnPj0nIHwgJzwnIHwgJzw9JyB8ICdsaWtlJztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIENhbGwgTG9nXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBhY2Nlc3MgdGhlIGNhbGwgaGlzdG9yeSBvbiBhIGRldmljZSBhbmQgdGhhdCBjYW4gYmUgZmlsdGVyZWRcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQ2FsbExvZyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2FsbC1sb2cvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjYWxsTG9nOiBDYWxsTG9nKSB7IH1cclxuICpcclxuICogYGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBDYWxsTG9nT2JqZWN0XHJcbiAqXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQ2FsbExvZycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2FsbGxvZycsXHJcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5jYWxsTG9nJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NyZWFjb3JlLXRlYW0vY29yZG92YS1wbHVnaW4tY2FsbGxvZycsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FsbExvZyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIHJldHVybiB0aGUgY2FsbCBsb2dzXHJcbiAgICogQHBhcmFtIHtDYWxsTG9nT2JqZWN0W119IGZpbHRlcnMgYXJyYXkgb2Ygb2JqZWN0IHRvIGZpbHRlciB0aGUgcXVlcnlcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldENhbGxMb2coZmlsdGVyczogQ2FsbExvZ09iamVjdFtdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIHBlcm1pc3Npb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbiAgfSlcclxuICBoYXNSZWFkUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVxdWVzdCBwZXJtaXNzaW9uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG4gIH0pXHJcbiAgcmVxdWVzdFJlYWRQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==