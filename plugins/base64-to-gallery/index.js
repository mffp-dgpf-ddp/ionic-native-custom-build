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
var Base64ToGalleryOriginal = /** @class */ (function (_super) {
    __extends(Base64ToGalleryOriginal, _super);
    function Base64ToGalleryOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Base64ToGalleryOriginal.prototype.base64ToGallery = function (data, options) { return cordova(this, "base64ToGallery", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    Base64ToGalleryOriginal.pluginName = "Base64ToGallery";
    Base64ToGalleryOriginal.plugin = "cordova-base64-to-gallery";
    Base64ToGalleryOriginal.pluginRef = "cordova";
    Base64ToGalleryOriginal.repo = "https://github.com/Nexxa/cordova-base64-to-gallery";
    Base64ToGalleryOriginal.platforms = ["Android", "iOS", "Windows Phone 8"];
    return Base64ToGalleryOriginal;
}(IonicNativePlugin));
var Base64ToGallery = new Base64ToGalleryOriginal();
export { Base64ToGallery };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jhc2U2NC10by1nYWxsZXJ5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXlDbkMsbUNBQWlCOzs7O0lBV3BELHlDQUFlLGFBQUMsSUFBWSxFQUFFLE9BQWdDOzs7Ozs7MEJBckRoRTtFQTBDcUMsaUJBQWlCO1NBQXpDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNlNjRUb0dhbGxlcnlPcHRpb25zIHtcclxuICAvKiogU2F2ZWQgZmlsZSBuYW1lIHByZWZpeCAqL1xyXG4gIHByZWZpeDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIE9uIEFuZHJvaWQgcnVucyBNZWRpYSBTY2FubmVyIGFmdGVyIGZpbGUgY3JlYXRpb24uXHJcbiAgICogT24gaU9TIGlmIHRydWUgdGhlIGZpbGUgd2lsbCBiZSBhZGRlZCB0byBjYW1lcmEgcm9sbCwgb3RoZXJ3aXNlIHdpbGwgYmUgc2F2ZWQgdG8gYSBsaWJyYXJ5IGZvbGRlci5cclxuICAgKi9cclxuICBtZWRpYVNjYW5uZXI6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBCYXNlNjQgVG8gR2FsbGVyeVxyXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBzYXZlIGJhc2U2NCBkYXRhIGFzIGEgcG5nIGltYWdlIGludG8gdGhlIGRldmljZVxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBCYXNlNjRUb0dhbGxlcnkgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Jhc2U2NC10by1nYWxsZXJ5L25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFzZTY0VG9HYWxsZXJ5OiBCYXNlNjRUb0dhbGxlcnkpIHsgfVxyXG4gKlxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5iYXNlNjRUb0dhbGxlcnkuYmFzZTY0VG9HYWxsZXJ5KGJhc2U2NERhdGEsIHsgcHJlZml4OiAnX2ltZycgfSkudGhlbihcclxuICogICByZXMgPT4gY29uc29sZS5sb2coJ1NhdmVkIGltYWdlIHRvIGdhbGxlcnkgJywgcmVzKSxcclxuICogICBlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yIHNhdmluZyBpbWFnZSB0byBnYWxsZXJ5ICcsIGVycilcclxuICogKTtcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIEJhc2U2NFRvR2FsbGVyeU9wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdCYXNlNjRUb0dhbGxlcnknLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtYmFzZTY0LXRvLWdhbGxlcnknLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTmV4eGEvY29yZG92YS1iYXNlNjQtdG8tZ2FsbGVyeScsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUgOCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYXNlNjRUb0dhbGxlcnkgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgYSBiYXNlNjQgc3RyaW5nIHRvIGFuIGltYWdlIGZpbGUgaW4gdGhlIGRldmljZSBnYWxsZXJ5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgVGhlIGFjdHVhbCBiYXNlNjQgc3RyaW5nIHRoYXQgeW91IHdhbnQgdG8gc2F2ZVxyXG4gICAqIEBwYXJhbSB7YW55fSBbb3B0aW9uc10gQW4gb2JqZWN0IHdpdGggcHJvcGVydGllc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgaW1hZ2UgaXMgc2F2ZWQuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAyLFxyXG4gICAgZXJyb3JJbmRleDogMyxcclxuICB9KVxyXG4gIGJhc2U2NFRvR2FsbGVyeShkYXRhOiBzdHJpbmcsIG9wdGlvbnM/OiBCYXNlNjRUb0dhbGxlcnlPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19