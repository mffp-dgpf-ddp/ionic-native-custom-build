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
import { IonicNativePlugin, checkAvailability, cordovaInstance, getPromise } from '@ionic-native/core';
var SecureStorageObject = /** @class */ (function () {
    function SecureStorageObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    SecureStorageObject.prototype.get = function (key) { return cordovaInstance(this, "get", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.set = function (key, value) { return cordovaInstance(this, "set", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.remove = function (key) { return cordovaInstance(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.keys = function () { return cordovaInstance(this, "keys", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.clear = function () { return cordovaInstance(this, "clear", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.secureDevice = function () { return cordovaInstance(this, "secureDevice", {}, arguments); };
    return SecureStorageObject;
}());
export { SecureStorageObject };
var SecureStorageOriginal = /** @class */ (function (_super) {
    __extends(SecureStorageOriginal, _super);
    function SecureStorageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecureStorageOriginal.prototype.create = function (store) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (res, rej) {
                    var instance = new (SecureStorageOriginal.getPlugin())(function () { return res(new SecureStorageObject(instance)); }, function () { return rej(new SecureStorageObject(instance)); }, store);
                });
            }
        })();
    };
    SecureStorageOriginal.pluginName = "SecureStorage";
    SecureStorageOriginal.plugin = "cordova-plugin-secure-storage-echo";
    SecureStorageOriginal.pluginRef = "cordova.plugins.SecureStorage";
    SecureStorageOriginal.repo = "https://github.com/mibrito707/cordova-plugin-secure-storage-echo";
    SecureStorageOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return SecureStorageOriginal;
}(IonicNativePlugin));
var SecureStorage = new SecureStorageOriginal();
export { SecureStorage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NlY3VyZS1zdG9yYWdlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHlEQUE0RCxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFNeEcsNkJBQW9CLGVBQW9CO1FBQXBCLG9CQUFlLEdBQWYsZUFBZSxDQUFLO0lBQUcsQ0FBQztJQVU1QyxpQ0FBRyxhQUFDLEdBQVc7SUFhZixpQ0FBRyxhQUFDLEdBQVcsRUFBRSxLQUFhO0lBWTlCLG9DQUFNLGFBQUMsR0FBVztJQVdsQixrQ0FBSTtJQVdKLG1DQUFLO0lBU0wsMENBQVk7OEJBekVkOzs7O0lBb0ltQyxpQ0FBaUI7Ozs7SUFPbEQsOEJBQU0sYUFBQyxLQUFhOzs7bURBQWdDO2dCQUNsRCxPQUFPLFVBQVUsQ0FBc0IsVUFBQyxHQUFhLEVBQUUsR0FBYTtvQkFDbEUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUM5QyxjQUFNLE9BQUEsR0FBRyxDQUFDLElBQUksbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsRUFDNUMsY0FBTSxPQUFBLEdBQUcsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQXRDLENBQXNDLEVBQzVDLEtBQUssQ0FDTixDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO2FBQ0o7Ozs7Ozs7O3dCQW5KSDtFQW9JbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmFDaGVjaywgQ29yZG92YUluc3RhbmNlLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luLCBnZXRQcm9taXNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2VjdXJlU3RvcmFnZU9iamVjdCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueSkge31cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBhIHN0b3JlZCBpdGVtXHJcbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBnZXQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcmVzIGEgdmFsdWVcclxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9XHJcbiAgICogQHBhcmFtIHZhbHVlIHtzdHJpbmd9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHtcclxuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcclxuICB9KVxyXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGEgc2luZ2xlIHN0b3JlZCBpdGVtXHJcbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUga2V5IHRoYXQgd2FzIHJlbW92ZWRcclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHtcclxuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcclxuICB9KVxyXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYWxsIHJlZmVyZW5jZXMgZnJvbSB0aGUgc3RvcmFnZS5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmdbXT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhcnJheSBvZiBrZXlzIHN0b3JhZ2VcclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHtcclxuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcclxuICB9KVxyXG4gIGtleXMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgYWxsIHJlZmVyZW5jZXMgZnJvbSB0aGUgc3RvcmFnZS5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgY2xlYXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJyaW5ncyB1cCB0aGUgc2NyZWVuLWxvY2sgc2V0dGluZ3NcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxyXG4gIHNlY3VyZURldmljZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNlY3VyZSBTdG9yYWdlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBnZXRzLCBzZXRzIGFuZCByZW1vdmVzIGtleSx2YWx1ZSBwYWlycyBmcm9tIGEgZGV2aWNlJ3Mgc2VjdXJlIHN0b3JhZ2UuXHJcbiAqXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tc2VjdXJlLXN0b3JhZ2VgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQ29yZG92YSBTZWN1cmUgU3RvcmFnZSBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vQ3J5cGhvL2NvcmRvdmEtcGx1Z2luLXNlY3VyZS1zdG9yYWdlKS5cclxuICpcclxuICogVGhlIGJyb3dzZXIgcGxhdGZvcm0gaXMgc3VwcG9ydGVkIGFzIGEgbW9jayBvbmx5LiBLZXkvdmFsdWVzIGFyZSBzdG9yZWQgdW5lbmNyeXB0ZWQgaW4gbG9jYWxTdG9yYWdlLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBTZWN1cmVTdG9yYWdlLCBTZWN1cmVTdG9yYWdlT2JqZWN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zZWN1cmUtc3RvcmFnZS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlY3VyZVN0b3JhZ2U6IFNlY3VyZVN0b3JhZ2UpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5zZWN1cmVTdG9yYWdlLmNyZWF0ZSgnbXlfc3RvcmVfbmFtZScpXHJcbiAqICAgLnRoZW4oKHN0b3JhZ2U6IFNlY3VyZVN0b3JhZ2VPYmplY3QpID0+IHtcclxuICpcclxuICogICAgICBzdG9yYWdlLmdldCgna2V5JylcclxuICogICAgICAgIC50aGVuKFxyXG4gKiAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxyXG4gKiAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICogICAgICApO1xyXG4gKlxyXG4gKiAgICAgIHN0b3JhZ2Uuc2V0KCdrZXknLCAndmFsdWUnKVxyXG4gKiAgICAgICAgLnRoZW4oXHJcbiAqICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcclxuICogICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAqICAgICAgKTtcclxuICpcclxuICogICAgICBzdG9yYWdlLnJlbW92ZSgna2V5JylcclxuICogICAgICAudGhlbihcclxuICogICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcclxuICogICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAqICAgICAgKTtcclxuICpcclxuICogICB9KTtcclxuICpcclxuICpcclxuICogYGBgXHJcbiAqIEBjbGFzc2VzXHJcbiAqIFNlY3VyZVN0b3JhZ2VPYmplY3RcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdTZWN1cmVTdG9yYWdlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zZWN1cmUtc3RvcmFnZS1lY2hvJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuU2VjdXJlU3RvcmFnZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9taWJyaXRvNzA3L2NvcmRvdmEtcGx1Z2luLXNlY3VyZS1zdG9yYWdlLWVjaG8nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2VjdXJlU3RvcmFnZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmFtZXNwYWNlZCBzdG9yYWdlLlxyXG4gICAqIEBwYXJhbSBzdG9yZSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFNlY3VyZVN0b3JhZ2VPYmplY3Q+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGNyZWF0ZShzdG9yZTogc3RyaW5nKTogUHJvbWlzZTxTZWN1cmVTdG9yYWdlT2JqZWN0PiB7XHJcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxTZWN1cmVTdG9yYWdlT2JqZWN0PigocmVzOiBGdW5jdGlvbiwgcmVqOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyAoU2VjdXJlU3RvcmFnZS5nZXRQbHVnaW4oKSkoXHJcbiAgICAgICAgKCkgPT4gcmVzKG5ldyBTZWN1cmVTdG9yYWdlT2JqZWN0KGluc3RhbmNlKSksXHJcbiAgICAgICAgKCkgPT4gcmVqKG5ldyBTZWN1cmVTdG9yYWdlT2JqZWN0KGluc3RhbmNlKSksXHJcbiAgICAgICAgc3RvcmVcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=