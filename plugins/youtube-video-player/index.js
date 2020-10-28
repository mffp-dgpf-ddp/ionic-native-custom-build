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
var YoutubeVideoPlayerOriginal = /** @class */ (function (_super) {
    __extends(YoutubeVideoPlayerOriginal, _super);
    function YoutubeVideoPlayerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YoutubeVideoPlayerOriginal.prototype.openVideo = function (videoId) { return cordova(this, "openVideo", { "sync": true }, arguments); };
    YoutubeVideoPlayerOriginal.pluginName = "YoutubeVideoPlayer";
    YoutubeVideoPlayerOriginal.plugin = "cordova-plugin-youtube-video-player";
    YoutubeVideoPlayerOriginal.pluginRef = "YoutubeVideoPlayer";
    YoutubeVideoPlayerOriginal.repo = "https://github.com/ihadeed/CordovaYoutubeVideoPlayer";
    YoutubeVideoPlayerOriginal.platforms = ["Android", "iOS"];
    return YoutubeVideoPlayerOriginal;
}(IonicNativePlugin));
var YoutubeVideoPlayer = new YoutubeVideoPlayerOriginal();
export { YoutubeVideoPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3lvdXR1YmUtdmlkZW8tcGxheWVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWtDaEMsc0NBQWlCOzs7O0lBTXZELHNDQUFTLGFBQUMsT0FBZTs7Ozs7OzZCQXpDM0I7RUFtQ3dDLGlCQUFpQjtTQUE1QyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG4vKipcclxuICogQG5hbWUgWW91dHViZSBWaWRlbyBQbGF5ZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFBsYXlzIFlvdVR1YmUgdmlkZW9zIGluIE5hdGl2ZSBZb3VUdWJlIEFwcFxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogRm9yIEFuZHJvaWQgNS4wKyB5b3Ugd2lsbCBuZWVkIHRvIGFkZCB0aGUgZm9sbG93aW5nIHRvIGNvbmZpZy54bWxcclxuICogYGBgeG1sXHJcbiAqIDxwcmVmZXJlbmNlIG5hbWU9XCJZb3VUdWJlRGF0YUFwaUtleVwiIHZhbHVlPVwiW1lPVVIgWU9VVFVCRSBBUEldXCIgLz5cclxuICogYGBgXHJcbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2dldHRpbmctc3RhcnRlZFxyXG4gKlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFlvdXR1YmVWaWRlb1BsYXllciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUveW91dHViZS12aWRlby1wbGF5ZXIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB5b3V0dWJlOiBZb3V0dWJlVmlkZW9QbGF5ZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy55b3V0dWJlLm9wZW5WaWRlbygnbXl2aWRlb2lkJyk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1lvdXR1YmVWaWRlb1BsYXllcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4teW91dHViZS12aWRlby1wbGF5ZXInLFxyXG4gIHBsdWdpblJlZjogJ1lvdXR1YmVWaWRlb1BsYXllcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9paGFkZWVkL0NvcmRvdmFZb3V0dWJlVmlkZW9QbGF5ZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBZb3V0dWJlVmlkZW9QbGF5ZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogUGxheXMgYSBZb3VUdWJlIHZpZGVvXHJcbiAgICogQHBhcmFtIHZpZGVvSWQge3N0cmluZ30gVmlkZW8gSURcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBvcGVuVmlkZW8odmlkZW9JZDogc3RyaW5nKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==