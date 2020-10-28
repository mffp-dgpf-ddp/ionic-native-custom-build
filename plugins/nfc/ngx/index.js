import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import { Observable } from 'rxjs';
var NFC = /** @class */ (function (_super) {
    __extends(NFC, _super);
    function NFC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NFC.prototype.readerMode = function (flags) { return cordova(this, "readerMode", { "observable": true, "clearFunction": "disableReaderMode", "clearWithArgs": false }, arguments); };
    NFC.prototype.scanNdef = function (options) { return cordova(this, "scanNdef", { "sync": true }, arguments); };
    NFC.prototype.scanTag = function (options) { return cordova(this, "scanTag", { "sync": true }, arguments); };
    NFC.prototype.cancelScan = function () { return cordova(this, "cancelScan", { "sync": true }, arguments); };
    NFC.prototype.connect = function (tech, timeout) { return cordova(this, "connect", { "sync": true }, arguments); };
    NFC.prototype.close = function () { return cordova(this, "close", { "sync": true }, arguments); };
    NFC.prototype.transceive = function (data) { return cordova(this, "transceive", { "sync": true }, arguments); };
    NFC.prototype.beginSession = function (onSuccess, onFailure) { return cordova(this, "beginSession", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "invalidateSession", "clearWithArgs": true }, arguments); };
    NFC.prototype.addNdefListener = function (onSuccess, onFailure) { return cordova(this, "addNdefListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeNdefListener", "clearWithArgs": true }, arguments); };
    NFC.prototype.addTagDiscoveredListener = function (onSuccess, onFailure) { return cordova(this, "addTagDiscoveredListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeTagDiscoveredListener", "clearWithArgs": true }, arguments); };
    NFC.prototype.addMimeTypeListener = function (mimeType, onSuccess, onFailure) { return cordova(this, "addMimeTypeListener", { "observable": true, "successIndex": 1, "errorIndex": 4, "clearFunction": "removeMimeTypeListener", "clearWithArgs": true }, arguments); };
    NFC.prototype.addNdefFormatableListener = function (onSuccess, onFailure) { return cordova(this, "addNdefFormatableListener", { "observable": true, "successIndex": 0, "errorIndex": 3 }, arguments); };
    NFC.prototype.write = function (message) { return cordova(this, "write", {}, arguments); };
    NFC.prototype.makeReadOnly = function () { return cordova(this, "makeReadOnly", {}, arguments); };
    NFC.prototype.share = function (message) { return cordova(this, "share", {}, arguments); };
    NFC.prototype.unshare = function () { return cordova(this, "unshare", {}, arguments); };
    NFC.prototype.erase = function () { return cordova(this, "erase", {}, arguments); };
    NFC.prototype.handover = function (uris) { return cordova(this, "handover", {}, arguments); };
    NFC.prototype.stopHandover = function () { return cordova(this, "stopHandover", {}, arguments); };
    NFC.prototype.showSettings = function () { return cordova(this, "showSettings", {}, arguments); };
    NFC.prototype.enabled = function () { return cordova(this, "enabled", {}, arguments); };
    NFC.prototype.bytesToString = function (bytes) { return cordova(this, "bytesToString", { "sync": true }, arguments); };
    NFC.prototype.stringToBytes = function (str) { return cordova(this, "stringToBytes", { "sync": true }, arguments); };
    NFC.prototype.bytesToHexString = function (bytes) { return cordova(this, "bytesToHexString", { "sync": true }, arguments); };
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_A", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_A"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_A", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_B", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_B"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_B", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_F", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_F"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_F", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_V", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_V"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_V", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_BARCODE", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_BARCODE"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_BARCODE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_SKIP_NDEF_CHECK", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_SKIP_NDEF_CHECK"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_SKIP_NDEF_CHECK", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NO_PLATFORM_SOUNDS", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NO_PLATFORM_SOUNDS"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NO_PLATFORM_SOUNDS", value); },
        enumerable: true,
        configurable: true
    });
    NFC.pluginName = "NFC";
    NFC.plugin = "phonegap-nfc";
    NFC.pluginRef = "nfc";
    NFC.repo = "https://github.com/chariotsolutions/phonegap-nfc";
    NFC.platforms = ["Android", "iOS", "Windows"];
    NFC = __decorate([
        Injectable()
    ], NFC);
    return NFC;
}(IonicNativePlugin));
export { NFC };
var Ndef = /** @class */ (function (_super) {
    __extends(Ndef, _super);
    function Ndef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ndef.prototype.record = function (tnf, type, id, payload) { return cordova(this, "record", { "sync": true }, arguments); };
    Ndef.prototype.textRecord = function (text, languageCode, id) { return cordova(this, "textRecord", { "sync": true }, arguments); };
    Ndef.prototype.uriRecord = function (uri, id) { return cordova(this, "uriRecord", { "sync": true }, arguments); };
    Ndef.prototype.absoluteUriRecord = function (uri, payload, id) { return cordova(this, "absoluteUriRecord", { "sync": true }, arguments); };
    Ndef.prototype.mimeMediaRecord = function (mimeType, payload) { return cordova(this, "mimeMediaRecord", { "sync": true }, arguments); };
    Ndef.prototype.smartPoster = function (ndefRecords, id) { return cordova(this, "smartPoster", { "sync": true }, arguments); };
    Ndef.prototype.emptyRecord = function () { return cordova(this, "emptyRecord", { "sync": true }, arguments); };
    Ndef.prototype.androidApplicationRecord = function (packageName) { return cordova(this, "androidApplicationRecord", { "sync": true }, arguments); };
    Ndef.prototype.encodeMessage = function (ndefRecords) { return cordova(this, "encodeMessage", { "sync": true }, arguments); };
    Ndef.prototype.decodeMessage = function (bytes) { return cordova(this, "decodeMessage", { "sync": true }, arguments); };
    Ndef.prototype.decodeTnf = function (tnf_byte) { return cordova(this, "decodeTnf", { "sync": true }, arguments); };
    Ndef.prototype.encodeTnf = function (mb, me, cf, sr, il, tnf) { return cordova(this, "encodeTnf", { "sync": true }, arguments); };
    Ndef.prototype.tnfToString = function (tnf) { return cordova(this, "tnfToString", { "sync": true }, arguments); };
    Object.defineProperty(Ndef.prototype, "TNF_EMPTY", {
        get: function () { return cordovaPropertyGet(this, "TNF_EMPTY"); },
        set: function (value) { cordovaPropertySet(this, "TNF_EMPTY", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_WELL_KNOWN", {
        get: function () { return cordovaPropertyGet(this, "TNF_WELL_KNOWN"); },
        set: function (value) { cordovaPropertySet(this, "TNF_WELL_KNOWN", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_MIME_MEDIA", {
        get: function () { return cordovaPropertyGet(this, "TNF_MIME_MEDIA"); },
        set: function (value) { cordovaPropertySet(this, "TNF_MIME_MEDIA", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_ABSOLUTE_URI", {
        get: function () { return cordovaPropertyGet(this, "TNF_ABSOLUTE_URI"); },
        set: function (value) { cordovaPropertySet(this, "TNF_ABSOLUTE_URI", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_EXTERNAL_TYPE", {
        get: function () { return cordovaPropertyGet(this, "TNF_EXTERNAL_TYPE"); },
        set: function (value) { cordovaPropertySet(this, "TNF_EXTERNAL_TYPE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_UNKNOWN", {
        get: function () { return cordovaPropertyGet(this, "TNF_UNKNOWN"); },
        set: function (value) { cordovaPropertySet(this, "TNF_UNKNOWN", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_UNCHANGED", {
        get: function () { return cordovaPropertyGet(this, "TNF_UNCHANGED"); },
        set: function (value) { cordovaPropertySet(this, "TNF_UNCHANGED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_RESERVED", {
        get: function () { return cordovaPropertyGet(this, "TNF_RESERVED"); },
        set: function (value) { cordovaPropertySet(this, "TNF_RESERVED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "textHelper", {
        get: function () { return cordovaPropertyGet(this, "textHelper"); },
        set: function (value) { cordovaPropertySet(this, "textHelper", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "uriHelper", {
        get: function () { return cordovaPropertyGet(this, "uriHelper"); },
        set: function (value) { cordovaPropertySet(this, "uriHelper", value); },
        enumerable: true,
        configurable: true
    });
    Ndef.pluginName = "NFC";
    Ndef.plugin = "phonegap-nfc";
    Ndef.pluginRef = "ndef";
    Ndef = __decorate([
        Injectable()
    ], Ndef);
    return Ndef;
}(IonicNativePlugin));
export { Ndef };
var NfcUtil = /** @class */ (function (_super) {
    __extends(NfcUtil, _super);
    function NfcUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NfcUtil.prototype.toHex = function (i) { return cordova(this, "toHex", { "sync": true }, arguments); };
    NfcUtil.prototype.toPrintable = function (i) { return cordova(this, "toPrintable", { "sync": true }, arguments); };
    NfcUtil.prototype.bytesToString = function (i) { return cordova(this, "bytesToString", { "sync": true }, arguments); };
    NfcUtil.prototype.stringToBytes = function (s) { return cordova(this, "stringToBytes", { "sync": true }, arguments); };
    NfcUtil.prototype.bytesToHexString = function (bytes) { return cordova(this, "bytesToHexString", { "sync": true }, arguments); };
    NfcUtil.prototype.isType = function (record, tnf, type) { return cordova(this, "isType", { "sync": true }, arguments); };
    NfcUtil.prototype.arrayBufferToHexString = function (buffer) { return cordova(this, "arrayBufferToHexString", { "sync": true }, arguments); };
    NfcUtil.prototype.hexStringToArrayBuffer = function (hexString) { return cordova(this, "hexStringToArrayBuffer", { "sync": true }, arguments); };
    NfcUtil.pluginName = "NFC";
    NfcUtil.plugin = "phonegap-nfc";
    NfcUtil.pluginRef = "util";
    NfcUtil = __decorate([
        Injectable()
    ], NfcUtil);
    return NfcUtil;
}(IonicNativePlugin));
export { NfcUtil };
var TextHelper = /** @class */ (function (_super) {
    __extends(TextHelper, _super);
    function TextHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextHelper.prototype.decodePayload = function (data) {
        return;
    };
    TextHelper.prototype.encodePayload = function (text, lang) {
        return;
    };
    return TextHelper;
}(IonicNativePlugin));
export { TextHelper };
var UriHelper = /** @class */ (function (_super) {
    __extends(UriHelper, _super);
    function UriHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UriHelper.prototype.decodePayload = function (data) {
        return;
    };
    UriHelper.prototype.encodePayload = function (uri) {
        return;
    };
    return UriHelper;
}(IonicNativePlugin));
export { UriHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25mYy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQW1HVCx1QkFBaUI7Ozs7SUE4QnhDLHdCQUFVLGFBQUMsS0FBYTtJQVN4QixzQkFBUSxhQUFDLE9BQXFCO0lBVzlCLHFCQUFPLGFBQUMsT0FBcUI7SUFTN0Isd0JBQVU7SUFZVixxQkFBTyxhQUFDLElBQVksRUFBRSxPQUFnQjtJQVN0QyxtQkFBSztJQWFMLHdCQUFVLGFBQUMsSUFBMEI7SUFtQnJDLDBCQUFZLGFBQUMsU0FBb0IsRUFBRSxTQUFvQjtJQWlCdkQsNkJBQWUsYUFBQyxTQUFvQixFQUFFLFNBQW9CO0lBaUIxRCxzQ0FBd0IsYUFBQyxTQUFvQixFQUFFLFNBQW9CO0lBa0JuRSxpQ0FBbUIsYUFBQyxRQUFnQixFQUFFLFNBQW9CLEVBQUUsU0FBb0I7SUFlaEYsdUNBQXlCLGFBQUMsU0FBb0IsRUFBRSxTQUFvQjtJQVVwRSxtQkFBSyxhQUFDLE9BQWM7SUFRcEIsMEJBQVk7SUFVWixtQkFBSyxhQUFDLE9BQWM7SUFTcEIscUJBQU87SUFRUCxtQkFBSztJQVVMLHNCQUFRLGFBQUMsSUFBYztJQVN2QiwwQkFBWTtJQVNaLDBCQUFZO0lBU1oscUJBQU87SUFhUCwyQkFBYSxhQUFDLEtBQWU7SUFTN0IsMkJBQWEsYUFBQyxHQUFXO0lBVXpCLDhCQUFnQixhQUFDLEtBQWU7MEJBalNoQyxrQ0FBaUI7Ozs7OzswQkFFakIsa0NBQWlCOzs7Ozs7MEJBRWpCLGtDQUFpQjs7Ozs7OzBCQUVqQixrQ0FBaUI7Ozs7OzswQkFFakIsd0NBQXVCOzs7Ozs7MEJBRXZCLDRDQUEyQjs7Ozs7OzBCQUUzQiwrQ0FBOEI7Ozs7Ozs7Ozs7O0lBaEJuQixHQUFHO1FBRGYsVUFBVSxFQUFFO09BQ0EsR0FBRztjQXJHaEI7RUFxR3lCLGlCQUFpQjtTQUE3QixHQUFHOztJQXlUVSx3QkFBaUI7Ozs7SUFtQnpDLHFCQUFNLGFBQUMsR0FBVyxFQUFFLElBQXVCLEVBQUUsRUFBcUIsRUFBRSxPQUEwQjtJQUs5Rix5QkFBVSxhQUFDLElBQVksRUFBRSxZQUFxQixFQUFFLEVBQXNCO0lBS3RFLHdCQUFTLGFBQUMsR0FBVyxFQUFFLEVBQXNCO0lBSzdDLGdDQUFpQixhQUFDLEdBQVcsRUFBRSxPQUEwQixFQUFFLEVBQXNCO0lBS2pGLDhCQUFlLGFBQUMsUUFBZ0IsRUFBRSxPQUFlO0lBS2pELDBCQUFXLGFBQUMsV0FBa0IsRUFBRSxFQUFzQjtJQUt0RCwwQkFBVztJQUtYLHVDQUF3QixhQUFDLFdBQW1CO0lBSzVDLDRCQUFhLGFBQUMsV0FBZ0I7SUFLOUIsNEJBQWEsYUFBQyxLQUFVO0lBS3hCLHdCQUFTLGFBQUMsUUFBYTtJQUt2Qix3QkFBUyxhQUFDLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsR0FBUTtJQUsvRCwwQkFBVyxhQUFDLEdBQVE7MEJBN0VwQiwyQkFBUzs7Ozs7OzBCQUVULGdDQUFjOzs7Ozs7MEJBRWQsZ0NBQWM7Ozs7OzswQkFFZCxrQ0FBZ0I7Ozs7OzswQkFFaEIsbUNBQWlCOzs7Ozs7MEJBRWpCLDZCQUFXOzs7Ozs7MEJBRVgsK0JBQWE7Ozs7OzswQkFFYiw4QkFBWTs7Ozs7OzBCQW9FWiw0QkFBVTs7Ozs7OzBCQUdWLDJCQUFTOzs7Ozs7Ozs7SUF2RkUsSUFBSTtRQURoQixVQUFVLEVBQUU7T0FDQSxJQUFJO2VBOVpqQjtFQThaMEIsaUJBQWlCO1NBQTlCLElBQUk7O0lBbUdZLDJCQUFpQjs7OztJQUU1Qyx1QkFBSyxhQUFDLENBQVM7SUFLZiw2QkFBVyxhQUFDLENBQVM7SUFLckIsK0JBQWEsYUFBQyxDQUFXO0lBS3pCLCtCQUFhLGFBQUMsQ0FBUztJQUt2QixrQ0FBZ0IsYUFBQyxLQUFlO0lBS2hDLHdCQUFNLGFBQUMsTUFBa0IsRUFBRSxHQUFXLEVBQUUsSUFBdUI7SUFLL0Qsd0NBQXNCLGFBQUMsTUFBbUI7SUFLMUMsd0NBQXNCLGFBQUMsU0FBaUI7Ozs7SUFyQzdCLE9BQU87UUFEbkIsVUFBVSxFQUFFO09BQ0EsT0FBTztrQkFqZ0JwQjtFQWlnQjZCLGlCQUFpQjtTQUFqQyxPQUFPOztJQTBDWSw4QkFBaUI7Ozs7SUFDL0Msa0NBQWEsR0FBYixVQUFjLElBQWM7UUFDMUIsT0FBTztJQUNULENBQUM7SUFDRCxrQ0FBYSxHQUFiLFVBQWMsSUFBWSxFQUFFLElBQVk7UUFDdEMsT0FBTztJQUNULENBQUM7cUJBampCSDtFQTJpQmdDLGlCQUFpQjs7O0lBU2xCLDZCQUFpQjs7OztJQUM5QyxpQ0FBYSxHQUFiLFVBQWMsSUFBYztRQUMxQixPQUFPO0lBQ1QsQ0FBQztJQUNELGlDQUFhLEdBQWIsVUFBYyxHQUFXO1FBQ3ZCLE9BQU87SUFDVCxDQUFDO29CQTFqQkg7RUFvakIrQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuZGVjbGFyZSBsZXQgd2luZG93OiBhbnk7XHJcblxyXG4vLyB0YWcgc2hvdWxkIGJlIE5mY1RhZywgYnV0IGtlZXBpbmcgYXMgTmRlZlRhZyB0byBhdm9pZCBicmVha2luZyBleGlzdGluZyBjb2RlXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmRlZkV2ZW50IHtcclxuICB0YWc6IE5kZWZUYWc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmRlZlJlY29yZCB7XHJcbiAgaWQ6IGFueVtdO1xyXG4gIHBheWxvYWQ6IG51bWJlcltdO1xyXG4gIHRuZjogbnVtYmVyO1xyXG4gIHR5cGU6IG51bWJlcltdO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIE5mY1RhZ1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBOZGVmVGFnIHtcclxuICBjYW5NYWtlUmVhZE9ubHk6IGJvb2xlYW47XHJcbiAgaWQ6IG51bWJlcltdO1xyXG4gIGlzV3JpdGFibGU6IGJvb2xlYW47XHJcbiAgbWF4U2l6ZTogbnVtYmVyO1xyXG4gIG5kZWZNZXNzYWdlOiBOZGVmUmVjb3JkW107XHJcbiAgdGVjaFR5cGVzOiBzdHJpbmdbXTtcclxuICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmZjVGFnIHtcclxuICBpZD86IG51bWJlcltdO1xyXG4gIGNhbk1ha2VSZWFkT25seT86IGJvb2xlYW47XHJcbiAgaXNXcml0YWJsZT86IGJvb2xlYW47XHJcbiAgbWF4U2l6ZT86IG51bWJlcjtcclxuICBuZGVmTWVzc2FnZT86IE5kZWZSZWNvcmRbXTtcclxuICB0ZWNoVHlwZXM/OiBzdHJpbmdbXTtcclxuICB0eXBlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNjYW5PcHRpb25zIHtcclxuICAvKipcclxuICAgKiBJZiB0cnVlLCBrZWVwIHRoZSBzY2FuIHNlc3Npb24gb3BlbiBzbyB3cml0ZSBjYW4gYmUgY2FsbGVkXHJcbiAgICogYWZ0ZXIgcmVhZGluZy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXHJcbiAgICovXHJcbiAga2VlcFNlc3Npb25PcGVuPzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIE5GQ1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIE5GQyBwbHVnaW4gYWxsb3dzIHlvdSB0byByZWFkIGFuZCB3cml0ZSBORkMgdGFncy4gWW91IGNhbiBhbHNvIGJlYW0gdG8sIGFuZCByZWNlaXZlIGZyb20sIG90aGVyIE5GQyBlbmFibGVkIGRldmljZXMuXHJcbiAqXHJcbiAqIFVzZSB0b1xyXG4gKiAtIHJlYWQgZGF0YSBmcm9tIE5GQyB0YWdzXHJcbiAqIC0gd3JpdGUgZGF0YSB0byBORkMgdGFnc1xyXG4gKiAtIHNlbmQgZGF0YSB0byBvdGhlciBORkMgZW5hYmxlZCBkZXZpY2VzXHJcbiAqIC0gcmVjZWl2ZSBkYXRhIGZyb20gTkZDIGRldmljZXNcclxuICpcclxuICogVGhpcyBwbHVnaW4gdXNlcyBOREVGIChORkMgRGF0YSBFeGNoYW5nZSBGb3JtYXQpIGZvciBtYXhpbXVtIGNvbXBhdGliaWx0eSBiZXR3ZWVuIE5GQyBkZXZpY2VzLCB0YWcgdHlwZXMsIGFuZCBvcGVyYXRpbmcgc3lzdGVtcy5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgTkZDLCBOZGVmIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZmMvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBuZmM6IE5GQywgcHJpdmF0ZSBuZGVmOiBOZGVmKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIC8vIFJlYWQgTkZDIFRhZyAtIEFuZHJvaWRcclxuICogLy8gT25jZSB0aGUgcmVhZGVyIG1vZGUgaXMgZW5hYmxlZCwgYW55IHRhZ3MgdGhhdCBhcmUgc2Nhbm5lZCBhcmUgc2VudCB0byB0aGUgc3Vic2NyaWJlclxyXG4gKiAgbGV0IGZsYWdzID0gdGhpcy5uZmMuRkxBR19SRUFERVJfTkZDX0EgfCB0aGlzLm5mYy5GTEFHX1JFQURFUl9ORkNfVjtcclxuICogIHRoaXMucmVhZGVyTW9kZSQgPSB0aGlzLm5mYy5yZWFkZXJNb2RlKGZsYWdzKS5zdWJzY3JpYmUoXHJcbiAqICAgICAgdGFnID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRhZykpLFxyXG4gKiAgICAgIGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3IgcmVhZGluZyB0YWcnLCBlcnIpXHJcbiAqICApO1xyXG4gKlxyXG4gKiAvLyBSZWFkIE5GQyBUYWcgLSBpT1NcclxuICogLy8gT24gaU9TLCBhIE5GQyByZWFkZXIgc2Vzc2lvbiB0YWtlcyBjb250cm9sIGZyb20geW91ciBhcHAgd2hpbGUgc2Nhbm5pbmcgdGFncyB0aGVuIHJldHVybnMgYSB0YWdcclxuICogdHJ5IHtcclxuICogICAgIGxldCB0YWcgPSBhd2FpdCB0aGlzLm5mYy5zY2FuTmRlZigpO1xyXG4gKiAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGFnKSk7XHJcbiAqICB9IGNhdGNoIChlcnIpIHtcclxuICogICAgICBjb25zb2xlLmxvZygnRXJyb3IgcmVhZGluZyB0YWcnLCBlcnIpO1xyXG4gKiAgfVxyXG4gKlxyXG4gKiBgYGBcclxuICpcclxuICogRm9yIG1vcmUgZGV0YWlscyBvbiBORkMgdGFnIG9wZXJhdGlvbnMgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mY1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ05GQycsXHJcbiAgcGx1Z2luOiAncGhvbmVnYXAtbmZjJyxcclxuICBwbHVnaW5SZWY6ICduZmMnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbi8qKlxyXG4gKiBAeyBORkMgfSBjbGFzcyBtZXRob2RzXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBORkMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLy8gRmxhZ3MgZm9yIHJlYWRlck1vZGVcclxuICAvLyBodHRwczovL2RldmVsb3Blci5hbmRyb2lkLmNvbS9yZWZlcmVuY2UvYW5kcm9pZC9uZmMvTmZjQWRhcHRlciNGTEFHX1JFQURFUl9ORkNfQVxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEZMQUdfUkVBREVSX05GQ19BOiBudW1iZXI7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRkxBR19SRUFERVJfTkZDX0I6IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBGTEFHX1JFQURFUl9ORkNfRjogbnVtYmVyO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEZMQUdfUkVBREVSX05GQ19WOiBudW1iZXI7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRkxBR19SRUFERVJfTkZDX0JBUkNPREU6IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBGTEFHX1JFQURFUl9TS0lQX05ERUZfQ0hFQ0s6IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBGTEFHX1JFQURFUl9OT19QTEFURk9STV9TT1VORFM6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVhZCBORkMgdGFncyBzZW5kaW5nIHRoZSB0YWcgZGF0YSB0byB0aGUgc3VjY2VzcyBjYWxsYmFjay5cclxuICAgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NoYXJpb3Rzb2x1dGlvbnMvcGhvbmVnYXAtbmZjI25mY3JlYWRlcm1vZGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSBmbGFnc1xyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGNsZWFyRnVuY3Rpb246ICdkaXNhYmxlUmVhZGVyTW9kZScsXHJcbiAgICBjbGVhcldpdGhBcmdzOiBmYWxzZSxcclxuICB9KVxyXG4gIHJlYWRlck1vZGUoZmxhZ3M6IG51bWJlcik6IE9ic2VydmFibGU8TmZjVGFnPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiBzY2FuTmRlZiBzdGFydHMgdGhlIE5GQ05ERUZSZWFkZXJTZXNzaW9uIGFsbG93aW5nIGlPUyB0byBzY2FuIE5GQyB0YWdzLlxyXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyNuZmNzY2FubmRlZlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNjYW5OZGVmKG9wdGlvbnM/OiBTY2FuT3B0aW9ucyk6IFByb21pc2U8TmZjVGFnPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiBzY2FuVGFnIHN0YXJ0cyB0aGUgTkZDVGFnUmVhZGVyU2Vzc2lvbiBhbGxvd2luZyBpT1MgdG8gc2NhbiBORkMgdGFncy5cclxuICAgKlxyXG4gICAqIFlvdSBwcm9iYWJseSB3YW50ICpzY2FuTmRlZiogZm9yIHJlYWRpbmcgTkZDIHRhZ3Mgb24gaU9TLiBPbmx5IHVzZSBzY2FuVGFnIGlmIHlvdSBuZWVkIHRoZSB0YWcgVUlELlxyXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyNuZmNzY2FudGFnXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc2NhblRhZyhvcHRpb25zPzogU2Nhbk9wdGlvbnMpOiBQcm9taXNlPE5mY1RhZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gY2FuY2VsU2NhbiBzdG9wcyB0aGUgTkZDUmVhZGVyU2Vzc2lvbiByZXR1cm5pbmcgY29udHJvbCB0byB5b3VyIGFwcC5cclxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjY2FuY2Vsc2NhblxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGNhbmNlbFNjYW4oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbm5lY3QgdG8gdGhlIHRhZyBhbmQgZW5hYmxlIEkvTyBvcGVyYXRpb25zIHRvIHRoZSB0YWcgZnJvbSB0aGlzIFRhZ1RlY2hub2xvZ3kgb2JqZWN0LlxyXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyNuZmNjb25uZWN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0gdGVjaCBUaGUgdGFnIHRlY2hub2xvZ3kgY2xhc3MgbmFtZSBlLmcuIGFuZHJvaWQubmZjLnRlY2guSXNvRGVwXHJcbiAgICogQHBhcmFtIHRpbWVvdXQgVGhlIHRyYW5zY2VpdmUoYnl0ZVtdKSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyBbb3B0aW9uYWxdXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgY29ubmVjdCh0ZWNoOiBzdHJpbmcsIHRpbWVvdXQ/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2UgVGFnVGVjaG5vbG9neSBjb25uZWN0aW9uLlxyXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyNuZmNjbG9zZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGNsb3NlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZW5kIHJhdyBjb21tYW5kIHRvIHRoZSB0YWcgYW5kIHJlY2VpdmUgdGhlIHJlc3BvbnNlLlxyXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyNuZmN0cmFuc2NlaXZlXHJcbiAgICpcclxuICAgKiBFeGFtcGxlIGNvZGUgaHR0cHM6Ly9naXRodWIuY29tL2NoYXJpb3Rzb2x1dGlvbnMvcGhvbmVnYXAtbmZjI3RhZy10ZWNobm9sb2d5LWZ1bmN0aW9ucy0xXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGF0YSBhbiBBcnJheUJ1ZmZlciBvciBzdHJpbmcgb2YgaGV4IGRhdGEgZS5nLiAnMDAgQTQgMDQgMDAgMDcgRDIgNzYgMDAgMDAgODUgMDEgMDAnXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdHJhbnNjZWl2ZShkYXRhOiBzdHJpbmcgfCBBcnJheUJ1ZmZlcik6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0cyB0aGUgTkZDTkRFRlJlYWRlclNlc3Npb24gYWxsb3dpbmcgaU9TIHRvIHNjYW4gTkZDIHRhZ3MuXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlIHNjYW5OZGVmIG9yIHNjYW5UYWdcclxuICAgKlxyXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3NcclxuICAgKiBAcGFyYW0gb25GYWlsdXJlXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxyXG4gICAgZXJyb3JJbmRleDogMyxcclxuICAgIGNsZWFyRnVuY3Rpb246ICdpbnZhbGlkYXRlU2Vzc2lvbicsXHJcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlLFxyXG4gIH0pXHJcbiAgYmVnaW5TZXNzaW9uKG9uU3VjY2Vzcz86IEZ1bmN0aW9uLCBvbkZhaWx1cmU/OiBGdW5jdGlvbik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIGFueSBOREVGIHRhZy5cclxuICAgKiBAcGFyYW0gb25TdWNjZXNzXHJcbiAgICogQHBhcmFtIG9uRmFpbHVyZVxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIHN1Y2Nlc3NJbmRleDogMCxcclxuICAgIGVycm9ySW5kZXg6IDMsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAncmVtb3ZlTmRlZkxpc3RlbmVyJyxcclxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWUsXHJcbiAgfSlcclxuICBhZGROZGVmTGlzdGVuZXIob25TdWNjZXNzPzogRnVuY3Rpb24sIG9uRmFpbHVyZT86IEZ1bmN0aW9uKTogT2JzZXJ2YWJsZTxOZGVmRXZlbnQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBmb3IgdGFncyBtYXRjaGluZyBhbnkgdGFnIHR5cGUuXHJcbiAgICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gICAqIEBwYXJhbSBvbkZhaWx1cmVcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBzdWNjZXNzSW5kZXg6IDAsXHJcbiAgICBlcnJvckluZGV4OiAzLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ3JlbW92ZVRhZ0Rpc2NvdmVyZWRMaXN0ZW5lcicsXHJcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlLFxyXG4gIH0pXHJcbiAgYWRkVGFnRGlzY292ZXJlZExpc3RlbmVyKG9uU3VjY2Vzcz86IEZ1bmN0aW9uLCBvbkZhaWx1cmU/OiBGdW5jdGlvbik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIE5ERUYgdGFncyBtYXRjaGluZyBhIHNwZWNpZmllZCBNSU1FIHR5cGUuXHJcbiAgICogQHBhcmFtIG1pbWVUeXBlXHJcbiAgICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gICAqIEBwYXJhbSBvbkZhaWx1cmVcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBzdWNjZXNzSW5kZXg6IDEsXHJcbiAgICBlcnJvckluZGV4OiA0LFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ3JlbW92ZU1pbWVUeXBlTGlzdGVuZXInLFxyXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZSxcclxuICB9KVxyXG4gIGFkZE1pbWVUeXBlTGlzdGVuZXIobWltZVR5cGU6IHN0cmluZywgb25TdWNjZXNzPzogRnVuY3Rpb24sIG9uRmFpbHVyZT86IEZ1bmN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBmb3IgZm9ybWF0YWJsZSBOREVGIHRhZ3MuXHJcbiAgICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gICAqIEBwYXJhbSBvbkZhaWx1cmVcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBzdWNjZXNzSW5kZXg6IDAsXHJcbiAgICBlcnJvckluZGV4OiAzLFxyXG4gIH0pXHJcbiAgYWRkTmRlZkZvcm1hdGFibGVMaXN0ZW5lcihvblN1Y2Nlc3M/OiBGdW5jdGlvbiwgb25GYWlsdXJlPzogRnVuY3Rpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV3JpdGVzIGFuIE5kZWZNZXNzYWdlKGFycmF5IG9mIG5kZWYgcmVjb3JkcykgdG8gYSBORkMgdGFnLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIHthbnlbXX1cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB3cml0ZShtZXNzYWdlOiBhbnlbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIE1ha2VzIGEgTkZDIHRhZyByZWFkIG9ubHkuICoqV2FybmluZyoqIHRoaXMgaXMgcGVybWFuZW50LlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIG1ha2VSZWFkT25seSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hhcmVzIGFuIE5ERUYgTWVzc2FnZShhcnJheSBvZiBuZGVmIHJlY29yZHMpIHZpYSBwZWVyLXRvLXBlZXIuXHJcbiAgICogQHBhcmFtIG1lc3NhZ2UgQW4gYXJyYXkgb2YgTkRFRiBSZWNvcmRzLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNoYXJlKG1lc3NhZ2U6IGFueVtdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3Agc2hhcmluZyBOREVGIGRhdGEgdmlhIHBlZXItdG8tcGVlci5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB1bnNoYXJlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFcmFzZSBhIE5ERUYgdGFnXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGVyYXNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZW5kIGEgZmlsZSB0byBhbm90aGVyIGRldmljZSB2aWEgTkZDIGhhbmRvdmVyLlxyXG4gICAqIEBwYXJhbSB1cmlzIEEgVVJJIGFzIGEgU3RyaW5nLCBvciBhbiBhcnJheSBvZiBVUklzLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGhhbmRvdmVyKHVyaXM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3Agc2hhcmluZyBOREVGIGRhdGEgdmlhIE5GQyBoYW5kb3Zlci5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdG9wSGFuZG92ZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW5zIHRoZSBkZXZpY2UncyBORkMgc2V0dGluZ3MuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2hvd1NldHRpbmdzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBORkMgaXMgYXZhaWxhYmxlIGFuZCBlbmFibGVkIG9uIHRoaXMgZGV2aWNlLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGVuYWJsZWQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHsgTkZDIH0gY2xhc3MgdXRpbGl0eSBtZXRob2RzXHJcbiAgICogZm9yIHVzZSB3aXRoXHJcbiAgICovXHJcbiAgLyoqXHJcbiAgICogQ29udmVydCBieXRlIGFycmF5IHRvIHN0cmluZ1xyXG4gICAqIEBwYXJhbSBieXRlcyB7bnVtYmVyW119XHJcbiAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBieXRlc1RvU3RyaW5nKGJ5dGVzOiBudW1iZXJbXSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnQgc3RyaW5nIHRvIGJ5dGUgYXJyYXkuXHJcbiAgICogQHBhcmFtIHN0ciB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJbXX1cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzdHJpbmdUb0J5dGVzKHN0cjogc3RyaW5nKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBDb252ZXJ0IGJ5dGUgYXJyYXkgdG8gaGV4IHN0cmluZ1xyXG4gICAqXHJcbiAgICogQHBhcmFtIGJ5dGVzIHtudW1iZXJbXX1cclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGJ5dGVzVG9IZXhTdHJpbmcoYnl0ZXM6IG51bWJlcltdKTogc3RyaW5nIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdORkMnLFxyXG4gIHBsdWdpbjogJ3Bob25lZ2FwLW5mYycsXHJcbiAgcGx1Z2luUmVmOiAnbmRlZicsXHJcbn0pXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVXRpbGl0eSBtZXRob2RzIGZvciBjcmVhdGluZyBuZGVmIHJlY29yZHMgZm9yIHRoZSBuZGVmIHRhZyBmb3JtYXQuXHJcbiAqIE1vdmUgcmVjb3JkcyBpbnRvIGFycmF5IGJlZm9yZSB1c2FnZS4gVGhlbiBwYXNzIGFuIGFycmF5IHRvIG1ldGhvZHMgYXMgcGFyYW1ldGVycy5cclxuICogRG8gbm90IHBhc3MgYnl0ZXMgYXMgcGFyYW1ldGVycyBmb3IgdGhlc2UgbWV0aG9kcywgY29udmVyc2lvbiBpcyBidWlsdCBpbi5cclxuICogRm9yIHVzYWdlIHdpdGggbmZjLndyaXRlKCkgYW5kIG5mYy5zaGFyZSgpXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZGVmIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFRORl9FTVBUWTogbnVtYmVyO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFRORl9XRUxMX0tOT1dOOiBudW1iZXI7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgVE5GX01JTUVfTUVESUE6IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBUTkZfQUJTT0xVVEVfVVJJOiBudW1iZXI7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgVE5GX0VYVEVSTkFMX1RZUEU6IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBUTkZfVU5LTk9XTjogbnVtYmVyO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFRORl9VTkNIQU5HRUQ6IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBUTkZfUkVTRVJWRUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcmVjb3JkKHRuZjogbnVtYmVyLCB0eXBlOiBudW1iZXJbXSB8IHN0cmluZywgaWQ6IG51bWJlcltdIHwgc3RyaW5nLCBwYXlsb2FkOiBudW1iZXJbXSB8IHN0cmluZyk6IE5kZWZSZWNvcmQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdGV4dFJlY29yZCh0ZXh0OiBzdHJpbmcsIGxhbmd1YWdlQ29kZT86IHN0cmluZywgaWQ/OiBudW1iZXJbXSB8IHN0cmluZyk6IE5kZWZSZWNvcmQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdXJpUmVjb3JkKHVyaTogc3RyaW5nLCBpZD86IG51bWJlcltdIHwgc3RyaW5nKTogTmRlZlJlY29yZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBhYnNvbHV0ZVVyaVJlY29yZCh1cmk6IHN0cmluZywgcGF5bG9hZDogbnVtYmVyW10gfCBzdHJpbmcsIGlkPzogbnVtYmVyW10gfCBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIG1pbWVNZWRpYVJlY29yZChtaW1lVHlwZTogc3RyaW5nLCBwYXlsb2FkOiBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNtYXJ0UG9zdGVyKG5kZWZSZWNvcmRzOiBhbnlbXSwgaWQ/OiBudW1iZXJbXSB8IHN0cmluZyk6IE5kZWZSZWNvcmQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZW1wdHlSZWNvcmQoKTogTmRlZlJlY29yZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBhbmRyb2lkQXBwbGljYXRpb25SZWNvcmQocGFja2FnZU5hbWU6IHN0cmluZyk6IE5kZWZSZWNvcmQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZW5jb2RlTWVzc2FnZShuZGVmUmVjb3JkczogYW55KTogYW55IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGRlY29kZU1lc3NhZ2UoYnl0ZXM6IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBkZWNvZGVUbmYodG5mX2J5dGU6IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBlbmNvZGVUbmYobWI6IGFueSwgbWU6IGFueSwgY2Y6IGFueSwgc3I6IGFueSwgaWw6IGFueSwgdG5mOiBhbnkpOiBhbnkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdG5mVG9TdHJpbmcodG5mOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgdGV4dEhlbHBlcjogVGV4dEhlbHBlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgdXJpSGVscGVyOiBVcmlIZWxwZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnTkZDJyxcclxuICBwbHVnaW46ICdwaG9uZWdhcC1uZmMnLFxyXG4gIHBsdWdpblJlZjogJ3V0aWwnLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZmNVdGlsIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHRvSGV4KGk6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICB0b1ByaW50YWJsZShpOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgYnl0ZXNUb1N0cmluZyhpOiBudW1iZXJbXSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzdHJpbmdUb0J5dGVzKHM6IHN0cmluZyk6IG51bWJlcltdIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGJ5dGVzVG9IZXhTdHJpbmcoYnl0ZXM6IG51bWJlcltdKTogc3RyaW5nIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGlzVHlwZShyZWNvcmQ6IE5kZWZSZWNvcmQsIHRuZjogbnVtYmVyLCB0eXBlOiBudW1iZXJbXSB8IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgYXJyYXlCdWZmZXJUb0hleFN0cmluZyhidWZmZXI6IEFycmF5QnVmZmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGhleFN0cmluZ1RvQXJyYXlCdWZmZXIoaGV4U3RyaW5nOiBzdHJpbmcpOiBBcnJheUJ1ZmZlciB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dEhlbHBlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBkZWNvZGVQYXlsb2FkKGRhdGE6IG51bWJlcltdKTogc3RyaW5nIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgZW5jb2RlUGF5bG9hZCh0ZXh0OiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IG51bWJlcltdIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcmlIZWxwZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgZGVjb2RlUGF5bG9hZChkYXRhOiBudW1iZXJbXSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGVuY29kZVBheWxvYWQodXJpOiBzdHJpbmcpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==