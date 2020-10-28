import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordovaFunctionOverride, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var ThreeDeeTouch = /** @class */ (function (_super) {
    __extends(ThreeDeeTouch, _super);
    function ThreeDeeTouch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThreeDeeTouch.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    ThreeDeeTouch.prototype.watchForceTouches = function () { return cordova(this, "watchForceTouches", { "observable": true }, arguments); };
    ThreeDeeTouch.prototype.configureQuickActions = function (quickActions) { return cordova(this, "configureQuickActions", { "sync": true }, arguments); };
    ThreeDeeTouch.prototype.onHomeIconPressed = function () { return cordovaFunctionOverride(this, "onHomeIconPressed", {}, arguments); };
    ThreeDeeTouch.prototype.enableLinkPreview = function () { return cordova(this, "enableLinkPreview", { "sync": true }, arguments); };
    ThreeDeeTouch.prototype.disableLinkPreview = function () { return cordova(this, "disableLinkPreview", { "sync": true }, arguments); };
    ThreeDeeTouch.pluginName = "ThreeDeeTouch";
    ThreeDeeTouch.plugin = "cordova-plugin-3dtouch";
    ThreeDeeTouch.pluginRef = "ThreeDeeTouch";
    ThreeDeeTouch.repo = "https://github.com/EddyVerbruggen/cordova-plugin-3dtouch";
    ThreeDeeTouch.platforms = ["iOS"];
    ThreeDeeTouch = __decorate([
        Injectable()
    ], ThreeDeeTouch);
    return ThreeDeeTouch;
}(IonicNativePlugin));
export { ThreeDeeTouch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RocmVlLWRlZS10b3VjaC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1REFBK0QsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQStIQyxpQ0FBaUI7Ozs7SUFNbEQsbUNBQVc7SUFXWCx5Q0FBaUI7SUFlakIsNkNBQXFCLGFBQUMsWUFBd0M7SUFPOUQseUNBQWlCO0lBV2pCLHlDQUFpQjtJQVFqQiwwQ0FBa0I7Ozs7OztJQTFEUCxhQUFhO1FBRHpCLFVBQVUsRUFBRTtPQUNBLGFBQWE7d0JBakkxQjtFQWlJbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFGdW5jdGlvbk92ZXJyaWRlLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaHJlZURlZVRvdWNoUXVpY2tBY3Rpb24ge1xyXG4gIC8qKlxyXG4gICAqIFR5cGUgdGhhdCBjYW4gYmUgdXNlZCBpbiB0aGUgb25Ib21lSWNvblByZXNzZWQgY2FsbGJhY2tcclxuICAgKi9cclxuICB0eXBlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaXRsZVxyXG4gICAqL1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnRpdGxlXHJcbiAgICovXHJcbiAgc3VidGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEljb24gdHlwZS4gQ2FzZSBpbnNlbnNpdGl2ZVxyXG4gICAqL1xyXG4gIGljb25UeXBlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBJY29uIHRlbXBsYXRlXHJcbiAgICovXHJcbiAgaWNvblRlbXBsYXRlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRocmVlRGVlVG91Y2hGb3JjZVRvdWNoIHtcclxuICAvKipcclxuICAgKiBUb3VjaCBmb3JjZVxyXG4gICAqL1xyXG4gIGZvcmNlOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRpbWVzdGFtcCBvZiBhY3Rpb25cclxuICAgKi9cclxuICB0aW1lc3RhbXA6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogWCBjb29yZGluYXRlIG9mIGFjdGlvblxyXG4gICAqL1xyXG4gIHg6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogWSBjb29yZGluYXRlIG9mIGFjdGlvblxyXG4gICAqL1xyXG4gIHk6IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIDNEIFRvdWNoXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGUgM0QgVG91Y2ggcGx1Z2luIGFkZHMgM0QgVG91Y2ggY2FwYWJpbGl0aWVzIHRvIHlvdXIgQ29yZG92YSBhcHAuXHJcbiAqXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tM2R0b3VjaGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFszRCBUb3VjaCBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL2NvcmRvdmEtcGx1Z2luLTNkdG91Y2gpLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogUGxlYXNlIGRvIHJlZmVyIHRvIHRoZSBvcmlnaW5hbCBwbHVnaW4ncyByZXBvIGZvciBkZXRhaWxlZCB1c2FnZS4gVGhlIHVzYWdlIGV4YW1wbGUgaGVyZSBtaWdodCBub3QgYmUgc3VmZmljaWVudC5cclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBUaHJlZURlZVRvdWNoLCBUaHJlZURlZVRvdWNoUXVpY2tBY3Rpb24sIFRocmVlRGVlVG91Y2hGb3JjZVRvdWNoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS90aHJlZS1kZWUtdG91Y2gvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0aHJlZURlZVRvdWNoOiBUaHJlZURlZVRvdWNoKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMudGhyZWVEZWVUb3VjaC5pc0F2YWlsYWJsZSgpLnRoZW4oaXNBdmFpbGFibGUgPT4gY29uc29sZS5sb2coJzNEIFRvdWNoIGF2YWlsYWJsZT8gJyArIGlzQXZhaWxhYmxlKSk7XHJcbiAqXHJcbiAqIHRoaXMudGhyZWVEZWVUb3VjaC53YXRjaEZvcmNlVG91Y2hlcygpXHJcbiAqICAgLnN1YnNjcmliZShcclxuICogICAgIChkYXRhOiBUaHJlZURlZVRvdWNoRm9yY2VUb3VjaCkgPT4ge1xyXG4gKiAgICAgICBjb25zb2xlLmxvZygnRm9yY2UgdG91Y2ggJScgKyBkYXRhLmZvcmNlKTtcclxuICogICAgICAgY29uc29sZS5sb2coJ0ZvcmNlIHRvdWNoIHRpbWVzdGFtcDogJyArIGRhdGEudGltZXN0YW1wKTtcclxuICogICAgICAgY29uc29sZS5sb2coJ0ZvcmNlIHRvdWNoIHg6ICcgKyBkYXRhLngpO1xyXG4gKiAgICAgICBjb25zb2xlLmxvZygnRm9yY2UgdG91Y2ggeTogJyArIGRhdGEueSk7XHJcbiAqICAgICB9XHJcbiAqICAgKTtcclxuICpcclxuICpcclxuICogbGV0IGFjdGlvbnM6IFRocmVlRGVlVG91Y2hRdWlja0FjdGlvbltdID0gW1xyXG4gKiAgIHtcclxuICogICAgIHR5cGU6ICdjaGVja2luJyxcclxuICogICAgIHRpdGxlOiAnQ2hlY2sgaW4nLFxyXG4gKiAgICAgc3VidGl0bGU6ICdRdWlja2x5IGNoZWNrIGluJyxcclxuICogICAgIGljb25UeXBlOiAnQ29tcG9zZSdcclxuICogICB9LFxyXG4gKiAgIHtcclxuICogICAgIHR5cGU6ICdzaGFyZScsXHJcbiAqICAgICB0aXRsZTogJ1NoYXJlJyxcclxuICogICAgIHN1YnRpdGxlOiAnU2hhcmUgbGlrZSB5b3UgY2FyZScsXHJcbiAqICAgICBpY29uVHlwZTogJ1NoYXJlJ1xyXG4gKiAgIH0sXHJcbiAqICAge1xyXG4gKiAgICAgdHlwZTogJ3NlYXJjaCcsXHJcbiAqICAgICB0aXRsZTogJ1NlYXJjaCcsXHJcbiAqICAgICBpY29uVHlwZTogJ1NlYXJjaCdcclxuICogICB9LFxyXG4gKiAgIHtcclxuICogICAgIHRpdGxlOiAnU2hvdyBmYXZvcml0ZXMnLFxyXG4gKiAgICAgaWNvblRlbXBsYXRlOiAnSGVhcnRUZW1wbGF0ZSdcclxuICogICB9XHJcbiAqIF07XHJcbiAqXHJcbiAqIHRoaXMudGhyZWVEZWVUb3VjaC5jb25maWd1cmVRdWlja0FjdGlvbnMoYWN0aW9ucyk7XHJcbiAqXHJcbiAqIHRoaXMudGhyZWVEZWVUb3VjaC5vbkhvbWVJY29uUHJlc3NlZCgpLnN1YnNjcmliZShcclxuICogIChwYXlsb2FkKSA9PiB7XHJcbiAqICAgIC8vIHJldHVybnMgYW4gb2JqZWN0IHRoYXQgaXMgdGhlIGJ1dHRvbiB5b3UgcHJlc2VkXHJcbiAqICAgIGNvbnNvbGUubG9nKCdQcmVzc2VkIHRoZSAke3BheWxvYWQudGl0bGV9IGJ1dHRvbicpXHJcbiAqICAgIGNvbnNvbGUubG9nKHBheWxvYWQudHlwZSlcclxuICpcclxuICogIH1cclxuICogKVxyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogVGhyZWVEZWVUb3VjaFF1aWNrQWN0aW9uXHJcbiAqIFRocmVlRGVlVG91Y2hGb3JjZVRvdWNoXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnVGhyZWVEZWVUb3VjaCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tM2R0b3VjaCcsXHJcbiAgcGx1Z2luUmVmOiAnVGhyZWVEZWVUb3VjaCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi0zZHRvdWNoJyxcclxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRocmVlRGVlVG91Y2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogWW91IG5lZWQgYW4gaVBob25lIDZTIG9yIHNvbWUgZnV0dXJlIHRlY2ggdG8gdXNlIHRoZSBmZWF0dXJlcyBvZiB0aGlzIHBsdWdpbiwgc28geW91IGNhbiBjaGVjayBhdCBydW50aW1lIGlmIHRoZSB1c2VyJ3MgZGV2aWNlIGlzIHN1cHBvcnRlZC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBwbHVnaW4gaXMgYXZhaWxhYmxlIG9yIG5vdFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpc0F2YWlsYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFlvdSBjYW4gZ2V0IGEgbm90aWZpY2F0aW9uIHdoZW4gdGhlIHVzZXIgZm9yY2UgdG91Y2hlcyB0aGUgd2Vidmlldy4gVGhlIHBsdWdpbiBkZWZpbmVzIGEgRm9yY2UgVG91Y2ggd2hlbiBhdCBsZWFzdCA3NSUgb2YgdGhlIG1heGltdW0gZm9yY2UgaXMgYXBwbGllZCB0byB0aGUgc2NyZWVuLiBZb3VyIGFwcCB3aWxsIHJlY2VpdmUgdGhlIHggYW5kIHkgY29vcmRpbmF0ZXMsIHNvIHlvdSBoYXZlIHRvIGZpZ3VyZSBvdXQgd2hpY2ggVUkgZWxlbWVudCB3YXMgdG91Y2hlZC5cclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxUaHJlZURlZVRvdWNoRm9yY2VUb3VjaD59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IHNlbmRzIGEgYFRocmVlRGVlVG91Y2hGb3JjZVRvdWNoYCBvYmplY3RcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgd2F0Y2hGb3JjZVRvdWNoZXMoKTogT2JzZXJ2YWJsZTxUaHJlZURlZVRvdWNoRm9yY2VUb3VjaD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2V0dXAgdGhlIDNELXRvdWNoIGFjdGlvbnMsIHRha2VzIGFuIGFycmF5IG9mIG9iamVjdHMgd2l0aCB0aGUgZm9sbG93aW5nXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgKG9wdGlvbmFsKSBBIHR5cGUgdGhhdCBjYW4gYmUgdXNlZCBgb25Ib21lSWNvblByZXNzZWRgIGNhbGxiYWNrXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIFRpdGxlIGZvciB5b3VyIGFjdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdWJ0aXRsZSAob3B0aW9uYWwpIEEgc2hvcnQgZGVzY3JpcHRpb24gZm9yIHlvdXIgYWN0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGljb25UeXBlIChvcHRpb25hbCkgQ2hvb3NlIGJldHdlZW4gUHJvaGliaXQsIENvbnRhY3QsIEhvbWUsIE1hcmtMb2NhdGlvbiwgRmF2b3JpdGUsIExvdmUsIENsb3VkLCBJbnZpdGF0aW9uLCBDb25maXJtYXRpb24sIE1haWwsIE1lc3NhZ2UsIERhdGUsIFRpbWUsIENhcHR1cmVQaG90bywgQ2FwdHVyZVZpZGVvLCBUYXNrLCBUYXNrQ29tcGxldGVkLCBBbGFybSwgQm9va21hcmssIFNodWZmbGUsIEF1ZGlvLCBVcGRhdGVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWNvblRlbXBsYXRlIChvcHRpb25hbCkgQ2FuIGJlIHVzZWQgdG8gcHJvdmlkZSB5b3VyIG93biBpY29uXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIGNvbmZpZ3VyZVF1aWNrQWN0aW9ucyhxdWlja0FjdGlvbnM6IFRocmVlRGVlVG91Y2hRdWlja0FjdGlvbltdKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBXaGVuIGEgaG9tZSBpY29uIGlzIHByZXNzZWQsIHlvdXIgYXBwIGxhdW5jaGVzIGFuZCB0aGlzIEpTIGNhbGxiYWNrIGlzIGludm9rZWQuXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gcmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gaGUgdXNlciBwcmVzc2VzIG9uIHRoZSBob21lIHNjcmVlbiBpY29uXHJcbiAgICovXHJcbiAgQENvcmRvdmFGdW5jdGlvbk92ZXJyaWRlKClcclxuICBvbkhvbWVJY29uUHJlc3NlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW5hYmxlIExpbmsgUHJldmlldy5cclxuICAgKiBVSVdlYlZpZXcgYW5kIFdLV2ViVmlldyAodGhlIHdlYnZpZXdzIHBvd2VyaW5nIENvcmRvdmEgYXBwcykgZG9uJ3QgYWxsb3cgdGhlIGZhbmN5IG5ldyBsaW5rIHByZXZpZXcgZmVhdHVyZSBvZiBpT1M5LlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBlbmFibGVMaW5rUHJldmlldygpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc2FibGVkIHRoZSBsaW5rIHByZXZpZXcgZmVhdHVyZSwgaWYgZW5hYmxlZC5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgZGlzYWJsZUxpbmtQcmV2aWV3KCk6IHZvaWQge31cclxufVxyXG4iXX0=