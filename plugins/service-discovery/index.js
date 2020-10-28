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
var ServiceDiscoveryOriginal = /** @class */ (function (_super) {
    __extends(ServiceDiscoveryOriginal, _super);
    function ServiceDiscoveryOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServiceDiscoveryOriginal.prototype.getNetworkServices = function (service) { return cordova(this, "getNetworkServices", {}, arguments); };
    ServiceDiscoveryOriginal.pluginName = "ServiceDiscovery";
    ServiceDiscoveryOriginal.plugin = "cordova-plugin-discovery";
    ServiceDiscoveryOriginal.pluginRef = "serviceDiscovery";
    ServiceDiscoveryOriginal.repo = "https://github.com/scottdermott/cordova-plugin-discovery";
    ServiceDiscoveryOriginal.platforms = ["Android", "iOS"];
    return ServiceDiscoveryOriginal;
}(IonicNativePlugin));
var ServiceDiscovery = new ServiceDiscoveryOriginal();
export { ServiceDiscovery };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NlcnZpY2UtZGlzY292ZXJ5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQStCbEMsb0NBQWlCOzs7O0lBT3JELDZDQUFrQixhQUFDLE9BQWU7Ozs7OzsyQkF2Q3BDO0VBZ0NzQyxpQkFBaUI7U0FBMUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTZXJ2aWNlRGlzY292ZXJ5XHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBTaW1wbGUgcGx1Z2luIHRvIGdldCBhbnkgU1NEUCAvIFVQblAgLyBETE5BIHNlcnZpY2Ugb24gYSBsb2NhbCBuZXR3b3JrXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNlcnZpY2VEaXNjb3ZlcnkgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NlcnZpY2UtZGlzY292ZXJ5JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlRGlzY292ZXJ5OiBTZXJ2aWNlRGlzY292ZXJ5KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuc2VydmljZURpc2NvdmVyeS5nZXROZXR3b3JrU2VydmljZXMoJ3NzZHA6YWxsJylcclxuICogICAudGhlbihkZXZpY2VzID0+IGNvbnNvbGUubG9nKGRldmljZXMpKVxyXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1NlcnZpY2VEaXNjb3ZlcnknLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRpc2NvdmVyeScsXHJcbiAgcGx1Z2luUmVmOiAnc2VydmljZURpc2NvdmVyeScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zY290dGRlcm1vdHQvY29yZG92YS1wbHVnaW4tZGlzY292ZXJ5JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2VydmljZURpc2NvdmVyeSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBGaW5kcyBhbmQgcmV0dXJucyBtZXRhZGF0YSBhYm91dCBkZXZpY2VzIGRpc2NvdmVyZWQgb24gdGhlIG5ldHdvcmsgdmlhIFNTRFAgLyBVUG5QIC8gRExOQVxyXG4gICAqIEBwYXJhbSBzZXJ2aWNlIHtzdHJpbmd9IFRoZSBzZXJ2aWNlIG5hbWUgdG8gZGlzY292ZXJcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXROZXR3b3JrU2VydmljZXMoc2VydmljZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19