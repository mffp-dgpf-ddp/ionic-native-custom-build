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
import { IonicNativePlugin, checkAvailability, cordova, getPromise } from '@ionic-native/core';
var EmailComposerOriginal = /** @class */ (function (_super) {
    __extends(EmailComposerOriginal, _super);
    function EmailComposerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailComposerOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposerOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposerOriginal.prototype.hasAccount = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    EmailComposerOriginal.getPlugin().hasAccount(function (result) {
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
    EmailComposerOriginal.prototype.hasClient = function (app) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    if (app) {
                        EmailComposerOriginal.getPlugin().hasClient(app, function (result) {
                            if (result) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        });
                    }
                    else {
                        EmailComposerOriginal.getPlugin().getClients(function (apps) {
                            resolve(apps && apps.length > 0);
                        });
                    }
                });
            }
        })();
    };
    EmailComposerOriginal.prototype.getClients = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    EmailComposerOriginal.getPlugin().getClients(function (apps) {
                        if (Object.prototype.toString.call(apps) === '[object String]') {
                            apps = [apps];
                        }
                        resolve(apps);
                    });
                });
            }
        })();
    };
    EmailComposerOriginal.prototype.isAvailable = function (app) {
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
    EmailComposerOriginal.prototype.open = function (options, scope) { return cordova(this, "open", { "successIndex": 1, "errorIndex": 3 }, arguments); };
    EmailComposerOriginal.prototype.addAlias = function (alias, packageName) { return cordova(this, "addAlias", {}, arguments); };
    EmailComposerOriginal.pluginName = "EmailComposer";
    EmailComposerOriginal.plugin = "cordova-plugin-email-composer";
    EmailComposerOriginal.pluginRef = "cordova.plugins.email";
    EmailComposerOriginal.repo = "https://github.com/katzer/cordova-plugin-email-composer";
    EmailComposerOriginal.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows", "macOS"];
    return EmailComposerOriginal;
}(IonicNativePlugin));
var EmailComposer = new EmailComposerOriginal();
export { EmailComposer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2VtYWlsLWNvbXBvc2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLGlEQUFvRCxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFtSS9ELGlDQUFpQjs7OztJQVNsRCxxQ0FBYTtJQVliLHlDQUFpQjtJQVVqQixrQ0FBVTs7O21EQUFpQjtnQkFDekIsT0FBTyxVQUFVLENBQVUsVUFBQSxPQUFPO29CQUNoQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQUMsTUFBZTt3QkFDbkQsSUFBSSxNQUFNLEVBQUU7NEJBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNmOzZCQUFNOzRCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDaEI7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBVUQsaUNBQVMsYUFBQyxHQUFZOzs7bURBQWdCO2dCQUNwQyxPQUFPLFVBQVUsQ0FBVSxVQUFBLE9BQU87b0JBQ2hDLElBQUksR0FBRyxFQUFFO3dCQUNQLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFVBQUMsTUFBZTs0QkFDdkQsSUFBSSxNQUFNLEVBQUU7Z0NBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOzZCQUNmO2lDQUFNO2dDQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs2QkFDaEI7d0JBQ0gsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7eUJBQU07d0JBQ0wsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFDLElBQWM7NEJBQ2xELE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDbkMsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBU0Qsa0NBQVU7OzttREFBc0I7Z0JBQzlCLE9BQU8sVUFBVSxDQUFXLFVBQUEsT0FBTztvQkFDakMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFDLElBQVM7d0JBQzdDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLGlCQUFpQixFQUFFOzRCQUM5RCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDZjt3QkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hCLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQVNELG1DQUFXLGFBQUMsR0FBWTs7O21EQUFnQjtnQkFDdEMsT0FBTyxVQUFVLENBQVUsVUFBQSxPQUFPO29CQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO3dCQUM5RCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25FLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQWFELDRCQUFJLGFBQUMsT0FBNkIsRUFBRSxLQUFXO0lBVy9DLGdDQUFRLGFBQUMsS0FBYSxFQUFFLFdBQW1COzs7Ozs7d0JBaFE3QztFQW9JbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFDaGVjaywgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiwgZ2V0UHJvbWlzZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVtYWlsQ29tcG9zZXJPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBBcHAgdG8gc2VuZCB0aGUgZW1haWwgd2l0aFxyXG4gICAqL1xyXG4gIGFwcD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRW1haWwgYWRkcmVzcyhlcykgZm9yIFRvIGZpZWxkXHJcbiAgICovXHJcbiAgdG8/OiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogRW1haWwgYWRkcmVzcyhlcykgZm9yIENDIGZpZWxkXHJcbiAgICovXHJcbiAgY2M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogRW1haWwgYWRkcmVzcyhlcykgZm9yIEJDQyBmaWVsZFxyXG4gICAqL1xyXG4gIGJjYz86IHN0cmluZyB8IHN0cmluZ1tdO1xyXG5cclxuICAvKipcclxuICAgKiBGaWxlIHBhdGhzIG9yIGJhc2U2NCBkYXRhIHN0cmVhbXNcclxuICAgKi9cclxuICBhdHRhY2htZW50cz86IHN0cmluZ1tdO1xyXG5cclxuICAvKipcclxuICAgKiBTdWJqZWN0IG9mIHRoZSBlbWFpbFxyXG4gICAqL1xyXG4gIHN1YmplY3Q/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtYWlsIGJvZHkgKGZvciBIVE1MLCBzZXQgaXNIdG1sIHRvIHRydWUpXHJcbiAgICovXHJcbiAgYm9keT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGlmIHRoZSBib2R5IGlzIEhUTUwgb3IgcGxhaW4gdGV4dFxyXG4gICAqL1xyXG4gIGlzSHRtbD86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqICBDb250ZW50IHR5cGUgb2YgdGhlIGVtYWlsIChBbmRyb2lkIG9ubHkpXHJcbiAgICovXHJcbiAgdHlwZT86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEVtYWlsIENvbXBvc2VyXHJcbiAqIEBwcmVtaWVyIGVtYWlsLWNvbXBvc2VyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tZW1haWwtY29tcG9zZXIuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtFbWFpbCBDb21wb3NlciBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2h5cGVyeTJrL2NvcmRvdmEtZW1haWwtcGx1Z2luKS5cclxuICpcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRW1haWxDb21wb3NlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZW1haWwtY29tcG9zZXIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBlbWFpbENvbXBvc2VyOiBFbWFpbENvbXBvc2VyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5nZXRDbGllbnRzKCkudGhlbigoYXBwczogW10pID0+IHtcclxuICogICAgLy8gUmV0dXJucyBhbiBhcnJheSBvZiBjb25maWd1cmVkIGVtYWlsIGNsaWVudHMgZm9yIHRoZSBkZXZpY2VcclxuICogfSk7XHJcbiAqXHJcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5oYXNDbGllbnQoKS50aGVuKGFwcCwgKGlzVmFsaWQ6IGJvb2xlYW4pID0+IHtcclxuICogIGlmIChpc1ZhbGlkKSB7XHJcbiAqICAgIC8vIE5vdyB3ZSBrbm93IHdlIGhhdmUgYSB2YWxpZCBlbWFpbCBjbGllbnQgY29uZmlndXJlZFxyXG4gKiAgICAvLyBOb3Qgc3BlY2lmeWluZyBhbiBhcHAgd2lsbCByZXR1cm4gdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgZW1haWwgY2xpZW50IGlzIGNvbmZpZ3VyZWRcclxuICogIH1cclxuICogfSk7XHJcbiAqXHJcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5oYXNBY2NvdW50KCkudGhlbigoaXNWYWxpZDogYm9vbGVhbikgPT4ge1xyXG4gKiAgaWYgKGlzVmFsaWQpIHtcclxuICogICAgLy8gTm93IHdlIGtub3cgd2UgaGF2ZSBhIHZhbGlkIGVtYWlsIGFjY291bnQgY29uZmlndXJlZFxyXG4gKiAgfVxyXG4gKiB9KTtcclxuICpcclxuICogdGhpcy5lbWFpbENvbXBvc2VyLmlzQXZhaWxhYmxlKCkudGhlbihhcHAsIChhdmFpbGFibGU6IGJvb2xlYW4pID0+IHtcclxuICogIGlmKGF2YWlsYWJsZSkge1xyXG4gKiAgICAvLyBOb3cgd2Uga25vdyB3ZSBjYW4gc2VuZCBhbiBlbWFpbCwgY2FsbHMgaGFzQ2xpZW50IGFuZCBoYXNBY2NvdW50XHJcbiAqICAgIC8vIE5vdCBzcGVjaWZ5aW5nIGFuIGFwcCB3aWxsIHJldHVybiB0cnVlIGlmIGF0IGxlYXN0IG9uZSBlbWFpbCBjbGllbnQgaXMgY29uZmlndXJlZFxyXG4gKiAgfVxyXG4gKiB9KTtcclxuICpcclxuICogbGV0IGVtYWlsID0ge1xyXG4gKiAgIHRvOiAnbWF4QG11c3Rlcm1hbm4uZGUnLFxyXG4gKiAgIGNjOiAnZXJpa2FAbXVzdGVybWFubi5kZScsXHJcbiAqICAgYmNjOiBbJ2pvaG5AZG9lLmNvbScsICdqYW5lQGRvZS5jb20nXSxcclxuICogICBhdHRhY2htZW50czogW1xyXG4gKiAgICAgJ2ZpbGU6Ly9pbWcvbG9nby5wbmcnLFxyXG4gKiAgICAgJ3JlczovL2ljb24ucG5nJyxcclxuICogICAgICdiYXNlNjQ6aWNvbi5wbmcvL2lWQk9SdzBLR2dvQUFBQU5TVWhFVWcuLi4nLFxyXG4gKiAgICAgJ2ZpbGU6Ly9SRUFETUUucGRmJ1xyXG4gKiAgIF0sXHJcbiAqICAgc3ViamVjdDogJ0NvcmRvdmEgSWNvbnMnLFxyXG4gKiAgIGJvZHk6ICdIb3cgYXJlIHlvdT8gTmljZSBncmVldGluZ3MgZnJvbSBMZWlwemlnJyxcclxuICogICBpc0h0bWw6IHRydWVcclxuICogfVxyXG4gKlxyXG4gKiAvLyBTZW5kIGEgdGV4dCBtZXNzYWdlIHVzaW5nIGRlZmF1bHQgb3B0aW9uc1xyXG4gKiB0aGlzLmVtYWlsQ29tcG9zZXIub3BlbihlbWFpbCk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBZb3UgY2FuIGFsc28gYXNzaWduIGFsaWFzZXMgdG8gZW1haWwgYXBwc1xyXG4gKiBgYGB0c1xyXG4gKiAvLyBhZGQgYWxpYXNcclxuICogdGhpcy5lbWFpbC5hZGRBbGlhcygnZ21haWwnLCAnY29tLmdvb2dsZS5hbmRyb2lkLmdtJyk7XHJcbiAqXHJcbiAqIC8vIHRoZW4gdXNlIGFsaWFzIHdoZW4gc2VuZGluZyBlbWFpbFxyXG4gKiB0aGlzLmVtYWlsLm9wZW4oe1xyXG4gKiAgIGFwcDogJ2dtYWlsJyxcclxuICogICAuLi5cclxuICogfSk7XHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBFbWFpbENvbXBvc2VyT3B0aW9uc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0VtYWlsQ29tcG9zZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWVtYWlsLWNvbXBvc2VyJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuZW1haWwnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWVtYWlsLWNvbXBvc2VyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJywgJ21hY09TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVtYWlsQ29tcG9zZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSBhcHAgaGFzIGEgcGVybWlzc2lvbiB0byBhY2Nlc3MgZW1haWwgYWNjb3VudHMgaW5mb3JtYXRpb25cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBwZXJtaXNzaW9uIHdhcyBncmFudGVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxyXG4gICAgZXJyb3JJbmRleDogMixcclxuICB9KVxyXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb24gdG8gYWNjZXNzIGVtYWlsIGFjY291bnRzIGluZm9ybWF0aW9uXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgcGVybWlzc2lvbiB3YXMgZ3JhbnRlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN1Y2Nlc3NJbmRleDogMCxcclxuICAgIGVycm9ySW5kZXg6IDIsXHJcbiAgfSlcclxuICByZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZlcmlmaWVzIGlmIGFuIGVtYWlsIGFjY291bnQgaXMgY29uZmlndXJlZCBvbiB0aGUgZGV2aWNlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgaWYgYXZhaWxhYmxlLCByZWplY3RzIGlmIG5vdCBhdmFpbGFibGVcclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBoYXNBY2NvdW50KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxib29sZWFuPihyZXNvbHZlID0+IHtcclxuICAgICAgRW1haWxDb21wb3Nlci5nZXRQbHVnaW4oKS5oYXNBY2NvdW50KChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWZXJpZmllcyBpZiBhIHNwZWNpZmljIGVtYWlsIGNsaWVudCBpcyBpbnN0YWxsZWQgb24gdGhlIGRldmljZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBwXSBBcHAgaWQgb3IgdXJpIHNjaGVtZS5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBpZiBhdmFpbGFibGUsIHJlamVjdHMgaWYgbm90IGF2YWlsYWJsZVxyXG4gICAqL1xyXG5cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBoYXNDbGllbnQoYXBwPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBnZXRQcm9taXNlPGJvb2xlYW4+KHJlc29sdmUgPT4ge1xyXG4gICAgICBpZiAoYXBwKSB7XHJcbiAgICAgICAgRW1haWxDb21wb3Nlci5nZXRQbHVnaW4oKS5oYXNDbGllbnQoYXBwLCAocmVzdWx0OiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBFbWFpbENvbXBvc2VyLmdldFBsdWdpbigpLmdldENsaWVudHMoKGFwcHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKGFwcHMgJiYgYXBwcy5sZW5ndGggPiAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGVtYWlsIGNsaWVudHMgaW5zdGFsbGVkIG9uIHRoZSBkZXZpY2UuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmdbXT59IFJlc29sdmVzIGlmIGF2YWlsYWJsZSwgcmVqZWN0cyBpZiBub3QgYXZhaWxhYmxlXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIH0pXHJcbiAgZ2V0Q2xpZW50cygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxzdHJpbmdbXT4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgIEVtYWlsQ29tcG9zZXIuZ2V0UGx1Z2luKCkuZ2V0Q2xpZW50cygoYXBwczogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcHBzKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcclxuICAgICAgICAgIGFwcHMgPSBbYXBwc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmUoYXBwcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWZXJpZmllcyBpZiBzZW5kaW5nIGVtYWlscyBpcyBzdXBwb3J0ZWQgb24gdGhlIGRldmljZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBwXSBBcHAgaWQgb3IgdXJpIHNjaGVtZS5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBpZiBhdmFpbGFibGUsIHJlamVjdHMgaWYgbm90IGF2YWlsYWJsZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGlzQXZhaWxhYmxlKGFwcD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxib29sZWFuPihyZXNvbHZlID0+IHtcclxuICAgICAgUHJvbWlzZS5hbGwoW3RoaXMuaGFzQWNjb3VudCwgdGhpcy5oYXNDbGllbnQoYXBwKV0pLnRoZW4ocmVzdWx0cyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0cy5sZW5ndGggPT09IDIgJiYgcmVzdWx0c1swXSAmJiByZXN1bHRzWzFdKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXlzIHRoZSBlbWFpbCBjb21wb3NlciBwcmUtZmlsbGVkIHdpdGggZGF0YS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RW1haWxDb21wb3Nlck9wdGlvbnN9IG9wdGlvbnMgRW1haWxcclxuICAgKiBAcGFyYW0ge2FueX0gW3Njb3BlXSBTY29wZSBmb3IgdGhlIHByb21pc2VcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBwcm9taXNlIHdoZW4gdGhlIEVtYWlsQ29tcG9zZXIgaGFzIGJlZW4gb3BlbmVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAxLFxyXG4gICAgZXJyb3JJbmRleDogMyxcclxuICB9KVxyXG4gIG9wZW4ob3B0aW9uczogRW1haWxDb21wb3Nlck9wdGlvbnMsIHNjb3BlPzogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSBuZXcgbWFpbCBhcHAgYWxpYXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWxpYXMgVGhlIGFsaWFzIG5hbWVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFja2FnZU5hbWUgVGhlIHBhY2thZ2UgbmFtZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBhZGRBbGlhcyhhbGlhczogc3RyaW5nLCBwYWNrYWdlTmFtZTogc3RyaW5nKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==