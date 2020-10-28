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
var PhotoViewerOriginal = /** @class */ (function (_super) {
    __extends(PhotoViewerOriginal, _super);
    function PhotoViewerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhotoViewerOriginal.prototype.show = function (url, title, options) { return cordova(this, "show", { "sync": true }, arguments); };
    PhotoViewerOriginal.pluginName = "PhotoViewer";
    PhotoViewerOriginal.plugin = "com-sarriaroman-photoviewer";
    PhotoViewerOriginal.pluginRef = "PhotoViewer";
    PhotoViewerOriginal.repo = "https://github.com/sarriaroman/photoviewer";
    PhotoViewerOriginal.platforms = ["Android", "iOS"];
    return PhotoViewerOriginal;
}(IonicNativePlugin));
var PhotoViewer = new PhotoViewerOriginal();
export { PhotoViewer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bob3RvLXZpZXdlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF3RHZDLCtCQUFpQjs7OztJQVFoRCwwQkFBSSxhQUFDLEdBQVcsRUFBRSxLQUFjLEVBQUUsT0FBNEI7Ozs7OztzQkFqRWhFO0VBeURpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBob3RvVmlld2VyT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhlIHNoYXJlIGJ1dHRvbiAoQW5kcm9pZCBvbmx5KS4gRGVmYXVsdDogdHJ1ZVxyXG4gICAqL1xyXG4gIHNoYXJlPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBBZGQgSFRUUCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0LiAgVXNlZnVsIGZvciBhdXRoZW50aWNhdGVkIHBhZ2VzLlxyXG4gICAqIFRoZSB2YWx1ZSBpcyBhIHN0cmluZyBpbiBhIEpTT04gZm9ybWF0LiAgRGVmYXVsdDogJydcclxuICAgKi9cclxuICBoZWFkZXJzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbiBmb3IgY2xvc2UgYnV0dG9uIHZpc2liaWxpdHkgd2hlbiBzaGFyZSBmYWxzZSBbT05MWSBGT1IgaU9TXVxyXG4gICAqL1xyXG4gIGNsb3NlQnV0dG9uPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBJZiB5b3UgbmVlZCB0byBjb3B5IGltYWdlIHRvIHJlZmVyZW5jZSBiZWZvcmUgc2hvdyB0aGVuIHNldCBpdCB0cnVlIFtPTkxZIEZPUiBpT1NdXHJcbiAgICovXHJcbiAgY29weVRvUmVmZXJlbmNlPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBFbmFibGUgb3IgRGlzYWJsZSBQaWNhc3NvIE9wdGlvbnMgKCBPbmx5IEFuZHJvaWQgKTogZml0LCBjZW50ZXJJbnNpZGUsIGNlbnRlckNyb3AuXHJcbiAgICovXHJcbiAgcGljY2Fzb09wdGlvbnM/OiB7XHJcbiAgICBmaXQ/OiBib29sZWFuO1xyXG4gICAgY2VudGVySW5zaWRlPzogYm9vbGVhbjtcclxuICAgIGNlbnRlckNyb3A/OiBib29sZWFuO1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBQaG90byBWaWV3ZXJcclxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGNhbiBkaXNwbGF5IHlvdXIgaW1hZ2UgaW4gZnVsbCBzY3JlZW4gd2l0aCB0aGUgYWJpbGl0eSB0byBwYW4sIHpvb20sIGFuZCBzaGFyZSB0aGUgaW1hZ2UuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFBob3RvVmlld2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9waG90by12aWV3ZXIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBwaG90b1ZpZXdlcjogUGhvdG9WaWV3ZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5waG90b1ZpZXdlci5zaG93KCdodHRwczovL215c2l0ZS5jb20vcGF0aC90by9pbWFnZS5qcGcnKTtcclxuICpcclxuICogdGhpcy5waG90b1ZpZXdlci5zaG93KCdodHRwczovL215c2l0ZS5jb20vcGF0aC90by9pbWFnZS5qcGcnLCAnTXkgaW1hZ2UgdGl0bGUnLCB7c2hhcmU6IGZhbHNlfSk7XHJcbiAqXHJcbiAqIHRoaXMucGhvdG9WaWV3ZXIuc2hvdygnaHR0cHM6Ly9teXNlY3VyZXNpdGUuY29tL3BhdGgvdG8vaW1hZ2UuanBnJywgJ015IGltYWdlIHRpdGxlJywge3NoYXJlOiBmYWxzZSwgaGVhZGVyczogJ3t1c2VybmFtZTpmb28scGFzc3dvcmQ6YmFyfSd9KTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnUGhvdG9WaWV3ZXInLFxyXG4gIHBsdWdpbjogJ2NvbS1zYXJyaWFyb21hbi1waG90b3ZpZXdlcicsXHJcbiAgcGx1Z2luUmVmOiAnUGhvdG9WaWV3ZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2Fycmlhcm9tYW4vcGhvdG92aWV3ZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQaG90b1ZpZXdlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBTaG93cyBhbiBpbWFnZSBpbiBmdWxsIHNjcmVlblxyXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVVJMIG9yIHBhdGggdG8gaW1hZ2VcclxuICAgKiBAcGFyYW0gdGl0bGUge3N0cmluZ31cclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7UGhvdG9WaWV3ZXJPcHRpb25zfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNob3codXJsOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvcHRpb25zPzogUGhvdG9WaWV3ZXJPcHRpb25zKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==