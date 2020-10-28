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
var FirebaseCrashOriginal = /** @class */ (function (_super) {
    __extends(FirebaseCrashOriginal, _super);
    function FirebaseCrashOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseCrashOriginal.prototype.log = function (message) { return cordova(this, "log", { "sync": true }, arguments); };
    FirebaseCrashOriginal.prototype.logError = function (message) { return cordova(this, "logError", { "sync": true }, arguments); };
    FirebaseCrashOriginal.prototype.setUserId = function (userId) { return cordova(this, "setUserId", { "sync": true }, arguments); };
    FirebaseCrashOriginal.pluginName = "FirebaseCrash";
    FirebaseCrashOriginal.plugin = "cordova-plugin-firebase-crash";
    FirebaseCrashOriginal.pluginRef = "cordova.plugins.firebase.crashlytics";
    FirebaseCrashOriginal.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-crash";
    FirebaseCrashOriginal.platforms = ["Android", "iOS"];
    return FirebaseCrashOriginal;
}(IonicNativePlugin));
var FirebaseCrash = new FirebaseCrashOriginal();
export { FirebaseCrash };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlLWNyYXNoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTZCckMsaUNBQWlCOzs7O0lBUWxELDJCQUFHLGFBQUMsT0FBZTtJQVduQixnQ0FBUSxhQUFDLE9BQWU7SUFXeEIsaUNBQVMsYUFBQyxNQUFjOzs7Ozs7d0JBNUQxQjtFQThCbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEZpcmViYXNlQ3Jhc2hcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGJyaW5ncyBjcmFzaCByZXBvcnRpbmcgZnJvbSBHb29nbGUgRmlyZWJhc2UgdG8geW91ciBDb3Jkb3ZhIHByb2plY3QhIEFuZHJvaWQgYW5kIGlPUyBzdXBwb3J0ZWQuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEZpcmViYXNlQ3Jhc2ggfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZpcmViYXNlLWNyYXNoJztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZUNyYXNoOiBGaXJlYmFzZUNyYXNoKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuZmlyZWJhc2VDcmFzaC5zZXRVc2VySWQoJzEyMzQ1Njc4OScpO1xyXG4gKiB0aGlzLmZpcmViYXNlQ3Jhc2gubG9nKCdtZXNzYWdlJyk7XHJcbiAqIHRoaXMuZmlyZWJhc2VDcmFzaC5sb2dFcnJvcignbm9uIGZhdGFsIGV4Y2VwdGlvbicpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdGaXJlYmFzZUNyYXNoJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1jcmFzaCcsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmZpcmViYXNlLmNyYXNobHl0aWNzJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NoZW1lcmlzdWsvY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtY3Jhc2gnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZUNyYXNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIEFkZCBsb2dnaW5nIHRoYXQgd2lsbCBiZSBzZW50IHdpdGggeW91ciBjcmFzaCBkYXRhIGluIGNhc2Ugb2YgYXBwIGNyYXNoLlxyXG4gICAqIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2NyYXNobHl0aWNzL2N1c3RvbWl6ZS1jcmFzaC1yZXBvcnRzP2F1dGh1c2VyPTAjYWRkX2N1c3RvbV9sb2dzXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgbG9nKG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2cgbm9uLWZhdGFsIGV4Y2VwdGlvbnMgaW4gYWRkaXRpb24gdG8gYXV0b21hdGljYWxseSByZXBvcnRlZCBhcHAgY3Jhc2hlcy5cclxuICAgKiBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9jcmFzaGx5dGljcy9jdXN0b21pemUtY3Jhc2gtcmVwb3J0cz9hdXRodXNlcj0wI2xvZ19ub24tZmF0YWxfZXhjZXB0aW9uc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGxvZ0Vycm9yKG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSB1c2VyIGlkZW50aWZpZXIgcHJvcGVydHkgZm9yIGNyYXNobHl0aWNzIHJlcG9ydGluZy5cclxuICAgKiBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9jcmFzaGx5dGljcy9jdXN0b21pemUtY3Jhc2gtcmVwb3J0cz9hdXRodXNlcj0wI3NldF91c2VyX2lkc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgdmFsdWUgdG8gc2V0IHRoZSB1c2VySWRcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==