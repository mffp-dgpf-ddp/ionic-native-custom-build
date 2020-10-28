import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var ExtendedDeviceInformation = /** @class */ (function (_super) {
    __extends(ExtendedDeviceInformation, _super);
    function ExtendedDeviceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ExtendedDeviceInformation.prototype, "memory", {
        get: function () { return cordovaPropertyGet(this, "memory"); },
        set: function (value) { cordovaPropertySet(this, "memory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedDeviceInformation.prototype, "cpumhz", {
        get: function () { return cordovaPropertyGet(this, "cpumhz"); },
        set: function (value) { cordovaPropertySet(this, "cpumhz", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedDeviceInformation.prototype, "totalstorage", {
        get: function () { return cordovaPropertyGet(this, "totalstorage"); },
        set: function (value) { cordovaPropertySet(this, "totalstorage", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedDeviceInformation.prototype, "freestorage", {
        get: function () { return cordovaPropertyGet(this, "freestorage"); },
        set: function (value) { cordovaPropertySet(this, "freestorage", value); },
        enumerable: true,
        configurable: true
    });
    ExtendedDeviceInformation.pluginName = "ExtendedDeviceInformation";
    ExtendedDeviceInformation.plugin = "cordova-plugin-extended-device-information";
    ExtendedDeviceInformation.pluginRef = "extended-device-information";
    ExtendedDeviceInformation.repo = "https://github.com/danielehrhardt/cordova-plugin-extended-device-information";
    ExtendedDeviceInformation.platforms = ["Android"];
    ExtendedDeviceInformation = __decorate([
        Injectable()
    ], ExtendedDeviceInformation);
    return ExtendedDeviceInformation;
}(IonicNativePlugin));
export { ExtendedDeviceInformation };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2V4dGVuZGVkLWRldmljZS1pbmZvcm1hdGlvbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw2REFBOEMsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQmpDLDZDQUFpQjs7OzswQkFLOUQsNkNBQU07Ozs7OzswQkFNTiw2Q0FBTTs7Ozs7OzBCQU1OLG1EQUFZOzs7Ozs7MEJBTVosa0RBQVc7Ozs7Ozs7Ozs7O0lBdkJBLHlCQUF5QjtRQURyQyxVQUFVLEVBQUU7T0FDQSx5QkFBeUI7b0NBaEN0QztFQWdDK0MsaUJBQWlCO1NBQW5ELHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBFeHRlbmRlZCBEZXZpY2UgSW5mb3JtYXRpb25cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFJldHJpZXZlcyBhZGRpdGlvbmFsIGRldmljZSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBEZXZpY2UgSGFyZHdhcmVcclxuICogIC0gbWVtb3J5XHJcbiAqICAtIGNwdW1oelxyXG4gKiAgLSB0b3RhbHN0b3JhZ2VcclxuICogIC0gZnJlZXN0b3JhZ2VcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRXh0ZW5kZWREZXZpY2VJbmZvcm1hdGlvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZXh0ZW5kZWQtZGV2aWNlLWluZm9ybWF0aW9uL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZXh0ZW5kZWREZXZpY2VJbmZvcm1hdGlvbjogRXh0ZW5kZWREZXZpY2VJbmZvcm1hdGlvbikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBjb25zb2xlLmxvZygnVGhlIE1lbW9yeSBpczogJyArIHRoaXMuZXh0ZW5kZWREZXZpY2VJbmZvcm1hdGlvbi5tZW1vcnkpO1xyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdFeHRlbmRlZERldmljZUluZm9ybWF0aW9uJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1leHRlbmRlZC1kZXZpY2UtaW5mb3JtYXRpb24nLFxyXG4gIHBsdWdpblJlZjogJ2V4dGVuZGVkLWRldmljZS1pbmZvcm1hdGlvbicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxlaHJoYXJkdC9jb3Jkb3ZhLXBsdWdpbi1leHRlbmRlZC1kZXZpY2UtaW5mb3JtYXRpb24nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEV4dGVuZGVkRGV2aWNlSW5mb3JtYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBkZXZpY2UncyBtZW1vcnkgc2l6ZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIG1lbW9yeTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGRldmljZSdzIENQVSBtaHpcclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBjcHVtaHo6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSB0b3RhbCBzdG9yYWdlXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgdG90YWxzdG9yYWdlOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgdG90YWwgc3RvcmFnZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIGZyZWVzdG9yYWdlOiBudW1iZXI7XHJcbn1cclxuIl19