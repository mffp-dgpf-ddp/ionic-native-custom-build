import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AndroidPermissions = /** @class */ (function (_super) {
    __extends(AndroidPermissions, _super);
    function AndroidPermissions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PERMISSION = {
            ACCESS_CHECKIN_PROPERTIES: 'android.permission.ACCESS_CHECKIN_PROPERTIES',
            ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION',
            ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION',
            ACCESS_LOCATION_EXTRA_COMMANDS: 'android.permission.ACCESS_LOCATION_EXTRA_COMMANDS',
            ACCESS_MOCK_LOCATION: 'android.permission.ACCESS_MOCK_LOCATION',
            ACCESS_NETWORK_STATE: 'android.permission.ACCESS_NETWORK_STATE',
            ACCESS_SURFACE_FLINGER: 'android.permission.ACCESS_SURFACE_FLINGER',
            ACCESS_WIFI_STATE: 'android.permission.ACCESS_WIFI_STATE',
            ACCOUNT_MANAGER: 'android.permission.ACCOUNT_MANAGER',
            ADD_VOICEMAIL: 'com.android.voicemail.permission.ADD_VOICEMAIL',
            AUTHENTICATE_ACCOUNTS: 'android.permission.AUTHENTICATE_ACCOUNTS',
            BATTERY_STATS: 'android.permission.BATTERY_STATS',
            BIND_ACCESSIBILITY_SERVICE: 'android.permission.BIND_ACCESSIBILITY_SERVICE',
            BIND_APPWIDGET: 'android.permission.BIND_APPWIDGET',
            BIND_CARRIER_MESSAGING_SERVICE: 'android.permission.BIND_CARRIER_MESSAGING_SERVICE',
            BIND_DEVICE_ADMIN: 'android.permission.BIND_DEVICE_ADMIN',
            BIND_DREAM_SERVICE: 'android.permission.BIND_DREAM_SERVICE',
            BIND_INPUT_METHOD: 'android.permission.BIND_INPUT_METHOD',
            BIND_NFC_SERVICE: 'android.permission.BIND_NFC_SERVICE',
            BIND_NOTIFICATION_LISTENER_SERVICE: 'android.permission.BIND_NOTIFICATION_LISTENER_SERVICE',
            BIND_PRINT_SERVICE: 'android.permission.BIND_PRINT_SERVICE',
            BIND_REMOTEVIEWS: 'android.permission.BIND_REMOTEVIEWS',
            BIND_TEXT_SERVICE: 'android.permission.BIND_TEXT_SERVICE',
            BIND_TV_INPUT: 'android.permission.BIND_TV_INPUT',
            BIND_VOICE_INTERACTION: 'android.permission.BIND_VOICE_INTERACTION',
            BIND_VPN_SERVICE: 'android.permission.BIND_VPN_SERVICE',
            BIND_WALLPAPER: 'android.permission.BIND_WALLPAPER',
            BLUETOOTH: 'android.permission.BLUETOOTH',
            BLUETOOTH_ADMIN: 'android.permission.BLUETOOTH_ADMIN',
            BLUETOOTH_PRIVILEGED: 'android.permission.BLUETOOTH_PRIVILEGED',
            BODY_SENSORS: 'android.permission.BODY_SENSORS',
            BRICK: 'android.permission.BRICK',
            BROADCAST_PACKAGE_REMOVED: 'android.permission.BROADCAST_PACKAGE_REMOVED',
            BROADCAST_SMS: 'android.permission.BROADCAST_SMS',
            BROADCAST_STICKY: 'android.permission.BROADCAST_STICKY',
            BROADCAST_WAP_PUSH: 'android.permission.BROADCAST_WAP_PUSH',
            CALL_PHONE: 'android.permission.CALL_PHONE',
            CALL_PRIVILEGED: 'android.permission.CALL_PRIVILEGED',
            CAMERA: 'android.permission.CAMERA',
            CAPTURE_AUDIO_OUTPUT: 'android.permission.CAPTURE_AUDIO_OUTPUT',
            CAPTURE_SECURE_VIDEO_OUTPUT: 'android.permission.CAPTURE_SECURE_VIDEO_OUTPUT',
            CAPTURE_VIDEO_OUTPUT: 'android.permission.CAPTURE_VIDEO_OUTPUT',
            CHANGE_COMPONENT_ENABLED_STATE: 'android.permission.CHANGE_COMPONENT_ENABLED_STATE',
            CHANGE_CONFIGURATION: 'android.permission.CHANGE_CONFIGURATION',
            CHANGE_NETWORK_STATE: 'android.permission.CHANGE_NETWORK_STATE',
            CHANGE_WIFI_MULTICAST_STATE: 'android.permission.CHANGE_WIFI_MULTICAST_STATE',
            CHANGE_WIFI_STATE: 'android.permission.CHANGE_WIFI_STATE',
            CLEAR_APP_CACHE: 'android.permission.CLEAR_APP_CACHE',
            CLEAR_APP_USER_DATA: 'android.permission.CLEAR_APP_USER_DATA',
            CONTROL_LOCATION_UPDATES: 'android.permission.CONTROL_LOCATION_UPDATES',
            DELETE_CACHE_FILES: 'android.permission.DELETE_CACHE_FILES',
            DELETE_PACKAGES: 'android.permission.DELETE_PACKAGES',
            DEVICE_POWER: 'android.permission.DEVICE_POWER',
            DIAGNOSTIC: 'android.permission.DIAGNOSTIC',
            DISABLE_KEYGUARD: 'android.permission.DISABLE_KEYGUARD',
            DUMP: 'android.permission.DUMP',
            EXPAND_STATUS_BAR: 'android.permission.EXPAND_STATUS_BAR',
            FACTORY_TEST: 'android.permission.FACTORY_TEST',
            FLASHLIGHT: 'android.permission.FLASHLIGHT',
            FORCE_BACK: 'android.permission.FORCE_BACK',
            GET_ACCOUNTS: 'android.permission.GET_ACCOUNTS',
            GET_PACKAGE_SIZE: 'android.permission.GET_PACKAGE_SIZE',
            GET_TASKS: 'android.permission.GET_TASKS',
            GET_TOP_ACTIVITY_INFO: 'android.permission.GET_TOP_ACTIVITY_INFO',
            GLOBAL_SEARCH: 'android.permission.GLOBAL_SEARCH',
            HARDWARE_TEST: 'android.permission.HARDWARE_TEST',
            INJECT_EVENTS: 'android.permission.INJECT_EVENTS',
            INSTALL_LOCATION_PROVIDER: 'android.permission.INSTALL_LOCATION_PROVIDER',
            INSTALL_PACKAGES: 'android.permission.INSTALL_PACKAGES',
            INSTALL_SHORTCUT: 'com.android.launcher.permission.INSTALL_SHORTCUT',
            INTERNAL_SYSTEM_WINDOW: 'android.permission.INTERNAL_SYSTEM_WINDOW',
            INTERNET: 'android.permission.INTERNET',
            KILL_BACKGROUND_PROCESSES: 'android.permission.KILL_BACKGROUND_PROCESSES',
            LOCATION_HARDWARE: 'android.permission.LOCATION_HARDWARE',
            MANAGE_ACCOUNTS: 'android.permission.MANAGE_ACCOUNTS',
            MANAGE_APP_TOKENS: 'android.permission.MANAGE_APP_TOKENS',
            MANAGE_DOCUMENTS: 'android.permission.MANAGE_DOCUMENTS',
            MASTER_CLEAR: 'android.permission.MASTER_CLEAR',
            MEDIA_CONTENT_CONTROL: 'android.permission.MEDIA_CONTENT_CONTROL',
            MODIFY_AUDIO_SETTINGS: 'android.permission.MODIFY_AUDIO_SETTINGS',
            MODIFY_PHONE_STATE: 'android.permission.MODIFY_PHONE_STATE',
            MOUNT_FORMAT_FILESYSTEMS: 'android.permission.MOUNT_FORMAT_FILESYSTEMS',
            MOUNT_UNMOUNT_FILESYSTEMS: 'android.permission.MOUNT_UNMOUNT_FILESYSTEMS',
            NFC: 'android.permission.NFC',
            PERSISTENT_ACTIVITY: 'android.permission.PERSISTENT_ACTIVITY',
            PROCESS_OUTGOING_CALLS: 'android.permission.PROCESS_OUTGOING_CALLS',
            READ_CALENDAR: 'android.permission.READ_CALENDAR',
            READ_CALL_LOG: 'android.permission.READ_CALL_LOG',
            READ_CONTACTS: 'android.permission.READ_CONTACTS',
            READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE',
            READ_FRAME_BUFFER: 'android.permission.READ_FRAME_BUFFER',
            READ_HISTORY_BOOKMARKS: 'com.android.browser.permission.READ_HISTORY_BOOKMARKS',
            READ_INPUT_STATE: 'android.permission.READ_INPUT_STATE',
            READ_LOGS: 'android.permission.READ_LOGS',
            READ_PHONE_STATE: 'android.permission.READ_PHONE_STATE',
            READ_PROFILE: 'android.permission.READ_PROFILE',
            READ_SMS: 'android.permission.READ_SMS',
            READ_SOCIAL_STREAM: 'android.permission.READ_SOCIAL_STREAM',
            READ_SYNC_SETTINGS: 'android.permission.READ_SYNC_SETTINGS',
            READ_SYNC_STATS: 'android.permission.READ_SYNC_STATS',
            READ_USER_DICTIONARY: 'android.permission.READ_USER_DICTIONARY',
            READ_VOICEMAIL: 'com.android.voicemail.permission.READ_VOICEMAIL',
            REBOOT: 'android.permission.REBOOT',
            RECEIVE_BOOT_COMPLETED: 'android.permission.RECEIVE_BOOT_COMPLETED',
            RECEIVE_MMS: 'android.permission.RECEIVE_MMS',
            RECEIVE_SMS: 'android.permission.RECEIVE_SMS',
            RECEIVE_WAP_PUSH: 'android.permission.RECEIVE_WAP_PUSH',
            RECORD_AUDIO: 'android.permission.RECORD_AUDIO',
            REORDER_TASKS: 'android.permission.REORDER_TASKS',
            RESTART_PACKAGES: 'android.permission.RESTART_PACKAGES',
            SEND_RESPOND_VIA_MESSAGE: 'android.permission.SEND_RESPOND_VIA_MESSAGE',
            SEND_SMS: 'android.permission.SEND_SMS',
            SET_ACTIVITY_WATCHER: 'android.permission.SET_ACTIVITY_WATCHER',
            SET_ALARM: 'com.android.alarm.permission.SET_ALARM',
            SET_ALWAYS_FINISH: 'android.permission.SET_ALWAYS_FINISH',
            SET_ANIMATION_SCALE: 'android.permission.SET_ANIMATION_SCALE',
            SET_DEBUG_APP: 'android.permission.SET_DEBUG_APP',
            SET_ORIENTATION: 'android.permission.SET_ORIENTATION',
            SET_POINTER_SPEED: 'android.permission.SET_POINTER_SPEED',
            SET_PREFERRED_APPLICATIONS: 'android.permission.SET_PREFERRED_APPLICATIONS',
            SET_PROCESS_LIMIT: 'android.permission.SET_PROCESS_LIMIT',
            SET_TIME: 'android.permission.SET_TIME',
            SET_TIME_ZONE: 'android.permission.SET_TIME_ZONE',
            SET_WALLPAPER: 'android.permission.SET_WALLPAPER',
            SET_WALLPAPER_HINTS: 'android.permission.SET_WALLPAPER_HINTS',
            SIGNAL_PERSISTENT_PROCESSES: 'android.permission.SIGNAL_PERSISTENT_PROCESSES',
            STATUS_BAR: 'android.permission.STATUS_BAR',
            SUBSCRIBED_FEEDS_READ: 'android.permission.SUBSCRIBED_FEEDS_READ',
            SUBSCRIBED_FEEDS_WRITE: 'android.permission.SUBSCRIBED_FEEDS_WRITE',
            SYSTEM_ALERT_WINDOW: 'android.permission.SYSTEM_ALERT_WINDOW',
            TRANSMIT_IR: 'android.permission.TRANSMIT_IR',
            UNINSTALL_SHORTCUT: 'com.android.launcher.permission.UNINSTALL_SHORTCUT',
            UPDATE_DEVICE_STATS: 'android.permission.UPDATE_DEVICE_STATS',
            USE_CREDENTIALS: 'android.permission.USE_CREDENTIALS',
            USE_SIP: 'android.permission.USE_SIP',
            VIBRATE: 'android.permission.VIBRATE',
            WAKE_LOCK: 'android.permission.WAKE_LOCK',
            WRITE_APN_SETTINGS: 'android.permission.WRITE_APN_SETTINGS',
            WRITE_CALENDAR: 'android.permission.WRITE_CALENDAR',
            WRITE_CALL_LOG: 'android.permission.WRITE_CALL_LOG',
            WRITE_CONTACTS: 'android.permission.WRITE_CONTACTS',
            WRITE_EXTERNAL_STORAGE: 'android.permission.WRITE_EXTERNAL_STORAGE',
            WRITE_GSERVICES: 'android.permission.WRITE_GSERVICES',
            WRITE_HISTORY_BOOKMARKS: 'com.android.browser.permission.WRITE_HISTORY_BOOKMARKS',
            WRITE_PROFILE: 'android.permission.WRITE_PROFILE',
            WRITE_SECURE_SETTINGS: 'android.permission.WRITE_SECURE_SETTINGS',
            WRITE_SETTINGS: 'android.permission.WRITE_SETTINGS',
            WRITE_SMS: 'android.permission.WRITE_SMS',
            WRITE_SOCIAL_STREAM: 'android.permission.WRITE_SOCIAL_STREAM',
            WRITE_SYNC_SETTINGS: 'android.permission.WRITE_SYNC_SETTINGS',
            WRITE_USER_DICTIONARY: 'android.permission.WRITE_USER_DICTIONARY',
            WRITE_VOICEMAIL: 'com.android.voicemail.permission.WRITE_VOICEMAIL',
        };
        return _this;
    }
    AndroidPermissions.prototype.checkPermission = function (permission) { return cordova(this, "checkPermission", {}, arguments); };
    AndroidPermissions.prototype.requestPermission = function (permission) { return cordova(this, "requestPermission", {}, arguments); };
    AndroidPermissions.prototype.requestPermissions = function (permissions) { return cordova(this, "requestPermissions", {}, arguments); };
    AndroidPermissions.prototype.hasPermission = function (permission) { return cordova(this, "hasPermission", {}, arguments); };
    AndroidPermissions.pluginName = "AndroidPermissions";
    AndroidPermissions.plugin = "cordova-plugin-android-permissions";
    AndroidPermissions.pluginRef = "cordova.plugins.permissions";
    AndroidPermissions.repo = "https://github.com/NeoLSN/cordova-plugin-android-permissions";
    AndroidPermissions.platforms = ["Android"];
    AndroidPermissions = __decorate([
        Injectable()
    ], AndroidPermissions);
    return AndroidPermissions;
}(IonicNativePlugin));
export { AndroidPermissions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FuZHJvaWQtcGVybWlzc2lvbnMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBc0NoQyxzQ0FBaUI7OztRQUN2RCxnQkFBVSxHQUFRO1lBQ2hCLHlCQUF5QixFQUFFLDhDQUE4QztZQUN6RSxzQkFBc0IsRUFBRSwyQ0FBMkM7WUFDbkUsb0JBQW9CLEVBQUUseUNBQXlDO1lBQy9ELDhCQUE4QixFQUFFLG1EQUFtRDtZQUNuRixvQkFBb0IsRUFBRSx5Q0FBeUM7WUFDL0Qsb0JBQW9CLEVBQUUseUNBQXlDO1lBQy9ELHNCQUFzQixFQUFFLDJDQUEyQztZQUNuRSxpQkFBaUIsRUFBRSxzQ0FBc0M7WUFDekQsZUFBZSxFQUFFLG9DQUFvQztZQUNyRCxhQUFhLEVBQUUsZ0RBQWdEO1lBQy9ELHFCQUFxQixFQUFFLDBDQUEwQztZQUNqRSxhQUFhLEVBQUUsa0NBQWtDO1lBQ2pELDBCQUEwQixFQUFFLCtDQUErQztZQUMzRSxjQUFjLEVBQUUsbUNBQW1DO1lBQ25ELDhCQUE4QixFQUFFLG1EQUFtRDtZQUNuRixpQkFBaUIsRUFBRSxzQ0FBc0M7WUFDekQsa0JBQWtCLEVBQUUsdUNBQXVDO1lBQzNELGlCQUFpQixFQUFFLHNDQUFzQztZQUN6RCxnQkFBZ0IsRUFBRSxxQ0FBcUM7WUFDdkQsa0NBQWtDLEVBQUUsdURBQXVEO1lBQzNGLGtCQUFrQixFQUFFLHVDQUF1QztZQUMzRCxnQkFBZ0IsRUFBRSxxQ0FBcUM7WUFDdkQsaUJBQWlCLEVBQUUsc0NBQXNDO1lBQ3pELGFBQWEsRUFBRSxrQ0FBa0M7WUFDakQsc0JBQXNCLEVBQUUsMkNBQTJDO1lBQ25FLGdCQUFnQixFQUFF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QXVDO1lBQzNELGNBQWMsRUFBRSxtQ0FBbUM7WUFDbkQsY0FBYyxFQUFFLG1DQUFtQztZQUNuRCxjQUFjLEVBQUUsbUNBQW1DO1lBQ25ELHNCQUFzQixFQUFFLDJDQUEyQztZQUNuRSxlQUFlLEVBQUUsb0NBQW9DO1lBQ3JELHVCQUF1QixFQUFFLHdEQUF3RDtZQUNqRixhQUFhLEVBQUUsa0NBQWtDO1lBQ2pELHFCQUFxQixFQUFFLDBDQUEwQztZQUNqRSxjQUFjLEVBQUUsbUNBQW1DO1lBQ25ELFNBQVMsRUFBRSw4QkFBOEI7WUFDekMsbUJBQW1CLEVBQUUsd0NBQXdDO1lBQzdELG1CQUFtQixFQUFFLHdDQUF3QztZQUM3RCxxQkFBcUIsRUFBRSwwQ0FBMEM7WUFDakUsZUFBZSxFQUFFLGtEQUFrRDtTQUNwRSxDQUFDOzs7SUFRRiw0Q0FBZSxhQUFDLFVBQWtCO0lBVWxDLDhDQUFpQixhQUFDLFVBQWtCO0lBVXBDLCtDQUFrQixhQUFDLFdBQXFCO0lBVXhDLDBDQUFhLGFBQUMsVUFBa0I7Ozs7OztJQWhNckIsa0JBQWtCO1FBRDlCLFVBQVUsRUFBRTtPQUNBLGtCQUFrQjs2QkF2Qy9CO0VBdUN3QyxpQkFBaUI7U0FBNUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBBbmRyb2lkIFBlcm1pc3Npb25zXHJcbiAqIEBwcmVtaWVyIGFuZHJvaWQtcGVybWlzc2lvbnNcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGlzIGRlc2lnbmVkIHRvIHN1cHBvcnQgQW5kcm9pZCBuZXcgcGVybWlzc2lvbnMgY2hlY2tpbmcgbWVjaGFuaXNtLlxyXG4gKlxyXG4gKiBZb3UgY2FuIGZpbmQgYWxsIHBlcm1pc3Npb25zIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL3JlZmVyZW5jZS9hbmRyb2lkL01hbmlmZXN0LnBlcm1pc3Npb24uaHRtbFxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgXHJcbiAqIGltcG9ydCB7IEFuZHJvaWRQZXJtaXNzaW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYW5kcm9pZC1wZXJtaXNzaW9ucy9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZHJvaWRQZXJtaXNzaW9uczogQW5kcm9pZFBlcm1pc3Npb25zKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLmNoZWNrUGVybWlzc2lvbih0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkNBTUVSQSkudGhlbihcclxuICogICByZXN1bHQgPT4gY29uc29sZS5sb2coJ0hhcyBwZXJtaXNzaW9uPycscmVzdWx0Lmhhc1Blcm1pc3Npb24pLFxyXG4gKiAgIGVyciA9PiB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbih0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkNBTUVSQSlcclxuICogKTtcclxuICpcclxuICogdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb25zKFt0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkNBTUVSQSwgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5HRVRfQUNDT1VOVFNdKTtcclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqIEFuZHJvaWQgMjYgYW5kIGFib3ZlOiBkdWUgdG8gQW5kcm9pZCAyNidzIGNoYW5nZXMgdG8gcGVybWlzc2lvbnMgaGFuZGxpbmcgKHBlcm1pc3Npb25zIGFyZSByZXF1ZXN0ZWQgYXQgdGltZSBvZiB1c2UgcmF0aGVyIHRoYW4gYXQgcnVudGltZSwpIGlmIHlvdXIgYXBwIGRvZXMgbm90IGluY2x1ZGUgYW55IGZ1bmN0aW9ucyAoZWcuIG90aGVyIElvbmljIE5hdGl2ZSBwbHVnaW5zKSB0aGF0IHV0aWxpemUgYSBwYXJ0aWN1bGFyIHBlcm1pc3Npb24sIHRoZW4gYHJlcXVlc3RQZXJtaXNzaW9uKClgIGFuZCBgcmVxdWVzdFBlcm1pc3Npb25zKClgIHdpbGwgcmVzb2x2ZSBpbW1lZGlhdGVseSB3aXRoIG5vIHByb21wdCBzaG93biB0byB0aGUgdXNlci4gIFRodXMsIHlvdSBtdXN0IGluY2x1ZGUgYSBmdW5jdGlvbiB1dGlsaXppbmcgdGhlIGZlYXR1cmUgeW91IHdvdWxkIGxpa2UgdG8gdXNlIGJlZm9yZSByZXF1ZXN0aW5nIHBlcm1pc3Npb24gZm9yIGl0LlxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0FuZHJvaWRQZXJtaXNzaW9ucycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYW5kcm9pZC1wZXJtaXNzaW9ucycsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLnBlcm1pc3Npb25zJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL05lb0xTTi9jb3Jkb3ZhLXBsdWdpbi1hbmRyb2lkLXBlcm1pc3Npb25zJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbmRyb2lkUGVybWlzc2lvbnMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgUEVSTUlTU0lPTjogYW55ID0ge1xyXG4gICAgQUNDRVNTX0NIRUNLSU5fUFJPUEVSVElFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfQ0hFQ0tJTl9QUk9QRVJUSUVTJyxcclxuICAgIEFDQ0VTU19DT0FSU0VfTE9DQVRJT046ICdhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX0NPQVJTRV9MT0NBVElPTicsXHJcbiAgICBBQ0NFU1NfRklORV9MT0NBVElPTjogJ2FuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfRklORV9MT0NBVElPTicsXHJcbiAgICBBQ0NFU1NfTE9DQVRJT05fRVhUUkFfQ09NTUFORFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX0xPQ0FUSU9OX0VYVFJBX0NPTU1BTkRTJyxcclxuICAgIEFDQ0VTU19NT0NLX0xPQ0FUSU9OOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19NT0NLX0xPQ0FUSU9OJyxcclxuICAgIEFDQ0VTU19ORVRXT1JLX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19ORVRXT1JLX1NUQVRFJyxcclxuICAgIEFDQ0VTU19TVVJGQUNFX0ZMSU5HRVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX1NVUkZBQ0VfRkxJTkdFUicsXHJcbiAgICBBQ0NFU1NfV0lGSV9TVEFURTogJ2FuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfV0lGSV9TVEFURScsXHJcbiAgICBBQ0NPVU5UX01BTkFHRVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uQUNDT1VOVF9NQU5BR0VSJyxcclxuICAgIEFERF9WT0lDRU1BSUw6ICdjb20uYW5kcm9pZC52b2ljZW1haWwucGVybWlzc2lvbi5BRERfVk9JQ0VNQUlMJyxcclxuICAgIEFVVEhFTlRJQ0FURV9BQ0NPVU5UUzogJ2FuZHJvaWQucGVybWlzc2lvbi5BVVRIRU5USUNBVEVfQUNDT1VOVFMnLFxyXG4gICAgQkFUVEVSWV9TVEFUUzogJ2FuZHJvaWQucGVybWlzc2lvbi5CQVRURVJZX1NUQVRTJyxcclxuICAgIEJJTkRfQUNDRVNTSUJJTElUWV9TRVJWSUNFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfQUNDRVNTSUJJTElUWV9TRVJWSUNFJyxcclxuICAgIEJJTkRfQVBQV0lER0VUOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfQVBQV0lER0VUJyxcclxuICAgIEJJTkRfQ0FSUklFUl9NRVNTQUdJTkdfU0VSVklDRTogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX0NBUlJJRVJfTUVTU0FHSU5HX1NFUlZJQ0UnLFxyXG4gICAgQklORF9ERVZJQ0VfQURNSU46ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9ERVZJQ0VfQURNSU4nLFxyXG4gICAgQklORF9EUkVBTV9TRVJWSUNFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfRFJFQU1fU0VSVklDRScsXHJcbiAgICBCSU5EX0lOUFVUX01FVEhPRDogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX0lOUFVUX01FVEhPRCcsXHJcbiAgICBCSU5EX05GQ19TRVJWSUNFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfTkZDX1NFUlZJQ0UnLFxyXG4gICAgQklORF9OT1RJRklDQVRJT05fTElTVEVORVJfU0VSVklDRTogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX05PVElGSUNBVElPTl9MSVNURU5FUl9TRVJWSUNFJyxcclxuICAgIEJJTkRfUFJJTlRfU0VSVklDRTogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX1BSSU5UX1NFUlZJQ0UnLFxyXG4gICAgQklORF9SRU1PVEVWSUVXUzogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX1JFTU9URVZJRVdTJyxcclxuICAgIEJJTkRfVEVYVF9TRVJWSUNFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfVEVYVF9TRVJWSUNFJyxcclxuICAgIEJJTkRfVFZfSU5QVVQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9UVl9JTlBVVCcsXHJcbiAgICBCSU5EX1ZPSUNFX0lOVEVSQUNUSU9OOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfVk9JQ0VfSU5URVJBQ1RJT04nLFxyXG4gICAgQklORF9WUE5fU0VSVklDRTogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX1ZQTl9TRVJWSUNFJyxcclxuICAgIEJJTkRfV0FMTFBBUEVSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfV0FMTFBBUEVSJyxcclxuICAgIEJMVUVUT09USDogJ2FuZHJvaWQucGVybWlzc2lvbi5CTFVFVE9PVEgnLFxyXG4gICAgQkxVRVRPT1RIX0FETUlOOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJMVUVUT09USF9BRE1JTicsXHJcbiAgICBCTFVFVE9PVEhfUFJJVklMRUdFRDogJ2FuZHJvaWQucGVybWlzc2lvbi5CTFVFVE9PVEhfUFJJVklMRUdFRCcsXHJcbiAgICBCT0RZX1NFTlNPUlM6ICdhbmRyb2lkLnBlcm1pc3Npb24uQk9EWV9TRU5TT1JTJyxcclxuICAgIEJSSUNLOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJSSUNLJyxcclxuICAgIEJST0FEQ0FTVF9QQUNLQUdFX1JFTU9WRUQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uQlJPQURDQVNUX1BBQ0tBR0VfUkVNT1ZFRCcsXHJcbiAgICBCUk9BRENBU1RfU01TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJST0FEQ0FTVF9TTVMnLFxyXG4gICAgQlJPQURDQVNUX1NUSUNLWTogJ2FuZHJvaWQucGVybWlzc2lvbi5CUk9BRENBU1RfU1RJQ0tZJyxcclxuICAgIEJST0FEQ0FTVF9XQVBfUFVTSDogJ2FuZHJvaWQucGVybWlzc2lvbi5CUk9BRENBU1RfV0FQX1BVU0gnLFxyXG4gICAgQ0FMTF9QSE9ORTogJ2FuZHJvaWQucGVybWlzc2lvbi5DQUxMX1BIT05FJyxcclxuICAgIENBTExfUFJJVklMRUdFRDogJ2FuZHJvaWQucGVybWlzc2lvbi5DQUxMX1BSSVZJTEVHRUQnLFxyXG4gICAgQ0FNRVJBOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNBTUVSQScsXHJcbiAgICBDQVBUVVJFX0FVRElPX09VVFBVVDogJ2FuZHJvaWQucGVybWlzc2lvbi5DQVBUVVJFX0FVRElPX09VVFBVVCcsXHJcbiAgICBDQVBUVVJFX1NFQ1VSRV9WSURFT19PVVRQVVQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0FQVFVSRV9TRUNVUkVfVklERU9fT1VUUFVUJyxcclxuICAgIENBUFRVUkVfVklERU9fT1VUUFVUOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNBUFRVUkVfVklERU9fT1VUUFVUJyxcclxuICAgIENIQU5HRV9DT01QT05FTlRfRU5BQkxFRF9TVEFURTogJ2FuZHJvaWQucGVybWlzc2lvbi5DSEFOR0VfQ09NUE9ORU5UX0VOQUJMRURfU1RBVEUnLFxyXG4gICAgQ0hBTkdFX0NPTkZJR1VSQVRJT046ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0hBTkdFX0NPTkZJR1VSQVRJT04nLFxyXG4gICAgQ0hBTkdFX05FVFdPUktfU1RBVEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0hBTkdFX05FVFdPUktfU1RBVEUnLFxyXG4gICAgQ0hBTkdFX1dJRklfTVVMVElDQVNUX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNIQU5HRV9XSUZJX01VTFRJQ0FTVF9TVEFURScsXHJcbiAgICBDSEFOR0VfV0lGSV9TVEFURTogJ2FuZHJvaWQucGVybWlzc2lvbi5DSEFOR0VfV0lGSV9TVEFURScsXHJcbiAgICBDTEVBUl9BUFBfQ0FDSEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0xFQVJfQVBQX0NBQ0hFJyxcclxuICAgIENMRUFSX0FQUF9VU0VSX0RBVEE6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0xFQVJfQVBQX1VTRVJfREFUQScsXHJcbiAgICBDT05UUk9MX0xPQ0FUSU9OX1VQREFURVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ09OVFJPTF9MT0NBVElPTl9VUERBVEVTJyxcclxuICAgIERFTEVURV9DQUNIRV9GSUxFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5ERUxFVEVfQ0FDSEVfRklMRVMnLFxyXG4gICAgREVMRVRFX1BBQ0tBR0VTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkRFTEVURV9QQUNLQUdFUycsXHJcbiAgICBERVZJQ0VfUE9XRVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uREVWSUNFX1BPV0VSJyxcclxuICAgIERJQUdOT1NUSUM6ICdhbmRyb2lkLnBlcm1pc3Npb24uRElBR05PU1RJQycsXHJcbiAgICBESVNBQkxFX0tFWUdVQVJEOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkRJU0FCTEVfS0VZR1VBUkQnLFxyXG4gICAgRFVNUDogJ2FuZHJvaWQucGVybWlzc2lvbi5EVU1QJyxcclxuICAgIEVYUEFORF9TVEFUVVNfQkFSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkVYUEFORF9TVEFUVVNfQkFSJyxcclxuICAgIEZBQ1RPUllfVEVTVDogJ2FuZHJvaWQucGVybWlzc2lvbi5GQUNUT1JZX1RFU1QnLFxyXG4gICAgRkxBU0hMSUdIVDogJ2FuZHJvaWQucGVybWlzc2lvbi5GTEFTSExJR0hUJyxcclxuICAgIEZPUkNFX0JBQ0s6ICdhbmRyb2lkLnBlcm1pc3Npb24uRk9SQ0VfQkFDSycsXHJcbiAgICBHRVRfQUNDT1VOVFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uR0VUX0FDQ09VTlRTJyxcclxuICAgIEdFVF9QQUNLQUdFX1NJWkU6ICdhbmRyb2lkLnBlcm1pc3Npb24uR0VUX1BBQ0tBR0VfU0laRScsXHJcbiAgICBHRVRfVEFTS1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uR0VUX1RBU0tTJyxcclxuICAgIEdFVF9UT1BfQUNUSVZJVFlfSU5GTzogJ2FuZHJvaWQucGVybWlzc2lvbi5HRVRfVE9QX0FDVElWSVRZX0lORk8nLFxyXG4gICAgR0xPQkFMX1NFQVJDSDogJ2FuZHJvaWQucGVybWlzc2lvbi5HTE9CQUxfU0VBUkNIJyxcclxuICAgIEhBUkRXQVJFX1RFU1Q6ICdhbmRyb2lkLnBlcm1pc3Npb24uSEFSRFdBUkVfVEVTVCcsXHJcbiAgICBJTkpFQ1RfRVZFTlRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLklOSkVDVF9FVkVOVFMnLFxyXG4gICAgSU5TVEFMTF9MT0NBVElPTl9QUk9WSURFUjogJ2FuZHJvaWQucGVybWlzc2lvbi5JTlNUQUxMX0xPQ0FUSU9OX1BST1ZJREVSJyxcclxuICAgIElOU1RBTExfUEFDS0FHRVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uSU5TVEFMTF9QQUNLQUdFUycsXHJcbiAgICBJTlNUQUxMX1NIT1JUQ1VUOiAnY29tLmFuZHJvaWQubGF1bmNoZXIucGVybWlzc2lvbi5JTlNUQUxMX1NIT1JUQ1VUJyxcclxuICAgIElOVEVSTkFMX1NZU1RFTV9XSU5ET1c6ICdhbmRyb2lkLnBlcm1pc3Npb24uSU5URVJOQUxfU1lTVEVNX1dJTkRPVycsXHJcbiAgICBJTlRFUk5FVDogJ2FuZHJvaWQucGVybWlzc2lvbi5JTlRFUk5FVCcsXHJcbiAgICBLSUxMX0JBQ0tHUk9VTkRfUFJPQ0VTU0VTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLktJTExfQkFDS0dST1VORF9QUk9DRVNTRVMnLFxyXG4gICAgTE9DQVRJT05fSEFSRFdBUkU6ICdhbmRyb2lkLnBlcm1pc3Npb24uTE9DQVRJT05fSEFSRFdBUkUnLFxyXG4gICAgTUFOQUdFX0FDQ09VTlRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1BTkFHRV9BQ0NPVU5UUycsXHJcbiAgICBNQU5BR0VfQVBQX1RPS0VOUzogJ2FuZHJvaWQucGVybWlzc2lvbi5NQU5BR0VfQVBQX1RPS0VOUycsXHJcbiAgICBNQU5BR0VfRE9DVU1FTlRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1BTkFHRV9ET0NVTUVOVFMnLFxyXG4gICAgTUFTVEVSX0NMRUFSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1BU1RFUl9DTEVBUicsXHJcbiAgICBNRURJQV9DT05URU5UX0NPTlRST0w6ICdhbmRyb2lkLnBlcm1pc3Npb24uTUVESUFfQ09OVEVOVF9DT05UUk9MJyxcclxuICAgIE1PRElGWV9BVURJT19TRVRUSU5HUzogJ2FuZHJvaWQucGVybWlzc2lvbi5NT0RJRllfQVVESU9fU0VUVElOR1MnLFxyXG4gICAgTU9ESUZZX1BIT05FX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1PRElGWV9QSE9ORV9TVEFURScsXHJcbiAgICBNT1VOVF9GT1JNQVRfRklMRVNZU1RFTVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uTU9VTlRfRk9STUFUX0ZJTEVTWVNURU1TJyxcclxuICAgIE1PVU5UX1VOTU9VTlRfRklMRVNZU1RFTVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uTU9VTlRfVU5NT1VOVF9GSUxFU1lTVEVNUycsXHJcbiAgICBORkM6ICdhbmRyb2lkLnBlcm1pc3Npb24uTkZDJyxcclxuICAgIFBFUlNJU1RFTlRfQUNUSVZJVFk6ICdhbmRyb2lkLnBlcm1pc3Npb24uUEVSU0lTVEVOVF9BQ1RJVklUWScsXHJcbiAgICBQUk9DRVNTX09VVEdPSU5HX0NBTExTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlBST0NFU1NfT1VUR09JTkdfQ0FMTFMnLFxyXG4gICAgUkVBRF9DQUxFTkRBUjogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX0NBTEVOREFSJyxcclxuICAgIFJFQURfQ0FMTF9MT0c6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9DQUxMX0xPRycsXHJcbiAgICBSRUFEX0NPTlRBQ1RTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfQ09OVEFDVFMnLFxyXG4gICAgUkVBRF9FWFRFUk5BTF9TVE9SQUdFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfRVhURVJOQUxfU1RPUkFHRScsXHJcbiAgICBSRUFEX0ZSQU1FX0JVRkZFUjogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX0ZSQU1FX0JVRkZFUicsXHJcbiAgICBSRUFEX0hJU1RPUllfQk9PS01BUktTOiAnY29tLmFuZHJvaWQuYnJvd3Nlci5wZXJtaXNzaW9uLlJFQURfSElTVE9SWV9CT09LTUFSS1MnLFxyXG4gICAgUkVBRF9JTlBVVF9TVEFURTogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX0lOUFVUX1NUQVRFJyxcclxuICAgIFJFQURfTE9HUzogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX0xPR1MnLFxyXG4gICAgUkVBRF9QSE9ORV9TVEFURTogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX1BIT05FX1NUQVRFJyxcclxuICAgIFJFQURfUFJPRklMRTogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX1BST0ZJTEUnLFxyXG4gICAgUkVBRF9TTVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9TTVMnLFxyXG4gICAgUkVBRF9TT0NJQUxfU1RSRUFNOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfU09DSUFMX1NUUkVBTScsXHJcbiAgICBSRUFEX1NZTkNfU0VUVElOR1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9TWU5DX1NFVFRJTkdTJyxcclxuICAgIFJFQURfU1lOQ19TVEFUUzogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX1NZTkNfU1RBVFMnLFxyXG4gICAgUkVBRF9VU0VSX0RJQ1RJT05BUlk6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9VU0VSX0RJQ1RJT05BUlknLFxyXG4gICAgUkVBRF9WT0lDRU1BSUw6ICdjb20uYW5kcm9pZC52b2ljZW1haWwucGVybWlzc2lvbi5SRUFEX1ZPSUNFTUFJTCcsXHJcbiAgICBSRUJPT1Q6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVCT09UJyxcclxuICAgIFJFQ0VJVkVfQk9PVF9DT01QTEVURUQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVDRUlWRV9CT09UX0NPTVBMRVRFRCcsXHJcbiAgICBSRUNFSVZFX01NUzogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUNFSVZFX01NUycsXHJcbiAgICBSRUNFSVZFX1NNUzogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUNFSVZFX1NNUycsXHJcbiAgICBSRUNFSVZFX1dBUF9QVVNIOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQ0VJVkVfV0FQX1BVU0gnLFxyXG4gICAgUkVDT1JEX0FVRElPOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQ09SRF9BVURJTycsXHJcbiAgICBSRU9SREVSX1RBU0tTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFT1JERVJfVEFTS1MnLFxyXG4gICAgUkVTVEFSVF9QQUNLQUdFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5SRVNUQVJUX1BBQ0tBR0VTJyxcclxuICAgIFNFTkRfUkVTUE9ORF9WSUFfTUVTU0FHRTogJ2FuZHJvaWQucGVybWlzc2lvbi5TRU5EX1JFU1BPTkRfVklBX01FU1NBR0UnLFxyXG4gICAgU0VORF9TTVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VORF9TTVMnLFxyXG4gICAgU0VUX0FDVElWSVRZX1dBVENIRVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX0FDVElWSVRZX1dBVENIRVInLFxyXG4gICAgU0VUX0FMQVJNOiAnY29tLmFuZHJvaWQuYWxhcm0ucGVybWlzc2lvbi5TRVRfQUxBUk0nLFxyXG4gICAgU0VUX0FMV0FZU19GSU5JU0g6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX0FMV0FZU19GSU5JU0gnLFxyXG4gICAgU0VUX0FOSU1BVElPTl9TQ0FMRTogJ2FuZHJvaWQucGVybWlzc2lvbi5TRVRfQU5JTUFUSU9OX1NDQUxFJyxcclxuICAgIFNFVF9ERUJVR19BUFA6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX0RFQlVHX0FQUCcsXHJcbiAgICBTRVRfT1JJRU5UQVRJT046ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX09SSUVOVEFUSU9OJyxcclxuICAgIFNFVF9QT0lOVEVSX1NQRUVEOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9QT0lOVEVSX1NQRUVEJyxcclxuICAgIFNFVF9QUkVGRVJSRURfQVBQTElDQVRJT05TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9QUkVGRVJSRURfQVBQTElDQVRJT05TJyxcclxuICAgIFNFVF9QUk9DRVNTX0xJTUlUOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9QUk9DRVNTX0xJTUlUJyxcclxuICAgIFNFVF9USU1FOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9USU1FJyxcclxuICAgIFNFVF9USU1FX1pPTkU6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX1RJTUVfWk9ORScsXHJcbiAgICBTRVRfV0FMTFBBUEVSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9XQUxMUEFQRVInLFxyXG4gICAgU0VUX1dBTExQQVBFUl9ISU5UUzogJ2FuZHJvaWQucGVybWlzc2lvbi5TRVRfV0FMTFBBUEVSX0hJTlRTJyxcclxuICAgIFNJR05BTF9QRVJTSVNURU5UX1BST0NFU1NFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5TSUdOQUxfUEVSU0lTVEVOVF9QUk9DRVNTRVMnLFxyXG4gICAgU1RBVFVTX0JBUjogJ2FuZHJvaWQucGVybWlzc2lvbi5TVEFUVVNfQkFSJyxcclxuICAgIFNVQlNDUklCRURfRkVFRFNfUkVBRDogJ2FuZHJvaWQucGVybWlzc2lvbi5TVUJTQ1JJQkVEX0ZFRURTX1JFQUQnLFxyXG4gICAgU1VCU0NSSUJFRF9GRUVEU19XUklURTogJ2FuZHJvaWQucGVybWlzc2lvbi5TVUJTQ1JJQkVEX0ZFRURTX1dSSVRFJyxcclxuICAgIFNZU1RFTV9BTEVSVF9XSU5ET1c6ICdhbmRyb2lkLnBlcm1pc3Npb24uU1lTVEVNX0FMRVJUX1dJTkRPVycsXHJcbiAgICBUUkFOU01JVF9JUjogJ2FuZHJvaWQucGVybWlzc2lvbi5UUkFOU01JVF9JUicsXHJcbiAgICBVTklOU1RBTExfU0hPUlRDVVQ6ICdjb20uYW5kcm9pZC5sYXVuY2hlci5wZXJtaXNzaW9uLlVOSU5TVEFMTF9TSE9SVENVVCcsXHJcbiAgICBVUERBVEVfREVWSUNFX1NUQVRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlVQREFURV9ERVZJQ0VfU1RBVFMnLFxyXG4gICAgVVNFX0NSRURFTlRJQUxTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlVTRV9DUkVERU5USUFMUycsXHJcbiAgICBVU0VfU0lQOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlVTRV9TSVAnLFxyXG4gICAgVklCUkFURTogJ2FuZHJvaWQucGVybWlzc2lvbi5WSUJSQVRFJyxcclxuICAgIFdBS0VfTE9DSzogJ2FuZHJvaWQucGVybWlzc2lvbi5XQUtFX0xPQ0snLFxyXG4gICAgV1JJVEVfQVBOX1NFVFRJTkdTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX0FQTl9TRVRUSU5HUycsXHJcbiAgICBXUklURV9DQUxFTkRBUjogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9DQUxFTkRBUicsXHJcbiAgICBXUklURV9DQUxMX0xPRzogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9DQUxMX0xPRycsXHJcbiAgICBXUklURV9DT05UQUNUUzogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9DT05UQUNUUycsXHJcbiAgICBXUklURV9FWFRFUk5BTF9TVE9SQUdFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX0VYVEVSTkFMX1NUT1JBR0UnLFxyXG4gICAgV1JJVEVfR1NFUlZJQ0VTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX0dTRVJWSUNFUycsXHJcbiAgICBXUklURV9ISVNUT1JZX0JPT0tNQVJLUzogJ2NvbS5hbmRyb2lkLmJyb3dzZXIucGVybWlzc2lvbi5XUklURV9ISVNUT1JZX0JPT0tNQVJLUycsXHJcbiAgICBXUklURV9QUk9GSUxFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX1BST0ZJTEUnLFxyXG4gICAgV1JJVEVfU0VDVVJFX1NFVFRJTkdTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX1NFQ1VSRV9TRVRUSU5HUycsXHJcbiAgICBXUklURV9TRVRUSU5HUzogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9TRVRUSU5HUycsXHJcbiAgICBXUklURV9TTVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfU01TJyxcclxuICAgIFdSSVRFX1NPQ0lBTF9TVFJFQU06ICdhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfU09DSUFMX1NUUkVBTScsXHJcbiAgICBXUklURV9TWU5DX1NFVFRJTkdTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX1NZTkNfU0VUVElOR1MnLFxyXG4gICAgV1JJVEVfVVNFUl9ESUNUSU9OQVJZOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX1VTRVJfRElDVElPTkFSWScsXHJcbiAgICBXUklURV9WT0lDRU1BSUw6ICdjb20uYW5kcm9pZC52b2ljZW1haWwucGVybWlzc2lvbi5XUklURV9WT0lDRU1BSUwnLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIHBlcm1pc3Npb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGVybWlzc2lvbiBUaGUgbmFtZSBvZiB0aGUgcGVybWlzc2lvblxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8QW5kcm9pZFBlcm1pc3Npb25SZXNwb25zZT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNoZWNrUGVybWlzc2lvbihwZXJtaXNzaW9uOiBzdHJpbmcpOiBQcm9taXNlPEFuZHJvaWRQZXJtaXNzaW9uUmVzcG9uc2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJtaXNzaW9uIFRoZSBuYW1lIG9mIHRoZSBwZXJtaXNzaW9uIHRvIHJlcXVlc3RcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEFuZHJvaWRQZXJtaXNzaW9uUmVzcG9uc2U+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZXF1ZXN0UGVybWlzc2lvbihwZXJtaXNzaW9uOiBzdHJpbmcpOiBQcm9taXNlPEFuZHJvaWRQZXJtaXNzaW9uUmVzcG9uc2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvbnNcclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwZXJtaXNzaW9ucyBBbiBhcnJheSB3aXRoIHBlcm1pc3Npb25zXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZXF1ZXN0UGVybWlzc2lvbnMocGVybWlzc2lvbnM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RpbGwgd29ya3Mgbm93LCB3aWxsIG5vdCBzdXBwb3J0IGluIHRoZSBmdXR1cmUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBlcm1pc3Npb24gVGhlIG5hbWUgb2YgdGhlIHBlcm1pc3Npb25cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEFuZHJvaWRQZXJtaXNzaW9uUmVzcG9uc2U+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb246IHN0cmluZyk6IFByb21pc2U8QW5kcm9pZFBlcm1pc3Npb25SZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbmRyb2lkUGVybWlzc2lvblJlc3BvbnNlIHtcclxuICBoYXNQZXJtaXNzaW9uOiBib29sZWFuO1xyXG59XHJcbiJdfQ==