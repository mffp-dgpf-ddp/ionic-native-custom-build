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
var HttpdOriginal = /** @class */ (function (_super) {
    __extends(HttpdOriginal, _super);
    function HttpdOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HttpdOriginal.prototype.startServer = function (options) { return cordova(this, "startServer", { "observable": true, "clearFunction": "stopServer" }, arguments); };
    HttpdOriginal.prototype.getUrl = function () { return cordova(this, "getUrl", {}, arguments); };
    HttpdOriginal.prototype.getLocalPath = function () { return cordova(this, "getLocalPath", {}, arguments); };
    HttpdOriginal.pluginName = "Httpd";
    HttpdOriginal.plugin = "cordova-plugin-httpd";
    HttpdOriginal.pluginRef = "cordova.plugins.CorHttpd";
    HttpdOriginal.repo = "https://github.com/floatinghotpot/cordova-httpd";
    HttpdOriginal.platforms = ["Android", "iOS", "macOS"];
    return HttpdOriginal;
}(IonicNativePlugin));
var Httpd = new HttpdOriginal();
export { Httpd };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2h0dHBkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBdURQLHlCQUFpQjs7OztJQVUxQywyQkFBVyxhQUFDLE9BQXNCO0lBU2xDLHNCQUFNO0lBU04sNEJBQVk7Ozs7OztnQkFyRmQ7RUF5RDJCLGlCQUFpQjtTQUEvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIdHRwZE9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwdWJsaWMgcm9vdCBkaXJlY3RvcnkgZm9yIHlvdXIgd2ViIHNlcnZlci4gVGhpcyBwYXRoIGlzIHJlbGF0aXZlIHRvIHlvdXIgYXBwJ3Mgd3d3IGRpcmVjdG9yeS5cclxuICAgKiBEZWZhdWx0IGlzIGN1cnJlbnQgZGlyZWN0b3J5LlxyXG4gICAqL1xyXG4gIHd3d19yb290Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwb3J0IG51bWJlciB0byB1c2UuXHJcbiAgICogRGVmYXVsdCBpcyA4ODg4XHJcbiAgICovXHJcbiAgcG9ydD86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBTZXR0aW5nIHRoaXMgb3B0aW9uIHRvIGZhbHNlIHdpbGwgYWxsb3cgcmVtb3RlIGFjY2VzcyB0byB5b3VyIHdlYiBzZXJ2ZXIgKG92ZXIgYW55IElQKS5cclxuICAgKiBEZWZhdWx0IGlzIGZhbHNlLlxyXG4gICAqL1xyXG4gIGxvY2FsaG9zdF9vbmx5PzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEh0dHBkXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBFbWJlZGRlZCBodHRwZCBmb3IgQ29yZG92YSBhcHBzLiBMaWdodCB3ZWlnaHQgSFRUUCBzZXJ2ZXIuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEh0dHBkLCBIdHRwZE9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2h0dHBkL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cGQ6IEh0dHBkKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIGxldCBvcHRpb25zOiBIdHRwZE9wdGlvbnMgPSB7XHJcbiAqICAgICAgd3d3X3Jvb3Q6ICdodHRwZF9yb290JywgLy8gcmVsYXRpdmUgcGF0aCB0byBhcHAncyB3d3cgZGlyZWN0b3J5XHJcbiAqICAgICAgcG9ydDogODAsXHJcbiAqICAgICAgbG9jYWxob3N0X29ubHk6IGZhbHNlXHJcbiAqICB9XHJcbiAqXHJcbiAqIHRoaXMuaHR0cGQuc3RhcnRTZXJ2ZXIob3B0aW9ucykuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAqICBjb25zb2xlLmxvZygnU2VydmVyIGlzIGxpdmUnKTtcclxuICogfSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBIdHRwZE9wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdIdHRwZCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taHR0cGQnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5Db3JIdHRwZCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9mbG9hdGluZ2hvdHBvdC9jb3Jkb3ZhLWh0dHBkJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnbWFjT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cGQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIGEgd2ViIHNlcnZlci5cclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SHR0cGRPcHRpb25zfVxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPHN0cmluZz59IFJldHVybnMgYW4gT2JzZXJ2YWJsZS4gU3Vic2NyaWJlIHRvIHJlY2VpdmUgdGhlIFVSTCBmb3IgeW91ciB3ZWIgc2VydmVyIChpZiBzdWNjZWVkZWQpLiBVbnN1YnNjcmliZSB0byBzdG9wIHRoZSBzZXJ2ZXIuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wU2VydmVyJyxcclxuICB9KVxyXG4gIHN0YXJ0U2VydmVyKG9wdGlvbnM/OiBIdHRwZE9wdGlvbnMpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgVVJMIG9mIHRoZSBydW5uaW5nIHNlcnZlclxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgVVJMIG9mIHRoZSB3ZWIgc2VydmVyLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRVcmwoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbG9jYWwgcGF0aCBvZiB0aGUgcnVubmluZyB3ZWJzZXJ2ZXJcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxvY2FsIHBhdGggb2YgdGhlIHdlYiBzZXJ2ZXIuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldExvY2FsUGF0aCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=