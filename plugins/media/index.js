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
import { IonicNativePlugin, cordovaInstance, instancePropertyGet, instancePropertySet, checkAvailability } from '@ionic-native/core';
import { Observable } from 'rxjs';
var MediaObject = /** @class */ (function () {
    function MediaObject(_objectInstance) {
        var _this = this;
        this._objectInstance = _objectInstance;
        this.onSuccess = new Observable(function (observer) {
            _this.successCallback = observer.next.bind(observer);
            return function () { return (_this.successCallback = function () { }); };
        });
        this.onError = new Observable(function (observer) {
            _this.errorCallback = observer.next.bind(observer);
            return function () { return (_this.errorCallback = function () { }); };
        });
        this.onStatusUpdate = new Observable(function (observer) {
            _this.statusCallback = observer.next.bind(observer);
            return function () { return (_this.statusCallback = function () { }); };
        });
    }
    MediaObject.prototype.getCurrentAmplitude = function () { return cordovaInstance(this, "getCurrentAmplitude", {}, arguments); };
    MediaObject.prototype.getCurrentPosition = function () { return cordovaInstance(this, "getCurrentPosition", {}, arguments); };
    MediaObject.prototype.getDuration = function () { return cordovaInstance(this, "getDuration", { "sync": true }, arguments); };
    MediaObject.prototype.play = function (iosOptions) { return cordovaInstance(this, "play", { "sync": true }, arguments); };
    MediaObject.prototype.pause = function () { return cordovaInstance(this, "pause", { "sync": true }, arguments); };
    MediaObject.prototype.release = function () { return cordovaInstance(this, "release", { "sync": true }, arguments); };
    MediaObject.prototype.seekTo = function (milliseconds) { return cordovaInstance(this, "seekTo", { "sync": true }, arguments); };
    MediaObject.prototype.setVolume = function (volume) { return cordovaInstance(this, "setVolume", { "sync": true }, arguments); };
    MediaObject.prototype.setRate = function (speedRate) { return cordovaInstance(this, "setRate", { "sync": true }, arguments); };
    MediaObject.prototype.startRecord = function () { return cordovaInstance(this, "startRecord", { "sync": true }, arguments); };
    MediaObject.prototype.stopRecord = function () { return cordovaInstance(this, "stopRecord", { "sync": true }, arguments); };
    MediaObject.prototype.pauseRecord = function () { return cordovaInstance(this, "pauseRecord", { "sync": true }, arguments); };
    MediaObject.prototype.resumeRecord = function () { return cordovaInstance(this, "resumeRecord", { "sync": true }, arguments); };
    MediaObject.prototype.stop = function () { return cordovaInstance(this, "stop", { "sync": true }, arguments); };
    Object.defineProperty(MediaObject.prototype, "successCallback", {
        get: function () { return instancePropertyGet(this, "successCallback"); },
        set: function (value) { instancePropertySet(this, "successCallback", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaObject.prototype, "errorCallback", {
        get: function () { return instancePropertyGet(this, "errorCallback"); },
        set: function (value) { instancePropertySet(this, "errorCallback", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaObject.prototype, "statusCallback", {
        get: function () { return instancePropertyGet(this, "statusCallback"); },
        set: function (value) { instancePropertySet(this, "statusCallback", value); },
        enumerable: true,
        configurable: true
    });
    return MediaObject;
}());
export { MediaObject };
export var MEDIA_STATUS;
(function (MEDIA_STATUS) {
    MEDIA_STATUS[MEDIA_STATUS["NONE"] = 0] = "NONE";
    MEDIA_STATUS[MEDIA_STATUS["STARTING"] = 1] = "STARTING";
    MEDIA_STATUS[MEDIA_STATUS["RUNNING"] = 2] = "RUNNING";
    MEDIA_STATUS[MEDIA_STATUS["PAUSED"] = 3] = "PAUSED";
    MEDIA_STATUS[MEDIA_STATUS["STOPPED"] = 4] = "STOPPED";
})(MEDIA_STATUS || (MEDIA_STATUS = {}));
export var MEDIA_ERROR;
(function (MEDIA_ERROR) {
    MEDIA_ERROR[MEDIA_ERROR["ABORTED"] = 1] = "ABORTED";
    MEDIA_ERROR[MEDIA_ERROR["NETWORK"] = 2] = "NETWORK";
    MEDIA_ERROR[MEDIA_ERROR["DECODE"] = 3] = "DECODE";
    MEDIA_ERROR[MEDIA_ERROR["SUPPORTED"] = 4] = "SUPPORTED";
})(MEDIA_ERROR || (MEDIA_ERROR = {}));
var MediaOriginal = /** @class */ (function (_super) {
    __extends(MediaOriginal, _super);
    function MediaOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Constants
        /**
         * @hidden
         */
        _this.MEDIA_NONE = 0;
        /**
         * @hidden
         */
        _this.MEDIA_STARTING = 1;
        /**
         * @hidden
         */
        _this.MEDIA_RUNNING = 2;
        /**
         * @hidden
         */
        _this.MEDIA_PAUSED = 3;
        /**
         * @hidden
         */
        _this.MEDIA_STOPPED = 4;
        // error codes
        /**
         * @hidden
         */
        _this.MEDIA_ERR_ABORTED = 1;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_NETWORK = 2;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_DECODE = 3;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_NONE_SUPPORTED = 4;
        return _this;
    }
    /**
     * Open a media file
     * @param src {string} A URI containing the audio content.
     * @return {MediaObject}
     */
    MediaOriginal.prototype.create = function (src) {
        var instance;
        if (checkAvailability(MediaOriginal.getPluginRef(), null, MediaOriginal.getPluginName()) === true) {
            // Creates a new media object
            instance = new (MediaOriginal.getPlugin())(src);
        }
        return new MediaObject(instance);
    };
    MediaOriginal.pluginName = "Media";
    MediaOriginal.repo = "https://github.com/apache/cordova-plugin-media";
    MediaOriginal.plugin = "cordova-plugin-media";
    MediaOriginal.pluginRef = "Media";
    MediaOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return MediaOriginal;
}(IonicNativePlugin));
var Media = new MediaOriginal();
export { Media };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLGdGQUFnRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JILE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7O0lBb0MxQyxxQkFBb0IsZUFBb0I7UUFBeEMsaUJBZUM7UUFmbUIsb0JBQWUsR0FBZixlQUFlLENBQUs7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsQ0FBTSxVQUFDLFFBQXVCO1lBQzNELEtBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsT0FBTyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsZUFBZSxHQUFHLGNBQU8sQ0FBQyxDQUFDLEVBQWpDLENBQWlDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksVUFBVSxDQUFjLFVBQUMsUUFBK0I7WUFDekUsS0FBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsRCxPQUFPLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxhQUFhLEdBQUcsY0FBTyxDQUFDLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxVQUFVLENBQWUsVUFBQyxRQUFnQztZQUNsRixLQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELE9BQU8sY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLGNBQWMsR0FBRyxjQUFPLENBQUMsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQU9ELHlDQUFtQjtJQVNuQix3Q0FBa0I7SUFTbEIsaUNBQVc7SUFRWCwwQkFBSSxhQUFDLFVBQThFO0lBTW5GLDJCQUFLO0lBTUwsNkJBQU87SUFPUCw0QkFBTSxhQUFDLFlBQW9CO0lBTzNCLCtCQUFTLGFBQUMsTUFBYztJQUd4Qiw2QkFBTyxhQUFDLFNBQWlCO0lBTXpCLGlDQUFXO0lBTVgsZ0NBQVU7SUFNVixpQ0FBVztJQU1YLGtDQUFZO0lBTVosMEJBQUk7MEJBdkhnQix3Q0FBZTs7Ozs7OzBCQUtmLHNDQUFhOzs7Ozs7MEJBS2IsdUNBQWM7Ozs7OztzQkFwQ3BDOzs7QUFrS0EsTUFBTSxDQUFOLElBQVksWUFNWDtBQU5ELFdBQVksWUFBWTtJQUN0QiwrQ0FBUSxDQUFBO0lBQ1IsdURBQVEsQ0FBQTtJQUNSLHFEQUFPLENBQUE7SUFDUCxtREFBTSxDQUFBO0lBQ04scURBQU8sQ0FBQTtBQUNULENBQUMsRUFOVyxZQUFZLEtBQVosWUFBWSxRQU12QjtBQUVELE1BQU0sQ0FBTixJQUFZLFdBS1g7QUFMRCxXQUFZLFdBQVc7SUFDckIsbURBQVcsQ0FBQTtJQUNYLG1EQUFPLENBQUE7SUFDUCxpREFBTSxDQUFBO0lBQ04sdURBQVMsQ0FBQTtBQUNYLENBQUMsRUFMVyxXQUFXLEtBQVgsV0FBVyxRQUt0Qjs7SUE4RzBCLHlCQUFpQjs7O1FBQzFDLFlBQVk7UUFDWjs7V0FFRztRQUNILGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Y7O1dBRUc7UUFDSCxvQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQjs7V0FFRztRQUNILG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCOztXQUVHO1FBQ0gsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakI7O1dBRUc7UUFDSCxtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUVsQixjQUFjO1FBQ2Q7O1dBRUc7UUFDSCx1QkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEI7O1dBRUc7UUFDSCx1QkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEI7O1dBRUc7UUFDSCxzQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckI7O1dBRUc7UUFDSCw4QkFBd0IsR0FBRyxDQUFDLENBQUM7OztJQUU3Qjs7OztPQUlHO0lBQ0gsc0JBQU0sR0FBTixVQUFPLEdBQVc7UUFDaEIsSUFBSSxRQUFhLENBQUM7UUFFbEIsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNqRiw2QkFBNkI7WUFDN0IsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QztRQUVELE9BQU8sSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O2dCQXBWSDtFQTZSMkIsaUJBQWlCO1NBQS9CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiwgY2hlY2tBdmFpbGFiaWxpdHkgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZWRpYU9iamVjdCB7XHJcbiAgLyoqXHJcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSBvbiBhY3Rpb25zIHN1Y2Nlc3NcclxuICAgKi9cclxuICBvblN1Y2Nlc3M6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIGFuIGVycm9yIG9jY3Vyc1xyXG4gICAqL1xyXG4gIG9uRXJyb3I6IE9ic2VydmFibGU8TUVESUFfRVJST1I+O1xyXG5cclxuICAvKipcclxuICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGZpbGUgc3RhdHVzIGNoYW5nZXNcclxuICAgKi9cclxuICBvblN0YXR1c1VwZGF0ZTogT2JzZXJ2YWJsZTxNRURJQV9TVEFUVVM+O1xyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBzdWNjZXNzQ2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBlcnJvckNhbGxiYWNrOiBGdW5jdGlvbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgc3RhdHVzQ2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XHJcbiAgICB0aGlzLm9uU3VjY2VzcyA9IG5ldyBPYnNlcnZhYmxlPGFueT4oKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XHJcbiAgICAgIHRoaXMuc3VjY2Vzc0NhbGxiYWNrID0gb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKTtcclxuICAgICAgcmV0dXJuICgpID0+ICh0aGlzLnN1Y2Nlc3NDYWxsYmFjayA9ICgpID0+IHt9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub25FcnJvciA9IG5ldyBPYnNlcnZhYmxlPE1FRElBX0VSUk9SPigob2JzZXJ2ZXI6IE9ic2VydmVyPE1FRElBX0VSUk9SPikgPT4ge1xyXG4gICAgICB0aGlzLmVycm9yQ2FsbGJhY2sgPSBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gKHRoaXMuZXJyb3JDYWxsYmFjayA9ICgpID0+IHt9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub25TdGF0dXNVcGRhdGUgPSBuZXcgT2JzZXJ2YWJsZTxNRURJQV9TVEFUVVM+KChvYnNlcnZlcjogT2JzZXJ2ZXI8TUVESUFfU1RBVFVTPikgPT4ge1xyXG4gICAgICB0aGlzLnN0YXR1c0NhbGxiYWNrID0gb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKTtcclxuICAgICAgcmV0dXJuICgpID0+ICh0aGlzLnN0YXR1c0NhbGxiYWNrID0gKCkgPT4ge30pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGN1cnJlbnQgYW1wbGl0dWRlIG9mIHRoZSBjdXJyZW50IHJlY29yZGluZy5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSBhbXBsaXR1ZGUgb2YgdGhlIGN1cnJlbnQgcmVjb3JkaW5nXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSgpXHJcbiAgZ2V0Q3VycmVudEFtcGxpdHVkZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uIHdpdGhpbiBhbiBhdWRpbyBmaWxlLiBBbHNvIHVwZGF0ZXMgdGhlIE1lZGlhIG9iamVjdCdzIHBvc2l0aW9uIHBhcmFtZXRlci5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCByZWNvcmRpbmdcclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKClcclxuICBnZXRDdXJyZW50UG9zaXRpb24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgZHVyYXRpb24gb2YgYW4gYXVkaW8gZmlsZSBpbiBzZWNvbmRzLiBJZiB0aGUgZHVyYXRpb24gaXMgdW5rbm93biwgaXQgcmV0dXJucyBhIHZhbHVlIG9mIC0xLlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIGR1cmF0aW9uIG9mIHRoZSBjdXJyZW50IHJlY29yZGluZ1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZ2V0RHVyYXRpb24oKTogbnVtYmVyIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0cyBvciByZXN1bWVzIHBsYXlpbmcgYW4gYXVkaW8gZmlsZS5cclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHBsYXkoaW9zT3B0aW9ucz86IHsgbnVtYmVyT2ZMb29wcz86IG51bWJlcjsgcGxheUF1ZGlvV2hlblNjcmVlbklzTG9ja2VkPzogYm9vbGVhbiB9KTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBQYXVzZXMgcGxheWluZyBhbiBhdWRpbyBmaWxlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcGF1c2UoKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBSZWxlYXNlcyB0aGUgdW5kZXJseWluZyBvcGVyYXRpbmcgc3lzdGVtJ3MgYXVkaW8gcmVzb3VyY2VzLiBUaGlzIGlzIHBhcnRpY3VsYXJseSBpbXBvcnRhbnQgZm9yIEFuZHJvaWQsIHNpbmNlIHRoZXJlIGFyZSBhIGZpbml0ZSBhbW91bnQgb2YgT3BlbkNvcmUgaW5zdGFuY2VzIGZvciBtZWRpYSBwbGF5YmFjay4gQXBwbGljYXRpb25zIHNob3VsZCBjYWxsIHRoZSByZWxlYXNlIGZ1bmN0aW9uIGZvciBhbnkgTWVkaWEgcmVzb3VyY2UgdGhhdCBpcyBubyBsb25nZXIgbmVlZGVkLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcmVsZWFzZSgpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgcG9zaXRpb24gd2l0aGluIGFuIGF1ZGlvIGZpbGUuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kcyBUaGUgdGltZSBwb3NpdGlvbiB5b3Ugd2FudCB0byBzZXQgZm9yIHRoZSBjdXJyZW50IGF1ZGlvIGZpbGVcclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNlZWtUbyhtaWxsaXNlY29uZHM6IG51bWJlcik6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSB2b2x1bWUgZm9yIGFuIGF1ZGlvIGZpbGUuXHJcbiAgICogQHBhcmFtIHZvbHVtZSB7bnVtYmVyfSBUaGUgdm9sdW1lIHRvIHNldCBmb3IgcGxheWJhY2suIFRoZSB2YWx1ZSBtdXN0IGJlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgMC4wIHRvIDEuMC5cclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNldFZvbHVtZSh2b2x1bWU6IG51bWJlcik6IHZvaWQge31cclxuXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcclxuICBzZXRSYXRlKHNwZWVkUmF0ZTogbnVtYmVyKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydHMgcmVjb3JkaW5nIGFuIGF1ZGlvIGZpbGUuXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcclxuICBzdGFydFJlY29yZCgpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3BzIHJlY29yZGluZ1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc3RvcFJlY29yZCgpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhdXNlcyByZWNvcmRpbmdcclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHBhdXNlUmVjb3JkKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzdW1lcyByZWNvcmRpbmdcclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHJlc3VtZVJlY29yZCgpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3BzIHBsYXlpbmcgYW4gYXVkaW8gZmlsZS5cclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHN0b3AoKTogdm9pZCB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBNZWRpYVN0YXR1c1VwZGF0ZUNhbGxiYWNrID0gKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFFcnJvciB7XHJcbiAgLyoqXHJcbiAgICogRXJyb3IgbWVzc2FnZVxyXG4gICAqL1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRXJyb3IgY29kZVxyXG4gICAqL1xyXG4gIGNvZGU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTUVESUFfU1RBVFVTIHtcclxuICBOT05FID0gMCxcclxuICBTVEFSVElORyxcclxuICBSVU5OSU5HLFxyXG4gIFBBVVNFRCxcclxuICBTVE9QUEVELFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNRURJQV9FUlJPUiB7XHJcbiAgQUJPUlRFRCA9IDEsXHJcbiAgTkVUV09SSyxcclxuICBERUNPREUsXHJcbiAgU1VQUE9SVEVELFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBNZWRpYUVycm9yQ2FsbGJhY2sgPSAoZXJyb3I6IE1lZGlhRXJyb3IpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogQG5hbWUgTWVkaWFcclxuICogQHByZW1pZXIgbWVkaWFcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIHByb3ZpZGVzIHRoZSBhYmlsaXR5IHRvIHJlY29yZCBhbmQgcGxheSBiYWNrIGF1ZGlvIGZpbGVzIG9uIGEgZGV2aWNlLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBNZWRpYSwgTWVkaWFPYmplY3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL21lZGlhL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVkaWE6IE1lZGlhKSB7IH1cclxuICpcclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIC8vIENyZWF0ZSBhIE1lZGlhIGluc3RhbmNlLiAgRXhwZWN0cyBwYXRoIHRvIGZpbGUgb3IgdXJsIGFzIGFyZ3VtZW50XHJcbiAqIC8vIFdlIGNhbiBvcHRpb25hbGx5IHBhc3MgYSBzZWNvbmQgYXJndW1lbnQgdG8gdHJhY2sgdGhlIHN0YXR1cyBvZiB0aGUgbWVkaWFcclxuICpcclxuICogY29uc3QgZmlsZTogTWVkaWFPYmplY3QgPSB0aGlzLm1lZGlhLmNyZWF0ZSgnZmlsZS5tcDMnKTtcclxuICpcclxuICogLy8gdG8gbGlzdGVuIHRvIHBsdWdpbiBldmVudHM6XHJcbiAqXHJcbiAqIGZpbGUub25TdGF0dXNVcGRhdGUuc3Vic2NyaWJlKHN0YXR1cyA9PiBjb25zb2xlLmxvZyhzdGF0dXMpKTsgLy8gZmlyZXMgd2hlbiBmaWxlIHN0YXR1cyBjaGFuZ2VzXHJcbiAqXHJcbiAqIGZpbGUub25TdWNjZXNzLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZygnQWN0aW9uIGlzIHN1Y2Nlc3NmdWwnKSk7XHJcbiAqXHJcbiAqIGZpbGUub25FcnJvci5zdWJzY3JpYmUoZXJyb3IgPT4gY29uc29sZS5sb2coJ0Vycm9yIScsIGVycm9yKSk7XHJcbiAqXHJcbiAqIC8vIHBsYXkgdGhlIGZpbGVcclxuICogZmlsZS5wbGF5KCk7XHJcbiAqXHJcbiAqIC8vIHBhdXNlIHRoZSBmaWxlXHJcbiAqIGZpbGUucGF1c2UoKTtcclxuICpcclxuICogLy8gZ2V0IGN1cnJlbnQgcGxheWJhY2sgcG9zaXRpb25cclxuICogZmlsZS5nZXRDdXJyZW50UG9zaXRpb24oKS50aGVuKChwb3NpdGlvbikgPT4ge1xyXG4gKiAgIGNvbnNvbGUubG9nKHBvc2l0aW9uKTtcclxuICogfSk7XHJcbiAqXHJcbiAqIC8vIGdldCBmaWxlIGR1cmF0aW9uXHJcbiAqIGxldCBkdXJhdGlvbiA9IGZpbGUuZ2V0RHVyYXRpb24oKTtcclxuICogY29uc29sZS5sb2coZHVyYXRpb24pO1xyXG4gKlxyXG4gKiAvLyBza2lwIHRvIDEwIHNlY29uZHMgKGV4cGVjdHMgaW50IHZhbHVlIGluIG1zKVxyXG4gKiBmaWxlLnNlZWtUbygxMDAwMCk7XHJcbiAqXHJcbiAqIC8vIHN0b3AgcGxheWluZyB0aGUgZmlsZVxyXG4gKiBmaWxlLnN0b3AoKTtcclxuICpcclxuICogLy8gcmVsZWFzZSB0aGUgbmF0aXZlIGF1ZGlvIHJlc291cmNlXHJcbiAqIC8vIFBsYXRmb3JtIFF1aXJrczpcclxuICogLy8gaU9TIHNpbXBseSBjcmVhdGUgYSBuZXcgaW5zdGFuY2UgYW5kIHRoZSBvbGQgb25lIHdpbGwgYmUgb3ZlcndyaXR0ZW5cclxuICogLy8gQW5kcm9pZCB5b3UgbXVzdCBjYWxsIHJlbGVhc2UoKSB0byBkZXN0cm95IGluc3RhbmNlcyBvZiBtZWRpYSB3aGVuIHlvdSBhcmUgZG9uZVxyXG4gKiBmaWxlLnJlbGVhc2UoKTtcclxuICpcclxuICpcclxuICpcclxuICogLy8gUmVjb3JkaW5nIHRvIGEgZmlsZVxyXG4gKiBjb25zdCBmaWxlOiBNZWRpYU9iamVjdCA9IHRoaXMubWVkaWEuY3JlYXRlKCdwYXRoL3RvL2ZpbGUubXAzJyk7XHJcbiAqXHJcbiAqIGZpbGUuc3RhcnRSZWNvcmQoKTtcclxuICpcclxuICogZmlsZS5zdG9wUmVjb3JkKCk7XHJcbiAqXHJcbiAqXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBTb21lIGhpbnRzIGlmIHlvdSBhcmUgdXNpbmcgaU9TIGFuZCByZWNvcmRpbmcgZG9lc24ndCB3b3JrOlxyXG4gKiAxLikgVHJ5IHRvIHVzZSBhIGFic29sdXRlIGZpbGUgcGF0aCBidXQgcmVtb3ZlIGJlZ2lubmluZyBcImZpbGU6Ly9cIi5cclxuICogVGhlbiBpdCBsb29rcyBsaWtlOiBgL3Zhci9tb2JpbGUvQ29udGFpbmVycy9EYXRhL0FwcGxpY2F0aW9uL0FGNDM4QjhCLTc3MjQtNEZCQi04RTY5LTA4MzQ2MzIyNEZDNC90bXAvbXlfZmlsZS5tNGFgXHJcbiAqIEV4YW1wbGU6IGB0aGlzLm1lZGlhLmNyZWF0ZSh0aGlzLmZpbGUudGVtcERpcmVjdG9yeS5yZXBsYWNlKC9eZmlsZTpcXC9cXC8vLCAnJykgKyAnbXlfZmlsZS5tNGEnKWBcclxuICogMi4pIElmIHRoYXQncyBub3Qgd29ya2luZywgdG9vLCBjcmVhdGUgdGhlIGZpbGUgYmVmb3JlIHVzaW5nLlxyXG4gKiBFeGFtcGxlOlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IE1lZGlhLCBNZWRpYU9iamVjdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbWVkaWEvbmd4JztcclxuICogaW1wb3J0IHsgRmlsZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlsZS9uZ3gnO1xyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtZWRpYTogTWVkaWEsIHByaXZhdGUgZmlsZTogRmlsZSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmZpbGUuY3JlYXRlRmlsZSh0aGlzLmZpbGUudGVtcERpcmVjdG9yeSwgJ215X2ZpbGUubTRhJywgdHJ1ZSkudGhlbigoKSA9PiB7XHJcbiAqICAgbGV0IGZpbGUgPSB0aGlzLm1lZGlhLmNyZWF0ZSh0aGlzLmZpbGUudGVtcERpcmVjdG9yeS5yZXBsYWNlKC9eZmlsZTpcXC9cXC8vLCAnJykgKyAnbXlfZmlsZS5tNGEnKTtcclxuICogICBmaWxlLnN0YXJ0UmVjb3JkKCk7XHJcbiAqICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gZmlsZS5zdG9wUmVjb3JkKCksIDEwMDAwKTtcclxuICogfSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBZb3UgY2FuIGZpbmQgdGhlIHJlYXNvbnMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtbmF0aXZlL2lzc3Vlcy8xNDUyI2lzc3VlY29tbWVudC0yOTk2MDU5MDZcclxuICogQGNsYXNzZXNcclxuICogTWVkaWFPYmplY3RcclxuICogQGludGVyZmFjZXNcclxuICogTWVkaWFFcnJvclxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ01lZGlhJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1tZWRpYScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWVkaWEnLFxyXG4gIHBsdWdpblJlZjogJ01lZGlhJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1lZGlhIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8vIENvbnN0YW50c1xyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBNRURJQV9OT05FID0gMDtcclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgTUVESUFfU1RBUlRJTkcgPSAxO1xyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBNRURJQV9SVU5OSU5HID0gMjtcclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgTUVESUFfUEFVU0VEID0gMztcclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgTUVESUFfU1RPUFBFRCA9IDQ7XHJcblxyXG4gIC8vIGVycm9yIGNvZGVzXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIE1FRElBX0VSUl9BQk9SVEVEID0gMTtcclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgTUVESUFfRVJSX05FVFdPUksgPSAyO1xyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBNRURJQV9FUlJfREVDT0RFID0gMztcclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgTUVESUFfRVJSX05PTkVfU1VQUE9SVEVEID0gNDtcclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbiBhIG1lZGlhIGZpbGVcclxuICAgKiBAcGFyYW0gc3JjIHtzdHJpbmd9IEEgVVJJIGNvbnRhaW5pbmcgdGhlIGF1ZGlvIGNvbnRlbnQuXHJcbiAgICogQHJldHVybiB7TWVkaWFPYmplY3R9XHJcbiAgICovXHJcbiAgY3JlYXRlKHNyYzogc3RyaW5nKTogTWVkaWFPYmplY3Qge1xyXG4gICAgbGV0IGluc3RhbmNlOiBhbnk7XHJcblxyXG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KE1lZGlhLmdldFBsdWdpblJlZigpLCBudWxsLCBNZWRpYS5nZXRQbHVnaW5OYW1lKCkpID09PSB0cnVlKSB7XHJcbiAgICAgIC8vIENyZWF0ZXMgYSBuZXcgbWVkaWEgb2JqZWN0XHJcbiAgICAgIGluc3RhbmNlID0gbmV3IChNZWRpYS5nZXRQbHVnaW4oKSkoc3JjKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IE1lZGlhT2JqZWN0KGluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl19