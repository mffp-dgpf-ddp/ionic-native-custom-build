import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, checkAvailability, cordova, getPromise } from '@ionic-native/core';
var EmailComposer = /** @class */ (function (_super) {
    __extends(EmailComposer, _super);
    function EmailComposer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailComposer.prototype.hasPermission = function () { return cordova(this, "hasPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposer.prototype.requestPermission = function () { return cordova(this, "requestPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposer.prototype.hasAccount = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    EmailComposer.getPlugin().hasAccount(function (result) {
                        if (result) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.hasClient = function (app) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    if (app) {
                        EmailComposer.getPlugin().hasClient(app, function (result) {
                            if (result) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        });
                    }
                    else {
                        EmailComposer.getPlugin().getClients(function (apps) {
                            resolve(apps && apps.length > 0);
                        });
                    }
                });
            }
        })();
    };
    EmailComposer.prototype.getClients = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    EmailComposer.getPlugin().getClients(function (apps) {
                        if (Object.prototype.toString.call(apps) === '[object String]') {
                            apps = [apps];
                        }
                        resolve(apps);
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.isAvailable = function (app) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    Promise.all([_this.hasAccount, _this.hasClient(app)]).then(function (results) {
                        return resolve(results.length === 2 && results[0] && results[1]);
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.open = function (options, scope) { return cordova(this, "open", { "successIndex": 1, "errorIndex": 3 }, arguments); };
    EmailComposer.prototype.addAlias = function (alias, packageName) { return cordova(this, "addAlias", {}, arguments); };
    EmailComposer.pluginName = "EmailComposer";
    EmailComposer.plugin = "cordova-plugin-email-composer";
    EmailComposer.pluginRef = "cordova.plugins.email";
    EmailComposer.repo = "https://github.com/katzer/cordova-plugin-email-composer";
    EmailComposer.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows", "macOS"];
    EmailComposer = __decorate([
        Injectable()
    ], EmailComposer);
    return EmailComposer;
}(IonicNativePlugin));
export { EmailComposer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2VtYWlsLWNvbXBvc2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLGlEQUFvRCxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFtSS9ELGlDQUFpQjs7OztJQVNsRCxxQ0FBYTtJQVliLHlDQUFpQjtJQVVqQixrQ0FBVTs7O21EQUFpQjtnQkFDekIsT0FBTyxVQUFVLENBQVUsVUFBQSxPQUFPO29CQUNoQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQUMsTUFBZTt3QkFDbkQsSUFBSSxNQUFNLEVBQUU7NEJBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNmOzZCQUFNOzRCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDaEI7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBVUQsaUNBQVMsYUFBQyxHQUFZOzs7bURBQWdCO2dCQUNwQyxPQUFPLFVBQVUsQ0FBVSxVQUFBLE9BQU87b0JBQ2hDLElBQUksR0FBRyxFQUFFO3dCQUNQLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFVBQUMsTUFBZTs0QkFDdkQsSUFBSSxNQUFNLEVBQUU7Z0NBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOzZCQUNmO2lDQUFNO2dDQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs2QkFDaEI7d0JBQ0gsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7eUJBQU07d0JBQ0wsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFDLElBQWM7NEJBQ2xELE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDbkMsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBU0Qsa0NBQVU7OzttREFBc0I7Z0JBQzlCLE9BQU8sVUFBVSxDQUFXLFVBQUEsT0FBTztvQkFDakMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFDLElBQVM7d0JBQzdDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLGlCQUFpQixFQUFFOzRCQUM5RCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDZjt3QkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hCLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQVNELG1DQUFXLGFBQUMsR0FBWTs7O21EQUFnQjtnQkFDdEMsT0FBTyxVQUFVLENBQVUsVUFBQSxPQUFPO29CQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO3dCQUM5RCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25FLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQWFELDRCQUFJLGFBQUMsT0FBNkIsRUFBRSxLQUFXO0lBVy9DLGdDQUFRLGFBQUMsS0FBYSxFQUFFLFdBQW1COzs7Ozs7SUE1SGhDLGFBQWE7UUFEekIsVUFBVSxFQUFFO09BQ0EsYUFBYTt3QkFwSTFCO0VBb0ltQyxpQkFBaUI7U0FBdkMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YUNoZWNrLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luLCBnZXRQcm9taXNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRW1haWxDb21wb3Nlck9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIEFwcCB0byBzZW5kIHRoZSBlbWFpbCB3aXRoXHJcbiAgICovXHJcbiAgYXBwPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBFbWFpbCBhZGRyZXNzKGVzKSBmb3IgVG8gZmllbGRcclxuICAgKi9cclxuICB0bz86IHN0cmluZyB8IHN0cmluZ1tdO1xyXG5cclxuICAvKipcclxuICAgKiBFbWFpbCBhZGRyZXNzKGVzKSBmb3IgQ0MgZmllbGRcclxuICAgKi9cclxuICBjYz86IHN0cmluZyB8IHN0cmluZ1tdO1xyXG5cclxuICAvKipcclxuICAgKiBFbWFpbCBhZGRyZXNzKGVzKSBmb3IgQkNDIGZpZWxkXHJcbiAgICovXHJcbiAgYmNjPzogc3RyaW5nIHwgc3RyaW5nW107XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbGUgcGF0aHMgb3IgYmFzZTY0IGRhdGEgc3RyZWFtc1xyXG4gICAqL1xyXG4gIGF0dGFjaG1lbnRzPzogc3RyaW5nW107XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YmplY3Qgb2YgdGhlIGVtYWlsXHJcbiAgICovXHJcbiAgc3ViamVjdD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRW1haWwgYm9keSAoZm9yIEhUTUwsIHNldCBpc0h0bWwgdG8gdHJ1ZSlcclxuICAgKi9cclxuICBib2R5Pzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIGJvZHkgaXMgSFRNTCBvciBwbGFpbiB0ZXh0XHJcbiAgICovXHJcbiAgaXNIdG1sPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogIENvbnRlbnQgdHlwZSBvZiB0aGUgZW1haWwgKEFuZHJvaWQgb25seSlcclxuICAgKi9cclxuICB0eXBlPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgRW1haWwgQ29tcG9zZXJcclxuICogQHByZW1pZXIgZW1haWwtY29tcG9zZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1lbWFpbC1jb21wb3Nlci4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0VtYWlsIENvbXBvc2VyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vaHlwZXJ5MmsvY29yZG92YS1lbWFpbC1wbHVnaW4pLlxyXG4gKlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBFbWFpbENvbXBvc2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9lbWFpbC1jb21wb3Nlci9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtYWlsQ29tcG9zZXI6IEVtYWlsQ29tcG9zZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5lbWFpbENvbXBvc2VyLmdldENsaWVudHMoKS50aGVuKChhcHBzOiBbXSkgPT4ge1xyXG4gKiAgICAvLyBSZXR1cm5zIGFuIGFycmF5IG9mIGNvbmZpZ3VyZWQgZW1haWwgY2xpZW50cyBmb3IgdGhlIGRldmljZVxyXG4gKiB9KTtcclxuICpcclxuICogdGhpcy5lbWFpbENvbXBvc2VyLmhhc0NsaWVudCgpLnRoZW4oYXBwLCAoaXNWYWxpZDogYm9vbGVhbikgPT4ge1xyXG4gKiAgaWYgKGlzVmFsaWQpIHtcclxuICogICAgLy8gTm93IHdlIGtub3cgd2UgaGF2ZSBhIHZhbGlkIGVtYWlsIGNsaWVudCBjb25maWd1cmVkXHJcbiAqICAgIC8vIE5vdCBzcGVjaWZ5aW5nIGFuIGFwcCB3aWxsIHJldHVybiB0cnVlIGlmIGF0IGxlYXN0IG9uZSBlbWFpbCBjbGllbnQgaXMgY29uZmlndXJlZFxyXG4gKiAgfVxyXG4gKiB9KTtcclxuICpcclxuICogdGhpcy5lbWFpbENvbXBvc2VyLmhhc0FjY291bnQoKS50aGVuKChpc1ZhbGlkOiBib29sZWFuKSA9PiB7XHJcbiAqICBpZiAoaXNWYWxpZCkge1xyXG4gKiAgICAvLyBOb3cgd2Uga25vdyB3ZSBoYXZlIGEgdmFsaWQgZW1haWwgYWNjb3VudCBjb25maWd1cmVkXHJcbiAqICB9XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiB0aGlzLmVtYWlsQ29tcG9zZXIuaXNBdmFpbGFibGUoKS50aGVuKGFwcCwgKGF2YWlsYWJsZTogYm9vbGVhbikgPT4ge1xyXG4gKiAgaWYoYXZhaWxhYmxlKSB7XHJcbiAqICAgIC8vIE5vdyB3ZSBrbm93IHdlIGNhbiBzZW5kIGFuIGVtYWlsLCBjYWxscyBoYXNDbGllbnQgYW5kIGhhc0FjY291bnRcclxuICogICAgLy8gTm90IHNwZWNpZnlpbmcgYW4gYXBwIHdpbGwgcmV0dXJuIHRydWUgaWYgYXQgbGVhc3Qgb25lIGVtYWlsIGNsaWVudCBpcyBjb25maWd1cmVkXHJcbiAqICB9XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiBsZXQgZW1haWwgPSB7XHJcbiAqICAgdG86ICdtYXhAbXVzdGVybWFubi5kZScsXHJcbiAqICAgY2M6ICdlcmlrYUBtdXN0ZXJtYW5uLmRlJyxcclxuICogICBiY2M6IFsnam9obkBkb2UuY29tJywgJ2phbmVAZG9lLmNvbSddLFxyXG4gKiAgIGF0dGFjaG1lbnRzOiBbXHJcbiAqICAgICAnZmlsZTovL2ltZy9sb2dvLnBuZycsXHJcbiAqICAgICAncmVzOi8vaWNvbi5wbmcnLFxyXG4gKiAgICAgJ2Jhc2U2NDppY29uLnBuZy8vaVZCT1J3MEtHZ29BQUFBTlNVaEVVZy4uLicsXHJcbiAqICAgICAnZmlsZTovL1JFQURNRS5wZGYnXHJcbiAqICAgXSxcclxuICogICBzdWJqZWN0OiAnQ29yZG92YSBJY29ucycsXHJcbiAqICAgYm9keTogJ0hvdyBhcmUgeW91PyBOaWNlIGdyZWV0aW5ncyBmcm9tIExlaXB6aWcnLFxyXG4gKiAgIGlzSHRtbDogdHJ1ZVxyXG4gKiB9XHJcbiAqXHJcbiAqIC8vIFNlbmQgYSB0ZXh0IG1lc3NhZ2UgdXNpbmcgZGVmYXVsdCBvcHRpb25zXHJcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5vcGVuKGVtYWlsKTtcclxuICogYGBgXHJcbiAqXHJcbiAqIFlvdSBjYW4gYWxzbyBhc3NpZ24gYWxpYXNlcyB0byBlbWFpbCBhcHBzXHJcbiAqIGBgYHRzXHJcbiAqIC8vIGFkZCBhbGlhc1xyXG4gKiB0aGlzLmVtYWlsLmFkZEFsaWFzKCdnbWFpbCcsICdjb20uZ29vZ2xlLmFuZHJvaWQuZ20nKTtcclxuICpcclxuICogLy8gdGhlbiB1c2UgYWxpYXMgd2hlbiBzZW5kaW5nIGVtYWlsXHJcbiAqIHRoaXMuZW1haWwub3Blbih7XHJcbiAqICAgYXBwOiAnZ21haWwnLFxyXG4gKiAgIC4uLlxyXG4gKiB9KTtcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIEVtYWlsQ29tcG9zZXJPcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRW1haWxDb21wb3NlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZW1haWwtY29tcG9zZXInLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5lbWFpbCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tZW1haWwtY29tcG9zZXInLFxyXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnLCAnbWFjT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRW1haWxDb21wb3NlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIGFwcCBoYXMgYSBwZXJtaXNzaW9uIHRvIGFjY2VzcyBlbWFpbCBhY2NvdW50cyBpbmZvcm1hdGlvblxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIHBlcm1pc3Npb24gd2FzIGdyYW50ZWRcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDAsXHJcbiAgICBlcnJvckluZGV4OiAyLFxyXG4gIH0pXHJcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvbiB0byBhY2Nlc3MgZW1haWwgYWNjb3VudHMgaW5mb3JtYXRpb25cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBwZXJtaXNzaW9uIHdhcyBncmFudGVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxyXG4gICAgZXJyb3JJbmRleDogMixcclxuICB9KVxyXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZpZXMgaWYgYW4gZW1haWwgYWNjb3VudCBpcyBjb25maWd1cmVkIG9uIHRoZSBkZXZpY2UuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBpZiBhdmFpbGFibGUsIHJlamVjdHMgaWYgbm90IGF2YWlsYWJsZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGhhc0FjY291bnQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBnZXRQcm9taXNlPGJvb2xlYW4+KHJlc29sdmUgPT4ge1xyXG4gICAgICBFbWFpbENvbXBvc2VyLmdldFBsdWdpbigpLmhhc0FjY291bnQoKHJlc3VsdDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZlcmlmaWVzIGlmIGEgc3BlY2lmaWMgZW1haWwgY2xpZW50IGlzIGluc3RhbGxlZCBvbiB0aGUgZGV2aWNlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFthcHBdIEFwcCBpZCBvciB1cmkgc2NoZW1lLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIGlmIGF2YWlsYWJsZSwgcmVqZWN0cyBpZiBub3QgYXZhaWxhYmxlXHJcbiAgICovXHJcblxyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGhhc0NsaWVudChhcHA/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIGdldFByb21pc2U8Ym9vbGVhbj4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGlmIChhcHApIHtcclxuICAgICAgICBFbWFpbENvbXBvc2VyLmdldFBsdWdpbigpLmhhc0NsaWVudChhcHAsIChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIEVtYWlsQ29tcG9zZXIuZ2V0UGx1Z2luKCkuZ2V0Q2xpZW50cygoYXBwczogc3RyaW5nW10pID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoYXBwcyAmJiBhcHBzLmxlbmd0aCA+IDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgZW1haWwgY2xpZW50cyBpbnN0YWxsZWQgb24gdGhlIGRldmljZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZ1tdPn0gUmVzb2x2ZXMgaWYgYXZhaWxhYmxlLCByZWplY3RzIGlmIG5vdCBhdmFpbGFibGVcclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcclxuICBnZXRDbGllbnRzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgIHJldHVybiBnZXRQcm9taXNlPHN0cmluZ1tdPihyZXNvbHZlID0+IHtcclxuICAgICAgRW1haWxDb21wb3Nlci5nZXRQbHVnaW4oKS5nZXRDbGllbnRzKChhcHBzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFwcHMpID09PSAnW29iamVjdCBTdHJpbmddJykge1xyXG4gICAgICAgICAgYXBwcyA9IFthcHBzXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZShhcHBzKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZlcmlmaWVzIGlmIHNlbmRpbmcgZW1haWxzIGlzIHN1cHBvcnRlZCBvbiB0aGUgZGV2aWNlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFthcHBdIEFwcCBpZCBvciB1cmkgc2NoZW1lLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIGlmIGF2YWlsYWJsZSwgcmVqZWN0cyBpZiBub3QgYXZhaWxhYmxlXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgaXNBdmFpbGFibGUoYXBwPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBnZXRQcm9taXNlPGJvb2xlYW4+KHJlc29sdmUgPT4ge1xyXG4gICAgICBQcm9taXNlLmFsbChbdGhpcy5oYXNBY2NvdW50LCB0aGlzLmhhc0NsaWVudChhcHApXSkudGhlbihyZXN1bHRzID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHRzLmxlbmd0aCA9PT0gMiAmJiByZXN1bHRzWzBdICYmIHJlc3VsdHNbMV0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGxheXMgdGhlIGVtYWlsIGNvbXBvc2VyIHByZS1maWxsZWQgd2l0aCBkYXRhLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbWFpbENvbXBvc2VyT3B0aW9uc30gb3B0aW9ucyBFbWFpbFxyXG4gICAqIEBwYXJhbSB7YW55fSBbc2NvcGVdIFNjb3BlIGZvciB0aGUgcHJvbWlzZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIHByb21pc2Ugd2hlbiB0aGUgRW1haWxDb21wb3NlciBoYXMgYmVlbiBvcGVuZWRcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDEsXHJcbiAgICBlcnJvckluZGV4OiAzLFxyXG4gIH0pXHJcbiAgb3BlbihvcHRpb25zOiBFbWFpbENvbXBvc2VyT3B0aW9ucywgc2NvcGU/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIG5ldyBtYWlsIGFwcCBhbGlhcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhbGlhcyBUaGUgYWxpYXMgbmFtZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYWNrYWdlTmFtZSBUaGUgcGFja2FnZSBuYW1lXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGFkZEFsaWFzKGFsaWFzOiBzdHJpbmcsIHBhY2thZ2VOYW1lOiBzdHJpbmcpOiB2b2lkIHt9XHJcbn1cclxuIl19