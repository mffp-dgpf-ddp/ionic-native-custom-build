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
var DeviceFeedbackOriginal = /** @class */ (function (_super) {
    __extends(DeviceFeedbackOriginal, _super);
    function DeviceFeedbackOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceFeedbackOriginal.prototype.acoustic = function () { return cordova(this, "acoustic", { "sync": true }, arguments); };
    DeviceFeedbackOriginal.prototype.haptic = function (type) { return cordova(this, "haptic", { "sync": true }, arguments); };
    DeviceFeedbackOriginal.prototype.isFeedbackEnabled = function () { return cordova(this, "isFeedbackEnabled", {}, arguments); };
    DeviceFeedbackOriginal.pluginName = "DeviceFeedback";
    DeviceFeedbackOriginal.plugin = "cordova-plugin-velda-devicefeedback";
    DeviceFeedbackOriginal.pluginRef = "plugins.deviceFeedback";
    DeviceFeedbackOriginal.repo = "https://github.com/VVelda/device-feedback";
    DeviceFeedbackOriginal.platforms = ["Android"];
    return DeviceFeedbackOriginal;
}(IonicNativePlugin));
var DeviceFeedback = new DeviceFeedbackOriginal();
export { DeviceFeedback };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RldmljZS1mZWVkYmFjay9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFrRHBDLGtDQUFpQjs7OztJQUtuRCxpQ0FBUTtJQU9SLCtCQUFNLGFBQUMsSUFBWTtJQU9uQiwwQ0FBaUI7Ozs7Ozt5QkF0RW5CO0VBbURvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERldmljZUZlZWRiYWNrU3RhdHVzIHtcclxuICAvKiogSGFwdGljIEZlZWRiYWNrICovXHJcbiAgaGFwdGljOiBib29sZWFuO1xyXG5cclxuICAvKiogQWNvdXN0aWMgRmVlZGJhY2sgKi9cclxuICBhY291c3RpYzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIERldmljZSBGZWVkYmFja1xyXG4gKiBAcHJlbWllciB2aWJyYXRpb25cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFBsdWdpbiB0aGF0IGxldHMgeW91IHByb3ZpZGUgaGFwdGljIG9yIGFjb3VzdGljIGZlZWRiYWNrIG9uIEFuZHJvaWQgZGV2aWNlcy5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRGV2aWNlRmVlZGJhY2sgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RldmljZS1mZWVkYmFjay9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRldmljZUZlZWRiYWNrOiBEZXZpY2VGZWVkYmFjaykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmRldmljZUZlZWRiYWNrLmFjb3VzdGljKCk7XHJcbiAqXHJcbiAqIHRoaXMuZGV2aWNlRmVlZGJhY2suaGFwdGljKDApO1xyXG4gKlxyXG4gKiB0aGlzLmRldmljZUZlZWRiYWNrLmlzRmVlZGJhY2tFbmFibGVkKCkudGhlbihmZWVkYmFjayA9PiB7XHJcbiAqICAgICBjb25zb2xlLmxvZyhmZWVkYmFjayk7XHJcbiAqICAgICAvLyB7XHJcbiAqICAgICAvLyAgIGFjb3VzdGljOiB0cnVlLFxyXG4gKiAgICAgLy8gICBoYXB0aWM6IHRydWVcclxuICogICAgIC8vIH1cclxuICogICB9KTtcclxuICpcclxuICogYGBgXHJcbiAqIEBpbm50ZXJmYWNlc1xyXG4gKiBEZXZpY2VGZWVkYmFja0VuYWJsZWRcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdEZXZpY2VGZWVkYmFjaycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdmVsZGEtZGV2aWNlZmVlZGJhY2snLFxyXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuZGV2aWNlRmVlZGJhY2snLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVlZlbGRhL2RldmljZS1mZWVkYmFjaycsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGV2aWNlRmVlZGJhY2sgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogUHJvdmlkZSBzb3VuZCBmZWVkYmFjayB0byB1c2VyLCBuZXZlcnRoZWxlc3MgcmVzcGVjdCB1c2VyJ3Mgc2V0dGluZ3MgYW5kIGN1cnJlbnQgYWN0aXZlIGRldmljZSBwcm9maWxlIGFzIG5hdGl2ZSBmZWVkYmFjayBkby5cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBhY291c3RpYygpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3ZpZGUgdmlicmF0ZSBmZWVkYmFjayB0byB1c2VyLCBuZXZlcnRoZWxlc3MgcmVzcGVjdCB1c2VyJ3MgdGFjdGlsZSBmZWVkYmFjayBzZXR0aW5nIGFzIG5hdGl2ZSBmZWVkYmFjayBkby5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gdHlwZSBTcGVjaWZ5IHR5cGUgb2YgdmlicmF0aW9uIGZlZWRiYWNrLiAwIGZvciBsb25nIHByZXNzLCAxIGZvciB2aXJ0dWFsIGtleSwgb3IgMyBmb3Iga2V5Ym9hcmQgdGFwLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGhhcHRpYyh0eXBlOiBudW1iZXIpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGhhcHRpYyBhbmQgYWNvdXN0aWMgZmVlZGJhY2sgaXMgZW5hYmxlZCBieSB1c2VyIHNldHRpbmdzLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERldmljZUZlZWRiYWNrRW5hYmxlZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzRmVlZGJhY2tFbmFibGVkKCk6IFByb21pc2U8RGV2aWNlRmVlZGJhY2tTdGF0dXM+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19