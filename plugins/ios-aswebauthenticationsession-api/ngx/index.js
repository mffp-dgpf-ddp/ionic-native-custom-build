import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var IosASWebauthenticationSession = /** @class */ (function (_super) {
    __extends(IosASWebauthenticationSession, _super);
    function IosASWebauthenticationSession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IosASWebauthenticationSession.prototype.start = function (callbackUrl, authorizeURL) { return cordova(this, "start", {}, arguments); };
    IosASWebauthenticationSession.pluginName = "IosASWebauthenticationSession";
    IosASWebauthenticationSession.plugin = "cordova-plugin-ios-aswebauthenticationsession-api";
    IosASWebauthenticationSession.pluginRef = "plugins.ASWebAuthSession";
    IosASWebauthenticationSession.repo = "https://github.com/jwelker110/cordova-plugin-ios-aswebauthenticationsession-api";
    IosASWebauthenticationSession.platforms = ["iOS"];
    IosASWebauthenticationSession = __decorate([
        Injectable()
    ], IosASWebauthenticationSession);
    return IosASWebauthenticationSession;
}(IonicNativePlugin));
export { IosASWebauthenticationSession };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lvcy1hc3dlYmF1dGhlbnRpY2F0aW9uc2Vzc2lvbi1hcGkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBaUNyQixpREFBaUI7Ozs7SUFRbEUsNkNBQUssYUFDSCxXQUFtQixFQUNuQixZQUFvQjs7Ozs7O0lBVlgsNkJBQTZCO1FBRHpDLFVBQVUsRUFBRTtPQUNBLDZCQUE2Qjt3Q0FsQzFDO0VBa0NtRCxpQkFBaUI7U0FBdkQsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBpb3MtYXN3ZWJhdXRoZW50aWNhdGlvbnNlc3Npb24tYXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBQbHVnaW4gZm9yIGlPUyAxMiBBU1dlYkF1dGhlbnRpY2F0aW9uU2Vzc2lvbiBBUElcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgSW9zQVNXZWJhdXRoZW50aWNhdGlvblNlc3Npb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2lvcy1hc3dlYmF1dGhlbnRpY2F0aW9uc2Vzc2lvbi1hcGkvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBJb3NBU1dlYmF1dGhlbnRpY2F0aW9uU2Vzc2lvbjogaW9zLWFzd2ViYXV0aGVudGljYXRpb25zZXNzaW9uLWFwaSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLklvc0FTV2ViYXV0aGVudGljYXRpb25TZXNzaW9uLnN0YXJ0KGNhbGxiYWNrVXJsLCBhdXRob3JpemVVUkwpXHJcbiAqICAgLnRoZW4oKHJlZGlyZWN0VXJsOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKHJlZGlyZWN0VXJsKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0lvc0FTV2ViYXV0aGVudGljYXRpb25TZXNzaW9uJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pb3MtYXN3ZWJhdXRoZW50aWNhdGlvbnNlc3Npb24tYXBpJyxcclxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLkFTV2ViQXV0aFNlc3Npb24nLFxyXG4gIHJlcG86XHJcbiAgICAnaHR0cHM6Ly9naXRodWIuY29tL2p3ZWxrZXIxMTAvY29yZG92YS1wbHVnaW4taW9zLWFzd2ViYXV0aGVudGljYXRpb25zZXNzaW9uLWFwaScsXHJcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJb3NBU1dlYmF1dGhlbnRpY2F0aW9uU2Vzc2lvbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIHN0YXJ0IGFuIGF1dGhlbnRpY2F0aW9uIGZsb3cgaW4gQVNXZWJhdXRoZW50aWNhdGlvblNlc3Npb25cclxuICAgKiBAcGFyYW0gY2FsbGJhY2tVcmwge3N0cmluZ30gQ2FsbGJhY2sgVVJMIG9mIHlvdXIgQXBwXHJcbiAgICogQHBhcmFtIGF1dGhvcml6ZVVSTCB7bnVtYmVyfSBBdXRob3JpemF0aW9uIFVSTFxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBhIHN0cmluZyBjb250YWluaW5nIHRoZSByZWRpcmVjdCBVUkwgYWZ0ZXIgZmluaXNoaW5nIEFTV2ViYXV0aGVudGljYXRpb25TZXNzaW9uXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0YXJ0KFxyXG4gICAgY2FsbGJhY2tVcmw6IHN0cmluZyxcclxuICAgIGF1dGhvcml6ZVVSTDogc3RyaW5nXHJcbiAgKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19