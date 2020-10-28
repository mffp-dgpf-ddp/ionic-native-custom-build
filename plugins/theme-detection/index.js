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
var ThemeDetectionOriginal = /** @class */ (function (_super) {
    __extends(ThemeDetectionOriginal, _super);
    function ThemeDetectionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeDetectionOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    ThemeDetectionOriginal.prototype.isDarkModeEnabled = function () { return cordova(this, "isDarkModeEnabled", {}, arguments); };
    ThemeDetectionOriginal.pluginName = "ThemeDetection";
    ThemeDetectionOriginal.plugin = "cordova-plugin-theme-detection";
    ThemeDetectionOriginal.pluginRef = "cordova.plugins.ThemeDetection";
    ThemeDetectionOriginal.repo = "https://github.com/mariusbackes/cordova-plugin-theme-detection";
    ThemeDetectionOriginal.install = "cordova plugin add cordova-plugin-theme-detection";
    ThemeDetectionOriginal.installVariables = [];
    ThemeDetectionOriginal.platforms = ["iOS", "Android"];
    return ThemeDetectionOriginal;
}(IonicNativePlugin));
var ThemeDetection = new ThemeDetectionOriginal();
export { ThemeDetection };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RoZW1lLWRldGVjdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnRHBDLGtDQUFpQjs7OztJQU9uRCxvQ0FBVztJQVVYLDBDQUFpQjs7Ozs7Ozs7eUJBbEVuQjtFQWlEb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaGVtZURldGVjdGlvblJlc3BvbnNlIHtcclxuICAvLyBCb29sZWFuIHZhbHVlIGFib3V0IHRoZSBzdGF0dXMgb2YgdGhlIHJlcXVlc3RcclxuICB2YWx1ZTogYm9vbGVhbjtcclxuXHJcbiAgLy8gTWVzc2FnZSBmb3IgcmVhZGFibGUgdXNhZ2VcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAYmV0YVxyXG4gKiBAbmFtZSBUaGVtZSBEZXRlY3Rpb25cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENvcmRvdmEgcGx1Z2luIHRvIGRldGVjdCB3aGV0aGVyIGRhcmsgbW9kZSBpcyBlbmFibGVkIG9yIG5vdFxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBUaGVtZURldGVjdGlvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdGhlbWUtZGV0ZWN0aW9uJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0aGVtZURldGVjdGlvbjogVGhlbWVEZXRlY3Rpb24pIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy50aGVtZURldGVjdGlvbi5pc0F2YWlsYWJsZSgpXHJcbiAqICAgLnRoZW4oKHJlczogVGhlbWVEZXRlY3Rpb25SZXNwb25zZSkgPT4ge1xyXG4gKiAgICAgIGlmKHJlcy52YWx1ZSkge1xyXG4gKiAgICAgICAgdGhpcy50aGVtZURldGVjdGlvbi5pc0RhcmtNb2RlRW5hYmxlZCgpLnRoZW4oKHJlczogVGhlbWVEZXRlY3Rpb25SZXNwb25zZSkgPT4ge1xyXG4gKiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gKiAgICAgICAgfSlcclxuICogICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKiAgICAgIH1cclxuICogICB9KVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdUaGVtZURldGVjdGlvbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdGhlbWUtZGV0ZWN0aW9uJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuVGhlbWVEZXRlY3Rpb24nLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWFyaXVzYmFja2VzL2NvcmRvdmEtcGx1Z2luLXRoZW1lLWRldGVjdGlvbicsXHJcbiAgaW5zdGFsbDogJ2NvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi10aGVtZS1kZXRlY3Rpb24nLFxyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLFxyXG4gIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUaGVtZURldGVjdGlvbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8VGhlbWVEZXRlY3Rpb25SZXNwb25zZT59XHJcbiAgICogIFJldHVybnMgYSBwcm9taXNlIHdpdGggYW4gb2JqZWN0IHRoYXQgaGFzIGEgYm9vbGVhbiBwcm9wZXJ0eSB3aGljaCBnaXZlcyBpbmZvcm1hdGlvbiBpZiB0aGUgZGV0ZWN0aW9uIGlzIGF2YWlsYWJsZSBvciBub3RcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaXNBdmFpbGFibGUoKTogUHJvbWlzZTxUaGVtZURldGVjdGlvblJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8VGhlbWVEZXRlY3Rpb25SZXNwb25zZT59XHJcbiAgICogIFJldHVybnMgYSBwcm9taXNlIHdpdGggYW4gb2JqZWN0IHRoYXQgaGFzIGEgYm9vbGVhbiBwcm9wZXJ0eSB3aGljaCBnaXZlcyBpbmZvcm1hdGlvbiBpZiBkYXJrIG1vZGUgaXMgZW5hYmxlZCBvciBub3RcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaXNEYXJrTW9kZUVuYWJsZWQoKTogUHJvbWlzZTxUaGVtZURldGVjdGlvblJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==