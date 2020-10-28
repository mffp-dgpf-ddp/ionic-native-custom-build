import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
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
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media() {
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
    Media.prototype.create = function (src) {
        var instance;
        if (checkAvailability(Media.getPluginRef(), null, Media.getPluginName()) === true) {
            // Creates a new media object
            instance = new (Media.getPlugin())(src);
        }
        return new MediaObject(instance);
    };
    Media.pluginName = "Media";
    Media.repo = "https://github.com/apache/cordova-plugin-media";
    Media.plugin = "cordova-plugin-media";
    Media.pluginRef = "Media";
    Media.platforms = ["Android", "Browser", "iOS", "Windows"];
    Media = __decorate([
        Injectable()
    ], Media);
    return Media;
}(IonicNativePlugin));
export { Media };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLGdGQUFnRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JILE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7O0lBb0MxQyxxQkFBb0IsZUFBb0I7UUFBeEMsaUJBZUM7UUFmbUIsb0JBQWUsR0FBZixlQUFlLENBQUs7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsQ0FBTSxVQUFDLFFBQXVCO1lBQzNELEtBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsT0FBTyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsZUFBZSxHQUFHLGNBQU8sQ0FBQyxDQUFDLEVBQWpDLENBQWlDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksVUFBVSxDQUFjLFVBQUMsUUFBK0I7WUFDekUsS0FBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsRCxPQUFPLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxhQUFhLEdBQUcsY0FBTyxDQUFDLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxVQUFVLENBQWUsVUFBQyxRQUFnQztZQUNsRixLQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELE9BQU8sY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLGNBQWMsR0FBRyxjQUFPLENBQUMsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQU9ELHlDQUFtQjtJQVNuQix3Q0FBa0I7SUFTbEIsaUNBQVc7SUFRWCwwQkFBSSxhQUFDLFVBQThFO0lBTW5GLDJCQUFLO0lBTUwsNkJBQU87SUFPUCw0QkFBTSxhQUFDLFlBQW9CO0lBTzNCLCtCQUFTLGFBQUMsTUFBYztJQUd4Qiw2QkFBTyxhQUFDLFNBQWlCO0lBTXpCLGlDQUFXO0lBTVgsZ0NBQVU7SUFNVixpQ0FBVztJQU1YLGtDQUFZO0lBTVosMEJBQUk7MEJBdkhnQix3Q0FBZTs7Ozs7OzBCQUtmLHNDQUFhOzs7Ozs7MEJBS2IsdUNBQWM7Ozs7OztzQkFwQ3BDOzs7QUFrS0EsTUFBTSxDQUFOLElBQVksWUFNWDtBQU5ELFdBQVksWUFBWTtJQUN0QiwrQ0FBUSxDQUFBO0lBQ1IsdURBQVEsQ0FBQTtJQUNSLHFEQUFPLENBQUE7SUFDUCxtREFBTSxDQUFBO0lBQ04scURBQU8sQ0FBQTtBQUNULENBQUMsRUFOVyxZQUFZLEtBQVosWUFBWSxRQU12QjtBQUVELE1BQU0sQ0FBTixJQUFZLFdBS1g7QUFMRCxXQUFZLFdBQVc7SUFDckIsbURBQVcsQ0FBQTtJQUNYLG1EQUFPLENBQUE7SUFDUCxpREFBTSxDQUFBO0lBQ04sdURBQVMsQ0FBQTtBQUNYLENBQUMsRUFMVyxXQUFXLEtBQVgsV0FBVyxRQUt0Qjs7SUE4RzBCLHlCQUFpQjs7O1FBQzFDLFlBQVk7UUFDWjs7V0FFRztRQUNILGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Y7O1dBRUc7UUFDSCxvQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQjs7V0FFRztRQUNILG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCOztXQUVHO1FBQ0gsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakI7O1dBRUc7UUFDSCxtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUVsQixjQUFjO1FBQ2Q7O1dBRUc7UUFDSCx1QkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEI7O1dBRUc7UUFDSCx1QkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEI7O1dBRUc7UUFDSCxzQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckI7O1dBRUc7UUFDSCw4QkFBd0IsR0FBRyxDQUFDLENBQUM7OztJQUU3Qjs7OztPQUlHO0lBQ0gsc0JBQU0sR0FBTixVQUFPLEdBQVc7UUFDaEIsSUFBSSxRQUFhLENBQUM7UUFFbEIsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNqRiw2QkFBNkI7WUFDN0IsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QztRQUVELE9BQU8sSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBdkRVLEtBQUs7UUFEakIsVUFBVSxFQUFFO09BQ0EsS0FBSztnQkE3UmxCO0VBNlIyQixpQkFBaUI7U0FBL0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luLCBjaGVja0F2YWlsYWJpbGl0eSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1lZGlhT2JqZWN0IHtcclxuICAvKipcclxuICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IG9uIGFjdGlvbnMgc3VjY2Vzc1xyXG4gICAqL1xyXG4gIG9uU3VjY2VzczogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICAvKipcclxuICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gYW4gZXJyb3Igb2NjdXJzXHJcbiAgICovXHJcbiAgb25FcnJvcjogT2JzZXJ2YWJsZTxNRURJQV9FUlJPUj47XHJcblxyXG4gIC8qKlxyXG4gICAqIEFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiB0aGUgZmlsZSBzdGF0dXMgY2hhbmdlc1xyXG4gICAqL1xyXG4gIG9uU3RhdHVzVXBkYXRlOiBPYnNlcnZhYmxlPE1FRElBX1NUQVRVUz47XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHN1Y2Nlc3NDYWxsYmFjazogRnVuY3Rpb247XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGVycm9yQ2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBzdGF0dXNDYWxsYmFjazogRnVuY3Rpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcclxuICAgIHRoaXMub25TdWNjZXNzID0gbmV3IE9ic2VydmFibGU8YW55Pigob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcclxuICAgICAgdGhpcy5zdWNjZXNzQ2FsbGJhY2sgPSBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gKHRoaXMuc3VjY2Vzc0NhbGxiYWNrID0gKCkgPT4ge30pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vbkVycm9yID0gbmV3IE9ic2VydmFibGU8TUVESUFfRVJST1I+KChvYnNlcnZlcjogT2JzZXJ2ZXI8TUVESUFfRVJST1I+KSA9PiB7XHJcbiAgICAgIHRoaXMuZXJyb3JDYWxsYmFjayA9IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcik7XHJcbiAgICAgIHJldHVybiAoKSA9PiAodGhpcy5lcnJvckNhbGxiYWNrID0gKCkgPT4ge30pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vblN0YXR1c1VwZGF0ZSA9IG5ldyBPYnNlcnZhYmxlPE1FRElBX1NUQVRVUz4oKG9ic2VydmVyOiBPYnNlcnZlcjxNRURJQV9TVEFUVVM+KSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdHVzQ2FsbGJhY2sgPSBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gKHRoaXMuc3RhdHVzQ2FsbGJhY2sgPSAoKSA9PiB7fSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgY3VycmVudCBhbXBsaXR1ZGUgb2YgdGhlIGN1cnJlbnQgcmVjb3JkaW5nLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIGFtcGxpdHVkZSBvZiB0aGUgY3VycmVudCByZWNvcmRpbmdcclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKClcclxuICBnZXRDdXJyZW50QW1wbGl0dWRlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gd2l0aGluIGFuIGF1ZGlvIGZpbGUuIEFsc28gdXBkYXRlcyB0aGUgTWVkaWEgb2JqZWN0J3MgcG9zaXRpb24gcGFyYW1ldGVyLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IHJlY29yZGluZ1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxyXG4gIGdldEN1cnJlbnRQb3NpdGlvbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBkdXJhdGlvbiBvZiBhbiBhdWRpbyBmaWxlIGluIHNlY29uZHMuIElmIHRoZSBkdXJhdGlvbiBpcyB1bmtub3duLCBpdCByZXR1cm5zIGEgdmFsdWUgb2YgLTEuXHJcbiAgICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgZHVyYXRpb24gb2YgdGhlIGN1cnJlbnQgcmVjb3JkaW5nXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcclxuICBnZXREdXJhdGlvbigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIG9yIHJlc3VtZXMgcGxheWluZyBhbiBhdWRpbyBmaWxlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcGxheShpb3NPcHRpb25zPzogeyBudW1iZXJPZkxvb3BzPzogbnVtYmVyOyBwbGF5QXVkaW9XaGVuU2NyZWVuSXNMb2NrZWQ/OiBib29sZWFuIH0pOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhdXNlcyBwbGF5aW5nIGFuIGF1ZGlvIGZpbGUuXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcclxuICBwYXVzZSgpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbGVhc2VzIHRoZSB1bmRlcmx5aW5nIG9wZXJhdGluZyBzeXN0ZW0ncyBhdWRpbyByZXNvdXJjZXMuIFRoaXMgaXMgcGFydGljdWxhcmx5IGltcG9ydGFudCBmb3IgQW5kcm9pZCwgc2luY2UgdGhlcmUgYXJlIGEgZmluaXRlIGFtb3VudCBvZiBPcGVuQ29yZSBpbnN0YW5jZXMgZm9yIG1lZGlhIHBsYXliYWNrLiBBcHBsaWNhdGlvbnMgc2hvdWxkIGNhbGwgdGhlIHJlbGVhc2UgZnVuY3Rpb24gZm9yIGFueSBNZWRpYSByZXNvdXJjZSB0aGF0IGlzIG5vIGxvbmdlciBuZWVkZWQuXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcclxuICByZWxlYXNlKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgY3VycmVudCBwb3NpdGlvbiB3aXRoaW4gYW4gYXVkaW8gZmlsZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRzIFRoZSB0aW1lIHBvc2l0aW9uIHlvdSB3YW50IHRvIHNldCBmb3IgdGhlIGN1cnJlbnQgYXVkaW8gZmlsZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc2Vla1RvKG1pbGxpc2Vjb25kczogbnVtYmVyKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIHZvbHVtZSBmb3IgYW4gYXVkaW8gZmlsZS5cclxuICAgKiBAcGFyYW0gdm9sdW1lIHtudW1iZXJ9IFRoZSB2b2x1bWUgdG8gc2V0IGZvciBwbGF5YmFjay4gVGhlIHZhbHVlIG11c3QgYmUgd2l0aGluIHRoZSByYW5nZSBvZiAwLjAgdG8gMS4wLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc2V0Vm9sdW1lKHZvbHVtZTogbnVtYmVyKTogdm9pZCB7fVxyXG5cclxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNldFJhdGUoc3BlZWRSYXRlOiBudW1iZXIpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0cyByZWNvcmRpbmcgYW4gYXVkaW8gZmlsZS5cclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHN0YXJ0UmVjb3JkKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcHMgcmVjb3JkaW5nXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcclxuICBzdG9wUmVjb3JkKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogUGF1c2VzIHJlY29yZGluZ1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcGF1c2VSZWNvcmQoKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBSZXN1bWVzIHJlY29yZGluZ1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcmVzdW1lUmVjb3JkKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcHMgcGxheWluZyBhbiBhdWRpbyBmaWxlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc3RvcCgpOiB2b2lkIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE1lZGlhU3RhdHVzVXBkYXRlQ2FsbGJhY2sgPSAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZWRpYUVycm9yIHtcclxuICAvKipcclxuICAgKiBFcnJvciBtZXNzYWdlXHJcbiAgICovXHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBFcnJvciBjb2RlXHJcbiAgICovXHJcbiAgY29kZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNRURJQV9TVEFUVVMge1xyXG4gIE5PTkUgPSAwLFxyXG4gIFNUQVJUSU5HLFxyXG4gIFJVTk5JTkcsXHJcbiAgUEFVU0VELFxyXG4gIFNUT1BQRUQsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1FRElBX0VSUk9SIHtcclxuICBBQk9SVEVEID0gMSxcclxuICBORVRXT1JLLFxyXG4gIERFQ09ERSxcclxuICBTVVBQT1JURUQsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE1lZGlhRXJyb3JDYWxsYmFjayA9IChlcnJvcjogTWVkaWFFcnJvcikgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBNZWRpYVxyXG4gKiBAcHJlbWllciBtZWRpYVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gcHJvdmlkZXMgdGhlIGFiaWxpdHkgdG8gcmVjb3JkIGFuZCBwbGF5IGJhY2sgYXVkaW8gZmlsZXMgb24gYSBkZXZpY2UuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IE1lZGlhLCBNZWRpYU9iamVjdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbWVkaWEvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtZWRpYTogTWVkaWEpIHsgfVxyXG4gKlxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogLy8gQ3JlYXRlIGEgTWVkaWEgaW5zdGFuY2UuICBFeHBlY3RzIHBhdGggdG8gZmlsZSBvciB1cmwgYXMgYXJndW1lbnRcclxuICogLy8gV2UgY2FuIG9wdGlvbmFsbHkgcGFzcyBhIHNlY29uZCBhcmd1bWVudCB0byB0cmFjayB0aGUgc3RhdHVzIG9mIHRoZSBtZWRpYVxyXG4gKlxyXG4gKiBjb25zdCBmaWxlOiBNZWRpYU9iamVjdCA9IHRoaXMubWVkaWEuY3JlYXRlKCdmaWxlLm1wMycpO1xyXG4gKlxyXG4gKiAvLyB0byBsaXN0ZW4gdG8gcGx1Z2luIGV2ZW50czpcclxuICpcclxuICogZmlsZS5vblN0YXR1c1VwZGF0ZS5zdWJzY3JpYmUoc3RhdHVzID0+IGNvbnNvbGUubG9nKHN0YXR1cykpOyAvLyBmaXJlcyB3aGVuIGZpbGUgc3RhdHVzIGNoYW5nZXNcclxuICpcclxuICogZmlsZS5vblN1Y2Nlc3Muc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKCdBY3Rpb24gaXMgc3VjY2Vzc2Z1bCcpKTtcclxuICpcclxuICogZmlsZS5vbkVycm9yLnN1YnNjcmliZShlcnJvciA9PiBjb25zb2xlLmxvZygnRXJyb3IhJywgZXJyb3IpKTtcclxuICpcclxuICogLy8gcGxheSB0aGUgZmlsZVxyXG4gKiBmaWxlLnBsYXkoKTtcclxuICpcclxuICogLy8gcGF1c2UgdGhlIGZpbGVcclxuICogZmlsZS5wYXVzZSgpO1xyXG4gKlxyXG4gKiAvLyBnZXQgY3VycmVudCBwbGF5YmFjayBwb3NpdGlvblxyXG4gKiBmaWxlLmdldEN1cnJlbnRQb3NpdGlvbigpLnRoZW4oKHBvc2l0aW9uKSA9PiB7XHJcbiAqICAgY29uc29sZS5sb2cocG9zaXRpb24pO1xyXG4gKiB9KTtcclxuICpcclxuICogLy8gZ2V0IGZpbGUgZHVyYXRpb25cclxuICogbGV0IGR1cmF0aW9uID0gZmlsZS5nZXREdXJhdGlvbigpO1xyXG4gKiBjb25zb2xlLmxvZyhkdXJhdGlvbik7XHJcbiAqXHJcbiAqIC8vIHNraXAgdG8gMTAgc2Vjb25kcyAoZXhwZWN0cyBpbnQgdmFsdWUgaW4gbXMpXHJcbiAqIGZpbGUuc2Vla1RvKDEwMDAwKTtcclxuICpcclxuICogLy8gc3RvcCBwbGF5aW5nIHRoZSBmaWxlXHJcbiAqIGZpbGUuc3RvcCgpO1xyXG4gKlxyXG4gKiAvLyByZWxlYXNlIHRoZSBuYXRpdmUgYXVkaW8gcmVzb3VyY2VcclxuICogLy8gUGxhdGZvcm0gUXVpcmtzOlxyXG4gKiAvLyBpT1Mgc2ltcGx5IGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBhbmQgdGhlIG9sZCBvbmUgd2lsbCBiZSBvdmVyd3JpdHRlblxyXG4gKiAvLyBBbmRyb2lkIHlvdSBtdXN0IGNhbGwgcmVsZWFzZSgpIHRvIGRlc3Ryb3kgaW5zdGFuY2VzIG9mIG1lZGlhIHdoZW4geW91IGFyZSBkb25lXHJcbiAqIGZpbGUucmVsZWFzZSgpO1xyXG4gKlxyXG4gKlxyXG4gKlxyXG4gKiAvLyBSZWNvcmRpbmcgdG8gYSBmaWxlXHJcbiAqIGNvbnN0IGZpbGU6IE1lZGlhT2JqZWN0ID0gdGhpcy5tZWRpYS5jcmVhdGUoJ3BhdGgvdG8vZmlsZS5tcDMnKTtcclxuICpcclxuICogZmlsZS5zdGFydFJlY29yZCgpO1xyXG4gKlxyXG4gKiBmaWxlLnN0b3BSZWNvcmQoKTtcclxuICpcclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqIFNvbWUgaGludHMgaWYgeW91IGFyZSB1c2luZyBpT1MgYW5kIHJlY29yZGluZyBkb2Vzbid0IHdvcms6XHJcbiAqIDEuKSBUcnkgdG8gdXNlIGEgYWJzb2x1dGUgZmlsZSBwYXRoIGJ1dCByZW1vdmUgYmVnaW5uaW5nIFwiZmlsZTovL1wiLlxyXG4gKiBUaGVuIGl0IGxvb2tzIGxpa2U6IGAvdmFyL21vYmlsZS9Db250YWluZXJzL0RhdGEvQXBwbGljYXRpb24vQUY0MzhCOEItNzcyNC00RkJCLThFNjktMDgzNDYzMjI0RkM0L3RtcC9teV9maWxlLm00YWBcclxuICogRXhhbXBsZTogYHRoaXMubWVkaWEuY3JlYXRlKHRoaXMuZmlsZS50ZW1wRGlyZWN0b3J5LnJlcGxhY2UoL15maWxlOlxcL1xcLy8sICcnKSArICdteV9maWxlLm00YScpYFxyXG4gKiAyLikgSWYgdGhhdCdzIG5vdCB3b3JraW5nLCB0b28sIGNyZWF0ZSB0aGUgZmlsZSBiZWZvcmUgdXNpbmcuXHJcbiAqIEV4YW1wbGU6XHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgTWVkaWEsIE1lZGlhT2JqZWN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9tZWRpYS9uZ3gnO1xyXG4gKiBpbXBvcnQgeyBGaWxlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlL25neCc7XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lZGlhOiBNZWRpYSwgcHJpdmF0ZSBmaWxlOiBGaWxlKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuZmlsZS5jcmVhdGVGaWxlKHRoaXMuZmlsZS50ZW1wRGlyZWN0b3J5LCAnbXlfZmlsZS5tNGEnLCB0cnVlKS50aGVuKCgpID0+IHtcclxuICogICBsZXQgZmlsZSA9IHRoaXMubWVkaWEuY3JlYXRlKHRoaXMuZmlsZS50ZW1wRGlyZWN0b3J5LnJlcGxhY2UoL15maWxlOlxcL1xcLy8sICcnKSArICdteV9maWxlLm00YScpO1xyXG4gKiAgIGZpbGUuc3RhcnRSZWNvcmQoKTtcclxuICogICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBmaWxlLnN0b3BSZWNvcmQoKSwgMTAwMDApO1xyXG4gKiB9KTtcclxuICogYGBgXHJcbiAqXHJcbiAqIFlvdSBjYW4gZmluZCB0aGUgcmVhc29ucyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1uYXRpdmUvaXNzdWVzLzE0NTIjaXNzdWVjb21tZW50LTI5OTYwNTkwNlxyXG4gKiBAY2xhc3Nlc1xyXG4gKiBNZWRpYU9iamVjdFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBNZWRpYUVycm9yXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnTWVkaWEnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLW1lZGlhJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1tZWRpYScsXHJcbiAgcGx1Z2luUmVmOiAnTWVkaWEnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWVkaWEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLy8gQ29uc3RhbnRzXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIE1FRElBX05PTkUgPSAwO1xyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBNRURJQV9TVEFSVElORyA9IDE7XHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIE1FRElBX1JVTk5JTkcgPSAyO1xyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBNRURJQV9QQVVTRUQgPSAzO1xyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBNRURJQV9TVE9QUEVEID0gNDtcclxuXHJcbiAgLy8gZXJyb3IgY29kZXNcclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgTUVESUFfRVJSX0FCT1JURUQgPSAxO1xyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBNRURJQV9FUlJfTkVUV09SSyA9IDI7XHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIE1FRElBX0VSUl9ERUNPREUgPSAzO1xyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBNRURJQV9FUlJfTk9ORV9TVVBQT1JURUQgPSA0O1xyXG5cclxuICAvKipcclxuICAgKiBPcGVuIGEgbWVkaWEgZmlsZVxyXG4gICAqIEBwYXJhbSBzcmMge3N0cmluZ30gQSBVUkkgY29udGFpbmluZyB0aGUgYXVkaW8gY29udGVudC5cclxuICAgKiBAcmV0dXJuIHtNZWRpYU9iamVjdH1cclxuICAgKi9cclxuICBjcmVhdGUoc3JjOiBzdHJpbmcpOiBNZWRpYU9iamVjdCB7XHJcbiAgICBsZXQgaW5zdGFuY2U6IGFueTtcclxuXHJcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoTWVkaWEuZ2V0UGx1Z2luUmVmKCksIG51bGwsIE1lZGlhLmdldFBsdWdpbk5hbWUoKSkgPT09IHRydWUpIHtcclxuICAgICAgLy8gQ3JlYXRlcyBhIG5ldyBtZWRpYSBvYmplY3RcclxuICAgICAgaW5zdGFuY2UgPSBuZXcgKE1lZGlhLmdldFBsdWdpbigpKShzcmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgTWVkaWFPYmplY3QoaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=