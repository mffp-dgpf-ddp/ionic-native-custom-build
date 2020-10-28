import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Sensors = /** @class */ (function (_super) {
    __extends(Sensors, _super);
    function Sensors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sensors.prototype.enableSensor = function (TYPE_SENSOR) { return cordova(this, "enableSensor", {}, arguments); };
    Sensors.prototype.disableSensor = function () { return cordova(this, "disableSensor", {}, arguments); };
    Sensors.prototype.getState = function () { return cordova(this, "getState", {}, arguments); };
    Sensors.pluginName = "Sensors";
    Sensors.plugin = "https://github.com/fabiorogeriosj/cordova-plugin-sensors.git";
    Sensors.pluginRef = "sensors";
    Sensors.repo = "https://github.com/fabiorogeriosj/cordova-plugin-sensors.git";
    Sensors.platforms = ["Android"];
    Sensors = __decorate([
        Injectable()
    ], Sensors);
    return Sensors;
}(IonicNativePlugin));
export { Sensors };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NlbnNvcnMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBa0QzQywyQkFBaUI7Ozs7SUFPNUMsOEJBQVksYUFBQyxXQUFtQjtJQVNoQywrQkFBYTtJQVNiLDBCQUFROzs7Ozs7SUF6QkcsT0FBTztRQURuQixVQUFVLEVBQUU7T0FDQSxPQUFPO2tCQW5EcEI7RUFtRDZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFRZUEVfU0VOU09SIHtcclxuICBQUk9YSU1JVFkgPSAnUFJPWElNSVRZJyxcclxuICBBQ0NFTEVST01FVEVSID0gJ0FDQ0VMRVJPTUVURVInLFxyXG4gIEdSQVZJVFkgPSAnR1JBVklUWScsXHJcbiAgR1lST1NDT1BFID0gJ0dZUk9TQ09QRScsXHJcbiAgR1lST1NDT1BFX1VOQ0FMSUJSQVRFRCA9ICdHWVJPU0NPUEVfVU5DQUxJQlJBVEVEJyxcclxuICBMSU5FQVJfQUNDRUxFUkFUSU9OID0gJ0xJTkVBUl9BQ0NFTEVSQVRJT04nLFxyXG4gIFJPVEFUSU9OX1ZFQ1RPUiA9ICdST1RBVElPTl9WRUNUT1InLFxyXG4gIFNURVBfQ09VTlRFUiA9ICdTVEVQX0NPVU5URVInLFxyXG4gIEdBTUVfUk9UQVRJT05fVkVDVE9SID0gJ0dBTUVfUk9UQVRJT05fVkVDVE9SJyxcclxuICBHRU9NQUdORVRJQ19ST1RBVElPTl9WRUNUT1IgPSAnR0VPTUFHTkVUSUNfUk9UQVRJT05fVkVDVE9SJyxcclxuICBNQUdORVRJQ19GSUVMRCA9ICdNQUdORVRJQ19GSUVMRCcsXHJcbiAgTUFHTkVUSUNfRklFTERfVU5DQUxJQlJBVEVEID0gJ01BR05FVElDX0ZJRUxEX1VOQ0FMSUJSQVRFRCcsXHJcbiAgT1JJRU5UQVRJT04gPSAnT1JJRU5UQVRJT04nLFxyXG4gIEFNQklFTlRfVEVNUEVSQVRVUkUgPSAnQU1CSUVOVF9URU1QRVJBVFVSRScsXHJcbiAgTElHSFQgPSAnTElHSFQnLFxyXG4gIFBSRVNTVVJFID0gJ1BSRVNTVVJFJyxcclxuICBSRUxBVElWRV9IVU1JRElUWSA9ICdSRUxBVElWRV9IVU1JRElUWScsXHJcbiAgVEVNUEVSQVRVUkUgPSAnVEVNUEVSQVRVUkUnLFxyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgU2Vuc29yc1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gZW5hYmxlcyBzZW5zb3JzIG9uIEFuZHJvaWQgZGV2aWNlc1xyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBTZW5zb3JzLCBUWVBFX1NFTlNPUiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc2Vuc29ycy9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlbnNvcnM6IFNlbnNvcnMpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5zZW5zb3JzLmVuYWJsZVNlbnNvcihUWVBFX1NFTlNPUi5MSUdIVCk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1NlbnNvcnMnLFxyXG4gIHBsdWdpbjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWJpb3JvZ2VyaW9zai9jb3Jkb3ZhLXBsdWdpbi1zZW5zb3JzLmdpdCcsXHJcbiAgcGx1Z2luUmVmOiAnc2Vuc29ycycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWJpb3JvZ2VyaW9zai9jb3Jkb3ZhLXBsdWdpbi1zZW5zb3JzLmdpdCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2Vuc29ycyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIGVuYWJsZXMgdGhlIHNlbnNvclxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBUWVBFX1NFTlNPUiBTcGVjaWZ5IHRoZSBzZW5zb3IgdG8gZW5hYmxlXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZW5hYmxlU2Vuc29yKFRZUEVfU0VOU09SOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBkaXNhYmxlcyB0aGUgc2Vuc29yXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZGlzYWJsZVNlbnNvcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBjYWxscyB0aGUgc3VjY2VzcyBjYWxsYmFja1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBzZW5zb3Igc3RhdGVcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0U3RhdGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19