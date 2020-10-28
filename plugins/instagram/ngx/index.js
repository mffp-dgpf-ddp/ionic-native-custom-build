import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Instagram.prototype.isInstalled = function () { return cordova(this, "isInstalled", { "callbackStyle": "node" }, arguments); };
    Instagram.prototype.share = function (canvasIdOrDataUrl, caption) { return cordova(this, "share", { "callbackStyle": "node" }, arguments); };
    Instagram.prototype.shareAsset = function (assetLocalIdentifier) { return cordova(this, "shareAsset", { "callbackOrder": "reverse" }, arguments); };
    Instagram.pluginName = "Instagram";
    Instagram.plugin = "cordova-instagram-plugin";
    Instagram.pluginRef = "Instagram";
    Instagram.repo = "https://github.com/vstirbu/InstagramPlugin";
    Instagram.platforms = ["Android", "iOS"];
    Instagram = __decorate([
        Injectable()
    ], Instagram);
    return Instagram;
}(IonicNativePlugin));
export { Instagram };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luc3RhZ3JhbS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE0QnpDLDZCQUFpQjs7OztJQVM5QywrQkFBVztJQWVYLHlCQUFLLGFBQUMsaUJBQXlCLEVBQUUsT0FBZ0I7SUFZakQsOEJBQVUsYUFBQyxvQkFBNEI7Ozs7OztJQXBDNUIsU0FBUztRQURyQixVQUFVLEVBQUU7T0FDQSxTQUFTO29CQTdCdEI7RUE2QitCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBJbnN0YWdyYW1cclxuICogQGRlc2NyaXB0aW9uIFNoYXJlIGEgcGhvdG8gd2l0aCB0aGUgaW5zdGFncmFtIGFwcFxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBJbnN0YWdyYW0gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2luc3RhZ3JhbS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGluc3RhZ3JhbTogSW5zdGFncmFtKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuaW5zdGFncmFtLnNoYXJlKCdkYXRhOmltYWdlL3BuZzt1aGR1aGYzaGZpZjMzJywgJ0NhcHRpb24nKVxyXG4gKiAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdTaGFyZWQhJykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0luc3RhZ3JhbScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1pbnN0YWdyYW0tcGx1Z2luJyxcclxuICBwbHVnaW5SZWY6ICdJbnN0YWdyYW0nLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdnN0aXJidS9JbnN0YWdyYW1QbHVnaW4nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbnN0YWdyYW0gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogRGV0ZWN0IGlmIHRoZSBJbnN0YWdyYW0gYXBwbGljYXRpb24gaXMgaW5zdGFsbGVkIG9uIHRoZSBkZXZpY2UuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFufHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmV0dXJucyBhIGJvb2xlYW4gdmFsdWUgaWYgaW5zdGFsbGVkLCBvciB0aGUgYXBwIHZlcnNpb24gb24gYW5kcm9pZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrU3R5bGU6ICdub2RlJyxcclxuICB9KVxyXG4gIGlzSW5zdGFsbGVkKCk6IFByb21pc2U8Ym9vbGVhbiB8IHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hhcmUgYW4gaW1hZ2Ugb24gSW5zdGFncmFtXHJcbiAgICogTm90ZTogSW5zdGFncmFtIGFwcCBzdG9wcGVkIGFjY2VwdGluZyBwcmUtZmlsbGVkIGNhcHRpb25zIG9uIGJvdGggaU9TIGFuZCBBbmRyb2lkLiBBcyBhIHdvcmstYXJvdW5kLCB0aGUgY2FwdGlvbiBpcyBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZC4gWW91IGhhdmUgdG8gaW5mb3JtIHlvdXIgdXNlcnMgdG8gcGFzdGUgdGhlIGNhcHRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY2FudmFzSWRPckRhdGFVcmwgVGhlIGNhbnZhcyBlbGVtZW50IGlkIG9yIHRoZSBkYXRhVVJMIG9mIHRoZSBpbWFnZSB0byBzaGFyZVxyXG4gICAqIEBwYXJhbSBjYXB0aW9uIFRoZSBjYXB0aW9uIG9mIHRoZSBpbWFnZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIGltYWdlIHdhcyBzaGFyZWRcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZScsXHJcbiAgfSlcclxuICBzaGFyZShjYW52YXNJZE9yRGF0YVVybDogc3RyaW5nLCBjYXB0aW9uPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNoYXJlIGEgbGlicmFyeSBhc3NldCBvciB2aWRlb1xyXG4gICAqIEBwYXJhbSBhc3NldExvY2FsSWRlbnRpZmllciBBIGxvY2FsIGZpbGVVUklcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIHRoZSBpbWFnZSB3YXMgc2hhcmVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgc2hhcmVBc3NldChhc3NldExvY2FsSWRlbnRpZmllcjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19