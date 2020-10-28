import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var AppRate = /** @class */ (function (_super) {
    __extends(AppRate, _super);
    function AppRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppRate.prototype.promptForRating = function (immediately) { return cordova(this, "promptForRating", {}, arguments); };
    AppRate.prototype.navigateToAppStore = function () { return cordova(this, "navigateToAppStore", {}, arguments); };
    Object.defineProperty(AppRate.prototype, "preferences", {
        get: function () { return cordovaPropertyGet(this, "preferences"); },
        set: function (value) { cordovaPropertySet(this, "preferences", value); },
        enumerable: true,
        configurable: true
    });
    AppRate.pluginName = "AppRate";
    AppRate.plugin = "cordova-plugin-apprate";
    AppRate.pluginRef = "AppRate";
    AppRate.repo = "https://github.com/pushandplay/cordova-plugin-apprate";
    AppRate.platforms = ["Android", "BlackBerry 10", "iOS", "Windows"];
    AppRate = __decorate([
        Injectable()
    ], AppRate);
    return AppRate;
}(IonicNativePlugin));
export { AppRate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1yYXRlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDOztJQTZMNUQsMkJBQWlCOzs7O0lBYTVDLGlDQUFlLGFBQUMsV0FBb0I7SUFNcEMsb0NBQWtCOzBCQWJsQixnQ0FBVzs7Ozs7Ozs7Ozs7SUFOQSxPQUFPO1FBRG5CLFVBQVUsRUFBRTtPQUNBLE9BQU87a0JBOUxwQjtFQThMNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFJhdGVQcmVmZXJlbmNlcyB7XHJcbiAgLyoqXHJcbiAgICogQ3VzdG9tIEJDUCA0NyBsYW5ndWFnZSB0YWdcclxuICAgKi9cclxuICB1c2VMYW5ndWFnZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ3VzdG9tIGFwcGxpY2F0aW9uIHRpdGxlXHJcbiAgICovXHJcbiAgZGlzcGxheUFwcE5hbWU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3cgZGlhbG9nIGFnYWluIHdoZW4gYXBwbGljYXRpb24gdmVyc2lvbiB3aWxsIGJlIHVwZGF0ZWQuIERlZmF1bHRzIHRvIGB0cnVlYFxyXG4gICAqL1xyXG4gIHByb21wdEFnYWluRm9yRWFjaE5ld1ZlcnNpb24/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBjb3VudCBvZiBydW5zIG9mIGFwcGxpY2F0aW9uIGJlZm9yZSBkaWFsb2cgd2lsbCBiZSBkaXNwbGF5ZWQuIERlZmF1bHRzIHRvIGAzYFxyXG4gICAqL1xyXG4gIHVzZXNVbnRpbFByb21wdD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2ltcGxlIE1vZGUgdG8gZGlzcGxheSB0aGUgcmF0ZSBkaWFsb2cgZGlyZWN0bHkgYW5kIGJ5cGFzcyBuZWdhdGl2ZSBmZWVkYmFjayBmaWx0ZXJpbmcgZmxvd1xyXG4gICAqL1xyXG4gIHNpbXBsZU1vZGU/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBsZWF2ZSBhcHAgb3Igbm8gd2hlbiBhcHBsaWNhdGlvbiBwYWdlIG9wZW5lZCBpbiBhcHAgc3RvcmUgKG5vdyBzdXBwb3J0ZWQgb25seSBmb3IgaU9TKS4gRGVmYXVsdHMgdG8gYGZhbHNlYFxyXG4gICAqL1xyXG4gIGluQXBwUmV2aWV3PzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogdXNlIGN1c3RvbSB2aWV3IGZvciByYXRlIGRpYWxvZy4gRGVmYXVsdHMgdG8gYGZhbHNlYFxyXG4gICAqL1xyXG4gIHVzZUN1c3RvbVJhdGVEaWFsb2c/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBDdXN0b20gbG9jYWxlIG9iamVjdFxyXG4gICAqL1xyXG4gIGN1c3RvbUxvY2FsZT86IEFwcFJhdGVDdXN0b21Mb2NhbGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrcyBmb3IgZXZlbnRzXHJcbiAgICovXHJcbiAgY2FsbGJhY2tzPzogQXBwUmF0ZUNhbGxiYWNrcztcclxuXHJcbiAgLyoqXHJcbiAgICogQXBwIFN0b3JlIFVSTFNcclxuICAgKi9cclxuICBzdG9yZUFwcFVSTD86IEFwcFVybHM7XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW4gVVJMIGZ1bmN0aW9uXHJcbiAgICovXHJcbiAgb3BlblVybD86ICh1cmw6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBSYXRlQ3VzdG9tTG9jYWxlIHtcclxuICAvKiogVGl0bGUgKi9cclxuICB0aXRsZT86IHN0cmluZztcclxuXHJcbiAgLyoqIE1lc3NhZ2UgKi9cclxuICBtZXNzYWdlPzogc3RyaW5nO1xyXG5cclxuICAvKiogQ2FuY2VsIGJ1dHRvbiBsYWJlbCAqL1xyXG4gIGNhbmNlbEJ1dHRvbkxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKiogTGF0ZXIgYnV0dG9uIGxhYmVsICovXHJcbiAgbGF0ZXJCdXR0b25MYWJlbD86IHN0cmluZztcclxuXHJcbiAgLyoqIFJhdGUgYnV0dG9uIGxhYmVsICovXHJcbiAgcmF0ZUJ1dHRvbkxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKiogWWVzIGJ1dHRvbiBsYWJlbCAqL1xyXG4gIHllc0J1dHRvbkxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKiogTm8gYnV0dG9uIGxhYmVsICovXHJcbiAgbm9CdXR0b25MYWJlbD86IHN0cmluZztcclxuXHJcbiAgLyoqIEFwcCByYXRlIHByb21wdCB0aXRsZSAqL1xyXG4gIGFwcFJhdGVQcm9tcHRUaXRsZT86IHN0cmluZztcclxuXHJcbiAgLyoqIEZlZWRiYWNrIHByb21wdCB0aXRsZSAqL1xyXG4gIGZlZWRiYWNrUHJvbXB0VGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBGZWVkYmFjayBwcm9tcHQgbWVzc2FnZSAqL1xyXG4gIGFwcFJhdGVQcm9tcHRNZXNzYWdlPzogc3RyaW5nO1xyXG5cclxuICAvKiogRmVlZGJhY2sgcHJvbXB0IG1lc3NhZ2UgKi9cclxuICBmZWVkYmFja1Byb21wdE1lc3NhZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwUmF0ZUNhbGxiYWNrcyB7XHJcbiAgLyoqXHJcbiAgICogY2FsbCBiYWNrIGZ1bmN0aW9uLiBjYWxsZWQgd2hlbiB1c2VyIGNsaWNrZWQgb24gcmF0ZS1kaWFsb2cgYnV0dG9uc1xyXG4gICAqL1xyXG4gIG9uQnV0dG9uQ2xpY2tlZD86IEZ1bmN0aW9uO1xyXG5cclxuICAvKipcclxuICAgKiBjYWxsIGJhY2sgZnVuY3Rpb24uIGNhbGxlZCB3aGVuIHJhdGUtZGlhbG9nIHNob3dpbmdcclxuICAgKi9cclxuICBvblJhdGVEaWFsb2dTaG93PzogRnVuY3Rpb247XHJcbiAgLyoqXHJcbiAgICogY2FsbCBiYWNrIGZ1bmN0aW9uLiBjYWxsZWQgd2hlbiB1c2VyIGNsaWNrZWQgb24gbmVnYXRpdmUgZmVlZGJhY2tcclxuICAgKi9cclxuICBoYW5kbGVOZWdhdGl2ZUZlZWRiYWNrPzogRnVuY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwVXJscyB7XHJcbiAgLyoqXHJcbiAgICogYXBwbGljYXRpb24gaWQgaW4gQXBwU3RvcmVcclxuICAgKi9cclxuICBpb3M/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIGFwcGxpY2F0aW9uIFVSTCBpbiBHb29nbGVQbGF5XHJcbiAgICovXHJcbiAgYW5kcm9pZD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogYXBwbGljYXRpb24gVVJMIGluIFdpbmRvd3MgU3RvcmVcclxuICAgKi9cclxuICB3aW5kb3dzPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBhcHBsaWNhdGlvbiBVUkwgaW4gQXBwV29ybGRcclxuICAgKi9cclxuICBibGFja2JlcnJ5Pzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBhcHBsaWNhdGlvbiBVUkwgaW4gV2luZG93c1N0b3JlXHJcbiAgICovXHJcbiAgd2luZG93czg/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBBcHAgUmF0ZVxyXG4gKiBAcHJlbWllciBhcHAtcmF0ZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIEFwcFJhdGUgcGx1Z2luIG1ha2VzIGl0IGVhc3kgdG8gcHJvbXB0IHRoZSB1c2VyIHRvIHJhdGUgeW91ciBhcHAsIGVpdGhlciBub3csIGxhdGVyLCBvciBuZXZlci5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWFwcHJhdGUuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtBcHBSYXRlIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vcHVzaGFuZHBsYXkvY29yZG92YS1wbHVnaW4tYXBwcmF0ZSkuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEFwcFJhdGUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FwcC1yYXRlL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwUmF0ZTogQXBwUmF0ZSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKiAvLyBzZXQgY2VydGFpbiBwcmVmZXJlbmNlc1xyXG4gKiB0aGlzLmFwcFJhdGUucHJlZmVyZW5jZXMuc3RvcmVBcHBVUkwgPSB7XHJcbiAqICAgaW9zOiAnPGFwcF9pZD4nLFxyXG4gKiAgIGFuZHJvaWQ6ICdtYXJrZXQ6Ly9kZXRhaWxzP2lkPTxwYWNrYWdlX25hbWU+JyxcclxuICogICB3aW5kb3dzOiAnbXMtd2luZG93cy1zdG9yZTovL3Jldmlldy8/UHJvZHVjdElkPTxzdG9yZV9pZD4nXHJcbiAqIH1cclxuICpcclxuICogdGhpcy5hcHBSYXRlLnByb21wdEZvclJhdGluZyh0cnVlKTtcclxuICpcclxuICogLy8gb3IsIG92ZXJyaWRlIHRoZSB3aG9sZSBwcmVmZXJlbmNlcyBvYmplY3RcclxuICogdGhpcy5hcHBSYXRlLnByZWZlcmVuY2VzID0ge1xyXG4gKiAgIHVzZXNVbnRpbFByb21wdDogMyxcclxuICogICBzdG9yZUFwcFVSTDoge1xyXG4gKiAgICBpb3M6ICc8YXBwX2lkPicsXHJcbiAqICAgIGFuZHJvaWQ6ICdtYXJrZXQ6Ly9kZXRhaWxzP2lkPTxwYWNrYWdlX25hbWU+JyxcclxuICogICAgd2luZG93czogJ21zLXdpbmRvd3Mtc3RvcmU6Ly9yZXZpZXcvP1Byb2R1Y3RJZD08c3RvcmVfaWQ+J1xyXG4gKiAgIH1cclxuICogfVxyXG4gKlxyXG4gKiB0aGlzLmFwcFJhdGUucHJvbXB0Rm9yUmF0aW5nKGZhbHNlKTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIEFwcFJhdGVQcmVmZXJlbmNlc1xyXG4gKiBBcHBVcmxzXHJcbiAqIEFwcFJhdGVDYWxsYmFja3NcclxuICogQXBwUmF0ZUN1c3RvbUxvY2FsXHJcbiAqXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQXBwUmF0ZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBwcmF0ZScsXHJcbiAgcGx1Z2luUmVmOiAnQXBwUmF0ZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wdXNoYW5kcGxheS9jb3Jkb3ZhLXBsdWdpbi1hcHByYXRlJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCbGFja0JlcnJ5IDEwJywgJ2lPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwcFJhdGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ29uZmlndXJlIHZhcmlvdXMgc2V0dGluZ3MgZm9yIHRoZSBSYXRpbmcgVmlldy5cclxuICAgKiBTZWUgdGFibGUgYmVsb3cgZm9yIG9wdGlvbnNcclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBwcmVmZXJlbmNlczogQXBwUmF0ZVByZWZlcmVuY2VzO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9tcHRzIHRoZSB1c2VyIGZvciByYXRpbmdcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGltbWVkaWF0ZWx5ICBTaG93IHRoZSByYXRpbmcgcHJvbXB0IGltbWVkaWF0ZWx5LlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBwcm9tcHRGb3JSYXRpbmcoaW1tZWRpYXRlbHk6IGJvb2xlYW4pOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEltbWVkaWF0ZWx5IHNlbmQgdGhlIHVzZXIgdG8gdGhlIGFwcCBzdG9yZSByYXRpbmcgcGFnZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBuYXZpZ2F0ZVRvQXBwU3RvcmUoKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==