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
var TealiumOriginal = /** @class */ (function (_super) {
    __extends(TealiumOriginal, _super);
    function TealiumOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumOriginal.prototype.init = function (config) { return cordova(this, "init", {}, arguments); };
    TealiumOriginal.prototype.trackView = function (dataObject, instanceName) { return cordova(this, "trackView", {}, arguments); };
    TealiumOriginal.prototype.trackEvent = function (dataObject, instanceName) { return cordova(this, "trackEvent", {}, arguments); };
    TealiumOriginal.prototype.track = function (eventType, dataObject, instanceName) { return cordova(this, "track", {}, arguments); };
    TealiumOriginal.prototype.addPersistent = function (keyName, value, instanceName) { return cordova(this, "addPersistent", {}, arguments); };
    TealiumOriginal.prototype.addVolatile = function (keyName, value, instanceName) { return cordova(this, "addVolatile", {}, arguments); };
    TealiumOriginal.prototype.removeVolatile = function (keyName, instanceName) { return cordova(this, "removeVolatile", {}, arguments); };
    TealiumOriginal.prototype.removePersistent = function (keyName, instanceName) { return cordova(this, "removePersistent", {}, arguments); };
    TealiumOriginal.prototype.getPersistent = function (keyName, instanceName, callback) { return cordova(this, "getPersistent", {}, arguments); };
    TealiumOriginal.prototype.getVolatile = function (keyName, instanceName, callback) { return cordova(this, "getVolatile", {}, arguments); };
    TealiumOriginal.prototype.addRemoteCommand = function (commandName, instanceName, callback) { return cordova(this, "addRemoteCommand", {}, arguments); };
    TealiumOriginal.prototype.getVisitorId = function () { return cordova(this, "getVisitorId", {}, arguments); };
    TealiumOriginal.pluginName = "Tealium";
    TealiumOriginal.plugin = "tealium-cordova-plugin";
    TealiumOriginal.pluginRef = "window.tealium";
    TealiumOriginal.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumOriginal.platforms = ["Android", "iOS"];
    TealiumOriginal.install = "";
    return TealiumOriginal;
}(IonicNativePlugin));
var Tealium = new TealiumOriginal();
export { Tealium };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RlYWxpdW0vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBaUYzQywyQkFBaUI7Ozs7SUFRNUMsc0JBQUksYUFBQyxNQUFrQjtJQVd2QiwyQkFBUyxhQUFDLFVBQWUsRUFBRSxZQUFvQjtJQVcvQyw0QkFBVSxhQUFDLFVBQWUsRUFBRSxZQUFvQjtJQVloRCx1QkFBSyxhQUFDLFNBQWlCLEVBQUUsVUFBZSxFQUFFLFlBQW9CO0lBWTlELCtCQUFhLGFBQUMsT0FBZSxFQUFFLEtBQThCLEVBQUUsWUFBb0I7SUFZbkYsNkJBQVcsYUFBQyxPQUFlLEVBQUUsS0FBd0IsRUFBRSxZQUFvQjtJQVczRSxnQ0FBYyxhQUFDLE9BQWUsRUFBRSxZQUFvQjtJQVdwRCxrQ0FBZ0IsYUFBQyxPQUFlLEVBQUUsWUFBb0I7SUFZdEQsK0JBQWEsYUFBQyxPQUFlLEVBQUUsWUFBb0IsRUFBRSxRQUFhO0lBV2xFLDZCQUFXLGFBQUMsT0FBZSxFQUFFLFlBQW9CLEVBQUUsUUFBYTtJQVloRSxrQ0FBZ0IsYUFBQyxXQUFtQixFQUFFLFlBQW9CLEVBQUUsUUFBYTtJQVN6RSw4QkFBWTs7Ozs7OztrQkFyTmQ7RUFpRjZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGVhbENvbmZpZyB7XHJcbiAgLyoqXHJcbiAgICogWW91ciBUZWFsaXVtIGFjY291bnQgbmFtZVxyXG4gICAqL1xyXG4gIGFjY291bnQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBZb3VyIFRlYWxpdW0gcHJvZmlsZSBuYW1lXHJcbiAgICovXHJcbiAgcHJvZmlsZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFlvdXIgVGVhbGl1bSBlbnZpcm9ubWVudCBuYW1lIChkZXYsIHFhLCBwcm9kKVxyXG4gICAqL1xyXG4gIGVudmlyb25tZW50OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQXJiaXRyYXJ5IGluc3RhbmNlIG5hbWUgc3RyaW5nLiBNdXN0IGJlIGNvbnNpc3RlbnQgZm9yIGFsbCBjYWxscyB0byBUZWFsaXVtIEFQSS5cclxuICAgKi9cclxuICBpbnN0YW5jZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEVuYWJsZXMgKFwidHJ1ZVwiKSBvciBkaXNhYmxlcyAoXCJmYWxzZVwiKSBsaWZlY3ljbGUgcmVwb3J0aW5nLiBEZWZhdWx0IHRydWUgaWYgb21pdHRlZC5cclxuICAgKi9cclxuICBpc0xpZmVjeWNsZUVuYWJsZWQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogTm90IHVzdWFsbHkgcmVxdWlyZWQuIFNldHMgYSBjdXN0b20gVVJMIG92ZXJyaWRlIGZvciBkaXNwYXRjaGVzIHRvIFVESC5cclxuICAgKi9cclxuICBjb2xsZWN0RGlzcGF0Y2hVUkw/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogWW91ciBUZWFsaXVtIFVESCBwcm9maWxlLiBPbmx5IGFjdGl2ZSBpZiB5b3UgZG8gbm90IGhhdmUgY29sbGVjdERpc3BhdGNoVVJMIHNldC5cclxuICAgKi9cclxuICBjb2xsZWN0RGlzcGF0Y2hQcm9maWxlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEVuYWJsZXMgKFwidHJ1ZVwiKSBvciBkaXNhYmxlcyAoXCJmYWxzZVwiKSBDcmFzaCBSZXBvcnRlciBtb2R1bGUgZm9yIEFuZHJvaWQuIERlZmF1bHQgZmFsc2UgaWYgb21pdHRlZC5cclxuICAgKi9cclxuICBpc0NyYXNoUmVwb3J0ZXJFbmFibGVkPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhaWRcclxuICogQG5hbWUgVGVhbGl1bVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gcHJvdmlkZXMgYSBUeXBlU2NyaXB0IHdyYXBwZXIgYXJvdW5kIHRoZSBbVGVhbGl1bV0oaHR0cHM6Ly93d3cudGVhbGl1bS5jb20pIENvcmRvdmEgcGx1Z2luIGZvciBJb25pYyBOYXRpdmUuXHJcbiAqXHJcbiAqIEZvciBmdWxsIGRvY3VtZW50YXRpb24sIHNlZSBbaHR0cHM6Ly9jb21tdW5pdHkudGVhbGl1bWlxLmNvbS90NS9Nb2JpbGUtTGlicmFyaWVzL1RlYWxpdW0tZm9yLUNvcmRvdmEvdGEtcC8xNzYxOF0oaHR0cHM6Ly9jb21tdW5pdHkudGVhbGl1bWlxLmNvbS90NS9Nb2JpbGUtTGlicmFyaWVzL1RlYWxpdW0tZm9yLUNvcmRvdmEvdGEtcC8xNzYxOClcclxuICogQHVzYWdlXHJcbiAqIGBgYFxyXG4gKiBpbXBvcnQgeyBUZWFsaXVtLCBUZWFsQ29uZmlnIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS90ZWFsaXVtL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVhbGl1bTogVGVhbGl1bSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBsZXQgdGVhbENvbmZpZzogVGVhbENvbmZpZyA9IHtcclxuICogIGFjY291bnQ6IFwiPHlvdXItYWNjb3VudD5cIixcclxuICogIHByb2ZpbGU6IFwiPHlvdXItcHJvZmlsZT5cIixcclxuICogIGVudmlyb25tZW50OiBcIjx5b3VyLWVudmlyb25tZW50PlwiLCAvLyB1c3VhbGx5IFwiZGV2XCIsIFwicWFcIiBvciBcInByb2RcIlxyXG4gKiAgaXNMaWZlY3ljbGVFbmFibGVkOiBcInRydWVcIiwgLy8gcGFzcyBcImZhbHNlXCIgdG8gZGlzYWJsZSBsaWZlY3ljbGUgdHJhY2tpbmdcclxuICogIGlzQ3Jhc2hSZXBvcnRlckVuYWJsZWQ6IFwiZmFsc2VcIiwgLy8gcGFzcyBcInRydWVcIiB0byBlbmFibGUgY3Jhc2ggcmVwb3J0ZXIgKEFuZHJvaWQgb25seSlcclxuICogIGluc3RhbmNlOiBcIjx5b3VyLWluc3RhbmNlLW5hbWVcIiAvLyBhbiBhcmJpdHJhcnkgaW5zdGFuY2UgbmFtZS4gdXNlIHRoZSBzYW1lIGluc3RhbmNlIG5hbWUgZm9yIGFsbCBzdWJzZXF1ZW50IEFQSSBjYWxsc1xyXG4gKiB9XHJcbiAqXHJcbiAqIHRoaXMudGVhbGl1bS5pbml0KHRlYWxDb25maWcpLnRoZW4oKCk9PntcclxuICogICB0aGlzLnRlYWxpdW0udHJhY2tWaWV3KHtcInNjcmVlbl9uYW1lXCI6IFwiaG9tZXNjcmVlblwifSk7XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogVGVhbENvbmZpZ1xyXG4gKi9cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdUZWFsaXVtJyxcclxuICBwbHVnaW46ICd0ZWFsaXVtLWNvcmRvdmEtcGx1Z2luJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnd2luZG93LnRlYWxpdW0nLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UZWFsaXVtL2NvcmRvdmEtcGx1Z2luJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRlYWxpdW0gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBpbml0aWFsaXplcyB0aGUgVGVhbGl1bSBDb3Jkb3ZhIHBsdWdpbi5cclxuICAgKiBUaGlzIHNob3VsZCB1c3VhbGx5IGJlIGRvbmUgaW5zaWRlIHRoZSBcImRldmljZVJlYWR5XCIgaGFuZGxlci5cclxuICAgKiBAcGFyYW0gY29uZmlnIHtUZWFsQ29uZmlnfVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGluaXQoY29uZmlnOiBUZWFsQ29uZmlnKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIHRyYWNrcyBhIHZpZXcgZXZlbnQgaW4gdGhlIFRlYWxpdW0gQ29yZG92YSBwbHVnaW5cclxuICAgKiBAcGFyYW0gZGF0YU9iamVjdCB7YW55fSBUaGUgSlNPTiBkYXRhIG9iamVjdCBjb250YWluaW5nIHlvdXIga2V5LXZhbHVlIHBhaXJzXHJcbiAgICogQHBhcmFtIGluc3RhbmNlTmFtZSB7c3RyaW5nfSBZb3VyIGFyYml0cmFyeSBUZWFsaXVtIGluc3RhbmNlIG5hbWUgcHJvdmlkZWQgYXQgaW5pdCB0aW1lXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgdHJhY2tWaWV3KGRhdGFPYmplY3Q6IGFueSwgaW5zdGFuY2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiB0cmFja3MgYSBsaW5rIGV2ZW50IGluIHRoZSBUZWFsaXVtIENvcmRvdmEgcGx1Z2luXHJcbiAgICogQHBhcmFtIGRhdGFPYmplY3Qge2FueX0gVGhlIEpTT04gZGF0YSBvYmplY3QgY29udGFpbmluZyB5b3VyIGtleS12YWx1ZSBwYWlyc1xyXG4gICAqIEBwYXJhbSBpbnN0YW5jZU5hbWUge3N0cmluZ30gWW91ciBhcmJpdHJhcnkgVGVhbGl1bSBpbnN0YW5jZSBuYW1lIHByb3ZpZGVkIGF0IGluaXQgdGltZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHRyYWNrRXZlbnQoZGF0YU9iamVjdDogYW55LCBpbnN0YW5jZU5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIHRyYWNrcyBhIGN1c3RvbSBldmVudCBpbiB0aGUgVGVhbGl1bSBDb3Jkb3ZhIHBsdWdpblxyXG4gICAqIEBwYXJhbSBldmVudFR5cGUge3N0cmluZ30gVGhlIGV2ZW50IHR5cGUsIGxpbmsgb3Igdmlld1xyXG4gICAqIEBwYXJhbSBkYXRhT2JqZWN0IHthbnl9IFRoZSBKU09OIGRhdGEgb2JqZWN0IGNvbnRhaW5pbmcgeW91ciBrZXktdmFsdWUgcGFpcnNcclxuICAgKiBAcGFyYW0gaW5zdGFuY2VOYW1lIHtzdHJpbmd9IFlvdXIgYXJiaXRyYXJ5IFRlYWxpdW0gaW5zdGFuY2UgbmFtZSBwcm92aWRlZCBhdCBpbml0IHRpbWVcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB0cmFjayhldmVudFR5cGU6IHN0cmluZywgZGF0YU9iamVjdDogYW55LCBpbnN0YW5jZU5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIGFkZHMgZGF0YSB0byB0aGUgVGVhbGl1bSBwZXJzaXN0ZW50IGRhdGEgc3RvcmVcclxuICAgKiBAcGFyYW0ga2V5TmFtZSB7c3RyaW5nfSBUaGUga2V5IG5hbWUgdGhhdCB0aGlzIGRhdGEgd2lsbCBiZSBzdG9yZWQgdW5kZXIgZm9yIGxhdGVyIHJldHJpZXZhbFxyXG4gICAqIEBwYXJhbSB2YWx1ZSB7YW55fSBUaGUgdmFsdWUgdG8gYmUgc3RvcmVkIGFzIHBlcnNpc3RlbnQgZGF0YVxyXG4gICAqIEBwYXJhbSBpbnN0YW5jZU5hbWUge3N0cmluZ30gWW91ciBhcmJpdHJhcnkgVGVhbGl1bSBpbnN0YW5jZSBuYW1lIHByb3ZpZGVkIGF0IGluaXQgdGltZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGFkZFBlcnNpc3RlbnQoa2V5TmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10gfCBhbnksIGluc3RhbmNlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gYWRkcyBkYXRhIHRvIHRoZSBUZWFsaXVtIHZvbGF0aWxlIGRhdGEgc3RvcmVcclxuICAgKiBAcGFyYW0ga2V5TmFtZSB7c3RyaW5nfSBUaGUga2V5IG5hbWUgdGhhdCB0aGlzIGRhdGEgd2lsbCBiZSBzdG9yZWQgdW5kZXIgZm9yIGxhdGVyIHJldHJpZXZhbFxyXG4gICAqIEBwYXJhbSB2YWx1ZSB7YW55fSBUaGUgdmFsdWUgdG8gYmUgc3RvcmVkIGFzIHZvbGF0aWxlIGRhdGFcclxuICAgKiBAcGFyYW0gaW5zdGFuY2VOYW1lIHtzdHJpbmd9IFlvdXIgYXJiaXRyYXJ5IFRlYWxpdW0gaW5zdGFuY2UgbmFtZSBwcm92aWRlZCBhdCBpbml0IHRpbWVcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBhZGRWb2xhdGlsZShrZXlOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSwgaW5zdGFuY2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiByZW1vdmVzIGRhdGEgZnJvbSB0aGUgVGVhbGl1bSB2b2xhdGlsZSBkYXRhIHN0b3JlXHJcbiAgICogQHBhcmFtIGtleU5hbWUge3N0cmluZ30gVGhlIGtleSBuYW1lIHRoYXQgdGhpcyBkYXRhIHdpbGwgcmVtb3ZlZCBmcm9tIHRoZSBUZWFsaXVtIGRhdGEgc3RvcmVcclxuICAgKiBAcGFyYW0gaW5zdGFuY2VOYW1lIHtzdHJpbmd9IFlvdXIgYXJiaXRyYXJ5IFRlYWxpdW0gaW5zdGFuY2UgbmFtZSBwcm92aWRlZCBhdCBpbml0IHRpbWVcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZW1vdmVWb2xhdGlsZShrZXlOYW1lOiBzdHJpbmcsIGluc3RhbmNlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBkYXRhIGZyb20gdGhlIFRlYWxpdW0gcGVyc2lzdGVudCBkYXRhIHN0b3JlXHJcbiAgICogQHBhcmFtIGtleU5hbWUge3N0cmluZ30gVGhlIGtleSBuYW1lIHRoYXQgdGhpcyBkYXRhIHdpbGwgcmVtb3ZlZCBmcm9tIHRoZSBUZWFsaXVtIGRhdGEgc3RvcmVcclxuICAgKiBAcGFyYW0gaW5zdGFuY2VOYW1lIHtzdHJpbmd9IFlvdXIgYXJiaXRyYXJ5IFRlYWxpdW0gaW5zdGFuY2UgbmFtZSBwcm92aWRlZCBhdCBpbml0IHRpbWVcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZW1vdmVQZXJzaXN0ZW50KGtleU5hbWU6IHN0cmluZywgaW5zdGFuY2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiByZXRyaWV2ZXMgYSB2YWx1ZSBmcm9tIHRoZSBUZWFsaXVtIFBlcnNpc3RlbnQgZGF0YSBzdG9yZVxyXG4gICAqIEBwYXJhbSBrZXlOYW1lIHtzdHJpbmd9IFRoZSBrZXkgbmFtZSB0aGF0IHRoaXMgZGF0YSB3aWxsIHJldHJpZXZlZCBmcm9tIHRoZSBUZWFsaXVtIGRhdGEgc3RvcmVcclxuICAgKiBAcGFyYW0gaW5zdGFuY2VOYW1lIHtzdHJpbmd9IFlvdXIgYXJiaXRyYXJ5IFRlYWxpdW0gaW5zdGFuY2UgbmFtZSBwcm92aWRlZCBhdCBpbml0IHRpbWVcclxuICAgKiBAcGFyYW0gY2FsbGJhY2sge2FueX0gQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGRhdGEgaGFzIGJlZW4gcmV0cmlldmVkXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0UGVyc2lzdGVudChrZXlOYW1lOiBzdHJpbmcsIGluc3RhbmNlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiByZXRyaWV2ZXMgYSB2YWx1ZSBmcm9tIHRoZSBUZWFsaXVtIFZvbGF0aWxlIGRhdGEgc3RvcmVcclxuICAgKiBAcGFyYW0ga2V5TmFtZSB7c3RyaW5nfSBUaGUga2V5IG5hbWUgdGhhdCB0aGlzIGRhdGEgd2lsbCByZXRyaWV2ZWQgZnJvbSB0aGUgVGVhbGl1bSBkYXRhIHN0b3JlXHJcbiAgICogQHBhcmFtIGluc3RhbmNlTmFtZSB7c3RyaW5nfSBZb3VyIGFyYml0cmFyeSBUZWFsaXVtIGluc3RhbmNlIG5hbWUgcHJvdmlkZWQgYXQgaW5pdCB0aW1lXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrIHthbnl9IEEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBkYXRhIGhhcyBiZWVuIHJldHJpZXZlZFxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFZvbGF0aWxlKGtleU5hbWU6IHN0cmluZywgaW5zdGFuY2VOYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBhZGRzIGEgcmVtb3RlIGNvbW1hbmQgZm9yIGxhdGVyIGV4ZWN1dGlvblxyXG4gICAqIEBwYXJhbSBjb21tYW5kTmFtZSB7c3RyaW5nfSBUaGUgY29tbWFuZCBuYW1lIGZvciB0aGlzIFJlbW90ZSBDb21tYW5kXHJcbiAgICogQHBhcmFtIGluc3RhbmNlTmFtZSB7c3RyaW5nfSBZb3VyIGFyYml0cmFyeSBUZWFsaXVtIGluc3RhbmNlIG5hbWUgcHJvdmlkZWQgYXQgaW5pdCB0aW1lXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrIHthbnl9IEEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBkYXRhIGhhcyBiZWVuIHJldHJpZXZlZFxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGFkZFJlbW90ZUNvbW1hbmQoY29tbWFuZE5hbWU6IHN0cmluZywgaW5zdGFuY2VOYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiByZXRyaWV2ZXMgdGhlIFRlYWxpdW0gVmlzaXRvciBJRFxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFZpc2l0b3JJZCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=