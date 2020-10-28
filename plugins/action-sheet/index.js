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
var ActionSheetOriginal = /** @class */ (function (_super) {
    __extends(ActionSheetOriginal, _super);
    function ActionSheetOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience property to select an Android theme value
         */
        _this.ANDROID_THEMES = {
            THEME_TRADITIONAL: 1,
            THEME_HOLO_DARK: 2,
            THEME_HOLO_LIGHT: 3,
            THEME_DEVICE_DEFAULT_DARK: 4,
            THEME_DEVICE_DEFAULT_LIGHT: 5,
        };
        return _this;
    }
    ActionSheetOriginal.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    ActionSheetOriginal.prototype.hide = function (options) { return cordova(this, "hide", {}, arguments); };
    ActionSheetOriginal.pluginName = "ActionSheet";
    ActionSheetOriginal.plugin = "cordova-plugin-actionsheet";
    ActionSheetOriginal.pluginRef = "plugins.actionsheet";
    ActionSheetOriginal.repo = "https://github.com/EddyVerbruggen/cordova-plugin-actionsheet";
    ActionSheetOriginal.platforms = ["Android", "Browser", "iOS", "Windows", "Windows Phone 8"];
    return ActionSheetOriginal;
}(IonicNativePlugin));
var ActionSheet = new ActionSheetOriginal();
export { ActionSheet };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FjdGlvbi1zaGVldC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpR3ZDLCtCQUFpQjs7O1FBQ2hEOztXQUVHO1FBQ0gsb0JBQWMsR0FNVjtZQUNGLGlCQUFpQixFQUFFLENBQUM7WUFDcEIsZUFBZSxFQUFFLENBQUM7WUFDbEIsZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQix5QkFBeUIsRUFBRSxDQUFDO1lBQzVCLDBCQUEwQixFQUFFLENBQUM7U0FDOUIsQ0FBQzs7O0lBU0YsMEJBQUksYUFBQyxPQUE0QjtJQVVqQywwQkFBSSxhQUFDLE9BQTRCOzs7Ozs7c0JBckluQztFQWtHaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25TaGVldE9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsYWJlbHMgZm9yIHRoZSBidXR0b25zLiBVc2VzIHRoZSBpbmRleCB4XHJcbiAgICovXHJcbiAgYnV0dG9uTGFiZWxzOiBzdHJpbmdbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHRpdGxlIGZvciB0aGUgYWN0aW9uc2hlZXRcclxuICAgKi9cclxuICB0aXRsZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHN1YnRpdGxlIGZvciB0aGUgYWN0aW9uc2hlZXQgKElPUyBvbmx5KVxyXG4gICAqL1xyXG4gIHN1YnRpdGxlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGVtZSB0byBiZSB1c2VkIG9uIEFuZHJvaWRcclxuICAgKi9cclxuICBhbmRyb2lkVGhlbWU/OiAxIHwgMiB8IDMgfCA0IHwgNTtcclxuXHJcbiAgLyoqXHJcbiAgICogRW5hYmxlIGEgY2FuY2VsIG9uIEFuZHJvaWRcclxuICAgKi9cclxuICBhbmRyb2lkRW5hYmxlQ2FuY2VsQnV0dG9uPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogRW5hYmxlIGEgY2FuY2VsIG9uIFdpbmRvd3MgUGhvbmVcclxuICAgKi9cclxuICB3aW5waG9uZUVuYWJsZUNhbmNlbEJ1dHRvbj86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBhIGNhbmNlbCBidXR0b24gd2l0aCB0ZXh0XHJcbiAgICovXHJcbiAgYWRkQ2FuY2VsQnV0dG9uV2l0aExhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBZGQgYSBkZXN0cnVjdGl2ZSBidXR0b24gd2l0aCB0ZXh0XHJcbiAgICovXHJcbiAgYWRkRGVzdHJ1Y3RpdmVCdXR0b25XaXRoTGFiZWw/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIE9uIGFuIGlQYWQsIHNldCB0aGUgWCxZIHBvc2l0aW9uXHJcbiAgICovXHJcbiAgcG9zaXRpb24/OiBbbnVtYmVyLCBudW1iZXJdO1xyXG5cclxuICAvKipcclxuICAgKiBDaG9vc2UgaWYgZGVzdHJ1Y3RpdmUgYnV0dG9uIHdpbGwgYmUgdGhlIGxhc3RcclxuICAgKi9cclxuICBkZXN0cnVjdGl2ZUJ1dHRvbkxhc3Q/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQWN0aW9uIFNoZWV0XHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGUgQWN0aW9uU2hlZXQgcGx1Z2luIHNob3dzIGEgbmF0aXZlIGxpc3Qgb2Ygb3B0aW9ucyB0aGUgdXNlciBjYW4gY2hvb3NlIGZyb20uXHJcbiAqXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tYWN0aW9uc2hlZXRgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQWN0aW9uU2hlZXQgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi1hY3Rpb25zaGVldCkuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEFjdGlvblNoZWV0LCBBY3Rpb25TaGVldE9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FjdGlvbi1zaGVldC9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvblNoZWV0OiBBY3Rpb25TaGVldCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiBsZXQgYnV0dG9uTGFiZWxzID0gWydTaGFyZSB2aWEgRmFjZWJvb2snLCAnU2hhcmUgdmlhIFR3aXR0ZXInXTtcclxuICpcclxuICogY29uc3Qgb3B0aW9uczogQWN0aW9uU2hlZXRPcHRpb25zID0ge1xyXG4gKiAgIHRpdGxlOiAnV2hhdCBkbyB5b3Ugd2FudCB3aXRoIHRoaXMgaW1hZ2U/JyxcclxuICogICBzdWJ0aXRsZTogJ0Nob29zZSBhbiBhY3Rpb24nLFxyXG4gKiAgIGJ1dHRvbkxhYmVsczogYnV0dG9uTGFiZWxzLFxyXG4gKiAgIGFkZENhbmNlbEJ1dHRvbldpdGhMYWJlbDogJ0NhbmNlbCcsXHJcbiAqICAgYWRkRGVzdHJ1Y3RpdmVCdXR0b25XaXRoTGFiZWw6ICdEZWxldGUnLFxyXG4gKiAgIGFuZHJvaWRUaGVtZTogdGhpcy5hY3Rpb25TaGVldC5BTkRST0lEX1RIRU1FUy5USEVNRV9IT0xPX0RBUkssXHJcbiAqICAgZGVzdHJ1Y3RpdmVCdXR0b25MYXN0OiB0cnVlXHJcbiAqIH1cclxuICpcclxuICogdGhpcy5hY3Rpb25TaGVldC5zaG93KG9wdGlvbnMpLnRoZW4oKGJ1dHRvbkluZGV4OiBudW1iZXIpID0+IHtcclxuICogICBjb25zb2xlLmxvZygnQnV0dG9uIHByZXNzZWQ6ICcgKyBidXR0b25JbmRleCk7XHJcbiAqIH0pO1xyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogQWN0aW9uU2hlZXRPcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQWN0aW9uU2hlZXQnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFjdGlvbnNoZWV0JyxcclxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmFjdGlvbnNoZWV0JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL2NvcmRvdmEtcGx1Z2luLWFjdGlvbnNoZWV0JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUgOCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25TaGVldCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBwcm9wZXJ0eSB0byBzZWxlY3QgYW4gQW5kcm9pZCB0aGVtZSB2YWx1ZVxyXG4gICAqL1xyXG4gIEFORFJPSURfVEhFTUVTOiB7XHJcbiAgICBUSEVNRV9UUkFESVRJT05BTDogbnVtYmVyO1xyXG4gICAgVEhFTUVfSE9MT19EQVJLOiBudW1iZXI7XHJcbiAgICBUSEVNRV9IT0xPX0xJR0hUOiBudW1iZXI7XHJcbiAgICBUSEVNRV9ERVZJQ0VfREVGQVVMVF9EQVJLOiBudW1iZXI7XHJcbiAgICBUSEVNRV9ERVZJQ0VfREVGQVVMVF9MSUdIVDogbnVtYmVyO1xyXG4gIH0gPSB7XHJcbiAgICBUSEVNRV9UUkFESVRJT05BTDogMSxcclxuICAgIFRIRU1FX0hPTE9fREFSSzogMixcclxuICAgIFRIRU1FX0hPTE9fTElHSFQ6IDMsXHJcbiAgICBUSEVNRV9ERVZJQ0VfREVGQVVMVF9EQVJLOiA0LFxyXG4gICAgVEhFTUVfREVWSUNFX0RFRkFVTFRfTElHSFQ6IDUsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyBhIG5hdGl2ZSBBY3Rpb25TaGVldCBjb21wb25lbnQuIFNlZSBiZWxvdyBmb3Igb3B0aW9ucy5cclxuICAgKiBAcGFyYW0ge0FjdGlvblNoZWV0T3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnMgU2VlIHRhYmxlIGJlbG93XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBpbmRleCBvZiB0aGVcclxuICAgKiAgIGJ1dHRvbiBwcmVzc2VkICgxIGJhc2VkLCBzbyAxLCAyLCAzLCBldGMuKVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzaG93KG9wdGlvbnM/OiBBY3Rpb25TaGVldE9wdGlvbnMpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJvZ3JhbW1hdGljYWxseSBoaWRlIHRoZSBuYXRpdmUgQWN0aW9uU2hlZXRcclxuICAgKiBAcGFyYW0gIHtBY3Rpb25TaGVldE9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIFNlZSB0YWJsZSBiZWxvd1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYWN0aW9uc2hlZXQgaXMgY2xvc2VkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGhpZGUob3B0aW9ucz86IEFjdGlvblNoZWV0T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==