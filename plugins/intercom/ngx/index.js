import { __decorate, __extends } from "tslib";
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var Intercom = /** @class */ (function (_super) {
    __extends(Intercom, _super);
    function Intercom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Intercom.prototype.registerIdentifiedUser = function (options) { return cordova(this, "registerIdentifiedUser", {}, arguments); };
    Intercom.prototype.registerUnidentifiedUser = function (options) { return cordova(this, "registerUnidentifiedUser", {}, arguments); };
    Intercom.prototype.reset = function () { return cordova(this, "reset", {}, arguments); };
    Intercom.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    Intercom.prototype.setSecureMode = function (secureHash, secureData) { return cordova(this, "setSecureMode", {}, arguments); };
    Intercom.prototype.setUserHash = function (secureHash) { return cordova(this, "setUserHash", {}, arguments); };
    Intercom.prototype.updateUser = function (attributes) { return cordova(this, "updateUser", {}, arguments); };
    Intercom.prototype.logEvent = function (eventName, metaData) { return cordova(this, "logEvent", {}, arguments); };
    Intercom.prototype.displayMessenger = function () { return cordova(this, "displayMessenger", {}, arguments); };
    Intercom.prototype.displayMessageComposer = function () { return cordova(this, "displayMessageComposer", {}, arguments); };
    Intercom.prototype.displayMessageComposerWithInitialMessage = function (initialMessage) { return cordova(this, "displayMessageComposerWithInitialMessage", {}, arguments); };
    Intercom.prototype.displayConversationsList = function () { return cordova(this, "displayConversationsList", {}, arguments); };
    Intercom.prototype.displayHelpCenter = function () { return cordova(this, "displayHelpCenter", {}, arguments); };
    Intercom.prototype.unreadConversationCount = function () { return cordova(this, "unreadConversationCount", {}, arguments); };
    Intercom.prototype.setLauncherVisibility = function (visibility) { return cordova(this, "setLauncherVisibility", {}, arguments); };
    Intercom.prototype.setInAppMessageVisibility = function (visibility) { return cordova(this, "setInAppMessageVisibility", {}, arguments); };
    Intercom.prototype.hideMessenger = function () { return cordova(this, "hideMessenger", {}, arguments); };
    Intercom.prototype.registerForPush = function () { return cordova(this, "registerForPush", {}, arguments); };
    Intercom.prototype.sendPushTokenToIntercom = function (token) { return cordova(this, "sendPushTokenToIntercom", {}, arguments); };
    Intercom.pluginName = "Intercom";
    Intercom.plugin = "cordova-plugin-intercom";
    Intercom.pluginRef = "intercom";
    Intercom.repo = "https://github.com/intercom/intercom-cordova";
    Intercom.platforms = ["Android", "iOS"];
    Intercom = __decorate([
        Injectable()
    ], Intercom);
    return Intercom;
}(IonicNativePlugin));
export { Intercom };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ludGVyY29tL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQStCYiw0QkFBaUI7Ozs7SUFPN0MseUNBQXNCLGFBQUMsT0FBWTtJQVVuQywyQ0FBd0IsYUFBQyxPQUFZO0lBU3JDLHdCQUFLO0lBU0wseUJBQU07SUFZTixnQ0FBYSxhQUFDLFVBQWtCLEVBQUUsVUFBZTtJQVVqRCw4QkFBVyxhQUFDLFVBQWtCO0lBVTlCLDZCQUFVLGFBQUMsVUFBZTtJQVcxQiwyQkFBUSxhQUFDLFNBQWlCLEVBQUUsUUFBYTtJQVN6QyxtQ0FBZ0I7SUFTaEIseUNBQXNCO0lBVXRCLDJEQUF3QyxhQUFDLGNBQXNCO0lBUy9ELDJDQUF3QjtJQVN4QixvQ0FBaUI7SUFTakIsMENBQXVCO0lBVXZCLHdDQUFxQixhQUFDLFVBQWtCO0lBVXhDLDRDQUF5QixhQUFDLFVBQWtCO0lBUzVDLGdDQUFhO0lBU2Isa0NBQWU7SUFVZiwwQ0FBdUIsYUFBQyxLQUFhOzs7Ozs7SUFyTDFCLFFBQVE7UUFEcEIsVUFBVSxFQUFFO09BQ0EsUUFBUTttQkFoQ3JCO0VBZ0M4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgSW50ZXJjb21cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgaXMgYSBwbHVnaW4gdGhhdCBhbGxvd3MgeW91ciBJb25pYyBhcHAgdG8gdXNlIEludGVyY29tIGZvciBpT1MgYW5kL29yIEludGVyY29tIGZvciBBbmRyb2lkLlxyXG4gKiBGb2xsb3cgdGhlIG9mZmljYWwgZG9jdW1lbnRhdGlvbiB0byBzZXR1cCB0aGlzIHBsdWdpbiBjb3JyZWN0bHk6IGh0dHBzOi8vZGV2ZWxvcGVycy5pbnRlcmNvbS5jb20vZG9jcy9jb3Jkb3ZhLXBob25lZ2FwLWNvbmZpZ3VyYXRpb25cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgSW50ZXJjb20gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ludGVyY29tL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaW50ZXJjb206IEludGVyY29tKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuaW50ZXJjb20ucmVnaXN0ZXJVbmlkZW50aWZpZWRVc2VyKCk7XHJcbiAqIC4uLlxyXG4gKiB0aGlzLmludGVyY29tLnJlZ2lzdGVyRm9yUHVzaCgpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdJbnRlcmNvbScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW50ZXJjb20nLFxyXG4gIHBsdWdpblJlZjogJ2ludGVyY29tJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2ludGVyY29tL2ludGVyY29tLWNvcmRvdmEnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbnRlcmNvbSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBSZWdpc3RlciBhIGlkZW50aWZpZWQgdXNlclxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHthbnl9IE9wdGlvbnNcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlZ2lzdGVySWRlbnRpZmllZFVzZXIob3B0aW9uczogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIGEgdW5pZGVudGlmaWVkIHVzZXJcclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7YW55fSBPcHRpb25zXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZWdpc3RlclVuaWRlbnRpZmllZFVzZXIob3B0aW9uczogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgcmVzZXRzIHRoZSBJbnRlcmNvbSBpbnRlZ3JhdGlvbidzIGNhY2hlIG9mIHlvdXIgdXNlcidzIGlkZW50aXR5IGFuZCB3aXBlcyB0aGUgc2xhdGUgY2xlYW4uXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZXNldCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc2VjdXJlSGFzaCB7c3RyaW5nfVxyXG4gICAqIEBwYXJhbSBzZWN1cmVEYXRhIHthbnl9XHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqIEBkZXByZWNhdGVkIFVzZSBzZXRVc2VySGFzaCBpbnN0ZWFkIGFzIG9mIEludGVyY29tIENvcmRvdmEgNC4wLjAgYW5kIGhpZ2hlciBodHRwczovL2dpdGh1Yi5jb20vaW50ZXJjb20vaW50ZXJjb20tY29yZG92YS9ibG9iL21hc3Rlci9DSEFOR0VMT0cubWQjNDAwLTIwMTctMDgtMjlcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2V0U2VjdXJlTW9kZShzZWN1cmVIYXNoOiBzdHJpbmcsIHNlY3VyZURhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSBzZWN1cmVIYXNoIHtzdHJpbmd9XHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZXRVc2VySGFzaChzZWN1cmVIYXNoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYXR0cmlidXRlcyB7YW55fVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgdXBkYXRlVXNlcihhdHRyaWJ1dGVzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9XHJcbiAgICogQHBhcmFtIG1ldGFEYXRhIHthbnl9XHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBsb2dFdmVudChldmVudE5hbWU6IHN0cmluZywgbWV0YURhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZGlzcGxheU1lc3NlbmdlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRpc3BsYXlNZXNzYWdlQ29tcG9zZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGluaXRpYWxNZXNzYWdlIHtzdHJpbmd9XHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBkaXNwbGF5TWVzc2FnZUNvbXBvc2VyV2l0aEluaXRpYWxNZXNzYWdlKGluaXRpYWxNZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRpc3BsYXlDb252ZXJzYXRpb25zTGlzdCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRpc3BsYXlIZWxwQ2VudGVyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgdW5yZWFkQ29udmVyc2F0aW9uQ291bnQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHZpc2liaWxpdHkge3N0cmluZ31cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldExhdW5jaGVyVmlzaWJpbGl0eSh2aXNpYmlsaXR5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdmlzaWJpbGl0eSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2V0SW5BcHBNZXNzYWdlVmlzaWJpbGl0eSh2aXNpYmlsaXR5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGhpZGVNZXNzZW5nZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZWdpc3RlckZvclB1c2goKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHRva2VuIHtzdHJpbmd9XHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZW5kUHVzaFRva2VuVG9JbnRlcmNvbSh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19