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
var SensorsOriginal = /** @class */ (function (_super) {
    __extends(SensorsOriginal, _super);
    function SensorsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SensorsOriginal.prototype.enableSensor = function (TYPE_SENSOR) { return cordova(this, "enableSensor", {}, arguments); };
    SensorsOriginal.prototype.disableSensor = function () { return cordova(this, "disableSensor", {}, arguments); };
    SensorsOriginal.prototype.getState = function () { return cordova(this, "getState", {}, arguments); };
    SensorsOriginal.pluginName = "Sensors";
    SensorsOriginal.plugin = "https://github.com/fabiorogeriosj/cordova-plugin-sensors.git";
    SensorsOriginal.pluginRef = "sensors";
    SensorsOriginal.repo = "https://github.com/fabiorogeriosj/cordova-plugin-sensors.git";
    SensorsOriginal.platforms = ["Android"];
    return SensorsOriginal;
}(IonicNativePlugin));
var Sensors = new SensorsOriginal();
export { Sensors };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NlbnNvcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBa0QzQywyQkFBaUI7Ozs7SUFPNUMsOEJBQVksYUFBQyxXQUFtQjtJQVNoQywrQkFBYTtJQVNiLDBCQUFROzs7Ozs7a0JBNUVWO0VBbUQ2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBUWVBFX1NFTlNPUiB7XHJcbiAgUFJPWElNSVRZID0gJ1BST1hJTUlUWScsXHJcbiAgQUNDRUxFUk9NRVRFUiA9ICdBQ0NFTEVST01FVEVSJyxcclxuICBHUkFWSVRZID0gJ0dSQVZJVFknLFxyXG4gIEdZUk9TQ09QRSA9ICdHWVJPU0NPUEUnLFxyXG4gIEdZUk9TQ09QRV9VTkNBTElCUkFURUQgPSAnR1lST1NDT1BFX1VOQ0FMSUJSQVRFRCcsXHJcbiAgTElORUFSX0FDQ0VMRVJBVElPTiA9ICdMSU5FQVJfQUNDRUxFUkFUSU9OJyxcclxuICBST1RBVElPTl9WRUNUT1IgPSAnUk9UQVRJT05fVkVDVE9SJyxcclxuICBTVEVQX0NPVU5URVIgPSAnU1RFUF9DT1VOVEVSJyxcclxuICBHQU1FX1JPVEFUSU9OX1ZFQ1RPUiA9ICdHQU1FX1JPVEFUSU9OX1ZFQ1RPUicsXHJcbiAgR0VPTUFHTkVUSUNfUk9UQVRJT05fVkVDVE9SID0gJ0dFT01BR05FVElDX1JPVEFUSU9OX1ZFQ1RPUicsXHJcbiAgTUFHTkVUSUNfRklFTEQgPSAnTUFHTkVUSUNfRklFTEQnLFxyXG4gIE1BR05FVElDX0ZJRUxEX1VOQ0FMSUJSQVRFRCA9ICdNQUdORVRJQ19GSUVMRF9VTkNBTElCUkFURUQnLFxyXG4gIE9SSUVOVEFUSU9OID0gJ09SSUVOVEFUSU9OJyxcclxuICBBTUJJRU5UX1RFTVBFUkFUVVJFID0gJ0FNQklFTlRfVEVNUEVSQVRVUkUnLFxyXG4gIExJR0hUID0gJ0xJR0hUJyxcclxuICBQUkVTU1VSRSA9ICdQUkVTU1VSRScsXHJcbiAgUkVMQVRJVkVfSFVNSURJVFkgPSAnUkVMQVRJVkVfSFVNSURJVFknLFxyXG4gIFRFTVBFUkFUVVJFID0gJ1RFTVBFUkFUVVJFJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNlbnNvcnNcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGVuYWJsZXMgc2Vuc29ycyBvbiBBbmRyb2lkIGRldmljZXNcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgU2Vuc29ycywgVFlQRV9TRU5TT1IgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NlbnNvcnMvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzZW5zb3JzOiBTZW5zb3JzKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuc2Vuc29ycy5lbmFibGVTZW5zb3IoVFlQRV9TRU5TT1IuTElHSFQpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdTZW5zb3JzJyxcclxuICBwbHVnaW46ICdodHRwczovL2dpdGh1Yi5jb20vZmFiaW9yb2dlcmlvc2ovY29yZG92YS1wbHVnaW4tc2Vuc29ycy5naXQnLFxyXG4gIHBsdWdpblJlZjogJ3NlbnNvcnMnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZmFiaW9yb2dlcmlvc2ovY29yZG92YS1wbHVnaW4tc2Vuc29ycy5naXQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNlbnNvcnMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBlbmFibGVzIHRoZSBzZW5zb3JcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gVFlQRV9TRU5TT1IgU3BlY2lmeSB0aGUgc2Vuc29yIHRvIGVuYWJsZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGVuYWJsZVNlbnNvcihUWVBFX1NFTlNPUjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gZGlzYWJsZXMgdGhlIHNlbnNvclxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRpc2FibGVTZW5zb3IoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gY2FsbHMgdGhlIHN1Y2Nlc3MgY2FsbGJhY2tcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgc2Vuc29yIHN0YXRlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFN0YXRlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==