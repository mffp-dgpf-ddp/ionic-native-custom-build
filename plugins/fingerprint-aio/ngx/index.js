import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var FingerprintAIO = /** @class */ (function (_super) {
    __extends(FingerprintAIO, _super);
    function FingerprintAIO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_UNKNOWN_ERROR = -100;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_UNAVAILABLE = -101;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_AUTHENTICATION_FAILED = -102;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_SDK_NOT_SUPPORTED = -103;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_HARDWARE_NOT_SUPPORTED = -104;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_PERMISSION_NOT_GRANTED = -105;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_NOT_ENROLLED = -106;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_INTERNAL_PLUGIN_ERROR = -107;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_DISMISSED = -108;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_PIN_OR_PATTERN_DISMISSED = -109;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_SCREEN_GUARD_UNSECURED = -110;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_LOCKED_OUT = -111;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_LOCKED_OUT_PERMANENT = -112;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_SECRET_NOT_FOUND = -113;
        return _this;
    }
    FingerprintAIO.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    FingerprintAIO.prototype.registerBiometricSecret = function (options) { return cordova(this, "registerBiometricSecret", {}, arguments); };
    FingerprintAIO.prototype.loadBiometricSecret = function (options) { return cordova(this, "loadBiometricSecret", {}, arguments); };
    FingerprintAIO.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    FingerprintAIO.pluginName = "FingerprintAIO";
    FingerprintAIO.plugin = "cordova-plugin-fingerprint-aio";
    FingerprintAIO.pluginRef = "Fingerprint";
    FingerprintAIO.repo = "https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio";
    FingerprintAIO.platforms = ["Android", "iOS"];
    FingerprintAIO = __decorate([
        Injectable()
    ], FingerprintAIO);
    return FingerprintAIO;
}(IonicNativePlugin));
export { FingerprintAIO };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbmdlcnByaW50LWFpby9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFtSHBDLGtDQUFpQjs7O1FBQ25EOzs7V0FHRztRQUNILDZCQUF1QixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQy9COzs7V0FHRztRQUNILDJCQUFxQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzdCOzs7V0FHRztRQUNILHFDQUErQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3ZDOzs7V0FHRztRQUNILGlDQUEyQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ25DOzs7V0FHRztRQUNILHNDQUFnQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3hDOzs7V0FHRztRQUNILHNDQUFnQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3hDOzs7V0FHRztRQUNILDRCQUFzQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzlCOzs7V0FHRztRQUNILHFDQUErQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3ZDOzs7V0FHRztRQUNILHlCQUFtQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzNCOzs7V0FHRztRQUNILHdDQUFrQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzFDOzs7V0FHRztRQUNILHNDQUFnQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3hDOzs7V0FHRztRQUNILDBCQUFvQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzVCOzs7V0FHRztRQUNILG9DQUE4QixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3RDOzs7V0FHRztRQUNILGdDQUEwQixHQUFHLENBQUMsR0FBRyxDQUFDOzs7SUFPbEMsb0NBQVc7SUFVWCxnREFBdUIsYUFBQyxPQUFpQztJQVV6RCw0Q0FBbUIsYUFBQyxPQUEyQjtJQVUvQyw2QkFBSSxhQUFDLE9BQTJCOzs7Ozs7SUEzR3JCLGNBQWM7UUFEMUIsVUFBVSxFQUFFO09BQ0EsY0FBYzt5QkFwSDNCO0VBb0hvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpbmdlcnByaW50T3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogVGl0bGUgaW4gYmlvbWV0cmljIHByb21wdCAoYW5kcm9pZCBvbmx5KVxyXG4gICAqIEBkZWZhdWx0IHtBUFBfTkFNRX0gQmlvbWV0cmljIFNpZ24gT25cclxuICAgKi9cclxuICB0aXRsZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU3VidGl0bGUgaW4gYmlvbWV0cmljIFByb21wdCAoYW5kcm9pZCBvbmx5KVxyXG4gICAqIEBkZWZhdWx0IG51bGxcclxuICAgKi9cclxuICBzdWJ0aXRsZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGVzY3JpcHRpb24gaW4gYmlvbWV0cmljIFByb21wdFxyXG4gICAqIEBkZWZhdWx0IG51bGxcclxuICAgKi9cclxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgb2YgZmFsbGJhY2sgYnV0dG9uLlxyXG4gICAqIEBkZWZhdWx0IFwiVXNlIFBpblwiXHJcbiAgICovXHJcbiAgZmFsbGJhY2tCdXR0b25UaXRsZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgZm9yIGNhbmNlbCBidXR0b24gb24gQW5kcm9pZFxyXG4gICAqIEBkZWZhdWx0IFwiQ2FuY2VsXCJcclxuICAgKi9cclxuICBjYW5jZWxCdXR0b25UaXRsZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGlzYWJsZSAndXNlIGJhY2t1cCcgb3B0aW9uLlxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICovXHJcbiAgZGlzYWJsZUJhY2t1cD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmluZ2VycHJpbnRTZWNyZXRPcHRpb25zIGV4dGVuZHMgRmluZ2VycHJpbnRPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBTdHJpbmcgc2VjcmV0IHRvIGVuY3J5cHQgYW5kIHNhdmUsIHVzZSBzaW1wbGUgc3RyaW5ncyBtYXRjaGluZyB0aGUgcmVnZXggW2EtekEtWjAtOVxcLV0rXHJcbiAgICovXHJcbiAgc2VjcmV0OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIGB0cnVlYCBzZWNyZXQgd2lsbCBiZSBkZWxldGVkIHdoZW4gYmlvbWV0cnkgaXRlbXMgYXJlIGRlbGV0ZWQgb3IgZW5yb2xsZWRcclxuICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAqL1xyXG4gIGludmFsaWRhdGVPbkVucm9sbG1lbnQ/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgRmluZ2VycHJpbnQgQUlPXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBVc2Ugc2ltcGxlIGZpbmdlcnByaW50IGF1dGhlbnRpY2F0aW9uIG9uIEFuZHJvaWQgYW5kIGlPUy5cclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWZpbmdlcnByaW50LWFpby4gRm9yIG1vcmUgaW5mbyBhYm91dCBwbHVnaW4sIHZpc3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9OaWtsYXNNZXJ6L2NvcmRvdmEtcGx1Z2luLWZpbmdlcnByaW50LWFpb1xyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBGaW5nZXJwcmludEFJTyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmluZ2VycHJpbnQtYWlvL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmFpbzogRmluZ2VycHJpbnRBSU8pIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5mYWlvLnNob3coKS50aGVuKChyZXN1bHQ6IGFueSkgPT4gY29uc29sZS5sb2cocmVzdWx0KSkuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAqXHJcbiAqICBPUiB3aXRoIG9wdGlvbnMuLi5cclxuICpcclxuICogdGhpcy5mYWlvLnNob3coe1xyXG4gKiAgICAgdGl0bGU6ICdCaW9tZXRyaWMgQXV0aGVudGljYXRpb24nLCAvLyAoQW5kcm9pZCBPbmx5KSB8IG9wdGlvbmFsIHwgRGVmYXVsdDogXCI8QVBQX05BTUU+IEJpb21ldHJpYyBTaWduIE9uXCJcclxuICogICAgIHN1YnRpdGxlOiAnQ29vbGVzdCBQbHVnaW4gZXZlcicgLy8gKEFuZHJvaWQgT25seSkgfCBvcHRpb25hbCB8IERlZmF1bHQ6IG51bGxcclxuICogICAgIGRlc2NyaXB0aW9uOiAnUGxlYXNlIGF1dGhlbnRpY2F0ZScgLy8gb3B0aW9uYWwgfCBEZWZhdWx0OiBudWxsXHJcbiAqICAgICBmYWxsYmFja0J1dHRvblRpdGxlOiAnVXNlIEJhY2t1cCcsIC8vIG9wdGlvbmFsIHwgV2hlbiBkaXNhYmxlQmFja3VwIGlzIGZhbHNlIGRlZmF1bHRzIHRvIFwiVXNlIFBpblwiLlxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIGRpc2FibGVCYWNrdXAgaXMgdHJ1ZSBkZWZhdWx0cyB0byBcIkNhbmNlbFwiXHJcbiAqICAgICBkaXNhYmxlQmFja3VwOnRydWUsICAvLyBvcHRpb25hbCB8IGRlZmF1bHQ6IGZhbHNlXHJcbiAqIH0pXHJcbiAqIC50aGVuKChyZXN1bHQ6IGFueSkgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcclxuICogLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5mYWlvLnJlZ2lzdGVyQmlvbWV0cmljU2VjcmV0KHtcclxuICogICAgICBkZXNjcmlwdGlvbjogXCJTb21lIGJpb21ldHJpYyBkZXNjcmlwdGlvblwiLCAvLyBvcHRpb25hbCB8IERlZmF1bHQ6IG51bGxcclxuICogICAgICBzZWNyZXQ6IFwibXktc3VwZXItc2VjcmV0XCIsIC8vIG1hbmRhdG9yeVxyXG4gKiAgICAgIGludmFsaWRhdGVPbkVucm9sbG1lbnQ6IHRydWUsIC8vIG9wdGlvbmFsIHwgRGVmYXVsdDogZmFsc2VcclxuICogICAgICBkaXNhYmxlQmFja3VwOiB0cnVlLCAvLyAoQW5kcm9pZCBPbmx5KSB8IG9wdGlvbmFsIHwgYWx3YXlzIGB0cnVlYCBvbiBBbmRyb2lkXHJcbiAqIH0pXHJcbiAqIC50aGVuKChyZXN1bHQ6IGFueSkgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcclxuICogLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gKlxyXG4gKiAgLi4uXHJcbiAqXHJcbiAqIHRoaXMuZmFpby5sb2FkQmlvbWV0cmljU2VjcmV0KHtcclxuICogICAgICBkZXNjcmlwdGlvbjogXCJTb21lIGJpb21ldHJpYyBkZXNjcmlwdGlvblwiLCAvLyBvcHRpb25hbCB8IERlZmF1bHQ6IG51bGxcclxuICogICAgICBkaXNhYmxlQmFja3VwOiB0cnVlLCAvLyBhbHdheXMgZGlzYWJsZWQgb24gQW5kcm9pZFxyXG4gKiB9KVxyXG4gKiAudGhlbigocmVzdWx0OiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXHJcbiAqIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIEZpbmdlcnByaW50T3B0aW9uc1xyXG4gKiBGaW5nZXJwcmludFNlY3JldE9wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdGaW5nZXJwcmludEFJTycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmluZ2VycHJpbnQtYWlvJyxcclxuICBwbHVnaW5SZWY6ICdGaW5nZXJwcmludCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9OaWtsYXNNZXJ6L2NvcmRvdmEtcGx1Z2luLWZpbmdlcnByaW50LWFpbycsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpbmdlcnByaW50QUlPIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfVU5LTk9XTl9FUlJPUiA9IC0xMDA7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEJJT01FVFJJQ19VTkFWQUlMQUJMRSA9IC0xMDE7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEJJT01FVFJJQ19BVVRIRU5USUNBVElPTl9GQUlMRUQgPSAtMTAyO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfU0RLX05PVF9TVVBQT1JURUQgPSAtMTAzO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfSEFSRFdBUkVfTk9UX1NVUFBPUlRFRCA9IC0xMDQ7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEJJT01FVFJJQ19QRVJNSVNTSU9OX05PVF9HUkFOVEVEID0gLTEwNTtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX05PVF9FTlJPTExFRCA9IC0xMDY7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEJJT01FVFJJQ19JTlRFUk5BTF9QTFVHSU5fRVJST1IgPSAtMTA3O1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfRElTTUlTU0VEID0gLTEwODtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX1BJTl9PUl9QQVRURVJOX0RJU01JU1NFRCA9IC0xMDk7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEJJT01FVFJJQ19TQ1JFRU5fR1VBUkRfVU5TRUNVUkVEID0gLTExMDtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX0xPQ0tFRF9PVVQgPSAtMTExO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfTE9DS0VEX09VVF9QRVJNQU5FTlQgPSAtMTEyO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfU0VDUkVUX05PVF9GT1VORCA9IC0xMTM7XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGZpbmdlcnByaW50IGF1dGhlbnRpY2F0aW9uIGlzIGF2YWlsYWJsZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCByZXN1bHRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaXNBdmFpbGFibGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3cgYXV0aGVudGljYXRpb24gZGlhbG9ndWUgYW5kIHJlZ2lzdGVyIHNlY3JldFxyXG4gICAqIEBwYXJhbSB7RmluZ2VycHJpbnRTZWNyZXRPcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgZm9yIHBsYXRmb3JtIHNwZWNpZmljIGZpbmdlcnByaW50IEFQSVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGF1dGhlbnRpY2F0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlZ2lzdGVyQmlvbWV0cmljU2VjcmV0KG9wdGlvbnM6IEZpbmdlcnByaW50U2VjcmV0T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93IGF1dGhlbnRpY2F0aW9uIGRpYWxvZ3VlIGFuZCBsb2FkIHNlY3JldFxyXG4gICAqIEBwYXJhbSB7RmluZ2VycHJpbnRPcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgZm9yIHBsYXRmb3JtIHNwZWNpZmljIGZpbmdlcnByaW50IEFQSVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGF1dGhlbnRpY2F0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGxvYWRCaW9tZXRyaWNTZWNyZXQob3B0aW9uczogRmluZ2VycHJpbnRPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3cgYXV0aGVudGljYXRpb24gZGlhbG9ndWVcclxuICAgKiBAcGFyYW0ge0ZpbmdlcnByaW50T3B0aW9uc30gb3B0aW9ucyBPcHRpb25zIGZvciBwbGF0Zm9ybSBzcGVjaWZpYyBmaW5nZXJwcmludCBBUElcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhdXRoZW50aWNhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzaG93KG9wdGlvbnM6IEZpbmdlcnByaW50T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==