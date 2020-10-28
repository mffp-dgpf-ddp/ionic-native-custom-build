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
var ShopCheckoutOriginal = /** @class */ (function (_super) {
    __extends(ShopCheckoutOriginal, _super);
    function ShopCheckoutOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShopCheckoutOriginal.prototype.registerAgent = function (options) { return cordova(this, "registerAgent", {}, arguments); };
    ShopCheckoutOriginal.prototype.openProducts = function (options) { return cordova(this, "openProducts", {}, arguments); };
    ShopCheckoutOriginal.prototype.openTransactions = function (options) { return cordova(this, "openTransactions", {}, arguments); };
    ShopCheckoutOriginal.prototype.logout = function (options) { return cordova(this, "logout", {}, arguments); };
    ShopCheckoutOriginal.prototype.isInitialized = function () { return cordova(this, "isInitialized", {}, arguments); };
    ShopCheckoutOriginal.pluginName = "ShopCheckout";
    ShopCheckoutOriginal.plugin = "cordova-plugin-shop-checkout";
    ShopCheckoutOriginal.pluginRef = "shopCheckout";
    ShopCheckoutOriginal.repo = "https://github.com/tradedepot/cordova-shop-checkout";
    ShopCheckoutOriginal.platforms = ["Android"];
    return ShopCheckoutOriginal;
}(IonicNativePlugin));
var ShopCheckout = new ShopCheckoutOriginal();
export { ShopCheckout };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Nob3AtY2hlY2tvdXQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBK0J0QyxnQ0FBaUI7Ozs7SUFPakQsb0NBQWEsYUFBQyxPQUFZO0lBVTFCLG1DQUFZLGFBQUMsT0FBWTtJQVV6Qix1Q0FBZ0IsYUFBQyxPQUFZO0lBUTdCLDZCQUFNLGFBQUMsT0FBWTtJQVFuQixvQ0FBYTs7Ozs7O3VCQTNFZjtFQWdDa0MsaUJBQWlCO1NBQXRDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNob3BDaGVja291dFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBpcyBhIHBsdWdpbiB0aGF0IGFsbG93cyB5b3VyIElvbmljIGFwcCB0byB1c2UgU2hvcENoZWNvdXQgZm9yIEFuZHJvaWQuXHJcbiAqIEZvbGxvdyB0aGUgb2ZmaWNhbCBkb2N1bWVudGF0aW9uIHRvIHNldHVwIHRoaXMgcGx1Z2luIGNvcnJlY3RseTogaHR0cHM6Ly9kZXZlbG9wZXIuc2hvcHRvcHVwLmNvbS9kb2NzL3Nob3B0b3B1cC1mb3ItY29yZG92YXBob25lZ2FwXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNob3BDaGVja291dCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc2hvcC1jaGVja291dC9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNob3BDaGVja291dDogU2hvcENoZWNrb3V0KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuc2hvcENoZWNrb3V0LnJlZ2lzdGVyQWdlbnQoKTtcclxuICogLi4uXHJcbiAqIHRoaXMuc2hvcENoZWNrb3V0Lm9wZW5Qcm9kdWN0cygpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdTaG9wQ2hlY2tvdXQnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNob3AtY2hlY2tvdXQnLFxyXG4gIHBsdWdpblJlZjogJ3Nob3BDaGVja291dCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90cmFkZWRlcG90L2NvcmRvdmEtc2hvcC1jaGVja291dCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2hvcENoZWNrb3V0IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIGFuIGFnZW50XHJcbiAgICogQHBhcmFtIG9wdGlvbnMge2FueX0gT3B0aW9uc1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlZ2lzdGVyQWdlbnQob3B0aW9uczogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcGVuIHByb2R1Y3RzIHZpZXdcclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7YW55fSBPcHRpb25zXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgb3BlblByb2R1Y3RzKG9wdGlvbnM6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbiB0cmFubnNhY3Rpb25zIHZpZXdcclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7YW55fSBPcHRpb25zXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgb3BlblRyYW5zYWN0aW9ucyhvcHRpb25zOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGxvZ291dChvcHRpb25zOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzSW5pdGlhbGl6ZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==