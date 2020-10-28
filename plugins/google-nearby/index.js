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
var GoogleNearbyOriginal = /** @class */ (function (_super) {
    __extends(GoogleNearbyOriginal, _super);
    function GoogleNearbyOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleNearbyOriginal.prototype.publish = function (message) { return cordova(this, "publish", {}, arguments); };
    GoogleNearbyOriginal.prototype.subscribe = function () { return cordova(this, "subscribe", { "observable": true, "clearFunction": "unsubscribe" }, arguments); };
    GoogleNearbyOriginal.pluginName = "GoogleNearby";
    GoogleNearbyOriginal.plugin = "cordova-plugin-google-nearby";
    GoogleNearbyOriginal.pluginRef = "window.nearby";
    GoogleNearbyOriginal.repo = "https://github.com/hahahannes/cordova-plugin-google-nearby";
    GoogleNearbyOriginal.install = "ionic cordova plugin add cordova-plugin-google-nearby --variable API_KEY=\"123456789\"";
    GoogleNearbyOriginal.installVariables = ["API_KEY"];
    GoogleNearbyOriginal.platforms = ["Android"];
    return GoogleNearbyOriginal;
}(IonicNativePlugin));
var GoogleNearby = new GoogleNearbyOriginal();
export { GoogleNearby };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dvb2dsZS1uZWFyYnkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFpQ0EsZ0NBQWlCOzs7O0lBT2pELDhCQUFPLGFBQUMsT0FBZTtJQVl2QixnQ0FBUzs7Ozs7Ozs7dUJBdERYO0VBbUNrQyxpQkFBaUI7U0FBdEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBHb29nbGUgTmVhcmJ5XHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBhZGRzIHN1cHBvcnQgZm9yIHRoZSBHb29nbGUgTmVhcmJ5IE1lc3NhZ2VzIEFQSS5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgR29vZ2xlTmVhcmJ5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9nb29nbGUtbmVhcmJ5L25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZ29vZ2xlTmVhcmJ5OiBHb29nbGVOZWFyYnkpIHsgfVxyXG4gKlxyXG4gKiB0aGlzLmdvb2dsZU5lYXJieS5wdWJsaXNoKCdIZWxsbycpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiB0aGlzLmdvb2dsZU5lYXJieS5zdWJzY3JpYmUoKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnR29vZ2xlTmVhcmJ5JyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGUtbmVhcmJ5JyxcclxuICBwbHVnaW5SZWY6ICd3aW5kb3cubmVhcmJ5JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2hhaGFoYW5uZXMvY29yZG92YS1wbHVnaW4tZ29vZ2xlLW5lYXJieScsXHJcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nb29nbGUtbmVhcmJ5IC0tdmFyaWFibGUgQVBJX0tFWT1cIjEyMzQ1Njc4OVwiJyxcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FQSV9LRVknXSxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVOZWFyYnkgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogUHVibGlzaCBhIG1lc3NhZ2VcclxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBNZXNzYWdlIHRvIHB1Ymxpc2hcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgbWVzc2FnZSBnb3QgcHVibGlzaGVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHB1Ymxpc2gobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZSB0byByZWNlaXZlIG1lc3NhZ2VzXHJcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBlbWl0cyByZWNlaXZlZCBtZXNzYWdlc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAndW5zdWJzY3JpYmUnLFxyXG4gIH0pXHJcbiAgc3Vic2NyaWJlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==