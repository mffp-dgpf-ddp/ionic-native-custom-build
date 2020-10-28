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
var BrightnessOriginal = /** @class */ (function (_super) {
    __extends(BrightnessOriginal, _super);
    function BrightnessOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrightnessOriginal.prototype.setBrightness = function (value) { return cordova(this, "setBrightness", {}, arguments); };
    BrightnessOriginal.prototype.getBrightness = function () { return cordova(this, "getBrightness", {}, arguments); };
    BrightnessOriginal.prototype.setKeepScreenOn = function (value) { return cordova(this, "setKeepScreenOn", {}, arguments); };
    BrightnessOriginal.pluginName = "Brightness";
    BrightnessOriginal.plugin = "cordova-plugin-brightness";
    BrightnessOriginal.pluginRef = "cordova.plugins.brightness";
    BrightnessOriginal.repo = "https://github.com/mgcrea/cordova-plugin-brightness";
    BrightnessOriginal.platforms = ["Android", "iOS"];
    return BrightnessOriginal;
}(IonicNativePlugin));
var Brightness = new BrightnessOriginal();
export { Brightness };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JyaWdodG5lc3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBOEJ4Qyw4QkFBaUI7Ozs7SUFRL0Msa0NBQWEsYUFBQyxLQUFhO0lBVzNCLGtDQUFhO0lBU2Isb0NBQWUsYUFBQyxLQUFjOzs7Ozs7cUJBM0RoQztFQStCZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEJyaWdodG5lc3NcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBCcmlnaHRuZXNzIHBsdWdpbiBsZXQgeW91IGNvbnRyb2wgdGhlIGRpc3BsYXkgYnJpZ2h0bmVzcyBvZiB5b3VyIGRldmljZS5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1icmlnaHRuZXNzYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0JyaWdodG5lc3MgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9tZ2NyZWEvY29yZG92YS1wbHVnaW4tYnJpZ2h0bmVzcykuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEJyaWdodG5lc3MgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JyaWdodG5lc3Mvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBicmlnaHRuZXNzOiBCcmlnaHRuZXNzKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGxldCBicmlnaHRuZXNzVmFsdWUgPSAwLjg7XHJcbiAqIHRoaXMuYnJpZ2h0bmVzcy5zZXRCcmlnaHRuZXNzKGJyaWdodG5lc3NWYWx1ZSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0JyaWdodG5lc3MnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJyaWdodG5lc3MnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5icmlnaHRuZXNzJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21nY3JlYS9jb3Jkb3ZhLXBsdWdpbi1icmlnaHRuZXNzJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnJpZ2h0bmVzcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBicmlnaHRuZXNzIG9mIHRoZSBkaXNwbGF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIEZsb2F0aW5nIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEgaW4gd2hpY2ggY2FzZSAxIG1lYW5zIDEwMCUgYnJpZ2h0bmVzcyBhbmQgMCBtZWFucyAwJSBicmlnaHRuZXNzLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgc2V0dGluZyBicmlnaHRuZXNzIHdhcyBzdWNjZXNzZnVsLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZXRCcmlnaHRuZXNzKHZhbHVlOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVhZHMgdGhlIGN1cnJlbnQgYnJpZ2h0bmVzcyBvZiB0aGUgZGV2aWNlIGRpc3BsYXkuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlXHJcbiAgICogYnJpZ2h0bmVzcyB2YWx1ZSBvZiB0aGUgZGV2aWNlIGRpc3BsYXkgKGZsb2F0aW5nIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEpLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRCcmlnaHRuZXNzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBLZWVwcyB0aGUgc2NyZWVuIG9uLiBQcmV2ZW50cyB0aGUgZGV2aWNlIGZyb20gc2V0dGluZyB0aGUgc2NyZWVuIHRvIHNsZWVwLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2V0S2VlcFNjcmVlbk9uKHZhbHVlOiBib29sZWFuKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==