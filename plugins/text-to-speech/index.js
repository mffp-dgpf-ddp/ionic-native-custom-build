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
var TextToSpeechOriginal = /** @class */ (function (_super) {
    __extends(TextToSpeechOriginal, _super);
    function TextToSpeechOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextToSpeechOriginal.prototype.speak = function (textOrOptions) { return cordova(this, "speak", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    TextToSpeechOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    TextToSpeechOriginal.pluginName = "Text To Speech";
    TextToSpeechOriginal.plugin = "cordova-plugin-tts";
    TextToSpeechOriginal.pluginRef = "TTS";
    TextToSpeechOriginal.repo = "https://github.com/vilic/cordova-plugin-tts";
    TextToSpeechOriginal.platforms = ["Android", "iOS", "Windows Phone 8"];
    return TextToSpeechOriginal;
}(IonicNativePlugin));
var TextToSpeech = new TextToSpeechOriginal();
export { TextToSpeech };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RleHQtdG8tc3BlZWNoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXdDdEMsZ0NBQWlCOzs7O0lBVWpELDRCQUFLLGFBQUMsYUFBa0M7SUFTeEMsMkJBQUk7Ozs7Ozt1QkE1RE47RUF5Q2tDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVFRTT3B0aW9ucyB7XHJcbiAgLyoqIHRleHQgdG8gc3BlYWsgKi9cclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgLyoqIGEgc3RyaW5nIGxpa2UgJ2VuLVVTJywgJ3poLUNOJywgZXRjICovXHJcbiAgbG9jYWxlPzogc3RyaW5nO1xyXG4gIC8qKiBzcGVlZCByYXRlLCAwIH4gMSAqL1xyXG4gIHJhdGU/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBUZXh0IFRvIFNwZWVjaFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGV4dCB0byBTcGVlY2ggcGx1Z2luXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFRleHRUb1NwZWVjaCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdGV4dC10by1zcGVlY2gvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0dHM6IFRleHRUb1NwZWVjaCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLnR0cy5zcGVhaygnSGVsbG8gV29ybGQnKVxyXG4gKiAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzJykpXHJcbiAqICAgLmNhdGNoKChyZWFzb246IGFueSkgPT4gY29uc29sZS5sb2cocmVhc29uKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBUVFNPcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnVGV4dCBUbyBTcGVlY2gnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXR0cycsXHJcbiAgcGx1Z2luUmVmOiAnVFRTJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpbGljL2NvcmRvdmEtcGx1Z2luLXR0cycsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUgOCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUZXh0VG9TcGVlY2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBzcGVha3NcclxuICAgKiBAcGFyYW0gdGV4dE9yT3B0aW9ucyB7c3RyaW5nIHwgVFRTT3B0aW9uc30gVGV4dCB0byBzcGVhayBvciBUVFNPcHRpb25zXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHNwZWFraW5nIGZpbmlzaGVzXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAxLFxyXG4gICAgZXJyb3JJbmRleDogMixcclxuICB9KVxyXG4gIHNwZWFrKHRleHRPck9wdGlvbnM6IHN0cmluZyB8IFRUU09wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcCBhbnkgY3VycmVudCBUVFMgcGxheWJhY2tcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0b3AoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19