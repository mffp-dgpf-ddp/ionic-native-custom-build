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
var ChooserOriginal = /** @class */ (function (_super) {
    __extends(ChooserOriginal, _super);
    function ChooserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChooserOriginal.prototype.getFile = function (accept) { return cordova(this, "getFile", {}, arguments); };
    ChooserOriginal.prototype.getFileMetadata = function (accept) { return cordova(this, "getFileMetadata", {}, arguments); };
    ChooserOriginal.pluginName = "Chooser";
    ChooserOriginal.plugin = "cordova-plugin-chooser";
    ChooserOriginal.pluginRef = "chooser";
    ChooserOriginal.repo = "https://github.com/cyph/cordova-plugin-chooser";
    ChooserOriginal.platforms = ["Android", "iOS"];
    return ChooserOriginal;
}(IonicNativePlugin));
var Chooser = new ChooserOriginal();
export { Chooser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Nob29zZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBc0QzQywyQkFBaUI7Ozs7SUFRNUMseUJBQU8sYUFBQyxNQUFlO0lBV3ZCLGlDQUFlLGFBQUMsTUFBZTs7Ozs7O2tCQTFFakM7RUF1RDZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hvb3NlclJlc3VsdCB7XHJcbiAgZGF0YT86IFVpbnQ4QXJyYXk7XHJcbiAgZGF0YVVSST86IHN0cmluZztcclxuICBtZWRpYVR5cGU6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdXJpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBDaG9vc2VyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBGaWxlIGNob29zZXIgcGx1Z2luIGZvciBDb3Jkb3ZhLlxyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIG11c3QgYmUgYWRkZWQgdG8gY29uZmlnLnhtbCB0byBwcmV2ZW50IGNyYXNoaW5nIHdoZW4gc2VsZWN0aW5nIGxhcmdlIGZpbGVzIG9uIEFuZHJvaWQ6XHJcbiAqIGBgYHhtbFxyXG4gKiA8cGxhdGZvcm0gbmFtZT1cImFuZHJvaWRcIj5cclxuICogIDxlZGl0LWNvbmZpZ1xyXG4gKiAgICBmaWxlPVwiYXBwL3NyYy9tYWluL0FuZHJvaWRNYW5pZmVzdC54bWxcIlxyXG4gKiAgICBtb2RlPVwibWVyZ2VcIlxyXG4gKiAgICB0YXJnZXQ9XCIvbWFuaWZlc3QvYXBwbGljYXRpb25cIj5cclxuICogICAgPGFwcGxpY2F0aW9uIGFuZHJvaWQ6bGFyZ2VIZWFwPVwidHJ1ZVwiIC8+XHJcbiAqICA8L2VkaXQtY29uZmlnPlxyXG4gKiA8L3BsYXRmb3JtPlxyXG4gKiBgYGBcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQ2hvb3NlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2hvb3Nlci9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNob29zZXI6IENob29zZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5jaG9vc2VyLmdldEZpbGUoKVxyXG4gKiAgIC50aGVuKGZpbGUgPT4gY29uc29sZS5sb2coZmlsZSA/IGZpbGUubmFtZSA6ICdjYW5jZWxlZCcpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICpcclxuICogQGludGVyZmFjZXNcclxuICogQ2hvb3NlclJlc3VsdFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0Nob29zZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNob29zZXInLFxyXG4gIHBsdWdpblJlZjogJ2Nob29zZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY3lwaC9jb3Jkb3ZhLXBsdWdpbi1jaG9vc2VyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2hvb3NlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBEaXNwbGF5cyBuYXRpdmUgcHJvbXB0IGZvciB1c2VyIHRvIHNlbGVjdCBhIGZpbGUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFthY2NlcHRdIE9wdGlvbmFsIE1JTUUgdHlwZSBmaWx0ZXIgKGUuZy4gJ2ltYWdlL2dpZix2aWRlby8qJykuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBQcm9taXNlIGNvbnRhaW5pbmcgc2VsZWN0ZWQgZmlsZSdzIHJhdyBiaW5hcnkgZGF0YSxcclxuICAgKiBiYXNlNjQtZW5jb2RlZCBkYXRhOiBVUkksIE1JTUUgdHlwZSwgZGlzcGxheSBuYW1lLCBhbmQgb3JpZ2luYWwgVVJJLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRGaWxlKGFjY2VwdD86IHN0cmluZyk6IFByb21pc2U8Q2hvb3NlclJlc3VsdCB8IHVuZGVmaW5lZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBEaXNwbGF5cyBuYXRpdmUgcHJvbXB0IGZvciB1c2VyIHRvIHNlbGVjdCBhIGZpbGUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFthY2NlcHRdIE9wdGlvbmFsIE1JTUUgdHlwZSBmaWx0ZXIgKGUuZy4gJ2ltYWdlL2dpZix2aWRlby8qJykuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUHJvbWlzZSBjb250YWluaW5nIHNlbGVjdGVkIGZpbGUncyBNSU1FIHR5cGUsIGRpc3BsYXkgbmFtZSwgYW5kIG9yaWdpbmFsIFVSSS5cclxuICAgKiBJZiB1c2VyIGNhbmNlbHMsIHByb21pc2Ugd2lsbCBiZSByZXNvbHZlZCBhcyB1bmRlZmluZWQuXHJcbiAgICogSWYgZXJyb3Igb2NjdXJzLCBwcm9taXNlIHdpbGwgYmUgcmVqZWN0ZWQuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEZpbGVNZXRhZGF0YShhY2NlcHQ/OiBzdHJpbmcpOiBQcm9taXNlPENob29zZXJSZXN1bHQgfCB1bmRlZmluZWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19