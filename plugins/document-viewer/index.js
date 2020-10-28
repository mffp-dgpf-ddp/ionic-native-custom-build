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
var DocumentViewerOriginal = /** @class */ (function (_super) {
    __extends(DocumentViewerOriginal, _super);
    function DocumentViewerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentViewerOriginal.prototype.getSupportInfo = function () { return cordova(this, "getSupportInfo", {}, arguments); };
    DocumentViewerOriginal.prototype.canViewDocument = function (url, contentType, options, onPossible, onMissingApp, onImpossible, onError) { return cordova(this, "canViewDocument", { "sync": true }, arguments); };
    DocumentViewerOriginal.prototype.viewDocument = function (url, contentType, options, onShow, onClose, onMissingApp, onError) { return cordova(this, "viewDocument", { "sync": true }, arguments); };
    DocumentViewerOriginal.pluginName = "Document Viewer";
    DocumentViewerOriginal.plugin = "cordova-plugin-document-viewer";
    DocumentViewerOriginal.pluginRef = "SitewaertsDocumentViewer";
    DocumentViewerOriginal.repo = "https://github.com/sitewaerts/cordova-plugin-document-viewer";
    DocumentViewerOriginal.platforms = ["Android", "iOS", "Windows"];
    return DocumentViewerOriginal;
}(IonicNativePlugin));
var DocumentViewer = new DocumentViewerOriginal();
export { DocumentViewer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RvY3VtZW50LXZpZXdlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErRHBDLGtDQUFpQjs7OztJQU9uRCx1Q0FBYztJQWdCZCx3Q0FBZSxhQUNiLEdBQVcsRUFDWCxXQUFtQixFQUNuQixPQUE4QixFQUM5QixVQUFxQixFQUNyQixZQUF1QixFQUN2QixZQUF1QixFQUN2QixPQUFrQjtJQWVwQixxQ0FBWSxhQUNWLEdBQVcsRUFDWCxXQUFtQixFQUNuQixPQUE4QixFQUM5QixNQUFpQixFQUNqQixPQUFrQixFQUNsQixZQUF1QixFQUN2QixPQUFrQjs7Ozs7O3lCQW5IdEI7RUErRG9DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRWaWV3ZXJPcHRpb25zIHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBkb2N1bWVudFZpZXc/OiB7XHJcbiAgICBjbG9zZUxhYmVsOiBzdHJpbmc7XHJcbiAgfTtcclxuICBuYXZpZ2F0aW9uVmlldz86IHtcclxuICAgIGNsb3NlTGFiZWw6IHN0cmluZztcclxuICB9O1xyXG4gIGVtYWlsPzoge1xyXG4gICAgZW5hYmxlZDogYm9vbGVhbjtcclxuICB9O1xyXG4gIHByaW50Pzoge1xyXG4gICAgZW5hYmxlZDogYm9vbGVhbjtcclxuICB9O1xyXG4gIG9wZW5XaXRoPzoge1xyXG4gICAgZW5hYmxlZDogYm9vbGVhbjtcclxuICB9O1xyXG4gIGJvb2ttYXJrcz86IHtcclxuICAgIGVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgfTtcclxuICBzZWFyY2g/OiB7XHJcbiAgICBlbmFibGVkOiBib29sZWFuO1xyXG4gIH07XHJcbiAgYXV0b0Nsb3NlPzoge1xyXG4gICAgb25QYXVzZTogYm9vbGVhbjtcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgRG9jdW1lbnQgVmlld2VyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBvZmZlcnMgYSBzbGltIEFQSSB0byB2aWV3IFBERiBmaWxlcyB3aGljaCBhcmUgZWl0aGVyIHN0b3JlZCBpbiB0aGUgYXBwcyBhc3NldHMgZm9sZGVyICgvd3d3LyopIG9yIGluIGFueSBvdGhlciBmaWxlIHN5c3RlbSBkaXJlY3RvcnkgYXZhaWxhYmxlIHZpYSB0aGUgY29yZG92YSBmaWxlIHBsdWdpbi5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRG9jdW1lbnRWaWV3ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RvY3VtZW50LXZpZXdlci9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudFZpZXdlcikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKiBjb25zdCBvcHRpb25zOiBEb2N1bWVudFZpZXdlck9wdGlvbnMgPSB7XHJcbiAqICAgdGl0bGU6ICdNeSBQREYnXHJcbiAqIH1cclxuICpcclxuICogdGhpcy5kb2N1bWVudC52aWV3RG9jdW1lbnQoJ2Fzc2V0cy9teUZpbGUucGRmJywgJ2FwcGxpY2F0aW9uL3BkZicsIG9wdGlvbnMpXHJcbiAqXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBEb2N1bWVudFZpZXdlck9wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdEb2N1bWVudCBWaWV3ZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50LXZpZXdlcicsXHJcbiAgcGx1Z2luUmVmOiAnU2l0ZXdhZXJ0c0RvY3VtZW50Vmlld2VyJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3NpdGV3YWVydHMvY29yZG92YS1wbHVnaW4tZG9jdW1lbnQtdmlld2VyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudFZpZXdlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBEaXNwbGF5cyB0aGUgZW1haWwgY29tcG9zZXIgcHJlLWZpbGxlZCB3aXRoIGRhdGEuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBwcm9taXNlIHdoZW4gdGhlIEVtYWlsQ29tcG9zZXIgaGFzIGJlZW4gb3BlbmVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFN1cHBvcnRJbmZvKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiB0aGUgZG9jdW1lbnQgY2FuIGJlIHNob3duXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFVybCB0byB0aGUgZmlsZVxyXG4gICAqIEBwYXJhbSBjb250ZW50VHlwZSB7c3RyaW5nfSBDb250ZW50IHR5cGUgb2YgdGhlIGZpbGVcclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7RG9jdW1lbnRWaWV3ZXJPcHRpb25zfSBvcHRpb25zXHJcbiAgICogQHBhcmFtIFtvblBvc3NpYmxlXSB7RnVuY3Rpb259XHJcbiAgICogQHBhcmFtIFtvbk1pc3NpbmdBcHBdIHtGdW5jdGlvbn1cclxuICAgKiBAcGFyYW0gW29uSW1wb3NzaWJsZV0ge0Z1bmN0aW9ufVxyXG4gICAqIEBwYXJhbSBbb25FcnJvcl0ge0Z1bmN0aW9ufVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGNhblZpZXdEb2N1bWVudChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgY29udGVudFR5cGU6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IERvY3VtZW50Vmlld2VyT3B0aW9ucyxcclxuICAgIG9uUG9zc2libGU/OiBGdW5jdGlvbixcclxuICAgIG9uTWlzc2luZ0FwcD86IEZ1bmN0aW9uLFxyXG4gICAgb25JbXBvc3NpYmxlPzogRnVuY3Rpb24sXHJcbiAgICBvbkVycm9yPzogRnVuY3Rpb25cclxuICApOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW5zIHRoZSBmaWxlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFVybCB0byB0aGUgZmlsZVxyXG4gICAqIEBwYXJhbSBjb250ZW50VHlwZSB7c3RyaW5nfSBDb250ZW50IHR5cGUgb2YgdGhlIGZpbGVcclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7RG9jdW1lbnRWaWV3ZXJPcHRpb25zfSBvcHRpb25zXHJcbiAgICogQHBhcmFtIFtvblNob3ddIHtGdW5jdGlvbn1cclxuICAgKiBAcGFyYW0gW29uQ2xvc2VdIHtGdW5jdGlvbn1cclxuICAgKiBAcGFyYW0gW29uTWlzc2luZ0FwcF0ge0Z1bmN0aW9ufVxyXG4gICAqIEBwYXJhbSBbb25FcnJvcl0ge0Z1bmN0aW9ufVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHZpZXdEb2N1bWVudChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgY29udGVudFR5cGU6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IERvY3VtZW50Vmlld2VyT3B0aW9ucyxcclxuICAgIG9uU2hvdz86IEZ1bmN0aW9uLFxyXG4gICAgb25DbG9zZT86IEZ1bmN0aW9uLFxyXG4gICAgb25NaXNzaW5nQXBwPzogRnVuY3Rpb24sXHJcbiAgICBvbkVycm9yPzogRnVuY3Rpb25cclxuICApOiB2b2lkIHt9XHJcbn1cclxuIl19