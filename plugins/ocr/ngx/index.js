import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
export var OCRSourceType;
(function (OCRSourceType) {
    /**
     * Normal processing from a file URL. This is the overall recommended choice
     * for most applications. The distinction between file and native URLs is
     * only relevant on iOS; under Android `NORMFILEURL` and `NORMNATIVEURL`
     * are interchangeable.
     */
    OCRSourceType[OCRSourceType["NORMFILEURL"] = 0] = "NORMFILEURL";
    /**
     * Normal processing from a native URL. Since this source type uses deprecated
     * OS APIs to interact with the camera plugin, it is best avoided, especially
     * if ongoing forward compatibility is a concern. For further information, see
     * https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr#plugin-usage
     * Under Android, this is equivalent to `NORMFILEURL`.
     */
    OCRSourceType[OCRSourceType["NORMNATIVEURL"] = 1] = "NORMNATIVEURL";
    /**
     * Fast processing from a file URL. As the compression done internally causes
     * a significant loss in extraction quality, it should only be preferred when
     * dealing with large images containing significant amounts of text, where
     * the execution time required to perform normal processing is prohibitive.
     * The distinction between file and native URLs is only relevant on iOS;
     * under Android `FASTFILEURL` and `FASTNATIVEURL` are interchangeable.
     */
    OCRSourceType[OCRSourceType["FASTFILEURL"] = 2] = "FASTFILEURL";
    /**
     * Fast processing from a native URL. See comments above for `FASTFILEURL`
     * concerning quality loss.
     *
     * The distinction between file and native URLs is only relevant on iOS;
     * under Android `FASTFILEURL` and `FASTNATIVEURL` are interchangeable.
     */
    OCRSourceType[OCRSourceType["FASTNATIVEURL"] = 3] = "FASTNATIVEURL";
    /**
     * Normal processing from a base64-encoded string. Quality is equivalent
     * to `NORMFILEURL`, but due to significantly higher memory requirements,
     * is only appropriate for use with very small images.
     */
    OCRSourceType[OCRSourceType["BASE64"] = 4] = "BASE64";
})(OCRSourceType || (OCRSourceType = {}));
var OCR = /** @class */ (function (_super) {
    __extends(OCR, _super);
    function OCR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OCR.prototype.recText = function (sourceType, source) { return cordova(this, "recText", {}, arguments); };
    OCR.pluginName = "OCR";
    OCR.plugin = "cordova-plugin-mobile-ocr";
    OCR.pluginRef = "textocr";
    OCR.repo = "https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr";
    OCR.platforms = ["Android", "iOS"];
    OCR = __decorate([
        Injectable()
    ], OCR);
    return OCR;
}(IonicNativePlugin));
export { OCR };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL29jci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RSxNQUFNLENBQU4sSUFBWSxhQTJDWDtBQTNDRCxXQUFZLGFBQWE7SUFDdkI7Ozs7O09BS0c7SUFDSCwrREFBZSxDQUFBO0lBRWY7Ozs7OztPQU1HO0lBQ0gsbUVBQWlCLENBQUE7SUFFakI7Ozs7Ozs7T0FPRztJQUNILCtEQUFlLENBQUE7SUFFZjs7Ozs7O09BTUc7SUFDSCxtRUFBaUIsQ0FBQTtJQUVqQjs7OztPQUlHO0lBQ0gscURBQVUsQ0FBQTtBQUNaLENBQUMsRUEzQ1csYUFBYSxLQUFiLGFBQWEsUUEyQ3hCOztJQTZHd0IsdUJBQWlCOzs7O0lBUXhDLHFCQUFPLGFBQUMsVUFBeUIsRUFBRSxNQUFjOzs7Ozs7SUFSdEMsR0FBRztRQURmLFVBQVUsRUFBRTtPQUNBLEdBQUc7Y0EzSmhCO0VBMkp5QixpQkFBaUI7U0FBN0IsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgZW51bSBPQ1JTb3VyY2VUeXBlIHtcclxuICAvKipcclxuICAgKiBOb3JtYWwgcHJvY2Vzc2luZyBmcm9tIGEgZmlsZSBVUkwuIFRoaXMgaXMgdGhlIG92ZXJhbGwgcmVjb21tZW5kZWQgY2hvaWNlXHJcbiAgICogZm9yIG1vc3QgYXBwbGljYXRpb25zLiBUaGUgZGlzdGluY3Rpb24gYmV0d2VlbiBmaWxlIGFuZCBuYXRpdmUgVVJMcyBpc1xyXG4gICAqIG9ubHkgcmVsZXZhbnQgb24gaU9TOyB1bmRlciBBbmRyb2lkIGBOT1JNRklMRVVSTGAgYW5kIGBOT1JNTkFUSVZFVVJMYFxyXG4gICAqIGFyZSBpbnRlcmNoYW5nZWFibGUuXHJcbiAgICovXHJcbiAgTk9STUZJTEVVUkwgPSAwLFxyXG5cclxuICAvKipcclxuICAgKiBOb3JtYWwgcHJvY2Vzc2luZyBmcm9tIGEgbmF0aXZlIFVSTC4gU2luY2UgdGhpcyBzb3VyY2UgdHlwZSB1c2VzIGRlcHJlY2F0ZWRcclxuICAgKiBPUyBBUElzIHRvIGludGVyYWN0IHdpdGggdGhlIGNhbWVyYSBwbHVnaW4sIGl0IGlzIGJlc3QgYXZvaWRlZCwgZXNwZWNpYWxseVxyXG4gICAqIGlmIG9uZ29pbmcgZm9yd2FyZCBjb21wYXRpYmlsaXR5IGlzIGEgY29uY2Vybi4gRm9yIGZ1cnRoZXIgaW5mb3JtYXRpb24sIHNlZVxyXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9OZXV0cmlub3NQbGF0Zm9ybS9jb3Jkb3ZhLXBsdWdpbi1tb2JpbGUtb2NyI3BsdWdpbi11c2FnZVxyXG4gICAqIFVuZGVyIEFuZHJvaWQsIHRoaXMgaXMgZXF1aXZhbGVudCB0byBgTk9STUZJTEVVUkxgLlxyXG4gICAqL1xyXG4gIE5PUk1OQVRJVkVVUkwgPSAxLFxyXG5cclxuICAvKipcclxuICAgKiBGYXN0IHByb2Nlc3NpbmcgZnJvbSBhIGZpbGUgVVJMLiBBcyB0aGUgY29tcHJlc3Npb24gZG9uZSBpbnRlcm5hbGx5IGNhdXNlc1xyXG4gICAqIGEgc2lnbmlmaWNhbnQgbG9zcyBpbiBleHRyYWN0aW9uIHF1YWxpdHksIGl0IHNob3VsZCBvbmx5IGJlIHByZWZlcnJlZCB3aGVuXHJcbiAgICogZGVhbGluZyB3aXRoIGxhcmdlIGltYWdlcyBjb250YWluaW5nIHNpZ25pZmljYW50IGFtb3VudHMgb2YgdGV4dCwgd2hlcmVcclxuICAgKiB0aGUgZXhlY3V0aW9uIHRpbWUgcmVxdWlyZWQgdG8gcGVyZm9ybSBub3JtYWwgcHJvY2Vzc2luZyBpcyBwcm9oaWJpdGl2ZS5cclxuICAgKiBUaGUgZGlzdGluY3Rpb24gYmV0d2VlbiBmaWxlIGFuZCBuYXRpdmUgVVJMcyBpcyBvbmx5IHJlbGV2YW50IG9uIGlPUztcclxuICAgKiB1bmRlciBBbmRyb2lkIGBGQVNURklMRVVSTGAgYW5kIGBGQVNUTkFUSVZFVVJMYCBhcmUgaW50ZXJjaGFuZ2VhYmxlLlxyXG4gICAqL1xyXG4gIEZBU1RGSUxFVVJMID0gMixcclxuXHJcbiAgLyoqXHJcbiAgICogRmFzdCBwcm9jZXNzaW5nIGZyb20gYSBuYXRpdmUgVVJMLiBTZWUgY29tbWVudHMgYWJvdmUgZm9yIGBGQVNURklMRVVSTGBcclxuICAgKiBjb25jZXJuaW5nIHF1YWxpdHkgbG9zcy5cclxuICAgKlxyXG4gICAqIFRoZSBkaXN0aW5jdGlvbiBiZXR3ZWVuIGZpbGUgYW5kIG5hdGl2ZSBVUkxzIGlzIG9ubHkgcmVsZXZhbnQgb24gaU9TO1xyXG4gICAqIHVuZGVyIEFuZHJvaWQgYEZBU1RGSUxFVVJMYCBhbmQgYEZBU1ROQVRJVkVVUkxgIGFyZSBpbnRlcmNoYW5nZWFibGUuXHJcbiAgICovXHJcbiAgRkFTVE5BVElWRVVSTCA9IDMsXHJcblxyXG4gIC8qKlxyXG4gICAqIE5vcm1hbCBwcm9jZXNzaW5nIGZyb20gYSBiYXNlNjQtZW5jb2RlZCBzdHJpbmcuIFF1YWxpdHkgaXMgZXF1aXZhbGVudFxyXG4gICAqIHRvIGBOT1JNRklMRVVSTGAsIGJ1dCBkdWUgdG8gc2lnbmlmaWNhbnRseSBoaWdoZXIgbWVtb3J5IHJlcXVpcmVtZW50cyxcclxuICAgKiBpcyBvbmx5IGFwcHJvcHJpYXRlIGZvciB1c2Ugd2l0aCB2ZXJ5IHNtYWxsIGltYWdlcy5cclxuICAgKi9cclxuICBCQVNFNjQgPSA0LFxyXG59XHJcblxyXG4vKipcclxuICogRm91ciBwb2ludHMgKG9yZGVyZWQgaW4gY2xvY2t3aXNlIGRpcmVjdGlvbikgdGhhdCBlbmNsb3NlIGEgdGV4dFxyXG4gKiBjb21wb25lbnQuIE1heSBub3QgYmUgYXhpcy1hbGlnbmVkIGR1ZSB0byBwZXJzcGVjdGl2ZSBza2V3LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBPQ1JDb3JuZXJzIHtcclxuICB4MTogbnVtYmVyO1xyXG4gIHkxOiBudW1iZXI7XHJcbiAgeDI6IG51bWJlcjtcclxuICB5MjogbnVtYmVyO1xyXG4gIHgzOiBudW1iZXI7XHJcbiAgeTM6IG51bWJlcjtcclxuICB4NDogbnVtYmVyO1xyXG4gIHk0OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBheGlzLWFsaWduZWQgYm91bmRpbmcgcmVjdGFuZ2xlLiBgeGAgYW5kIGB5YCByZXByZXNlbnQgdGhlIHRvcCBsZWZ0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBPQ1JSZWN0IHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSByZXR1cm4gdmFsdWUgZnJvbSB0aGUgYHJlY1RleHRgIG1ldGhvZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgT0NSUmVzdWx0IHtcclxuICAvKipcclxuICAgKiBXYXMgYW55IHRleHQgZXh0cmFjdGVkPyBJZiBgZm91bmRUZXh0YCBpcyBmYWxzZSwgbm8gb3RoZXIgZmllbGRzIGFyZVxyXG4gICAqIHJldHVybmVkLiBJZiBmb3VuZFRleHQgaXMgdHJ1ZSwgYWxsIG90aGVyIGZpZWxkcyBhcmUgcmVsaWFibGUuXHJcbiAgICovXHJcbiAgZm91bmRUZXh0OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBBIGJsb2NrIGlzIHRoZSBsYXJnZXN0IHVuaXQgb2YgdGV4dCwgd2hpY2ggY2FuIGJlIHRob3VnaHQgb2YgYXMgYSBwYXJhZ3JhcGguXHJcbiAgICogVGhpcyBmaWVsZCBjb25zaXN0cyBvZiBzZXZlcmFsIHBhcmFsbGVsIGFycmF5cywgc28gdGhlIHRleHQgaW4gYGJsb2NrdGV4dFswXWBcclxuICAgKiBpcyBib3VuZGVkIGJ5IGBibG9ja3BvaW50c1swXWAgYW5kIGBibG9ja2ZyYW1lWzBdYC5cclxuICAgKi9cclxuICBibG9ja3M6IHtcclxuICAgIGJsb2NrdGV4dDogc3RyaW5nW107XHJcbiAgICBibG9ja3BvaW50czogT0NSQ29ybmVyc1tdO1xyXG4gICAgYmxvY2tmcmFtZTogT0NSUmVjdFtdO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgbGluZSBpcyB0aGUgY2VudHJhbCB1bml0IG9mIHRleHQsIGNvbnRhaW5pbmcgc2V2ZXJhbCBlbGVtZW50cy4gQSBibG9ja1xyXG4gICAqIGNhbiBjb250YWluIE4gbGluZXMuIFRoaXMgZmllbGQgY29uc2lzdHMgb2Ygc2V2ZXJhbCBwYXJhbGxlbCBhcnJheXMsIHNvIHRoZVxyXG4gICAqIHRleHQgaW4gYGxpbmV0ZXh0WzBdYCBpcyBib3VuZGVkIGJ5IGBsaW5lcG9pbnRzWzBdYCBhbmQgYGxpbmVmcmFtZVswXWAuXHJcbiAgICovXHJcbiAgbGluZXM6IHtcclxuICAgIGxpbmV0ZXh0OiBzdHJpbmdbXTtcclxuICAgIGxpbmVwb2ludHM6IE9DUkNvcm5lcnNbXTtcclxuICAgIGxpbmVmcmFtZTogT0NSUmVjdFtdO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgd29yZCAob3IgZWxlbWVudCkgaXMgdGhlIHNtYWxsZXN0IHVuaXQgb2YgdGV4dC4gVGhpcyBmaWVsZCBjb25zaXN0cyBvZlxyXG4gICAqIHNldmVyYWwgcGFyYWxsZWwgYXJyYXlzLCBzbyB0aGUgdGV4dCBpbiBgd29yZHRleHRbMF1gIGlzIGJvdW5kZWQgYnlcclxuICAgKiBgd29yZHBvaW50c1swXWAgYW5kIGB3b3JkZnJhbWVbMF1gLlxyXG4gICAqL1xyXG4gIHdvcmRzOiB7XHJcbiAgICB3b3JkdGV4dDogc3RyaW5nW107XHJcbiAgICB3b3JkcG9pbnRzOiBPQ1JDb3JuZXJzW107XHJcbiAgICB3b3JkZnJhbWU6IE9DUlJlY3RbXTtcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgT0NSXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBhdHRlbXB0cyB0byBpZGVudGlmeSBhbmQgZXh0cmFjdCB0ZXh0IGZyb20gYW4gaW1hZ2UuXHJcbiAqIFBsZWFzZSBub3RlOiBUaGlzIHBsdWdpbiBkZXBlbmRzIG9uIHRoZSBHb29nbGVNb2JpbGVWaXNpb24gcG9kIHdoaWNoIGlzIHJlZmVyZW5jaW5nIFVJV2VidmlldywgdGhhdCBoYXMgYmVlbiBkZXByZWNhdGVkIGJ5IEFwcGxlLlxyXG4gKiBEb24ndCB1c2UgdGhpcyBwbHVnaW4gaW4gYW4gYXBwIGludGVuZGVkIGZvciBBcHAgU3RvcmUgYXMgeW91IHdpbGwgZ2V0IGEgcmV2aWV3IHJlamVjdGlvbiBmcm9tIEFwcGxlOiBgRGVwcmVjYXRlZCBBUEkgVXNhZ2Ug4oCUIEFwcGxlIHdpbGwgc3RvcCBhY2NlcHRpbmcgc3VibWlzc2lvbnMgb2YgYXBwcyB0aGF0IHVzZSBVSVdlYlZpZXcgQVBJc2BcclxuICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgZm9sbG93aW5nIEdpdGh1YiBpc3N1ZSBbR29vZ2xlIE1vYmlsZSBWaXNpb24gcmVseWluZyBvbiBkZXByZWNhdGVkIFVJV2Vidmlld10oaHR0cHM6Ly9naXRodWIuY29tL05ldXRyaW5vc1BsYXRmb3JtL2NvcmRvdmEtcGx1Z2luLW1vYmlsZS1vY3IvaXNzdWVzLzI3KS5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgT0NSLCBPQ1JTb3VyY2VUeXBlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9vY3Ivbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBvY3I6IE9DUikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLm9jci5yZWNUZXh0KE9DUlNvdXJjZVR5cGUuTk9STUZJTEVVUkwsIFwiZmlsZTovL3BhdGgvdG8vaW1hZ2UucG5nXCIpXHJcbiAqICAgLnRoZW4oKHJlczogT0NSUmVzdWx0KSA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIE9DUkNvcm5lcnNcclxuICogT0NSUmVjdFxyXG4gKiBPQ1JSZXN1bHRcclxuICpcclxuICogQGVudW1zXHJcbiAqIE9DUlNvdXJjZVR5cGVcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdPQ1InLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1vYmlsZS1vY3InLFxyXG4gIHBsdWdpblJlZjogJ3RleHRvY3InLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTmV1dHJpbm9zUGxhdGZvcm0vY29yZG92YS1wbHVnaW4tbW9iaWxlLW9jcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE9DUiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBFeHRyYWN0IHRleHQgZnJvbSBpbWFnZVxyXG4gICAqIEBwYXJhbSBzb3VyY2VUeXBlIHtPQ1JTb3VyY2VUeXBlfSB0eXBlIG9mIGltYWdlIHNvdXJjZVxyXG4gICAqIEBwYXJhbSBzb3VyY2Uge3N0cmluZ30gaW1hZ2Ugc291cmNlIChlaXRoZXIgZmlsZSBVUkwgb3IgYmFzZTY0IHN0cmluZylcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPE9DUlJlc3VsdD59IGV4dHJhY3RlZCB0ZXh0IGFuZCBnZW9tZXRyeVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZWNUZXh0KHNvdXJjZVR5cGU6IE9DUlNvdXJjZVR5cGUsIHNvdXJjZTogc3RyaW5nKTogUHJvbWlzZTxPQ1JSZXN1bHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19