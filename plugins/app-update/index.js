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
var AppUpdateOriginal = /** @class */ (function (_super) {
    __extends(AppUpdateOriginal, _super);
    function AppUpdateOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppUpdateOriginal.prototype.checkAppUpdate = function (updateUrl, options) { return cordova(this, "checkAppUpdate", { "callbackOrder": "reverse" }, arguments); };
    AppUpdateOriginal.pluginName = "AppUpdate";
    AppUpdateOriginal.plugin = "cordova-plugin-app-update";
    AppUpdateOriginal.pluginRef = "AppUpdate";
    AppUpdateOriginal.repo = "https://github.com/vaenow/cordova-plugin-app-update";
    AppUpdateOriginal.platforms = ["Android"];
    return AppUpdateOriginal;
}(IonicNativePlugin));
var AppUpdate = new AppUpdateOriginal();
export { AppUpdate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC11cGRhdGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBbUR6Qyw2QkFBaUI7Ozs7SUFVOUMsa0NBQWMsYUFBQyxTQUFpQixFQUFFLE9BQTBCOzs7Ozs7b0JBOUQ5RDtFQW9EK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBVcGRhdGVPcHRpb25zIHtcclxuICBhdXRoVHlwZT86IHN0cmluZztcclxuICB1c2VybmFtZT86IHN0cmluZztcclxuICBwYXNzd29yZD86IHN0cmluZztcclxuICBza2lwUHJvbXB0RGlhbG9nPzogYm9vbGVhbjtcclxuICBza2lwUHJvZ3Jlc3NEaWFsb2c/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQXBwIFVwZGF0ZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gZG9lcyBzZWxmLXVwZGF0ZSBmb3IgYW5kcm9pZFxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICpcclxuICogWW91IHNob3VsZCBmaXJzdCBob3N0IGFuIFhNTCBmaWxlIG9uIHlvdXIgc2VydmVyIHdpdGggdGhlIGZvbGxvd2luZyBkYXRhIGluIGl0OlxyXG4gKiBgYGB4bWxcclxuICogPHVwZGF0ZT5cclxuICogICAgIDx2ZXJzaW9uPjMwMjA0ODwvdmVyc2lvbj5cclxuICogICAgIDxuYW1lPkFQSyBOYW1lPC9uYW1lPlxyXG4gKiAgICAgPHVybD5odHRwczovL3lvdXItcmVtb3RlLWFwaS5jb20vWW91ckFwcC5hcGs8L3VybD5cclxuICogPC91cGRhdGU+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUaGVuIHVzZSB0aGUgZm9sbG93aW5nIGNvZGU6XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQXBwVXBkYXRlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hcHAtdXBkYXRlL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwVXBkYXRlOiBBcHBVcGRhdGUpIHtcclxuICpcclxuICogICAgY29uc3QgdXBkYXRlVXJsID0gJ2h0dHBzOi8veW91ci1yZW1vdGUtYXBpLmNvbS91cGRhdGUueG1sJztcclxuICogICAgdGhpcy5hcHBVcGRhdGUuY2hlY2tBcHBVcGRhdGUodXBkYXRlVXJsKS50aGVuKCgpID0+IHsgY29uc29sZS5sb2coJ1VwZGF0ZSBhdmFpbGFibGUnKSB9KTtcclxuICpcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogVGhlIHBsdWdpbiB3aWxsIGNvbXBhcmUgdGhlIGFwcCB2ZXJzaW9uIGFuZCB1cGRhdGUgaXQgYXV0b21hdGljYWxseSBpZiB0aGUgQVBJIGhhcyBhIG5ld2VyIHZlcnNpb24gdG8gaW5zdGFsbC5cclxuICogQGludGVyZmFjZXNcclxuICogQXBwVXBkYXRlT3B0aW9uc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0FwcFVwZGF0ZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBwLXVwZGF0ZScsXHJcbiAgcGx1Z2luUmVmOiAnQXBwVXBkYXRlJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZhZW5vdy9jb3Jkb3ZhLXBsdWdpbi1hcHAtdXBkYXRlJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBVcGRhdGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgYW5kIHVwZGF0ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cGRhdGVVcmwgdXBkYXRlIGFwaSB1cmxcclxuICAgKiBAcGFyYW0ge0FwcFVwZGF0ZU9wdGlvbnN9IFtvcHRpb25zXSBvcHRpb25zXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBjaGVja0FwcFVwZGF0ZSh1cGRhdGVVcmw6IHN0cmluZywgb3B0aW9ucz86IEFwcFVwZGF0ZU9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=