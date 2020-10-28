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
var InsomniaOriginal = /** @class */ (function (_super) {
    __extends(InsomniaOriginal, _super);
    function InsomniaOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InsomniaOriginal.prototype.keepAwake = function () { return cordova(this, "keepAwake", {}, arguments); };
    InsomniaOriginal.prototype.allowSleepAgain = function () { return cordova(this, "allowSleepAgain", {}, arguments); };
    InsomniaOriginal.pluginName = "Insomnia";
    InsomniaOriginal.plugin = "cordova-plugin-insomnia";
    InsomniaOriginal.pluginRef = "plugins.insomnia";
    InsomniaOriginal.repo = "https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin";
    InsomniaOriginal.platforms = ["Android", "Browser", "Firefox OS", "iOS", "Windows", "Windows Phone 8"];
    return InsomniaOriginal;
}(IonicNativePlugin));
var Insomnia = new InsomniaOriginal();
export { Insomnia };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luc29tbmlhL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXFDMUMsNEJBQWlCOzs7O0lBTTdDLDRCQUFTO0lBU1Qsa0NBQWU7Ozs7OzttQkFyRGpCO0VBc0M4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgSW5zb21uaWFcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFByZXZlbnQgdGhlIHNjcmVlbiBvZiB0aGUgbW9iaWxlIGRldmljZSBmcm9tIGZhbGxpbmcgYXNsZWVwLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBJbnNvbW5pYSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW5zb21uaWEvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpbnNvbW5pYTogSW5zb21uaWEpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5pbnNvbW5pYS5rZWVwQXdha2UoKVxyXG4gKiAgIC50aGVuKFxyXG4gKiAgICAgKCkgPT4gY29uc29sZS5sb2coJ3N1Y2Nlc3MnKSxcclxuICogICAgICgpID0+IGNvbnNvbGUubG9nKCdlcnJvcicpXHJcbiAqICAgKTtcclxuICpcclxuICogdGhpcy5pbnNvbW5pYS5hbGxvd1NsZWVwQWdhaW4oKVxyXG4gKiAgIC50aGVuKFxyXG4gKiAgICAgKCkgPT4gY29uc29sZS5sb2coJ3N1Y2Nlc3MnKSxcclxuICogICAgICgpID0+IGNvbnNvbGUubG9nKCdlcnJvcicpXHJcbiAqICAgKTtcclxuICogYGBgXHJcbiAqXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSW5zb21uaWEnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWluc29tbmlhJyxcclxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmluc29tbmlhJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL0luc29tbmlhLVBob25lR2FwLVBsdWdpbicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdGaXJlZm94IE9TJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUgOCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbnNvbW5pYSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBLZWVwcyBhd2FrZSB0aGUgYXBwbGljYXRpb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBrZWVwQXdha2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbG93cyB0aGUgYXBwbGljYXRpb24gdG8gc2xlZXAgYWdhaW5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBhbGxvd1NsZWVwQWdhaW4oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19