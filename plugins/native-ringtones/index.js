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
var NativeRingtonesOriginal = /** @class */ (function (_super) {
    __extends(NativeRingtonesOriginal, _super);
    function NativeRingtonesOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeRingtonesOriginal.prototype.getRingtone = function () { return cordova(this, "getRingtone", {}, arguments); };
    NativeRingtonesOriginal.prototype.playRingtone = function (ringtoneUri) { return cordova(this, "playRingtone", {}, arguments); };
    NativeRingtonesOriginal.prototype.stopRingtone = function (ringtoneUri) { return cordova(this, "stopRingtone", {}, arguments); };
    NativeRingtonesOriginal.pluginName = "native-ringtones";
    NativeRingtonesOriginal.plugin = "cordova-plugin-native-ringtones";
    NativeRingtonesOriginal.pluginRef = "cordova.plugins.NativeRingtones";
    NativeRingtonesOriginal.repo = "https://github.com/TongZhangzt/cordova-plugin-native-ringtones";
    NativeRingtonesOriginal.platforms = ["Android", "iOS"];
    return NativeRingtonesOriginal;
}(IonicNativePlugin));
var NativeRingtones = new NativeRingtonesOriginal();
export { NativeRingtones };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS1yaW5ndG9uZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBa0NuQyxtQ0FBaUI7Ozs7SUFNcEQscUNBQVc7SUFVWCxzQ0FBWSxhQUFDLFdBQW1CO0lBVWhDLHNDQUFZLGFBQUMsV0FBbUI7Ozs7OzswQkE1RGxDO0VBa0NxQyxpQkFBaUI7U0FBekMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQGJldGFcclxuICogQG5hbWUgTmF0aXZlIFJpbmd0b25lc1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIHBsdWdpbiBoZWxwcyBnZXQgdGhlIG5hdGl2ZSByaW5ndG9uZXMgbGlzdCBvbiBBbmRyb2lkIG9yIElPUyBkZXZpY2VzLlxyXG4gKiBBbmQgeW91IGNhbiBhbHNvIHVzZSB0aGlzIHBsdWdpbiB0byBwbGF5IG9yIHN0b3AgdGhlIG5hdGl2ZSByaW5ndG9uZXMgYW5kIGN1c3RvbSByaW5ndG9uZXMoYWRkZWQgaW4gdGhlIHd3dyBmb2xkZXIpLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgXHJcbiAqIGltcG9ydCB7IE5hdGl2ZVJpbmd0b25lcyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmF0aXZlLXJpbmd0b25lcy9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHJpbmd0b25lczogTmF0aXZlUmluZ3RvbmVzKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqIHRoaXMucmluZ3RvbmVzLmdldFJpbmd0b25lKCkudGhlbigocmluZ3RvbmVzKSA9PiB7IGNvbnNvbGUubG9nKHJpbmd0b25lcyk7IH0pO1xyXG4gKlxyXG4gKiB0aGlzLnJpbmd0b25lcy5wbGF5UmluZ3RvbmUoJ2Fzc2V0cy9yaW5ndG9uZXMvc291bmRfMS5jYWYnKTtcclxuICpcclxuICogdGhpcy5yaW5ndG9uZXMuc3RvcFJpbmd0b25lKCdhc3NldHMvcmluZ3RvbmVzL3NvdW5kXzEuY2FmJyk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ25hdGl2ZS1yaW5ndG9uZXMnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5hdGl2ZS1yaW5ndG9uZXMnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5OYXRpdmVSaW5ndG9uZXMnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVG9uZ1poYW5nenQvY29yZG92YS1wbHVnaW4tbmF0aXZlLXJpbmd0b25lcycsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5hdGl2ZVJpbmd0b25lcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBHZXQgdGhlIHJpbmd0b25lIGxpc3Qgb2YgdGhlIGRldmljZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHJpbmd0b25lcyBmb3VuZCBzdWNjZXNzZnVsbHlcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0UmluZ3RvbmUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RhcnRzIHBsYXlpbmcgdGhlIHJpbmd0b25lXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJpbmd0b25lVXJpIFRoZSBwYXRoIHRvIHRoZSByaW5ndG9uZSBmaWxlXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBwbGF5UmluZ3RvbmUocmluZ3RvbmVVcmk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIHN0b3BzIHBsYXlpbmcgdGhlIHJpbmd0b25lXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJpbmd0b25lVXJpIFRoZSBwYXRoIHRvIHRoZSByaW5ndG9uZSBmaWxlXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdG9wUmluZ3RvbmUocmluZ3RvbmVVcmk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==