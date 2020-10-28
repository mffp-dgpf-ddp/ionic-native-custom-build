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
var FileOpenerOriginal = /** @class */ (function (_super) {
    __extends(FileOpenerOriginal, _super);
    function FileOpenerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileOpenerOriginal.prototype.open = function (filePath, fileMIMEType) { return cordova(this, "open", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpenerOriginal.prototype.uninstall = function (packageId) { return cordova(this, "uninstall", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpenerOriginal.prototype.appIsInstalled = function (packageId) { return cordova(this, "appIsInstalled", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpenerOriginal.prototype.showOpenWithDialog = function (filePath, fileMIMEType) { return cordova(this, "showOpenWithDialog", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpenerOriginal.pluginName = "FileOpener";
    FileOpenerOriginal.plugin = "cordova-plugin-file-opener2";
    FileOpenerOriginal.pluginRef = "cordova.plugins.fileOpener2";
    FileOpenerOriginal.repo = "https://github.com/pwlin/cordova-plugin-file-opener2";
    FileOpenerOriginal.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    return FileOpenerOriginal;
}(IonicNativePlugin));
var FileOpener = new FileOpenerOriginal();
export { FileOpener };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtb3BlbmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDeEMsOEJBQWlCOzs7O0lBWS9DLHlCQUFJLGFBQUMsUUFBZ0IsRUFBRSxZQUFvQjtJQWMzQyw4QkFBUyxhQUFDLFNBQWlCO0lBYzNCLG1DQUFjLGFBQUMsU0FBaUI7SUFlaEMsdUNBQWtCLGFBQUMsUUFBZ0IsRUFBRSxZQUFvQjs7Ozs7O3FCQXpGM0Q7RUFrQ2dDLGlCQUFpQjtTQUFwQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBGaWxlIE9wZW5lclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gd2lsbCBvcGVuIGEgZmlsZSBvbiB5b3VyIGRldmljZSBmaWxlIHN5c3RlbSB3aXRoIGl0cyBkZWZhdWx0IGFwcGxpY2F0aW9uLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBGaWxlT3BlbmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlLW9wZW5lci9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGVPcGVuZXI6IEZpbGVPcGVuZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5maWxlT3BlbmVyLm9wZW4oJ3BhdGgvdG8vZmlsZS5wZGYnLCAnYXBwbGljYXRpb24vcGRmJylcclxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnRmlsZSBpcyBvcGVuZWQnKSlcclxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZygnRXJyb3Igb3BlbmluZyBmaWxlJywgZSkpO1xyXG4gKlxyXG4gKiB0aGlzLmZpbGVPcGVuZXIuc2hvd09wZW5XaXRoRGlhbG9nKCdwYXRoL3RvL2ZpbGUucGRmJywgJ2FwcGxpY2F0aW9uL3BkZicpXHJcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0ZpbGUgaXMgb3BlbmVkJykpXHJcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coJ0Vycm9yIG9wZW5pbmcgZmlsZScsIGUpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRmlsZU9wZW5lcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZS1vcGVuZXIyJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuZmlsZU9wZW5lcjInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcHdsaW4vY29yZG92YS1wbHVnaW4tZmlsZS1vcGVuZXIyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lIDgnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlsZU9wZW5lciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBPcGVuIGFuIGZpbGVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVBhdGggRmlsZSBQYXRoXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVNSU1FVHlwZSBGaWxlIE1JTUUgVHlwZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXHJcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxyXG4gICAgZXJyb3JOYW1lOiAnZXJyb3InLFxyXG4gIH0pXHJcbiAgb3BlbihmaWxlUGF0aDogc3RyaW5nLCBmaWxlTUlNRVR5cGU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVbmluc3RhbGxzIGEgcGFja2FnZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYWNrYWdlSWQgUGFja2FnZSBJRFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXHJcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxyXG4gICAgZXJyb3JOYW1lOiAnZXJyb3InLFxyXG4gIH0pXHJcbiAgdW5pbnN0YWxsKHBhY2thZ2VJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGFuIGFwcCBpcyBhbHJlYWR5IGluc3RhbGxlZFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYWNrYWdlSWQgUGFja2FnZSBJRFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXHJcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxyXG4gICAgZXJyb3JOYW1lOiAnZXJyb3InLFxyXG4gIH0pXHJcbiAgYXBwSXNJbnN0YWxsZWQocGFja2FnZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbnMgd2l0aCBzeXN0ZW0gbW9kYWwgdG8gb3BlbiBmaWxlIHdpdGggYW4gYWxyZWFkeSBpbnN0YWxsZWQgYXBwLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlUGF0aCBGaWxlIFBhdGhcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU1JTUVUeXBlIEZpbGUgTUlNRSBUeXBlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcclxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXHJcbiAgICBlcnJvck5hbWU6ICdlcnJvcicsXHJcbiAgfSlcclxuICBzaG93T3BlbldpdGhEaWFsb2coZmlsZVBhdGg6IHN0cmluZywgZmlsZU1JTUVUeXBlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=