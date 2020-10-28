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
var LottieSplashScreenOriginal = /** @class */ (function (_super) {
    __extends(LottieSplashScreenOriginal, _super);
    function LottieSplashScreenOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LottieSplashScreenOriginal.prototype.show = function (location, remote, width, height) { return cordova(this, "show", { "sync": true }, arguments); };
    LottieSplashScreenOriginal.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    LottieSplashScreenOriginal.pluginName = "LottieSplashScreen";
    LottieSplashScreenOriginal.plugin = "cordova-plugin-lottie-splashscreen";
    LottieSplashScreenOriginal.pluginRef = "lottie.splashscreen";
    LottieSplashScreenOriginal.repo = "https://github.com/timbru31/cordova-plugin-lottie-splashscreen";
    LottieSplashScreenOriginal.install = "";
    LottieSplashScreenOriginal.installVariables = [];
    LottieSplashScreenOriginal.platforms = ["Android", "iOS"];
    return LottieSplashScreenOriginal;
}(IonicNativePlugin));
var LottieSplashScreen = new LottieSplashScreenOriginal();
export { LottieSplashScreen };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xvdHRpZS1zcGxhc2gtc2NyZWVuL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDaEMsc0NBQWlCOzs7O0lBV3ZELGlDQUFJLGFBQUMsUUFBaUIsRUFBRSxNQUFnQixFQUFFLEtBQWMsRUFBRSxNQUFlO0lBTXpFLGlDQUFJOzs7Ozs7Ozs2QkFuRE47RUFrQ3dDLGlCQUFpQjtTQUE1QyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIExvdHRpZSBTcGxhc2ggU2NyZWVuXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIHBsdWdpbiB0byBzaG93IGJvZHltb3Zpbi9Mb3R0aWUgYW5pbWF0aW9ucyBhcyB0aGUgc3BsYXNoIHNjcmVlbiB3aXRoIEFpcmJuYidzIExvdHRpZSB3cmFwcGVyXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IExvdHRpZVNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbG90dGllLXNwbGFzaC1zY3JlZW4vbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsb3R0aWVTcGxhc2hTY3JlZW46IExvdHRpZVNwbGFzaFNjcmVlbikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmxvdHRpZVNwbGFzaFNjcmVlbi5zaG93KCd3d3cvbG90dGllL2FuaW1hdGlvbi5qc29uJywgZmFsc2UsIDEwMjQsIDc2OClcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0xvdHRpZVNwbGFzaFNjcmVlbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbG90dGllLXNwbGFzaHNjcmVlbicsXHJcbiAgcGx1Z2luUmVmOiAnbG90dGllLnNwbGFzaHNjcmVlbicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1icnUzMS9jb3Jkb3ZhLXBsdWdpbi1sb3R0aWUtc3BsYXNoc2NyZWVuJyxcclxuICBpbnN0YWxsOiAnJyxcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG90dGllU3BsYXNoU2NyZWVuIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gc2hvd3MgYSBMb3R0aWUgc3BsYXNoIHNjcmVlbi4gSWYgbm8gYXJndW1lbnRzIGFyZSBnaXZlbiwgaXQgZGVmYXVsdHMgdG8gdGhlIGNvbmZpZy54bWwgdmFsdWVzLCBob3dldmVyIHlvdSBjYW4gcGFzcyAobmV3KSBvcHRpb25zIGhlcmUgdG8gY2hhbmdlIHRoZSBiZWhhdmlvciBvbiBydW50aW1lLiAoRm9yIGVhc2llciByZWFkaW5nIHRoZSBUeXBlU2NyaXB0IG5vdGF0aW9uIGlzIHVzZWQpXHJcbiAgICogQHBhcmFtIGxvY2F0aW9uIHtzdHJpbmd9IExvY2F0aW9uIG9mIHRoZSBMb3R0aWUgSlNPTiBmaWxlIHRoYXQgc2hvdWxkIGJlIGxvYWRlZC5cclxuICAgKiBAcGFyYW0gcmVtb3RlIHtudW1iZXJ9IFRvZ2dsZXMgTG90dGllJ3MgcmVtb3RlIG1vZGUgd2hpY2ggYWxsb3dzIGZpbGVzIHRvIGJlIGRvd25sb2FkZWQvZGlzcGxheWVkIGZyb20gVVJMcy4gRXhhbXBsZTpcclxuICAgKiBAcGFyYW0gd2lkdGgge251bWJlcn0gV2lkdGggb2YgdGhlIGNvbnRhaW5lciB0aGF0J3MgcmVuZGVyaW5nIHRoZSBMb3R0aWUgYW5pbWF0aW9uXHJcbiAgICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSBIZWlnaHQgb2YgdGhlIGNvbnRhaW5lciB0aGF0J3MgcmVuZGVyaW5nIHRoZSBMb3R0aWUgYW5pbWF0aW9uXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIHNob3cobG9jYXRpb24/OiBzdHJpbmcsIHJlbW90ZT86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyLCBoZWlnaHQ/OiBudW1iZXIpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kcyBoaWRlcyB0aGUgY3VycmVudCBhY3RpdmUgTG90dGllIHNwbGFzaHNjcmVlbiBhbmQgZGVzdHJveXMgdGhlIHZpZXdzLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGhpZGUoKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==