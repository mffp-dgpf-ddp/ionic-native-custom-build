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
var SumUpKeys = /** @class */ (function () {
    function SumUpKeys() {
        this.accessToken = '';
        this.affiliateKey = '';
    }
    return SumUpKeys;
}());
export { SumUpKeys };
var SumUpOriginal = /** @class */ (function (_super) {
    __extends(SumUpOriginal, _super);
    function SumUpOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SumUpOriginal.prototype.login = function (sumUpKeys) { return cordova(this, "login", {}, arguments); };
    SumUpOriginal.prototype.auth = function (accessToken) { return cordova(this, "auth", {}, arguments); };
    SumUpOriginal.prototype.getSettings = function () { return cordova(this, "getSettings", {}, arguments); };
    SumUpOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    SumUpOriginal.prototype.isLoggedIn = function () { return cordova(this, "isLoggedIn", {}, arguments); };
    SumUpOriginal.prototype.prepare = function () { return cordova(this, "prepare", {}, arguments); };
    SumUpOriginal.prototype.closeConnection = function () { return cordova(this, "closeConnection", {}, arguments); };
    SumUpOriginal.prototype.pay = function (amount, currencycode) { return cordova(this, "pay", {}, arguments); };
    SumUpOriginal.pluginName = "SumUp";
    SumUpOriginal.plugin = "cordova-sumup-plugin";
    SumUpOriginal.pluginRef = "window.SumUp";
    SumUpOriginal.repo = "https://github.com/mariusbackes/cordova-plugin-sumup";
    SumUpOriginal.install = "cordova plugin add cordova-sumup-plugin --variable SUMUP_API_KEY=INSERT_YOUR_KEY";
    SumUpOriginal.installVariables = ["SUMUP_API_KEY"];
    SumUpOriginal.platforms = ["Android", "iOS"];
    return SumUpOriginal;
}(IonicNativePlugin));
var SumUp = new SumUpOriginal();
export { SumUp };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N1bS11cC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErRHRFO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztvQkFuRUg7Ozs7SUFrSTJCLHlCQUFpQjs7OztJQVMxQyxxQkFBSyxhQUFDLFNBQW9CO0lBVTFCLG9CQUFJLGFBQUMsV0FBbUI7SUFTeEIsMkJBQVc7SUFTWCxzQkFBTTtJQVNOLDBCQUFVO0lBVVYsdUJBQU87SUFTUCwrQkFBZTtJQVlmLG1CQUFHLGFBQUMsTUFBYyxFQUFFLFlBQW9COzs7Ozs7OztnQkEvTTFDO0VBa0kyQixpQkFBaUI7U0FBL0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN1bVVwUmVzcG9uc2Uge1xyXG4gIC8vIENvZGUgdG8gaWRlbnRpZnkgdGhlIG1lc3NhZ2VcclxuICBjb2RlOiBudW1iZXI7XHJcblxyXG4gIC8vIE1lc3NhZ2UgZm9yIHJlYWRhYmxlIHVzYWdlXHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN1bVVwTG9naW5TdGF0dXMge1xyXG4gIC8vIENvZGUsIHRvIGNoZWNrIGlmIGFuIGVycm9yIG9jY3VyZWRcclxuICBjb2RlOiBudW1iZXI7XHJcblxyXG4gIC8vIEJvb2xlYW5kIHZhbHVlIHdoZXRoZXIgdGhlIHVzZXIgaXMgbG9nZ2VkIGluIG9yIG5vdFxyXG4gIGlzTG9nZ2VkSW46IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3VtVXBQYXltZW50IHtcclxuICAvLyBVbmlxdWUgdHJhbnNhY3Rpb24gY29kZVxyXG4gIHRyYW5zYWN0aW9uX2NvZGU6IHN0cmluZztcclxuXHJcbiAgLy8gQ2FyZCB0eXBlIC0+IGxpa2UgTUFFU1RST1xyXG4gIGNhcmRfdHlwZTogc3RyaW5nO1xyXG5cclxuICAvLyBNZXJjaGFudCBjb2RlIGZvciBpZGVudGlmaWNhdGlvblxyXG4gIG1lcmNoYW50X2NvZGU6IHN0cmluZztcclxuXHJcbiAgLy8gQW1vdW50IG9mIHRoZSBwYXltZW50XHJcbiAgYW1vdW50OiBudW1iZXI7XHJcblxyXG4gIC8vIFRpcCBhbW91bnQgLT4gZGVmYXVsdCAwXHJcbiAgdGlwX2Ftb3VudDogbnVtYmVyO1xyXG5cclxuICAvLyBWYXQgYW1vdW50IC0+IGRlZmF1bHQgMFxyXG4gIHZhdF9hbW91bnQ6IG51bWJlcjtcclxuXHJcbiAgLy8gQ3VycmVuY3kgY29kZSAtPiBsaWtlIEVVUlxyXG4gIGN1cnJlbmN5OiBzdHJpbmc7XHJcblxyXG4gIC8vIFBheW1lbnQgc3RhdHVzIC0+IHN1Y2Nlc3NmdWwgb3IgZXJyb3JcclxuICBzdGF0dXM6IHN0cmluZztcclxuXHJcbiAgLy8gVHlwZSAtPiBDYXJkIG9yIG5mY1xyXG4gIHBheW1lbnRfdHlwZTogc3RyaW5nO1xyXG5cclxuICAvLyBFbnRyeSBtb2RlIC0+IExpa2UgY2hpcCBvciBjb250YWN0bGVzc1xyXG4gIGVudHJ5X21vZGU6IHN0cmluZztcclxuXHJcbiAgLy8gTnVtYmVyIG9mIGluc3RhbGxtZW50cyAtPiBkZWZhdWx0IDFcclxuICBpbnN0YWxsbWVudHM6IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdW1VcEtleXMge1xyXG4gIC8vIFRoZSBnZW5lcmF0ZWQgYWNjZXNzVG9rZW4sIHRvIGF1dG9tYXRlIHRoZSBsb2dpbiBwcm9jZXNzXHJcbiAgYWNjZXNzVG9rZW46IHN0cmluZztcclxuXHJcbiAgLy8gYWZmaWxpYXRlS2V5IGNhbiBhbHNvIGJlIHNldCBpbiB0aGUgb2JqZWN0LCBpZiBpdCBoYXMgdG8gYmUgY2hhbmdlZCBvbiBydW50aW1lXHJcbiAgYWZmaWxpYXRlS2V5OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hY2Nlc3NUb2tlbiA9ICcnO1xyXG4gICAgdGhpcy5hZmZpbGlhdGVLZXkgPSAnJztcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTdW1VcFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUGx1Z2luIHRvIGNvbW11bmljYXRlIHdpdGggYSBTdW1VcCBwYXltZW50IHRlcm1pbmFsXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFN1bVVwIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdW0tdXAnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHN1bVVwOiBTdW1VcCkgeyB9XHJcbiAqXHJcbiAqIGNvbnN0IHN1bVVwS2V5czogU3VtVXBLZXlzID0gbmV3IFN1bVVwS2V5cygpO1xyXG4gKiBzdW1VcEtleXMuYWZmaWxpYXRlS2V5ID0gJ1lPVVJfQVBJX0tFWSc7IC8vIGlmIG5vdCBwcm92aWRlZCBpbiBpbnN0YWxsYXRpb25cclxuICogc3VtVXBLZXlzLmFjY2Vzc1Rva2VuID0gJ1lPVVJfQUNDRVNTX1RPS0VOJztcclxuICpcclxuICogdGhpcy5zdW1VcC5sb2dpbihzdW1VcEtleXMpXHJcbiAqICAgLnRoZW4oKHJlczogU3VtVXBSZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBTdW1VcFJlc3BvbnNlKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqICB0aGlzLnN1bVVwLmF1dGgoJ1lPVVJfQUNDRVNTX1RPS0VOJylcclxuICogICAudGhlbigocmVzOiBTdW1VcFJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IFN1bVVwUmVzcG9uc2UpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogIHRoaXMuc3VtVXAuZ2V0U2V0dGluZ3MoKVxyXG4gKiAgIC50aGVuKChyZXM6IFN1bVVwUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogU3VtVXBSZXNwb25zZSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiAgdGhpcy5zdW1VcC5sb2dvdXQoKVxyXG4gKiAgIC50aGVuKChyZXM6IFN1bVVwUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogU3VtVXBSZXNwb25zZSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiAgdGhpcy5zdW1VcC5pc0xvZ2dlZEluKClcclxuICogICAudGhlbigocmVzOiBTdW1VcExvZ2luU3RhdHVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IFN1bVVwTG9naW5TdGF0dXMpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogIHRoaXMuc3VtVXAucHJlcGFyZSgpXHJcbiAqICAgLnRoZW4oKHJlczogU3VtVXBSZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBTdW1VcFJlc3BvbnNlKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIHRoaXMuc3VtVXAuY2xvc2VDb25uZWN0aW9uKClcclxuICogICAudGhlbigocmVzOiBTdW1VcFJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IFN1bVVwUmVzcG9uc2UpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogdGhpcy5zdW1VcC5wYXkoMTAuMCwgJ0VVUicpXHJcbiAqICAgLnRoZW4oKHJlczogU3VtVXBQYXltZW50KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IFN1bVVwUGF5bWVudCkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdTdW1VcCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1zdW11cC1wbHVnaW4nLFxyXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5TdW1VcCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXJpdXNiYWNrZXMvY29yZG92YS1wbHVnaW4tc3VtdXAnLFxyXG4gIGluc3RhbGw6ICdjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1zdW11cC1wbHVnaW4gLS12YXJpYWJsZSBTVU1VUF9BUElfS0VZPUlOU0VSVF9ZT1VSX0tFWScsXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogWydTVU1VUF9BUElfS0VZJ10sXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN1bVVwIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIExvZ2luIGEgdXNlciB3aXRoIGFuIG9wdGlvbmFsIGFjY2VzcyB0b2tlbi5cclxuICAgKiBJZiB0aGUgYWNjZXNzIHRva2VuIGlzIHByb3ZpZGVkIGFuZCB2YWxpZCwgdGhlIHVzZXIgaXMgbG9nZ2VkIGluIGF1dG1hdGljYWxseS5cclxuICAgKiBPdGhlcndpc2UgdGhlIHVzZXIgaGFzIHRvIHR5cGUgaW4gdGhlIGNyZWRlbnRpYWxzXHJcbiAgICogQHBhcmFtIHN1bVVwS2V5cyB7U3VtVXBLZXlzfVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8U3VtVXBSZXNwb25zZT59IFJldHVybiBhIFN1bVVwUmVzcG9uc2Ugb2JqZWN0XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGxvZ2luKHN1bVVwS2V5czogU3VtVXBLZXlzKTogUHJvbWlzZTxTdW1VcFJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdXRoZW50aWNhdGVzIHRoZSBhY2NvdW50IHdpdGggdGhlIGdpdmVuIGFjY2VzcyB0b2tlbi4gUGFyYW1ldGVyIGFjY2Vzc1Rva2VuIGlzIHJlcXVpcmVkLlxyXG4gICAqIEBwYXJhbSBhY2Nlc3NUb2tlbiB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8U3VtVXBSZXNwb25zZT59IFJldHVybiBhIFN1bVVwUmVzcG9uc2Ugb2JqZWN0XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGF1dGgoYWNjZXNzVG9rZW46IHN0cmluZyk6IFByb21pc2U8U3VtVXBSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbnMgYSBuZXcgd2luZG93IHdpdGggdGhlIGFsbCBhY2NvdW50IHNldHRpbmdzIG9mIGFuIGxvZ2dlZCBpbiB1c2VyLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8U3VtVXBSZXNwb25zZT59IFJldHVybiBhIFN1bVVwUmVzcG9uc2Ugb2JqZWN0XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFNldHRpbmdzKCk6IFByb21pc2U8U3VtVXBSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9nb3V0IGEgdXNlciBmcm9tIHRoZSBhY2NvdW50LlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8U3VtVXBSZXNwb25zZT59IFJldHVybiBhIFN1bVVwUmVzcG9uc2Ugb2JqZWN0XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGxvZ291dCgpOiBQcm9taXNlPFN1bVVwUmVzcG9uc2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbiBvciBub3QgYW5kIHJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIGZpZWxkIGlzTG9nZ2VkSW4gd2hpY2ggaXMgYSBib29sZWFuIHZhbHVlLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8U3VtVXBSZXNwb25zZT59IFJldHVybiBhIFN1bVVwUmVzcG9uc2Ugb2JqZWN0XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzTG9nZ2VkSW4oKTogUHJvbWlzZTxTdW1VcExvZ2luU3RhdHVzPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmVwYXJlcyB0aGUgdGVybWluYWwgZm9yIGEgcGF5bWVudC4gQ2hlY2tzIHdoZXRoZXIgdGhlIENhcmRSZWFkZXIgaXMgcmVhZHkgdG8gdHJhbnNtaXQgYW5kXHJcbiAgICogaWYgYW4gaW5zdGFuY2Ugb2YgdGhlIENhcmRSZWFkZXJNYW5hZ2VyIGlzIGF2YWlsYWJsZS5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFN1bVVwUmVzcG9uc2U+fSBSZXR1cm4gYSBTdW1VcFJlc3BvbnNlIG9iamVjdFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBwcmVwYXJlKCk6IFByb21pc2U8U3VtVXBSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZXMgdG8gY2xvc2UgdGhlIGNvbm5lY3Rpb24gdG8gdGhlIGNhcmQgdGVybWluYWwuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxTdW1VcFJlc3BvbnNlPn0gUmV0dXJuIGEgU3VtVXBSZXNwb25zZSBvYmplY3RcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2xvc2VDb25uZWN0aW9uKCk6IFByb21pc2U8U3VtVXBSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbnMgYSBuYXRpdmUgU3VtVXAgd2luZG93IHRvIHByb2NlZWQgYSBwYXltZW50LiBQYXJhbWV0ZXIgYW1vdW50IGFuZCBjdXJyZW5jeWNvZGUgYXJlIHJlcXVpcmVkLlxyXG4gICAqIElmIHRoZSBQYXltZW50IHdhcyBzdWNjZXNzZnVsIGl0IHJldHVybnMgYW4gU3VtVXBQYXltZW50IG9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHRoZSBwYXltZW50LlxyXG4gICAqIEBwYXJhbSBhbW91bnQge251bWJlcn1cclxuICAgKiBAcGFyYW0gY3VycmVuY3ljb2RlIHtzdHJpbmd9XHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxTdW1VcFJlc3BvbnNlPn0gUmV0dXJuIGEgU3VtVXBSZXNwb25zZSBvYmplY3RcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcGF5KGFtb3VudDogbnVtYmVyLCBjdXJyZW5jeWNvZGU6IHN0cmluZyk6IFByb21pc2U8U3VtVXBQYXltZW50PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==