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
var FileEncryptionOriginal = /** @class */ (function (_super) {
    __extends(FileEncryptionOriginal, _super);
    function FileEncryptionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileEncryptionOriginal.prototype.encrypt = function (file, key) { return cordova(this, "encrypt", {}, arguments); };
    FileEncryptionOriginal.prototype.decrypt = function (file, key) { return cordova(this, "decrypt", {}, arguments); };
    FileEncryptionOriginal.pluginName = "FileEncryption";
    FileEncryptionOriginal.plugin = "cordova-safe";
    FileEncryptionOriginal.pluginRef = "cordova.plugins.disusered";
    FileEncryptionOriginal.repo = "https://github.com/disusered/cordova-safe";
    FileEncryptionOriginal.platforms = ["Android", "iOS"];
    return FileEncryptionOriginal;
}(IonicNativePlugin));
var FileEncryption = new FileEncryptionOriginal();
export { FileEncryption };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtZW5jcnlwdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE4QnBDLGtDQUFpQjs7OztJQVFuRCxnQ0FBTyxhQUFDLElBQVksRUFBRSxHQUFXO0lBV2pDLGdDQUFPLGFBQUMsSUFBWSxFQUFFLEdBQVc7Ozs7Ozt5QkFsRG5DO0VBK0JvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgRmlsZSBFbmNyeXB0aW9uXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBTaW1wbGUgZmlsZSBlbmNyeXB0aW9uIGZvciBDb3Jkb3ZhLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBGaWxlRW5jcnlwdGlvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlsZS1lbmNyeXB0aW9uL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZUVuY3J5cHRpb246IEZpbGVFbmNyeXB0aW9uKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuZmlsZUVuY3J5cHRpb24uZGVjcnlwdCgnYXNzZXRzL2pzb24vdG9wU2VjcmV0Lmpzb24nLCAnc2VjcmV0S2V5Jyk7XHJcbiAqXHJcbiAqIHRoaXMuZmlsZUVuY3J5cHRpb24uZW5jcnlwdCgnYXNzZXRzL2pzb24vdG9wU2VjcmV0Lmpzb24nLCAnc2VjcmV0S2V5Jyk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0ZpbGVFbmNyeXB0aW9uJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXNhZmUnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5kaXN1c2VyZWQnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZGlzdXNlcmVkL2NvcmRvdmEtc2FmZScsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpbGVFbmNyeXB0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIEVuY3J5cHQgYSBmaWxlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgQSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgbG9jYWwgVVJJXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBBIGtleSBmb3IgdGhlIGNyeXB0byBvcGVyYXRpb25zXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZW5jcnlwdChmaWxlOiBzdHJpbmcsIGtleTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlY3J5cHQgYSBmaWxlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgQSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgbG9jYWwgVVJJXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBBIGtleSBmb3IgdGhlIGNyeXB0byBvcGVyYXRpb25zXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZGVjcnlwdChmaWxlOiBzdHJpbmcsIGtleTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19