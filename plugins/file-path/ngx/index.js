import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var FilePath = /** @class */ (function (_super) {
    __extends(FilePath, _super);
    function FilePath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilePath.prototype.resolveNativePath = function (path) { return cordova(this, "resolveNativePath", {}, arguments); };
    FilePath.pluginName = "FilePath";
    FilePath.plugin = "cordova-plugin-filepath";
    FilePath.pluginRef = "window.FilePath";
    FilePath.repo = "https://github.com/hiddentao/cordova-plugin-filepath";
    FilePath.platforms = ["Android"];
    FilePath = __decorate([
        Injectable()
    ], FilePath);
    return FilePath;
}(IonicNativePlugin));
export { FilePath };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtcGF0aC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpQzFDLDRCQUFpQjs7OztJQU83QyxvQ0FBaUIsYUFBQyxJQUFZOzs7Ozs7SUFQbkIsUUFBUTtRQURwQixVQUFVLEVBQUU7T0FDQSxRQUFRO21CQWxDckI7RUFrQzhCLGlCQUFpQjtTQUFsQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XHJcblxyXG4vKipcclxuICogQG5hbWUgRmlsZSBQYXRoXHJcbiAqIEBwcmVtaWVyIGZpbGVzeXN0ZW1cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gcmVzb2x2ZSB0aGUgbmF0aXZlIGZpbGVzeXN0ZW0gcGF0aCBmb3IgQW5kcm9pZCBjb250ZW50IFVSSXMgYW5kIGlzIGJhc2VkIG9uIGNvZGUgaW4gdGhlIGFGaWxlQ2hvb3NlciBsaWJyYXJ5LlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBGaWxlUGF0aCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlsZS1wYXRoL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZVBhdGg6IEZpbGVQYXRoKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuZmlsZVBhdGgucmVzb2x2ZU5hdGl2ZVBhdGgocGF0aClcclxuICogICAudGhlbihmaWxlUGF0aCA9PiBjb25zb2xlLmxvZyhmaWxlUGF0aCkpXHJcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRmlsZVBhdGgnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGVwYXRoJyxcclxuICBwbHVnaW5SZWY6ICd3aW5kb3cuRmlsZVBhdGgnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaGlkZGVudGFvL2NvcmRvdmEtcGx1Z2luLWZpbGVwYXRoJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaWxlUGF0aCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBSZXNvbHZlIG5hdGl2ZSBwYXRoIGZvciBnaXZlbiBjb250ZW50IFVSTC9wYXRoLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICBDb250ZW50IFVSTC9wYXRoLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlc29sdmVOYXRpdmVQYXRoKHBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==