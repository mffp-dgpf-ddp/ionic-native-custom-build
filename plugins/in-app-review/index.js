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
var InAppReviewOriginal = /** @class */ (function (_super) {
    __extends(InAppReviewOriginal, _super);
    function InAppReviewOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppReviewOriginal.prototype.requestReview = function () { return cordova(this, "requestReview", {}, arguments); };
    InAppReviewOriginal.pluginName = "InAppReview";
    InAppReviewOriginal.plugin = "com.omarben.inappreview";
    InAppReviewOriginal.pluginRef = "inappreview";
    InAppReviewOriginal.repo = "https://github.com/omaxlive/com.omarben.inappreview";
    InAppReviewOriginal.platforms = ["iOS"];
    return InAppReviewOriginal;
}(IonicNativePlugin));
var InAppReview = new InAppReviewOriginal();
export { InAppReview };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luLWFwcC1yZXZpZXcvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBbUN2QywrQkFBaUI7Ozs7SUFNaEQsbUNBQWE7Ozs7OztzQkExQ2Y7RUFvQ2lDLGlCQUFpQjtTQUFyQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuLyogdHNsaW50OmRpc2FibGUgKi9cclxuLyoqXHJcbiAqIEBuYW1lIEluIEFwcCBSZXZpZXdcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGRvZXMgdXNlIHRoZSBpT1MgY2xhc3MgU0tTdG9yZeKAi1Jldmlld+KAi0NvbnRyb2xsZXIgdG8gb3BlbiB0aGUgaW5BcHAgcmV2aWV3IHBvcHVwIGF2YWlsYWJsZSBzaW5jZSBpT1MgMTAuM1xyXG4gKlxyXG4gKiBUaGlzIGZ1bmN0aW9uYWxpdHkgb25seSB3b3JrcyBvbiBpT1MgZGV2aWNlc1xyXG4gKlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBJbkFwcFJldmlldyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW4tYXBwLXJldmlldy9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGluQXBwUmV2aWV3OiBJbkFwcFJldmlldykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmluQXBwUmV2aWV3LnJlcXVlc3RSZXZpZXcoKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG4vKiB0c2xpbnQ6ZW5hYmxlICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdJbkFwcFJldmlldycsXHJcbiAgcGx1Z2luOiAnY29tLm9tYXJiZW4uaW5hcHByZXZpZXcnLFxyXG4gIHBsdWdpblJlZjogJ2luYXBwcmV2aWV3JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL29tYXhsaXZlL2NvbS5vbWFyYmVuLmluYXBwcmV2aWV3JyxcclxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEluQXBwUmV2aWV3IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIE9wZW4gdGhlIGluQXBwIHJldmlldyBwb3B1cFxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlcXVlc3RSZXZpZXcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXHJcbiAgfVxyXG59XHJcbiJdfQ==