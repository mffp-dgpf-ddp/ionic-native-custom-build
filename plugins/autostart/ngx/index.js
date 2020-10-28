import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Autostart = /** @class */ (function (_super) {
    __extends(Autostart, _super);
    function Autostart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Autostart.prototype.enable = function () { return cordova(this, "enable", { "sync": true }, arguments); };
    Autostart.prototype.disable = function () { return cordova(this, "disable", { "sync": true }, arguments); };
    Autostart.pluginName = "Autostart";
    Autostart.plugin = "cordova-plugin-autostart";
    Autostart.pluginRef = "cordova.plugins.autoStart";
    Autostart.repo = "https://github.com/ToniKorin/cordova-plugin-autostart";
    Autostart.platforms = ["Android"];
    Autostart = __decorate([
        Injectable()
    ], Autostart);
    return Autostart;
}(IonicNativePlugin));
export { Autostart };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2F1dG9zdGFydC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQnpDLDZCQUFpQjs7OztJQUs5QywwQkFBTTtJQU1OLDJCQUFPOzs7Ozs7SUFYSSxTQUFTO1FBRHJCLFVBQVUsRUFBRTtPQUNBLFNBQVM7b0JBaEN0QjtFQWdDK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEF1dG9zdGFydFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gYXV0b21hdGljYWxseSBzdGFydHMgeW91ciBBbmRyb2lkIGFwcCBhZnRlciBldmVyeSBib290IG9yIGF1dG8tdXBkYXRlLlxyXG4gKiBZb3UgY2FuIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBhdXRvc3RhcnQgZnVuY3Rpb24gaW4geW91ciBhcHAuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEF1dG9zdGFydCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYXV0b3N0YXJ0L25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0b3N0YXJ0OiBBdXRvc3RhcnQpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5hdXRvc3RhcnQuZW5hYmxlKCk7XHJcbiAqXHJcbiAqIHRoaXMuYXV0b3N0YXJ0LmRpc2FibGUoKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQXV0b3N0YXJ0JyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hdXRvc3RhcnQnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5hdXRvU3RhcnQnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVG9uaUtvcmluL2NvcmRvdmEtcGx1Z2luLWF1dG9zdGFydCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0b3N0YXJ0IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIEVuYWJsZSB0aGUgYXV0b21hdGljIHN0YXJ0dXAgYWZ0ZXIgdGhlIGJvb3RcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBlbmFibGUoKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBEaXNhYmxlIHRoZSBhdXRvbWF0aWMgc3RhcnR1cCBhZnRlciB0aGUgYm9vdFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGRpc2FibGUoKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==