import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Keychain = /** @class */ (function (_super) {
    __extends(Keychain, _super);
    function Keychain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keychain.prototype.get = function (key, touchIDMessage) { return cordova(this, "get", { "callbackOrder": "reverse" }, arguments); };
    Keychain.prototype.set = function (key, value, useTouchID) { return cordova(this, "set", { "callbackOrder": "reverse" }, arguments); };
    Keychain.prototype.getJson = function (key, touchIDMessage) { return cordova(this, "getJson", { "callbackOrder": "reverse" }, arguments); };
    Keychain.prototype.setJson = function (key, obj, useTouchId) { return cordova(this, "setJson", { "callbackOrder": "reverse" }, arguments); };
    Keychain.prototype.remove = function (key) { return cordova(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    Keychain.pluginName = "Keychain";
    Keychain.plugin = "cordova-plugin-ios-keychain";
    Keychain.pluginRef = "window.Keychain";
    Keychain.repo = "https://github.com/ionic-team/cordova-plugin-ios-keychain";
    Keychain.platforms = ["iOS"];
    Keychain = __decorate([
        Injectable()
    ], Keychain);
    return Keychain;
}(IonicNativePlugin));
export { Keychain };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2tleWNoYWluL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW1DMUMsNEJBQWlCOzs7O0lBVTdDLHNCQUFHLGFBQUMsR0FBVyxFQUFFLGNBQXVCO0lBY3hDLHNCQUFHLGFBQUMsR0FBVyxFQUFFLEtBQWdDLEVBQUUsVUFBb0I7SUFhdkUsMEJBQU8sYUFBQyxHQUFXLEVBQUUsY0FBdUI7SUFjNUMsMEJBQU8sYUFBQyxHQUFXLEVBQUUsR0FBUSxFQUFFLFVBQW9CO0lBWW5ELHlCQUFNLGFBQUMsR0FBVzs7Ozs7O0lBL0RQLFFBQVE7UUFEcEIsVUFBVSxFQUFFO09BQ0EsUUFBUTttQkFwQ3JCO0VBb0M4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgS2V5Y2hhaW5cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEdldCBhbmQgc2V0IGRhdGEgaW4gdGhlIGlPUyBLZXljaGFpblxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWlvcy1rZXljaGFpbmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtLZXljaGFpbiBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9zLWtleWNoYWluKS5cclxuICpcclxuICogU2VlIGFsc28gW1NlY3VyZSBTdG9yYWdlXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL25hdGl2ZS9zZWN1cmUtc3RvcmFnZS8pIGZvciBtb3JlIHN1cHBvcnRlZCBwbGF0Zm9ybXMuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEtleWNoYWluIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9rZXljaGFpbi9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGtleWNoYWluOiBLZXljaGFpbikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmtleWNoYWluLnNldChrZXksIHZhbHVlKS50aGVuKCgpID0+IHtcclxuICogICB0aGlzLmtleWNoYWluLmdldChrZXkpXHJcbiAqICAgICAudGhlbih2YWx1ZSA9PiBjb25zb2xlLmxvZygnR290IHZhbHVlJywgdmFsdWUpKVxyXG4gKiAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nJywgZXJyKSk7XHJcbiAqIH0pXHJcbiAqIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3Igc2V0dGluZycsIGVycikpO1xyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdLZXljaGFpbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW9zLWtleWNoYWluJyxcclxuICBwbHVnaW5SZWY6ICd3aW5kb3cuS2V5Y2hhaW4nLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9jb3Jkb3ZhLXBsdWdpbi1pb3Mta2V5Y2hhaW4nLFxyXG4gIHBsYXRmb3JtczogWydpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgS2V5Y2hhaW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmVzIGEgdmFsdWUgZm9yIGEga2V5XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBrZXkgdG8gcmV0cmlldmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RvdWNoSURNZXNzYWdlXSB0aGUgbWVzc2FnZSB0byBzaG93IHVuZGVybmVhdGggdGhlIFRvdWNoSUQgcHJvbXB0IChpZiBhbnkpXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgZ2V0KGtleTogc3RyaW5nLCB0b3VjaElETWVzc2FnZT86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGEgdmFsdWUgZm9yIGEga2V5XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBrZXkgdG8gc2V0XHJcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfGJvb2xlYW59IHZhbHVlIHRoZSB2YWx1ZSB0byBzZXRcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt1c2VUb3VjaElEXSB3aGV0aGVyIHRvIHN0b3JlIHRoZSB2YWx1ZSB3aXRoIHNlY3VyaXR5IHN1Y2ggdGhhdCBUb3VjaElEIHdpbGwgYmUgbmVlZGVkIHRvIGdyYWIgaXRcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuLCB1c2VUb3VjaElEPzogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIGEgSlNPTiB2YWx1ZSBmb3IgYSBrZXlcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdGhlIGtleSB0byByZXRyaWV2ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b3VjaElETWVzc2FnZSB0aGUgbWVzc2FnZSB0byBzaG93IHVuZGVybmVhdGggdGhlIFRvdWNoSUQgcHJvbXB0IChpZiBhbnkpXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgZ2V0SnNvbihrZXk6IHN0cmluZywgdG91Y2hJRE1lc3NhZ2U/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIEpTT04gdmFsdWUgZm9yIGEga2V5XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBrZXkgdG8gc2V0XHJcbiAgICogQHBhcmFtIHthbnl9IG9iaiB2YWx1ZSB0aGUgdmFsdWUgdG8gc2V0XHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbdXNlVG91Y2hJZF0gV2V0aGVyIHRvIHN0b3JlIHRoZSB2YWx1ZSB3aXRoIHNlY3VyaXR5IHN1Y2ggdGhhdCBUb3VjaElEIHdpbGwgYmUgbmVlZGVkIHRvIGdyYWIgaXRcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBzZXRKc29uKGtleTogc3RyaW5nLCBvYmo6IGFueSwgdXNlVG91Y2hJZD86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhIHZhbHVlIGZvciBhIGtleVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUga2V5IHRvIHJlbW92ZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcclxuICB9KVxyXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==