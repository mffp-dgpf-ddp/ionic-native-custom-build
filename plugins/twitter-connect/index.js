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
var TwitterConnectOriginal = /** @class */ (function (_super) {
    __extends(TwitterConnectOriginal, _super);
    function TwitterConnectOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TwitterConnectOriginal.prototype.login = function () { return cordova(this, "login", {}, arguments); };
    TwitterConnectOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    TwitterConnectOriginal.prototype.showUser = function () { return cordova(this, "showUser", {}, arguments); };
    TwitterConnectOriginal.pluginName = "TwitterConnect";
    TwitterConnectOriginal.plugin = "twitter-connect-plugin";
    TwitterConnectOriginal.pluginRef = "TwitterConnect";
    TwitterConnectOriginal.repo = "https://github.com/chroa/twitter-connect-plugin";
    TwitterConnectOriginal.install = "ionic cordova plugin add https://github.com/chroa/twitter-connect-plugin --variable FABRIC_KEY=<Fabric API Key> --variable TWITTER_KEY=<Twitter Consumer Key> --variable TWITTER_SECRET=<Twitter Consumer Secret>";
    TwitterConnectOriginal.installVariables = ["FABRIC_KEY", "TWITTER_KEY", "TWITTER_SECRET"];
    TwitterConnectOriginal.platforms = ["Android", "iOS"];
    return TwitterConnectOriginal;
}(IonicNativePlugin));
var TwitterConnect = new TwitterConnectOriginal();
export { TwitterConnect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3R3aXR0ZXItY29ubmVjdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErRHBDLGtDQUFpQjs7OztJQU1uRCw4QkFBSztJQVNMLCtCQUFNO0lBU04saUNBQVE7Ozs7Ozs7O3lCQXhGVjtFQWdFb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUd2l0dGVyQ29ubmVjdFJlc3BvbnNlIHtcclxuICAvKipcclxuICAgKiBUd2l0dGVyIFVzZXJuYW1lXHJcbiAgICovXHJcbiAgdXNlck5hbWU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBUd2l0dGVyIFVzZXIgSURcclxuICAgKi9cclxuICB1c2VySWQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBUd2l0dGVyIE9BdXRoIFNlY3JldFxyXG4gICAqL1xyXG4gIHNlY3JldDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFR3aXR0ZXIgT0F1dGggVG9rZW5cclxuICAgKi9cclxuICB0b2tlbjogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgVHdpdHRlciBDb25uZWN0XHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBQbHVnaW4gdG8gdXNlIFR3aXR0ZXIgU2luZ2xlIFNpZ24gT25cclxuICogVXNlcyBUd2l0dGVyJ3MgRmFicmljIFNES1xyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFR3aXR0ZXJDb25uZWN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS90d2l0dGVyLWNvbm5lY3Qvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0d2l0dGVyOiBUd2l0dGVyQ29ubmVjdCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBmdW5jdGlvbiBvblN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuICogICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAqXHJcbiAqICAgLy8gV2lsbCBjb25zb2xlIGxvZyBzb21ldGhpbmcgbGlrZTpcclxuICogICAvLyB7XHJcbiAqICAgLy8gICB1c2VyTmFtZTogJ215dXNlcicsXHJcbiAqICAgLy8gICB1c2VySWQ6ICcxMjM1ODEwMicsXHJcbiAqICAgLy8gICBzZWNyZXQ6ICd0b2tlblNlY3JldCdcclxuICogICAvLyAgIHRva2VuOiAnYWNjZXNzVG9rZW5IZXJlJ1xyXG4gKiAgIC8vIH1cclxuICogfVxyXG4gKlxyXG4gKiB0aGlzLnR3aXR0ZXIubG9naW4oKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbiAqXHJcbiAqIHRoaXMudHdpdHRlci5sb2dvdXQoKS50aGVuKG9uTG9nb3V0U3VjY2Vzcywgb25Mb2dvdXRFcnJvcik7XHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBUd2l0dGVyQ29ubmVjdFJlc3BvbnNlXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnVHdpdHRlckNvbm5lY3QnLFxyXG4gIHBsdWdpbjogJ3R3aXR0ZXItY29ubmVjdC1wbHVnaW4nLFxyXG4gIHBsdWdpblJlZjogJ1R3aXR0ZXJDb25uZWN0JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Nocm9hL3R3aXR0ZXItY29ubmVjdC1wbHVnaW4nLFxyXG4gIGluc3RhbGw6XHJcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGh0dHBzOi8vZ2l0aHViLmNvbS9jaHJvYS90d2l0dGVyLWNvbm5lY3QtcGx1Z2luIC0tdmFyaWFibGUgRkFCUklDX0tFWT08RmFicmljIEFQSSBLZXk+IC0tdmFyaWFibGUgVFdJVFRFUl9LRVk9PFR3aXR0ZXIgQ29uc3VtZXIgS2V5PiAtLXZhcmlhYmxlIFRXSVRURVJfU0VDUkVUPTxUd2l0dGVyIENvbnN1bWVyIFNlY3JldD4nLFxyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnRkFCUklDX0tFWScsICdUV0lUVEVSX0tFWScsICdUV0lUVEVSX1NFQ1JFVCddLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUd2l0dGVyQ29ubmVjdCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBMb2dzIGluXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8VHdpdHRlckNvbm5lY3RSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgbG9nZ2VkIGluIGFuZCByZWplY3RzIGlmIGZhaWxlZCB0byBsb2dpblxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBsb2dpbigpOiBQcm9taXNlPFR3aXR0ZXJDb25uZWN0UmVzcG9uc2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ3Mgb3V0XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBpZiBsb2dnZWQgb3V0IGFuZCByZWplY3RzIGlmIGZhaWxlZCB0byBsb2dvdXRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHVzZXIncyBwcm9maWxlIGluZm9ybWF0aW9uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBpZiB1c2VyIHByb2ZpbGUgaXMgc3VjY2Vzc2Z1bGx5IHJldHJpZXZlZCBhbmQgcmVqZWN0cyBpZiByZXF1ZXN0IGZhaWxzXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNob3dVc2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==