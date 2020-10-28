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
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import { Observable } from 'rxjs';
var NFCOriginal = /** @class */ (function (_super) {
    __extends(NFCOriginal, _super);
    function NFCOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NFCOriginal.prototype.readerMode = function (flags) { return cordova(this, "readerMode", { "observable": true, "clearFunction": "disableReaderMode", "clearWithArgs": false }, arguments); };
    NFCOriginal.prototype.scanNdef = function (options) { return cordova(this, "scanNdef", { "sync": true }, arguments); };
    NFCOriginal.prototype.scanTag = function (options) { return cordova(this, "scanTag", { "sync": true }, arguments); };
    NFCOriginal.prototype.cancelScan = function () { return cordova(this, "cancelScan", { "sync": true }, arguments); };
    NFCOriginal.prototype.connect = function (tech, timeout) { return cordova(this, "connect", { "sync": true }, arguments); };
    NFCOriginal.prototype.close = function () { return cordova(this, "close", { "sync": true }, arguments); };
    NFCOriginal.prototype.transceive = function (data) { return cordova(this, "transceive", { "sync": true }, arguments); };
    NFCOriginal.prototype.beginSession = function (onSuccess, onFailure) { return cordova(this, "beginSession", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "invalidateSession", "clearWithArgs": true }, arguments); };
    NFCOriginal.prototype.addNdefListener = function (onSuccess, onFailure) { return cordova(this, "addNdefListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeNdefListener", "clearWithArgs": true }, arguments); };
    NFCOriginal.prototype.addTagDiscoveredListener = function (onSuccess, onFailure) { return cordova(this, "addTagDiscoveredListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeTagDiscoveredListener", "clearWithArgs": true }, arguments); };
    NFCOriginal.prototype.addMimeTypeListener = function (mimeType, onSuccess, onFailure) { return cordova(this, "addMimeTypeListener", { "observable": true, "successIndex": 1, "errorIndex": 4, "clearFunction": "removeMimeTypeListener", "clearWithArgs": true }, arguments); };
    NFCOriginal.prototype.addNdefFormatableListener = function (onSuccess, onFailure) { return cordova(this, "addNdefFormatableListener", { "observable": true, "successIndex": 0, "errorIndex": 3 }, arguments); };
    NFCOriginal.prototype.write = function (message) { return cordova(this, "write", {}, arguments); };
    NFCOriginal.prototype.makeReadOnly = function () { return cordova(this, "makeReadOnly", {}, arguments); };
    NFCOriginal.prototype.share = function (message) { return cordova(this, "share", {}, arguments); };
    NFCOriginal.prototype.unshare = function () { return cordova(this, "unshare", {}, arguments); };
    NFCOriginal.prototype.erase = function () { return cordova(this, "erase", {}, arguments); };
    NFCOriginal.prototype.handover = function (uris) { return cordova(this, "handover", {}, arguments); };
    NFCOriginal.prototype.stopHandover = function () { return cordova(this, "stopHandover", {}, arguments); };
    NFCOriginal.prototype.showSettings = function () { return cordova(this, "showSettings", {}, arguments); };
    NFCOriginal.prototype.enabled = function () { return cordova(this, "enabled", {}, arguments); };
    NFCOriginal.prototype.bytesToString = function (bytes) { return cordova(this, "bytesToString", { "sync": true }, arguments); };
    NFCOriginal.prototype.stringToBytes = function (str) { return cordova(this, "stringToBytes", { "sync": true }, arguments); };
    NFCOriginal.prototype.bytesToHexString = function (bytes) { return cordova(this, "bytesToHexString", { "sync": true }, arguments); };
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_NFC_A", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_A"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_A", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_NFC_B", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_B"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_B", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_NFC_F", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_F"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_F", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_NFC_V", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_V"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_V", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_NFC_BARCODE", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_BARCODE"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_BARCODE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_SKIP_NDEF_CHECK", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_SKIP_NDEF_CHECK"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_SKIP_NDEF_CHECK", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_NO_PLATFORM_SOUNDS", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NO_PLATFORM_SOUNDS"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NO_PLATFORM_SOUNDS", value); },
        enumerable: true,
        configurable: true
    });
    NFCOriginal.pluginName = "NFC";
    NFCOriginal.plugin = "phonegap-nfc";
    NFCOriginal.pluginRef = "nfc";
    NFCOriginal.repo = "https://github.com/chariotsolutions/phonegap-nfc";
    NFCOriginal.platforms = ["Android", "iOS", "Windows"];
    return NFCOriginal;
}(IonicNativePlugin));
var NFC = new NFCOriginal();
export { NFC };
var NdefOriginal = /** @class */ (function (_super) {
    __extends(NdefOriginal, _super);
    function NdefOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NdefOriginal.prototype.record = function (tnf, type, id, payload) { return cordova(this, "record", { "sync": true }, arguments); };
    NdefOriginal.prototype.textRecord = function (text, languageCode, id) { return cordova(this, "textRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.uriRecord = function (uri, id) { return cordova(this, "uriRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.absoluteUriRecord = function (uri, payload, id) { return cordova(this, "absoluteUriRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.mimeMediaRecord = function (mimeType, payload) { return cordova(this, "mimeMediaRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.smartPoster = function (ndefRecords, id) { return cordova(this, "smartPoster", { "sync": true }, arguments); };
    NdefOriginal.prototype.emptyRecord = function () { return cordova(this, "emptyRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.androidApplicationRecord = function (packageName) { return cordova(this, "androidApplicationRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.encodeMessage = function (ndefRecords) { return cordova(this, "encodeMessage", { "sync": true }, arguments); };
    NdefOriginal.prototype.decodeMessage = function (bytes) { return cordova(this, "decodeMessage", { "sync": true }, arguments); };
    NdefOriginal.prototype.decodeTnf = function (tnf_byte) { return cordova(this, "decodeTnf", { "sync": true }, arguments); };
    NdefOriginal.prototype.encodeTnf = function (mb, me, cf, sr, il, tnf) { return cordova(this, "encodeTnf", { "sync": true }, arguments); };
    NdefOriginal.prototype.tnfToString = function (tnf) { return cordova(this, "tnfToString", { "sync": true }, arguments); };
    Object.defineProperty(NdefOriginal.prototype, "TNF_EMPTY", {
        get: function () { return cordovaPropertyGet(this, "TNF_EMPTY"); },
        set: function (value) { cordovaPropertySet(this, "TNF_EMPTY", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_WELL_KNOWN", {
        get: function () { return cordovaPropertyGet(this, "TNF_WELL_KNOWN"); },
        set: function (value) { cordovaPropertySet(this, "TNF_WELL_KNOWN", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_MIME_MEDIA", {
        get: function () { return cordovaPropertyGet(this, "TNF_MIME_MEDIA"); },
        set: function (value) { cordovaPropertySet(this, "TNF_MIME_MEDIA", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_ABSOLUTE_URI", {
        get: function () { return cordovaPropertyGet(this, "TNF_ABSOLUTE_URI"); },
        set: function (value) { cordovaPropertySet(this, "TNF_ABSOLUTE_URI", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_EXTERNAL_TYPE", {
        get: function () { return cordovaPropertyGet(this, "TNF_EXTERNAL_TYPE"); },
        set: function (value) { cordovaPropertySet(this, "TNF_EXTERNAL_TYPE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_UNKNOWN", {
        get: function () { return cordovaPropertyGet(this, "TNF_UNKNOWN"); },
        set: function (value) { cordovaPropertySet(this, "TNF_UNKNOWN", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_UNCHANGED", {
        get: function () { return cordovaPropertyGet(this, "TNF_UNCHANGED"); },
        set: function (value) { cordovaPropertySet(this, "TNF_UNCHANGED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_RESERVED", {
        get: function () { return cordovaPropertyGet(this, "TNF_RESERVED"); },
        set: function (value) { cordovaPropertySet(this, "TNF_RESERVED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "textHelper", {
        get: function () { return cordovaPropertyGet(this, "textHelper"); },
        set: function (value) { cordovaPropertySet(this, "textHelper", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "uriHelper", {
        get: function () { return cordovaPropertyGet(this, "uriHelper"); },
        set: function (value) { cordovaPropertySet(this, "uriHelper", value); },
        enumerable: true,
        configurable: true
    });
    NdefOriginal.pluginName = "NFC";
    NdefOriginal.plugin = "phonegap-nfc";
    NdefOriginal.pluginRef = "ndef";
    return NdefOriginal;
}(IonicNativePlugin));
var Ndef = new NdefOriginal();
export { Ndef };
var NfcUtilOriginal = /** @class */ (function (_super) {
    __extends(NfcUtilOriginal, _super);
    function NfcUtilOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NfcUtilOriginal.prototype.toHex = function (i) { return cordova(this, "toHex", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.toPrintable = function (i) { return cordova(this, "toPrintable", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.bytesToString = function (i) { return cordova(this, "bytesToString", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.stringToBytes = function (s) { return cordova(this, "stringToBytes", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.bytesToHexString = function (bytes) { return cordova(this, "bytesToHexString", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.isType = function (record, tnf, type) { return cordova(this, "isType", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.arrayBufferToHexString = function (buffer) { return cordova(this, "arrayBufferToHexString", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.hexStringToArrayBuffer = function (hexString) { return cordova(this, "hexStringToArrayBuffer", { "sync": true }, arguments); };
    NfcUtilOriginal.pluginName = "NFC";
    NfcUtilOriginal.plugin = "phonegap-nfc";
    NfcUtilOriginal.pluginRef = "util";
    return NfcUtilOriginal;
}(IonicNativePlugin));
var NfcUtil = new NfcUtilOriginal();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25mYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQW1HVCx1QkFBaUI7Ozs7SUE4QnhDLHdCQUFVLGFBQUMsS0FBYTtJQVN4QixzQkFBUSxhQUFDLE9BQXFCO0lBVzlCLHFCQUFPLGFBQUMsT0FBcUI7SUFTN0Isd0JBQVU7SUFZVixxQkFBTyxhQUFDLElBQVksRUFBRSxPQUFnQjtJQVN0QyxtQkFBSztJQWFMLHdCQUFVLGFBQUMsSUFBMEI7SUFtQnJDLDBCQUFZLGFBQUMsU0FBb0IsRUFBRSxTQUFvQjtJQWlCdkQsNkJBQWUsYUFBQyxTQUFvQixFQUFFLFNBQW9CO0lBaUIxRCxzQ0FBd0IsYUFBQyxTQUFvQixFQUFFLFNBQW9CO0lBa0JuRSxpQ0FBbUIsYUFBQyxRQUFnQixFQUFFLFNBQW9CLEVBQUUsU0FBb0I7SUFlaEYsdUNBQXlCLGFBQUMsU0FBb0IsRUFBRSxTQUFvQjtJQVVwRSxtQkFBSyxhQUFDLE9BQWM7SUFRcEIsMEJBQVk7SUFVWixtQkFBSyxhQUFDLE9BQWM7SUFTcEIscUJBQU87SUFRUCxtQkFBSztJQVVMLHNCQUFRLGFBQUMsSUFBYztJQVN2QiwwQkFBWTtJQVNaLDBCQUFZO0lBU1oscUJBQU87SUFhUCwyQkFBYSxhQUFDLEtBQWU7SUFTN0IsMkJBQWEsYUFBQyxHQUFXO0lBVXpCLDhCQUFnQixhQUFDLEtBQWU7MEJBalNoQyxrQ0FBaUI7Ozs7OzswQkFFakIsa0NBQWlCOzs7Ozs7MEJBRWpCLGtDQUFpQjs7Ozs7OzBCQUVqQixrQ0FBaUI7Ozs7OzswQkFFakIsd0NBQXVCOzs7Ozs7MEJBRXZCLDRDQUEyQjs7Ozs7OzBCQUUzQiwrQ0FBOEI7Ozs7Ozs7Ozs7O2NBckhoQztFQXFHeUIsaUJBQWlCO1NBQTdCLEdBQUc7O0lBeVRVLHdCQUFpQjs7OztJQW1CekMscUJBQU0sYUFBQyxHQUFXLEVBQUUsSUFBdUIsRUFBRSxFQUFxQixFQUFFLE9BQTBCO0lBSzlGLHlCQUFVLGFBQUMsSUFBWSxFQUFFLFlBQXFCLEVBQUUsRUFBc0I7SUFLdEUsd0JBQVMsYUFBQyxHQUFXLEVBQUUsRUFBc0I7SUFLN0MsZ0NBQWlCLGFBQUMsR0FBVyxFQUFFLE9BQTBCLEVBQUUsRUFBc0I7SUFLakYsOEJBQWUsYUFBQyxRQUFnQixFQUFFLE9BQWU7SUFLakQsMEJBQVcsYUFBQyxXQUFrQixFQUFFLEVBQXNCO0lBS3RELDBCQUFXO0lBS1gsdUNBQXdCLGFBQUMsV0FBbUI7SUFLNUMsNEJBQWEsYUFBQyxXQUFnQjtJQUs5Qiw0QkFBYSxhQUFDLEtBQVU7SUFLeEIsd0JBQVMsYUFBQyxRQUFhO0lBS3ZCLHdCQUFTLGFBQUMsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxHQUFRO0lBSy9ELDBCQUFXLGFBQUMsR0FBUTswQkE3RXBCLDJCQUFTOzs7Ozs7MEJBRVQsZ0NBQWM7Ozs7OzswQkFFZCxnQ0FBYzs7Ozs7OzBCQUVkLGtDQUFnQjs7Ozs7OzBCQUVoQixtQ0FBaUI7Ozs7OzswQkFFakIsNkJBQVc7Ozs7OzswQkFFWCwrQkFBYTs7Ozs7OzBCQUViLDhCQUFZOzs7Ozs7MEJBb0VaLDRCQUFVOzs7Ozs7MEJBR1YsMkJBQVM7Ozs7Ozs7OztlQXJmWDtFQThaMEIsaUJBQWlCO1NBQTlCLElBQUk7O0lBbUdZLDJCQUFpQjs7OztJQUU1Qyx1QkFBSyxhQUFDLENBQVM7SUFLZiw2QkFBVyxhQUFDLENBQVM7SUFLckIsK0JBQWEsYUFBQyxDQUFXO0lBS3pCLCtCQUFhLGFBQUMsQ0FBUztJQUt2QixrQ0FBZ0IsYUFBQyxLQUFlO0lBS2hDLHdCQUFNLGFBQUMsTUFBa0IsRUFBRSxHQUFXLEVBQUUsSUFBdUI7SUFLL0Qsd0NBQXNCLGFBQUMsTUFBbUI7SUFLMUMsd0NBQXNCLGFBQUMsU0FBaUI7Ozs7a0JBdGlCMUM7RUFpZ0I2QixpQkFBaUI7U0FBakMsT0FBTzs7SUEwQ1ksOEJBQWlCOzs7O0lBQy9DLGtDQUFhLEdBQWIsVUFBYyxJQUFjO1FBQzFCLE9BQU87SUFDVCxDQUFDO0lBQ0Qsa0NBQWEsR0FBYixVQUFjLElBQVksRUFBRSxJQUFZO1FBQ3RDLE9BQU87SUFDVCxDQUFDO3FCQWpqQkg7RUEyaUJnQyxpQkFBaUI7OztJQVNsQiw2QkFBaUI7Ozs7SUFDOUMsaUNBQWEsR0FBYixVQUFjLElBQWM7UUFDMUIsT0FBTztJQUNULENBQUM7SUFDRCxpQ0FBYSxHQUFiLFVBQWMsR0FBVztRQUN2QixPQUFPO0lBQ1QsQ0FBQztvQkExakJIO0VBb2pCK0IsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmRlY2xhcmUgbGV0IHdpbmRvdzogYW55O1xyXG5cclxuLy8gdGFnIHNob3VsZCBiZSBOZmNUYWcsIGJ1dCBrZWVwaW5nIGFzIE5kZWZUYWcgdG8gYXZvaWQgYnJlYWtpbmcgZXhpc3RpbmcgY29kZVxyXG5leHBvcnQgaW50ZXJmYWNlIE5kZWZFdmVudCB7XHJcbiAgdGFnOiBOZGVmVGFnO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5kZWZSZWNvcmQge1xyXG4gIGlkOiBhbnlbXTtcclxuICBwYXlsb2FkOiBudW1iZXJbXTtcclxuICB0bmY6IG51bWJlcjtcclxuICB0eXBlOiBudW1iZXJbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSBOZmNUYWdcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmRlZlRhZyB7XHJcbiAgY2FuTWFrZVJlYWRPbmx5OiBib29sZWFuO1xyXG4gIGlkOiBudW1iZXJbXTtcclxuICBpc1dyaXRhYmxlOiBib29sZWFuO1xyXG4gIG1heFNpemU6IG51bWJlcjtcclxuICBuZGVmTWVzc2FnZTogTmRlZlJlY29yZFtdO1xyXG4gIHRlY2hUeXBlczogc3RyaW5nW107XHJcbiAgdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5mY1RhZyB7XHJcbiAgaWQ/OiBudW1iZXJbXTtcclxuICBjYW5NYWtlUmVhZE9ubHk/OiBib29sZWFuO1xyXG4gIGlzV3JpdGFibGU/OiBib29sZWFuO1xyXG4gIG1heFNpemU/OiBudW1iZXI7XHJcbiAgbmRlZk1lc3NhZ2U/OiBOZGVmUmVjb3JkW107XHJcbiAgdGVjaFR5cGVzPzogc3RyaW5nW107XHJcbiAgdHlwZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTY2FuT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogSWYgdHJ1ZSwga2VlcCB0aGUgc2NhbiBzZXNzaW9uIG9wZW4gc28gd3JpdGUgY2FuIGJlIGNhbGxlZFxyXG4gICAqIGFmdGVyIHJlYWRpbmcuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxyXG4gICAqL1xyXG4gIGtlZXBTZXNzaW9uT3Blbj86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBORkNcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBORkMgcGx1Z2luIGFsbG93cyB5b3UgdG8gcmVhZCBhbmQgd3JpdGUgTkZDIHRhZ3MuIFlvdSBjYW4gYWxzbyBiZWFtIHRvLCBhbmQgcmVjZWl2ZSBmcm9tLCBvdGhlciBORkMgZW5hYmxlZCBkZXZpY2VzLlxyXG4gKlxyXG4gKiBVc2UgdG9cclxuICogLSByZWFkIGRhdGEgZnJvbSBORkMgdGFnc1xyXG4gKiAtIHdyaXRlIGRhdGEgdG8gTkZDIHRhZ3NcclxuICogLSBzZW5kIGRhdGEgdG8gb3RoZXIgTkZDIGVuYWJsZWQgZGV2aWNlc1xyXG4gKiAtIHJlY2VpdmUgZGF0YSBmcm9tIE5GQyBkZXZpY2VzXHJcbiAqXHJcbiAqIFRoaXMgcGx1Z2luIHVzZXMgTkRFRiAoTkZDIERhdGEgRXhjaGFuZ2UgRm9ybWF0KSBmb3IgbWF4aW11bSBjb21wYXRpYmlsdHkgYmV0d2VlbiBORkMgZGV2aWNlcywgdGFnIHR5cGVzLCBhbmQgb3BlcmF0aW5nIHN5c3RlbXMuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IE5GQywgTmRlZiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmZjL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmZjOiBORkMsIHByaXZhdGUgbmRlZjogTmRlZikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiAvLyBSZWFkIE5GQyBUYWcgLSBBbmRyb2lkXHJcbiAqIC8vIE9uY2UgdGhlIHJlYWRlciBtb2RlIGlzIGVuYWJsZWQsIGFueSB0YWdzIHRoYXQgYXJlIHNjYW5uZWQgYXJlIHNlbnQgdG8gdGhlIHN1YnNjcmliZXJcclxuICogIGxldCBmbGFncyA9IHRoaXMubmZjLkZMQUdfUkVBREVSX05GQ19BIHwgdGhpcy5uZmMuRkxBR19SRUFERVJfTkZDX1Y7XHJcbiAqICB0aGlzLnJlYWRlck1vZGUkID0gdGhpcy5uZmMucmVhZGVyTW9kZShmbGFncykuc3Vic2NyaWJlKFxyXG4gKiAgICAgIHRhZyA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0YWcpKSxcclxuICogICAgICBlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yIHJlYWRpbmcgdGFnJywgZXJyKVxyXG4gKiAgKTtcclxuICpcclxuICogLy8gUmVhZCBORkMgVGFnIC0gaU9TXHJcbiAqIC8vIE9uIGlPUywgYSBORkMgcmVhZGVyIHNlc3Npb24gdGFrZXMgY29udHJvbCBmcm9tIHlvdXIgYXBwIHdoaWxlIHNjYW5uaW5nIHRhZ3MgdGhlbiByZXR1cm5zIGEgdGFnXHJcbiAqIHRyeSB7XHJcbiAqICAgICBsZXQgdGFnID0gYXdhaXQgdGhpcy5uZmMuc2Nhbk5kZWYoKTtcclxuICogICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRhZykpO1xyXG4gKiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAqICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHJlYWRpbmcgdGFnJywgZXJyKTtcclxuICogIH1cclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqIEZvciBtb3JlIGRldGFpbHMgb24gTkZDIHRhZyBvcGVyYXRpb25zIHNlZSBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdORkMnLFxyXG4gIHBsdWdpbjogJ3Bob25lZ2FwLW5mYycsXHJcbiAgcGx1Z2luUmVmOiAnbmZjJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NoYXJpb3Rzb2x1dGlvbnMvcGhvbmVnYXAtbmZjJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG4vKipcclxuICogQHsgTkZDIH0gY2xhc3MgbWV0aG9kc1xyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTkZDIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8vIEZsYWdzIGZvciByZWFkZXJNb2RlXHJcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vcmVmZXJlbmNlL2FuZHJvaWQvbmZjL05mY0FkYXB0ZXIjRkxBR19SRUFERVJfTkZDX0FcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBGTEFHX1JFQURFUl9ORkNfQTogbnVtYmVyO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEZMQUdfUkVBREVSX05GQ19COiBudW1iZXI7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRkxBR19SRUFERVJfTkZDX0Y6IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBGTEFHX1JFQURFUl9ORkNfVjogbnVtYmVyO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEZMQUdfUkVBREVSX05GQ19CQVJDT0RFOiBudW1iZXI7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRkxBR19SRUFERVJfU0tJUF9OREVGX0NIRUNLOiBudW1iZXI7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRkxBR19SRUFERVJfTk9fUExBVEZPUk1fU09VTkRTOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlYWQgTkZDIHRhZ3Mgc2VuZGluZyB0aGUgdGFnIGRhdGEgdG8gdGhlIHN1Y2Nlc3MgY2FsbGJhY2suXHJcbiAgICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyNuZmNyZWFkZXJtb2RlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZmxhZ3NcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAnZGlzYWJsZVJlYWRlck1vZGUnLFxyXG4gICAgY2xlYXJXaXRoQXJnczogZmFsc2UsXHJcbiAgfSlcclxuICByZWFkZXJNb2RlKGZsYWdzOiBudW1iZXIpOiBPYnNlcnZhYmxlPE5mY1RhZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gc2Nhbk5kZWYgc3RhcnRzIHRoZSBORkNOREVGUmVhZGVyU2Vzc2lvbiBhbGxvd2luZyBpT1MgdG8gc2NhbiBORkMgdGFncy5cclxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjc2Nhbm5kZWZcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzY2FuTmRlZihvcHRpb25zPzogU2Nhbk9wdGlvbnMpOiBQcm9taXNlPE5mY1RhZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gc2NhblRhZyBzdGFydHMgdGhlIE5GQ1RhZ1JlYWRlclNlc3Npb24gYWxsb3dpbmcgaU9TIHRvIHNjYW4gTkZDIHRhZ3MuXHJcbiAgICpcclxuICAgKiBZb3UgcHJvYmFibHkgd2FudCAqc2Nhbk5kZWYqIGZvciByZWFkaW5nIE5GQyB0YWdzIG9uIGlPUy4gT25seSB1c2Ugc2NhblRhZyBpZiB5b3UgbmVlZCB0aGUgdGFnIFVJRC5cclxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjc2NhbnRhZ1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNjYW5UYWcob3B0aW9ucz86IFNjYW5PcHRpb25zKTogUHJvbWlzZTxOZmNUYWc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIGNhbmNlbFNjYW4gc3RvcHMgdGhlIE5GQ1JlYWRlclNlc3Npb24gcmV0dXJuaW5nIGNvbnRyb2wgdG8geW91ciBhcHAuXHJcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2NoYXJpb3Rzb2x1dGlvbnMvcGhvbmVnYXAtbmZjI25mY2NhbmNlbHNjYW5cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBjYW5jZWxTY2FuKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25uZWN0IHRvIHRoZSB0YWcgYW5kIGVuYWJsZSBJL08gb3BlcmF0aW9ucyB0byB0aGUgdGFnIGZyb20gdGhpcyBUYWdUZWNobm9sb2d5IG9iamVjdC5cclxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjY29ubmVjdFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHRlY2ggVGhlIHRhZyB0ZWNobm9sb2d5IGNsYXNzIG5hbWUgZS5nLiBhbmRyb2lkLm5mYy50ZWNoLklzb0RlcFxyXG4gICAqIEBwYXJhbSB0aW1lb3V0IFRoZSB0cmFuc2NlaXZlKGJ5dGVbXSkgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgW29wdGlvbmFsXVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGNvbm5lY3QodGVjaDogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb3NlIFRhZ1RlY2hub2xvZ3kgY29ubmVjdGlvbi5cclxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjY2xvc2VcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBjbG9zZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VuZCByYXcgY29tbWFuZCB0byB0aGUgdGFnIGFuZCByZWNlaXZlIHRoZSByZXNwb25zZS5cclxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjdHJhbnNjZWl2ZVxyXG4gICAqXHJcbiAgICogRXhhbXBsZSBjb2RlIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyN0YWctdGVjaG5vbG9neS1mdW5jdGlvbnMtMVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRhdGEgYW4gQXJyYXlCdWZmZXIgb3Igc3RyaW5nIG9mIGhleCBkYXRhIGUuZy4gJzAwIEE0IDA0IDAwIDA3IEQyIDc2IDAwIDAwIDg1IDAxIDAwJ1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHRyYW5zY2VpdmUoZGF0YTogc3RyaW5nIHwgQXJyYXlCdWZmZXIpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydHMgdGhlIE5GQ05ERUZSZWFkZXJTZXNzaW9uIGFsbG93aW5nIGlPUyB0byBzY2FuIE5GQyB0YWdzLlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZSBzY2FuTmRlZiBvciBzY2FuVGFnXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb25TdWNjZXNzXHJcbiAgICogQHBhcmFtIG9uRmFpbHVyZVxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIHN1Y2Nlc3NJbmRleDogMCxcclxuICAgIGVycm9ySW5kZXg6IDMsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAnaW52YWxpZGF0ZVNlc3Npb24nLFxyXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZSxcclxuICB9KVxyXG4gIGJlZ2luU2Vzc2lvbihvblN1Y2Nlc3M/OiBGdW5jdGlvbiwgb25GYWlsdXJlPzogRnVuY3Rpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBhbnkgTkRFRiB0YWcuXHJcbiAgICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gICAqIEBwYXJhbSBvbkZhaWx1cmVcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBzdWNjZXNzSW5kZXg6IDAsXHJcbiAgICBlcnJvckluZGV4OiAzLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ3JlbW92ZU5kZWZMaXN0ZW5lcicsXHJcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlLFxyXG4gIH0pXHJcbiAgYWRkTmRlZkxpc3RlbmVyKG9uU3VjY2Vzcz86IEZ1bmN0aW9uLCBvbkZhaWx1cmU/OiBGdW5jdGlvbik6IE9ic2VydmFibGU8TmRlZkV2ZW50PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIHRhZ3MgbWF0Y2hpbmcgYW55IHRhZyB0eXBlLlxyXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3NcclxuICAgKiBAcGFyYW0gb25GYWlsdXJlXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxyXG4gICAgZXJyb3JJbmRleDogMyxcclxuICAgIGNsZWFyRnVuY3Rpb246ICdyZW1vdmVUYWdEaXNjb3ZlcmVkTGlzdGVuZXInLFxyXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZSxcclxuICB9KVxyXG4gIGFkZFRhZ0Rpc2NvdmVyZWRMaXN0ZW5lcihvblN1Y2Nlc3M/OiBGdW5jdGlvbiwgb25GYWlsdXJlPzogRnVuY3Rpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBOREVGIHRhZ3MgbWF0Y2hpbmcgYSBzcGVjaWZpZWQgTUlNRSB0eXBlLlxyXG4gICAqIEBwYXJhbSBtaW1lVHlwZVxyXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3NcclxuICAgKiBAcGFyYW0gb25GYWlsdXJlXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgc3VjY2Vzc0luZGV4OiAxLFxyXG4gICAgZXJyb3JJbmRleDogNCxcclxuICAgIGNsZWFyRnVuY3Rpb246ICdyZW1vdmVNaW1lVHlwZUxpc3RlbmVyJyxcclxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWUsXHJcbiAgfSlcclxuICBhZGRNaW1lVHlwZUxpc3RlbmVyKG1pbWVUeXBlOiBzdHJpbmcsIG9uU3VjY2Vzcz86IEZ1bmN0aW9uLCBvbkZhaWx1cmU/OiBGdW5jdGlvbik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIGZvcm1hdGFibGUgTkRFRiB0YWdzLlxyXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3NcclxuICAgKiBAcGFyYW0gb25GYWlsdXJlXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxyXG4gICAgZXJyb3JJbmRleDogMyxcclxuICB9KVxyXG4gIGFkZE5kZWZGb3JtYXRhYmxlTGlzdGVuZXIob25TdWNjZXNzPzogRnVuY3Rpb24sIG9uRmFpbHVyZT86IEZ1bmN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdyaXRlcyBhbiBOZGVmTWVzc2FnZShhcnJheSBvZiBuZGVmIHJlY29yZHMpIHRvIGEgTkZDIHRhZy5cclxuICAgKiBAcGFyYW0gbWVzc2FnZSB7YW55W119XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgd3JpdGUobWVzc2FnZTogYW55W10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBNYWtlcyBhIE5GQyB0YWcgcmVhZCBvbmx5LiAqKldhcm5pbmcqKiB0aGlzIGlzIHBlcm1hbmVudC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBtYWtlUmVhZE9ubHkoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNoYXJlcyBhbiBOREVGIE1lc3NhZ2UoYXJyYXkgb2YgbmRlZiByZWNvcmRzKSB2aWEgcGVlci10by1wZWVyLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIEFuIGFycmF5IG9mIE5ERUYgUmVjb3Jkcy5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzaGFyZShtZXNzYWdlOiBhbnlbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wIHNoYXJpbmcgTkRFRiBkYXRhIHZpYSBwZWVyLXRvLXBlZXIuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgdW5zaGFyZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXJhc2UgYSBOREVGIHRhZ1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBlcmFzZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VuZCBhIGZpbGUgdG8gYW5vdGhlciBkZXZpY2UgdmlhIE5GQyBoYW5kb3Zlci5cclxuICAgKiBAcGFyYW0gdXJpcyBBIFVSSSBhcyBhIFN0cmluZywgb3IgYW4gYXJyYXkgb2YgVVJJcy5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBoYW5kb3Zlcih1cmlzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wIHNoYXJpbmcgTkRFRiBkYXRhIHZpYSBORkMgaGFuZG92ZXIuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RvcEhhbmRvdmVyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcGVucyB0aGUgZGV2aWNlJ3MgTkZDIHNldHRpbmdzLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNob3dTZXR0aW5ncygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgTkZDIGlzIGF2YWlsYWJsZSBhbmQgZW5hYmxlZCBvbiB0aGlzIGRldmljZS5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBlbmFibGVkKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEB7IE5GQyB9IGNsYXNzIHV0aWxpdHkgbWV0aG9kc1xyXG4gICAqIGZvciB1c2Ugd2l0aFxyXG4gICAqL1xyXG4gIC8qKlxyXG4gICAqIENvbnZlcnQgYnl0ZSBhcnJheSB0byBzdHJpbmdcclxuICAgKiBAcGFyYW0gYnl0ZXMge251bWJlcltdfVxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgYnl0ZXNUb1N0cmluZyhieXRlczogbnVtYmVyW10pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBDb252ZXJ0IHN0cmluZyB0byBieXRlIGFycmF5LlxyXG4gICAqIEBwYXJhbSBzdHIge3N0cmluZ31cclxuICAgKiBAcmV0dXJucyB7bnVtYmVyW119XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc3RyaW5nVG9CeXRlcyhzdHI6IHN0cmluZyk6IG51bWJlcltdIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQ29udmVydCBieXRlIGFycmF5IHRvIGhleCBzdHJpbmdcclxuICAgKlxyXG4gICAqIEBwYXJhbSBieXRlcyB7bnVtYmVyW119XHJcbiAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBieXRlc1RvSGV4U3RyaW5nKGJ5dGVzOiBudW1iZXJbXSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnTkZDJyxcclxuICBwbHVnaW46ICdwaG9uZWdhcC1uZmMnLFxyXG4gIHBsdWdpblJlZjogJ25kZWYnLFxyXG59KVxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFV0aWxpdHkgbWV0aG9kcyBmb3IgY3JlYXRpbmcgbmRlZiByZWNvcmRzIGZvciB0aGUgbmRlZiB0YWcgZm9ybWF0LlxyXG4gKiBNb3ZlIHJlY29yZHMgaW50byBhcnJheSBiZWZvcmUgdXNhZ2UuIFRoZW4gcGFzcyBhbiBhcnJheSB0byBtZXRob2RzIGFzIHBhcmFtZXRlcnMuXHJcbiAqIERvIG5vdCBwYXNzIGJ5dGVzIGFzIHBhcmFtZXRlcnMgZm9yIHRoZXNlIG1ldGhvZHMsIGNvbnZlcnNpb24gaXMgYnVpbHQgaW4uXHJcbiAqIEZvciB1c2FnZSB3aXRoIG5mYy53cml0ZSgpIGFuZCBuZmMuc2hhcmUoKVxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmRlZiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBUTkZfRU1QVFk6IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBUTkZfV0VMTF9LTk9XTjogbnVtYmVyO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFRORl9NSU1FX01FRElBOiBudW1iZXI7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgVE5GX0FCU09MVVRFX1VSSTogbnVtYmVyO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFRORl9FWFRFUk5BTF9UWVBFOiBudW1iZXI7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgVE5GX1VOS05PV046IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBUTkZfVU5DSEFOR0VEOiBudW1iZXI7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgVE5GX1JFU0VSVkVEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHJlY29yZCh0bmY6IG51bWJlciwgdHlwZTogbnVtYmVyW10gfCBzdHJpbmcsIGlkOiBudW1iZXJbXSB8IHN0cmluZywgcGF5bG9hZDogbnVtYmVyW10gfCBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHRleHRSZWNvcmQodGV4dDogc3RyaW5nLCBsYW5ndWFnZUNvZGU/OiBzdHJpbmcsIGlkPzogbnVtYmVyW10gfCBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHVyaVJlY29yZCh1cmk6IHN0cmluZywgaWQ/OiBudW1iZXJbXSB8IHN0cmluZyk6IE5kZWZSZWNvcmQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgYWJzb2x1dGVVcmlSZWNvcmQodXJpOiBzdHJpbmcsIHBheWxvYWQ6IG51bWJlcltdIHwgc3RyaW5nLCBpZD86IG51bWJlcltdIHwgc3RyaW5nKTogTmRlZlJlY29yZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBtaW1lTWVkaWFSZWNvcmQobWltZVR5cGU6IHN0cmluZywgcGF5bG9hZDogc3RyaW5nKTogTmRlZlJlY29yZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzbWFydFBvc3RlcihuZGVmUmVjb3JkczogYW55W10sIGlkPzogbnVtYmVyW10gfCBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGVtcHR5UmVjb3JkKCk6IE5kZWZSZWNvcmQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgYW5kcm9pZEFwcGxpY2F0aW9uUmVjb3JkKHBhY2thZ2VOYW1lOiBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGVuY29kZU1lc3NhZ2UobmRlZlJlY29yZHM6IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBkZWNvZGVNZXNzYWdlKGJ5dGVzOiBhbnkpOiBhbnkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZGVjb2RlVG5mKHRuZl9ieXRlOiBhbnkpOiBhbnkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZW5jb2RlVG5mKG1iOiBhbnksIG1lOiBhbnksIGNmOiBhbnksIHNyOiBhbnksIGlsOiBhbnksIHRuZjogYW55KTogYW55IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHRuZlRvU3RyaW5nKHRuZjogYW55KTogc3RyaW5nIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIHRleHRIZWxwZXI6IFRleHRIZWxwZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIHVyaUhlbHBlcjogVXJpSGVscGVyO1xyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ05GQycsXHJcbiAgcGx1Z2luOiAncGhvbmVnYXAtbmZjJyxcclxuICBwbHVnaW5SZWY6ICd1dGlsJyxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmZjVXRpbCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICB0b0hleChpOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdG9QcmludGFibGUoaTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGJ5dGVzVG9TdHJpbmcoaTogbnVtYmVyW10pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc3RyaW5nVG9CeXRlcyhzOiBzdHJpbmcpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBieXRlc1RvSGV4U3RyaW5nKGJ5dGVzOiBudW1iZXJbXSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBpc1R5cGUocmVjb3JkOiBOZGVmUmVjb3JkLCB0bmY6IG51bWJlciwgdHlwZTogbnVtYmVyW10gfCBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGFycmF5QnVmZmVyVG9IZXhTdHJpbmcoYnVmZmVyOiBBcnJheUJ1ZmZlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBoZXhTdHJpbmdUb0FycmF5QnVmZmVyKGhleFN0cmluZzogc3RyaW5nKTogQXJyYXlCdWZmZXIge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRIZWxwZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgZGVjb2RlUGF5bG9hZChkYXRhOiBudW1iZXJbXSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGVuY29kZVBheWxvYWQodGV4dDogc3RyaW5nLCBsYW5nOiBzdHJpbmcpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXJpSGVscGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIGRlY29kZVBheWxvYWQoZGF0YTogbnVtYmVyW10pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBlbmNvZGVQYXlsb2FkKHVyaTogc3RyaW5nKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=