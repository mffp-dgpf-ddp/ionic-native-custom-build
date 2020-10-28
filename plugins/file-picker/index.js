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
var IOSFilePickerOriginal = /** @class */ (function (_super) {
    __extends(IOSFilePickerOriginal, _super);
    function IOSFilePickerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IOSFilePickerOriginal.prototype.pickFile = function (utis, position) { return cordova(this, "pickFile", { "callbackOrder": "reverse" }, arguments); };
    IOSFilePickerOriginal.pluginName = "iOS File Picker";
    IOSFilePickerOriginal.plugin = "cordova-plugin-filepicker";
    IOSFilePickerOriginal.pluginRef = "FilePicker";
    IOSFilePickerOriginal.repo = "https://github.com/jcesarmobile/FilePicker-Phonegap-iOS-Plugin";
    IOSFilePickerOriginal.platforms = ["iOS"];
    return IOSFilePickerOriginal;
}(IonicNativePlugin));
var IOSFilePicker = new IOSFilePickerOriginal();
export { IOSFilePicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtcGlja2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXVDckMsaUNBQWlCOzs7O0lBVWxELGdDQUFRLGFBQUMsSUFBd0IsRUFBRSxRQUFnQzs7Ozs7O3dCQWxEckU7RUF3Q21DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9TRmlsZVBpY2tlclBvc2l0aW9uIHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBpT1MgRmlsZSBQaWNrZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE9wZW5zIHRoZSBmaWxlIHBpY2tlciBvbiBpT1MgZm9yIHRoZSB1c2VyIHRvIHNlbGVjdCBhIGZpbGUsIHJldHVybnMgYSBmaWxlIFVSSS5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgSU9TRmlsZVBpY2tlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlsZS1waWNrZXIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlUGlja2VyOiBJT1NGaWxlUGlja2VyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuZmlsZVBpY2tlci5waWNrRmlsZSgpXHJcbiAqICAgLnRoZW4odXJpID0+IGNvbnNvbGUubG9nKHVyaSkpXHJcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3InLCBlcnIpKTtcclxuICpcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIElPU0ZpbGVQaWNrZXJQb3NpdGlvblxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ2lPUyBGaWxlIFBpY2tlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZXBpY2tlcicsXHJcbiAgcGx1Z2luUmVmOiAnRmlsZVBpY2tlcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2VzYXJtb2JpbGUvRmlsZVBpY2tlci1QaG9uZWdhcC1pT1MtUGx1Z2luJyxcclxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIElPU0ZpbGVQaWNrZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogT3BlbiBhIGZpbGVcclxuICAgKiBAcGFyYW1zIHtzdHJpbmcgfCBzdHJpbmdbXX0gW3V0aXNdXHJcbiAgICogQHBhcmFtcyB7SU9TRmlsZVBpY2tlclBvc2l0aW9ufSBbcG9zaXRpb25dIFNldCB0aGUgcG9zaXRpb24gb2YgdGhlIHJlY3RhbmdsZSB3aGVyZSB0aGUgZmlsZSBwaWNrZXIgc2hvdWxkIHNob3cgdXAuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBwaWNrRmlsZSh1dGlzPzogc3RyaW5nIHwgc3RyaW5nW10sIHBvc2l0aW9uPzogSU9TRmlsZVBpY2tlclBvc2l0aW9uKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19