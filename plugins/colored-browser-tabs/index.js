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
var ColoredBrowserTabsOriginal = /** @class */ (function (_super) {
    __extends(ColoredBrowserTabsOriginal, _super);
    function ColoredBrowserTabsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColoredBrowserTabsOriginal.prototype.openTab = function (url, color) { return cordova(this, "openTab", { "observable": true, "successIndex": 2, "errorIndex": 3 }, arguments); };
    ColoredBrowserTabsOriginal.prototype.openTabWithAnimation = function (url, anim, color) { return cordova(this, "openTabWithAnimation", { "observable": true, "successIndex": 3, "errorIndex": 4 }, arguments); };
    ColoredBrowserTabsOriginal.pluginName = "ColoredBrowserTabs";
    ColoredBrowserTabsOriginal.plugin = "cordova-plugin-colored-browser-tabs";
    ColoredBrowserTabsOriginal.pluginRef = "ColoredBrowserTabs";
    ColoredBrowserTabsOriginal.repo = "https://github.com/TobyEb/cordova-plugin-colored-browser-tabs";
    ColoredBrowserTabsOriginal.platforms = ["Android", "iOS"];
    return ColoredBrowserTabsOriginal;
}(IonicNativePlugin));
var ColoredBrowserTabs = new ColoredBrowserTabsOriginal();
export { ColoredBrowserTabs };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvbG9yZWQtYnJvd3Nlci10YWJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBaUNNLHNDQUFpQjs7OztJQVF2RCxvQ0FBTyxhQUFDLEdBQVcsRUFBRSxLQUFjO0lBWW5DLGlEQUFvQixhQUFDLEdBQVcsRUFBRSxJQUFZLEVBQUUsS0FBYzs7Ozs7OzZCQXZEaEU7RUFtQ3dDLGlCQUFpQjtTQUE1QyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQG5hbWUgQ29sb3JlZCBCcm93c2VyIFRhYnNcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIG9wZW5zIENocm9tZSBDdXN0b20gVGFicyBvbiBBbmRyb2lkIG9yIFNhZmFyaVZpZXdDb250cm9sbGVyIG9uIGlPU1xyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBDb2xvcmVkQnJvd3NlclRhYnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvbG9yZWQtYnJvd3Nlci10YWJzL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYnJvd3NlclRhYnM6IENvbG9yZWRCcm93c2VyVGFicykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmJyb3dzZXJUYWJzLm9wZW5UYWIoJ3d3dy5leGFtcGxlLnVybCcsICcjZmZmZmZmJylcclxuICogICAuc3Vic2NyaWJlKClcclxuICpcclxuICogdGhpcy5icm93c2VyVGFicy5vcGVuVGFiV2l0aEFuaW1hdGlvbignd3d3LmV4YW1wbGUudXJsJywgJ3NsaWRlX3gnLCAnI2ZmZmZmZicpXHJcbiAqICAgLnN1YnNjcmliZSgpXHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0NvbG9yZWRCcm93c2VyVGFicycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY29sb3JlZC1icm93c2VyLXRhYnMnLFxyXG4gIHBsdWdpblJlZjogJ0NvbG9yZWRCcm93c2VyVGFicycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Ub2J5RWIvY29yZG92YS1wbHVnaW4tY29sb3JlZC1icm93c2VyLXRhYnMnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb2xvcmVkQnJvd3NlclRhYnMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ2FsbCB0aGlzIG1ldGhvZCB0byBvcGVuIHRoZSB0YWJcclxuICAgKiBAcGFyYW0gdXJsIC0gdGhlIHVybCB5b3Ugd2FudCB0byBvcGVuXHJcbiAgICogQHBhcmFtIGNvbG9yIC0gdGhlIGNvbG9yIHdpdGggd2hpY2ggeW91IHdhbnQgdG8gZGVmaW5lIHRoZSB0b29sYmFyIGNvbG9yXHJcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGEgT2JzZXJ2YWJsZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUsIHN1Y2Nlc3NJbmRleDogMiwgZXJyb3JJbmRleDogMyB9KVxyXG4gIG9wZW5UYWIodXJsOiBzdHJpbmcsIGNvbG9yPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQ2FsbCB0aGlzIG1ldGhvZCB0byBvcGVuIHRoZSB0YWJcclxuICAgKiBAcGFyYW0gdXJsIC0gdGhlIHVybCB5b3Ugd2FudCB0byBvcGVuXHJcbiAgICogQHBhcmFtIGFuaW0gLSB0aGUgYW5pbWF0aW9uIHlvdSB3YW50IGZvciBlbnRlciBhbmQgZXhpdCwgeW91IGNhbiBjaG9vc2UgYmV0d2VlbiBzbGlkZV94IC8gc2xpZGVfeSBhbmQgZmFkZVxyXG4gICAqICAgICAgICBvbmx5IHdvcmtzIGluIEFuZHJvaWQsIGlPUyBqdXN0IHNob3dzIHRoZSBkZWZhdWx0IGFuaW1hdGlvblxyXG4gICAqIEBwYXJhbSBjb2xvciAtIHRoZSBjb2xvciB3aXRoIHdoaWNoIHlvdSB3YW50IHRvIGRlZmluZSB0aGUgdG9vbGJhciBjb2xvclxyXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhIE9ic2VydmFibGUgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlLCBzdWNjZXNzSW5kZXg6IDMsIGVycm9ySW5kZXg6IDQgfSlcclxuICBvcGVuVGFiV2l0aEFuaW1hdGlvbih1cmw6IHN0cmluZywgYW5pbTogc3RyaW5nLCBjb2xvcj86IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==