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
var SpinnerDialogOriginal = /** @class */ (function (_super) {
    __extends(SpinnerDialogOriginal, _super);
    function SpinnerDialogOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpinnerDialogOriginal.prototype.show = function (title, message, cancelCallback, iOSOptions) { return cordova(this, "show", { "sync": true }, arguments); };
    SpinnerDialogOriginal.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    SpinnerDialogOriginal.pluginName = "SpinnerDialog";
    SpinnerDialogOriginal.plugin = "cordova-plugin-native-spinner";
    SpinnerDialogOriginal.pluginRef = "SpinnerDialog";
    SpinnerDialogOriginal.repo = "https://github.com/greybax/cordova-plugin-native-spinner";
    SpinnerDialogOriginal.platforms = ["Android", "iOS", "Windows Phone 8", "Windows"];
    return SpinnerDialogOriginal;
}(IonicNativePlugin));
var SpinnerDialog = new SpinnerDialogOriginal();
export { SpinnerDialog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NwaW5uZXItZGlhbG9nL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXNEckMsaUNBQWlCOzs7O0lBV2xELDRCQUFJLGFBQUMsS0FBYyxFQUFFLE9BQWdCLEVBQUUsY0FBb0IsRUFBRSxVQUFvQztJQVFqRyw0QkFBSTs7Ozs7O3dCQTFFTjtFQXVEbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTcGlubmVyRGlhbG9nSU9TT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogT3BhY2l0eSBvZiB0aGUgb3ZlcmxheSwgYmV0d2VlbiAwICh0cmFuc3BhcmVudCkgYW5kIDEgKG9wYXF1ZSkuIERlZmF1bHQ6IDAuMzVcclxuICAgKi9cclxuICBvdmVybGF5T3BhY2l0eT86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVkIGNvbXBvbmVudCBvZiB0aGUgdGV4dCBjb2xvciwgYmV0d2VlbiAwIGFuZCAxLiBEZWZhdWx0OiAxXHJcbiAgICovXHJcbiAgdGV4dENvbG9yUmVkPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBHcmVlbiBjb21wb25lbnQgb2YgdGhlIHRleHQgY29sb3IsIGJldHdlZW4gMCBhbmQgMS4gRGVmYXVsdDogMVxyXG4gICAqL1xyXG4gIHRleHRDb2xvckdyZWVuPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBCbHVlIGNvbXBvbmVudCBvZiB0aGUgdGV4dCBjb2xvciwgYmV0d2VlbiAwIGFuZCAxLiBEZWZhdWx0OiAxXHJcbiAgICovXHJcbiAgdGV4dENvbG9yQmx1ZT86IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNwaW5uZXIgRGlhbG9nXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIHBsdWdpbiBmb3Igc2hvd2luZyBhIG5hdGl2ZSBzcGlubmVyIGJhc2VkIG9uIFBhbGRvbS9TcGlubmVyRGlhbG9nLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLW5hdGl2ZS1zcGlubmVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1NwaW5uZXIgRGlhbG9nIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vZ3JleWJheC9jb3Jkb3ZhLXBsdWdpbi1uYXRpdmUtc3Bpbm5lcikuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNwaW5uZXJEaWFsb2cgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwaW5uZXItZGlhbG9nL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3Bpbm5lckRpYWxvZzogU3Bpbm5lckRpYWxvZykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLnNwaW5uZXJEaWFsb2cuc2hvdygpO1xyXG4gKlxyXG4gKiB0aGlzLnNwaW5uZXJEaWFsb2cuaGlkZSgpO1xyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogU3Bpbm5lckRpYWxvZ0lPU09wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdTcGlubmVyRGlhbG9nJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uYXRpdmUtc3Bpbm5lcicsXHJcbiAgcGx1Z2luUmVmOiAnU3Bpbm5lckRpYWxvZycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ncmV5YmF4L2NvcmRvdmEtcGx1Z2luLW5hdGl2ZS1zcGlubmVyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSA4JywgJ1dpbmRvd3MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3Bpbm5lckRpYWxvZyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBTaG93cyB0aGUgc3Bpbm5lciBkaWFsb2dcclxuICAgKiBAcGFyYW0gdGl0bGUge3N0cmluZ30gU3Bpbm5lciB0aXRsZSAoc2hvd3Mgb24gQW5kcm9pZCBvbmx5KVxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IFNwaW5uZXIgbWVzc2FnZVxyXG4gICAqIEBwYXJhbSBjYW5jZWxDYWxsYmFjayB7Ym9vbGVhbnxmdW5jdGlvbn0gU2V0IHRvIHRydWUgdG8gc2V0IHNwaW5uZXIgbm90IGNhbmNlbGFibGUuIE9yIHByb3ZpZGUgYSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIHVzZXIgY2FuY2VscyB0aGUgc3Bpbm5lci5cclxuICAgKiBAcGFyYW0gaU9TT3B0aW9ucyB7b2JqZWN0fSBPcHRpb25zIGZvciBpT1Mgb25seVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBzaG93KHRpdGxlPzogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nLCBjYW5jZWxDYWxsYmFjaz86IGFueSwgaU9TT3B0aW9ucz86IFNwaW5uZXJEaWFsb2dJT1NPcHRpb25zKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBIaWRlcyB0aGUgc3Bpbm5lciBkaWFsb2cgaWYgdmlzaWJsZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBoaWRlKCk6IHZvaWQge31cclxufVxyXG4iXX0=