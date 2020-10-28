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
var FilePathOriginal = /** @class */ (function (_super) {
    __extends(FilePathOriginal, _super);
    function FilePathOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilePathOriginal.prototype.resolveNativePath = function (path) { return cordova(this, "resolveNativePath", {}, arguments); };
    FilePathOriginal.pluginName = "FilePath";
    FilePathOriginal.plugin = "cordova-plugin-filepath";
    FilePathOriginal.pluginRef = "window.FilePath";
    FilePathOriginal.repo = "https://github.com/hiddentao/cordova-plugin-filepath";
    FilePathOriginal.platforms = ["Android"];
    return FilePathOriginal;
}(IonicNativePlugin));
var FilePath = new FilePathOriginal();
export { FilePath };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtcGF0aC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpQzFDLDRCQUFpQjs7OztJQU83QyxvQ0FBaUIsYUFBQyxJQUFZOzs7Ozs7bUJBekNoQztFQWtDOEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBGaWxlIFBhdGhcclxuICogQHByZW1pZXIgZmlsZXN5c3RlbVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byByZXNvbHZlIHRoZSBuYXRpdmUgZmlsZXN5c3RlbSBwYXRoIGZvciBBbmRyb2lkIGNvbnRlbnQgVVJJcyBhbmQgaXMgYmFzZWQgb24gY29kZSBpbiB0aGUgYUZpbGVDaG9vc2VyIGxpYnJhcnkuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEZpbGVQYXRoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlLXBhdGgvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlUGF0aDogRmlsZVBhdGgpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5maWxlUGF0aC5yZXNvbHZlTmF0aXZlUGF0aChwYXRoKVxyXG4gKiAgIC50aGVuKGZpbGVQYXRoID0+IGNvbnNvbGUubG9nKGZpbGVQYXRoKSlcclxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdGaWxlUGF0aCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZXBhdGgnLFxyXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5GaWxlUGF0aCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9oaWRkZW50YW8vY29yZG92YS1wbHVnaW4tZmlsZXBhdGgnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpbGVQYXRoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFJlc29sdmUgbmF0aXZlIHBhdGggZm9yIGdpdmVuIGNvbnRlbnQgVVJML3BhdGguXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggIENvbnRlbnQgVVJML3BhdGguXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVzb2x2ZU5hdGl2ZVBhdGgocGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19