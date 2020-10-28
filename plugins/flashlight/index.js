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
var FlashlightOriginal = /** @class */ (function (_super) {
    __extends(FlashlightOriginal, _super);
    function FlashlightOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlashlightOriginal.prototype.available = function () { return cordova(this, "available", {}, arguments); };
    FlashlightOriginal.prototype.switchOn = function () { return cordova(this, "switchOn", {}, arguments); };
    FlashlightOriginal.prototype.switchOff = function () { return cordova(this, "switchOff", {}, arguments); };
    FlashlightOriginal.prototype.toggle = function () { return cordova(this, "toggle", {}, arguments); };
    FlashlightOriginal.prototype.isSwitchedOn = function () { return cordova(this, "isSwitchedOn", { "sync": true }, arguments); };
    FlashlightOriginal.pluginName = "Flashlight";
    FlashlightOriginal.plugin = "cordova-plugin-flashlight";
    FlashlightOriginal.pluginRef = "window.plugins.flashlight";
    FlashlightOriginal.repo = "https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin";
    FlashlightOriginal.platforms = ["Android", "iOS", "Windows Phone 8"];
    return FlashlightOriginal;
}(IonicNativePlugin));
var Flashlight = new FlashlightOriginal();
export { Flashlight };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZsYXNobGlnaHQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNEJ4Qyw4QkFBaUI7Ozs7SUFNL0MsOEJBQVM7SUFTVCw2QkFBUTtJQVNSLDhCQUFTO0lBU1QsMkJBQU07SUFXTixpQ0FBWTs7Ozs7O3FCQXpFZDtFQTZCZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEZsYXNobGlnaHRcclxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gc3dpdGNoIHRoZSBmbGFzaGxpZ2h0IC8gdG9yY2ggb2YgdGhlIGRldmljZSBvbiBhbmQgb2ZmLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWZsYXNobGlnaHRgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbRmxhc2hsaWdodCBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL0ZsYXNobGlnaHQtUGhvbmVHYXAtUGx1Z2luKS5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRmxhc2hsaWdodCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmxhc2hsaWdodC9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZsYXNobGlnaHQ6IEZsYXNobGlnaHQpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5mbGFzaGxpZ2h0LnN3aXRjaE9uKCk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0ZsYXNobGlnaHQnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZsYXNobGlnaHQnLFxyXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5wbHVnaW5zLmZsYXNobGlnaHQnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vRmxhc2hsaWdodC1QaG9uZUdhcC1QbHVnaW4nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmxhc2hsaWdodCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIGZsYXNobGlnaHQgaXMgYXZhaWxhYmxlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gc3RhdGluZyBpZiB0aGUgZmxhc2hsaWdodCBpcyBhdmFpbGFibGUuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGF2YWlsYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN3aXRjaGVzIHRoZSBmbGFzaGxpZ2h0IG9uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN3aXRjaE9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3dpdGNoZXMgdGhlIGZsYXNobGlnaHQgb2ZmXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN3aXRjaE9mZigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZXMgdGhlIGZsYXNobGlnaHRcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB0b2dnbGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB0aGUgZmxhc2hsaWdodCBpcyB0dXJuZWQgb24uXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIGlzU3dpdGNoZWRPbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19