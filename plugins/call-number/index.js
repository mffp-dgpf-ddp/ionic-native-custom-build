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
var CallNumberOriginal = /** @class */ (function (_super) {
    __extends(CallNumberOriginal, _super);
    function CallNumberOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallNumberOriginal.prototype.callNumber = function (numberToCall, bypassAppChooser) { return cordova(this, "callNumber", { "callbackOrder": "reverse" }, arguments); };
    CallNumberOriginal.prototype.isCallSupported = function () { return cordova(this, "isCallSupported", {}, arguments); };
    CallNumberOriginal.pluginName = "CallNumber";
    CallNumberOriginal.plugin = "call-number";
    CallNumberOriginal.pluginRef = "plugins.CallNumber";
    CallNumberOriginal.repo = "https://github.com/Rohfosho/CordovaCallNumberPlugin";
    CallNumberOriginal.platforms = ["Android", "iOS"];
    return CallNumberOriginal;
}(IonicNativePlugin));
var CallNumber = new CallNumberOriginal();
export { CallNumber };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbGwtbnVtYmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQStCeEMsOEJBQWlCOzs7O0lBVS9DLCtCQUFVLGFBQUMsWUFBb0IsRUFBRSxnQkFBeUI7SUFTMUQsb0NBQWU7Ozs7OztxQkFuRGpCO0VBZ0NnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgQ2FsbCBOdW1iZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENhbGwgYSBudW1iZXIgZGlyZWN0bHkgZnJvbSB5b3VyIENvcmRvdmEvSW9uaWMgYXBwbGljYXRpb24uXHJcbiAqICoqTk9URSoqOiBUaGUgaU9TIFNpbXVsYXRvciAoYW5kIG1heWJlIEFuZHJvaWQgU2ltdWxhdG9ycykgZG8gbm90IHByb3ZpZGUgYWNjZXNzIHRvIHRoZSBwaG9uZSBzdWJzeXN0ZW0uXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IENhbGxOdW1iZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbGwtbnVtYmVyL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FsbE51bWJlcjogQ2FsbE51bWJlcikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmNhbGxOdW1iZXIuY2FsbE51bWJlcihcIjE4MDAxMDEwMTAxXCIsIHRydWUpXHJcbiAqICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKCdMYXVuY2hlZCBkaWFsZXIhJywgcmVzKSlcclxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvciBsYXVuY2hpbmcgZGlhbGVyJywgZXJyKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0NhbGxOdW1iZXInLFxyXG4gIHBsdWdpbjogJ2NhbGwtbnVtYmVyJyxcclxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLkNhbGxOdW1iZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vUm9oZm9zaG8vQ29yZG92YUNhbGxOdW1iZXJQbHVnaW4nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYWxsTnVtYmVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENhbGxzIGEgcGhvbmUgbnVtYmVyXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG51bWJlclRvQ2FsbCBUaGUgcGhvbmUgbnVtYmVyIHRvIGNhbGwgYXMgYSBzdHJpbmdcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJ5cGFzc0FwcENob29zZXIgU2V0IHRvIHRydWUgdG8gYnlwYXNzIHRoZSBhcHAgY2hvb3NlciBhbmQgZ28gZGlyZWN0bHkgdG8gZGlhbGVyXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcclxuICB9KVxyXG4gIGNhbGxOdW1iZXIobnVtYmVyVG9DYWxsOiBzdHJpbmcsIGJ5cGFzc0FwcENob29zZXI6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgY2FsbCBmZWF0dXJlIGlzIGF2YWlsYWJsZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaXNDYWxsU3VwcG9ydGVkKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==