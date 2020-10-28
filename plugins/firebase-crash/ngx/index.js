import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var FirebaseCrash = /** @class */ (function (_super) {
    __extends(FirebaseCrash, _super);
    function FirebaseCrash() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseCrash.prototype.log = function (message) { return cordova(this, "log", { "sync": true }, arguments); };
    FirebaseCrash.prototype.logError = function (message) { return cordova(this, "logError", { "sync": true }, arguments); };
    FirebaseCrash.prototype.setUserId = function (userId) { return cordova(this, "setUserId", { "sync": true }, arguments); };
    FirebaseCrash.pluginName = "FirebaseCrash";
    FirebaseCrash.plugin = "cordova-plugin-firebase-crash";
    FirebaseCrash.pluginRef = "cordova.plugins.firebase.crashlytics";
    FirebaseCrash.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-crash";
    FirebaseCrash.platforms = ["Android", "iOS"];
    FirebaseCrash = __decorate([
        Injectable()
    ], FirebaseCrash);
    return FirebaseCrash;
}(IonicNativePlugin));
export { FirebaseCrash };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlLWNyYXNoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTZCckMsaUNBQWlCOzs7O0lBUWxELDJCQUFHLGFBQUMsT0FBZTtJQVduQixnQ0FBUSxhQUFDLE9BQWU7SUFXeEIsaUNBQVMsYUFBQyxNQUFjOzs7Ozs7SUE5QmIsYUFBYTtRQUR6QixVQUFVLEVBQUU7T0FDQSxhQUFhO3dCQTlCMUI7RUE4Qm1DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBGaXJlYmFzZUNyYXNoXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBicmluZ3MgY3Jhc2ggcmVwb3J0aW5nIGZyb20gR29vZ2xlIEZpcmViYXNlIHRvIHlvdXIgQ29yZG92YSBwcm9qZWN0ISBBbmRyb2lkIGFuZCBpT1Mgc3VwcG9ydGVkLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBGaXJlYmFzZUNyYXNoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maXJlYmFzZS1jcmFzaCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VDcmFzaDogRmlyZWJhc2VDcmFzaCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmZpcmViYXNlQ3Jhc2guc2V0VXNlcklkKCcxMjM0NTY3ODknKTtcclxuICogdGhpcy5maXJlYmFzZUNyYXNoLmxvZygnbWVzc2FnZScpO1xyXG4gKiB0aGlzLmZpcmViYXNlQ3Jhc2gubG9nRXJyb3IoJ25vbiBmYXRhbCBleGNlcHRpb24nKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRmlyZWJhc2VDcmFzaCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtY3Jhc2gnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5maXJlYmFzZS5jcmFzaGx5dGljcycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaGVtZXJpc3VrL2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWNyYXNoJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VDcmFzaCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBBZGQgbG9nZ2luZyB0aGF0IHdpbGwgYmUgc2VudCB3aXRoIHlvdXIgY3Jhc2ggZGF0YSBpbiBjYXNlIG9mIGFwcCBjcmFzaC5cclxuICAgKiBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9jcmFzaGx5dGljcy9jdXN0b21pemUtY3Jhc2gtcmVwb3J0cz9hdXRodXNlcj0wI2FkZF9jdXN0b21fbG9nc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGxvZyhtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9nIG5vbi1mYXRhbCBleGNlcHRpb25zIGluIGFkZGl0aW9uIHRvIGF1dG9tYXRpY2FsbHkgcmVwb3J0ZWQgYXBwIGNyYXNoZXMuXHJcbiAgICogaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3MvY3Jhc2hseXRpY3MvY3VzdG9taXplLWNyYXNoLXJlcG9ydHM/YXV0aHVzZXI9MCNsb2dfbm9uLWZhdGFsX2V4Y2VwdGlvbnNcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBsb2dFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgdXNlciBpZGVudGlmaWVyIHByb3BlcnR5IGZvciBjcmFzaGx5dGljcyByZXBvcnRpbmcuXHJcbiAgICogaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3MvY3Jhc2hseXRpY3MvY3VzdG9taXplLWNyYXNoLXJlcG9ydHM/YXV0aHVzZXI9MCNzZXRfdXNlcl9pZHNcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIHZhbHVlIHRvIHNldCB0aGUgdXNlcklkXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzZXRVc2VySWQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=