import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var NavigationBar = /** @class */ (function (_super) {
    __extends(NavigationBar, _super);
    function NavigationBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationBar.prototype.setUp = function (autohide) { return cordova(this, "setUp", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    NavigationBar.prototype.hideNavigationBar = function () { return cordova(this, "hideNavigationBar", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    NavigationBar.pluginName = "NavigationBar";
    NavigationBar.plugin = "cordova-plugin-navigationbar";
    NavigationBar.pluginRef = "navigationbar";
    NavigationBar.repo = "https://github.com/cranberrygame/cordova-plugin-navigationbar";
    NavigationBar.platforms = ["Android"];
    NavigationBar = __decorate([
        Injectable()
    ], NavigationBar);
    return NavigationBar;
}(IonicNativePlugin));
export { NavigationBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdmlnYXRpb24tYmFyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTRCckMsaUNBQWlCOzs7O0lBV2xELDZCQUFLLGFBQUMsUUFBa0I7SUFheEIseUNBQWlCOzs7Ozs7SUF4Qk4sYUFBYTtRQUR6QixVQUFVLEVBQUU7T0FDQSxhQUFhO3dCQTdCMUI7RUE2Qm1DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAYmV0YVxyXG4gKiBAbmFtZSBOYXZpZ2F0aW9uIEJhclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIE5hdmlnYXRpb25CYXIgcGx1Z2luIGFsbG93cyB5b3UgdG8gaGlkZSBhbmQgYXV0byBoaWRlIHRoZSBhbmRyb2lkIG5hdmlnYXRpb24gYmFyLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBOYXZpZ2F0aW9uQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uYXZpZ2F0aW9uLWJhci9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdmlnYXRpb25CYXI6IE5hdmlnYXRpb25CYXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogbGV0IGF1dG9IaWRlOiBib29sZWFuID0gdHJ1ZTtcclxuICogdGhpcy5uYXZpZ2F0aW9uQmFyLnNldFVwKGF1dG9IaWRlKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnTmF2aWdhdGlvbkJhcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmF2aWdhdGlvbmJhcicsXHJcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdGlvbmJhcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jcmFuYmVycnlnYW1lL2NvcmRvdmEtcGx1Z2luLW5hdmlnYXRpb25iYXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25CYXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogaGlkZSBhdXRvbWF0aWNhbGx5IChvciBub3QpIHRoZSBuYXZpZ2F0aW9uIGJhci5cclxuICAgKiBAcGFyYW0gYXV0b2hpZGUge2Jvb2xlYW59XHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxyXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzJyxcclxuICAgIGVycm9yTmFtZTogJ2ZhaWx1cmUnLFxyXG4gIH0pXHJcbiAgc2V0VXAoYXV0b2hpZGU/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpZGUgdGhlIG5hdmlnYXRpb24gYmFyLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcclxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXHJcbiAgICBlcnJvck5hbWU6ICdmYWlsdXJlJyxcclxuICB9KVxyXG4gIGhpZGVOYXZpZ2F0aW9uQmFyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==