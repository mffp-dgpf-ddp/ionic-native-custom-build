import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
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
var StarPRNT = /** @class */ (function (_super) {
    __extends(StarPRNT, _super);
    function StarPRNT() {
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
    StarPRNT.prototype.portDiscovery = function (type) { return cordova(this, "portDiscovery", {}, arguments); };
    StarPRNT.prototype.checkStatus = function (port, emulation) { return cordova(this, "checkStatus", {}, arguments); };
    StarPRNT.prototype.printRawText = function (port, emulation, printObj) { return cordova(this, "printRawText", {}, arguments); };
    StarPRNT.prototype.printRasterReceipt = function (port, emulation, rasterObj) { return cordova(this, "printRasterReceipt", {}, arguments); };
    StarPRNT.prototype.printImage = function (port, emulation, imageObj) { return cordova(this, "printImage", {}, arguments); };
    StarPRNT.prototype.openCashDrawer = function (port, emulation) { return cordova(this, "openCashDrawer", {}, arguments); };
    StarPRNT.prototype.print = function (port, emulation, commandsArray) { return cordova(this, "print", {}, arguments); };
    StarPRNT.prototype.connect = function (port, emulation, hasBarcodeReader) { return cordova(this, "connect", { "observable": true, "callbackStyle": "node" }, arguments); };
    StarPRNT.prototype.getStatus = function () { return cordova(this, "getStatus", { "eventObservable": true, "event": "starPrntData" }, arguments); };
    StarPRNT.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    StarPRNT.pluginName = "StarPRNT";
    StarPRNT.plugin = "cordova-plugin-starprnt";
    StarPRNT.pluginRef = "starprnt";
    StarPRNT.repo = "https://github.com/auctifera-josed/starprnt";
    StarPRNT.platforms = ["Android", "iOS"];
    StarPRNT = __decorate([
        Injectable()
    ], StarPRNT);
    return StarPRNT;
}(IonicNativePlugin));
export { StarPRNT };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0YXItcHJudC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBa1psQzs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLFNBZVg7QUFmRCxXQUFZLFNBQVM7SUFDbkIsb0ZBQW9GO0lBQ3BGLGtDQUFxQixDQUFBO0lBQ3JCLHVCQUF1QjtJQUN2QixvQ0FBdUIsQ0FBQTtJQUN2QiwwQ0FBMEM7SUFDMUMsa0NBQXFCLENBQUE7SUFDckIsYUFBYTtJQUNiLHdDQUEyQixDQUFBO0lBQzNCLFlBQVk7SUFDWiw4QkFBaUIsQ0FBQTtJQUNqQiw0REFBNEQ7SUFDNUQsMENBQTZCLENBQUE7SUFDN0IsWUFBWTtJQUNaLDRDQUErQixDQUFBO0FBQ2pDLENBQUMsRUFmVyxTQUFTLEtBQVQsU0FBUyxRQWVwQjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksUUFlWDtBQWZELFdBQVksUUFBUTtJQUNsQixjQUFjO0lBQ2QsZ0NBQW9CLENBQUE7SUFDcEIsMENBQTBDO0lBQzFDLHdDQUE0QixDQUFBO0lBQzVCLGVBQWU7SUFDZixrQ0FBc0IsQ0FBQTtJQUN0QixjQUFjO0lBQ2Qsd0NBQTRCLENBQUE7SUFDNUIseUJBQXlCO0lBQ3pCLDZCQUFpQixDQUFBO0lBQ2pCLDBCQUEwQjtJQUMxQix5QkFBYSxDQUFBO0lBQ2IsV0FBVztJQUNYLDBCQUFjLENBQUE7QUFDaEIsQ0FBQyxFQWZXLFFBQVEsS0FBUixRQUFRLFFBZW5CO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxZQXdDWDtBQXhDRCxXQUFZ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O1NBQ1gsQ0FBQztRQUVGOztXQUVHO1FBQ0gsaUJBQVcsR0FBRztZQUNaLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1NBQ1AsQ0FBQztRQUVGOztXQUVHO1FBQ0gsNkJBQXVCLEdBQUc7WUFDeEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsU0FBUyxFQUFFLFdBQVc7U0FDdkIsQ0FBQzs7O0lBUUYsZ0NBQWEsYUFBQyxJQUFZO0lBVzFCLDhCQUFXLGFBQUMsSUFBWSxFQUFFLFNBQWlCO0lBWTNDLCtCQUFZLGFBQUMsSUFBWSxFQUFFLFNBQWlCLEVBQUUsUUFBa0I7SUFZaEUscUNBQWtCLGFBQUMsSUFBWSxFQUFFLFNBQWlCLEVBQUUsU0FBb0I7SUFZeEUsNkJBQVUsYUFBQyxJQUFZLEVBQUUsU0FBaUIsRUFBRSxRQUFrQjtJQVc5RCxpQ0FBYyxhQUFDLElBQVksRUFBRSxTQUFpQjtJQVk5Qyx3QkFBSyxhQUFDLElBQVksRUFBRSxTQUFpQixFQUFFLGFBQTRCO0lBY25FLDBCQUFPLGFBQUMsSUFBWSxFQUFFLFNBQWlCLEVBQUUsZ0JBQXlCO0lBWWxFLDRCQUFTO0lBVVQsNkJBQVU7Ozs7OztJQXhUQyxRQUFRO1FBRHBCLFVBQVUsRUFBRTtPQUNBLFFBQVE7bUJBM29CckI7RUEyb0I4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRlciB7XHJcbiAgLyoqXHJcbiAgICogUHJpbnRlciBtb2RlbCBuYW1lIGFuZCBtb2RlbCBudW1iZXJcclxuICAgKi9cclxuICBtb2RlbE5hbWU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByaW50ZXIgTWFjIEFkZHJlc3NcclxuICAgKi9cclxuICBtYWNBZGRyZXNzPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBQcmludGVyIHBvcnQgbmFtZSB1c2VkIHRvIGNyZWF0ZSBhIG5ldyBwb3J0IGluc3RhbmNlIG9mIFNNUG9ydCBvciBTdGFySU9FeHRNYW5hZ2VyXHJcbiAgICovXHJcbiAgcG9ydE5hbWU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVVNCIFNlcmlhbCBOdW1iZXIgKFVTQiBQcmludGVycyBPbmx5KVxyXG4gICAqL1xyXG4gIFVTQlNlcmlhbE51bWJlcj86IHN0cmluZztcclxufVxyXG4vKipcclxuICogQXJyYXkgb2YgUHJpbnRlciBvYmplY3RzIHJldHVybmVkIGJ5IHRoZSBwb3J0RGlzY292ZXJ5KCkgZnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRlcnMgZXh0ZW5kcyBBcnJheTxQcmludGVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcmludGVyU3RhdHVzIHtcclxuICAvKipcclxuICAgKiBQcmludGVyIE9ubGluZS9PZmZsaW5lIHN0YXR1c1xyXG4gICAqL1xyXG4gIG9mZmxpbmU/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiAgUHJpbnRlciBtb2RlbCBuYW1lIGFuZCBtb2RlbCBudW1iZXJcclxuICAgKi9cclxuICBNb2RlbE5hbWU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByaW50ZXIgY292ZXIgc3RhdHVzXHJcbiAgICovXHJcbiAgY292ZXJPcGVuPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJpbnRlciBQYXBlciBDdXR0ZXIgc3RhdHVzXHJcbiAgICovXHJcbiAgY3V0dGVyRXJyb3I/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBQcmludGVyIFBhcGVyIHN0YXR1c1xyXG4gICAqL1xyXG4gIHJlY2VpcHRQYXBlckVtcHR5PzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJpbnRlciBGaXJtd2FyZSBpbmZvcm1hdGlvblxyXG4gICAqL1xyXG4gIEZpcm13YXJlVmVyc2lvbj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcmludE9iaiB7XHJcbiAgLyoqXHJcbiAgICogc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHRleHQgdG8gcHJpbnQsIEV4YW1wbGU6IFwiU3RhciBDbG90aGluZyBCb3V0aXF1ZVxcbjEyMyBTdGFyIFJvYWRcXG5DaXR5LCBTdGF0ZSAxMjM0NVxcblxcblwiXHJcbiAgICovXHJcbiAgdGV4dDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiAgU2VuZHMgYSBQYXJ0aWFsQ3V0V2l0aEZlZWQgY29tbWFuZCB0byB0aGUgcHJpbnRlciwgZGVmYXVsdHMgdG8gdHJ1ZVxyXG4gICAqL1xyXG4gIGN1dFJlY2VpcHQ/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBzZW5kcyBhIGFwcGVuZFBlcmlwaGVyYWwgY29tbWFuZCB0byB0aGUgcHJpbnRlciBmb3IgY2hhbm5lbHMgTm8xIGFuZCBObzIgLSBEZWZhdWx0cyB0byB0cnVlXHJcbiAgICovXHJcbiAgb3BlbkNhc2hEcmF3ZXI/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUmFzdGVyT2JqIGV4dGVuZHMgUHJpbnRPYmoge1xyXG4gIC8qKlxyXG4gICAqIEZvbnQgc2l6ZSBudW1iZXIsIGRlZmF1bHRzIHRvIDI1XHJcbiAgICovXHJcbiAgZm9udFNpemU/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcGVyIHdpZHRoIChVbml0czogRG90cykuIDIgaW5jaGVzOiAzODQsIDMgaW5jaGVzOiA1NzYsIDQgaW5jaGVzOiA4MzIsIEVTQ1BvcyAzIGluY2hlczogNTEyLCBEb3QgMyBpbmNoZXM6IDIxMC4gRGVmYXVsdHMgdG8gNTc2XHJcbiAgICovXHJcbiAgcGFwZXJXaWR0aD86IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlT2JqIHtcclxuICAvKipcclxuICAgKiBJbWFnZSBVUkkgdG8gcHJpbnQsIHRoaXMgY2FuIGJlIG9idGFpbmVkIHZpYSB0aGUgY2FtZXJhIG9yIHBob3RvIGxpYnJhcnkgb3IgYXMgYSBzdGF0aWMgcmVzb3VyY2Ugc2F2ZWQgb24gdGhlIHBob25lIG1lbW9yeVxyXG4gICAqL1xyXG4gIHVyaTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBJbWFnZSB3aWR0aCAoVW5pdHM6IERvdHMpIGRlZmF1bHRzIHRvIDU3NlxyXG4gICAqL1xyXG4gIHBhcGVyV2lkdGg/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqICBTZW5kcyBhIFBhcnRpYWxDdXRXaXRoRmVlZCBjb21tYW5kIHRvIHRoZSBwcmludGVyLCBkZWZhdWx0cyB0byB0cnVlXHJcbiAgICovXHJcbiAgY3V0UmVjZWlwdD86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIHNlbmRzIGEgYXBwZW5kUGVyaXBoZXJhbCBjb21tYW5kIHRvIHRoZSBwcmludGVyIGZvciBjaGFubmVscyBObzEgYW5kIE5vMiAtIERlZmF1bHRzIHRvIHRydWVcclxuICAgKi9cclxuICBvcGVuQ2FzaERyYXdlcj86IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQcmludENvbW1hbmQge1xyXG4gIC8qKlxyXG4gICAqIENoYXJhY3RoZXIgZW5jb2RpbmcgaXMgdXNlZCB0byBnZXRCeXRlIGRhdGEgZnJvbSBhbGwgc3Vic2VxdWVudCBjb21tYW5kcy4gRGVmYXVsdCAnVVMtQVNDSUknXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBEZWZpbmVkIGluIFN0YXJQUk5ULkVuY29kaW5nIG9yIHRoZSBFbmNvZGluZyBlbnVtLlxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRFbmNvZGluZzonVVMtQVNDSUknfVxyXG4gICAqL1xyXG4gIGFwcGVuZEVuY29kaW5nPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTZWxlY3QgY29tbWFuZCBvZiB0aGUgY29kZSBwYWdlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmRzIHByb3BlcnR5LlxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgRGVmaW5lZCBpbiBTdGFyUFJOVC5Db2RlUGFnZVR5cGUgb3IgdGhlIENvZGVQYWdlVHlwZSBlbnVtLlxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRDb2RlUGFnZTonQ1A4NTgnfVxyXG4gICAqL1xyXG4gIGFwcGVuZENvZGVQYWdlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEYXRhIChUZXh0KSBpcyBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHthcHBlbmQ6XCJTdGFyIENsb3RoaW5nIEJvdXRpcXVlXFxuMTIzIFN0YXIgUm9hZFxcbkNpdHksIFN0YXRlIDEyMzQ1XFxuXFxuXCJ9XHJcbiAgICovXHJcbiAgYXBwZW5kPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEYXRhIChUZXh0KSBpcyBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHthcHBlbmRSYXc6XCJTdGFyIENsb3RoaW5nIEJvdXRpcXVlXFxuMTIzIFN0YXIgUm9hZFxcbkNpdHksIFN0YXRlIDEyMzQ1XFxuXFxuXCJ9XHJcbiAgICovXHJcbiAgYXBwZW5kUmF3Pzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEYXRhIChDb21tYW5kKSBpcyBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFRha2VzIGFuIGFycmF5IG9mIGJ5dGVzLlxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCeXRlczpbMHg0OCwgMHg2NSwgMHg2YywgMHg2YywgMHg2ZiwgMHgyMCwgMHg1NywgMHg2ZiwgMHg3MiwgMHg2YywgMHg2NCwgMHgyZV19XHJcbiAgICovXHJcbiAgYXBwZW5kQnl0ZXM/OiBudW1iZXJbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSAoQ29tbWFuZCkgaXMgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBUYWtlcyBhbiBhcnJheSBvZiBieXRlcy5cclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kUmF3Qnl0ZXM6WzB4NDgsIDB4NjUsIDB4NmMsIDB4NmMsIDB4NmYsIDB4MjAsIDB4NTcsIDB4NmYsIDB4NzIsIDB4NmMsIDB4NjQsIDB4MmVdfVxyXG4gICAqL1xyXG4gIGFwcGVuZFJhd0J5dGVzPzogbnVtYmVyW107XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBjb21tYW5kIG9mIHRoZSBjaGFyYWN0ZXIgc3BhY2UgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIENoYXJhY3RlciBTcGFjcyAoVW5pdDogRG90cykgRXhhbXBsZTogNFxyXG4gICAqL1xyXG4gIGFwcGVuZENoYXJhY3RlclNwYWNlPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiAgU2VsZWN0IGNvbW1hbmQgb2YgdGhlIGVtcGhhc2lzIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHthcHBlbmRFbXBoYXNpczpcIlNBTEVcXG5cIn1cclxuICAgKi9cclxuICBhcHBlbmRFbXBoYXNpcz86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogIEVuYWJsZSBlbXBoYXNpcyBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7ZW5hYmxlRW1waGFzaXM6dHJ1ZX1cclxuICAgKi9cclxuICBlbmFibGVFbXBoYXNpcz86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqICBTZWxlY3QgY29tbWFuZCBvZiB0aGUgaW52ZXJ0IG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHthcHBlbmRJbnZlcnQ6XCJSZWZ1bmRzIGFuZCBFeGNoYW5nZXNcXG5cIn1cclxuICAgKi9cclxuICBhcHBlbmRJbnZlcnQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogIEVuYWJsZSBpbnZlcnQgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2VuYWJsZUludmVydDp0cnVlfVxyXG4gICAqL1xyXG4gIGVuYWJsZUludmVydD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogIFNlbGVjdCBjb21tYW5kIG9mIHRoZSB1bmRlciBsaW5lIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHthcHBlbmRVbmRlcmxpbmU6XCIzMCBkYXlzXCJ9XHJcbiAgICovXHJcbiAgYXBwZW5kVW5kZXJsaW5lPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqICBFbmFibGUgdW5kZXIgbGluZSBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7ZW5hYmxlVW5kZXJsaW5lOnRydWV9XHJcbiAgICovXHJcbiAgZW5hYmxlVW5kZXJsaW5lPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0IGNvbW1hbmQgb2YgdGhlIGludGVybmF0aW9uYWwgY2hhcmFjdGVyIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBEZWZpbmVkIGluIFN0YXJQUk5ULkludGVybmF0aW9uYWxUeXBlIG9yIHRoZSBJbnRlcm5hdGlvbmFsVHlwZSBlbnVtLlxyXG4gICAqICdVSycgfCAnVVNBJyB8ICdGcmFuY2UnIHwgJ0dlcm1hbnknIHwgJ0Rlbm1hcmsnIHwgJ1N3ZWRlbicgfCAnSXRhbHknIHwgJ1NwYWluJyB8ICdKYXBhbicgfCAnTm9yd2F5JyB8ICdEZW5tYXJrMicgfCAnU3BhaW4yJyB8ICdMYXRpbkFtZXJpY2EnIHwgJ0tvcmVhJyB8ICdJcmVsYW5kJyB8ICdMZWdhbCdcclxuICAgKiBFeGFtcGxlIHthcHBlbmRJbnRlcm5hdGlvbmFsOkludGVybmF0aW9uYWxUeXBlLlVLfVxyXG4gICAqL1xyXG4gIGFwcGVuZEludGVybmF0aW9uYWw/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIExpbmUgZmVlZCBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBQYXBlciBmZWVkIHVuaXRzIChVbml0czogTGluZXMpIEV4YW1wbGU6IDJcclxuICAgKi9cclxuICBhcHBlbmRMaW5lRmVlZD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVW5pdCBmZWVkIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFBhcGVyIGZlZWQgdW5pdHMgKFVuaXRzOiBEb3RzKSBFeGFtcGxlOiA2NFxyXG4gICAqL1xyXG4gIGFwcGVuZFVuaXRGZWVkPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgY29tbWFuZCBvZiB0aGUgbGluZSBzcGFjZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gTGluZSBzcGFjZXMgKFVuaXRzOiBEb3RzKSBFeGFtcGxlOiAzMlxyXG4gICAqL1xyXG4gIGFwcGVuZExpbmVTcGFjZT86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0IGNvbW1hbmQgb2YgdGhlIGZvbnQgc3R5bGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkZvbnRTdHlsZVR5cGUgb3IgdGhlIEZvbnRTdHlsZVR5cGUgZW51bS4gJ0EnIHwgJ0InXHJcbiAgICogRXhhbXBsZToge2FwcGVuZEZvbnRTdHlsZTpGb250U3R5bGVUeXBlLkF9XHJcbiAgICovXHJcbiAgYXBwZW5kRm9udFN0eWxlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBQYXBlciBjdXQgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cclxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQ3V0UGFwZXJBY3Rpb24gb3IgdGhlIEN1dFBhcGVyQWN0aW9uIGVudW0uICdGdWxsQ3V0JyB8ICdGdWxsQ3V0V2l0aEZlZWQnIHwgJ1BhcnRpYWxDdXQnIHwgJ1BhcnRpYWxDdXRXaXRoRmVlZCdcclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQ3V0UGFwZXI6Q3V0UGFwZXJBY3Rpb24uUGFydGlhbEN1dFdpdGhGZWVkfVxyXG4gICAqL1xyXG4gIGFwcGVuZEN1dFBhcGVyPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBCbGFjayBtYXJrIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkJsYWNrTWFya1R5cGUgb3IgdGhlIEJsYWNrTWFya1R5cGUgZW51bS4gJ1ZhbGlkJyB8ICdJbnZhbGlkJyB8ICdWYWxpZFdpdGhEZXRlY3Rpb24nXHJcbiAgICogRXhhbXBsZToge2FwcGVuZEJsYWNrTWFyazogQmxhY2tNYXJrVHlwZS5WYWxpZH1cclxuICAgKi9cclxuICBhcHBlbmRCbGFja01hcms/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFic29sdXRlIHBvc2l0aW9uIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIChVbml0OiBEb3RzKS4gU2VuZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBkYXRhIHByb3BlcnR5IHRvIGFwcGVuZCBhYnNvbHV0ZSBwb3NpdGlvbiBqdXN0IHRvIHRoYXQgc3RyaW5nXHJcbiAgICogRXhhbXBsZTE6IEFwcGVuZCBkYXRhIHdpdGggQWJzb2x1dGUgcG9zaXRpb24ge2FwcGVuZEFic29sdXRlUG9zaXRpb246NDAsIGRhdGE6IFwiVGV4dCB3aXRoIGFic29sdXRlIHBvc2l0aW9uXCJ9XHJcbiAgICogRXhhbXBsZTI6IEFwcGVuZCBhYnNvbHV0ZSBwb3NpdGlvbiB0byBzdWJzZXF1ZW50IGNvbW1hbmRzOiB7YXBwZW5kQWJzb2x1dGVQb3NpdGlvbjo0MH1cclxuICAgKi9cclxuICBhcHBlbmRBYnNvbHV0ZVBvc2l0aW9uPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBBbGlnbm1lbnQgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gU2VuZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBkYXRhIHByb3BlcnR5IHRvIGFwcGVuZCBhbGlnbm1lbnQgcG9zaXRpb24ganVzdCB0byB0aGF0IHN0cmluZ1xyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5BbGlnbm1lbnRQb3NpdGlvbiBvciB0aGUgQWxpZ25tZW50UG9zaXRpb24gZW51bS4gJ0xlZnQnIHwgJ0NlbnRlcicgfCAnUmlnaHQnLlxyXG4gICAqIEV4YW1wbGUxIEFwcGVuZCBkYXRhIHdpdGggQWxpZ25tZW50IHBvc2l0aW9uOiB7YXBwZW5kQWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlciwgZGF0YTogXCJUZXh0IHdpdGggY2VudGVyZWQgcG9zaXRpb25cIn1cclxuICAgKiBFeGFtcGxlMiBBcHBlbmQgYWJzb2x1dGUgcG9zaXRpb24gdG8gc3Vic2VxdWVudCBjb21tYW5kczoge2FwcGVuZEFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXJ9XHJcbiAgICovXHJcbiAgYXBwZW5kQWxpZ25tZW50Pzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBIb3Jpem9udGFsIHRhYiBzZXQvY2xlYXIgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gKE9ubHkgd29ya3MgZm9yIGNlcnRhaW4gcHJpbnRlciBtb2RlbHMsIGNoZWNrIHRoZSBzdGFyU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHMpXHJcbiAgICogQXJyYXkgb2YgaG9yaXpvbnRhbCB0YWIgcG9zaXRpb25zIChVbml0czogQU5LIGNoYXJhY3RlciBwaXRjaCkuIFNwZWNpZnlpbmcgZW1wdHkgYXJyYXkgZGVsZXRlcyBhbGwgY3VycmVudGx5IHNldCBob3Jpem9udGFsIHRhYiBwb3NpdGlvbnMuXHJcbiAgICogRXhhbXBsZToge2FwcGVuZEhvcml6b250YWxUYWJQb3NpdGlvbjpbMTUsIDM1XX1cclxuICAgKiBEZWxldGUgcG9zaXRpb25zIEV4YW1wbGU6IHthcHBlbmRIb3Jpem9udGFsVGFiUG9zaXRpb246W119XHJcbiAgICovXHJcbiAgYXBwZW5kSG9yaXpvbnRhbFRhYlBvc2l0aW9uPzogbnVtYmVyW107XHJcblxyXG4gIC8qKlxyXG4gICAqIFByaW50IGNvbW1hbmQgb2YgdGhlIGxvZ28gaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFRoZSBsb2dvIGhhcyB0byBiZSB1cGxvYWRlZCB0byB0aGUgcHJpbnRlciB1c2luZyB0aGUgU3RhciBQcmludCB1dGlsaXR5LlxyXG4gICAqIFNlbmQgaW4gY29uanVjdGlvbiB3aXRoIHRoZSBsb2dvU2l6ZSBwcm9wZXJ0eSB0byBzZXQgdGhlIGxvZ28gc2l6ZVxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRMb2dvOjF9XHJcbiAgICogRXhhbXBsZSB3aXRoIExvZ29TaXplOiB7YXBwZW5kTG9nbzoxLCBsb2dvU2l6ZTpMb2dvU2l6ZS5Eb3VibGVXaWR0aERvdWJsZUhlaWdodH1cclxuICAgKi9cclxuICBhcHBlbmRMb2dvPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZExvZ28gY29tbWFuZC5cclxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuTG9nb1NpemUgb3IgdGhlIExvZ29TaXplIGVudW0uICdOb3JtYWwnIHwgJ0RvdWJsZVdpZHRoJyB8ICdEb3VibGVIZWlnaHQnIHwgJ0RvdWJsZVdpZHRoRG91YmxlSGVpZ2h0JztcclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kTG9nbzoxLCBsb2dvU2l6ZTpMb2dvU2l6ZS5Eb3VibGVXaWR0aERvdWJsZUhlaWdodH1cclxuICAgKi9cclxuICBsb2dvU2l6ZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogUHJpbnQgY29tbWFuZCBvZiB0aGUgYmFyY29kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cclxuICAgKiBBZGRpdGlvbmFsIFByb3BlcnRpZXM6IEJhcmNvZGVTeW1ib2xvZ3ksIEJhcmNvZGVXaWR0aCwgaGVpZ2h0LCBocmksIGFic29sdXRlUG9zaXRpb24sIGFsaWdubWVudC5cclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTpcIntCU3RhclwiLCBCYXJjb2RlU3ltYm9sb2d5OkJhcmNvZGVTeW1ib2xvZ3kuQ29kZTEyOCwgQmFyY29kZVdpZHRoOkJhcmNvZGVXaWR0aC5Nb2RlMiwgaGVpZ2h0OjQwLCBocmk6dHJ1ZSB9XHJcbiAgICogRXhhbXBsZSB3aXRoIGFic29sdXRlUG9zaXRpb246IHthcHBlbmRCYXJjb2RlOlwie0JTdGFyXCIsIEJhcmNvZGVTeW1ib2xvZ3k6QmFyY29kZVN5bWJvbG9neS5Db2RlMTI4LCBCYXJjb2RlV2lkdGg6QmFyY29kZVdpZHRoLk1vZGUyLCBoZWlnaHQ6NDAsIGhyaTp0cnVlLCBhYnNvbHV0ZVBvc2l0aW9uOjQwIH1cclxuICAgKiBFeGFtcGxlIHdpdGggYWxpZ25tZW50OnthcHBlbmRCYXJjb2RlOlwie0JTdGFyXCIsIEJhcmNvZGVTeW1ib2xvZ3k6QmFyY29kZVN5bWJvbG9neS5Db2RlMTI4LCBCYXJjb2RlV2lkdGg6QmFyY29kZVdpZHRoLk1vZGUyLCBoZWlnaHQ6NDAsIGhyaTp0cnVlLCBhbGlnbm1lbnQ6YWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlciB9XHJcbiAgICovXHJcbiAgYXBwZW5kQmFyY29kZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCYXJjb2RlIGNvbW1hbmQuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkJhcmNvZGVTeW1ib2xvZ3kgb3IgdGhlIEJhcmNvZGVTeW1ib2xvZ3kgZW51bS5cclxuICAgKiAnQ29kZTEyOCcgfCAnQ29kZTM5JyB8ICdDb2RlOTMnIHwgJ0lURicgfCAnSkFOOCcgfCAnSkFOMTMnIHwgJ05XNycgfCAnVVBDQScgfCAnVVBDRScgfFxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBCYXJjb2RlU3ltYm9sb2d5OkJhcmNvZGVTeW1ib2xvZ3kuQ29kZTEyOH1cclxuICAgKi9cclxuICBCYXJjb2RlU3ltYm9sb2d5Pzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZC5cclxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQmFyY29kZVdpZHRoIG9yIHRoZSBCYXJjb2RlV2lkdGggZW51bS5cclxuICAgKiBNb2RlMSB8IE1vZGUyIHwgTW9kZTMgfCBNb2RlNCB8IE1vZGU1IHwgTW9kZTYgfCBNb2RlNyB8IE1vZGU4IHwgTW9kZTlcclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgQmFyY29kZVdpZHRoOkJhcmNvZGVXaWR0aC5Nb2RlMn1cclxuICAgKi9cclxuICBCYXJjb2RlV2lkdGg/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kLlxyXG4gICAqIFVuZGVyLWJhciBjaGFyYWN0ZXJzLiB0cnVlID0gVmFsaWQsIGZhbHNlID0gSW52YWxpZFxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBocmk6dHJ1ZX1cclxuICAgKi9cclxuICBocmk/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZCBvciB0aGUgYXBwZW5kTXVsdGlwbGUgY29tbWFuZCAoVW5pdHM6RG90cylcclxuICAgKiBhcHBlbmRCYXJjb2RlIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBoZWlnaHQ6NDB9XHJcbiAgICogYXBwZW5kTXVsdGlwbGU6IHthcHBlbmRNdWx0aXBsZTondGV4dCB0byBwcmludCcsIGhlaWdodDo0MH1cclxuICAgKi9cclxuICBoZWlnaHQ/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQgb3IgdGhlIGFwcGVuZE11bHRpcGxlIGNvbW1hbmQgKFVuaXRzOkRvdHMpXHJcbiAgICogYXBwZW5kQml0bWFwIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCB3aWR0aDo1NzZ9XHJcbiAgICogYXBwZW5kTXVsdGlwbGU6IHthcHBlbmRNdWx0aXBsZTondGV4dCB0byBwcmludCcsIHdpZHRoOjQwfVxyXG4gICAqL1xyXG4gIHdpZHRoPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJpdG1hcCBjb21tYW5kLCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kLCBvciB0aGUgYXBwZW5kUXJDb2RlIGNvbW1hbmQgKFVuaXRzOkRvdHMpXHJcbiAgICogYXBwZW5kQml0bWFwIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCBhYnNvbHV0ZVBvc2l0aW9uOjQwfS5cclxuICAgKiBhcHBlbmRCYXJjb2RlIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBhYnNvbHV0ZVBvc2l0aW9uOjQwfS5cclxuICAgKiBhcHBlbmRRckNvZGUgRXhhbXBsZToge2FwcGVuZFFyQ29kZTone0JTdGFyJywgYWJzb2x1dGVQb3NpdGlvbjo0MH0uXHJcbiAgICovXHJcbiAgYWJzb2x1dGVQb3NpdGlvbj86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZCwgdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZCwgb3IgdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kIChVbml0czpEb3RzKVxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5BbGlnbm1lbnRQb3NpdGlvbiBvciB0aGUgQWxpZ25tZW50UG9zaXRpb24gZW51bS4gJ0xlZnQnIHwgJ0NlbnRlcicgfCAnUmlnaHQnLlxyXG4gICAqIGFwcGVuZEJpdG1hcCBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgYWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlcn0uXHJcbiAgICogYXBwZW5kQmFyY29kZSBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgYWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlcn0uXHJcbiAgICogYXBwZW5kUXJDb2RlIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIGFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXJ9LlxyXG4gICAqL1xyXG4gIGFsaWdubWVudD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0IGNvbW1hbmQgb2YgdGhlIG11bHRpcGxlIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzOiB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXJcclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kTXVsdGlwbGU6XCIgICAkMTU2Ljk1XFxuXCIsIHdpZHRoOjIsIGhlaWdodDoyfS5cclxuICAgKi9cclxuICBhcHBlbmRNdWx0aXBsZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRW5hYmxlIG11bHRpcGxlIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzOiB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXJcclxuICAgKiBFeGFtcGxlOiB7ZW5hYmxlTXVsdGlwbGU6dHJ1ZSwgd2lkdGg6MiwgaGVpZ2h0OjJ9XHJcbiAgICogRGlzYWJsZSBFeGFtcGxlOiB7ZW5hYmxlTXVsdGlwbGU6ZmFsc2V9XHJcbiAgICovXHJcbiAgZW5hYmxlTXVsdGlwbGU/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBQcmludCBjb21tYW5kIG9mIHRoZSBRUiBjb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxyXG4gICAqIEFkZGl0aW9uYWwgUHJvcGVydGllczogUXJDb2RlTW9kZWwsIFFyQ29kZUxldmVsLCBjZWxsLCBhYnNvbHV0ZVBvc2l0aW9uLCBhbGlnbm1lbnQuXHJcbiAgICogRXhhbXBsZToge2FwcGVuZFFyQ29kZTpcIntCU3RhclwiLCBRckNvZGVNb2RlbDpcIk5vMlwiLCBRckNvZGVMZXZlbDpcIkxcIiwgY2VsbDogOH0uXHJcbiAgICogRXhhbXBsZSB3aXRoIGFic29sdXRlUG9zaXRpb246IHthcHBlbmRRckNvZGU6XCJ7QlN0YXJcIiwgUXJDb2RlTW9kZWw6XCJObzJcIiwgUXJDb2RlTGV2ZWw6XCJMXCIsIGNlbGw6IDgsIGFic29sdXRlUG9zaXRpb246IDQwIH0uXHJcbiAgICogRXhhbXBsZSB3aXRoIGFsaWdubWVudDoge2FwcGVuZFFyQ29kZTpcIntCU3RhclwiLCBRckNvZGVNb2RlbDpcIk5vMlwiLCBRckNvZGVMZXZlbDpcIkxcIiwgY2VsbDogOCwgYWxpZ25tZW50OlwiQ2VudGVyXCIgfS5cclxuICAgKi9cclxuICBhcHBlbmRRckNvZGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kUXJDb2RlIGNvbW1hbmQuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULlFyQ29kZU1vZGVsIG9yIHRoZSBRckNvZGVNb2RlbCBlbnVtLiAnTm8xJyB8ICdObzInIERlZmF1bHQgJ05vMidcclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOid7QlN0YXInLCBRckNvZGVNb2RlbDpRckNvZGVNb2RlbC5ObzF9XHJcbiAgICovXHJcbiAgUXJDb2RlTW9kZWw/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kUXJDb2RlIGNvbW1hbmQuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULlFyQ29kZUxldmVsIG9yIHRoZSBRckNvZGVMZXZlbCBlbnVtLiAnTm8xJyB8ICdObzInLiBEZWZhdWx0ICdIJ1xyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIFFyQ29kZUxldmVsOlFyQ29kZUxldmVsLkh9XHJcbiAgICovXHJcbiAgUXJDb2RlTGV2ZWw/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kUXJDb2RlIGNvbW1hbmQuIFFSQ29kZSBDZWxsIHNpemUuIERlZmF1bHQgNC5cclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOid7QlN0YXInLCBjZWxsOjh9XHJcbiAgICovXHJcbiAgY2VsbD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJpbnQgY29tbWFuZCBvZiB0aGUgYml0bWFwIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBUYWtlcyBhIHN0cmluZyBpbWFnZSBVUklcclxuICAgKiB0aGlzIGNhbiBiZSBvYnRhaW5lZCB2aWEgdGhlIGNhbWVyYSBvciBwaG90byBsaWJyYXJ5IG9yIGFzIGEgc3RhdGljIHJlc291cmNlIHNhdmVkIG9uIHRoZSBwaG9uZSBtZW1vcnkuXHJcbiAgICogQWRkaXRpb25hbCBQcm9wZXJ0aWVzOiBkaWZmdXNpb24sIHdpZHRoLCBib3RoU2NhbGUsIHJvdGF0aW9uLCBhYnNvbHV0ZVBvc2l0aW9uLCBhbGlnbm1lbnQuXHJcbiAgICogRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIGRpZmZ1c2lvbjogdHJ1ZSwgd2lkdGg6NTc2LCBib3RoU2NhbGU6IHRydWV9XHJcbiAgICogRXhhbXBsZSB3aXRoIGFic29sdXRlUG9zaXRpb246IHthcHBlbmRCaXRtYXA6dXJpLCBkaWZmdXNpb246IHRydWUsIHdpZHRoOjU3NiwgYm90aFNjYWxlOiB0cnVlLCBhYnNvbHV0ZVBvc2l0aW9uOiA0MCB9LlxyXG4gICAqIEV4YW1wbGUgd2l0aCBhbGlnbm1lbnQ6IHthcHBlbmRCaXRtYXA6dXJpLCBkaWZmdXNpb246IHRydWUsIHdpZHRoOjU3NiwgYm90aFNjYWxlOiB0cnVlLCBhbGlnbm1lbnQ6XCJDZW50ZXJcIiB9LlxyXG4gICAqL1xyXG4gIGFwcGVuZEJpdG1hcD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZC4gUmFuZG9tIGRpdGhlcjogdHJ1ZSA9IFZhbGlkLCBmYWxzZSA9IEludmFsaWQuIERlZmF1bHQgdHJ1ZS5cclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgZGlmZnVzaW9uOiBmYWxzZSB9XHJcbiAgICovXHJcbiAgZGlmZnVzaW9uPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZC4gSGVpZ2h0IGlzIGNoYW5nZWQgYWNjb3JkaW5nIHRvIHRoZSBjb252ZXJzaW9uIHJhdGUgb2YgdGhlIHdpZHRoIHByb3BlcnR5LlxyXG4gICAqIHRydWUgPSBWYWxpZCwgZmFsc2UgPSBJbnZhbGlkLiBEZWZhdWx0IHRydWUuXHJcbiAgICogRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIGJvdGhTY2FsZTogdHJ1ZSB9XHJcbiAgICovXHJcbiAgYm90aFNjYWxlPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZC5cclxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQml0bWFwQ29udmVydGVyUm90YXRpb24gb3IgdGhlIEJpdG1hcENvbnZlcnRlclJvdGF0aW9uIGVudW0uXHJcbiAgICogJ05vcm1hbCcgfCAnTGVmdDkwJyB8ICdSaWdodDkwJyB8ICdSb3RhdGUxODAnXHJcbiAgICogRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIHJvdGF0aW9uOiBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbi5MZWZ0OTAgfVxyXG4gICAqL1xyXG4gIHJvdGF0aW9uPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBzZW5kcyBhIGFwcGVuZFBlcmlwaGVyYWwgY29tbWFuZCB0byB0aGUgcHJpbnRlciBmb3IgY2hhbm5lbCBudW1iZXI6IEV4YW1wbGU6IDEgPSBObzEsIDIgPSBObzJcclxuICAgKi9cclxuICBvcGVuQ2FzaERyYXdlcj86IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEVtdWxhdGlvbiBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBlbnVtIEVtdWxhdGlvbiB7XHJcbiAgLyoqIG1QT1AsIFNNLUwyMDAsIFNNLUwzMDAsIFNNLVMyMTBpLCBTTS1TMjIwaSwgU00tUzIzMGksIFNNLVQzMDBpL1QzMDAsIFNNLVQ0MDBpICovXHJcbiAgU3RhclBSTlQgPSAnU3RhclBSTlQnLFxyXG4gIC8qKiBTTS1MMjAwLCBTTS1MMzAwICovXHJcbiAgU3RhclBSTlRMID0gJ1N0YXJQUk5UTCcsXHJcbiAgLyoqIEZWUDEwLCBUU1A2NTBJSSwgVFNQNzAwSUksIFRTUDgwMElJICovXHJcbiAgU3RhckxpbmUgPSAnU3RhckxpbmUnLFxyXG4gIC8qKiBUU1AxMDAgKi9cclxuICBTdGFyR3JhcGhpYyA9ICdTdGFyR3JhcGhpYycsXHJcbiAgLyoqIEJTQzEwICovXHJcbiAgRXNjUG9zID0gJ0VzY1BvcycsXHJcbiAgLyoqIFNNLVMyMTBpLCBTTS1TMjIwaSwgU00tUzIzMGksIFNNLVQzMDBpL1QzMDAsIFNNLVQ0MDBpICovXHJcbiAgRXNjUG9zTW9iaWxlID0gJ0VzY1Bvc01vYmlsZScsXHJcbiAgLyoqIFNQNzAwICovXHJcbiAgU3RhckRvdEltcGFjdCA9ICdTdGFyRG90SW1wYWN0JyxcclxufVxyXG5cclxuLyoqXHJcbiAqIEVuY29kaW5nIGNvbnN0YW50c1xyXG4gKi9cclxuZXhwb3J0IGVudW0gRW5jb2Rpbmcge1xyXG4gIC8qKiBFbmdsaXNoICovXHJcbiAgVVNBU0NJSSA9ICdVUy1BU0NJSScsXHJcbiAgLyoqIEZyZW5jaCwgR2VybWFuLCBQb3J0dWd1ZXNlLCBTcGFuaXNoICovXHJcbiAgV2luZG93czEyNTIgPSAnV2luZG93cy0xMjUyJyxcclxuICAvKiogSmFwYW5lc2UgKi9cclxuICBTaGlmdEpJUyA9ICdTaGlmdC1KSVMnLFxyXG4gIC8qKiBSdXNzaWFuICovXHJcbiAgV2luZG93czEyNTEgPSAnV2luZG93cy0xMjUxJyxcclxuICAvKiogU2ltcGxpZmllZCBDaGluZXNlICovXHJcbiAgR0IyMzEyID0gJ0dCMjMxMicsXHJcbiAgLyoqIFRyYWRpdGlvbmFsIENoaW5lc2UgKi9cclxuICBCaWc1ID0gJ0JpZzUnLFxyXG4gIC8qKiBVRlQ4ICovXHJcbiAgVVRGOCA9ICdVVEYtOCcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb2RlUGFnZVR5cGUgY29uc3RhbnRzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBDb2RlUGFnZVR5cGUge1xyXG4gIENQNzM3ID0gJ0NQNzM3JyxcclxuICBDUDc3MiA9ICdDUDc3MicsXHJcbiAgQ1A3NzQgPSAnQ1A3NzQnLFxyXG4gIENQODUxID0gJ0NQODUxJyxcclxuICBDUDg1MiA9ICdDUDg1MicsXHJcbiAgQ1A4NTUgPSAnQ1A4NTUnLFxyXG4gIENQODU3ID0gJ0NQODU3JyxcclxuICBDUDg1OCA9ICdDUDg1OCcsXHJcbiAgQ1A4NjAgPSAnQ1A4NjAnLFxyXG4gIENQODYxID0gJ0NQODYxJyxcclxuICBDUDg2MiA9ICdDUDg2MicsXHJcbiAgQ1A4NjMgPSAnQ1A4NjMnLFxyXG4gIENQODY0ID0gJ0NQODY0JyxcclxuICBDUDg2NSA9ICdDUDg2NScsXHJcbiAgQ1A4NjkgPSAnQ1A4NjknLFxyXG4gIENQODc0ID0gJ0NQODc0JyxcclxuICBDUDkyOCA9ICdDUDkyOCcsXHJcbiAgQ1A5MzIgPSAnQ1A5MzInLFxyXG4gIENQOTk5ID0gJ0NQOTk5JyxcclxuICBDUDEwMDEgPSAnQ1AxMDAxJyxcclxuICBDUDEyNTAgPSAnQ1AxMjUwJyxcclxuICBDUDEyNTEgPSAnQ1AxMjUxJyxcclxuICBDUDEyNTIgPSAnQ1AxMjUyJyxcclxuICBDUDIwMDEgPSAnQ1AyMDAxJyxcclxuICBDUDMwMDEgPSAnQ1AzMDAxJyxcclxuICBDUDMwMDIgPSAnQ1AzMDAyJyxcclxuICBDUDMwMTEgPSAnQ1AzMDExJyxcclxuICBDUDMwMTIgPSAnQ1AzMDEyJyxcclxuICBDUDMwMjEgPSAnQ1AzMDIxJyxcclxuICBDUDMwNDEgPSAnQ1AzMDQxJyxcclxuICBDUDM4NDAgPSAnQ1AzODQwJyxcclxuICBDUDM4NDEgPSAnQ1AzODQxJyxcclxuICBDUDM4NDMgPSAnQ1AzODQzJyxcclxuICBDUDM4NDUgPSAnQ1AzODQ1JyxcclxuICBDUDM4NDYgPSAnQ1AzODQ2JyxcclxuICBDUDM4NDcgPSAnQ1AzODQ3JyxcclxuICBDUDM4NDggPSAnQ1AzODQ4JyxcclxuICBVVEY4ID0gJ1VURjgnLFxyXG4gIEJsYW5rID0gJ0JsYW5rJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVybmF0aW9uYWxUeXBlIGNvbnN0YW50c1xyXG4gKi9cclxuZXhwb3J0IGVudW0gSW50ZXJuYXRpb25hbFR5cGUge1xyXG4gIFVLID0gJ1VLJyxcclxuICBVU0EgPSAnVVNBJyxcclxuICBGcmFuY2UgPSAnRnJhbmNlJyxcclxuICBHZXJtYW55ID0gJ0dlcm1hbnknLFxyXG4gIERlbm1hcmsgPSAnRGVubWFyaycsXHJcbiAgU3dlZGVuID0gJ1N3ZWRlbicsXHJcbiAgSXRhbHkgPSAnSXRhbHknLFxyXG4gIFNwYWluID0gJ1NwYWluJyxcclxuICBKYXBhbiA9ICdKYXBhbicsXHJcbiAgTm9yd2F5ID0gJ05vcndheScsXHJcbiAgRGVubWFyazIgPSAnRGVubWFyazInLFxyXG4gIFNwYWluMiA9ICdTcGFpbjInLFxyXG4gIExhdGluQW1lcmljYSA9ICdMYXRpbkFtZXJpY2EnLFxyXG4gIEtvcmVhID0gJ0tvcmVhJyxcclxuICBJcmVsYW5kID0gJ0lyZWxhbmQnLFxyXG4gIExlZ2FsID0gJ0xlZ2FsJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIEZvbnRTdHlsZVR5cGUgY29uc3RhbnRzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRm9udFN0eWxlVHlwZSB7XHJcbiAgLyoqIEZvbnQtQSAoMTIgeCAyNCBkb3RzKSAvIFNwZWNpZnkgNyB4IDkgZm9udCAoaGFsZiBkb3RzKSAqL1xyXG4gIEEgPSAnQScsXHJcbiAgLyoqIEZvbnQtQiAoOSB4IDI0IGRvdHMpIC8gU3BlY2lmeSA1IHggOSBmb250ICgyUC0xKSAqL1xyXG4gIEIgPSAnQicsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDdXRQYXBlckFjdGlvbiBjb25zdGFudHMuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBDdXRQYXBlckFjdGlvbiB7XHJcbiAgRnVsbEN1dCA9ICdGdWxsQ3V0JyxcclxuICBGdWxsQ3V0V2l0aEZlZWQgPSAnRnVsbEN1dFdpdGhGZWVkJyxcclxuICBQYXJ0aWFsQ3V0ID0gJ1BhcnRpYWxDdXQnLFxyXG4gIFBhcnRpYWxDdXRXaXRoRmVlZCA9ICdQYXJ0aWFsQ3V0V2l0aEZlZWQnLFxyXG59XHJcblxyXG4vKipcclxuICogQmxhY2tNYXJrVHlwZSBjb25zdGFudHMuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBCbGFja01hcmtUeXBlIHtcclxuICBWYWxpZCA9ICdWYWxpZCcsXHJcbiAgSW52YWxpZCA9ICdJbnZhbGlkJyxcclxuICBWYWxpZFdpdGhEZXRlY3Rpb24gPSAnVmFsaWRXaXRoRGV0ZWN0aW9uJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIExvZ29TaXplIGNvbnN0YW50c1xyXG4gKi9cclxuZXhwb3J0IGVudW0gTG9nb1NpemUge1xyXG4gIE5vcm1hbCA9ICdOb3JtYWwnLFxyXG4gIERvdWJsZVdpZHRoID0gJ0RvdWJsZVdpZHRoJyxcclxuICBEb3VibGVIZWlnaHQgPSAnRG91YmxlSGVpZ2h0JyxcclxuICBEb3VibGVXaWR0aERvdWJsZUhlaWdodCA9ICdEb3VibGVXaWR0aERvdWJsZUhlaWdodCcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbGlnbm1lbnRQb3NpdGlvbiBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBlbnVtIEFsaWdubWVudFBvc2l0aW9uIHtcclxuICBMZWZ0ID0gJ0xlZnQnLFxyXG4gIENlbnRlciA9ICdDZW50ZXInLFxyXG4gIFJpZ2h0ID0gJ1JpZ2h0JyxcclxufVxyXG5cclxuLyoqXHJcbiAqIEJhcmNvZGVTeW1ib2xvZ3kgY29uc3RhbnRzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBCYXJjb2RlU3ltYm9sb2d5IHtcclxuICBDb2RlMTI4ID0gJ0NvZGUxMjgnLFxyXG4gIENvZGUzOSA9ICdDb2RlMzknLFxyXG4gIENvZGU5MyA9ICdDb2RlOTMnLFxyXG4gIElURiA9ICdJVEYnLFxyXG4gIEpBTjggPSAnSkFOOCcsXHJcbiAgSkFOMTMgPSAnSkFOMTMnLFxyXG4gIE5XNyA9ICdOVzcnLFxyXG4gIFVQQ0EgPSAnVVBDQScsXHJcbiAgVVBDRSA9ICdVUENFJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIEJhcmNvZGVXaWR0aCBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBlbnVtIEJhcmNvZGVXaWR0aCB7XHJcbiAgTW9kZTEgPSAnTW9kZTEnLFxyXG4gIE1vZGUyID0gJ01vZGUyJyxcclxuICBNb2RlMyA9ICdNb2RlMycsXHJcbiAgTW9kZTQgPSAnTW9kZTQnLFxyXG4gIE1vZGU1ID0gJ01vZGU1JyxcclxuICBNb2RlNiA9ICdNb2RlNicsXHJcbiAgTW9kZTcgPSAnTW9kZTcnLFxyXG4gIE1vZGU4ID0gJ01vZGU4JyxcclxuICBNb2RlOSA9ICdNb2RlOScsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBRckNvZGVNb2RlbCBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBlbnVtIFFyQ29kZU1vZGVsIHtcclxuICBObzEgPSAnTm8xJyxcclxuICBObzIgPSAnTm8yJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIFFyQ29kZUxldmVsIGNvbnN0YW50c1xyXG4gKi9cclxuZXhwb3J0IGVudW0gUXJDb2RlTGV2ZWwge1xyXG4gIEggPSAnSCcsXHJcbiAgTCA9ICdMJyxcclxuICBNID0gJ00nLFxyXG4gIFEgPSAnUScsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbiBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBlbnVtIEJpdG1hcENvbnZlcnRlclJvdGF0aW9uIHtcclxuICBOb3JtYWwgPSAnTm9ybWFsJyxcclxuICBMZWZ0OTAgPSAnTGVmdDkwJyxcclxuICBSaWdodDkwID0gJ1JpZ2h0OTAnLFxyXG4gIFJvdGF0ZTE4MCA9ICdSb3RhdGUxODAnLFxyXG59XHJcblxyXG4vKipcclxuICogUHVzaCBhIG5ldyBQcmludENvbW1hbmQgb2JqZWN0IHRvIHRoZSBhcnJheSBmb3IgYSBzZXBhcmF0ZSBpbnN0cnVjdGlvbiB0byB0aGUgcHJpbnRlci4gRXhhbXBsZSBbe2FwcGVuZDpcInRleHRcIn0sIHtcIm9wZW5DYXNoRHJhd2VyOiAxXCJ9XVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDb21tYW5kc0FycmF5IGV4dGVuZHMgQXJyYXk8UHJpbnRDb21tYW5kPiB7fVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFN0YXJQUk5UXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiAqIElvbmljIE5hdGl2ZSB3cmFwcGVycyBmb3IgdGhlIHN0YXJwcm50IGNvcmRvdmEgcGx1Z2luIGZvciBTdGFyIE1pY3JvbmljcyBCbHVldG9vdGgvTEFOIHByaW50ZXJzXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFN0YXJQUk5UIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGFyLXBybnQvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzdGFycHJudDogU3RhclBSTlQpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5zdGFycHJudC5wb3J0RGlzY292ZXJ5KCdhbGwnKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnU3RhclBSTlQnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXN0YXJwcm50JywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnc3RhcnBybnQnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hdWN0aWZlcmEtam9zZWQvc3RhcnBybnQnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGFyUFJOVCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDb25zdGFudCBmb3IgRW11bGF0aW9uXHJcbiAgICovXHJcbiAgRW11bGF0aW9uID0ge1xyXG4gICAgU3RhclBSTlQ6ICdTdGFyUFJOVCcsXHJcbiAgICBTdGFyUFJOVEw6ICdTdGFyUFJOVEwnLFxyXG4gICAgU3RhckxpbmU6ICdTdGFyTGluZScsXHJcbiAgICBTdGFyR3JhcGhpYzogJ1N0YXJHcmFwaGljJyxcclxuICAgIEVzY1BvczogJ0VzY1BvcycsXHJcbiAgICBFc2NQb3NNb2JpbGU6ICdFc2NQb3NNb2JpbGUnLFxyXG4gICAgU3RhckRvdEltcGFjdDogJ1N0YXJEb3RJbXBhY3QnLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBFbmNvZGluZ1xyXG4gICAqL1xyXG4gIEVuY29kaW5nID0ge1xyXG4gICAgVVNBU0NJSTogJ1VTLUFTQ0lJJyxcclxuICAgIFdpbmRvd3MxMjUyOiAnV2luZG93cy0xMjUyJyxcclxuICAgIFNoaWZ0SklTOiAnU2hpZnQtSklTJyxcclxuICAgIFdpbmRvd3MxMjUxOiAnV2luZG93cy0xMjUxJyxcclxuICAgIEdCMjMxMjogJ0dCMjMxMicsXHJcbiAgICBCaWc1OiAnQmlnNScsXHJcbiAgICBVVEY4OiAnVVRGLTgnLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvZGVQYWdlVHlwZSBjb25zdGFudHNcclxuICAgKi9cclxuICBDb2RlUGFnZVR5cGUgPSB7XHJcbiAgICBDUDczNzogJ0NQNzM3JyxcclxuICAgIENQNzcyOiAnQ1A3NzInLFxyXG4gICAgQ1A3NzQ6ICdDUDc3NCcsXHJcbiAgICBDUDg1MTogJ0NQODUxJyxcclxuICAgIENQODUyOiAnQ1A4NTInLFxyXG4gICAgQ1A4NTU6ICdDUDg1NScsXHJcbiAgICBDUDg1NzogJ0NQODU3JyxcclxuICAgIENQODU4OiAnQ1A4NTgnLFxyXG4gICAgQ1A4NjA6ICdDUDg2MCcsXHJcbiAgICBDUDg2MTogJ0NQODYxJyxcclxuICAgIENQODYyOiAnQ1A4NjInLFxyXG4gICAgQ1A4NjM6ICdDUDg2MycsXHJcbiAgICBDUDg2NDogJ0NQODY0JyxcclxuICAgIENQODY1OiAnQ1A4NjUnLFxyXG4gICAgQ1A4Njk6ICdDUDg2OScsXHJcbiAgICBDUDg3NDogJ0NQODc0JyxcclxuICAgIENQOTI4OiAnQ1A5MjgnLFxyXG4gICAgQ1A5MzI6ICdDUDkzMicsXHJcbiAgICBDUDk5OTogJ0NQOTk5JyxcclxuICAgIENQMTAwMTogJ0NQMTAwMScsXHJcbiAgICBDUDEyNTA6ICdDUDEyNTAnLFxyXG4gICAgQ1AxMjUxOiAnQ1AxMjUxJyxcclxuICAgIENQMTI1MjogJ0NQMTI1MicsXHJcbiAgICBDUDIwMDE6ICdDUDIwMDEnLFxyXG4gICAgQ1AzMDAxOiAnQ1AzMDAxJyxcclxuICAgIENQMzAwMjogJ0NQMzAwMicsXHJcbiAgICBDUDMwMTE6ICdDUDMwMTEnLFxyXG4gICAgQ1AzMDEyOiAnQ1AzMDEyJyxcclxuICAgIENQMzAyMTogJ0NQMzAyMScsXHJcbiAgICBDUDMwNDE6ICdDUDMwNDEnLFxyXG4gICAgQ1AzODQwOiAnQ1AzODQwJyxcclxuICAgIENQMzg0MTogJ0NQMzg0MScsXHJcbiAgICBDUDM4NDM6ICdDUDM4NDMnLFxyXG4gICAgQ1AzODQ1OiAnQ1AzODQ1JyxcclxuICAgIENQMzg0NjogJ0NQMzg0NicsXHJcbiAgICBDUDM4NDc6ICdDUDM4NDcnLFxyXG4gICAgQ1AzODQ4OiAnQ1AzODQ4JyxcclxuICAgIFVURjg6ICdVVEY4JyxcclxuICAgIEJsYW5rOiAnQmxhbmsnLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBJbnRlcm5hdGlvbmFsVHlwZVxyXG4gICAqL1xyXG4gIEludGVybmF0aW9uYWxUeXBlID0ge1xyXG4gICAgVUs6ICdVSycsXHJcbiAgICBVU0E6ICdVU0EnLFxyXG4gICAgRnJhbmNlOiAnRnJhbmNlJyxcclxuICAgIEdlcm1hbnk6ICdHZXJtYW55JyxcclxuICAgIERlbm1hcms6ICdEZW5tYXJrJyxcclxuICAgIFN3ZWRlbjogJ1N3ZWRlbicsXHJcbiAgICBJdGFseTogJ0l0YWx5JyxcclxuICAgIFNwYWluOiAnU3BhaW4nLFxyXG4gICAgSmFwYW46ICdKYXBhbicsXHJcbiAgICBOb3J3YXk6ICdOb3J3YXknLFxyXG4gICAgRGVubWFyazI6ICdEZW5tYXJrMicsXHJcbiAgICBTcGFpbjI6ICdTcGFpbjInLFxyXG4gICAgTGF0aW5BbWVyaWNhOiAnTGF0aW5BbWVyaWNhJyxcclxuICAgIEtvcmVhOiAnS29yZWEnLFxyXG4gICAgSXJlbGFuZDogJ0lyZWxhbmQnLFxyXG4gICAgTGVnYWw6ICdMZWdhbCcsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEZvbnRTdHlsZVR5cGVcclxuICAgKi9cclxuICBGb250U3R5bGVUeXBlID0ge1xyXG4gICAgLyoqIEZvbnQtQSAoMTIgeCAyNCBkb3RzKSAvIFNwZWNpZnkgNyB4IDkgZm9udCAoaGFsZiBkb3RzKSAqL1xyXG4gICAgQTogJ0EnLFxyXG4gICAgLyoqIEZvbnQtQiAoOSB4IDI0IGRvdHMpIC8gU3BlY2lmeSA1IHggOSBmb250ICgyUC0xKSAqL1xyXG4gICAgQjogJ0InLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBDdXRQYXBlckFjdGlvblxyXG4gICAqL1xyXG4gIEN1dFBhcGVyQWN0aW9uID0ge1xyXG4gICAgRnVsbEN1dDogJ0Z1bGxDdXQnLFxyXG4gICAgRnVsbEN1dFdpdGhGZWVkOiAnRnVsbEN1dFdpdGhGZWVkJyxcclxuICAgIFBhcnRpYWxDdXQ6ICdQYXJ0aWFsQ3V0JyxcclxuICAgIFBhcnRpYWxDdXRXaXRoRmVlZDogJ1BhcnRpYWxDdXRXaXRoRmVlZCcsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEJsYWNrTWFya1R5cGVcclxuICAgKi9cclxuICBCbGFja01hcmtUeXBlID0ge1xyXG4gICAgVmFsaWQ6ICdWYWxpZCcsXHJcbiAgICBJbnZhbGlkOiAnSW52YWxpZCcsXHJcbiAgICBWYWxpZFdpdGhEZXRlY3Rpb246ICdWYWxpZFdpdGhEZXRlY3Rpb24nLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBBbGlnbm1lbnRQb3NpdGlvblxyXG4gICAqL1xyXG4gIEFsaWdubWVudFBvc2l0aW9uID0ge1xyXG4gICAgTGVmdDogJ0xlZnQnLFxyXG4gICAgQ2VudGVyOiAnQ2VudGVyJyxcclxuICAgIFJpZ2h0OiAnUmlnaHQnLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBMb2dvU2l6ZVxyXG4gICAqL1xyXG4gIExvZ29TaXplID0ge1xyXG4gICAgTm9ybWFsOiAnTm9ybWFsJyxcclxuICAgIERvdWJsZVdpZHRoOiAnRG91YmxlV2lkdGgnLFxyXG4gICAgRG91YmxlSGVpZ2h0OiAnRG91YmxlSGVpZ2h0JyxcclxuICAgIERvdWJsZVdpZHRoRG91YmxlSGVpZ2h0OiAnRG91YmxlV2lkdGhEb3VibGVIZWlnaHQnLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBCYXJjb2RlU3ltYm9sb2d5XHJcbiAgICovXHJcbiAgQmFyY29kZVN5bWJvbG9neSA9IHtcclxuICAgIENvZGUxMjg6ICdDb2RlMTI4JyxcclxuICAgIENvZGUzOTogJ0NvZGUzOScsXHJcbiAgICBDb2RlOTM6ICdDb2RlOTMnLFxyXG4gICAgSVRGOiAnSVRGJyxcclxuICAgIEpBTjg6ICdKQU44JyxcclxuICAgIEpBTjEzOiAnSkFOMTMnLFxyXG4gICAgTlc3OiAnTlc3JyxcclxuICAgIFVQQ0E6ICdVUENBJyxcclxuICAgIFVQQ0U6ICdVUENFJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgQmFyY29kZVdpZHRoXHJcbiAgICovXHJcbiAgQmFyY29kZVdpZHRoID0ge1xyXG4gICAgTW9kZTE6ICdNb2RlMScsXHJcbiAgICBNb2RlMjogJ01vZGUyJyxcclxuICAgIE1vZGUzOiAnTW9kZTMnLFxyXG4gICAgTW9kZTQ6ICdNb2RlNCcsXHJcbiAgICBNb2RlNTogJ01vZGU1JyxcclxuICAgIE1vZGU2OiAnTW9kZTYnLFxyXG4gICAgTW9kZTc6ICdNb2RlNycsXHJcbiAgICBNb2RlODogJ01vZGU4JyxcclxuICAgIE1vZGU5OiAnTW9kZTknLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBRckNvZGVNb2RlbFxyXG4gICAqL1xyXG4gIFFyQ29kZU1vZGVsID0ge1xyXG4gICAgTm8xOiAnTm8xJyxcclxuICAgIE5vMjogJ05vMicsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIFFyQ29kZUxldmVsXHJcbiAgICovXHJcbiAgUXJDb2RlTGV2ZWwgPSB7XHJcbiAgICBIOiAnSCcsXHJcbiAgICBMOiAnTCcsXHJcbiAgICBNOiAnTScsXHJcbiAgICBROiAnUScsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEJpdG1hcENvbnZlcnRlclJvdGF0aW9uXHJcbiAgICovXHJcbiAgQml0bWFwQ29udmVydGVyUm90YXRpb24gPSB7XHJcbiAgICBOb3JtYWw6ICdOb3JtYWwnLFxyXG4gICAgTGVmdDkwOiAnTGVmdDkwJyxcclxuICAgIFJpZ2h0OTA6ICdSaWdodDkwJyxcclxuICAgIFJvdGF0ZTE4MDogJ1JvdGF0ZTE4MCcsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCBhdmFpbGFibGUgcHJpbnRlcnNcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAgSW50ZXJmYWNlIFR5cGU6IEFsbCwgTEFOLCBCbHVldG9vdGgsIFVTQlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UHJpbnRlcnM+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gYXJyYXkgb2YgcHJpbnRlcnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcG9ydERpc2NvdmVyeSh0eXBlOiBzdHJpbmcpOiBQcm9taXNlPFByaW50ZXJzPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdGhlIHN0YXR1cyBvZiB0aGUgcHJpbnRlclxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3NcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFByaW50ZXJTdGF0dXM+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIFByaW50ZXJTdGF0dXMgb2JqZWN0XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNoZWNrU3RhdHVzKHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcpOiBQcm9taXNlPFByaW50ZXJTdGF0dXM+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByaW50cyBwbGFpbiB0ZXh0XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIFByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljcy4gU2VuZCBudWxsIHRvIHVzZSBhIHByaW50ZXIgY29ubmVjdGVkIHZpYSBTdGFySU9FeHRNYW5hZ2VyIHVzaW5nIHRoZSBjb25uZWN0KCkgZnVuY3Rpb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcclxuICAgKiBAcGFyYW0ge1ByaW50T2JqfSBwcmludE9iaiAgdGV4dDpzdHJpbmcsIGN1dFJlY2VpcHQ/OmJvb2xlYW4sIG9wZW5DYXNoRHJhd2VyPzpib29sZWFuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBwcmludGVkIGNvcnJlY3RseSBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBwcmludFJhd1RleHQocG9ydDogc3RyaW5nLCBlbXVsYXRpb246IHN0cmluZywgcHJpbnRPYmo6IFByaW50T2JqKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnRzIHRoZSB0ZXh0IGludG8gYSBiaXRtYXAgaW1hZ2UgYW5kIHNlbmRzIGl0IHRvIHRoZSBwcmludGVyXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIFByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljcy4gIFNlbmQgbnVsbCB0byB1c2UgYSBwcmludGVyIGNvbm5lY3RlZCB2aWEgU3RhcklPRXh0TWFuYWdlciB1c2luZyB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXHJcbiAgICogQHBhcmFtIHtSYXN0ZXJPYmp9IHJhc3Rlck9iaiAgdGV4dDpzdHJpbmcsIGN1dFJlY2VpcHQ/OmJvb2xlYW4sIG9wZW5DYXNoRHJhd2VyPzpib29sZWFuLCBmb250U2l6ZTpudW1iZXIsIHBhcGVyV2lkdGg6bnVtYmVyXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBwcmludGVkIGNvcnJlY3RseSBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBwcmludFJhc3RlclJlY2VpcHQocG9ydDogc3RyaW5nLCBlbXVsYXRpb246IHN0cmluZywgcmFzdGVyT2JqOiBSYXN0ZXJPYmopOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBhbiBpbWFnZSBmcm9tIGEgc3RyaW5nIFVSSSBhbmQgY29udmVydHMgaXQgdG8gYml0bWFwIHRvIHNlbmQgaXQgdG8gdGhlIHByaW50ZXJcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuICBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxyXG4gICAqIEBwYXJhbSB7SW1hZ2VPYmp9IGltYWdlT2JqICB1cmk6c3RyaW5nLCBwYXBlcldpZHRoPzpudW1iZXIsIGN1dFJlY2VpcHQ/OmJvb2xlYW4sIG9wZW5DYXNoRHJhd2VyPzpib29sZWFuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBwcmludGVkIGNvcnJlY3RseSBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBwcmludEltYWdlKHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcsIGltYWdlT2JqOiBJbWFnZU9iaik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzZW5kcyBhbiBhcHBlbmRQZXJpcGhlcmFsIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIgZm9yIGNoYW5uZWxzIE5vMSBhbmQgTm8yXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIFByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljcy4gIFNlbmQgbnVsbCB0byB1c2UgYSBwcmludGVyIGNvbm5lY3RlZCB2aWEgU3RhcklPRXh0TWFuYWdlciB1c2luZyB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBvcGVuZWQgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgb3BlbkNhc2hEcmF3ZXIocG9ydDogc3RyaW5nLCBlbXVsYXRpb246IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZW5kcyBhbiBBcnJheSBvZiBjb21tYW5kcyB0byB0aGUgY29tbWFuZCBidWZmZXIgdXNpbmcgdGhlIEFuZHJvaWQgSUNvbW1hbmRCdWlsZGVySW50ZXJmYWNlIG9yIGlPUyBJU0NCQnVpbGRlckludGVyZmFjZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuICBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxyXG4gICAqIEBwYXJhbSB7Q29tbWFuZHNBcnJheX0gY29tbWFuZHNBcnJheSAgZWFjaCBjb21tYW5kIGluIHRoZSBhcnJheSBzaG91bGQgYmUgYW4gaW5zdGFuY2Ugb2YgdGhlIFByaW50Q29tbWFuZCBvYmplY3QuIEV4YW1wbGUgW3thcHBlbmQ6XCJ0ZXh0XCJ9LCB7XCJvcGVuQ2FzaERyYXdlcjogMVwifV1cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFN1Y2Nlc3MhIGlmIHByaW50ZWQgY29ycmVjdGx5IG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHByaW50KHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcsIGNvbW1hbmRzQXJyYXk6IENvbW1hbmRzQXJyYXkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIHlvdSB0byBjb25uZWN0IHRvIHRoZSBwcmludGVyLCBrZWVwIHRoZSBjb25uZWN0aW9uIGFsaXZlIGFuZCByZWNlaXZlIHN0YXR1cyB1cGRhdGVzIHRocm91Z2ggYW4gb2JzZXJ2YWJsZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBwcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXHJcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSBTdWNjZXNzISBpZiBjb25uZWN0ZWQgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnLFxyXG4gIH0pXHJcbiAgY29ubmVjdChwb3J0OiBzdHJpbmcsIGVtdWxhdGlvbjogc3RyaW5nLCBoYXNCYXJjb2RlUmVhZGVyOiBib29sZWFuKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBkZXZpY2Ugc3RhdHVzIGV2ZW50cy4gT25seSBmaXJlcyB3aGVuIGEgcHJpbnRlciBpcyBjb25ubmVjdGVkIHRocm91Z2ggdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxyXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gZGF0YVR5cGU6IHByaW50ZXJPbmxpbmUsIHByaW50ZXJPZmZsaW5lLCBwcmludGVySW1wb3NzaWJsZSwgcHJpbnRlclBhcGVyRW1wdHksIHByaW50ZXJQYXBlck5lYXJFbXB0eSwgcHJpbnRlclBhcGVyUmVhZHksIHByaW50ZXJDb3Zlck9wZW4sIHByaW50ZXJDb3ZlckNsb3NlLCBjYXNoRHJhd2VyT3BlbiwgY2FzaERyYXdlckNsb3NlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgZXZlbnQ6ICdzdGFyUHJudERhdGEnLFxyXG4gIH0pXHJcbiAgZ2V0U3RhdHVzKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBbGxvd3MgdG8gZGlzY29ubmVjdCAoY2xvc2UgdGhlIGNvbm5lY3Rpb24gdG8gdGhlIHBlcmlwaGVyYWxzKSwgdGhpcyBpcyB1c2VmdWwgdG8gYXZvaWQga2VlcGluZyBhbGl2ZSBhIGNvbm5lY3Rpb24gd2hlbiBub3QgaW4gdGhlIGFwcCB0byBzYXZlIGRldmljZSBiYXR0ZXJ5XHJcbiAgICogKGVuZXJneSBjb25zdW1wdGlvbikuIFlvdSBzaG91bGQgY2FsbCB0aGlzIGZ1bmN0aW9uIHdoZW4gdGhlIGFwcCBpcyBwYXVzZWQgb3IgY2xvc2VkLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgY29ubmVjdGVkIG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19