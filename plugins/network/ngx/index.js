import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova, checkAvailability, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import { Observable, merge } from 'rxjs';
export var Connection;
(function (Connection) {
    Connection[Connection["UNKNOWN"] = 0] = "UNKNOWN";
    Connection[Connection["ETHERNET"] = 1] = "ETHERNET";
    Connection[Connection["WIFI"] = 2] = "WIFI";
    Connection[Connection["CELL_2G"] = 3] = "CELL_2G";
    Connection[Connection["CELL_3G"] = 4] = "CELL_3G";
    Connection[Connection["CELL_4G"] = 5] = "CELL_4G";
    Connection[Connection["CELL"] = 6] = "CELL";
    Connection[Connection["NONE"] = 7] = "NONE";
})(Connection || (Connection = {}));
var Network = /** @class */ (function (_super) {
    __extends(Network, _super);
    function Network() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constants for possible connection types
         */
        _this.Connection = {
            UNKNOWN: 'unknown',
            ETHERNET: 'ethernet',
            WIFI: 'wifi',
            CELL_2G: '2g',
            CELL_3G: '3g',
            CELL_4G: '4g',
            CELL: 'cellular',
            NONE: 'none',
        };
        return _this;
    }
    Network.prototype.onChange = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return merge(_this.onConnect(), _this.onDisconnect());
            }
        })();
    };
    Network.prototype.onDisconnect = function () { return cordova(this, "onDisconnect", { "eventObservable": true, "event": "offline", "element": "document" }, arguments); };
    Network.prototype.onConnect = function () { return cordova(this, "onConnect", { "eventObservable": true, "event": "online", "element": "document" }, arguments); };
    Object.defineProperty(Network.prototype, "type", {
        get: function () { return cordovaPropertyGet(this, "type"); },
        set: function (value) { cordovaPropertySet(this, "type", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "downlinkMax", {
        get: function () { return cordovaPropertyGet(this, "downlinkMax"); },
        set: function (value) { cordovaPropertySet(this, "downlinkMax", value); },
        enumerable: true,
        configurable: true
    });
    Network.pluginName = "Network";
    Network.plugin = "cordova-plugin-network-information";
    Network.pluginRef = "navigator.connection";
    Network.repo = "https://github.com/apache/cordova-plugin-network-information";
    Network.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    Network = __decorate([
        Injectable()
    ], Network);
    return Network;
}(IonicNativePlugin));
export { Network };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25ldHdvcmsvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8seUZBQXFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJekMsTUFBTSxDQUFOLElBQVksVUFTWDtBQVRELFdBQVksVUFBVTtJQUNwQixpREFBVyxDQUFBO0lBQ1gsbURBQVEsQ0FBQTtJQUNSLDJDQUFJLENBQUE7SUFDSixpREFBTyxDQUFBO0lBQ1AsaURBQU8sQ0FBQTtJQUNQLGlEQUFPLENBQUE7SUFDUCwyQ0FBSSxDQUFBO0lBQ0osMkNBQUksQ0FBQTtBQUNOLENBQUMsRUFUVyxVQUFVLEtBQVYsVUFBVSxRQVNyQjs7SUFxRDRCLDJCQUFpQjs7O1FBQzVDOztXQUVHO1FBQ0gsZ0JBQVUsR0FBRztZQUNYLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLFVBQVU7WUFDaEIsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDOzs7SUFtQkYsMEJBQVE7OzttREFBb0I7Z0JBQzFCLE9BQU8sS0FBSyxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQzthQUNyRDs7O0lBV0QsOEJBQVk7SUFhWiwyQkFBUzswQkF2Q1UseUJBQUk7Ozs7OzswQkFNSixnQ0FBVzs7Ozs7Ozs7Ozs7SUF6Qm5CLE9BQU87UUFEbkIsVUFBVSxFQUFFO09BQ0EsT0FBTztrQkFwRXBCO0VBb0U2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YUNoZWNrLCBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBuYXZpZ2F0b3I6IGFueTtcclxuXHJcbmV4cG9ydCBlbnVtIENvbm5lY3Rpb24ge1xyXG4gIFVOS05PV04gPSAwLFxyXG4gIEVUSEVSTkVULFxyXG4gIFdJRkksXHJcbiAgQ0VMTF8yRyxcclxuICBDRUxMXzNHLFxyXG4gIENFTExfNEcsXHJcbiAgQ0VMTCxcclxuICBOT05FLFxyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgTmV0d29ya1xyXG4gKiBAcHJlbWllciBuZXR3b3JrLWluZm9ybWF0aW9uXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbi4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW05ldHdvcmsgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbikuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdGlvblxyXG4gKiBsZXQgZGlzY29ubmVjdFN1YnNjcmlwdGlvbiA9IHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gKiAgIGNvbnNvbGUubG9nKCduZXR3b3JrIHdhcyBkaXNjb25uZWN0ZWQgOi0oJyk7XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiAvLyBzdG9wIGRpc2Nvbm5lY3Qgd2F0Y2hcclxuICogZGlzY29ubmVjdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gKlxyXG4gKlxyXG4gKiAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cclxuICogbGV0IGNvbm5lY3RTdWJzY3JpcHRpb24gPSB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICogICBjb25zb2xlLmxvZygnbmV0d29yayBjb25uZWN0ZWQhJyk7XHJcbiAqICAgLy8gV2UganVzdCBnb3QgYSBjb25uZWN0aW9uIGJ1dCB3ZSBuZWVkIHRvIHdhaXQgYnJpZWZseVxyXG4gKiAgICAvLyBiZWZvcmUgd2UgZGV0ZXJtaW5lIHRoZSBjb25uZWN0aW9uIHR5cGUuIE1pZ2h0IG5lZWQgdG8gd2FpdC5cclxuICogICAvLyBwcmlvciB0byBkb2luZyBhbnkgYXBpIHJlcXVlc3RzIGFzIHdlbGwuXHJcbiAqICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAqICAgICBpZiAodGhpcy5uZXR3b3JrLnR5cGUgPT09ICd3aWZpJykge1xyXG4gKiAgICAgICBjb25zb2xlLmxvZygnd2UgZ290IGEgd2lmaSBjb25uZWN0aW9uLCB3b29ob28hJyk7XHJcbiAqICAgICB9XHJcbiAqICAgfSwgMzAwMCk7XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiAvLyBzdG9wIGNvbm5lY3Qgd2F0Y2hcclxuICogY29ubmVjdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gKlxyXG4gKiBgYGBcclxuICogQGFkdmFuY2VkXHJcbiAqIFRoZSBgdHlwZWAgcHJvcGVydHkgd2lsbCByZXR1cm4gb25lIG9mIHRoZSBmb2xsb3dpbmcgY29ubmVjdGlvbiB0eXBlczogYHVua25vd25gLCBgZXRoZXJuZXRgLCBgd2lmaWAsIGAyZ2AsIGAzZ2AsIGA0Z2AsIGBjZWxsdWxhcmAsIGBub25lYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ05ldHdvcmsnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5ldHdvcmstaW5mb3JtYXRpb24nLFxyXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5jb25uZWN0aW9uJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1uZXR3b3JrLWluZm9ybWF0aW9uJyxcclxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5ldHdvcmsgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnRzIGZvciBwb3NzaWJsZSBjb25uZWN0aW9uIHR5cGVzXHJcbiAgICovXHJcbiAgQ29ubmVjdGlvbiA9IHtcclxuICAgIFVOS05PV046ICd1bmtub3duJyxcclxuICAgIEVUSEVSTkVUOiAnZXRoZXJuZXQnLFxyXG4gICAgV0lGSTogJ3dpZmknLFxyXG4gICAgQ0VMTF8yRzogJzJnJyxcclxuICAgIENFTExfM0c6ICczZycsXHJcbiAgICBDRUxMXzRHOiAnNGcnLFxyXG4gICAgQ0VMTDogJ2NlbGx1bGFyJyxcclxuICAgIE5PTkU6ICdub25lJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb25uZWN0aW9uIHR5cGVcclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIHR5cGU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRG93bmxpbmsgTWF4IFNwZWVkXHJcbiAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBkb3dubGlua01heDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgdG8gd2F0Y2ggY29ubmVjdGlvbiBjaGFuZ2VzXHJcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIG9uQ2hhbmdlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gbWVyZ2UodGhpcy5vbkNvbm5lY3QoKSwgdGhpcy5vbkRpc2Nvbm5lY3QoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgbm90aWZpZWQgd2hlbiB0aGUgZGV2aWNlIGdvZXMgb2ZmbGluZVxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZS5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXHJcbiAgICBldmVudDogJ29mZmxpbmUnLFxyXG4gICAgZWxlbWVudDogZG9jdW1lbnQsXHJcbiAgfSlcclxuICBvbkRpc2Nvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBub3RpZmllZCB3aGVuIHRoZSBkZXZpY2UgZ29lcyBvbmxpbmVcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgZXZlbnQ6ICdvbmxpbmUnLFxyXG4gICAgZWxlbWVudDogZG9jdW1lbnQsXHJcbiAgfSlcclxuICBvbkNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19