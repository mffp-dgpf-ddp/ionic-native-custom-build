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
var SimOriginal = /** @class */ (function (_super) {
    __extends(SimOriginal, _super);
    function SimOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimOriginal.prototype.getSimInfo = function () { return cordova(this, "getSimInfo", {}, arguments); };
    SimOriginal.prototype.hasReadPermission = function () { return cordova(this, "hasReadPermission", { "platforms": ["Android"] }, arguments); };
    SimOriginal.prototype.requestReadPermission = function () { return cordova(this, "requestReadPermission", { "platforms": ["Android"] }, arguments); };
    SimOriginal.pluginName = "Sim";
    SimOriginal.plugin = "cordova-plugin-sim";
    SimOriginal.pluginRef = "plugins.sim";
    SimOriginal.repo = "https://github.com/pbakondy/cordova-plugin-sim";
    SimOriginal.platforms = ["Android", "iOS", "Windows", "Windows Phone"];
    return SimOriginal;
}(IonicNativePlugin));
var Sim = new SimOriginal();
export { Sim };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NpbS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF5Qy9DLHVCQUFpQjs7OztJQU14Qyx3QkFBVTtJQVdWLCtCQUFpQjtJQVdqQixtQ0FBcUI7Ozs7OztjQXRFdkI7RUEwQ3lCLGlCQUFpQjtTQUE3QixHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTaW1cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEdldHMgaW5mbyBmcm9tIHRoZSBTaW0gY2FyZCBsaWtlIHRoZSBjYXJyaWVyIG5hbWUsIG1jYywgbW5jIGFuZCBjb3VudHJ5IGNvZGUgYW5kIG90aGVyIHN5c3RlbSBkZXBlbmRlbnQgaW5mby5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1zaW1gLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQ29yZG92YSBTaW0gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL3BiYWtvbmR5L2NvcmRvdmEtcGx1Z2luLXNpbSkuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNpbSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc2ltL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2ltOiBTaW0pIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5zaW0uZ2V0U2ltSW5mbygpLnRoZW4oXHJcbiAqICAgKGluZm8pID0+IGNvbnNvbGUubG9nKCdTaW0gaW5mbzogJywgaW5mbyksXHJcbiAqICAgKGVycikgPT4gY29uc29sZS5sb2coJ1VuYWJsZSB0byBnZXQgc2ltIGluZm86ICcsIGVycilcclxuICogKTtcclxuICpcclxuICogdGhpcy5zaW0uaGFzUmVhZFBlcm1pc3Npb24oKS50aGVuKFxyXG4gKiAgIChpbmZvKSA9PiBjb25zb2xlLmxvZygnSGFzIHBlcm1pc3Npb246ICcsIGluZm8pXHJcbiAqICk7XHJcbiAqXHJcbiAqIHRoaXMuc2ltLnJlcXVlc3RSZWFkUGVybWlzc2lvbigpLnRoZW4oXHJcbiAqICAgKCkgPT4gY29uc29sZS5sb2coJ1Blcm1pc3Npb24gZ3JhbnRlZCcpLFxyXG4gKiAgICgpID0+IGNvbnNvbGUubG9nKCdQZXJtaXNzaW9uIGRlbmllZCcpXHJcbiAqICk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1NpbScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc2ltJyxcclxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLnNpbScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wYmFrb25keS9jb3Jkb3ZhLXBsdWdpbi1zaW0nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2ltIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgaW5mbyBmcm9tIHRoZSBTSU0gY2FyZC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRTaW1JbmZvKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBwZXJtaXNzaW9uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG4gIH0pXHJcbiAgaGFzUmVhZFBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvblxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxuICB9KVxyXG4gIHJlcXVlc3RSZWFkUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=