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
var TapticEngineOriginal = /** @class */ (function (_super) {
    __extends(TapticEngineOriginal, _super);
    function TapticEngineOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TapticEngineOriginal.prototype.selection = function () { return cordova(this, "selection", {}, arguments); };
    TapticEngineOriginal.prototype.notification = function (options) { return cordova(this, "notification", {}, arguments); };
    TapticEngineOriginal.prototype.impact = function (options) { return cordova(this, "impact", {}, arguments); };
    TapticEngineOriginal.prototype.gestureSelectionStart = function () { return cordova(this, "gestureSelectionStart", {}, arguments); };
    TapticEngineOriginal.prototype.gestureSelectionChanged = function () { return cordova(this, "gestureSelectionChanged", {}, arguments); };
    TapticEngineOriginal.prototype.gestureSelectionEnd = function () { return cordova(this, "gestureSelectionEnd", {}, arguments); };
    TapticEngineOriginal.pluginName = "TapticEngine";
    TapticEngineOriginal.plugin = "cordova-plugin-taptic-engine";
    TapticEngineOriginal.pluginRef = "TapticEngine";
    TapticEngineOriginal.repo = "https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine";
    TapticEngineOriginal.platforms = ["iOS"];
    return TapticEngineOriginal;
}(IonicNativePlugin));
var TapticEngine = new TapticEngineOriginal();
export { TapticEngine };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RhcHRpYy1lbmdpbmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBa0N0QyxnQ0FBaUI7Ozs7SUFNakQsZ0NBQVM7SUFXVCxtQ0FBWSxhQUFDLE9BQWtEO0lBVy9ELDZCQUFNLGFBQUMsT0FBZ0Q7SUFTdkQsNENBQXFCO0lBU3JCLDhDQUF1QjtJQVN2QiwwQ0FBbUI7Ozs7Ozt1QkF6RnJCO0VBa0NrQyxpQkFBaUI7U0FBdEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgVGFwdGljIEVuZ2luZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQW4gSW9uaWMgcGx1Z2luIHRvIHVzZSBUYXB0aWMgRW5naW5lIEFQSSBvbiBpUGhvbmUgNywgNyBQbHVzIG9yIG5ld2VyLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBUYXB0aWNFbmdpbmUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RhcHRpYy1lbmdpbmUvbmd4JztcclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFwdGljOiBUYXB0aWNFbmdpbmUpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy50YXB0aWMuc2VsZWN0aW9uKCk7XHJcbiAqXHJcbiAqIHRoaXMudGFwdGljLm5vdGlmaWNhdGlvbigpO1xyXG4gKlxyXG4gKiB0aGlzLnRhcHRpYy5pbXBhY3QoKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnVGFwdGljRW5naW5lJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi10YXB0aWMtZW5naW5lJyxcclxuICBwbHVnaW5SZWY6ICdUYXB0aWNFbmdpbmUnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vY29yZG92YS1wbHVnaW4tdGFwdGljLWVuZ2luZScsXHJcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUYXB0aWNFbmdpbmUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVXNlIHNlbGVjdGlvbiBmZWVkYmFjayBnZW5lcmF0b3JzIHRvIGluZGljYXRlIGEgY2hhbmdlIGluIHNlbGVjdGlvbi5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3MgYW5kIHJlamVjdHMgb24gZXJyb3JcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2VsZWN0aW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2UgdGhpcyB0byBpbmRpY2F0ZSBzdWNjZXNzL2ZhaWx1cmUvd2FybmluZyB0byB0aGUgdXNlci5cclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7T2JqZWN0fSBzaG91bGQgYmUgb2YgdGhlIHR5cGUgeyB0eXBlOiAnc3VjY2VzcycgfSAob3IgJ3dhcm5pbmcnLydlcnJvcicpXHJcbiAgICogQHBhcmFtIHsnc3VjY2VzcycgfCAnd2FybmluZycgfCAnZXJyb3InfSBvcHRpb25zLnR5cGVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3MgYW5kIHJlamVjdHMgb24gZXJyb3JcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbm90aWZpY2F0aW9uKG9wdGlvbnM6IHsgdHlwZTogJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyB9KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0aGlzIHRvIGluZGljYXRlIHN1Y2Nlc3MvZmFpbHVyZS93YXJuaW5nIHRvIHRoZSB1c2VyLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IHNob3VsZCBiZSBvZiB0aGUgdHlwZSB7IHN0eWxlOiAnbGlnaHQnIH0gKG9yICdtZWRpdW0nLydoZWF2eScpXHJcbiAgICogQHBhcmFtIHsnbGlnaHQnIHwgJ21lZGl1bScgfCAnaGVhdnknfSBvcHRpb25zLnR5cGVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3MgYW5kIHJlamVjdHMgb24gZXJyb3JcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaW1wYWN0KG9wdGlvbnM6IHsgc3R5bGU6ICdsaWdodCcgfCAnbWVkaXVtJyB8ICdoZWF2eScgfSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUZWxsIHRoZSB0YXB0aWMgZW5naW5lIHRoYXQgYSBnZXN0dXJlIGZvciBhIHNlbGVjdGlvbiBjaGFuZ2UgaXMgc3RhcnRpbmcuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2VzdHVyZVNlbGVjdGlvblN0YXJ0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUZWxsIHRoZSB0YXB0aWMgZW5naW5lIHRoYXQgYSBzZWxlY3Rpb24gY2hhbmdlZCBkdXJpbmcgYSBnZXN0dXJlLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdlc3R1cmVTZWxlY3Rpb25DaGFuZ2VkKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUZWxsIHRoZSB0YXB0aWMgZW5naW5lIHdlIGFyZSBkb25lIHdpdGggYSBnZXN0dXJlLiBUaGlzIG5lZWRzIHRvIGJlIGNhbGxlZCBsZXN0IHJlc291cmNlcyBhcmUgbm90IHByb3Blcmx5IHJlY3ljbGVkLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdlc3R1cmVTZWxlY3Rpb25FbmQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19