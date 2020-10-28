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
var StepcounterOriginal = /** @class */ (function (_super) {
    __extends(StepcounterOriginal, _super);
    function StepcounterOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepcounterOriginal.prototype.start = function (startingOffset) { return cordova(this, "start", {}, arguments); };
    StepcounterOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    StepcounterOriginal.prototype.getTodayStepCount = function () { return cordova(this, "getTodayStepCount", {}, arguments); };
    StepcounterOriginal.prototype.getStepCount = function () { return cordova(this, "getStepCount", {}, arguments); };
    StepcounterOriginal.prototype.deviceCanCountSteps = function () { return cordova(this, "deviceCanCountSteps", {}, arguments); };
    StepcounterOriginal.prototype.getHistory = function () { return cordova(this, "getHistory", {}, arguments); };
    StepcounterOriginal.pluginName = "Stepcounter";
    StepcounterOriginal.plugin = "cordova-plugin-stepcounter";
    StepcounterOriginal.pluginRef = "stepcounter";
    StepcounterOriginal.repo = "https://github.com/ihadeed/cordova-plugin-stepcounter";
    StepcounterOriginal.platforms = ["Android"];
    return StepcounterOriginal;
}(IonicNativePlugin));
var Stepcounter = new StepcounterOriginal();
export { Stepcounter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0ZXBjb3VudGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDdkMsK0JBQWlCOzs7O0lBUWhELDJCQUFLLGFBQUMsY0FBc0I7SUFTNUIsMEJBQUk7SUFTSix1Q0FBaUI7SUFTakIsa0NBQVk7SUFTWix5Q0FBbUI7SUFTbkIsZ0NBQVU7Ozs7OztzQkF2Rlo7RUFrQ2lDLGlCQUFpQjtTQUFyQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuLyoqXHJcbiAqIEBuYW1lIFN0ZXBjb3VudGVyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIHBsdWdpbiBmb3IgdXNpbmcgZGV2aWNlJ3Mgc3RlcGNvdW50ZXIgb24gQW5kcm9pZCAoQVBJID4gMTkpXHJcbiAqXHJcbiAqIFVzZSB0b1xyXG4gKiAtIHN0YXJ0IGFuZCBzdG9wIHN0ZXBjb3VudGVyIHNlcnZpY2VcclxuICogLSByZWFkIGRldmljZSdzIHN0ZXBjb3VudGVyIGRhdGFcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgU3RlcGNvdW50ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0ZXBjb3VudGVyL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RlcGNvdW50ZXI6IFN0ZXBjb3VudGVyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGxldCBzdGFydGluZ09mZnNldCA9IDA7XHJcbiAqIHRoaXMuc3RlcGNvdW50ZXIuc3RhcnQoc3RhcnRpbmdPZmZzZXQpLnRoZW4ob25TdWNjZXNzID0+IGNvbnNvbGUubG9nKCdzdGVwY291bnRlci1zdGFydCBzdWNjZXNzJywgb25TdWNjZXNzKSwgb25GYWlsdXJlID0+IGNvbnNvbGUubG9nKCdzdGVwY291bnRlci1zdGFydCBlcnJvcicsIG9uRmFpbHVyZSkpO1xyXG4gKlxyXG4gKiB0aGlzLnN0ZXBjb3VudGVyLmdldEhpc3RvcnkoKS50aGVuKGhpc3RvcnlPYmogPT4gY29uc29sZS5sb2coJ3N0ZXBjb3VudGVyLWhpc3Rvcnkgc3VjY2VzcycsIGhpc3RvcnlPYmopLCBvbkZhaWx1cmUgPT4gY29uc29sZS5sb2coJ3N0ZXBjb3VudGVyLWhpc3RvcnkgZXJyb3InLCBvbkZhaWx1cmUpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnU3RlcGNvdW50ZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXN0ZXBjb3VudGVyJyxcclxuICBwbHVnaW5SZWY6ICdzdGVwY291bnRlcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9paGFkZWVkL2NvcmRvdmEtcGx1Z2luLXN0ZXBjb3VudGVyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGVwY291bnRlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBTdGFydCB0aGUgc3RlcCBjb3VudGVyXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RhcnRpbmdPZmZzZXQge251bWJlcn0gd2lsbCBiZSBhZGRlZCB0byB0aGUgdG90YWwgc3RlcHMgY291bnRlZCBpbiB0aGlzIHNlc3Npb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnkgfCBudW1iZXI+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3Mgb3IgcmVqZWN0cyBvbiBmYWlsdXJlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0YXJ0KHN0YXJ0aW5nT2Zmc2V0OiBudW1iZXIpOiBQcm9taXNlPG51bWJlciB8IGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcCB0aGUgc3RlcCBjb3VudGVyXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55IHwgbnVtYmVyPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzIHdpdGggdGhlIGFtb3VudCBvZiBzdGVwcyBzaW5jZSB0aGUgc3RhcnQgY29tbWFuZCBoYXMgYmVlbiBjYWxsZWQsIG9yIHJlamVjdHMgb24gZmFpbHVyZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdG9wKCk6IFByb21pc2U8bnVtYmVyIHwgYW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGFtb3VudCBvZiBzdGVwcyBmb3IgdG9kYXkgKG9yIC0xIGlmIGl0IG5vIGRhdGEgZ2l2ZW4pXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55IHwgbnVtYmVyPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzIHdpdGggdGhlIGFtb3VudCBvZiBzdGVwcyB0b2RheSwgb3IgcmVqZWN0cyBvbiBmYWlsdXJlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFRvZGF5U3RlcENvdW50KCk6IFByb21pc2U8bnVtYmVyIHwgYW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGFtb3VudCBvZiBzdGVwcyBzaW5jZSB0aGUgc3RhcnQgY29tbWFuZCBoYXMgYmVlbiBjYWxsZWRcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnkgfCBudW1iZXI+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3Mgd2l0aCB0aGUgYW1vdW50IG9mIHN0ZXBzIHNpbmNlIHRoZSBzdGFydCBjb21tYW5kIGhhcyBiZWVuIGNhbGxlZCwgb3IgcmVqZWN0cyBvbiBmYWlsdXJlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFN0ZXBDb3VudCgpOiBQcm9taXNlPG51bWJlciB8IGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0cnVlL2ZhbHNlIGlmIEFuZHJvaWQgZGV2aWNlIGlzIHJ1bm5pbmcgPkFQSSBsZXZlbCAxOSAmJiBoYXMgdGhlIHN0ZXAgY291bnRlciBBUEkgYXZhaWxhYmxlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55IHwgYm9vbGVhbj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgb24gc3VjY2Vzcywgb3IgcmVqZWN0cyBvbiBmYWlsdXJlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRldmljZUNhbkNvdW50U3RlcHMoKTogUHJvbWlzZTxib29sZWFuIHwgYW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIHN0ZXAgaGlzdG9yeSAoSmF2YVNjcmlwdCBvYmplY3QpXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzLCBvciByZWplY3RzIG9uIGZhaWx1cmVcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0SGlzdG9yeSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=