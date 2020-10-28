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
var VibrationOriginal = /** @class */ (function (_super) {
    __extends(VibrationOriginal, _super);
    function VibrationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VibrationOriginal.prototype.vibrate = function (time) { return cordova(this, "vibrate", { "sync": true }, arguments); };
    VibrationOriginal.pluginName = "Vibration";
    VibrationOriginal.plugin = "cordova-plugin-vibration";
    VibrationOriginal.pluginRef = "navigator";
    VibrationOriginal.repo = "https://github.com/apache/cordova-plugin-vibration";
    VibrationOriginal.platforms = ["Android", "iOS", "Windows"];
    return VibrationOriginal;
}(IonicNativePlugin));
var Vibration = new VibrationOriginal();
export { Vibration };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3ZpYnJhdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFxQ3pDLDZCQUFpQjs7OztJQVE5QywyQkFBTyxhQUFDLElBQXVCOzs7Ozs7b0JBOUNqQztFQXNDK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFZpYnJhdGlvblxyXG4gKiBAcHJlbWllciB2aWJyYXRpb25cclxuICogQGRlc2NyaXB0aW9uIFZpYnJhdGVzIHRoZSBkZXZpY2VcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgVmlicmF0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS92aWJyYXRpb24vbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB2aWJyYXRpb246IFZpYnJhdGlvbikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiAvLyBWaWJyYXRlIHRoZSBkZXZpY2UgZm9yIGEgc2Vjb25kXHJcbiAqIC8vIER1cmF0aW9uIGlzIGlnbm9yZWQgb24gaU9TLlxyXG4gKiB0aGlzLnZpYnJhdGlvbi52aWJyYXRlKDEwMDApO1xyXG4gKlxyXG4gKiAvLyBWaWJyYXRlIDIgc2Vjb25kc1xyXG4gKiAvLyBQYXVzZSBmb3IgMSBzZWNvbmRcclxuICogLy8gVmlicmF0ZSBmb3IgMiBzZWNvbmRzXHJcbiAqIC8vIFBhdHRlcm5zIHdvcmsgb24gQW5kcm9pZCBhbmQgV2luZG93cyBvbmx5XHJcbiAqIHRoaXMudmlicmF0aW9uLnZpYnJhdGUoWzIwMDAsMTAwMCwyMDAwXSk7XHJcbiAqXHJcbiAqIC8vIFN0b3AgYW55IGN1cnJlbnQgdmlicmF0aW9ucyBpbW1lZGlhdGVseVxyXG4gKiAvLyBXb3JrcyBvbiBBbmRyb2lkIGFuZCBXaW5kb3dzIG9ubHlcclxuICogdGhpcy52aWJyYXRpb24udmlicmF0ZSgwKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnVmlicmF0aW9uJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi12aWJyYXRpb24nLFxyXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tdmlicmF0aW9uJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWaWJyYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVmlicmF0ZXMgdGhlIGRldmljZSBmb3IgZ2l2ZW4gYW1vdW50IG9mIHRpbWUuXHJcbiAgICogQHBhcmFtIHRpbWUge251bWJlcnxudW1iZXJbXX0gTWlsbGlzZWNvbmRzIHRvIHZpYnJhdGUgdGhlIGRldmljZS4gSWYgcGFzc2VkIGFuIGFycmF5IG9mIG51bWJlcnMsIGl0IHdpbGwgZGVmaW5lIGEgdmlicmF0aW9uIHBhdHRlcm4uIFBhc3MgMCB0byBzdG9wIGFueSB2aWJyYXRpb24gaW1tZWRpYXRlbHkuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIHZpYnJhdGUodGltZTogbnVtYmVyIHwgbnVtYmVyW10pIHt9XHJcbn1cclxuIl19