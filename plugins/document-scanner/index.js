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
export var DocumentScannerSourceType;
(function (DocumentScannerSourceType) {
    /**
     * Scan directly from device camera.
     * This is the default.
     */
    DocumentScannerSourceType[DocumentScannerSourceType["CAMERA"] = 1] = "CAMERA";
    /**
     * Scan from an image already stored on device.
     */
    DocumentScannerSourceType[DocumentScannerSourceType["GALLERY"] = 0] = "GALLERY";
})(DocumentScannerSourceType || (DocumentScannerSourceType = {}));
var DocumentScannerOriginal = /** @class */ (function (_super) {
    __extends(DocumentScannerOriginal, _super);
    function DocumentScannerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentScannerOriginal.prototype.scanDoc = function (opts) { return cordova(this, "scanDoc", { "callbackOrder": "reverse" }, arguments); };
    DocumentScannerOriginal.pluginName = "DocumentScanner";
    DocumentScannerOriginal.plugin = "cordova-plugin-document-scanner";
    DocumentScannerOriginal.pluginRef = "scan";
    DocumentScannerOriginal.repo = "https://github.com/NeutrinosPlatform/cordova-plugin-document-scanner";
    DocumentScannerOriginal.platforms = ["Android", "iOS"];
    return DocumentScannerOriginal;
}(IonicNativePlugin));
var DocumentScanner = new DocumentScannerOriginal();
export { DocumentScanner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RvY3VtZW50LXNjYW5uZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFFeEUsTUFBTSxDQUFOLElBQVkseUJBV1g7QUFYRCxXQUFZLHlCQUF5QjtJQUNuQzs7O09BR0c7SUFDSCw2RUFBVSxDQUFBO0lBRVY7O09BRUc7SUFDSCwrRUFBVyxDQUFBO0FBQ2IsQ0FBQyxFQVhXLHlCQUF5QixLQUF6Qix5QkFBeUIsUUFXcEM7O0lBa0VvQyxtQ0FBaUI7Ozs7SUFTcEQsaUNBQU8sYUFBQyxJQUE2Qjs7Ozs7OzBCQXpGdkM7RUFnRnFDLGlCQUFpQjtTQUF6QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBlbnVtIERvY3VtZW50U2Nhbm5lclNvdXJjZVR5cGUge1xyXG4gIC8qKlxyXG4gICAqIFNjYW4gZGlyZWN0bHkgZnJvbSBkZXZpY2UgY2FtZXJhLlxyXG4gICAqIFRoaXMgaXMgdGhlIGRlZmF1bHQuXHJcbiAgICovXHJcbiAgQ0FNRVJBID0gMSxcclxuXHJcbiAgLyoqXHJcbiAgICogU2NhbiBmcm9tIGFuIGltYWdlIGFscmVhZHkgc3RvcmVkIG9uIGRldmljZS5cclxuICAgKi9cclxuICBHQUxMRVJZID0gMCxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudFNjYW5uZXJPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBDaG9vc2UgdG8gc2NhbiBmcm9tIGNhbWVyYSBvciBleGlzdGluZyBpbWFnZSBmaWxlLiBPbmx5IHZhbGlkIGZvciBBbmRyb2lkLlxyXG4gICAqL1xyXG4gIHNvdXJjZVR5cGU/OiBEb2N1bWVudFNjYW5uZXJTb3VyY2VUeXBlO1xyXG5cclxuICAvKipcclxuICAgKiBGaWxlbmFtZSB0byBzYXZlIHNjYW5uZWQgaW1hZ2UgdG8gKG1pbnVzIGV4dGVuc2lvbiwgd2hpY2ggaXMgYWx3YXlzIFwiLnBuZ1wiKS5cclxuICAgKiBPbmx5IHZhbGlkIGZvciBpT1MuIENhbGxlciBpcyByZXNwb25zaWJsZSBmb3IgY2xlYW5pbmcgdXAgYW55IGZpbGVzIGNyZWF0ZWRcclxuICAgKiBpZiB0aGlzIHBhcmFtZXRlciBpcyBzZXQgdG8gYW55dGhpbmcgb3RoZXIgdGhhbiB0aGUgZGVmYXVsdCB2YWx1ZSxcclxuICAgKiB3aGljaCBpcyBcImltYWdlXCIuXHJcbiAgICovXHJcbiAgZmlsZU5hbWU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFF1YWxpdHkgdG8gdXNlIHdoZW4gY2FwdHVyaW5nIHRoZSBpbWFnZSwgbXVzdCBiZSBhIGZsb2F0IHZhbHVlXHJcbiAgICogZnJvbSAxLjAoZGVmYXVsdCAtIEhpZ2hlc3QgcXVhbGl0eSkgdG8gNS4wKExvd2VzdCBRdWFsaXR5KS4gQW55IHZhbHVlXHJcbiAgICogaW4gYmV0d2VlbiB3aWxsIGJlIGFjY2VwdGVkLiBBbnkgdmFsdWUgbm90IGVxdWFsIHRvIG9yIG5vdCBiZXR3ZWVuIHRoZXNlIHZhbHVlc1xyXG4gICAqICB3aWxsIGRlZmF1bHQgdG8gdGhlIGhpZ2hlc3QgcXVhbGl0eSBvZiAxLjAuXHJcbiAgICovXHJcbiAgcXVhbGl0eT86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIGltYWdlIHNob3VsZCBiZSByZXR1cm5lZCBhcyBhIGJhc2U2NCBlbmNvZGluZyBpbnN0ZWFkIG9mIGFzIGEgZmlsZSBVUkwuXHJcbiAgICogSWYgdHJ1ZSwgdGhlIHBsdWdpbiB3aWxsIHJldHVybiB0aGUgc2Nhbm5lZCBpbWFnZSBhcyBiYXNlNjQuIElmIGZhbHNlLFxyXG4gICAqIHRoZSBwbHVnaW4gd2lsbCByZXR1cm4gdGhlIGltYWdlIFVSTCBvZiB0aGUgaW1hZ2UuXHJcbiAgICovXHJcbiAgcmV0dXJuQmFzZTY0PzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIERvY3VtZW50IFNjYW5uZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIHByb2Nlc3NlcyBpbWFnZXMgb2YgZG9jdW1lbnRzLCBjb21wZW5zYXRpbmcgZm9yIHBlcnNwZWN0aXZlLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBEb2N1bWVudFNjYW5uZXIsIERvY3VtZW50U2Nhbm5lck9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RvY3VtZW50LXNjYW5uZXInO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvY3VtZW50U2Nhbm5lcjogRG9jdW1lbnRTY2FubmVyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGxldCBvcHRzOiBEb2N1bWVudFNjYW5uZXJPcHRpb25zID0ge307XHJcbiAqIHRoaXMuZG9jdW1lbnRTY2FubmVyLnNjYW5Eb2N1bWVudChvcHRzKVxyXG4gKiAgIC50aGVuKChyZXM6IHN0cmluZykgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIERvY3VtZW50U2Nhbm5lck9wdGlvbnNcclxuICogQGVudW1zXHJcbiAqIERvY3VtZW50U2Nhbm5lclNvdXJjZVR5cGVcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdEb2N1bWVudFNjYW5uZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50LXNjYW5uZXInLFxyXG4gIHBsdWdpblJlZjogJ3NjYW4nLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTmV1dHJpbm9zUGxhdGZvcm0vY29yZG92YS1wbHVnaW4tZG9jdW1lbnQtc2Nhbm5lcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERvY3VtZW50U2Nhbm5lciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBTY2FuIGEgZG9jdW1lbnRcclxuICAgKiBAcGFyYW0gb3B0cyB7RG9jdW1lbnRTY2FubmVyT3B0aW9uc30gb3B0aW9uYWwgcGFyYW1ldGVyIGZvciBjb250cm9sbGluZyBzY2FubmluZ1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gZmlsZSBVUkwgb2Ygc2Nhbm5lZCBkb2N1bWVudCBpbWFnZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcclxuICB9KVxyXG4gIHNjYW5Eb2Mob3B0cz86IERvY3VtZW50U2Nhbm5lck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=