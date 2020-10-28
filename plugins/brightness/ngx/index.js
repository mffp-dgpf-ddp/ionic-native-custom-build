import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Brightness = /** @class */ (function (_super) {
    __extends(Brightness, _super);
    function Brightness() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Brightness.prototype.setBrightness = function (value) { return cordova(this, "setBrightness", {}, arguments); };
    Brightness.prototype.getBrightness = function () { return cordova(this, "getBrightness", {}, arguments); };
    Brightness.prototype.setKeepScreenOn = function (value) { return cordova(this, "setKeepScreenOn", {}, arguments); };
    Brightness.pluginName = "Brightness";
    Brightness.plugin = "cordova-plugin-brightness";
    Brightness.pluginRef = "cordova.plugins.brightness";
    Brightness.repo = "https://github.com/mgcrea/cordova-plugin-brightness";
    Brightness.platforms = ["Android", "iOS"];
    Brightness = __decorate([
        Injectable()
    ], Brightness);
    return Brightness;
}(IonicNativePlugin));
export { Brightness };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JyaWdodG5lc3Mvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBOEJ4Qyw4QkFBaUI7Ozs7SUFRL0Msa0NBQWEsYUFBQyxLQUFhO0lBVzNCLGtDQUFhO0lBU2Isb0NBQWUsYUFBQyxLQUFjOzs7Ozs7SUE1Qm5CLFVBQVU7UUFEdEIsVUFBVSxFQUFFO09BQ0EsVUFBVTtxQkEvQnZCO0VBK0JnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgQnJpZ2h0bmVzc1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIEJyaWdodG5lc3MgcGx1Z2luIGxldCB5b3UgY29udHJvbCB0aGUgZGlzcGxheSBicmlnaHRuZXNzIG9mIHlvdXIgZGV2aWNlLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWJyaWdodG5lc3NgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQnJpZ2h0bmVzcyBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL21nY3JlYS9jb3Jkb3ZhLXBsdWdpbi1icmlnaHRuZXNzKS5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQnJpZ2h0bmVzcyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYnJpZ2h0bmVzcy9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyaWdodG5lc3M6IEJyaWdodG5lc3MpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogbGV0IGJyaWdodG5lc3NWYWx1ZSA9IDAuODtcclxuICogdGhpcy5icmlnaHRuZXNzLnNldEJyaWdodG5lc3MoYnJpZ2h0bmVzc1ZhbHVlKTtcclxuICogYGBgXHJcbiAqXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQnJpZ2h0bmVzcycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYnJpZ2h0bmVzcycsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmJyaWdodG5lc3MnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWdjcmVhL2NvcmRvdmEtcGx1Z2luLWJyaWdodG5lc3MnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCcmlnaHRuZXNzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGJyaWdodG5lc3Mgb2YgdGhlIGRpc3BsYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgRmxvYXRpbmcgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSBpbiB3aGljaCBjYXNlIDEgbWVhbnMgMTAwJSBicmlnaHRuZXNzIGFuZCAwIG1lYW5zIDAlIGJyaWdodG5lc3MuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBpZiBzZXR0aW5nIGJyaWdodG5lc3Mgd2FzIHN1Y2Nlc3NmdWwuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldEJyaWdodG5lc3ModmFsdWU6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWFkcyB0aGUgY3VycmVudCBicmlnaHRuZXNzIG9mIHRoZSBkZXZpY2UgZGlzcGxheS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGVcclxuICAgKiBicmlnaHRuZXNzIHZhbHVlIG9mIHRoZSBkZXZpY2UgZGlzcGxheSAoZmxvYXRpbmcgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSkuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEJyaWdodG5lc3MoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEtlZXBzIHRoZSBzY3JlZW4gb24uIFByZXZlbnRzIHRoZSBkZXZpY2UgZnJvbSBzZXR0aW5nIHRoZSBzY3JlZW4gdG8gc2xlZXAuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZXRLZWVwU2NyZWVuT24odmFsdWU6IGJvb2xlYW4pOiB2b2lkIHt9XHJcbn1cclxuIl19