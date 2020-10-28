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
var BiometricWrapperOriginal = /** @class */ (function (_super) {
    __extends(BiometricWrapperOriginal, _super);
    function BiometricWrapperOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BiometricWrapperOriginal.prototype.activateIris = function (args) { return cordova(this, "activateIris", {}, arguments); };
    BiometricWrapperOriginal.prototype.activateFingerprint = function (args) { return cordova(this, "activateFingerprint", {}, arguments); };
    BiometricWrapperOriginal.pluginName = "BiometricWrapper";
    BiometricWrapperOriginal.plugin = "cordova-plugin-biometric";
    BiometricWrapperOriginal.pluginRef = "cordova.plugins.BiometricWrapper";
    BiometricWrapperOriginal.repo = "";
    BiometricWrapperOriginal.install = "";
    BiometricWrapperOriginal.installVariables = [];
    BiometricWrapperOriginal.platforms = ["Android"];
    return BiometricWrapperOriginal;
}(IonicNativePlugin));
var BiometricWrapper = new BiometricWrapperOriginal();
export { BiometricWrapper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jpb21ldHJpYy13cmFwcGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW1DbEMsb0NBQWlCOzs7O0lBTXJELHVDQUFZLGFBQUMsSUFBUztJQVN0Qiw4Q0FBbUIsYUFBQyxJQUFTOzs7Ozs7OzsyQkFuRC9CO0VBb0NzQyxpQkFBaUI7U0FBMUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBCaW9tZXRyaWNXcmFwcGVyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBjYXB0dXJlIGJpb21ldHJpYyhJcmlzIGFuZCBGaW5nZXJwcmludCkgYW5kIHZhbGlkYXRlIHRoZSB1c2VyLlxyXG4gKiBNYXkgYmUgdXNlZCBpbiBCYW5raW5nIGRvbWFpblxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBCaW9tZXRyaWNXcmFwcGVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iaW9tZXRyaWMtd3JhcHBlci9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJpb21ldHJpY1dyYXBwZXI6IEJpb21ldHJpY1dyYXBwZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5iaW9tZXRyaWNXcmFwcGVyLmFjdGl2YXRlSXJpcyh7J1BJRF9YTUwnOiAnPHBpZC14bWwvPid9KVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0Jpb21ldHJpY1dyYXBwZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJpb21ldHJpYycsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkJpb21ldHJpY1dyYXBwZXInLFxyXG4gIHJlcG86ICcnLFxyXG4gIGluc3RhbGw6ICcnLFxyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJpb21ldHJpY1dyYXBwZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBhY3RpdmF0ZSBpcmlzIGFjdGl2aXR5XHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gaXJpcyBkYXRhIGNhcHR1cmVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGFjdGl2YXRlSXJpcyhhcmdzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBhY3RpdmF0ZSBmaW5nZXJwcmludCBhY3Rpdml0eVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIEZQIGRhdGEgY2FwdHVyZWRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgYWN0aXZhdGVGaW5nZXJwcmludChhcmdzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=