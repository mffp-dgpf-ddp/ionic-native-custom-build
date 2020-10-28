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
import { Observable } from 'rxjs';
var AppCenterPushOriginal = /** @class */ (function (_super) {
    __extends(AppCenterPushOriginal, _super);
    function AppCenterPushOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterPushOriginal.prototype.addEventListener = function (eventName) { return cordova(this, "addEventListener", { "observable": true, "clearFunction": "removeEventListener" }, arguments); };
    AppCenterPushOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AppCenterPushOriginal.prototype.setEnabled = function (shouldEnable) { return cordova(this, "setEnabled", {}, arguments); };
    AppCenterPushOriginal.pluginName = "AppCenterPush";
    AppCenterPushOriginal.plugin = "cordova-plugin-appcenter-push";
    AppCenterPushOriginal.pluginRef = "AppCenter.Push";
    AppCenterPushOriginal.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-push";
    AppCenterPushOriginal.platforms = ["Android", "iOS"];
    return AppCenterPushOriginal;
}(IonicNativePlugin));
var AppCenterPush = new AppCenterPushOriginal();
export { AppCenterPush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1jZW50ZXItcHVzaC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQWlDQyxpQ0FBaUI7Ozs7SUFVbEQsd0NBQWdCLGFBQUMsU0FBaUI7SUFRbEMsaUNBQVM7SUFVVCxrQ0FBVSxhQUFDLFlBQXFCOzs7Ozs7d0JBL0RsQztFQW1DbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQG5hbWUgQXBwIENlbnRlciBQdXNoXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2FwcGNlbnRlci9zZGsvcHVzaC9jb3Jkb3ZhXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEFwcENlbnRlclB1c2ggfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FwcC1jZW50ZXItcHVzaC9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcENlbnRlclB1c2g6IEFwcENlbnRlclB1c2gpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5hcHBDZW50ZXJQdXNoLnNldEVuYWJsZWQodHJ1ZSkudGhlbigoKSA9PiB7XHJcbiAqICAgIHRoaXMuYXBwQ2VudGVyUHVzaC5hZGRFdmVudExpc3RlbmVyKCdNeSBFdmVudCcpLnN1YnNjcmliZShwdXNoTm90aWZpY2F0aW9uID0+IHtcclxuICogICAgICAgIGNvbnNvbGUubG9nKCdSZWNpdmVkIHB1c2ggbm90aWZpY2F0aW9uJywgcHVzaE5vdGlmaWNhdGlvbik7XHJcbiAqICAgIH0pO1xyXG4gKiB9KTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQXBwQ2VudGVyUHVzaCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLXB1c2gnLFxyXG4gIHBsdWdpblJlZjogJ0FwcENlbnRlci5QdXNoJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9hcHBjZW50ZXItc2RrLWNvcmRvdmEvdHJlZS9tYXN0ZXIvY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLXB1c2gnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBDZW50ZXJQdXNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZSB0byBhbiBldmVudFxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZXZlbnROYW1lIEV2ZW50IG5hbWVcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcicsXHJcbiAgfSlcclxuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgQXBwIENlbnRlciBQdXNoIGlzIGVuYWJsZWRcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaXNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgQXBwIENlbnRlciBQdXNoIGF0IHJ1bnRpbWVcclxuICAgKiBAcGFyYW0gIHtib29sZWFufSBzaG91bGRFbmFibGUgU2V0IHZhbHVlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldEVuYWJsZWQoc2hvdWxkRW5hYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==