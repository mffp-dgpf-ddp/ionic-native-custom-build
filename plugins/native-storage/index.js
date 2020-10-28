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
var NativeStorageOriginal = /** @class */ (function (_super) {
    __extends(NativeStorageOriginal, _super);
    function NativeStorageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeStorageOriginal.prototype.initWithSuiteName = function (reference) { return cordova(this, "initWithSuiteName", { "platforms": ["iOS"] }, arguments); };
    NativeStorageOriginal.prototype.setItem = function (reference, value) { return cordova(this, "setItem", {}, arguments); };
    NativeStorageOriginal.prototype.getItem = function (reference) { return cordova(this, "getItem", {}, arguments); };
    NativeStorageOriginal.prototype.keys = function () { return cordova(this, "keys", {}, arguments); };
    NativeStorageOriginal.prototype.remove = function (reference) { return cordova(this, "remove", {}, arguments); };
    NativeStorageOriginal.prototype.clear = function () { return cordova(this, "clear", {}, arguments); };
    NativeStorageOriginal.pluginName = "NativeStorage";
    NativeStorageOriginal.plugin = "cordova-plugin-nativestorage";
    NativeStorageOriginal.pluginRef = "NativeStorage";
    NativeStorageOriginal.repo = "https://github.com/TheCocoaProject/cordova-plugin-nativestorage";
    NativeStorageOriginal.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    return NativeStorageOriginal;
}(IonicNativePlugin));
var NativeStorage = new NativeStorageOriginal();
export { NativeStorage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS1zdG9yYWdlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW9DckMsaUNBQWlCOzs7O0lBU2xELHlDQUFpQixhQUFDLFNBQWlCO0lBV25DLCtCQUFPLGFBQUMsU0FBaUIsRUFBRSxLQUFVO0lBVXJDLCtCQUFPLGFBQUMsU0FBaUI7SUFTekIsNEJBQUk7SUFVSiw4QkFBTSxhQUFDLFNBQWlCO0lBU3hCLDZCQUFLOzs7Ozs7d0JBL0ZQO0VBcUNtQyxpQkFBaUI7U0FBdkMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgTmF0aXZlIFN0b3JhZ2VcclxuICogQHByZW1pZXIgbmF0aXZlc3RvcmFnZVxyXG4gKiBAZGVzY3JpcHRpb24gTmF0aXZlIHN0b3JhZ2Ugb2YgdmFyaWFibGVzIGluIEFuZHJvaWQgYW5kIGlPU1xyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBOYXRpdmVTdG9yYWdlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uYXRpdmUtc3RvcmFnZS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdGl2ZVN0b3JhZ2U6IE5hdGl2ZVN0b3JhZ2UpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5uYXRpdmVTdG9yYWdlLnNldEl0ZW0oJ215aXRlbScsIHtwcm9wZXJ0eTogJ3ZhbHVlJywgYW5vdGhlclByb3BlcnR5OiAnYW5vdGhlclZhbHVlJ30pXHJcbiAqICAgLnRoZW4oXHJcbiAqICAgICAoKSA9PiBjb25zb2xlLmxvZygnU3RvcmVkIGl0ZW0hJyksXHJcbiAqICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBzdG9yaW5nIGl0ZW0nLCBlcnJvcilcclxuICogICApO1xyXG4gKlxyXG4gKiB0aGlzLm5hdGl2ZVN0b3JhZ2UuZ2V0SXRlbSgnbXlpdGVtJylcclxuICogICAudGhlbihcclxuICogICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAqICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gKiAgICk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ05hdGl2ZVN0b3JhZ2UnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5hdGl2ZXN0b3JhZ2UnLFxyXG4gIHBsdWdpblJlZjogJ05hdGl2ZVN0b3JhZ2UnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVGhlQ29jb2FQcm9qZWN0L2NvcmRvdmEtcGx1Z2luLW5hdGl2ZXN0b3JhZ2UnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ21hY09TJywgJ1dpbmRvd3MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmF0aXZlU3RvcmFnZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBJbml0aWFsaXNlcyBzaGFyZWQgc3RvcmFnZSB3aXRoIHRoZSBzdWl0ZSBuYW1lIHdoZW4gdXNpbmcgYXBwIGdyb3VwcyBpbiBpT1NcclxuICAgKiBAcGFyYW0gcmVmZXJlbmNlIHtzdHJpbmd9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxyXG4gIH0pXHJcbiAgaW5pdFdpdGhTdWl0ZU5hbWUocmVmZXJlbmNlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3JlcyBhIHZhbHVlXHJcbiAgICogQHBhcmFtIHJlZmVyZW5jZSB7c3RyaW5nfVxyXG4gICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldEl0ZW0ocmVmZXJlbmNlOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBhIHN0b3JlZCBpdGVtXHJcbiAgICogQHBhcmFtIHJlZmVyZW5jZSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEl0ZW0ocmVmZXJlbmNlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmluZyBhbGwga2V5c1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGtleXMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYSBzaW5nbGUgc3RvcmVkIGl0ZW1cclxuICAgKiBAcGFyYW0gcmVmZXJlbmNlIHtzdHJpbmd9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVtb3ZlKHJlZmVyZW5jZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYWxsIHN0b3JlZCB2YWx1ZXMuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2xlYXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19