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
var ImageResizerOriginal = /** @class */ (function (_super) {
    __extends(ImageResizerOriginal, _super);
    function ImageResizerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageResizerOriginal.prototype.resize = function (options) { return cordova(this, "resize", {}, arguments); };
    ImageResizerOriginal.pluginName = "ImageResizer";
    ImageResizerOriginal.plugin = "info.protonet.imageresizer";
    ImageResizerOriginal.pluginRef = "ImageResizer";
    ImageResizerOriginal.repo = "https://github.com/JoschkaSchulz/cordova-plugin-image-resizer";
    ImageResizerOriginal.platforms = ["Android", "iOS", "Windows"];
    return ImageResizerOriginal;
}(IonicNativePlugin));
var ImageResizer = new ImageResizerOriginal();
export { ImageResizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ltYWdlLXJlc2l6ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBaUZ0QyxnQ0FBaUI7Ozs7SUFLakQsNkJBQU0sYUFBQyxPQUE0Qjs7Ozs7O3VCQXZGckM7RUFrRmtDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VSZXNpemVyT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIFVSSSBmb3IgdGhlIGltYWdlIG9uIHRoZSBkZXZpY2UgdG8gZ2V0IHNjYWxlZFxyXG4gICAqL1xyXG4gIHVyaTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZm9sZGVyIHRoZSBpbWFnZSBzaG91bGQgYmUgcHV0XHJcbiAgICogKEFuZHJvaWQgb25seSlcclxuICAgKi9cclxuICBmb2xkZXJOYW1lPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBIGN1c3RvbSBuYW1lIGZvciB0aGUgZmlsZS4gRGVmYXVsdCBuYW1lIGlzIGEgdGltZXN0YW1wLiBZb3UgaGF2ZSB0byBzZXQgdGhpcyB2YWx1ZSBvbiBpT1NcclxuICAgKi9cclxuICBmaWxlTmFtZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBRdWFsaXR5IGdpdmVuIGFzIE51bWJlciBmb3IgdGhlIHF1YWxpdHkgb2YgdGhlIG5ldyBpbWFnZVxyXG4gICAqIChBbmRyb2lkIGFuZCBpT1Mgb25seSlcclxuICAgKi9cclxuICBxdWFsaXR5PzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgd2lkdGggb2YgdGhlIG5ldyBpbWFnZVxyXG4gICAqL1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIG5ldyBpbWFnZVxyXG4gICAqL1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBXaGV0aGVyIG9yIG5vdCB0byByZXR1cm4gYSBiYXNlNjQgZW5jb2RlZCBpbWFnZSBzdHJpbmcgaW5zdGVhZCBvZiB0aGUgcGF0aCB0byB0aGUgcmVzaXplZCBpbWFnZS5cclxuICAgKiBpT1Mgb25seVxyXG4gICAqL1xyXG4gIGJhc2U2ND86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBJbWFnZSBSZXNpemVyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIFBsdWdpbiBGb3IgSW1hZ2UgUmVzaXplXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEltYWdlUmVzaXplciwgSW1hZ2VSZXNpemVyT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW1hZ2UtcmVzaXplci9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGltYWdlUmVzaXplcjogSW1hZ2VSZXNpemVyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGxldCBvcHRpb25zID0ge1xyXG4gKiAgdXJpOiB1cmksXHJcbiAqICBmb2xkZXJOYW1lOiAnUHJvdG9uZXQnLFxyXG4gKiAgcXVhbGl0eTogOTAsXHJcbiAqICB3aWR0aDogMTI4MCxcclxuICogIGhlaWdodDogMTI4MFxyXG4gKiB9IGFzIEltYWdlUmVzaXplck9wdGlvbnM7XHJcbiAqXHJcbiAqIHRoaXMuaW1hZ2VSZXNpemVyXHJcbiAqICAgLnJlc2l6ZShvcHRpb25zKVxyXG4gKiAgIC50aGVuKChmaWxlUGF0aDogc3RyaW5nKSA9PiBjb25zb2xlLmxvZygnRmlsZVBhdGgnLCBmaWxlUGF0aCkpXHJcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gKlxyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogSW1hZ2VSZXNpemVyT3B0aW9uc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0ltYWdlUmVzaXplcicsXHJcbiAgcGx1Z2luOiAnaW5mby5wcm90b25ldC5pbWFnZXJlc2l6ZXInLFxyXG4gIHBsdWdpblJlZjogJ0ltYWdlUmVzaXplcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Kb3NjaGthU2NodWx6L2NvcmRvdmEtcGx1Z2luLWltYWdlLXJlc2l6ZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEltYWdlUmVzaXplciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZXNpemUob3B0aW9uczogSW1hZ2VSZXNpemVyT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==