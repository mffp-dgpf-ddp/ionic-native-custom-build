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
var UserAgentOriginal = /** @class */ (function (_super) {
    __extends(UserAgentOriginal, _super);
    function UserAgentOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserAgentOriginal.prototype.set = function (userAgent) { return cordova(this, "set", {}, arguments); };
    UserAgentOriginal.prototype.get = function () { return cordova(this, "get", {}, arguments); };
    UserAgentOriginal.prototype.reset = function () { return cordova(this, "reset", {}, arguments); };
    UserAgentOriginal.pluginName = "UserAgent";
    UserAgentOriginal.plugin = "cordova-plugin-useragent";
    UserAgentOriginal.pluginRef = "UserAgent";
    UserAgentOriginal.repo = "https://github.com/danielsogl/cordova-plugin-useragent";
    UserAgentOriginal.platforms = ["Android", "iOS"];
    return UserAgentOriginal;
}(IonicNativePlugin));
var UserAgent = new UserAgentOriginal();
export { UserAgent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3VzZXItYWdlbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBeUN6Qyw2QkFBaUI7Ozs7SUFPOUMsdUJBQUcsYUFBQyxTQUFpQjtJQVNyQix1QkFBRztJQVNILHlCQUFLOzs7Ozs7b0JBbkVQO0VBMEMrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgVXNlciBBZ2VudFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIFVzZXJBZ2VudCBwbHVnaW4gcHJvdmlkZXMgZnVuY3Rpb25zIHRvIHNldCB0aGUgSFRUUCAgdXNlci1hZ2VudCBoZWFkZXIuIEZvciBtb3JlIGluZm8gYWJvdXQgVXNlci1BZ2VudHMsIHBsZWFzZSBbc2VlIHRoZSBIVFRQIFVzZXItQWdlbnQgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9IZWFkZXJzL1VzZXItQWdlbnQpLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtdXNlcmFnZW50YC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1VzZXItQWdlbnQgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9Mb3Vpc1QvY29yZG92YS11c2VyYWdlbnQpLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBVc2VyQWdlbnQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3VzZXItYWdlbnQvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyQWdlbnQ6IFVzZXJBZ2VudCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLnVzZXJBZ2VudC5zZXQoJ01vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzUxLjAuMjcwNC4xMDMgU2FmYXJpLzUzNy4zNicpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiAqIHRoaXMudXNlckFnZW50LmdldCgpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiAqIHRoaXMudXNlckFnZW50LnJlc2V0KClcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1VzZXJBZ2VudCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdXNlcmFnZW50JyxcclxuICBwbHVnaW5SZWY6ICdVc2VyQWdlbnQnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsc29nbC9jb3Jkb3ZhLXBsdWdpbi11c2VyYWdlbnQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyQWdlbnQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlcyB0aGUgY3VycmVudCB1c2VyLWFnZW50IHRvIHRoZSBvbmUgc2VudCBieSBhcmd1bWVudC5cclxuICAgKiBAcGFyYW0gdXNlckFnZW50IHtzdHJpbmd9IFVzZXItQWdlbnRcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgdXNlci1hZ2VudCBjaGFuZ2VzXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldCh1c2VyQWdlbnQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHVzZXItYWdlbnQgc3RyaW5nLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSB1c2VyLWFnZW50IGlzIHJldHVybmVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgdXNlci1hZ2VudCBiYWNrIHRvIGRlZmF1bHRcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgdXNlci1hZ2VudCByZXNldHNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVzZXQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19