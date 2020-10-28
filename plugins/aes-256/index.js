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
var AES256Original = /** @class */ (function (_super) {
    __extends(AES256Original, _super);
    function AES256Original() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AES256Original.prototype.encrypt = function (secureKey, secureIV, data) { return cordova(this, "encrypt", {}, arguments); };
    AES256Original.prototype.decrypt = function (secureKey, secureIV, data) { return cordova(this, "decrypt", {}, arguments); };
    AES256Original.prototype.generateSecureKey = function (password) { return cordova(this, "generateSecureKey", {}, arguments); };
    AES256Original.prototype.generateSecureIV = function (password) { return cordova(this, "generateSecureIV", {}, arguments); };
    AES256Original.pluginName = "AES256";
    AES256Original.plugin = "cordova-plugin-aes256-encryption";
    AES256Original.pluginRef = "cordova.plugins.AES256";
    AES256Original.repo = "https://github.com/Ideas2IT/cordova-aes256";
    AES256Original.platforms = ["Android", "iOS"];
    AES256Original.install = "ionic cordova plugin add cordova-plugin-aes256-encryption";
    return AES256Original;
}(IonicNativePlugin));
var AES256 = new AES256Original();
export { AES256 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Flcy0yNTYvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBd0Q1QywwQkFBaUI7Ozs7SUFTM0Msd0JBQU8sYUFBQyxTQUFpQixFQUFFLFFBQWdCLEVBQUUsSUFBWTtJQVl6RCx3QkFBTyxhQUFDLFNBQWlCLEVBQUUsUUFBZ0IsRUFBRSxJQUFZO0lBV3pELGtDQUFpQixhQUFDLFFBQWdCO0lBV2xDLGlDQUFnQixhQUFDLFFBQWdCOzs7Ozs7O2lCQXBHbkM7RUF5RDRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBBRVMyNTZcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgY29yZG92YSBpb25pYyBwbHVnaW4gYWxsb3dzIHlvdSB0byBwZXJmb3JtIEFFUyAyNTYgZW5jcnlwdGlvbiBhbmQgZGVjcnlwdGlvbiBvbiB0aGUgcGxhaW4gdGV4dC5cclxuICogSXQncyBhIGNyb3NzLXBsYXRmb3JtIHBsdWdpbiB3aGljaCBzdXBwb3J0cyBib3RoIEFuZHJvaWQgYW5kIGlPUy5cclxuICogVGhlIGVuY3J5cHRpb24gYW5kIGRlY3J5cHRpb24gYXJlIHBlcmZvcm1lZCBvbiB0aGUgZGV2aWNlIG5hdGl2ZSBsYXllciBzbyB0aGF0IHRoZSBwZXJmb3JtYW5jZSBpcyBtdWNoIGZhc3Rlci5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQUVTMjU2IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hZXMtMjU2L25neCc7XHJcbiAqXHJcbiAqIHByaXZhdGUgc2VjdXJlS2V5OiBzdHJpbmc7XHJcbiAqIHByaXZhdGUgc2VjdXJlSVY6IHN0cmluZztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhZXMyNTY6IEFFUzI1Nikge1xyXG4gKiAgICB0aGlzLmdlbmVyYXRlU2VjdXJlS2V5QW5kSVYoKTsgLy8gVG8gZ2VuZXJhdGUgdGhlIHJhbmRvbSBzZWN1cmVLZXkgYW5kIHNlY3VyZUlWXHJcbiAqIH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGFzeW5jIGdlbmVyYXRlU2VjdXJlS2V5QW5kSVYoKSB7XHJcbiAqICAgIHRoaXMuc2VjdXJlS2V5ID0gYXdhaXQgdGhpcy5hZXMyNTYuZ2VuZXJhdGVTZWN1cmVLZXkoJ3JhbmRvbSBwYXNzd29yZCAxMjM0NScpOyAvLyBSZXR1cm5zIGEgMzIgYnl0ZXMgc3RyaW5nXHJcbiAqICAgIHRoaXMuc2VjdXJlSVYgPSBhd2FpdCB0aGlzLmFlczI1Ni5nZW5lcmF0ZVNlY3VyZUlWKCdyYW5kb20gcGFzc3dvcmQgMTIzNDUnKTsgLy8gUmV0dXJucyBhIDE2IGJ5dGVzIHN0cmluZ1xyXG4gKiB9XHJcbiAqXHJcbiAqIHRoaXMuYWVzMjU2LmVuY3J5cHQodGhpcy5zZWN1cmVLZXksIHRoaXMuc2VjdXJlSVYsICd0ZXN0ZGF0YScpXHJcbiAqICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKCdFbmNyeXB0ZWQgRGF0YTogJyxyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiB0aGlzLmFlczI1Ni5kZWNyeXB0KHRoaXMuc2VjdXJlS2V5LCB0aGlzLnNlY3VyZUlWLCAnZW5jcnlwdGVkRGF0YScpXHJcbiAqICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKCdEZWNyeXB0ZWQgRGF0YSA6ICcscmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICpcclxuICogKiB0aGlzLmFlczI1Ni5nZW5lcmF0ZVNlY3VyZUtleSgncmFuZG9tIHBhc3N3b3JkIDEyMzQ1JylcclxuICogICAudGhlbihyZXMgPT4gY29uc29sZS5sb2coJ1NlY3VyZSBLZXkgOiAnLHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqXHJcbiAqICogdGhpcy5hZXMyNTYuZ2VuZXJhdGVTZWN1cmVJVigncmFuZG9tIHBhc3N3b3JkIDEyMzQ1JylcclxuICogICAudGhlbihyZXMgPT4gY29uc29sZS5sb2coJ1NlY3VyZSBJViA6ICcscmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQUVTMjU2JyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hZXMyNTYtZW5jcnlwdGlvbicsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkFFUzI1NicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9JZGVhczJJVC9jb3Jkb3ZhLWFlczI1NicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1hZXMyNTYtZW5jcnlwdGlvbicsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFFUzI1NiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIHVzZWQgdG8gcGVyZm9ybSB0aGUgYWVzMjU2IGVuY3J5cHRpb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VjdXJlS2V5IEEgMzIgYnl0ZXMgc3RyaW5nLCB3aGljaCB3aWxsIHVzZWQgYXMgaW5wdXQga2V5IGZvciBBRVMyNTYgZW5jcnlwdGlvbi5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VjdXJlSVYgQSAxNiBieXRlcyBzdHJpbmcsIHdoaWNoIHdpbGwgdXNlZCBhcyBpbml0aWFsIHZlY3RvciBmb3IgQUVTMjU2IGVuY3J5cHRpb24uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgQSBzdHJpbmcgd2hpY2ggd2lsbCBiZSBlbmNyeXB0ZWRcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBlbmNyeXB0aW9uIGhhcHBlbnMuIFRoZSBzdWNjZXNzIHJlc3BvbnNlIHdpbGwgcmV0dXJucyBlbmNyeXB0ZWQgZGF0YS5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZW5jcnlwdChzZWN1cmVLZXk6IHN0cmluZywgc2VjdXJlSVY6IHN0cmluZywgZGF0YTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gdXNlZCB0byBwZXJmb3JtIHRoZSBhZXMyNTYgZGVjcnlwdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWN1cmVLZXkgQSAzMiBieXRlcyBzdHJpbmcsIHdoaWNoIHdpbGwgdXNlZCBhcyBpbnB1dCBrZXkgZm9yIEFFUzI1NiBkZWNyeXB0aW9uLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWN1cmVJViBBIDE2IGJ5dGVzIHN0cmluZywgd2hpY2ggd2lsbCB1c2VkIGFzIGluaXRpYWwgdmVjdG9yIGZvciBBRVMyNTYgZGVjcnlwdGlvbi5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSBBbiBBRVMyNTYgZW5jcnlwdGVkIGRhdGEgd2hpY2ggd2lsbCBiZSBkZWNyeXB0ZWQuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gZGVjcnlwdGlvbiBoYXBwZW5zLiBUaGUgc3VjY2VzcyByZXNwb25zZSB3aWxsIHJldHVybnMgZGVjcnlwdGVkIGRhdGEuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRlY3J5cHQoc2VjdXJlS2V5OiBzdHJpbmcsIHNlY3VyZUlWOiBzdHJpbmcsIGRhdGE6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIHVzZWQgdG8gZ2VuZXJhdGUgYSBzZWN1cmUga2V5IGJhc2VkIG9uIGFuIHBhc3N3b3JkLiBQZXJmZWN0IGlmIHlvdSB3YW50IHRvIGRlbGVnYXRlIHRoZSBrZXkgZ2VuZXJhdGlvbiBmb3IgZW5jcnlwdGlvbiB0byB0aGUgcGx1Z2luLlxyXG4gICAqIE1ha2Ugc3VyZSB0byBzYXZlIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhpcyBmdW5jdGlvbiBzb21ld2hlcmUgc28geW91ciBlbmNyeXB0ZWQgZGF0YSBjYW4gYmUgZGVjcnlwdGVkIGluIHRoZSBmdXR1cmUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIEEgcmFuZG9tIHN0cmluZywgd2hpY2ggd2lsbCBiZSB1c2VkIGFzIGlucHV0IGZvciBhIFBCS0RGMiBmdW5jdGlvblxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGtleSBpcyBnZW5lcmF0ZWQuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdlbmVyYXRlU2VjdXJlS2V5KHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiB1c2VkIHRvIGdlbmVyYXRlIGEgc2VjdXJlIElWIGJhc2VkIG9uIGFuIHBhc3N3b3JkLiBQZXJmZWN0IGlmIHlvdSB3YW50IHRvIGRlbGVnYXRlIHRoZSBJViBnZW5lcmF0aW9uIGZvciBlbmNyeXB0aW9uIHRvIHRoZSBwbHVnaW4uXHJcbiAgICogTWFrZSBzdXJlIHRvIHNhdmUgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGlzIGZ1bmN0aW9uIHNvbWV3aGVyZSBzbyB5b3VyIGVuY3J5cHRlZCBkYXRhIGNhbiBiZSBkZWNyeXB0ZWQgaW4gdGhlIGZ1dHVyZS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgQSByYW5kb20gc3RyaW5nLCB3aGljaCB3aWxsIGJlIHVzZWQgYXMgaW5wdXQgZm9yIGEgUEJLREYyIGZ1bmN0aW9uXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gSVYgaXMgZ2VuZXJhdGVkLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZW5lcmF0ZVNlY3VyZUlWKHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=