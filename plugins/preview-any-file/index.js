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
var PreviewAnyFileOriginal = /** @class */ (function (_super) {
    __extends(PreviewAnyFileOriginal, _super);
    function PreviewAnyFileOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreviewAnyFileOriginal.prototype.preview = function (url) { return cordova(this, "preview", {}, arguments); };
    PreviewAnyFileOriginal.pluginName = "PreviewAnyFile";
    PreviewAnyFileOriginal.plugin = "cordova-plugin-preview-any-file";
    PreviewAnyFileOriginal.pluginRef = "PreviewAnyFile";
    PreviewAnyFileOriginal.repo = "https://github.com/mostafa-mansour1/previewAnyFile";
    PreviewAnyFileOriginal.install = "";
    PreviewAnyFileOriginal.installVariables = [];
    PreviewAnyFileOriginal.platforms = ["Android", "iOS"];
    return PreviewAnyFileOriginal;
}(IonicNativePlugin));
var PreviewAnyFile = new PreviewAnyFileOriginal();
export { PreviewAnyFile };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3ByZXZpZXctYW55LWZpbGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBa0NwQyxrQ0FBaUI7Ozs7SUFPbkQsZ0NBQU8sYUFBQyxHQUFXOzs7Ozs7Ozt5QkExQ3JCO0VBbUNvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbi8qKlxyXG4gKiBAbmFtZSBQcmV2aWV3QW55RmlsZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogV2hhdGV2ZXIgdGhlIGZpbGUgaXMgUERGIGRvY3VtZW50LCBXb3JkIGRvY3VtZW50LCBFeGNlbCwgb2ZmaWNlIGRvY3VtZW50LHppcCBhcmNoaXZlIGZpbGUsIGltYWdlLCB0ZXh0LCBodG1sIG9yIGFueXRoaW5nIGVsc2UsIHlvdSBjYW4gcGVyZm9ybSBhIHByZXZpZXcgYnkgdGhpcyBjb3Jkb3ZhIFBsdWdpbiB0byBwcmV2aWV3IGFueSBmaWxlIGluIG5hdGl2ZSBtb2RlIGJ5IHByb3ZpZGluZyB0aGUgbG9jYWwgb3IgZXh0ZXJuYWwgVVJMLlxyXG4gKlxyXG4gKiAgUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1wcmV2aWV3LWFueS1maWxlYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW3ByZXZpZXdBbnlGaWxlIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vbW9zdGFmYS1tYW5zb3VyMS9wcmV2aWV3QW55RmlsZSkuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFByZXZpZXdBbnlGaWxlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9wcmV2aWV3LWFueS1maWxlL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJldmlld0FueUZpbGU6IFByZXZpZXdBbnlGaWxlKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMucHJldmlld0FueUZpbGUucHJldmlldygnZmlsZTovL2ZpbGVwYXRoLmV4dCcpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdQcmV2aWV3QW55RmlsZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcHJldmlldy1hbnktZmlsZScsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ1ByZXZpZXdBbnlGaWxlJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbW9zdGFmYS1tYW5zb3VyMS9wcmV2aWV3QW55RmlsZScsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cclxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcmV2aWV3QW55RmlsZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiB0aGlzIGZ1bmN0aW9uIHJldHVybiBTVUNDRVNTIGluIHN1Y2Nlc3MgY2FsbGJhY2sgaWYgdGhlIGZpbGUgc3VjY2Vzc2Z1bGx5IG9wZW5lZCwgaWYgdGhlIGNvbnRlbnQgaXMgYmFzZTY0IHlvdSBoYXZlIHRvIHdyaXRlIGl0IGludG8gZmlsZSBieSBjb3Jkb3ZhLXBsdWdpbi1maWxlXHJcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBmdWxsIGFic29sdXRlIFVSTCBmb3IgdGhlIGZpbGUsIGlmIHRoZSBwYXRoIGlzIGNvbnRlbnQ6Ly8geW91IG5lZWQgdG8gcmVzb2x2ZSB0aGUgbmF0aXZlIHVybCwgaWYgdGhlIHBhdGggaXMgaHR0cHM6Ly8gaXQgbWF5IG5vdCB3b3JrIGluIGFuZHJvaWRcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIGZpbGUgb3BlbmVkIHJlamVjdCBpZiBub3Q7XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHByZXZpZXcodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=