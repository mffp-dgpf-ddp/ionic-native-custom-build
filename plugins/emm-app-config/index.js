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
var EmmAppConfigOriginal = /** @class */ (function (_super) {
    __extends(EmmAppConfigOriginal, _super);
    function EmmAppConfigOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmmAppConfigOriginal.prototype.getValue = function (configKey) { return cordova(this, "getValue", { "sync": true }, arguments); };
    EmmAppConfigOriginal.prototype.registerChangedListener = function () { return cordova(this, "registerChangedListener", { "observable": true }, arguments); };
    EmmAppConfigOriginal.platforms = ["Android", "iOS"];
    EmmAppConfigOriginal.plugin = "cordova-plugin-emm-app-config";
    EmmAppConfigOriginal.pluginName = "EmmAppConfig";
    EmmAppConfigOriginal.pluginRef = "cordova.plugins.EmmAppConfig";
    EmmAppConfigOriginal.repo = "https://github.com/oracle/cordova-plugin-emm-app-config";
    return EmmAppConfigOriginal;
}(IonicNativePlugin));
var EmmAppConfig = new EmmAppConfigOriginal();
export { EmmAppConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2VtbS1hcHAtY29uZmlnL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBdUNBLGdDQUFpQjs7OztJQU14QiwrQkFBUSxhQUFDLFNBQWtCO0lBUXJCLDhDQUF1Qjs7Ozs7O3VCQXZEeEQ7RUF5Q2tDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEVtbSBBcHAgQ29uZmlnXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBwcm92aWRlcyBpbmZvcm1hdGlvbiBvbiBFTU0gYXBwbGljYXRpb24gY29uZmlndXJhdGlvblxyXG4gKlxyXG4gKiBSZXF1aXJlcyB0aGUgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1lbW0tYXBwLWNvbmZpZ2AuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtDb3Jkb3ZhIEVNTSBBcHAgQ29uZmlnIFBsdWdpbiBEb2NzXShodHRwczovL2dpdGh1Yi5jb20vb3JhY2xlL2NvcmRvdmEtcGx1Z2luLWVtbS1hcHAtY29uZmlnKS5cclxuICpcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRW1tQXBwQ29uZmlnIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9lbW0tYXBwLWNvbmZpZy9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVtbUFwcENvbmZpZzogRW1tQXBwQ29uZmlnKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIC8vIEdldCBhbGwgdGhlIHZhbHVlcyBvZiB0aGUgZW1tIGFwcCBjb25maWd1cmF0aW9uXHJcbiAqIGNvbnN0IHZhbHVlcyA9IHRoaXMuZW1tQXBwQ29uZmlnLmdldFZhbHVlKCk7XHJcbiAqXHJcbiAqIC8vIEdldCBzcGVjaWZpYyB2YWx1ZSBvZiB0aGUgZW1tIGFwcCBjb25maWd1cmF0aW9uXHJcbiAqIGNvbnN0IHZhbHVlID0gdGhpcy5lbW1BcHBDb25maWcuZ2V0VmFsdWUoJ3NlcnZlclVybCcpO1xyXG4gKlxyXG4gKiAvLyBHZXQgYW4gZXZlbnQgZXZlcnkgdGltZSB0aGUgZW1tIGFwcCBjb25maWcgY2hhbmdlc1xyXG4gKiB0aGlzLmVtbUFwcENvbmZpZy5yZWdpc3RlckNoYW5nZWRMaXN0ZW5lcigpXHJcbiAqICAgLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZygnQXBwIGNvbmZpZyBjaGFuZ2VzJykpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWVtbS1hcHAtY29uZmlnJyxcclxuICBwbHVnaW5OYW1lOiAnRW1tQXBwQ29uZmlnJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuRW1tQXBwQ29uZmlnJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL29yYWNsZS9jb3Jkb3ZhLXBsdWdpbi1lbW0tYXBwLWNvbmZpZycsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVtbUFwcENvbmZpZyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBHZXQgdmFsdWUgZnJvbSB0aGUgRW1tIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24uXHJcbiAgICogQHBhcmFtIGNvbmZpZ0tleSB7c3RyaW5nfSAgS2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQsIG9yIG51bGwgdG8gZ2V0IGFsbCB0aGUgdmFsdWVzIGFzIGFuIG9iamVjdC5cclxuICAgKiBAcmV0dXJuIHthbnl9IFJldHVybnMgY29uZmlndXJhdGlvbiBvbiBhbiBvYmplY3RcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSkgZ2V0VmFsdWUoY29uZmlnS2V5Pzogc3RyaW5nKTogYW55IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIGEgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbiBpcyBjaGFuZ2VkLlxyXG4gICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pIHJlZ2lzdGVyQ2hhbmdlZExpc3RlbmVyKCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=