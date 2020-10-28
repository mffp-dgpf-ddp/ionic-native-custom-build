import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
export var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
export var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
export var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
export var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
export var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
export var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2,
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1,
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2,
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            SAVEDPHOTOALBUM: 2,
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15,
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1,
        };
        return _this;
    }
    Camera.prototype.getPicture = function (options) { return cordova(this, "getPicture", { "callbackOrder": "reverse" }, arguments); };
    Camera.prototype.cleanup = function () { return cordova(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    Camera.pluginName = "Camera";
    Camera.plugin = "cordova-plugin-camera";
    Camera.pluginRef = "navigator.camera";
    Camera.repo = "https://github.com/apache/cordova-plugin-camera";
    Camera.platforms = ["Android", "Browser", "iOS", "Windows"];
    Camera = __decorate([
        Injectable()
    ], Camera);
    return Camera;
}(IonicNativePlugin));
export { Camera };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbWVyYS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQXNGeEUsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6Qiw2REFBWSxDQUFBO0lBQ1osNkRBQVEsQ0FBQTtJQUNSLGlFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLCtDQUFRLENBQUE7SUFDUiw2Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQiwrQ0FBVyxDQUFBO0lBQ1gsMkNBQUssQ0FBQTtJQUNMLGlEQUFRLENBQUE7QUFDVixDQUFDLEVBSlcsU0FBUyxLQUFULFNBQVMsUUFJcEI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLHlFQUFnQixDQUFBO0lBQ2hCLDZEQUFNLENBQUE7SUFDTiwrRUFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBRUQsTUFBTSxDQUFOLElBQVkscUJBTVg7QUFORCxXQUFZLHFCQUFxQjtJQUMvQix5RUFBWSxDQUFBO0lBQ1osNkVBQVUsQ0FBQTtJQUNWLDZFQUFVLENBQUE7SUFDViwrRUFBVyxDQUFBO0lBQ1gsMkVBQVMsQ0FBQTtBQUNYLENBQUMsRUFOVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBTWhDO0FBRUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBUSxDQUFBO0lBQ1IsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjs7SUFzRDJCLDBCQUFpQjs7O1FBQzNDOztXQUVHO1FBQ0gscUJBQWUsR0FBRztZQUNoQixnS0FBZ0s7WUFDaEssUUFBUSxFQUFFLENBQUM7WUFDWCw0RUFBNEU7WUFDNUUsUUFBUSxFQUFFLENBQUM7WUFDWCwwREFBMEQ7WUFDMUQsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxrQkFBWSxHQUFHO1lBQ2IsZ0NBQWdDO1lBQ2hDLElBQUksRUFBRSxDQUFDO1lBQ1AsK0JBQStCO1lBQy9CLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUVGOztXQUVHO1FBQ0gsZUFBUyxHQUFHO1lBQ1Ysd0dBQXdHO1lBQ3hHLE9BQU8sRUFBRSxDQUFDO1lBQ1Ysc0RBQXNEO1lBQ3RELEtBQUssRUFBRSxDQUFDO1lBQ1IsMkNBQTJDO1lBQzNDLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUVGOztXQUVHO1FBQ0gsdUJBQWlCLEdBQUc7WUFDbEIsMkVBQTJFO1lBQzNFLFlBQVksRUFBRSxDQUFDO1lBQ2YsK0JBQStCO1lBQy9CLE1BQU0sRUFBRSxDQUFDO1lBQ1QsOEVBQThFO1lBQzlFLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUM7UUFFRjs7V0FFRztRQUNILDJCQUFxQixHQUFHO1lBQ3RCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQztZQUNiLFdBQVcsRUFBRSxDQUFDO1lBQ2QsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxlQUFTLEdBQUc7WUFDVixpQ0FBaUM7WUFDakMsSUFBSSxFQUFFLENBQUM7WUFDUCxrQ0FBa0M7WUFDbEMsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDOzs7SUFVRiwyQkFBVSxhQUFDLE9BQXVCO0lBWWxDLHdCQUFPOzs7Ozs7SUF4RkksTUFBTTtRQURsQixVQUFVLEVBQUU7T0FDQSxNQUFNO2lCQS9LbkI7RUErSzRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhT3B0aW9ucyB7XHJcbiAgLyoqIFBpY3R1cmUgcXVhbGl0eSBpbiByYW5nZSAwLTEwMC4gRGVmYXVsdCBpcyA1MCAqL1xyXG4gIHF1YWxpdHk/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZS5cclxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EZXN0aW5hdGlvblR5cGUuIERlZmF1bHQgaXMgRklMRV9VUkkuXHJcbiAgICogICAgICBEQVRBX1VSTCA6IDAsICAgUmV0dXJuIGltYWdlIGFzIGJhc2U2NC1lbmNvZGVkIHN0cmluZyAoREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlKSxcclxuICAgKiAgICAgIEZJTEVfVVJJIDogMSwgICBSZXR1cm4gaW1hZ2UgZmlsZSBVUkksXHJcbiAgICogICAgICBOQVRJVkVfVVJJIDogMiAgUmV0dXJuIGltYWdlIG5hdGl2ZSBVUklcclxuICAgKiAgICAgICAgICAoZS5nLiwgYXNzZXRzLWxpYnJhcnk6Ly8gb24gaU9TIG9yIGNvbnRlbnQ6Ly8gb24gQW5kcm9pZClcclxuICAgKi9cclxuICBkZXN0aW5hdGlvblR5cGU/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBzb3VyY2Ugb2YgdGhlIHBpY3R1cmUuXHJcbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuUGljdHVyZVNvdXJjZVR5cGUuIERlZmF1bHQgaXMgQ0FNRVJBLlxyXG4gICAqICAgICAgUEhPVE9MSUJSQVJZIDogMCxcclxuICAgKiAgICAgIENBTUVSQSA6IDEsXHJcbiAgICogICAgICBTQVZFRFBIT1RPQUxCVU0gOiAyXHJcbiAgICovXHJcbiAgc291cmNlVHlwZT86IG51bWJlcjtcclxuICAvKiogQWxsb3cgc2ltcGxlIGVkaXRpbmcgb2YgaW1hZ2UgYmVmb3JlIHNlbGVjdGlvbi4gKi9cclxuICBhbGxvd0VkaXQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIENob29zZSB0aGUgcmV0dXJuZWQgaW1hZ2UgZmlsZSdzIGVuY29kaW5nLlxyXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkVuY29kaW5nVHlwZS4gRGVmYXVsdCBpcyBKUEVHXHJcbiAgICogICAgICBKUEVHIDogMCAgICBSZXR1cm4gSlBFRyBlbmNvZGVkIGltYWdlXHJcbiAgICogICAgICBQTkcgOiAxICAgICBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2VcclxuICAgKi9cclxuICBlbmNvZGluZ1R5cGU/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogV2lkdGggaW4gcGl4ZWxzIHRvIHNjYWxlIGltYWdlLiBNdXN0IGJlIHVzZWQgd2l0aCB0YXJnZXRIZWlnaHQuXHJcbiAgICogQXNwZWN0IHJhdGlvIHJlbWFpbnMgY29uc3RhbnQuXHJcbiAgICovXHJcbiAgdGFyZ2V0V2lkdGg/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogSGVpZ2h0IGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0V2lkdGguXHJcbiAgICogQXNwZWN0IHJhdGlvIHJlbWFpbnMgY29uc3RhbnQuXHJcbiAgICovXHJcbiAgdGFyZ2V0SGVpZ2h0PzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgdHlwZSBvZiBtZWRpYSB0byBzZWxlY3QgZnJvbS4gT25seSB3b3JrcyB3aGVuIFBpY3R1cmVTb3VyY2VUeXBlXHJcbiAgICogaXMgUEhPVE9MSUJSQVJZIG9yIFNBVkVEUEhPVE9BTEJVTS4gRGVmaW5lZCBpbiBDYW1lcmEuTWVkaWFUeXBlXHJcbiAgICogICAgICBQSUNUVVJFOiAwICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuXHJcbiAgICogICAgICAgICAgV2lsbCByZXR1cm4gZm9ybWF0IHNwZWNpZmllZCB2aWEgRGVzdGluYXRpb25UeXBlXHJcbiAgICogICAgICBWSURFTzogMSAgICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHZpZGVvIG9ubHksIFdJTEwgQUxXQVlTIFJFVFVSTiBGSUxFX1VSSVxyXG4gICAqICAgICAgQUxMTUVESUEgOiAyICAgIGFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlc1xyXG4gICAqL1xyXG4gIG1lZGlhVHlwZT86IG51bWJlcjtcclxuICAvKiogUm90YXRlIHRoZSBpbWFnZSB0byBjb3JyZWN0IGZvciB0aGUgb3JpZW50YXRpb24gb2YgdGhlIGRldmljZSBkdXJpbmcgY2FwdHVyZS4gKi9cclxuICBjb3JyZWN0T3JpZW50YXRpb24/OiBib29sZWFuO1xyXG4gIC8qKiBTYXZlIHRoZSBpbWFnZSB0byB0aGUgcGhvdG8gYWxidW0gb24gdGhlIGRldmljZSBhZnRlciBjYXB0dXJlLiAqL1xyXG4gIHNhdmVUb1Bob3RvQWxidW0/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIENob29zZSB0aGUgY2FtZXJhIHRvIHVzZSAoZnJvbnQtIG9yIGJhY2stZmFjaW5nKS5cclxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EaXJlY3Rpb24uIERlZmF1bHQgaXMgQkFDSy5cclxuICAgKiAgICAgIEJBQ0s6IDBcclxuICAgKiAgICAgIEZST05UOiAxXHJcbiAgICovXHJcbiAgY2FtZXJhRGlyZWN0aW9uPzogbnVtYmVyO1xyXG4gIC8qKiBpT1Mtb25seSBvcHRpb25zIHRoYXQgc3BlY2lmeSBwb3BvdmVyIGxvY2F0aW9uIGluIGlQYWQuIERlZmluZWQgaW4gQ2FtZXJhUG9wb3Zlck9wdGlvbnMuICovXHJcbiAgcG9wb3Zlck9wdGlvbnM/OiBDYW1lcmFQb3BvdmVyT3B0aW9ucztcclxufVxyXG5cclxuLyoqXHJcbiAqIGlPUy1vbmx5IHBhcmFtZXRlcnMgdGhhdCBzcGVjaWZ5IHRoZSBhbmNob3IgZWxlbWVudCBsb2NhdGlvbiBhbmQgYXJyb3cgZGlyZWN0aW9uXHJcbiAqIG9mIHRoZSBwb3BvdmVyIHdoZW4gc2VsZWN0aW5nIGltYWdlcyBmcm9tIGFuIGlQYWQncyBsaWJyYXJ5IG9yIGFsYnVtLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFQb3BvdmVyT3B0aW9ucyB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIERpcmVjdGlvbiB0aGUgYXJyb3cgb24gdGhlIHBvcG92ZXIgc2hvdWxkIHBvaW50LiBEZWZpbmVkIGluIENhbWVyYS5Qb3BvdmVyQXJyb3dEaXJlY3Rpb25cclxuICAgKiBNYXRjaGVzIGlPUyBVSVBvcG92ZXJBcnJvd0RpcmVjdGlvbiBjb25zdGFudHMuXHJcbiAgICogICAgICBBUlJPV19VUCA6IDEsXHJcbiAgICogICAgICBBUlJPV19ET1dOIDogMixcclxuICAgKiAgICAgIEFSUk9XX0xFRlQgOiA0LFxyXG4gICAqICAgICAgQVJST1dfUklHSFQgOiA4LFxyXG4gICAqICAgICAgQVJST1dfQU5ZIDogMTVcclxuICAgKi9cclxuICBhcnJvd0RpcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBEZXN0aW5hdGlvblR5cGUge1xyXG4gIERBVEFfVVJMID0gMCxcclxuICBGSUxFX1VSTCxcclxuICBOQVRJVkVfVVJJLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBFbmNvZGluZ1R5cGUge1xyXG4gIEpQRUcgPSAwLFxyXG4gIFBORyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWVkaWFUeXBlIHtcclxuICBQSUNUVVJFID0gMCxcclxuICBWSURFTyxcclxuICBBTExNRURJQSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGljdHVyZVNvdXJjZVR5cGUge1xyXG4gIFBIT1RPTElCUkFSWSA9IDAsXHJcbiAgQ0FNRVJBLFxyXG4gIFNBVkVEUEhPVE9BTEJVTSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUG9wb3ZlckFycm93RGlyZWN0aW9uIHtcclxuICBBUlJPV19VUCA9IDEsXHJcbiAgQVJST1dfRE9XTixcclxuICBBUlJPV19MRUZULFxyXG4gIEFSUk9XX1JJR0hULFxyXG4gIEFSUk9XX0FOWSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlyZWN0aW9uIHtcclxuICBCQUNLID0gMCxcclxuICBGUk9OVCxcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIENhbWVyYVxyXG4gKiBAcHJlbWllciBjYW1lcmFcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRha2UgYSBwaG90byBvciBjYXB0dXJlIHZpZGVvLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyB0aGUgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQ29yZG92YSBDYW1lcmEgUGx1Z2luIERvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhKS5cclxuICpcclxuICogW1dhcm5pbmddIFNpbmNlIElPUyAxMCB0aGUgY2FtZXJhIHJlcXVpcmVzIHBlcm1pc3Npb25zIHRvIGJlIHBsYWNlZCBpbiB5b3VyIGNvbmZpZy54bWwgYWRkXHJcbiAqIGBgYHhtbFxyXG4gKiA8Y29uZmlnLWZpbGUgcGFyZW50PVwiTlNDYW1lcmFVc2FnZURlc2NyaXB0aW9uXCIgcGxhdGZvcm09XCJpb3NcIiB0YXJnZXQ9XCIqLUluZm8ucGxpc3RcIj5cclxuICogIDxzdHJpbmc+WW91IGNhbiB0YWtlIHBob3Rvczwvc3RyaW5nPlxyXG4gKiA8L2NvbmZpZy1maWxlPlxyXG4gKiBgYGBcclxuICogaW5zaWRlIG9mIHRoZSA8cGxhdGZvcm0gbmFtZT0naW9zPiBzZWN0aW9uXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IENhbWVyYSwgQ2FtZXJhT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2FtZXJhL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FtZXJhOiBDYW1lcmEpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogY29uc3Qgb3B0aW9uczogQ2FtZXJhT3B0aW9ucyA9IHtcclxuICogICBxdWFsaXR5OiAxMDAsXHJcbiAqICAgZGVzdGluYXRpb25UeXBlOiB0aGlzLmNhbWVyYS5EZXN0aW5hdGlvblR5cGUuRklMRV9VUkksXHJcbiAqICAgZW5jb2RpbmdUeXBlOiB0aGlzLmNhbWVyYS5FbmNvZGluZ1R5cGUuSlBFRyxcclxuICogICBtZWRpYVR5cGU6IHRoaXMuY2FtZXJhLk1lZGlhVHlwZS5QSUNUVVJFXHJcbiAqIH1cclxuICpcclxuICogdGhpcy5jYW1lcmEuZ2V0UGljdHVyZShvcHRpb25zKS50aGVuKChpbWFnZURhdGEpID0+IHtcclxuICogIC8vIGltYWdlRGF0YSBpcyBlaXRoZXIgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgb3IgYSBmaWxlIFVSSVxyXG4gKiAgLy8gSWYgaXQncyBiYXNlNjQgKERBVEFfVVJMKTpcclxuICogIGxldCBiYXNlNjRJbWFnZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCcgKyBpbWFnZURhdGE7XHJcbiAqIH0sIChlcnIpID0+IHtcclxuICogIC8vIEhhbmRsZSBlcnJvclxyXG4gKiB9KTtcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIENhbWVyYU9wdGlvbnNcclxuICogQ2FtZXJhUG9wb3Zlck9wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdDYW1lcmEnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNhbWVyYScsXHJcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmNhbWVyYScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhbWVyYSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgZGVzdGluYXRpb24gdHlwZXNcclxuICAgKi9cclxuICBEZXN0aW5hdGlvblR5cGUgPSB7XHJcbiAgICAvKiogUmV0dXJuIGJhc2U2NCBlbmNvZGVkIHN0cmluZy4gREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlICovXHJcbiAgICBEQVRBX1VSTDogMCxcclxuICAgIC8qKiBSZXR1cm4gZmlsZSB1cmkgKGNvbnRlbnQ6Ly9tZWRpYS9leHRlcm5hbC9pbWFnZXMvbWVkaWEvMiBmb3IgQW5kcm9pZCkgKi9cclxuICAgIEZJTEVfVVJJOiAxLFxyXG4gICAgLyoqIFJldHVybiBuYXRpdmUgdXJpIChlZy4gYXNzZXQtbGlicmFyeTovLy4uLiBmb3IgaU9TKSAqL1xyXG4gICAgTkFUSVZFX1VSSTogMixcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqL1xyXG4gIEVuY29kaW5nVHlwZSA9IHtcclxuICAgIC8qKiBSZXR1cm4gSlBFRyBlbmNvZGVkIGltYWdlICovXHJcbiAgICBKUEVHOiAwLFxyXG4gICAgLyoqIFJldHVybiBQTkcgZW5jb2RlZCBpbWFnZSAqL1xyXG4gICAgUE5HOiAxLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICovXHJcbiAgTWVkaWFUeXBlID0ge1xyXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBvZiBzdGlsbCBwaWN0dXJlcyBvbmx5LiBERUZBVUxULiBXaWxsIHJldHVybiBmb3JtYXQgc3BlY2lmaWVkIHZpYSBEZXN0aW5hdGlvblR5cGUgKi9cclxuICAgIFBJQ1RVUkU6IDAsXHJcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIG9mIHZpZGVvIG9ubHksIE9OTFkgUkVUVVJOUyBVUkwgKi9cclxuICAgIFZJREVPOiAxLFxyXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlcyAqL1xyXG4gICAgQUxMTUVESUE6IDIsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKi9cclxuICBQaWN0dXJlU291cmNlVHlwZSA9IHtcclxuICAgIC8qKiBDaG9vc2UgaW1hZ2UgZnJvbSBwaWN0dXJlIGxpYnJhcnkgKHNhbWUgYXMgUEhPVE9MSUJSQVJZIGZvciBBbmRyb2lkKSAqL1xyXG4gICAgUEhPVE9MSUJSQVJZOiAwLFxyXG4gICAgLyoqIFRha2UgcGljdHVyZSBmcm9tIGNhbWVyYSAqL1xyXG4gICAgQ0FNRVJBOiAxLFxyXG4gICAgLyoqIENob29zZSBpbWFnZSBmcm9tIHBpY3R1cmUgbGlicmFyeSAoc2FtZSBhcyBTQVZFRFBIT1RPQUxCVU0gZm9yIEFuZHJvaWQpICovXHJcbiAgICBTQVZFRFBIT1RPQUxCVU06IDIsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKi9cclxuICBQb3BvdmVyQXJyb3dEaXJlY3Rpb24gPSB7XHJcbiAgICBBUlJPV19VUDogMSxcclxuICAgIEFSUk9XX0RPV046IDIsXHJcbiAgICBBUlJPV19MRUZUOiA0LFxyXG4gICAgQVJST1dfUklHSFQ6IDgsXHJcbiAgICBBUlJPV19BTlk6IDE1LFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICovXHJcbiAgRGlyZWN0aW9uID0ge1xyXG4gICAgLyoqIFVzZSB0aGUgYmFjay1mYWNpbmcgY2FtZXJhICovXHJcbiAgICBCQUNLOiAwLFxyXG4gICAgLyoqIFVzZSB0aGUgZnJvbnQtZmFjaW5nIGNhbWVyYSAqL1xyXG4gICAgRlJPTlQ6IDEsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGFrZSBhIHBpY3R1cmUgb3IgdmlkZW8sIG9yIGxvYWQgb25lIGZyb20gdGhlIGxpYnJhcnkuXHJcbiAgICogQHBhcmFtIHtDYW1lcmFPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyB0aGF0IHlvdSB3YW50IHRvIHBhc3MgdG8gdGhlIGNhbWVyYS4gRW5jb2RpbmcgdHlwZSwgcXVhbGl0eSwgZXRjLiBQbGF0Zm9ybS1zcGVjaWZpYyBxdWlya3MgYXJlIGRlc2NyaWJlZCBpbiB0aGUgW0NvcmRvdmEgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhI2NhbWVyYW9wdGlvbnMtZXJyYXRhLSkuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIEJhc2U2NCBlbmNvZGluZyBvZiB0aGUgaW1hZ2UgZGF0YSwgb3IgdGhlIGltYWdlIGZpbGUgVVJJLCBkZXBlbmRpbmcgb24gY2FtZXJhT3B0aW9ucywgb3RoZXJ3aXNlIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBnZXRQaWN0dXJlKG9wdGlvbnM/OiBDYW1lcmFPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBpbnRlcm1lZGlhdGUgaW1hZ2UgZmlsZXMgdGhhdCBhcmUga2VwdCBpbiB0ZW1wb3Jhcnkgc3RvcmFnZSBhZnRlciBjYWxsaW5nIGNhbWVyYS5nZXRQaWN0dXJlLlxyXG4gICAqIEFwcGxpZXMgb25seSB3aGVuIHRoZSB2YWx1ZSBvZiBDYW1lcmEuc291cmNlVHlwZSBlcXVhbHMgQ2FtZXJhLlBpY3R1cmVTb3VyY2VUeXBlLkNBTUVSQSBhbmQgdGhlIENhbWVyYS5kZXN0aW5hdGlvblR5cGUgZXF1YWxzIENhbWVyYS5EZXN0aW5hdGlvblR5cGUuRklMRV9VUkkuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXHJcbiAgfSlcclxuICBjbGVhbnVwKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==