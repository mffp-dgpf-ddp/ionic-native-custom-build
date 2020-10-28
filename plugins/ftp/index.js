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
import { Observable } from 'rxjs';
var FTPOriginal = /** @class */ (function (_super) {
    __extends(FTPOriginal, _super);
    function FTPOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FTPOriginal.prototype.connect = function (hostname, username, password) { return cordova(this, "connect", {}, arguments); };
    FTPOriginal.prototype.ls = function (path) { return cordova(this, "ls", {}, arguments); };
    FTPOriginal.prototype.mkdir = function (path) { return cordova(this, "mkdir", {}, arguments); };
    FTPOriginal.prototype.rmdir = function (path) { return cordova(this, "rmdir", {}, arguments); };
    FTPOriginal.prototype.rm = function (file) { return cordova(this, "rm", {}, arguments); };
    FTPOriginal.prototype.upload = function (localFile, remoteFile) { return cordova(this, "upload", { "observable": true }, arguments); };
    FTPOriginal.prototype.download = function (localFile, remoteFile) { return cordova(this, "download", { "observable": true }, arguments); };
    FTPOriginal.prototype.cancel = function () { return cordova(this, "cancel", {}, arguments); };
    FTPOriginal.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    FTPOriginal.pluginName = "FTP";
    FTPOriginal.plugin = "cordova-plugin-ftp";
    FTPOriginal.pluginRef = "cordova.plugin.ftp";
    FTPOriginal.repo = "https://github.com/xfally/cordova-plugin-ftp";
    FTPOriginal.platforms = ["Android", "iOS"];
    return FTPOriginal;
}(IonicNativePlugin));
var FTP = new FTPOriginal();
export { FTP };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Z0cC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQStCVCx1QkFBaUI7Ozs7SUFXeEMscUJBQU8sYUFBQyxRQUFnQixFQUFFLFFBQWdCLEVBQUUsUUFBZ0I7SUFtQjVELGdCQUFFLGFBQUMsSUFBWTtJQVdmLG1CQUFLLGFBQUMsSUFBWTtJQWFsQixtQkFBSyxhQUFDLElBQVk7SUFXbEIsZ0JBQUUsYUFBQyxJQUFZO0lBZ0JmLG9CQUFNLGFBQUMsU0FBaUIsRUFBRSxVQUFrQjtJQWdCNUMsc0JBQVEsYUFBQyxTQUFpQixFQUFFLFVBQWtCO0lBVTlDLG9CQUFNO0lBVU4sd0JBQVU7Ozs7OztjQXRKWjtFQWlDeUIsaUJBQWlCO1NBQTdCLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQG5hbWUgRlRQXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIGNvcmRvdmEgcGx1Z2luIGlzIGNyZWF0ZWQgdG8gdXNlIGZ0cCAoY2xpZW50KSBpbiB3ZWIvanMuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEZUUCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZnRwL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZlRQOiBGVFApIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5mVFAuY29ubmVjdCgnZnRwX2hvc3QnLCAnZnRwX3VzZXInLCAnZnRwX3Bhc3N3b3JkJylcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKCdMb2dpbiBzdWNjZXNzZnVsJywgcmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRlRQJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mdHAnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2luLmZ0cCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS94ZmFsbHkvY29yZG92YS1wbHVnaW4tZnRwJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRlRQIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENvbm5lY3QgdG8gb25lIGZ0cCBzZXJ2ZXIuXHJcbiAgICpcclxuICAgKiBKdXN0IG5lZWQgdG8gaW5pdCB0aGUgY29ubmVjdGlvbiBvbmNlLiBJZiBzdWNjZXNzLCB5b3UgY2FuIGRvIGFueSBmdHAgYWN0aW9ucyBsYXRlci5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaG9zdG5hbWUgVGhlIGZ0cCBzZXJ2ZXIgdXJsLiBMaWtlIGlwIHdpdGhvdXQgcHJvdG9jb2wgcHJlZml4LCBlLmcuIFwiMTkyLjE2OC4xLjFcIi5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgVGhlIGZ0cCBsb2dpbiB1c2VybmFtZS4gSWYgaXQgYW5kIGBwYXNzd29yZGAgYXJlIGFsbCBibGFuay91bmRlZmluZWQsIHRoZSBkZWZhdWx0IHVzZXJuYW1lIFwiYW5vbnltb3VzXCIgaXMgdXNlZC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgVGhlIGZ0cCBsb2dpbiBwYXNzd29yZC4gSWYgaXQgYW5kIGB1c2VybmFtZWAgYXJlIGFsbCBibGFuay91bmRlZmluZWQsIHRoZSBkZWZhdWx0IHBhc3N3b3JkIFwiYW5vbnltb3VzQFwiIGlzIHVzZWQuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBUaGUgc3VjY2VzcyBjYWxsYmFjay4gTm90aWNlOiBGb3IgaU9TLCBpZiB0cmlnZ2VyZWQsIG1lYW5zIGBpbml0YCBzdWNjZXNzLCBidXQgTk9UIG1lYW5zIHRoZSBsYXRlciBhY3Rpb24sIGUuZy4gYGxzYC4uLiBgZG93bmxvYWRgIHdpbGwgc3VjY2VzcyFcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY29ubmVjdChob3N0bmFtZTogc3RyaW5nLCB1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExpc3QgZmlsZXMgKHdpdGggaW5mbyBvZiBgbmFtZWAsIGB0eXBlYCwgYGxpbmtgLCBgc2l6ZWAsIGBtb2RpZmllZERhdGVgKSB1bmRlciBvbmUgZGlyZWN0b3J5IG9uIHRoZSBmdHAgc2VydmVyLlxyXG4gICAqIFlvdSBjYW4gZ2V0IG9uZSBmaWxlJ3MgbmFtZSB1c2luZyBgZmlsZUxpc3RbeF0ubmFtZWAgKGB4YCBpcyB0aGUgbG9jYXRpb24gaW4gYXJyYXkpLlxyXG4gICAqXHJcbiAgICogRXhwbGFpbiBrZXk6XHJcbiAgICogLSBuYW1lOiBmaWxlIG5hbWUgKHV0Zi04KS5cclxuICAgKiAtIHR5cGU6IGZpbGUgdHlwZS4gbnVtYmVyIGAwYCBtZWFucyByZWd1bGFyIGZpbGUsIGAxYCBtZWFucyBkaXJlY3RvcnksIGAyYCBtZWFucyBzeW1ib2xpYyBsaW5rLCBgLTFgIG1lYW5zIHVua25vd24gdHlwZSAobWF5YmUgYmxvY2sgZGV2LCBjaGFyIGRldi4uLikuXHJcbiAgICogLSBsaW5rOiBpZiB0aGUgZmlsZSBpcyBhIHN5bWJvbGljIGxpbmssIHRoZW4gdGhpcyBmaWVsZCBzdG9yZSBzeW1ib2xpYyBsaW5rIGluZm9ybWF0aW9uICh1dGYtOCksIGVsc2UgaXQncyBhIGJsYW5rIHN0cmluZy5cclxuICAgKiAtIHNpemU6IGZpbGUgc2l6ZSBpbiBieXRlcy5cclxuICAgKiAtIG1vZGlmaWVkRGF0ZTogbW9kaWZpZWQgZGF0ZSBvZiB0aGlzIGZpbGUuIGRhdGUgZm9ybWF0IGlzIGB5eXl5LU1NLWRkIEhIOm1tOnNzIHp6emAsIGUuZyBcIjIwMTUtMTItMDEgMjA6NDU6MDAgR01UKzhcIi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9uIHRoZSBmdHAgc2VydmVyLiBlLmcuIFwiL2FkZi8xMjMvXCIuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBscyhwYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIG9uZSBkaXJlY3Rvcnkgb24gdGhlIGZ0cCBzZXJ2ZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCBvbiB0aGUgZnRwIHNlcnZlci4gZS5nLiBcIi9hZGYvMTIzL1wiLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbWtkaXIocGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZSBvbmUgZGlyZWN0b3J5IG9uIHRoZSBmdHAgc2VydmVyLlxyXG4gICAqXHJcbiAgICogVGlwOiBBcyBtYW55IGZ0cCBzZXJ2ZXIgY291bGQgbm90IHJtIGRpciB3aGVuIGl0J3Mgbm90IGVtcHR5LCBzbyBybSBhbGwgZmlsZXMgdW5kZXIgdGhlIGRpciBhdCBmaXJzdCBpcyByZWNvbW1lbmRlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBmaWxlICh3aXRoIGZ1bGwgcGF0aCkgeW91IHdhbnQgdG8gZGVsZXRlLiBlLmcuIFwiL2FkZi8xMjMvbmV3RGlyL215RmlsZVwiLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcm1kaXIocGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZSBvbmUgZmlsZSBvbiB0aGUgZnRwIHNlcnZlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFRoZSBmaWxlICh3aXRoIGZ1bGwgcGF0aCkgeW91IHdhbnQgdG8gZGVsZXRlLiBlLmcuIFwiL2FkZi8xMjMvbmV3RGlyL215RmlsZVwiLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcm0oZmlsZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwbG9hZCBvbmUgbG9jYWwgZmlsZSB0byB0aGUgZnRwIHNlcnZlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbEZpbGUgVGhlIGZpbGUgKHdpdGggZnVsbCBwYXRoKSB5b3Ugd2FudCB0byB1cGxvYWQuIGUuZy4gXCIvbG9jYWwvcGF0aC90by9sb2NhbEZpbGVcIi5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVtb3RlRmlsZSBUaGUgZmlsZSAod2l0aCBmdWxsIHBhdGgpIHlvdSB3YW50IHRvIGxvY2F0ZWQgb24gdGhlIGZ0cCBzZXJ2ZXIuIGUuZy4gXCIvYWRmLzEyMy9uZXdEaXIvcmVtb3RlRmlsZVwiLlxyXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlLlxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgSXQgd2lsbCBiZSB0cmlnZ2VyZWQgbWFueSB0aW1lcyBhY2NvcmRpbmcgdGhlIGZpbGUncyBzaXplLlxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGFyZyBgMGAsIGAwLjF4eGAsIGAwLjJ4eGAgLi4uIGAxYCBtZWFucyB0aGUgdXBsb2FkIHBlcmNlbnQuIFdoZW4gaXQgcmVhY2ggYDFgLCBtZWFucyBzdWNjZXNzLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgfSlcclxuICB1cGxvYWQobG9jYWxGaWxlOiBzdHJpbmcsIHJlbW90ZUZpbGU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEb3dubG9hZCBvbmUgcmVtb3RlIGZpbGUgb24gdGhlIGZ0cCBzZXJ2ZXIgdG8gbG9jYWwgcGF0aC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbEZpbGUgVGhlIGZpbGUgKHdpdGggZnVsbCBwYXRoKSB5b3Ugd2FudCB0byB1cGxvYWQuIGUuZy4gXCIvbG9jYWwvcGF0aC90by9sb2NhbEZpbGVcIi5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVtb3RlRmlsZSBUaGUgZmlsZSAod2l0aCBmdWxsIHBhdGgpIHlvdSB3YW50IHRvIGxvY2F0ZWQgb24gdGhlIGZ0cCBzZXJ2ZXIuIGUuZy4gXCIvYWRmLzEyMy9uZXdEaXIvcmVtb3RlRmlsZVwiLlxyXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlLlxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgSXQgd2lsbCBiZSB0cmlnZ2VyZWQgbWFueSB0aW1lcyBhY2NvcmRpbmcgdGhlIGZpbGUncyBzaXplLlxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGFyZyBgMGAsIGAwLjF4eGAsIGAwLjJ4eGAgLi4uIGAxYCBtZWFucyB0aGUgdXBsb2FkIHBlcmNlbnQuIFdoZW4gaXQgcmVhY2ggYDFgLCBtZWFucyBzdWNjZXNzLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgfSlcclxuICBkb3dubG9hZChsb2NhbEZpbGU6IHN0cmluZywgcmVtb3RlRmlsZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbmNlbCBhbGwgcmVxdWVzdHMuIEFsd2F5cyBzdWNjZXNzLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjYW5jZWwoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc2Nvbm5lY3QgZnJvbSBmdHAgc2VydmVyLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBkaXNjb25uZWN0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==