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
var DefaultMessageStorage = /** @class */ (function () {
    function DefaultMessageStorage() {
    }
    DefaultMessageStorage.prototype.find = function (messageId, callback) { return cordova(this, "find", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.findAll = function (callback) { return cordova(this, "findAll", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.delete = function (messageId, callback) { return cordova(this, "delete", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.deleteAll = function (callback) { return cordova(this, "deleteAll", { "sync": true }, arguments); };
    return DefaultMessageStorage;
}());
export { DefaultMessageStorage };
var MobileMessagingOriginal = /** @class */ (function (_super) {
    __extends(MobileMessagingOriginal, _super);
    function MobileMessagingOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileMessagingOriginal.prototype.init = function (config, onInitError) { return cordova(this, "init", { "sync": true }, arguments); };
    MobileMessagingOriginal.prototype.register = function (event) { return cordova(this, "register", { "observable": true }, arguments); };
    MobileMessagingOriginal.prototype.on = function (event) { return cordova(this, "on", { "observable": true }, arguments); };
    MobileMessagingOriginal.prototype.unregister = function (event) { return cordova(this, "unregister", { "observable": true }, arguments); };
    MobileMessagingOriginal.prototype.off = function (event) { return cordova(this, "off", { "observable": true }, arguments); };
    MobileMessagingOriginal.prototype.submitEvent = function (event) { return cordova(this, "submitEvent", { "sync": true }, arguments); };
    MobileMessagingOriginal.prototype.submitEventImmediately = function (event) { return cordova(this, "submitEventImmediately", { "observable": true }, arguments); };
    MobileMessagingOriginal.prototype.saveUser = function (userData) { return cordova(this, "saveUser", {}, arguments); };
    MobileMessagingOriginal.prototype.fetchUser = function () { return cordova(this, "fetchUser", {}, arguments); };
    MobileMessagingOriginal.prototype.getUser = function () { return cordova(this, "getUser", {}, arguments); };
    MobileMessagingOriginal.prototype.saveInstallation = function (installation) { return cordova(this, "saveInstallation", {}, arguments); };
    MobileMessagingOriginal.prototype.fetchInstallation = function () { return cordova(this, "fetchInstallation", {}, arguments); };
    MobileMessagingOriginal.prototype.getInstallation = function () { return cordova(this, "getInstallation", {}, arguments); };
    MobileMessagingOriginal.prototype.setInstallationAsPrimary = function (pushRegistrationId, primary) { return cordova(this, "setInstallationAsPrimary", {}, arguments); };
    MobileMessagingOriginal.prototype.personalize = function (context) { return cordova(this, "personalize", {}, arguments); };
    MobileMessagingOriginal.prototype.depersonalize = function () { return cordova(this, "depersonalize", {}, arguments); };
    MobileMessagingOriginal.prototype.depersonalizeInstallation = function (pushRegistrationId) { return cordova(this, "depersonalizeInstallation", {}, arguments); };
    MobileMessagingOriginal.prototype.markMessagesSeen = function (messageIds) { return cordova(this, "markMessagesSeen", {}, arguments); };
    MobileMessagingOriginal.prototype.showDialogForError = function (errorCode) { return cordova(this, "showDialogForError", {}, arguments); };
    MobileMessagingOriginal.prototype.defaultMessageStorage = function () { return cordova(this, "defaultMessageStorage", { "sync": true }, arguments); };
    MobileMessagingOriginal.prototype.showChat = function (config) { return cordova(this, "showChat", {}, arguments); };
    MobileMessagingOriginal.pluginName = "MobileMessaging";
    MobileMessagingOriginal.plugin = "com-infobip-plugins-mobilemessaging";
    MobileMessagingOriginal.pluginRef = "MobileMessaging";
    MobileMessagingOriginal.repo = "https://github.com/infobip/mobile-messaging-cordova-plugin";
    MobileMessagingOriginal.platforms = ["Android", "iOS"];
    return MobileMessagingOriginal;
}(IonicNativePlugin));
var MobileMessaging = new MobileMessagingOriginal();
export { MobileMessaging };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21vYmlsZS1tZXNzYWdpbmcvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztJQXFKaEMsb0NBQUksYUFBQyxTQUFpQixFQUFFLFFBQW9DO0lBSzVELHVDQUFPLGFBQUMsUUFBdUM7SUFLL0Msc0NBQU0sYUFBQyxTQUFpQixFQUFFLFFBQW9CO0lBSzlDLHlDQUFTLGFBQUMsUUFBb0I7Z0NBdEtoQzs7OztJQTJOcUMsbUNBQWlCOzs7O0lBU3BELDhCQUFJLGFBQUMsTUFBcUIsRUFBRSxXQUFtRDtJQWEvRSxrQ0FBUSxhQUFDLEtBQVk7SUFPckIsNEJBQUUsYUFBQyxLQUFZO0lBY2Ysb0NBQVUsYUFBQyxLQUFZO0lBT3ZCLDZCQUFHLGFBQUMsS0FBWTtJQXNCaEIscUNBQVcsYUFBQyxLQUFrQjtJQXdCOUIsZ0RBQXNCLGFBQUMsS0FBa0I7SUFXekMsa0NBQVEsYUFBQyxRQUFrQjtJQVUzQixtQ0FBUztJQVVULGlDQUFPO0lBV1AsMENBQWdCLGFBQUMsWUFBMEI7SUFVM0MsMkNBQWlCO0lBVWpCLHlDQUFlO0lBWWYsa0RBQXdCLGFBQUMsa0JBQTBCLEVBQUUsT0FBZ0I7SUFXckUscUNBQVcsYUFBQyxPQUEyQjtJQVV2Qyx1Q0FBYTtJQVViLG1EQUF5QixhQUFDLGtCQUEwQjtJQVdwRCwwQ0FBZ0IsYUFBQyxVQUFvQjtJQVdyQyw0Q0FBa0IsYUFBQyxTQUFpQjtJQUtwQywrQ0FBcUI7SUFXckIsa0NBQVEsYUFBQyxNQUFtQjs7Ozs7OzBCQTFjOUI7RUEyTnFDLGlCQUFpQjtTQUF6QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IHR5cGUgT1MgPSAnQW5kcm9pZCcgfCAnaU9TJztcclxuZXhwb3J0IHR5cGUgR2VuZGVyID0gJ01hbGUnIHwgJ0ZlbWFsZSc7XHJcbmV4cG9ydCB0eXBlIEV2ZW50ID1cclxuICB8ICdtZXNzYWdlUmVjZWl2ZWQnXHJcbiAgfCAnbm90aWZpY2F0aW9uVGFwcGVkJ1xyXG4gIHwgJ3Rva2VuUmVjZWl2ZWQnXHJcbiAgfCAncmVnaXN0cmF0aW9uVXBkYXRlZCdcclxuICB8ICdnZW9mZW5jZUVudGVyZWQnXHJcbiAgfCAnYWN0aW9uVGFwcGVkJ1xyXG4gIHwgJ2luc3RhbGxhdGlvblVwZGF0ZWQnXHJcbiAgfCAndXNlclVwZGF0ZWQnXHJcbiAgfCAncGVyc29uYWxpemVkJ1xyXG4gIHwgJ2RlcGVyc29uYWxpemVkJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tRXZlbnQge1xyXG4gIGRlZmluaXRpb25JZDogc3RyaW5nO1xyXG4gIHByb3BlcnRpZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb24ge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhcHBsaWNhdGlvbiBjb2RlIG9mIHlvdXIgQXBwbGljYXRpb24gZnJvbSBQdXNoIFBvcnRhbCB3ZWJzaXRlXHJcbiAgICovXHJcbiAgYXBwbGljYXRpb25Db2RlOiBzdHJpbmc7XHJcbiAgZ2VvZmVuY2luZ0VuYWJsZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIE1lc3NhZ2Ugc3RvcmFnZSBzYXZlIGNhbGxiYWNrXHJcbiAgICovXHJcbiAgbWVzc2FnZVN0b3JhZ2U/OiBzdHJpbmc7XHJcbiAgZGVmYXVsdE1lc3NhZ2VTdG9yYWdlPzogYm9vbGVhbjtcclxuICBpb3M/OiB7XHJcbiAgICBub3RpZmljYXRpb25UeXBlcz86IHN0cmluZ1tdO1xyXG4gICAgZm9yY2VDbGVhbnVwPzogYm9vbGVhbjtcclxuICAgIGxvZ2dpbmc/OiBib29sZWFuO1xyXG4gIH07XHJcbiAgYW5kcm9pZD86IHtcclxuICAgIG5vdGlmaWNhdGlvbkljb246IHN0cmluZzsgLy8gYSByZXNvdXJjZSBuYW1lIGZvciBhIHN0YXR1cyBiYXIgaWNvbiAod2l0aG91dCBleHRlbnNpb24pLCBsb2NhdGVkIGluICcvcGxhdGZvcm1zL2FuZHJvaWQvYXBwL3NyYy9tYWluL3Jlcy9taXBtYXAnXHJcbiAgICBtdWx0aXBsZU5vdGlmaWNhdGlvbnM6IGJvb2xlYW47XHJcbiAgICBub3RpZmljYXRpb25BY2NlbnRDb2xvcjogc3RyaW5nO1xyXG4gIH07XHJcbiAgcHJpdmFjeVNldHRpbmdzPzoge1xyXG4gICAgYXBwbGljYXRpb25Db2RlUGVyc2lzdGluZ0Rpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIHVzZXJEYXRhUGVyc2lzdGluZ0Rpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIGNhcnJpZXJJbmZvU2VuZGluZ0Rpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIHN5c3RlbUluZm9TZW5kaW5nRGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIH07XHJcbiAgbm90aWZpY2F0aW9uQ2F0ZWdvcmllcz86IFtcclxuICAgIHtcclxuICAgICAgaWRlbnRpZmllcj86IHN0cmluZztcclxuICAgICAgYWN0aW9ucz86IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZGVudGlmaWVyPzogc3RyaW5nO1xyXG4gICAgICAgICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgICBmb3JlZ3JvdW5kPzogYm9vbGVhbjtcclxuICAgICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ/OiBib29sZWFuO1xyXG4gICAgICAgICAgbW9SZXF1aXJlZD86IGJvb2xlYW47XHJcbiAgICAgICAgICBkZXN0cnVjdGl2ZT86IGJvb2xlYW47XHJcbiAgICAgICAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgICAgICAgdGV4dElucHV0QWN0aW9uQnV0dG9uVGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgICB0ZXh0SW5wdXRQbGFjZWhvbGRlcj86IHN0cmluZztcclxuICAgICAgICB9XHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyRGF0YSB7XHJcbiAgZXh0ZXJuYWxVc2VySWQ6IHN0cmluZztcclxuICBmaXJzdE5hbWU/OiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU/OiBzdHJpbmc7XHJcbiAgbWlkZGxlTmFtZT86IHN0cmluZztcclxuICBnZW5kZXI/OiBHZW5kZXI7XHJcbiAgYmlydGhkYXk/OiBEYXRlO1xyXG4gIHBob25lcz86IHN0cmluZ1tdO1xyXG4gIGVtYWlscz86IHN0cmluZ1tdO1xyXG4gIHRhZ3M/OiBzdHJpbmdbXTtcclxuICBjdXN0b21BdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFsbGF0aW9uIHtcclxuICBpc1ByaW1hcnlEZXZpY2U/OiBib29sZWFuO1xyXG4gIGlzUHVzaFJlZ2lzdHJhdGlvbkVuYWJsZWQ/OiBib29sZWFuO1xyXG4gIG5vdGlmaWNhdGlvbnNFbmFibGVkPzogYm9vbGVhbjtcclxuICBnZW9FbmFibGVkPzogYm9vbGVhbjtcclxuICBzZGtWZXJzaW9uPzogc3RyaW5nO1xyXG4gIGFwcFZlcnNpb24/OiBzdHJpbmc7XHJcbiAgb3M/OiBPUztcclxuICBvc1ZlcnNpb246IHN0cmluZztcclxuICBkZXZpY2VNYW51ZmFjdHVyZXI/OiBzdHJpbmc7XHJcbiAgZGV2aWNlTW9kZWw/OiBzdHJpbmc7XHJcbiAgZGV2aWNlU2VjdXJlPzogYm9vbGVhbjtcclxuICBsYW5ndWFnZT86IHN0cmluZztcclxuICBkZXZpY2VUaW1lem9uZUlkPzogc3RyaW5nO1xyXG4gIGFwcGxpY2F0aW9uVXNlcklkPzogc3RyaW5nO1xyXG4gIGRldmljZU5hbWU/OiBzdHJpbmc7XHJcbiAgY3VzdG9tQXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJJZGVudGl0eSB7XHJcbiAgcGhvbmVzPzogc3RyaW5nW107XHJcbiAgZW1haWxzPzogc3RyaW5nW107XHJcbiAgZXh0ZXJuYWxVc2VySWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZXJzb25hbGl6ZUNvbnRleHQge1xyXG4gIHVzZXJJZGVudGl0eTogVXNlcklkZW50aXR5O1xyXG4gIHVzZXJBdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcclxuICBmb3JjZURlcGVyc29uYWxpemU/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2Uge1xyXG4gIG1lc3NhZ2VJZDogc3RyaW5nO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIGJvZHk/OiBzdHJpbmc7XHJcbiAgc291bmQ/OiBzdHJpbmc7XHJcbiAgc2lsZW50PzogYm9vbGVhbjtcclxuICBjdXN0b21QYXlsb2FkPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcclxuICBpbnRlcm5hbERhdGE/OiBzdHJpbmc7XHJcbiAgcmVjZWl2ZWRUaW1lc3RhbXA/OiBudW1iZXI7XHJcbiAgc2VlbkRhdGU/OiBudW1iZXI7XHJcbiAgY29udGVudFVybD86IHN0cmluZztcclxuICBzZWVuPzogYm9vbGVhbjtcclxuICBnZW8/OiBib29sZWFuO1xyXG4gIG9yaWdpbmFsUGF5bG9hZD86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47IC8vIGlPUyBvbmx5XHJcbiAgdmlicmF0ZT86IGJvb2xlYW47IC8vIEFuZHJvaWQgb25seVxyXG4gIGljb24/OiBzdHJpbmc7IC8vIEFuZHJvaWQgb25seVxyXG4gIGNhdGVnb3J5Pzogc3RyaW5nOyAvLyBBbmRyb2lkIG9ubHlcclxuICBjaGF0Pzogc3RyaW5nO1xyXG4gIGJyb3dzZXJVcmw/OiBzdHJpbmc7XHJcbiAgZGVlcGxpbms/OiBzdHJpbmc7XHJcbiAgd2ViVmlld1VybD86IHN0cmluZztcclxuICBpbkFwcERpc21pc3NUaXRsZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb2JpbGVNZXNzYWdpbmdFcnJvciB7XHJcbiAgY29kZTogc3RyaW5nO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGF0Q29uZmlnIHtcclxuICBpb3M/OiB7XHJcbiAgICBzaG93TW9kYWxseTogYm9vbGVhbjtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdE1lc3NhZ2VTdG9yYWdlIHtcclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBmaW5kKG1lc3NhZ2VJZDogc3RyaW5nLCBjYWxsYmFjazogKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHZvaWQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGZpbmRBbGwoY2FsbGJhY2s6IChtZXNzYWdlczogTWVzc2FnZVtdKSA9PiB2b2lkKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBkZWxldGUobWVzc2FnZUlkOiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBkZWxldGVBbGwoY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBNb2JpbGUgTWVzc2FnaW5nXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBNb2JpbGUgTWVzc2FnaW5nIFNESyBpcyBkZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIHRvIGVhc2lseSBlbmFibGUgcHVzaCBub3RpZmljYXRpb24gY2hhbm5lbCBpbiB5b3VyIG1vYmlsZSBhcHBsaWNhdGlvbi5cclxuICogSW4gYWxtb3N0IG5vIHRpbWUgb2YgaW1wbGVtZW50YXRpb24geW91IGdldCBwdXNoIG5vdGlmaWNhdGlvbiBpbiB5b3VyIGFwcGxpY2F0aW9uIGFuZCBhY2Nlc3MgdG8gdGhlIGZlYXR1cmVzIG9mIFtJbmZvYmlwIElQIE1lc3NhZ2luZyBQbGF0Zm9ybV0oaHR0cHM6Ly9wb3J0YWwuaW5mb2JpcC5jb20vcHVzaC8pLlxyXG4gKiBUaGlzIGRvY3VtZW50IGRlc2NyaWJlcyBsaWJyYXJ5IGludGVncmF0aW9uIHN0ZXBzIGZvciB5b3VyIENvcmRvdmEgcHJvamVjdC5cclxuICpcclxuICogRm9yIG1vcmUgaW5mbyBzZWUgW0NvcmRvdmEgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9pbmZvYmlwL21vYmlsZS1tZXNzYWdpbmctY29yZG92YS1wbHVnaW4pXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IE1vYmlsZU1lc3NhZ2luZyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbW9iaWxlLW1lc3NhZ2luZy9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vYmlsZU1lc3NhZ2luZzogTW9iaWxlTWVzc2FnaW5nKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqICB0aGlzLm1vYmlsZU1lc3NhZ2luZy5pbml0KHtcclxuICogICAgYXBwbGljYXRpb25Db2RlOiAnPHlvdXJfYXBwbGljYXRpb25fY29kZT4nLFxyXG4gKiAgICBnZW9mZW5jaW5nRW5hYmxlZDogJzx0cnVlL2ZhbHNlPicsXHJcbiAqICAgIGRlZmF1bHRNZXNzYWdlU3RvcmFnZTogJzx0cnVlL2ZhbHNlPicsXHJcbiAqICAgIGlvczoge1xyXG4gKiAgICAgIG5vdGlmaWNhdGlvblR5cGVzOiBbJ2FsZXJ0JywgJ2JhZGdlJywgJ3NvdW5kJ11cclxuICogICAgfSxcclxuICogICAgYW5kcm9pZDoge1xyXG4gKiAgICAgIG5vdGlmaWNhdGlvbkljb246IDxTdHJpbmc7IGEgcmVzb3VyY2UgbmFtZSBmb3IgYSBzdGF0dXMgYmFyIGljb24gKHdpdGhvdXQgZXh0ZW5zaW9uKSwgbG9jYXRlZCBpbiAnL3BsYXRmb3Jtcy9hbmRyb2lkL2FwcC9zcmMvbWFpbi9yZXMvbWlwbWFwJz4sXHJcbiAqICAgICAgbXVsdGlwbGVOb3RpZmljYXRpb25zOiA8Qm9vbGVhbjsgc2V0IHRvICd0cnVlJyB0byBlbmFibGUgbXVsdGlwbGUgbm90aWZpY2F0aW9ucz4sXHJcbiAqICAgICAgbm90aWZpY2F0aW9uQWNjZW50Q29sb3I6IDxTdHJpbmc7IHNldCB0byBoZXggY29sb3IgdmFsdWUgaW4gZm9ybWF0ICcjUlJHR0JCJyBvciAnI0FBUlJHR0JCJz5cclxuICogICAgIH19LCAoZXJyKSA9PiB7XHJcbiAqICAgICAgLi4uXHJcbiAqICAgIH0pO1xyXG4gKlxyXG4gKiAgdGhpcy5tb2JpbGVNZXNzYWdpbmcucmVnaXN0ZXIoJ21lc3NhZ2VSZWNlaXZlZCcpLnN1YnNjcmliZSgobWVzc2FnZTogTWVzc2FnZSkgPT4ge1xyXG4gKiAgICAuLi5cclxuICogIH0pO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdNb2JpbGVNZXNzYWdpbmcnLFxyXG4gIHBsdWdpbjogJ2NvbS1pbmZvYmlwLXBsdWdpbnMtbW9iaWxlbWVzc2FnaW5nJyxcclxuICBwbHVnaW5SZWY6ICdNb2JpbGVNZXNzYWdpbmcnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaW5mb2JpcC9tb2JpbGUtbWVzc2FnaW5nLWNvcmRvdmEtcGx1Z2luJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTW9iaWxlTWVzc2FnaW5nIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFN0YXJ0cyBhIG5ldyBNb2JpbGUgTWVzc2FnaW5nIHNlc3Npb24uXHJcbiAgICpcclxuICAgKiBAbmFtZSBpbml0XHJcbiAgICogQHBhcmFtIGNvbmZpZy4gQ29uZmlndXJhdGlvbiBmb3IgTW9iaWxlIE1lc3NhZ2luZ1xyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uSW5pdEVycm9yLiBFcnJvciBjYWxsYmFja1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGluaXQoY29uZmlnOiBDb25maWd1cmF0aW9uLCBvbkluaXRFcnJvcj86IChlcnJvcjogTW9iaWxlTWVzc2FnaW5nRXJyb3IpID0+IHZvaWQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIHRvIGV2ZW50IGNvbWluZyBmcm9tIE1vYmlsZU1lc3NhZ2luZyBsaWJyYXJ5LlxyXG4gICAqXHJcbiAgICogQG5hbWUgcmVnaXN0ZXJcclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgcmVnaXN0ZXIoZXZlbnQ6IEV2ZW50KTogT2JzZXJ2YWJsZTxNZXNzYWdlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgb24oZXZlbnQ6IEV2ZW50KTogT2JzZXJ2YWJsZTxNZXNzYWdlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVbiByZWdpc3RlciBmcm9tIE1vYmlsZU1lc3NhZ2luZyBsaWJyYXJ5IGV2ZW50LlxyXG4gICAqXHJcbiAgICogQG5hbWUgdW5yZWdpc3RlclxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIHdpbGwgYmUgdW5yZWdpc3RlcmVkIGZyb20gZXZlbnRcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgdW5yZWdpc3RlcihldmVudDogRXZlbnQpOiBPYnNlcnZhYmxlPE1lc3NhZ2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgfSlcclxuICBvZmYoZXZlbnQ6IEV2ZW50KTogT2JzZXJ2YWJsZTxNZXNzYWdlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZW5kcyBhbiBldmVudCB0byB0aGUgc2VydmVyIGV2ZW50dWFsbHksIGhhbmRsZXMgcG9zc2libGUgZXJyb3JzIGFuZCBkbyByZXRyaWVzIGZvciB5b3UuXHJcbiAgICpcclxuICAgKiBAbmFtZSBzdWJtaXRFdmVudFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudERhdGEuIEFuIG9iamVjdCBjb250YWluaW5nIGV2ZW50IGRhdGFcclxuICAgKiB7XHJcbiAgICogICBkZWZpbml0aW9uSWQ6IFwiZXZlbnREZWZpbml0aW9uSWRcIlxyXG4gICAqICAgcHJvcGVydGllczoge1xyXG4gICAqICAgICBcInN0cmluZ0F0dHJpYnV0ZVwiOiBcInN0cmluZ1wiLFxyXG4gICAqICAgICBcIm51bWJlckF0dHJpYnV0ZVwiOiAxLFxyXG4gICAqICAgICBcImRhdGVBdHRyaWJ1dGVcIjogXCIyMDIwLTAyLTI2VDA5OjQxOjU3WlwiLFxyXG4gICAqICAgICBcImJvb2xlYW5BdHRyaWJ1dGVcIjogdHJ1ZVxyXG4gICAqICAgfVxyXG4gICAqIH1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgc3VibWl0RXZlbnQoZXZlbnQ6IEN1c3RvbUV2ZW50KTogdm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZW5kcyBhbiBldmVudCB0byB0aGUgc2VydmVyIGltbWVkaWF0ZWx5LlxyXG4gICAqIFlvdSBoYXZlIHRvIGhhbmRsZSBwb3NzaWJsZSBjb25uZWN0aW9uIG9yIHNlcnZlciBlcnJvcnMsIGRvIHJldHJpZXMgeW91cnNlbGYuXHJcbiAgICpcclxuICAgKiBAbmFtZSBzdWJtaXRFdmVudEltbWVkaWF0ZWx5XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50RGF0YS4gQW4gb2JqZWN0IGNvbnRhaW5pbmcgZXZlbnQgZGF0YVxyXG4gICAqIHtcclxuICAgKiAgIGRlZmluaXRpb25JZDogXCJldmVudERlZmluaXRpb25JZFwiXHJcbiAgICogICBwcm9wZXJ0aWVzOiB7XHJcbiAgICogICAgIFwic3RyaW5nQXR0cmlidXRlXCI6IFwic3RyaW5nXCIsXHJcbiAgICogICAgIFwibnVtYmVyQXR0cmlidXRlXCI6IDEsXHJcbiAgICogICAgIFwiZGF0ZUF0dHJpYnV0ZVwiOiBcIjIwMjAtMDItMjZUMDk6NDE6NTdaXCIsXHJcbiAgICogICAgIFwiYm9vbGVhbkF0dHJpYnV0ZVwiOiB0cnVlXHJcbiAgICogICB9XHJcbiAgICogfVxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIG9uIHJlc3VsdCwgeW91IGhhdmUgdG8gaGFuZGxlIGVycm9yIGFuZCBkbyByZXRyaWVzIHlvdXJzZWxmXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICB9KVxyXG4gIHN1Ym1pdEV2ZW50SW1tZWRpYXRlbHkoZXZlbnQ6IEN1c3RvbUV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTYXZlcyB1c2VyIGRhdGEgdG8gdGhlIHNlcnZlci5cclxuICAgKlxyXG4gICAqIEBuYW1lIHNhdmVVc2VyXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHVzZXJEYXRhLiBBbiBvYmplY3QgY29udGFpbmluZyB1c2VyIGRhdGFcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2F2ZVVzZXIodXNlckRhdGE6IFVzZXJEYXRhKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIHVzZXIgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuXHJcbiAgICpcclxuICAgKiBAbmFtZSBmZXRjaFVzZXJcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZmV0Y2hVc2VyKCk6IFByb21pc2U8VXNlckRhdGE+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdXNlciBkYXRhIGZyb20gdGhlIGxvY2FsbHkgc3RvcmVkIGNhY2hlLlxyXG4gICAqXHJcbiAgICogQG5hbWUgZ2V0VXNlclxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRVc2VyKCk6IFByb21pc2U8VXNlckRhdGE+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNhdmVzIGluc3RhbGxhdGlvbiB0byB0aGUgc2VydmVyLlxyXG4gICAqXHJcbiAgICogQG5hbWUgc2F2ZUluc3RhbGxhdGlvblxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YWxsYXRpb24uIEFuIG9iamVjdCBjb250YWluaW5nIGluc3RhbGxhdGlvbiBkYXRhXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNhdmVJbnN0YWxsYXRpb24oaW5zdGFsbGF0aW9uOiBJbnN0YWxsYXRpb24pOiBQcm9taXNlPEluc3RhbGxhdGlvbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2hlcyBpbnN0YWxsYXRpb24gZnJvbSB0aGUgc2VydmVyLlxyXG4gICAqXHJcbiAgICogQG5hbWUgZmV0Y2hJbnN0YWxsYXRpb25cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZmV0Y2hJbnN0YWxsYXRpb24oKTogUHJvbWlzZTxJbnN0YWxsYXRpb24+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgbG9jYWxseSBjYWNoZWQgaW5zdGFsbGF0aW9uLlxyXG4gICAqXHJcbiAgICogQG5hbWUgZ2V0SW5zdGFsbGF0aW9uXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEluc3RhbGxhdGlvbigpOiBQcm9taXNlPEluc3RhbGxhdGlvbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhbnkgaW5zdGFsbGF0aW9uIGFzIHByaW1hcnkgZm9yIHRoaXMgdXNlci5cclxuICAgKlxyXG4gICAqIEBuYW1lIHNldEluc3RhbGxhdGlvbkFzUHJpbWFyeVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwdXNoUmVnaXN0cmF0aW9uSWQgb2YgYW4gaW5zdGFsbGF0aW9uXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBwcmltYXJ5IG9yIG5vdFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZXRJbnN0YWxsYXRpb25Bc1ByaW1hcnkocHVzaFJlZ2lzdHJhdGlvbklkOiBzdHJpbmcsIHByaW1hcnk6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGVyZm9ybXMgcGVyc29uYWxpemF0aW9uIG9mIHRoZSBjdXJyZW50IGluc3RhbGxhdGlvbiBvbiB0aGUgcGxhdGZvcm0uXHJcbiAgICpcclxuICAgKiBAbmFtZSBwZXJzb25hbGl6ZVxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0LiBBbiBvYmplY3QgY29udGFpbmluZyB1c2VyIGlkZW50aXR5IGluZm9ybWF0aW9uIGFzIHdlbGwgYXMgYWRkaXRpb25hbCB1c2VyIGF0dHJpYnV0ZXMuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHBlcnNvbmFsaXplKGNvbnRleHQ6IFBlcnNvbmFsaXplQ29udGV4dCk6IFByb21pc2U8UGVyc29uYWxpemVDb250ZXh0PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQZXJmb3JtcyBkZXBlcnNvbmFsaXphdGlvbiBvZiB0aGUgY3VycmVudCBpbnN0YWxsYXRpb24gb24gdGhlIHBsYXRmb3JtLlxyXG4gICAqXHJcbiAgICogQG5hbWUgZGVwZXJzb25hbGl6ZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBkZXBlcnNvbmFsaXplKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQZXJmb3JtcyBkZXBlcnNvbmFsaXphdGlvbiBvZiB0aGUgaW5zdGFsbGF0aW9uIHJlZmVyZW5jZWQgYnkgcHVzaFJlZ2lzdHJhdGlvbklkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHB1c2hSZWdpc3RyYXRpb25JZCBvZiB0aGUgcmVtb3RlIGluc3RhbGxhdGlvbiB0byBkZXBlcnNvbmFsaXplXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRlcGVyc29uYWxpemVJbnN0YWxsYXRpb24ocHVzaFJlZ2lzdHJhdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFyayBtZXNzYWdlcyBhcyBzZWVuXHJcbiAgICpcclxuICAgKiBAbmFtZSBtYXJrTWVzc2FnZXNTZWVuXHJcbiAgICogQHBhcmFtIHtBcnJheX0gbWVzc2FnZUlkcyBvZiBpZGVudGlmaWVycyBvZiBtZXNzYWdlIHRvIG1hcmsgYXMgc2VlblxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBtYXJrTWVzc2FnZXNTZWVuKG1lc3NhZ2VJZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXlzIGJ1aWx0LWluIGVycm9yIGRpYWxvZyBzbyB0aGF0IHVzZXIgY2FuIHJlc29sdmUgZXJyb3JzIGR1cmluZyBzZGsgaW5pdGlhbGl6YXRpb24uXHJcbiAgICpcclxuICAgKiBAbmFtZSBzaG93RGlhbG9nRm9yRXJyb3JcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZXJyb3JDb2RlIHRvIGRpc3BsYXkgZGlhbG9nIGZvclxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzaG93RGlhbG9nRm9yRXJyb3IoZXJyb3JDb2RlOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZGVmYXVsdE1lc3NhZ2VTdG9yYWdlKCk6IERlZmF1bHRNZXNzYWdlU3RvcmFnZSB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXNwbGF5cyBjaGF0IHZpZXcuXHJcbiAgICpcclxuICAgKiBAbmFtZSBzaG93Q2hhdFxyXG4gICAqIEBwYXJhbSB7Q2hhdENvbmZpZ30gY2hhdCBjb25maWdcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2hvd0NoYXQoY29uZmlnPzogQ2hhdENvbmZpZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==