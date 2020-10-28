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
var AppLauncherOriginal = /** @class */ (function (_super) {
    __extends(AppLauncherOriginal, _super);
    function AppLauncherOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppLauncherOriginal.prototype.canLaunch = function (options) { return cordova(this, "canLaunch", {}, arguments); };
    AppLauncherOriginal.prototype.launch = function (options) { return cordova(this, "launch", {}, arguments); };
    AppLauncherOriginal.pluginName = "AppLauncher";
    AppLauncherOriginal.plugin = "cordova-plugin-app-launcher";
    AppLauncherOriginal.pluginRef = "window.plugins.launcher";
    AppLauncherOriginal.repo = "https://github.com/nchutchind/cordova-plugin-app-launcher";
    AppLauncherOriginal.platforms = ["Android", "iOS"];
    return AppLauncherOriginal;
}(IonicNativePlugin));
var AppLauncher = new AppLauncherOriginal();
export { AppLauncher };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1sYXVuY2hlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE0Q3ZDLCtCQUFpQjs7OztJQU9oRCwrQkFBUyxhQUFDLE9BQTJCO0lBVXJDLDRCQUFNLGFBQUMsT0FBMkI7Ozs7OztzQkE5RHBDO0VBNkNpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcExhdW5jaGVyT3B0aW9ucyB7XHJcbiAgdXJpPzogc3RyaW5nO1xyXG4gIHBhY2thZ2VOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQXBwIExhdW5jaGVyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBTaW1wbGUgQ29yZG92YSBwbHVnaW4gdG8gc2VlIGlmIG90aGVyIGFwcHMgYXJlIGluc3RhbGxlZCBhbmQgbGF1bmNoIHRoZW0uXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEFwcExhdW5jaGVyLCBBcHBMYXVuY2hlck9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FwcC1sYXVuY2hlci9uZ3gnO1xyXG4gKiBpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhcHBMYXVuY2hlcjogQXBwTGF1bmNoZXIsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGNvbnN0IG9wdGlvbnM6IEFwcExhdW5jaGVyT3B0aW9ucyA9IHtcclxuICogfVxyXG4gKlxyXG4gKiBpZih0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKSkge1xyXG4gKiAgIG9wdGlvbnMudXJpID0gJ2ZiOi8vJ1xyXG4gKiB9IGVsc2Uge1xyXG4gKiAgIG9wdGlvbnMucGFja2FnZU5hbWUgPSAnY29tLmZhY2Vib29rLmthdGFuYSdcclxuICogfVxyXG4gKlxyXG4gKiB0aGlzLmFwcExhdW5jaGVyLmNhbkxhdW5jaChvcHRpb25zKVxyXG4gKiAgIC50aGVuKChjYW5MYXVuY2g6IGJvb2xlYW4pID0+IGNvbnNvbGUubG9nKCdGYWNlYm9vayBpcyBhdmFpbGFibGUnKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoJ0ZhY2Vib29rIGlzIG5vdCBhdmFpbGFibGUnKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0FwcExhdW5jaGVyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHAtbGF1bmNoZXInLFxyXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5wbHVnaW5zLmxhdW5jaGVyJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL25jaHV0Y2hpbmQvY29yZG92YS1wbHVnaW4tYXBwLWxhdW5jaGVyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXBwTGF1bmNoZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYW55IGFwcHMgYXJlIGluc3RhbGxlZCB0aGF0IGNhbiBsYXVuY2ggdmlhIGEgc3BlY2lmaWVkIFVSSSBvciBQYWNrYWdlIE5hbWUuXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgQXBwIExhdW5jaGVyIG9wdGlvbnNcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIGFwcCBpcyBpbnN0YWxsZWRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2FuTGF1bmNoKG9wdGlvbnM6IEFwcExhdW5jaGVyT3B0aW9ucyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGF1bmNoZXMgdGhlIGFwcCB2aWEgYSBzcGVjaWZpZWQgVVJJIG9yIFBhY2thZ2UgTmFtZVxyXG4gICAqIEBwYXJhbSBvcHRpb25zIEFwcCBMYXVuY2hlciBvcHRpb25zXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRoZSBsYXVuY2hlZCBhcHBcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbGF1bmNoKG9wdGlvbnM6IEFwcExhdW5jaGVyT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==