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
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var DeviceOriginal = /** @class */ (function (_super) {
    __extends(DeviceOriginal, _super);
    function DeviceOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DeviceOriginal.prototype, "cordova", {
        get: function () { return cordovaPropertyGet(this, "cordova"); },
        set: function (value) { cordovaPropertySet(this, "cordova", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "model", {
        get: function () { return cordovaPropertyGet(this, "model"); },
        set: function (value) { cordovaPropertySet(this, "model", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "platform", {
        get: function () { return cordovaPropertyGet(this, "platform"); },
        set: function (value) { cordovaPropertySet(this, "platform", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "uuid", {
        get: function () { return cordovaPropertyGet(this, "uuid"); },
        set: function (value) { cordovaPropertySet(this, "uuid", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "version", {
        get: function () { return cordovaPropertyGet(this, "version"); },
        set: function (value) { cordovaPropertySet(this, "version", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "manufacturer", {
        get: function () { return cordovaPropertyGet(this, "manufacturer"); },
        set: function (value) { cordovaPropertySet(this, "manufacturer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "isVirtual", {
        get: function () { return cordovaPropertyGet(this, "isVirtual"); },
        set: function (value) { cordovaPropertySet(this, "isVirtual", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "serial", {
        get: function () { return cordovaPropertyGet(this, "serial"); },
        set: function (value) { cordovaPropertySet(this, "serial", value); },
        enumerable: true,
        configurable: true
    });
    DeviceOriginal.pluginName = "Device";
    DeviceOriginal.plugin = "cordova-plugin-device";
    DeviceOriginal.pluginRef = "device";
    DeviceOriginal.repo = "https://github.com/apache/cordova-plugin-device";
    DeviceOriginal.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    return DeviceOriginal;
}(IonicNativePlugin));
var Device = new DeviceOriginal();
export { Device };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RldmljZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw2REFBOEMsTUFBTSxvQkFBb0IsQ0FBQzs7SUE2QnBELDBCQUFpQjs7OzswQkFHM0MsMkJBQU87Ozs7OzswQkFPUCx5QkFBSzs7Ozs7OzBCQUlMLDRCQUFROzs7Ozs7MEJBSVIsd0JBQUk7Ozs7OzswQkFJSiwyQkFBTzs7Ozs7OzBCQUlQLGdDQUFZOzs7Ozs7MEJBSVosNkJBQVM7Ozs7OzswQkFJVCwwQkFBTTs7Ozs7Ozs7Ozs7aUJBaEVSO0VBOEI0QixpQkFBaUI7U0FBaEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XHJcblxyXG4vKipcclxuICogQG5hbWUgRGV2aWNlXHJcbiAqIEBwcmVtaWVyIGRldmljZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IHRoZSB1bmRlcmx5aW5nIGRldmljZSBhbmQgcGxhdGZvcm0uXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IERldmljZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGV2aWNlL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV2aWNlOiBEZXZpY2UpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogY29uc29sZS5sb2coJ0RldmljZSBVVUlEIGlzOiAnICsgdGhpcy5kZXZpY2UudXVpZCk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0RldmljZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZGV2aWNlJyxcclxuICBwbHVnaW5SZWY6ICdkZXZpY2UnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWRldmljZScsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZXZpY2UgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqIEdldCB0aGUgdmVyc2lvbiBvZiBDb3Jkb3ZhIHJ1bm5pbmcgb24gdGhlIGRldmljZS4gKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBjb3Jkb3ZhOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkZXZpY2UubW9kZWwgcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgZGV2aWNlJ3MgbW9kZWwgb3IgcHJvZHVjdC4gVGhlIHZhbHVlIGlzIHNldFxyXG4gICAqIGJ5IHRoZSBkZXZpY2UgbWFudWZhY3R1cmVyIGFuZCBtYXkgYmUgZGlmZmVyZW50IGFjcm9zcyB2ZXJzaW9ucyBvZiB0aGUgc2FtZSBwcm9kdWN0LlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIG1vZGVsOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBHZXQgdGhlIGRldmljZSdzIG9wZXJhdGluZyBzeXN0ZW0gbmFtZS4gKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBwbGF0Zm9ybTogc3RyaW5nO1xyXG5cclxuICAvKiogR2V0IHRoZSBkZXZpY2UncyBVbml2ZXJzYWxseSBVbmlxdWUgSWRlbnRpZmllciAoVVVJRCkuICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgdXVpZDogc3RyaW5nO1xyXG5cclxuICAvKiogR2V0IHRoZSBvcGVyYXRpbmcgc3lzdGVtIHZlcnNpb24uICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgdmVyc2lvbjogc3RyaW5nO1xyXG5cclxuICAvKiogR2V0IHRoZSBkZXZpY2UncyBtYW51ZmFjdHVyZXIuICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgbWFudWZhY3R1cmVyOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBkZXZpY2UgaXMgcnVubmluZyBvbiBhIHNpbXVsYXRvci4gKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBpc1ZpcnR1YWw6IGJvb2xlYW47XHJcblxyXG4gIC8qKiBHZXQgdGhlIGRldmljZSBoYXJkd2FyZSBzZXJpYWwgbnVtYmVyLiAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIHNlcmlhbDogc3RyaW5nO1xyXG59XHJcbiJdfQ==