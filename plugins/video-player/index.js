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
var VideoPlayerOriginal = /** @class */ (function (_super) {
    __extends(VideoPlayerOriginal, _super);
    function VideoPlayerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoPlayerOriginal.prototype.play = function (fileUrl, options) { return cordova(this, "play", {}, arguments); };
    VideoPlayerOriginal.prototype.close = function () { return cordova(this, "close", { "sync": true }, arguments); };
    VideoPlayerOriginal.pluginName = "VideoPlayer";
    VideoPlayerOriginal.plugin = "https://github.com/moust/cordova-plugin-videoplayer.git";
    VideoPlayerOriginal.pluginRef = "VideoPlayer";
    VideoPlayerOriginal.repo = "https://github.com/moust/cordova-plugin-videoplayer";
    VideoPlayerOriginal.platforms = ["Android"];
    return VideoPlayerOriginal;
}(IonicNativePlugin));
var VideoPlayer = new VideoPlayerOriginal();
export { VideoPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3ZpZGVvLXBsYXllci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFvRHZDLCtCQUFpQjs7OztJQVFoRCwwQkFBSSxhQUFDLE9BQWUsRUFBRSxPQUFzQjtJQVE1QywyQkFBSzs7Ozs7O3NCQXJFUDtFQXFEaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIHRoZSB2aWRlbyBwbGF5YmFjayB1c2luZyB0aGUgYHBsYXlgIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBWaWRlb09wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgaW5pdGlhbCB2b2x1bWUgb2YgdGhlIHZpZGVvIHBsYXliYWNrLCB3aGVyZSAwLjAgaXMgMCUgdm9sdW1lIGFuZCAxLjAgaXMgMTAwJS5cclxuICAgKiBGb3IgZXhhbXBsZTogZm9yIGEgdm9sdW1lIG9mIDMwJSBzZXQgdGhlIHZhbHVlIHRvIDAuMy5cclxuICAgKi9cclxuICB2b2x1bWU/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogVGhlcmUgYXJlIHR3byBvcHRpb25zIGZvciB0aGUgc2NhbGluZyBtb2RlLiBTQ0FMRV9UT19GSVQgd2hpY2ggaXMgZGVmYXVsdCBhbmQgU0NBTEVfVE9fRklUX1dJVEhfQ1JPUFBJTkcuXHJcbiAgICogVGhlc2Ugc3RyaW5ncyBhcmUgdGhlIG9ubHkgb25lcyB3aGljaCBjYW4gYmUgcGFzc2VkIGFzIG9wdGlvbi5cclxuICAgKi9cclxuICBzY2FsaW5nTW9kZT86IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFZpZGVvIFBsYXllclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBDb3Jkb3ZhIHBsdWdpbiB0aGF0IHNpbXBseSBhbGxvd3MgeW91IHRvIGltbWVkaWF0ZWx5IHBsYXkgYSB2aWRlbyBpbiBmdWxsc2NyZWVuIG1vZGUuXHJcbiAqXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29tLm1vdXN0LmNvcmRvdmEudmlkZW9wbGF5ZXJgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbVmlkZW9QbGF5ZXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3VzdC9jb3Jkb3ZhLXBsdWdpbi12aWRlb3BsYXllcikuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFZpZGVvUGxheWVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS92aWRlby1wbGF5ZXIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB2aWRlb1BsYXllcjogVmlkZW9QbGF5ZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogLy8gUGxheWluZyBhIHZpZGVvLlxyXG4gKiB0aGlzLnZpZGVvUGxheWVyLnBsYXkoJ2ZpbGU6Ly8vYW5kcm9pZF9hc3NldC93d3cvbW92aWUubXA0JykudGhlbigoKSA9PiB7XHJcbiAqICBjb25zb2xlLmxvZygndmlkZW8gY29tcGxldGVkJyk7XHJcbiAqIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAqICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gKiB9KTtcclxuICpcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIFZpZGVvT3B0aW9uc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1ZpZGVvUGxheWVyJyxcclxuICBwbHVnaW46ICdodHRwczovL2dpdGh1Yi5jb20vbW91c3QvY29yZG92YS1wbHVnaW4tdmlkZW9wbGF5ZXIuZ2l0JyxcclxuICBwbHVnaW5SZWY6ICdWaWRlb1BsYXllcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tb3VzdC9jb3Jkb3ZhLXBsdWdpbi12aWRlb3BsYXllcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmlkZW9QbGF5ZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogUGxheXMgdGhlIHZpZGVvIGZyb20gdGhlIHBhc3NlZCB1cmwuXHJcbiAgICogQHBhcmFtIGZpbGVVcmwge3N0cmluZ30gRmlsZSB1cmwgdG8gdGhlIHZpZGVvLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtWaWRlb09wdGlvbnM/fSBPcHRpb25hbCB2aWRlbyBwbGF5YmFjayBzZXR0aW5ncy4gU2VlIG9wdGlvbnMgYWJvdmUuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgcHJvbWlzZSB3aGVuIHRoZSB2aWRlbyB3YXMgcGxheWVkIHN1Y2Nlc3NmdWxseS5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcGxheShmaWxlVXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBWaWRlb09wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcHMgdGhlIHZpZGVvIHBsYXliYWNrIGltbWVkaWF0bHkuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgY2xvc2UoKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==