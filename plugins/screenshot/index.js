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
import { IonicNativePlugin, Plugin, getPromise } from '@ionic-native/core';
var ScreenshotOriginal = /** @class */ (function (_super) {
    __extends(ScreenshotOriginal, _super);
    function ScreenshotOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *  Takes screenshot and saves the image
     *
     * @param format {string} Format can take the value of either 'jpg' or 'png'
     * On ios, only 'jpg' format is supported
     * @param quality {number}  Determines the quality of the screenshot.
     *        Default quality is set to 100.
     * @param filename {string} Name of the file as stored on the storage
     * @returns {Promise<any>}
     */
    ScreenshotOriginal.prototype.save = function (format, quality, filename) {
        return getPromise(function (resolve, reject) {
            navigator.screenshot.save(function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            }, format, quality, filename);
        });
    };
    /**
     *  Takes screenshot and returns the image as an URI
     *
     * @param quality {number} Determines the quality of the screenshot.
     *        Default quality is set to 100.
     * @returns {Promise<any>}
     */
    ScreenshotOriginal.prototype.URI = function (quality) {
        return getPromise(function (resolve, reject) {
            navigator.screenshot.URI(function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            }, quality);
        });
    };
    ScreenshotOriginal.pluginName = "Screenshot";
    ScreenshotOriginal.plugin = "com.darktalker.cordova.screenshot";
    ScreenshotOriginal.pluginRef = "navigator.screenshot";
    ScreenshotOriginal.repo = "https://github.com/gitawego/cordova-screenshot";
    ScreenshotOriginal.platforms = ["Android", "iOS", "macOS"];
    return ScreenshotOriginal;
}(IonicNativePlugin));
var Screenshot = new ScreenshotOriginal();
export { Screenshot };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NjcmVlbnNob3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBOEIzQyw4QkFBaUI7Ozs7SUFDL0M7Ozs7Ozs7OztPQVNHO0lBQ0gseUJBQUksR0FBSixVQUFLLE1BQWUsRUFBRSxPQUFnQixFQUFFLFFBQWlCO1FBQ3ZELE9BQU8sVUFBVSxDQUFNLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDckMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3ZCLFVBQUMsS0FBVSxFQUFFLE1BQVc7Z0JBQ3RCLElBQUksS0FBSyxFQUFFO29CQUNULE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDZjtxQkFBTTtvQkFDTCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2pCO1lBQ0gsQ0FBQyxFQUNELE1BQU0sRUFDTixPQUFPLEVBQ1AsUUFBUSxDQUNULENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCx3QkFBRyxHQUFILFVBQUksT0FBZ0I7UUFDbEIsT0FBTyxVQUFVLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNyQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQVUsRUFBRSxNQUFXO2dCQUMvQyxJQUFJLEtBQUssRUFBRTtvQkFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNqQjtZQUNILENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O3FCQTVFSDtFQStCZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4sIGdldFByb21pc2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBuYXZpZ2F0b3I6IGFueTtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTY3JlZW5zaG90XHJcbiAqIEBkZXNjcmlwdGlvbiBDYXB0dXJlcyBhIHNjcmVlbiBzaG90XHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNjcmVlbnNob3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NjcmVlbnNob3Qvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzY3JlZW5zaG90OiBTY3JlZW5zaG90KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIC8vIFRha2UgYSBzY3JlZW5zaG90IGFuZCBzYXZlIHRvIGZpbGVcclxuICogdGhpcy5zY3JlZW5zaG90LnNhdmUoJ2pwZycsIDgwLCAnbXlzY3JlZW5zaG90LmpwZycpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcclxuICpcclxuICogLy8gVGFrZSBhIHNjcmVlbnNob3QgYW5kIGdldCB0ZW1wb3JhcnkgZmlsZSBVUklcclxuICogdGhpcy5zY3JlZW5zaG90LlVSSSg4MCkudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdTY3JlZW5zaG90JyxcclxuICBwbHVnaW46ICdjb20uZGFya3RhbGtlci5jb3Jkb3ZhLnNjcmVlbnNob3QnLFxyXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5zY3JlZW5zaG90JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2dpdGF3ZWdvL2NvcmRvdmEtc2NyZWVuc2hvdCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ21hY09TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNjcmVlbnNob3QgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogIFRha2VzIHNjcmVlbnNob3QgYW5kIHNhdmVzIHRoZSBpbWFnZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGZvcm1hdCB7c3RyaW5nfSBGb3JtYXQgY2FuIHRha2UgdGhlIHZhbHVlIG9mIGVpdGhlciAnanBnJyBvciAncG5nJ1xyXG4gICAqIE9uIGlvcywgb25seSAnanBnJyBmb3JtYXQgaXMgc3VwcG9ydGVkXHJcbiAgICogQHBhcmFtIHF1YWxpdHkge251bWJlcn0gIERldGVybWluZXMgdGhlIHF1YWxpdHkgb2YgdGhlIHNjcmVlbnNob3QuXHJcbiAgICogICAgICAgIERlZmF1bHQgcXVhbGl0eSBpcyBzZXQgdG8gMTAwLlxyXG4gICAqIEBwYXJhbSBmaWxlbmFtZSB7c3RyaW5nfSBOYW1lIG9mIHRoZSBmaWxlIGFzIHN0b3JlZCBvbiB0aGUgc3RvcmFnZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgc2F2ZShmb3JtYXQ/OiBzdHJpbmcsIHF1YWxpdHk/OiBudW1iZXIsIGZpbGVuYW1lPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBnZXRQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBuYXZpZ2F0b3Iuc2NyZWVuc2hvdC5zYXZlKFxyXG4gICAgICAgIChlcnJvcjogYW55LCByZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb3JtYXQsXHJcbiAgICAgICAgcXVhbGl0eSxcclxuICAgICAgICBmaWxlbmFtZVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAgVGFrZXMgc2NyZWVuc2hvdCBhbmQgcmV0dXJucyB0aGUgaW1hZ2UgYXMgYW4gVVJJXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcXVhbGl0eSB7bnVtYmVyfSBEZXRlcm1pbmVzIHRoZSBxdWFsaXR5IG9mIHRoZSBzY3JlZW5zaG90LlxyXG4gICAqICAgICAgICBEZWZhdWx0IHF1YWxpdHkgaXMgc2V0IHRvIDEwMC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIFVSSShxdWFsaXR5PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBnZXRQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBuYXZpZ2F0b3Iuc2NyZWVuc2hvdC5VUkkoKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBxdWFsaXR5KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=