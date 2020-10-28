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
import { IonicNativePlugin, cordova, checkAvailability, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import { Observable, merge } from 'rxjs';
export var Connection;
(function (Connection) {
    Connection[Connection["UNKNOWN"] = 0] = "UNKNOWN";
    Connection[Connection["ETHERNET"] = 1] = "ETHERNET";
    Connection[Connection["WIFI"] = 2] = "WIFI";
    Connection[Connection["CELL_2G"] = 3] = "CELL_2G";
    Connection[Connection["CELL_3G"] = 4] = "CELL_3G";
    Connection[Connection["CELL_4G"] = 5] = "CELL_4G";
    Connection[Connection["CELL"] = 6] = "CELL";
    Connection[Connection["NONE"] = 7] = "NONE";
})(Connection || (Connection = {}));
var NetworkOriginal = /** @class */ (function (_super) {
    __extends(NetworkOriginal, _super);
    function NetworkOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constants for possible connection types
         */
        _this.Connection = {
            UNKNOWN: 'unknown',
            ETHERNET: 'ethernet',
            WIFI: 'wifi',
            CELL_2G: '2g',
            CELL_3G: '3g',
            CELL_4G: '4g',
            CELL: 'cellular',
            NONE: 'none',
        };
        return _this;
    }
    NetworkOriginal.prototype.onChange = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return merge(_this.onConnect(), _this.onDisconnect());
            }
        })();
    };
    NetworkOriginal.prototype.onDisconnect = function () { return cordova(this, "onDisconnect", { "eventObservable": true, "event": "offline", "element": "document" }, arguments); };
    NetworkOriginal.prototype.onConnect = function () { return cordova(this, "onConnect", { "eventObservable": true, "event": "online", "element": "document" }, arguments); };
    Object.defineProperty(NetworkOriginal.prototype, "type", {
        get: function () { return cordovaPropertyGet(this, "type"); },
        set: function (value) { cordovaPropertySet(this, "type", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetworkOriginal.prototype, "downlinkMax", {
        get: function () { return cordovaPropertyGet(this, "downlinkMax"); },
        set: function (value) { cordovaPropertySet(this, "downlinkMax", value); },
        enumerable: true,
        configurable: true
    });
    NetworkOriginal.pluginName = "Network";
    NetworkOriginal.plugin = "cordova-plugin-network-information";
    NetworkOriginal.pluginRef = "navigator.connection";
    NetworkOriginal.repo = "https://github.com/apache/cordova-plugin-network-information";
    NetworkOriginal.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    return NetworkOriginal;
}(IonicNativePlugin));
var Network = new NetworkOriginal();
export { Network };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25ldHdvcmsvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8seUZBQXFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJekMsTUFBTSxDQUFOLElBQVksVUFTWDtBQVRELFdBQVksVUFBVTtJQUNwQixpREFBVyxDQUFBO0lBQ1gsbURBQVEsQ0FBQTtJQUNSLDJDQUFJLENBQUE7SUFDSixpREFBTyxDQUFBO0lBQ1AsaURBQU8sQ0FBQTtJQUNQLGlEQUFPLENBQUE7SUFDUCwyQ0FBSSxDQUFBO0lBQ0osMkNBQUksQ0FBQTtBQUNOLENBQUMsRUFUVyxVQUFVLEtBQVYsVUFBVSxRQVNyQjs7SUFxRDRCLDJCQUFpQjs7O1FBQzVDOztXQUVHO1FBQ0gsZ0JBQVUsR0FBRztZQUNYLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLFVBQVU7WUFDaEIsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDOzs7SUFtQkYsMEJBQVE7OzttREFBb0I7Z0JBQzFCLE9BQU8sS0FBSyxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQzthQUNyRDs7O0lBV0QsOEJBQVk7SUFhWiwyQkFBUzswQkF2Q1UseUJBQUk7Ozs7OzswQkFNSixnQ0FBVzs7Ozs7Ozs7Ozs7a0JBN0ZoQztFQW9FNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFDaGVjaywgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgbWVyZ2UgfSBmcm9tICdyeGpzJztcclxuXHJcbmRlY2xhcmUgY29uc3QgbmF2aWdhdG9yOiBhbnk7XHJcblxyXG5leHBvcnQgZW51bSBDb25uZWN0aW9uIHtcclxuICBVTktOT1dOID0gMCxcclxuICBFVEhFUk5FVCxcclxuICBXSUZJLFxyXG4gIENFTExfMkcsXHJcbiAgQ0VMTF8zRyxcclxuICBDRUxMXzRHLFxyXG4gIENFTEwsXHJcbiAgTk9ORSxcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIE5ldHdvcmtcclxuICogQHByZW1pZXIgbmV0d29yay1pbmZvcm1hdGlvblxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLW5ldHdvcmstaW5mb3JtYXRpb24uIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtOZXR3b3JrIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLW5ldHdvcmstaW5mb3JtYXRpb24pLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV0d29yazogTmV0d29yaykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3Rpb25cclxuICogbGV0IGRpc2Nvbm5lY3RTdWJzY3JpcHRpb24gPSB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICogICBjb25zb2xlLmxvZygnbmV0d29yayB3YXMgZGlzY29ubmVjdGVkIDotKCcpO1xyXG4gKiB9KTtcclxuICpcclxuICogLy8gc3RvcCBkaXNjb25uZWN0IHdhdGNoXHJcbiAqIGRpc2Nvbm5lY3RTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICpcclxuICpcclxuICogLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXHJcbiAqIGxldCBjb25uZWN0U3Vic2NyaXB0aW9uID0gdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAqICAgY29uc29sZS5sb2coJ25ldHdvcmsgY29ubmVjdGVkIScpO1xyXG4gKiAgIC8vIFdlIGp1c3QgZ290IGEgY29ubmVjdGlvbiBidXQgd2UgbmVlZCB0byB3YWl0IGJyaWVmbHlcclxuICogICAgLy8gYmVmb3JlIHdlIGRldGVybWluZSB0aGUgY29ubmVjdGlvbiB0eXBlLiBNaWdodCBuZWVkIHRvIHdhaXQuXHJcbiAqICAgLy8gcHJpb3IgdG8gZG9pbmcgYW55IGFwaSByZXF1ZXN0cyBhcyB3ZWxsLlxyXG4gKiAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gKiAgICAgaWYgKHRoaXMubmV0d29yay50eXBlID09PSAnd2lmaScpIHtcclxuICogICAgICAgY29uc29sZS5sb2coJ3dlIGdvdCBhIHdpZmkgY29ubmVjdGlvbiwgd29vaG9vIScpO1xyXG4gKiAgICAgfVxyXG4gKiAgIH0sIDMwMDApO1xyXG4gKiB9KTtcclxuICpcclxuICogLy8gc3RvcCBjb25uZWN0IHdhdGNoXHJcbiAqIGNvbm5lY3RTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICpcclxuICogYGBgXHJcbiAqIEBhZHZhbmNlZFxyXG4gKiBUaGUgYHR5cGVgIHByb3BlcnR5IHdpbGwgcmV0dXJuIG9uZSBvZiB0aGUgZm9sbG93aW5nIGNvbm5lY3Rpb24gdHlwZXM6IGB1bmtub3duYCwgYGV0aGVybmV0YCwgYHdpZmlgLCBgMmdgLCBgM2dgLCBgNGdgLCBgY2VsbHVsYXJgLCBgbm9uZWBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdOZXR3b3JrJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uZXR3b3JrLWluZm9ybWF0aW9uJyxcclxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuY29ubmVjdGlvbicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZXR3b3JrIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50cyBmb3IgcG9zc2libGUgY29ubmVjdGlvbiB0eXBlc1xyXG4gICAqL1xyXG4gIENvbm5lY3Rpb24gPSB7XHJcbiAgICBVTktOT1dOOiAndW5rbm93bicsXHJcbiAgICBFVEhFUk5FVDogJ2V0aGVybmV0JyxcclxuICAgIFdJRkk6ICd3aWZpJyxcclxuICAgIENFTExfMkc6ICcyZycsXHJcbiAgICBDRUxMXzNHOiAnM2cnLFxyXG4gICAgQ0VMTF80RzogJzRnJyxcclxuICAgIENFTEw6ICdjZWxsdWxhcicsXHJcbiAgICBOT05FOiAnbm9uZScsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29ubmVjdGlvbiB0eXBlXHJcbiAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSB0eXBlOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERvd25saW5rIE1heCBTcGVlZFxyXG4gICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgZG93bmxpbmtNYXg6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRvIHdhdGNoIGNvbm5lY3Rpb24gY2hhbmdlc1xyXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBvbkNoYW5nZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIG1lcmdlKHRoaXMub25Db25uZWN0KCksIHRoaXMub25EaXNjb25uZWN0KCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IG5vdGlmaWVkIHdoZW4gdGhlIGRldmljZSBnb2VzIG9mZmxpbmVcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgZXZlbnQ6ICdvZmZsaW5lJyxcclxuICAgIGVsZW1lbnQ6IGRvY3VtZW50LFxyXG4gIH0pXHJcbiAgb25EaXNjb25uZWN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgbm90aWZpZWQgd2hlbiB0aGUgZGV2aWNlIGdvZXMgb25saW5lXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGV2ZW50OiAnb25saW5lJyxcclxuICAgIGVsZW1lbnQ6IGRvY3VtZW50LFxyXG4gIH0pXHJcbiAgb25Db25uZWN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==