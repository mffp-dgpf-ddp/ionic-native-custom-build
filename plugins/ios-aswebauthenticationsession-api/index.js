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
var IosASWebauthenticationSessionOriginal = /** @class */ (function (_super) {
    __extends(IosASWebauthenticationSessionOriginal, _super);
    function IosASWebauthenticationSessionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IosASWebauthenticationSessionOriginal.prototype.start = function (callbackUrl, authorizeURL) { return cordova(this, "start", {}, arguments); };
    IosASWebauthenticationSessionOriginal.pluginName = "IosASWebauthenticationSession";
    IosASWebauthenticationSessionOriginal.plugin = "cordova-plugin-ios-aswebauthenticationsession-api";
    IosASWebauthenticationSessionOriginal.pluginRef = "plugins.ASWebAuthSession";
    IosASWebauthenticationSessionOriginal.repo = "https://github.com/jwelker110/cordova-plugin-ios-aswebauthenticationsession-api";
    IosASWebauthenticationSessionOriginal.platforms = ["iOS"];
    return IosASWebauthenticationSessionOriginal;
}(IonicNativePlugin));
var IosASWebauthenticationSession = new IosASWebauthenticationSessionOriginal();
export { IosASWebauthenticationSession };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lvcy1hc3dlYmF1dGhlbnRpY2F0aW9uc2Vzc2lvbi1hcGkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBaUNyQixpREFBaUI7Ozs7SUFRbEUsNkNBQUssYUFDSCxXQUFtQixFQUNuQixZQUFvQjs7Ozs7O3dDQTVDeEI7RUFrQ21ELGlCQUFpQjtTQUF2RCw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIGlvcy1hc3dlYmF1dGhlbnRpY2F0aW9uc2Vzc2lvbi1hcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFBsdWdpbiBmb3IgaU9TIDEyIEFTV2ViQXV0aGVudGljYXRpb25TZXNzaW9uIEFQSVxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBJb3NBU1dlYmF1dGhlbnRpY2F0aW9uU2Vzc2lvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW9zLWFzd2ViYXV0aGVudGljYXRpb25zZXNzaW9uLWFwaS9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIElvc0FTV2ViYXV0aGVudGljYXRpb25TZXNzaW9uOiBpb3MtYXN3ZWJhdXRoZW50aWNhdGlvbnNlc3Npb24tYXBpKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuSW9zQVNXZWJhdXRoZW50aWNhdGlvblNlc3Npb24uc3RhcnQoY2FsbGJhY2tVcmwsIGF1dGhvcml6ZVVSTClcclxuICogICAudGhlbigocmVkaXJlY3RVcmw6IHN0cmluZykgPT4gY29uc29sZS5sb2cocmVkaXJlY3RVcmwpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSW9zQVNXZWJhdXRoZW50aWNhdGlvblNlc3Npb24nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWlvcy1hc3dlYmF1dGhlbnRpY2F0aW9uc2Vzc2lvbi1hcGknLFxyXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuQVNXZWJBdXRoU2Vzc2lvbicsXHJcbiAgcmVwbzpcclxuICAgICdodHRwczovL2dpdGh1Yi5jb20vandlbGtlcjExMC9jb3Jkb3ZhLXBsdWdpbi1pb3MtYXN3ZWJhdXRoZW50aWNhdGlvbnNlc3Npb24tYXBpJyxcclxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIElvc0FTV2ViYXV0aGVudGljYXRpb25TZXNzaW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RhcnQgYW4gYXV0aGVudGljYXRpb24gZmxvdyBpbiBBU1dlYmF1dGhlbnRpY2F0aW9uU2Vzc2lvblxyXG4gICAqIEBwYXJhbSBjYWxsYmFja1VybCB7c3RyaW5nfSBDYWxsYmFjayBVUkwgb2YgeW91ciBBcHBcclxuICAgKiBAcGFyYW0gYXV0aG9yaXplVVJMIHtudW1iZXJ9IEF1dGhvcml6YXRpb24gVVJMXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHJlZGlyZWN0IFVSTCBhZnRlciBmaW5pc2hpbmcgQVNXZWJhdXRoZW50aWNhdGlvblNlc3Npb25cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RhcnQoXHJcbiAgICBjYWxsYmFja1VybDogc3RyaW5nLFxyXG4gICAgYXV0aG9yaXplVVJMOiBzdHJpbmdcclxuICApOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=