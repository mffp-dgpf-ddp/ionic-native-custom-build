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
var ZipOriginal = /** @class */ (function (_super) {
    __extends(ZipOriginal, _super);
    function ZipOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZipOriginal.prototype.unzip = function (sourceZip, destUrl, onProgress) { return cordova(this, "unzip", { "successIndex": 2, "errorIndex": 4 }, arguments); };
    ZipOriginal.pluginName = "Zip";
    ZipOriginal.plugin = "cordova-plugin-zip";
    ZipOriginal.pluginRef = "zip";
    ZipOriginal.repo = "https://github.com/MobileChromeApps/cordova-plugin-zip";
    ZipOriginal.platforms = ["Android", "iOS"];
    return ZipOriginal;
}(IonicNativePlugin));
var Zip = new ZipOriginal();
export { Zip };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3ppcC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQi9DLHVCQUFpQjs7OztJQVl4QyxtQkFBSyxhQUFDLFNBQWlCLEVBQUUsT0FBZSxFQUFFLFVBQXFCOzs7Ozs7Y0E1Q2pFO0VBZ0N5QixpQkFBaUI7U0FBN0IsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgWmlwXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIENvcmRvdmEgcGx1Z2luIHRvIHVuemlwIGZpbGVzIGluIEFuZHJvaWQgYW5kIGlPUy5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgWmlwIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS96aXAvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB6aXA6IFppcCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLnppcC51bnppcCgncGF0aC90by9zb3VyY2UuemlwJywgJ3BhdGgvdG8vZGVzdCcsIChwcm9ncmVzcykgPT4gY29uc29sZS5sb2coJ1VuemlwcGluZywgJyArIE1hdGgucm91bmQoKHByb2dyZXNzLmxvYWRlZCAvIHByb2dyZXNzLnRvdGFsKSAqIDEwMCkgKyAnJScpKVxyXG4gKiAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gKiAgICBpZihyZXN1bHQgPT09IDApIGNvbnNvbGUubG9nKCdTVUNDRVNTJyk7XHJcbiAqICAgIGlmKHJlc3VsdCA9PT0gLTEpIGNvbnNvbGUubG9nKCdGQUlMRUQnKTtcclxuICogIH0pO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdaaXAnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXppcCcsXHJcbiAgcGx1Z2luUmVmOiAnemlwJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01vYmlsZUNocm9tZUFwcHMvY29yZG92YS1wbHVnaW4temlwJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgWmlwIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIEV4dHJhY3RzIGZpbGVzIGZyb20gYSBaSVAgYXJjaGl2ZVxyXG4gICAqIEBwYXJhbSBzb3VyY2VaaXAge3N0cmluZ30gU291cmNlIFpJUCBmaWxlXHJcbiAgICogQHBhcmFtIGRlc3RVcmwge3N0cmluZ30gRGVzdGluYXRpb24gZm9sZGVyXHJcbiAgICogQHBhcmFtIG9uUHJvZ3Jlc3Mge0Z1bmN0aW9ufSBvcHRpb25hbCBjYWxsYmFjayB0byBiZSBjYWxsZWQgb24gcHJvZ3Jlc3MgdXBkYXRlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgbnVtYmVyLiAwIGlzIHN1Y2Nlc3MsIC0xIGlzIGVycm9yXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAyLFxyXG4gICAgZXJyb3JJbmRleDogNCxcclxuICB9KVxyXG4gIHVuemlwKHNvdXJjZVppcDogc3RyaW5nLCBkZXN0VXJsOiBzdHJpbmcsIG9uUHJvZ3Jlc3M/OiBGdW5jdGlvbik6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==