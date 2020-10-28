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
var FullScreenImageOriginal = /** @class */ (function (_super) {
    __extends(FullScreenImageOriginal, _super);
    function FullScreenImageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullScreenImageOriginal.prototype.showImageURL = function (url) { return cordova(this, "showImageURL", { "sync": true }, arguments); };
    FullScreenImageOriginal.prototype.showImageBase64 = function (base64String, name, type) { return cordova(this, "showImageBase64", { "sync": true }, arguments); };
    FullScreenImageOriginal.pluginName = "FullScreenImage";
    FullScreenImageOriginal.plugin = "es.keensoft.fullscreenimage";
    FullScreenImageOriginal.pluginRef = "FullScreenImage";
    FullScreenImageOriginal.repo = "https://github.com/keensoft/FullScreenImage-Cordova-Plugin";
    FullScreenImageOriginal.platforms = ["Android", "iOS"];
    return FullScreenImageOriginal;
}(IonicNativePlugin));
var FullScreenImage = new FullScreenImageOriginal();
export { FullScreenImage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Z1bGwtc2NyZWVuLWltYWdlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW9DbkMsbUNBQWlCOzs7O0lBT3BELHNDQUFZLGFBQUMsR0FBVztJQVl4Qix5Q0FBZSxhQUFDLFlBQW9CLEVBQUUsSUFBYSxFQUFFLElBQWE7Ozs7OzswQkF4RHBFO0VBcUNxQyxpQkFBaUI7U0FBekMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgRnVsbCBTY3JlZW4gSW1hZ2VcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEZ1bGxTY3JlZW5JbWFnZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZnVsbC1zY3JlZW4taW1hZ2UnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZ1bGxTY3JlZW5JbWFnZTogRnVsbFNjcmVlbkltYWdlKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuZnVsbFNjcmVlbkltYWdlLnNob3dJbWFnZVVSTCgnL2Fzc2V0cy8uLi4nKVxyXG4gKiAgIC50aGVuKChkYXRhOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmZ1bGxTY3JlZW5JbWFnZS5zaG93SW1hZ2VCYXNlNjQoJ2lWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUEuLi4nKVxyXG4gKiAgIC50aGVuKChkYXRhOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0Z1bGxTY3JlZW5JbWFnZScsXHJcbiAgcGx1Z2luOiAnZXMua2VlbnNvZnQuZnVsbHNjcmVlbmltYWdlJyxcclxuICBwbHVnaW5SZWY6ICdGdWxsU2NyZWVuSW1hZ2UnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20va2VlbnNvZnQvRnVsbFNjcmVlbkltYWdlLUNvcmRvdmEtUGx1Z2luJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRnVsbFNjcmVlbkltYWdlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIE9wZW5zIGFuIGltYWdlIGZyb20gYSBVUkwgb3IgcGF0aFxyXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gdXJsIG9yIGltYWdlIHBhdGhcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc2hvd0ltYWdlVVJMKHVybDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW5zIGFuIGltYWdlIGZyb20gYSBiYXNlNjQgc3RyaW5nXHJcbiAgICogQHBhcmFtIGJhc2U2NFN0cmluZyB7c3RyaW5nfSBiYXNlNjQgc3RyaW5nXHJcbiAgICogQHBhcmFtIG5hbWU/IHtzdHJpbmd9IGltYWdlIG5hbWVcclxuICAgKiBAcGFyYW0gdHlwZT8ge3N0cmluZ30gaW1hZ2UgZXh0ZW5zaW9uXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNob3dJbWFnZUJhc2U2NChiYXNlNjRTdHJpbmc6IHN0cmluZywgbmFtZT86IHN0cmluZywgdHlwZT86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==