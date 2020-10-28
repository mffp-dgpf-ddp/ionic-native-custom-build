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
var BackgroundFetchOriginal = /** @class */ (function (_super) {
    __extends(BackgroundFetchOriginal, _super);
    function BackgroundFetchOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackgroundFetchOriginal.prototype.configure = function (config) { return cordova(this, "configure", { "callbackOrder": "reverse" }, arguments); };
    BackgroundFetchOriginal.prototype.start = function () { return cordova(this, "start", {}, arguments); };
    BackgroundFetchOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    BackgroundFetchOriginal.prototype.finish = function (taskId) { return cordova(this, "finish", { "sync": true }, arguments); };
    BackgroundFetchOriginal.prototype.status = function () { return cordova(this, "status", {}, arguments); };
    BackgroundFetchOriginal.pluginName = "BackgroundFetch";
    BackgroundFetchOriginal.plugin = "cordova-plugin-background-fetch";
    BackgroundFetchOriginal.pluginRef = "BackgroundFetch";
    BackgroundFetchOriginal.repo = "https://github.com/transistorsoft/cordova-plugin-background-fetch";
    BackgroundFetchOriginal.platforms = ["iOS"];
    return BackgroundFetchOriginal;
}(IonicNativePlugin));
var BackgroundFetch = new BackgroundFetchOriginal();
export { BackgroundFetch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhY2tncm91bmQtZmV0Y2gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNERuQyxtQ0FBaUI7Ozs7SUFVcEQsbUNBQVMsYUFBQyxNQUE2QjtJQVV2QywrQkFBSztJQVNMLDhCQUFJO0lBVUosZ0NBQU0sYUFBQyxNQUFjO0lBT3JCLGdDQUFNOzs7Ozs7MEJBMUdSO0VBNERxQyxpQkFBaUI7U0FBekMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhY2tncm91bmRGZXRjaENvbmZpZyB7XHJcbiAgLyoqXHJcbiAgICogU2V0IHRydWUgdG8gY2Vhc2UgYmFja2dyb3VuZC1mZXRjaCBmcm9tIG9wZXJhdGluZyBhZnRlciB1c2VyIFwiY2xvc2VzXCIgdGhlIGFwcC4gRGVmYXVsdHMgdG8gdHJ1ZS5cclxuICAgKi9cclxuICBzdG9wT25UZXJtaW5hdGU/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQmFja2dyb3VuZCBGZXRjaFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogaU9TIEJhY2tncm91bmQgRmV0Y2ggSW1wbGVtZW50YXRpb24uIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL3JlZmVyZW5jZS91aWtpdC91aWFwcGxpY2F0aW9uIzE2NTczOTlcclxuICogaU9TIEJhY2tncm91bmQgRmV0Y2ggaXMgYmFzaWNhbGx5IGFuIEFQSSB3aGljaCB3YWtlcyB1cCB5b3VyIGFwcCBhYm91dCBldmVyeSAxNSBtaW51dGVzIChkdXJpbmcgdGhlIHVzZXIncyBwcmltZS10aW1lIGhvdXJzKSBhbmQgcHJvdmlkZXMgeW91ciBhcHAgZXhhY3RseSAzMHMgb2YgYmFja2dyb3VuZCBydW5uaW5nLXRpbWUuIFRoaXMgcGx1Z2luIHdpbGwgZXhlY3V0ZSB5b3VyIHByb3ZpZGVkIGNhbGxiYWNrRm4gd2hlbmV2ZXIgYSBiYWNrZ3JvdW5kLWZldGNoIGV2ZW50IG9jY3Vycy4gVGhlcmUgaXMgbm8gd2F5IHRvIGluY3JlYXNlIHRoZSByYXRlIHdoaWNoIGEgZmV0Y2gtZXZlbnQgb2NjdXJzIGFuZCB0aGlzIHBsdWdpbiBzZXRzIHRoZSByYXRlIHRvIHRoZSBtb3N0IGZyZXF1ZW50IHBvc3NpYmxlIHZhbHVlIG9mIFVJQXBwbGljYXRpb25CYWNrZ3JvdW5kRmV0Y2hJbnRlcnZhbE1pbmltdW0gLS0gaU9TIGRldGVybWluZXMgdGhlIHJhdGUgYXV0b21hdGljYWxseSBiYXNlZCB1cG9uIGRldmljZSB1c2FnZSBhbmQgdGltZS1vZi1kYXkgKGllOiBmZXRjaC1yYXRlIGlzIGFib3V0IH4xNW1pbiBkdXJpbmcgcHJpbWUtdGltZSBob3VyczsgbGVzcyBmcmVxdWVudGx5IHdoZW4gdGhlIHVzZXIgaXMgcHJlc3VtZWQgdG8gYmUgc2xlZXBpbmcsIGF0IDNhbSBmb3IgZXhhbXBsZSkuXHJcbiAqIEZvciBtb3JlIGRldGFpbCwgcGxlYXNlIHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHJhbnNpc3RvcnNvZnQvY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC1mZXRjaFxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBCYWNrZ3JvdW5kRmV0Y2gsIEJhY2tncm91bmRGZXRjaENvbmZpZyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFja2dyb3VuZC1mZXRjaC9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tncm91bmRGZXRjaDogQmFja2dyb3VuZEZldGNoKSB7XHJcbiAqXHJcbiAqICAgY29uc3QgY29uZmlnOiBCYWNrZ3JvdW5kRmV0Y2hDb25maWcgPSB7XHJcbiAqICAgICBzdG9wT25UZXJtaW5hdGU6IGZhbHNlLCAvLyBTZXQgdHJ1ZSB0byBjZWFzZSBiYWNrZ3JvdW5kLWZldGNoIGZyb20gb3BlcmF0aW5nIGFmdGVyIHVzZXIgXCJjbG9zZXNcIiB0aGUgYXBwLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gKiAgIH1cclxuICpcclxuICogICBiYWNrZ3JvdW5kRmV0Y2guY29uZmlndXJlKGNvbmZpZylcclxuICogICAgICAudGhlbigoKSA9PiB7XHJcbiAqICAgICAgICAgIGNvbnNvbGUubG9nKCdCYWNrZ3JvdW5kIEZldGNoIGluaXRpYWxpemVkJyk7XHJcbiAqXHJcbiAqICAgICAgICAgIHRoaXMuYmFja2dyb3VuZEZldGNoLmZpbmlzaCgpO1xyXG4gKlxyXG4gKiAgICAgIH0pXHJcbiAqICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coJ0Vycm9yIGluaXRpYWxpemluZyBiYWNrZ3JvdW5kIGZldGNoJywgZSkpO1xyXG4gKlxyXG4gKiAgIC8vIFN0YXJ0IHRoZSBiYWNrZ3JvdW5kLWZldGNoIEFQSS4gWW91ciBjYWxsYmFja0ZuIHByb3ZpZGVkIHRvICNjb25maWd1cmUgd2lsbCBiZSBleGVjdXRlZCBlYWNoIHRpbWUgYSBiYWNrZ3JvdW5kLWZldGNoIGV2ZW50IG9jY3Vycy4gTk9URSB0aGUgI2NvbmZpZ3VyZSBtZXRob2QgYXV0b21hdGljYWxseSBjYWxscyAjc3RhcnQuIFlvdSBkbyBub3QgaGF2ZSB0byBjYWxsIHRoaXMgbWV0aG9kIGFmdGVyIHlvdSAjY29uZmlndXJlIHRoZSBwbHVnaW5cclxuICogICBiYWNrZ3JvdW5kRmV0Y2guc3RhcnQoKTtcclxuICpcclxuICogICAvLyBTdG9wIHRoZSBiYWNrZ3JvdW5kLWZldGNoIEFQSSBmcm9tIGZpcmluZyBmZXRjaCBldmVudHMuIFlvdXIgY2FsbGJhY2tGbiBwcm92aWRlZCB0byAjY29uZmlndXJlIHdpbGwgbm8gbG9uZ2VyIGJlIGV4ZWN1dGVkLlxyXG4gKiAgIGJhY2tncm91bmRGZXRjaC5zdG9wKCk7XHJcbiAqXHJcbiAqXHJcbiAqIH1cclxuICpcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIEJhY2tncm91bmRGZXRjaENvbmZpZ1xyXG4gKlxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0JhY2tncm91bmRGZXRjaCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC1mZXRjaCcsXHJcbiAgcGx1Z2luUmVmOiAnQmFja2dyb3VuZEZldGNoJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RyYW5zaXN0b3Jzb2Z0L2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtZmV0Y2gnLFxyXG4gIHBsYXRmb3JtczogWydpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZEZldGNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENvbmZpZ3VyZXMgdGhlIHBsdWdpbidzIGZldGNoIGNhbGxiYWNrRm5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QmFja2dyb3VuZEZldGNoQ29uZmlnfSBjb25maWcgQ29uZmlndXJhdGlvbiBmb3IgcGx1Z2luXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcclxuICB9KVxyXG4gIGNvbmZpZ3VyZShjb25maWc6IEJhY2tncm91bmRGZXRjaENvbmZpZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydCB0aGUgYmFja2dyb3VuZC1mZXRjaCBBUEkuXHJcbiAgICogWW91ciBjYWxsYmFja0ZuIHByb3ZpZGVkIHRvICNjb25maWd1cmUgd2lsbCBiZSBleGVjdXRlZCBlYWNoIHRpbWUgYSBiYWNrZ3JvdW5kLWZldGNoIGV2ZW50IG9jY3Vycy4gTk9URSB0aGUgI2NvbmZpZ3VyZSBtZXRob2QgYXV0b21hdGljYWxseSBjYWxscyAjc3RhcnQuIFlvdSBkbyBub3QgaGF2ZSB0byBjYWxsIHRoaXMgbWV0aG9kIGFmdGVyIHlvdSAjY29uZmlndXJlIHRoZSBwbHVnaW5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdGFydCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcCB0aGUgYmFja2dyb3VuZC1mZXRjaCBBUEkgZnJvbSBmaXJpbmcgZmV0Y2ggZXZlbnRzLiBZb3VyIGNhbGxiYWNrRm4gcHJvdmlkZWQgdG8gI2NvbmZpZ3VyZSB3aWxsIG5vIGxvbmdlciBiZSBleGVjdXRlZC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdG9wKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBZb3UgTVVTVCBjYWxsIHRoaXMgbWV0aG9kIGluIHlvdXIgZmV0Y2ggY2FsbGJhY2tGbiBwcm92aWRlZCB0byAjY29uZmlndXJlIGluIG9yZGVyIHRvIHNpZ25hbCB0byBpT1MgdGhhdCB5b3VyIGZldGNoIGFjdGlvbiBpcyBjb21wbGV0ZS4gaU9TIHByb3ZpZGVzIG9ubHkgMzBzIG9mIGJhY2tncm91bmQtdGltZSBmb3IgYSBmZXRjaC1ldmVudCAtLSBpZiB5b3UgZXhjZWVkIHRoaXMgMzBzLCBpT1Mgd2lsbCBraWxsIHlvdXIgYXBwLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBmaW5pc2godGFza0lkOiBzdHJpbmcpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybiB0aGUgc3RhdHVzIG9mIHRoZSBiYWNrZ3JvdW5kLWZldGNoXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RhdHVzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==