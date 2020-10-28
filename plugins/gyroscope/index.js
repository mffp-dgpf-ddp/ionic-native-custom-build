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
var GyroscopeOriginal = /** @class */ (function (_super) {
    __extends(GyroscopeOriginal, _super);
    function GyroscopeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Watching for gyroscope sensor changes
     * @param {GyroscopeOptions} [options]
     * @return {Observable<GyroscopeOrientation>} Returns an Observable that resolves GyroscopeOrientation
     */
    GyroscopeOriginal.prototype.watch = function (options) {
        return new Observable(function (observer) {
            var watchId = navigator.gyroscope.watch(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.gyroscope.clearWatch(watchId); };
        });
    };
    GyroscopeOriginal.prototype.getCurrent = function (options) { return cordova(this, "getCurrent", { "callbackOrder": "reverse" }, arguments); };
    GyroscopeOriginal.pluginName = "Gyroscope";
    GyroscopeOriginal.plugin = "cordova-plugin-gyroscope";
    GyroscopeOriginal.pluginRef = "navigator.gyroscope";
    GyroscopeOriginal.repo = "https://github.com/NeoLSN/cordova-plugin-gyroscope";
    GyroscopeOriginal.platforms = ["Android", "iOS"];
    return GyroscopeOriginal;
}(IonicNativePlugin));
var Gyroscope = new GyroscopeOriginal();
export { Gyroscope };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2d5cm9zY29wZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQWtGSCw2QkFBaUI7Ozs7SUFDOUM7Ozs7T0FJRztJQUNILHlCQUFLLEdBQUwsVUFBTSxPQUEwQjtRQUM5QixPQUFPLElBQUksVUFBVSxDQUF1QixVQUFDLFFBQWE7WUFDeEQsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDL0csT0FBTyxjQUFNLE9BQUEsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQXZDLENBQXVDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBVUQsOEJBQVUsYUFBQyxPQUEwQjs7Ozs7O29CQXhHdkM7RUFtRitCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBuYXZpZ2F0b3I6IGFueTtcclxuXHJcbi8qKlxyXG4gKiAgQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBHeXJvc2NvcGVPcmllbnRhdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogIFJlcHJlc2VudCB4LWF4aXNcclxuICAgKi9cclxuICB4OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqICBSZXByZXNlbnQgeS1heGlzXHJcbiAgICovXHJcbiAgeTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiAgUmVwcmVzZW50IHotYXhpc1xyXG4gICAqL1xyXG4gIHo6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogIFJlcHJlc2VudCB0aW1lc3RhbXAgb2Ygc2Vuc29yIHJlYWQuIERlZmF1bHQgaXMgMTAwMDBtc1xyXG4gICAqL1xyXG4gIHRpbWVzdGFtcDogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3lyb3Njb3BlT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogIFJlcHJlc2VudCBob3cgb2Z0ZW4gKGluIG1pbGxpc2Vjb25kcykgc2Vuc29yIHNob3VsZCBiZSByZWFkLiAgRGVmYXVsdCBpcyAxMDAwMCBtc1xyXG4gICAqL1xyXG4gIGZyZXF1ZW5jeTogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgR3lyb3Njb3BlXHJcbiAqIEBkZXNjcmlwdGlvbiBSZWFkIEd5cm9zY29wZSBzZW5zb3IgZGF0YVxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBHeXJvc2NvcGUsIEd5cm9zY29wZU9yaWVudGF0aW9uLCBHeXJvc2NvcGVPcHRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9neXJvc2NvcGUvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBneXJvc2NvcGU6IEd5cm9zY29wZSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiBsZXQgb3B0aW9uczogR3lyb3Njb3BlT3B0aW9ucyA9IHtcclxuICogICAgZnJlcXVlbmN5OiAxMDAwXHJcbiAqIH1cclxuICpcclxuICogdGhpcy5neXJvc2NvcGUuZ2V0Q3VycmVudChvcHRpb25zKVxyXG4gKiAgIC50aGVuKChvcmllbnRhdGlvbjogR3lyb3Njb3BlT3JpZW50YXRpb24pID0+IHtcclxuICogICAgICBjb25zb2xlLmxvZyhvcmllbnRhdGlvbi54LCBvcmllbnRhdGlvbi55LCBvcmllbnRhdGlvbi56LCBvcmllbnRhdGlvbi50aW1lc3RhbXApO1xyXG4gKiAgICB9KVxyXG4gKiAgIC5jYXRjaCgpXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuZ3lyb3Njb3BlLndhdGNoKClcclxuICogICAgLnN1YnNjcmliZSgob3JpZW50YXRpb246IEd5cm9zY29wZU9yaWVudGF0aW9uKSA9PiB7XHJcbiAqICAgICAgIGNvbnNvbGUubG9nKG9yaWVudGF0aW9uLngsIG9yaWVudGF0aW9uLnksIG9yaWVudGF0aW9uLnosIG9yaWVudGF0aW9uLnRpbWVzdGFtcCk7XHJcbiAqICAgIH0pO1xyXG4gKlxyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogR3lyb3Njb3BlT3JpZW50YXRpb25cclxuICogR3lyb3Njb3BlT3B0aW9uc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0d5cm9zY29wZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ3lyb3Njb3BlJyxcclxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuZ3lyb3Njb3BlJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL05lb0xTTi9jb3Jkb3ZhLXBsdWdpbi1neXJvc2NvcGUnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHeXJvc2NvcGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogV2F0Y2hpbmcgZm9yIGd5cm9zY29wZSBzZW5zb3IgY2hhbmdlc1xyXG4gICAqIEBwYXJhbSB7R3lyb3Njb3BlT3B0aW9uc30gW29wdGlvbnNdXHJcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxHeXJvc2NvcGVPcmllbnRhdGlvbj59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IHJlc29sdmVzIEd5cm9zY29wZU9yaWVudGF0aW9uXHJcbiAgICovXHJcbiAgd2F0Y2gob3B0aW9ucz86IEd5cm9zY29wZU9wdGlvbnMpOiBPYnNlcnZhYmxlPEd5cm9zY29wZU9yaWVudGF0aW9uPiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8R3lyb3Njb3BlT3JpZW50YXRpb24+KChvYnNlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgIGNvbnN0IHdhdGNoSWQgPSBuYXZpZ2F0b3IuZ3lyb3Njb3BlLndhdGNoKG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksIG9wdGlvbnMpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gbmF2aWdhdG9yLmd5cm9zY29wZS5jbGVhcldhdGNoKHdhdGNoSWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgY3VycmVudCBkYXRhIGZyb20gZ3lyb3Njb3BlIHNlbnNvclxyXG4gICAqIEBwYXJhbSB7R3lyb3Njb3BlT3B0aW9uc30gW29wdGlvbnNdXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxHeXJvc2NvcGVPcmllbnRhdGlvbj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgR3lyb3Njb3BlT3JpZW50YXRpb25cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBnZXRDdXJyZW50KG9wdGlvbnM/OiBHeXJvc2NvcGVPcHRpb25zKTogUHJvbWlzZTxHeXJvc2NvcGVPcmllbnRhdGlvbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=