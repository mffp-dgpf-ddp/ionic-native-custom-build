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
var Base64Original = /** @class */ (function (_super) {
    __extends(Base64Original, _super);
    function Base64Original() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Base64Original.prototype.encodeFile = function (filePath) { return cordova(this, "encodeFile", {}, arguments); };
    Base64Original.pluginName = "Base64";
    Base64Original.plugin = "com-badrit-base64";
    Base64Original.pluginRef = "plugins.Base64";
    Base64Original.repo = "https://github.com/hazemhagrass/phonegap-base64";
    Base64Original.platforms = ["Android", "iOS"];
    return Base64Original;
}(IonicNativePlugin));
var Base64 = new Base64Original();
export { Base64 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jhc2U2NC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpQzVDLDBCQUFpQjs7OztJQU8zQywyQkFBVSxhQUFDLFFBQWdCOzs7Ozs7aUJBekM3QjtFQWtDNEIsaUJBQWlCO1NBQWhDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBiZXRhXHJcbiAqIEBuYW1lIEJhc2U2NFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBQbHVnaW4gaXMgdXNlZCB0byBlbmNvZGUgYmFzZTY0IG9mIGFueSBmaWxlLCBpdCB1c2VzIGpzIGNvZGUgZm9yIGlPUywgYnV0IGluIGNhc2Ugb2YgYW5kcm9pZCBpdCB1c2VzIG5hdGl2ZSBjb2RlIHRvIGhhbmRsZSBhbmRyb2lkIHZlcnNpb25zIGxvd2VyIHRoYW4gdi4zXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEJhc2U2NCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFzZTY0L25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFzZTY0OiBCYXNlNjQpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogbGV0IGZpbGVQYXRoOiBzdHJpbmcgPSAnZmlsZTovLy8uLi4nO1xyXG4gKiB0aGlzLmJhc2U2NC5lbmNvZGVGaWxlKGZpbGVQYXRoKS50aGVuKChiYXNlNjRGaWxlOiBzdHJpbmcpID0+IHtcclxuICogICBjb25zb2xlLmxvZyhiYXNlNjRGaWxlKTtcclxuICogfSwgKGVycikgPT4ge1xyXG4gKiAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdCYXNlNjQnLFxyXG4gIHBsdWdpbjogJ2NvbS1iYWRyaXQtYmFzZTY0JyxcclxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLkJhc2U2NCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9oYXplbWhhZ3Jhc3MvcGhvbmVnYXAtYmFzZTY0JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFzZTY0IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gZW5jb2RlcyBiYXNlNjQgb2YgYW55IGZpbGVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVBhdGggQWJzb2x1dGUgZmlsZSBwYXRoXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGZpbGUgaXMgc3VjY2Vzc2Z1bGx5IGVuY29kZWRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZW5jb2RlRmlsZShmaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19