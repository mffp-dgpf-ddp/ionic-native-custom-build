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
var LastCamOriginal = /** @class */ (function (_super) {
    __extends(LastCamOriginal, _super);
    function LastCamOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LastCamOriginal.prototype.startCamera = function (options) { return cordova(this, "startCamera", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    LastCamOriginal.prototype.stopCamera = function () { return cordova(this, "stopCamera", {}, arguments); };
    LastCamOriginal.prototype.switchCamera = function () { return cordova(this, "switchCamera", {}, arguments); };
    LastCamOriginal.prototype.switchFlash = function () { return cordova(this, "switchFlash", {}, arguments); };
    LastCamOriginal.prototype.takePicture = function () { return cordova(this, "takePicture", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    LastCamOriginal.prototype.startVideoCapture = function () { return cordova(this, "startVideoCapture", {}, arguments); };
    LastCamOriginal.prototype.stopVideoCapture = function () { return cordova(this, "stopVideoCapture", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    LastCamOriginal.prototype.recordingTimer = function () { return cordova(this, "recordingTimer", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    LastCamOriginal.prototype.watchRecordingTimer = function () { return cordova(this, "watchRecordingTimer", { "successIndex": 0, "errorIndex": 1, "observable": true }, arguments); };
    LastCamOriginal.pluginName = "LastCam";
    LastCamOriginal.plugin = "cordova-plugin-last-cam";
    LastCamOriginal.pluginRef = "LastCam";
    LastCamOriginal.repo = "https://github.com/bengejd/cordova-plugin-last-cam";
    LastCamOriginal.platforms = ["iOS"];
    return LastCamOriginal;
}(IonicNativePlugin));
var LastCam = new LastCamOriginal();
export { LastCam };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xhc3QtY2FtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBb0NMLDJCQUFpQjs7OztJQVU1Qyw2QkFBVyxhQUFDLE9BQThCO0lBUzFDLDRCQUFVO0lBU1YsOEJBQVk7SUFTWiw2QkFBVztJQVlYLDZCQUFXO0lBU1gsbUNBQWlCO0lBWWpCLGtDQUFnQjtJQVloQixnQ0FBYztJQWFkLHFDQUFtQjs7Ozs7O2tCQXJJckI7RUFzQzZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXN0Q2FtU3RhcnR1cE9wdGlvbnMge1xyXG4gIC8qKiBUaGUgbGVmdCBlZGdlIGluIHBpeGVscywgZGVmYXVsdCAwICovXHJcbiAgeD86IG51bWJlcjtcclxuXHJcbiAgLyoqIFRoZSB0b3AgZWRnZSBpbiBwaXhlbHMsIGRlZmF1bHQgMCAqL1xyXG4gIHk/OiBudW1iZXI7XHJcblxyXG4gIC8qKiBUaGUgd2lkdGggaW4gcGl4ZWxzLCBkZWZhdWx0IHdpbmRvdy5zY3JlZW4ud2lkdGggKi9cclxuICB3aWR0aD86IG51bWJlcjtcclxuXHJcbiAgLyoqIFRoZSBoZWlnaHQgaW4gcGl4ZWxzLCBkZWZhdWx0IHdpbmRvdy5zY3JlZW4uaGVpZ2h0ICovXHJcbiAgaGVpZ2h0PzogbnVtYmVyO1xyXG5cclxuICAvKiogQ2hvb3NlIHRoZSBjYW1lcmEgdG8gdXNlICdmcm9udCcgb3IgJ2JhY2snLCBkZWZhdWx0ICdmcm9udCcgKi9cclxuICBjYW1lcmE/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBMYXN0Q2FtXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBMYXN0IENhbSBpcyBhIENhbWVyYSBQcmV2aWV3IHBsdWdpbiB0aGF0IGFsbG93cyB5b3UgdG8gdGFrZSBjYXB0dXJlIGJvdGggVmlkZW9zIGFuZCBpbWFnZXMgaW4gYVxyXG4gKiBjdXN0b20gaHRtbCBwcmV2aWV3IG9mIHlvdXIgY2hvaWNlLlxyXG4gKlxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBMYXN0Q2FtU3RhcnR1cE9wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdMYXN0Q2FtJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1sYXN0LWNhbScsXHJcbiAgcGx1Z2luUmVmOiAnTGFzdENhbScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9iZW5nZWpkL2NvcmRvdmEtcGx1Z2luLWxhc3QtY2FtJyxcclxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExhc3RDYW0gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIHRoZSBjYW1lcmEgcHJldmlldyBpbnN0YW5jZS5cclxuICAgKiBAcGFyYW0ge0xhc3RDYW1TdGFydHVwT3B0aW9uc30gb3B0aW9uc1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDEsXHJcbiAgICBlcnJvckluZGV4OiAyLFxyXG4gIH0pXHJcbiAgc3RhcnRDYW1lcmEob3B0aW9uczogTGFzdENhbVN0YXJ0dXBPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3BzIHRoZSBjYW1lcmEgcHJldmlldyBpbnN0YW5jZS4gKGlPUylcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0b3BDYW1lcmEoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN3aXRjaCBmcm9tIHRoZSByZWFyIGNhbWVyYSBhbmQgZnJvbnQgY2FtZXJhLCBpZiBhdmFpbGFibGUuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzd2l0Y2hDYW1lcmEoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN3aXRjaCB0aGUgZmxhc2ggbW9kZS5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN3aXRjaEZsYXNoKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUYWtlIHRoZSBwaWN0dXJlIChiYXNlNjQpXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN1Y2Nlc3NJbmRleDogMCxcclxuICAgIGVycm9ySW5kZXg6IDEsXHJcbiAgfSlcclxuICB0YWtlUGljdHVyZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnQgdGhlIHZpZGVvIGNhcHR1cmVcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0YXJ0VmlkZW9DYXB0dXJlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wcyB0aGUgdmlkZW8gY2FwdHVyZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDAsXHJcbiAgICBlcnJvckluZGV4OiAxLFxyXG4gIH0pXHJcbiAgc3RvcFZpZGVvQ2FwdHVyZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJvbWlzZSBvZiB0aGUgcmVjb3JkaW5nVGltZXIuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN1Y2Nlc3NJbmRleDogMCxcclxuICAgIGVycm9ySW5kZXg6IDEsXHJcbiAgfSlcclxuICByZWNvcmRpbmdUaW1lcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT2JzZXJ2YWJsZSBvZiB0aGUgcmVjb3JkaW5nVGltZXIuXHJcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN1Y2Nlc3NJbmRleDogMCxcclxuICAgIGVycm9ySW5kZXg6IDEsXHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgd2F0Y2hSZWNvcmRpbmdUaW1lcigpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=