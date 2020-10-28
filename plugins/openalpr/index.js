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
var OpenALPROriginal = /** @class */ (function (_super) {
    __extends(OpenALPROriginal, _super);
    function OpenALPROriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Country = {
            AU: 'au',
            BR: 'br',
            BR2: 'br2',
            EU: 'eu',
            IN: 'in',
            KR2: 'kr2',
            US: 'us',
            VN2: 'vn2',
        };
        return _this;
    }
    OpenALPROriginal.prototype.scan = function (imageData, options) { return cordova(this, "scan", {}, arguments); };
    OpenALPROriginal.pluginName = "OpenALPR";
    OpenALPROriginal.plugin = "cordova-plugin-openalpr";
    OpenALPROriginal.pluginRef = "cordova.plugins.OpenALPR";
    OpenALPROriginal.repo = "https://github.com/iMicknl/cordova-plugin-openalpr";
    OpenALPROriginal.platforms = ["Android", "iOS"];
    return OpenALPROriginal;
}(IonicNativePlugin));
var OpenALPR = new OpenALPROriginal();
export { OpenALPR };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL29wZW5hbHByL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWtEMUMsNEJBQWlCOzs7UUFDN0MsYUFBTyxHQUFHO1lBQ1IsRUFBRSxFQUFFLElBQUk7WUFDUixFQUFFLEVBQUUsSUFBSTtZQUNSLEdBQUcsRUFBRSxLQUFLO1lBQ1YsRUFBRSxFQUFFLElBQUk7WUFDUixFQUFFLEVBQUUsSUFBSTtZQUNSLEdBQUcsRUFBRSxLQUFLO1lBQ1YsRUFBRSxFQUFFLElBQUk7WUFDUixHQUFHLEVBQUUsS0FBSztTQUNYLENBQUM7OztJQVNGLHVCQUFJLGFBQUMsU0FBYyxFQUFFLE9BQXlCOzs7Ozs7bUJBdEVoRDtFQW1EOEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcGVuQUxQUk9wdGlvbnMge1xyXG4gIC8qKiBDb3VudHJ5IHVzZWQgZm9yIHNjYW5uaW5nIHRoZSBsaWNlbnNlIHBsYXRlICovXHJcbiAgY291bnRyeT86IHN0cmluZztcclxuXHJcbiAgLyoqIEFtb3VudCBvZiByZXN1bHRzIHJldHVybmVkICovXHJcbiAgYW1vdW50PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5BTFBSUmVzdWx0IHtcclxuICAvKiogTGljZW5zZVBsYXRlICovXHJcbiAgbnVtYmVyOiBzdHJpbmc7XHJcbiAgLyoqIFByb2JhYmlsaXR5ICovXHJcbiAgY29uZmlkZW5jZTogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgT3BlbkFMUFJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgQ29yZG92YSBwbHVnaW4gYWRkcyBzdXBwb3J0IGZvciB0aGUgT3BlbkFMUFIgKEF1dG9tYXRpYyBMaWNlbnNlIFBsYXRlIFJlY29nbml0aW9uKSBsaWJyYXJ5LCB3aGljaCBwcm92aWRlcyBzdXBwb3J0IGZvciByZXRyaWV2aW5nIHRoZSBsaWNlbnNlIHBsYXRlIGZyb20gYSBwaWN0dXJlLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBPcGVuQUxQUiwgT3BlbkFMUFJPcHRpb25zLCBPcGVuQUxQUlJlc3VsdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvb3BlbmFscHIvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBvcGVuQUxQUjogT3BlbkFMUFIpIHsgfVxyXG4gKlxyXG4gKiBjb25zdCBzY2FuT3B0aW9uczogT3BlbkFMUFJPcHRpb25zID0ge1xyXG4gKiAgICBjb3VudHJ5OiB0aGlzLm9wZW5BTFBSLkNvdW50cnkuRVUsXHJcbiAqICAgIGFtb3VudDogM1xyXG4gKiB9XHJcbiAqXHJcbiAqIC8vIFRvIGdldCBpbWFnZURhdGEsIHlvdSBjYW4gdXNlIHRoZSBAaW9uaWMtbmF0aXZlL2NhbWVyYSBtb2R1bGUgZm9yIGV4YW1wbGUuIEl0IHdvcmtzIHdpdGggRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJIGFuZCBEQVRBX1VSTFxyXG4gKlxyXG4gKiB0aGlzLm9wZW5BTFBSLnNjYW4oaW1hZ2VEYXRhLCBzY2FuT3B0aW9ucylcclxuICogICAudGhlbigocmVzOiBbT3BlbkFMUFJSZXN1bHRdKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ09wZW5BTFBSJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1vcGVuYWxwcicsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLk9wZW5BTFBSJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lNaWNrbmwvY29yZG92YS1wbHVnaW4tb3BlbmFscHInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBPcGVuQUxQUiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBDb3VudHJ5ID0ge1xyXG4gICAgQVU6ICdhdScsXHJcbiAgICBCUjogJ2JyJyxcclxuICAgIEJSMjogJ2JyMicsXHJcbiAgICBFVTogJ2V1JyxcclxuICAgIElOOiAnaW4nLFxyXG4gICAgS1IyOiAna3IyJyxcclxuICAgIFVTOiAndXMnLFxyXG4gICAgVk4yOiAndm4yJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXMgc29tZXRoaW5nXHJcbiAgICogQHBhcmFtIGltYWdlRGF0YSB7YW55fSBCYXNlNjQgZW5jb2Rpbmcgb2YgdGhlIGltYWdlIGRhdGEgb3IgdGhlIGltYWdlIGZpbGUgVVJJXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge09wZW5BTFBST3B0aW9uc30gT3B0aW9ucyB0byBwYXNzIHRvIHRoZSBPcGVuQUxQUiBzY2FubmVyXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2NhbihpbWFnZURhdGE6IGFueSwgb3B0aW9ucz86IE9wZW5BTFBST3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==