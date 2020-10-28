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
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var ScreenOrientationOriginal = /** @class */ (function (_super) {
    __extends(ScreenOrientationOriginal, _super);
    function ScreenOrientationOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience enum for possible orientations
         */
        _this.ORIENTATIONS = {
            PORTRAIT_PRIMARY: 'portrait-primary',
            PORTRAIT_SECONDARY: 'portrait-secondary',
            LANDSCAPE_PRIMARY: 'landscape-primary',
            LANDSCAPE_SECONDARY: 'landscape-secondary',
            PORTRAIT: 'portrait',
            LANDSCAPE: 'landscape',
            ANY: 'any',
        };
        return _this;
    }
    ScreenOrientationOriginal.prototype.onChange = function () { return cordova(this, "onChange", { "eventObservable": true, "event": "orientationchange", "element": "window" }, arguments); };
    ScreenOrientationOriginal.prototype.lock = function (orientation) { return cordova(this, "lock", { "otherPromise": true }, arguments); };
    ScreenOrientationOriginal.prototype.unlock = function () { return cordova(this, "unlock", { "sync": true }, arguments); };
    Object.defineProperty(ScreenOrientationOriginal.prototype, "type", {
        get: function () { return cordovaPropertyGet(this, "type"); },
        set: function (value) { cordovaPropertySet(this, "type", value); },
        enumerable: true,
        configurable: true
    });
    ScreenOrientationOriginal.pluginName = "ScreenOrientation";
    ScreenOrientationOriginal.plugin = "cordova-plugin-screen-orientation";
    ScreenOrientationOriginal.pluginRef = "screen.orientation";
    ScreenOrientationOriginal.repo = "https://github.com/apache/cordova-plugin-screen-orientation";
    ScreenOrientationOriginal.platforms = ["Android", "iOS", "Windows"];
    return ScreenOrientationOriginal;
}(IonicNativePlugin));
var ScreenOrientation = new ScreenOrientationOriginal();
export { ScreenOrientation };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NjcmVlbi1vcmllbnRhdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTJESyxxQ0FBaUI7OztRQUN0RDs7V0FFRztRQUNILGtCQUFZLEdBQUc7WUFDYixnQkFBZ0IsRUFBRSxrQkFBa0I7WUFDcEMsa0JBQWtCLEVBQUUsb0JBQW9CO1lBQ3hDLGlCQUFpQixFQUFFLG1CQUFtQjtZQUN0QyxtQkFBbUIsRUFBRSxxQkFBcUI7WUFDMUMsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsR0FBRyxFQUFFLEtBQUs7U0FDWCxDQUFDOzs7SUFVRixvQ0FBUTtJQVdSLGdDQUFJLGFBQUMsV0FBbUI7SUFReEIsa0NBQU07MEJBTU4sbUNBQUk7Ozs7Ozs7Ozs7OzRCQTVHTjtFQTZEdUMsaUJBQWlCO1NBQTNDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNjcmVlbiBPcmllbnRhdGlvblxyXG4gKiBAcHJlbWllciBzY3JlZW4tb3JpZW50YXRpb25cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENvcmRvdmEgcGx1Z2luIHRvIHNldC9sb2NrIHRoZSBzY3JlZW4gb3JpZW50YXRpb24gaW4gYSBjb21tb24gd2F5LlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLXNjcmVlbi1vcmllbnRhdGlvbmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtTY3JlZW4gT3JpZW50YXRpb24gcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tc2NyZWVuLW9yaWVudGF0aW9uKS5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgU2NyZWVuT3JpZW50YXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NjcmVlbi1vcmllbnRhdGlvbi9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjcmVlbk9yaWVudGF0aW9uOiBTY3JlZW5PcmllbnRhdGlvbikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiAvLyBnZXQgY3VycmVudFxyXG4gKiBjb25zb2xlLmxvZyh0aGlzLnNjcmVlbk9yaWVudGF0aW9uLnR5cGUpOyAvLyBsb2dzIHRoZSBjdXJyZW50IG9yaWVudGF0aW9uLCBleGFtcGxlOiAnbGFuZHNjYXBlJ1xyXG4gKlxyXG4gKiAvLyBzZXQgdG8gbGFuZHNjYXBlXHJcbiAqIHRoaXMuc2NyZWVuT3JpZW50YXRpb24ubG9jayh0aGlzLnNjcmVlbk9yaWVudGF0aW9uLk9SSUVOVEFUSU9OUy5MQU5EU0NBUEUpO1xyXG4gKlxyXG4gKiAvLyBhbGxvdyB1c2VyIHJvdGF0ZVxyXG4gKiB0aGlzLnNjcmVlbk9yaWVudGF0aW9uLnVubG9jaygpO1xyXG4gKlxyXG4gKiAvLyBkZXRlY3Qgb3JpZW50YXRpb24gY2hhbmdlc1xyXG4gKiB0aGlzLnNjcmVlbk9yaWVudGF0aW9uLm9uQ2hhbmdlKCkuc3Vic2NyaWJlKFxyXG4gKiAgICAoKSA9PiB7XHJcbiAqICAgICAgICBjb25zb2xlLmxvZyhcIk9yaWVudGF0aW9uIENoYW5nZWRcIik7XHJcbiAqICAgIH1cclxuICogKTtcclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqIEBhZHZhbmNlZFxyXG4gKlxyXG4gKiBBY2NlcHRlZCBvcmllbnRhdGlvbiB2YWx1ZXM6XHJcbiAqXHJcbiAqIHwgVmFsdWUgICAgICAgICAgICAgICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxyXG4gKiB8IHBvcnRyYWl0LXByaW1hcnkgICAgICAgICAgICAgIHwgVGhlIG9yaWVudGF0aW9uIGlzIGluIHRoZSBwcmltYXJ5IHBvcnRyYWl0IG1vZGUuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgcG9ydHJhaXQtc2Vjb25kYXJ5ICAgICAgICAgICAgfCBUaGUgb3JpZW50YXRpb24gaXMgaW4gdGhlIHNlY29uZGFyeSBwb3J0cmFpdCBtb2RlLiAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogfCBsYW5kc2NhcGUtcHJpbWFyeSAgICAgICAgICAgICB8IFRoZSBvcmllbnRhdGlvbiBpcyBpbiB0aGUgcHJpbWFyeSBsYW5kc2NhcGUgbW9kZS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8IGxhbmRzY2FwZS1zZWNvbmRhcnkgICAgICAgICAgIHwgVGhlIG9yaWVudGF0aW9uIGlzIGluIHRoZSBzZWNvbmRhcnkgbGFuZHNjYXBlIG1vZGUuICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgcG9ydHJhaXQgICAgICAgICAgICAgICAgICAgICAgfCBUaGUgb3JpZW50YXRpb24gaXMgZWl0aGVyIHBvcnRyYWl0LXByaW1hcnkgb3IgcG9ydHJhaXQtc2Vjb25kYXJ5IChzZW5zb3IpLiAgIHxcclxuICogfCBsYW5kc2NhcGUgICAgICAgICAgICAgICAgICAgICB8IFRoZSBvcmllbnRhdGlvbiBpcyBlaXRoZXIgbGFuZHNjYXBlLXByaW1hcnkgb3IgbGFuZHNjYXBlLXNlY29uZGFyeSAoc2Vuc29yKS4gfFxyXG4gKlxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1NjcmVlbk9yaWVudGF0aW9uJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zY3JlZW4tb3JpZW50YXRpb24nLFxyXG4gIHBsdWdpblJlZjogJ3NjcmVlbi5vcmllbnRhdGlvbicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tc2NyZWVuLW9yaWVudGF0aW9uJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW5PcmllbnRhdGlvbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBlbnVtIGZvciBwb3NzaWJsZSBvcmllbnRhdGlvbnNcclxuICAgKi9cclxuICBPUklFTlRBVElPTlMgPSB7XHJcbiAgICBQT1JUUkFJVF9QUklNQVJZOiAncG9ydHJhaXQtcHJpbWFyeScsXHJcbiAgICBQT1JUUkFJVF9TRUNPTkRBUlk6ICdwb3J0cmFpdC1zZWNvbmRhcnknLFxyXG4gICAgTEFORFNDQVBFX1BSSU1BUlk6ICdsYW5kc2NhcGUtcHJpbWFyeScsXHJcbiAgICBMQU5EU0NBUEVfU0VDT05EQVJZOiAnbGFuZHNjYXBlLXNlY29uZGFyeScsXHJcbiAgICBQT1JUUkFJVDogJ3BvcnRyYWl0JyxcclxuICAgIExBTkRTQ0FQRTogJ2xhbmRzY2FwZScsXHJcbiAgICBBTlk6ICdhbnknLFxyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogTGlzdGVuIHRvIG9yaWVudGF0aW9uIGNoYW5nZSBldmVudFxyXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgZXZlbnQ6ICdvcmllbnRhdGlvbmNoYW5nZScsXHJcbiAgICBlbGVtZW50OiAnd2luZG93JyxcclxuICB9KVxyXG4gIG9uQ2hhbmdlKCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9jayB0aGUgb3JpZW50YXRpb24gdG8gdGhlIHBhc3NlZCB2YWx1ZS5cclxuICAgKiBTZWUgYmVsb3cgZm9yIGFjY2VwdGVkIHZhbHVlc1xyXG4gICAqIEBwYXJhbSBvcmllbnRhdGlvbiB7c3RyaW5nfSBUaGUgb3JpZW50YXRpb24gd2hpY2ggc2hvdWxkIGJlIGxvY2tlZC4gQWNjZXB0ZWQgdmFsdWVzIHNlZSB0YWJsZSBhYm92ZS5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBsb2NrKG9yaWVudGF0aW9uOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVW5sb2NrIGFuZCBhbGxvdyBhbGwgb3JpZW50YXRpb25zLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHVubG9jaygpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgY3VycmVudCBvcmllbnRhdGlvbiBvZiB0aGUgZGV2aWNlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIHR5cGU6IHN0cmluZztcclxufVxyXG4iXX0=