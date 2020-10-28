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
var UptimeOriginal = /** @class */ (function (_super) {
    __extends(UptimeOriginal, _super);
    function UptimeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UptimeOriginal.prototype.getUptime = function (includeDeepSleep) { return cordova(this, "getUptime", {}, arguments); };
    UptimeOriginal.pluginName = "Uptime";
    UptimeOriginal.plugin = "cordova-plugin-uptime";
    UptimeOriginal.pluginRef = "Uptime";
    UptimeOriginal.repo = "https://github.com/s1lviu/cordova-plugin-uptime";
    UptimeOriginal.platforms = ["Android", "iOS"];
    return UptimeOriginal;
}(IonicNativePlugin));
var Uptime = new UptimeOriginal();
export { Uptime };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3VwdGltZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE2QjVDLDBCQUFpQjs7OztJQU8zQywwQkFBUyxhQUFDLGdCQUF5Qjs7Ozs7O2lCQXJDckM7RUE4QjRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBVcHRpbWVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIHByb3ZpZGVzIHRoZSB0aW1lIHNwZW50IGluIG1pbGxpc2Vjb25kcyBzaW5jZSBib290ICh1cHRpbWUpLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBVcHRpbWUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3VwdGltZS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHVwdGltZTogVXB0aW1lKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMudXB0aW1lLmdldFVwdGltZShpbmNsdWRlRGVlcFNsZWVwKVxyXG4gKiAgIC50aGVuKHVwdGltZSA9PiBjb25zb2xlLmxvZyh1cHRpbWUpKVxyXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdVcHRpbWUnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXVwdGltZScsXHJcbiAgcGx1Z2luUmVmOiAnVXB0aW1lJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3MxbHZpdS9jb3Jkb3ZhLXBsdWdpbi11cHRpbWUnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVcHRpbWUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiByZXR1cm4gc3lzdGVtIHVwdGltZVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZURlZXBTbGVlcCBTZXQgdG8gdHJ1ZSB0byBpbmNsdWRlIHN5c3RlbSBkZWVwIHNsZWVwXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJldHVybiB0aGUgdXB0aW1lIGluIG1pbGxpc2Vjb25kc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRVcHRpbWUoaW5jbHVkZURlZXBTbGVlcDogYm9vbGVhbik6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==