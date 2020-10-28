import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Device.prototype, "cordova", {
        get: function () { return cordovaPropertyGet(this, "cordova"); },
        set: function (value) { cordovaPropertySet(this, "cordova", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "model", {
        get: function () { return cordovaPropertyGet(this, "model"); },
        set: function (value) { cordovaPropertySet(this, "model", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "platform", {
        get: function () { return cordovaPropertyGet(this, "platform"); },
        set: function (value) { cordovaPropertySet(this, "platform", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "uuid", {
        get: function () { return cordovaPropertyGet(this, "uuid"); },
        set: function (value) { cordovaPropertySet(this, "uuid", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "version", {
        get: function () { return cordovaPropertyGet(this, "version"); },
        set: function (value) { cordovaPropertySet(this, "version", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "manufacturer", {
        get: function () { return cordovaPropertyGet(this, "manufacturer"); },
        set: function (value) { cordovaPropertySet(this, "manufacturer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "isVirtual", {
        get: function () { return cordovaPropertyGet(this, "isVirtual"); },
        set: function (value) { cordovaPropertySet(this, "isVirtual", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "serial", {
        get: function () { return cordovaPropertyGet(this, "serial"); },
        set: function (value) { cordovaPropertySet(this, "serial", value); },
        enumerable: true,
        configurable: true
    });
    Device.pluginName = "Device";
    Device.plugin = "cordova-plugin-device";
    Device.pluginRef = "device";
    Device.repo = "https://github.com/apache/cordova-plugin-device";
    Device.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    Device = __decorate([
        Injectable()
    ], Device);
    return Device;
}(IonicNativePlugin));
export { Device };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RldmljZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw2REFBOEMsTUFBTSxvQkFBb0IsQ0FBQzs7SUE2QnBELDBCQUFpQjs7OzswQkFHM0MsMkJBQU87Ozs7OzswQkFPUCx5QkFBSzs7Ozs7OzBCQUlMLDRCQUFROzs7Ozs7MEJBSVIsd0JBQUk7Ozs7OzswQkFJSiwyQkFBTzs7Ozs7OzBCQUlQLGdDQUFZOzs7Ozs7MEJBSVosNkJBQVM7Ozs7OzswQkFJVCwwQkFBTTs7Ozs7Ozs7Ozs7SUFsQ0ssTUFBTTtRQURsQixVQUFVLEVBQUU7T0FDQSxNQUFNO2lCQTlCbkI7RUE4QjRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBEZXZpY2VcclxuICogQHByZW1pZXIgZGV2aWNlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBY2Nlc3MgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHVuZGVybHlpbmcgZGV2aWNlIGFuZCBwbGF0Zm9ybS5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kZXZpY2Uvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkZXZpY2U6IERldmljZSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBjb25zb2xlLmxvZygnRGV2aWNlIFVVSUQgaXM6ICcgKyB0aGlzLmRldmljZS51dWlkKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRGV2aWNlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kZXZpY2UnLFxyXG4gIHBsdWdpblJlZjogJ2RldmljZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZGV2aWNlJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdtYWNPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERldmljZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKiogR2V0IHRoZSB2ZXJzaW9uIG9mIENvcmRvdmEgcnVubmluZyBvbiB0aGUgZGV2aWNlLiAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIGNvcmRvdmE6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRldmljZS5tb2RlbCByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBkZXZpY2UncyBtb2RlbCBvciBwcm9kdWN0LiBUaGUgdmFsdWUgaXMgc2V0XHJcbiAgICogYnkgdGhlIGRldmljZSBtYW51ZmFjdHVyZXIgYW5kIG1heSBiZSBkaWZmZXJlbnQgYWNyb3NzIHZlcnNpb25zIG9mIHRoZSBzYW1lIHByb2R1Y3QuXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgbW9kZWw6IHN0cmluZztcclxuXHJcbiAgLyoqIEdldCB0aGUgZGV2aWNlJ3Mgb3BlcmF0aW5nIHN5c3RlbSBuYW1lLiAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIHBsYXRmb3JtOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBHZXQgdGhlIGRldmljZSdzIFVuaXZlcnNhbGx5IFVuaXF1ZSBJZGVudGlmaWVyIChVVUlEKS4gKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICB1dWlkOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBHZXQgdGhlIG9wZXJhdGluZyBzeXN0ZW0gdmVyc2lvbi4gKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICB2ZXJzaW9uOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBHZXQgdGhlIGRldmljZSdzIG1hbnVmYWN0dXJlci4gKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBtYW51ZmFjdHVyZXI6IHN0cmluZztcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGRldmljZSBpcyBydW5uaW5nIG9uIGEgc2ltdWxhdG9yLiAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIGlzVmlydHVhbDogYm9vbGVhbjtcclxuXHJcbiAgLyoqIEdldCB0aGUgZGV2aWNlIGhhcmR3YXJlIHNlcmlhbCBudW1iZXIuICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgc2VyaWFsOiBzdHJpbmc7XHJcbn1cclxuIl19