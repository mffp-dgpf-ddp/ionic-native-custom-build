import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, Plugin, getPromise } from '@ionic-native/core';
var Screenshot = /** @class */ (function (_super) {
    __extends(Screenshot, _super);
    function Screenshot() {
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
    Screenshot.prototype.save = function (format, quality, filename) {
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
    Screenshot.prototype.URI = function (quality) {
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
    Screenshot.pluginName = "Screenshot";
    Screenshot.plugin = "com.darktalker.cordova.screenshot";
    Screenshot.pluginRef = "navigator.screenshot";
    Screenshot.repo = "https://github.com/gitawego/cordova-screenshot";
    Screenshot.platforms = ["Android", "iOS", "macOS"];
    Screenshot = __decorate([
        Injectable()
    ], Screenshot);
    return Screenshot;
}(IonicNativePlugin));
export { Screenshot };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NjcmVlbnNob3Qvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBOEIzQyw4QkFBaUI7Ozs7SUFDL0M7Ozs7Ozs7OztPQVNHO0lBQ0gseUJBQUksR0FBSixVQUFLLE1BQWUsRUFBRSxPQUFnQixFQUFFLFFBQWlCO1FBQ3ZELE9BQU8sVUFBVSxDQUFNLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDckMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3ZCLFVBQUMsS0FBVSxFQUFFLE1BQVc7Z0JBQ3RCLElBQUksS0FBSyxFQUFFO29CQUNULE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDZjtxQkFBTTtvQkFDTCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2pCO1lBQ0gsQ0FBQyxFQUNELE1BQU0sRUFDTixPQUFPLEVBQ1AsUUFBUSxDQUNULENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCx3QkFBRyxHQUFILFVBQUksT0FBZ0I7UUFDbEIsT0FBTyxVQUFVLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNyQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQVUsRUFBRSxNQUFXO2dCQUMvQyxJQUFJLEtBQUssRUFBRTtvQkFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNqQjtZQUNILENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBN0NVLFVBQVU7UUFEdEIsVUFBVSxFQUFFO09BQ0EsVUFBVTtxQkEvQnZCO0VBK0JnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiwgZ2V0UHJvbWlzZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IG5hdmlnYXRvcjogYW55O1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNjcmVlbnNob3RcclxuICogQGRlc2NyaXB0aW9uIENhcHR1cmVzIGEgc2NyZWVuIHNob3RcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgU2NyZWVuc2hvdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc2NyZWVuc2hvdC9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjcmVlbnNob3Q6IFNjcmVlbnNob3QpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogLy8gVGFrZSBhIHNjcmVlbnNob3QgYW5kIHNhdmUgdG8gZmlsZVxyXG4gKiB0aGlzLnNjcmVlbnNob3Quc2F2ZSgnanBnJywgODAsICdteXNjcmVlbnNob3QuanBnJykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gKlxyXG4gKiAvLyBUYWtlIGEgc2NyZWVuc2hvdCBhbmQgZ2V0IHRlbXBvcmFyeSBmaWxlIFVSSVxyXG4gKiB0aGlzLnNjcmVlbnNob3QuVVJJKDgwKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1NjcmVlbnNob3QnLFxyXG4gIHBsdWdpbjogJ2NvbS5kYXJrdGFsa2VyLmNvcmRvdmEuc2NyZWVuc2hvdCcsXHJcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLnNjcmVlbnNob3QnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZ2l0YXdlZ28vY29yZG92YS1zY3JlZW5zaG90JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnbWFjT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2NyZWVuc2hvdCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiAgVGFrZXMgc2NyZWVuc2hvdCBhbmQgc2F2ZXMgdGhlIGltYWdlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZm9ybWF0IHtzdHJpbmd9IEZvcm1hdCBjYW4gdGFrZSB0aGUgdmFsdWUgb2YgZWl0aGVyICdqcGcnIG9yICdwbmcnXHJcbiAgICogT24gaW9zLCBvbmx5ICdqcGcnIGZvcm1hdCBpcyBzdXBwb3J0ZWRcclxuICAgKiBAcGFyYW0gcXVhbGl0eSB7bnVtYmVyfSAgRGV0ZXJtaW5lcyB0aGUgcXVhbGl0eSBvZiB0aGUgc2NyZWVuc2hvdC5cclxuICAgKiAgICAgICAgRGVmYXVsdCBxdWFsaXR5IGlzIHNldCB0byAxMDAuXHJcbiAgICogQHBhcmFtIGZpbGVuYW1lIHtzdHJpbmd9IE5hbWUgb2YgdGhlIGZpbGUgYXMgc3RvcmVkIG9uIHRoZSBzdG9yYWdlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBzYXZlKGZvcm1hdD86IHN0cmluZywgcXVhbGl0eT86IG51bWJlciwgZmlsZW5hbWU/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIG5hdmlnYXRvci5zY3JlZW5zaG90LnNhdmUoXHJcbiAgICAgICAgKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvcm1hdCxcclxuICAgICAgICBxdWFsaXR5LFxyXG4gICAgICAgIGZpbGVuYW1lXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICBUYWtlcyBzY3JlZW5zaG90IGFuZCByZXR1cm5zIHRoZSBpbWFnZSBhcyBhbiBVUklcclxuICAgKlxyXG4gICAqIEBwYXJhbSBxdWFsaXR5IHtudW1iZXJ9IERldGVybWluZXMgdGhlIHF1YWxpdHkgb2YgdGhlIHNjcmVlbnNob3QuXHJcbiAgICogICAgICAgIERlZmF1bHQgcXVhbGl0eSBpcyBzZXQgdG8gMTAwLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgVVJJKHF1YWxpdHk/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIG5hdmlnYXRvci5zY3JlZW5zaG90LlVSSSgoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHF1YWxpdHkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==