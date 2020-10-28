import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var SqliteDbCopy = /** @class */ (function (_super) {
    __extends(SqliteDbCopy, _super);
    function SqliteDbCopy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SqliteDbCopy.prototype.copy = function (dbname, location) { return cordova(this, "copy", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    SqliteDbCopy.prototype.checkDbOnStorage = function (dbname, source) { return cordova(this, "checkDbOnStorage", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    SqliteDbCopy.prototype.copyDbFromStorage = function (dbname, location, source, deleteolddb) { return cordova(this, "copyDbFromStorage", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SqliteDbCopy.prototype.copyDbToStorage = function (dbname, location, destination, overwrite) { return cordova(this, "copyDbToStorage", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SqliteDbCopy.prototype.remove = function (dbname, location) { return cordova(this, "remove", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    SqliteDbCopy.pluginName = "cordova-plugin-dbcopy";
    SqliteDbCopy.plugin = "cordova-plugin-dbcopy";
    SqliteDbCopy.pluginRef = "window.plugins.sqlDB";
    SqliteDbCopy.repo = "https://github.com/an-rahulpandey/cordova-plugin-dbcopy";
    SqliteDbCopy.platforms = ["Android", "iOS"];
    SqliteDbCopy = __decorate([
        Injectable()
    ], SqliteDbCopy);
    return SqliteDbCopy;
}(IonicNativePlugin));
export { SqliteDbCopy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NxbGl0ZS1kYi1jb3B5L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQStCdEMsZ0NBQWlCOzs7O0lBaUJqRCwyQkFBSSxhQUFDLE1BQWMsRUFBRSxRQUFnQjtJQWFyQyx1Q0FBZ0IsYUFBQyxNQUFjLEVBQUUsTUFBYztJQXFCL0Msd0NBQWlCLGFBQUMsTUFBYyxFQUFFLFFBQWdCLEVBQUUsTUFBYyxFQUFFLFdBQW9CO0lBcUJ4RixzQ0FBZSxhQUFDLE1BQWMsRUFBRSxRQUFnQixFQUFFLFdBQW1CLEVBQUUsU0FBa0I7SUFtQnpGLDZCQUFNLGFBQUMsTUFBYyxFQUFFLFFBQWdCOzs7Ozs7SUEzRjVCLFlBQVk7UUFEeEIsVUFBVSxFQUFFO09BQ0EsWUFBWTt1QkFoQ3pCO0VBZ0NrQyxpQkFBaUI7U0FBdEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgU3FsaXRlIERiIENvcHlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNxbGl0ZURiQ29weSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3FsaXRlLWRiLWNvcHkvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzcWxpdGVEYkNvcHk6IFNxbGl0ZURiQ29weSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLnNxbGl0ZURiQ29weS5jb3B5KCdzYW1wbGUuZGInLCAwKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnY29yZG92YS1wbHVnaW4tZGJjb3B5JyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kYmNvcHknLFxyXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5wbHVnaW5zLnNxbERCJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuLXJhaHVscGFuZGV5L2NvcmRvdmEtcGx1Z2luLWRiY29weScsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNxbGl0ZURiQ29weSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDb3B5IGRhdGFiYXNlIGZyb20gd3d3IGRpcmVjdG9yeSB0byBkZXZpY2UgU1FMaXRlIERCIGxvY2F0aW9uXHJcbiAgICogKGZvciBpb3Mgb25seSwgdXNlIDAgZm9yIEFuZHJvaWQpXHJcbiAgICogbG9jYXRpb24gPSAwOyAvLyAoRGlzYWJsZSBpQ2xvdWQgQmFja3VwKSBJZiBzZXQgd2lsbCBjb3B5IHRoZSBkYXRhYmFzZSB0byBMaWJyYXJ5L0xvY2FsRGF0YWJhc2UuIFRoZSBkYXRhYmFzZSB3aWxsIG5vdCBiZSBzeW5jZWQgYnkgdGhlIGlDbG91ZCBCYWNrdXAuXHJcbiAgICogb3JcclxuICAgKiBsb2NhdGlvbiA9IDE7IC8vIElmIHNldCB3aWxsIGNvcHkgdGhlIGRhdGFiYXNlIHRvIExpYnJhcnkgZm9sZGVyIGluc3RlYWQgb2YgRG9jdW1lbnRzIGZvbGRlci5cclxuICAgKiBvclxyXG4gICAqIGxvY2F0aW9uID0gMjsgLy8gSXQgd2lsbCBjb3B5IHRoZSBkYXRhYmFzZSBpbiB0aGUgZGVmYXVsdCBTUUxpdGUgRGF0YWJhc2UgZGlyZWN0b3J5LiBUaGlzIGlzIHRoZSBkZWZhdWx0IGxvY2F0aW9uIGZvciBkYXRhYmFzZVxyXG4gICAqIEBwYXJhbSBkYm5hbWUge3N0cmluZ30gRGF0YWJhc2UgZmlsZSBuYW1lIGF2YWlsYWJsZSBpbiB3d3cgZGlyZXRvcnkgd2l0aCBleHRlbnNpb24uVGhlIHBsdWdpbiB3aWxsIGxvb2sgZm9yIGFuZCBjb3B5IHRoZSBmaWxlIGFjY29yZGluZyB0byB0aGUgZmlsZW5hbWUgcHJvdmlkZWQgaGVyZS4gQW5kIHRoZSBzYW1lIGZpbGUgbmFtZSBzaG91bGQgYmUgdXNlZCB3aGlsZSBvcGVuaW5nIHRoZSBkYXRhYmFzZSB2aWEgU1FMaXRlUGx1Z2luXHJcbiAgICogQHBhcmFtIGxvY2F0aW9uIHtudW1iZXJ9IExvY2F0aW9uIHdoZXJlIHRvIGNvcHkgdGhlIGRhdGFiYXNlIGZvciBhcHAgKG9ubHkgYXBwbGljYWJsZSBmb3IgaW9zKS5Gb3IgQW5kcm9pZCBwYXNzIDAuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDIsXHJcbiAgICBlcnJvckluZGV4OiAzLFxyXG4gIH0pXHJcbiAgY29weShkYm5hbWU6IHN0cmluZywgbG9jYXRpb246IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGRhdGFiYXNlIGlzIGF2YWlsYWJsZSBhdCBleHRlcm5hbCBzdG9yYWdlLiBVc2VmdWwgd2hlbiB0cnlpbmcgdG8gY29weWluZyB0aGUgZGF0YWJhc2UgZnJvbSBkZXZpY2Ugc2RjYXJkLlxyXG4gICAqIEBwYXJhbSBkYm5hbWUge3N0cmluZ30gTmFtZSBvZiB0aGUgZGF0YWJhc2UgZmlsZSB3aGljaCBpcyBhdmFpbGFibGUgb24gZXh0ZXJuYWwgb3IgaW50ZW5yYWwgc3RvcmFnZVxyXG4gICAqIEBwYXJhbSBzb3VyY2Uge3N0cmluZ30gRnVsbCBuYXRpdmUgcGF0aCBmb3IgdGhlIGZvbGRlciBpbiB3aGljaCBkYiBmaWxlIGlzIHByZXNlbnQuIFRoZSBcIi9cIiBtdXN0IGJlIGFkZGVkIGF0IHRoZSBlbmQgb2YgcGF0aC4gRm9yLmVnLiAvc2RjYXJkL215ZGIvLiBTaG91bGQgbm90IGluY2x1ZGUgZGJuYW1lLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDIsXHJcbiAgICBlcnJvckluZGV4OiAzLFxyXG4gIH0pXHJcbiAgY2hlY2tEYk9uU3RvcmFnZShkYm5hbWU6IHN0cmluZywgc291cmNlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBDb3B5IGRhdGFiYXNlIHdoaWNoIGlzIGF2YWlsYWJsZSBvbiB0aGUgZGV2aWNlIGV4dGVybmFsL2ludGVybmFsIHN0b3JhZ2UgdG8gYXBwIGRlZmF1bHQgZGIgbG9jYXRpb25cclxuICAgKiAoZm9yIGlvcyBvbmx5LCB1c2UgMCBmb3IgQW5kcm9pZClcclxuICAgKiBsb2NhdGlvbiA9IDA7IC8vIChEaXNhYmxlIGlDbG91ZCBCYWNrdXApIElmIHNldCB3aWxsIGNvcHkgdGhlIGRhdGFiYXNlIHRvIExpYnJhcnkvTG9jYWxEYXRhYmFzZS4gVGhlIGRhdGFiYXNlIHdpbGwgbm90IGJlIHN5bmNlZCBieSB0aGUgaUNsb3VkIEJhY2t1cC5cclxuICAgKiBvclxyXG4gICAqIGxvY2F0aW9uID0gMTsgLy8gSWYgc2V0IHdpbGwgY29weSB0aGUgZGF0YWJhc2UgdG8gTGlicmFyeSBmb2xkZXIgaW5zdGVhZCBvZiBEb2N1bWVudHMgZm9sZGVyLlxyXG4gICAqIG9yXHJcbiAgICogbG9jYXRpb24gPSAyOyAvLyBJdCB3aWxsIGNvcHkgdGhlIGRhdGFiYXNlIGluIHRoZSBkZWZhdWx0IFNRTGl0ZSBEYXRhYmFzZSBkaXJlY3RvcnkuIFRoaXMgaXMgdGhlIGRlZmF1bHQgbG9jYXRpb24gZm9yIGRhdGFiYXNlXHJcbiAgICogQHBhcmFtIGRibmFtZSB7c3RyaW5nfSBJcyB0aGUgbmFtZSBvZiB0aGUgZGF0YWJhc2UgeW91IHdhbnQgdG8gY29weS4gVGhlIHBsdWdpbiB3aWxsIGxvb2sgZm9yIGFuZCBjb3B5IHRoZSBmaWxlIGFjY29yZGluZyB0byB0aGUgZmlsZW5hbWUgcHJvdmlkZWQgaGVyZS4gQW5kIHRoZSBzYW1lIGZpbGUgbmFtZSBzaG91bGQgYmUgdXNlZCB3aGlsZSBvcGVuaW5nIHRoZSBkYXRhYmFzZSB2aWEgU1FMaXRlUGx1Z2luXHJcbiAgICogQHBhcmFtIGxvY2F0aW9uIHtudW1iZXJ9IExvY2F0aW9uIHdoZXJlIHRvIGNvcHkgdGhlIGRhdGFiYXNlIGZvciBhcHAgKG9ubHkgYXBwbGljYWJsZSBmb3IgaW9zKS4gRm9yIEFuZHJvaWQgcGFzcyAwLlxyXG4gICAqIEBwYXJhbSBzb3VyY2Uge3N0cmluZ30gU291cmNlIEZpbGUgbG9jYXRpb24gbGlrZSAvc2RjYXJkL215ZGIvZGIuZGIuIFBsZWFzZSBwcm92aWRlIGEgdmFsaWQgZXhpc3RpbmcgbG9jYXRpb24gYW5kIHRoZSBkYm5hbWUgc2hvdWxkIGJlIHByZXNlbnQgaW4gdGhlIHBhdGguXHJcbiAgICogQHBhcmFtIGRlbGV0ZW9sZGRiIHtib29sZWFufSBBIGJvb2xlYW4gdmFsdWUgaWYgc2V0IHRvIHRydWUsIHdpbGwgZGVsZXRlIHRoZSBleGlzdGluZyBkYiBmcm9tIHRoZSBsb2NhbCBhcHAgZGF0YWJhc2UgZm9sZGVyIGJlZm9yZSBjb3B5aW5nIHRoZSBuZXcgZGIuIFBsZWFzZSBwcm92aWRlIHByb3BlciBib29sZWFuIHZhbHVlIHRydWUgb3IgZmFsc2U7XHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN1Y2Nlc3NJbmRleDogNCxcclxuICAgIGVycm9ySW5kZXg6IDUsXHJcbiAgfSlcclxuICBjb3B5RGJGcm9tU3RvcmFnZShkYm5hbWU6IHN0cmluZywgbG9jYXRpb246IG51bWJlciwgc291cmNlOiBzdHJpbmcsIGRlbGV0ZW9sZGRiOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQ29weSB0aGUgYXBwIGRhdGFiYXNlIHRvIGV4dGVybmFsL2ludGVybmFsIHN0b3JhZ2Ugb24gdGhlIGRldmljZS5cclxuICAgKiAoZm9yIGlvcyBvbmx5LCB1c2UgMCBmb3IgQW5kcm9pZClcclxuICAgKiBsb2NhdGlvbiA9IDA7IC8vSXQgd2lsbCBjb3B5IHRoZSBkYXRhYmFzZSBmcm9tIExpYnJhcnkvTG9jYWxEYXRhYmFzZSBsb2NhdGlvbi5cclxuICAgKiBvclxyXG4gICAqIGxvY2F0aW9uID0gMTsgLy8gSXQgd2lsbCBjb3B5IHRoZSBkYXRhYmFzZSBmcm9tIExpYnJhcnkgZm9sZGVyIGluc3RlYWQuXHJcbiAgICogb3JcclxuICAgKiBsb2NhdGlvbiA9IDI7IC8vIEl0IHdpbGwgY29weSB0aGUgZGF0YWJhc2UgZnJvbSB0aGUgZGVmYXVsdCBTUUxpdGUgRGF0YWJhc2UgZGlyZWN0b3J5LiBUaGlzIGlzIHRoZSBkZWZhdWx0IGxvY2F0aW9uIGZvciBkYXRhYmFzZVxyXG4gICAqIEBwYXJhbSBkYm5hbWUge3N0cmluZ30gSXMgdGhlIG5hbWUgb2YgdGhlIGRhdGFiYXNlIHlvdSB3YW50IHRvIGNvcHkuIFRoZSBwbHVnaW4gd2lsbCBsb29rIGZvciBhbmQgY29weSB0aGUgZmlsZSBhY2NvcmRpbmcgdG8gdGhlIGZpbGVuYW1lIHByb3ZpZGVkIGhlcmUuIEFuZCB0aGUgc2FtZSBmaWxlIG5hbWUgc2hvdWxkIGJlIHVzZWQgd2hpbGUgb3BlbmluZyB0aGUgZGF0YWJhc2UgdmlhIFNRTGl0ZVBsdWdpbi5cclxuICAgKiBAcGFyYW0gbG9jYXRpb24ge251bWJlcn0gTG9jYXRpb24gd2hlcmUgdG8gY29weSB0aGUgZGF0YWJhc2UgZm9yIGFwcCAob25seSBhcHBsaWNhYmxlIGZvciBpb3MpLiBGb3IgQW5kcm9pZCBwYXNzIDAuXHJcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uIHtzdHJpbmd9IERlc3RpbmF0aW9uIEZpbGUgbG9jYXRpb24gbGlrZSAvc2RjYXJkL215ZGIvIFBsZWFzZSBwcm92aWRlIGEgdmFsaWQgZXhpc3RpbmcgbG9jYXRpb24gYW5kIFwiL1wiIHNob3VsZCBiZSBwcmVzZW50IGF0IHRoZSBlbmQgb2YgdGhlIHBhdGguIERvIG5vdCBhcHBlbmQgZGIgbmFtZSBpbiB0aGUgcGF0aC5cclxuICAgKiBAcGFyYW0gb3ZlcndyaXRlIHtib29sZWFufSAgSWYgc2V0IHRvIHRydWUsIHRoZW4gd2lsbCByZXBsYWNlIHRoZSBmaWxlIGF0IHRoZSBkZXN0aW5hdGlvbi4gT3RoZXJ3aXNlIHdpbGwgdGhyb3cgYW4gZXJyb3IsIGlmIGRlc3RpbmF0aW9uIGZpbGUgYWxyZWFkeSBleGlzdHMuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN1Y2Nlc3NJbmRleDogNCxcclxuICAgIGVycm9ySW5kZXg6IDUsXHJcbiAgfSlcclxuICBjb3B5RGJUb1N0b3JhZ2UoZGJuYW1lOiBzdHJpbmcsIGxvY2F0aW9uOiBudW1iZXIsIGRlc3RpbmF0aW9uOiBzdHJpbmcsIG92ZXJ3cml0ZTogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGFsbG93cyB5b3UgdG8gcmVtb3ZlIHRoZSBkYXRhYmFzZSBmcm9tIHRoZSBhcHBzIGRlZmF1bHQgZGF0YWJhc2Ugc3RvcmFnZSBsb2NhdGlvbi5cclxuICAgKiAoZm9yIGlvcyBvbmx5LCB1c2UgMCBmb3IgQW5kcm9pZClcclxuICAgKiBsb2NhdGlvbiA9IDA7IC8vIChEaXNhYmxlIGlDbG91ZCBCYWNrdXApIElmIHNldCB3aWxsIGNvcHkgdGhlIGRhdGFiYXNlIHRvIExpYnJhcnkvTG9jYWxEYXRhYmFzZS4gVGhlIGRhdGFiYXNlIHdpbGwgbm90IGJlIHN5bmNlZCBieSB0aGUgaUNsb3VkIEJhY2t1cC5cclxuICAgKiBvclxyXG4gICAqIGxvY2F0aW9uID0gMTsgLy8gSWYgc2V0IHdpbGwgY29weSB0aGUgZGF0YWJhc2UgdG8gTGlicmFyeSBmb2xkZXIgaW5zdGVhZCBvZiBEb2N1bWVudHMgZm9sZGVyLlxyXG4gICAqIG9yXHJcbiAgICogbG9jYXRpb24gPSAyOyAvLyBJdCB3aWxsIGNvcHkgdGhlIGRhdGFiYXNlIGluIHRoZSBkZWZhdWx0IFNRTGl0ZSBEYXRhYmFzZSBkaXJlY3RvcnkuIFRoaXMgaXMgdGhlIGRlZmF1bHQgbG9jYXRpb24gZm9yIGRhdGFiYXNlXHJcbiAgICogQHBhcmFtIGRibmFtZSB7c3RyaW5nfSBJcyB0aGUgbmFtZSBvZiB0aGUgZGF0YWJhc2UgeW91IHdhbnQgdG8gcmVtb3ZlLiBJZiB0aGUgZGF0YWJhc2UgZmlsZSBpcyBoYXZpbmcgYW55IGV4dGVuc2lvbiwgcGxlYXNlIHByb3ZpZGUgdGhhdCBhbHNvLlxyXG4gICAqIEBwYXJhbSBsb2NhdGlvbiB7bnVtYmVyfSBMb2NhdGlvbiB3aGVyZSB0byBjb3B5IHRoZSBkYXRhYmFzZSBmb3IgYXBwIChvbmx5IGFwcGxpY2FibGUgZm9yIGlvcykuRm9yIEFuZHJvaWQgcGFzcyAwLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDIsXHJcbiAgICBlcnJvckluZGV4OiAzLFxyXG4gIH0pXHJcbiAgcmVtb3ZlKGRibmFtZTogc3RyaW5nLCBsb2NhdGlvbjogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19