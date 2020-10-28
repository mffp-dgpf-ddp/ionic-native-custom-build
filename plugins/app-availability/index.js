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
var AppAvailabilityOriginal = /** @class */ (function (_super) {
    __extends(AppAvailabilityOriginal, _super);
    function AppAvailabilityOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppAvailabilityOriginal.prototype.check = function (app) { return cordova(this, "check", {}, arguments); };
    AppAvailabilityOriginal.pluginName = "AppAvailability";
    AppAvailabilityOriginal.plugin = "cordova-plugin-appavailability";
    AppAvailabilityOriginal.pluginRef = "appAvailability";
    AppAvailabilityOriginal.repo = "https://github.com/ohh2ahh/AppAvailability";
    AppAvailabilityOriginal.platforms = ["Android", "iOS"];
    return AppAvailabilityOriginal;
}(IonicNativePlugin));
var AppAvailability = new AppAvailabilityOriginal();
export { AppAvailability };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1hdmFpbGFiaWxpdHkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBeUNuQyxtQ0FBaUI7Ozs7SUFPcEQsK0JBQUssYUFBQyxHQUFXOzs7Ozs7MEJBakRuQjtFQTBDcUMsaUJBQWlCO1NBQXpDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEFwcCBBdmFpbGFiaWxpdHlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gY2hlY2sgaWYgYW4gYXBwIGlzIGluc3RhbGxlZCBvbiB0aGUgdXNlcidzIGRldmljZS4gSXQgcmVxdWlyZXMgYW4gVVJJIFNjaGVtZSAoZS5nLiB0d2l0dGVyOi8vKSBvbiBpT1Mgb3IgYSBQYWNrYWdlIE5hbWUgKGUuZyBjb20udHdpdHRlci5hbmRyb2lkKSBvbiBBbmRyb2lkLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tYXBwYXZhaWxhYmlsaXR5LiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQXBwQXZhaWxhYmlsaXR5IHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vb2hoMmFoaC9BcHBBdmFpbGFiaWxpdHkpLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBBcHBBdmFpbGFiaWxpdHkgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FwcC1hdmFpbGFiaWxpdHkvbmd4JztcclxuICogaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhcHBBdmFpbGFiaWxpdHk6IEFwcEF2YWlsYWJpbGl0eSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogbGV0IGFwcDtcclxuICpcclxuICogaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpKSB7XHJcbiAqICAgYXBwID0gJ3R3aXR0ZXI6Ly8nO1xyXG4gKiB9IGVsc2UgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2FuZHJvaWQnKSkge1xyXG4gKiAgIGFwcCA9ICdjb20udHdpdHRlci5hbmRyb2lkJztcclxuICogfVxyXG4gKlxyXG4gKiB0aGlzLmFwcEF2YWlsYWJpbGl0eS5jaGVjayhhcHApXHJcbiAqICAgLnRoZW4oXHJcbiAqICAgICAoeWVzOiBib29sZWFuKSA9PiBjb25zb2xlLmxvZyhhcHAgKyAnIGlzIGF2YWlsYWJsZScpLFxyXG4gKiAgICAgKG5vOiBib29sZWFuKSA9PiBjb25zb2xlLmxvZyhhcHAgKyAnIGlzIE5PVCBhdmFpbGFibGUnKVxyXG4gKiAgICk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0FwcEF2YWlsYWJpbGl0eScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBwYXZhaWxhYmlsaXR5JyxcclxuICBwbHVnaW5SZWY6ICdhcHBBdmFpbGFiaWxpdHknLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vb2hoMmFoaC9BcHBBdmFpbGFiaWxpdHknLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBBdmFpbGFiaWxpdHkgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGFuIGFwcCBpcyBhdmFpbGFibGUgb24gZGV2aWNlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFwcCBQYWNrYWdlIG5hbWUgb24gYW5kcm9pZCwgb3IgVVJJIHNjaGVtZSBvbiBpT1NcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2hlY2soYXBwOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19