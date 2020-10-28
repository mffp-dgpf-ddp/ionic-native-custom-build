import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var LocationAccuracy = /** @class */ (function (_super) {
    __extends(LocationAccuracy, _super);
    function LocationAccuracy() {
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
    LocationAccuracy.prototype.canRequest = function () { return cordova(this, "canRequest", {}, arguments); };
    LocationAccuracy.prototype.isRequesting = function () { return cordova(this, "isRequesting", {}, arguments); };
    LocationAccuracy.prototype.request = function (accuracy) { return cordova(this, "request", { "callbackOrder": "reverse" }, arguments); };
    LocationAccuracy.pluginName = "LocationAccuracy";
    LocationAccuracy.plugin = "cordova-plugin-request-location-accuracy";
    LocationAccuracy.pluginRef = "cordova.plugins.locationAccuracy";
    LocationAccuracy.repo = "https://github.com/dpa99c/cordova-plugin-request-location-accuracy";
    LocationAccuracy.platforms = ["Android", "iOS"];
    LocationAccuracy = __decorate([
        Injectable()
    ], LocationAccuracy);
    return LocationAccuracy;
}(IonicNativePlugin));
export { LocationAccuracy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xvY2F0aW9uLWFjY3VyYWN5L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXFDbEMsb0NBQWlCOzs7UUFDckQ7OztXQUdHO1FBQ0gsK0JBQXlCLEdBQUcsQ0FBQyxDQUFDO1FBQzlCOzs7V0FHRztRQUNILGdDQUEwQixHQUFHLENBQUMsQ0FBQztRQUMvQjs7O1dBR0c7UUFDSCw4Q0FBd0MsR0FBRyxDQUFDLENBQUM7UUFDN0M7OztXQUdHO1FBQ0gsb0NBQThCLEdBQUcsQ0FBQyxDQUFDO1FBQ25DOzs7V0FHRztRQUNILGdDQUEwQixHQUFHLENBQUMsQ0FBQztRQUMvQjs7O1dBR0c7UUFDSCx5QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDeEI7OztXQUdHO1FBQ0gsOEJBQXdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUI7OztXQUdHO1FBQ0gsMEJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCOzs7V0FHRztRQUNILDRCQUFzQixHQUFHLENBQUMsQ0FBQztRQUMzQjs7O1dBR0c7UUFDSCxxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQjs7O1dBR0c7UUFDSCxrQ0FBNEIsR0FBRyxDQUFDLENBQUM7UUFDakM7OztXQUdHO1FBQ0gsMEJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCOzs7V0FHRztRQUNILHdDQUFrQyxHQUFHLENBQUMsQ0FBQzs7O0lBT3ZDLHFDQUFVO0lBU1YsdUNBQVk7SUFVWixrQ0FBTyxhQUFDLFFBQWdCOzs7Ozs7SUEzRmIsZ0JBQWdCO1FBRDVCLFVBQVUsRUFBRTtPQUNBLGdCQUFnQjsyQkF0QzdCO0VBc0NzQyxpQkFBaUI7U0FBMUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBMb2NhdGlvbiBBY2N1cmFjeVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBDb3Jkb3ZhL1Bob25lZ2FwIHBsdWdpbiBmb3IgQW5kcm9pZCBhbmQgaU9TIHRvIHJlcXVlc3QgZW5hYmxpbmcvY2hhbmdpbmcgb2YgTG9jYXRpb24gU2VydmljZXMgYnkgdHJpZ2dlcmluZyBhIG5hdGl2ZSBkaWFsb2cgZnJvbSB3aXRoaW4gdGhlIGFwcCwgYXZvaWRpbmcgdGhlIG5lZWQgZm9yIHRoZSB1c2VyIHRvIGxlYXZlIHlvdXIgYXBwIHRvIGNoYW5nZSBsb2NhdGlvbiBzZXR0aW5ncyBtYW51YWxseS5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgTG9jYXRpb25BY2N1cmFjeSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbG9jYXRpb24tYWNjdXJhY3kvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbkFjY3VyYWN5OiBMb2NhdGlvbkFjY3VyYWN5KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMubG9jYXRpb25BY2N1cmFjeS5jYW5SZXF1ZXN0KCkudGhlbigoY2FuUmVxdWVzdDogYm9vbGVhbikgPT4ge1xyXG4gKlxyXG4gKiAgIGlmKGNhblJlcXVlc3QpIHtcclxuICogICAgIC8vIHRoZSBhY2N1cmFjeSBvcHRpb24gd2lsbCBiZSBpZ25vcmVkIGJ5IGlPU1xyXG4gKiAgICAgdGhpcy5sb2NhdGlvbkFjY3VyYWN5LnJlcXVlc3QodGhpcy5sb2NhdGlvbkFjY3VyYWN5LlJFUVVFU1RfUFJJT1JJVFlfSElHSF9BQ0NVUkFDWSkudGhlbihcclxuICogICAgICAgKCkgPT4gY29uc29sZS5sb2coJ1JlcXVlc3Qgc3VjY2Vzc2Z1bCcpLFxyXG4gKiAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZygnRXJyb3IgcmVxdWVzdGluZyBsb2NhdGlvbiBwZXJtaXNzaW9ucycsIGVycm9yKVxyXG4gKiAgICAgKTtcclxuICogICB9XHJcbiAqXHJcbiAqIH0pO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdMb2NhdGlvbkFjY3VyYWN5JyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1yZXF1ZXN0LWxvY2F0aW9uLWFjY3VyYWN5JyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMubG9jYXRpb25BY2N1cmFjeScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kcGE5OWMvY29yZG92YS1wbHVnaW4tcmVxdWVzdC1sb2NhdGlvbi1hY2N1cmFjeScsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvY2F0aW9uQWNjdXJhY3kgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIFJFUVVFU1RfUFJJT1JJVFlfTk9fUE9XRVIgPSAwO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBSRVFVRVNUX1BSSU9SSVRZX0xPV19QT1dFUiA9IDE7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIFJFUVVFU1RfUFJJT1JJVFlfQkFMQU5DRURfUE9XRVJfQUNDVVJBQ1kgPSAyO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBSRVFVRVNUX1BSSU9SSVRZX0hJR0hfQUNDVVJBQ1kgPSAzO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBTVUNDRVNTX1NFVFRJTkdTX1NBVElTRklFRCA9IDA7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIFNVQ0NFU1NfVVNFUl9BR1JFRUQgPSAxO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBFUlJPUl9BTFJFQURZX1JFUVVFU1RJTkcgPSAtMTtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgRVJST1JfSU5WQUxJRF9BQ1RJT04gPSAwO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBFUlJPUl9JTlZBTElEX0FDQ1VSQUNZID0gMTtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgRVJST1JfRVhDRVBUSU9OID0gMTtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgRVJST1JfQ0FOTk9UX0NIQU5HRV9BQ0NVUkFDWSA9IDM7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEVSUk9SX1VTRVJfRElTQUdSRUVEID0gNDtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgRVJST1JfR09PR0xFX0FQSV9DT05ORUNUSU9OX0ZBSUxFRCA9IDQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBpZiB5b3UgY2FuIHJlcXVlc3QgYWNjdXJhdGUgbG9jYXRpb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvdmxlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB5b3UgY2FuIHJlcXVlc3QgYWNjdXJhdGUgbG9jYXRpb25cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2FuUmVxdWVzdCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBpZiBhIHJlcXVlc3QgaXMgY3VycmVudGx5IGluIHByb2dyZXNzXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgYSByZXF1ZXN0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpc1JlcXVlc3RpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXF1ZXN0cyBhY2N1cmF0ZSBsb2NhdGlvblxyXG4gICAqIEBwYXJhbSBhY2N1cmFjeSB7bnVtYmVyfSBBY2N1cmFjeSwgZnJvbSAwIHRvIDQuIFlvdSBjYW4gdXNlIHRoZSBzdGF0aWMgcHJvcGVydGllcyBvZiB0aGlzIGNsYXNzIHRoYXQgc3RhcnQgd2l0aCBSRVFVRVNUX1BSSU9SSVRZX1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgb24gc3VjY2VzcyBhbmQgcmVqZWN0cyBpZiBhbiBlcnJvciBvY2N1cnJlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXHJcbiAgcmVxdWVzdChhY2N1cmFjeTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19