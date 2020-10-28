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
import { Observable } from 'rxjs';
var SafariViewControllerOriginal = /** @class */ (function (_super) {
    __extends(SafariViewControllerOriginal, _super);
    function SafariViewControllerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafariViewControllerOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    SafariViewControllerOriginal.prototype.show = function (options) { return cordova(this, "show", { "successIndex": 1, "errorIndex": 2, "observable": true }, arguments); };
    SafariViewControllerOriginal.prototype.hide = function () { return cordova(this, "hide", {}, arguments); };
    SafariViewControllerOriginal.prototype.connectToService = function () { return cordova(this, "connectToService", {}, arguments); };
    SafariViewControllerOriginal.prototype.warmUp = function () { return cordova(this, "warmUp", {}, arguments); };
    SafariViewControllerOriginal.prototype.mayLaunchUrl = function (url) { return cordova(this, "mayLaunchUrl", {}, arguments); };
    SafariViewControllerOriginal.pluginName = "SafariViewController";
    SafariViewControllerOriginal.plugin = "cordova-plugin-safariviewcontroller";
    SafariViewControllerOriginal.pluginRef = "SafariViewController";
    SafariViewControllerOriginal.repo = "https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller";
    SafariViewControllerOriginal.platforms = ["Android", "iOS"];
    return SafariViewControllerOriginal;
}(IonicNativePlugin));
var SafariViewController = new SafariViewControllerOriginal();
export { SafariViewController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NhZmFyaS12aWV3LWNvbnRyb2xsZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFtRVEsd0NBQWlCOzs7O0lBTXpELDBDQUFXO0lBY1gsbUNBQUksYUFBQyxPQUFxQztJQVExQyxtQ0FBSTtJQVNKLCtDQUFnQjtJQVNoQixxQ0FBTTtJQVVOLDJDQUFZLGFBQUMsR0FBVzs7Ozs7OytCQTdIMUI7RUFxRTBDLGlCQUFpQjtTQUE5QyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNhZmFyaVZpZXdDb250cm9sbGVyT3B0aW9ucyB7XHJcbiAgYW5pbWF0ZWQ/OiBib29sZWFuO1xyXG4gIGJhckNvbG9yPzogc3RyaW5nO1xyXG4gIGNvbnRyb2xUaW50Q29sb3I/OiBzdHJpbmc7XHJcbiAgZW50ZXJSZWFkZXJNb2RlSWZBdmFpbGFibGU/OiBib29sZWFuO1xyXG4gIGhpZGRlbj86IGJvb2xlYW47XHJcbiAgc2hvd0RlZmF1bHRTaGFyZU1lbnVJdGVtPzogYm9vbGVhbjtcclxuICB0aW50Q29sb3I/OiBzdHJpbmc7XHJcbiAgdG9vbGJhckNvbG9yPzogc3RyaW5nO1xyXG4gIHRyYW5zaXRpb24/OiBzdHJpbmc7XHJcbiAgdXJsPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgU2FmYXJpIFZpZXcgQ29udHJvbGxlclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogRm9yIGRpc3BsYXlpbmcgcmVhZC1vbmx5IHdlYiBjb250ZW50LlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLXNhZmFyaXZpZXdjb250cm9sbGVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1NhZmFyaSBWaWV3IENvbnRyb2xsZXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi1zYWZhcml2aWV3Y29udHJvbGxlcikuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNhZmFyaVZpZXdDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zYWZhcmktdmlldy1jb250cm9sbGVyL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FmYXJpVmlld0NvbnRyb2xsZXI6IFNhZmFyaVZpZXdDb250cm9sbGVyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuc2FmYXJpVmlld0NvbnRyb2xsZXIuaXNBdmFpbGFibGUoKVxyXG4gKiAgIC50aGVuKChhdmFpbGFibGU6IGJvb2xlYW4pID0+IHtcclxuICogICAgICAgaWYgKGF2YWlsYWJsZSkge1xyXG4gKlxyXG4gKiAgICAgICAgIHRoaXMuc2FmYXJpVmlld0NvbnRyb2xsZXIuc2hvdyh7XHJcbiAqICAgICAgICAgICB1cmw6ICdodHRwOi8vaW9uaWMuaW8nLFxyXG4gKiAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcclxuICogICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcclxuICogICAgICAgICAgIHRyYW5zaXRpb246ICdjdXJsJyxcclxuICogICAgICAgICAgIGVudGVyUmVhZGVyTW9kZUlmQXZhaWxhYmxlOiB0cnVlLFxyXG4gKiAgICAgICAgICAgdGludENvbG9yOiAnI2ZmMDAwMCdcclxuICogICAgICAgICB9KVxyXG4gKiAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XHJcbiAqICAgICAgICAgICAgIGlmKHJlc3VsdC5ldmVudCA9PT0gJ29wZW5lZCcpIGNvbnNvbGUubG9nKCdPcGVuZWQnKTtcclxuICogICAgICAgICAgICAgZWxzZSBpZihyZXN1bHQuZXZlbnQgPT09ICdsb2FkZWQnKSBjb25zb2xlLmxvZygnTG9hZGVkJyk7XHJcbiAqICAgICAgICAgICAgIGVsc2UgaWYocmVzdWx0LmV2ZW50ID09PSAnY2xvc2VkJykgY29uc29sZS5sb2coJ0Nsb3NlZCcpO1xyXG4gKiAgICAgICAgICAgfSxcclxuICogICAgICAgICAgIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gKiAgICAgICAgICk7XHJcbiAqXHJcbiAqICAgICAgIH0gZWxzZSB7XHJcbiAqICAgICAgICAgLy8gdXNlIGZhbGxiYWNrIGJyb3dzZXIsIGV4YW1wbGUgSW5BcHBCcm93c2VyXHJcbiAqICAgICAgIH1cclxuICogICAgIH1cclxuICogICApO1xyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogU2FmYXJpVmlld0NvbnRyb2xsZXJPcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnU2FmYXJpVmlld0NvbnRyb2xsZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNhZmFyaXZpZXdjb250cm9sbGVyJyxcclxuICBwbHVnaW5SZWY6ICdTYWZhcmlWaWV3Q29udHJvbGxlcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi1zYWZhcml2aWV3Y29udHJvbGxlcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNhZmFyaVZpZXdDb250cm9sbGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBTYWZhcmlWaWV3Q29udHJvbGxlciBpcyBhdmFpbGFibGVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaXNBdmFpbGFibGUoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93cyBTYWZhcmkgVmlldyBDb250cm9sbGVyXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge1NhZmFyaVZpZXdDb250cm9sbGVyT3B0aW9uc30gb3B0aW9uYWxcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN1Y2Nlc3NJbmRleDogMSxcclxuICAgIGVycm9ySW5kZXg6IDIsXHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgc2hvdyhvcHRpb25zPzogU2FmYXJpVmlld0NvbnRyb2xsZXJPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpZGVzIFNhZmFyaSBWaWV3IENvbnRyb2xsZXJcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaGlkZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZXMgdG8gY29ubmVjdCB0byB0aGUgIENocm9tZSdzIGN1c3RvbSB0YWJzIHNlcnZpY2UuIHlvdSBtdXN0IGNhbGwgdGhpcyBtZXRob2QgYmVmb3JlIGNhbGxpbmcgYW55IG9mIHRoZSBvdGhlciBtZXRob2RzIGxpc3RlZCBiZWxvdy5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjb25uZWN0VG9TZXJ2aWNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsIHRoaXMgbWV0aG9kIHdoZW5ldmVyIHRoZXJlJ3MgYSBjaGFuY2UgdGhlIHVzZXIgd2lsbCBvcGVuIGFuIGV4dGVybmFsIHVybC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB3YXJtVXAoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciBldmVuIGJldHRlciBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24sIGNhbGwgdGhpcyBtZXRob2RzIGlmIHRoZXJlJ3MgbW9yZSB0aGFuIGEgNTAlIGNoYW5jZSB0aGUgdXNlciB3aWxsIG9wZW4gYSBjZXJ0YWluIFVSTC5cclxuICAgKiBAcGFyYW0gdXJse3N0cmluZ31cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBtYXlMYXVuY2hVcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=