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
import { IonicNativePlugin, cordova, checkAvailability, cordovaInstance, instancePropertyGet, instancePropertySet } from '@ionic-native/core';
var SQLiteObject = /** @class */ (function () {
    function SQLiteObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    SQLiteObject.prototype.addTransaction = function (transaction) { return cordovaInstance(this, "addTransaction", { "sync": true }, arguments); };
    SQLiteObject.prototype.transaction = function (fn) { return cordovaInstance(this, "transaction", { "successIndex": 2, "errorIndex": 1 }, arguments); };
    SQLiteObject.prototype.readTransaction = function (fn) { return cordovaInstance(this, "readTransaction", {}, arguments); };
    SQLiteObject.prototype.startNextTransaction = function () { return cordovaInstance(this, "startNextTransaction", { "sync": true }, arguments); };
    SQLiteObject.prototype.open = function () { return cordovaInstance(this, "open", {}, arguments); };
    SQLiteObject.prototype.close = function () { return cordovaInstance(this, "close", {}, arguments); };
    SQLiteObject.prototype.executeSql = function (statement, params) { return cordovaInstance(this, "executeSql", {}, arguments); };
    SQLiteObject.prototype.sqlBatch = function (sqlStatements) { return cordovaInstance(this, "sqlBatch", {}, arguments); };
    SQLiteObject.prototype.abortallPendingTransactions = function () { return cordovaInstance(this, "abortallPendingTransactions", { "sync": true }, arguments); };
    Object.defineProperty(SQLiteObject.prototype, "databaseFeatures", {
        get: function () { return instancePropertyGet(this, "databaseFeatures"); },
        set: function (value) { instancePropertySet(this, "databaseFeatures", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SQLiteObject.prototype, "openDBs", {
        get: function () { return instancePropertyGet(this, "openDBs"); },
        set: function (value) { instancePropertySet(this, "openDBs", value); },
        enumerable: true,
        configurable: true
    });
    return SQLiteObject;
}());
export { SQLiteObject };
var SQLiteOriginal = /** @class */ (function (_super) {
    __extends(SQLiteOriginal, _super);
    function SQLiteOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SQLiteOriginal.prototype.create = function (config) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    sqlitePlugin.openDatabase(config, function (db) { return resolve(new SQLiteObject(db)); }, reject);
                });
            }
        })();
    };
    SQLiteOriginal.prototype.echoTest = function () { return cordova(this, "echoTest", {}, arguments); };
    SQLiteOriginal.prototype.selfTest = function () { return cordova(this, "selfTest", {}, arguments); };
    SQLiteOriginal.prototype.deleteDatabase = function (config) { return cordova(this, "deleteDatabase", {}, arguments); };
    SQLiteOriginal.pluginName = "SQLite";
    SQLiteOriginal.pluginRef = "sqlitePlugin";
    SQLiteOriginal.plugin = "cordova-sqlite-storage";
    SQLiteOriginal.repo = "https://github.com/litehelpers/Cordova-sqlite-storage";
    SQLiteOriginal.platforms = ["Android", "iOS", "macOS", "Windows"];
    return SQLiteOriginal;
}(IonicNativePlugin));
var SQLite = new SQLiteOriginal();
export { SQLite };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NxbGl0ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw0R0FPTixNQUFNLG9CQUFvQixDQUFDOztJQW9EMUIsc0JBQW1CLGVBQW9CO1FBQXBCLG9CQUFlLEdBQWYsZUFBZSxDQUFLO0lBQUcsQ0FBQztJQVEzQyxxQ0FBYyxhQUFDLFdBQTRDO0lBVTNELGtDQUFXLGFBQUMsRUFBK0I7SUFTM0Msc0NBQWUsYUFBQyxFQUFtQztJQU9uRCwyQ0FBb0I7SUFNcEIsMkJBQUk7SUFRSiw0QkFBSztJQVNMLGlDQUFVLGFBQUMsU0FBaUIsRUFBRSxNQUFjO0lBUzVDLCtCQUFRLGFBQUMsYUFBMEM7SUFPbkQsa0RBQTJCOzBCQXZFUCwwQ0FBZ0I7Ozs7OzswQkFDaEIsaUNBQU87Ozs7Ozt1QkEvRDdCOzs7O0lBc0w0QiwwQkFBaUI7Ozs7SUFVM0MsdUJBQU0sYUFBQyxNQUE0Qjs7O21EQUF5QjtnQkFDMUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO29CQUNqQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFDLEVBQU8sSUFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUE3QixDQUE2QixFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN4RixDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFPRCx5QkFBUTtJQVNSLHlCQUFRO0lBVVIsK0JBQWMsYUFBQyxNQUE0Qjs7Ozs7O2lCQTlON0M7RUFzTDRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENvcmRvdmEsXHJcbiAgQ29yZG92YUNoZWNrLFxyXG4gIENvcmRvdmFJbnN0YW5jZSxcclxuICBJbnN0YW5jZVByb3BlcnR5LFxyXG4gIElvbmljTmF0aXZlUGx1Z2luLFxyXG4gIFBsdWdpbixcclxufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBzcWxpdGVQbHVnaW46IGFueTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU1FMaXRlRGF0YWJhc2VDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIE5hbWUgb2YgdGhlIGRhdGFiYXNlLiBFeGFtcGxlOiAnbXkuZGInXHJcbiAgICovXHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIExvY2F0aW9uIG9mIHRoZSBkYXRhYmFzZS4gRXhhbXBsZTogJ2RlZmF1bHQnXHJcbiAgICovXHJcbiAgbG9jYXRpb24/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogaU9TIERhdGFiYXNlIExvY2F0aW9uLiBFeGFtcGxlOiAnTGlicmFyeSdcclxuICAgKi9cclxuICBpb3NEYXRhYmFzZUxvY2F0aW9uPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHN1cHBvcnQgb3BlbmluZyBwcmUtZmlsbGVkIGRhdGFiYXNlcyB3aXRoIGh0dHBzOi8vZ2l0aHViLmNvbS9saXRlaGVscGVycy9jb3Jkb3ZhLXNxbGl0ZS1leHRcclxuICAgKi9cclxuICBjcmVhdGVGcm9tTG9jYXRpb24/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogc3VwcG9ydCBlbmNyeXB0ZWQgZGF0YWJhc2VzIHdpdGggaHR0cHM6Ly9naXRodWIuY29tL2xpdGVoZWxwZXJzL0NvcmRvdmEtc3FsY2lwaGVyLWFkYXB0ZXJcclxuICAgKi9cclxuICBrZXk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERiVHJhbnNhY3Rpb24ge1xyXG4gIGV4ZWN1dGVTcWw6IChzcWw6IGFueSwgdmFsdWVzPzogYW55W10sIHN1Y2Nlc3M/OiBGdW5jdGlvbiwgZXJyb3I/OiBGdW5jdGlvbikgPT4gdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU1FMaXRlVHJhbnNhY3Rpb24gZXh0ZW5kcyBEYlRyYW5zYWN0aW9uIHtcclxuICBzdGFydDogKCkgPT4gdm9pZDtcclxuICBhZGRTdGF0ZW1lbnQ6IERiVHJhbnNhY3Rpb25bJ2V4ZWN1dGVTcWwnXTtcclxuICBoYW5kbGVTdGF0ZW1lbnRTdWNjZXNzOiAoaGFuZGxlcjogRnVuY3Rpb24sIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQ7XHJcbiAgaGFuZGxlU3RhdGVtZW50RmFpbHVyZTogKGhhbmRsZXI6IEZ1bmN0aW9uLCByZXNwb25zZTogYW55KSA9PiB2b2lkO1xyXG4gIHJ1bjogKCkgPT4gdm9pZDtcclxuICBhYm9ydDogKHR4RmFpbHVyZTogYW55KSA9PiB2b2lkO1xyXG4gIGZpbmlzaDogKCkgPT4gdm9pZDtcclxuICBhYm9ydEZyb21ROiAoc3FsZXJyb3I6IGFueSkgPT4gdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTUUxpdGVPYmplY3Qge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfb2JqZWN0SW5zdGFuY2U6IGFueSkge31cclxuXHJcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBkYXRhYmFzZUZlYXR1cmVzOiB7IGlzU1FMaXRlUGx1Z2luRGF0YWJhc2U6IGJvb2xlYW4gfTtcclxuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG9wZW5EQnM6IGFueTtcclxuXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgYWRkVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246ICh0eDogU1FMaXRlVHJhbnNhY3Rpb24pID0+IHZvaWQpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHtcclxuICAgIHN1Y2Nlc3NJbmRleDogMixcclxuICAgIGVycm9ySW5kZXg6IDEsXHJcbiAgfSlcclxuICB0cmFuc2FjdGlvbihmbjogKHR4OiBEYlRyYW5zYWN0aW9uKSA9PiB2b2lkKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKClcclxuICByZWFkVHJhbnNhY3Rpb24oZm46ICh0eDogU1FMaXRlVHJhbnNhY3Rpb24pID0+IHZvaWQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgc3RhcnROZXh0VHJhbnNhY3Rpb24oKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxyXG4gIG9wZW4oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSgpXHJcbiAgY2xvc2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4ZWN1dGUgU1FMIG9uIHRoZSBvcGVuZWQgZGF0YWJhc2UuIE5vdGUsIHlvdSBtdXN0IGNhbGwgYGNyZWF0ZWAgZmlyc3QsIGFuZFxyXG4gICAqIGVuc3VyZSBpdCByZXNvbHZlZCBhbmQgc3VjY2Vzc2Z1bGx5IG9wZW5lZCB0aGUgZGF0YWJhc2UuXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSgpXHJcbiAgZXhlY3V0ZVNxbChzdGF0ZW1lbnQ6IHN0cmluZywgcGFyYW1zPzogYW55W10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHNxbFN0YXRlbWVudHMge3N0cmluZ1tdIHwgc3RyaW5nW11bXSB8IGFueVtdfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSgpXHJcbiAgc3FsQmF0Y2goc3FsU3RhdGVtZW50czogKHN0cmluZyB8IHN0cmluZ1tdIHwgYW55KVtdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIGFib3J0YWxsUGVuZGluZ1RyYW5zYWN0aW9ucygpOiB2b2lkIHt9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTUUxpdGVcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFjY2VzcyBTUUxpdGUgZGF0YWJhc2VzIG9uIHRoZSBkZXZpY2UuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNRTGl0ZSwgU1FMaXRlT2JqZWN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcWxpdGUvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzcWxpdGU6IFNRTGl0ZSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLnNxbGl0ZS5jcmVhdGUoe1xyXG4gKiAgIG5hbWU6ICdkYXRhLmRiJyxcclxuICogICBsb2NhdGlvbjogJ2RlZmF1bHQnXHJcbiAqIH0pXHJcbiAqICAgLnRoZW4oKGRiOiBTUUxpdGVPYmplY3QpID0+IHtcclxuICpcclxuICpcclxuICogICAgIGRiLmV4ZWN1dGVTcWwoJ2NyZWF0ZSB0YWJsZSBkYW5jZU1vdmVzKG5hbWUgVkFSQ0hBUigzMikpJywgW10pXHJcbiAqICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdFeGVjdXRlZCBTUUwnKSlcclxuICogICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gKlxyXG4gKlxyXG4gKiAgIH0pXHJcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gKlxyXG4gKiBgYGBcclxuICpcclxuICogQGNsYXNzZXNcclxuICogU1FMaXRlT2JqZWN0XHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIFNRTGl0ZURhdGFiYXNlQ29uZmlnXHJcbiAqIFNRTGl0ZVRyYW5zYWN0aW9uXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnU1FMaXRlJyxcclxuICBwbHVnaW5SZWY6ICdzcWxpdGVQbHVnaW4nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtc3FsaXRlLXN0b3JhZ2UnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvQ29yZG92YS1zcWxpdGUtc3RvcmFnZScsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ21hY09TJywgJ1dpbmRvd3MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU1FMaXRlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIE9wZW4gb3IgY3JlYXRlIGEgU1FMaXRlIGRhdGFiYXNlIGZpbGUuXHJcbiAgICpcclxuICAgKiBTZWUgdGhlIHBsdWdpbiBkb2NzIGZvciBhbiBleHBsYW5hdGlvbiBvZiBhbGwgb3B0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2xpdGVoZWxwZXJzL0NvcmRvdmEtc3FsaXRlLXN0b3JhZ2Ujb3BlbmluZy1hLWRhdGFiYXNlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29uZmlnIHtTUUxpdGVEYXRhYmFzZUNvbmZpZ30gZGF0YWJhc2UgY29uZmlndXJhdGlvblxyXG4gICAqIEByZXR1cm4gUHJvbWlzZTxTUUxpdGVPYmplY3Q+XHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgY3JlYXRlKGNvbmZpZzogU1FMaXRlRGF0YWJhc2VDb25maWcpOiBQcm9taXNlPFNRTGl0ZU9iamVjdD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc3FsaXRlUGx1Z2luLm9wZW5EYXRhYmFzZShjb25maWcsIChkYjogYW55KSA9PiByZXNvbHZlKG5ldyBTUUxpdGVPYmplY3QoZGIpKSwgcmVqZWN0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZ5IHRoYXQgYm90aCB0aGUgSmF2YXNjcmlwdCBhbmQgbmF0aXZlIHBhcnQgb2YgdGhpcyBwbHVnaW4gYXJlIGluc3RhbGxlZCBpbiB5b3VyIGFwcGxpY2F0aW9uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZWNob1Rlc3QoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF1dG9tYXRpY2FsbHkgdmVyaWZ5IGJhc2ljIGRhdGFiYXNlIGFjY2VzcyBvcGVyYXRpb25zIGluY2x1ZGluZyBvcGVuaW5nIGEgZGF0YWJhc2VcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZWxmVGVzdCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlcyBhIGRhdGFiYXNlXHJcbiAgICogQHBhcmFtIGNvbmZpZyB7U1FMaXRlRGF0YWJhc2VDb25maWd9IGRhdGFiYXNlIGNvbmZpZ3VyYXRpb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBkZWxldGVEYXRhYmFzZShjb25maWc6IFNRTGl0ZURhdGFiYXNlQ29uZmlnKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19