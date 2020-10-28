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
var ZBarOriginal = /** @class */ (function (_super) {
    __extends(ZBarOriginal, _super);
    function ZBarOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZBarOriginal.prototype.scan = function (options) { return cordova(this, "scan", {}, arguments); };
    ZBarOriginal.pluginName = "ZBar";
    ZBarOriginal.plugin = "cordova-plugin-cszbar";
    ZBarOriginal.pluginRef = "cloudSky.zBar";
    ZBarOriginal.repo = "https://github.com/tjwoon/csZBar";
    ZBarOriginal.platforms = ["Android", "iOS"];
    return ZBarOriginal;
}(IonicNativePlugin));
var ZBar = new ZBarOriginal();
export { ZBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3piYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNkU5Qyx3QkFBaUI7Ozs7SUFPekMsbUJBQUksYUFBQyxPQUFvQjs7Ozs7O2VBckYzQjtFQThFMEIsaUJBQWlCO1NBQTlCLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBaQmFyT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB0aXRsZSB0ZXh0IChBbmRyb2lkIG9ubHkpLlxyXG4gICAqIERlZmF1bHQ6IFwiU2NhbiBRUiBDb2RlXCJcclxuICAgKi9cclxuICB0ZXh0X3RpdGxlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGluc3RydWN0aW9uIHRleHQgKEFuZHJvaWQgb25seSkuXHJcbiAgICogRGVmYXVsdDogXCJQbGVhc2UgcG9pbnQgeW91ciBjYW1lcmEgYXQgdGhlIFFSIGNvZGUuXCJcclxuICAgKi9cclxuICB0ZXh0X2luc3RydWN0aW9ucz86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQSBzdHJpbmcgZGVmaW5pbmcgdGhlIGFjdGl2ZSBjYW1lcmEgd2hlbiBvcGVuaW5nIHRoZSBzY2FubmVyLlxyXG4gICAqIFBvc3NpYmxlIHZhbHVlczogXCJmcm9udFwiLCBcImJhY2tcIlxyXG4gICAqIERlZmF1bHQ6IFwiYmFja1wiXHJcbiAgICovXHJcbiAgY2FtZXJhPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBIHN0cmluZyBkZWZpbmluZyB0aGUgc3RhdGUgb2YgdGhlIGZsYXNoLlxyXG4gICAqIFBvc3NpYmxlIHZhbHVlczogXCJvblwiLCBcIm9mZlwiLCBcImF1dG9cIlxyXG4gICAqIERlZmF1bHQ6IFwiYXV0b1wiXHJcbiAgICovXHJcbiAgZmxhc2g/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgYm9vbGVhbiB0byBzaG93IG9yIGhpZGUgYSBsaW5lIGluIHRoZSBjZW50ZXIgb2YgdGhlIHNjYW5uZXIuXHJcbiAgICogRGVmYXVsdDogdHJ1ZVxyXG4gICAqL1xyXG4gIGRyYXdTaWdodD86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBaQmFyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGUgWkJhciBTY2FubmVyIFBsdWdpbiBhbGxvd3MgeW91IHRvIHNjYW4gMmQgYmFyY29kZXMuXHJcbiAqXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tY3N6YmFyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW3pCYXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS90andvb24vY3NaQmFyKS5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgWkJhciwgWkJhck9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3piYXIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB6YmFyOiBaQmFyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGxldCBvcHRpb25zOiBaQmFyT3B0aW9ucyA9IHtcclxuICogICAgICAgZmxhc2g6ICdvZmYnLFxyXG4gKiAgICAgICBkcmF3U2lnaHQ6IGZhbHNlXHJcbiAqICAgICB9XHJcbiAqXHJcbiAqIHRoaXMuemJhci5zY2FuKG9wdGlvbnMpXHJcbiAqICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAqICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7IC8vIFNjYW5uZWQgY29kZVxyXG4gKiAgICB9KVxyXG4gKiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gKiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7IC8vIEVycm9yIG1lc3NhZ2VcclxuICogICAgfSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBaQmFyT3B0aW9uc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1pCYXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNzemJhcicsXHJcbiAgcGx1Z2luUmVmOiAnY2xvdWRTa3kuekJhcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90andvb24vY3NaQmFyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgWkJhciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBPcGVuIHRoZSBzY2FubmVyXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgeyBaQmFyT3B0aW9ucyB9IFNjYW4gb3B0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgc2Nhbm5lZCBzdHJpbmcsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2NhbihvcHRpb25zOiBaQmFyT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==