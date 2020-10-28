import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Clipboard = /** @class */ (function (_super) {
    __extends(Clipboard, _super);
    function Clipboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clipboard.prototype.copy = function (text) { return cordova(this, "copy", {}, arguments); };
    Clipboard.prototype.paste = function () { return cordova(this, "paste", {}, arguments); };
    Clipboard.prototype.clear = function () { return cordova(this, "clear", {}, arguments); };
    Clipboard.pluginName = "Clipboard";
    Clipboard.plugin = "cordova-clipboard";
    Clipboard.pluginRef = "cordova.plugins.clipboard";
    Clipboard.repo = "https://github.com/ihadeed/cordova-clipboard";
    Clipboard.platforms = ["Android", "iOS", "Windows Phone 8"];
    Clipboard = __decorate([
        Injectable()
    ], Clipboard);
    return Clipboard;
}(IonicNativePlugin));
export { Clipboard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NsaXBib2FyZC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF1Q3pDLDZCQUFpQjs7OztJQU85Qyx3QkFBSSxhQUFDLElBQVk7SUFTakIseUJBQUs7SUFTTCx5QkFBSzs7Ozs7O0lBekJNLFNBQVM7UUFEckIsVUFBVSxFQUFFO09BQ0EsU0FBUztvQkF4Q3RCO0VBd0MrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbi8qKlxyXG4gKiBAbmFtZSBDbGlwYm9hcmRcclxuICogQHByZW1pZXIgY2xpcGJvYXJkXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDbGlwYm9hcmQgbWFuYWdlbWVudCBwbHVnaW4gZm9yIENvcmRvdmEgdGhhdCBzdXBwb3J0cyBpT1MsIEFuZHJvaWQsIGFuZCBXaW5kb3dzIFBob25lIDguXHJcbiAqXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IENsaXBib2FyZCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2xpcGJvYXJkL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xpcGJvYXJkOiBDbGlwYm9hcmQpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5jbGlwYm9hcmQuY29weSgnSGVsbG8gd29ybGQnKTtcclxuICpcclxuICogdGhpcy5jbGlwYm9hcmQucGFzdGUoKS50aGVuKFxyXG4gKiAgICAocmVzb2x2ZTogc3RyaW5nKSA9PiB7XHJcbiAqICAgICAgIGFsZXJ0KHJlc29sdmUpO1xyXG4gKiAgICAgfSxcclxuICogICAgIChyZWplY3Q6IHN0cmluZykgPT4ge1xyXG4gKiAgICAgICBhbGVydCgnRXJyb3I6ICcgKyByZWplY3QpO1xyXG4gKiAgICAgfVxyXG4gKiAgICk7XHJcbiAqXHJcbiAqIHRoaXMuY2xpcGJvYXJkLmNsZWFyKCk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0NsaXBib2FyZCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1jbGlwYm9hcmQnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5jbGlwYm9hcmQnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaWhhZGVlZC9jb3Jkb3ZhLWNsaXBib2FyZCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUgOCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDbGlwYm9hcmQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ29waWVzIHRoZSBnaXZlbiB0ZXh0XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGV4dCB0aGF0IGdldHMgY29waWVkIG9uIHRoZSBzeXN0ZW0gY2xpcGJvYXJkXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgYWZ0ZXIgdGhlIHRleHQgaGFzIGJlZW4gY29waWVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNvcHkodGV4dDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhc3RlcyB0aGUgdGV4dCBzdG9yZWQgaW4gY2xpcGJvYXJkXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgYWZ0ZXIgdGhlIHRleHQgaGFzIGJlZW4gcGFzdGVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHBhc3RlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhciB0aGUgdGV4dCBzdG9yZWQgaW4gY2xpcGJvYXJkXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgYWZ0ZXIgdGhlIHRleHQgaGFzIGJlZW4gY2xlYW5lZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjbGVhcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=