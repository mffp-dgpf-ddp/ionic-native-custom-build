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
import { Observable } from 'rxjs';
var BroadcasterOriginal = /** @class */ (function (_super) {
    __extends(BroadcasterOriginal, _super);
    function BroadcasterOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BroadcasterOriginal.prototype.addEventListener = function (eventName, isGlobal) {
        if (isGlobal === void 0) { isGlobal = false; }
        return cordova(this, "addEventListener", { "observable": true, "clearFunction": "removeEventListener", "clearWithArgs": true }, arguments);
    };
    BroadcasterOriginal.prototype.fireNativeEvent = function (eventName, isGlobalOrEventData, data) { return cordova(this, "fireNativeEvent", {}, arguments); };
    BroadcasterOriginal.pluginName = "Broadcaster";
    BroadcasterOriginal.plugin = "cordova-plugin-broadcaster";
    BroadcasterOriginal.pluginRef = "broadcaster";
    BroadcasterOriginal.repo = "https://github.com/bsorrentino/cordova-broadcaster";
    BroadcasterOriginal.platforms = ["Android", "iOS", "Browser"];
    return BroadcasterOriginal;
}(IonicNativePlugin));
var Broadcaster = new BroadcasterOriginal();
export { Broadcaster };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jyb2FkY2FzdGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBNkNELCtCQUFpQjs7OztJQVloRCxzQ0FBZ0IsYUFBQyxTQUFpQixFQUFFLFFBQWdCO1FBQWhCLHlCQUFBLEVBQUEsZ0JBQWdCOzs7SUFlcEQscUNBQWUsYUFBQyxTQUFpQixFQUFFLG1CQUF3QyxFQUFFLElBQWdCOzs7Ozs7c0JBMUUvRjtFQStDaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogU3BlY2lmaWMgZGF0YSBmb3IgQW5kcm9pZCBpbXBsZW1lbnRhdGlvblxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBBbmRyb2lkRGF0YSB7XHJcbiAgZXh0cmFzOiBvYmplY3Q7XHJcbiAgZmxhZ3M6IG51bWJlcjtcclxuICBjYXRlZ29yeTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogUG9zc2libHkgRXZlbnQgRGF0YSB0eXBlc1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnREYXRhID0gb2JqZWN0IHwgQW5kcm9pZERhdGEgfCBudWxsO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEJyb2FkY2FzdGVyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBhZGRzIGV4Y2hhbmdpbmcgZXZlbnRzIGJldHdlZW4gbmF0aXZlIGNvZGUgYW5kIHlvdXIgYXBwLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBCcm9hZGNhc3RlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYnJvYWRjYXN0ZXIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBicm9hZGNhc3RlcjogQnJvYWRjYXN0ZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogLy8gTGlzdGVuIHRvIGV2ZW50cyBmcm9tIE5hdGl2ZVxyXG4gKiB0aGlzLmJyb2FkY2FzdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2V2ZW50TmFtZScpLnN1YnNjcmliZSgoZXZlbnQpID0+IGNvbnNvbGUubG9nKGV2ZW50KSk7XHJcbiAqXHJcbiAqIC8vIFNlbmQgZXZlbnQgdG8gTmF0aXZlXHJcbiAqIHRoaXMuYnJvYWRjYXN0ZXIuZmlyZU5hdGl2ZUV2ZW50KCdldmVudE5hbWUnLCB7fSkudGhlbigoKSA9PiBjb25zb2xlLmxvZygnc3VjY2VzcycpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQnJvYWRjYXN0ZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJyb2FkY2FzdGVyJyxcclxuICBwbHVnaW5SZWY6ICdicm9hZGNhc3RlcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ic29ycmVudGluby9jb3Jkb3ZhLWJyb2FkY2FzdGVyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnQnJvd3NlciddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCcm9hZGNhc3RlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIGxpc3RlbiB0byBhbiBldmVudCBzZW50IGZyb20gdGhlIG5hdGl2ZSBjb2RlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNHbG9iYWwgVmFsaWQgb25seSBmb3IgQW5kcm9pZC4gSXQgYWxsb3dzIHRvIGxpc3RlbiBmb3IgZ2xvYmFsIG1lc3NhZ2VzKGkuZS4gaW50ZW50cylcclxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0byB3YXRjaCB3aGVuIGFuIGV2ZW50IGlzIHJlY2VpdmVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGNsZWFyRnVuY3Rpb246ICdyZW1vdmVFdmVudExpc3RlbmVyJyxcclxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWUsXHJcbiAgfSlcclxuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZTogc3RyaW5nLCBpc0dsb2JhbCA9IGZhbHNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gc2VuZHMgZGF0YSB0byB0aGUgbmF0aXZlIGNvZGVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0dsb2JhbE9yRXZlbnREYXRhIG1lYW5zIHRoYXQgbWVzc2FnZSBpcyBnbG9iYWwgKHZhbGlkIG9ubHkgb24gQW5kcm9pZClcclxuICAgKiBAcGFyYW0ge0FuZHJvaWREYXRhfSBpc0dsb2JhbE9yRXZlbnREYXRhIGFsbG93cyB0byBzcGVjaWZ5ICdmbGFnc2AgYW5kICdjYXRlZ29yeScgKHZhbGlkIG9ubHkgb24gQW5kcm9pZClcclxuICAgKiBAcGFyYW0ge29iamVjdH0gaXNHbG9iYWxPckV2ZW50RGF0YSBhbGxvd3MgdG8gc3BlY2lmeSBhIGdlbmVyaWMgb2JqZWN0IGNvbnRhaW5pbmcgY3VzdG9tIGV2ZW50IGRhdGEgKGFsbCBwbGF0Zm9ybSlcclxuICAgKiBAcGFyYW0ge0FuZHJvaWREYXRhfSBbZGF0YV0gaWYgaXNHbG9iYWwgaXMgc2V0LCBhbGxvd3MgdG8gc3BlY2lmeSAnZmxhZ3NgIGFuZCAnY2F0ZWdvcnknIGlmIGlzR2xvYmFsIGlzIHNldCAodmFsaWQgb25seSBvbiBBbmRyb2lkKVxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbZGF0YV0gaWYgaXNHbG9iYWwgaXMgc2V0LCBhbGxvd3MgdG8gc3BlY2lmeSBhIGdlbmVyaWMgb2JqZWN0IGNvbnRhaW5pbmcgY3VzdG9tIGV2ZW50IGRhdGEgKGFsbCBwbGF0Zm9ybSlcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhbiBldmVudCBpcyBzdWNjZXNzZnVsbHkgZmlyZWRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZmlyZU5hdGl2ZUV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBpc0dsb2JhbE9yRXZlbnREYXRhOiBib29sZWFuIHwgRXZlbnREYXRhLCBkYXRhPzogRXZlbnREYXRhKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19