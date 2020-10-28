import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
export var OutputType;
(function (OutputType) {
    OutputType[OutputType["FILE_URL"] = 0] = "FILE_URL";
    OutputType[OutputType["DATA_URL"] = 1] = "DATA_URL";
})(OutputType || (OutputType = {}));
var ImagePicker = /** @class */ (function (_super) {
    __extends(ImagePicker, _super);
    function ImagePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImagePicker.prototype.getPictures = function (options) { return cordova(this, "getPictures", { "callbackOrder": "reverse" }, arguments); };
    ImagePicker.prototype.hasReadPermission = function () { return cordova(this, "hasReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePicker.prototype.requestReadPermission = function () { return cordova(this, "requestReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePicker.pluginName = "ImagePicker";
    ImagePicker.plugin = "cordova-plugin-telerik-imagepicker";
    ImagePicker.pluginRef = "window.imagePicker";
    ImagePicker.repo = "https://github.com/Telerik-Verified-Plugins/ImagePicker";
    ImagePicker.install = "ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION=\"your usage message\"";
    ImagePicker.installVariables = ["PHOTO_LIBRARY_USAGE_DESCRIPTION"];
    ImagePicker.platforms = ["Android", "iOS"];
    ImagePicker = __decorate([
        Injectable()
    ], ImagePicker);
    return ImagePicker;
}(IonicNativePlugin));
export { ImagePicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ltYWdlLXBpY2tlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQW9EeEUsTUFBTSxDQUFOLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQixtREFBWSxDQUFBO0lBQ1osbURBQVEsQ0FBQTtBQUNWLENBQUMsRUFIVyxVQUFVLEtBQVYsVUFBVSxRQUdyQjs7SUF3Q2dDLCtCQUFpQjs7OztJQVVoRCxpQ0FBVyxhQUFDLE9BQTJCO0lBV3ZDLHVDQUFpQjtJQVdqQiwyQ0FBcUI7Ozs7Ozs7O0lBaENWLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVztzQkFoR3hCO0VBZ0dpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlUGlja2VyT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogbWF4IGltYWdlcyB0byBiZSBzZWxlY3RlZCwgZGVmYXVsdHMgdG8gMTUuIElmIHRoaXMgaXMgc2V0IHRvIDEsIHVwb24gc2VsZWN0aW9uIG9mIGEgc2luZ2xlIGltYWdlLCB0aGUgcGx1Z2luIHdpbGwgcmV0dXJuIGl0LiAoQW5kcm9pZCBvbmx5KVxyXG4gICAqL1xyXG4gIG1heGltdW1JbWFnZXNDb3VudD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogTWF4IHdpZHRoIHRvIGFsbG93IGltYWdlcyB0byBiZVxyXG4gICAqL1xyXG4gIHdpZHRoPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBNYXggaGVpZ2h0IHRvIGFsbG93IGltYWdlcyB0byBiZVxyXG4gICAqL1xyXG4gIGhlaWdodD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogUXVhbGl0eSBvZiBpbWFnZXMsIGRlZmF1bHRzIHRvIDEwMFxyXG4gICAqL1xyXG4gIHF1YWxpdHk/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFZpZGVvcyBhbGxvd2VkP1xyXG4gICAqL1xyXG4gIGFsbG93X3ZpZGVvPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogdGhlIGRlZmF1bHQgaXMgdGhlIG1lc3NhZ2Ugb2YgdGhlIG9sZCBwbHVnaW4gaW1wbFxyXG4gICAqL1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiB0aGUgb2xkIHBsdWdpbiBpbXBsIGRpZG4ndCBoYXZlIGl0LCBzbyBwYXNzaW5nIG51bGwgYnkgZGVmYXVsdFxyXG4gICAqL1xyXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUuXHJcbiAgICogRGVmaW5lZCBpbiBJbWFnZVBpY2tlci5PdXRwdXRUeXBlLiBEZWZhdWx0IGlzIEZJTEVfVVJJLlxyXG4gICAqICAgICAgRklMRV9VUkkgOiAwLCAgIFJldHVybiBpbWFnZSBmaWxlIFVSSSxcclxuICAgKiAgICAgIERBVEFfVVJMIDogMSwgICBSZXR1cm4gaW1hZ2UgYXMgYmFzZTY0LWVuY29kZWQgc3RyaW5nXHJcbiAgICovXHJcbiAgb3V0cHV0VHlwZT86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogRGlzYWJsZSB0aGUgaU9TIHBvcG92ZXIgYXMgc2VlbiBvbiBpUGFkXHJcbiAgICovXHJcbiAgZGlzYWJsZV9wb3BvdmVyPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gT3V0cHV0VHlwZSB7XHJcbiAgRklMRV9VUkwgPSAwLFxyXG4gIERBVEFfVVJMLFxyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgSW1hZ2UgUGlja2VyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIFBsdWdpbiBGb3IgTXVsdGlwbGUgSW1hZ2UgU2VsZWN0aW9uXHJcbiAqXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4taW1hZ2UtcGlja2VyYC5cclxuICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgaHR0cHM6Ly9naXRodWIuY29tL1RlbGVyaWstVmVyaWZpZWQtUGx1Z2lucy9JbWFnZVBpY2tlclxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBJbWFnZVBpY2tlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW1hZ2UtcGlja2VyL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaW1hZ2VQaWNrZXI6IEltYWdlUGlja2VyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuaW1hZ2VQaWNrZXIuZ2V0UGljdHVyZXMob3B0aW9ucykudGhlbigocmVzdWx0cykgPT4ge1xyXG4gKiAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xyXG4gKiAgICAgICBjb25zb2xlLmxvZygnSW1hZ2UgVVJJOiAnICsgcmVzdWx0c1tpXSk7XHJcbiAqICAgfVxyXG4gKiB9LCAoZXJyKSA9PiB7IH0pO1xyXG4gKlxyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogSW1hZ2VQaWNrZXJPcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSW1hZ2VQaWNrZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXRlbGVyaWstaW1hZ2VwaWNrZXInLFxyXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5pbWFnZVBpY2tlcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UZWxlcmlrLVZlcmlmaWVkLVBsdWdpbnMvSW1hZ2VQaWNrZXInLFxyXG4gIGluc3RhbGw6XHJcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXRlbGVyaWstaW1hZ2VwaWNrZXIgLS12YXJpYWJsZSBQSE9UT19MSUJSQVJZX1VTQUdFX0RFU0NSSVBUSU9OPVwieW91ciB1c2FnZSBtZXNzYWdlXCInLFxyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnUEhPVE9fTElCUkFSWV9VU0FHRV9ERVNDUklQVElPTiddLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVBpY2tlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBQaWNrIHBpY3R1cmVzIGZyb20gdGhlIGxpYnJhcnkuXHJcbiAgICogQHBhcmFtIHtJbWFnZVBpY2tlck9wdGlvbnN9IG9wdGlvbnNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRoZSBpbWFnZSBmaWxlIFVSSVxyXG4gICAqIG90aGVyd2lzZSByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgZ2V0UGljdHVyZXMob3B0aW9uczogSW1hZ2VQaWNrZXJPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHdlIGhhdmUgcGVybWlzc2lvbiB0byByZWFkIGltYWdlc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgd2UgaGF2ZSBwZXJtaXNzaW9uXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxuICB9KVxyXG4gIGhhc1JlYWRQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVxdWVzdCBwZXJtaXNzaW9uIHRvIHJlYWQgaW1hZ2VzXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG4gIH0pXHJcbiAgcmVxdWVzdFJlYWRQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==