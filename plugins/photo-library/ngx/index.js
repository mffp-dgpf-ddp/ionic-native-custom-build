import { __decorate, __extends } from "tslib";
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
/**
 * @hidden
 *
 * Wraps method that returns an observable that can be completed. Provided opts.resultFinalPredicate dictates when the observable completes.
 */
export function CordovaFiniteObservable(opts) {
    if (opts === void 0) { opts = {}; }
    opts.observable = true;
    return function (target, methodName, descriptor) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var wrappedObservable = wrap(this, methodName, opts).apply(this, args);
                return new Observable(function (observer) {
                    var wrappedSubscription = wrappedObservable.subscribe({
                        next: function (x) {
                            observer.next(opts.resultTransform ? x[opts.resultTransform] : x);
                            if (opts.resultFinalPredicate && x[opts.resultFinalPredicate]) {
                                observer.complete();
                            }
                        },
                        error: function (err) {
                            observer.error(err);
                        },
                        complete: function () {
                            observer.complete();
                        },
                    });
                    return function () {
                        wrappedSubscription.unsubscribe();
                    };
                });
            },
            enumerable: true,
        };
    };
}
var PhotoLibrary = /** @class */ (function (_super) {
    __extends(PhotoLibrary, _super);
    function PhotoLibrary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhotoLibrary.prototype.getLibrary = function (success, error, options) { return cordova(this, "getLibrary", { "observable": true }, arguments); };
    PhotoLibrary.prototype.requestAuthorization = function (options) { return cordova(this, "requestAuthorization", { "callbackOrder": "reverse" }, arguments); };
    PhotoLibrary.prototype.getAlbums = function () { return cordova(this, "getAlbums", { "callbackOrder": "reverse" }, arguments); };
    PhotoLibrary.prototype.getThumbnailURL = function (photo, options) { return cordova(this, "getThumbnailURL", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    PhotoLibrary.prototype.getPhotoURL = function (photo, options) { return cordova(this, "getPhotoURL", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    PhotoLibrary.prototype.getThumbnail = function (photo, options) { return cordova(this, "getThumbnail", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    PhotoLibrary.prototype.getPhoto = function (photo, options) { return cordova(this, "getPhoto", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    PhotoLibrary.prototype.saveImage = function (url, album, options) { return cordova(this, "saveImage", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    PhotoLibrary.prototype.saveVideo = function (url, album) { return cordova(this, "saveVideo", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    PhotoLibrary.pluginName = "PhotoLibrary";
    PhotoLibrary.plugin = "cordova-plugin-photo-library";
    PhotoLibrary.pluginRef = "cordova.plugins.photoLibrary";
    PhotoLibrary.repo = "https://github.com/terikon/cordova-plugin-photo-library";
    PhotoLibrary.install = "ionic cordova plugin add cordova-plugin-photo-library --variable PHOTO_LIBRARY_USAGE_DESCRIPTION=\"To choose photos\"";
    PhotoLibrary.installVariables = ["PHOTO_LIBRARY_USAGE_DESCRIPTION"];
    PhotoLibrary.platforms = ["Android", "Browser", "iOS"];
    PhotoLibrary = __decorate([
        Injectable()
    ], PhotoLibrary);
    return PhotoLibrary;
}(IonicNativePlugin));
export { PhotoLibrary };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bob3RvLWxpYnJhcnkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLDhCQUE0RCxNQUFNLG9CQUFvQixDQUFDO0FBQzlGLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWdCM0M7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxJQUF5QztJQUF6QyxxQkFBQSxFQUFBLFNBQXlDO0lBQy9FLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLE9BQU8sVUFBQyxNQUFjLEVBQUUsVUFBa0IsRUFBRSxVQUF3QztRQUNsRixPQUFPO1lBQ0wsS0FBSyxFQUFMO2dCQUFNLGNBQWM7cUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztvQkFBZCx5QkFBYzs7Z0JBQ2xCLElBQU0saUJBQWlCLEdBQW9CLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzFGLE9BQU8sSUFBSSxVQUFVLENBQU0sVUFBQyxRQUF1QjtvQkFDakQsSUFBTSxtQkFBbUIsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7d0JBQ3RELElBQUksRUFBRSxVQUFDLENBQU07NEJBQ1gsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDbEUsSUFBSSxJQUFJLENBQUMsb0JBQW9CLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO2dDQUM3RCxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7NkJBQ3JCO3dCQUNILENBQUM7d0JBQ0QsS0FBSyxFQUFFLFVBQUMsR0FBUTs0QkFDZCxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN0QixDQUFDO3dCQUNELFFBQVEsRUFBRTs0QkFDUixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3RCLENBQUM7cUJBQ0YsQ0FBQyxDQUFDO29CQUNILE9BQU87d0JBQ0wsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3BDLENBQUMsQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFDRCxVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7SUFrRGlDLGdDQUFpQjs7OztJQVNqRCxpQ0FBVSxhQUNSLE9BQTZCLEVBQzdCLEtBQTJCLEVBQzNCLE9BQTJCO0lBYTdCLDJDQUFvQixhQUFDLE9BQXFDO0lBVzFELGdDQUFTO0lBY1Qsc0NBQWUsYUFBQyxLQUEyQixFQUFFLE9BQTZCO0lBYzFFLGtDQUFXLGFBQUMsS0FBMkIsRUFBRSxPQUFhO0lBY3RELG1DQUFZLGFBQUMsS0FBMkIsRUFBRSxPQUE2QjtJQWN2RSwrQkFBUSxhQUFDLEtBQTJCLEVBQUUsT0FBYTtJQWdCbkQsZ0NBQVMsYUFBQyxHQUFXLEVBQUUsS0FBeUIsRUFBRSxPQUE2QjtJQWMvRSxnQ0FBUyxhQUFDLEdBQVcsRUFBRSxLQUF5Qjs7Ozs7Ozs7SUExSHJDLFlBQVk7UUFEeEIsVUFBVSxFQUFFO09BQ0EsWUFBWTt1QkF0R3pCO0VBc0drQyxpQkFBaUI7U0FBdEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFPcHRpb25zLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luLCB3cmFwIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29yZG92YUZpbml0ZU9ic2VydmFibGVPcHRpb25zIGV4dGVuZHMgQ29yZG92YU9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRoYXQgZ2V0cyBhIHJlc3VsdCByZXR1cm5lZCBmcm9tIHBsdWdpbidzIHN1Y2Nlc3MgY2FsbGJhY2ssIGFuZCBkZWNpZGVzIHdoZXRoZXIgaXQgaXMgbGFzdCB2YWx1ZSBhbmQgb2JzZXJ2YWJsZSBzaG91bGQgY29tcGxldGUuXHJcbiAgICovXHJcbiAgcmVzdWx0RmluYWxQcmVkaWNhdGU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBhZnRlciByZXN1bHRGaW5hbFByZWRpY2F0ZSwgYW5kIHJlbW92ZXMgc2VydmljZSBkYXRhIHRoYXQgaW5kaWNhdGVzIGVuZCBvZiBzdHJlYW0gZnJvbSB0aGUgcmVzdWx0LlxyXG4gICAqL1xyXG4gIHJlc3VsdFRyYW5zZm9ybT86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICpcclxuICogV3JhcHMgbWV0aG9kIHRoYXQgcmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGJlIGNvbXBsZXRlZC4gUHJvdmlkZWQgb3B0cy5yZXN1bHRGaW5hbFByZWRpY2F0ZSBkaWN0YXRlcyB3aGVuIHRoZSBvYnNlcnZhYmxlIGNvbXBsZXRlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3Jkb3ZhRmluaXRlT2JzZXJ2YWJsZShvcHRzOiBDb3Jkb3ZhRmluaXRlT2JzZXJ2YWJsZU9wdGlvbnMgPSB7fSkge1xyXG4gIG9wdHMub2JzZXJ2YWJsZSA9IHRydWU7XHJcbiAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgbWV0aG9kTmFtZTogc3RyaW5nLCBkZXNjcmlwdG9yOiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxhbnk+KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZSguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZWRPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT4gPSB3cmFwKHRoaXMsIG1ldGhvZE5hbWUsIG9wdHMpLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxhbnk+KChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgd3JhcHBlZFN1YnNjcmlwdGlvbiA9IHdyYXBwZWRPYnNlcnZhYmxlLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgIG5leHQ6ICh4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KG9wdHMucmVzdWx0VHJhbnNmb3JtID8geFtvcHRzLnJlc3VsdFRyYW5zZm9ybV0gOiB4KTtcclxuICAgICAgICAgICAgICBpZiAob3B0cy5yZXN1bHRGaW5hbFByZWRpY2F0ZSAmJiB4W29wdHMucmVzdWx0RmluYWxQcmVkaWNhdGVdKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd3JhcHBlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIH07XHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFBob3RvIExpYnJhcnlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBQaG90b0xpYnJhcnkgcGx1Z2luIGFsbG93cyBhY2Nlc3MgdG8gcGhvdG9zIGZyb20gZGV2aWNlIGJ5IHVybC4gU28geW91IGNhbiB1c2UgcGxhaW4gaW1nIHRhZyB0byBkaXNwbGF5IHBob3RvcyBhbmQgdGhlaXIgdGh1bWJuYWlscywgYW5kIGRpZmZlcmVudCAzcmQgcGFydHkgbGlicmFyaWVzIGFzIHdlbGwuXHJcbiAqIFNhdmluZyBwaG90b3MgYW5kIHZpZGVvcyB0byB0aGUgbGlicmFyeSBpcyBhbHNvIHN1cHBvcnRlZC5cclxuICogY2R2cGhvdG9saWJyYXJ5IHVybHMgc2hvdWxkIGJlIHRydXN0ZWQgYnkgQW5ndWxhci4gU2VlIHBsdWdpbiBob21lcGFnZSB0byBsZWFybiBob3cuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFBob3RvTGlicmFyeSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvcGhvdG8tbGlicmFyeS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBob3RvTGlicmFyeTogUGhvdG9MaWJyYXJ5KSB7IH1cclxuICpcclxuICogdGhpcy5waG90b0xpYnJhcnkucmVxdWVzdEF1dGhvcml6YXRpb24oKS50aGVuKCgpID0+IHtcclxuICogICB0aGlzLnBob3RvTGlicmFyeS5nZXRMaWJyYXJ5KCkuc3Vic2NyaWJlKHtcclxuICogICAgIG5leHQ6IGxpYnJhcnkgPT4ge1xyXG4gKiAgICAgICBsaWJyYXJ5LmZvckVhY2goZnVuY3Rpb24obGlicmFyeUl0ZW0pIHtcclxuICogICAgICAgICBjb25zb2xlLmxvZyhsaWJyYXJ5SXRlbS5pZCk7ICAgICAgICAgIC8vIElEIG9mIHRoZSBwaG90b1xyXG4gKiAgICAgICAgIGNvbnNvbGUubG9nKGxpYnJhcnlJdGVtLnBob3RvVVJMKTsgICAgLy8gQ3Jvc3MtcGxhdGZvcm0gYWNjZXNzIHRvIHBob3RvXHJcbiAqICAgICAgICAgY29uc29sZS5sb2cobGlicmFyeUl0ZW0udGh1bWJuYWlsVVJMKTsvLyBDcm9zcy1wbGF0Zm9ybSBhY2Nlc3MgdG8gdGh1bWJuYWlsXHJcbiAqICAgICAgICAgY29uc29sZS5sb2cobGlicmFyeUl0ZW0uZmlsZU5hbWUpO1xyXG4gKiAgICAgICAgIGNvbnNvbGUubG9nKGxpYnJhcnlJdGVtLndpZHRoKTtcclxuICogICAgICAgICBjb25zb2xlLmxvZyhsaWJyYXJ5SXRlbS5oZWlnaHQpO1xyXG4gKiAgICAgICAgIGNvbnNvbGUubG9nKGxpYnJhcnlJdGVtLmNyZWF0aW9uRGF0ZSk7XHJcbiAqICAgICAgICAgY29uc29sZS5sb2cobGlicmFyeUl0ZW0ubGF0aXR1ZGUpO1xyXG4gKiAgICAgICAgIGNvbnNvbGUubG9nKGxpYnJhcnlJdGVtLmxvbmdpdHVkZSk7XHJcbiAqICAgICAgICAgY29uc29sZS5sb2cobGlicmFyeUl0ZW0uYWxidW1JZHMpOyAgICAvLyBhcnJheSBvZiBpZHMgb2YgYXBwcm9wcmlhdGUgQWxidW1JdGVtLCBvbmx5IG9mIGluY2x1ZGVBbGJ1bXNEYXRhIHdhcyB1c2VkXHJcbiAqICAgICAgIH0pO1xyXG4gKiAgICAgfSxcclxuICogICAgIGVycm9yOiBlcnIgPT4geyBjb25zb2xlLmxvZygnY291bGQgbm90IGdldCBwaG90b3MnKTsgfSxcclxuICogICAgIGNvbXBsZXRlOiAoKSA9PiB7IGNvbnNvbGUubG9nKCdkb25lIGdldHRpbmcgcGhvdG9zJyk7IH1cclxuICogICB9KTtcclxuICogfSlcclxuICogLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygncGVybWlzc2lvbnMgd2VyZW5cXCd0IGdyYW50ZWQnKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1Bob3RvTGlicmFyeScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcGhvdG8tbGlicmFyeScsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLnBob3RvTGlicmFyeScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90ZXJpa29uL2NvcmRvdmEtcGx1Z2luLXBob3RvLWxpYnJhcnknLFxyXG4gIGluc3RhbGw6XHJcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXBob3RvLWxpYnJhcnkgLS12YXJpYWJsZSBQSE9UT19MSUJSQVJZX1VTQUdFX0RFU0NSSVBUSU9OPVwiVG8gY2hvb3NlIHBob3Rvc1wiJyxcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1BIT1RPX0xJQlJBUllfVVNBR0VfREVTQ1JJUFRJT04nXSxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQaG90b0xpYnJhcnkgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmVzIGxpYnJhcnkgaXRlbXMuIExpYnJhcnkgaXRlbSBjb250YWlucyBwaG90byBtZXRhZGF0YSBsaWtlIHdpZHRoIGFuZCBoZWlnaHQsIGFzIHdlbGwgYXMgcGhvdG9VUkwgYW5kIHRodW1ibmFpbFVSTC5cclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7R2V0TGlicmFyeU9wdGlvbnN9IE9wdGlvbmFsLCBsaWtlIHRodW1ibmFpbCBzaXplIGFuZCBjaHVua3Mgc2V0dGluZ3MuXHJcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxMaWJyYXJ5SXRlbVtdPn0gUmV0dXJucyBsaWJyYXJ5IGl0ZW1zLiBJZiBhcHByb3ByaWF0ZSBvcHRpb24gd2FzIHNldCwgd2lsbCBiZSByZXR1cm5lZCBieSBjaHVua3MuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICB9KVxyXG4gIGdldExpYnJhcnkoXHJcbiAgICBzdWNjZXNzPzogKHJlcz86IGFueSkgPT4gdm9pZCxcclxuICAgIGVycm9yPzogKGVycj86IGFueSkgPT4gdm9pZCxcclxuICAgIG9wdGlvbnM/OiBHZXRMaWJyYXJ5T3B0aW9uc1xyXG4gICk6IE9ic2VydmFibGU8TGlicmFyeUl0ZW1bXT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXNrcyB1c2VyIHBlcm1pc3Npb24gdG8gYWNjZXNzIHBob3RvIGxpYnJhcnkuXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge1JlcXVlc3RBdXRob3JpemF0aW9uT3B0aW9uc30gT3B0aW9uYWwsIGxpa2Ugd2hldGhlciBvbmx5IHJlYWQgYWNjZXNzIG5lZWRlZCBvciByZWFkL3dyaXRlLlxyXG4gICAqIEByZXR1cm4geyBQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gcGVybWlzc2lvbnMgYXJlIGdyYW50ZWQsIGFuZCBmYWlscyB3aGVuIG5vdC5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICByZXF1ZXN0QXV0aG9yaXphdGlvbihvcHRpb25zPzogUmVxdWVzdEF1dGhvcml6YXRpb25PcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGxpc3Qgb2YgcGhvdG8gYWxidW1zIG9uIGRldmljZS5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEFsYnVtSXRlbVtdPn0gUmVzb2x2ZXMgdG8gbGlzdCBvZiBhbGJ1bXMuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgZ2V0QWxidW1zKCk6IFByb21pc2U8QWxidW1JdGVtW10+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3ZpZGVzIG1lYW5zIHRvIHJlcXVlc3QgVVJMIG9mIHRodW1ibmFpbCwgd2l0aCBzcGVjaWZpZWQgc2l6ZSBvciBxdWFsaXR5LlxyXG4gICAqIEBwYXJhbSBwaG90byB7c3RyaW5nIHwgTGlicmFyeUl0ZW19IElkIG9mIHBob3RvLCBvciBMaWJyYXJ5SXRlbS5cclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7R2V0VGh1bWJuYWlsT3B0aW9uc30gT3B0aW9ucywgbGlrZSB0aHVtYm5haWwgc2l6ZSBvciBxdWFsaXR5LlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gUmVzb2x2ZXMgdG8gVVJMIG9mIGNkdnBob3RvbGlicmFyeSBzY2hlbWEuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAxLFxyXG4gICAgZXJyb3JJbmRleDogMixcclxuICB9KVxyXG4gIGdldFRodW1ibmFpbFVSTChwaG90bzogc3RyaW5nIHwgTGlicmFyeUl0ZW0sIG9wdGlvbnM/OiBHZXRUaHVtYm5haWxPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3ZpZGVzIG1lYW5zIHRvIHJlcXVlc3QgcGhvdG8gVVJMIGJ5IGlkLlxyXG4gICAqIEBwYXJhbSBwaG90byB7c3RyaW5nIHwgTGlicmFyeUl0ZW19IElkIG9yIExpYnJhcnlJdGVtLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtHZXRQaG90b09wdGlvbnN9IE9wdGlvbmFsIG9wdGlvbnMuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXNvbHZlcyB0byBVUkwgb2YgY2R2cGhvdG9saWJyYXJ5IHNjaGVtYS5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDEsXHJcbiAgICBlcnJvckluZGV4OiAyLFxyXG4gIH0pXHJcbiAgZ2V0UGhvdG9VUkwocGhvdG86IHN0cmluZyB8IExpYnJhcnlJdGVtLCBvcHRpb25zPzogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGh1bWJuYWlsIGFzIEJsb2IuXHJcbiAgICogQHBhcmFtIHBob3RvIHtzdHJpbmcgfCBMaWJyYXJ5SXRlbX0gSWQgb3IgTGlicmFyeUl0ZW0uXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge0dldFRodW1ibmFpbE9wdGlvbnN9IE9wdGlvbnMsIGxpa2UgdGh1bWJuYWlsIHNpemUgb3IgcXVhbGl0eS5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEJsb2I+fSBSZXNvbHZlcyByZXF1ZXN0ZWQgdGh1bWJuYWlsIGFzIGJsb2IuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAxLFxyXG4gICAgZXJyb3JJbmRleDogMixcclxuICB9KVxyXG4gIGdldFRodW1ibmFpbChwaG90bzogc3RyaW5nIHwgTGlicmFyeUl0ZW0sIG9wdGlvbnM/OiBHZXRUaHVtYm5haWxPcHRpb25zKTogUHJvbWlzZTxCbG9iPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHBob3RvIGFzIEJsb2IuXHJcbiAgICogQHBhcmFtIHBob3RvIHtzdHJpbmcgfCBMaWJyYXJ5SXRlbX0gSWQgb3IgTGlicmFyeUl0ZW0uXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge0dldFBob3RvT3B0aW9uc30gT3B0aW9uYWwgb3B0aW9ucy5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEJsb2I+fSBSZXNvbHZlcyByZXF1ZXN0ZWQgcGhvdG8gYXMgYmxvYi5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDEsXHJcbiAgICBlcnJvckluZGV4OiAyLFxyXG4gIH0pXHJcbiAgZ2V0UGhvdG8ocGhvdG86IHN0cmluZyB8IExpYnJhcnlJdGVtLCBvcHRpb25zPzogYW55KTogUHJvbWlzZTxCbG9iPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTYXZlcyBpbWFnZSB0byBzcGVjaWZpZWQgYWxidW0uIEFsYnVtIHdpbGwgYmUgY3JlYXRlZCBpZiBub3QgZXhpc3RzLlxyXG4gICAqIExpYnJhcnlJdGVtIHRoYXQgcmVwcmVzZW50cyBzYXZlZCBpbWFnZSBpcyByZXR1cm5lZC5cclxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFVSTCBvZiBhIGZpbGUsIG9yIERhdGFVUkwuXHJcbiAgICogQHBhcmFtIGFsYnVtIHtBbGJ1bUl0ZW0gfCBzdHJpbmd9IE5hbWUgb2YgYW4gYWxidW0gb3IgQWxidW1JdGVtIG9iamVjdC5cclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7R2V0VGh1bWJuYWlsT3B0aW9uc30gT3B0aW9ucywgbGlrZSB0aHVtYm5haWwgc2l6ZSBmb3IgcmVzdWx0aW5nIExpYnJhcnlJdGVtLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TGlicmFyeUl0ZW0+fSBSZXNvbHZlcyB0byBMaWJyYXJ5SXRlbSB0aGF0IHJlcHJlc2VudHMgc2F2ZWQgaW1hZ2UuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAyLFxyXG4gICAgZXJyb3JJbmRleDogMyxcclxuICB9KVxyXG4gIHNhdmVJbWFnZSh1cmw6IHN0cmluZywgYWxidW06IEFsYnVtSXRlbSB8IHN0cmluZywgb3B0aW9ucz86IEdldFRodW1ibmFpbE9wdGlvbnMpOiBQcm9taXNlPExpYnJhcnlJdGVtPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTYXZlcyB2aWRlbyB0byBzcGVjaWZpZWQgYWxidW0uIEFsYnVtIHdpbGwgYmUgY3JlYXRlZCBpZiBub3QgZXhpc3RzLlxyXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVVJMIG9mIGEgZmlsZSwgb3IgRGF0YVVSTC5cclxuICAgKiBAcGFyYW0gYWxidW0ge0FsYnVtSXRlbSB8IHN0cmluZ30gTmFtZSBvZiBhbiBhbGJ1bSBvciBBbGJ1bUl0ZW0gb2JqZWN0LlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59IFJlc29sdmVzIHdoZW4gc2F2ZSBvcGVyYXRpb24gY29tcGxldGVzLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN1Y2Nlc3NJbmRleDogMixcclxuICAgIGVycm9ySW5kZXg6IDMsXHJcbiAgfSlcclxuICBzYXZlVmlkZW8odXJsOiBzdHJpbmcsIGFsYnVtOiBBbGJ1bUl0ZW0gfCBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExpYnJhcnlJdGVtIHtcclxuICAvKipcclxuICAgKiBMb2NhbCBpZCBvZiB0aGUgcGhvdG9cclxuICAgKi9cclxuICBpZDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFVSTCBvZiBjZHZwaG90b2xpYnJhcnkgc2NoZW1hLlxyXG4gICAqL1xyXG4gIHBob3RvVVJMOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVVJMIG9mIGNkdnBob3RvbGlicmFyeSBzY2hlbWEuXHJcbiAgICovXHJcbiAgdGh1bWJuYWlsVVJMOiBzdHJpbmc7XHJcbiAgZmlsZU5hbWU6IHN0cmluZztcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIGNyZWF0aW9uRGF0ZTogRGF0ZTtcclxuICBsYXRpdHVkZT86IG51bWJlcjtcclxuICBsb25naXR1ZGU/OiBudW1iZXI7XHJcbiAgYWxidW1JZHM/OiBzdHJpbmdbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWxidW1JdGVtIHtcclxuICAvKipcclxuICAgKiBMb2NhbCBpZCBvZiB0aGUgYWxidW1cclxuICAgKi9cclxuICBpZDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEdldExpYnJhcnlPcHRpb25zIHtcclxuICB0aHVtYm5haWxXaWR0aD86IG51bWJlcjtcclxuICB0aHVtYm5haWxIZWlnaHQ/OiBudW1iZXI7XHJcbiAgcXVhbGl0eT86IG51bWJlcjtcclxuICBpdGVtc0luQ2h1bms/OiBudW1iZXI7XHJcbiAgY2h1bmtUaW1lU2VjPzogbnVtYmVyO1xyXG4gIHVzZU9yaWdpbmFsRmlsZU5hbWVzPzogYm9vbGVhbjtcclxuICBpbmNsdWRlQWxidW1EYXRhPzogYm9vbGVhbjtcclxuICBpbmNsdWRlVmlkZW9zPzogYm9vbGVhbjtcclxuICBtYXhJdGVtcz86IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEF1dGhvcml6YXRpb25PcHRpb25zIHtcclxuICByZWFkPzogYm9vbGVhbjtcclxuICB3cml0ZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEdldFRodW1ibmFpbE9wdGlvbnMge1xyXG4gIHRodW1ibmFpbFdpZHRoPzogbnVtYmVyO1xyXG4gIHRodW1ibmFpbEhlaWdodD86IG51bWJlcjtcclxuICBxdWFsaXR5PzogbnVtYmVyO1xyXG59XHJcbiJdfQ==