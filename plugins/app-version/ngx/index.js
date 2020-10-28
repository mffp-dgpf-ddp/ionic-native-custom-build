import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AppVersion = /** @class */ (function (_super) {
    __extends(AppVersion, _super);
    function AppVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppVersion.prototype.getAppName = function () { return cordova(this, "getAppName", {}, arguments); };
    AppVersion.prototype.getPackageName = function () { return cordova(this, "getPackageName", {}, arguments); };
    AppVersion.prototype.getVersionCode = function () { return cordova(this, "getVersionCode", {}, arguments); };
    AppVersion.prototype.getVersionNumber = function () { return cordova(this, "getVersionNumber", {}, arguments); };
    AppVersion.pluginName = "AppVersion";
    AppVersion.plugin = "cordova-plugin-app-version";
    AppVersion.pluginRef = "cordova.getAppVersion";
    AppVersion.repo = "https://github.com/whiteoctober/cordova-plugin-app-version";
    AppVersion.platforms = ["Android", "iOS", "Windows"];
    AppVersion = __decorate([
        Injectable()
    ], AppVersion);
    return AppVersion;
}(IonicNativePlugin));
export { AppVersion };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC12ZXJzaW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWtDeEMsOEJBQWlCOzs7O0lBTS9DLCtCQUFVO0lBU1YsbUNBQWM7SUFXZCxtQ0FBYztJQVNkLHFDQUFnQjs7Ozs7O0lBbkNMLFVBQVU7UUFEdEIsVUFBVSxFQUFFO09BQ0EsVUFBVTtxQkFuQ3ZCO0VBbUNnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgQXBwIFZlcnNpb25cclxuICogQHByZW1pZXIgYXBwLXZlcnNpb25cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFJlYWRzIHRoZSB2ZXJzaW9uIG9mIHlvdXIgYXBwIGZyb20gdGhlIHRhcmdldCBidWlsZCBzZXR0aW5ncy5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1hcHAtdmVyc2lvbmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtDb3Jkb3ZhIEFwcCBWZXJzaW9uIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS93aGl0ZW9jdG9iZXIvY29yZG92YS1wbHVnaW4tYXBwLXZlcnNpb24pLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBBcHBWZXJzaW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hcHAtdmVyc2lvbi9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcFZlcnNpb246IEFwcFZlcnNpb24pIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5hcHBWZXJzaW9uLmdldEFwcE5hbWUoKTtcclxuICogdGhpcy5hcHBWZXJzaW9uLmdldFBhY2thZ2VOYW1lKCk7XHJcbiAqIHRoaXMuYXBwVmVyc2lvbi5nZXRWZXJzaW9uQ29kZSgpO1xyXG4gKiB0aGlzLmFwcFZlcnNpb24uZ2V0VmVyc2lvbk51bWJlcigpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdBcHBWZXJzaW9uJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHAtdmVyc2lvbicsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5nZXRBcHBWZXJzaW9uJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3doaXRlb2N0b2Jlci9jb3Jkb3ZhLXBsdWdpbi1hcHAtdmVyc2lvbicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXBwVmVyc2lvbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBhcHAsIGUuZy46IFwiTXkgQXdlc29tZSBBcHBcIlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEFwcE5hbWUoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHBhY2thZ2UgbmFtZSBvZiB0aGUgYXBwLCBlLmcuOiBcImNvbS5leGFtcGxlLm15YXdlc29tZWFwcFwiXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0UGFja2FnZU5hbWUoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGJ1aWxkIGlkZW50aWZpZXIgb2YgdGhlIGFwcC5cclxuICAgKiBJbiBpT1MgYSBzdHJpbmcgd2l0aCB0aGUgYnVpbGQgdmVyc2lvbiBsaWtlIFwiMS42MDk1XCJcclxuICAgKiBJbiBBbmRyb2lkIGEgbnVtYmVyIGdlbmVyYXRlZCBmcm9tIHRoZSB2ZXJzaW9uIHN0cmluZywgbGlrZSAxMDIwMyBmb3IgdmVyc2lvbiBcIjEuMi4zXCJcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmcgfCBudW1iZXI+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRWZXJzaW9uQ29kZSgpOiBQcm9taXNlPHN0cmluZyB8IG51bWJlcj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgdmVyc2lvbiBvZiB0aGUgYXBwLCBlLmcuOiBcIjEuMi4zXCJcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRWZXJzaW9uTnVtYmVyKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==