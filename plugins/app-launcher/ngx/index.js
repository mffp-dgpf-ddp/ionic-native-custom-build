import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AppLauncher = /** @class */ (function (_super) {
    __extends(AppLauncher, _super);
    function AppLauncher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppLauncher.prototype.canLaunch = function (options) { return cordova(this, "canLaunch", {}, arguments); };
    AppLauncher.prototype.launch = function (options) { return cordova(this, "launch", {}, arguments); };
    AppLauncher.pluginName = "AppLauncher";
    AppLauncher.plugin = "cordova-plugin-app-launcher";
    AppLauncher.pluginRef = "window.plugins.launcher";
    AppLauncher.repo = "https://github.com/nchutchind/cordova-plugin-app-launcher";
    AppLauncher.platforms = ["Android", "iOS"];
    AppLauncher = __decorate([
        Injectable()
    ], AppLauncher);
    return AppLauncher;
}(IonicNativePlugin));
export { AppLauncher };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1sYXVuY2hlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE0Q3ZDLCtCQUFpQjs7OztJQU9oRCwrQkFBUyxhQUFDLE9BQTJCO0lBVXJDLDRCQUFNLGFBQUMsT0FBMkI7Ozs7OztJQWpCdkIsV0FBVztRQUR2QixVQUFVLEVBQUU7T0FDQSxXQUFXO3NCQTdDeEI7RUE2Q2lDLGlCQUFpQjtTQUFyQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwTGF1bmNoZXJPcHRpb25zIHtcclxuICB1cmk/OiBzdHJpbmc7XHJcbiAgcGFja2FnZU5hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBBcHAgTGF1bmNoZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFNpbXBsZSBDb3Jkb3ZhIHBsdWdpbiB0byBzZWUgaWYgb3RoZXIgYXBwcyBhcmUgaW5zdGFsbGVkIGFuZCBsYXVuY2ggdGhlbS5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQXBwTGF1bmNoZXIsIEFwcExhdW5jaGVyT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYXBwLWxhdW5jaGVyL25neCc7XHJcbiAqIGltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcExhdW5jaGVyOiBBcHBMYXVuY2hlciwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogY29uc3Qgb3B0aW9uczogQXBwTGF1bmNoZXJPcHRpb25zID0ge1xyXG4gKiB9XHJcbiAqXHJcbiAqIGlmKHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpKSB7XHJcbiAqICAgb3B0aW9ucy51cmkgPSAnZmI6Ly8nXHJcbiAqIH0gZWxzZSB7XHJcbiAqICAgb3B0aW9ucy5wYWNrYWdlTmFtZSA9ICdjb20uZmFjZWJvb2sua2F0YW5hJ1xyXG4gKiB9XHJcbiAqXHJcbiAqIHRoaXMuYXBwTGF1bmNoZXIuY2FuTGF1bmNoKG9wdGlvbnMpXHJcbiAqICAgLnRoZW4oKGNhbkxhdW5jaDogYm9vbGVhbikgPT4gY29uc29sZS5sb2coJ0ZhY2Vib29rIGlzIGF2YWlsYWJsZScpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcignRmFjZWJvb2sgaXMgbm90IGF2YWlsYWJsZScpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQXBwTGF1bmNoZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcC1sYXVuY2hlcicsXHJcbiAgcGx1Z2luUmVmOiAnd2luZG93LnBsdWdpbnMubGF1bmNoZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbmNodXRjaGluZC9jb3Jkb3ZhLXBsdWdpbi1hcHAtbGF1bmNoZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBMYXVuY2hlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDaGVjayBpZiBhbnkgYXBwcyBhcmUgaW5zdGFsbGVkIHRoYXQgY2FuIGxhdW5jaCB2aWEgYSBzcGVjaWZpZWQgVVJJIG9yIFBhY2thZ2UgTmFtZS5cclxuICAgKiBAcGFyYW0gb3B0aW9ucyBBcHAgTGF1bmNoZXIgb3B0aW9uc1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBpZiB0aGUgYXBwIGlzIGluc3RhbGxlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjYW5MYXVuY2gob3B0aW9uczogQXBwTGF1bmNoZXJPcHRpb25zKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMYXVuY2hlcyB0aGUgYXBwIHZpYSBhIHNwZWNpZmllZCBVUkkgb3IgUGFja2FnZSBOYW1lXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgQXBwIExhdW5jaGVyIG9wdGlvbnNcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdGhlIGxhdW5jaGVkIGFwcFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBsYXVuY2gob3B0aW9uczogQXBwTGF1bmNoZXJPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19