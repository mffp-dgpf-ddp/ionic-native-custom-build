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
var DBMeterOriginal = /** @class */ (function (_super) {
    __extends(DBMeterOriginal, _super);
    function DBMeterOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DBMeterOriginal.prototype.start = function () { return cordova(this, "start", { "observable": true, "clearFunction": "stop" }, arguments); };
    DBMeterOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    DBMeterOriginal.prototype.isListening = function () { return cordova(this, "isListening", {}, arguments); };
    DBMeterOriginal.prototype.delete = function () { return cordova(this, "delete", {}, arguments); };
    DBMeterOriginal.pluginName = "DBMeter";
    DBMeterOriginal.plugin = "cordova-plugin-dbmeter";
    DBMeterOriginal.pluginRef = "DBMeter";
    DBMeterOriginal.repo = "https://github.com/akofman/cordova-plugin-dbmeter";
    DBMeterOriginal.platforms = ["Android", "iOS"];
    return DBMeterOriginal;
}(IonicNativePlugin));
var DBMeter = new DBMeterOriginal();
export { DBMeter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RiLW1ldGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBMENMLDJCQUFpQjs7OztJQVM1Qyx1QkFBSztJQVNMLHNCQUFJO0lBU0osNkJBQVc7SUFTWCx3QkFBTTs7Ozs7O2tCQWhGUjtFQTRDNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQG5hbWUgREIgTWV0ZXJcclxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGRlZmluZXMgYSBnbG9iYWwgREJNZXRlciBvYmplY3QsIHdoaWNoIHBlcm1pdHMgdG8gZ2V0IHRoZSBkZWNpYmVsIHZhbHVlcyBmcm9tIHRoZSBtaWNyb3Bob25lLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBEQk1ldGVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kYi1tZXRlci9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRiTWV0ZXI6IERCTWV0ZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogLy8gU3RhcnQgbGlzdGVuaW5nXHJcbiAqIGxldCBzdWJzY3JpcHRpb24gPSB0aGlzLmRiTWV0ZXIuc3RhcnQoKS5zdWJzY3JpYmUoXHJcbiAqICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKVxyXG4gKiApO1xyXG4gKlxyXG4gKiAvLyBDaGVjayBpZiB3ZSBhcmUgbGlzdGVuaW5nXHJcbiAqIHRoaXMuZGJNZXRlci5pc0xpc3RlbmluZygpLnRoZW4oXHJcbiAqICAgaXNMaXN0ZW5pbmcgPT4gY29uc29sZS5sb2coaXNMaXN0ZW5pbmcpXHJcbiAqICk7XHJcbiAqXHJcbiAqIC8vIFN0b3AgbGlzdGVuaW5nXHJcbiAqIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gKlxyXG4gKiAvLyBEZWxldGUgREJNZXRlciBpbnN0YW5jZSBmcm9tIG1lbW9yeVxyXG4gKiB0aGlzLmRiTWV0ZXIuZGVsZXRlKCkudGhlbihcclxuICogICAoKSA9PiBjb25zb2xlLmxvZygnRGVsZXRlZCBEQiBNZXRlciBpbnN0YW5jZScpLFxyXG4gKiAgIGVycm9yID0+IGNvbnNvbGUubG9nKCdFcnJvciBvY2N1cnJlZCB3aGlsZSBkZWxldGluZyBEQiBNZXRlciBpbnN0YW5jZScpXHJcbiAqICk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0RCTWV0ZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRibWV0ZXInLFxyXG4gIHBsdWdpblJlZjogJ0RCTWV0ZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYWtvZm1hbi9jb3Jkb3ZhLXBsdWdpbi1kYm1ldGVyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgREJNZXRlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBTdGFydHMgbGlzdGVuaW5nXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlLiBTdWJzY3JpYmUgdG8gc3RhcnQgbGlzdGVuaW5nLiBVbnN1YnNjcmliZSB0byBzdG9wIGxpc3RlbmluZy5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3AnLFxyXG4gIH0pXHJcbiAgc3RhcnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3BzIGxpc3RlbmluZ1xyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RvcCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdGhlIERCIE1ldGVyIGlzIGxpc3RlbmluZ1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgdGVsbHMgdXMgd2hldGhlciB0aGUgREIgbWV0ZXIgaXMgbGlzdGVuaW5nXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzTGlzdGVuaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlIHRoZSBEQiBNZXRlciBpbnN0YW5jZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIGlmIHRoZSBpbnN0YW5jZSBoYXMgYmVlbiBkZWxldGVkLCBhbmQgcmVqZWN0cyBpZiBlcnJvcnMgb2NjdXIuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRlbGV0ZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=