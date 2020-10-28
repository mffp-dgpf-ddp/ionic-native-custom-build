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
var HyperTrackPluginOriginal = /** @class */ (function (_super) {
    __extends(HyperTrackPluginOriginal, _super);
    function HyperTrackPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HyperTrackPluginOriginal.prototype.initialize = function (publishableKey) { return cordova(this, "initialize", {}, arguments); };
    HyperTrackPluginOriginal.prototype.enableDebugLogging = function () { return cordova(this, "enableDebugLogging", {}, arguments); };
    HyperTrackPluginOriginal.pluginName = "cordova-plugin-hypertrack-v3";
    HyperTrackPluginOriginal.plugin = "cordova-plugin-hypertrack-v3";
    HyperTrackPluginOriginal.pluginRef = "hypertrack";
    HyperTrackPluginOriginal.repo = "https://github.com/hypertrack/cordova-plugin-hypertrack.git";
    HyperTrackPluginOriginal.platforms = ["Android"];
    return HyperTrackPluginOriginal;
}(IonicNativePlugin));
var HyperTrackPlugin = new HyperTrackPluginOriginal();
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
        new HyperTrackPluginOriginal().enableDebugLogging();
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
            new HyperTrackPluginOriginal()
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2h5cGVyLXRyYWNrL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQU9OLE1BQU0sb0JBQW9CLENBQUM7O0lBY1Usb0NBQWlCOzs7O0lBRXJELHFDQUFVLGFBQUMsY0FBc0I7SUFLakMsNkNBQWtCOzs7Ozs7MkJBN0JwQjtFQXNCc0MsaUJBQWlCO1NBQTFDLGdCQUFnQjs7SUE2Q21CLDhDQUFLOzs7O3FDQW5FckQ7RUFtRWdELEtBQUs7OztJQUluRCxxQkFBWSxRQUFnQixFQUFFLFNBQWlCO1FBQzdDLElBQUksUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLFFBQVEsR0FBRyxJQUFJLElBQUksU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLFNBQVMsR0FBRyxLQUFLLEVBQUU7WUFDbEYsTUFBTSxJQUFJLDBCQUEwQixDQUFDLHFEQUFxRCxDQUFDLENBQUM7U0FDN0Y7SUFDSCxDQUFDO3NCQTNFSDs7OztJQXdPRSxvQkFBNEIscUJBQXdDO1FBQXhDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBbUI7SUFBRyxDQUFDO0lBL0h4RSxrREFBa0Q7SUFDM0MsNkJBQWtCLEdBQXpCO1FBQ0UsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0kscUJBQVUsR0FBakIsVUFBa0IsY0FBc0I7UUFDdEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLElBQUksZ0JBQWdCLEVBQUU7aUJBQ25CLFVBQVUsQ0FBQyxjQUFjLENBQUM7aUJBQzFCLElBQUksQ0FBQyxVQUFDLGVBQWtDO2dCQUN2QyxPQUFPLENBQUMsSUFBSSxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUMzQyxD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QztJQUVELDBHQUEwRztJQUMxRyxrREFBNkIsR0FBN0I7UUFBQSxpQkFPQztRQU5DLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMscUJBQXFCLENBQUMsNkJBQTZCLENBQ3RELGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsVUFBQSxHQUFHLElBQUksT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNuQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0ZBQW9GO0lBQ3BGLHVDQUFrQixHQUFsQjtRQUFBLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FDM0MsY0FBTSxPQUFBLE9BQU8sRUFBRSxFQUFULENBQVMsRUFDZixVQUFBLEdBQUcsSUFBSSxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLENBQ25CLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCx1Q0FBa0IsR0FBbEI7UUFBQSxpQkFPQztRQU5DLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQzNDLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsVUFBQSxHQUFHLElBQUksT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNuQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO3FCQXRPSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBQbHVnaW4sXHJcbiAgQ29yZG92YSxcclxuICBDb3Jkb3ZhUHJvcGVydHksXHJcbiAgQ29yZG92YUluc3RhbmNlLFxyXG4gIEluc3RhbmNlUHJvcGVydHksXHJcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXHJcbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsga01heExlbmd0aCB9IGZyb20gJ2J1ZmZlcic7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdkbnMnO1xyXG5pbXBvcnQgeyByZWplY3QgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBlcnJvciB9IGZyb20gJ2NvbnNvbGUnO1xyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ2NvcmRvdmEtcGx1Z2luLWh5cGVydHJhY2stdjMnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWh5cGVydHJhY2stdjMnLFxyXG4gIHBsdWdpblJlZjogJ2h5cGVydHJhY2snLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaHlwZXJ0cmFjay9jb3Jkb3ZhLXBsdWdpbi1oeXBlcnRyYWNrLmdpdCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHlwZXJUcmFja1BsdWdpbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSgpXHJcbiAgaW5pdGlhbGl6ZShwdWJsaXNoYWJsZUtleTogc3RyaW5nKTogUHJvbWlzZTxIeXBlclRyYWNrQ29yZG92YT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGVuYWJsZURlYnVnTG9nZ2luZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuLy8gSW50ZXJmYWNlcyBmb3IgQ29yZG92YSBQbHVnaW4gY2FsbGJhY2tzXHJcbmludGVyZmFjZSBEZXZpY2VJZFJlY2VpdmVyIHtcclxuICAoZGV2aWNlSWQ6IHN0cmluZyk6IGFueTtcclxufVxyXG5pbnRlcmZhY2UgVHJhY2tpbmdTdGF0ZVJlY2VpdmVyIHtcclxuICAoaXNSdW5uaW5nOiBib29sZWFuKTogYW55O1xyXG59XHJcbmludGVyZmFjZSBGYWlsdXJlSGFuZGxlciB7XHJcbiAgKGVycm9yOiBFcnJvcik6IGFueTtcclxufVxyXG5pbnRlcmZhY2UgU3VjY2Vzc0hhbmRsZXIge1xyXG4gICgpOiBhbnk7XHJcbn1cclxuXHJcbi8vIFNESyBpbnN0YW5jZSB0aGF0IGV4cG9zZWQgZnJvbSBDb3Jkb3ZhIHV0aWxpemVzIHVzYWdlIG9mIGNhbGxiYWNrcywgc28gd2VcclxuLy8gd3JhcCBpdCB3aXRoIGFkYXB0ZXIgdG8gYXZvaWQgbWl4IG9mIGNhbGxiYWNrcyBhbmQgUHJvbWlzZXNcclxuaW50ZXJmYWNlIEh5cGVyVHJhY2tDb3Jkb3ZhIHtcclxuICBnZXREZXZpY2VJZChzdWNjZXNzOiBEZXZpY2VJZFJlY2VpdmVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xyXG4gIGlzUnVubmluZyhzdWNjZXNzOiBUcmFja2luZ1N0YXRlUmVjZWl2ZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XHJcbiAgc2V0RGV2aWNlTmFtZShuYW1lOiBzdHJpbmcsIHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xyXG4gIHNldERldmljZU1ldGFkYXRhKG1ldGFkYXRhOiBPYmplY3QsIHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xyXG4gIHNldFRyYWNraW5nTm90aWZpY2F0aW9uUHJvcGVydGllcyhcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBtZXNzYWdlOiBzdHJpbmcsXHJcbiAgICBzdWNjZXNzOiBTdWNjZXNzSGFuZGxlcixcclxuICAgIGVycm9yOiBGYWlsdXJlSGFuZGxlclxyXG4gICk6IHZvaWQ7XHJcbiAgYWRkR2VvVGFnKGdlb3RhZ0RhdGE6IE9iamVjdCwgZXhwZWN0ZWRMb2NhdGlvbjogQ29vcmRpbmF0ZXMsIHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xyXG4gIHJlcXVlc3RQZXJtaXNzaW9uc0lmTmVjZXNzYXJ5KHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xyXG4gIGFsbG93TW9ja0xvY2F0aW9ucyhzdWNjZXNzOiBTdWNjZXNzSGFuZGxlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcclxuICBzeW5jRGV2aWNlU2V0dGluZ3Moc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb29yZGluYXRlc1ZhbGlkYXRpb25FcnJvciBleHRlbmRzIEVycm9yIHt9XHJcblxyXG4vKiogV3JhcHBlciBjbGFzcyBmb3IgcGFzc2luZyBzcGF0aWFsIGdlb3Bvc2l0aW9uIGFzIGEgZ2VvdGFnJ3MgZXhwZWN0ZWQgbG9jYXRpb24gKi9cclxuZXhwb3J0IGNsYXNzIENvb3JkaW5hdGVzIHtcclxuICBjb25zdHJ1Y3RvcihsYXRpdHVkZTogbnVtYmVyLCBsb25naXR1ZGU6IG51bWJlcikge1xyXG4gICAgaWYgKGxhdGl0dWRlIDwgLTkwLjAgfHwgbGF0aXR1ZGUgPiA5MC4wIHx8IGxvbmdpdHVkZSA8IC0xODAuMCB8fCBsb25naXR1ZGUgPiAxODAuMCkge1xyXG4gICAgICB0aHJvdyBuZXcgQ29vcmRpbmF0ZXNWYWxpZGF0aW9uRXJyb3IoJ2xhdGl0dWRlIGFuZCBsb25naXR1ZGUgc2hvdWxkIGJlIG9mIGNvcnJlY3QgdmFsYXVlcycpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqICAgaW1wb3J0IHsgSHlwZXJUcmFjayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaHlwZXItdHJhY2snO1xyXG4gKlxyXG4gKiAgIGluaXRpYWxpemVIeXBlcnRyYWNrKCkge1xyXG4gKiAgICAgSHlwZXJUcmFjay5lbmFibGVEZWJ1Z0xvZ2dpbmcoKTtcclxuICogICAgIEh5cGVyVHJhY2suaW5pdGlhbGl6ZSgnWU9VUl9QVUJMSVNISU5HX0tFWScpXHJcbiAqICAgICAudGhlbiggdGhpcy5vblNka0luc3RhbmNlUmVjZWl2ZWQgKVxyXG4gKiAgICAgLmNhdGNoKCAoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiSHlwZXJUcmFjayBpbml0IGZhaWxlZCB3aXRoIGVycm9yIFwiICsgZXJyKSApO1xyXG4gKiAgIH1cclxuICogICBvblNka0luc3RhbmNlUmVjZWl2ZWQoc2RrSW5zdGFuY2U6IEh5cGVyVHJhY2spIHtcclxuICogICAgICAgc2RrSW5zdGFuY2UuZ2V0RGV2aWNlSWQoKVxyXG4gKiAgICAgIC50aGVuKChpZCkgPT4gY29uc29sZS5sb2coXCJHb3QgZGV2aWNlIGlkIFwiICsgaWQpKVxyXG4gKiAgICAgIC50aGVuKCgpID0+IHNka0luc3RhbmNlLnNldERldmljZU5hbWUoXCJFbHZpcyBJb25pY1wiKSlcclxuICogICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIkRldmljZSBuYW1lIHdhcyBjaGFuZ2VkXCIpKVxyXG4gKiAgICAgIC50aGVuKCgpID0+IHNka0luc3RhbmNlLnNldERldmljZU1ldGFkYXRhKHtwbGF0Zm9ybTogXCJJb25pYyBBbmRyb2lkXCJ9KSlcclxuICogICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIkRldmljZSBtZXRhZGF0YSB3YXMgY2hhbmdlZFwiKSlcclxuICogICAgICAudGhlbigoKSA9PiBzZGtJbnN0YW5jZS5zZXRUcmFja2luZ05vdGlmaWNhdGlvblByb3BlcnRpZXMoXCJUcmFja2luZyBPblwiLCBcIklvbmljIFNESyBpcyB0cmFja2luZ1wiKSlcclxuICogICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbiBwcm9wZXJ0aWVzIHdlcmUgY2hhbmdlZFwiKSlcclxuICogICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkdvdCBlcnJvciBpbiBIeXBlclRyYWNrIFwiICsgZXJyKSk7XHJcbiAqICAgfVxyXG4gKlxyXG4gKiBgYGBcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBIeXBlclRyYWNrIHtcclxuICAvKiogRW5hYmxlcyBkZWJ1ZyBsb2cgaW4gbmF0aXZlIEh5cGVyVHJhY2sgU0RLLiAqL1xyXG4gIHN0YXRpYyBlbmFibGVEZWJ1Z0xvZ2dpbmcoKTogdm9pZCB7XHJcbiAgICBuZXcgSHlwZXJUcmFja1BsdWdpbigpLmVuYWJsZURlYnVnTG9nZ2luZygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW50cnkgcG9pbnQgaW50byBTREsuXHJcbiAgICpcclxuICAgKiBJbml0aWFsaXplcyBTREsuIEFsc28gcmVzb2x2ZXMgU0RLIGluc3RhbmNlIHRoYXQgY291bGQgYmUgdXNlZCB0byBxdWVyeSBkZXZpY2VJZCBvciBzZXRcclxuICAgKiB2YXJpb3VzIGRhdGEuXHJcbiAgICogQHBhcmFtIHB1Ymxpc2hhYmxlS2V5IGFjY291bnQtc3BlY2lmaWMgc2VjcmV0IGZyb20gdGhlIEh5cGVyVHJhY2sgZGFzaGJvcmFkLlxyXG4gICAqXHJcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kYXNoYm9hcmQuaHlwZXJ0cmFjay5jb20vc2V0dXB9LlxyXG4gICAqL1xyXG4gIHN0YXRpYyBpbml0aWFsaXplKHB1Ymxpc2hhYmxlS2V5OiBzdHJpbmcpOiBQcm9taXNlPEh5cGVyVHJhY2s+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIG5ldyBIeXBlclRyYWNrUGx1Z2luKClcclxuICAgICAgICAuaW5pdGlhbGl6ZShwdWJsaXNoYWJsZUtleSlcclxuICAgICAgICAudGhlbigoY29yZG92YUluc3RhbmNlOiBIeXBlclRyYWNrQ29yZG92YSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShuZXcgSHlwZXJUcmFjayhjb3Jkb3ZhSW5zdGFuY2UpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogUmVzb2x2ZXMgZGV2aWNlIElEIHRoYXQgY291bGQgYmUgdXNlZCB0byBpZGVudGlmeSB0aGUgZGV2aWNlLiAqL1xyXG4gIGdldERldmljZUlkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5nZXREZXZpY2VJZChcclxuICAgICAgICBkZXZpY2VJZCA9PiByZXNvbHZlKGRldmljZUlkKSxcclxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycilcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIFJlc29sdmVzIHRvIHRydWUgaWYgdHJhY2tpbmcgc2VydmljZSBpcyBydW5uaW5nIGFuZCBmYWxzZSBvdGhlcndpc2UgKi9cclxuICBpc1J1bm5pbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5pc1J1bm5pbmcoXHJcbiAgICAgICAgaXNSdW5uaW5nID0+IHJlc29sdmUoaXNSdW5uaW5nKSxcclxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycilcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNldHMgZGV2aWNlIG5hbWUgdGhhdCBjb3VsZCBiZSB1c2VkIHRvIGlkZW50aWZ5IHRoZSBkZXZpY2UgaW4gSHlwZXJUcmFjayBkYXNoYm9hcmQgKi9cclxuICBzZXREZXZpY2VOYW1lKG5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5zZXREZXZpY2VOYW1lKFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxyXG4gICAgICAgIGVyciA9PiByZWplY3QoZXJyKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2UgdGhpcyB0byBzZXQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLCBsaWtlIHNlZ21lbnRzLCB0ZWFtcyBldGMuXHJcbiAgICogQHBhcmFtIG1ldGFkYXRhIGtleS12YWx1ZSBwYWlzIG9mIHByb3BlcnRpZXMuXHJcbiAgICovXHJcbiAgc2V0RGV2aWNlTWV0YWRhdGEobWV0YWRhdGE6IE9iamVjdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5zZXREZXZpY2VNZXRhZGF0YShcclxuICAgICAgICBtZXRhZGF0YSxcclxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXHJcbiAgICAgICAgZXJyID0+IHJlamVjdChlcnIpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBVcGRhdGVzIHRpdGxlIGFuZCB0ZXh0IGluIHBlcnNpc3RlbnQgbm90aWZpY2F0aW9uLCB0aGF0IGFwcGVhcnMgd2hlbiB0cmFja2luZyBpcyBhY3RpdmUuICAqL1xyXG4gIHNldFRyYWNraW5nTm90aWZpY2F0aW9uUHJvcGVydGllcyh0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuc2V0VHJhY2tpbmdOb3RpZmljYXRpb25Qcm9wZXJ0aWVzKFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxyXG4gICAgICAgIGVyciA9PiByZWplY3QoZXJyKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQWRkcyBzcGVjaWFsIG1hcmtlci1saWtlIG9iamVjdCB0byBkZXZpY2UgdGltZWxpbmUuICovXHJcbiAgYWRkR2VvdGFnKGdlb3RhZ0RhdGE6IE9iamVjdCwgZXhwZWN0ZWRMb2NhdGlvbj86IENvb3JkaW5hdGVzKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLmFkZEdlb1RhZyhcclxuICAgICAgICBnZW90YWdEYXRhLFxyXG4gICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXHJcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxyXG4gICAgICAgIGVyciA9PiByZWplY3QoZXJyKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogUG9wcyB1cCBwZXJtaXNzaW9uIHJlcXVlc3QgZGlhbG9nLCBpZiBwZXJtaXNzaW9ucyB3ZXJlbid0IGdyYW50ZWQgYmVmb3JlIG9yIGRvZXMgbm90aGluZyBvdGhlcndpc2UuICovXHJcbiAgcmVxdWVzdFBlcm1pc3Npb25zSWZOZWNlc3NhcnkoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLnJlcXVlc3RQZXJtaXNzaW9uc0lmTmVjZXNzYXJ5KFxyXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcclxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycilcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFsbG93cyBpbmplY3RpbmcgZmFsc2UgbG9jYXRpb25zIGludG8gdGhlIFNESywgd2hpY2ggaWdub3JlcyB0aGVtIGJ5IGRlZmF1bHQuICovXHJcbiAgYWxsb3dNb2NrTG9jYXRpb25zKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5hbGxvd01vY2tMb2NhdGlvbnMoXHJcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxyXG4gICAgICAgIGVyciA9PiByZWplY3QoZXJyKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTeW5jaHJvbml6ZXMgdHJhY2tpbmcgc3RhdGUgd2l0aCBwbGF0Zm9ybSBtb2RlbC4gVGhpcyBtZXRob2QgaXMgdXNlZCB0b1xyXG4gICAqIGhhcmRlbiBwbGF0Zm9ybTJkZXZpY2UgY29tbXVuaWNhdGlvbiBjaGFubmVsLlxyXG4gICAqL1xyXG4gIHN5bmNEZXZpY2VTZXR0aW5ncygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuc3luY0RldmljZVNldHRpbmdzKFxyXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcclxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycilcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvcmRvdmFJbnN0YW5jZUhhbmRsZTogSHlwZXJUcmFja0NvcmRvdmEpIHt9XHJcbn1cclxuIl19