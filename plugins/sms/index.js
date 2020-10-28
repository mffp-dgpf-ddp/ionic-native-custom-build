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
var SMSOriginal = /** @class */ (function (_super) {
    __extends(SMSOriginal, _super);
    function SMSOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSOriginal.prototype.send = function (phoneNumber, message, options) { return cordova(this, "send", { "successIndex": 3, "errorIndex": 4 }, arguments); };
    SMSOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", { "platforms": ["Android"] }, arguments); };
    SMSOriginal.pluginName = "SMS";
    SMSOriginal.plugin = "cordova-sms-plugin";
    SMSOriginal.pluginRef = "sms";
    SMSOriginal.repo = "https://github.com/cordova-sms/cordova-sms-plugin";
    SMSOriginal.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    return SMSOriginal;
}(IonicNativePlugin));
var SMS = new SMSOriginal();
export { SMS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Ntcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFvRC9DLHVCQUFpQjs7OztJQVl4QyxrQkFBSSxhQUFDLFdBQThCLEVBQUUsT0FBZSxFQUFFLE9BQW9CO0lBVzFFLDJCQUFhOzs7Ozs7Y0E1RWY7RUFxRHlCLGlCQUFpQjtTQUE3QixHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBPcHRpb25zIGZvciBzZW5kaW5nIGFuIFNNU1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTbXNPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBTZXQgdG8gdHJ1ZSB0byByZXBsYWNlIFxcbiBieSBhIG5ldyBsaW5lLiBEZWZhdWx0OiBmYWxzZVxyXG4gICAqL1xyXG4gIHJlcGxhY2VMaW5lQnJlYWtzPzogYm9vbGVhbjtcclxuXHJcbiAgYW5kcm9pZD86IFNtc09wdGlvbnNBbmRyb2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNtc09wdGlvbnNBbmRyb2lkIHtcclxuICAvKipcclxuICAgKiBTZXQgdG8gXCJJTlRFTlRcIiB0byBzZW5kIFNNUyB3aXRoIHRoZSBuYXRpdmUgYW5kcm9pZCBTTVMgbWVzc2FnaW5nLiBMZWF2aW5nIGl0IGVtcHR5IHdpbGwgc2VuZCB0aGUgU01TIHdpdGhvdXQgb3BlbmluZyBhbnkgYXBwLlxyXG4gICAqL1xyXG4gIGludGVudD86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNNU1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtc21zLXBsdWdpbi4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1NNUyBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2NvcmRvdmEtc21zL2NvcmRvdmEtc21zLXBsdWdpbikuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNNUyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc21zL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc21zOiBTTVMpIHsgfVxyXG4gKlxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogLy8gU2VuZCBhIHRleHQgbWVzc2FnZSB1c2luZyBkZWZhdWx0IG9wdGlvbnNcclxuICogdGhpcy5zbXMuc2VuZCgnNDE2MTIzNDU2JywgJ0hlbGxvIHdvcmxkIScpO1xyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogU21zT3B0aW9uc1xyXG4gKiBTbXNPcHRpb25zQW5kcm9pZFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1NNUycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1zbXMtcGx1Z2luJyxcclxuICBwbHVnaW5SZWY6ICdzbXMnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1zbXMvY29yZG92YS1zbXMtcGx1Z2luJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lIDgnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU01TIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFNlbmRzIHNtcyB0byBhIG51bWJlclxyXG4gICAqIEBwYXJhbSBwaG9uZU51bWJlciB7c3RyaW5nfHN0cmluZ1tdfSBQaG9uZSBudW1iZXJcclxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBNZXNzYWdlXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge1Ntc09wdGlvbnN9IE9wdGlvbnNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBwcm9taXNlIHdoZW4gdGhlIFNNUyBoYXMgYmVlbiBzZW50XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAzLFxyXG4gICAgZXJyb3JJbmRleDogNCxcclxuICB9KVxyXG4gIHNlbmQocGhvbmVOdW1iZXI6IHN0cmluZyB8IHN0cmluZ1tdLCBtZXNzYWdlOiBzdHJpbmcsIG9wdGlvbnM/OiBTbXNPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gbGV0cyB5b3Uga25vdyBpZiB0aGUgYXBwIGhhcyBwZXJtaXNzaW9uIHRvIHNlbmQgU01TXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB3ZSBoYXZlIHBlcm1pc3Npb25cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG4gIH0pXHJcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19