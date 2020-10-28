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
var ClipboardOriginal = /** @class */ (function (_super) {
    __extends(ClipboardOriginal, _super);
    function ClipboardOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClipboardOriginal.prototype.copy = function (text) { return cordova(this, "copy", {}, arguments); };
    ClipboardOriginal.prototype.paste = function () { return cordova(this, "paste", {}, arguments); };
    ClipboardOriginal.prototype.clear = function () { return cordova(this, "clear", {}, arguments); };
    ClipboardOriginal.pluginName = "Clipboard";
    ClipboardOriginal.plugin = "cordova-clipboard";
    ClipboardOriginal.pluginRef = "cordova.plugins.clipboard";
    ClipboardOriginal.repo = "https://github.com/ihadeed/cordova-clipboard";
    ClipboardOriginal.platforms = ["Android", "iOS", "Windows Phone 8"];
    return ClipboardOriginal;
}(IonicNativePlugin));
var Clipboard = new ClipboardOriginal();
export { Clipboard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NsaXBib2FyZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF1Q3pDLDZCQUFpQjs7OztJQU85Qyx3QkFBSSxhQUFDLElBQVk7SUFTakIseUJBQUs7SUFTTCx5QkFBSzs7Ozs7O29CQWpFUDtFQXdDK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG4vKipcclxuICogQG5hbWUgQ2xpcGJvYXJkXHJcbiAqIEBwcmVtaWVyIGNsaXBib2FyZFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2xpcGJvYXJkIG1hbmFnZW1lbnQgcGx1Z2luIGZvciBDb3Jkb3ZhIHRoYXQgc3VwcG9ydHMgaU9TLCBBbmRyb2lkLCBhbmQgV2luZG93cyBQaG9uZSA4LlxyXG4gKlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBDbGlwYm9hcmQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NsaXBib2FyZC9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsaXBib2FyZDogQ2xpcGJvYXJkKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuY2xpcGJvYXJkLmNvcHkoJ0hlbGxvIHdvcmxkJyk7XHJcbiAqXHJcbiAqIHRoaXMuY2xpcGJvYXJkLnBhc3RlKCkudGhlbihcclxuICogICAgKHJlc29sdmU6IHN0cmluZykgPT4ge1xyXG4gKiAgICAgICBhbGVydChyZXNvbHZlKTtcclxuICogICAgIH0sXHJcbiAqICAgICAocmVqZWN0OiBzdHJpbmcpID0+IHtcclxuICogICAgICAgYWxlcnQoJ0Vycm9yOiAnICsgcmVqZWN0KTtcclxuICogICAgIH1cclxuICogICApO1xyXG4gKlxyXG4gKiB0aGlzLmNsaXBib2FyZC5jbGVhcigpO1xyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdDbGlwYm9hcmQnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtY2xpcGJvYXJkJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuY2xpcGJvYXJkJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2loYWRlZWQvY29yZG92YS1jbGlwYm9hcmQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENvcGllcyB0aGUgZ2l2ZW4gdGV4dFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRleHQgdGhhdCBnZXRzIGNvcGllZCBvbiB0aGUgc3lzdGVtIGNsaXBib2FyZFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIGFmdGVyIHRoZSB0ZXh0IGhhcyBiZWVuIGNvcGllZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjb3B5KHRleHQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQYXN0ZXMgdGhlIHRleHQgc3RvcmVkIGluIGNsaXBib2FyZFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIGFmdGVyIHRoZSB0ZXh0IGhhcyBiZWVuIHBhc3RlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBwYXN0ZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgdGhlIHRleHQgc3RvcmVkIGluIGNsaXBib2FyZFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIGFmdGVyIHRoZSB0ZXh0IGhhcyBiZWVuIGNsZWFuZWRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2xlYXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19