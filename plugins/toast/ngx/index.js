import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toast.prototype.show = function (message, duration, position) { return cordova(this, "show", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.hide = function () { return cordova(this, "hide", {}, arguments); };
    Toast.prototype.showWithOptions = function (options) { return cordova(this, "showWithOptions", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.showShortTop = function (message) { return cordova(this, "showShortTop", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.showShortCenter = function (message) { return cordova(this, "showShortCenter", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.showShortBottom = function (message) { return cordova(this, "showShortBottom", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.showLongTop = function (message) { return cordova(this, "showLongTop", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.showLongCenter = function (message) { return cordova(this, "showLongCenter", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.showLongBottom = function (message) { return cordova(this, "showLongBottom", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.pluginName = "Toast";
    Toast.plugin = "cordova-plugin-x-toast";
    Toast.pluginRef = "plugins.toast";
    Toast.repo = "https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin";
    Toast.platforms = ["Android", "BlackBerry 10", "iOS", "Windows", "Windows Phone 8"];
    Toast = __decorate([
        Injectable()
    ], Toast);
    return Toast;
}(IonicNativePlugin));
export { Toast };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RvYXN0L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBb0VQLHlCQUFpQjs7OztJQWExQyxvQkFBSSxhQUFDLE9BQWUsRUFBRSxRQUFnQixFQUFFLFFBQWdCO0lBU3hELG9CQUFJO0lBbUJKLCtCQUFlLGFBQUMsT0FBcUI7SUFhckMsNEJBQVksYUFBQyxPQUFlO0lBYTVCLCtCQUFlLGFBQUMsT0FBZTtJQWEvQiwrQkFBZSxhQUFDLE9BQWU7SUFhL0IsMkJBQVcsYUFBQyxPQUFlO0lBYTNCLDhCQUFjLGFBQUMsT0FBZTtJQWE5Qiw4QkFBYyxhQUFDLE9BQWU7Ozs7OztJQXZIbkIsS0FBSztRQURqQixVQUFVLEVBQUU7T0FDQSxLQUFLO2dCQXRFbEI7RUFzRTJCLGlCQUFpQjtTQUEvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb2FzdE9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIE1lc3NhZ2UgdG8gZGlzcGxheVxyXG4gICAqL1xyXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRHVyYXRpb24gaW4gbXMgdG8gc2hvd1xyXG4gICAqL1xyXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFBvc2l0aW9uXHJcbiAgICovXHJcbiAgcG9zaXRpb24/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQWRkIG5lZ2F0aXZlIHZhbHVlIHRvIG1vdmUgaXQgdXAgYSBiaXRcclxuICAgKi9cclxuICBhZGRQaXhlbHNZPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFBhc3MgSlNPTiBvYmplY3QgdG8gYmUgc2VudCBiYWNrIGluIHN1Y2Nlc3MgY2FsbGJhY2tcclxuICAgKi9cclxuICBkYXRhPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIFN0eWxpbmdcclxuICAgKi9cclxuICBzdHlsaW5nPzoge1xyXG4gICAgb3BhY2l0eT86IG51bWJlcjtcclxuICAgIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcclxuICAgIHRleHRDb2xvcj86IHN0cmluZztcclxuICAgIGNvcm5lclJhZGl1cz86IG51bWJlcjtcclxuICAgIGhvcml6b250YWxQYWRkaW5nPzogbnVtYmVyO1xyXG4gICAgdmVydGljYWxQYWRkaW5nPzogbnVtYmVyO1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBUb2FzdFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBzaG93IGEgbmF0aXZlIFRvYXN0IChhIGxpdHRsZSB0ZXh0IHBvcHVwKSBvbiBpT1MsIEFuZHJvaWQgYW5kIFdQOC4gSXQncyBncmVhdCBmb3Igc2hvd2luZyBhIG5vbiBpbnRydXNpdmUgbmF0aXZlIG5vdGlmaWNhdGlvbiB3aGljaCBpcyBndWFyYW50ZWVkIGFsd2F5cyBpbiB0aGUgdmlld3BvcnQgb2YgdGhlIGJyb3dzZXIuXHJcbiAqXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4teC10b2FzdGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtUb2FzdCBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL1RvYXN0LVBob25lR2FwLVBsdWdpbikuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFRvYXN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS90b2FzdC9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvYXN0OiBUb2FzdCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLnRvYXN0LnNob3coYEknbSBhIHRvYXN0YCwgJzUwMDAnLCAnY2VudGVyJykuc3Vic2NyaWJlKFxyXG4gKiAgIHRvYXN0ID0+IHtcclxuICogICAgIGNvbnNvbGUubG9nKHRvYXN0KTtcclxuICogICB9XHJcbiAqICk7XHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBUb2FzdE9wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdUb2FzdCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4teC10b2FzdCcsXHJcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy50b2FzdCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9Ub2FzdC1QaG9uZUdhcC1QbHVnaW4nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0JsYWNrQmVycnkgMTAnLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRvYXN0IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFNob3cgYSBuYXRpdmUgdG9hc3QgZm9yIHRoZSBnaXZlbiBkdXJhdGlvbiBhdCB0aGUgc3BlY2lmaWVkIHBvc2l0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGR1cmF0aW9uICBEdXJhdGlvbiB0byBzaG93IHRoZSB0b2FzdCwgZWl0aGVyICdzaG9ydCcsICdsb25nJyBvciBhbnkgbnVtYmVyIG9mIG1pbGxpc2Vjb25kczogJzE1MDAnLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3NpdGlvbiAgV2hlcmUgdG8gcG9zaXRpb24gdGhlIHRvYXN0LCBlaXRoZXIgJ3RvcCcsICdjZW50ZXInLCBvciAnYm90dG9tJy5cclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAgUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgZmlyc3Qgb24gc3VjY2VzcyBhbmQgdGhlbiB3aGVuIHRhcHBlZCwgcmVqZWN0cyBvbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ2hpZGUnLFxyXG4gIH0pXHJcbiAgc2hvdyhtZXNzYWdlOiBzdHJpbmcsIGR1cmF0aW9uOiBzdHJpbmcsIHBvc2l0aW9uOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFudWFsbHkgaGlkZSBhbnkgY3VycmVudGx5IHZpc2libGUgdG9hc3QuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBoaWRlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93IGEgbmF0aXZlIHRvYXN0IHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAgT3B0aW9ucyBmb3Igc2hvd2luZyBhIHRvYXN0LiBBdmFpbGFibGUgb3B0aW9uczpcclxuICAgKiAgIG1lc3NhZ2UgIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkuXHJcbiAgICogICBkdXJhdGlvbiAgRHVyYXRpb24gdG8gc2hvdyB0aGUgdG9hc3QsIGVpdGhlciAnc2hvcnQnLCAnbG9uZycgb3IgYW55IG51bWJlciBvZiBtaWxsaXNlY29uZHM6ICcxNTAwJy5cclxuICAgKiAgIHBvc2l0aW9uICBXaGVyZSB0byBwb3NpdGlvbiB0aGUgdG9hc3QsIGVpdGhlciAndG9wJywgJ2NlbnRlcicsIG9yICdib3R0b20nLlxyXG4gICAqICAgYWRkUGl4ZWxzWSAgT2Zmc2V0IGluIHBpeGVscyB0byBtb3ZlIHRoZSB0b2FzdCB1cCBvciBkb3duIGZyb20gaXRzIHNwZWNpZmllZCBwb3NpdGlvbi5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59ICBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyBmaXJzdCBvbiBzdWNjZXNzIGFuZCB0aGVuIHdoZW4gdGFwcGVkLCByZWplY3RzIG9uIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAnaGlkZScsXHJcbiAgfSlcclxuICBzaG93V2l0aE9wdGlvbnMob3B0aW9uczogVG9hc3RPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3J0aGFuZCBmb3IgYHNob3cobWVzc2FnZSwgJ3Nob3J0JywgJ3RvcCcpYC5cclxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59ICBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyBmaXJzdCBvbiBzdWNjZXNzIGFuZCB0aGVuIHdoZW4gdGFwcGVkLCByZWplY3RzIG9uIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAnaGlkZScsXHJcbiAgfSlcclxuICBzaG93U2hvcnRUb3AobWVzc2FnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3J0aGFuZCBmb3IgYHNob3cobWVzc2FnZSwgJ3Nob3J0JywgJ2NlbnRlcicpYC5cclxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59ICBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyBmaXJzdCBvbiBzdWNjZXNzIGFuZCB0aGVuIHdoZW4gdGFwcGVkLCByZWplY3RzIG9uIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAnaGlkZScsXHJcbiAgfSlcclxuICBzaG93U2hvcnRDZW50ZXIobWVzc2FnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3J0aGFuZCBmb3IgYHNob3cobWVzc2FnZSwgJ3Nob3J0JywgJ2JvdHRvbScpYC5cclxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59ICBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyBmaXJzdCBvbiBzdWNjZXNzIGFuZCB0aGVuIHdoZW4gdGFwcGVkLCByZWplY3RzIG9uIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAnaGlkZScsXHJcbiAgfSlcclxuICBzaG93U2hvcnRCb3R0b20obWVzc2FnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3J0aGFuZCBmb3IgYHNob3cobWVzc2FnZSwgJ2xvbmcnLCAndG9wJylgLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIGZpcnN0IG9uIHN1Y2Nlc3MgYW5kIHRoZW4gd2hlbiB0YXBwZWQsIHJlamVjdHMgb24gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGNsZWFyRnVuY3Rpb246ICdoaWRlJyxcclxuICB9KVxyXG4gIHNob3dMb25nVG9wKG1lc3NhZ2U6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG9ydGhhbmQgZm9yIGBzaG93KG1lc3NhZ2UsICdsb25nJywgJ2NlbnRlcicpYC5cclxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59ICBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyBmaXJzdCBvbiBzdWNjZXNzIGFuZCB0aGVuIHdoZW4gdGFwcGVkLCByZWplY3RzIG9uIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAnaGlkZScsXHJcbiAgfSlcclxuICBzaG93TG9uZ0NlbnRlcihtZXNzYWdlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvcnRoYW5kIGZvciBgc2hvdyhtZXNzYWdlLCAnbG9uZycsICdib3R0b20nKWAuXHJcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAgUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgZmlyc3Qgb24gc3VjY2VzcyBhbmQgdGhlbiB3aGVuIHRhcHBlZCwgcmVqZWN0cyBvbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ2hpZGUnLFxyXG4gIH0pXHJcbiAgc2hvd0xvbmdCb3R0b20obWVzc2FnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19