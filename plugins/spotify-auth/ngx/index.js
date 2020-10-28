import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var SpotifyAuth = /** @class */ (function (_super) {
    __extends(SpotifyAuth, _super);
    function SpotifyAuth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpotifyAuth.prototype.authorize = function (cfg) { return cordova(this, "authorize", { "sync": false }, arguments); };
    SpotifyAuth.prototype.forget = function () { return cordova(this, "forget", { "sync": true }, arguments); };
    SpotifyAuth.pluginName = "SpotifyAuth";
    SpotifyAuth.plugin = "cordova-spotify-oauth";
    SpotifyAuth.pluginRef = "cordova.plugins.spotifyAuth";
    SpotifyAuth.repo = "https://github.com/Festify/cordova-spotify-oauth";
    SpotifyAuth.install = "ionic cordova plugin add cordova-spotify-oauth --variable LOCAL_STORAGE_KEY=\"SpotifyOAuthData\"";
    SpotifyAuth.installVariables = ["LOCAL_STORAGE_KEY"];
    SpotifyAuth.platforms = ["Android", "iOS"];
    SpotifyAuth = __decorate([
        Injectable()
    ], SpotifyAuth);
    return SpotifyAuth;
}(IonicNativePlugin));
export { SpotifyAuth };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Nwb3RpZnktYXV0aC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFrR3ZDLCtCQUFpQjs7OztJQXVCaEQsK0JBQVMsYUFBQyxHQUFXO0lBZXJCLDRCQUFNOzs7Ozs7OztJQXRDSyxXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVc7c0JBbkd4QjtFQW1HaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIE9BdXRoIGNvbmZpZ3VyYXRpb24gZGF0YS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcclxuICAvKiogVGhlIGNsaWVudCBJRCBhcyBwZXIgdGhlIFNwb3RpZnkgZGV2IGNvbnNvbGUuICovXHJcbiAgY2xpZW50SWQ6IHN0cmluZztcclxuXHJcbiAgLyoqIFRoZSByZWRpcmVjdCBVUkkgYXMgZW50ZXJlZCBpbiB0aGUgU3BvdGlmeSBkZXYgY29uc29sZS4gKi9cclxuICByZWRpcmVjdFVybDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTYWZldHkgbWFyZ2luIHRpbWUgKGluIG1pbGxpc2Vjb25kcykgZm9yIHRoZSB0b2tlbiByZWZyZXNoLlxyXG4gICAqXHJcbiAgICogVGhlIHBsdWdpbiBhcHBsaWVzIGEgc2FmZXR5IG1hcmdpbiB0byB0aGUgdG9rZW4gbGlmZXRpbWUgaW4gb3JkZXJcclxuICAgKiB0byBnaXZlIHRoZSB0b2tlbiB1c2VyIGVub3VnaCB0aW1lIHRvIHBlcmZvcm0gYWxsIG9wZXJhdGlvbnMgbmVlZGVkLlxyXG4gICAqXHJcbiAgICogT3RoZXJ3aXNlIHRoZSBwbHVnaW4gbWlnaHQgaGFuZCBvdXQgYSB0b2tlbiB0aGF0IGlzIGFscmVhZHkgZXhwaXJlZFxyXG4gICAqIGJlZm9yZSBpdCBjb3VsZCBldmVyIGJlIHVzZWQuXHJcbiAgICpcclxuICAgKiBUaGUgc2FmZXR5IG1hcmdpbiBkZWZhdWx0cyB0byAzMHMuXHJcbiAgICovXHJcbiAgcmVmcmVzaFNhZmV0eU1hcmdpbj86IG51bWJlcjtcclxuXHJcbiAgLyoqIFJlcXVlc3RlZCBPQXV0aCBzY29wZXMuICovXHJcbiAgc2NvcGVzOiBzdHJpbmdbXTtcclxuXHJcbiAgLyoqIFRoZSB0b2tlbiBleGNoYW5nZSBVUkwuICovXHJcbiAgdG9rZW5FeGNoYW5nZVVybDogc3RyaW5nO1xyXG5cclxuICAvKiogVGhlIHRva2VuIHJlZnJlc2ggVVJMLiAqL1xyXG4gIHRva2VuUmVmcmVzaFVybDogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIGF1dGhvcml6YXRpb24gZGF0YS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aG9yaXphdGlvbkRhdGEge1xyXG4gIC8qKiBBIHZhbGlkIGFjY2VzcyB0b2tlbi4gKi9cclxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG5cclxuICAvKiogVGhlIGVuY3J5cHRlZCByZWZyZXNoIHRva2VuLiAqL1xyXG4gIGVuY3J5cHRlZFJlZnJlc2hUb2tlbjogc3RyaW5nO1xyXG5cclxuICAvKiogVGhlIGRhdGUgKGZyb20gVVRDLCBpbiBtaWxsaXNlY29uZHMpIHdoZW4gdGhlIGdpdmVuIGFjY2VzcyB0b2tlbiBleHBpcmVzLiAqL1xyXG4gIGV4cGlyZXNBdDogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgU3BvdGlmeSBBdXRoXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIHBsdWdpbiBmb3IgYXV0aGVudGljYXRpbmcgd2l0aCBTcG90aWZ5XHJcbiAqID4gaHR0cHM6Ly9naXRodWIuY29tL0Zlc3RpZnkvY29yZG92YS1zcG90aWZ5LW9hdXRoXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNwb3RpZnlBdXRoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcG90aWZ5LWF1dGgvbmd4JztcclxuICpcclxuICogLy8gWy4uLl1cclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzcG90aWZ5QXV0aDogU3BvdGlmeUF1dGgpIHsgfVxyXG4gKlxyXG4gKiAvLyBbLi4uXVxyXG4gKlxyXG4gKiBjb25zdCBjb25maWcgPSB7XHJcbiAqICAgY2xpZW50SWQ6IFwiPFNQT1RJRlkgQ0xJRU5UIElEPlwiLFxyXG4gKiAgIHJlZGlyZWN0VXJsOiBcIjxSRURJUkVDVCBVUkwsIE1VU1QgTUFUQ0ggV0lUSCBBVVRIIEVORFBPSU5UIEFORCBTUE9USUZZIERFViBDT05TT0xFPlwiLFxyXG4gKiAgIHNjb3BlczogW1wic3RyZWFtaW5nXCJdLCAvLyBzZWUgU3BvdGlmeSBEZXYgY29uc29sZSBmb3IgYWxsIHNjb3Blc1xyXG4gKiAgIHRva2VuRXhjaGFuZ2VVcmw6IFwiPFVSTCBPRiBUT0tFTiBFWENIQU5HRSBIVFRQIEVORFBPSU5UPlwiLFxyXG4gKiAgIHRva2VuUmVmcmVzaFVybDogXCI8VVJMIE9GIFRPS0VOIFJFRlJFU0ggSFRUUCBFTkRQT0lOVD5cIixcclxuICogfTtcclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuc3BvdGlmeUF1dGguYXV0aG9yaXplKGNvbmZpZylcclxuICogICAudGhlbigoeyBhY2Nlc3NUb2tlbiwgZXhwaXJlc0F0IH0pID0+IHtcclxuICogICAgIGNvbnNvbGUubG9nKGBHb3QgYW4gYWNjZXNzIHRva2VuLCBpdHMgJHthY2Nlc3NUb2tlbn0hYCk7XHJcbiAqICAgICBjb25zb2xlLmxvZyhgSXRzIGdvaW5nIHRvIGV4cGlyZSBpbiAke2V4cGlyZXNBdCAtIERhdGUubm93KCl9bXMuYCk7XHJcbiAqICAgfSk7XHJcbiAqXHJcbiAqIC8vIFsuLi5dXHJcbiAqXHJcbiAqIHRoaXMuc3BvdGlmeUF1dGguZm9yZ2V0KCk7XHJcbiAqXHJcbiAqIC8vIFsuLi5dXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1Nwb3RpZnlBdXRoJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXNwb3RpZnktb2F1dGgnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5zcG90aWZ5QXV0aCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9GZXN0aWZ5L2NvcmRvdmEtc3BvdGlmeS1vYXV0aCcsXHJcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXNwb3RpZnktb2F1dGggLS12YXJpYWJsZSBMT0NBTF9TVE9SQUdFX0tFWT1cIlNwb3RpZnlPQXV0aERhdGFcIicsXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogWydMT0NBTF9TVE9SQUdFX0tFWSddLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTcG90aWZ5QXV0aCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBPYnRhaW5zIHZhbGlkIGF1dGhvcml6YXRpb24gZGF0YS5cclxuICAgKlxyXG4gICAqIFRoaXMgbWV0aG9kIHBlcmZvcm1zIHRoZSBuZWNlc3Nhcnkgc3RlcHMgaW4gb3JkZXIgdG8gb2J0YWluIGEgdmFsaWRcclxuICAgKiBhY2Nlc3MgdG9rZW4uIEl0IHBlcmZvcm1zIHRoZSBPQXV0aCBkYW5jZSBwcm9tcHRpbmcgdGhlIHVzZXIgdG8gbG9nIGluLFxyXG4gICAqIGV4Y2hhbmdlcyB0aGUgb2J0YWluZWQgYXV0aG9yaXphdGlvbiBjb2RlIGZvciBhbiBhY2Nlc3MgYW5kIGEgcmVmcmVzaFxyXG4gICAqIHRva2VuLCBjYWNoZXMgdGhvc2UsIGFuZCByZXR1cm5zIGJvdGggdG8gdGhlIGRldmVsb3Blci5cclxuICAgKlxyXG4gICAqIFdoZW4gaXQgaXMgaW52b2tlZCBhZ2FpbiwgaXQgd2lsbCBmaXJzdCBjaGVjayB3aGV0aGVyIHRoZSBjYWNoZWQgYWNjZXNzXHJcbiAgICogdG9rZW4gaXMgc3RpbGwgdmFsaWQgKGluY2x1ZGluZyBhIGNvbmZpZ3VyYWJsZSBzYWZldHkgbWFyZ2luKSBhbmQgdGhlXHJcbiAgICogc2NvcGVzIGVxdWFsLCBhbmQgcmV0dXJuIHRoZSB0b2tlbiBkaXJlY3RseSBpZiB0aGF0IGlzIHRoZSBjYXNlLiBPdGhlcndpc2UsXHJcbiAgICogdGhlIG1ldGhvZCB3aWxsIHRyYW5zcGFyZW50bHkgcmVmcmVzaCB0aGUgdG9rZW4gKG9yIG9idGFpbiBhIG5ldyBvbmUgaWZcclxuICAgKiB0aGUgc2NvcGVzIGNoYW5nZWQpIGFuZCByZXR1cm4gdGhhdC5cclxuICAgKlxyXG4gICAqIEJvdHRvbSBsaW5lIC0gYWx3YXlzIGNhbGwgdGhpcyBpZiB5b3UgbmVlZCBhIHZhbGlkIGFjY2VzcyB0b2tlbiBpbiB5b3VyIGNvZGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY2ZnIHtDb25maWd9IGNvbmZpZ3VyYXRpb25cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEF1dGhvcml6YXRpb25EYXRhPn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiBmYWxzZSxcclxuICB9KVxyXG4gIGF1dGhvcml6ZShjZmc6IENvbmZpZyk6IFByb21pc2U8QXV0aG9yaXphdGlvbkRhdGE+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYWxsIGNhY2hlZCBkYXRhIHNvIHRoYXQgYGF1dGhvcml6ZWAgcGVyZm9ybXMgdGhlIGZ1bGxcclxuICAgKiBvYXV0aCBkYW5jZSBhZ2Fpbi5cclxuICAgKlxyXG4gICAqIFRoaXMgaXMgYWtpbiB0byBhIFwibG9nb3V0XCIuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBmb3JnZXQoKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==