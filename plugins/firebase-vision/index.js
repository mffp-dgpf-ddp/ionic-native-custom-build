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
var FirebaseVisionOriginal = /** @class */ (function (_super) {
    __extends(FirebaseVisionOriginal, _super);
    function FirebaseVisionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseVisionOriginal.prototype.onDeviceTextRecognizer = function (file_uri) { return cordova(this, "onDeviceTextRecognizer", {}, arguments); };
    FirebaseVisionOriginal.prototype.barcodeDetector = function (file_uri) { return cordova(this, "barcodeDetector", {}, arguments); };
    FirebaseVisionOriginal.pluginName = "FirebaseVision";
    FirebaseVisionOriginal.plugin = "cordova-plugin-firebase-mlvision";
    FirebaseVisionOriginal.pluginRef = "FirebaseVisionPlugin";
    FirebaseVisionOriginal.repo = "https://github.com/alon22/cordova-plugin-firebase-mlvision";
    FirebaseVisionOriginal.platforms = ["Android", "iOS"];
    return FirebaseVisionOriginal;
}(IonicNativePlugin));
var FirebaseVision = new FirebaseVisionOriginal();
export { FirebaseVision };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlLXZpc2lvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RSxNQUFNLENBQU4sSUFBWSxhQWdCWDtBQWhCRCxXQUFZLGFBQWE7SUFDdkIsd0RBQVksQ0FBQTtJQUNaLCtEQUFlLENBQUE7SUFDZix5REFBWSxDQUFBO0lBQ1osdURBQVcsQ0FBQTtJQUNYLHVEQUFXLENBQUE7SUFDWCx1REFBVyxDQUFBO0lBQ1gsZ0VBQWdCLENBQUE7SUFDaEIsc0RBQVcsQ0FBQTtJQUNYLG9EQUFVLENBQUE7SUFDVixpREFBUyxDQUFBO0lBQ1QseURBQWEsQ0FBQTtJQUNiLHFEQUFXLENBQUE7SUFDWCxzREFBWSxDQUFBO0lBQ1osd0RBQWEsQ0FBQTtJQUNiLHNEQUFZLENBQUE7QUFDZCxDQUFDLEVBaEJXLGFBQWEsS0FBYixhQUFhLFFBZ0J4QjtBQUVELE1BQU0sQ0FBTixJQUFZLGdCQTJCWDtBQTNCRCxXQUFZLGdCQUFnQjtJQUMxQixvQ0FBb0M7SUFDcEMsNkRBQU8sQ0FBQTtJQUNQLDJDQUEyQztJQUMzQyxxRUFBVyxDQUFBO0lBQ1gsOENBQThDO0lBQzlDLHlEQUFLLENBQUE7SUFDTCxvQ0FBb0M7SUFDcEMsdURBQUksQ0FBQTtJQUNKLDRDQUE0QztJQUM1Qyx5REFBSyxDQUFBO0lBQ0wsNENBQTRDO0lBQzVDLDZEQUFPLENBQUE7SUFDUCwwQ0FBMEM7SUFDMUMscURBQUcsQ0FBQTtJQUNILHlDQUF5QztJQUN6Qyx1REFBSSxDQUFBO0lBQ0osNkNBQTZDO0lBQzdDLHFEQUFHLENBQUE7SUFDSCx5REFBeUQ7SUFDekQsdURBQUksQ0FBQTtJQUNKLHFEQUFxRDtJQUNyRCwwRkFBcUIsQ0FBQTtJQUNyQiw4Q0FBOEM7SUFDOUMsMEVBQWEsQ0FBQTtJQUNiLG9EQUFvRDtJQUNwRCw0RUFBYyxDQUFBO0FBQ2hCLENBQUMsRUEzQlcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQTJCM0I7QUFFRCxNQUFNLENBQU4sSUFBWSxnQkFPWDtBQVBELFdBQVksZ0JBQWdCO0lBQzFCLDBCQUEwQjtJQUMxQiw2REFBTyxDQUFBO0lBQ1AsK0JBQStCO0lBQy9CLHVEQUFJLENBQUE7SUFDSiwrQkFBK0I7SUFDL0IsdURBQUksQ0FBQTtBQUNOLENBQUMsRUFQVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBTzNCO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBV1g7QUFYRCxXQUFZLGdCQUFnQjtJQUMxQiwwQkFBMEI7SUFDMUIsNkRBQU8sQ0FBQTtJQUNQLCtCQUErQjtJQUMvQix1REFBSSxDQUFBO0lBQ0osK0JBQStCO0lBQy9CLHVEQUFJLENBQUE7SUFDSiw4QkFBOEI7SUFDOUIscURBQUcsQ0FBQTtJQUNILGlDQUFpQztJQUNqQywyREFBTSxDQUFBO0FBQ1IsQ0FBQyxFQVhXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFXM0I7QUFFRCxNQUFNLENBQU4sSUFBWSx5QkFTWDtBQVRELFdBQVkseUJBQXlCO0lBQ25DLDZDQUE2QztJQUM3QywrRUFBTyxDQUFBO0lBQ1AsMENBQTBDO0lBQzFDLHlFQUFJLENBQUE7SUFDSix5Q0FBeUM7SUFDekMsdUVBQUcsQ0FBQTtJQUNILHlDQUF5QztJQUN6Qyx1RUFBRyxDQUFBO0FBQ0wsQ0FBQyxFQVRXLHlCQUF5QixLQUF6Qix5QkFBeUIsUUFTcEM7QUFFRCxNQUFNLENBQU4sSUFBWSxrQkFPWDtBQVBELFdBQVksa0JBQWtCO0lBQzVCLG9DQUFvQztJQUNwQyxpRUFBTyxDQUFBO0lBQ1AsaUNBQWlDO0lBQ2pDLDJEQUFJLENBQUE7SUFDSixpQ0FBaUM7SUFDakMsMkRBQUksQ0FBQTtBQUNOLENBQUMsRUFQVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBTzdCOztJQTZIbUMsa0NBQWlCOzs7O0lBT25ELCtDQUFzQixhQUFDLFFBQWdCO0lBS3ZDLHdDQUFlLGFBQUMsUUFBZ0I7Ozs7Ozt5QkFuT2xDO0VBdU5vQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgZW51bSBCYXJjb2RlRm9ybWF0IHtcclxuICBVTktOT1dOID0gLTEsXHJcbiAgQUxMX0ZPUk1BVFMgPSAwLFxyXG4gIENPREVfMTI4ID0gMSxcclxuICBDT0RFXzM5ID0gMixcclxuICBDT0RFXzkzID0gNCxcclxuICBDT0RBQkFSID0gOCxcclxuICBEQVRBX01BVFJJWCA9IDE2LFxyXG4gIEVBTl8xMyA9IDMyLFxyXG4gIEVBTl84ID0gNjQsXHJcbiAgSVRGID0gMTI4LFxyXG4gIFFSX0NPREUgPSAyNTYsXHJcbiAgVVBDX0EgPSA1MTIsXHJcbiAgVVBDX0UgPSAxMDI0LFxyXG4gIFBERjQxNyA9IDIwNDgsXHJcbiAgQVpURUMgPSA0MDk2XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhcmNvZGVWYWx1ZVR5cGUge1xyXG4gIC8qKiBVbmtub3duIEJhcmNvZGUgdmFsdWUgdHlwZXMuICAqL1xyXG4gIFVua25vd24sXHJcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgY29udGFjdCBpbmZvLiAqL1xyXG4gIENvbnRhY3RJbmZvLFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIGVtYWlsIGFkZHJlc3Nlcy4gKi9cclxuICBFbWFpbCxcclxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBJU0JOcy4gKi9cclxuICBJU0JOLFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIHBob25lIG51bWJlcnMuICovXHJcbiAgUGhvbmUsXHJcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgcHJvZHVjdCBjb2Rlcy4gKi9cclxuICBQcm9kdWN0LFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIFNNUyBkZXRhaWxzLiAqL1xyXG4gIFNNUyxcclxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBwbGFpbiB0ZXh0LiAqL1xyXG4gIFRleHQsXHJcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgVVJMcy9ib29rbWFya3MuICovXHJcbiAgVVJMLFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIFdpLUZpIGFjY2VzcyBwb2ludCBkZXRhaWxzLiAqL1xyXG4gIFdpRmksXHJcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgZ2VvZ3JhcGhpYyBjb29yZGluYXRlcy4gKi9cclxuICBHZW9ncmFwaGljQ29vcmRpbmF0ZXMsXHJcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgY2FsZW5kYXIgZXZlbnRzLiAqL1xyXG4gIENhbGVuZGFyRXZlbnQsXHJcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgZHJpdmVyJ3MgbGljZW5zZSBkYXRhLiAqL1xyXG4gIERyaXZlcnNMaWNlbnNlXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhcmNvZGVFbWFpbFR5cGUge1xyXG4gIC8qKiBVbmtub3duIGVtYWlsIHR5cGUuICovXHJcbiAgVW5rbm93bixcclxuICAvKiogQmFyY29kZSB3b3JrIGVtYWlsIHR5cGUuICovXHJcbiAgV29yayxcclxuICAvKiogQmFyY29kZSBob21lIGVtYWlsIHR5cGUuICovXHJcbiAgSG9tZVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYXJjb2RlUGhvbmVUeXBlIHtcclxuICAvKiogVW5rbm93biBwaG9uZSB0eXBlLiAqL1xyXG4gIFVua25vd24sXHJcbiAgLyoqIEJhcmNvZGUgd29yayBwaG9uZSB0eXBlLiAqL1xyXG4gIFdvcmssXHJcbiAgLyoqIEJhcmNvZGUgaG9tZSBwaG9uZSB0eXBlLiAqL1xyXG4gIEhvbWUsXHJcbiAgLyoqIEJhcmNvZGUgZmF4IHBob25lIHR5cGUuICovXHJcbiAgRmF4LFxyXG4gIC8qKiBCYXJjb2RlIG1vYmlsZSBwaG9uZSB0eXBlLiAqL1xyXG4gIE1vYmlsZVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYXJjb2RlV2lGaUVuY3J5cHRpb25UeXBlIHtcclxuICAvKiogQmFyY29kZSB1bmtub3duIFdpLUZpIGVuY3J5cHRpb24gdHlwZS4gKi9cclxuICBVbmtub3duLFxyXG4gIC8qKiBCYXJjb2RlIG9wZW4gV2ktRmkgZW5jcnlwdGlvbiB0eXBlLiAqL1xyXG4gIE9wZW4sXHJcbiAgLyoqIEJhcmNvZGUgV1BBIFdpLUZpIGVuY3J5cHRpb24gdHlwZS4gKi9cclxuICBXUEEsXHJcbiAgLyoqIEJhcmNvZGUgV0VQIFdpLUZpIGVuY3J5cHRpb24gdHlwZS4gKi9cclxuICBXRVBcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFyY29kZUFkZHJlc3NUeXBlIHtcclxuICAvKiogQmFyY29kZSB1bmtub3duIGFkZHJlc3MgdHlwZS4gKi9cclxuICBVbmtub3duLFxyXG4gIC8qKiBCYXJjb2RlIHdvcmsgYWRkcmVzcyB0eXBlLiAqL1xyXG4gIFdvcmssXHJcbiAgLyoqIEJhcmNvZGUgaG9tZSBhZGRyZXNzIHR5cGUuICovXHJcbiAgSG9tZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGUge1xyXG4gIHZhbHVlVHlwZTogQmFyY29kZVZhbHVlVHlwZVxyXG4gIGZvcm1hdDogQmFyY29kZUZvcm1hdFxyXG4gIHJhd1ZhbHVlOiBzdHJpbmdcclxuICBkaXNwbGF5VmFsdWU6IHN0cmluZ1xyXG4gIGNvcm5lclBvaW50czogYW55XHJcbiAgZW1haWw6IEJhcmNvZGVFbWFpbFxyXG4gIHBob25lOiBCYXJjb2RlUGhvbmVcclxuICBzbXM6IEJhcmNvZGVTbXNcclxuICB1cmw6IEJhcmNvZGVVcmxcclxuICB3aWZpOiBCYXJjb2RlV2lmaVxyXG4gIGdlb1BvaW50OiBCYXJjb2RlR2VvUG9pbnRcclxuICBjYWxlbmRhckV2ZW50OiBCYXJjb2RlQ2FsZW5kYXJFdmVudFxyXG4gIGNvbnRhY3RJbmZvOiBCYXJjb2RlQ29udGFjdEluZm9cclxuICBkcml2ZXJMaWNlbnNlOiBCYXJjb2RlRHJpdmVyTGljZW5zZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVFbWFpbCB7XHJcbiAgYWRkcmVzczogc3RyaW5nXHJcbiAgYm9keTogc3RyaW5nXHJcbiAgc3ViamVjdDogc3RyaW5nXHJcbiAgdHlwZTogQmFyY29kZUVtYWlsVHlwZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVQaG9uZSB7XHJcbiAgbnVtYmVyOiBzdHJpbmdcclxuICB0eXBlOiBCYXJjb2RlUGhvbmVUeXBlXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVNtcyB7XHJcbiAgcGhvbmVOdW1iZXI6IHN0cmluZ1xyXG4gIG1lc3NhZ2U6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVVcmwge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICB1cmw6IHN0cmluZ1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVdpZmkge1xyXG4gIHNzaWQ6IHN0cmluZ1xyXG4gIHBhc3N3b3JkOiBzdHJpbmdcclxuICB0eXBlOiBCYXJjb2RlV2lGaUVuY3J5cHRpb25UeXBlXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlR2VvUG9pbnQge1xyXG4gIGxhdGl0dWRlOiBudW1iZXJcclxuICBsb25naXR1ZGU6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVDYWxlbmRhckV2ZW50IHtcclxuICBldmVudERlc2NyaXB0aW9uOiBzdHJpbmdcclxuICBsb2NhdGlvbjogc3RyaW5nXHJcbiAgb3JnYW5pemVyOiBzdHJpbmdcclxuICBzdGF0dXM6IHN0cmluZ1xyXG4gIHN1bW1hcnk6IHN0cmluZ1xyXG4gIHN0YXJ0OiBhbnlcclxuICBlbmQ6IGFueVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVDb250YWN0SW5mbyB7XHJcbiAgdGl0bGU6IHN0cmluZ1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIGFkZHJlc3NlczogQmFyY29kZUFkZHJlc3NbXVxyXG4gIHBob25lczogQmFyY29kZVBob25lW11cclxuICBlbWFpbHM6IEJhcmNvZGVFbWFpbFtdXHJcbiAgb3JnYW5pemF0aW9uOiBzdHJpbmdcclxuICB1cmxzOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlQWRkcmVzcyB7XHJcbiAgYWRkcmVzc0xpbmU6IHN0cmluZ1xyXG4gIHR5cGU6IEJhcmNvZGVBZGRyZXNzVHlwZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVEcml2ZXJMaWNlbnNlIHtcclxuICBmaXJzdE5hbWU6IHN0cmluZ1xyXG4gIG1pZGRsZU5hbWU6IHN0cmluZ1xyXG4gIGxhc3ROYW1lOiBzdHJpbmdcclxuICBnZW5kZXI6IHN0cmluZ1xyXG4gIGFkZHJlc3NDaXR5OiBzdHJpbmdcclxuICBhZGRyZXNzU3RhdGU6IHN0cmluZ1xyXG4gIGFkZHJlc3NTdHJlZXQ6IHN0cmluZ1xyXG4gIGFkZHJlc3NaaXA6IHN0cmluZ1xyXG4gIGJpcnRoRGF0ZTogc3RyaW5nXHJcbiAgZG9jdW1lbnRUeXBlOiBzdHJpbmdcclxuICBsaWNlbnNlTnVtYmVyOiBzdHJpbmdcclxuICBleHBpcnlEYXRlOiBzdHJpbmdcclxuICBpc3N1aW5nRGF0ZTogc3RyaW5nXHJcbiAgaXNzdWluZ0NvdW50cnk6IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgRmlyZWJhc2UgVmlzaW9uXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIHBsdWdpbiBmb3IgRmlyZWJhc2UgTUxLaXQgVmlzaW9uXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEZpcmViYXNlVmlzaW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maXJlYmFzZS12aXNpb24vbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZVZpc2lvbjogRmlyZWJhc2VWaXNpb24pIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5maXJlYmFzZVZpc2lvbi5vbkRldmljZVRleHRSZWNvZ25pemVyKEZJTEVfVVJJKVxyXG4gKiAgIC50aGVuKChyZXM6IHN0cmluZykgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBzdHJpbmcpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogdGhpcy5maXJlYmFzZVZpc2lvbi5iYXJjb2RlRGV0ZWN0b3IoRklMRV9VUkkpXHJcbiAqICAgLnRoZW4oKHJlczogQmFyY29kZVtdKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IHN0cmluZykgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdGaXJlYmFzZVZpc2lvbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtbWx2aXNpb24nLFxyXG4gIHBsdWdpblJlZjogJ0ZpcmViYXNlVmlzaW9uUGx1Z2luJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Fsb24yMi9jb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1tbHZpc2lvbicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpcmViYXNlVmlzaW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFJlY29nbml6ZSB0ZXh0IGluIGltYWdlXHJcbiAgICogQHBhcmFtIGZpbGVfdXJpIHtzdHJpbmd9IEltYWdlIFVSSVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aXRoIHRoZSB0ZXh0IGluIHRoZSBpbWFnZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBvbkRldmljZVRleHRSZWNvZ25pemVyKGZpbGVfdXJpOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGJhcmNvZGVEZXRlY3RvcihmaWxlX3VyaTogc3RyaW5nKTogUHJvbWlzZTxCYXJjb2RlW10+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19