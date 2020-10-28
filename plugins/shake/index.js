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
var ShakeOriginal = /** @class */ (function (_super) {
    __extends(ShakeOriginal, _super);
    function ShakeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShakeOriginal.prototype.startWatch = function (sensitivity) { return cordova(this, "startWatch", { "observable": true, "clearFunction": "stopWatch", "successIndex": 0, "errorIndex": 2 }, arguments); };
    ShakeOriginal.pluginName = "Shake";
    ShakeOriginal.plugin = "cordova-plugin-shake";
    ShakeOriginal.pluginRef = "shake";
    ShakeOriginal.repo = "https://github.com/leecrossley/cordova-plugin-shake";
    ShakeOriginal.platforms = ["iOS"];
    return ShakeOriginal;
}(IonicNativePlugin));
var Shake = new ShakeOriginal();
export { Shake };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NoYWtlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBMkJQLHlCQUFpQjs7OztJQVkxQywwQkFBVSxhQUFDLFdBQW9COzs7Ozs7Z0JBekNqQztFQTZCMkIsaUJBQWlCO1NBQS9CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbi8qKlxyXG4gKiBAbmFtZSBTaGFrZVxyXG4gKiBAZGVzY3JpcHRpb24gSGFuZGxlcyBzaGFrZSBnZXN0dXJlXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNoYWtlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zaGFrZS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNoYWtlOiBTaGFrZSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBjb25zdCB3YXRjaCA9IHRoaXMuc2hha2Uuc3RhcnRXYXRjaCg2MCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICogICAvLyBkbyBzb21ldGhpbmdcclxuICogICB9KTtcclxuICpcclxuICogd2F0Y2gudW5zdWJzY3JpYmUoKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnU2hha2UnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNoYWtlJyxcclxuICBwbHVnaW5SZWY6ICdzaGFrZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sZWVjcm9zc2xleS9jb3Jkb3ZhLXBsdWdpbi1zaGFrZScsXHJcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTaGFrZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBXYXRjaCBmb3Igc2hha2UgZ2VzdHVyZVxyXG4gICAqIEBwYXJhbSBzZW5zaXRpdml0eSB7bnVtYmVyfSBPcHRpb25hbCBzZW5zaXRpdml0eSBwYXJhbWV0ZXIuIERlZmF1bHRzIHRvIDQwXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3BXYXRjaCcsXHJcbiAgICBzdWNjZXNzSW5kZXg6IDAsXHJcbiAgICBlcnJvckluZGV4OiAyLFxyXG4gIH0pXHJcbiAgc3RhcnRXYXRjaChzZW5zaXRpdml0eT86IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==