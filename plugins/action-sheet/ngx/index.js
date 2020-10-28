import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var ActionSheet = /** @class */ (function (_super) {
    __extends(ActionSheet, _super);
    function ActionSheet() {
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
    ActionSheet.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    ActionSheet.prototype.hide = function (options) { return cordova(this, "hide", {}, arguments); };
    ActionSheet.pluginName = "ActionSheet";
    ActionSheet.plugin = "cordova-plugin-actionsheet";
    ActionSheet.pluginRef = "plugins.actionsheet";
    ActionSheet.repo = "https://github.com/EddyVerbruggen/cordova-plugin-actionsheet";
    ActionSheet.platforms = ["Android", "Browser", "iOS", "Windows", "Windows Phone 8"];
    ActionSheet = __decorate([
        Injectable()
    ], ActionSheet);
    return ActionSheet;
}(IonicNativePlugin));
export { ActionSheet };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FjdGlvbi1zaGVldC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpR3ZDLCtCQUFpQjs7O1FBQ2hEOztXQUVHO1FBQ0gsb0JBQWMsR0FNVjtZQUNGLGlCQUFpQixFQUFFLENBQUM7WUFDcEIsZUFBZSxFQUFFLENBQUM7WUFDbEIsZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQix5QkFBeUIsRUFBRSxDQUFDO1lBQzVCLDBCQUEwQixFQUFFLENBQUM7U0FDOUIsQ0FBQzs7O0lBU0YsMEJBQUksYUFBQyxPQUE0QjtJQVVqQywwQkFBSSxhQUFDLE9BQTRCOzs7Ozs7SUFuQ3RCLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVztzQkFsR3hCO0VBa0dpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvblNoZWV0T3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxhYmVscyBmb3IgdGhlIGJ1dHRvbnMuIFVzZXMgdGhlIGluZGV4IHhcclxuICAgKi9cclxuICBidXR0b25MYWJlbHM6IHN0cmluZ1tdO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgdGl0bGUgZm9yIHRoZSBhY3Rpb25zaGVldFxyXG4gICAqL1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgc3VidGl0bGUgZm9yIHRoZSBhY3Rpb25zaGVldCAoSU9TIG9ubHkpXHJcbiAgICovXHJcbiAgc3VidGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZW1lIHRvIGJlIHVzZWQgb24gQW5kcm9pZFxyXG4gICAqL1xyXG4gIGFuZHJvaWRUaGVtZT86IDEgfCAyIHwgMyB8IDQgfCA1O1xyXG5cclxuICAvKipcclxuICAgKiBFbmFibGUgYSBjYW5jZWwgb24gQW5kcm9pZFxyXG4gICAqL1xyXG4gIGFuZHJvaWRFbmFibGVDYW5jZWxCdXR0b24/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBFbmFibGUgYSBjYW5jZWwgb24gV2luZG93cyBQaG9uZVxyXG4gICAqL1xyXG4gIHdpbnBob25lRW5hYmxlQ2FuY2VsQnV0dG9uPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGEgY2FuY2VsIGJ1dHRvbiB3aXRoIHRleHRcclxuICAgKi9cclxuICBhZGRDYW5jZWxCdXR0b25XaXRoTGFiZWw/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBhIGRlc3RydWN0aXZlIGJ1dHRvbiB3aXRoIHRleHRcclxuICAgKi9cclxuICBhZGREZXN0cnVjdGl2ZUJ1dHRvbldpdGhMYWJlbD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogT24gYW4gaVBhZCwgc2V0IHRoZSBYLFkgcG9zaXRpb25cclxuICAgKi9cclxuICBwb3NpdGlvbj86IFtudW1iZXIsIG51bWJlcl07XHJcblxyXG4gIC8qKlxyXG4gICAqIENob29zZSBpZiBkZXN0cnVjdGl2ZSBidXR0b24gd2lsbCBiZSB0aGUgbGFzdFxyXG4gICAqL1xyXG4gIGRlc3RydWN0aXZlQnV0dG9uTGFzdD86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBBY3Rpb24gU2hlZXRcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBBY3Rpb25TaGVldCBwbHVnaW4gc2hvd3MgYSBuYXRpdmUgbGlzdCBvZiBvcHRpb25zIHRoZSB1c2VyIGNhbiBjaG9vc2UgZnJvbS5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1hY3Rpb25zaGVldGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtBY3Rpb25TaGVldCBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL2NvcmRvdmEtcGx1Z2luLWFjdGlvbnNoZWV0KS5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQWN0aW9uU2hlZXQsIEFjdGlvblNoZWV0T3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYWN0aW9uLXNoZWV0L25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9uU2hlZXQ6IEFjdGlvblNoZWV0KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIGxldCBidXR0b25MYWJlbHMgPSBbJ1NoYXJlIHZpYSBGYWNlYm9vaycsICdTaGFyZSB2aWEgVHdpdHRlciddO1xyXG4gKlxyXG4gKiBjb25zdCBvcHRpb25zOiBBY3Rpb25TaGVldE9wdGlvbnMgPSB7XHJcbiAqICAgdGl0bGU6ICdXaGF0IGRvIHlvdSB3YW50IHdpdGggdGhpcyBpbWFnZT8nLFxyXG4gKiAgIHN1YnRpdGxlOiAnQ2hvb3NlIGFuIGFjdGlvbicsXHJcbiAqICAgYnV0dG9uTGFiZWxzOiBidXR0b25MYWJlbHMsXHJcbiAqICAgYWRkQ2FuY2VsQnV0dG9uV2l0aExhYmVsOiAnQ2FuY2VsJyxcclxuICogICBhZGREZXN0cnVjdGl2ZUJ1dHRvbldpdGhMYWJlbDogJ0RlbGV0ZScsXHJcbiAqICAgYW5kcm9pZFRoZW1lOiB0aGlzLmFjdGlvblNoZWV0LkFORFJPSURfVEhFTUVTLlRIRU1FX0hPTE9fREFSSyxcclxuICogICBkZXN0cnVjdGl2ZUJ1dHRvbkxhc3Q6IHRydWVcclxuICogfVxyXG4gKlxyXG4gKiB0aGlzLmFjdGlvblNoZWV0LnNob3cob3B0aW9ucykudGhlbigoYnV0dG9uSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gKiAgIGNvbnNvbGUubG9nKCdCdXR0b24gcHJlc3NlZDogJyArIGJ1dHRvbkluZGV4KTtcclxuICogfSk7XHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBBY3Rpb25TaGVldE9wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdBY3Rpb25TaGVldCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYWN0aW9uc2hlZXQnLFxyXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuYWN0aW9uc2hlZXQnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vY29yZG92YS1wbHVnaW4tYWN0aW9uc2hlZXQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFjdGlvblNoZWV0IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIHByb3BlcnR5IHRvIHNlbGVjdCBhbiBBbmRyb2lkIHRoZW1lIHZhbHVlXHJcbiAgICovXHJcbiAgQU5EUk9JRF9USEVNRVM6IHtcclxuICAgIFRIRU1FX1RSQURJVElPTkFMOiBudW1iZXI7XHJcbiAgICBUSEVNRV9IT0xPX0RBUks6IG51bWJlcjtcclxuICAgIFRIRU1FX0hPTE9fTElHSFQ6IG51bWJlcjtcclxuICAgIFRIRU1FX0RFVklDRV9ERUZBVUxUX0RBUks6IG51bWJlcjtcclxuICAgIFRIRU1FX0RFVklDRV9ERUZBVUxUX0xJR0hUOiBudW1iZXI7XHJcbiAgfSA9IHtcclxuICAgIFRIRU1FX1RSQURJVElPTkFMOiAxLFxyXG4gICAgVEhFTUVfSE9MT19EQVJLOiAyLFxyXG4gICAgVEhFTUVfSE9MT19MSUdIVDogMyxcclxuICAgIFRIRU1FX0RFVklDRV9ERUZBVUxUX0RBUks6IDQsXHJcbiAgICBUSEVNRV9ERVZJQ0VfREVGQVVMVF9MSUdIVDogNSxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBTaG93IGEgbmF0aXZlIEFjdGlvblNoZWV0IGNvbXBvbmVudC4gU2VlIGJlbG93IGZvciBvcHRpb25zLlxyXG4gICAqIEBwYXJhbSB7QWN0aW9uU2hlZXRPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyBTZWUgdGFibGUgYmVsb3dcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGluZGV4IG9mIHRoZVxyXG4gICAqICAgYnV0dG9uIHByZXNzZWQgKDEgYmFzZWQsIHNvIDEsIDIsIDMsIGV0Yy4pXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNob3cob3B0aW9ucz86IEFjdGlvblNoZWV0T3B0aW9ucyk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcm9ncmFtbWF0aWNhbGx5IGhpZGUgdGhlIG5hdGl2ZSBBY3Rpb25TaGVldFxyXG4gICAqIEBwYXJhbSAge0FjdGlvblNoZWV0T3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnMgU2VlIHRhYmxlIGJlbG93XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhY3Rpb25zaGVldCBpcyBjbG9zZWRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaGlkZShvcHRpb25zPzogQWN0aW9uU2hlZXRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19