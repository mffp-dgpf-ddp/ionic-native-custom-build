import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var IsDebug = /** @class */ (function (_super) {
    __extends(IsDebug, _super);
    function IsDebug() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IsDebug.prototype.getIsDebug = function () { return cordova(this, "getIsDebug", {}, arguments); };
    IsDebug.pluginName = "IsDebug";
    IsDebug.plugin = "cordova-plugin-is-debug";
    IsDebug.pluginRef = "cordova.plugins.IsDebug";
    IsDebug.repo = "https://github.com/mattlewis92/cordova-plugin-is-debug";
    IsDebug.platforms = ["Android", "iOS"];
    IsDebug = __decorate([
        Injectable()
    ], IsDebug);
    return IsDebug;
}(IonicNativePlugin));
export { IsDebug };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lzLWRlYnVnL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQThCM0MsMkJBQWlCOzs7O0lBTTVDLDRCQUFVOzs7Ozs7SUFOQyxPQUFPO1FBRG5CLFVBQVUsRUFBRTtPQUNBLE9BQU87a0JBL0JwQjtFQStCNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIElzIERlYnVnXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBEZXRlY3QgaWYgdGhlIGFwcCBpcyBydW5uaW5nIGluIGRlYnVnIG1vZGUgb3Igbm90LlxyXG4gKiBEZWJ1ZyBtb2RlIGlzIHdoZW4gdGhlIGFwcCBpcyBidWlsdCBhbmQgaW5zdGFsbGVkIGxvY2FsbHkgdmlhIHhjb2RlIC8gZWNsaXBzZSAvIHRoZSBjb3Jkb3ZhIGNsaSBldGMsIGNvbXBhcmVkIHRvIHJlbGVhc2UgbW9kZSB3aGVuIHRoZSBhcHAgd2FzIGRvd25sb2FkZWQgZnJvbSB0aGUgYXBwIC8gcGxheSBzdG9yZSB2aWEgYW4gZW5kIHVzZXIuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IElzRGVidWcgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2lzLWRlYnVnL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaXNEZWJ1ZzogSXNEZWJ1ZykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmlzRGVidWcuZ2V0SXNEZWJ1ZygpXHJcbiAqICAgLnRoZW4oaXNEZWJ1ZyA9PiBjb25zb2xlLmxvZygnSXMgZGVidWc6JywgaXNEZWJ1ZykpXHJcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdJc0RlYnVnJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pcy1kZWJ1ZycsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLklzRGVidWcnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWF0dGxld2lzOTIvY29yZG92YS1wbHVnaW4taXMtZGVidWcnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJc0RlYnVnIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBpZiBhbiBhcHAgd2FzIGluc3RhbGxlZCB2aWEgeGNvZGUgLyBlY2xpcHNlIC8gdGhlIGlvbmljIENMSSBldGNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRydWUgaWYgdGhlIGFwcCB3YXMgaW5zdGFsbGVkIHZpYSB4Y29kZSAvIGVjbGlwc2UgLyB0aGUgaW9uaWMgQ0xJIGV0Yy4gSXQgd2lsbCByZXNvbHZlIHRvIGZhbHNlIGlmIHRoZSBhcHAgd2FzIGRvd25sb2FkZWQgZnJvbSB0aGUgYXBwIC8gcGxheSBzdG9yZSBieSB0aGUgZW5kIHVzZXIuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldElzRGVidWcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==