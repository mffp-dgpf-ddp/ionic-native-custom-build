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
var RollbarOriginal = /** @class */ (function (_super) {
    __extends(RollbarOriginal, _super);
    function RollbarOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RollbarOriginal.prototype.init = function () { return cordova(this, "init", {}, arguments); };
    RollbarOriginal.pluginName = "Rollbar";
    RollbarOriginal.plugin = "resgrid-cordova-plugins-rollbar";
    RollbarOriginal.pluginRef = "cordova.plugins.Rollbar";
    RollbarOriginal.repo = "https://github.com/Resgrid/cordova-plugins-rollbar";
    RollbarOriginal.install = "ionic cordova plugin add resgrid-cordova-plugins-rollbar --variable ROLLBAR_ACCESS_TOKEN=\"YOUR_ROLLBAR_ACCEESS_TOKEN\" --variable ROLLBAR_ENVIRONMENT=\"ROLLBAR_ENVIRONMENT\"";
    RollbarOriginal.installVariables = ["ROLLBAR_ACCESS_TOKEN", "ROLLBAR_ENVIRONMENT"];
    RollbarOriginal.platforms = ["Android", "iOS"];
    return RollbarOriginal;
}(IonicNativePlugin));
var Rollbar = new RollbarOriginal();
export { Rollbar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3JvbGxiYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBK0IzQywyQkFBaUI7Ozs7SUFNNUMsc0JBQUk7Ozs7Ozs7O2tCQXRDTjtFQWdDNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBiZXRhXHJcbiAqIEBuYW1lIFJvbGxiYXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGFkZHMgW1JvbGxiYXJdKGh0dHBzOi8vcm9sbGJhci5jb20vKSBBcHAgbW9uaXRvcmluZyB0byB5b3VyIGFwcGxpY2F0aW9uXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFJvbGxiYXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3JvbGxiYXIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSByb2xsYmFyOiBSb2xsYmFyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMucm9sbGJhci5pbml0KCk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1JvbGxiYXInLFxyXG4gIHBsdWdpbjogJ3Jlc2dyaWQtY29yZG92YS1wbHVnaW5zLXJvbGxiYXInLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5Sb2xsYmFyJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1Jlc2dyaWQvY29yZG92YS1wbHVnaW5zLXJvbGxiYXInLFxyXG4gIGluc3RhbGw6XHJcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIHJlc2dyaWQtY29yZG92YS1wbHVnaW5zLXJvbGxiYXIgLS12YXJpYWJsZSBST0xMQkFSX0FDQ0VTU19UT0tFTj1cIllPVVJfUk9MTEJBUl9BQ0NFRVNTX1RPS0VOXCIgLS12YXJpYWJsZSBST0xMQkFSX0VOVklST05NRU5UPVwiUk9MTEJBUl9FTlZJUk9OTUVOVFwiJyxcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1JPTExCQVJfQUNDRVNTX1RPS0VOJywgJ1JPTExCQVJfRU5WSVJPTk1FTlQnXSxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUm9sbGJhciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIGluaXRpYWxpemVzIHRoZSBtb25pdG9yaW5nIG9mIHlvdXIgYXBwbGljYXRpb25cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgcGx1Z2luIHN1Y2Nlc3NmdWxseSBpbml0aWFsaXplc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpbml0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==