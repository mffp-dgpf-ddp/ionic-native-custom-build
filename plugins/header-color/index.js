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
var HeaderColorOriginal = /** @class */ (function (_super) {
    __extends(HeaderColorOriginal, _super);
    function HeaderColorOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderColorOriginal.prototype.tint = function (color) { return cordova(this, "tint", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    HeaderColorOriginal.pluginName = "HeaderColor";
    HeaderColorOriginal.plugin = "cordova-plugin-headercolor";
    HeaderColorOriginal.pluginRef = "plugins.headerColor";
    HeaderColorOriginal.repo = "https://github.com/tomloprod/cordova-plugin-headercolor";
    HeaderColorOriginal.platforms = ["Android"];
    return HeaderColorOriginal;
}(IonicNativePlugin));
var HeaderColor = new HeaderColorOriginal();
export { HeaderColor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2hlYWRlci1jb2xvci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUEwQnZDLCtCQUFpQjs7OztJQVdoRCwwQkFBSSxhQUFDLEtBQWE7Ozs7OztzQkF0Q3BCO0VBMkJpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgSGVhZGVyIENvbG9yXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIHBsdWdpbiB0byBjaGFuZ2UgY29sb3Igb2YgaGVhZGVyIGluIEFuZHJvaWQgTXVsdGl0YXNrIFZpZXdcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgSGVhZGVyQ29sb3IgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2hlYWRlci1jb2xvci9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGhlYWRlckNvbG9yOiBIZWFkZXJDb2xvcikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmhlYWRlckNvbG9yLnRpbnQoJyNiZWNiMjknKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSGVhZGVyQ29sb3InLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhlYWRlcmNvbG9yJyxcclxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmhlYWRlckNvbG9yJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RvbWxvcHJvZC9jb3Jkb3ZhLXBsdWdpbi1oZWFkZXJjb2xvcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29sb3IgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogU2V0IGEgY29sb3IgdG8gdGhlIHRhc2sgaGVhZGVyXHJcbiAgICogQHBhcmFtIGNvbG9yIHtzdHJpbmd9IFRoZSBoZXggdmFsdWUgb2YgdGhlIGNvbG9yXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcclxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXHJcbiAgICBlcnJvck5hbWU6ICdmYWlsdXJlJyxcclxuICB9KVxyXG4gIHRpbnQoY29sb3I6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==