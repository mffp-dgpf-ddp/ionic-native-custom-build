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
import { Observable } from 'rxjs';
/**
 * Emulation constants
 */
export var Emulation;
(function (Emulation) {
    /** mPOP, SM-L200, SM-L300, SM-S210i, SM-S220i, SM-S230i, SM-T300i/T300, SM-T400i */
    Emulation["StarPRNT"] = "StarPRNT";
    /** SM-L200, SM-L300 */
    Emulation["StarPRNTL"] = "StarPRNTL";
    /** FVP10, TSP650II, TSP700II, TSP800II */
    Emulation["StarLine"] = "StarLine";
    /** TSP100 */
    Emulation["StarGraphic"] = "StarGraphic";
    /** BSC10 */
    Emulation["EscPos"] = "EscPos";
    /** SM-S210i, SM-S220i, SM-S230i, SM-T300i/T300, SM-T400i */
    Emulation["EscPosMobile"] = "EscPosMobile";
    /** SP700 */
    Emulation["StarDotImpact"] = "StarDotImpact";
})(Emulation || (Emulation = {}));
/**
 * Encoding constants
 */
export var Encoding;
(function (Encoding) {
    /** English */
    Encoding["USASCII"] = "US-ASCII";
    /** French, German, Portuguese, Spanish */
    Encoding["Windows1252"] = "Windows-1252";
    /** Japanese */
    Encoding["ShiftJIS"] = "Shift-JIS";
    /** Russian */
    Encoding["Windows1251"] = "Windows-1251";
    /** Simplified Chinese */
    Encoding["GB2312"] = "GB2312";
    /** Traditional Chinese */
    Encoding["Big5"] = "Big5";
    /** UFT8 */
    Encoding["UTF8"] = "UTF-8";
})(Encoding || (Encoding = {}));
/**
 * CodePageType constants
 */
export var CodePageType;
(function (CodePageType) {
    CodePageType["CP737"] = "CP737";
    CodePageType["CP772"] = "CP772";
    CodePageType["CP774"] = "CP774";
    CodePageType["CP851"] = "CP851";
    CodePageType["CP852"] = "CP852";
    CodePageType["CP855"] = "CP855";
    CodePageType["CP857"] = "CP857";
    CodePageType["CP858"] = "CP858";
    CodePageType["CP860"] = "CP860";
    CodePageType["CP861"] = "CP861";
    CodePageType["CP862"] = "CP862";
    CodePageType["CP863"] = "CP863";
    CodePageType["CP864"] = "CP864";
    CodePageType["CP865"] = "CP865";
    CodePageType["CP869"] = "CP869";
    CodePageType["CP874"] = "CP874";
    CodePageType["CP928"] = "CP928";
    CodePageType["CP932"] = "CP932";
    CodePageType["CP999"] = "CP999";
    CodePageType["CP1001"] = "CP1001";
    CodePageType["CP1250"] = "CP1250";
    CodePageType["CP1251"] = "CP1251";
    CodePageType["CP1252"] = "CP1252";
    CodePageType["CP2001"] = "CP2001";
    CodePageType["CP3001"] = "CP3001";
    CodePageType["CP3002"] = "CP3002";
    CodePageType["CP3011"] = "CP3011";
    CodePageType["CP3012"] = "CP3012";
    CodePageType["CP3021"] = "CP3021";
    CodePageType["CP3041"] = "CP3041";
    CodePageType["CP3840"] = "CP3840";
    CodePageType["CP3841"] = "CP3841";
    CodePageType["CP3843"] = "CP3843";
    CodePageType["CP3845"] = "CP3845";
    CodePageType["CP3846"] = "CP3846";
    CodePageType["CP3847"] = "CP3847";
    CodePageType["CP3848"] = "CP3848";
    CodePageType["UTF8"] = "UTF8";
    CodePageType["Blank"] = "Blank";
})(CodePageType || (CodePageType = {}));
/**
 * InternationalType constants
 */
export var InternationalType;
(function (InternationalType) {
    InternationalType["UK"] = "UK";
    InternationalType["USA"] = "USA";
    InternationalType["France"] = "France";
    InternationalType["Germany"] = "Germany";
    InternationalType["Denmark"] = "Denmark";
    InternationalType["Sweden"] = "Sweden";
    InternationalType["Italy"] = "Italy";
    InternationalType["Spain"] = "Spain";
    InternationalType["Japan"] = "Japan";
    InternationalType["Norway"] = "Norway";
    InternationalType["Denmark2"] = "Denmark2";
    InternationalType["Spain2"] = "Spain2";
    InternationalType["LatinAmerica"] = "LatinAmerica";
    InternationalType["Korea"] = "Korea";
    InternationalType["Ireland"] = "Ireland";
    InternationalType["Legal"] = "Legal";
})(InternationalType || (InternationalType = {}));
/**
 * FontStyleType constants.
 */
export var FontStyleType;
(function (FontStyleType) {
    /** Font-A (12 x 24 dots) / Specify 7 x 9 font (half dots) */
    FontStyleType["A"] = "A";
    /** Font-B (9 x 24 dots) / Specify 5 x 9 font (2P-1) */
    FontStyleType["B"] = "B";
})(FontStyleType || (FontStyleType = {}));
/**
 * CutPaperAction constants.
 */
export var CutPaperAction;
(function (CutPaperAction) {
    CutPaperAction["FullCut"] = "FullCut";
    CutPaperAction["FullCutWithFeed"] = "FullCutWithFeed";
    CutPaperAction["PartialCut"] = "PartialCut";
    CutPaperAction["PartialCutWithFeed"] = "PartialCutWithFeed";
})(CutPaperAction || (CutPaperAction = {}));
/**
 * BlackMarkType constants.
 */
export var BlackMarkType;
(function (BlackMarkType) {
    BlackMarkType["Valid"] = "Valid";
    BlackMarkType["Invalid"] = "Invalid";
    BlackMarkType["ValidWithDetection"] = "ValidWithDetection";
})(BlackMarkType || (BlackMarkType = {}));
/**
 * LogoSize constants
 */
export var LogoSize;
(function (LogoSize) {
    LogoSize["Normal"] = "Normal";
    LogoSize["DoubleWidth"] = "DoubleWidth";
    LogoSize["DoubleHeight"] = "DoubleHeight";
    LogoSize["DoubleWidthDoubleHeight"] = "DoubleWidthDoubleHeight";
})(LogoSize || (LogoSize = {}));
/**
 * AlignmentPosition constants
 */
export var AlignmentPosition;
(function (AlignmentPosition) {
    AlignmentPosition["Left"] = "Left";
    AlignmentPosition["Center"] = "Center";
    AlignmentPosition["Right"] = "Right";
})(AlignmentPosition || (AlignmentPosition = {}));
/**
 * BarcodeSymbology constants
 */
export var BarcodeSymbology;
(function (BarcodeSymbology) {
    BarcodeSymbology["Code128"] = "Code128";
    BarcodeSymbology["Code39"] = "Code39";
    BarcodeSymbology["Code93"] = "Code93";
    BarcodeSymbology["ITF"] = "ITF";
    BarcodeSymbology["JAN8"] = "JAN8";
    BarcodeSymbology["JAN13"] = "JAN13";
    BarcodeSymbology["NW7"] = "NW7";
    BarcodeSymbology["UPCA"] = "UPCA";
    BarcodeSymbology["UPCE"] = "UPCE";
})(BarcodeSymbology || (BarcodeSymbology = {}));
/**
 * BarcodeWidth constants
 */
export var BarcodeWidth;
(function (BarcodeWidth) {
    BarcodeWidth["Mode1"] = "Mode1";
    BarcodeWidth["Mode2"] = "Mode2";
    BarcodeWidth["Mode3"] = "Mode3";
    BarcodeWidth["Mode4"] = "Mode4";
    BarcodeWidth["Mode5"] = "Mode5";
    BarcodeWidth["Mode6"] = "Mode6";
    BarcodeWidth["Mode7"] = "Mode7";
    BarcodeWidth["Mode8"] = "Mode8";
    BarcodeWidth["Mode9"] = "Mode9";
})(BarcodeWidth || (BarcodeWidth = {}));
/**
 * QrCodeModel constants
 */
export var QrCodeModel;
(function (QrCodeModel) {
    QrCodeModel["No1"] = "No1";
    QrCodeModel["No2"] = "No2";
})(QrCodeModel || (QrCodeModel = {}));
/**
 * QrCodeLevel constants
 */
export var QrCodeLevel;
(function (QrCodeLevel) {
    QrCodeLevel["H"] = "H";
    QrCodeLevel["L"] = "L";
    QrCodeLevel["M"] = "M";
    QrCodeLevel["Q"] = "Q";
})(QrCodeLevel || (QrCodeLevel = {}));
/**
 * BitmapConverterRotation constants
 */
