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
var LocationAccuracyOriginal = /** @class */ (function (_super) {
    __extends(LocationAccuracyOriginal, _super);
    function LocationAccuracyOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_NO_POWER = 0;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_LOW_POWER = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_BALANCED_POWER_ACCURACY = 2;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_HIGH_ACCURACY = 3;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.SUCCESS_SETTINGS_SATISFIED = 0;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.SUCCESS_USER_AGREED = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_ALREADY_REQUESTING = -1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_INVALID_ACTION = 0;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_INVALID_ACCURACY = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_EXCEPTION = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_CANNOT_CHANGE_ACCURACY = 3;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_USER_DISAGREED = 4;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_GOOGLE_API_CONNECTION_FAILED = 4;
        return _this;
    }
    LocationAccuracyOriginal.prototype.canRequest = function () { return cordova(this, "canRequest", {}, arguments); };
    LocationAccuracyOriginal.prototype.isRequesting = function () { return cordova(this, "isRequesting", {}, arguments); };
    LocationAccuracyOriginal.prototype.request = function (accuracy) { return cordova(this, "request", { "callbackOrder": "reverse" }, arguments); };
    LocationAccuracyOriginal.pluginName = "LocationAccuracy";
    LocationAccuracyOriginal.plugin = "cordova-plugin-request-location-accuracy";
    LocationAccuracyOriginal.pluginRef = "cordova.plugins.locationAccuracy";
    LocationAccuracyOriginal.repo = "https://github.com/dpa99c/cordova-plugin-request-location-accuracy";
    LocationAccuracyOriginal.platforms = ["Android", "iOS"];
    return LocationAccuracyOriginal;
}(IonicNativePlugin));
var LocationAccuracy = new LocationAccuracyOriginal();
export { LocationAccuracy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xvY2F0aW9uLWFjY3VyYWN5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXFDbEMsb0NBQWlCOzs7UUFDckQ7OztXQUdHO1FBQ0gsK0JBQXlCLEdBQUcsQ0FBQyxDQUFDO1FBQzlCOzs7V0FHRztRQUNILGdDQUEwQixHQUFHLENBQUMsQ0FBQztRQUMvQjs7O1dBR0c7UUFDSCw4Q0FBd0MsR0FBRyxDQUFDLENBQUM7UUFDN0M7OztXQUdHO1FBQ0gsb0NBQThCLEdBQUcsQ0FBQyxDQUFDO1FBQ25DOzs7V0FHRztRQUNILGdDQUEwQixHQUFHLENBQUMsQ0FBQztRQUMvQjs7O1dBR0c7UUFDSCx5QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDeEI7OztXQUdHO1FBQ0gsOEJBQXdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUI7OztXQUdHO1FBQ0gsMEJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCOzs7V0FHRztRQUNILDRCQUFzQixHQUFHLENBQUMsQ0FBQztRQUMzQjs7O1dBR0c7UUFDSCxxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQjs7O1dBR0c7UUFDSCxrQ0FBNEIsR0FBRyxDQUFDLENBQUM7UUFDakM7OztXQUdHO1FBQ0gsMEJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCOzs7V0FHRztRQUNILHdDQUFrQyxHQUFHLENBQUMsQ0FBQzs7O0lBT3ZDLHFDQUFVO0lBU1YsdUNBQVk7SUFVWixrQ0FBTyxhQUFDLFFBQWdCOzs7Ozs7MkJBakkxQjtFQXNDc0MsaUJBQWlCO1NBQTFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgTG9jYXRpb24gQWNjdXJhY3lcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgQ29yZG92YS9QaG9uZWdhcCBwbHVnaW4gZm9yIEFuZHJvaWQgYW5kIGlPUyB0byByZXF1ZXN0IGVuYWJsaW5nL2NoYW5naW5nIG9mIExvY2F0aW9uIFNlcnZpY2VzIGJ5IHRyaWdnZXJpbmcgYSBuYXRpdmUgZGlhbG9nIGZyb20gd2l0aGluIHRoZSBhcHAsIGF2b2lkaW5nIHRoZSBuZWVkIGZvciB0aGUgdXNlciB0byBsZWF2ZSB5b3VyIGFwcCB0byBjaGFuZ2UgbG9jYXRpb24gc2V0dGluZ3MgbWFudWFsbHkuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IExvY2F0aW9uQWNjdXJhY3kgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2xvY2F0aW9uLWFjY3VyYWN5L25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb25BY2N1cmFjeTogTG9jYXRpb25BY2N1cmFjeSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmxvY2F0aW9uQWNjdXJhY3kuY2FuUmVxdWVzdCgpLnRoZW4oKGNhblJlcXVlc3Q6IGJvb2xlYW4pID0+IHtcclxuICpcclxuICogICBpZihjYW5SZXF1ZXN0KSB7XHJcbiAqICAgICAvLyB0aGUgYWNjdXJhY3kgb3B0aW9uIHdpbGwgYmUgaWdub3JlZCBieSBpT1NcclxuICogICAgIHRoaXMubG9jYXRpb25BY2N1cmFjeS5yZXF1ZXN0KHRoaXMubG9jYXRpb25BY2N1cmFjeS5SRVFVRVNUX1BSSU9SSVRZX0hJR0hfQUNDVVJBQ1kpLnRoZW4oXHJcbiAqICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdSZXF1ZXN0IHN1Y2Nlc3NmdWwnKSxcclxuICogICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coJ0Vycm9yIHJlcXVlc3RpbmcgbG9jYXRpb24gcGVybWlzc2lvbnMnLCBlcnJvcilcclxuICogICAgICk7XHJcbiAqICAgfVxyXG4gKlxyXG4gKiB9KTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnTG9jYXRpb25BY2N1cmFjeScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcmVxdWVzdC1sb2NhdGlvbi1hY2N1cmFjeScsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmxvY2F0aW9uQWNjdXJhY3knLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZHBhOTljL2NvcmRvdmEtcGx1Z2luLXJlcXVlc3QtbG9jYXRpb24tYWNjdXJhY3knLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbkFjY3VyYWN5IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBSRVFVRVNUX1BSSU9SSVRZX05PX1BPV0VSID0gMDtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgUkVRVUVTVF9QUklPUklUWV9MT1dfUE9XRVIgPSAxO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBSRVFVRVNUX1BSSU9SSVRZX0JBTEFOQ0VEX1BPV0VSX0FDQ1VSQUNZID0gMjtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgUkVRVUVTVF9QUklPUklUWV9ISUdIX0FDQ1VSQUNZID0gMztcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgU1VDQ0VTU19TRVRUSU5HU19TQVRJU0ZJRUQgPSAwO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBTVUNDRVNTX1VTRVJfQUdSRUVEID0gMTtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgRVJST1JfQUxSRUFEWV9SRVFVRVNUSU5HID0gLTE7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEVSUk9SX0lOVkFMSURfQUNUSU9OID0gMDtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgRVJST1JfSU5WQUxJRF9BQ0NVUkFDWSA9IDE7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEVSUk9SX0VYQ0VQVElPTiA9IDE7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEVSUk9SX0NBTk5PVF9DSEFOR0VfQUNDVVJBQ1kgPSAzO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBFUlJPUl9VU0VSX0RJU0FHUkVFRCA9IDQ7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEVSUk9SX0dPT0dMRV9BUElfQ09OTkVDVElPTl9GQUlMRUQgPSA0O1xyXG5cclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgaWYgeW91IGNhbiByZXF1ZXN0IGFjY3VyYXRlIGxvY2F0aW9uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb3ZsZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgeW91IGNhbiByZXF1ZXN0IGFjY3VyYXRlIGxvY2F0aW9uXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNhblJlcXVlc3QoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgaWYgYSByZXF1ZXN0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIGEgcmVxdWVzdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3NcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaXNSZXF1ZXN0aW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVxdWVzdHMgYWNjdXJhdGUgbG9jYXRpb25cclxuICAgKiBAcGFyYW0gYWNjdXJhY3kge251bWJlcn0gQWNjdXJhY3ksIGZyb20gMCB0byA0LiBZb3UgY2FuIHVzZSB0aGUgc3RhdGljIHByb3BlcnRpZXMgb2YgdGhpcyBjbGFzcyB0aGF0IHN0YXJ0IHdpdGggUkVRVUVTVF9QUklPUklUWV9cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3MgYW5kIHJlamVjdHMgaWYgYW4gZXJyb3Igb2NjdXJyZWRcclxuICAgKi9cclxuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxyXG4gIHJlcXVlc3QoYWNjdXJhY3k6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==