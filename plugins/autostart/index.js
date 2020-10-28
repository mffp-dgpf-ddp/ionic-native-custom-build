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
var AutostartOriginal = /** @class */ (function (_super) {
    __extends(AutostartOriginal, _super);
    function AutostartOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutostartOriginal.prototype.enable = function () { return cordova(this, "enable", { "sync": true }, arguments); };
    AutostartOriginal.prototype.disable = function () { return cordova(this, "disable", { "sync": true }, arguments); };
    AutostartOriginal.pluginName = "Autostart";
    AutostartOriginal.plugin = "cordova-plugin-autostart";
    AutostartOriginal.pluginRef = "cordova.plugins.autoStart";
    AutostartOriginal.repo = "https://github.com/ToniKorin/cordova-plugin-autostart";
    AutostartOriginal.platforms = ["Android"];
    return AutostartOriginal;
}(IonicNativePlugin));
var Autostart = new AutostartOriginal();
export { Autostart };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2F1dG9zdGFydC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQnpDLDZCQUFpQjs7OztJQUs5QywwQkFBTTtJQU1OLDJCQUFPOzs7Ozs7b0JBM0NUO0VBZ0MrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgQXV0b3N0YXJ0XHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBhdXRvbWF0aWNhbGx5IHN0YXJ0cyB5b3VyIEFuZHJvaWQgYXBwIGFmdGVyIGV2ZXJ5IGJvb3Qgb3IgYXV0by11cGRhdGUuXHJcbiAqIFlvdSBjYW4gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGF1dG9zdGFydCBmdW5jdGlvbiBpbiB5b3VyIGFwcC5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQXV0b3N0YXJ0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hdXRvc3RhcnQvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhdXRvc3RhcnQ6IEF1dG9zdGFydCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmF1dG9zdGFydC5lbmFibGUoKTtcclxuICpcclxuICogdGhpcy5hdXRvc3RhcnQuZGlzYWJsZSgpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdBdXRvc3RhcnQnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWF1dG9zdGFydCcsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmF1dG9TdGFydCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Ub25pS29yaW4vY29yZG92YS1wbHVnaW4tYXV0b3N0YXJ0JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRvc3RhcnQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogRW5hYmxlIHRoZSBhdXRvbWF0aWMgc3RhcnR1cCBhZnRlciB0aGUgYm9vdFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGVuYWJsZSgpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc2FibGUgdGhlIGF1dG9tYXRpYyBzdGFydHVwIGFmdGVyIHRoZSBib290XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZGlzYWJsZSgpOiB2b2lkIHt9XHJcbn1cclxuIl19