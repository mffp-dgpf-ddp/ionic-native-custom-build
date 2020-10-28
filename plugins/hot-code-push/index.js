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
import { IonicNativePlugin, checkAvailability, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * For description on error codes, please visit https://github.com/nordnet/cordova-hot-code-push/wiki/Error-codes
 */
export var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NOTHING_TO_INSTALL"] = 1] = "NOTHING_TO_INSTALL";
    ErrorCode[ErrorCode["NOTHING_TO_UPDATE"] = 2] = "NOTHING_TO_UPDATE";
    ErrorCode[ErrorCode["FAILED_TO_DOWNLOAD_APPLICATION_CONFIG"] = -1] = "FAILED_TO_DOWNLOAD_APPLICATION_CONFIG";
    ErrorCode[ErrorCode["APPLICATION_BUILD_VERSION_TOO_LOW"] = -2] = "APPLICATION_BUILD_VERSION_TOO_LOW";
    ErrorCode[ErrorCode["FAILED_TO_DOWNLOAD_CONTENT_MANIFEST"] = -3] = "FAILED_TO_DOWNLOAD_CONTENT_MANIFEST";
    ErrorCode[ErrorCode["FAILED_TO_DOWNLOAD_UPDATE_FILES"] = -4] = "FAILED_TO_DOWNLOAD_UPDATE_FILES";
    ErrorCode[ErrorCode["FAILED_TO_MOVE_LOADED_FILES_TO_INSTALLATION_FOLDER"] = -5] = "FAILED_TO_MOVE_LOADED_FILES_TO_INSTALLATION_FOLDER";
    ErrorCode[ErrorCode["UPDATE_IS_INVALID"] = -6] = "UPDATE_IS_INVALID";
    ErrorCode[ErrorCode["FAILED_TO_COPY_FILES_FROM_PREVIOUS_RELEASE"] = -7] = "FAILED_TO_COPY_FILES_FROM_PREVIOUS_RELEASE";
    ErrorCode[ErrorCode["FAILED_TO_COPY_NEW_CONTENT_FILES"] = -8] = "FAILED_TO_COPY_NEW_CONTENT_FILES";
    ErrorCode[ErrorCode["LOCAL_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND"] = -9] = "LOCAL_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND";
    ErrorCode[ErrorCode["LOCAL_VERSION_OF_MANIFEST_NOT_FOUND"] = -10] = "LOCAL_VERSION_OF_MANIFEST_NOT_FOUND";
    ErrorCode[ErrorCode["LOADED_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND"] = -11] = "LOADED_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND";
    ErrorCode[ErrorCode["LOADED_VERSION_OF_MANIFEST_NOT_FOUND"] = -12] = "LOADED_VERSION_OF_MANIFEST_NOT_FOUND";
    ErrorCode[ErrorCode["FAILED_TO_INSTALL_ASSETS_ON_EXTERNAL_STORAGE"] = -13] = "FAILED_TO_INSTALL_ASSETS_ON_EXTERNAL_STORAGE";
    ErrorCode[ErrorCode["CANT_INSTALL_WHILE_DOWNLOAD_IN_PROGRESS"] = -14] = "CANT_INSTALL_WHILE_DOWNLOAD_IN_PROGRESS";
    ErrorCode[ErrorCode["CANT_DOWNLOAD_UPDATE_WHILE_INSTALLATION_IN_PROGRESS"] = -15] = "CANT_DOWNLOAD_UPDATE_WHILE_INSTALLATION_IN_PROGRESS";
    ErrorCode[ErrorCode["INSTALLATION_ALREADY_IN_PROGRESS"] = -16] = "INSTALLATION_ALREADY_IN_PROGRESS";
    ErrorCode[ErrorCode["DOWNLOAD_ALREADY_IN_PROGRESS"] = -17] = "DOWNLOAD_ALREADY_IN_PROGRESS";
    ErrorCode[ErrorCode["ASSETS_FOLDER_IS_NOT_YET_INSTALLED"] = -18] = "ASSETS_FOLDER_IS_NOT_YET_INSTALLED";
    ErrorCode[ErrorCode["NEW_APPLICATION_CONFIG_IS_INVALID"] = -19] = "NEW_APPLICATION_CONFIG_IS_INVALID";
})(ErrorCode || (ErrorCode = {}));
var HotCodePushOriginal = /** @class */ (function (_super) {
    __extends(HotCodePushOriginal, _super);
    function HotCodePushOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HotCodePushOriginal.prototype.requestApplicationUpdate = function (message) { return cordova(this, "requestApplicationUpdate", {}, arguments); };
    HotCodePushOriginal.prototype.fetchUpdate = function (options) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    HotCodePushOriginal.getPlugin().fetchUpdate(function (error, data) {
                        if (error) {
                            reject(error);
                        }
                        else {
                            resolve(data);
                        }
                    }, options);
                });
            }
        })();
    };
    HotCodePushOriginal.prototype.installUpdate = function () { return cordova(this, "installUpdate", { "callbackStyle": "node" }, arguments); };
    HotCodePushOriginal.prototype.isUpdateAvailableForInstallation = function () { return cordova(this, "isUpdateAvailableForInstallation", { "callbackStyle": "node" }, arguments); };
    HotCodePushOriginal.prototype.getVersionInfo = function () { return cordova(this, "getVersionInfo", { "callbackStyle": "node" }, arguments); };
    HotCodePushOriginal.prototype.onUpdateIsReadyToInstall = function () { return cordova(this, "onUpdateIsReadyToInstall", { "eventObservable": true, "event": "chcp_updateIsReadyToInstall" }, arguments); };
    HotCodePushOriginal.prototype.onUpdateLoadFailed = function () { return cordova(this, "onUpdateLoadFailed", { "eventObservable": true, "event": "chcp_updateLoadFailed" }, arguments); };
    HotCodePushOriginal.prototype.onNothingToUpdate = function () { return cordova(this, "onNothingToUpdate", { "eventObservable": true, "event": "chcp_nothingToUpdate" }, arguments); };
    HotCodePushOriginal.prototype.onBeforeInstall = function () { return cordova(this, "onBeforeInstall", { "eventObservable": true, "event": "chcp_beforeInstall" }, arguments); };
    HotCodePushOriginal.prototype.onUpdateInstalled = function () { return cordova(this, "onUpdateInstalled", { "eventObservable": true, "event": "chcp_updateInstalled" }, arguments); };
    HotCodePushOriginal.prototype.onUpdateInstallFailed = function () { return cordova(this, "onUpdateInstallFailed", { "eventObservable": true, "event": "chcp_updateInstallFailed" }, arguments); };
    HotCodePushOriginal.prototype.onNothingToInstall = function () { return cordova(this, "onNothingToInstall", { "eventObservable": true, "event": "chcp_nothingToInstall" }, arguments); };
    HotCodePushOriginal.prototype.onBeforeAssetsInstalledOnExternalStorage = function () { return cordova(this, "onBeforeAssetsInstalledOnExternalStorage", { "eventObservable": true, "event": "chcp_beforeAssetsInstalledOnExternalStorage" }, arguments); };
    HotCodePushOriginal.prototype.onAssetsInstalledOnExternalStorage = function () { return cordova(this, "onAssetsInstalledOnExternalStorage", { "eventObservable": true, "event": "chcp_assetsInstalledOnExternalStorage" }, arguments); };
    HotCodePushOriginal.prototype.onAssetsInstallationError = function () { return cordova(this, "onAssetsInstallationError", { "eventObservable": true, "event": "chcp_assetsInstallationError" }, arguments); };
    HotCodePushOriginal.pluginName = "HotCodePush";
    HotCodePushOriginal.plugin = "cordova-hot-code-push";
    HotCodePushOriginal.pluginRef = "chcp";
    HotCodePushOriginal.repo = "https://github.com/nordnet/cordova-hot-code-push";
    HotCodePushOriginal.platforms = ["Android", "iOS"];
    return HotCodePushOriginal;
}(IonicNativePlugin));
var HotCodePush = new HotCodePushOriginal();
export { HotCodePush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2hvdC1jb2RlLXB1c2gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8saURBQW9ELE1BQU0sb0JBQW9CLENBQUM7QUFDdEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQWlEbEM7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxTQXNCWDtBQXRCRCxXQUFZLFNBQVM7SUFDbkIscUVBQXNCLENBQUE7SUFDdEIsbUVBQXFCLENBQUE7SUFDckIsNEdBQTBDLENBQUE7SUFDMUMsb0dBQXNDLENBQUE7SUFDdEMsd0dBQXdDLENBQUE7SUFDeEMsZ0dBQW9DLENBQUE7SUFDcEMsc0lBQXVELENBQUE7SUFDdkQsb0VBQXNCLENBQUE7SUFDdEIsc0hBQStDLENBQUE7SUFDL0Msa0dBQXFDLENBQUE7SUFDckMsNEhBQWtELENBQUE7SUFDbEQseUdBQXlDLENBQUE7SUFDekMsK0hBQW9ELENBQUE7SUFDcEQsMkdBQTBDLENBQUE7SUFDMUMsMkhBQWtELENBQUE7SUFDbEQsaUhBQTZDLENBQUE7SUFDN0MseUlBQXlELENBQUE7SUFDekQsbUdBQXNDLENBQUE7SUFDdEMsMkZBQWtDLENBQUE7SUFDbEMsdUdBQXdDLENBQUE7SUFDeEMscUdBQXVDLENBQUE7QUFDekMsQ0FBQyxFQXRCVyxTQUFTLEtBQVQsU0FBUyxRQXNCcEI7O0lBd0NnQywrQkFBaUI7Ozs7SUFPaEQsOENBQXdCLGFBQUMsT0FBZTtJQVV4QyxpQ0FBVyxhQUFDLE9BQW1DOzs7bURBQWdCO2dCQUM3RCxPQUFPLElBQUksT0FBTyxDQUFNLFVBQUMsT0FBTyxFQUFFLE1BQU07b0JBQ3RDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBQyxLQUF1QixFQUFFLElBQVM7d0JBQ3JFLElBQUksS0FBSyxFQUFFOzRCQUNULE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDZjs2QkFBTTs0QkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ2Y7b0JBQ0gsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNkLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQVNELG1DQUFhO0lBV2Isc0RBQWdDO0lBV2hDLG9DQUFjO0lBWWQsOENBQXdCO0lBWXhCLHdDQUFrQjtJQVlsQix1Q0FBaUI7SUFZakIscUNBQWU7SUFZZix1Q0FBaUI7SUFZakIsMkNBQXFCO0lBWXJCLHdDQUFrQjtJQVlsQiw4REFBd0M7SUFZeEMsd0RBQWtDO0lBWWxDLCtDQUF5Qjs7Ozs7O3NCQXRTM0I7RUFvSGlDLGlCQUFpQjtTQUFyQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhQ2hlY2ssIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5kZWNsYXJlIHZhciBjaGNwOiBhbnk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhvdENvZGVQdXNoVmVyc2lvbiB7XHJcbiAgLyoqXHJcbiAgICogQXBwbGljYXRpb24ncyB2ZXJzaW9uIG5hbWUuIFRoaXMgdmVyc2lvbiBpcyB2aXNpYmxlIHRvIHRoZSB1c2VyIG9uIHRoZSBzdG9yZXMuXHJcbiAgICovXHJcbiAgYXBwVmVyc2lvbjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEFwcGxpY2F0aW9uJ3MgYnVpbGQgdmVyc2lvbiBudW1iZXIuXHJcbiAgICovXHJcbiAgYnVpbGRWZXJzaW9uOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVmVyc2lvbiBvZiB0aGUgd2ViIGNvbnRlbnQsIHRoYXQgaXMgZGlzcGxheWVkIHRvIHRoZSB1c2VyLiBCYXNpY2FsbHksIHZhbHVlIG9mIHRoZSByZWxlYXNlIHByb3BlcnR5IGZyb20gY2hjcC5qc29uIGZpbGUgaW4geW91ciBsb2NhbCB3d3cgZm9sZGVyLlxyXG4gICAqL1xyXG4gIGN1cnJlbnRXZWJWZXJzaW9uOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogUHJldmlvdXMgd2ViIGNvbnRlbnQgdmVyc2lvbi4gVGhpcyBpcyBhIHZlcnNpb24gb2Ygb3VyIGJhY2t1cC4gQ2FuIGJlIGVtcHR5LCBpZiB0aGVyZSB3ZXJlIG5vIHVwZGF0ZXMgaW5zdGFsbGVkLlxyXG4gICAqL1xyXG4gIHByZXZpb3VzV2ViVmVyc2lvbjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFZlcnNpb24gbnVtYmVyIG9mIHRoZSB3ZWIgY29udGVudCwgdGhhdCB3YXMgbG9hZGVkIGJ5IHRoZSBwbHVnaW4gYW5kIHJlYWR5IHRvIGJlIGluc3RhbGxlZC4gQmFzaWNhbGx5LCB2YWx1ZSBvZiB0aGUgcmVsZWFzZSBwcm9wZXJ0eSBmcm9tIGNoY3AuanNvbiBmaWxlIG9uIHlvdXIgc2VydmVyLiBDYW4gYmUgZW1wdHksIGlmIG5vIHVwZGF0ZSBpcyB3YWl0aW5nIGZvciBpbnN0YWxsYXRpb24uXHJcbiAgICovXHJcbiAgcmVhZHlUb0luc3RhbGxXZWJWZXJzaW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSG90Q29kZVB1c2hVcGRhdGUge1xyXG4gIC8qKlxyXG4gICAqIEN1cnJlbnQgdmVyc2lvbiBpbnN0YWxsZWQuXHJcbiAgICovXHJcbiAgY3VycmVudFZlcnNpb246IHN0cmluZztcclxuICAvKipcclxuICAgKiBBdmFpbGFibGUgdmVyc2lvbiB0byByZXBsYWNlIHRoZSBjdXJyZW50IG9uZS5cclxuICAgKi9cclxuICByZWFkeVRvSW5zdGFsbFZlcnNpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIb3RDb2RlUHVzaFJlcXVlc3RPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBVcmwgb2YgdGhlIGNoY3AuanNvbiBjb25maWcgb24gdGhlIHNlcnZlci4gUGx1Z2luIHdpbGwgdXNlIHRoaXMgb25lIGluc3RlYWQgb2YgPGNvbmZpZy1maWxlIHVybD1cIlwiPiBmcm9tIHRoZSBjb25maWcueG1sLlxyXG4gICAqL1xyXG4gICdjb25maWctZmlsZSc/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBIVFRQIGhlYWRlcnMsIHRoYXQgd2lsbCBiZSBhZGRlZCB0byBhbGwgcmVxdWVzdHMgaW4gdXBkYXRlIGRvd25sb2FkIHByb2Nlc3MsIGluY2x1ZGluZyBsb2FkaW5nIGNvbmZpZ3MgYW5kIG5ldy9jaGFuZ2VkIGZpbGVzLlxyXG4gICAqL1xyXG4gICdyZXF1ZXN0LWhlYWRlcnMnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZvciBkZXNjcmlwdGlvbiBvbiBlcnJvciBjb2RlcywgcGxlYXNlIHZpc2l0IGh0dHBzOi8vZ2l0aHViLmNvbS9ub3JkbmV0L2NvcmRvdmEtaG90LWNvZGUtcHVzaC93aWtpL0Vycm9yLWNvZGVzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFcnJvckNvZGUge1xyXG4gIE5PVEhJTkdfVE9fSU5TVEFMTCA9IDEsXHJcbiAgTk9USElOR19UT19VUERBVEUgPSAyLFxyXG4gIEZBSUxFRF9UT19ET1dOTE9BRF9BUFBMSUNBVElPTl9DT05GSUcgPSAtMSxcclxuICBBUFBMSUNBVElPTl9CVUlMRF9WRVJTSU9OX1RPT19MT1cgPSAtMixcclxuICBGQUlMRURfVE9fRE9XTkxPQURfQ09OVEVOVF9NQU5JRkVTVCA9IC0zLFxyXG4gIEZBSUxFRF9UT19ET1dOTE9BRF9VUERBVEVfRklMRVMgPSAtNCxcclxuICBGQUlMRURfVE9fTU9WRV9MT0FERURfRklMRVNfVE9fSU5TVEFMTEFUSU9OX0ZPTERFUiA9IC01LFxyXG4gIFVQREFURV9JU19JTlZBTElEID0gLTYsXHJcbiAgRkFJTEVEX1RPX0NPUFlfRklMRVNfRlJPTV9QUkVWSU9VU19SRUxFQVNFID0gLTcsXHJcbiAgRkFJTEVEX1RPX0NPUFlfTkVXX0NPTlRFTlRfRklMRVMgPSAtOCxcclxuICBMT0NBTF9WRVJTSU9OX09GX0FQUExJQ0FUSU9OX0NPTkZJR19OT1RfRk9VTkQgPSAtOSxcclxuICBMT0NBTF9WRVJTSU9OX09GX01BTklGRVNUX05PVF9GT1VORCA9IC0xMCxcclxuICBMT0FERURfVkVSU0lPTl9PRl9BUFBMSUNBVElPTl9DT05GSUdfTk9UX0ZPVU5EID0gLTExLFxyXG4gIExPQURFRF9WRVJTSU9OX09GX01BTklGRVNUX05PVF9GT1VORCA9IC0xMixcclxuICBGQUlMRURfVE9fSU5TVEFMTF9BU1NFVFNfT05fRVhURVJOQUxfU1RPUkFHRSA9IC0xMyxcclxuICBDQU5UX0lOU1RBTExfV0hJTEVfRE9XTkxPQURfSU5fUFJPR1JFU1MgPSAtMTQsXHJcbiAgQ0FOVF9ET1dOTE9BRF9VUERBVEVfV0hJTEVfSU5TVEFMTEFUSU9OX0lOX1BST0dSRVNTID0gLTE1LFxyXG4gIElOU1RBTExBVElPTl9BTFJFQURZX0lOX1BST0dSRVNTID0gLTE2LFxyXG4gIERPV05MT0FEX0FMUkVBRFlfSU5fUFJPR1JFU1MgPSAtMTcsXHJcbiAgQVNTRVRTX0ZPTERFUl9JU19OT1RfWUVUX0lOU1RBTExFRCA9IC0xOCxcclxuICBORVdfQVBQTElDQVRJT05fQ09ORklHX0lTX0lOVkFMSUQgPSAtMTksXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSG90Q29kZVB1c2hFcnJvciB7XHJcbiAgY29kZTogRXJyb3JDb2RlO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSG90Q29kZVB1c2hFdmVudERhdGEge1xyXG4gIGRldGFpbHM/OiB7XHJcbiAgICBlcnJvcj86IEhvdENvZGVQdXNoRXJyb3I7XHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEhvdCBDb2RlIFB1c2hcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEhvdENvZGVQdXNoIHBsdWdpbiBmb3IgQ29yZG92YSB0aGF0IHN1cHBvcnRzIGlPUyBhbmQgQW5kcm9pZC4gVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBrZWVwIHlvdXIgaHRtbCwgY3NzIGFuZCBqcyBmaWxlcyBzeW5jZWQgd2l0aCB5b3VyIHNlcnZlci5cclxuICpcclxuICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgZGV0YWlsZWQgd2lraSBodHRwczovL2dpdGh1Yi5jb20vbm9yZG5ldC9jb3Jkb3ZhLWhvdC1jb2RlLXB1c2gvd2lraVxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBIb3RDb2RlUHVzaCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaG90LWNvZGUtcHVzaC9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvdENvZGVQdXNoOiBIb3RDb2RlUHVzaCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBob3RDb2RlUHVzaC5mZXRjaFVwZGF0ZShvcHRpb25zKS50aGVuKGRhdGEgPT4geyBjb25zb2xlLmxvZygnVXBkYXRlIGF2YWlsYWJsZScpOyB9KTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSG90Q29kZVB1c2gnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtaG90LWNvZGUtcHVzaCcsXHJcbiAgcGx1Z2luUmVmOiAnY2hjcCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ub3JkbmV0L2NvcmRvdmEtaG90LWNvZGUtcHVzaCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhvdENvZGVQdXNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFNob3cgZGlhbG9nIHdpdGggdGhlIHJlcXVlc3QgdG8gdXBkYXRlIGFwcGxpY2F0aW9uIHRocm91Z2ggdGhlIFN0b3JlIChBcHAgU3RvcmUgb3IgR29vZ2xlIFBsYXkpLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IE1lc3NhZ2UgdG8gc2hvdyBpbiB0aGUgZGlhbG9nXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgd2hlbiB0aGUgdXNlciBpcyByZWRpcmVjdGVkIHRvIHRoZSBzdG9yZSwgcmVqZWN0cyBpZiB0aGUgdXNlciBkZWNsaW5lcy5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVxdWVzdEFwcGxpY2F0aW9uVXBkYXRlKG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEb3dubG9hZCB1cGRhdGVzIGZyb20gdGhlIHNlcnZlci1zaWRlLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtIb3RDb2RlUHVzaFJlcXVlc3RPcHRpb25zfSBBZGRpdGlvbmFsIG9wdGlvbnMgdG8gdGhlIHJlcXVlc3QuIElmIG5vdCBzZXQgLSBwcmVmZXJlbmNlcyBmcm9tIGNvbmZpZy54bWwgYXJlIHVzZWQuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgaWYgdGhlcmUgaXMgYW4gdXBkYXRlIGF2YWlsYWJsZSwgcmVqZWN0cyBvdGhlcndpc2UuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgZmV0Y2hVcGRhdGUob3B0aW9ucz86IEhvdENvZGVQdXNoUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBIb3RDb2RlUHVzaC5nZXRQbHVnaW4oKS5mZXRjaFVwZGF0ZSgoZXJyb3I6IEhvdENvZGVQdXNoRXJyb3IsIGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbnN0YWxsIHVwZGF0ZSBpZiB0aGVyZSBpcyBhbnl0aGluZyB0byBpbnN0YWxsLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIHdoZW4gdGhlIHVwZGF0ZSBpcyBpbnN0YWxsZWQuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnLFxyXG4gIH0pXHJcbiAgaW5zdGFsbFVwZGF0ZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdXBkYXRlIHdhcyBsb2FkZWQgYW5kIHJlYWR5IHRvIGJlIGluc3RhbGxlZC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIb3RDb2RlUHVzaFVwZGF0ZT59IFJlc29sdmVzIGlmIGFuIHVwZGF0ZSBpcyByZWFkeSwgcmVqZWN0cyBpZiB0aGVyZSBpcyBubyB1cGRhdGUuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnLFxyXG4gIH0pXHJcbiAgaXNVcGRhdGVBdmFpbGFibGVGb3JJbnN0YWxsYXRpb24oKTogUHJvbWlzZTxIb3RDb2RlUHVzaFVwZGF0ZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYXBwJ3MgdmVyc2lvbnMuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8SG90Q29kZVB1c2hWZXJzaW9uPn0gUmVzb2x2ZXMgd2l0aCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHZlcnNpb25zLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrU3R5bGU6ICdub2RlJyxcclxuICB9KVxyXG4gIGdldFZlcnNpb25JbmZvKCk6IFByb21pc2U8SG90Q29kZVB1c2hWZXJzaW9uPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudCBzZW50IHdoZW4gbmV3IHJlbGVhc2Ugd2FzIHN1Y2Nlc3NmdWxseSBsb2FkZWQgYW5kIHJlYWR5IHRvIGJlIGluc3RhbGxlZC5cclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgZXZlbnQ6ICdjaGNwX3VwZGF0ZUlzUmVhZHlUb0luc3RhbGwnLFxyXG4gIH0pXHJcbiAgb25VcGRhdGVJc1JlYWR5VG9JbnN0YWxsKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IHNlbnQgd2hlbiBwbHVnaW4gY291bGRuJ3QgbG9hZCB1cGRhdGUgZnJvbSB0aGUgc2VydmVyLiBFcnJvciBkZXRhaWxzIGFyZSBhdHRhY2hlZCB0byB0aGUgZXZlbnQuXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGV2ZW50OiAnY2hjcF91cGRhdGVMb2FkRmFpbGVkJyxcclxuICB9KVxyXG4gIG9uVXBkYXRlTG9hZEZhaWxlZCgpOiBPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudCBzZW50IHdoZW4gd2Ugc3VjY2Vzc2Z1bGx5IGxvYWRlZCBhcHBsaWNhdGlvbiBjb25maWcgZnJvbSB0aGUgc2VydmVyLCBidXQgdGhlcmUgaXMgbm90aGluZyBuZXcgaXMgYXZhaWxhYmxlLlxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXHJcbiAgICBldmVudDogJ2NoY3Bfbm90aGluZ1RvVXBkYXRlJyxcclxuICB9KVxyXG4gIG9uTm90aGluZ1RvVXBkYXRlKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IHNlbnQgd2hlbiBhbiB1cGRhdGUgaXMgYWJvdXQgdG8gYmUgaW5zdGFsbGVkLlxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXHJcbiAgICBldmVudDogJ2NoY3BfYmVmb3JlSW5zdGFsbCcsXHJcbiAgfSlcclxuICBvbkJlZm9yZUluc3RhbGwoKTogT2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnQgc2VudCB3aGVuIHVwZGF0ZSB3YXMgc3VjY2Vzc2Z1bGx5IGluc3RhbGxlZC5cclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgZXZlbnQ6ICdjaGNwX3VwZGF0ZUluc3RhbGxlZCcsXHJcbiAgfSlcclxuICBvblVwZGF0ZUluc3RhbGxlZCgpOiBPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudCBzZW50IHdoZW4gdXBkYXRlIGluc3RhbGxhdGlvbiBmYWlsZWQuIEVycm9yIGRldGFpbHMgYXJlIGF0dGFjaGVkIHRvIHRoZSBldmVudC5cclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgZXZlbnQ6ICdjaGNwX3VwZGF0ZUluc3RhbGxGYWlsZWQnLFxyXG4gIH0pXHJcbiAgb25VcGRhdGVJbnN0YWxsRmFpbGVkKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IHNlbnQgd2hlbiB0aGVyZSBpcyBub3RoaW5nIHRvIGluc3RhbGwuIFByb2JhYmx5LCBub3RoaW5nIHdhcyBsb2FkZWQgYmVmb3JlIHRoYXQuXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGV2ZW50OiAnY2hjcF9ub3RoaW5nVG9JbnN0YWxsJyxcclxuICB9KVxyXG4gIG9uTm90aGluZ1RvSW5zdGFsbCgpOiBPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudCBzZW50IHdoZW4gcGx1Z2luIGlzIGFib3V0IHRvIHN0YXJ0IGluc3RhbGxpbmcgYnVuZGxlIGNvbnRlbnQgb24gdGhlIGV4dGVybmFsIHN0b3JhZ2UuXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGV2ZW50OiAnY2hjcF9iZWZvcmVBc3NldHNJbnN0YWxsZWRPbkV4dGVybmFsU3RvcmFnZScsXHJcbiAgfSlcclxuICBvbkJlZm9yZUFzc2V0c0luc3RhbGxlZE9uRXh0ZXJuYWxTdG9yYWdlKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IHNlbnQgd2hlbiBwbHVnaW4gc3VjY2Vzc2Z1bGx5IGNvcGllZCB3ZWIgcHJvamVjdCBmaWxlcyBmcm9tIGJ1bmRsZSBvbiB0aGUgZXh0ZXJuYWwgc3RvcmFnZS4gTW9zdCBsaWtlbHkgeW91IHdpbGwgdXNlIGl0IGZvciBkZWJ1ZyBwdXJwb3NlIG9ubHkuIE9yIGV2ZW4gbmV2ZXIuXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGV2ZW50OiAnY2hjcF9hc3NldHNJbnN0YWxsZWRPbkV4dGVybmFsU3RvcmFnZScsXHJcbiAgfSlcclxuICBvbkFzc2V0c0luc3RhbGxlZE9uRXh0ZXJuYWxTdG9yYWdlKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IHNlbnQgd2hlbiBwbHVnaW4gY291bGRuJ3QgY29weSBmaWxlcyBmcm9tIGJ1bmRsZSBvbiB0aGUgZXh0ZXJuYWwgc3RvcmFnZS4gSWYgdGhpcyBoYXBwZW5zIC0gcGx1Z2luIHdvbid0IHdvcmsuIENhbiBvY2N1ciB3aGVuIHRoZXJlIGlzIG5vdCBlbm91Z2ggZnJlZSBzcGFjZSBvbiB0aGUgZGV2aWNlLlxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXHJcbiAgICBldmVudDogJ2NoY3BfYXNzZXRzSW5zdGFsbGF0aW9uRXJyb3InLFxyXG4gIH0pXHJcbiAgb25Bc3NldHNJbnN0YWxsYXRpb25FcnJvcigpOiBPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==