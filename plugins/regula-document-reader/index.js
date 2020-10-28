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
var RegulaDocumentReaderOriginal = /** @class */ (function (_super) {
    __extends(RegulaDocumentReaderOriginal, _super);
    function RegulaDocumentReaderOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegulaDocumentReaderOriginal.prototype.initReader = function (license) { return cordova(this, "initReader", {}, arguments); };
    RegulaDocumentReaderOriginal.prototype.scanDocument = function () { return cordova(this, "scanDocument", {}, arguments); };
    RegulaDocumentReaderOriginal.pluginName = "Regula Document Reader";
    RegulaDocumentReaderOriginal.plugin = "cordova-plugin-documentreader";
    RegulaDocumentReaderOriginal.pluginRef = "DocumentReader";
    RegulaDocumentReaderOriginal.repo = "https://github.com/regulaforensics/cordova-plugin-documentreader.git";
    RegulaDocumentReaderOriginal.platforms = ["iOS", "Android"];
    RegulaDocumentReaderOriginal.install = "ionic plugin add cordova-plugin-documentreader --variable CAMERA_USAGE_DESCRIPTION=\"To take photo\"";
    return RegulaDocumentReaderOriginal;
}(IonicNativePlugin));
var RegulaDocumentReader = new RegulaDocumentReaderOriginal();
export { RegulaDocumentReader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3JlZ3VsYS1kb2N1bWVudC1yZWFkZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNkI5Qix3Q0FBaUI7Ozs7SUFNekQseUNBQVUsYUFBQyxPQUFZO0lBT3ZCLDJDQUFZOzs7Ozs7OytCQTNDZDtFQThCMEMsaUJBQWlCO1NBQTlDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQHBhaWRcclxuICogQGJldGFcclxuICogQG5hbWUgUmVndWxhIERvY3VtZW50IFJlYWRlclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUGx1Z2luIGZvciByZWFkaW5nIGFuZCB2YWxpZGF0aW9uIG9mIGlkZW50aWZpY2F0aW9uIGRvY3VtZW50cy5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgUmVndWxhRG9jdW1lbnRSZWFkZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3JlZ3VsYS1kb2N1bWVudC1yZWFkZXIvbmd4JztcclxuICpcclxuICogbGV0IGxpY2Vuc2U7IC8vIHJlYWQgcmVndWxhLmxpY2Vuc2UgZmlsZVxyXG4gKiBSZWd1bGFEb2N1bWVudFJlYWRlci5pbml0UmVhZGVyKGxpY2Vuc2UpOyAvLyBpbml0aWFsaXplIHJlYWRlclxyXG4gKiBSZWd1bGFEb2N1bWVudFJlYWRlci5zY2FuRG9jdW1lbnQoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICogXHRcdC8vIHJlYWQgcmVzdWx0XHJcbiAqIH0pXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1JlZ3VsYSBEb2N1bWVudCBSZWFkZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50cmVhZGVyJyxcclxuICBwbHVnaW5SZWY6ICdEb2N1bWVudFJlYWRlcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yZWd1bGFmb3JlbnNpY3MvY29yZG92YS1wbHVnaW4tZG9jdW1lbnRyZWFkZXIuZ2l0JyxcclxuICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcclxuICBpbnN0YWxsOiAnaW9uaWMgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1kb2N1bWVudHJlYWRlciAtLXZhcmlhYmxlIENBTUVSQV9VU0FHRV9ERVNDUklQVElPTj1cIlRvIHRha2UgcGhvdG9cIicsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlZ3VsYURvY3VtZW50UmVhZGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgdGhlIHNjYW5uZXJcclxuICAgKiBAcGFyYW0gbGljZW5zZSB7YW55fSBMaWNlbnNlIGRhdGFcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaW5pdFJlYWRlcihsaWNlbnNlOiBhbnkpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJ1biB0aGUgc2Nhbm5lclxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nW10+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gcmVzdWx0cyB3YXMgZ290LCBhbmQgZmFpbHMgd2hlbiBub3RcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2NhbkRvY3VtZW50KCk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19