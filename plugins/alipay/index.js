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
var AlipayOriginal = /** @class */ (function (_super) {
    __extends(AlipayOriginal, _super);
    function AlipayOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlipayOriginal.prototype.pay = function (order, success, error) { return cordova(this, "pay", {}, arguments); };
    AlipayOriginal.pluginName = "Alipay";
    AlipayOriginal.plugin = "cordova-plugin-gubnoi-alipay";
    AlipayOriginal.pluginRef = "cordova.plugins.alipay";
    AlipayOriginal.repo = "https://github.com/jing-zhou/cordova-plugin-alipay";
    AlipayOriginal.install = "ionic cordova plugin add cordova-plugin-gubnoi-alipay --variable APP_ID=your_app_id";
    AlipayOriginal.installVariables = ["APP_ID"];
    AlipayOriginal.platforms = ["Android", "iOS"];
    return AlipayOriginal;
}(IonicNativePlugin));
var Alipay = new AlipayOriginal();
export { Alipay };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FsaXBheS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFzQzVDLDBCQUFpQjs7OztJQU8zQyxvQkFBRyxhQUFDLEtBQWEsRUFBRSxPQUE2QixFQUFFLEtBQTJCOzs7Ozs7OztpQkE5Qy9FO0VBdUM0QixpQkFBaUI7U0FBaEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgQWxpcGF5XHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBmYWNpbGl0YXRlcyB0aGUgdXNhZ2Ugb2YgQWxpcGF5IOaUr+S7mOWunSBpbiBhbiBJb25pYyBhcHBzIHdpdGggdGhlIGludGVncmF0ZWQgQWxpcGF5U0RLIGRhdGVkIG9uIDIwMTgwNjAxLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWd1Ym5vaS1hbGlwYXlgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qaW5nLXpob3UvY29yZG92YS1wbHVnaW4tYWxpcGF5IC5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQWxpcGF5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hbGlwYXkvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhbGlwYXk6IEFsaXBheSkge1xyXG4gKlxyXG4gKiAvL2FsaXBheU9yZGVyIGlzIGEgc3RyaW5nIHRoYXQgaGFzIGJlZW4gZ2VuZXJhdGVkIGFuZCBzaWduZWQgYnkgdGhlIHNlcnZlciBzaWRlLlxyXG4gKiB0aGlzLmFsaXBheS5wYXkoYWxpcGF5T3JkZXIsIHN1Y2Nlc3MsIGVycm9yKVxyXG4gKiAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gKiAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpOyAvLyBTdWNjZXNzXHJcbiAqICAgIH0pXHJcbiAqICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAqICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgLy8gRmFpbGVkXHJcbiAqICAgIH0pO1xyXG4gKlxyXG4gKiB9XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0FsaXBheScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ3Vibm9pLWFsaXBheScsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmFsaXBheScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qaW5nLXpob3UvY29yZG92YS1wbHVnaW4tYWxpcGF5JyxcclxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWd1Ym5vaS1hbGlwYXkgLS12YXJpYWJsZSBBUFBfSUQ9eW91cl9hcHBfaWQnLFxyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQVBQX0lEJ10sXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFsaXBheSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBPcGVuIEFsaXBheSB0byBwZXJmb3JtIEFwcCBwYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3JkZXIgYWxpcGF5IG9yZGVyIHN0cmluZ1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgc3VjY2VzcyByZXR1cm4sIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcGF5KG9yZGVyOiBzdHJpbmcsIHN1Y2Nlc3M/OiAocmVzPzogYW55KSA9PiB2b2lkLCBlcnJvcj86IChlcnI/OiBhbnkpID0+IHZvaWQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=