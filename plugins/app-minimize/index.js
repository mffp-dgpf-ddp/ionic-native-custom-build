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
var AppMinimizeOriginal = /** @class */ (function (_super) {
    __extends(AppMinimizeOriginal, _super);
    function AppMinimizeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppMinimizeOriginal.prototype.minimize = function () { return cordova(this, "minimize", {}, arguments); };
    AppMinimizeOriginal.pluginName = "AppMinimize";
    AppMinimizeOriginal.plugin = "cordova-plugin-appminimize";
    AppMinimizeOriginal.pluginRef = "plugins.appMinimize";
    AppMinimizeOriginal.repo = "https://github.com/tomloprod/cordova-plugin-appminimize";
    AppMinimizeOriginal.platforms = ["Android"];
    return AppMinimizeOriginal;
}(IonicNativePlugin));
var AppMinimize = new AppMinimizeOriginal();
export { AppMinimize };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1taW5pbWl6ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnQ3ZDLCtCQUFpQjs7OztJQU1oRCw4QkFBUTs7Ozs7O3NCQXRDVjtFQWdDaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEFwcCBNaW5pbWl6ZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQXBwTWluaW1pemUgaXMgYSBwbHVnaW4gdG8gbWluaW1pemUgdGhlIGFwcGxpY2F0aW9uIG9uIGFuZHJvaWQgZGV2aWNlc1xyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBQbGF0ZnJvbSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuICogaW1wb3J0IHsgQXBwTWluaW1pemUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FwcC1taW5pbWl6ZS9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHJpdmF0ZSBhcHBNaW5pbWl6ZTogQXBwTWluaW1pemUpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5wbGF0Zm9ybS5yZWdpc3RlckJhY2tCdXR0b25BY3Rpb24oKCkgPT4ge1xyXG4gKiAgICB0aGlzLmFwcE1pbmltaXplLm1pbmltaXplKCk7XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdBcHBNaW5pbWl6ZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBwbWluaW1pemUnLFxyXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuYXBwTWluaW1pemUnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdG9tbG9wcm9kL2NvcmRvdmEtcGx1Z2luLWFwcG1pbmltaXplJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBNaW5pbWl6ZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBNaW5pbWl6ZXMgdGhlIGFwcGxpY2F0aW9uXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBtaW5pbWl6ZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=