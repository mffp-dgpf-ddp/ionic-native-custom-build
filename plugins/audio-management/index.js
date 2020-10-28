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
var AudioManagementOriginal = /** @class */ (function (_super) {
    __extends(AudioManagementOriginal, _super);
    function AudioManagementOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioManagementOriginal.prototype.setAudioMode = function (mode) { return cordova(this, "setAudioMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagementOriginal.prototype.getAudioMode = function () { return cordova(this, "getAudioMode", {}, arguments); };
    AudioManagementOriginal.prototype.setVolume = function (type, volume) { return cordova(this, "setVolume", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    AudioManagementOriginal.prototype.getVolume = function (type) { return cordova(this, "getVolume", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagementOriginal.prototype.getMaxVolume = function (type) { return cordova(this, "getMaxVolume", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagementOriginal.pluginName = "AudioManagement";
    AudioManagementOriginal.plugin = "clovelced-plugin-audiomanagement";
    AudioManagementOriginal.pluginRef = "AudioManagement";
    AudioManagementOriginal.repo = "https://github.com/clovelCed/cordova-plugin-audiomanagement";
    AudioManagementOriginal.platforms = ["Android"];
    return AudioManagementOriginal;
}(IonicNativePlugin));
var AudioManagement = new AudioManagementOriginal();
export { AudioManagement };
(function (AudioManagement) {
    var AudioMode;
    (function (AudioMode) {
        AudioMode[AudioMode["SILENT"] = 0] = "SILENT";
        AudioMode[AudioMode["VIBRATE"] = 1] = "VIBRATE";
        AudioMode[AudioMode["NORMAL"] = 2] = "NORMAL";
    })(AudioMode = AudioManagementOriginal.AudioMode || (AudioManagementOriginal.AudioMode = {}));
    var VolumeType;
    (function (VolumeType) {
        VolumeType[VolumeType["RING"] = 0] = "RING";
        VolumeType[VolumeType["MUSIC"] = 1] = "MUSIC";
        VolumeType[VolumeType["NOTIFICATION"] = 2] = "NOTIFICATION";
        VolumeType[VolumeType["SYSTEM"] = 3] = "SYSTEM";
    })(VolumeType = AudioManagementOriginal.VolumeType || (AudioManagementOriginal.VolumeType = {}));
})(AudioManagementOriginal || (AudioManagementOriginal = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2F1ZGlvLW1hbmFnZW1lbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBaURuQyxtQ0FBaUI7Ozs7SUFXcEQsc0NBQVksYUFBQyxJQUErQjtJQVc1QyxzQ0FBWTtJQWVaLG1DQUFTLGFBQUMsSUFBZ0MsRUFBRSxNQUFjO0lBZTFELG1DQUFTLGFBQUMsSUFBZ0M7SUFlMUMsc0NBQVksYUFBQyxJQUFnQzs7Ozs7OzBCQXJIL0M7RUFrRHFDLGlCQUFpQjtTQUF6QyxlQUFlO0FBd0U1QixXQUFpQixlQUFlO0lBQzlCLElBQVksU0FJWDtJQUpELFdBQVksU0FBUztRQUNuQiw2Q0FBVSxDQUFBO1FBQ1YsK0NBQU8sQ0FBQTtRQUNQLDZDQUFNLENBQUE7SUFDUixDQUFDLEVBSlcsU0FBUyxHQUFULHlCQUFTLEtBQVQseUJBQVMsUUFJcEI7SUFFRCxJQUFZLFVBS1g7SUFMRCxXQUFZLFVBQVU7UUFDcEIsMkNBQVEsQ0FBQTtRQUNSLDZDQUFLLENBQUE7UUFDTCwyREFBWSxDQUFBO1FBQ1osK0NBQU0sQ0FBQTtJQUNSLENBQUMsRUFMVyxVQUFVLEdBQVYsMEJBQVUsS0FBViwwQkFBVSxRQUtyQjtBQU1ILENBQUMsRUFsQmdCLGVBQWUsS0FBZixlQUFlLFFBa0IvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgQXVkaW8gTWFuYWdlbWVudFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBDb3Jkb3ZhIHBsdWdpbiB0byBtYW5hZ2Ugdm9sdW1lIG9mIGF1ZGlvIHN0cmVhbXMgZm9yOiByaW5nLCBtdXNpYywgbm90aWZpY2F0aW9uIGFuZCBzeXN0ZW0uIFBvc3NpYmxlXHJcbiAqIHJpbmdlciB2YWx1ZXMgZm9yIHRob3NlIHN0cmVhbXMgYXJlOiBzaWxlbnQsIHZpYnJhdGUgYW5kIG5vcm1hbC5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQXVkaW9NYW5hZ2VtZW50IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hdWRpby1tYW5hZ2VtZW50L25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHB1YmxpYyBhdWRpb21hbjogQXVkaW9NYW5hZ2VtZW50KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHNldEF1ZGlvTW9kZSgpIHtcclxuICogIHRoaXMuYXVkaW9tYW4uc2V0QXVkaW9Nb2RlKEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGUuTk9STUFMKVxyXG4gKiAgICAudGhlbigoKSA9PiB7XHJcbiAqICAgICBjb25zb2xlLmxvZygnRGV2aWNlIGF1ZGlvIG1vZGUgaXMgbm93IE5PUk1BTCcpO1xyXG4gKiAgICB9KVxyXG4gKiAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gKiAgICAgIGNvbnNvbGUubG9nKHJlYXNvbik7XHJcbiAqICAgIH0pO1xyXG4gKiB9XHJcbiAqXHJcbiAqIGdldEF1ZGlvTW9kZSgpIHtcclxuICogIHRoaXMuYXVkaW9tYW4uZ2V0QXVkaW9Nb2RlKClcclxuICogICAgLnRoZW4oKHZhbHVlOiBBdWRpb01hbmFnZW1lbnQuQXVkaW9Nb2RlUmV0dXJuKSA9PiB7XHJcbiAqICAgICBjb25zb2xlLmxvZygnRGV2aWNlIGF1ZGlvIG1vZGUgaXMgJyArIHZhbHVlLmxhYmVsICsgJyAoJyArIHZhbHVlLmF1ZGlvTW9kZSArICcpJyk7XHJcbiAqICAgIH0pXHJcbiAqICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAqICAgICAgY29uc29sZS5sb2cocmVhc29uKTtcclxuICogICAgfSk7XHJcbiAqIH1cclxuICpcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIEF1ZGlvTW9kZVJldHVyblxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0F1ZGlvTWFuYWdlbWVudCcsXHJcbiAgcGx1Z2luOiAnY2xvdmVsY2VkLXBsdWdpbi1hdWRpb21hbmFnZW1lbnQnLFxyXG4gIHBsdWdpblJlZjogJ0F1ZGlvTWFuYWdlbWVudCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jbG92ZWxDZWQvY29yZG92YS1wbHVnaW4tYXVkaW9tYW5hZ2VtZW50JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdWRpb01hbmFnZW1lbnQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgYEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGVgIGZvciB0aGUgZGV2aWNlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtBdWRpb01hbmFnZW1lbnQuQXVkaW9Nb2RlfSBtb2RlIHRoZSBkZXZpY2UgY2FuIGJlIHNldCB0bzogU2lsZW50LCBOb3JtYWwsIFZpYnJhdGVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDEsXHJcbiAgICBlcnJvckluZGV4OiAyLFxyXG4gIH0pXHJcbiAgc2V0QXVkaW9Nb2RlKG1vZGU6IEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgYEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGVgIG9mIHRoZSBkZXZpY2UuIFRoZW5hYmxlIHJldHVybnMgYW4gb2JqZWN0IHdpdGhcclxuICAgKiBgbGFiZWxgIGFuZCBgYXVkaW9Nb2RlYCB2YWx1ZXMuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBdWRpb01hbmFnZW1lbnQuQXVkaW9Nb2RlUmV0dXJuPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0QXVkaW9Nb2RlKCk6IFByb21pc2U8QXVkaW9NYW5hZ2VtZW50LkF1ZGlvTW9kZVJldHVybj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgc3BlY2lmaWVkIGBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZWAgZm9yIHRoZSBkZXZpY2Ugd2l0aCB0aGUgdmFsdWUgZnJvbSBgdm9sdW1lYC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGV9IHR5cGUgdGhlIGBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZWAgdG8gc2V0XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZSB0aGUgdm9sdW1lIHZhbHVlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAyLFxyXG4gICAgZXJyb3JJbmRleDogMyxcclxuICB9KVxyXG4gIHNldFZvbHVtZSh0eXBlOiBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZSwgdm9sdW1lOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIHNwZWNpZmllZCBgQXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGVgJ3MgYHZvbHVtZWAuIFRoZW5hYmxlIHJldHVybnMgYW4gb2JqZWN0IHdpdGhcclxuICAgKiBhIG51bWVyaWMgcHJvcGVydHkgZm9yIHZvbHVtZSwgYHZvbHVtZWAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0F1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlfSB0eXBlIHRoZSBgQXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGVgIHRvIGdldFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHt2b2x1bWU6IG51bWJlcn0+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN1Y2Nlc3NJbmRleDogMSxcclxuICAgIGVycm9ySW5kZXg6IDIsXHJcbiAgfSlcclxuICBnZXRWb2x1bWUodHlwZTogQXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGUpOiBQcm9taXNlPHsgdm9sdW1lOiBudW1iZXIgfT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgc3BlY2lmaWVkIGBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZWAncyBtYXhpbXVtIGB2b2x1bWVgLiBUaGVuYWJsZSByZXR1cm5zIGFuXHJcbiAgICogb2JqZWN0IHdpdGggYSBudW1lcmljIHByb3BlcnR5LCBgbWF4Vm9sdW1lYC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGV9IHR5cGUgdGhlIGBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZWAgdG8gZ2V0XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8e21heFZvbHVtZTogbnVtYmVyfT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAxLFxyXG4gICAgZXJyb3JJbmRleDogMixcclxuICB9KVxyXG4gIGdldE1heFZvbHVtZSh0eXBlOiBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZSk6IFByb21pc2U8eyBtYXhWb2x1bWU6IG51bWJlciB9PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEF1ZGlvTWFuYWdlbWVudCB7XHJcbiAgZXhwb3J0IGVudW0gQXVkaW9Nb2RlIHtcclxuICAgIFNJTEVOVCA9IDAsXHJcbiAgICBWSUJSQVRFLFxyXG4gICAgTk9STUFMLFxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGVudW0gVm9sdW1lVHlwZSB7XHJcbiAgICBSSU5HID0gMCxcclxuICAgIE1VU0lDLFxyXG4gICAgTk9USUZJQ0FUSU9OLFxyXG4gICAgU1lTVEVNLFxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBBdWRpb01vZGVSZXR1cm4ge1xyXG4gICAgYXVkaW9Nb2RlOiBBdWRpb01hbmFnZW1lbnQuQXVkaW9Nb2RlO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICB9XHJcbn1cclxuIl19