export var BitmapConverterRotation;
(function (BitmapConverterRotation) {
    BitmapConverterRotation["Normal"] = "Normal";
    BitmapConverterRotation["Left90"] = "Left90";
    BitmapConverterRotation["Right90"] = "Right90";
    BitmapConverterRotation["Rotate180"] = "Rotate180";
})(BitmapConverterRotation || (BitmapConverterRotation = {}));
var StarPRNTOriginal = /** @class */ (function (_super) {
    __extends(StarPRNTOriginal, _super);
    function StarPRNTOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for Emulation
         */
        _this.Emulation = {
            StarPRNT: 'StarPRNT',
            StarPRNTL: 'StarPRNTL',
            StarLine: 'StarLine',
            StarGraphic: 'StarGraphic',
            EscPos: 'EscPos',
            EscPosMobile: 'EscPosMobile',
            StarDotImpact: 'StarDotImpact',
        };
        /**
         * Constant for possible Encoding
         */
        _this.Encoding = {
            USASCII: 'US-ASCII',
            Windows1252: 'Windows-1252',
            ShiftJIS: 'Shift-JIS',
            Windows1251: 'Windows-1251',
            GB2312: 'GB2312',
            Big5: 'Big5',
            UTF8: 'UTF-8',
        };
        /**
         * CodePageType constants
         */
        _this.CodePageType = {
            CP737: 'CP737',
            CP772: 'CP772',
            CP774: 'CP774',
            CP851: 'CP851',
            CP852: 'CP852',
            CP855: 'CP855',
            CP857: 'CP857',
            CP858: 'CP858',
            CP860: 'CP860',
            CP861: 'CP861',
            CP862: 'CP862',
            CP863: 'CP863',
            CP864: 'CP864',
            CP865: 'CP865',
            CP869: 'CP869',
            CP874: 'CP874',
            CP928: 'CP928',
            CP932: 'CP932',
            CP999: 'CP999',
            CP1001: 'CP1001',
            CP1250: 'CP1250',
            CP1251: 'CP1251',
            CP1252: 'CP1252',
            CP2001: 'CP2001',
            CP3001: 'CP3001',
            CP3002: 'CP3002',
            CP3011: 'CP3011',
            CP3012: 'CP3012',
            CP3021: 'CP3021',
            CP3041: 'CP3041',
            CP3840: 'CP3840',
            CP3841: 'CP3841',
            CP3843: 'CP3843',
            CP3845: 'CP3845',
            CP3846: 'CP3846',
            CP3847: 'CP3847',
            CP3848: 'CP3848',
            UTF8: 'UTF8',
            Blank: 'Blank',
        };
        /**
         * Constant for possible InternationalType
         */
        _this.InternationalType = {
            UK: 'UK',
            USA: 'USA',
            France: 'France',
            Germany: 'Germany',
            Denmark: 'Denmark',
            Sweden: 'Sweden',
            Italy: 'Italy',
            Spain: 'Spain',
            Japan: 'Japan',
            Norway: 'Norway',
            Denmark2: 'Denmark2',
            Spain2: 'Spain2',
            LatinAmerica: 'LatinAmerica',
            Korea: 'Korea',
            Ireland: 'Ireland',
            Legal: 'Legal',
        };
        /**
         * Constant for possible FontStyleType
         */
        _this.FontStyleType = {
            /** Font-A (12 x 24 dots) / Specify 7 x 9 font (half dots) */
            A: 'A',
            /** Font-B (9 x 24 dots) / Specify 5 x 9 font (2P-1) */
            B: 'B',
        };
        /**
         * Constant for possible CutPaperAction
         */
        _this.CutPaperAction = {
            FullCut: 'FullCut',
            FullCutWithFeed: 'FullCutWithFeed',
            PartialCut: 'PartialCut',
            PartialCutWithFeed: 'PartialCutWithFeed',
        };
        /**
         * Constant for possible BlackMarkType
         */
        _this.BlackMarkType = {
            Valid: 'Valid',
            Invalid: 'Invalid',
            ValidWithDetection: 'ValidWithDetection',
        };
        /**
         * Constant for possible AlignmentPosition
         */
        _this.AlignmentPosition = {
            Left: 'Left',
            Center: 'Center',
            Right: 'Right',
        };
        /**
         * Constant for possible LogoSize
         */
        _this.LogoSize = {
            Normal: 'Normal',
            DoubleWidth: 'DoubleWidth',
            DoubleHeight: 'DoubleHeight',
            DoubleWidthDoubleHeight: 'DoubleWidthDoubleHeight',
        };
        /**
         * Constant for possible BarcodeSymbology
         */
        _this.BarcodeSymbology = {
            Code128: 'Code128',
            Code39: 'Code39',
            Code93: 'Code93',
            ITF: 'ITF',
            JAN8: 'JAN8',
            JAN13: 'JAN13',
            NW7: 'NW7',
            UPCA: 'UPCA',
            UPCE: 'UPCE',
        };
        /**
         * Constant for possible BarcodeWidth
         */
        _this.BarcodeWidth = {
            Mode1: 'Mode1',
            Mode2: 'Mode2',
            Mode3: 'Mode3',
            Mode4: 'Mode4',
            Mode5: 'Mode5',
            Mode6: 'Mode6',
            Mode7: 'Mode7',
            Mode8: 'Mode8',
            Mode9: 'Mode9',
        };
        /**
         * Constant for possible QrCodeModel
         */
        _this.QrCodeModel = {
            No1: 'No1',
            No2: 'No2',
        };
        /**
         * Constant for possible QrCodeLevel
         */
        _this.QrCodeLevel = {
            H: 'H',
            L: 'L',
            M: 'M',
            Q: 'Q',
        };
        /**
         * Constant for possible BitmapConverterRotation
         */
        _this.BitmapConverterRotation = {
            Normal: 'Normal',
            Left90: 'Left90',
            Right90: 'Right90',
            Rotate180: 'Rotate180',
        };
        return _this;
    }
    StarPRNTOriginal.prototype.portDiscovery = function (type) { return cordova(this, "portDiscovery", {}, arguments); };
    StarPRNTOriginal.prototype.checkStatus = function (port, emulation) { return cordova(this, "checkStatus", {}, arguments); };
    StarPRNTOriginal.prototype.printRawText = function (port, emulation, printObj) { return cordova(this, "printRawText", {}, arguments); };
    StarPRNTOriginal.prototype.printRasterReceipt = function (port, emulation, rasterObj) { return cordova(this, "printRasterReceipt", {}, arguments); };
    StarPRNTOriginal.prototype.printImage = function (port, emulation, imageObj) { return cordova(this, "printImage", {}, arguments); };
    StarPRNTOriginal.prototype.openCashDrawer = function (port, emulation) { return cordova(this, "openCashDrawer", {}, arguments); };
    StarPRNTOriginal.prototype.print = function (port, emulation, commandsArray) { return cordova(this, "print", {}, arguments); };
    StarPRNTOriginal.prototype.connect = function (port, emulation, hasBarcodeReader) { return cordova(this, "connect", { "observable": true, "callbackStyle": "node" }, arguments); };
    StarPRNTOriginal.prototype.getStatus = function () { return cordova(this, "getStatus", { "eventObservable": true, "event": "starPrntData" }, arguments); };
    StarPRNTOriginal.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    StarPRNTOriginal.pluginName = "StarPRNT";
    StarPRNTOriginal.plugin = "cordova-plugin-starprnt";
    StarPRNTOriginal.pluginRef = "starprnt";
    StarPRNTOriginal.repo = "https://github.com/auctifera-josed/starprnt";
    StarPRNTOriginal.platforms = ["Android", "iOS"];
    return StarPRNTOriginal;
}(IonicNativePlugin));
var StarPRNT = new StarPRNTOriginal();
export { StarPRNT };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0YXItcHJudC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBa1psQzs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLFNBZVg7QUFmRCxXQUFZLFNBQVM7SUFDbkIsb0ZBQW9GO0lBQ3BGLGtDQUFxQixDQUFBO0lBQ3JCLHVCQUF1QjtJQUN2QixvQ0FBdUIsQ0FBQTtJQUN2QiwwQ0FBMEM7SUFDMUMsa0NBQXFCLENBQUE7SUFDckIsYUFBYTtJQUNiLHdDQUEyQixDQUFBO0lBQzNCLFlBQVk7SUFDWiw4QkFBaUIsQ0FBQTtJQUNqQiw0REFBNEQ7SUFDNUQsMENBQTZCLENBQUE7SUFDN0IsWUFBWTtJQUNaLDRDQUErQixDQUFBO0FBQ2pDLENBQUMsRUFmVyxTQUFTLEtBQVQsU0FBUyxRQWVwQjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksUUFlWDtBQWZELFdBQVksUUFBUTtJQUNsQixjQUFjO0lBQ2QsZ0NBQW9CLENBQUE7SUFDcEIsMENBQTBDO0lBQzFDLHdDQUE0QixDQUFBO0lBQzVCLGVBQWU7SUFDZixrQ0FBc0IsQ0FBQTtJQUN0QixjQUFjO0lBQ2Qsd0NBQTRCLENBQUE7SUFDNUIseUJBQXlCO0lBQ3pCLDZCQUFpQixDQUFBO0lBQ2pCLDBCQUEwQjtJQUMxQix5QkFBYSxDQUFBO0lBQ2IsV0FBVztJQUNYLDBCQUFjLENBQUE7QUFDaEIsQ0FBQyxFQWZXLFFBQVEsS0FBUixRQUFRLFFBZW5CO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxZQXdDWDtBQXhDRCxXQUFZLFlBQVk7SUFDdEIsK0JBQWUsQ0FBQTtJQUNmLCtCQUFlLENB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RztZQUNaLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1NBQ1AsQ0FBQztRQUVGOztXQUVHO1FBQ0gsNkJBQXVCLEdBQUc7WUFDeEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsU0FBUyxFQUFFLFdBQVc7U0FDdkIsQ0FBQzs7O0lBUUYsZ0NBQWEsYUFBQyxJQUFZO0lBVzFCLDhCQUFXLGFBQUMsSUFBWSxFQUFFLFNBQWlCO0lBWTNDLCtCQUFZLGFBQUMsSUFBWSxFQUFFLFNBQWlCLEVBQUUsUUFBa0I7SUFZaEUscUNBQWtCLGFBQUMsSUFBWSxFQUFFLFNBQWlCLEVBQUUsU0FBb0I7SUFZeEUsNkJBQVUsYUFBQyxJQUFZLEVBQUUsU0FBaUIsRUFBRSxRQUFrQjtJQVc5RCxpQ0FBYyxhQUFDLElBQVksRUFBRSxTQUFpQjtJQVk5Qyx3QkFBSyxhQUFDLElBQVksRUFBRSxTQUFpQixFQUFFLGFBQTRCO0lBY25FLDBCQUFPLGFBQUMsSUFBWSxFQUFFLFNBQWlCLEVBQUUsZ0JBQXlCO0lBWWxFLDRCQUFTO0lBVVQsNkJBQVU7Ozs7OzttQkFuOEJaO0VBMm9COEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByaW50ZXIge1xyXG4gIC8qKlxyXG4gICAqIFByaW50ZXIgbW9kZWwgbmFtZSBhbmQgbW9kZWwgbnVtYmVyXHJcbiAgICovXHJcbiAgbW9kZWxOYW1lPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBQcmludGVyIE1hYyBBZGRyZXNzXHJcbiAgICovXHJcbiAgbWFjQWRkcmVzcz86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogUHJpbnRlciBwb3J0IG5hbWUgdXNlZCB0byBjcmVhdGUgYSBuZXcgcG9ydCBpbnN0YW5jZSBvZiBTTVBvcnQgb3IgU3RhcklPRXh0TWFuYWdlclxyXG4gICAqL1xyXG4gIHBvcnROYW1lPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFVTQiBTZXJpYWwgTnVtYmVyIChVU0IgUHJpbnRlcnMgT25seSlcclxuICAgKi9cclxuICBVU0JTZXJpYWxOdW1iZXI/OiBzdHJpbmc7XHJcbn1cclxuLyoqXHJcbiAqIEFycmF5IG9mIFByaW50ZXIgb2JqZWN0cyByZXR1cm5lZCBieSB0aGUgcG9ydERpc2NvdmVyeSgpIGZ1bmN0aW9uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFByaW50ZXJzIGV4dGVuZHMgQXJyYXk8UHJpbnRlcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRlclN0YXR1cyB7XHJcbiAgLyoqXHJcbiAgICogUHJpbnRlciBPbmxpbmUvT2ZmbGluZSBzdGF0dXNcclxuICAgKi9cclxuICBvZmZsaW5lPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogIFByaW50ZXIgbW9kZWwgbmFtZSBhbmQgbW9kZWwgbnVtYmVyXHJcbiAgICovXHJcbiAgTW9kZWxOYW1lPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBQcmludGVyIGNvdmVyIHN0YXR1c1xyXG4gICAqL1xyXG4gIGNvdmVyT3Blbj86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFByaW50ZXIgUGFwZXIgQ3V0dGVyIHN0YXR1c1xyXG4gICAqL1xyXG4gIGN1dHRlckVycm9yPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJpbnRlciBQYXBlciBzdGF0dXNcclxuICAgKi9cclxuICByZWNlaXB0UGFwZXJFbXB0eT86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFByaW50ZXIgRmlybXdhcmUgaW5mb3JtYXRpb25cclxuICAgKi9cclxuICBGaXJtd2FyZVZlcnNpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRPYmoge1xyXG4gIC8qKlxyXG4gICAqIHN0cmluZyBjb250YWluaW5nIHRoZSB0ZXh0IHRvIHByaW50LCBFeGFtcGxlOiBcIlN0YXIgQ2xvdGhpbmcgQm91dGlxdWVcXG4xMjMgU3RhciBSb2FkXFxuQ2l0eSwgU3RhdGUgMTIzNDVcXG5cXG5cIlxyXG4gICAqL1xyXG4gIHRleHQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogIFNlbmRzIGEgUGFydGlhbEN1dFdpdGhGZWVkIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIsIGRlZmF1bHRzIHRvIHRydWVcclxuICAgKi9cclxuICBjdXRSZWNlaXB0PzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogc2VuZHMgYSBhcHBlbmRQZXJpcGhlcmFsIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIgZm9yIGNoYW5uZWxzIE5vMSBhbmQgTm8yIC0gRGVmYXVsdHMgdG8gdHJ1ZVxyXG4gICAqL1xyXG4gIG9wZW5DYXNoRHJhd2VyPzogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFJhc3Rlck9iaiBleHRlbmRzIFByaW50T2JqIHtcclxuICAvKipcclxuICAgKiBGb250IHNpemUgbnVtYmVyLCBkZWZhdWx0cyB0byAyNVxyXG4gICAqL1xyXG4gIGZvbnRTaXplPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBQYXBlciB3aWR0aCAoVW5pdHM6IERvdHMpLiAyIGluY2hlczogMzg0LCAzIGluY2hlczogNTc2LCA0IGluY2hlczogODMyLCBFU0NQb3MgMyBpbmNoZXM6IDUxMiwgRG90IDMgaW5jaGVzOiAyMTAuIERlZmF1bHRzIHRvIDU3NlxyXG4gICAqL1xyXG4gIHBhcGVyV2lkdGg/OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZU9iaiB7XHJcbiAgLyoqXHJcbiAgICogSW1hZ2UgVVJJIHRvIHByaW50LCB0aGlzIGNhbiBiZSBvYnRhaW5lZCB2aWEgdGhlIGNhbWVyYSBvciBwaG90byBsaWJyYXJ5IG9yIGFzIGEgc3RhdGljIHJlc291cmNlIHNhdmVkIG9uIHRoZSBwaG9uZSBtZW1vcnlcclxuICAgKi9cclxuICB1cmk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogSW1hZ2Ugd2lkdGggKFVuaXRzOiBEb3RzKSBkZWZhdWx0cyB0byA1NzZcclxuICAgKi9cclxuICBwYXBlcldpZHRoPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiAgU2VuZHMgYSBQYXJ0aWFsQ3V0V2l0aEZlZWQgY29tbWFuZCB0byB0aGUgcHJpbnRlciwgZGVmYXVsdHMgdG8gdHJ1ZVxyXG4gICAqL1xyXG4gIGN1dFJlY2VpcHQ/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBzZW5kcyBhIGFwcGVuZFBlcmlwaGVyYWwgY29tbWFuZCB0byB0aGUgcHJpbnRlciBmb3IgY2hhbm5lbHMgTm8xIGFuZCBObzIgLSBEZWZhdWx0cyB0byB0cnVlXHJcbiAgICovXHJcbiAgb3BlbkNhc2hEcmF3ZXI/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRDb21tYW5kIHtcclxuICAvKipcclxuICAgKiBDaGFyYWN0aGVyIGVuY29kaW5nIGlzIHVzZWQgdG8gZ2V0Qnl0ZSBkYXRhIGZyb20gYWxsIHN1YnNlcXVlbnQgY29tbWFuZHMuIERlZmF1bHQgJ1VTLUFTQ0lJJ1xyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgRGVmaW5lZCBpbiBTdGFyUFJOVC5FbmNvZGluZyBvciB0aGUgRW5jb2RpbmcgZW51bS5cclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kRW5jb2Rpbmc6J1VTLUFTQ0lJJ31cclxuICAgKi9cclxuICBhcHBlbmRFbmNvZGluZz86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0IGNvbW1hbmQgb2YgdGhlIGNvZGUgcGFnZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kcyBwcm9wZXJ0eS5cclxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIERlZmluZWQgaW4gU3RhclBSTlQuQ29kZVBhZ2VUeXBlIG9yIHRoZSBDb2RlUGFnZVR5cGUgZW51bS5cclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQ29kZVBhZ2U6J0NQODU4J31cclxuICAgKi9cclxuICBhcHBlbmRDb2RlUGFnZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSAoVGV4dCkgaXMgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kOlwiU3RhciBDbG90aGluZyBCb3V0aXF1ZVxcbjEyMyBTdGFyIFJvYWRcXG5DaXR5LCBTdGF0ZSAxMjM0NVxcblxcblwifVxyXG4gICAqL1xyXG4gIGFwcGVuZD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSAoVGV4dCkgaXMgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kUmF3OlwiU3RhciBDbG90aGluZyBCb3V0aXF1ZVxcbjEyMyBTdGFyIFJvYWRcXG5DaXR5LCBTdGF0ZSAxMjM0NVxcblxcblwifVxyXG4gICAqL1xyXG4gIGFwcGVuZFJhdz86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSAoQ29tbWFuZCkgaXMgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBUYWtlcyBhbiBhcnJheSBvZiBieXRlcy5cclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQnl0ZXM6WzB4NDgsIDB4NjUsIDB4NmMsIDB4NmMsIDB4NmYsIDB4MjAsIDB4NTcsIDB4NmYsIDB4NzIsIDB4NmMsIDB4NjQsIDB4MmVdfVxyXG4gICAqL1xyXG4gIGFwcGVuZEJ5dGVzPzogbnVtYmVyW107XHJcblxyXG4gIC8qKlxyXG4gICAqIERhdGEgKENvbW1hbmQpIGlzIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gVGFrZXMgYW4gYXJyYXkgb2YgYnl0ZXMuXHJcbiAgICogRXhhbXBsZToge2FwcGVuZFJhd0J5dGVzOlsweDQ4LCAweDY1LCAweDZjLCAweDZjLCAweDZmLCAweDIwLCAweDU3LCAweDZmLCAweDcyLCAweDZjLCAweDY0LCAweDJlXX1cclxuICAgKi9cclxuICBhcHBlbmRSYXdCeXRlcz86IG51bWJlcltdO1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgY29tbWFuZCBvZiB0aGUgY2hhcmFjdGVyIHNwYWNlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBDaGFyYWN0ZXIgU3BhY3MgKFVuaXQ6IERvdHMpIEV4YW1wbGU6IDRcclxuICAgKi9cclxuICBhcHBlbmRDaGFyYWN0ZXJTcGFjZT86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBlbXBoYXNpcyBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kRW1waGFzaXM6XCJTQUxFXFxuXCJ9XHJcbiAgICovXHJcbiAgYXBwZW5kRW1waGFzaXM/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqICBFbmFibGUgZW1waGFzaXMgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2VuYWJsZUVtcGhhc2lzOnRydWV9XHJcbiAgICovXHJcbiAgZW5hYmxlRW1waGFzaXM/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiAgU2VsZWN0IGNvbW1hbmQgb2YgdGhlIGludmVydCBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kSW52ZXJ0OlwiUmVmdW5kcyBhbmQgRXhjaGFuZ2VzXFxuXCJ9XHJcbiAgICovXHJcbiAgYXBwZW5kSW52ZXJ0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqICBFbmFibGUgaW52ZXJ0IG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHtlbmFibGVJbnZlcnQ6dHJ1ZX1cclxuICAgKi9cclxuICBlbmFibGVJbnZlcnQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqICBTZWxlY3QgY29tbWFuZCBvZiB0aGUgdW5kZXIgbGluZSBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kVW5kZXJsaW5lOlwiMzAgZGF5c1wifVxyXG4gICAqL1xyXG4gIGFwcGVuZFVuZGVybGluZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiAgRW5hYmxlIHVuZGVyIGxpbmUgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2VuYWJsZVVuZGVybGluZTp0cnVlfVxyXG4gICAqL1xyXG4gIGVuYWJsZVVuZGVybGluZT86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBpbnRlcm5hdGlvbmFsIGNoYXJhY3RlciBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgRGVmaW5lZCBpbiBTdGFyUFJOVC5JbnRlcm5hdGlvbmFsVHlwZSBvciB0aGUgSW50ZXJuYXRpb25hbFR5cGUgZW51bS5cclxuICAgKiAnVUsnIHwgJ1VTQScgfCAnRnJhbmNlJyB8ICdHZXJtYW55JyB8ICdEZW5tYXJrJyB8ICdTd2VkZW4nIHwgJ0l0YWx5JyB8ICdTcGFpbicgfCAnSmFwYW4nIHwgJ05vcndheScgfCAnRGVubWFyazInIHwgJ1NwYWluMicgfCAnTGF0aW5BbWVyaWNhJyB8ICdLb3JlYScgfCAnSXJlbGFuZCcgfCAnTGVnYWwnXHJcbiAgICogRXhhbXBsZSB7YXBwZW5kSW50ZXJuYXRpb25hbDpJbnRlcm5hdGlvbmFsVHlwZS5VS31cclxuICAgKi9cclxuICBhcHBlbmRJbnRlcm5hdGlvbmFsPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBMaW5lIGZlZWQgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gUGFwZXIgZmVlZCB1bml0cyAoVW5pdHM6IExpbmVzKSBFeGFtcGxlOiAyXHJcbiAgICovXHJcbiAgYXBwZW5kTGluZUZlZWQ/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFVuaXQgZmVlZCBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBQYXBlciBmZWVkIHVuaXRzIChVbml0czogRG90cykgRXhhbXBsZTogNjRcclxuICAgKi9cclxuICBhcHBlbmRVbml0RmVlZD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGNvbW1hbmQgb2YgdGhlIGxpbmUgc3BhY2UgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIExpbmUgc3BhY2VzIChVbml0czogRG90cykgRXhhbXBsZTogMzJcclxuICAgKi9cclxuICBhcHBlbmRMaW5lU3BhY2U/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBmb250IHN0eWxlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5Gb250U3R5bGVUeXBlIG9yIHRoZSBGb250U3R5bGVUeXBlIGVudW0uICdBJyB8ICdCJ1xyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRGb250U3R5bGU6Rm9udFN0eWxlVHlwZS5BfVxyXG4gICAqL1xyXG4gIGFwcGVuZEZvbnRTdHlsZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogUGFwZXIgY3V0IGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkN1dFBhcGVyQWN0aW9uIG9yIHRoZSBDdXRQYXBlckFjdGlvbiBlbnVtLiAnRnVsbEN1dCcgfCAnRnVsbEN1dFdpdGhGZWVkJyB8ICdQYXJ0aWFsQ3V0JyB8ICdQYXJ0aWFsQ3V0V2l0aEZlZWQnXHJcbiAgICogRXhhbXBsZToge2FwcGVuZEN1dFBhcGVyOkN1dFBhcGVyQWN0aW9uLlBhcnRpYWxDdXRXaXRoRmVlZH1cclxuICAgKi9cclxuICBhcHBlbmRDdXRQYXBlcj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQmxhY2sgbWFyayBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5CbGFja01hcmtUeXBlIG9yIHRoZSBCbGFja01hcmtUeXBlIGVudW0uICdWYWxpZCcgfCAnSW52YWxpZCcgfCAnVmFsaWRXaXRoRGV0ZWN0aW9uJ1xyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCbGFja01hcms6IEJsYWNrTWFya1R5cGUuVmFsaWR9XHJcbiAgICovXHJcbiAgYXBwZW5kQmxhY2tNYXJrPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBYnNvbHV0ZSBwb3NpdGlvbiBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiAoVW5pdDogRG90cykuIFNlbmQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgZGF0YSBwcm9wZXJ0eSB0byBhcHBlbmQgYWJzb2x1dGUgcG9zaXRpb24ganVzdCB0byB0aGF0IHN0cmluZ1xyXG4gICAqIEV4YW1wbGUxOiBBcHBlbmQgZGF0YSB3aXRoIEFic29sdXRlIHBvc2l0aW9uIHthcHBlbmRBYnNvbHV0ZVBvc2l0aW9uOjQwLCBkYXRhOiBcIlRleHQgd2l0aCBhYnNvbHV0ZSBwb3NpdGlvblwifVxyXG4gICAqIEV4YW1wbGUyOiBBcHBlbmQgYWJzb2x1dGUgcG9zaXRpb24gdG8gc3Vic2VxdWVudCBjb21tYW5kczoge2FwcGVuZEFic29sdXRlUG9zaXRpb246NDB9XHJcbiAgICovXHJcbiAgYXBwZW5kQWJzb2x1dGVQb3NpdGlvbj86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQWxpZ25tZW50IGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFNlbmQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgZGF0YSBwcm9wZXJ0eSB0byBhcHBlbmQgYWxpZ25tZW50IHBvc2l0aW9uIGp1c3QgdG8gdGhhdCBzdHJpbmdcclxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQWxpZ25tZW50UG9zaXRpb24gb3IgdGhlIEFsaWdubWVudFBvc2l0aW9uIGVudW0uICdMZWZ0JyB8ICdDZW50ZXInIHwgJ1JpZ2h0Jy5cclxuICAgKiBFeGFtcGxlMSBBcHBlbmQgZGF0YSB3aXRoIEFsaWdubWVudCBwb3NpdGlvbjoge2FwcGVuZEFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXIsIGRhdGE6IFwiVGV4dCB3aXRoIGNlbnRlcmVkIHBvc2l0aW9uXCJ9XHJcbiAgICogRXhhbXBsZTIgQXBwZW5kIGFic29sdXRlIHBvc2l0aW9uIHRvIHN1YnNlcXVlbnQgY29tbWFuZHM6IHthcHBlbmRBbGlnbm1lbnQ6QWxpZ25tZW50UG9zaXRpb24uQ2VudGVyfVxyXG4gICAqL1xyXG4gIGFwcGVuZEFsaWdubWVudD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogSG9yaXpvbnRhbCB0YWIgc2V0L2NsZWFyIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIChPbmx5IHdvcmtzIGZvciBjZXJ0YWluIHByaW50ZXIgbW9kZWxzLCBjaGVjayB0aGUgc3RhclNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxzKVxyXG4gICAqIEFycmF5IG9mIGhvcml6b250YWwgdGFiIHBvc2l0aW9ucyAoVW5pdHM6IEFOSyBjaGFyYWN0ZXIgcGl0Y2gpLiBTcGVjaWZ5aW5nIGVtcHR5IGFycmF5IGRlbGV0ZXMgYWxsIGN1cnJlbnRseSBzZXQgaG9yaXpvbnRhbCB0YWIgcG9zaXRpb25zLlxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRIb3Jpem9udGFsVGFiUG9zaXRpb246WzE1LCAzNV19XHJcbiAgICogRGVsZXRlIHBvc2l0aW9ucyBFeGFtcGxlOiB7YXBwZW5kSG9yaXpvbnRhbFRhYlBvc2l0aW9uOltdfVxyXG4gICAqL1xyXG4gIGFwcGVuZEhvcml6b250YWxUYWJQb3NpdGlvbj86IG51bWJlcltdO1xyXG5cclxuICAvKipcclxuICAgKiBQcmludCBjb21tYW5kIG9mIHRoZSBsb2dvIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBUaGUgbG9nbyBoYXMgdG8gYmUgdXBsb2FkZWQgdG8gdGhlIHByaW50ZXIgdXNpbmcgdGhlIFN0YXIgUHJpbnQgdXRpbGl0eS5cclxuICAgKiBTZW5kIGluIGNvbmp1Y3Rpb24gd2l0aCB0aGUgbG9nb1NpemUgcHJvcGVydHkgdG8gc2V0IHRoZSBsb2dvIHNpemVcclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kTG9nbzoxfVxyXG4gICAqIEV4YW1wbGUgd2l0aCBMb2dvU2l6ZToge2FwcGVuZExvZ286MSwgbG9nb1NpemU6TG9nb1NpemUuRG91YmxlV2lkdGhEb3VibGVIZWlnaHR9XHJcbiAgICovXHJcbiAgYXBwZW5kTG9nbz86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRMb2dvIGNvbW1hbmQuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkxvZ29TaXplIG9yIHRoZSBMb2dvU2l6ZSBlbnVtLiAnTm9ybWFsJyB8ICdEb3VibGVXaWR0aCcgfCAnRG91YmxlSGVpZ2h0JyB8ICdEb3VibGVXaWR0aERvdWJsZUhlaWdodCc7XHJcbiAgICogRXhhbXBsZToge2FwcGVuZExvZ286MSwgbG9nb1NpemU6TG9nb1NpemUuRG91YmxlV2lkdGhEb3VibGVIZWlnaHR9XHJcbiAgICovXHJcbiAgbG9nb1NpemU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByaW50IGNvbW1hbmQgb2YgdGhlIGJhcmNvZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXHJcbiAgICogQWRkaXRpb25hbCBQcm9wZXJ0aWVzOiBCYXJjb2RlU3ltYm9sb2d5LCBCYXJjb2RlV2lkdGgsIGhlaWdodCwgaHJpLCBhYnNvbHV0ZVBvc2l0aW9uLCBhbGlnbm1lbnQuXHJcbiAgICogRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6XCJ7QlN0YXJcIiwgQmFyY29kZVN5bWJvbG9neTpCYXJjb2RlU3ltYm9sb2d5LkNvZGUxMjgsIEJhcmNvZGVXaWR0aDpCYXJjb2RlV2lkdGguTW9kZTIsIGhlaWdodDo0MCwgaHJpOnRydWUgfVxyXG4gICAqIEV4YW1wbGUgd2l0aCBhYnNvbHV0ZVBvc2l0aW9uOiB7YXBwZW5kQmFyY29kZTpcIntCU3RhclwiLCBCYXJjb2RlU3ltYm9sb2d5OkJhcmNvZGVTeW1ib2xvZ3kuQ29kZTEyOCwgQmFyY29kZVdpZHRoOkJhcmNvZGVXaWR0aC5Nb2RlMiwgaGVpZ2h0OjQwLCBocmk6dHJ1ZSwgYWJzb2x1dGVQb3NpdGlvbjo0MCB9XHJcbiAgICogRXhhbXBsZSB3aXRoIGFsaWdubWVudDp7YXBwZW5kQmFyY29kZTpcIntCU3RhclwiLCBCYXJjb2RlU3ltYm9sb2d5OkJhcmNvZGVTeW1ib2xvZ3kuQ29kZTEyOCwgQmFyY29kZVdpZHRoOkJhcmNvZGVXaWR0aC5Nb2RlMiwgaGVpZ2h0OjQwLCBocmk6dHJ1ZSwgYWxpZ25tZW50OmFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXIgfVxyXG4gICAqL1xyXG4gIGFwcGVuZEJhcmNvZGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kLlxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5CYXJjb2RlU3ltYm9sb2d5IG9yIHRoZSBCYXJjb2RlU3ltYm9sb2d5IGVudW0uXHJcbiAgICogJ0NvZGUxMjgnIHwgJ0NvZGUzOScgfCAnQ29kZTkzJyB8ICdJVEYnIHwgJ0pBTjgnIHwgJ0pBTjEzJyB8ICdOVzcnIHwgJ1VQQ0EnIHwgJ1VQQ0UnIHxcclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgQmFyY29kZVN5bWJvbG9neTpCYXJjb2RlU3ltYm9sb2d5LkNvZGUxMjh9XHJcbiAgICovXHJcbiAgQmFyY29kZVN5bWJvbG9neT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCYXJjb2RlIGNvbW1hbmQuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkJhcmNvZGVXaWR0aCBvciB0aGUgQmFyY29kZVdpZHRoIGVudW0uXHJcbiAgICogTW9kZTEgfCBNb2RlMiB8IE1vZGUzIHwgTW9kZTQgfCBNb2RlNSB8IE1vZGU2IHwgTW9kZTcgfCBNb2RlOCB8IE1vZGU5XHJcbiAgICogRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6J3tCU3RhcicsIEJhcmNvZGVXaWR0aDpCYXJjb2RlV2lkdGguTW9kZTJ9XHJcbiAgICovXHJcbiAgQmFyY29kZVdpZHRoPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZC5cclxuICAgKiBVbmRlci1iYXIgY2hhcmFjdGVycy4gdHJ1ZSA9IFZhbGlkLCBmYWxzZSA9IEludmFsaWRcclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgaHJpOnRydWV9XHJcbiAgICovXHJcbiAgaHJpPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCYXJjb2RlIGNvbW1hbmQgb3IgdGhlIGFwcGVuZE11bHRpcGxlIGNvbW1hbmQgKFVuaXRzOkRvdHMpXHJcbiAgICogYXBwZW5kQmFyY29kZSBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgaGVpZ2h0OjQwfVxyXG4gICAqIGFwcGVuZE11bHRpcGxlOiB7YXBwZW5kTXVsdGlwbGU6J3RleHQgdG8gcHJpbnQnLCBoZWlnaHQ6NDB9XHJcbiAgICovXHJcbiAgaGVpZ2h0PzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJpdG1hcCBjb21tYW5kIG9yIHRoZSBhcHBlbmRNdWx0aXBsZSBjb21tYW5kIChVbml0czpEb3RzKVxyXG4gICAqIGFwcGVuZEJpdG1hcCBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgd2lkdGg6NTc2fVxyXG4gICAqIGFwcGVuZE11bHRpcGxlOiB7YXBwZW5kTXVsdGlwbGU6J3RleHQgdG8gcHJpbnQnLCB3aWR0aDo0MH1cclxuICAgKi9cclxuICB3aWR0aD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZCwgdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZCwgb3IgdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kIChVbml0czpEb3RzKVxyXG4gICAqIGFwcGVuZEJpdG1hcCBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgYWJzb2x1dGVQb3NpdGlvbjo0MH0uXHJcbiAgICogYXBwZW5kQmFyY29kZSBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgYWJzb2x1dGVQb3NpdGlvbjo0MH0uXHJcbiAgICogYXBwZW5kUXJDb2RlIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIGFic29sdXRlUG9zaXRpb246NDB9LlxyXG4gICAqL1xyXG4gIGFic29sdXRlUG9zaXRpb24/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQsIHRoZSBhcHBlbmRCYXJjb2RlIGNvbW1hbmQsIG9yIHRoZSBhcHBlbmRRckNvZGUgY29tbWFuZCAoVW5pdHM6RG90cylcclxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQWxpZ25tZW50UG9zaXRpb24gb3IgdGhlIEFsaWdubWVudFBvc2l0aW9uIGVudW0uICdMZWZ0JyB8ICdDZW50ZXInIHwgJ1JpZ2h0Jy5cclxuICAgKiBhcHBlbmRCaXRtYXAgRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIGFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXJ9LlxyXG4gICAqIGFwcGVuZEJhcmNvZGUgRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6J3tCU3RhcicsIGFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXJ9LlxyXG4gICAqIGFwcGVuZFFyQ29kZSBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOid7QlN0YXInLCBhbGlnbm1lbnQ6QWxpZ25tZW50UG9zaXRpb24uQ2VudGVyfS5cclxuICAgKi9cclxuICBhbGlnbm1lbnQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBtdWx0aXBsZSBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllczogd2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyXHJcbiAgICogRXhhbXBsZToge2FwcGVuZE11bHRpcGxlOlwiICAgJDE1Ni45NVxcblwiLCB3aWR0aDoyLCBoZWlnaHQ6Mn0uXHJcbiAgICovXHJcbiAgYXBwZW5kTXVsdGlwbGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVuYWJsZSBtdWx0aXBsZSBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllczogd2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyXHJcbiAgICogRXhhbXBsZToge2VuYWJsZU11bHRpcGxlOnRydWUsIHdpZHRoOjIsIGhlaWdodDoyfVxyXG4gICAqIERpc2FibGUgRXhhbXBsZToge2VuYWJsZU11bHRpcGxlOmZhbHNlfVxyXG4gICAqL1xyXG4gIGVuYWJsZU11bHRpcGxlPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJpbnQgY29tbWFuZCBvZiB0aGUgUVIgY29kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cclxuICAgKiBBZGRpdGlvbmFsIFByb3BlcnRpZXM6IFFyQ29kZU1vZGVsLCBRckNvZGVMZXZlbCwgY2VsbCwgYWJzb2x1dGVQb3NpdGlvbiwgYWxpZ25tZW50LlxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6XCJ7QlN0YXJcIiwgUXJDb2RlTW9kZWw6XCJObzJcIiwgUXJDb2RlTGV2ZWw6XCJMXCIsIGNlbGw6IDh9LlxyXG4gICAqIEV4YW1wbGUgd2l0aCBhYnNvbHV0ZVBvc2l0aW9uOiB7YXBwZW5kUXJDb2RlOlwie0JTdGFyXCIsIFFyQ29kZU1vZGVsOlwiTm8yXCIsIFFyQ29kZUxldmVsOlwiTFwiLCBjZWxsOiA4LCBhYnNvbHV0ZVBvc2l0aW9uOiA0MCB9LlxyXG4gICAqIEV4YW1wbGUgd2l0aCBhbGlnbm1lbnQ6IHthcHBlbmRRckNvZGU6XCJ7QlN0YXJcIiwgUXJDb2RlTW9kZWw6XCJObzJcIiwgUXJDb2RlTGV2ZWw6XCJMXCIsIGNlbGw6IDgsIGFsaWdubWVudDpcIkNlbnRlclwiIH0uXHJcbiAgICovXHJcbiAgYXBwZW5kUXJDb2RlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kLlxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5RckNvZGVNb2RlbCBvciB0aGUgUXJDb2RlTW9kZWwgZW51bS4gJ05vMScgfCAnTm8yJyBEZWZhdWx0ICdObzInXHJcbiAgICogRXhhbXBsZToge2FwcGVuZFFyQ29kZTone0JTdGFyJywgUXJDb2RlTW9kZWw6UXJDb2RlTW9kZWwuTm8xfVxyXG4gICAqL1xyXG4gIFFyQ29kZU1vZGVsPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kLlxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5RckNvZGVMZXZlbCBvciB0aGUgUXJDb2RlTGV2ZWwgZW51bS4gJ05vMScgfCAnTm8yJy4gRGVmYXVsdCAnSCdcclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOid7QlN0YXInLCBRckNvZGVMZXZlbDpRckNvZGVMZXZlbC5IfVxyXG4gICAqL1xyXG4gIFFyQ29kZUxldmVsPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kLiBRUkNvZGUgQ2VsbCBzaXplLiBEZWZhdWx0IDQuXHJcbiAgICogRXhhbXBsZToge2FwcGVuZFFyQ29kZTone0JTdGFyJywgY2VsbDo4fVxyXG4gICAqL1xyXG4gIGNlbGw/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByaW50IGNvbW1hbmQgb2YgdGhlIGJpdG1hcCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gVGFrZXMgYSBzdHJpbmcgaW1hZ2UgVVJJXHJcbiAgICogdGhpcyBjYW4gYmUgb2J0YWluZWQgdmlhIHRoZSBjYW1lcmEgb3IgcGhvdG8gbGlicmFyeSBvciBhcyBhIHN0YXRpYyByZXNvdXJjZSBzYXZlZCBvbiB0aGUgcGhvbmUgbWVtb3J5LlxyXG4gICAqIEFkZGl0aW9uYWwgUHJvcGVydGllczogZGlmZnVzaW9uLCB3aWR0aCwgYm90aFNjYWxlLCByb3RhdGlvbiwgYWJzb2x1dGVQb3NpdGlvbiwgYWxpZ25tZW50LlxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCBkaWZmdXNpb246IHRydWUsIHdpZHRoOjU3NiwgYm90aFNjYWxlOiB0cnVlfVxyXG4gICAqIEV4YW1wbGUgd2l0aCBhYnNvbHV0ZVBvc2l0aW9uOiB7YXBwZW5kQml0bWFwOnVyaSwgZGlmZnVzaW9uOiB0cnVlLCB3aWR0aDo1NzYsIGJvdGhTY2FsZTogdHJ1ZSwgYWJzb2x1dGVQb3NpdGlvbjogNDAgfS5cclxuICAgKiBFeGFtcGxlIHdpdGggYWxpZ25tZW50OiB7YXBwZW5kQml0bWFwOnVyaSwgZGlmZnVzaW9uOiB0cnVlLCB3aWR0aDo1NzYsIGJvdGhTY2FsZTogdHJ1ZSwgYWxpZ25tZW50OlwiQ2VudGVyXCIgfS5cclxuICAgKi9cclxuICBhcHBlbmRCaXRtYXA/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQuIFJhbmRvbSBkaXRoZXI6IHRydWUgPSBWYWxpZCwgZmFsc2UgPSBJbnZhbGlkLiBEZWZhdWx0IHRydWUuXHJcbiAgICogRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIGRpZmZ1c2lvbjogZmFsc2UgfVxyXG4gICAqL1xyXG4gIGRpZmZ1c2lvbj86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQuIEhlaWdodCBpcyBjaGFuZ2VkIGFjY29yZGluZyB0byB0aGUgY29udmVyc2lvbiByYXRlIG9mIHRoZSB3aWR0aCBwcm9wZXJ0eS5cclxuICAgKiB0cnVlID0gVmFsaWQsIGZhbHNlID0gSW52YWxpZC4gRGVmYXVsdCB0cnVlLlxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCBib3RoU2NhbGU6IHRydWUgfVxyXG4gICAqL1xyXG4gIGJvdGhTY2FsZT86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkJpdG1hcENvbnZlcnRlclJvdGF0aW9uIG9yIHRoZSBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbiBlbnVtLlxyXG4gICAqICdOb3JtYWwnIHwgJ0xlZnQ5MCcgfCAnUmlnaHQ5MCcgfCAnUm90YXRlMTgwJ1xyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCByb3RhdGlvbjogQml0bWFwQ29udmVydGVyUm90YXRpb24uTGVmdDkwIH1cclxuICAgKi9cclxuICByb3RhdGlvbj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogc2VuZHMgYSBhcHBlbmRQZXJpcGhlcmFsIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIgZm9yIGNoYW5uZWwgbnVtYmVyOiBFeGFtcGxlOiAxID0gTm8xLCAyID0gTm8yXHJcbiAgICovXHJcbiAgb3BlbkNhc2hEcmF3ZXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbXVsYXRpb24gY29uc3RhbnRzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFbXVsYXRpb24ge1xyXG4gIC8qKiBtUE9QLCBTTS1MMjAwLCBTTS1MMzAwLCBTTS1TMjEwaSwgU00tUzIyMGksIFNNLVMyMzBpLCBTTS1UMzAwaS9UMzAwLCBTTS1UNDAwaSAqL1xyXG4gIFN0YXJQUk5UID0gJ1N0YXJQUk5UJyxcclxuICAvKiogU00tTDIwMCwgU00tTDMwMCAqL1xyXG4gIFN0YXJQUk5UTCA9ICdTdGFyUFJOVEwnLFxyXG4gIC8qKiBGVlAxMCwgVFNQNjUwSUksIFRTUDcwMElJLCBUU1A4MDBJSSAqL1xyXG4gIFN0YXJMaW5lID0gJ1N0YXJMaW5lJyxcclxuICAvKiogVFNQMTAwICovXHJcbiAgU3RhckdyYXBoaWMgPSAnU3RhckdyYXBoaWMnLFxyXG4gIC8qKiBCU0MxMCAqL1xyXG4gIEVzY1BvcyA9ICdFc2NQb3MnLFxyXG4gIC8qKiBTTS1TMjEwaSwgU00tUzIyMGksIFNNLVMyMzBpLCBTTS1UMzAwaS9UMzAwLCBTTS1UNDAwaSAqL1xyXG4gIEVzY1Bvc01vYmlsZSA9ICdFc2NQb3NNb2JpbGUnLFxyXG4gIC8qKiBTUDcwMCAqL1xyXG4gIFN0YXJEb3RJbXBhY3QgPSAnU3RhckRvdEltcGFjdCcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbmNvZGluZyBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBlbnVtIEVuY29kaW5nIHtcclxuICAvKiogRW5nbGlzaCAqL1xyXG4gIFVTQVNDSUkgPSAnVVMtQVNDSUknLFxyXG4gIC8qKiBGcmVuY2gsIEdlcm1hbiwgUG9ydHVndWVzZSwgU3BhbmlzaCAqL1xyXG4gIFdpbmRvd3MxMjUyID0gJ1dpbmRvd3MtMTI1MicsXHJcbiAgLyoqIEphcGFuZXNlICovXHJcbiAgU2hpZnRKSVMgPSAnU2hpZnQtSklTJyxcclxuICAvKiogUnVzc2lhbiAqL1xyXG4gIFdpbmRvd3MxMjUxID0gJ1dpbmRvd3MtMTI1MScsXHJcbiAgLyoqIFNpbXBsaWZpZWQgQ2hpbmVzZSAqL1xyXG4gIEdCMjMxMiA9ICdHQjIzMTInLFxyXG4gIC8qKiBUcmFkaXRpb25hbCBDaGluZXNlICovXHJcbiAgQmlnNSA9ICdCaWc1JyxcclxuICAvKiogVUZUOCAqL1xyXG4gIFVURjggPSAnVVRGLTgnLFxyXG59XHJcblxyXG4vKipcclxuICogQ29kZVBhZ2VUeXBlIGNvbnN0YW50c1xyXG4gKi9cclxuZXhwb3J0IGVudW0gQ29kZVBhZ2VUeXBlIHtcclxuICBDUDczNyA9ICdDUDczNycsXHJcbiAgQ1A3NzIgPSAnQ1A3NzInLFxyXG4gIENQNzc0ID0gJ0NQNzc0JyxcclxuICBDUDg1MSA9ICdDUDg1MScsXHJcbiAgQ1A4NTIgPSAnQ1A4NTInLFxyXG4gIENQODU1ID0gJ0NQODU1JyxcclxuICBDUDg1NyA9ICdDUDg1NycsXHJcbiAgQ1A4NTggPSAnQ1A4NTgnLFxyXG4gIENQODYwID0gJ0NQODYwJyxcclxuICBDUDg2MSA9ICdDUDg2MScsXHJcbiAgQ1A4NjIgPSAnQ1A4NjInLFxyXG4gIENQODYzID0gJ0NQODYzJyxcclxuICBDUDg2NCA9ICdDUDg2NCcsXHJcbiAgQ1A4NjUgPSAnQ1A4NjUnLFxyXG4gIENQODY5ID0gJ0NQODY5JyxcclxuICBDUDg3NCA9ICdDUDg3NCcsXHJcbiAgQ1A5MjggPSAnQ1A5MjgnLFxyXG4gIENQOTMyID0gJ0NQOTMyJyxcclxuICBDUDk5OSA9ICdDUDk5OScsXHJcbiAgQ1AxMDAxID0gJ0NQMTAwMScsXHJcbiAgQ1AxMjUwID0gJ0NQMTI1MCcsXHJcbiAgQ1AxMjUxID0gJ0NQMTI1MScsXHJcbiAgQ1AxMjUyID0gJ0NQMTI1MicsXHJcbiAgQ1AyMDAxID0gJ0NQMjAwMScsXHJcbiAgQ1AzMDAxID0gJ0NQMzAwMScsXHJcbiAgQ1AzMDAyID0gJ0NQMzAwMicsXHJcbiAgQ1AzMDExID0gJ0NQMzAxMScsXHJcbiAgQ1AzMDEyID0gJ0NQMzAxMicsXHJcbiAgQ1AzMDIxID0gJ0NQMzAyMScsXHJcbiAgQ1AzMDQxID0gJ0NQMzA0MScsXHJcbiAgQ1AzODQwID0gJ0NQMzg0MCcsXHJcbiAgQ1AzODQxID0gJ0NQMzg0MScsXHJcbiAgQ1AzODQzID0gJ0NQMzg0MycsXHJcbiAgQ1AzODQ1ID0gJ0NQMzg0NScsXHJcbiAgQ1AzODQ2ID0gJ0NQMzg0NicsXHJcbiAgQ1AzODQ3ID0gJ0NQMzg0NycsXHJcbiAgQ1AzODQ4ID0gJ0NQMzg0OCcsXHJcbiAgVVRGOCA9ICdVVEY4JyxcclxuICBCbGFuayA9ICdCbGFuaycsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hdGlvbmFsVHlwZSBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBlbnVtIEludGVybmF0aW9uYWxUeXBlIHtcclxuICBVSyA9ICdVSycsXHJcbiAgVVNBID0gJ1VTQScsXHJcbiAgRnJhbmNlID0gJ0ZyYW5jZScsXHJcbiAgR2VybWFueSA9ICdHZXJtYW55JyxcclxuICBEZW5tYXJrID0gJ0Rlbm1hcmsnLFxyXG4gIFN3ZWRlbiA9ICdTd2VkZW4nLFxyXG4gIEl0YWx5ID0gJ0l0YWx5JyxcclxuICBTcGFpbiA9ICdTcGFpbicsXHJcbiAgSmFwYW4gPSAnSmFwYW4nLFxyXG4gIE5vcndheSA9ICdOb3J3YXknLFxyXG4gIERlbm1hcmsyID0gJ0Rlbm1hcmsyJyxcclxuICBTcGFpbjIgPSAnU3BhaW4yJyxcclxuICBMYXRpbkFtZXJpY2EgPSAnTGF0aW5BbWVyaWNhJyxcclxuICBLb3JlYSA9ICdLb3JlYScsXHJcbiAgSXJlbGFuZCA9ICdJcmVsYW5kJyxcclxuICBMZWdhbCA9ICdMZWdhbCcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGb250U3R5bGVUeXBlIGNvbnN0YW50cy5cclxuICovXHJcbmV4cG9ydCBlbnVtIEZvbnRTdHlsZVR5cGUge1xyXG4gIC8qKiBGb250LUEgKDEyIHggMjQgZG90cykgLyBTcGVjaWZ5IDcgeCA5IGZvbnQgKGhhbGYgZG90cykgKi9cclxuICBBID0gJ0EnLFxyXG4gIC8qKiBGb250LUIgKDkgeCAyNCBkb3RzKSAvIFNwZWNpZnkgNSB4IDkgZm9udCAoMlAtMSkgKi9cclxuICBCID0gJ0InLFxyXG59XHJcblxyXG4vKipcclxuICogQ3V0UGFwZXJBY3Rpb24gY29uc3RhbnRzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gQ3V0UGFwZXJBY3Rpb24ge1xyXG4gIEZ1bGxDdXQgPSAnRnVsbEN1dCcsXHJcbiAgRnVsbEN1dFdpdGhGZWVkID0gJ0Z1bGxDdXRXaXRoRmVlZCcsXHJcbiAgUGFydGlhbEN1dCA9ICdQYXJ0aWFsQ3V0JyxcclxuICBQYXJ0aWFsQ3V0V2l0aEZlZWQgPSAnUGFydGlhbEN1dFdpdGhGZWVkJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIEJsYWNrTWFya1R5cGUgY29uc3RhbnRzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gQmxhY2tNYXJrVHlwZSB7XHJcbiAgVmFsaWQgPSAnVmFsaWQnLFxyXG4gIEludmFsaWQgPSAnSW52YWxpZCcsXHJcbiAgVmFsaWRXaXRoRGV0ZWN0aW9uID0gJ1ZhbGlkV2l0aERldGVjdGlvbicsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMb2dvU2l6ZSBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBlbnVtIExvZ29TaXplIHtcclxuICBOb3JtYWwgPSAnTm9ybWFsJyxcclxuICBEb3VibGVXaWR0aCA9ICdEb3VibGVXaWR0aCcsXHJcbiAgRG91YmxlSGVpZ2h0ID0gJ0RvdWJsZUhlaWdodCcsXHJcbiAgRG91YmxlV2lkdGhEb3VibGVIZWlnaHQgPSAnRG91YmxlV2lkdGhEb3VibGVIZWlnaHQnLFxyXG59XHJcblxyXG4vKipcclxuICogQWxpZ25tZW50UG9zaXRpb24gY29uc3RhbnRzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBBbGlnbm1lbnRQb3NpdGlvbiB7XHJcbiAgTGVmdCA9ICdMZWZ0JyxcclxuICBDZW50ZXIgPSAnQ2VudGVyJyxcclxuICBSaWdodCA9ICdSaWdodCcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCYXJjb2RlU3ltYm9sb2d5IGNvbnN0YW50c1xyXG4gKi9cclxuZXhwb3J0IGVudW0gQmFyY29kZVN5bWJvbG9neSB7XHJcbiAgQ29kZTEyOCA9ICdDb2RlMTI4JyxcclxuICBDb2RlMzkgPSAnQ29kZTM5JyxcclxuICBDb2RlOTMgPSAnQ29kZTkzJyxcclxuICBJVEYgPSAnSVRGJyxcclxuICBKQU44ID0gJ0pBTjgnLFxyXG4gIEpBTjEzID0gJ0pBTjEzJyxcclxuICBOVzcgPSAnTlc3JyxcclxuICBVUENBID0gJ1VQQ0EnLFxyXG4gIFVQQ0UgPSAnVVBDRScsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCYXJjb2RlV2lkdGggY29uc3RhbnRzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBCYXJjb2RlV2lkdGgge1xyXG4gIE1vZGUxID0gJ01vZGUxJyxcclxuICBNb2RlMiA9ICdNb2RlMicsXHJcbiAgTW9kZTMgPSAnTW9kZTMnLFxyXG4gIE1vZGU0ID0gJ01vZGU0JyxcclxuICBNb2RlNSA9ICdNb2RlNScsXHJcbiAgTW9kZTYgPSAnTW9kZTYnLFxyXG4gIE1vZGU3ID0gJ01vZGU3JyxcclxuICBNb2RlOCA9ICdNb2RlOCcsXHJcbiAgTW9kZTkgPSAnTW9kZTknLFxyXG59XHJcblxyXG4vKipcclxuICogUXJDb2RlTW9kZWwgY29uc3RhbnRzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBRckNvZGVNb2RlbCB7XHJcbiAgTm8xID0gJ05vMScsXHJcbiAgTm8yID0gJ05vMicsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBRckNvZGVMZXZlbCBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBlbnVtIFFyQ29kZUxldmVsIHtcclxuICBIID0gJ0gnLFxyXG4gIEwgPSAnTCcsXHJcbiAgTSA9ICdNJyxcclxuICBRID0gJ1EnLFxyXG59XHJcblxyXG4vKipcclxuICogQml0bWFwQ29udmVydGVyUm90YXRpb24gY29uc3RhbnRzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbiB7XHJcbiAgTm9ybWFsID0gJ05vcm1hbCcsXHJcbiAgTGVmdDkwID0gJ0xlZnQ5MCcsXHJcbiAgUmlnaHQ5MCA9ICdSaWdodDkwJyxcclxuICBSb3RhdGUxODAgPSAnUm90YXRlMTgwJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIFB1c2ggYSBuZXcgUHJpbnRDb21tYW5kIG9iamVjdCB0byB0aGUgYXJyYXkgZm9yIGEgc2VwYXJhdGUgaW5zdHJ1Y3Rpb24gdG8gdGhlIHByaW50ZXIuIEV4YW1wbGUgW3thcHBlbmQ6XCJ0ZXh0XCJ9LCB7XCJvcGVuQ2FzaERyYXdlcjogMVwifV1cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZHNBcnJheSBleHRlbmRzIEFycmF5PFByaW50Q29tbWFuZD4ge31cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTdGFyUFJOVFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogKiBJb25pYyBOYXRpdmUgd3JhcHBlcnMgZm9yIHRoZSBzdGFycHJudCBjb3Jkb3ZhIHBsdWdpbiBmb3IgU3RhciBNaWNyb25pY3MgQmx1ZXRvb3RoL0xBTiBwcmludGVyc1xyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBTdGFyUFJOVCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3Rhci1wcm50L25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhcnBybnQ6IFN0YXJQUk5UKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuc3RhcnBybnQucG9ydERpc2NvdmVyeSgnYWxsJylcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1N0YXJQUk5UJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zdGFycHJudCcsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ3N0YXJwcm50JywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXVjdGlmZXJhLWpvc2VkL3N0YXJwcm50JywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RhclBSTlQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIEVtdWxhdGlvblxyXG4gICAqL1xyXG4gIEVtdWxhdGlvbiA9IHtcclxuICAgIFN0YXJQUk5UOiAnU3RhclBSTlQnLFxyXG4gICAgU3RhclBSTlRMOiAnU3RhclBSTlRMJyxcclxuICAgIFN0YXJMaW5lOiAnU3RhckxpbmUnLFxyXG4gICAgU3RhckdyYXBoaWM6ICdTdGFyR3JhcGhpYycsXHJcbiAgICBFc2NQb3M6ICdFc2NQb3MnLFxyXG4gICAgRXNjUG9zTW9iaWxlOiAnRXNjUG9zTW9iaWxlJyxcclxuICAgIFN0YXJEb3RJbXBhY3Q6ICdTdGFyRG90SW1wYWN0JyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgRW5jb2RpbmdcclxuICAgKi9cclxuICBFbmNvZGluZyA9IHtcclxuICAgIFVTQVNDSUk6ICdVUy1BU0NJSScsXHJcbiAgICBXaW5kb3dzMTI1MjogJ1dpbmRvd3MtMTI1MicsXHJcbiAgICBTaGlmdEpJUzogJ1NoaWZ0LUpJUycsXHJcbiAgICBXaW5kb3dzMTI1MTogJ1dpbmRvd3MtMTI1MScsXHJcbiAgICBHQjIzMTI6ICdHQjIzMTInLFxyXG4gICAgQmlnNTogJ0JpZzUnLFxyXG4gICAgVVRGODogJ1VURi04JyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb2RlUGFnZVR5cGUgY29uc3RhbnRzXHJcbiAgICovXHJcbiAgQ29kZVBhZ2VUeXBlID0ge1xyXG4gICAgQ1A3Mzc6ICdDUDczNycsXHJcbiAgICBDUDc3MjogJ0NQNzcyJyxcclxuICAgIENQNzc0OiAnQ1A3NzQnLFxyXG4gICAgQ1A4NTE6ICdDUDg1MScsXHJcbiAgICBDUDg1MjogJ0NQODUyJyxcclxuICAgIENQODU1OiAnQ1A4NTUnLFxyXG4gICAgQ1A4NTc6ICdDUDg1NycsXHJcbiAgICBDUDg1ODogJ0NQODU4JyxcclxuICAgIENQODYwOiAnQ1A4NjAnLFxyXG4gICAgQ1A4NjE6ICdDUDg2MScsXHJcbiAgICBDUDg2MjogJ0NQODYyJyxcclxuICAgIENQODYzOiAnQ1A4NjMnLFxyXG4gICAgQ1A4NjQ6ICdDUDg2NCcsXHJcbiAgICBDUDg2NTogJ0NQODY1JyxcclxuICAgIENQODY5OiAnQ1A4NjknLFxyXG4gICAgQ1A4NzQ6ICdDUDg3NCcsXHJcbiAgICBDUDkyODogJ0NQOTI4JyxcclxuICAgIENQOTMyOiAnQ1A5MzInLFxyXG4gICAgQ1A5OTk6ICdDUDk5OScsXHJcbiAgICBDUDEwMDE6ICdDUDEwMDEnLFxyXG4gICAgQ1AxMjUwOiAnQ1AxMjUwJyxcclxuICAgIENQMTI1MTogJ0NQMTI1MScsXHJcbiAgICBDUDEyNTI6ICdDUDEyNTInLFxyXG4gICAgQ1AyMDAxOiAnQ1AyMDAxJyxcclxuICAgIENQMzAwMTogJ0NQMzAwMScsXHJcbiAgICBDUDMwMDI6ICdDUDMwMDInLFxyXG4gICAgQ1AzMDExOiAnQ1AzMDExJyxcclxuICAgIENQMzAxMjogJ0NQMzAxMicsXHJcbiAgICBDUDMwMjE6ICdDUDMwMjEnLFxyXG4gICAgQ1AzMDQxOiAnQ1AzMDQxJyxcclxuICAgIENQMzg0MDogJ0NQMzg0MCcsXHJcbiAgICBDUDM4NDE6ICdDUDM4NDEnLFxyXG4gICAgQ1AzODQzOiAnQ1AzODQzJyxcclxuICAgIENQMzg0NTogJ0NQMzg0NScsXHJcbiAgICBDUDM4NDY6ICdDUDM4NDYnLFxyXG4gICAgQ1AzODQ3OiAnQ1AzODQ3JyxcclxuICAgIENQMzg0ODogJ0NQMzg0OCcsXHJcbiAgICBVVEY4OiAnVVRGOCcsXHJcbiAgICBCbGFuazogJ0JsYW5rJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgSW50ZXJuYXRpb25hbFR5cGVcclxuICAgKi9cclxuICBJbnRlcm5hdGlvbmFsVHlwZSA9IHtcclxuICAgIFVLOiAnVUsnLFxyXG4gICAgVVNBOiAnVVNBJyxcclxuICAgIEZyYW5jZTogJ0ZyYW5jZScsXHJcbiAgICBHZXJtYW55OiAnR2VybWFueScsXHJcbiAgICBEZW5tYXJrOiAnRGVubWFyaycsXHJcbiAgICBTd2VkZW46ICdTd2VkZW4nLFxyXG4gICAgSXRhbHk6ICdJdGFseScsXHJcbiAgICBTcGFpbjogJ1NwYWluJyxcclxuICAgIEphcGFuOiAnSmFwYW4nLFxyXG4gICAgTm9yd2F5OiAnTm9yd2F5JyxcclxuICAgIERlbm1hcmsyOiAnRGVubWFyazInLFxyXG4gICAgU3BhaW4yOiAnU3BhaW4yJyxcclxuICAgIExhdGluQW1lcmljYTogJ0xhdGluQW1lcmljYScsXHJcbiAgICBLb3JlYTogJ0tvcmVhJyxcclxuICAgIElyZWxhbmQ6ICdJcmVsYW5kJyxcclxuICAgIExlZ2FsOiAnTGVnYWwnLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBGb250U3R5bGVUeXBlXHJcbiAgICovXHJcbiAgRm9udFN0eWxlVHlwZSA9IHtcclxuICAgIC8qKiBGb250LUEgKDEyIHggMjQgZG90cykgLyBTcGVjaWZ5IDcgeCA5IGZvbnQgKGhhbGYgZG90cykgKi9cclxuICAgIEE6ICdBJyxcclxuICAgIC8qKiBGb250LUIgKDkgeCAyNCBkb3RzKSAvIFNwZWNpZnkgNSB4IDkgZm9udCAoMlAtMSkgKi9cclxuICAgIEI6ICdCJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgQ3V0UGFwZXJBY3Rpb25cclxuICAgKi9cclxuICBDdXRQYXBlckFjdGlvbiA9IHtcclxuICAgIEZ1bGxDdXQ6ICdGdWxsQ3V0JyxcclxuICAgIEZ1bGxDdXRXaXRoRmVlZDogJ0Z1bGxDdXRXaXRoRmVlZCcsXHJcbiAgICBQYXJ0aWFsQ3V0OiAnUGFydGlhbEN1dCcsXHJcbiAgICBQYXJ0aWFsQ3V0V2l0aEZlZWQ6ICdQYXJ0aWFsQ3V0V2l0aEZlZWQnLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBCbGFja01hcmtUeXBlXHJcbiAgICovXHJcbiAgQmxhY2tNYXJrVHlwZSA9IHtcclxuICAgIFZhbGlkOiAnVmFsaWQnLFxyXG4gICAgSW52YWxpZDogJ0ludmFsaWQnLFxyXG4gICAgVmFsaWRXaXRoRGV0ZWN0aW9uOiAnVmFsaWRXaXRoRGV0ZWN0aW9uJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgQWxpZ25tZW50UG9zaXRpb25cclxuICAgKi9cclxuICBBbGlnbm1lbnRQb3NpdGlvbiA9IHtcclxuICAgIExlZnQ6ICdMZWZ0JyxcclxuICAgIENlbnRlcjogJ0NlbnRlcicsXHJcbiAgICBSaWdodDogJ1JpZ2h0JyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgTG9nb1NpemVcclxuICAgKi9cclxuICBMb2dvU2l6ZSA9IHtcclxuICAgIE5vcm1hbDogJ05vcm1hbCcsXHJcbiAgICBEb3VibGVXaWR0aDogJ0RvdWJsZVdpZHRoJyxcclxuICAgIERvdWJsZUhlaWdodDogJ0RvdWJsZUhlaWdodCcsXHJcbiAgICBEb3VibGVXaWR0aERvdWJsZUhlaWdodDogJ0RvdWJsZVdpZHRoRG91YmxlSGVpZ2h0JyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgQmFyY29kZVN5bWJvbG9neVxyXG4gICAqL1xyXG4gIEJhcmNvZGVTeW1ib2xvZ3kgPSB7XHJcbiAgICBDb2RlMTI4OiAnQ29kZTEyOCcsXHJcbiAgICBDb2RlMzk6ICdDb2RlMzknLFxyXG4gICAgQ29kZTkzOiAnQ29kZTkzJyxcclxuICAgIElURjogJ0lURicsXHJcbiAgICBKQU44OiAnSkFOOCcsXHJcbiAgICBKQU4xMzogJ0pBTjEzJyxcclxuICAgIE5XNzogJ05XNycsXHJcbiAgICBVUENBOiAnVVBDQScsXHJcbiAgICBVUENFOiAnVVBDRScsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEJhcmNvZGVXaWR0aFxyXG4gICAqL1xyXG4gIEJhcmNvZGVXaWR0aCA9IHtcclxuICAgIE1vZGUxOiAnTW9kZTEnLFxyXG4gICAgTW9kZTI6ICdNb2RlMicsXHJcbiAgICBNb2RlMzogJ01vZGUzJyxcclxuICAgIE1vZGU0OiAnTW9kZTQnLFxyXG4gICAgTW9kZTU6ICdNb2RlNScsXHJcbiAgICBNb2RlNjogJ01vZGU2JyxcclxuICAgIE1vZGU3OiAnTW9kZTcnLFxyXG4gICAgTW9kZTg6ICdNb2RlOCcsXHJcbiAgICBNb2RlOTogJ01vZGU5JyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgUXJDb2RlTW9kZWxcclxuICAgKi9cclxuICBRckNvZGVNb2RlbCA9IHtcclxuICAgIE5vMTogJ05vMScsXHJcbiAgICBObzI6ICdObzInLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBRckNvZGVMZXZlbFxyXG4gICAqL1xyXG4gIFFyQ29kZUxldmVsID0ge1xyXG4gICAgSDogJ0gnLFxyXG4gICAgTDogJ0wnLFxyXG4gICAgTTogJ00nLFxyXG4gICAgUTogJ1EnLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvblxyXG4gICAqL1xyXG4gIEJpdG1hcENvbnZlcnRlclJvdGF0aW9uID0ge1xyXG4gICAgTm9ybWFsOiAnTm9ybWFsJyxcclxuICAgIExlZnQ5MDogJ0xlZnQ5MCcsXHJcbiAgICBSaWdodDkwOiAnUmlnaHQ5MCcsXHJcbiAgICBSb3RhdGUxODA6ICdSb3RhdGUxODAnLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgYXZhaWxhYmxlIHByaW50ZXJzXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgIEludGVyZmFjZSBUeXBlOiBBbGwsIExBTiwgQmx1ZXRvb3RoLCBVU0JcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFByaW50ZXJzPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGFuIGFycmF5IG9mIHByaW50ZXJzXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHBvcnREaXNjb3ZlcnkodHlwZTogc3RyaW5nKTogUHJvbWlzZTxQcmludGVycz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRoZSBzdGF0dXMgb2YgdGhlIHByaW50ZXJcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCAgUHJpbnRlciBuYW1lIGkuZSBCVDpTdGFyTWljcm9uaWNzXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxQcmludGVyU3RhdHVzPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBQcmludGVyU3RhdHVzIG9iamVjdFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjaGVja1N0YXR1cyhwb3J0OiBzdHJpbmcsIGVtdWxhdGlvbjogc3RyaW5nKTogUHJvbWlzZTxQcmludGVyU3RhdHVzPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmludHMgcGxhaW4gdGV4dFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuIFNlbmQgbnVsbCB0byB1c2UgYSBwcmludGVyIGNvbm5lY3RlZCB2aWEgU3RhcklPRXh0TWFuYWdlciB1c2luZyB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXHJcbiAgICogQHBhcmFtIHtQcmludE9ian0gcHJpbnRPYmogIHRleHQ6c3RyaW5nLCBjdXRSZWNlaXB0Pzpib29sZWFuLCBvcGVuQ2FzaERyYXdlcj86Ym9vbGVhblxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgcHJpbnRlZCBjb3JyZWN0bHkgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcHJpbnRSYXdUZXh0KHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcsIHByaW50T2JqOiBQcmludE9iaik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb252ZXJ0cyB0aGUgdGV4dCBpbnRvIGEgYml0bWFwIGltYWdlIGFuZCBzZW5kcyBpdCB0byB0aGUgcHJpbnRlclxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuICBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxyXG4gICAqIEBwYXJhbSB7UmFzdGVyT2JqfSByYXN0ZXJPYmogIHRleHQ6c3RyaW5nLCBjdXRSZWNlaXB0Pzpib29sZWFuLCBvcGVuQ2FzaERyYXdlcj86Ym9vbGVhbiwgZm9udFNpemU6bnVtYmVyLCBwYXBlcldpZHRoOm51bWJlclxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgcHJpbnRlZCBjb3JyZWN0bHkgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcHJpbnRSYXN0ZXJSZWNlaXB0KHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcsIHJhc3Rlck9iajogUmFzdGVyT2JqKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgYW4gaW1hZ2UgZnJvbSBhIHN0cmluZyBVUkkgYW5kIGNvbnZlcnRzIGl0IHRvIGJpdG1hcCB0byBzZW5kIGl0IHRvIHRoZSBwcmludGVyXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgUHJpbnRlciBuYW1lIGkuZSBCVDpTdGFyTWljcm9uaWNzLiAgU2VuZCBudWxsIHRvIHVzZSBhIHByaW50ZXIgY29ubmVjdGVkIHZpYSBTdGFySU9FeHRNYW5hZ2VyIHVzaW5nIHRoZSBjb25uZWN0KCkgZnVuY3Rpb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcclxuICAgKiBAcGFyYW0ge0ltYWdlT2JqfSBpbWFnZU9iaiAgdXJpOnN0cmluZywgcGFwZXJXaWR0aD86bnVtYmVyLCBjdXRSZWNlaXB0Pzpib29sZWFuLCBvcGVuQ2FzaERyYXdlcj86Ym9vbGVhblxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgcHJpbnRlZCBjb3JyZWN0bHkgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcHJpbnRJbWFnZShwb3J0OiBzdHJpbmcsIGVtdWxhdGlvbjogc3RyaW5nLCBpbWFnZU9iajogSW1hZ2VPYmopOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2VuZHMgYW4gYXBwZW5kUGVyaXBoZXJhbCBjb21tYW5kIHRvIHRoZSBwcmludGVyIGZvciBjaGFubmVscyBObzEgYW5kIE5vMlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuICBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgb3BlbmVkIG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIG9wZW5DYXNoRHJhd2VyKHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VuZHMgYW4gQXJyYXkgb2YgY29tbWFuZHMgdG8gdGhlIGNvbW1hbmQgYnVmZmVyIHVzaW5nIHRoZSBBbmRyb2lkIElDb21tYW5kQnVpbGRlckludGVyZmFjZSBvciBpT1MgSVNDQkJ1aWxkZXJJbnRlcmZhY2VcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCAgUHJpbnRlciBuYW1lIGkuZSBCVDpTdGFyTWljcm9uaWNzLiAgU2VuZCBudWxsIHRvIHVzZSBhIHByaW50ZXIgY29ubmVjdGVkIHZpYSBTdGFySU9FeHRNYW5hZ2VyIHVzaW5nIHRoZSBjb25uZWN0KCkgZnVuY3Rpb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcclxuICAgKiBAcGFyYW0ge0NvbW1hbmRzQXJyYXl9IGNvbW1hbmRzQXJyYXkgIGVhY2ggY29tbWFuZCBpbiB0aGUgYXJyYXkgc2hvdWxkIGJlIGFuIGluc3RhbmNlIG9mIHRoZSBQcmludENvbW1hbmQgb2JqZWN0LiBFeGFtcGxlIFt7YXBwZW5kOlwidGV4dFwifSwge1wib3BlbkNhc2hEcmF3ZXI6IDFcIn1dXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBwcmludGVkIGNvcnJlY3RseSBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBwcmludChwb3J0OiBzdHJpbmcsIGVtdWxhdGlvbjogc3RyaW5nLCBjb21tYW5kc0FycmF5OiBDb21tYW5kc0FycmF5KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbG93cyB5b3UgdG8gY29ubmVjdCB0byB0aGUgcHJpbnRlciwga2VlcCB0aGUgY29ubmVjdGlvbiBhbGl2ZSBhbmQgcmVjZWl2ZSBzdGF0dXMgdXBkYXRlcyB0aHJvdWdoIGFuIG9ic2VydmFibGVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCAgcHJpbnRlciBuYW1lIGkuZSBCVDpTdGFyTWljcm9uaWNzLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxyXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gU3VjY2VzcyEgaWYgY29ubmVjdGVkIG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGNhbGxiYWNrU3R5bGU6ICdub2RlJyxcclxuICB9KVxyXG4gIGNvbm5lY3QocG9ydDogc3RyaW5nLCBlbXVsYXRpb246IHN0cmluZywgaGFzQmFyY29kZVJlYWRlcjogYm9vbGVhbik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgZGV2aWNlIHN0YXR1cyBldmVudHMuIE9ubHkgZmlyZXMgd2hlbiBhIHByaW50ZXIgaXMgY29ubm5lY3RlZCB0aHJvdWdoIHRoZSBjb25uZWN0KCkgZnVuY3Rpb25cclxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59IGRhdGFUeXBlOiBwcmludGVyT25saW5lLCBwcmludGVyT2ZmbGluZSwgcHJpbnRlckltcG9zc2libGUsIHByaW50ZXJQYXBlckVtcHR5LCBwcmludGVyUGFwZXJOZWFyRW1wdHksIHByaW50ZXJQYXBlclJlYWR5LCBwcmludGVyQ292ZXJPcGVuLCBwcmludGVyQ292ZXJDbG9zZSwgY2FzaERyYXdlck9wZW4sIGNhc2hEcmF3ZXJDbG9zZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGV2ZW50OiAnc3RhclBybnREYXRhJyxcclxuICB9KVxyXG4gIGdldFN0YXR1cygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIHRvIGRpc2Nvbm5lY3QgKGNsb3NlIHRoZSBjb25uZWN0aW9uIHRvIHRoZSBwZXJpcGhlcmFscyksIHRoaXMgaXMgdXNlZnVsIHRvIGF2b2lkIGtlZXBpbmcgYWxpdmUgYSBjb25uZWN0aW9uIHdoZW4gbm90IGluIHRoZSBhcHAgdG8gc2F2ZSBkZXZpY2UgYmF0dGVyeVxyXG4gICAqIChlbmVyZ3kgY29uc3VtcHRpb24pLiBZb3Ugc2hvdWxkIGNhbGwgdGhpcyBmdW5jdGlvbiB3aGVuIHRoZSBhcHAgaXMgcGF1c2VkIG9yIGNsb3NlZC5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFN1Y2Nlc3MhIGlmIGNvbm5lY3RlZCBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBkaXNjb25uZWN0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==