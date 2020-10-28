import { __decorate, __extends } from "tslib";
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var Tealium = /** @class */ (function (_super) {
    __extends(Tealium, _super);
    function Tealium() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tealium.prototype.init = function (config) { return cordova(this, "init", {}, arguments); };
    Tealium.prototype.trackView = function (dataObject, instanceName) { return cordova(this, "trackView", {}, arguments); };
    Tealium.prototype.trackEvent = function (dataObject, instanceName) { return cordova(this, "trackEvent", {}, arguments); };
    Tealium.prototype.track = function (eventType, dataObject, instanceName) { return cordova(this, "track", {}, arguments); };
    Tealium.prototype.addPersistent = function (keyName, value, instanceName) { return cordova(this, "addPersistent", {}, arguments); };
    Tealium.prototype.addVolatile = function (keyName, value, instanceName) { return cordova(this, "addVolatile", {}, arguments); };
    Tealium.prototype.removeVolatile = function (keyName, instanceName) { return cordova(this, "removeVolatile", {}, arguments); };
    Tealium.prototype.removePersistent = function (keyName, instanceName) { return cordova(this, "removePersistent", {}, arguments); };
    Tealium.prototype.getPersistent = function (keyName, instanceName, callback) { return cordova(this, "getPersistent", {}, arguments); };
    Tealium.prototype.getVolatile = function (keyName, instanceName, callback) { return cordova(this, "getVolatile", {}, arguments); };
    Tealium.prototype.addRemoteCommand = function (commandName, instanceName, callback) { return cordova(this, "addRemoteCommand", {}, arguments); };
    Tealium.prototype.getVisitorId = function () { return cordova(this, "getVisitorId", {}, arguments); };
    Tealium.pluginName = "Tealium";
    Tealium.plugin = "tealium-cordova-plugin";
    Tealium.pluginRef = "window.tealium";
    Tealium.repo = "https://github.com/Tealium/cordova-plugin";
    Tealium.platforms = ["Android", "iOS"];
    Tealium.install = "";
    Tealium = __decorate([
        Injectable()
    ], Tealium);
    return Tealium;
}(IonicNativePlugin));
export { Tealium };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RlYWxpdW0vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBZ0ZkLDJCQUFpQjs7OztJQVE1QyxzQkFBSSxhQUFDLE1BQWtCO0lBV3ZCLDJCQUFTLGFBQUMsVUFBZSxFQUFFLFlBQW9CO0lBVy9DLDRCQUFVLGFBQUMsVUFBZSxFQUFFLFlBQW9CO0lBWWhELHVCQUFLLGFBQUMsU0FBaUIsRUFBRSxVQUFlLEVBQUUsWUFBb0I7SUFZOUQsK0JBQWEsYUFBQyxPQUFlLEVBQUUsS0FBOEIsRUFBRSxZQUFvQjtJQVluRiw2QkFBVyxhQUFDLE9BQWUsRUFBRSxLQUF3QixFQUFFLFlBQW9CO0lBVzNFLGdDQUFjLGFBQUMsT0FBZSxFQUFFLFlBQW9CO0lBV3BELGtDQUFnQixhQUFDLE9BQWUsRUFBRSxZQUFvQjtJQVl0RCwrQkFBYSxhQUFDLE9BQWUsRUFBRSxZQUFvQixFQUFFLFFBQWE7SUFXbEUsNkJBQVcsYUFBQyxPQUFlLEVBQUUsWUFBb0IsRUFBRSxRQUFhO0lBWWhFLGtDQUFnQixhQUFDLFdBQW1CLEVBQUUsWUFBb0IsRUFBRSxRQUFhO0lBU3pFLDhCQUFZOzs7Ozs7O0lBcElELE9BQU87UUFEbkIsVUFBVSxFQUFFO09BQ0EsT0FBTztrQkFqRnBCO0VBaUY2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRlYWxDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIFlvdXIgVGVhbGl1bSBhY2NvdW50IG5hbWVcclxuICAgKi9cclxuICBhY2NvdW50OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogWW91ciBUZWFsaXVtIHByb2ZpbGUgbmFtZVxyXG4gICAqL1xyXG4gIHByb2ZpbGU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBZb3VyIFRlYWxpdW0gZW52aXJvbm1lbnQgbmFtZSAoZGV2LCBxYSwgcHJvZClcclxuICAgKi9cclxuICBlbnZpcm9ubWVudDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEFyYml0cmFyeSBpbnN0YW5jZSBuYW1lIHN0cmluZy4gTXVzdCBiZSBjb25zaXN0ZW50IGZvciBhbGwgY2FsbHMgdG8gVGVhbGl1bSBBUEkuXHJcbiAgICovXHJcbiAgaW5zdGFuY2U6IHN0cmluZztcclxuICAvKipcclxuICAgKiBFbmFibGVzIChcInRydWVcIikgb3IgZGlzYWJsZXMgKFwiZmFsc2VcIikgbGlmZWN5Y2xlIHJlcG9ydGluZy4gRGVmYXVsdCB0cnVlIGlmIG9taXR0ZWQuXHJcbiAgICovXHJcbiAgaXNMaWZlY3ljbGVFbmFibGVkPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIE5vdCB1c3VhbGx5IHJlcXVpcmVkLiBTZXRzIGEgY3VzdG9tIFVSTCBvdmVycmlkZSBmb3IgZGlzcGF0Y2hlcyB0byBVREguXHJcbiAgICovXHJcbiAgY29sbGVjdERpc3BhdGNoVVJMPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFlvdXIgVGVhbGl1bSBVREggcHJvZmlsZS4gT25seSBhY3RpdmUgaWYgeW91IGRvIG5vdCBoYXZlIGNvbGxlY3REaXNwYXRjaFVSTCBzZXQuXHJcbiAgICovXHJcbiAgY29sbGVjdERpc3BhdGNoUHJvZmlsZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBFbmFibGVzIChcInRydWVcIikgb3IgZGlzYWJsZXMgKFwiZmFsc2VcIikgQ3Jhc2ggUmVwb3J0ZXIgbW9kdWxlIGZvciBBbmRyb2lkLiBEZWZhdWx0IGZhbHNlIGlmIG9taXR0ZWQuXHJcbiAgICovXHJcbiAgaXNDcmFzaFJlcG9ydGVyRW5hYmxlZD86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYWlkXHJcbiAqIEBuYW1lIFRlYWxpdW1cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIHByb3ZpZGVzIGEgVHlwZVNjcmlwdCB3cmFwcGVyIGFyb3VuZCB0aGUgW1RlYWxpdW1dKGh0dHBzOi8vd3d3LnRlYWxpdW0uY29tKSBDb3Jkb3ZhIHBsdWdpbiBmb3IgSW9uaWMgTmF0aXZlLlxyXG4gKlxyXG4gKiBGb3IgZnVsbCBkb2N1bWVudGF0aW9uLCBzZWUgW2h0dHBzOi8vY29tbXVuaXR5LnRlYWxpdW1pcS5jb20vdDUvTW9iaWxlLUxpYnJhcmllcy9UZWFsaXVtLWZvci1Db3Jkb3ZhL3RhLXAvMTc2MThdKGh0dHBzOi8vY29tbXVuaXR5LnRlYWxpdW1pcS5jb20vdDUvTW9iaWxlLUxpYnJhcmllcy9UZWFsaXVtLWZvci1Db3Jkb3ZhL3RhLXAvMTc2MTgpXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGBcclxuICogaW1wb3J0IHsgVGVhbGl1bSwgVGVhbENvbmZpZyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdGVhbGl1bS9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlYWxpdW06IFRlYWxpdW0pIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogbGV0IHRlYWxDb25maWc6IFRlYWxDb25maWcgPSB7XHJcbiAqICBhY2NvdW50OiBcIjx5b3VyLWFjY291bnQ+XCIsXHJcbiAqICBwcm9maWxlOiBcIjx5b3VyLXByb2ZpbGU+XCIsXHJcbiAqICBlbnZpcm9ubWVudDogXCI8eW91ci1lbnZpcm9ubWVudD5cIiwgLy8gdXN1YWxseSBcImRldlwiLCBcInFhXCIgb3IgXCJwcm9kXCJcclxuICogIGlzTGlmZWN5Y2xlRW5hYmxlZDogXCJ0cnVlXCIsIC8vIHBhc3MgXCJmYWxzZVwiIHRvIGRpc2FibGUgbGlmZWN5Y2xlIHRyYWNraW5nXHJcbiAqICBpc0NyYXNoUmVwb3J0ZXJFbmFibGVkOiBcImZhbHNlXCIsIC8vIHBhc3MgXCJ0cnVlXCIgdG8gZW5hYmxlIGNyYXNoIHJlcG9ydGVyIChBbmRyb2lkIG9ubHkpXHJcbiAqICBpbnN0YW5jZTogXCI8eW91ci1pbnN0YW5jZS1uYW1lXCIgLy8gYW4gYXJiaXRyYXJ5IGluc3RhbmNlIG5hbWUuIHVzZSB0aGUgc2FtZSBpbnN0YW5jZSBuYW1lIGZvciBhbGwgc3Vic2VxdWVudCBBUEkgY2FsbHNcclxuICogfVxyXG4gKlxyXG4gKiB0aGlzLnRlYWxpdW0uaW5pdCh0ZWFsQ29uZmlnKS50aGVuKCgpPT57XHJcbiAqICAgdGhpcy50ZWFsaXVtLnRyYWNrVmlldyh7XCJzY3JlZW5fbmFtZVwiOiBcImhvbWVzY3JlZW5cIn0pO1xyXG4gKiB9KTtcclxuICpcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIFRlYWxDb25maWdcclxuICovXHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnVGVhbGl1bScsXHJcbiAgcGx1Z2luOiAndGVhbGl1bS1jb3Jkb3ZhLXBsdWdpbicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ3dpbmRvdy50ZWFsaXVtJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVGVhbGl1bS9jb3Jkb3ZhLXBsdWdpbicsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUZWFsaXVtIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGl6ZXMgdGhlIFRlYWxpdW0gQ29yZG92YSBwbHVnaW4uXHJcbiAgICogVGhpcyBzaG91bGQgdXN1YWxseSBiZSBkb25lIGluc2lkZSB0aGUgXCJkZXZpY2VSZWFkeVwiIGhhbmRsZXIuXHJcbiAgICogQHBhcmFtIGNvbmZpZyB7VGVhbENvbmZpZ31cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpbml0KGNvbmZpZzogVGVhbENvbmZpZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiB0cmFja3MgYSB2aWV3IGV2ZW50IGluIHRoZSBUZWFsaXVtIENvcmRvdmEgcGx1Z2luXHJcbiAgICogQHBhcmFtIGRhdGFPYmplY3Qge2FueX0gVGhlIEpTT04gZGF0YSBvYmplY3QgY29udGFpbmluZyB5b3VyIGtleS12YWx1ZSBwYWlyc1xyXG4gICAqIEBwYXJhbSBpbnN0YW5jZU5hbWUge3N0cmluZ30gWW91ciBhcmJpdHJhcnkgVGVhbGl1bSBpbnN0YW5jZSBuYW1lIHByb3ZpZGVkIGF0IGluaXQgdGltZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHRyYWNrVmlldyhkYXRhT2JqZWN0OiBhbnksIGluc3RhbmNlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gdHJhY2tzIGEgbGluayBldmVudCBpbiB0aGUgVGVhbGl1bSBDb3Jkb3ZhIHBsdWdpblxyXG4gICAqIEBwYXJhbSBkYXRhT2JqZWN0IHthbnl9IFRoZSBKU09OIGRhdGEgb2JqZWN0IGNvbnRhaW5pbmcgeW91ciBrZXktdmFsdWUgcGFpcnNcclxuICAgKiBAcGFyYW0gaW5zdGFuY2VOYW1lIHtzdHJpbmd9IFlvdXIgYXJiaXRyYXJ5IFRlYWxpdW0gaW5zdGFuY2UgbmFtZSBwcm92aWRlZCBhdCBpbml0IHRpbWVcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB0cmFja0V2ZW50KGRhdGFPYmplY3Q6IGFueSwgaW5zdGFuY2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiB0cmFja3MgYSBjdXN0b20gZXZlbnQgaW4gdGhlIFRlYWxpdW0gQ29yZG92YSBwbHVnaW5cclxuICAgKiBAcGFyYW0gZXZlbnRUeXBlIHtzdHJpbmd9IFRoZSBldmVudCB0eXBlLCBsaW5rIG9yIHZpZXdcclxuICAgKiBAcGFyYW0gZGF0YU9iamVjdCB7YW55fSBUaGUgSlNPTiBkYXRhIG9iamVjdCBjb250YWluaW5nIHlvdXIga2V5LXZhbHVlIHBhaXJzXHJcbiAgICogQHBhcmFtIGluc3RhbmNlTmFtZSB7c3RyaW5nfSBZb3VyIGFyYml0cmFyeSBUZWFsaXVtIGluc3RhbmNlIG5hbWUgcHJvdmlkZWQgYXQgaW5pdCB0aW1lXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgdHJhY2soZXZlbnRUeXBlOiBzdHJpbmcsIGRhdGFPYmplY3Q6IGFueSwgaW5zdGFuY2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBhZGRzIGRhdGEgdG8gdGhlIFRlYWxpdW0gcGVyc2lzdGVudCBkYXRhIHN0b3JlXHJcbiAgICogQHBhcmFtIGtleU5hbWUge3N0cmluZ30gVGhlIGtleSBuYW1lIHRoYXQgdGhpcyBkYXRhIHdpbGwgYmUgc3RvcmVkIHVuZGVyIGZvciBsYXRlciByZXRyaWV2YWxcclxuICAgKiBAcGFyYW0gdmFsdWUge2FueX0gVGhlIHZhbHVlIHRvIGJlIHN0b3JlZCBhcyBwZXJzaXN0ZW50IGRhdGFcclxuICAgKiBAcGFyYW0gaW5zdGFuY2VOYW1lIHtzdHJpbmd9IFlvdXIgYXJiaXRyYXJ5IFRlYWxpdW0gaW5zdGFuY2UgbmFtZSBwcm92aWRlZCBhdCBpbml0IHRpbWVcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBhZGRQZXJzaXN0ZW50KGtleU5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdIHwgYW55LCBpbnN0YW5jZU5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIGFkZHMgZGF0YSB0byB0aGUgVGVhbGl1bSB2b2xhdGlsZSBkYXRhIHN0b3JlXHJcbiAgICogQHBhcmFtIGtleU5hbWUge3N0cmluZ30gVGhlIGtleSBuYW1lIHRoYXQgdGhpcyBkYXRhIHdpbGwgYmUgc3RvcmVkIHVuZGVyIGZvciBsYXRlciByZXRyaWV2YWxcclxuICAgKiBAcGFyYW0gdmFsdWUge2FueX0gVGhlIHZhbHVlIHRvIGJlIHN0b3JlZCBhcyB2b2xhdGlsZSBkYXRhXHJcbiAgICogQHBhcmFtIGluc3RhbmNlTmFtZSB7c3RyaW5nfSBZb3VyIGFyYml0cmFyeSBUZWFsaXVtIGluc3RhbmNlIG5hbWUgcHJvdmlkZWQgYXQgaW5pdCB0aW1lXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgYWRkVm9sYXRpbGUoa2V5TmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10sIGluc3RhbmNlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBkYXRhIGZyb20gdGhlIFRlYWxpdW0gdm9sYXRpbGUgZGF0YSBzdG9yZVxyXG4gICAqIEBwYXJhbSBrZXlOYW1lIHtzdHJpbmd9IFRoZSBrZXkgbmFtZSB0aGF0IHRoaXMgZGF0YSB3aWxsIHJlbW92ZWQgZnJvbSB0aGUgVGVhbGl1bSBkYXRhIHN0b3JlXHJcbiAgICogQHBhcmFtIGluc3RhbmNlTmFtZSB7c3RyaW5nfSBZb3VyIGFyYml0cmFyeSBUZWFsaXVtIGluc3RhbmNlIG5hbWUgcHJvdmlkZWQgYXQgaW5pdCB0aW1lXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVtb3ZlVm9sYXRpbGUoa2V5TmFtZTogc3RyaW5nLCBpbnN0YW5jZU5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgZGF0YSBmcm9tIHRoZSBUZWFsaXVtIHBlcnNpc3RlbnQgZGF0YSBzdG9yZVxyXG4gICAqIEBwYXJhbSBrZXlOYW1lIHtzdHJpbmd9IFRoZSBrZXkgbmFtZSB0aGF0IHRoaXMgZGF0YSB3aWxsIHJlbW92ZWQgZnJvbSB0aGUgVGVhbGl1bSBkYXRhIHN0b3JlXHJcbiAgICogQHBhcmFtIGluc3RhbmNlTmFtZSB7c3RyaW5nfSBZb3VyIGFyYml0cmFyeSBUZWFsaXVtIGluc3RhbmNlIG5hbWUgcHJvdmlkZWQgYXQgaW5pdCB0aW1lXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVtb3ZlUGVyc2lzdGVudChrZXlOYW1lOiBzdHJpbmcsIGluc3RhbmNlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gcmV0cmlldmVzIGEgdmFsdWUgZnJvbSB0aGUgVGVhbGl1bSBQZXJzaXN0ZW50IGRhdGEgc3RvcmVcclxuICAgKiBAcGFyYW0ga2V5TmFtZSB7c3RyaW5nfSBUaGUga2V5IG5hbWUgdGhhdCB0aGlzIGRhdGEgd2lsbCByZXRyaWV2ZWQgZnJvbSB0aGUgVGVhbGl1bSBkYXRhIHN0b3JlXHJcbiAgICogQHBhcmFtIGluc3RhbmNlTmFtZSB7c3RyaW5nfSBZb3VyIGFyYml0cmFyeSBUZWFsaXVtIGluc3RhbmNlIG5hbWUgcHJvdmlkZWQgYXQgaW5pdCB0aW1lXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrIHthbnl9IEEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBkYXRhIGhhcyBiZWVuIHJldHJpZXZlZFxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFBlcnNpc3RlbnQoa2V5TmFtZTogc3RyaW5nLCBpbnN0YW5jZU5hbWU6IHN0cmluZywgY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gcmV0cmlldmVzIGEgdmFsdWUgZnJvbSB0aGUgVGVhbGl1bSBWb2xhdGlsZSBkYXRhIHN0b3JlXHJcbiAgICogQHBhcmFtIGtleU5hbWUge3N0cmluZ30gVGhlIGtleSBuYW1lIHRoYXQgdGhpcyBkYXRhIHdpbGwgcmV0cmlldmVkIGZyb20gdGhlIFRlYWxpdW0gZGF0YSBzdG9yZVxyXG4gICAqIEBwYXJhbSBpbnN0YW5jZU5hbWUge3N0cmluZ30gWW91ciBhcmJpdHJhcnkgVGVhbGl1bSBpbnN0YW5jZSBuYW1lIHByb3ZpZGVkIGF0IGluaXQgdGltZVxyXG4gICAqIEBwYXJhbSBjYWxsYmFjayB7YW55fSBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZGF0YSBoYXMgYmVlbiByZXRyaWV2ZWRcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRWb2xhdGlsZShrZXlOYW1lOiBzdHJpbmcsIGluc3RhbmNlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gYWRkcyBhIHJlbW90ZSBjb21tYW5kIGZvciBsYXRlciBleGVjdXRpb25cclxuICAgKiBAcGFyYW0gY29tbWFuZE5hbWUge3N0cmluZ30gVGhlIGNvbW1hbmQgbmFtZSBmb3IgdGhpcyBSZW1vdGUgQ29tbWFuZFxyXG4gICAqIEBwYXJhbSBpbnN0YW5jZU5hbWUge3N0cmluZ30gWW91ciBhcmJpdHJhcnkgVGVhbGl1bSBpbnN0YW5jZSBuYW1lIHByb3ZpZGVkIGF0IGluaXQgdGltZVxyXG4gICAqIEBwYXJhbSBjYWxsYmFjayB7YW55fSBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZGF0YSBoYXMgYmVlbiByZXRyaWV2ZWRcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBhZGRSZW1vdGVDb21tYW5kKGNvbW1hbmROYW1lOiBzdHJpbmcsIGluc3RhbmNlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gcmV0cmlldmVzIHRoZSBUZWFsaXVtIFZpc2l0b3IgSURcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRWaXNpdG9ySWQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19