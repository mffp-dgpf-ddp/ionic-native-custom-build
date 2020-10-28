import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var Uid = /** @class */ (function (_super) {
    __extends(Uid, _super);
    function Uid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Uid.prototype, "UUID", {
        get: function () { return cordovaPropertyGet(this, "UUID"); },
        set: function (value) { cordovaPropertySet(this, "UUID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uid.prototype, "IMEI", {
        get: function () { return cordovaPropertyGet(this, "IMEI"); },
        set: function (value) { cordovaPropertySet(this, "IMEI", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uid.prototype, "IMSI", {
        get: function () { return cordovaPropertyGet(this, "IMSI"); },
        set: function (value) { cordovaPropertySet(this, "IMSI", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uid.prototype, "ICCID", {
        get: function () { return cordovaPropertyGet(this, "ICCID"); },
        set: function (value) { cordovaPropertySet(this, "ICCID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uid.prototype, "MAC", {
        get: function () { return cordovaPropertyGet(this, "MAC"); },
        set: function (value) { cordovaPropertySet(this, "MAC", value); },
        enumerable: true,
        configurable: true
    });
    Uid.pluginName = "Uid";
    Uid.plugin = "cordova-plugin-uid";
    Uid.pluginRef = "cordova.plugins.uid";
    Uid.repo = "https://github.com/lionelhe/cordova-plugin-uid";
    Uid.platforms = ["Android"];
    Uid = __decorate([
        Injectable()
    ], Uid);
    return Uid;
}(IonicNativePlugin));
export { Uid };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3VpZC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw2REFBOEMsTUFBTSxvQkFBb0IsQ0FBQzs7SUE2Q3ZELHVCQUFpQjs7OzswQkFHeEMscUJBQUk7Ozs7OzswQkFJSixxQkFBSTs7Ozs7OzBCQUlKLHFCQUFJOzs7Ozs7MEJBSUosc0JBQUs7Ozs7OzswQkFJTCxvQkFBRzs7Ozs7Ozs7Ozs7SUFuQlEsR0FBRztRQURmLFVBQVUsRUFBRTtPQUNBLEdBQUc7Y0E5Q2hCO0VBOEN5QixpQkFBaUI7U0FBN0IsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBVaWRcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEdldCB1bmlxdWUgaWRlbnRpZmllcnM6IFVVSUQsIElNRUksIElNU0ksIElDQ0lEIGFuZCBNQUMuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFVpZCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdWlkL25neCc7XHJcbiAqIGltcG9ydCB7IEFuZHJvaWRQZXJtaXNzaW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYW5kcm9pZC1wZXJtaXNzaW9ucy9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHVpZDogVWlkLCBwcml2YXRlIGFuZHJvaWRQZXJtaXNzaW9uczogQW5kcm9pZFBlcm1pc3Npb25zKSB7IH1cclxuICpcclxuICpcclxuICogYXN5bmMgZ2V0SW1laSgpIHtcclxuICogIGNvbnN0IHsgaGFzUGVybWlzc2lvbiB9ID0gYXdhaXQgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuY2hlY2tQZXJtaXNzaW9uKFxyXG4gKiAgICB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLlJFQURfUEhPTkVfU1RBVEVcclxuICogICk7XHJcbiAqXHJcbiAqICBpZiAoIWhhc1Blcm1pc3Npb24pIHtcclxuICogICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb24oXHJcbiAqICAgICAgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5SRUFEX1BIT05FX1NUQVRFXHJcbiAqICAgICk7XHJcbiAqXHJcbiAqICAgIGlmICghcmVzdWx0Lmhhc1Blcm1pc3Npb24pIHtcclxuICogICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Blcm1pc3Npb25zIHJlcXVpcmVkJyk7XHJcbiAqICAgIH1cclxuICpcclxuICogICAgLy8gb2ssIGEgdXNlciBnYXZlIHVzIHBlcm1pc3Npb24sIHdlIGNhbiBnZXQgaGltIGlkZW50aWZpZXJzIGFmdGVyIHJlc3RhcnQgYXBwXHJcbiAqICAgIHJldHVybjtcclxuICogIH1cclxuICpcclxuICogICByZXR1cm4gdGhpcy51aWQuSU1FSVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1VpZCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdWlkJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMudWlkJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2xpb25lbGhlL2NvcmRvdmEtcGx1Z2luLXVpZCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVWlkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKiBHZXQgdGhlIGRldmljZSBVbml2ZXJzYWxseSBVbmlxdWUgSWRlbnRpZmllciAoVVVJRCkuICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgVVVJRDogc3RyaW5nO1xyXG5cclxuICAvKiogR2V0IHRoZSBkZXZpY2UgSW50ZXJuYXRpb25hbCBNb2JpbGUgU3RhdGlvbiBFcXVpcG1lbnQgSWRlbnRpdHkgKElNRUkpLiAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIElNRUk6IHN0cmluZztcclxuXHJcbiAgLyoqIEdldCB0aGUgZGV2aWNlIEludGVybmF0aW9uYWwgbW9iaWxlIFN1YnNjcmliZXIgSWRlbnRpdHkgKElNU0kpLiAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIElNU0k6IHN0cmluZztcclxuXHJcbiAgLyoqIEdldCB0aGUgc2ltIEludGVncmF0ZWQgQ2lyY3VpdCBDYXJkIElkZW50aWZpZXIgKElDQ0lEKS4gKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBJQ0NJRDogc3RyaW5nO1xyXG5cclxuICAvKiogR2V0IHRoZSBNZWRpYSBBY2Nlc3MgQ29udHJvbCBhZGRyZXNzIChNQUMpLiAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE1BQzogc3RyaW5nO1xyXG59XHJcbiJdfQ==