import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import { Observable } from 'rxjs';
var MediaCapture = /** @class */ (function (_super) {
    __extends(MediaCapture, _super);
    function MediaCapture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaCapture.prototype.captureAudio = function (options) { return cordova(this, "captureAudio", { "callbackOrder": "reverse" }, arguments); };
    MediaCapture.prototype.captureImage = function (options) { return cordova(this, "captureImage", { "callbackOrder": "reverse" }, arguments); };
    MediaCapture.prototype.captureVideo = function (options) { return cordova(this, "captureVideo", { "callbackOrder": "reverse" }, arguments); };
    MediaCapture.prototype.onPendingCaptureResult = function () { return cordova(this, "onPendingCaptureResult", { "eventObservable": true, "event": "pendingcaptureresult" }, arguments); };
    MediaCapture.prototype.onPendingCaptureError = function () { return cordova(this, "onPendingCaptureError", { "eventObservable": true, "event": "pendingcaptureerror" }, arguments); };
    Object.defineProperty(MediaCapture.prototype, "supportedImageModes", {
        get: function () { return cordovaPropertyGet(this, "supportedImageModes"); },
        set: function (value) { cordovaPropertySet(this, "supportedImageModes", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaCapture.prototype, "supportedAudioModes", {
        get: function () { return cordovaPropertyGet(this, "supportedAudioModes"); },
        set: function (value) { cordovaPropertySet(this, "supportedAudioModes", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaCapture.prototype, "supportedVideoModes", {
        get: function () { return cordovaPropertyGet(this, "supportedVideoModes"); },
        set: function (value) { cordovaPropertySet(this, "supportedVideoModes", value); },
        enumerable: true,
        configurable: true
    });
    MediaCapture.pluginName = "MediaCapture";
    MediaCapture.plugin = "cordova-plugin-media-capture";
    MediaCapture.pluginRef = "navigator.device.capture";
    MediaCapture.repo = "https://github.com/apache/cordova-plugin-media-capture";
    MediaCapture.platforms = ["Android", "Browser", "iOS", "Windows"];
    MediaCapture = __decorate([
        Injectable()
    ], MediaCapture);
    return MediaCapture;
}(IonicNativePlugin));
export { MediaCapture };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhLWNhcHR1cmUvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sc0VBQXVELE1BQU0sb0JBQW9CLENBQUM7QUFDekYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUEySkEsZ0NBQWlCOzs7O0lBOEJqRCxtQ0FBWSxhQUFDLE9BQTZCO0lBWTFDLG1DQUFZLGFBQUMsT0FBNkI7SUFZMUMsbUNBQVksYUFBQyxPQUE2QjtJQVkxQyw2Q0FBc0I7SUFZdEIsNENBQXFCOzBCQXhFckIsNkNBQW1COzs7Ozs7MEJBT25CLDZDQUFtQjs7Ozs7OzBCQU9uQiw2Q0FBbUI7Ozs7Ozs7Ozs7O0lBcEJSLFlBQVk7UUFEeEIsVUFBVSxFQUFFO09BQ0EsWUFBWTt1QkE3SnpCO0VBNkprQyxpQkFBaUI7U0FBdEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBuYXZpZ2F0b3I6IGFueTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFGaWxlIHtcclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZmlsZSwgd2l0aG91dCBwYXRoIGluZm9ybWF0aW9uLlxyXG4gICAqL1xyXG4gIG5hbWU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBUaGUgZnVsbCBwYXRoIG9mIHRoZSBmaWxlLCBpbmNsdWRpbmcgdGhlIG5hbWUuXHJcbiAgICovXHJcbiAgZnVsbFBhdGg6IHN0cmluZztcclxuICAvKipcclxuICAgKiBUaGUgZmlsZSdzIG1pbWUgdHlwZVxyXG4gICAqL1xyXG4gIHR5cGU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgYW5kIHRpbWUgd2hlbiB0aGUgZmlsZSB3YXMgbGFzdCBtb2RpZmllZC5cclxuICAgKi9cclxuICBsYXN0TW9kaWZpZWREYXRlOiBEYXRlO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgZmlsZSwgaW4gYnl0ZXMuXHJcbiAgICovXHJcbiAgc2l6ZTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBSZXRyaWV2ZXMgdGhlIGZvcm1hdCBpbmZvcm1hdGlvbiBvZiB0aGUgbWVkaWEgZmlsZS5cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWNjZXNzQ2FsbGJhY2tcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcnJvckNhbGxiYWNrXHJcbiAgICovXHJcbiAgZ2V0Rm9ybWF0RGF0YShzdWNjZXNzQ2FsbGJhY2s6IChkYXRhOiBNZWRpYUZpbGVEYXRhKSA9PiBhbnksIGVycm9yQ2FsbGJhY2s/OiAoZXJyOiBhbnkpID0+IGFueSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFGaWxlRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFjdHVhbCBmb3JtYXQgb2YgdGhlIGF1ZGlvIGFuZCB2aWRlbyBjb250ZW50LlxyXG4gICAqL1xyXG4gIGNvZGVjczogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhdmVyYWdlIGJpdHJhdGUgb2YgdGhlIGNvbnRlbnQuIFRoZSB2YWx1ZSBpcyB6ZXJvIGZvciBpbWFnZXMuXHJcbiAgICovXHJcbiAgYml0cmF0ZTogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIGltYWdlIG9yIHZpZGVvIGluIHBpeGVscy4gVGhlIHZhbHVlIGlzIHplcm8gZm9yIGF1ZGlvIGNsaXBzLlxyXG4gICAqL1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgaW1hZ2Ugb3IgdmlkZW8gaW4gcGl4ZWxzLiBUaGUgdmFsdWUgaXMgemVybyBmb3IgYXVkaW8gY2xpcHMuXHJcbiAgICovXHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBUaGUgbGVuZ3RoIG9mIHRoZSB2aWRlbyBvciBzb3VuZCBjbGlwIGluIHNlY29uZHMuIFRoZSB2YWx1ZSBpcyB6ZXJvIGZvciBpbWFnZXMuXHJcbiAgICovXHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXB0dXJlRXJyb3Ige1xyXG4gIGNvZGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXB0dXJlQXVkaW9PcHRpb25zIHtcclxuICAvKipcclxuICAgKiBNYXhpbXVtIG51bWJlciBvZiBhdWRpbyBjbGlwcy4gRGVmYXVsdHMgdG8gMS5cclxuICAgKiBPbiBpT1MgeW91IGNhbiBvbmx5IHJlY29yZCBvbmUgZmlsZS5cclxuICAgKi9cclxuICBsaW1pdD86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBNYXhpbXVtIGR1cmF0aW9uIG9mIGFuIGF1ZGlvIHNvdW5kIGNsaXAsIGluIHNlY29uZHMuIFRoaXMgZG9lcyBub3Qgd29yayBvbiBBbmRyb2lkIGRldmljZXMuXHJcbiAgICovXHJcbiAgZHVyYXRpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdHVyZUltYWdlT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogTWF4aW11bSBudW1iZXIgb2YgaW1hZ2VzIHRvIGNhcHR1cmUuIFRoaXMgbGltaXQgaXMgbm90IHN1cHBvcnRlZCBvbiBpT1MsIG9ubHkgb25lIGltYWdlIHdpbGwgYmUgdGFrZW4gcGVyIGludm9jYXRpb24uXHJcbiAgICovXHJcbiAgbGltaXQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdHVyZVZpZGVvT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogTWF4aW11bSBudW1iZXIgb2YgdmlkZW8gY2xpcHMgdG8gcmVjb3JkLiBUaGlzIHZhbHVlIGlzIGlnbm9yZWQgb24gaU9TLCBvbmx5IG9uZSB2aWRlbyBjbGlwIGNhbiBiZSB0YWtlbiBwZXIgaW52b2NhdGlvbi5cclxuICAgKi9cclxuICBsaW1pdD86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBNYXhpbXVtIGR1cmF0aW9uIHBlciB2aWRlbyBjbGlwLiBUaGlzIHdpbGwgYmUgaWdub3JlZCBvbiBCbGFja0JlcnJ5LlxyXG4gICAqL1xyXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFF1YWxpdHkgb2YgdGhlIHZpZGVvLiBUaGlzIHBhcmFtZXRlciBjYW4gb25seSBiZSB1c2VkIHdpdGggQW5kcm9pZC5cclxuICAgKi9cclxuICBxdWFsaXR5PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb25EYXRhIHtcclxuICAvKipcclxuICAgKiBUaGUgQVNDSUktZW5jb2RlZCBsb3dlcmNhc2Ugc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbWVkaWEgdHlwZS5cclxuICAgKi9cclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgaW1hZ2Ugb3IgdmlkZW8gaW4gcGl4ZWxzLiBUaGUgdmFsdWUgaXMgemVybyBmb3Igc291bmQgY2xpcHMuXHJcbiAgICovXHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBpbWFnZSBvciB2aWRlbyBpbiBwaXhlbHMuIFRoZSB2YWx1ZSBpcyB6ZXJvIGZvciBzb3VuZCBjbGlwcy5cclxuICAgKi9cclxuICB3aWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgTWVkaWEgQ2FwdHVyZVxyXG4gKiBAcHJlbWllciBtZWRpYS1jYXB0dXJlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIGRldmljZSdzIGF1ZGlvLCBpbWFnZSwgYW5kIHZpZGVvIGNhcHR1cmUgY2FwYWJpbGl0aWVzLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLW1lZGlhLWNhcHR1cmVgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbTWVkaWEgQ2FwdHVyZSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1tZWRpYS1jYXB0dXJlKS5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgTWVkaWFDYXB0dXJlLCBNZWRpYUZpbGUsIENhcHR1cmVFcnJvciwgQ2FwdHVyZUltYWdlT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbWVkaWEtY2FwdHVyZS9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lZGlhQ2FwdHVyZTogTWVkaWFDYXB0dXJlKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIGxldCBvcHRpb25zOiBDYXB0dXJlSW1hZ2VPcHRpb25zID0geyBsaW1pdDogMyB9XHJcbiAqIHRoaXMubWVkaWFDYXB0dXJlLmNhcHR1cmVJbWFnZShvcHRpb25zKVxyXG4gKiAgIC50aGVuKFxyXG4gKiAgICAgKGRhdGE6IE1lZGlhRmlsZVtdKSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcclxuICogICAgIChlcnI6IENhcHR1cmVFcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnIpXHJcbiAqICAgKTtcclxuICpcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIE1lZGlhRmlsZVxyXG4gKiBNZWRpYUZpbGVEYXRhXHJcbiAqIENhcHR1cmVFcnJvclxyXG4gKiBDYXB0dXJlQXVkaW9PcHRpb25zXHJcbiAqIENhcHR1cmVJbWFnZU9wdGlvbnNcclxuICogQ2FwdHVyZVZpZGVvT3B0aW9uc1xyXG4gKiBDb25maWd1cmF0aW9uRGF0YVxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ01lZGlhQ2FwdHVyZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWVkaWEtY2FwdHVyZScsXHJcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmRldmljZS5jYXB0dXJlJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1tZWRpYS1jYXB0dXJlJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1lZGlhQ2FwdHVyZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUaGUgcmVjb3JkaW5nIGltYWdlIHNpemVzIGFuZCBmb3JtYXRzIHN1cHBvcnRlZCBieSB0aGUgZGV2aWNlLlxyXG4gICAqIEByZXR1cm5zIHtDb25maWd1cmF0aW9uRGF0YVtdfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIHN1cHBvcnRlZEltYWdlTW9kZXM6IENvbmZpZ3VyYXRpb25EYXRhW107XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBhdWRpbyByZWNvcmRpbmcgZm9ybWF0cyBzdXBwb3J0ZWQgYnkgdGhlIGRldmljZS5cclxuICAgKiBAcmV0dXJucyB7Q29uZmlndXJhdGlvbkRhdGFbXX1cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBzdXBwb3J0ZWRBdWRpb01vZGVzOiBDb25maWd1cmF0aW9uRGF0YVtdO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgcmVjb3JkaW5nIHZpZGVvIHJlc29sdXRpb25zIGFuZCBmb3JtYXRzIHN1cHBvcnRlZCBieSB0aGUgZGV2aWNlLlxyXG4gICAqIEByZXR1cm5zIHtDb25maWd1cmF0aW9uRGF0YVtdfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIHN1cHBvcnRlZFZpZGVvTW9kZXM6IENvbmZpZ3VyYXRpb25EYXRhW107XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0IHRoZSBhdWRpbyByZWNvcmRlciBhcHBsaWNhdGlvbiBhbmQgcmV0dXJuIGluZm9ybWF0aW9uIGFib3V0IGNhcHR1cmVkIGF1ZGlvIGNsaXAgZmlsZXMuXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxNZWRpYUZpbGVbXT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgY2FwdHVyZUF1ZGlvKG9wdGlvbnM/OiBDYXB0dXJlQXVkaW9PcHRpb25zKTogUHJvbWlzZTxNZWRpYUZpbGVbXSB8IENhcHR1cmVFcnJvcj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnQgdGhlIGNhbWVyYSBhcHBsaWNhdGlvbiBhbmQgcmV0dXJuIGluZm9ybWF0aW9uIGFib3V0IGNhcHR1cmVkIGltYWdlIGZpbGVzLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8TWVkaWFGaWxlW10+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcclxuICB9KVxyXG4gIGNhcHR1cmVJbWFnZShvcHRpb25zPzogQ2FwdHVyZUltYWdlT3B0aW9ucyk6IFByb21pc2U8TWVkaWFGaWxlW10gfCBDYXB0dXJlRXJyb3I+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0IHRoZSB2aWRlbyByZWNvcmRlciBhcHBsaWNhdGlvbiBhbmQgcmV0dXJuIGluZm9ybWF0aW9uIGFib3V0IGNhcHR1cmVkIHZpZGVvIGNsaXAgZmlsZXMuXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxNZWRpYUZpbGVbXT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgY2FwdHVyZVZpZGVvKG9wdGlvbnM/OiBDYXB0dXJlVmlkZW9PcHRpb25zKTogUHJvbWlzZTxNZWRpYUZpbGVbXSB8IENhcHR1cmVFcnJvcj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaXMgZmlyZWQgaWYgdGhlIGNhcHR1cmUgY2FsbCBpcyBzdWNjZXNzZnVsXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8TWVkaWFGaWxlW10+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGV2ZW50OiAncGVuZGluZ2NhcHR1cmVyZXN1bHQnLFxyXG4gIH0pXHJcbiAgb25QZW5kaW5nQ2FwdHVyZVJlc3VsdCgpOiBPYnNlcnZhYmxlPE1lZGlhRmlsZVtdPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBpcyBmaXJlZCBpZiB0aGUgY2FwdHVyZSBjYWxsIGlzIHVuc3VjY2Vzc2Z1bFxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPENhcHR1cmVFcnJvcj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgZXZlbnQ6ICdwZW5kaW5nY2FwdHVyZWVycm9yJyxcclxuICB9KVxyXG4gIG9uUGVuZGluZ0NhcHR1cmVFcnJvcigpOiBPYnNlcnZhYmxlPENhcHR1cmVFcnJvcj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=