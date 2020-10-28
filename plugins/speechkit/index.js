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
var SpeechKitOriginal = /** @class */ (function (_super) {
    __extends(SpeechKitOriginal, _super);
    function SpeechKitOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpeechKitOriginal.prototype.tts = function (text, language, voice) { return cordova(this, "tts", {}, arguments); };
    SpeechKitOriginal.prototype.asr = function (language) { return cordova(this, "asr", { "platforms": ["Android"] }, arguments); };
    SpeechKitOriginal.pluginName = "SpeechKit";
    SpeechKitOriginal.plugin = "cordova-plugin-nuance-speechkit";
    SpeechKitOriginal.pluginRef = "plugins.speechkit";
    SpeechKitOriginal.repo = "https://github.com/Shmarkus/cordova-plugin-nuance-speechkit";
    SpeechKitOriginal.platforms = ["Android", "iOS"];
    return SpeechKitOriginal;
}(IonicNativePlugin));
var SpeechKit = new SpeechKitOriginal();
export { SpeechKit };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NwZWVjaGtpdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE2QnpDLDZCQUFpQjs7OztJQU05Qyx1QkFBRyxhQUFDLElBQVksRUFBRSxRQUFnQixFQUFFLEtBQWE7SUFXakQsdUJBQUcsYUFBQyxRQUFnQjs7Ozs7O29CQS9DdEI7RUE4QitCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTcGVlY2hLaXRcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEltcGxlbWVudGF0aW9uIG9mIE51YW5jZSBTcGVlY2hLaXQgU0RLIG9uIElvbmljXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNwZWVjaEtpdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BlZWNoa2l0L25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3BlZWNoa2l0OiBTcGVlY2hLaXQpIHsgfVxyXG4gKlxyXG4gKlxyXG4gKiAvLyBmaW5kIHZvaWNlIG5hbWVzIHRoYXQgbWF0Y2ggbGFuZ3VhZ2UgZnJvbTogaHR0cHM6Ly9kZXZlbG9wZXIubnVhbmNlLmNvbS9wdWJsaWMvaW5kZXgucGhwP3Rhc2s9c3VwcG9ydGVkTGFuZ3VhZ2VzXHJcbiAqIHRoaXMuc3BlZWNoa2l0LnR0cygnVGV4dCB0byBiZSByZWFkIG91dCBsb3VkJywgJ0VORy1HQlInLCAnU2VyZW5hJykudGhlbihcclxuICogICAobXNnKSA9PiB7IGNvbnNvbGUubG9nKG1zZyk7IH0sXHJcbiAqICAgKGVycikgPT4geyBjb25zb2xlLmxvZyhlcnIpOyB9XHJcbiAqICk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1NwZWVjaEtpdCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbnVhbmNlLXNwZWVjaGtpdCcsXHJcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5zcGVlY2hraXQnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vU2htYXJrdXMvY29yZG92YS1wbHVnaW4tbnVhbmNlLXNwZWVjaGtpdCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNwZWVjaEtpdCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBTcGVhayB0ZXh0IG91dCBsb3VkIGluIGdpdmVuIGxhbmd1YWdlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgdHRzKHRleHQ6IHN0cmluZywgbGFuZ3VhZ2U6IHN0cmluZywgdm9pY2U6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcnkgdG8gcmVjb2duaXplIHdoYXQgdGhlIHVzZXIgc2FpZFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxuICB9KVxyXG4gIGFzcihsYW5ndWFnZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19