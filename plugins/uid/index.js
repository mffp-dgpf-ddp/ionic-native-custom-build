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
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var UidOriginal = /** @class */ (function (_super) {
    __extends(UidOriginal, _super);
    function UidOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UidOriginal.prototype, "UUID", {
        get: function () { return cordovaPropertyGet(this, "UUID"); },
        set: function (value) { cordovaPropertySet(this, "UUID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UidOriginal.prototype, "IMEI", {
        get: function () { return cordovaPropertyGet(this, "IMEI"); },
        set: function (value) { cordovaPropertySet(this, "IMEI", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UidOriginal.prototype, "IMSI", {
        get: function () { return cordovaPropertyGet(this, "IMSI"); },
        set: function (value) { cordovaPropertySet(this, "IMSI", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UidOriginal.prototype, "ICCID", {
        get: function () { return cordovaPropertyGet(this, "ICCID"); },
        set: function (value) { cordovaPropertySet(this, "ICCID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UidOriginal.prototype, "MAC", {
        get: function () { return cordovaPropertyGet(this, "MAC"); },
        set: function (value) { cordovaPropertySet(this, "MAC", value); },
        enumerable: true,
        configurable: true
    });
    UidOriginal.pluginName = "Uid";
    UidOriginal.plugin = "cordova-plugin-uid";
    UidOriginal.pluginRef = "cordova.plugins.uid";
    UidOriginal.repo = "https://github.com/lionelhe/cordova-plugin-uid";
    UidOriginal.platforms = ["Android"];
    return UidOriginal;
}(IonicNativePlugin));
var Uid = new UidOriginal();
export { Uid };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3VpZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw2REFBOEMsTUFBTSxvQkFBb0IsQ0FBQzs7SUE2Q3ZELHVCQUFpQjs7OzswQkFHeEMscUJBQUk7Ozs7OzswQkFJSixxQkFBSTs7Ozs7OzBCQUlKLHFCQUFJOzs7Ozs7MEJBSUosc0JBQUs7Ozs7OzswQkFJTCxvQkFBRzs7Ozs7Ozs7Ozs7Y0FqRUw7RUE4Q3lCLGlCQUFpQjtTQUE3QixHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFVpZFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogR2V0IHVuaXF1ZSBpZGVudGlmaWVyczogVVVJRCwgSU1FSSwgSU1TSSwgSUNDSUQgYW5kIE1BQy5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgVWlkIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS91aWQvbmd4JztcclxuICogaW1wb3J0IHsgQW5kcm9pZFBlcm1pc3Npb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hbmRyb2lkLXBlcm1pc3Npb25zL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdWlkOiBVaWQsIHByaXZhdGUgYW5kcm9pZFBlcm1pc3Npb25zOiBBbmRyb2lkUGVybWlzc2lvbnMpIHsgfVxyXG4gKlxyXG4gKlxyXG4gKiBhc3luYyBnZXRJbWVpKCkge1xyXG4gKiAgY29uc3QgeyBoYXNQZXJtaXNzaW9uIH0gPSBhd2FpdCB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5jaGVja1Blcm1pc3Npb24oXHJcbiAqICAgIHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLlBFUk1JU1NJT04uUkVBRF9QSE9ORV9TVEFURVxyXG4gKiAgKTtcclxuICpcclxuICogIGlmICghaGFzUGVybWlzc2lvbikge1xyXG4gKiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbihcclxuICogICAgICB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLlJFQURfUEhPTkVfU1RBVEVcclxuICogICAgKTtcclxuICpcclxuICogICAgaWYgKCFyZXN1bHQuaGFzUGVybWlzc2lvbikge1xyXG4gKiAgICAgIHRocm93IG5ldyBFcnJvcignUGVybWlzc2lvbnMgcmVxdWlyZWQnKTtcclxuICogICAgfVxyXG4gKlxyXG4gKiAgICAvLyBvaywgYSB1c2VyIGdhdmUgdXMgcGVybWlzc2lvbiwgd2UgY2FuIGdldCBoaW0gaWRlbnRpZmllcnMgYWZ0ZXIgcmVzdGFydCBhcHBcclxuICogICAgcmV0dXJuO1xyXG4gKiAgfVxyXG4gKlxyXG4gKiAgIHJldHVybiB0aGlzLnVpZC5JTUVJXHJcbiAqIH1cclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnVWlkJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi11aWQnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy51aWQnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbGlvbmVsaGUvY29yZG92YS1wbHVnaW4tdWlkJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVaWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqIEdldCB0aGUgZGV2aWNlIFVuaXZlcnNhbGx5IFVuaXF1ZSBJZGVudGlmaWVyIChVVUlEKS4gKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBVVUlEOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBHZXQgdGhlIGRldmljZSBJbnRlcm5hdGlvbmFsIE1vYmlsZSBTdGF0aW9uIEVxdWlwbWVudCBJZGVudGl0eSAoSU1FSSkuICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgSU1FSTogc3RyaW5nO1xyXG5cclxuICAvKiogR2V0IHRoZSBkZXZpY2UgSW50ZXJuYXRpb25hbCBtb2JpbGUgU3Vic2NyaWJlciBJZGVudGl0eSAoSU1TSSkuICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgSU1TSTogc3RyaW5nO1xyXG5cclxuICAvKiogR2V0IHRoZSBzaW0gSW50ZWdyYXRlZCBDaXJjdWl0IENhcmQgSWRlbnRpZmllciAoSUNDSUQpLiAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIElDQ0lEOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBHZXQgdGhlIE1lZGlhIEFjY2VzcyBDb250cm9sIGFkZHJlc3MgKE1BQykuICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTUFDOiBzdHJpbmc7XHJcbn1cclxuIl19