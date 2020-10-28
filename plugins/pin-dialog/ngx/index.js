import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var PinDialog = /** @class */ (function (_super) {
    __extends(PinDialog, _super);
    function PinDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PinDialog.prototype.prompt = function (message, title, buttons) { return cordova(this, "prompt", { "successIndex": 1, "errorIndex": 4 }, arguments); };
    PinDialog.pluginName = "PinDialog";
    PinDialog.plugin = "cordova-plugin-pin-dialog";
    PinDialog.pluginRef = "plugins.pinDialog";
    PinDialog.repo = "https://github.com/Paldom/PinDialog";
    PinDialog.platforms = ["Android", "iOS"];
    PinDialog = __decorate([
        Injectable()
    ], PinDialog);
    return PinDialog;
}(IonicNativePlugin));
export { PinDialog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bpbi1kaWFsb2cvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBcUN6Qyw2QkFBaUI7Ozs7SUFZOUMsMEJBQU0sYUFBQyxPQUFlLEVBQUUsS0FBYSxFQUFFLE9BQWlCOzs7Ozs7SUFaN0MsU0FBUztRQURyQixVQUFVLEVBQUU7T0FDQSxTQUFTO29CQXRDdEI7RUFzQytCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBQaW4gRGlhbG9nXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBQaG9uZUdhcCBudW1lcmljIHBhc3N3b3JkIGRpYWxvZyBwbHVnaW4gZm9yIEFuZHJvaWQgYW5kIGlPUy5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1waW4tZGlhbG9nYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1BpbiBEaWFsb2cgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9QYWxkb20vUGluRGlhbG9nKS5cclxuICpcclxuICpcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgUGluRGlhbG9nIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9waW4tZGlhbG9nL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcGluRGlhbG9nOiBQaW5EaWFsb2cpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5waW5EaWFsb2cucHJvbXB0KCdFbnRlciB5b3VyIFBJTicsICdWZXJpZnkgUElOJywgWydPSycsICdDYW5jZWwnXSlcclxuICogICAudGhlbihcclxuICogICAgIChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gKiAgICAgICBpZiAocmVzdWx0LmJ1dHRvbkluZGV4ID09IDEpIGNvbnNvbGUubG9nKCdVc2VyIGNsaWNrZWQgT0ssIHZhbHVlIGlzOiAnLCByZXN1bHQuaW5wdXQxKTtcclxuICogICAgICAgZWxzZSBpZihyZXN1bHQuYnV0dG9uSW5kZXggPT0gMikgY29uc29sZS5sb2coJ1VzZXIgY2FuY2VsbGVkJyk7XHJcbiAqICAgICB9XHJcbiAqICAgKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnUGluRGlhbG9nJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1waW4tZGlhbG9nJyxcclxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLnBpbkRpYWxvZycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9QYWxkb20vUGluRGlhbG9nJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGluRGlhbG9nIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFNob3cgcGluIGRpYWxvZ1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIE1lc3NhZ2UgdG8gc2hvdyB0aGUgdXNlclxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSBUaXRsZSBvZiB0aGUgZGlhbG9nXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gYnV0dG9ucyBCdXR0b25zIHRvIHNob3dcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IGJ1dHRvbkluZGV4OiBudW1iZXIsIGlucHV0MTogc3RyaW5nIH0+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN1Y2Nlc3NJbmRleDogMSxcclxuICAgIGVycm9ySW5kZXg6IDQsIC8vIG5vIGVycm9yIGNhbGxiYWNrXHJcbiAgfSlcclxuICBwcm9tcHQobWVzc2FnZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBidXR0b25zOiBzdHJpbmdbXSk6IFByb21pc2U8eyBidXR0b25JbmRleDogbnVtYmVyOyBpbnB1dDE6IHN0cmluZyB9PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==