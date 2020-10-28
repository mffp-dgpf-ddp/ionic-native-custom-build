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
var CropOriginal = /** @class */ (function (_super) {
    __extends(CropOriginal, _super);
    function CropOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CropOriginal.prototype.crop = function (pathToImage, options) { return cordova(this, "crop", { "callbackOrder": "reverse" }, arguments); };
    CropOriginal.pluginName = "Crop";
    CropOriginal.plugin = "cordova-plugin-crop";
    CropOriginal.pluginRef = "plugins";
    CropOriginal.repo = "https://github.com/jeduan/cordova-plugin-crop";
    CropOriginal.platforms = ["Android", "iOS"];
    return CropOriginal;
}(IonicNativePlugin));
var Crop = new CropOriginal();
export { Crop };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Nyb3AvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBb0M5Qyx3QkFBaUI7Ozs7SUFVekMsbUJBQUksYUFBQyxXQUFtQixFQUFFLE9BQXFCOzs7Ozs7ZUEvQ2pEO0VBcUMwQixpQkFBaUI7U0FBOUIsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENyb3BPcHRpb25zIHtcclxuICBxdWFsaXR5PzogbnVtYmVyO1xyXG4gIHRhcmdldEhlaWdodD86IG51bWJlcjtcclxuICB0YXJnZXRXaWR0aD86IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIENyb3BcclxuICogQGRlc2NyaXB0aW9uIENyb3BzIGltYWdlc1xyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBDcm9wIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jcm9wL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY3JvcDogQ3JvcCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmNyb3AuY3JvcCgncGF0aC90by9pbWFnZS5qcGcnLCB7cXVhbGl0eTogNzV9KVxyXG4gKiAgIC50aGVuKFxyXG4gKiAgICAgbmV3SW1hZ2UgPT4gY29uc29sZS5sb2coJ25ldyBpbWFnZSBwYXRoIGlzOiAnICsgbmV3SW1hZ2UpLFxyXG4gKiAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgY3JvcHBpbmcgaW1hZ2UnLCBlcnJvcilcclxuICogICApO1xyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogQ3JvcE9wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdDcm9wJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jcm9wJyxcclxuICBwbHVnaW5SZWY6ICdwbHVnaW5zJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2plZHVhbi9jb3Jkb3ZhLXBsdWdpbi1jcm9wJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ3JvcCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDcm9wcyBhbiBpbWFnZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoVG9JbWFnZVxyXG4gICAqIEBwYXJhbSB7Q3JvcE9wdGlvbnN9IFtvcHRpb25zXVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbmV3IGltYWdlIHBhdGgsIG9yIHJlamVjdHMgaWYgZmFpbGVkIHRvIGNyb3AuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgY3JvcChwYXRoVG9JbWFnZTogc3RyaW5nLCBvcHRpb25zPzogQ3JvcE9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=