import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var QuikklyPlugin = /** @class */ (function (_super) {
    __extends(QuikklyPlugin, _super);
    function QuikklyPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuikklyPlugin.prototype.openScanner = function () { return cordova(this, "openScanner", {}, arguments); };
    QuikklyPlugin.pluginName = "QuikklyPlugin";
    QuikklyPlugin.plugin = "cordova-plugin-quikkly";
    QuikklyPlugin.pluginRef = "cordova.plugins.quikkly";
    QuikklyPlugin.repo = "https://github.com/quikkly/cordova-plugin-quikkly.git";
    QuikklyPlugin.platforms = ["Android", "iOS"];
    QuikklyPlugin = __decorate([
        Injectable()
    ], QuikklyPlugin);
    return QuikklyPlugin;
}(IonicNativePlugin));
export { QuikklyPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3F1aWtrbHkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBZXJDLGlDQUFpQjs7OztJQUVsRCxtQ0FBVzs7Ozs7O0lBRkEsYUFBYTtRQUR6QixVQUFVLEVBQUU7T0FDQSxhQUFhO3dCQWhCMUI7RUFnQm1DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBRdWlra2x5UGx1Z2luXHJcbiAqIEBkZXNjcmlwdGlvbiBpb25pYyB3cmFwcGVyIGZvciBjb3Jkb3ZhLXBsdWdpbi1xdWlra2x5XHJcbiAqIFVzZSB0aGUgcXVpa2tseSBzY2FubmVyIGluIHlvdXIgaW9uaWMgYXBwXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnUXVpa2tseVBsdWdpbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcXVpa2tseScsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLnF1aWtrbHknLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcXVpa2tseS9jb3Jkb3ZhLXBsdWdpbi1xdWlra2x5LmdpdCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFF1aWtrbHlQbHVnaW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoKVxyXG4gIG9wZW5TY2FubmVyKCk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19