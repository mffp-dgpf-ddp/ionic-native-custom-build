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
var CalendarOriginal = /** @class */ (function (_super) {
    __extends(CalendarOriginal, _super);
    function CalendarOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarOriginal.prototype.hasReadWritePermission = function () { return cordova(this, "hasReadWritePermission", {}, arguments); };
    CalendarOriginal.prototype.hasReadPermission = function () { return cordova(this, "hasReadPermission", {}, arguments); };
    CalendarOriginal.prototype.hasWritePermission = function () { return cordova(this, "hasWritePermission", {}, arguments); };
    CalendarOriginal.prototype.requestWritePermission = function () { return cordova(this, "requestWritePermission", {}, arguments); };
    CalendarOriginal.prototype.requestReadPermission = function () { return cordova(this, "requestReadPermission", {}, arguments); };
    CalendarOriginal.prototype.requestReadWritePermission = function () { return cordova(this, "requestReadWritePermission", {}, arguments); };
    CalendarOriginal.prototype.createCalendar = function (nameOrOptions) { return cordova(this, "createCalendar", {}, arguments); };
    CalendarOriginal.prototype.deleteCalendar = function (name) { return cordova(this, "deleteCalendar", {}, arguments); };
    CalendarOriginal.prototype.getCalendarOptions = function () { return cordova(this, "getCalendarOptions", { "sync": true }, arguments); };
    CalendarOriginal.prototype.getCreateCalendarOptions = function () { return cordova(this, "getCreateCalendarOptions", { "sync": true }, arguments); };
    CalendarOriginal.prototype.createEvent = function (title, location, notes, startDate, endDate) { return cordova(this, "createEvent", {}, arguments); };
    CalendarOriginal.prototype.createEventWithOptions = function (title, location, notes, startDate, endDate, options) { return cordova(this, "createEventWithOptions", {}, arguments); };
    CalendarOriginal.prototype.createEventInteractively = function (title, location, notes, startDate, endDate) { return cordova(this, "createEventInteractively", {}, arguments); };
    CalendarOriginal.prototype.createEventInteractivelyWithOptions = function (title, location, notes, startDate, endDate, options) { return cordova(this, "createEventInteractivelyWithOptions", {}, arguments); };
    CalendarOriginal.prototype.findEvent = function (title, location, notes, startDate, endDate) { return cordova(this, "findEvent", {}, arguments); };
    CalendarOriginal.prototype.findEventWithOptions = function (title, location, notes, startDate, endDate, options) { return cordova(this, "findEventWithOptions", {}, arguments); };
    CalendarOriginal.prototype.listEventsInRange = function (startDate, endDate) { return cordova(this, "listEventsInRange", { "platforms": ["Android"] }, arguments); };
    CalendarOriginal.prototype.listCalendars = function () { return cordova(this, "listCalendars", {}, arguments); };
    CalendarOriginal.prototype.findAllEventsInNamedCalendar = function (calendarName) { return cordova(this, "findAllEventsInNamedCalendar", { "platforms": ["iOS"] }, arguments); };
    CalendarOriginal.prototype.modifyEvent = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate) { return cordova(this, "modifyEvent", { "platforms": ["iOS"] }, arguments); };
    CalendarOriginal.prototype.modifyEventWithOptions = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, filterOptions, newOptions) { return cordova(this, "modifyEventWithOptions", { "platforms": ["iOS"] }, arguments); };
    CalendarOriginal.prototype.deleteEvent = function (title, location, notes, startDate, endDate) { return cordova(this, "deleteEvent", {}, arguments); };
    CalendarOriginal.prototype.deleteEventFromNamedCalendar = function (title, location, notes, startDate, endDate, calendarName) { return cordova(this, "deleteEventFromNamedCalendar", { "platforms": ["iOS"] }, arguments); };
    CalendarOriginal.prototype.deleteEventById = function (id, fromDate) { return cordova(this, "deleteEventById", {}, arguments); };
    CalendarOriginal.prototype.openCalendar = function (date) { return cordova(this, "openCalendar", {}, arguments); };
    CalendarOriginal.pluginName = "Calendar";
    CalendarOriginal.plugin = "cordova-plugin-calendar";
    CalendarOriginal.pluginRef = "plugins.calendar";
    CalendarOriginal.repo = "https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin";
    CalendarOriginal.platforms = ["Android", "iOS"];
    return CalendarOriginal;
}(IonicNativePlugin));
var Calendar = new CalendarOriginal();
export { Calendar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbGVuZGFyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTBGMUMsNEJBQWlCOzs7O0lBYTdDLHlDQUFzQjtJQVN0QixvQ0FBaUI7SUFTakIscUNBQWtCO0lBU2xCLHlDQUFzQjtJQVN0Qix3Q0FBcUI7SUFTckIsNkNBQTBCO0lBVzFCLGlDQUFjLGFBQUMsYUFBcUM7SUFVcEQsaUNBQWMsYUFBQyxJQUFZO0lBWTNCLHFDQUFrQjtJQVlsQiwyQ0FBd0I7SUFjeEIsOEJBQVcsYUFBQyxLQUFjLEVBQUUsUUFBaUIsRUFBRSxLQUFjLEVBQUUsU0FBZ0IsRUFBRSxPQUFjO0lBZ0IvRix5Q0FBc0IsYUFDcEIsS0FBYyxFQUNkLFFBQWlCLEVBQ2pCLEtBQWMsRUFDZCxTQUFnQixFQUNoQixPQUFjLEVBQ2QsT0FBeUI7SUFnQjNCLDJDQUF3QixhQUN0QixLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWM7SUFpQmhCLHNEQUFtQyxhQUNqQyxLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWMsRUFDZCxPQUF5QjtJQWdCM0IsNEJBQVMsYUFBQyxLQUFjLEVBQUUsUUFBaUIsRUFBRSxLQUFjLEVBQUUsU0FBZ0IsRUFBRSxPQUFjO0lBZTdGLHVDQUFvQixhQUNsQixLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWMsRUFDZCxPQUF5QjtJQWUzQixvQ0FBaUIsYUFBQyxTQUFlLEVBQUUsT0FBYTtJQVNoRCxnQ0FBYTtJQVdiLCtDQUE0QixhQUFDLFlBQW9CO0lBc0JqRCw4QkFBVyxhQUNULEtBQWMsRUFDZCxRQUFpQixFQUNqQixLQUFjLEVBQ2QsU0FBZ0IsRUFDaEIsT0FBYyxFQUNkLFFBQWlCLEVBQ2pCLFdBQW9CLEVBQ3BCLFFBQWlCLEVBQ2pCLFlBQW1CLEVBQ25CLFVBQWlCO0lBeUJuQix5Q0FBc0IsYUFDcEIsS0FBYyxFQUNkLFFBQWlCLEVBQ2pCLEtBQWMsRUFDZCxTQUFnQixFQUNoQixPQUFjLEVBQ2QsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsUUFBaUIsRUFDakIsWUFBbUIsRUFDbkIsVUFBaUIsRUFDakIsYUFBK0IsRUFDL0IsVUFBNEI7SUFnQjlCLDhCQUFXLGFBQUMsS0FBYyxFQUFFLFFBQWlCLEVBQUUsS0FBYyxFQUFFLFNBQWdCLEVBQUUsT0FBYztJQWtCL0YsK0NBQTRCLGFBQzFCLEtBQWMsRUFDZCxRQUFpQixFQUNqQixLQUFjLEVBQ2QsU0FBZ0IsRUFDaEIsT0FBYyxFQUNkLFlBQXFCO0lBYXZCLGtDQUFlLGFBQUMsRUFBVSxFQUFFLFFBQWU7SUFVM0MsK0JBQVksYUFBQyxJQUFVOzs7Ozs7bUJBOWR6QjtFQTJGOEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYWxlbmRhck9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIElkXHJcbiAgICovXHJcbiAgaWQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgZmlyc3RSZW1pbmRlck1pbnV0ZXM/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgc2Vjb25kUmVtaW5kZXJNaW51dGVzPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBSZWN1cnJlbmNlLiBDYW4gYmUgc2V0IHRvIGBkYWlseWAsIGB3ZWVrbHlgLCBgbW9udGhseWAgb3IgYHllYXJseWBcclxuICAgKi9cclxuICByZWN1cnJlbmNlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBSZWN1cnJlbmNlIGludGVydmFsLiBWYWxpZCBvbmx5IHdoZW4gYHJlY3VycmVuY2VgIG9wdGlvbiBpcyBzZXQuXHJcbiAgICovXHJcbiAgcmVjdXJyZW5jZUludGVydmFsPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBSZWN1cnJlbmNlIGVuZCBkYXRlLiBWYWxpZCBvbmx5IHdoZW4gYHJlY3VycmVuY2VgIG9wdGlvbiBpcyBzZXQuXHJcbiAgICovXHJcbiAgcmVjdXJyZW5jZUVuZERhdGU/OiBEYXRlO1xyXG5cclxuICAvKipcclxuICAgKiBDYWxlbmRhciBuYW1lLiBUaHMgaXMgc3VwcG9ydGVkIGJ5IGBpT1NgIG9ubHkuXHJcbiAgICovXHJcbiAgY2FsZW5kYXJOYW1lPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDYWxlbmRhciBpZFxyXG4gICAqL1xyXG4gIGNhbGVuZGFySWQ/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFVSTFxyXG4gICAqL1xyXG4gIHVybD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOYW1lT3JPcHRpb25zIHtcclxuICAvKiogQ2FsZW5kYXIgbmFtZSAqL1xyXG4gIGNhbGVuZGFyTmFtZT86IHN0cmluZztcclxuXHJcbiAgLyoqIENhbGVuZGFyIGNvbG9yIGFzIGEgSEVYIHN0cmluZyAqL1xyXG4gIGNhbGVuZGFyQ29sb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBDYWxlbmRhclxyXG4gKiBAcHJlbWllciBjYWxlbmRhclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBhZGQgZXZlbnRzIHRvIHRoZSBDYWxlbmRhciBvZiB0aGUgbW9iaWxlIGRldmljZS5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1jYWxlbmRhcmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtDYWxlbmRhciBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL0NhbGVuZGFyLVBob25lR2FwLVBsdWdpbikuXHJcbiAqXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IENhbGVuZGFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jYWxlbmRhci9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbGVuZGFyOiBDYWxlbmRhcikgeyB9XHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuY2FsZW5kYXIuY3JlYXRlQ2FsZW5kYXIoJ015Q2FsZW5kYXInKS50aGVuKFxyXG4gKiAgIChtc2cpID0+IHsgY29uc29sZS5sb2cobXNnKTsgfSxcclxuICogICAoZXJyKSA9PiB7IGNvbnNvbGUubG9nKGVycik7IH1cclxuICogKTtcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIENhbGVuZGFyT3B0aW9uc1xyXG4gKiBOYW1lT3JPcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQ2FsZW5kYXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNhbGVuZGFyJyxcclxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmNhbGVuZGFyJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL0NhbGVuZGFyLVBob25lR2FwLVBsdWdpbicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gY2hlY2tzIGlmIHdlIGhhdmUgcGVybWlzc2lvbiB0byByZWFkL3dyaXRlIGZyb20vdG8gdGhlIGNhbGVuZGFyLlxyXG4gICAqIFRoZSBwcm9taXNlIHdpbGwgcmVzb2x2ZSB3aXRoIGB0cnVlYCB3aGVuOlxyXG4gICAqIC0gWW91J3JlIHJ1bm5pbmcgb24gaU9TLCBvclxyXG4gICAqIC0gWW91J3JlIHRhcmdldGluZyBBUEkgbGV2ZWwgbG93ZXIgdGhhbiAyMywgb3JcclxuICAgKiAtIFlvdSdyZSB1c2luZyBBbmRyb2lkIDwgNiwgb3JcclxuICAgKiAtIFlvdSd2ZSBhbHJlYWR5IGdyYW50ZWQgcGVybWlzc2lvblxyXG4gICAqXHJcbiAgICogSWYgdGhpcyByZXR1cm5zIGZhbHNlLCB5b3Ugc2hvdWxkIGNhbGwgdGhlIGByZXF1ZXN0UmVhZFdyaXRlUGVybWlzc2lvbmAgZnVuY3Rpb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaGFzUmVhZFdyaXRlUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHdlIGhhdmUgcmVhZCBwZXJtaXNzaW9uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGhhc1JlYWRQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgd2UgaGF2ZSB3cml0ZSBwZXJtaXNzaW9uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGhhc1dyaXRlUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcXVlc3Qgd3JpdGUgcGVybWlzc2lvblxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlcXVlc3RXcml0ZVBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcXVlc3QgcmVhZCBwZXJtaXNzaW9uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVxdWVzdFJlYWRQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXF1ZXN0cyByZWFkL3dyaXRlIHBlcm1pc3Npb25zXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVxdWVzdFJlYWRXcml0ZVBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGNhbGVuZGFyLiAoaU9TIG9ubHkpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZyB8IE5hbWVPck9wdGlvbnN9IG5hbWVPck9wdGlvbnMgIGVpdGhlciBhIHN0cmluZyBuYW1lIG9yIGEgb3B0aW9ucyBvYmplY3QuIElmIHN0cmluZywgcHJvdmlkZSB0aGUgY2FsZW5kYXIgbmFtZS4gSUYgYW4gb2JqZWN0LCBwcm92aWRlIGEgY2FsZW5kYXIgbmFtZSBhcyBhIHN0cmluZyBhbmQgYSBjYWxlbmRhciBjb2xvciBpbiBoZXggZm9ybWF0IGFzIGEgc3RyaW5nXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY3JlYXRlQ2FsZW5kYXIobmFtZU9yT3B0aW9uczogc3RyaW5nIHwgTmFtZU9yT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWxldGUgYSBjYWxlbmRhci4gKGlPUyBvbmx5KVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICBOYW1lIG9mIHRoZSBjYWxlbmRhciB0byBkZWxldGUuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZGVsZXRlQ2FsZW5kYXIobmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGRlZmF1bHQgY2FsZW5kYXIgb3B0aW9ucy5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge0NhbGVuZGFyT3B0aW9uc30gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgZGVmYXVsdCBjYWxlbmRhciBvcHRpb25zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIGdldENhbGVuZGFyT3B0aW9ucygpOiBDYWxlbmRhck9wdGlvbnMge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBvcHRpb25zIGZvciBhIGN1c3RvbSBjYWxlbmRlciB3aXRoIHNwZWNpZmljIGNvbG9yXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtOYW1lT3JPcHRpb25zfSBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSBkZWZhdWx0IG9wdGlvbnNcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgZ2V0Q3JlYXRlQ2FsZW5kYXJPcHRpb25zKCk6IE5hbWVPck9wdGlvbnMge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2lsZW50bHkgY3JlYXRlIGFuIGV2ZW50LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdICBUaGUgZXZlbnQgdGl0bGVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2F0aW9uXSAgVGhlIGV2ZW50IGxvY2F0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub3Rlc10gIFRoZSBldmVudCBub3Rlc1xyXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBldmVudCBzdGFydCBkYXRlXHJcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBldmVudCBlbmQgZGF0ZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNyZWF0ZUV2ZW50KHRpdGxlPzogc3RyaW5nLCBsb2NhdGlvbj86IHN0cmluZywgbm90ZXM/OiBzdHJpbmcsIHN0YXJ0RGF0ZT86IERhdGUsIGVuZERhdGU/OiBEYXRlKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNpbGVudGx5IGNyZWF0ZSBhbiBldmVudCB3aXRoIGFkZGl0aW9uYWwgb3B0aW9ucy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdICBUaGUgZXZlbnQgdGl0bGVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2F0aW9uXSAgVGhlIGV2ZW50IGxvY2F0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub3Rlc10gIFRoZSBldmVudCBub3Rlc1xyXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBldmVudCBzdGFydCBkYXRlXHJcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBldmVudCBlbmQgZGF0ZVxyXG4gICAqIEBwYXJhbSB7Q2FsZW5kYXJPcHRpb25zfSBbb3B0aW9uc10gIEFkZGl0aW9uYWwgb3B0aW9ucywgc2VlIGBnZXRDYWxlbmRhck9wdGlvbnNgXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY3JlYXRlRXZlbnRXaXRoT3B0aW9ucyhcclxuICAgIHRpdGxlPzogc3RyaW5nLFxyXG4gICAgbG9jYXRpb24/OiBzdHJpbmcsXHJcbiAgICBub3Rlcz86IHN0cmluZyxcclxuICAgIHN0YXJ0RGF0ZT86IERhdGUsXHJcbiAgICBlbmREYXRlPzogRGF0ZSxcclxuICAgIG9wdGlvbnM/OiBDYWxlbmRhck9wdGlvbnNcclxuICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW50ZXJhY3RpdmVseSBjcmVhdGUgYW4gZXZlbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RpdGxlXSAgVGhlIGV2ZW50IHRpdGxlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NhdGlvbl0gIFRoZSBldmVudCBsb2NhdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm90ZXNdICBUaGUgZXZlbnQgbm90ZXNcclxuICAgKiBAcGFyYW0ge0RhdGV9IFtzdGFydERhdGVdICBUaGUgZXZlbnQgc3RhcnQgZGF0ZVxyXG4gICAqIEBwYXJhbSB7RGF0ZX0gW2VuZERhdGVdICBUaGUgZXZlbnQgZW5kIGRhdGVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjcmVhdGVFdmVudEludGVyYWN0aXZlbHkoXHJcbiAgICB0aXRsZT86IHN0cmluZyxcclxuICAgIGxvY2F0aW9uPzogc3RyaW5nLFxyXG4gICAgbm90ZXM/OiBzdHJpbmcsXHJcbiAgICBzdGFydERhdGU/OiBEYXRlLFxyXG4gICAgZW5kRGF0ZT86IERhdGVcclxuICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW50ZXJhY3RpdmVseSBjcmVhdGUgYW4gZXZlbnQgd2l0aCBhZGRpdGlvbmFsIG9wdGlvbnMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RpdGxlXSAgVGhlIGV2ZW50IHRpdGxlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NhdGlvbl0gIFRoZSBldmVudCBsb2NhdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm90ZXNdICBUaGUgZXZlbnQgbm90ZXNcclxuICAgKiBAcGFyYW0ge0RhdGV9IFtzdGFydERhdGVdICBUaGUgZXZlbnQgc3RhcnQgZGF0ZVxyXG4gICAqIEBwYXJhbSB7RGF0ZX0gW2VuZERhdGVdICBUaGUgZXZlbnQgZW5kIGRhdGVcclxuICAgKiBAcGFyYW0ge0NhbGVuZGFyT3B0aW9uc30gW29wdGlvbnNdICBBZGRpdGlvbmFsIG9wdGlvbnMsIHNlZSBgZ2V0Q2FsZW5kYXJPcHRpb25zYFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNyZWF0ZUV2ZW50SW50ZXJhY3RpdmVseVdpdGhPcHRpb25zKFxyXG4gICAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICBsb2NhdGlvbj86IHN0cmluZyxcclxuICAgIG5vdGVzPzogc3RyaW5nLFxyXG4gICAgc3RhcnREYXRlPzogRGF0ZSxcclxuICAgIGVuZERhdGU/OiBEYXRlLFxyXG4gICAgb3B0aW9ucz86IENhbGVuZGFyT3B0aW9uc1xyXG4gICk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaW5kIGFuIGV2ZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gIFRoZSBldmVudCB0aXRsZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbG9jYXRpb25dICBUaGUgZXZlbnQgbG9jYXRpb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vdGVzXSAgVGhlIGV2ZW50IG5vdGVzXHJcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIGV2ZW50IHN0YXJ0IGRhdGVcclxuICAgKiBAcGFyYW0ge0RhdGV9IFtlbmREYXRlXSAgVGhlIGV2ZW50IGVuZCBkYXRlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZmluZEV2ZW50KHRpdGxlPzogc3RyaW5nLCBsb2NhdGlvbj86IHN0cmluZywgbm90ZXM/OiBzdHJpbmcsIHN0YXJ0RGF0ZT86IERhdGUsIGVuZERhdGU/OiBEYXRlKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgYW4gZXZlbnQgd2l0aCBhZGRpdGlvbmFsIG9wdGlvbnMuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gIFRoZSBldmVudCB0aXRsZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbG9jYXRpb25dICBUaGUgZXZlbnQgbG9jYXRpb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vdGVzXSAgVGhlIGV2ZW50IG5vdGVzXHJcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIGV2ZW50IHN0YXJ0IGRhdGVcclxuICAgKiBAcGFyYW0ge0RhdGV9IFtlbmREYXRlXSAgVGhlIGV2ZW50IGVuZCBkYXRlXHJcbiAgICogQHBhcmFtIHtDYWxlbmRhck9wdGlvbnN9IFtvcHRpb25zXSAgQWRkaXRpb25hbCBvcHRpb25zLCBzZWUgYGdldENhbGVuZGFyT3B0aW9uc2BcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGV2ZW50LCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGZpbmRFdmVudFdpdGhPcHRpb25zKFxyXG4gICAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICBsb2NhdGlvbj86IHN0cmluZyxcclxuICAgIG5vdGVzPzogc3RyaW5nLFxyXG4gICAgc3RhcnREYXRlPzogRGF0ZSxcclxuICAgIGVuZERhdGU/OiBEYXRlLFxyXG4gICAgb3B0aW9ucz86IENhbGVuZGFyT3B0aW9uc1xyXG4gICk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaW5kIGEgbGlzdCBvZiBldmVudHMgd2l0aGluIHRoZSBzcGVjaWZpZWQgZGF0ZSByYW5nZS4gKEFuZHJvaWQgb25seSlcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBzdGFydCBkYXRlXHJcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBlbmQgZGF0ZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbGlzdCBvZiBldmVudHMsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG4gIH0pXHJcbiAgbGlzdEV2ZW50c0luUmFuZ2Uoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIGxpc3Qgb2YgYWxsIGNhbGVuZGFycy5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsaXN0IG9mIGNhbGVuZGFycywgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBsaXN0Q2FsZW5kYXJzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSBsaXN0IG9mIGFsbCBmdXR1cmUgZXZlbnRzIGluIHRoZSBzcGVjaWZpZWQgY2FsZW5kYXIuIChpT1Mgb25seSlcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxpc3Qgb2YgZXZlbnRzLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxyXG4gIH0pXHJcbiAgZmluZEFsbEV2ZW50c0luTmFtZWRDYWxlbmRhcihjYWxlbmRhck5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNb2RpZnkgYW4gZXZlbnQuIChpT1Mgb25seSlcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdICBUaGUgZXZlbnQgdGl0bGVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2F0aW9uXSAgVGhlIGV2ZW50IGxvY2F0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub3Rlc10gIFRoZSBldmVudCBub3Rlc1xyXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBldmVudCBzdGFydCBkYXRlXHJcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBldmVudCBlbmQgZGF0ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmV3VGl0bGVdICBUaGUgbmV3IGV2ZW50IHRpdGxlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtuZXdMb2NhdGlvbl0gIFRoZSBuZXcgZXZlbnQgbG9jYXRpb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25ld05vdGVzXSAgVGhlIG5ldyBldmVudCBub3Rlc1xyXG4gICAqIEBwYXJhbSB7RGF0ZX0gW25ld1N0YXJ0RGF0ZV0gIFRoZSBuZXcgZXZlbnQgc3RhcnQgZGF0ZVxyXG4gICAqIEBwYXJhbSB7RGF0ZX0gW25ld0VuZERhdGVdICBUaGUgbmV3IGV2ZW50IGVuZCBkYXRlXHJcbiAgICogQHJldHVybiBSZXR1cm5zIGEgUHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHBsYXRmb3JtczogWydpT1MnXSxcclxuICB9KVxyXG4gIG1vZGlmeUV2ZW50KFxyXG4gICAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICBsb2NhdGlvbj86IHN0cmluZyxcclxuICAgIG5vdGVzPzogc3RyaW5nLFxyXG4gICAgc3RhcnREYXRlPzogRGF0ZSxcclxuICAgIGVuZERhdGU/OiBEYXRlLFxyXG4gICAgbmV3VGl0bGU/OiBzdHJpbmcsXHJcbiAgICBuZXdMb2NhdGlvbj86IHN0cmluZyxcclxuICAgIG5ld05vdGVzPzogc3RyaW5nLFxyXG4gICAgbmV3U3RhcnREYXRlPzogRGF0ZSxcclxuICAgIG5ld0VuZERhdGU/OiBEYXRlXHJcbiAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1vZGlmeSBhbiBldmVudCB3aXRoIGFkZGl0aW9uYWwgb3B0aW9ucy4gKGlPUyBvbmx5KVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gIFRoZSBldmVudCB0aXRsZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbG9jYXRpb25dICBUaGUgZXZlbnQgbG9jYXRpb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vdGVzXSAgVGhlIGV2ZW50IG5vdGVzXHJcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIGV2ZW50IHN0YXJ0IGRhdGVcclxuICAgKiBAcGFyYW0ge0RhdGV9IFtlbmREYXRlXSAgVGhlIGV2ZW50IGVuZCBkYXRlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtuZXdUaXRsZV0gIFRoZSBuZXcgZXZlbnQgdGl0bGVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25ld0xvY2F0aW9uXSAgVGhlIG5ldyBldmVudCBsb2NhdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmV3Tm90ZXNdICBUaGUgbmV3IGV2ZW50IG5vdGVzXHJcbiAgICogQHBhcmFtIHtEYXRlfSBbbmV3U3RhcnREYXRlXSAgVGhlIG5ldyBldmVudCBzdGFydCBkYXRlXHJcbiAgICogQHBhcmFtIHtEYXRlfSBbbmV3RW5kRGF0ZV0gIFRoZSBuZXcgZXZlbnQgZW5kIGRhdGVcclxuICAgKiBAcGFyYW0ge0NhbGVuZGFyT3B0aW9uc30gW2ZpbHRlck9wdGlvbnNdIEV2ZW50IE9wdGlvbnMsIHNlZSBgZ2V0Q2FsZW5kYXJPcHRpb25zYFxyXG4gICAqIEBwYXJhbSB7Q2FsZW5kYXJPcHRpb25zfSBbbmV3T3B0aW9uc10gIE5ldyBldmVudCBvcHRpb25zLCBzZWUgYGdldENhbGVuZGFyT3B0aW9uc2BcclxuICAgKiBAcmV0dXJuIFJldHVybnMgYSBQcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxyXG4gIH0pXHJcbiAgbW9kaWZ5RXZlbnRXaXRoT3B0aW9ucyhcclxuICAgIHRpdGxlPzogc3RyaW5nLFxyXG4gICAgbG9jYXRpb24/OiBzdHJpbmcsXHJcbiAgICBub3Rlcz86IHN0cmluZyxcclxuICAgIHN0YXJ0RGF0ZT86IERhdGUsXHJcbiAgICBlbmREYXRlPzogRGF0ZSxcclxuICAgIG5ld1RpdGxlPzogc3RyaW5nLFxyXG4gICAgbmV3TG9jYXRpb24/OiBzdHJpbmcsXHJcbiAgICBuZXdOb3Rlcz86IHN0cmluZyxcclxuICAgIG5ld1N0YXJ0RGF0ZT86IERhdGUsXHJcbiAgICBuZXdFbmREYXRlPzogRGF0ZSxcclxuICAgIGZpbHRlck9wdGlvbnM/OiBDYWxlbmRhck9wdGlvbnMsXHJcbiAgICBuZXdPcHRpb25zPzogQ2FsZW5kYXJPcHRpb25zXHJcbiAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZSBhbiBldmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdICBUaGUgZXZlbnQgdGl0bGVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2F0aW9uXSAgVGhlIGV2ZW50IGxvY2F0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub3Rlc10gIFRoZSBldmVudCBub3Rlc1xyXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBldmVudCBzdGFydCBkYXRlXHJcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBldmVudCBlbmQgZGF0ZVxyXG4gICAqIEByZXR1cm4gUmV0dXJucyBhIFByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZGVsZXRlRXZlbnQodGl0bGU/OiBzdHJpbmcsIGxvY2F0aW9uPzogc3RyaW5nLCBub3Rlcz86IHN0cmluZywgc3RhcnREYXRlPzogRGF0ZSwgZW5kRGF0ZT86IERhdGUpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlIGFuIGV2ZW50IGZyb20gdGhlIHNwZWNpZmllZCBDYWxlbmRhci4gKGlPUyBvbmx5KVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gIFRoZSBldmVudCB0aXRsZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbG9jYXRpb25dICBUaGUgZXZlbnQgbG9jYXRpb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vdGVzXSAgVGhlIGV2ZW50IG5vdGVzXHJcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIGV2ZW50IHN0YXJ0IGRhdGVcclxuICAgKiBAcGFyYW0ge0RhdGV9IFtlbmREYXRlXSAgVGhlIGV2ZW50IGVuZCBkYXRlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhbGVuZGFyTmFtZVxyXG4gICAqIEByZXR1cm4gUmV0dXJucyBhIFByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXHJcbiAgfSlcclxuICBkZWxldGVFdmVudEZyb21OYW1lZENhbGVuZGFyKFxyXG4gICAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICBsb2NhdGlvbj86IHN0cmluZyxcclxuICAgIG5vdGVzPzogc3RyaW5nLFxyXG4gICAgc3RhcnREYXRlPzogRGF0ZSxcclxuICAgIGVuZERhdGU/OiBEYXRlLFxyXG4gICAgY2FsZW5kYXJOYW1lPzogc3RyaW5nXHJcbiAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZSBhbiBldmVudCBieSBpZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbaWRdICBUaGUgZXZlbnQgaWRcclxuICAgKiBAcGFyYW0ge0RhdGV9IFtmcm9tRGF0ZV0gIFRoZSBkYXRlIHdoZXJlIGl0IHN0YXJ0IGRlbGV0aW5nIGZyb21cclxuICAgKiBAcmV0dXJuIFJldHVybnMgYSBQcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRlbGV0ZUV2ZW50QnlJZChpZDogc3RyaW5nLCBmcm9tRGF0ZT86IERhdGUpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbiB0aGUgY2FsZW5kYXIgYXQgdGhlIHNwZWNpZmllZCBkYXRlLlxyXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBUaGUgZGF0ZSB5b3Ugd2FudCB0byBvcGVuIHRoZSBjYWxlbmRhciBvblxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUHJvbWlzZSByZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBvcGVuQ2FsZW5kYXIoZGF0ZTogRGF0ZSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==