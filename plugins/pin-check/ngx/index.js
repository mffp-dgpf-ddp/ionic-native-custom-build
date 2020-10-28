import { __decorate, __extends } from "tslib";
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var PinCheck = /** @class */ (function (_super) {
    __extends(PinCheck, _super);
    function PinCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PinCheck.prototype.isPinSetup = function () { return cordova(this, "isPinSetup", {}, arguments); };
    PinCheck.pluginName = "PinCheck";
    PinCheck.plugin = "cordova-plugin-pincheck";
    PinCheck.pluginRef = "cordova.plugins.PinCheck";
    PinCheck.repo = "https://github.com/shangyilim/cordova-plugin-pincheck";
    PinCheck.platforms = ["Android", "iOS"];
    PinCheck = __decorate([
        Injectable()
    ], PinCheck);
    return PinCheck;
}(IonicNativePlugin));
export { PinCheck };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bpbi1jaGVjay9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFpQ2IsNEJBQWlCOzs7O0lBTTdDLDZCQUFVOzs7Ozs7SUFOQyxRQUFRO1FBRHBCLFVBQVUsRUFBRTtPQUNBLFFBQVE7bUJBbENyQjtFQWtDOEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFBpbiBDaGVja1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gaXMgZm9yIHVzZSB3aXRoIEFwYWNoZSBDb3Jkb3ZhIGFuZCBhbGxvd3MgeW91ciBhcHBsaWNhdGlvbiB0byBjaGVjayB3aGV0aGVyIHBpbi9rZXlndWFyZCBvciBwYXNzY29kZSBpcyBzZXR1cCBvbiBpT1MgYW5kIEFuZHJvaWQgcGhvbmVzLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tcGluY2hlY2suIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtQaW5DaGVjayBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL29oaDJhaGgvQXBwQXZhaWxhYmlsaXR5KS5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgUGluQ2hlY2sgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3Bpbi1jaGVjay9uZ3gnO1xyXG4gKiBpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBpbkNoZWNrOiBQaW5DaGVjaywgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5waW5DaGVjay5pc1BpblNldHVwKClcclxuICogICAudGhlbihcclxuICogICAgIChzdWNjZXNzOiBzdHJpbmcpID0+ICBjb25zb2xlLmxvZyhcInBpbiBpcyBzZXR1cC5cIik7LFxyXG4gKiAgICAgKGVycm9yOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKFwicGluIG5vdCBzZXR1cC5cIik7XHJcbiAqICAgKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnUGluQ2hlY2snLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXBpbmNoZWNrJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuUGluQ2hlY2snLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2hhbmd5aWxpbS9jb3Jkb3ZhLXBsdWdpbi1waW5jaGVjaycsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBpbkNoZWNrIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqICBjaGVjayB3aGV0aGVyIHBpbi9rZXlndWFyZCBvciBwYXNzY29kZSBpcyBzZXR1cFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpc1BpblNldHVwKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=