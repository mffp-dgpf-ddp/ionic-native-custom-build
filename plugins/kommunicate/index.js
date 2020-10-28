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
var KommunicateOriginal = /** @class */ (function (_super) {
    __extends(KommunicateOriginal, _super);
    function KommunicateOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KommunicateOriginal.prototype.login = function (kmUser) { return cordova(this, "login", {}, arguments); };
    KommunicateOriginal.prototype.registerPushNotification = function () { return cordova(this, "registerPushNotification", {}, arguments); };
    KommunicateOriginal.prototype.isLoggedIn = function () { return cordova(this, "isLoggedIn", {}, arguments); };
    KommunicateOriginal.prototype.updatePushNotificationToken = function (token) { return cordova(this, "updatePushNotificationToken", {}, arguments); };
    KommunicateOriginal.prototype.launchConversation = function () { return cordova(this, "launchConversation", {}, arguments); };
    KommunicateOriginal.prototype.launchParticularConversation = function (conversationObject) { return cordova(this, "launchParticularConversation", {}, arguments); };
    KommunicateOriginal.prototype.startNewConversation = function (conversationParams) { return cordova(this, "startNewConversation", {}, arguments); };
    KommunicateOriginal.prototype.processPushNotification = function (data) { return cordova(this, "processPushNotification", { "sync": true }, arguments); };
    KommunicateOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    KommunicateOriginal.prototype.startSingleChat = function (data) { return cordova(this, "startSingleChat", {}, arguments); };
    KommunicateOriginal.prototype.conversationBuilder = function (converationObject) { return cordova(this, "conversationBuilder", {}, arguments); };
    KommunicateOriginal.pluginName = "Kommunicate";
    KommunicateOriginal.plugin = "kommunicate-cordova-plugin";
    KommunicateOriginal.pluginRef = "kommunicate";
    KommunicateOriginal.repo = "https://github.com/Kommunicate-io/Kommunicate-Cordova-Ionic-PhoneGap-Chat-Plugin";
    KommunicateOriginal.platforms = ["Android", "Browser", "iOS"];
    return KommunicateOriginal;
}(IonicNativePlugin));
var Kommunicate = new KommunicateOriginal();
export { Kommunicate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2tvbW11bmljYXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTZDdkMsK0JBQWlCOzs7O0lBa0JoRCwyQkFBSyxhQUFDLE1BQVc7SUFVakIsOENBQXdCO0lBVXhCLGdDQUFVO0lBV1YsaURBQTJCLGFBQUMsS0FBYTtJQVV6Qyx3Q0FBa0I7SUFnQmxCLGtEQUE0QixhQUFDLGtCQUF1QjtJQVlwRCwwQ0FBb0IsYUFBQyxrQkFBdUI7SUFXNUMsNkNBQXVCLGFBQUMsSUFBUztJQVVqQyw0QkFBTTtJQVlOLHFDQUFlLGFBQUMsSUFBUztJQWlCekIseUNBQW1CLGFBQUMsaUJBQXNCOzs7Ozs7c0JBdkw1QztFQThDaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQG5hbWUgS29tbXVuaWNhdGVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBwbHVnaW4gZm9yIHRoZSBLb21tdW5pY2F0ZSBTREsuXHJcbiAqIFdpdGggdGhlIGhlbHAgb2YgdGhpcyBwbHVnaW4sIHlvdSBjYW4gZWFzaWx5IGFkZCBodW1hbiArIGJvdCBjaGF0IHN1cHBvcnQgZnVuY3Rpb25hbGl0eSB0byB5b3UgYXBwLlxyXG4gKiBSZWZlciB0bzogVE9ETzogaW5zZXJ0IHNpdGUgbGlua1xyXG4gKiBGb3IgZG9jdW1lbnRhdGlvbjogVE9ETzogaW5zZXJ0IGxpbmtcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgS29tbXVuaWNhdGUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL0tvbW11bmljYXRlJztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBrb21tdW5pY2F0ZTogS29tbXVuaWNhdGUpIHsgfVxyXG4gKiAvL2Fsc28gYWRkIFsuLi4sIEtvbW11bmljYXRlLCAuLi4gXSBpbnNpZGUgdGhlIHByb3ZpZGVycyBhcnJheSwgaWYgcmVxdWlyZWRcclxuICpcclxuICogdmFyIGttVXNlciA9IHtcclxuICogICAgdXNlcklkIDogJ3JhbmRvbXN0cmluZycsXHJcbiAqICAgIGF1dGhlbnRpY2F0aW9uVHlwZUlkIDogMVxyXG4gKiB9O1xyXG4gKlxyXG4gKiB0aGlzLmtvbW11bmljYXRlLmxvZ2luKGttVXNlcilcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKFwiU3VjZXNzZnVsbHkgbG9nZ2VkIGluLlwiICsgcmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2dnaW5nIGluLlwiICsgZXJyb3IpKTtcclxuICpcclxuICogdmFyIGNvbnZlcnNhdGlvbk9iamVjdCA9IHtcclxuICogICAgaXNVbmlxdWUgOiBmYWxzZVxyXG4gKiB9O1xyXG4gKlxyXG4gKiB0aGlzLmtvbW11bmljYXRlLmNvbnZlcnNhdGlvbkJ1aWxkZXIoY29udmVyYXRpb25PYmplY3QpXHJcbiAqICAgLnRoZW4oKGNsaWVudENoYW5uZWxLZXk6IGFueSkgPT4gY29uc29sZS5sb2coXCJLb21tdW5pY2F0ZSBjcmVhdGUgY29udmVyc2F0aW9uIHN1Y2Nlc3NmdWwgdGhlIGNsaWVudENoYW5uZWxLZXkgaXMgOiBcIiArIGNsaWVudENoYW5uZWxLZXkpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGNvbnZlcnNhdGlvbi5cIiArIGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0tvbW11bmljYXRlJyxcclxuICBwbHVnaW46ICdrb21tdW5pY2F0ZS1jb3Jkb3ZhLXBsdWdpbicsXHJcbiAgcGx1Z2luUmVmOiAna29tbXVuaWNhdGUnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vS29tbXVuaWNhdGUtaW8vS29tbXVuaWNhdGUtQ29yZG92YS1Jb25pYy1QaG9uZUdhcC1DaGF0LVBsdWdpbicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgS29tbXVuaWNhdGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogTG9naW4gdGhlIHVzZXIgd2l0aCB0aGUgZGV0YWlscyBwYXNzZWQgaW5cclxuICAgKiBDcmVhdGVzIGEgbmV3IHVzZXIgd2l0aCB0aGUgZGV0YWlscyBwcm92aWRlZCB0aGVyZSBpcyBubyBleGlzdGluZyB1c2VyXHJcbiAgICpcclxuICAgKiB2YXIga21Vc2VyID0ge1xyXG4gICAqICAgICd1c2VySWQnIDogJ3VzZXJJZCcsICAgLy9SZXBsYWNlIGl0IHdpdGggdGhlIHVzZXJJZCBvZiB0aGUgbG9nZ2VkIGluIHVzZXJcclxuICAgKiAgICAncGFzc3dvcmQnIDogJ3Bhc3N3b3JkJywgIC8vcmVwbGFjZSB3aXRoIHBhc3N3b3JkXHJcbiAgICogICAgJ2F1dGhlbnRpY2F0aW9uVHlwZUlkJyA6IDEsXHJcbiAgICogICAgJ2ltYWdlTGluaycgOiA8aW1hZ2UtbGluay1mb3ItdXNlcj5cclxuICAgKiAgICAnYXBwbGljYXRpb25JZCcgOiAnPEFQUF9JRD4nLCAgLy9yZXBsYWNlIHRoaXMgd2l0aCB5b3VyIEFQUF9JRCBmcm9tIEFwcGxvemljIERhc2hib2FyZFxyXG4gICAqICAgICdkZXZpY2VBcG5zVHlwZScgOiAwICAgIC8vU2V0IDAgZm9yIERldmVsb3BtZW50IGFuZCAxIGZvciBEaXN0cmlidXRpb24gKFJlbGVhc2UpXHJcbiAgICogfTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSBrbVVzZXIge2FueX0gdGhlIHVzZXIgZGV0YWlsc1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbG9naW4oa21Vc2VyOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXIgZm9yIHB1c2ggbm90aWZpY2F0aW9uXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlZ2lzdGVyUHVzaE5vdGlmaWNhdGlvbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYW55IHVzZXIgaXMgbG9nZ2VkIGluIG9yIG5vdFxyXG4gICAqXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpc0xvZ2dlZEluKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIHRva2VuIGZvciBwdXNoIG5vdGlmaWNhdGlvbnNcclxuICAgKlxyXG4gICAqIEBwYXJhbSB0b2tlbiB7c3RyaW5nfSB0aGUgdXNlciBkZXRhaWxzXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB1cGRhdGVQdXNoTm90aWZpY2F0aW9uVG9rZW4odG9rZW46IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMYXVuY2ggdGhlIGNvbnZlcnNhdGlvbiBzY3JlZW4gKGl0IGNvbnRhaW5zIGFsbCB0aGUgZXhpc3RpbmcgY29udmVyc2F0aW9ucylcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbGF1bmNoQ29udmVyc2F0aW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMYXVuY2ggdGhlIGNvbnZlcnNhdGlvbiBpZGVudGlmaWVkIGJ5IHRoZSBnaXZlbiBjaGFubmVsKGNvbnZlcnNhdGlvbikga2V5XHJcbiAgICpcclxuICAgKiBsZXQgY29udk9iaiA9IHtcclxuICAgKiAgICdjbGllbnRDaGFubmVsS2V5JyA6IGNsaWVudENoYW5uZWxLZXksIC8vcGFzcyB0aGUgY2xpZW50Q2hhbm5lbEtleSBoZXJlXHJcbiAgICogICAndGFrZU9yZGVyJyA6IHRydWUgLy9za2lwIGNoYXQgbGlzdCBvbiBiYWNrIHByZXNzLCBwYXNzIGZhbHNlIGlmIHlvdSB3YW50IHRvIHNob3cgY2hhdCBsaXN0IG9uIGJhY2sgcHJlc3NcclxuICAgKiB9O1xyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbnZlcnNhdGlvbk9iamVjdCB7YW55fSB0aGUgY2hhbm5lbCBrZXkgYW5kIG90aGVyIGluZm9ybWF0aW9uXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBsYXVuY2hQYXJ0aWN1bGFyQ29udmVyc2F0aW9uKGNvbnZlcnNhdGlvbk9iamVjdDogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0IGEgbmV3IGNvbnZlcnNhdGlvbiwgZGV0YWlscyBhYm91dCB0aGUgY29udmVyc2F0aW9uIHRvIGJlIHBhc3NlZCBhcyBwYXJhbWV0ZXJzXHJcbiAgICpcclxuICAgKiBAZGVwcmVjYXRlZFxyXG4gICAqIEBwYXJhbSBjb252ZXJhdGlvblBhcmFtcyB7YW55fSB0aGUgdXNlciBkZXRhaWxzXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdGFydE5ld0NvbnZlcnNhdGlvbihjb252ZXJzYXRpb25QYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcm9jZXNzIHB1c2ggbm90aWZpY2F0aW9uc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIGRhdGEge2FueX0gdGhlIHVzZXIgZGV0YWlsc1xyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZS9mYWxzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHByb2Nlc3NQdXNoTm90aWZpY2F0aW9uKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9nb3V0IHRoZSBjdXJyZW50IHVzZXJcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydCBhIHNpbmdsZSBjaGF0IChjb252ZXJzYXRpb24pXHJcbiAgICpcclxuICAgKiBAZGVwcmVjYXRlZFxyXG4gICAqIEBwYXJhbSBkYXRhIHthbnl9IHRoZSB1c2VyIGRldGFpbHNcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0YXJ0U2luZ2xlQ2hhdChkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGF1bmNoZXMgYSBjb252ZXJzYXRpb24gd2l0aCB0aGUgcHJvcGVydGllcyBwYXNzZWQgaW4gdGhlIGNvbnZlcnNhdGlvbiBwYXJhbVxyXG4gICAqXHJcbiAgICogdmFyIGNvbnZlcnNhdGlvbk9iamVjdCA9IHtcclxuICAgKiAgICdpc1VuaXF1ZScgOiBmYWxzZSxcclxuICAgKiAgICdhZ2VudElkcyc6Wyc8QUdFTlRfSUQ+J10sICAvL0xpc3Qgb2YgYWdlbnRJZHMuIEFHRU5UX0lEIGlzIHRoZSBlbWFpbElEIHVzZWQgdG8gc2lnbnVwIG9uIEtvbW11bmljYXRlXHJcbiAgICogICAnYm90SWRzJzogWyc8Qk9UX0lEPiddICAvL0xpc3Qgb2YgYm90SWRzLiBHbyB0byBNYW5hZ2UgQm90cyhodHRwczovL2Rhc2hib2FyZC5rb21tdW5pY2F0ZS5pby9ib3RzL21hbmFnZS1ib3RzKSAtPiBDb3B5IGJvdElEXHJcbiAgICogfTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb252ZXJzYXRpb25PYmplY3Qge2FueX0gdGhlIHVzZXIgZGV0YWlsc1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY29udmVyc2F0aW9uQnVpbGRlcihjb252ZXJhdGlvbk9iamVjdDogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19