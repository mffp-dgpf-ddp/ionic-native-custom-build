import { __decorate, __extends } from "tslib";
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var TealiumAdIdentifier = /** @class */ (function (_super) {
    __extends(TealiumAdIdentifier, _super);
    function TealiumAdIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumAdIdentifier.prototype.setPersistent = function (instanceName) { return cordova(this, "setPersistent", {}, arguments); };
    TealiumAdIdentifier.prototype.setVolatile = function (instanceName) { return cordova(this, "setVolatile", {}, arguments); };
    TealiumAdIdentifier.pluginName = "TealiumAdIdentifier";
    TealiumAdIdentifier.plugin = "tealium-cordova-adidentifier";
    TealiumAdIdentifier.pluginRef = "window.tealiumAdIdentifier";
    TealiumAdIdentifier.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumAdIdentifier.platforms = ["Android", "iOS"];
    TealiumAdIdentifier.install = "";
    TealiumAdIdentifier = __decorate([
        Injectable()
    ], TealiumAdIdentifier);
    return TealiumAdIdentifier;
}(IonicNativePlugin));
export { TealiumAdIdentifier };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RlYWxpdW0tYWRpZGVudGlmaWVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQWtDRix1Q0FBaUI7Ozs7SUFPeEQsMkNBQWEsYUFBQyxZQUFvQjtJQVVsQyx5Q0FBVyxhQUFDLFlBQW9COzs7Ozs7O0lBakJyQixtQkFBbUI7UUFEL0IsVUFBVSxFQUFFO09BQ0EsbUJBQW1COzhCQW5DaEM7RUFtQ3lDLGlCQUFpQjtTQUE3QyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBwYWlkXHJcbiAqIEBuYW1lIFRlYWxpdW1BZElkZW50aWZpZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgbW9kdWxlIGRlcGVuZHMgb24gdGhlIFtUZWFsaXVtIENvcmRvdmEgUGx1Z2luXShodHRwczovL2dpdGh1Yi5jb20vdGVhbGl1bS9jb3Jkb3ZhLXBsdWdpbikuIFdpdGhvdXQgaXQsIHRoaXMgbW9kdWxlIHdpbGwgbm90IGRvIGFueXRoaW5nLlxyXG4gKiBNYWtlcyB0aGUgSURGQSBhbmQgR29vZ2xlIEFkIElkZW50aWZpZXIgYXZhaWxhYmxlIGluIHRoZSBUZWFsaXVtIGRhdGEgbGF5ZXIuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGBcclxuICogaW1wb3J0IHsgVGVhbGl1bUFkSWRlbnRpZmllciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdGVhbGl1bS1hZGlkZW50aWZpZXIvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhZElkZW50aWZpZXI6IFRlYWxpdW1BZElkZW50aWZpZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5hZElkZW50aWZpZXIuc2V0UGVyc2lzdGVudChcIm1haW5cIik7XHJcbiAqIHRoaXMuYWRJZGVudGlmaWVyLnNldFZvbGF0aWxlKFwibWFpblwiKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1RlYWxpdW1BZElkZW50aWZpZXInLFxyXG4gIHBsdWdpbjogJ3RlYWxpdW0tY29yZG92YS1hZGlkZW50aWZpZXInLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICd3aW5kb3cudGVhbGl1bUFkSWRlbnRpZmllcicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1RlYWxpdW0vY29yZG92YS1wbHVnaW4nLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGVhbGl1bUFkSWRlbnRpZmllciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIHN0b3JlcyB0aGUgYWQgaWRlbnRpZmllciBpbmZvcm1hdGlvbiBhcyBwZXJzaXN0ZW50IGRhdGFcclxuICAgKiBAcGFyYW0gaW5zdGFuY2VOYW1lIHtzdHJpbmd9IFlvdXIgYXJiaXRyYXJ5IFRlYWxpdW0gaW5zdGFuY2UgbmFtZSBwcm92aWRlZCBhdCBpbml0IHRpbWVcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZXRQZXJzaXN0ZW50KGluc3RhbmNlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RvcmVzIHRoZSBhZCBpZGVudGlmaWVyIGluZm9ybWF0aW9uIGFzIHZvbGF0aWxlIGRhdGFcclxuICAgKiBAcGFyYW0gaW5zdGFuY2VOYW1lIHtzdHJpbmd9IFlvdXIgYXJiaXRyYXJ5IFRlYWxpdW0gaW5zdGFuY2UgbmFtZSBwcm92aWRlZCBhdCBpbml0IHRpbWVcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZXRWb2xhdGlsZShpbnN0YW5jZU5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==