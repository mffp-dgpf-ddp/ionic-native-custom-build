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
var PowerManagementOriginal = /** @class */ (function (_super) {
    __extends(PowerManagementOriginal, _super);
    function PowerManagementOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PowerManagementOriginal.prototype.acquire = function () { return cordova(this, "acquire", {}, arguments); };
    PowerManagementOriginal.prototype.dim = function () { return cordova(this, "dim", {}, arguments); };
    PowerManagementOriginal.prototype.release = function () { return cordova(this, "release", {}, arguments); };
    PowerManagementOriginal.prototype.setReleaseOnPause = function (set) { return cordova(this, "setReleaseOnPause", {}, arguments); };
    PowerManagementOriginal.pluginName = "PowerManagement";
    PowerManagementOriginal.plugin = "cordova-plugin-powermanagement-orig";
    PowerManagementOriginal.pluginRef = "powerManagement";
    PowerManagementOriginal.repo = "https://github.com/Viras-/cordova-plugin-powermanagement";
    PowerManagementOriginal.platforms = ["Android", "iOS", "Windows", "Windows Phone"];
    return PowerManagementOriginal;
}(IonicNativePlugin));
var PowerManagement = new PowerManagementOriginal();
export { PowerManagement };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bvd2VyLW1hbmFnZW1lbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNkJuQyxtQ0FBaUI7Ozs7SUFNcEQsaUNBQU87SUFTUCw2QkFBRztJQVNILGlDQUFPO0lBV1AsMkNBQWlCLGFBQUMsR0FBWTs7Ozs7OzBCQWpFaEM7RUE4QnFDLGlCQUFpQjtTQUF6QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuLyoqXHJcbiAqIEBuYW1lIFBvd2VyIE1hbmFnZW1lbnRcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBQb3dlck1hbmFnZW1lbnQgcGx1Z2luIG9mZmVycyBhY2Nlc3MgdG8gdGhlIGRldmljZXMgcG93ZXItbWFuYWdlbWVudCBmdW5jdGlvbmFsaXR5LlxyXG4gKiBJdCBzaG91bGQgYmUgdXNlZCBmb3IgYXBwbGljYXRpb25zIHdoaWNoIGtlZXAgcnVubmluZyBmb3IgYSBsb25nIHRpbWUgd2l0aG91dCBhbnkgdXNlciBpbnRlcmFjdGlvbi5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgUG93ZXJNYW5hZ2VtZW50IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9wb3dlci1tYW5hZ2VtZW50L25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcG93ZXJNYW5hZ2VtZW50OiBQb3dlck1hbmFnZW1lbnQpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5wb3dlck1hbmFnZW1lbnQuYWNxdWlyZSgpXHJcbiAqICAgLnRoZW4ob25TdWNjZXNzKVxyXG4gKiAgIC5jYXRjaChvbkVycm9yKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnUG93ZXJNYW5hZ2VtZW50JyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1wb3dlcm1hbmFnZW1lbnQtb3JpZycsXHJcbiAgcGx1Z2luUmVmOiAncG93ZXJNYW5hZ2VtZW50JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1ZpcmFzLS9jb3Jkb3ZhLXBsdWdpbi1wb3dlcm1hbmFnZW1lbnQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUG93ZXJNYW5hZ2VtZW50IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIEFjcXVpcmUgYSB3YWtlbG9jayBieSBjYWxsaW5nIHRoaXMuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgYWNxdWlyZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBhY3F1aXJlcyBhIHBhcnRpYWwgd2FrZWxvY2ssIGFsbG93aW5nIHRoZSBzY3JlZW4gdG8gYmUgZGltbWVkLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRpbSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVsZWFzZSB0aGUgd2FrZWxvY2suIEl0J3MgaW1wb3J0YW50IHRvIGRvIHRoaXMgd2hlbiB5b3UncmUgZmluaXNoZWQgd2l0aCB0aGUgd2FrZWxvY2ssIHRvIGF2b2lkIHVubmVjZXNzYXJ5IGJhdHRlcnkgZHJhaW4uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVsZWFzZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQnkgZGVmYXVsdCwgdGhlIHBsdWdpbiB3aWxsIGF1dG9tYXRpY2FsbHkgcmVsZWFzZSBhIHdha2Vsb2NrIHdoZW4geW91ciBhcHAgaXMgcGF1c2VkIChlLmcuIHdoZW4gdGhlIHNjcmVlbiBpcyB0dXJuZWQgb2ZmLCBvciB0aGUgdXNlciBzd2l0Y2hlcyB0byBhbm90aGVyIGFwcCkuXHJcbiAgICogSXQgd2lsbCByZWFjcXVpcmUgdGhlIHdha2Vsb2NrIHVwb24gYXBwIHJlc3VtZS4gSWYgeW91IHdvdWxkIHByZWZlciB0byBkaXNhYmxlIHRoaXMgYmVoYXZpb3VyLCB5b3UgY2FuIHVzZSB0aGlzIGZ1bmN0aW9uLlxyXG4gICAqIEBwYXJhbSBzZXQge2Jvb2xlYW59XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2V0UmVsZWFzZU9uUGF1c2Uoc2V0OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19