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
import { Observable } from 'rxjs';
var BatteryStatusOriginal = /** @class */ (function (_super) {
    __extends(BatteryStatusOriginal, _super);
    function BatteryStatusOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BatteryStatusOriginal.prototype.onChange = function () { return cordova(this, "onChange", { "eventObservable": true, "event": "batterystatus" }, arguments); };
    BatteryStatusOriginal.prototype.onLow = function () { return cordova(this, "onLow", { "eventObservable": true, "event": "batterylow" }, arguments); };
    BatteryStatusOriginal.prototype.onCritical = function () { return cordova(this, "onCritical", { "eventObservable": true, "event": "batterycritical" }, arguments); };
    BatteryStatusOriginal.pluginName = "BatteryStatus";
    BatteryStatusOriginal.plugin = "cordova-plugin-battery-status";
    BatteryStatusOriginal.pluginRef = "navigator.battery";
    BatteryStatusOriginal.repo = "https://github.com/apache/cordova-plugin-battery-status";
    BatteryStatusOriginal.platforms = ["iOS", "Android", "Windows", "Browser"];
    return BatteryStatusOriginal;
}(IonicNativePlugin));
var BatteryStatus = new BatteryStatusOriginal();
export { BatteryStatus };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhdHRlcnktc3RhdHVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBZ0RDLGlDQUFpQjs7OztJQVNsRCxnQ0FBUTtJQVlSLDZCQUFLO0lBWUwsa0NBQVU7Ozs7Ozt3QkFuRlo7RUFrRG1DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXR0ZXJ5U3RhdHVzUmVzcG9uc2Uge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBiYXR0ZXJ5IGNoYXJnZSBwZXJjZW50YWdlXHJcbiAgICovXHJcbiAgbGV2ZWw6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGRldmljZSBpcyBwbHVnZ2VkIGluXHJcbiAgICovXHJcbiAgaXNQbHVnZ2VkOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQmF0dGVyeSBTdGF0dXNcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1iYXR0ZXJ5c3RhdHVzLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQmF0dGVyeVN0YXR1cyBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1iYXR0ZXJ5LXN0YXR1cykuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEJhdHRlcnlTdGF0dXMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JhdHRlcnktc3RhdHVzL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmF0dGVyeVN0YXR1czogQmF0dGVyeVN0YXR1cykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiAvLyB3YXRjaCBjaGFuZ2UgaW4gYmF0dGVyeSBzdGF0dXNcclxuICogY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5iYXR0ZXJ5U3RhdHVzLm9uQ2hhbmdlKCkuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XHJcbiAqICAgIGNvbnNvbGUubG9nKHN0YXR1cy5sZXZlbCwgc3RhdHVzLmlzUGx1Z2dlZCk7XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiAvLyBzdG9wIHdhdGNoXHJcbiAqIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gKlxyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogQmF0dGVyeVN0YXR1c1Jlc3BvbnNlXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQmF0dGVyeVN0YXR1cycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYmF0dGVyeS1zdGF0dXMnLFxyXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5iYXR0ZXJ5JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1iYXR0ZXJ5LXN0YXR1cycsXHJcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJywgJ1dpbmRvd3MnLCAnQnJvd3NlciddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYXR0ZXJ5U3RhdHVzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFdhdGNoIHRoZSBjaGFuZ2UgaW4gYmF0dGVyeSBsZXZlbFxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IHB1c2hlcyBhIHN0YXR1cyBvYmplY3RcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXHJcbiAgICBldmVudDogJ2JhdHRlcnlzdGF0dXMnLFxyXG4gIH0pXHJcbiAgb25DaGFuZ2UoKTogT2JzZXJ2YWJsZTxCYXR0ZXJ5U3RhdHVzUmVzcG9uc2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdhdGNoIHdoZW4gdGhlIGJhdHRlcnkgbGV2ZWwgZ29lcyBsb3dcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxCYXR0ZXJ5U3RhdHVzUmVzcG9uc2U+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBwdXNoZXMgYSBzdGF0dXMgb2JqZWN0XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgZXZlbnQ6ICdiYXR0ZXJ5bG93JyxcclxuICB9KVxyXG4gIG9uTG93KCk6IE9ic2VydmFibGU8QmF0dGVyeVN0YXR1c1Jlc3BvbnNlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXYXRjaCB3aGVuIHRoZSBiYXR0ZXJ5IGxldmVsIGdvZXMgdG8gY3JpdGljYWxcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxCYXR0ZXJ5U3RhdHVzUmVzcG9uc2U+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBwdXNoZXMgYSBzdGF0dXMgb2JqZWN0XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgZXZlbnQ6ICdiYXR0ZXJ5Y3JpdGljYWwnLFxyXG4gIH0pXHJcbiAgb25Dcml0aWNhbCgpOiBPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=