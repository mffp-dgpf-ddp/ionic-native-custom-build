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
var FacebookOriginal = /** @class */ (function (_super) {
    __extends(FacebookOriginal, _super);
    function FacebookOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EVENTS = {
            EVENT_NAME_ACTIVATED_APP: 'fb_mobile_activate_app',
            EVENT_NAME_DEACTIVATED_APP: 'fb_mobile_deactivate_app',
            EVENT_NAME_SESSION_INTERRUPTIONS: 'fb_mobile_app_interruptions',
            EVENT_NAME_TIME_BETWEEN_SESSIONS: 'fb_mobile_time_between_sessions',
            EVENT_NAME_COMPLETED_REGISTRATION: 'fb_mobile_complete_registration',
            EVENT_NAME_VIEWED_CONTENT: 'fb_mobile_content_view',
            EVENT_NAME_SEARCHED: 'fb_mobile_search',
            EVENT_NAME_RATED: 'fb_mobile_rate',
            EVENT_NAME_COMPLETED_TUTORIAL: 'fb_mobile_tutorial_completion',
            EVENT_NAME_PUSH_TOKEN_OBTAINED: 'fb_mobile_obtain_push_token',
            EVENT_NAME_ADDED_TO_CART: 'fb_mobile_add_to_cart',
            EVENT_NAME_ADDED_TO_WISHLIST: 'fb_mobile_add_to_wishlist',
            EVENT_NAME_INITIATED_CHECKOUT: 'fb_mobile_initiated_checkout',
            EVENT_NAME_ADDED_PAYMENT_INFO: 'fb_mobile_add_payment_info',
            EVENT_NAME_PURCHASED: 'fb_mobile_purchase',
            EVENT_NAME_ACHIEVED_LEVEL: 'fb_mobile_level_achieved',
            EVENT_NAME_UNLOCKED_ACHIEVEMENT: 'fb_mobile_achievement_unlocked',
            EVENT_NAME_SPENT_CREDITS: 'fb_mobile_spent_credits',
            EVENT_PARAM_CURRENCY: 'fb_currency',
            EVENT_PARAM_REGISTRATION_METHOD: 'fb_registration_method',
            EVENT_PARAM_CONTENT_TYPE: 'fb_content_type',
            EVENT_PARAM_CONTENT_ID: 'fb_content_id',
            EVENT_PARAM_SEARCH_STRING: 'fb_search_string',
            EVENT_PARAM_SUCCESS: 'fb_success',
            EVENT_PARAM_MAX_RATING_VALUE: 'fb_max_rating_value',
            EVENT_PARAM_PAYMENT_INFO_AVAILABLE: 'fb_payment_info_available',
            EVENT_PARAM_NUM_ITEMS: 'fb_num_items',
            EVENT_PARAM_LEVEL: 'fb_level',
            EVENT_PARAM_DESCRIPTION: 'fb_description',
            EVENT_PARAM_SOURCE_APPLICATION: 'fb_mobile_launch_source',
            EVENT_PARAM_VALUE_YES: '1',
            EVENT_PARAM_VALUE_NO: '0',
        };
        return _this;
    }
    FacebookOriginal.prototype.login = function (permissions) { return cordova(this, "login", {}, arguments); };
    FacebookOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    FacebookOriginal.prototype.getLoginStatus = function () { return cordova(this, "getLoginStatus", {}, arguments); };
    FacebookOriginal.prototype.getAccessToken = function () { return cordova(this, "getAccessToken", {}, arguments); };
    FacebookOriginal.prototype.showDialog = function (options) { return cordova(this, "showDialog", {}, arguments); };
    FacebookOriginal.prototype.api = function (requestPath, permissions) { return cordova(this, "api", {}, arguments); };
    FacebookOriginal.prototype.logEvent = function (name, params, valueToSum) { return cordova(this, "logEvent", { "successIndex": 3, "errorIndex": 4 }, arguments); };
    FacebookOriginal.prototype.logPurchase = function (value, currency) { return cordova(this, "logPurchase", {}, arguments); };
    FacebookOriginal.prototype.getDeferredApplink = function () { return cordova(this, "getDeferredApplink", {}, arguments); };
    FacebookOriginal.prototype.activateApp = function () { return cordova(this, "activateApp", {}, arguments); };
    FacebookOriginal.pluginName = "Facebook";
    FacebookOriginal.plugin = "cordova-plugin-facebook4";
    FacebookOriginal.pluginRef = "facebookConnectPlugin";
    FacebookOriginal.repo = "https://github.com/jeduan/cordova-plugin-facebook4";
    FacebookOriginal.install = "ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID=\"123456789\" --variable APP_NAME=\"myApplication\"";
    FacebookOriginal.installVariables = ["APP_ID", "APP_NAME"];
    FacebookOriginal.platforms = ["Android", "iOS", "Browser"];
    return FacebookOriginal;
}(IonicNativePlugin));
var Facebook = new FacebookOriginal();
export { Facebook };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZhY2Vib29rL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXFIMUMsNEJBQWlCOzs7UUFDN0MsWUFBTSxHQUFHO1lBQ1Asd0JBQXdCLEVBQUUsd0JBQXdCO1lBQ2xELDBCQUEwQixFQUFFLDBCQUEwQjtZQUN0RCxnQ0FBZ0MsRUFBRSw2QkFBNkI7WUFDL0QsZ0NBQWdDLEVBQUUsaUNBQWlDO1lBQ25FLGlDQUFpQyxFQUFFLGlDQUFpQztZQUNwRSx5QkFBeUIsRUFBRSx3QkFBd0I7WUFDbkQsbUJBQW1CLEVBQUUsa0JBQWtCO1lBQ3ZDLGdCQUFnQixFQUFFLGdCQUFnQjtZQUNsQyw2QkFBNkIsRUFBRSwrQkFBK0I7WUFDOUQsOEJBQThCLEVBQUUsNkJBQTZCO1lBQzdELHdCQUF3QixFQUFFLHVCQUF1QjtZQUNqRCw0QkFBNEIsRUFBRSwyQkFBMkI7WUFDekQsNkJBQTZCLEVBQUUsOEJBQThCO1lBQzdELDZCQUE2QixFQUFFLDRCQUE0QjtZQUMzRCxvQkFBb0IsRUFBRSxvQkFBb0I7WUFDMUMseUJBQXlCLEVBQUUsMEJBQTBCO1lBQ3JELCtCQUErQixFQUFFLGdDQUFnQztZQUNqRSx3QkFBd0IsRUFBRSx5QkFBeUI7WUFDbkQsb0JBQW9CLEVBQUUsYUFBYTtZQUNuQywrQkFBK0IsRUFBRSx3QkFBd0I7WUFDekQsd0JBQXdCLEVBQUUsaUJBQWlCO1lBQzNDLHNCQUFzQixFQUFFLGVBQWU7WUFDdkMseUJBQXlCLEVBQUUsa0JBQWtCO1lBQzdDLG1CQUFtQixFQUFFLFlBQVk7WUFDakMsNEJBQTRCLEVBQUUscUJBQXFCO1lBQ25ELGtDQUFrQyxFQUFFLDJCQUEyQjtZQUMvRCxxQkFBcUIsRUFBRSxjQUFjO1lBQ3JDLGlCQUFpQixFQUFFLFVBQVU7WUFDN0IsdUJBQXVCLEVBQUUsZ0JBQWdCO1lBQ3pDLDhCQUE4QixFQUFFLHlCQUF5QjtZQUN6RCxxQkFBcUIsRUFBRSxHQUFHO1lBQzFCLG9CQUFvQixFQUFFLEdBQUc7U0FDMUIsQ0FBQzs7O0lBd0JGLHdCQUFLLGFBQUMsV0FBcUI7SUFXM0IseUJBQU07SUErQk4saUNBQWM7SUFVZCxpQ0FBYztJQXNCZCw2QkFBVSxhQUFDLE9BQVk7SUFrQnZCLHNCQUFHLGFBQUMsV0FBbUIsRUFBRSxXQUFxQjtJQWdCOUMsMkJBQVEsYUFBQyxJQUFZLEVBQUUsTUFBZSxFQUFFLFVBQW1CO0lBWTNELDhCQUFXLGFBQUMsS0FBYSxFQUFFLFFBQWdCO0lBUzNDLHFDQUFrQjtJQVNsQiw4QkFBVzs7Ozs7Ozs7bUJBMVRiO0VBc0g4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZhY2Vib29rTG9naW5SZXNwb25zZSB7XHJcbiAgc3RhdHVzOiBzdHJpbmc7XHJcblxyXG4gIGF1dGhSZXNwb25zZToge1xyXG4gICAgc2Vzc2lvbl9rZXk6IGJvb2xlYW47XHJcblxyXG4gICAgYWNjZXNzVG9rZW46IHN0cmluZztcclxuXHJcbiAgICBleHBpcmVzSW46IG51bWJlcjtcclxuXHJcbiAgICBzaWc6IHN0cmluZztcclxuXHJcbiAgICBzZWNyZXQ6IHN0cmluZztcclxuXHJcbiAgICB1c2VySUQ6IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgRmFjZWJvb2tcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFVzZSB0aGUgRmFjZWJvb2sgQ29ubmVjdCBwbHVnaW4gdG8gb2J0YWluIGFjY2VzcyB0byB0aGUgbmF0aXZlIEZCIGFwcGxpY2F0aW9uIG9uIGlPUyBhbmQgQW5kcm9pZC5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vazRgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbRmFjZWJvb2sgQ29ubmVjdF0oaHR0cHM6Ly9naXRodWIuY29tL2plZHVhbi9jb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vazQpLlxyXG4gKlxyXG4gKiAjIyMjIEluc3RhbGxhdGlvblxyXG4gKlxyXG4gKiAgVG8gdXNlIHRoZSBGQiBwbHVnaW4sIHlvdSBmaXJzdCBoYXZlIHRvIGNyZWF0ZSBhIG5ldyBGYWNlYm9vayBBcHAgaW5zaWRlIG9mIHRoZSBGYWNlYm9vayBkZXZlbG9wZXIgcG9ydGFsIGF0IFtodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcykuXHJcbiAqXHJcbiAqIFshW2ZiLWdldHN0YXJ0ZWQtMV0oL2ltZy9kb2NzL25hdGl2ZS9GYWNlYm9vay8xLnBuZyldKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcy8pXHJcbiAqXHJcbiAqIFJldHJpZXZlIHRoZSBgQXBwIElEYCBhbmQgYEFwcCBOYW1lYC5cclxuICpcclxuICogWyFbZmItZ2V0c3RhcnRlZC0yXSgvaW1nL2RvY3MvbmF0aXZlL0ZhY2Vib29rLzIucG5nKV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzLylcclxuICpcclxuICogVGhlbiB0eXBlIGluIHRoZSBmb2xsb3dpbmcgY29tbWFuZCBpbiB5b3VyIFRlcm1pbmFsLCB3aGVyZSBBUFBfSUQgYW5kIEFQUF9OQU1FIGFyZSB0aGUgdmFsdWVzIGZyb20gdGhlIEZhY2Vib29rIERldmVsb3BlciBwb3J0YWwuXHJcbiAqXHJcbiAqIGBgYGJhc2hcclxuICogIGlvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vazQgLS12YXJpYWJsZSBBUFBfSUQ9XCIxMjM0NTY3ODlcIiAtLXZhcmlhYmxlIEFQUF9OQU1FPVwibXlBcHBsaWNhdGlvblwiXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBBZnRlciwgeW91J2xsIG5lZWQgdG8gYWRkIHRoZSBuYXRpdmUgcGxhdGZvcm1zIHlvdSdsbCBiZSB1c2luZyB0byB5b3VyIGFwcCBpbiB0aGUgRmFjZWJvb2sgRGV2ZWxvcGVyIHBvcnRhbCB1bmRlciB5b3VyIGFwcCdzIFNldHRpbmdzOlxyXG4gKlxyXG4gKiBbIVtmYi1nZXRzdGFydGVkLTNdKC9pbWcvZG9jcy9uYXRpdmUvRmFjZWJvb2svMy5wbmcpXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMvKVxyXG4gKlxyXG4gKiBDbGljayBgJ0FkZCBQbGF0Zm9ybSdgLlxyXG4gKlxyXG4gKiBbIVtmYi1nZXRzdGFydGVkLTRdKC9pbWcvZG9jcy9uYXRpdmUvRmFjZWJvb2svNC5wbmcpXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMvKVxyXG4gKlxyXG4gKiBBdCB0aGlzIHBvaW50IHlvdSdsbCBuZWVkIHRvIG9wZW4geW91ciBwcm9qZWN0J3MgW2Bjb25maWcueG1sYF0oaHR0cHM6Ly9jb3Jkb3ZhLmFwYWNoZS5vcmcvZG9jcy9lbi9sYXRlc3QvY29uZmlnX3JlZi9pbmRleC5odG1sKSBmaWxlLCBmb3VuZCBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgeW91ciBwcm9qZWN0LlxyXG4gKlxyXG4gKiBUYWtlIG5vdGUgb2YgdGhlIGBpZGAgZm9yIHRoZSBuZXh0IHN0ZXA6XHJcbiAqIGBgYFxyXG4gKiA8d2lkZ2V0IGlkPVwiY29tLm15Y29tcGFueS50ZXN0YXBwXCIgdmVyc2lvbj1cIjAuMC4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy9ucy93aWRnZXRzXCIgeG1sbnM6Y2R2PVwiaHR0cDovL2NvcmRvdmEuYXBhY2hlLm9yZy9ucy8xLjBcIj5cclxuICogYGBgXHJcbiAqXHJcbiAqIFlvdSBjYW4gYWxzbyBlZGl0IHRoZSBgaWRgIHRvIHdoYXRldmVyIHlvdSdkIGxpa2UgaXQgdG8gYmUuXHJcbiAqXHJcbiAqICMjIyMgaU9TIEluc3RhbGxcclxuICogVW5kZXIgJ0J1bmRsZSBJRCcsIGFkZCB0aGUgYGlkYCBmcm9tIHlvdXIgYGNvbmZpZy54bWxgIGZpbGU6XHJcbiAqXHJcbiAqIFshW2ZiLWdldHN0YXJ0ZWQtNV0oL2ltZy9kb2NzL25hdGl2ZS9GYWNlYm9vay81LnBuZyldKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcy8pXHJcbiAqXHJcbiAqXHJcbiAqICMjIyMgQW5kcm9pZCBJbnN0YWxsXHJcbiAqIFVuZGVyICdHb29nbGUgUGxheSBQYWNrYWdlIE5hbWUnLCBhZGQgdGhlIGBpZGAgZnJvbSB5b3VyIGBjb25maWcueG1sYCBmaWxlOlxyXG4gKlxyXG4gKiBbIVtmYi1nZXRzdGFydGVkLTZdKC9pbWcvZG9jcy9uYXRpdmUvRmFjZWJvb2svNi5wbmcpXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMvKVxyXG4gKlxyXG4gKlxyXG4gKiBBbmQgdGhhdCdzIGl0ISBZb3UgY2FuIG5vdyBtYWtlIGNhbGxzIHRvIEZhY2Vib29rIHVzaW5nIHRoZSBwbHVnaW4uXHJcbiAqXHJcbiAqICMjIEV2ZW50c1xyXG4gKlxyXG4gKiBBcHAgZXZlbnRzIGFsbG93IHlvdSB0byB1bmRlcnN0YW5kIHRoZSBtYWtldXAgb2YgdXNlcnMgZW5nYWdpbmcgd2l0aCB5b3VyIGFwcCwgbWVhc3VyZSB0aGUgcGVyZm9ybWFuY2Ugb2YgeW91ciBGYWNlYm9vayBtb2JpbGUgYXBwIGFkcywgYW5kIHJlYWNoIHNwZWNpZmljIHNldHMgb2YgeW91ciB1c2VycyB3aXRoIEZhY2Vib29rIG1vYmlsZSBhcHAgYWRzLlxyXG4gKlxyXG4gKiAtIFtpT1NdIFtodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvaW9zL2FwcC1ldmVudHNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9pb3MvYXBwLWV2ZW50cylcclxuICogLSBbQW5kcm9pZF0gW2h0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9hbmRyb2lkL2FwcC1ldmVudHNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9hbmRyb2lkL2FwcC1ldmVudHMpXHJcbiAqIC0gW0pTXSBEb2VzIG5vdCBoYXZlIGFuIEV2ZW50cyBBUEksIHNvIHRoZSBwbHVnaW4gZnVuY3Rpb25zIGFyZSBlbXB0eSBhbmQgd2lsbCByZXR1cm4gYW4gYXV0b21hdGljIHN1Y2Nlc3NcclxuICpcclxuICogQWN0aXZhdGlvbiBldmVudHMgYXJlIGF1dG9tYXRpY2FsbHkgdHJhY2tlZCBmb3IgeW91IGluIHRoZSBwbHVnaW4uXHJcbiAqXHJcbiAqIEV2ZW50cyBhcmUgbGlzdGVkIG9uIHRoZSBbaW5zaWdodHMgcGFnZV0oaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2luc2lnaHRzLykuXHJcbiAqXHJcbiAqIEZvciB0cmFja2luZyBldmVudHMsIHNlZSBgbG9nRXZlbnRgIGFuZCBgbG9nUHVyY2hhc2VgLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBGYWNlYm9vaywgRmFjZWJvb2tMb2dpblJlc3BvbnNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9mYWNlYm9vay9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGYWNlYm9vaykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmZiLmxvZ2luKFsncHVibGljX3Byb2ZpbGUnLCAndXNlcl9mcmllbmRzJywgJ2VtYWlsJ10pXHJcbiAqICAgLnRoZW4oKHJlczogRmFjZWJvb2tMb2dpblJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZygnTG9nZ2VkIGludG8gRmFjZWJvb2shJywgcmVzKSlcclxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZygnRXJyb3IgbG9nZ2luZyBpbnRvIEZhY2Vib29rJywgZSkpO1xyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmZiLmxvZ0V2ZW50KHRoaXMuZmIuRVZFTlRTLkVWRU5UX05BTUVfQURERURfVE9fQ0FSVCk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKlxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0ZhY2Vib29rJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vazQnLFxyXG4gIHBsdWdpblJlZjogJ2ZhY2Vib29rQ29ubmVjdFBsdWdpbicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qZWR1YW4vY29yZG92YS1wbHVnaW4tZmFjZWJvb2s0JyxcclxuICBpbnN0YWxsOlxyXG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vazQgLS12YXJpYWJsZSBBUFBfSUQ9XCIxMjM0NTY3ODlcIiAtLXZhcmlhYmxlIEFQUF9OQU1FPVwibXlBcHBsaWNhdGlvblwiJyxcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FQUF9JRCcsICdBUFBfTkFNRSddLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdCcm93c2VyJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZhY2Vib29rIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEVWRU5UUyA9IHtcclxuICAgIEVWRU5UX05BTUVfQUNUSVZBVEVEX0FQUDogJ2ZiX21vYmlsZV9hY3RpdmF0ZV9hcHAnLFxyXG4gICAgRVZFTlRfTkFNRV9ERUFDVElWQVRFRF9BUFA6ICdmYl9tb2JpbGVfZGVhY3RpdmF0ZV9hcHAnLFxyXG4gICAgRVZFTlRfTkFNRV9TRVNTSU9OX0lOVEVSUlVQVElPTlM6ICdmYl9tb2JpbGVfYXBwX2ludGVycnVwdGlvbnMnLFxyXG4gICAgRVZFTlRfTkFNRV9USU1FX0JFVFdFRU5fU0VTU0lPTlM6ICdmYl9tb2JpbGVfdGltZV9iZXR3ZWVuX3Nlc3Npb25zJyxcclxuICAgIEVWRU5UX05BTUVfQ09NUExFVEVEX1JFR0lTVFJBVElPTjogJ2ZiX21vYmlsZV9jb21wbGV0ZV9yZWdpc3RyYXRpb24nLFxyXG4gICAgRVZFTlRfTkFNRV9WSUVXRURfQ09OVEVOVDogJ2ZiX21vYmlsZV9jb250ZW50X3ZpZXcnLFxyXG4gICAgRVZFTlRfTkFNRV9TRUFSQ0hFRDogJ2ZiX21vYmlsZV9zZWFyY2gnLFxyXG4gICAgRVZFTlRfTkFNRV9SQVRFRDogJ2ZiX21vYmlsZV9yYXRlJyxcclxuICAgIEVWRU5UX05BTUVfQ09NUExFVEVEX1RVVE9SSUFMOiAnZmJfbW9iaWxlX3R1dG9yaWFsX2NvbXBsZXRpb24nLFxyXG4gICAgRVZFTlRfTkFNRV9QVVNIX1RPS0VOX09CVEFJTkVEOiAnZmJfbW9iaWxlX29idGFpbl9wdXNoX3Rva2VuJyxcclxuICAgIEVWRU5UX05BTUVfQURERURfVE9fQ0FSVDogJ2ZiX21vYmlsZV9hZGRfdG9fY2FydCcsXHJcbiAgICBFVkVOVF9OQU1FX0FEREVEX1RPX1dJU0hMSVNUOiAnZmJfbW9iaWxlX2FkZF90b193aXNobGlzdCcsXHJcbiAgICBFVkVOVF9OQU1FX0lOSVRJQVRFRF9DSEVDS09VVDogJ2ZiX21vYmlsZV9pbml0aWF0ZWRfY2hlY2tvdXQnLFxyXG4gICAgRVZFTlRfTkFNRV9BRERFRF9QQVlNRU5UX0lORk86ICdmYl9tb2JpbGVfYWRkX3BheW1lbnRfaW5mbycsXHJcbiAgICBFVkVOVF9OQU1FX1BVUkNIQVNFRDogJ2ZiX21vYmlsZV9wdXJjaGFzZScsXHJcbiAgICBFVkVOVF9OQU1FX0FDSElFVkVEX0xFVkVMOiAnZmJfbW9iaWxlX2xldmVsX2FjaGlldmVkJyxcclxuICAgIEVWRU5UX05BTUVfVU5MT0NLRURfQUNISUVWRU1FTlQ6ICdmYl9tb2JpbGVfYWNoaWV2ZW1lbnRfdW5sb2NrZWQnLFxyXG4gICAgRVZFTlRfTkFNRV9TUEVOVF9DUkVESVRTOiAnZmJfbW9iaWxlX3NwZW50X2NyZWRpdHMnLFxyXG4gICAgRVZFTlRfUEFSQU1fQ1VSUkVOQ1k6ICdmYl9jdXJyZW5jeScsXHJcbiAgICBFVkVOVF9QQVJBTV9SRUdJU1RSQVRJT05fTUVUSE9EOiAnZmJfcmVnaXN0cmF0aW9uX21ldGhvZCcsXHJcbiAgICBFVkVOVF9QQVJBTV9DT05URU5UX1RZUEU6ICdmYl9jb250ZW50X3R5cGUnLFxyXG4gICAgRVZFTlRfUEFSQU1fQ09OVEVOVF9JRDogJ2ZiX2NvbnRlbnRfaWQnLFxyXG4gICAgRVZFTlRfUEFSQU1fU0VBUkNIX1NUUklORzogJ2ZiX3NlYXJjaF9zdHJpbmcnLFxyXG4gICAgRVZFTlRfUEFSQU1fU1VDQ0VTUzogJ2ZiX3N1Y2Nlc3MnLFxyXG4gICAgRVZFTlRfUEFSQU1fTUFYX1JBVElOR19WQUxVRTogJ2ZiX21heF9yYXRpbmdfdmFsdWUnLFxyXG4gICAgRVZFTlRfUEFSQU1fUEFZTUVOVF9JTkZPX0FWQUlMQUJMRTogJ2ZiX3BheW1lbnRfaW5mb19hdmFpbGFibGUnLFxyXG4gICAgRVZFTlRfUEFSQU1fTlVNX0lURU1TOiAnZmJfbnVtX2l0ZW1zJyxcclxuICAgIEVWRU5UX1BBUkFNX0xFVkVMOiAnZmJfbGV2ZWwnLFxyXG4gICAgRVZFTlRfUEFSQU1fREVTQ1JJUFRJT046ICdmYl9kZXNjcmlwdGlvbicsXHJcbiAgICBFVkVOVF9QQVJBTV9TT1VSQ0VfQVBQTElDQVRJT046ICdmYl9tb2JpbGVfbGF1bmNoX3NvdXJjZScsXHJcbiAgICBFVkVOVF9QQVJBTV9WQUxVRV9ZRVM6ICcxJyxcclxuICAgIEVWRU5UX1BBUkFNX1ZBTFVFX05POiAnMCcsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogTG9naW4gdG8gRmFjZWJvb2sgdG8gYXV0aGVudGljYXRlIHRoaXMgYXBwLlxyXG4gICAqXHJcbiAgICogYGBgdHlwZXNjcmlwdFxyXG4gICAqIHtcclxuICAgKiAgIHN0YXR1czogJ2Nvbm5lY3RlZCcsXHJcbiAgICogICBhdXRoUmVzcG9uc2U6IHtcclxuICAgKiAgICAgc2Vzc2lvbl9rZXk6IHRydWUsXHJcbiAgICogICAgIGFjY2Vzc1Rva2VuOiAna2draDNnNDJraDRnMjNraDRnMmtoMzRnMmtnNGsyaDRna2gzZzRrMmg0Z2syM2g0Z2syaDM0Z2syMzRnazJoMzRBbmRTb09uJyxcclxuICAgKiAgICAgZXhwaXJlc0luOiA1MTgzOTc5LFxyXG4gICAqICAgICBzaWc6ICcuLi4nLFxyXG4gICAqICAgICBzZWNyZXQ6ICcuLi4nLFxyXG4gICAqICAgICB1c2VySUQ6ICc2MzQ1NjU0MzUnXHJcbiAgICogICB9XHJcbiAgICogfVxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSAgcGVybWlzc2lvbnMgTGlzdCBvZiBbcGVybWlzc2lvbnNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9mYWNlYm9vay1sb2dpbi9wZXJtaXNzaW9ucykgdGhpcyBhcHAgaGFzIHVwb24gbG9nZ2luZyBpbi5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGYWNlYm9va0xvZ2luUmVzcG9uc2U+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBzdGF0dXMgb2JqZWN0IGlmIGxvZ2luIHN1Y2NlZWRzLCBhbmQgcmVqZWN0cyBpZiBsb2dpbiBmYWlscy5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbG9naW4ocGVybWlzc2lvbnM6IHN0cmluZ1tdKTogUHJvbWlzZTxGYWNlYm9va0xvZ2luUmVzcG9uc2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ291dCBvZiBGYWNlYm9vay5cclxuICAgKlxyXG4gICAqIEZvciBtb3JlIGluZm8gc2VlIHRoZSBbRmFjZWJvb2sgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3JlZmVyZW5jZS9qYXZhc2NyaXB0L0ZCLmxvZ291dClcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIGEgc3VjY2Vzc2Z1bCBsb2dvdXQsIGFuZCByZWplY3RzIGlmIGxvZ291dCBmYWlscy5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgaWYgYSB1c2VyIGlzIGxvZ2dlZCBpbiB0byBGYWNlYm9vayBhbmQgaGFzIGF1dGhlbnRpY2F0ZWQgeW91ciBhcHAuICBUaGVyZSBhcmUgdGhyZWUgcG9zc2libGUgc3RhdGVzIGZvciBhIHVzZXI6XHJcbiAgICpcclxuICAgKiAxKSB0aGUgdXNlciBpcyBsb2dnZWQgaW50byBGYWNlYm9vayBhbmQgaGFzIGF1dGhlbnRpY2F0ZWQgeW91ciBhcHBsaWNhdGlvbiAoY29ubmVjdGVkKVxyXG4gICAqIDIpIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbnRvIEZhY2Vib29rIGJ1dCBoYXMgbm90IGF1dGhlbnRpY2F0ZWQgeW91ciBhcHBsaWNhdGlvbiAobm90X2F1dGhvcml6ZWQpXHJcbiAgICogMykgdGhlIHVzZXIgaXMgZWl0aGVyIG5vdCBsb2dnZWQgaW50byBGYWNlYm9vayBvciBleHBsaWNpdGx5IGxvZ2dlZCBvdXQgb2YgeW91ciBhcHBsaWNhdGlvbiBzbyBpdCBkb2Vzbid0IGF0dGVtcHQgdG8gY29ubmVjdCB0byBGYWNlYm9vayBhbmQgdGh1cywgd2UgZG9uJ3Qga25vdyBpZiB0aGV5J3ZlIGF1dGhlbnRpY2F0ZWQgeW91ciBhcHBsaWNhdGlvbiBvciBub3QgKHVua25vd24pXHJcbiAgICpcclxuICAgKiBSZXNvbHZlcyB3aXRoIGEgcmVzcG9uc2UgbGlrZTpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIHtcclxuICAgKiAgIGF1dGhSZXNwb25zZToge1xyXG4gICAqICAgICB1c2VySUQ6ICcxMjM0NTY3ODkxMjM0NScsXHJcbiAgICogICAgIGFjY2Vzc1Rva2VuOiAna2draDNnNDJraDRnMjNraDRnMmtoMzRnMmtnNGsyaDRna2gzZzRrMmg0Z2syM2g0Z2syaDM0Z2syMzRnazJoMzRBbmRTb09uJyxcclxuICAgKiAgICAgc2Vzc2lvbl9LZXk6IHRydWUsXHJcbiAgICogICAgIGV4cGlyZXNJbjogJzUxODM3MzgnLFxyXG4gICAqICAgICBzaWc6ICcuLi4nXHJcbiAgICogICB9LFxyXG4gICAqICAgc3RhdHVzOiAnY29ubmVjdGVkJ1xyXG4gICAqIH1cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZSB0aGUgW0ZhY2Vib29rIGRvY3NdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9yZWZlcmVuY2UvamF2YXNjcmlwdC9GQi5nZXRMb2dpblN0YXR1cylcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIHN0YXR1cywgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldExvZ2luU3RhdHVzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSBGYWNlYm9vayBhY2Nlc3MgdG9rZW4gZm9yIHVzaW5nIEZhY2Vib29rIHNlcnZpY2VzLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGFuIGFjY2VzcyB0b2tlbiwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEFjY2Vzc1Rva2VuKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93IG9uZSBvZiB2YXJpb3VzIEZhY2Vib29rIGRpYWxvZ3MuIEV4YW1wbGUgb2Ygb3B0aW9ucyBmb3IgYSBTaGFyZSBkaWFsb2c6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiB7XHJcbiAgICogICBtZXRob2Q6ICdzaGFyZScsXHJcbiAgICogICBocmVmOiAnaHR0cDovL2V4YW1wbGUuY29tJyxcclxuICAgKiAgIGNhcHRpb246ICdTdWNoIGNhcHRpb24sIHZlcnkgZmVlZC4nLFxyXG4gICAqICAgZGVzY3JpcHRpb246ICdNdWNoIGRlc2NyaXB0aW9uJyxcclxuICAgKiAgIHBpY3R1cmU6ICdodHRwOi8vZXhhbXBsZS5jb20vaW1hZ2UucG5nJ1xyXG4gICAqIH1cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIEZvciBtb3JlIG9wdGlvbnMgc2VlIHRoZSBbQ29yZG92YSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2plZHVhbi9jb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vazQjc2hvdy1hLWRpYWxvZykgYW5kIHRoZSBbRmFjZWJvb2sgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2phdmFzY3JpcHQvcmVmZXJlbmNlL0ZCLnVpKVxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBkaWFsb2cgb3B0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBzdWNjZXNzIGRhdGEsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvclxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzaG93RGlhbG9nKG9wdGlvbnM6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYWtlIGEgY2FsbCB0byBGYWNlYm9vayBHcmFwaCBBUEkuIENhbiB0YWtlIGFkZGl0aW9uYWwgcGVybWlzc2lvbnMgYmV5b25kIHRob3NlIGdyYW50ZWQgb24gbG9naW4uXHJcbiAgICpcclxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWU6XHJcbiAgICpcclxuICAgKiAgQ2FsbGluZyB0aGUgR3JhcGggQVBJIC0gaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2phdmFzY3JpcHQvcmVmZXJlbmNlL0ZCLmFwaVxyXG4gICAqICBHcmFwaCBFeHBsb3JlciAtIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vdG9vbHMvZXhwbG9yZXJcclxuICAgKiAgR3JhcGggQVBJIC0gaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2dyYXBoLWFwaVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9ICByZXF1ZXN0UGF0aCBHcmFwaCBBUEkgZW5kcG9pbnQgeW91IHdhbnQgdG8gY2FsbFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119ICBwZXJtaXNzaW9ucyBMaXN0IG9mIFtwZXJtaXNzaW9uc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2ZhY2Vib29rLWxvZ2luL3Blcm1pc3Npb25zKSBmb3IgdGhpcyByZXF1ZXN0LlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSByZXF1ZXN0LCBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgYXBpKHJlcXVlc3RQYXRoOiBzdHJpbmcsIHBlcm1pc3Npb25zOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2cgYW4gZXZlbnQuICBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgdGhlIEV2ZW50cyBzZWN0aW9uIGFib3ZlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9ICBuYW1lIE5hbWUgb2YgdGhlIGV2ZW50XHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICBbcGFyYW1zXSBBbiBvYmplY3QgY29udGFpbmluZyBleHRyYSBkYXRhIHRvIGxvZyB3aXRoIHRoZSBldmVudFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgW3ZhbHVlVG9TdW1dIGFueSB2YWx1ZSB0byBiZSBhZGRlZCB0byBhZGRlZCB0byBhIHN1bSBvbiBlYWNoIGV2ZW50XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDMsXHJcbiAgICBlcnJvckluZGV4OiA0LFxyXG4gIH0pXHJcbiAgbG9nRXZlbnQobmFtZTogc3RyaW5nLCBwYXJhbXM/OiBPYmplY3QsIHZhbHVlVG9TdW0/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9nIGEgcHVyY2hhc2UuIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZSB0aGUgRXZlbnRzIHNlY3Rpb24gYWJvdmUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gIHZhbHVlIFZhbHVlIG9mIHRoZSBwdXJjaGFzZS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gIGN1cnJlbmN5IFRoZSBjdXJyZW5jeSwgYXMgYW4gW0lTTyA0MjE3IGN1cnJlbmN5IGNvZGVdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzQyMTcpXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbG9nUHVyY2hhc2UodmFsdWU6IG51bWJlciwgY3VycmVuY3k6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBkZWZlcnJlZCBhcHAgbGlua1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldERlZmVycmVkQXBwbGluaygpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFudWFsbHkgbG9nIGFjdGl2YXRpb24gZXZlbnRzXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgYWN0aXZhdGVBcHAoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19