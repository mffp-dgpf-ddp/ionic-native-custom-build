import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var SumUpKeys = /** @class */ (function () {
    function SumUpKeys() {
        this.accessToken = '';
        this.affiliateKey = '';
    }
    return SumUpKeys;
}());
export { SumUpKeys };
var SumUp = /** @class */ (function (_super) {
    __extends(SumUp, _super);
    function SumUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SumUp.prototype.login = function (sumUpKeys) { return cordova(this, "login", {}, arguments); };
    SumUp.prototype.auth = function (accessToken) { return cordova(this, "auth", {}, arguments); };
    SumUp.prototype.getSettings = function () { return cordova(this, "getSettings", {}, arguments); };
    SumUp.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    SumUp.prototype.isLoggedIn = function () { return cordova(this, "isLoggedIn", {}, arguments); };
    SumUp.prototype.prepare = function () { return cordova(this, "prepare", {}, arguments); };
    SumUp.prototype.closeConnection = function () { return cordova(this, "closeConnection", {}, arguments); };
    SumUp.prototype.pay = function (amount, currencycode) { return cordova(this, "pay", {}, arguments); };
    SumUp.pluginName = "SumUp";
    SumUp.plugin = "cordova-sumup-plugin";
    SumUp.pluginRef = "window.SumUp";
    SumUp.repo = "https://github.com/mariusbackes/cordova-plugin-sumup";
    SumUp.install = "cordova plugin add cordova-sumup-plugin --variable SUMUP_API_KEY=INSERT_YOUR_KEY";
    SumUp.installVariables = ["SUMUP_API_KEY"];
    SumUp.platforms = ["Android", "iOS"];
    SumUp = __decorate([
        Injectable()
    ], SumUp);
    return SumUp;
}(IonicNativePlugin));
export { SumUp };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N1bS11cC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErRHRFO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztvQkFuRUg7Ozs7SUFrSTJCLHlCQUFpQjs7OztJQVMxQyxxQkFBSyxhQUFDLFNBQW9CO0lBVTFCLG9CQUFJLGFBQUMsV0FBbUI7SUFTeEIsMkJBQVc7SUFTWCxzQkFBTTtJQVNOLDBCQUFVO0lBVVYsdUJBQU87SUFTUCwrQkFBZTtJQVlmLG1CQUFHLGFBQUMsTUFBYyxFQUFFLFlBQW9COzs7Ozs7OztJQTdFN0IsS0FBSztRQURqQixVQUFVLEVBQUU7T0FDQSxLQUFLO2dCQWxJbEI7RUFrSTJCLGlCQUFpQjtTQUEvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3VtVXBSZXNwb25zZSB7XHJcbiAgLy8gQ29kZSB0byBpZGVudGlmeSB0aGUgbWVzc2FnZVxyXG4gIGNvZGU6IG51bWJlcjtcclxuXHJcbiAgLy8gTWVzc2FnZSBmb3IgcmVhZGFibGUgdXNhZ2VcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3VtVXBMb2dpblN0YXR1cyB7XHJcbiAgLy8gQ29kZSwgdG8gY2hlY2sgaWYgYW4gZXJyb3Igb2NjdXJlZFxyXG4gIGNvZGU6IG51bWJlcjtcclxuXHJcbiAgLy8gQm9vbGVhbmQgdmFsdWUgd2hldGhlciB0aGUgdXNlciBpcyBsb2dnZWQgaW4gb3Igbm90XHJcbiAgaXNMb2dnZWRJbjogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdW1VcFBheW1lbnQge1xyXG4gIC8vIFVuaXF1ZSB0cmFuc2FjdGlvbiBjb2RlXHJcbiAgdHJhbnNhY3Rpb25fY29kZTogc3RyaW5nO1xyXG5cclxuICAvLyBDYXJkIHR5cGUgLT4gbGlrZSBNQUVTVFJPXHJcbiAgY2FyZF90eXBlOiBzdHJpbmc7XHJcblxyXG4gIC8vIE1lcmNoYW50IGNvZGUgZm9yIGlkZW50aWZpY2F0aW9uXHJcbiAgbWVyY2hhbnRfY29kZTogc3RyaW5nO1xyXG5cclxuICAvLyBBbW91bnQgb2YgdGhlIHBheW1lbnRcclxuICBhbW91bnQ6IG51bWJlcjtcclxuXHJcbiAgLy8gVGlwIGFtb3VudCAtPiBkZWZhdWx0IDBcclxuICB0aXBfYW1vdW50OiBudW1iZXI7XHJcblxyXG4gIC8vIFZhdCBhbW91bnQgLT4gZGVmYXVsdCAwXHJcbiAgdmF0X2Ftb3VudDogbnVtYmVyO1xyXG5cclxuICAvLyBDdXJyZW5jeSBjb2RlIC0+IGxpa2UgRVVSXHJcbiAgY3VycmVuY3k6IHN0cmluZztcclxuXHJcbiAgLy8gUGF5bWVudCBzdGF0dXMgLT4gc3VjY2Vzc2Z1bCBvciBlcnJvclxyXG4gIHN0YXR1czogc3RyaW5nO1xyXG5cclxuICAvLyBUeXBlIC0+IENhcmQgb3IgbmZjXHJcbiAgcGF5bWVudF90eXBlOiBzdHJpbmc7XHJcblxyXG4gIC8vIEVudHJ5IG1vZGUgLT4gTGlrZSBjaGlwIG9yIGNvbnRhY3RsZXNzXHJcbiAgZW50cnlfbW9kZTogc3RyaW5nO1xyXG5cclxuICAvLyBOdW1iZXIgb2YgaW5zdGFsbG1lbnRzIC0+IGRlZmF1bHQgMVxyXG4gIGluc3RhbGxtZW50czogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN1bVVwS2V5cyB7XHJcbiAgLy8gVGhlIGdlbmVyYXRlZCBhY2Nlc3NUb2tlbiwgdG8gYXV0b21hdGUgdGhlIGxvZ2luIHByb2Nlc3NcclxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG5cclxuICAvLyBhZmZpbGlhdGVLZXkgY2FuIGFsc28gYmUgc2V0IGluIHRoZSBvYmplY3QsIGlmIGl0IGhhcyB0byBiZSBjaGFuZ2VkIG9uIHJ1bnRpbWVcclxuICBhZmZpbGlhdGVLZXk6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmFjY2Vzc1Rva2VuID0gJyc7XHJcbiAgICB0aGlzLmFmZmlsaWF0ZUtleSA9ICcnO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFN1bVVwXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBQbHVnaW4gdG8gY29tbXVuaWNhdGUgd2l0aCBhIFN1bVVwIHBheW1lbnQgdGVybWluYWxcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgU3VtVXAgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N1bS11cCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3VtVXA6IFN1bVVwKSB7IH1cclxuICpcclxuICogY29uc3Qgc3VtVXBLZXlzOiBTdW1VcEtleXMgPSBuZXcgU3VtVXBLZXlzKCk7XHJcbiAqIHN1bVVwS2V5cy5hZmZpbGlhdGVLZXkgPSAnWU9VUl9BUElfS0VZJzsgLy8gaWYgbm90IHByb3ZpZGVkIGluIGluc3RhbGxhdGlvblxyXG4gKiBzdW1VcEtleXMuYWNjZXNzVG9rZW4gPSAnWU9VUl9BQ0NFU1NfVE9LRU4nO1xyXG4gKlxyXG4gKiB0aGlzLnN1bVVwLmxvZ2luKHN1bVVwS2V5cylcclxuICogICAudGhlbigocmVzOiBTdW1VcFJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IFN1bVVwUmVzcG9uc2UpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogIHRoaXMuc3VtVXAuYXV0aCgnWU9VUl9BQ0NFU1NfVE9LRU4nKVxyXG4gKiAgIC50aGVuKChyZXM6IFN1bVVwUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogU3VtVXBSZXNwb25zZSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiAgdGhpcy5zdW1VcC5nZXRTZXR0aW5ncygpXHJcbiAqICAgLnRoZW4oKHJlczogU3VtVXBSZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBTdW1VcFJlc3BvbnNlKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqICB0aGlzLnN1bVVwLmxvZ291dCgpXHJcbiAqICAgLnRoZW4oKHJlczogU3VtVXBSZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBTdW1VcFJlc3BvbnNlKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqICB0aGlzLnN1bVVwLmlzTG9nZ2VkSW4oKVxyXG4gKiAgIC50aGVuKChyZXM6IFN1bVVwTG9naW5TdGF0dXMpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogU3VtVXBMb2dpblN0YXR1cykgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiAgdGhpcy5zdW1VcC5wcmVwYXJlKClcclxuICogICAudGhlbigocmVzOiBTdW1VcFJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IFN1bVVwUmVzcG9uc2UpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogdGhpcy5zdW1VcC5jbG9zZUNvbm5lY3Rpb24oKVxyXG4gKiAgIC50aGVuKChyZXM6IFN1bVVwUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogU3VtVXBSZXNwb25zZSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiB0aGlzLnN1bVVwLnBheSgxMC4wLCAnRVVSJylcclxuICogICAudGhlbigocmVzOiBTdW1VcFBheW1lbnQpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogU3VtVXBQYXltZW50KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1N1bVVwJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXN1bXVwLXBsdWdpbicsXHJcbiAgcGx1Z2luUmVmOiAnd2luZG93LlN1bVVwJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21hcml1c2JhY2tlcy9jb3Jkb3ZhLXBsdWdpbi1zdW11cCcsXHJcbiAgaW5zdGFsbDogJ2NvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXN1bXVwLXBsdWdpbiAtLXZhcmlhYmxlIFNVTVVQX0FQSV9LRVk9SU5TRVJUX1lPVVJfS0VZJyxcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1NVTVVQX0FQSV9LRVknXSxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3VtVXAgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogTG9naW4gYSB1c2VyIHdpdGggYW4gb3B0aW9uYWwgYWNjZXNzIHRva2VuLlxyXG4gICAqIElmIHRoZSBhY2Nlc3MgdG9rZW4gaXMgcHJvdmlkZWQgYW5kIHZhbGlkLCB0aGUgdXNlciBpcyBsb2dnZWQgaW4gYXV0bWF0aWNhbGx5LlxyXG4gICAqIE90aGVyd2lzZSB0aGUgdXNlciBoYXMgdG8gdHlwZSBpbiB0aGUgY3JlZGVudGlhbHNcclxuICAgKiBAcGFyYW0gc3VtVXBLZXlzIHtTdW1VcEtleXN9XHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxTdW1VcFJlc3BvbnNlPn0gUmV0dXJuIGEgU3VtVXBSZXNwb25zZSBvYmplY3RcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbG9naW4oc3VtVXBLZXlzOiBTdW1VcEtleXMpOiBQcm9taXNlPFN1bVVwUmVzcG9uc2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF1dGhlbnRpY2F0ZXMgdGhlIGFjY291bnQgd2l0aCB0aGUgZ2l2ZW4gYWNjZXNzIHRva2VuLiBQYXJhbWV0ZXIgYWNjZXNzVG9rZW4gaXMgcmVxdWlyZWQuXHJcbiAgICogQHBhcmFtIGFjY2Vzc1Rva2VuIHtzdHJpbmd9XHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxTdW1VcFJlc3BvbnNlPn0gUmV0dXJuIGEgU3VtVXBSZXNwb25zZSBvYmplY3RcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgYXV0aChhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxTdW1VcFJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcGVucyBhIG5ldyB3aW5kb3cgd2l0aCB0aGUgYWxsIGFjY291bnQgc2V0dGluZ3Mgb2YgYW4gbG9nZ2VkIGluIHVzZXIuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxTdW1VcFJlc3BvbnNlPn0gUmV0dXJuIGEgU3VtVXBSZXNwb25zZSBvYmplY3RcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0U2V0dGluZ3MoKTogUHJvbWlzZTxTdW1VcFJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2dvdXQgYSB1c2VyIGZyb20gdGhlIGFjY291bnQuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxTdW1VcFJlc3BvbnNlPn0gUmV0dXJuIGEgU3VtVXBSZXNwb25zZSBvYmplY3RcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbG9nb3V0KCk6IFByb21pc2U8U3VtVXBSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHVzZXIgaXMgbG9nZ2VkIGluIG9yIG5vdCBhbmQgcmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgZmllbGQgaXNMb2dnZWRJbiB3aGljaCBpcyBhIGJvb2xlYW4gdmFsdWUuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxTdW1VcFJlc3BvbnNlPn0gUmV0dXJuIGEgU3VtVXBSZXNwb25zZSBvYmplY3RcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaXNMb2dnZWRJbigpOiBQcm9taXNlPFN1bVVwTG9naW5TdGF0dXM+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZXBhcmVzIHRoZSB0ZXJtaW5hbCBmb3IgYSBwYXltZW50LiBDaGVja3Mgd2hldGhlciB0aGUgQ2FyZFJlYWRlciBpcyByZWFkeSB0byB0cmFuc21pdCBhbmRcclxuICAgKiBpZiBhbiBpbnN0YW5jZSBvZiB0aGUgQ2FyZFJlYWRlck1hbmFnZXIgaXMgYXZhaWxhYmxlLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8U3VtVXBSZXNwb25zZT59IFJldHVybiBhIFN1bVVwUmVzcG9uc2Ugb2JqZWN0XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHByZXBhcmUoKTogUHJvbWlzZTxTdW1VcFJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmllcyB0byBjbG9zZSB0aGUgY29ubmVjdGlvbiB0byB0aGUgY2FyZCB0ZXJtaW5hbC5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFN1bVVwUmVzcG9uc2U+fSBSZXR1cm4gYSBTdW1VcFJlc3BvbnNlIG9iamVjdFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjbG9zZUNvbm5lY3Rpb24oKTogUHJvbWlzZTxTdW1VcFJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcGVucyBhIG5hdGl2ZSBTdW1VcCB3aW5kb3cgdG8gcHJvY2VlZCBhIHBheW1lbnQuIFBhcmFtZXRlciBhbW91bnQgYW5kIGN1cnJlbmN5Y29kZSBhcmUgcmVxdWlyZWQuXHJcbiAgICogSWYgdGhlIFBheW1lbnQgd2FzIHN1Y2Nlc3NmdWwgaXQgcmV0dXJucyBhbiBTdW1VcFBheW1lbnQgb2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgdGhlIHBheW1lbnQuXHJcbiAgICogQHBhcmFtIGFtb3VudCB7bnVtYmVyfVxyXG4gICAqIEBwYXJhbSBjdXJyZW5jeWNvZGUge3N0cmluZ31cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFN1bVVwUmVzcG9uc2U+fSBSZXR1cm4gYSBTdW1VcFJlc3BvbnNlIG9iamVjdFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBwYXkoYW1vdW50OiBudW1iZXIsIGN1cnJlbmN5Y29kZTogc3RyaW5nKTogUHJvbWlzZTxTdW1VcFBheW1lbnQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19