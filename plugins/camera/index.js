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
var CameraOriginal = /** @class */ (function (_super) {
    __extends(CameraOriginal, _super);
    function CameraOriginal() {
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
    CameraOriginal.prototype.getPicture = function (options) { return cordova(this, "getPicture", { "callbackOrder": "reverse" }, arguments); };
    CameraOriginal.prototype.cleanup = function () { return cordova(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    CameraOriginal.pluginName = "Camera";
    CameraOriginal.plugin = "cordova-plugin-camera";
    CameraOriginal.pluginRef = "navigator.camera";
    CameraOriginal.repo = "https://github.com/apache/cordova-plugin-camera";
    CameraOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return CameraOriginal;
}(IonicNativePlugin));
var Camera = new CameraOriginal();
export { Camera };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbWVyYS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQXNGeEUsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6Qiw2REFBWSxDQUFBO0lBQ1osNkRBQVEsQ0FBQTtJQUNSLGlFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLCtDQUFRLENBQUE7SUFDUiw2Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQiwrQ0FBVyxDQUFBO0lBQ1gsMkNBQUssQ0FBQTtJQUNMLGlEQUFRLENBQUE7QUFDVixDQUFDLEVBSlcsU0FBUyxLQUFULFNBQVMsUUFJcEI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLHlFQUFnQixDQUFBO0lBQ2hCLDZEQUFNLENBQUE7SUFDTiwrRUFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBRUQsTUFBTSxDQUFOLElBQVkscUJBTVg7QUFORCxXQUFZLHFCQUFxQjtJQUMvQix5RUFBWSxDQUFBO0lBQ1osNkVBQVUsQ0FBQTtJQUNWLDZFQUFVLENBQUE7SUFDViwrRUFBVyxDQUFBO0lBQ1gsMkVBQVMsQ0FBQTtBQUNYLENBQUMsRUFOVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBTWhDO0FBRUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBUSxDQUFBO0lBQ1IsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjs7SUFzRDJCLDBCQUFpQjs7O1FBQzNDOztXQUVHO1FBQ0gscUJBQWUsR0FBRztZQUNoQixnS0FBZ0s7WUFDaEssUUFBUSxFQUFFLENBQUM7WUFDWCw0RUFBNEU7WUFDNUUsUUFBUSxFQUFFLENBQUM7WUFDWCwwREFBMEQ7WUFDMUQsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxrQkFBWSxHQUFHO1lBQ2IsZ0NBQWdDO1lBQ2hDLElBQUksRUFBRSxDQUFDO1lBQ1AsK0JBQStCO1lBQy9CLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUVGOztXQUVHO1FBQ0gsZUFBUyxHQUFHO1lBQ1Ysd0dBQXdHO1lBQ3hHLE9BQU8sRUFBRSxDQUFDO1lBQ1Ysc0RBQXNEO1lBQ3RELEtBQUssRUFBRSxDQUFDO1lBQ1IsMkNBQTJDO1lBQzNDLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUVGOztXQUVHO1FBQ0gsdUJBQWlCLEdBQUc7WUFDbEIsMkVBQTJFO1lBQzNFLFlBQVksRUFBRSxDQUFDO1lBQ2YsK0JBQStCO1lBQy9CLE1BQU0sRUFBRSxDQUFDO1lBQ1QsOEVBQThFO1lBQzlFLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUM7UUFFRjs7V0FFRztRQUNILDJCQUFxQixHQUFHO1lBQ3RCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQztZQUNiLFdBQVcsRUFBRSxDQUFDO1lBQ2QsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxlQUFTLEdBQUc7WUFDVixpQ0FBaUM7WUFDakMsSUFBSSxFQUFFLENBQUM7WUFDUCxrQ0FBa0M7WUFDbEMsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDOzs7SUFVRiwyQkFBVSxhQUFDLE9BQXVCO0lBWWxDLHdCQUFPOzs7Ozs7aUJBdlFUO0VBK0s0QixpQkFBaUI7U0FBaEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYU9wdGlvbnMge1xyXG4gIC8qKiBQaWN0dXJlIHF1YWxpdHkgaW4gcmFuZ2UgMC0xMDAuIERlZmF1bHQgaXMgNTAgKi9cclxuICBxdWFsaXR5PzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUuXHJcbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuRGVzdGluYXRpb25UeXBlLiBEZWZhdWx0IGlzIEZJTEVfVVJJLlxyXG4gICAqICAgICAgREFUQV9VUkwgOiAwLCAgIFJldHVybiBpbWFnZSBhcyBiYXNlNjQtZW5jb2RlZCBzdHJpbmcgKERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSksXHJcbiAgICogICAgICBGSUxFX1VSSSA6IDEsICAgUmV0dXJuIGltYWdlIGZpbGUgVVJJLFxyXG4gICAqICAgICAgTkFUSVZFX1VSSSA6IDIgIFJldHVybiBpbWFnZSBuYXRpdmUgVVJJXHJcbiAgICogICAgICAgICAgKGUuZy4sIGFzc2V0cy1saWJyYXJ5Oi8vIG9uIGlPUyBvciBjb250ZW50Oi8vIG9uIEFuZHJvaWQpXHJcbiAgICovXHJcbiAgZGVzdGluYXRpb25UeXBlPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgc291cmNlIG9mIHRoZSBwaWN0dXJlLlxyXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLlBpY3R1cmVTb3VyY2VUeXBlLiBEZWZhdWx0IGlzIENBTUVSQS5cclxuICAgKiAgICAgIFBIT1RPTElCUkFSWSA6IDAsXHJcbiAgICogICAgICBDQU1FUkEgOiAxLFxyXG4gICAqICAgICAgU0FWRURQSE9UT0FMQlVNIDogMlxyXG4gICAqL1xyXG4gIHNvdXJjZVR5cGU/OiBudW1iZXI7XHJcbiAgLyoqIEFsbG93IHNpbXBsZSBlZGl0aW5nIG9mIGltYWdlIGJlZm9yZSBzZWxlY3Rpb24uICovXHJcbiAgYWxsb3dFZGl0PzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBDaG9vc2UgdGhlIHJldHVybmVkIGltYWdlIGZpbGUncyBlbmNvZGluZy5cclxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5FbmNvZGluZ1R5cGUuIERlZmF1bHQgaXMgSlBFR1xyXG4gICAqICAgICAgSlBFRyA6IDAgICAgUmV0dXJuIEpQRUcgZW5jb2RlZCBpbWFnZVxyXG4gICAqICAgICAgUE5HIDogMSAgICAgUmV0dXJuIFBORyBlbmNvZGVkIGltYWdlXHJcbiAgICovXHJcbiAgZW5jb2RpbmdUeXBlPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFdpZHRoIGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0SGVpZ2h0LlxyXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxyXG4gICAqL1xyXG4gIHRhcmdldFdpZHRoPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIEhlaWdodCBpbiBwaXhlbHMgdG8gc2NhbGUgaW1hZ2UuIE11c3QgYmUgdXNlZCB3aXRoIHRhcmdldFdpZHRoLlxyXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxyXG4gICAqL1xyXG4gIHRhcmdldEhlaWdodD86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBTZXQgdGhlIHR5cGUgb2YgbWVkaWEgdG8gc2VsZWN0IGZyb20uIE9ubHkgd29ya3Mgd2hlbiBQaWN0dXJlU291cmNlVHlwZVxyXG4gICAqIGlzIFBIT1RPTElCUkFSWSBvciBTQVZFRFBIT1RPQUxCVU0uIERlZmluZWQgaW4gQ2FtZXJhLk1lZGlhVHlwZVxyXG4gICAqICAgICAgUElDVFVSRTogMCAgICAgIGFsbG93IHNlbGVjdGlvbiBvZiBzdGlsbCBwaWN0dXJlcyBvbmx5LiBERUZBVUxULlxyXG4gICAqICAgICAgICAgIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZVxyXG4gICAqICAgICAgVklERU86IDEgICAgICAgIGFsbG93IHNlbGVjdGlvbiBvZiB2aWRlbyBvbmx5LCBXSUxMIEFMV0FZUyBSRVRVUk4gRklMRV9VUklcclxuICAgKiAgICAgIEFMTE1FRElBIDogMiAgICBhbGxvdyBzZWxlY3Rpb24gZnJvbSBhbGwgbWVkaWEgdHlwZXNcclxuICAgKi9cclxuICBtZWRpYVR5cGU/OiBudW1iZXI7XHJcbiAgLyoqIFJvdGF0ZSB0aGUgaW1hZ2UgdG8gY29ycmVjdCBmb3IgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBkZXZpY2UgZHVyaW5nIGNhcHR1cmUuICovXHJcbiAgY29ycmVjdE9yaWVudGF0aW9uPzogYm9vbGVhbjtcclxuICAvKiogU2F2ZSB0aGUgaW1hZ2UgdG8gdGhlIHBob3RvIGFsYnVtIG9uIHRoZSBkZXZpY2UgYWZ0ZXIgY2FwdHVyZS4gKi9cclxuICBzYXZlVG9QaG90b0FsYnVtPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBDaG9vc2UgdGhlIGNhbWVyYSB0byB1c2UgKGZyb250LSBvciBiYWNrLWZhY2luZykuXHJcbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuRGlyZWN0aW9uLiBEZWZhdWx0IGlzIEJBQ0suXHJcbiAgICogICAgICBCQUNLOiAwXHJcbiAgICogICAgICBGUk9OVDogMVxyXG4gICAqL1xyXG4gIGNhbWVyYURpcmVjdGlvbj86IG51bWJlcjtcclxuICAvKiogaU9TLW9ubHkgb3B0aW9ucyB0aGF0IHNwZWNpZnkgcG9wb3ZlciBsb2NhdGlvbiBpbiBpUGFkLiBEZWZpbmVkIGluIENhbWVyYVBvcG92ZXJPcHRpb25zLiAqL1xyXG4gIHBvcG92ZXJPcHRpb25zPzogQ2FtZXJhUG9wb3Zlck9wdGlvbnM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBpT1Mtb25seSBwYXJhbWV0ZXJzIHRoYXQgc3BlY2lmeSB0aGUgYW5jaG9yIGVsZW1lbnQgbG9jYXRpb24gYW5kIGFycm93IGRpcmVjdGlvblxyXG4gKiBvZiB0aGUgcG9wb3ZlciB3aGVuIHNlbGVjdGluZyBpbWFnZXMgZnJvbSBhbiBpUGFkJ3MgbGlicmFyeSBvciBhbGJ1bS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhUG9wb3Zlck9wdGlvbnMge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBEaXJlY3Rpb24gdGhlIGFycm93IG9uIHRoZSBwb3BvdmVyIHNob3VsZCBwb2ludC4gRGVmaW5lZCBpbiBDYW1lcmEuUG9wb3ZlckFycm93RGlyZWN0aW9uXHJcbiAgICogTWF0Y2hlcyBpT1MgVUlQb3BvdmVyQXJyb3dEaXJlY3Rpb24gY29uc3RhbnRzLlxyXG4gICAqICAgICAgQVJST1dfVVAgOiAxLFxyXG4gICAqICAgICAgQVJST1dfRE9XTiA6IDIsXHJcbiAgICogICAgICBBUlJPV19MRUZUIDogNCxcclxuICAgKiAgICAgIEFSUk9XX1JJR0hUIDogOCxcclxuICAgKiAgICAgIEFSUk9XX0FOWSA6IDE1XHJcbiAgICovXHJcbiAgYXJyb3dEaXI6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGVzdGluYXRpb25UeXBlIHtcclxuICBEQVRBX1VSTCA9IDAsXHJcbiAgRklMRV9VUkwsXHJcbiAgTkFUSVZFX1VSSSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRW5jb2RpbmdUeXBlIHtcclxuICBKUEVHID0gMCxcclxuICBQTkcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1lZGlhVHlwZSB7XHJcbiAgUElDVFVSRSA9IDAsXHJcbiAgVklERU8sXHJcbiAgQUxMTUVESUEsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBpY3R1cmVTb3VyY2VUeXBlIHtcclxuICBQSE9UT0xJQlJBUlkgPSAwLFxyXG4gIENBTUVSQSxcclxuICBTQVZFRFBIT1RPQUxCVU0sXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBvcG92ZXJBcnJvd0RpcmVjdGlvbiB7XHJcbiAgQVJST1dfVVAgPSAxLFxyXG4gIEFSUk9XX0RPV04sXHJcbiAgQVJST1dfTEVGVCxcclxuICBBUlJPV19SSUdIVCxcclxuICBBUlJPV19BTlksXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7XHJcbiAgQkFDSyA9IDAsXHJcbiAgRlJPTlQsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBDYW1lcmFcclxuICogQHByZW1pZXIgY2FtZXJhXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUYWtlIGEgcGhvdG8gb3IgY2FwdHVyZSB2aWRlby5cclxuICpcclxuICogUmVxdWlyZXMgdGhlIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tY2FtZXJhYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgQ2FtZXJhIFBsdWdpbiBEb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYSkuXHJcbiAqXHJcbiAqIFtXYXJuaW5nXSBTaW5jZSBJT1MgMTAgdGhlIGNhbWVyYSByZXF1aXJlcyBwZXJtaXNzaW9ucyB0byBiZSBwbGFjZWQgaW4geW91ciBjb25maWcueG1sIGFkZFxyXG4gKiBgYGB4bWxcclxuICogPGNvbmZpZy1maWxlIHBhcmVudD1cIk5TQ2FtZXJhVXNhZ2VEZXNjcmlwdGlvblwiIHBsYXRmb3JtPVwiaW9zXCIgdGFyZ2V0PVwiKi1JbmZvLnBsaXN0XCI+XHJcbiAqICA8c3RyaW5nPllvdSBjYW4gdGFrZSBwaG90b3M8L3N0cmluZz5cclxuICogPC9jb25maWctZmlsZT5cclxuICogYGBgXHJcbiAqIGluc2lkZSBvZiB0aGUgPHBsYXRmb3JtIG5hbWU9J2lvcz4gc2VjdGlvblxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBDYW1lcmEsIENhbWVyYU9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbWVyYS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbWVyYTogQ2FtZXJhKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0IG9wdGlvbnM6IENhbWVyYU9wdGlvbnMgPSB7XHJcbiAqICAgcXVhbGl0eTogMTAwLFxyXG4gKiAgIGRlc3RpbmF0aW9uVHlwZTogdGhpcy5jYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLFxyXG4gKiAgIGVuY29kaW5nVHlwZTogdGhpcy5jYW1lcmEuRW5jb2RpbmdUeXBlLkpQRUcsXHJcbiAqICAgbWVkaWFUeXBlOiB0aGlzLmNhbWVyYS5NZWRpYVR5cGUuUElDVFVSRVxyXG4gKiB9XHJcbiAqXHJcbiAqIHRoaXMuY2FtZXJhLmdldFBpY3R1cmUob3B0aW9ucykudGhlbigoaW1hZ2VEYXRhKSA9PiB7XHJcbiAqICAvLyBpbWFnZURhdGEgaXMgZWl0aGVyIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIG9yIGEgZmlsZSBVUklcclxuICogIC8vIElmIGl0J3MgYmFzZTY0IChEQVRBX1VSTCk6XHJcbiAqICBsZXQgYmFzZTY0SW1hZ2UgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwnICsgaW1hZ2VEYXRhO1xyXG4gKiB9LCAoZXJyKSA9PiB7XHJcbiAqICAvLyBIYW5kbGUgZXJyb3JcclxuICogfSk7XHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBDYW1lcmFPcHRpb25zXHJcbiAqIENhbWVyYVBvcG92ZXJPcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQ2FtZXJhJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jYW1lcmEnLFxyXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5jYW1lcmEnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYScsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIGRlc3RpbmF0aW9uIHR5cGVzXHJcbiAgICovXHJcbiAgRGVzdGluYXRpb25UeXBlID0ge1xyXG4gICAgLyoqIFJldHVybiBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuIERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSAqL1xyXG4gICAgREFUQV9VUkw6IDAsXHJcbiAgICAvKiogUmV0dXJuIGZpbGUgdXJpIChjb250ZW50Oi8vbWVkaWEvZXh0ZXJuYWwvaW1hZ2VzL21lZGlhLzIgZm9yIEFuZHJvaWQpICovXHJcbiAgICBGSUxFX1VSSTogMSxcclxuICAgIC8qKiBSZXR1cm4gbmF0aXZlIHVyaSAoZWcuIGFzc2V0LWxpYnJhcnk6Ly8uLi4gZm9yIGlPUykgKi9cclxuICAgIE5BVElWRV9VUkk6IDIsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKi9cclxuICBFbmNvZGluZ1R5cGUgPSB7XHJcbiAgICAvKiogUmV0dXJuIEpQRUcgZW5jb2RlZCBpbWFnZSAqL1xyXG4gICAgSlBFRzogMCxcclxuICAgIC8qKiBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2UgKi9cclxuICAgIFBORzogMSxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqL1xyXG4gIE1lZGlhVHlwZSA9IHtcclxuICAgIC8qKiBBbGxvdyBzZWxlY3Rpb24gb2Ygc3RpbGwgcGljdHVyZXMgb25seS4gREVGQVVMVC4gV2lsbCByZXR1cm4gZm9ybWF0IHNwZWNpZmllZCB2aWEgRGVzdGluYXRpb25UeXBlICovXHJcbiAgICBQSUNUVVJFOiAwLFxyXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBvZiB2aWRlbyBvbmx5LCBPTkxZIFJFVFVSTlMgVVJMICovXHJcbiAgICBWSURFTzogMSxcclxuICAgIC8qKiBBbGxvdyBzZWxlY3Rpb24gZnJvbSBhbGwgbWVkaWEgdHlwZXMgKi9cclxuICAgIEFMTE1FRElBOiAyLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICovXHJcbiAgUGljdHVyZVNvdXJjZVR5cGUgPSB7XHJcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFBIT1RPTElCUkFSWSBmb3IgQW5kcm9pZCkgKi9cclxuICAgIFBIT1RPTElCUkFSWTogMCxcclxuICAgIC8qKiBUYWtlIHBpY3R1cmUgZnJvbSBjYW1lcmEgKi9cclxuICAgIENBTUVSQTogMSxcclxuICAgIC8qKiBDaG9vc2UgaW1hZ2UgZnJvbSBwaWN0dXJlIGxpYnJhcnkgKHNhbWUgYXMgU0FWRURQSE9UT0FMQlVNIGZvciBBbmRyb2lkKSAqL1xyXG4gICAgU0FWRURQSE9UT0FMQlVNOiAyLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICovXHJcbiAgUG9wb3ZlckFycm93RGlyZWN0aW9uID0ge1xyXG4gICAgQVJST1dfVVA6IDEsXHJcbiAgICBBUlJPV19ET1dOOiAyLFxyXG4gICAgQVJST1dfTEVGVDogNCxcclxuICAgIEFSUk9XX1JJR0hUOiA4LFxyXG4gICAgQVJST1dfQU5ZOiAxNSxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqL1xyXG4gIERpcmVjdGlvbiA9IHtcclxuICAgIC8qKiBVc2UgdGhlIGJhY2stZmFjaW5nIGNhbWVyYSAqL1xyXG4gICAgQkFDSzogMCxcclxuICAgIC8qKiBVc2UgdGhlIGZyb250LWZhY2luZyBjYW1lcmEgKi9cclxuICAgIEZST05UOiAxLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFRha2UgYSBwaWN0dXJlIG9yIHZpZGVvLCBvciBsb2FkIG9uZSBmcm9tIHRoZSBsaWJyYXJ5LlxyXG4gICAqIEBwYXJhbSB7Q2FtZXJhT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnMgdGhhdCB5b3Ugd2FudCB0byBwYXNzIHRvIHRoZSBjYW1lcmEuIEVuY29kaW5nIHR5cGUsIHF1YWxpdHksIGV0Yy4gUGxhdGZvcm0tc3BlY2lmaWMgcXVpcmtzIGFyZSBkZXNjcmliZWQgaW4gdGhlIFtDb3Jkb3ZhIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYSNjYW1lcmFvcHRpb25zLWVycmF0YS0pLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBCYXNlNjQgZW5jb2Rpbmcgb2YgdGhlIGltYWdlIGRhdGEsIG9yIHRoZSBpbWFnZSBmaWxlIFVSSSwgZGVwZW5kaW5nIG9uIGNhbWVyYU9wdGlvbnMsIG90aGVyd2lzZSByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgZ2V0UGljdHVyZShvcHRpb25zPzogQ2FtZXJhT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgaW50ZXJtZWRpYXRlIGltYWdlIGZpbGVzIHRoYXQgYXJlIGtlcHQgaW4gdGVtcG9yYXJ5IHN0b3JhZ2UgYWZ0ZXIgY2FsbGluZyBjYW1lcmEuZ2V0UGljdHVyZS5cclxuICAgKiBBcHBsaWVzIG9ubHkgd2hlbiB0aGUgdmFsdWUgb2YgQ2FtZXJhLnNvdXJjZVR5cGUgZXF1YWxzIENhbWVyYS5QaWN0dXJlU291cmNlVHlwZS5DQU1FUkEgYW5kIHRoZSBDYW1lcmEuZGVzdGluYXRpb25UeXBlIGVxdWFscyBDYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxyXG4gIH0pXHJcbiAgY2xlYW51cCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=