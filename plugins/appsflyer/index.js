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
var AppsflyerOriginal = /** @class */ (function (_super) {
    __extends(AppsflyerOriginal, _super);
    function AppsflyerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppsflyerOriginal.prototype.initSdk = function (options) { return cordova(this, "initSdk", {}, arguments); };
    AppsflyerOriginal.prototype.trackEvent = function (eventName, eventValues) { return cordova(this, "trackEvent", { "sync": true }, arguments); };
    AppsflyerOriginal.prototype.setAppUserId = function (customerUserId) { return cordova(this, "setAppUserId", { "sync": true }, arguments); };
    AppsflyerOriginal.prototype.stopTracking = function (isStopTracking) { return cordova(this, "stopTracking", { "sync": true }, arguments); };
    AppsflyerOriginal.prototype.registerOnAppOpenAttribution = function () { return cordova(this, "registerOnAppOpenAttribution", {}, arguments); };
    AppsflyerOriginal.prototype.enableUninstallTracking = function (token) { return cordova(this, "enableUninstallTracking", {}, arguments); };
    AppsflyerOriginal.prototype.updateServerUninstallToken = function (token) { return cordova(this, "updateServerUninstallToken", { "sync": true }, arguments); };
    AppsflyerOriginal.prototype.registerUninstall = function (token) { return cordova(this, "registerUninstall", { "sync": true }, arguments); };
    AppsflyerOriginal.prototype.getAppsFlyerUID = function () { return cordova(this, "getAppsFlyerUID", {}, arguments); };
    AppsflyerOriginal.prototype.deviceTrackingDisabled = function (disable) { return cordova(this, "deviceTrackingDisabled", { "sync": true }, arguments); };
    AppsflyerOriginal.prototype.setAppInviteOneLinkID = function (oneLinkId) { return cordova(this, "setAppInviteOneLinkID", { "sync": true }, arguments); };
    AppsflyerOriginal.prototype.generateInviteLink = function (options) { return cordova(this, "generateInviteLink", {}, arguments); };
    AppsflyerOriginal.prototype.trackCrossPromotionImpression = function (appId, campaign) { return cordova(this, "trackCrossPromotionImpression", { "sync": true }, arguments); };
    AppsflyerOriginal.prototype.trackAndOpenStore = function (appId, campaign, options) { return cordova(this, "trackAndOpenStore", { "sync": true }, arguments); };
    AppsflyerOriginal.pluginName = "Appsflyer";
    AppsflyerOriginal.plugin = "cordova-plugin-appsflyer-sdk";
    AppsflyerOriginal.pluginRef = "window.plugins.appsFlyer";
    AppsflyerOriginal.repo = "https://github.com/AppsFlyerSDK/cordova-plugin-appsflyer-sdk";
    AppsflyerOriginal.platforms = ["iOS", "Android"];
    AppsflyerOriginal.install = "Add to config.xml like stated on github and then start";
    return AppsflyerOriginal;
}(IonicNativePlugin));
var Appsflyer = new AppsflyerOriginal();
export { Appsflyer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcHNmbHllci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFvRnpDLDZCQUFpQjs7OztJQU85QywyQkFBTyxhQUFDLE9BQXlCO0lBVWpDLDhCQUFVLGFBQUMsU0FBaUIsRUFBRSxXQUEyQjtJQU96RCxnQ0FBWSxhQUFDLGNBQXNCO0lBT25DLGdDQUFZLGFBQUMsY0FBdUI7SUFPcEMsZ0RBQTRCO0lBVTVCLDJDQUF1QixhQUFDLEtBQWE7SUFTckMsOENBQTBCLGFBQUMsS0FBYTtJQU94QyxxQ0FBaUIsYUFBQyxLQUFhO0lBTS9CLG1DQUFlO0lBU2YsMENBQXNCLGFBQUMsT0FBZ0I7SUFPdkMseUNBQXFCLGFBQUMsU0FBaUI7SUFRdkMsc0NBQWtCLGFBQUMsT0FBK0I7SUFVbEQsaURBQTZCLGFBQUMsS0FBYSxFQUFFLFFBQWdCO0lBUzdELHFDQUFpQixhQUFDLEtBQWEsRUFBRSxRQUFnQixFQUFFLE9BQWU7Ozs7Ozs7b0JBdE1wRTtFQXFGK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBzZmx5ZXJPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBBcHBzZmx5ZXIgRGV2IGtleVxyXG4gICAqL1xyXG4gIGRldktleTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBcHBsZSBBcHBsaWNhdGlvbiBJRChmb3IgaU9TIG9ubHkpXHJcbiAgICovXHJcbiAgYXBwSWQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIGRlYnVnIG1vZGVcclxuICAgKi9cclxuICBpc0RlYnVnPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogb3B0b3V0IG9mIGNvbGxlY3Rpb24gb2YgSU1FSVxyXG4gICAqL1xyXG4gIGNvbGxlY3RJTUVJPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogXHRvcHRvdXQgb2YgY29sbGVjdGlvbiBvZiBjb2xsZWN0QW5kcm9pZElEXHJcbiAgICovXHJcbiAgY29sbGVjdEFuZHJvaWRJRD86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIGRlZmF1bHQgZmFsc2UgXHRBY2Nlc3NpbmcgQXBwc0ZseWVyIEF0dHJpYnV0aW9uIC8gQ29udmVyc2lvbiBEYXRhIGZyb20gdGhlIFNESyAoRGVmZXJyZWQgRGVlcGxpbmtpbmcpLiBSZWFkIG1vcmU6IEFuZHJvaWQsIGlPUy4gQXBwc0ZseWVyIHBsdWdpbiB3aWxsIHJldHVybiBhdHRyaWJ1dGlvbiBkYXRhIGluIG9uU3VjY2VzcyBjYWxsYmFjay5cclxuICAgKi9cclxuICBvbkluc3RhbGxDb252ZXJzaW9uRGF0YUxpc3RlbmVyPzogYm9vbGVhbjtcclxuICBcclxuICAvKipcclxuICAgKiB0aW1lIGZvciB0aGUgc2RrIHRvIHdhaXQgYmVmb3JlIGxhdW5jaCAtIElPUyAxNCBPTkxZIVxyXG4gICAqL1xyXG4gIHdhaXRGb3JBVFRVc2VyQXV0aG9yaXphdGlvbj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBzZmx5ZXJFdmVudCB7XHJcbiAgW3g6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBzZmx5ZXJJbnZpdGVPcHRpb25zIHtcclxuICBjaGFubmVsPzogc3RyaW5nO1xyXG4gIGNhbXBhaWduPzogc3RyaW5nO1xyXG4gIHVzZXJQYXJhbXM/OiB7XHJcbiAgICBbeDogc3RyaW5nXTogYW55O1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBBcHBzZmx5ZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFwcHNmbHllciBDb3Jkb3ZhIFNESyBzdXBwb3J0IGZvciBBdHRyaWJ1dGlvblxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBBcHBzZmx5ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FwcHNmbHllci9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcHNmbHllcjogQXBwc2ZseWVyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuYXBwc2ZseWVyLmluaXRTZGsob3B0aW9ucyk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBBcHBzZmx5ZXJPcHRpb25zXHJcbiAqIEFwcHNmbHllckV2ZW50XHJcbiAqIEFwcHNmbHllckludml0ZU9wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdBcHBzZmx5ZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcHNmbHllci1zZGsnLFxyXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5wbHVnaW5zLmFwcHNGbHllcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BcHBzRmx5ZXJTREsvY29yZG92YS1wbHVnaW4tYXBwc2ZseWVyLXNkaycsXHJcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXHJcbiAgaW5zdGFsbDogJ0FkZCB0byBjb25maWcueG1sIGxpa2Ugc3RhdGVkIG9uIGdpdGh1YiBhbmQgdGhlbiBzdGFydCcsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwcHNmbHllciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBpbml0aWFsaXplIHRoZSBTREtcclxuICAgKiBAcGFyYW0ge0FwcHNmbHllck9wdGlvbnN9IG9wdGlvbnNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpbml0U2RrKG9wdGlvbnM6IEFwcHNmbHllck9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlc2UgaW4tYXBwIGV2ZW50cyBoZWxwIHlvdSB0cmFjayBob3cgbG95YWwgdXNlcnMgZGlzY292ZXIgeW91ciBhcHAsIGFuZCBhdHRyaWJ1dGUgdGhlbSB0byBzcGVjaWZpYyBjYW1wYWlnbnMvbWVkaWEtc291cmNlcy4gUGxlYXNlIHRha2UgdGhlIHRpbWUgZGVmaW5lIHRoZSBldmVudC9zIHlvdSB3YW50IHRvIG1lYXN1cmUgdG8gYWxsb3cgeW91IHRvIHRyYWNrIFJPSSAoUmV0dXJuIG9uIEludmVzdG1lbnQpIGFuZCBMVFYgKExpZmV0aW1lIFZhbHVlKS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIGN1c3RvbSBldmVudCBuYW1lLCBpcyBwcmVzZW50ZWQgaW4geW91ciBkYXNoYm9hcmRcclxuICAgKiBAcGFyYW0ge0FwcHNmbHllckV2ZW50fSBldmVudFZhbHVlcyBldmVudCBkZXRhaWxzXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdHJhY2tFdmVudChldmVudE5hbWU6IHN0cmluZywgZXZlbnRWYWx1ZXM6IEFwcHNmbHllckV2ZW50KTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBTZXR0aW5nIHlvdXIgb3duIEN1c3RvbSBJRCBlbmFibGVzIHlvdSB0byBjcm9zcy1yZWZlcmVuY2UgeW91ciBvd24gdW5pcXVlIElEIHdpdGggQXBwc0ZseWVy4oCZcyB1c2VyIElEIGFuZCB0aGUgb3RoZXIgZGV2aWNlc+KAmSBJRHMuIFRoaXMgSUQgaXMgYXZhaWxhYmxlIGluIEFwcHNGbHllciBDU1YgcmVwb3J0cyBhbG9uZyB3aXRoIHBvc3RiYWNrcyBBUElzIGZvciBjcm9zcy1yZWZlcmVuY2luZyB3aXRoIHlvdSBpbnRlcm5hbCBJRHMuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGN1c3RvbWVyVXNlcklkIHVzZXIgaWRcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzZXRBcHBVc2VySWQoY3VzdG9tZXJVc2VySWQ6IHN0cmluZyk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0dGluZyB5b3VyIG93biBDdXN0b20gSUQgZW5hYmxlcyB5b3UgdG8gY3Jvc3MtcmVmZXJlbmNlIHlvdXIgb3duIHVuaXF1ZSBJRCB3aXRoIEFwcHNGbHllcuKAmXMgdXNlciBJRCBhbmQgdGhlIG90aGVyIGRldmljZXPigJkgSURzLiBUaGlzIElEIGlzIGF2YWlsYWJsZSBpbiBBcHBzRmx5ZXIgQ1NWIHJlcG9ydHMgYWxvbmcgd2l0aCBwb3N0YmFja3MgQVBJcyBmb3IgY3Jvc3MtcmVmZXJlbmNpbmcgd2l0aCB5b3UgaW50ZXJuYWwgSURzLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY3VzdG9tZXJVc2VySWQgSW4gc29tZSBleHRyZW1lIGNhc2VzIHlvdSBtaWdodCB3YW50IHRvIHNodXQgZG93biBhbGwgU0RLIHRyYWNraW5nIGR1ZSB0byBsZWdhbCBhbmQgcHJpdmFjeSBjb21wbGlhbmNlLiBUaGlzIGNhbiBiZSBhY2hpZXZlZCB3aXRoIHRoZSBpc1N0b3BUcmFja2luZyBBUEkuIE9uY2UgdGhpcyBBUEkgaXMgaW52b2tlZCwgb3VyIFNESyB3aWxsIG5vIGxvbmdlciBjb21tdW5pY2F0ZSB3aXRoIG91ciBzZXJ2ZXJzIGFuZCBzdG9wIGZ1bmN0aW9uaW5nLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHN0b3BUcmFja2luZyhpc1N0b3BUcmFja2luZzogYm9vbGVhbik6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBkYXRhIGZyb20gQXR0cmlidXRpb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZWdpc3Rlck9uQXBwT3BlbkF0dHJpYnV0aW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbmFibGVzIGFwcCB1bmluc3RhbGwgdHJhY2tpbmdcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9rZW4gR0NNL0ZDTSBQcm9qZWN0TnVtYmVyXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZW5hYmxlVW5pbnN0YWxsVHJhY2tpbmcodG9rZW46IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBbGxvd3MgdG8gcGFzcyBHQ00vRkNNIFRva2VucyB0aGF0IHdoZXJlIGNvbGxlY3RlZCBieSB0aGlyZCBwYXJ0eSBwbHVnaW5zIHRvIHRoZSBBcHBzRmx5ZXIgc2VydmVyLiBDYW4gYmUgdXNlZCBmb3IgVW5pbnN0YWxsIFRyYWNraW5nLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b2tlbiBHQ00vRkNNIFByb2plY3ROdW1iZXJcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICB1cGRhdGVTZXJ2ZXJVbmluc3RhbGxUb2tlbih0b2tlbjogc3RyaW5nKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiAoaU9TKSBBbGxvd3MgdG8gcGFzcyBBUE4gVG9rZW5zIHRoYXQgd2hlcmUgY29sbGVjdGVkIGJ5IHRoaXJkIHBhcnR5IHBsdWdpbnMgdG8gdGhlIEFwcHNGbHllciBzZXJ2ZXIuIENhbiBiZSB1c2VkIGZvciBVbmluc3RhbGwgVHJhY2tpbmcuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRva2VuIEFQTiBUb2tlblxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHJlZ2lzdGVyVW5pbnN0YWxsKHRva2VuOiBzdHJpbmcpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBBcHBzRmx5ZXLigJlzIHByb3ByaWV0YXJ5IERldmljZSBJRC4gVGhlIEFwcHNGbHllciBEZXZpY2UgSUQgaXMgdGhlIG1haW4gSUQgdXNlZCBieSBBcHBzRmx5ZXIgaW4gUmVwb3J0cyBhbmQgQVBJcy5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0QXBwc0ZseWVyVUlEKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbmQgVXNlciBPcHQtT3V0IChPcHRpb25hbCkgQXBwc0ZseWVyIHByb3ZpZGVzIHlvdSBhIG1ldGhvZCB0byBvcHTigJBvdXQgc3BlY2lmaWMgdXNlcnMgZnJvbSBBcHBzRmx5ZXIgYW5hbHl0aWNzLiBUaGlzIG1ldGhvZCBjb21wbGllcyB3aXRoIHRoZSBsYXRlc3QgcHJpdmFjeSByZXF1aXJlbWVudHMgYW5kIGNvbXBsaWVzIHdpdGggRmFjZWJvb2sgZGF0YSBhbmQgcHJpdmFjeSBwb2xpY2llcy4gRGVmYXVsdCBpcyBGQUxTRSwgbWVhbmluZyB0cmFja2luZyBpcyBlbmFibGVkIGJ5IGRlZmF1bHQuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlIFNldCB0byB0cnVlIHRvIG9wdC1vdXQgdXNlciBmcm9tIHRyYWNraW5nXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZGV2aWNlVHJhY2tpbmdEaXNhYmxlZChkaXNhYmxlOiBib29sZWFuKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgQXBwc0ZseWVy4oCZcyBPbmVMaW5rIElELiBTZXR0aW5nIGEgdmFsaWQgT25lTGluayBJRCB3aWxsIHJlc3VsdCBpbiBzaG9ydGVuZWQgVXNlciBJbnZpdGUgbGlua3MsIHdoZW4gb25lIGlzIGdlbmVyYXRlZC4gVGhlIE9uZUxpbmsgSUQgY2FuIGJlIG9idGFpbmVkIG9uIHRoZSBBcHBzRmx5ZXIgRGFzaGJvYXJkLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvbmVMaW5rSWQgT25lTGluayBJRFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNldEFwcEludml0ZU9uZUxpbmtJRChvbmVMaW5rSWQ6IHN0cmluZyk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogQWxsb3dpbmcgeW91ciBleGlzdGluZyB1c2VycyB0byBpbnZpdGUgdGhlaXIgZnJpZW5kcyBhbmQgY29udGFjdHMgYXMgbmV3IHVzZXJzIHRvIHlvdXIgYXBwIGNhbiBiZSBhIGtleSBncm93dGggZmFjdG9yIGZvciB5b3VyIGFwcC4gQXBwc0ZseWVyIGFsbG93cyB5b3UgdG8gdHJhY2sgYW5kIGF0dHJpYnV0ZSBuZXcgaW5zdGFsbHMgb3JpZ2luYXRpbmcgZnJvbSB1c2VyIGludml0ZXMgd2l0aGluIHlvdXIgYXBwLlxyXG4gICAqIEBwYXJhbSB7QXBwc2ZseWVySW52aXRlT3B0aW9uc30gb3B0aW9ucyBQYXJhbWV0ZXJzIGZvciBJbnZpdGUgbGlua1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdlbmVyYXRlSW52aXRlTGluayhvcHRpb25zOiBBcHBzZmx5ZXJJbnZpdGVPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0aGlzIGNhbGwgdG8gdHJhY2sgYW4gaW1wcmVzc2lvbiB1c2UgdGhlIGZvbGxvd2luZyBBUEkgY2FsbC4gTWFrZSBzdXJlIHRvIHVzZSB0aGUgcHJvbW90ZWQgQXBwIElEIGFzIGl0IGFwcGVhcnMgd2l0aGluIHRoZSBBcHBzRmx5ZXIgZGFzaGJvYXJkLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBJZCBQcm9tb3RlZCBBcHBsaWNhdGlvbiBJRFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYW1wYWlnbiBQcm9tb3RlZCBDYW1wYWlnblxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHRyYWNrQ3Jvc3NQcm9tb3Rpb25JbXByZXNzaW9uKGFwcElkOiBzdHJpbmcsIGNhbXBhaWduOiBzdHJpbmcpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0aGlzIGNhbGwgdG8gdHJhY2sgdGhlIGNsaWNrIGFuZCBsYXVuY2ggdGhlIGFwcCBzdG9yZSdzIGFwcCBwYWdlICh2aWEgQnJvd3NlcilcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwSWQgUHJvbW90ZWQgQXBwbGljYXRpb24gSURcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FtcGFpZ24gUHJvbW90ZWQgQ2FtcGFpZ25cclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBZGRpdGlvbmFsIFBhcmFtZXRlcnMgdG8gdHJhY2tcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICB0cmFja0FuZE9wZW5TdG9yZShhcHBJZDogc3RyaW5nLCBjYW1wYWlnbjogc3RyaW5nLCBvcHRpb25zOiBPYmplY3QpOiB2b2lkIHt9XHJcbn1cclxuIl19