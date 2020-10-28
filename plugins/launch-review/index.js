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
import { Observable } from 'rxjs';
var LaunchReviewOriginal = /** @class */ (function (_super) {
    __extends(LaunchReviewOriginal, _super);
    function LaunchReviewOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LaunchReviewOriginal.prototype.launch = function (appId) { return cordova(this, "launch", { "platforms": ["Android", "iOS"], "callbackOrder": "reverse" }, arguments); };
    LaunchReviewOriginal.prototype.rating = function () { return cordova(this, "rating", { "observable": true }, arguments); };
    LaunchReviewOriginal.prototype.isRatingSupported = function () { return cordova(this, "isRatingSupported", { "platforms": ["Android", "iOS"], "sync": true }, arguments); };
    LaunchReviewOriginal.pluginName = "LaunchReview";
    LaunchReviewOriginal.plugin = "cordova-launch-review";
    LaunchReviewOriginal.pluginRef = "LaunchReview";
    LaunchReviewOriginal.repo = "https://github.com/dpa99c/cordova-launch-review";
    LaunchReviewOriginal.platforms = ["Android", "iOS"];
    return LaunchReviewOriginal;
}(IonicNativePlugin));
var LaunchReview = new LaunchReviewOriginal();
export { LaunchReview };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xhdW5jaC1yZXZpZXcvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFtQ0EsZ0NBQWlCOzs7O0lBVWpELDZCQUFNLGFBQUMsS0FBYztJQWNyQiw2QkFBTTtJQVVOLHdDQUFpQjs7Ozs7O3VCQXZFbkI7RUFxQ2tDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIExhdW5jaCBSZXZpZXdcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEFzc2lzdHMgaW4gbGVhdmluZyB1c2VyIHJldmlld3MvcmF0aW5ncyBpbiB0aGUgQXBwIFN0b3Jlcy5cclxuICogLSBMYXVuY2hlcyB0aGUgcGxhdGZvcm0ncyBBcHAgU3RvcmUgcGFnZSBmb3IgdGhlIGN1cnJlbnQgYXBwIGluIG9yZGVyIGZvciB0aGUgdXNlciB0byBsZWF2ZSBhIHJldmlldy5cclxuICogLSBPbiBpT1MgKDEwLjMgYW5kIGFib3ZlKSBpbnZva2VzIHRoZSBuYXRpdmUgaW4tYXBwIHJhdGluZyBkaWFsb2cgd2hpY2ggYWxsb3dzIGEgdXNlciB0byByYXRlIHlvdXIgYXBwIHdpdGhvdXQgbmVlZGluZyB0byBvcGVuIHRoZSBBcHAgU3RvcmUuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IExhdW5jaFJldmlldyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbGF1bmNoLXJldmlldy9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhdW5jaFJldmlldzogTGF1bmNoUmV2aWV3KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMubGF1bmNoUmV2aWV3LmxhdW5jaCgpXHJcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBsYXVuY2hlZCBzdG9yZSBhcHAnKSk7XHJcbiAqXHJcbiAqIGlmKHRoaXMubGF1bmNoUmV2aWV3LmlzUmF0aW5nU3VwcG9ydGVkKCkpe1xyXG4gKiAgIHRoaXMubGF1bmNoUmV2aWV3LnJhdGluZygpXHJcbiAqICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IGxhdW5jaGVkIHJhdGluZyBkaWFsb2cnKSk7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnTGF1bmNoUmV2aWV3JyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLWxhdW5jaC1yZXZpZXcnLFxyXG4gIHBsdWdpblJlZjogJ0xhdW5jaFJldmlldycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kcGE5OWMvY29yZG92YS1sYXVuY2gtcmV2aWV3JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGF1bmNoUmV2aWV3IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIExhdW5jaGVzIEFwcCBTdG9yZSBvbiBjdXJyZW50IHBsYXRmb3JtIGluIG9yZGVyIHRvIGxlYXZlIGEgcmV2aWV3IGZvciBnaXZlbiBhcHAuXHJcbiAgICogQHBhcmFtIGFwcElkIHtzdHJpbmd9IC0gKG9wdGlvbmFsKSB0aGUgcGxhdGZvcm0tc3BlY2lmaWMgYXBwIElEIHRvIHVzZSB0byBvcGVuIHRoZSBwYWdlIGluIHRoZSBzdG9yZSBhcHAuXHJcbiAgICogSWYgbm90IHNwZWNpZmllZCwgdGhlIHBsdWdpbiB3aWxsIHVzZSB0aGUgYXBwIElEIGZvciB0aGUgYXBwIGluIHdoaWNoIHRoZSBwbHVnaW4gaXMgY29udGFpbmVkLlxyXG4gICAqIE9uIEFuZHJvaWQgdGhpcyBpcyB0aGUgZnVsbCBwYWNrYWdlIG5hbWUgb2YgdGhlIGFwcC4gRm9yIGV4YW1wbGUsIGZvciBHb29nbGUgTWFwczogYGNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLm1hcHNgXHJcbiAgICogT24gaU9TIHRoaXMgaXMgdGhlIEFwcGxlIElEIG9mIHRoZSBhcHAuIEZvciBleGFtcGxlLCBmb3IgR29vZ2xlIE1hcHM6IGA1ODUwMjczNTRgXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXHJcbiAgbGF1bmNoKGFwcElkPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbnZva2VzIHRoZSBuYXRpdmUgaW4tYXBwIHJhdGluZyBkaWFsb2cgd2hpY2ggYWxsb3dzIGEgdXNlciB0byByYXRlIHlvdXIgYXBwIHdpdGhvdXQgbmVlZGluZyB0byBvcGVuIHRoZSBBcHAgU3RvcmUuXHJcbiAgICogUmVxdWlyZXMgaU9TIDEwLjMgYW5kIGFib3ZlOiBDYWxsaW5nIHRoaXMgb24gYW55IHBsYXRmb3JtL3ZlcnNpb24gb3RoZXIgdGhhbiBpT1MgMTAuMysgd2lsbCByZXN1bHQgaW4gdGhlIGVycm9yIGNhbGxiYWNrLlxyXG4gICAqIFN1Y2Nlc3MgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgdXAgdG8gMyB0aW1lczpcclxuICAgKiAtIEZpcnN0OiBhZnRlciBgTGF1bmNoUmV2aWV3LnJhdGluZygpYCBpcyBjYWxsZWQgYW5kIHRoZSByZXF1ZXN0IHRvIHNob3cgdGhlIGRpYWxvZyBpcyBzdWNjZXNzZnVsLiBXaWxsIGJlIHBhc3NlZCB0aGUgdmFsdWUgYHJlcXVlc3RlZGAuXHJcbiAgICogLSBTZWNvbmQ6IGlmIGFuZCB3aGVuIHRoZSBSYXRpbmcgZGlhbG9nIGlzIGFjdHVhbGx5IGRpc3BsYXllZC4gIFdpbGwgYmUgcGFzc2VkIHRoZSB2YWx1ZSBgc2hvd25gLlxyXG4gICAqIC0gVGhpcmQ6IGlmIGFuZCB3aGVuIHRoZSBSYXRpbmcgZGlhbG9nIGlzIGRpc21pc3NlZC4gIFdpbGwgYmUgcGFzc2VkIHRoZSB2YWx1ZSBgZGlzbWlzc2VkYC5cclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxzdHJpbmc+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxyXG4gIHJhdGluZygpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGlmIHRoZSBjdXJyZW50IHBsYXRmb3JtL3ZlcnNpb24gc3VwcG9ydHMgaW4tYXBwIHJhdGluZ3MgZGlhbG9nLCBpLmUuIGNhbGxpbmcgTGF1bmNoUmV2aWV3LnJhdGluZygpLlxyXG4gICAqIFdpbGwgcmV0dXJuIHRydWUgaWYgY3VycmVudCBwbGF0Zm9ybSBpcyBpT1MgMTAuMyBvciBhYm92ZS5cclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCBzeW5jOiB0cnVlIH0pXHJcbiAgaXNSYXRpbmdTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==