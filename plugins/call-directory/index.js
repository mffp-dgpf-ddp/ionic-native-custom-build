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
var CallDirectoryOriginal = /** @class */ (function (_super) {
    __extends(CallDirectoryOriginal, _super);
    function CallDirectoryOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallDirectoryOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    CallDirectoryOriginal.prototype.addIdentification = function (items) { return cordova(this, "addIdentification", {}, arguments); };
    CallDirectoryOriginal.prototype.removeIdentification = function (items) { return cordova(this, "removeIdentification", {}, arguments); };
    CallDirectoryOriginal.prototype.removeAllIdentification = function () { return cordova(this, "removeAllIdentification", {}, arguments); };
    CallDirectoryOriginal.prototype.getAllItems = function () { return cordova(this, "getAllItems", {}, arguments); };
    CallDirectoryOriginal.prototype.reloadExtension = function () { return cordova(this, "reloadExtension", {}, arguments); };
    CallDirectoryOriginal.prototype.getLog = function () { return cordova(this, "getLog", {}, arguments); };
    CallDirectoryOriginal.pluginName = "CallDirectory";
    CallDirectoryOriginal.plugin = "cordova-plugin-call-directory";
    CallDirectoryOriginal.pluginRef = "CallDirectory";
    CallDirectoryOriginal.repo = "https://github.com/GEDYSIntraWare/cordova-plugin-call-directory";
    CallDirectoryOriginal.install = "cordova plugin add cordova-plugin-call-directory --variable EXT_NAME=\"Cordova-Directory\" --variable ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES=\"NO\"";
    CallDirectoryOriginal.installVariables = ["EXT_NAME", "ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES"];
    CallDirectoryOriginal.platforms = ["iOS"];
    return CallDirectoryOriginal;
}(IonicNativePlugin));
var CallDirectory = new CallDirectoryOriginal();
export { CallDirectory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbGwtZGlyZWN0b3J5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW1EckMsaUNBQWlCOzs7O0lBTWxELG1DQUFXO0lBVVgseUNBQWlCLGFBQUMsS0FBMEI7SUFVNUMsNENBQW9CLGFBQUMsS0FBMEI7SUFTL0MsK0NBQXVCO0lBU3ZCLG1DQUFXO0lBU1gsdUNBQWU7SUFTZiw4QkFBTTs7Ozs7Ozs7d0JBbEhSO0VBb0RtQyxpQkFBaUI7U0FBdkMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbGxEaXJlY3RvcnlJdGVtIHtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIG51bWJlcjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbGxEaXJlY3RvcnlMb2cge1xyXG4gIHBsdWdpbjogc3RyaW5nW107XHJcbiAgZXh0ZW5zaW9uOiBzdHJpbmdbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIENhbGwgRGlyZWN0b3J5XHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBjYW4gYWRkIHBob25lIG51bWJlcnMgdG8gYW4gQ2FsbGtpdCBjYWxsIGRpcmVjdG9yeSBleHRlbnNpb24uIENhbGwgYHJlbG9hZEV4dGVuc2lvbmAgYWZ0ZXIgdXNpbmcgYGFkZElkZW50aWZpY2F0aW9uYCBhbmQgYHJlbW92ZUlkZW50aWZpY2F0aW9uYFxyXG4gKiB0byBwcm9jZXNzIHRoZSBjaGFuZ2VzIGluIHRoZSBjYWxsIGRpcmVjdG9yeSBleHRlbnNpb24uXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IENhbGxEaXJlY3RvcnkgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbGwtZGlyZWN0b3J5L25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FsbERpcmVjdG9yeTogQ2FsbERpcmVjdG9yeSkgeyB9XHJcbiAqXHJcbiAqXHJcbiAqIGxldCBpdGVtcyA9IFt7bGFiZWw6IFwiSGVsbG9cIiwgbnVtYmVyOiBcIjEyM1wifV07XHJcbiAqIHRoaXMuY2FsbERpcmVjdG9yeS5hZGRJZGVudGlmaWNhdGlvbihpdGVtcylcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIHRoaXMuY2FsbERpcmVjdG9yeS5yZWxvYWRFeHRlbnNpb24oKVxyXG4gKiAgIC50aGVuKHJlczogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKiBgYGBcclxuICpcclxuICogQEludGVyZmFjZXNcclxuICogQ2FsbERpcmVjdG9yeUl0ZW1cclxuICogQ2FsbERpcmVjdG9yeUxvZ1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0NhbGxEaXJlY3RvcnknLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNhbGwtZGlyZWN0b3J5JyxcclxuICBwbHVnaW5SZWY6ICdDYWxsRGlyZWN0b3J5JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0dFRFlTSW50cmFXYXJlL2NvcmRvdmEtcGx1Z2luLWNhbGwtZGlyZWN0b3J5JyxcclxuICBpbnN0YWxsOlxyXG4gICAgJ2NvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1jYWxsLWRpcmVjdG9yeSAtLXZhcmlhYmxlIEVYVF9OQU1FPVwiQ29yZG92YS1EaXJlY3RvcnlcIiAtLXZhcmlhYmxlIEFMV0FZU19FTUJFRF9TV0lGVF9TVEFOREFSRF9MSUJSQVJJRVM9XCJOT1wiJyxcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0VYVF9OQU1FJywgJ0FMV0FZU19FTUJFRF9TV0lGVF9TVEFOREFSRF9MSUJSQVJJRVMnXSxcclxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhbGxEaXJlY3RvcnkgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdGhlIGNhbGwgZGlyZWN0b3J5IGV4dGVuc2lvbiBpcyBhdmFpbGFibGUgYW5kIGVuYWJsZWRcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHJlc3VsdFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpc0F2YWlsYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBpZGVudGlmaWNhdGlvbiBudW1iZXJzXHJcbiAgICogQHBhcmFtIHtDYWxsRGlyZWN0b3J5SXRlbVtdfSBpdGVtcyBTZXQgb2YgbnVtYmVycyB3aXRoIGxhYmVsc1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIG51bWJlcnMgYXJlIGFkZGVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGFkZElkZW50aWZpY2F0aW9uKGl0ZW1zOiBDYWxsRGlyZWN0b3J5SXRlbVtdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBpZGVudGlmaWNhdGlvbiBudW1iZXJzXHJcbiAgICogQHBhcmFtIHtDYWxsRGlyZWN0b3J5SXRlbVtdfSBpdGVtcyBTZXQgb2YgbnVtYmVycyB3aXRoIGFyYml0cmFyeSBsYWJlbFxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIG51bWJlcnMgYXJlIHJlbW92ZWRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVtb3ZlSWRlbnRpZmljYXRpb24oaXRlbXM6IENhbGxEaXJlY3RvcnlJdGVtW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGFsbCBpdGVtcyBmcm9tIGNhbGwgZGlyZWN0b3J5LiBSZWZyZXNoZXMgaW1tZWRpYXRlbHkuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSBhZnRlciByZWZyZXNoIHdpdGggbWVzc2FnZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZW1vdmVBbGxJZGVudGlmaWNhdGlvbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGFsbCBudW1iZXJzIGFuZCBsYWJlbHMgaW4gY2FsbCBkaXJlY3RvcnlcclxuICAgKiBAcmV0dXJuIHtDYWxsRGlyZWN0b3J5SXRlbVtdfSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gYXJyYXkgb2YgYWxsIGl0ZW1zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEFsbEl0ZW1zKCk6IFByb21pc2U8Q2FsbERpcmVjdG9yeUl0ZW1bXT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVsb2FkIGV4dGVuc2lvbiB0byBwcm9jZXNzIHF1ZXVlZCBjaGFuZ2VzXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSBhZnRlciByZWZyZXNoIHdpdGggbWVzc2FnZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZWxvYWRFeHRlbnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBsb2cgZnJvbSBwbHVnaW4gYW5kIGNhbGwgZGlyZWN0b3J5IGV4dGVuc2lvblxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Q2FsbERpcmVjdG9yeUxvZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggYW4gb2JqZWN0IG9mIGxvZyBtZXNzYWdlc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRMb2coKTogUHJvbWlzZTxDYWxsRGlyZWN0b3J5TG9nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==