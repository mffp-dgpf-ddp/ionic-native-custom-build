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
import { IonicNativePlugin, cordova, cordovaInstance, checkAvailability } from '@ionic-native/core';
var PLNObject = /** @class */ (function () {
    function PLNObject(title, options) {
        if (checkAvailability(PhonegapLocalNotificationOriginal.pluginRef, null, PhonegapLocalNotificationOriginal.pluginName) === true) {
            this._objectInstance = new Notification(title, options);
        }
    }
    PLNObject.prototype.close = function () { return cordovaInstance(this, "close", { "sync": true }, arguments); };
    return PLNObject;
}());
export { PLNObject };
var PhonegapLocalNotificationOriginal = /** @class */ (function (_super) {
    __extends(PhonegapLocalNotificationOriginal, _super);
    function PhonegapLocalNotificationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * A global object that lets you interact with the Notification API.
     * @param title {string} Title of the local notification.
     * @param Options {LocalNotificationOptions} An object containing optional property/value pairs.
     * @returns {PLNObject}
     */
    PhonegapLocalNotificationOriginal.prototype.create = function (title, options) {
        return new PLNObject(title, options);
    };
    PhonegapLocalNotificationOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    PhonegapLocalNotificationOriginal.pluginName = "Phonegap Local Notifications";
    PhonegapLocalNotificationOriginal.plugin = "phonegap-plugin-local-notification";
    PhonegapLocalNotificationOriginal.pluginRef = "Notification";
    PhonegapLocalNotificationOriginal.repo = "https://github.com/phonegap/phonegap-plugin-local-notification";
    PhonegapLocalNotificationOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return PhonegapLocalNotificationOriginal;
}(IonicNativePlugin));
var PhonegapLocalNotification = new PhonegapLocalNotificationOriginal();
export { PhonegapLocalNotification };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bob25lZ2FwLWxvY2FsLW5vdGlmaWNhdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTywrQ0FBdUQsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFVMUcsbUJBQVksS0FBYSxFQUFFLE9BQWlDO1FBQzFELElBQUksaUJBQWlCLENBQUMseUJBQXlCLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDL0csSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDekQ7SUFDSCxDQUFDO0lBR0QseUJBQUs7b0JBbEJQOzs7O0lBMkYrQyw2Q0FBaUI7Ozs7SUFDOUQ7Ozs7O09BS0c7SUFDSCwwQ0FBTSxHQUFOLFVBQU8sS0FBYSxFQUFFLE9BQWlDO1FBQ3JELE9BQU8sSUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFPRCxxREFBaUI7Ozs7OztvQ0EzR25CO0VBMkYrQyxpQkFBaUI7U0FBbkQseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhSW5zdGFuY2UsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4sIGNoZWNrQXZhaWxhYmlsaXR5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmRlY2xhcmUgY29uc3QgTm90aWZpY2F0aW9uOiBhbnk7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBMTk9iamVjdCB7XHJcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgb3B0aW9uczogTG9jYWxOb3RpZmljYXRpb25PcHRpb25zKSB7XHJcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoUGhvbmVnYXBMb2NhbE5vdGlmaWNhdGlvbi5wbHVnaW5SZWYsIG51bGwsIFBob25lZ2FwTG9jYWxOb3RpZmljYXRpb24ucGx1Z2luTmFtZSkgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSBuZXcgTm90aWZpY2F0aW9uKHRpdGxlLCBvcHRpb25zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgY2xvc2UoKTogdm9pZCB7fVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsTm90aWZpY2F0aW9uT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgZGlyZWN0aW9uIG9mIHRoZSBub3RpZmljYXRpb24uIE9uZSBvZiBcImF1dG9cIiwgXCJsdHJcIiBvciBcInJ0bFwiXHJcbiAgICovXHJcbiAgZGlyPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiAgU2V0cyB0aGUgbGFuZ3VhZ2Ugb2YgdGhlIG5vdGlmaWNhdGlvblxyXG4gICAqL1xyXG4gIGxhbmc/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGJvZHkgb2YgdGhlIG5vdGlmaWNhdGlvblxyXG4gICAqL1xyXG4gIGJvZHk/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGlkZW50aWZ5aW5nIHRhZyBvZiB0aGUgbm90aWZpY2F0aW9uXHJcbiAgICovXHJcbiAgdGFnPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBpY29uIG9mIHRoZSBub3RpZmljYXRpb25cclxuICAgKi9cclxuICBpY29uPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgUGhvbmVnYXAgTG9jYWwgTm90aWZpY2F0aW9uXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGUgTG9jYWwgTm90aWZpY2F0aW9uIHBsdWdpbiBnaXZlcyBkZXZlbG9wZXJzIHRoZSBhYmlsaXR5IHRvIHBvc3Qgbm90aWZpY2F0aW9ucyBmcm9tIHRoZWlyIGFwcCB0aGF0IHNob3cgdXAgaW4gdGhlIGRldmljZeKAmXMgbm90aWZpY2F0aW9uIGFyZWEuXHJcbiAqIFRoZSBBUEkgZm9yIHRoZSBsb2NhbCBub3RpZmljYXRpb24gcGx1Z2luIGZvbGxvd3MgdGhlIFczQyBXZWIgTm90aWZpY2F0aW9ucyBzcGVjaWZpY2F0aW9uOiBodHRwczovL3d3dy53My5vcmcvVFIvbm90aWZpY2F0aW9ucy9cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYFxyXG4gKiBpbXBvcnQgeyBQaG9uZWdhcExvY2FsTm90aWZpY2F0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9waG9uZWdhcC1sb2NhbC1ub3RpZmljYXRpb24vbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhbE5vdGlmaWNhdGlvbjogUGhvbmVnYXBMb2NhbE5vdGlmaWNhdGlvbikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmxvY2FsTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbihcclxuICogICAocGVybWlzc2lvbikgPT4ge1xyXG4gKiAgICAgaWYgKHBlcm1pc3Npb24gPT09ICdncmFudGVkJykge1xyXG4gKlxyXG4gKiAgICAgICAvLyBDcmVhdGUgdGhlIG5vdGlmaWNhdGlvblxyXG4gKiAgICAgICB0aGlzLmxvY2FsTm90aWZpY2F0aW9uLmNyZWF0ZSgnTXkgVGl0bGUnLCB7XHJcbiAqICAgICAgICAgdGFnOiAnbWVzc2FnZTEnLFxyXG4gKiAgICAgICAgIGJvZHk6ICdNeSBib2R5JyxcclxuICogICAgICAgICBpY29uOiAnYXNzZXRzL2ljb24vZmF2aWNvbi5pY28nXHJcbiAqICAgICAgIH0pO1xyXG4gKlxyXG4gKiAgICAgfVxyXG4gKiAgIH1cclxuICogKTtcclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIExvY2FsTm90aWZpY2F0aW9uT3B0aW9uc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1Bob25lZ2FwIExvY2FsIE5vdGlmaWNhdGlvbnMnLFxyXG4gIHBsdWdpbjogJ3Bob25lZ2FwLXBsdWdpbi1sb2NhbC1ub3RpZmljYXRpb24nLFxyXG4gIHBsdWdpblJlZjogJ05vdGlmaWNhdGlvbicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9waG9uZWdhcC9waG9uZWdhcC1wbHVnaW4tbG9jYWwtbm90aWZpY2F0aW9uJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBob25lZ2FwTG9jYWxOb3RpZmljYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQSBnbG9iYWwgb2JqZWN0IHRoYXQgbGV0cyB5b3UgaW50ZXJhY3Qgd2l0aCB0aGUgTm90aWZpY2F0aW9uIEFQSS5cclxuICAgKiBAcGFyYW0gdGl0bGUge3N0cmluZ30gVGl0bGUgb2YgdGhlIGxvY2FsIG5vdGlmaWNhdGlvbi5cclxuICAgKiBAcGFyYW0gT3B0aW9ucyB7TG9jYWxOb3RpZmljYXRpb25PcHRpb25zfSBBbiBvYmplY3QgY29udGFpbmluZyBvcHRpb25hbCBwcm9wZXJ0eS92YWx1ZSBwYWlycy5cclxuICAgKiBAcmV0dXJucyB7UExOT2JqZWN0fVxyXG4gICAqL1xyXG4gIGNyZWF0ZSh0aXRsZTogc3RyaW5nLCBvcHRpb25zOiBMb2NhbE5vdGlmaWNhdGlvbk9wdGlvbnMpIHtcclxuICAgIHJldHVybiBuZXcgUExOT2JqZWN0KHRpdGxlLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlcXVlc3RzIHBlcm1pc3Npb24gZnJvbSB0aGUgdXNlciB0byBzaG93IGEgbG9jYWwgbm90aWZpY2F0aW9uLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==