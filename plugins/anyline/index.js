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
var AnylineOriginal = /** @class */ (function (_super) {
    __extends(AnylineOriginal, _super);
    function AnylineOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnylineOriginal.prototype.scan = function (options) { return cordova(this, "scan", {}, arguments); };
    AnylineOriginal.pluginName = "Anyline";
    AnylineOriginal.plugin = "io-anyline-cordova";
    AnylineOriginal.pluginRef = "Anyline";
    AnylineOriginal.repo = "https://github.com/Anyline/anyline-ocr-cordova-module";
    AnylineOriginal.platforms = ["Android", "iOS"];
    return AnylineOriginal;
}(IonicNativePlugin));
var Anyline = new AnylineOriginal();
export { Anyline };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FueWxpbmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBdUMzQywyQkFBaUI7Ozs7SUFPNUMsc0JBQUksYUFBQyxPQUF1Qjs7Ozs7O2tCQS9DOUI7RUF3QzZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW55bGluZU9wdGlvbnMge1xyXG4gIC8vIFZhbGlkIExpY2Vuc2UgS2V5XHJcbiAgbGljZW5zZUtleTogc3RyaW5nO1xyXG5cclxuICAvLyBTY2FubmluZyBvcHRpb25zXHJcbiAgY29uZmlnOiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBBbnlsaW5lXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBbnlsaW5lIHByb3ZpZGVzIGFuIGVhc3ktdG8tdXNlIFNESyBmb3IgYXBwbGljYXRpb25zIHRvIGVuYWJsZSBPcHRpY2FsIENoYXJhY3RlciBSZWNvZ25pdGlvbiAoT0NSKSBvbiBtb2JpbGUgZGV2aWNlcy5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQW55bGluZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYW55bGluZS9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFueWxpbmU6IEFueWxpbmUpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5hbnlsaW5lLnNjYW4ob3B0aW9ucylcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0FueWxpbmUnLFxyXG4gIHBsdWdpbjogJ2lvLWFueWxpbmUtY29yZG92YScsXHJcbiAgcGx1Z2luUmVmOiAnQW55bGluZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbnlsaW5lL2FueWxpbmUtb2NyLWNvcmRvdmEtbW9kdWxlJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW55bGluZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBTY2FuXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge0FueWxpbmVPcHRpb25zfSBTY2FubmluZyBvcHRpb25zXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gQ29kZSBpcyBjYXB0dXJlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzY2FuKG9wdGlvbnM6IEFueWxpbmVPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19