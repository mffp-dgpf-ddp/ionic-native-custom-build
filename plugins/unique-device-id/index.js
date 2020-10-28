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
var UniqueDeviceIDOriginal = /** @class */ (function (_super) {
    __extends(UniqueDeviceIDOriginal, _super);
    function UniqueDeviceIDOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UniqueDeviceIDOriginal.prototype.get = function () { return cordova(this, "get", {}, arguments); };
    UniqueDeviceIDOriginal.pluginName = "UniqueDeviceID";
    UniqueDeviceIDOriginal.plugin = "cordova-plugin-uniquedeviceid";
    UniqueDeviceIDOriginal.pluginRef = "window.plugins.uniqueDeviceID";
    UniqueDeviceIDOriginal.repo = "https://github.com/Paldom/UniqueDeviceID";
    UniqueDeviceIDOriginal.platforms = ["Android", "iOS", "Windows Phone 8"];
    return UniqueDeviceIDOriginal;
}(IonicNativePlugin));
var UniqueDeviceID = new UniqueDeviceIDOriginal();
export { UniqueDeviceID };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3VuaXF1ZS1kZXZpY2UtaWQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBOEJwQyxrQ0FBaUI7Ozs7SUFNbkQsNEJBQUc7Ozs7Ozt5QkFwQ0w7RUE4Qm9DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBVbmlxdWUgRGV2aWNlIElEXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBwcm9kdWNlcyBhIHVuaXF1ZSwgY3Jvc3MtaW5zdGFsbCwgYXBwLXNwZWNpZmljIGRldmljZSBpZC5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgVW5pcXVlRGV2aWNlSUQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3VuaXF1ZS1kZXZpY2UtaWQvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB1bmlxdWVEZXZpY2VJRDogVW5pcXVlRGV2aWNlSUQpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy51bmlxdWVEZXZpY2VJRC5nZXQoKVxyXG4gKiAgIC50aGVuKCh1dWlkOiBhbnkpID0+IGNvbnNvbGUubG9nKHV1aWQpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnVW5pcXVlRGV2aWNlSUQnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXVuaXF1ZWRldmljZWlkJyxcclxuICBwbHVnaW5SZWY6ICd3aW5kb3cucGx1Z2lucy51bmlxdWVEZXZpY2VJRCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9QYWxkb20vVW5pcXVlRGV2aWNlSUQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVW5pcXVlRGV2aWNlSUQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogR2V0cyBhIHVuaXF1ZSwgY3Jvc3MtaW5zdGFsbCwgYXBwLXNwZWNpZmljIGRldmljZSBpZC5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19