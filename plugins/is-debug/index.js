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
var IsDebugOriginal = /** @class */ (function (_super) {
    __extends(IsDebugOriginal, _super);
    function IsDebugOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IsDebugOriginal.prototype.getIsDebug = function () { return cordova(this, "getIsDebug", {}, arguments); };
    IsDebugOriginal.pluginName = "IsDebug";
    IsDebugOriginal.plugin = "cordova-plugin-is-debug";
    IsDebugOriginal.pluginRef = "cordova.plugins.IsDebug";
    IsDebugOriginal.repo = "https://github.com/mattlewis92/cordova-plugin-is-debug";
    IsDebugOriginal.platforms = ["Android", "iOS"];
    return IsDebugOriginal;
}(IonicNativePlugin));
var IsDebug = new IsDebugOriginal();
export { IsDebug };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lzLWRlYnVnL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQThCM0MsMkJBQWlCOzs7O0lBTTVDLDRCQUFVOzs7Ozs7a0JBckNaO0VBK0I2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgSXMgRGVidWdcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIERldGVjdCBpZiB0aGUgYXBwIGlzIHJ1bm5pbmcgaW4gZGVidWcgbW9kZSBvciBub3QuXHJcbiAqIERlYnVnIG1vZGUgaXMgd2hlbiB0aGUgYXBwIGlzIGJ1aWx0IGFuZCBpbnN0YWxsZWQgbG9jYWxseSB2aWEgeGNvZGUgLyBlY2xpcHNlIC8gdGhlIGNvcmRvdmEgY2xpIGV0YywgY29tcGFyZWQgdG8gcmVsZWFzZSBtb2RlIHdoZW4gdGhlIGFwcCB3YXMgZG93bmxvYWRlZCBmcm9tIHRoZSBhcHAgLyBwbGF5IHN0b3JlIHZpYSBhbiBlbmQgdXNlci5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgSXNEZWJ1ZyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaXMtZGVidWcvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpc0RlYnVnOiBJc0RlYnVnKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuaXNEZWJ1Zy5nZXRJc0RlYnVnKClcclxuICogICAudGhlbihpc0RlYnVnID0+IGNvbnNvbGUubG9nKCdJcyBkZWJ1ZzonLCBpc0RlYnVnKSlcclxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0lzRGVidWcnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWlzLWRlYnVnJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuSXNEZWJ1ZycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXR0bGV3aXM5Mi9jb3Jkb3ZhLXBsdWdpbi1pcy1kZWJ1ZycsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIElzRGVidWcgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIGlmIGFuIGFwcCB3YXMgaW5zdGFsbGVkIHZpYSB4Y29kZSAvIGVjbGlwc2UgLyB0aGUgaW9uaWMgQ0xJIGV0Y1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdHJ1ZSBpZiB0aGUgYXBwIHdhcyBpbnN0YWxsZWQgdmlhIHhjb2RlIC8gZWNsaXBzZSAvIHRoZSBpb25pYyBDTEkgZXRjLiBJdCB3aWxsIHJlc29sdmUgdG8gZmFsc2UgaWYgdGhlIGFwcCB3YXMgZG93bmxvYWRlZCBmcm9tIHRoZSBhcHAgLyBwbGF5IHN0b3JlIGJ5IHRoZSBlbmQgdXNlci5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0SXNEZWJ1ZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19