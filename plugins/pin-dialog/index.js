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
var PinDialogOriginal = /** @class */ (function (_super) {
    __extends(PinDialogOriginal, _super);
    function PinDialogOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PinDialogOriginal.prototype.prompt = function (message, title, buttons) { return cordova(this, "prompt", { "successIndex": 1, "errorIndex": 4 }, arguments); };
    PinDialogOriginal.pluginName = "PinDialog";
    PinDialogOriginal.plugin = "cordova-plugin-pin-dialog";
    PinDialogOriginal.pluginRef = "plugins.pinDialog";
    PinDialogOriginal.repo = "https://github.com/Paldom/PinDialog";
    PinDialogOriginal.platforms = ["Android", "iOS"];
    return PinDialogOriginal;
}(IonicNativePlugin));
var PinDialog = new PinDialogOriginal();
export { PinDialog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bpbi1kaWFsb2cvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBcUN6Qyw2QkFBaUI7Ozs7SUFZOUMsMEJBQU0sYUFBQyxPQUFlLEVBQUUsS0FBYSxFQUFFLE9BQWlCOzs7Ozs7b0JBbEQxRDtFQXNDK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFBpbiBEaWFsb2dcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFBob25lR2FwIG51bWVyaWMgcGFzc3dvcmQgZGlhbG9nIHBsdWdpbiBmb3IgQW5kcm9pZCBhbmQgaU9TLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLXBpbi1kaWFsb2dgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbUGluIERpYWxvZyBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL1BhbGRvbS9QaW5EaWFsb2cpLlxyXG4gKlxyXG4gKlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBQaW5EaWFsb2cgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3Bpbi1kaWFsb2cvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBwaW5EaWFsb2c6IFBpbkRpYWxvZykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLnBpbkRpYWxvZy5wcm9tcHQoJ0VudGVyIHlvdXIgUElOJywgJ1ZlcmlmeSBQSU4nLCBbJ09LJywgJ0NhbmNlbCddKVxyXG4gKiAgIC50aGVuKFxyXG4gKiAgICAgKHJlc3VsdDogYW55KSA9PiB7XHJcbiAqICAgICAgIGlmIChyZXN1bHQuYnV0dG9uSW5kZXggPT0gMSkgY29uc29sZS5sb2coJ1VzZXIgY2xpY2tlZCBPSywgdmFsdWUgaXM6ICcsIHJlc3VsdC5pbnB1dDEpO1xyXG4gKiAgICAgICBlbHNlIGlmKHJlc3VsdC5idXR0b25JbmRleCA9PSAyKSBjb25zb2xlLmxvZygnVXNlciBjYW5jZWxsZWQnKTtcclxuICogICAgIH1cclxuICogICApO1xyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdQaW5EaWFsb2cnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXBpbi1kaWFsb2cnLFxyXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMucGluRGlhbG9nJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1BhbGRvbS9QaW5EaWFsb2cnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQaW5EaWFsb2cgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogU2hvdyBwaW4gZGlhbG9nXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgTWVzc2FnZSB0byBzaG93IHRoZSB1c2VyXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIFRpdGxlIG9mIHRoZSBkaWFsb2dcclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBidXR0b25zIEJ1dHRvbnMgdG8gc2hvd1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgYnV0dG9uSW5kZXg6IG51bWJlciwgaW5wdXQxOiBzdHJpbmcgfT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAxLFxyXG4gICAgZXJyb3JJbmRleDogNCwgLy8gbm8gZXJyb3IgY2FsbGJhY2tcclxuICB9KVxyXG4gIHByb21wdChtZXNzYWdlOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGJ1dHRvbnM6IHN0cmluZ1tdKTogUHJvbWlzZTx7IGJ1dHRvbkluZGV4OiBudW1iZXI7IGlucHV0MTogc3RyaW5nIH0+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19