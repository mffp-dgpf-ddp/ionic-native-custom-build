import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var NativePageTransitions = /** @class */ (function (_super) {
    __extends(NativePageTransitions, _super);
    function NativePageTransitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativePageTransitions.prototype.slide = function (options) { return cordova(this, "slide", {}, arguments); };
    NativePageTransitions.prototype.flip = function (options) { return cordova(this, "flip", {}, arguments); };
    NativePageTransitions.prototype.fade = function (options) { return cordova(this, "fade", { "platforms": ["iOS", "Android"] }, arguments); };
    NativePageTransitions.prototype.drawer = function (options) { return cordova(this, "drawer", { "platforms": ["iOS", "Android"] }, arguments); };
    NativePageTransitions.prototype.curl = function (options) { return cordova(this, "curl", { "platforms": ["iOS"] }, arguments); };
    NativePageTransitions.prototype.executePendingTransition = function () { return cordova(this, "executePendingTransition", {}, arguments); };
    NativePageTransitions.prototype.cancelPendingTransition = function () { return cordova(this, "cancelPendingTransition", {}, arguments); };
    NativePageTransitions.pluginName = "NativePageTransitions";
    NativePageTransitions.plugin = "com.telerik.plugins.nativepagetransitions";
    NativePageTransitions.pluginRef = "plugins.nativepagetransitions";
    NativePageTransitions.repo = "https://github.com/Telerik-Verified-Plugins/NativePageTransitions";
    NativePageTransitions.platforms = ["Android", "iOS", "Windows Phone 8"];
    NativePageTransitions = __decorate([
        Injectable()
    ], NativePageTransitions);
    return NativePageTransitions;
}(IonicNativePlugin));
export { NativePageTransitions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS1wYWdlLXRyYW5zaXRpb25zL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXNFN0IseUNBQWlCOzs7O0lBTzFELHFDQUFLLGFBQUMsT0FBZ0M7SUFVdEMsb0NBQUksYUFBQyxPQUFnQztJQVVyQyxvQ0FBSSxhQUFDLE9BQWdDO0lBVXJDLHNDQUFNLGFBQUMsT0FBZ0M7SUFVdkMsb0NBQUksYUFBQyxPQUFnQztJQVNyQyx3REFBd0I7SUFTeEIsdURBQXVCOzs7Ozs7SUFqRVoscUJBQXFCO1FBRGpDLFVBQVUsRUFBRTtPQUNBLHFCQUFxQjtnQ0F2RWxDO0VBdUUyQyxpQkFBaUI7U0FBL0MscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlVHJhbnNpdGlvbk9wdGlvbnMge1xyXG4gIGRpcmVjdGlvbj86IHN0cmluZztcclxuICBkdXJhdGlvbj86IG51bWJlcjtcclxuICBzbG93ZG93bmZhY3Rvcj86IG51bWJlcjtcclxuICBzbGlkZVBpeGVscz86IG51bWJlcjtcclxuICBpb3NkZWxheT86IG51bWJlcjtcclxuICBhbmRyb2lkZGVsYXk/OiBudW1iZXI7XHJcbiAgd2lucGhvbmVkZWxheT86IG51bWJlcjtcclxuICBmaXhlZFBpeGVsc1RvcD86IG51bWJlcjtcclxuICBmaXhlZFBpeGVsc0JvdHRvbT86IG51bWJlcjtcclxuICBhY3Rpb24/OiBzdHJpbmc7XHJcbiAgb3JpZ2luPzogc3RyaW5nO1xyXG4gIGhyZWY/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBOYXRpdmUgUGFnZSBUcmFuc2l0aW9uc1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIE5hdGl2ZSBQYWdlIFRyYW5zaXRpb25zIHBsdWdpbiB1c2VzIG5hdGl2ZSBoYXJkd2FyZSBhY2NlbGVyYXRpb24gdG8gYW5pbWF0ZSB5b3VyIHRyYW5zaXRpb25zIGJldHdlZW4gdmlld3MuIFlvdSBoYXZlIGNvbXBsZXRlIGNvbnRyb2wgb3ZlciB0aGUgdHlwZSBvZiB0cmFuc2l0aW9uLCB0aGUgZHVyYXRpb24sIGFuZCBkaXJlY3Rpb24uXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IE5hdGl2ZVBhZ2VUcmFuc2l0aW9ucywgTmF0aXZlVHJhbnNpdGlvbk9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25hdGl2ZS1wYWdlLXRyYW5zaXRpb25zL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF0aXZlUGFnZVRyYW5zaXRpb25zOiBOYXRpdmVQYWdlVHJhbnNpdGlvbnMpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogLy8gZXhhbXBsZSBvZiBhZGRpbmcgYSB0cmFuc2l0aW9uIHdoZW4gYSBwYWdlL21vZGFsIGNsb3Nlc1xyXG4gKiBpb25WaWV3V2lsbExlYXZlKCkge1xyXG4gKlxyXG4gKiAgbGV0IG9wdGlvbnM6IE5hdGl2ZVRyYW5zaXRpb25PcHRpb25zID0ge1xyXG4gKiAgICAgZGlyZWN0aW9uOiAndXAnLFxyXG4gKiAgICAgZHVyYXRpb246IDUwMCxcclxuICogICAgIHNsb3dkb3duZmFjdG9yOiAzLFxyXG4gKiAgICAgc2xpZGVQaXhlbHM6IDIwLFxyXG4gKiAgICAgaW9zZGVsYXk6IDEwMCxcclxuICogICAgIGFuZHJvaWRkZWxheTogMTUwLFxyXG4gKiAgICAgZml4ZWRQaXhlbHNUb3A6IDAsXHJcbiAqICAgICBmaXhlZFBpeGVsc0JvdHRvbTogNjBcclxuICogICAgfVxyXG4gKlxyXG4gKiAgdGhpcy5uYXRpdmVQYWdlVHJhbnNpdGlvbnMuc2xpZGUob3B0aW9ucylcclxuICogICAgLnRoZW4ob25TdWNjZXNzKVxyXG4gKiAgICAuY2F0Y2gob25FcnJvcik7XHJcbiAqXHJcbiAqIH1cclxuICpcclxuICpcclxuICogLy8gZXhhbXBsZSBvZiBhZGRpbmcgYSB0cmFuc2l0aW9uIHdoZW4gcHVzaGluZyBhIG5ldyBwYWdlXHJcbiAqIG9wZW5QYWdlKHBhZ2U6IGFueSkge1xyXG4gKlxyXG4gKiAgIHRoaXMubmF0aXZlUGFnZVRyYW5zaXRpb25zLnNsaWRlKG9wdGlvbnMpO1xyXG4gKiAgIHRoaXMubmF2Q3RybC5wdXNoKHBhZ2UpO1xyXG4gKlxyXG4gKiB9XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ05hdGl2ZVBhZ2VUcmFuc2l0aW9ucycsXHJcbiAgcGx1Z2luOiAnY29tLnRlbGVyaWsucGx1Z2lucy5uYXRpdmVwYWdldHJhbnNpdGlvbnMnLFxyXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMubmF0aXZlcGFnZXRyYW5zaXRpb25zJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1RlbGVyaWstVmVyaWZpZWQtUGx1Z2lucy9OYXRpdmVQYWdlVHJhbnNpdGlvbnMnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmF0aXZlUGFnZVRyYW5zaXRpb25zIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFBlcmZvcm0gYSBzbGlkZSBhbmltYXRpb25cclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7TmF0aXZlVHJhbnNpdGlvbk9wdGlvbnN9IE9wdGlvbnMgZm9yIHRoZSB0cmFuc2l0aW9uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2xpZGUob3B0aW9uczogTmF0aXZlVHJhbnNpdGlvbk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGVyZm9ybSBhIGZsaXAgYW5pbWF0aW9uXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge05hdGl2ZVRyYW5zaXRpb25PcHRpb25zfSBPcHRpb25zIGZvciB0aGUgdHJhbnNpdGlvblxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGZsaXAob3B0aW9uczogTmF0aXZlVHJhbnNpdGlvbk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGVyZm9ybSBhIGZhZGUgYW5pbWF0aW9uXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge05hdGl2ZVRyYW5zaXRpb25PcHRpb25zfSBPcHRpb25zIGZvciB0aGUgdHJhbnNpdGlvblxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSB9KVxyXG4gIGZhZGUob3B0aW9uczogTmF0aXZlVHJhbnNpdGlvbk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGVyZm9ybSBhIHNsaWRlIGFuaW1hdGlvblxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtOYXRpdmVUcmFuc2l0aW9uT3B0aW9uc30gT3B0aW9ucyBmb3IgdGhlIHRyYW5zaXRpb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10gfSlcclxuICBkcmF3ZXIob3B0aW9uczogTmF0aXZlVHJhbnNpdGlvbk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGVyZm9ybSBhIHNsaWRlIGFuaW1hdGlvblxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtOYXRpdmVUcmFuc2l0aW9uT3B0aW9uc30gT3B0aW9ucyBmb3IgdGhlIHRyYW5zaXRpb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXHJcbiAgY3VybChvcHRpb25zOiBOYXRpdmVUcmFuc2l0aW9uT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFeGVjdXRlIHBlbmRpbmcgdHJhbnNpdGlvblxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGV4ZWN1dGVQZW5kaW5nVHJhbnNpdGlvbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FuY2VsIHBlbmRpbmcgdHJhbnNpdGlvblxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNhbmNlbFBlbmRpbmdUcmFuc2l0aW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==