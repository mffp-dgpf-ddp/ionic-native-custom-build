import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var SpinnerDialog = /** @class */ (function (_super) {
    __extends(SpinnerDialog, _super);
    function SpinnerDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpinnerDialog.prototype.show = function (title, message, cancelCallback, iOSOptions) { return cordova(this, "show", { "sync": true }, arguments); };
    SpinnerDialog.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    SpinnerDialog.pluginName = "SpinnerDialog";
    SpinnerDialog.plugin = "cordova-plugin-native-spinner";
    SpinnerDialog.pluginRef = "SpinnerDialog";
    SpinnerDialog.repo = "https://github.com/greybax/cordova-plugin-native-spinner";
    SpinnerDialog.platforms = ["Android", "iOS", "Windows Phone 8", "Windows"];
    SpinnerDialog = __decorate([
        Injectable()
    ], SpinnerDialog);
    return SpinnerDialog;
}(IonicNativePlugin));
export { SpinnerDialog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NwaW5uZXItZGlhbG9nL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXNEckMsaUNBQWlCOzs7O0lBV2xELDRCQUFJLGFBQUMsS0FBYyxFQUFFLE9BQWdCLEVBQUUsY0FBb0IsRUFBRSxVQUFvQztJQVFqRyw0QkFBSTs7Ozs7O0lBbkJPLGFBQWE7UUFEekIsVUFBVSxFQUFFO09BQ0EsYUFBYTt3QkF2RDFCO0VBdURtQyxpQkFBaUI7U0FBdkMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNwaW5uZXJEaWFsb2dJT1NPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBPcGFjaXR5IG9mIHRoZSBvdmVybGF5LCBiZXR3ZWVuIDAgKHRyYW5zcGFyZW50KSBhbmQgMSAob3BhcXVlKS4gRGVmYXVsdDogMC4zNVxyXG4gICAqL1xyXG4gIG92ZXJsYXlPcGFjaXR5PzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBSZWQgY29tcG9uZW50IG9mIHRoZSB0ZXh0IGNvbG9yLCBiZXR3ZWVuIDAgYW5kIDEuIERlZmF1bHQ6IDFcclxuICAgKi9cclxuICB0ZXh0Q29sb3JSZWQ/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdyZWVuIGNvbXBvbmVudCBvZiB0aGUgdGV4dCBjb2xvciwgYmV0d2VlbiAwIGFuZCAxLiBEZWZhdWx0OiAxXHJcbiAgICovXHJcbiAgdGV4dENvbG9yR3JlZW4/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJsdWUgY29tcG9uZW50IG9mIHRoZSB0ZXh0IGNvbG9yLCBiZXR3ZWVuIDAgYW5kIDEuIERlZmF1bHQ6IDFcclxuICAgKi9cclxuICB0ZXh0Q29sb3JCbHVlPzogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgU3Bpbm5lciBEaWFsb2dcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENvcmRvdmEgcGx1Z2luIGZvciBzaG93aW5nIGEgbmF0aXZlIHNwaW5uZXIgYmFzZWQgb24gUGFsZG9tL1NwaW5uZXJEaWFsb2cuXHJcbiAqXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tbmF0aXZlLXNwaW5uZXJgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbU3Bpbm5lciBEaWFsb2cgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9ncmV5YmF4L2NvcmRvdmEtcGx1Z2luLW5hdGl2ZS1zcGlubmVyKS5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgU3Bpbm5lckRpYWxvZyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3Bpbm5lci1kaWFsb2cvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzcGlubmVyRGlhbG9nOiBTcGlubmVyRGlhbG9nKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuc3Bpbm5lckRpYWxvZy5zaG93KCk7XHJcbiAqXHJcbiAqIHRoaXMuc3Bpbm5lckRpYWxvZy5oaWRlKCk7XHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBTcGlubmVyRGlhbG9nSU9TT3B0aW9uc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1NwaW5uZXJEaWFsb2cnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5hdGl2ZS1zcGlubmVyJyxcclxuICBwbHVnaW5SZWY6ICdTcGlubmVyRGlhbG9nJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyZXliYXgvY29yZG92YS1wbHVnaW4tbmF0aXZlLXNwaW5uZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTcGlubmVyRGlhbG9nIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFNob3dzIHRoZSBzcGlubmVyIGRpYWxvZ1xyXG4gICAqIEBwYXJhbSB0aXRsZSB7c3RyaW5nfSBTcGlubmVyIHRpdGxlIChzaG93cyBvbiBBbmRyb2lkIG9ubHkpXHJcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gU3Bpbm5lciBtZXNzYWdlXHJcbiAgICogQHBhcmFtIGNhbmNlbENhbGxiYWNrIHtib29sZWFufGZ1bmN0aW9ufSBTZXQgdG8gdHJ1ZSB0byBzZXQgc3Bpbm5lciBub3QgY2FuY2VsYWJsZS4gT3IgcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgdXNlciBjYW5jZWxzIHRoZSBzcGlubmVyLlxyXG4gICAqIEBwYXJhbSBpT1NPcHRpb25zIHtvYmplY3R9IE9wdGlvbnMgZm9yIGlPUyBvbmx5XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIHNob3codGl0bGU/OiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcsIGNhbmNlbENhbGxiYWNrPzogYW55LCBpT1NPcHRpb25zPzogU3Bpbm5lckRpYWxvZ0lPU09wdGlvbnMpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpZGVzIHRoZSBzcGlubmVyIGRpYWxvZyBpZiB2aXNpYmxlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIGhpZGUoKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==