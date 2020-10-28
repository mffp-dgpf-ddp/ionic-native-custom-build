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
var FingerprintAIOOriginal = /** @class */ (function (_super) {
    __extends(FingerprintAIOOriginal, _super);
    function FingerprintAIOOriginal() {
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
    FingerprintAIOOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    FingerprintAIOOriginal.prototype.registerBiometricSecret = function (options) { return cordova(this, "registerBiometricSecret", {}, arguments); };
    FingerprintAIOOriginal.prototype.loadBiometricSecret = function (options) { return cordova(this, "loadBiometricSecret", {}, arguments); };
    FingerprintAIOOriginal.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    FingerprintAIOOriginal.pluginName = "FingerprintAIO";
    FingerprintAIOOriginal.plugin = "cordova-plugin-fingerprint-aio";
    FingerprintAIOOriginal.pluginRef = "Fingerprint";
    FingerprintAIOOriginal.repo = "https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio";
    FingerprintAIOOriginal.platforms = ["Android", "iOS"];
    return FingerprintAIOOriginal;
}(IonicNativePlugin));
var FingerprintAIO = new FingerprintAIOOriginal();
export { FingerprintAIO };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbmdlcnByaW50LWFpby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFtSHBDLGtDQUFpQjs7O1FBQ25EOzs7V0FHRztRQUNILDZCQUF1QixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQy9COzs7V0FHRztRQUNILDJCQUFxQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzdCOzs7V0FHRztRQUNILHFDQUErQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3ZDOzs7V0FHRztRQUNILGlDQUEyQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ25DOzs7V0FHRztRQUNILHNDQUFnQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3hDOzs7V0FHRztRQUNILHNDQUFnQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3hDOzs7V0FHRztRQUNILDRCQUFzQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzlCOzs7V0FHRztRQUNILHFDQUErQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3ZDOzs7V0FHRztRQUNILHlCQUFtQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzNCOzs7V0FHRztRQUNILHdDQUFrQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzFDOzs7V0FHRztRQUNILHNDQUFnQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3hDOzs7V0FHRztRQUNILDBCQUFvQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzVCOzs7V0FHRztRQUNILG9DQUE4QixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3RDOzs7V0FHRztRQUNILGdDQUEwQixHQUFHLENBQUMsR0FBRyxDQUFDOzs7SUFPbEMsb0NBQVc7SUFVWCxnREFBdUIsYUFBQyxPQUFpQztJQVV6RCw0Q0FBbUIsYUFBQyxPQUEyQjtJQVUvQyw2QkFBSSxhQUFDLE9BQTJCOzs7Ozs7eUJBL05sQztFQW9Ib0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaW5nZXJwcmludE9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIFRpdGxlIGluIGJpb21ldHJpYyBwcm9tcHQgKGFuZHJvaWQgb25seSlcclxuICAgKiBAZGVmYXVsdCB7QVBQX05BTUV9IEJpb21ldHJpYyBTaWduIE9uXHJcbiAgICovXHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnRpdGxlIGluIGJpb21ldHJpYyBQcm9tcHQgKGFuZHJvaWQgb25seSlcclxuICAgKiBAZGVmYXVsdCBudWxsXHJcbiAgICovXHJcbiAgc3VidGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc2NyaXB0aW9uIGluIGJpb21ldHJpYyBQcm9tcHRcclxuICAgKiBAZGVmYXVsdCBudWxsXHJcbiAgICovXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIG9mIGZhbGxiYWNrIGJ1dHRvbi5cclxuICAgKiBAZGVmYXVsdCBcIlVzZSBQaW5cIlxyXG4gICAqL1xyXG4gIGZhbGxiYWNrQnV0dG9uVGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIGZvciBjYW5jZWwgYnV0dG9uIG9uIEFuZHJvaWRcclxuICAgKiBAZGVmYXVsdCBcIkNhbmNlbFwiXHJcbiAgICovXHJcbiAgY2FuY2VsQnV0dG9uVGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc2FibGUgJ3VzZSBiYWNrdXAnIG9wdGlvbi5cclxuICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAqL1xyXG4gIGRpc2FibGVCYWNrdXA/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpbmdlcnByaW50U2VjcmV0T3B0aW9ucyBleHRlbmRzIEZpbmdlcnByaW50T3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogU3RyaW5nIHNlY3JldCB0byBlbmNyeXB0IGFuZCBzYXZlLCB1c2Ugc2ltcGxlIHN0cmluZ3MgbWF0Y2hpbmcgdGhlIHJlZ2V4IFthLXpBLVowLTlcXC1dK1xyXG4gICAqL1xyXG4gIHNlY3JldDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBJZiBgdHJ1ZWAgc2VjcmV0IHdpbGwgYmUgZGVsZXRlZCB3aGVuIGJpb21ldHJ5IGl0ZW1zIGFyZSBkZWxldGVkIG9yIGVucm9sbGVkXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKi9cclxuICBpbnZhbGlkYXRlT25FbnJvbGxtZW50PzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEZpbmdlcnByaW50IEFJT1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVXNlIHNpbXBsZSBmaW5nZXJwcmludCBhdXRoZW50aWNhdGlvbiBvbiBBbmRyb2lkIGFuZCBpT1MuXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW8uIEZvciBtb3JlIGluZm8gYWJvdXQgcGx1Z2luLCB2aXN0OiBodHRwczovL2dpdGh1Yi5jb20vTmlrbGFzTWVyei9jb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW9cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRmluZ2VycHJpbnRBSU8gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZpbmdlcnByaW50LWFpby9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZhaW86IEZpbmdlcnByaW50QUlPKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuZmFpby5zaG93KCkudGhlbigocmVzdWx0OiBhbnkpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gKlxyXG4gKiAgT1Igd2l0aCBvcHRpb25zLi4uXHJcbiAqXHJcbiAqIHRoaXMuZmFpby5zaG93KHtcclxuICogICAgIHRpdGxlOiAnQmlvbWV0cmljIEF1dGhlbnRpY2F0aW9uJywgLy8gKEFuZHJvaWQgT25seSkgfCBvcHRpb25hbCB8IERlZmF1bHQ6IFwiPEFQUF9OQU1FPiBCaW9tZXRyaWMgU2lnbiBPblwiXHJcbiAqICAgICBzdWJ0aXRsZTogJ0Nvb2xlc3QgUGx1Z2luIGV2ZXInIC8vIChBbmRyb2lkIE9ubHkpIHwgb3B0aW9uYWwgfCBEZWZhdWx0OiBudWxsXHJcbiAqICAgICBkZXNjcmlwdGlvbjogJ1BsZWFzZSBhdXRoZW50aWNhdGUnIC8vIG9wdGlvbmFsIHwgRGVmYXVsdDogbnVsbFxyXG4gKiAgICAgZmFsbGJhY2tCdXR0b25UaXRsZTogJ1VzZSBCYWNrdXAnLCAvLyBvcHRpb25hbCB8IFdoZW4gZGlzYWJsZUJhY2t1cCBpcyBmYWxzZSBkZWZhdWx0cyB0byBcIlVzZSBQaW5cIi5cclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiBkaXNhYmxlQmFja3VwIGlzIHRydWUgZGVmYXVsdHMgdG8gXCJDYW5jZWxcIlxyXG4gKiAgICAgZGlzYWJsZUJhY2t1cDp0cnVlLCAgLy8gb3B0aW9uYWwgfCBkZWZhdWx0OiBmYWxzZVxyXG4gKiB9KVxyXG4gKiAudGhlbigocmVzdWx0OiBhbnkpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXHJcbiAqIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuZmFpby5yZWdpc3RlckJpb21ldHJpY1NlY3JldCh7XHJcbiAqICAgICAgZGVzY3JpcHRpb246IFwiU29tZSBiaW9tZXRyaWMgZGVzY3JpcHRpb25cIiwgLy8gb3B0aW9uYWwgfCBEZWZhdWx0OiBudWxsXHJcbiAqICAgICAgc2VjcmV0OiBcIm15LXN1cGVyLXNlY3JldFwiLCAvLyBtYW5kYXRvcnlcclxuICogICAgICBpbnZhbGlkYXRlT25FbnJvbGxtZW50OiB0cnVlLCAvLyBvcHRpb25hbCB8IERlZmF1bHQ6IGZhbHNlXHJcbiAqICAgICAgZGlzYWJsZUJhY2t1cDogdHJ1ZSwgLy8gKEFuZHJvaWQgT25seSkgfCBvcHRpb25hbCB8IGFsd2F5cyBgdHJ1ZWAgb24gQW5kcm9pZFxyXG4gKiB9KVxyXG4gKiAudGhlbigocmVzdWx0OiBhbnkpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXHJcbiAqIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICpcclxuICogIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmZhaW8ubG9hZEJpb21ldHJpY1NlY3JldCh7XHJcbiAqICAgICAgZGVzY3JpcHRpb246IFwiU29tZSBiaW9tZXRyaWMgZGVzY3JpcHRpb25cIiwgLy8gb3B0aW9uYWwgfCBEZWZhdWx0OiBudWxsXHJcbiAqICAgICAgZGlzYWJsZUJhY2t1cDogdHJ1ZSwgLy8gYWx3YXlzIGRpc2FibGVkIG9uIEFuZHJvaWRcclxuICogfSlcclxuICogLnRoZW4oKHJlc3VsdDogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxyXG4gKiAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBGaW5nZXJwcmludE9wdGlvbnNcclxuICogRmluZ2VycHJpbnRTZWNyZXRPcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRmluZ2VycHJpbnRBSU8nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbmdlcnByaW50LWFpbycsXHJcbiAgcGx1Z2luUmVmOiAnRmluZ2VycHJpbnQnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTmlrbGFzTWVyei9jb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW8nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaW5nZXJwcmludEFJTyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX1VOS05PV05fRVJST1IgPSAtMTAwO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfVU5BVkFJTEFCTEUgPSAtMTAxO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfQVVUSEVOVElDQVRJT05fRkFJTEVEID0gLTEwMjtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX1NES19OT1RfU1VQUE9SVEVEID0gLTEwMztcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX0hBUkRXQVJFX05PVF9TVVBQT1JURUQgPSAtMTA0O1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfUEVSTUlTU0lPTl9OT1RfR1JBTlRFRCA9IC0xMDU7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEJJT01FVFJJQ19OT1RfRU5ST0xMRUQgPSAtMTA2O1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfSU5URVJOQUxfUExVR0lOX0VSUk9SID0gLTEwNztcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX0RJU01JU1NFRCA9IC0xMDg7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEJJT01FVFJJQ19QSU5fT1JfUEFUVEVSTl9ESVNNSVNTRUQgPSAtMTA5O1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfU0NSRUVOX0dVQVJEX1VOU0VDVVJFRCA9IC0xMTA7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEJJT01FVFJJQ19MT0NLRURfT1VUID0gLTExMTtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX0xPQ0tFRF9PVVRfUEVSTUFORU5UID0gLTExMjtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX1NFQ1JFVF9OT1RfRk9VTkQgPSAtMTEzO1xyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBmaW5nZXJwcmludCBhdXRoZW50aWNhdGlvbiBpcyBhdmFpbGFibGVcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggcmVzdWx0XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93IGF1dGhlbnRpY2F0aW9uIGRpYWxvZ3VlIGFuZCByZWdpc3RlciBzZWNyZXRcclxuICAgKiBAcGFyYW0ge0ZpbmdlcnByaW50U2VjcmV0T3B0aW9uc30gb3B0aW9ucyBPcHRpb25zIGZvciBwbGF0Zm9ybSBzcGVjaWZpYyBmaW5nZXJwcmludCBBUElcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhdXRoZW50aWNhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZWdpc3RlckJpb21ldHJpY1NlY3JldChvcHRpb25zOiBGaW5nZXJwcmludFNlY3JldE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyBhdXRoZW50aWNhdGlvbiBkaWFsb2d1ZSBhbmQgbG9hZCBzZWNyZXRcclxuICAgKiBAcGFyYW0ge0ZpbmdlcnByaW50T3B0aW9uc30gb3B0aW9ucyBPcHRpb25zIGZvciBwbGF0Zm9ybSBzcGVjaWZpYyBmaW5nZXJwcmludCBBUElcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhdXRoZW50aWNhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBsb2FkQmlvbWV0cmljU2VjcmV0KG9wdGlvbnM6IEZpbmdlcnByaW50T3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93IGF1dGhlbnRpY2F0aW9uIGRpYWxvZ3VlXHJcbiAgICogQHBhcmFtIHtGaW5nZXJwcmludE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgcGxhdGZvcm0gc3BlY2lmaWMgZmluZ2VycHJpbnQgQVBJXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYXV0aGVudGljYXRpb24gd2FzIHN1Y2Nlc3NmdWxcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2hvdyhvcHRpb25zOiBGaW5nZXJwcmludE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=