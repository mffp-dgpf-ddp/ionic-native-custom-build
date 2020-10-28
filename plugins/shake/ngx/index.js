import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var Shake = /** @class */ (function (_super) {
    __extends(Shake, _super);
    function Shake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shake.prototype.startWatch = function (sensitivity) { return cordova(this, "startWatch", { "observable": true, "clearFunction": "stopWatch", "successIndex": 0, "errorIndex": 2 }, arguments); };
    Shake.pluginName = "Shake";
    Shake.plugin = "cordova-plugin-shake";
    Shake.pluginRef = "shake";
    Shake.repo = "https://github.com/leecrossley/cordova-plugin-shake";
    Shake.platforms = ["iOS"];
    Shake = __decorate([
        Injectable()
    ], Shake);
    return Shake;
}(IonicNativePlugin));
export { Shake };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NoYWtlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBMkJQLHlCQUFpQjs7OztJQVkxQywwQkFBVSxhQUFDLFdBQW9COzs7Ozs7SUFacEIsS0FBSztRQURqQixVQUFVLEVBQUU7T0FDQSxLQUFLO2dCQTdCbEI7RUE2QjJCLGlCQUFpQjtTQUEvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG4vKipcclxuICogQG5hbWUgU2hha2VcclxuICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgc2hha2UgZ2VzdHVyZVxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBTaGFrZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc2hha2Uvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzaGFrZTogU2hha2UpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogY29uc3Qgd2F0Y2ggPSB0aGlzLnNoYWtlLnN0YXJ0V2F0Y2goNjApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAqICAgLy8gZG8gc29tZXRoaW5nXHJcbiAqICAgfSk7XHJcbiAqXHJcbiAqIHdhdGNoLnVuc3Vic2NyaWJlKCk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1NoYWtlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zaGFrZScsXHJcbiAgcGx1Z2luUmVmOiAnc2hha2UnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbGVlY3Jvc3NsZXkvY29yZG92YS1wbHVnaW4tc2hha2UnLFxyXG4gIHBsYXRmb3JtczogWydpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2hha2UgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogV2F0Y2ggZm9yIHNoYWtlIGdlc3R1cmVcclxuICAgKiBAcGFyYW0gc2Vuc2l0aXZpdHkge251bWJlcn0gT3B0aW9uYWwgc2Vuc2l0aXZpdHkgcGFyYW1ldGVyLiBEZWZhdWx0cyB0byA0MFxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wV2F0Y2gnLFxyXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxyXG4gICAgZXJyb3JJbmRleDogMixcclxuICB9KVxyXG4gIHN0YXJ0V2F0Y2goc2Vuc2l0aXZpdHk/OiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=