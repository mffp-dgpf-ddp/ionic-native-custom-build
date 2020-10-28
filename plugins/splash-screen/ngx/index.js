import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var SplashScreen = /** @class */ (function (_super) {
    __extends(SplashScreen, _super);
    function SplashScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplashScreen.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
    SplashScreen.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    SplashScreen.pluginName = "SplashScreen";
    SplashScreen.plugin = "cordova-plugin-splashscreen";
    SplashScreen.pluginRef = "navigator.splashscreen";
    SplashScreen.repo = "https://github.com/apache/cordova-plugin-splashscreen";
    SplashScreen.platforms = ["Amazon Fire OS", "Android", "iOS", "Windows"];
    SplashScreen = __decorate([
        Injectable()
    ], SplashScreen);
    return SplashScreen;
}(IonicNativePlugin));
export { SplashScreen };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NwbGFzaC1zY3JlZW4vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNEJ0QyxnQ0FBaUI7Ozs7SUFPakQsMkJBQUk7SUFRSiwyQkFBSTs7Ozs7O0lBZk8sWUFBWTtRQUR4QixVQUFVLEVBQUU7T0FDQSxZQUFZO3VCQTdCekI7RUE2QmtDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTcGxhc2ggU2NyZWVuXHJcbiAqIEBwcmVtaWVyIHNwbGFzaHNjcmVlblxyXG4gKiBAY2FwYWNpdG9yaW5jb21wYXRpYmxlIHRydWVcclxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGRpc3BsYXlzIGFuZCBoaWRlcyBhIHNwbGFzaCBzY3JlZW4gZHVyaW5nIGFwcGxpY2F0aW9uIGxhdW5jaC4gVGhlIG1ldGhvZHMgYmVsb3cgYWxsb3dzIHNob3dpbmcgYW5kIGhpZGluZyB0aGUgc3BsYXNoc2NyZWVuIGFmdGVyIHRoZSBhcHAgaGFzIGxvYWRlZC5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgU3BsYXNoU2NyZWVuIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcGxhc2gtc2NyZWVuL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3BsYXNoU2NyZWVuOiBTcGxhc2hTY3JlZW4pIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5zcGxhc2hTY3JlZW4uc2hvdygpO1xyXG4gKlxyXG4gKiB0aGlzLnNwbGFzaFNjcmVlbi5oaWRlKCk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1NwbGFzaFNjcmVlbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc3BsYXNoc2NyZWVuJyxcclxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3Iuc3BsYXNoc2NyZWVuJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1zcGxhc2hzY3JlZW4nLFxyXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNwbGFzaFNjcmVlbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBTaG93cyB0aGUgc3BsYXNoc2NyZWVuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIHNob3coKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBIaWRlcyB0aGUgc3BsYXNoc2NyZWVuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIGhpZGUoKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==