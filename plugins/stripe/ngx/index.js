import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Stripe = /** @class */ (function (_super) {
    __extends(Stripe, _super);
    function Stripe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stripe.prototype.setPublishableKey = function (publishableKey) { return cordova(this, "setPublishableKey", {}, arguments); };
    Stripe.prototype.createCardToken = function (params) { return cordova(this, "createCardToken", {}, arguments); };
    Stripe.prototype.createBankAccountToken = function (params) { return cordova(this, "createBankAccountToken", {}, arguments); };
    Stripe.prototype.validateCardNumber = function (cardNumber) { return cordova(this, "validateCardNumber", {}, arguments); };
    Stripe.prototype.validateCVC = function (cvc) { return cordova(this, "validateCVC", {}, arguments); };
    Stripe.prototype.validateExpiryDate = function (expMonth, expYear) { return cordova(this, "validateExpiryDate", {}, arguments); };
    Stripe.prototype.getCardType = function (cardNumber) { return cordova(this, "getCardType", {}, arguments); };
    Stripe.pluginName = "Stripe";
    Stripe.plugin = "cordova-plugin-stripe";
    Stripe.pluginRef = "cordova.plugins.stripe";
    Stripe.repo = "https://github.com/zyramedia/cordova-plugin-stripe";
    Stripe.platforms = ["Android", "Browser", "iOS"];
    Stripe = __decorate([
        Injectable()
    ], Stripe);
    return Stripe;
}(IonicNativePlugin));
export { Stripe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0cmlwZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnSjVDLDBCQUFpQjs7OztJQU8zQyxrQ0FBaUIsYUFBQyxjQUFzQjtJQVV4QyxnQ0FBZSxhQUFDLE1BQTZCO0lBVTdDLHVDQUFzQixhQUFDLE1BQStCO0lBVXRELG1DQUFrQixhQUFDLFVBQWtCO0lBVXJDLDRCQUFXLGFBQUMsR0FBVztJQVd2QixtQ0FBa0IsYUFBQyxRQUFnQixFQUFFLE9BQWU7SUFVcEQsNEJBQVcsYUFBQyxVQUFrQjs7Ozs7O0lBcEVuQixNQUFNO1FBRGxCLFVBQVUsRUFBRTtPQUNBLE1BQU07aUJBakpuQjtFQWlKNEIsaUJBQWlCO1NBQWhDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdHJpcGVDYXJkVG9rZW5QYXJhbXMge1xyXG4gIC8qKlxyXG4gICAqIENhcmQgbnVtYmVyXHJcbiAgICovXHJcbiAgbnVtYmVyOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRXhwaXJ5IG1vbnRoXHJcbiAgICovXHJcbiAgZXhwTW9udGg6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBFeHBpcnkgeWVhclxyXG4gICAqL1xyXG4gIGV4cFllYXI6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBDVkMgLyBDVlZcclxuICAgKi9cclxuICBjdmM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQ2FyZGhvbGRlciBuYW1lXHJcbiAgICovXHJcbiAgbmFtZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBBZGRyZXNzIGxpbmUgMVxyXG4gICAqL1xyXG4gIGFkZHJlc3NfbGluZTE/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQWRkcmVzcyBsaW5lIDJcclxuICAgKi9cclxuICBhZGRyZXNzX2xpbmUyPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIENpdHlcclxuICAgKi9cclxuICBhZGRyZXNzX2NpdHk/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogU3RhdGUgLyBQcm92aW5jZVxyXG4gICAqL1xyXG4gIGFkZHJlc3Nfc3RhdGU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQ291bnRyeVxyXG4gICAqL1xyXG4gIGFkZHJlc3NfY291bnRyeT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBQb3N0YWwgY29kZSAvIFpJUCBDb2RlXHJcbiAgICovXHJcbiAgcG9zdGFsQ29kZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiAzLWxldHRlciBJU08gY29kZSBmb3IgY3VycmVuY3lcclxuICAgKi9cclxuICBjdXJyZW5jeT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdHJpcGVCYW5rQWNjb3VudFBhcmFtcyB7XHJcbiAgLyoqXHJcbiAgICogUm91dGluZyBudW1iZXIuXHJcbiAgICovXHJcbiAgcm91dGluZ19udW1iZXI6IHN0cmluZztcclxuICAvKipcclxuICAgKiBBY2NvdW50IG51bWJlci5cclxuICAgKi9cclxuICBhY2NvdW50X251bWJlcjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEN1cnJlbmN5IGNvZGUuIEV4YW1wbGU6IGBVU0RgLlxyXG4gICAqL1xyXG4gIGN1cnJlbmN5OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQ291bnRyeSBjb2RlLiBFeGFtcGxlOiBgVVNgLlxyXG4gICAqL1xyXG4gIGNvdW50cnk6IHN0cmluZztcclxuICAvKipcclxuICAgKiBBY2NvdW50IGhvbGRlciBuYW1lLlxyXG4gICAqL1xyXG4gIGFjY291bnRfaG9sZGVyX25hbWU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQWNjb3VudCBob2xkZXIgdHlwZS4gVGhpcyBjYW4gYmUgYGluZGl2aWR1YWxgIG9yIGBjb21wYW55YC5cclxuICAgKi9cclxuICBhY2NvdW50X2hvbGRlcl90eXBlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0cmlwZUNhcmRUb2tlblJlcyB7XHJcbiAgLyoqXHJcbiAgICogQ2FyZCBPYmplY3QuXHJcbiAgICovXHJcbiAgY2FyZDoge1xyXG4gICAgYnJhbmQ6IHN0cmluZztcclxuICAgIGV4cF9tb250aDogbnVtYmVyO1xyXG4gICAgZXhwX3llYXI6IG51bWJlcjtcclxuICAgIGZ1bmRpbmc6IHN0cmluZztcclxuICAgIGxhc3Q0OiBzdHJpbmc7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBUb2tlbiBSZXF1ZXN0IERhdGUgVGltZS5cclxuICAgKi9cclxuICBjcmVhdGVkOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQ2FyZCBUb2tlbi5cclxuICAgKi9cclxuICBpZDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFNvdXJjZSBUeXBlIChjYXJkIG9yIGFjY291bnQpLlxyXG4gICAqL1xyXG4gIHR5cGU6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFN0cmlwZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBwbHVnaW4gdGhhdCBhbGxvd3MgeW91IHRvIHVzZSBTdHJpcGUncyBOYXRpdmUgU0RLcyBmb3IgQW5kcm9pZCBhbmQgaU9TLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBTdHJpcGUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0cmlwZS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cmlwZTogU3RyaXBlKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuc3RyaXBlLnNldFB1Ymxpc2hhYmxlS2V5KCdteV9wdWJsaXNoYWJsZV9rZXknKTtcclxuICpcclxuICogbGV0IGNhcmQgPSB7XHJcbiAqICBudW1iZXI6ICc0MjQyNDI0MjQyNDI0MjQyJyxcclxuICogIGV4cE1vbnRoOiAxMixcclxuICogIGV4cFllYXI6IDIwMjAsXHJcbiAqICBjdmM6ICcyMjAnXHJcbiAqIH1cclxuICpcclxuICogdGhpcy5zdHJpcGUuY3JlYXRlQ2FyZFRva2VuKGNhcmQpXHJcbiAqICAgIC50aGVuKHRva2VuID0+IGNvbnNvbGUubG9nKHRva2VuLmlkKSlcclxuICogICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIFN0cmlwZUNhcmRUb2tlblBhcmFtc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1N0cmlwZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc3RyaXBlJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuc3RyaXBlJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3p5cmFtZWRpYS9jb3Jkb3ZhLXBsdWdpbi1zdHJpcGUnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0cmlwZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBTZXQgcHVibGlzaGFibGUga2V5XHJcbiAgICogQHBhcmFtIHB1Ymxpc2hhYmxlS2V5IHtzdHJpbmd9IFB1Ymxpc2hhYmxlIGtleVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldFB1Ymxpc2hhYmxlS2V5KHB1Ymxpc2hhYmxlS2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBDcmVkaXQgQ2FyZCBUb2tlblxyXG4gICAqIEBwYXJhbSBwYXJhbXMge1N0cmlwZUNhcmRUb2tlblBhcmFtc30gQ3JlZGl0IGNhcmQgaW5mb3JtYXRpb25cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFN0cmlwZUNhcmRUb2tlblJlcz59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgdG9rZW4gb2JqZWN0LCBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY3JlYXRlQ2FyZFRva2VuKHBhcmFtczogU3RyaXBlQ2FyZFRva2VuUGFyYW1zKTogUHJvbWlzZTxTdHJpcGVDYXJkVG9rZW5SZXM+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGJhbmsgYWNjb3VudCB0b2tlblxyXG4gICAqIEBwYXJhbSBwYXJhbXMge1N0cmlwZUJhbmtBY2NvdW50UGFyYW1zfSBCYW5rIGFjY291bnQgaW5mb3JtYXRpb25cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgdG9rZW4sIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvclxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjcmVhdGVCYW5rQWNjb3VudFRva2VuKHBhcmFtczogU3RyaXBlQmFua0FjY291bnRQYXJhbXMpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdGVzIGEgY3JlZGl0IGNhcmQgbnVtYmVyXHJcbiAgICogQHBhcmFtIGNhcmROdW1iZXIge3N0cmluZ30gQ3JlZGl0IGNhcmQgbnVtYmVyXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIHRoZSBudW1iZXIgaXMgdmFsaWQsIGFuZCByZWplY3RzIGlmIGl0J3MgaW52YWxpZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB2YWxpZGF0ZUNhcmROdW1iZXIoY2FyZE51bWJlcjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRlcyBhIENWQyBudW1iZXJcclxuICAgKiBAcGFyYW0gY3ZjIHtzdHJpbmd9IENWQyBudW1iZXJcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIG51bWJlciBpcyB2YWxpZCwgYW5kIHJlamVjdHMgaWYgaXQncyBpbnZhbGlkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHZhbGlkYXRlQ1ZDKGN2Yzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRlcyBhbiBleHBpcnkgZGF0ZVxyXG4gICAqIEBwYXJhbSBleHBNb250aCB7c3RyaW5nfSBleHBpcnkgbW9udGggKDAgLSAxMSlcclxuICAgKiBAcGFyYW0gZXhwWWVhciB7c3RyaW5nfSBleHBpcnkgeWVhclxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBpZiB0aGUgZGF0ZSBpcyB2YWxpZCwgYW5kIHJlamVjdHMgaWYgaXQncyBpbnZhbGlkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHZhbGlkYXRlRXhwaXJ5RGF0ZShleHBNb250aDogc3RyaW5nLCBleHBZZWFyOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgY2FyZCB0eXBlIGZyb20gY2FyZCBudW1iZXJcclxuICAgKiBAcGFyYW0gY2FyZE51bWJlciB7c3RyaW5nfSBDYXJkIG51bWJlclxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjcmVkaXQgY2FyZCB0eXBlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldENhcmRUeXBlKGNhcmROdW1iZXI6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==