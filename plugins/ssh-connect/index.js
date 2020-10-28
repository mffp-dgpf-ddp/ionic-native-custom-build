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
var SSHConnectOriginal = /** @class */ (function (_super) {
    __extends(SSHConnectOriginal, _super);
    function SSHConnectOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SSHConnectOriginal.prototype.connect = function (user, password, host, port) { return cordova(this, "connect", {}, arguments); };
    SSHConnectOriginal.prototype.executeCommand = function (command) { return cordova(this, "executeCommand", {}, arguments); };
    SSHConnectOriginal.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    SSHConnectOriginal.pluginName = "SSHConnect";
    SSHConnectOriginal.plugin = "cordova-plugin-ssh-connect";
    SSHConnectOriginal.pluginRef = "cordova.plugins.sshConnect";
    SSHConnectOriginal.repo = "https://github.com/JosePerez27/cordova-plugin-ssh-connect";
    SSHConnectOriginal.platforms = ["Android"];
    return SSHConnectOriginal;
}(IonicNativePlugin));
var SSHConnect = new SSHConnectOriginal();
export { SSHConnect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NzaC1jb25uZWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXVDeEMsOEJBQWlCOzs7O0lBVS9DLDRCQUFPLGFBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsSUFBWSxFQUFFLElBQVk7SUFVbEUsbUNBQWMsYUFBQyxPQUFlO0lBUzlCLCtCQUFVOzs7Ozs7cUJBckVaO0VBd0NnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgU1NIIENvbm5lY3RcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENvcmRvdmEgcGx1Z2luIHRvIG1ha2UgY29ubmVjdGlvbnMgYW5kIGV4ZWN1dGUgY29tbWFuZHMgdGhyb3VnaCBTU0hcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgU1NIQ29ubmVjdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3NoLWNvbm5lY3Qvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzc2hDb25uZWN0OiBTU0hDb25uZWN0KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuc3NoQ29ubmVjdC5jb25uZWN0KCd1c2VyJywgJ3Bhc3N3b3JkJywgJ2hvc3QnLCBwb3J0KVxyXG4gKiAgIC50aGVuKHJlc3AgPT4gY29uc29sZS5sb2cocmVzcCkpXHJcbiAqICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogdGhpcy5zc2hDb25uZWN0LmV4ZWN1dGVDb21tYW5kKCdjb21tYW5kJylcclxuICogICAudGhlbihyZXNwID0+IGNvbnNvbGUubG9nKHJlc3ApKVxyXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIHRoaXMuc3NoQ29ubmVjdC5kaXNjb25uZWN0KClcclxuICogICAudGhlbihyZXNwID0+IGNvbnNvbGUubG9nKHJlc3ApKVxyXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1NTSENvbm5lY3QnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNzaC1jb25uZWN0JyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuc3NoQ29ubmVjdCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Kb3NlUGVyZXoyNy9jb3Jkb3ZhLXBsdWdpbi1zc2gtY29ubmVjdCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU1NIQ29ubmVjdCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBFc3RhYmxpc2ggYSByZW1vdGUgc3NoIGNvbm5lY3Rpb25cclxuICAgKiBAcGFyYW0ge3VzZXJ9IHVzZXIgIFRoZSByZW1vdGUgaG9zdCB1c2VyXHJcbiAgICogQHBhcmFtIHtwYXNzd29yZH0gcGFzc3dvcmQgIFRoZSByZW1vdGUgaG9zdCBwYXNzd29yZFxyXG4gICAqIEBwYXJhbSB7aG9zdH0gaG9zdCAgVGhlIHJlbW90ZSBkZXZpY2UgdG8gY29ubmVjdFxyXG4gICAqIEBwYXJhbSB7cG9ydH0gcG9ydCAgVGhlIFNTSCBwb3J0IGZvciBjb25uZWN0aW9uICh1c3VhbGx5IHBvcnQgMjIpXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGFuIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBzdWNjZXNzIG9mIHRoZSBjb25uZWN0aW9uXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNvbm5lY3QodXNlcjogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBob3N0OiBzdHJpbmcsIHBvcnQ6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFeGVjdXRlIGEgY29tbWFuZCBvbiB0aGUgcmVtb3RlIGhvc3QgY29ubmVjdGVkIGJ5IHNzaFxyXG4gICAqIEBwYXJhbSB7Y29tbWFuZH0gY29tbWFuZCAgVGhlIGNvbW1hbmQgdG8gZXhlY3V0ZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhbiBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcHJpbnRlZCB0ZXh0IG9uIHRoZSByZW1vdGUgY29uc29sZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBleGVjdXRlQ29tbWFuZChjb21tYW5kOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzY29ubmVjdCB0aGUgU1NIIHNlc3Npb25cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYW4gcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHN1Y2Nlc3Mgb2YgdGhlIGRpc2Nvbm5lY3Rpb25cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZGlzY29ubmVjdCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=