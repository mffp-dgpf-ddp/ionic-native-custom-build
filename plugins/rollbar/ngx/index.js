import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Rollbar = /** @class */ (function (_super) {
    __extends(Rollbar, _super);
    function Rollbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rollbar.prototype.init = function () { return cordova(this, "init", {}, arguments); };
    Rollbar.pluginName = "Rollbar";
    Rollbar.plugin = "resgrid-cordova-plugins-rollbar";
    Rollbar.pluginRef = "cordova.plugins.Rollbar";
    Rollbar.repo = "https://github.com/Resgrid/cordova-plugins-rollbar";
    Rollbar.install = "ionic cordova plugin add resgrid-cordova-plugins-rollbar --variable ROLLBAR_ACCESS_TOKEN=\"YOUR_ROLLBAR_ACCEESS_TOKEN\" --variable ROLLBAR_ENVIRONMENT=\"ROLLBAR_ENVIRONMENT\"";
    Rollbar.installVariables = ["ROLLBAR_ACCESS_TOKEN", "ROLLBAR_ENVIRONMENT"];
    Rollbar.platforms = ["Android", "iOS"];
    Rollbar = __decorate([
        Injectable()
    ], Rollbar);
    return Rollbar;
}(IonicNativePlugin));
export { Rollbar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3JvbGxiYXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBK0IzQywyQkFBaUI7Ozs7SUFNNUMsc0JBQUk7Ozs7Ozs7O0lBTk8sT0FBTztRQURuQixVQUFVLEVBQUU7T0FDQSxPQUFPO2tCQWhDcEI7RUFnQzZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAYmV0YVxyXG4gKiBAbmFtZSBSb2xsYmFyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBhZGRzIFtSb2xsYmFyXShodHRwczovL3JvbGxiYXIuY29tLykgQXBwIG1vbml0b3JpbmcgdG8geW91ciBhcHBsaWNhdGlvblxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBSb2xsYmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9yb2xsYmFyL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9sbGJhcjogUm9sbGJhcikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLnJvbGxiYXIuaW5pdCgpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdSb2xsYmFyJyxcclxuICBwbHVnaW46ICdyZXNncmlkLWNvcmRvdmEtcGx1Z2lucy1yb2xsYmFyJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuUm9sbGJhcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9SZXNncmlkL2NvcmRvdmEtcGx1Z2lucy1yb2xsYmFyJyxcclxuICBpbnN0YWxsOlxyXG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCByZXNncmlkLWNvcmRvdmEtcGx1Z2lucy1yb2xsYmFyIC0tdmFyaWFibGUgUk9MTEJBUl9BQ0NFU1NfVE9LRU49XCJZT1VSX1JPTExCQVJfQUNDRUVTU19UT0tFTlwiIC0tdmFyaWFibGUgUk9MTEJBUl9FTlZJUk9OTUVOVD1cIlJPTExCQVJfRU5WSVJPTk1FTlRcIicsXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogWydST0xMQkFSX0FDQ0VTU19UT0tFTicsICdST0xMQkFSX0VOVklST05NRU5UJ10sXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJvbGxiYXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBpbml0aWFsaXplcyB0aGUgbW9uaXRvcmluZyBvZiB5b3VyIGFwcGxpY2F0aW9uXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHBsdWdpbiBzdWNjZXNzZnVsbHkgaW5pdGlhbGl6ZXNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaW5pdCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=