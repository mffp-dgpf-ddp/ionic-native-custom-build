import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var WebView = /** @class */ (function (_super) {
    __extends(WebView, _super);
    function WebView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(WebView.prototype, "convertFileSrc", {
        get: function () { return cordovaPropertyGet(this, "convertFileSrc"); },
        set: function (value) { cordovaPropertySet(this, "convertFileSrc", value); },
        enumerable: true,
        configurable: true
    });
    WebView.pluginName = "WebView";
    WebView.plugin = "cordova-plugin-ionic-webview";
    WebView.pluginRef = "window.Ionic.WebView";
    WebView.repo = "https://github.com/ionic-team/cordova-plugin-ionic-webview";
    WebView.platforms = ["Android", "iOS"];
    WebView.install = "ionic cordova plugin add cordova-plugin-ionic-webview";
    WebView = __decorate([
        Injectable()
    ], WebView);
    return WebView;
}(IonicNativePlugin));
export { WebView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lvbmljLXdlYnZpZXcvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sNkRBQThDLE1BQU0sb0JBQW9CLENBQUM7O0lBZ0NuRCwyQkFBaUI7Ozs7MEJBSzVDLG1DQUFjOzs7Ozs7Ozs7Ozs7SUFMSCxPQUFPO1FBRG5CLFVBQVUsRUFBRTtPQUNBLE9BQU87a0JBakNwQjtFQWlDNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgSW9uaWMgV2Vidmlld1xyXG4gKiBAY2FwYWNpdG9yaW5jb21wYXRpYmxlIHRydWVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFjY2VzcyBXZWIgVmlldyB1dGlsaXRpZXMuXHJcbiAqXHJcbiAqIFJlcXVpcmVzIHRoZSBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWlvbmljLXdlYnZpZXdgID4gMi4wLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbSW9uaWMgV2ViIFZpZXddKGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2NvcmRvdmEtcGx1Z2luLWlvbmljLXdlYnZpZXcpIHJlcG9zaXRvcnkuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFdlYlZpZXcgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2lvbmljLXdlYnZpZXcvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB3ZWJ2aWV3OiBXZWJWaWV3KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGltZyA9IHRoaXMud2Vidmlldy5jb252ZXJ0RmlsZVNyYygnZmlsZTovLy9Vc2Vycy9kYW4vY2FtZXJhLWltYWdlLTEyMzQ1LnBuZycpXHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1dlYlZpZXcnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWlvbmljLXdlYnZpZXcnLFxyXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5Jb25pYy5XZWJWaWV3JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9uaWMtd2VidmlldycsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3JyxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2ViVmlldyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDb252ZXJ0IGEgYGZpbGU6Ly9gIFVSTCB0byBhIFVSTCB0aGF0IGlzIGNvbXBhdGlibGUgd2l0aCB0aGUgbG9jYWwgd2ViIHNlcnZlciBpbiB0aGUgV2ViIFZpZXcgcGx1Z2luLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIGNvbnZlcnRGaWxlU3JjOiAodXJsOiBzdHJpbmcpID0+IHN0cmluZztcclxufVxyXG4iXX0=