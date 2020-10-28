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
var FileChooserOriginal = /** @class */ (function (_super) {
    __extends(FileChooserOriginal, _super);
    function FileChooserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileChooserOriginal.prototype.open = function (options) { return cordova(this, "open", {}, arguments); };
    FileChooserOriginal.pluginName = "FileChooser";
    FileChooserOriginal.plugin = "cordova-plugin-filechooser";
    FileChooserOriginal.pluginRef = "fileChooser";
    FileChooserOriginal.repo = "https://github.com/ihadeed/cordova-filechooser";
    FileChooserOriginal.platforms = ["Android"];
    return FileChooserOriginal;
}(IonicNativePlugin));
var FileChooser = new FileChooserOriginal();
export { FileChooser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtY2hvb3Nlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF1Q3ZDLCtCQUFpQjs7OztJQU9oRCwwQkFBSSxhQUFDLE9BQTRCOzs7Ozs7c0JBL0NuQztFQXdDaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWxlQ2hvb3Nlck9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIGNvbW1hIHNlcGVyYXRlZCBtaW1lIHR5cGVzIHRvIGZpbHRlciBmaWxlcy5cclxuICAgKi9cclxuICBtaW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBGaWxlIENob29zZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE9wZW5zIHRoZSBmaWxlIHBpY2tlciBvbiBBbmRyb2lkIGZvciB0aGUgdXNlciB0byBzZWxlY3QgYSBmaWxlLCByZXR1cm5zIGEgZmlsZSBVUkkuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEZpbGVDaG9vc2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlLWNob29zZXIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlQ2hvb3NlcjogRmlsZUNob29zZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5maWxlQ2hvb3Nlci5vcGVuKClcclxuICogICAudGhlbih1cmkgPT4gY29uc29sZS5sb2codXJpKSlcclxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBGaWxlQ2hvb3Nlck9wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdGaWxlQ2hvb3NlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZWNob29zZXInLFxyXG4gIHBsdWdpblJlZjogJ2ZpbGVDaG9vc2VyJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2loYWRlZWQvY29yZG92YS1maWxlY2hvb3NlcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlsZUNob29zZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogT3BlbiBhIGZpbGVcclxuICAgKiBAcGFyYW0ge0ZpbGVDaG9vc2VyT3B0aW9uc30gW29wdGlvbnNdICBPcHRpb25hbCBwYXJhbWV0ZXIsIGRlZmF1bHRzIHRvICcnLiBGaWx0ZXJzIHRoZSBmaWxlIHNlbGVjdGlvbiBsaXN0IGFjY29yZGluZyB0byBtaW1lIHR5cGVzXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgb3BlbihvcHRpb25zPzogRmlsZUNob29zZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19