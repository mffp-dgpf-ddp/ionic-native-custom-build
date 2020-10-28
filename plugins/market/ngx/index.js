import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Market = /** @class */ (function (_super) {
    __extends(Market, _super);
    function Market() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Market.prototype.open = function (appId) { return cordova(this, "open", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    Market.prototype.search = function (keyword) { return cordova(this, "search", { "callbackStyle": "object", "successName": "success", "errorName": "failure", "platforms": ["Android"] }, arguments); };
    Market.pluginName = "Market";
    Market.plugin = "cordova-plugin-market";
    Market.pluginRef = "cordova.plugins.market";
    Market.repo = "https://github.com/xmartlabs/cordova-plugin-market";
    Market.platforms = ["Android", "iOS"];
    Market = __decorate([
        Injectable()
    ], Market);
    return Market;
}(IonicNativePlugin));
export { Market };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21hcmtldC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUEwQjVDLDBCQUFpQjs7OztJQVczQyxxQkFBSSxhQUFDLEtBQWE7SUFlbEIsdUJBQU0sYUFBQyxPQUFlOzs7Ozs7SUExQlgsTUFBTTtRQURsQixVQUFVLEVBQUU7T0FDQSxNQUFNO2lCQTNCbkI7RUEyQjRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuLyoqXHJcbiAqIEBuYW1lIE1hcmtldFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogT3BlbnMgYW4gYXBwJ3MgcGFnZSBpbiB0aGUgbWFya2V0IHBsYWNlIChHb29nbGUgUGxheSwgQXBwIFN0b3JlKVxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBNYXJrZXQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL21hcmtldC9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcmtldDogTWFya2V0KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMubWFya2V0Lm9wZW4oJ3lvdXIucGFja2FnZS5uYW1lJyk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ01hcmtldCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWFya2V0JyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMubWFya2V0JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3htYXJ0bGFicy9jb3Jkb3ZhLXBsdWdpbi1tYXJrZXQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNYXJrZXQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogT3BlbnMgYW4gYXBwIGluIEdvb2dsZSBQbGF5IC8gQXBwIFN0b3JlXHJcbiAgICogQHBhcmFtIGFwcElkIHtzdHJpbmd9IFBhY2thZ2UgbmFtZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcclxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXHJcbiAgICBlcnJvck5hbWU6ICdmYWlsdXJlJyxcclxuICB9KVxyXG4gIG9wZW4oYXBwSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZWFyY2ggYXBwcyBieSBrZXl3b3JkXHJcbiAgICogQHBhcmFtIGtleXdvcmQge3N0cmluZ30gS2V5d29yZFxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcclxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXHJcbiAgICBlcnJvck5hbWU6ICdmYWlsdXJlJyxcclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbiAgfSlcclxuICBzZWFyY2goa2V5d29yZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19