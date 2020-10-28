import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var FirebaseDynamicLinks = /** @class */ (function (_super) {
    __extends(FirebaseDynamicLinks, _super);
    function FirebaseDynamicLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseDynamicLinks.prototype.onDynamicLink = function () { return cordova(this, "onDynamicLink", { "callbackOrder": "reverse", "observable": true }, arguments); };
    FirebaseDynamicLinks.prototype.createDynamicLink = function (opts) { return cordova(this, "createDynamicLink", { "otherPromise": true }, arguments); };
    FirebaseDynamicLinks.prototype.createShortDynamicLink = function (opts) { return cordova(this, "createShortDynamicLink", { "otherPromise": true }, arguments); };
    FirebaseDynamicLinks.prototype.createUnguessableDynamicLink = function (opts) { return cordova(this, "createUnguessableDynamicLink", { "otherPromise": true }, arguments); };
    FirebaseDynamicLinks.pluginName = "FirebaseDynamicLinks";
    FirebaseDynamicLinks.plugin = " cordova-plugin-firebase-dynamiclinks";
    FirebaseDynamicLinks.pluginRef = "cordova.plugins.firebase.dynamiclinks";
    FirebaseDynamicLinks.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks";
    FirebaseDynamicLinks.install = "ionic cordova plugin add cordova-plugin-firebase-dynamiclinks --save --variable APP_DOMAIN=\"example.com\" --variable APP_PATH=\"/\"";
    FirebaseDynamicLinks.installVariables = ["APP_DOMAIN", "APP_PATH"];
    FirebaseDynamicLinks.platforms = ["Android", "iOS"];
    FirebaseDynamicLinks = __decorate([
        Injectable()
    ], FirebaseDynamicLinks);
    return FirebaseDynamicLinks;
}(IonicNativePlugin));
export { FirebaseDynamicLinks };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlLWR5bmFtaWMtbGlua3Mvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFnR1Esd0NBQWlCOzs7O0lBU3pELDRDQUFhO0lBWWIsZ0RBQWlCLGFBQUMsSUFBa0I7SUFZcEMscURBQXNCLGFBQUMsSUFBa0I7SUFZekMsMkRBQTRCLGFBQUMsSUFBa0I7Ozs7Ozs7O0lBN0NwQyxvQkFBb0I7UUFEaEMsVUFBVSxFQUFFO09BQ0Esb0JBQW9COytCQWxHakM7RUFrRzBDLGlCQUFpQjtTQUE5QyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEeW5hbWljTGluayB7XHJcbiAgbWF0Y2hUeXBlOiAnV2VhaycgfCAnU3Ryb25nJztcclxuICBkZWVwTGluazogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElMaW5rT3B0aW9ucyB7XHJcbiAgZG9tYWluVXJpUHJlZml4Pzogc3RyaW5nO1xyXG4gIGxpbms/OiBzdHJpbmc7XHJcbiAgYW5kcm9pZEluZm8/OiB7XHJcbiAgICBhbmRyb2lkUGFja2FnZU5hbWU/OiBzdHJpbmc7XHJcbiAgICBhbmRyb2lkRmFsbGJhY2tMaW5rPzogc3RyaW5nO1xyXG4gICAgYW5kcm9pZE1pblBhY2thZ2VWZXJzaW9uQ29kZT86IG51bWJlcjtcclxuICB9O1xyXG4gIGlvc0luZm8/OiB7XHJcbiAgICBpb3NCdW5kbGVJZD86IHN0cmluZztcclxuICAgIGlvc0ZhbGxiYWNrTGluaz86IHN0cmluZztcclxuICAgIGlvc0lwYWRGYWxsYmFja0xpbms/OiBzdHJpbmc7XHJcbiAgICBpb3NJcGFkQnVuZGxlSWQ/OiBzdHJpbmc7XHJcbiAgICBpb3NBcHBTdG9yZUlkPzogc3RyaW5nO1xyXG4gIH07XHJcbiAgbmF2aWdhdGlvbkluZm8/OiB7XHJcbiAgICBlbmFibGVGb3JjZWRSZWRpcmVjdD86IGJvb2xlYW47XHJcbiAgfTtcclxuICBhbmFseXRpY3NJbmZvPzoge1xyXG4gICAgZ29vZ2xlUGxheUFuYWx5dGljcz86IHtcclxuICAgICAgdXRtU291cmNlPzogc3RyaW5nO1xyXG4gICAgICB1dG1NZWRpdW0/OiBzdHJpbmc7XHJcbiAgICAgIHV0bUNhbXBhaWduPzogc3RyaW5nO1xyXG4gICAgICB1dG1UZXJtPzogc3RyaW5nO1xyXG4gICAgICB1dG1Db250ZW50Pzogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIGl0dW5lc0Nvbm5lY3RBbmFseXRpY3M/OiB7XHJcbiAgICAgIGF0Pzogc3RyaW5nO1xyXG4gICAgICBjdD86IHN0cmluZztcclxuICAgICAgcHQ/OiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgc29jaWFsTWV0YVRhZ0luZm8/OiB7XHJcbiAgICBzb2NpYWxUaXRsZT86IHN0cmluZztcclxuICAgIHNvY2lhbERlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gICAgc29jaWFsSW1hZ2VMaW5rPzogc3RyaW5nO1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAYmV0YVxyXG4gKiBAbmFtZSBGaXJlYmFzZSBEeW5hbWljIExpbmtzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIHBsdWdpbiBmb3IgRmlyZWJhc2UgRHluYW1pYyBMaW5rc1xyXG4gKlxyXG4gKiBWYXJpYWJsZXMgQVBQX0RPTUFJTiBhbmQgQVBQX1BBVEggc3BlY2lmeSB3ZWIgVVJMIHdoZXJlIHlvdXIgYXBwIHdpbGwgc3RhcnQgYW4gYWN0aXZpdHkgdG8gaGFuZGxlIHRoZSBsaW5rLiBUaGV5IGFsc28gdXNlZCB0byBzZXR1cCBzdXBwb3J0IGZvciBBcHAgSW5kZXhpbmcuXHJcbiAqIEdvIHRvIGZpcmViYXNlIGNvbnNvbGUgYW5kIGV4cG9ydCBnb29nbGUtc2VydmljZXMuanNvbiBhbmQgR29vZ2xlU2VydmljZS1JbmZvLnBsaXN0LiBQdXQgdGhvc2UgZmlsZXMgaW50byB0aGUgcm9vdCBvZiB5b3VyIGNvcmRvdmEgYXBwIGZvbGRlci5cclxuICpcclxuICogUHJlZmVyZW5jZXM6XHJcbiAqXHJcbiAqIFByZWZlcmVuY2VzIEdvb2dsZUlPU0NsaWVudElkIGFuZCBHb29nbGVBbmRyb2lkQ2xpZW50SWQgYXJlIHVzZWQgdG8gc2V0dXAgZHluYW1pYyBsaW5rcyB3aGVuIHlvdSBoYXZlIGFuIGFwcCBmb3Igc2V2ZXJhbCBwbGF0Zm9ybXMuXHJcbiAqIFlvdSBjYW4gZmluZCB2YWx1ZXMgYXQgeW91ciBHb29nbGVTZXJ2aWNlLUluZm8ucGxpc3QgKGtleSBBTkRST0lEX0NMSUVOVF9JRCkgYW5kIGdvb2dsZS1zZXJ2aWNlcy5qc29uIChrZXkgY2xpZW50WzBdLm9hdXRoX2NsaWVudFswXS5jbGllbnRfaWQpLlxyXG4gKlxyXG4gKiBjb25maWcueG1sOlxyXG4gKiBgYGB4bWxcclxuICogPHBsYXRmb3JtIG5hbWU9XCJpb3NcIj5cclxuICogICAgIDxwcmVmZXJlbmNlIG5hbWU9XCJHb29nbGVJT1NDbGllbnRJZFwiIHZhbHVlPVwiLi4uXCIgLz5cclxuICogPC9wbGF0Zm9ybT5cclxuICogPHBsYXRmb3JtIG5hbWU9XCJhbmRyb2lkXCI+XHJcbiAqICAgICA8cHJlZmVyZW5jZSBuYW1lPVwiR29vZ2xlQW5kcm9pZENsaWVudElkXCIgdmFsdWU9XCIuLi5cIiAvPlxyXG4gKiA8L3BsYXRmb3JtPlxyXG4gKiBgYGBcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRmlyZWJhc2VEeW5hbWljTGlua3MgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZpcmViYXNlLWR5bmFtaWMtbGlua3Mvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZUR5bmFtaWNMaW5rczogRmlyZWJhc2VEeW5hbWljTGlua3MpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICogLy8gSGFuZGxlIHRoZSBsb2dpYyBoZXJlIGFmdGVyIG9wZW5pbmcgdGhlIGFwcCB3aXRoIHRoZSBEeW5hbWljIGxpbmtcclxuICogdGhpcy5maXJlYmFzZUR5bmFtaWNMaW5rcy5vbkR5bmFtaWNMaW5rKClcclxuICogICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSwgKGVycm9yOmFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIER5bmFtaWNMaW5rc09wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdGaXJlYmFzZUR5bmFtaWNMaW5rcycsXHJcbiAgcGx1Z2luOiAnIGNvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWR5bmFtaWNsaW5rcycsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmZpcmViYXNlLmR5bmFtaWNsaW5rcycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaGVtZXJpc3VrL2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWR5bmFtaWNsaW5rcycsXHJcbiAgaW5zdGFsbDpcclxuICAgICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtZHluYW1pY2xpbmtzIC0tc2F2ZSAtLXZhcmlhYmxlIEFQUF9ET01BSU49XCJleGFtcGxlLmNvbVwiIC0tdmFyaWFibGUgQVBQX1BBVEg9XCIvXCInLFxyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQVBQX0RPTUFJTicsICdBUFBfUEFUSCddLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZUR5bmFtaWNMaW5rcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBSZWdpc3RlcnMgY2FsbGJhY2sgdGhhdCBpcyB0cmlnZ2VyZWQgb24gZWFjaCBkeW5hbWljIGxpbmsgY2xpY2suXHJcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxJRHluYW1pY0xpbms+fSBSZXR1cm5zIGFuIG9ic2VydmFibGVcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgb25EeW5hbWljTGluaygpOiBPYnNlcnZhYmxlPElEeW5hbWljTGluaz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIER5bmFtaWMgTGluayBmcm9tIHRoZSBwYXJhbWV0ZXJzLiBSZXR1cm5zIGEgcHJvbWlzZSBmdWxmaWxsZWQgd2l0aCB0aGUgbmV3IGR5bmFtaWMgbGluayB1cmwuXHJcbiAgICogQHBhcmFtIHtJTGlua09wdGlvbnN9IG9wdCBbRHluYW1pYyBMaW5rIFBhcmFtZXRlcnNdKGh0dHBzOi8vZ2l0aHViLmNvbS9jaGVtZXJpc3VrL2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWR5bmFtaWNsaW5rcyNkeW5hbWljLWxpbmstcGFyYW1ldGVycylcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHVybFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG90aGVyUHJvbWlzZTogdHJ1ZSxcclxuICB9KVxyXG4gIGNyZWF0ZUR5bmFtaWNMaW5rKG9wdHM6IElMaW5rT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgc2hvcnRlbmVkIER5bmFtaWMgTGluayBmcm9tIHRoZSBwYXJhbWV0ZXJzLiBTaG9ydGVuIHRoZSBwYXRoIHRvIGEgc3RyaW5nIHRoYXQgaXMgb25seSBhcyBsb25nIGFzIG5lZWRlZCB0byBiZSB1bmlxdWUsIHdpdGggYSBtaW5pbXVtIGxlbmd0aCBvZiA0IGNoYXJhY3RlcnMuIFVzZSB0aGlzIG1ldGhvZCBpZiBzZW5zaXRpdmUgaW5mb3JtYXRpb24gd291bGQgbm90IGJlIGV4cG9zZWQgaWYgYSBzaG9ydCBEeW5hbWljIExpbmsgVVJMIHdlcmUgZ3Vlc3NlZC5cclxuICAgKiBAcGFyYW0ge0lMaW5rT3B0aW9uc30gb3B0IFtEeW5hbWljIExpbmsgUGFyYW1ldGVyc10oaHR0cHM6Ly9naXRodWIuY29tL2NoZW1lcmlzdWsvY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtZHluYW1pY2xpbmtzI2R5bmFtaWMtbGluay1wYXJhbWV0ZXJzKVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgdXJsXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb3RoZXJQcm9taXNlOiB0cnVlLFxyXG4gIH0pXHJcbiAgY3JlYXRlU2hvcnREeW5hbWljTGluayhvcHRzOiBJTGlua09wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIER5bmFtaWMgTGluayBmcm9tIHRoZSBwYXJhbWV0ZXJzLiBTaG9ydGVuIHRoZSBwYXRoIHRvIGFuIHVuZ3Vlc3NhYmxlIHN0cmluZy4gU3VjaCBzdHJpbmdzIGFyZSBjcmVhdGVkIGJ5IGJhc2U2Mi1lbmNvZGluZyByYW5kb21seSBnZW5lcmF0ZWQgOTYtYml0IG51bWJlcnMsIGFuZCBjb25zaXN0IG9mIDE3IGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLiBVc2UgdW5ndWVzc2FibGUgc3RyaW5ncyB0byBwcmV2ZW50IHlvdXIgRHluYW1pYyBMaW5rcyBmcm9tIGJlaW5nIGNyYXdsZWQsIHdoaWNoIGNhbiBwb3RlbnRpYWxseSBleHBvc2Ugc2Vuc2l0aXZlIGluZm9ybWF0aW9uLlxyXG4gICAqIEBwYXJhbSB7SUxpbmtPcHRpb25zfSBvcHQgW0R5bmFtaWMgTGluayBQYXJhbWV0ZXJzXShodHRwczovL2dpdGh1Yi5jb20vY2hlbWVyaXN1ay9jb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1keW5hbWljbGlua3MjZHluYW1pYy1saW5rLXBhcmFtZXRlcnMpXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSB1cmxcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvdGhlclByb21pc2U6IHRydWUsXHJcbiAgfSlcclxuICBjcmVhdGVVbmd1ZXNzYWJsZUR5bmFtaWNMaW5rKG9wdHM6IElMaW5rT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==