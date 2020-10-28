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
export var ELocalNotificationTriggerUnit;
(function (ELocalNotificationTriggerUnit) {
    ELocalNotificationTriggerUnit["SECOND"] = "second";
    ELocalNotificationTriggerUnit["MINUTE"] = "minute";
    ELocalNotificationTriggerUnit["HOUR"] = "hour";
    ELocalNotificationTriggerUnit["DAY"] = "day";
    ELocalNotificationTriggerUnit["WEEK"] = "week";
    ELocalNotificationTriggerUnit["MONTH"] = "month";
    ELocalNotificationTriggerUnit["QUARTER"] = "quarter";
    ELocalNotificationTriggerUnit["YEAR"] = "year";
    ELocalNotificationTriggerUnit["WEEKDAY"] = "weekday";
    ELocalNotificationTriggerUnit["WEEKDAY_ORDINAL"] = "weekdayOrdinal";
    ELocalNotificationTriggerUnit["WEEK_OF_MONTH"] = "weekOfMonth";
})(ELocalNotificationTriggerUnit || (ELocalNotificationTriggerUnit = {}));
export var ILocalNotificationActionType;
(function (ILocalNotificationActionType) {
    ILocalNotificationActionType["INPUT"] = "input";
    ILocalNotificationActionType["BUTTON"] = "button";
})(ILocalNotificationActionType || (ILocalNotificationActionType = {}));
var LocalNotificationsOriginal = /** @class */ (function (_super) {
    __extends(LocalNotificationsOriginal, _super);
    function LocalNotificationsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalNotificationsOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    LocalNotificationsOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    LocalNotificationsOriginal.prototype.schedule = function (options) { return cordova(this, "schedule", { "sync": true }, arguments); };
    LocalNotificationsOriginal.prototype.update = function (options) { return cordova(this, "update", { "sync": true }, arguments); };
    LocalNotificationsOriginal.prototype.clear = function (notificationId) { return cordova(this, "clear", {}, arguments); };
    LocalNotificationsOriginal.prototype.clearAll = function () { return cordova(this, "clearAll", {}, arguments); };
    LocalNotificationsOriginal.prototype.cancel = function (notificationId) { return cordova(this, "cancel", {}, arguments); };
    LocalNotificationsOriginal.prototype.cancelAll = function () { return cordova(this, "cancelAll", {}, arguments); };
    LocalNotificationsOriginal.prototype.isPresent = function (notificationId) { return cordova(this, "isPresent", {}, arguments); };
    LocalNotificationsOriginal.prototype.isScheduled = function (notificationId) { return cordova(this, "isScheduled", {}, arguments); };
    LocalNotificationsOriginal.prototype.isTriggered = function (notificationId) { return cordova(this, "isTriggered", {}, arguments); };
    LocalNotificationsOriginal.prototype.hasType = function (id, type) { return cordova(this, "hasType", {}, arguments); };
    LocalNotificationsOriginal.prototype.getType = function (id) { return cordova(this, "getType", {}, arguments); };
    LocalNotificationsOriginal.prototype.getIds = function () { return cordova(this, "getIds", {}, arguments); };
    LocalNotificationsOriginal.prototype.getScheduledIds = function () { return cordova(this, "getScheduledIds", {}, arguments); };
    LocalNotificationsOriginal.prototype.getTriggeredIds = function () { return cordova(this, "getTriggeredIds", {}, arguments); };
    LocalNotificationsOriginal.prototype.get = function (notificationId) { return cordova(this, "get", {}, arguments); };
    LocalNotificationsOriginal.prototype.getAll = function () { return cordova(this, "getAll", {}, arguments); };
    LocalNotificationsOriginal.prototype.getScheduled = function (notificationId) { return cordova(this, "getScheduled", {}, arguments); };
    LocalNotificationsOriginal.prototype.getTriggered = function (notificationId) { return cordova(this, "getTriggered", {}, arguments); };
    LocalNotificationsOriginal.prototype.addActions = function (groupId, actions) { return cordova(this, "addActions", {}, arguments); };
    LocalNotificationsOriginal.prototype.removeActions = function (groupId) { return cordova(this, "removeActions", {}, arguments); };
    LocalNotificationsOriginal.prototype.hasActions = function (groupId) { return cordova(this, "hasActions", {}, arguments); };
    LocalNotificationsOriginal.prototype.getDefaults = function () { return cordova(this, "getDefaults", { "sync": true }, arguments); };
    LocalNotificationsOriginal.prototype.setDefaults = function (defaults) { return cordova(this, "setDefaults", { "sync": true }, arguments); };
    LocalNotificationsOriginal.prototype.getAllScheduled = function () { return cordova(this, "getAllScheduled", {}, arguments); };
    LocalNotificationsOriginal.prototype.getAllTriggered = function () { return cordova(this, "getAllTriggered", {}, arguments); };
    LocalNotificationsOriginal.prototype.on = function (eventName) { return cordova(this, "on", { "observable": true, "clearFunction": "un", "clearWithArgs": true }, arguments); };
    LocalNotificationsOriginal.prototype.fireEvent = function (eventName, args) { return cordova(this, "fireEvent", { "sync": true }, arguments); };
    LocalNotificationsOriginal.prototype.fireQueuedEvents = function () { return cordova(this, "fireQueuedEvents", {}, arguments); };
    LocalNotificationsOriginal.pluginName = "LocalNotifications";
    LocalNotificationsOriginal.plugin = "cordova-plugin-local-notification";
    LocalNotificationsOriginal.pluginRef = "cordova.plugins.notification.local";
    LocalNotificationsOriginal.repo = "https://github.com/katzer/cordova-plugin-local-notifications";
    LocalNotificationsOriginal.platforms = ["Android", "iOS", "Windows"];
    return LocalNotificationsOriginal;
}(IonicNativePlugin));
var LocalNotifications = new LocalNotificationsOriginal();
export { LocalNotifications };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xvY2FsLW5vdGlmaWNhdGlvbnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxNQUFNLENBQU4sSUFBWSw2QkFZWDtBQVpELFdBQVksNkJBQTZCO0lBQ3ZDLGtEQUFpQixDQUFBO0lBQ2pCLGtEQUFpQixDQUFBO0lBQ2pCLDhDQUFhLENBQUE7SUFDYiw0Q0FBVyxDQUFBO0lBQ1gsOENBQWEsQ0FBQTtJQUNiLGdEQUFlLENBQUE7SUFDZixvREFBbUIsQ0FBQTtJQUNuQiw4Q0FBYSxDQUFBO0lBQ2Isb0RBQW1CLENBQUE7SUFDbkIsbUVBQWtDLENBQUE7SUFDbEMsOERBQTZCLENBQUE7QUFDL0IsQ0FBQyxFQVpXLDZCQUE2QixLQUE3Qiw2QkFBNkIsUUFZeEM7QUEwSUQsTUFBTSxDQUFOLElBQVksNEJBR1g7QUFIRCxXQUFZLDRCQUE0QjtJQUN0QywrQ0FBZSxDQUFBO0lBQ2YsaURBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLDRCQUE0QixLQUE1Qiw0QkFBNEIsUUFHdkM7O0lBMlh1QyxzQ0FBaUI7Ozs7SUFNdkQsMENBQWE7SUFTYiw4Q0FBaUI7SUFXakIscUNBQVEsYUFBQyxPQUFtRDtJQVM1RCxtQ0FBTSxhQUFDLE9BQTRCO0lBUW5DLGtDQUFLLGFBQUMsY0FBbUI7SUFTekIscUNBQVE7SUFVUixtQ0FBTSxhQUFDLGNBQW1CO0lBUzFCLHNDQUFTO0lBVVQsc0NBQVMsYUFBQyxjQUFzQjtJQVVoQyx3Q0FBVyxhQUFDLGNBQXNCO0lBVWxDLHdDQUFXLGFBQUMsY0FBc0I7SUFXbEMsb0NBQU8sYUFBQyxFQUFVLEVBQUUsSUFBWTtJQVNoQyxvQ0FBTyxhQUFDLEVBQVU7SUFTbEIsbUNBQU07SUFTTiw0Q0FBZTtJQVNmLDRDQUFlO0lBVWYsZ0NBQUcsYUFBQyxjQUFtQjtJQVN2QixtQ0FBTTtJQVVOLHlDQUFZLGFBQUMsY0FBbUI7SUFVaEMseUNBQVksYUFBQyxjQUFtQjtJQVdoQyx1Q0FBVSxhQUFDLE9BQVksRUFBRSxPQUFtQztJQVU1RCwwQ0FBYSxhQUFDLE9BQVk7SUFVMUIsdUNBQVUsYUFBQyxPQUFZO0lBV3ZCLHdDQUFXO0lBV1gsd0NBQVcsYUFBQyxRQUFhO0lBU3pCLDRDQUFlO0lBU2YsNENBQWU7SUFjZiwrQkFBRSxhQUFDLFNBQWlCO0lBWXBCLHNDQUFTLGFBQUMsU0FBaUIsRUFBRSxJQUFTO0lBT3RDLDZDQUFnQjs7Ozs7OzZCQTN6QmxCO0VBd2hCd0MsaUJBQWlCO1NBQTVDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBlbnVtIEVMb2NhbE5vdGlmaWNhdGlvblRyaWdnZXJVbml0IHtcclxuICBTRUNPTkQgPSAnc2Vjb25kJyxcclxuICBNSU5VVEUgPSAnbWludXRlJyxcclxuICBIT1VSID0gJ2hvdXInLFxyXG4gIERBWSA9ICdkYXknLFxyXG4gIFdFRUsgPSAnd2VlaycsXHJcbiAgTU9OVEggPSAnbW9udGgnLFxyXG4gIFFVQVJURVIgPSAncXVhcnRlcicsXHJcbiAgWUVBUiA9ICd5ZWFyJyxcclxuICBXRUVLREFZID0gJ3dlZWtkYXknLFxyXG4gIFdFRUtEQVlfT1JESU5BTCA9ICd3ZWVrZGF5T3JkaW5hbCcsXHJcbiAgV0VFS19PRl9NT05USCA9ICd3ZWVrT2ZNb250aCcsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxvY2FsTm90aWZpY2F0aW9uRXZlcnkge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtaW51dGUuXHJcbiAgICovXHJcbiAgbWludXRlPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgaG91ci5cclxuICAgKi9cclxuICBob3VyPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGF5LlxyXG4gICAqL1xyXG4gIGRheT86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRheSBvZiB3ZWVrLlxyXG4gICAqL1xyXG4gIHdlZWtkYXk/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB3ZWVrIG9mIHllYWRheSBvZiB0aGUgYXJkaW5hbCB3ZWVrLlxyXG4gICAqL1xyXG4gIHdlZWs/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXkgb2YgdGhlIG9yZGluYWwgd2Vlay5cclxuICAgKi9cclxuICB3ZWVrZGF5T3JkaW5hbD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHdlZWsgb2YgbW9udGguXHJcbiAgICovXHJcbiAgd2Vla09mTW9udGg/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBtb250aC5cclxuICAgKi9cclxuICBtb250aD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHF1YXJ0ZXIuXHJcbiAgICovXHJcbiAgcXVhcnRlcj86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHllYXIuXHJcbiAgICovXHJcbiAgeWVhcj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxOb3RpZmljYXRpb25UcmlnZ2VyIHtcclxuICAvKiogKioqKiogRklYICoqKioqICovXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gdGhlIHN5c3RlbSBzaG91bGQgZGVsaXZlciB0aGUgbG9jYWwgbm90aWZpY2F0aW9uLiBJZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIG5pbCBvciBpcyBhIGRhdGUgaW4gdGhlIHBhc3QsIHRoZSBsb2NhbCBub3RpZmljYXRpb24gaXMgZGVsaXZlcmVkIGltbWVkaWF0ZWx5LlxyXG4gICAqIERlZmF1bHQ6IG5vdyB+IG5ldyBEYXRlKClcclxuICAgKi9cclxuICBhdD86IERhdGU7XHJcblxyXG4gIC8qKiAqKioqKiBUSU1FU1BBTiAqKioqKiAqL1xyXG5cclxuICAvKipcclxuICAgKiBBbW91bnQgb2YgdW5pdHNcclxuICAgKi9cclxuICBpbj86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVW5pdFxyXG4gICAqL1xyXG4gIHVuaXQ/OiBFTG9jYWxOb3RpZmljYXRpb25UcmlnZ2VyVW5pdDtcclxuXHJcbiAgLyoqICoqKioqIFJFUEVBVC9NQVRDSCAqKioqKiAqL1xyXG5cclxuICAvKipcclxuICAgKiBBbW91bnQgb2YgdW5pdHNcclxuICAgKi9cclxuICBjb3VudD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHVuaXRcclxuICAgKi9cclxuICBldmVyeT86IEVMb2NhbE5vdGlmaWNhdGlvblRyaWdnZXJVbml0IHwgSUxvY2FsTm90aWZpY2F0aW9uRXZlcnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBlbmQgb2YgdGhlIHJlcGVhdGluZyBub3RpZmljYXRpb25cclxuICAgKi9cclxuICBiZWZvcmU/OiBEYXRlO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSBhbmQgdGltZSB3aGVuIHRoZSBzeXN0ZW0gc2hvdWxkIGRlbGl2ZXIgdGhlIGxvY2FsIG5vdGlmaWNhdGlvbi4gSWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBuaWwgb3IgaXMgYSBkYXRlIGluIHRoZSBwYXN0LCB0aGUgbG9jYWwgbm90aWZpY2F0aW9uIGlzIGRlbGl2ZXJlZCBpbW1lZGlhdGVseS5cclxuICAgKiBPbmx5IGZvciBcInJlcGVhdFwiXHJcbiAgICogRGVmYXVsdDogbm93IH4gbmV3IERhdGUoKVxyXG4gICAqL1xyXG4gIGZpcnN0QXQ/OiBEYXRlO1xyXG5cclxuICAvKipcclxuICAgKiBPbmx5IGZvciBcIm1hdGNoXCJcclxuICAgKi9cclxuICBhZnRlcj86IERhdGU7XHJcblxyXG4gIC8qKiAqKioqKiBMT0NBVElPTiAqKioqKiAqL1xyXG5cclxuICAvKipcclxuICAgKiBJT1MgT05MWVxyXG4gICAqIENlbnRlciBvZiB0aGUgbG9jYXRpb25cclxuICAgKiBMYXRpdHVkZSBhbmQgTG9uZ2l0dWRlIHZhbHVlc1xyXG4gICAqL1xyXG4gIGNlbnRlcj86IG51bWJlcltdO1xyXG5cclxuICAvKipcclxuICAgKiBJT1MgT05MWVxyXG4gICAqIFJhZGl1cyBpbiBtZXRlcnNcclxuICAgKi9cclxuICByYWRpdXM/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIElPUyBPTkxZXHJcbiAgICogVHJpZ2dlciBvbiBlbnRyeSBvZiB0aGUgbG9jYXRpb25cclxuICAgKi9cclxuICBub3RpZnlPbkVudHJ5PzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogSU9TIE9OTFlcclxuICAgKiBUcmlnZ2VyIG9uIGV4aXQgb2YgdGhlIGxvY2F0aW9uXHJcbiAgICovXHJcbiAgbm90aWZ5T25FeGl0PzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogSU9TIE9OTFlcclxuICAgKiBUcmlnZ2VyIG9ubHkgb25jZT9cclxuICAgKi9cclxuICBzaW5nbGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBJTG9jYWxOb3RpZmljYXRpb25BY3Rpb25UeXBlIHtcclxuICBJTlBVVCA9ICdpbnB1dCcsXHJcbiAgQlVUVE9OID0gJ2J1dHRvbicsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBOb3RpZmljYXRpb24gYWN0aW9uXHJcbiAqXHJcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2thdHplci9jb3Jkb3ZhLXBsdWdpbi1sb2NhbC1ub3RpZmljYXRpb25zI2FjdGlvbnNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxvY2FsTm90aWZpY2F0aW9uQWN0aW9uIHtcclxuICAvKipcclxuICAgKiBUaGUgaWQgb2YgdGhlIGFjdGlvbiBpcyB1c2VkIGFzIHRoZSBldmVudCBuYW1lIGluIHRoZSBsaXN0ZW5lciBmdW5jdGlvblxyXG4gICAqL1xyXG4gIGlkPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgdGl0bGUgb2YgdGhlIG5vdGlmaWNhdGlvbiBtZXNzYWdlXHJcbiAgICovXHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ha2UgdGhpcyBub3RpZmljYXRpb24gc2hvdyB3aGVuIGFwcCBpbiBmb3JlZ3JvdW5kLlxyXG4gICAqL1xyXG4gIGZvcmVncm91bmQ/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgYWN0aW9uIGNhdXNlcyB0aGUgYXBwIHRvIGxhdW5jaCBpbiB0aGUgZm9yZWdyb3VuZFxyXG4gICAqL1xyXG4gIGxhdW5jaD86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHRoZSB2YWx1ZSBpcyAnZGVjbGluZScgdGhlIGFjdGlvbiBpcyBkaXNwbGF5ZWQgd2l0aCBzcGVjaWFsIGhpZ2hsaWdodGluZyB0byBpbmRpY2F0ZSB0aGF0IGl0IHBlcmZvcm1zIGEgZGVzdHJ1Y3RpdmUgdGFza1xyXG4gICAqL1xyXG4gIHVpPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgYWN0aW9uIHJlcXVpcmVzIHRoYXQgdGhlIHVzZXLigJlzIGRldmljZSBiZSB1bmxvY2tlZC5cclxuICAgKiBXaGVuIHRoZSB1c2VyIHNlbGVjdHMgYW4gYWN0aW9uIHdpdGggdGhpcyBvcHRpb24sIHRoZSBzeXN0ZW0gcHJvbXB0c1xyXG4gICAqIHRoZSB1c2VyIHRvIHVubG9jayB0aGUgZGV2aWNlXHJcbiAgICovXHJcbiAgbmVlZHNBdXRoPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHJlc291cmNlIHBhdGggb2YgdGhlIGFjdGlvbiBpY29uXHJcbiAgICovXHJcbiAgaWNvbj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQU5EUk9JRCBPTkxZXHJcbiAgICogQW4gYXJyYXkgb2YgcHJlLWRlZmluZWQgY2hvaWNlcyBmb3IgdXNlcnMgaW5wdXRcclxuICAgKi9cclxuICBjaG9pY2VzPzogc3RyaW5nW107XHJcblxyXG4gIC8qKlxyXG4gICAqIEFORFJPSUQgT05MWVxyXG4gICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB1c2VyIGNhbiBwcm92aWRlIGFyYml0cmFyeSB0ZXh0IHZhbHVlc1xyXG4gICAqL1xyXG4gIGVkaXRhYmxlPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogSU9TIE9OTFlcclxuICAgKiBUaGUgdGl0bGUgb2YgdGhlIHRleHQgaW5wdXQgYnV0dG9uIHRoYXQgaXMgZGlzcGxheWVkIHRvIHRoZSB1c2VyLlxyXG4gICAqL1xyXG4gIHN1Ym1pdFRpdGxlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgdHlwZSBvZiB0aGUgYWN0aW9uLiBJZiBvbWl0dGVkICdidXR0b24nIGlzIHVzZWQuXHJcbiAgICovXHJcbiAgdHlwZT86IElMb2NhbE5vdGlmaWNhdGlvbkFjdGlvblR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxvY2FsTm90aWZpY2F0aW9uUHJvZ3Jlc3NCYXIge1xyXG4gIC8qKlxyXG4gICAqIElzIHRoZSBwcm9ncmVzcyBiYXIgZW5hYmxlZD9cclxuICAgKi9cclxuICBlbmFibGVkPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGN1cnJlbnQgdmFsdWVcclxuICAgKi9cclxuICB2YWx1ZT86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQU5EUk9JRCBPTkxZXHJcbiAgICogVGhlIG1heGltdW0gdmFsdWUgKGRlZmF1bHQgaXMgMTAwKVxyXG4gICAqL1xyXG4gIG1heFZhbHVlPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBBTkRST0lEIE9OTFlcclxuICAgKiBTaG93IGFuIGluZGV0ZXJtaW5hdGUgcHJvZ3Jlc3MgYmFyXHJcbiAgICovXHJcbiAgaW5kZXRlcm1pbmF0ZT86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFdJTkRPV1MgT05MWVxyXG4gICAqIEdldHMgb3Igc2V0cyBhbiBvcHRpb25hbCBzdHJpbmcgdG8gYmUgZGlzcGxheWVkIGluc3RlYWQgb2YgdGhlXHJcbiAgICogZGVmYXVsdCBwZXJjZW50YWdlIHN0cmluZy4gSWYgdGhpcyBpc24ndCBwcm92aWRlZCwgc29tZXRoaW5nXHJcbiAgICogbGlrZSBcIjcwJVwiIHdpbGwgYmUgZGlzcGxheWVkLlxyXG4gICAqL1xyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBXSU5ET1dTIE9OTFlcclxuICAgKiBTZXRzIHRoZSBzdGF0dXMgKHJlcXVpcmVkKSwgd2hpY2ggaXMgZGlzcGxheWVkIHVuZGVybmVhdGggdGhlIHByb2dyZXNzIGJhclxyXG4gICAqIG9uIHRoZSBsZWZ0LlxyXG4gICAqIFRoaXMgc3RyaW5nIHNob3VsZCByZWZsZWN0IHRoZSBzdGF0dXMgb2YgdGhlIG9wZXJhdGlvbixcclxuICAgKiBsaWtlIFwiRG93bmxvYWRpbmcuLi5cIiBvciBcIkluc3RhbGxpbmcuLi5cIlxyXG4gICAqL1xyXG4gIHN0YXR1cz86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxOb3RpZmljYXRpb24ge1xyXG4gIC8qKlxyXG4gICAqIEEgdW5pcXVlIGlkZW50aWZpZXIgcmVxdWlyZWQgdG8gY2xlYXIsIGNhbmNlbCwgdXBkYXRlIG9yIHJldHJpZXZlIHRoZSBsb2NhbCBub3RpZmljYXRpb24gaW4gdGhlIGZ1dHVyZVxyXG4gICAqIERlZmF1bHQ6IDBcclxuICAgKi9cclxuICBpZD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogRmlyc3Qgcm93IG9mIHRoZSBub3RpZmljYXRpb25cclxuICAgKiBEZWZhdWx0OiBFbXB0eSBzdHJpbmcgKGlPUykgb3IgdGhlIGFwcCBuYW1lIChBbmRyb2lkKVxyXG4gICAqL1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTZWNvbmQgcm93IG9mIHRoZSBub3RpZmljYXRpb25cclxuICAgKiBEZWZhdWx0OiBFbXB0eSBzdHJpbmdcclxuICAgKi9cclxuICB0ZXh0Pzogc3RyaW5nIHwgc3RyaW5nW107XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBudW1iZXIgY3VycmVudGx5IHNldCBhcyB0aGUgYmFkZ2Ugb2YgdGhlIGFwcCBpY29uIGluIFNwcmluZ2JvYXJkIChpT1MpIG9yIGF0IHRoZSByaWdodC1oYW5kIHNpZGUgb2YgdGhlIGxvY2FsIG5vdGlmaWNhdGlvbiAoQW5kcm9pZClcclxuICAgKiBEZWZhdWx0OiAwICh3aGljaCBtZWFucyBkb24ndCBzaG93IGEgbnVtYmVyKVxyXG4gICAqL1xyXG4gIGJhZGdlPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBVcmkgb2YgdGhlIGZpbGUgY29udGFpbmluZyB0aGUgc291bmQgdG8gcGxheSB3aGVuIGFuIGFsZXJ0IGlzIGRpc3BsYXllZFxyXG4gICAqIERlZmF1bHQ6IHJlczovL3BsYXRmb3JtX2RlZmF1bHRcclxuICAgKi9cclxuICBzb3VuZD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQXJiaXRyYXJ5IGRhdGEsIG9iamVjdHMgd2lsbCBiZSBlbmNvZGVkIHRvIEpTT04gc3RyaW5nXHJcbiAgICogRGVmYXVsdDogbnVsbFxyXG4gICAqL1xyXG4gIGRhdGE/OiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFORFJPSUQgT05MWVxyXG4gICAqIFVyaSBvZiB0aGUgaWNvbiB0aGF0IGlzIHNob3duIGluIHRoZSB0aWNrZXIgYW5kIG5vdGlmaWNhdGlvblxyXG4gICAqIERlZmF1bHQ6IHJlczovL2ljb25cclxuICAgKi9cclxuICBpY29uPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBTkRST0lEIE9OTFlcclxuICAgKiBVcmkgb2YgdGhlIHJlc291cmNlIChvbmx5IHJlczovLykgdG8gdXNlIGluIHRoZSBub3RpZmljYXRpb24gbGF5b3V0cy4gRGlmZmVyZW50IGNsYXNzZXMgb2YgZGV2aWNlcyBtYXkgcmV0dXJuIGRpZmZlcmVudCBzaXplc1xyXG4gICAqIERlZmF1bHQ6IHJlczovL2ljX3BvcHVwX3JlbWluZGVyXHJcbiAgICovXHJcbiAgc21hbGxJY29uPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBTkRST0lEIE9OTFlcclxuICAgKiBSR0IgdmFsdWUgZm9yIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBzbWFsbEljb24uXHJcbiAgICogRGVmYXVsdDogQW5kcm9pZHMgQ09MT1JfREVGQVVMVCwgd2hpY2ggd2lsbCB2YXJ5IGJhc2VkIG9uIEFuZHJvaWQgdmVyc2lvbi5cclxuICAgKi9cclxuICBjb2xvcj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQU5EUk9JRCBPTkxZXHJcbiAgICogVXNlIHRoZSBkZWZhdWx0IG5vdGlmaWNhdGlvbiB2aWJyYXRlLlxyXG4gICAqL1xyXG4gIHZpYnJhdGU/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBBTkRST0lEIE9OTFlcclxuICAgKiBEZWZpbmUgdGhlIGJsaW5raW5nIG9mIHRoZSBMRUQgb24gdGhlIGRldmljZS5cclxuICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIExFRCB3aWxsIGJsaW5rIGluIHRoZSBkZWZhdWx0IGNvbG9yIHdpdGhcclxuICAgKiB0aW1pbmdzIGZvciBvbiBhbmQgb2ZmIHNldCB0byAxMDAwIG1zLlxyXG4gICAqIElmIHNldCB0byBhIHN0cmluZywgdGhlIExFRCB3aWxsIGJsaW5rIGluIHRoaXMgQVJHQiB2YWx1ZSB3aXRoXHJcbiAgICogdGltaW5ncyBmb3Igb24gYW5kIG9mZiBzZXQgdG8gMTAwMCBtcy5cclxuICAgKiBJZiBzZXQgdG8gYW4gYXJyYXksIHRoZSB2YWx1ZSBvZiB0aGUga2V5IDAgd2lsbCBiZSB1c2VkIGFzIHRoZSBjb2xvcixcclxuICAgKiB0aGUgdmFsdWUgb2YgdGhlIGtleSAxIHdpbGwgYmUgdXNlZCBhcyB0aGUgJ29uJyB0aW1pbmcsIHRoZSB2YWx1ZSBvZlxyXG4gICAqIHRoZSBrZXkgMiB3aWxsIGJlIHVzZWQgYXMgdGhlICdvZmYnIHRpbWluZ1xyXG4gICAqL1xyXG4gIGxlZD86IHsgY29sb3I6IHN0cmluZzsgb246IG51bWJlcjsgb2ZmOiBudW1iZXIgfSB8IGFueVtdIHwgYm9vbGVhbiB8IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogTm90aWZpY2F0aW9uIHByaW9yaXR5LlxyXG4gICAqIEludGVnZXJzIGJldHdlZW4gLTIgYW5kIDIsIHdoZXJlYXMgLTIgaXMgbWluaW11bSBhbmQgMiBpcyBtYXhpbXVtIHByaW9yaXR5XHJcbiAgICovXHJcbiAgcHJpb3JpdHk/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIElzIGEgc2lsZW50IG5vdGlmaWNhdGlvblxyXG4gICAqL1xyXG4gIHNpbGVudD86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBhIGNsaWNrIG9uIHRoZSBub3RpZmljYXRpb24gY2F1c2VzIHRoZSBhcHBcclxuICAgKiB0byBsYXVuY2ggaW4gdGhlIGZvcmVncm91bmRcclxuICAgKi9cclxuICBsYXVuY2g/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBBTkRST0lEIE9OTFlcclxuICAgKiBXYWtldXAgdGhlIGRldmljZS4gKGRlZmF1bHQgaXMgdHJ1ZSlcclxuICAgKi9cclxuICB3YWtldXA/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBBTkRST0lEIE9OTFlcclxuICAgKiBTcGVjaWZpZXMgYSBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgYWZ0ZXIgd2hpY2ggdGhpcyBub3RpZmljYXRpb24gc2hvdWxkIGJlIGNhbmNlbGVkLCBpZiBpdCBpcyBub3QgYWxyZWFkeSBjYW5jZWxlZC5cclxuICAgKi9cclxuICB0aW1lb3V0QWZ0ZXI/OiBudW1iZXIgfCBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQWN0aW9ucyBpZCBvciBhY3Rpb25zXHJcbiAgICovXHJcbiAgYWN0aW9ucz86IHN0cmluZyB8IElMb2NhbE5vdGlmaWNhdGlvbkFjdGlvbltdO1xyXG5cclxuICAvKipcclxuICAgKiBXaGVuIHRvIHRyaWdnZXIgdGhlIG5vdGlmaWNhdGlvblxyXG4gICAqL1xyXG4gIHRyaWdnZXI/OiBJTG9jYWxOb3RpZmljYXRpb25UcmlnZ2VyO1xyXG5cclxuICAvKipcclxuICAgKiBBIGxpc3Qgb2YgaW1hZ2UgYXR0YWNobWVudHNcclxuICAgKi9cclxuICBhdHRhY2htZW50cz86IHN0cmluZ1tdO1xyXG5cclxuICAvKipcclxuICAgKiBBTkRST0lEIE9OTFlcclxuICAgKiBJZiBhbmQgaG93IHRoZSBub3RpZmljYXRpb24gc2hhbGwgc2hvdyB0aGUgd2hlbiBkYXRlLlxyXG4gICAqIFBvc3NiaWxlIHZhbHVlczpcclxuICAgKiAgICAgICAgICAgICAgICAgIGJvb2xlYW46IHRydWUgZXF1YWxzICdjbG9jaycsIGZhbHNlIGRpc2FibGUgYSB3YXRjaC9jb3VudGVyXHJcbiAgICogICAgICAgICAgICAgICAgICAnY2xvY2snOiBTaG93IHRoZSB3aGVuIGRhdGUgaW4gdGhlIGNvbnRlbnQgdmlld1xyXG4gICAqICAgICAgICAgICAgICAgICAgJ2Nocm9ub21ldGVyJzogU2hvdyBhIHN0b3B3YXRjaFxyXG4gICAqXHJcbiAgICovXHJcbiAgY2xvY2s/OiBib29sZWFuIHwgc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTaG93cyBhIHByb2dyZXNzIGJhclxyXG4gICAqIFNldHRpbmcgYSBib29sZWFuIGlzIGEgc2hvcnRjdXQgZm9yIHtlbmFibGVkOiB0cnVlL2ZhbHNlfSByZXNwZWN0aXZlbHlcclxuICAgKi9cclxuICBwcm9ncmVzc0Jhcj86IElMb2NhbE5vdGlmaWNhdGlvblByb2dyZXNzQmFyIHwgYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQU5EUk9JRCBPTkxZXHJcbiAgICogSWYgbXVsdGlwbGUgbm90aWZpY2F0aW9ucyBoYXZlIHRoZSBzYW1lIGdyb3VwIHlvdXIgYXBwIGNhbiBwcmVzZW50XHJcbiAgICogdGhlbSBhcyBhIHNpbmdsZSBncm91cC5cclxuICAgKi9cclxuICBncm91cD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQU5EUk9JRCBPTkxZXHJcbiAgICogSWYgc2V0IHRvICd0cnVlJyB0aGlzIG5vdGlmaWNhdGlvbiBjb3VsZCB1c2UgJ3N1bW1hcnknIHRvIHN1bW1hcml6ZVxyXG4gICAqIHRoZSBjb250ZW50cyBvZiB0aGUgd2hvbGUgZ3JvdXBcclxuICAgKi9cclxuICBncm91cFN1bW1hcnk/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBBTkRST0lEIE9OTFlcclxuICAgKiBTdW1tYXJ5IG9mIHRoZSB3aG9sZSBub3RpZmljYXRpb24gZ3JvdXAuIFNob3VsZCBiZSB1c2VkIGluIGNvbmp1bnRpb25cclxuICAgKiB3aXRoICdncm91cFN1bW1hcnknIHNldCB0byB0cnVlXHJcbiAgICovXHJcbiAgc3VtbWFyeT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQU5EUk9JRCBPTkxZXHJcbiAgICogU2V0cyB0aGUgbnVtYmVyIG9mIGl0ZW1zIHRoaXMgbm90aWZpY2F0aW9uIHJlcHJlc2VudHMuXHJcbiAgICovXHJcbiAgbnVtYmVyPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBBTkRST0lEIE9OTFlcclxuICAgKiBTZXQgd2hldGhlciB0aGlzIGlzIGFuIFwib25nb2luZ1wiIG5vdGlmaWNhdGlvbi5cclxuICAgKiBPbmdvaW5nIG5vdGlmaWNhdGlvbnMgY2Fubm90IGJlIGRpc21pc3NlZCBieSB0aGUgdXNlcixcclxuICAgKiBzbyB5b3VyIGFwcGxpY2F0aW9uIG9yIHNlcnZpY2UgbXVzdCB0YWtlIGNhcmUgb2YgY2FuY2VsaW5nIHRoZW0uXHJcbiAgICovXHJcbiAgc3RpY2t5PzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQU5EUk9JRCBPTkxZXHJcbiAgICogTWFrZSB0aGlzIG5vdGlmaWNhdGlvbiBhdXRvbWF0aWNhbGx5IGRpc21pc3NlZCB3aGVuIHRoZSB1c2VyIHRvdWNoZXMgaXQuXHJcbiAgICovXHJcbiAgYXV0b0NsZWFyPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQU5EUk9JRCBPTkxZXHJcbiAgICogSWYgc2V0IHRvIHRydWUgdGhlIG5vdGlmaWNhdGlvbiB3aWxsIGJlIHNob3cgaW4gaXRzIGVudGlyZXR5IG9uIGFsbCBsb2Nrc2NyZWVucy5cclxuICAgKiBJZiBzZXQgdG8gZmFsc2UgaXQgd2lsbCBub3QgYmUgcmV2ZWFsZWQgb24gYSBzZWN1cmUgbG9ja3NjcmVlbi5cclxuICAgKi9cclxuICBsb2Nrc2NyZWVuPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQU5EUk9JRCBPTkxZXHJcbiAgICogU2V0IHRoZSBkZWZhdWx0IG5vdGlmaWNhdGlvbiBvcHRpb25zIHRoYXQgd2lsbCBiZSB1c2VkLlxyXG4gICAqIFRoZSB2YWx1ZSBzaG91bGQgYmUgb25lIG9yIG1vcmUgb2YgdGhlIGZvbGxvd2luZyBmaWVsZHMgY29tYmluZWQgd2l0aFxyXG4gICAqIGJpdHdpc2Utb3I6IERFRkFVTFRfU09VTkQsIERFRkFVTFRfVklCUkFURSwgREVGQVVMVF9MSUdIVFMuXHJcbiAgICovXHJcbiAgZGVmYXVsdHM/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFORFJPSUQgT05MWVxyXG4gICAqIFNwZWNpZmllcyB0aGUgY2hhbm5lbCB0aGUgbm90aWZpY2F0aW9uIHNob3VsZCBiZSBkZWxpdmVyZWQgb24uXHJcbiAgICovXHJcbiAgY2hhbm5lbD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQU5EUk9JRCBPTkxZXHJcbiAgICogU2V0IHRoZSB0b2tlbiBmb3IgdGhlIG1lZGlhIHNlc3Npb25cclxuICAgKi9cclxuICBtZWRpYVNlc3Npb24/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ha2UgdGhpcyBub3RpZmljYXRpb24gc2hvdyB3aGVuIGFwcCBpbiBmb3JlZ3JvdW5kLlxyXG4gICAqL1xyXG4gIGZvcmVncm91bmQ/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgTG9jYWwgTm90aWZpY2F0aW9uc1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBkaXNwbGF5IGxvY2FsIG5vdGlmaWNhdGlvbnMgb24gdGhlIGRldmljZVxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBMb2NhbE5vdGlmaWNhdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2xvY2FsLW5vdGlmaWNhdGlvbnMvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhbE5vdGlmaWNhdGlvbnM6IExvY2FsTm90aWZpY2F0aW9ucykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiAvLyBTY2hlZHVsZSBhIHNpbmdsZSBub3RpZmljYXRpb25cclxuICogdGhpcy5sb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoe1xyXG4gKiAgIGlkOiAxLFxyXG4gKiAgIHRleHQ6ICdTaW5nbGUgSUxvY2FsTm90aWZpY2F0aW9uJyxcclxuICogICBzb3VuZDogaXNBbmRyb2lkPyAnZmlsZTovL3NvdW5kLm1wMyc6ICdmaWxlOi8vYmVlcC5jYWYnLFxyXG4gKiAgIGRhdGE6IHsgc2VjcmV0OiBrZXkgfVxyXG4gKiB9KTtcclxuICpcclxuICpcclxuICogLy8gU2NoZWR1bGUgbXVsdGlwbGUgbm90aWZpY2F0aW9uc1xyXG4gKiB0aGlzLmxvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZShbe1xyXG4gKiAgICBpZDogMSxcclxuICogICAgdGV4dDogJ011bHRpIElMb2NhbE5vdGlmaWNhdGlvbiAxJyxcclxuICogICAgc291bmQ6IGlzQW5kcm9pZCA/ICdmaWxlOi8vc291bmQubXAzJzogJ2ZpbGU6Ly9iZWVwLmNhZicsXHJcbiAqICAgIGRhdGE6IHsgc2VjcmV0OmtleSB9XHJcbiAqICAgfSx7XHJcbiAqICAgIGlkOiAyLFxyXG4gKiAgICB0aXRsZTogJ0xvY2FsIElMb2NhbE5vdGlmaWNhdGlvbiBFeGFtcGxlJyxcclxuICogICAgdGV4dDogJ011bHRpIElMb2NhbE5vdGlmaWNhdGlvbiAyJyxcclxuICogICAgaWNvbjogJ2h0dHA6Ly9leGFtcGxlLmNvbS9pY29uLnBuZydcclxuICogfV0pO1xyXG4gKlxyXG4gKlxyXG4gKiAvLyBTY2hlZHVsZSBkZWxheWVkIG5vdGlmaWNhdGlvblxyXG4gKiB0aGlzLmxvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZSh7XHJcbiAqICAgIHRleHQ6ICdEZWxheWVkIElMb2NhbE5vdGlmaWNhdGlvbicsXHJcbiAqICAgIHRyaWdnZXI6IHthdDogbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAzNjAwKX0sXHJcbiAqICAgIGxlZDogJ0ZGMDAwMCcsXHJcbiAqICAgIHNvdW5kOiBudWxsXHJcbiAqIH0pO1xyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogSUxvY2FsTm90aWZpY2F0aW9uXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnTG9jYWxOb3RpZmljYXRpb25zJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1sb2NhbC1ub3RpZmljYXRpb24nLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5ub3RpZmljYXRpb24ubG9jYWwnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWxvY2FsLW5vdGlmaWNhdGlvbnMnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvY2FsTm90aWZpY2F0aW9ucyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBJbmZvcm1zIGlmIHRoZSBhcHAgaGFzIHRoZSBwZXJtaXNzaW9uIHRvIHNob3cgbm90aWZpY2F0aW9ucy5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvbiB0byBzaG93IG5vdGlmaWNhdGlvbnMgaWYgbm90IGFscmVhZHkgZ3JhbnRlZC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTY2hlZHVsZXMgYSBzaW5nbGUgb3IgbXVsdGlwbGUgbm90aWZpY2F0aW9uc1xyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtOb3RpZmljYXRpb24gfCBJTG9jYWxOb3RpZmljYXRpb25bXX0gb3B0aW9uYWxcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgc2NoZWR1bGUob3B0aW9ucz86IElMb2NhbE5vdGlmaWNhdGlvbiB8IElMb2NhbE5vdGlmaWNhdGlvbltdKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIGEgcHJldmlvdXNseSBzY2hlZHVsZWQgbm90aWZpY2F0aW9uLiBNdXN0IGluY2x1ZGUgdGhlIGlkIGluIHRoZSBvcHRpb25zIHBhcmFtZXRlci5cclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SUxvY2FsTm90aWZpY2F0aW9ufSBvcHRpb25hbFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICB1cGRhdGUob3B0aW9ucz86IElMb2NhbE5vdGlmaWNhdGlvbik6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXJzIHNpbmdsZSBvciBtdWx0aXBsZSBub3RpZmljYXRpb25zXHJcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbklkIHthbnl9IEEgc2luZ2xlIG5vdGlmaWNhdGlvbiBpZCwgb3IgYW4gYXJyYXkgb2Ygbm90aWZpY2F0aW9uIGlkcy5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aGVuIHRoZSBub3RpZmljYXRpb24gaGFkIGJlZW4gY2xlYXJlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjbGVhcihub3RpZmljYXRpb25JZDogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFycyBhbGwgbm90aWZpY2F0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdoZW4gYWxsIG5vdGlmaWNhdGlvbnMgaGF2ZSBjbGVhcmVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNsZWFyQWxsKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYW5jZWxzIHNpbmdsZSBvciBtdWx0aXBsZSBub3RpZmljYXRpb25zXHJcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbklkIHthbnl9IEEgc2luZ2xlIG5vdGlmaWNhdGlvbiBpZCwgb3IgYW4gYXJyYXkgb2Ygbm90aWZpY2F0aW9uIGlkcy5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aGVuIHRoZSBub3RpZmljYXRpb24gaXMgY2FuY2VsZWRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2FuY2VsKG5vdGlmaWNhdGlvbklkOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FuY2VscyBhbGwgbm90aWZpY2F0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdoZW4gYWxsIG5vdGlmaWNhdGlvbnMgYXJlIGNhbmNlbGVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNhbmNlbEFsbCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHByZXNlbmNlIG9mIGEgbm90aWZpY2F0aW9uXHJcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbklkIHtudW1iZXJ9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzUHJlc2VudChub3RpZmljYXRpb25JZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaXMgYSBub3RpZmljYXRpb24gaXMgc2NoZWR1bGVkXHJcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbklkIHtudW1iZXJ9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzU2NoZWR1bGVkKG5vdGlmaWNhdGlvbklkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhIG5vdGlmaWNhdGlvbiBpcyB0cmlnZ2VyZWRcclxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uSWQge251bWJlcn1cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaXNUcmlnZ2VyZWQobm90aWZpY2F0aW9uSWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBub3RpZmljYXRpb24gaGFzIGEgZ2l2ZW4gdHlwZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgVGhlIElEIG9mIHRoZSBub3RpZmljYXRpb24uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgIFRoZSB0eXBlIG9mIHRoZSBub3RpZmljYXRpb24uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGhhc1R5cGUoaWQ6IG51bWJlciwgdHlwZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIHR5cGUgKHRyaWdnZXJlZCwgc2NoZWR1bGVkKSBmb3IgdGhlIG5vdGlmaWNhdGlvbi5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgVGhlIElEIG9mIHRoZSBub3RpZmljYXRpb24uXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFR5cGUoaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGFsbCB0aGUgbm90aWZpY2F0aW9uIGlkc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PG51bWJlcj4+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRJZHMoKTogUHJvbWlzZTxudW1iZXJbXT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBpZHMgb2Ygc2NoZWR1bGVkIG5vdGlmaWNhdGlvbnNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXJbXT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFNjaGVkdWxlZElkcygpOiBQcm9taXNlPG51bWJlcltdPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGlkcyBvZiB0cmlnZ2VyZWQgbm90aWZpY2F0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PG51bWJlcj4+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRUcmlnZ2VyZWRJZHMoKTogUHJvbWlzZTxudW1iZXJbXT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgbm90aWZpY2F0aW9uIG9iamVjdFxyXG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25JZCB7YW55fSBUaGUgaWQgb2YgdGhlIG5vdGlmaWNhdGlvbiB0byBnZXRcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJTG9jYWxOb3RpZmljYXRpb24+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXQobm90aWZpY2F0aW9uSWQ6IGFueSk6IFByb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYWxsIG5vdGlmaWNhdGlvbiBvYmplY3RzXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uW10+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRBbGwoKTogUHJvbWlzZTxJTG9jYWxOb3RpZmljYXRpb25bXT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgc2NoZWR1bGVkIG5vdGlmaWNhdGlvbiBvYmplY3RcclxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uSWQge2FueX0gVGhlIGlkIG9mIHRoZSBub3RpZmljYXRpb24gdG8gZ2V0XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0U2NoZWR1bGVkKG5vdGlmaWNhdGlvbklkOiBhbnkpOiBQcm9taXNlPElMb2NhbE5vdGlmaWNhdGlvbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgdHJpZ2dlcmVkIG5vdGlmaWNhdGlvbiBvYmplY3RcclxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uSWQgVGhlIGlkIG9mIHRoZSBub3RpZmljYXRpb24gdG8gZ2V0XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0VHJpZ2dlcmVkKG5vdGlmaWNhdGlvbklkOiBhbnkpOiBQcm9taXNlPElMb2NhbE5vdGlmaWNhdGlvbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIGdyb3VwIG9mIGFjdGlvbnNcclxuICAgKiBAcGFyYW0gZ3JvdXBJZCBUaGUgaWQgb2YgdGhlIGFjdGlvbiBncm91cFxyXG4gICAqIEBwYXJhbSBhY3Rpb25zIFRoZSBhY3Rpb25zIG9mIHRoaXMgZ3JvdXBcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBhZGRBY3Rpb25zKGdyb3VwSWQ6IGFueSwgYWN0aW9uczogSUxvY2FsTm90aWZpY2F0aW9uQWN0aW9uW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhIGdyb3VwIG9mIGFjdGlvbnNcclxuICAgKiBAcGFyYW0gZ3JvdXBJZCBUaGUgaWQgb2YgdGhlIGFjdGlvbiBncm91cFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlbW92ZUFjdGlvbnMoZ3JvdXBJZDogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhIGdyb3VwIG9mIGFjdGlvbnMgaXMgZGVmaW5lZFxyXG4gICAqIEBwYXJhbSBncm91cElkIFRoZSBpZCBvZiB0aGUgYWN0aW9uIGdyb3VwXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFdoZXRoZXIgdGhlIGdyb3VwIGlzIGRlZmluZWRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaGFzQWN0aW9ucyhncm91cElkOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIChwbGF0Zm9ybSBzcGVjaWZpYykgZGVmYXVsdCBzZXR0aW5ncy5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBBbiBvYmplY3Qgd2l0aCBhbGwgZGVmYXVsdCBzZXR0aW5nc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBnZXREZWZhdWx0cygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3ZlcndyaXRlcyB0aGUgKHBsYXRmb3JtIHNwZWNpZmljKSBkZWZhdWx0IHNldHRpbmdzLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIHNldERlZmF1bHRzKGRlZmF1bHRzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGFsbCBzY2hlZHVsZWQgbm90aWZpY2F0aW9uIG9iamVjdHNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheTxJTG9jYWxOb3RpZmljYXRpb24+Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0QWxsU2NoZWR1bGVkKCk6IFByb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uW10+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhbGwgdHJpZ2dlcmVkIG5vdGlmaWNhdGlvbiBvYmplY3RzXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8SUxvY2FsTm90aWZpY2F0aW9uPj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEFsbFRyaWdnZXJlZCgpOiBQcm9taXNlPElMb2NhbE5vdGlmaWNhdGlvbltdPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGEgY2FsbGJhY2sgZm9yIGEgc3BlY2lmaWMgZXZlbnRcclxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBldmVudC4gQXZhaWxhYmxlIGV2ZW50czogc2NoZWR1bGUsIHRyaWdnZXIsIGNsaWNrLCB1cGRhdGUsIGNsZWFyLCBjbGVhcmFsbCwgY2FuY2VsLCBjYW5jZWxhbGwuIEN1c3RvbSBldmVudCBuYW1lcyBhcmUgcG9zc2libGUgZm9yIGFjdGlvbnNcclxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAndW4nLFxyXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZSxcclxuICB9KVxyXG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE5vdCBhbiBvZmZpY2lhbCBpbnRlcmZhY2UsIGhvd2V2ZXIgaXRzIHBvc3NpYmxlIHRvIG1hbnVhbGx5IGZpcmUgZXZlbnRzLlxyXG4gICAqIEBwYXJhbSBldmVudE5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50LiBBdmFpbGFibGUgZXZlbnRzOiBzY2hlZHVsZSwgdHJpZ2dlciwgY2xpY2ssIHVwZGF0ZSwgY2xlYXIsIGNsZWFyYWxsLCBjYW5jZWwsIGNhbmNlbGFsbC4gQ3VzdG9tIGV2ZW50IG5hbWVzIGFyZSBwb3NzaWJsZSBmb3IgYWN0aW9uc1xyXG4gICAqIEBwYXJhbSBhcmdzIE9wdGlvbmFsIGFyZ3VtZW50c1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBmaXJlRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueSk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZSBxdWV1ZWQgZXZlbnRzIG9uY2UgdGhlIGRldmljZSBpcyByZWFkeSBhbmQgYWxsIGxpc3RlbmVycyBhcmUgcmVnaXN0ZXJlZC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBmaXJlUXVldWVkRXZlbnRzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==