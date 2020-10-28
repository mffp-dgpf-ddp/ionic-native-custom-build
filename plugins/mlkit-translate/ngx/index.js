import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var MLKitTranslate = /** @class */ (function (_super) {
    __extends(MLKitTranslate, _super);
    function MLKitTranslate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MLKitTranslate.prototype.translate = function (text, targetLanguage, sourceLanguage) { return cordova(this, "translate", {}, arguments); };
    MLKitTranslate.prototype.identifyLanguage = function (text) { return cordova(this, "identifyLanguage", {}, arguments); };
    MLKitTranslate.prototype.getDownloadedModels = function () { return cordova(this, "getDownloadedModels", {}, arguments); };
    MLKitTranslate.prototype.getAvailableModels = function () { return cordova(this, "getAvailableModels", {}, arguments); };
    MLKitTranslate.prototype.downloadModel = function (code) { return cordova(this, "downloadModel", {}, arguments); };
    MLKitTranslate.prototype.deleteModel = function (code) { return cordova(this, "deleteModel", {}, arguments); };
    MLKitTranslate.pluginName = "MLKitTranslate";
    MLKitTranslate.plugin = "cordova-plugin-mlkit-translate";
    MLKitTranslate.pluginRef = "MLKitTranslate";
    MLKitTranslate.repo = "https://github.com/rigelglen/cordova-plugin-mlkit-translate";
    MLKitTranslate.platforms = ["Android", "iOS"];
    MLKitTranslate = __decorate([
        Injectable()
    ], MLKitTranslate);
    return MLKitTranslate;
}(IonicNativePlugin));
export { MLKitTranslate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21sa2l0LXRyYW5zbGF0ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnRHBDLGtDQUFpQjs7OztJQVVuRCxrQ0FBUyxhQUFDLElBQVksRUFBRSxjQUFzQixFQUFFLGNBQXVCO0lBVXZFLHlDQUFnQixhQUFDLElBQVk7SUFTN0IsNENBQW1CO0lBU25CLDJDQUFrQjtJQVVsQixzQ0FBYSxhQUFDLElBQVk7SUFVMUIsb0NBQVcsYUFBQyxJQUFZOzs7Ozs7SUExRGIsY0FBYztRQUQxQixVQUFVLEVBQUU7T0FDQSxjQUFjO3lCQWpEM0I7RUFpRG9DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBsYW5ndWFnZSBvYmplY3Qgd2hpY2ggd2lsbCBiZSByZXR1cm5lZCBieSBgZG93bmxvYWRNb2RlbGAsIGBkZWxldGVNb2RlbGAsIGBnZXRBdmFpbGFibGVNb2RlbHNgIGFuZCBgZ2V0RG93bmxvYWRlZE1vZGVsc2AgbWV0aG9kcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VNb2RlbCB7XHJcbiAgLyoqXHJcbiAgICogQkNQLTQ3IGxhbmd1YWdlIGNvZGUgb2YgdGhlIGxhbmd1YWdlLiBGb3IgZXhhbXBsZTogZW5cclxuICAgKiBGb3IgZnVsbCBsaXN0IG9mIGxhbmd1YWdlcyBjb2Rlcywgc2VlIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL21sLWtpdC90cmFuc2xhdGlvbi1sYW5ndWFnZS1zdXBwb3J0XHJcbiAgICovXHJcbiAgY29kZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEaXNwbGF5IG5hbWUgb2YgdGhlIGxhbmd1YWdlLiBGb3IgZXhhbXBsZTogRW5nbGlzaFxyXG4gICAqL1xyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBNTEtpdFRyYW5zbGF0ZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUGx1Z2luIHRoYXQgaW1wbGVtZW50cyBNTEtpdCBUcmFuc2xhdGlvbiBhbmQgTGFuZ3VhZ2UgSWRlbnRpZmljYXRpb24gZmVhdHVyZXMuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IE1MS2l0VHJhbnNsYXRlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9tbC1raXQtdHJhbnNsYXRlJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtbGtpdFRyYW5zbGF0ZTogTUxLaXRUcmFuc2xhdGUpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5tbGtpdFRyYW5zbGF0ZS50cmFuc2xhdGUoJ0hlbGxvJywgJ2VuJywgJ2VzJylcclxuICogICAudGhlbigocmVzdWx0VGV4dDogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IHN0cmluZykgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBMYW5ndWFnZU1vZGVsXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ01MS2l0VHJhbnNsYXRlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1tbGtpdC10cmFuc2xhdGUnLFxyXG4gIHBsdWdpblJlZjogJ01MS2l0VHJhbnNsYXRlJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3JpZ2VsZ2xlbi9jb3Jkb3ZhLXBsdWdpbi1tbGtpdC10cmFuc2xhdGUnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNTEtpdFRyYW5zbGF0ZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUcmFuc2xhdGVzIHRleHQgZnJvbSBvbmUgbGFuZ3VhZ2UgdG8gYW5vdGhlci4gUmVxdWlyZXMgdGhlIHNvdXJjZSBhbmQgdGFyZ2V0IGxhbmd1YWdlcyBuZWVkIHRvIGJlIGRvd25sb2FkZWQuXHJcbiAgICogSWYgbm90IHRoZSBsYW5ndWFnZXMgYXJlIGRvd25sb2FkZWQgaW4gdGhlIGJhY2tncm91bmQgYXV0b21hdGljYWxseS5cclxuICAgKiBAcGFyYW0gdGV4dCB7c3RyaW5nfSB0ZXh0IHRvIGJlIHRyYW5zbGF0ZWRcclxuICAgKiBAcGFyYW0gdGFyZ2V0TGFuZ3VhZ2Uge3N0cmluZ30gQkNQLTQ3IGxhbmd1YWdlIGNvZGUgb2YgdGhlIGxhbmd1YWdlIHRvIHRyYW5zbGF0ZSB0b1xyXG4gICAqIEBwYXJhbSBzb3VyY2VMYW5ndWFnZSB7c3RyaW5nPX0gKG9wdGlvbmFsKSBCQ1AtNDcgbGFuZ3VhZ2UgY29kZSBvZiB0aGUgbGFuZ3VhZ2UgdG8gdHJhbnNsYXRlIHRvLiBJZiBub3QgcHJvdmlkZWQsIHNvdXJjZSBsYW5ndWFnZSBpcyBpbmZlcnJlZCBmcm9tIHRleHRcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgdHJhbnNsYXRlZCB0ZXh0XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHRyYW5zbGF0ZSh0ZXh0OiBzdHJpbmcsIHRhcmdldExhbmd1YWdlOiBzdHJpbmcsIHNvdXJjZUxhbmd1YWdlPzogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgdGhlIGxhbmd1YWdlIG9mIGEgc3RyaW5nIG9mIHRleHQuXHJcbiAgICogQHBhcmFtIHRleHQge3N0cmluZ30gdGV4dCB0byBiZSB0cmFuc2xhdGVkXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxMYW5ndWFnZU1vZGVsPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBpZGVudGlmaWVkIGxhbmd1YWdlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlkZW50aWZ5TGFuZ3VhZ2UodGV4dDogc3RyaW5nKTogUHJvbWlzZTxMYW5ndWFnZU1vZGVsPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMaXN0IG9mIGxhbmd1YWdlIG1vZGVscyB0aGF0IGhhdmUgYmVlbiBkb3dubG9hZGVkIHRvIHRoZSBkZXZpY2UuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxMYW5ndWFnZU1vZGVsW10+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gYXJyYXkgb2YgbGFuZ3VhZ2VzIHRoYXQgaGF2ZSBiZWVuIGRvd25sb2FkZWQuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldERvd25sb2FkZWRNb2RlbHMoKTogUHJvbWlzZTxMYW5ndWFnZU1vZGVsW10+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExpc3Qgb2YgbGFuZ3VhZ2UgbW9kZWxzIHRoYXQgY2FuIGJlIGRvd25sb2FkZWQuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxMYW5ndWFnZU1vZGVsW10+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gYXJyYXkgb2YgcG9zc2libGUgbGFuZ3VhZ2VzIHRoYXQgY2FuIGJlIGRvd25sb2FkZWQuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEF2YWlsYWJsZU1vZGVscygpOiBQcm9taXNlPExhbmd1YWdlTW9kZWxbXT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRG93bmxvYWRzIGEgc3BlY2lmaWVkIGxhbmd1YWdlIG1vZGVsLlxyXG4gICAqIEBwYXJhbSBjb2RlIHtzdHJpbmd9IEJDUC00NyBsYW5ndWFnZSBjb2RlIG9mIHRoZSBsYW5ndWFnZSB0byBkb3dubG9hZFxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TGFuZ3VhZ2VNb2RlbD59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZG93bmxvYWRlZCBsYW5ndWFnZS5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZG93bmxvYWRNb2RlbChjb2RlOiBzdHJpbmcpOiBQcm9taXNlPExhbmd1YWdlTW9kZWw+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZXMgYSBzcGVjaWZpZWQgbGFuZ3VhZ2UgbW9kZWwuXHJcbiAgICogQHBhcmFtIGNvZGUge3N0cmluZ30gQkNQLTQ3IGxhbmd1YWdlIGNvZGUgb2YgdGhlIGxhbmd1YWdlIHRvIGRlbGV0ZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TGFuZ3VhZ2VNb2RlbD59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZGVsZXRlZCBsYW5ndWFnZS5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZGVsZXRlTW9kZWwoY29kZTogc3RyaW5nKTogUHJvbWlzZTxMYW5ndWFnZU1vZGVsPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==