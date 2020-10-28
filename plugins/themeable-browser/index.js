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
import { IonicNativePlugin, instanceAvailability, cordovaInstance } from '@ionic-native/core';
import { Observable } from 'rxjs';
var ThemeableBrowserObject = /** @class */ (function () {
    function ThemeableBrowserObject(url, target, styleOptions) {
        try {
            this._objectInstance = cordova.ThemeableBrowser.open(url, target, styleOptions);
        }
        catch (e) {
            if (typeof window !== 'undefined') {
                window.open(url);
            }
            console.warn('Native: ThemeableBrowserOriginal is not installed or you are running on a browser. Falling back to window.open.');
        }
    }
    ThemeableBrowserObject.prototype.show = function () { return cordovaInstance(this, "show", { "sync": true }, arguments); };
    ThemeableBrowserObject.prototype.close = function () { return cordovaInstance(this, "close", { "sync": true }, arguments); };
    ThemeableBrowserObject.prototype.reload = function () { return cordovaInstance(this, "reload", { "sync": true }, arguments); };
    ThemeableBrowserObject.prototype.executeScript = function (script) { return cordovaInstance(this, "executeScript", {}, arguments); };
    ThemeableBrowserObject.prototype.insertCss = function (css) { return cordovaInstance(this, "insertCss", {}, arguments); };
    ThemeableBrowserObject.prototype.on = function (event) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return new Observable(function (observer) {
                    _this._objectInstance.addEventListener(event, observer.next.bind(observer));
                    return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
                });
            }
        })();
    };
    return ThemeableBrowserObject;
}());
export { ThemeableBrowserObject };
var ThemeableBrowserOriginal = /** @class */ (function (_super) {
    __extends(ThemeableBrowserOriginal, _super);
    function ThemeableBrowserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a browser instance
     * @param url {string} URL to open
     * @param target {string} Target
     * @param styleOptions {ThemeableBrowserOptions} Themeable browser options
     * @returns {ThemeableBrowserObject}
     */
    ThemeableBrowserOriginal.prototype.create = function (url, target, styleOptions) {
        return new ThemeableBrowserObject(url, target, styleOptions);
    };
    ThemeableBrowserOriginal.pluginName = "ThemeableBrowser";
    ThemeableBrowserOriginal.plugin = "cordova-plugin-themeablebrowser";
    ThemeableBrowserOriginal.pluginRef = "cordova.ThemeableBrowser";
    ThemeableBrowserOriginal.repo = "https://github.com/initialxy/cordova-plugin-themeablebrowser";
    ThemeableBrowserOriginal.platforms = ["Amazon Fire OS", "Android", "Blackberry 10", "Browser", "FirefoxOS", "iOS", "Ubuntu", "Windows", "Windows Phone"];
    return ThemeableBrowserOriginal;
}(IonicNativePlugin));
var ThemeableBrowser = new ThemeableBrowserOriginal();
export { ThemeableBrowser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RoZW1lYWJsZS1icm93c2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDREQUE2RCxNQUFNLG9CQUFvQixDQUFDO0FBQy9GLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBeUVoQyxnQ0FBWSxHQUFXLEVBQUUsTUFBYyxFQUFFLFlBQXFDO1FBQzVFLElBQUk7WUFDRixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNqRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7Z0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEI7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUNWLHlHQUF5RyxDQUMxRyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBT0QscUNBQUk7SUFNSixzQ0FBSztJQU1MLHVDQUFNO0lBUU4sOENBQWEsYUFBQyxNQUF3QztJQVV0RCwwQ0FBUyxhQUFDLEdBQXFDO0lBVy9DLG1DQUFFLGFBQUMsS0FBYTs7O3NEQUFtQjtnQkFDakMsT0FBTyxJQUFJLFVBQVUsQ0FBTSxVQUFBLFFBQVE7b0JBQ2pDLEtBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzNFLE9BQU8sY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQTdFLENBQTZFLENBQUM7Z0JBQzdGLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztpQ0EzSUg7Ozs7SUFxUHNDLG9DQUFpQjs7OztJQUNyRDs7Ozs7O09BTUc7SUFDSCxpQ0FBTSxHQUFOLFVBQU8sR0FBVyxFQUFFLE1BQWMsRUFBRSxZQUFxQztRQUN2RSxPQUFPLElBQUksc0JBQXNCLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7MkJBL1BIO0VBcVBzQyxpQkFBaUI7U0FBMUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlQ2hlY2ssIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IGNvcmRvdmE6IGFueTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVhYmxlQnJvd3NlckJ1dHRvbiB7XHJcbiAgd3d3SW1hZ2U/OiBzdHJpbmc7XHJcbiAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgd3d3SW1hZ2VQcmVzc2VkPzogc3RyaW5nO1xyXG4gIGltYWdlUHJlc3NlZD86IHN0cmluZztcclxuICB3d3dJbWFnZURlbnNpdHk/OiBudW1iZXI7XHJcbiAgYWxpZ24/OiBzdHJpbmc7XHJcbiAgZXZlbnQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVhYmxlQnJvd3Nlck9wdGlvbnMge1xyXG4gIHN0YXR1c2Jhcj86IHtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbiAgfTtcclxuICB0b29sYmFyPzoge1xyXG4gICAgaGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgY29sb3I/OiBzdHJpbmc7XHJcbiAgICBpbWFnZT86IHN0cmluZztcclxuICB9O1xyXG4gIHRpdGxlPzoge1xyXG4gICAgY29sb3I/OiBzdHJpbmc7XHJcbiAgICBzdGF0aWNUZXh0Pzogc3RyaW5nO1xyXG4gICAgc2hvd1BhZ2VUaXRsZT86IGJvb2xlYW47XHJcbiAgfTtcclxuICBiYWNrQnV0dG9uPzogVGhlbWVhYmxlQnJvd3NlckJ1dHRvbjtcclxuICBmb3J3YXJkQnV0dG9uPzogVGhlbWVhYmxlQnJvd3NlckJ1dHRvbjtcclxuICBjbG9zZUJ1dHRvbj86IFRoZW1lYWJsZUJyb3dzZXJCdXR0b247XHJcbiAgY3VzdG9tQnV0dG9ucz86IFRoZW1lYWJsZUJyb3dzZXJCdXR0b25bXTtcclxuICBtZW51Pzoge1xyXG4gICAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBpbWFnZVByZXNzZWQ/OiBzdHJpbmc7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIGNhbmNlbD86IHN0cmluZztcclxuICAgIGFsaWduPzogc3RyaW5nO1xyXG4gICAgaXRlbXM/OiB7XHJcbiAgICAgIGV2ZW50OiBzdHJpbmc7XHJcbiAgICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICB9W107XHJcbiAgfTtcclxuICBiYWNrQnV0dG9uQ2FuQ2xvc2U/OiBib29sZWFuO1xyXG4gIGRpc2FibGVBbmltYXRpb24/OiBib29sZWFuO1xyXG5cclxuICAvLyBpbkFwcEJyb3dzZXIgb3B0aW9uc1xyXG4gIGxvY2F0aW9uPzogc3RyaW5nO1xyXG4gIGhpZGRlbj86IGJvb2xlYW47XHJcbiAgY2xlYXJjYWNoZT86IGJvb2xlYW47XHJcbiAgY2xlYXJzZXNzaW9uY2FjaGU/OiBib29sZWFuO1xyXG4gIHpvb20/OiBzdHJpbmc7XHJcbiAgaGFyZHdhcmViYWNrPzogc3RyaW5nO1xyXG4gIG1lZGlhUGxheWJhY2tSZXF1aXJlc1VzZXJBY3Rpb24/OiBzdHJpbmc7XHJcbiAgc2hvdWxkUGF1c2VPblN1c3BzZW5kPzogc3RyaW5nO1xyXG4gIGNsb3NlYnV0dG9uY2FwdGlvbj86IHN0cmluZztcclxuICBkaXNhbGxvd292ZXJzY3JvbGw/OiBzdHJpbmc7XHJcbiAgZW5hYmxlVmlld3BvcnRTY2FsZT86IHN0cmluZztcclxuICBhbGxvd0lubGluZU1lZGlhUGxheWJhY2s/OiBzdHJpbmc7XHJcbiAga2V5Ym9hcmREaXNwbGF5UmVxdWlyZXNVc2VyQWN0aW9uPzogc3RyaW5nO1xyXG4gIHN1cHByZXNzZXNJbmNyZW1lbnRhbFJlbmRlcmluZz86IHN0cmluZztcclxuICBwcmVzZW50YXRpb25zdHlsZT86IHN0cmluZztcclxuICB0cmFuc2l0aW9uc3R5bGU/OiBzdHJpbmc7XHJcbiAgdG9vbGJhcnBvc2l0aW9uPzogc3RyaW5nO1xyXG4gIGZ1bGxzY3JlZW4/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVGhlbWVhYmxlQnJvd3Nlck9iamVjdCB7XHJcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcsIHRhcmdldDogc3RyaW5nLCBzdHlsZU9wdGlvbnM6IFRoZW1lYWJsZUJyb3dzZXJPcHRpb25zKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IGNvcmRvdmEuVGhlbWVhYmxlQnJvd3Nlci5vcGVuKHVybCwgdGFyZ2V0LCBzdHlsZU9wdGlvbnMpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB3aW5kb3cub3Blbih1cmwpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAnTmF0aXZlOiBUaGVtZWFibGVCcm93c2VyIGlzIG5vdCBpbnN0YWxsZWQgb3IgeW91IGFyZSBydW5uaW5nIG9uIGEgYnJvd3Nlci4gRmFsbGluZyBiYWNrIHRvIHdpbmRvdy5vcGVuLidcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXlzIGFuIGJyb3dzZXIgd2luZG93IHRoYXQgd2FzIG9wZW5lZCBoaWRkZW4uIENhbGxpbmcgdGhpcyBoYXMgbm8gZWZmZWN0XHJcbiAgICogaWYgdGhlIGJyb3dzZXIgd2FzIGFscmVhZHkgdmlzaWJsZS5cclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNob3coKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBDbG9zZXMgdGhlIGJyb3dzZXIgd2luZG93LlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgY2xvc2UoKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBSZWxvYWRzIHRoZSBjdXJyZW50IHBhZ2VcclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHJlbG9hZCgpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluamVjdHMgSmF2YVNjcmlwdCBjb2RlIGludG8gdGhlIGJyb3dzZXIgd2luZG93LlxyXG4gICAqIEBwYXJhbSBzY3JpcHQgICAgRGV0YWlscyBvZiB0aGUgc2NyaXB0IHRvIHJ1biwgc3BlY2lmeWluZyBlaXRoZXIgYSBmaWxlIG9yIGNvZGUga2V5LlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSgpXHJcbiAgZXhlY3V0ZVNjcmlwdChzY3JpcHQ6IHsgZmlsZT86IHN0cmluZzsgY29kZT86IHN0cmluZyB9KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluamVjdHMgQ1NTIGludG8gdGhlIGJyb3dzZXIgd2luZG93LlxyXG4gICAqIEBwYXJhbSBjc3MgICAgICAgRGV0YWlscyBvZiB0aGUgc2NyaXB0IHRvIHJ1biwgc3BlY2lmeWluZyBlaXRoZXIgYSBmaWxlIG9yIGNvZGUga2V5LlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSgpXHJcbiAgaW5zZXJ0Q3NzKGNzczogeyBmaWxlPzogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBtZXRob2QgdGhhdCBhbGxvd3MgeW91IHRvIGxpc3RlbiB0byBldmVudHMgaGFwcGVuaW5nIGluIHRoZSBicm93c2VyLlxyXG4gICAqIEF2YWlsYWJsZSBldmVudHMgYXJlOiBgVGhlbWVhYmxlQnJvd3NlckVycm9yYCwgYFRoZW1lYWJsZUJyb3dzZXJXYXJuaW5nYCwgYGNyaXRpY2FsYCwgYGxvYWRmYWlsYCwgYHVuZXhwZWN0ZWRgLCBgdW5kZWZpbmVkYFxyXG4gICAqIEBwYXJhbSBldmVudCBFdmVudCBuYW1lXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBiYWNrIGFuIG9ic2VydmFibGUgdGhhdCB3aWxsIGxpc3RlbiB0byB0aGUgZXZlbnQgb24gc3Vic2NyaWJlLCBhbmQgd2lsbCBzdG9wIGxpc3RlbmluZyB0byB0aGUgZXZlbnQgb24gdW5zdWJzY3JpYmUuXHJcbiAgICovXHJcbiAgQEluc3RhbmNlQ2hlY2soeyBvYnNlcnZhYmxlOiB0cnVlIH0pXHJcbiAgb24oZXZlbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8YW55PihvYnNlcnZlciA9PiB7XHJcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcikpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBUaGVtZWFibGUgQnJvd3NlclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogSW4tYXBwIGJyb3dzZXIgdGhhdCBhbGxvd3Mgc3R5bGluZy5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgVGhlbWVhYmxlQnJvd3NlciwgVGhlbWVhYmxlQnJvd3Nlck9wdGlvbnMsIFRoZW1lYWJsZUJyb3dzZXJPYmplY3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RoZW1lYWJsZS1icm93c2VyL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdGhlbWVhYmxlQnJvd3NlcjogVGhlbWVhYmxlQnJvd3NlcikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiAvLyBjYW4gYWRkIG9wdGlvbnMgZnJvbSB0aGUgb3JpZ2luYWwgSW5BcHBCcm93c2VyIGluIGEgSmF2YVNjcmlwdCBvYmplY3QgZm9ybSAobm90IHN0cmluZylcclxuICogLy8gVGhpcyBvcHRpb25zIG9iamVjdCBhbHNvIHRha2VzIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBpbnRyb2R1Y2VkIGJ5IHRoZSBUaGVtZWFibGVCcm93c2VyIHBsdWdpblxyXG4gKiAvLyBUaGlzIGV4YW1wbGUgb25seSBzaG93cyB0aGUgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZvciBUaGVtZWFibGVCcm93c2VyXHJcbiAqIC8vIE5vdGUgdGhhdCB0aGF0IGBpbWFnZWAgYW5kIGBpbWFnZVByZXNzZWRgIHZhbHVlcyByZWZlciB0byByZXNvdXJjZXMgdGhhdCBhcmUgc3RvcmVkIGluIHlvdXIgYXBwXHJcbiAqIGNvbnN0IG9wdGlvbnM6IFRoZW1lYWJsZUJyb3dzZXJPcHRpb25zID0ge1xyXG4gKiAgICAgIHN0YXR1c2Jhcjoge1xyXG4gKiAgICAgICAgICBjb2xvcjogJyNmZmZmZmZmZidcclxuICogICAgICB9LFxyXG4gKiAgICAgIHRvb2xiYXI6IHtcclxuICogICAgICAgICAgaGVpZ2h0OiA0NCxcclxuICogICAgICAgICAgY29sb3I6ICcjZjBmMGYwZmYnXHJcbiAqICAgICAgfSxcclxuICogICAgICB0aXRsZToge1xyXG4gKiAgICAgICAgICBjb2xvcjogJyMwMDMyNjRmZicsXHJcbiAqICAgICAgICAgIHNob3dQYWdlVGl0bGU6IHRydWVcclxuICogICAgICB9LFxyXG4gKiAgICAgIGJhY2tCdXR0b246IHtcclxuICogICAgICAgICAgaW1hZ2U6ICdiYWNrJyxcclxuICogICAgICAgICAgaW1hZ2VQcmVzc2VkOiAnYmFja19wcmVzc2VkJyxcclxuICogICAgICAgICAgYWxpZ246ICdsZWZ0JyxcclxuICogICAgICAgICAgZXZlbnQ6ICdiYWNrUHJlc3NlZCdcclxuICogICAgICB9LFxyXG4gKiAgICAgIGZvcndhcmRCdXR0b246IHtcclxuICogICAgICAgICAgaW1hZ2U6ICdmb3J3YXJkJyxcclxuICogICAgICAgICAgaW1hZ2VQcmVzc2VkOiAnZm9yd2FyZF9wcmVzc2VkJyxcclxuICogICAgICAgICAgYWxpZ246ICdsZWZ0JyxcclxuICogICAgICAgICAgZXZlbnQ6ICdmb3J3YXJkUHJlc3NlZCdcclxuICogICAgICB9LFxyXG4gKiAgICAgIGNsb3NlQnV0dG9uOiB7XHJcbiAqICAgICAgICAgIGltYWdlOiAnY2xvc2UnLFxyXG4gKiAgICAgICAgICBpbWFnZVByZXNzZWQ6ICdjbG9zZV9wcmVzc2VkJyxcclxuICogICAgICAgICAgYWxpZ246ICdsZWZ0JyxcclxuICogICAgICAgICAgZXZlbnQ6ICdjbG9zZVByZXNzZWQnXHJcbiAqICAgICAgfSxcclxuICogICAgICBjdXN0b21CdXR0b25zOiBbXHJcbiAqICAgICAgICAgIHtcclxuICogICAgICAgICAgICAgIGltYWdlOiAnc2hhcmUnLFxyXG4gKiAgICAgICAgICAgICAgaW1hZ2VQcmVzc2VkOiAnc2hhcmVfcHJlc3NlZCcsXHJcbiAqICAgICAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcclxuICogICAgICAgICAgICAgIGV2ZW50OiAnc2hhcmVQcmVzc2VkJ1xyXG4gKiAgICAgICAgICB9XHJcbiAqICAgICAgXSxcclxuICogICAgICBtZW51OiB7XHJcbiAqICAgICAgICAgIGltYWdlOiAnbWVudScsXHJcbiAqICAgICAgICAgIGltYWdlUHJlc3NlZDogJ21lbnVfcHJlc3NlZCcsXHJcbiAqICAgICAgICAgIHRpdGxlOiAnVGVzdCcsXHJcbiAqICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbCcsXHJcbiAqICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxyXG4gKiAgICAgICAgICBpdGVtczogW1xyXG4gKiAgICAgICAgICAgICAge1xyXG4gKiAgICAgICAgICAgICAgICAgIGV2ZW50OiAnaGVsbG9QcmVzc2VkJyxcclxuICogICAgICAgICAgICAgICAgICBsYWJlbDogJ0hlbGxvIFdvcmxkISdcclxuICogICAgICAgICAgICAgIH0sXHJcbiAqICAgICAgICAgICAgICB7XHJcbiAqICAgICAgICAgICAgICAgICAgZXZlbnQ6ICd0ZXN0UHJlc3NlZCcsXHJcbiAqICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUZXN0ISdcclxuICogICAgICAgICAgICAgIH1cclxuICogICAgICAgICAgXVxyXG4gKiAgICAgIH0sXHJcbiAqICAgICAgYmFja0J1dHRvbkNhbkNsb3NlOiB0cnVlXHJcbiAqIH1cclxuICpcclxuICogY29uc3QgYnJvd3NlcjogVGhlbWVhYmxlQnJvd3Nlck9iamVjdCA9IHRoaXMudGhlbWVhYmxlQnJvd3Nlci5jcmVhdGUoJ2h0dHBzOi8vaW9uaWMuaW8nLCAnX2JsYW5rJywgb3B0aW9ucyk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBXZSBzdWdnZXN0IHRoYXQgeW91IHJlZmVyIHRvIHRoZSBwbHVnaW4ncyByZXBvc2l0b3J5IGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIG9uIHVzYWdlIHRoYXQgbWF5IG5vdCBiZSBjb3ZlcmVkIGhlcmUuXHJcbiAqIEBjbGFzc2VzXHJcbiAqIFRoZW1lYWJsZUJyb3dzZXJPYmplY3RcclxuICogQGludGVyZmFjZXNcclxuICogVGhlbWVhYmxlQnJvd3NlckJ1dHRvblxyXG4gKiBUaGVtZWFibGVCcm93c2VyT3B0aW9uc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1RoZW1lYWJsZUJyb3dzZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXRoZW1lYWJsZWJyb3dzZXInLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEuVGhlbWVhYmxlQnJvd3NlcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9pbml0aWFseHkvY29yZG92YS1wbHVnaW4tdGhlbWVhYmxlYnJvd3NlcicsXHJcbiAgcGxhdGZvcm1zOiBbXHJcbiAgICAnQW1hem9uIEZpcmUgT1MnLFxyXG4gICAgJ0FuZHJvaWQnLFxyXG4gICAgJ0JsYWNrYmVycnkgMTAnLFxyXG4gICAgJ0Jyb3dzZXInLFxyXG4gICAgJ0ZpcmVmb3hPUycsXHJcbiAgICAnaU9TJyxcclxuICAgICdVYnVudHUnLFxyXG4gICAgJ1dpbmRvd3MnLFxyXG4gICAgJ1dpbmRvd3MgUGhvbmUnLFxyXG4gIF0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRoZW1lYWJsZUJyb3dzZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIGJyb3dzZXIgaW5zdGFuY2VcclxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFVSTCB0byBvcGVuXHJcbiAgICogQHBhcmFtIHRhcmdldCB7c3RyaW5nfSBUYXJnZXRcclxuICAgKiBAcGFyYW0gc3R5bGVPcHRpb25zIHtUaGVtZWFibGVCcm93c2VyT3B0aW9uc30gVGhlbWVhYmxlIGJyb3dzZXIgb3B0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtUaGVtZWFibGVCcm93c2VyT2JqZWN0fVxyXG4gICAqL1xyXG4gIGNyZWF0ZSh1cmw6IHN0cmluZywgdGFyZ2V0OiBzdHJpbmcsIHN0eWxlT3B0aW9uczogVGhlbWVhYmxlQnJvd3Nlck9wdGlvbnMpOiBUaGVtZWFibGVCcm93c2VyT2JqZWN0IHtcclxuICAgIHJldHVybiBuZXcgVGhlbWVhYmxlQnJvd3Nlck9iamVjdCh1cmwsIHRhcmdldCwgc3R5bGVPcHRpb25zKTtcclxuICB9XHJcbn1cclxuIl19