import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var Magnetometer = /** @class */ (function (_super) {
    __extends(Magnetometer, _super);
    function Magnetometer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Magnetometer.prototype.getReading = function () { return cordova(this, "getReading", {}, arguments); };
    Magnetometer.prototype.watchReadings = function () { return cordova(this, "watchReadings", { "callbackOrder": "reverse", "observable": true, "clearFunction": "stop" }, arguments); };
    Magnetometer.pluginName = "Magnetometer";
    Magnetometer.plugin = "cordova-plugin-magnetometer";
    Magnetometer.pluginRef = "cordova.plugins.magnetometer";
    Magnetometer.repo = "https://github.com/sdesalas/cordova-plugin-magnetometer";
    Magnetometer.platforms = ["Android", "iOS"];
    Magnetometer = __decorate([
        Injectable()
    ], Magnetometer);
    return Magnetometer;
}(IonicNativePlugin));
export { Magnetometer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21hZ25ldG9tZXRlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQStEQSxnQ0FBaUI7Ozs7SUFNakQsaUNBQVU7SUFnQlYsb0NBQWE7Ozs7OztJQXRCRixZQUFZO1FBRHhCLFVBQVUsRUFBRTtPQUNBLFlBQVk7dUJBakV6QjtFQWlFa0MsaUJBQWlCO1NBQXRDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hZ25ldG9tZXRlclJlYWRpbmcge1xyXG4gIC8qKlxyXG4gICAqIFggcmVhZGluZyBvZiBtYWduZXRvbWV0ZXIuIChOdW1iZXIpXHJcbiAgICovXHJcbiAgeDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBZIHJlYWRpbmcgb2YgbWFnbmV0b21ldGVyLiAoTnVtYmVyKVxyXG4gICAqL1xyXG4gIHk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogWiByZWFkaW5nIG9mIG1hZ25ldG9tZXRlci4gKE51bWJlcilcclxuICAgKi9cclxuICB6OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZWQgdG90YWwgLSBhbHdheXMgcG9zaXRpdmUgb2YgbWFnbmV0b21ldGVyLiAoTnVtYmVyKVxyXG4gICAqL1xyXG4gIG1hZ25pdHVkZTogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgRGV2aWNlIGVNYWduZXRvbWV0ZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tbWFnbmV0b21ldGVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0RldmljZSBPcmllbnRhdGlvbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vc2Rlc2FsYXMvY29yZG92YS1wbHVnaW4tbWFnbmV0b21ldGVyKS5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogLy8gRGV2aWNlT3JpZW50YXRpb25Db21wYXNzSGVhZGluZyBpcyBhbiBpbnRlcmZhY2UgZm9yIGNvbXBhc3NcclxuICogaW1wb3J0IHsgTWFnbmV0b21ldGVyLCBNYWduZXRvbWV0ZXJSZWFkaW5nIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kZXZpY2Utb3JpZW50YXRpb24vbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtYWduZXRvbWV0ZXI6IE1hZ25ldG9tZXRlcikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiAvLyBHZXQgdGhlIGRldmljZSBjdXJyZW50IGNvbXBhc3MgaGVhZGluZ1xyXG4gKiB0aGlzLmRldmljZU9yaWVudGF0aW9uLmdldFJlYWRpbmcoKS50aGVuKFxyXG4gKiAgIChkYXRhOiBNYWduZXRvbWV0ZXJSZWFkaW5nKSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcclxuICogICAoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAqICk7XHJcbiAqXHJcbiAqIC8vIFdhdGNoIHRoZSBkZXZpY2UgY29tcGFzcyBoZWFkaW5nIGNoYW5nZVxyXG4gKiB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5kZXZpY2VPcmllbnRhdGlvbi53YXRjaFJlYWRpbmdzKCkuc3Vic2NyaWJlKFxyXG4gKiAgIChkYXRhOiBNYWduZXRvbWV0ZXJSZWFkaW5nKSA9PiBjb25zb2xlLmxvZyhkYXRhKVxyXG4gKiApO1xyXG4gKlxyXG4gKiAvLyBTdG9wIHdhdGNoaW5nIGhlYWRpbmcgY2hhbmdlXHJcbiAqIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogTWFnbmV0b21ldGVyUmVhZGluZ1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ01hZ25ldG9tZXRlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWFnbmV0b21ldGVyJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMubWFnbmV0b21ldGVyJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3NkZXNhbGFzL2NvcmRvdmEtcGx1Z2luLW1hZ25ldG9tZXRlcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1hZ25ldG9tZXRlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY29tcGFzcyByZWFkaW5nLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE1hZ25ldG9tZXRlclJlYWRpbmc+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRSZWFkaW5nKCk6IFByb21pc2U8TWFnbmV0b21ldGVyUmVhZGluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBkZXZpY2UgY3VycmVudCBoZWFkaW5nIGF0IGEgcmVndWxhciBpbnRlcnZhbFxyXG4gICAqXHJcbiAgICogU3RvcCB0aGUgd2F0Y2ggYnkgdW5zdWJzY3JpYmluZyBmcm9tIHRoZSBvYnNlcnZhYmxlXHJcbiAgICogQHBhcmFtIHtEZXZpY2VPcmllbnRhdGlvbkNvbXBhc3NPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyBmb3IgY29tcGFzcy4gRnJlcXVlbmN5IGFuZCBGaWx0ZXIuIE9wdGlvbmFsXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RGV2aWNlT3JpZW50YXRpb25Db21wYXNzSGVhZGluZz59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNvbnRhaW5zIHRoZSBjb21wYXNzIGhlYWRpbmdcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3AnLFxyXG4gIH0pXHJcbiAgd2F0Y2hSZWFkaW5ncygpOiBPYnNlcnZhYmxlPE1hZ25ldG9tZXRlclJlYWRpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19