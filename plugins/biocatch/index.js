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
var BioCatchOriginal = /** @class */ (function (_super) {
    __extends(BioCatchOriginal, _super);
    function BioCatchOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BioCatchOriginal.prototype.start = function (customerSessionID, wupUrl, publicKey) { return cordova(this, "start", {}, arguments); };
    BioCatchOriginal.prototype.pause = function () { return cordova(this, "pause", {}, arguments); };
    BioCatchOriginal.prototype.resume = function () { return cordova(this, "resume", {}, arguments); };
    BioCatchOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    BioCatchOriginal.prototype.resetSession = function () { return cordova(this, "resetSession", {}, arguments); };
    BioCatchOriginal.prototype.changeContext = function (contextName) { return cordova(this, "changeContext", {}, arguments); };
    BioCatchOriginal.prototype.updateCustomerSessionID = function (customerSessionID) { return cordova(this, "updateCustomerSessionID", {}, arguments); };
    BioCatchOriginal.pluginName = "BioCatch";
    BioCatchOriginal.plugin = "cordova-plugin-biocatch";
    BioCatchOriginal.pluginRef = "BioCatch";
    BioCatchOriginal.repo = "https://bitbucket.org/carlos_orellana/ionic-plugin";
    BioCatchOriginal.platforms = ["iOS", "Android"];
    return BioCatchOriginal;
}(IonicNativePlugin));
var BioCatch = new BioCatchOriginal();
export { BioCatch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jpb2NhdGNoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQStCMUMsNEJBQWlCOzs7O0lBUzdDLHdCQUFLLGFBQUMsaUJBQWdDLEVBQUUsTUFBYyxFQUFFLFNBQXdCO0lBU2hGLHdCQUFLO0lBU0wseUJBQU07SUFTTix1QkFBSTtJQVNKLCtCQUFZO0lBVVosZ0NBQWEsYUFBQyxXQUFtQjtJQVVqQywwQ0FBdUIsYUFBQyxpQkFBZ0M7Ozs7OzttQkFqRzFEO0VBZ0M4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgQmlvQ2F0Y2hcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEJpb0NhdGNoIFNESyBDb3Jkb3ZhIHN1cHBvcnRcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQmlvQ2F0Y2ggfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Jpb2NhdGNoJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiaW9jYXRjaDogQmlvQ2F0Y2gpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5iaW9jYXRjaC5zdGFydCgnY3VzdG9tZXItc2Vzc2lvbi0xJywgJ2h0dHA6Ly9leGFtcGxlLmNvbScsICdzb21lLXB1YmxpYy1rZXknKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQmlvQ2F0Y2gnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJpb2NhdGNoJyxcclxuICBwbHVnaW5SZWY6ICdCaW9DYXRjaCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vYml0YnVja2V0Lm9yZy9jYXJsb3Nfb3JlbGxhbmEvaW9uaWMtcGx1Z2luJyxcclxuICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmlvQ2F0Y2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogU3RhcnQgYSBzZXNzaW9uXHJcbiAgICogQHBhcmFtIGN1c3RvbWVyU2Vzc2lvbklEIHtTdHJpbmd9IEN1c3RvbWVyIHNlc3Npb24gaWRcclxuICAgKiBAcGFyYW0gd3VwVXJsIHtTdHJpbmd9IFdVUCBzZXJ2ZXIgVVJMXHJcbiAgICogQHBhcmFtIHB1YmxpY0tleSB7U3RyaW5nfSBQdWJsaWMgS2V5XHJcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RhcnQoY3VzdG9tZXJTZXNzaW9uSUQ6IHN0cmluZyB8IG51bGwsIHd1cFVybDogc3RyaW5nLCBwdWJsaWNLZXk6IHN0cmluZyB8IG51bGwpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhdXNlIHRoZSBzZXNzaW9uXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXN1bWUgdGhlIHNlc3Npb25cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZXN1bWUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wIHRoZSBzZXNzaW9uXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IHRoZSBzZXNzaW9uXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVzZXRTZXNzaW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlIHRoZSBzZXNzaW9uIGNvbnRleHRcclxuICAgKiBAcGFyYW0gY29udGV4dE5hbWUge1N0cmluZ30gQ29udGV4dCBuYW1lXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2hhbmdlQ29udGV4dChjb250ZXh0TmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIGN1c3RvbWVyIHNlc3Npb24gSURcclxuICAgKiBAcGFyYW0gY3VzdG9tZXJTZXNzaW9uSUQge1N0cmluZ31cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB1cGRhdGVDdXN0b21lclNlc3Npb25JRChjdXN0b21lclNlc3Npb25JRDogc3RyaW5nIHwgbnVsbCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=