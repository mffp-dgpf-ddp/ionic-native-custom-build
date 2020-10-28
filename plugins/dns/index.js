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
var DNSOriginal = /** @class */ (function (_super) {
    __extends(DNSOriginal, _super);
    function DNSOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DNSOriginal.prototype.resolve = function (hostname) { return cordova(this, "resolve", {}, arguments); };
    DNSOriginal.pluginName = "DNS";
    DNSOriginal.plugin = "cordova-plugin-dns";
    DNSOriginal.pluginRef = "cordova.plugins.dns";
    DNSOriginal.repo = "https://bitbucket.org/zegeba/cordova-plugin-dns";
    DNSOriginal.platforms = ["Android"];
    return DNSOriginal;
}(IonicNativePlugin));
var DNS = new DNSOriginal();
export { DNS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Rucy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQi9DLHVCQUFpQjs7OztJQU94QyxxQkFBTyxhQUFDLFFBQWdCOzs7Ozs7Y0F0QzFCO0VBK0J5QixpQkFBaUI7U0FBN0IsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgRE5TXHJcbiAqIEBkZXNjcmlwdGlvbiBBIHBsdWdpbiBmb3IgQXBhY2hlIENvcmRvdmEgdGhhdCBlbmFibGVzIGFwcGxpY2F0aW9ucyB0byBtYW51YWxseSByZXNvbHZlIGhvc3RuYW1lcyBpbnRvIGFuIHVuZGVybHlpbmcgbmV0d29yayBhZGRyZXNzLiBUaGlzIGlzIG1vc3RseSB1c2VmdWwgZm9yIGRldGVybWluaW5nIHdoZXRoZXIgdGhlcmUgaXMgYSBwcm9ibGVtIHdpdGggdGhlIGRldmljZSdzIEROUyBzZXJ2ZXIgY29uZmlndXJhdGlvbi5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRE5TIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kbnMvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkbnM6IEROUykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKiB0aGlzLmRucy5yZXNvbHZlKGhvc3RuYW1lKVxyXG4gKiAgIC50aGVuKFxyXG4gKiAgICAgYWRkcmVzcyA9PiBjb25zb2xlLmxvZygnUmVzb2x2ZWQgJyArIGhvc3RuYW1lICsgJyB0byAnICsgYWRkcmVzcyksXHJcbiAqICAgICBlcnJvciA9PiBjb25zb2xlLmxvZygnRmFpbGVkIHRvIHJlc29sdmUgJyArIGhvc3RuYW1lICsgJzogJyArIGVycm9yKVxyXG4gKiAgICk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0ROUycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZG5zJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuZG5zJyxcclxuICByZXBvOiAnaHR0cHM6Ly9iaXRidWNrZXQub3JnL3plZ2ViYS9jb3Jkb3ZhLXBsdWdpbi1kbnMnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEROUyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBSZXNvbHZlIGhvc3RuYW1lcyBpbnRvIGFuIHVuZGVybHlpbmcgbmV0d29yayBhZGRyZXNzLlxyXG4gICAqIEBwYXJhbSBob3N0bmFtZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzb2x1dGlvbi5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVzb2x2ZShob3N0bmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19