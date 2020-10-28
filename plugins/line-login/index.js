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
var LineLoginOriginal = /** @class */ (function (_super) {
    __extends(LineLoginOriginal, _super);
    function LineLoginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineLoginOriginal.prototype.initialize = function (param) { return cordova(this, "initialize", {}, arguments); };
    LineLoginOriginal.prototype.login = function () { return cordova(this, "login", {}, arguments); };
    LineLoginOriginal.prototype.loginWeb = function () { return cordova(this, "loginWeb", {}, arguments); };
    LineLoginOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    LineLoginOriginal.prototype.getAccessToken = function () { return cordova(this, "getAccessToken", {}, arguments); };
    LineLoginOriginal.prototype.verifyAccessToken = function () { return cordova(this, "verifyAccessToken", {}, arguments); };
    LineLoginOriginal.prototype.refreshAccessToken = function () { return cordova(this, "refreshAccessToken", {}, arguments); };
    LineLoginOriginal.pluginName = "LineLogin";
    LineLoginOriginal.plugin = "cordova-line-login-plugin";
    LineLoginOriginal.pluginRef = "lineLogin";
    LineLoginOriginal.repo = "https://github.com/nrikiji/cordova-line-login-plugin";
    LineLoginOriginal.install = "ionic cordova plugin add https://github.com/nrikiji/cordova-line-login-plugin.git --variable LINE_CHANNEL_ID=\"your_line_channel_id\"";
    LineLoginOriginal.installVariables = ["LINE_CHANNEL_ID"];
    LineLoginOriginal.platforms = ["Android", "iOS"];
    return LineLoginOriginal;
}(IonicNativePlugin));
var LineLogin = new LineLoginOriginal();
export { LineLogin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xpbmUtbG9naW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBbUZ6Qyw2QkFBaUI7Ozs7SUFPOUMsOEJBQVUsYUFBQyxLQUFzQjtJQVNqQyx5QkFBSztJQVVMLDRCQUFRO0lBU1IsMEJBQU07SUFTTixrQ0FBYztJQVNkLHFDQUFpQjtJQVNqQixzQ0FBa0I7Ozs7Ozs7O29CQWxKcEI7RUFvRitCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGluZUxvZ2luUGFyYW1zIHtcclxuICAvKipcclxuICAgKiBMaW5lIENoYW5uZWwgSURcclxuICAgKi9cclxuICBjaGFubmVsX2lkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGluZUxvZ2luUHJvZmlsZSB7XHJcbiAgLyoqXHJcbiAgICogTGluZSBVc2VyIElEXHJcbiAgICovXHJcbiAgdXNlcklEOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIExpbmUgUHJvZmlsZSBJbWFnZSBVUkxcclxuICAgKi9cclxuICBwaWN0dXJlVVJMOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIExpbmUgUHJvZmlsZSBOYW1lXHJcbiAgICovXHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRW1haWxcclxuICAgKi9cclxuICBlbWFpbD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaW5lTG9naW5BY2Nlc3NUb2tlbiB7XHJcbiAgLyoqXHJcbiAgICogTGluZSBBY2Nlc3MgVG9rZW5cclxuICAgKi9cclxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBMaW5lIEFjY2VzcyBUb2tlbiBFeHBpcmUgVGltZVxyXG4gICAqL1xyXG4gIGV4cGlyZVRpbWU6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIExpbmUgTG9naW5cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBmdW5jdGlvbiBsb2dpbiwgbG9ncyBvdXQsIGFjcXVpcmVzLCB2ZXJpZmllcywgYW5kIHJlZnJlc2hlcyB0aGUgYWNjZXNzIHRva2VuLiBUaGUgdmVyc2lvbiBvZiBMaW5lU0RLIHlvdSBhcmUgdXNpbmcgaXMgYXMgZm9sbG93cy5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgTGluZUxvZ2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9saW5lLWxvZ2luL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbGluZUxvZ2luOiBMaW5lTG9naW4pIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5saW5lTG9naW4uaW5pdGlhbGl6ZSh7IGNoYW5uZWxfaWQ6IFwieHh4eHh4eHh4eFwiIH0pXHJcbiAqXHJcbiAqIHRoaXMubGluZUxvZ2luLmxvZ2luKClcclxuICogICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcclxuICogICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gKlxyXG4gKiBgYGBcclxuICpcclxuICogQGludGVyZmFjZXNcclxuICogTGluZUxvZ2luUGFyYW1zXHJcbiAqIExpbmVMb2dpblByb2ZpbGVcclxuICogTGluZUxvZ2luQWNjZXNzVG9rZW5cclxuICpcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdMaW5lTG9naW4nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtbGluZS1sb2dpbi1wbHVnaW4nLFxyXG4gIHBsdWdpblJlZjogJ2xpbmVMb2dpbicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ucmlraWppL2NvcmRvdmEtbGluZS1sb2dpbi1wbHVnaW4nLFxyXG4gIGluc3RhbGw6XHJcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGh0dHBzOi8vZ2l0aHViLmNvbS9ucmlraWppL2NvcmRvdmEtbGluZS1sb2dpbi1wbHVnaW4uZ2l0IC0tdmFyaWFibGUgTElORV9DSEFOTkVMX0lEPVwieW91cl9saW5lX2NoYW5uZWxfaWRcIicsXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogWydMSU5FX0NIQU5ORUxfSUQnXSxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGluZUxvZ2luIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVcclxuICAgKiBAcGFyYW0gcGFyYW0gTGluZUxvZ2luUGFyYW1zXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpbml0aWFsaXplKHBhcmFtOiBMaW5lTG9naW5QYXJhbXMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9naW5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPExpbmVMb2dpblByb2ZpbGU+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBsb2dpbigpOiBQcm9taXNlPExpbmVMb2dpblByb2ZpbGU+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ2luIHdpdGggV2ViXHJcbiAgICogKGlPUyBvbmx5KVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TGluZUxvZ2luUHJvZmlsZT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGxvZ2luV2ViKCk6IFByb21pc2U8TGluZUxvZ2luUHJvZmlsZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9nb3V0XHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBsb2dvdXQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBBY2Nlc3MgVG9rZW5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPExpbmVMb2dpbkFjY2Vzc1Rva2VuPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0QWNjZXNzVG9rZW4oKTogUHJvbWlzZTxMaW5lTG9naW5BY2Nlc3NUb2tlbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZ5IEFjY2Vzc1Rva2VuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB2ZXJpZnlBY2Nlc3NUb2tlbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVmcmVzaCBBY2Nlc3MgVG9rZW5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlZnJlc2hBY2Nlc3NUb2tlbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=