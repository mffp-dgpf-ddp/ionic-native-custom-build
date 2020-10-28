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
import { IonicNativePlugin, instanceAvailability, cordovaInstance, checkAvailability } from '@ionic-native/core';
var FileTransferOriginal = /** @class */ (function (_super) {
    __extends(FileTransferOriginal, _super);
    function FileTransferOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Error code rejected from upload with FileTransferError
         * Defined in FileTransferError.
         *      FILE_NOT_FOUND_ERR: 1   Return when file was not found
         *      INVALID_URL_ERR: 2,     Return when url was invalid
         *      CONNECTION_ERR: 3,      Return on connection error
         *      ABORT_ERR: 4,           Return on aborting
         *      NOT_MODIFIED_ERR: 5     Return on '304 Not Modified' HTTP response
         * @enum {number}
         */
        _this.FileTransferErrorCode = {
            FILE_NOT_FOUND_ERR: 1,
            INVALID_URL_ERR: 2,
            CONNECTION_ERR: 3,
            ABORT_ERR: 4,
            NOT_MODIFIED_ERR: 5,
        };
        return _this;
    }
    /**
     * Creates a new FileTransferOriginal object
     * @return {FileTransferObject}
     */
    FileTransferOriginal.prototype.create = function () {
        return new FileTransferObject();
    };
    FileTransferOriginal.pluginName = "FileTransfer";
    FileTransferOriginal.plugin = "cordova-plugin-file-transfer";
    FileTransferOriginal.pluginRef = "FileTransfer";
    FileTransferOriginal.repo = "https://github.com/apache/cordova-plugin-file-transfer";
    FileTransferOriginal.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Ubuntu", "Windows", "Windows Phone"];
    return FileTransferOriginal;
}(IonicNativePlugin));
var FileTransfer = new FileTransferOriginal();
export { FileTransfer };
var FileTransferObject = /** @class */ (function () {
    function FileTransferObject() {
        if (checkAvailability(FileTransferOriginal.getPluginRef(), null, FileTransferOriginal.getPluginName()) === true) {
            this._objectInstance = new (FileTransferOriginal.getPlugin())();
        }
    }
    FileTransferObject.prototype.upload = function (fileUrl, url, options, trustAllHosts) { return cordovaInstance(this, "upload", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FileTransferObject.prototype.download = function (source, target, trustAllHosts, options) { return cordovaInstance(this, "download", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FileTransferObject.prototype.onProgress = function (listener) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                _this._objectInstance.onprogress = listener;
            }
        })();
    };
    FileTransferObject.prototype.abort = function () { return cordovaInstance(this, "abort", { "sync": true }, arguments); };
    FileTransferObject.plugin = "cordova-plugin-file-transfer";
    FileTransferObject.pluginName = "FileTransfer";
    return FileTransferObject;
}());
export { FileTransferObject };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtdHJhbnNmZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sNERBQTZELGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBNktoRixnQ0FBaUI7OztRQUNqRDs7Ozs7Ozs7O1dBU0c7UUFDSCwyQkFBcUIsR0FBRztZQUN0QixrQkFBa0IsRUFBRSxDQUFDO1lBQ3JCLGVBQWUsRUFBRSxDQUFDO1lBQ2xCLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxDQUFDO1lBQ1osZ0JBQWdCLEVBQUUsQ0FBQztTQUNwQixDQUFDOzs7SUFFRjs7O09BR0c7SUFDSCw2QkFBTSxHQUFOO1FBQ0UsT0FBTyxJQUFJLGtCQUFrQixFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O3VCQXZNSDtFQThLa0MsaUJBQWlCO1NBQXRDLFlBQVk7O0lBc0N2QjtRQUNFLElBQUksaUJBQWlCLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDL0YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFlRCxtQ0FBTSxhQUNKLE9BQWUsRUFDZixHQUFXLEVBQ1gsT0FBMkIsRUFDM0IsYUFBdUI7SUFrQnpCLHFDQUFRLGFBQUMsTUFBYyxFQUFFLE1BQWMsRUFBRSxhQUF1QixFQUFFLE9BQThCO0lBU2hHLHVDQUFVLGFBQUMsUUFBdUM7OztzREFBUTtnQkFDeEQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO2FBQzVDOzs7SUFTRCxrQ0FBSzs7OzZCQWpSUDs7U0FpTmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlQ2hlY2ssIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4sIGNoZWNrQXZhaWxhYmlsaXR5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVVwbG9hZE9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBmb3JtIGVsZW1lbnQuXHJcbiAgICogRGVmYXVsdHMgdG8gJ2ZpbGUnLlxyXG4gICAqL1xyXG4gIGZpbGVLZXk/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBmaWxlIG5hbWUgdG8gdXNlIHdoZW4gc2F2aW5nIHRoZSBmaWxlIG9uIHRoZSBzZXJ2ZXIuXHJcbiAgICogRGVmYXVsdHMgdG8gJ2ltYWdlLmpwZycuXHJcbiAgICovXHJcbiAgZmlsZU5hbWU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBIVFRQIG1ldGhvZCB0byB1c2UgLSBlaXRoZXIgUFVUIG9yIFBPU1QuXHJcbiAgICogRGVmYXVsdHMgdG8gUE9TVC5cclxuICAgKi9cclxuICBodHRwTWV0aG9kPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbWltZSB0eXBlIG9mIHRoZSBkYXRhIHRvIHVwbG9hZC5cclxuICAgKiBEZWZhdWx0cyB0byBpbWFnZS9qcGVnLlxyXG4gICAqL1xyXG4gIG1pbWVUeXBlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBIHNldCBvZiBvcHRpb25hbCBrZXkvdmFsdWUgcGFpcnMgdG8gcGFzcyBpbiB0aGUgSFRUUCByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHBhcmFtcz86IHsgW3M6IHN0cmluZ106IGFueSB9O1xyXG5cclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHVwbG9hZCB0aGUgZGF0YSBpbiBjaHVua2VkIHN0cmVhbWluZyBtb2RlLlxyXG4gICAqIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICovXHJcbiAgY2h1bmtlZE1vZGU/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBBIG1hcCBvZiBoZWFkZXIgbmFtZS9oZWFkZXIgdmFsdWVzLiBVc2UgYW4gYXJyYXkgdG8gc3BlY2lmeSBtb3JlXHJcbiAgICogdGhhbiBvbmUgdmFsdWUuIE9uIGlPUywgRmlyZU9TLCBhbmQgQW5kcm9pZCwgaWYgYSBoZWFkZXIgbmFtZWRcclxuICAgKiBDb250ZW50LVR5cGUgaXMgcHJlc2VudCwgbXVsdGlwYXJ0IGZvcm0gZGF0YSB3aWxsIE5PVCBiZSB1c2VkLlxyXG4gICAqL1xyXG4gIGhlYWRlcnM/OiB7IFtzOiBzdHJpbmddOiBhbnkgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWxlVXBsb2FkUmVzdWx0IHtcclxuICAvKipcclxuICAgKiBUaGUgbnVtYmVyIG9mIGJ5dGVzIHNlbnQgdG8gdGhlIHNlcnZlciBhcyBwYXJ0IG9mIHRoZSB1cGxvYWQuXHJcbiAgICovXHJcbiAgYnl0ZXNTZW50OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBIVFRQIHJlc3BvbnNlIGNvZGUgcmV0dXJuZWQgYnkgdGhlIHNlcnZlci5cclxuICAgKi9cclxuICByZXNwb25zZUNvZGU6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIEhUVFAgcmVzcG9uc2UgcmV0dXJuZWQgYnkgdGhlIHNlcnZlci5cclxuICAgKi9cclxuICByZXNwb25zZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgSFRUUCByZXNwb25zZSBoZWFkZXJzIGJ5IHRoZSBzZXJ2ZXIuXHJcbiAgICovXHJcbiAgaGVhZGVyczogeyBbczogc3RyaW5nXTogYW55IH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVRyYW5zZmVyRXJyb3Ige1xyXG4gIC8qKlxyXG4gICAqIE9uZSBvZiB0aGUgcHJlZGVmaW5lZCBlcnJvciBjb2RlcyBsaXN0ZWQgYmVsb3cuXHJcbiAgICovXHJcbiAgY29kZTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBVUkwgdG8gdGhlIHNvdXJjZS5cclxuICAgKi9cclxuICBzb3VyY2U6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVVJMIHRvIHRoZSB0YXJnZXQuXHJcbiAgICovXHJcbiAgdGFyZ2V0OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhUVFAgc3RhdHVzIGNvZGUuIFRoaXMgYXR0cmlidXRlIGlzIG9ubHkgYXZhaWxhYmxlIHdoZW4gYSByZXNwb25zZVxyXG4gICAqIGNvZGUgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgSFRUUCBjb25uZWN0aW9uLlxyXG4gICAqL1xyXG4gIGh0dHBfc3RhdHVzOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc3BvbnNlIGJvZHkuIFRoaXMgYXR0cmlidXRlIGlzIG9ubHkgYXZhaWxhYmxlIHdoZW4gYSByZXNwb25zZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBIVFRQIGNvbm5lY3Rpb24uXHJcbiAgICovXHJcbiAgYm9keTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBFaXRoZXIgZS5nZXRNZXNzYWdlIG9yIGUudG9TdHJpbmcuXHJcbiAgICovXHJcbiAgZXhjZXB0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBGaWxlIFRyYW5zZmVyXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHVwbG9hZCBhbmQgZG93bmxvYWQgZmlsZXMuXHJcbiAqIFxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBGaWxlVHJhbnNmZXIsIEZpbGVVcGxvYWRPcHRpb25zLCBGaWxlVHJhbnNmZXJPYmplY3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZpbGUtdHJhbnNmZXIvbmd4JztcclxuICogaW1wb3J0IHsgRmlsZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlsZSc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNmZXI6IEZpbGVUcmFuc2ZlciwgcHJpdmF0ZSBmaWxlOiBGaWxlKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGNvbnN0IGZpbGVUcmFuc2ZlcjogRmlsZVRyYW5zZmVyT2JqZWN0ID0gdGhpcy50cmFuc2Zlci5jcmVhdGUoKTtcclxuICpcclxuICogLy8gVXBsb2FkIGEgZmlsZTpcclxuICogZmlsZVRyYW5zZmVyLnVwbG9hZCguLikudGhlbiguLikuY2F0Y2goLi4pO1xyXG4gKlxyXG4gKiAvLyBEb3dubG9hZCBhIGZpbGU6XHJcbiAqIGZpbGVUcmFuc2Zlci5kb3dubG9hZCguLikudGhlbiguLikuY2F0Y2goLi4pO1xyXG4gKlxyXG4gKiAvLyBBYm9ydCBhY3RpdmUgdHJhbnNmZXI6XHJcbiAqIGZpbGVUcmFuc2Zlci5hYm9ydCgpO1xyXG4gKlxyXG4gKiAvLyBmdWxsIGV4YW1wbGVcclxuICogdXBsb2FkKCkge1xyXG4gKiAgIGxldCBvcHRpb25zOiBGaWxlVXBsb2FkT3B0aW9ucyA9IHtcclxuICogICAgICBmaWxlS2V5OiAnZmlsZScsXHJcbiAqICAgICAgZmlsZU5hbWU6ICduYW1lLmpwZycsXHJcbiAqICAgICAgaGVhZGVyczoge31cclxuICogICAgICAuLi4uLlxyXG4gKiAgIH1cclxuICpcclxuICogICBmaWxlVHJhbnNmZXIudXBsb2FkKCc8ZmlsZSBwYXRoPicsICc8YXBpIGVuZHBvaW50PicsIG9wdGlvbnMpXHJcbiAqICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAqICAgICAgLy8gc3VjY2Vzc1xyXG4gKiAgICB9LCAoZXJyKSA9PiB7XHJcbiAqICAgICAgLy8gZXJyb3JcclxuICogICAgfSlcclxuICogfVxyXG4gKlxyXG4gKiBkb3dubG9hZCgpIHtcclxuICogICBjb25zdCB1cmwgPSAnaHR0cDovL3d3dy5leGFtcGxlLmNvbS9maWxlLnBkZic7XHJcbiAqICAgZmlsZVRyYW5zZmVyLmRvd25sb2FkKHVybCwgdGhpcy5maWxlLmRhdGFEaXJlY3RvcnkgKyAnZmlsZS5wZGYnKS50aGVuKChlbnRyeSkgPT4ge1xyXG4gKiAgICAgY29uc29sZS5sb2coJ2Rvd25sb2FkIGNvbXBsZXRlOiAnICsgZW50cnkudG9VUkwoKSk7XHJcbiAqICAgfSwgKGVycm9yKSA9PiB7XHJcbiAqICAgICAvLyBoYW5kbGUgZXJyb3JcclxuICogICB9KTtcclxuICogfVxyXG4gKlxyXG4gKiBgYGBcclxuICpcclxuICogVG8gc3RvcmUgZmlsZXMgaW4gYSBkaWZmZXJlbnQvcHVibGljbHkgYWNjZXNzaWJsZSBkaXJlY3RvcnksIHBsZWFzZSByZWZlciB0byB0aGUgZm9sbG93aW5nIGxpbmtcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlI3doZXJlLXRvLXN0b3JlLWZpbGVzXHJcbiAqXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIEZpbGVVcGxvYWRPcHRpb25zXHJcbiAqIEZpbGVVcGxvYWRSZXN1bHRcclxuICogRmlsZVRyYW5zZmVyRXJyb3JcclxuICogQGNsYXNzZXNcclxuICogRmlsZVRyYW5zZmVyT2JqZWN0XHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRmlsZVRyYW5zZmVyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maWxlLXRyYW5zZmVyJyxcclxuICBwbHVnaW5SZWY6ICdGaWxlVHJhbnNmZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWZpbGUtdHJhbnNmZXInLFxyXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1VidW50dScsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlsZVRyYW5zZmVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIEVycm9yIGNvZGUgcmVqZWN0ZWQgZnJvbSB1cGxvYWQgd2l0aCBGaWxlVHJhbnNmZXJFcnJvclxyXG4gICAqIERlZmluZWQgaW4gRmlsZVRyYW5zZmVyRXJyb3IuXHJcbiAgICogICAgICBGSUxFX05PVF9GT1VORF9FUlI6IDEgICBSZXR1cm4gd2hlbiBmaWxlIHdhcyBub3QgZm91bmRcclxuICAgKiAgICAgIElOVkFMSURfVVJMX0VSUjogMiwgICAgIFJldHVybiB3aGVuIHVybCB3YXMgaW52YWxpZFxyXG4gICAqICAgICAgQ09OTkVDVElPTl9FUlI6IDMsICAgICAgUmV0dXJuIG9uIGNvbm5lY3Rpb24gZXJyb3JcclxuICAgKiAgICAgIEFCT1JUX0VSUjogNCwgICAgICAgICAgIFJldHVybiBvbiBhYm9ydGluZ1xyXG4gICAqICAgICAgTk9UX01PRElGSUVEX0VSUjogNSAgICAgUmV0dXJuIG9uICczMDQgTm90IE1vZGlmaWVkJyBIVFRQIHJlc3BvbnNlXHJcbiAgICogQGVudW0ge251bWJlcn1cclxuICAgKi9cclxuICBGaWxlVHJhbnNmZXJFcnJvckNvZGUgPSB7XHJcbiAgICBGSUxFX05PVF9GT1VORF9FUlI6IDEsXHJcbiAgICBJTlZBTElEX1VSTF9FUlI6IDIsXHJcbiAgICBDT05ORUNUSU9OX0VSUjogMyxcclxuICAgIEFCT1JUX0VSUjogNCxcclxuICAgIE5PVF9NT0RJRklFRF9FUlI6IDUsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBGaWxlVHJhbnNmZXIgb2JqZWN0XHJcbiAgICogQHJldHVybiB7RmlsZVRyYW5zZmVyT2JqZWN0fVxyXG4gICAqL1xyXG4gIGNyZWF0ZSgpOiBGaWxlVHJhbnNmZXJPYmplY3Qge1xyXG4gICAgcmV0dXJuIG5ldyBGaWxlVHJhbnNmZXJPYmplY3QoKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maWxlLXRyYW5zZmVyJyxcclxuICBwbHVnaW5OYW1lOiAnRmlsZVRyYW5zZmVyJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVUcmFuc2Zlck9iamVjdCB7XHJcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoRmlsZVRyYW5zZmVyLmdldFBsdWdpblJlZigpLCBudWxsLCBGaWxlVHJhbnNmZXIuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IG5ldyAoRmlsZVRyYW5zZmVyLmdldFBsdWdpbigpKSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VuZHMgYSBmaWxlIHRvIGEgc2VydmVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVVcmwgIEZpbGVzeXN0ZW0gVVJMIHJlcHJlc2VudGluZyB0aGUgZmlsZSBvbiB0aGUgZGV2aWNlIG9yIGEgZGF0YSBVUkkuIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgdGhpcyBjYW4gYWxzbyBiZSB0aGUgZnVsbCBwYXRoIG9mIHRoZSBmaWxlIG9uIHRoZSBkZXZpY2UuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgVVJMIG9mIHRoZSBzZXJ2ZXIgdG8gcmVjZWl2ZSB0aGUgZmlsZSwgYXMgZW5jb2RlZCBieSBlbmNvZGVVUkkoKS5cclxuICAgKiBAcGFyYW0ge0ZpbGVVcGxvYWRPcHRpb25zfSBbb3B0aW9uc10gIE9wdGlvbmFsIHBhcmFtZXRlcnMuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbdHJ1c3RBbGxIb3N0c10gIE9wdGlvbmFsIHBhcmFtZXRlciwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIHNldCB0byB0cnVlLCBpdCBhY2NlcHRzIGFsbCBzZWN1cml0eSBjZXJ0aWZpY2F0ZXMuIFRoaXMgaXMgdXNlZnVsIHNpbmNlIEFuZHJvaWQgcmVqZWN0cyBzZWxmLXNpZ25lZCBzZWN1cml0eSBjZXJ0aWZpY2F0ZXMuIE5vdCByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiB1c2UuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIGFuZCBpT1MuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8RmlsZVVwbG9hZFJlc3VsdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBGaWxlVXBsb2FkUmVzdWx0IGFuZCByZWplY3RzIHdpdGggRmlsZVRyYW5zZmVyRXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDIsXHJcbiAgICBlcnJvckluZGV4OiAzLFxyXG4gIH0pXHJcbiAgdXBsb2FkKFxyXG4gICAgZmlsZVVybDogc3RyaW5nLFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zPzogRmlsZVVwbG9hZE9wdGlvbnMsXHJcbiAgICB0cnVzdEFsbEhvc3RzPzogYm9vbGVhblxyXG4gICk6IFByb21pc2U8RmlsZVVwbG9hZFJlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRG93bmxvYWRzIGEgZmlsZSBmcm9tIHNlcnZlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgIFVSTCBvZiB0aGUgc2VydmVyIHRvIGRvd25sb2FkIHRoZSBmaWxlLCBhcyBlbmNvZGVkIGJ5IGVuY29kZVVSSSgpLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXQgIEZpbGVzeXN0ZW0gdXJsIHJlcHJlc2VudGluZyB0aGUgZmlsZSBvbiB0aGUgZGV2aWNlLiBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHRoaXMgY2FuIGFsc28gYmUgdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZmlsZSBvbiB0aGUgZGV2aWNlLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RydXN0QWxsSG9zdHNdICBPcHRpb25hbCBwYXJhbWV0ZXIsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBzZXQgdG8gdHJ1ZSwgaXQgYWNjZXB0cyBhbGwgc2VjdXJpdHkgY2VydGlmaWNhdGVzLiBUaGlzIGlzIHVzZWZ1bCBiZWNhdXNlIEFuZHJvaWQgcmVqZWN0cyBzZWxmLXNpZ25lZCBzZWN1cml0eSBjZXJ0aWZpY2F0ZXMuIE5vdCByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiB1c2UuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIGFuZCBpT1MuXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IFtPcHRpb25hbF0gcGFyYW1ldGVycywgY3VycmVudGx5IG9ubHkgc3VwcG9ydHMgaGVhZGVycyAoc3VjaCBhcyBBdXRob3JpemF0aW9uIChCYXNpYyBBdXRoZW50aWNhdGlvbiksIGV0YykuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIEZpbGVFbnRyeSBvYmplY3QuXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDIsXHJcbiAgICBlcnJvckluZGV4OiAzLFxyXG4gIH0pXHJcbiAgZG93bmxvYWQoc291cmNlOiBzdHJpbmcsIHRhcmdldDogc3RyaW5nLCB0cnVzdEFsbEhvc3RzPzogYm9vbGVhbiwgb3B0aW9ucz86IHsgW3M6IHN0cmluZ106IGFueSB9KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVycyBhIGxpc3RlbmVyIHRoYXQgZ2V0cyBjYWxsZWQgd2hlbmV2ZXIgYSBuZXcgY2h1bmsgb2YgZGF0YSBpcyB0cmFuc2ZlcnJlZC5cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBMaXN0ZW5lciB0aGF0IHRha2VzIGEgcHJvZ3Jlc3MgZXZlbnQuXHJcbiAgICovXHJcbiAgQEluc3RhbmNlQ2hlY2soeyBzeW5jOiB0cnVlIH0pXHJcbiAgb25Qcm9ncmVzcyhsaXN0ZW5lcjogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLm9ucHJvZ3Jlc3MgPSBsaXN0ZW5lcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFib3J0cyBhbiBpbi1wcm9ncmVzcyB0cmFuc2Zlci4gVGhlIG9uZXJyb3IgY2FsbGJhY2sgaXMgcGFzc2VkIGEgRmlsZVRyYW5zZmVyRXJyb3JcclxuICAgKiBvYmplY3Qgd2hpY2ggaGFzIGFuIGVycm9yIGNvZGUgb2YgRmlsZVRyYW5zZmVyRXJyb3IuQUJPUlRfRVJSLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIGFib3J0KCk6IHZvaWQge31cclxufVxyXG4iXX0=