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
var TealiumAdIdentifierOriginal = /** @class */ (function (_super) {
    __extends(TealiumAdIdentifierOriginal, _super);
    function TealiumAdIdentifierOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumAdIdentifierOriginal.prototype.setPersistent = function (instanceName) { return cordova(this, "setPersistent", {}, arguments); };
    TealiumAdIdentifierOriginal.prototype.setVolatile = function (instanceName) { return cordova(this, "setVolatile", {}, arguments); };
    TealiumAdIdentifierOriginal.pluginName = "TealiumAdIdentifier";
    TealiumAdIdentifierOriginal.plugin = "tealium-cordova-adidentifier";
    TealiumAdIdentifierOriginal.pluginRef = "window.tealiumAdIdentifier";
    TealiumAdIdentifierOriginal.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumAdIdentifierOriginal.platforms = ["Android", "iOS"];
    TealiumAdIdentifierOriginal.install = "";
    return TealiumAdIdentifierOriginal;
}(IonicNativePlugin));
var TealiumAdIdentifier = new TealiumAdIdentifierOriginal();
export { TealiumAdIdentifier };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RlYWxpdW0tYWRpZGVudGlmaWVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW1DL0IsdUNBQWlCOzs7O0lBT3hELDJDQUFhLGFBQUMsWUFBb0I7SUFVbEMseUNBQVcsYUFBQyxZQUFvQjs7Ozs7Ozs4QkFwRGxDO0VBbUN5QyxpQkFBaUI7U0FBN0MsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAcGFpZFxyXG4gKiBAbmFtZSBUZWFsaXVtQWRJZGVudGlmaWVyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIG1vZHVsZSBkZXBlbmRzIG9uIHRoZSBbVGVhbGl1bSBDb3Jkb3ZhIFBsdWdpbl0oaHR0cHM6Ly9naXRodWIuY29tL3RlYWxpdW0vY29yZG92YS1wbHVnaW4pLiBXaXRob3V0IGl0LCB0aGlzIG1vZHVsZSB3aWxsIG5vdCBkbyBhbnl0aGluZy5cclxuICogTWFrZXMgdGhlIElERkEgYW5kIEdvb2dsZSBBZCBJZGVudGlmaWVyIGF2YWlsYWJsZSBpbiB0aGUgVGVhbGl1bSBkYXRhIGxheWVyLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgXHJcbiAqIGltcG9ydCB7IFRlYWxpdW1BZElkZW50aWZpZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RlYWxpdW0tYWRpZGVudGlmaWVyL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYWRJZGVudGlmaWVyOiBUZWFsaXVtQWRJZGVudGlmaWVyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuYWRJZGVudGlmaWVyLnNldFBlcnNpc3RlbnQoXCJtYWluXCIpO1xyXG4gKiB0aGlzLmFkSWRlbnRpZmllci5zZXRWb2xhdGlsZShcIm1haW5cIik7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdUZWFsaXVtQWRJZGVudGlmaWVyJyxcclxuICBwbHVnaW46ICd0ZWFsaXVtLWNvcmRvdmEtYWRpZGVudGlmaWVyJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnd2luZG93LnRlYWxpdW1BZElkZW50aWZpZXInLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UZWFsaXVtL2NvcmRvdmEtcGx1Z2luJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRlYWxpdW1BZElkZW50aWZpZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBzdG9yZXMgdGhlIGFkIGlkZW50aWZpZXIgaW5mb3JtYXRpb24gYXMgcGVyc2lzdGVudCBkYXRhXHJcbiAgICogQHBhcmFtIGluc3RhbmNlTmFtZSB7c3RyaW5nfSBZb3VyIGFyYml0cmFyeSBUZWFsaXVtIGluc3RhbmNlIG5hbWUgcHJvdmlkZWQgYXQgaW5pdCB0aW1lXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2V0UGVyc2lzdGVudChpbnN0YW5jZU5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIHN0b3JlcyB0aGUgYWQgaWRlbnRpZmllciBpbmZvcm1hdGlvbiBhcyB2b2xhdGlsZSBkYXRhXHJcbiAgICogQHBhcmFtIGluc3RhbmNlTmFtZSB7c3RyaW5nfSBZb3VyIGFyYml0cmFyeSBUZWFsaXVtIGluc3RhbmNlIG5hbWUgcHJvdmlkZWQgYXQgaW5pdCB0aW1lXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2V0Vm9sYXRpbGUoaW5zdGFuY2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=