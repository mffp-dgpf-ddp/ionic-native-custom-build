import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AudioManagement = /** @class */ (function (_super) {
    __extends(AudioManagement, _super);
    function AudioManagement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioManagement.prototype.setAudioMode = function (mode) { return cordova(this, "setAudioMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagement.prototype.getAudioMode = function () { return cordova(this, "getAudioMode", {}, arguments); };
    AudioManagement.prototype.setVolume = function (type, volume) { return cordova(this, "setVolume", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    AudioManagement.prototype.getVolume = function (type) { return cordova(this, "getVolume", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagement.prototype.getMaxVolume = function (type) { return cordova(this, "getMaxVolume", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagement.pluginName = "AudioManagement";
    AudioManagement.plugin = "clovelced-plugin-audiomanagement";
    AudioManagement.pluginRef = "AudioManagement";
    AudioManagement.repo = "https://github.com/clovelCed/cordova-plugin-audiomanagement";
    AudioManagement.platforms = ["Android"];
    AudioManagement = __decorate([
        Injectable()
    ], AudioManagement);
    return AudioManagement;
}(IonicNativePlugin));
export { AudioManagement };
(function (AudioManagement) {
    var AudioMode;
    (function (AudioMode) {
        AudioMode[AudioMode["SILENT"] = 0] = "SILENT";
        AudioMode[AudioMode["VIBRATE"] = 1] = "VIBRATE";
        AudioMode[AudioMode["NORMAL"] = 2] = "NORMAL";
    })(AudioMode = AudioManagement.AudioMode || (AudioManagement.AudioMode = {}));
    var VolumeType;
    (function (VolumeType) {
        VolumeType[VolumeType["RING"] = 0] = "RING";
        VolumeType[VolumeType["MUSIC"] = 1] = "MUSIC";
        VolumeType[VolumeType["NOTIFICATION"] = 2] = "NOTIFICATION";
        VolumeType[VolumeType["SYSTEM"] = 3] = "SYSTEM";
    })(VolumeType = AudioManagement.VolumeType || (AudioManagement.VolumeType = {}));
})(AudioManagement || (AudioManagement = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2F1ZGlvLW1hbmFnZW1lbnQvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBaURuQyxtQ0FBaUI7Ozs7SUFXcEQsc0NBQVksYUFBQyxJQUErQjtJQVc1QyxzQ0FBWTtJQWVaLG1DQUFTLGFBQUMsSUFBZ0MsRUFBRSxNQUFjO0lBZTFELG1DQUFTLGFBQUMsSUFBZ0M7SUFlMUMsc0NBQVksYUFBQyxJQUFnQzs7Ozs7O0lBbkVsQyxlQUFlO1FBRDNCLFVBQVUsRUFBRTtPQUNBLGVBQWU7MEJBbEQ1QjtFQWtEcUMsaUJBQWlCO1NBQXpDLGVBQWU7QUF3RTVCLFdBQWlCLGVBQWU7SUFDOUIsSUFBWSxTQUlYO0lBSkQsV0FBWSxTQUFTO1FBQ25CLDZDQUFVLENBQUE7UUFDViwrQ0FBTyxDQUFBO1FBQ1AsNkNBQU0sQ0FBQTtJQUNSLENBQUMsRUFKVyxTQUFTLEdBQVQseUJBQVMsS0FBVCx5QkFBUyxRQUlwQjtJQUVELElBQVksVUFLWDtJQUxELFdBQVksVUFBVTtRQUNwQiwyQ0FBUSxDQUFBO1FBQ1IsNkNBQUssQ0FBQTtRQUNMLDJEQUFZLENBQUE7UUFDWiwrQ0FBTSxDQUFBO0lBQ1IsQ0FBQyxFQUxXLFVBQVUsR0FBViwwQkFBVSxLQUFWLDBCQUFVLFFBS3JCO0FBTUgsQ0FBQyxFQWxCZ0IsZUFBZSxLQUFmLGVBQWUsUUFrQi9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBBdWRpbyBNYW5hZ2VtZW50XHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIENvcmRvdmEgcGx1Z2luIHRvIG1hbmFnZSB2b2x1bWUgb2YgYXVkaW8gc3RyZWFtcyBmb3I6IHJpbmcsIG11c2ljLCBub3RpZmljYXRpb24gYW5kIHN5c3RlbS4gUG9zc2libGVcclxuICogcmluZ2VyIHZhbHVlcyBmb3IgdGhvc2Ugc3RyZWFtcyBhcmU6IHNpbGVudCwgdmlicmF0ZSBhbmQgbm9ybWFsLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBBdWRpb01hbmFnZW1lbnQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2F1ZGlvLW1hbmFnZW1lbnQvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHVibGljIGF1ZGlvbWFuOiBBdWRpb01hbmFnZW1lbnQpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogc2V0QXVkaW9Nb2RlKCkge1xyXG4gKiAgdGhpcy5hdWRpb21hbi5zZXRBdWRpb01vZGUoQXVkaW9NYW5hZ2VtZW50LkF1ZGlvTW9kZS5OT1JNQUwpXHJcbiAqICAgIC50aGVuKCgpID0+IHtcclxuICogICAgIGNvbnNvbGUubG9nKCdEZXZpY2UgYXVkaW8gbW9kZSBpcyBub3cgTk9STUFMJyk7XHJcbiAqICAgIH0pXHJcbiAqICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAqICAgICAgY29uc29sZS5sb2cocmVhc29uKTtcclxuICogICAgfSk7XHJcbiAqIH1cclxuICpcclxuICogZ2V0QXVkaW9Nb2RlKCkge1xyXG4gKiAgdGhpcy5hdWRpb21hbi5nZXRBdWRpb01vZGUoKVxyXG4gKiAgICAudGhlbigodmFsdWU6IEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGVSZXR1cm4pID0+IHtcclxuICogICAgIGNvbnNvbGUubG9nKCdEZXZpY2UgYXVkaW8gbW9kZSBpcyAnICsgdmFsdWUubGFiZWwgKyAnICgnICsgdmFsdWUuYXVkaW9Nb2RlICsgJyknKTtcclxuICogICAgfSlcclxuICogICAgLmNhdGNoKChyZWFzb24pID0+IHtcclxuICogICAgICBjb25zb2xlLmxvZyhyZWFzb24pO1xyXG4gKiAgICB9KTtcclxuICogfVxyXG4gKlxyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogQXVkaW9Nb2RlUmV0dXJuXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQXVkaW9NYW5hZ2VtZW50JyxcclxuICBwbHVnaW46ICdjbG92ZWxjZWQtcGx1Z2luLWF1ZGlvbWFuYWdlbWVudCcsXHJcbiAgcGx1Z2luUmVmOiAnQXVkaW9NYW5hZ2VtZW50JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Nsb3ZlbENlZC9jb3Jkb3ZhLXBsdWdpbi1hdWRpb21hbmFnZW1lbnQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1ZGlvTWFuYWdlbWVudCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBgQXVkaW9NYW5hZ2VtZW50LkF1ZGlvTW9kZWAgZm9yIHRoZSBkZXZpY2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0F1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGV9IG1vZGUgdGhlIGRldmljZSBjYW4gYmUgc2V0IHRvOiBTaWxlbnQsIE5vcm1hbCwgVmlicmF0ZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN1Y2Nlc3NJbmRleDogMSxcclxuICAgIGVycm9ySW5kZXg6IDIsXHJcbiAgfSlcclxuICBzZXRBdWRpb01vZGUobW9kZTogQXVkaW9NYW5hZ2VtZW50LkF1ZGlvTW9kZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgY3VycmVudCBgQXVkaW9NYW5hZ2VtZW50LkF1ZGlvTW9kZWAgb2YgdGhlIGRldmljZS4gVGhlbmFibGUgcmV0dXJucyBhbiBvYmplY3Qgd2l0aFxyXG4gICAqIGBsYWJlbGAgYW5kIGBhdWRpb01vZGVgIHZhbHVlcy5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGVSZXR1cm4+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRBdWRpb01vZGUoKTogUHJvbWlzZTxBdWRpb01hbmFnZW1lbnQuQXVkaW9Nb2RlUmV0dXJuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBzcGVjaWZpZWQgYEF1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlYCBmb3IgdGhlIGRldmljZSB3aXRoIHRoZSB2YWx1ZSBmcm9tIGB2b2x1bWVgLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZX0gdHlwZSB0aGUgYEF1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlYCB0byBzZXRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdm9sdW1lIHRoZSB2b2x1bWUgdmFsdWVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDIsXHJcbiAgICBlcnJvckluZGV4OiAzLFxyXG4gIH0pXHJcbiAgc2V0Vm9sdW1lKHR5cGU6IEF1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlLCB2b2x1bWU6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgc3BlY2lmaWVkIGBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZWAncyBgdm9sdW1lYC4gVGhlbmFibGUgcmV0dXJucyBhbiBvYmplY3Qgd2l0aFxyXG4gICAqIGEgbnVtZXJpYyBwcm9wZXJ0eSBmb3Igdm9sdW1lLCBgdm9sdW1lYC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGV9IHR5cGUgdGhlIGBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZWAgdG8gZ2V0XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8e3ZvbHVtZTogbnVtYmVyfT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAxLFxyXG4gICAgZXJyb3JJbmRleDogMixcclxuICB9KVxyXG4gIGdldFZvbHVtZSh0eXBlOiBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZSk6IFByb21pc2U8eyB2b2x1bWU6IG51bWJlciB9PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBzcGVjaWZpZWQgYEF1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlYCdzIG1heGltdW0gYHZvbHVtZWAuIFRoZW5hYmxlIHJldHVybnMgYW5cclxuICAgKiBvYmplY3Qgd2l0aCBhIG51bWVyaWMgcHJvcGVydHksIGBtYXhWb2x1bWVgLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZX0gdHlwZSB0aGUgYEF1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlYCB0byBnZXRcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7bWF4Vm9sdW1lOiBudW1iZXJ9Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDEsXHJcbiAgICBlcnJvckluZGV4OiAyLFxyXG4gIH0pXHJcbiAgZ2V0TWF4Vm9sdW1lKHR5cGU6IEF1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlKTogUHJvbWlzZTx7IG1heFZvbHVtZTogbnVtYmVyIH0+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgQXVkaW9NYW5hZ2VtZW50IHtcclxuICBleHBvcnQgZW51bSBBdWRpb01vZGUge1xyXG4gICAgU0lMRU5UID0gMCxcclxuICAgIFZJQlJBVEUsXHJcbiAgICBOT1JNQUwsXHJcbiAgfVxyXG5cclxuICBleHBvcnQgZW51bSBWb2x1bWVUeXBlIHtcclxuICAgIFJJTkcgPSAwLFxyXG4gICAgTVVTSUMsXHJcbiAgICBOT1RJRklDQVRJT04sXHJcbiAgICBTWVNURU0sXHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIEF1ZGlvTW9kZVJldHVybiB7XHJcbiAgICBhdWRpb01vZGU6IEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGU7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gIH1cclxufVxyXG4iXX0=