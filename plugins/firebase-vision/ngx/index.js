import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
export var BarcodeFormat;
(function (BarcodeFormat) {
    BarcodeFormat[BarcodeFormat["UNKNOWN"] = -1] = "UNKNOWN";
    BarcodeFormat[BarcodeFormat["ALL_FORMATS"] = 0] = "ALL_FORMATS";
    BarcodeFormat[BarcodeFormat["CODE_128"] = 1] = "CODE_128";
    BarcodeFormat[BarcodeFormat["CODE_39"] = 2] = "CODE_39";
    BarcodeFormat[BarcodeFormat["CODE_93"] = 4] = "CODE_93";
    BarcodeFormat[BarcodeFormat["CODABAR"] = 8] = "CODABAR";
    BarcodeFormat[BarcodeFormat["DATA_MATRIX"] = 16] = "DATA_MATRIX";
    BarcodeFormat[BarcodeFormat["EAN_13"] = 32] = "EAN_13";
    BarcodeFormat[BarcodeFormat["EAN_8"] = 64] = "EAN_8";
    BarcodeFormat[BarcodeFormat["ITF"] = 128] = "ITF";
    BarcodeFormat[BarcodeFormat["QR_CODE"] = 256] = "QR_CODE";
    BarcodeFormat[BarcodeFormat["UPC_A"] = 512] = "UPC_A";
    BarcodeFormat[BarcodeFormat["UPC_E"] = 1024] = "UPC_E";
    BarcodeFormat[BarcodeFormat["PDF417"] = 2048] = "PDF417";
    BarcodeFormat[BarcodeFormat["AZTEC"] = 4096] = "AZTEC";
})(BarcodeFormat || (BarcodeFormat = {}));
export var BarcodeValueType;
(function (BarcodeValueType) {
    /** Unknown Barcode value types.  */
    BarcodeValueType[BarcodeValueType["Unknown"] = 0] = "Unknown";
    /** Barcode value type for contact info. */
    BarcodeValueType[BarcodeValueType["ContactInfo"] = 1] = "ContactInfo";
    /** Barcode value type for email addresses. */
    BarcodeValueType[BarcodeValueType["Email"] = 2] = "Email";
    /** Barcode value type for ISBNs. */
    BarcodeValueType[BarcodeValueType["ISBN"] = 3] = "ISBN";
    /** Barcode value type for phone numbers. */
    BarcodeValueType[BarcodeValueType["Phone"] = 4] = "Phone";
    /** Barcode value type for product codes. */
    BarcodeValueType[BarcodeValueType["Product"] = 5] = "Product";
    /** Barcode value type for SMS details. */
    BarcodeValueType[BarcodeValueType["SMS"] = 6] = "SMS";
    /** Barcode value type for plain text. */
    BarcodeValueType[BarcodeValueType["Text"] = 7] = "Text";
    /** Barcode value type for URLs/bookmarks. */
    BarcodeValueType[BarcodeValueType["URL"] = 8] = "URL";
    /** Barcode value type for Wi-Fi access point details. */
    BarcodeValueType[BarcodeValueType["WiFi"] = 9] = "WiFi";
    /** Barcode value type for geographic coordinates. */
    BarcodeValueType[BarcodeValueType["GeographicCoordinates"] = 10] = "GeographicCoordinates";
    /** Barcode value type for calendar events. */
    BarcodeValueType[BarcodeValueType["CalendarEvent"] = 11] = "CalendarEvent";
    /** Barcode value type for driver's license data. */
    BarcodeValueType[BarcodeValueType["DriversLicense"] = 12] = "DriversLicense";
})(BarcodeValueType || (BarcodeValueType = {}));
export var BarcodeEmailType;
(function (BarcodeEmailType) {
    /** Unknown email type. */
    BarcodeEmailType[BarcodeEmailType["Unknown"] = 0] = "Unknown";
    /** Barcode work email type. */
    BarcodeEmailType[BarcodeEmailType["Work"] = 1] = "Work";
    /** Barcode home email type. */
    BarcodeEmailType[BarcodeEmailType["Home"] = 2] = "Home";
})(BarcodeEmailType || (BarcodeEmailType = {}));
export var BarcodePhoneType;
(function (BarcodePhoneType) {
    /** Unknown phone type. */
    BarcodePhoneType[BarcodePhoneType["Unknown"] = 0] = "Unknown";
    /** Barcode work phone type. */
    BarcodePhoneType[BarcodePhoneType["Work"] = 1] = "Work";
    /** Barcode home phone type. */
    BarcodePhoneType[BarcodePhoneType["Home"] = 2] = "Home";
    /** Barcode fax phone type. */
    BarcodePhoneType[BarcodePhoneType["Fax"] = 3] = "Fax";
    /** Barcode mobile phone type. */
    BarcodePhoneType[BarcodePhoneType["Mobile"] = 4] = "Mobile";
})(BarcodePhoneType || (BarcodePhoneType = {}));
export var BarcodeWiFiEncryptionType;
(function (BarcodeWiFiEncryptionType) {
    /** Barcode unknown Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["Unknown"] = 0] = "Unknown";
    /** Barcode open Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["Open"] = 1] = "Open";
    /** Barcode WPA Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["WPA"] = 2] = "WPA";
    /** Barcode WEP Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["WEP"] = 3] = "WEP";
})(BarcodeWiFiEncryptionType || (BarcodeWiFiEncryptionType = {}));
export var BarcodeAddressType;
(function (BarcodeAddressType) {
    /** Barcode unknown address type. */
    BarcodeAddressType[BarcodeAddressType["Unknown"] = 0] = "Unknown";
    /** Barcode work address type. */
    BarcodeAddressType[BarcodeAddressType["Work"] = 1] = "Work";
    /** Barcode home address type. */
    BarcodeAddressType[BarcodeAddressType["Home"] = 2] = "Home";
})(BarcodeAddressType || (BarcodeAddressType = {}));
var FirebaseVision = /** @class */ (function (_super) {
    __extends(FirebaseVision, _super);
    function FirebaseVision() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseVision.prototype.onDeviceTextRecognizer = function (file_uri) { return cordova(this, "onDeviceTextRecognizer", {}, arguments); };
    FirebaseVision.prototype.barcodeDetector = function (file_uri) { return cordova(this, "barcodeDetector", {}, arguments); };
    FirebaseVision.pluginName = "FirebaseVision";
    FirebaseVision.plugin = "cordova-plugin-firebase-mlvision";
    FirebaseVision.pluginRef = "FirebaseVisionPlugin";
    FirebaseVision.repo = "https://github.com/alon22/cordova-plugin-firebase-mlvision";
    FirebaseVision.platforms = ["Android", "iOS"];
    FirebaseVision = __decorate([
        Injectable()
    ], FirebaseVision);
    return FirebaseVision;
}(IonicNativePlugin));
export { FirebaseVision };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlLXZpc2lvbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RSxNQUFNLENBQU4sSUFBWSxhQWdCWDtBQWhCRCxXQUFZLGFBQWE7SUFDdkIsd0RBQVksQ0FBQTtJQUNaLCtEQUFlLENBQUE7SUFDZix5REFBWSxDQUFBO0lBQ1osdURBQVcsQ0FBQTtJQUNYLHVEQUFXLENBQUE7SUFDWCx1REFBVyxDQUFBO0lBQ1gsZ0VBQWdCLENBQUE7SUFDaEIsc0RBQVcsQ0FBQTtJQUNYLG9EQUFVLENBQUE7SUFDVixpREFBUyxDQUFBO0lBQ1QseURBQWEsQ0FBQTtJQUNiLHFEQUFXLENBQUE7SUFDWCxzREFBWSxDQUFBO0lBQ1osd0RBQWEsQ0FBQTtJQUNiLHNEQUFZLENBQUE7QUFDZCxDQUFDLEVBaEJXLGFBQWEsS0FBYixhQUFhLFFBZ0J4QjtBQUVELE1BQU0sQ0FBTixJQUFZLGdCQTJCWDtBQTNCRCxXQUFZLGdCQUFnQjtJQUMxQixvQ0FBb0M7SUFDcEMsNkRBQU8sQ0FBQTtJQUNQLDJDQUEyQztJQUMzQyxxRUFBVyxDQUFBO0lBQ1gsOENBQThDO0lBQzlDLHlEQUFLLENBQUE7SUFDTCxvQ0FBb0M7SUFDcEMsdURBQUksQ0FBQTtJQUNKLDRDQUE0QztJQUM1Qyx5REFBSyxDQUFBO0lBQ0wsNENBQTRDO0lBQzVDLDZEQUFPLENBQUE7SUFDUCwwQ0FBMEM7SUFDMUMscURBQUcsQ0FBQTtJQUNILHlDQUF5QztJQUN6Qyx1REFBSSxDQUFBO0lBQ0osNkNBQTZDO0lBQzdDLHFEQUFHLENBQUE7SUFDSCx5REFBeUQ7SUFDekQsdURBQUksQ0FBQTtJQUNKLHFEQUFxRDtJQUNyRCwwRkFBcUIsQ0FBQTtJQUNyQiw4Q0FBOEM7SUFDOUMsMEVBQWEsQ0FBQTtJQUNiLG9EQUFvRDtJQUNwRCw0RUFBYyxDQUFBO0FBQ2hCLENBQUMsRUEzQlcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQTJCM0I7QUFFRCxNQUFNLENBQU4sSUFBWSxnQkFPWDtBQVBELFdBQVksZ0JBQWdCO0lBQzFCLDBCQUEwQjtJQUMxQiw2REFBTyxDQUFBO0lBQ1AsK0JBQStCO0lBQy9CLHVEQUFJLENBQUE7SUFDSiwrQkFBK0I7SUFDL0IsdURBQUksQ0FBQTtBQUNOLENBQUMsRUFQVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBTzNCO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBV1g7QUFYRCxXQUFZLGdCQUFnQjtJQUMxQiwwQkFBMEI7SUFDMUIsNkRBQU8sQ0FBQTtJQUNQLCtCQUErQjtJQUMvQix1REFBSSxDQUFBO0lBQ0osK0JBQStCO0lBQy9CLHVEQUFJLENBQUE7SUFDSiw4QkFBOEI7SUFDOUIscURBQUcsQ0FBQTtJQUNILGlDQUFpQztJQUNqQywyREFBTSxDQUFBO0FBQ1IsQ0FBQyxFQVhXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFXM0I7QUFFRCxNQUFNLENBQU4sSUFBWSx5QkFTWDtBQVRELFdBQVkseUJBQXlCO0lBQ25DLDZDQUE2QztJQUM3QywrRUFBTyxDQUFBO0lBQ1AsMENBQTBDO0lBQzFDLHlFQUFJLENBQUE7SUFDSix5Q0FBeUM7SUFDekMsdUVBQUcsQ0FBQTtJQUNILHlDQUF5QztJQUN6Qyx1RUFBRyxDQUFBO0FBQ0wsQ0FBQyxFQVRXLHlCQUF5QixLQUF6Qix5QkFBeUIsUUFTcEM7QUFFRCxNQUFNLENBQU4sSUFBWSxrQkFPWDtBQVBELFdBQVksa0JBQWtCO0lBQzVCLG9DQUFvQztJQUNwQyxpRUFBTyxDQUFBO0lBQ1AsaUNBQWlDO0lBQ2pDLDJEQUFJLENBQUE7SUFDSixpQ0FBaUM7SUFDakMsMkRBQUksQ0FBQTtBQUNOLENBQUMsRUFQVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBTzdCOztJQTZIbUMsa0NBQWlCOzs7O0lBT25ELCtDQUFzQixhQUFDLFFBQWdCO0lBS3ZDLHdDQUFlLGFBQUMsUUFBZ0I7Ozs7OztJQVpyQixjQUFjO1FBRDFCLFVBQVUsRUFBRTtPQUNBLGNBQWM7eUJBdk4zQjtFQXVOb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGVudW0gQmFyY29kZUZvcm1hdCB7XHJcbiAgVU5LTk9XTiA9IC0xLFxyXG4gIEFMTF9GT1JNQVRTID0gMCxcclxuICBDT0RFXzEyOCA9IDEsXHJcbiAgQ09ERV8zOSA9IDIsXHJcbiAgQ09ERV85MyA9IDQsXHJcbiAgQ09EQUJBUiA9IDgsXHJcbiAgREFUQV9NQVRSSVggPSAxNixcclxuICBFQU5fMTMgPSAzMixcclxuICBFQU5fOCA9IDY0LFxyXG4gIElURiA9IDEyOCxcclxuICBRUl9DT0RFID0gMjU2LFxyXG4gIFVQQ19BID0gNTEyLFxyXG4gIFVQQ19FID0gMTAyNCxcclxuICBQREY0MTcgPSAyMDQ4LFxyXG4gIEFaVEVDID0gNDA5NlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYXJjb2RlVmFsdWVUeXBlIHtcclxuICAvKiogVW5rbm93biBCYXJjb2RlIHZhbHVlIHR5cGVzLiAgKi9cclxuICBVbmtub3duLFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIGNvbnRhY3QgaW5mby4gKi9cclxuICBDb250YWN0SW5mbyxcclxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBlbWFpbCBhZGRyZXNzZXMuICovXHJcbiAgRW1haWwsXHJcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgSVNCTnMuICovXHJcbiAgSVNCTixcclxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBwaG9uZSBudW1iZXJzLiAqL1xyXG4gIFBob25lLFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIHByb2R1Y3QgY29kZXMuICovXHJcbiAgUHJvZHVjdCxcclxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBTTVMgZGV0YWlscy4gKi9cclxuICBTTVMsXHJcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgcGxhaW4gdGV4dC4gKi9cclxuICBUZXh0LFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIFVSTHMvYm9va21hcmtzLiAqL1xyXG4gIFVSTCxcclxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBXaS1GaSBhY2Nlc3MgcG9pbnQgZGV0YWlscy4gKi9cclxuICBXaUZpLFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIGdlb2dyYXBoaWMgY29vcmRpbmF0ZXMuICovXHJcbiAgR2VvZ3JhcGhpY0Nvb3JkaW5hdGVzLFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIGNhbGVuZGFyIGV2ZW50cy4gKi9cclxuICBDYWxlbmRhckV2ZW50LFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIGRyaXZlcidzIGxpY2Vuc2UgZGF0YS4gKi9cclxuICBEcml2ZXJzTGljZW5zZVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYXJjb2RlRW1haWxUeXBlIHtcclxuICAvKiogVW5rbm93biBlbWFpbCB0eXBlLiAqL1xyXG4gIFVua25vd24sXHJcbiAgLyoqIEJhcmNvZGUgd29yayBlbWFpbCB0eXBlLiAqL1xyXG4gIFdvcmssXHJcbiAgLyoqIEJhcmNvZGUgaG9tZSBlbWFpbCB0eXBlLiAqL1xyXG4gIEhvbWVcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFyY29kZVBob25lVHlwZSB7XHJcbiAgLyoqIFVua25vd24gcGhvbmUgdHlwZS4gKi9cclxuICBVbmtub3duLFxyXG4gIC8qKiBCYXJjb2RlIHdvcmsgcGhvbmUgdHlwZS4gKi9cclxuICBXb3JrLFxyXG4gIC8qKiBCYXJjb2RlIGhvbWUgcGhvbmUgdHlwZS4gKi9cclxuICBIb21lLFxyXG4gIC8qKiBCYXJjb2RlIGZheCBwaG9uZSB0eXBlLiAqL1xyXG4gIEZheCxcclxuICAvKiogQmFyY29kZSBtb2JpbGUgcGhvbmUgdHlwZS4gKi9cclxuICBNb2JpbGVcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFyY29kZVdpRmlFbmNyeXB0aW9uVHlwZSB7XHJcbiAgLyoqIEJhcmNvZGUgdW5rbm93biBXaS1GaSBlbmNyeXB0aW9uIHR5cGUuICovXHJcbiAgVW5rbm93bixcclxuICAvKiogQmFyY29kZSBvcGVuIFdpLUZpIGVuY3J5cHRpb24gdHlwZS4gKi9cclxuICBPcGVuLFxyXG4gIC8qKiBCYXJjb2RlIFdQQSBXaS1GaSBlbmNyeXB0aW9uIHR5cGUuICovXHJcbiAgV1BBLFxyXG4gIC8qKiBCYXJjb2RlIFdFUCBXaS1GaSBlbmNyeXB0aW9uIHR5cGUuICovXHJcbiAgV0VQXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhcmNvZGVBZGRyZXNzVHlwZSB7XHJcbiAgLyoqIEJhcmNvZGUgdW5rbm93biBhZGRyZXNzIHR5cGUuICovXHJcbiAgVW5rbm93bixcclxuICAvKiogQmFyY29kZSB3b3JrIGFkZHJlc3MgdHlwZS4gKi9cclxuICBXb3JrLFxyXG4gIC8qKiBCYXJjb2RlIGhvbWUgYWRkcmVzcyB0eXBlLiAqL1xyXG4gIEhvbWVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlIHtcclxuICB2YWx1ZVR5cGU6IEJhcmNvZGVWYWx1ZVR5cGVcclxuICBmb3JtYXQ6IEJhcmNvZGVGb3JtYXRcclxuICByYXdWYWx1ZTogc3RyaW5nXHJcbiAgZGlzcGxheVZhbHVlOiBzdHJpbmdcclxuICBjb3JuZXJQb2ludHM6IGFueVxyXG4gIGVtYWlsOiBCYXJjb2RlRW1haWxcclxuICBwaG9uZTogQmFyY29kZVBob25lXHJcbiAgc21zOiBCYXJjb2RlU21zXHJcbiAgdXJsOiBCYXJjb2RlVXJsXHJcbiAgd2lmaTogQmFyY29kZVdpZmlcclxuICBnZW9Qb2ludDogQmFyY29kZUdlb1BvaW50XHJcbiAgY2FsZW5kYXJFdmVudDogQmFyY29kZUNhbGVuZGFyRXZlbnRcclxuICBjb250YWN0SW5mbzogQmFyY29kZUNvbnRhY3RJbmZvXHJcbiAgZHJpdmVyTGljZW5zZTogQmFyY29kZURyaXZlckxpY2Vuc2VcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlRW1haWwge1xyXG4gIGFkZHJlc3M6IHN0cmluZ1xyXG4gIGJvZHk6IHN0cmluZ1xyXG4gIHN1YmplY3Q6IHN0cmluZ1xyXG4gIHR5cGU6IEJhcmNvZGVFbWFpbFR5cGVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlUGhvbmUge1xyXG4gIG51bWJlcjogc3RyaW5nXHJcbiAgdHlwZTogQmFyY29kZVBob25lVHlwZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVTbXMge1xyXG4gIHBob25lTnVtYmVyOiBzdHJpbmdcclxuICBtZXNzYWdlOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlVXJsIHtcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgdXJsOiBzdHJpbmdcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVXaWZpIHtcclxuICBzc2lkOiBzdHJpbmdcclxuICBwYXNzd29yZDogc3RyaW5nXHJcbiAgdHlwZTogQmFyY29kZVdpRmlFbmNyeXB0aW9uVHlwZVxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZUdlb1BvaW50IHtcclxuICBsYXRpdHVkZTogbnVtYmVyXHJcbiAgbG9uZ2l0dWRlOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlQ2FsZW5kYXJFdmVudCB7XHJcbiAgZXZlbnREZXNjcmlwdGlvbjogc3RyaW5nXHJcbiAgbG9jYXRpb246IHN0cmluZ1xyXG4gIG9yZ2FuaXplcjogc3RyaW5nXHJcbiAgc3RhdHVzOiBzdHJpbmdcclxuICBzdW1tYXJ5OiBzdHJpbmdcclxuICBzdGFydDogYW55XHJcbiAgZW5kOiBhbnlcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlQ29udGFjdEluZm8ge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBuYW1lOiBzdHJpbmdcclxuICBhZGRyZXNzZXM6IEJhcmNvZGVBZGRyZXNzW11cclxuICBwaG9uZXM6IEJhcmNvZGVQaG9uZVtdXHJcbiAgZW1haWxzOiBCYXJjb2RlRW1haWxbXVxyXG4gIG9yZ2FuaXphdGlvbjogc3RyaW5nXHJcbiAgdXJsczogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZUFkZHJlc3Mge1xyXG4gIGFkZHJlc3NMaW5lOiBzdHJpbmdcclxuICB0eXBlOiBCYXJjb2RlQWRkcmVzc1R5cGVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlRHJpdmVyTGljZW5zZSB7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmdcclxuICBtaWRkbGVOYW1lOiBzdHJpbmdcclxuICBsYXN0TmFtZTogc3RyaW5nXHJcbiAgZ2VuZGVyOiBzdHJpbmdcclxuICBhZGRyZXNzQ2l0eTogc3RyaW5nXHJcbiAgYWRkcmVzc1N0YXRlOiBzdHJpbmdcclxuICBhZGRyZXNzU3RyZWV0OiBzdHJpbmdcclxuICBhZGRyZXNzWmlwOiBzdHJpbmdcclxuICBiaXJ0aERhdGU6IHN0cmluZ1xyXG4gIGRvY3VtZW50VHlwZTogc3RyaW5nXHJcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nXHJcbiAgZXhwaXJ5RGF0ZTogc3RyaW5nXHJcbiAgaXNzdWluZ0RhdGU6IHN0cmluZ1xyXG4gIGlzc3VpbmdDb3VudHJ5OiBzdHJpbmdcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEZpcmViYXNlIFZpc2lvblxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ29yZG92YSBwbHVnaW4gZm9yIEZpcmViYXNlIE1MS2l0IFZpc2lvblxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBGaXJlYmFzZVZpc2lvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlyZWJhc2UtdmlzaW9uL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VWaXNpb246IEZpcmViYXNlVmlzaW9uKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuZmlyZWJhc2VWaXNpb24ub25EZXZpY2VUZXh0UmVjb2duaXplcihGSUxFX1VSSSlcclxuICogICAudGhlbigocmVzOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogc3RyaW5nKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIHRoaXMuZmlyZWJhc2VWaXNpb24uYmFyY29kZURldGVjdG9yKEZJTEVfVVJJKVxyXG4gKiAgIC50aGVuKChyZXM6IEJhcmNvZGVbXSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBzdHJpbmcpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRmlyZWJhc2VWaXNpb24nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLW1sdmlzaW9uJyxcclxuICBwbHVnaW5SZWY6ICdGaXJlYmFzZVZpc2lvblBsdWdpbicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbG9uMjIvY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtbWx2aXNpb24nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVZpc2lvbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBSZWNvZ25pemUgdGV4dCBpbiBpbWFnZVxyXG4gICAqIEBwYXJhbSBmaWxlX3VyaSB7c3RyaW5nfSBJbWFnZSBVUklcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgZnVsZmlsbHMgd2l0aCB0aGUgdGV4dCBpbiB0aGUgaW1hZ2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgb25EZXZpY2VUZXh0UmVjb2duaXplcihmaWxlX3VyaTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBiYXJjb2RlRGV0ZWN0b3IoZmlsZV91cmk6IHN0cmluZyk6IFByb21pc2U8QmFyY29kZVtdPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==