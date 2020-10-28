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
var NetworkInterfaceOriginal = /** @class */ (function (_super) {
    __extends(NetworkInterfaceOriginal, _super);
    function NetworkInterfaceOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetworkInterfaceOriginal.prototype.getWiFiIPAddress = function () { return cordova(this, "getWiFiIPAddress", {}, arguments); };
    NetworkInterfaceOriginal.prototype.getCarrierIPAddress = function () { return cordova(this, "getCarrierIPAddress", {}, arguments); };
    NetworkInterfaceOriginal.prototype.getHttpProxyInformation = function (url) { return cordova(this, "getHttpProxyInformation", {}, arguments); };
    NetworkInterfaceOriginal.pluginName = "NetworkInterface";
    NetworkInterfaceOriginal.plugin = "cordova-plugin-networkinterface";
    NetworkInterfaceOriginal.pluginRef = "networkinterface";
    NetworkInterfaceOriginal.repo = "https://github.com/salbahra/cordova-plugin-networkinterface";
    NetworkInterfaceOriginal.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "Windows", "Windows Phone"];
    return NetworkInterfaceOriginal;
}(IonicNativePlugin));
var NetworkInterface = new NetworkInterfaceOriginal();
export { NetworkInterface };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25ldHdvcmstaW50ZXJmYWNlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW9DbEMsb0NBQWlCOzs7O0lBTXJELDJDQUFnQjtJQVNoQiw4Q0FBbUI7SUFVbkIsa0RBQXVCLGFBQUMsR0FBVzs7Ozs7OzJCQTlEckM7RUFxQ3NDLGlCQUFpQjtTQUExQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIE5ldHdvcmsgSW50ZXJmYWNlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBOZXR3b3JrIGludGVyZmFjZSBpbmZvcm1hdGlvbiBwbHVnaW4gZm9yIENvcmRvdmEvUGhvbmVHYXAgdGhhdCBzdXBwb3J0cyBBbmRyb2lkLCBCbGFja2JlcnJ5IDEwLCBCcm93c2VyLCBpT1MsIGFuZCBXaW5kb3dzIFBob25lIDguXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IE5ldHdvcmtJbnRlcmZhY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmstaW50ZXJmYWNlL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKCBwcml2YXRlIG5ldHdvcmtJbnRlcmZhY2U6IE5ldHdvcmtJbnRlcmZhY2UgKSB7XHJcbiAqXHJcbiAqICAgdGhpcy5uZXR3b3JrSW50ZXJmYWNlLmdldFdpRmlJUEFkZHJlc3MoKVxyXG4gKiAgICAgLnRoZW4oYWRkcmVzcyA9PiBjb25zb2xlLmluZm8oYElQOiAke2FkZHJlc3MuaXB9LCBTdWJuZXQ6ICR7YWRkcmVzcy5zdWJuZXR9YCkpXHJcbiAqICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGdldCBJUDogJHtlcnJvcn1gKSk7XHJcbiAqXHJcbiAqICAgdGhpcy5uZXR3b3JrSW50ZXJmYWNlLmdldENhcnJpZXJJUEFkZHJlc3MoKVxyXG4gKiAgICAgLnRoZW4oYWRkcmVzcyA9PiBjb25zb2xlLmluZm8oYElQOiAke2FkZHJlc3MuaXB9LCBTdWJuZXQ6ICR7YWRkcmVzcy5zdWJuZXR9YCkpXHJcbiAqICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGdldCBJUDogJHtlcnJvcn1gKSk7XHJcbiAqXHJcbiAqICAgY29uc3QgdXJsID0gJ3d3dy5naXRodWIuY29tJztcclxuICogICB0aGlzLm5ldHdvcmtJbnRlcmZhY2UuZ2V0SHR0cFByb3h5SW5mb3JtYXRpb24odXJsKVxyXG4gKiAgICAgLnRoZW4ocHJveHkgPT4gY29uc29sZS5pbmZvKGBUeXBlOiAke3Byb3h5LnR5cGV9LCBIb3N0OiAke3Byb3h5Lmhvc3R9LCBQb3J0OiAke3Byb3h5LnBvcnR9YCkpXHJcbiAqICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGdldCBwcm94eSBpbmZvOiAke2Vycm9yfWApKTtcclxuICogfVxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdOZXR3b3JrSW50ZXJmYWNlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uZXR3b3JraW50ZXJmYWNlJyxcclxuICBwbHVnaW5SZWY6ICduZXR3b3JraW50ZXJmYWNlJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3NhbGJhaHJhL2NvcmRvdmEtcGx1Z2luLW5ldHdvcmtpbnRlcmZhY2UnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0JsYWNrQmVycnkgMTAnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5ldHdvcmtJbnRlcmZhY2UgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgV2lGaSBJUCBhZGRyZXNzXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIElQIGFkZHJlc3MgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFdpRmlJUEFkZHJlc3MoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIHdpcmVsZXNzIGNhcnJpZXIgSVAgYWRkcmVzc1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBJUCBhZGRyZXNzIGluZm9ybWF0aW9uLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRDYXJyaWVySVBBZGRyZXNzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSByZWxldmFudCBwcm94aWVzIGZvciB0aGUgcGFzc2VkIFVSTCBpbiBvcmRlciBvZiBhcHBsaWNhdGlvblxyXG4gICAqIEBwYXJhbSB7dXJsfSBtZXNzYWdlICBUaGUgbWVzc2FnZSB0byBkaXNwbGF5LlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBwcm94eSBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0SHR0cFByb3h5SW5mb3JtYXRpb24odXJsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=