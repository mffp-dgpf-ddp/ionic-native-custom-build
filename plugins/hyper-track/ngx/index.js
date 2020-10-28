import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HyperTrackPlugin = /** @class */ (function (_super) {
    __extends(HyperTrackPlugin, _super);
    function HyperTrackPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HyperTrackPlugin.prototype.initialize = function (publishableKey) { return cordova(this, "initialize", {}, arguments); };
    HyperTrackPlugin.prototype.enableDebugLogging = function () { return cordova(this, "enableDebugLogging", {}, arguments); };
    HyperTrackPlugin.pluginName = "cordova-plugin-hypertrack-v3";
    HyperTrackPlugin.plugin = "cordova-plugin-hypertrack-v3";
    HyperTrackPlugin.pluginRef = "hypertrack";
    HyperTrackPlugin.repo = "https://github.com/hypertrack/cordova-plugin-hypertrack.git";
    HyperTrackPlugin.platforms = ["Android"];
    HyperTrackPlugin = __decorate([
        Injectable()
    ], HyperTrackPlugin);
    return HyperTrackPlugin;
}(IonicNativePlugin));
export { HyperTrackPlugin };
var CoordinatesValidationError = /** @class */ (function (_super) {
    __extends(CoordinatesValidationError, _super);
    function CoordinatesValidationError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CoordinatesValidationError;
}(Error));
export { CoordinatesValidationError };
var Coordinates = /** @class */ (function () {
    function Coordinates(latitude, longitude) {
        if (latitude < -90.0 || latitude > 90.0 || longitude < -180.0 || longitude > 180.0) {
            throw new CoordinatesValidationError('latitude and longitude should be of correct valaues');
        }
    }
    return Coordinates;
}());
export { Coordinates };
var HyperTrack = /** @class */ (function () {
    function HyperTrack(cordovaInstanceHandle) {
        this.cordovaInstanceHandle = cordovaInstanceHandle;
    }
    /** Enables debug log in native HyperTrack SDK. */
    HyperTrack.enableDebugLogging = function () {
        new HyperTrackPlugin().enableDebugLogging();
    };
    /**
     * Entry point into SDK.
     *
     * Initializes SDK. Also resolves SDK instance that could be used to query deviceId or set
     * various data.
     * @param publishableKey account-specific secret from the HyperTrack dashborad.
     *
     * @see {@link https://dashboard.hypertrack.com/setup}.
     */
    HyperTrack.initialize = function (publishableKey) {
        return new Promise(function (resolve, reject) {
            new HyperTrackPlugin()
                .initialize(publishableKey)
                .then(function (cordovaInstance) {
                resolve(new HyperTrack(cordovaInstance));
            })
                .catch(function (err) { return reject(err); });
        });
    };
    /** Resolves device ID that could be used to identify the device. */
    HyperTrack.prototype.getDeviceId = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.getDeviceId(function (deviceId) { return resolve(deviceId); }, function (err) { return reject(err); });
        });
    };
    /** Resolves to true if tracking service is running and false otherwise */
    HyperTrack.prototype.isRunning = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.isRunning(function (isRunning) { return resolve(isRunning); }, function (err) { return reject(err); });
        });
    };
    /** Sets device name that could be used to identify the device in HyperTrack dashboard */
    HyperTrack.prototype.setDeviceName = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.setDeviceName(name, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Use this to set additional properties, like segments, teams etc.
     * @param metadata key-value pais of properties.
     */
    HyperTrack.prototype.setDeviceMetadata = function (metadata) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.setDeviceMetadata(metadata, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Updates title and text in persistent notification, that appears when tracking is active.  */
    HyperTrack.prototype.setTrackingNotificationProperties = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.setTrackingNotificationProperties(title, message, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Adds special marker-like object to device timeline. */
    HyperTrack.prototype.addGeotag = function (geotagData, expectedLocation) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.addGeoTag(geotagData, expectedLocation, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Pops up permission request dialog, if permissions weren't granted before or does nothing otherwise. */
    HyperTrack.prototype.requestPermissionsIfNecessary = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.requestPermissionsIfNecessary(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Allows injecting false locations into the SDK, which ignores them by default. */
    HyperTrack.prototype.allowMockLocations = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.allowMockLocations(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Synchronizes tracking state with platform model. This method is used to
     * harden platform2device communication channel.
     */
    HyperTrack.prototype.syncDeviceSettings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.syncDeviceSettings(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    return HyperTrack;
}());
export { HyperTrack };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2h5cGVyLXRyYWNrL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQU9OLE1BQU0sb0JBQW9CLENBQUM7O0lBY1Usb0NBQWlCOzs7O0lBRXJELHFDQUFVLGFBQUMsY0FBc0I7SUFLakMsNkNBQWtCOzs7Ozs7SUFQUCxnQkFBZ0I7UUFENUIsVUFBVSxFQUFFO09BQ0EsZ0JBQWdCOzJCQXRCN0I7RUFzQnNDLGlCQUFpQjtTQUExQyxnQkFBZ0I7O0lBNkNtQiw4Q0FBSzs7OztxQ0FuRXJEO0VBbUVnRCxLQUFLOzs7SUFJbkQscUJBQVksUUFBZ0IsRUFBRSxTQUFpQjtRQUM3QyxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTLEdBQUcsS0FBSyxFQUFFO1lBQ2xGLE1BQU0sSUFBSSwwQkFBMEIsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1NBQzdGO0lBQ0gsQ0FBQztzQkEzRUg7Ozs7SUF3T0Usb0JBQTRCLHFCQUF3QztRQUF4QywwQkFBcUIsR0FBckIscUJBQXFCLENBQW1CO0lBQUcsQ0FBQztJQS9IeEUsa0RBQWtEO0lBQzNDLDZCQUFrQixHQUF6QjtRQUNFLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLHFCQUFVLEdBQWpCLFVBQWtCLGNBQXNCO1FBQ3RDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxJQUFJLGdCQUFnQixFQUFFO2lCQUNuQixVQUFVLENBQUMsY0FBYyxDQUFDO2lCQUMxQixJQUFJ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YXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgUGx1Z2luLFxyXG4gIENvcmRvdmEsXHJcbiAgQ29yZG92YVByb3BlcnR5LFxyXG4gIENvcmRvdmFJbnN0YW5jZSxcclxuICBJbnN0YW5jZVByb3BlcnR5LFxyXG4gIElvbmljTmF0aXZlUGx1Z2luLFxyXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IGtNYXhMZW5ndGggfSBmcm9tICdidWZmZXInO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnZG5zJztcclxuaW1wb3J0IHsgcmVqZWN0IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICdjb25zb2xlJztcclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdjb3Jkb3ZhLXBsdWdpbi1oeXBlcnRyYWNrLXYzJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1oeXBlcnRyYWNrLXYzJyxcclxuICBwbHVnaW5SZWY6ICdoeXBlcnRyYWNrJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2h5cGVydHJhY2svY29yZG92YS1wbHVnaW4taHlwZXJ0cmFjay5naXQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEh5cGVyVHJhY2tQbHVnaW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoKVxyXG4gIGluaXRpYWxpemUocHVibGlzaGFibGVLZXk6IHN0cmluZyk6IFByb21pc2U8SHlwZXJUcmFja0NvcmRvdmE+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBlbmFibGVEZWJ1Z0xvZ2dpbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbi8vIEludGVyZmFjZXMgZm9yIENvcmRvdmEgUGx1Z2luIGNhbGxiYWNrc1xyXG5pbnRlcmZhY2UgRGV2aWNlSWRSZWNlaXZlciB7XHJcbiAgKGRldmljZUlkOiBzdHJpbmcpOiBhbnk7XHJcbn1cclxuaW50ZXJmYWNlIFRyYWNraW5nU3RhdGVSZWNlaXZlciB7XHJcbiAgKGlzUnVubmluZzogYm9vbGVhbik6IGFueTtcclxufVxyXG5pbnRlcmZhY2UgRmFpbHVyZUhhbmRsZXIge1xyXG4gIChlcnJvcjogRXJyb3IpOiBhbnk7XHJcbn1cclxuaW50ZXJmYWNlIFN1Y2Nlc3NIYW5kbGVyIHtcclxuICAoKTogYW55O1xyXG59XHJcblxyXG4vLyBTREsgaW5zdGFuY2UgdGhhdCBleHBvc2VkIGZyb20gQ29yZG92YSB1dGlsaXplcyB1c2FnZSBvZiBjYWxsYmFja3MsIHNvIHdlXHJcbi8vIHdyYXAgaXQgd2l0aCBhZGFwdGVyIHRvIGF2b2lkIG1peCBvZiBjYWxsYmFja3MgYW5kIFByb21pc2VzXHJcbmludGVyZmFjZSBIeXBlclRyYWNrQ29yZG92YSB7XHJcbiAgZ2V0RGV2aWNlSWQoc3VjY2VzczogRGV2aWNlSWRSZWNlaXZlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcclxuICBpc1J1bm5pbmcoc3VjY2VzczogVHJhY2tpbmdTdGF0ZVJlY2VpdmVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xyXG4gIHNldERldmljZU5hbWUobmFtZTogc3RyaW5nLCBzdWNjZXNzOiBTdWNjZXNzSGFuZGxlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcclxuICBzZXREZXZpY2VNZXRhZGF0YShtZXRhZGF0YTogT2JqZWN0LCBzdWNjZXNzOiBTdWNjZXNzSGFuZGxlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcclxuICBzZXRUcmFja2luZ05vdGlmaWNhdGlvblByb3BlcnRpZXMoXHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgbWVzc2FnZTogc3RyaW5nLFxyXG4gICAgc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsXHJcbiAgICBlcnJvcjogRmFpbHVyZUhhbmRsZXJcclxuICApOiB2b2lkO1xyXG4gIGFkZEdlb1RhZyhnZW90YWdEYXRhOiBPYmplY3QsIGV4cGVjdGVkTG9jYXRpb246IENvb3JkaW5hdGVzLCBzdWNjZXNzOiBTdWNjZXNzSGFuZGxlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcclxuICByZXF1ZXN0UGVybWlzc2lvbnNJZk5lY2Vzc2FyeShzdWNjZXNzOiBTdWNjZXNzSGFuZGxlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcclxuICBhbGxvd01vY2tMb2NhdGlvbnMoc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XHJcbiAgc3luY0RldmljZVNldHRpbmdzKHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZXNWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxyXG5cclxuLyoqIFdyYXBwZXIgY2xhc3MgZm9yIHBhc3Npbmcgc3BhdGlhbCBnZW9wb3NpdGlvbiBhcyBhIGdlb3RhZydzIGV4cGVjdGVkIGxvY2F0aW9uICovXHJcbmV4cG9ydCBjbGFzcyBDb29yZGluYXRlcyB7XHJcbiAgY29uc3RydWN0b3IobGF0aXR1ZGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIpIHtcclxuICAgIGlmIChsYXRpdHVkZSA8IC05MC4wIHx8IGxhdGl0dWRlID4gOTAuMCB8fCBsb25naXR1ZGUgPCAtMTgwLjAgfHwgbG9uZ2l0dWRlID4gMTgwLjApIHtcclxuICAgICAgdGhyb3cgbmV3IENvb3JkaW5hdGVzVmFsaWRhdGlvbkVycm9yKCdsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIHNob3VsZCBiZSBvZiBjb3JyZWN0IHZhbGF1ZXMnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiAgIGltcG9ydCB7IEh5cGVyVHJhY2sgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2h5cGVyLXRyYWNrJztcclxuICpcclxuICogICBpbml0aWFsaXplSHlwZXJ0cmFjaygpIHtcclxuICogICAgIEh5cGVyVHJhY2suZW5hYmxlRGVidWdMb2dnaW5nKCk7XHJcbiAqICAgICBIeXBlclRyYWNrLmluaXRpYWxpemUoJ1lPVVJfUFVCTElTSElOR19LRVknKVxyXG4gKiAgICAgLnRoZW4oIHRoaXMub25TZGtJbnN0YW5jZVJlY2VpdmVkIClcclxuICogICAgIC5jYXRjaCggKGVycikgPT4gY29uc29sZS5lcnJvcihcIkh5cGVyVHJhY2sgaW5pdCBmYWlsZWQgd2l0aCBlcnJvciBcIiArIGVycikgKTtcclxuICogICB9XHJcbiAqICAgb25TZGtJbnN0YW5jZVJlY2VpdmVkKHNka0luc3RhbmNlOiBIeXBlclRyYWNrKSB7XHJcbiAqICAgICAgIHNka0luc3RhbmNlLmdldERldmljZUlkKClcclxuICogICAgICAudGhlbigoaWQpID0+IGNvbnNvbGUubG9nKFwiR290IGRldmljZSBpZCBcIiArIGlkKSlcclxuICogICAgICAudGhlbigoKSA9PiBzZGtJbnN0YW5jZS5zZXREZXZpY2VOYW1lKFwiRWx2aXMgSW9uaWNcIikpXHJcbiAqICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJEZXZpY2UgbmFtZSB3YXMgY2hhbmdlZFwiKSlcclxuICogICAgICAudGhlbigoKSA9PiBzZGtJbnN0YW5jZS5zZXREZXZpY2VNZXRhZGF0YSh7cGxhdGZvcm06IFwiSW9uaWMgQW5kcm9pZFwifSkpXHJcbiAqICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJEZXZpY2UgbWV0YWRhdGEgd2FzIGNoYW5nZWRcIikpXHJcbiAqICAgICAgLnRoZW4oKCkgPT4gc2RrSW5zdGFuY2Uuc2V0VHJhY2tpbmdOb3RpZmljYXRpb25Qcm9wZXJ0aWVzKFwiVHJhY2tpbmcgT25cIiwgXCJJb25pYyBTREsgaXMgdHJhY2tpbmdcIikpXHJcbiAqICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gcHJvcGVydGllcyB3ZXJlIGNoYW5nZWRcIikpXHJcbiAqICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJHb3QgZXJyb3IgaW4gSHlwZXJUcmFjayBcIiArIGVycikpO1xyXG4gKiAgIH1cclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSHlwZXJUcmFjayB7XHJcbiAgLyoqIEVuYWJsZXMgZGVidWcgbG9nIGluIG5hdGl2ZSBIeXBlclRyYWNrIFNESy4gKi9cclxuICBzdGF0aWMgZW5hYmxlRGVidWdMb2dnaW5nKCk6IHZvaWQge1xyXG4gICAgbmV3IEh5cGVyVHJhY2tQbHVnaW4oKS5lbmFibGVEZWJ1Z0xvZ2dpbmcoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVudHJ5IHBvaW50IGludG8gU0RLLlxyXG4gICAqXHJcbiAgICogSW5pdGlhbGl6ZXMgU0RLLiBBbHNvIHJlc29sdmVzIFNESyBpbnN0YW5jZSB0aGF0IGNvdWxkIGJlIHVzZWQgdG8gcXVlcnkgZGV2aWNlSWQgb3Igc2V0XHJcbiAgICogdmFyaW91cyBkYXRhLlxyXG4gICAqIEBwYXJhbSBwdWJsaXNoYWJsZUtleSBhY2NvdW50LXNwZWNpZmljIHNlY3JldCBmcm9tIHRoZSBIeXBlclRyYWNrIGRhc2hib3JhZC5cclxuICAgKlxyXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZGFzaGJvYXJkLmh5cGVydHJhY2suY29tL3NldHVwfS5cclxuICAgKi9cclxuICBzdGF0aWMgaW5pdGlhbGl6ZShwdWJsaXNoYWJsZUtleTogc3RyaW5nKTogUHJvbWlzZTxIeXBlclRyYWNrPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBuZXcgSHlwZXJUcmFja1BsdWdpbigpXHJcbiAgICAgICAgLmluaXRpYWxpemUocHVibGlzaGFibGVLZXkpXHJcbiAgICAgICAgLnRoZW4oKGNvcmRvdmFJbnN0YW5jZTogSHlwZXJUcmFja0NvcmRvdmEpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUobmV3IEh5cGVyVHJhY2soY29yZG92YUluc3RhbmNlKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHJlamVjdChlcnIpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIFJlc29sdmVzIGRldmljZSBJRCB0aGF0IGNvdWxkIGJlIHVzZWQgdG8gaWRlbnRpZnkgdGhlIGRldmljZS4gKi9cclxuICBnZXREZXZpY2VJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuZ2V0RGV2aWNlSWQoXHJcbiAgICAgICAgZGV2aWNlSWQgPT4gcmVzb2x2ZShkZXZpY2VJZCksXHJcbiAgICAgICAgZXJyID0+IHJlamVjdChlcnIpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBSZXNvbHZlcyB0byB0cnVlIGlmIHRyYWNraW5nIHNlcnZpY2UgaXMgcnVubmluZyBhbmQgZmFsc2Ugb3RoZXJ3aXNlICovXHJcbiAgaXNSdW5uaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuaXNSdW5uaW5nKFxyXG4gICAgICAgIGlzUnVubmluZyA9PiByZXNvbHZlKGlzUnVubmluZyksXHJcbiAgICAgICAgZXJyID0+IHJlamVjdChlcnIpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBTZXRzIGRldmljZSBuYW1lIHRoYXQgY291bGQgYmUgdXNlZCB0byBpZGVudGlmeSB0aGUgZGV2aWNlIGluIEh5cGVyVHJhY2sgZGFzaGJvYXJkICovXHJcbiAgc2V0RGV2aWNlTmFtZShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuc2V0RGV2aWNlTmFtZShcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcclxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycilcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHRoaXMgdG8gc2V0IGFkZGl0aW9uYWwgcHJvcGVydGllcywgbGlrZSBzZWdtZW50cywgdGVhbXMgZXRjLlxyXG4gICAqIEBwYXJhbSBtZXRhZGF0YSBrZXktdmFsdWUgcGFpcyBvZiBwcm9wZXJ0aWVzLlxyXG4gICAqL1xyXG4gIHNldERldmljZU1ldGFkYXRhKG1ldGFkYXRhOiBPYmplY3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuc2V0RGV2aWNlTWV0YWRhdGEoXHJcbiAgICAgICAgbWV0YWRhdGEsXHJcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxyXG4gICAgICAgIGVyciA9PiByZWplY3QoZXJyKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogVXBkYXRlcyB0aXRsZSBhbmQgdGV4dCBpbiBwZXJzaXN0ZW50IG5vdGlmaWNhdGlvbiwgdGhhdCBhcHBlYXJzIHdoZW4gdHJhY2tpbmcgaXMgYWN0aXZlLiAgKi9cclxuICBzZXRUcmFja2luZ05vdGlmaWNhdGlvblByb3BlcnRpZXModGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLnNldFRyYWNraW5nTm90aWZpY2F0aW9uUHJvcGVydGllcyhcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcclxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycilcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFkZHMgc3BlY2lhbCBtYXJrZXItbGlrZSBvYmplY3QgdG8gZGV2aWNlIHRpbWVsaW5lLiAqL1xyXG4gIGFkZEdlb3RhZyhnZW90YWdEYXRhOiBPYmplY3QsIGV4cGVjdGVkTG9jYXRpb24/OiBDb29yZGluYXRlcyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5hZGRHZW9UYWcoXHJcbiAgICAgICAgZ2VvdGFnRGF0YSxcclxuICAgICAgICBleHBlY3RlZExvY2F0aW9uLFxyXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcclxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycilcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIFBvcHMgdXAgcGVybWlzc2lvbiByZXF1ZXN0IGRpYWxvZywgaWYgcGVybWlzc2lvbnMgd2VyZW4ndCBncmFudGVkIGJlZm9yZSBvciBkb2VzIG5vdGhpbmcgb3RoZXJ3aXNlLiAqL1xyXG4gIHJlcXVlc3RQZXJtaXNzaW9uc0lmTmVjZXNzYXJ5KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5yZXF1ZXN0UGVybWlzc2lvbnNJZk5lY2Vzc2FyeShcclxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXHJcbiAgICAgICAgZXJyID0+IHJlamVjdChlcnIpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBBbGxvd3MgaW5qZWN0aW5nIGZhbHNlIGxvY2F0aW9ucyBpbnRvIHRoZSBTREssIHdoaWNoIGlnbm9yZXMgdGhlbSBieSBkZWZhdWx0LiAqL1xyXG4gIGFsbG93TW9ja0xvY2F0aW9ucygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuYWxsb3dNb2NrTG9jYXRpb25zKFxyXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcclxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycilcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3luY2hyb25pemVzIHRyYWNraW5nIHN0YXRlIHdpdGggcGxhdGZvcm0gbW9kZWwuIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG9cclxuICAgKiBoYXJkZW4gcGxhdGZvcm0yZGV2aWNlIGNvbW11bmljYXRpb24gY2hhbm5lbC5cclxuICAgKi9cclxuICBzeW5jRGV2aWNlU2V0dGluZ3MoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLnN5bmNEZXZpY2VTZXR0aW5ncyhcclxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXHJcbiAgICAgICAgZXJyID0+IHJlamVjdChlcnIpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IocHJpdmF0ZSBjb3Jkb3ZhSW5zdGFuY2VIYW5kbGU6IEh5cGVyVHJhY2tDb3Jkb3ZhKSB7fVxyXG59XHJcbiJdfQ==