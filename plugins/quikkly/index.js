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
var QuikklyPluginOriginal = /** @class */ (function (_super) {
    __extends(QuikklyPluginOriginal, _super);
    function QuikklyPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuikklyPluginOriginal.prototype.openScanner = function () { return cordova(this, "openScanner", {}, arguments); };
    QuikklyPluginOriginal.pluginName = "QuikklyPlugin";
    QuikklyPluginOriginal.plugin = "cordova-plugin-quikkly";
    QuikklyPluginOriginal.pluginRef = "cordova.plugins.quikkly";
    QuikklyPluginOriginal.repo = "https://github.com/quikkly/cordova-plugin-quikkly.git";
    QuikklyPluginOriginal.platforms = ["Android", "iOS"];
    return QuikklyPluginOriginal;
}(IonicNativePlugin));
var QuikklyPlugin = new QuikklyPluginOriginal();
export { QuikklyPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3F1aWtrbHkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBZXJDLGlDQUFpQjs7OztJQUVsRCxtQ0FBVzs7Ozs7O3dCQWxCYjtFQWdCbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFF1aWtrbHlQbHVnaW5cclxuICogQGRlc2NyaXB0aW9uIGlvbmljIHdyYXBwZXIgZm9yIGNvcmRvdmEtcGx1Z2luLXF1aWtrbHlcclxuICogVXNlIHRoZSBxdWlra2x5IHNjYW5uZXIgaW4geW91ciBpb25pYyBhcHBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdRdWlra2x5UGx1Z2luJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1xdWlra2x5JyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMucXVpa2tseScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9xdWlra2x5L2NvcmRvdmEtcGx1Z2luLXF1aWtrbHkuZ2l0JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUXVpa2tseVBsdWdpbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSgpXHJcbiAgb3BlblNjYW5uZXIoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=