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
var HCEOriginal = /** @class */ (function (_super) {
    __extends(HCEOriginal, _super);
    function HCEOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HCEOriginal.prototype.registerCommandCallback = function (onCommand, fail) { return cordova(this, "registerCommandCallback", {}, arguments); };
    HCEOriginal.prototype.registerDeactivatedCallback = function (ok, fail) { return cordova(this, "registerDeactivatedCallback", {}, arguments); };
    HCEOriginal.prototype.sendResponse = function (response, success, failure) { return cordova(this, "sendResponse", {}, arguments); };
    HCEOriginal.pluginName = "hce";
    HCEOriginal.plugin = "cordova-plugin-hce";
    HCEOriginal.pluginRef = "hce";
    HCEOriginal.repo = "https://github.com/don/cordova-plugin-hce";
    HCEOriginal.install = "";
    HCEOriginal.installVariables = ["AID_FILTER"];
    HCEOriginal.platforms = ["Android"];
    return HCEOriginal;
}(IonicNativePlugin));
var HCE = new HCEOriginal();
export { HCE };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2hjZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF1Qy9DLHVCQUFpQjs7OztJQVF4QyxxQ0FBdUIsYUFBQyxTQUEwQixFQUFFLElBQWU7SUFVbkUseUNBQTJCLGFBQUMsRUFBdUIsRUFBRSxJQUFlO0lBWXBFLDBCQUFZLGFBQUMsUUFBb0IsRUFBRSxPQUFrQixFQUFFLE9BQWtCOzs7Ozs7OztjQXRFM0U7RUF3Q3lCLGlCQUFpQjtTQUE3QixHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBoY2VcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEhDRSBDb3Jkb3ZhIFdyYXBwZXJcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgaGNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9oY2Uvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBoY2U6IGhjZSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBmdW5jdGlvbiBvbkNvbW1hbmQoY29tbWFuZCl7XHJcbiAqICAgdmFyIGNvbW1hbmRBc0J5dGVzID0gbmV3IFVpbnQ4QXJyYXkoY29tbWFuZCk7XHJcbiAqICAgdmFyIGNvbW1hbmRBc1N0cmluZyA9IGhjZS51dGlsLmJ5dGVBcnJheVRvSGV4U3RyaW5nKGNvbW1hbmRBc0J5dGVzKTtcclxuICpcclxuICogICAvLyBkbyBzb21ldGhpbmcgd2l0aCB0aGUgY29tbWFuZFxyXG4gKlxyXG4gKiAgIC8vIHNlbmQgdGhlIHJlc3BvbnNlXHJcbiAqICAgaGNlLnNlbmRSZXBvbnNlKGNvbW1hbmRSZXNwb25zZSk7XHJcbiAqIH1cclxuICogdGhpcy5oY2UucmVnaXN0ZXJDb21tYW5kQ2FsbGJhY2soKS50aGVuKG9uQ29tbWFuZCk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ2hjZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taGNlJyxcclxuICBwbHVnaW5SZWY6ICdoY2UnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZG9uL2NvcmRvdmEtcGx1Z2luLWhjZScsXHJcbiAgaW5zdGFsbDogJycsXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBSURfRklMVEVSJ10sXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSENFIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVycyBjb21tYW5kIHJlY2VpdmVyLlxyXG4gICAqIEBwYXJhbSBvbkNvbW1hbmQge0hDRUNvbW1hbmRFdmVudH0gVGhlIGV2ZW50IGhhbmRsZXIuXHJcbiAgICogQHBhcmFtIGZhaWwge0Z1bmN0aW9ufSBFcnJvciBldmVudCBoYW5kbGVyLlxyXG4gICAqXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlZ2lzdGVyQ29tbWFuZENhbGxiYWNrKG9uQ29tbWFuZDogSENFQ29tbWFuZEV2ZW50LCBmYWlsPzogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVycyBEZWFjdGl2YXRlZCByZWNlaXZlci5cclxuICAgKiBAcGFyYW0gb2sge0hDRURlYWN0aXZhdGVkRXZlbnR9IFN1Y2Nlc3MgZXZlbnQgaGFuZGxlci5cclxuICAgKiBAcGFyYW0gZmFpbCB7RnVuY3Rpb259IEVycm9yIGV2ZW50IGhhbmRsZXIuXHJcbiAgICpcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVnaXN0ZXJEZWFjdGl2YXRlZENhbGxiYWNrKG9rOiBIQ0VEZWFjdGl2YXRlZEV2ZW50LCBmYWlsPzogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZW5kcyByZXNwb25zZSBBUERVLlxyXG4gICAqIEBwYXJhbSByZXNwb25zZSB7VWludDhBcnJheX0gUmVzcG9uc2VcclxuICAgKiBAcGFyYW0gc3VjY2VzcyB7c3RyaW5nfSBTdWNjZXNzIENhbGxiYWNrLlxyXG4gICAqIEBwYXJhbSBzdWNjZXNzIHtzdHJpbmd9IEZhaWx1cmUgQ2FsbGJhY2suXHJcbiAgICpcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2VuZFJlc3BvbnNlKHJlc3BvbnNlOiBVaW50OEFycmF5LCBzdWNjZXNzPzogRnVuY3Rpb24sIGZhaWx1cmU/OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEhDRUNvbW1hbmRFdmVudCA9IChjb21tYW5kOiBVaW50OEFycmF5KSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBIQ0VEZWFjdGl2YXRlZEV2ZW50ID0gKGNvbW1hbmQ6IG51bWJlcikgPT4gdm9pZDtcclxuIl19