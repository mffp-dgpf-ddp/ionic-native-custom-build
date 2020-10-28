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
var TealiumInstallReferrerOriginal = /** @class */ (function (_super) {
    __extends(TealiumInstallReferrerOriginal, _super);
    function TealiumInstallReferrerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumInstallReferrerOriginal.prototype.setPersistent = function (instanceName) { return cordova(this, "setPersistent", {}, arguments); };
    TealiumInstallReferrerOriginal.prototype.setVolatile = function (instanceName) { return cordova(this, "setVolatile", {}, arguments); };
    TealiumInstallReferrerOriginal.pluginName = "TealiumInstallReferrer";
    TealiumInstallReferrerOriginal.plugin = "tealium-cordova-installreferrer";
    TealiumInstallReferrerOriginal.pluginRef = "window.tealiumInstallReferrer";
    TealiumInstallReferrerOriginal.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumInstallReferrerOriginal.platforms = ["Android"];
    TealiumInstallReferrerOriginal.install = "";
    return TealiumInstallReferrerOriginal;
}(IonicNativePlugin));
var TealiumInstallReferrer = new TealiumInstallReferrerOriginal();
export { TealiumInstallReferrer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RlYWxpdW0taW5zdGFsbHJlZmVycmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW1DNUIsMENBQWlCOzs7O0lBTzNELDhDQUFhLGFBQUMsWUFBb0I7SUFVbEMsNENBQVcsYUFBQyxZQUFvQjs7Ozs7OztpQ0FwRGxDO0VBbUM0QyxpQkFBaUI7U0FBaEQsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAcGFpZFxyXG4gKiBAbmFtZSBUZWFsaXVtSW5zdGFsbFJlZmVycmVyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIG1vZHVsZSBkZXBlbmRzIG9uIHRoZSBbVGVhbGl1bSBDb3Jkb3ZhIFBsdWdpbl0oaHR0cHM6Ly9naXRodWIuY29tL3RlYWxpdW0vY29yZG92YS1wbHVnaW4pLiBXaXRob3V0IGl0LCB0aGlzIG1vZHVsZSB3aWxsIG5vdCBkbyBhbnl0aGluZy5cclxuICogSW1wbGVtZW50cyBhIEJyb2FkY2FzdCBSZWNlaXZlciBmb3IgdGhlIElOU1RBTExfUkVGRVJSRVIgaW50ZW50LlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgXHJcbiAqIGltcG9ydCB7IFRlYWxpdW1JbnN0YWxsUmVmZXJyZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RlYWxpdW0taW5zdGFsbHJlZmVycmVyL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5zdGFsbFJlZmVycmVyOiBUZWFsaXVtSW5zdGFsbFJlZmVycmVyKSB7IH1cclxuICpcclxuICpcclxuICogdGhpcy5pbnN0YWxsUmVmZXJyZXIuc2V0UGVyc2lzdGVudChcIm1haW5cIik7XHJcbiAqIHRoaXMuaW5zdGFsbFJlZmVycmVyLnNldFZvbGF0aWxlKFwibWFpblwiKTtcclxuICpcclxuICpcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1RlYWxpdW1JbnN0YWxsUmVmZXJyZXInLFxyXG4gIHBsdWdpbjogJ3RlYWxpdW0tY29yZG92YS1pbnN0YWxscmVmZXJyZXInLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICd3aW5kb3cudGVhbGl1bUluc3RhbGxSZWZlcnJlcicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1RlYWxpdW0vY29yZG92YS1wbHVnaW4nLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUZWFsaXVtSW5zdGFsbFJlZmVycmVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RvcmVzIHRoZSBpbnN0YWxsIHJlZmVycmVyIGluZm9ybWF0aW9uIGFzIHBlcnNpc3RlbnQgZGF0YVxyXG4gICAqIEBwYXJhbSBpbnN0YW5jZU5hbWUge3N0cmluZ30gWW91ciBhcmJpdHJhcnkgVGVhbGl1bSBpbnN0YW5jZSBuYW1lIHByb3ZpZGVkIGF0IGluaXQgdGltZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldFBlcnNpc3RlbnQoaW5zdGFuY2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBzdG9yZXMgdGhlIGluc3RhbGwgcmVmZXJyZXIgaW5mb3JtYXRpb24gYXMgdm9sYXRpbGUgZGF0YVxyXG4gICAqIEBwYXJhbSBpbnN0YW5jZU5hbWUge3N0cmluZ30gWW91ciBhcmJpdHJhcnkgVGVhbGl1bSBpbnN0YW5jZSBuYW1lIHByb3ZpZGVkIGF0IGluaXQgdGltZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldFZvbGF0aWxlKGluc3RhbmNlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19