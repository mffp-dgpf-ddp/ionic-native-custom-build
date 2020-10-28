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
var BacklightOriginal = /** @class */ (function (_super) {
    __extends(BacklightOriginal, _super);
    function BacklightOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BacklightOriginal.prototype.on = function () { return cordova(this, "on", {}, arguments); };
    BacklightOriginal.prototype.off = function () { return cordova(this, "off", {}, arguments); };
    BacklightOriginal.pluginName = "Backlight";
    BacklightOriginal.plugin = "cordova-plugin-backlight";
    BacklightOriginal.pluginRef = "cordova.plugins.Backlight";
    BacklightOriginal.repo = "https://github.com/mebibou/cordova-plugin-backlight";
    BacklightOriginal.platforms = ["Android"];
    return BacklightOriginal;
}(IonicNativePlugin));
var Backlight = new BacklightOriginal();
export { Backlight };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhY2tsaWdodC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnQ3pDLDZCQUFpQjs7OztJQU05QyxzQkFBRTtJQVNGLHVCQUFHOzs7Ozs7b0JBaERMO0VBaUMrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQGJldGFcclxuICogQG5hbWUgQmFja2xpZ2h0XHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBhZGRzIHR1cm5pbmcgb24vb2ZmIHRoZSBkZXZpY2UgYmFja2xpZ2h0LlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBCYWNrbGlnaHQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JhY2tsaWdodC9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tsaWdodDogQmFja2xpZ2h0KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIC8vIFR1cm4gYmFja2xpZ2h0IG9uXHJcbiAqIHRoaXMuYmFja2xpZ2h0Lm9uKCkudGhlbigoKSA9PiBjb25zb2xlLmxvZygnYmFja2xpZ2h0IG9uJykpO1xyXG4gKlxyXG4gKiAvLyBUdXJuIGJhY2tsaWdodCBvZmZcclxuICogdGhpcy5iYWNrbGlnaHQub2ZmKCkudGhlbigoKSA9PiBjb25zb2xlLmxvZygnYmFja2xpZ2h0IG9mZicpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQmFja2xpZ2h0JyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1iYWNrbGlnaHQnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5CYWNrbGlnaHQnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWViaWJvdS9jb3Jkb3ZhLXBsdWdpbi1iYWNrbGlnaHQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJhY2tsaWdodCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIHR1cm5zIGJhY2tsaWdodCBvblxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBiYWNrbGlnaHQgaXMgb25cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgb24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gdHVybnMgYmFja2xpZ2h0IG9mZlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBiYWNrbGlnaHQgaXMgb2ZmXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIG9mZigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=