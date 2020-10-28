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
var DocumentPickerOriginal = /** @class */ (function (_super) {
    __extends(DocumentPickerOriginal, _super);
    function DocumentPickerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentPickerOriginal.prototype.getFile = function (option) { return cordova(this, "getFile", {}, arguments); };
    DocumentPickerOriginal.pluginName = "IOSDocumentPicker";
    DocumentPickerOriginal.plugin = "cordova-plugin-documentpicker.DocumentPicker";
    DocumentPickerOriginal.pluginRef = "DocumentPicker";
    DocumentPickerOriginal.repo = "https://github.com/iampossible/Cordova-DocPicker";
    DocumentPickerOriginal.platforms = ["iOS"];
    return DocumentPickerOriginal;
}(IonicNativePlugin));
var DocumentPicker = new DocumentPickerOriginal();
export { DocumentPicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RvY3VtZW50LXBpY2tlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQnBDLGtDQUFpQjs7OztJQU9uRCxnQ0FBTyxhQUFDLE1BQWU7Ozs7Ozt5QkF2Q3pCO0VBZ0NvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgaU9TIERvY3VtZW50UGlja2VyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPcGVucyB0aGUgZmlsZSBwaWNrZXIgb24gaU9TIGZvciB0aGUgdXNlciB0byBzZWxlY3QgYSBmaWxlLCByZXR1cm5zIGEgZmlsZSBVUkkuXHJcbiAqIEFsbG93cyB0aGUgdXNlciB0byB1cGxvYWQgZmlsZXMgZnJvbSBpQ2xvdWRcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRG9jdW1lbnRQaWNrZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RvY3VtZW50LXBpY2tlci9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvY1BpY2tlcjogRG9jdW1lbnRQaWNrZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5kb2NQaWNrZXIuZ2V0RmlsZSgnYWxsJylcclxuICogICAudGhlbih1cmkgPT4gY29uc29sZS5sb2codXJpKSlcclxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0lPU0RvY3VtZW50UGlja2VyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kb2N1bWVudHBpY2tlci5Eb2N1bWVudFBpY2tlcicsXHJcbiAgcGx1Z2luUmVmOiAnRG9jdW1lbnRQaWNrZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaWFtcG9zc2libGUvQ29yZG92YS1Eb2NQaWNrZXInLFxyXG4gIHBsYXRmb3JtczogWydpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRQaWNrZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogT3BlbiBhIGZpbGVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbl0gZmlsZXMgYmV0d2VlbiAnaW1hZ2UnLCAncGRmJyBvciAnYWxsJ1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEZpbGUob3B0aW9uPzogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19