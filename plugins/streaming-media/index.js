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
var StreamingMediaOriginal = /** @class */ (function (_super) {
    __extends(StreamingMediaOriginal, _super);
    function StreamingMediaOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StreamingMediaOriginal.prototype.playVideo = function (videoUrl, options) { return cordova(this, "playVideo", { "sync": true }, arguments); };
    StreamingMediaOriginal.prototype.playAudio = function (audioUrl, options) { return cordova(this, "playAudio", { "sync": true }, arguments); };
    StreamingMediaOriginal.prototype.stopAudio = function () { return cordova(this, "stopAudio", { "sync": true }, arguments); };
    StreamingMediaOriginal.prototype.pauseAudio = function () { return cordova(this, "pauseAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMediaOriginal.prototype.resumeAudio = function () { return cordova(this, "resumeAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMediaOriginal.pluginName = "StreamingMedia";
    StreamingMediaOriginal.plugin = "cordova-plugin-streaming-media";
    StreamingMediaOriginal.pluginRef = "plugins.streamingMedia";
    StreamingMediaOriginal.repo = "https://github.com/nchutchind/cordova-plugin-streaming-media";
    StreamingMediaOriginal.platforms = ["Amazon Fire OS", "Android", "iOS"];
    return StreamingMediaOriginal;
}(IonicNativePlugin));
var StreamingMedia = new StreamingMediaOriginal();
export { StreamingMedia };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0cmVhbWluZy1tZWRpYS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpRnBDLGtDQUFpQjs7OztJQU9uRCxrQ0FBUyxhQUFDLFFBQWdCLEVBQUUsT0FBK0I7SUFRM0Qsa0NBQVMsYUFBQyxRQUFnQixFQUFFLE9BQStCO0lBTTNELGtDQUFTO0lBTVQsbUNBQVU7SUFNVixvQ0FBVzs7Ozs7O3lCQW5IYjtFQWtGb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIE9iamVjdCBvZiBvcHRpb25zIHRvIHBhc3MgaW50byB0aGUgcGxheVZpZGVvIG1ldGhvZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWFtaW5nVmlkZW9PcHRpb25zIHtcclxuICAvKiogRXhlY3V0ZXMgYWZ0ZXIgc3VjY2VzcyBwbGF5aW5nIGF1ZGlvLiAqL1xyXG4gIHN1Y2Nlc3NDYWxsYmFjaz86IEZ1bmN0aW9uO1xyXG4gIC8qKiBFeGVjdXRlcyBhZnRlciBlcnJvciBwbGF5aW5nIHZpZGVvLiAqL1xyXG4gIGVycm9yQ2FsbGJhY2s/OiBGdW5jdGlvbjtcclxuICAvKiogRm9yY2Ugb25lIG9yaWVudGF0aW9uIGZvciBwbGF5aW5nIHZpZGVvLiAqL1xyXG4gIG9yaWVudGF0aW9uPzogc3RyaW5nO1xyXG4gIC8qKiBTaG91bGQgdGhlIHZpZGVvIGNsb3NlIGFmdGVyIGl0J3Mgb3Zlci4gRGVmYXVsdHMgdG8gdHJ1ZS4gKi9cclxuICBzaG91bGRBdXRvQ2xvc2U/OiBib29sZWFuO1xyXG4gIC8qKiBTaG91bGQgdGhlIHZpZGVvIGhhdmUgY29udHJvbHMuIERlZmF1bHRzIHRvIHRydWUuIEFuZHJvaWQgb25seS4gKi9cclxuICBjb250cm9scz86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPYmplY3Qgb2Ygb3B0aW9ucyB0byBwYXNzIGludG8gdGhlIHBsYXlBdWRpbyBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVhbWluZ0F1ZGlvT3B0aW9ucyB7XHJcbiAgLyoqIEJhY2tncm91bmQgY29sb3IgZm9yIGF1ZGlvIHBsYXllci4gKi9cclxuICBiZ0NvbG9yPzogc3RyaW5nO1xyXG4gIC8qKiBCYWNrZ3JvdW5kIGltYWdlIGZvciBhdWRpbyBwbGF5ZXIuICovXHJcbiAgYmdJbWFnZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBCYWNrZ3JvdW5kIGltYWdlIHNjYWxlIGZvciBhdWRpbyBwbGF5ZXIuXHJcbiAgICogVmFsaWQgdmFsdWVzIGFyZTpcclxuICAgKiBmaXRcclxuICAgKiBzdHJldGNoXHJcbiAgICogYXNwZWN0U3RyZXRjaC5cclxuICAgKi9cclxuICBiZ0ltYWdlU2NhbGU/OiBzdHJpbmc7XHJcbiAgLyoqIFN0YXJ0IGF1ZGlvIHBsYXllciBpbiBmdWxsIHNjcmVlbi4gaU9TIG9ubHkuICovXHJcbiAgaW5pdEZ1bGxzY3JlZW4/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIEtlZXBzIHRoZSBzY3JlZW4gbGl0IGFuZCBzdG9wcyBpdCBmcm9tIGxvY2tpbmdcclxuICAgKiB3aGlsZSBhdWRpbyBpcyBwbGF5aW5nLiBBbmRyb2lkIG9ubHkuXHJcbiAgICovXHJcbiAga2VlcEF3YWtlPzogYm9vbGVhbjtcclxuICAvKiogRXhlY3V0ZXMgYWZ0ZXIgc3VjY2VzcyBwbGF5aW5nIGF1ZGlvLiAqL1xyXG4gIHN1Y2Nlc3NDYWxsYmFjaz86IEZ1bmN0aW9uO1xyXG4gIC8qKiBFeGVjdXRlcyBhZnRlciBlcnJvciBwbGF5aW5nIGF1ZGlvLiAqL1xyXG4gIGVycm9yQ2FsbGJhY2s/OiBGdW5jdGlvbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFN0cmVhbWluZyBNZWRpYVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBzdHJlYW0gYXVkaW8gYW5kIHZpZGVvIGluIGEgZnVsbHNjcmVlbiwgbmF0aXZlIHBsYXllciBvbiBpT1MgYW5kIEFuZHJvaWQuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFN0cmVhbWluZ01lZGlhLCBTdHJlYW1pbmdWaWRlb09wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0cmVhbWluZy1tZWRpYS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cmVhbWluZ01lZGlhOiBTdHJlYW1pbmdNZWRpYSkgeyB9XHJcbiAqXHJcbiAqIGxldCBvcHRpb25zOiBTdHJlYW1pbmdWaWRlb09wdGlvbnMgPSB7XHJcbiAqICAgc3VjY2Vzc0NhbGxiYWNrOiAoKSA9PiB7IGNvbnNvbGUubG9nKCdWaWRlbyBwbGF5ZWQnKSB9LFxyXG4gKiAgIGVycm9yQ2FsbGJhY2s6IChlKSA9PiB7IGNvbnNvbGUubG9nKCdFcnJvciBzdHJlYW1pbmcnKSB9LFxyXG4gKiAgIG9yaWVudGF0aW9uOiAnbGFuZHNjYXBlJyxcclxuICogICBzaG91bGRBdXRvQ2xvc2U6IHRydWUsXHJcbiAqICAgY29udHJvbHM6IGZhbHNlXHJcbiAqIH07XHJcbiAqXHJcbiAqIHRoaXMuc3RyZWFtaW5nTWVkaWEucGxheVZpZGVvKCdodHRwczovL3BhdGgvdG8vdmlkZW8vc3RyZWFtJywgb3B0aW9ucyk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBTdHJlYW1pbmdWaWRlb09wdGlvbnNcclxuICogU3RyZWFtaW5nQXVkaW9PcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnU3RyZWFtaW5nTWVkaWEnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXN0cmVhbWluZy1tZWRpYScsXHJcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5zdHJlYW1pbmdNZWRpYScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9uY2h1dGNoaW5kL2NvcmRvdmEtcGx1Z2luLXN0cmVhbWluZy1tZWRpYScsXHJcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0cmVhbWluZ01lZGlhIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFN0cmVhbXMgYSB2aWRlb1xyXG4gICAqIEBwYXJhbSB2aWRlb1VybCB7c3RyaW5nfSBUaGUgVVJMIG9mIHRoZSB2aWRlb1xyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTdHJlYW1pbmdWaWRlb09wdGlvbnN9IE9wdGlvbnNcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBwbGF5VmlkZW8odmlkZW9Vcmw6IHN0cmluZywgb3B0aW9ucz86IFN0cmVhbWluZ1ZpZGVvT3B0aW9ucyk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogU3RyZWFtcyBhbiBhdWRpb1xyXG4gICAqIEBwYXJhbSBhdWRpb1VybCB7c3RyaW5nfSBUaGUgVVJMIG9mIHRoZSBhdWRpbyBzdHJlYW1cclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7U3RyZWFtaW5nQXVkaW9PcHRpb25zfSBPcHRpb25zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcGxheUF1ZGlvKGF1ZGlvVXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBTdHJlYW1pbmdBdWRpb09wdGlvbnMpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3BzIHN0cmVhbWluZyBhdWRpb1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHN0b3BBdWRpbygpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhdXNlcyBzdHJlYW1pbmcgYXVkaW9cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUsIHBsYXRmb3JtczogWydpT1MnXSB9KVxyXG4gIHBhdXNlQXVkaW8oKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBSZXN1bWVzIHN0cmVhbWluZyBhdWRpb1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSwgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXHJcbiAgcmVzdW1lQXVkaW8oKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==