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
var WebServerOriginal = /** @class */ (function (_super) {
    __extends(WebServerOriginal, _super);
    function WebServerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebServerOriginal.prototype.start = function (port) { return cordova(this, "start", { "callbackOrder": "reverse" }, arguments); };
    WebServerOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    WebServerOriginal.prototype.onRequest = function () { return cordova(this, "onRequest", { "callbackOrder": "reverse", "observable": true, "clearFunction": "stop" }, arguments); };
    WebServerOriginal.prototype.sendResponse = function (requestId, responseObject) { return cordova(this, "sendResponse", {}, arguments); };
    WebServerOriginal.pluginName = "WebServer";
    WebServerOriginal.plugin = "cordova-plugin-webserver";
    WebServerOriginal.pluginRef = "window.webserver";
    WebServerOriginal.repo = "https://github.com/bykof/cordova-plugin-webserver.git";
    WebServerOriginal.platforms = ["Android", "iOS"];
    return WebServerOriginal;
}(IonicNativePlugin));
var WebServer = new WebServerOriginal();
export { WebServer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlYi1zZXJ2ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUErREgsNkJBQWlCOzs7O0lBUTlDLHlCQUFLLGFBQUMsSUFBYTtJQVFuQix3QkFBSTtJQWFKLDZCQUFTO0lBV1QsZ0NBQVksYUFBQyxTQUFpQixFQUFFLGNBQXdCOzs7Ozs7b0JBekcxRDtFQWlFK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlIHtcclxuICBzdGF0dXM6IG51bWJlcjtcclxuICBib2R5Pzogc3RyaW5nO1xyXG4gIHBhdGg/OiBzdHJpbmc7XHJcbiAgaGVhZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0IHtcclxuICByZXF1ZXN0SWQ6IHN0cmluZztcclxuICBib2R5OiBzdHJpbmc7XHJcbiAgaGVhZGVyczogc3RyaW5nO1xyXG4gIG1ldGhvZDogJ1BPU1QnIHwgJ0dFVCcgfCAnUFVUJyB8ICdQQVRDSCcgfCAnREVMRVRFJztcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgcXVlcnk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFdlYiBTZXJ2ZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gc3RhcnQgYSBsb2NhbCBkeW5hbWljIGNvbnRlbnQgd2ViIHNlcnZlciBmb3IgYW5kcm9pZCBhbmQgaU9TIGRldmljZXMuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFdlYlNlcnZlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvd2ViLXNlcnZlci9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdlYlNlcnZlcjogV2ViU2VydmVyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMud2ViU2VydmVyLm9uUmVxdWVzdCgpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICogICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICogICBjb25zdCByZXM6IFJlc3BvbnNlID0ge1xyXG4gKiAgICAgc3RhdHVzOiAyMDAsXHJcbiAqICAgICBib2R5OiAnJyxcclxuICogICAgIGhlYWRlcnM6IHtcclxuICogICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWwnXHJcbiAqICAgICB9XHJcbiAqICAgfTtcclxuICpcclxuICogICB0aGlzLndlYlNlcnZlci5zZW5kUmVzcG9uc2UoZGF0YS5yZXF1ZXN0SWQsIHJlcylcclxuICogICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKiB9KTtcclxuICpcclxuICogdGhpcy53ZWJTZXJ2ZXIuc3RhcnQoODApXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBSZXNwb25zZVxyXG4gKiBSZXF1ZXN0XHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnV2ViU2VydmVyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJzZXJ2ZXInLFxyXG4gIHBsdWdpblJlZjogJ3dpbmRvdy53ZWJzZXJ2ZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYnlrb2YvY29yZG92YS1wbHVnaW4td2Vic2VydmVyLmdpdCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYlNlcnZlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIHN0YXJ0IHlvdXIgd2Vic2VydmVyLlxyXG4gICAqIEBwYXJhbSBwb3J0IHtudW1iZXJ9IFBvcnQgbnVtYmVyIChkZWZhdWx0IHRvIDgwODApXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgc3RhcnQocG9ydD86IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIHN0b3AgeW91ciB3ZWJzZXJ2ZXIuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0b3AoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IHN0cmVhbXMgSFRUUCByZXF1ZXN0cyB0byBhbiBvYnNlcnZlci5cclxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFJlcXVlc3Q+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdG8gcmVzb2x2ZSBhcyBhIFJlcXVlc3Qgb2JqZWN0XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wJyxcclxuICB9KVxyXG4gIG9uUmVxdWVzdCgpOiBPYnNlcnZhYmxlPFJlcXVlc3Q+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHNlbmRzIGEgcmVzcG9uc2UgdG8gYSByZXF1ZXN0LlxyXG4gICAqIEBwYXJhbSByZXF1ZXN0SWQge3N0cmluZ30gUmVxdWVzdCBJRCB0byByZXNwb25kIHRvXHJcbiAgICogQHBhcmFtIHJlc3BvbnNlT2JqZWN0IHtSZXNwb25zZX0gUmVzcG9uc2Ugb2JqZWN0XHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2VuZFJlc3BvbnNlKHJlcXVlc3RJZDogc3RyaW5nLCByZXNwb25zZU9iamVjdDogUmVzcG9uc2UpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=